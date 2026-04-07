const ap = () => Promise.resolve().then(() => ep), { Fragment: oa, jsx: l, jsxs: w } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Wo(e) {
  const a = e?.props?._fgT, t = typeof a == "function" || typeof a == "string" || typeof a == "object" && a !== null && "$$typeof" in a;
  return globalThis.__GLOBALS__.React.isValidElement(e) && t;
}
function Bt(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function Fo(e) {
  const { _fgT: a, _fgS: t, _fgB: n, _fgD: r, ...f } = e.props;
  return globalThis.__GLOBALS__.React.createElement(a, {
    ...f,
    key: e.key
  }, f.children);
}
function Nn(e) {
  return Wo(e) ? Fo(e) : Bt(e) ? e.props.children : e;
}
const zt = globalThis.__GLOBALS__.React.Children, Zo = {
  map(e, a, t) {
    return zt.map(e, (n, r) => {
      const f = Nn(n);
      return Bt(n) ? null : a.call(t, f, r);
    });
  },
  forEach(e, a, t) {
    zt.forEach(e, (n, r) => {
      if (Bt(n))
        return;
      const f = Nn(n);
      a.call(t, f, r);
    });
  },
  count(e) {
    let a = 0;
    return zt.forEach(e, (t) => {
      Bt(t) || a++;
    }), a;
  },
  toArray(e) {
    const a = [];
    return zt.forEach(e, (t) => {
      Bt(t) || a.push(Nn(t));
    }), a;
  },
  only(e) {
    const a = zt.only(e);
    return Nn(a);
  }
}, Cr = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Jc(e) {
  if (e == null || typeof e != "object") return e;
  const a = Object.keys(e);
  let t = !1;
  for (let r = 0; r < Cr.length; r++)
    if (Cr[r] in e) {
      t = !0;
      break;
    }
  if (!t) return e;
  const n = {};
  for (let r = 0; r < a.length; r++) {
    const f = a[r];
    Cr.indexOf(f) === -1 && (n[f] = e[f]);
  }
  return n;
}
const Li = globalThis.__GLOBALS__.React.cloneElement, Ho = (e, ...a) => {
  if (Wo(e)) {
    const t = Fo(e), n = a[0];
    return n != null && typeof n == "object" && (a = [
      Jc(n),
      ...a.slice(1)
    ]), Li(t, ...a);
  }
  return Li(e, ...a);
}, Ze = {
  ...globalThis.__GLOBALS__.React,
  Children: Zo,
  cloneElement: Ho
}, { Component: lf, createContext: je, createElement: x, createFactory: Gc, createRef: da, forwardRef: Ka, Fragment: ha, isValidElement: _c, lazy: Wc, memo: fn, Profiler: Fc, PureComponent: Zc, startTransition: Zt, StrictMode: Hc, Suspense: Vo, use: Vc, useCallback: ze, useContext: Z, useDebugValue: $c, useDeferredValue: Kc, useEffect: fe, useId: Xc, useImperativeHandle: qc, useInsertionEffect: ed, useLayoutEffect: on, useMemo: Pe, useReducer: ad, useRef: we, useState: D, useSyncExternalStore: td, useTransition: nd, version: rd, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fd } = globalThis.__GLOBALS__.React, id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Zo,
  Component: lf,
  Fragment: ha,
  Profiler: Fc,
  PureComponent: Zc,
  StrictMode: Hc,
  Suspense: Vo,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: fd,
  cloneElement: Ho,
  createContext: je,
  createElement: x,
  createFactory: Gc,
  createRef: da,
  default: Ze,
  forwardRef: Ka,
  isValidElement: _c,
  lazy: Wc,
  memo: fn,
  startTransition: Zt,
  use: Vc,
  useCallback: ze,
  useContext: Z,
  useDebugValue: $c,
  useDeferredValue: Kc,
  useEffect: fe,
  useId: Xc,
  useImperativeHandle: qc,
  useInsertionEffect: ed,
  useLayoutEffect: on,
  useMemo: Pe,
  useReducer: ad,
  useRef: we,
  useState: D,
  useSyncExternalStore: td,
  useTransition: nd,
  version: rd
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var $o = (e) => {
  throw TypeError(e);
}, od = (e, a, t) => a.has(e) || $o("Cannot " + t), jr = (e, a, t) => (od(e, a, "read from private field"), t ? t.call(e) : a.get(e)), ld = (e, a, t) => a.has(e) ? $o("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(e) : a.set(e, t), Ci = "popstate";
function sd(e = {}) {
  function a(n, r) {
    let { pathname: f, search: i, hash: o } = n.location;
    return Ht(
      "",
      { pathname: f, search: i, hash: o },
      // state defaults to `null` because `window.history.state` does
      r.state && r.state.usr || null,
      r.state && r.state.key || "default"
    );
  }
  function t(n, r) {
    return typeof r == "string" ? r : ba(r);
  }
  return dd(
    a,
    t,
    null,
    e
  );
}
function ie(e, a) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(a);
}
function Te(e, a) {
  if (!e) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function cd() {
  return Math.random().toString(36).substring(2, 10);
}
function ji(e, a) {
  return {
    usr: e.state,
    key: e.key,
    idx: a
  };
}
function Ht(e, a, t = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? Ra(a) : a,
    state: t,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || n || cd()
  };
}
function ba({
  pathname: e = "/",
  search: a = "",
  hash: t = ""
}) {
  return a && a !== "?" && (e += a.charAt(0) === "?" ? a : "?" + a), t && t !== "#" && (e += t.charAt(0) === "#" ? t : "#" + t), e;
}
function Ra(e) {
  let a = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && (a.hash = e.substring(t), e = e.substring(0, t));
    let n = e.indexOf("?");
    n >= 0 && (a.search = e.substring(n), e = e.substring(0, n)), e && (a.pathname = e);
  }
  return a;
}
function dd(e, a, t, n = {}) {
  let { window: r = document.defaultView, v5Compat: f = !1 } = n, i = r.history, o = "POP", s = null, c = d();
  c == null && (c = 0, i.replaceState({ ...i.state, idx: c }, ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function u() {
    o = "POP";
    let M = d(), L = M == null ? null : M - c;
    c = M, s && s({ action: o, location: p.location, delta: L });
  }
  function m(M, L) {
    o = "PUSH";
    let C = Ht(p.location, M, L);
    c = d() + 1;
    let I = ji(C, c), R = p.createHref(C);
    try {
      i.pushState(I, "", R);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError")
        throw z;
      r.location.assign(R);
    }
    f && s && s({ action: o, location: p.location, delta: 1 });
  }
  function g(M, L) {
    o = "REPLACE";
    let C = Ht(p.location, M, L);
    c = d();
    let I = ji(C, c), R = p.createHref(C);
    i.replaceState(I, "", R), f && s && s({ action: o, location: p.location, delta: 0 });
  }
  function b(M) {
    return Ko(M);
  }
  let p = {
    get action() {
      return o;
    },
    get location() {
      return e(r, i);
    },
    listen(M) {
      if (s)
        throw new Error("A history only accepts one active listener");
      return r.addEventListener(Ci, u), s = M, () => {
        r.removeEventListener(Ci, u), s = null;
      };
    },
    createHref(M) {
      return a(r, M);
    },
    createURL: b,
    encodeLocation(M) {
      let L = b(M);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: m,
    replace: g,
    go(M) {
      return i.go(M);
    }
  };
  return p;
}
function Ko(e, a = !1) {
  let t = "http://localhost";
  typeof window < "u" && (t = window.location.origin !== "null" ? window.location.origin : window.location.href), ie(t, "No window.location.(origin|href) available to create URL");
  let n = typeof e == "string" ? e : ba(e);
  return n = n.replace(/ $/, "%20"), !a && n.startsWith("//") && (n = t + n), new URL(n, t);
}
var Jt, xi = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (ld(this, Jt, /* @__PURE__ */ new Map()), e)
      for (let [a, t] of e)
        this.set(a, t);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (jr(this, Jt).has(e))
      return jr(this, Jt).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, a) {
    jr(this, Jt).set(e, a);
  }
};
Jt = /* @__PURE__ */ new WeakMap();
var ud = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function md(e) {
  return ud.has(
    e
  );
}
var gd = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function hd(e) {
  return gd.has(
    e
  );
}
function bd(e) {
  return e.index === !0;
}
function Vt(e, a, t = [], n = {}, r = !1) {
  return e.map((f, i) => {
    let o = [...t, String(i)], s = typeof f.id == "string" ? f.id : o.join("-");
    if (ie(
      f.index !== !0 || !f.children,
      "Cannot specify children on an index route"
    ), ie(
      r || !n[s],
      `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`
    ), bd(f)) {
      let c = {
        ...f,
        id: s
      };
      return n[s] = ki(
        c,
        a(c)
      ), c;
    } else {
      let c = {
        ...f,
        id: s,
        children: void 0
      };
      return n[s] = ki(
        c,
        a(c)
      ), f.children && (c.children = Vt(
        f.children,
        a,
        o,
        n,
        r
      )), c;
    }
  });
}
function ki(e, a) {
  return Object.assign(e, {
    ...a,
    ...typeof a.lazy == "object" && a.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...a.lazy
      }
    } : {}
  });
}
function za(e, a, t = "/") {
  return Gt(e, a, t, !1);
}
function Gt(e, a, t, n) {
  let r = typeof a == "string" ? Ra(a) : a, f = aa(r.pathname || "/", t);
  if (f == null)
    return null;
  let i = Xo(e);
  pd(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) {
    let c = Sd(f);
    o = Nd(
      i[s],
      c,
      n
    );
  }
  return o;
}
function wd(e, a) {
  let { route: t, pathname: n, params: r } = e;
  return {
    id: t.id,
    pathname: n,
    params: r,
    data: a[t.id],
    loaderData: a[t.id],
    handle: t.handle
  };
}
function Xo(e, a = [], t = [], n = "", r = !1) {
  let f = (i, o, s = r, c) => {
    let d = {
      relativePath: c === void 0 ? i.path || "" : c,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i
    };
    if (d.relativePath.startsWith("/")) {
      if (!d.relativePath.startsWith(n) && s)
        return;
      ie(
        d.relativePath.startsWith(n),
        `Absolute route path "${d.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), d.relativePath = d.relativePath.slice(n.length);
    }
    let u = ma([n, d.relativePath]), m = t.concat(d);
    i.children && i.children.length > 0 && (ie(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
    ), Xo(
      i.children,
      a,
      m,
      u,
      s
    )), !(i.path == null && !i.index) && a.push({
      path: u,
      score: xd(u, i.index),
      routesMeta: m
    });
  };
  return e.forEach((i, o) => {
    if (i.path === "" || !i.path?.includes("?"))
      f(i, o);
    else
      for (let s of qo(i.path))
        f(i, o, !0, s);
  }), a;
}
function qo(e) {
  let a = e.split("/");
  if (a.length === 0) return [];
  let [t, ...n] = a, r = t.endsWith("?"), f = t.replace(/\?$/, "");
  if (n.length === 0)
    return r ? [f, ""] : [f];
  let i = qo(n.join("/")), o = [];
  return o.push(
    ...i.map(
      (s) => s === "" ? f : [f, s].join("/")
    )
  ), r && o.push(...i), o.map(
    (s) => e.startsWith("/") && s === "" ? "/" : s
  );
}
function pd(e) {
  e.sort(
    (a, t) => a.score !== t.score ? t.score - a.score : kd(
      a.routesMeta.map((n) => n.childrenIndex),
      t.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var yd = /^:[\w-]+$/, vd = 3, Md = 2, Ld = 1, Cd = 10, jd = -2, Ni = (e) => e === "*";
function xd(e, a) {
  let t = e.split("/"), n = t.length;
  return t.some(Ni) && (n += jd), a && (n += Md), t.filter((r) => !Ni(r)).reduce(
    (r, f) => r + (yd.test(f) ? vd : f === "" ? Ld : Cd),
    n
  );
}
function kd(e, a) {
  return e.length === a.length && e.slice(0, -1).every((n, r) => n === a[r]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Nd(e, a, t = !1) {
  let { routesMeta: n } = e, r = {}, f = "/", i = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o], c = o === n.length - 1, d = f === "/" ? a : a.slice(f.length) || "/", u = Fn(
      { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d
    ), m = s.route;
    if (!u && c && t && !n[n.length - 1].route.index && (u = Fn(
      {
        path: s.relativePath,
        caseSensitive: s.caseSensitive,
        end: !1
      },
      d
    )), !u)
      return null;
    Object.assign(r, u.params), i.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: ma([f, u.pathname]),
      pathnameBase: Td(
        ma([f, u.pathnameBase])
      ),
      route: m
    }), u.pathnameBase !== "/" && (f = ma([f, u.pathnameBase]));
  }
  return i;
}
function Fn(e, a) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [t, n] = Id(
    e.path,
    e.caseSensitive,
    e.end
  ), r = a.match(t);
  if (!r) return null;
  let f = r[0], i = f.replace(/(.)\/+$/, "$1"), o = r.slice(1);
  return {
    params: n.reduce(
      (c, { paramName: d, isOptional: u }, m) => {
        if (d === "*") {
          let b = o[m] || "";
          i = f.slice(0, f.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const g = o[m];
        return u && !g ? c[d] = void 0 : c[d] = (g || "").replace(/%2F/g, "/"), c;
      },
      {}
    ),
    pathname: f,
    pathnameBase: i,
    pattern: e
  };
}
function Id(e, a = !1, t = !0) {
  Te(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (i, o, s) => (n.push({ paramName: o, isOptional: s != null }), s ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (n.push({ paramName: "*" }), r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : t ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, a ? void 0 : "i"), n];
}
function Sd(e) {
  try {
    return e.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Te(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), e;
  }
}
function aa(e, a) {
  if (a === "/") return e;
  if (!e.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let t = a.endsWith("/") ? a.length - 1 : a.length, n = e.charAt(t);
  return n && n !== "/" ? null : e.slice(t) || "/";
}
function Dd({
  basename: e,
  pathname: a
}) {
  return a === "/" ? e : ma([e, a]);
}
var el = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, sf = (e) => el.test(e);
function zd(e, a = "/") {
  let {
    pathname: t,
    search: n = "",
    hash: r = ""
  } = typeof e == "string" ? Ra(e) : e, f;
  return t ? (t = t.replace(/\/\/+/g, "/"), t.startsWith("/") ? f = Ii(t.substring(1), "/") : f = Ii(t, a)) : f = a, {
    pathname: f,
    search: Ed(n),
    hash: Ad(r)
  };
}
function Ii(e, a) {
  let t = a.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((r) => {
    r === ".." ? t.length > 1 && t.pop() : r !== "." && t.push(r);
  }), t.length > 1 ? t.join("/") : "/";
}
function xr(e, a, t, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function al(e) {
  return e.filter(
    (a, t) => t === 0 || a.route.path && a.route.path.length > 0
  );
}
function cf(e) {
  let a = al(e);
  return a.map(
    (t, n) => n === a.length - 1 ? t.pathname : t.pathnameBase
  );
}
function df(e, a, t, n = !1) {
  let r;
  typeof e == "string" ? r = Ra(e) : (r = { ...e }, ie(
    !r.pathname || !r.pathname.includes("?"),
    xr("?", "pathname", "search", r)
  ), ie(
    !r.pathname || !r.pathname.includes("#"),
    xr("#", "pathname", "hash", r)
  ), ie(
    !r.search || !r.search.includes("#"),
    xr("#", "search", "hash", r)
  ));
  let f = e === "" || r.pathname === "", i = f ? "/" : r.pathname, o;
  if (i == null)
    o = t;
  else {
    let u = a.length - 1;
    if (!n && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), u -= 1;
      r.pathname = m.join("/");
    }
    o = u >= 0 ? a[u] : "/";
  }
  let s = zd(r, o), c = i && i !== "/" && i.endsWith("/"), d = (f || i === ".") && t.endsWith("/");
  return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s;
}
var ma = (e) => e.join("/").replace(/\/\/+/g, "/"), Td = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Ed = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ad = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ln = class {
  constructor(e, a, t, n = !1) {
    this.status = e, this.statusText = a || "", this.internal = n, t instanceof Error ? (this.data = t.toString(), this.error = t) : this.data = t;
  }
};
function $t(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function sn(e) {
  return e.map((a) => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var tl = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function nl(e, a) {
  let t = e;
  if (typeof t != "string" || !el.test(t))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: t
    };
  let n = t, r = !1;
  if (tl)
    try {
      let f = new URL(window.location.href), i = t.startsWith("//") ? new URL(f.protocol + t) : new URL(t), o = aa(i.pathname, a);
      i.origin === f.origin && o != null ? t = o + i.search + i.hash : r = !0;
    } catch {
      Te(
        !1,
        `<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: n,
    isExternal: r,
    to: t
  };
}
var Ea = Symbol("Uninstrumented");
function Pd(e, a) {
  let t = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (r) => r({
      id: a.id,
      index: a.index,
      path: a.path,
      instrument(f) {
        let i = Object.keys(t);
        for (let o of i)
          f[o] && t[o].push(f[o]);
      }
    })
  );
  let n = {};
  if (typeof a.lazy == "function" && t.lazy.length > 0) {
    let r = gt(t.lazy, a.lazy, () => {
    });
    r && (n.lazy = r);
  }
  if (typeof a.lazy == "object") {
    let r = a.lazy;
    ["middleware", "loader", "action"].forEach((f) => {
      let i = r[f], o = t[`lazy.${f}`];
      if (typeof i == "function" && o.length > 0) {
        let s = gt(o, i, () => {
        });
        s && (n.lazy = Object.assign(n.lazy || {}, {
          [f]: s
        }));
      }
    });
  }
  return ["loader", "action"].forEach((r) => {
    let f = a[r];
    if (typeof f == "function" && t[r].length > 0) {
      let i = f[Ea] ?? f, o = gt(
        t[r],
        i,
        (...s) => Si(s[0])
      );
      o && (r === "loader" && i.hydrate === !0 && (o.hydrate = !0), o[Ea] = i, n[r] = o);
    }
  }), a.middleware && a.middleware.length > 0 && t.middleware.length > 0 && (n.middleware = a.middleware.map((r) => {
    let f = r[Ea] ?? r, i = gt(
      t.middleware,
      f,
      (...o) => Si(o[0])
    );
    return i ? (i[Ea] = f, i) : r;
  })), n;
}
function Rd(e, a) {
  let t = {
    navigate: [],
    fetch: []
  };
  if (a.forEach(
    (n) => n({
      instrument(r) {
        let f = Object.keys(r);
        for (let i of f)
          r[i] && t[i].push(r[i]);
      }
    })
  ), t.navigate.length > 0) {
    let n = e.navigate[Ea] ?? e.navigate, r = gt(
      t.navigate,
      n,
      (...f) => {
        let [i, o] = f;
        return {
          to: typeof i == "number" || typeof i == "string" ? i : i ? ba(i) : ".",
          ...Di(e, o ?? {})
        };
      }
    );
    r && (r[Ea] = n, e.navigate = r);
  }
  if (t.fetch.length > 0) {
    let n = e.fetch[Ea] ?? e.fetch, r = gt(t.fetch, n, (...f) => {
      let [i, , o, s] = f;
      return {
        href: o ?? ".",
        fetcherKey: i,
        ...Di(e, s ?? {})
      };
    });
    r && (r[Ea] = n, e.fetch = r);
  }
  return e;
}
function gt(e, a, t) {
  return e.length === 0 ? null : async (...n) => {
    let r = await rl(
      e,
      t(...n),
      () => a(...n),
      e.length - 1
    );
    if (r.type === "error")
      throw r.value;
    return r.value;
  };
}
async function rl(e, a, t, n) {
  let r = e[n], f;
  if (r) {
    let i, o = async () => (i ? console.error("You cannot call instrumented handlers more than once") : i = rl(e, a, t, n - 1), f = await i, ie(f, "Expected a result"), f.type === "error" && f.value instanceof Error ? { status: "error", error: f.value } : { status: "success", error: void 0 });
    try {
      await r(o, a);
    } catch (s) {
      console.error("An instrumentation function threw an error:", s);
    }
    i || await o(), await i;
  } else
    try {
      f = { type: "success", value: await t() };
    } catch (i) {
      f = { type: "error", value: i };
    }
  return f || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Si(e) {
  let { request: a, context: t, params: n, unstable_pattern: r } = e;
  return {
    request: Od(a),
    params: { ...n },
    unstable_pattern: r,
    context: Yd(t)
  };
}
function Di(e, a) {
  return {
    currentUrl: ba(e.state.location),
    ..."formMethod" in a ? { formMethod: a.formMethod } : {},
    ..."formEncType" in a ? { formEncType: a.formEncType } : {},
    ..."formData" in a ? { formData: a.formData } : {},
    ..."body" in a ? { body: a.body } : {}
  };
}
function Od(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...a) => e.headers.get(...a)
    }
  };
}
function Yd(e) {
  if (Qd(e)) {
    let a = { ...e };
    return Object.freeze(a), a;
  } else
    return {
      get: (a) => e.get(a)
    };
}
var Ud = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Qd(e) {
  if (e === null || typeof e != "object")
    return !1;
  const a = Object.getPrototypeOf(e);
  return a === Object.prototype || a === null || Object.getOwnPropertyNames(a).sort().join("\0") === Ud;
}
var fl = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], Bd = new Set(
  fl
), Jd = [
  "GET",
  ...fl
], Gd = new Set(Jd), il = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), _d = /* @__PURE__ */ new Set([307, 308]), kr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Wd = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Tt = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Fd = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), ol = "remix-router-transitions", ll = Symbol("ResetLoaderData");
function Zd(e) {
  const a = e.window ? e.window : typeof window < "u" ? window : void 0, t = typeof a < "u" && typeof a.document < "u" && typeof a.document.createElement < "u";
  ie(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let n = e.hydrationRouteProperties || [], r = e.mapRouteProperties || Fd, f = r;
  if (e.unstable_instrumentations) {
    let h = e.unstable_instrumentations;
    f = (v) => ({
      ...r(v),
      ...Pd(
        h.map((j) => j.route).filter(Boolean),
        v
      )
    });
  }
  let i = {}, o = Vt(
    e.routes,
    f,
    void 0,
    i
  ), s, c = e.basename || "/";
  c.startsWith("/") || (c = `/${c}`);
  let d = e.dataStrategy || Xd, u = {
    ...e.future
  }, m = null, g = /* @__PURE__ */ new Set(), b = null, p = null, M = null, L = e.hydrationData != null, C = za(o, e.history.location, c), I = !1, R = null, z;
  if (C == null && !e.patchRoutesOnNavigation) {
    let h = ea(404, {
      pathname: e.history.location.pathname
    }), { matches: v, route: j } = In(o);
    z = !0, C = v, R = { [j.id]: h };
  } else if (C && !e.hydrationData && Ln(
    C,
    o,
    e.history.location.pathname
  ).active && (C = null), C)
    if (C.some((h) => h.route.lazy))
      z = !1;
    else if (!C.some((h) => uf(h.route)))
      z = !0;
    else {
      let h = e.hydrationData ? e.hydrationData.loaderData : null, v = e.hydrationData ? e.hydrationData.errors : null;
      if (v) {
        let j = C.findIndex(
          (S) => v[S.route.id] !== void 0
        );
        z = C.slice(0, j + 1).every(
          (S) => !Fr(S.route, h, v)
        );
      } else
        z = C.every(
          (j) => !Fr(j.route, h, v)
        );
    }
  else {
    z = !1, C = [];
    let h = Ln(
      null,
      o,
      e.history.location.pathname
    );
    h.active && h.matches && (I = !0, C = h.matches);
  }
  let T, y = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: C,
    initialized: z,
    navigation: kr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || R,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, N = "POP", U = null, q = !1, X, O = !1, ce = /* @__PURE__ */ new Map(), le = null, ee = !1, ae = !1, P = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), A = 0, G = -1, ge = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new Map(), ke, Na = null;
  function it() {
    if (m = e.history.listen(
      ({ action: h, location: v, delta: j }) => {
        if (ke) {
          ke(), ke = void 0;
          return;
        }
        Te(
          Je.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let S = wi({
          currentLocation: y.location,
          nextLocation: v,
          historyAction: h
        });
        if (S && j != null) {
          let E = new Promise((W) => {
            ke = W;
          });
          e.history.go(j * -1), Mn(S, {
            state: "blocked",
            location: v,
            proceed() {
              Mn(S, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: v
              }), E.then(() => e.history.go(j));
            },
            reset() {
              let W = new Map(y.blockers);
              W.set(S, Tt), Se({ blockers: W });
            }
          }), U?.resolve(), U = null;
          return;
        }
        return Qa(h, v);
      }
    ), t) {
      bu(a, ce);
      let h = () => wu(a, ce);
      a.addEventListener("pagehide", h), le = () => a.removeEventListener("pagehide", h);
    }
    return y.initialized || Qa("POP", y.location, {
      initialHydration: !0
    }), T;
  }
  function ot() {
    m && m(), le && le(), g.clear(), X && X.abort(), y.fetchers.forEach((h, v) => vr(v)), y.blockers.forEach((h, v) => bi(v));
  }
  function Nt(h) {
    return g.add(h), () => g.delete(h);
  }
  function Se(h, v = {}) {
    h.matches && (h.matches = h.matches.map((E) => {
      let W = i[E.route.id], Q = E.route;
      return Q.element !== W.element || Q.errorElement !== W.errorElement || Q.hydrateFallbackElement !== W.hydrateFallbackElement ? {
        ...E,
        route: W
      } : E;
    })), y = {
      ...y,
      ...h
    };
    let j = [], S = [];
    y.fetchers.forEach((E, W) => {
      E.state === "idle" && (Ie.has(W) ? j.push(W) : S.push(W));
    }), Ie.forEach((E) => {
      !y.fetchers.has(E) && !k.has(E) && j.push(E);
    }), [...g].forEach(
      (E) => E(y, {
        deletedFetchers: j,
        newErrors: h.errors ?? null,
        viewTransitionOpts: v.viewTransitionOpts,
        flushSync: v.flushSync === !0
      })
    ), j.forEach((E) => vr(E)), S.forEach((E) => y.fetchers.delete(E));
  }
  function lt(h, v, { flushSync: j } = {}) {
    let S = y.actionData != null && y.navigation.formMethod != null && Ue(y.navigation.formMethod) && y.navigation.state === "loading" && h.state?._isRedirect !== !0, E;
    v.actionData ? Object.keys(v.actionData).length > 0 ? E = v.actionData : E = null : S ? E = y.actionData : E = null;
    let W = v.loaderData ? Qi(
      y.loaderData,
      v.loaderData,
      v.matches || [],
      v.errors
    ) : y.loaderData, Q = y.blockers;
    Q.size > 0 && (Q = new Map(Q), Q.forEach(($, H) => Q.set(H, Tt)));
    let _ = ee ? !1 : yi(h, v.matches || y.matches), F = q === !0 || y.navigation.formMethod != null && Ue(y.navigation.formMethod) && h.state?._isRedirect !== !0;
    s && (o = s, s = void 0), ee || N === "POP" || (N === "PUSH" ? e.history.push(h, h.state) : N === "REPLACE" && e.history.replace(h, h.state));
    let V;
    if (N === "POP") {
      let $ = ce.get(y.location.pathname);
      $ && $.has(h.pathname) ? V = {
        currentLocation: y.location,
        nextLocation: h
      } : ce.has(h.pathname) && (V = {
        currentLocation: h,
        nextLocation: y.location
      });
    } else if (O) {
      let $ = ce.get(y.location.pathname);
      $ ? $.add(h.pathname) : ($ = /* @__PURE__ */ new Set([h.pathname]), ce.set(y.location.pathname, $)), V = {
        currentLocation: y.location,
        nextLocation: h
      };
    }
    Se(
      {
        ...v,
        // matches, errors, fetchers go through as-is
        actionData: E,
        loaderData: W,
        historyAction: N,
        location: h,
        initialized: !0,
        navigation: kr,
        revalidation: "idle",
        restoreScrollPosition: _,
        preventScrollReset: F,
        blockers: Q
      },
      {
        viewTransitionOpts: V,
        flushSync: j === !0
      }
    ), N = "POP", q = !1, O = !1, ee = !1, ae = !1, U?.resolve(), U = null, Na?.resolve(), Na = null;
  }
  async function si(h, v) {
    if (U?.resolve(), U = null, typeof h == "number") {
      U || (U = _i());
      let be = U.promise;
      return e.history.go(h), be;
    }
    let j = Wr(
      y.location,
      y.matches,
      c,
      h,
      v?.fromRouteId,
      v?.relative
    ), { path: S, submission: E, error: W } = zi(
      !1,
      j,
      v
    ), Q = y.location, _ = Ht(y.location, S, v && v.state);
    _ = {
      ..._,
      ...e.history.encodeLocation(_)
    };
    let F = v && v.replace != null ? v.replace : void 0, V = "PUSH";
    F === !0 ? V = "REPLACE" : F === !1 || E != null && Ue(E.formMethod) && E.formAction === y.location.pathname + y.location.search && (V = "REPLACE");
    let $ = v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0, H = (v && v.flushSync) === !0, he = wi({
      currentLocation: Q,
      nextLocation: _,
      historyAction: V
    });
    if (he) {
      Mn(he, {
        state: "blocked",
        location: _,
        proceed() {
          Mn(he, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: _
          }), si(h, v);
        },
        reset() {
          let be = new Map(y.blockers);
          be.set(he, Tt), Se({ blockers: be });
        }
      });
      return;
    }
    await Qa(V, _, {
      submission: E,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: W,
      preventScrollReset: $,
      replace: v && v.replace,
      enableViewTransition: v && v.viewTransition,
      flushSync: H,
      callSiteDefaultShouldRevalidate: v && v.unstable_defaultShouldRevalidate
    });
  }
  function Nc() {
    Na || (Na = _i()), yr(), Se({ revalidation: "loading" });
    let h = Na.promise;
    return y.navigation.state === "submitting" ? h : y.navigation.state === "idle" ? (Qa(y.historyAction, y.location, {
      startUninterruptedRevalidation: !0
    }), h) : (Qa(
      N || y.historyAction,
      y.navigation.location,
      {
        overrideNavigation: y.navigation,
        // Proxy through any rending view transition
        enableViewTransition: O === !0
      }
    ), h);
  }
  async function Qa(h, v, j) {
    X && X.abort(), X = null, N = h, ee = (j && j.startUninterruptedRevalidation) === !0, Yc(y.location, y.matches), q = (j && j.preventScrollReset) === !0, O = (j && j.enableViewTransition) === !0;
    let S = s || o, E = j && j.overrideNavigation, W = j?.initialHydration && y.matches && y.matches.length > 0 && !I ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      y.matches
    ) : za(S, v, c), Q = (j && j.flushSync) === !0;
    if (W && y.initialized && !ae && iu(y.location, v) && !(j && j.submission && Ue(j.submission.formMethod))) {
      lt(v, { matches: W }, { flushSync: Q });
      return;
    }
    let _ = Ln(W, S, v.pathname);
    if (_.active && _.matches && (W = _.matches), !W) {
      let { error: Ae, notFoundMatches: Qe, route: ye } = Mr(
        v.pathname
      );
      lt(
        v,
        {
          matches: Qe,
          loaderData: {},
          errors: {
            [ye.id]: Ae
          }
        },
        { flushSync: Q }
      );
      return;
    }
    X = new AbortController();
    let F = mt(
      e.history,
      v,
      X.signal,
      j && j.submission
    ), V = e.getContext ? await e.getContext() : new xi(), $;
    if (j && j.pendingError)
      $ = [
        Ta(W).route.id,
        { type: "error", error: j.pendingError }
      ];
    else if (j && j.submission && Ue(j.submission.formMethod)) {
      let Ae = await Ic(
        F,
        v,
        j.submission,
        W,
        V,
        _.active,
        j && j.initialHydration === !0,
        { replace: j.replace, flushSync: Q }
      );
      if (Ae.shortCircuited)
        return;
      if (Ae.pendingActionResult) {
        let [Qe, ye] = Ae.pendingActionResult;
        if (We(ye) && $t(ye.error) && ye.error.status === 404) {
          X = null, lt(v, {
            matches: Ae.matches,
            loaderData: {},
            errors: {
              [Qe]: ye.error
            }
          });
          return;
        }
      }
      W = Ae.matches || W, $ = Ae.pendingActionResult, E = Nr(v, j.submission), Q = !1, _.active = !1, F = mt(
        e.history,
        F.url,
        F.signal
      );
    }
    let {
      shortCircuited: H,
      matches: he,
      loaderData: be,
      errors: Oe
    } = await Sc(
      F,
      v,
      W,
      V,
      _.active,
      E,
      j && j.submission,
      j && j.fetcherSubmission,
      j && j.replace,
      j && j.initialHydration === !0,
      Q,
      $,
      j && j.callSiteDefaultShouldRevalidate
    );
    H || (X = null, lt(v, {
      matches: he || W,
      ...Bi($),
      loaderData: be,
      errors: Oe
    }));
  }
  async function Ic(h, v, j, S, E, W, Q, _ = {}) {
    yr();
    let F = gu(v, j);
    if (Se({ navigation: F }, { flushSync: _.flushSync === !0 }), W) {
      let H = await Cn(
        S,
        v.pathname,
        h.signal
      );
      if (H.type === "aborted")
        return { shortCircuited: !0 };
      if (H.type === "error") {
        if (H.partialMatches.length === 0) {
          let { matches: be, route: Oe } = In(o);
          return {
            matches: be,
            pendingActionResult: [
              Oe.id,
              {
                type: "error",
                error: H.error
              }
            ]
          };
        }
        let he = Ta(H.partialMatches).route.id;
        return {
          matches: H.partialMatches,
          pendingActionResult: [
            he,
            {
              type: "error",
              error: H.error
            }
          ]
        };
      } else if (H.matches)
        S = H.matches;
      else {
        let { notFoundMatches: he, error: be, route: Oe } = Mr(
          v.pathname
        );
        return {
          matches: he,
          pendingActionResult: [
            Oe.id,
            {
              type: "error",
              error: be
            }
          ]
        };
      }
    }
    let V, $ = Rn(S, v);
    if (!$.route.action && !$.route.lazy)
      V = {
        type: "error",
        error: ea(405, {
          method: h.method,
          pathname: v.pathname,
          routeId: $.route.id
        })
      };
    else {
      let H = ht(
        f,
        i,
        h,
        S,
        $,
        Q ? [] : n,
        E
      ), he = await It(
        h,
        H,
        E,
        null
      );
      if (V = he[$.route.id], !V) {
        for (let be of S)
          if (he[be.route.id]) {
            V = he[be.route.id];
            break;
          }
      }
      if (h.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (Za(V)) {
      let H;
      return _ && _.replace != null ? H = _.replace : H = Oi(
        V.response.headers.get("Location"),
        new URL(h.url),
        c,
        e.history
      ) === y.location.pathname + y.location.search, await Ba(h, V, !0, {
        submission: j,
        replace: H
      }), { shortCircuited: !0 };
    }
    if (We(V)) {
      let H = Ta(S, $.route.id);
      return (_ && _.replace) !== !0 && (N = "PUSH"), {
        matches: S,
        pendingActionResult: [
          H.route.id,
          V,
          $.route.id
        ]
      };
    }
    return {
      matches: S,
      pendingActionResult: [$.route.id, V]
    };
  }
  async function Sc(h, v, j, S, E, W, Q, _, F, V, $, H, he) {
    let be = W || Nr(v, Q), Oe = Q || _ || Gi(be), Ae = !ee && !V;
    if (E) {
      if (Ae) {
        let Ye = ci(H);
        Se(
          {
            navigation: be,
            ...Ye !== void 0 ? { actionData: Ye } : {}
          },
          {
            flushSync: $
          }
        );
      }
      let ue = await Cn(
        j,
        v.pathname,
        h.signal
      );
      if (ue.type === "aborted")
        return { shortCircuited: !0 };
      if (ue.type === "error") {
        if (ue.partialMatches.length === 0) {
          let { matches: st, route: _a } = In(o);
          return {
            matches: st,
            loaderData: {},
            errors: {
              [_a.id]: ue.error
            }
          };
        }
        let Ye = Ta(ue.partialMatches).route.id;
        return {
          matches: ue.partialMatches,
          loaderData: {},
          errors: {
            [Ye]: ue.error
          }
        };
      } else if (ue.matches)
        j = ue.matches;
      else {
        let { error: Ye, notFoundMatches: st, route: _a } = Mr(
          v.pathname
        );
        return {
          matches: st,
          loaderData: {},
          errors: {
            [_a.id]: Ye
          }
        };
      }
    }
    let Qe = s || o, { dsMatches: ye, revalidatingFetchers: Xe } = Ti(
      h,
      S,
      f,
      i,
      e.history,
      y,
      j,
      Oe,
      v,
      V ? [] : n,
      V === !0,
      ae,
      P,
      Ie,
      Y,
      Le,
      Qe,
      c,
      e.patchRoutesOnNavigation != null,
      H,
      he
    );
    if (G = ++A, !e.dataStrategy && !ye.some((ue) => ue.shouldLoad) && !ye.some(
      (ue) => ue.route.middleware && ue.route.middleware.length > 0
    ) && Xe.length === 0) {
      let ue = gi();
      return lt(
        v,
        {
          matches: j,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: H && We(H[1]) ? { [H[0]]: H[1].error } : null,
          ...Bi(H),
          ...ue ? { fetchers: new Map(y.fetchers) } : {}
        },
        { flushSync: $ }
      ), { shortCircuited: !0 };
    }
    if (Ae) {
      let ue = {};
      if (!E) {
        ue.navigation = be;
        let Ye = ci(H);
        Ye !== void 0 && (ue.actionData = Ye);
      }
      Xe.length > 0 && (ue.fetchers = Dc(Xe)), Se(ue, { flushSync: $ });
    }
    Xe.forEach((ue) => {
      La(ue.key), ue.controller && k.set(ue.key, ue.controller);
    });
    let Ja = () => Xe.forEach((ue) => La(ue.key));
    X && X.signal.addEventListener(
      "abort",
      Ja
    );
    let { loaderResults: St, fetcherResults: Ia } = await di(
      ye,
      Xe,
      h,
      S
    );
    if (h.signal.aborted)
      return { shortCircuited: !0 };
    X && X.signal.removeEventListener(
      "abort",
      Ja
    ), Xe.forEach((ue) => k.delete(ue.key));
    let ca = Sn(St);
    if (ca)
      return await Ba(h, ca.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    if (ca = Sn(Ia), ca)
      return Le.add(ca.key), await Ba(h, ca.result, !0, {
        replace: F
      }), { shortCircuited: !0 };
    let { loaderData: Lr, errors: Dt } = Ui(
      y,
      j,
      St,
      H,
      Xe,
      Ia
    );
    V && y.errors && (Dt = { ...y.errors, ...Dt });
    let Ga = gi(), jn = hi(G), xn = Ga || jn || Xe.length > 0;
    return {
      matches: j,
      loaderData: Lr,
      errors: Dt,
      ...xn ? { fetchers: new Map(y.fetchers) } : {}
    };
  }
  function ci(h) {
    if (h && !We(h[1]))
      return {
        [h[0]]: h[1].data
      };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function Dc(h) {
    return h.forEach((v) => {
      let j = y.fetchers.get(v.key), S = Et(
        void 0,
        j ? j.data : void 0
      );
      y.fetchers.set(v.key, S);
    }), new Map(y.fetchers);
  }
  async function zc(h, v, j, S) {
    La(h);
    let E = (S && S.flushSync) === !0, W = s || o, Q = Wr(
      y.location,
      y.matches,
      c,
      j,
      v,
      S?.relative
    ), _ = za(W, Q, c), F = Ln(_, W, Q);
    if (F.active && F.matches && (_ = F.matches), !_) {
      Ma(
        h,
        v,
        ea(404, { pathname: Q }),
        { flushSync: E }
      );
      return;
    }
    let { path: V, submission: $, error: H } = zi(
      !0,
      Q,
      S
    );
    if (H) {
      Ma(h, v, H, { flushSync: E });
      return;
    }
    let he = e.getContext ? await e.getContext() : new xi(), be = (S && S.preventScrollReset) === !0;
    if ($ && Ue($.formMethod)) {
      await Tc(
        h,
        v,
        V,
        _,
        he,
        F.active,
        E,
        be,
        $,
        S && S.unstable_defaultShouldRevalidate
      );
      return;
    }
    Y.set(h, { routeId: v, path: V }), await Ec(
      h,
      v,
      V,
      _,
      he,
      F.active,
      E,
      be,
      $
    );
  }
  async function Tc(h, v, j, S, E, W, Q, _, F, V) {
    yr(), Y.delete(h);
    let $ = y.fetchers.get(h);
    va(h, hu(F, $), {
      flushSync: Q
    });
    let H = new AbortController(), he = mt(
      e.history,
      j,
      H.signal,
      F
    );
    if (W) {
      let Ne = await Cn(
        S,
        new URL(he.url).pathname,
        he.signal,
        h
      );
      if (Ne.type === "aborted")
        return;
      if (Ne.type === "error") {
        Ma(h, v, Ne.error, { flushSync: Q });
        return;
      } else if (Ne.matches)
        S = Ne.matches;
      else {
        Ma(
          h,
          v,
          ea(404, { pathname: j }),
          { flushSync: Q }
        );
        return;
      }
    }
    let be = Rn(S, j);
    if (!be.route.action && !be.route.lazy) {
      let Ne = ea(405, {
        method: F.formMethod,
        pathname: j,
        routeId: v
      });
      Ma(h, v, Ne, { flushSync: Q });
      return;
    }
    k.set(h, H);
    let Oe = A, Ae = ht(
      f,
      i,
      he,
      S,
      be,
      n,
      E
    ), Qe = await It(
      he,
      Ae,
      E,
      h
    ), ye = Qe[be.route.id];
    if (!ye) {
      for (let Ne of Ae)
        if (Qe[Ne.route.id]) {
          ye = Qe[Ne.route.id];
          break;
        }
    }
    if (he.signal.aborted) {
      k.get(h) === H && k.delete(h);
      return;
    }
    if (Ie.has(h)) {
      if (Za(ye) || We(ye)) {
        va(h, xa(void 0));
        return;
      }
    } else {
      if (Za(ye))
        if (k.delete(h), G > Oe) {
          va(h, xa(void 0));
          return;
        } else
          return Le.add(h), va(h, Et(F)), Ba(he, ye, !1, {
            fetcherSubmission: F,
            preventScrollReset: _
          });
      if (We(ye)) {
        Ma(h, v, ye.error);
        return;
      }
    }
    let Xe = y.navigation.location || y.location, Ja = mt(
      e.history,
      Xe,
      H.signal
    ), St = s || o, Ia = y.navigation.state !== "idle" ? za(St, y.navigation.location, c) : y.matches;
    ie(Ia, "Didn't find any matches after fetcher action");
    let ca = ++A;
    ge.set(h, ca);
    let Lr = Et(F, ye.data);
    y.fetchers.set(h, Lr);
    let { dsMatches: Dt, revalidatingFetchers: Ga } = Ti(
      Ja,
      E,
      f,
      i,
      e.history,
      y,
      Ia,
      F,
      Xe,
      n,
      !1,
      ae,
      P,
      Ie,
      Y,
      Le,
      St,
      c,
      e.patchRoutesOnNavigation != null,
      [be.route.id, ye],
      V
    );
    Ga.filter((Ne) => Ne.key !== h).forEach((Ne) => {
      let kn = Ne.key, Mi = y.fetchers.get(kn), Bc = Et(
        void 0,
        Mi ? Mi.data : void 0
      );
      y.fetchers.set(kn, Bc), La(kn), Ne.controller && k.set(kn, Ne.controller);
    }), Se({ fetchers: new Map(y.fetchers) });
    let jn = () => Ga.forEach((Ne) => La(Ne.key));
    H.signal.addEventListener(
      "abort",
      jn
    );
    let { loaderResults: xn, fetcherResults: ue } = await di(
      Dt,
      Ga,
      Ja,
      E
    );
    if (H.signal.aborted)
      return;
    if (H.signal.removeEventListener(
      "abort",
      jn
    ), ge.delete(h), k.delete(h), Ga.forEach((Ne) => k.delete(Ne.key)), y.fetchers.has(h)) {
      let Ne = xa(ye.data);
      y.fetchers.set(h, Ne);
    }
    let Ye = Sn(xn);
    if (Ye)
      return Ba(
        Ja,
        Ye.result,
        !1,
        { preventScrollReset: _ }
      );
    if (Ye = Sn(ue), Ye)
      return Le.add(Ye.key), Ba(
        Ja,
        Ye.result,
        !1,
        { preventScrollReset: _ }
      );
    let { loaderData: st, errors: _a } = Ui(
      y,
      Ia,
      xn,
      void 0,
      Ga,
      ue
    );
    hi(ca), y.navigation.state === "loading" && ca > G ? (ie(N, "Expected pending action"), X && X.abort(), lt(y.navigation.location, {
      matches: Ia,
      loaderData: st,
      errors: _a,
      fetchers: new Map(y.fetchers)
    })) : (Se({
      errors: _a,
      loaderData: Qi(
        y.loaderData,
        st,
        Ia,
        _a
      ),
      fetchers: new Map(y.fetchers)
    }), ae = !1);
  }
  async function Ec(h, v, j, S, E, W, Q, _, F) {
    let V = y.fetchers.get(h);
    va(
      h,
      Et(
        F,
        V ? V.data : void 0
      ),
      { flushSync: Q }
    );
    let $ = new AbortController(), H = mt(
      e.history,
      j,
      $.signal
    );
    if (W) {
      let ye = await Cn(
        S,
        new URL(H.url).pathname,
        H.signal,
        h
      );
      if (ye.type === "aborted")
        return;
      if (ye.type === "error") {
        Ma(h, v, ye.error, { flushSync: Q });
        return;
      } else if (ye.matches)
        S = ye.matches;
      else {
        Ma(
          h,
          v,
          ea(404, { pathname: j }),
          { flushSync: Q }
        );
        return;
      }
    }
    let he = Rn(S, j);
    k.set(h, $);
    let be = A, Oe = ht(
      f,
      i,
      H,
      S,
      he,
      n,
      E
    ), Qe = (await It(
      H,
      Oe,
      E,
      h
    ))[he.route.id];
    if (k.get(h) === $ && k.delete(h), !H.signal.aborted) {
      if (Ie.has(h)) {
        va(h, xa(void 0));
        return;
      }
      if (Za(Qe))
        if (G > be) {
          va(h, xa(void 0));
          return;
        } else {
          Le.add(h), await Ba(H, Qe, !1, {
            preventScrollReset: _
          });
          return;
        }
      if (We(Qe)) {
        Ma(h, v, Qe.error);
        return;
      }
      va(h, xa(Qe.data));
    }
  }
  async function Ba(h, v, j, {
    submission: S,
    fetcherSubmission: E,
    preventScrollReset: W,
    replace: Q
  } = {}) {
    j || (U?.resolve(), U = null), v.response.headers.has("X-Remix-Revalidate") && (ae = !0);
    let _ = v.response.headers.get("Location");
    ie(_, "Expected a Location header on the redirect Response"), _ = Oi(
      _,
      new URL(h.url),
      c,
      e.history
    );
    let F = Ht(y.location, _, {
      _isRedirect: !0
    });
    if (t) {
      let Oe = !1;
      if (v.response.headers.has("X-Remix-Reload-Document"))
        Oe = !0;
      else if (sf(_)) {
        const Ae = Ko(_, !0);
        Oe = // Hard reload if it's an absolute URL to a new origin
        Ae.origin !== a.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        aa(Ae.pathname, c) == null;
      }
      if (Oe) {
        Q ? a.location.replace(_) : a.location.assign(_);
        return;
      }
    }
    X = null;
    let V = Q === !0 || v.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: $, formAction: H, formEncType: he } = y.navigation;
    !S && !E && $ && H && he && (S = Gi(y.navigation));
    let be = S || E;
    if (_d.has(v.response.status) && be && Ue(be.formMethod))
      await Qa(V, F, {
        submission: {
          ...be,
          formAction: _
        },
        // Preserve these flags across redirects
        preventScrollReset: W || q,
        enableViewTransition: j ? O : void 0
      });
    else {
      let Oe = Nr(
        F,
        S
      );
      await Qa(V, F, {
        overrideNavigation: Oe,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: E,
        // Preserve these flags across redirects
        preventScrollReset: W || q,
        enableViewTransition: j ? O : void 0
      });
    }
  }
  async function It(h, v, j, S) {
    let E, W = {};
    try {
      E = await eu(
        d,
        h,
        v,
        S,
        j,
        !1
      );
    } catch (Q) {
      return v.filter((_) => _.shouldLoad).forEach((_) => {
        W[_.route.id] = {
          type: "error",
          error: Q
        };
      }), W;
    }
    if (h.signal.aborted)
      return W;
    if (!Ue(h.method))
      for (let Q of v) {
        if (E[Q.route.id]?.type === "error")
          break;
        !E.hasOwnProperty(Q.route.id) && !y.loaderData.hasOwnProperty(Q.route.id) && (!y.errors || !y.errors.hasOwnProperty(Q.route.id)) && Q.shouldCallHandler() && (E[Q.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${Q.route.id}`
          )
        });
      }
    for (let [Q, _] of Object.entries(E))
      if (cu(_)) {
        let F = _.result;
        W[Q] = {
          type: "redirect",
          response: ru(
            F,
            h,
            Q,
            v,
            c
          )
        };
      } else
        W[Q] = await nu(_);
    return W;
  }
  async function di(h, v, j, S) {
    let E = It(
      j,
      h,
      S,
      null
    ), W = Promise.all(
      v.map(async (F) => {
        if (F.matches && F.match && F.request && F.controller) {
          let $ = (await It(
            F.request,
            F.matches,
            S,
            F.key
          ))[F.match.route.id];
          return { [F.key]: $ };
        } else
          return Promise.resolve({
            [F.key]: {
              type: "error",
              error: ea(404, {
                pathname: F.path
              })
            }
          });
      })
    ), Q = await E, _ = (await W).reduce(
      (F, V) => Object.assign(F, V),
      {}
    );
    return {
      loaderResults: Q,
      fetcherResults: _
    };
  }
  function yr() {
    ae = !0, Y.forEach((h, v) => {
      k.has(v) && P.add(v), La(v);
    });
  }
  function va(h, v, j = {}) {
    y.fetchers.set(h, v), Se(
      { fetchers: new Map(y.fetchers) },
      { flushSync: (j && j.flushSync) === !0 }
    );
  }
  function Ma(h, v, j, S = {}) {
    let E = Ta(y.matches, v);
    vr(h), Se(
      {
        errors: {
          [E.route.id]: j
        },
        fetchers: new Map(y.fetchers)
      },
      { flushSync: (S && S.flushSync) === !0 }
    );
  }
  function ui(h) {
    return de.set(h, (de.get(h) || 0) + 1), Ie.has(h) && Ie.delete(h), y.fetchers.get(h) || Wd;
  }
  function Ac(h, v) {
    La(h, v?.reason), va(h, xa(null));
  }
  function vr(h) {
    let v = y.fetchers.get(h);
    k.has(h) && !(v && v.state === "loading" && ge.has(h)) && La(h), Y.delete(h), ge.delete(h), Le.delete(h), Ie.delete(h), P.delete(h), y.fetchers.delete(h);
  }
  function Pc(h) {
    let v = (de.get(h) || 0) - 1;
    v <= 0 ? (de.delete(h), Ie.add(h)) : de.set(h, v), Se({ fetchers: new Map(y.fetchers) });
  }
  function La(h, v) {
    let j = k.get(h);
    j && (j.abort(v), k.delete(h));
  }
  function mi(h) {
    for (let v of h) {
      let j = ui(v), S = xa(j.data);
      y.fetchers.set(v, S);
    }
  }
  function gi() {
    let h = [], v = !1;
    for (let j of Le) {
      let S = y.fetchers.get(j);
      ie(S, `Expected fetcher: ${j}`), S.state === "loading" && (Le.delete(j), h.push(j), v = !0);
    }
    return mi(h), v;
  }
  function hi(h) {
    let v = [];
    for (let [j, S] of ge)
      if (S < h) {
        let E = y.fetchers.get(j);
        ie(E, `Expected fetcher: ${j}`), E.state === "loading" && (La(j), ge.delete(j), v.push(j));
      }
    return mi(v), v.length > 0;
  }
  function Rc(h, v) {
    let j = y.blockers.get(h) || Tt;
    return Je.get(h) !== v && Je.set(h, v), j;
  }
  function bi(h) {
    y.blockers.delete(h), Je.delete(h);
  }
  function Mn(h, v) {
    let j = y.blockers.get(h) || Tt;
    ie(
      j.state === "unblocked" && v.state === "blocked" || j.state === "blocked" && v.state === "blocked" || j.state === "blocked" && v.state === "proceeding" || j.state === "blocked" && v.state === "unblocked" || j.state === "proceeding" && v.state === "unblocked",
      `Invalid blocker state transition: ${j.state} -> ${v.state}`
    );
    let S = new Map(y.blockers);
    S.set(h, v), Se({ blockers: S });
  }
  function wi({
    currentLocation: h,
    nextLocation: v,
    historyAction: j
  }) {
    if (Je.size === 0)
      return;
    Je.size > 1 && Te(!1, "A router only supports one blocker at a time");
    let S = Array.from(Je.entries()), [E, W] = S[S.length - 1], Q = y.blockers.get(E);
    if (!(Q && Q.state === "proceeding") && W({ currentLocation: h, nextLocation: v, historyAction: j }))
      return E;
  }
  function Mr(h) {
    let v = ea(404, { pathname: h }), j = s || o, { matches: S, route: E } = In(j);
    return { notFoundMatches: S, route: E, error: v };
  }
  function Oc(h, v, j) {
    if (b = h, M = v, p = j || null, !L && y.navigation === kr) {
      L = !0;
      let S = yi(y.location, y.matches);
      S != null && Se({ restoreScrollPosition: S });
    }
    return () => {
      b = null, M = null, p = null;
    };
  }
  function pi(h, v) {
    return p && p(
      h,
      v.map((S) => wd(S, y.loaderData))
    ) || h.key;
  }
  function Yc(h, v) {
    if (b && M) {
      let j = pi(h, v);
      b[j] = M();
    }
  }
  function yi(h, v) {
    if (b) {
      let j = pi(h, v), S = b[j];
      if (typeof S == "number")
        return S;
    }
    return null;
  }
  function Ln(h, v, j) {
    if (e.patchRoutesOnNavigation)
      if (h) {
        if (Object.keys(h[0].params).length > 0)
          return { active: !0, matches: Gt(
            v,
            j,
            c,
            !0
          ) };
      } else
        return { active: !0, matches: Gt(
          v,
          j,
          c,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Cn(h, v, j, S) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: h };
    let E = h;
    for (; ; ) {
      let W = s == null, Q = s || o, _ = i;
      try {
        await e.patchRoutesOnNavigation({
          signal: j,
          path: v,
          matches: E,
          fetcherKey: S,
          patch: ($, H) => {
            j.aborted || Ei(
              $,
              H,
              Q,
              _,
              f,
              !1
            );
          }
        });
      } catch ($) {
        return { type: "error", error: $, partialMatches: E };
      } finally {
        W && !j.aborted && (o = [...o]);
      }
      if (j.aborted)
        return { type: "aborted" };
      let F = za(Q, v, c), V = null;
      if (F) {
        if (Object.keys(F[0].params).length === 0)
          return { type: "success", matches: F };
        if (V = Gt(
          Q,
          v,
          c,
          !0
        ), !(V && E.length < V.length && vi(
          E,
          V.slice(0, E.length)
        )))
          return { type: "success", matches: F };
      }
      if (V || (V = Gt(
        Q,
        v,
        c,
        !0
      )), !V || vi(E, V))
        return { type: "success", matches: null };
      E = V;
    }
  }
  function vi(h, v) {
    return h.length === v.length && h.every((j, S) => j.route.id === v[S].route.id);
  }
  function Uc(h) {
    i = {}, s = Vt(
      h,
      f,
      void 0,
      i
    );
  }
  function Qc(h, v, j = !1) {
    let S = s == null;
    Ei(
      h,
      v,
      s || o,
      i,
      f,
      j
    ), S && (o = [...o], Se({}));
  }
  return T = {
    get basename() {
      return c;
    },
    get future() {
      return u;
    },
    get state() {
      return y;
    },
    get routes() {
      return o;
    },
    get window() {
      return a;
    },
    initialize: it,
    subscribe: Nt,
    enableScrollRestoration: Oc,
    navigate: si,
    fetch: zc,
    revalidate: Nc,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (h) => e.history.createHref(h),
    encodeLocation: (h) => e.history.encodeLocation(h),
    getFetcher: ui,
    resetFetcher: Ac,
    deleteFetcher: Pc,
    dispose: ot,
    getBlocker: Rc,
    deleteBlocker: bi,
    patchRoutes: Qc,
    _internalFetchControllers: k,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: Uc,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(h) {
      Se(h);
    }
  }, e.unstable_instrumentations && (T = Rd(
    T,
    e.unstable_instrumentations.map((h) => h.router).filter(Boolean)
  )), T;
}
function Hd(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Wr(e, a, t, n, r, f) {
  let i, o;
  if (r) {
    i = [];
    for (let c of a)
      if (i.push(c), c.route.id === r) {
        o = c;
        break;
      }
  } else
    i = a, o = a[a.length - 1];
  let s = df(
    n || ".",
    cf(i),
    aa(e.pathname, t) || e.pathname,
    f === "path"
  );
  if (n == null && (s.search = e.search, s.hash = e.hash), (n == null || n === "" || n === ".") && o) {
    let c = gf(s.search);
    if (o.route.index && !c)
      s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index";
    else if (!o.route.index && c) {
      let d = new URLSearchParams(s.search), u = d.getAll("index");
      d.delete("index"), u.filter((g) => g).forEach((g) => d.append("index", g));
      let m = d.toString();
      s.search = m ? `?${m}` : "";
    }
  }
  return t !== "/" && (s.pathname = Dd({ basename: t, pathname: s.pathname })), ba(s);
}
function zi(e, a, t) {
  if (!t || !Hd(t))
    return { path: a };
  if (t.formMethod && !mu(t.formMethod))
    return {
      path: a,
      error: ea(405, { method: t.formMethod })
    };
  let n = () => ({
    path: a,
    error: ea(400, { type: "invalid-body" })
  }), f = (t.formMethod || "get").toUpperCase(), i = gl(a);
  if (t.body !== void 0) {
    if (t.formEncType === "text/plain") {
      if (!Ue(f))
        return n();
      let u = typeof t.body == "string" ? t.body : t.body instanceof FormData || t.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(t.body.entries()).reduce(
          (m, [g, b]) => `${m}${g}=${b}
`,
          ""
        )
      ) : String(t.body);
      return {
        path: a,
        submission: {
          formMethod: f,
          formAction: i,
          formEncType: t.formEncType,
          formData: void 0,
          json: void 0,
          text: u
        }
      };
    } else if (t.formEncType === "application/json") {
      if (!Ue(f))
        return n();
      try {
        let u = typeof t.body == "string" ? JSON.parse(t.body) : t.body;
        return {
          path: a,
          submission: {
            formMethod: f,
            formAction: i,
            formEncType: t.formEncType,
            formData: void 0,
            json: u,
            text: void 0
          }
        };
      } catch {
        return n();
      }
    }
  }
  ie(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let o, s;
  if (t.formData)
    o = Hr(t.formData), s = t.formData;
  else if (t.body instanceof FormData)
    o = Hr(t.body), s = t.body;
  else if (t.body instanceof URLSearchParams)
    o = t.body, s = Yi(o);
  else if (t.body == null)
    o = new URLSearchParams(), s = new FormData();
  else
    try {
      o = new URLSearchParams(t.body), s = Yi(o);
    } catch {
      return n();
    }
  let c = {
    formMethod: f,
    formAction: i,
    formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0
  };
  if (Ue(c.formMethod))
    return { path: a, submission: c };
  let d = Ra(a);
  return e && d.search && gf(d.search) && o.append("index", ""), d.search = `?${o}`, { path: ba(d), submission: c };
}
function Ti(e, a, t, n, r, f, i, o, s, c, d, u, m, g, b, p, M, L, C, I, R) {
  let z = I ? We(I[1]) ? I[1].error : I[1].data : void 0, T = r.createURL(f.location), y = r.createURL(s), N;
  if (d && f.errors) {
    let ee = Object.keys(f.errors)[0];
    N = i.findIndex((ae) => ae.route.id === ee);
  } else if (I && We(I[1])) {
    let ee = I[0];
    N = i.findIndex((ae) => ae.route.id === ee) - 1;
  }
  let U = I ? I[1].statusCode : void 0, q = U && U >= 400, X = {
    currentUrl: T,
    currentParams: f.matches[0]?.params || {},
    nextUrl: y,
    nextParams: i[0].params,
    ...o,
    actionResult: z,
    actionStatus: U
  }, O = sn(i), ce = i.map((ee, ae) => {
    let { route: P } = ee, k = null;
    if (N != null && ae > N ? k = !1 : P.lazy ? k = !0 : uf(P) ? d ? k = Fr(
      P,
      f.loaderData,
      f.errors
    ) : Vd(f.loaderData, f.matches[ae], ee) && (k = !0) : k = !1, k !== null)
      return Zr(
        t,
        n,
        e,
        O,
        ee,
        c,
        a,
        k
      );
    let A = !1;
    typeof R == "boolean" ? A = R : q ? A = !1 : (u || T.pathname + T.search === y.pathname + y.search || T.search !== y.search || $d(f.matches[ae], ee)) && (A = !0);
    let G = {
      ...X,
      defaultShouldRevalidate: A
    }, ge = Wt(ee, G);
    return Zr(
      t,
      n,
      e,
      O,
      ee,
      c,
      a,
      ge,
      G,
      R
    );
  }), le = [];
  return b.forEach((ee, ae) => {
    if (d || !i.some((de) => de.route.id === ee.routeId) || g.has(ae))
      return;
    let P = f.fetchers.get(ae), k = P && P.state !== "idle" && P.data === void 0, A = za(M, ee.path, L);
    if (!A) {
      if (C && k)
        return;
      le.push({
        key: ae,
        routeId: ee.routeId,
        path: ee.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (p.has(ae))
      return;
    let G = Rn(A, ee.path), ge = new AbortController(), Le = mt(
      r,
      ee.path,
      ge.signal
    ), Y = null;
    if (m.has(ae))
      m.delete(ae), Y = ht(
        t,
        n,
        Le,
        A,
        G,
        c,
        a
      );
    else if (k)
      u && (Y = ht(
        t,
        n,
        Le,
        A,
        G,
        c,
        a
      ));
    else {
      let de;
      typeof R == "boolean" ? de = R : q ? de = !1 : de = u;
      let Ie = {
        ...X,
        defaultShouldRevalidate: de
      };
      Wt(G, Ie) && (Y = ht(
        t,
        n,
        Le,
        A,
        G,
        c,
        a,
        Ie
      ));
    }
    Y && le.push({
      key: ae,
      routeId: ee.routeId,
      path: ee.path,
      matches: Y,
      match: G,
      request: Le,
      controller: ge
    });
  }), { dsMatches: ce, revalidatingFetchers: le };
}
function uf(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Fr(e, a, t) {
  if (e.lazy)
    return !0;
  if (!uf(e))
    return !1;
  let n = a != null && e.id in a, r = t != null && t[e.id] !== void 0;
  return !n && r ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !n && !r;
}
function Vd(e, a, t) {
  let n = (
    // [a] -> [a, b]
    !a || // [a, b] -> [a, c]
    t.route.id !== a.route.id
  ), r = !e.hasOwnProperty(t.route.id);
  return n || r;
}
function $d(e, a) {
  let t = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== a.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    t != null && t.endsWith("*") && e.params["*"] !== a.params["*"]
  );
}
function Wt(e, a) {
  if (e.route.shouldRevalidate) {
    let t = e.route.shouldRevalidate(a);
    if (typeof t == "boolean")
      return t;
  }
  return a.defaultShouldRevalidate;
}
function Ei(e, a, t, n, r, f) {
  let i;
  if (e) {
    let c = n[e];
    ie(
      c,
      `No route found to patch children into: routeId = ${e}`
    ), c.children || (c.children = []), i = c.children;
  } else
    i = t;
  let o = [], s = [];
  if (a.forEach((c) => {
    let d = i.find(
      (u) => sl(c, u)
    );
    d ? s.push({ existingRoute: d, newRoute: c }) : o.push(c);
  }), o.length > 0) {
    let c = Vt(
      o,
      r,
      [e || "_", "patch", String(i?.length || "0")],
      n
    );
    i.push(...c);
  }
  if (f && s.length > 0)
    for (let c = 0; c < s.length; c++) {
      let { existingRoute: d, newRoute: u } = s[c], m = d, [g] = Vt(
        [u],
        r,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(m, {
        element: g.element ? g.element : m.element,
        errorElement: g.errorElement ? g.errorElement : m.errorElement,
        hydrateFallbackElement: g.hydrateFallbackElement ? g.hydrateFallbackElement : m.hydrateFallbackElement
      });
    }
}
function sl(e, a) {
  return "id" in e && "id" in a && e.id === a.id ? !0 : e.index === a.index && e.path === a.path && e.caseSensitive === a.caseSensitive ? (!e.children || e.children.length === 0) && (!a.children || a.children.length === 0) ? !0 : e.children.every(
    (t, n) => a.children?.some((r) => sl(t, r))
  ) : !1;
}
var Ai = /* @__PURE__ */ new WeakMap(), cl = ({
  key: e,
  route: a,
  manifest: t,
  mapRouteProperties: n
}) => {
  let r = t[a.id];
  if (ie(r, "No route found in manifest"), !r.lazy || typeof r.lazy != "object")
    return;
  let f = r.lazy[e];
  if (!f)
    return;
  let i = Ai.get(r);
  i || (i = {}, Ai.set(r, i));
  let o = i[e];
  if (o)
    return o;
  let s = (async () => {
    let c = md(e), u = r[e] !== void 0 && e !== "hasErrorBoundary";
    if (c)
      Te(
        !c,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), i[e] = Promise.resolve();
    else if (u)
      Te(
        !1,
        `Route "${r.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let m = await f();
      m != null && (Object.assign(r, { [e]: m }), Object.assign(r, n(r)));
    }
    typeof r.lazy == "object" && (r.lazy[e] = void 0, Object.values(r.lazy).every((m) => m === void 0) && (r.lazy = void 0));
  })();
  return i[e] = s, s;
}, Pi = /* @__PURE__ */ new WeakMap();
function Kd(e, a, t, n, r) {
  let f = t[e.id];
  if (ie(f, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let d = Pi.get(f);
    if (d)
      return {
        lazyRoutePromise: d,
        lazyHandlerPromise: d
      };
    let u = (async () => {
      ie(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let m = await e.lazy(), g = {};
      for (let b in m) {
        let p = m[b];
        if (p === void 0)
          continue;
        let M = hd(b), C = f[b] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        b !== "hasErrorBoundary";
        M ? Te(
          !M,
          "Route property " + b + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : C ? Te(
          !C,
          `Route "${f.id}" has a static property "${b}" defined but its lazy function is also returning a value for this property. The lazy route property "${b}" will be ignored.`
        ) : g[b] = p;
      }
      Object.assign(f, g), Object.assign(f, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...n(f),
        lazy: void 0
      });
    })();
    return Pi.set(f, u), u.catch(() => {
    }), {
      lazyRoutePromise: u,
      lazyHandlerPromise: u
    };
  }
  let i = Object.keys(e.lazy), o = [], s;
  for (let d of i) {
    if (r && r.includes(d))
      continue;
    let u = cl({
      key: d,
      route: e,
      manifest: t,
      mapRouteProperties: n
    });
    u && (o.push(u), d === a && (s = u));
  }
  let c = o.length > 0 ? Promise.all(o).then(() => {
  }) : void 0;
  return c?.catch(() => {
  }), s?.catch(() => {
  }), {
    lazyRoutePromise: c,
    lazyHandlerPromise: s
  };
}
async function Ri(e) {
  let a = e.matches.filter((r) => r.shouldLoad), t = {};
  return (await Promise.all(a.map((r) => r.resolve()))).forEach((r, f) => {
    t[a[f].route.id] = r;
  }), t;
}
async function Xd(e) {
  return e.matches.some((a) => a.route.middleware) ? dl(e, () => Ri(e)) : Ri(e);
}
function dl(e, a) {
  return qd(
    e,
    a,
    (n) => {
      if (uu(n))
        throw n;
      return n;
    },
    lu,
    t
  );
  function t(n, r, f) {
    if (f)
      return Promise.resolve(
        Object.assign(f.value, {
          [r]: { type: "error", result: n }
        })
      );
    {
      let { matches: i } = e, o = Math.min(
        // Throwing route
        Math.max(
          i.findIndex((c) => c.route.id === r),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          i.findIndex((c) => c.shouldCallHandler()),
          0
        )
      ), s = Ta(
        i,
        i[o].route.id
      ).route.id;
      return Promise.resolve({
        [s]: { type: "error", result: n }
      });
    }
  }
}
async function qd(e, a, t, n, r) {
  let { matches: f, request: i, params: o, context: s, unstable_pattern: c } = e, d = f.flatMap(
    (m) => m.route.middleware ? m.route.middleware.map((g) => [m.route.id, g]) : []
  );
  return await ul(
    {
      request: i,
      params: o,
      context: s,
      unstable_pattern: c
    },
    d,
    a,
    t,
    n,
    r
  );
}
async function ul(e, a, t, n, r, f, i = 0) {
  let { request: o } = e;
  if (o.signal.aborted)
    throw o.signal.reason ?? new Error(`Request aborted: ${o.method} ${o.url}`);
  let s = a[i];
  if (!s)
    return await t();
  let [c, d] = s, u, m = async () => {
    if (u)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return u = { value: await ul(
        e,
        a,
        t,
        n,
        r,
        f,
        i + 1
      ) }, u.value;
    } catch (g) {
      return u = { value: await f(g, c, u) }, u.value;
    }
  };
  try {
    let g = await d(e, m), b = g != null ? n(g) : void 0;
    return r(b) ? b : u ? b ?? u.value : (u = { value: await m() }, u.value);
  } catch (g) {
    return await f(g, c, u);
  }
}
function ml(e, a, t, n, r) {
  let f = cl({
    key: "middleware",
    route: n.route,
    manifest: a,
    mapRouteProperties: e
  }), i = Kd(
    n.route,
    Ue(t.method) ? "action" : "loader",
    a,
    e,
    r
  );
  return {
    middleware: f,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise
  };
}
function Zr(e, a, t, n, r, f, i, o, s = null, c) {
  let d = !1, u = ml(
    e,
    a,
    t,
    r,
    f
  );
  return {
    ...r,
    _lazyPromises: u,
    shouldLoad: o,
    shouldRevalidateArgs: s,
    shouldCallHandler(m) {
      return d = !0, s ? typeof c == "boolean" ? Wt(r, {
        ...s,
        defaultShouldRevalidate: c
      }) : typeof m == "boolean" ? Wt(r, {
        ...s,
        defaultShouldRevalidate: m
      }) : Wt(r, s) : o;
    },
    resolve(m) {
      let { lazy: g, loader: b, middleware: p } = r.route, M = d || o || m && !Ue(t.method) && (g || b), L = p && p.length > 0 && !b && !g;
      return M && (Ue(t.method) || !L) ? au({
        request: t,
        unstable_pattern: n,
        match: r,
        lazyHandlerPromise: u?.handler,
        lazyRoutePromise: u?.route,
        handlerOverride: m,
        scopedContext: i
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function ht(e, a, t, n, r, f, i, o = null) {
  return n.map((s) => s.route.id !== r.route.id ? {
    ...s,
    shouldLoad: !1,
    shouldRevalidateArgs: o,
    shouldCallHandler: () => !1,
    _lazyPromises: ml(
      e,
      a,
      t,
      s,
      f
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Zr(
    e,
    a,
    t,
    sn(n),
    s,
    f,
    i,
    !0,
    o
  ));
}
async function eu(e, a, t, n, r, f) {
  t.some((c) => c._lazyPromises?.middleware) && await Promise.all(t.map((c) => c._lazyPromises?.middleware));
  let i = {
    request: a,
    unstable_pattern: sn(t),
    params: t[0].params,
    context: r,
    matches: t
  }, s = await e({
    ...i,
    fetcherKey: n,
    runClientMiddleware: (c) => {
      let d = i;
      return dl(d, () => c({
        ...d,
        fetcherKey: n,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      t.flatMap((c) => [
        c._lazyPromises?.handler,
        c._lazyPromises?.route
      ])
    );
  } catch {
  }
  return s;
}
async function au({
  request: e,
  unstable_pattern: a,
  match: t,
  lazyHandlerPromise: n,
  lazyRoutePromise: r,
  handlerOverride: f,
  scopedContext: i
}) {
  let o, s, c = Ue(e.method), d = c ? "action" : "loader", u = (m) => {
    let g, b = new Promise((L, C) => g = C);
    s = () => g(), e.signal.addEventListener("abort", s);
    let p = (L) => typeof m != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${t.route.id}]`
      )
    ) : m(
      {
        request: e,
        unstable_pattern: a,
        params: t.params,
        context: i
      },
      ...L !== void 0 ? [L] : []
    ), M = (async () => {
      try {
        return { type: "data", result: await (f ? f((C) => p(C)) : p()) };
      } catch (L) {
        return { type: "error", result: L };
      }
    })();
    return Promise.race([M, b]);
  };
  try {
    let m = c ? t.route.action : t.route.loader;
    if (n || r)
      if (m) {
        let g, [b] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          u(m).catch((p) => {
            g = p;
          }),
          // Ensure all lazy route promises are resolved before continuing
          n,
          r
        ]);
        if (g !== void 0)
          throw g;
        o = b;
      } else {
        await n;
        let g = c ? t.route.action : t.route.loader;
        if (g)
          [o] = await Promise.all([u(g), r]);
        else if (d === "action") {
          let b = new URL(e.url), p = b.pathname + b.search;
          throw ea(405, {
            method: e.method,
            pathname: p,
            routeId: t.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (m)
      o = await u(m);
    else {
      let g = new URL(e.url), b = g.pathname + g.search;
      throw ea(404, {
        pathname: b
      });
    }
  } catch (m) {
    return { type: "error", result: m };
  } finally {
    s && e.signal.removeEventListener("abort", s);
  }
  return o;
}
async function tu(e) {
  let a = e.headers.get("Content-Type");
  return a && /\bapplication\/json\b/.test(a) ? e.body == null ? null : e.json() : e.text();
}
async function nu(e) {
  let { result: a, type: t } = e;
  if (mf(a)) {
    let n;
    try {
      n = await tu(a);
    } catch (r) {
      return { type: "error", error: r };
    }
    return t === "error" ? {
      type: "error",
      error: new ln(a.status, a.statusText, n),
      statusCode: a.status,
      headers: a.headers
    } : {
      type: "data",
      data: n,
      statusCode: a.status,
      headers: a.headers
    };
  }
  return t === "error" ? Ji(a) ? a.data instanceof Error ? {
    type: "error",
    error: a.data,
    statusCode: a.init?.status,
    headers: a.init?.headers ? new Headers(a.init.headers) : void 0
  } : {
    type: "error",
    error: ou(a),
    statusCode: $t(a) ? a.status : void 0,
    headers: a.init?.headers ? new Headers(a.init.headers) : void 0
  } : {
    type: "error",
    error: a,
    statusCode: $t(a) ? a.status : void 0
  } : Ji(a) ? {
    type: "data",
    data: a.data,
    statusCode: a.init?.status,
    headers: a.init?.headers ? new Headers(a.init.headers) : void 0
  } : { type: "data", data: a };
}
function ru(e, a, t, n, r) {
  let f = e.headers.get("Location");
  if (ie(
    f,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !sf(f)) {
    let i = n.slice(
      0,
      n.findIndex((o) => o.route.id === t) + 1
    );
    f = Wr(
      new URL(a.url),
      i,
      r,
      f
    ), e.headers.set("Location", f);
  }
  return e;
}
function Oi(e, a, t, n) {
  let r = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (sf(e)) {
    let f = e, i = f.startsWith("//") ? new URL(a.protocol + f) : new URL(f);
    if (r.includes(i.protocol))
      throw new Error("Invalid redirect location");
    let o = aa(i.pathname, t) != null;
    if (i.origin === a.origin && o)
      return i.pathname + i.search + i.hash;
  }
  try {
    let f = n.createURL(e);
    if (r.includes(f.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function mt(e, a, t, n) {
  let r = e.createURL(gl(a)).toString(), f = { signal: t };
  if (n && Ue(n.formMethod)) {
    let { formMethod: i, formEncType: o } = n;
    f.method = i.toUpperCase(), o === "application/json" ? (f.headers = new Headers({ "Content-Type": o }), f.body = JSON.stringify(n.json)) : o === "text/plain" ? f.body = n.text : o === "application/x-www-form-urlencoded" && n.formData ? f.body = Hr(n.formData) : f.body = n.formData;
  }
  return new Request(r, f);
}
function Hr(e) {
  let a = new URLSearchParams();
  for (let [t, n] of e.entries())
    a.append(t, typeof n == "string" ? n : n.name);
  return a;
}
function Yi(e) {
  let a = new FormData();
  for (let [t, n] of e.entries())
    a.append(t, n);
  return a;
}
function fu(e, a, t, n = !1, r = !1) {
  let f = {}, i = null, o, s = !1, c = {}, d = t && We(t[1]) ? t[1].error : void 0;
  return e.forEach((u) => {
    if (!(u.route.id in a))
      return;
    let m = u.route.id, g = a[m];
    if (ie(
      !Za(g),
      "Cannot handle redirect results in processLoaderData"
    ), We(g)) {
      let b = g.error;
      if (d !== void 0 && (b = d, d = void 0), i = i || {}, r)
        i[m] = b;
      else {
        let p = Ta(e, m);
        i[p.route.id] == null && (i[p.route.id] = b);
      }
      n || (f[m] = ll), s || (s = !0, o = $t(g.error) ? g.error.status : 500), g.headers && (c[m] = g.headers);
    } else
      f[m] = g.data, g.statusCode && g.statusCode !== 200 && !s && (o = g.statusCode), g.headers && (c[m] = g.headers);
  }), d !== void 0 && t && (i = { [t[0]]: d }, t[2] && (f[t[2]] = void 0)), {
    loaderData: f,
    errors: i,
    statusCode: o || 200,
    loaderHeaders: c
  };
}
function Ui(e, a, t, n, r, f) {
  let { loaderData: i, errors: o } = fu(
    a,
    t,
    n
  );
  return r.filter((s) => !s.matches || s.matches.some((c) => c.shouldLoad)).forEach((s) => {
    let { key: c, match: d, controller: u } = s;
    if (u && u.signal.aborted)
      return;
    let m = f[c];
    if (ie(m, "Did not find corresponding fetcher result"), We(m)) {
      let g = Ta(e.matches, d?.route.id);
      o && o[g.route.id] || (o = {
        ...o,
        [g.route.id]: m.error
      }), e.fetchers.delete(c);
    } else if (Za(m))
      ie(!1, "Unhandled fetcher revalidation redirect");
    else {
      let g = xa(m.data);
      e.fetchers.set(c, g);
    }
  }), { loaderData: i, errors: o };
}
function Qi(e, a, t, n) {
  let r = Object.entries(a).filter(([, f]) => f !== ll).reduce((f, [i, o]) => (f[i] = o, f), {});
  for (let f of t) {
    let i = f.route.id;
    if (!a.hasOwnProperty(i) && e.hasOwnProperty(i) && f.route.loader && (r[i] = e[i]), n && n.hasOwnProperty(i))
      break;
  }
  return r;
}
function Bi(e) {
  return e ? We(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function Ta(e, a) {
  return (a ? e.slice(0, e.findIndex((n) => n.route.id === a) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0];
}
function In(e) {
  let a = e.length === 1 ? e[0] : e.find((t) => t.index || !t.path || t.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: a
      }
    ],
    route: a
  };
}
function ea(e, {
  pathname: a,
  routeId: t,
  method: n,
  type: r,
  message: f
} = {}) {
  let i = "Unknown Server Error", o = "Unknown @remix-run/router error";
  return e === 400 ? (i = "Bad Request", n && a && t ? o = `You made a ${n} request to "${a}" but did not provide a \`loader\` for route "${t}", so there is no way to handle the request.` : r === "invalid-body" && (o = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden", o = `Route "${t}" does not match URL "${a}"`) : e === 404 ? (i = "Not Found", o = `No route matches URL "${a}"`) : e === 405 && (i = "Method Not Allowed", n && a && t ? o = `You made a ${n.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${t}", so there is no way to handle the request.` : n && (o = `Invalid request method "${n.toUpperCase()}"`)), new ln(
    e || 500,
    i,
    new Error(o),
    !0
  );
}
function Sn(e) {
  let a = Object.entries(e);
  for (let t = a.length - 1; t >= 0; t--) {
    let [n, r] = a[t];
    if (Za(r))
      return { key: n, result: r };
  }
}
function gl(e) {
  let a = typeof e == "string" ? Ra(e) : e;
  return ba({ ...a, hash: "" });
}
function iu(e, a) {
  return e.pathname !== a.pathname || e.search !== a.search ? !1 : e.hash === "" ? a.hash !== "" : e.hash === a.hash ? !0 : a.hash !== "";
}
function ou(e) {
  return new ln(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function lu(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([a, t]) => typeof a == "string" && su(t)
  );
}
function su(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function cu(e) {
  return mf(e.result) && il.has(e.result.status);
}
function We(e) {
  return e.type === "error";
}
function Za(e) {
  return (e && e.type) === "redirect";
}
function Ji(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function mf(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function du(e) {
  return il.has(e);
}
function uu(e) {
  return mf(e) && du(e.status) && e.headers.has("Location");
}
function mu(e) {
  return Gd.has(e.toUpperCase());
}
function Ue(e) {
  return Bd.has(e.toUpperCase());
}
function gf(e) {
  return new URLSearchParams(e).getAll("index").some((a) => a === "");
}
function Rn(e, a) {
  let t = typeof a == "string" ? Ra(a).search : a.search;
  if (e[e.length - 1].route.index && gf(t || ""))
    return e[e.length - 1];
  let n = al(e);
  return n[n.length - 1];
}
function Gi(e) {
  let { formMethod: a, formAction: t, formEncType: n, text: r, formData: f, json: i } = e;
  if (!(!a || !t || !n)) {
    if (r != null)
      return {
        formMethod: a,
        formAction: t,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: r
      };
    if (f != null)
      return {
        formMethod: a,
        formAction: t,
        formEncType: n,
        formData: f,
        json: void 0,
        text: void 0
      };
    if (i !== void 0)
      return {
        formMethod: a,
        formAction: t,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0
      };
  }
}
function Nr(e, a) {
  return a ? {
    state: "loading",
    location: e,
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function gu(e, a) {
  return {
    state: "submitting",
    location: e,
    formMethod: a.formMethod,
    formAction: a.formAction,
    formEncType: a.formEncType,
    formData: a.formData,
    json: a.json,
    text: a.text
  };
}
function Et(e, a) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: a
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: a
  };
}
function hu(e, a) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: a ? a.data : void 0
  };
}
function xa(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function bu(e, a) {
  try {
    let t = e.sessionStorage.getItem(
      ol
    );
    if (t) {
      let n = JSON.parse(t);
      for (let [r, f] of Object.entries(n || {}))
        f && Array.isArray(f) && a.set(r, new Set(f || []));
    }
  } catch {
  }
}
function wu(e, a) {
  if (a.size > 0) {
    let t = {};
    for (let [n, r] of a)
      t[n] = [...r];
    try {
      e.sessionStorage.setItem(
        ol,
        JSON.stringify(t)
      );
    } catch (n) {
      Te(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function _i() {
  let e, a, t = new Promise((n, r) => {
    e = async (f) => {
      n(f);
      try {
        await t;
      } catch {
      }
    }, a = async (f) => {
      r(f);
      try {
        await t;
      } catch {
      }
    };
  });
  return {
    promise: t,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: a
  };
}
var Xa = je(null);
Xa.displayName = "DataRouter";
var cn = je(null);
cn.displayName = "DataRouterState";
var hl = je(!1);
function pu() {
  return Z(hl);
}
var hf = je({
  isTransitioning: !1
});
hf.displayName = "ViewTransition";
var bl = je(
  /* @__PURE__ */ new Map()
);
bl.displayName = "Fetchers";
var yu = je(null);
yu.displayName = "Await";
var na = je(
  null
);
na.displayName = "Navigation";
var ar = je(
  null
);
ar.displayName = "Location";
var ya = je({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ya.displayName = "Route";
var bf = je(null);
bf.displayName = "RouteError";
var wl = "REACT_ROUTER_ERROR", vu = "REDIRECT", Mu = "ROUTE_ERROR_RESPONSE";
function Lu(e) {
  if (e.startsWith(`${wl}:${vu}:{`))
    try {
      let a = JSON.parse(e.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function Cu(e) {
  if (e.startsWith(
    `${wl}:${Mu}:{`
  ))
    try {
      let a = JSON.parse(e.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new ln(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function ju(e, { relative: a } = {}) {
  ie(
    dn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: t, navigator: n } = Z(na), { hash: r, pathname: f, search: i } = un(e, { relative: a }), o = f;
  return t !== "/" && (o = f === "/" ? t : ma([t, f])), n.createHref({ pathname: o, search: i, hash: r });
}
function dn() {
  return Z(ar) != null;
}
function Oa() {
  return ie(
    dn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), Z(ar).location;
}
var pl = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function yl(e) {
  Z(na).static || on(e);
}
function wf() {
  let { isDataRoute: e } = Z(ya);
  return e ? Yu() : xu();
}
function xu() {
  ie(
    dn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = Z(Xa), { basename: a, navigator: t } = Z(na), { matches: n } = Z(ya), { pathname: r } = Oa(), f = JSON.stringify(cf(n)), i = we(!1);
  return yl(() => {
    i.current = !0;
  }), ze(
    (s, c = {}) => {
      if (Te(i.current, pl), !i.current) return;
      if (typeof s == "number") {
        t.go(s);
        return;
      }
      let d = df(
        s,
        JSON.parse(f),
        r,
        c.relative === "path"
      );
      e == null && a !== "/" && (d.pathname = d.pathname === "/" ? a : ma([a, d.pathname])), (c.replace ? t.replace : t.push)(
        d,
        c.state,
        c
      );
    },
    [
      a,
      t,
      f,
      r,
      e
    ]
  );
}
je(null);
function ku() {
  let { matches: e } = Z(ya), a = e[e.length - 1];
  return a ? a.params : {};
}
function un(e, { relative: a } = {}) {
  let { matches: t } = Z(ya), { pathname: n } = Oa(), r = JSON.stringify(cf(t));
  return Pe(
    () => df(
      e,
      JSON.parse(r),
      n,
      a === "path"
    ),
    [e, r, n, a]
  );
}
function Nu(e, a, t, n, r) {
  ie(
    dn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = Z(na), { matches: i } = Z(ya), o = i[i.length - 1], s = o ? o.params : {}, c = o ? o.pathname : "/", d = o ? o.pathnameBase : "/", u = o && o.route;
  {
    let C = u && u.path || "";
    Ml(
      c,
      !u || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`
    );
  }
  let m = Oa(), g;
  g = m;
  let b = g.pathname || "/", p = b;
  if (d !== "/") {
    let C = d.replace(/^\//, "").split("/");
    p = "/" + b.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let M = za(e, { pathname: p });
  return Te(
    u || M != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), Te(
    M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), Tu(
    M && M.map(
      (C) => Object.assign({}, C, {
        params: Object.assign({}, s, C.params),
        pathname: ma([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            C.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : C.pathname
        ]),
        pathnameBase: C.pathnameBase === "/" ? d : ma([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            C.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : C.pathnameBase
        ])
      })
    ),
    i,
    t,
    n,
    r
  );
}
function Iu() {
  let e = Ou(), a = $t(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), t = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", r = { padding: "0.5rem", backgroundColor: n }, f = { padding: "2px 4px", backgroundColor: n }, i = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), i = /* @__PURE__ */ x(ha, null, /* @__PURE__ */ x("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ x("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ x("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ x("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ x(ha, null, /* @__PURE__ */ x("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ x("h3", { style: { fontStyle: "italic" } }, a), t ? /* @__PURE__ */ x("pre", { style: r }, t) : null, i);
}
var Su = /* @__PURE__ */ x(Iu, null), vl = class extends lf {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, a) {
    return a.location !== e.location || a.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : a.error,
      location: a.location,
      revalidation: e.revalidation || a.revalidation
    };
  }
  componentDidCatch(e, a) {
    this.props.onError ? this.props.onError(e, a) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const t = Cu(e.digest);
      t && (e = t);
    }
    let a = e !== void 0 ? /* @__PURE__ */ x(ya.Provider, { value: this.props.routeContext }, /* @__PURE__ */ x(
      bf.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ x(Du, { error: e }, a) : a;
  }
};
vl.contextType = hl;
var Ir = /* @__PURE__ */ new WeakMap();
function Du({
  children: e,
  error: a
}) {
  let { basename: t } = Z(na);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let n = Lu(a.digest);
    if (n) {
      let r = Ir.get(a);
      if (r) throw r;
      let f = nl(n.location, t);
      if (tl && !Ir.get(a))
        if (f.isExternal || n.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const i = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: n.replace
            })
          );
          throw Ir.set(a, i), i;
        }
      return /* @__PURE__ */ x(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${f.absoluteURL || f.to}`
        }
      );
    }
  }
  return e;
}
function zu({ routeContext: e, match: a, children: t }) {
  let n = Z(Xa);
  return n && n.static && n.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ x(ya.Provider, { value: e }, t);
}
function Tu(e, a = [], t = null, n = null, r = null) {
  if (e == null) {
    if (!t)
      return null;
    if (t.errors)
      e = t.matches;
    else if (a.length === 0 && !t.initialized && t.matches.length > 0)
      e = t.matches;
    else
      return null;
  }
  let f = e, i = t?.errors;
  if (i != null) {
    let d = f.findIndex(
      (u) => u.route.id && i?.[u.route.id] !== void 0
    );
    ie(
      d >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        i
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, d + 1)
    );
  }
  let o = !1, s = -1;
  if (t)
    for (let d = 0; d < f.length; d++) {
      let u = f[d];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = d), u.route.id) {
        let { loaderData: m, errors: g } = t, b = u.route.loader && !m.hasOwnProperty(u.route.id) && (!g || g[u.route.id] === void 0);
        if (u.route.lazy || b) {
          o = !0, s >= 0 ? f = f.slice(0, s + 1) : f = [f[0]];
          break;
        }
      }
    }
  let c = t && n ? (d, u) => {
    n(d, {
      location: t.location,
      params: t.matches?.[0]?.params ?? {},
      unstable_pattern: sn(t.matches),
      errorInfo: u
    });
  } : void 0;
  return f.reduceRight(
    (d, u, m) => {
      let g, b = !1, p = null, M = null;
      t && (g = i && u.route.id ? i[u.route.id] : void 0, p = u.route.errorElement || Su, o && (s < 0 && m === 0 ? (Ml(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, M = null) : s === m && (b = !0, M = u.route.hydrateFallbackElement || null)));
      let L = a.concat(f.slice(0, m + 1)), C = () => {
        let I;
        return g ? I = p : b ? I = M : u.route.Component ? I = /* @__PURE__ */ x(u.route.Component, null) : u.route.element ? I = u.route.element : I = d, /* @__PURE__ */ x(
          zu,
          {
            match: u,
            routeContext: {
              outlet: d,
              matches: L,
              isDataRoute: t != null
            },
            children: I
          }
        );
      };
      return t && (u.route.ErrorBoundary || u.route.errorElement || m === 0) ? /* @__PURE__ */ x(
        vl,
        {
          location: t.location,
          revalidation: t.revalidation,
          component: p,
          error: g,
          children: C(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
          onError: c
        }
      ) : C();
    },
    null
  );
}
function pf(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Eu(e) {
  let a = Z(Xa);
  return ie(a, pf(e)), a;
}
function Au(e) {
  let a = Z(cn);
  return ie(a, pf(e)), a;
}
function Pu(e) {
  let a = Z(ya);
  return ie(a, pf(e)), a;
}
function yf(e) {
  let a = Pu(e), t = a.matches[a.matches.length - 1];
  return ie(
    t.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), t.route.id;
}
function Ru() {
  return yf(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ou() {
  let e = Z(bf), a = Au(
    "useRouteError"
    /* UseRouteError */
  ), t = yf(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : a.errors?.[t];
}
function Yu() {
  let { router: e } = Eu(
    "useNavigate"
    /* UseNavigateStable */
  ), a = yf(
    "useNavigate"
    /* UseNavigateStable */
  ), t = we(!1);
  return yl(() => {
    t.current = !0;
  }), ze(
    async (r, f = {}) => {
      Te(t.current, pl), t.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, { fromRouteId: a, ...f }));
    },
    [e, a]
  );
}
var Wi = {};
function Ml(e, a, t) {
  !a && !Wi[e] && (Wi[e] = !0, Te(!1, t));
}
var Fi = {};
function Zi(e, a) {
  !e && !Fi[a] && (Fi[a] = !0, console.warn(a));
}
var Uu = "useOptimistic", Hi = id[Uu], Qu = () => {
};
function Bu(e) {
  return Hi ? Hi(e) : [e, Qu];
}
function Ju(e) {
  let a = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && Te(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(a, {
    element: x(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && Te(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(a, {
    hydrateFallbackElement: x(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && Te(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(a, {
    errorElement: x(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), a;
}
var Gu = [
  "HydrateFallback",
  "hydrateFallbackElement"
], _u = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, a) => {
      this.resolve = (t) => {
        this.status === "pending" && (this.status = "resolved", e(t));
      }, this.reject = (t) => {
        this.status === "pending" && (this.status = "rejected", a(t));
      };
    });
  }
};
function Wu({
  router: e,
  flushSync: a,
  onError: t,
  unstable_useTransitions: n
}) {
  n = pu() || n;
  let [f, i] = D(e.state), [o, s] = Bu(f), [c, d] = D(), [u, m] = D({
    isTransitioning: !1
  }), [g, b] = D(), [p, M] = D(), [L, C] = D(), I = we(/* @__PURE__ */ new Map()), R = ze(
    (N, { deletedFetchers: U, newErrors: q, flushSync: X, viewTransitionOpts: O }) => {
      q && t && Object.values(q).forEach(
        (le) => t(le, {
          location: N.location,
          params: N.matches[0]?.params ?? {},
          unstable_pattern: sn(N.matches)
        })
      ), N.fetchers.forEach((le, ee) => {
        le.data !== void 0 && I.current.set(ee, le.data);
      }), U.forEach((le) => I.current.delete(le)), Zi(
        X === !1 || a != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let ce = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (Zi(
        O == null || ce,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !O || !ce) {
        a && X ? a(() => i(N)) : n === !1 ? i(N) : Zt(() => {
          n === !0 && s((le) => Vi(le, N)), i(N);
        });
        return;
      }
      if (a && X) {
        a(() => {
          p && (g?.resolve(), p.skipTransition()), m({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: O.currentLocation,
            nextLocation: O.nextLocation
          });
        });
        let le = e.window.document.startViewTransition(() => {
          a(() => i(N));
        });
        le.finished.finally(() => {
          a(() => {
            b(void 0), M(void 0), d(void 0), m({ isTransitioning: !1 });
          });
        }), a(() => M(le));
        return;
      }
      p ? (g?.resolve(), p.skipTransition(), C({
        state: N,
        currentLocation: O.currentLocation,
        nextLocation: O.nextLocation
      })) : (d(N), m({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: O.currentLocation,
        nextLocation: O.nextLocation
      }));
    },
    [
      e.window,
      a,
      p,
      g,
      n,
      s,
      t
    ]
  );
  on(() => e.subscribe(R), [e, R]), fe(() => {
    u.isTransitioning && !u.flushSync && b(new _u());
  }, [u]), fe(() => {
    if (g && c && e.window) {
      let N = c, U = g.promise, q = e.window.document.startViewTransition(async () => {
        n === !1 ? i(N) : Zt(() => {
          n === !0 && s((X) => Vi(X, N)), i(N);
        }), await U;
      });
      q.finished.finally(() => {
        b(void 0), M(void 0), d(void 0), m({ isTransitioning: !1 });
      }), M(q);
    }
  }, [
    c,
    g,
    e.window,
    n,
    s
  ]), fe(() => {
    g && c && o.location.key === c.location.key && g.resolve();
  }, [g, p, o.location, c]), fe(() => {
    !u.isTransitioning && L && (d(L.state), m({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: L.currentLocation,
      nextLocation: L.nextLocation
    }), C(void 0));
  }, [u.isTransitioning, L]);
  let z = Pe(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (N) => e.navigate(N),
    push: (N, U, q) => e.navigate(N, {
      state: U,
      preventScrollReset: q?.preventScrollReset
    }),
    replace: (N, U, q) => e.navigate(N, {
      replace: !0,
      state: U,
      preventScrollReset: q?.preventScrollReset
    })
  }), [e]), T = e.basename || "/", y = Pe(
    () => ({
      router: e,
      navigator: z,
      static: !1,
      basename: T,
      onError: t
    }),
    [e, z, T, t]
  );
  return /* @__PURE__ */ x(ha, null, /* @__PURE__ */ x(Xa.Provider, { value: y }, /* @__PURE__ */ x(cn.Provider, { value: o }, /* @__PURE__ */ x(bl.Provider, { value: I.current }, /* @__PURE__ */ x(hf.Provider, { value: u }, /* @__PURE__ */ x(
    Hu,
    {
      basename: T,
      location: o.location,
      navigationType: o.historyAction,
      navigator: z,
      unstable_useTransitions: n
    },
    /* @__PURE__ */ x(
      Fu,
      {
        routes: e.routes,
        future: e.future,
        state: o,
        onError: t
      }
    )
  ))))), null);
}
function Vi(e, a) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: a.navigation.state !== "idle" ? a.navigation : e.navigation,
    revalidation: a.revalidation !== "idle" ? a.revalidation : e.revalidation,
    actionData: a.navigation.state !== "submitting" ? a.actionData : e.actionData,
    fetchers: a.fetchers
  };
}
var Fu = fn(Zu);
function Zu({
  routes: e,
  future: a,
  state: t,
  onError: n
}) {
  return Nu(e, void 0, t, n, a);
}
function Hu({
  basename: e = "/",
  children: a = null,
  location: t,
  navigationType: n = "POP",
  navigator: r,
  static: f = !1,
  unstable_useTransitions: i
}) {
  ie(
    !dn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = e.replace(/^\/*/, "/"), s = Pe(
    () => ({
      basename: o,
      navigator: r,
      static: f,
      unstable_useTransitions: i,
      future: {}
    }),
    [o, r, f, i]
  );
  typeof t == "string" && (t = Ra(t));
  let {
    pathname: c = "/",
    search: d = "",
    hash: u = "",
    state: m = null,
    key: g = "default"
  } = t, b = Pe(() => {
    let p = aa(c, o);
    return p == null ? null : {
      location: {
        pathname: p,
        search: d,
        hash: u,
        state: m,
        key: g
      },
      navigationType: n
    };
  }, [o, c, d, u, m, g, n]);
  return Te(
    b != null,
    `<Router basename="${o}"> is not able to match the URL "${c}${d}${u}" because it does not start with the basename, so the <Router> won't render anything.`
  ), b == null ? null : /* @__PURE__ */ x(na.Provider, { value: s }, /* @__PURE__ */ x(ar.Provider, { children: a, value: b }));
}
var On = "get", Yn = "application/x-www-form-urlencoded";
function tr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Vu(e) {
  return tr(e) && e.tagName.toLowerCase() === "button";
}
function $u(e) {
  return tr(e) && e.tagName.toLowerCase() === "form";
}
function Ku(e) {
  return tr(e) && e.tagName.toLowerCase() === "input";
}
function Xu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qu(e, a) {
  return e.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !Xu(e);
}
var Dn = null;
function e0() {
  if (Dn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Dn = !1;
    } catch {
      Dn = !0;
    }
  return Dn;
}
var a0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Sr(e) {
  return e != null && !a0.has(e) ? (Te(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yn}"`
  ), null) : e;
}
function t0(e, a) {
  let t, n, r, f, i;
  if ($u(e)) {
    let o = e.getAttribute("action");
    n = o ? aa(o, a) : null, t = e.getAttribute("method") || On, r = Sr(e.getAttribute("enctype")) || Yn, f = new FormData(e);
  } else if (Vu(e) || Ku(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute("formaction") || o.getAttribute("action");
    if (n = s ? aa(s, a) : null, t = e.getAttribute("formmethod") || o.getAttribute("method") || On, r = Sr(e.getAttribute("formenctype")) || Sr(o.getAttribute("enctype")) || Yn, f = new FormData(o, e), !e0()) {
      let { name: c, type: d, value: u } = e;
      if (d === "image") {
        let m = c ? `${c}.` : "";
        f.append(`${m}x`, "0"), f.append(`${m}y`, "0");
      } else c && f.append(c, u);
    }
  } else {
    if (tr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    t = On, n = null, r = Yn, i = e;
  }
  return f && r === "text/plain" && (i = f, f = void 0), { action: n, method: t.toLowerCase(), encType: r, formData: f, body: i };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function vf(e, a) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(a);
}
function n0(e, a, t, n) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return t ? r.pathname.endsWith("/") ? r.pathname = `${r.pathname}_.${n}` : r.pathname = `${r.pathname}.${n}` : r.pathname === "/" ? r.pathname = `_root.${n}` : a && aa(r.pathname, a) === "/" ? r.pathname = `${a.replace(/\/$/, "")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`, r;
}
async function r0(e, a) {
  if (e.id in a)
    return a[e.id];
  try {
    let t = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return a[e.id] = t, t;
  } catch (t) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function f0(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function i0(e, a, t) {
  let n = await Promise.all(
    e.map(async (r) => {
      let f = a.routes[r.route.id];
      if (f) {
        let i = await r0(f, t);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return c0(
    n.flat(1).filter(f0).filter((r) => r.rel === "stylesheet" || r.rel === "preload").map(
      (r) => r.rel === "stylesheet" ? { ...r, rel: "prefetch", as: "style" } : { ...r, rel: "prefetch" }
    )
  );
}
function $i(e, a, t, n, r, f) {
  let i = (s, c) => t[c] ? s.route.id !== t[c].route.id : !0, o = (s, c) => (
    // param change, /users/123 -> /users/456
    t[c].pathname !== s.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    t[c].route.path?.endsWith("*") && t[c].params["*"] !== s.params["*"]
  );
  return f === "assets" ? a.filter(
    (s, c) => i(s, c) || o(s, c)
  ) : f === "data" ? a.filter((s, c) => {
    let d = n.routes[s.route.id];
    if (!d || !d.hasLoader)
      return !1;
    if (i(s, c) || o(s, c))
      return !0;
    if (s.route.shouldRevalidate) {
      let u = s.route.shouldRevalidate({
        currentUrl: new URL(
          r.pathname + r.search + r.hash,
          window.origin
        ),
        currentParams: t[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: s.params,
        defaultShouldRevalidate: !0
      });
      if (typeof u == "boolean")
        return u;
    }
    return !0;
  }) : [];
}
function o0(e, a, { includeHydrateFallback: t } = {}) {
  return l0(
    e.map((n) => {
      let r = a.routes[n.route.id];
      if (!r) return [];
      let f = [r.module];
      return r.clientActionModule && (f = f.concat(r.clientActionModule)), r.clientLoaderModule && (f = f.concat(r.clientLoaderModule)), t && r.hydrateFallbackModule && (f = f.concat(r.hydrateFallbackModule)), r.imports && (f = f.concat(r.imports)), f;
    }).flat(1)
  );
}
function l0(e) {
  return [...new Set(e)];
}
function s0(e) {
  let a = {}, t = Object.keys(e).sort();
  for (let n of t)
    a[n] = e[n];
  return a;
}
function c0(e, a) {
  let t = /* @__PURE__ */ new Set();
  return new Set(a), e.reduce((n, r) => {
    let f = JSON.stringify(s0(r));
    return t.has(f) || (t.add(f), n.push({ key: f, link: r })), n;
  }, []);
}
function Ll() {
  let e = Z(Xa);
  return vf(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function d0() {
  let e = Z(cn);
  return vf(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Mf = je(void 0);
Mf.displayName = "FrameworkContext";
function Cl() {
  let e = Z(Mf);
  return vf(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function u0(e, a) {
  let t = Z(Mf), [n, r] = D(!1), [f, i] = D(!1), { onFocus: o, onBlur: s, onMouseEnter: c, onMouseLeave: d, onTouchStart: u } = a, m = we(null);
  fe(() => {
    if (e === "render" && i(!0), e === "viewport") {
      let p = (L) => {
        L.forEach((C) => {
          i(C.isIntersecting);
        });
      }, M = new IntersectionObserver(p, { threshold: 0.5 });
      return m.current && M.observe(m.current), () => {
        M.disconnect();
      };
    }
  }, [e]), fe(() => {
    if (n) {
      let p = setTimeout(() => {
        i(!0);
      }, 100);
      return () => {
        clearTimeout(p);
      };
    }
  }, [n]);
  let g = () => {
    r(!0);
  }, b = () => {
    r(!1), i(!1);
  };
  return t ? e !== "intent" ? [f, m, {}] : [
    f,
    m,
    {
      onFocus: At(o, g),
      onBlur: At(s, b),
      onMouseEnter: At(c, g),
      onMouseLeave: At(d, b),
      onTouchStart: At(u, g)
    }
  ] : [!1, m, {}];
}
function At(e, a) {
  return (t) => {
    e && e(t), t.defaultPrevented || a(t);
  };
}
function m0({ page: e, ...a }) {
  let { router: t } = Ll(), n = Pe(
    () => za(t.routes, e, t.basename),
    [t.routes, e, t.basename]
  );
  return n ? /* @__PURE__ */ x(h0, { page: e, matches: n, ...a }) : null;
}
function g0(e) {
  let { manifest: a, routeModules: t } = Cl(), [n, r] = D([]);
  return fe(() => {
    let f = !1;
    return i0(e, a, t).then(
      (i) => {
        f || r(i);
      }
    ), () => {
      f = !0;
    };
  }, [e, a, t]), n;
}
function h0({
  page: e,
  matches: a,
  ...t
}) {
  let n = Oa(), { future: r, manifest: f, routeModules: i } = Cl(), { basename: o } = Ll(), { loaderData: s, matches: c } = d0(), d = Pe(
    () => $i(
      e,
      a,
      c,
      f,
      n,
      "data"
    ),
    [e, a, c, f, n]
  ), u = Pe(
    () => $i(
      e,
      a,
      c,
      f,
      n,
      "assets"
    ),
    [e, a, c, f, n]
  ), m = Pe(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let p = /* @__PURE__ */ new Set(), M = !1;
    if (a.forEach((C) => {
      let I = f.routes[C.route.id];
      !I || !I.hasLoader || (!d.some((R) => R.route.id === C.route.id) && C.route.id in s && i[C.route.id]?.shouldRevalidate || I.hasClientLoader ? M = !0 : p.add(C.route.id));
    }), p.size === 0)
      return [];
    let L = n0(
      e,
      o,
      r.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return M && p.size > 0 && L.searchParams.set(
      "_routes",
      a.filter((C) => p.has(C.route.id)).map((C) => C.route.id).join(",")
    ), [L.pathname + L.search];
  }, [
    o,
    r.unstable_trailingSlashAwareDataRequests,
    s,
    n,
    f,
    d,
    a,
    e,
    i
  ]), g = Pe(
    () => o0(u, f),
    [u, f]
  ), b = g0(u);
  return /* @__PURE__ */ x(ha, null, m.map((p) => /* @__PURE__ */ x("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...t })), g.map((p) => /* @__PURE__ */ x("link", { key: p, rel: "modulepreload", href: p, ...t })), b.map(({ key: p, link: M }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ x(
      "link",
      {
        key: p,
        nonce: t.nonce,
        ...M,
        crossOrigin: M.crossOrigin ?? t.crossOrigin
      }
    )
  )));
}
function b0(...e) {
  return (a) => {
    e.forEach((t) => {
      typeof t == "function" ? t(a) : t != null && (t.current = a);
    });
  };
}
var w0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  w0 && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function p0(e, a) {
  return Zd({
    basename: a?.basename,
    getContext: a?.getContext,
    future: a?.future,
    history: sd({ window: a?.window }),
    hydrationData: y0(),
    routes: e,
    mapRouteProperties: Ju,
    hydrationRouteProperties: Gu,
    dataStrategy: a?.dataStrategy,
    patchRoutesOnNavigation: a?.patchRoutesOnNavigation,
    window: a?.window,
    unstable_instrumentations: a?.unstable_instrumentations
  }).initialize();
}
function y0() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: v0(e.errors)
  }), e;
}
function v0(e) {
  if (!e) return null;
  let a = Object.entries(e), t = {};
  for (let [n, r] of a)
    if (r && r.__type === "RouteErrorResponse")
      t[n] = new ln(
        r.status,
        r.statusText,
        r.data,
        r.internal === !0
      );
    else if (r && r.__type === "Error") {
      if (r.__subType) {
        let f = window[r.__subType];
        if (typeof f == "function")
          try {
            let i = new f(r.message);
            i.stack = "", t[n] = i;
          } catch {
          }
      }
      if (t[n] == null) {
        let f = new Error(r.message);
        f.stack = "", t[n] = f;
      }
    } else
      t[n] = r;
  return t;
}
var jl = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, mn = Ka(
  function({
    onClick: a,
    discover: t = "render",
    prefetch: n = "none",
    relative: r,
    reloadDocument: f,
    replace: i,
    state: o,
    target: s,
    to: c,
    preventScrollReset: d,
    viewTransition: u,
    unstable_defaultShouldRevalidate: m,
    ...g
  }, b) {
    let { basename: p, unstable_useTransitions: M } = Z(na), L = typeof c == "string" && jl.test(c), C = nl(c, p);
    c = C.to;
    let I = ju(c, { relative: r }), [R, z, T] = u0(
      n,
      g
    ), y = j0(c, {
      replace: i,
      state: o,
      target: s,
      preventScrollReset: d,
      relative: r,
      viewTransition: u,
      unstable_defaultShouldRevalidate: m,
      unstable_useTransitions: M
    });
    function N(q) {
      a && a(q), q.defaultPrevented || y(q);
    }
    let U = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ x(
        "a",
        {
          ...g,
          ...T,
          href: C.absoluteURL || I,
          onClick: C.isExternal || f ? a : N,
          ref: b0(b, z),
          target: s,
          "data-discover": !L && t === "render" ? "true" : void 0
        }
      )
    );
    return R && !L ? /* @__PURE__ */ x(ha, null, U, /* @__PURE__ */ x(m0, { page: I })) : U;
  }
);
mn.displayName = "Link";
var M0 = Ka(
  function({
    "aria-current": a = "page",
    caseSensitive: t = !1,
    className: n = "",
    end: r = !1,
    style: f,
    to: i,
    viewTransition: o,
    children: s,
    ...c
  }, d) {
    let u = un(i, { relative: c.relative }), m = Oa(), g = Z(cn), { navigator: b, basename: p } = Z(na), M = g != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    S0(u) && o === !0, L = b.encodeLocation ? b.encodeLocation(u).pathname : u.pathname, C = m.pathname, I = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
    t || (C = C.toLowerCase(), I = I ? I.toLowerCase() : null, L = L.toLowerCase()), I && p && (I = aa(I, p) || I);
    const R = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let z = C === L || !r && C.startsWith(L) && C.charAt(R) === "/", T = I != null && (I === L || !r && I.startsWith(L) && I.charAt(L.length) === "/"), y = {
      isActive: z,
      isPending: T,
      isTransitioning: M
    }, N = z ? a : void 0, U;
    typeof n == "function" ? U = n(y) : U = [
      n,
      z ? "active" : null,
      T ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let q = typeof f == "function" ? f(y) : f;
    return /* @__PURE__ */ x(
      mn,
      {
        ...c,
        "aria-current": N,
        className: U,
        ref: d,
        style: q,
        to: i,
        viewTransition: o
      },
      typeof s == "function" ? s(y) : s
    );
  }
);
M0.displayName = "NavLink";
var L0 = Ka(
  ({
    discover: e = "render",
    fetcherKey: a,
    navigate: t,
    reloadDocument: n,
    replace: r,
    state: f,
    method: i = On,
    action: o,
    onSubmit: s,
    relative: c,
    preventScrollReset: d,
    viewTransition: u,
    unstable_defaultShouldRevalidate: m,
    ...g
  }, b) => {
    let { unstable_useTransitions: p } = Z(na), M = N0(), L = I0(o, { relative: c }), C = i.toLowerCase() === "get" ? "get" : "post", I = typeof o == "string" && jl.test(o);
    return /* @__PURE__ */ x(
      "form",
      {
        ref: b,
        method: C,
        action: L,
        onSubmit: n ? s : (z) => {
          if (s && s(z), z.defaultPrevented) return;
          z.preventDefault();
          let T = z.nativeEvent.submitter, y = T?.getAttribute("formmethod") || i, N = () => M(T || z.currentTarget, {
            fetcherKey: a,
            method: y,
            navigate: t,
            replace: r,
            state: f,
            relative: c,
            preventScrollReset: d,
            viewTransition: u,
            unstable_defaultShouldRevalidate: m
          });
          p && t !== !1 ? Zt(() => N()) : N();
        },
        ...g,
        "data-discover": !I && e === "render" ? "true" : void 0
      }
    );
  }
);
L0.displayName = "Form";
function C0(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xl(e) {
  let a = Z(Xa);
  return ie(a, C0(e)), a;
}
function j0(e, {
  target: a,
  replace: t,
  state: n,
  preventScrollReset: r,
  relative: f,
  viewTransition: i,
  unstable_defaultShouldRevalidate: o,
  unstable_useTransitions: s
} = {}) {
  let c = wf(), d = Oa(), u = un(e, { relative: f });
  return ze(
    (m) => {
      if (qu(m, a)) {
        m.preventDefault();
        let g = t !== void 0 ? t : ba(d) === ba(u), b = () => c(e, {
          replace: g,
          state: n,
          preventScrollReset: r,
          relative: f,
          viewTransition: i,
          unstable_defaultShouldRevalidate: o
        });
        s ? Zt(() => b()) : b();
      }
    },
    [
      d,
      c,
      u,
      t,
      n,
      a,
      e,
      r,
      f,
      i,
      o,
      s
    ]
  );
}
var x0 = 0, k0 = () => `__${String(++x0)}__`;
function N0() {
  let { router: e } = xl(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = Z(na), t = Ru(), n = e.fetch, r = e.navigate;
  return ze(
    async (f, i = {}) => {
      let { action: o, method: s, encType: c, formData: d, body: u } = t0(
        f,
        a
      );
      if (i.navigate === !1) {
        let m = i.fetcherKey || k0();
        await n(m, t, i.action || o, {
          unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: d,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || c,
          flushSync: i.flushSync
        });
      } else
        await r(i.action || o, {
          unstable_defaultShouldRevalidate: i.unstable_defaultShouldRevalidate,
          preventScrollReset: i.preventScrollReset,
          formData: d,
          body: u,
          formMethod: i.method || s,
          formEncType: i.encType || c,
          replace: i.replace,
          state: i.state,
          fromRouteId: t,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition
        });
    },
    [n, r, a, t]
  );
}
function I0(e, { relative: a } = {}) {
  let { basename: t } = Z(na), n = Z(ya);
  ie(n, "useFormAction must be used inside a RouteContext");
  let [r] = n.matches.slice(-1), f = { ...un(e || ".", { relative: a }) }, i = Oa();
  if (e == null) {
    f.search = i.search;
    let o = new URLSearchParams(f.search), s = o.getAll("index");
    if (s.some((d) => d === "")) {
      o.delete("index"), s.filter((u) => u).forEach((u) => o.append("index", u));
      let d = o.toString();
      f.search = d ? `?${d}` : "";
    }
  }
  return (!e || e === ".") && r.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), t !== "/" && (f.pathname = f.pathname === "/" ? t : ma([t, f.pathname])), ba(f);
}
function S0(e, { relative: a } = {}) {
  let t = Z(hf);
  ie(
    t != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = xl(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), r = un(e, { relative: a });
  if (!t.isTransitioning)
    return !1;
  let f = aa(t.currentLocation.pathname, n) || t.currentLocation.pathname, i = aa(t.nextLocation.pathname, n) || t.nextLocation.pathname;
  return Fn(r.pathname, i) != null || Fn(r.pathname, f) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), z0 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (a, t, n) => n ? n.toUpperCase() : t.toLowerCase()
), Ki = (e) => {
  const a = z0(e);
  return a.charAt(0).toUpperCase() + a.slice(1);
}, kl = (...e) => e.filter((a, t, n) => !!a && a.trim() !== "" && n.indexOf(a) === t).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var T0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = Ka(
  ({
    color: e = "currentColor",
    size: a = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: n,
    className: r = "",
    children: f,
    iconNode: i,
    ...o
  }, s) => x(
    "svg",
    {
      ref: s,
      ...T0,
      width: a,
      height: a,
      stroke: e,
      strokeWidth: n ? Number(t) * 24 / Number(a) : t,
      className: kl("lucide", r),
      ...o
    },
    [
      ...i.map(([c, d]) => x(c, d)),
      ...Array.isArray(f) ? f : [f]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = (e, a) => {
  const t = Ka(
    ({ className: n, ...r }, f) => x(E0, {
      ref: f,
      iconNode: a,
      className: kl(
        `lucide-${D0(Ki(e))}`,
        `lucide-${e}`,
        n
      ),
      ...r
    })
  );
  return t.displayName = Ki(e), t;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Kt = te("arrow-left", A0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], R0 = te("arrow-right", P0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Y0 = te("bell", O0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Nl = te("calendar", U0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
], Lf = te("camera", Q0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], Xi = te("check-check", B0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Vr = te("check", J0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], _0 = te("chevron-down", G0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], F0 = te("chevron-left", W0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Un = te("chevron-right", Z0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], qi = te("circle-alert", H0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Pt = te("circle-check", V0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
], eo = te("circle-dot", $0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], X0 = te("circle-user", K0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
], e1 = te("delete", q0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
], Il = te("ellipsis-vertical", a1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }]
], ao = te("grid-2x2", t1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
], r1 = te("grid-3x3", n1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], i1 = te("heart", f1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], l1 = te("image", o1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], c1 = te("link", s1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], u1 = te("message-circle", d1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
], Zn = te("message-square", m1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
], h1 = te("moon", g1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = [
  ["path", { d: "M13.234 20.252 21 12.3", key: "1cbrk9" }],
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",
      key: "1pkts6"
    }
  ]
], w1 = te("paperclip", b1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], wa = te("phone", p1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], v1 = te("play", y1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Hn = te("plus", M1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], C1 = te("rotate-ccw", L1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], Cf = te("search", j1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], k1 = te("send", x1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
], Sl = te("smile", N1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
], S1 = te("sparkles", I1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], z1 = te("square", D1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], E1 = te("star", T1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], P1 = te("sun", A1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
], O1 = te("type", R1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
], Dl = te("user-plus", Y1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], wt = te("video", U1);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Aa = te("x", Q1), Ha = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    lastMessage: "See you tomorrow! 😊",
    timestamp: new Date(Date.now() - 5 * 6e4),
    unreadCount: 2,
    online: !0
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    lastMessage: "Thanks for the update",
    timestamp: new Date(Date.now() - 30 * 6e4),
    unreadCount: 0,
    online: !0,
    typing: !1
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    lastMessage: "Let me check and get back to you",
    timestamp: new Date(Date.now() - 120 * 6e4),
    unreadCount: 0
  },
  {
    id: "4",
    name: "Design Team",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop",
    lastMessage: "Alex: Perfect! 👍",
    timestamp: new Date(Date.now() - 240 * 6e4),
    unreadCount: 5
  },
  {
    id: "5",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    lastMessage: "Sounds good",
    timestamp: new Date(Date.now() - 1440 * 6e4),
    unreadCount: 0
  },
  {
    id: "6",
    name: "Lisa Thompson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    lastMessage: "Can we reschedule?",
    timestamp: new Date(Date.now() - 2880 * 6e4),
    unreadCount: 0
  }
], B1 = {
  1: [
    {
      id: "1",
      text: "Hey! How are you?",
      sender: "other",
      timestamp: new Date(Date.now() - 60 * 6e4)
    },
    {
      id: "2",
      text: "I'm great! Just finished the project presentation",
      sender: "me",
      timestamp: new Date(Date.now() - 58 * 6e4),
      status: "read"
    },
    {
      id: "3",
      text: "That's awesome! How did it go?",
      sender: "other",
      timestamp: new Date(Date.now() - 55 * 6e4)
    },
    {
      id: "4",
      text: "Really well! The team loved it",
      sender: "me",
      timestamp: new Date(Date.now() - 50 * 6e4),
      status: "read"
    },
    {
      id: "5",
      text: "They want to implement it next quarter",
      sender: "me",
      timestamp: new Date(Date.now() - 50 * 6e4 + 1e3),
      status: "read"
    },
    {
      id: "6",
      text: "Congratulations! That's amazing news 🎉",
      sender: "other",
      timestamp: new Date(Date.now() - 45 * 6e4),
      reactions: ["❤️", "🎉"]
    },
    {
      id: "7",
      text: "Thanks! Want to celebrate tomorrow?",
      sender: "me",
      timestamp: new Date(Date.now() - 40 * 6e4),
      status: "read"
    },
    {
      id: "8",
      text: "Check out this beautiful sunset from my office!",
      sender: "other",
      timestamp: new Date(Date.now() - 35 * 6e4),
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBsYW5kc2NhcGUlMjBuYXR1cmV8ZW58MXx8fHwxNzc1MTgwODY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    },
    {
      id: "9",
      text: "Wow! That's stunning 😍",
      sender: "me",
      timestamp: new Date(Date.now() - 30 * 6e4),
      status: "read"
    },
    {
      id: "10",
      text: "Absolutely! How about lunch at that new place?",
      sender: "other",
      timestamp: new Date(Date.now() - 10 * 6e4)
    },
    {
      id: "11",
      text: "Perfect! 12:30 works for me",
      sender: "me",
      timestamp: new Date(Date.now() - 6 * 6e4),
      status: "read"
    },
    {
      id: "12",
      text: "See you tomorrow! 😊",
      sender: "other",
      timestamp: new Date(Date.now() - 5 * 6e4)
    }
  ],
  2: [
    {
      id: "1",
      text: "Could you send me the latest report?",
      sender: "other",
      timestamp: new Date(Date.now() - 35 * 6e4)
    },
    {
      id: "2",
      text: "Sure, I'll send it right away",
      sender: "me",
      timestamp: new Date(Date.now() - 32 * 6e4),
      status: "read"
    },
    {
      id: "3",
      text: "Thanks for the update",
      sender: "other",
      timestamp: new Date(Date.now() - 30 * 6e4)
    }
  ]
};
var J1 = (e, a, t, n, r, f, i, o) => {
  let s = document.documentElement, c = ["light", "dark"];
  function d(g) {
    (Array.isArray(e) ? e : [e]).forEach((b) => {
      let p = b === "class", M = p && f ? r.map((L) => f[L] || L) : r;
      p ? (s.classList.remove(...M), s.classList.add(f && f[g] ? f[g] : g)) : s.setAttribute(b, g);
    }), u(g);
  }
  function u(g) {
    o && c.includes(g) && (s.style.colorScheme = g);
  }
  function m() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (n) d(n);
  else try {
    let g = localStorage.getItem(a) || t, b = i && g === "system" ? m() : g;
    d(b);
  } catch {
  }
}, to = ["light", "dark"], zl = "(prefers-color-scheme: dark)", G1 = typeof window > "u", jf = je(void 0), _1 = { setTheme: (e) => {
}, themes: [] }, Tl = () => {
  var e;
  return (e = Z(jf)) != null ? e : _1;
}, W1 = (e) => Z(jf) ? x(ha, null, e.children) : x(Z1, { ...e }), F1 = ["light", "dark"], Z1 = ({ forcedTheme: e, disableTransitionOnChange: a = !1, enableSystem: t = !0, enableColorScheme: n = !0, storageKey: r = "theme", themes: f = F1, defaultTheme: i = t ? "system" : "light", attribute: o = "data-theme", value: s, children: c, nonce: d, scriptProps: u }) => {
  let [m, g] = D(() => V1(r, i)), [b, p] = D(() => m === "system" ? Dr() : m), M = s ? Object.values(s) : f, L = ze((z) => {
    let T = z;
    if (!T) return;
    z === "system" && t && (T = Dr());
    let y = s ? s[T] : T, N = a ? $1(d) : null, U = document.documentElement, q = (X) => {
      X === "class" ? (U.classList.remove(...M), y && U.classList.add(y)) : X.startsWith("data-") && (y ? U.setAttribute(X, y) : U.removeAttribute(X));
    };
    if (Array.isArray(o) ? o.forEach(q) : q(o), n) {
      let X = to.includes(i) ? i : null, O = to.includes(T) ? T : X;
      U.style.colorScheme = O;
    }
    N?.();
  }, [d]), C = ze((z) => {
    let T = typeof z == "function" ? z(m) : z;
    g(T);
    try {
      localStorage.setItem(r, T);
    } catch {
    }
  }, [m]), I = ze((z) => {
    let T = Dr(z);
    p(T), m === "system" && t && !e && L("system");
  }, [m, e]);
  fe(() => {
    let z = window.matchMedia(zl);
    return z.addListener(I), I(z), () => z.removeListener(I);
  }, [I]), fe(() => {
    let z = (T) => {
      T.key === r && (T.newValue ? g(T.newValue) : C(i));
    };
    return window.addEventListener("storage", z), () => window.removeEventListener("storage", z);
  }, [C]), fe(() => {
    L(e ?? m);
  }, [e, m]);
  let R = Pe(() => ({ theme: m, setTheme: C, forcedTheme: e, resolvedTheme: m === "system" ? b : m, themes: t ? [...f, "system"] : f, systemTheme: t ? b : void 0 }), [m, C, e, b, t, f]);
  return x(jf.Provider, { value: R }, x(H1, { forcedTheme: e, storageKey: r, attribute: o, enableSystem: t, enableColorScheme: n, defaultTheme: i, value: s, themes: f, nonce: d, scriptProps: u }), c);
}, H1 = fn(({ forcedTheme: e, storageKey: a, attribute: t, enableSystem: n, enableColorScheme: r, defaultTheme: f, value: i, themes: o, nonce: s, scriptProps: c }) => {
  let d = JSON.stringify([t, a, f, e, o, i, n, r]).slice(1, -1);
  return x("script", { ...c, suppressHydrationWarning: !0, nonce: typeof window > "u" ? s : "", dangerouslySetInnerHTML: { __html: `(${J1.toString()})(${d})` } });
}), V1 = (e, a) => {
  if (G1) return;
  let t;
  try {
    t = localStorage.getItem(e) || void 0;
  } catch {
  }
  return t || a;
}, $1 = (e) => {
  let a = document.createElement("style");
  return e && a.setAttribute("nonce", e), a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(a), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(a);
    }, 1);
  };
}, Dr = (e) => (e || (e = window.matchMedia(zl)), e.matches ? "dark" : "light");
function Qn(e) {
  const t = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(t / 6e4), r = Math.floor(t / 36e5), f = Math.floor(t / 864e5);
  return n < 1 ? "now" : n < 60 ? `${n}m` : r < 24 ? `${r}h` : f === 1 ? "yesterday" : f < 7 ? `${f}d` : e.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function K1(e) {
  return e.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  });
}
function X1(e) {
  const t = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(t / 36e5), r = Math.floor(t / 864e5);
  return n < 24 ? `Today, ${e.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  })}` : r === 1 ? `Yesterday, ${e.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  })}` : `${e.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })}, ${e.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  })}`;
}
function xf() {
  const e = Oa();
  return /* @__PURE__ */ l("nav", { className: "fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 z-40 max-w-md mx-auto", children: /* @__PURE__ */ l("div", { className: "flex items-center justify-around px-2 py-2 safe-area-inset-bottom", children: [
    { path: "/", icon: u1, label: "Chats", badge: null },
    { path: "/updates", icon: X0, label: "Stories", badge: 1 },
    { path: "/camera", icon: Lf, label: "Camera", badge: null },
    { path: "/calls", icon: wa, label: "Calls", badge: 1 }
  ].map((t) => {
    const n = e.pathname === t.path, r = t.icon;
    return /* @__PURE__ */ w(
      mn,
      {
        to: t.path,
        className: "flex flex-col items-center gap-1 flex-1 py-1 relative",
        children: [
          /* @__PURE__ */ w("div", { className: "relative", children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: `p-3 rounded-full transition-colors ${n ? "bg-red-600 dark:bg-red-600" : "bg-transparent"}`,
                children: /* @__PURE__ */ l(
                  r,
                  {
                    className: `w-6 h-6 ${n ? "text-white" : "text-zinc-600 dark:text-zinc-400"}`
                  }
                )
              }
            ),
            t.badge && /* @__PURE__ */ l("span", { className: "absolute -top-1 -right-1 w-5 h-5 bg-red-600 dark:bg-red-600 text-white text-xs font-medium rounded-full flex items-center justify-center", children: t.badge })
          ] }),
          /* @__PURE__ */ l(
            "span",
            {
              className: `text-xs font-medium ${n ? "text-zinc-900 dark:text-zinc-50" : "text-zinc-600 dark:text-zinc-400"}`,
              children: t.label
            }
          )
        ]
      },
      t.path
    );
  }) }) });
}
const gn = globalThis.__GLOBALS__.getAssetURL("49f2a8d3a5f70a32868fa8c05a682eae93defa59.png");
function q1() {
  const { theme: e, setTheme: a } = Tl();
  return /* @__PURE__ */ w("div", { className: "h-screen flex flex-col bg-zinc-50 dark:bg-black pb-20", children: [
    /* @__PURE__ */ w("div", { className: "flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l("img", { src: gn, alt: "Wave Chat", className: "w-10 h-10 object-contain drop-shadow-lg" }),
        /* @__PURE__ */ l("h1", { className: "text-xl font-semibold text-zinc-900 dark:text-zinc-50", children: "Wave Chat" })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => a(e === "dark" ? "light" : "dark"),
          className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
          "aria-label": "Toggle theme",
          children: e === "dark" ? /* @__PURE__ */ l(P1, { className: "w-5 h-5 text-red-500" }) : /* @__PURE__ */ l(h1, { className: "w-5 h-5 text-zinc-600" })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950", children: /* @__PURE__ */ w("div", { className: "relative", children: [
      /* @__PURE__ */ l(Cf, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" }),
      /* @__PURE__ */ l(
        "input",
        {
          type: "text",
          placeholder: "Search conversations",
          className: "w-full pl-10 pr-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        }
      )
    ] }) }),
    /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto bg-white dark:bg-zinc-950", children: Ha.map((t) => /* @__PURE__ */ w(
      mn,
      {
        to: `/chat/${t.id}`,
        className: "flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 active:bg-zinc-100 dark:active:bg-zinc-800 transition-colors border-b border-zinc-100 dark:border-zinc-900",
        children: [
          /* @__PURE__ */ w("div", { className: "relative flex-shrink-0", children: [
            /* @__PURE__ */ l(
              "img",
              {
                src: t.avatar,
                alt: t.name,
                className: "w-12 h-12 rounded-full object-cover"
              }
            ),
            t.online && /* @__PURE__ */ l("div", { className: "absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950" })
          ] }),
          /* @__PURE__ */ w("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ w("div", { className: "flex items-baseline justify-between gap-2 mb-0.5", children: [
              /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-50 truncate", children: t.name }),
              /* @__PURE__ */ l("span", { className: "text-xs text-zinc-500 dark:text-zinc-400 flex-shrink-0", children: Qn(t.timestamp) })
            ] }),
            /* @__PURE__ */ w("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-600 dark:text-zinc-400 truncate flex-1", children: t.typing ? /* @__PURE__ */ l("span", { className: "italic text-red-500", children: "typing..." }) : t.lastMessage }),
              t.unreadCount > 0 && /* @__PURE__ */ l("span", { className: "flex-shrink-0 min-w-[20px] h-5 px-1.5 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center", children: t.unreadCount })
            ] })
          ] })
        ]
      },
      t.id
    )) }),
    /* @__PURE__ */ l(xf, {})
  ] });
}
function em({ message: e, showAvatar: a, avatar: t, isGroupStart: n, isGroupEnd: r }) {
  const f = e.sender === "me", [i, o] = D(!1);
  return /* @__PURE__ */ w("div", { className: `flex gap-2 ${f ? "justify-end" : "justify-start"} ${n ? "mt-3" : "mt-0.5"}`, children: [
    !f && /* @__PURE__ */ l("div", { className: "w-6 flex-shrink-0", children: a && t && /* @__PURE__ */ l(
      "img",
      {
        src: t,
        alt: "Avatar",
        className: "w-6 h-6 rounded-full object-cover"
      }
    ) }),
    /* @__PURE__ */ w("div", { className: `flex flex-col ${f ? "items-end" : "items-start"} max-w-[75%]`, children: [
      /* @__PURE__ */ w(
        "div",
        {
          className: `shadow-sm overflow-hidden ${f ? "bg-red-600 text-white rounded-2xl rounded-tr-sm" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-2xl rounded-tl-sm"} ${!n && f ? "rounded-tr-2xl" : ""} ${!n && !f ? "rounded-tl-2xl" : ""} ${!r && f ? "rounded-br-sm" : ""} ${!r && !f ? "rounded-bl-sm" : ""}`,
          children: [
            e.media && /* @__PURE__ */ l("div", { className: "relative", children: e.media.type === "image" ? /* @__PURE__ */ l(
              "img",
              {
                src: e.media.url,
                alt: "Shared image",
                className: "max-w-full h-auto max-h-64 object-cover cursor-pointer",
                onClick: () => window.open(e.media.url, "_blank")
              }
            ) : /* @__PURE__ */ w(
              "div",
              {
                className: "relative cursor-pointer group",
                onMouseEnter: () => o(!0),
                onMouseLeave: () => o(!1),
                children: [
                  /* @__PURE__ */ l(
                    "video",
                    {
                      src: e.media.url,
                      controls: i,
                      className: "max-w-full h-auto max-h-64 object-cover",
                      preload: "metadata"
                    }
                  ),
                  !i && /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20", children: /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-white/90 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(v1, { className: "w-6 h-6 text-zinc-900 ml-0.5", fill: "currentColor" }) }) })
                ]
              }
            ) }),
            e.text && /* @__PURE__ */ l("div", { className: "px-3 py-2", children: /* @__PURE__ */ l("p", { className: "text-sm leading-relaxed break-words", children: e.text }) }),
            e.reactions && e.reactions.length > 0 && /* @__PURE__ */ l("div", { className: "flex gap-1 px-3 pb-2 -mt-1", children: e.reactions.map((s, c) => /* @__PURE__ */ l("span", { className: "text-xs", children: s }, c)) })
          ]
        }
      ),
      r && /* @__PURE__ */ w("div", { className: "flex items-center gap-1 mt-0.5 px-1", children: [
        /* @__PURE__ */ l("span", { className: "text-[10px] text-zinc-500 dark:text-zinc-400", children: K1(e.timestamp) }),
        f && e.status && /* @__PURE__ */ l("span", { className: "text-zinc-500 dark:text-zinc-400", children: e.status === "read" ? /* @__PURE__ */ l(Xi, { className: "w-3 h-3 text-blue-500" }) : e.status === "delivered" ? /* @__PURE__ */ l(Xi, { className: "w-3 h-3" }) : /* @__PURE__ */ l(Vr, { className: "w-3 h-3" }) })
      ] })
    ] })
  ] });
}
function $r(e) {
  return [].concat(e);
}
function kf(e) {
  return e.startsWith(":");
}
function El(e) {
  return nr(e) && (e === "*" || e.length > 1 && ":>~.+*".includes(e.slice(0, 1)) || Ol(e));
}
function Al(e, a) {
  return (nr(a) || typeof a == "number") && !Rl(e) && !kf(e) && !Pl(e);
}
function Pl(e) {
  return e.startsWith("@media");
}
function am(e) {
  return e === ".";
}
function Rl(e) {
  return e === "--";
}
function nr(e) {
  return e + "" === e;
}
function Ol(e) {
  return nr(e) && (e.startsWith("&") || kf(e));
}
function Vn(e, a = "") {
  return e.filter(Boolean).join(a);
}
function Yl(e, a) {
  let t = 0;
  if (a.length === 0)
    return t.toString();
  for (let n = 0; n < a.length; n++) {
    const r = a.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return `${e ?? "cl"}_${t.toString(36)}`;
}
function tm(e, a) {
  return e === "content" ? `"${a}"` : a;
}
function nm(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function no(e, a) {
  return `${e}:${a}`;
}
function rm(e) {
  return e ? `.${e}` : "";
}
function fm(e, a) {
  return e ? `${e}
${a}` : a;
}
var Ul = class Ql {
  constructor(a, t, n, r) {
    this.sheet = a, this.property = t, this.value = n, this.selector = r, this.property = t, this.value = n, this.joined = no(t, n);
    const f = this.selector.preconditions.concat(
      this.selector.postconditions
    );
    this.hash = this.selector.hasConditions ? this.selector.scopeClassName : Yl(this.sheet.name, this.joined), this.key = Vn([this.joined, f, this.hash]);
  }
  toString() {
    let a = Kr(this.selector.preconditions, {
      right: this.hash
    });
    return a = Kr(this.selector.postconditions, {
      left: a
    }), `${a} {${Ql.genRule(this.property, this.value)}}`;
  }
  static genRule(a, t) {
    const n = nm(a);
    return no(
      n,
      tm(a, t)
    ) + ";";
  }
};
function Kr(e, { left: a = "", right: t = "" } = {}) {
  const n = e.reduce((r, f) => kf(f) ? r + f : Ol(f) ? r + f.slice(1) : Vn([r, f], " "), a);
  return Vn([n, rm(t)], " ");
}
var im = class Bn {
  constructor(a, t = null, {
    preconditions: n,
    postconditions: r
  } = {}) {
    this.sheet = a, this.preconditions = [], this.scopeClassName = null, this.scopeName = null, this.postconditions = [], this.preconditions = n ? $r(n) : [], this.postconditions = r ? $r(r) : [], this.setScope(t);
  }
  setScope(a) {
    return a ? (this.scopeClassName || (this.scopeName = a, this.scopeClassName = Yl(
      this.sheet.name,
      // adding the count guarantees uniqueness across style.create calls
      a + this.sheet.count
    )), this) : this;
  }
  get hasConditions() {
    return this.preconditions.length > 0 || this.postconditions.length > 0;
  }
  addScope(a) {
    return new Bn(this.sheet, a, {
      preconditions: this.preconditions,
      postconditions: this.postconditions
    });
  }
  addPrecondition(a) {
    return new Bn(this.sheet, this.scopeClassName, {
      postconditions: this.postconditions,
      preconditions: this.preconditions.concat(a)
    });
  }
  addPostcondition(a) {
    return new Bn(this.sheet, this.scopeClassName, {
      preconditions: this.preconditions,
      postconditions: this.postconditions.concat(a)
    });
  }
  createRule(a, t) {
    return new Ul(this.sheet, a, t, this);
  }
}, om = class {
  constructor(e, a) {
    this.name = e, this.rootNode = a, this.storedStyles = {}, this.storedClasses = {}, this.style = "", this.count = 0, this.id = `flairup-${e}`, this.styleTag = this.createStyleTag();
  }
  getStyle() {
    return this.style;
  }
  append(e) {
    this.style = fm(this.style, e);
  }
  apply() {
    this.count++, this.styleTag && (this.styleTag.innerHTML = this.style);
  }
  isApplied() {
    return !!this.styleTag;
  }
  createStyleTag() {
    if (typeof document > "u" || this.isApplied() || // Explicitly disallow mounting to the DOM
    this.rootNode === null)
      return this.styleTag;
    const e = document.createElement("style");
    return e.type = "text/css", e.id = this.id, (this.rootNode ?? document.head).appendChild(e), e;
  }
  addRule(e) {
    const a = this.storedClasses[e.key];
    return nr(a) ? a : (this.storedClasses[e.key] = e.hash, this.storedStyles[e.hash] = [e.property, e.value], this.append(e.toString()), e.hash);
  }
};
function Nf(e, a) {
  for (const t in e)
    a(t.trim(), e[t]);
}
function oe(...e) {
  const a = e.reduce((t, n) => (n instanceof Set ? t.push(...n) : typeof n == "string" ? t.push(n) : Array.isArray(n) ? t.push(oe(...n)) : typeof n == "object" && Object.entries(n).forEach(([r, f]) => {
    f && t.push(r);
  }), t), []);
  return Vn(a, " ").trim();
}
function lm(e, a) {
  const t = new om(e, a);
  return {
    create: n,
    getStyle: t.getStyle.bind(t),
    isApplied: t.isApplied.bind(t)
  };
  function n(r) {
    const f = {};
    return Bl(t, r, new im(t)).forEach(
      ([o, s, c]) => {
        rr(t, s, c).forEach(
          (d) => {
            i(o, d);
          }
        );
      }
    ), t.apply(), f;
    function i(o, s) {
      f[o] = f[o] ?? /* @__PURE__ */ new Set(), f[o].add(s);
    }
  }
}
function Bl(e, a, t) {
  const n = [];
  return Nf(a, (r, f) => {
    if (El(r))
      return Bl(
        e,
        f,
        t.addPrecondition(r)
      ).forEach((i) => n.push(i));
    n.push([r, a[r], t.addScope(r)]);
  }), n;
}
function rr(e, a, t) {
  const n = /* @__PURE__ */ new Set();
  return Nf(a, (r, f) => {
    let i = [];
    if (El(r))
      i = rr(
        e,
        f,
        t.addPostcondition(r)
      );
    else if (am(r))
      i = $r(f);
    else if (Pl(r))
      i = cm(e, f, r, t);
    else if (Rl(r))
      i = sm(e, f, t);
    else if (Al(r, f)) {
      const o = t.createRule(r, f);
      e.addRule(o), n.add(o.hash);
    }
    return Jl(i, n);
  }), n;
}
function Jl(e, a) {
  return e.forEach((t) => a.add(t)), a;
}
function sm(e, a, t) {
  const n = /* @__PURE__ */ new Set(), r = [];
  if (Nf(a, (f, i) => {
    if (Al(f, i)) {
      r.push(Ul.genRule(f, i));
      return;
    }
    const o = rr(e, i ?? {}, t);
    Jl(o, n);
  }), !t.scopeClassName)
    return n;
  if (r.length) {
    const f = r.join(" ");
    e.append(
      `${Kr(t.preconditions, {
        right: t.scopeClassName
      })} {${f}}`
    );
  }
  return n.add(t.scopeClassName), n;
}
function cm(e, a, t, n) {
  e.append(t + " {");
  const r = rr(e, a, n);
  return e.append("}"), r;
}
function ro(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var t = 0, n = Array(a); t < a; t++) n[t] = e[t];
  return n;
}
function dm(e, a) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t) return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = mm(e)) || a) {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ve.apply(null, arguments);
}
function um(e, a) {
  e.prototype = Object.create(a.prototype), e.prototype.constructor = e, Xr(e, a);
}
function Gl(e, a) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (a.indexOf(n) !== -1) continue;
    t[n] = e[n];
  }
  return t;
}
function Xr(e, a) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Xr(e, a);
}
function mm(e, a) {
  if (e) {
    if (typeof e == "string") return ro(e, a);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ro(e, a) : void 0;
  }
}
var se;
(function(e) {
  e.hiddenOnSearch = "epr-hidden-on-search", e.searchActive = "epr-search-active", e.hidden = "epr-hidden", e.visible = "epr-visible", e.active = "epr-active", e.emoji = "epr-emoji", e.category = "epr-emoji-category", e.label = "epr-emoji-category-label", e.categoryContent = "epr-emoji-category-content", e.emojiHasVariations = "epr-emoji-has-variations", e.scrollBody = "epr-body", e.emojiList = "epr-emoji-list", e.external = "__EmojiPicker__", e.emojiPicker = "EmojiPickerReact", e.open = "epr-open", e.vertical = "epr-vertical", e.horizontal = "epr-horizontal", e.variationPicker = "epr-emoji-variation-picker", e.darkTheme = "epr-dark-theme", e.autoTheme = "epr-auto-theme";
})(se || (se = {}));
function ta() {
  for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++)
    a[t] = arguments[t];
  return a.map(function(n) {
    return "." + n;
  }).join("");
}
var xe = /* @__PURE__ */ lm("epr", null), Jn = {
  display: "none",
  opacity: "0",
  pointerEvents: "none",
  visibility: "hidden",
  overflow: "hidden"
}, If = /* @__PURE__ */ xe.create({
  hidden: /* @__PURE__ */ ve({
    ".": se.hidden
  }, Jn)
}), gm = /* @__PURE__ */ fn(function() {
  return x("style", {
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: xe.getStyle()
    }
  });
}), qa = /* @__PURE__ */ xe.create({
  ".epr-main": {
    ":has(input:not(:placeholder-shown))": {
      categoryBtn: {
        ":hover": {
          opacity: "1",
          backgroundPositionY: "var(--epr-category-navigation-button-size)"
        }
      },
      hiddenOnSearch: /* @__PURE__ */ ve({
        ".": se.hiddenOnSearch
      }, Jn)
    },
    ":has(input:placeholder-shown)": {
      visibleOnSearchOnly: Jn
    }
  },
  hiddenOnReactions: {
    transition: "all 0.5s ease-in-out"
  },
  ".epr-reactions": {
    hiddenOnReactions: {
      height: "0px",
      width: "0px",
      opacity: "0",
      pointerEvents: "none",
      overflow: "hidden"
    }
  },
  ".EmojiPickerReact:not(.epr-search-active)": {
    categoryBtn: {
      ":hover": {
        opacity: "1",
        backgroundPositionY: "var(--epr-category-navigation-button-size)"
      },
      "&.epr-active": {
        opacity: "1",
        backgroundPositionY: "var(--epr-category-navigation-button-size)"
      }
    },
    visibleOnSearchOnly: /* @__PURE__ */ ve({
      ".": "epr-visible-on-search-only"
    }, Jn)
  }
});
function Pa(e, a) {
  var t, n;
  return {
    ".epr-dark-theme": (t = {}, t[e] = a, t),
    ".epr-auto-theme": (n = {}, n[e] = {
      "@media (prefers-color-scheme: dark)": a
    }, n)
  };
}
function _l(e, a) {
  var t, n, r = (t = e.customEmojis) != null ? t : [], f = (n = a.customEmojis) != null ? n : [];
  return e.open === a.open && e.emojiVersion === a.emojiVersion && e.reactionsDefaultOpen === a.reactionsDefaultOpen && e.searchPlaceHolder === a.searchPlaceHolder && e.searchPlaceholder === a.searchPlaceholder && e.searchClearButtonLabel === a.searchClearButtonLabel && e.defaultSkinTone === a.defaultSkinTone && e.skinTonesDisabled === a.skinTonesDisabled && e.autoFocusSearch === a.autoFocusSearch && e.emojiStyle === a.emojiStyle && e.theme === a.theme && e.suggestedEmojisMode === a.suggestedEmojisMode && e.lazyLoadEmojis === a.lazyLoadEmojis && e.className === a.className && e.height === a.height && e.width === a.width && e.style === a.style && e.searchDisabled === a.searchDisabled && e.skinTonePickerLocation === a.skinTonePickerLocation && r.length === f.length && e.emojiData === a.emojiData;
}
var hm = ["1f44d", "2764-fe0f", "1f603", "1f622", "1f64f", "1f44e", "1f621"], Xt;
(function(e) {
  e.RECENT = "recent", e.FREQUENT = "frequent";
})(Xt || (Xt = {}));
var Fe;
(function(e) {
  e.NATIVE = "native", e.APPLE = "apple", e.TWITTER = "twitter", e.GOOGLE = "google", e.FACEBOOK = "facebook";
})(Fe || (Fe = {}));
var Va;
(function(e) {
  e.DARK = "dark", e.LIGHT = "light", e.AUTO = "auto";
})(Va || (Va = {}));
var ra;
(function(e) {
  e.NEUTRAL = "neutral", e.LIGHT = "1f3fb", e.MEDIUM_LIGHT = "1f3fc", e.MEDIUM = "1f3fd", e.MEDIUM_DARK = "1f3fe", e.DARK = "1f3ff";
})(ra || (ra = {}));
var re;
(function(e) {
  e.SUGGESTED = "suggested", e.CUSTOM = "custom", e.SMILEYS_PEOPLE = "smileys_people", e.ANIMALS_NATURE = "animals_nature", e.FOOD_DRINK = "food_drink", e.TRAVEL_PLACES = "travel_places", e.ACTIVITIES = "activities", e.OBJECTS = "objects", e.SYMBOLS = "symbols", e.FLAGS = "flags";
})(re || (re = {}));
var pt;
(function(e) {
  e.SEARCH = "SEARCH", e.PREVIEW = "PREVIEW";
})(pt || (pt = {}));
var bm = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/", wm = "https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/", pm = "https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/", ym = "https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";
function vm(e) {
  switch (e) {
    case Fe.TWITTER:
      return pm;
    case Fe.GOOGLE:
      return ym;
    case Fe.FACEBOOK:
      return wm;
    case Fe.APPLE:
    default:
      return bm;
  }
}
var $n = [ra.NEUTRAL, ra.LIGHT, ra.MEDIUM_LIGHT, ra.MEDIUM, ra.MEDIUM_DARK, ra.DARK], Mm = /* @__PURE__ */ Object.entries(ra).reduce(function(e, a) {
  var t = a[0], n = a[1];
  return e[n] = t, e;
}, {}), Sf = /* @__PURE__ */ $n.reduce(function(e, a) {
  var t;
  return Object.assign(e, (t = {}, t[a] = a, t));
}, {}), Re;
(function(e) {
  e.name = "n", e.unified = "u", e.variations = "v", e.added_in = "a", e.imgUrl = "imgUrl";
})(Re || (Re = {}));
function Wl(e) {
  var a;
  return (a = e[Re.name]) != null ? a : [];
}
function Lm(e) {
  return parseFloat(e[Re.added_in] || "0");
}
function Cm(e) {
  if (!e)
    return "";
  var a = Wl(e);
  return a[a.length - 1];
}
function Fl(e) {
  var a = e.split("-"), t = a.splice(1, 1), n = t[0];
  return Sf[n] ? a.join("-") : e;
}
function et(e, a) {
  var t, n = e[Re.unified];
  return !a || !jm(e) ? n : (t = xm(e, a)) != null ? t : n;
}
function Zl(e, a) {
  return "" + vm(a) + e + ".png";
}
function Df(e) {
  var a;
  return (a = e[Re.variations]) != null ? a : [];
}
function jm(e) {
  return Df(e).length > 0;
}
function xm(e, a) {
  return a ? Df(e).find(function(t) {
    return t.includes(a);
  }) : et(e);
}
function km(e) {
  var a = e.split("-"), t = a[1];
  return Object.keys(Sf).includes(t) ? t : null;
}
var qe, Nm = [re.SUGGESTED, re.CUSTOM, re.SMILEYS_PEOPLE, re.ANIMALS_NATURE, re.FOOD_DRINK, re.TRAVEL_PLACES, re.ACTIVITIES, re.OBJECTS, re.SYMBOLS, re.FLAGS], Im = {
  name: "Recently Used",
  category: re.SUGGESTED
}, Hl = (qe = {}, qe[re.SUGGESTED] = {
  category: re.SUGGESTED,
  name: "Frequently Used"
}, qe[re.CUSTOM] = {
  category: re.CUSTOM,
  name: "Custom Emojis"
}, qe[re.SMILEYS_PEOPLE] = {
  category: re.SMILEYS_PEOPLE,
  name: "Smileys & People"
}, qe[re.ANIMALS_NATURE] = {
  category: re.ANIMALS_NATURE,
  name: "Animals & Nature"
}, qe[re.FOOD_DRINK] = {
  category: re.FOOD_DRINK,
  name: "Food & Drink"
}, qe[re.TRAVEL_PLACES] = {
  category: re.TRAVEL_PLACES,
  name: "Travel & Places"
}, qe[re.ACTIVITIES] = {
  category: re.ACTIVITIES,
  name: "Activities"
}, qe[re.OBJECTS] = {
  category: re.OBJECTS,
  name: "Objects"
}, qe[re.SYMBOLS] = {
  category: re.SYMBOLS,
  name: "Symbols"
}, qe[re.FLAGS] = {
  category: re.FLAGS,
  name: "Flags"
}, qe);
function Vl(e) {
  return Nm.map(function(a) {
    return ve({}, Hl[a], e && e[a] && e[a]);
  });
}
function fr(e) {
  return e.category;
}
function $l(e) {
  return e.name;
}
function Sm(e, a, t) {
  var n;
  e === void 0 && (e = []), a === void 0 && (a = {});
  var r = (function() {
    var i = t != null && t.categories ? Object.fromEntries(Object.entries(t.categories).filter(function(c) {
      var d = c[1];
      return !!d;
    })) : {};
    if (a.suggestionMode === Xt.RECENT) {
      var o, s = t == null || (o = t.categories) == null ? void 0 : o.suggested_recent;
      i[re.SUGGESTED] = s ? {
        category: re.SUGGESTED,
        name: s.name
      } : Im;
    }
    return i;
  })(), f = Vl(r);
  return (n = e) != null && n.length ? e.map(function(i) {
    return typeof i == "string" ? fo(i, r[i]) : ve({}, fo(i.category, r[i.category]), i);
  }) : f;
}
function fo(e, a) {
  return a === void 0 && (a = {}), Object.assign(Hl[e], a);
}
var Dm = ["2640-fe0f", "2642-fe0f", "2695-fe0f"], Kn = "Search", Kl = "Clear", zm = "No results found", Xl = " found. Use up and down arrow keys to navigate.", Tm = "1 result" + Xl, Em = "%n results" + Xl;
function io(e) {
  var a, t, n, r, f;
  e === void 0 && (e = {});
  var i = ql(), o = (a = e.emojiData) == null || (t = a.categories) == null || (n = t.preview_mood) == null ? void 0 : n.name, s = ve({}, i.previewConfig, o && !((r = e.previewConfig) != null && r.defaultCaption) ? {
    defaultCaption: o
  } : {}, (f = e.previewConfig) != null ? f : {}), c = Object.assign(i, e), d = Sm(e.categories, {
    suggestionMode: c.suggestedEmojisMode
  }, e.emojiData);
  c.hiddenEmojis.forEach(function(m) {
    c.unicodeToHide.add(m);
  });
  var u = c.searchDisabled ? pt.PREVIEW : c.skinTonePickerLocation;
  return ve({}, c, {
    categories: d,
    previewConfig: s,
    skinTonePickerLocation: u
  });
}
function ql() {
  return {
    autoFocusSearch: !0,
    categories: Vl(),
    className: "",
    customEmojis: [],
    defaultSkinTone: ra.NEUTRAL,
    emojiStyle: Fe.APPLE,
    emojiVersion: null,
    getEmojiUrl: Zl,
    height: 450,
    lazyLoadEmojis: !1,
    previewConfig: ve({}, Am),
    searchDisabled: !1,
    searchPlaceHolder: Kn,
    searchPlaceholder: Kn,
    searchClearButtonLabel: Kl,
    skinTonePickerLocation: pt.SEARCH,
    skinTonesDisabled: !1,
    style: {},
    suggestedEmojisMode: Xt.FREQUENT,
    theme: Va.LIGHT,
    unicodeToHide: new Set(Dm),
    width: 350,
    reactionsDefaultOpen: !1,
    reactions: hm,
    open: !0,
    allowExpandReactions: !0,
    hiddenEmojis: [],
    emojiData: void 0,
    categoryIcons: {}
  };
}
var Am = {
  defaultEmoji: "1f60a",
  defaultCaption: "What's your mood?",
  showPreview: !0
}, Pm = ["children"], es = /* @__PURE__ */ je(/* @__PURE__ */ ql());
function Rm(e) {
  var a = e.children, t = Gl(e, Pm), n = Om(t);
  return x(es.Provider, {
    value: n
  }, a);
}
function Om(e) {
  var a, t = D(function() {
    return io(e);
  }), n = t[0], r = t[1];
  return fe(function() {
    _l(n, e) || r(io(e));
  }, [(a = e.customEmojis) == null ? void 0 : a.length, e.open, e.emojiVersion, e.reactionsDefaultOpen, e.searchPlaceHolder, e.searchPlaceholder, e.searchClearButtonLabel, e.defaultSkinTone, e.skinTonesDisabled, e.autoFocusSearch, e.emojiStyle, e.theme, e.suggestedEmojisMode, e.lazyLoadEmojis, e.className, e.height, e.width, e.searchDisabled, e.skinTonePickerLocation, e.allowExpandReactions, e.emojiData]), n;
}
function Ce() {
  return Z(es);
}
function oo(e, a) {
  a === void 0 && (a = 0);
  var t = D(e), n = t[0], r = t[1], f = we(null);
  function i(o) {
    return new Promise(function(s) {
      var c;
      f.current && clearTimeout(f.current), f.current = (c = window) == null ? void 0 : c.setTimeout(function() {
        r(o), s(o);
      }, a);
    });
  }
  return [n, i];
}
var Ym = {
  smileys_people: {
    category: "smileys_people",
    name: "people & body"
  },
  animals_nature: {
    category: "animals_nature",
    name: "animals & nature"
  },
  food_drink: {
    category: "food_drink",
    name: "food & drink"
  },
  travel_places: {
    category: "travel_places",
    name: "travel & places"
  },
  activities: {
    category: "activities",
    name: "activities"
  },
  objects: {
    category: "objects",
    name: "objects"
  },
  symbols: {
    category: "symbols",
    name: "symbols"
  },
  flags: {
    category: "flags",
    name: "flags"
  },
  suggested: {
    category: "suggested",
    name: "Frequently Used"
  },
  custom: {
    category: "custom",
    name: "Custom Emojis"
  },
  suggested_recent: {
    category: "suggested",
    name: "Recently Used"
  },
  preview_mood: {
    category: "preview_mood",
    name: "What's your mood?"
  }
}, Um = {
  custom: [],
  smileys_people: [
    {
      n: [
        "face",
        "grin",
        "grinning face"
      ],
      u: "1f600",
      a: "1"
    },
    {
      n: [
        "face",
        "open",
        "mouth",
        "smile",
        "grinning face with big eyes"
      ],
      u: "1f603",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "face",
        "open",
        "mouth",
        "smile",
        "grinning face with smiling eyes"
      ],
      u: "1f604",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "face",
        "grin",
        "smile",
        "beaming face with smiling eyes"
      ],
      u: "1f601",
      a: "0.6"
    },
    {
      n: [
        "face",
        "laugh",
        "mouth",
        "smile",
        "satisfied",
        "grinning squinting face"
      ],
      u: "1f606",
      a: "0.6"
    },
    {
      n: [
        "cold",
        "face",
        "open",
        "smile",
        "sweat",
        "grinning face with sweat"
      ],
      u: "1f605",
      a: "0.6"
    },
    {
      n: [
        "face",
        "rofl",
        "floor",
        "laugh",
        "rotfl",
        "rolling",
        "rolling on the floor laughing"
      ],
      u: "1f923",
      a: "3"
    },
    {
      n: [
        "joy",
        "face",
        "tear",
        "laugh",
        "face with tears of joy"
      ],
      u: "1f602",
      a: "0.6"
    },
    {
      n: [
        "face",
        "smile",
        "slightly smiling face"
      ],
      u: "1f642",
      a: "1"
    },
    {
      n: [
        "face",
        "upside down",
        "upside down face"
      ],
      u: "1f643",
      a: "1"
    },
    {
      n: [
        "melt",
        "liquid",
        "dissolve",
        "disappear",
        "melting face"
      ],
      u: "1fae0",
      a: "14"
    },
    {
      n: [
        "face",
        "wink",
        "winking face"
      ],
      u: "1f609",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "face",
        "blush",
        "smile",
        "smiling face with smiling eyes"
      ],
      u: "1f60a",
      a: "0.6"
    },
    {
      n: [
        "face",
        "halo",
        "angel",
        "fantasy",
        "innocent",
        "smiling face with halo"
      ],
      u: "1f607",
      a: "1"
    },
    {
      n: [
        "adore",
        "crush",
        "hearts",
        "in love",
        "smiling face with hearts"
      ],
      u: "1f970",
      a: "11"
    },
    {
      n: [
        "eye",
        "face",
        "love",
        "smile",
        "smiling face with heart eyes"
      ],
      u: "1f60d",
      a: "0.6"
    },
    {
      n: [
        "eyes",
        "face",
        "star",
        "grinning",
        "star struck"
      ],
      u: "1f929",
      a: "5"
    },
    {
      n: [
        "face",
        "kiss",
        "face blowing a kiss"
      ],
      u: "1f618",
      a: "0.6"
    },
    {
      n: [
        "face",
        "kiss",
        "kissing face"
      ],
      u: "1f617",
      a: "1"
    },
    {
      n: [
        "face",
        "smile",
        "relaxed",
        "outlined",
        "smiling face"
      ],
      u: "263a-fe0f",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "face",
        "kiss",
        "closed",
        "kissing face with closed eyes"
      ],
      u: "1f61a",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "face",
        "kiss",
        "smile",
        "kissing face with smiling eyes"
      ],
      u: "1f619",
      a: "1"
    },
    {
      n: [
        "tear",
        "proud",
        "smiling",
        "touched",
        "grateful",
        "relieved",
        "smiling face with tear"
      ],
      u: "1f972",
      a: "13"
    },
    {
      n: [
        "yum",
        "face",
        "smile",
        "delicious",
        "savouring",
        "face savoring food"
      ],
      u: "1f60b",
      a: "0.6"
    },
    {
      n: [
        "face",
        "tongue",
        "face with tongue"
      ],
      u: "1f61b",
      a: "1"
    },
    {
      n: [
        "eye",
        "face",
        "joke",
        "wink",
        "tongue",
        "winking face with tongue"
      ],
      u: "1f61c",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "goofy",
        "large",
        "small",
        "zany face"
      ],
      u: "1f92a",
      a: "5"
    },
    {
      n: [
        "eye",
        "face",
        "taste",
        "tongue",
        "horrible",
        "squinting face with tongue"
      ],
      u: "1f61d",
      a: "0.6"
    },
    {
      n: [
        "face",
        "money",
        "mouth",
        "money mouth face"
      ],
      u: "1f911",
      a: "1"
    },
    {
      n: [
        "hug",
        "face",
        "hugging",
        "open hands",
        "smiling face",
        "smiling face with open hands"
      ],
      u: "1f917",
      a: "1"
    },
    {
      n: [
        "whoops",
        "face with hand over mouth"
      ],
      u: "1f92d",
      a: "5"
    },
    {
      n: [
        "awe",
        "scared",
        "surprise",
        "amazement",
        "disbelief",
        "embarrass",
        "face with open eyes and hand over mouth"
      ],
      u: "1fae2",
      a: "14"
    },
    {
      n: [
        "peep",
        "stare",
        "captivated",
        "face with peeking eye"
      ],
      u: "1fae3",
      a: "14"
    },
    {
      n: [
        "quiet",
        "shush",
        "shushing face"
      ],
      u: "1f92b",
      a: "5"
    },
    {
      n: [
        "face",
        "thinking",
        "thinking face"
      ],
      u: "1f914",
      a: "1"
    },
    {
      n: [
        "ok",
        "yes",
        "sunny",
        "salute",
        "troops",
        "saluting face"
      ],
      u: "1fae1",
      a: "14"
    },
    {
      n: [
        "zip",
        "face",
        "mouth",
        "zipper",
        "zipper mouth face"
      ],
      u: "1f910",
      a: "1"
    },
    {
      n: [
        "skeptic",
        "distrust",
        "face with raised eyebrow"
      ],
      u: "1f928",
      a: "5"
    },
    {
      n: [
        "meh",
        "face",
        "deadpan",
        "neutral",
        "neutral face"
      ],
      u: "1f610",
      a: "0.7"
    },
    {
      n: [
        "meh",
        "face",
        "inexpressive",
        "unexpressive",
        "expressionless",
        "expressionless face"
      ],
      u: "1f611",
      a: "1"
    },
    {
      n: [
        "face",
        "mouth",
        "quiet",
        "silent",
        "face without mouth"
      ],
      u: "1f636",
      a: "1"
    },
    {
      n: [
        "hide",
        "depressed",
        "disappear",
        "introvert",
        "invisible",
        "dotted line face"
      ],
      u: "1fae5",
      a: "14"
    },
    {
      n: [
        "absentminded",
        "face in clouds",
        "head in clouds",
        "face in the fog"
      ],
      u: "1f636-200d-1f32b-fe0f",
      a: "13.1"
    },
    {
      n: [
        "face",
        "smirk",
        "smirking face"
      ],
      u: "1f60f",
      a: "0.6"
    },
    {
      n: [
        "face",
        "unhappy",
        "unamused",
        "unamused face"
      ],
      u: "1f612",
      a: "0.6"
    },
    {
      n: [
        "eyes",
        "face",
        "eyeroll",
        "rolling",
        "face with rolling eyes"
      ],
      u: "1f644",
      a: "1"
    },
    {
      n: [
        "face",
        "grimace",
        "grimacing face"
      ],
      u: "1f62c",
      a: "1"
    },
    {
      n: [
        "gasp",
        "groan",
        "exhale",
        "relief",
        "whisper",
        "whistle",
        "face exhaling"
      ],
      u: "1f62e-200d-1f4a8",
      a: "13.1"
    },
    {
      n: [
        "lie",
        "face",
        "pinocchio",
        "lying face"
      ],
      u: "1f925",
      a: "3"
    },
    {
      n: [
        "face",
        "shock",
        "shaking",
        "vibrate",
        "earthquake",
        "shaking face"
      ],
      u: "1fae8",
      a: "15"
    },
    {
      n: [
        "no",
        "shake",
        "head shaking horizontally"
      ],
      u: "1f642-200d-2194-fe0f",
      a: "15.1"
    },
    {
      n: [
        "nod",
        "yes",
        "head shaking vertically"
      ],
      u: "1f642-200d-2195-fe0f",
      a: "15.1"
    },
    {
      n: [
        "face",
        "relieved",
        "relieved face"
      ],
      u: "1f60c",
      a: "0.6"
    },
    {
      n: [
        "face",
        "pensive",
        "dejected",
        "pensive face"
      ],
      u: "1f614",
      a: "0.6"
    },
    {
      n: [
        "face",
        "sleep",
        "good night",
        "sleepy face"
      ],
      u: "1f62a",
      a: "0.6"
    },
    {
      n: [
        "face",
        "drooling",
        "drooling face"
      ],
      u: "1f924",
      a: "3"
    },
    {
      n: [
        "zzz",
        "face",
        "sleep",
        "good night",
        "sleeping face"
      ],
      u: "1f634",
      a: "1"
    },
    {
      n: [
        "cold",
        "face",
        "mask",
        "sick",
        "doctor",
        "face with medical mask"
      ],
      u: "1f637",
      a: "0.6"
    },
    {
      n: [
        "ill",
        "face",
        "sick",
        "thermometer",
        "face with thermometer"
      ],
      u: "1f912",
      a: "1"
    },
    {
      n: [
        "face",
        "hurt",
        "injury",
        "bandage",
        "face with head bandage"
      ],
      u: "1f915",
      a: "1"
    },
    {
      n: [
        "face",
        "vomit",
        "nauseated",
        "nauseated face"
      ],
      u: "1f922",
      a: "3"
    },
    {
      n: [
        "puke",
        "sick",
        "vomit",
        "face vomiting"
      ],
      u: "1f92e",
      a: "5"
    },
    {
      n: [
        "face",
        "sneeze",
        "gesundheit",
        "sneezing face"
      ],
      u: "1f927",
      a: "3"
    },
    {
      n: [
        "hot",
        "hot face",
        "feverish",
        "sweating",
        "red faced",
        "heat stroke"
      ],
      u: "1f975",
      a: "11"
    },
    {
      n: [
        "cold",
        "icicles",
        "freezing",
        "cold face",
        "frostbite",
        "blue faced"
      ],
      u: "1f976",
      a: "11"
    },
    {
      n: [
        "dizzy",
        "tipsy",
        "woozy face",
        "wavy mouth",
        "intoxicated",
        "uneven eyes"
      ],
      u: "1f974",
      a: "11"
    },
    {
      n: [
        "dead",
        "face",
        "knocked out",
        "crossed out eyes",
        "face with crossed out eyes"
      ],
      u: "1f635",
      a: "0.6"
    },
    {
      n: [
        "whoa",
        "dizzy",
        "spiral",
        "trouble",
        "hypnotized",
        "face with spiral eyes"
      ],
      u: "1f635-200d-1f4ab",
      a: "13.1"
    },
    {
      n: [
        "shocked",
        "mind blown",
        "exploding head"
      ],
      u: "1f92f",
      a: "5"
    },
    {
      n: [
        "hat",
        "face",
        "cowboy",
        "cowgirl",
        "cowboy hat face"
      ],
      u: "1f920",
      a: "3"
    },
    {
      n: [
        "hat",
        "horn",
        "party",
        "celebration",
        "partying face"
      ],
      u: "1f973",
      a: "11"
    },
    {
      n: [
        "face",
        "nose",
        "glasses",
        "disguise",
        "incognito",
        "disguised face"
      ],
      u: "1f978",
      a: "13"
    },
    {
      n: [
        "sun",
        "cool",
        "face",
        "bright",
        "sunglasses",
        "smiling face with sunglasses"
      ],
      u: "1f60e",
      a: "1"
    },
    {
      n: [
        "face",
        "geek",
        "nerd",
        "nerd face"
      ],
      u: "1f913",
      a: "1"
    },
    {
      n: [
        "face",
        "stuffy",
        "monocle",
        "face with monocle"
      ],
      u: "1f9d0",
      a: "5"
    },
    {
      n: [
        "meh",
        "face",
        "confused",
        "confused face"
      ],
      u: "1f615",
      a: "1"
    },
    {
      n: [
        "meh",
        "unsure",
        "skeptical",
        "disappointed",
        "face with diagonal mouth"
      ],
      u: "1fae4",
      a: "14"
    },
    {
      n: [
        "face",
        "worried",
        "worried face"
      ],
      u: "1f61f",
      a: "1"
    },
    {
      n: [
        "face",
        "frown",
        "slightly frowning face"
      ],
      u: "1f641",
      a: "1"
    },
    {
      n: [
        "face",
        "frown",
        "frowning face"
      ],
      u: "2639-fe0f",
      a: "0.7"
    },
    {
      n: [
        "face",
        "open",
        "mouth",
        "sympathy",
        "face with open mouth"
      ],
      u: "1f62e",
      a: "1"
    },
    {
      n: [
        "face",
        "hushed",
        "stunned",
        "surprised",
        "hushed face"
      ],
      u: "1f62f",
      a: "1"
    },
    {
      n: [
        "face",
        "shocked",
        "totally",
        "astonished",
        "astonished face"
      ],
      u: "1f632",
      a: "0.6"
    },
    {
      n: [
        "face",
        "dazed",
        "flushed",
        "flushed face"
      ],
      u: "1f633",
      a: "0.6"
    },
    {
      n: [
        "mercy",
        "begging",
        "puppy eyes",
        "pleading face"
      ],
      u: "1f97a",
      a: "11"
    },
    {
      n: [
        "cry",
        "sad",
        "angry",
        "proud",
        "resist",
        "face holding back tears"
      ],
      u: "1f979",
      a: "14"
    },
    {
      n: [
        "face",
        "open",
        "frown",
        "mouth",
        "frowning face with open mouth"
      ],
      u: "1f626",
      a: "1"
    },
    {
      n: [
        "face",
        "anguished",
        "anguished face"
      ],
      u: "1f627",
      a: "1"
    },
    {
      n: [
        "face",
        "fear",
        "scared",
        "fearful",
        "fearful face"
      ],
      u: "1f628",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "cold",
        "face",
        "sweat",
        "rushed",
        "anxious face with sweat"
      ],
      u: "1f630",
      a: "0.6"
    },
    {
      n: [
        "face",
        "whew",
        "relieved",
        "disappointed",
        "sad but relieved face"
      ],
      u: "1f625",
      a: "0.6"
    },
    {
      n: [
        "cry",
        "sad",
        "face",
        "tear",
        "crying face"
      ],
      u: "1f622",
      a: "0.6"
    },
    {
      n: [
        "cry",
        "sad",
        "sob",
        "face",
        "tear",
        "loudly crying face"
      ],
      u: "1f62d",
      a: "0.6"
    },
    {
      n: [
        "face",
        "fear",
        "munch",
        "scared",
        "scream",
        "face screaming in fear"
      ],
      u: "1f631",
      a: "0.6"
    },
    {
      n: [
        "face",
        "confounded",
        "confounded face"
      ],
      u: "1f616",
      a: "0.6"
    },
    {
      n: [
        "face",
        "persevere",
        "persevering face"
      ],
      u: "1f623",
      a: "0.6"
    },
    {
      n: [
        "face",
        "disappointed",
        "disappointed face"
      ],
      u: "1f61e",
      a: "0.6"
    },
    {
      n: [
        "cold",
        "face",
        "sweat",
        "downcast face with sweat"
      ],
      u: "1f613",
      a: "0.6"
    },
    {
      n: [
        "face",
        "tired",
        "weary",
        "weary face"
      ],
      u: "1f629",
      a: "0.6"
    },
    {
      n: [
        "face",
        "tired",
        "tired face"
      ],
      u: "1f62b",
      a: "0.6"
    },
    {
      n: [
        "yawn",
        "bored",
        "tired",
        "yawning face"
      ],
      u: "1f971",
      a: "12"
    },
    {
      n: [
        "won",
        "face",
        "triumph",
        "face with steam from nose"
      ],
      u: "1f624",
      a: "0.6"
    },
    {
      n: [
        "mad",
        "red",
        "face",
        "rage",
        "angry",
        "enraged",
        "pouting",
        "enraged face"
      ],
      u: "1f621",
      a: "0.6"
    },
    {
      n: [
        "mad",
        "face",
        "anger",
        "angry",
        "angry face"
      ],
      u: "1f620",
      a: "0.6"
    },
    {
      n: [
        "swearing",
        "face with symbols on mouth"
      ],
      u: "1f92c",
      a: "5"
    },
    {
      n: [
        "face",
        "horns",
        "smile",
        "fantasy",
        "fairy tale",
        "smiling face with horns"
      ],
      u: "1f608",
      a: "1"
    },
    {
      n: [
        "imp",
        "face",
        "demon",
        "devil",
        "fantasy",
        "angry face with horns"
      ],
      u: "1f47f",
      a: "0.6"
    },
    {
      n: [
        "face",
        "skull",
        "death",
        "monster",
        "fairy tale"
      ],
      u: "1f480",
      a: "0.6"
    },
    {
      n: [
        "face",
        "death",
        "skull",
        "monster",
        "crossbones",
        "skull and crossbones"
      ],
      u: "2620-fe0f",
      a: "1"
    },
    {
      n: [
        "poo",
        "dung",
        "face",
        "poop",
        "monster",
        "pile of poo"
      ],
      u: "1f4a9",
      a: "0.6"
    },
    {
      n: [
        "face",
        "clown",
        "clown face"
      ],
      u: "1f921",
      a: "3"
    },
    {
      n: [
        "ogre",
        "face",
        "fantasy",
        "monster",
        "creature",
        "fairy tale"
      ],
      u: "1f479",
      a: "0.6"
    },
    {
      n: [
        "face",
        "goblin",
        "fantasy",
        "monster",
        "creature",
        "fairy tale"
      ],
      u: "1f47a",
      a: "0.6"
    },
    {
      n: [
        "face",
        "ghost",
        "fantasy",
        "monster",
        "creature",
        "fairy tale"
      ],
      u: "1f47b",
      a: "0.6"
    },
    {
      n: [
        "ufo",
        "face",
        "alien",
        "fantasy",
        "creature",
        "extraterrestrial"
      ],
      u: "1f47d",
      a: "0.6"
    },
    {
      n: [
        "ufo",
        "face",
        "alien",
        "monster",
        "creature",
        "alien monster",
        "extraterrestrial"
      ],
      u: "1f47e",
      a: "0.6"
    },
    {
      n: [
        "face",
        "robot",
        "monster"
      ],
      u: "1f916",
      a: "1"
    },
    {
      n: [
        "cat",
        "face",
        "open",
        "mouth",
        "smile",
        "grinning",
        "grinning cat"
      ],
      u: "1f63a",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "eye",
        "face",
        "grin",
        "smile",
        "grinning cat with smiling eyes"
      ],
      u: "1f638",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "joy",
        "face",
        "tear",
        "cat with tears of joy"
      ],
      u: "1f639",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "eye",
        "face",
        "love",
        "heart",
        "smile",
        "smiling cat with heart eyes"
      ],
      u: "1f63b",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "wry",
        "face",
        "smile",
        "ironic",
        "cat with wry smile"
      ],
      u: "1f63c",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "eye",
        "face",
        "kiss",
        "kissing cat"
      ],
      u: "1f63d",
      a: "0.6"
    },
    {
      n: [
        "oh",
        "cat",
        "face",
        "weary",
        "weary cat",
        "surprised"
      ],
      u: "1f640",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "cry",
        "sad",
        "face",
        "tear",
        "crying cat"
      ],
      u: "1f63f",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "face",
        "pouting",
        "pouting cat"
      ],
      u: "1f63e",
      a: "0.6"
    },
    {
      n: [
        "see",
        "evil",
        "face",
        "monkey",
        "forbidden",
        "see no evil monkey"
      ],
      u: "1f648",
      a: "0.6"
    },
    {
      n: [
        "evil",
        "face",
        "hear",
        "monkey",
        "forbidden",
        "hear no evil monkey"
      ],
      u: "1f649",
      a: "0.6"
    },
    {
      n: [
        "evil",
        "face",
        "speak",
        "monkey",
        "forbidden",
        "speak no evil monkey"
      ],
      u: "1f64a",
      a: "0.6"
    },
    {
      n: [
        "love",
        "mail",
        "heart",
        "letter",
        "love letter"
      ],
      u: "1f48c",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "cupid",
        "heart with arrow"
      ],
      u: "1f498",
      a: "0.6"
    },
    {
      n: [
        "ribbon",
        "valentine",
        "heart with ribbon"
      ],
      u: "1f49d",
      a: "0.6"
    },
    {
      n: [
        "excited",
        "sparkle",
        "sparkling heart"
      ],
      u: "1f496",
      a: "0.6"
    },
    {
      n: [
        "pulse",
        "excited",
        "growing",
        "nervous",
        "growing heart"
      ],
      u: "1f497",
      a: "0.6"
    },
    {
      n: [
        "beating",
        "heartbeat",
        "pulsating",
        "beating heart"
      ],
      u: "1f493",
      a: "0.6"
    },
    {
      n: [
        "revolving",
        "revolving hearts"
      ],
      u: "1f49e",
      a: "0.6"
    },
    {
      n: [
        "love",
        "two hearts"
      ],
      u: "1f495",
      a: "0.6"
    },
    {
      n: [
        "heart",
        "heart decoration"
      ],
      u: "1f49f",
      a: "0.6"
    },
    {
      n: [
        "mark",
        "exclamation",
        "punctuation",
        "heart exclamation"
      ],
      u: "2763-fe0f",
      a: "1"
    },
    {
      n: [
        "break",
        "broken",
        "broken heart"
      ],
      u: "1f494",
      a: "0.6"
    },
    {
      n: [
        "burn",
        "love",
        "lust",
        "heart",
        "sacred heart",
        "heart on fire"
      ],
      u: "2764-fe0f-200d-1f525",
      a: "13.1"
    },
    {
      n: [
        "well",
        "mending",
        "healthier",
        "improving",
        "recovering",
        "recuperating",
        "mending heart"
      ],
      u: "2764-fe0f-200d-1fa79",
      a: "13.1"
    },
    {
      n: [
        "heart",
        "red heart"
      ],
      u: "2764-fe0f",
      a: "0.6"
    },
    {
      n: [
        "cute",
        "like",
        "love",
        "pink",
        "heart",
        "pink heart"
      ],
      u: "1fa77",
      a: "15"
    },
    {
      n: [
        "orange",
        "orange heart"
      ],
      u: "1f9e1",
      a: "5"
    },
    {
      n: [
        "yellow",
        "yellow heart"
      ],
      u: "1f49b",
      a: "0.6"
    },
    {
      n: [
        "green",
        "green heart"
      ],
      u: "1f49a",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "blue heart"
      ],
      u: "1f499",
      a: "0.6"
    },
    {
      n: [
        "cyan",
        "teal",
        "heart",
        "light blue",
        "light blue heart"
      ],
      u: "1fa75",
      a: "15"
    },
    {
      n: [
        "purple",
        "purple heart"
      ],
      u: "1f49c",
      a: "0.6"
    },
    {
      n: [
        "brown",
        "heart",
        "brown heart"
      ],
      u: "1f90e",
      a: "12"
    },
    {
      n: [
        "evil",
        "black",
        "wicked",
        "black heart"
      ],
      u: "1f5a4",
      a: "3"
    },
    {
      n: [
        "gray",
        "heart",
        "slate",
        "silver",
        "grey heart"
      ],
      u: "1fa76",
      a: "15"
    },
    {
      n: [
        "heart",
        "white",
        "white heart"
      ],
      u: "1f90d",
      a: "12"
    },
    {
      n: [
        "kiss",
        "lips",
        "kiss mark"
      ],
      u: "1f48b",
      a: "0.6"
    },
    {
      n: [
        "100",
        "full",
        "score",
        "hundred",
        "hundred points"
      ],
      u: "1f4af",
      a: "0.6"
    },
    {
      n: [
        "mad",
        "angry",
        "comic",
        "anger symbol"
      ],
      u: "1f4a2",
      a: "0.6"
    },
    {
      n: [
        "boom",
        "comic",
        "collision"
      ],
      u: "1f4a5",
      a: "0.6"
    },
    {
      n: [
        "star",
        "dizzy",
        "comic"
      ],
      u: "1f4ab",
      a: "0.6"
    },
    {
      n: [
        "comic",
        "sweat",
        "splashing",
        "sweat droplets"
      ],
      u: "1f4a6",
      a: "0.6"
    },
    {
      n: [
        "dash",
        "comic",
        "running",
        "dashing away"
      ],
      u: "1f4a8",
      a: "0.6"
    },
    {
      n: [
        "hole"
      ],
      u: "1f573-fe0f",
      a: "0.7"
    },
    {
      n: [
        "comic",
        "bubble",
        "dialog",
        "speech",
        "balloon",
        "speech balloon"
      ],
      u: "1f4ac",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "bubble",
        "speech",
        "balloon",
        "witness",
        "eye in speech bubble"
      ],
      u: "1f441-fe0f-200d-1f5e8-fe0f",
      a: "2"
    },
    {
      n: [
        "bubble",
        "dialog",
        "speech",
        "balloon",
        "left speech bubble"
      ],
      u: "1f5e8-fe0f",
      a: "2"
    },
    {
      n: [
        "mad",
        "angry",
        "bubble",
        "balloon",
        "right anger bubble"
      ],
      u: "1f5ef-fe0f",
      a: "0.7"
    },
    {
      n: [
        "comic",
        "bubble",
        "balloon",
        "thought",
        "thought balloon"
      ],
      u: "1f4ad",
      a: "1"
    },
    {
      n: [
        "ZZZ",
        "zzz",
        "comic",
        "sleep",
        "good night"
      ],
      u: "1f4a4",
      a: "0.6"
    },
    {
      n: [
        "hand",
        "wave",
        "waving",
        "waving hand"
      ],
      u: "1f44b",
      v: [
        "1f44b-1f3fb",
        "1f44b-1f3fc",
        "1f44b-1f3fd",
        "1f44b-1f3fe",
        "1f44b-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "raised",
        "backhand",
        "raised back of hand"
      ],
      u: "1f91a",
      v: [
        "1f91a-1f3fb",
        "1f91a-1f3fc",
        "1f91a-1f3fd",
        "1f91a-1f3fe",
        "1f91a-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "hand",
        "finger",
        "splayed",
        "hand with fingers splayed"
      ],
      u: "1f590-fe0f",
      v: [
        "1f590-1f3fb",
        "1f590-1f3fc",
        "1f590-1f3fd",
        "1f590-1f3fe",
        "1f590-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "hand",
        "high 5",
        "high five",
        "raised hand"
      ],
      u: "270b",
      v: [
        "270b-1f3fb",
        "270b-1f3fc",
        "270b-1f3fd",
        "270b-1f3fe",
        "270b-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "spock",
        "finger",
        "vulcan",
        "vulcan salute"
      ],
      u: "1f596",
      v: [
        "1f596-1f3fb",
        "1f596-1f3fc",
        "1f596-1f3fd",
        "1f596-1f3fe",
        "1f596-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "hand",
        "right",
        "rightward",
        "rightwards hand"
      ],
      u: "1faf1",
      v: [
        "1faf1-1f3fb",
        "1faf1-1f3fc",
        "1faf1-1f3fd",
        "1faf1-1f3fe",
        "1faf1-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "hand",
        "left",
        "leftward",
        "leftwards hand"
      ],
      u: "1faf2",
      v: [
        "1faf2-1f3fb",
        "1faf2-1f3fc",
        "1faf2-1f3fd",
        "1faf2-1f3fe",
        "1faf2-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "drop",
        "shoo",
        "dismiss",
        "palm down hand"
      ],
      u: "1faf3",
      v: [
        "1faf3-1f3fb",
        "1faf3-1f3fc",
        "1faf3-1f3fd",
        "1faf3-1f3fe",
        "1faf3-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "come",
        "catch",
        "offer",
        "beckon",
        "palm up hand"
      ],
      u: "1faf4",
      v: [
        "1faf4-1f3fb",
        "1faf4-1f3fc",
        "1faf4-1f3fd",
        "1faf4-1f3fe",
        "1faf4-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "push",
        "stop",
        "wait",
        "refuse",
        "leftward",
        "high five",
        "leftwards pushing hand"
      ],
      u: "1faf7",
      v: [
        "1faf7-1f3fb",
        "1faf7-1f3fc",
        "1faf7-1f3fd",
        "1faf7-1f3fe",
        "1faf7-1f3ff"
      ],
      a: "15"
    },
    {
      n: [
        "push",
        "stop",
        "wait",
        "refuse",
        "high five",
        "rightward",
        "rightwards pushing hand"
      ],
      u: "1faf8",
      v: [
        "1faf8-1f3fb",
        "1faf8-1f3fc",
        "1faf8-1f3fd",
        "1faf8-1f3fe",
        "1faf8-1f3ff"
      ],
      a: "15"
    },
    {
      n: [
        "ok",
        "hand",
        "OK hand"
      ],
      u: "1f44c",
      v: [
        "1f44c-1f3fb",
        "1f44c-1f3fc",
        "1f44c-1f3fd",
        "1f44c-1f3fe",
        "1f44c-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "fingers",
        "pinched",
        "sarcastic",
        "hand gesture",
        "interrogation",
        "pinched fingers"
      ],
      u: "1f90c",
      v: [
        "1f90c-1f3fb",
        "1f90c-1f3fc",
        "1f90c-1f3fd",
        "1f90c-1f3fe",
        "1f90c-1f3ff"
      ],
      a: "13"
    },
    {
      n: [
        "small amount",
        "pinching hand"
      ],
      u: "1f90f",
      v: [
        "1f90f-1f3fb",
        "1f90f-1f3fc",
        "1f90f-1f3fd",
        "1f90f-1f3fe",
        "1f90f-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "v",
        "hand",
        "victory",
        "victory hand"
      ],
      u: "270c-fe0f",
      v: [
        "270c-1f3fb",
        "270c-1f3fc",
        "270c-1f3fd",
        "270c-1f3fe",
        "270c-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "luck",
        "cross",
        "finger",
        "crossed fingers"
      ],
      u: "1f91e",
      v: [
        "1f91e-1f3fb",
        "1f91e-1f3fc",
        "1f91e-1f3fd",
        "1f91e-1f3fe",
        "1f91e-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "love",
        "snap",
        "heart",
        "money",
        "expensive",
        "hand with index finger and thumb crossed"
      ],
      u: "1faf0",
      v: [
        "1faf0-1f3fb",
        "1faf0-1f3fc",
        "1faf0-1f3fd",
        "1faf0-1f3fe",
        "1faf0-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "ily",
        "hand",
        "love you gesture"
      ],
      u: "1f91f",
      v: [
        "1f91f-1f3fb",
        "1f91f-1f3fc",
        "1f91f-1f3fd",
        "1f91f-1f3fe",
        "1f91f-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "hand",
        "horns",
        "finger",
        "rock on",
        "sign of the horns"
      ],
      u: "1f918",
      v: [
        "1f918-1f3fb",
        "1f918-1f3fc",
        "1f918-1f3fd",
        "1f918-1f3fe",
        "1f918-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "call",
        "hand",
        "shaka",
        "hang loose",
        "call me hand"
      ],
      u: "1f919",
      v: [
        "1f919-1f3fb",
        "1f919-1f3fc",
        "1f919-1f3fd",
        "1f919-1f3fe",
        "1f919-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "hand",
        "index",
        "point",
        "finger",
        "backhand",
        "backhand index pointing left"
      ],
      u: "1f448",
      v: [
        "1f448-1f3fb",
        "1f448-1f3fc",
        "1f448-1f3fd",
        "1f448-1f3fe",
        "1f448-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "index",
        "point",
        "finger",
        "backhand",
        "backhand index pointing right"
      ],
      u: "1f449",
      v: [
        "1f449-1f3fb",
        "1f449-1f3fc",
        "1f449-1f3fd",
        "1f449-1f3fe",
        "1f449-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "up",
        "hand",
        "point",
        "finger",
        "backhand",
        "backhand index pointing up"
      ],
      u: "1f446",
      v: [
        "1f446-1f3fb",
        "1f446-1f3fc",
        "1f446-1f3fd",
        "1f446-1f3fe",
        "1f446-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "finger",
        "middle finger"
      ],
      u: "1f595",
      v: [
        "1f595-1f3fb",
        "1f595-1f3fc",
        "1f595-1f3fd",
        "1f595-1f3fe",
        "1f595-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "down",
        "hand",
        "point",
        "finger",
        "backhand",
        "backhand index pointing down"
      ],
      u: "1f447",
      v: [
        "1f447-1f3fb",
        "1f447-1f3fc",
        "1f447-1f3fd",
        "1f447-1f3fe",
        "1f447-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "up",
        "hand",
        "index",
        "point",
        "finger",
        "index pointing up"
      ],
      u: "261d-fe0f",
      v: [
        "261d-1f3fb",
        "261d-1f3fc",
        "261d-1f3fd",
        "261d-1f3fe",
        "261d-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "you",
        "point",
        "index pointing at the viewer"
      ],
      u: "1faf5",
      v: [
        "1faf5-1f3fb",
        "1faf5-1f3fc",
        "1faf5-1f3fd",
        "1faf5-1f3fe",
        "1faf5-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "+1",
        "up",
        "hand",
        "thumb",
        "thumbs up"
      ],
      u: "1f44d",
      v: [
        "1f44d-1f3fb",
        "1f44d-1f3fc",
        "1f44d-1f3fd",
        "1f44d-1f3fe",
        "1f44d-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        " 1",
        "down",
        "hand",
        "thumb",
        "thumbs down"
      ],
      u: "1f44e",
      v: [
        "1f44e-1f3fb",
        "1f44e-1f3fc",
        "1f44e-1f3fd",
        "1f44e-1f3fe",
        "1f44e-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "fist",
        "hand",
        "punch",
        "clenched",
        "raised fist"
      ],
      u: "270a",
      v: [
        "270a-1f3fb",
        "270a-1f3fc",
        "270a-1f3fd",
        "270a-1f3fe",
        "270a-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "fist",
        "hand",
        "punch",
        "clenched",
        "oncoming fist"
      ],
      u: "1f44a",
      v: [
        "1f44a-1f3fb",
        "1f44a-1f3fc",
        "1f44a-1f3fd",
        "1f44a-1f3fe",
        "1f44a-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "fist",
        "leftwards",
        "left facing fist"
      ],
      u: "1f91b",
      v: [
        "1f91b-1f3fb",
        "1f91b-1f3fc",
        "1f91b-1f3fd",
        "1f91b-1f3fe",
        "1f91b-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "fist",
        "rightwards",
        "right facing fist"
      ],
      u: "1f91c",
      v: [
        "1f91c-1f3fb",
        "1f91c-1f3fc",
        "1f91c-1f3fd",
        "1f91c-1f3fe",
        "1f91c-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "clap",
        "hand",
        "clapping hands"
      ],
      u: "1f44f",
      v: [
        "1f44f-1f3fb",
        "1f44f-1f3fc",
        "1f44f-1f3fd",
        "1f44f-1f3fe",
        "1f44f-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "hooray",
        "raised",
        "gesture",
        "celebration",
        "raising hands"
      ],
      u: "1f64c",
      v: [
        "1f64c-1f3fb",
        "1f64c-1f3fc",
        "1f64c-1f3fd",
        "1f64c-1f3fe",
        "1f64c-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "love",
        "heart hands"
      ],
      u: "1faf6",
      v: [
        "1faf6-1f3fb",
        "1faf6-1f3fc",
        "1faf6-1f3fd",
        "1faf6-1f3fe",
        "1faf6-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "hand",
        "open",
        "open hands"
      ],
      u: "1f450",
      v: [
        "1f450-1f3fb",
        "1f450-1f3fc",
        "1f450-1f3fd",
        "1f450-1f3fe",
        "1f450-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "prayer",
        "palms up together"
      ],
      u: "1f932",
      v: [
        "1f932-1f3fb",
        "1f932-1f3fc",
        "1f932-1f3fd",
        "1f932-1f3fe",
        "1f932-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "hand",
        "shake",
        "meeting",
        "handshake",
        "agreement"
      ],
      u: "1f91d",
      v: [
        "1f91d-1f3fb",
        "1f91d-1f3fc",
        "1f91d-1f3fd",
        "1f91d-1f3fe",
        "1f91d-1f3ff",
        "1faf1-1f3fb-200d-1faf2-1f3fc",
        "1faf1-1f3fb-200d-1faf2-1f3fd",
        "1faf1-1f3fb-200d-1faf2-1f3fe",
        "1faf1-1f3fb-200d-1faf2-1f3ff",
        "1faf1-1f3fc-200d-1faf2-1f3fb",
        "1faf1-1f3fc-200d-1faf2-1f3fd",
        "1faf1-1f3fc-200d-1faf2-1f3fe",
        "1faf1-1f3fc-200d-1faf2-1f3ff",
        "1faf1-1f3fd-200d-1faf2-1f3fb",
        "1faf1-1f3fd-200d-1faf2-1f3fc",
        "1faf1-1f3fd-200d-1faf2-1f3fe",
        "1faf1-1f3fd-200d-1faf2-1f3ff",
        "1faf1-1f3fe-200d-1faf2-1f3fb",
        "1faf1-1f3fe-200d-1faf2-1f3fc",
        "1faf1-1f3fe-200d-1faf2-1f3fd",
        "1faf1-1f3fe-200d-1faf2-1f3ff",
        "1faf1-1f3ff-200d-1faf2-1f3fb",
        "1faf1-1f3ff-200d-1faf2-1f3fc",
        "1faf1-1f3ff-200d-1faf2-1f3fd",
        "1faf1-1f3ff-200d-1faf2-1f3fe"
      ],
      a: "3"
    },
    {
      n: [
        "ask",
        "hand",
        "pray",
        "high 5",
        "please",
        "thanks",
        "high five",
        "folded hands"
      ],
      u: "1f64f",
      v: [
        "1f64f-1f3fb",
        "1f64f-1f3fc",
        "1f64f-1f3fd",
        "1f64f-1f3fe",
        "1f64f-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hand",
        "write",
        "writing hand"
      ],
      u: "270d-fe0f",
      v: [
        "270d-1f3fb",
        "270d-1f3fc",
        "270d-1f3fd",
        "270d-1f3fe",
        "270d-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "care",
        "nail",
        "polish",
        "manicure",
        "cosmetics",
        "nail polish"
      ],
      u: "1f485",
      v: [
        "1f485-1f3fb",
        "1f485-1f3fc",
        "1f485-1f3fd",
        "1f485-1f3fe",
        "1f485-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "phone",
        "selfie",
        "camera"
      ],
      u: "1f933",
      v: [
        "1f933-1f3fb",
        "1f933-1f3fc",
        "1f933-1f3fd",
        "1f933-1f3fe",
        "1f933-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "flex",
        "comic",
        "biceps",
        "muscle",
        "flexed biceps"
      ],
      u: "1f4aa",
      v: [
        "1f4aa-1f3fb",
        "1f4aa-1f3fc",
        "1f4aa-1f3fd",
        "1f4aa-1f3fe",
        "1f4aa-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "prosthetic",
        "accessibility",
        "mechanical arm"
      ],
      u: "1f9be",
      a: "12"
    },
    {
      n: [
        "prosthetic",
        "accessibility",
        "mechanical leg"
      ],
      u: "1f9bf",
      a: "12"
    },
    {
      n: [
        "leg",
        "kick",
        "limb"
      ],
      u: "1f9b5",
      v: [
        "1f9b5-1f3fb",
        "1f9b5-1f3fc",
        "1f9b5-1f3fd",
        "1f9b5-1f3fe",
        "1f9b5-1f3ff"
      ],
      a: "11"
    },
    {
      n: [
        "foot",
        "kick",
        "stomp"
      ],
      u: "1f9b6",
      v: [
        "1f9b6-1f3fb",
        "1f9b6-1f3fc",
        "1f9b6-1f3fd",
        "1f9b6-1f3fe",
        "1f9b6-1f3ff"
      ],
      a: "11"
    },
    {
      n: [
        "ear",
        "body"
      ],
      u: "1f442",
      v: [
        "1f442-1f3fb",
        "1f442-1f3fc",
        "1f442-1f3fd",
        "1f442-1f3fe",
        "1f442-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "accessibility",
        "hard of hearing",
        "ear with hearing aid"
      ],
      u: "1f9bb",
      v: [
        "1f9bb-1f3fb",
        "1f9bb-1f3fc",
        "1f9bb-1f3fd",
        "1f9bb-1f3fe",
        "1f9bb-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "nose",
        "body"
      ],
      u: "1f443",
      v: [
        "1f443-1f3fb",
        "1f443-1f3fc",
        "1f443-1f3fd",
        "1f443-1f3fe",
        "1f443-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "brain",
        "intelligent"
      ],
      u: "1f9e0",
      a: "5"
    },
    {
      n: [
        "heart",
        "organ",
        "pulse",
        "anatomical",
        "cardiology",
        "anatomical heart"
      ],
      u: "1fac0",
      a: "13"
    },
    {
      n: [
        "lungs",
        "organ",
        "breath",
        "exhalation",
        "inhalation",
        "respiration"
      ],
      u: "1fac1",
      a: "13"
    },
    {
      n: [
        "tooth",
        "dentist"
      ],
      u: "1f9b7",
      a: "11"
    },
    {
      n: [
        "bone",
        "skeleton"
      ],
      u: "1f9b4",
      a: "11"
    },
    {
      n: [
        "eye",
        "eyes",
        "face"
      ],
      u: "1f440",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "body"
      ],
      u: "1f441-fe0f",
      a: "0.7"
    },
    {
      n: [
        "body",
        "tongue"
      ],
      u: "1f445",
      a: "0.6"
    },
    {
      n: [
        "lips",
        "mouth"
      ],
      u: "1f444",
      a: "0.6"
    },
    {
      n: [
        "fear",
        "anxious",
        "nervous",
        "worried",
        "flirting",
        "biting lip",
        "uncomfortable"
      ],
      u: "1fae6",
      a: "14"
    },
    {
      n: [
        "baby",
        "young"
      ],
      u: "1f476",
      v: [
        "1f476-1f3fb",
        "1f476-1f3fc",
        "1f476-1f3fd",
        "1f476-1f3fe",
        "1f476-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "child",
        "young",
        "gender neutral",
        "unspecified gender"
      ],
      u: "1f9d2",
      v: [
        "1f9d2-1f3fb",
        "1f9d2-1f3fc",
        "1f9d2-1f3fd",
        "1f9d2-1f3fe",
        "1f9d2-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "boy",
        "young"
      ],
      u: "1f466",
      v: [
        "1f466-1f3fb",
        "1f466-1f3fc",
        "1f466-1f3fd",
        "1f466-1f3fe",
        "1f466-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "girl",
        "virgo",
        "young",
        "zodiac"
      ],
      u: "1f467",
      v: [
        "1f467-1f3fb",
        "1f467-1f3fc",
        "1f467-1f3fd",
        "1f467-1f3fe",
        "1f467-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "adult",
        "person",
        "gender neutral",
        "unspecified gender"
      ],
      u: "1f9d1",
      v: [
        "1f9d1-1f3fb",
        "1f9d1-1f3fc",
        "1f9d1-1f3fd",
        "1f9d1-1f3fe",
        "1f9d1-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "hair",
        "blond",
        "person: blond hair",
        "blond haired person"
      ],
      u: "1f471",
      v: [
        "1f471-1f3fb",
        "1f471-1f3fc",
        "1f471-1f3fd",
        "1f471-1f3fe",
        "1f471-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "adult"
      ],
      u: "1f468",
      v: [
        "1f468-1f3fb",
        "1f468-1f3fc",
        "1f468-1f3fd",
        "1f468-1f3fe",
        "1f468-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "beard",
        "person",
        "person: beard"
      ],
      u: "1f9d4",
      v: [
        "1f9d4-1f3fb",
        "1f9d4-1f3fc",
        "1f9d4-1f3fd",
        "1f9d4-1f3fe",
        "1f9d4-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "man",
        "beard",
        "man: beard"
      ],
      u: "1f9d4-200d-2642-fe0f",
      v: [
        "1f9d4-1f3fb-200d-2642-fe0f",
        "1f9d4-1f3fc-200d-2642-fe0f",
        "1f9d4-1f3fd-200d-2642-fe0f",
        "1f9d4-1f3fe-200d-2642-fe0f",
        "1f9d4-1f3ff-200d-2642-fe0f"
      ],
      a: "13.1"
    },
    {
      n: [
        "beard",
        "woman",
        "woman: beard"
      ],
      u: "1f9d4-200d-2640-fe0f",
      v: [
        "1f9d4-1f3fb-200d-2640-fe0f",
        "1f9d4-1f3fc-200d-2640-fe0f",
        "1f9d4-1f3fd-200d-2640-fe0f",
        "1f9d4-1f3fe-200d-2640-fe0f",
        "1f9d4-1f3ff-200d-2640-fe0f"
      ],
      a: "13.1"
    },
    {
      n: [
        "man",
        "adult",
        "red hair",
        "man: red hair"
      ],
      u: "1f468-200d-1f9b0",
      v: [
        "1f468-1f3fb-200d-1f9b0",
        "1f468-1f3fc-200d-1f9b0",
        "1f468-1f3fd-200d-1f9b0",
        "1f468-1f3fe-200d-1f9b0",
        "1f468-1f3ff-200d-1f9b0"
      ],
      a: "11"
    },
    {
      n: [
        "man",
        "adult",
        "curly hair",
        "man: curly hair"
      ],
      u: "1f468-200d-1f9b1",
      v: [
        "1f468-1f3fb-200d-1f9b1",
        "1f468-1f3fc-200d-1f9b1",
        "1f468-1f3fd-200d-1f9b1",
        "1f468-1f3fe-200d-1f9b1",
        "1f468-1f3ff-200d-1f9b1"
      ],
      a: "11"
    },
    {
      n: [
        "man",
        "adult",
        "white hair",
        "man: white hair"
      ],
      u: "1f468-200d-1f9b3",
      v: [
        "1f468-1f3fb-200d-1f9b3",
        "1f468-1f3fc-200d-1f9b3",
        "1f468-1f3fd-200d-1f9b3",
        "1f468-1f3fe-200d-1f9b3",
        "1f468-1f3ff-200d-1f9b3"
      ],
      a: "11"
    },
    {
      n: [
        "man",
        "bald",
        "adult",
        "man: bald"
      ],
      u: "1f468-200d-1f9b2",
      v: [
        "1f468-1f3fb-200d-1f9b2",
        "1f468-1f3fc-200d-1f9b2",
        "1f468-1f3fd-200d-1f9b2",
        "1f468-1f3fe-200d-1f9b2",
        "1f468-1f3ff-200d-1f9b2"
      ],
      a: "11"
    },
    {
      n: [
        "woman",
        "adult"
      ],
      u: "1f469",
      v: [
        "1f469-1f3fb",
        "1f469-1f3fc",
        "1f469-1f3fd",
        "1f469-1f3fe",
        "1f469-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "adult",
        "woman",
        "red hair",
        "woman: red hair"
      ],
      u: "1f469-200d-1f9b0",
      v: [
        "1f469-1f3fb-200d-1f9b0",
        "1f469-1f3fc-200d-1f9b0",
        "1f469-1f3fd-200d-1f9b0",
        "1f469-1f3fe-200d-1f9b0",
        "1f469-1f3ff-200d-1f9b0"
      ],
      a: "11"
    },
    {
      n: [
        "adult",
        "person",
        "red hair",
        "gender neutral",
        "person: red hair",
        "unspecified gender"
      ],
      u: "1f9d1-200d-1f9b0",
      v: [
        "1f9d1-1f3fb-200d-1f9b0",
        "1f9d1-1f3fc-200d-1f9b0",
        "1f9d1-1f3fd-200d-1f9b0",
        "1f9d1-1f3fe-200d-1f9b0",
        "1f9d1-1f3ff-200d-1f9b0"
      ],
      a: "12.1"
    },
    {
      n: [
        "adult",
        "woman",
        "curly hair",
        "woman: curly hair"
      ],
      u: "1f469-200d-1f9b1",
      v: [
        "1f469-1f3fb-200d-1f9b1",
        "1f469-1f3fc-200d-1f9b1",
        "1f469-1f3fd-200d-1f9b1",
        "1f469-1f3fe-200d-1f9b1",
        "1f469-1f3ff-200d-1f9b1"
      ],
      a: "11"
    },
    {
      n: [
        "adult",
        "person",
        "curly hair",
        "gender neutral",
        "person: curly hair",
        "unspecified gender"
      ],
      u: "1f9d1-200d-1f9b1",
      v: [
        "1f9d1-1f3fb-200d-1f9b1",
        "1f9d1-1f3fc-200d-1f9b1",
        "1f9d1-1f3fd-200d-1f9b1",
        "1f9d1-1f3fe-200d-1f9b1",
        "1f9d1-1f3ff-200d-1f9b1"
      ],
      a: "12.1"
    },
    {
      n: [
        "adult",
        "woman",
        "white hair",
        "woman: white hair"
      ],
      u: "1f469-200d-1f9b3",
      v: [
        "1f469-1f3fb-200d-1f9b3",
        "1f469-1f3fc-200d-1f9b3",
        "1f469-1f3fd-200d-1f9b3",
        "1f469-1f3fe-200d-1f9b3",
        "1f469-1f3ff-200d-1f9b3"
      ],
      a: "11"
    },
    {
      n: [
        "adult",
        "person",
        "white hair",
        "gender neutral",
        "person: white hair",
        "unspecified gender"
      ],
      u: "1f9d1-200d-1f9b3",
      v: [
        "1f9d1-1f3fb-200d-1f9b3",
        "1f9d1-1f3fc-200d-1f9b3",
        "1f9d1-1f3fd-200d-1f9b3",
        "1f9d1-1f3fe-200d-1f9b3",
        "1f9d1-1f3ff-200d-1f9b3"
      ],
      a: "12.1"
    },
    {
      n: [
        "bald",
        "adult",
        "woman",
        "woman: bald"
      ],
      u: "1f469-200d-1f9b2",
      v: [
        "1f469-1f3fb-200d-1f9b2",
        "1f469-1f3fc-200d-1f9b2",
        "1f469-1f3fd-200d-1f9b2",
        "1f469-1f3fe-200d-1f9b2",
        "1f469-1f3ff-200d-1f9b2"
      ],
      a: "11"
    },
    {
      n: [
        "bald",
        "adult",
        "person",
        "person: bald",
        "gender neutral",
        "unspecified gender"
      ],
      u: "1f9d1-200d-1f9b2",
      v: [
        "1f9d1-1f3fb-200d-1f9b2",
        "1f9d1-1f3fc-200d-1f9b2",
        "1f9d1-1f3fd-200d-1f9b2",
        "1f9d1-1f3fe-200d-1f9b2",
        "1f9d1-1f3ff-200d-1f9b2"
      ],
      a: "12.1"
    },
    {
      n: [
        "hair",
        "woman",
        "blonde",
        "woman: blond hair",
        "blond haired woman"
      ],
      u: "1f471-200d-2640-fe0f",
      v: [
        "1f471-1f3fb-200d-2640-fe0f",
        "1f471-1f3fc-200d-2640-fe0f",
        "1f471-1f3fd-200d-2640-fe0f",
        "1f471-1f3fe-200d-2640-fe0f",
        "1f471-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "man",
        "hair",
        "blond",
        "man: blond hair",
        "blond haired man"
      ],
      u: "1f471-200d-2642-fe0f",
      v: [
        "1f471-1f3fb-200d-2642-fe0f",
        "1f471-1f3fc-200d-2642-fe0f",
        "1f471-1f3fd-200d-2642-fe0f",
        "1f471-1f3fe-200d-2642-fe0f",
        "1f471-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "old",
        "adult",
        "older person",
        "gender neutral",
        "unspecified gender"
      ],
      u: "1f9d3",
      v: [
        "1f9d3-1f3fb",
        "1f9d3-1f3fc",
        "1f9d3-1f3fd",
        "1f9d3-1f3fe",
        "1f9d3-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "man",
        "old",
        "adult",
        "old man"
      ],
      u: "1f474",
      v: [
        "1f474-1f3fb",
        "1f474-1f3fc",
        "1f474-1f3fd",
        "1f474-1f3fe",
        "1f474-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "old",
        "adult",
        "woman",
        "old woman"
      ],
      u: "1f475",
      v: [
        "1f475-1f3fb",
        "1f475-1f3fc",
        "1f475-1f3fd",
        "1f475-1f3fe",
        "1f475-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "frown",
        "gesture",
        "person frowning"
      ],
      u: "1f64d",
      v: [
        "1f64d-1f3fb",
        "1f64d-1f3fc",
        "1f64d-1f3fd",
        "1f64d-1f3fe",
        "1f64d-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "gesture",
        "frowning",
        "man frowning"
      ],
      u: "1f64d-200d-2642-fe0f",
      v: [
        "1f64d-1f3fb-200d-2642-fe0f",
        "1f64d-1f3fc-200d-2642-fe0f",
        "1f64d-1f3fd-200d-2642-fe0f",
        "1f64d-1f3fe-200d-2642-fe0f",
        "1f64d-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "gesture",
        "frowning",
        "woman frowning"
      ],
      u: "1f64d-200d-2640-fe0f",
      v: [
        "1f64d-1f3fb-200d-2640-fe0f",
        "1f64d-1f3fc-200d-2640-fe0f",
        "1f64d-1f3fd-200d-2640-fe0f",
        "1f64d-1f3fe-200d-2640-fe0f",
        "1f64d-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "gesture",
        "pouting",
        "person pouting"
      ],
      u: "1f64e",
      v: [
        "1f64e-1f3fb",
        "1f64e-1f3fc",
        "1f64e-1f3fd",
        "1f64e-1f3fe",
        "1f64e-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "gesture",
        "pouting",
        "man pouting"
      ],
      u: "1f64e-200d-2642-fe0f",
      v: [
        "1f64e-1f3fb-200d-2642-fe0f",
        "1f64e-1f3fc-200d-2642-fe0f",
        "1f64e-1f3fd-200d-2642-fe0f",
        "1f64e-1f3fe-200d-2642-fe0f",
        "1f64e-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "gesture",
        "pouting",
        "woman pouting"
      ],
      u: "1f64e-200d-2640-fe0f",
      v: [
        "1f64e-1f3fb-200d-2640-fe0f",
        "1f64e-1f3fc-200d-2640-fe0f",
        "1f64e-1f3fd-200d-2640-fe0f",
        "1f64e-1f3fe-200d-2640-fe0f",
        "1f64e-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hand",
        "gesture",
        "forbidden",
        "prohibited",
        "person gesturing NO",
        "person gesturing no"
      ],
      u: "1f645",
      v: [
        "1f645-1f3fb",
        "1f645-1f3fc",
        "1f645-1f3fd",
        "1f645-1f3fe",
        "1f645-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "hand",
        "gesture",
        "forbidden",
        "prohibited",
        "man gesturing NO",
        "man gesturing no"
      ],
      u: "1f645-200d-2642-fe0f",
      v: [
        "1f645-1f3fb-200d-2642-fe0f",
        "1f645-1f3fc-200d-2642-fe0f",
        "1f645-1f3fd-200d-2642-fe0f",
        "1f645-1f3fe-200d-2642-fe0f",
        "1f645-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hand",
        "woman",
        "gesture",
        "forbidden",
        "prohibited",
        "woman gesturing NO",
        "woman gesturing no"
      ],
      u: "1f645-200d-2640-fe0f",
      v: [
        "1f645-1f3fb-200d-2640-fe0f",
        "1f645-1f3fc-200d-2640-fe0f",
        "1f645-1f3fd-200d-2640-fe0f",
        "1f645-1f3fe-200d-2640-fe0f",
        "1f645-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ok",
        "hand",
        "gesture",
        "person gesturing OK",
        "person gesturing ok"
      ],
      u: "1f646",
      v: [
        "1f646-1f3fb",
        "1f646-1f3fc",
        "1f646-1f3fd",
        "1f646-1f3fe",
        "1f646-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "ok",
        "man",
        "hand",
        "gesture",
        "man gesturing OK",
        "man gesturing ok"
      ],
      u: "1f646-200d-2642-fe0f",
      v: [
        "1f646-1f3fb-200d-2642-fe0f",
        "1f646-1f3fc-200d-2642-fe0f",
        "1f646-1f3fd-200d-2642-fe0f",
        "1f646-1f3fe-200d-2642-fe0f",
        "1f646-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ok",
        "hand",
        "woman",
        "gesture",
        "woman gesturing OK",
        "woman gesturing ok"
      ],
      u: "1f646-200d-2640-fe0f",
      v: [
        "1f646-1f3fb-200d-2640-fe0f",
        "1f646-1f3fc-200d-2640-fe0f",
        "1f646-1f3fd-200d-2640-fe0f",
        "1f646-1f3fe-200d-2640-fe0f",
        "1f646-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hand",
        "help",
        "sassy",
        "tipping",
        "information",
        "person tipping hand"
      ],
      u: "1f481",
      v: [
        "1f481-1f3fb",
        "1f481-1f3fc",
        "1f481-1f3fd",
        "1f481-1f3fe",
        "1f481-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "sassy",
        "tipping hand",
        "man tipping hand"
      ],
      u: "1f481-200d-2642-fe0f",
      v: [
        "1f481-1f3fb-200d-2642-fe0f",
        "1f481-1f3fc-200d-2642-fe0f",
        "1f481-1f3fd-200d-2642-fe0f",
        "1f481-1f3fe-200d-2642-fe0f",
        "1f481-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "sassy",
        "woman",
        "tipping hand",
        "woman tipping hand"
      ],
      u: "1f481-200d-2640-fe0f",
      v: [
        "1f481-1f3fb-200d-2640-fe0f",
        "1f481-1f3fc-200d-2640-fe0f",
        "1f481-1f3fd-200d-2640-fe0f",
        "1f481-1f3fe-200d-2640-fe0f",
        "1f481-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hand",
        "happy",
        "raised",
        "gesture",
        "person raising hand"
      ],
      u: "1f64b",
      v: [
        "1f64b-1f3fb",
        "1f64b-1f3fc",
        "1f64b-1f3fd",
        "1f64b-1f3fe",
        "1f64b-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "gesture",
        "raising hand",
        "man raising hand"
      ],
      u: "1f64b-200d-2642-fe0f",
      v: [
        "1f64b-1f3fb-200d-2642-fe0f",
        "1f64b-1f3fc-200d-2642-fe0f",
        "1f64b-1f3fd-200d-2642-fe0f",
        "1f64b-1f3fe-200d-2642-fe0f",
        "1f64b-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "gesture",
        "raising hand",
        "woman raising hand"
      ],
      u: "1f64b-200d-2640-fe0f",
      v: [
        "1f64b-1f3fb-200d-2640-fe0f",
        "1f64b-1f3fc-200d-2640-fe0f",
        "1f64b-1f3fd-200d-2640-fe0f",
        "1f64b-1f3fe-200d-2640-fe0f",
        "1f64b-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ear",
        "deaf",
        "hear",
        "deaf person",
        "accessibility"
      ],
      u: "1f9cf",
      v: [
        "1f9cf-1f3fb",
        "1f9cf-1f3fc",
        "1f9cf-1f3fd",
        "1f9cf-1f3fe",
        "1f9cf-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "deaf",
        "deaf man"
      ],
      u: "1f9cf-200d-2642-fe0f",
      v: [
        "1f9cf-1f3fb-200d-2642-fe0f",
        "1f9cf-1f3fc-200d-2642-fe0f",
        "1f9cf-1f3fd-200d-2642-fe0f",
        "1f9cf-1f3fe-200d-2642-fe0f",
        "1f9cf-1f3ff-200d-2642-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "deaf",
        "woman",
        "deaf woman"
      ],
      u: "1f9cf-200d-2640-fe0f",
      v: [
        "1f9cf-1f3fb-200d-2640-fe0f",
        "1f9cf-1f3fc-200d-2640-fe0f",
        "1f9cf-1f3fd-200d-2640-fe0f",
        "1f9cf-1f3fe-200d-2640-fe0f",
        "1f9cf-1f3ff-200d-2640-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "bow",
        "sorry",
        "apology",
        "gesture",
        "person bowing"
      ],
      u: "1f647",
      v: [
        "1f647-1f3fb",
        "1f647-1f3fc",
        "1f647-1f3fd",
        "1f647-1f3fe",
        "1f647-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "favor",
        "sorry",
        "bowing",
        "apology",
        "gesture",
        "man bowing"
      ],
      u: "1f647-200d-2642-fe0f",
      v: [
        "1f647-1f3fb-200d-2642-fe0f",
        "1f647-1f3fc-200d-2642-fe0f",
        "1f647-1f3fd-200d-2642-fe0f",
        "1f647-1f3fe-200d-2642-fe0f",
        "1f647-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "favor",
        "sorry",
        "woman",
        "bowing",
        "apology",
        "gesture",
        "woman bowing"
      ],
      u: "1f647-200d-2640-fe0f",
      v: [
        "1f647-1f3fb-200d-2640-fe0f",
        "1f647-1f3fc-200d-2640-fe0f",
        "1f647-1f3fd-200d-2640-fe0f",
        "1f647-1f3fe-200d-2640-fe0f",
        "1f647-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "face",
        "palm",
        "disbelief",
        "exasperation",
        "person facepalming"
      ],
      u: "1f926",
      v: [
        "1f926-1f3fb",
        "1f926-1f3fc",
        "1f926-1f3fd",
        "1f926-1f3fe",
        "1f926-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "facepalm",
        "disbelief",
        "exasperation",
        "man facepalming"
      ],
      u: "1f926-200d-2642-fe0f",
      v: [
        "1f926-1f3fb-200d-2642-fe0f",
        "1f926-1f3fc-200d-2642-fe0f",
        "1f926-1f3fd-200d-2642-fe0f",
        "1f926-1f3fe-200d-2642-fe0f",
        "1f926-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "facepalm",
        "disbelief",
        "exasperation",
        "woman facepalming"
      ],
      u: "1f926-200d-2640-fe0f",
      v: [
        "1f926-1f3fb-200d-2640-fe0f",
        "1f926-1f3fc-200d-2640-fe0f",
        "1f926-1f3fd-200d-2640-fe0f",
        "1f926-1f3fe-200d-2640-fe0f",
        "1f926-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "doubt",
        "shrug",
        "ignorance",
        "indifference",
        "person shrugging"
      ],
      u: "1f937",
      v: [
        "1f937-1f3fb",
        "1f937-1f3fc",
        "1f937-1f3fd",
        "1f937-1f3fe",
        "1f937-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "doubt",
        "shrug",
        "ignorance",
        "indifference",
        "man shrugging"
      ],
      u: "1f937-200d-2642-fe0f",
      v: [
        "1f937-1f3fb-200d-2642-fe0f",
        "1f937-1f3fc-200d-2642-fe0f",
        "1f937-1f3fd-200d-2642-fe0f",
        "1f937-1f3fe-200d-2642-fe0f",
        "1f937-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "doubt",
        "shrug",
        "woman",
        "ignorance",
        "indifference",
        "woman shrugging"
      ],
      u: "1f937-200d-2640-fe0f",
      v: [
        "1f937-1f3fb-200d-2640-fe0f",
        "1f937-1f3fc-200d-2640-fe0f",
        "1f937-1f3fd-200d-2640-fe0f",
        "1f937-1f3fe-200d-2640-fe0f",
        "1f937-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "nurse",
        "doctor",
        "therapist",
        "healthcare",
        "health worker"
      ],
      u: "1f9d1-200d-2695-fe0f",
      v: [
        "1f9d1-1f3fb-200d-2695-fe0f",
        "1f9d1-1f3fc-200d-2695-fe0f",
        "1f9d1-1f3fd-200d-2695-fe0f",
        "1f9d1-1f3fe-200d-2695-fe0f",
        "1f9d1-1f3ff-200d-2695-fe0f"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "nurse",
        "doctor",
        "therapist",
        "healthcare",
        "man health worker"
      ],
      u: "1f468-200d-2695-fe0f",
      v: [
        "1f468-1f3fb-200d-2695-fe0f",
        "1f468-1f3fc-200d-2695-fe0f",
        "1f468-1f3fd-200d-2695-fe0f",
        "1f468-1f3fe-200d-2695-fe0f",
        "1f468-1f3ff-200d-2695-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "nurse",
        "woman",
        "doctor",
        "therapist",
        "healthcare",
        "woman health worker"
      ],
      u: "1f469-200d-2695-fe0f",
      v: [
        "1f469-1f3fb-200d-2695-fe0f",
        "1f469-1f3fc-200d-2695-fe0f",
        "1f469-1f3fd-200d-2695-fe0f",
        "1f469-1f3fe-200d-2695-fe0f",
        "1f469-1f3ff-200d-2695-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "student",
        "graduate"
      ],
      u: "1f9d1-200d-1f393",
      v: [
        "1f9d1-1f3fb-200d-1f393",
        "1f9d1-1f3fc-200d-1f393",
        "1f9d1-1f3fd-200d-1f393",
        "1f9d1-1f3fe-200d-1f393",
        "1f9d1-1f3ff-200d-1f393"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "student",
        "graduate",
        "man student"
      ],
      u: "1f468-200d-1f393",
      v: [
        "1f468-1f3fb-200d-1f393",
        "1f468-1f3fc-200d-1f393",
        "1f468-1f3fd-200d-1f393",
        "1f468-1f3fe-200d-1f393",
        "1f468-1f3ff-200d-1f393"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "student",
        "graduate",
        "woman student"
      ],
      u: "1f469-200d-1f393",
      v: [
        "1f469-1f3fb-200d-1f393",
        "1f469-1f3fc-200d-1f393",
        "1f469-1f3fd-200d-1f393",
        "1f469-1f3fe-200d-1f393",
        "1f469-1f3ff-200d-1f393"
      ],
      a: "4"
    },
    {
      n: [
        "teacher",
        "lecturer",
        "professor",
        "instructor"
      ],
      u: "1f9d1-200d-1f3eb",
      v: [
        "1f9d1-1f3fb-200d-1f3eb",
        "1f9d1-1f3fc-200d-1f3eb",
        "1f9d1-1f3fd-200d-1f3eb",
        "1f9d1-1f3fe-200d-1f3eb",
        "1f9d1-1f3ff-200d-1f3eb"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "teacher",
        "lecturer",
        "professor",
        "instructor",
        "man teacher"
      ],
      u: "1f468-200d-1f3eb",
      v: [
        "1f468-1f3fb-200d-1f3eb",
        "1f468-1f3fc-200d-1f3eb",
        "1f468-1f3fd-200d-1f3eb",
        "1f468-1f3fe-200d-1f3eb",
        "1f468-1f3ff-200d-1f3eb"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "teacher",
        "lecturer",
        "professor",
        "instructor",
        "woman teacher"
      ],
      u: "1f469-200d-1f3eb",
      v: [
        "1f469-1f3fb-200d-1f3eb",
        "1f469-1f3fc-200d-1f3eb",
        "1f469-1f3fd-200d-1f3eb",
        "1f469-1f3fe-200d-1f3eb",
        "1f469-1f3ff-200d-1f3eb"
      ],
      a: "4"
    },
    {
      n: [
        "law",
        "judge",
        "scales",
        "justice"
      ],
      u: "1f9d1-200d-2696-fe0f",
      v: [
        "1f9d1-1f3fb-200d-2696-fe0f",
        "1f9d1-1f3fc-200d-2696-fe0f",
        "1f9d1-1f3fd-200d-2696-fe0f",
        "1f9d1-1f3fe-200d-2696-fe0f",
        "1f9d1-1f3ff-200d-2696-fe0f"
      ],
      a: "12.1"
    },
    {
      n: [
        "law",
        "man",
        "judge",
        "scales",
        "justice",
        "man judge"
      ],
      u: "1f468-200d-2696-fe0f",
      v: [
        "1f468-1f3fb-200d-2696-fe0f",
        "1f468-1f3fc-200d-2696-fe0f",
        "1f468-1f3fd-200d-2696-fe0f",
        "1f468-1f3fe-200d-2696-fe0f",
        "1f468-1f3ff-200d-2696-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "law",
        "judge",
        "woman",
        "scales",
        "justice",
        "woman judge"
      ],
      u: "1f469-200d-2696-fe0f",
      v: [
        "1f469-1f3fb-200d-2696-fe0f",
        "1f469-1f3fc-200d-2696-fe0f",
        "1f469-1f3fd-200d-2696-fe0f",
        "1f469-1f3fe-200d-2696-fe0f",
        "1f469-1f3ff-200d-2696-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "farmer",
        "rancher",
        "gardener"
      ],
      u: "1f9d1-200d-1f33e",
      v: [
        "1f9d1-1f3fb-200d-1f33e",
        "1f9d1-1f3fc-200d-1f33e",
        "1f9d1-1f3fd-200d-1f33e",
        "1f9d1-1f3fe-200d-1f33e",
        "1f9d1-1f3ff-200d-1f33e"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "farmer",
        "rancher",
        "gardener",
        "man farmer"
      ],
      u: "1f468-200d-1f33e",
      v: [
        "1f468-1f3fb-200d-1f33e",
        "1f468-1f3fc-200d-1f33e",
        "1f468-1f3fd-200d-1f33e",
        "1f468-1f3fe-200d-1f33e",
        "1f468-1f3ff-200d-1f33e"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "farmer",
        "rancher",
        "gardener",
        "woman farmer"
      ],
      u: "1f469-200d-1f33e",
      v: [
        "1f469-1f3fb-200d-1f33e",
        "1f469-1f3fc-200d-1f33e",
        "1f469-1f3fd-200d-1f33e",
        "1f469-1f3fe-200d-1f33e",
        "1f469-1f3ff-200d-1f33e"
      ],
      a: "4"
    },
    {
      n: [
        "cook",
        "chef"
      ],
      u: "1f9d1-200d-1f373",
      v: [
        "1f9d1-1f3fb-200d-1f373",
        "1f9d1-1f3fc-200d-1f373",
        "1f9d1-1f3fd-200d-1f373",
        "1f9d1-1f3fe-200d-1f373",
        "1f9d1-1f3ff-200d-1f373"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "chef",
        "cook",
        "man cook"
      ],
      u: "1f468-200d-1f373",
      v: [
        "1f468-1f3fb-200d-1f373",
        "1f468-1f3fc-200d-1f373",
        "1f468-1f3fd-200d-1f373",
        "1f468-1f3fe-200d-1f373",
        "1f468-1f3ff-200d-1f373"
      ],
      a: "4"
    },
    {
      n: [
        "chef",
        "cook",
        "woman",
        "woman cook"
      ],
      u: "1f469-200d-1f373",
      v: [
        "1f469-1f3fb-200d-1f373",
        "1f469-1f3fc-200d-1f373",
        "1f469-1f3fd-200d-1f373",
        "1f469-1f3fe-200d-1f373",
        "1f469-1f3ff-200d-1f373"
      ],
      a: "4"
    },
    {
      n: [
        "plumber",
        "mechanic",
        "electrician",
        "tradesperson"
      ],
      u: "1f9d1-200d-1f527",
      v: [
        "1f9d1-1f3fb-200d-1f527",
        "1f9d1-1f3fc-200d-1f527",
        "1f9d1-1f3fd-200d-1f527",
        "1f9d1-1f3fe-200d-1f527",
        "1f9d1-1f3ff-200d-1f527"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "plumber",
        "mechanic",
        "electrician",
        "man mechanic",
        "tradesperson"
      ],
      u: "1f468-200d-1f527",
      v: [
        "1f468-1f3fb-200d-1f527",
        "1f468-1f3fc-200d-1f527",
        "1f468-1f3fd-200d-1f527",
        "1f468-1f3fe-200d-1f527",
        "1f468-1f3ff-200d-1f527"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "plumber",
        "mechanic",
        "electrician",
        "tradesperson",
        "woman mechanic"
      ],
      u: "1f469-200d-1f527",
      v: [
        "1f469-1f3fb-200d-1f527",
        "1f469-1f3fc-200d-1f527",
        "1f469-1f3fd-200d-1f527",
        "1f469-1f3fe-200d-1f527",
        "1f469-1f3ff-200d-1f527"
      ],
      a: "4"
    },
    {
      n: [
        "worker",
        "factory",
        "assembly",
        "industrial",
        "factory worker"
      ],
      u: "1f9d1-200d-1f3ed",
      v: [
        "1f9d1-1f3fb-200d-1f3ed",
        "1f9d1-1f3fc-200d-1f3ed",
        "1f9d1-1f3fd-200d-1f3ed",
        "1f9d1-1f3fe-200d-1f3ed",
        "1f9d1-1f3ff-200d-1f3ed"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "worker",
        "factory",
        "assembly",
        "industrial",
        "man factory worker"
      ],
      u: "1f468-200d-1f3ed",
      v: [
        "1f468-1f3fb-200d-1f3ed",
        "1f468-1f3fc-200d-1f3ed",
        "1f468-1f3fd-200d-1f3ed",
        "1f468-1f3fe-200d-1f3ed",
        "1f468-1f3ff-200d-1f3ed"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "worker",
        "factory",
        "assembly",
        "industrial",
        "woman factory worker"
      ],
      u: "1f469-200d-1f3ed",
      v: [
        "1f469-1f3fb-200d-1f3ed",
        "1f469-1f3fc-200d-1f3ed",
        "1f469-1f3fd-200d-1f3ed",
        "1f469-1f3fe-200d-1f3ed",
        "1f469-1f3ff-200d-1f3ed"
      ],
      a: "4"
    },
    {
      n: [
        "manager",
        "business",
        "architect",
        "white collar",
        "office worker"
      ],
      u: "1f9d1-200d-1f4bc",
      v: [
        "1f9d1-1f3fb-200d-1f4bc",
        "1f9d1-1f3fc-200d-1f4bc",
        "1f9d1-1f3fd-200d-1f4bc",
        "1f9d1-1f3fe-200d-1f4bc",
        "1f9d1-1f3ff-200d-1f4bc"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "manager",
        "business",
        "architect",
        "white collar",
        "man office worker"
      ],
      u: "1f468-200d-1f4bc",
      v: [
        "1f468-1f3fb-200d-1f4bc",
        "1f468-1f3fc-200d-1f4bc",
        "1f468-1f3fd-200d-1f4bc",
        "1f468-1f3fe-200d-1f4bc",
        "1f468-1f3ff-200d-1f4bc"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "manager",
        "business",
        "architect",
        "white collar",
        "woman office worker"
      ],
      u: "1f469-200d-1f4bc",
      v: [
        "1f469-1f3fb-200d-1f4bc",
        "1f469-1f3fc-200d-1f4bc",
        "1f469-1f3fd-200d-1f4bc",
        "1f469-1f3fe-200d-1f4bc",
        "1f469-1f3ff-200d-1f4bc"
      ],
      a: "4"
    },
    {
      n: [
        "chemist",
        "engineer",
        "scientist",
        "biologist",
        "physicist"
      ],
      u: "1f9d1-200d-1f52c",
      v: [
        "1f9d1-1f3fb-200d-1f52c",
        "1f9d1-1f3fc-200d-1f52c",
        "1f9d1-1f3fd-200d-1f52c",
        "1f9d1-1f3fe-200d-1f52c",
        "1f9d1-1f3ff-200d-1f52c"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "chemist",
        "engineer",
        "biologist",
        "physicist",
        "scientist",
        "man scientist"
      ],
      u: "1f468-200d-1f52c",
      v: [
        "1f468-1f3fb-200d-1f52c",
        "1f468-1f3fc-200d-1f52c",
        "1f468-1f3fd-200d-1f52c",
        "1f468-1f3fe-200d-1f52c",
        "1f468-1f3ff-200d-1f52c"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "chemist",
        "engineer",
        "biologist",
        "physicist",
        "scientist",
        "woman scientist"
      ],
      u: "1f469-200d-1f52c",
      v: [
        "1f469-1f3fb-200d-1f52c",
        "1f469-1f3fc-200d-1f52c",
        "1f469-1f3fd-200d-1f52c",
        "1f469-1f3fe-200d-1f52c",
        "1f469-1f3ff-200d-1f52c"
      ],
      a: "4"
    },
    {
      n: [
        "coder",
        "inventor",
        "software",
        "developer",
        "technologist"
      ],
      u: "1f9d1-200d-1f4bb",
      v: [
        "1f9d1-1f3fb-200d-1f4bb",
        "1f9d1-1f3fc-200d-1f4bb",
        "1f9d1-1f3fd-200d-1f4bb",
        "1f9d1-1f3fe-200d-1f4bb",
        "1f9d1-1f3ff-200d-1f4bb"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "coder",
        "inventor",
        "software",
        "developer",
        "technologist",
        "man technologist"
      ],
      u: "1f468-200d-1f4bb",
      v: [
        "1f468-1f3fb-200d-1f4bb",
        "1f468-1f3fc-200d-1f4bb",
        "1f468-1f3fd-200d-1f4bb",
        "1f468-1f3fe-200d-1f4bb",
        "1f468-1f3ff-200d-1f4bb"
      ],
      a: "4"
    },
    {
      n: [
        "coder",
        "woman",
        "inventor",
        "software",
        "developer",
        "technologist",
        "woman technologist"
      ],
      u: "1f469-200d-1f4bb",
      v: [
        "1f469-1f3fb-200d-1f4bb",
        "1f469-1f3fc-200d-1f4bb",
        "1f469-1f3fd-200d-1f4bb",
        "1f469-1f3fe-200d-1f4bb",
        "1f469-1f3ff-200d-1f4bb"
      ],
      a: "4"
    },
    {
      n: [
        "rock",
        "star",
        "actor",
        "singer",
        "entertainer"
      ],
      u: "1f9d1-200d-1f3a4",
      v: [
        "1f9d1-1f3fb-200d-1f3a4",
        "1f9d1-1f3fc-200d-1f3a4",
        "1f9d1-1f3fd-200d-1f3a4",
        "1f9d1-1f3fe-200d-1f3a4",
        "1f9d1-1f3ff-200d-1f3a4"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "rock",
        "star",
        "actor",
        "singer",
        "man singer",
        "entertainer"
      ],
      u: "1f468-200d-1f3a4",
      v: [
        "1f468-1f3fb-200d-1f3a4",
        "1f468-1f3fc-200d-1f3a4",
        "1f468-1f3fd-200d-1f3a4",
        "1f468-1f3fe-200d-1f3a4",
        "1f468-1f3ff-200d-1f3a4"
      ],
      a: "4"
    },
    {
      n: [
        "rock",
        "star",
        "actor",
        "woman",
        "singer",
        "entertainer",
        "woman singer"
      ],
      u: "1f469-200d-1f3a4",
      v: [
        "1f469-1f3fb-200d-1f3a4",
        "1f469-1f3fc-200d-1f3a4",
        "1f469-1f3fd-200d-1f3a4",
        "1f469-1f3fe-200d-1f3a4",
        "1f469-1f3ff-200d-1f3a4"
      ],
      a: "4"
    },
    {
      n: [
        "artist",
        "palette"
      ],
      u: "1f9d1-200d-1f3a8",
      v: [
        "1f9d1-1f3fb-200d-1f3a8",
        "1f9d1-1f3fc-200d-1f3a8",
        "1f9d1-1f3fd-200d-1f3a8",
        "1f9d1-1f3fe-200d-1f3a8",
        "1f9d1-1f3ff-200d-1f3a8"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "artist",
        "palette",
        "man artist"
      ],
      u: "1f468-200d-1f3a8",
      v: [
        "1f468-1f3fb-200d-1f3a8",
        "1f468-1f3fc-200d-1f3a8",
        "1f468-1f3fd-200d-1f3a8",
        "1f468-1f3fe-200d-1f3a8",
        "1f468-1f3ff-200d-1f3a8"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "artist",
        "palette",
        "woman artist"
      ],
      u: "1f469-200d-1f3a8",
      v: [
        "1f469-1f3fb-200d-1f3a8",
        "1f469-1f3fc-200d-1f3a8",
        "1f469-1f3fd-200d-1f3a8",
        "1f469-1f3fe-200d-1f3a8",
        "1f469-1f3ff-200d-1f3a8"
      ],
      a: "4"
    },
    {
      n: [
        "pilot",
        "plane"
      ],
      u: "1f9d1-200d-2708-fe0f",
      v: [
        "1f9d1-1f3fb-200d-2708-fe0f",
        "1f9d1-1f3fc-200d-2708-fe0f",
        "1f9d1-1f3fd-200d-2708-fe0f",
        "1f9d1-1f3fe-200d-2708-fe0f",
        "1f9d1-1f3ff-200d-2708-fe0f"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "pilot",
        "plane",
        "man pilot"
      ],
      u: "1f468-200d-2708-fe0f",
      v: [
        "1f468-1f3fb-200d-2708-fe0f",
        "1f468-1f3fc-200d-2708-fe0f",
        "1f468-1f3fd-200d-2708-fe0f",
        "1f468-1f3fe-200d-2708-fe0f",
        "1f468-1f3ff-200d-2708-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "pilot",
        "plane",
        "woman",
        "woman pilot"
      ],
      u: "1f469-200d-2708-fe0f",
      v: [
        "1f469-1f3fb-200d-2708-fe0f",
        "1f469-1f3fc-200d-2708-fe0f",
        "1f469-1f3fd-200d-2708-fe0f",
        "1f469-1f3fe-200d-2708-fe0f",
        "1f469-1f3ff-200d-2708-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "rocket",
        "astronaut"
      ],
      u: "1f9d1-200d-1f680",
      v: [
        "1f9d1-1f3fb-200d-1f680",
        "1f9d1-1f3fc-200d-1f680",
        "1f9d1-1f3fd-200d-1f680",
        "1f9d1-1f3fe-200d-1f680",
        "1f9d1-1f3ff-200d-1f680"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "rocket",
        "astronaut",
        "man astronaut"
      ],
      u: "1f468-200d-1f680",
      v: [
        "1f468-1f3fb-200d-1f680",
        "1f468-1f3fc-200d-1f680",
        "1f468-1f3fd-200d-1f680",
        "1f468-1f3fe-200d-1f680",
        "1f468-1f3ff-200d-1f680"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "rocket",
        "astronaut",
        "woman astronaut"
      ],
      u: "1f469-200d-1f680",
      v: [
        "1f469-1f3fb-200d-1f680",
        "1f469-1f3fc-200d-1f680",
        "1f469-1f3fd-200d-1f680",
        "1f469-1f3fe-200d-1f680",
        "1f469-1f3ff-200d-1f680"
      ],
      a: "4"
    },
    {
      n: [
        "fire",
        "firetruck",
        "firefighter"
      ],
      u: "1f9d1-200d-1f692",
      v: [
        "1f9d1-1f3fb-200d-1f692",
        "1f9d1-1f3fc-200d-1f692",
        "1f9d1-1f3fd-200d-1f692",
        "1f9d1-1f3fe-200d-1f692",
        "1f9d1-1f3ff-200d-1f692"
      ],
      a: "12.1"
    },
    {
      n: [
        "man",
        "firetruck",
        "firefighter",
        "man firefighter"
      ],
      u: "1f468-200d-1f692",
      v: [
        "1f468-1f3fb-200d-1f692",
        "1f468-1f3fc-200d-1f692",
        "1f468-1f3fd-200d-1f692",
        "1f468-1f3fe-200d-1f692",
        "1f468-1f3ff-200d-1f692"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "firetruck",
        "firefighter",
        "woman firefighter"
      ],
      u: "1f469-200d-1f692",
      v: [
        "1f469-1f3fb-200d-1f692",
        "1f469-1f3fc-200d-1f692",
        "1f469-1f3fd-200d-1f692",
        "1f469-1f3fe-200d-1f692",
        "1f469-1f3ff-200d-1f692"
      ],
      a: "4"
    },
    {
      n: [
        "cop",
        "police",
        "officer",
        "police officer"
      ],
      u: "1f46e",
      v: [
        "1f46e-1f3fb",
        "1f46e-1f3fc",
        "1f46e-1f3fd",
        "1f46e-1f3fe",
        "1f46e-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "cop",
        "man",
        "police",
        "officer",
        "man police officer"
      ],
      u: "1f46e-200d-2642-fe0f",
      v: [
        "1f46e-1f3fb-200d-2642-fe0f",
        "1f46e-1f3fc-200d-2642-fe0f",
        "1f46e-1f3fd-200d-2642-fe0f",
        "1f46e-1f3fe-200d-2642-fe0f",
        "1f46e-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "cop",
        "woman",
        "police",
        "officer",
        "woman police officer"
      ],
      u: "1f46e-200d-2640-fe0f",
      v: [
        "1f46e-1f3fb-200d-2640-fe0f",
        "1f46e-1f3fc-200d-2640-fe0f",
        "1f46e-1f3fd-200d-2640-fe0f",
        "1f46e-1f3fe-200d-2640-fe0f",
        "1f46e-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "spy",
        "sleuth",
        "detective"
      ],
      u: "1f575-fe0f",
      v: [
        "1f575-1f3fb",
        "1f575-1f3fc",
        "1f575-1f3fd",
        "1f575-1f3fe",
        "1f575-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "man",
        "spy",
        "sleuth",
        "detective",
        "man detective"
      ],
      u: "1f575-fe0f-200d-2642-fe0f",
      v: [
        "1f575-1f3fb-200d-2642-fe0f",
        "1f575-1f3fc-200d-2642-fe0f",
        "1f575-1f3fd-200d-2642-fe0f",
        "1f575-1f3fe-200d-2642-fe0f",
        "1f575-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "spy",
        "woman",
        "sleuth",
        "detective",
        "woman detective"
      ],
      u: "1f575-fe0f-200d-2640-fe0f",
      v: [
        "1f575-1f3fb-200d-2640-fe0f",
        "1f575-1f3fc-200d-2640-fe0f",
        "1f575-1f3fd-200d-2640-fe0f",
        "1f575-1f3fe-200d-2640-fe0f",
        "1f575-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "guard"
      ],
      u: "1f482",
      v: [
        "1f482-1f3fb",
        "1f482-1f3fc",
        "1f482-1f3fd",
        "1f482-1f3fe",
        "1f482-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "guard",
        "man guard"
      ],
      u: "1f482-200d-2642-fe0f",
      v: [
        "1f482-1f3fb-200d-2642-fe0f",
        "1f482-1f3fc-200d-2642-fe0f",
        "1f482-1f3fd-200d-2642-fe0f",
        "1f482-1f3fe-200d-2642-fe0f",
        "1f482-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "guard",
        "woman",
        "woman guard"
      ],
      u: "1f482-200d-2640-fe0f",
      v: [
        "1f482-1f3fb-200d-2640-fe0f",
        "1f482-1f3fc-200d-2640-fe0f",
        "1f482-1f3fd-200d-2640-fe0f",
        "1f482-1f3fe-200d-2640-fe0f",
        "1f482-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ninja",
        "hidden",
        "fighter",
        "stealth"
      ],
      u: "1f977",
      v: [
        "1f977-1f3fb",
        "1f977-1f3fc",
        "1f977-1f3fd",
        "1f977-1f3fe",
        "1f977-1f3ff"
      ],
      a: "13"
    },
    {
      n: [
        "hat",
        "worker",
        "construction",
        "construction worker"
      ],
      u: "1f477",
      v: [
        "1f477-1f3fb",
        "1f477-1f3fc",
        "1f477-1f3fd",
        "1f477-1f3fe",
        "1f477-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "worker",
        "construction",
        "man construction worker"
      ],
      u: "1f477-200d-2642-fe0f",
      v: [
        "1f477-1f3fb-200d-2642-fe0f",
        "1f477-1f3fc-200d-2642-fe0f",
        "1f477-1f3fd-200d-2642-fe0f",
        "1f477-1f3fe-200d-2642-fe0f",
        "1f477-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "worker",
        "construction",
        "woman construction worker"
      ],
      u: "1f477-200d-2640-fe0f",
      v: [
        "1f477-1f3fb-200d-2640-fe0f",
        "1f477-1f3fc-200d-2640-fe0f",
        "1f477-1f3fd-200d-2640-fe0f",
        "1f477-1f3fe-200d-2640-fe0f",
        "1f477-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "noble",
        "regal",
        "monarch",
        "royalty",
        "person with crown"
      ],
      u: "1fac5",
      v: [
        "1fac5-1f3fb",
        "1fac5-1f3fc",
        "1fac5-1f3fd",
        "1fac5-1f3fe",
        "1fac5-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "prince"
      ],
      u: "1f934",
      v: [
        "1f934-1f3fb",
        "1f934-1f3fc",
        "1f934-1f3fd",
        "1f934-1f3fe",
        "1f934-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "fantasy",
        "princess",
        "fairy tale"
      ],
      u: "1f478",
      v: [
        "1f478-1f3fb",
        "1f478-1f3fc",
        "1f478-1f3fd",
        "1f478-1f3fe",
        "1f478-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "turban",
        "person wearing turban"
      ],
      u: "1f473",
      v: [
        "1f473-1f3fb",
        "1f473-1f3fc",
        "1f473-1f3fd",
        "1f473-1f3fe",
        "1f473-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "turban",
        "man wearing turban"
      ],
      u: "1f473-200d-2642-fe0f",
      v: [
        "1f473-1f3fb-200d-2642-fe0f",
        "1f473-1f3fc-200d-2642-fe0f",
        "1f473-1f3fd-200d-2642-fe0f",
        "1f473-1f3fe-200d-2642-fe0f",
        "1f473-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "turban",
        "woman wearing turban"
      ],
      u: "1f473-200d-2640-fe0f",
      v: [
        "1f473-1f3fb-200d-2640-fe0f",
        "1f473-1f3fc-200d-2640-fe0f",
        "1f473-1f3fd-200d-2640-fe0f",
        "1f473-1f3fe-200d-2640-fe0f",
        "1f473-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "cap",
        "hat",
        "person",
        "skullcap",
        "gua pi mao",
        "person with skullcap"
      ],
      u: "1f472",
      v: [
        "1f472-1f3fb",
        "1f472-1f3fc",
        "1f472-1f3fd",
        "1f472-1f3fe",
        "1f472-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hijab",
        "tichel",
        "mantilla",
        "headscarf",
        "woman with headscarf"
      ],
      u: "1f9d5",
      v: [
        "1f9d5-1f3fb",
        "1f9d5-1f3fc",
        "1f9d5-1f3fd",
        "1f9d5-1f3fe",
        "1f9d5-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "groom",
        "person",
        "tuxedo",
        "person in tuxedo"
      ],
      u: "1f935",
      v: [
        "1f935-1f3fb",
        "1f935-1f3fc",
        "1f935-1f3fd",
        "1f935-1f3fe",
        "1f935-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "tuxedo",
        "man in tuxedo"
      ],
      u: "1f935-200d-2642-fe0f",
      v: [
        "1f935-1f3fb-200d-2642-fe0f",
        "1f935-1f3fc-200d-2642-fe0f",
        "1f935-1f3fd-200d-2642-fe0f",
        "1f935-1f3fe-200d-2642-fe0f",
        "1f935-1f3ff-200d-2642-fe0f"
      ],
      a: "13"
    },
    {
      n: [
        "woman",
        "tuxedo",
        "woman in tuxedo"
      ],
      u: "1f935-200d-2640-fe0f",
      v: [
        "1f935-1f3fb-200d-2640-fe0f",
        "1f935-1f3fc-200d-2640-fe0f",
        "1f935-1f3fd-200d-2640-fe0f",
        "1f935-1f3fe-200d-2640-fe0f",
        "1f935-1f3ff-200d-2640-fe0f"
      ],
      a: "13"
    },
    {
      n: [
        "veil",
        "bride",
        "person",
        "wedding",
        "person with veil"
      ],
      u: "1f470",
      v: [
        "1f470-1f3fb",
        "1f470-1f3fc",
        "1f470-1f3fd",
        "1f470-1f3fe",
        "1f470-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "veil",
        "man with veil"
      ],
      u: "1f470-200d-2642-fe0f",
      v: [
        "1f470-1f3fb-200d-2642-fe0f",
        "1f470-1f3fc-200d-2642-fe0f",
        "1f470-1f3fd-200d-2642-fe0f",
        "1f470-1f3fe-200d-2642-fe0f",
        "1f470-1f3ff-200d-2642-fe0f"
      ],
      a: "13"
    },
    {
      n: [
        "veil",
        "woman",
        "woman with veil"
      ],
      u: "1f470-200d-2640-fe0f",
      v: [
        "1f470-1f3fb-200d-2640-fe0f",
        "1f470-1f3fc-200d-2640-fe0f",
        "1f470-1f3fd-200d-2640-fe0f",
        "1f470-1f3fe-200d-2640-fe0f",
        "1f470-1f3ff-200d-2640-fe0f"
      ],
      a: "13"
    },
    {
      n: [
        "woman",
        "pregnant",
        "pregnant woman"
      ],
      u: "1f930",
      v: [
        "1f930-1f3fb",
        "1f930-1f3fc",
        "1f930-1f3fd",
        "1f930-1f3fe",
        "1f930-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "full",
        "belly",
        "bloated",
        "pregnant",
        "pregnant man"
      ],
      u: "1fac3",
      v: [
        "1fac3-1f3fb",
        "1fac3-1f3fc",
        "1fac3-1f3fd",
        "1fac3-1f3fe",
        "1fac3-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "full",
        "belly",
        "bloated",
        "pregnant",
        "pregnant person"
      ],
      u: "1fac4",
      v: [
        "1fac4-1f3fb",
        "1fac4-1f3fc",
        "1fac4-1f3fd",
        "1fac4-1f3fe",
        "1fac4-1f3ff"
      ],
      a: "14"
    },
    {
      n: [
        "baby",
        "breast",
        "nursing",
        "breast feeding"
      ],
      u: "1f931",
      v: [
        "1f931-1f3fb",
        "1f931-1f3fc",
        "1f931-1f3fd",
        "1f931-1f3fe",
        "1f931-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "baby",
        "woman",
        "feeding",
        "nursing",
        "woman feeding baby"
      ],
      u: "1f469-200d-1f37c",
      v: [
        "1f469-1f3fb-200d-1f37c",
        "1f469-1f3fc-200d-1f37c",
        "1f469-1f3fd-200d-1f37c",
        "1f469-1f3fe-200d-1f37c",
        "1f469-1f3ff-200d-1f37c"
      ],
      a: "13"
    },
    {
      n: [
        "man",
        "baby",
        "feeding",
        "nursing",
        "man feeding baby"
      ],
      u: "1f468-200d-1f37c",
      v: [
        "1f468-1f3fb-200d-1f37c",
        "1f468-1f3fc-200d-1f37c",
        "1f468-1f3fd-200d-1f37c",
        "1f468-1f3fe-200d-1f37c",
        "1f468-1f3ff-200d-1f37c"
      ],
      a: "13"
    },
    {
      n: [
        "baby",
        "person",
        "feeding",
        "nursing",
        "person feeding baby"
      ],
      u: "1f9d1-200d-1f37c",
      v: [
        "1f9d1-1f3fb-200d-1f37c",
        "1f9d1-1f3fc-200d-1f37c",
        "1f9d1-1f3fd-200d-1f37c",
        "1f9d1-1f3fe-200d-1f37c",
        "1f9d1-1f3ff-200d-1f37c"
      ],
      a: "13"
    },
    {
      n: [
        "baby",
        "face",
        "angel",
        "fantasy",
        "baby angel",
        "fairy tale"
      ],
      u: "1f47c",
      v: [
        "1f47c-1f3fb",
        "1f47c-1f3fc",
        "1f47c-1f3fd",
        "1f47c-1f3fe",
        "1f47c-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "claus",
        "santa",
        "father",
        "christmas",
        "Santa Claus",
        "celebration"
      ],
      u: "1f385",
      v: [
        "1f385-1f3fb",
        "1f385-1f3fc",
        "1f385-1f3fd",
        "1f385-1f3fe",
        "1f385-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "mrs.",
        "claus",
        "mother",
        "christmas",
        "Mrs. Claus",
        "celebration"
      ],
      u: "1f936",
      v: [
        "1f936-1f3fb",
        "1f936-1f3fc",
        "1f936-1f3fd",
        "1f936-1f3fe",
        "1f936-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "claus",
        "mx claus",
        "christmas"
      ],
      u: "1f9d1-200d-1f384",
      v: [
        "1f9d1-1f3fb-200d-1f384",
        "1f9d1-1f3fc-200d-1f384",
        "1f9d1-1f3fd-200d-1f384",
        "1f9d1-1f3fe-200d-1f384",
        "1f9d1-1f3ff-200d-1f384"
      ],
      a: "13"
    },
    {
      n: [
        "good",
        "hero",
        "heroine",
        "superhero",
        "superpower"
      ],
      u: "1f9b8",
      v: [
        "1f9b8-1f3fb",
        "1f9b8-1f3fc",
        "1f9b8-1f3fd",
        "1f9b8-1f3fe",
        "1f9b8-1f3ff"
      ],
      a: "11"
    },
    {
      n: [
        "man",
        "good",
        "hero",
        "superpower",
        "man superhero"
      ],
      u: "1f9b8-200d-2642-fe0f",
      v: [
        "1f9b8-1f3fb-200d-2642-fe0f",
        "1f9b8-1f3fc-200d-2642-fe0f",
        "1f9b8-1f3fd-200d-2642-fe0f",
        "1f9b8-1f3fe-200d-2642-fe0f",
        "1f9b8-1f3ff-200d-2642-fe0f"
      ],
      a: "11"
    },
    {
      n: [
        "good",
        "hero",
        "woman",
        "heroine",
        "superpower",
        "woman superhero"
      ],
      u: "1f9b8-200d-2640-fe0f",
      v: [
        "1f9b8-1f3fb-200d-2640-fe0f",
        "1f9b8-1f3fc-200d-2640-fe0f",
        "1f9b8-1f3fd-200d-2640-fe0f",
        "1f9b8-1f3fe-200d-2640-fe0f",
        "1f9b8-1f3ff-200d-2640-fe0f"
      ],
      a: "11"
    },
    {
      n: [
        "evil",
        "villain",
        "criminal",
        "superpower",
        "supervillain"
      ],
      u: "1f9b9",
      v: [
        "1f9b9-1f3fb",
        "1f9b9-1f3fc",
        "1f9b9-1f3fd",
        "1f9b9-1f3fe",
        "1f9b9-1f3ff"
      ],
      a: "11"
    },
    {
      n: [
        "man",
        "evil",
        "villain",
        "criminal",
        "superpower",
        "man supervillain"
      ],
      u: "1f9b9-200d-2642-fe0f",
      v: [
        "1f9b9-1f3fb-200d-2642-fe0f",
        "1f9b9-1f3fc-200d-2642-fe0f",
        "1f9b9-1f3fd-200d-2642-fe0f",
        "1f9b9-1f3fe-200d-2642-fe0f",
        "1f9b9-1f3ff-200d-2642-fe0f"
      ],
      a: "11"
    },
    {
      n: [
        "evil",
        "woman",
        "villain",
        "criminal",
        "superpower",
        "woman supervillain"
      ],
      u: "1f9b9-200d-2640-fe0f",
      v: [
        "1f9b9-1f3fb-200d-2640-fe0f",
        "1f9b9-1f3fc-200d-2640-fe0f",
        "1f9b9-1f3fd-200d-2640-fe0f",
        "1f9b9-1f3fe-200d-2640-fe0f",
        "1f9b9-1f3ff-200d-2640-fe0f"
      ],
      a: "11"
    },
    {
      n: [
        "mage",
        "witch",
        "wizard",
        "sorcerer",
        "sorceress"
      ],
      u: "1f9d9",
      v: [
        "1f9d9-1f3fb",
        "1f9d9-1f3fc",
        "1f9d9-1f3fd",
        "1f9d9-1f3fe",
        "1f9d9-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "wizard",
        "man mage",
        "sorcerer"
      ],
      u: "1f9d9-200d-2642-fe0f",
      v: [
        "1f9d9-1f3fb-200d-2642-fe0f",
        "1f9d9-1f3fc-200d-2642-fe0f",
        "1f9d9-1f3fd-200d-2642-fe0f",
        "1f9d9-1f3fe-200d-2642-fe0f",
        "1f9d9-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "witch",
        "sorceress",
        "woman mage"
      ],
      u: "1f9d9-200d-2640-fe0f",
      v: [
        "1f9d9-1f3fb-200d-2640-fe0f",
        "1f9d9-1f3fc-200d-2640-fe0f",
        "1f9d9-1f3fd-200d-2640-fe0f",
        "1f9d9-1f3fe-200d-2640-fe0f",
        "1f9d9-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "puck",
        "fairy",
        "oberon",
        "titania"
      ],
      u: "1f9da",
      v: [
        "1f9da-1f3fb",
        "1f9da-1f3fc",
        "1f9da-1f3fd",
        "1f9da-1f3fe",
        "1f9da-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "puck",
        "oberon",
        "man fairy"
      ],
      u: "1f9da-200d-2642-fe0f",
      v: [
        "1f9da-1f3fb-200d-2642-fe0f",
        "1f9da-1f3fc-200d-2642-fe0f",
        "1f9da-1f3fd-200d-2642-fe0f",
        "1f9da-1f3fe-200d-2642-fe0f",
        "1f9da-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "titania",
        "woman fairy"
      ],
      u: "1f9da-200d-2640-fe0f",
      v: [
        "1f9da-1f3fb-200d-2640-fe0f",
        "1f9da-1f3fc-200d-2640-fe0f",
        "1f9da-1f3fd-200d-2640-fe0f",
        "1f9da-1f3fe-200d-2640-fe0f",
        "1f9da-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "undead",
        "vampire",
        "dracula"
      ],
      u: "1f9db",
      v: [
        "1f9db-1f3fb",
        "1f9db-1f3fc",
        "1f9db-1f3fd",
        "1f9db-1f3fe",
        "1f9db-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "undead",
        "dracula",
        "man vampire"
      ],
      u: "1f9db-200d-2642-fe0f",
      v: [
        "1f9db-1f3fb-200d-2642-fe0f",
        "1f9db-1f3fc-200d-2642-fe0f",
        "1f9db-1f3fd-200d-2642-fe0f",
        "1f9db-1f3fe-200d-2642-fe0f",
        "1f9db-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "undead",
        "woman vampire"
      ],
      u: "1f9db-200d-2640-fe0f",
      v: [
        "1f9db-1f3fb-200d-2640-fe0f",
        "1f9db-1f3fc-200d-2640-fe0f",
        "1f9db-1f3fd-200d-2640-fe0f",
        "1f9db-1f3fe-200d-2640-fe0f",
        "1f9db-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "merman",
        "mermaid",
        "merwoman",
        "merperson"
      ],
      u: "1f9dc",
      v: [
        "1f9dc-1f3fb",
        "1f9dc-1f3fc",
        "1f9dc-1f3fd",
        "1f9dc-1f3fe",
        "1f9dc-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "merman",
        "triton"
      ],
      u: "1f9dc-200d-2642-fe0f",
      v: [
        "1f9dc-1f3fb-200d-2642-fe0f",
        "1f9dc-1f3fc-200d-2642-fe0f",
        "1f9dc-1f3fd-200d-2642-fe0f",
        "1f9dc-1f3fe-200d-2642-fe0f",
        "1f9dc-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "mermaid",
        "merwoman"
      ],
      u: "1f9dc-200d-2640-fe0f",
      v: [
        "1f9dc-1f3fb-200d-2640-fe0f",
        "1f9dc-1f3fc-200d-2640-fe0f",
        "1f9dc-1f3fd-200d-2640-fe0f",
        "1f9dc-1f3fe-200d-2640-fe0f",
        "1f9dc-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "elf",
        "magical"
      ],
      u: "1f9dd",
      v: [
        "1f9dd-1f3fb",
        "1f9dd-1f3fc",
        "1f9dd-1f3fd",
        "1f9dd-1f3fe",
        "1f9dd-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "man elf",
        "magical"
      ],
      u: "1f9dd-200d-2642-fe0f",
      v: [
        "1f9dd-1f3fb-200d-2642-fe0f",
        "1f9dd-1f3fc-200d-2642-fe0f",
        "1f9dd-1f3fd-200d-2642-fe0f",
        "1f9dd-1f3fe-200d-2642-fe0f",
        "1f9dd-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "magical",
        "woman elf"
      ],
      u: "1f9dd-200d-2640-fe0f",
      v: [
        "1f9dd-1f3fb-200d-2640-fe0f",
        "1f9dd-1f3fc-200d-2640-fe0f",
        "1f9dd-1f3fd-200d-2640-fe0f",
        "1f9dd-1f3fe-200d-2640-fe0f",
        "1f9dd-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "genie",
        "djinn"
      ],
      u: "1f9de",
      a: "5"
    },
    {
      n: [
        "djinn",
        "man genie"
      ],
      u: "1f9de-200d-2642-fe0f",
      a: "5"
    },
    {
      n: [
        "djinn",
        "woman genie"
      ],
      u: "1f9de-200d-2640-fe0f",
      a: "5"
    },
    {
      n: [
        "zombie",
        "undead",
        "walking dead"
      ],
      u: "1f9df",
      a: "5"
    },
    {
      n: [
        "undead",
        "man zombie",
        "walking dead"
      ],
      u: "1f9df-200d-2642-fe0f",
      a: "5"
    },
    {
      n: [
        "undead",
        "woman zombie",
        "walking dead"
      ],
      u: "1f9df-200d-2640-fe0f",
      a: "5"
    },
    {
      n: [
        "troll",
        "fantasy",
        "monster",
        "fairy tale"
      ],
      u: "1f9cc",
      a: "14"
    },
    {
      n: [
        "face",
        "salon",
        "massage",
        "person getting massage"
      ],
      u: "1f486",
      v: [
        "1f486-1f3fb",
        "1f486-1f3fc",
        "1f486-1f3fd",
        "1f486-1f3fe",
        "1f486-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "face",
        "massage",
        "man getting massage"
      ],
      u: "1f486-200d-2642-fe0f",
      v: [
        "1f486-1f3fb-200d-2642-fe0f",
        "1f486-1f3fc-200d-2642-fe0f",
        "1f486-1f3fd-200d-2642-fe0f",
        "1f486-1f3fe-200d-2642-fe0f",
        "1f486-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "face",
        "woman",
        "massage",
        "woman getting massage"
      ],
      u: "1f486-200d-2640-fe0f",
      v: [
        "1f486-1f3fb-200d-2640-fe0f",
        "1f486-1f3fc-200d-2640-fe0f",
        "1f486-1f3fd-200d-2640-fe0f",
        "1f486-1f3fe-200d-2640-fe0f",
        "1f486-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "barber",
        "beauty",
        "parlor",
        "haircut",
        "person getting haircut"
      ],
      u: "1f487",
      v: [
        "1f487-1f3fb",
        "1f487-1f3fc",
        "1f487-1f3fd",
        "1f487-1f3fe",
        "1f487-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "haircut",
        "man getting haircut"
      ],
      u: "1f487-200d-2642-fe0f",
      v: [
        "1f487-1f3fb-200d-2642-fe0f",
        "1f487-1f3fc-200d-2642-fe0f",
        "1f487-1f3fd-200d-2642-fe0f",
        "1f487-1f3fe-200d-2642-fe0f",
        "1f487-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "haircut",
        "woman getting haircut"
      ],
      u: "1f487-200d-2640-fe0f",
      v: [
        "1f487-1f3fb-200d-2640-fe0f",
        "1f487-1f3fc-200d-2640-fe0f",
        "1f487-1f3fd-200d-2640-fe0f",
        "1f487-1f3fe-200d-2640-fe0f",
        "1f487-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hike",
        "walk",
        "walking",
        "person walking"
      ],
      u: "1f6b6",
      v: [
        "1f6b6-1f3fb",
        "1f6b6-1f3fc",
        "1f6b6-1f3fd",
        "1f6b6-1f3fe",
        "1f6b6-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "hike",
        "walk",
        "man walking"
      ],
      u: "1f6b6-200d-2642-fe0f",
      v: [
        "1f6b6-1f3fb-200d-2642-fe0f",
        "1f6b6-1f3fc-200d-2642-fe0f",
        "1f6b6-1f3fd-200d-2642-fe0f",
        "1f6b6-1f3fe-200d-2642-fe0f",
        "1f6b6-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hike",
        "walk",
        "woman",
        "woman walking"
      ],
      u: "1f6b6-200d-2640-fe0f",
      v: [
        "1f6b6-1f3fb-200d-2640-fe0f",
        "1f6b6-1f3fc-200d-2640-fe0f",
        "1f6b6-1f3fd-200d-2640-fe0f",
        "1f6b6-1f3fe-200d-2640-fe0f",
        "1f6b6-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "hike",
        "walk",
        "walking",
        "person walking",
        "person walking facing right"
      ],
      u: "1f6b6-200d-27a1-fe0f",
      v: [
        "1f6b6-1f3fb-200d-27a1-fe0f",
        "1f6b6-1f3fc-200d-27a1-fe0f",
        "1f6b6-1f3fd-200d-27a1-fe0f",
        "1f6b6-1f3fe-200d-27a1-fe0f",
        "1f6b6-1f3ff-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "hike",
        "walk",
        "woman",
        "woman walking",
        "woman walking facing right"
      ],
      u: "1f6b6-200d-2640-fe0f-200d-27a1-fe0f",
      v: [
        "1f6b6-1f3fb-200d-2640-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fc-200d-2640-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fd-200d-2640-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fe-200d-2640-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3ff-200d-2640-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "hike",
        "walk",
        "man walking",
        "man walking facing right"
      ],
      u: "1f6b6-200d-2642-fe0f-200d-27a1-fe0f",
      v: [
        "1f6b6-1f3fb-200d-2642-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fc-200d-2642-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fd-200d-2642-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3fe-200d-2642-fe0f-200d-27a1-fe0f",
        "1f6b6-1f3ff-200d-2642-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "stand",
        "standing",
        "person standing"
      ],
      u: "1f9cd",
      v: [
        "1f9cd-1f3fb",
        "1f9cd-1f3fc",
        "1f9cd-1f3fd",
        "1f9cd-1f3fe",
        "1f9cd-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "standing",
        "man standing"
      ],
      u: "1f9cd-200d-2642-fe0f",
      v: [
        "1f9cd-1f3fb-200d-2642-fe0f",
        "1f9cd-1f3fc-200d-2642-fe0f",
        "1f9cd-1f3fd-200d-2642-fe0f",
        "1f9cd-1f3fe-200d-2642-fe0f",
        "1f9cd-1f3ff-200d-2642-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "woman",
        "standing",
        "woman standing"
      ],
      u: "1f9cd-200d-2640-fe0f",
      v: [
        "1f9cd-1f3fb-200d-2640-fe0f",
        "1f9cd-1f3fc-200d-2640-fe0f",
        "1f9cd-1f3fd-200d-2640-fe0f",
        "1f9cd-1f3fe-200d-2640-fe0f",
        "1f9cd-1f3ff-200d-2640-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "kneel",
        "kneeling",
        "person kneeling"
      ],
      u: "1f9ce",
      v: [
        "1f9ce-1f3fb",
        "1f9ce-1f3fc",
        "1f9ce-1f3fd",
        "1f9ce-1f3fe",
        "1f9ce-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "kneeling",
        "man kneeling"
      ],
      u: "1f9ce-200d-2642-fe0f",
      v: [
        "1f9ce-1f3fb-200d-2642-fe0f",
        "1f9ce-1f3fc-200d-2642-fe0f",
        "1f9ce-1f3fd-200d-2642-fe0f",
        "1f9ce-1f3fe-200d-2642-fe0f",
        "1f9ce-1f3ff-200d-2642-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "woman",
        "kneeling",
        "woman kneeling"
      ],
      u: "1f9ce-200d-2640-fe0f",
      v: [
        "1f9ce-1f3fb-200d-2640-fe0f",
        "1f9ce-1f3fc-200d-2640-fe0f",
        "1f9ce-1f3fd-200d-2640-fe0f",
        "1f9ce-1f3fe-200d-2640-fe0f",
        "1f9ce-1f3ff-200d-2640-fe0f"
      ],
      a: "12"
    },
    {
      n: [
        "kneel",
        "kneeling",
        "person kneeling",
        "person kneeling facing right"
      ],
      u: "1f9ce-200d-27a1-fe0f",
      v: [
        "1f9ce-1f3fb-200d-27a1-fe0f",
        "1f9ce-1f3fc-200d-27a1-fe0f",
        "1f9ce-1f3fd-200d-27a1-fe0f",
        "1f9ce-1f3fe-200d-27a1-fe0f",
        "1f9ce-1f3ff-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "woman",
        "kneeling",
        "woman kneeling facing right"
      ],
      u: "1f9ce-200d-2640-fe0f-200d-27a1-fe0f",
      v: [
        "1f9ce-1f3fb-200d-2640-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fc-200d-2640-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fd-200d-2640-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fe-200d-2640-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3ff-200d-2640-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "kneeling",
        "man kneeling facing right"
      ],
      u: "1f9ce-200d-2642-fe0f-200d-27a1-fe0f",
      v: [
        "1f9ce-1f3fb-200d-2642-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fc-200d-2642-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fd-200d-2642-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3fe-200d-2642-fe0f-200d-27a1-fe0f",
        "1f9ce-1f3ff-200d-2642-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "blind",
        "accessibility",
        "person with white cane"
      ],
      u: "1f9d1-200d-1f9af",
      v: [
        "1f9d1-1f3fb-200d-1f9af",
        "1f9d1-1f3fc-200d-1f9af",
        "1f9d1-1f3fd-200d-1f9af",
        "1f9d1-1f3fe-200d-1f9af",
        "1f9d1-1f3ff-200d-1f9af"
      ],
      a: "12.1"
    },
    {
      n: [
        "blind",
        "accessibility",
        "person with white cane",
        "person with white cane facing right"
      ],
      u: "1f9d1-200d-1f9af-200d-27a1-fe0f",
      v: [
        "1f9d1-1f3fb-200d-1f9af-200d-27a1-fe0f",
        "1f9d1-1f3fc-200d-1f9af-200d-27a1-fe0f",
        "1f9d1-1f3fd-200d-1f9af-200d-27a1-fe0f",
        "1f9d1-1f3fe-200d-1f9af-200d-27a1-fe0f",
        "1f9d1-1f3ff-200d-1f9af-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "blind",
        "accessibility",
        "man with white cane"
      ],
      u: "1f468-200d-1f9af",
      v: [
        "1f468-1f3fb-200d-1f9af",
        "1f468-1f3fc-200d-1f9af",
        "1f468-1f3fd-200d-1f9af",
        "1f468-1f3fe-200d-1f9af",
        "1f468-1f3ff-200d-1f9af"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "blind",
        "accessibility",
        "man with white cane",
        "man with white cane facing right"
      ],
      u: "1f468-200d-1f9af-200d-27a1-fe0f",
      v: [
        "1f468-1f3fb-200d-1f9af-200d-27a1-fe0f",
        "1f468-1f3fc-200d-1f9af-200d-27a1-fe0f",
        "1f468-1f3fd-200d-1f9af-200d-27a1-fe0f",
        "1f468-1f3fe-200d-1f9af-200d-27a1-fe0f",
        "1f468-1f3ff-200d-1f9af-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "blind",
        "woman",
        "accessibility",
        "woman with white cane"
      ],
      u: "1f469-200d-1f9af",
      v: [
        "1f469-1f3fb-200d-1f9af",
        "1f469-1f3fc-200d-1f9af",
        "1f469-1f3fd-200d-1f9af",
        "1f469-1f3fe-200d-1f9af",
        "1f469-1f3ff-200d-1f9af"
      ],
      a: "12"
    },
    {
      n: [
        "blind",
        "woman",
        "accessibility",
        "woman with white cane",
        "woman with white cane facing right"
      ],
      u: "1f469-200d-1f9af-200d-27a1-fe0f",
      v: [
        "1f469-1f3fb-200d-1f9af-200d-27a1-fe0f",
        "1f469-1f3fc-200d-1f9af-200d-27a1-fe0f",
        "1f469-1f3fd-200d-1f9af-200d-27a1-fe0f",
        "1f469-1f3fe-200d-1f9af-200d-27a1-fe0f",
        "1f469-1f3ff-200d-1f9af-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "wheelchair",
        "accessibility",
        "person in motorized wheelchair"
      ],
      u: "1f9d1-200d-1f9bc",
      v: [
        "1f9d1-1f3fb-200d-1f9bc",
        "1f9d1-1f3fc-200d-1f9bc",
        "1f9d1-1f3fd-200d-1f9bc",
        "1f9d1-1f3fe-200d-1f9bc",
        "1f9d1-1f3ff-200d-1f9bc"
      ],
      a: "12.1"
    },
    {
      n: [
        "wheelchair",
        "accessibility",
        "person in motorized wheelchair",
        "person in motorized wheelchair facing right"
      ],
      u: "1f9d1-200d-1f9bc-200d-27a1-fe0f",
      v: [
        "1f9d1-1f3fb-200d-1f9bc-200d-27a1-fe0f",
        "1f9d1-1f3fc-200d-1f9bc-200d-27a1-fe0f",
        "1f9d1-1f3fd-200d-1f9bc-200d-27a1-fe0f",
        "1f9d1-1f3fe-200d-1f9bc-200d-27a1-fe0f",
        "1f9d1-1f3ff-200d-1f9bc-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "wheelchair",
        "accessibility",
        "man in motorized wheelchair"
      ],
      u: "1f468-200d-1f9bc",
      v: [
        "1f468-1f3fb-200d-1f9bc",
        "1f468-1f3fc-200d-1f9bc",
        "1f468-1f3fd-200d-1f9bc",
        "1f468-1f3fe-200d-1f9bc",
        "1f468-1f3ff-200d-1f9bc"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "wheelchair",
        "accessibility",
        "man in motorized wheelchair",
        "man in motorized wheelchair facing right"
      ],
      u: "1f468-200d-1f9bc-200d-27a1-fe0f",
      v: [
        "1f468-1f3fb-200d-1f9bc-200d-27a1-fe0f",
        "1f468-1f3fc-200d-1f9bc-200d-27a1-fe0f",
        "1f468-1f3fd-200d-1f9bc-200d-27a1-fe0f",
        "1f468-1f3fe-200d-1f9bc-200d-27a1-fe0f",
        "1f468-1f3ff-200d-1f9bc-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "woman",
        "wheelchair",
        "accessibility",
        "woman in motorized wheelchair"
      ],
      u: "1f469-200d-1f9bc",
      v: [
        "1f469-1f3fb-200d-1f9bc",
        "1f469-1f3fc-200d-1f9bc",
        "1f469-1f3fd-200d-1f9bc",
        "1f469-1f3fe-200d-1f9bc",
        "1f469-1f3ff-200d-1f9bc"
      ],
      a: "12"
    },
    {
      n: [
        "woman",
        "wheelchair",
        "accessibility",
        "woman in motorized wheelchair",
        "woman in motorized wheelchair facing right"
      ],
      u: "1f469-200d-1f9bc-200d-27a1-fe0f",
      v: [
        "1f469-1f3fb-200d-1f9bc-200d-27a1-fe0f",
        "1f469-1f3fc-200d-1f9bc-200d-27a1-fe0f",
        "1f469-1f3fd-200d-1f9bc-200d-27a1-fe0f",
        "1f469-1f3fe-200d-1f9bc-200d-27a1-fe0f",
        "1f469-1f3ff-200d-1f9bc-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "wheelchair",
        "accessibility",
        "person in manual wheelchair"
      ],
      u: "1f9d1-200d-1f9bd",
      v: [
        "1f9d1-1f3fb-200d-1f9bd",
        "1f9d1-1f3fc-200d-1f9bd",
        "1f9d1-1f3fd-200d-1f9bd",
        "1f9d1-1f3fe-200d-1f9bd",
        "1f9d1-1f3ff-200d-1f9bd"
      ],
      a: "12.1"
    },
    {
      n: [
        "wheelchair",
        "accessibility",
        "person in manual wheelchair",
        "person in manual wheelchair facing right"
      ],
      u: "1f9d1-200d-1f9bd-200d-27a1-fe0f",
      v: [
        "1f9d1-1f3fb-200d-1f9bd-200d-27a1-fe0f",
        "1f9d1-1f3fc-200d-1f9bd-200d-27a1-fe0f",
        "1f9d1-1f3fd-200d-1f9bd-200d-27a1-fe0f",
        "1f9d1-1f3fe-200d-1f9bd-200d-27a1-fe0f",
        "1f9d1-1f3ff-200d-1f9bd-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "wheelchair",
        "accessibility",
        "man in manual wheelchair"
      ],
      u: "1f468-200d-1f9bd",
      v: [
        "1f468-1f3fb-200d-1f9bd",
        "1f468-1f3fc-200d-1f9bd",
        "1f468-1f3fd-200d-1f9bd",
        "1f468-1f3fe-200d-1f9bd",
        "1f468-1f3ff-200d-1f9bd"
      ],
      a: "12"
    },
    {
      n: [
        "man",
        "wheelchair",
        "accessibility",
        "man in manual wheelchair",
        "man in manual wheelchair facing right"
      ],
      u: "1f468-200d-1f9bd-200d-27a1-fe0f",
      v: [
        "1f468-1f3fb-200d-1f9bd-200d-27a1-fe0f",
        "1f468-1f3fc-200d-1f9bd-200d-27a1-fe0f",
        "1f468-1f3fd-200d-1f9bd-200d-27a1-fe0f",
        "1f468-1f3fe-200d-1f9bd-200d-27a1-fe0f",
        "1f468-1f3ff-200d-1f9bd-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "woman",
        "wheelchair",
        "accessibility",
        "woman in manual wheelchair"
      ],
      u: "1f469-200d-1f9bd",
      v: [
        "1f469-1f3fb-200d-1f9bd",
        "1f469-1f3fc-200d-1f9bd",
        "1f469-1f3fd-200d-1f9bd",
        "1f469-1f3fe-200d-1f9bd",
        "1f469-1f3ff-200d-1f9bd"
      ],
      a: "12"
    },
    {
      n: [
        "woman",
        "wheelchair",
        "accessibility",
        "woman in manual wheelchair",
        "woman in manual wheelchair facing right"
      ],
      u: "1f469-200d-1f9bd-200d-27a1-fe0f",
      v: [
        "1f469-1f3fb-200d-1f9bd-200d-27a1-fe0f",
        "1f469-1f3fc-200d-1f9bd-200d-27a1-fe0f",
        "1f469-1f3fd-200d-1f9bd-200d-27a1-fe0f",
        "1f469-1f3fe-200d-1f9bd-200d-27a1-fe0f",
        "1f469-1f3ff-200d-1f9bd-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "running",
        "marathon",
        "person running"
      ],
      u: "1f3c3",
      v: [
        "1f3c3-1f3fb",
        "1f3c3-1f3fc",
        "1f3c3-1f3fd",
        "1f3c3-1f3fe",
        "1f3c3-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "racing",
        "running",
        "marathon",
        "man running"
      ],
      u: "1f3c3-200d-2642-fe0f",
      v: [
        "1f3c3-1f3fb-200d-2642-fe0f",
        "1f3c3-1f3fc-200d-2642-fe0f",
        "1f3c3-1f3fd-200d-2642-fe0f",
        "1f3c3-1f3fe-200d-2642-fe0f",
        "1f3c3-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "racing",
        "running",
        "marathon",
        "woman running"
      ],
      u: "1f3c3-200d-2640-fe0f",
      v: [
        "1f3c3-1f3fb-200d-2640-fe0f",
        "1f3c3-1f3fc-200d-2640-fe0f",
        "1f3c3-1f3fd-200d-2640-fe0f",
        "1f3c3-1f3fe-200d-2640-fe0f",
        "1f3c3-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "running",
        "marathon",
        "person running",
        "person running facing right"
      ],
      u: "1f3c3-200d-27a1-fe0f",
      v: [
        "1f3c3-1f3fb-200d-27a1-fe0f",
        "1f3c3-1f3fc-200d-27a1-fe0f",
        "1f3c3-1f3fd-200d-27a1-fe0f",
        "1f3c3-1f3fe-200d-27a1-fe0f",
        "1f3c3-1f3ff-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "woman",
        "racing",
        "running",
        "marathon",
        "woman running facing right"
      ],
      u: "1f3c3-200d-2640-fe0f-200d-27a1-fe0f",
      v: [
        "1f3c3-1f3fb-200d-2640-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fc-200d-2640-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fd-200d-2640-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fe-200d-2640-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3ff-200d-2640-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "man",
        "racing",
        "running",
        "marathon",
        "man running facing right"
      ],
      u: "1f3c3-200d-2642-fe0f-200d-27a1-fe0f",
      v: [
        "1f3c3-1f3fb-200d-2642-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fc-200d-2642-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fd-200d-2642-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3fe-200d-2642-fe0f-200d-27a1-fe0f",
        "1f3c3-1f3ff-200d-2642-fe0f-200d-27a1-fe0f"
      ],
      a: "15.1"
    },
    {
      n: [
        "dance",
        "woman",
        "dancing",
        "woman dancing"
      ],
      u: "1f483",
      v: [
        "1f483-1f3fb",
        "1f483-1f3fc",
        "1f483-1f3fd",
        "1f483-1f3fe",
        "1f483-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "dance",
        "dancing",
        "man dancing"
      ],
      u: "1f57a",
      v: [
        "1f57a-1f3fb",
        "1f57a-1f3fc",
        "1f57a-1f3fd",
        "1f57a-1f3fe",
        "1f57a-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "suit",
        "person",
        "business",
        "person in suit levitating"
      ],
      u: "1f574-fe0f",
      v: [
        "1f574-1f3fb",
        "1f574-1f3fc",
        "1f574-1f3fd",
        "1f574-1f3fe",
        "1f574-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "dancer",
        "partying",
        "bunny ear",
        "people with bunny ears"
      ],
      u: "1f46f",
      a: "0.6"
    },
    {
      n: [
        "men",
        "dancer",
        "partying",
        "bunny ear",
        "men with bunny ears"
      ],
      u: "1f46f-200d-2642-fe0f",
      a: "4"
    },
    {
      n: [
        "women",
        "dancer",
        "partying",
        "bunny ear",
        "women with bunny ears"
      ],
      u: "1f46f-200d-2640-fe0f",
      a: "4"
    },
    {
      n: [
        "sauna",
        "steam room",
        "person in steamy room"
      ],
      u: "1f9d6",
      v: [
        "1f9d6-1f3fb",
        "1f9d6-1f3fc",
        "1f9d6-1f3fd",
        "1f9d6-1f3fe",
        "1f9d6-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "sauna",
        "steam room",
        "man in steamy room"
      ],
      u: "1f9d6-200d-2642-fe0f",
      v: [
        "1f9d6-1f3fb-200d-2642-fe0f",
        "1f9d6-1f3fc-200d-2642-fe0f",
        "1f9d6-1f3fd-200d-2642-fe0f",
        "1f9d6-1f3fe-200d-2642-fe0f",
        "1f9d6-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "sauna",
        "steam room",
        "woman in steamy room"
      ],
      u: "1f9d6-200d-2640-fe0f",
      v: [
        "1f9d6-1f3fb-200d-2640-fe0f",
        "1f9d6-1f3fc-200d-2640-fe0f",
        "1f9d6-1f3fd-200d-2640-fe0f",
        "1f9d6-1f3fe-200d-2640-fe0f",
        "1f9d6-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "climber",
        "person climbing"
      ],
      u: "1f9d7",
      v: [
        "1f9d7-1f3fb",
        "1f9d7-1f3fc",
        "1f9d7-1f3fd",
        "1f9d7-1f3fe",
        "1f9d7-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "climber",
        "man climbing"
      ],
      u: "1f9d7-200d-2642-fe0f",
      v: [
        "1f9d7-1f3fb-200d-2642-fe0f",
        "1f9d7-1f3fc-200d-2642-fe0f",
        "1f9d7-1f3fd-200d-2642-fe0f",
        "1f9d7-1f3fe-200d-2642-fe0f",
        "1f9d7-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "climber",
        "woman climbing"
      ],
      u: "1f9d7-200d-2640-fe0f",
      v: [
        "1f9d7-1f3fb-200d-2640-fe0f",
        "1f9d7-1f3fc-200d-2640-fe0f",
        "1f9d7-1f3fd-200d-2640-fe0f",
        "1f9d7-1f3fe-200d-2640-fe0f",
        "1f9d7-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "sword",
        "fencer",
        "fencing",
        "person fencing"
      ],
      u: "1f93a",
      a: "3"
    },
    {
      n: [
        "horse",
        "jockey",
        "racing",
        "racehorse",
        "horse racing"
      ],
      u: "1f3c7",
      v: [
        "1f3c7-1f3fb",
        "1f3c7-1f3fc",
        "1f3c7-1f3fd",
        "1f3c7-1f3fe",
        "1f3c7-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "ski",
        "snow",
        "skier"
      ],
      u: "26f7-fe0f",
      a: "0.7"
    },
    {
      n: [
        "ski",
        "snow",
        "snowboard",
        "snowboarder"
      ],
      u: "1f3c2",
      v: [
        "1f3c2-1f3fb",
        "1f3c2-1f3fc",
        "1f3c2-1f3fd",
        "1f3c2-1f3fe",
        "1f3c2-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "ball",
        "golf",
        "person golfing"
      ],
      u: "1f3cc-fe0f",
      v: [
        "1f3cc-1f3fb",
        "1f3cc-1f3fc",
        "1f3cc-1f3fd",
        "1f3cc-1f3fe",
        "1f3cc-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "man",
        "golf",
        "man golfing"
      ],
      u: "1f3cc-fe0f-200d-2642-fe0f",
      v: [
        "1f3cc-1f3fb-200d-2642-fe0f",
        "1f3cc-1f3fc-200d-2642-fe0f",
        "1f3cc-1f3fd-200d-2642-fe0f",
        "1f3cc-1f3fe-200d-2642-fe0f",
        "1f3cc-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "golf",
        "woman",
        "woman golfing"
      ],
      u: "1f3cc-fe0f-200d-2640-fe0f",
      v: [
        "1f3cc-1f3fb-200d-2640-fe0f",
        "1f3cc-1f3fc-200d-2640-fe0f",
        "1f3cc-1f3fd-200d-2640-fe0f",
        "1f3cc-1f3fe-200d-2640-fe0f",
        "1f3cc-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "surfing",
        "person surfing"
      ],
      u: "1f3c4",
      v: [
        "1f3c4-1f3fb",
        "1f3c4-1f3fc",
        "1f3c4-1f3fd",
        "1f3c4-1f3fe",
        "1f3c4-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "surfing",
        "man surfing"
      ],
      u: "1f3c4-200d-2642-fe0f",
      v: [
        "1f3c4-1f3fb-200d-2642-fe0f",
        "1f3c4-1f3fc-200d-2642-fe0f",
        "1f3c4-1f3fd-200d-2642-fe0f",
        "1f3c4-1f3fe-200d-2642-fe0f",
        "1f3c4-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "surfing",
        "woman surfing"
      ],
      u: "1f3c4-200d-2640-fe0f",
      v: [
        "1f3c4-1f3fb-200d-2640-fe0f",
        "1f3c4-1f3fc-200d-2640-fe0f",
        "1f3c4-1f3fd-200d-2640-fe0f",
        "1f3c4-1f3fe-200d-2640-fe0f",
        "1f3c4-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "boat",
        "rowboat",
        "person rowing boat"
      ],
      u: "1f6a3",
      v: [
        "1f6a3-1f3fb",
        "1f6a3-1f3fc",
        "1f6a3-1f3fd",
        "1f6a3-1f3fe",
        "1f6a3-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "man",
        "boat",
        "rowboat",
        "man rowing boat"
      ],
      u: "1f6a3-200d-2642-fe0f",
      v: [
        "1f6a3-1f3fb-200d-2642-fe0f",
        "1f6a3-1f3fc-200d-2642-fe0f",
        "1f6a3-1f3fd-200d-2642-fe0f",
        "1f6a3-1f3fe-200d-2642-fe0f",
        "1f6a3-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "boat",
        "woman",
        "rowboat",
        "woman rowing boat"
      ],
      u: "1f6a3-200d-2640-fe0f",
      v: [
        "1f6a3-1f3fb-200d-2640-fe0f",
        "1f6a3-1f3fc-200d-2640-fe0f",
        "1f6a3-1f3fd-200d-2640-fe0f",
        "1f6a3-1f3fe-200d-2640-fe0f",
        "1f6a3-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "swim",
        "person swimming"
      ],
      u: "1f3ca",
      v: [
        "1f3ca-1f3fb",
        "1f3ca-1f3fc",
        "1f3ca-1f3fd",
        "1f3ca-1f3fe",
        "1f3ca-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "swim",
        "man swimming"
      ],
      u: "1f3ca-200d-2642-fe0f",
      v: [
        "1f3ca-1f3fb-200d-2642-fe0f",
        "1f3ca-1f3fc-200d-2642-fe0f",
        "1f3ca-1f3fd-200d-2642-fe0f",
        "1f3ca-1f3fe-200d-2642-fe0f",
        "1f3ca-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "swim",
        "woman",
        "woman swimming"
      ],
      u: "1f3ca-200d-2640-fe0f",
      v: [
        "1f3ca-1f3fb-200d-2640-fe0f",
        "1f3ca-1f3fc-200d-2640-fe0f",
        "1f3ca-1f3fd-200d-2640-fe0f",
        "1f3ca-1f3fe-200d-2640-fe0f",
        "1f3ca-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ball",
        "person bouncing ball"
      ],
      u: "26f9-fe0f",
      v: [
        "26f9-1f3fb",
        "26f9-1f3fc",
        "26f9-1f3fd",
        "26f9-1f3fe",
        "26f9-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "man",
        "ball",
        "man bouncing ball"
      ],
      u: "26f9-fe0f-200d-2642-fe0f",
      v: [
        "26f9-1f3fb-200d-2642-fe0f",
        "26f9-1f3fc-200d-2642-fe0f",
        "26f9-1f3fd-200d-2642-fe0f",
        "26f9-1f3fe-200d-2642-fe0f",
        "26f9-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ball",
        "woman",
        "woman bouncing ball"
      ],
      u: "26f9-fe0f-200d-2640-fe0f",
      v: [
        "26f9-1f3fb-200d-2640-fe0f",
        "26f9-1f3fc-200d-2640-fe0f",
        "26f9-1f3fd-200d-2640-fe0f",
        "26f9-1f3fe-200d-2640-fe0f",
        "26f9-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "lifter",
        "weight",
        "person lifting weights"
      ],
      u: "1f3cb-fe0f",
      v: [
        "1f3cb-1f3fb",
        "1f3cb-1f3fc",
        "1f3cb-1f3fd",
        "1f3cb-1f3fe",
        "1f3cb-1f3ff"
      ],
      a: "0.7"
    },
    {
      n: [
        "man",
        "weight lifter",
        "man lifting weights"
      ],
      u: "1f3cb-fe0f-200d-2642-fe0f",
      v: [
        "1f3cb-1f3fb-200d-2642-fe0f",
        "1f3cb-1f3fc-200d-2642-fe0f",
        "1f3cb-1f3fd-200d-2642-fe0f",
        "1f3cb-1f3fe-200d-2642-fe0f",
        "1f3cb-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "weight lifter",
        "woman lifting weights"
      ],
      u: "1f3cb-fe0f-200d-2640-fe0f",
      v: [
        "1f3cb-1f3fb-200d-2640-fe0f",
        "1f3cb-1f3fc-200d-2640-fe0f",
        "1f3cb-1f3fd-200d-2640-fe0f",
        "1f3cb-1f3fe-200d-2640-fe0f",
        "1f3cb-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "biking",
        "bicycle",
        "cyclist",
        "person biking"
      ],
      u: "1f6b4",
      v: [
        "1f6b4-1f3fb",
        "1f6b4-1f3fc",
        "1f6b4-1f3fd",
        "1f6b4-1f3fe",
        "1f6b4-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "man",
        "biking",
        "bicycle",
        "cyclist",
        "man biking"
      ],
      u: "1f6b4-200d-2642-fe0f",
      v: [
        "1f6b4-1f3fb-200d-2642-fe0f",
        "1f6b4-1f3fc-200d-2642-fe0f",
        "1f6b4-1f3fd-200d-2642-fe0f",
        "1f6b4-1f3fe-200d-2642-fe0f",
        "1f6b4-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "biking",
        "bicycle",
        "cyclist",
        "woman biking"
      ],
      u: "1f6b4-200d-2640-fe0f",
      v: [
        "1f6b4-1f3fb-200d-2640-fe0f",
        "1f6b4-1f3fc-200d-2640-fe0f",
        "1f6b4-1f3fd-200d-2640-fe0f",
        "1f6b4-1f3fe-200d-2640-fe0f",
        "1f6b4-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "bike",
        "bicycle",
        "cyclist",
        "mountain",
        "bicyclist",
        "person mountain biking"
      ],
      u: "1f6b5",
      v: [
        "1f6b5-1f3fb",
        "1f6b5-1f3fc",
        "1f6b5-1f3fd",
        "1f6b5-1f3fe",
        "1f6b5-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "man",
        "bike",
        "bicycle",
        "cyclist",
        "mountain",
        "man mountain biking"
      ],
      u: "1f6b5-200d-2642-fe0f",
      v: [
        "1f6b5-1f3fb-200d-2642-fe0f",
        "1f6b5-1f3fc-200d-2642-fe0f",
        "1f6b5-1f3fd-200d-2642-fe0f",
        "1f6b5-1f3fe-200d-2642-fe0f",
        "1f6b5-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "bike",
        "woman",
        "biking",
        "bicycle",
        "cyclist",
        "mountain",
        "woman mountain biking"
      ],
      u: "1f6b5-200d-2640-fe0f",
      v: [
        "1f6b5-1f3fb-200d-2640-fe0f",
        "1f6b5-1f3fc-200d-2640-fe0f",
        "1f6b5-1f3fd-200d-2640-fe0f",
        "1f6b5-1f3fe-200d-2640-fe0f",
        "1f6b5-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "cartwheel",
        "gymnastics",
        "person cartwheeling"
      ],
      u: "1f938",
      v: [
        "1f938-1f3fb",
        "1f938-1f3fc",
        "1f938-1f3fd",
        "1f938-1f3fe",
        "1f938-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "cartwheel",
        "gymnastics",
        "man cartwheeling"
      ],
      u: "1f938-200d-2642-fe0f",
      v: [
        "1f938-1f3fb-200d-2642-fe0f",
        "1f938-1f3fc-200d-2642-fe0f",
        "1f938-1f3fd-200d-2642-fe0f",
        "1f938-1f3fe-200d-2642-fe0f",
        "1f938-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "cartwheel",
        "gymnastics",
        "woman cartwheeling"
      ],
      u: "1f938-200d-2640-fe0f",
      v: [
        "1f938-1f3fb-200d-2640-fe0f",
        "1f938-1f3fc-200d-2640-fe0f",
        "1f938-1f3fd-200d-2640-fe0f",
        "1f938-1f3fe-200d-2640-fe0f",
        "1f938-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "wrestle",
        "wrestler",
        "people wrestling"
      ],
      u: "1f93c",
      a: "3"
    },
    {
      n: [
        "men",
        "wrestle",
        "men wrestling"
      ],
      u: "1f93c-200d-2642-fe0f",
      a: "4"
    },
    {
      n: [
        "women",
        "wrestle",
        "women wrestling"
      ],
      u: "1f93c-200d-2640-fe0f",
      a: "4"
    },
    {
      n: [
        "polo",
        "water",
        "person playing water polo"
      ],
      u: "1f93d",
      v: [
        "1f93d-1f3fb",
        "1f93d-1f3fc",
        "1f93d-1f3fd",
        "1f93d-1f3fe",
        "1f93d-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "water polo",
        "man playing water polo"
      ],
      u: "1f93d-200d-2642-fe0f",
      v: [
        "1f93d-1f3fb-200d-2642-fe0f",
        "1f93d-1f3fc-200d-2642-fe0f",
        "1f93d-1f3fd-200d-2642-fe0f",
        "1f93d-1f3fe-200d-2642-fe0f",
        "1f93d-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "water polo",
        "woman playing water polo"
      ],
      u: "1f93d-200d-2640-fe0f",
      v: [
        "1f93d-1f3fb-200d-2640-fe0f",
        "1f93d-1f3fc-200d-2640-fe0f",
        "1f93d-1f3fd-200d-2640-fe0f",
        "1f93d-1f3fe-200d-2640-fe0f",
        "1f93d-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "ball",
        "handball",
        "person playing handball"
      ],
      u: "1f93e",
      v: [
        "1f93e-1f3fb",
        "1f93e-1f3fc",
        "1f93e-1f3fd",
        "1f93e-1f3fe",
        "1f93e-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "handball",
        "man playing handball"
      ],
      u: "1f93e-200d-2642-fe0f",
      v: [
        "1f93e-1f3fb-200d-2642-fe0f",
        "1f93e-1f3fc-200d-2642-fe0f",
        "1f93e-1f3fd-200d-2642-fe0f",
        "1f93e-1f3fe-200d-2642-fe0f",
        "1f93e-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "handball",
        "woman playing handball"
      ],
      u: "1f93e-200d-2640-fe0f",
      v: [
        "1f93e-1f3fb-200d-2640-fe0f",
        "1f93e-1f3fc-200d-2640-fe0f",
        "1f93e-1f3fd-200d-2640-fe0f",
        "1f93e-1f3fe-200d-2640-fe0f",
        "1f93e-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "skill",
        "juggle",
        "balance",
        "multitask",
        "person juggling"
      ],
      u: "1f939",
      v: [
        "1f939-1f3fb",
        "1f939-1f3fc",
        "1f939-1f3fd",
        "1f939-1f3fe",
        "1f939-1f3ff"
      ],
      a: "3"
    },
    {
      n: [
        "man",
        "juggling",
        "multitask",
        "man juggling"
      ],
      u: "1f939-200d-2642-fe0f",
      v: [
        "1f939-1f3fb-200d-2642-fe0f",
        "1f939-1f3fc-200d-2642-fe0f",
        "1f939-1f3fd-200d-2642-fe0f",
        "1f939-1f3fe-200d-2642-fe0f",
        "1f939-1f3ff-200d-2642-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "woman",
        "juggling",
        "multitask",
        "woman juggling"
      ],
      u: "1f939-200d-2640-fe0f",
      v: [
        "1f939-1f3fb-200d-2640-fe0f",
        "1f939-1f3fc-200d-2640-fe0f",
        "1f939-1f3fd-200d-2640-fe0f",
        "1f939-1f3fe-200d-2640-fe0f",
        "1f939-1f3ff-200d-2640-fe0f"
      ],
      a: "4"
    },
    {
      n: [
        "yoga",
        "meditation",
        "person in lotus position"
      ],
      u: "1f9d8",
      v: [
        "1f9d8-1f3fb",
        "1f9d8-1f3fc",
        "1f9d8-1f3fd",
        "1f9d8-1f3fe",
        "1f9d8-1f3ff"
      ],
      a: "5"
    },
    {
      n: [
        "yoga",
        "meditation",
        "man in lotus position"
      ],
      u: "1f9d8-200d-2642-fe0f",
      v: [
        "1f9d8-1f3fb-200d-2642-fe0f",
        "1f9d8-1f3fc-200d-2642-fe0f",
        "1f9d8-1f3fd-200d-2642-fe0f",
        "1f9d8-1f3fe-200d-2642-fe0f",
        "1f9d8-1f3ff-200d-2642-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "yoga",
        "meditation",
        "woman in lotus position"
      ],
      u: "1f9d8-200d-2640-fe0f",
      v: [
        "1f9d8-1f3fb-200d-2640-fe0f",
        "1f9d8-1f3fc-200d-2640-fe0f",
        "1f9d8-1f3fd-200d-2640-fe0f",
        "1f9d8-1f3fe-200d-2640-fe0f",
        "1f9d8-1f3ff-200d-2640-fe0f"
      ],
      a: "5"
    },
    {
      n: [
        "bath",
        "bathtub",
        "person taking bath"
      ],
      u: "1f6c0",
      v: [
        "1f6c0-1f3fb",
        "1f6c0-1f3fc",
        "1f6c0-1f3fd",
        "1f6c0-1f3fe",
        "1f6c0-1f3ff"
      ],
      a: "0.6"
    },
    {
      n: [
        "hotel",
        "sleep",
        "good night",
        "person in bed"
      ],
      u: "1f6cc",
      v: [
        "1f6cc-1f3fb",
        "1f6cc-1f3fc",
        "1f6cc-1f3fd",
        "1f6cc-1f3fe",
        "1f6cc-1f3ff"
      ],
      a: "1"
    },
    {
      n: [
        "hand",
        "hold",
        "couple",
        "person",
        "holding hands",
        "people holding hands"
      ],
      u: "1f9d1-200d-1f91d-200d-1f9d1",
      v: [
        "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb",
        "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc",
        "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd",
        "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe",
        "1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff",
        "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb",
        "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc",
        "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd",
        "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe",
        "1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff",
        "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb",
        "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc",
        "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd",
        "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe",
        "1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff",
        "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb",
        "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc",
        "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd",
        "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe",
        "1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff",
        "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb",
        "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc",
        "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd",
        "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe",
        "1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff"
      ],
      a: "12"
    },
    {
      n: [
        "hand",
        "women",
        "couple",
        "holding hands",
        "women holding hands"
      ],
      u: "1f46d",
      v: [
        "1f46d-1f3fb",
        "1f46d-1f3fc",
        "1f46d-1f3fd",
        "1f46d-1f3fe",
        "1f46d-1f3ff",
        "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc",
        "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd",
        "1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe",
        "1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff",
        "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb",
        "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd",
        "1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe",
        "1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff",
        "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb",
        "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc",
        "1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe",
        "1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff",
        "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb",
        "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc",
        "1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd",
        "1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff",
        "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb",
        "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc",
        "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd",
        "1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe"
      ],
      a: "1"
    },
    {
      n: [
        "man",
        "hand",
        "hold",
        "woman",
        "couple",
        "holding hands",
        "woman and man holding hands"
      ],
      u: "1f46b",
      v: [
        "1f46b-1f3fb",
        "1f46b-1f3fc",
        "1f46b-1f3fd",
        "1f46b-1f3fe",
        "1f46b-1f3ff",
        "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc",
        "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd",
        "1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe",
        "1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff",
        "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb",
        "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd",
        "1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe",
        "1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff",
        "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb",
        "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc",
        "1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe",
        "1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff",
        "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb",
        "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc",
        "1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd",
        "1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff",
        "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb",
        "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc",
        "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd",
        "1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "men",
        "twins",
        "couple",
        "gemini",
        "zodiac",
        "holding hands",
        "men holding hands"
      ],
      u: "1f46c",
      v: [
        "1f46c-1f3fb",
        "1f46c-1f3fc",
        "1f46c-1f3fd",
        "1f46c-1f3fe",
        "1f46c-1f3ff",
        "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc",
        "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd",
        "1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe",
        "1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff",
        "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb",
        "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd",
        "1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe",
        "1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff",
        "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb",
        "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc",
        "1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe",
        "1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff",
        "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb",
        "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc",
        "1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd",
        "1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff",
        "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb",
        "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc",
        "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd",
        "1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe"
      ],
      a: "1"
    },
    {
      n: [
        "kiss",
        "couple"
      ],
      u: "1f48f",
      v: [
        "1f48f-1f3fb",
        "1f48f-1f3fc",
        "1f48f-1f3fd",
        "1f48f-1f3fe",
        "1f48f-1f3ff",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "kiss",
        "woman",
        "couple",
        "kiss: woman, man"
      ],
      u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f468",
      v: [
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "man",
        "kiss",
        "couple",
        "kiss: man, man"
      ],
      u: "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468",
      v: [
        "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "kiss",
        "woman",
        "couple",
        "kiss: woman, woman"
      ],
      u: "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469",
      v: [
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "love",
        "couple",
        "couple with heart"
      ],
      u: "1f491",
      v: [
        "1f491-1f3fb",
        "1f491-1f3fc",
        "1f491-1f3fd",
        "1f491-1f3fe",
        "1f491-1f3ff",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe",
        "1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe",
        "1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe",
        "1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd",
        "1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd",
        "1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe"
      ],
      a: "0.6"
    },
    {
      n: [
        "man",
        "love",
        "woman",
        "couple",
        "couple with heart",
        "couple with heart: woman, man"
      ],
      u: "1f469-200d-2764-fe0f-200d-1f468",
      v: [
        "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "man",
        "love",
        "couple",
        "couple with heart",
        "couple with heart: man, man"
      ],
      u: "1f468-200d-2764-fe0f-200d-1f468",
      v: [
        "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe",
        "1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "love",
        "woman",
        "couple",
        "couple with heart",
        "couple with heart: woman, woman"
      ],
      u: "1f469-200d-2764-fe0f-200d-1f469",
      v: [
        "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe",
        "1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe",
        "1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe",
        "1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe",
        "1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe",
        "1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff"
      ],
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "woman",
        "family",
        "family: man, woman, boy"
      ],
      u: "1f468-200d-1f469-200d-1f466",
      a: "2"
    },
    {
      n: [
        "man",
        "girl",
        "woman",
        "family",
        "family: man, woman, girl"
      ],
      u: "1f468-200d-1f469-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "girl",
        "woman",
        "family",
        "family: man, woman, girl, boy"
      ],
      u: "1f468-200d-1f469-200d-1f467-200d-1f466",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "woman",
        "family",
        "family: man, woman, boy, boy"
      ],
      u: "1f468-200d-1f469-200d-1f466-200d-1f466",
      a: "2"
    },
    {
      n: [
        "man",
        "girl",
        "woman",
        "family",
        "family: man, woman, girl, girl"
      ],
      u: "1f468-200d-1f469-200d-1f467-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "family",
        "family: man, man, boy"
      ],
      u: "1f468-200d-1f468-200d-1f466",
      a: "2"
    },
    {
      n: [
        "man",
        "girl",
        "family",
        "family: man, man, girl"
      ],
      u: "1f468-200d-1f468-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "girl",
        "family",
        "family: man, man, girl, boy"
      ],
      u: "1f468-200d-1f468-200d-1f467-200d-1f466",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "family",
        "family: man, man, boy, boy"
      ],
      u: "1f468-200d-1f468-200d-1f466-200d-1f466",
      a: "2"
    },
    {
      n: [
        "man",
        "girl",
        "family",
        "family: man, man, girl, girl"
      ],
      u: "1f468-200d-1f468-200d-1f467-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "woman",
        "family",
        "family: woman, woman, boy"
      ],
      u: "1f469-200d-1f469-200d-1f466",
      a: "2"
    },
    {
      n: [
        "girl",
        "woman",
        "family",
        "family: woman, woman, girl"
      ],
      u: "1f469-200d-1f469-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "girl",
        "woman",
        "family",
        "family: woman, woman, girl, boy"
      ],
      u: "1f469-200d-1f469-200d-1f467-200d-1f466",
      a: "2"
    },
    {
      n: [
        "boy",
        "woman",
        "family",
        "family: woman, woman, boy, boy"
      ],
      u: "1f469-200d-1f469-200d-1f466-200d-1f466",
      a: "2"
    },
    {
      n: [
        "girl",
        "woman",
        "family",
        "family: woman, woman, girl, girl"
      ],
      u: "1f469-200d-1f469-200d-1f467-200d-1f467",
      a: "2"
    },
    {
      n: [
        "boy",
        "man",
        "family",
        "family: man, boy"
      ],
      u: "1f468-200d-1f466",
      a: "4"
    },
    {
      n: [
        "boy",
        "man",
        "family",
        "family: man, boy, boy"
      ],
      u: "1f468-200d-1f466-200d-1f466",
      a: "4"
    },
    {
      n: [
        "man",
        "girl",
        "family",
        "family: man, girl"
      ],
      u: "1f468-200d-1f467",
      a: "4"
    },
    {
      n: [
        "boy",
        "man",
        "girl",
        "family",
        "family: man, girl, boy"
      ],
      u: "1f468-200d-1f467-200d-1f466",
      a: "4"
    },
    {
      n: [
        "man",
        "girl",
        "family",
        "family: man, girl, girl"
      ],
      u: "1f468-200d-1f467-200d-1f467",
      a: "4"
    },
    {
      n: [
        "boy",
        "woman",
        "family",
        "family: woman, boy"
      ],
      u: "1f469-200d-1f466",
      a: "4"
    },
    {
      n: [
        "boy",
        "woman",
        "family",
        "family: woman, boy, boy"
      ],
      u: "1f469-200d-1f466-200d-1f466",
      a: "4"
    },
    {
      n: [
        "girl",
        "woman",
        "family",
        "family: woman, girl"
      ],
      u: "1f469-200d-1f467",
      a: "4"
    },
    {
      n: [
        "boy",
        "girl",
        "woman",
        "family",
        "family: woman, girl, boy"
      ],
      u: "1f469-200d-1f467-200d-1f466",
      a: "4"
    },
    {
      n: [
        "girl",
        "woman",
        "family",
        "family: woman, girl, girl"
      ],
      u: "1f469-200d-1f467-200d-1f467",
      a: "4"
    },
    {
      n: [
        "face",
        "head",
        "speak",
        "speaking",
        "silhouette",
        "speaking head"
      ],
      u: "1f5e3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "bust",
        "silhouette",
        "bust in silhouette"
      ],
      u: "1f464",
      a: "0.6"
    },
    {
      n: [
        "bust",
        "silhouette",
        "busts in silhouette"
      ],
      u: "1f465",
      a: "1"
    },
    {
      n: [
        "hug",
        "hello",
        "thanks",
        "goodbye",
        "people hugging"
      ],
      u: "1fac2",
      a: "13"
    },
    {
      n: [
        "family"
      ],
      u: "1f46a",
      a: "0.6"
    },
    {
      n: [
        "family: adult, adult, child"
      ],
      u: "1f9d1-200d-1f9d1-200d-1f9d2",
      a: "15.1"
    },
    {
      n: [
        "family: adult, adult, child, child"
      ],
      u: "1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2",
      a: "15.1"
    },
    {
      n: [
        "family: adult, child"
      ],
      u: "1f9d1-200d-1f9d2",
      a: "15.1"
    },
    {
      n: [
        "family: adult, child, child"
      ],
      u: "1f9d1-200d-1f9d2-200d-1f9d2",
      a: "15.1"
    },
    {
      n: [
        "print",
        "clothing",
        "footprint",
        "footprints"
      ],
      u: "1f463",
      a: "0.6"
    }
  ],
  animals_nature: [
    {
      n: [
        "face",
        "monkey",
        "monkey face"
      ],
      u: "1f435",
      a: "0.6"
    },
    {
      n: [
        "monkey"
      ],
      u: "1f412",
      a: "0.6"
    },
    {
      n: [
        "gorilla"
      ],
      u: "1f98d",
      a: "3"
    },
    {
      n: [
        "ape",
        "orangutan"
      ],
      u: "1f9a7",
      a: "12"
    },
    {
      n: [
        "dog",
        "pet",
        "face",
        "dog face"
      ],
      u: "1f436",
      a: "0.6"
    },
    {
      n: [
        "dog",
        "pet"
      ],
      u: "1f415",
      a: "0.7"
    },
    {
      n: [
        "blind",
        "guide",
        "guide dog",
        "accessibility"
      ],
      u: "1f9ae",
      a: "12"
    },
    {
      n: [
        "dog",
        "service",
        "assistance",
        "service dog",
        "accessibility"
      ],
      u: "1f415-200d-1f9ba",
      a: "12"
    },
    {
      n: [
        "dog",
        "poodle"
      ],
      u: "1f429",
      a: "0.6"
    },
    {
      n: [
        "wolf",
        "face"
      ],
      u: "1f43a",
      a: "0.6"
    },
    {
      n: [
        "fox",
        "face"
      ],
      u: "1f98a",
      a: "3"
    },
    {
      n: [
        "sly",
        "raccoon",
        "curious"
      ],
      u: "1f99d",
      a: "11"
    },
    {
      n: [
        "cat",
        "pet",
        "face",
        "cat face"
      ],
      u: "1f431",
      a: "0.6"
    },
    {
      n: [
        "cat",
        "pet"
      ],
      u: "1f408",
      a: "0.7"
    },
    {
      n: [
        "cat",
        "black",
        "unlucky",
        "black cat"
      ],
      u: "1f408-200d-2b1b",
      a: "13"
    },
    {
      n: [
        "leo",
        "lion",
        "face",
        "zodiac"
      ],
      u: "1f981",
      a: "1"
    },
    {
      n: [
        "face",
        "tiger",
        "tiger face"
      ],
      u: "1f42f",
      a: "0.6"
    },
    {
      n: [
        "tiger"
      ],
      u: "1f405",
      a: "1"
    },
    {
      n: [
        "leopard"
      ],
      u: "1f406",
      a: "1"
    },
    {
      n: [
        "face",
        "horse",
        "horse face"
      ],
      u: "1f434",
      a: "0.6"
    },
    {
      n: [
        "elk",
        "moose",
        "animal",
        "mammal",
        "antlers"
      ],
      u: "1face",
      a: "15"
    },
    {
      n: [
        "ass",
        "mule",
        "burro",
        "donkey",
        "animal",
        "mammal",
        "stubborn"
      ],
      u: "1facf",
      a: "15"
    },
    {
      n: [
        "horse",
        "racing",
        "racehorse",
        "equestrian"
      ],
      u: "1f40e",
      a: "0.6"
    },
    {
      n: [
        "face",
        "unicorn"
      ],
      u: "1f984",
      a: "1"
    },
    {
      n: [
        "zebra",
        "stripe"
      ],
      u: "1f993",
      a: "5"
    },
    {
      n: [
        "deer"
      ],
      u: "1f98c",
      a: "3"
    },
    {
      n: [
        "herd",
        "bison",
        "wisent",
        "buffalo"
      ],
      u: "1f9ac",
      a: "13"
    },
    {
      n: [
        "cow",
        "face",
        "cow face"
      ],
      u: "1f42e",
      a: "0.6"
    },
    {
      n: [
        "ox",
        "bull",
        "taurus",
        "zodiac"
      ],
      u: "1f402",
      a: "1"
    },
    {
      n: [
        "water",
        "buffalo",
        "water buffalo"
      ],
      u: "1f403",
      a: "1"
    },
    {
      n: [
        "cow"
      ],
      u: "1f404",
      a: "1"
    },
    {
      n: [
        "pig",
        "face",
        "pig face"
      ],
      u: "1f437",
      a: "0.6"
    },
    {
      n: [
        "pig",
        "sow"
      ],
      u: "1f416",
      a: "1"
    },
    {
      n: [
        "pig",
        "boar"
      ],
      u: "1f417",
      a: "0.6"
    },
    {
      n: [
        "pig",
        "face",
        "nose",
        "pig nose"
      ],
      u: "1f43d",
      a: "0.6"
    },
    {
      n: [
        "ram",
        "male",
        "aries",
        "sheep",
        "zodiac"
      ],
      u: "1f40f",
      a: "1"
    },
    {
      n: [
        "ewe",
        "sheep",
        "female"
      ],
      u: "1f411",
      a: "0.6"
    },
    {
      n: [
        "goat",
        "zodiac",
        "capricorn"
      ],
      u: "1f410",
      a: "1"
    },
    {
      n: [
        "hump",
        "camel",
        "dromedary"
      ],
      u: "1f42a",
      a: "1"
    },
    {
      n: [
        "hump",
        "camel",
        "bactrian",
        "two hump camel"
      ],
      u: "1f42b",
      a: "0.6"
    },
    {
      n: [
        "wool",
        "llama",
        "alpaca",
        "vicuña",
        "guanaco"
      ],
      u: "1f999",
      a: "11"
    },
    {
      n: [
        "spots",
        "giraffe"
      ],
      u: "1f992",
      a: "5"
    },
    {
      n: [
        "elephant"
      ],
      u: "1f418",
      a: "0.6"
    },
    {
      n: [
        "tusk",
        "large",
        "woolly",
        "mammoth",
        "extinction"
      ],
      u: "1f9a3",
      a: "13"
    },
    {
      n: [
        "rhinoceros"
      ],
      u: "1f98f",
      a: "3"
    },
    {
      n: [
        "hippo",
        "hippopotamus"
      ],
      u: "1f99b",
      a: "11"
    },
    {
      n: [
        "face",
        "mouse",
        "mouse face"
      ],
      u: "1f42d",
      a: "0.6"
    },
    {
      n: [
        "mouse"
      ],
      u: "1f401",
      a: "1"
    },
    {
      n: [
        "rat"
      ],
      u: "1f400",
      a: "1"
    },
    {
      n: [
        "pet",
        "face",
        "hamster"
      ],
      u: "1f439",
      a: "0.6"
    },
    {
      n: [
        "pet",
        "face",
        "bunny",
        "rabbit",
        "rabbit face"
      ],
      u: "1f430",
      a: "0.6"
    },
    {
      n: [
        "pet",
        "bunny",
        "rabbit"
      ],
      u: "1f407",
      a: "1"
    },
    {
      n: [
        "chipmunk",
        "squirrel"
      ],
      u: "1f43f-fe0f",
      a: "0.7"
    },
    {
      n: [
        "dam",
        "beaver"
      ],
      u: "1f9ab",
      a: "13"
    },
    {
      n: [
        "spiny",
        "hedgehog"
      ],
      u: "1f994",
      a: "5"
    },
    {
      n: [
        "bat",
        "vampire"
      ],
      u: "1f987",
      a: "3"
    },
    {
      n: [
        "bear",
        "face"
      ],
      u: "1f43b",
      a: "0.6"
    },
    {
      n: [
        "bear",
        "white",
        "arctic",
        "polar bear"
      ],
      u: "1f43b-200d-2744-fe0f",
      a: "13"
    },
    {
      n: [
        "face",
        "koala",
        "marsupial"
      ],
      u: "1f428",
      a: "0.6"
    },
    {
      n: [
        "face",
        "panda"
      ],
      u: "1f43c",
      a: "0.6"
    },
    {
      n: [
        "lazy",
        "slow",
        "sloth"
      ],
      u: "1f9a5",
      a: "12"
    },
    {
      n: [
        "otter",
        "fishing",
        "playful"
      ],
      u: "1f9a6",
      a: "12"
    },
    {
      n: [
        "skunk",
        "stink"
      ],
      u: "1f9a8",
      a: "12"
    },
    {
      n: [
        "joey",
        "jump",
        "kangaroo",
        "marsupial"
      ],
      u: "1f998",
      a: "11"
    },
    {
      n: [
        "badger",
        "pester",
        "honey badger"
      ],
      u: "1f9a1",
      a: "11"
    },
    {
      n: [
        "paw",
        "feet",
        "print",
        "paw prints"
      ],
      u: "1f43e",
      a: "0.6"
    },
    {
      n: [
        "bird",
        "turkey"
      ],
      u: "1f983",
      a: "1"
    },
    {
      n: [
        "bird",
        "chicken"
      ],
      u: "1f414",
      a: "0.6"
    },
    {
      n: [
        "bird",
        "rooster"
      ],
      u: "1f413",
      a: "1"
    },
    {
      n: [
        "baby",
        "bird",
        "chick",
        "hatching",
        "hatching chick"
      ],
      u: "1f423",
      a: "0.6"
    },
    {
      n: [
        "baby",
        "bird",
        "chick",
        "baby chick"
      ],
      u: "1f424",
      a: "0.6"
    },
    {
      n: [
        "baby",
        "bird",
        "chick",
        "front facing baby chick"
      ],
      u: "1f425",
      a: "0.6"
    },
    {
      n: [
        "bird"
      ],
      u: "1f426",
      a: "0.6"
    },
    {
      n: [
        "bird",
        "penguin"
      ],
      u: "1f427",
      a: "0.6"
    },
    {
      n: [
        "fly",
        "dove",
        "bird",
        "peace"
      ],
      u: "1f54a-fe0f",
      a: "0.7"
    },
    {
      n: [
        "bird",
        "eagle"
      ],
      u: "1f985",
      a: "3"
    },
    {
      n: [
        "duck",
        "bird"
      ],
      u: "1f986",
      a: "3"
    },
    {
      n: [
        "swan",
        "bird",
        "cygnet",
        "ugly duckling"
      ],
      u: "1f9a2",
      a: "11"
    },
    {
      n: [
        "owl",
        "bird",
        "wise"
      ],
      u: "1f989",
      a: "3"
    },
    {
      n: [
        "dodo",
        "large",
        "mauritius",
        "extinction"
      ],
      u: "1f9a4",
      a: "13"
    },
    {
      n: [
        "bird",
        "light",
        "flight",
        "feather",
        "plumage"
      ],
      u: "1fab6",
      a: "13"
    },
    {
      n: [
        "flamingo",
        "tropical",
        "flamboyant"
      ],
      u: "1f9a9",
      a: "12"
    },
    {
      n: [
        "bird",
        "proud",
        "peahen",
        "peacock",
        "ostentatious"
      ],
      u: "1f99a",
      a: "11"
    },
    {
      n: [
        "bird",
        "talk",
        "parrot",
        "pirate"
      ],
      u: "1f99c",
      a: "11"
    },
    {
      n: [
        "wing",
        "bird",
        "flying",
        "angelic",
        "aviation",
        "mythology"
      ],
      u: "1fabd",
      a: "15"
    },
    {
      n: [
        "bird",
        "crow",
        "rook",
        "black",
        "raven",
        "black bird"
      ],
      u: "1f426-200d-2b1b",
      a: "15"
    },
    {
      n: [
        "bird",
        "fowl",
        "honk",
        "goose",
        "silly"
      ],
      u: "1fabf",
      a: "15"
    },
    {
      n: [
        "phoenix",
        "fantasy",
        "rebirth",
        "firebird",
        "reincarnation"
      ],
      u: "1f426-200d-1f525",
      a: "15.1"
    },
    {
      n: [
        "frog",
        "face"
      ],
      u: "1f438",
      a: "0.6"
    },
    {
      n: [
        "crocodile"
      ],
      u: "1f40a",
      a: "1"
    },
    {
      n: [
        "turtle",
        "terrapin",
        "tortoise"
      ],
      u: "1f422",
      a: "0.6"
    },
    {
      n: [
        "lizard",
        "reptile"
      ],
      u: "1f98e",
      a: "3"
    },
    {
      n: [
        "snake",
        "bearer",
        "zodiac",
        "serpent",
        "ophiuchus"
      ],
      u: "1f40d",
      a: "0.6"
    },
    {
      n: [
        "face",
        "dragon",
        "fairy tale",
        "dragon face"
      ],
      u: "1f432",
      a: "0.6"
    },
    {
      n: [
        "dragon",
        "fairy tale"
      ],
      u: "1f409",
      a: "1"
    },
    {
      n: [
        "sauropod",
        "diplodocus",
        "brontosaurus",
        "brachiosaurus"
      ],
      u: "1f995",
      a: "5"
    },
    {
      n: [
        "T Rex",
        "t rex",
        "tyrannosaurus rex"
      ],
      u: "1f996",
      a: "5"
    },
    {
      n: [
        "face",
        "whale",
        "spouting",
        "spouting whale"
      ],
      u: "1f433",
      a: "0.6"
    },
    {
      n: [
        "whale"
      ],
      u: "1f40b",
      a: "1"
    },
    {
      n: [
        "dolphin",
        "flipper"
      ],
      u: "1f42c",
      a: "0.6"
    },
    {
      n: [
        "seal",
        "sea lion"
      ],
      u: "1f9ad",
      a: "13"
    },
    {
      n: [
        "fish",
        "pisces",
        "zodiac"
      ],
      u: "1f41f",
      a: "0.6"
    },
    {
      n: [
        "fish",
        "tropical",
        "tropical fish"
      ],
      u: "1f420",
      a: "0.6"
    },
    {
      n: [
        "fish",
        "blowfish"
      ],
      u: "1f421",
      a: "0.6"
    },
    {
      n: [
        "fish",
        "shark"
      ],
      u: "1f988",
      a: "3"
    },
    {
      n: [
        "octopus"
      ],
      u: "1f419",
      a: "0.6"
    },
    {
      n: [
        "shell",
        "spiral",
        "spiral shell"
      ],
      u: "1f41a",
      a: "0.6"
    },
    {
      n: [
        "reef",
        "coral",
        "ocean"
      ],
      u: "1fab8",
      a: "14"
    },
    {
      n: [
        "burn",
        "ouch",
        "jelly",
        "marine",
        "stinger",
        "jellyfish",
        "invertebrate"
      ],
      u: "1fabc",
      a: "15"
    },
    {
      n: [
        "snail"
      ],
      u: "1f40c",
      a: "0.6"
    },
    {
      n: [
        "insect",
        "pretty",
        "butterfly"
      ],
      u: "1f98b",
      a: "3"
    },
    {
      n: [
        "bug",
        "insect"
      ],
      u: "1f41b",
      a: "0.6"
    },
    {
      n: [
        "ant",
        "insect"
      ],
      u: "1f41c",
      a: "0.6"
    },
    {
      n: [
        "bee",
        "insect",
        "honeybee"
      ],
      u: "1f41d",
      a: "0.6"
    },
    {
      n: [
        "bug",
        "beetle",
        "insect"
      ],
      u: "1fab2",
      a: "13"
    },
    {
      n: [
        "beetle",
        "insect",
        "ladybug",
        "ladybird",
        "lady beetle"
      ],
      u: "1f41e",
      a: "0.6"
    },
    {
      n: [
        "cricket",
        "grasshopper"
      ],
      u: "1f997",
      a: "5"
    },
    {
      n: [
        "pest",
        "roach",
        "insect",
        "cockroach"
      ],
      u: "1fab3",
      a: "13"
    },
    {
      n: [
        "spider",
        "insect"
      ],
      u: "1f577-fe0f",
      a: "0.7"
    },
    {
      n: [
        "web",
        "spider",
        "spider web"
      ],
      u: "1f578-fe0f",
      a: "0.7"
    },
    {
      n: [
        "zodiac",
        "scorpio",
        "scorpion"
      ],
      u: "1f982",
      a: "1"
    },
    {
      n: [
        "pest",
        "fever",
        "virus",
        "disease",
        "malaria",
        "mosquito"
      ],
      u: "1f99f",
      a: "11"
    },
    {
      n: [
        "fly",
        "pest",
        "maggot",
        "disease",
        "rotting"
      ],
      u: "1fab0",
      a: "13"
    },
    {
      n: [
        "worm",
        "annelid",
        "parasite",
        "earthworm"
      ],
      u: "1fab1",
      a: "13"
    },
    {
      n: [
        "virus",
        "amoeba",
        "microbe",
        "bacteria"
      ],
      u: "1f9a0",
      a: "11"
    },
    {
      n: [
        "flower",
        "bouquet"
      ],
      u: "1f490",
      a: "0.6"
    },
    {
      n: [
        "cherry",
        "flower",
        "blossom",
        "cherry blossom"
      ],
      u: "1f338",
      a: "0.6"
    },
    {
      n: [
        "flower",
        "white flower"
      ],
      u: "1f4ae",
      a: "0.6"
    },
    {
      n: [
        "lotus",
        "flower",
        "purity",
        "buddhism",
        "hinduism"
      ],
      u: "1fab7",
      a: "14"
    },
    {
      n: [
        "plant",
        "rosette"
      ],
      u: "1f3f5-fe0f",
      a: "0.7"
    },
    {
      n: [
        "rose",
        "flower"
      ],
      u: "1f339",
      a: "0.6"
    },
    {
      n: [
        "flower",
        "wilted",
        "wilted flower"
      ],
      u: "1f940",
      a: "3"
    },
    {
      n: [
        "flower",
        "hibiscus"
      ],
      u: "1f33a",
      a: "0.6"
    },
    {
      n: [
        "sun",
        "flower",
        "sunflower"
      ],
      u: "1f33b",
      a: "0.6"
    },
    {
      n: [
        "flower",
        "blossom"
      ],
      u: "1f33c",
      a: "0.6"
    },
    {
      n: [
        "tulip",
        "flower"
      ],
      u: "1f337",
      a: "0.6"
    },
    {
      n: [
        "flower",
        "lupine",
        "hyacinth",
        "lavender",
        "bluebonnet",
        "snapdragon"
      ],
      u: "1fabb",
      a: "15"
    },
    {
      n: [
        "young",
        "seedling"
      ],
      u: "1f331",
      a: "0.6"
    },
    {
      n: [
        "grow",
        "house",
        "plant",
        "boring",
        "useless",
        "nurturing",
        "potted plant"
      ],
      u: "1fab4",
      a: "13"
    },
    {
      n: [
        "tree",
        "evergreen tree"
      ],
      u: "1f332",
      a: "1"
    },
    {
      n: [
        "tree",
        "shedding",
        "deciduous",
        "deciduous tree"
      ],
      u: "1f333",
      a: "1"
    },
    {
      n: [
        "palm",
        "tree",
        "palm tree"
      ],
      u: "1f334",
      a: "0.6"
    },
    {
      n: [
        "plant",
        "cactus"
      ],
      u: "1f335",
      a: "0.6"
    },
    {
      n: [
        "ear",
        "rice",
        "grain",
        "sheaf of rice"
      ],
      u: "1f33e",
      a: "0.6"
    },
    {
      n: [
        "herb",
        "leaf"
      ],
      u: "1f33f",
      a: "0.6"
    },
    {
      n: [
        "plant",
        "shamrock"
      ],
      u: "2618-fe0f",
      a: "1"
    },
    {
      n: [
        "4",
        "four",
        "leaf",
        "clover",
        "four leaf clover"
      ],
      u: "1f340",
      a: "0.6"
    },
    {
      n: [
        "leaf",
        "maple",
        "falling",
        "maple leaf"
      ],
      u: "1f341",
      a: "0.6"
    },
    {
      n: [
        "leaf",
        "falling",
        "fallen leaf"
      ],
      u: "1f342",
      a: "0.6"
    },
    {
      n: [
        "blow",
        "leaf",
        "wind",
        "flutter",
        "leaf fluttering in wind"
      ],
      u: "1f343",
      a: "0.6"
    },
    {
      n: [
        "nesting",
        "empty nest"
      ],
      u: "1fab9",
      a: "14"
    },
    {
      n: [
        "nesting",
        "nest with eggs"
      ],
      u: "1faba",
      a: "14"
    },
    {
      n: [
        "mushroom",
        "toadstool"
      ],
      u: "1f344",
      a: "0.6"
    }
  ],
  food_drink: [
    {
      n: [
        "fruit",
        "grape",
        "grapes"
      ],
      u: "1f347",
      a: "0.6"
    },
    {
      n: [
        "melon",
        "fruit"
      ],
      u: "1f348",
      a: "0.6"
    },
    {
      n: [
        "fruit",
        "watermelon"
      ],
      u: "1f349",
      a: "0.6"
    },
    {
      n: [
        "fruit",
        "orange",
        "tangerine"
      ],
      u: "1f34a",
      a: "0.6"
    },
    {
      n: [
        "lemon",
        "fruit",
        "citrus"
      ],
      u: "1f34b",
      a: "1"
    },
    {
      n: [
        "lime",
        "fruit",
        "citrus",
        "tropical"
      ],
      u: "1f34b-200d-1f7e9",
      a: "15.1"
    },
    {
      n: [
        "fruit",
        "banana"
      ],
      u: "1f34c",
      a: "0.6"
    },
    {
      n: [
        "fruit",
        "pineapple"
      ],
      u: "1f34d",
      a: "0.6"
    },
    {
      n: [
        "mango",
        "fruit",
        "tropical"
      ],
      u: "1f96d",
      a: "11"
    },
    {
      n: [
        "red",
        "apple",
        "fruit",
        "red apple"
      ],
      u: "1f34e",
      a: "0.6"
    },
    {
      n: [
        "apple",
        "fruit",
        "green",
        "green apple"
      ],
      u: "1f34f",
      a: "0.6"
    },
    {
      n: [
        "pear",
        "fruit"
      ],
      u: "1f350",
      a: "1"
    },
    {
      n: [
        "peach",
        "fruit"
      ],
      u: "1f351",
      a: "0.6"
    },
    {
      n: [
        "red",
        "fruit",
        "cherry",
        "berries",
        "cherries"
      ],
      u: "1f352",
      a: "0.6"
    },
    {
      n: [
        "berry",
        "fruit",
        "strawberry"
      ],
      u: "1f353",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "berry",
        "bilberry",
        "blueberry",
        "blueberries"
      ],
      u: "1fad0",
      a: "13"
    },
    {
      n: [
        "food",
        "kiwi",
        "fruit",
        "kiwi fruit"
      ],
      u: "1f95d",
      a: "3"
    },
    {
      n: [
        "fruit",
        "tomato",
        "vegetable"
      ],
      u: "1f345",
      a: "0.6"
    },
    {
      n: [
        "food",
        "olive"
      ],
      u: "1fad2",
      a: "13"
    },
    {
      n: [
        "palm",
        "coconut",
        "piña colada"
      ],
      u: "1f965",
      a: "5"
    },
    {
      n: [
        "food",
        "fruit",
        "avocado"
      ],
      u: "1f951",
      a: "3"
    },
    {
      n: [
        "eggplant",
        "aubergine",
        "vegetable"
      ],
      u: "1f346",
      a: "0.6"
    },
    {
      n: [
        "food",
        "potato",
        "vegetable"
      ],
      u: "1f954",
      a: "3"
    },
    {
      n: [
        "food",
        "carrot",
        "vegetable"
      ],
      u: "1f955",
      a: "3"
    },
    {
      n: [
        "ear",
        "corn",
        "maze",
        "maize",
        "ear of corn"
      ],
      u: "1f33d",
      a: "0.6"
    },
    {
      n: [
        "hot",
        "pepper",
        "hot pepper"
      ],
      u: "1f336-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pepper",
        "capsicum",
        "vegetable",
        "bell pepper"
      ],
      u: "1fad1",
      a: "13"
    },
    {
      n: [
        "food",
        "pickle",
        "cucumber",
        "vegetable"
      ],
      u: "1f952",
      a: "3"
    },
    {
      n: [
        "kale",
        "cabbage",
        "lettuce",
        "bok choy",
        "leafy green"
      ],
      u: "1f96c",
      a: "11"
    },
    {
      n: [
        "broccoli",
        "wild cabbage"
      ],
      u: "1f966",
      a: "5"
    },
    {
      n: [
        "garlic",
        "flavoring"
      ],
      u: "1f9c4",
      a: "12"
    },
    {
      n: [
        "onion",
        "flavoring"
      ],
      u: "1f9c5",
      a: "12"
    },
    {
      n: [
        "nut",
        "food",
        "peanut",
        "peanuts",
        "vegetable"
      ],
      u: "1f95c",
      a: "3"
    },
    {
      n: [
        "food",
        "beans",
        "kidney",
        "legume"
      ],
      u: "1fad8",
      a: "14"
    },
    {
      n: [
        "plant",
        "chestnut"
      ],
      u: "1f330",
      a: "0.6"
    },
    {
      n: [
        "beer",
        "root",
        "spice",
        "ginger root"
      ],
      u: "1fada",
      a: "15"
    },
    {
      n: [
        "pea",
        "pod",
        "beans",
        "legume",
        "pea pod",
        "edamame",
        "vegetable"
      ],
      u: "1fadb",
      a: "15"
    },
    {
      n: [
        "food",
        "fungus",
        "nature",
        "vegetable",
        "brown mushroom"
      ],
      u: "1f344-200d-1f7eb",
      a: "15.1"
    },
    {
      n: [
        "loaf",
        "bread"
      ],
      u: "1f35e",
      a: "0.6"
    },
    {
      n: [
        "food",
        "roll",
        "bread",
        "french",
        "croissant",
        "breakfast"
      ],
      u: "1f950",
      a: "3"
    },
    {
      n: [
        "food",
        "bread",
        "french",
        "baguette",
        "baguette bread"
      ],
      u: "1f956",
      a: "3"
    },
    {
      n: [
        "naan",
        "pita",
        "arepa",
        "lavash",
        "flatbread"
      ],
      u: "1fad3",
      a: "13"
    },
    {
      n: [
        "pretzel",
        "twisted"
      ],
      u: "1f968",
      a: "5"
    },
    {
      n: [
        "bagel",
        "bakery",
        "schmear",
        "breakfast"
      ],
      u: "1f96f",
      a: "11"
    },
    {
      n: [
        "food",
        "crêpe",
        "hotcake",
        "pancake",
        "pancakes",
        "breakfast"
      ],
      u: "1f95e",
      a: "3"
    },
    {
      n: [
        "iron",
        "waffle",
        "breakfast",
        "indecisive"
      ],
      u: "1f9c7",
      a: "12"
    },
    {
      n: [
        "cheese",
        "cheese wedge"
      ],
      u: "1f9c0",
      a: "1"
    },
    {
      n: [
        "bone",
        "meat",
        "meat on bone"
      ],
      u: "1f356",
      a: "0.6"
    },
    {
      n: [
        "leg",
        "bone",
        "chicken",
        "poultry",
        "drumstick",
        "poultry leg"
      ],
      u: "1f357",
      a: "0.6"
    },
    {
      n: [
        "chop",
        "steak",
        "lambchop",
        "porkchop",
        "cut of meat"
      ],
      u: "1f969",
      a: "5"
    },
    {
      n: [
        "food",
        "meat",
        "bacon",
        "breakfast"
      ],
      u: "1f953",
      a: "3"
    },
    {
      n: [
        "burger",
        "hamburger"
      ],
      u: "1f354",
      a: "0.6"
    },
    {
      n: [
        "fries",
        "french",
        "french fries"
      ],
      u: "1f35f",
      a: "0.6"
    },
    {
      n: [
        "pizza",
        "slice",
        "cheese"
      ],
      u: "1f355",
      a: "0.6"
    },
    {
      n: [
        "hotdog",
        "hot dog",
        "sausage",
        "frankfurter"
      ],
      u: "1f32d",
      a: "1"
    },
    {
      n: [
        "bread",
        "sandwich"
      ],
      u: "1f96a",
      a: "5"
    },
    {
      n: [
        "taco",
        "mexican"
      ],
      u: "1f32e",
      a: "1"
    },
    {
      n: [
        "wrap",
        "burrito",
        "mexican"
      ],
      u: "1f32f",
      a: "1"
    },
    {
      n: [
        "tamale",
        "mexican",
        "wrapped"
      ],
      u: "1fad4",
      a: "13"
    },
    {
      n: [
        "food",
        "gyro",
        "kebab",
        "falafel",
        "stuffed",
        "flatbread",
        "stuffed flatbread"
      ],
      u: "1f959",
      a: "3"
    },
    {
      n: [
        "falafel",
        "chickpea",
        "meatball"
      ],
      u: "1f9c6",
      a: "12"
    },
    {
      n: [
        "egg",
        "food",
        "breakfast"
      ],
      u: "1f95a",
      a: "3"
    },
    {
      n: [
        "egg",
        "pan",
        "frying",
        "cooking",
        "breakfast"
      ],
      u: "1f373",
      a: "0.6"
    },
    {
      n: [
        "pan",
        "food",
        "paella",
        "shallow",
        "casserole",
        "shallow pan of food"
      ],
      u: "1f958",
      a: "3"
    },
    {
      n: [
        "pot",
        "stew",
        "pot of food"
      ],
      u: "1f372",
      a: "0.6"
    },
    {
      n: [
        "pot",
        "swiss",
        "fondue",
        "cheese",
        "melted",
        "chocolate"
      ],
      u: "1fad5",
      a: "13"
    },
    {
      n: [
        "cereal",
        "congee",
        "breakfast",
        "bowl with spoon"
      ],
      u: "1f963",
      a: "5"
    },
    {
      n: [
        "food",
        "green",
        "salad",
        "green salad"
      ],
      u: "1f957",
      a: "3"
    },
    {
      n: [
        "popcorn"
      ],
      u: "1f37f",
      a: "1"
    },
    {
      n: [
        "dairy",
        "butter"
      ],
      u: "1f9c8",
      a: "12"
    },
    {
      n: [
        "salt",
        "shaker",
        "condiment"
      ],
      u: "1f9c2",
      a: "11"
    },
    {
      n: [
        "can",
        "canned food"
      ],
      u: "1f96b",
      a: "5"
    },
    {
      n: [
        "box",
        "bento",
        "bento box"
      ],
      u: "1f371",
      a: "0.6"
    },
    {
      n: [
        "rice",
        "cracker",
        "rice cracker"
      ],
      u: "1f358",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "rice",
        "japanese",
        "rice ball"
      ],
      u: "1f359",
      a: "0.6"
    },
    {
      n: [
        "rice",
        "cooked",
        "cooked rice"
      ],
      u: "1f35a",
      a: "0.6"
    },
    {
      n: [
        "rice",
        "curry",
        "curry rice"
      ],
      u: "1f35b",
      a: "0.6"
    },
    {
      n: [
        "bowl",
        "ramen",
        "noodle",
        "steaming",
        "steaming bowl"
      ],
      u: "1f35c",
      a: "0.6"
    },
    {
      n: [
        "pasta",
        "spaghetti"
      ],
      u: "1f35d",
      a: "0.6"
    },
    {
      n: [
        "sweet",
        "potato",
        "roasted",
        "roasted sweet potato"
      ],
      u: "1f360",
      a: "0.6"
    },
    {
      n: [
        "oden",
        "kebab",
        "stick",
        "skewer",
        "seafood"
      ],
      u: "1f362",
      a: "0.6"
    },
    {
      n: [
        "sushi"
      ],
      u: "1f363",
      a: "0.6"
    },
    {
      n: [
        "fried",
        "prawn",
        "shrimp",
        "tempura",
        "fried shrimp"
      ],
      u: "1f364",
      a: "0.6"
    },
    {
      n: [
        "cake",
        "fish",
        "swirl",
        "pastry",
        "fish cake with swirl"
      ],
      u: "1f365",
      a: "0.6"
    },
    {
      n: [
        "autumn",
        "yuèbǐng",
        "festival",
        "moon cake"
      ],
      u: "1f96e",
      a: "11"
    },
    {
      n: [
        "dango",
        "stick",
        "sweet",
        "skewer",
        "dessert",
        "japanese"
      ],
      u: "1f361",
      a: "0.6"
    },
    {
      n: [
        "gyōza",
        "jiaozi",
        "pierogi",
        "dumpling",
        "empanada",
        "potsticker"
      ],
      u: "1f95f",
      a: "5"
    },
    {
      n: [
        "prophecy",
        "fortune cookie"
      ],
      u: "1f960",
      a: "5"
    },
    {
      n: [
        "takeout box",
        "oyster pail"
      ],
      u: "1f961",
      a: "5"
    },
    {
      n: [
        "crab",
        "cancer",
        "zodiac"
      ],
      u: "1f980",
      a: "1"
    },
    {
      n: [
        "claws",
        "bisque",
        "lobster",
        "seafood"
      ],
      u: "1f99e",
      a: "11"
    },
    {
      n: [
        "food",
        "small",
        "shrimp",
        "shellfish"
      ],
      u: "1f990",
      a: "3"
    },
    {
      n: [
        "food",
        "squid",
        "molusc"
      ],
      u: "1f991",
      a: "3"
    },
    {
      n: [
        "pearl",
        "oyster",
        "diving"
      ],
      u: "1f9aa",
      a: "12"
    },
    {
      n: [
        "ice",
        "soft",
        "cream",
        "sweet",
        "dessert",
        "icecream",
        "soft ice cream"
      ],
      u: "1f366",
      a: "0.6"
    },
    {
      n: [
        "ice",
        "sweet",
        "shaved",
        "dessert",
        "shaved ice"
      ],
      u: "1f367",
      a: "0.6"
    },
    {
      n: [
        "ice",
        "cream",
        "sweet",
        "dessert",
        "ice cream"
      ],
      u: "1f368",
      a: "0.6"
    },
    {
      n: [
        "donut",
        "sweet",
        "dessert",
        "doughnut",
        "breakfast"
      ],
      u: "1f369",
      a: "0.6"
    },
    {
      n: [
        "sweet",
        "cookie",
        "dessert"
      ],
      u: "1f36a",
      a: "0.6"
    },
    {
      n: [
        "cake",
        "sweet",
        "pastry",
        "dessert",
        "birthday",
        "celebration",
        "birthday cake"
      ],
      u: "1f382",
      a: "0.6"
    },
    {
      n: [
        "cake",
        "slice",
        "sweet",
        "pastry",
        "dessert",
        "shortcake"
      ],
      u: "1f370",
      a: "0.6"
    },
    {
      n: [
        "sweet",
        "bakery",
        "cupcake"
      ],
      u: "1f9c1",
      a: "11"
    },
    {
      n: [
        "pie",
        "pastry",
        "filling"
      ],
      u: "1f967",
      a: "5"
    },
    {
      n: [
        "bar",
        "sweet",
        "dessert",
        "chocolate",
        "chocolate bar"
      ],
      u: "1f36b",
      a: "0.6"
    },
    {
      n: [
        "candy",
        "sweet",
        "dessert"
      ],
      u: "1f36c",
      a: "0.6"
    },
    {
      n: [
        "candy",
        "sweet",
        "dessert",
        "lollipop"
      ],
      u: "1f36d",
      a: "0.6"
    },
    {
      n: [
        "sweet",
        "custard",
        "dessert",
        "pudding"
      ],
      u: "1f36e",
      a: "0.6"
    },
    {
      n: [
        "pot",
        "honey",
        "sweet",
        "honeypot",
        "honey pot"
      ],
      u: "1f36f",
      a: "0.6"
    },
    {
      n: [
        "baby",
        "milk",
        "drink",
        "bottle",
        "baby bottle"
      ],
      u: "1f37c",
      a: "1"
    },
    {
      n: [
        "milk",
        "drink",
        "glass",
        "glass of milk"
      ],
      u: "1f95b",
      a: "3"
    },
    {
      n: [
        "hot",
        "tea",
        "drink",
        "coffee",
        "beverage",
        "steaming",
        "hot beverage"
      ],
      u: "2615",
      a: "0.6"
    },
    {
      n: [
        "pot",
        "tea",
        "drink",
        "teapot"
      ],
      u: "1fad6",
      a: "13"
    },
    {
      n: [
        "cup",
        "tea",
        "drink",
        "teacup",
        "beverage",
        "teacup without handle"
      ],
      u: "1f375",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "cup",
        "sake",
        "drink",
        "bottle",
        "beverage"
      ],
      u: "1f376",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "cork",
        "drink",
        "bottle",
        "popping",
        "bottle with popping cork"
      ],
      u: "1f37e",
      a: "1"
    },
    {
      n: [
        "bar",
        "wine",
        "drink",
        "glass",
        "beverage",
        "wine glass"
      ],
      u: "1f377",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "drink",
        "glass",
        "cocktail",
        "cocktail glass"
      ],
      u: "1f378",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "drink",
        "tropical",
        "tropical drink"
      ],
      u: "1f379",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "mug",
        "beer",
        "drink",
        "beer mug"
      ],
      u: "1f37a",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "mug",
        "beer",
        "clink",
        "drink",
        "clinking beer mugs"
      ],
      u: "1f37b",
      a: "0.6"
    },
    {
      n: [
        "clink",
        "drink",
        "glass",
        "celebrate",
        "clinking glasses"
      ],
      u: "1f942",
      a: "3"
    },
    {
      n: [
        "shot",
        "glass",
        "liquor",
        "whisky",
        "tumbler",
        "tumbler glass"
      ],
      u: "1f943",
      a: "3"
    },
    {
      n: [
        "drink",
        "empty",
        "glass",
        "spill",
        "pouring liquid"
      ],
      u: "1fad7",
      a: "14"
    },
    {
      n: [
        "soda",
        "juice",
        "cup with straw"
      ],
      u: "1f964",
      a: "5"
    },
    {
      n: [
        "tea",
        "milk",
        "pearl",
        "bubble",
        "bubble tea"
      ],
      u: "1f9cb",
      a: "13"
    },
    {
      n: [
        "box",
        "juice",
        "straw",
        "sweet",
        "beverage",
        "beverage box"
      ],
      u: "1f9c3",
      a: "12"
    },
    {
      n: [
        "mate",
        "drink"
      ],
      u: "1f9c9",
      a: "12"
    },
    {
      n: [
        "ice",
        "cold",
        "iceberg",
        "ice cube"
      ],
      u: "1f9ca",
      a: "12"
    },
    {
      n: [
        "hashi",
        "chopsticks"
      ],
      u: "1f962",
      a: "5"
    },
    {
      n: [
        "fork",
        "knife",
        "plate",
        "cooking",
        "fork and knife with plate"
      ],
      u: "1f37d-fe0f",
      a: "0.7"
    },
    {
      n: [
        "fork",
        "knife",
        "cooking",
        "cutlery",
        "fork and knife"
      ],
      u: "1f374",
      a: "0.6"
    },
    {
      n: [
        "spoon",
        "tableware"
      ],
      u: "1f944",
      a: "3"
    },
    {
      n: [
        "tool",
        "hocho",
        "knife",
        "weapon",
        "cooking",
        "kitchen knife"
      ],
      u: "1f52a",
      a: "0.6"
    },
    {
      n: [
        "jar",
        "empty",
        "sauce",
        "store",
        "condiment",
        "container"
      ],
      u: "1fad9",
      a: "14"
    },
    {
      n: [
        "jug",
        "drink",
        "zodiac",
        "amphora",
        "cooking",
        "aquarius"
      ],
      u: "1f3fa",
      a: "1"
    }
  ],
  travel_places: [
    {
      n: [
        "earth",
        "globe",
        "world",
        "africa",
        "europe",
        "globe showing Europe Africa",
        "globe showing europe africa"
      ],
      u: "1f30d",
      a: "0.7"
    },
    {
      n: [
        "earth",
        "globe",
        "world",
        "americas",
        "globe showing Americas",
        "globe showing americas"
      ],
      u: "1f30e",
      a: "0.7"
    },
    {
      n: [
        "asia",
        "earth",
        "globe",
        "world",
        "australia",
        "globe showing Asia Australia",
        "globe showing asia australia"
      ],
      u: "1f30f",
      a: "0.6"
    },
    {
      n: [
        "earth",
        "globe",
        "world",
        "meridians",
        "globe with meridians"
      ],
      u: "1f310",
      a: "1"
    },
    {
      n: [
        "map",
        "world",
        "world map"
      ],
      u: "1f5fa-fe0f",
      a: "0.7"
    },
    {
      n: [
        "map",
        "japan",
        "map of Japan",
        "map of japan"
      ],
      u: "1f5fe",
      a: "0.6"
    },
    {
      n: [
        "compass",
        "magnetic",
        "navigation",
        "orienteering"
      ],
      u: "1f9ed",
      a: "11"
    },
    {
      n: [
        "cold",
        "snow",
        "mountain",
        "snow capped mountain"
      ],
      u: "1f3d4-fe0f",
      a: "0.7"
    },
    {
      n: [
        "mountain"
      ],
      u: "26f0-fe0f",
      a: "0.7"
    },
    {
      n: [
        "volcano",
        "eruption",
        "mountain"
      ],
      u: "1f30b",
      a: "0.6"
    },
    {
      n: [
        "fuji",
        "mountain",
        "mount fuji"
      ],
      u: "1f5fb",
      a: "0.6"
    },
    {
      n: [
        "camping"
      ],
      u: "1f3d5-fe0f",
      a: "0.7"
    },
    {
      n: [
        "beach",
        "umbrella",
        "beach with umbrella"
      ],
      u: "1f3d6-fe0f",
      a: "0.7"
    },
    {
      n: [
        "desert"
      ],
      u: "1f3dc-fe0f",
      a: "0.7"
    },
    {
      n: [
        "desert",
        "island",
        "desert island"
      ],
      u: "1f3dd-fe0f",
      a: "0.7"
    },
    {
      n: [
        "park",
        "national park"
      ],
      u: "1f3de-fe0f",
      a: "0.7"
    },
    {
      n: [
        "stadium"
      ],
      u: "1f3df-fe0f",
      a: "0.7"
    },
    {
      n: [
        "classical",
        "classical building"
      ],
      u: "1f3db-fe0f",
      a: "0.7"
    },
    {
      n: [
        "construction",
        "building construction"
      ],
      u: "1f3d7-fe0f",
      a: "0.7"
    },
    {
      n: [
        "clay",
        "wall",
        "brick",
        "bricks",
        "mortar"
      ],
      u: "1f9f1",
      a: "11"
    },
    {
      n: [
        "rock",
        "heavy",
        "solid",
        "stone",
        "boulder"
      ],
      u: "1faa8",
      a: "13"
    },
    {
      n: [
        "log",
        "wood",
        "lumber",
        "timber"
      ],
      u: "1fab5",
      a: "13"
    },
    {
      n: [
        "hut",
        "yurt",
        "house",
        "roundhouse"
      ],
      u: "1f6d6",
      a: "13"
    },
    {
      n: [
        "houses"
      ],
      u: "1f3d8-fe0f",
      a: "0.7"
    },
    {
      n: [
        "house",
        "derelict",
        "derelict house"
      ],
      u: "1f3da-fe0f",
      a: "0.7"
    },
    {
      n: [
        "home",
        "house"
      ],
      u: "1f3e0",
      a: "0.6"
    },
    {
      n: [
        "home",
        "house",
        "garden",
        "house with garden"
      ],
      u: "1f3e1",
      a: "0.6"
    },
    {
      n: [
        "building",
        "office building"
      ],
      u: "1f3e2",
      a: "0.6"
    },
    {
      n: [
        "post",
        "japanese",
        "Japanese post office",
        "japanese post office"
      ],
      u: "1f3e3",
      a: "0.6"
    },
    {
      n: [
        "post",
        "european",
        "post office"
      ],
      u: "1f3e4",
      a: "1"
    },
    {
      n: [
        "doctor",
        "hospital",
        "medicine"
      ],
      u: "1f3e5",
      a: "0.6"
    },
    {
      n: [
        "bank",
        "building"
      ],
      u: "1f3e6",
      a: "0.6"
    },
    {
      n: [
        "hotel",
        "building"
      ],
      u: "1f3e8",
      a: "0.6"
    },
    {
      n: [
        "love",
        "hotel",
        "love hotel"
      ],
      u: "1f3e9",
      a: "0.6"
    },
    {
      n: [
        "store",
        "convenience",
        "convenience store"
      ],
      u: "1f3ea",
      a: "0.6"
    },
    {
      n: [
        "school",
        "building"
      ],
      u: "1f3eb",
      a: "0.6"
    },
    {
      n: [
        "store",
        "department",
        "department store"
      ],
      u: "1f3ec",
      a: "0.6"
    },
    {
      n: [
        "factory",
        "building"
      ],
      u: "1f3ed",
      a: "0.6"
    },
    {
      n: [
        "castle",
        "japanese",
        "Japanese castle"
      ],
      u: "1f3ef",
      a: "0.6"
    },
    {
      n: [
        "castle",
        "european"
      ],
      u: "1f3f0",
      a: "0.6"
    },
    {
      n: [
        "chapel",
        "wedding",
        "romance"
      ],
      u: "1f492",
      a: "0.6"
    },
    {
      n: [
        "tokyo",
        "tower",
        "Tokyo tower"
      ],
      u: "1f5fc",
      a: "0.6"
    },
    {
      n: [
        "statue",
        "liberty",
        "Statue of Liberty",
        "statue of liberty"
      ],
      u: "1f5fd",
      a: "0.6"
    },
    {
      n: [
        "cross",
        "church",
        "religion",
        "christian"
      ],
      u: "26ea",
      a: "0.6"
    },
    {
      n: [
        "islam",
        "mosque",
        "muslim",
        "religion"
      ],
      u: "1f54c",
      a: "1"
    },
    {
      n: [
        "hindu",
        "temple",
        "hindu temple"
      ],
      u: "1f6d5",
      a: "12"
    },
    {
      n: [
        "jew",
        "jewish",
        "temple",
        "religion",
        "synagogue"
      ],
      u: "1f54d",
      a: "1"
    },
    {
      n: [
        "shinto",
        "shrine",
        "religion",
        "shinto shrine"
      ],
      u: "26e9-fe0f",
      a: "0.7"
    },
    {
      n: [
        "kaaba",
        "islam",
        "muslim",
        "religion"
      ],
      u: "1f54b",
      a: "1"
    },
    {
      n: [
        "fountain"
      ],
      u: "26f2",
      a: "0.6"
    },
    {
      n: [
        "tent",
        "camping"
      ],
      u: "26fa",
      a: "0.6"
    },
    {
      n: [
        "fog",
        "foggy"
      ],
      u: "1f301",
      a: "0.6"
    },
    {
      n: [
        "star",
        "night",
        "night with stars"
      ],
      u: "1f303",
      a: "0.6"
    },
    {
      n: [
        "city",
        "cityscape"
      ],
      u: "1f3d9-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sun",
        "morning",
        "sunrise",
        "mountain",
        "sunrise over mountains"
      ],
      u: "1f304",
      a: "0.6"
    },
    {
      n: [
        "sun",
        "sunrise",
        "morning"
      ],
      u: "1f305",
      a: "0.6"
    },
    {
      n: [
        "city",
        "dusk",
        "sunset",
        "evening",
        "landscape",
        "cityscape at dusk"
      ],
      u: "1f306",
      a: "0.6"
    },
    {
      n: [
        "sun",
        "dusk",
        "sunset"
      ],
      u: "1f307",
      a: "0.6"
    },
    {
      n: [
        "night",
        "bridge",
        "bridge at night"
      ],
      u: "1f309",
      a: "0.6"
    },
    {
      n: [
        "hot",
        "springs",
        "steaming",
        "hotsprings",
        "hot springs"
      ],
      u: "2668-fe0f",
      a: "0.6"
    },
    {
      n: [
        "horse",
        "carousel",
        "carousel horse"
      ],
      u: "1f3a0",
      a: "0.6"
    },
    {
      n: [
        "play",
        "theme park",
        "amusement park",
        "playground slide"
      ],
      u: "1f6dd",
      a: "14"
    },
    {
      n: [
        "wheel",
        "ferris",
        "theme park",
        "ferris wheel",
        "amusement park"
      ],
      u: "1f3a1",
      a: "0.6"
    },
    {
      n: [
        "roller",
        "coaster",
        "theme park",
        "roller coaster",
        "amusement park"
      ],
      u: "1f3a2",
      a: "0.6"
    },
    {
      n: [
        "pole",
        "barber",
        "haircut",
        "barber pole"
      ],
      u: "1f488",
      a: "0.6"
    },
    {
      n: [
        "tent",
        "circus",
        "circus tent"
      ],
      u: "1f3aa",
      a: "0.6"
    },
    {
      n: [
        "steam",
        "train",
        "engine",
        "railway",
        "locomotive"
      ],
      u: "1f682",
      a: "1"
    },
    {
      n: [
        "car",
        "tram",
        "train",
        "railway",
        "electric",
        "trolleybus",
        "railway car"
      ],
      u: "1f683",
      a: "0.6"
    },
    {
      n: [
        "speed",
        "train",
        "railway",
        "shinkansen",
        "high speed train"
      ],
      u: "1f684",
      a: "0.6"
    },
    {
      n: [
        "speed",
        "train",
        "bullet",
        "railway",
        "shinkansen",
        "bullet train"
      ],
      u: "1f685",
      a: "0.6"
    },
    {
      n: [
        "train",
        "railway"
      ],
      u: "1f686",
      a: "1"
    },
    {
      n: [
        "metro",
        "subway"
      ],
      u: "1f687",
      a: "0.6"
    },
    {
      n: [
        "railway",
        "light rail"
      ],
      u: "1f688",
      a: "1"
    },
    {
      n: [
        "train",
        "station",
        "railway"
      ],
      u: "1f689",
      a: "0.6"
    },
    {
      n: [
        "tram",
        "trolleybus"
      ],
      u: "1f68a",
      a: "1"
    },
    {
      n: [
        "vehicle",
        "monorail"
      ],
      u: "1f69d",
      a: "1"
    },
    {
      n: [
        "car",
        "railway",
        "mountain",
        "mountain railway"
      ],
      u: "1f69e",
      a: "1"
    },
    {
      n: [
        "car",
        "tram",
        "tram car",
        "trolleybus"
      ],
      u: "1f68b",
      a: "1"
    },
    {
      n: [
        "bus",
        "vehicle"
      ],
      u: "1f68c",
      a: "0.6"
    },
    {
      n: [
        "bus",
        "oncoming",
        "oncoming bus"
      ],
      u: "1f68d",
      a: "0.7"
    },
    {
      n: [
        "bus",
        "tram",
        "trolley",
        "trolleybus"
      ],
      u: "1f68e",
      a: "1"
    },
    {
      n: [
        "bus",
        "minibus"
      ],
      u: "1f690",
      a: "1"
    },
    {
      n: [
        "vehicle",
        "ambulance"
      ],
      u: "1f691",
      a: "0.6"
    },
    {
      n: [
        "fire",
        "truck",
        "engine",
        "fire engine"
      ],
      u: "1f692",
      a: "0.6"
    },
    {
      n: [
        "car",
        "patrol",
        "police",
        "police car"
      ],
      u: "1f693",
      a: "0.6"
    },
    {
      n: [
        "car",
        "police",
        "oncoming",
        "oncoming police car"
      ],
      u: "1f694",
      a: "0.7"
    },
    {
      n: [
        "taxi",
        "vehicle"
      ],
      u: "1f695",
      a: "0.6"
    },
    {
      n: [
        "taxi",
        "oncoming",
        "oncoming taxi"
      ],
      u: "1f696",
      a: "1"
    },
    {
      n: [
        "car",
        "automobile"
      ],
      u: "1f697",
      a: "0.6"
    },
    {
      n: [
        "car",
        "oncoming",
        "automobile",
        "oncoming automobile"
      ],
      u: "1f698",
      a: "0.7"
    },
    {
      n: [
        "recreational",
        "sport utility",
        "sport utility vehicle"
      ],
      u: "1f699",
      a: "0.6"
    },
    {
      n: [
        "truck",
        "pickup",
        "pick up",
        "pickup truck"
      ],
      u: "1f6fb",
      a: "13"
    },
    {
      n: [
        "truck",
        "delivery",
        "delivery truck"
      ],
      u: "1f69a",
      a: "0.6"
    },
    {
      n: [
        "semi",
        "lorry",
        "truck",
        "articulated lorry"
      ],
      u: "1f69b",
      a: "1"
    },
    {
      n: [
        "tractor",
        "vehicle"
      ],
      u: "1f69c",
      a: "1"
    },
    {
      n: [
        "car",
        "racing",
        "racing car"
      ],
      u: "1f3ce-fe0f",
      a: "0.7"
    },
    {
      n: [
        "racing",
        "motorcycle"
      ],
      u: "1f3cd-fe0f",
      a: "0.7"
    },
    {
      n: [
        "motor",
        "scooter",
        "motor scooter"
      ],
      u: "1f6f5",
      a: "3"
    },
    {
      n: [
        "accessibility",
        "manual wheelchair"
      ],
      u: "1f9bd",
      a: "12"
    },
    {
      n: [
        "accessibility",
        "motorized wheelchair"
      ],
      u: "1f9bc",
      a: "12"
    },
    {
      n: [
        "tuk tuk",
        "auto rickshaw"
      ],
      u: "1f6fa",
      a: "12"
    },
    {
      n: [
        "bike",
        "bicycle"
      ],
      u: "1f6b2",
      a: "0.6"
    },
    {
      n: [
        "kick",
        "scooter",
        "kick scooter"
      ],
      u: "1f6f4",
      a: "3"
    },
    {
      n: [
        "board",
        "skateboard"
      ],
      u: "1f6f9",
      a: "11"
    },
    {
      n: [
        "skate",
        "roller",
        "roller skate"
      ],
      u: "1f6fc",
      a: "13"
    },
    {
      n: [
        "bus",
        "stop",
        "bus stop"
      ],
      u: "1f68f",
      a: "0.6"
    },
    {
      n: [
        "road",
        "highway",
        "motorway"
      ],
      u: "1f6e3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "train",
        "railway",
        "railway track"
      ],
      u: "1f6e4-fe0f",
      a: "0.7"
    },
    {
      n: [
        "oil",
        "drum",
        "oil drum"
      ],
      u: "1f6e2-fe0f",
      a: "0.7"
    },
    {
      n: [
        "gas",
        "fuel",
        "pump",
        "diesel",
        "station",
        "fuelpump",
        "fuel pump"
      ],
      u: "26fd",
      a: "0.6"
    },
    {
      n: [
        "tire",
        "turn",
        "wheel",
        "circle"
      ],
      u: "1f6de",
      a: "14"
    },
    {
      n: [
        "car",
        "light",
        "beacon",
        "police",
        "revolving",
        "police car light"
      ],
      u: "1f6a8",
      a: "0.6"
    },
    {
      n: [
        "light",
        "signal",
        "traffic",
        "horizontal traffic light"
      ],
      u: "1f6a5",
      a: "0.6"
    },
    {
      n: [
        "light",
        "signal",
        "traffic",
        "vertical traffic light"
      ],
      u: "1f6a6",
      a: "1"
    },
    {
      n: [
        "sign",
        "stop",
        "stop sign",
        "octagonal"
      ],
      u: "1f6d1",
      a: "3"
    },
    {
      n: [
        "barrier",
        "construction"
      ],
      u: "1f6a7",
      a: "0.6"
    },
    {
      n: [
        "ship",
        "tool",
        "anchor"
      ],
      u: "2693",
      a: "0.6"
    },
    {
      n: [
        "float",
        "rescue",
        "safety",
        "ring buoy",
        "life saver",
        "life preserver"
      ],
      u: "1f6df",
      a: "14"
    },
    {
      n: [
        "sea",
        "boat",
        "yacht",
        "resort",
        "sailboat"
      ],
      u: "26f5",
      a: "0.6"
    },
    {
      n: [
        "boat",
        "canoe"
      ],
      u: "1f6f6",
      a: "3"
    },
    {
      n: [
        "boat",
        "speedboat"
      ],
      u: "1f6a4",
      a: "0.6"
    },
    {
      n: [
        "ship",
        "passenger",
        "passenger ship"
      ],
      u: "1f6f3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "boat",
        "ferry",
        "passenger"
      ],
      u: "26f4-fe0f",
      a: "0.7"
    },
    {
      n: [
        "boat",
        "motorboat",
        "motor boat"
      ],
      u: "1f6e5-fe0f",
      a: "0.7"
    },
    {
      n: [
        "ship",
        "boat",
        "passenger"
      ],
      u: "1f6a2",
      a: "0.6"
    },
    {
      n: [
        "airplane",
        "aeroplane"
      ],
      u: "2708-fe0f",
      a: "0.6"
    },
    {
      n: [
        "airplane",
        "aeroplane",
        "small airplane"
      ],
      u: "1f6e9-fe0f",
      a: "0.7"
    },
    {
      n: [
        "airplane",
        "check in",
        "aeroplane",
        "departure",
        "departures",
        "airplane departure"
      ],
      u: "1f6eb",
      a: "1"
    },
    {
      n: [
        "landing",
        "airplane",
        "arrivals",
        "arriving",
        "aeroplane",
        "airplane arrival"
      ],
      u: "1f6ec",
      a: "1"
    },
    {
      n: [
        "skydive",
        "parasail",
        "parachute",
        "hang glide"
      ],
      u: "1fa82",
      a: "12"
    },
    {
      n: [
        "seat",
        "chair"
      ],
      u: "1f4ba",
      a: "0.6"
    },
    {
      n: [
        "vehicle",
        "helicopter"
      ],
      u: "1f681",
      a: "1"
    },
    {
      n: [
        "railway",
        "suspension",
        "suspension railway"
      ],
      u: "1f69f",
      a: "1"
    },
    {
      n: [
        "cable",
        "gondola",
        "mountain",
        "mountain cableway"
      ],
      u: "1f6a0",
      a: "1"
    },
    {
      n: [
        "car",
        "cable",
        "aerial",
        "gondola",
        "tramway",
        "aerial tramway"
      ],
      u: "1f6a1",
      a: "1"
    },
    {
      n: [
        "space",
        "satellite"
      ],
      u: "1f6f0-fe0f",
      a: "0.7"
    },
    {
      n: [
        "space",
        "rocket"
      ],
      u: "1f680",
      a: "0.6"
    },
    {
      n: [
        "ufo",
        "flying saucer"
      ],
      u: "1f6f8",
      a: "5"
    },
    {
      n: [
        "bell",
        "hotel",
        "bellhop",
        "bellhop bell"
      ],
      u: "1f6ce-fe0f",
      a: "0.7"
    },
    {
      n: [
        "travel",
        "luggage",
        "packing"
      ],
      u: "1f9f3",
      a: "11"
    },
    {
      n: [
        "sand",
        "timer",
        "hourglass done"
      ],
      u: "231b",
      a: "0.6"
    },
    {
      n: [
        "sand",
        "timer",
        "hourglass",
        "hourglass not done"
      ],
      u: "23f3",
      a: "0.6"
    },
    {
      n: [
        "watch",
        "clock"
      ],
      u: "231a",
      a: "0.6"
    },
    {
      n: [
        "alarm",
        "clock",
        "alarm clock"
      ],
      u: "23f0",
      a: "0.6"
    },
    {
      n: [
        "clock",
        "stopwatch"
      ],
      u: "23f1-fe0f",
      a: "1"
    },
    {
      n: [
        "clock",
        "timer",
        "timer clock"
      ],
      u: "23f2-fe0f",
      a: "1"
    },
    {
      n: [
        "clock",
        "mantelpiece clock"
      ],
      u: "1f570-fe0f",
      a: "0.7"
    },
    {
      n: [
        "00",
        "12",
        "12:00",
        "clock",
        "twelve",
        "o’clock",
        "twelve o’clock"
      ],
      u: "1f55b",
      a: "0.6"
    },
    {
      n: [
        "12",
        "12:30",
        "clock",
        "thirty",
        "twelve",
        "twelve thirty"
      ],
      u: "1f567",
      a: "0.7"
    },
    {
      n: [
        "1",
        "00",
        "one",
        "1:00",
        "clock",
        "o’clock",
        "one o’clock"
      ],
      u: "1f550",
      a: "0.6"
    },
    {
      n: [
        "1",
        "one",
        "1:30",
        "clock",
        "thirty",
        "one thirty"
      ],
      u: "1f55c",
      a: "0.7"
    },
    {
      n: [
        "2",
        "00",
        "two",
        "2:00",
        "clock",
        "o’clock",
        "two o’clock"
      ],
      u: "1f551",
      a: "0.6"
    },
    {
      n: [
        "2",
        "two",
        "2:30",
        "clock",
        "thirty",
        "two thirty"
      ],
      u: "1f55d",
      a: "0.7"
    },
    {
      n: [
        "3",
        "00",
        "3:00",
        "clock",
        "three",
        "o’clock",
        "three o’clock"
      ],
      u: "1f552",
      a: "0.6"
    },
    {
      n: [
        "3",
        "3:30",
        "clock",
        "three",
        "thirty",
        "three thirty"
      ],
      u: "1f55e",
      a: "0.7"
    },
    {
      n: [
        "4",
        "00",
        "4:00",
        "four",
        "clock",
        "o’clock",
        "four o’clock"
      ],
      u: "1f553",
      a: "0.6"
    },
    {
      n: [
        "4",
        "4:30",
        "four",
        "clock",
        "thirty",
        "four thirty"
      ],
      u: "1f55f",
      a: "0.7"
    },
    {
      n: [
        "5",
        "00",
        "5:00",
        "five",
        "clock",
        "o’clock",
        "five o’clock"
      ],
      u: "1f554",
      a: "0.6"
    },
    {
      n: [
        "5",
        "5:30",
        "five",
        "clock",
        "thirty",
        "five thirty"
      ],
      u: "1f560",
      a: "0.7"
    },
    {
      n: [
        "6",
        "00",
        "six",
        "6:00",
        "clock",
        "o’clock",
        "six o’clock"
      ],
      u: "1f555",
      a: "0.6"
    },
    {
      n: [
        "6",
        "six",
        "6:30",
        "clock",
        "thirty",
        "six thirty"
      ],
      u: "1f561",
      a: "0.7"
    },
    {
      n: [
        "7",
        "00",
        "7:00",
        "clock",
        "seven",
        "o’clock",
        "seven o’clock"
      ],
      u: "1f556",
      a: "0.6"
    },
    {
      n: [
        "7",
        "7:30",
        "clock",
        "seven",
        "thirty",
        "seven thirty"
      ],
      u: "1f562",
      a: "0.7"
    },
    {
      n: [
        "8",
        "00",
        "8:00",
        "clock",
        "eight",
        "o’clock",
        "eight o’clock"
      ],
      u: "1f557",
      a: "0.6"
    },
    {
      n: [
        "8",
        "8:30",
        "clock",
        "eight",
        "thirty",
        "eight thirty"
      ],
      u: "1f563",
      a: "0.7"
    },
    {
      n: [
        "9",
        "00",
        "9:00",
        "nine",
        "clock",
        "o’clock",
        "nine o’clock"
      ],
      u: "1f558",
      a: "0.6"
    },
    {
      n: [
        "9",
        "9:30",
        "nine",
        "clock",
        "thirty",
        "nine thirty"
      ],
      u: "1f564",
      a: "0.7"
    },
    {
      n: [
        "00",
        "10",
        "ten",
        "10:00",
        "clock",
        "o’clock",
        "ten o’clock"
      ],
      u: "1f559",
      a: "0.6"
    },
    {
      n: [
        "10",
        "ten",
        "10:30",
        "clock",
        "thirty",
        "ten thirty"
      ],
      u: "1f565",
      a: "0.7"
    },
    {
      n: [
        "00",
        "11",
        "11:00",
        "clock",
        "eleven",
        "o’clock",
        "eleven o’clock"
      ],
      u: "1f55a",
      a: "0.6"
    },
    {
      n: [
        "11",
        "11:30",
        "clock",
        "eleven",
        "thirty",
        "eleven thirty"
      ],
      u: "1f566",
      a: "0.7"
    },
    {
      n: [
        "dark",
        "moon",
        "new moon"
      ],
      u: "1f311",
      a: "0.6"
    },
    {
      n: [
        "moon",
        "waxing",
        "crescent",
        "waxing crescent moon"
      ],
      u: "1f312",
      a: "1"
    },
    {
      n: [
        "moon",
        "quarter",
        "first quarter moon"
      ],
      u: "1f313",
      a: "0.6"
    },
    {
      n: [
        "moon",
        "waxing",
        "gibbous",
        "waxing gibbous moon"
      ],
      u: "1f314",
      a: "0.6"
    },
    {
      n: [
        "full",
        "moon",
        "full moon"
      ],
      u: "1f315",
      a: "0.6"
    },
    {
      n: [
        "moon",
        "waning",
        "gibbous",
        "waning gibbous moon"
      ],
      u: "1f316",
      a: "1"
    },
    {
      n: [
        "moon",
        "quarter",
        "last quarter moon"
      ],
      u: "1f317",
      a: "1"
    },
    {
      n: [
        "moon",
        "waning",
        "crescent",
        "waning crescent moon"
      ],
      u: "1f318",
      a: "1"
    },
    {
      n: [
        "moon",
        "crescent",
        "crescent moon"
      ],
      u: "1f319",
      a: "0.6"
    },
    {
      n: [
        "face",
        "moon",
        "new moon face"
      ],
      u: "1f31a",
      a: "1"
    },
    {
      n: [
        "face",
        "moon",
        "quarter",
        "first quarter moon face"
      ],
      u: "1f31b",
      a: "0.6"
    },
    {
      n: [
        "face",
        "moon",
        "quarter",
        "last quarter moon face"
      ],
      u: "1f31c",
      a: "0.7"
    },
    {
      n: [
        "weather",
        "thermometer"
      ],
      u: "1f321-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sun",
        "rays",
        "sunny",
        "bright"
      ],
      u: "2600-fe0f",
      a: "0.6"
    },
    {
      n: [
        "face",
        "full",
        "moon",
        "bright",
        "full moon face"
      ],
      u: "1f31d",
      a: "1"
    },
    {
      n: [
        "sun",
        "face",
        "bright",
        "sun with face"
      ],
      u: "1f31e",
      a: "1"
    },
    {
      n: [
        "saturn",
        "saturnine",
        "ringed planet"
      ],
      u: "1fa90",
      a: "12"
    },
    {
      n: [
        "star"
      ],
      u: "2b50",
      a: "0.6"
    },
    {
      n: [
        "glow",
        "star",
        "shining",
        "sparkle",
        "glittery",
        "glowing star"
      ],
      u: "1f31f",
      a: "0.6"
    },
    {
      n: [
        "star",
        "falling",
        "shooting",
        "shooting star"
      ],
      u: "1f320",
      a: "0.6"
    },
    {
      n: [
        "space",
        "milky way"
      ],
      u: "1f30c",
      a: "0.6"
    },
    {
      n: [
        "cloud",
        "weather"
      ],
      u: "2601-fe0f",
      a: "0.6"
    },
    {
      n: [
        "sun",
        "cloud",
        "sun behind cloud"
      ],
      u: "26c5",
      a: "0.6"
    },
    {
      n: [
        "rain",
        "cloud",
        "thunder",
        "cloud with lightning and rain"
      ],
      u: "26c8-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sun",
        "cloud",
        "sun behind small cloud"
      ],
      u: "1f324-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sun",
        "cloud",
        "sun behind large cloud"
      ],
      u: "1f325-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sun",
        "rain",
        "cloud",
        "sun behind rain cloud"
      ],
      u: "1f326-fe0f",
      a: "0.7"
    },
    {
      n: [
        "rain",
        "cloud",
        "cloud with rain"
      ],
      u: "1f327-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cold",
        "snow",
        "cloud",
        "cloud with snow"
      ],
      u: "1f328-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cloud",
        "lightning",
        "cloud with lightning"
      ],
      u: "1f329-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cloud",
        "tornado",
        "whirlwind"
      ],
      u: "1f32a-fe0f",
      a: "0.7"
    },
    {
      n: [
        "fog",
        "cloud"
      ],
      u: "1f32b-fe0f",
      a: "0.7"
    },
    {
      n: [
        "blow",
        "face",
        "wind",
        "cloud",
        "wind face"
      ],
      u: "1f32c-fe0f",
      a: "0.7"
    },
    {
      n: [
        "dizzy",
        "cyclone",
        "twister",
        "typhoon",
        "hurricane"
      ],
      u: "1f300",
      a: "0.6"
    },
    {
      n: [
        "rain",
        "rainbow"
      ],
      u: "1f308",
      a: "0.6"
    },
    {
      n: [
        "rain",
        "clothing",
        "umbrella",
        "closed umbrella"
      ],
      u: "1f302",
      a: "0.6"
    },
    {
      n: [
        "rain",
        "umbrella",
        "clothing"
      ],
      u: "2602-fe0f",
      a: "0.7"
    },
    {
      n: [
        "drop",
        "rain",
        "clothing",
        "umbrella",
        "umbrella with rain drops"
      ],
      u: "2614",
      a: "0.6"
    },
    {
      n: [
        "sun",
        "rain",
        "umbrella",
        "umbrella on ground"
      ],
      u: "26f1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "zap",
        "danger",
        "voltage",
        "electric",
        "lightning",
        "high voltage"
      ],
      u: "26a1",
      a: "0.6"
    },
    {
      n: [
        "cold",
        "snow",
        "snowflake"
      ],
      u: "2744-fe0f",
      a: "0.6"
    },
    {
      n: [
        "cold",
        "snow",
        "snowman"
      ],
      u: "2603-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cold",
        "snow",
        "snowman",
        "snowman without snow"
      ],
      u: "26c4",
      a: "0.6"
    },
    {
      n: [
        "comet",
        "space"
      ],
      u: "2604-fe0f",
      a: "1"
    },
    {
      n: [
        "fire",
        "tool",
        "flame"
      ],
      u: "1f525",
      a: "0.6"
    },
    {
      n: [
        "cold",
        "drop",
        "comic",
        "sweat",
        "droplet"
      ],
      u: "1f4a7",
      a: "0.6"
    },
    {
      n: [
        "wave",
        "ocean",
        "water",
        "water wave"
      ],
      u: "1f30a",
      a: "0.6"
    }
  ],
  activities: [
    {
      n: [
        "jack",
        "lantern",
        "halloween",
        "celebration",
        "jack o lantern"
      ],
      u: "1f383",
      a: "0.6"
    },
    {
      n: [
        "tree",
        "christmas",
        "celebration",
        "Christmas tree"
      ],
      u: "1f384",
      a: "0.6"
    },
    {
      n: [
        "fireworks",
        "celebration"
      ],
      u: "1f386",
      a: "0.6"
    },
    {
      n: [
        "sparkle",
        "sparkler",
        "fireworks",
        "celebration"
      ],
      u: "1f387",
      a: "0.6"
    },
    {
      n: [
        "dynamite",
        "explosive",
        "fireworks",
        "firecracker"
      ],
      u: "1f9e8",
      a: "11"
    },
    {
      n: [
        "*",
        "star",
        "sparkle",
        "sparkles"
      ],
      u: "2728",
      a: "0.6"
    },
    {
      n: [
        "balloon",
        "celebration"
      ],
      u: "1f388",
      a: "0.6"
    },
    {
      n: [
        "tada",
        "party",
        "popper",
        "celebration",
        "party popper"
      ],
      u: "1f389",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "confetti",
        "celebration",
        "confetti ball"
      ],
      u: "1f38a",
      a: "0.6"
    },
    {
      n: [
        "tree",
        "banner",
        "japanese",
        "celebration",
        "tanabata tree"
      ],
      u: "1f38b",
      a: "0.6"
    },
    {
      n: [
        "pine",
        "bamboo",
        "japanese",
        "celebration",
        "pine decoration"
      ],
      u: "1f38d",
      a: "0.6"
    },
    {
      n: [
        "doll",
        "festival",
        "japanese",
        "celebration",
        "Japanese dolls",
        "japanese dolls"
      ],
      u: "1f38e",
      a: "0.6"
    },
    {
      n: [
        "carp",
        "streamer",
        "celebration",
        "carp streamer"
      ],
      u: "1f38f",
      a: "0.6"
    },
    {
      n: [
        "bell",
        "wind",
        "chime",
        "wind chime",
        "celebration"
      ],
      u: "1f390",
      a: "0.6"
    },
    {
      n: [
        "moon",
        "ceremony",
        "celebration",
        "moon viewing ceremony"
      ],
      u: "1f391",
      a: "0.6"
    },
    {
      n: [
        "gift",
        "money",
        "hóngbāo",
        "lai see",
        "good luck",
        "red envelope"
      ],
      u: "1f9e7",
      a: "11"
    },
    {
      n: [
        "ribbon",
        "celebration"
      ],
      u: "1f380",
      a: "0.6"
    },
    {
      n: [
        "box",
        "gift",
        "present",
        "wrapped",
        "celebration",
        "wrapped gift"
      ],
      u: "1f381",
      a: "0.6"
    },
    {
      n: [
        "ribbon",
        "reminder",
        "celebration",
        "reminder ribbon"
      ],
      u: "1f397-fe0f",
      a: "0.7"
    },
    {
      n: [
        "ticket",
        "admission",
        "admission tickets"
      ],
      u: "1f39f-fe0f",
      a: "0.7"
    },
    {
      n: [
        "ticket",
        "admission"
      ],
      u: "1f3ab",
      a: "0.6"
    },
    {
      n: [
        "medal",
        "military",
        "celebration",
        "military medal"
      ],
      u: "1f396-fe0f",
      a: "0.7"
    },
    {
      n: [
        "prize",
        "trophy"
      ],
      u: "1f3c6",
      a: "0.6"
    },
    {
      n: [
        "medal",
        "sports medal"
      ],
      u: "1f3c5",
      a: "1"
    },
    {
      n: [
        "gold",
        "first",
        "medal",
        "1st place medal"
      ],
      u: "1f947",
      a: "3"
    },
    {
      n: [
        "medal",
        "second",
        "silver",
        "2nd place medal"
      ],
      u: "1f948",
      a: "3"
    },
    {
      n: [
        "medal",
        "third",
        "bronze",
        "3rd place medal"
      ],
      u: "1f949",
      a: "3"
    },
    {
      n: [
        "ball",
        "soccer",
        "football",
        "soccer ball"
      ],
      u: "26bd",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "baseball"
      ],
      u: "26be",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "glove",
        "softball",
        "underarm"
      ],
      u: "1f94e",
      a: "11"
    },
    {
      n: [
        "ball",
        "hoop",
        "basketball"
      ],
      u: "1f3c0",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "game",
        "volleyball"
      ],
      u: "1f3d0",
      a: "1"
    },
    {
      n: [
        "ball",
        "american",
        "football",
        "american football"
      ],
      u: "1f3c8",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "rugby",
        "football",
        "rugby football"
      ],
      u: "1f3c9",
      a: "1"
    },
    {
      n: [
        "ball",
        "tennis",
        "racquet"
      ],
      u: "1f3be",
      a: "0.6"
    },
    {
      n: [
        "ultimate",
        "flying disc"
      ],
      u: "1f94f",
      a: "11"
    },
    {
      n: [
        "ball",
        "game",
        "bowling"
      ],
      u: "1f3b3",
      a: "0.6"
    },
    {
      n: [
        "bat",
        "ball",
        "game",
        "cricket game"
      ],
      u: "1f3cf",
      a: "1"
    },
    {
      n: [
        "ball",
        "game",
        "field",
        "stick",
        "hockey",
        "field hockey"
      ],
      u: "1f3d1",
      a: "1"
    },
    {
      n: [
        "ice",
        "game",
        "puck",
        "stick",
        "hockey",
        "ice hockey"
      ],
      u: "1f3d2",
      a: "1"
    },
    {
      n: [
        "ball",
        "goal",
        "stick",
        "lacrosse"
      ],
      u: "1f94d",
      a: "11"
    },
    {
      n: [
        "bat",
        "ball",
        "game",
        "paddle",
        "ping pong",
        "table tennis"
      ],
      u: "1f3d3",
      a: "1"
    },
    {
      n: [
        "game",
        "birdie",
        "racquet",
        "badminton",
        "shuttlecock"
      ],
      u: "1f3f8",
      a: "1"
    },
    {
      n: [
        "glove",
        "boxing",
        "boxing glove"
      ],
      u: "1f94a",
      a: "3"
    },
    {
      n: [
        "judo",
        "karate",
        "uniform",
        "taekwondo",
        "martial arts",
        "martial arts uniform"
      ],
      u: "1f94b",
      a: "3"
    },
    {
      n: [
        "net",
        "goal",
        "goal net"
      ],
      u: "1f945",
      a: "3"
    },
    {
      n: [
        "golf",
        "hole",
        "flag in hole"
      ],
      u: "26f3",
      a: "0.6"
    },
    {
      n: [
        "ice",
        "skate",
        "ice skate"
      ],
      u: "26f8-fe0f",
      a: "0.7"
    },
    {
      n: [
        "fish",
        "pole",
        "fishing pole"
      ],
      u: "1f3a3",
      a: "0.6"
    },
    {
      n: [
        "scuba",
        "diving",
        "snorkeling",
        "diving mask"
      ],
      u: "1f93f",
      a: "12"
    },
    {
      n: [
        "sash",
        "shirt",
        "running",
        "athletics",
        "running shirt"
      ],
      u: "1f3bd",
      a: "0.6"
    },
    {
      n: [
        "ski",
        "skis",
        "snow"
      ],
      u: "1f3bf",
      a: "0.6"
    },
    {
      n: [
        "sled",
        "sledge",
        "sleigh"
      ],
      u: "1f6f7",
      a: "5"
    },
    {
      n: [
        "game",
        "rock",
        "curling stone"
      ],
      u: "1f94c",
      a: "5"
    },
    {
      n: [
        "hit",
        "dart",
        "game",
        "target",
        "bullseye",
        "direct hit"
      ],
      u: "1f3af",
      a: "0.6"
    },
    {
      n: [
        "toy",
        "yo yo",
        "fluctuate"
      ],
      u: "1fa80",
      a: "12"
    },
    {
      n: [
        "fly",
        "kite",
        "soar"
      ],
      u: "1fa81",
      a: "12"
    },
    {
      n: [
        "gun",
        "tool",
        "water",
        "pistol",
        "weapon",
        "handgun",
        "revolver",
        "water pistol"
      ],
      u: "1f52b",
      a: "0.6"
    },
    {
      n: [
        "8",
        "ball",
        "game",
        "eight",
        "billiard",
        "pool 8 ball"
      ],
      u: "1f3b1",
      a: "0.6"
    },
    {
      n: [
        "ball",
        "tool",
        "crystal",
        "fantasy",
        "fortune",
        "fairy tale",
        "crystal ball"
      ],
      u: "1f52e",
      a: "0.6"
    },
    {
      n: [
        "magic",
        "witch",
        "wizard",
        "magic wand"
      ],
      u: "1fa84",
      a: "13"
    },
    {
      n: [
        "game",
        "video game",
        "controller"
      ],
      u: "1f3ae",
      a: "0.6"
    },
    {
      n: [
        "game",
        "joystick",
        "video game"
      ],
      u: "1f579-fe0f",
      a: "0.7"
    },
    {
      n: [
        "game",
        "slot",
        "slot machine"
      ],
      u: "1f3b0",
      a: "0.6"
    },
    {
      n: [
        "die",
        "dice",
        "game",
        "game die"
      ],
      u: "1f3b2",
      a: "0.6"
    },
    {
      n: [
        "clue",
        "piece",
        "jigsaw",
        "puzzle",
        "puzzle piece",
        "interlocking"
      ],
      u: "1f9e9",
      a: "11"
    },
    {
      n: [
        "toy",
        "plush",
        "stuffed",
        "plaything",
        "teddy bear"
      ],
      u: "1f9f8",
      a: "11"
    },
    {
      n: [
        "party",
        "piñata",
        "celebration"
      ],
      u: "1fa85",
      a: "13"
    },
    {
      n: [
        "dance",
        "disco",
        "party",
        "glitter",
        "mirror ball"
      ],
      u: "1faa9",
      a: "14"
    },
    {
      n: [
        "doll",
        "russia",
        "nesting",
        "nesting dolls"
      ],
      u: "1fa86",
      a: "13"
    },
    {
      n: [
        "card",
        "game",
        "spade suit"
      ],
      u: "2660-fe0f",
      a: "0.6"
    },
    {
      n: [
        "card",
        "game",
        "heart suit"
      ],
      u: "2665-fe0f",
      a: "0.6"
    },
    {
      n: [
        "card",
        "game",
        "diamond suit"
      ],
      u: "2666-fe0f",
      a: "0.6"
    },
    {
      n: [
        "card",
        "game",
        "club suit"
      ],
      u: "2663-fe0f",
      a: "0.6"
    },
    {
      n: [
        "dupe",
        "chess",
        "chess pawn",
        "expendable"
      ],
      u: "265f-fe0f",
      a: "11"
    },
    {
      n: [
        "card",
        "game",
        "joker",
        "wildcard"
      ],
      u: "1f0cf",
      a: "0.6"
    },
    {
      n: [
        "red",
        "game",
        "mahjong",
        "mahjong red dragon"
      ],
      u: "1f004",
      a: "0.6"
    },
    {
      n: [
        "card",
        "game",
        "flower",
        "playing",
        "japanese",
        "flower playing cards"
      ],
      u: "1f3b4",
      a: "0.6"
    },
    {
      n: [
        "art",
        "mask",
        "theater",
        "theatre",
        "performing",
        "performing arts"
      ],
      u: "1f3ad",
      a: "0.6"
    },
    {
      n: [
        "art",
        "frame",
        "museum",
        "picture",
        "painting",
        "framed picture"
      ],
      u: "1f5bc-fe0f",
      a: "0.7"
    },
    {
      n: [
        "art",
        "museum",
        "palette",
        "painting",
        "artist palette"
      ],
      u: "1f3a8",
      a: "0.6"
    },
    {
      n: [
        "spool",
        "thread",
        "needle",
        "sewing",
        "string"
      ],
      u: "1f9f5",
      a: "11"
    },
    {
      n: [
        "needle",
        "sewing",
        "sutures",
        "stitches",
        "tailoring",
        "embroidery",
        "sewing needle"
      ],
      u: "1faa1",
      a: "13"
    },
    {
      n: [
        "yarn",
        "ball",
        "knit",
        "crochet"
      ],
      u: "1f9f6",
      a: "11"
    },
    {
      n: [
        "tie",
        "knot",
        "rope",
        "twine",
        "twist",
        "tangled"
      ],
      u: "1faa2",
      a: "13"
    }
  ],
  objects: [
    {
      n: [
        "eye",
        "glasses",
        "eyewear",
        "clothing",
        "eyeglasses"
      ],
      u: "1f453",
      a: "0.6"
    },
    {
      n: [
        "eye",
        "dark",
        "eyewear",
        "glasses",
        "sunglasses"
      ],
      u: "1f576-fe0f",
      a: "0.7"
    },
    {
      n: [
        "goggles",
        "welding",
        "swimming",
        "eye protection"
      ],
      u: "1f97d",
      a: "11"
    },
    {
      n: [
        "doctor",
        "lab coat",
        "scientist",
        "experiment"
      ],
      u: "1f97c",
      a: "11"
    },
    {
      n: [
        "vest",
        "safety",
        "emergency",
        "safety vest"
      ],
      u: "1f9ba",
      a: "12"
    },
    {
      n: [
        "tie",
        "necktie",
        "clothing"
      ],
      u: "1f454",
      a: "0.6"
    },
    {
      n: [
        "shirt",
        "tshirt",
        "t shirt",
        "clothing"
      ],
      u: "1f455",
      a: "0.6"
    },
    {
      n: [
        "jeans",
        "pants",
        "clothing",
        "trousers"
      ],
      u: "1f456",
      a: "0.6"
    },
    {
      n: [
        "neck",
        "scarf"
      ],
      u: "1f9e3",
      a: "5"
    },
    {
      n: [
        "hand",
        "gloves"
      ],
      u: "1f9e4",
      a: "5"
    },
    {
      n: [
        "coat",
        "jacket"
      ],
      u: "1f9e5",
      a: "5"
    },
    {
      n: [
        "socks",
        "stocking"
      ],
      u: "1f9e6",
      a: "5"
    },
    {
      n: [
        "dress",
        "clothing"
      ],
      u: "1f457",
      a: "0.6"
    },
    {
      n: [
        "kimono",
        "clothing"
      ],
      u: "1f458",
      a: "0.6"
    },
    {
      n: [
        "sari",
        "dress",
        "clothing"
      ],
      u: "1f97b",
      a: "12"
    },
    {
      n: [
        "bathing suit",
        "one piece swimsuit"
      ],
      u: "1fa71",
      a: "12"
    },
    {
      n: [
        "briefs",
        "swimsuit",
        "one piece",
        "underwear",
        "bathing suit"
      ],
      u: "1fa72",
      a: "12"
    },
    {
      n: [
        "pants",
        "shorts",
        "underwear",
        "bathing suit"
      ],
      u: "1fa73",
      a: "12"
    },
    {
      n: [
        "swim",
        "bikini",
        "clothing"
      ],
      u: "1f459",
      a: "0.6"
    },
    {
      n: [
        "woman",
        "clothing",
        "woman’s clothes"
      ],
      u: "1f45a",
      a: "0.6"
    },
    {
      n: [
        "fan",
        "hot",
        "shy",
        "dance",
        "cooling",
        "flutter",
        "folding hand fan"
      ],
      u: "1faad",
      a: "15"
    },
    {
      n: [
        "coin",
        "purse",
        "clothing"
      ],
      u: "1f45b",
      a: "0.6"
    },
    {
      n: [
        "bag",
        "purse",
        "handbag",
        "clothing"
      ],
      u: "1f45c",
      a: "0.6"
    },
    {
      n: [
        "bag",
        "pouch",
        "clothing",
        "clutch bag"
      ],
      u: "1f45d",
      a: "0.6"
    },
    {
      n: [
        "bag",
        "hotel",
        "shopping",
        "shopping bags"
      ],
      u: "1f6cd-fe0f",
      a: "0.7"
    },
    {
      n: [
        "bag",
        "school",
        "satchel",
        "backpack",
        "rucksack"
      ],
      u: "1f392",
      a: "0.6"
    },
    {
      n: [
        "zōri",
        "thongs",
        "sandals",
        "thong sandal",
        "beach sandals",
        "thong sandals"
      ],
      u: "1fa74",
      a: "13"
    },
    {
      n: [
        "man",
        "shoe",
        "clothing",
        "man’s shoe"
      ],
      u: "1f45e",
      a: "0.6"
    },
    {
      n: [
        "shoe",
        "sneaker",
        "athletic",
        "clothing",
        "running shoe"
      ],
      u: "1f45f",
      a: "0.6"
    },
    {
      n: [
        "boot",
        "hiking",
        "camping",
        "hiking boot",
        "backpacking"
      ],
      u: "1f97e",
      a: "11"
    },
    {
      n: [
        "slip on",
        "slipper",
        "flat shoe",
        "ballet flat"
      ],
      u: "1f97f",
      a: "11"
    },
    {
      n: [
        "heel",
        "shoe",
        "woman",
        "clothing",
        "high heeled shoe"
      ],
      u: "1f460",
      a: "0.6"
    },
    {
      n: [
        "shoe",
        "woman",
        "sandal",
        "clothing",
        "woman’s sandal"
      ],
      u: "1f461",
      a: "0.6"
    },
    {
      n: [
        "dance",
        "ballet",
        "ballet shoes"
      ],
      u: "1fa70",
      a: "12"
    },
    {
      n: [
        "boot",
        "shoe",
        "woman",
        "clothing",
        "woman’s boot"
      ],
      u: "1f462",
      a: "0.6"
    },
    {
      n: [
        "afro",
        "comb",
        "hair",
        "pick",
        "hair pick"
      ],
      u: "1faae",
      a: "15"
    },
    {
      n: [
        "king",
        "crown",
        "queen",
        "clothing"
      ],
      u: "1f451",
      a: "0.6"
    },
    {
      n: [
        "hat",
        "woman",
        "clothing",
        "woman’s hat"
      ],
      u: "1f452",
      a: "0.6"
    },
    {
      n: [
        "hat",
        "top",
        "tophat",
        "top hat",
        "clothing"
      ],
      u: "1f3a9",
      a: "0.6"
    },
    {
      n: [
        "cap",
        "hat",
        "clothing",
        "graduation",
        "celebration",
        "graduation cap"
      ],
      u: "1f393",
      a: "0.6"
    },
    {
      n: [
        "billed cap",
        "baseball cap"
      ],
      u: "1f9e2",
      a: "5"
    },
    {
      n: [
        "army",
        "helmet",
        "soldier",
        "warrior",
        "military",
        "military helmet"
      ],
      u: "1fa96",
      a: "13"
    },
    {
      n: [
        "aid",
        "hat",
        "face",
        "cross",
        "helmet",
        "rescue worker’s helmet"
      ],
      u: "26d1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "beads",
        "prayer",
        "clothing",
        "necklace",
        "religion",
        "prayer beads"
      ],
      u: "1f4ff",
      a: "1"
    },
    {
      n: [
        "makeup",
        "lipstick",
        "cosmetics"
      ],
      u: "1f484",
      a: "0.6"
    },
    {
      n: [
        "ring",
        "diamond"
      ],
      u: "1f48d",
      a: "0.6"
    },
    {
      n: [
        "gem",
        "jewel",
        "diamond",
        "gem stone"
      ],
      u: "1f48e",
      a: "0.6"
    },
    {
      n: [
        "mute",
        "quiet",
        "silent",
        "speaker",
        "muted speaker"
      ],
      u: "1f507",
      a: "1"
    },
    {
      n: [
        "soft",
        "speaker low volume"
      ],
      u: "1f508",
      a: "0.7"
    },
    {
      n: [
        "medium",
        "speaker medium volume"
      ],
      u: "1f509",
      a: "1"
    },
    {
      n: [
        "loud",
        "speaker high volume"
      ],
      u: "1f50a",
      a: "0.6"
    },
    {
      n: [
        "loud",
        "loudspeaker",
        "public address"
      ],
      u: "1f4e2",
      a: "0.6"
    },
    {
      n: [
        "cheering",
        "megaphone"
      ],
      u: "1f4e3",
      a: "0.6"
    },
    {
      n: [
        "horn",
        "post",
        "postal",
        "postal horn"
      ],
      u: "1f4ef",
      a: "1"
    },
    {
      n: [
        "bell"
      ],
      u: "1f514",
      a: "0.6"
    },
    {
      n: [
        "bell",
        "mute",
        "quiet",
        "silent",
        "forbidden",
        "bell with slash"
      ],
      u: "1f515",
      a: "1"
    },
    {
      n: [
        "music",
        "score",
        "musical score"
      ],
      u: "1f3bc",
      a: "0.6"
    },
    {
      n: [
        "note",
        "music",
        "musical note"
      ],
      u: "1f3b5",
      a: "0.6"
    },
    {
      n: [
        "note",
        "music",
        "notes",
        "musical notes"
      ],
      u: "1f3b6",
      a: "0.6"
    },
    {
      n: [
        "mic",
        "music",
        "studio",
        "microphone",
        "studio microphone"
      ],
      u: "1f399-fe0f",
      a: "0.7"
    },
    {
      n: [
        "level",
        "music",
        "slider",
        "level slider"
      ],
      u: "1f39a-fe0f",
      a: "0.7"
    },
    {
      n: [
        "knobs",
        "music",
        "control",
        "control knobs"
      ],
      u: "1f39b-fe0f",
      a: "0.7"
    },
    {
      n: [
        "mic",
        "karaoke",
        "microphone"
      ],
      u: "1f3a4",
      a: "0.6"
    },
    {
      n: [
        "earbud",
        "headphone"
      ],
      u: "1f3a7",
      a: "0.6"
    },
    {
      n: [
        "radio",
        "video"
      ],
      u: "1f4fb",
      a: "0.6"
    },
    {
      n: [
        "sax",
        "music",
        "saxophone",
        "instrument"
      ],
      u: "1f3b7",
      a: "0.6"
    },
    {
      n: [
        "accordion",
        "concertina",
        "squeeze box"
      ],
      u: "1fa97",
      a: "13"
    },
    {
      n: [
        "music",
        "guitar",
        "instrument"
      ],
      u: "1f3b8",
      a: "0.6"
    },
    {
      n: [
        "music",
        "piano",
        "keyboard",
        "instrument",
        "musical keyboard"
      ],
      u: "1f3b9",
      a: "0.6"
    },
    {
      n: [
        "music",
        "trumpet",
        "instrument"
      ],
      u: "1f3ba",
      a: "0.6"
    },
    {
      n: [
        "music",
        "violin",
        "instrument"
      ],
      u: "1f3bb",
      a: "0.6"
    },
    {
      n: [
        "banjo",
        "music",
        "stringed"
      ],
      u: "1fa95",
      a: "12"
    },
    {
      n: [
        "drum",
        "music",
        "drumsticks"
      ],
      u: "1f941",
      a: "3"
    },
    {
      n: [
        "beat",
        "drum",
        "conga",
        "rhythm",
        "long drum"
      ],
      u: "1fa98",
      a: "13"
    },
    {
      n: [
        "music",
        "shake",
        "rattle",
        "maracas",
        "instrument",
        "percussion"
      ],
      u: "1fa87",
      a: "15"
    },
    {
      n: [
        "fife",
        "pipe",
        "flute",
        "music",
        "recorder",
        "woodwind"
      ],
      u: "1fa88",
      a: "15"
    },
    {
      n: [
        "cell",
        "phone",
        "mobile",
        "telephone",
        "mobile phone"
      ],
      u: "1f4f1",
      a: "0.6"
    },
    {
      n: [
        "cell",
        "arrow",
        "phone",
        "mobile",
        "receive",
        "mobile phone with arrow"
      ],
      u: "1f4f2",
      a: "0.6"
    },
    {
      n: [
        "phone",
        "telephone"
      ],
      u: "260e-fe0f",
      a: "0.6"
    },
    {
      n: [
        "phone",
        "receiver",
        "telephone",
        "telephone receiver"
      ],
      u: "1f4de",
      a: "0.6"
    },
    {
      n: [
        "pager"
      ],
      u: "1f4df",
      a: "0.6"
    },
    {
      n: [
        "fax",
        "fax machine"
      ],
      u: "1f4e0",
      a: "0.6"
    },
    {
      n: [
        "battery"
      ],
      u: "1f50b",
      a: "0.6"
    },
    {
      n: [
        "electronic",
        "low energy",
        "low battery"
      ],
      u: "1faab",
      a: "14"
    },
    {
      n: [
        "plug",
        "electric",
        "electricity",
        "electric plug"
      ],
      u: "1f50c",
      a: "0.6"
    },
    {
      n: [
        "pc",
        "laptop",
        "computer",
        "personal"
      ],
      u: "1f4bb",
      a: "0.6"
    },
    {
      n: [
        "desktop",
        "computer",
        "desktop computer"
      ],
      u: "1f5a5-fe0f",
      a: "0.7"
    },
    {
      n: [
        "printer",
        "computer"
      ],
      u: "1f5a8-fe0f",
      a: "0.7"
    },
    {
      n: [
        "keyboard",
        "computer"
      ],
      u: "2328-fe0f",
      a: "1"
    },
    {
      n: [
        "computer",
        "computer mouse"
      ],
      u: "1f5b1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "computer",
        "trackball"
      ],
      u: "1f5b2-fe0f",
      a: "0.7"
    },
    {
      n: [
        "disk",
        "optical",
        "computer",
        "minidisk",
        "computer disk"
      ],
      u: "1f4bd",
      a: "0.6"
    },
    {
      n: [
        "disk",
        "floppy",
        "computer",
        "floppy disk"
      ],
      u: "1f4be",
      a: "0.6"
    },
    {
      n: [
        "cd",
        "disk",
        "optical",
        "computer",
        "optical disk"
      ],
      u: "1f4bf",
      a: "0.6"
    },
    {
      n: [
        "dvd",
        "disk",
        "blu ray",
        "optical",
        "computer"
      ],
      u: "1f4c0",
      a: "0.6"
    },
    {
      n: [
        "abacus",
        "calculation"
      ],
      u: "1f9ee",
      a: "11"
    },
    {
      n: [
        "movie",
        "camera",
        "cinema",
        "movie camera"
      ],
      u: "1f3a5",
      a: "0.6"
    },
    {
      n: [
        "film",
        "movie",
        "cinema",
        "frames",
        "film frames"
      ],
      u: "1f39e-fe0f",
      a: "0.7"
    },
    {
      n: [
        "film",
        "movie",
        "video",
        "cinema",
        "projector",
        "film projector"
      ],
      u: "1f4fd-fe0f",
      a: "0.7"
    },
    {
      n: [
        "movie",
        "clapper",
        "clapper board"
      ],
      u: "1f3ac",
      a: "0.6"
    },
    {
      n: [
        "tv",
        "video",
        "television"
      ],
      u: "1f4fa",
      a: "0.6"
    },
    {
      n: [
        "video",
        "camera"
      ],
      u: "1f4f7",
      a: "0.6"
    },
    {
      n: [
        "flash",
        "video",
        "camera",
        "camera with flash"
      ],
      u: "1f4f8",
      a: "1"
    },
    {
      n: [
        "video",
        "camera",
        "video camera"
      ],
      u: "1f4f9",
      a: "0.6"
    },
    {
      n: [
        "vhs",
        "tape",
        "video",
        "videocassette"
      ],
      u: "1f4fc",
      a: "0.6"
    },
    {
      n: [
        "tool",
        "glass",
        "search",
        "magnifying",
        "magnifying glass tilted left"
      ],
      u: "1f50d",
      a: "0.6"
    },
    {
      n: [
        "tool",
        "glass",
        "search",
        "magnifying",
        "magnifying glass tilted right"
      ],
      u: "1f50e",
      a: "0.6"
    },
    {
      n: [
        "light",
        "candle"
      ],
      u: "1f56f-fe0f",
      a: "0.7"
    },
    {
      n: [
        "bulb",
        "idea",
        "comic",
        "light",
        "electric",
        "light bulb"
      ],
      u: "1f4a1",
      a: "0.6"
    },
    {
      n: [
        "tool",
        "light",
        "torch",
        "electric",
        "flashlight"
      ],
      u: "1f526",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "red",
        "light",
        "lantern",
        "red paper lantern"
      ],
      u: "1f3ee",
      a: "0.6"
    },
    {
      n: [
        "oil",
        "diya",
        "lamp",
        "diya lamp"
      ],
      u: "1fa94",
      a: "12"
    },
    {
      n: [
        "book",
        "cover",
        "notebook",
        "decorated",
        "notebook with decorative cover"
      ],
      u: "1f4d4",
      a: "0.6"
    },
    {
      n: [
        "book",
        "closed",
        "closed book"
      ],
      u: "1f4d5",
      a: "0.6"
    },
    {
      n: [
        "book",
        "open",
        "open book"
      ],
      u: "1f4d6",
      a: "0.6"
    },
    {
      n: [
        "book",
        "green",
        "green book"
      ],
      u: "1f4d7",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "book",
        "blue book"
      ],
      u: "1f4d8",
      a: "0.6"
    },
    {
      n: [
        "book",
        "orange",
        "orange book"
      ],
      u: "1f4d9",
      a: "0.6"
    },
    {
      n: [
        "book",
        "books"
      ],
      u: "1f4da",
      a: "0.6"
    },
    {
      n: [
        "notebook"
      ],
      u: "1f4d3",
      a: "0.6"
    },
    {
      n: [
        "ledger",
        "notebook"
      ],
      u: "1f4d2",
      a: "0.6"
    },
    {
      n: [
        "curl",
        "page",
        "document",
        "page with curl"
      ],
      u: "1f4c3",
      a: "0.6"
    },
    {
      n: [
        "paper",
        "scroll"
      ],
      u: "1f4dc",
      a: "0.6"
    },
    {
      n: [
        "page",
        "document",
        "page facing up"
      ],
      u: "1f4c4",
      a: "0.6"
    },
    {
      n: [
        "news",
        "paper",
        "newspaper"
      ],
      u: "1f4f0",
      a: "0.6"
    },
    {
      n: [
        "news",
        "paper",
        "rolled",
        "newspaper",
        "rolled up newspaper"
      ],
      u: "1f5de-fe0f",
      a: "0.7"
    },
    {
      n: [
        "mark",
        "tabs",
        "marker",
        "bookmark",
        "bookmark tabs"
      ],
      u: "1f4d1",
      a: "0.6"
    },
    {
      n: [
        "mark",
        "bookmark"
      ],
      u: "1f516",
      a: "0.6"
    },
    {
      n: [
        "label"
      ],
      u: "1f3f7-fe0f",
      a: "0.7"
    },
    {
      n: [
        "bag",
        "money",
        "dollar",
        "moneybag",
        "money bag"
      ],
      u: "1f4b0",
      a: "0.6"
    },
    {
      n: [
        "coin",
        "gold",
        "metal",
        "money",
        "silver",
        "treasure"
      ],
      u: "1fa99",
      a: "13"
    },
    {
      n: [
        "yen",
        "bill",
        "note",
        "money",
        "banknote",
        "currency",
        "yen banknote"
      ],
      u: "1f4b4",
      a: "0.6"
    },
    {
      n: [
        "bill",
        "note",
        "money",
        "dollar",
        "banknote",
        "currency",
        "dollar banknote"
      ],
      u: "1f4b5",
      a: "0.6"
    },
    {
      n: [
        "bill",
        "euro",
        "note",
        "money",
        "banknote",
        "currency",
        "euro banknote"
      ],
      u: "1f4b6",
      a: "1"
    },
    {
      n: [
        "bill",
        "note",
        "money",
        "pound",
        "banknote",
        "currency",
        "pound banknote"
      ],
      u: "1f4b7",
      a: "1"
    },
    {
      n: [
        "fly",
        "bill",
        "money",
        "wings",
        "banknote",
        "money with wings"
      ],
      u: "1f4b8",
      a: "0.6"
    },
    {
      n: [
        "card",
        "money",
        "credit",
        "credit card"
      ],
      u: "1f4b3",
      a: "0.6"
    },
    {
      n: [
        "proof",
        "receipt",
        "evidence",
        "accounting",
        "bookkeeping"
      ],
      u: "1f9fe",
      a: "11"
    },
    {
      n: [
        "yen",
        "chart",
        "graph",
        "money",
        "growth",
        "chart increasing with yen"
      ],
      u: "1f4b9",
      a: "0.6"
    },
    {
      n: [
        "email",
        "letter",
        "envelope"
      ],
      u: "2709-fe0f",
      a: "0.6"
    },
    {
      n: [
        "mail",
        "email",
        "e mail",
        "letter"
      ],
      u: "1f4e7",
      a: "0.6"
    },
    {
      n: [
        "email",
        "e mail",
        "letter",
        "receive",
        "envelope",
        "incoming",
        "incoming envelope"
      ],
      u: "1f4e8",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "email",
        "e mail",
        "envelope",
        "outgoing",
        "envelope with arrow"
      ],
      u: "1f4e9",
      a: "0.6"
    },
    {
      n: [
        "box",
        "mail",
        "sent",
        "tray",
        "letter",
        "outbox",
        "outbox tray"
      ],
      u: "1f4e4",
      a: "0.6"
    },
    {
      n: [
        "box",
        "mail",
        "tray",
        "inbox",
        "letter",
        "receive",
        "inbox tray"
      ],
      u: "1f4e5",
      a: "0.6"
    },
    {
      n: [
        "box",
        "parcel",
        "package"
      ],
      u: "1f4e6",
      a: "0.6"
    },
    {
      n: [
        "mail",
        "closed",
        "mailbox",
        "postbox",
        "closed mailbox with raised flag"
      ],
      u: "1f4eb",
      a: "0.6"
    },
    {
      n: [
        "mail",
        "closed",
        "lowered",
        "mailbox",
        "postbox",
        "closed mailbox with lowered flag"
      ],
      u: "1f4ea",
      a: "0.6"
    },
    {
      n: [
        "mail",
        "open",
        "mailbox",
        "postbox",
        "open mailbox with raised flag"
      ],
      u: "1f4ec",
      a: "0.7"
    },
    {
      n: [
        "mail",
        "open",
        "lowered",
        "mailbox",
        "postbox",
        "open mailbox with lowered flag"
      ],
      u: "1f4ed",
      a: "0.7"
    },
    {
      n: [
        "mail",
        "postbox",
        "mailbox"
      ],
      u: "1f4ee",
      a: "0.6"
    },
    {
      n: [
        "box",
        "ballot",
        "ballot box with ballot"
      ],
      u: "1f5f3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pencil"
      ],
      u: "270f-fe0f",
      a: "0.6"
    },
    {
      n: [
        "nib",
        "pen",
        "black nib"
      ],
      u: "2712-fe0f",
      a: "0.6"
    },
    {
      n: [
        "pen",
        "fountain",
        "fountain pen"
      ],
      u: "1f58b-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pen",
        "ballpoint"
      ],
      u: "1f58a-fe0f",
      a: "0.7"
    },
    {
      n: [
        "painting",
        "paintbrush"
      ],
      u: "1f58c-fe0f",
      a: "0.7"
    },
    {
      n: [
        "crayon"
      ],
      u: "1f58d-fe0f",
      a: "0.7"
    },
    {
      n: [
        "memo",
        "pencil"
      ],
      u: "1f4dd",
      a: "0.6"
    },
    {
      n: [
        "briefcase"
      ],
      u: "1f4bc",
      a: "0.6"
    },
    {
      n: [
        "file",
        "folder",
        "file folder"
      ],
      u: "1f4c1",
      a: "0.6"
    },
    {
      n: [
        "file",
        "open",
        "folder",
        "open file folder"
      ],
      u: "1f4c2",
      a: "0.6"
    },
    {
      n: [
        "card",
        "index",
        "dividers",
        "card index dividers"
      ],
      u: "1f5c2-fe0f",
      a: "0.7"
    },
    {
      n: [
        "date",
        "calendar"
      ],
      u: "1f4c5",
      a: "0.6"
    },
    {
      n: [
        "calendar",
        "tear off calendar"
      ],
      u: "1f4c6",
      a: "0.6"
    },
    {
      n: [
        "pad",
        "note",
        "spiral",
        "spiral notepad"
      ],
      u: "1f5d2-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pad",
        "spiral",
        "calendar",
        "spiral calendar"
      ],
      u: "1f5d3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "card",
        "index",
        "rolodex",
        "card index"
      ],
      u: "1f4c7",
      a: "0.6"
    },
    {
      n: [
        "chart",
        "graph",
        "trend",
        "growth",
        "upward",
        "chart increasing"
      ],
      u: "1f4c8",
      a: "0.6"
    },
    {
      n: [
        "down",
        "chart",
        "graph",
        "trend",
        "chart decreasing"
      ],
      u: "1f4c9",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "chart",
        "graph",
        "bar chart"
      ],
      u: "1f4ca",
      a: "0.6"
    },
    {
      n: [
        "clipboard"
      ],
      u: "1f4cb",
      a: "0.6"
    },
    {
      n: [
        "pin",
        "pushpin"
      ],
      u: "1f4cc",
      a: "0.6"
    },
    {
      n: [
        "pin",
        "pushpin",
        "round pushpin"
      ],
      u: "1f4cd",
      a: "0.6"
    },
    {
      n: [
        "paperclip"
      ],
      u: "1f4ce",
      a: "0.6"
    },
    {
      n: [
        "link",
        "paperclip",
        "linked paperclips"
      ],
      u: "1f587-fe0f",
      a: "0.7"
    },
    {
      n: [
        "ruler",
        "straight edge",
        "straight ruler"
      ],
      u: "1f4cf",
      a: "0.6"
    },
    {
      n: [
        "set",
        "ruler",
        "triangle",
        "triangular ruler"
      ],
      u: "1f4d0",
      a: "0.6"
    },
    {
      n: [
        "tool",
        "cutting",
        "scissors"
      ],
      u: "2702-fe0f",
      a: "0.6"
    },
    {
      n: [
        "box",
        "card",
        "file",
        "card file box"
      ],
      u: "1f5c3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "file",
        "filing",
        "cabinet",
        "file cabinet"
      ],
      u: "1f5c4-fe0f",
      a: "0.7"
    },
    {
      n: [
        "wastebasket"
      ],
      u: "1f5d1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "locked",
        "closed"
      ],
      u: "1f512",
      a: "0.6"
    },
    {
      n: [
        "lock",
        "open",
        "unlock",
        "unlocked"
      ],
      u: "1f513",
      a: "0.6"
    },
    {
      n: [
        "ink",
        "nib",
        "pen",
        "lock",
        "privacy",
        "locked with pen"
      ],
      u: "1f50f",
      a: "0.6"
    },
    {
      n: [
        "key",
        "lock",
        "closed",
        "secure",
        "locked with key"
      ],
      u: "1f510",
      a: "0.6"
    },
    {
      n: [
        "key",
        "lock",
        "password"
      ],
      u: "1f511",
      a: "0.6"
    },
    {
      n: [
        "key",
        "old",
        "clue",
        "lock",
        "old key"
      ],
      u: "1f5dd-fe0f",
      a: "0.7"
    },
    {
      n: [
        "tool",
        "hammer"
      ],
      u: "1f528",
      a: "0.6"
    },
    {
      n: [
        "axe",
        "chop",
        "wood",
        "split",
        "hatchet"
      ],
      u: "1fa93",
      a: "12"
    },
    {
      n: [
        "pick",
        "tool",
        "mining"
      ],
      u: "26cf-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pick",
        "tool",
        "hammer",
        "hammer and pick"
      ],
      u: "2692-fe0f",
      a: "1"
    },
    {
      n: [
        "tool",
        "hammer",
        "wrench",
        "spanner",
        "hammer and wrench"
      ],
      u: "1f6e0-fe0f",
      a: "0.7"
    },
    {
      n: [
        "knife",
        "dagger",
        "weapon"
      ],
      u: "1f5e1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "swords",
        "weapon",
        "crossed",
        "crossed swords"
      ],
      u: "2694-fe0f",
      a: "1"
    },
    {
      n: [
        "bomb",
        "comic"
      ],
      u: "1f4a3",
      a: "0.6"
    },
    {
      n: [
        "rebound",
        "boomerang",
        "repercussion"
      ],
      u: "1fa83",
      a: "13"
    },
    {
      n: [
        "bow",
        "arrow",
        "archer",
        "zodiac",
        "sagittarius",
        "bow and arrow"
      ],
      u: "1f3f9",
      a: "1"
    },
    {
      n: [
        "shield",
        "weapon"
      ],
      u: "1f6e1-fe0f",
      a: "0.7"
    },
    {
      n: [
        "saw",
        "tool",
        "lumber",
        "carpenter",
        "carpentry saw"
      ],
      u: "1fa9a",
      a: "13"
    },
    {
      n: [
        "tool",
        "wrench",
        "spanner"
      ],
      u: "1f527",
      a: "0.6"
    },
    {
      n: [
        "tool",
        "screw",
        "screwdriver"
      ],
      u: "1fa9b",
      a: "13"
    },
    {
      n: [
        "nut",
        "bolt",
        "tool",
        "nut and bolt"
      ],
      u: "1f529",
      a: "0.6"
    },
    {
      n: [
        "cog",
        "gear",
        "tool",
        "cogwheel"
      ],
      u: "2699-fe0f",
      a: "1"
    },
    {
      n: [
        "tool",
        "vice",
        "clamp",
        "compress"
      ],
      u: "1f5dc-fe0f",
      a: "0.7"
    },
    {
      n: [
        "libra",
        "scale",
        "zodiac",
        "balance",
        "justice",
        "balance scale"
      ],
      u: "2696-fe0f",
      a: "1"
    },
    {
      n: [
        "blind",
        "white cane",
        "accessibility"
      ],
      u: "1f9af",
      a: "12"
    },
    {
      n: [
        "link"
      ],
      u: "1f517",
      a: "0.6"
    },
    {
      n: [
        "break",
        "chain",
        "cuffs",
        "freedom",
        "breaking",
        "broken chain"
      ],
      u: "26d3-fe0f-200d-1f4a5",
      a: "15.1"
    },
    {
      n: [
        "chain",
        "chains"
      ],
      u: "26d3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "hook",
        "catch",
        "crook",
        "curve",
        "ensnare",
        "selling point"
      ],
      u: "1fa9d",
      a: "13"
    },
    {
      n: [
        "tool",
        "chest",
        "toolbox",
        "mechanic"
      ],
      u: "1f9f0",
      a: "11"
    },
    {
      n: [
        "magnet",
        "magnetic",
        "horseshoe",
        "attraction"
      ],
      u: "1f9f2",
      a: "11"
    },
    {
      n: [
        "rung",
        "step",
        "climb",
        "ladder"
      ],
      u: "1fa9c",
      a: "13"
    },
    {
      n: [
        "tool",
        "alembic",
        "chemistry"
      ],
      u: "2697-fe0f",
      a: "1"
    },
    {
      n: [
        "lab",
        "chemist",
        "science",
        "test tube",
        "chemistry",
        "experiment"
      ],
      u: "1f9ea",
      a: "11"
    },
    {
      n: [
        "lab",
        "biology",
        "culture",
        "bacteria",
        "biologist",
        "petri dish"
      ],
      u: "1f9eb",
      a: "11"
    },
    {
      n: [
        "dna",
        "gene",
        "life",
        "genetics",
        "biologist",
        "evolution"
      ],
      u: "1f9ec",
      a: "11"
    },
    {
      n: [
        "tool",
        "science",
        "microscope"
      ],
      u: "1f52c",
      a: "1"
    },
    {
      n: [
        "tool",
        "science",
        "telescope"
      ],
      u: "1f52d",
      a: "1"
    },
    {
      n: [
        "dish",
        "antenna",
        "satellite",
        "satellite antenna"
      ],
      u: "1f4e1",
      a: "0.6"
    },
    {
      n: [
        "shot",
        "sick",
        "needle",
        "syringe",
        "medicine"
      ],
      u: "1f489",
      a: "0.6"
    },
    {
      n: [
        "bleed",
        "injury",
        "medicine",
        "menstruation",
        "drop of blood",
        "blood donation"
      ],
      u: "1fa78",
      a: "12"
    },
    {
      n: [
        "pill",
        "sick",
        "doctor",
        "medicine"
      ],
      u: "1f48a",
      a: "0.6"
    },
    {
      n: [
        "bandage",
        "adhesive bandage"
      ],
      u: "1fa79",
      a: "12"
    },
    {
      n: [
        "cane",
        "hurt",
        "stick",
        "crutch",
        "disability",
        "mobility aid"
      ],
      u: "1fa7c",
      a: "14"
    },
    {
      n: [
        "heart",
        "doctor",
        "medicine",
        "stethoscope"
      ],
      u: "1fa7a",
      a: "12"
    },
    {
      n: [
        "x ray",
        "bones",
        "doctor",
        "medical",
        "skeleton"
      ],
      u: "1fa7b",
      a: "14"
    },
    {
      n: [
        "door"
      ],
      u: "1f6aa",
      a: "0.6"
    },
    {
      n: [
        "lift",
        "hoist",
        "elevator",
        "accessibility"
      ],
      u: "1f6d7",
      a: "13"
    },
    {
      n: [
        "mirror",
        "speculum",
        "reflector",
        "reflection"
      ],
      u: "1fa9e",
      a: "13"
    },
    {
      n: [
        "view",
        "frame",
        "window",
        "opening",
        "fresh air",
        "transparent"
      ],
      u: "1fa9f",
      a: "13"
    },
    {
      n: [
        "bed",
        "hotel",
        "sleep"
      ],
      u: "1f6cf-fe0f",
      a: "0.7"
    },
    {
      n: [
        "lamp",
        "couch",
        "hotel",
        "couch and lamp"
      ],
      u: "1f6cb-fe0f",
      a: "0.7"
    },
    {
      n: [
        "sit",
        "seat",
        "chair"
      ],
      u: "1fa91",
      a: "12"
    },
    {
      n: [
        "toilet"
      ],
      u: "1f6bd",
      a: "0.6"
    },
    {
      n: [
        "toilet",
        "plunger",
        "plumber",
        "suction",
        "force cup"
      ],
      u: "1faa0",
      a: "13"
    },
    {
      n: [
        "water",
        "shower"
      ],
      u: "1f6bf",
      a: "1"
    },
    {
      n: [
        "bath",
        "bathtub"
      ],
      u: "1f6c1",
      a: "1"
    },
    {
      n: [
        "bait",
        "trap",
        "snare",
        "mousetrap",
        "mouse trap"
      ],
      u: "1faa4",
      a: "13"
    },
    {
      n: [
        "razor",
        "sharp",
        "shave"
      ],
      u: "1fa92",
      a: "12"
    },
    {
      n: [
        "lotion",
        "shampoo",
        "sunscreen",
        "moisturizer",
        "lotion bottle"
      ],
      u: "1f9f4",
      a: "11"
    },
    {
      n: [
        "diaper",
        "punk rock",
        "safety pin"
      ],
      u: "1f9f7",
      a: "11"
    },
    {
      n: [
        "broom",
        "witch",
        "cleaning",
        "sweeping"
      ],
      u: "1f9f9",
      a: "11"
    },
    {
      n: [
        "basket",
        "picnic",
        "farming",
        "laundry"
      ],
      u: "1f9fa",
      a: "11"
    },
    {
      n: [
        "paper towels",
        "toilet paper",
        "roll of paper"
      ],
      u: "1f9fb",
      a: "11"
    },
    {
      n: [
        "vat",
        "cask",
        "pail",
        "bucket"
      ],
      u: "1faa3",
      a: "13"
    },
    {
      n: [
        "bar",
        "soap",
        "lather",
        "bathing",
        "cleaning",
        "soapdish"
      ],
      u: "1f9fc",
      a: "11"
    },
    {
      n: [
        "burp",
        "soap",
        "clean",
        "bubbles",
        "underwater"
      ],
      u: "1fae7",
      a: "14"
    },
    {
      n: [
        "brush",
        "clean",
        "teeth",
        "dental",
        "hygiene",
        "bathroom",
        "toothbrush"
      ],
      u: "1faa5",
      a: "13"
    },
    {
      n: [
        "sponge",
        "porous",
        "cleaning",
        "absorbing"
      ],
      u: "1f9fd",
      a: "11"
    },
    {
      n: [
        "fire",
        "quench",
        "extinguish",
        "fire extinguisher"
      ],
      u: "1f9ef",
      a: "11"
    },
    {
      n: [
        "cart",
        "trolley",
        "shopping",
        "shopping cart"
      ],
      u: "1f6d2",
      a: "3"
    },
    {
      n: [
        "smoking",
        "cigarette"
      ],
      u: "1f6ac",
      a: "0.6"
    },
    {
      n: [
        "death",
        "coffin"
      ],
      u: "26b0-fe0f",
      a: "1"
    },
    {
      n: [
        "grave",
        "cemetery",
        "headstone",
        "graveyard",
        "tombstone"
      ],
      u: "1faa6",
      a: "13"
    },
    {
      n: [
        "urn",
        "ashes",
        "death",
        "funeral",
        "funeral urn"
      ],
      u: "26b1-fe0f",
      a: "1"
    },
    {
      n: [
        "bead",
        "charm",
        "nazar",
        "evil eye",
        "talisman",
        "nazar amulet"
      ],
      u: "1f9ff",
      a: "11"
    },
    {
      n: [
        "hand",
        "mary",
        "hamsa",
        "amulet",
        "fatima",
        "miriam",
        "protection"
      ],
      u: "1faac",
      a: "14"
    },
    {
      n: [
        "moai",
        "face",
        "moyai",
        "statue"
      ],
      u: "1f5ff",
      a: "0.6"
    },
    {
      n: [
        "sign",
        "picket",
        "placard",
        "protest",
        "demonstration"
      ],
      u: "1faa7",
      a: "13"
    },
    {
      n: [
        "id",
        "license",
        "security",
        "credentials",
        "identification card"
      ],
      u: "1faaa",
      a: "14"
    }
  ],
  symbols: [
    {
      n: [
        "atm",
        "bank",
        "teller",
        "ATM sign",
        "atm sign",
        "automated"
      ],
      u: "1f3e7",
      a: "0.6"
    },
    {
      n: [
        "litter",
        "litter bin",
        "litter in bin sign"
      ],
      u: "1f6ae",
      a: "1"
    },
    {
      n: [
        "water",
        "potable",
        "drinking",
        "potable water"
      ],
      u: "1f6b0",
      a: "1"
    },
    {
      n: [
        "access",
        "wheelchair symbol"
      ],
      u: "267f",
      a: "0.6"
    },
    {
      n: [
        "wc",
        "man",
        "toilet",
        "bathroom",
        "lavatory",
        "restroom",
        "men’s room"
      ],
      u: "1f6b9",
      a: "0.6"
    },
    {
      n: [
        "wc",
        "woman",
        "toilet",
        "bathroom",
        "lavatory",
        "restroom",
        "women’s room"
      ],
      u: "1f6ba",
      a: "0.6"
    },
    {
      n: [
        "wc",
        "toilet",
        "restroom",
        "bathroom",
        "lavatory"
      ],
      u: "1f6bb",
      a: "0.6"
    },
    {
      n: [
        "baby",
        "changing",
        "baby symbol"
      ],
      u: "1f6bc",
      a: "0.6"
    },
    {
      n: [
        "wc",
        "water",
        "closet",
        "toilet",
        "bathroom",
        "lavatory",
        "restroom",
        "water closet"
      ],
      u: "1f6be",
      a: "0.6"
    },
    {
      n: [
        "control",
        "passport",
        "passport control"
      ],
      u: "1f6c2",
      a: "1"
    },
    {
      n: [
        "customs"
      ],
      u: "1f6c3",
      a: "1"
    },
    {
      n: [
        "claim",
        "baggage",
        "baggage claim"
      ],
      u: "1f6c4",
      a: "1"
    },
    {
      n: [
        "locker",
        "baggage",
        "luggage",
        "left luggage"
      ],
      u: "1f6c5",
      a: "1"
    },
    {
      n: [
        "warning"
      ],
      u: "26a0-fe0f",
      a: "0.6"
    },
    {
      n: [
        "child",
        "traffic",
        "crossing",
        "pedestrian",
        "children crossing"
      ],
      u: "1f6b8",
      a: "1"
    },
    {
      n: [
        "no",
        "not",
        "entry",
        "traffic",
        "no entry",
        "forbidden",
        "prohibited"
      ],
      u: "26d4",
      a: "0.6"
    },
    {
      n: [
        "no",
        "not",
        "entry",
        "forbidden",
        "prohibited"
      ],
      u: "1f6ab",
      a: "0.6"
    },
    {
      n: [
        "no",
        "bike",
        "bicycle",
        "forbidden",
        "prohibited",
        "no bicycles"
      ],
      u: "1f6b3",
      a: "1"
    },
    {
      n: [
        "no",
        "not",
        "smoking",
        "forbidden",
        "no smoking",
        "prohibited"
      ],
      u: "1f6ad",
      a: "0.6"
    },
    {
      n: [
        "no",
        "not",
        "litter",
        "forbidden",
        "prohibited",
        "no littering"
      ],
      u: "1f6af",
      a: "1"
    },
    {
      n: [
        "water",
        "non potable",
        "non drinking",
        "non potable water"
      ],
      u: "1f6b1",
      a: "1"
    },
    {
      n: [
        "no",
        "not",
        "forbidden",
        "pedestrian",
        "prohibited",
        "no pedestrians"
      ],
      u: "1f6b7",
      a: "1"
    },
    {
      n: [
        "no",
        "cell",
        "phone",
        "mobile",
        "forbidden",
        "no mobile phones"
      ],
      u: "1f4f5",
      a: "1"
    },
    {
      n: [
        "18",
        "eighteen",
        "underage",
        "prohibited",
        "age restriction",
        "no one under eighteen"
      ],
      u: "1f51e",
      a: "0.6"
    },
    {
      n: [
        "sign",
        "radioactive"
      ],
      u: "2622-fe0f",
      a: "1"
    },
    {
      n: [
        "sign",
        "biohazard"
      ],
      u: "2623-fe0f",
      a: "1"
    },
    {
      n: [
        "arrow",
        "north",
        "up arrow",
        "cardinal",
        "direction"
      ],
      u: "2b06-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "direction",
        "northeast",
        "intercardinal",
        "up right arrow"
      ],
      u: "2197-fe0f",
      a: "0.6"
    },
    {
      n: [
        "east",
        "arrow",
        "cardinal",
        "direction",
        "right arrow"
      ],
      u: "27a1-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "direction",
        "southeast",
        "intercardinal",
        "down right arrow"
      ],
      u: "2198-fe0f",
      a: "0.6"
    },
    {
      n: [
        "down",
        "arrow",
        "south",
        "cardinal",
        "direction",
        "down arrow"
      ],
      u: "2b07-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "direction",
        "southwest",
        "intercardinal",
        "down left arrow"
      ],
      u: "2199-fe0f",
      a: "0.6"
    },
    {
      n: [
        "west",
        "arrow",
        "cardinal",
        "direction",
        "left arrow"
      ],
      u: "2b05-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "direction",
        "northwest",
        "up left arrow",
        "intercardinal"
      ],
      u: "2196-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "up down arrow"
      ],
      u: "2195-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "left right arrow"
      ],
      u: "2194-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "right arrow curving left"
      ],
      u: "21a9-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "left arrow curving right"
      ],
      u: "21aa-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "right arrow curving up"
      ],
      u: "2934-fe0f",
      a: "0.6"
    },
    {
      n: [
        "down",
        "arrow",
        "right arrow curving down"
      ],
      u: "2935-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "reload",
        "clockwise",
        "clockwise vertical arrows"
      ],
      u: "1f503",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "withershins",
        "anticlockwise",
        "counterclockwise",
        "counterclockwise arrows button"
      ],
      u: "1f504",
      a: "1"
    },
    {
      n: [
        "back",
        "arrow",
        "BACK arrow"
      ],
      u: "1f519",
      a: "0.6"
    },
    {
      n: [
        "end",
        "arrow",
        "END arrow"
      ],
      u: "1f51a",
      a: "0.6"
    },
    {
      n: [
        "on",
        "on!",
        "mark",
        "arrow",
        "ON! arrow"
      ],
      u: "1f51b",
      a: "0.6"
    },
    {
      n: [
        "soon",
        "arrow",
        "SOON arrow"
      ],
      u: "1f51c",
      a: "0.6"
    },
    {
      n: [
        "up",
        "top",
        "arrow",
        "TOP arrow"
      ],
      u: "1f51d",
      a: "0.6"
    },
    {
      n: [
        "worship",
        "religion",
        "place of worship"
      ],
      u: "1f6d0",
      a: "1"
    },
    {
      n: [
        "atom",
        "atheist",
        "atom symbol"
      ],
      u: "269b-fe0f",
      a: "1"
    },
    {
      n: [
        "om",
        "hindu",
        "religion"
      ],
      u: "1f549-fe0f",
      a: "0.7"
    },
    {
      n: [
        "jew",
        "star",
        "david",
        "jewish",
        "religion",
        "star of David",
        "star of david"
      ],
      u: "2721-fe0f",
      a: "0.7"
    },
    {
      n: [
        "wheel",
        "dharma",
        "buddhist",
        "religion",
        "wheel of dharma"
      ],
      u: "2638-fe0f",
      a: "0.7"
    },
    {
      n: [
        "tao",
        "yin",
        "yang",
        "taoist",
        "yin yang",
        "religion"
      ],
      u: "262f-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cross",
        "religion",
        "christian",
        "latin cross"
      ],
      u: "271d-fe0f",
      a: "0.7"
    },
    {
      n: [
        "cross",
        "religion",
        "christian",
        "orthodox cross"
      ],
      u: "2626-fe0f",
      a: "1"
    },
    {
      n: [
        "islam",
        "muslim",
        "religion",
        "star and crescent"
      ],
      u: "262a-fe0f",
      a: "0.7"
    },
    {
      n: [
        "peace",
        "peace symbol"
      ],
      u: "262e-fe0f",
      a: "1"
    },
    {
      n: [
        "menorah",
        "religion",
        "candelabrum",
        "candlestick"
      ],
      u: "1f54e",
      a: "1"
    },
    {
      n: [
        "star",
        "fortune",
        "dotted six pointed star"
      ],
      u: "1f52f",
      a: "0.6"
    },
    {
      n: [
        "sikh",
        "khanda",
        "religion"
      ],
      u: "1faaf",
      a: "15"
    },
    {
      n: [
        "ram",
        "Aries",
        "aries",
        "zodiac"
      ],
      u: "2648",
      a: "0.6"
    },
    {
      n: [
        "ox",
        "bull",
        "Taurus",
        "taurus",
        "zodiac"
      ],
      u: "2649",
      a: "0.6"
    },
    {
      n: [
        "twins",
        "Gemini",
        "gemini",
        "zodiac"
      ],
      u: "264a",
      a: "0.6"
    },
    {
      n: [
        "crab",
        "Cancer",
        "cancer",
        "zodiac"
      ],
      u: "264b",
      a: "0.6"
    },
    {
      n: [
        "Leo",
        "leo",
        "lion",
        "zodiac"
      ],
      u: "264c",
      a: "0.6"
    },
    {
      n: [
        "Virgo",
        "virgo",
        "zodiac"
      ],
      u: "264d",
      a: "0.6"
    },
    {
      n: [
        "Libra",
        "libra",
        "scales",
        "zodiac",
        "balance",
        "justice"
      ],
      u: "264e",
      a: "0.6"
    },
    {
      n: [
        "zodiac",
        "Scorpio",
        "scorpio",
        "scorpion",
        "scorpius"
      ],
      u: "264f",
      a: "0.6"
    },
    {
      n: [
        "archer",
        "zodiac",
        "Sagittarius",
        "sagittarius"
      ],
      u: "2650",
      a: "0.6"
    },
    {
      n: [
        "goat",
        "zodiac",
        "Capricorn",
        "capricorn"
      ],
      u: "2651",
      a: "0.6"
    },
    {
      n: [
        "water",
        "bearer",
        "zodiac",
        "Aquarius",
        "aquarius"
      ],
      u: "2652",
      a: "0.6"
    },
    {
      n: [
        "fish",
        "Pisces",
        "pisces",
        "zodiac"
      ],
      u: "2653",
      a: "0.6"
    },
    {
      n: [
        "snake",
        "bearer",
        "zodiac",
        "serpent",
        "Ophiuchus",
        "ophiuchus"
      ],
      u: "26ce",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "crossed",
        "shuffle tracks button"
      ],
      u: "1f500",
      a: "1"
    },
    {
      n: [
        "arrow",
        "repeat",
        "clockwise",
        "repeat button"
      ],
      u: "1f501",
      a: "1"
    },
    {
      n: [
        "once",
        "arrow",
        "clockwise",
        "repeat single button"
      ],
      u: "1f502",
      a: "1"
    },
    {
      n: [
        "play",
        "arrow",
        "right",
        "triangle",
        "play button"
      ],
      u: "25b6-fe0f",
      a: "0.6"
    },
    {
      n: [
        "fast",
        "arrow",
        "double",
        "forward",
        "fast forward button"
      ],
      u: "23e9",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "triangle",
        "next scene",
        "next track",
        "next track button"
      ],
      u: "23ed-fe0f",
      a: "0.7"
    },
    {
      n: [
        "play",
        "arrow",
        "pause",
        "right",
        "triangle",
        "play or pause button"
      ],
      u: "23ef-fe0f",
      a: "1"
    },
    {
      n: [
        "left",
        "arrow",
        "reverse",
        "triangle",
        "reverse button"
      ],
      u: "25c0-fe0f",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "double",
        "rewind",
        "fast reverse button"
      ],
      u: "23ea",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "triangle",
        "previous scene",
        "previous track",
        "last track button"
      ],
      u: "23ee-fe0f",
      a: "0.7"
    },
    {
      n: [
        "arrow",
        "button",
        "upwards button"
      ],
      u: "1f53c",
      a: "0.6"
    },
    {
      n: [
        "arrow",
        "double",
        "fast up button"
      ],
      u: "23eb",
      a: "0.6"
    },
    {
      n: [
        "down",
        "arrow",
        "button",
        "downwards button"
      ],
      u: "1f53d",
      a: "0.6"
    },
    {
      n: [
        "down",
        "arrow",
        "double",
        "fast down button"
      ],
      u: "23ec",
      a: "0.6"
    },
    {
      n: [
        "bar",
        "pause",
        "double",
        "vertical",
        "pause button"
      ],
      u: "23f8-fe0f",
      a: "0.7"
    },
    {
      n: [
        "stop",
        "square",
        "stop button"
      ],
      u: "23f9-fe0f",
      a: "0.7"
    },
    {
      n: [
        "circle",
        "record",
        "record button"
      ],
      u: "23fa-fe0f",
      a: "0.7"
    },
    {
      n: [
        "eject",
        "eject button"
      ],
      u: "23cf-fe0f",
      a: "1"
    },
    {
      n: [
        "film",
        "movie",
        "cinema",
        "camera"
      ],
      u: "1f3a6",
      a: "0.6"
    },
    {
      n: [
        "dim",
        "low",
        "dim button",
        "brightness"
      ],
      u: "1f505",
      a: "1"
    },
    {
      n: [
        "bright",
        "brightness",
        "bright button"
      ],
      u: "1f506",
      a: "1"
    },
    {
      n: [
        "bar",
        "cell",
        "phone",
        "mobile",
        "antenna",
        "antenna bars"
      ],
      u: "1f4f6",
      a: "0.6"
    },
    {
      n: [
        "wifi",
        "wi fi",
        "network",
        "wireless",
        "computer",
        "internet"
      ],
      u: "1f6dc",
      a: "15"
    },
    {
      n: [
        "cell",
        "mode",
        "phone",
        "mobile",
        "telephone",
        "vibration",
        "vibration mode"
      ],
      u: "1f4f3",
      a: "0.6"
    },
    {
      n: [
        "off",
        "cell",
        "phone",
        "mobile",
        "telephone",
        "mobile phone off"
      ],
      u: "1f4f4",
      a: "0.6"
    },
    {
      n: [
        "woman",
        "female sign"
      ],
      u: "2640-fe0f",
      a: "4"
    },
    {
      n: [
        "man",
        "male sign"
      ],
      u: "2642-fe0f",
      a: "4"
    },
    {
      n: [
        "transgender",
        "transgender symbol"
      ],
      u: "26a7-fe0f",
      a: "13"
    },
    {
      n: [
        "x",
        "×",
        "sign",
        "cancel",
        "multiply",
        "multiplication"
      ],
      u: "2716-fe0f",
      a: "0.6"
    },
    {
      n: [
        "+",
        "plus",
        "math",
        "sign"
      ],
      u: "2795",
      a: "0.6"
    },
    {
      n: [
        " ",
        "−",
        "math",
        "sign",
        "minus"
      ],
      u: "2796",
      a: "0.6"
    },
    {
      n: [
        "÷",
        "math",
        "sign",
        "divide",
        "division"
      ],
      u: "2797",
      a: "0.6"
    },
    {
      n: [
        "math",
        "equality",
        "heavy equals sign"
      ],
      u: "1f7f0",
      a: "14"
    },
    {
      n: [
        "forever",
        "infinity",
        "unbounded",
        "universal"
      ],
      u: "267e-fe0f",
      a: "11"
    },
    {
      n: [
        "!",
        "!!",
        "mark",
        "bangbang",
        "exclamation",
        "double exclamation mark"
      ],
      u: "203c-fe0f",
      a: "0.6"
    },
    {
      n: [
        "!",
        "?",
        "!?",
        "mark",
        "question",
        "exclamation",
        "interrobang",
        "punctuation",
        "exclamation question mark"
      ],
      u: "2049-fe0f",
      a: "0.6"
    },
    {
      n: [
        "?",
        "mark",
        "question",
        "punctuation",
        "red question mark"
      ],
      u: "2753",
      a: "0.6"
    },
    {
      n: [
        "?",
        "mark",
        "outlined",
        "question",
        "punctuation",
        "white question mark"
      ],
      u: "2754",
      a: "0.6"
    },
    {
      n: [
        "!",
        "mark",
        "outlined",
        "exclamation",
        "punctuation",
        "white exclamation mark"
      ],
      u: "2755",
      a: "0.6"
    },
    {
      n: [
        "!",
        "mark",
        "exclamation",
        "punctuation",
        "red exclamation mark"
      ],
      u: "2757",
      a: "0.6"
    },
    {
      n: [
        "dash",
        "wavy",
        "wavy dash",
        "punctuation"
      ],
      u: "3030-fe0f",
      a: "0.6"
    },
    {
      n: [
        "bank",
        "money",
        "currency",
        "exchange",
        "currency exchange"
      ],
      u: "1f4b1",
      a: "0.6"
    },
    {
      n: [
        "money",
        "dollar",
        "currency",
        "heavy dollar sign"
      ],
      u: "1f4b2",
      a: "0.6"
    },
    {
      n: [
        "staff",
        "medicine",
        "aesculapius",
        "medical symbol"
      ],
      u: "2695-fe0f",
      a: "4"
    },
    {
      n: [
        "recycle",
        "recycling symbol"
      ],
      u: "267b-fe0f",
      a: "0.6"
    },
    {
      n: [
        "fleur de lis"
      ],
      u: "269c-fe0f",
      a: "1"
    },
    {
      n: [
        "ship",
        "tool",
        "anchor",
        "emblem",
        "trident",
        "trident emblem"
      ],
      u: "1f531",
      a: "0.6"
    },
    {
      n: [
        "name",
        "badge",
        "name badge"
      ],
      u: "1f4db",
      a: "0.6"
    },
    {
      n: [
        "leaf",
        "chevron",
        "beginner",
        "japanese",
        "Japanese symbol for beginner",
        "japanese symbol for beginner"
      ],
      u: "1f530",
      a: "0.6"
    },
    {
      n: [
        "o",
        "red",
        "large",
        "circle",
        "hollow red circle"
      ],
      u: "2b55",
      a: "0.6"
    },
    {
      n: [
        "✓",
        "mark",
        "check",
        "button",
        "check mark button"
      ],
      u: "2705",
      a: "0.6"
    },
    {
      n: [
        "✓",
        "box",
        "check",
        "check box with check"
      ],
      u: "2611-fe0f",
      a: "0.6"
    },
    {
      n: [
        "✓",
        "mark",
        "check",
        "check mark"
      ],
      u: "2714-fe0f",
      a: "0.6"
    },
    {
      n: [
        "x",
        "×",
        "mark",
        "cross",
        "cancel",
        "multiply",
        "cross mark",
        "multiplication"
      ],
      u: "274c",
      a: "0.6"
    },
    {
      n: [
        "x",
        "×",
        "mark",
        "square",
        "cross mark button"
      ],
      u: "274e",
      a: "0.6"
    },
    {
      n: [
        "curl",
        "loop",
        "curly loop"
      ],
      u: "27b0",
      a: "0.6"
    },
    {
      n: [
        "curl",
        "loop",
        "double",
        "double curly loop"
      ],
      u: "27bf",
      a: "1"
    },
    {
      n: [
        "mark",
        "part",
        "part alternation mark"
      ],
      u: "303d-fe0f",
      a: "0.6"
    },
    {
      n: [
        "*",
        "asterisk",
        "eight spoked asterisk"
      ],
      u: "2733-fe0f",
      a: "0.6"
    },
    {
      n: [
        "*",
        "star",
        "eight pointed star"
      ],
      u: "2734-fe0f",
      a: "0.6"
    },
    {
      n: [
        "*",
        "sparkle"
      ],
      u: "2747-fe0f",
      a: "0.6"
    },
    {
      n: [
        "c",
        "copyright"
      ],
      u: "00a9-fe0f",
      a: "0.6"
    },
    {
      n: [
        "r",
        "registered"
      ],
      u: "00ae-fe0f",
      a: "0.6"
    },
    {
      n: [
        "tm",
        "mark",
        "trademark",
        "trade mark"
      ],
      u: "2122-fe0f",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: #"
      ],
      u: "0023-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: *"
      ],
      u: "002a-fe0f-20e3",
      a: "2"
    },
    {
      n: [
        "keycap",
        "keycap: 0"
      ],
      u: "0030-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 1"
      ],
      u: "0031-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 2"
      ],
      u: "0032-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 3"
      ],
      u: "0033-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 4"
      ],
      u: "0034-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 5"
      ],
      u: "0035-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 6"
      ],
      u: "0036-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 7"
      ],
      u: "0037-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 8"
      ],
      u: "0038-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 9"
      ],
      u: "0039-fe0f-20e3",
      a: "0.6"
    },
    {
      n: [
        "keycap",
        "keycap: 10"
      ],
      u: "1f51f",
      a: "0.6"
    },
    {
      n: [
        "abcd",
        "input",
        "latin",
        "letters",
        "uppercase",
        "input latin uppercase"
      ],
      u: "1f520",
      a: "0.6"
    },
    {
      n: [
        "abcd",
        "input",
        "latin",
        "letters",
        "lowercase",
        "input latin lowercase"
      ],
      u: "1f521",
      a: "0.6"
    },
    {
      n: [
        "1234",
        "input",
        "numbers",
        "input numbers"
      ],
      u: "1f522",
      a: "0.6"
    },
    {
      n: [
        "〒♪&%",
        "input",
        "input symbols"
      ],
      u: "1f523",
      a: "0.6"
    },
    {
      n: [
        "abc",
        "input",
        "latin",
        "letters",
        "alphabet",
        "input latin letters"
      ],
      u: "1f524",
      a: "0.6"
    },
    {
      n: [
        "a",
        "blood type",
        "A button (blood type)",
        "a button (blood type)"
      ],
      u: "1f170-fe0f",
      a: "0.6"
    },
    {
      n: [
        "ab",
        "blood type",
        "AB button (blood type)",
        "ab button (blood type)"
      ],
      u: "1f18e",
      a: "0.6"
    },
    {
      n: [
        "b",
        "blood type",
        "B button (blood type)",
        "b button (blood type)"
      ],
      u: "1f171-fe0f",
      a: "0.6"
    },
    {
      n: [
        "cl",
        "CL button",
        "cl button"
      ],
      u: "1f191",
      a: "0.6"
    },
    {
      n: [
        "cool",
        "COOL button",
        "cool button"
      ],
      u: "1f192",
      a: "0.6"
    },
    {
      n: [
        "free",
        "FREE button",
        "free button"
      ],
      u: "1f193",
      a: "0.6"
    },
    {
      n: [
        "i",
        "information"
      ],
      u: "2139-fe0f",
      a: "0.6"
    },
    {
      n: [
        "id",
        "identity",
        "ID button",
        "id button"
      ],
      u: "1f194",
      a: "0.6"
    },
    {
      n: [
        "m",
        "circle",
        "circled M",
        "circled m"
      ],
      u: "24c2-fe0f",
      a: "0.6"
    },
    {
      n: [
        "new",
        "NEW button",
        "new button"
      ],
      u: "1f195",
      a: "0.6"
    },
    {
      n: [
        "ng",
        "NG button",
        "ng button"
      ],
      u: "1f196",
      a: "0.6"
    },
    {
      n: [
        "o",
        "blood type",
        "O button (blood type)",
        "o button (blood type)"
      ],
      u: "1f17e-fe0f",
      a: "0.6"
    },
    {
      n: [
        "ok",
        "OK button",
        "ok button"
      ],
      u: "1f197",
      a: "0.6"
    },
    {
      n: [
        "p",
        "parking",
        "P button",
        "p button"
      ],
      u: "1f17f-fe0f",
      a: "0.6"
    },
    {
      n: [
        "sos",
        "help",
        "SOS button",
        "sos button"
      ],
      u: "1f198",
      a: "0.6"
    },
    {
      n: [
        "up",
        "up!",
        "mark",
        "UP! button",
        "up! button"
      ],
      u: "1f199",
      a: "0.6"
    },
    {
      n: [
        "vs",
        "versus",
        "VS button",
        "vs button"
      ],
      u: "1f19a",
      a: "0.6"
    },
    {
      n: [
        "ココ",
        "“here”",
        "japanese",
        "katakana",
        "Japanese “here” button",
        "japanese “here” button"
      ],
      u: "1f201",
      a: "0.6"
    },
    {
      n: [
        "サ",
        "japanese",
        "katakana",
        "“service charge”",
        "Japanese “service charge” button",
        "japanese “service charge” button"
      ],
      u: "1f202-fe0f",
      a: "0.6"
    },
    {
      n: [
        "月",
        "japanese",
        "ideograph",
        "“monthly amount”",
        "Japanese “monthly amount” button",
        "japanese “monthly amount” button"
      ],
      u: "1f237-fe0f",
      a: "0.6"
    },
    {
      n: [
        "有",
        "japanese",
        "ideograph",
        "“not free of charge”",
        "Japanese “not free of charge” button",
        "japanese “not free of charge” button"
      ],
      u: "1f236",
      a: "0.6"
    },
    {
      n: [
        "指",
        "japanese",
        "ideograph",
        "“reserved”",
        "Japanese “reserved” button",
        "japanese “reserved” button"
      ],
      u: "1f22f",
      a: "0.6"
    },
    {
      n: [
        "得",
        "japanese",
        "ideograph",
        "“bargain”",
        "Japanese “bargain” button",
        "japanese “bargain” button"
      ],
      u: "1f250",
      a: "0.6"
    },
    {
      n: [
        "割",
        "japanese",
        "ideograph",
        "“discount”",
        "Japanese “discount” button",
        "japanese “discount” button"
      ],
      u: "1f239",
      a: "0.6"
    },
    {
      n: [
        "無",
        "japanese",
        "ideograph",
        "“free of charge”",
        "Japanese “free of charge” button",
        "japanese “free of charge” button"
      ],
      u: "1f21a",
      a: "0.6"
    },
    {
      n: [
        "禁",
        "japanese",
        "ideograph",
        "“prohibited”",
        "Japanese “prohibited” button",
        "japanese “prohibited” button"
      ],
      u: "1f232",
      a: "0.6"
    },
    {
      n: [
        "可",
        "japanese",
        "ideograph",
        "“acceptable”",
        "Japanese “acceptable” button",
        "japanese “acceptable” button"
      ],
      u: "1f251",
      a: "0.6"
    },
    {
      n: [
        "申",
        "japanese",
        "ideograph",
        "“application”",
        "Japanese “application” button",
        "japanese “application” button"
      ],
      u: "1f238",
      a: "0.6"
    },
    {
      n: [
        "合",
        "japanese",
        "ideograph",
        "“passing grade”",
        "Japanese “passing grade” button",
        "japanese “passing grade” button"
      ],
      u: "1f234",
      a: "0.6"
    },
    {
      n: [
        "空",
        "japanese",
        "ideograph",
        "“vacancy”",
        "Japanese “vacancy” button",
        "japanese “vacancy” button"
      ],
      u: "1f233",
      a: "0.6"
    },
    {
      n: [
        "祝",
        "japanese",
        "ideograph",
        "“congratulations”",
        "Japanese “congratulations” button",
        "japanese “congratulations” button"
      ],
      u: "3297-fe0f",
      a: "0.6"
    },
    {
      n: [
        "秘",
        "japanese",
        "“secret”",
        "ideograph",
        "Japanese “secret” button",
        "japanese “secret” button"
      ],
      u: "3299-fe0f",
      a: "0.6"
    },
    {
      n: [
        "営",
        "japanese",
        "ideograph",
        "“open for business”",
        "Japanese “open for business” button",
        "japanese “open for business” button"
      ],
      u: "1f23a",
      a: "0.6"
    },
    {
      n: [
        "満",
        "japanese",
        "ideograph",
        "“no vacancy”",
        "Japanese “no vacancy” button",
        "japanese “no vacancy” button"
      ],
      u: "1f235",
      a: "0.6"
    },
    {
      n: [
        "red",
        "circle",
        "geometric",
        "red circle"
      ],
      u: "1f534",
      a: "0.6"
    },
    {
      n: [
        "circle",
        "orange",
        "orange circle"
      ],
      u: "1f7e0",
      a: "12"
    },
    {
      n: [
        "circle",
        "yellow",
        "yellow circle"
      ],
      u: "1f7e1",
      a: "12"
    },
    {
      n: [
        "green",
        "circle",
        "green circle"
      ],
      u: "1f7e2",
      a: "12"
    },
    {
      n: [
        "blue",
        "circle",
        "geometric",
        "blue circle"
      ],
      u: "1f535",
      a: "0.6"
    },
    {
      n: [
        "circle",
        "purple",
        "purple circle"
      ],
      u: "1f7e3",
      a: "12"
    },
    {
      n: [
        "brown",
        "circle",
        "brown circle"
      ],
      u: "1f7e4",
      a: "12"
    },
    {
      n: [
        "circle",
        "geometric",
        "black circle"
      ],
      u: "26ab",
      a: "0.6"
    },
    {
      n: [
        "circle",
        "geometric",
        "white circle"
      ],
      u: "26aa",
      a: "0.6"
    },
    {
      n: [
        "red",
        "square",
        "red square"
      ],
      u: "1f7e5",
      a: "12"
    },
    {
      n: [
        "orange",
        "square",
        "orange square"
      ],
      u: "1f7e7",
      a: "12"
    },
    {
      n: [
        "square",
        "yellow",
        "yellow square"
      ],
      u: "1f7e8",
      a: "12"
    },
    {
      n: [
        "green",
        "square",
        "green square"
      ],
      u: "1f7e9",
      a: "12"
    },
    {
      n: [
        "blue",
        "square",
        "blue square"
      ],
      u: "1f7e6",
      a: "12"
    },
    {
      n: [
        "purple",
        "square",
        "purple square"
      ],
      u: "1f7ea",
      a: "12"
    },
    {
      n: [
        "brown",
        "square",
        "brown square"
      ],
      u: "1f7eb",
      a: "12"
    },
    {
      n: [
        "square",
        "geometric",
        "black large square"
      ],
      u: "2b1b",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "white large square"
      ],
      u: "2b1c",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "black medium square"
      ],
      u: "25fc-fe0f",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "white medium square"
      ],
      u: "25fb-fe0f",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "black medium small square"
      ],
      u: "25fe",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "white medium small square"
      ],
      u: "25fd",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "black small square"
      ],
      u: "25aa-fe0f",
      a: "0.6"
    },
    {
      n: [
        "square",
        "geometric",
        "white small square"
      ],
      u: "25ab-fe0f",
      a: "0.6"
    },
    {
      n: [
        "orange",
        "diamond",
        "geometric",
        "large orange diamond"
      ],
      u: "1f536",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "diamond",
        "geometric",
        "large blue diamond"
      ],
      u: "1f537",
      a: "0.6"
    },
    {
      n: [
        "orange",
        "diamond",
        "geometric",
        "small orange diamond"
      ],
      u: "1f538",
      a: "0.6"
    },
    {
      n: [
        "blue",
        "diamond",
        "geometric",
        "small blue diamond"
      ],
      u: "1f539",
      a: "0.6"
    },
    {
      n: [
        "red",
        "geometric",
        "red triangle pointed up"
      ],
      u: "1f53a",
      a: "0.6"
    },
    {
      n: [
        "red",
        "down",
        "geometric",
        "red triangle pointed down"
      ],
      u: "1f53b",
      a: "0.6"
    },
    {
      n: [
        "comic",
        "inside",
        "diamond",
        "geometric",
        "diamond with a dot"
      ],
      u: "1f4a0",
      a: "0.6"
    },
    {
      n: [
        "radio",
        "button",
        "geometric",
        "radio button"
      ],
      u: "1f518",
      a: "0.6"
    },
    {
      n: [
        "button",
        "square",
        "outlined",
        "geometric",
        "white square button"
      ],
      u: "1f533",
      a: "0.6"
    },
    {
      n: [
        "button",
        "square",
        "geometric",
        "black square button"
      ],
      u: "1f532",
      a: "0.6"
    }
  ],
  flags: [
    {
      n: [
        "racing",
        "checkered",
        "chequered",
        "chequered flag"
      ],
      u: "1f3c1",
      a: "0.6"
    },
    {
      n: [
        "post",
        "triangular flag"
      ],
      u: "1f6a9",
      a: "0.6"
    },
    {
      n: [
        "cross",
        "crossed",
        "japanese",
        "celebration",
        "crossed flags"
      ],
      u: "1f38c",
      a: "0.6"
    },
    {
      n: [
        "waving",
        "black flag"
      ],
      u: "1f3f4",
      a: "1"
    },
    {
      n: [
        "waving",
        "white flag"
      ],
      u: "1f3f3-fe0f",
      a: "0.7"
    },
    {
      n: [
        "pride",
        "rainbow",
        "rainbow flag"
      ],
      u: "1f3f3-fe0f-200d-1f308",
      a: "4"
    },
    {
      n: [
        "flag",
        "pink",
        "white",
        "light blue",
        "transgender",
        "transgender flag"
      ],
      u: "1f3f3-fe0f-200d-26a7-fe0f",
      a: "13"
    },
    {
      n: [
        "pirate",
        "plunder",
        "treasure",
        "pirate flag",
        "jolly roger"
      ],
      u: "1f3f4-200d-2620-fe0f",
      a: "11"
    },
    {
      n: [
        "AC",
        "flag",
        "flag: Ascension Island",
        "flag: ascension island"
      ],
      u: "1f1e6-1f1e8",
      a: "2"
    },
    {
      n: [
        "AD",
        "flag",
        "flag: Andorra",
        "flag: andorra"
      ],
      u: "1f1e6-1f1e9",
      a: "2"
    },
    {
      n: [
        "AE",
        "flag",
        "flag: United Arab Emirates",
        "flag: united arab emirates"
      ],
      u: "1f1e6-1f1ea",
      a: "2"
    },
    {
      n: [
        "AF",
        "flag",
        "flag: Afghanistan",
        "flag: afghanistan"
      ],
      u: "1f1e6-1f1eb",
      a: "2"
    },
    {
      n: [
        "AG",
        "flag",
        "flag: Antigua & Barbuda",
        "flag: antigua & barbuda"
      ],
      u: "1f1e6-1f1ec",
      a: "2"
    },
    {
      n: [
        "AI",
        "flag",
        "flag: Anguilla",
        "flag: anguilla"
      ],
      u: "1f1e6-1f1ee",
      a: "2"
    },
    {
      n: [
        "AL",
        "flag",
        "flag: Albania",
        "flag: albania"
      ],
      u: "1f1e6-1f1f1",
      a: "2"
    },
    {
      n: [
        "AM",
        "flag",
        "flag: Armenia",
        "flag: armenia"
      ],
      u: "1f1e6-1f1f2",
      a: "2"
    },
    {
      n: [
        "AO",
        "flag",
        "flag: Angola",
        "flag: angola"
      ],
      u: "1f1e6-1f1f4",
      a: "2"
    },
    {
      n: [
        "AQ",
        "flag",
        "flag: Antarctica",
        "flag: antarctica"
      ],
      u: "1f1e6-1f1f6",
      a: "2"
    },
    {
      n: [
        "AR",
        "flag",
        "flag: Argentina",
        "flag: argentina"
      ],
      u: "1f1e6-1f1f7",
      a: "2"
    },
    {
      n: [
        "AS",
        "flag",
        "flag: American Samoa",
        "flag: american samoa"
      ],
      u: "1f1e6-1f1f8",
      a: "2"
    },
    {
      n: [
        "AT",
        "flag",
        "flag: Austria",
        "flag: austria"
      ],
      u: "1f1e6-1f1f9",
      a: "2"
    },
    {
      n: [
        "AU",
        "flag",
        "flag: Australia",
        "flag: australia"
      ],
      u: "1f1e6-1f1fa",
      a: "2"
    },
    {
      n: [
        "AW",
        "flag",
        "flag: Aruba",
        "flag: aruba"
      ],
      u: "1f1e6-1f1fc",
      a: "2"
    },
    {
      n: [
        "AX",
        "flag",
        "flag: Åland Islands",
        "flag: åland islands"
      ],
      u: "1f1e6-1f1fd",
      a: "2"
    },
    {
      n: [
        "AZ",
        "flag",
        "flag: Azerbaijan",
        "flag: azerbaijan"
      ],
      u: "1f1e6-1f1ff",
      a: "2"
    },
    {
      n: [
        "BA",
        "flag",
        "flag: Bosnia & Herzegovina",
        "flag: bosnia & herzegovina"
      ],
      u: "1f1e7-1f1e6",
      a: "2"
    },
    {
      n: [
        "BB",
        "flag",
        "flag: Barbados",
        "flag: barbados"
      ],
      u: "1f1e7-1f1e7",
      a: "2"
    },
    {
      n: [
        "BD",
        "flag",
        "flag: Bangladesh",
        "flag: bangladesh"
      ],
      u: "1f1e7-1f1e9",
      a: "2"
    },
    {
      n: [
        "BE",
        "flag",
        "flag: Belgium",
        "flag: belgium"
      ],
      u: "1f1e7-1f1ea",
      a: "2"
    },
    {
      n: [
        "BF",
        "flag",
        "flag: Burkina Faso",
        "flag: burkina faso"
      ],
      u: "1f1e7-1f1eb",
      a: "2"
    },
    {
      n: [
        "BG",
        "flag",
        "flag: Bulgaria",
        "flag: bulgaria"
      ],
      u: "1f1e7-1f1ec",
      a: "2"
    },
    {
      n: [
        "BH",
        "flag",
        "flag: Bahrain",
        "flag: bahrain"
      ],
      u: "1f1e7-1f1ed",
      a: "2"
    },
    {
      n: [
        "BI",
        "flag",
        "flag: Burundi",
        "flag: burundi"
      ],
      u: "1f1e7-1f1ee",
      a: "2"
    },
    {
      n: [
        "BJ",
        "flag",
        "flag: Benin",
        "flag: benin"
      ],
      u: "1f1e7-1f1ef",
      a: "2"
    },
    {
      n: [
        "BL",
        "flag",
        "flag: St. Barthélemy",
        "flag: st. barthélemy"
      ],
      u: "1f1e7-1f1f1",
      a: "2"
    },
    {
      n: [
        "BM",
        "flag",
        "flag: Bermuda",
        "flag: bermuda"
      ],
      u: "1f1e7-1f1f2",
      a: "2"
    },
    {
      n: [
        "BN",
        "flag",
        "flag: Brunei",
        "flag: brunei"
      ],
      u: "1f1e7-1f1f3",
      a: "2"
    },
    {
      n: [
        "BO",
        "flag",
        "flag: Bolivia",
        "flag: bolivia"
      ],
      u: "1f1e7-1f1f4",
      a: "2"
    },
    {
      n: [
        "BQ",
        "flag",
        "flag: Caribbean Netherlands",
        "flag: caribbean netherlands"
      ],
      u: "1f1e7-1f1f6",
      a: "2"
    },
    {
      n: [
        "BR",
        "flag",
        "flag: Brazil",
        "flag: brazil"
      ],
      u: "1f1e7-1f1f7",
      a: "2"
    },
    {
      n: [
        "BS",
        "flag",
        "flag: Bahamas",
        "flag: bahamas"
      ],
      u: "1f1e7-1f1f8",
      a: "2"
    },
    {
      n: [
        "BT",
        "flag",
        "flag: Bhutan",
        "flag: bhutan"
      ],
      u: "1f1e7-1f1f9",
      a: "2"
    },
    {
      n: [
        "BV",
        "flag",
        "flag: Bouvet Island",
        "flag: bouvet island"
      ],
      u: "1f1e7-1f1fb",
      a: "2"
    },
    {
      n: [
        "BW",
        "flag",
        "flag: Botswana",
        "flag: botswana"
      ],
      u: "1f1e7-1f1fc",
      a: "2"
    },
    {
      n: [
        "BY",
        "flag",
        "flag: Belarus",
        "flag: belarus"
      ],
      u: "1f1e7-1f1fe",
      a: "2"
    },
    {
      n: [
        "BZ",
        "flag",
        "flag: Belize",
        "flag: belize"
      ],
      u: "1f1e7-1f1ff",
      a: "2"
    },
    {
      n: [
        "CA",
        "flag",
        "flag: Canada",
        "flag: canada"
      ],
      u: "1f1e8-1f1e6",
      a: "2"
    },
    {
      n: [
        "CC",
        "flag",
        "flag: Cocos (Keeling) Islands",
        "flag: cocos (keeling) islands"
      ],
      u: "1f1e8-1f1e8",
      a: "2"
    },
    {
      n: [
        "CD",
        "flag",
        "flag: Congo   Kinshasa",
        "flag: congo   kinshasa"
      ],
      u: "1f1e8-1f1e9",
      a: "2"
    },
    {
      n: [
        "CF",
        "flag",
        "flag: Central African Republic",
        "flag: central african republic"
      ],
      u: "1f1e8-1f1eb",
      a: "2"
    },
    {
      n: [
        "CG",
        "flag",
        "flag: Congo   Brazzaville",
        "flag: congo   brazzaville"
      ],
      u: "1f1e8-1f1ec",
      a: "2"
    },
    {
      n: [
        "CH",
        "flag",
        "flag: Switzerland",
        "flag: switzerland"
      ],
      u: "1f1e8-1f1ed",
      a: "2"
    },
    {
      n: [
        "CI",
        "flag",
        "flag: Côte d’Ivoire",
        "flag: côte d’ivoire"
      ],
      u: "1f1e8-1f1ee",
      a: "2"
    },
    {
      n: [
        "CK",
        "flag",
        "flag: Cook Islands",
        "flag: cook islands"
      ],
      u: "1f1e8-1f1f0",
      a: "2"
    },
    {
      n: [
        "CL",
        "flag",
        "flag: Chile",
        "flag: chile"
      ],
      u: "1f1e8-1f1f1",
      a: "2"
    },
    {
      n: [
        "CM",
        "flag",
        "flag: Cameroon",
        "flag: cameroon"
      ],
      u: "1f1e8-1f1f2",
      a: "2"
    },
    {
      n: [
        "CN",
        "flag",
        "flag: China",
        "flag: china"
      ],
      u: "1f1e8-1f1f3",
      a: "0.6"
    },
    {
      n: [
        "CO",
        "flag",
        "flag: Colombia",
        "flag: colombia"
      ],
      u: "1f1e8-1f1f4",
      a: "2"
    },
    {
      n: [
        "CP",
        "flag",
        "flag: Clipperton Island",
        "flag: clipperton island"
      ],
      u: "1f1e8-1f1f5",
      a: "2"
    },
    {
      n: [
        "CR",
        "flag",
        "flag: Costa Rica",
        "flag: costa rica"
      ],
      u: "1f1e8-1f1f7",
      a: "2"
    },
    {
      n: [
        "CU",
        "flag",
        "flag: Cuba",
        "flag: cuba"
      ],
      u: "1f1e8-1f1fa",
      a: "2"
    },
    {
      n: [
        "CV",
        "flag",
        "flag: Cape Verde",
        "flag: cape verde"
      ],
      u: "1f1e8-1f1fb",
      a: "2"
    },
    {
      n: [
        "CW",
        "flag",
        "flag: Curaçao",
        "flag: curaçao"
      ],
      u: "1f1e8-1f1fc",
      a: "2"
    },
    {
      n: [
        "CX",
        "flag",
        "flag: Christmas Island",
        "flag: christmas island"
      ],
      u: "1f1e8-1f1fd",
      a: "2"
    },
    {
      n: [
        "CY",
        "flag",
        "flag: Cyprus",
        "flag: cyprus"
      ],
      u: "1f1e8-1f1fe",
      a: "2"
    },
    {
      n: [
        "CZ",
        "flag",
        "flag: Czechia",
        "flag: czechia"
      ],
      u: "1f1e8-1f1ff",
      a: "2"
    },
    {
      n: [
        "DE",
        "flag",
        "flag: Germany",
        "flag: germany"
      ],
      u: "1f1e9-1f1ea",
      a: "0.6"
    },
    {
      n: [
        "DG",
        "flag",
        "flag: Diego Garcia",
        "flag: diego garcia"
      ],
      u: "1f1e9-1f1ec",
      a: "2"
    },
    {
      n: [
        "DJ",
        "flag",
        "flag: Djibouti",
        "flag: djibouti"
      ],
      u: "1f1e9-1f1ef",
      a: "2"
    },
    {
      n: [
        "DK",
        "flag",
        "flag: Denmark",
        "flag: denmark"
      ],
      u: "1f1e9-1f1f0",
      a: "2"
    },
    {
      n: [
        "DM",
        "flag",
        "flag: Dominica",
        "flag: dominica"
      ],
      u: "1f1e9-1f1f2",
      a: "2"
    },
    {
      n: [
        "DO",
        "flag",
        "flag: Dominican Republic",
        "flag: dominican republic"
      ],
      u: "1f1e9-1f1f4",
      a: "2"
    },
    {
      n: [
        "DZ",
        "flag",
        "flag: Algeria",
        "flag: algeria"
      ],
      u: "1f1e9-1f1ff",
      a: "2"
    },
    {
      n: [
        "EA",
        "flag",
        "flag: Ceuta & Melilla",
        "flag: ceuta & melilla"
      ],
      u: "1f1ea-1f1e6",
      a: "2"
    },
    {
      n: [
        "EC",
        "flag",
        "flag: Ecuador",
        "flag: ecuador"
      ],
      u: "1f1ea-1f1e8",
      a: "2"
    },
    {
      n: [
        "EE",
        "flag",
        "flag: Estonia",
        "flag: estonia"
      ],
      u: "1f1ea-1f1ea",
      a: "2"
    },
    {
      n: [
        "EG",
        "flag",
        "flag: Egypt",
        "flag: egypt"
      ],
      u: "1f1ea-1f1ec",
      a: "2"
    },
    {
      n: [
        "EH",
        "flag",
        "flag: Western Sahara",
        "flag: western sahara"
      ],
      u: "1f1ea-1f1ed",
      a: "2"
    },
    {
      n: [
        "ER",
        "flag",
        "flag: Eritrea",
        "flag: eritrea"
      ],
      u: "1f1ea-1f1f7",
      a: "2"
    },
    {
      n: [
        "ES",
        "flag",
        "flag: Spain",
        "flag: spain"
      ],
      u: "1f1ea-1f1f8",
      a: "0.6"
    },
    {
      n: [
        "ET",
        "flag",
        "flag: Ethiopia",
        "flag: ethiopia"
      ],
      u: "1f1ea-1f1f9",
      a: "2"
    },
    {
      n: [
        "EU",
        "flag",
        "flag: European Union",
        "flag: european union"
      ],
      u: "1f1ea-1f1fa",
      a: "2"
    },
    {
      n: [
        "FI",
        "flag",
        "flag: Finland",
        "flag: finland"
      ],
      u: "1f1eb-1f1ee",
      a: "2"
    },
    {
      n: [
        "FJ",
        "flag",
        "flag: Fiji",
        "flag: fiji"
      ],
      u: "1f1eb-1f1ef",
      a: "2"
    },
    {
      n: [
        "FK",
        "flag",
        "flag: Falkland Islands",
        "flag: falkland islands"
      ],
      u: "1f1eb-1f1f0",
      a: "2"
    },
    {
      n: [
        "FM",
        "flag",
        "flag: Micronesia",
        "flag: micronesia"
      ],
      u: "1f1eb-1f1f2",
      a: "2"
    },
    {
      n: [
        "FO",
        "flag",
        "flag: Faroe Islands",
        "flag: faroe islands"
      ],
      u: "1f1eb-1f1f4",
      a: "2"
    },
    {
      n: [
        "FR",
        "flag",
        "flag: France",
        "flag: france"
      ],
      u: "1f1eb-1f1f7",
      a: "0.6"
    },
    {
      n: [
        "GA",
        "flag",
        "flag: Gabon",
        "flag: gabon"
      ],
      u: "1f1ec-1f1e6",
      a: "2"
    },
    {
      n: [
        "GB",
        "flag",
        "flag: United Kingdom",
        "flag: united kingdom"
      ],
      u: "1f1ec-1f1e7",
      a: "0.6"
    },
    {
      n: [
        "GD",
        "flag",
        "flag: Grenada",
        "flag: grenada"
      ],
      u: "1f1ec-1f1e9",
      a: "2"
    },
    {
      n: [
        "GE",
        "flag",
        "flag: Georgia",
        "flag: georgia"
      ],
      u: "1f1ec-1f1ea",
      a: "2"
    },
    {
      n: [
        "GF",
        "flag",
        "flag: French Guiana",
        "flag: french guiana"
      ],
      u: "1f1ec-1f1eb",
      a: "2"
    },
    {
      n: [
        "GG",
        "flag",
        "flag: Guernsey",
        "flag: guernsey"
      ],
      u: "1f1ec-1f1ec",
      a: "2"
    },
    {
      n: [
        "GH",
        "flag",
        "flag: Ghana",
        "flag: ghana"
      ],
      u: "1f1ec-1f1ed",
      a: "2"
    },
    {
      n: [
        "GI",
        "flag",
        "flag: Gibraltar",
        "flag: gibraltar"
      ],
      u: "1f1ec-1f1ee",
      a: "2"
    },
    {
      n: [
        "GL",
        "flag",
        "flag: Greenland",
        "flag: greenland"
      ],
      u: "1f1ec-1f1f1",
      a: "2"
    },
    {
      n: [
        "GM",
        "flag",
        "flag: Gambia",
        "flag: gambia"
      ],
      u: "1f1ec-1f1f2",
      a: "2"
    },
    {
      n: [
        "GN",
        "flag",
        "flag: Guinea",
        "flag: guinea"
      ],
      u: "1f1ec-1f1f3",
      a: "2"
    },
    {
      n: [
        "GP",
        "flag",
        "flag: Guadeloupe",
        "flag: guadeloupe"
      ],
      u: "1f1ec-1f1f5",
      a: "2"
    },
    {
      n: [
        "GQ",
        "flag",
        "flag: Equatorial Guinea",
        "flag: equatorial guinea"
      ],
      u: "1f1ec-1f1f6",
      a: "2"
    },
    {
      n: [
        "GR",
        "flag",
        "flag: Greece",
        "flag: greece"
      ],
      u: "1f1ec-1f1f7",
      a: "2"
    },
    {
      n: [
        "GS",
        "flag",
        "flag: South Georgia & South Sandwich Islands",
        "flag: south georgia & south sandwich islands"
      ],
      u: "1f1ec-1f1f8",
      a: "2"
    },
    {
      n: [
        "GT",
        "flag",
        "flag: Guatemala",
        "flag: guatemala"
      ],
      u: "1f1ec-1f1f9",
      a: "2"
    },
    {
      n: [
        "GU",
        "flag",
        "flag: Guam",
        "flag: guam"
      ],
      u: "1f1ec-1f1fa",
      a: "2"
    },
    {
      n: [
        "GW",
        "flag",
        "flag: Guinea Bissau",
        "flag: guinea bissau"
      ],
      u: "1f1ec-1f1fc",
      a: "2"
    },
    {
      n: [
        "GY",
        "flag",
        "flag: Guyana",
        "flag: guyana"
      ],
      u: "1f1ec-1f1fe",
      a: "2"
    },
    {
      n: [
        "HK",
        "flag",
        "flag: Hong Kong SAR China",
        "flag: hong kong sar china"
      ],
      u: "1f1ed-1f1f0",
      a: "2"
    },
    {
      n: [
        "HM",
        "flag",
        "flag: Heard & McDonald Islands",
        "flag: heard & mcdonald islands"
      ],
      u: "1f1ed-1f1f2",
      a: "2"
    },
    {
      n: [
        "HN",
        "flag",
        "flag: Honduras",
        "flag: honduras"
      ],
      u: "1f1ed-1f1f3",
      a: "2"
    },
    {
      n: [
        "HR",
        "flag",
        "flag: Croatia",
        "flag: croatia"
      ],
      u: "1f1ed-1f1f7",
      a: "2"
    },
    {
      n: [
        "HT",
        "flag",
        "flag: Haiti",
        "flag: haiti"
      ],
      u: "1f1ed-1f1f9",
      a: "2"
    },
    {
      n: [
        "HU",
        "flag",
        "flag: Hungary",
        "flag: hungary"
      ],
      u: "1f1ed-1f1fa",
      a: "2"
    },
    {
      n: [
        "IC",
        "flag",
        "flag: Canary Islands",
        "flag: canary islands"
      ],
      u: "1f1ee-1f1e8",
      a: "2"
    },
    {
      n: [
        "ID",
        "flag",
        "flag: Indonesia",
        "flag: indonesia"
      ],
      u: "1f1ee-1f1e9",
      a: "2"
    },
    {
      n: [
        "IE",
        "flag",
        "flag: Ireland",
        "flag: ireland"
      ],
      u: "1f1ee-1f1ea",
      a: "2"
    },
    {
      n: [
        "IL",
        "flag",
        "flag: Israel",
        "flag: israel"
      ],
      u: "1f1ee-1f1f1",
      a: "2"
    },
    {
      n: [
        "IM",
        "flag",
        "flag: Isle of Man",
        "flag: isle of man"
      ],
      u: "1f1ee-1f1f2",
      a: "2"
    },
    {
      n: [
        "IN",
        "flag",
        "flag: India",
        "flag: india"
      ],
      u: "1f1ee-1f1f3",
      a: "2"
    },
    {
      n: [
        "IO",
        "flag",
        "flag: British Indian Ocean Territory",
        "flag: british indian ocean territory"
      ],
      u: "1f1ee-1f1f4",
      a: "2"
    },
    {
      n: [
        "IQ",
        "flag",
        "flag: Iraq",
        "flag: iraq"
      ],
      u: "1f1ee-1f1f6",
      a: "2"
    },
    {
      n: [
        "IR",
        "flag",
        "flag: Iran",
        "flag: iran"
      ],
      u: "1f1ee-1f1f7",
      a: "2"
    },
    {
      n: [
        "IS",
        "flag",
        "flag: Iceland",
        "flag: iceland"
      ],
      u: "1f1ee-1f1f8",
      a: "2"
    },
    {
      n: [
        "IT",
        "flag",
        "flag: Italy",
        "flag: italy"
      ],
      u: "1f1ee-1f1f9",
      a: "0.6"
    },
    {
      n: [
        "JE",
        "flag",
        "flag: Jersey",
        "flag: jersey"
      ],
      u: "1f1ef-1f1ea",
      a: "2"
    },
    {
      n: [
        "JM",
        "flag",
        "flag: Jamaica",
        "flag: jamaica"
      ],
      u: "1f1ef-1f1f2",
      a: "2"
    },
    {
      n: [
        "JO",
        "flag",
        "flag: Jordan",
        "flag: jordan"
      ],
      u: "1f1ef-1f1f4",
      a: "2"
    },
    {
      n: [
        "JP",
        "flag",
        "flag: Japan",
        "flag: japan"
      ],
      u: "1f1ef-1f1f5",
      a: "0.6"
    },
    {
      n: [
        "KE",
        "flag",
        "flag: Kenya",
        "flag: kenya"
      ],
      u: "1f1f0-1f1ea",
      a: "2"
    },
    {
      n: [
        "KG",
        "flag",
        "flag: Kyrgyzstan",
        "flag: kyrgyzstan"
      ],
      u: "1f1f0-1f1ec",
      a: "2"
    },
    {
      n: [
        "KH",
        "flag",
        "flag: Cambodia",
        "flag: cambodia"
      ],
      u: "1f1f0-1f1ed",
      a: "2"
    },
    {
      n: [
        "KI",
        "flag",
        "flag: Kiribati",
        "flag: kiribati"
      ],
      u: "1f1f0-1f1ee",
      a: "2"
    },
    {
      n: [
        "KM",
        "flag",
        "flag: Comoros",
        "flag: comoros"
      ],
      u: "1f1f0-1f1f2",
      a: "2"
    },
    {
      n: [
        "KN",
        "flag",
        "flag: St. Kitts & Nevis",
        "flag: st. kitts & nevis"
      ],
      u: "1f1f0-1f1f3",
      a: "2"
    },
    {
      n: [
        "KP",
        "flag",
        "flag: North Korea",
        "flag: north korea"
      ],
      u: "1f1f0-1f1f5",
      a: "2"
    },
    {
      n: [
        "KR",
        "flag",
        "flag: South Korea",
        "flag: south korea"
      ],
      u: "1f1f0-1f1f7",
      a: "0.6"
    },
    {
      n: [
        "KW",
        "flag",
        "flag: Kuwait",
        "flag: kuwait"
      ],
      u: "1f1f0-1f1fc",
      a: "2"
    },
    {
      n: [
        "KY",
        "flag",
        "flag: Cayman Islands",
        "flag: cayman islands"
      ],
      u: "1f1f0-1f1fe",
      a: "2"
    },
    {
      n: [
        "KZ",
        "flag",
        "flag: Kazakhstan",
        "flag: kazakhstan"
      ],
      u: "1f1f0-1f1ff",
      a: "2"
    },
    {
      n: [
        "LA",
        "flag",
        "flag: Laos",
        "flag: laos"
      ],
      u: "1f1f1-1f1e6",
      a: "2"
    },
    {
      n: [
        "LB",
        "flag",
        "flag: Lebanon",
        "flag: lebanon"
      ],
      u: "1f1f1-1f1e7",
      a: "2"
    },
    {
      n: [
        "LC",
        "flag",
        "flag: St. Lucia",
        "flag: st. lucia"
      ],
      u: "1f1f1-1f1e8",
      a: "2"
    },
    {
      n: [
        "LI",
        "flag",
        "flag: Liechtenstein",
        "flag: liechtenstein"
      ],
      u: "1f1f1-1f1ee",
      a: "2"
    },
    {
      n: [
        "LK",
        "flag",
        "flag: Sri Lanka",
        "flag: sri lanka"
      ],
      u: "1f1f1-1f1f0",
      a: "2"
    },
    {
      n: [
        "LR",
        "flag",
        "flag: Liberia",
        "flag: liberia"
      ],
      u: "1f1f1-1f1f7",
      a: "2"
    },
    {
      n: [
        "LS",
        "flag",
        "flag: Lesotho",
        "flag: lesotho"
      ],
      u: "1f1f1-1f1f8",
      a: "2"
    },
    {
      n: [
        "LT",
        "flag",
        "flag: Lithuania",
        "flag: lithuania"
      ],
      u: "1f1f1-1f1f9",
      a: "2"
    },
    {
      n: [
        "LU",
        "flag",
        "flag: Luxembourg",
        "flag: luxembourg"
      ],
      u: "1f1f1-1f1fa",
      a: "2"
    },
    {
      n: [
        "LV",
        "flag",
        "flag: Latvia",
        "flag: latvia"
      ],
      u: "1f1f1-1f1fb",
      a: "2"
    },
    {
      n: [
        "LY",
        "flag",
        "flag: Libya",
        "flag: libya"
      ],
      u: "1f1f1-1f1fe",
      a: "2"
    },
    {
      n: [
        "MA",
        "flag",
        "flag: Morocco",
        "flag: morocco"
      ],
      u: "1f1f2-1f1e6",
      a: "2"
    },
    {
      n: [
        "MC",
        "flag",
        "flag: Monaco",
        "flag: monaco"
      ],
      u: "1f1f2-1f1e8",
      a: "2"
    },
    {
      n: [
        "MD",
        "flag",
        "flag: Moldova",
        "flag: moldova"
      ],
      u: "1f1f2-1f1e9",
      a: "2"
    },
    {
      n: [
        "ME",
        "flag",
        "flag: Montenegro",
        "flag: montenegro"
      ],
      u: "1f1f2-1f1ea",
      a: "2"
    },
    {
      n: [
        "MF",
        "flag",
        "flag: St. Martin",
        "flag: st. martin"
      ],
      u: "1f1f2-1f1eb",
      a: "2"
    },
    {
      n: [
        "MG",
        "flag",
        "flag: Madagascar",
        "flag: madagascar"
      ],
      u: "1f1f2-1f1ec",
      a: "2"
    },
    {
      n: [
        "MH",
        "flag",
        "flag: Marshall Islands",
        "flag: marshall islands"
      ],
      u: "1f1f2-1f1ed",
      a: "2"
    },
    {
      n: [
        "MK",
        "flag",
        "flag: North Macedonia",
        "flag: north macedonia"
      ],
      u: "1f1f2-1f1f0",
      a: "2"
    },
    {
      n: [
        "ML",
        "flag",
        "flag: Mali",
        "flag: mali"
      ],
      u: "1f1f2-1f1f1",
      a: "2"
    },
    {
      n: [
        "MM",
        "flag",
        "flag: Myanmar (Burma)",
        "flag: myanmar (burma)"
      ],
      u: "1f1f2-1f1f2",
      a: "2"
    },
    {
      n: [
        "MN",
        "flag",
        "flag: Mongolia",
        "flag: mongolia"
      ],
      u: "1f1f2-1f1f3",
      a: "2"
    },
    {
      n: [
        "MO",
        "flag",
        "flag: Macao SAR China",
        "flag: macao sar china"
      ],
      u: "1f1f2-1f1f4",
      a: "2"
    },
    {
      n: [
        "MP",
        "flag",
        "flag: Northern Mariana Islands",
        "flag: northern mariana islands"
      ],
      u: "1f1f2-1f1f5",
      a: "2"
    },
    {
      n: [
        "MQ",
        "flag",
        "flag: Martinique",
        "flag: martinique"
      ],
      u: "1f1f2-1f1f6",
      a: "2"
    },
    {
      n: [
        "MR",
        "flag",
        "flag: Mauritania",
        "flag: mauritania"
      ],
      u: "1f1f2-1f1f7",
      a: "2"
    },
    {
      n: [
        "MS",
        "flag",
        "flag: Montserrat",
        "flag: montserrat"
      ],
      u: "1f1f2-1f1f8",
      a: "2"
    },
    {
      n: [
        "MT",
        "flag",
        "flag: Malta",
        "flag: malta"
      ],
      u: "1f1f2-1f1f9",
      a: "2"
    },
    {
      n: [
        "MU",
        "flag",
        "flag: Mauritius",
        "flag: mauritius"
      ],
      u: "1f1f2-1f1fa",
      a: "2"
    },
    {
      n: [
        "MV",
        "flag",
        "flag: Maldives",
        "flag: maldives"
      ],
      u: "1f1f2-1f1fb",
      a: "2"
    },
    {
      n: [
        "MW",
        "flag",
        "flag: Malawi",
        "flag: malawi"
      ],
      u: "1f1f2-1f1fc",
      a: "2"
    },
    {
      n: [
        "MX",
        "flag",
        "flag: Mexico",
        "flag: mexico"
      ],
      u: "1f1f2-1f1fd",
      a: "2"
    },
    {
      n: [
        "MY",
        "flag",
        "flag: Malaysia",
        "flag: malaysia"
      ],
      u: "1f1f2-1f1fe",
      a: "2"
    },
    {
      n: [
        "MZ",
        "flag",
        "flag: Mozambique",
        "flag: mozambique"
      ],
      u: "1f1f2-1f1ff",
      a: "2"
    },
    {
      n: [
        "NA",
        "flag",
        "flag: Namibia",
        "flag: namibia"
      ],
      u: "1f1f3-1f1e6",
      a: "2"
    },
    {
      n: [
        "NC",
        "flag",
        "flag: New Caledonia",
        "flag: new caledonia"
      ],
      u: "1f1f3-1f1e8",
      a: "2"
    },
    {
      n: [
        "NE",
        "flag",
        "flag: Niger",
        "flag: niger"
      ],
      u: "1f1f3-1f1ea",
      a: "2"
    },
    {
      n: [
        "NF",
        "flag",
        "flag: Norfolk Island",
        "flag: norfolk island"
      ],
      u: "1f1f3-1f1eb",
      a: "2"
    },
    {
      n: [
        "NG",
        "flag",
        "flag: Nigeria",
        "flag: nigeria"
      ],
      u: "1f1f3-1f1ec",
      a: "2"
    },
    {
      n: [
        "NI",
        "flag",
        "flag: Nicaragua",
        "flag: nicaragua"
      ],
      u: "1f1f3-1f1ee",
      a: "2"
    },
    {
      n: [
        "NL",
        "flag",
        "flag: Netherlands",
        "flag: netherlands"
      ],
      u: "1f1f3-1f1f1",
      a: "2"
    },
    {
      n: [
        "NO",
        "flag",
        "flag: Norway",
        "flag: norway"
      ],
      u: "1f1f3-1f1f4",
      a: "2"
    },
    {
      n: [
        "NP",
        "flag",
        "flag: Nepal",
        "flag: nepal"
      ],
      u: "1f1f3-1f1f5",
      a: "2"
    },
    {
      n: [
        "NR",
        "flag",
        "flag: Nauru",
        "flag: nauru"
      ],
      u: "1f1f3-1f1f7",
      a: "2"
    },
    {
      n: [
        "NU",
        "flag",
        "flag: Niue",
        "flag: niue"
      ],
      u: "1f1f3-1f1fa",
      a: "2"
    },
    {
      n: [
        "NZ",
        "flag",
        "flag: New Zealand",
        "flag: new zealand"
      ],
      u: "1f1f3-1f1ff",
      a: "2"
    },
    {
      n: [
        "OM",
        "flag",
        "flag: Oman",
        "flag: oman"
      ],
      u: "1f1f4-1f1f2",
      a: "2"
    },
    {
      n: [
        "PA",
        "flag",
        "flag: Panama",
        "flag: panama"
      ],
      u: "1f1f5-1f1e6",
      a: "2"
    },
    {
      n: [
        "PE",
        "flag",
        "flag: Peru",
        "flag: peru"
      ],
      u: "1f1f5-1f1ea",
      a: "2"
    },
    {
      n: [
        "PF",
        "flag",
        "flag: French Polynesia",
        "flag: french polynesia"
      ],
      u: "1f1f5-1f1eb",
      a: "2"
    },
    {
      n: [
        "PG",
        "flag",
        "flag: Papua New Guinea",
        "flag: papua new guinea"
      ],
      u: "1f1f5-1f1ec",
      a: "2"
    },
    {
      n: [
        "PH",
        "flag",
        "flag: Philippines",
        "flag: philippines"
      ],
      u: "1f1f5-1f1ed",
      a: "2"
    },
    {
      n: [
        "PK",
        "flag",
        "flag: Pakistan",
        "flag: pakistan"
      ],
      u: "1f1f5-1f1f0",
      a: "2"
    },
    {
      n: [
        "PL",
        "flag",
        "flag: Poland",
        "flag: poland"
      ],
      u: "1f1f5-1f1f1",
      a: "2"
    },
    {
      n: [
        "PM",
        "flag",
        "flag: St. Pierre & Miquelon",
        "flag: st. pierre & miquelon"
      ],
      u: "1f1f5-1f1f2",
      a: "2"
    },
    {
      n: [
        "PN",
        "flag",
        "flag: Pitcairn Islands",
        "flag: pitcairn islands"
      ],
      u: "1f1f5-1f1f3",
      a: "2"
    },
    {
      n: [
        "PR",
        "flag",
        "flag: Puerto Rico",
        "flag: puerto rico"
      ],
      u: "1f1f5-1f1f7",
      a: "2"
    },
    {
      n: [
        "PS",
        "flag",
        "flag: Palestinian Territories",
        "flag: palestinian territories"
      ],
      u: "1f1f5-1f1f8",
      a: "2"
    },
    {
      n: [
        "PT",
        "flag",
        "flag: Portugal",
        "flag: portugal"
      ],
      u: "1f1f5-1f1f9",
      a: "2"
    },
    {
      n: [
        "PW",
        "flag",
        "flag: Palau",
        "flag: palau"
      ],
      u: "1f1f5-1f1fc",
      a: "2"
    },
    {
      n: [
        "PY",
        "flag",
        "flag: Paraguay",
        "flag: paraguay"
      ],
      u: "1f1f5-1f1fe",
      a: "2"
    },
    {
      n: [
        "QA",
        "flag",
        "flag: Qatar",
        "flag: qatar"
      ],
      u: "1f1f6-1f1e6",
      a: "2"
    },
    {
      n: [
        "RE",
        "flag",
        "flag: Réunion",
        "flag: réunion"
      ],
      u: "1f1f7-1f1ea",
      a: "2"
    },
    {
      n: [
        "RO",
        "flag",
        "flag: Romania",
        "flag: romania"
      ],
      u: "1f1f7-1f1f4",
      a: "2"
    },
    {
      n: [
        "RS",
        "flag",
        "flag: Serbia",
        "flag: serbia"
      ],
      u: "1f1f7-1f1f8",
      a: "2"
    },
    {
      n: [
        "RU",
        "flag",
        "flag: Russia",
        "flag: russia"
      ],
      u: "1f1f7-1f1fa",
      a: "0.6"
    },
    {
      n: [
        "RW",
        "flag",
        "flag: Rwanda",
        "flag: rwanda"
      ],
      u: "1f1f7-1f1fc",
      a: "2"
    },
    {
      n: [
        "SA",
        "flag",
        "flag: Saudi Arabia",
        "flag: saudi arabia"
      ],
      u: "1f1f8-1f1e6",
      a: "2"
    },
    {
      n: [
        "SB",
        "flag",
        "flag: Solomon Islands",
        "flag: solomon islands"
      ],
      u: "1f1f8-1f1e7",
      a: "2"
    },
    {
      n: [
        "SC",
        "flag",
        "flag: Seychelles",
        "flag: seychelles"
      ],
      u: "1f1f8-1f1e8",
      a: "2"
    },
    {
      n: [
        "SD",
        "flag",
        "flag: Sudan",
        "flag: sudan"
      ],
      u: "1f1f8-1f1e9",
      a: "2"
    },
    {
      n: [
        "SE",
        "flag",
        "flag: Sweden",
        "flag: sweden"
      ],
      u: "1f1f8-1f1ea",
      a: "2"
    },
    {
      n: [
        "SG",
        "flag",
        "flag: Singapore",
        "flag: singapore"
      ],
      u: "1f1f8-1f1ec",
      a: "2"
    },
    {
      n: [
        "SH",
        "flag",
        "flag: St. Helena",
        "flag: st. helena"
      ],
      u: "1f1f8-1f1ed",
      a: "2"
    },
    {
      n: [
        "SI",
        "flag",
        "flag: Slovenia",
        "flag: slovenia"
      ],
      u: "1f1f8-1f1ee",
      a: "2"
    },
    {
      n: [
        "SJ",
        "flag",
        "flag: Svalbard & Jan Mayen",
        "flag: svalbard & jan mayen"
      ],
      u: "1f1f8-1f1ef",
      a: "2"
    },
    {
      n: [
        "SK",
        "flag",
        "flag: Slovakia",
        "flag: slovakia"
      ],
      u: "1f1f8-1f1f0",
      a: "2"
    },
    {
      n: [
        "SL",
        "flag",
        "flag: Sierra Leone",
        "flag: sierra leone"
      ],
      u: "1f1f8-1f1f1",
      a: "2"
    },
    {
      n: [
        "SM",
        "flag",
        "flag: San Marino",
        "flag: san marino"
      ],
      u: "1f1f8-1f1f2",
      a: "2"
    },
    {
      n: [
        "SN",
        "flag",
        "flag: Senegal",
        "flag: senegal"
      ],
      u: "1f1f8-1f1f3",
      a: "2"
    },
    {
      n: [
        "SO",
        "flag",
        "flag: Somalia",
        "flag: somalia"
      ],
      u: "1f1f8-1f1f4",
      a: "2"
    },
    {
      n: [
        "SR",
        "flag",
        "flag: Suriname",
        "flag: suriname"
      ],
      u: "1f1f8-1f1f7",
      a: "2"
    },
    {
      n: [
        "SS",
        "flag",
        "flag: South Sudan",
        "flag: south sudan"
      ],
      u: "1f1f8-1f1f8",
      a: "2"
    },
    {
      n: [
        "ST",
        "flag",
        "flag: São Tomé & Príncipe",
        "flag: são tomé & príncipe"
      ],
      u: "1f1f8-1f1f9",
      a: "2"
    },
    {
      n: [
        "SV",
        "flag",
        "flag: El Salvador",
        "flag: el salvador"
      ],
      u: "1f1f8-1f1fb",
      a: "2"
    },
    {
      n: [
        "SX",
        "flag",
        "flag: Sint Maarten",
        "flag: sint maarten"
      ],
      u: "1f1f8-1f1fd",
      a: "2"
    },
    {
      n: [
        "SY",
        "flag",
        "flag: Syria",
        "flag: syria"
      ],
      u: "1f1f8-1f1fe",
      a: "2"
    },
    {
      n: [
        "SZ",
        "flag",
        "flag: Eswatini",
        "flag: eswatini"
      ],
      u: "1f1f8-1f1ff",
      a: "2"
    },
    {
      n: [
        "TA",
        "flag",
        "flag: Tristan da Cunha",
        "flag: tristan da cunha"
      ],
      u: "1f1f9-1f1e6",
      a: "2"
    },
    {
      n: [
        "TC",
        "flag",
        "flag: Turks & Caicos Islands",
        "flag: turks & caicos islands"
      ],
      u: "1f1f9-1f1e8",
      a: "2"
    },
    {
      n: [
        "TD",
        "flag",
        "flag: Chad",
        "flag: chad"
      ],
      u: "1f1f9-1f1e9",
      a: "2"
    },
    {
      n: [
        "TF",
        "flag",
        "flag: French Southern Territories",
        "flag: french southern territories"
      ],
      u: "1f1f9-1f1eb",
      a: "2"
    },
    {
      n: [
        "TG",
        "flag",
        "flag: Togo",
        "flag: togo"
      ],
      u: "1f1f9-1f1ec",
      a: "2"
    },
    {
      n: [
        "TH",
        "flag",
        "flag: Thailand",
        "flag: thailand"
      ],
      u: "1f1f9-1f1ed",
      a: "2"
    },
    {
      n: [
        "TJ",
        "flag",
        "flag: Tajikistan",
        "flag: tajikistan"
      ],
      u: "1f1f9-1f1ef",
      a: "2"
    },
    {
      n: [
        "TK",
        "flag",
        "flag: Tokelau",
        "flag: tokelau"
      ],
      u: "1f1f9-1f1f0",
      a: "2"
    },
    {
      n: [
        "TL",
        "flag",
        "flag: Timor Leste",
        "flag: timor leste"
      ],
      u: "1f1f9-1f1f1",
      a: "2"
    },
    {
      n: [
        "TM",
        "flag",
        "flag: Turkmenistan",
        "flag: turkmenistan"
      ],
      u: "1f1f9-1f1f2",
      a: "2"
    },
    {
      n: [
        "TN",
        "flag",
        "flag: Tunisia",
        "flag: tunisia"
      ],
      u: "1f1f9-1f1f3",
      a: "2"
    },
    {
      n: [
        "TO",
        "flag",
        "flag: Tonga",
        "flag: tonga"
      ],
      u: "1f1f9-1f1f4",
      a: "2"
    },
    {
      n: [
        "TR",
        "flag",
        "flag: Türkiye",
        "flag: türkiye"
      ],
      u: "1f1f9-1f1f7",
      a: "2"
    },
    {
      n: [
        "TT",
        "flag",
        "flag: Trinidad & Tobago",
        "flag: trinidad & tobago"
      ],
      u: "1f1f9-1f1f9",
      a: "2"
    },
    {
      n: [
        "TV",
        "flag",
        "flag: Tuvalu",
        "flag: tuvalu"
      ],
      u: "1f1f9-1f1fb",
      a: "2"
    },
    {
      n: [
        "TW",
        "flag",
        "flag: Taiwan",
        "flag: taiwan"
      ],
      u: "1f1f9-1f1fc",
      a: "2"
    },
    {
      n: [
        "TZ",
        "flag",
        "flag: Tanzania",
        "flag: tanzania"
      ],
      u: "1f1f9-1f1ff",
      a: "2"
    },
    {
      n: [
        "UA",
        "flag",
        "flag: Ukraine",
        "flag: ukraine"
      ],
      u: "1f1fa-1f1e6",
      a: "2"
    },
    {
      n: [
        "UG",
        "flag",
        "flag: Uganda",
        "flag: uganda"
      ],
      u: "1f1fa-1f1ec",
      a: "2"
    },
    {
      n: [
        "UM",
        "flag",
        "flag: U.S. Outlying Islands",
        "flag: u.s. outlying islands"
      ],
      u: "1f1fa-1f1f2",
      a: "2"
    },
    {
      n: [
        "UN",
        "flag",
        "flag: United Nations",
        "flag: united nations"
      ],
      u: "1f1fa-1f1f3",
      a: "4"
    },
    {
      n: [
        "US",
        "flag",
        "flag: United States",
        "flag: united states"
      ],
      u: "1f1fa-1f1f8",
      a: "0.6"
    },
    {
      n: [
        "UY",
        "flag",
        "flag: Uruguay",
        "flag: uruguay"
      ],
      u: "1f1fa-1f1fe",
      a: "2"
    },
    {
      n: [
        "UZ",
        "flag",
        "flag: Uzbekistan",
        "flag: uzbekistan"
      ],
      u: "1f1fa-1f1ff",
      a: "2"
    },
    {
      n: [
        "VA",
        "flag",
        "flag: Vatican City",
        "flag: vatican city"
      ],
      u: "1f1fb-1f1e6",
      a: "2"
    },
    {
      n: [
        "VC",
        "flag",
        "flag: St. Vincent & Grenadines",
        "flag: st. vincent & grenadines"
      ],
      u: "1f1fb-1f1e8",
      a: "2"
    },
    {
      n: [
        "VE",
        "flag",
        "flag: Venezuela",
        "flag: venezuela"
      ],
      u: "1f1fb-1f1ea",
      a: "2"
    },
    {
      n: [
        "VG",
        "flag",
        "flag: British Virgin Islands",
        "flag: british virgin islands"
      ],
      u: "1f1fb-1f1ec",
      a: "2"
    },
    {
      n: [
        "VI",
        "flag",
        "flag: U.S. Virgin Islands",
        "flag: u.s. virgin islands"
      ],
      u: "1f1fb-1f1ee",
      a: "2"
    },
    {
      n: [
        "VN",
        "flag",
        "flag: Vietnam",
        "flag: vietnam"
      ],
      u: "1f1fb-1f1f3",
      a: "2"
    },
    {
      n: [
        "VU",
        "flag",
        "flag: Vanuatu",
        "flag: vanuatu"
      ],
      u: "1f1fb-1f1fa",
      a: "2"
    },
    {
      n: [
        "WF",
        "flag",
        "flag: Wallis & Futuna",
        "flag: wallis & futuna"
      ],
      u: "1f1fc-1f1eb",
      a: "2"
    },
    {
      n: [
        "WS",
        "flag",
        "flag: Samoa",
        "flag: samoa"
      ],
      u: "1f1fc-1f1f8",
      a: "2"
    },
    {
      n: [
        "XK",
        "flag",
        "flag: Kosovo",
        "flag: kosovo"
      ],
      u: "1f1fd-1f1f0",
      a: "2"
    },
    {
      n: [
        "YE",
        "flag",
        "flag: Yemen",
        "flag: yemen"
      ],
      u: "1f1fe-1f1ea",
      a: "2"
    },
    {
      n: [
        "YT",
        "flag",
        "flag: Mayotte",
        "flag: mayotte"
      ],
      u: "1f1fe-1f1f9",
      a: "2"
    },
    {
      n: [
        "ZA",
        "flag",
        "flag: South Africa",
        "flag: south africa"
      ],
      u: "1f1ff-1f1e6",
      a: "2"
    },
    {
      n: [
        "ZM",
        "flag",
        "flag: Zambia",
        "flag: zambia"
      ],
      u: "1f1ff-1f1f2",
      a: "2"
    },
    {
      n: [
        "ZW",
        "flag",
        "flag: Zimbabwe",
        "flag: zimbabwe"
      ],
      u: "1f1ff-1f1fc",
      a: "2"
    },
    {
      n: [
        "flag",
        "gbeng",
        "flag: England",
        "flag: england"
      ],
      u: "1f3f4-e0067-e0062-e0065-e006e-e0067-e007f",
      a: "5"
    },
    {
      n: [
        "flag",
        "gbsct",
        "flag: Scotland",
        "flag: scotland"
      ],
      u: "1f3f4-e0067-e0062-e0073-e0063-e0074-e007f",
      a: "5"
    },
    {
      n: [
        "flag",
        "gbwls",
        "flag: Wales",
        "flag: wales"
      ],
      u: "1f3f4-e0067-e0062-e0077-e006c-e0073-e007f",
      a: "5"
    }
  ]
}, zf = {
  categories: Ym,
  emojis: Um
}, as = "epr_suggested";
function Tf(e) {
  try {
    var a, t, n;
    if (!((a = window) != null && a.localStorage))
      return [];
    var r = JSON.parse((t = (n = window) == null ? void 0 : n.localStorage.getItem(as)) != null ? t : "[]");
    return e === Xt.FREQUENT ? r.sort(function(f, i) {
      return i.count - f.count;
    }) : r;
  } catch {
    return [];
  }
}
function Qm(e, a) {
  var t = Tf(), n = ga(e, a), r = ga(e), f = t.find(function(s) {
    var c = s.unified;
    return c === n;
  }), i;
  f ? i = [f].concat(t.filter(function(s) {
    return s !== f;
  })) : (f = {
    unified: n,
    original: r,
    count: 0
  }, i = [f].concat(t)), f.count++, i.length = Math.min(i.length, 14);
  try {
    var o;
    (o = window) == null || o.localStorage.setItem(as, JSON.stringify(i));
  } catch {
  }
}
function Ef(e) {
  var a;
  return (a = e[Re.name]) != null ? a : [];
}
function lo(e) {
  if (!e)
    return "";
  var a = Ef(e);
  return a[a.length - 1];
}
function ts(e) {
  var a = e.split("-"), t = a.splice(1, 1), n = t[0];
  return Sf[n] ? a.join("-") : e;
}
function ga(e, a) {
  var t, n = e[Re.unified];
  return !a || !Mt(e) ? n : (t = Jm(e, a)) != null ? t : n;
}
function Bm() {
  var e = us(), a = Of(), t = a[0], n = Ze.useMemo(
    function() {
      var r, f = (r = Tf(e)) != null ? r : [];
      return f.map(function(i) {
        return or(i.unified);
      }).filter(Boolean);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, e]
  );
  return function(f) {
    var i;
    return f === re.SUGGESTED ? n : (i = zf.emojis[f]) != null ? i : [];
  };
}
function ir(e) {
  var a;
  return (a = e[Re.variations]) != null ? a : [];
}
function Mt(e) {
  return ir(e).length > 0;
}
function Jm(e, a) {
  return a ? ir(e).find(function(t) {
    return t.includes(a);
  }) : ga(e);
}
function or(e) {
  if (e) {
    if (Gn[e])
      return Gn[e];
    var a = ts(e);
    return Gn[a];
  }
}
var Gm = /* @__PURE__ */ Object.values(zf.emojis).flat(), Gn = {};
Gm.reduce(function(e, a) {
  return e[ga(a)] = a, Mt(a) && ir(a).forEach(function(t) {
    e[t] = a;
  }), e;
}, Gn);
function _m(e) {
  var a = e.split("-"), t = a[1];
  return $n.includes(t) ? t : null;
}
var ns = /* @__PURE__ */ Ze.createContext({
  emojiData: {},
  allEmojis: [],
  allEmojisByUnified: {},
  searchIndex: {},
  emojiByUnified: or,
  activeVariationFromUnified: function() {
    return null;
  }
});
function Wm(e) {
  var a = e.children, t = Ce(), n = t.customEmojis, r = t.emojiData, f = Ze.useMemo(function() {
    var o = r || zf, s = JSON.parse(JSON.stringify(o));
    n && n.length > 0 && (s.emojis[re.CUSTOM] = n.map(Zm));
    var c = s.emojis || {}, d = Object.values(c).flat(), u = {}, m = {};
    return d.forEach(function(g) {
      var b = g[Re.unified];
      if (u[b] = g, g[Re.variations]) {
        var p;
        (p = g[Re.variations]) == null || p.forEach(function(L) {
          u[L] = g;
        });
      }
      var M = (g[Re.name] || []).join("").toLowerCase().split("");
      M.forEach(function(L) {
        var C;
        m[L] = (C = m[L]) != null ? C : {}, m[L][b] = g;
      });
    }), {
      emojiData: s,
      allEmojis: d,
      allEmojisByUnified: u,
      searchIndex: m
    };
  }, [r, n]), i = Ze.useCallback(function(o) {
    var s;
    if (o) {
      var c = (s = f.allEmojisByUnified[o]) != null ? s : f.allEmojisByUnified[Fl(o)];
      return c;
    }
  }, [f.allEmojisByUnified]);
  return Ze.createElement(ns.Provider, {
    value: ve({}, f, {
      emojiByUnified: i,
      activeVariationFromUnified: km
    })
  }, a);
}
function Lt() {
  return Ze.useContext(ns);
}
function Fm() {
  var e = Lt(), a = e.emojiData, t = e.emojiByUnified, n = us(), r = Of(), f = r[0], i = Ze.useMemo(function() {
    var o, s = (o = Tf(n)) != null ? o : [];
    return s.map(function(c) {
      var d, u = t(c.unified);
      if (u)
        return ve({}, u, (d = {}, d[Re.unified] = c.unified, d));
    }).filter(Boolean);
  }, [f, n, t]);
  return function(s) {
    var c, d;
    return s === re.SUGGESTED ? i : (c = (d = a.emojis) == null ? void 0 : d[s]) != null ? c : [];
  };
}
function Zm(e) {
  var a;
  return a = {}, a[Re.name] = e.names.map(function(t) {
    return t.toLowerCase();
  }), a[Re.unified] = e.id.toLowerCase(), a[Re.added_in] = "0", a[Re.imgUrl] = e.imgUrl, a;
}
function Hm() {
  var e = hg();
  return function(a) {
    return e.has(a);
  };
}
function rs() {
  var e = we({}), a = gg(), t = Lt(), n = t.allEmojis;
  return Pe(function() {
    var r = parseFloat("" + a);
    return !a || Number.isNaN(r) ? e.current : n.reduce(function(f, i) {
      return $m(i, r) && (f[et(i)] = !0), f;
    }, e.current);
  }, [a, n]);
}
function Vm() {
  var e = rs(), a = Hm();
  return function(n) {
    var r = Fl(et(n));
    return !!(e[r] || a(r));
  };
}
function $m(e, a) {
  return Lm(e) > a;
}
function Km(e) {
  fe(function() {
    e(!0);
  }, [e]);
}
function Xm(e) {
  var a = e.children, t = rs(), n = ng(), r = mg(), f = Lt(), i = f.searchIndex, o = we(i);
  fe(function() {
    o.current = i;
  }, [i]);
  var s = we(!1), c = we(!1), d = we(t), u = oo(Date.now(), 200), m = oo("", 100), g = D(!1), b = D(n), p = D(null), M = D(/* @__PURE__ */ new Set()), L = D(null), C = D(r), I = D(!1), R = I[0], z = I[1], T = D([]), y = D(null);
  return Km(z), x(Ve.Provider, {
    value: {
      activeCategoryState: p,
      activeSkinTone: b,
      disallowClickRef: s,
      disallowMouseRef: c,
      disallowedEmojisRef: d,
      emojiVariationPickerState: L,
      emojisThatFailedToLoadState: M,
      filterRef: o,
      isPastInitialLoad: R,
      searchTerm: m,
      skinToneFanOpenState: g,
      suggestedUpdateState: u,
      reactionsModeState: C,
      visibleCategoriesState: T,
      emojiSizeState: y
    }
  }, a);
}
var Ve = /* @__PURE__ */ je({
  activeCategoryState: [null, function() {
  }],
  activeSkinTone: [ra.NEUTRAL, function() {
  }],
  disallowClickRef: {
    current: !1
  },
  disallowMouseRef: {
    current: !1
  },
  disallowedEmojisRef: {
    current: {}
  },
  emojiVariationPickerState: [null, function() {
  }],
  emojisThatFailedToLoadState: [/* @__PURE__ */ new Set(), function() {
  }],
  filterRef: {
    current: {}
  },
  isPastInitialLoad: !0,
  searchTerm: ["", function() {
    return new Promise(function() {
    });
  }],
  skinToneFanOpenState: [!1, function() {
  }],
  suggestedUpdateState: [/* @__PURE__ */ Date.now(), function() {
  }],
  reactionsModeState: [!1, function() {
  }],
  visibleCategoriesState: [[], function() {
    return [];
  }],
  emojiSizeState: [null, function() {
  }]
});
function Af() {
  var e = Z(Ve), a = e.filterRef;
  return a;
}
function qm() {
  var e = Z(Ve), a = e.disallowClickRef;
  return a;
}
function Pf() {
  var e = Z(Ve), a = e.disallowMouseRef;
  return a;
}
function at() {
  var e = Z(Ve), a = e.reactionsModeState;
  return a;
}
function lr() {
  var e = Z(Ve), a = e.searchTerm;
  return a;
}
function sr() {
  var e = Z(Ve), a = e.activeSkinTone;
  return a;
}
function fs() {
  var e = Z(Ve), a = e.emojisThatFailedToLoadState;
  return a;
}
function Ct() {
  var e = Z(Ve), a = e.emojiVariationPickerState;
  return a;
}
function hn() {
  var e = Z(Ve), a = e.skinToneFanOpenState;
  return a;
}
function Rf() {
  var e = Z(Ve), a = e.visibleCategoriesState;
  return a;
}
function is() {
  var e = Z(Ve), a = e.emojiSizeState;
  return a;
}
function Of() {
  var e = Z(Ve), a = e.suggestedUpdateState, t = a[0], n = a[1];
  return [t, function() {
    n(Date.now());
  }];
}
var os = /* @__PURE__ */ Ze.createContext({});
function ls() {
  var e = Ze.useContext(os);
  return e;
}
function eg(e) {
  var a = Ze.useRef({
    onEmojiClick: e.onEmojiClick || zn,
    onReactionClick: e.onReactionClick || e.onEmojiClick,
    onSkinToneChange: e.onSkinToneChange || zn
  });
  return Ze.useEffect(function() {
    a.current.onEmojiClick = e.onEmojiClick || zn, a.current.onReactionClick = e.onReactionClick || e.onEmojiClick;
  }, [e.onEmojiClick, e.onReactionClick]), Ze.useEffect(function() {
    a.current.onSkinToneChange = e.onSkinToneChange || zn;
  }, [e.onSkinToneChange]), a;
}
function zn() {
}
var qt;
(function(e) {
  e.REACTIONS = "reactions", e.PICKER = "picker";
})(qt || (qt = {}));
function ag() {
  var e, a = Ce(), t = a.searchPlaceHolder, n = a.searchPlaceholder;
  return (e = [t, n].find(function(r) {
    return r !== Kn;
  })) != null ? e : Kn;
}
function tg() {
  var e = Ce(), a = e.searchClearButtonLabel;
  return a ?? Kl;
}
function ng() {
  var e = Ce(), a = e.defaultSkinTone;
  return a;
}
function ss() {
  var e = Ce(), a = e.allowExpandReactions;
  return a;
}
function cs() {
  var e = Ce(), a = e.skinTonesDisabled;
  return a;
}
function tt() {
  var e = Ce(), a = e.emojiStyle;
  return a;
}
function rg() {
  var e = Ce(), a = e.autoFocusSearch;
  return a;
}
function Yf() {
  var e = Ce(), a = e.categories;
  return a;
}
function fg() {
  var e = Ce(), a = e.categoryIcons;
  return a;
}
function ig() {
  var e = Ce(), a = e.customEmojis;
  return a;
}
function og() {
  var e = Ce(), a = e.open;
  return a;
}
function lg(e) {
  var a = ls(), t = a.current, n = at(), r = n[1], f = t.onEmojiClick || function() {
  }, i = t.onReactionClick;
  return e === qt.REACTIONS && i ? function() {
    for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
      s[c] = arguments[c];
    return i.apply(void 0, s.concat([{
      collapseToReactions: function() {
        r(function(u) {
          return u;
        });
      }
    }]));
  } : function() {
    for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
      s[c] = arguments[c];
    f.apply(void 0, s.concat([{
      collapseToReactions: function() {
        r(!0);
      }
    }]));
  };
}
function sg() {
  var e = ls(), a = e.current;
  return a.onSkinToneChange || function() {
  };
}
function ds() {
  var e = Ce(), a = e.previewConfig;
  return a;
}
function cg() {
  var e = Ce(), a = e.theme;
  return a;
}
function us() {
  var e = Ce(), a = e.suggestedEmojisMode;
  return a;
}
function ms() {
  var e = Ce(), a = e.lazyLoadEmojis;
  return a;
}
function dg() {
  var e = Ce(), a = e.className;
  return a;
}
function ug() {
  var e = Ce(), a = e.height, t = e.width, n = e.style;
  return ve({
    height: so(a),
    width: so(t)
  }, n);
}
function mg() {
  var e = Ce(), a = e.reactionsDefaultOpen;
  return a;
}
function gg() {
  var e = Ce(), a = e.emojiVersion;
  return a;
}
function gs() {
  var e = Ce(), a = e.searchDisabled;
  return a;
}
function hs() {
  var e = Ce(), a = e.skinTonePickerLocation;
  return a;
}
function hg() {
  var e = Ce(), a = e.unicodeToHide;
  return a;
}
function bg() {
  var e = Ce(), a = e.reactions;
  return a;
}
function nt() {
  var e = Ce(), a = e.getEmojiUrl;
  return a;
}
function so(e) {
  return typeof e == "number" ? e + "px" : e;
}
function wg(e) {
  var a = e > 0, t = e > 1;
  return a ? t ? Em.replace("%n", e.toString()) : Tm : zm;
}
function cr() {
  var e = lr(), a = e[0];
  return !!a;
}
function $e(e) {
  e && requestAnimationFrame(function() {
    e.focus();
  });
}
function bs(e) {
  if (e) {
    var a = e.previousElementSibling;
    $e(a);
  }
}
function ws(e) {
  if (e) {
    var a = e.nextElementSibling;
    $e(a);
  }
}
function ps(e) {
  if (e) {
    var a = e.firstElementChild;
    $e(a);
  }
}
function en() {
  return document.activeElement;
}
function pg(e) {
  var a = e.children, t = we(null), n = we(null), r = we(null), f = we(null), i = we(null), o = we(null), s = we(null), c = we(null), d = we(null);
  return x(ys.Provider, {
    value: {
      AnchoredEmojiRef: n,
      BodyRef: r,
      EmojiListRef: f,
      CategoryNavigationRef: s,
      PickerMainRef: t,
      SearchInputRef: i,
      SkinTonePickerRef: o,
      VariationPickerRef: c,
      ReactionsRef: d
    }
  }, a);
}
var ys = /* @__PURE__ */ je({
  AnchoredEmojiRef: /* @__PURE__ */ da(),
  BodyRef: /* @__PURE__ */ da(),
  CategoryNavigationRef: /* @__PURE__ */ da(),
  EmojiListRef: /* @__PURE__ */ da(),
  PickerMainRef: /* @__PURE__ */ da(),
  SearchInputRef: /* @__PURE__ */ da(),
  SkinTonePickerRef: /* @__PURE__ */ da(),
  VariationPickerRef: /* @__PURE__ */ da(),
  ReactionsRef: /* @__PURE__ */ da()
});
function ka() {
  return Z(ys);
}
function vs() {
  return ka().EmojiListRef;
}
function jt() {
  return ka().PickerMainRef;
}
function dr() {
  return ka().AnchoredEmojiRef;
}
function Ms() {
  var e = dr();
  return function(a) {
    a === null && e.current !== null && $e(e.current), e.current = a;
  };
}
function Ke() {
  return ka().BodyRef;
}
function yg() {
  return ka().ReactionsRef;
}
function Ya() {
  return ka().SearchInputRef;
}
function Uf() {
  return ka().SkinTonePickerRef;
}
function Qf() {
  return ka().CategoryNavigationRef;
}
function vg() {
  return ka().VariationPickerRef;
}
function Ls(e, a) {
  a === void 0 && (a = 0);
  var t = Rs(e);
  t && requestAnimationFrame(function() {
    t.scrollTop = a;
  });
}
function Mg(e, a) {
  var t = Rs(e);
  t && requestAnimationFrame(function() {
    t.scrollTop = t.scrollTop + a;
  });
}
function Lg() {
  var e = Ke();
  return ze(function(a) {
    requestAnimationFrame(function() {
      e.current && (e.current.scrollTop = a);
    });
  }, [e]);
}
function ur(e) {
  if (!(!e || !oh(e)) && !e.closest(ta(se.variationPicker))) {
    var a = Ys(e), t = Os(e);
    Mg(a, -(_f(Ua(e)) - t));
  }
}
function mr(e) {
  var a = Vf(e);
  $e(a), ur(a);
}
function Cg(e) {
  var a = Vf(e);
  $e(a), a?.click();
}
function jg(e) {
  $e(Bs(e));
}
function xg(e) {
  if (e) {
    var a = Js(e);
    if (!a)
      return mr(hr(e));
    $e(a), ur(a);
  }
}
function kg(e) {
  if (e) {
    var a = Hf(e);
    if (!a)
      return jg(gr(e));
    $e(a), ur(a);
  }
}
function Ng(e, a) {
  if (e) {
    var t = Sg(e);
    if (!t)
      return a();
    $e(t), ur(t);
  }
}
function Ig(e) {
  if (e) {
    var a = Dg(e);
    return $e(a);
  }
}
function Sg(e) {
  if (!e)
    return null;
  var a = Gs(e), t = Ua(a), n = Ts(a, e), r = yt(t), f = r.indexOf(e), i = f % n;
  if (f === -1)
    return null;
  if (r[f - n])
    return r[f - n];
  var o = gr(t);
  if (!o)
    return null;
  var s = yt(o), c = s.length % n - 1;
  if (i > c)
    return s.at(-1);
  for (var d = s.length - 1; d >= 0; d--)
    if (d % n === i)
      return s[d];
  return s.at(-1);
}
function Dg(e) {
  var a;
  if (!e)
    return null;
  var t = Gs(e), n = Ua(t), r = Ts(t, e), f = yt(n), i = f.indexOf(e);
  if (i === -1)
    return null;
  var o = r - i % r - 1, s = i + o + 1;
  if (f[s]) {
    for (var c = i + r; c % r >= 0; c--)
      if (f[c])
        return f[c];
  }
  var d = i % r, u = hr(n), m = yt(u);
  return m[d] ? m[d] : (a = m.at(0)) != null ? a : null;
}
function rt() {
  var e = Ct(), a = e[0], t = e[1], n = hn(), r = n[0], f = n[1], i = ze(function() {
    a && t(null), r && f(!1);
  }, [a, r, t, f]);
  return i;
}
function Cs() {
  var e = Ct(), a = e[0], t = hn(), n = t[0];
  return function() {
    return !!a || n;
  };
}
function zg() {
  var e = Pf();
  return function() {
    e.current = !0;
  };
}
function js() {
  var e = Pf();
  return function() {
    e.current = !1;
  };
}
function xs() {
  var e = Pf();
  return function() {
    return e.current;
  };
}
function Tg() {
  var e = Ke(), a = js(), t = xs();
  fe(function() {
    var n = e.current;
    n?.addEventListener("mousemove", r, {
      passive: !0
    });
    function r() {
      t() && a();
    }
    return function() {
      n?.removeEventListener("mousemove", r);
    };
  }, [e, a, t]);
}
function ft() {
  var e = Ya();
  return ze(function() {
    $e(e.current);
  }, [e]);
}
function Eg() {
  var e = Uf();
  return ze(function() {
    e.current && ps(e.current);
  }, [e]);
}
function ks() {
  var e = Qf();
  return ze(function() {
    e.current && ps(e.current);
  }, [e]);
}
function Ag() {
  var e = Af();
  return function a(t) {
    if (typeof t == "function")
      return a(t(e.current));
    e.current = t;
  };
}
function Ns() {
  var e = Bf(), a = Ya(), t = ft();
  return function() {
    a.current && (a.current.value = ""), e(""), t();
  };
}
function Pg() {
  var e = Ya(), a = Bf();
  return function(n) {
    e.current ? (e.current.value = "" + e.current.value + n, a(co(e.current.value))) : a(co(n));
  };
}
function Rg() {
  var e = Ya(), a = Af(), t = Ag(), n = Bf(), r = lr(), f = r[0], i = Jg(a.current, f);
  return {
    onChange: o,
    searchTerm: f,
    SearchInputRef: e,
    statusSearchResults: i
  };
  function o(s) {
    var c = a.current, d = s.toLowerCase();
    if (c != null && c[d] || d.length <= 1)
      return n(d);
    var u = Bg(d, c);
    if (!u)
      return n(d);
    t(function(m) {
      var g;
      return Object.assign(m, (g = {}, g[d] = Og(u, d), g));
    }), n(d);
  }
}
function Bf() {
  var e = lr(), a = e[1], t = jt();
  return function(r) {
    requestAnimationFrame(function() {
      a(r && r?.toLowerCase()).then(function() {
        Ls(t.current, 0);
      });
    });
  };
}
function Og(e, a) {
  var t = {};
  for (var n in e) {
    var r = e[n];
    Yg(r, a) && (t[n] = r);
  }
  return t;
}
function Yg(e, a) {
  return Wl(e).some(function(t) {
    return t.includes(a);
  });
}
function Ug() {
  var e = Af(), a = e.current, t = lr(), n = t[0];
  return function(r) {
    return Qg(r, a, n);
  };
}
function Qg(e, a, t) {
  var n;
  return !a || !t ? !1 : !((n = a[t]) != null && n[e]);
}
function Bg(e, a) {
  if (!a)
    return null;
  if (a[e])
    return a[e];
  var t = Object.keys(a).sort(function(n, r) {
    return r.length - n.length;
  }).find(function(n) {
    return e.includes(n);
  });
  return t ? a[t] : null;
}
function co(e) {
  return !e || typeof e != "string" ? "" : e.trim().toLowerCase();
}
function Jg(e, a) {
  var t;
  if (!(e != null && e[a])) return "";
  var n = ((t = Object.entries(e?.[a])) == null ? void 0 : t.length) || 0;
  return wg(n);
}
function Is() {
  var e = Ms(), a = Ct(), t = a[1];
  return function(r) {
    var f = As(r), i = f[0];
    i && (e(r), t(i));
  };
}
function Jf() {
  var e = hs();
  return e === pt.SEARCH;
}
function Ss() {
  var e = hs();
  return e === pt.PREVIEW;
}
var De;
(function(e) {
  e.ArrowDown = "ArrowDown", e.ArrowUp = "ArrowUp", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.Escape = "Escape", e.Enter = "Enter", e.Space = " ";
})(De || (De = {}));
function Gg() {
  _g(), Wg(), Fg(), Zg(), Hg();
}
function _g() {
  var e = jt(), a = Ns(), t = Lg(), n = Ya(), r = ft(), f = Cs(), i = zg(), o = rt(), s = Pe(function() {
    return function(d) {
      var u = d.key;
      switch (i(), u) {
        // eslint-disable-next-line no-fallthrough
        case De.Escape:
          if (d.preventDefault(), f()) {
            o();
            return;
          }
          a(), t(0), r();
          break;
      }
    };
  }, [t, a, o, r, f, i]);
  fe(function() {
    var c = e.current;
    if (c)
      return c.addEventListener("keydown", s), function() {
        c.removeEventListener("keydown", s);
      };
  }, [e, n, t, s]);
}
function Wg() {
  var e = Eg(), a = jt(), t = Ke(), n = Ya(), r = hn(), f = r[1], i = Ds(), o = Jf(), s = Pe(function() {
    return function(d) {
      var u = d.key;
      switch (u) {
        case De.ArrowRight:
          if (!o)
            return;
          d.preventDefault(), f(!0), e();
          break;
        case De.ArrowDown:
          d.preventDefault(), i();
          break;
        case De.Enter:
          d.preventDefault(), Cg(t.current);
          break;
      }
    };
  }, [e, i, f, t, o]);
  fe(function() {
    var c = n.current;
    if (c)
      return c.addEventListener("keydown", s), function() {
        c.removeEventListener("keydown", s);
      };
  }, [a, n, s]);
}
function Fg() {
  var e = Uf(), a = ft(), t = Ya(), n = Ds(), r = hn(), f = r[0], i = r[1], o = Ss(), s = Jf(), c = Gf(), d = Pe(function() {
    return (
      // eslint-disable-next-line complexity
      (function(m) {
        var g = m.key;
        if (s)
          switch (g) {
            case De.ArrowLeft:
              if (m.preventDefault(), !f)
                return a();
              uo(a);
              break;
            case De.ArrowRight:
              if (m.preventDefault(), !f)
                return a();
              mo();
              break;
            case De.ArrowDown:
              m.preventDefault(), f && i(!1), n();
              break;
            default:
              c(m);
              break;
          }
        if (o)
          switch (g) {
            case De.ArrowUp:
              if (m.preventDefault(), !f)
                return a();
              uo(a);
              break;
            case De.ArrowDown:
              if (m.preventDefault(), !f)
                return a();
              mo();
              break;
            default:
              c(m);
              break;
          }
      })
    );
  }, [f, a, i, n, c, o, s]);
  fe(function() {
    var u = e.current;
    if (u)
      return u.addEventListener("keydown", d), function() {
        u.removeEventListener("keydown", d);
      };
  }, [e, t, f, d]);
}
function Zg() {
  var e = ft(), a = Qf(), t = Ke(), n = Gf(), r = Pe(function() {
    return function(i) {
      var o = i.key;
      switch (o) {
        case De.ArrowUp:
          i.preventDefault(), e();
          break;
        case De.ArrowRight:
          i.preventDefault(), ws(en());
          break;
        case De.ArrowLeft:
          i.preventDefault(), bs(en());
          break;
        case De.ArrowDown:
          i.preventDefault(), mr(t.current);
          break;
        default:
          n(i);
          break;
      }
    };
  }, [t, e, n]);
  fe(function() {
    var f = a.current;
    if (f)
      return f.addEventListener("keydown", r), function() {
        f.removeEventListener("keydown", r);
      };
  }, [a, t, r]);
}
function Hg() {
  var e = Ke(), a = Vg(), t = Is(), n = Cs(), r = rt(), f = Gf(), i = Pe(function() {
    return (
      // eslint-disable-next-line complexity
      (function(s) {
        var c = s.key, d = ia(en());
        switch (c) {
          case De.ArrowRight:
            s.preventDefault(), xg(d);
            break;
          case De.ArrowLeft:
            s.preventDefault(), kg(d);
            break;
          case De.ArrowDown:
            if (s.preventDefault(), n()) {
              r();
              break;
            }
            Ig(d);
            break;
          case De.ArrowUp:
            if (s.preventDefault(), n()) {
              r();
              break;
            }
            Ng(d, a);
            break;
          case De.Space:
            s.preventDefault(), t(s.target);
            break;
          default:
            f(s);
            break;
        }
      })
    );
  }, [a, f, t, n, r]);
  fe(function() {
    var o = e.current;
    if (o)
      return o.addEventListener("keydown", i), function() {
        o.removeEventListener("keydown", i);
      };
  }, [e, i]);
}
function Ds() {
  var e = ks(), a = cr(), t = Ke();
  return ze(function() {
    return a ? mr(t.current) : e();
  }, [t, e, a]);
}
function Vg() {
  var e = ft(), a = ks(), t = cr();
  return ze(function() {
    return t ? e() : a();
  }, [e, t, a]);
}
function uo(e) {
  var a = en();
  a && (rh(a) || e(), ws(a));
}
function mo() {
  var e = en();
  e && bs(e);
}
function Gf() {
  var e = Pg(), a = ft(), t = gs(), n = rt();
  return function(f) {
    var i = f.key;
    $g(f) || t || i.match(/(^[a-zA-Z0-9]$){1}/) && (f.preventDefault(), n(), a(), e(i));
  };
}
function $g(e) {
  var a = e.metaKey, t = e.ctrlKey, n = e.altKey;
  return a || t || n;
}
function Kg(e, a, t, n, r, f, i, o) {
  if (e && a !== Fe.NATIVE) {
    var s = et(e);
    qr.has(s) || !f || !i || setTimeout(function() {
      var c = r + f.top, d = t + n, u = c >= d && c < d + i.emojiSize * 2;
      u && zs(o, e, a);
    });
  }
}
function zs(e, a, t) {
  if (a) {
    var n = et(a);
    qr.has(n) || (qr.add(n), Df(a).concat(n).forEach(function(r) {
      var f = e(r, t);
      Xg(f);
    }));
  }
}
var qr = /* @__PURE__ */ new Set();
function Xg(e) {
  var a = new Image();
  a.src = e;
}
function qg() {
  var e = Ke(), a = tt(), t = nt();
  fe(function() {
    if (a === Fe.NATIVE)
      return;
    var n = e.current;
    return n?.addEventListener("focusin", r), function() {
      n?.removeEventListener("focusin", r);
    };
    function r(f) {
      var i = ia(f.target);
      if (i) {
        var o = As(i), s = o[0];
        s && Mt(s) && zs(t, s, a);
      }
    }
  }, [e, a, t]);
}
var eh = ["width", "height"], ef = 40;
function ah(e) {
  var a = e.children;
  return x(Xm, null, x(th, null, a));
}
function th(e) {
  var a, t = e.children, n = at(), r = n[0], f = cg(), i = cr(), o = jt(), s = dg(), c = ug();
  Gg(), qg();
  var d = c || {}, u = d.width, m = d.height, g = Gl(d, eh);
  return x("aside", {
    className: oe(Rt.main, Rt.baseVariables, f === Va.DARK && Rt.darkTheme, f === Va.AUTO && Rt.autoThemeDark, (a = {}, a[se.searchActive] = i, a), r && Rt.reactionsMenu, s),
    ref: o,
    style: ve({}, g, !r && {
      height: m,
      width: u
    })
  }, t);
}
var go = {
  "--epr-emoji-variation-picker-bg-color": "var(--epr-dark-emoji-variation-picker-bg-color)",
  "--epr-hover-bg-color-reduced-opacity": "var(--epr-dark-hover-bg-color-reduced-opacity)",
  "--epr-highlight-color": "var(--epr-dark-highlight-color)",
  "--epr-text-color": "var(--epr-dark-text-color)",
  "--epr-hover-bg-color": "var(--epr-dark-hover-bg-color)",
  "--epr-focus-bg-color": "var(--epr-dark-focus-bg-color)",
  "--epr-search-input-bg-color": "var(--epr-dark-search-input-bg-color)",
  "--epr-category-label-bg-color": "var(--epr-dark-category-label-bg-color)",
  "--epr-picker-border-color": "var(--epr-dark-picker-border-color)",
  "--epr-bg-color": "var(--epr-dark-bg-color)",
  "--epr-reactions-bg-color": "var(--epr-dark-reactions-bg-color)",
  "--epr-search-input-bg-color-active": "var(--epr-dark-search-input-bg-color-active)",
  "--epr-emoji-variation-indicator-color": "var(--epr-dark-emoji-variation-indicator-color)",
  "--epr-category-icon-active-color": "var(--epr-dark-category-icon-active-color)",
  "--epr-skin-tone-picker-menu-color": "var(--epr-dark-skin-tone-picker-menu-color)",
  "--epr-skin-tone-outer-border-color": "var(--epr-dark-skin-tone-outer-border-color)",
  "--epr-skin-tone-inner-border-color": "var(--epr-dark-skin-tone-inner-border-color)"
}, Rt = /* @__PURE__ */ xe.create({
  main: {
    ".": ["epr-main", se.emojiPicker],
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "var(--epr-picker-border-radius)",
    borderColor: "var(--epr-picker-border-color)",
    backgroundColor: "var(--epr-bg-color)",
    overflow: "hidden",
    transition: "height 0.3s ease-in-out, background-color 0.1s ease-in-out",
    "*": {
      boxSizing: "border-box",
      fontFamily: "sans-serif"
    }
  },
  baseVariables: {
    "--": {
      "--epr-highlight-color": "#007aeb",
      "--epr-hover-bg-color": "#e5f0fa",
      "--epr-hover-bg-color-reduced-opacity": "#e5f0fa80",
      "--epr-focus-bg-color": "#e0f0ff",
      "--epr-text-color": "#858585",
      "--epr-search-input-bg-color": "#f6f6f6",
      "--epr-picker-border-color": "#e7e7e7",
      "--epr-bg-color": "#fff",
      "--epr-reactions-bg-color": "#ffffff90",
      "--epr-category-icon-active-color": "#6aa8de",
      "--epr-skin-tone-picker-menu-color": "#ffffff95",
      "--epr-skin-tone-outer-border-color": "#555555",
      "--epr-skin-tone-inner-border-color": "var(--epr-bg-color)",
      "--epr-horizontal-padding": "10px",
      "--epr-picker-border-radius": "8px",
      /* Header */
      "--epr-header-padding": "15px var(--epr-horizontal-padding)",
      /* Skin Tone Picker */
      "--epr-active-skin-tone-indicator-border-color": "var(--epr-highlight-color)",
      "--epr-active-skin-hover-color": "var(--epr-hover-bg-color)",
      /* Search */
      "--epr-search-input-bg-color-active": "var(--epr-search-input-bg-color)",
      "--epr-search-input-padding": "0 30px",
      "--epr-search-input-border-radius": "8px",
      "--epr-search-input-height": "40px",
      "--epr-search-input-text-color": "var(--epr-text-color)",
      "--epr-search-input-placeholder-color": "var(--epr-text-color)",
      "--epr-search-bar-inner-padding": "var(--epr-horizontal-padding)",
      "--epr-search-border-color": "var(--epr-search-input-bg-color)",
      "--epr-search-border-color-active": "var(--epr-highlight-color)",
      /*  Category Navigation */
      "--epr-category-navigation-button-size": "30px",
      /* Variation Picker */
      "--epr-emoji-variation-picker-height": "45px",
      "--epr-emoji-variation-picker-bg-color": "var(--epr-bg-color)",
      /*  Preview */
      "--epr-preview-height": "70px",
      "--epr-preview-text-size": "14px",
      "--epr-preview-text-padding": "0 var(--epr-horizontal-padding)",
      "--epr-preview-border-color": "var(--epr-picker-border-color)",
      "--epr-preview-text-color": "var(--epr-text-color)",
      /* Category */
      "--epr-category-padding": "0 var(--epr-horizontal-padding)",
      /*  Category Label */
      "--epr-category-label-bg-color": "#ffffffe6",
      "--epr-category-label-text-color": "var(--epr-text-color)",
      "--epr-category-label-padding": "0 var(--epr-horizontal-padding)",
      "--epr-category-label-height": ef + "px",
      /*  Emoji */
      "--epr-emoji-size": "30px",
      "--epr-emoji-padding": "5px",
      "--epr-emoji-fullsize": "calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)",
      "--epr-emoji-hover-color": "var(--epr-hover-bg-color)",
      "--epr-emoji-variation-indicator-color": "var(--epr-picker-border-color)",
      "--epr-emoji-variation-indicator-color-hover": "var(--epr-text-color)",
      /* Z-Index */
      "--epr-header-overlay-z-index": "3",
      "--epr-emoji-variations-indictator-z-index": "1",
      "--epr-category-label-z-index": "2",
      "--epr-skin-variation-picker-z-index": "5",
      "--epr-preview-z-index": "6",
      /* Dark Theme Variables */
      "--epr-dark": "#000",
      "--epr-dark-emoji-variation-picker-bg-color": "var(--epr-dark)",
      "--epr-dark-highlight-color": "#c0c0c0",
      "--epr-dark-text-color": "var(--epr-highlight-color)",
      "--epr-dark-hover-bg-color": "#363636f6",
      "--epr-dark-hover-bg-color-reduced-opacity": "#36363680",
      "--epr-dark-focus-bg-color": "#474747",
      "--epr-dark-search-input-bg-color": "#333333",
      "--epr-dark-category-label-bg-color": "#222222e6",
      "--epr-dark-picker-border-color": "#151617",
      "--epr-dark-bg-color": "#222222",
      "--epr-dark-reactions-bg-color": "#22222290",
      "--epr-dark-search-input-bg-color-active": "var(--epr-dark)",
      "--epr-dark-emoji-variation-indicator-color": "#444",
      "--epr-dark-category-icon-active-color": "#3271b7",
      "--epr-dark-skin-tone-picker-menu-color": "#22222295",
      "--epr-dark-skin-tone-outer-border-color": "var(--epr-dark-picker-border-color)",
      "--epr-dark-skin-tone-inner-border-color": "#00000000"
    }
  },
  autoThemeDark: {
    ".": se.autoTheme,
    "@media (prefers-color-scheme: dark)": {
      "--": go
    }
  },
  darkTheme: {
    ".": se.darkTheme,
    "--": go
  },
  reactionsMenu: {
    ".": "epr-reactions",
    height: "50px",
    display: "inline-flex",
    backgroundColor: "var(--epr-reactions-bg-color)",
    // @ts-ignore - backdropFilter is not recognized.
    backdropFilter: "blur(8px)",
    "--": {
      "--epr-picker-border-radius": "50px"
    }
  }
});
function Ts(e, a) {
  if (!e || !a)
    return 0;
  var t = e.getBoundingClientRect().width, n = a.getBoundingClientRect().width;
  return Math.floor(t / n);
}
function nh(e, a, t) {
  if (!e || !a.length)
    return null;
  var n = e.getBoundingClientRect().top, r = e.getBoundingClientRect().bottom, f = n + Es(e), i = a.find(function(o) {
    var s = o.getBoundingClientRect().top, c = o.getBoundingClientRect().bottom, d = o.clientHeight * t, u = s + d, m = c - d;
    return u < f ? !1 : u >= n && u <= r || m >= n && m <= r;
  });
  return i || null;
}
function rh(e) {
  return !!e.nextElementSibling;
}
function Es(e) {
  if (!e)
    return ef;
  var a = e.querySelector(ta(se.label));
  if (a) {
    var t = a.getBoundingClientRect().height;
    if (t > 0)
      return t;
  }
  return ef;
}
var an = "button" + /* @__PURE__ */ ta(se.emoji), fh = /* @__PURE__ */ [an, ta(se.visible), ":not(" + ta(se.hidden) + ")"].join("");
function ia(e) {
  var a;
  return (a = e?.closest(an)) != null ? a : null;
}
function As(e) {
  var a = Us(e), t = Wf(e);
  if (!a)
    return [];
  var n = or(t ?? a);
  return n ? [n, t] : [];
}
function ih(e) {
  var a;
  return !!(e?.matches(an) || !(e == null || (a = e.parentElement) == null) && a.matches(an));
}
function ho(e) {
  var a;
  return (a = e?.clientHeight) != null ? a : 0;
}
function Ps(e) {
  if (!e)
    return 0;
  var a = ia(e), t = Ua(a), n = _f(t);
  return bo(a) + bo(t) + n;
}
function _f(e) {
  var a, t;
  if (!e)
    return 0;
  var n = e.querySelector(ta(se.categoryContent));
  return ((a = e?.clientHeight) != null ? a : 0) - ((t = n?.clientHeight) != null ? t : 0);
}
function oh(e) {
  return e ? Os(e) < _f(Ua(e)) : !1;
}
function Rs(e) {
  return e ? e.matches(ta(se.scrollBody)) ? e : e.querySelector(ta(se.scrollBody)) : null;
}
function Os(e) {
  var a, t;
  return e ? Ps(e) - ((a = (t = Ys(e)) == null ? void 0 : t.scrollTop) != null ? a : 0) : 0;
}
function Ys(e) {
  var a;
  return e && (a = e.closest(ta(se.scrollBody))) != null ? a : null;
}
function lh(e) {
  var a = ia(e), t = Ua(a);
  return wo(a) + wo(t);
}
function bo(e) {
  var a;
  return (a = e?.offsetTop) != null ? a : 0;
}
function wo(e) {
  var a;
  return (a = e?.offsetLeft) != null ? a : 0;
}
function Wf(e) {
  var a;
  return (a = sh(ia(e), "unified")) != null ? a : null;
}
function Us(e) {
  var a = Wf(e);
  return a ? ts(a) : null;
}
function Ff(e) {
  return e ? {
    unified: Wf(e),
    originalUnified: Us(e)
  } : {
    unified: null,
    originalUnified: null
  };
}
function sh(e, a) {
  var t;
  return (t = ch(e)[a]) != null ? t : null;
}
function ch(e) {
  var a;
  return (a = e?.dataset) != null ? a : {};
}
function Zf(e) {
  return e.classList.contains(se.visible);
}
function Qs(e) {
  return e ? e.classList.contains(se.hidden) : !0;
}
function yt(e) {
  return e ? Array.from(e.querySelectorAll(fh)) : [];
}
function Bs(e) {
  if (!e) return null;
  var a = yt(e), t = a.slice(-1), n = t[0];
  return n ? Zf(n) ? n : Hf(n) : null;
}
function Js(e) {
  var a = e.nextElementSibling;
  return a ? Zf(a) ? a : Js(a) : Vf(hr(e));
}
function Hf(e) {
  var a = e.previousElementSibling;
  return a ? Zf(a) ? a : Hf(a) : Bs(gr(e));
}
function Vf(e) {
  if (!e)
    return null;
  var a = yt(e);
  return nh(e, a, 0.1);
}
function gr(e) {
  var a = Ua(e);
  if (!a)
    return null;
  var t = a.previousElementSibling;
  return t ? Qs(t) ? gr(t) : t : null;
}
function hr(e) {
  var a = Ua(e);
  if (!a)
    return null;
  var t = a.nextElementSibling;
  return t ? Qs(t) ? hr(t) : t : null;
}
function Ua(e) {
  return e ? e.closest(ta(se.category)) : null;
}
function Gs(e) {
  return e ? e.closest(ta(se.categoryContent)) : null;
}
function _s(e) {
  return e.split("-").map(function(a) {
    return String.fromCodePoint(parseInt(a, 16));
  }).join("");
}
function dh(e) {
  return e.category === re.CUSTOM;
}
function Ws(e) {
  return e.imgUrl !== void 0;
}
function Fs(e, a) {
  var t = we(), n = Is(), r = qm(), f = Ct(), i = f[1], o = rt(), s = sr(), c = s[0], d = lg(a), u = Of(), m = u[1], g = nt(), b = tt(), p = Lt(), M = p.emojiByUnified, L = ze(function(z) {
    if (!r.current) {
      o();
      var T = po(z, M), y = T[0], N = T[1];
      if (!(!y || !N)) {
        var U = _m(N) || c;
        m(), Qm(y, U), d(uh(y, U, b, g), z);
      }
    }
  }, [c, o, r, M, d, m, g, b]), C = ze(function(z) {
    var T;
    t.current && clearTimeout(t.current);
    var y = po(z, M), N = y[0];
    !N || !Mt(N) || (t.current = (T = window) == null ? void 0 : T.setTimeout(function() {
      r.current = !0, t.current = void 0, o(), n(z.target), i(N);
    }, 500));
  }, [r, M, o, n, i]), I = ze(function() {
    t.current ? (clearTimeout(t.current), t.current = void 0) : r.current && requestAnimationFrame(function() {
      r.current = !1;
    });
  }, [r]);
  fe(function() {
    if (e.current) {
      var R = e.current;
      return R.addEventListener("click", L, {
        passive: !0
      }), R.addEventListener("mousedown", C, {
        passive: !0
      }), R.addEventListener("mouseup", I, {
        passive: !0
      }), function() {
        R?.removeEventListener("click", L), R?.removeEventListener("mousedown", C), R?.removeEventListener("mouseup", I);
      };
    }
  }, [e, L, C, I]);
}
function po(e, a) {
  var t = e?.target;
  if (!ih(t))
    return [];
  var n = Ff(t), r = n.unified, f = n.originalUnified, i = r ?? f;
  if (!i)
    return [];
  var o = a(i);
  return o ? [o, r ?? i] : [];
}
function uh(e, a, t, n) {
  var r = Ef(e);
  if (Ws(e)) {
    var f = ga(e);
    return {
      activeSkinTone: a,
      emoji: f,
      getImageUrl: function() {
        return e.imgUrl;
      },
      imageUrl: e.imgUrl,
      isCustom: !0,
      names: r,
      unified: f,
      unifiedWithoutSkinTone: f
    };
  }
  var i = ga(e, a);
  return {
    activeSkinTone: a,
    emoji: _s(i),
    getImageUrl: function(s) {
      return s === void 0 && (s = t ?? Fe.APPLE), n(i, s);
    },
    imageUrl: n(i, t ?? Fe.APPLE),
    isCustom: !1,
    names: r,
    unified: i,
    unifiedWithoutSkinTone: ga(e)
  };
}
function bn(e) {
  return x("button", Object.assign({
    type: "button"
  }, e, {
    className: oe(mh.button, e.className)
  }), e.children);
}
var mh = /* @__PURE__ */ xe.create({
  button: {
    ".": "epr-btn",
    cursor: "pointer",
    border: "0",
    background: "none",
    outline: "none"
  }
});
function gh(e) {
  var a, t = e.emojiNames, n = e.unified, r = e.hidden, f = e.hiddenOnSearch, i = e.showVariations, o = i === void 0 ? !0 : i, s = e.hasVariations, c = e.children, d = e.className, u = e.noBackground, m = u === void 0 ? !1 : u, g = e.style;
  return x(bn, {
    className: oe(zr.emoji, r && If.hidden, f && qa.hiddenOnSearch, (a = {}, a[se.visible] = !r && !f, a), !!(s && o) && zr.hasVariations, m && zr.noBackground, d),
    "data-unified": n,
    "aria-label": hh(t),
    "data-full-name": t,
    style: g
  }, c);
}
function hh(e) {
  return e[e.length - 1];
}
var zr = /* @__PURE__ */ xe.create({
  emoji: {
    ".": se.emoji,
    position: "relative",
    width: "var(--epr-emoji-fullsize)",
    height: "var(--epr-emoji-fullsize)",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "var(--epr-emoji-fullsize)",
    maxHeight: "var(--epr-emoji-fullsize)",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "background-color 0.2s",
    ":hover": {
      backgroundColor: "var(--epr-emoji-hover-color)"
    },
    ":focus": {
      backgroundColor: "var(--epr-focus-bg-color)"
    }
  },
  noBackground: {
    background: "none",
    ":hover": {
      backgroundColor: "transparent",
      background: "none"
    },
    ":focus": {
      backgroundColor: "transparent",
      background: "none"
    }
  },
  hasVariations: {
    ".": se.emojiHasVariations,
    ":after": {
      content: "",
      display: "block",
      width: "0",
      height: "0",
      right: "0px",
      bottom: "1px",
      position: "absolute",
      borderLeft: "4px solid transparent",
      borderRight: "4px solid transparent",
      transform: "rotate(135deg)",
      borderBottom: "4px solid var(--epr-emoji-variation-indicator-color)",
      zIndex: "var(--epr-emoji-variations-indictator-z-index)"
    },
    ":hover:after": {
      borderBottom: "4px solid var(--epr-emoji-variation-indicator-color-hover)"
    }
  }
}), Xn = /* @__PURE__ */ xe.create({
  external: {
    ".": se.external,
    fontSize: "0"
  },
  common: {
    alignSelf: "center",
    justifySelf: "center",
    display: "block"
  }
});
function yo(e) {
  var a = e.emojiName, t = e.style, n = e.lazyLoad, r = n === void 0 ? !1 : n, f = e.imgUrl, i = e.onError, o = e.className;
  return x("img", {
    src: f,
    alt: a,
    className: oe(bh.emojiImag, Xn.external, Xn.common, o),
    loading: r ? "lazy" : "eager",
    onError: i,
    style: t
  });
}
var bh = /* @__PURE__ */ xe.create({
  emojiImag: {
    ".": "epr-emoji-img",
    maxWidth: "var(--epr-emoji-fullsize)",
    maxHeight: "var(--epr-emoji-fullsize)",
    minWidth: "var(--epr-emoji-fullsize)",
    minHeight: "var(--epr-emoji-fullsize)",
    padding: "var(--epr-emoji-padding)"
  }
});
function wh(e) {
  var a = e.unified, t = e.style, n = e.className;
  return x("span", {
    className: oe(ph.nativeEmoji, Xn.common, Xn.external, n),
    "data-unified": a,
    style: t
  }, _s(a));
}
var ph = /* @__PURE__ */ xe.create({
  nativeEmoji: {
    ".": "epr-emoji-native",
    fontFamily: '"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',
    position: "relative",
    lineHeight: "100%",
    fontSize: "var(--epr-emoji-size)",
    textAlign: "center",
    alignSelf: "center",
    justifySelf: "center",
    letterSpacing: "0",
    padding: "var(--epr-emoji-padding)"
  }
});
function af(e) {
  var a = e.emoji, t = e.unified, n = e.emojiStyle, r = e.size, f = e.lazyLoad, i = e.getEmojiUrl, o = i === void 0 ? Zl : i, s = e.className, c = fs(), d = c[1], u = Lt(), m = u.emojiByUnified, g = {};
  r && (g.width = g.height = g.fontSize = r + "px");
  var b = a || m(t);
  if (!b)
    return null;
  if (Ws(b))
    return x(yo, {
      style: g,
      emojiName: t,
      emojiStyle: Fe.NATIVE,
      lazyLoad: f,
      imgUrl: b.imgUrl,
      onError: p,
      className: s
    });
  return x(ha, null, n === Fe.NATIVE ? x(wh, {
    unified: t,
    style: g,
    className: s
  }) : x(yo, {
    style: g,
    emojiName: Cm(b),
    emojiStyle: n,
    lazyLoad: f,
    imgUrl: o(t, n),
    onError: p,
    className: s
  }));
  function p() {
    d(function(M) {
      return new Set(M).add(t);
    });
  }
}
function br(e) {
  var a = e.emoji, t = e.unified, n = e.hidden, r = e.hiddenOnSearch, f = e.emojiStyle, i = e.showVariations, o = i === void 0 ? !0 : i, s = e.size, c = e.lazyLoad, d = e.getEmojiUrl, u = e.className, m = e.noBackground, g = m === void 0 ? !1 : m, b = e.style, p = Mt(a);
  return x(gh, {
    hasVariations: p,
    showVariations: o,
    hidden: n,
    hiddenOnSearch: r,
    emojiNames: Ef(a),
    unified: t,
    noBackground: g,
    style: b
  }, x(af, {
    unified: t,
    emoji: a,
    size: s,
    emojiStyle: f,
    lazyLoad: c,
    getEmojiUrl: d,
    className: u
  }));
}
var yh = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";
function vh() {
  var e = at(), a = e[1];
  return x(bn, {
    "aria-label": "Show all Emojis",
    title: "Show all Emojis",
    tabIndex: 0,
    className: oe(Mh.plusSign),
    onClick: function() {
      return a(!1);
    }
  });
}
var Mh = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  plusSign: {
    fontSize: "20px",
    padding: "17px",
    color: "var(--epr-text-color)",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "100%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s ease-in-out",
    ":after": {
      content: "",
      minWidth: "20px",
      minHeight: "20px",
      backgroundImage: "url(" + yh + ")",
      backgroundColor: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundSize: "20px",
      backgroundPositionY: "0"
    },
    ":hover": {
      color: "var(--epr-highlight-color)",
      backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
      ":after": {
        backgroundPositionY: "-20px"
      }
    },
    ":focus": {
      color: "var(--epr-highlight-color)",
      backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
      ":after": {
        backgroundPositionY: "-40px"
      }
    }
  }
}, /* @__PURE__ */ Pa("plusSign", {
  ":after": {
    backgroundPositionY: "-40px"
  },
  ":hover:after": {
    backgroundPositionY: "-60px"
  }
})));
function Lh() {
  var e = at(), a = e[0], t = yg(), n = bg();
  Fs(t, qt.REACTIONS);
  var r = tt(), f = ss(), i = nt();
  return a ? x("ul", {
    className: oe(vo.list, !a && If.hidden),
    ref: t,
    "aria-label": "Reactions"
  }, n.map(function(o) {
    var s = or(o);
    return s ? x("li", {
      key: o
    }, x(br, {
      emoji: s,
      emojiStyle: r,
      unified: o,
      showVariations: !1,
      className: oe(vo.emojiButton),
      noBackground: !0,
      getEmojiUrl: i
    })) : null;
  }), f ? x("li", null, x(vh, null)) : null) : null;
}
var vo = /* @__PURE__ */ xe.create({
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },
  emojiButton: {
    ":hover": {
      transform: "scale(1.2)"
    },
    ":focus": {
      transform: "scale(1.2)"
    },
    ":active": {
      transform: "scale(1.1)"
    },
    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)"
  }
});
function Ch(e) {
  var a = rt(), t = D(0), n = t[0], r = t[1];
  return fe(function() {
    var f = e.current;
    if (!f)
      return;
    f.addEventListener("scroll", i, {
      passive: !0
    });
    function i() {
      var o;
      r((o = f?.scrollTop) != null ? o : 0), a();
    }
    return function() {
      f?.removeEventListener("scroll", i);
    };
  }, [e, a]), n;
}
function jh(e) {
  var a = e.scrollTop, t = e.clientHeight, n = e.topOffset, r = e.style, f = e.dimensions;
  if (!r || !f)
    return !1;
  var i = n + r.top, o = i + f.emojiSize, s = o + f.emojiSize * 2 >= a && i <= a + t + f.emojiSize;
  return !s;
}
function xh(e, a) {
  return e ? {
    top: Math.floor(a / e.emojisPerRow) * e.emojiSize,
    left: a % e.emojisPerRow * e.emojiSize
  } : void 0;
}
var kh = 40;
function Nh(e) {
  var a = vs(), t = at(), n = t[0], r = jt(), f = we(), i = Rf(), o = i[0], s = is(), c = s[0], d = D(), u = d[0], m = d[1], g = ze(function() {
    var b = a.current;
    if (b) {
      var p = b.querySelector(an), M = p?.clientHeight;
      M && (f.current = M);
      var L = c || M || f.current || kh, C = b.clientWidth;
      if (!(C === 0 || L === 0)) {
        var I = Math.max(1, Math.floor(C / L)), R = Math.ceil(e / I), z = R * L;
        m({
          categoryHeight: z,
          emojisPerRow: I,
          emojiSize: L
        });
      }
    }
  }, [a, e, c]);
  return fe(function() {
    g();
  }, [e, n, g, o.length]), fe(function() {
    var b = r.current;
    if (b) {
      var p = function(L) {
        var C = L, I = C.propertyName;
        (I === "width" || I === "max-width" || I === "min-width" || I === "height" || I === "max-height" || I === "min-height") && (typeof queueMicrotask == "function" ? queueMicrotask(function() {
          return g();
        }) : requestAnimationFrame(function() {
          return g();
        }));
      };
      return b.addEventListener("transitionend", p, {
        passive: !0
      }), function() {
        b.removeEventListener("transitionend", p);
      };
    }
  }, [r, g]), u;
}
function Ih() {
  var e = fs(), a = e[0], t = Ug();
  return function(n) {
    var r = et(n), f = a.has(r), i = t(r);
    return {
      failedToLoad: f,
      filteredOut: i,
      hidden: f || i
    };
  };
}
function Sh(e) {
  var a = e.categoryEmojis, t = e.topOffset, n = e.onHeightReady, r = e.scrollTop, f = e.isCategoryVisible, i = Ih(), o = ms(), s = tt(), c = sr(), d = c[0], u = Vm(), m = nt(), g = !cs(), b = Ke(), p = 0, M = a.filter(function(R) {
    var z = u(R), T = i(R), y = T.failedToLoad, N = T.filteredOut, U = T.hidden;
    return !y && !N && !U && !z;
  }), L = Nh(M.length);
  fe(function() {
    L && n(L.categoryHeight);
  }, [L, n, M.length]);
  var C = function(z) {
    var T, y;
    return L && b.current && jh({
      scrollTop: r,
      clientHeight: (T = (y = b.current) == null ? void 0 : y.clientHeight) != null ? T : 0,
      topOffset: t,
      style: z,
      dimensions: L
    });
  }, I = M.reduce(function(R, z, T) {
    var y = et(z, d), N = xh(L, T);
    if (C(N)) {
      var U, q;
      return p++, Kg(z, s, r, (U = (q = b.current) == null ? void 0 : q.clientHeight) != null ? U : 0, t, N, L, m), R;
    }
    return f ? (R.push(x(br, {
      showVariations: g,
      key: y,
      emoji: z,
      unified: y,
      emojiStyle: s,
      lazyLoad: o,
      getEmojiUrl: m,
      style: ve({}, N, {
        position: "absolute"
      })
    })), R) : (p++, R);
  }, []);
  return {
    virtualizedCounter: p,
    emojis: I,
    dimensions: L
  };
}
function Dh(e) {
  var a = e.categoryConfig, t = e.children, n = e.hidden, r = e.hiddenOnSearch, f = e.height, i = fr(a), o = $l(a);
  return x("li", {
    className: oe(Tr.category, n && If.hidden, r && qa.hiddenOnSearch),
    "data-name": i,
    "aria-label": o
  }, x("h2", {
    className: oe(Tr.label)
  }, o), x("div", {
    className: oe(Tr.categoryContent),
    style: {
      height: f
    }
  }, t));
}
var Tr = /* @__PURE__ */ xe.create({
  category: {
    ".": se.category,
    minHeight: "calc(var(--epr-emoji-fullsize) + var(--epr-category-label-height))",
    position: "relative"
  },
  categoryContent: {
    ".": se.categoryContent,
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(auto-fill, var(--epr-emoji-fullsize))",
    justifyContent: "space-between",
    margin: "var(--epr-category-padding)",
    position: "relative"
  },
  label: {
    ".": se.label,
    alignItems: "center",
    // @ts-ignore - backdropFilter is not recognized.
    backdropFilter: "blur(3px)",
    backgroundColor: "var(--epr-category-label-bg-color)",
    color: "var(--epr-category-label-text-color)",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "var(--epr-category-label-height)",
    margin: "0",
    padding: "var(--epr-category-label-padding)",
    position: "sticky",
    textTransform: "capitalize",
    top: "0",
    width: "100%",
    zIndex: "var(--epr-category-label-z-index)"
  }
});
function zh() {
  var e = Yf(), a = Bm(), t = tt(), n = nt(), r = ms(), f = sr(), i = f[0], o = is(), s = o[0], c = o[1], d = we(null);
  if (on(function() {
    d.current && c(d.current.clientHeight);
  }), s)
    return null;
  var u = e[0], m = a(fr(u))[0], g = m ? ga(m, i) : "";
  return m ? x("div", {
    ref: d
  }, x(br, {
    emoji: m,
    unified: g,
    emojiStyle: t,
    getEmojiUrl: n,
    lazyLoad: r,
    showVariations: !1,
    hidden: !1,
    style: {
      opacity: 0,
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      height: "var(--epr-emoji-fullsize)",
      width: "var(--epr-emoji-fullsize)"
    }
  })) : null;
}
function Th(e) {
  var a = e.scrollTop, t = Yf(), n = D({}), r = n[0], f = n[1], i = vs(), o = Fm(), s = Es(i.current), c = 0;
  return x("ul", {
    className: oe(Ah.emojiList),
    ref: i
  }, x(zh, null), t.map(function(d) {
    var u = fr(d), m = c, g = r[u];
    return g && (c += g + s), x(Vo, {
      key: u
    }, x(Eh, {
      categoryEmojis: o(u),
      categoryConfig: d,
      topOffset: m,
      onHeightReady: function(p) {
        r[u] !== p && f(function(M) {
          var L;
          return ve({}, M, (L = {}, L[u] = p, L));
        });
      },
      scrollTop: a
    }));
  }));
}
function Eh(e) {
  var a = e.categoryEmojis, t = e.categoryConfig, n = e.topOffset, r = e.onHeightReady, f = e.scrollTop, i = Rf(), o = i[0], s = Sh({
    categoryEmojis: a,
    topOffset: n,
    onHeightReady: r,
    scrollTop: f,
    isCategoryVisible: o.includes(t.category)
  }), c = s.virtualizedCounter, d = s.emojis, u = s.dimensions;
  return x(Dh, {
    categoryConfig: t,
    height: u?.categoryHeight,
    // Indicates that there are no visible emojis
    // Hence, the category should be hidden
    hidden: !d.length && c === 0
  }, d);
}
var Ah = /* @__PURE__ */ xe.create({
  emojiList: {
    ".": se.emojiList,
    listStyle: "none",
    margin: "0",
    padding: "0"
  }
}), Ph = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=", bt;
(function(e) {
  e[e.Up = 0] = "Up", e[e.Down = 1] = "Down";
})(bt || (bt = {}));
function Rh() {
  var e = dr(), a = vg(), t = Ct(), n = t[0], r = tt(), f = Yh(a), i = f.getTop, o = f.getMenuDirection, s = Ms(), c = Oh(a), d = nt(), u = ia(e.current), m = !!(n && u && Mt(n) && u.classList.contains(se.emojiHasVariations));
  fe(function() {
    m && mr(a.current);
  }, [a, m, e]);
  var g, b;
  return !m && e.current ? s(null) : (g = i(), b = c()), x("div", {
    ref: a,
    className: oe(Tn.variationPicker, o() === bt.Down && Tn.pointingUp, m && Tn.visible),
    style: {
      top: g
    }
  }, m && n ? [ga(n)].concat(ir(n)).slice(0, 6).map(function(p) {
    return x(br, {
      key: p,
      emoji: n,
      unified: p,
      emojiStyle: r,
      showVariations: !1,
      getEmojiUrl: d
    });
  }) : null, x("div", {
    className: oe(Tn.pointer),
    style: b
  }));
}
function Oh(e) {
  var a = dr();
  return function() {
    var n = {};
    if (!e.current)
      return n;
    if (a.current) {
      var r = ia(a.current), f = lh(r);
      if (!r)
        return n;
      n.left = f + r?.clientWidth / 2;
    }
    return n;
  };
}
function Yh(e) {
  var a = dr(), t = Ke(), n = bt.Up;
  return {
    getMenuDirection: r,
    getTop: f
  };
  function r() {
    return n;
  }
  function f() {
    n = bt.Up;
    var i = 0;
    if (!e.current)
      return 0;
    var o = ho(e.current);
    if (a.current) {
      var s, c = t.current, d = ia(a.current), u = ho(d);
      i = Ps(d);
      var m = (s = c?.scrollTop) != null ? s : 0;
      m > i - o && (n = bt.Down, i += u + o);
    }
    return i - o;
  }
}
var Tn = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  variationPicker: {
    ".": se.variationPicker,
    position: "absolute",
    right: "15px",
    left: "15px",
    padding: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    opacity: "0",
    visibility: "hidden",
    pointerEvents: "none",
    top: "-100%",
    border: "1px solid var(--epr-picker-border-color)",
    height: "var(--epr-emoji-variation-picker-height)",
    zIndex: "var(--epr-skin-variation-picker-z-index)",
    background: "var(--epr-emoji-variation-picker-bg-color)",
    transform: "scale(0.9)",
    transition: "transform 0.1s ease-out, opacity 0.2s ease-out"
  },
  visible: {
    opacity: "1",
    visibility: "visible",
    pointerEvents: "all",
    transform: "scale(1)"
  },
  pointingUp: {
    ".": "pointing-up",
    transformOrigin: "center 0%",
    transform: "scale(0.9)"
  },
  ".pointing-up": {
    pointer: {
      top: "0",
      transform: "rotate(180deg) translateY(100%) translateX(18px)"
    }
  },
  pointer: {
    ".": "epr-emoji-pointer",
    content: "",
    position: "absolute",
    width: "25px",
    height: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "50px 15px",
    top: "100%",
    transform: "translateX(-18px)",
    backgroundImage: "url(" + Ph + ")"
  }
}, /* @__PURE__ */ Pa("pointer", {
  backgroundPosition: "-25px 0"
})));
function Uh() {
  var e = Ke(), a = Ch(e);
  return Fs(e, qt.PICKER), Tg(), x("div", {
    className: oe(Qh.body, qa.hiddenOnReactions),
    ref: e
  }, x(Rh, null), x(Th, {
    scrollTop: a
  }));
}
var Qh = /* @__PURE__ */ xe.create({
  body: {
    ".": se.scrollBody,
    flex: "1",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative"
  }
});
function Bh(e, a) {
  if (!e || !a)
    return 0;
  var t = e.getBoundingClientRect(), n = a.getBoundingClientRect();
  return n.height - (t.y - n.y);
}
function Jh(e, a) {
  var t = Ke(), n = xs(), r = js();
  fe(function() {
    if (!e)
      return;
    var f = t.current;
    f?.addEventListener("keydown", s, {
      passive: !0
    }), f?.addEventListener("mouseover", c, !0), f?.addEventListener("focus", i, !0), f?.addEventListener("mouseout", o, {
      passive: !0
    }), f?.addEventListener("blur", o, !0);
    function i(d) {
      var u = ia(d.target);
      if (!u)
        return o();
      var m = Ff(u), g = m.unified, b = m.originalUnified;
      if (!g || !b)
        return o();
      a({
        unified: g,
        originalUnified: b
      });
    }
    function o(d) {
      if (d) {
        var u = d.relatedTarget;
        if (!ia(u))
          return a(null);
      }
      a(null);
    }
    function s(d) {
      d.key === "Escape" && a(null);
    }
    function c(d) {
      if (!n()) {
        var u = ia(d.target);
        if (u) {
          var m = Bh(u, f), g = u.getBoundingClientRect().height;
          if (m < g)
            return Gh(u, a);
          $e(u);
        }
      }
    }
    return function() {
      f?.removeEventListener("mouseover", c), f?.removeEventListener("mouseout", o), f?.removeEventListener("focus", i, !0), f?.removeEventListener("blur", o, !0), f?.removeEventListener("keydown", s);
    };
  }, [t, e, a, n, r]);
}
function Gh(e, a) {
  var t, n = Ff(e), r = n.unified, f = n.originalUnified;
  !r || !f || ((t = document.activeElement) == null || t.blur == null || t.blur(), a({
    unified: r,
    originalUnified: f
  }));
}
var En, tn;
(function(e) {
  e.ROW = "FlexRow", e.COLUMN = "FlexColumn";
})(tn || (tn = {}));
function Zs(e) {
  var a = e.children, t = e.className, n = e.style, r = n === void 0 ? {} : n, f = e.direction, i = f === void 0 ? tn.ROW : f;
  return x("div", {
    style: ve({}, r),
    className: oe(Mo.flex, t, Mo[i])
  }, a);
}
var Mo = /* @__PURE__ */ xe.create((En = {
  flex: {
    display: "flex"
  }
}, En[tn.ROW] = {
  flexDirection: "row"
}, En[tn.COLUMN] = {
  flexDirection: "column"
}, En));
function _h(e) {
  var a = e.className, t = e.style, n = t === void 0 ? {} : t;
  return x("div", {
    style: ve({
      flex: 1
    }, n),
    className: oe(a)
  });
}
function Wh(e) {
  var a = e.children, t = e.className, n = e.style;
  return x("div", {
    style: ve({}, n, {
      position: "absolute"
    }),
    className: t
  }, a);
}
function wr(e) {
  var a = e.children, t = e.className, n = e.style;
  return x("div", {
    style: ve({}, n, {
      position: "relative"
    }),
    className: t
  }, a);
}
function Fh(e) {
  var a = e.isOpen, t = e.onClick, n = e.isActive, r = e.skinToneVariation, f = e.style;
  return x(bn, {
    style: f,
    onClick: t,
    className: oe("epr-tone-" + r, Er.tone, !a && Er.closedTone, n && Er.active),
    "aria-pressed": n,
    "aria-label": "Skin tone " + Mm[r]
  });
}
var Er = /* @__PURE__ */ xe.create({
  closedTone: {
    opacity: "0",
    zIndex: "0"
  },
  active: {
    ".": "epr-active",
    zIndex: "1",
    opacity: "1"
  },
  tone: {
    ".": "epr-tone",
    width: "var(--epr-skin-tone-size)",
    display: "block",
    cursor: "pointer",
    borderRadius: "4px",
    height: "var(--epr-skin-tone-size)",
    position: "absolute",
    right: "0",
    transition: "transform 0.3s ease-in-out, opacity 0.35s ease-in-out",
    zIndex: "0",
    border: "1px solid var(--epr-skin-tone-outer-border-color)",
    boxShadow: "inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",
    ":hover": {
      boxShadow: "0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)"
    },
    ":focus": {
      boxShadow: "0 0 0 3px var(--epr-focus-bg-color)"
    },
    "&.epr-tone-neutral": {
      backgroundColor: "#ffd225"
    },
    "&.epr-tone-1f3fb": {
      backgroundColor: "#ffdfbd"
    },
    "&.epr-tone-1f3fc": {
      backgroundColor: "#e9c197"
    },
    "&.epr-tone-1f3fd": {
      backgroundColor: "#c88e62"
    },
    "&.epr-tone-1f3fe": {
      backgroundColor: "#a86637"
    },
    "&.epr-tone-1f3ff": {
      backgroundColor: "#60463a"
    }
  }
}), _t = 28;
function Zh() {
  return x(wr, {
    style: {
      height: _t
    }
  }, x(Wh, {
    style: {
      bottom: 0,
      right: 0
    }
  }, x(Hs, {
    direction: nn.VERTICAL
  })));
}
function Hs(e) {
  var a = e.direction, t = a === void 0 ? nn.HORIZONTAL : a, n = Uf(), r = cs(), f = hn(), i = f[0], o = f[1], s = sr(), c = s[0], d = s[1], u = sg(), m = rt(), g = ft();
  if (r)
    return null;
  var b = _t * $n.length + "px", p = i ? b : _t + "px", M = t === nn.VERTICAL;
  return x(wr, {
    className: oe(Ot.skinTones, M && Ot.vertical, i && Ot.open, M && i && Ot.verticalShadow),
    style: M ? {
      flexBasis: p,
      height: p
    } : {
      flexBasis: p
    }
  }, x("div", {
    className: oe(Ot.select),
    ref: n
  }, $n.map(function(L, C) {
    var I = L === c;
    return x(Fh, {
      key: L,
      skinToneVariation: L,
      isOpen: i,
      style: {
        transform: oe(M ? "translateY(-" + C * (i ? _t : 0) + "px)" : "translateX(-" + C * (i ? _t : 0) + "px)", i && I && "scale(1.3)")
      },
      isActive: I,
      onClick: function() {
        i ? (d(L), u(L), g()) : o(!0), m();
      }
    });
  })));
}
var nn;
(function(e) {
  e.VERTICAL = "epr-vertical", e.HORIZONTAL = "epr-horizontal";
})(nn || (nn = {}));
var Ot = /* @__PURE__ */ xe.create({
  skinTones: {
    ".": "epr-skin-tones",
    "--": {
      "--epr-skin-tone-size": "15px"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    transition: "all 0.3s ease-in-out",
    padding: "10px 0"
  },
  vertical: {
    padding: "9px",
    alignItems: "flex-end",
    flexDirection: "column",
    borderRadius: "6px",
    border: "1px solid var(--epr-bg-color)"
  },
  verticalShadow: {
    boxShadow: "0px 0 7px var(--epr-picker-border-color)"
  },
  open: {
    // @ts-ignore - backdropFilter is not recognized.
    backdropFilter: "blur(5px)",
    background: "var(--epr-skin-tone-picker-menu-color)",
    ".epr-active": {
      border: "1px solid var(--epr-active-skin-tone-indicator-border-color)"
    }
  },
  select: {
    ".": "epr-skin-tone-select",
    position: "relative",
    width: "var(--epr-skin-tone-size)",
    height: "var(--epr-skin-tone-size)"
  }
});
function Hh() {
  var e = ds(), a = Ss(), t = at(), n = t[0];
  return e.showPreview ? x(Zs, {
    className: oe(Ft.preview, qa.hiddenOnReactions, n && Ft.hideOnReactions)
  }, x(Vh, null), x(_h, null), a ? x(Zh, null) : null) : null;
}
function Vh() {
  var e, a = ds(), t = D(null), n = t[0], r = t[1], f = tt(), i = Ct(), o = i[0], s = nt(), c = Lt(), d = c.emojiByUnified;
  Jh(a.showPreview, r);
  var u = d((e = n?.unified) != null ? e : n?.originalUnified), m = u != null && n != null;
  return x(g, null);
  function g() {
    var b = o ?? d(a.defaultEmoji);
    if (!b)
      return null;
    var p = o ? lo(o) : a.defaultCaption;
    return x(ha, null, x("div", null, m ? x(af, {
      unified: n?.unified,
      emoji: u,
      emojiStyle: f,
      size: 45,
      getEmojiUrl: s,
      className: oe(Ft.emoji)
    }) : b ? x(af, {
      unified: ga(b),
      emoji: b,
      emojiStyle: f,
      size: 45,
      getEmojiUrl: s,
      className: oe(Ft.emoji)
    }) : null), x("div", {
      className: oe(Ft.label)
    }, m ? lo(u) : p));
  }
}
var Ft = /* @__PURE__ */ xe.create({
  preview: {
    alignItems: "center",
    borderTop: "1px solid var(--epr-preview-border-color)",
    height: "var(--epr-preview-height)",
    padding: "0 var(--epr-horizontal-padding)",
    position: "relative",
    zIndex: "var(--epr-preview-z-index)"
  },
  label: {
    color: "var(--epr-preview-text-color)",
    fontSize: "var(--epr-preview-text-size)",
    padding: "var(--epr-preview-text-padding)",
    textTransform: "capitalize"
  },
  emoji: {
    padding: "0"
  },
  hideOnReactions: {
    opacity: "0",
    transition: "opacity 0.5s ease-in-out"
  }
});
function $h(e) {
  var a;
  return (a = e?.getAttribute("data-name")) != null ? a : null;
}
function Kh(e) {
  var a = e.setActiveCategory, t = e.setVisibleCategories, n = Ke();
  fe(function() {
    var r = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), i = n.current, o = new IntersectionObserver(function(s) {
      if (i) {
        for (var c = dm(s), d; !(d = c()).done; ) {
          var u = d.value, m = $h(u.target);
          m && (r.set(m, u.intersectionRatio), f.set(m, u.isIntersecting));
        }
        var g = Array.from(r), b = g.filter(function(z) {
          var T = z[0], y = z[1];
          return y > 0 || f.get(T);
        }).map(function(z) {
          var T = z[0];
          return T;
        });
        t(b);
        var p = g[g.length - 1];
        if (p?.[1] == 1)
          return a(p[0]);
        for (var M = 0, L = g; M < L.length; M++) {
          var C = L[M], I = C[0], R = C[1];
          if (R) {
            a(I);
            break;
          }
        }
      }
    }, {
      root: i,
      threshold: [0, 1]
    });
    return i?.querySelectorAll(ta(se.category)).forEach(function(s) {
      o.observe(s);
    }), function() {
      o.disconnect();
    };
  }, [n, a, t]);
}
function Xh() {
  var e = Ke(), a = jt();
  return function(n) {
    var r;
    if (e.current) {
      var f = (r = e.current) == null ? void 0 : r.querySelector('[data-name="' + n + '"]');
      if (f) {
        var i = f.offsetTop || 0;
        Ls(a.current, i);
      }
    }
  };
}
function qh() {
  var e = ig();
  return e ? e.length === 0 : !1;
}
var e2 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";
function a2(e) {
  var a, t, n = e.isActiveCategory, r = e.category, f = e.allowNavigation, i = e.categoryConfig, o = e.onClick, s = e.customIcon, c = (a = i.icon) != null ? a : s, d = c != null;
  return x(bn, {
    tabIndex: f ? 0 : -1,
    className: oe(jo.catBtn, qa.categoryBtn, d ? jo.customIcon : "epr-icn-" + r, (t = {}, t[se.active] = n, t)),
    onClick: o,
    "aria-label": $l(i),
    "aria-selected": n,
    role: "tab",
    "aria-controls": "epr-category-nav-id"
  }, d ? c : null);
}
var Lo = {
  backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 3)"
}, t2 = {
  backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 2)"
}, Co = {
  ":not(.epr-search-active)": {
    catBtn: {
      ":hover": Lo,
      "&.epr-active": Lo
    }
  }
}, jo = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  catBtn: {
    ".": "epr-cat-btn",
    display: "inline-block",
    transition: "opacity 0.2s ease-in-out",
    position: "relative",
    height: "var(--epr-category-navigation-button-size)",
    width: "var(--epr-category-navigation-button-size)",
    backgroundSize: "calc(var(--epr-category-navigation-button-size) * 10)",
    outline: "none",
    backgroundPosition: "0 0",
    backgroundImage: "url(" + e2 + ")",
    ":focus:before": {
      content: "",
      position: "absolute",
      top: "-2px",
      left: "-2px",
      right: "-2px",
      bottom: "-2px",
      border: "2px solid var(--epr-category-icon-active-color)",
      borderRadius: "50%"
    },
    "&.epr-icn-suggested": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -8)"
    },
    "&.epr-icn-custom": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -9)"
    },
    "&.epr-icn-activities": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -4)"
    },
    "&.epr-icn-animals_nature": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -1)"
    },
    "&.epr-icn-flags": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -7)"
    },
    "&.epr-icn-food_drink": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -2)"
    },
    "&.epr-icn-objects": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -5)"
    },
    "&.epr-icn-smileys_people": {
      backgroundPositionX: "0px"
    },
    "&.epr-icn-symbols": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -6)"
    },
    "&.epr-icn-travel_places": {
      backgroundPositionX: "calc(var(--epr-category-navigation-button-size) * -3)"
    }
  },
  customIcon: {
    ".": "epr-cat-btn-custom-icon",
    backgroundImage: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /* @__PURE__ */ Pa("catBtn", t2), {
  ".epr-dark-theme": /* @__PURE__ */ ve({}, Co),
  ".epr-auto-theme": /* @__PURE__ */ ve({}, Co)
}));
function n2() {
  var e = D(null), a = e[0], t = e[1], n = Rf(), r = n[1], f = Xh();
  Kh({
    setActiveCategory: t,
    setVisibleCategories: r
  });
  var i = cr(), o = Yf(), s = fg(), c = Qf(), d = qh();
  return x("div", {
    className: oe(r2.nav),
    role: "tablist",
    "aria-label": "Category navigation",
    id: "epr-category-nav-id",
    ref: c
  }, o.map(function(u) {
    var m = fr(u), g = m === a;
    if (dh(u) && d)
      return null;
    var b = !i && !g;
    return x(a2, {
      key: m,
      category: m,
      isActiveCategory: g,
      allowNavigation: b,
      categoryConfig: u,
      customIcon: s[m],
      onClick: function() {
        f(m), setTimeout(function() {
          t(m);
        }, 10);
      }
    });
  }));
}
var r2 = /* @__PURE__ */ xe.create({
  nav: {
    ".": "epr-category-nav",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "var(--epr-header-padding)"
  },
  ".epr-search-active": {
    nav: {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    }
  },
  ".epr-main:has(input:not(:placeholder-shown))": {
    nav: {
      opacity: "0.3",
      cursor: "default",
      pointerEvents: "none"
    }
  }
}), Vs = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";
function f2() {
  var e = Ns(), a = tg();
  return x(bn, {
    className: oe(xo.btnClearSearch, qa.visibleOnSearchOnly),
    onClick: e,
    "aria-label": a,
    title: a
  }, x("div", {
    className: oe(xo.icnClearnSearch)
  }));
}
var i2 = {
  ":hover": {
    "> .epr-icn-clear-search": {
      backgroundPositionY: "-60px"
    }
  }
}, xo = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  btnClearSearch: {
    ".": "epr-btn-clear-search",
    position: "absolute",
    right: "var(--epr-search-bar-inner-padding)",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0",
    borderRadius: "50%",
    ":hover": {
      background: "var(--epr-hover-bg-color)"
    },
    ":focus": {
      background: "var(--epr-hover-bg-color)"
    }
  },
  icnClearnSearch: {
    ".": "epr-icn-clear-search",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    height: "20px",
    width: "20px",
    backgroundImage: "url(" + Vs + ")",
    ":hover": {
      backgroundPositionY: "-20px"
    },
    ":focus": {
      backgroundPositionY: "-20px"
    }
  }
}, /* @__PURE__ */ Pa("icnClearnSearch", {
  backgroundPositionY: "-40px"
}), /* @__PURE__ */ Pa("btnClearSearch", i2))), o2 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";
function l2() {
  return x("div", {
    className: oe(s2.icnSearch)
  });
}
var s2 = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  icnSearch: {
    ".": "epr-icn-search",
    content: "",
    position: "absolute",
    top: "50%",
    left: "var(--epr-search-bar-inner-padding)",
    transform: "translateY(-50%)",
    width: "20px",
    height: "20px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: "20px",
    backgroundImage: "url(" + o2 + ")"
  }
}, /* @__PURE__ */ Pa("icnSearch", {
  backgroundPositionY: "-20px"
})));
function c2() {
  var e = gs(), a = Jf();
  return e ? null : x(Zs, {
    className: oe(_n.overlay)
  }, x(d2, null), a ? x(Hs, null) : null);
}
function d2() {
  var e = rt(), a = Ya(), t = ag(), n = rg(), r = Rg(), f = r.statusSearchResults, i = r.searchTerm, o = r.onChange, s = a?.current, c = s?.value;
  return x(wr, {
    className: oe(_n.searchContainer)
  }, x("input", {
    // eslint-disable-next-line jsx-a11y/no-autofocus
    autoFocus: n,
    "aria-label": "Type to search for an emoji",
    onFocus: e,
    className: oe(_n.search),
    type: "text",
    "aria-controls": "epr-search-id",
    placeholder: t,
    onChange: function(u) {
      var m, g;
      o((m = u == null || (g = u.target) == null ? void 0 : g.value) != null ? m : c);
    },
    ref: a
  }), i ? x("div", {
    role: "status",
    className: oe("epr-status-search-results", _n.visuallyHidden),
    "aria-live": "polite",
    id: "epr-search-id",
    "aria-atomic": "true"
  }, f) : null, x(l2, null), x(f2, null));
}
var _n = /* @__PURE__ */ xe.create(/* @__PURE__ */ ve({
  overlay: {
    padding: "var(--epr-header-padding)",
    zIndex: "var(--epr-header-overlay-z-index)"
  },
  searchContainer: {
    ".": "epr-search-container",
    flex: "1",
    display: "block",
    minWidth: "0"
  },
  visuallyHidden: {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  },
  search: {
    outline: "none",
    transition: "all 0.2s ease-in-out",
    color: "var(--epr-search-input-text-color)",
    borderRadius: "var(--epr-search-input-border-radius)",
    padding: "var(--epr-search-input-padding)",
    height: "var(--epr-search-input-height)",
    backgroundColor: "var(--epr-search-input-bg-color)",
    border: "1px solid var(--epr-search-border-color)",
    width: "100%",
    ":focus": {
      backgroundColor: "var(--epr-search-input-bg-color-active)",
      border: "1px solid var(--epr-search-border-color-active)"
    },
    "::placeholder": {
      color: "var(--epr-search-input-placeholder-color)"
    }
  },
  btnClearSearch: {
    ".": "epr-btn-clear-search",
    position: "absolute",
    right: "var(--epr-search-bar-inner-padding)",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0",
    borderRadius: "50%",
    ":hover": {
      background: "var(--epr-hover-bg-color)"
    },
    ":focus": {
      background: "var(--epr-hover-bg-color)"
    }
  },
  icnClearnSearch: {
    ".": "epr-icn-clear-search",
    backgroundColor: "transparent",
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    height: "20px",
    width: "20px",
    backgroundImage: "url(" + Vs + ")",
    ":hover": {
      backgroundPositionY: "-20px"
    },
    ":focus": {
      backgroundPositionY: "-20px"
    }
  }
}, /* @__PURE__ */ Pa("icnClearnSearch", {
  backgroundPositionY: "-40px"
}), /* @__PURE__ */ Pa("btnClearSearch", {
  ":hover > .epr-icn-clear-search": {
    backgroundPositionY: "-60px"
  }
})));
function u2() {
  return x(wr, {
    className: oe("epr-header", qa.hiddenOnReactions)
  }, x(c2, null), x(n2, null));
}
function m2(e) {
  return x(pg, null, x(gm, null), x(Rm, Object.assign({}, e), x(Wm, null, x(g2, null))));
}
function g2() {
  var e = at(), a = e[0], t = ss(), n = D(!a), r = n[0], f = n[1], i = og();
  return fe(function() {
    a && !t || r || f(!0);
  }, [r, t, a]), i ? x(ah, null, x(Lh, null), x(h2, {
    renderAll: r
  })) : null;
}
function h2(e) {
  var a = e.renderAll;
  return a ? x(ha, null, x(u2, null), x(Uh, null), x(Hh, null)) : null;
}
var b2 = /* @__PURE__ */ fn(m2, _l), w2 = /* @__PURE__ */ (function(e) {
  um(a, e);
  function a(n) {
    var r;
    return r = e.call(this, n) || this, r.state = {
      hasError: !1
    }, r;
  }
  a.getDerivedStateFromError = function() {
    return {
      hasError: !0
    };
  };
  var t = a.prototype;
  return t.componentDidCatch = function(r, f) {
    console.error("Emoji Picker React failed to render:", r, f);
  }, t.render = function() {
    return this.state.hasError ? null : this.props.children;
  }, a;
})(lf);
function p2(e) {
  var a = eg({
    onEmojiClick: e.onEmojiClick,
    onReactionClick: e.onReactionClick,
    onSkinToneChange: e.onSkinToneChange
  });
  return x(w2, null, x(os.Provider, {
    value: a
  }, x(b2, Object.assign({}, e))));
}
function y2({ onSend: e }) {
  const [a, t] = D(""), [n, r] = D(!1), [f, i] = D(null), o = we(null), s = we(null), { theme: c } = Tl();
  fe(() => {
    const b = (p) => {
      s.current && !s.current.contains(p.target) && r(!1);
    };
    return n && document.addEventListener("mousedown", b), () => {
      document.removeEventListener("mousedown", b);
    };
  }, [n]);
  const d = (b) => {
    t((p) => p + b.emoji);
  }, u = (b) => {
    const p = b.target.files?.[0];
    if (p) {
      const M = p.type.startsWith("video/"), L = p.type.startsWith("image/");
      if (M || L) {
        const C = URL.createObjectURL(p);
        i({
          type: M ? "video" : "image",
          url: C,
          file: p
        });
      }
    }
  }, m = (b) => {
    b.preventDefault(), (a.trim() || f) && (e(
      a,
      f ? { type: f.type, url: f.url } : void 0
    ), t(""), i(null), o.current && (o.current.value = ""));
  }, g = () => {
    f && (URL.revokeObjectURL(f.url), i(null), o.current && (o.current.value = ""));
  };
  return /* @__PURE__ */ w("div", { className: "border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950", children: [
    f && /* @__PURE__ */ l("div", { className: "px-4 pt-3 pb-2", children: /* @__PURE__ */ w("div", { className: "relative inline-block", children: [
      f.type === "image" ? /* @__PURE__ */ l(
        "img",
        {
          src: f.url,
          alt: "Preview",
          className: "h-24 rounded-lg object-cover"
        }
      ) : /* @__PURE__ */ w("div", { className: "relative h-24 w-32 bg-zinc-900 rounded-lg flex items-center justify-center", children: [
        /* @__PURE__ */ l(wt, { className: "w-8 h-8 text-white" }),
        /* @__PURE__ */ l(
          "video",
          {
            src: f.url,
            className: "absolute inset-0 h-full w-full object-cover rounded-lg opacity-50"
          }
        )
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: g,
          className: "absolute -top-2 -right-2 w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded-full flex items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors",
          "aria-label": "Remove media",
          children: /* @__PURE__ */ l(Aa, { className: "w-4 h-4 text-white dark:text-zinc-900" })
        }
      )
    ] }) }),
    n && /* @__PURE__ */ l("div", { ref: s, className: "absolute bottom-full left-0 mb-2 z-50", children: /* @__PURE__ */ l(
      p2,
      {
        onEmojiClick: d,
        theme: c === "dark" ? Va.DARK : Va.LIGHT,
        height: 350,
        width: 300,
        searchPlaceHolder: "Search emoji...",
        previewConfig: { showPreview: !1 }
      }
    ) }),
    /* @__PURE__ */ l("form", { onSubmit: m, className: "px-3 py-2 safe-area-inset-bottom", children: /* @__PURE__ */ w("div", { className: "flex items-end gap-2", children: [
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => r(!n),
          className: `p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0 ${n ? "bg-zinc-100 dark:bg-zinc-800" : ""}`,
          "aria-label": "Add emoji",
          children: /* @__PURE__ */ l(Sl, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
        }
      ),
      /* @__PURE__ */ l("div", { className: "flex-1 relative", children: /* @__PURE__ */ l(
        "textarea",
        {
          value: a,
          onChange: (b) => t(b.target.value),
          placeholder: "Message",
          rows: 1,
          className: "w-full px-4 py-2.5 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none max-h-32",
          style: {
            minHeight: "40px",
            height: "auto"
          },
          onKeyDown: (b) => {
            b.key === "Enter" && !b.shiftKey && (b.preventDefault(), m(b));
          }
        }
      ) }),
      /* @__PURE__ */ l(
        "input",
        {
          ref: o,
          type: "file",
          accept: "image/*,video/*",
          onChange: u,
          className: "hidden",
          "aria-label": "Select file"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => o.current?.click(),
          className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex-shrink-0",
          "aria-label": "Add attachment",
          children: /* @__PURE__ */ l(w1, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          type: "submit",
          disabled: !a.trim() && !f,
          className: "p-2 rounded-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-300 dark:disabled:bg-zinc-700 disabled:cursor-not-allowed transition-colors flex-shrink-0",
          "aria-label": "Send message",
          children: /* @__PURE__ */ l(k1, { className: "w-5 h-5 text-white" })
        }
      )
    ] }) })
  ] });
}
function v2() {
  const { id: e } = ku(), a = Ha.find((g) => g.id === e), t = B1[e || "1"] || [], [n, r] = D(t), [f, i] = D(!1), [o, s] = D(!1), [c, d] = D(!1);
  if (!a)
    return /* @__PURE__ */ l("div", { className: "h-screen flex items-center justify-center", children: /* @__PURE__ */ l("p", { children: "Conversation not found" }) });
  const u = (g, b) => {
    const p = {
      id: Date.now().toString(),
      text: g,
      sender: "me",
      timestamp: /* @__PURE__ */ new Date(),
      status: "sent",
      media: b
    };
    r([...n, p]), setTimeout(() => i(!0), 1e3), setTimeout(() => {
      i(!1);
      const M = {
        id: (Date.now() + 1).toString(),
        text: b ? b.type === "image" ? "Great photo! 📸" : "Nice video! 🎥" : "Thanks for your message! 👍",
        sender: "other",
        timestamp: /* @__PURE__ */ new Date()
      };
      r((L) => [...L, M]);
    }, 3e3);
  }, m = n.reduce((g, b, p) => {
    const M = n[p - 1], L = !M || M.sender !== b.sender, C = n[p + 1], I = !C || C.sender !== b.sender;
    return g.push({ ...b, isGroupStart: L, isGroupEnd: I }), g;
  }, []);
  return /* @__PURE__ */ w("div", { className: "h-screen flex flex-col bg-white dark:bg-zinc-950", children: [
    /* @__PURE__ */ w("div", { className: "flex items-center gap-3 px-3 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950", children: [
      /* @__PURE__ */ l(
        mn,
        {
          to: "/",
          className: "p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
          "aria-label": "Back",
          children: /* @__PURE__ */ l(Kt, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
        }
      ),
      /* @__PURE__ */ w("div", { className: "flex items-center gap-2 flex-1 min-w-0", children: [
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => s(!0),
            className: "relative flex-shrink-0",
            children: [
              /* @__PURE__ */ l(
                "img",
                {
                  src: a.avatar,
                  alt: a.name,
                  className: "w-9 h-9 rounded-full object-cover"
                }
              ),
              a.online && /* @__PURE__ */ l("div", { className: "absolute bottom-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950" })
            ]
          }
        ),
        /* @__PURE__ */ w("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ l("h2", { className: "font-medium text-zinc-900 dark:text-zinc-50 truncate text-sm", children: a.name }),
          /* @__PURE__ */ l("p", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: a.online ? "Online" : "Offline" })
        ] })
      ] }),
      /* @__PURE__ */ w("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ l(
          "button",
          {
            className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
            "aria-label": "Voice call",
            children: /* @__PURE__ */ l(wa, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
            "aria-label": "Video call",
            children: /* @__PURE__ */ l(wt, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
          }
        ),
        /* @__PURE__ */ w("div", { className: "relative", children: [
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => d(!c),
              className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
              "aria-label": "More options",
              children: /* @__PURE__ */ l(Il, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
            }
          ),
          c && /* @__PURE__ */ w("div", { className: "absolute right-0 top-12 w-56 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-800 py-2 z-50", children: [
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => {
                  s(!0), d(!1);
                },
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "View contact"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Media, links, and docs"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Search"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Mute notifications"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Disappearing messages"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Wallpaper"
              }
            ),
            /* @__PURE__ */ l("div", { className: "h-px bg-zinc-200 dark:bg-zinc-800 my-2" }),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Clear chat"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Export chat"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50",
                children: "Add shortcut"
              }
            ),
            /* @__PURE__ */ l("div", { className: "h-px bg-zinc-200 dark:bg-zinc-800 my-2" }),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-red-500",
                children: "Block"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => d(!1),
                className: "w-full px-4 py-3 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 text-red-500",
                children: "Report"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ w("div", { className: "flex-1 overflow-y-auto px-4 py-4 space-y-1", children: [
      m.map((g) => /* @__PURE__ */ l(
        em,
        {
          message: g,
          showAvatar: g.sender === "other" && g.isGroupStart,
          avatar: a.avatar,
          isGroupStart: g.isGroupStart,
          isGroupEnd: g.isGroupEnd
        },
        g.id
      )),
      f && /* @__PURE__ */ w("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ l(
          "img",
          {
            src: a.avatar,
            alt: a.name,
            className: "w-6 h-6 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ l("div", { className: "bg-zinc-100 dark:bg-zinc-800 rounded-2xl px-4 py-2.5", children: /* @__PURE__ */ w("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ l("span", { className: "w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" }),
          /* @__PURE__ */ l("span", { className: "w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" }),
          /* @__PURE__ */ l("span", { className: "w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ l(y2, { onSend: u }),
    o && /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-black z-50 flex flex-col max-w-md mx-auto", children: [
      /* @__PURE__ */ l("div", { className: "flex items-center justify-between px-4 py-3 bg-black/50", children: /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => s(!1),
            className: "p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ l(Aa, { className: "w-6 h-6 text-white" })
          }
        ),
        /* @__PURE__ */ w("div", { children: [
          /* @__PURE__ */ l("h2", { className: "text-white font-medium", children: a.name }),
          /* @__PURE__ */ l("p", { className: "text-white/70 text-sm", children: "Wave Chat" })
        ] })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ l(
        "img",
        {
          src: a.avatar,
          alt: a.name,
          className: "max-w-full max-h-full object-contain"
        }
      ) })
    ] })
  ] });
}
const Ar = [
  {
    id: "own",
    name: "My Status",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 120 * 6e4),
    isOwn: !0,
    mediaUrl: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?w=1080",
    mediaType: "image"
  },
  {
    id: "1",
    name: "Aadhitya",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 30 * 6e4),
    viewed: !1,
    mediaUrl: "https://images.unsplash.com/photo-1650584997985-e713a869ee77?w=1080",
    mediaType: "image"
  },
  {
    id: "2",
    name: "Shrinath",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 45 * 6e4),
    viewed: !1,
    mediaUrl: "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?w=1080",
    mediaType: "image"
  },
  {
    id: "3",
    name: "Sadhana",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 180 * 6e4),
    viewed: !0,
    mediaUrl: "https://images.unsplash.com/photo-1755004149616-111f60d22d51?w=1080",
    mediaType: "image"
  },
  {
    id: "4",
    name: "Marcus",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 300 * 6e4),
    viewed: !0,
    mediaUrl: "https://images.unsplash.com/photo-1732808460864-b8e5eb489a52?w=1080",
    mediaType: "image"
  }
], M2 = [
  {
    id: "1",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 120 * 6e4),
    type: "incoming",
    callType: "video",
    count: 2
  },
  {
    id: "2",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 240 * 6e4),
    type: "missed",
    callType: "video"
  },
  {
    id: "3",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 360 * 6e4),
    type: "incoming",
    callType: "video",
    count: 3
  },
  {
    id: "4",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 1440 * 6e4),
    type: "incoming",
    callType: "video",
    count: 6
  },
  {
    id: "5",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 1440 * 6e4 - 120 * 6e4),
    type: "incoming",
    callType: "voice"
  },
  {
    id: "6",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 1440 * 6e4 - 360 * 6e4),
    type: "missed",
    callType: "video"
  },
  {
    id: "7",
    name: "M-Lidiya✨❤️",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    timestamp: new Date(Date.now() - 1440 * 6e4 - 480 * 6e4),
    type: "incoming",
    callType: "video",
    count: 2
  }
];
function L2() {
  const [e, a] = D(!1), [t, n] = D(null), r = wf(), f = Ar.find((u) => u.isOwn), i = Ar.filter((u) => !u.isOwn && !u.viewed), o = Ar.filter((u) => !u.isOwn && u.viewed), s = (u) => {
    a(!1), r("/camera");
  }, c = (u) => {
    n(u);
  }, d = () => {
    n(null);
  };
  return /* @__PURE__ */ w(oa, { children: [
    /* @__PURE__ */ w("div", { className: "h-screen flex flex-col bg-white dark:bg-zinc-950 pb-20", children: [
      /* @__PURE__ */ w("div", { className: "px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2", children: [
        /* @__PURE__ */ l("img", { src: gn, alt: "Wave Chat", className: "w-10 h-10 object-contain drop-shadow-lg" }),
        /* @__PURE__ */ l("h1", { className: "text-xl font-semibold text-zinc-900 dark:text-zinc-50", children: "Stories" })
      ] }),
      /* @__PURE__ */ w("div", { className: "flex-1 overflow-y-auto", children: [
        f && /* @__PURE__ */ l("div", { className: "px-4 py-4 border-b border-zinc-200 dark:border-zinc-800", children: /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ w("div", { className: "relative", children: [
            /* @__PURE__ */ l(
              "img",
              {
                src: f.avatar,
                alt: "My story",
                className: "w-14 h-14 rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => a(!0),
                className: "absolute bottom-0 right-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-950",
                children: /* @__PURE__ */ l(Hn, { className: "w-4 h-4 text-white" })
              }
            )
          ] }),
          /* @__PURE__ */ w("div", { className: "flex-1", children: [
            /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-50", children: "My Story" }),
            /* @__PURE__ */ l("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: "Tap to add story" })
          ] })
        ] }) }),
        i.length > 0 && /* @__PURE__ */ w("div", { children: [
          /* @__PURE__ */ l("div", { className: "px-4 py-2", children: /* @__PURE__ */ l("h3", { className: "text-sm font-medium text-zinc-600 dark:text-zinc-400", children: "Recent stories" }) }),
          /* @__PURE__ */ l("div", { className: "space-y-2", children: i.map((u) => /* @__PURE__ */ w(
            "button",
            {
              onClick: () => c(u),
              className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors",
              children: [
                /* @__PURE__ */ l("div", { className: "relative", children: /* @__PURE__ */ l("div", { className: "w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500", children: /* @__PURE__ */ l(
                  "img",
                  {
                    src: u.avatar,
                    alt: u.name,
                    className: "w-full h-full rounded-full object-cover border-2 border-white dark:border-zinc-950"
                  }
                ) }) }),
                /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
                  /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-50", children: u.name }),
                  /* @__PURE__ */ l("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: Qn(u.timestamp) })
                ] })
              ]
            },
            u.id
          )) })
        ] }),
        o.length > 0 && /* @__PURE__ */ w("div", { className: "mt-4", children: [
          /* @__PURE__ */ l("div", { className: "px-4 py-2", children: /* @__PURE__ */ l("h3", { className: "text-sm font-medium text-zinc-600 dark:text-zinc-400", children: "Viewed stories" }) }),
          /* @__PURE__ */ l("div", { className: "space-y-2", children: o.map((u) => /* @__PURE__ */ w(
            "button",
            {
              onClick: () => c(u),
              className: "w-full flex items-center gap-3 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors",
              children: [
                /* @__PURE__ */ l("div", { className: "relative", children: /* @__PURE__ */ l("div", { className: "w-14 h-14 rounded-full p-0.5 bg-zinc-300 dark:bg-zinc-700", children: /* @__PURE__ */ l(
                  "img",
                  {
                    src: u.avatar,
                    alt: u.name,
                    className: "w-full h-full rounded-full object-cover border-2 border-white dark:border-zinc-950"
                  }
                ) }) }),
                /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
                  /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-50", children: u.name }),
                  /* @__PURE__ */ l("p", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: Qn(u.timestamp) })
                ] })
              ]
            },
            u.id
          )) })
        ] })
      ] }),
      /* @__PURE__ */ l(xf, {})
    ] }),
    e && /* @__PURE__ */ l("div", { className: "fixed inset-0 bg-black/80 z-50 flex items-end max-w-md mx-auto", children: /* @__PURE__ */ w("div", { className: "w-full bg-zinc-900 rounded-t-3xl p-6 animate-slide-up", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ l("h2", { className: "text-xl font-semibold text-zinc-100", children: "Add to Story" }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => a(!1),
            className: "p-2 rounded-full hover:bg-zinc-800 transition-colors",
            children: /* @__PURE__ */ l(Aa, { className: "w-6 h-6 text-zinc-100" })
          }
        )
      ] }),
      /* @__PURE__ */ w("div", { className: "space-y-3", children: [
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => s(),
            className: "w-full flex items-center gap-4 p-4 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition-colors",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(l1, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ l("h3", { className: "text-zinc-100 font-medium", children: "Photo" }),
                /* @__PURE__ */ l("p", { className: "text-sm text-zinc-400", children: "Take or upload a photo" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => s(),
            className: "w-full flex items-center gap-4 p-4 bg-zinc-800 rounded-2xl hover:bg-zinc-700 transition-colors",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(Lf, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ l("h3", { className: "text-zinc-100 font-medium", children: "Video" }),
                /* @__PURE__ */ l("p", { className: "text-sm text-zinc-400", children: "Record or upload a video" })
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    t && /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-black z-50 flex flex-col max-w-md mx-auto", children: [
      /* @__PURE__ */ w("div", { className: "absolute top-0 left-0 right-0 z-10 p-4", children: [
        /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l(
            "button",
            {
              onClick: d,
              className: "p-2 rounded-full hover:bg-white/10 transition-colors",
              children: /* @__PURE__ */ l(Aa, { className: "w-6 h-6 text-white" })
            }
          ),
          /* @__PURE__ */ l(
            "img",
            {
              src: t.avatar,
              alt: t.name,
              className: "w-10 h-10 rounded-full object-cover"
            }
          ),
          /* @__PURE__ */ w("div", { className: "flex-1", children: [
            /* @__PURE__ */ l("h3", { className: "font-medium text-white", children: t.name }),
            /* @__PURE__ */ l("p", { className: "text-sm text-white/70", children: Qn(t.timestamp) })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "mt-4 h-1 bg-white/30 rounded-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full bg-white rounded-full animate-progress" }) })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex-1 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600", children: /* @__PURE__ */ w("div", { className: "text-center text-white p-8", children: [
        /* @__PURE__ */ l("div", { className: "text-6xl mb-4", children: "📸" }),
        /* @__PURE__ */ w("h2", { className: "text-2xl font-bold mb-2", children: [
          t.name,
          "'s Story"
        ] }),
        /* @__PURE__ */ l("p", { className: "text-white/80", children: "Story content would appear here" })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            placeholder: "Reply to story...",
            className: "flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20"
          }
        ),
        /* @__PURE__ */ l("button", { className: "p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors", children: /* @__PURE__ */ l("span", { className: "text-2xl", children: "❤️" }) })
      ] }) })
    ] })
  ] });
}
const ko = [
  { id: "normal", name: "Normal", emoji: "😊", cssFilter: "none" },
  { id: "vivid", name: "Vivid", emoji: "🐶", cssFilter: "saturate(1.8) contrast(1.2) brightness(1.1)" },
  { id: "vintage", name: "Vintage", emoji: "🐱", cssFilter: "sepia(0.5) contrast(1.2) brightness(1.1)" },
  { id: "cool", name: "Cool", emoji: "😘", cssFilter: "saturate(1.3) hue-rotate(180deg)" },
  { id: "warm", name: "Warm", emoji: "😍", cssFilter: "saturate(1.4) contrast(1.1) brightness(1.05) hue-rotate(-15deg)" },
  { id: "bw", name: "B&W", emoji: "😎", cssFilter: "grayscale(1) contrast(1.1)" },
  { id: "dramatic", name: "Dramatic", emoji: "🤩", cssFilter: "contrast(1.5) brightness(0.9) saturate(0.8)" },
  { id: "sunset", name: "Sunset", emoji: "😜", cssFilter: "saturate(1.3) contrast(1.1) brightness(1.05) hue-rotate(-20deg) sepia(0.2)" },
  { id: "frost", name: "Frost", emoji: "🥶", cssFilter: "brightness(1.15) saturate(0.8) hue-rotate(200deg)" }
];
function C2({ onCapture: e, onClose: a }) {
  const t = we(null), n = we(null), r = we(null), f = we([]), i = we(null), [o, s] = D(!1), [c, d] = D("photo"), [u, m] = D(null), [g, b] = D(ko[0]), [p, M] = D("user"), [L, C] = D(!0), [I, R] = D(!0), [z, T] = D(!1), [y, N] = D(""), [U, q] = D("#FFFFFF");
  fe(() => (L && !I && X(), () => {
    O();
  }), [p, L, I]);
  const X = async () => {
    try {
      m(null);
      const A = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: p, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: c === "video"
      });
      i.current = A, t.current && (t.current.srcObject = A);
    } catch (A) {
      console.error("Error accessing camera:", A), A.name === "NotAllowedError" || A.name === "PermissionDeniedError" ? m("Camera access was denied. Please allow camera permissions in your browser settings and refresh the page.") : A.name === "NotFoundError" ? m("No camera found. Please connect a camera and try again.") : m("Unable to access camera. " + (A.message || "Please check your browser permissions."));
    }
  }, O = () => {
    i.current && (i.current.getTracks().forEach((A) => A.stop()), i.current = null), r.current && o && r.current.stop();
  }, ce = () => {
    if (I) {
      if (n.current) {
        const A = n.current;
        A.width = 1080, A.height = 1920;
        const G = A.getContext("2d");
        if (G) {
          const ge = G.createLinearGradient(0, 0, A.width, A.height);
          if (ge.addColorStop(0, "#667eea"), ge.addColorStop(1, "#764ba2"), G.fillStyle = ge, G.fillRect(0, 0, A.width, A.height), G.filter = g.cssFilter, y) {
            G.filter = "none", G.fillStyle = U, G.font = "bold 80px sans-serif", G.textAlign = "center", G.shadowColor = "rgba(0,0,0,0.5)", G.shadowBlur = 20, G.shadowOffsetX = 2, G.shadowOffsetY = 2, A.width * 0.9, y.split(" ");
            let Le = A.height / 2;
            G.fillText(y, A.width / 2, Le);
          }
          A.toBlob((Le) => {
            Le && (e(Le, "image"), O(), a());
          }, "image/jpeg", 0.95);
        }
      }
      return;
    }
    if (t.current && n.current) {
      const A = n.current;
      A.width = t.current.videoWidth, A.height = t.current.videoHeight;
      const G = A.getContext("2d");
      G && (G.filter = g.cssFilter, G.drawImage(t.current, 0, 0), y && (G.filter = "none", G.fillStyle = U, G.font = "bold 60px sans-serif", G.textAlign = "center", G.shadowColor = "rgba(0,0,0,0.5)", G.shadowBlur = 15, G.shadowOffsetX = 2, G.shadowOffsetY = 2, G.fillText(y, A.width / 2, A.height / 2)), A.toBlob((ge) => {
        ge && (e(ge, "image"), O(), a());
      }, "image/jpeg", 0.95));
    }
  }, le = () => {
    if (i.current) {
      f.current = [];
      const A = { mimeType: "video/webm;codecs=vp8,opus" }, G = new MediaRecorder(i.current, A);
      G.ondataavailable = (ge) => {
        ge.data.size > 0 && f.current.push(ge.data);
      }, G.onstop = () => {
        const ge = new Blob(f.current, { type: "video/webm" });
        e(ge, "video"), O(), a();
      }, r.current = G, G.start(), s(!0);
    }
  }, ee = () => {
    r.current && o && (r.current.stop(), s(!1));
  }, ae = () => {
    c === "photo" ? ce() : o ? ee() : le();
  }, P = async (A) => {
    if (d(A), A === "video" && i.current) {
      O();
      try {
        const G = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: p, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: !0
        });
        i.current = G, t.current && (t.current.srcObject = G);
      } catch (G) {
        console.error("Error accessing camera with audio:", G);
      }
    }
  };
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-black z-50 flex flex-col", children: [
    /* @__PURE__ */ l("canvas", { ref: n, className: "hidden" }),
    /* @__PURE__ */ w("div", { className: "absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => {
            O(), a();
          },
          className: "w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors",
          "aria-label": "Close camera",
          children: /* @__PURE__ */ l(Aa, { className: "w-5 h-5 text-white" })
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => {
            M((A) => A === "user" ? "environment" : "user");
          },
          className: "w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors",
          children: /* @__PURE__ */ l(C1, { className: "w-5 h-5 text-white" })
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: "flex-1 relative overflow-hidden", children: [
      u ? /* @__PURE__ */ l("div", { className: "w-full h-full flex items-center justify-center text-white text-center px-6", children: /* @__PURE__ */ w("div", { children: [
        /* @__PURE__ */ l(Lf, { className: "w-12 h-12 mx-auto mb-3 opacity-50" }),
        /* @__PURE__ */ l("p", { className: "text-lg mb-1.5 font-medium", children: "Camera Access Denied" }),
        /* @__PURE__ */ l("p", { className: "text-xs opacity-75 mb-4 line-clamp-2", children: "Camera permissions are blocked in this environment. You can use Demo Mode to test the interface." }),
        /* @__PURE__ */ w("div", { className: "flex gap-2 justify-center", children: [
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => {
                R(!0), m(null), C(!0);
              },
              className: "px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors",
              children: "Use Demo Mode"
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => {
                C(!1), m(null);
              },
              className: "px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium transition-colors",
              children: "Try Again"
            }
          )
        ] })
      ] }) }) : I ? /* @__PURE__ */ w("div", { className: "w-full h-full relative", style: { filter: g.cssFilter }, children: [
        /* @__PURE__ */ l("div", { className: "w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600" }),
        y && /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ l(
          "p",
          {
            className: "text-3xl font-bold text-center px-4 break-words max-w-[90%]",
            style: {
              color: U,
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              wordWrap: "break-word"
            },
            children: y
          }
        ) })
      ] }) : /* @__PURE__ */ w("div", { className: "w-full h-full relative", children: [
        /* @__PURE__ */ l(
          "video",
          {
            ref: t,
            autoPlay: !0,
            playsInline: !0,
            muted: !0,
            className: "w-full h-full object-cover",
            style: { filter: g.cssFilter }
          }
        ),
        y && /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ l(
          "p",
          {
            className: "text-3xl font-bold text-center px-4 break-words max-w-[90%]",
            style: {
              color: U,
              textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              wordWrap: "break-word"
            },
            children: y
          }
        ) })
      ] }),
      o && /* @__PURE__ */ w("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium", children: [
        /* @__PURE__ */ l(eo, { className: "w-3 h-3 animate-pulse" }),
        "Recording"
      ] }),
      I && /* @__PURE__ */ l("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium", children: "Demo Mode" }),
      /* @__PURE__ */ w("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-4", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => T(!0),
            className: "w-11 h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors",
            children: /* @__PURE__ */ l(O1, { className: "w-5 h-5 text-white" })
          }
        ),
        /* @__PURE__ */ l("button", { className: "w-11 h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors", children: /* @__PURE__ */ l(Sl, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ l("button", { className: "w-11 h-11 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/40 transition-colors", children: /* @__PURE__ */ l(S1, { className: "w-5 h-5 text-white" }) })
      ] })
    ] }),
    z && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex items-center justify-center p-6", children: /* @__PURE__ */ w("div", { className: "w-full max-w-sm bg-zinc-900 rounded-2xl p-6", children: [
      /* @__PURE__ */ l("h3", { className: "text-white text-lg font-semibold mb-4", children: "Add Text" }),
      /* @__PURE__ */ l(
        "input",
        {
          type: "text",
          value: y,
          onChange: (A) => N(A.target.value),
          placeholder: "Enter your text...",
          className: "w-full px-4 py-3 bg-zinc-800 text-white rounded-xl mb-4 outline-none focus:ring-2 focus:ring-purple-500",
          autoFocus: !0
        }
      ),
      /* @__PURE__ */ w("div", { className: "mb-4", children: [
        /* @__PURE__ */ l("label", { className: "text-white text-sm mb-2 block", children: "Text Color" }),
        /* @__PURE__ */ l("div", { className: "flex gap-2", children: ["#FFFFFF", "#000000", "#FF6B6B", "#4ECDC4", "#FFD93D", "#A78BFA"].map((A) => /* @__PURE__ */ l(
          "button",
          {
            onClick: () => q(A),
            className: `w-10 h-10 rounded-full transition-all ${U === A ? "ring-2 ring-white scale-110" : ""}`,
            style: { backgroundColor: A }
          },
          A
        )) })
      ] }),
      /* @__PURE__ */ w("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => T(!1),
            className: "flex-1 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => T(!1),
            className: "flex-1 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors",
            children: "Done"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ w("div", { className: "pb-safe pb-6 pt-4 px-4", children: [
      /* @__PURE__ */ l("div", { className: "mb-6 overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ l("div", { className: "flex justify-center gap-3 pb-2 px-2", children: ko.map((A) => /* @__PURE__ */ w(
        "button",
        {
          onClick: () => b(A),
          className: "relative flex-shrink-0",
          children: [
            g.id === A.id && /* @__PURE__ */ l("div", { className: "absolute -inset-1 rounded-full border-4 border-white" }),
            /* @__PURE__ */ l(
              "div",
              {
                className: `w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all bg-white overflow-hidden ${g.id === A.id ? "" : "opacity-70"}`,
                style: { filter: A.cssFilter },
                children: A.emoji || "📷"
              }
            )
          ]
        },
        A.id
      )) }) }),
      /* @__PURE__ */ w("div", { className: "flex items-center justify-center gap-8", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => P("photo"),
            className: `text-sm font-semibold transition-colors ${c === "photo" ? "text-white" : "text-white/50"}`,
            children: "PHOTO"
          }
        ),
        (!u || I) && L && /* @__PURE__ */ l(
          "button",
          {
            onClick: ae,
            className: "w-20 h-20 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 transition-all relative",
            "aria-label": c === "photo" ? "Take photo" : o ? "Stop recording" : "Start recording",
            children: c === "photo" ? /* @__PURE__ */ l("div", { className: "w-16 h-16 bg-white rounded-full" }) : o ? /* @__PURE__ */ l(z1, { className: "w-8 h-8 text-red-500 fill-red-500" }) : /* @__PURE__ */ l(eo, { className: "w-16 h-16 text-red-500 fill-red-500" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => P("video"),
            className: `text-sm font-semibold transition-colors ${c === "video" ? "text-white" : "text-white/50"}`,
            children: "VIDEO"
          }
        )
      ] })
    ] })
  ] });
}
function j2({ onClose: e, onSelectContact: a }) {
  const t = Ha.slice(0, 5);
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-zinc-950 z-50 flex flex-col", children: [
    /* @__PURE__ */ w("div", { className: "flex items-center gap-4 px-4 py-3 border-b border-zinc-800", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: e,
          className: "p-2 -ml-2 rounded-full hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ l(Kt, { className: "w-6 h-6 text-zinc-100" })
        }
      ),
      /* @__PURE__ */ l(
        "input",
        {
          type: "text",
          placeholder: "Search name or number...",
          className: "flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        }
      ),
      /* @__PURE__ */ l("button", { className: "p-2 rounded-full hover:bg-zinc-800 transition-colors", children: /* @__PURE__ */ l(ao, { className: "w-6 h-6 text-zinc-100" }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "px-4 py-4 text-center border-b border-zinc-800", children: /* @__PURE__ */ l("p", { className: "text-zinc-400 text-sm", children: "Add up to 31 people" }) }),
    /* @__PURE__ */ w("div", { className: "border-b border-zinc-800", children: [
      /* @__PURE__ */ w("button", { className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors", children: [
        /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(c1, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ l("span", { className: "text-zinc-100 text-lg", children: "New call link" })
      ] }),
      /* @__PURE__ */ w("button", { className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors", children: [
        /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(Dl, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ l("span", { className: "text-zinc-100 text-lg", children: "New contact" }),
        /* @__PURE__ */ l(ao, { className: "w-5 h-5 text-zinc-400 ml-auto" })
      ] })
    ] }),
    /* @__PURE__ */ w("div", { className: "flex-1 overflow-y-auto", children: [
      /* @__PURE__ */ l("div", { className: "px-4 py-3", children: /* @__PURE__ */ l("h3", { className: "text-zinc-400 text-sm", children: "Frequently contacted" }) }),
      /* @__PURE__ */ l("div", { children: t.map((n) => /* @__PURE__ */ w(
        "button",
        {
          onClick: () => {
            a ? a(n) : (alert(`Calling ${n.name}...`), e());
          },
          className: "w-full flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 transition-colors",
          children: [
            /* @__PURE__ */ l(
              "img",
              {
                src: n.avatar,
                alt: n.name,
                className: "w-12 h-12 rounded-full object-cover"
              }
            ),
            /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
              /* @__PURE__ */ l("h3", { className: "text-zinc-100 font-medium", children: n.name }),
              n.lastMessage && /* @__PURE__ */ l("p", { className: "text-zinc-500 text-sm truncate", children: n.lastMessage })
            ] }),
            /* @__PURE__ */ l("div", { className: "w-6 h-6 rounded-full border-2 border-zinc-600" })
          ]
        },
        n.id
      )) })
    ] })
  ] });
}
function me(e) {
  const a = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && a === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || a === "[object Number]" || typeof e == "string" || a === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function He(e, a) {
  return e instanceof Date ? new e.constructor(a) : new Date(a);
}
function Be(e, a) {
  const t = me(e);
  return isNaN(a) ? He(e, NaN) : (a && t.setDate(t.getDate() + a), t);
}
function la(e, a) {
  const t = me(e);
  if (isNaN(a)) return He(e, NaN);
  if (!a)
    return t;
  const n = t.getDate(), r = He(e, t.getTime());
  r.setMonth(t.getMonth() + a + 1, 0);
  const f = r.getDate();
  return n >= f ? r : (t.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    n
  ), t);
}
const $f = 6048e5, x2 = 864e5;
let k2 = {};
function wn() {
  return k2;
}
function pa(e, a) {
  const t = wn(), n = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, r = me(e), f = r.getDay(), i = (f < n ? 7 : 0) + f - n;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function $a(e) {
  return pa(e, { weekStartsOn: 1 });
}
function $s(e) {
  const a = me(e), t = a.getFullYear(), n = He(e, 0);
  n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const r = $a(n), f = He(e, 0);
  f.setFullYear(t, 0, 4), f.setHours(0, 0, 0, 0);
  const i = $a(f);
  return a.getTime() >= r.getTime() ? t + 1 : a.getTime() >= i.getTime() ? t : t - 1;
}
function vt(e) {
  const a = me(e);
  return a.setHours(0, 0, 0, 0), a;
}
function qn(e) {
  const a = me(e), t = new Date(
    Date.UTC(
      a.getFullYear(),
      a.getMonth(),
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
      a.getMilliseconds()
    )
  );
  return t.setUTCFullYear(a.getFullYear()), +e - +t;
}
function ua(e, a) {
  const t = vt(e), n = vt(a), r = +t - qn(t), f = +n - qn(n);
  return Math.round((r - f) / x2);
}
function N2(e) {
  const a = $s(e), t = He(e, 0);
  return t.setFullYear(a, 0, 4), t.setHours(0, 0, 0, 0), $a(t);
}
function tf(e, a) {
  const t = a * 7;
  return Be(e, t);
}
function I2(e, a) {
  return la(e, a * 12);
}
function S2(e) {
  let a;
  return e.forEach(function(t) {
    const n = me(t);
    (a === void 0 || a < n || isNaN(Number(n))) && (a = n);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function D2(e) {
  let a;
  return e.forEach((t) => {
    const n = me(t);
    (!a || a > n || isNaN(+n)) && (a = n);
  }), a || /* @__PURE__ */ new Date(NaN);
}
function Ge(e, a) {
  const t = vt(e), n = vt(a);
  return +t == +n;
}
function Kf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function z2(e) {
  if (!Kf(e) && typeof e != "number")
    return !1;
  const a = me(e);
  return !isNaN(Number(a));
}
function rn(e, a) {
  const t = me(e), n = me(a), r = t.getFullYear() - n.getFullYear(), f = t.getMonth() - n.getMonth();
  return r * 12 + f;
}
function T2(e, a, t) {
  const n = pa(e, t), r = pa(a, t), f = +n - qn(n), i = +r - qn(r);
  return Math.round((f - i) / $f);
}
function Xf(e) {
  const a = me(e), t = a.getMonth();
  return a.setFullYear(a.getFullYear(), t + 1, 0), a.setHours(23, 59, 59, 999), a;
}
function _e(e) {
  const a = me(e);
  return a.setDate(1), a.setHours(0, 0, 0, 0), a;
}
function Ks(e) {
  const a = me(e), t = He(e, 0);
  return t.setFullYear(a.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function qf(e, a) {
  const t = wn(), n = a?.weekStartsOn ?? a?.locale?.options?.weekStartsOn ?? t.weekStartsOn ?? t.locale?.options?.weekStartsOn ?? 0, r = me(e), f = r.getDay(), i = (f < n ? -7 : 0) + 6 - (f - n);
  return r.setDate(r.getDate() + i), r.setHours(23, 59, 59, 999), r;
}
function Xs(e) {
  return qf(e, { weekStartsOn: 1 });
}
const E2 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, A2 = (e, a, t) => {
  let n;
  const r = E2[e];
  return typeof r == "string" ? n = r : a === 1 ? n = r.one : n = r.other.replace("{{count}}", a.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function Pr(e) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const P2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, R2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, O2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Y2 = {
  date: Pr({
    formats: P2,
    defaultWidth: "full"
  }),
  time: Pr({
    formats: R2,
    defaultWidth: "full"
  }),
  dateTime: Pr({
    formats: O2,
    defaultWidth: "full"
  })
}, U2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Q2 = (e, a, t, n) => U2[e];
function Yt(e) {
  return (a, t) => {
    const n = t?.context ? String(t.context) : "standalone";
    let r;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, o = t?.width ? String(t.width) : i;
      r = e.formattingValues[o] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, o = t?.width ? String(t.width) : e.defaultWidth;
      r = e.values[o] || e.values[i];
    }
    const f = e.argumentCallback ? e.argumentCallback(a) : a;
    return r[f];
  };
}
const B2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, J2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, G2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, _2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, W2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, F2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Z2 = (e, a) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, H2 = {
  ordinalNumber: Z2,
  era: Yt({
    values: B2,
    defaultWidth: "wide"
  }),
  quarter: Yt({
    values: J2,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Yt({
    values: G2,
    defaultWidth: "wide"
  }),
  day: Yt({
    values: _2,
    defaultWidth: "wide"
  }),
  dayPeriod: Yt({
    values: W2,
    defaultWidth: "wide",
    formattingValues: F2,
    defaultFormattingWidth: "wide"
  })
};
function Ut(e) {
  return (a, t = {}) => {
    const n = t.width, r = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], f = a.match(r);
    if (!f)
      return null;
    const i = f[0], o = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(o) ? $2(o, (u) => u.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      V2(o, (u) => u.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(s) : s, c = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(c)
    ) : c;
    const d = a.slice(i.length);
    return { value: c, rest: d };
  };
}
function V2(e, a) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && a(e[t]))
      return t;
}
function $2(e, a) {
  for (let t = 0; t < e.length; t++)
    if (a(e[t]))
      return t;
}
function K2(e) {
  return (a, t = {}) => {
    const n = a.match(e.matchPattern);
    if (!n) return null;
    const r = n[0], f = a.match(e.parsePattern);
    if (!f) return null;
    let i = e.valueCallback ? e.valueCallback(f[0]) : f[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const o = a.slice(r.length);
    return { value: i, rest: o };
  };
}
const X2 = /^(\d+)(th|st|nd|rd)?/i, q2 = /\d+/i, e4 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, a4 = {
  any: [/^b/i, /^(a|c)/i]
}, t4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, n4 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, r4 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, f4 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, i4 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, o4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, l4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, s4 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, c4 = {
  ordinalNumber: K2({
    matchPattern: X2,
    parsePattern: q2,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ut({
    matchPatterns: e4,
    defaultMatchWidth: "wide",
    parsePatterns: a4,
    defaultParseWidth: "any"
  }),
  quarter: Ut({
    matchPatterns: t4,
    defaultMatchWidth: "wide",
    parsePatterns: n4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ut({
    matchPatterns: r4,
    defaultMatchWidth: "wide",
    parsePatterns: f4,
    defaultParseWidth: "any"
  }),
  day: Ut({
    matchPatterns: i4,
    defaultMatchWidth: "wide",
    parsePatterns: o4,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ut({
    matchPatterns: l4,
    defaultMatchWidth: "any",
    parsePatterns: s4,
    defaultParseWidth: "any"
  })
}, qs = {
  code: "en-US",
  formatDistance: A2,
  formatLong: Y2,
  formatRelative: Q2,
  localize: H2,
  match: c4,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function d4(e) {
  const a = me(e);
  return ua(a, Ks(a)) + 1;
}
function ec(e) {
  const a = me(e), t = +$a(a) - +N2(a);
  return Math.round(t / $f) + 1;
}
function ac(e, a) {
  const t = me(e), n = t.getFullYear(), r = wn(), f = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, i = He(e, 0);
  i.setFullYear(n + 1, 0, f), i.setHours(0, 0, 0, 0);
  const o = pa(i, a), s = He(e, 0);
  s.setFullYear(n, 0, f), s.setHours(0, 0, 0, 0);
  const c = pa(s, a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= c.getTime() ? n : n - 1;
}
function u4(e, a) {
  const t = wn(), n = a?.firstWeekContainsDate ?? a?.locale?.options?.firstWeekContainsDate ?? t.firstWeekContainsDate ?? t.locale?.options?.firstWeekContainsDate ?? 1, r = ac(e, a), f = He(e, 0);
  return f.setFullYear(r, 0, n), f.setHours(0, 0, 0, 0), pa(f, a);
}
function tc(e, a) {
  const t = me(e), n = +pa(t, a) - +u4(t, a);
  return Math.round(n / $f) + 1;
}
function pe(e, a) {
  const t = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(a, "0");
  return t + n;
}
const Sa = {
  // Year
  y(e, a) {
    const t = e.getFullYear(), n = t > 0 ? t : 1 - t;
    return pe(a === "yy" ? n % 100 : n, a.length);
  },
  // Month
  M(e, a) {
    const t = e.getMonth();
    return a === "M" ? String(t + 1) : pe(t + 1, 2);
  },
  // Day of the month
  d(e, a) {
    return pe(e.getDate(), a.length);
  },
  // AM or PM
  a(e, a) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, a) {
    return pe(e.getHours() % 12 || 12, a.length);
  },
  // Hour [0-23]
  H(e, a) {
    return pe(e.getHours(), a.length);
  },
  // Minute
  m(e, a) {
    return pe(e.getMinutes(), a.length);
  },
  // Second
  s(e, a) {
    return pe(e.getSeconds(), a.length);
  },
  // Fraction of second
  S(e, a) {
    const t = a.length, n = e.getMilliseconds(), r = Math.trunc(
      n * Math.pow(10, t - 3)
    );
    return pe(r, a.length);
  }
}, ct = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, No = {
  // Era
  G: function(e, a, t) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (a) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return t.era(n, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return t.era(n, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return t.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, a, t) {
    if (a === "yo") {
      const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return Sa.y(e, a);
  },
  // Local week-numbering year
  Y: function(e, a, t, n) {
    const r = ac(e, n), f = r > 0 ? r : 1 - r;
    if (a === "YY") {
      const i = f % 100;
      return pe(i, 2);
    }
    return a === "Yo" ? t.ordinalNumber(f, { unit: "year" }) : pe(f, a.length);
  },
  // ISO week-numbering year
  R: function(e, a) {
    const t = $s(e);
    return pe(t, a.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, a) {
    const t = e.getFullYear();
    return pe(t, a.length);
  },
  // Quarter
  Q: function(e, a, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "Q":
        return String(n);
      // 01, 02, 03, 04
      case "QQ":
        return pe(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return t.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return t.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, a, t) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (a) {
      // 1, 2, 3, 4
      case "q":
        return String(n);
      // 01, 02, 03, 04
      case "qq":
        return pe(n, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return t.ordinalNumber(n, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return t.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return t.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return t.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, a, t) {
    const n = e.getMonth();
    switch (a) {
      case "M":
      case "MM":
        return Sa.M(e, a);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return t.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return t.month(n, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return t.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, a, t) {
    const n = e.getMonth();
    switch (a) {
      // 1, 2, ..., 12
      case "L":
        return String(n + 1);
      // 01, 02, ..., 12
      case "LL":
        return pe(n + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return t.ordinalNumber(n + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return t.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return t.month(n, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return t.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, a, t, n) {
    const r = tc(e, n);
    return a === "wo" ? t.ordinalNumber(r, { unit: "week" }) : pe(r, a.length);
  },
  // ISO week of year
  I: function(e, a, t) {
    const n = ec(e);
    return a === "Io" ? t.ordinalNumber(n, { unit: "week" }) : pe(n, a.length);
  },
  // Day of the month
  d: function(e, a, t) {
    return a === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Sa.d(e, a);
  },
  // Day of year
  D: function(e, a, t) {
    const n = d4(e);
    return a === "Do" ? t.ordinalNumber(n, { unit: "dayOfYear" }) : pe(n, a.length);
  },
  // Day of week
  E: function(e, a, t) {
    const n = e.getDay();
    switch (a) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, a, t, n) {
    const r = e.getDay(), f = (r - n.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(f);
      // Padded numerical value
      case "ee":
        return pe(f, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return t.ordinalNumber(f, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, a, t, n) {
    const r = e.getDay(), f = (r - n.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      // Numerical value (same as in `e`)
      case "c":
        return String(f);
      // Padded numerical value
      case "cc":
        return pe(f, a.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return t.ordinalNumber(f, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, a, t) {
    const n = e.getDay(), r = n === 0 ? 7 : n;
    switch (a) {
      // 2
      case "i":
        return String(r);
      // 02
      case "ii":
        return pe(r, a.length);
      // 2nd
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      // Tue
      case "iii":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, a, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, a, t) {
    const n = e.getHours();
    let r;
    switch (n === 12 ? r = ct.noon : n === 0 ? r = ct.midnight : r = n / 12 >= 1 ? "pm" : "am", a) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, a, t) {
    const n = e.getHours();
    let r;
    switch (n >= 17 ? r = ct.evening : n >= 12 ? r = ct.afternoon : n >= 4 ? r = ct.morning : r = ct.night, a) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, a, t) {
    if (a === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), t.ordinalNumber(n, { unit: "hour" });
    }
    return Sa.h(e, a);
  },
  // Hour [0-23]
  H: function(e, a, t) {
    return a === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Sa.H(e, a);
  },
  // Hour [0-11]
  K: function(e, a, t) {
    const n = e.getHours() % 12;
    return a === "Ko" ? t.ordinalNumber(n, { unit: "hour" }) : pe(n, a.length);
  },
  // Hour [1-24]
  k: function(e, a, t) {
    let n = e.getHours();
    return n === 0 && (n = 24), a === "ko" ? t.ordinalNumber(n, { unit: "hour" }) : pe(n, a.length);
  },
  // Minute
  m: function(e, a, t) {
    return a === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Sa.m(e, a);
  },
  // Second
  s: function(e, a, t) {
    return a === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Sa.s(e, a);
  },
  // Fraction of second
  S: function(e, a) {
    return Sa.S(e, a);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, a, t) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (a) {
      // Hours and optional minutes
      case "X":
        return So(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Fa(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Fa(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      // Hours and optional minutes
      case "x":
        return So(n);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Fa(n);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Fa(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Io(n, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Fa(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, a, t) {
    const n = e.getTimezoneOffset();
    switch (a) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Io(n, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Fa(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, a, t) {
    const n = Math.trunc(e.getTime() / 1e3);
    return pe(n, a.length);
  },
  // Milliseconds timestamp
  T: function(e, a, t) {
    const n = e.getTime();
    return pe(n, a.length);
  }
};
function Io(e, a = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), r = Math.trunc(n / 60), f = n % 60;
  return f === 0 ? t + String(r) : t + String(r) + a + pe(f, 2);
}
function So(e, a) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + pe(Math.abs(e) / 60, 2) : Fa(e, a);
}
function Fa(e, a = "") {
  const t = e > 0 ? "-" : "+", n = Math.abs(e), r = pe(Math.trunc(n / 60), 2), f = pe(n % 60, 2);
  return t + r + a + f;
}
const Do = (e, a) => {
  switch (e) {
    case "P":
      return a.date({ width: "short" });
    case "PP":
      return a.date({ width: "medium" });
    case "PPP":
      return a.date({ width: "long" });
    case "PPPP":
    default:
      return a.date({ width: "full" });
  }
}, nc = (e, a) => {
  switch (e) {
    case "p":
      return a.time({ width: "short" });
    case "pp":
      return a.time({ width: "medium" });
    case "ppp":
      return a.time({ width: "long" });
    case "pppp":
    default:
      return a.time({ width: "full" });
  }
}, m4 = (e, a) => {
  const t = e.match(/(P+)(p+)?/) || [], n = t[1], r = t[2];
  if (!r)
    return Do(e, a);
  let f;
  switch (n) {
    case "P":
      f = a.dateTime({ width: "short" });
      break;
    case "PP":
      f = a.dateTime({ width: "medium" });
      break;
    case "PPP":
      f = a.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      f = a.dateTime({ width: "full" });
      break;
  }
  return f.replace("{{date}}", Do(n, a)).replace("{{time}}", nc(r, a));
}, g4 = {
  p: nc,
  P: m4
}, h4 = /^D+$/, b4 = /^Y+$/, w4 = ["D", "DD", "YY", "YYYY"];
function p4(e) {
  return h4.test(e);
}
function y4(e) {
  return b4.test(e);
}
function v4(e, a, t) {
  const n = M4(e, a, t);
  if (console.warn(n), w4.includes(e)) throw new RangeError(n);
}
function M4(e, a, t) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${a}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const L4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, C4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, j4 = /^'([^]*?)'?$/, x4 = /''/g, k4 = /[a-zA-Z]/;
function fa(e, a, t) {
  const n = wn(), r = t?.locale ?? n.locale ?? qs, f = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = me(e);
  if (!z2(o))
    throw new RangeError("Invalid time value");
  let s = a.match(C4).map((d) => {
    const u = d[0];
    if (u === "p" || u === "P") {
      const m = g4[u];
      return m(d, r.formatLong);
    }
    return d;
  }).join("").match(L4).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const u = d[0];
    if (u === "'")
      return { isToken: !1, value: N4(d) };
    if (No[u])
      return { isToken: !0, value: d };
    if (u.match(k4))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + u + "`"
      );
    return { isToken: !1, value: d };
  });
  r.localize.preprocessor && (s = r.localize.preprocessor(o, s));
  const c = {
    firstWeekContainsDate: f,
    weekStartsOn: i,
    locale: r
  };
  return s.map((d) => {
    if (!d.isToken) return d.value;
    const u = d.value;
    (!t?.useAdditionalWeekYearTokens && y4(u) || !t?.useAdditionalDayOfYearTokens && p4(u)) && v4(u, a, String(e));
    const m = No[u[0]];
    return m(o, u, r.localize, c);
  }).join("");
}
function N4(e) {
  const a = e.match(j4);
  return a ? a[1].replace(x4, "'") : e;
}
function I4(e) {
  const a = me(e), t = a.getFullYear(), n = a.getMonth(), r = He(e, 0);
  return r.setFullYear(t, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function S4(e) {
  return Math.trunc(+me(e) / 1e3);
}
function D4(e) {
  const a = me(e), t = a.getMonth();
  return a.setFullYear(a.getFullYear(), t + 1, 0), a.setHours(0, 0, 0, 0), a;
}
function z4(e, a) {
  return T2(
    D4(e),
    _e(e),
    a
  ) + 1;
}
function nf(e, a) {
  const t = me(e), n = me(a);
  return t.getTime() > n.getTime();
}
function rc(e, a) {
  const t = me(e), n = me(a);
  return +t < +n;
}
function ei(e, a) {
  const t = me(e), n = me(a);
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth();
}
function T4(e, a) {
  const t = me(e), n = me(a);
  return t.getFullYear() === n.getFullYear();
}
function Rr(e, a) {
  return Be(e, -a);
}
function Or(e, a) {
  const t = me(e), n = t.getFullYear(), r = t.getDate(), f = He(e, 0);
  f.setFullYear(n, a, 15), f.setHours(0, 0, 0, 0);
  const i = I4(f);
  return t.setMonth(a, Math.min(r, i)), t;
}
function zo(e, a) {
  const t = me(e);
  return isNaN(+t) ? He(e, NaN) : (t.setFullYear(a), t);
}
var K = function() {
  return K = Object.assign || function(a) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var f in t) Object.prototype.hasOwnProperty.call(t, f) && (a[f] = t[f]);
    }
    return a;
  }, K.apply(this, arguments);
};
function E4(e, a) {
  var t = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      a.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (t[n[r]] = e[n[r]]);
  return t;
}
function fc(e, a, t) {
  for (var n = 0, r = a.length, f; n < r; n++)
    (f || !(n in a)) && (f || (f = Array.prototype.slice.call(a, 0, n)), f[n] = a[n]);
  return e.concat(f || Array.prototype.slice.call(a));
}
function pn(e) {
  return e.mode === "multiple";
}
function yn(e) {
  return e.mode === "range";
}
function pr(e) {
  return e.mode === "single";
}
var A4 = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function P4(e, a) {
  return fa(e, "LLLL y", a);
}
function R4(e, a) {
  return fa(e, "d", a);
}
function O4(e, a) {
  return fa(e, "LLLL", a);
}
function Y4(e) {
  return "".concat(e);
}
function U4(e, a) {
  return fa(e, "cccccc", a);
}
function Q4(e, a) {
  return fa(e, "yyyy", a);
}
var B4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: P4,
  formatDay: R4,
  formatMonthCaption: O4,
  formatWeekNumber: Y4,
  formatWeekdayName: U4,
  formatYearCaption: Q4
}), J4 = function(e, a, t) {
  return fa(e, "do MMMM (EEEE)", t);
}, G4 = function() {
  return "Month: ";
}, _4 = function() {
  return "Go to next month";
}, W4 = function() {
  return "Go to previous month";
}, F4 = function(e, a) {
  return fa(e, "cccc", a);
}, Z4 = function(e) {
  return "Week n. ".concat(e);
}, H4 = function() {
  return "Year: ";
}, V4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: J4,
  labelMonthDropdown: G4,
  labelNext: _4,
  labelPrevious: W4,
  labelWeekNumber: Z4,
  labelWeekday: F4,
  labelYearDropdown: H4
});
function $4() {
  var e = "buttons", a = A4, t = qs, n = {}, r = {}, f = 1, i = {}, o = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: a,
    formatters: B4,
    labels: V4,
    locale: t,
    modifiersClassNames: n,
    modifiers: r,
    numberOfMonths: f,
    styles: i,
    today: o,
    mode: "default"
  };
}
function K4(e) {
  var a = e.fromYear, t = e.toYear, n = e.fromMonth, r = e.toMonth, f = e.fromDate, i = e.toDate;
  return n ? f = _e(n) : a && (f = new Date(a, 0, 1)), r ? i = Xf(r) : t && (i = new Date(t, 11, 31)), {
    fromDate: f ? vt(f) : void 0,
    toDate: i ? vt(i) : void 0
  };
}
var ic = je(void 0);
function X4(e) {
  var a, t = e.initialProps, n = $4(), r = K4(t), f = r.fromDate, i = r.toDate, o = (a = t.captionLayout) !== null && a !== void 0 ? a : n.captionLayout;
  o !== "buttons" && (!f || !i) && (o = "buttons");
  var s;
  (pr(t) || pn(t) || yn(t)) && (s = t.onSelect);
  var c = K(K(K({}, n), t), { captionLayout: o, classNames: K(K({}, n.classNames), t.classNames), components: K({}, t.components), formatters: K(K({}, n.formatters), t.formatters), fromDate: f, labels: K(K({}, n.labels), t.labels), mode: t.mode || n.mode, modifiers: K(K({}, n.modifiers), t.modifiers), modifiersClassNames: K(K({}, n.modifiersClassNames), t.modifiersClassNames), onSelect: s, styles: K(K({}, n.styles), t.styles), toDate: i });
  return l(ic.Provider, { value: c, children: e.children });
}
function Me() {
  var e = Z(ic);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function oc(e) {
  var a = Me(), t = a.locale, n = a.classNames, r = a.styles, f = a.formatters.formatCaption;
  return l("div", { className: n.caption_label, style: r.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: f(e.displayMonth, { locale: t }) });
}
function q4(e) {
  return l("svg", K({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: l("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function lc(e) {
  var a, t, n = e.onChange, r = e.value, f = e.children, i = e.caption, o = e.className, s = e.style, c = Me(), d = (t = (a = c.components) === null || a === void 0 ? void 0 : a.IconDropdown) !== null && t !== void 0 ? t : q4;
  return w("div", { className: o, style: s, children: [l("span", { className: c.classNames.vhidden, children: e["aria-label"] }), l("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: r, onChange: n, children: f }), w("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, l(d, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function eb(e) {
  var a, t = Me(), n = t.fromDate, r = t.toDate, f = t.styles, i = t.locale, o = t.formatters.formatMonthCaption, s = t.classNames, c = t.components, d = t.labels.labelMonthDropdown;
  if (!n)
    return l(oa, {});
  if (!r)
    return l(oa, {});
  var u = [];
  if (T4(n, r))
    for (var m = _e(n), g = n.getMonth(); g <= r.getMonth(); g++)
      u.push(Or(m, g));
  else
    for (var m = _e(/* @__PURE__ */ new Date()), g = 0; g <= 11; g++)
      u.push(Or(m, g));
  var b = function(M) {
    var L = Number(M.target.value), C = Or(_e(e.displayMonth), L);
    e.onChange(C);
  }, p = (a = c?.Dropdown) !== null && a !== void 0 ? a : lc;
  return l(p, { name: "months", "aria-label": d(), className: s.dropdown_month, style: f.dropdown_month, onChange: b, value: e.displayMonth.getMonth(), caption: o(e.displayMonth, { locale: i }), children: u.map(function(M) {
    return l("option", { value: M.getMonth(), children: o(M, { locale: i }) }, M.getMonth());
  }) });
}
function ab(e) {
  var a, t = e.displayMonth, n = Me(), r = n.fromDate, f = n.toDate, i = n.locale, o = n.styles, s = n.classNames, c = n.components, d = n.formatters.formatYearCaption, u = n.labels.labelYearDropdown, m = [];
  if (!r)
    return l(oa, {});
  if (!f)
    return l(oa, {});
  for (var g = r.getFullYear(), b = f.getFullYear(), p = g; p <= b; p++)
    m.push(zo(Ks(/* @__PURE__ */ new Date()), p));
  var M = function(C) {
    var I = zo(_e(t), Number(C.target.value));
    e.onChange(I);
  }, L = (a = c?.Dropdown) !== null && a !== void 0 ? a : lc;
  return l(L, { name: "years", "aria-label": u(), className: s.dropdown_year, style: o.dropdown_year, onChange: M, value: t.getFullYear(), caption: d(t, { locale: i }), children: m.map(function(C) {
    return l("option", { value: C.getFullYear(), children: d(C, { locale: i }) }, C.getFullYear());
  }) });
}
function tb(e, a) {
  var t = D(e), n = t[0], r = t[1], f = a === void 0 ? n : a;
  return [f, r];
}
function nb(e) {
  var a = e.month, t = e.defaultMonth, n = e.today, r = a || t || n || /* @__PURE__ */ new Date(), f = e.toDate, i = e.fromDate, o = e.numberOfMonths, s = o === void 0 ? 1 : o;
  if (f && rn(f, r) < 0) {
    var c = -1 * (s - 1);
    r = la(f, c);
  }
  return i && rn(r, i) < 0 && (r = i), _e(r);
}
function rb() {
  var e = Me(), a = nb(e), t = tb(a, e.month), n = t[0], r = t[1], f = function(i) {
    var o;
    if (!e.disableNavigation) {
      var s = _e(i);
      r(s), (o = e.onMonthChange) === null || o === void 0 || o.call(e, s);
    }
  };
  return [n, f];
}
function fb(e, a) {
  for (var t = a.reverseMonths, n = a.numberOfMonths, r = _e(e), f = _e(la(r, n)), i = rn(f, r), o = [], s = 0; s < i; s++) {
    var c = la(r, s);
    o.push(c);
  }
  return t && (o = o.reverse()), o;
}
function ib(e, a) {
  if (!a.disableNavigation) {
    var t = a.toDate, n = a.pagedNavigation, r = a.numberOfMonths, f = r === void 0 ? 1 : r, i = n ? f : 1, o = _e(e);
    if (!t)
      return la(o, i);
    var s = rn(t, e);
    if (!(s < f))
      return la(o, i);
  }
}
function ob(e, a) {
  if (!a.disableNavigation) {
    var t = a.fromDate, n = a.pagedNavigation, r = a.numberOfMonths, f = r === void 0 ? 1 : r, i = n ? f : 1, o = _e(e);
    if (!t)
      return la(o, -i);
    var s = rn(o, t);
    if (!(s <= 0))
      return la(o, -i);
  }
}
var sc = je(void 0);
function lb(e) {
  var a = Me(), t = rb(), n = t[0], r = t[1], f = fb(n, a), i = ib(n, a), o = ob(n, a), s = function(u) {
    return f.some(function(m) {
      return ei(u, m);
    });
  }, c = function(u, m) {
    s(u) || (m && rc(u, m) ? r(la(u, 1 + a.numberOfMonths * -1)) : r(u));
  }, d = {
    currentMonth: n,
    displayMonths: f,
    goToMonth: r,
    goToDate: c,
    previousMonth: o,
    nextMonth: i,
    isDateDisplayed: s
  };
  return l(sc.Provider, { value: d, children: e.children });
}
function vn() {
  var e = Z(sc);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function To(e) {
  var a, t = Me(), n = t.classNames, r = t.styles, f = t.components, i = vn().goToMonth, o = function(d) {
    i(la(d, e.displayIndex ? -e.displayIndex : 0));
  }, s = (a = f?.CaptionLabel) !== null && a !== void 0 ? a : oc, c = l(s, { id: e.id, displayMonth: e.displayMonth });
  return w("div", { className: n.caption_dropdowns, style: r.caption_dropdowns, children: [l("div", { className: n.vhidden, children: c }), l(eb, { onChange: o, displayMonth: e.displayMonth }), l(ab, { onChange: o, displayMonth: e.displayMonth })] });
}
function sb(e) {
  return l("svg", K({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function cb(e) {
  return l("svg", K({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: l("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var er = Ka(function(e, a) {
  var t = Me(), n = t.classNames, r = t.styles, f = [n.button_reset, n.button];
  e.className && f.push(e.className);
  var i = f.join(" "), o = K(K({}, r.button_reset), r.button);
  return e.style && Object.assign(o, e.style), l("button", K({}, e, { ref: a, type: "button", className: i, style: o }));
});
function db(e) {
  var a, t, n = Me(), r = n.dir, f = n.locale, i = n.classNames, o = n.styles, s = n.labels, c = s.labelPrevious, d = s.labelNext, u = n.components;
  if (!e.nextMonth && !e.previousMonth)
    return l(oa, {});
  var m = c(e.previousMonth, { locale: f }), g = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), b = d(e.nextMonth, { locale: f }), p = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), M = (a = u?.IconRight) !== null && a !== void 0 ? a : cb, L = (t = u?.IconLeft) !== null && t !== void 0 ? t : sb;
  return w("div", { className: i.nav, style: o.nav, children: [!e.hidePrevious && l(er, { name: "previous-month", "aria-label": m, className: g, style: o.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: r === "rtl" ? l(M, { className: i.nav_icon, style: o.nav_icon }) : l(L, { className: i.nav_icon, style: o.nav_icon }) }), !e.hideNext && l(er, { name: "next-month", "aria-label": b, className: p, style: o.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: r === "rtl" ? l(L, { className: i.nav_icon, style: o.nav_icon }) : l(M, { className: i.nav_icon, style: o.nav_icon }) })] });
}
function Eo(e) {
  var a = Me().numberOfMonths, t = vn(), n = t.previousMonth, r = t.nextMonth, f = t.goToMonth, i = t.displayMonths, o = i.findIndex(function(b) {
    return ei(e.displayMonth, b);
  }), s = o === 0, c = o === i.length - 1, d = a > 1 && (s || !c), u = a > 1 && (c || !s), m = function() {
    n && f(n);
  }, g = function() {
    r && f(r);
  };
  return l(db, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: u, nextMonth: r, previousMonth: n, onPreviousClick: m, onNextClick: g });
}
function ub(e) {
  var a, t = Me(), n = t.classNames, r = t.disableNavigation, f = t.styles, i = t.captionLayout, o = t.components, s = (a = o?.CaptionLabel) !== null && a !== void 0 ? a : oc, c;
  return r ? c = l(s, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = l(To, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = w(oa, { children: [l(To, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), l(Eo, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = w(oa, { children: [l(s, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(Eo, { displayMonth: e.displayMonth, id: e.id })] }), l("div", { className: n.caption, style: f.caption, children: c });
}
function mb(e) {
  var a = Me(), t = a.footer, n = a.styles, r = a.classNames.tfoot;
  return t ? l("tfoot", { className: r, style: n.tfoot, children: l("tr", { children: l("td", { colSpan: 8, children: t }) }) }) : l(oa, {});
}
function gb(e, a, t) {
  for (var n = t ? $a(/* @__PURE__ */ new Date()) : pa(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: a }), r = [], f = 0; f < 7; f++) {
    var i = Be(n, f);
    r.push(i);
  }
  return r;
}
function hb() {
  var e = Me(), a = e.classNames, t = e.styles, n = e.showWeekNumber, r = e.locale, f = e.weekStartsOn, i = e.ISOWeek, o = e.formatters.formatWeekdayName, s = e.labels.labelWeekday, c = gb(r, f, i);
  return w("tr", { style: t.head_row, className: a.head_row, children: [n && l("td", { style: t.head_cell, className: a.head_cell }), c.map(function(d, u) {
    return l("th", { scope: "col", className: a.head_cell, style: t.head_cell, "aria-label": s(d, { locale: r }), children: o(d, { locale: r }) }, u);
  })] });
}
function bb() {
  var e, a = Me(), t = a.classNames, n = a.styles, r = a.components, f = (e = r?.HeadRow) !== null && e !== void 0 ? e : hb;
  return l("thead", { style: n.head, className: t.head, children: l(f, {}) });
}
function wb(e) {
  var a = Me(), t = a.locale, n = a.formatters.formatDay;
  return l(oa, { children: n(e.date, { locale: t }) });
}
var ai = je(void 0);
function pb(e) {
  if (!pn(e.initialProps)) {
    var a = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return l(ai.Provider, { value: a, children: e.children });
  }
  return l(yb, { initialProps: e.initialProps, children: e.children });
}
function yb(e) {
  var a = e.initialProps, t = e.children, n = a.selected, r = a.min, f = a.max, i = function(c, d, u) {
    var m, g;
    (m = a.onDayClick) === null || m === void 0 || m.call(a, c, d, u);
    var b = !!(d.selected && r && n?.length === r);
    if (!b) {
      var p = !!(!d.selected && f && n?.length === f);
      if (!p) {
        var M = n ? fc([], n) : [];
        if (d.selected) {
          var L = M.findIndex(function(C) {
            return Ge(c, C);
          });
          M.splice(L, 1);
        } else
          M.push(c);
        (g = a.onSelect) === null || g === void 0 || g.call(a, M, c, d, u);
      }
    }
  }, o = {
    disabled: []
  };
  n && o.disabled.push(function(c) {
    var d = f && n.length > f - 1, u = n.some(function(m) {
      return Ge(m, c);
    });
    return !!(d && !u);
  });
  var s = {
    selected: n,
    onDayClick: i,
    modifiers: o
  };
  return l(ai.Provider, { value: s, children: t });
}
function ti() {
  var e = Z(ai);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function vb(e, a) {
  var t = a || {}, n = t.from, r = t.to;
  return n && r ? Ge(r, e) && Ge(n, e) ? void 0 : Ge(r, e) ? { from: r, to: void 0 } : Ge(n, e) ? void 0 : nf(n, e) ? { from: e, to: r } : { from: n, to: e } : r ? nf(e, r) ? { from: r, to: e } : { from: e, to: r } : n ? rc(e, n) ? { from: e, to: n } : { from: n, to: e } : { from: e, to: void 0 };
}
var ni = je(void 0);
function Mb(e) {
  if (!yn(e.initialProps)) {
    var a = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return l(ni.Provider, { value: a, children: e.children });
  }
  return l(Lb, { initialProps: e.initialProps, children: e.children });
}
function Lb(e) {
  var a = e.initialProps, t = e.children, n = a.selected, r = n || {}, f = r.from, i = r.to, o = a.min, s = a.max, c = function(g, b, p) {
    var M, L;
    (M = a.onDayClick) === null || M === void 0 || M.call(a, g, b, p);
    var C = vb(g, n);
    (L = a.onSelect) === null || L === void 0 || L.call(a, C, g, b, p);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (f ? (d.range_start = [f], i ? (d.range_end = [i], Ge(f, i) || (d.range_middle = [
    {
      after: f,
      before: i
    }
  ])) : d.range_end = [f]) : i && (d.range_start = [i], d.range_end = [i]), o && (f && !i && d.disabled.push({
    after: Rr(f, o - 1),
    before: Be(f, o - 1)
  }), f && i && d.disabled.push({
    after: f,
    before: Be(f, o - 1)
  }), !f && i && d.disabled.push({
    after: Rr(i, o - 1),
    before: Be(i, o - 1)
  })), s) {
    if (f && !i && (d.disabled.push({
      before: Be(f, -s + 1)
    }), d.disabled.push({
      after: Be(f, s - 1)
    })), f && i) {
      var u = ua(i, f) + 1, m = s - u;
      d.disabled.push({
        before: Rr(f, m)
      }), d.disabled.push({
        after: Be(i, m)
      });
    }
    !f && i && (d.disabled.push({
      before: Be(i, -s + 1)
    }), d.disabled.push({
      after: Be(i, s - 1)
    }));
  }
  return l(ni.Provider, { value: { selected: n, onDayClick: c, modifiers: d }, children: t });
}
function ri() {
  var e = Z(ni);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Wn(e) {
  return Array.isArray(e) ? fc([], e) : e !== void 0 ? [e] : [];
}
function Cb(e) {
  var a = {};
  return Object.entries(e).forEach(function(t) {
    var n = t[0], r = t[1];
    a[n] = Wn(r);
  }), a;
}
var sa;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(sa || (sa = {}));
var jb = sa.Selected, Ca = sa.Disabled, xb = sa.Hidden, kb = sa.Today, Yr = sa.RangeEnd, Ur = sa.RangeMiddle, Qr = sa.RangeStart, Nb = sa.Outside;
function Ib(e, a, t) {
  var n, r = (n = {}, n[jb] = Wn(e.selected), n[Ca] = Wn(e.disabled), n[xb] = Wn(e.hidden), n[kb] = [e.today], n[Yr] = [], n[Ur] = [], n[Qr] = [], n[Nb] = [], n);
  return e.fromDate && r[Ca].push({ before: e.fromDate }), e.toDate && r[Ca].push({ after: e.toDate }), pn(e) ? r[Ca] = r[Ca].concat(a.modifiers[Ca]) : yn(e) && (r[Ca] = r[Ca].concat(t.modifiers[Ca]), r[Qr] = t.modifiers[Qr], r[Ur] = t.modifiers[Ur], r[Yr] = t.modifiers[Yr]), r;
}
var cc = je(void 0);
function Sb(e) {
  var a = Me(), t = ti(), n = ri(), r = Ib(a, t, n), f = Cb(a.modifiers), i = K(K({}, r), f);
  return l(cc.Provider, { value: i, children: e.children });
}
function dc() {
  var e = Z(cc);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function Db(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function zb(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Tb(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Eb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ab(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Pb(e, a) {
  var t, n = a.from, r = a.to;
  if (n && r) {
    var f = ua(r, n) < 0;
    f && (t = [r, n], n = t[0], r = t[1]);
    var i = ua(e, n) >= 0 && ua(r, e) >= 0;
    return i;
  }
  return r ? Ge(r, e) : n ? Ge(n, e) : !1;
}
function Rb(e) {
  return Kf(e);
}
function Ob(e) {
  return Array.isArray(e) && e.every(Kf);
}
function Yb(e, a) {
  return a.some(function(t) {
    if (typeof t == "boolean")
      return t;
    if (Rb(t))
      return Ge(e, t);
    if (Ob(t))
      return t.includes(e);
    if (zb(t))
      return Pb(e, t);
    if (Ab(t))
      return t.dayOfWeek.includes(e.getDay());
    if (Db(t)) {
      var n = ua(t.before, e), r = ua(t.after, e), f = n > 0, i = r < 0, o = nf(t.before, t.after);
      return o ? i && f : f || i;
    }
    return Tb(t) ? ua(e, t.after) > 0 : Eb(t) ? ua(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
  });
}
function fi(e, a, t) {
  var n = Object.keys(a).reduce(function(f, i) {
    var o = a[i];
    return Yb(e, o) && f.push(i), f;
  }, []), r = {};
  return n.forEach(function(f) {
    return r[f] = !0;
  }), t && !ei(e, t) && (r.outside = !0), r;
}
function Ub(e, a) {
  for (var t = _e(e[0]), n = Xf(e[e.length - 1]), r, f, i = t; i <= n; ) {
    var o = fi(i, a), s = !o.disabled && !o.hidden;
    if (!s) {
      i = Be(i, 1);
      continue;
    }
    if (o.selected)
      return i;
    o.today && !f && (f = i), r || (r = i), i = Be(i, 1);
  }
  return f || r;
}
var Qb = 365;
function uc(e, a) {
  var t = a.moveBy, n = a.direction, r = a.context, f = a.modifiers, i = a.retry, o = i === void 0 ? { count: 0, lastFocused: e } : i, s = r.weekStartsOn, c = r.fromDate, d = r.toDate, u = r.locale, m = {
    day: Be,
    week: tf,
    month: la,
    year: I2,
    startOfWeek: function(M) {
      return r.ISOWeek ? $a(M) : pa(M, { locale: u, weekStartsOn: s });
    },
    endOfWeek: function(M) {
      return r.ISOWeek ? Xs(M) : qf(M, { locale: u, weekStartsOn: s });
    }
  }, g = m[t](e, n === "after" ? 1 : -1);
  n === "before" && c ? g = S2([c, g]) : n === "after" && d && (g = D2([d, g]));
  var b = !0;
  if (f) {
    var p = fi(g, f);
    b = !p.disabled && !p.hidden;
  }
  return b ? g : o.count > Qb ? o.lastFocused : uc(g, {
    moveBy: t,
    direction: n,
    context: r,
    modifiers: f,
    retry: K(K({}, o), { count: o.count + 1 })
  });
}
var mc = je(void 0);
function Bb(e) {
  var a = vn(), t = dc(), n = D(), r = n[0], f = n[1], i = D(), o = i[0], s = i[1], c = Ub(a.displayMonths, t), d = r ?? (o && a.isDateDisplayed(o)) ? o : c, u = function() {
    s(r), f(void 0);
  }, m = function(M) {
    f(M);
  }, g = Me(), b = function(M, L) {
    if (r) {
      var C = uc(r, {
        moveBy: M,
        direction: L,
        context: g,
        modifiers: t
      });
      Ge(r, C) || (a.goToDate(C, r), m(C));
    }
  }, p = {
    focusedDay: r,
    focusTarget: d,
    blur: u,
    focus: m,
    focusDayAfter: function() {
      return b("day", "after");
    },
    focusDayBefore: function() {
      return b("day", "before");
    },
    focusWeekAfter: function() {
      return b("week", "after");
    },
    focusWeekBefore: function() {
      return b("week", "before");
    },
    focusMonthBefore: function() {
      return b("month", "before");
    },
    focusMonthAfter: function() {
      return b("month", "after");
    },
    focusYearBefore: function() {
      return b("year", "before");
    },
    focusYearAfter: function() {
      return b("year", "after");
    },
    focusStartOfWeek: function() {
      return b("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return b("endOfWeek", "after");
    }
  };
  return l(mc.Provider, { value: p, children: e.children });
}
function ii() {
  var e = Z(mc);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Jb(e, a) {
  var t = dc(), n = fi(e, t, a);
  return n;
}
var oi = je(void 0);
function Gb(e) {
  if (!pr(e.initialProps)) {
    var a = {
      selected: void 0
    };
    return l(oi.Provider, { value: a, children: e.children });
  }
  return l(_b, { initialProps: e.initialProps, children: e.children });
}
function _b(e) {
  var a = e.initialProps, t = e.children, n = function(f, i, o) {
    var s, c, d;
    if ((s = a.onDayClick) === null || s === void 0 || s.call(a, f, i, o), i.selected && !a.required) {
      (c = a.onSelect) === null || c === void 0 || c.call(a, void 0, f, i, o);
      return;
    }
    (d = a.onSelect) === null || d === void 0 || d.call(a, f, f, i, o);
  }, r = {
    selected: a.selected,
    onDayClick: n
  };
  return l(oi.Provider, { value: r, children: t });
}
function gc() {
  var e = Z(oi);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function Wb(e, a) {
  var t = Me(), n = gc(), r = ti(), f = ri(), i = ii(), o = i.focusDayAfter, s = i.focusDayBefore, c = i.focusWeekAfter, d = i.focusWeekBefore, u = i.blur, m = i.focus, g = i.focusMonthBefore, b = i.focusMonthAfter, p = i.focusYearBefore, M = i.focusYearAfter, L = i.focusStartOfWeek, C = i.focusEndOfWeek, I = function(P) {
    var k, A, G, ge;
    pr(t) ? (k = n.onDayClick) === null || k === void 0 || k.call(n, e, a, P) : pn(t) ? (A = r.onDayClick) === null || A === void 0 || A.call(r, e, a, P) : yn(t) ? (G = f.onDayClick) === null || G === void 0 || G.call(f, e, a, P) : (ge = t.onDayClick) === null || ge === void 0 || ge.call(t, e, a, P);
  }, R = function(P) {
    var k;
    m(e), (k = t.onDayFocus) === null || k === void 0 || k.call(t, e, a, P);
  }, z = function(P) {
    var k;
    u(), (k = t.onDayBlur) === null || k === void 0 || k.call(t, e, a, P);
  }, T = function(P) {
    var k;
    (k = t.onDayMouseEnter) === null || k === void 0 || k.call(t, e, a, P);
  }, y = function(P) {
    var k;
    (k = t.onDayMouseLeave) === null || k === void 0 || k.call(t, e, a, P);
  }, N = function(P) {
    var k;
    (k = t.onDayPointerEnter) === null || k === void 0 || k.call(t, e, a, P);
  }, U = function(P) {
    var k;
    (k = t.onDayPointerLeave) === null || k === void 0 || k.call(t, e, a, P);
  }, q = function(P) {
    var k;
    (k = t.onDayTouchCancel) === null || k === void 0 || k.call(t, e, a, P);
  }, X = function(P) {
    var k;
    (k = t.onDayTouchEnd) === null || k === void 0 || k.call(t, e, a, P);
  }, O = function(P) {
    var k;
    (k = t.onDayTouchMove) === null || k === void 0 || k.call(t, e, a, P);
  }, ce = function(P) {
    var k;
    (k = t.onDayTouchStart) === null || k === void 0 || k.call(t, e, a, P);
  }, le = function(P) {
    var k;
    (k = t.onDayKeyUp) === null || k === void 0 || k.call(t, e, a, P);
  }, ee = function(P) {
    var k;
    switch (P.key) {
      case "ArrowLeft":
        P.preventDefault(), P.stopPropagation(), t.dir === "rtl" ? o() : s();
        break;
      case "ArrowRight":
        P.preventDefault(), P.stopPropagation(), t.dir === "rtl" ? s() : o();
        break;
      case "ArrowDown":
        P.preventDefault(), P.stopPropagation(), c();
        break;
      case "ArrowUp":
        P.preventDefault(), P.stopPropagation(), d();
        break;
      case "PageUp":
        P.preventDefault(), P.stopPropagation(), P.shiftKey ? p() : g();
        break;
      case "PageDown":
        P.preventDefault(), P.stopPropagation(), P.shiftKey ? M() : b();
        break;
      case "Home":
        P.preventDefault(), P.stopPropagation(), L();
        break;
      case "End":
        P.preventDefault(), P.stopPropagation(), C();
        break;
    }
    (k = t.onDayKeyDown) === null || k === void 0 || k.call(t, e, a, P);
  }, ae = {
    onClick: I,
    onFocus: R,
    onBlur: z,
    onKeyDown: ee,
    onKeyUp: le,
    onMouseEnter: T,
    onMouseLeave: y,
    onPointerEnter: N,
    onPointerLeave: U,
    onTouchCancel: q,
    onTouchEnd: X,
    onTouchMove: O,
    onTouchStart: ce
  };
  return ae;
}
function Fb() {
  var e = Me(), a = gc(), t = ti(), n = ri(), r = pr(e) ? a.selected : pn(e) ? t.selected : yn(e) ? n.selected : void 0;
  return r;
}
function Zb(e) {
  return Object.values(sa).includes(e);
}
function Hb(e, a) {
  var t = [e.classNames.day];
  return Object.keys(a).forEach(function(n) {
    var r = e.modifiersClassNames[n];
    if (r)
      t.push(r);
    else if (Zb(n)) {
      var f = e.classNames["day_".concat(n)];
      f && t.push(f);
    }
  }), t;
}
function Vb(e, a) {
  var t = K({}, e.styles.day);
  return Object.keys(a).forEach(function(n) {
    var r;
    t = K(K({}, t), (r = e.modifiersStyles) === null || r === void 0 ? void 0 : r[n]);
  }), t;
}
function $b(e, a, t) {
  var n, r, f, i = Me(), o = ii(), s = Jb(e, a), c = Wb(e, s), d = Fb(), u = !!(i.onDayClick || i.mode !== "default");
  fe(function() {
    var T;
    s.outside || o.focusedDay && u && Ge(o.focusedDay, e) && ((T = t.current) === null || T === void 0 || T.focus());
  }, [
    o.focusedDay,
    e,
    t,
    u,
    s.outside
  ]);
  var m = Hb(i, s).join(" "), g = Vb(i, s), b = !!(s.outside && !i.showOutsideDays || s.hidden), p = (f = (r = i.components) === null || r === void 0 ? void 0 : r.DayContent) !== null && f !== void 0 ? f : wb, M = l(p, { date: e, displayMonth: a, activeModifiers: s }), L = {
    style: g,
    className: m,
    children: M,
    role: "gridcell"
  }, C = o.focusTarget && Ge(o.focusTarget, e) && !s.outside, I = o.focusedDay && Ge(o.focusedDay, e), R = K(K(K({}, L), (n = { disabled: s.disabled, role: "gridcell" }, n["aria-selected"] = s.selected, n.tabIndex = I || C ? 0 : -1, n)), c), z = {
    isButton: u,
    isHidden: b,
    activeModifiers: s,
    selectedDays: d,
    buttonProps: R,
    divProps: L
  };
  return z;
}
function Kb(e) {
  var a = we(null), t = $b(e.date, e.displayMonth, a);
  return t.isHidden ? l("div", { role: "gridcell" }) : t.isButton ? l(er, K({ name: "day", ref: a }, t.buttonProps)) : l("div", K({}, t.divProps));
}
function Xb(e) {
  var a = e.number, t = e.dates, n = Me(), r = n.onWeekNumberClick, f = n.styles, i = n.classNames, o = n.locale, s = n.labels.labelWeekNumber, c = n.formatters.formatWeekNumber, d = c(Number(a), { locale: o });
  if (!r)
    return l("span", { className: i.weeknumber, style: f.weeknumber, children: d });
  var u = s(Number(a), { locale: o }), m = function(g) {
    r(a, t, g);
  };
  return l(er, { name: "week-number", "aria-label": u, className: i.weeknumber, style: f.weeknumber, onClick: m, children: d });
}
function qb(e) {
  var a, t, n = Me(), r = n.styles, f = n.classNames, i = n.showWeekNumber, o = n.components, s = (a = o?.Day) !== null && a !== void 0 ? a : Kb, c = (t = o?.WeekNumber) !== null && t !== void 0 ? t : Xb, d;
  return i && (d = l("td", { className: f.cell, style: r.cell, children: l(c, { number: e.weekNumber, dates: e.dates }) })), w("tr", { className: f.row, style: r.row, children: [d, e.dates.map(function(u) {
    return l("td", { className: f.cell, style: r.cell, role: "presentation", children: l(s, { displayMonth: e.displayMonth, date: u }) }, S4(u));
  })] });
}
function Ao(e, a, t) {
  for (var n = t?.ISOWeek ? Xs(a) : qf(a, t), r = t?.ISOWeek ? $a(e) : pa(e, t), f = ua(n, r), i = [], o = 0; o <= f; o++)
    i.push(Be(r, o));
  var s = i.reduce(function(c, d) {
    var u = t?.ISOWeek ? ec(d) : tc(d, t), m = c.find(function(g) {
      return g.weekNumber === u;
    });
    return m ? (m.dates.push(d), c) : (c.push({
      weekNumber: u,
      dates: [d]
    }), c);
  }, []);
  return s;
}
function ew(e, a) {
  var t = Ao(_e(e), Xf(e), a);
  if (a?.useFixedWeeks) {
    var n = z4(e, a);
    if (n < 6) {
      var r = t[t.length - 1], f = r.dates[r.dates.length - 1], i = tf(f, 6 - n), o = Ao(tf(f, 1), i, a);
      t.push.apply(t, o);
    }
  }
  return t;
}
function aw(e) {
  var a, t, n, r = Me(), f = r.locale, i = r.classNames, o = r.styles, s = r.hideHead, c = r.fixedWeeks, d = r.components, u = r.weekStartsOn, m = r.firstWeekContainsDate, g = r.ISOWeek, b = ew(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: g,
    locale: f,
    weekStartsOn: u,
    firstWeekContainsDate: m
  }), p = (a = d?.Head) !== null && a !== void 0 ? a : bb, M = (t = d?.Row) !== null && t !== void 0 ? t : qb, L = (n = d?.Footer) !== null && n !== void 0 ? n : mb;
  return w("table", { id: e.id, className: i.table, style: o.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!s && l(p, {}), l("tbody", { className: i.tbody, style: o.tbody, children: b.map(function(C) {
    return l(M, { displayMonth: e.displayMonth, dates: C.dates, weekNumber: C.weekNumber }, C.weekNumber);
  }) }), l(L, { displayMonth: e.displayMonth })] });
}
function tw() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var nw = tw() ? on : fe, Br = !1, rw = 0;
function Po() {
  return "react-day-picker-".concat(++rw);
}
function fw(e) {
  var a, t = e ?? (Br ? Po() : null), n = D(t), r = n[0], f = n[1];
  return nw(function() {
    r === null && f(Po());
  }, []), fe(function() {
    Br === !1 && (Br = !0);
  }, []), (a = e ?? r) !== null && a !== void 0 ? a : void 0;
}
function iw(e) {
  var a, t, n = Me(), r = n.dir, f = n.classNames, i = n.styles, o = n.components, s = vn().displayMonths, c = fw(n.id ? "".concat(n.id, "-").concat(e.displayIndex) : void 0), d = n.id ? "".concat(n.id, "-grid-").concat(e.displayIndex) : void 0, u = [f.month], m = i.month, g = e.displayIndex === 0, b = e.displayIndex === s.length - 1, p = !g && !b;
  r === "rtl" && (a = [g, b], b = a[0], g = a[1]), g && (u.push(f.caption_start), m = K(K({}, m), i.caption_start)), b && (u.push(f.caption_end), m = K(K({}, m), i.caption_end)), p && (u.push(f.caption_between), m = K(K({}, m), i.caption_between));
  var M = (t = o?.Caption) !== null && t !== void 0 ? t : ub;
  return w("div", { className: u.join(" "), style: m, children: [l(M, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), l(aw, { id: d, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function ow(e) {
  var a = Me(), t = a.classNames, n = a.styles;
  return l("div", { className: t.months, style: n.months, children: e.children });
}
function lw(e) {
  var a, t, n = e.initialProps, r = Me(), f = ii(), i = vn(), o = D(!1), s = o[0], c = o[1];
  fe(function() {
    r.initialFocus && f.focusTarget && (s || (f.focus(f.focusTarget), c(!0)));
  }, [
    r.initialFocus,
    s,
    f.focus,
    f.focusTarget,
    f
  ]);
  var d = [r.classNames.root, r.className];
  r.numberOfMonths > 1 && d.push(r.classNames.multiple_months), r.showWeekNumber && d.push(r.classNames.with_weeknumber);
  var u = K(K({}, r.styles.root), r.style), m = Object.keys(n).filter(function(b) {
    return b.startsWith("data-");
  }).reduce(function(b, p) {
    var M;
    return K(K({}, b), (M = {}, M[p] = n[p], M));
  }, {}), g = (t = (a = n.components) === null || a === void 0 ? void 0 : a.Months) !== null && t !== void 0 ? t : ow;
  return l("div", K({ className: d.join(" "), style: u, dir: r.dir, id: r.id, nonce: n.nonce, title: n.title, lang: n.lang }, m, { children: l(g, { children: i.displayMonths.map(function(b, p) {
    return l(iw, { displayIndex: p, displayMonth: b }, p);
  }) }) }));
}
function sw(e) {
  var a = e.children, t = E4(e, ["children"]);
  return l(X4, { initialProps: t, children: l(lb, { children: l(Gb, { initialProps: t, children: l(pb, { initialProps: t, children: l(Mb, { initialProps: t, children: l(Sb, { children: l(Bb, { children: a }) }) }) }) }) }) });
}
function cw(e) {
  return l(sw, K({}, e, { children: l(lw, { initialProps: e }) }));
}
function hc(e) {
  var a, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (a = 0; a < r; a++) e[a] && (t = hc(e[a])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function bc() {
  for (var e, a, t = 0, n = "", r = arguments.length; t < r; t++) (e = arguments[t]) && (a = hc(e)) && (n && (n += " "), n += a);
  return n;
}
const li = "-", dw = (e) => {
  const a = mw(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const o = i.split(li);
      return o[0] === "" && o.length !== 1 && o.shift(), wc(o, a) || uw(i);
    },
    getConflictingClassGroupIds: (i, o) => {
      const s = t[i] || [];
      return o && n[i] ? [...s, ...n[i]] : s;
    }
  };
}, wc = (e, a) => {
  if (e.length === 0)
    return a.classGroupId;
  const t = e[0], n = a.nextPart.get(t), r = n ? wc(e.slice(1), n) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const f = e.join(li);
  return a.validators.find(({
    validator: i
  }) => i(f))?.classGroupId;
}, Ro = /^\[(.+)\]$/, uw = (e) => {
  if (Ro.test(e)) {
    const a = Ro.exec(e)[1], t = a?.substring(0, a.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, mw = (e) => {
  const {
    theme: a,
    classGroups: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const r in t)
    rf(t[r], n, r, a);
  return n;
}, rf = (e, a, t, n) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const f = r === "" ? a : Oo(a, r);
      f.classGroupId = t;
      return;
    }
    if (typeof r == "function") {
      if (gw(r)) {
        rf(r(n), a, t, n);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: t
      });
      return;
    }
    Object.entries(r).forEach(([f, i]) => {
      rf(i, Oo(a, f), t, n);
    });
  });
}, Oo = (e, a) => {
  let t = e;
  return a.split(li).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, gw = (e) => e.isThemeGetter, hw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const r = (f, i) => {
    t.set(f, i), a++, a > e && (a = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(f) {
      let i = t.get(f);
      if (i !== void 0)
        return i;
      if ((i = n.get(f)) !== void 0)
        return r(f, i), i;
    },
    set(f, i) {
      t.has(f) ? t.set(f, i) : r(f, i);
    }
  };
}, ff = "!", of = ":", bw = of.length, ww = (e) => {
  const {
    prefix: a,
    experimentalParseClassName: t
  } = e;
  let n = (r) => {
    const f = [];
    let i = 0, o = 0, s = 0, c;
    for (let b = 0; b < r.length; b++) {
      let p = r[b];
      if (i === 0 && o === 0) {
        if (p === of) {
          f.push(r.slice(s, b)), s = b + bw;
          continue;
        }
        if (p === "/") {
          c = b;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? o++ : p === ")" && o--;
    }
    const d = f.length === 0 ? r : r.substring(s), u = pw(d), m = u !== d, g = c && c > s ? c - s : void 0;
    return {
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: u,
      maybePostfixModifierPosition: g
    };
  };
  if (a) {
    const r = a + of, f = n;
    n = (i) => i.startsWith(r) ? f(i.substring(r.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const r = n;
    n = (f) => t({
      className: f,
      parseClassName: r
    });
  }
  return n;
}, pw = (e) => e.endsWith(ff) ? e.substring(0, e.length - 1) : e.startsWith(ff) ? e.substring(1) : e, yw = (e) => {
  const a = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const r = [];
    let f = [];
    return n.forEach((i) => {
      i[0] === "[" || a[i] ? (r.push(...f.sort(), i), f = []) : f.push(i);
    }), r.push(...f.sort()), r;
  };
}, vw = (e) => ({
  cache: hw(e.cacheSize),
  parseClassName: ww(e),
  sortModifiers: yw(e),
  ...dw(e)
}), Mw = /\s+/, Lw = (e, a) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: r,
    sortModifiers: f
  } = a, i = [], o = e.trim().split(Mw);
  let s = "";
  for (let c = o.length - 1; c >= 0; c -= 1) {
    const d = o[c], {
      isExternal: u,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: b,
      maybePostfixModifierPosition: p
    } = t(d);
    if (u) {
      s = d + (s.length > 0 ? " " + s : s);
      continue;
    }
    let M = !!p, L = n(M ? b.substring(0, p) : b);
    if (!L) {
      if (!M) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (L = n(b), !L) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      M = !1;
    }
    const C = f(m).join(":"), I = g ? C + ff : C, R = I + L;
    if (i.includes(R))
      continue;
    i.push(R);
    const z = r(L, M);
    for (let T = 0; T < z.length; ++T) {
      const y = z[T];
      i.push(I + y);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Cw() {
  let e = 0, a, t, n = "";
  for (; e < arguments.length; )
    (a = arguments[e++]) && (t = pc(a)) && (n && (n += " "), n += t);
  return n;
}
const pc = (e) => {
  if (typeof e == "string")
    return e;
  let a, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (a = pc(e[n])) && (t && (t += " "), t += a);
  return t;
};
function jw(e, ...a) {
  let t, n, r, f = i;
  function i(s) {
    const c = a.reduce((d, u) => u(d), e());
    return t = vw(c), n = t.cache.get, r = t.cache.set, f = o, o(s);
  }
  function o(s) {
    const c = n(s);
    if (c)
      return c;
    const d = Lw(s, t);
    return r(s, d), d;
  }
  return function() {
    return f(Cw.apply(null, arguments));
  };
}
const Ee = (e) => {
  const a = (t) => t[e] || [];
  return a.isThemeGetter = !0, a;
}, yc = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, xw = /^\d+\/\d+$/, kw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Iw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Sw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Dw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, dt = (e) => xw.test(e), ne = (e) => !!e && !Number.isNaN(Number(e)), Da = (e) => !!e && Number.isInteger(Number(e)), Jr = (e) => e.endsWith("%") && ne(e.slice(0, -1)), ja = (e) => kw.test(e), zw = () => !0, Tw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nw.test(e) && !Iw.test(e)
), Mc = () => !1, Ew = (e) => Sw.test(e), Aw = (e) => Dw.test(e), Pw = (e) => !B(e) && !J(e), Rw = (e) => xt(e, jc, Mc), B = (e) => yc.test(e), Wa = (e) => xt(e, xc, Tw), Gr = (e) => xt(e, Bw, ne), Yo = (e) => xt(e, Lc, Mc), Ow = (e) => xt(e, Cc, Aw), An = (e) => xt(e, kc, Ew), J = (e) => vc.test(e), Qt = (e) => kt(e, xc), Yw = (e) => kt(e, Jw), Uo = (e) => kt(e, Lc), Uw = (e) => kt(e, jc), Qw = (e) => kt(e, Cc), Pn = (e) => kt(e, kc, !0), xt = (e, a, t) => {
  const n = yc.exec(e);
  return n ? n[1] ? a(n[1]) : t(n[2]) : !1;
}, kt = (e, a, t = !1) => {
  const n = vc.exec(e);
  return n ? n[1] ? a(n[1]) : t : !1;
}, Lc = (e) => e === "position" || e === "percentage", Cc = (e) => e === "image" || e === "url", jc = (e) => e === "length" || e === "size" || e === "bg-size", xc = (e) => e === "length", Bw = (e) => e === "number", Jw = (e) => e === "family-name", kc = (e) => e === "shadow", Gw = () => {
  const e = Ee("color"), a = Ee("font"), t = Ee("text"), n = Ee("font-weight"), r = Ee("tracking"), f = Ee("leading"), i = Ee("breakpoint"), o = Ee("container"), s = Ee("spacing"), c = Ee("radius"), d = Ee("shadow"), u = Ee("inset-shadow"), m = Ee("text-shadow"), g = Ee("drop-shadow"), b = Ee("blur"), p = Ee("perspective"), M = Ee("aspect"), L = Ee("ease"), C = Ee("animate"), I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], z = () => [...R(), J, B], T = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], N = () => [J, B, s], U = () => [dt, "full", "auto", ...N()], q = () => [Da, "none", "subgrid", J, B], X = () => ["auto", {
    span: ["full", Da, J, B]
  }, Da, J, B], O = () => [Da, "auto", J, B], ce = () => ["auto", "min", "max", "fr", J, B], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ee = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], ae = () => ["auto", ...N()], P = () => [dt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], k = () => [e, J, B], A = () => [...R(), Uo, Yo, {
    position: [J, B]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ge = () => ["auto", "cover", "contain", Uw, Rw, {
    size: [J, B]
  }], Le = () => [Jr, Qt, Wa], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    J,
    B
  ], de = () => ["", ne, Qt, Wa], Ie = () => ["solid", "dashed", "dotted", "double"], Je = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ke = () => [ne, Jr, Uo, Yo], Na = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    J,
    B
  ], it = () => ["none", ne, J, B], ot = () => ["none", ne, J, B], Nt = () => [ne, J, B], Se = () => [dt, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ja],
      breakpoint: [ja],
      color: [zw],
      container: [ja],
      "drop-shadow": [ja],
      ease: ["in", "out", "in-out"],
      font: [Pw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ja],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ja],
      shadow: [ja],
      spacing: ["px", ne],
      text: [ja],
      "text-shadow": [ja],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", dt, B, J, M]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ne, B, J, o]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": I()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": I()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: z()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": y()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: U()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": U()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": U()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: U()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: U()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: U()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: U()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: U()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: U()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Da, "auto", J, B]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [dt, "full", "auto", o, ...N()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ne, dt, "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ne, J, B]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ne, J, B]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Da, "first", "last", "none", J, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: X()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: X()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ce()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ce()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ee(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ee()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ee(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ee(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ee()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: ae()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: ae()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: ae()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: ae()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: ae()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: ae()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: ae()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: ae()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: ae()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": N()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: P()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [o, "screen", ...P()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          o,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...P()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          o,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...P()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...P()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...P()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...P()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Qt, Wa]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, J, Gr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Jr, B]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yw, B, a]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, J, B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ne, "none", J, Gr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          f,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J, B]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", J, B]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: k()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: k()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ne, "from-font", "auto", J, Wa]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: k()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ne, "auto", J, B]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, B]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", J, B]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: A()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ge()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Da, J, B],
          radial: ["", J, B],
          conic: [Da, J, B]
        }, Qw, Ow]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: k()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Le()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: k()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: de()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": de()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": de()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": de()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": de()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": de()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": de()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": de()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": de()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": de()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": de()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Ie(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: k()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": k()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": k()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": k()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": k()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": k()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": k()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": k()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": k()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: k()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ne, J, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ne, Qt, Wa]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: k()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Pn,
          An
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: k()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Pn, An]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": k()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: de()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: k()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ne, Wa]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": k()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": de()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": k()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Pn, An]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": k()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ne, J, B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Je(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Je()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ke()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ke()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": k()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ke()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ke()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": k()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ke()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ke()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": k()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ke()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ke()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": k()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ke()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ke()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": k()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ke()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ke()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": k()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ke()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ke()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": k()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, B]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ke()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ke()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": R()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ke()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ke()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": k()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: A()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ge()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", J, B]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          B
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Na()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ne, J, B]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ne, J, B]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Pn,
          An
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": k()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ne, J, B]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ne, J, B]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ne, J, B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ne, J, B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ne, J, B]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          J,
          B
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Na()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ne, J, B]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ne, J, B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ne, J, B]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ne, J, B]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ne, J, B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ne, J, B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ne, J, B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ne, J, B]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, B]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ne, "initial", J, B]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, J, B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ne, J, B]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", C, J, B]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [p, J, B]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": z()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: it()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": it()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": it()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": it()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ot()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ot()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ot()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ot()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Nt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Nt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Nt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [J, B, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: z()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Se()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: k()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: k()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, B]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", J, B]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...k()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ne, Qt, Wa, Gr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...k()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
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
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, _w = /* @__PURE__ */ jw(Gw);
function ut(...e) {
  return _w(bc(e));
}
const Qo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bo = bc, Ww = (e, a) => (t) => {
  var n;
  if (a?.variants == null) return Bo(e, t?.class, t?.className);
  const { variants: r, defaultVariants: f } = a, i = Object.keys(r).map((c) => {
    const d = t?.[c], u = f?.[c];
    if (d === null) return null;
    const m = Qo(d) || Qo(u);
    return r[c][m];
  }), o = t && Object.entries(t).reduce((c, d) => {
    let [u, m] = d;
    return m === void 0 || (c[u] = m), c;
  }, {}), s = a == null || (n = a.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: u, className: m, ...g } = d;
    return Object.entries(g).every((b) => {
      let [p, M] = b;
      return Array.isArray(M) ? M.includes({
        ...f,
        ...o
      }[p]) : {
        ...f,
        ...o
      }[p] === M;
    }) ? [
      ...c,
      u,
      m
    ] : c;
  }, []);
  return Bo(e, i, s, t?.class, t?.className);
}, Jo = Ww(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Go({
  className: e,
  classNames: a,
  showOutsideDays: t = !0,
  ...n
}) {
  return /* @__PURE__ */ l(
    cw,
    {
      showOutsideDays: t,
      className: ut("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: ut(
          Jo({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: ut(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          n.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: ut(
          Jo({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...a
      },
      components: {
        IconLeft: ({ className: r, ...f }) => /* @__PURE__ */ l(F0, { className: ut("size-4", r), ...f }),
        IconRight: ({ className: r, ...f }) => /* @__PURE__ */ l(Un, { className: ut("size-4", r), ...f })
      },
      ...n
    }
  );
}
function Fw({ onClose: e }) {
  const [a, t] = D("Ukaenthiran's call"), [n, r] = D(""), [f, i] = D(/* @__PURE__ */ new Date()), [o, s] = D("5:30 PM"), [c, d] = D(/* @__PURE__ */ new Date()), [u, m] = D("6:00 PM"), [g, b] = D(!0), [p, M] = D("video"), [L, C] = D(15), [I, R] = D(!1), [z, T] = D(!1), [y, N] = D(!1), [U, q] = D(!1), [X, O] = D(!1), [ce, le] = D(!1), [ee, ae] = D(!1), [P, k] = D([]), A = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM"
  ], G = [
    { label: "At time of event", value: 0 },
    { label: "5 minutes before", value: 5 },
    { label: "15 minutes before", value: 15 },
    { label: "30 minutes before", value: 30 },
    { label: "1 hour before", value: 60 },
    { label: "1 day before", value: 1440 }
  ], ge = () => {
    const Y = {
      title: a,
      description: n,
      startDate: fa(f, "PPP"),
      startTime: o,
      endDate: g ? fa(c, "PPP") : null,
      endTime: g ? u : null,
      callType: p,
      reminderMinutes: L,
      contacts: P
    };
    alert(`Call scheduled! Notification will be sent to ${P.length} contact(s)

${JSON.stringify(Y, null, 2)}`), e();
  }, Le = (Y) => {
    k((de) => de.find((Je) => Je.id === Y.id) ? de.filter((Je) => Je.id !== Y.id) : [...de, Y]);
  };
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-zinc-950 z-50 flex flex-col overflow-y-auto", children: [
    I && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full", children: [
      /* @__PURE__ */ l(
        Go,
        {
          mode: "single",
          selected: f,
          onSelect: (Y) => {
            Y && (i(Y), R(!1));
          },
          className: "rounded-md border-0"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => R(!1),
          className: "w-full mt-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700",
          children: "Cancel"
        }
      )
    ] }) }),
    z && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full", children: [
      /* @__PURE__ */ l(
        Go,
        {
          mode: "single",
          selected: c,
          onSelect: (Y) => {
            Y && (d(Y), T(!1));
          },
          className: "rounded-md border-0"
        }
      ),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => T(!1),
          className: "w-full mt-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700",
          children: "Cancel"
        }
      )
    ] }) }),
    y && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full max-h-96 overflow-y-auto", children: [
      /* @__PURE__ */ l("h3", { className: "text-zinc-100 text-lg font-semibold mb-4", children: "Select Start Time" }),
      A.map((Y) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => {
            s(Y), N(!1);
          },
          className: `w-full text-left px-4 py-3 rounded-lg mb-1 ${o === Y ? "bg-red-600 text-white" : "hover:bg-zinc-800 text-zinc-100"}`,
          children: Y
        },
        Y
      ))
    ] }) }),
    U && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full max-h-96 overflow-y-auto", children: [
      /* @__PURE__ */ l("h3", { className: "text-zinc-100 text-lg font-semibold mb-4", children: "Select End Time" }),
      A.map((Y) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => {
            m(Y), q(!1);
          },
          className: `w-full text-left px-4 py-3 rounded-lg mb-1 ${u === Y ? "bg-red-600 text-white" : "hover:bg-zinc-800 text-zinc-100"}`,
          children: Y
        },
        Y
      ))
    ] }) }),
    X && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full", children: [
      /* @__PURE__ */ l("h3", { className: "text-zinc-100 text-lg font-semibold mb-4", children: "Select Call Type" }),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: () => {
            M("voice"), O(!1);
          },
          className: `w-full flex items-center gap-4 px-4 py-3 rounded-lg mb-2 ${p === "voice" ? "bg-red-600 text-white" : "hover:bg-zinc-800 text-zinc-100"}`,
          children: [
            /* @__PURE__ */ l(wa, { className: "w-5 h-5" }),
            /* @__PURE__ */ l("span", { children: "Voice Call" })
          ]
        }
      ),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: () => {
            M("video"), O(!1);
          },
          className: `w-full flex items-center gap-4 px-4 py-3 rounded-lg ${p === "video" ? "bg-red-600 text-white" : "hover:bg-zinc-800 text-zinc-100"}`,
          children: [
            /* @__PURE__ */ l(wt, { className: "w-5 h-5" }),
            /* @__PURE__ */ l("span", { children: "Video Call" })
          ]
        }
      )
    ] }) }),
    ce && /* @__PURE__ */ l("div", { className: "absolute inset-0 bg-black/80 z-10 flex items-center justify-center p-4", children: /* @__PURE__ */ w("div", { className: "bg-zinc-900 rounded-2xl p-4 max-w-sm w-full", children: [
      /* @__PURE__ */ l("h3", { className: "text-zinc-100 text-lg font-semibold mb-4", children: "Select Reminder" }),
      G.map((Y) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => {
            C(Y.value), le(!1);
          },
          className: `w-full text-left px-4 py-3 rounded-lg mb-1 ${L === Y.value ? "bg-red-600 text-white" : "hover:bg-zinc-800 text-zinc-100"}`,
          children: Y.label
        },
        Y.value
      ))
    ] }) }),
    ee && /* @__PURE__ */ w("div", { className: "absolute inset-0 bg-zinc-950 z-10 flex flex-col", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center justify-between px-4 py-3 border-b border-zinc-800", children: [
        /* @__PURE__ */ l("h2", { className: "text-lg font-semibold text-zinc-100", children: "Select Contacts" }),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => ae(!1),
            className: "px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700",
            children: [
              "Done (",
              P.length,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto", children: Ha.map((Y) => {
        const de = P.find((Ie) => Ie.id === Y.id);
        return /* @__PURE__ */ w(
          "button",
          {
            onClick: () => Le(Y),
            className: "w-full flex items-center gap-4 px-4 py-3 hover:bg-zinc-900 transition-colors",
            children: [
              /* @__PURE__ */ l(
                "img",
                {
                  src: Y.avatar,
                  alt: Y.name,
                  className: "w-12 h-12 rounded-full object-cover"
                }
              ),
              /* @__PURE__ */ l("div", { className: "flex-1 text-left", children: /* @__PURE__ */ l("h3", { className: "text-zinc-100 font-medium", children: Y.name }) }),
              /* @__PURE__ */ l("div", { className: `w-6 h-6 rounded-full border-2 flex items-center justify-center ${de ? "bg-red-600 border-red-600" : "border-zinc-600"}`, children: de && /* @__PURE__ */ l(Vr, { className: "w-4 h-4 text-white" }) })
            ]
          },
          Y.id
        );
      }) })
    ] }),
    /* @__PURE__ */ w("div", { className: "flex items-center justify-between px-4 py-3 border-b border-zinc-800", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: e,
          className: "p-2 -ml-2 rounded-full hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ l(Aa, { className: "w-6 h-6 text-zinc-100" })
        }
      ),
      /* @__PURE__ */ l("h1", { className: "text-lg font-semibold text-zinc-100", children: "Schedule call" }),
      /* @__PURE__ */ l("div", { className: "w-10" })
    ] }),
    /* @__PURE__ */ w("div", { className: "flex-1 overflow-y-auto", children: [
      /* @__PURE__ */ w("div", { className: "px-4 py-4 border-b border-zinc-800", children: [
        /* @__PURE__ */ w("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              value: a,
              onChange: (Y) => t(Y.target.value),
              className: "flex-1 text-xl font-medium text-zinc-100 bg-transparent focus:outline-none"
            }
          ),
          /* @__PURE__ */ l("button", { className: "p-2 rounded-full hover:bg-zinc-800 transition-colors", children: /* @__PURE__ */ l(Aa, { className: "w-5 h-5 text-zinc-400" }) })
        ] }),
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            value: n,
            onChange: (Y) => r(Y.target.value),
            placeholder: "Description (Optional)",
            className: "w-full text-sm text-zinc-400 bg-transparent focus:outline-none placeholder:text-zinc-600"
          }
        )
      ] }),
      /* @__PURE__ */ w("div", { className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors border-b border-zinc-800", children: [
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => R(!0),
            className: "flex items-center gap-4 flex-1",
            children: [
              /* @__PURE__ */ l(Nl, { className: "w-5 h-5 text-zinc-400" }),
              /* @__PURE__ */ l("span", { className: "text-zinc-100", children: fa(f, "dd-MMM-yyyy") })
            ]
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => N(!0),
            className: "text-zinc-100 hover:text-red-500 px-2",
            children: o
          }
        )
      ] }),
      g && /* @__PURE__ */ w("div", { className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors border-b border-zinc-800", children: [
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => T(!0),
            className: "flex items-center gap-4 flex-1",
            children: [
              /* @__PURE__ */ l("div", { className: "w-5 h-5 flex items-center justify-center", children: /* @__PURE__ */ l("div", { className: "w-0.5 h-8 bg-zinc-700" }) }),
              /* @__PURE__ */ l("span", { className: "text-zinc-100", children: fa(c, "dd-MMM-yyyy") })
            ]
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => q(!0),
            className: "text-zinc-100 hover:text-green-500 px-2",
            children: u
          }
        )
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => b(!g),
          className: "w-full px-4 py-3 text-left hover:bg-zinc-900 transition-colors border-b border-zinc-800",
          children: /* @__PURE__ */ l("span", { className: "text-zinc-100 ml-9", children: g ? "Remove end time" : "Add end time" })
        }
      ),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: () => O(!0),
          className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors border-b border-zinc-800",
          children: [
            p === "video" ? /* @__PURE__ */ l(wt, { className: "w-5 h-5 text-zinc-400" }) : /* @__PURE__ */ l(wa, { className: "w-5 h-5 text-zinc-400" }),
            /* @__PURE__ */ w("div", { className: "flex-1", children: [
              /* @__PURE__ */ l("p", { className: "text-zinc-100", children: "Call type" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-400", children: p === "video" ? "Video" : "Voice" })
            ] }),
            /* @__PURE__ */ l(Un, { className: "w-5 h-5 text-zinc-400" })
          ]
        }
      ),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: () => le(!0),
          className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors border-b border-zinc-800",
          children: [
            /* @__PURE__ */ l(Y0, { className: "w-5 h-5 text-zinc-400" }),
            /* @__PURE__ */ w("div", { className: "flex-1", children: [
              /* @__PURE__ */ l("p", { className: "text-zinc-100", children: "Reminder" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-400", children: G.find((Y) => Y.value === L)?.label })
            ] }),
            /* @__PURE__ */ l(Un, { className: "w-5 h-5 text-zinc-400" })
          ]
        }
      ),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: () => ae(!0),
          className: "w-full flex items-center gap-4 px-4 py-4 hover:bg-zinc-900 transition-colors",
          children: [
            /* @__PURE__ */ w("div", { className: "flex-1", children: [
              /* @__PURE__ */ l("p", { className: "text-zinc-100", children: "Participants" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-400", children: P.length === 0 ? "Tap to add participants" : `${P.length} selected` })
            ] }),
            /* @__PURE__ */ l(Un, { className: "w-5 h-5 text-zinc-400" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "p-4", children: /* @__PURE__ */ l(
      "button",
      {
        onClick: ge,
        className: "w-14 h-14 ml-auto bg-red-600 rounded-2xl flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg",
        children: /* @__PURE__ */ l(Vr, { className: "w-6 h-6 text-white" })
      }
    ) })
  ] });
}
function Zw({ onClose: e }) {
  const [a, t] = D(""), [n, r] = D(null), f = wf(), i = [
    { digit: "1", letters: "" },
    { digit: "2", letters: "ABC" },
    { digit: "3", letters: "DEF" },
    { digit: "4", letters: "GHI" },
    { digit: "5", letters: "JKL" },
    { digit: "6", letters: "MNO" },
    { digit: "7", letters: "PQRS" },
    { digit: "8", letters: "TUV" },
    { digit: "9", letters: "WXYZ" },
    { digit: "*", letters: "" },
    { digit: "0", letters: "+" },
    { digit: "#", letters: "" }
  ];
  fe(() => {
    if (a.length >= 3) {
      const u = Ha.find(
        (m) => m.name.toLowerCase().includes(a.toLowerCase()) || a.includes("99629")
      );
      r(u);
    } else
      r(null);
  }, [a]);
  const o = (u) => {
    t((m) => m + u);
  }, s = () => {
    t((u) => u.slice(0, -1));
  }, c = () => {
    n ? alert(`Calling ${n.name}...`) : a && alert(`Calling ${a}...`);
  }, d = () => {
    n && f(`/chat/${n.id}`);
  };
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-zinc-950 z-50 flex flex-col", children: [
    /* @__PURE__ */ w("div", { className: "flex items-center justify-between px-4 py-3", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: e,
          className: "p-2 -ml-2 rounded-full hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ l(Kt, { className: "w-6 h-6 text-zinc-100" })
        }
      ),
      /* @__PURE__ */ l("button", { className: "p-2 rounded-full hover:bg-zinc-800 transition-colors", children: /* @__PURE__ */ l(Dl, { className: "w-6 h-6 text-zinc-100" }) })
    ] }),
    /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center px-8 pt-8", children: [
      /* @__PURE__ */ l("div", { className: "text-4xl font-light text-zinc-100 mb-2 tracking-wider min-h-[3rem]", children: a || "" }),
      n && /* @__PURE__ */ w("div", { className: "flex flex-col items-center gap-2 mb-8", children: [
        /* @__PURE__ */ l(
          "img",
          {
            src: n.avatar,
            alt: n.name,
            className: "w-16 h-16 rounded-full object-cover"
          }
        ),
        /* @__PURE__ */ l("span", { className: "text-zinc-200 font-medium text-lg", children: n.name }),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: d,
            className: "flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors",
            children: [
              /* @__PURE__ */ l(Zn, { className: "w-4 h-4 text-zinc-100" }),
              /* @__PURE__ */ l("span", { className: "text-zinc-100 text-sm", children: "Open Chat" })
            ]
          }
        )
      ] }),
      !n && a && /* @__PURE__ */ l("div", { className: "text-zinc-500 text-sm mb-8", children: "Enter number to call" })
    ] }),
    /* @__PURE__ */ w("div", { className: "px-8 pb-6", children: [
      /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-4 mb-6", children: i.map((u) => /* @__PURE__ */ w(
        "button",
        {
          onClick: () => o(u.digit),
          className: "aspect-square bg-zinc-800 rounded-full flex flex-col items-center justify-center hover:bg-zinc-700 transition-colors active:scale-95",
          children: [
            /* @__PURE__ */ l("span", { className: "text-3xl font-light text-zinc-100", children: u.digit }),
            u.letters && /* @__PURE__ */ l("span", { className: "text-xs text-zinc-400 mt-0.5", children: u.letters })
          ]
        },
        u.digit
      )) }),
      /* @__PURE__ */ w("div", { className: "flex items-center justify-center gap-8 mb-4", children: [
        n ? /* @__PURE__ */ l(
          "button",
          {
            onClick: d,
            className: "w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors",
            children: /* @__PURE__ */ l(Zn, { className: "w-6 h-6 text-zinc-100" })
          }
        ) : /* @__PURE__ */ l("div", { className: "w-14 h-14" }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: c,
            disabled: !a,
            className: `w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-colors ${a ? "bg-green-600 hover:bg-green-700" : "bg-zinc-700 cursor-not-allowed"}`,
            children: /* @__PURE__ */ l(wa, { className: "w-7 h-7 text-white" })
          }
        ),
        a ? /* @__PURE__ */ l(
          "button",
          {
            onClick: s,
            className: "w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors",
            children: /* @__PURE__ */ l(e1, { className: "w-6 h-6 text-zinc-100" })
          }
        ) : /* @__PURE__ */ l("div", { className: "w-14 h-14" })
      ] })
    ] })
  ] });
}
function Hw({ onClose: e }) {
  const [a, t] = D(Ha.slice(0, 8)), [n, r] = D(!1), f = (s, c) => {
    alert(`${c === "video" ? "Video" : "Voice"} calling ${s.name}...`);
  }, i = (s) => {
    t((c) => !c.find((u) => u.id === s.id) && c.length < 12 ? [...c, s] : c), r(!1);
  }, o = (s) => {
    t((c) => c.filter((d) => d.id !== s));
  };
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-zinc-950 z-50 flex flex-col", children: [
    /* @__PURE__ */ w("div", { className: "flex items-center gap-4 px-4 py-3 border-b border-zinc-800", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: e,
          className: "p-2 -ml-2 rounded-full hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ l(Kt, { className: "w-6 h-6 text-zinc-100" })
        }
      ),
      /* @__PURE__ */ l("h1", { className: "flex-1 text-xl font-semibold text-zinc-100", children: "Favorites" }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => r(!0),
          className: "p-2 rounded-full hover:bg-zinc-800 transition-colors",
          children: /* @__PURE__ */ l(Hn, { className: "w-6 h-6 text-zinc-100" })
        }
      )
    ] }),
    n && /* @__PURE__ */ w("div", { className: "absolute inset-0 bg-zinc-950 z-10 flex flex-col", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center gap-4 px-4 py-3 border-b border-zinc-800", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => r(!1),
            className: "p-2 -ml-2 rounded-full hover:bg-zinc-800 transition-colors",
            children: /* @__PURE__ */ l(Kt, { className: "w-6 h-6 text-zinc-100" })
          }
        ),
        /* @__PURE__ */ l("h2", { className: "text-lg font-semibold text-zinc-100", children: "Add to Favorites" })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto", children: Ha.map((s) => {
        const c = a.find((d) => d.id === s.id);
        return /* @__PURE__ */ w(
          "button",
          {
            onClick: () => !c && i(s),
            disabled: !!c,
            className: `w-full flex items-center gap-4 px-4 py-3 transition-colors ${c ? "opacity-50 cursor-not-allowed" : "hover:bg-zinc-900"}`,
            children: [
              /* @__PURE__ */ l(
                "img",
                {
                  src: s.avatar,
                  alt: s.name,
                  className: "w-12 h-12 rounded-full object-cover"
                }
              ),
              /* @__PURE__ */ w("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ l("h3", { className: "text-zinc-100 font-medium", children: s.name }),
                c && /* @__PURE__ */ l("p", { className: "text-sm text-zinc-500", children: "Already in favorites" })
              ] }),
              c && /* @__PURE__ */ l(E1, { className: "w-5 h-5 text-yellow-500 fill-yellow-500" })
            ]
          },
          s.id
        );
      }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto p-4", children: /* @__PURE__ */ w("div", { className: "grid grid-cols-3 gap-4", children: [
      a.map((s) => /* @__PURE__ */ w(
        "div",
        {
          className: "flex flex-col items-center gap-2",
          children: [
            /* @__PURE__ */ w("div", { className: "relative", children: [
              /* @__PURE__ */ l(
                "img",
                {
                  src: s.avatar,
                  alt: s.name,
                  className: "w-20 h-20 rounded-full object-cover"
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => o(s.id),
                  className: "absolute -top-1 -right-1 w-6 h-6 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-zinc-950 hover:bg-zinc-700",
                  children: /* @__PURE__ */ l("span", { className: "text-zinc-100 text-xs", children: "×" })
                }
              )
            ] }),
            /* @__PURE__ */ l("span", { className: "text-zinc-100 text-sm font-medium text-center truncate w-full", children: s.name.split(" ")[0] }),
            /* @__PURE__ */ w("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => f(s, "voice"),
                  className: "w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors",
                  children: /* @__PURE__ */ l(wa, { className: "w-4 h-4 text-zinc-100" })
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => f(s, "video"),
                  className: "w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors",
                  children: /* @__PURE__ */ l(wt, { className: "w-4 h-4 text-zinc-100" })
                }
              )
            ] })
          ]
        },
        s.id
      )),
      a.length < 12 && /* @__PURE__ */ w(
        "button",
        {
          onClick: () => r(!0),
          className: "flex flex-col items-center gap-2 justify-center",
          children: [
            /* @__PURE__ */ l("div", { className: "w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors", children: /* @__PURE__ */ l(Hn, { className: "w-8 h-8 text-zinc-400" }) }),
            /* @__PURE__ */ l("span", { className: "text-zinc-400 text-sm", children: "Add" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ l("div", { className: "px-4 py-3 border-t border-zinc-800", children: /* @__PURE__ */ l("p", { className: "text-zinc-500 text-sm text-center", children: "Tap icons to quickly call your favorite contacts" }) })
  ] });
}
function Vw() {
  const [e, a] = D(null);
  return /* @__PURE__ */ w(oa, { children: [
    /* @__PURE__ */ w("div", { className: "h-screen flex flex-col bg-white dark:bg-zinc-950 pb-20", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800", children: [
        /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l("img", { src: gn, alt: "Wave Chat", className: "w-10 h-10 object-contain drop-shadow-lg" }),
          /* @__PURE__ */ l("h1", { className: "text-xl font-semibold text-zinc-900 dark:text-zinc-50", children: "Calls" })
        ] }),
        /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l("button", { className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors", children: /* @__PURE__ */ l(Cf, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" }) }),
          /* @__PURE__ */ l("button", { className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors", children: /* @__PURE__ */ l(Il, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" }) })
        ] })
      ] }),
      /* @__PURE__ */ w("div", { className: "flex items-center justify-around px-4 py-4 border-b border-zinc-200 dark:border-zinc-800", children: [
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => a("contact"),
            className: "flex flex-col items-center gap-2",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 dark:bg-red-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(wa, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ l("span", { className: "text-xs text-zinc-600 dark:text-zinc-400", children: "Call" })
            ]
          }
        ),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => a("schedule"),
            className: "flex flex-col items-center gap-2",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-zinc-800 dark:bg-zinc-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(Nl, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ l("span", { className: "text-xs text-zinc-600 dark:text-zinc-400", children: "Schedule" })
            ]
          }
        ),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => a("keypad"),
            className: "flex flex-col items-center gap-2",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-zinc-800 dark:bg-zinc-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(r1, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ l("span", { className: "text-xs text-zinc-600 dark:text-zinc-400", children: "Keypad" })
            ]
          }
        ),
        /* @__PURE__ */ w(
          "button",
          {
            onClick: () => a("favorites"),
            className: "flex flex-col items-center gap-2",
            children: [
              /* @__PURE__ */ l("div", { className: "w-12 h-12 bg-red-600 dark:bg-red-700 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(i1, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ l("span", { className: "text-xs text-zinc-600 dark:text-zinc-400", children: "Favorites" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ w("div", { className: "flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ l("div", { className: "px-4 py-3", children: /* @__PURE__ */ l("h2", { className: "text-base font-medium text-zinc-900 dark:text-zinc-50", children: "Recent" }) }),
        /* @__PURE__ */ l("div", { className: "space-y-1", children: M2.map((t) => /* @__PURE__ */ w(
          "div",
          {
            className: "flex items-center gap-3 px-4 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors",
            children: [
              /* @__PURE__ */ l(
                "img",
                {
                  src: t.avatar,
                  alt: t.name,
                  className: "w-12 h-12 rounded-full object-cover flex-shrink-0"
                }
              ),
              /* @__PURE__ */ w("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ w("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("h3", { className: `font-medium truncate ${t.type === "missed" ? "text-red-500" : "text-zinc-900 dark:text-zinc-50"}`, children: t.name }),
                  t.count && t.count > 1 && /* @__PURE__ */ w("span", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: [
                    "(",
                    t.count,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ w("div", { className: "flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400", children: [
                  t.type === "incoming" && /* @__PURE__ */ l("span", { className: "text-green-500", children: "↓" }),
                  t.type === "outgoing" && /* @__PURE__ */ l("span", { className: "text-zinc-500", children: "↑" }),
                  t.type === "missed" && /* @__PURE__ */ l("span", { className: "text-red-500", children: "↓" }),
                  /* @__PURE__ */ l("span", { children: X1(t.timestamp) })
                ] })
              ] }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => {
                    alert(`Calling ${t.name}...`);
                  },
                  className: "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors",
                  children: t.callType === "video" ? /* @__PURE__ */ l(wt, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" }) : /* @__PURE__ */ l(wa, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
                }
              )
            ]
          },
          t.id
        )) })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => a("contact"),
          className: "fixed bottom-24 right-6 w-14 h-14 bg-red-600 rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors max-w-md mx-auto",
          children: /* @__PURE__ */ l(Hn, { className: "w-6 h-6 text-white" })
        }
      ),
      /* @__PURE__ */ l(xf, {})
    ] }),
    e === "contact" && /* @__PURE__ */ l(j2, { onClose: () => a(null) }),
    e === "schedule" && /* @__PURE__ */ l(Fw, { onClose: () => a(null) }),
    e === "keypad" && /* @__PURE__ */ l(Zw, { onClose: () => a(null) }),
    e === "favorites" && /* @__PURE__ */ l(Hw, { onClose: () => a(null) })
  ] });
}
const $w = p0([
  {
    path: "/",
    Component: q1
  },
  {
    path: "/chat/:id",
    Component: v2
  },
  {
    path: "/updates",
    Component: L2
  },
  {
    path: "/camera",
    element: /* @__PURE__ */ l(
      C2,
      {
        onCapture: (e, a) => {
          console.log("Captured:", a, e);
        },
        onClose: () => window.history.back()
      }
    )
  },
  {
    path: "/calls",
    Component: Vw
  }
]);
function _r({ children: e }) {
  return /* @__PURE__ */ l(W1, { attribute: "class", defaultTheme: "light", enableSystem: !0, children: e });
}
function Kw({ onComplete: e }) {
  const [a, t] = D("logo");
  return fe(() => {
    const n = setTimeout(() => {
      t("title");
    }, 1e3), r = setTimeout(() => {
      t("loading");
    }, 2e3), f = setTimeout(() => {
      e();
    }, 3500);
    return () => {
      clearTimeout(n), clearTimeout(r), clearTimeout(f);
    };
  }, [e]), /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-gradient-to-br from-zinc-100 via-neutral-100 to-stone-100 dark:from-black dark:via-zinc-950 dark:to-neutral-950 flex flex-col items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ l("div", { className: "absolute top-0 left-0 w-32 h-32 bg-red-200 dark:bg-red-900/30 rounded-full blur-3xl opacity-60 -translate-x-8 -translate-y-8" }),
    /* @__PURE__ */ l("div", { className: "absolute top-20 right-0 w-40 h-40 bg-red-300 dark:bg-red-800/30 rounded-full blur-3xl opacity-50 translate-x-16" }),
    /* @__PURE__ */ l("div", { className: "absolute top-52 left-12 w-20 h-20 bg-zinc-200 dark:bg-zinc-900/50 rounded-full blur-2xl opacity-40" }),
    /* @__PURE__ */ l("div", { className: "absolute bottom-0 left-0 w-64 h-64 bg-red-400 dark:bg-red-700/40 rounded-full blur-3xl opacity-60 -translate-x-32 translate-y-32" }),
    /* @__PURE__ */ l("div", { className: "absolute bottom-40 right-8 w-24 h-24 bg-red-300 dark:bg-red-800/30 rounded-full blur-2xl opacity-50" }),
    /* @__PURE__ */ l("div", { className: "absolute bottom-64 right-16 w-16 h-16 bg-zinc-200 dark:bg-zinc-900/50 rounded-full blur-xl opacity-40" }),
    /* @__PURE__ */ l("div", { className: "absolute top-1/4 left-1/4 w-2 h-2 bg-red-400/40 dark:bg-red-500/40 rounded-full animate-pulse" }),
    /* @__PURE__ */ l("div", { className: "absolute top-1/3 right-1/3 w-3 h-3 bg-red-400/30 dark:bg-red-500/30 rounded-full animate-pulse delay-300" }),
    /* @__PURE__ */ l("div", { className: "absolute bottom-1/4 right-1/4 w-2 h-2 bg-red-400/40 dark:bg-red-500/40 rounded-full animate-pulse delay-700" }),
    /* @__PURE__ */ w(
      "div",
      {
        className: `flex flex-col items-center transition-all duration-700 ${a === "logo" ? "justify-center" : a === "title" ? "justify-center -translate-y-8" : "justify-start pt-32"}`,
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: `relative transition-all duration-700 ${a === "logo" ? "w-48 h-48" : a === "title" ? "w-40 h-40" : "w-32 h-32"}`,
              children: /* @__PURE__ */ l(
                "img",
                {
                  src: gn,
                  alt: "Wave Chat Logo",
                  className: "w-full h-full object-contain drop-shadow-2xl"
                }
              )
            }
          ),
          a === "loading" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center mt-32 animate-in fade-in duration-500", children: [
            /* @__PURE__ */ w("div", { className: "relative w-12 h-12 mb-4", children: [
              /* @__PURE__ */ l("div", { className: "absolute inset-0 border-4 border-red-200 dark:border-red-900/50 rounded-full" }),
              /* @__PURE__ */ l("div", { className: "absolute inset-0 border-4 border-transparent border-t-red-500 dark:border-t-red-600 rounded-full animate-spin" })
            ] }),
            /* @__PURE__ */ l("p", { className: "text-red-600 dark:text-red-500 font-medium text-lg", children: "Loading..." })
          ] })
        ]
      }
    ),
    a === "loading" && /* @__PURE__ */ l("div", { className: "absolute bottom-12 text-zinc-400 dark:text-zinc-600 text-sm animate-in fade-in duration-500", children: "from" })
  ] });
}
const _o = [
  { name: "United States", code: "+1", flag: "🇺🇸", minLength: 10, maxLength: 10 },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", minLength: 10, maxLength: 10 },
  { name: "India", code: "+91", flag: "🇮🇳", minLength: 10, maxLength: 10 },
  { name: "Canada", code: "+1", flag: "🇨🇦", minLength: 10, maxLength: 10 },
  { name: "Australia", code: "+61", flag: "🇦🇺", minLength: 9, maxLength: 9 },
  { name: "Germany", code: "+49", flag: "🇩🇪", minLength: 10, maxLength: 11 },
  { name: "France", code: "+33", flag: "🇫🇷", minLength: 9, maxLength: 9 },
  { name: "Japan", code: "+81", flag: "🇯🇵", minLength: 10, maxLength: 10 },
  { name: "China", code: "+86", flag: "🇨🇳", minLength: 11, maxLength: 11 },
  { name: "Brazil", code: "+55", flag: "🇧🇷", minLength: 10, maxLength: 11 },
  { name: "Mexico", code: "+52", flag: "🇲🇽", minLength: 10, maxLength: 10 },
  { name: "Spain", code: "+34", flag: "🇪🇸", minLength: 9, maxLength: 9 },
  { name: "Italy", code: "+39", flag: "🇮🇹", minLength: 9, maxLength: 10 },
  { name: "South Korea", code: "+82", flag: "🇰🇷", minLength: 9, maxLength: 10 },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", minLength: 9, maxLength: 9 },
  { name: "Singapore", code: "+65", flag: "🇸🇬", minLength: 8, maxLength: 8 },
  { name: "UAE", code: "+971", flag: "🇦🇪", minLength: 9, maxLength: 9 },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", minLength: 9, maxLength: 9 },
  { name: "South Africa", code: "+27", flag: "🇿🇦", minLength: 9, maxLength: 9 },
  { name: "Russia", code: "+7", flag: "🇷🇺", minLength: 10, maxLength: 10 }
];
function Xw({ onComplete: e }) {
  const [a, t] = D("welcome"), [n, r] = D(""), [f, i] = D(_o[0]), [o, s] = D(!1), [c, d] = D(""), [u, m] = D(!1), [g, b] = D(!1), [p, M] = D(["", "", "", "", "", ""]), [L, C] = D(""), I = _o.filter(
    (O) => O.name.toLowerCase().includes(c.toLowerCase()) || O.code.includes(c)
  );
  fe(() => {
    const O = n.replace(/\D/g, ""), ce = O.length >= f.minLength && O.length <= f.maxLength;
    m(ce), b(O.length > 0);
  }, [n, f]);
  const R = (O, ce) => {
    if (ce.length <= 1 && /^\d*$/.test(ce)) {
      const le = [...p];
      le[O] = ce, M(le), ce && O < 5 && document.getElementById(`code-${O + 1}`)?.focus();
    }
  }, z = () => {
    t("phone");
  }, T = () => {
    u && t("verification");
  }, y = () => {
    p.every((O) => O !== "") && t("name");
  }, N = () => {
    L.trim() && t("profile-photo");
  }, U = () => {
    t("notifications");
  }, q = () => {
    t("success"), setTimeout(() => {
      e();
    }, 2e3);
  }, X = () => {
    t("success"), setTimeout(() => {
      e();
    }, 2e3);
  };
  return /* @__PURE__ */ w("div", { className: "fixed inset-0 bg-gradient-to-br from-zinc-100 via-neutral-100 to-stone-100 dark:from-black dark:via-zinc-950 dark:to-neutral-950 flex flex-col items-center justify-center", children: [
    a === "welcome" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ l("img", { src: gn, alt: "Wave Chat", className: "w-40 h-40 mb-8 drop-shadow-2xl" }),
        /* @__PURE__ */ l("h2", { className: "text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3", children: "Welcome to Wave Chat" }),
        /* @__PURE__ */ l("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-xs", children: "Connect with friends and family with secure, fast messaging" }),
        /* @__PURE__ */ w("div", { className: "space-y-4 mb-8 w-full max-w-xs", children: [
          /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ l(Pt, { className: "w-5 h-5 text-red-600 dark:text-red-500" }) }),
            /* @__PURE__ */ w("div", { children: [
              /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-100", children: "Fast & Secure" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "End-to-end encryption" })
            ] })
          ] }),
          /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ l(Zn, { className: "w-5 h-5 text-zinc-700 dark:text-zinc-300" }) }),
            /* @__PURE__ */ w("div", { children: [
              /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-100", children: "Rich Messaging" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Photos, videos & more" })
            ] })
          ] }),
          /* @__PURE__ */ w("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ l(wa, { className: "w-5 h-5 text-red-600 dark:text-red-500" }) }),
            /* @__PURE__ */ w("div", { children: [
              /* @__PURE__ */ l("h3", { className: "font-medium text-zinc-900 dark:text-zinc-100", children: "Voice & Video Calls" }),
              /* @__PURE__ */ l("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Crystal clear quality" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ w(
        "button",
        {
          onClick: z,
          className: "w-full max-w-xs bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30 flex items-center justify-center gap-2",
          children: [
            "Get Started",
            /* @__PURE__ */ l(R0, { className: "w-5 h-5" })
          ]
        }
      )
    ] }),
    a === "phone" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center w-full", children: [
        /* @__PURE__ */ l("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 flex items-center justify-center mb-6", children: /* @__PURE__ */ l(wa, { className: "w-10 h-10 text-red-600 dark:text-red-500" }) }),
        /* @__PURE__ */ l("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2", children: "Enter your phone number" }),
        /* @__PURE__ */ l("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm", children: "We'll send you a verification code to confirm your number" }),
        /* @__PURE__ */ w("div", { className: "w-full max-w-xs space-y-3", children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              onClick: () => s(!0),
              className: "w-full px-4 py-4 bg-white/80 dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm flex items-center justify-between group hover:border-red-500 dark:hover:border-red-500 transition-all",
              children: [
                /* @__PURE__ */ w("span", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ l("span", { className: "text-3xl", children: f.flag }),
                  /* @__PURE__ */ w("div", { className: "flex flex-col items-start", children: [
                    /* @__PURE__ */ l("span", { className: "font-semibold text-sm", children: f.name }),
                    /* @__PURE__ */ l("span", { className: "text-xs text-zinc-500 dark:text-zinc-400", children: f.code })
                  ] })
                ] }),
                /* @__PURE__ */ l(_0, { className: "w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" })
              ]
            }
          ),
          /* @__PURE__ */ w(
            "div",
            {
              className: `relative bg-white/80 dark:bg-zinc-900/50 border-2 rounded-2xl backdrop-blur-sm flex items-center px-4 py-4 transition-all ${g ? u ? "border-green-500 ring-2 ring-green-500/20" : "border-red-500 ring-2 ring-red-500/20" : "border-zinc-200 dark:border-zinc-700 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent"}`,
              children: [
                /* @__PURE__ */ w("div", { className: "flex items-center gap-2 border-r border-zinc-300 dark:border-zinc-700 pr-3 mr-3", children: [
                  /* @__PURE__ */ l("span", { className: "text-2xl", children: f.flag }),
                  /* @__PURE__ */ l("span", { className: "text-zinc-900 dark:text-zinc-100 font-bold text-lg", children: f.code })
                ] }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "tel",
                    placeholder: "Phone number",
                    value: n,
                    onChange: (O) => {
                      const ce = O.target.value.replace(/[^\d\s-()]/g, "");
                      r(ce);
                    },
                    className: "flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none text-lg font-medium"
                  }
                ),
                g && /* @__PURE__ */ l("div", { className: "ml-2", children: u ? /* @__PURE__ */ l(Pt, { className: "w-6 h-6 text-green-500" }) : /* @__PURE__ */ l(qi, { className: "w-6 h-6 text-red-500" }) })
              ]
            }
          ),
          g && !u && /* @__PURE__ */ w("div", { className: "flex items-start gap-2 px-2 animate-in fade-in duration-200", children: [
            /* @__PURE__ */ l(qi, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ w("p", { className: "text-sm text-red-600 dark:text-red-400", children: [
              "Please enter a valid ",
              f.name,
              " phone number (",
              f.minLength,
              f.minLength !== f.maxLength ? `-${f.maxLength}` : "",
              " ",
              "digits)"
            ] })
          ] }),
          g && u && /* @__PURE__ */ w("div", { className: "flex items-start gap-2 px-2 animate-in fade-in duration-200", children: [
            /* @__PURE__ */ l(Pt, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ w("p", { className: "text-sm text-green-600 dark:text-green-400", children: [
              "Valid ",
              f.name,
              " phone number"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: T,
          disabled: !u,
          className: "w-full max-w-xs bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-700 dark:disabled:to-zinc-800 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30 disabled:shadow-none",
          children: "Continue"
        }
      )
    ] }),
    a === "verification" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center w-full", children: [
        /* @__PURE__ */ l("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center mb-6", children: /* @__PURE__ */ l(Zn, { className: "w-10 h-10 text-zinc-700 dark:text-zinc-300" }) }),
        /* @__PURE__ */ l("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2", children: "Enter verification code" }),
        /* @__PURE__ */ w("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm", children: [
          "We sent a code to ",
          f.code,
          " ",
          n
        ] }),
        /* @__PURE__ */ l("div", { className: "flex gap-3 mb-6", children: p.map((O, ce) => /* @__PURE__ */ l(
          "input",
          {
            id: `code-${ce}`,
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: O,
            onChange: (le) => R(ce, le.target.value),
            className: "w-12 h-14 text-center text-2xl font-bold bg-white/80 dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-700 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm"
          },
          ce
        )) }),
        /* @__PURE__ */ l("button", { className: "text-red-600 dark:text-red-500 font-medium hover:text-red-700 dark:hover:text-red-400 transition-colors", children: "Resend code" })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: y,
          disabled: !p.every((O) => O !== ""),
          className: "w-full max-w-xs bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-700 dark:disabled:to-zinc-800 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30",
          children: "Verify"
        }
      )
    ] }),
    a === "name" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center w-full", children: [
        /* @__PURE__ */ l("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 flex items-center justify-center mb-6 text-3xl", children: "👤" }),
        /* @__PURE__ */ l("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2", children: "What's your name?" }),
        /* @__PURE__ */ l("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm", children: "This is how you'll appear to your contacts" }),
        /* @__PURE__ */ l("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            placeholder: "Enter your name",
            value: L,
            onChange: (O) => C(O.target.value),
            className: "w-full px-4 py-4 bg-white/80 dark:bg-zinc-900/50 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg backdrop-blur-sm"
          }
        ) })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: N,
          disabled: !L.trim(),
          className: "w-full max-w-xs bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 disabled:from-zinc-300 disabled:to-zinc-400 dark:disabled:from-zinc-700 dark:disabled:to-zinc-800 disabled:cursor-not-allowed text-white font-medium py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30",
          children: "Continue"
        }
      )
    ] }),
    a === "profile-photo" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center w-full", children: [
        /* @__PURE__ */ l("div", { className: "w-32 h-32 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900/30 dark:to-zinc-800/40 flex items-center justify-center mb-6 text-6xl border-4 border-dashed border-zinc-300 dark:border-zinc-700", children: "📷" }),
        /* @__PURE__ */ l("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2", children: "Add a profile photo" }),
        /* @__PURE__ */ l("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm", children: "Help your friends recognize you" }),
        /* @__PURE__ */ l("button", { className: "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium px-8 py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30 mb-4", children: "Choose Photo" })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: U,
          className: "w-full max-w-xs text-zinc-600 dark:text-zinc-400 font-medium py-3 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors",
          children: "Skip for now"
        }
      )
    ] }),
    a === "notifications" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-between h-full w-full px-6 py-12", children: [
      /* @__PURE__ */ w("div", { className: "flex-1 flex flex-col items-center justify-center w-full", children: [
        /* @__PURE__ */ l("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/40 flex items-center justify-center mb-6 text-4xl", children: "🔔" }),
        /* @__PURE__ */ l("h2", { className: "text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2", children: "Enable notifications" }),
        /* @__PURE__ */ l("p", { className: "text-center text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm", children: "Stay updated with new messages and calls" })
      ] }),
      /* @__PURE__ */ w("div", { className: "w-full max-w-xs space-y-3", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: q,
            className: "w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-medium py-3 rounded-full transition-all shadow-lg shadow-red-500/50 dark:shadow-red-500/30",
            children: "Enable Notifications"
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: X,
            className: "w-full text-zinc-600 dark:text-zinc-400 font-medium py-3 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors",
            children: "Not now"
          }
        )
      ] })
    ] }),
    a === "success" && /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-center h-full w-full px-6", children: [
      /* @__PURE__ */ l("div", { className: "w-32 h-32 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/40 flex items-center justify-center mb-6 animate-in zoom-in duration-500", children: /* @__PURE__ */ l(Pt, { className: "w-20 h-20 text-red-600 dark:text-red-500" }) }),
      /* @__PURE__ */ l("h2", { className: "text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 animate-in fade-in duration-700", children: "You're all set!" }),
      /* @__PURE__ */ w("p", { className: "text-center text-zinc-600 dark:text-zinc-400 animate-in fade-in duration-700", children: [
        "Welcome to Wave Chat, ",
        L
      ] })
    ] }),
    o && /* @__PURE__ */ l("div", { className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200", children: /* @__PURE__ */ w("div", { className: "absolute inset-x-0 bottom-0 bg-white dark:bg-zinc-900 rounded-t-3xl max-h-[80vh] flex flex-col animate-in slide-in-from-bottom duration-300", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800", children: [
        /* @__PURE__ */ l("h3", { className: "text-xl font-bold text-zinc-900 dark:text-zinc-100", children: "Select Country" }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              s(!1), d("");
            },
            className: "w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors",
            children: /* @__PURE__ */ l(Aa, { className: "w-5 h-5 text-zinc-600 dark:text-zinc-400" })
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { className: "p-4 border-b border-zinc-200 dark:border-zinc-800", children: /* @__PURE__ */ w("div", { className: "relative", children: [
        /* @__PURE__ */ l(Cf, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" }),
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            placeholder: "Search country or code...",
            value: c,
            onChange: (O) => d(O.target.value),
            className: "w-full pl-12 pr-4 py-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500",
            autoFocus: !0
          }
        )
      ] }) }),
      /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto", children: I.length > 0 ? /* @__PURE__ */ l("div", { className: "divide-y divide-zinc-100 dark:divide-zinc-800", children: I.map((O) => /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          onClick: () => {
            i(O), s(!1), d("");
          },
          className: `w-full px-5 py-4 flex items-center gap-4 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors text-left ${f.code === O.code && f.name === O.name ? "bg-red-50 dark:bg-red-900/20" : ""}`,
          children: [
            /* @__PURE__ */ l("span", { className: "text-4xl", children: O.flag }),
            /* @__PURE__ */ w("div", { className: "flex-1", children: [
              /* @__PURE__ */ l("div", { className: "font-semibold text-zinc-900 dark:text-zinc-100", children: O.name }),
              /* @__PURE__ */ l("div", { className: "text-sm text-zinc-500 dark:text-zinc-400", children: O.code })
            ] }),
            f.code === O.code && f.name === O.name && /* @__PURE__ */ l(Pt, { className: "w-6 h-6 text-red-600 dark:text-red-500" })
          ]
        },
        O.code + O.name
      )) }) : /* @__PURE__ */ w("div", { className: "flex flex-col items-center justify-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "text-6xl mb-4", children: "🌍" }),
        /* @__PURE__ */ l("p", { className: "text-zinc-500 dark:text-zinc-400", children: "No countries found" })
      ] }) })
    ] }) })
  ] });
}
function qw() {
  const [e, a] = D(!0), [t, n] = D(!0);
  return e ? /* @__PURE__ */ l("div", { className: "flex items-center justify-center min-h-screen bg-zinc-900", children: /* @__PURE__ */ w("div", { className: "w-[393px] h-[852px] overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-zinc-950 bg-black relative", children: [
    /* @__PURE__ */ l("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-950 rounded-b-3xl z-50" }),
    /* @__PURE__ */ l(_r, { children: /* @__PURE__ */ l(Kw, { onComplete: () => a(!1) }) })
  ] }) }) : t ? /* @__PURE__ */ l("div", { className: "flex items-center justify-center min-h-screen bg-zinc-900", children: /* @__PURE__ */ w("div", { className: "w-[393px] h-[852px] overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-zinc-950 bg-black relative", children: [
    /* @__PURE__ */ l("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-950 rounded-b-3xl z-50" }),
    /* @__PURE__ */ l(_r, { children: /* @__PURE__ */ l(Xw, { onComplete: () => n(!1) }) })
  ] }) }) : /* @__PURE__ */ l("div", { className: "flex items-center justify-center min-h-screen bg-zinc-900", children: /* @__PURE__ */ w("div", { className: "w-[393px] h-[852px] overflow-hidden rounded-[3rem] shadow-2xl border-[12px] border-zinc-950 bg-black relative", children: [
    /* @__PURE__ */ l("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-zinc-950 rounded-b-3xl z-50" }),
    /* @__PURE__ */ l(_r, { children: /* @__PURE__ */ l(Wu, { router: $w }) })
  ] }) });
}
const ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qw
}, Symbol.toStringTag, { value: "Module" }));
export {
  ap as Code0_8
};
