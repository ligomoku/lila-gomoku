"use strict";
var zc = Object.defineProperty;
var Bc = (e, t, r) =>
  t in e
    ? zc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var is = (e, t, r) => Bc(e, typeof t != "symbol" ? t + "" : t, r);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const U = require("react"),
  Rr = require("react-dom");
function Zs(e) {
  const t = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const r in e)
      if (r !== "default") {
        const n = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(
          t,
          r,
          n.get ? n : { enumerable: !0, get: () => e[r] },
        );
      }
  }
  return (t.default = e), Object.freeze(t);
}
const d = Zs(U),
  qt = Zs(Rr);
function Vc(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (n) {
      var o = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        r,
        n,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            },
      );
    }),
    r
  );
}
var Cn = { exports: {} },
  Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls;
function Hc() {
  if (ls) return Ft;
  ls = 1;
  var e = U,
    t = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    n = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, l, u) {
    var f,
      p = {},
      h = null,
      v = null;
    u !== void 0 && (h = "" + u),
      l.key !== void 0 && (h = "" + l.key),
      l.ref !== void 0 && (v = l.ref);
    for (f in l) n.call(l, f) && !s.hasOwnProperty(f) && (p[f] = l[f]);
    if (i && i.defaultProps)
      for (f in ((l = i.defaultProps), l)) p[f] === void 0 && (p[f] = l[f]);
    return {
      $$typeof: t,
      type: i,
      key: h,
      ref: v,
      props: p,
      _owner: o.current,
    };
  }
  return (Ft.Fragment = r), (Ft.jsx = a), (Ft.jsxs = a), Ft;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cs;
function Uc() {
  return (
    cs ||
      ((cs = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var e = U,
            t = Symbol.for("react.element"),
            r = Symbol.for("react.portal"),
            n = Symbol.for("react.fragment"),
            o = Symbol.for("react.strict_mode"),
            s = Symbol.for("react.profiler"),
            a = Symbol.for("react.provider"),
            i = Symbol.for("react.context"),
            l = Symbol.for("react.forward_ref"),
            u = Symbol.for("react.suspense"),
            f = Symbol.for("react.suspense_list"),
            p = Symbol.for("react.memo"),
            h = Symbol.for("react.lazy"),
            v = Symbol.for("react.offscreen"),
            w = Symbol.iterator,
            m = "@@iterator";
          function g(x) {
            if (x === null || typeof x != "object") return null;
            var N = (w && x[w]) || x[m];
            return typeof N == "function" ? N : null;
          }
          var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function b(x) {
            {
              for (
                var N = arguments.length,
                  I = new Array(N > 1 ? N - 1 : 0),
                  ee = 1;
                ee < N;
                ee++
              )
                I[ee - 1] = arguments[ee];
              y("error", x, I);
            }
          }
          function y(x, N, I) {
            {
              var ee = S.ReactDebugCurrentFrame,
                ce = ee.getStackAddendum();
              ce !== "" && ((N += "%s"), (I = I.concat([ce])));
              var pe = I.map(function (le) {
                return String(le);
              });
              pe.unshift("Warning: " + N),
                Function.prototype.apply.call(console[x], console, pe);
            }
          }
          var E = !1,
            C = !1,
            T = !1,
            R = !1,
            k = !1,
            M;
          M = Symbol.for("react.module.reference");
          function W(x) {
            return !!(
              typeof x == "string" ||
              typeof x == "function" ||
              x === n ||
              x === s ||
              k ||
              x === o ||
              x === u ||
              x === f ||
              R ||
              x === v ||
              E ||
              C ||
              T ||
              (typeof x == "object" &&
                x !== null &&
                (x.$$typeof === h ||
                  x.$$typeof === p ||
                  x.$$typeof === a ||
                  x.$$typeof === i ||
                  x.$$typeof === l ||
                  x.$$typeof === M ||
                  x.getModuleId !== void 0))
            );
          }
          function L(x, N, I) {
            var ee = x.displayName;
            if (ee) return ee;
            var ce = N.displayName || N.name || "";
            return ce !== "" ? I + "(" + ce + ")" : I;
          }
          function D(x) {
            return x.displayName || "Context";
          }
          function V(x) {
            if (x == null) return null;
            if (
              (typeof x.tag == "number" &&
                b(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                ),
              typeof x == "function")
            )
              return x.displayName || x.name || null;
            if (typeof x == "string") return x;
            switch (x) {
              case n:
                return "Fragment";
              case r:
                return "Portal";
              case s:
                return "Profiler";
              case o:
                return "StrictMode";
              case u:
                return "Suspense";
              case f:
                return "SuspenseList";
            }
            if (typeof x == "object")
              switch (x.$$typeof) {
                case i:
                  var N = x;
                  return D(N) + ".Consumer";
                case a:
                  var I = x;
                  return D(I._context) + ".Provider";
                case l:
                  return L(x, x.render, "ForwardRef");
                case p:
                  var ee = x.displayName || null;
                  return ee !== null ? ee : V(x.type) || "Memo";
                case h: {
                  var ce = x,
                    pe = ce._payload,
                    le = ce._init;
                  try {
                    return V(le(pe));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var _ = Object.assign,
            Y = 0,
            F,
            H,
            $,
            q,
            P,
            j,
            Q;
          function K() {}
          K.__reactDisabledLog = !0;
          function X() {
            {
              if (Y === 0) {
                (F = console.log),
                  (H = console.info),
                  ($ = console.warn),
                  (q = console.error),
                  (P = console.group),
                  (j = console.groupCollapsed),
                  (Q = console.groupEnd);
                var x = {
                  configurable: !0,
                  enumerable: !0,
                  value: K,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: x,
                  log: x,
                  warn: x,
                  error: x,
                  group: x,
                  groupCollapsed: x,
                  groupEnd: x,
                });
              }
              Y++;
            }
          }
          function ne() {
            {
              if ((Y--, Y === 0)) {
                var x = { configurable: !0, enumerable: !0, writable: !0 };
                Object.defineProperties(console, {
                  log: _({}, x, { value: F }),
                  info: _({}, x, { value: H }),
                  warn: _({}, x, { value: $ }),
                  error: _({}, x, { value: q }),
                  group: _({}, x, { value: P }),
                  groupCollapsed: _({}, x, { value: j }),
                  groupEnd: _({}, x, { value: Q }),
                });
              }
              Y < 0 &&
                b(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue.",
                );
            }
          }
          var Z = S.ReactCurrentDispatcher,
            A;
          function B(x, N, I) {
            {
              if (A === void 0)
                try {
                  throw Error();
                } catch (ce) {
                  var ee = ce.stack.trim().match(/\n( *(at )?)/);
                  A = (ee && ee[1]) || "";
                }
              return (
                `
` +
                A +
                x
              );
            }
          }
          var G = !1,
            z;
          {
            var te = typeof WeakMap == "function" ? WeakMap : Map;
            z = new te();
          }
          function O(x, N) {
            if (!x || G) return "";
            {
              var I = z.get(x);
              if (I !== void 0) return I;
            }
            var ee;
            G = !0;
            var ce = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var pe;
            (pe = Z.current), (Z.current = null), X();
            try {
              if (N) {
                var le = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(le.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(le, []);
                  } catch (Re) {
                    ee = Re;
                  }
                  Reflect.construct(x, [], le);
                } else {
                  try {
                    le.call();
                  } catch (Re) {
                    ee = Re;
                  }
                  x.call(le.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Re) {
                  ee = Re;
                }
                x();
              }
            } catch (Re) {
              if (Re && ee && typeof Re.stack == "string") {
                for (
                  var ae = Re.stack.split(`
`),
                    Ce = ee.stack.split(`
`),
                    ve = ae.length - 1,
                    be = Ce.length - 1;
                  ve >= 1 && be >= 0 && ae[ve] !== Ce[be];

                )
                  be--;
                for (; ve >= 1 && be >= 0; ve--, be--)
                  if (ae[ve] !== Ce[be]) {
                    if (ve !== 1 || be !== 1)
                      do
                        if ((ve--, be--, be < 0 || ae[ve] !== Ce[be])) {
                          var Ae =
                            `
` + ae[ve].replace(" at new ", " at ");
                          return (
                            x.displayName &&
                              Ae.includes("<anonymous>") &&
                              (Ae = Ae.replace("<anonymous>", x.displayName)),
                            typeof x == "function" && z.set(x, Ae),
                            Ae
                          );
                        }
                      while (ve >= 1 && be >= 0);
                    break;
                  }
              }
            } finally {
              (G = !1), (Z.current = pe), ne(), (Error.prepareStackTrace = ce);
            }
            var bt = x ? x.displayName || x.name : "",
              ut = bt ? B(bt) : "";
            return typeof x == "function" && z.set(x, ut), ut;
          }
          function me(x, N, I) {
            return O(x, !1);
          }
          function xe(x) {
            var N = x.prototype;
            return !!(N && N.isReactComponent);
          }
          function Te(x, N, I) {
            if (x == null) return "";
            if (typeof x == "function") return O(x, xe(x));
            if (typeof x == "string") return B(x);
            switch (x) {
              case u:
                return B("Suspense");
              case f:
                return B("SuspenseList");
            }
            if (typeof x == "object")
              switch (x.$$typeof) {
                case l:
                  return me(x.render);
                case p:
                  return Te(x.type, N, I);
                case h: {
                  var ee = x,
                    ce = ee._payload,
                    pe = ee._init;
                  try {
                    return Te(pe(ce), N, I);
                  } catch {}
                }
              }
            return "";
          }
          var ke = Object.prototype.hasOwnProperty,
            Qe = {},
            nr = S.ReactDebugCurrentFrame;
          function Ke(x) {
            if (x) {
              var N = x._owner,
                I = Te(x.type, x._source, N ? N.type : null);
              nr.setExtraStackFrame(I);
            } else nr.setExtraStackFrame(null);
          }
          function yc(x, N, I, ee, ce) {
            {
              var pe = Function.call.bind(ke);
              for (var le in x)
                if (pe(x, le)) {
                  var ae = void 0;
                  try {
                    if (typeof x[le] != "function") {
                      var Ce = Error(
                        (ee || "React class") +
                          ": " +
                          I +
                          " type `" +
                          le +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof x[le] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
                      );
                      throw ((Ce.name = "Invariant Violation"), Ce);
                    }
                    ae = x[le](
                      N,
                      le,
                      ee,
                      I,
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
                    );
                  } catch (ve) {
                    ae = ve;
                  }
                  ae &&
                    !(ae instanceof Error) &&
                    (Ke(ce),
                    b(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      ee || "React class",
                      I,
                      le,
                      typeof ae,
                    ),
                    Ke(null)),
                    ae instanceof Error &&
                      !(ae.message in Qe) &&
                      ((Qe[ae.message] = !0),
                      Ke(ce),
                      b("Failed %s type: %s", I, ae.message),
                      Ke(null));
                }
            }
          }
          var xc = Array.isArray;
          function Xr(x) {
            return xc(x);
          }
          function wc(x) {
            {
              var N = typeof Symbol == "function" && Symbol.toStringTag,
                I =
                  (N && x[Symbol.toStringTag]) ||
                  x.constructor.name ||
                  "Object";
              return I;
            }
          }
          function Sc(x) {
            try {
              return qo(x), !1;
            } catch {
              return !0;
            }
          }
          function qo(x) {
            return "" + x;
          }
          function Zo(x) {
            if (Sc(x))
              return (
                b(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  wc(x),
                ),
                qo(x)
              );
          }
          var $t = S.ReactCurrentOwner,
            Cc = { key: !0, ref: !0, __self: !0, __source: !0 },
            Jo,
            Qo,
            Kr;
          Kr = {};
          function Ec(x) {
            if (ke.call(x, "ref")) {
              var N = Object.getOwnPropertyDescriptor(x, "ref").get;
              if (N && N.isReactWarning) return !1;
            }
            return x.ref !== void 0;
          }
          function Rc(x) {
            if (ke.call(x, "key")) {
              var N = Object.getOwnPropertyDescriptor(x, "key").get;
              if (N && N.isReactWarning) return !1;
            }
            return x.key !== void 0;
          }
          function Pc(x, N) {
            if (
              typeof x.ref == "string" &&
              $t.current &&
              N &&
              $t.current.stateNode !== N
            ) {
              var I = V($t.current.type);
              Kr[I] ||
                (b(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  V($t.current.type),
                  x.ref,
                ),
                (Kr[I] = !0));
            }
          }
          function Tc(x, N) {
            {
              var I = function () {
                Jo ||
                  ((Jo = !0),
                  b(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    N,
                  ));
              };
              (I.isReactWarning = !0),
                Object.defineProperty(x, "key", { get: I, configurable: !0 });
            }
          }
          function Oc(x, N) {
            {
              var I = function () {
                Qo ||
                  ((Qo = !0),
                  b(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    N,
                  ));
              };
              (I.isReactWarning = !0),
                Object.defineProperty(x, "ref", { get: I, configurable: !0 });
            }
          }
          var Nc = function (x, N, I, ee, ce, pe, le) {
            var ae = {
              $$typeof: t,
              type: x,
              key: N,
              ref: I,
              props: le,
              _owner: pe,
            };
            return (
              (ae._store = {}),
              Object.defineProperty(ae._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(ae, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: ee,
              }),
              Object.defineProperty(ae, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: ce,
              }),
              Object.freeze && (Object.freeze(ae.props), Object.freeze(ae)),
              ae
            );
          };
          function _c(x, N, I, ee, ce) {
            {
              var pe,
                le = {},
                ae = null,
                Ce = null;
              I !== void 0 && (Zo(I), (ae = "" + I)),
                Rc(N) && (Zo(N.key), (ae = "" + N.key)),
                Ec(N) && ((Ce = N.ref), Pc(N, ce));
              for (pe in N)
                ke.call(N, pe) && !Cc.hasOwnProperty(pe) && (le[pe] = N[pe]);
              if (x && x.defaultProps) {
                var ve = x.defaultProps;
                for (pe in ve) le[pe] === void 0 && (le[pe] = ve[pe]);
              }
              if (ae || Ce) {
                var be =
                  typeof x == "function"
                    ? x.displayName || x.name || "Unknown"
                    : x;
                ae && Tc(le, be), Ce && Oc(le, be);
              }
              return Nc(x, ae, Ce, ce, ee, $t.current, le);
            }
          }
          var Gr = S.ReactCurrentOwner,
            es = S.ReactDebugCurrentFrame;
          function vt(x) {
            if (x) {
              var N = x._owner,
                I = Te(x.type, x._source, N ? N.type : null);
              es.setExtraStackFrame(I);
            } else es.setExtraStackFrame(null);
          }
          var qr;
          qr = !1;
          function Zr(x) {
            return typeof x == "object" && x !== null && x.$$typeof === t;
          }
          function ts() {
            {
              if (Gr.current) {
                var x = V(Gr.current.type);
                if (x)
                  return (
                    `

Check the render method of \`` +
                    x +
                    "`."
                  );
              }
              return "";
            }
          }
          function jc(x) {
            return "";
          }
          var rs = {};
          function Ac(x) {
            {
              var N = ts();
              if (!N) {
                var I = typeof x == "string" ? x : x.displayName || x.name;
                I &&
                  (N =
                    `

Check the top-level render call using <` +
                    I +
                    ">.");
              }
              return N;
            }
          }
          function ns(x, N) {
            {
              if (!x._store || x._store.validated || x.key != null) return;
              x._store.validated = !0;
              var I = Ac(N);
              if (rs[I]) return;
              rs[I] = !0;
              var ee = "";
              x &&
                x._owner &&
                x._owner !== Gr.current &&
                (ee = " It was passed a child from " + V(x._owner.type) + "."),
                vt(x),
                b(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  I,
                  ee,
                ),
                vt(null);
            }
          }
          function os(x, N) {
            {
              if (typeof x != "object") return;
              if (Xr(x))
                for (var I = 0; I < x.length; I++) {
                  var ee = x[I];
                  Zr(ee) && ns(ee, N);
                }
              else if (Zr(x)) x._store && (x._store.validated = !0);
              else if (x) {
                var ce = g(x);
                if (typeof ce == "function" && ce !== x.entries)
                  for (var pe = ce.call(x), le; !(le = pe.next()).done; )
                    Zr(le.value) && ns(le.value, N);
              }
            }
          }
          function Dc(x) {
            {
              var N = x.type;
              if (N == null || typeof N == "string") return;
              var I;
              if (typeof N == "function") I = N.propTypes;
              else if (
                typeof N == "object" &&
                (N.$$typeof === l || N.$$typeof === p)
              )
                I = N.propTypes;
              else return;
              if (I) {
                var ee = V(N);
                yc(I, x.props, "prop", ee, x);
              } else if (N.PropTypes !== void 0 && !qr) {
                qr = !0;
                var ce = V(N);
                b(
                  "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                  ce || "Unknown",
                );
              }
              typeof N.getDefaultProps == "function" &&
                !N.getDefaultProps.isReactClassApproved &&
                b(
                  "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.",
                );
            }
          }
          function Mc(x) {
            {
              for (var N = Object.keys(x.props), I = 0; I < N.length; I++) {
                var ee = N[I];
                if (ee !== "children" && ee !== "key") {
                  vt(x),
                    b(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      ee,
                    ),
                    vt(null);
                  break;
                }
              }
              x.ref !== null &&
                (vt(x),
                b("Invalid attribute `ref` supplied to `React.Fragment`."),
                vt(null));
            }
          }
          var ss = {};
          function as(x, N, I, ee, ce, pe) {
            {
              var le = W(x);
              if (!le) {
                var ae = "";
                (x === void 0 ||
                  (typeof x == "object" &&
                    x !== null &&
                    Object.keys(x).length === 0)) &&
                  (ae +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var Ce = jc();
                Ce ? (ae += Ce) : (ae += ts());
                var ve;
                x === null
                  ? (ve = "null")
                  : Xr(x)
                    ? (ve = "array")
                    : x !== void 0 && x.$$typeof === t
                      ? ((ve = "<" + (V(x.type) || "Unknown") + " />"),
                        (ae =
                          " Did you accidentally export a JSX literal instead of a component?"))
                      : (ve = typeof x),
                  b(
                    "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    ve,
                    ae,
                  );
              }
              var be = _c(x, N, I, ce, pe);
              if (be == null) return be;
              if (le) {
                var Ae = N.children;
                if (Ae !== void 0)
                  if (ee)
                    if (Xr(Ae)) {
                      for (var bt = 0; bt < Ae.length; bt++) os(Ae[bt], x);
                      Object.freeze && Object.freeze(Ae);
                    } else
                      b(
                        "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
                      );
                  else os(Ae, x);
              }
              if (ke.call(N, "key")) {
                var ut = V(x),
                  Re = Object.keys(N).filter(function (Wc) {
                    return Wc !== "key";
                  }),
                  Jr =
                    Re.length > 0
                      ? "{key: someKey, " + Re.join(": ..., ") + ": ...}"
                      : "{key: someKey}";
                if (!ss[ut + Jr]) {
                  var Fc =
                    Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
                  b(
                    `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                    Jr,
                    ut,
                    Fc,
                    ut,
                  ),
                    (ss[ut + Jr] = !0);
                }
              }
              return x === n ? Mc(be) : Dc(be), be;
            }
          }
          function kc(x, N, I) {
            return as(x, N, I, !0);
          }
          function Ic(x, N, I) {
            return as(x, N, I, !1);
          }
          var Lc = Ic,
            $c = kc;
          (Wt.Fragment = n), (Wt.jsx = Lc), (Wt.jsxs = $c);
        })()),
    Wt
  );
}
process.env.NODE_ENV === "production"
  ? (Cn.exports = Hc())
  : (Cn.exports = Uc());
var c = Cn.exports;
function Js(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Js(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function Yc() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Js(e)) && (n && (n += " "), (n += t));
  return n;
}
const us = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  ds = Yc,
  Qs = (e, t) => (r) => {
    var n;
    if ((t == null ? void 0 : t.variants) == null)
      return ds(
        e,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className,
      );
    const { variants: o, defaultVariants: s } = t,
      a = Object.keys(o).map((u) => {
        const f = r == null ? void 0 : r[u],
          p = s == null ? void 0 : s[u];
        if (f === null) return null;
        const h = us(f) || us(p);
        return o[u][h];
      }),
      i =
        r &&
        Object.entries(r).reduce((u, f) => {
          let [p, h] = f;
          return h === void 0 || (u[p] = h), u;
        }, {}),
      l =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((u, f) => {
              let { class: p, className: h, ...v } = f;
              return Object.entries(v).every((w) => {
                let [m, g] = w;
                return Array.isArray(g)
                  ? g.includes({ ...s, ...i }[m])
                  : { ...s, ...i }[m] === g;
              })
                ? [...u, p, h]
                : u;
            }, []);
    return ds(
      e,
      a,
      l,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className,
    );
  };
var Kn = { exports: {} },
  Zt = {},
  Pr = { exports: {} },
  ea = {},
  En = { exports: {} },
  Rn = { exports: {} },
  ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fs;
function Xc() {
  if (fs) return ue;
  fs = 1;
  var e = typeof Symbol == "function" && Symbol.for,
    t = e ? Symbol.for("react.element") : 60103,
    r = e ? Symbol.for("react.portal") : 60106,
    n = e ? Symbol.for("react.fragment") : 60107,
    o = e ? Symbol.for("react.strict_mode") : 60108,
    s = e ? Symbol.for("react.profiler") : 60114,
    a = e ? Symbol.for("react.provider") : 60109,
    i = e ? Symbol.for("react.context") : 60110,
    l = e ? Symbol.for("react.async_mode") : 60111,
    u = e ? Symbol.for("react.concurrent_mode") : 60111,
    f = e ? Symbol.for("react.forward_ref") : 60112,
    p = e ? Symbol.for("react.suspense") : 60113,
    h = e ? Symbol.for("react.suspense_list") : 60120,
    v = e ? Symbol.for("react.memo") : 60115,
    w = e ? Symbol.for("react.lazy") : 60116,
    m = e ? Symbol.for("react.block") : 60121,
    g = e ? Symbol.for("react.fundamental") : 60117,
    S = e ? Symbol.for("react.responder") : 60118,
    b = e ? Symbol.for("react.scope") : 60119;
  function y(C) {
    if (typeof C == "object" && C !== null) {
      var T = C.$$typeof;
      switch (T) {
        case t:
          switch (((C = C.type), C)) {
            case l:
            case u:
            case n:
            case s:
            case o:
            case p:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case i:
                case f:
                case w:
                case v:
                case a:
                  return C;
                default:
                  return T;
              }
          }
        case r:
          return T;
      }
    }
  }
  function E(C) {
    return y(C) === u;
  }
  return (
    (ue.AsyncMode = l),
    (ue.ConcurrentMode = u),
    (ue.ContextConsumer = i),
    (ue.ContextProvider = a),
    (ue.Element = t),
    (ue.ForwardRef = f),
    (ue.Fragment = n),
    (ue.Lazy = w),
    (ue.Memo = v),
    (ue.Portal = r),
    (ue.Profiler = s),
    (ue.StrictMode = o),
    (ue.Suspense = p),
    (ue.isAsyncMode = function (C) {
      return E(C) || y(C) === l;
    }),
    (ue.isConcurrentMode = E),
    (ue.isContextConsumer = function (C) {
      return y(C) === i;
    }),
    (ue.isContextProvider = function (C) {
      return y(C) === a;
    }),
    (ue.isElement = function (C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }),
    (ue.isForwardRef = function (C) {
      return y(C) === f;
    }),
    (ue.isFragment = function (C) {
      return y(C) === n;
    }),
    (ue.isLazy = function (C) {
      return y(C) === w;
    }),
    (ue.isMemo = function (C) {
      return y(C) === v;
    }),
    (ue.isPortal = function (C) {
      return y(C) === r;
    }),
    (ue.isProfiler = function (C) {
      return y(C) === s;
    }),
    (ue.isStrictMode = function (C) {
      return y(C) === o;
    }),
    (ue.isSuspense = function (C) {
      return y(C) === p;
    }),
    (ue.isValidElementType = function (C) {
      return (
        typeof C == "string" ||
        typeof C == "function" ||
        C === n ||
        C === u ||
        C === s ||
        C === o ||
        C === p ||
        C === h ||
        (typeof C == "object" &&
          C !== null &&
          (C.$$typeof === w ||
            C.$$typeof === v ||
            C.$$typeof === a ||
            C.$$typeof === i ||
            C.$$typeof === f ||
            C.$$typeof === g ||
            C.$$typeof === S ||
            C.$$typeof === b ||
            C.$$typeof === m))
      );
    }),
    (ue.typeOf = y),
    ue
  );
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ps;
function Kc() {
  return (
    ps ||
      ((ps = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var e = typeof Symbol == "function" && Symbol.for,
            t = e ? Symbol.for("react.element") : 60103,
            r = e ? Symbol.for("react.portal") : 60106,
            n = e ? Symbol.for("react.fragment") : 60107,
            o = e ? Symbol.for("react.strict_mode") : 60108,
            s = e ? Symbol.for("react.profiler") : 60114,
            a = e ? Symbol.for("react.provider") : 60109,
            i = e ? Symbol.for("react.context") : 60110,
            l = e ? Symbol.for("react.async_mode") : 60111,
            u = e ? Symbol.for("react.concurrent_mode") : 60111,
            f = e ? Symbol.for("react.forward_ref") : 60112,
            p = e ? Symbol.for("react.suspense") : 60113,
            h = e ? Symbol.for("react.suspense_list") : 60120,
            v = e ? Symbol.for("react.memo") : 60115,
            w = e ? Symbol.for("react.lazy") : 60116,
            m = e ? Symbol.for("react.block") : 60121,
            g = e ? Symbol.for("react.fundamental") : 60117,
            S = e ? Symbol.for("react.responder") : 60118,
            b = e ? Symbol.for("react.scope") : 60119;
          function y(O) {
            return (
              typeof O == "string" ||
              typeof O == "function" ||
              O === n ||
              O === u ||
              O === s ||
              O === o ||
              O === p ||
              O === h ||
              (typeof O == "object" &&
                O !== null &&
                (O.$$typeof === w ||
                  O.$$typeof === v ||
                  O.$$typeof === a ||
                  O.$$typeof === i ||
                  O.$$typeof === f ||
                  O.$$typeof === g ||
                  O.$$typeof === S ||
                  O.$$typeof === b ||
                  O.$$typeof === m))
            );
          }
          function E(O) {
            if (typeof O == "object" && O !== null) {
              var me = O.$$typeof;
              switch (me) {
                case t:
                  var xe = O.type;
                  switch (xe) {
                    case l:
                    case u:
                    case n:
                    case s:
                    case o:
                    case p:
                      return xe;
                    default:
                      var Te = xe && xe.$$typeof;
                      switch (Te) {
                        case i:
                        case f:
                        case w:
                        case v:
                        case a:
                          return Te;
                        default:
                          return me;
                      }
                  }
                case r:
                  return me;
              }
            }
          }
          var C = l,
            T = u,
            R = i,
            k = a,
            M = t,
            W = f,
            L = n,
            D = w,
            V = v,
            _ = r,
            Y = s,
            F = o,
            H = p,
            $ = !1;
          function q(O) {
            return (
              $ ||
                (($ = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.",
                )),
              P(O) || E(O) === l
            );
          }
          function P(O) {
            return E(O) === u;
          }
          function j(O) {
            return E(O) === i;
          }
          function Q(O) {
            return E(O) === a;
          }
          function K(O) {
            return typeof O == "object" && O !== null && O.$$typeof === t;
          }
          function X(O) {
            return E(O) === f;
          }
          function ne(O) {
            return E(O) === n;
          }
          function Z(O) {
            return E(O) === w;
          }
          function A(O) {
            return E(O) === v;
          }
          function B(O) {
            return E(O) === r;
          }
          function G(O) {
            return E(O) === s;
          }
          function z(O) {
            return E(O) === o;
          }
          function te(O) {
            return E(O) === p;
          }
          (de.AsyncMode = C),
            (de.ConcurrentMode = T),
            (de.ContextConsumer = R),
            (de.ContextProvider = k),
            (de.Element = M),
            (de.ForwardRef = W),
            (de.Fragment = L),
            (de.Lazy = D),
            (de.Memo = V),
            (de.Portal = _),
            (de.Profiler = Y),
            (de.StrictMode = F),
            (de.Suspense = H),
            (de.isAsyncMode = q),
            (de.isConcurrentMode = P),
            (de.isContextConsumer = j),
            (de.isContextProvider = Q),
            (de.isElement = K),
            (de.isForwardRef = X),
            (de.isFragment = ne),
            (de.isLazy = Z),
            (de.isMemo = A),
            (de.isPortal = B),
            (de.isProfiler = G),
            (de.isStrictMode = z),
            (de.isSuspense = te),
            (de.isValidElementType = y),
            (de.typeOf = E);
        })()),
    de
  );
}
process.env.NODE_ENV === "production"
  ? (Rn.exports = Xc())
  : (Rn.exports = Kc());
var ta = Rn.exports;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Qr, ms;
function Gc() {
  if (ms) return Qr;
  ms = 1;
  var e = Object.getOwnPropertySymbols,
    t = Object.prototype.hasOwnProperty,
    r = Object.prototype.propertyIsEnumerable;
  function n(s) {
    if (s == null)
      throw new TypeError(
        "Object.assign cannot be called with null or undefined",
      );
    return Object(s);
  }
  function o() {
    try {
      if (!Object.assign) return !1;
      var s = new String("abc");
      if (((s[5] = "de"), Object.getOwnPropertyNames(s)[0] === "5")) return !1;
      for (var a = {}, i = 0; i < 10; i++) a["_" + String.fromCharCode(i)] = i;
      var l = Object.getOwnPropertyNames(a).map(function (f) {
        return a[f];
      });
      if (l.join("") !== "0123456789") return !1;
      var u = {};
      return (
        "abcdefghijklmnopqrst".split("").forEach(function (f) {
          u[f] = f;
        }),
        Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst"
      );
    } catch {
      return !1;
    }
  }
  return (
    (Qr = o()
      ? Object.assign
      : function (s, a) {
          for (var i, l = n(s), u, f = 1; f < arguments.length; f++) {
            i = Object(arguments[f]);
            for (var p in i) t.call(i, p) && (l[p] = i[p]);
            if (e) {
              u = e(i);
              for (var h = 0; h < u.length; h++)
                r.call(i, u[h]) && (l[u[h]] = i[u[h]]);
            }
          }
          return l;
        }),
    Qr
  );
}
var en, hs;
function Gn() {
  if (hs) return en;
  hs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (en = e), en;
}
var tn, gs;
function ra() {
  return (
    gs ||
      ((gs = 1), (tn = Function.call.bind(Object.prototype.hasOwnProperty))),
    tn
  );
}
var rn, vs;
function qc() {
  if (vs) return rn;
  vs = 1;
  var e = function () {};
  if (process.env.NODE_ENV !== "production") {
    var t = Gn(),
      r = {},
      n = ra();
    e = function (s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {}
    };
  }
  function o(s, a, i, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in s)
        if (n(s, f)) {
          var p;
          try {
            if (typeof s[f] != "function") {
              var h = Error(
                (l || "React class") +
                  ": " +
                  i +
                  " type `" +
                  f +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  typeof s[f] +
                  "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.",
              );
              throw ((h.name = "Invariant Violation"), h);
            }
            p = s[f](a, f, l, i, null, t);
          } catch (w) {
            p = w;
          }
          if (
            (p &&
              !(p instanceof Error) &&
              e(
                (l || "React class") +
                  ": type specification of " +
                  i +
                  " `" +
                  f +
                  "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                  typeof p +
                  ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
              ),
            p instanceof Error && !(p.message in r))
          ) {
            r[p.message] = !0;
            var v = u ? u() : "";
            e("Failed " + i + " type: " + p.message + (v ?? ""));
          }
        }
    }
  }
  return (
    (o.resetWarningCache = function () {
      process.env.NODE_ENV !== "production" && (r = {});
    }),
    (rn = o),
    rn
  );
}
var nn, bs;
function Zc() {
  if (bs) return nn;
  bs = 1;
  var e = ta,
    t = Gc(),
    r = Gn(),
    n = ra(),
    o = qc(),
    s = function () {};
  process.env.NODE_ENV !== "production" &&
    (s = function (i) {
      var l = "Warning: " + i;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {}
    });
  function a() {
    return null;
  }
  return (
    (nn = function (i, l) {
      var u = typeof Symbol == "function" && Symbol.iterator,
        f = "@@iterator";
      function p(P) {
        var j = P && ((u && P[u]) || P[f]);
        if (typeof j == "function") return j;
      }
      var h = "<<anonymous>>",
        v = {
          array: S("array"),
          bigint: S("bigint"),
          bool: S("boolean"),
          func: S("function"),
          number: S("number"),
          object: S("object"),
          string: S("string"),
          symbol: S("symbol"),
          any: b(),
          arrayOf: y,
          element: E(),
          elementType: C(),
          instanceOf: T,
          node: W(),
          objectOf: k,
          oneOf: R,
          oneOfType: M,
          shape: D,
          exact: V,
        };
      function w(P, j) {
        return P === j ? P !== 0 || 1 / P === 1 / j : P !== P && j !== j;
      }
      function m(P, j) {
        (this.message = P),
          (this.data = j && typeof j == "object" ? j : {}),
          (this.stack = "");
      }
      m.prototype = Error.prototype;
      function g(P) {
        if (process.env.NODE_ENV !== "production")
          var j = {},
            Q = 0;
        function K(ne, Z, A, B, G, z, te) {
          if (((B = B || h), (z = z || A), te !== r)) {
            if (l) {
              var O = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((O.name = "Invariant Violation"), O);
            } else if (
              process.env.NODE_ENV !== "production" &&
              typeof console < "u"
            ) {
              var me = B + ":" + A;
              !j[me] &&
                Q < 3 &&
                (s(
                  "You are manually calling a React.PropTypes validation function for the `" +
                    z +
                    "` prop on `" +
                    B +
                    "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                ),
                (j[me] = !0),
                Q++);
            }
          }
          return Z[A] == null
            ? ne
              ? Z[A] === null
                ? new m(
                    "The " +
                      G +
                      " `" +
                      z +
                      "` is marked as required " +
                      ("in `" + B + "`, but its value is `null`."),
                  )
                : new m(
                    "The " +
                      G +
                      " `" +
                      z +
                      "` is marked as required in " +
                      ("`" + B + "`, but its value is `undefined`."),
                  )
              : null
            : P(Z, A, B, G, z);
        }
        var X = K.bind(null, !1);
        return (X.isRequired = K.bind(null, !0)), X;
      }
      function S(P) {
        function j(Q, K, X, ne, Z, A) {
          var B = Q[K],
            G = F(B);
          if (G !== P) {
            var z = H(B);
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type " +
                ("`" + z + "` supplied to `" + X + "`, expected ") +
                ("`" + P + "`."),
              { expectedType: P },
            );
          }
          return null;
        }
        return g(j);
      }
      function b() {
        return g(a);
      }
      function y(P) {
        function j(Q, K, X, ne, Z) {
          if (typeof P != "function")
            return new m(
              "Property `" +
                Z +
                "` of component `" +
                X +
                "` has invalid PropType notation inside arrayOf.",
            );
          var A = Q[K];
          if (!Array.isArray(A)) {
            var B = F(A);
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type " +
                ("`" + B + "` supplied to `" + X + "`, expected an array."),
            );
          }
          for (var G = 0; G < A.length; G++) {
            var z = P(A, G, X, ne, Z + "[" + G + "]", r);
            if (z instanceof Error) return z;
          }
          return null;
        }
        return g(j);
      }
      function E() {
        function P(j, Q, K, X, ne) {
          var Z = j[Q];
          if (!i(Z)) {
            var A = F(Z);
            return new m(
              "Invalid " +
                X +
                " `" +
                ne +
                "` of type " +
                ("`" +
                  A +
                  "` supplied to `" +
                  K +
                  "`, expected a single ReactElement."),
            );
          }
          return null;
        }
        return g(P);
      }
      function C() {
        function P(j, Q, K, X, ne) {
          var Z = j[Q];
          if (!e.isValidElementType(Z)) {
            var A = F(Z);
            return new m(
              "Invalid " +
                X +
                " `" +
                ne +
                "` of type " +
                ("`" +
                  A +
                  "` supplied to `" +
                  K +
                  "`, expected a single ReactElement type."),
            );
          }
          return null;
        }
        return g(P);
      }
      function T(P) {
        function j(Q, K, X, ne, Z) {
          if (!(Q[K] instanceof P)) {
            var A = P.name || h,
              B = q(Q[K]);
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type " +
                ("`" + B + "` supplied to `" + X + "`, expected ") +
                ("instance of `" + A + "`."),
            );
          }
          return null;
        }
        return g(j);
      }
      function R(P) {
        if (!Array.isArray(P))
          return (
            process.env.NODE_ENV !== "production" &&
              (arguments.length > 1
                ? s(
                    "Invalid arguments supplied to oneOf, expected an array, got " +
                      arguments.length +
                      " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).",
                  )
                : s("Invalid argument supplied to oneOf, expected an array.")),
            a
          );
        function j(Q, K, X, ne, Z) {
          for (var A = Q[K], B = 0; B < P.length; B++)
            if (w(A, P[B])) return null;
          var G = JSON.stringify(P, function (te, O) {
            var me = H(O);
            return me === "symbol" ? String(O) : O;
          });
          return new m(
            "Invalid " +
              ne +
              " `" +
              Z +
              "` of value `" +
              String(A) +
              "` " +
              ("supplied to `" + X + "`, expected one of " + G + "."),
          );
        }
        return g(j);
      }
      function k(P) {
        function j(Q, K, X, ne, Z) {
          if (typeof P != "function")
            return new m(
              "Property `" +
                Z +
                "` of component `" +
                X +
                "` has invalid PropType notation inside objectOf.",
            );
          var A = Q[K],
            B = F(A);
          if (B !== "object")
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type " +
                ("`" + B + "` supplied to `" + X + "`, expected an object."),
            );
          for (var G in A)
            if (n(A, G)) {
              var z = P(A, G, X, ne, Z + "." + G, r);
              if (z instanceof Error) return z;
            }
          return null;
        }
        return g(j);
      }
      function M(P) {
        if (!Array.isArray(P))
          return (
            process.env.NODE_ENV !== "production" &&
              s(
                "Invalid argument supplied to oneOfType, expected an instance of array.",
              ),
            a
          );
        for (var j = 0; j < P.length; j++) {
          var Q = P[j];
          if (typeof Q != "function")
            return (
              s(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                  $(Q) +
                  " at index " +
                  j +
                  ".",
              ),
              a
            );
        }
        function K(X, ne, Z, A, B) {
          for (var G = [], z = 0; z < P.length; z++) {
            var te = P[z],
              O = te(X, ne, Z, A, B, r);
            if (O == null) return null;
            O.data && n(O.data, "expectedType") && G.push(O.data.expectedType);
          }
          var me =
            G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
          return new m(
            "Invalid " +
              A +
              " `" +
              B +
              "` supplied to " +
              ("`" + Z + "`" + me + "."),
          );
        }
        return g(K);
      }
      function W() {
        function P(j, Q, K, X, ne) {
          return _(j[Q])
            ? null
            : new m(
                "Invalid " +
                  X +
                  " `" +
                  ne +
                  "` supplied to " +
                  ("`" + K + "`, expected a ReactNode."),
              );
        }
        return g(P);
      }
      function L(P, j, Q, K, X) {
        return new m(
          (P || "React class") +
            ": " +
            j +
            " type `" +
            Q +
            "." +
            K +
            "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
            X +
            "`.",
        );
      }
      function D(P) {
        function j(Q, K, X, ne, Z) {
          var A = Q[K],
            B = F(A);
          if (B !== "object")
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type `" +
                B +
                "` " +
                ("supplied to `" + X + "`, expected `object`."),
            );
          for (var G in P) {
            var z = P[G];
            if (typeof z != "function") return L(X, ne, Z, G, H(z));
            var te = z(A, G, X, ne, Z + "." + G, r);
            if (te) return te;
          }
          return null;
        }
        return g(j);
      }
      function V(P) {
        function j(Q, K, X, ne, Z) {
          var A = Q[K],
            B = F(A);
          if (B !== "object")
            return new m(
              "Invalid " +
                ne +
                " `" +
                Z +
                "` of type `" +
                B +
                "` " +
                ("supplied to `" + X + "`, expected `object`."),
            );
          var G = t({}, Q[K], P);
          for (var z in G) {
            var te = P[z];
            if (n(P, z) && typeof te != "function")
              return L(X, ne, Z, z, H(te));
            if (!te)
              return new m(
                "Invalid " +
                  ne +
                  " `" +
                  Z +
                  "` key `" +
                  z +
                  "` supplied to `" +
                  X +
                  "`.\nBad object: " +
                  JSON.stringify(Q[K], null, "  ") +
                  `
Valid keys: ` +
                  JSON.stringify(Object.keys(P), null, "  "),
              );
            var O = te(A, z, X, ne, Z + "." + z, r);
            if (O) return O;
          }
          return null;
        }
        return g(j);
      }
      function _(P) {
        switch (typeof P) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !P;
          case "object":
            if (Array.isArray(P)) return P.every(_);
            if (P === null || i(P)) return !0;
            var j = p(P);
            if (j) {
              var Q = j.call(P),
                K;
              if (j !== P.entries) {
                for (; !(K = Q.next()).done; ) if (!_(K.value)) return !1;
              } else
                for (; !(K = Q.next()).done; ) {
                  var X = K.value;
                  if (X && !_(X[1])) return !1;
                }
            } else return !1;
            return !0;
          default:
            return !1;
        }
      }
      function Y(P, j) {
        return P === "symbol"
          ? !0
          : j
            ? j["@@toStringTag"] === "Symbol" ||
              (typeof Symbol == "function" && j instanceof Symbol)
            : !1;
      }
      function F(P) {
        var j = typeof P;
        return Array.isArray(P)
          ? "array"
          : P instanceof RegExp
            ? "object"
            : Y(j, P)
              ? "symbol"
              : j;
      }
      function H(P) {
        if (typeof P > "u" || P === null) return "" + P;
        var j = F(P);
        if (j === "object") {
          if (P instanceof Date) return "date";
          if (P instanceof RegExp) return "regexp";
        }
        return j;
      }
      function $(P) {
        var j = H(P);
        switch (j) {
          case "array":
          case "object":
            return "an " + j;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + j;
          default:
            return j;
        }
      }
      function q(P) {
        return !P.constructor || !P.constructor.name ? h : P.constructor.name;
      }
      return (
        (v.checkPropTypes = o),
        (v.resetWarningCache = o.resetWarningCache),
        (v.PropTypes = v),
        v
      );
    }),
    nn
  );
}
var on, ys;
function Jc() {
  if (ys) return on;
  ys = 1;
  var e = Gn();
  function t() {}
  function r() {}
  return (
    (r.resetWarningCache = t),
    (on = function () {
      function n(a, i, l, u, f, p) {
        if (p !== e) {
          var h = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((h.name = "Invariant Violation"), h);
        }
      }
      n.isRequired = n;
      function o() {
        return n;
      }
      var s = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: o,
        element: n,
        elementType: n,
        instanceOf: o,
        node: n,
        objectOf: o,
        oneOf: o,
        oneOfType: o,
        shape: o,
        exact: o,
        checkPropTypes: r,
        resetWarningCache: t,
      };
      return (s.PropTypes = s), s;
    }),
    on
  );
}
if (process.env.NODE_ENV !== "production") {
  var Qc = ta,
    eu = !0;
  En.exports = Zc()(Qc.isElement, eu);
} else En.exports = Jc()();
var Tr = En.exports;
function na(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = na(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function xs() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = na(e)) && (n && (n += " "), (n += t));
  return n;
}
const tu = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: xs, default: xs },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ru = Vc(tu);
var ge = {},
  He = {};
Object.defineProperty(He, "__esModule", { value: !0 });
He.dontSetMe = iu;
He.findInArray = nu;
He.int = au;
He.isFunction = ou;
He.isNum = su;
function nu(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e])) return e[r];
}
function ou(e) {
  return (
    typeof e == "function" ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function su(e) {
  return typeof e == "number" && !isNaN(e);
}
function au(e) {
  return parseInt(e, 10);
}
function iu(e, t, r) {
  if (e[t])
    return new Error(
      "Invalid prop "
        .concat(t, " passed to ")
        .concat(r, " - do not set this, set it on the child."),
    );
}
var gt = {};
Object.defineProperty(gt, "__esModule", { value: !0 });
gt.browserPrefixToKey = sa;
gt.browserPrefixToStyle = lu;
gt.default = void 0;
gt.getPrefix = oa;
const sn = ["Moz", "Webkit", "O", "ms"];
function oa() {
  var e;
  let t =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "transform";
  if (typeof window > "u") return "";
  const r =
    (e = window.document) === null ||
    e === void 0 ||
    (e = e.documentElement) === null ||
    e === void 0
      ? void 0
      : e.style;
  if (!r || t in r) return "";
  for (let n = 0; n < sn.length; n++) if (sa(t, sn[n]) in r) return sn[n];
  return "";
}
function sa(e, t) {
  return t ? "".concat(t).concat(cu(e)) : e;
}
function lu(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function cu(e) {
  let t = "",
    r = !0;
  for (let n = 0; n < e.length; n++)
    r
      ? ((t += e[n].toUpperCase()), (r = !1))
      : e[n] === "-"
        ? (r = !0)
        : (t += e[n]);
  return t;
}
gt.default = oa();
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.addClassName = la;
ge.addEvent = fu;
ge.addUserSelectStyles = Cu;
ge.createCSSTransform = yu;
ge.createSVGTransform = xu;
ge.getTouch = wu;
ge.getTouchIdentifier = Su;
ge.getTranslation = qn;
ge.innerHeight = gu;
ge.innerWidth = vu;
ge.matchesSelector = ia;
ge.matchesSelectorAndParentsTo = du;
ge.offsetXYFromParent = bu;
ge.outerHeight = mu;
ge.outerWidth = hu;
ge.removeClassName = ca;
ge.removeEvent = pu;
ge.removeUserSelectStyles = Eu;
var _e = He,
  ws = uu(gt);
function aa(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (aa = function (n) {
    return n ? r : t;
  })(e);
}
function uu(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = aa(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : (n[s] = e[s]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
let or = "";
function ia(e, t) {
  return (
    or ||
      (or = (0, _e.findInArray)(
        [
          "matches",
          "webkitMatchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
        ],
        function (r) {
          return (0, _e.isFunction)(e[r]);
        },
      )),
    (0, _e.isFunction)(e[or]) ? e[or](t) : !1
  );
}
function du(e, t, r) {
  let n = e;
  do {
    if (ia(n, t)) return !0;
    if (n === r) return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function fu(e, t, r, n) {
  if (!e) return;
  const o = { capture: !0, ...n };
  e.addEventListener
    ? e.addEventListener(t, r, o)
    : e.attachEvent
      ? e.attachEvent("on" + t, r)
      : (e["on" + t] = r);
}
function pu(e, t, r, n) {
  if (!e) return;
  const o = { capture: !0, ...n };
  e.removeEventListener
    ? e.removeEventListener(t, r, o)
    : e.detachEvent
      ? e.detachEvent("on" + t, r)
      : (e["on" + t] = null);
}
function mu(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, _e.int)(r.borderTopWidth)),
    (t += (0, _e.int)(r.borderBottomWidth)),
    t
  );
}
function hu(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, _e.int)(r.borderLeftWidth)),
    (t += (0, _e.int)(r.borderRightWidth)),
    t
  );
}
function gu(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, _e.int)(r.paddingTop)), (t -= (0, _e.int)(r.paddingBottom)), t
  );
}
function vu(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, _e.int)(r.paddingLeft)), (t -= (0, _e.int)(r.paddingRight)), t
  );
}
function bu(e, t, r) {
  const o =
      t === t.ownerDocument.body
        ? { left: 0, top: 0 }
        : t.getBoundingClientRect(),
    s = (e.clientX + t.scrollLeft - o.left) / r,
    a = (e.clientY + t.scrollTop - o.top) / r;
  return { x: s, y: a };
}
function yu(e, t) {
  const r = qn(e, t, "px");
  return { [(0, ws.browserPrefixToKey)("transform", ws.default)]: r };
}
function xu(e, t) {
  return qn(e, t, "");
}
function qn(e, t, r) {
  let { x: n, y: o } = e,
    s = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
  if (t) {
    const a = "".concat(typeof t.x == "string" ? t.x : t.x + r),
      i = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    s = "translate(".concat(a, ", ").concat(i, ")") + s;
  }
  return s;
}
function wu(e, t) {
  return (
    (e.targetTouches &&
      (0, _e.findInArray)(e.targetTouches, (r) => t === r.identifier)) ||
    (e.changedTouches &&
      (0, _e.findInArray)(e.changedTouches, (r) => t === r.identifier))
  );
}
function Su(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Cu(e) {
  if (!e) return;
  let t = e.getElementById("react-draggable-style-el");
  t ||
    ((t = e.createElement("style")),
    (t.type = "text/css"),
    (t.id = "react-draggable-style-el"),
    (t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
    (t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
    e.getElementsByTagName("head")[0].appendChild(t)),
    e.body && la(e.body, "react-draggable-transparent-selection");
}
function Eu(e) {
  if (e)
    try {
      if (
        (e.body && ca(e.body, "react-draggable-transparent-selection"),
        e.selection)
      )
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {}
}
function la(e, t) {
  e.classList
    ? e.classList.add(t)
    : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
      (e.className += " ".concat(t));
}
function ca(e, t) {
  e.classList
    ? e.classList.remove(t)
    : (e.className = e.className.replace(
        new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
        "",
      ));
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.canDragX = Tu;
Ue.canDragY = Ou;
Ue.createCoreData = _u;
Ue.createDraggableData = ju;
Ue.getBoundPosition = Ru;
Ue.getControlPosition = Nu;
Ue.snapToGrid = Pu;
var Oe = He,
  St = ge;
function Ru(e, t, r) {
  if (!e.props.bounds) return [t, r];
  let { bounds: n } = e.props;
  n = typeof n == "string" ? n : Au(n);
  const o = Zn(e);
  if (typeof n == "string") {
    const { ownerDocument: s } = o,
      a = s.defaultView;
    let i;
    if (
      (n === "parent" ? (i = o.parentNode) : (i = s.querySelector(n)),
      !(i instanceof a.HTMLElement))
    )
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const l = i,
      u = a.getComputedStyle(o),
      f = a.getComputedStyle(l);
    n = {
      left:
        -o.offsetLeft + (0, Oe.int)(f.paddingLeft) + (0, Oe.int)(u.marginLeft),
      top: -o.offsetTop + (0, Oe.int)(f.paddingTop) + (0, Oe.int)(u.marginTop),
      right:
        (0, St.innerWidth)(l) -
        (0, St.outerWidth)(o) -
        o.offsetLeft +
        (0, Oe.int)(f.paddingRight) -
        (0, Oe.int)(u.marginRight),
      bottom:
        (0, St.innerHeight)(l) -
        (0, St.outerHeight)(o) -
        o.offsetTop +
        (0, Oe.int)(f.paddingBottom) -
        (0, Oe.int)(u.marginBottom),
    };
  }
  return (
    (0, Oe.isNum)(n.right) && (t = Math.min(t, n.right)),
    (0, Oe.isNum)(n.bottom) && (r = Math.min(r, n.bottom)),
    (0, Oe.isNum)(n.left) && (t = Math.max(t, n.left)),
    (0, Oe.isNum)(n.top) && (r = Math.max(r, n.top)),
    [t, r]
  );
}
function Pu(e, t, r) {
  const n = Math.round(t / e[0]) * e[0],
    o = Math.round(r / e[1]) * e[1];
  return [n, o];
}
function Tu(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Ou(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Nu(e, t, r) {
  const n = typeof t == "number" ? (0, St.getTouch)(e, t) : null;
  if (typeof t == "number" && !n) return null;
  const o = Zn(r),
    s = r.props.offsetParent || o.offsetParent || o.ownerDocument.body;
  return (0, St.offsetXYFromParent)(n || e, s, r.props.scale);
}
function _u(e, t, r) {
  const n = !(0, Oe.isNum)(e.lastX),
    o = Zn(e);
  return n
    ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: r, x: t, y: r }
    : {
        node: o,
        deltaX: t - e.lastX,
        deltaY: r - e.lastY,
        lastX: e.lastX,
        lastY: e.lastY,
        x: t,
        y: r,
      };
}
function ju(e, t) {
  const r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y,
  };
}
function Au(e) {
  return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
}
function Zn(e) {
  const t = e.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Or = {},
  Nr = {};
Object.defineProperty(Nr, "__esModule", { value: !0 });
Nr.default = Du;
function Du() {}
Object.defineProperty(Or, "__esModule", { value: !0 });
Or.default = void 0;
var an = ku(U),
  Pe = Jn(Tr),
  Mu = Jn(Rr),
  Se = ge,
  et = Ue,
  ln = He,
  zt = Jn(Nr);
function Jn(e) {
  return e && e.__esModule ? e : { default: e };
}
function ua(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (ua = function (n) {
    return n ? r : t;
  })(e);
}
function ku(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = ua(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : (n[s] = e[s]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function Ee(e, t, r) {
  return (
    (t = Iu(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Iu(e) {
  var t = Lu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Lu(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const Ie = {
  touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
  mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
};
let tt = Ie.mouse,
  _r = class extends an.Component {
    constructor() {
      super(...arguments),
        Ee(this, "dragging", !1),
        Ee(this, "lastX", NaN),
        Ee(this, "lastY", NaN),
        Ee(this, "touchIdentifier", null),
        Ee(this, "mounted", !1),
        Ee(this, "handleDragStart", (t) => {
          if (
            (this.props.onMouseDown(t),
            !this.props.allowAnyClick &&
              typeof t.button == "number" &&
              t.button !== 0)
          )
            return !1;
          const r = this.findDOMNode();
          if (!r || !r.ownerDocument || !r.ownerDocument.body)
            throw new Error("<DraggableCore> not mounted on DragStart!");
          const { ownerDocument: n } = r;
          if (
            this.props.disabled ||
            !(t.target instanceof n.defaultView.Node) ||
            (this.props.handle &&
              !(0, Se.matchesSelectorAndParentsTo)(
                t.target,
                this.props.handle,
                r,
              )) ||
            (this.props.cancel &&
              (0, Se.matchesSelectorAndParentsTo)(
                t.target,
                this.props.cancel,
                r,
              ))
          )
            return;
          t.type === "touchstart" && t.preventDefault();
          const o = (0, Se.getTouchIdentifier)(t);
          this.touchIdentifier = o;
          const s = (0, et.getControlPosition)(t, o, this);
          if (s == null) return;
          const { x: a, y: i } = s,
            l = (0, et.createCoreData)(this, a, i);
          (0, zt.default)("DraggableCore: handleDragStart: %j", l),
            (0, zt.default)("calling", this.props.onStart),
            !(this.props.onStart(t, l) === !1 || this.mounted === !1) &&
              (this.props.enableUserSelectHack &&
                (0, Se.addUserSelectStyles)(n),
              (this.dragging = !0),
              (this.lastX = a),
              (this.lastY = i),
              (0, Se.addEvent)(n, tt.move, this.handleDrag),
              (0, Se.addEvent)(n, tt.stop, this.handleDragStop));
        }),
        Ee(this, "handleDrag", (t) => {
          const r = (0, et.getControlPosition)(t, this.touchIdentifier, this);
          if (r == null) return;
          let { x: n, y: o } = r;
          if (Array.isArray(this.props.grid)) {
            let i = n - this.lastX,
              l = o - this.lastY;
            if (
              (([i, l] = (0, et.snapToGrid)(this.props.grid, i, l)), !i && !l)
            )
              return;
            (n = this.lastX + i), (o = this.lastY + l);
          }
          const s = (0, et.createCoreData)(this, n, o);
          if (
            ((0, zt.default)("DraggableCore: handleDrag: %j", s),
            this.props.onDrag(t, s) === !1 || this.mounted === !1)
          ) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"));
            } catch {
              const l = document.createEvent("MouseEvents");
              l.initMouseEvent(
                "mouseup",
                !0,
                !0,
                window,
                0,
                0,
                0,
                0,
                0,
                !1,
                !1,
                !1,
                !1,
                0,
                null,
              ),
                this.handleDragStop(l);
            }
            return;
          }
          (this.lastX = n), (this.lastY = o);
        }),
        Ee(this, "handleDragStop", (t) => {
          if (!this.dragging) return;
          const r = (0, et.getControlPosition)(t, this.touchIdentifier, this);
          if (r == null) return;
          let { x: n, y: o } = r;
          if (Array.isArray(this.props.grid)) {
            let l = n - this.lastX || 0,
              u = o - this.lastY || 0;
            ([l, u] = (0, et.snapToGrid)(this.props.grid, l, u)),
              (n = this.lastX + l),
              (o = this.lastY + u);
          }
          const s = (0, et.createCoreData)(this, n, o);
          if (this.props.onStop(t, s) === !1 || this.mounted === !1) return !1;
          const i = this.findDOMNode();
          i &&
            this.props.enableUserSelectHack &&
            (0, Se.removeUserSelectStyles)(i.ownerDocument),
            (0, zt.default)("DraggableCore: handleDragStop: %j", s),
            (this.dragging = !1),
            (this.lastX = NaN),
            (this.lastY = NaN),
            i &&
              ((0, zt.default)("DraggableCore: Removing handlers"),
              (0, Se.removeEvent)(i.ownerDocument, tt.move, this.handleDrag),
              (0, Se.removeEvent)(
                i.ownerDocument,
                tt.stop,
                this.handleDragStop,
              ));
        }),
        Ee(
          this,
          "onMouseDown",
          (t) => ((tt = Ie.mouse), this.handleDragStart(t)),
        ),
        Ee(this, "onMouseUp", (t) => ((tt = Ie.mouse), this.handleDragStop(t))),
        Ee(
          this,
          "onTouchStart",
          (t) => ((tt = Ie.touch), this.handleDragStart(t)),
        ),
        Ee(
          this,
          "onTouchEnd",
          (t) => ((tt = Ie.touch), this.handleDragStop(t)),
        );
    }
    componentDidMount() {
      this.mounted = !0;
      const t = this.findDOMNode();
      t &&
        (0, Se.addEvent)(t, Ie.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const t = this.findDOMNode();
      if (t) {
        const { ownerDocument: r } = t;
        (0, Se.removeEvent)(r, Ie.mouse.move, this.handleDrag),
          (0, Se.removeEvent)(r, Ie.touch.move, this.handleDrag),
          (0, Se.removeEvent)(r, Ie.mouse.stop, this.handleDragStop),
          (0, Se.removeEvent)(r, Ie.touch.stop, this.handleDragStop),
          (0, Se.removeEvent)(t, Ie.touch.start, this.onTouchStart, {
            passive: !1,
          }),
          this.props.enableUserSelectHack && (0, Se.removeUserSelectStyles)(r);
      }
    }
    findDOMNode() {
      var t, r;
      return (t = this.props) !== null && t !== void 0 && t.nodeRef
        ? (r = this.props) === null ||
          r === void 0 ||
          (r = r.nodeRef) === null ||
          r === void 0
          ? void 0
          : r.current
        : Mu.default.findDOMNode(this);
    }
    render() {
      return an.cloneElement(an.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd,
      });
    }
  };
Or.default = _r;
Ee(_r, "displayName", "DraggableCore");
Ee(_r, "propTypes", {
  allowAnyClick: Pe.default.bool,
  children: Pe.default.node.isRequired,
  disabled: Pe.default.bool,
  enableUserSelectHack: Pe.default.bool,
  offsetParent: function (e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  grid: Pe.default.arrayOf(Pe.default.number),
  handle: Pe.default.string,
  cancel: Pe.default.string,
  nodeRef: Pe.default.object,
  onStart: Pe.default.func,
  onDrag: Pe.default.func,
  onStop: Pe.default.func,
  onMouseDown: Pe.default.func,
  scale: Pe.default.number,
  className: ln.dontSetMe,
  style: ln.dontSetMe,
  transform: ln.dontSetMe,
});
Ee(_r, "defaultProps", {
  allowAnyClick: !1,
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1,
});
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "DraggableCore", {
      enumerable: !0,
      get: function () {
        return l.default;
      },
    }),
    (e.default = void 0);
  var t = h(U),
    r = f(Tr),
    n = f(Rr),
    o = f(ru),
    s = ge,
    a = Ue,
    i = He,
    l = f(Or),
    u = f(Nr);
  function f(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function p(b) {
    if (typeof WeakMap != "function") return null;
    var y = new WeakMap(),
      E = new WeakMap();
    return (p = function (C) {
      return C ? E : y;
    })(b);
  }
  function h(b, y) {
    if (b && b.__esModule) return b;
    if (b === null || (typeof b != "object" && typeof b != "function"))
      return { default: b };
    var E = p(y);
    if (E && E.has(b)) return E.get(b);
    var C = {},
      T = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in b)
      if (R !== "default" && Object.prototype.hasOwnProperty.call(b, R)) {
        var k = T ? Object.getOwnPropertyDescriptor(b, R) : null;
        k && (k.get || k.set) ? Object.defineProperty(C, R, k) : (C[R] = b[R]);
      }
    return (C.default = b), E && E.set(b, C), C;
  }
  function v() {
    return (
      (v = Object.assign
        ? Object.assign.bind()
        : function (b) {
            for (var y = 1; y < arguments.length; y++) {
              var E = arguments[y];
              for (var C in E)
                Object.prototype.hasOwnProperty.call(E, C) && (b[C] = E[C]);
            }
            return b;
          }),
      v.apply(this, arguments)
    );
  }
  function w(b, y, E) {
    return (
      (y = m(y)),
      y in b
        ? Object.defineProperty(b, y, {
            value: E,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (b[y] = E),
      b
    );
  }
  function m(b) {
    var y = g(b, "string");
    return typeof y == "symbol" ? y : String(y);
  }
  function g(b, y) {
    if (typeof b != "object" || b === null) return b;
    var E = b[Symbol.toPrimitive];
    if (E !== void 0) {
      var C = E.call(b, y || "default");
      if (typeof C != "object") return C;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (y === "string" ? String : Number)(b);
  }
  class S extends t.Component {
    static getDerivedStateFromProps(y, E) {
      let { position: C } = y,
        { prevPropsPosition: T } = E;
      return C && (!T || C.x !== T.x || C.y !== T.y)
        ? ((0, u.default)("Draggable: getDerivedStateFromProps %j", {
            position: C,
            prevPropsPosition: T,
          }),
          { x: C.x, y: C.y, prevPropsPosition: { ...C } })
        : null;
    }
    constructor(y) {
      super(y),
        w(this, "onDragStart", (E, C) => {
          if (
            ((0, u.default)("Draggable: onDragStart: %j", C),
            this.props.onStart(E, (0, a.createDraggableData)(this, C)) === !1)
          )
            return !1;
          this.setState({ dragging: !0, dragged: !0 });
        }),
        w(this, "onDrag", (E, C) => {
          if (!this.state.dragging) return !1;
          (0, u.default)("Draggable: onDrag: %j", C);
          const T = (0, a.createDraggableData)(this, C),
            R = { x: T.x, y: T.y, slackX: 0, slackY: 0 };
          if (this.props.bounds) {
            const { x: M, y: W } = R;
            (R.x += this.state.slackX), (R.y += this.state.slackY);
            const [L, D] = (0, a.getBoundPosition)(this, R.x, R.y);
            (R.x = L),
              (R.y = D),
              (R.slackX = this.state.slackX + (M - R.x)),
              (R.slackY = this.state.slackY + (W - R.y)),
              (T.x = R.x),
              (T.y = R.y),
              (T.deltaX = R.x - this.state.x),
              (T.deltaY = R.y - this.state.y);
          }
          if (this.props.onDrag(E, T) === !1) return !1;
          this.setState(R);
        }),
        w(this, "onDragStop", (E, C) => {
          if (
            !this.state.dragging ||
            this.props.onStop(E, (0, a.createDraggableData)(this, C)) === !1
          )
            return !1;
          (0, u.default)("Draggable: onDragStop: %j", C);
          const R = { dragging: !1, slackX: 0, slackY: 0 };
          if (!!this.props.position) {
            const { x: M, y: W } = this.props.position;
            (R.x = M), (R.y = W);
          }
          this.setState(R);
        }),
        (this.state = {
          dragging: !1,
          dragged: !1,
          x: y.position ? y.position.x : y.defaultPosition.x,
          y: y.position ? y.position.y : y.defaultPosition.y,
          prevPropsPosition: { ...y.position },
          slackX: 0,
          slackY: 0,
          isElementSVG: !1,
        }),
        y.position &&
          !(y.onDrag || y.onStop) &&
          console.warn(
            "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.",
          );
    }
    componentDidMount() {
      typeof window.SVGElement < "u" &&
        this.findDOMNode() instanceof window.SVGElement &&
        this.setState({ isElementSVG: !0 });
    }
    componentWillUnmount() {
      this.setState({ dragging: !1 });
    }
    findDOMNode() {
      var y, E;
      return (y =
        (E = this.props) === null ||
        E === void 0 ||
        (E = E.nodeRef) === null ||
        E === void 0
          ? void 0
          : E.current) !== null && y !== void 0
        ? y
        : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: y,
        bounds: E,
        children: C,
        defaultPosition: T,
        defaultClassName: R,
        defaultClassNameDragging: k,
        defaultClassNameDragged: M,
        position: W,
        positionOffset: L,
        scale: D,
        ...V
      } = this.props;
      let _ = {},
        Y = null;
      const H = !!!W || this.state.dragging,
        $ = W || T,
        q = {
          x: (0, a.canDragX)(this) && H ? this.state.x : $.x,
          y: (0, a.canDragY)(this) && H ? this.state.y : $.y,
        };
      this.state.isElementSVG
        ? (Y = (0, s.createSVGTransform)(q, L))
        : (_ = (0, s.createCSSTransform)(q, L));
      const P = (0, o.default)(C.props.className || "", R, {
        [k]: this.state.dragging,
        [M]: this.state.dragged,
      });
      return t.createElement(
        l.default,
        v({}, V, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
        }),
        t.cloneElement(t.Children.only(C), {
          className: P,
          style: { ...C.props.style, ..._ },
          transform: Y,
        }),
      );
    }
  }
  (e.default = S),
    w(S, "displayName", "Draggable"),
    w(S, "propTypes", {
      ...l.default.propTypes,
      axis: r.default.oneOf(["both", "x", "y", "none"]),
      bounds: r.default.oneOfType([
        r.default.shape({
          left: r.default.number,
          right: r.default.number,
          top: r.default.number,
          bottom: r.default.number,
        }),
        r.default.string,
        r.default.oneOf([!1]),
      ]),
      defaultClassName: r.default.string,
      defaultClassNameDragging: r.default.string,
      defaultClassNameDragged: r.default.string,
      defaultPosition: r.default.shape({
        x: r.default.number,
        y: r.default.number,
      }),
      positionOffset: r.default.shape({
        x: r.default.oneOfType([r.default.number, r.default.string]),
        y: r.default.oneOfType([r.default.number, r.default.string]),
      }),
      position: r.default.shape({ x: r.default.number, y: r.default.number }),
      className: i.dontSetMe,
      style: i.dontSetMe,
      transform: i.dontSetMe,
    }),
    w(S, "defaultProps", {
      ...l.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: { x: 0, y: 0 },
      scale: 1,
    });
})(ea);
const { default: da, DraggableCore: $u } = ea;
Pr.exports = da;
Pr.exports.default = da;
Pr.exports.DraggableCore = $u;
var Fu = Pr.exports,
  Qn = {};
Qn.__esModule = !0;
Qn.cloneElement = Uu;
var Wu = zu(U);
function zu(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ss(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Cs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ss(Object(r), !0).forEach(function (n) {
          Bu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ss(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Bu(e, t, r) {
  return (
    (t = Vu(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Vu(e) {
  var t = Hu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Hu(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Uu(e, t) {
  return (
    t.style && e.props.style && (t.style = Cs(Cs({}, e.props.style), t.style)),
    t.className &&
      e.props.className &&
      (t.className = e.props.className + " " + t.className),
    Wu.default.cloneElement(e, t)
  );
}
var Jt = {};
Jt.__esModule = !0;
Jt.resizableProps = void 0;
var oe = Yu(Tr);
function Yu(e) {
  return e && e.__esModule ? e : { default: e };
}
var Xu = {
  axis: oe.default.oneOf(["both", "x", "y", "none"]),
  className: oe.default.string,
  children: oe.default.element.isRequired,
  draggableOpts: oe.default.shape({
    allowAnyClick: oe.default.bool,
    cancel: oe.default.string,
    children: oe.default.node,
    disabled: oe.default.bool,
    enableUserSelectHack: oe.default.bool,
    offsetParent: oe.default.node,
    grid: oe.default.arrayOf(oe.default.number),
    handle: oe.default.string,
    nodeRef: oe.default.object,
    onStart: oe.default.func,
    onDrag: oe.default.func,
    onStop: oe.default.func,
    onMouseDown: oe.default.func,
    scale: oe.default.number,
  }),
  height: function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var o = r[0];
    if (o.axis === "both" || o.axis === "y") {
      var s;
      return (s = oe.default.number).isRequired.apply(s, r);
    }
    return oe.default.number.apply(oe.default, r);
  },
  handle: oe.default.oneOfType([oe.default.node, oe.default.func]),
  handleSize: oe.default.arrayOf(oe.default.number),
  lockAspectRatio: oe.default.bool,
  maxConstraints: oe.default.arrayOf(oe.default.number),
  minConstraints: oe.default.arrayOf(oe.default.number),
  onResizeStop: oe.default.func,
  onResizeStart: oe.default.func,
  onResize: oe.default.func,
  resizeHandles: oe.default.arrayOf(
    oe.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"]),
  ),
  transformScale: oe.default.number,
  width: function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var o = r[0];
    if (o.axis === "both" || o.axis === "x") {
      var s;
      return (s = oe.default.number).isRequired.apply(s, r);
    }
    return oe.default.number.apply(oe.default, r);
  },
};
Jt.resizableProps = Xu;
Zt.__esModule = !0;
Zt.default = void 0;
var Bt = Ju(U),
  Ku = Fu,
  Gu = Qn,
  qu = Jt,
  Zu = [
    "children",
    "className",
    "draggableOpts",
    "width",
    "height",
    "handle",
    "handleSize",
    "lockAspectRatio",
    "axis",
    "minConstraints",
    "maxConstraints",
    "onResize",
    "onResizeStop",
    "onResizeStart",
    "resizeHandles",
    "transformScale",
  ];
function fa(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (fa = function (o) {
    return o ? r : t;
  })(e);
}
function Ju(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = fa(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : (n[s] = e[s]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function Pn() {
  return (
    (Pn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Pn.apply(this, arguments)
  );
}
function Qu(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Es(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Es(Object(r), !0).forEach(function (n) {
          ed(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Es(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ed(e, t, r) {
  return (
    (t = td(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function td(e) {
  var t = rd(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function rd(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nd(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Tn(e, t);
}
function Tn(e, t) {
  return (
    (Tn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Tn(e, t)
  );
}
var eo = (function (e) {
  nd(t, e);
  function t() {
    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++)
      s[a] = arguments[a];
    return (
      (n = e.call.apply(e, [this].concat(s)) || this),
      (n.handleRefs = {}),
      (n.lastHandleRect = null),
      (n.slack = null),
      n
    );
  }
  var r = t.prototype;
  return (
    (r.componentWillUnmount = function () {
      this.resetData();
    }),
    (r.resetData = function () {
      this.lastHandleRect = this.slack = null;
    }),
    (r.runConstraints = function (o, s) {
      var a = this.props,
        i = a.minConstraints,
        l = a.maxConstraints,
        u = a.lockAspectRatio;
      if (!i && !l && !u) return [o, s];
      if (u) {
        var f = this.props.width / this.props.height,
          p = o - this.props.width,
          h = s - this.props.height;
        Math.abs(p) > Math.abs(h * f) ? (s = o / f) : (o = s * f);
      }
      var v = o,
        w = s,
        m = this.slack || [0, 0],
        g = m[0],
        S = m[1];
      return (
        (o += g),
        (s += S),
        i && ((o = Math.max(i[0], o)), (s = Math.max(i[1], s))),
        l && ((o = Math.min(l[0], o)), (s = Math.min(l[1], s))),
        (this.slack = [g + (v - o), S + (w - s)]),
        [o, s]
      );
    }),
    (r.resizeHandler = function (o, s) {
      var a = this;
      return function (i, l) {
        var u = l.node,
          f = l.deltaX,
          p = l.deltaY;
        o === "onResizeStart" && a.resetData();
        var h =
            (a.props.axis === "both" || a.props.axis === "x") &&
            s !== "n" &&
            s !== "s",
          v =
            (a.props.axis === "both" || a.props.axis === "y") &&
            s !== "e" &&
            s !== "w";
        if (!(!h && !v)) {
          var w = s[0],
            m = s[s.length - 1],
            g = u.getBoundingClientRect();
          if (a.lastHandleRect != null) {
            if (m === "w") {
              var S = g.left - a.lastHandleRect.left;
              f += S;
            }
            if (w === "n") {
              var b = g.top - a.lastHandleRect.top;
              p += b;
            }
          }
          (a.lastHandleRect = g), m === "w" && (f = -f), w === "n" && (p = -p);
          var y = a.props.width + (h ? f / a.props.transformScale : 0),
            E = a.props.height + (v ? p / a.props.transformScale : 0),
            C = a.runConstraints(y, E);
          (y = C[0]), (E = C[1]);
          var T = y !== a.props.width || E !== a.props.height,
            R = typeof a.props[o] == "function" ? a.props[o] : null,
            k = o === "onResize" && !T;
          R &&
            !k &&
            (i.persist == null || i.persist(),
            R(i, { node: u, size: { width: y, height: E }, handle: s })),
            o === "onResizeStop" && a.resetData();
        }
      };
    }),
    (r.renderResizeHandle = function (o, s) {
      var a = this.props.handle;
      if (!a)
        return Bt.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + o,
          ref: s,
        });
      if (typeof a == "function") return a(o, s);
      var i = typeof a.type == "string",
        l = cn({ ref: s }, i ? {} : { handleAxis: o });
      return Bt.cloneElement(a, l);
    }),
    (r.render = function () {
      var o = this,
        s = this.props,
        a = s.children,
        i = s.className,
        l = s.draggableOpts;
      s.width,
        s.height,
        s.handle,
        s.handleSize,
        s.lockAspectRatio,
        s.axis,
        s.minConstraints,
        s.maxConstraints,
        s.onResize,
        s.onResizeStop,
        s.onResizeStart;
      var u = s.resizeHandles;
      s.transformScale;
      var f = Qu(s, Zu);
      return (0, Gu.cloneElement)(
        a,
        cn(
          cn({}, f),
          {},
          {
            className: (i ? i + " " : "") + "react-resizable",
            children: [].concat(
              a.props.children,
              u.map(function (p) {
                var h,
                  v =
                    (h = o.handleRefs[p]) != null
                      ? h
                      : (o.handleRefs[p] = Bt.createRef());
                return Bt.createElement(
                  Ku.DraggableCore,
                  Pn({}, l, {
                    nodeRef: v,
                    key: "resizableHandle-" + p,
                    onStop: o.resizeHandler("onResizeStop", p),
                    onStart: o.resizeHandler("onResizeStart", p),
                    onDrag: o.resizeHandler("onResize", p),
                  }),
                  o.renderResizeHandle(p, v),
                );
              }),
            ),
          },
        ),
      );
    }),
    t
  );
})(Bt.Component);
Zt.default = eo;
eo.propTypes = qu.resizableProps;
eo.defaultProps = {
  axis: "both",
  handleSize: [20, 20],
  lockAspectRatio: !1,
  minConstraints: [20, 20],
  maxConstraints: [1 / 0, 1 / 0],
  resizeHandles: ["se"],
  transformScale: 1,
};
var jr = {};
jr.__esModule = !0;
jr.default = void 0;
var un = ld(U),
  od = pa(Tr),
  sd = pa(Zt),
  ad = Jt,
  id = [
    "handle",
    "handleSize",
    "onResize",
    "onResizeStart",
    "onResizeStop",
    "draggableOpts",
    "minConstraints",
    "maxConstraints",
    "lockAspectRatio",
    "axis",
    "width",
    "height",
    "resizeHandles",
    "style",
    "transformScale",
  ];
function pa(e) {
  return e && e.__esModule ? e : { default: e };
}
function ma(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (ma = function (o) {
    return o ? r : t;
  })(e);
}
function ld(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var r = ma(t);
  if (r && r.has(e)) return r.get(e);
  var n = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, s, a) : (n[s] = e[s]);
    }
  return (n.default = e), r && r.set(e, n), n;
}
function On() {
  return (
    (On = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    On.apply(this, arguments)
  );
}
function Rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rs(Object(r), !0).forEach(function (n) {
          cd(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rs(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cd(e, t, r) {
  return (
    (t = ud(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ud(e) {
  var t = dd(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function dd(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fd(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function pd(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Nn(e, t);
}
function Nn(e, t) {
  return (
    (Nn = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, o) {
          return (n.__proto__ = o), n;
        }),
    Nn(e, t)
  );
}
var ha = (function (e) {
  pd(t, e);
  function t() {
    for (var n, o = arguments.length, s = new Array(o), a = 0; a < o; a++)
      s[a] = arguments[a];
    return (
      (n = e.call.apply(e, [this].concat(s)) || this),
      (n.state = {
        width: n.props.width,
        height: n.props.height,
        propsWidth: n.props.width,
        propsHeight: n.props.height,
      }),
      (n.onResize = function (i, l) {
        var u = l.size;
        n.props.onResize
          ? (i.persist == null || i.persist(),
            n.setState(u, function () {
              return n.props.onResize && n.props.onResize(i, l);
            }))
          : n.setState(u);
      }),
      n
    );
  }
  t.getDerivedStateFromProps = function (o, s) {
    return s.propsWidth !== o.width || s.propsHeight !== o.height
      ? {
          width: o.width,
          height: o.height,
          propsWidth: o.width,
          propsHeight: o.height,
        }
      : null;
  };
  var r = t.prototype;
  return (
    (r.render = function () {
      var o = this.props,
        s = o.handle,
        a = o.handleSize;
      o.onResize;
      var i = o.onResizeStart,
        l = o.onResizeStop,
        u = o.draggableOpts,
        f = o.minConstraints,
        p = o.maxConstraints,
        h = o.lockAspectRatio,
        v = o.axis;
      o.width, o.height;
      var w = o.resizeHandles,
        m = o.style,
        g = o.transformScale,
        S = fd(o, id);
      return un.createElement(
        sd.default,
        {
          axis: v,
          draggableOpts: u,
          handle: s,
          handleSize: a,
          height: this.state.height,
          lockAspectRatio: h,
          maxConstraints: p,
          minConstraints: f,
          onResizeStart: i,
          onResize: this.onResize,
          onResizeStop: l,
          resizeHandles: w,
          transformScale: g,
          width: this.state.width,
        },
        un.createElement(
          "div",
          On({}, S, {
            style: hr(
              hr({}, m),
              {},
              {
                width: this.state.width + "px",
                height: this.state.height + "px",
              },
            ),
          }),
        ),
      );
    }),
    t
  );
})(un.Component);
jr.default = ha;
ha.propTypes = hr(
  hr({}, ad.resizableProps),
  {},
  { children: od.default.element },
);
Kn.exports = function () {
  throw new Error(
    "Don't instantiate Resizable directly! Use require('react-resizable').Resizable",
  );
};
Kn.exports.Resizable = Zt.default;
var md = (Kn.exports.ResizableBox = jr.default);
const hd = { default: 768, mobile: 1488 },
  to = (e = hd.default) => {
    const [t, r] = U.useState(!1);
    return (
      U.useEffect(() => {
        const n = window.matchMedia(`(max-width: ${e}px)`);
        r(n.matches);
        const o = () => r(n.matches);
        return (
          window.addEventListener("resize", o),
          () => window.removeEventListener("resize", o)
        );
      }, [e]),
      t
    );
  },
  ro = (e) => {
    if (!e) return [];
    const t = e.split("/");
    return e
      .split("/")
      .slice(0, t.length - 2)
      .map((n) =>
        n
          .split("")
          .map((o) => (o === "X" ? "black" : o === "O" ? "white" : null)),
      );
  };
function ga(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = ga(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function gd() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = ga(e)) && (n && (n += " "), (n += t));
  return n;
}
const no = "-",
  vd = (e) => {
    const t = yd(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    return {
      getClassGroupId: (a) => {
        const i = a.split(no);
        return i[0] === "" && i.length !== 1 && i.shift(), va(i, t) || bd(a);
      },
      getConflictingClassGroupIds: (a, i) => {
        const l = r[a] || [];
        return i && n[a] ? [...l, ...n[a]] : l;
      },
    };
  },
  va = (e, t) => {
    var a;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      n = t.nextPart.get(r),
      o = n ? va(e.slice(1), n) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(no);
    return (a = t.validators.find(({ validator: i }) => i(s))) == null
      ? void 0
      : a.classGroupId;
  },
  Ps = /^\[(.+)\]$/,
  bd = (e) => {
    if (Ps.test(e)) {
      const t = Ps.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  yd = (e) => {
    const { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      wd(Object.entries(e.classGroups), r).forEach(([s, a]) => {
        _n(a, n, s, t);
      }),
      n
    );
  },
  _n = (e, t, r, n) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Ts(t, o);
        s.classGroupId = r;
        return;
      }
      if (typeof o == "function") {
        if (xd(o)) {
          _n(o(n), t, r, n);
          return;
        }
        t.validators.push({ validator: o, classGroupId: r });
        return;
      }
      Object.entries(o).forEach(([s, a]) => {
        _n(a, Ts(t, s), r, n);
      });
    });
  },
  Ts = (e, t) => {
    let r = e;
    return (
      t.split(no).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  xd = (e) => e.isThemeGetter,
  wd = (e, t) =>
    t
      ? e.map(([r, n]) => {
          const o = n.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
                ? Object.fromEntries(
                    Object.entries(s).map(([a, i]) => [t + a, i]),
                  )
                : s,
          );
          return [r, o];
        })
      : e,
  Sd = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    const o = (s, a) => {
      r.set(s, a), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    };
    return {
      get(s) {
        let a = r.get(s);
        if (a !== void 0) return a;
        if ((a = n.get(s)) !== void 0) return o(s, a), a;
      },
      set(s, a) {
        r.has(s) ? r.set(s, a) : o(s, a);
      },
    };
  },
  ba = "!",
  Cd = (e) => {
    const { separator: t, experimentalParseClassName: r } = e,
      n = t.length === 1,
      o = t[0],
      s = t.length,
      a = (i) => {
        const l = [];
        let u = 0,
          f = 0,
          p;
        for (let g = 0; g < i.length; g++) {
          let S = i[g];
          if (u === 0) {
            if (S === o && (n || i.slice(g, g + s) === t)) {
              l.push(i.slice(f, g)), (f = g + s);
              continue;
            }
            if (S === "/") {
              p = g;
              continue;
            }
          }
          S === "[" ? u++ : S === "]" && u--;
        }
        const h = l.length === 0 ? i : i.substring(f),
          v = h.startsWith(ba),
          w = v ? h.substring(1) : h,
          m = p && p > f ? p - f : void 0;
        return {
          modifiers: l,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: m,
        };
      };
    return r ? (i) => r({ className: i, parseClassName: a }) : a;
  },
  Ed = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  },
  Rd = (e) => ({ cache: Sd(e.cacheSize), parseClassName: Cd(e), ...vd(e) }),
  Pd = /\s+/,
  Td = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      a = e.trim().split(Pd);
    let i = "";
    for (let l = a.length - 1; l >= 0; l -= 1) {
      const u = a[l],
        {
          modifiers: f,
          hasImportantModifier: p,
          baseClassName: h,
          maybePostfixModifierPosition: v,
        } = r(u);
      let w = !!v,
        m = n(w ? h.substring(0, v) : h);
      if (!m) {
        if (!w) {
          i = u + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((m = n(h)), !m)) {
          i = u + (i.length > 0 ? " " + i : i);
          continue;
        }
        w = !1;
      }
      const g = Ed(f).join(":"),
        S = p ? g + ba : g,
        b = S + m;
      if (s.includes(b)) continue;
      s.push(b);
      const y = o(m, w);
      for (let E = 0; E < y.length; ++E) {
        const C = y[E];
        s.push(S + C);
      }
      i = u + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function Od() {
  let e = 0,
    t,
    r,
    n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = ya(t)) && (n && (n += " "), (n += r));
  return n;
}
const ya = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = ya(e[n])) && (r && (r += " "), (r += t));
  return r;
};
function Nd(e, ...t) {
  let r,
    n,
    o,
    s = a;
  function a(l) {
    const u = t.reduce((f, p) => p(f), e());
    return (r = Rd(u)), (n = r.cache.get), (o = r.cache.set), (s = i), i(l);
  }
  function i(l) {
    const u = n(l);
    if (u) return u;
    const f = Td(l, r);
    return o(l, f), f;
  }
  return function () {
    return s(Od.apply(null, arguments));
  };
}
const he = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  xa = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  _d = /^\d+\/\d+$/,
  jd = new Set(["px", "full", "screen"]),
  Ad = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Dd =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Md = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  kd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Id =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ge = (e) => Ct(e) || jd.has(e) || _d.test(e),
  rt = (e) => _t(e, "length", Hd),
  Ct = (e) => !!e && !Number.isNaN(Number(e)),
  dn = (e) => _t(e, "number", Ct),
  Vt = (e) => !!e && Number.isInteger(Number(e)),
  Ld = (e) => e.endsWith("%") && Ct(e.slice(0, -1)),
  se = (e) => xa.test(e),
  nt = (e) => Ad.test(e),
  $d = new Set(["length", "size", "percentage"]),
  Fd = (e) => _t(e, $d, wa),
  Wd = (e) => _t(e, "position", wa),
  zd = new Set(["image", "url"]),
  Bd = (e) => _t(e, zd, Yd),
  Vd = (e) => _t(e, "", Ud),
  Ht = () => !0,
  _t = (e, t, r) => {
    const n = xa.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  },
  Hd = (e) => Dd.test(e) && !Md.test(e),
  wa = () => !1,
  Ud = (e) => kd.test(e),
  Yd = (e) => Id.test(e),
  Xd = () => {
    const e = he("colors"),
      t = he("spacing"),
      r = he("blur"),
      n = he("brightness"),
      o = he("borderColor"),
      s = he("borderRadius"),
      a = he("borderSpacing"),
      i = he("borderWidth"),
      l = he("contrast"),
      u = he("grayscale"),
      f = he("hueRotate"),
      p = he("invert"),
      h = he("gap"),
      v = he("gradientColorStops"),
      w = he("gradientColorStopPositions"),
      m = he("inset"),
      g = he("margin"),
      S = he("opacity"),
      b = he("padding"),
      y = he("saturate"),
      E = he("scale"),
      C = he("sepia"),
      T = he("skew"),
      R = he("space"),
      k = he("translate"),
      M = () => ["auto", "contain", "none"],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      L = () => ["auto", se, t],
      D = () => [se, t],
      V = () => ["", Ge, rt],
      _ = () => ["auto", Ct, se],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      F = () => ["solid", "dashed", "dotted", "double", "none"],
      H = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      $ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      q = () => ["", "0", se],
      P = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      j = () => [Ct, se];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ht],
        spacing: [Ge, rt],
        blur: ["none", "", nt, se],
        brightness: j(),
        borderColor: [e],
        borderRadius: ["none", "", "full", nt, se],
        borderSpacing: D(),
        borderWidth: V(),
        contrast: j(),
        grayscale: q(),
        hueRotate: j(),
        invert: q(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ld, rt],
        inset: L(),
        margin: L(),
        opacity: j(),
        padding: D(),
        saturate: j(),
        scale: j(),
        sepia: q(),
        skew: j(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", se] }],
        container: ["container"],
        columns: [{ columns: [nt] }],
        "break-after": [{ "break-after": P() }],
        "break-before": [{ "break-before": P() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), se] }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [m] }],
        "inset-x": [{ "inset-x": [m] }],
        "inset-y": [{ "inset-y": [m] }],
        start: [{ start: [m] }],
        end: [{ end: [m] }],
        top: [{ top: [m] }],
        right: [{ right: [m] }],
        bottom: [{ bottom: [m] }],
        left: [{ left: [m] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Vt, se] }],
        basis: [{ basis: L() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", se] }],
        grow: [{ grow: q() }],
        shrink: [{ shrink: q() }],
        order: [{ order: ["first", "last", "none", Vt, se] }],
        "grid-cols": [{ "grid-cols": [Ht] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Vt, se] }, se] }],
        "col-start": [{ "col-start": _() }],
        "col-end": [{ "col-end": _() }],
        "grid-rows": [{ "grid-rows": [Ht] }],
        "row-start-end": [{ row: ["auto", { span: [Vt, se] }, se] }],
        "row-start": [{ "row-start": _() }],
        "row-end": [{ "row-end": _() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...$()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...$(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...$(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [g] }],
        mx: [{ mx: [g] }],
        my: [{ my: [g] }],
        ms: [{ ms: [g] }],
        me: [{ me: [g] }],
        mt: [{ mt: [g] }],
        mr: [{ mr: [g] }],
        mb: [{ mb: [g] }],
        ml: [{ ml: [g] }],
        "space-x": [{ "space-x": [R] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [R] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, t] }],
        "min-w": [{ "min-w": [se, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              se,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [nt] },
              nt,
            ],
          },
        ],
        h: [{ h: [se, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [se, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [se, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", nt, rt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              dn,
            ],
          },
        ],
        "font-family": [{ font: [Ht] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              se,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ct, dn] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ge,
              se,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", se] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [S] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [S] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...F(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ge, rt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ge, se] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [S] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), Wd] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Fd] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Bd,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [v] }],
        "gradient-via": [{ via: [v] }],
        "gradient-to": [{ to: [v] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [i] }],
        "border-w-x": [{ "border-x": [i] }],
        "border-w-y": [{ "border-y": [i] }],
        "border-w-s": [{ "border-s": [i] }],
        "border-w-e": [{ "border-e": [i] }],
        "border-w-t": [{ "border-t": [i] }],
        "border-w-r": [{ "border-r": [i] }],
        "border-w-b": [{ "border-b": [i] }],
        "border-w-l": [{ "border-l": [i] }],
        "border-opacity": [{ "border-opacity": [S] }],
        "border-style": [{ border: [...F(), "hidden"] }],
        "divide-x": [{ "divide-x": [i] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [i] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [S] }],
        "divide-style": [{ divide: F() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...F()] }],
        "outline-offset": [{ "outline-offset": [Ge, se] }],
        "outline-w": [{ outline: [Ge, rt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [S] }],
        "ring-offset-w": [{ "ring-offset": [Ge, rt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", nt, Vd] }],
        "shadow-color": [{ shadow: [Ht] }],
        opacity: [{ opacity: [S] }],
        "mix-blend": [{ "mix-blend": [...H(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": H() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", nt, se] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [f] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [S] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [a] }],
        "border-spacing-x": [{ "border-spacing-x": [a] }],
        "border-spacing-y": [{ "border-spacing-y": [a] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              se,
            ],
          },
        ],
        duration: [{ duration: j() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", se] }],
        delay: [{ delay: j() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [E] }],
        "scale-x": [{ "scale-x": [E] }],
        "scale-y": [{ "scale-y": [E] }],
        rotate: [{ rotate: [Vt, se] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [T] }],
        "skew-y": [{ "skew-y": [T] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              se,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              se,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", se] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ge, rt, dn] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Kd = Nd(Xd),
  fe = (...e) => Kd(gd(e));
class Sa {
  constructor(t) {
    is(this, "board");
    this.board = t;
  }
  countTotal(t, r) {
    const n = this.board[t.y][t.x];
    let o = 0;
    for (
      let s = t.y + r.y, a = t.x + r.x;
      s >= 0 &&
      s < this.board.length &&
      a >= 0 &&
      a < this.board[0].length &&
      this.board[s][a] === n;
      s += r.y, a += r.x
    )
      o++;
    return o;
  }
  findWinner(t) {
    if (
      this.countTotal(t, { y: 1, x: 0 }) +
        this.countTotal(t, { y: -1, x: 0 }) >=
        4 ||
      this.countTotal(t, { y: 0, x: 1 }) +
        this.countTotal(t, { y: 0, x: -1 }) >=
        4 ||
      this.countTotal(t, { y: 1, x: 1 }) +
        this.countTotal(t, { y: -1, x: -1 }) >=
        4 ||
      this.countTotal(t, { y: 1, x: -1 }) +
        this.countTotal(t, { y: -1, x: 1 }) >=
        4
    )
      return this.board[t.y][t.x];
    if (this.board.every((r) => r.every((n) => n))) return "draw";
  }
}
const Gd = (e) => {
  const [t, r] = U.useState(() => ro(e.gen)),
    [n, o] = U.useState(e.movesHistory[e.movesCount]),
    [s, a] = U.useState(void 0),
    i = U.useRef(void 0),
    l = U.useRef(void 0);
  U.useEffect(() => {
    if (i.current === void 0 || l.current === void 0) return;
    const h = new Sa(
      t.map((v) => v.map((w) => (w === null ? "" : w))),
    ).findWinner({ x: i.current, y: l.current });
    a(h);
  }, [t]);
  const u = U.useCallback((p, h) => {
      const { x: v, y: w } = p;
      (i.current = v),
        (l.current = w),
        r((m) =>
          m.map((g, S) => (S !== v ? g : g.map((b, y) => (y !== w ? b : h)))),
        ),
        o(p);
    }, []),
    f = U.useCallback((p, h) => {
      const { x: v, y: w } = p;
      r((m) =>
        m.map((g, S) => (S !== v ? g : g.map((b, y) => (y !== w ? b : null)))),
      ),
        o(h);
    }, []);
  return { tiles: t, lastTile: n, winner: s, addTile: u, removeTile: f };
};
function qd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ca(...e) {
  return (t) => e.forEach((r) => qd(r, t));
}
function ie(...e) {
  return d.useCallback(Ca(...e), e);
}
var dt = d.forwardRef((e, t) => {
  const { children: r, ...n } = e,
    o = d.Children.toArray(r),
    s = o.find(Jd);
  if (s) {
    const a = s.props.children,
      i = o.map((l) =>
        l === s
          ? d.Children.count(a) > 1
            ? d.Children.only(null)
            : d.isValidElement(a)
              ? a.props.children
              : null
          : l,
      );
    return c.jsx(jn, {
      ...n,
      ref: t,
      children: d.isValidElement(a) ? d.cloneElement(a, void 0, i) : null,
    });
  }
  return c.jsx(jn, { ...n, ref: t, children: r });
});
dt.displayName = "Slot";
var jn = d.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (d.isValidElement(r)) {
    const o = ef(r);
    return d.cloneElement(r, { ...Qd(n, r.props), ref: t ? Ca(t, o) : o });
  }
  return d.Children.count(r) > 1 ? d.Children.only(null) : null;
});
jn.displayName = "SlotClone";
var Zd = ({ children: e }) => c.jsx(c.Fragment, { children: e });
function Jd(e) {
  return d.isValidElement(e) && e.type === Zd;
}
function Qd(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n],
      s = t[n];
    /^on[A-Z]/.test(n)
      ? o && s
        ? (r[n] = (...i) => {
            s(...i), o(...i);
          })
        : o && (r[n] = o)
      : n === "style"
        ? (r[n] = { ...o, ...s })
        : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ef(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
const tf = Qs(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  ft = d.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: r,
        asChild: n = !1,
        loading: o = !1,
        children: s,
        ...a
      },
      i,
    ) => {
      const l = n ? dt : "button";
      return c.jsxs(l, {
        className: fe(tf({ variant: t, size: r, className: e }), "relative"),
        ref: i,
        disabled: o || a.disabled,
        ...a,
        children: [
          o
            ? c.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: c.jsx(rr, {
                  size: r === "sm" ? "sm" : r === "lg" ? "lg" : "md",
                }),
              })
            : null,
          c.jsx("span", {
            className: o ? "opacity-0" : "flex items-center",
            children: s,
          }),
        ],
      });
    },
  );
ft.displayName = "Button";
const jt = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("div", {
    ref: r,
    className: fe("bg-card text-card-foreground rounded-xl border shadow", e),
    ...t,
  }),
);
jt.displayName = "Card";
const oo = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("div", {
    ref: r,
    className: fe("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
oo.displayName = "CardHeader";
const so = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("h3", {
    ref: r,
    className: fe("font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
so.displayName = "CardTitle";
const ao = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("p", {
    ref: r,
    className: fe("text-muted-foreground text-sm", e),
    ...t,
  }),
);
ao.displayName = "CardDescription";
const At = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("div", { ref: r, className: fe("p-6 pt-0", e), ...t }),
);
At.displayName = "CardContent";
const io = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx("div", {
    ref: r,
    className: fe("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
io.displayName = "CardFooter";
const Ea = ({
  title: e,
  secondaryTitle: t,
  text: r,
  acceptButtonText: n,
  declineButtonText: o,
  onAccept: s,
  onDecline: a,
}) => {
  const [i, l] = U.useState(!0),
    u = () => {
      l(!0), s();
    },
    f = () => {
      l(!1), a();
    };
  return i
    ? c.jsx("div", {
        className:
          "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",
        children: c.jsxs(jt, {
          className: "w-full max-w-md border-gray-800 bg-[#2A2A2A]",
          children: [
            c.jsxs(oo, {
              className: "space-y-1",
              children: [
                c.jsx(so, { className: "text-2xl text-gray-100", children: e }),
                c.jsx(ao, { className: "text-gray-400", children: t }),
              ],
            }),
            c.jsx(At, {
              children: c.jsx("p", {
                className: "text-sm text-gray-300",
                children: r,
              }),
            }),
            c.jsxs(io, {
              className: "flex gap-2",
              children: [
                c.jsx(ft, {
                  className:
                    "flex-1 bg-[#98C379] font-medium text-black hover:bg-[#89b46c]",
                  size: "lg",
                  onClick: u,
                  children: n,
                }),
                c.jsx(ft, {
                  className:
                    "flex-1 bg-gray-700 text-gray-100 hover:bg-gray-600",
                  size: "lg",
                  variant: "outline",
                  onClick: f,
                  children: o,
                }),
              ],
            }),
          ],
        }),
      })
    : null;
};
Ea.displayName = "AlertDialog";
const Ra = d.forwardRef(({ className: e, type: t, ...r }, n) =>
  c.jsx("input", {
    type: t,
    className: fe(
      "border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...r,
  }),
);
Ra.displayName = "Input";
const rf = ({ isVisible: e }) =>
  e
    ? c.jsx("div", {
        className: fe(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        ),
        children: c.jsx(rr, { size: "lg", className: "text-white" }),
      })
    : null;
var nf = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  re = nf.reduce((e, t) => {
    const r = d.forwardRef((n, o) => {
      const { asChild: s, ...a } = n,
        i = s ? dt : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        c.jsx(i, { ...a, ref: o })
      );
    });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Pa(e, t) {
  e && qt.flushSync(() => e.dispatchEvent(t));
}
var we =
  globalThis != null && globalThis.document ? d.useLayoutEffect : () => {};
function of(e, t) {
  return d.useReducer((r, n) => t[r][n] ?? r, e);
}
var Je = (e) => {
  const { present: t, children: r } = e,
    n = sf(t),
    o =
      typeof r == "function" ? r({ present: n.isPresent }) : d.Children.only(r),
    s = ie(n.ref, af(o));
  return typeof r == "function" || n.isPresent
    ? d.cloneElement(o, { ref: s })
    : null;
};
Je.displayName = "Presence";
function sf(e) {
  const [t, r] = d.useState(),
    n = d.useRef({}),
    o = d.useRef(e),
    s = d.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [i, l] = of(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    d.useEffect(() => {
      const u = sr(n.current);
      s.current = i === "mounted" ? u : "none";
    }, [i]),
    we(() => {
      const u = n.current,
        f = o.current;
      if (f !== e) {
        const h = s.current,
          v = sr(u);
        e
          ? l("MOUNT")
          : v === "none" || (u == null ? void 0 : u.display) === "none"
            ? l("UNMOUNT")
            : l(f && h !== v ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, l]),
    we(() => {
      if (t) {
        let u;
        const f = t.ownerDocument.defaultView ?? window,
          p = (v) => {
            const m = sr(n.current).includes(v.animationName);
            if (v.target === t && m && (l("ANIMATION_END"), !o.current)) {
              const g = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = g);
                }));
            }
          },
          h = (v) => {
            v.target === t && (s.current = sr(n.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            f.clearTimeout(u),
              t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: d.useCallback((u) => {
        u && (n.current = getComputedStyle(u)), r(u);
      }, []),
    }
  );
}
function sr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function af(e) {
  var n, o;
  let t =
      (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : n.get,
    r = t && "isReactWarning" in t && t.isReactWarning;
  return r
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (r = t && "isReactWarning" in t && t.isReactWarning),
      r ? e.props.ref : e.props.ref || e.ref);
}
function lf(e, t) {
  const r = d.createContext(t),
    n = (s) => {
      const { children: a, ...i } = s,
        l = d.useMemo(() => i, Object.values(i));
      return c.jsx(r.Provider, { value: l, children: a });
    };
  n.displayName = e + "Provider";
  function o(s) {
    const a = d.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Dt(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = d.createContext(a),
      l = r.length;
    r = [...r, a];
    const u = (p) => {
      var S;
      const { scope: h, children: v, ...w } = p,
        m = ((S = h == null ? void 0 : h[e]) == null ? void 0 : S[l]) || i,
        g = d.useMemo(() => w, Object.values(w));
      return c.jsx(m.Provider, { value: g, children: v });
    };
    u.displayName = s + "Provider";
    function f(p, h) {
      var m;
      const v = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || i,
        w = d.useContext(v);
      if (w) return w;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const o = () => {
    const s = r.map((a) => d.createContext(a));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (o.scopeName = e), [n, cf(o, ...t)];
}
function cf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const a = n.reduce((i, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...i, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function ye(e) {
  const t = d.useRef(e);
  return (
    d.useEffect(() => {
      t.current = e;
    }),
    d.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = t.current) == null ? void 0 : n.call(t, ...r);
        },
      [],
    )
  );
}
var uf = d.createContext(void 0);
function lo(e) {
  const t = d.useContext(uf);
  return e || t || "ltr";
}
function Yt(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function J(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), r === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function df(e, t) {
  return d.useReducer((r, n) => t[r][n] ?? r, e);
}
var co = "ScrollArea",
  [Ta, rv] = Dt(co),
  [ff, De] = Ta(co),
  Oa = d.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: o,
        scrollHideDelay: s = 600,
        ...a
      } = e,
      [i, l] = d.useState(null),
      [u, f] = d.useState(null),
      [p, h] = d.useState(null),
      [v, w] = d.useState(null),
      [m, g] = d.useState(null),
      [S, b] = d.useState(0),
      [y, E] = d.useState(0),
      [C, T] = d.useState(!1),
      [R, k] = d.useState(!1),
      M = ie(t, (L) => l(L)),
      W = lo(o);
    return c.jsx(ff, {
      scope: r,
      type: n,
      dir: W,
      scrollHideDelay: s,
      scrollArea: i,
      viewport: u,
      onViewportChange: f,
      content: p,
      onContentChange: h,
      scrollbarX: v,
      onScrollbarXChange: w,
      scrollbarXEnabled: C,
      onScrollbarXEnabledChange: T,
      scrollbarY: m,
      onScrollbarYChange: g,
      scrollbarYEnabled: R,
      onScrollbarYEnabledChange: k,
      onCornerWidthChange: b,
      onCornerHeightChange: E,
      children: c.jsx(re.div, {
        dir: W,
        ...a,
        ref: M,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": S + "px",
          "--radix-scroll-area-corner-height": y + "px",
          ...e.style,
        },
      }),
    });
  });
Oa.displayName = co;
var Na = "ScrollAreaViewport",
  _a = d.forwardRef((e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...s } = e,
      a = De(Na, r),
      i = d.useRef(null),
      l = ie(t, i, a.onViewportChange);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        c.jsx(re.div, {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: l,
          style: {
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: c.jsx("div", {
            ref: a.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: n,
          }),
        }),
      ],
    });
  });
_a.displayName = Na;
var Ye = "ScrollAreaScrollbar",
  uo = d.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = De(Ye, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o,
      i = e.orientation === "horizontal";
    return (
      d.useEffect(
        () => (
          i ? s(!0) : a(!0),
          () => {
            i ? s(!1) : a(!1);
          }
        ),
        [i, s, a],
      ),
      o.type === "hover"
        ? c.jsx(pf, { ...n, ref: t, forceMount: r })
        : o.type === "scroll"
          ? c.jsx(mf, { ...n, ref: t, forceMount: r })
          : o.type === "auto"
            ? c.jsx(ja, { ...n, ref: t, forceMount: r })
            : o.type === "always"
              ? c.jsx(fo, { ...n, ref: t })
              : null
    );
  });
uo.displayName = Ye;
var pf = d.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = De(Ye, e.__scopeScrollArea),
      [s, a] = d.useState(!1);
    return (
      d.useEffect(() => {
        const i = o.scrollArea;
        let l = 0;
        if (i) {
          const u = () => {
              window.clearTimeout(l), a(!0);
            },
            f = () => {
              l = window.setTimeout(() => a(!1), o.scrollHideDelay);
            };
          return (
            i.addEventListener("pointerenter", u),
            i.addEventListener("pointerleave", f),
            () => {
              window.clearTimeout(l),
                i.removeEventListener("pointerenter", u),
                i.removeEventListener("pointerleave", f);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      c.jsx(Je, {
        present: r || s,
        children: c.jsx(ja, {
          "data-state": s ? "visible" : "hidden",
          ...n,
          ref: t,
        }),
      })
    );
  }),
  mf = d.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = De(Ye, e.__scopeScrollArea),
      s = e.orientation === "horizontal",
      a = Dr(() => l("SCROLL_END"), 100),
      [i, l] = df("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      d.useEffect(() => {
        if (i === "idle") {
          const u = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [i, o.scrollHideDelay, l]),
      d.useEffect(() => {
        const u = o.viewport,
          f = s ? "scrollLeft" : "scrollTop";
        if (u) {
          let p = u[f];
          const h = () => {
            const v = u[f];
            p !== v && (l("SCROLL"), a()), (p = v);
          };
          return (
            u.addEventListener("scroll", h),
            () => u.removeEventListener("scroll", h)
          );
        }
      }, [o.viewport, s, l, a]),
      c.jsx(Je, {
        present: r || i !== "hidden",
        children: c.jsx(fo, {
          "data-state": i === "hidden" ? "hidden" : "visible",
          ...n,
          ref: t,
          onPointerEnter: J(e.onPointerEnter, () => l("POINTER_ENTER")),
          onPointerLeave: J(e.onPointerLeave, () => l("POINTER_LEAVE")),
        }),
      })
    );
  }),
  ja = d.forwardRef((e, t) => {
    const r = De(Ye, e.__scopeScrollArea),
      { forceMount: n, ...o } = e,
      [s, a] = d.useState(!1),
      i = e.orientation === "horizontal",
      l = Dr(() => {
        if (r.viewport) {
          const u = r.viewport.offsetWidth < r.viewport.scrollWidth,
            f = r.viewport.offsetHeight < r.viewport.scrollHeight;
          a(i ? u : f);
        }
      }, 10);
    return (
      Tt(r.viewport, l),
      Tt(r.content, l),
      c.jsx(Je, {
        present: n || s,
        children: c.jsx(fo, {
          "data-state": s ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  fo = d.forwardRef((e, t) => {
    const { orientation: r = "vertical", ...n } = e,
      o = De(Ye, e.__scopeScrollArea),
      s = d.useRef(null),
      a = d.useRef(0),
      [i, l] = d.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = Ia(i.viewport, i.content),
      f = {
        ...n,
        sizes: i,
        onSizesChange: l,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (h) => (s.current = h),
        onThumbPointerUp: () => (a.current = 0),
        onThumbPointerDown: (h) => (a.current = h),
      };
    function p(h, v) {
      return xf(h, a.current, i, v);
    }
    return r === "horizontal"
      ? c.jsx(hf, {
          ...f,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && s.current) {
              const h = o.viewport.scrollLeft,
                v = Os(h, i, o.dir);
              s.current.style.transform = `translate3d(${v}px, 0, 0)`;
            }
          },
          onWheelScroll: (h) => {
            o.viewport && (o.viewport.scrollLeft = h);
          },
          onDragScroll: (h) => {
            o.viewport && (o.viewport.scrollLeft = p(h, o.dir));
          },
        })
      : r === "vertical"
        ? c.jsx(gf, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && s.current) {
                const h = o.viewport.scrollTop,
                  v = Os(h, i);
                s.current.style.transform = `translate3d(0, ${v}px, 0)`;
              }
            },
            onWheelScroll: (h) => {
              o.viewport && (o.viewport.scrollTop = h);
            },
            onDragScroll: (h) => {
              o.viewport && (o.viewport.scrollTop = p(h));
            },
          })
        : null;
  }),
  hf = d.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      s = De(Ye, e.__scopeScrollArea),
      [a, i] = d.useState(),
      l = d.useRef(null),
      u = ie(t, l, s.onScrollbarXChange);
    return (
      d.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      c.jsx(Da, {
        "data-orientation": "horizontal",
        ...o,
        ref: u,
        sizes: r,
        style: {
          bottom: 0,
          left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Ar(r) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
        onDragScroll: (f) => e.onDragScroll(f.x),
        onWheelScroll: (f, p) => {
          if (s.viewport) {
            const h = s.viewport.scrollLeft + f.deltaX;
            e.onWheelScroll(h), $a(h, p) && f.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            s.viewport &&
            a &&
            n({
              content: s.viewport.scrollWidth,
              viewport: s.viewport.offsetWidth,
              scrollbar: {
                size: l.current.clientWidth,
                paddingStart: vr(a.paddingLeft),
                paddingEnd: vr(a.paddingRight),
              },
            });
        },
      })
    );
  }),
  gf = d.forwardRef((e, t) => {
    const { sizes: r, onSizesChange: n, ...o } = e,
      s = De(Ye, e.__scopeScrollArea),
      [a, i] = d.useState(),
      l = d.useRef(null),
      u = ie(t, l, s.onScrollbarYChange);
    return (
      d.useEffect(() => {
        l.current && i(getComputedStyle(l.current));
      }, [l]),
      c.jsx(Da, {
        "data-orientation": "vertical",
        ...o,
        ref: u,
        sizes: r,
        style: {
          top: 0,
          right: s.dir === "ltr" ? 0 : void 0,
          left: s.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Ar(r) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
        onDragScroll: (f) => e.onDragScroll(f.y),
        onWheelScroll: (f, p) => {
          if (s.viewport) {
            const h = s.viewport.scrollTop + f.deltaY;
            e.onWheelScroll(h), $a(h, p) && f.preventDefault();
          }
        },
        onResize: () => {
          l.current &&
            s.viewport &&
            a &&
            n({
              content: s.viewport.scrollHeight,
              viewport: s.viewport.offsetHeight,
              scrollbar: {
                size: l.current.clientHeight,
                paddingStart: vr(a.paddingTop),
                paddingEnd: vr(a.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [vf, Aa] = Ta(Ye),
  Da = d.forwardRef((e, t) => {
    const {
        __scopeScrollArea: r,
        sizes: n,
        hasThumb: o,
        onThumbChange: s,
        onThumbPointerUp: a,
        onThumbPointerDown: i,
        onThumbPositionChange: l,
        onDragScroll: u,
        onWheelScroll: f,
        onResize: p,
        ...h
      } = e,
      v = De(Ye, r),
      [w, m] = d.useState(null),
      g = ie(t, (M) => m(M)),
      S = d.useRef(null),
      b = d.useRef(""),
      y = v.viewport,
      E = n.content - n.viewport,
      C = ye(f),
      T = ye(l),
      R = Dr(p, 10);
    function k(M) {
      if (S.current) {
        const W = M.clientX - S.current.left,
          L = M.clientY - S.current.top;
        u({ x: W, y: L });
      }
    }
    return (
      d.useEffect(() => {
        const M = (W) => {
          const L = W.target;
          (w == null ? void 0 : w.contains(L)) && C(W, E);
        };
        return (
          document.addEventListener("wheel", M, { passive: !1 }),
          () => document.removeEventListener("wheel", M, { passive: !1 })
        );
      }, [y, w, E, C]),
      d.useEffect(T, [n, T]),
      Tt(w, R),
      Tt(v.content, R),
      c.jsx(vf, {
        scope: r,
        scrollbar: w,
        hasThumb: o,
        onThumbChange: ye(s),
        onThumbPointerUp: ye(a),
        onThumbPositionChange: T,
        onThumbPointerDown: ye(i),
        children: c.jsx(re.div, {
          ...h,
          ref: g,
          style: { position: "absolute", ...h.style },
          onPointerDown: J(e.onPointerDown, (M) => {
            M.button === 0 &&
              (M.target.setPointerCapture(M.pointerId),
              (S.current = w.getBoundingClientRect()),
              (b.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              v.viewport && (v.viewport.style.scrollBehavior = "auto"),
              k(M));
          }),
          onPointerMove: J(e.onPointerMove, k),
          onPointerUp: J(e.onPointerUp, (M) => {
            const W = M.target;
            W.hasPointerCapture(M.pointerId) &&
              W.releasePointerCapture(M.pointerId),
              (document.body.style.webkitUserSelect = b.current),
              v.viewport && (v.viewport.style.scrollBehavior = ""),
              (S.current = null);
          }),
        }),
      })
    );
  }),
  gr = "ScrollAreaThumb",
  Ma = d.forwardRef((e, t) => {
    const { forceMount: r, ...n } = e,
      o = Aa(gr, e.__scopeScrollArea);
    return c.jsx(Je, {
      present: r || o.hasThumb,
      children: c.jsx(bf, { ref: t, ...n }),
    });
  }),
  bf = d.forwardRef((e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e,
      s = De(gr, r),
      a = Aa(gr, r),
      { onThumbPositionChange: i } = a,
      l = ie(t, (p) => a.onThumbChange(p)),
      u = d.useRef(),
      f = Dr(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      d.useEffect(() => {
        const p = s.viewport;
        if (p) {
          const h = () => {
            if ((f(), !u.current)) {
              const v = wf(p, i);
              (u.current = v), i();
            }
          };
          return (
            i(),
            p.addEventListener("scroll", h),
            () => p.removeEventListener("scroll", h)
          );
        }
      }, [s.viewport, f, i]),
      c.jsx(re.div, {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n,
        },
        onPointerDownCapture: J(e.onPointerDownCapture, (p) => {
          const v = p.target.getBoundingClientRect(),
            w = p.clientX - v.left,
            m = p.clientY - v.top;
          a.onThumbPointerDown({ x: w, y: m });
        }),
        onPointerUp: J(e.onPointerUp, a.onThumbPointerUp),
      })
    );
  });
Ma.displayName = gr;
var po = "ScrollAreaCorner",
  ka = d.forwardRef((e, t) => {
    const r = De(po, e.__scopeScrollArea),
      n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? c.jsx(yf, { ...e, ref: t }) : null;
  });
ka.displayName = po;
var yf = d.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e,
    o = De(po, r),
    [s, a] = d.useState(0),
    [i, l] = d.useState(0),
    u = !!(s && i);
  return (
    Tt(o.scrollbarX, () => {
      var p;
      const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
      o.onCornerHeightChange(f), l(f);
    }),
    Tt(o.scrollbarY, () => {
      var p;
      const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
      o.onCornerWidthChange(f), a(f);
    }),
    u
      ? c.jsx(re.div, {
          ...n,
          ref: t,
          style: {
            width: s,
            height: i,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function vr(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ia(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Ar(e) {
  const t = Ia(e.viewport, e.content),
    r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function xf(e, t, r, n = "ltr") {
  const o = Ar(r),
    s = o / 2,
    a = t || s,
    i = o - a,
    l = r.scrollbar.paddingStart + a,
    u = r.scrollbar.size - r.scrollbar.paddingEnd - i,
    f = r.content - r.viewport,
    p = n === "ltr" ? [0, f] : [f * -1, 0];
  return La([l, u], p)(e);
}
function Os(e, t, r = "ltr") {
  const n = Ar(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    s = t.scrollbar.size - o,
    a = t.content - t.viewport,
    i = s - n,
    l = r === "ltr" ? [0, a] : [a * -1, 0],
    u = Yt(e, l);
  return La([0, a], [0, i])(u);
}
function La(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function $a(e, t) {
  return e > 0 && e < t;
}
var wf = (e, t = () => {}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop },
    n = 0;
  return (
    (function o() {
      const s = { left: e.scrollLeft, top: e.scrollTop },
        a = r.left !== s.left,
        i = r.top !== s.top;
      (a || i) && t(), (r = s), (n = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(n)
  );
};
function Dr(e, t) {
  const r = ye(e),
    n = d.useRef(0);
  return (
    d.useEffect(() => () => window.clearTimeout(n.current), []),
    d.useCallback(() => {
      window.clearTimeout(n.current), (n.current = window.setTimeout(r, t));
    }, [r, t])
  );
}
function Tt(e, t) {
  const r = ye(t);
  we(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), (n = window.requestAnimationFrame(r));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(n), o.unobserve(e);
        }
      );
    }
  }, [e, r]);
}
var Fa = Oa,
  Sf = _a,
  Cf = ka;
const Wa = d.forwardRef(({ className: e, children: t, ...r }, n) =>
  c.jsxs(Fa, {
    ref: n,
    className: fe("relative overflow-hidden", e),
    ...r,
    children: [
      c.jsx(Sf, { className: "h-full w-full rounded-[inherit]", children: t }),
      c.jsx(mo, {}),
      c.jsx(Cf, {}),
    ],
  }),
);
Wa.displayName = Fa.displayName;
const mo = d.forwardRef(
  ({ className: e, orientation: t = "vertical", ...r }, n) =>
    c.jsx(uo, {
      ref: n,
      orientation: t,
      className: fe(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e,
      ),
      ...r,
      children: c.jsx(Ma, {
        className: "bg-border relative flex-1 rounded-full",
      }),
    }),
);
mo.displayName = uo.displayName;
function Ot({ prop: e, defaultProp: t, onChange: r = () => {} }) {
  const [n, o] = Ef({ defaultProp: t, onChange: r }),
    s = e !== void 0,
    a = s ? e : n,
    i = ye(r),
    l = d.useCallback(
      (u) => {
        if (s) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && i(p);
        } else o(u);
      },
      [s, e, o, i],
    );
  return [a, l];
}
function Ef({ defaultProp: e, onChange: t }) {
  const r = d.useState(e),
    [n] = r,
    o = d.useRef(n),
    s = ye(t);
  return (
    d.useEffect(() => {
      o.current !== n && (s(n), (o.current = n));
    }, [n, o, s]),
    r
  );
}
function ho(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
function go(e) {
  const [t, r] = d.useState(void 0);
  return (
    we(() => {
      if (e) {
        r({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let a, i;
          if ("borderBoxSize" in s) {
            const l = s.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (a = u.inlineSize), (i = u.blockSize);
          } else (a = e.offsetWidth), (i = e.offsetHeight);
          r({ width: a, height: i });
        });
        return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
      } else r(void 0);
    }, [e]),
    t
  );
}
function Rf(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = d.createContext(a),
      l = r.length;
    r = [...r, a];
    function u(p) {
      const { scope: h, children: v, ...w } = p,
        m = (h == null ? void 0 : h[e][l]) || i,
        g = d.useMemo(() => w, Object.values(w));
      return c.jsx(m.Provider, { value: g, children: v });
    }
    function f(p, h) {
      const v = (h == null ? void 0 : h[e][l]) || i,
        w = d.useContext(v);
      if (w) return w;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, f];
  }
  const o = () => {
    const s = r.map((a) => d.createContext(a));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (o.scopeName = e), [n, Pf(o, ...t)];
}
function Pf(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const a = n.reduce((i, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...i, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
function vo(e) {
  const t = e + "CollectionProvider",
    [r, n] = Rf(t),
    [o, s] = r(t, { collectionRef: { current: null }, itemMap: new Map() }),
    a = (v) => {
      const { scope: w, children: m } = v,
        g = U.useRef(null),
        S = U.useRef(new Map()).current;
      return c.jsx(o, { scope: w, itemMap: S, collectionRef: g, children: m });
    };
  a.displayName = t;
  const i = e + "CollectionSlot",
    l = U.forwardRef((v, w) => {
      const { scope: m, children: g } = v,
        S = s(i, m),
        b = ie(w, S.collectionRef);
      return c.jsx(dt, { ref: b, children: g });
    });
  l.displayName = i;
  const u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = U.forwardRef((v, w) => {
      const { scope: m, children: g, ...S } = v,
        b = U.useRef(null),
        y = ie(w, b),
        E = s(u, m);
      return (
        U.useEffect(
          () => (
            E.itemMap.set(b, { ref: b, ...S }), () => void E.itemMap.delete(b)
          ),
        ),
        c.jsx(dt, { [f]: "", ref: y, children: g })
      );
    });
  p.displayName = u;
  function h(v) {
    const w = s(e + "CollectionConsumer", v);
    return U.useCallback(() => {
      const g = w.collectionRef.current;
      if (!g) return [];
      const S = Array.from(g.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (E, C) => S.indexOf(E.ref.current) - S.indexOf(C.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: a, Slot: l, ItemSlot: p }, h, n];
}
var za = ["PageUp", "PageDown"],
  Ba = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  Va = {
    "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
    "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
    "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
  },
  Mt = "Slider",
  [An, Tf, Of] = vo(Mt),
  [Ha, nv] = Dt(Mt, [Of]),
  [Nf, Mr] = Ha(Mt),
  Ua = d.forwardRef((e, t) => {
    const {
        name: r,
        min: n = 0,
        max: o = 100,
        step: s = 1,
        orientation: a = "horizontal",
        disabled: i = !1,
        minStepsBetweenThumbs: l = 0,
        defaultValue: u = [n],
        value: f,
        onValueChange: p = () => {},
        onValueCommit: h = () => {},
        inverted: v = !1,
        form: w,
        ...m
      } = e,
      g = d.useRef(new Set()),
      S = d.useRef(0),
      y = a === "horizontal" ? _f : jf,
      [E = [], C] = Ot({
        prop: f,
        defaultProp: u,
        onChange: (L) => {
          var V;
          (V = [...g.current][S.current]) == null || V.focus(), p(L);
        },
      }),
      T = d.useRef(E);
    function R(L) {
      const D = If(E, L);
      W(L, D);
    }
    function k(L) {
      W(L, S.current);
    }
    function M() {
      const L = T.current[S.current];
      E[S.current] !== L && h(E);
    }
    function W(L, D, { commit: V } = { commit: !1 }) {
      const _ = Wf(s),
        Y = zf(Math.round((L - n) / s) * s + n, _),
        F = Yt(Y, [n, o]);
      C((H = []) => {
        const $ = Mf(H, F, D);
        if (Ff($, l * s)) {
          S.current = $.indexOf(F);
          const q = String($) !== String(H);
          return q && V && h($), q ? $ : H;
        } else return H;
      });
    }
    return c.jsx(Nf, {
      scope: e.__scopeSlider,
      name: r,
      disabled: i,
      min: n,
      max: o,
      valueIndexToChangeRef: S,
      thumbs: g.current,
      values: E,
      orientation: a,
      form: w,
      children: c.jsx(An.Provider, {
        scope: e.__scopeSlider,
        children: c.jsx(An.Slot, {
          scope: e.__scopeSlider,
          children: c.jsx(y, {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...m,
            ref: t,
            onPointerDown: J(m.onPointerDown, () => {
              i || (T.current = E);
            }),
            min: n,
            max: o,
            inverted: v,
            onSlideStart: i ? void 0 : R,
            onSlideMove: i ? void 0 : k,
            onSlideEnd: i ? void 0 : M,
            onHomeKeyDown: () => !i && W(n, 0, { commit: !0 }),
            onEndKeyDown: () => !i && W(o, E.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: L, direction: D }) => {
              if (!i) {
                const Y =
                    za.includes(L.key) || (L.shiftKey && Ba.includes(L.key))
                      ? 10
                      : 1,
                  F = S.current,
                  H = E[F],
                  $ = s * Y * D;
                W(H + $, F, { commit: !0 });
              }
            },
          }),
        }),
      }),
    });
  });
Ua.displayName = Mt;
var [Ya, Xa] = Ha(Mt, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1,
  }),
  _f = d.forwardRef((e, t) => {
    const {
        min: r,
        max: n,
        dir: o,
        inverted: s,
        onSlideStart: a,
        onSlideMove: i,
        onSlideEnd: l,
        onStepKeyDown: u,
        ...f
      } = e,
      [p, h] = d.useState(null),
      v = ie(t, (y) => h(y)),
      w = d.useRef(),
      m = lo(o),
      g = m === "ltr",
      S = (g && !s) || (!g && s);
    function b(y) {
      const E = w.current || p.getBoundingClientRect(),
        C = [0, E.width],
        R = bo(C, S ? [r, n] : [n, r]);
      return (w.current = E), R(y - E.left);
    }
    return c.jsx(Ya, {
      scope: e.__scopeSlider,
      startEdge: S ? "left" : "right",
      endEdge: S ? "right" : "left",
      direction: S ? 1 : -1,
      size: "width",
      children: c.jsx(Ka, {
        dir: m,
        "data-orientation": "horizontal",
        ...f,
        ref: v,
        style: {
          ...f.style,
          "--radix-slider-thumb-transform": "translateX(-50%)",
        },
        onSlideStart: (y) => {
          const E = b(y.clientX);
          a == null || a(E);
        },
        onSlideMove: (y) => {
          const E = b(y.clientX);
          i == null || i(E);
        },
        onSlideEnd: () => {
          (w.current = void 0), l == null || l();
        },
        onStepKeyDown: (y) => {
          const C = Va[S ? "from-left" : "from-right"].includes(y.key);
          u == null || u({ event: y, direction: C ? -1 : 1 });
        },
      }),
    });
  }),
  jf = d.forwardRef((e, t) => {
    const {
        min: r,
        max: n,
        inverted: o,
        onSlideStart: s,
        onSlideMove: a,
        onSlideEnd: i,
        onStepKeyDown: l,
        ...u
      } = e,
      f = d.useRef(null),
      p = ie(t, f),
      h = d.useRef(),
      v = !o;
    function w(m) {
      const g = h.current || f.current.getBoundingClientRect(),
        S = [0, g.height],
        y = bo(S, v ? [n, r] : [r, n]);
      return (h.current = g), y(m - g.top);
    }
    return c.jsx(Ya, {
      scope: e.__scopeSlider,
      startEdge: v ? "bottom" : "top",
      endEdge: v ? "top" : "bottom",
      size: "height",
      direction: v ? 1 : -1,
      children: c.jsx(Ka, {
        "data-orientation": "vertical",
        ...u,
        ref: p,
        style: {
          ...u.style,
          "--radix-slider-thumb-transform": "translateY(50%)",
        },
        onSlideStart: (m) => {
          const g = w(m.clientY);
          s == null || s(g);
        },
        onSlideMove: (m) => {
          const g = w(m.clientY);
          a == null || a(g);
        },
        onSlideEnd: () => {
          (h.current = void 0), i == null || i();
        },
        onStepKeyDown: (m) => {
          const S = Va[v ? "from-bottom" : "from-top"].includes(m.key);
          l == null || l({ event: m, direction: S ? -1 : 1 });
        },
      }),
    });
  }),
  Ka = d.forwardRef((e, t) => {
    const {
        __scopeSlider: r,
        onSlideStart: n,
        onSlideMove: o,
        onSlideEnd: s,
        onHomeKeyDown: a,
        onEndKeyDown: i,
        onStepKeyDown: l,
        ...u
      } = e,
      f = Mr(Mt, r);
    return c.jsx(re.span, {
      ...u,
      ref: t,
      onKeyDown: J(e.onKeyDown, (p) => {
        p.key === "Home"
          ? (a(p), p.preventDefault())
          : p.key === "End"
            ? (i(p), p.preventDefault())
            : za.concat(Ba).includes(p.key) && (l(p), p.preventDefault());
      }),
      onPointerDown: J(e.onPointerDown, (p) => {
        const h = p.target;
        h.setPointerCapture(p.pointerId),
          p.preventDefault(),
          f.thumbs.has(h) ? h.focus() : n(p);
      }),
      onPointerMove: J(e.onPointerMove, (p) => {
        p.target.hasPointerCapture(p.pointerId) && o(p);
      }),
      onPointerUp: J(e.onPointerUp, (p) => {
        const h = p.target;
        h.hasPointerCapture(p.pointerId) &&
          (h.releasePointerCapture(p.pointerId), s(p));
      }),
    });
  }),
  Ga = "SliderTrack",
  qa = d.forwardRef((e, t) => {
    const { __scopeSlider: r, ...n } = e,
      o = Mr(Ga, r);
    return c.jsx(re.span, {
      "data-disabled": o.disabled ? "" : void 0,
      "data-orientation": o.orientation,
      ...n,
      ref: t,
    });
  });
qa.displayName = Ga;
var Dn = "SliderRange",
  Za = d.forwardRef((e, t) => {
    const { __scopeSlider: r, ...n } = e,
      o = Mr(Dn, r),
      s = Xa(Dn, r),
      a = d.useRef(null),
      i = ie(t, a),
      l = o.values.length,
      u = o.values.map((h) => Qa(h, o.min, o.max)),
      f = l > 1 ? Math.min(...u) : 0,
      p = 100 - Math.max(...u);
    return c.jsx(re.span, {
      "data-orientation": o.orientation,
      "data-disabled": o.disabled ? "" : void 0,
      ...n,
      ref: i,
      style: { ...e.style, [s.startEdge]: f + "%", [s.endEdge]: p + "%" },
    });
  });
Za.displayName = Dn;
var Mn = "SliderThumb",
  Ja = d.forwardRef((e, t) => {
    const r = Tf(e.__scopeSlider),
      [n, o] = d.useState(null),
      s = ie(t, (i) => o(i)),
      a = d.useMemo(
        () => (n ? r().findIndex((i) => i.ref.current === n) : -1),
        [r, n],
      );
    return c.jsx(Af, { ...e, ref: s, index: a });
  }),
  Af = d.forwardRef((e, t) => {
    const { __scopeSlider: r, index: n, name: o, ...s } = e,
      a = Mr(Mn, r),
      i = Xa(Mn, r),
      [l, u] = d.useState(null),
      f = ie(t, (b) => u(b)),
      p = l ? a.form || !!l.closest("form") : !0,
      h = go(l),
      v = a.values[n],
      w = v === void 0 ? 0 : Qa(v, a.min, a.max),
      m = kf(n, a.values.length),
      g = h == null ? void 0 : h[i.size],
      S = g ? Lf(g, w, i.direction) : 0;
    return (
      d.useEffect(() => {
        if (l)
          return (
            a.thumbs.add(l),
            () => {
              a.thumbs.delete(l);
            }
          );
      }, [l, a.thumbs]),
      c.jsxs("span", {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${w}% + ${S}px)`,
        },
        children: [
          c.jsx(An.ItemSlot, {
            scope: e.__scopeSlider,
            children: c.jsx(re.span, {
              role: "slider",
              "aria-label": e["aria-label"] || m,
              "aria-valuemin": a.min,
              "aria-valuenow": v,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...s,
              ref: f,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: J(e.onFocus, () => {
                a.valueIndexToChangeRef.current = n;
              }),
            }),
          }),
          p &&
            c.jsx(
              Df,
              {
                name:
                  o ??
                  (a.name
                    ? a.name + (a.values.length > 1 ? "[]" : "")
                    : void 0),
                form: a.form,
                value: v,
              },
              n,
            ),
        ],
      })
    );
  });
Ja.displayName = Mn;
var Df = (e) => {
  const { value: t, ...r } = e,
    n = d.useRef(null),
    o = ho(t);
  return (
    d.useEffect(() => {
      const s = n.current,
        a = window.HTMLInputElement.prototype,
        l = Object.getOwnPropertyDescriptor(a, "value").set;
      if (o !== t && l) {
        const u = new Event("input", { bubbles: !0 });
        l.call(s, t), s.dispatchEvent(u);
      }
    }, [o, t]),
    c.jsx("input", {
      style: { display: "none" },
      ...r,
      ref: n,
      defaultValue: t,
    })
  );
};
function Mf(e = [], t, r) {
  const n = [...e];
  return (n[r] = t), n.sort((o, s) => o - s);
}
function Qa(e, t, r) {
  const s = (100 / (r - t)) * (e - t);
  return Yt(s, [0, 100]);
}
function kf(e, t) {
  return t > 2
    ? `Value ${e + 1} of ${t}`
    : t === 2
      ? ["Minimum", "Maximum"][e]
      : void 0;
}
function If(e, t) {
  if (e.length === 1) return 0;
  const r = e.map((o) => Math.abs(o - t)),
    n = Math.min(...r);
  return r.indexOf(n);
}
function Lf(e, t, r) {
  const n = e / 2,
    s = bo([0, 50], [0, n]);
  return (n - s(t) * r) * r;
}
function $f(e) {
  return e.slice(0, -1).map((t, r) => e[r + 1] - t);
}
function Ff(e, t) {
  if (t > 0) {
    const r = $f(e);
    return Math.min(...r) >= t;
  }
  return !0;
}
function bo(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Wf(e) {
  return (String(e).split(".")[1] || "").length;
}
function zf(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
var ei = Ua,
  Bf = qa,
  Vf = Za,
  Hf = Ja;
const yo = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsxs(ei, {
    ref: r,
    className: fe(
      "relative flex w-full touch-none select-none items-center",
      e,
    ),
    ...t,
    children: [
      c.jsx(Bf, {
        className:
          "bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full",
        children: c.jsx(Vf, { className: "bg-primary absolute h-full" }),
      }),
      c.jsx(Hf, {
        className:
          "border-primary/50 bg-background focus-visible:ring-ring block h-4 w-4 rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
      }),
    ],
  }),
);
yo.displayName = ei.displayName;
function Uf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ye(e);
  d.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return (
      t.addEventListener("keydown", n, { capture: !0 }),
      () => t.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, t]);
}
var Yf = "DismissableLayer",
  kn = "dismissableLayer.update",
  Xf = "dismissableLayer.pointerDownOutside",
  Kf = "dismissableLayer.focusOutside",
  Ns,
  ti = d.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  kr = d.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: i,
        ...l
      } = e,
      u = d.useContext(ti),
      [f, p] = d.useState(null),
      h =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, v] = d.useState({}),
      w = ie(t, (R) => p(R)),
      m = Array.from(u.layers),
      [g] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      S = m.indexOf(g),
      b = f ? m.indexOf(f) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      E = b >= S,
      C = qf((R) => {
        const k = R.target,
          M = [...u.branches].some((W) => W.contains(k));
        !E ||
          M ||
          (o == null || o(R),
          a == null || a(R),
          R.defaultPrevented || i == null || i());
      }, h),
      T = Zf((R) => {
        const k = R.target;
        [...u.branches].some((W) => W.contains(k)) ||
          (s == null || s(R),
          a == null || a(R),
          R.defaultPrevented || i == null || i());
      }, h);
    return (
      Uf((R) => {
        b === u.layers.size - 1 &&
          (n == null || n(R),
          !R.defaultPrevented && i && (R.preventDefault(), i()));
      }, h),
      d.useEffect(() => {
        if (f)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ns = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            _s(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = Ns);
            }
          );
      }, [f, h, r, u]),
      d.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            _s());
        },
        [f, u],
      ),
      d.useEffect(() => {
        const R = () => v({});
        return (
          document.addEventListener(kn, R),
          () => document.removeEventListener(kn, R)
        );
      }, []),
      c.jsx(re.div, {
        ...l,
        ref: w,
        style: {
          pointerEvents: y ? (E ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: J(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: J(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
kr.displayName = Yf;
var Gf = "DismissableLayerBranch",
  ri = d.forwardRef((e, t) => {
    const r = d.useContext(ti),
      n = d.useRef(null),
      o = ie(t, n);
    return (
      d.useEffect(() => {
        const s = n.current;
        if (s)
          return (
            r.branches.add(s),
            () => {
              r.branches.delete(s);
            }
          );
      }, [r.branches]),
      c.jsx(re.div, { ...e, ref: o })
    );
  });
ri.displayName = Gf;
function qf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ye(e),
    n = d.useRef(!1),
    o = d.useRef(() => {});
  return (
    d.useEffect(() => {
      const s = (i) => {
          if (i.target && !n.current) {
            let l = function () {
              ni(Xf, r, u, { discrete: !0 });
            };
            const u = { originalEvent: i };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = l),
                t.addEventListener("click", o.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", o.current);
          n.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function Zf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ye(e),
    n = d.useRef(!1);
  return (
    d.useEffect(() => {
      const o = (s) => {
        s.target &&
          !n.current &&
          ni(Kf, r, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function _s() {
  const e = new CustomEvent(kn);
  document.dispatchEvent(e);
}
function ni(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }),
    n ? Pa(o, s) : o.dispatchEvent(s);
}
var Jf = kr,
  Qf = ri,
  ep = "Portal",
  Ir = d.forwardRef((e, t) => {
    var i;
    const { container: r, ...n } = e,
      [o, s] = d.useState(!1);
    we(() => s(!0), []);
    const a =
      r ||
      (o &&
        ((i = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : i.body));
    return a ? Rr.createPortal(c.jsx(re.div, { ...n, ref: t }), a) : null;
  });
Ir.displayName = ep;
var tp = "VisuallyHidden",
  Lr = d.forwardRef((e, t) =>
    c.jsx(re.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Lr.displayName = tp;
var xo = "ToastProvider",
  [wo, rp, np] = vo("Toast"),
  [oi, ov] = Dt("Toast", [np]),
  [op, $r] = oi(xo),
  si = (e) => {
    const {
        __scopeToast: t,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: a,
      } = e,
      [i, l] = d.useState(null),
      [u, f] = d.useState(0),
      p = d.useRef(!1),
      h = d.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${xo}\`. Expected non-empty \`string\`.`,
        ),
      c.jsx(wo.Provider, {
        scope: t,
        children: c.jsx(op, {
          scope: t,
          label: r,
          duration: n,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: i,
          onViewportChange: l,
          onToastAdd: d.useCallback(() => f((v) => v + 1), []),
          onToastRemove: d.useCallback(() => f((v) => v - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: h,
          children: a,
        }),
      })
    );
  };
si.displayName = xo;
var ai = "ToastViewport",
  sp = ["F8"],
  In = "toast.viewportPause",
  Ln = "toast.viewportResume",
  ii = d.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        hotkey: n = sp,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      a = $r(ai, r),
      i = rp(r),
      l = d.useRef(null),
      u = d.useRef(null),
      f = d.useRef(null),
      p = d.useRef(null),
      h = ie(t, p, a.onViewportChange),
      v = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      w = a.toastCount > 0;
    d.useEffect(() => {
      const g = (S) => {
        var y;
        n.length !== 0 &&
          n.every((E) => S[E] || S.code === E) &&
          ((y = p.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", g),
        () => document.removeEventListener("keydown", g)
      );
    }, [n]),
      d.useEffect(() => {
        const g = l.current,
          S = p.current;
        if (w && g && S) {
          const b = () => {
              if (!a.isClosePausedRef.current) {
                const T = new CustomEvent(In);
                S.dispatchEvent(T), (a.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (a.isClosePausedRef.current) {
                const T = new CustomEvent(Ln);
                S.dispatchEvent(T), (a.isClosePausedRef.current = !1);
              }
            },
            E = (T) => {
              !g.contains(T.relatedTarget) && y();
            },
            C = () => {
              g.contains(document.activeElement) || y();
            };
          return (
            g.addEventListener("focusin", b),
            g.addEventListener("focusout", E),
            g.addEventListener("pointermove", b),
            g.addEventListener("pointerleave", C),
            window.addEventListener("blur", b),
            window.addEventListener("focus", y),
            () => {
              g.removeEventListener("focusin", b),
                g.removeEventListener("focusout", E),
                g.removeEventListener("pointermove", b),
                g.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", b),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [w, a.isClosePausedRef]);
    const m = d.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((y) => {
          const E = y.ref.current,
            C = [E, ...yp(E)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [i],
    );
    return (
      d.useEffect(() => {
        const g = p.current;
        if (g) {
          const S = (b) => {
            var C, T, R;
            const y = b.altKey || b.ctrlKey || b.metaKey;
            if (b.key === "Tab" && !y) {
              const k = document.activeElement,
                M = b.shiftKey;
              if (b.target === g && M) {
                (C = u.current) == null || C.focus();
                return;
              }
              const D = m({ tabbingDirection: M ? "backwards" : "forwards" }),
                V = D.findIndex((_) => _ === k);
              fn(D.slice(V + 1))
                ? b.preventDefault()
                : M
                  ? (T = u.current) == null || T.focus()
                  : (R = f.current) == null || R.focus();
            }
          };
          return (
            g.addEventListener("keydown", S),
            () => g.removeEventListener("keydown", S)
          );
        }
      }, [i, m]),
      c.jsxs(Qf, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: w ? void 0 : "none" },
        children: [
          w &&
            c.jsx($n, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "forwards" });
                fn(g);
              },
            }),
          c.jsx(wo.Slot, {
            scope: r,
            children: c.jsx(re.ol, { tabIndex: -1, ...s, ref: h }),
          }),
          w &&
            c.jsx($n, {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = m({ tabbingDirection: "backwards" });
                fn(g);
              },
            }),
        ],
      })
    );
  });
ii.displayName = ai;
var li = "ToastFocusProxy",
  $n = d.forwardRef((e, t) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e,
      s = $r(li, r);
    return c.jsx(Lr, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (a) => {
        var u;
        const i = a.relatedTarget;
        !((u = s.viewport) != null && u.contains(i)) && n();
      },
    });
  });
$n.displayName = li;
var Fr = "Toast",
  ap = "toast.swipeStart",
  ip = "toast.swipeMove",
  lp = "toast.swipeCancel",
  cp = "toast.swipeEnd",
  ci = d.forwardRef((e, t) => {
    const { forceMount: r, open: n, defaultOpen: o, onOpenChange: s, ...a } = e,
      [i = !0, l] = Ot({ prop: n, defaultProp: o, onChange: s });
    return c.jsx(Je, {
      present: r || i,
      children: c.jsx(fp, {
        open: i,
        ...a,
        ref: t,
        onClose: () => l(!1),
        onPause: ye(e.onPause),
        onResume: ye(e.onResume),
        onSwipeStart: J(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: J(e.onSwipeMove, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${f}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`,
            );
        }),
        onSwipeCancel: J(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: J(e.onSwipeEnd, (u) => {
          const { x: f, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${f}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`,
            ),
            l(!1);
        }),
      }),
    });
  });
ci.displayName = Fr;
var [up, dp] = oi(Fr, { onClose() {} }),
  fp = d.forwardRef((e, t) => {
    const {
        __scopeToast: r,
        type: n = "foreground",
        duration: o,
        open: s,
        onClose: a,
        onEscapeKeyDown: i,
        onPause: l,
        onResume: u,
        onSwipeStart: f,
        onSwipeMove: p,
        onSwipeCancel: h,
        onSwipeEnd: v,
        ...w
      } = e,
      m = $r(Fr, r),
      [g, S] = d.useState(null),
      b = ie(t, (_) => S(_)),
      y = d.useRef(null),
      E = d.useRef(null),
      C = o || m.duration,
      T = d.useRef(0),
      R = d.useRef(C),
      k = d.useRef(0),
      { onToastAdd: M, onToastRemove: W } = m,
      L = ye(() => {
        var Y;
        (g == null ? void 0 : g.contains(document.activeElement)) &&
          ((Y = m.viewport) == null || Y.focus()),
          a();
      }),
      D = d.useCallback(
        (_) => {
          !_ ||
            _ === 1 / 0 ||
            (window.clearTimeout(k.current),
            (T.current = new Date().getTime()),
            (k.current = window.setTimeout(L, _)));
        },
        [L],
      );
    d.useEffect(() => {
      const _ = m.viewport;
      if (_) {
        const Y = () => {
            D(R.current), u == null || u();
          },
          F = () => {
            const H = new Date().getTime() - T.current;
            (R.current = R.current - H),
              window.clearTimeout(k.current),
              l == null || l();
          };
        return (
          _.addEventListener(In, F),
          _.addEventListener(Ln, Y),
          () => {
            _.removeEventListener(In, F), _.removeEventListener(Ln, Y);
          }
        );
      }
    }, [m.viewport, C, l, u, D]),
      d.useEffect(() => {
        s && !m.isClosePausedRef.current && D(C);
      }, [s, C, m.isClosePausedRef, D]),
      d.useEffect(() => (M(), () => W()), [M, W]);
    const V = d.useMemo(() => (g ? gi(g) : null), [g]);
    return m.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            V &&
              c.jsx(pp, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: V,
              }),
            c.jsx(up, {
              scope: r,
              onClose: L,
              children: qt.createPortal(
                c.jsx(wo.ItemSlot, {
                  scope: r,
                  children: c.jsx(Jf, {
                    asChild: !0,
                    onEscapeKeyDown: J(i, () => {
                      m.isFocusedToastEscapeKeyDownRef.current || L(),
                        (m.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(re.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": m.swipeDirection,
                      ...w,
                      ref: b,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: J(e.onKeyDown, (_) => {
                        _.key === "Escape" &&
                          (i == null || i(_.nativeEvent),
                          _.nativeEvent.defaultPrevented ||
                            ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            L()));
                      }),
                      onPointerDown: J(e.onPointerDown, (_) => {
                        _.button === 0 &&
                          (y.current = { x: _.clientX, y: _.clientY });
                      }),
                      onPointerMove: J(e.onPointerMove, (_) => {
                        if (!y.current) return;
                        const Y = _.clientX - y.current.x,
                          F = _.clientY - y.current.y,
                          H = !!E.current,
                          $ = ["left", "right"].includes(m.swipeDirection),
                          q = ["left", "up"].includes(m.swipeDirection)
                            ? Math.min
                            : Math.max,
                          P = $ ? q(0, Y) : 0,
                          j = $ ? 0 : q(0, F),
                          Q = _.pointerType === "touch" ? 10 : 2,
                          K = { x: P, y: j },
                          X = { originalEvent: _, delta: K };
                        H
                          ? ((E.current = K), ar(ip, p, X, { discrete: !1 }))
                          : js(K, m.swipeDirection, Q)
                            ? ((E.current = K),
                              ar(ap, f, X, { discrete: !1 }),
                              _.target.setPointerCapture(_.pointerId))
                            : (Math.abs(Y) > Q || Math.abs(F) > Q) &&
                              (y.current = null);
                      }),
                      onPointerUp: J(e.onPointerUp, (_) => {
                        const Y = E.current,
                          F = _.target;
                        if (
                          (F.hasPointerCapture(_.pointerId) &&
                            F.releasePointerCapture(_.pointerId),
                          (E.current = null),
                          (y.current = null),
                          Y)
                        ) {
                          const H = _.currentTarget,
                            $ = { originalEvent: _, delta: Y };
                          js(Y, m.swipeDirection, m.swipeThreshold)
                            ? ar(cp, v, $, { discrete: !0 })
                            : ar(lp, h, $, { discrete: !0 }),
                            H.addEventListener(
                              "click",
                              (q) => q.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                m.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  pp = (e) => {
    const { __scopeToast: t, children: r, ...n } = e,
      o = $r(Fr, t),
      [s, a] = d.useState(!1),
      [i, l] = d.useState(!1);
    return (
      vp(() => a(!0)),
      d.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      i
        ? null
        : c.jsx(Ir, {
            asChild: !0,
            children: c.jsx(Lr, {
              ...n,
              children:
                s && c.jsxs(c.Fragment, { children: [o.label, " ", r] }),
            }),
          })
    );
  },
  mp = "ToastTitle",
  ui = d.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return c.jsx(re.div, { ...n, ref: t });
  });
ui.displayName = mp;
var hp = "ToastDescription",
  gp = d.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e;
    return c.jsx(re.div, { ...n, ref: t });
  });
gp.displayName = hp;
var di = "ToastAction",
  fi = d.forwardRef((e, t) => {
    const { altText: r, ...n } = e;
    return r.trim()
      ? c.jsx(hi, {
          altText: r,
          asChild: !0,
          children: c.jsx(mi, { ...n, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${di}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
fi.displayName = di;
var pi = "ToastClose",
  mi = d.forwardRef((e, t) => {
    const { __scopeToast: r, ...n } = e,
      o = dp(pi, r);
    return c.jsx(hi, {
      asChild: !0,
      children: c.jsx(re.button, {
        type: "button",
        ...n,
        ref: t,
        onClick: J(e.onClick, o.onClose),
      }),
    });
  });
mi.displayName = pi;
var hi = d.forwardRef((e, t) => {
  const { __scopeToast: r, altText: n, ...o } = e;
  return c.jsx(re.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0,
    ...o,
    ref: t,
  });
});
function gi(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent),
        bp(n))
      ) {
        const o = n.ariaHidden || n.hidden || n.style.display === "none",
          s = n.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const a = n.dataset.radixToastAnnounceAlt;
            a && t.push(a);
          } else t.push(...gi(n));
      }
    }),
    t
  );
}
function ar(e, t, r, { discrete: n }) {
  const o = r.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }),
    n ? Pa(o, s) : o.dispatchEvent(s);
}
var js = (e, t, r = 0) => {
  const n = Math.abs(e.x),
    o = Math.abs(e.y),
    s = n > o;
  return t === "left" || t === "right" ? s && n > r : !s && o > r;
};
function vp(e = () => {}) {
  const t = ye(e);
  we(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
      }
    );
  }, [t]);
}
function bp(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function yp(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const o = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function fn(e) {
  const t = document.activeElement;
  return e.some((r) =>
    r === t ? !0 : (r.focus(), document.activeElement !== t),
  );
}
var xp = si,
  wp = ii,
  Sp = ci,
  Cp = ui,
  Ep = fi;
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  vi = (...e) =>
    e
      .filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Pp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tp = U.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: o = "",
      children: s,
      iconNode: a,
      ...i
    },
    l,
  ) =>
    U.createElement(
      "svg",
      {
        ref: l,
        ...Pp,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: n ? (Number(r) * 24) / Number(t) : r,
        className: vi("lucide", o),
        ...i,
      },
      [
        ...a.map(([u, f]) => U.createElement(u, f)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = (e, t) => {
  const r = U.forwardRef(({ className: n, ...o }, s) =>
    U.createElement(Tp, {
      ref: s,
      iconNode: t,
      className: vi(`lucide-${Rp(e)}`, n),
      ...o,
    }),
  );
  return (r.displayName = `${e}`), r;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Op = Me("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Np = Me("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _p = Me("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = Me("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ap = Me("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bi = Me("Flag", [
  [
    "path",
    {
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
      key: "i9b6wo",
    },
  ],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yi = Me("Repeat1", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dp = Me("Rewind", [
  ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
  ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mp = Me("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kp = Me("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xi = Me("Undo", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }],
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const So = Me("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let br = null;
const Ip = {
    show: (e, t = "info") => {
      br && br({ open: !0, message: e, type: t });
    },
  },
  Lp = ({ children: e }) => {
    const [t, r] = U.useState({ open: !1, message: "", type: "info" });
    U.useEffect(
      () => (
        (br = r),
        () => {
          br = null;
        }
      ),
      [],
    );
    const n = (o) => {
      switch (o) {
        case "error":
          return "border-red-500";
        case "warning":
          return "border-yellow-500";
        case "success":
          return "border-green-500";
        case "info":
        default:
          return "border-blue-500";
      }
    };
    return c.jsxs(xp, {
      swipeDirection: "right",
      duration: 5e3,
      children: [
        e,
        c.jsx(Sp, {
          open: t.open,
          duration: 5e3,
          onOpenChange: (o) => r((s) => ({ ...s, open: o })),
          className:
            "animate-in fade-in slide-in-from-top-4 fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2",
          children: c.jsxs("div", {
            className: `rounded-lg border bg-[#202020] p-6 text-[#e0e0e0] shadow-lg ${n(t.type)} flex items-center justify-between`,
            children: [
              c.jsx(Cp, {
                className: "pr-8 text-lg font-light leading-tight",
                children: t.message,
              }),
              c.jsx(Ep, {
                asChild: !0,
                altText: "Close",
                children: c.jsx("button", {
                  onClick: () => r((o) => ({ ...o, open: !1 })),
                  className:
                    "rounded-full p-1 text-[#e0e0e0] transition-colors hover:bg-white/10 hover:text-white",
                  "aria-label": "Close notification",
                  children: c.jsx(So, { className: "h-6 w-6" }),
                }),
              }),
            ],
          }),
        }),
        c.jsx(wp, {
          className:
            "fixed bottom-0 left-1/2 z-50 mb-20 flex w-full max-w-sm -translate-x-1/2 transform list-none flex-col gap-2 p-6 outline-none",
        }),
      ],
    });
  };
var Co = "Switch",
  [$p, sv] = Dt(Co),
  [Fp, Wp] = $p(Co),
  wi = d.forwardRef((e, t) => {
    const {
        __scopeSwitch: r,
        name: n,
        checked: o,
        defaultChecked: s,
        required: a,
        disabled: i,
        value: l = "on",
        onCheckedChange: u,
        form: f,
        ...p
      } = e,
      [h, v] = d.useState(null),
      w = ie(t, (y) => v(y)),
      m = d.useRef(!1),
      g = h ? f || !!h.closest("form") : !0,
      [S = !1, b] = Ot({ prop: o, defaultProp: s, onChange: u });
    return c.jsxs(Fp, {
      scope: r,
      checked: S,
      disabled: i,
      children: [
        c.jsx(re.button, {
          type: "button",
          role: "switch",
          "aria-checked": S,
          "aria-required": a,
          "data-state": Ei(S),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...p,
          ref: w,
          onClick: J(e.onClick, (y) => {
            b((E) => !E),
              g &&
                ((m.current = y.isPropagationStopped()),
                m.current || y.stopPropagation());
          }),
        }),
        g &&
          c.jsx(zp, {
            control: h,
            bubbles: !m.current,
            name: n,
            value: l,
            checked: S,
            required: a,
            disabled: i,
            form: f,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
wi.displayName = Co;
var Si = "SwitchThumb",
  Ci = d.forwardRef((e, t) => {
    const { __scopeSwitch: r, ...n } = e,
      o = Wp(Si, r);
    return c.jsx(re.span, {
      "data-state": Ei(o.checked),
      "data-disabled": o.disabled ? "" : void 0,
      ...n,
      ref: t,
    });
  });
Ci.displayName = Si;
var zp = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e,
    s = d.useRef(null),
    a = ho(r),
    i = go(t);
  return (
    d.useEffect(() => {
      const l = s.current,
        u = window.HTMLInputElement.prototype,
        p = Object.getOwnPropertyDescriptor(u, "checked").set;
      if (a !== r && p) {
        const h = new Event("click", { bubbles: n });
        p.call(l, r), l.dispatchEvent(h);
      }
    }, [a, r, n]),
    c.jsx("input", {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r,
      ...o,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function Ei(e) {
  return e ? "checked" : "unchecked";
}
var Ri = wi,
  Bp = Ci;
const Pi = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(Ri, {
    className: fe(
      "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ...t,
    ref: r,
    children: c.jsx(Bp, {
      className: fe(
        "bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Pi.displayName = Ri.displayName;
var Vp = d.useId || (() => {}),
  Hp = 0;
function Et(e) {
  const [t, r] = d.useState(Vp());
  return (
    we(() => {
      r((n) => n ?? String(Hp++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
var pn = "focusScope.autoFocusOnMount",
  mn = "focusScope.autoFocusOnUnmount",
  As = { bubbles: !1, cancelable: !0 },
  Up = "FocusScope",
  Eo = d.forwardRef((e, t) => {
    const {
        loop: r = !1,
        trapped: n = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...a
      } = e,
      [i, l] = d.useState(null),
      u = ye(o),
      f = ye(s),
      p = d.useRef(null),
      h = ie(t, (m) => l(m)),
      v = d.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    d.useEffect(() => {
      if (n) {
        let m = function (y) {
            if (v.paused || !i) return;
            const E = y.target;
            i.contains(E) ? (p.current = E) : ot(p.current, { select: !0 });
          },
          g = function (y) {
            if (v.paused || !i) return;
            const E = y.relatedTarget;
            E !== null && (i.contains(E) || ot(p.current, { select: !0 }));
          },
          S = function (y) {
            if (document.activeElement === document.body)
              for (const C of y) C.removedNodes.length > 0 && ot(i);
          };
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", g);
        const b = new MutationObserver(S);
        return (
          i && b.observe(i, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", g),
              b.disconnect();
          }
        );
      }
    }, [n, i, v.paused]),
      d.useEffect(() => {
        if (i) {
          Ms.add(v);
          const m = document.activeElement;
          if (!i.contains(m)) {
            const S = new CustomEvent(pn, As);
            i.addEventListener(pn, u),
              i.dispatchEvent(S),
              S.defaultPrevented ||
                (Yp(Zp(Ti(i)), { select: !0 }),
                document.activeElement === m && ot(i));
          }
          return () => {
            i.removeEventListener(pn, u),
              setTimeout(() => {
                const S = new CustomEvent(mn, As);
                i.addEventListener(mn, f),
                  i.dispatchEvent(S),
                  S.defaultPrevented || ot(m ?? document.body, { select: !0 }),
                  i.removeEventListener(mn, f),
                  Ms.remove(v);
              }, 0);
          };
        }
      }, [i, u, f, v]);
    const w = d.useCallback(
      (m) => {
        if ((!r && !n) || v.paused) return;
        const g = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          S = document.activeElement;
        if (g && S) {
          const b = m.currentTarget,
            [y, E] = Xp(b);
          y && E
            ? !m.shiftKey && S === E
              ? (m.preventDefault(), r && ot(y, { select: !0 }))
              : m.shiftKey &&
                S === y &&
                (m.preventDefault(), r && ot(E, { select: !0 }))
            : S === b && m.preventDefault();
        }
      },
      [r, n, v.paused],
    );
    return c.jsx(re.div, { tabIndex: -1, ...a, ref: h, onKeyDown: w });
  });
Eo.displayName = Up;
function Yp(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if ((ot(n, { select: t }), document.activeElement !== r)) return;
}
function Xp(e) {
  const t = Ti(e),
    r = Ds(t, e),
    n = Ds(t.reverse(), e);
  return [r, n];
}
function Ti(e) {
  const t = [],
    r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const o = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || o
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ds(e, t) {
  for (const r of e) if (!Kp(r, { upTo: t })) return r;
}
function Kp(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Gp(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ot(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Gp(e) && t && e.select();
  }
}
var Ms = qp();
function qp() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), (e = ks(e, t)), e.unshift(t);
    },
    remove(t) {
      var r;
      (e = ks(e, t)), (r = e[0]) == null || r.resume();
    },
  };
}
function ks(e, t) {
  const r = [...e],
    n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Zp(e) {
  return e.filter((t) => t.tagName !== "A");
}
var hn = 0;
function Oi() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Is()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Is()),
      hn++,
      () => {
        hn === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          hn--;
      }
    );
  }, []);
}
function Is() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var ze = function () {
  return (
    (ze =
      Object.assign ||
      function (t) {
        for (var r, n = 1, o = arguments.length; n < o; n++) {
          r = arguments[n];
          for (var s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
      }),
    ze.apply(this, arguments)
  );
};
function Ni(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]]);
  return r;
}
function Jp(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, s; n < o; n++)
      (s || !(n in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var fr = "right-scroll-bar-position",
  pr = "width-before-scroll-bar",
  Qp = "with-scroll-bars-hidden",
  em = "--removed-body-scroll-bar-size";
function gn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function tm(e, t) {
  var r = U.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && ((r.value = n), r.callback(n, o));
        },
      },
    };
  })[0];
  return (r.callback = t), r.facade;
}
var rm = typeof window < "u" ? d.useLayoutEffect : d.useEffect,
  Ls = new WeakMap();
function nm(e, t) {
  var r = tm(null, function (n) {
    return e.forEach(function (o) {
      return gn(o, n);
    });
  });
  return (
    rm(
      function () {
        var n = Ls.get(r);
        if (n) {
          var o = new Set(n),
            s = new Set(e),
            a = r.current;
          o.forEach(function (i) {
            s.has(i) || gn(i, null);
          }),
            s.forEach(function (i) {
              o.has(i) || gn(i, a);
            });
        }
        Ls.set(r, e);
      },
      [e],
    ),
    r
  );
}
function om(e) {
  return e;
}
function sm(e, t) {
  t === void 0 && (t = om);
  var r = [],
    n = !1,
    o = {
      read: function () {
        if (n)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return r.length ? r[r.length - 1] : e;
      },
      useMedium: function (s) {
        var a = t(s, n);
        return (
          r.push(a),
          function () {
            r = r.filter(function (i) {
              return i !== a;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (n = !0; r.length; ) {
          var a = r;
          (r = []), a.forEach(s);
        }
        r = {
          push: function (i) {
            return s(i);
          },
          filter: function () {
            return r;
          },
        };
      },
      assignMedium: function (s) {
        n = !0;
        var a = [];
        if (r.length) {
          var i = r;
          (r = []), i.forEach(s), (a = r);
        }
        var l = function () {
            var f = a;
            (a = []), f.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (r = {
            push: function (f) {
              a.push(f), u();
            },
            filter: function (f) {
              return (a = a.filter(f)), r;
            },
          });
      },
    };
  return o;
}
function am(e) {
  e === void 0 && (e = {});
  var t = sm(null);
  return (t.options = ze({ async: !0, ssr: !1 }, e)), t;
}
var _i = function (e) {
  var t = e.sideCar,
    r = Ni(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var n = t.read();
  if (!n) throw new Error("Sidecar medium not found");
  return d.createElement(n, ze({}, r));
};
_i.isSideCarExport = !0;
function im(e, t) {
  return e.useMedium(t), _i;
}
var ji = am(),
  vn = function () {},
  Wr = d.forwardRef(function (e, t) {
    var r = d.useRef(null),
      n = d.useState({
        onScrollCapture: vn,
        onWheelCapture: vn,
        onTouchMoveCapture: vn,
      }),
      o = n[0],
      s = n[1],
      a = e.forwardProps,
      i = e.children,
      l = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      h = e.sideCar,
      v = e.noIsolation,
      w = e.inert,
      m = e.allowPinchZoom,
      g = e.as,
      S = g === void 0 ? "div" : g,
      b = e.gapMode,
      y = Ni(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = h,
      C = nm([r, t]),
      T = ze(ze({}, y), o);
    return d.createElement(
      d.Fragment,
      null,
      f &&
        d.createElement(E, {
          sideCar: ji,
          removeScrollBar: u,
          shards: p,
          noIsolation: v,
          inert: w,
          setCallbacks: s,
          allowPinchZoom: !!m,
          lockRef: r,
          gapMode: b,
        }),
      a
        ? d.cloneElement(d.Children.only(i), ze(ze({}, T), { ref: C }))
        : d.createElement(S, ze({}, T, { className: l, ref: C }), i),
    );
  });
Wr.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Wr.classNames = { fullWidth: pr, zeroRight: fr };
var lm = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function cm() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = lm();
  return t && e.setAttribute("nonce", t), e;
}
function um(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function dm(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var fm = function () {
    var e = 0,
      t = null;
    return {
      add: function (r) {
        e == 0 && (t = cm()) && (um(t, r), dm(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  pm = function () {
    var e = fm();
    return function (t, r) {
      d.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && r],
      );
    };
  },
  Ai = function () {
    var e = pm(),
      t = function (r) {
        var n = r.styles,
          o = r.dynamic;
        return e(n, o), null;
      };
    return t;
  },
  mm = { left: 0, top: 0, right: 0, gap: 0 },
  bn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  hm = function (e) {
    var t = window.getComputedStyle(document.body),
      r = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      n = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [bn(r), bn(n), bn(o)];
  },
  gm = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return mm;
    var t = hm(e),
      r = document.documentElement.clientWidth,
      n = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, n - r + t[2] - t[0]),
    };
  },
  vm = Ai(),
  Rt = "data-scroll-locked",
  bm = function (e, t, r, n) {
    var o = e.left,
      s = e.top,
      a = e.right,
      i = e.gap;
    return (
      r === void 0 && (r = "margin"),
      `
  .`
        .concat(
          Qp,
          ` {
   overflow: hidden `,
        )
        .concat(
          n,
          `;
   padding-right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  body[`,
        )
        .concat(
          Rt,
          `] {
    overflow: hidden `,
        )
        .concat(
          n,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(n, ";"),
            r === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(i, "px ")
                .concat(
                  n,
                  `;
    `,
                ),
            r === "padding" &&
              "padding-right: ".concat(i, "px ").concat(n, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          fr,
          ` {
    right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(
          pr,
          ` {
    margin-right: `,
        )
        .concat(i, "px ")
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(fr, " .")
        .concat(
          fr,
          ` {
    right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  .`,
        )
        .concat(pr, " .")
        .concat(
          pr,
          ` {
    margin-right: 0 `,
        )
        .concat(
          n,
          `;
  }
  
  body[`,
        )
        .concat(
          Rt,
          `] {
    `,
        )
        .concat(em, ": ")
        .concat(
          i,
          `px;
  }
`,
        )
    );
  },
  $s = function () {
    var e = parseInt(document.body.getAttribute(Rt) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  ym = function () {
    d.useEffect(function () {
      return (
        document.body.setAttribute(Rt, ($s() + 1).toString()),
        function () {
          var e = $s() - 1;
          e <= 0
            ? document.body.removeAttribute(Rt)
            : document.body.setAttribute(Rt, e.toString());
        }
      );
    }, []);
  },
  xm = function (e) {
    var t = e.noRelative,
      r = e.noImportant,
      n = e.gapMode,
      o = n === void 0 ? "margin" : n;
    ym();
    var s = d.useMemo(
      function () {
        return gm(o);
      },
      [o],
    );
    return d.createElement(vm, { styles: bm(s, !t, o, r ? "" : "!important") });
  },
  Fn = !1;
if (typeof window < "u")
  try {
    var ir = Object.defineProperty({}, "passive", {
      get: function () {
        return (Fn = !0), !0;
      },
    });
    window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    Fn = !1;
  }
var yt = Fn ? { passive: !1 } : !1,
  wm = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Di = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var r = window.getComputedStyle(e);
    return (
      r[t] !== "hidden" &&
      !(r.overflowY === r.overflowX && !wm(e) && r[t] === "visible")
    );
  },
  Sm = function (e) {
    return Di(e, "overflowY");
  },
  Cm = function (e) {
    return Di(e, "overflowX");
  },
  Fs = function (e, t) {
    var r = t.ownerDocument,
      n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var o = Mi(e, n);
      if (o) {
        var s = ki(e, n),
          a = s[1],
          i = s[2];
        if (a > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== r.body);
    return !1;
  },
  Em = function (e) {
    var t = e.scrollTop,
      r = e.scrollHeight,
      n = e.clientHeight;
    return [t, r, n];
  },
  Rm = function (e) {
    var t = e.scrollLeft,
      r = e.scrollWidth,
      n = e.clientWidth;
    return [t, r, n];
  },
  Mi = function (e, t) {
    return e === "v" ? Sm(t) : Cm(t);
  },
  ki = function (e, t) {
    return e === "v" ? Em(t) : Rm(t);
  },
  Pm = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Tm = function (e, t, r, n, o) {
    var s = Pm(e, window.getComputedStyle(t).direction),
      a = s * n,
      i = r.target,
      l = t.contains(i),
      u = !1,
      f = a > 0,
      p = 0,
      h = 0;
    do {
      var v = ki(e, i),
        w = v[0],
        m = v[1],
        g = v[2],
        S = m - g - s * w;
      (w || S) && Mi(e, i) && ((p += S), (h += w)),
        i instanceof ShadowRoot ? (i = i.host) : (i = i.parentNode);
    } while ((!l && i !== document.body) || (l && (t.contains(i) || t === i)));
    return (
      ((f && (Math.abs(p) < 1 || !o)) || (!f && (Math.abs(h) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  lr = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Ws = function (e) {
    return [e.deltaX, e.deltaY];
  },
  zs = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Om = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Nm = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  _m = 0,
  xt = [];
function jm(e) {
  var t = d.useRef([]),
    r = d.useRef([0, 0]),
    n = d.useRef(),
    o = d.useState(_m++)[0],
    s = d.useState(Ai)[0],
    a = d.useRef(e);
  d.useEffect(
    function () {
      a.current = e;
    },
    [e],
  ),
    d.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var m = Jp([e.lockRef.current], (e.shards || []).map(zs), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (g) {
              return g.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function (g) {
                  return g.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var i = d.useCallback(function (m, g) {
      if (
        ("touches" in m && m.touches.length === 2) ||
        (m.type === "wheel" && m.ctrlKey)
      )
        return !a.current.allowPinchZoom;
      var S = lr(m),
        b = r.current,
        y = "deltaX" in m ? m.deltaX : b[0] - S[0],
        E = "deltaY" in m ? m.deltaY : b[1] - S[1],
        C,
        T = m.target,
        R = Math.abs(y) > Math.abs(E) ? "h" : "v";
      if ("touches" in m && R === "h" && T.type === "range") return !1;
      var k = Fs(R, T);
      if (!k) return !0;
      if ((k ? (C = R) : ((C = R === "v" ? "h" : "v"), (k = Fs(R, T))), !k))
        return !1;
      if (
        (!n.current && "changedTouches" in m && (y || E) && (n.current = C), !C)
      )
        return !0;
      var M = n.current || C;
      return Tm(M, g, m, M === "h" ? y : E, !0);
    }, []),
    l = d.useCallback(function (m) {
      var g = m;
      if (!(!xt.length || xt[xt.length - 1] !== s)) {
        var S = "deltaY" in g ? Ws(g) : lr(g),
          b = t.current.filter(function (C) {
            return (
              C.name === g.type &&
              (C.target === g.target || g.target === C.shadowParent) &&
              Om(C.delta, S)
            );
          })[0];
        if (b && b.should) {
          g.cancelable && g.preventDefault();
          return;
        }
        if (!b) {
          var y = (a.current.shards || [])
              .map(zs)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(g.target);
              }),
            E = y.length > 0 ? i(g, y[0]) : !a.current.noIsolation;
          E && g.cancelable && g.preventDefault();
        }
      }
    }, []),
    u = d.useCallback(function (m, g, S, b) {
      var y = { name: m, delta: g, target: S, should: b, shadowParent: Am(S) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (E) {
            return E !== y;
          });
        }, 1);
    }, []),
    f = d.useCallback(function (m) {
      (r.current = lr(m)), (n.current = void 0);
    }, []),
    p = d.useCallback(function (m) {
      u(m.type, Ws(m), m.target, i(m, e.lockRef.current));
    }, []),
    h = d.useCallback(function (m) {
      u(m.type, lr(m), m.target, i(m, e.lockRef.current));
    }, []);
  d.useEffect(function () {
    return (
      xt.push(s),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", l, yt),
      document.addEventListener("touchmove", l, yt),
      document.addEventListener("touchstart", f, yt),
      function () {
        (xt = xt.filter(function (m) {
          return m !== s;
        })),
          document.removeEventListener("wheel", l, yt),
          document.removeEventListener("touchmove", l, yt),
          document.removeEventListener("touchstart", f, yt);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    w = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    w ? d.createElement(s, { styles: Nm(o) }) : null,
    v ? d.createElement(xm, { gapMode: e.gapMode }) : null,
  );
}
function Am(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Dm = im(ji, jm);
var Ro = d.forwardRef(function (e, t) {
  return d.createElement(Wr, ze({}, e, { ref: t, sideCar: Dm }));
});
Ro.classNames = Wr.classNames;
var Mm = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  wt = new WeakMap(),
  cr = new WeakMap(),
  ur = {},
  yn = 0,
  Ii = function (e) {
    return e && (e.host || Ii(e.parentNode));
  },
  km = function (e, t) {
    return t
      .map(function (r) {
        if (e.contains(r)) return r;
        var n = Ii(r);
        return n && e.contains(n)
          ? n
          : (console.error(
              "aria-hidden",
              r,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (r) {
        return !!r;
      });
  },
  Im = function (e, t, r, n) {
    var o = km(t, Array.isArray(e) ? e : [e]);
    ur[r] || (ur[r] = new WeakMap());
    var s = ur[r],
      a = [],
      i = new Set(),
      l = new Set(o),
      u = function (p) {
        !p || i.has(p) || (i.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var f = function (p) {
      !p ||
        l.has(p) ||
        Array.prototype.forEach.call(p.children, function (h) {
          if (i.has(h)) f(h);
          else
            try {
              var v = h.getAttribute(n),
                w = v !== null && v !== "false",
                m = (wt.get(h) || 0) + 1,
                g = (s.get(h) || 0) + 1;
              wt.set(h, m),
                s.set(h, g),
                a.push(h),
                m === 1 && w && cr.set(h, !0),
                g === 1 && h.setAttribute(r, "true"),
                w || h.setAttribute(n, "true");
            } catch (S) {
              console.error("aria-hidden: cannot operate on ", h, S);
            }
        });
    };
    return (
      f(t),
      i.clear(),
      yn++,
      function () {
        a.forEach(function (p) {
          var h = wt.get(p) - 1,
            v = s.get(p) - 1;
          wt.set(p, h),
            s.set(p, v),
            h || (cr.has(p) || p.removeAttribute(n), cr.delete(p)),
            v || p.removeAttribute(r);
        }),
          yn--,
          yn ||
            ((wt = new WeakMap()),
            (wt = new WeakMap()),
            (cr = new WeakMap()),
            (ur = {}));
      }
    );
  },
  Li = function (e, t, r) {
    r === void 0 && (r = "data-aria-hidden");
    var n = Array.from(Array.isArray(e) ? e : [e]),
      o = Mm(e);
    return o
      ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))),
        Im(n, o, r, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Po = "Dialog",
  [$i, av] = Dt(Po),
  [Lm, We] = $i(Po),
  Fi = (e) => {
    const {
        __scopeDialog: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      i = d.useRef(null),
      l = d.useRef(null),
      [u = !1, f] = Ot({ prop: n, defaultProp: o, onChange: s });
    return c.jsx(Lm, {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Et(),
      titleId: Et(),
      descriptionId: Et(),
      open: u,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: r,
    });
  };
Fi.displayName = Po;
var Wi = "DialogTrigger",
  zi = d.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = We(Wi, r),
      s = ie(t, o.triggerRef);
    return c.jsx(re.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": No(o.open),
      ...n,
      ref: s,
      onClick: J(e.onClick, o.onOpenToggle),
    });
  });
zi.displayName = Wi;
var To = "DialogPortal",
  [$m, Bi] = $i(To, { forceMount: void 0 }),
  Vi = (e) => {
    const { __scopeDialog: t, forceMount: r, children: n, container: o } = e,
      s = We(To, t);
    return c.jsx($m, {
      scope: t,
      forceMount: r,
      children: d.Children.map(n, (a) =>
        c.jsx(Je, {
          present: r || s.open,
          children: c.jsx(Ir, { asChild: !0, container: o, children: a }),
        }),
      ),
    });
  };
Vi.displayName = To;
var yr = "DialogOverlay",
  Hi = d.forwardRef((e, t) => {
    const r = Bi(yr, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      s = We(yr, e.__scopeDialog);
    return s.modal
      ? c.jsx(Je, {
          present: n || s.open,
          children: c.jsx(Fm, { ...o, ref: t }),
        })
      : null;
  });
Hi.displayName = yr;
var Fm = d.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = We(yr, r);
    return c.jsx(Ro, {
      as: dt,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: c.jsx(re.div, {
        "data-state": No(o.open),
        ...n,
        ref: t,
        style: { pointerEvents: "auto", ...n.style },
      }),
    });
  }),
  pt = "DialogContent",
  Ui = d.forwardRef((e, t) => {
    const r = Bi(pt, e.__scopeDialog),
      { forceMount: n = r.forceMount, ...o } = e,
      s = We(pt, e.__scopeDialog);
    return c.jsx(Je, {
      present: n || s.open,
      children: s.modal
        ? c.jsx(Wm, { ...o, ref: t })
        : c.jsx(zm, { ...o, ref: t }),
    });
  });
Ui.displayName = pt;
var Wm = d.forwardRef((e, t) => {
    const r = We(pt, e.__scopeDialog),
      n = d.useRef(null),
      o = ie(t, r.contentRef, n);
    return (
      d.useEffect(() => {
        const s = n.current;
        if (s) return Li(s);
      }, []),
      c.jsx(Yi, {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: J(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = r.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: J(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent,
            i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: J(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  zm = d.forwardRef((e, t) => {
    const r = We(pt, e.__scopeDialog),
      n = d.useRef(!1),
      o = d.useRef(!1);
    return c.jsx(Yi, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var a, i;
        (a = e.onCloseAutoFocus) == null || a.call(e, s),
          s.defaultPrevented ||
            (n.current || (i = r.triggerRef.current) == null || i.focus(),
            s.preventDefault()),
          (n.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (s) => {
        var l, u;
        (l = e.onInteractOutside) == null || l.call(e, s),
          s.defaultPrevented ||
            ((n.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const a = s.target;
        ((u = r.triggerRef.current) == null ? void 0 : u.contains(a)) &&
          s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            o.current &&
            s.preventDefault();
      },
    });
  }),
  Yi = d.forwardRef((e, t) => {
    const {
        __scopeDialog: r,
        trapFocus: n,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...a
      } = e,
      i = We(pt, r),
      l = d.useRef(null),
      u = ie(t, l);
    return (
      Oi(),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Eo, {
            asChild: !0,
            loop: !0,
            trapped: n,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(kr, {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": No(i.open),
              ...a,
              ref: u,
              onDismiss: () => i.onOpenChange(!1),
            }),
          }),
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(Bm, { titleId: i.titleId }),
              c.jsx(Hm, { contentRef: l, descriptionId: i.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Oo = "DialogTitle",
  Xi = d.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = We(Oo, r);
    return c.jsx(re.h2, { id: o.titleId, ...n, ref: t });
  });
Xi.displayName = Oo;
var Ki = "DialogDescription",
  Gi = d.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = We(Ki, r);
    return c.jsx(re.p, { id: o.descriptionId, ...n, ref: t });
  });
Gi.displayName = Ki;
var qi = "DialogClose",
  Zi = d.forwardRef((e, t) => {
    const { __scopeDialog: r, ...n } = e,
      o = We(qi, r);
    return c.jsx(re.button, {
      type: "button",
      ...n,
      ref: t,
      onClick: J(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Zi.displayName = qi;
function No(e) {
  return e ? "open" : "closed";
}
var Ji = "DialogTitleWarning",
  [iv, Qi] = lf(Ji, { contentName: pt, titleName: Oo, docsSlug: "dialog" }),
  Bm = ({ titleId: e }) => {
    const t = Qi(Ji),
      r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      d.useEffect(() => {
        e && (document.getElementById(e) || console.error(r));
      }, [r, e]),
      null
    );
  },
  Vm = "DialogDescriptionWarning",
  Hm = ({ contentRef: e, descriptionId: t }) => {
    const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qi(Vm).contentName}}.`;
    return (
      d.useEffect(() => {
        var s;
        const o =
          (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(n));
      }, [n, e, t]),
      null
    );
  },
  el = Fi,
  Um = zi,
  tl = Vi,
  _o = Hi,
  jo = Ui,
  Ao = Xi,
  Do = Gi,
  Mo = Zi;
function Qt(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    s;
  for (s = 0; s < n.length; s++)
    (o = n[s]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Ym = ["color"],
  Xm = U.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      o = Qt(e, Ym);
    return U.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      U.createElement("path", {
        d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  Km = ["color"],
  Gm = U.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      o = Qt(e, Km);
    return U.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      U.createElement("path", {
        d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  qm = ["color"],
  Zm = U.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      o = Qt(e, qm);
    return U.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      U.createElement("path", {
        d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  Jm = ["color"],
  Qm = U.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      o = Qt(e, Jm);
    return U.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      U.createElement("path", {
        d: "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  }),
  eh = ["color"],
  rl = U.forwardRef(function (e, t) {
    var r = e.color,
      n = r === void 0 ? "currentColor" : r,
      o = Qt(e, eh);
    return U.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t },
      ),
      U.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: n,
        fillRule: "evenodd",
        clipRule: "evenodd",
      }),
    );
  });
const th = el,
  rh = Um,
  nl = tl,
  nh = Mo,
  ko = d.forwardRef(({ className: e, ...t }, r) =>
    c.jsx(_o, {
      ref: r,
      className: fe(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        e,
      ),
      ...t,
    }),
  );
ko.displayName = _o.displayName;
const ol = d.forwardRef(({ className: e, children: t, ...r }, n) =>
  c.jsxs(nl, {
    children: [
      c.jsx(ko, {}),
      c.jsxs(jo, {
        ref: n,
        className: fe(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:rounded-lg",
          e,
        ),
        ...r,
        children: [
          t,
          c.jsxs(Mo, {
            className:
              "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              c.jsx(rl, { className: "h-4 w-4" }),
              c.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
ol.displayName = jo.displayName;
const sl = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: fe("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
sl.displayName = "DialogHeader";
const al = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: fe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e,
    ),
    ...t,
  });
al.displayName = "DialogFooter";
const il = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(Ao, {
    ref: r,
    className: fe("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
il.displayName = Ao.displayName;
const ll = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(Do, {
    ref: r,
    className: fe("text-muted-foreground text-sm", e),
    ...t,
  }),
);
ll.displayName = Do.displayName;
const oh = ["top", "right", "bottom", "left"],
  st = Math.min,
  Ne = Math.max,
  xr = Math.round,
  dr = Math.floor,
  Be = (e) => ({ x: e, y: e }),
  sh = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ah = { start: "end", end: "start" };
function Wn(e, t, r) {
  return Ne(e, st(t, r));
}
function qe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function kt(e) {
  return e.split("-")[1];
}
function Io(e) {
  return e === "x" ? "y" : "x";
}
function Lo(e) {
  return e === "y" ? "height" : "width";
}
function at(e) {
  return ["top", "bottom"].includes(Ze(e)) ? "y" : "x";
}
function $o(e) {
  return Io(at(e));
}
function ih(e, t, r) {
  r === void 0 && (r = !1);
  const n = kt(e),
    o = $o(e),
    s = Lo(o);
  let a =
    o === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
        ? "bottom"
        : "top";
  return t.reference[s] > t.floating[s] && (a = wr(a)), [a, wr(a)];
}
function lh(e) {
  const t = wr(e);
  return [zn(e), t, zn(t)];
}
function zn(e) {
  return e.replace(/start|end/g, (t) => ah[t]);
}
function ch(e, t, r) {
  const n = ["left", "right"],
    o = ["right", "left"],
    s = ["top", "bottom"],
    a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? (t ? o : n) : t ? n : o;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function uh(e, t, r, n) {
  const o = kt(e);
  let s = ch(Ze(e), r === "start", n);
  return (
    o && ((s = s.map((a) => a + "-" + o)), t && (s = s.concat(s.map(zn)))), s
  );
}
function wr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => sh[t]);
}
function dh(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function cl(e) {
  return typeof e != "number"
    ? dh(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Sr(e) {
  const { x: t, y: r, width: n, height: o } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r,
  };
}
function Bs(e, t, r) {
  let { reference: n, floating: o } = e;
  const s = at(t),
    a = $o(t),
    i = Lo(a),
    l = Ze(t),
    u = s === "y",
    f = n.x + n.width / 2 - o.width / 2,
    p = n.y + n.height / 2 - o.height / 2,
    h = n[i] / 2 - o[i] / 2;
  let v;
  switch (l) {
    case "top":
      v = { x: f, y: n.y - o.height };
      break;
    case "bottom":
      v = { x: f, y: n.y + n.height };
      break;
    case "right":
      v = { x: n.x + n.width, y: p };
      break;
    case "left":
      v = { x: n.x - o.width, y: p };
      break;
    default:
      v = { x: n.x, y: n.y };
  }
  switch (kt(t)) {
    case "start":
      v[a] -= h * (r && u ? -1 : 1);
      break;
    case "end":
      v[a] += h * (r && u ? -1 : 1);
      break;
  }
  return v;
}
const fh = async (e, t, r) => {
  const {
      placement: n = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: a,
    } = r,
    i = s.filter(Boolean),
    l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: p } = Bs(u, n, l),
    h = n,
    v = {},
    w = 0;
  for (let m = 0; m < i.length; m++) {
    const { name: g, fn: S } = i[m],
      {
        x: b,
        y,
        data: E,
        reset: C,
      } = await S({
        x: f,
        y: p,
        initialPlacement: n,
        placement: h,
        strategy: o,
        middlewareData: v,
        rects: u,
        platform: a,
        elements: { reference: e, floating: t },
      });
    (f = b ?? f),
      (p = y ?? p),
      (v = { ...v, [g]: { ...v[g], ...E } }),
      C &&
        w <= 50 &&
        (w++,
        typeof C == "object" &&
          (C.placement && (h = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: f, y: p } = Bs(u, h, l))),
        (m = -1));
  }
  return { x: f, y: p, placement: h, strategy: o, middlewareData: v };
};
async function Xt(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: s, rects: a, elements: i, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: p = "floating",
      altBoundary: h = !1,
      padding: v = 0,
    } = qe(t, e),
    w = cl(v),
    g = i[h ? (p === "floating" ? "reference" : "floating") : p],
    S = Sr(
      await s.getClippingRect({
        element:
          (r = await (s.isElement == null ? void 0 : s.isElement(g))) == null ||
          r
            ? g
            : g.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(i.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: l,
      }),
    ),
    b =
      p === "floating"
        ? { x: n, y: o, width: a.floating.width, height: a.floating.height }
        : a.reference,
    y = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(i.floating)),
    E = (await (s.isElement == null ? void 0 : s.isElement(y)))
      ? (await (s.getScale == null ? void 0 : s.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Sr(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: i,
            rect: b,
            offsetParent: y,
            strategy: l,
          })
        : b,
    );
  return {
    top: (S.top - C.top + w.top) / E.y,
    bottom: (C.bottom - S.bottom + w.bottom) / E.y,
    left: (S.left - C.left + w.left) / E.x,
    right: (C.right - S.right + w.right) / E.x,
  };
}
const ph = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: r,
          y: n,
          placement: o,
          rects: s,
          platform: a,
          elements: i,
          middlewareData: l,
        } = t,
        { element: u, padding: f = 0 } = qe(e, t) || {};
      if (u == null) return {};
      const p = cl(f),
        h = { x: r, y: n },
        v = $o(o),
        w = Lo(v),
        m = await a.getDimensions(u),
        g = v === "y",
        S = g ? "top" : "left",
        b = g ? "bottom" : "right",
        y = g ? "clientHeight" : "clientWidth",
        E = s.reference[w] + s.reference[v] - h[v] - s.floating[w],
        C = h[v] - s.reference[v],
        T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
      let R = T ? T[y] : 0;
      (!R || !(await (a.isElement == null ? void 0 : a.isElement(T)))) &&
        (R = i.floating[y] || s.floating[w]);
      const k = E / 2 - C / 2,
        M = R / 2 - m[w] / 2 - 1,
        W = st(p[S], M),
        L = st(p[b], M),
        D = W,
        V = R - m[w] - L,
        _ = R / 2 - m[w] / 2 + k,
        Y = Wn(D, _, V),
        F =
          !l.arrow &&
          kt(o) != null &&
          _ !== Y &&
          s.reference[w] / 2 - (_ < D ? W : L) - m[w] / 2 < 0,
        H = F ? (_ < D ? _ - D : _ - V) : 0;
      return {
        [v]: h[v] + H,
        data: {
          [v]: Y,
          centerOffset: _ - Y - H,
          ...(F && { alignmentOffset: H }),
        },
        reset: F,
      };
    },
  }),
  mh = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var r, n;
          const {
              placement: o,
              middlewareData: s,
              rects: a,
              initialPlacement: i,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: p = !0,
              fallbackPlacements: h,
              fallbackStrategy: v = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: m = !0,
              ...g
            } = qe(e, t);
          if ((r = s.arrow) != null && r.alignmentOffset) return {};
          const S = Ze(o),
            b = at(i),
            y = Ze(i) === i,
            E = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = h || (y || !m ? [wr(i)] : lh(i)),
            T = w !== "none";
          !h && T && C.push(...uh(i, m, w, E));
          const R = [i, ...C],
            k = await Xt(t, g),
            M = [];
          let W = ((n = s.flip) == null ? void 0 : n.overflows) || [];
          if ((f && M.push(k[S]), p)) {
            const _ = ih(o, a, E);
            M.push(k[_[0]], k[_[1]]);
          }
          if (
            ((W = [...W, { placement: o, overflows: M }]),
            !M.every((_) => _ <= 0))
          ) {
            var L, D;
            const _ = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
              Y = R[_];
            if (Y)
              return {
                data: { index: _, overflows: W },
                reset: { placement: Y },
              };
            let F =
              (D = W.filter((H) => H.overflows[0] <= 0).sort(
                (H, $) => H.overflows[1] - $.overflows[1],
              )[0]) == null
                ? void 0
                : D.placement;
            if (!F)
              switch (v) {
                case "bestFit": {
                  var V;
                  const H =
                    (V = W.filter(($) => {
                      if (T) {
                        const q = at($.placement);
                        return q === b || q === "y";
                      }
                      return !0;
                    })
                      .map(($) => [
                        $.placement,
                        $.overflows
                          .filter((q) => q > 0)
                          .reduce((q, P) => q + P, 0),
                      ])
                      .sort(($, q) => $[1] - q[1])[0]) == null
                      ? void 0
                      : V[0];
                  H && (F = H);
                  break;
                }
                case "initialPlacement":
                  F = i;
                  break;
              }
            if (o !== F) return { reset: { placement: F } };
          }
          return {};
        },
      }
    );
  };
function Vs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Hs(e) {
  return oh.some((t) => e[t] >= 0);
}
const hh = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: r } = t,
          { strategy: n = "referenceHidden", ...o } = qe(e, t);
        switch (n) {
          case "referenceHidden": {
            const s = await Xt(t, { ...o, elementContext: "reference" }),
              a = Vs(s, r.reference);
            return {
              data: { referenceHiddenOffsets: a, referenceHidden: Hs(a) },
            };
          }
          case "escaped": {
            const s = await Xt(t, { ...o, altBoundary: !0 }),
              a = Vs(s, r.floating);
            return { data: { escapedOffsets: a, escaped: Hs(a) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function gh(e, t) {
  const { placement: r, platform: n, elements: o } = e,
    s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)),
    a = Ze(r),
    i = kt(r),
    l = at(r) === "y",
    u = ["left", "top"].includes(a) ? -1 : 1,
    f = s && l ? -1 : 1,
    p = qe(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    i && typeof w == "number" && (v = i === "end" ? w * -1 : w),
    l ? { x: v * f, y: h * u } : { x: h * u, y: v * f }
  );
}
const vh = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var r, n;
          const { x: o, y: s, placement: a, middlewareData: i } = t,
            l = await gh(t, e);
          return a === ((r = i.offset) == null ? void 0 : r.placement) &&
            (n = i.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: a } };
        },
      }
    );
  },
  bh = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: r, y: n, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: a = !1,
              limiter: i = {
                fn: (g) => {
                  let { x: S, y: b } = g;
                  return { x: S, y: b };
                },
              },
              ...l
            } = qe(e, t),
            u = { x: r, y: n },
            f = await Xt(t, l),
            p = at(Ze(o)),
            h = Io(p);
          let v = u[h],
            w = u[p];
          if (s) {
            const g = h === "y" ? "top" : "left",
              S = h === "y" ? "bottom" : "right",
              b = v + f[g],
              y = v - f[S];
            v = Wn(b, v, y);
          }
          if (a) {
            const g = p === "y" ? "top" : "left",
              S = p === "y" ? "bottom" : "right",
              b = w + f[g],
              y = w - f[S];
            w = Wn(b, w, y);
          }
          const m = i.fn({ ...t, [h]: v, [p]: w });
          return {
            ...m,
            data: { x: m.x - r, y: m.y - n, enabled: { [h]: s, [p]: a } },
          };
        },
      }
    );
  },
  yh = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: r, y: n, placement: o, rects: s, middlewareData: a } = t,
            { offset: i = 0, mainAxis: l = !0, crossAxis: u = !0 } = qe(e, t),
            f = { x: r, y: n },
            p = at(o),
            h = Io(p);
          let v = f[h],
            w = f[p];
          const m = qe(i, t),
            g =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (l) {
            const y = h === "y" ? "height" : "width",
              E = s.reference[h] - s.floating[y] + g.mainAxis,
              C = s.reference[h] + s.reference[y] - g.mainAxis;
            v < E ? (v = E) : v > C && (v = C);
          }
          if (u) {
            var S, b;
            const y = h === "y" ? "width" : "height",
              E = ["top", "left"].includes(Ze(o)),
              C =
                s.reference[p] -
                s.floating[y] +
                ((E && ((S = a.offset) == null ? void 0 : S[p])) || 0) +
                (E ? 0 : g.crossAxis),
              T =
                s.reference[p] +
                s.reference[y] +
                (E ? 0 : ((b = a.offset) == null ? void 0 : b[p]) || 0) -
                (E ? g.crossAxis : 0);
            w < C ? (w = C) : w > T && (w = T);
          }
          return { [h]: v, [p]: w };
        },
      }
    );
  },
  xh = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var r, n;
          const { placement: o, rects: s, platform: a, elements: i } = t,
            { apply: l = () => {}, ...u } = qe(e, t),
            f = await Xt(t, u),
            p = Ze(o),
            h = kt(o),
            v = at(o) === "y",
            { width: w, height: m } = s.floating;
          let g, S;
          p === "top" || p === "bottom"
            ? ((g = p),
              (S =
                h ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((S = p), (g = h === "end" ? "top" : "bottom"));
          const b = m - f.top - f.bottom,
            y = w - f.left - f.right,
            E = st(m - f[g], b),
            C = st(w - f[S], y),
            T = !t.middlewareData.shift;
          let R = E,
            k = C;
          if (
            ((r = t.middlewareData.shift) != null && r.enabled.x && (k = y),
            (n = t.middlewareData.shift) != null && n.enabled.y && (R = b),
            T && !h)
          ) {
            const W = Ne(f.left, 0),
              L = Ne(f.right, 0),
              D = Ne(f.top, 0),
              V = Ne(f.bottom, 0);
            v
              ? (k = w - 2 * (W !== 0 || L !== 0 ? W + L : Ne(f.left, f.right)))
              : (R =
                  m - 2 * (D !== 0 || V !== 0 ? D + V : Ne(f.top, f.bottom)));
          }
          await l({ ...t, availableWidth: k, availableHeight: R });
          const M = await a.getDimensions(i.floating);
          return w !== M.width || m !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function zr() {
  return typeof window < "u";
}
function It(e) {
  return ul(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Xe(e) {
  var t;
  return (t = (ul(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ul(e) {
  return zr() ? e instanceof Node || e instanceof je(e).Node : !1;
}
function $e(e) {
  return zr() ? e instanceof Element || e instanceof je(e).Element : !1;
}
function Ve(e) {
  return zr() ? e instanceof HTMLElement || e instanceof je(e).HTMLElement : !1;
}
function Us(e) {
  return !zr() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
function er(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = Fe(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
    !["inline", "contents"].includes(o)
  );
}
function wh(e) {
  return ["table", "td", "th"].includes(It(e));
}
function Br(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Fo(e) {
  const t = Wo(),
    r = $e(e) ? Fe(e) : e;
  return (
    r.transform !== "none" ||
    r.perspective !== "none" ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!t && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!t && (r.filter ? r.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((n) =>
      (r.willChange || "").includes(n),
    ) ||
    ["paint", "layout", "strict", "content"].some((n) =>
      (r.contain || "").includes(n),
    )
  );
}
function Sh(e) {
  let t = it(e);
  for (; Ve(t) && !Nt(t); ) {
    if (Fo(t)) return t;
    if (Br(t)) return null;
    t = it(t);
  }
  return null;
}
function Wo() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nt(e) {
  return ["html", "body", "#document"].includes(It(e));
}
function Fe(e) {
  return je(e).getComputedStyle(e);
}
function Vr(e) {
  return $e(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function it(e) {
  if (It(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Us(e) && e.host) || Xe(e);
  return Us(t) ? t.host : t;
}
function dl(e) {
  const t = it(e);
  return Nt(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ve(t) && er(t)
      ? t
      : dl(t);
}
function Kt(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = dl(e),
    s = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
    a = je(o);
  if (s) {
    const i = Bn(a);
    return t.concat(
      a,
      a.visualViewport || [],
      er(o) ? o : [],
      i && r ? Kt(i) : [],
    );
  }
  return t.concat(o, Kt(o, [], r));
}
function Bn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fl(e) {
  const t = Fe(e);
  let r = parseFloat(t.width) || 0,
    n = parseFloat(t.height) || 0;
  const o = Ve(e),
    s = o ? e.offsetWidth : r,
    a = o ? e.offsetHeight : n,
    i = xr(r) !== s || xr(n) !== a;
  return i && ((r = s), (n = a)), { width: r, height: n, $: i };
}
function zo(e) {
  return $e(e) ? e : e.contextElement;
}
function Pt(e) {
  const t = zo(e);
  if (!Ve(t)) return Be(1);
  const r = t.getBoundingClientRect(),
    { width: n, height: o, $: s } = fl(t);
  let a = (s ? xr(r.width) : r.width) / n,
    i = (s ? xr(r.height) : r.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!i || !Number.isFinite(i)) && (i = 1),
    { x: a, y: i }
  );
}
const Ch = Be(0);
function pl(e) {
  const t = je(e);
  return !Wo() || !t.visualViewport
    ? Ch
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Eh(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== je(e)) ? !1 : t;
}
function mt(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(),
    s = zo(e);
  let a = Be(1);
  t && (n ? $e(n) && (a = Pt(n)) : (a = Pt(e)));
  const i = Eh(s, r, n) ? pl(s) : Be(0);
  let l = (o.left + i.x) / a.x,
    u = (o.top + i.y) / a.y,
    f = o.width / a.x,
    p = o.height / a.y;
  if (s) {
    const h = je(s),
      v = n && $e(n) ? je(n) : n;
    let w = h,
      m = Bn(w);
    for (; m && n && v !== w; ) {
      const g = Pt(m),
        S = m.getBoundingClientRect(),
        b = Fe(m),
        y = S.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x,
        E = S.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      (l *= g.x),
        (u *= g.y),
        (f *= g.x),
        (p *= g.y),
        (l += y),
        (u += E),
        (w = je(m)),
        (m = Bn(w));
    }
  }
  return Sr({ width: f, height: p, x: l, y: u });
}
function Bo(e, t) {
  const r = Vr(e).scrollLeft;
  return t ? t.left + r : mt(Xe(e)).left + r;
}
function ml(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    o = n.left + t.scrollLeft - (r ? 0 : Bo(e, n)),
    s = n.top + t.scrollTop;
  return { x: o, y: s };
}
function Rh(e) {
  let { elements: t, rect: r, offsetParent: n, strategy: o } = e;
  const s = o === "fixed",
    a = Xe(n),
    i = t ? Br(t.floating) : !1;
  if (n === a || (i && s)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = Be(1);
  const f = Be(0),
    p = Ve(n);
  if (
    (p || (!p && !s)) &&
    ((It(n) !== "body" || er(a)) && (l = Vr(n)), Ve(n))
  ) {
    const v = mt(n);
    (u = Pt(n)), (f.x = v.x + n.clientLeft), (f.y = v.y + n.clientTop);
  }
  const h = a && !p && !s ? ml(a, l, !0) : Be(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + f.x + h.x,
    y: r.y * u.y - l.scrollTop * u.y + f.y + h.y,
  };
}
function Ph(e) {
  return Array.from(e.getClientRects());
}
function Th(e) {
  const t = Xe(e),
    r = Vr(e),
    n = e.ownerDocument.body,
    o = Ne(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
    s = Ne(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Bo(e);
  const i = -r.scrollTop;
  return (
    Fe(n).direction === "rtl" && (a += Ne(t.clientWidth, n.clientWidth) - o),
    { width: o, height: s, x: a, y: i }
  );
}
function Oh(e, t) {
  const r = je(e),
    n = Xe(e),
    o = r.visualViewport;
  let s = n.clientWidth,
    a = n.clientHeight,
    i = 0,
    l = 0;
  if (o) {
    (s = o.width), (a = o.height);
    const u = Wo();
    (!u || (u && t === "fixed")) && ((i = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: s, height: a, x: i, y: l };
}
function Nh(e, t) {
  const r = mt(e, !0, t === "fixed"),
    n = r.top + e.clientTop,
    o = r.left + e.clientLeft,
    s = Ve(e) ? Pt(e) : Be(1),
    a = e.clientWidth * s.x,
    i = e.clientHeight * s.y,
    l = o * s.x,
    u = n * s.y;
  return { width: a, height: i, x: l, y: u };
}
function Ys(e, t, r) {
  let n;
  if (t === "viewport") n = Oh(e, r);
  else if (t === "document") n = Th(Xe(e));
  else if ($e(t)) n = Nh(t, r);
  else {
    const o = pl(e);
    n = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Sr(n);
}
function hl(e, t) {
  const r = it(e);
  return r === t || !$e(r) || Nt(r)
    ? !1
    : Fe(r).position === "fixed" || hl(r, t);
}
function _h(e, t) {
  const r = t.get(e);
  if (r) return r;
  let n = Kt(e, [], !1).filter((i) => $e(i) && It(i) !== "body"),
    o = null;
  const s = Fe(e).position === "fixed";
  let a = s ? it(e) : e;
  for (; $e(a) && !Nt(a); ) {
    const i = Fe(a),
      l = Fo(a);
    !l && i.position === "fixed" && (o = null),
      (
        s
          ? !l && !o
          : (!l &&
              i.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (er(a) && !l && hl(e, a))
      )
        ? (n = n.filter((f) => f !== a))
        : (o = i),
      (a = it(a));
  }
  return t.set(e, n), n;
}
function jh(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const a = [
      ...(r === "clippingAncestors"
        ? Br(t)
          ? []
          : _h(t, this._c)
        : [].concat(r)),
      n,
    ],
    i = a[0],
    l = a.reduce(
      (u, f) => {
        const p = Ys(t, f, o);
        return (
          (u.top = Ne(p.top, u.top)),
          (u.right = st(p.right, u.right)),
          (u.bottom = st(p.bottom, u.bottom)),
          (u.left = Ne(p.left, u.left)),
          u
        );
      },
      Ys(t, i, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Ah(e) {
  const { width: t, height: r } = fl(e);
  return { width: t, height: r };
}
function Dh(e, t, r) {
  const n = Ve(t),
    o = Xe(t),
    s = r === "fixed",
    a = mt(e, !0, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const l = Be(0);
  if (n || (!n && !s))
    if (((It(t) !== "body" || er(o)) && (i = Vr(t)), n)) {
      const h = mt(t, !0, s, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else o && (l.x = Bo(o));
  const u = o && !n && !s ? ml(o, i) : Be(0),
    f = a.left + i.scrollLeft - l.x - u.x,
    p = a.top + i.scrollTop - l.y - u.y;
  return { x: f, y: p, width: a.width, height: a.height };
}
function xn(e) {
  return Fe(e).position === "static";
}
function Xs(e, t) {
  if (!Ve(e) || Fe(e).position === "fixed") return null;
  if (t) return t(e);
  let r = e.offsetParent;
  return Xe(e) === r && (r = r.ownerDocument.body), r;
}
function gl(e, t) {
  const r = je(e);
  if (Br(e)) return r;
  if (!Ve(e)) {
    let o = it(e);
    for (; o && !Nt(o); ) {
      if ($e(o) && !xn(o)) return o;
      o = it(o);
    }
    return r;
  }
  let n = Xs(e, t);
  for (; n && wh(n) && xn(n); ) n = Xs(n, t);
  return n && Nt(n) && xn(n) && !Fo(n) ? r : n || Sh(e) || r;
}
const Mh = async function (e) {
  const t = this.getOffsetParent || gl,
    r = this.getDimensions,
    n = await r(e.floating);
  return {
    reference: Dh(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function kh(e) {
  return Fe(e).direction === "rtl";
}
const Ih = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rh,
  getDocumentElement: Xe,
  getClippingRect: jh,
  getOffsetParent: gl,
  getElementRects: Mh,
  getClientRects: Ph,
  getDimensions: Ah,
  getScale: Pt,
  isElement: $e,
  isRTL: kh,
};
function Lh(e, t) {
  let r = null,
    n;
  const o = Xe(e);
  function s() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), (r = null);
  }
  function a(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), s();
    const { left: u, top: f, width: p, height: h } = e.getBoundingClientRect();
    if ((i || t(), !p || !h)) return;
    const v = dr(f),
      w = dr(o.clientWidth - (u + p)),
      m = dr(o.clientHeight - (f + h)),
      g = dr(u),
      b = {
        rootMargin: -v + "px " + -w + "px " + -m + "px " + -g + "px",
        threshold: Ne(0, st(1, l)) || 1,
      };
    let y = !0;
    function E(C) {
      const T = C[0].intersectionRatio;
      if (T !== l) {
        if (!y) return a();
        T
          ? a(!1, T)
          : (n = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      r = new IntersectionObserver(E, { ...b, root: o.ownerDocument });
    } catch {
      r = new IntersectionObserver(E, b);
    }
    r.observe(e);
  }
  return a(!0), s;
}
function $h(e, t, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: i = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    u = zo(e),
    f = o || s ? [...(u ? Kt(u) : []), ...Kt(t)] : [];
  f.forEach((S) => {
    o && S.addEventListener("scroll", r, { passive: !0 }),
      s && S.addEventListener("resize", r);
  });
  const p = u && i ? Lh(u, r) : null;
  let h = -1,
    v = null;
  a &&
    ((v = new ResizeObserver((S) => {
      let [b] = S;
      b &&
        b.target === u &&
        v &&
        (v.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var y;
          (y = v) == null || y.observe(t);
        }))),
        r();
    })),
    u && !l && v.observe(u),
    v.observe(t));
  let w,
    m = l ? mt(e) : null;
  l && g();
  function g() {
    const S = mt(e);
    m &&
      (S.x !== m.x ||
        S.y !== m.y ||
        S.width !== m.width ||
        S.height !== m.height) &&
      r(),
      (m = S),
      (w = requestAnimationFrame(g));
  }
  return (
    r(),
    () => {
      var S;
      f.forEach((b) => {
        o && b.removeEventListener("scroll", r),
          s && b.removeEventListener("resize", r);
      }),
        p == null || p(),
        (S = v) == null || S.disconnect(),
        (v = null),
        l && cancelAnimationFrame(w);
    }
  );
}
const Fh = vh,
  Wh = bh,
  zh = mh,
  Bh = xh,
  Vh = hh,
  Ks = ph,
  Hh = yh,
  Uh = (e, t, r) => {
    const n = new Map(),
      o = { platform: Ih, ...r },
      s = { ...o.platform, _c: n };
    return fh(e, t, { ...o, platform: s });
  };
var mr = typeof document < "u" ? U.useLayoutEffect : U.useEffect;
function Cr(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((r = e.length), r !== t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Cr(e[n], t[n])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !Cr(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vl(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gs(e, t) {
  const r = vl(e);
  return Math.round(t * r) / r;
}
function wn(e) {
  const t = d.useRef(e);
  return (
    mr(() => {
      t.current = e;
    }),
    t
  );
}
function Yh(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: o,
      elements: { reference: s, floating: a } = {},
      transform: i = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [f, p] = d.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, v] = d.useState(n);
  Cr(h, n) || v(n);
  const [w, m] = d.useState(null),
    [g, S] = d.useState(null),
    b = d.useCallback(($) => {
      $ !== T.current && ((T.current = $), m($));
    }, []),
    y = d.useCallback(($) => {
      $ !== R.current && ((R.current = $), S($));
    }, []),
    E = s || w,
    C = a || g,
    T = d.useRef(null),
    R = d.useRef(null),
    k = d.useRef(f),
    M = l != null,
    W = wn(l),
    L = wn(o),
    D = wn(u),
    V = d.useCallback(() => {
      if (!T.current || !R.current) return;
      const $ = { placement: t, strategy: r, middleware: h };
      L.current && ($.platform = L.current),
        Uh(T.current, R.current, $).then((q) => {
          const P = { ...q, isPositioned: D.current !== !1 };
          _.current &&
            !Cr(k.current, P) &&
            ((k.current = P),
            qt.flushSync(() => {
              p(P);
            }));
        });
    }, [h, t, r, L, D]);
  mr(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), p(($) => ({ ...$, isPositioned: !1 })));
  }, [u]);
  const _ = d.useRef(!1);
  mr(
    () => (
      (_.current = !0),
      () => {
        _.current = !1;
      }
    ),
    [],
  ),
    mr(() => {
      if ((E && (T.current = E), C && (R.current = C), E && C)) {
        if (W.current) return W.current(E, C, V);
        V();
      }
    }, [E, C, V, W, M]);
  const Y = d.useMemo(
      () => ({ reference: T, floating: R, setReference: b, setFloating: y }),
      [b, y],
    ),
    F = d.useMemo(() => ({ reference: E, floating: C }), [E, C]),
    H = d.useMemo(() => {
      const $ = { position: r, left: 0, top: 0 };
      if (!F.floating) return $;
      const q = Gs(F.floating, f.x),
        P = Gs(F.floating, f.y);
      return i
        ? {
            ...$,
            transform: "translate(" + q + "px, " + P + "px)",
            ...(vl(F.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: q, top: P };
    }, [r, i, F.floating, f.x, f.y]);
  return d.useMemo(
    () => ({ ...f, update: V, refs: Y, elements: F, floatingStyles: H }),
    [f, V, Y, F, H],
  );
}
const Xh = (e) => {
    function t(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(r) {
        const { element: n, padding: o } = typeof e == "function" ? e(r) : e;
        return n && t(n)
          ? n.current != null
            ? Ks({ element: n.current, padding: o }).fn(r)
            : {}
          : n
            ? Ks({ element: n, padding: o }).fn(r)
            : {};
      },
    };
  },
  Kh = (e, t) => ({ ...Fh(e), options: [e, t] }),
  Gh = (e, t) => ({ ...Wh(e), options: [e, t] }),
  qh = (e, t) => ({ ...Hh(e), options: [e, t] }),
  Zh = (e, t) => ({ ...zh(e), options: [e, t] }),
  Jh = (e, t) => ({ ...Bh(e), options: [e, t] }),
  Qh = (e, t) => ({ ...Vh(e), options: [e, t] }),
  eg = (e, t) => ({ ...Xh(e), options: [e, t] });
var tg = "Arrow",
  bl = d.forwardRef((e, t) => {
    const { children: r, width: n = 10, height: o = 5, ...s } = e;
    return c.jsx(re.svg, {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
bl.displayName = tg;
var rg = bl;
function ng(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = d.createContext(a),
      l = r.length;
    r = [...r, a];
    function u(p) {
      const { scope: h, children: v, ...w } = p,
        m = (h == null ? void 0 : h[e][l]) || i,
        g = d.useMemo(() => w, Object.values(w));
      return c.jsx(m.Provider, { value: g, children: v });
    }
    function f(p, h) {
      const v = (h == null ? void 0 : h[e][l]) || i,
        w = d.useContext(v);
      if (w) return w;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + "Provider"), [u, f];
  }
  const o = () => {
    const s = r.map((a) => d.createContext(a));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || s;
      return d.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (o.scopeName = e), [n, og(o, ...t)];
}
function og(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const a = n.reduce((i, { useScope: l, scopeName: u }) => {
        const p = l(s)[`__scope${u}`];
        return { ...i, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (r.scopeName = t.scopeName), r;
}
var Vo = "Popper",
  [yl, xl] = ng(Vo),
  [sg, wl] = yl(Vo),
  Sl = (e) => {
    const { __scopePopper: t, children: r } = e,
      [n, o] = d.useState(null);
    return c.jsx(sg, { scope: t, anchor: n, onAnchorChange: o, children: r });
  };
Sl.displayName = Vo;
var Cl = "PopperAnchor",
  El = d.forwardRef((e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e,
      s = wl(Cl, r),
      a = d.useRef(null),
      i = ie(t, a);
    return (
      d.useEffect(() => {
        s.onAnchorChange((n == null ? void 0 : n.current) || a.current);
      }),
      n ? null : c.jsx(re.div, { ...o, ref: i })
    );
  });
El.displayName = Cl;
var Ho = "PopperContent",
  [ag, ig] = yl(Ho),
  Rl = d.forwardRef((e, t) => {
    var A, B, G, z, te, O;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: a = 0,
        arrowPadding: i = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: f = 0,
        sticky: p = "partial",
        hideWhenDetached: h = !1,
        updatePositionStrategy: v = "optimized",
        onPlaced: w,
        ...m
      } = e,
      g = wl(Ho, r),
      [S, b] = d.useState(null),
      y = ie(t, (me) => b(me)),
      [E, C] = d.useState(null),
      T = go(E),
      R = (T == null ? void 0 : T.width) ?? 0,
      k = (T == null ? void 0 : T.height) ?? 0,
      M = n + (s !== "center" ? "-" + s : ""),
      W =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      L = Array.isArray(u) ? u : [u],
      D = L.length > 0,
      V = { padding: W, boundary: L.filter(cg), altBoundary: D },
      {
        refs: _,
        floatingStyles: Y,
        placement: F,
        isPositioned: H,
        middlewareData: $,
      } = Yh({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...me) =>
          $h(...me, { animationFrame: v === "always" }),
        elements: { reference: g.anchor },
        middleware: [
          Kh({ mainAxis: o + k, alignmentAxis: a }),
          l &&
            Gh({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? qh() : void 0,
              ...V,
            }),
          l && Zh({ ...V }),
          Jh({
            ...V,
            apply: ({
              elements: me,
              rects: xe,
              availableWidth: Te,
              availableHeight: ke,
            }) => {
              const { width: Qe, height: nr } = xe.reference,
                Ke = me.floating.style;
              Ke.setProperty("--radix-popper-available-width", `${Te}px`),
                Ke.setProperty("--radix-popper-available-height", `${ke}px`),
                Ke.setProperty("--radix-popper-anchor-width", `${Qe}px`),
                Ke.setProperty("--radix-popper-anchor-height", `${nr}px`);
            },
          }),
          E && eg({ element: E, padding: i }),
          ug({ arrowWidth: R, arrowHeight: k }),
          h && Qh({ strategy: "referenceHidden", ...V }),
        ],
      }),
      [q, P] = Ol(F),
      j = ye(w);
    we(() => {
      H && (j == null || j());
    }, [H, j]);
    const Q = (A = $.arrow) == null ? void 0 : A.x,
      K = (B = $.arrow) == null ? void 0 : B.y,
      X = ((G = $.arrow) == null ? void 0 : G.centerOffset) !== 0,
      [ne, Z] = d.useState();
    return (
      we(() => {
        S && Z(window.getComputedStyle(S).zIndex);
      }, [S]),
      c.jsx("div", {
        ref: _.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: H ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ne,
          "--radix-popper-transform-origin": [
            (z = $.transformOrigin) == null ? void 0 : z.x,
            (te = $.transformOrigin) == null ? void 0 : te.y,
          ].join(" "),
          ...(((O = $.hide) == null ? void 0 : O.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(ag, {
          scope: r,
          placedSide: q,
          onArrowChange: C,
          arrowX: Q,
          arrowY: K,
          shouldHideArrow: X,
          children: c.jsx(re.div, {
            "data-side": q,
            "data-align": P,
            ...m,
            ref: y,
            style: { ...m.style, animation: H ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Rl.displayName = Ho;
var Pl = "PopperArrow",
  lg = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Tl = d.forwardRef(function (t, r) {
    const { __scopePopper: n, ...o } = t,
      s = ig(Pl, n),
      a = lg[s.placedSide];
    return c.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(rg, {
        ...o,
        ref: r,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Tl.displayName = Pl;
function cg(e) {
  return e !== null;
}
var ug = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, S, b;
    const { placement: r, rects: n, middlewareData: o } = t,
      a = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0,
      i = a ? 0 : e.arrowWidth,
      l = a ? 0 : e.arrowHeight,
      [u, f] = Ol(r),
      p = { start: "0%", center: "50%", end: "100%" }[f],
      h = (((S = o.arrow) == null ? void 0 : S.x) ?? 0) + i / 2,
      v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let w = "",
      m = "";
    return (
      u === "bottom"
        ? ((w = a ? p : `${h}px`), (m = `${-l}px`))
        : u === "top"
          ? ((w = a ? p : `${h}px`), (m = `${n.floating.height + l}px`))
          : u === "right"
            ? ((w = `${-l}px`), (m = a ? p : `${v}px`))
            : u === "left" &&
              ((w = `${n.floating.width + l}px`), (m = a ? p : `${v}px`)),
      { data: { x: w, y: m } }
    );
  },
});
function Ol(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var dg = Sl,
  fg = El,
  pg = Rl,
  mg = Tl,
  hg = [" ", "Enter", "ArrowUp", "ArrowDown"],
  gg = [" ", "Enter"],
  tr = "Select",
  [Hr, Ur, vg] = vo(tr),
  [Lt, lv] = Dt(tr, [vg, xl]),
  Yr = xl(),
  [bg, lt] = Lt(tr),
  [yg, xg] = Lt(tr),
  Nl = (e) => {
    const {
        __scopeSelect: t,
        children: r,
        open: n,
        defaultOpen: o,
        onOpenChange: s,
        value: a,
        defaultValue: i,
        onValueChange: l,
        dir: u,
        name: f,
        autoComplete: p,
        disabled: h,
        required: v,
        form: w,
      } = e,
      m = Yr(t),
      [g, S] = d.useState(null),
      [b, y] = d.useState(null),
      [E, C] = d.useState(!1),
      T = lo(u),
      [R = !1, k] = Ot({ prop: n, defaultProp: o, onChange: s }),
      [M, W] = Ot({ prop: a, defaultProp: i, onChange: l }),
      L = d.useRef(null),
      D = g ? w || !!g.closest("form") : !0,
      [V, _] = d.useState(new Set()),
      Y = Array.from(V)
        .map((F) => F.props.value)
        .join(";");
    return c.jsx(dg, {
      ...m,
      children: c.jsxs(bg, {
        required: v,
        scope: t,
        trigger: g,
        onTriggerChange: S,
        valueNode: b,
        onValueNodeChange: y,
        valueNodeHasChildren: E,
        onValueNodeHasChildrenChange: C,
        contentId: Et(),
        value: M,
        onValueChange: W,
        open: R,
        onOpenChange: k,
        dir: T,
        triggerPointerDownPosRef: L,
        disabled: h,
        children: [
          c.jsx(Hr.Provider, {
            scope: t,
            children: c.jsx(yg, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: d.useCallback((F) => {
                _((H) => new Set(H).add(F));
              }, []),
              onNativeOptionRemove: d.useCallback((F) => {
                _((H) => {
                  const $ = new Set(H);
                  return $.delete(F), $;
                });
              }, []),
              children: r,
            }),
          }),
          D
            ? c.jsxs(
                tc,
                {
                  "aria-hidden": !0,
                  required: v,
                  tabIndex: -1,
                  name: f,
                  autoComplete: p,
                  value: M,
                  onChange: (F) => W(F.target.value),
                  disabled: h,
                  form: w,
                  children: [
                    M === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(V),
                  ],
                },
                Y,
              )
            : null,
        ],
      }),
    });
  };
Nl.displayName = tr;
var _l = "SelectTrigger",
  jl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e,
      s = Yr(r),
      a = lt(_l, r),
      i = a.disabled || n,
      l = ie(t, a.onTriggerChange),
      u = Ur(r),
      f = d.useRef("touch"),
      [p, h, v] = rc((m) => {
        const g = u().filter((y) => !y.disabled),
          S = g.find((y) => y.value === a.value),
          b = nc(g, m, S);
        b !== void 0 && a.onValueChange(b.value);
      }),
      w = (m) => {
        i || (a.onOpenChange(!0), v()),
          m &&
            (a.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            });
      };
    return c.jsx(fg, {
      asChild: !0,
      ...s,
      children: c.jsx(re.button, {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": ec(a.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: J(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && w(m);
        }),
        onPointerDown: J(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const g = m.target;
          g.hasPointerCapture(m.pointerId) &&
            g.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              m.pointerType === "mouse" &&
              (w(m), m.preventDefault());
        }),
        onKeyDown: J(o.onKeyDown, (m) => {
          const g = p.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            h(m.key),
            !(g && m.key === " ") &&
              hg.includes(m.key) &&
              (w(), m.preventDefault());
        }),
      }),
    });
  });
jl.displayName = _l;
var Al = "SelectValue",
  Dl = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        className: n,
        style: o,
        children: s,
        placeholder: a = "",
        ...i
      } = e,
      l = lt(Al, r),
      { onValueNodeHasChildrenChange: u } = l,
      f = s !== void 0,
      p = ie(t, l.onValueNodeChange);
    return (
      we(() => {
        u(f);
      }, [u, f]),
      c.jsx(re.span, {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: ec(l.value) ? c.jsx(c.Fragment, { children: a }) : s,
      })
    );
  });
Dl.displayName = Al;
var wg = "SelectIcon",
  Ml = d.forwardRef((e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return c.jsx(re.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: n || "▼",
    });
  });
Ml.displayName = wg;
var Sg = "SelectPortal",
  kl = (e) => c.jsx(Ir, { asChild: !0, ...e });
kl.displayName = Sg;
var ht = "SelectContent",
  Il = d.forwardRef((e, t) => {
    const r = lt(ht, e.__scopeSelect),
      [n, o] = d.useState();
    if (
      (we(() => {
        o(new DocumentFragment());
      }, []),
      !r.open)
    ) {
      const s = n;
      return s
        ? qt.createPortal(
            c.jsx(Ll, {
              scope: e.__scopeSelect,
              children: c.jsx(Hr.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            s,
          )
        : null;
    }
    return c.jsx($l, { ...e, ref: t });
  });
Il.displayName = ht;
var Le = 10,
  [Ll, ct] = Lt(ht),
  Cg = "SelectContentImpl",
  $l = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        position: n = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        side: i,
        sideOffset: l,
        align: u,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: h,
        collisionPadding: v,
        sticky: w,
        hideWhenDetached: m,
        avoidCollisions: g,
        ...S
      } = e,
      b = lt(ht, r),
      [y, E] = d.useState(null),
      [C, T] = d.useState(null),
      R = ie(t, (A) => E(A)),
      [k, M] = d.useState(null),
      [W, L] = d.useState(null),
      D = Ur(r),
      [V, _] = d.useState(!1),
      Y = d.useRef(!1);
    d.useEffect(() => {
      if (y) return Li(y);
    }, [y]),
      Oi();
    const F = d.useCallback(
        (A) => {
          const [B, ...G] = D().map((O) => O.ref.current),
            [z] = G.slice(-1),
            te = document.activeElement;
          for (const O of A)
            if (
              O === te ||
              (O == null || O.scrollIntoView({ block: "nearest" }),
              O === B && C && (C.scrollTop = 0),
              O === z && C && (C.scrollTop = C.scrollHeight),
              O == null || O.focus(),
              document.activeElement !== te)
            )
              return;
        },
        [D, C],
      ),
      H = d.useCallback(() => F([k, y]), [F, k, y]);
    d.useEffect(() => {
      V && H();
    }, [V, H]);
    const { onOpenChange: $, triggerPointerDownPosRef: q } = b;
    d.useEffect(() => {
      if (y) {
        let A = { x: 0, y: 0 };
        const B = (z) => {
            var te, O;
            A = {
              x: Math.abs(
                Math.round(z.pageX) -
                  (((te = q.current) == null ? void 0 : te.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(z.pageY) -
                  (((O = q.current) == null ? void 0 : O.y) ?? 0),
              ),
            };
          },
          G = (z) => {
            A.x <= 10 && A.y <= 10
              ? z.preventDefault()
              : y.contains(z.target) || $(!1),
              document.removeEventListener("pointermove", B),
              (q.current = null);
          };
        return (
          q.current !== null &&
            (document.addEventListener("pointermove", B),
            document.addEventListener("pointerup", G, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", B),
              document.removeEventListener("pointerup", G, { capture: !0 });
          }
        );
      }
    }, [y, $, q]),
      d.useEffect(() => {
        const A = () => $(!1);
        return (
          window.addEventListener("blur", A),
          window.addEventListener("resize", A),
          () => {
            window.removeEventListener("blur", A),
              window.removeEventListener("resize", A);
          }
        );
      }, [$]);
    const [P, j] = rc((A) => {
        const B = D().filter((te) => !te.disabled),
          G = B.find((te) => te.ref.current === document.activeElement),
          z = nc(B, A, G);
        z && setTimeout(() => z.ref.current.focus());
      }),
      Q = d.useCallback(
        (A, B, G) => {
          const z = !Y.current && !G;
          ((b.value !== void 0 && b.value === B) || z) &&
            (M(A), z && (Y.current = !0));
        },
        [b.value],
      ),
      K = d.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      X = d.useCallback(
        (A, B, G) => {
          const z = !Y.current && !G;
          ((b.value !== void 0 && b.value === B) || z) && L(A);
        },
        [b.value],
      ),
      ne = n === "popper" ? Vn : Fl,
      Z =
        ne === Vn
          ? {
              side: i,
              sideOffset: l,
              align: u,
              alignOffset: f,
              arrowPadding: p,
              collisionBoundary: h,
              collisionPadding: v,
              sticky: w,
              hideWhenDetached: m,
              avoidCollisions: g,
            }
          : {};
    return c.jsx(Ll, {
      scope: r,
      content: y,
      viewport: C,
      onViewportChange: T,
      itemRefCallback: Q,
      selectedItem: k,
      onItemLeave: K,
      itemTextRefCallback: X,
      focusSelectedItem: H,
      selectedItemText: W,
      position: n,
      isPositioned: V,
      searchRef: P,
      children: c.jsx(Ro, {
        as: dt,
        allowPinchZoom: !0,
        children: c.jsx(Eo, {
          asChild: !0,
          trapped: b.open,
          onMountAutoFocus: (A) => {
            A.preventDefault();
          },
          onUnmountAutoFocus: J(o, (A) => {
            var B;
            (B = b.trigger) == null || B.focus({ preventScroll: !0 }),
              A.preventDefault();
          }),
          children: c.jsx(kr, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: (A) => A.preventDefault(),
            onDismiss: () => b.onOpenChange(!1),
            children: c.jsx(ne, {
              role: "listbox",
              id: b.contentId,
              "data-state": b.open ? "open" : "closed",
              dir: b.dir,
              onContextMenu: (A) => A.preventDefault(),
              ...S,
              ...Z,
              onPlaced: () => _(!0),
              ref: R,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...S.style,
              },
              onKeyDown: J(S.onKeyDown, (A) => {
                const B = A.ctrlKey || A.altKey || A.metaKey;
                if (
                  (A.key === "Tab" && A.preventDefault(),
                  !B && A.key.length === 1 && j(A.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key))
                ) {
                  let z = D()
                    .filter((te) => !te.disabled)
                    .map((te) => te.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(A.key) &&
                      (z = z.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(A.key))
                  ) {
                    const te = A.target,
                      O = z.indexOf(te);
                    z = z.slice(O + 1);
                  }
                  setTimeout(() => F(z)), A.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
$l.displayName = Cg;
var Eg = "SelectItemAlignedPosition",
  Fl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, onPlaced: n, ...o } = e,
      s = lt(ht, r),
      a = ct(ht, r),
      [i, l] = d.useState(null),
      [u, f] = d.useState(null),
      p = ie(t, (R) => f(R)),
      h = Ur(r),
      v = d.useRef(!1),
      w = d.useRef(!0),
      {
        viewport: m,
        selectedItem: g,
        selectedItemText: S,
        focusSelectedItem: b,
      } = a,
      y = d.useCallback(() => {
        if (s.trigger && s.valueNode && i && u && m && g && S) {
          const R = s.trigger.getBoundingClientRect(),
            k = u.getBoundingClientRect(),
            M = s.valueNode.getBoundingClientRect(),
            W = S.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const te = W.left - k.left,
              O = M.left - te,
              me = R.left - O,
              xe = R.width + me,
              Te = Math.max(xe, k.width),
              ke = window.innerWidth - Le,
              Qe = Yt(O, [Le, Math.max(Le, ke - Te)]);
            (i.style.minWidth = xe + "px"), (i.style.left = Qe + "px");
          } else {
            const te = k.right - W.right,
              O = window.innerWidth - M.right - te,
              me = window.innerWidth - R.right - O,
              xe = R.width + me,
              Te = Math.max(xe, k.width),
              ke = window.innerWidth - Le,
              Qe = Yt(O, [Le, Math.max(Le, ke - Te)]);
            (i.style.minWidth = xe + "px"), (i.style.right = Qe + "px");
          }
          const L = h(),
            D = window.innerHeight - Le * 2,
            V = m.scrollHeight,
            _ = window.getComputedStyle(u),
            Y = parseInt(_.borderTopWidth, 10),
            F = parseInt(_.paddingTop, 10),
            H = parseInt(_.borderBottomWidth, 10),
            $ = parseInt(_.paddingBottom, 10),
            q = Y + F + V + $ + H,
            P = Math.min(g.offsetHeight * 5, q),
            j = window.getComputedStyle(m),
            Q = parseInt(j.paddingTop, 10),
            K = parseInt(j.paddingBottom, 10),
            X = R.top + R.height / 2 - Le,
            ne = D - X,
            Z = g.offsetHeight / 2,
            A = g.offsetTop + Z,
            B = Y + F + A,
            G = q - B;
          if (B <= X) {
            const te = L.length > 0 && g === L[L.length - 1].ref.current;
            i.style.bottom = "0px";
            const O = u.clientHeight - m.offsetTop - m.offsetHeight,
              me = Math.max(ne, Z + (te ? K : 0) + O + H),
              xe = B + me;
            i.style.height = xe + "px";
          } else {
            const te = L.length > 0 && g === L[0].ref.current;
            i.style.top = "0px";
            const me = Math.max(X, Y + m.offsetTop + (te ? Q : 0) + Z) + G;
            (i.style.height = me + "px"), (m.scrollTop = B - X + m.offsetTop);
          }
          (i.style.margin = `${Le}px 0`),
            (i.style.minHeight = P + "px"),
            (i.style.maxHeight = D + "px"),
            n == null || n(),
            requestAnimationFrame(() => (v.current = !0));
        }
      }, [h, s.trigger, s.valueNode, i, u, m, g, S, s.dir, n]);
    we(() => y(), [y]);
    const [E, C] = d.useState();
    we(() => {
      u && C(window.getComputedStyle(u).zIndex);
    }, [u]);
    const T = d.useCallback(
      (R) => {
        R && w.current === !0 && (y(), b == null || b(), (w.current = !1));
      },
      [y, b],
    );
    return c.jsx(Pg, {
      scope: r,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: T,
      children: c.jsx("div", {
        ref: l,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: E,
        },
        children: c.jsx(re.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Fl.displayName = Eg;
var Rg = "SelectPopperPosition",
  Vn = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        align: n = "start",
        collisionPadding: o = Le,
        ...s
      } = e,
      a = Yr(r);
    return c.jsx(pg, {
      ...a,
      ...s,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Vn.displayName = Rg;
var [Pg, Uo] = Lt(ht, {}),
  Hn = "SelectViewport",
  Wl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e,
      s = ct(Hn, r),
      a = Uo(Hn, r),
      i = ie(t, s.onViewportChange),
      l = d.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: n,
        }),
        c.jsx(Hr.Slot, {
          scope: r,
          children: c.jsx(re.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: J(o.onScroll, (u) => {
              const f = u.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: h } = a;
              if (h != null && h.current && p) {
                const v = Math.abs(l.current - f.scrollTop);
                if (v > 0) {
                  const w = window.innerHeight - Le * 2,
                    m = parseFloat(p.style.minHeight),
                    g = parseFloat(p.style.height),
                    S = Math.max(m, g);
                  if (S < w) {
                    const b = S + v,
                      y = Math.min(w, b),
                      E = b - y;
                    (p.style.height = y + "px"),
                      p.style.bottom === "0px" &&
                        ((f.scrollTop = E > 0 ? E : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              l.current = f.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Wl.displayName = Hn;
var zl = "SelectGroup",
  [Tg, Og] = Lt(zl),
  Bl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = Et();
    return c.jsx(Tg, {
      scope: r,
      id: o,
      children: c.jsx(re.div, {
        role: "group",
        "aria-labelledby": o,
        ...n,
        ref: t,
      }),
    });
  });
Bl.displayName = zl;
var Vl = "SelectLabel",
  Hl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = Og(Vl, r);
    return c.jsx(re.div, { id: o.id, ...n, ref: t });
  });
Hl.displayName = Vl;
var Er = "SelectItem",
  [Ng, Ul] = Lt(Er),
  Yl = d.forwardRef((e, t) => {
    const {
        __scopeSelect: r,
        value: n,
        disabled: o = !1,
        textValue: s,
        ...a
      } = e,
      i = lt(Er, r),
      l = ct(Er, r),
      u = i.value === n,
      [f, p] = d.useState(s ?? ""),
      [h, v] = d.useState(!1),
      w = ie(t, (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, n, o);
      }),
      m = Et(),
      g = d.useRef("touch"),
      S = () => {
        o || (i.onValueChange(n), i.onOpenChange(!1));
      };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return c.jsx(Ng, {
      scope: r,
      value: n,
      disabled: o,
      textId: m,
      isSelected: u,
      onItemTextChange: d.useCallback((b) => {
        p((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
      }, []),
      children: c.jsx(Hr.ItemSlot, {
        scope: r,
        value: n,
        disabled: o,
        textValue: f,
        children: c.jsx(re.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": h ? "" : void 0,
          "aria-selected": u && h,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...a,
          ref: w,
          onFocus: J(a.onFocus, () => v(!0)),
          onBlur: J(a.onBlur, () => v(!1)),
          onClick: J(a.onClick, () => {
            g.current !== "mouse" && S();
          }),
          onPointerUp: J(a.onPointerUp, () => {
            g.current === "mouse" && S();
          }),
          onPointerDown: J(a.onPointerDown, (b) => {
            g.current = b.pointerType;
          }),
          onPointerMove: J(a.onPointerMove, (b) => {
            var y;
            (g.current = b.pointerType),
              o
                ? (y = l.onItemLeave) == null || y.call(l)
                : g.current === "mouse" &&
                  b.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: J(a.onPointerLeave, (b) => {
            var y;
            b.currentTarget === document.activeElement &&
              ((y = l.onItemLeave) == null || y.call(l));
          }),
          onKeyDown: J(a.onKeyDown, (b) => {
            var E;
            (((E = l.searchRef) == null ? void 0 : E.current) !== "" &&
              b.key === " ") ||
              (gg.includes(b.key) && S(), b.key === " " && b.preventDefault());
          }),
        }),
      }),
    });
  });
Yl.displayName = Er;
var Ut = "SelectItemText",
  Xl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e,
      a = lt(Ut, r),
      i = ct(Ut, r),
      l = Ul(Ut, r),
      u = xg(Ut, r),
      [f, p] = d.useState(null),
      h = ie(
        t,
        (S) => p(S),
        l.onItemTextChange,
        (S) => {
          var b;
          return (b = i.itemTextRefCallback) == null
            ? void 0
            : b.call(i, S, l.value, l.disabled);
        },
      ),
      v = f == null ? void 0 : f.textContent,
      w = d.useMemo(
        () =>
          c.jsx(
            "option",
            { value: l.value, disabled: l.disabled, children: v },
            l.value,
          ),
        [l.disabled, l.value, v],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: g } = u;
    return (
      we(() => (m(w), () => g(w)), [m, g, w]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(re.span, { id: l.textId, ...s, ref: h }),
          l.isSelected && a.valueNode && !a.valueNodeHasChildren
            ? qt.createPortal(s.children, a.valueNode)
            : null,
        ],
      })
    );
  });
Xl.displayName = Ut;
var Kl = "SelectItemIndicator",
  Gl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Ul(Kl, r).isSelected
      ? c.jsx(re.span, { "aria-hidden": !0, ...n, ref: t })
      : null;
  });
Gl.displayName = Kl;
var Un = "SelectScrollUpButton",
  ql = d.forwardRef((e, t) => {
    const r = ct(Un, e.__scopeSelect),
      n = Uo(Un, e.__scopeSelect),
      [o, s] = d.useState(!1),
      a = ie(t, n.onScrollButtonChange);
    return (
      we(() => {
        if (r.viewport && r.isPositioned) {
          let i = function () {
            const u = l.scrollTop > 0;
            s(u);
          };
          const l = r.viewport;
          return (
            i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
          );
        }
      }, [r.viewport, r.isPositioned]),
      o
        ? c.jsx(Jl, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = r;
              i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
            },
          })
        : null
    );
  });
ql.displayName = Un;
var Yn = "SelectScrollDownButton",
  Zl = d.forwardRef((e, t) => {
    const r = ct(Yn, e.__scopeSelect),
      n = Uo(Yn, e.__scopeSelect),
      [o, s] = d.useState(!1),
      a = ie(t, n.onScrollButtonChange);
    return (
      we(() => {
        if (r.viewport && r.isPositioned) {
          let i = function () {
            const u = l.scrollHeight - l.clientHeight,
              f = Math.ceil(l.scrollTop) < u;
            s(f);
          };
          const l = r.viewport;
          return (
            i(),
            l.addEventListener("scroll", i),
            () => l.removeEventListener("scroll", i)
          );
        }
      }, [r.viewport, r.isPositioned]),
      o
        ? c.jsx(Jl, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: i, selectedItem: l } = r;
              i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
            },
          })
        : null
    );
  });
Zl.displayName = Yn;
var Jl = d.forwardRef((e, t) => {
    const { __scopeSelect: r, onAutoScroll: n, ...o } = e,
      s = ct("SelectScrollButton", r),
      a = d.useRef(null),
      i = Ur(r),
      l = d.useCallback(() => {
        a.current !== null &&
          (window.clearInterval(a.current), (a.current = null));
      }, []);
    return (
      d.useEffect(() => () => l(), [l]),
      we(() => {
        var f;
        const u = i().find((p) => p.ref.current === document.activeElement);
        (f = u == null ? void 0 : u.ref.current) == null ||
          f.scrollIntoView({ block: "nearest" });
      }, [i]),
      c.jsx(re.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: J(o.onPointerDown, () => {
          a.current === null && (a.current = window.setInterval(n, 50));
        }),
        onPointerMove: J(o.onPointerMove, () => {
          var u;
          (u = s.onItemLeave) == null || u.call(s),
            a.current === null && (a.current = window.setInterval(n, 50));
        }),
        onPointerLeave: J(o.onPointerLeave, () => {
          l();
        }),
      })
    );
  }),
  _g = "SelectSeparator",
  Ql = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return c.jsx(re.div, { "aria-hidden": !0, ...n, ref: t });
  });
Ql.displayName = _g;
var Xn = "SelectArrow",
  jg = d.forwardRef((e, t) => {
    const { __scopeSelect: r, ...n } = e,
      o = Yr(r),
      s = lt(Xn, r),
      a = ct(Xn, r);
    return s.open && a.position === "popper"
      ? c.jsx(mg, { ...o, ...n, ref: t })
      : null;
  });
jg.displayName = Xn;
function ec(e) {
  return e === "" || e === void 0;
}
var tc = d.forwardRef((e, t) => {
  const { value: r, ...n } = e,
    o = d.useRef(null),
    s = ie(t, o),
    a = ho(r);
  return (
    d.useEffect(() => {
      const i = o.current,
        l = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (a !== r && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(i, r), i.dispatchEvent(p);
      }
    }, [a, r]),
    c.jsx(Lr, {
      asChild: !0,
      children: c.jsx("select", { ...n, ref: s, defaultValue: r }),
    })
  );
});
tc.displayName = "BubbleSelect";
function rc(e) {
  const t = ye(e),
    r = d.useRef(""),
    n = d.useRef(0),
    o = d.useCallback(
      (a) => {
        const i = r.current + a;
        t(i),
          (function l(u) {
            (r.current = u),
              window.clearTimeout(n.current),
              u !== "" && (n.current = window.setTimeout(() => l(""), 1e3));
          })(i);
      },
      [t],
    ),
    s = d.useCallback(() => {
      (r.current = ""), window.clearTimeout(n.current);
    }, []);
  return d.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function nc(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = r ? e.indexOf(r) : -1;
  let a = Ag(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== r));
  const l = a.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return l !== r ? l : void 0;
}
function Ag(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Dg = Nl,
  oc = jl,
  Mg = Dl,
  kg = Ml,
  Ig = kl,
  sc = Il,
  Lg = Wl,
  $g = Bl,
  ac = Hl,
  ic = Yl,
  Fg = Xl,
  Wg = Gl,
  lc = ql,
  cc = Zl,
  uc = Ql;
const zg = Dg,
  Bg = $g,
  Vg = Mg,
  dc = d.forwardRef(({ className: e, children: t, ...r }, n) =>
    c.jsxs(oc, {
      ref: n,
      className: fe(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...r,
      children: [
        t,
        c.jsx(kg, {
          asChild: !0,
          children: c.jsx(Xm, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
dc.displayName = oc.displayName;
const Yo = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(lc, {
    ref: r,
    className: fe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Qm, {}),
  }),
);
Yo.displayName = lc.displayName;
const Xo = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(cc, {
    ref: r,
    className: fe("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Zm, {}),
  }),
);
Xo.displayName = cc.displayName;
const fc = d.forwardRef(
  ({ className: e, children: t, position: r = "popper", ...n }, o) =>
    c.jsx(Ig, {
      children: c.jsxs(sc, {
        ref: o,
        className: fe(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          r === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: r,
        ...n,
        children: [
          c.jsx(Yo, {}),
          c.jsx(Lg, {
            className: fe(
              "p-1",
              r === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          c.jsx(Xo, {}),
        ],
      }),
    }),
);
fc.displayName = sc.displayName;
const pc = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(ac, {
    ref: r,
    className: fe("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  }),
);
pc.displayName = ac.displayName;
const mc = d.forwardRef(({ className: e, children: t, ...r }, n) =>
  c.jsxs(ic, {
    ref: n,
    className: fe(
      "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...r,
    children: [
      c.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(Wg, { children: c.jsx(Gm, { className: "h-4 w-4" }) }),
      }),
      c.jsx(Fg, { children: t }),
    ],
  }),
);
mc.displayName = ic.displayName;
const hc = d.forwardRef(({ className: e, ...t }, r) =>
  c.jsx(uc, { ref: r, className: fe("bg-muted -mx-1 my-1 h-px", e), ...t }),
);
hc.displayName = uc.displayName;
const rr = ({ size: e = "md", className: t }) => {
  const r = { sm: "w-5 h-5", md: "w-8 h-8", lg: "w-12 h-12" };
  return c.jsx("div", {
    className: fe("relative", r[e], t),
    "aria-label": "Loading",
    children: [0, 1, 2].map((n) =>
      c.jsx(
        "svg",
        {
          className: "absolute inset-0 animate-spin",
          style: {
            animationDuration: "1s",
            animationDelay: `${n * 0.1}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          viewBox: "0 0 50 50",
          children: c.jsx("circle", {
            className: "text-primary",
            cx: "25",
            cy: "25",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "5",
            strokeLinecap: "round",
            strokeDasharray: "60 60",
            strokeDashoffset: "60",
          }),
        },
        n,
      ),
    ),
  });
};
rr.displayName = "Spinner";
const Hg = U.memo(
    ({
      xIndex: e,
      yIndex: t,
      col: r,
      lastTile: n,
      onTileClick: o,
      showAnnotations: s,
      winningSequence: a,
    }) => {
      const i =
          e === (n == null ? void 0 : n.x) && t === (n == null ? void 0 : n.y),
        l = a == null ? void 0 : a.some((u) => u.x === e && u.y === t);
      return r !== null
        ? c.jsxs(
            "div",
            {
              className: `relative flex items-center justify-center border border-black ${i ? "bg-amber-400" : ""} ${l ? "bg-amber-200" : ""} `,
              children: [
                c.jsx("div", {
                  className: Ug({ color: r === "black" ? "black" : "white" }),
                }),
                s &&
                  c.jsx("div", {
                    className: "absolute left-0 top-0 text-xs text-gray-700",
                    children: `x${e} y${t}`,
                  }),
              ],
            },
            `${e}-${t}`,
          )
        : c.jsx(
            "div",
            {
              className:
                "relative flex items-center justify-center border border-black",
              onClick: () => {
                console.debug("Tile clicked: x=", e, "y=", t), o(e, t);
              },
              children:
                s &&
                c.jsx("div", {
                  className: "absolute left-0 top-0 text-xs text-gray-700",
                  children: `x${e} y${t}`,
                }),
            },
            `${e}-${t}`,
          );
    },
    (e, t) => {
      var r, n, o, s, a, i;
      return (
        e.col === t.col &&
        ((r = e.lastTile) == null ? void 0 : r.x) ===
          ((n = t.lastTile) == null ? void 0 : n.x) &&
        ((o = e.lastTile) == null ? void 0 : o.y) ===
          ((s = t.lastTile) == null ? void 0 : s.y) &&
        e.xIndex === t.xIndex &&
        e.yIndex === t.yIndex &&
        e.showAnnotations === t.showAnnotations &&
        e.onTileClick === t.onTileClick &&
        ((a = e.winningSequence) == null ? void 0 : a.length) ===
          ((i = t.winningSequence) == null ? void 0 : i.length)
      );
    },
  ),
  Ug = Qs("rounded-full h-[90%] w-[90%]", {
    variants: { color: { black: "bg-black", white: "bg-white" } },
    defaultVariants: { color: "white" },
  }),
  gc = ({
    size: e,
    onTileClick: t,
    tiles: r,
    lastTile: n,
    style: o,
    winningSequence: s,
  }) => {
    const a = to(1488),
      [i, l] = U.useState(window.innerWidth / 2.2),
      [u, f] = U.useState(!1),
      p = U.useMemo(
        () =>
          r.map((m, g) =>
            m.map((S, b) =>
              c.jsx(
                Hg,
                {
                  xIndex: g,
                  yIndex: b,
                  col: S,
                  lastTile: n,
                  onTileClick: t,
                  showAnnotations: u,
                  winningSequence: s,
                },
                `${g}-${b}`,
              ),
            ),
          ),
        [r, n, t, u, s],
      ),
      h = i / e,
      v = a ? 100 : 80,
      w = a ? [300, 300] : [400, 400];
    return a
      ? c.jsx("div", {
          className: "flex flex-col items-center",
          children: c.jsx("div", {
            className: "rounded-lg bg-[#ba8c63] shadow-md",
            style: o,
            children: c.jsx("div", {
              className: "grid rounded-lg",
              style: {
                gridTemplateColumns: `repeat(${e}, ${v / e}vmin)`,
                gridTemplateRows: `repeat(${e}, ${v / e}vmin)`,
              },
              children: p,
            }),
          }),
        })
      : c.jsx(md, {
          width: i,
          height: i,
          onResize: (m, { size: g }) => {
            l(g.width);
          },
          resizeHandles: ["se"],
          minConstraints: [w[0], w[1]],
          children: c.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
              c.jsx("div", {
                className: "rounded-lg bg-[#ba8c63] shadow-md",
                style: { width: "100%", height: "100%" },
                children: c.jsx("div", {
                  className: "grid rounded-lg",
                  style: {
                    gridTemplateColumns: `repeat(${e}, ${h}px)`,
                    gridTemplateRows: `repeat(${e}, ${h}px)`,
                  },
                  children: p,
                }),
              }),
              c.jsx("div", {
                className: "flex flex-col items-center",
                children: c.jsx(ft, {
                  onClick: () => f(!u),
                  className:
                    "focus-visible:ring-ring relative mt-4 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border-[#3e3e3e] bg-[#3e3e3e] px-4 py-2 text-base font-medium text-[#bababa] shadow transition-colors hover:bg-[#4a4a4a] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
                  children: u && !a ? "Hide Annotations" : "Show Annotations",
                }),
              }),
            ],
          }),
        });
  },
  Yg = ({ gen: e, lastTile: t }) => {
    const r = U.useMemo(() => ro(e), [e]),
      n = r.length,
      o = (s, a) => {
        console.debug("Clicked tile at:", s, a);
      };
    return c.jsx("div", {
      className: "p-4",
      children: c.jsx(gc, {
        size: n,
        tiles: r,
        onTileClick: o,
        lastTile: t,
        winningSequence: null,
      }),
    });
  },
  Xg = ({
    games: e = [],
    onGameClick: t,
    noGamesText: r,
    onGameClickLoading: n = !1,
  }) =>
    c.jsx("div", {
      className:
        "mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4",
      children:
        e.length > 0
          ? e.map((o) => {
              var s;
              return c.jsxs(
                "div",
                {
                  onClick: () => t(o),
                  className: "relative cursor-pointer",
                  children: [
                    c.jsx(jt, {
                      className:
                        "border-[#2b2b2b] bg-[#2b2b2b] hover:bg-[#3e3e3e]",
                      children: c.jsxs(At, {
                        className: "p-4 sm:p-6",
                        children: [
                          c.jsx("div", {
                            className:
                              "aspect-w-16 aspect-h-9 mb-4 bg-[#3e3e3e]",
                          }),
                          c.jsx("h3", {
                            className:
                              "text-xl font-bold text-[#bababa] sm:text-2xl",
                            children:
                              ((s = o.opponent) == null
                                ? void 0
                                : s.userName) ?? o.gameId.slice(0, 6),
                          }),
                          c.jsx("p", {
                            className:
                              "truncate text-base text-[#999999] sm:text-lg",
                            children: o.gameId,
                          }),
                        ],
                      }),
                    }),
                    n &&
                      c.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center bg-black/50",
                        children: c.jsx(rr, {
                          size: "md",
                          className: "text-white",
                        }),
                      }),
                  ],
                },
                o.gameId,
              );
            })
          : c.jsx("span", { children: r }),
    }),
  qs = 13,
  Kg = 19,
  Ko = ({ isOpen: e, onClose: t, onCreate: r, isLoading: n }) => {
    const [o, s] = U.useState(qs);
    return c.jsx(el, {
      open: e,
      onOpenChange: t,
      children: c.jsxs(tl, {
        children: [
          c.jsx(_o, {
            className:
              "bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0",
          }),
          c.jsxs(jo, {
            className:
              "data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#2b2b2b] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
            children: [
              c.jsx(Ao, {
                className: "m-0 text-[17px] font-medium text-[#bababa]",
                children: "Create a game",
              }),
              c.jsx(Do, {
                className:
                  "mb-5 mt-2.5 text-[15px] leading-normal text-[#999999]",
                children: "Set up your game preferences here",
              }),
              c.jsx("div", {
                className: "grid gap-4 py-4",
                children: c.jsxs("div", {
                  className: "grid grid-cols-4 items-center gap-4",
                  children: [
                    c.jsx("label", {
                      htmlFor: "minutes",
                      className: "mb-26 text-right text-[#bababa]",
                      style: { marginBottom: 27 },
                      children: "Board size",
                    }),
                    c.jsxs("div", {
                      className: "col-span-3",
                      children: [
                        c.jsx(yo, {
                          id: "boardSize",
                          min: qs,
                          max: Kg,
                          step: 2,
                          value: [o],
                          onValueChange: (a) => s(a[0]),
                        }),
                        c.jsx("div", {
                          className: "mt-1 text-center text-[#bababa]",
                          children: o,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c.jsx(ft, {
                className: "w-full bg-[#629924] text-white hover:bg-[#58881f]",
                onClick: () => r(o),
                disabled: n,
                loading: n,
                children: "Create game",
              }),
              c.jsx(Mo, {
                asChild: !0,
                children: c.jsx("button", {
                  className:
                    "focus:shadow-violet7 absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-[#f0f0f0] hover:bg-[#f0f0f0] focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close",
                  children: c.jsx(rl, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
Ko.displayName = "GameCreator";
const Go = ({ children: e, timeControl: t, onCreateGame: r, isLoading: n }) => {
    const [o, s] = U.useState(!1),
      a = () => s(!0),
      i = () => s(!1),
      l = (u) => {
        r(u, t);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("div", { onClick: a, children: e }),
        c.jsx(Ko, { isOpen: o, onClose: i, onCreate: l, isLoading: n }),
      ],
    });
  },
  Sn = ({ onClick: e, text: t, loading: r }) =>
    c.jsx(ft, {
      onClick: e,
      loading: r,
      className:
        "h-12 w-full border-[#3e3e3e] bg-[#3e3e3e] text-base text-[#bababa] hover:bg-[#4a4a4a] sm:h-14 sm:text-xl",
      children: t,
    }),
  Gg = ({
    onCreateGame: e,
    onPlayWithFriendClick: t,
    onPlayWithAIClick: r,
    createGameText: n,
    playWithFriendText: o,
    playWithAIText: s,
    isLoadingCreateGame: a = !1,
    isLoadingPlayWithFriend: i = !1,
    isLoadingPlayWithAI: l = !1,
  }) =>
    c.jsxs("div", {
      className: "space-y-4 sm:space-y-6",
      children: [
        c.jsx(Go, {
          onCreateGame: e,
          isLoading: a,
          children: c.jsx(Sn, { text: n, loading: a }),
        }),
        c.jsx(Sn, { onClick: t, text: o, loading: i }),
        c.jsx(Sn, { onClick: r, text: s, loading: l }),
      ],
    }),
  qg = ({ gameType: e, players: t }) => {
    const r = to(1488);
    return c.jsxs("div", {
      className: "max-w-xs rounded-lg bg-[#2b2b2b] p-3 text-white",
      style: { maxWidth: r ? "100%" : "350px", minWidth: r ? "100%" : "350px" },
      children: [
        c.jsxs("div", {
          className: "mb-2 flex items-center",
          children: [
            c.jsxs("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "mr-2 h-5 w-5 text-[#b0b0b0]",
              children: [
                c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                c.jsx("path", { d: "M4.93 4.93l4.24 4.24" }),
              ],
            }),
            c.jsx("span", { className: "text-sm text-[#b0b0b0]", children: e }),
          ],
        }),
        c.jsx("div", {
          className: "space-y-2",
          children: t.map((n, o) =>
            c.jsxs(
              "div",
              {
                className: "flex items-center",
                children: [
                  c.jsx("div", {
                    className: `mr-2 h-2 w-2 rounded-full ${n.isCurrentPlayer ? "bg-[#7cb342]" : "border border-[#b0b0b0]"}`,
                  }),
                  c.jsx("span", {
                    className: "mr-1 font-medium text-[#ff9800]",
                    children: n.title,
                  }),
                  c.jsx("span", { className: "mr-1", children: n.name }),
                  n.isCurrentPlayer &&
                    c.jsx("span", { className: "mr-1 text-red-500" }),
                  c.jsxs("span", {
                    className: "text-[#b0b0b0]",
                    children: ["(", n.rating, ")"],
                  }),
                ],
              },
              o,
            ),
          ),
        }),
      ],
    });
  },
  vc = ({ gameTypes: e, onCreateGame: t, isLoading: r }) =>
    c.jsx("div", {
      className: "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6",
      children: e.map((n, o) =>
        c.jsx(
          Go,
          {
            timeControl: n.timeControl,
            onCreateGame: t,
            isLoading: r,
            children: c.jsx(jt, {
              className:
                "cursor-pointer border-[#2b2b2b] bg-[#2b2b2b] transition-colors hover:bg-[#3e3e3e]",
              children: c.jsxs(At, {
                className: "p-4 text-center sm:p-6",
                children: [
                  c.jsx("h3", {
                    className: "text-xl font-bold text-[#bababa] sm:text-3xl",
                    children: n.timeLabel,
                  }),
                  c.jsx("p", {
                    className: "truncate text-sm text-[#999999] sm:text-xl",
                    children: n.type,
                  }),
                  c.jsxs("p", {
                    className: "text-xs text-[#999999] sm:text-lg",
                    children: ["Board size: ", n.boardSize, " "],
                  }),
                ],
              }),
            }),
          },
          o,
        ),
      ),
    });
vc.displayName = "TimeControls";
const bc = ({ title: e, items: t, onItemClick: r, noItemsText: n }) =>
  c.jsx(jt, {
    className: "mb-6 border-[#2b2b2b] bg-[#2b2b2b]",
    children: c.jsxs(At, {
      className: "p-4 sm:p-6",
      children: [
        c.jsx("h2", {
          className: "mb-4 text-xl font-bold text-[#bababa] sm:text-2xl",
          children: e,
        }),
        c.jsx("ul", {
          className: "max-h-64 space-y-4 overflow-y-auto text-[#bababa]",
          children:
            t && (t == null ? void 0 : t.length) > 0
              ? t == null
                ? void 0
                : t.map((o, s) =>
                    c.jsxs(
                      "li",
                      {
                        className:
                          "flex cursor-pointer items-center rounded p-2 transition-colors hover:bg-[#3b3b3b]",
                        onClick: () => (r == null ? void 0 : r(o)),
                        children: [
                          o.icon,
                          c.jsx("span", {
                            className: "ml-2 text-base sm:text-xl",
                            children: o.title,
                          }),
                        ],
                      },
                      o.title + s,
                    ),
                  )
              : c.jsx("span", { children: n }),
        }),
      ],
    }),
  });
bc.displayName = "SectionList";
const Zg = ({ playersOnlineText: e, gamesInPlayText: t }) =>
    c.jsxs("div", {
      className: "mt-6 text-center",
      children: [
        c.jsx("p", { className: "text-base sm:text-xl", children: e }),
        c.jsx("p", { className: "text-base sm:text-xl", children: t }),
      ],
    }),
  Jg = ({
    moves: e,
    clock: t,
    players: r,
    onUndo: n,
    onSkip: o,
    onFlag: s,
    onReset: a,
    onRematch: i,
  }) => {
    var l, u;
    return c.jsxs("div", {
      className: "w-[300px] rounded-lg bg-[#2e2a24] p-2 font-sans text-white",
      children: [
        c.jsxs("div", {
          className: "mb-2 flex items-center justify-between",
          children: [
            (t == null ? void 0 : t.black) &&
              c.jsx("div", {
                className: "font-mono text-5xl",
                children: Gt(t.black > 0 ? t.black : 0),
              }),
            (t == null ? void 0 : t.black) &&
              c.jsx("button", {
                className: "rounded bg-[#3d3733] p-1 text-[#b0b0b0]",
                children: c.jsx(_p, { className: "h-6 w-6" }),
              }),
          ],
        }),
        c.jsxs("div", {
          className: "mb-2 rounded bg-[#363330] p-2",
          children: [
            c.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                c.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    c.jsx("div", {
                      className: "mr-2 h-2 w-2 rounded-full",
                      style: { backgroundColor: "black" },
                    }),
                    c.jsx("span", {
                      className: "text-sm",
                      children: (l = r.black) == null ? void 0 : l.userName,
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    c.jsx("div", {
                      className: "mr-0.5 h-3 w-1 rounded-sm bg-[#7cb342]",
                    }),
                    c.jsx("div", {
                      className: "mr-0.5 h-4 w-1 rounded-sm bg-[#7cb342]",
                    }),
                    c.jsx("div", {
                      className: "mr-0.5 h-5 w-1 rounded-sm bg-[#7cb342]",
                    }),
                    c.jsx("div", {
                      className: "mr-2 h-6 w-1 rounded-sm bg-[#7cb342]",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "mt-2 flex justify-between",
              children: [
                c.jsx(Dp, {
                  className: "h-5 w-5 text-[#b0b0b0]",
                  onClick: () => o("back"),
                }),
                c.jsx(Mp, {
                  className: "h-5 w-5 text-[#b0b0b0]",
                  onClick: () => o("back"),
                }),
                c.jsx(kp, {
                  className: "h-5 w-5 text-[#b0b0b0]",
                  onClick: () => o("forward"),
                }),
                c.jsx(Ap, {
                  className: "h-5 w-5 text-[#b0b0b0]",
                  onClick: () => o("forward"),
                }),
                c.jsx(yi, {
                  className: "h-5 w-5 text-[#b0b0b0]",
                  onClick: () => i(),
                }),
                c.jsx(jp, { className: "h-5 w-5 text-[#b0b0b0]" }),
              ],
            }),
          ],
        }),
        e.length === 0
          ? c.jsxs("div", {
              className: "mb-2 flex items-center rounded bg-[#363330] p-2",
              children: [
                c.jsx("div", {
                  className:
                    "mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#b0b0b0]",
                  children: c.jsx("span", {
                    className: "text-xl font-bold text-[#363330]",
                    children: "i",
                  }),
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("div", {
                      className: "text-sm",
                      children: !r.black && !r.white && "Game will starts soon",
                    }),
                    c.jsx("div", {
                      className: "text-lg font-bold",
                      children:
                        !r.black && !r.white && "Wait for your opponent",
                    }),
                  ],
                }),
              ],
            })
          : c.jsx("div", {
              className:
                "mb-2 max-h-[100px] overflow-y-auto rounded bg-[#363330] p-2",
              children: c.jsx("div", {
                className: "grid grid-cols-3 gap-2 text-sm",
                children: e.map((f, p) =>
                  c.jsxs(
                    U.Fragment,
                    {
                      children: [
                        c.jsxs("div", {
                          className: "text-[#b0b0b0]",
                          children: [p + 1, "."],
                        }),
                        c.jsx("div", {
                          className: p % 2 === 0 ? "font-bold" : "",
                          children: f,
                        }),
                        c.jsx("div", {
                          className: p % 2 === 0 ? "text-black" : "text-white",
                          children: "●",
                        }),
                      ],
                    },
                    p,
                  ),
                ),
              }),
            }),
        c.jsxs("div", {
          className: "mb-2 flex justify-between",
          children: [
            c.jsx("button", {
              className: "rounded bg-[#363330] p-2",
              onClick: a,
              children: c.jsx(So, { className: "h-5 w-5 text-[#b0b0b0]" }),
            }),
            c.jsx("button", {
              className: "rounded bg-[#363330] p-2",
              onClick: n,
              children: c.jsx(xi, { className: "h-5 w-5 text-[#b0b0b0]" }),
            }),
            c.jsx("button", {
              className: "rounded bg-[#363330] p-2",
              onClick: s,
              children: c.jsx(bi, { className: "h-5 w-5 text-[#b0b0b0]" }),
            }),
          ],
        }),
        c.jsx("div", {
          className: "mb-2 rounded bg-[#363330] p-2",
          children: c.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              c.jsxs("div", {
                className: "flex items-center",
                children: [
                  c.jsx("div", {
                    className: "mr-2 h-2 w-2 rounded-full",
                    style: { backgroundColor: "white" },
                  }),
                  c.jsx("span", {
                    className: "text-sm",
                    children: (u = r.white) == null ? void 0 : u.userName,
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center",
                children: [
                  c.jsx("div", {
                    className: "mr-0.5 h-3 w-1 rounded-sm bg-[#7cb342]",
                  }),
                  c.jsx("div", {
                    className: "mr-0.5 h-4 w-1 rounded-sm bg-[#7cb342]",
                  }),
                  c.jsx("div", {
                    className: "mr-0.5 h-5 w-1 rounded-sm bg-[#7cb342]",
                  }),
                  c.jsx("div", {
                    className: "mr-2 h-6 w-1 rounded-sm bg-[#7cb342]",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.length === 0
          ? c.jsx("div", {
              className: "rounded bg-[#7cb342] py-2 text-center text-sm",
              children: "17 seconds to play the first move",
            })
          : c.jsx("button", {
              className: "w-full rounded bg-[#7cb342] py-2 text-center text-sm",
              onClick: () => alert("Add move clicked"),
              children: "Add move",
            }),
        (t == null ? void 0 : t.white) &&
          c.jsx("div", {
            className: "mt-2 text-center font-mono text-5xl",
            children: Gt(t.white > 0 ? t.white : 0),
          }),
      ],
    });
  },
  Gt = (e) =>
    `${Math.floor(e / 60)
      .toString()
      .padStart(2, "0")}:${Math.floor(e % 60)
      .toString()
      .padStart(2, "0")}`,
  Qg = ({
    moves: e,
    player: t,
    onUndo: r,
    onSkip: n,
    onFlag: o,
    onReset: s,
    onRematch: a,
    timeLeft: i,
    opponentView: l,
  }) =>
    l
      ? c.jsx("div", {
          className:
            "w-full max-w-md rounded-lg bg-[#2e2a24] p-2 font-mono text-white",
          children: c.jsxs("div", {
            className: "mb-2 flex items-center justify-between",
            children: [
              c.jsxs("div", {
                className: "flex items-center",
                children: [
                  c.jsx("span", {
                    className: "mr-2 h-3 w-3 rounded-full",
                    style: { backgroundColor: t == null ? void 0 : t.color },
                  }),
                  c.jsx("span", {
                    className: "font-bold text-[#ffa600]",
                    children: t == null ? void 0 : t.userName,
                  }),
                ],
              }),
              i &&
                c.jsx("div", {
                  className: "bg-[#3d3733] px-2 py-1 text-4xl font-bold",
                  children: Gt(i > 0 ? i : 0),
                }),
            ],
          }),
        })
      : c.jsxs("div", {
          className:
            "w-full max-w-md rounded-lg bg-[#2e2a24] p-2 font-mono text-white",
          children: [
            c.jsxs("div", {
              className: "mb-2 flex items-center justify-between",
              children: [
                c.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    c.jsx("span", {
                      className: "mr-2 h-3 w-3 rounded-full",
                      style: { backgroundColor: t == null ? void 0 : t.color },
                    }),
                    c.jsx("span", {
                      className: "font-bold text-[#ffa600]",
                      children: t == null ? void 0 : t.userName,
                    }),
                  ],
                }),
                i &&
                  c.jsx("div", {
                    className: "bg-[#3d3733] px-2 py-1 text-4xl font-bold",
                    children: Gt(i > 0 ? i : 0),
                  }),
              ],
            }),
            c.jsxs("div", {
              className: "mb-2 flex items-center rounded bg-[#363330] text-sm",
              children: [
                c.jsx(Op, {
                  className: "text-[#b0b0b0]",
                  onClick: () => n("back"),
                }),
                c.jsx("div", {
                  className:
                    "flex-1 overflow-x-auto whitespace-nowrap px-2 py-1",
                  children:
                    e.length > 0
                      ? e.map((u, f) =>
                          c.jsx(
                            "span",
                            { className: "mr-2 text-[#ffa600]", children: u },
                            f,
                          ),
                        )
                      : c.jsx("span", {
                          children:
                            !t &&
                            "Game will starts soon. Wait for your opponent",
                        }),
                }),
                c.jsx(Np, {
                  className: "text-[#b0b0b0]",
                  onClick: () => n("forward"),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "mb-2 flex justify-between",
              children: [
                c.jsx("button", {
                  className: "rounded bg-[#363330] p-2",
                  onClick: s,
                  children: c.jsx(So, { className: "h-5 w-5 text-[#b0b0b0]" }),
                }),
                c.jsx("button", {
                  className: "rounded bg-[#363330] p-2",
                  onClick: r,
                  children: c.jsx(xi, { className: "h-5 w-5 text-[#b0b0b0]" }),
                }),
                c.jsx("button", {
                  className: "rounded bg-[#363330] p-2",
                  onClick: o,
                  children: c.jsx(bi, { className: "h-5 w-5 text-[#b0b0b0]" }),
                }),
                c.jsx("button", {
                  className: "rounded bg-[#363330] p-2",
                  onClick: a,
                  children: c.jsx(yi, { className: "h-5 w-5 text-[#b0b0b0]" }),
                }),
              ],
            }),
            e.length < 0 &&
              c.jsx("div", {
                className:
                  "mt-2 w-full rounded bg-[#7cb342] py-2 text-center text-sm",
                children: "Waiting for first move...",
              }),
          ],
        });
exports.AlertDialog = Ea;
exports.Board = gc;
exports.BoardGame = Sa;
exports.Button = ft;
exports.Card = jt;
exports.CardContent = At;
exports.CardDescription = ao;
exports.CardFooter = io;
exports.CardHeader = oo;
exports.CardTitle = so;
exports.Dialog = th;
exports.DialogClose = nh;
exports.DialogContent = ol;
exports.DialogDescription = ll;
exports.DialogFooter = al;
exports.DialogHeader = sl;
exports.DialogOverlay = ko;
exports.DialogPortal = nl;
exports.DialogTitle = il;
exports.DialogTrigger = rh;
exports.FeaturedBoxes = Xg;
exports.GameCreator = Ko;
exports.GameCreatorButton = Go;
exports.GameOptionsButtons = Gg;
exports.GamePlayersInfo = qg;
exports.GamePreview = Yg;
exports.GameTime = Jg;
exports.GameTimeMobile = Qg;
exports.Input = Ra;
exports.LoadingOverlay = rf;
exports.OnlinePlayersInfo = Zg;
exports.ScrollArea = Wa;
exports.ScrollBar = mo;
exports.SectionList = bc;
exports.Select = zg;
exports.SelectContent = fc;
exports.SelectGroup = Bg;
exports.SelectItem = mc;
exports.SelectLabel = pc;
exports.SelectScrollDownButton = Xo;
exports.SelectScrollUpButton = Yo;
exports.SelectSeparator = hc;
exports.SelectTrigger = dc;
exports.SelectValue = Vg;
exports.Slider = yo;
exports.Spinner = rr;
exports.Switch = Pi;
exports.TimeControls = vc;
exports.ToasterProvider = Lp;
exports.cn = fe;
exports.genParser = ro;
exports.secondsToString = Gt;
exports.toaster = Ip;
exports.useMobileDesign = to;
exports.useTiles = Gd;
