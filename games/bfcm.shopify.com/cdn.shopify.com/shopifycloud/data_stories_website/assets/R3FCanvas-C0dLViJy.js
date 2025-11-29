const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/emulate-BLZKF8jP.js","assets/application-CtunUkHU.js","assets/audio-stop-CE8PsAHr.js","assets/SceneEnvironment-Bkc1nHvp.js","assets/volleyball_map-BEG_dgXk.js","assets/index-B5H0dLq3.js","assets/index-C1ozSNLd.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { V as b, a9 as Mi, a7 as N, aa as gn, y as z, ab as Ke, ac as xt, ad as bt, ae as fr, af as rt, ag as yt, x as q, ah as de, ai as ec, w as ie, aj as tc, ak as nc, r as p, u as W, i as X, a1 as rc, J as Pa, R as Ut, p as Je, al as sc, am as Ms, an as Ta, ao as ic, ap as yn, aq as Ra, ar as Ce, as as Be, at as nt, au as oc, av as ac, aw as lc, ax as Ma, D as cc, O as Pe, ay as uc, az as fc, aA as dc, aB as Ea, aC as hc, aD as pc, aE as mc, L as mt, aF as Aa, aG as Es, aH as gc, aI as As, aJ as yc, aK as xn, aL as Us, aM as Gs, H as Ia, l as V, aN as xc, aO as bc, v as k, aP as Bs, aQ as vc, aR as wc, Z as Sc, aS as ce, K as Pc, aT as Tc, aU as Rc, aV as Mc, aW as Ec, aX as Oa, aY as Ac, T as Is, aZ as Ei, a_ as Ai, a$ as Ii, b0 as Oi, F as dr, b1 as Ic, A as Oc, z as Ws, b2 as Vs, b3 as Ca, b4 as Os, o as Tr, _ as _a, b5 as Gt, P as Cc, b6 as _c, b7 as Lc, b8 as jc, b9 as Tn, ba as Hc, bb as Nc, bc as Dc, bd as Fc, a8 as Y, a0 as zc, j as d, be as Ys, bf as kc, bg as st, bh as Xc, bi as Uc, a4 as Gc, G as La, Q as Bc, m as ja, M as A, d as B, k as me, B as Z, bj as Wc, h as Se, bk as Ha, bl as wn, bm as Sn, bn as hr, bo as Vc, bp as vt, g as qs, bq as Yc, br as qc, bs as ht, bt as Na, bu as Bt, bv as Ue, bw as Ge, bx as $c, by as Zc, bz as Qc, bA as Ur, bB as Kc, bC as Jc, bD as eu, bE as tu, C as nu, __tla as __tla_0 } from "./application-CtunUkHU.js";
import { ap as ru, r as J, k as Rn, aq as su, ar as iu, as as $s, u as Ht, j as Oe, at as ou, au as Gr, av as Cs, aw as pr, ax as au, ay as lu, az as cu, aA as uu, aB as fu, aC as Qe, aD as Ci, aE as _s, aF as _i, aG as sr, aH as Ls, aI as du, aJ as hu, aK as pu, aL as mu, S as Da, aM as Li, aN as ji, aO as gu, P as yu, m as xu, l as bu, n as vu, __tla as __tla_1 } from "./SceneEnvironment-Bkc1nHvp.js";
import { d as Fa, n as za, a as ka } from "./index-B5H0dLq3.js";
let Sg, wg, Fd;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  function bn(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : r[e] = t, r;
  }
  function Xa(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var xe = function r(e, t, n) {
    var s = this;
    Xa(this, r), bn(this, "dot2", function(i, o) {
      return s.x * i + s.y * o;
    }), bn(this, "dot3", function(i, o, a) {
      return s.x * i + s.y * o + s.z * a;
    }), this.x = e, this.y = t, this.z = n;
  }, wu = [
    new xe(1, 1, 0),
    new xe(-1, 1, 0),
    new xe(1, -1, 0),
    new xe(-1, -1, 0),
    new xe(1, 0, 1),
    new xe(-1, 0, 1),
    new xe(1, 0, -1),
    new xe(-1, 0, -1),
    new xe(0, 1, 1),
    new xe(0, -1, 1),
    new xe(0, 1, -1),
    new xe(0, -1, -1)
  ], Hi = [
    151,
    160,
    137,
    91,
    90,
    15,
    131,
    13,
    201,
    95,
    96,
    53,
    194,
    233,
    7,
    225,
    140,
    36,
    103,
    30,
    69,
    142,
    8,
    99,
    37,
    240,
    21,
    10,
    23,
    190,
    6,
    148,
    247,
    120,
    234,
    75,
    0,
    26,
    197,
    62,
    94,
    252,
    219,
    203,
    117,
    35,
    11,
    32,
    57,
    177,
    33,
    88,
    237,
    149,
    56,
    87,
    174,
    20,
    125,
    136,
    171,
    168,
    68,
    175,
    74,
    165,
    71,
    134,
    139,
    48,
    27,
    166,
    77,
    146,
    158,
    231,
    83,
    111,
    229,
    122,
    60,
    211,
    133,
    230,
    220,
    105,
    92,
    41,
    55,
    46,
    245,
    40,
    244,
    102,
    143,
    54,
    65,
    25,
    63,
    161,
    1,
    216,
    80,
    73,
    209,
    76,
    132,
    187,
    208,
    89,
    18,
    169,
    200,
    196,
    135,
    130,
    116,
    188,
    159,
    86,
    164,
    100,
    109,
    198,
    173,
    186,
    3,
    64,
    52,
    217,
    226,
    250,
    124,
    123,
    5,
    202,
    38,
    147,
    118,
    126,
    255,
    82,
    85,
    212,
    207,
    206,
    59,
    227,
    47,
    16,
    58,
    17,
    182,
    189,
    28,
    42,
    223,
    183,
    170,
    213,
    119,
    248,
    152,
    2,
    44,
    154,
    163,
    70,
    221,
    153,
    101,
    155,
    167,
    43,
    172,
    9,
    129,
    22,
    39,
    253,
    19,
    98,
    108,
    110,
    79,
    113,
    224,
    232,
    178,
    185,
    112,
    104,
    218,
    246,
    97,
    228,
    251,
    34,
    242,
    193,
    238,
    210,
    144,
    12,
    191,
    179,
    162,
    241,
    81,
    51,
    145,
    235,
    249,
    14,
    239,
    107,
    49,
    192,
    214,
    31,
    181,
    199,
    106,
    157,
    184,
    84,
    204,
    176,
    115,
    121,
    50,
    45,
    127,
    4,
    150,
    254,
    138,
    236,
    205,
    93,
    222,
    114,
    67,
    29,
    24,
    72,
    243,
    141,
    128,
    195,
    78,
    66,
    215,
    61,
    156,
    180
  ], Ni = new Array(512), Di = new Array(512), Su = function(e) {
    e > 0 && e < 1 && (e *= 65536), e = Math.floor(e), e < 256 && (e |= e << 8);
    for (var t = 0; t < 256; t++) {
      var n;
      t & 1 ? n = Hi[t] ^ e & 255 : n = Hi[t] ^ e >> 8 & 255, Ni[t] = Ni[t + 256] = n, Di[t] = Di[t + 256] = wu[n % 12];
    }
  };
  Su(0);
  function Pu(r) {
    if (typeof r == "number") r = Math.abs(r);
    else if (typeof r == "string") {
      var e = r;
      r = 0;
      for (var t = 0; t < e.length; t++) r = (r + (t + 1) * (e.charCodeAt(t) % 96)) % 2147483647;
    }
    return r === 0 && (r = 311), r;
  }
  function Fi(r) {
    var e = Pu(r);
    return function() {
      var t = e * 48271 % 2147483647;
      return e = t, t / 2147483647;
    };
  }
  var Tu = function r(e) {
    var t = this;
    Xa(this, r), bn(this, "seed", 0), bn(this, "init", function(n) {
      t.seed = n, t.value = Fi(n);
    }), bn(this, "value", Fi(this.seed)), this.init(e);
  };
  new Tu(Math.random());
  var Ru = Object.defineProperty, Mu = (r, e, t) => e in r ? Ru(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t, Eu = (r, e, t) => (Mu(r, e + "", t), t);
  class Au {
    constructor() {
      Eu(this, "_listeners");
    }
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return false;
      const n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      const s = this._listeners[e];
      if (s !== void 0) {
        const i = s.indexOf(t);
        i !== -1 && s.splice(i, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      const n = this._listeners[e.type];
      if (n !== void 0) {
        e.target = this;
        const s = n.slice(0);
        for (let i = 0, o = s.length; i < o; i++) s[i].call(this, e);
        e.target = null;
      }
    }
  }
  var Iu = Object.defineProperty, Ou = (r, e, t) => e in r ? Iu(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t, j = (r, e, t) => (Ou(r, typeof e != "symbol" ? e + "" : e, t), t);
  const jn = new fr(), zi = new rt(), Cu = Math.cos(70 * (Math.PI / 180)), ki = (r, e) => (r % e + e) % e;
  let _u = class extends Au {
    constructor(e, t) {
      super(), j(this, "object"), j(this, "domElement"), j(this, "enabled", true), j(this, "target", new b()), j(this, "minDistance", 0), j(this, "maxDistance", 1 / 0), j(this, "minZoom", 0), j(this, "maxZoom", 1 / 0), j(this, "minPolarAngle", 0), j(this, "maxPolarAngle", Math.PI), j(this, "minAzimuthAngle", -1 / 0), j(this, "maxAzimuthAngle", 1 / 0), j(this, "enableDamping", false), j(this, "dampingFactor", 0.05), j(this, "enableZoom", true), j(this, "zoomSpeed", 1), j(this, "enableRotate", true), j(this, "rotateSpeed", 1), j(this, "enablePan", true), j(this, "panSpeed", 1), j(this, "screenSpacePanning", true), j(this, "keyPanSpeed", 7), j(this, "zoomToCursor", false), j(this, "autoRotate", false), j(this, "autoRotateSpeed", 2), j(this, "reverseOrbit", false), j(this, "reverseHorizontalOrbit", false), j(this, "reverseVerticalOrbit", false), j(this, "keys", {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown"
      }), j(this, "mouseButtons", {
        LEFT: xt.ROTATE,
        MIDDLE: xt.DOLLY,
        RIGHT: xt.PAN
      }), j(this, "touches", {
        ONE: bt.ROTATE,
        TWO: bt.DOLLY_PAN
      }), j(this, "target0"), j(this, "position0"), j(this, "zoom0"), j(this, "_domElementKeyEvents", null), j(this, "getPolarAngle"), j(this, "getAzimuthalAngle"), j(this, "setPolarAngle"), j(this, "setAzimuthalAngle"), j(this, "getDistance"), j(this, "getZoomScale"), j(this, "listenToKeyEvents"), j(this, "stopListenToKeyEvents"), j(this, "saveState"), j(this, "reset"), j(this, "update"), j(this, "connect"), j(this, "dispose"), j(this, "dollyIn"), j(this, "dollyOut"), j(this, "getScale"), j(this, "setScale"), this.object = e, this.domElement = t, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = () => u.phi, this.getAzimuthalAngle = () => u.theta, this.setPolarAngle = (y) => {
        let P = ki(y, 2 * Math.PI), H = u.phi;
        H < 0 && (H += 2 * Math.PI), P < 0 && (P += 2 * Math.PI);
        let U = Math.abs(P - H);
        2 * Math.PI - U < U && (P < H ? P += 2 * Math.PI : H += 2 * Math.PI), f.phi = P - H, n.update();
      }, this.setAzimuthalAngle = (y) => {
        let P = ki(y, 2 * Math.PI), H = u.theta;
        H < 0 && (H += 2 * Math.PI), P < 0 && (P += 2 * Math.PI);
        let U = Math.abs(P - H);
        2 * Math.PI - U < U && (P < H ? P += 2 * Math.PI : H += 2 * Math.PI), f.theta = P - H, n.update();
      }, this.getDistance = () => n.object.position.distanceTo(n.target), this.listenToKeyEvents = (y) => {
        y.addEventListener("keydown", kr), this._domElementKeyEvents = y;
      }, this.stopListenToKeyEvents = () => {
        this._domElementKeyEvents.removeEventListener("keydown", kr), this._domElementKeyEvents = null;
      }, this.saveState = () => {
        n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
      }, this.reset = () => {
        n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(s), n.update(), l = a.NONE;
      }, this.update = (() => {
        const y = new b(), P = new b(0, 1, 0), H = new N().setFromUnitVectors(e.up, P), U = H.clone().invert(), te = new b(), Le = new N(), We = 2 * Math.PI;
        return function() {
          const Ri = n.object.position;
          H.setFromUnitVectors(e.up, P), U.copy(H).invert(), y.copy(Ri).sub(n.target), y.applyQuaternion(H), u.setFromVector3(y), n.autoRotate && l === a.NONE && K(ne()), n.enableDamping ? (u.theta += f.theta * n.dampingFactor, u.phi += f.phi * n.dampingFactor) : (u.theta += f.theta, u.phi += f.phi);
          let je = n.minAzimuthAngle, He = n.maxAzimuthAngle;
          isFinite(je) && isFinite(He) && (je < -Math.PI ? je += We : je > Math.PI && (je -= We), He < -Math.PI ? He += We : He > Math.PI && (He -= We), je <= He ? u.theta = Math.max(je, Math.min(He, u.theta)) : u.theta = u.theta > (je + He) / 2 ? Math.max(je, u.theta) : Math.min(He, u.theta)), u.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, u.phi)), u.makeSafe(), n.enableDamping === true ? n.target.addScaledVector(m, n.dampingFactor) : n.target.add(m), n.zoomToCursor && E || n.object.isOrthographicCamera ? u.radius = Fr(u.radius) : u.radius = Fr(u.radius * h), y.setFromSpherical(u), y.applyQuaternion(U), Ri.copy(n.target).add(y), n.object.matrixAutoUpdate || n.object.updateMatrix(), n.object.lookAt(n.target), n.enableDamping === true ? (f.theta *= 1 - n.dampingFactor, f.phi *= 1 - n.dampingFactor, m.multiplyScalar(1 - n.dampingFactor)) : (f.set(0, 0, 0), m.set(0, 0, 0));
          let Zt = false;
          if (n.zoomToCursor && E) {
            let Qt = null;
            if (n.object instanceof Ke && n.object.isPerspectiveCamera) {
              const Kt = y.length();
              Qt = Fr(Kt * h);
              const Ln = Kt - Qt;
              n.object.position.addScaledVector(L, Ln), n.object.updateMatrixWorld();
            } else if (n.object.isOrthographicCamera) {
              const Kt = new b(C.x, C.y, 0);
              Kt.unproject(n.object), n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / h)), n.object.updateProjectionMatrix(), Zt = true;
              const Ln = new b(C.x, C.y, 0);
              Ln.unproject(n.object), n.object.position.sub(Ln).add(Kt), n.object.updateMatrixWorld(), Qt = y.length();
            } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), n.zoomToCursor = false;
            Qt !== null && (n.screenSpacePanning ? n.target.set(0, 0, -1).transformDirection(n.object.matrix).multiplyScalar(Qt).add(n.object.position) : (jn.origin.copy(n.object.position), jn.direction.set(0, 0, -1).transformDirection(n.object.matrix), Math.abs(n.object.up.dot(jn.direction)) < Cu ? e.lookAt(n.target) : (zi.setFromNormalAndCoplanarPoint(n.object.up, n.target), jn.intersectPlane(zi, n.target))));
          } else n.object instanceof gn && n.object.isOrthographicCamera && (Zt = h !== 1, Zt && (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / h)), n.object.updateProjectionMatrix()));
          return h = 1, E = false, Zt || te.distanceToSquared(n.object.position) > c || 8 * (1 - Le.dot(n.object.quaternion)) > c ? (n.dispatchEvent(s), te.copy(n.object.position), Le.copy(n.object.quaternion), Zt = false, true) : false;
        };
      })(), this.connect = (y) => {
        n.domElement = y, n.domElement.style.touchAction = "none", n.domElement.addEventListener("contextmenu", Pi), n.domElement.addEventListener("pointerdown", wi), n.domElement.addEventListener("pointercancel", $t), n.domElement.addEventListener("wheel", Si);
      }, this.dispose = () => {
        var y, P, H, U, te, Le;
        n.domElement && (n.domElement.style.touchAction = "auto"), (y = n.domElement) == null || y.removeEventListener("contextmenu", Pi), (P = n.domElement) == null || P.removeEventListener("pointerdown", wi), (H = n.domElement) == null || H.removeEventListener("pointercancel", $t), (U = n.domElement) == null || U.removeEventListener("wheel", Si), (te = n.domElement) == null || te.ownerDocument.removeEventListener("pointermove", zr), (Le = n.domElement) == null || Le.ownerDocument.removeEventListener("pointerup", $t), n._domElementKeyEvents !== null && n._domElementKeyEvents.removeEventListener("keydown", kr);
      };
      const n = this, s = {
        type: "change"
      }, i = {
        type: "start"
      }, o = {
        type: "end"
      }, a = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6
      };
      let l = a.NONE;
      const c = 1e-6, u = new Mi(), f = new Mi();
      let h = 1;
      const m = new b(), g = new z(), v = new z(), x = new z(), S = new z(), R = new z(), M = new z(), I = new z(), O = new z(), _ = new z(), L = new b(), C = new z();
      let E = false;
      const w = [], T = {};
      function ne() {
        return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
      }
      function F() {
        return Math.pow(0.95, n.zoomSpeed);
      }
      function K(y) {
        n.reverseOrbit || n.reverseHorizontalOrbit ? f.theta += y : f.theta -= y;
      }
      function re(y) {
        n.reverseOrbit || n.reverseVerticalOrbit ? f.phi += y : f.phi -= y;
      }
      const ye = (() => {
        const y = new b();
        return function(H, U) {
          y.setFromMatrixColumn(U, 0), y.multiplyScalar(-H), m.add(y);
        };
      })(), Dr = (() => {
        const y = new b();
        return function(H, U) {
          n.screenSpacePanning === true ? y.setFromMatrixColumn(U, 1) : (y.setFromMatrixColumn(U, 0), y.crossVectors(n.object.up, y)), y.multiplyScalar(H), m.add(y);
        };
      })(), _e = (() => {
        const y = new b();
        return function(H, U) {
          const te = n.domElement;
          if (te && n.object instanceof Ke && n.object.isPerspectiveCamera) {
            const Le = n.object.position;
            y.copy(Le).sub(n.target);
            let We = y.length();
            We *= Math.tan(n.object.fov / 2 * Math.PI / 180), ye(2 * H * We / te.clientHeight, n.object.matrix), Dr(2 * U * We / te.clientHeight, n.object.matrix);
          } else te && n.object instanceof gn && n.object.isOrthographicCamera ? (ye(H * (n.object.right - n.object.left) / n.object.zoom / te.clientWidth, n.object.matrix), Dr(U * (n.object.top - n.object.bottom) / n.object.zoom / te.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = false);
        };
      })();
      function ot(y) {
        n.object instanceof Ke && n.object.isPerspectiveCamera || n.object instanceof gn && n.object.isOrthographicCamera ? h = y : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = false);
      }
      function ue(y) {
        ot(h / y);
      }
      function qt(y) {
        ot(h * y);
      }
      function _n(y) {
        if (!n.zoomToCursor || !n.domElement) return;
        E = true;
        const P = n.domElement.getBoundingClientRect(), H = y.clientX - P.left, U = y.clientY - P.top, te = P.width, Le = P.height;
        C.x = H / te * 2 - 1, C.y = -(U / Le) * 2 + 1, L.set(C.x, C.y, 1).unproject(n.object).sub(n.object.position).normalize();
      }
      function Fr(y) {
        return Math.max(n.minDistance, Math.min(n.maxDistance, y));
      }
      function hi(y) {
        g.set(y.clientX, y.clientY);
      }
      function Fl(y) {
        _n(y), I.set(y.clientX, y.clientY);
      }
      function pi(y) {
        S.set(y.clientX, y.clientY);
      }
      function zl(y) {
        v.set(y.clientX, y.clientY), x.subVectors(v, g).multiplyScalar(n.rotateSpeed);
        const P = n.domElement;
        P && (K(2 * Math.PI * x.x / P.clientHeight), re(2 * Math.PI * x.y / P.clientHeight)), g.copy(v), n.update();
      }
      function kl(y) {
        O.set(y.clientX, y.clientY), _.subVectors(O, I), _.y > 0 ? ue(F()) : _.y < 0 && qt(F()), I.copy(O), n.update();
      }
      function Xl(y) {
        R.set(y.clientX, y.clientY), M.subVectors(R, S).multiplyScalar(n.panSpeed), _e(M.x, M.y), S.copy(R), n.update();
      }
      function Ul(y) {
        _n(y), y.deltaY < 0 ? qt(F()) : y.deltaY > 0 && ue(F()), n.update();
      }
      function Gl(y) {
        let P = false;
        switch (y.code) {
          case n.keys.UP:
            _e(0, n.keyPanSpeed), P = true;
            break;
          case n.keys.BOTTOM:
            _e(0, -n.keyPanSpeed), P = true;
            break;
          case n.keys.LEFT:
            _e(n.keyPanSpeed, 0), P = true;
            break;
          case n.keys.RIGHT:
            _e(-n.keyPanSpeed, 0), P = true;
            break;
        }
        P && (y.preventDefault(), n.update());
      }
      function mi() {
        if (w.length == 1) g.set(w[0].pageX, w[0].pageY);
        else {
          const y = 0.5 * (w[0].pageX + w[1].pageX), P = 0.5 * (w[0].pageY + w[1].pageY);
          g.set(y, P);
        }
      }
      function gi() {
        if (w.length == 1) S.set(w[0].pageX, w[0].pageY);
        else {
          const y = 0.5 * (w[0].pageX + w[1].pageX), P = 0.5 * (w[0].pageY + w[1].pageY);
          S.set(y, P);
        }
      }
      function yi() {
        const y = w[0].pageX - w[1].pageX, P = w[0].pageY - w[1].pageY, H = Math.sqrt(y * y + P * P);
        I.set(0, H);
      }
      function Bl() {
        n.enableZoom && yi(), n.enablePan && gi();
      }
      function Wl() {
        n.enableZoom && yi(), n.enableRotate && mi();
      }
      function xi(y) {
        if (w.length == 1) v.set(y.pageX, y.pageY);
        else {
          const H = Xr(y), U = 0.5 * (y.pageX + H.x), te = 0.5 * (y.pageY + H.y);
          v.set(U, te);
        }
        x.subVectors(v, g).multiplyScalar(n.rotateSpeed);
        const P = n.domElement;
        P && (K(2 * Math.PI * x.x / P.clientHeight), re(2 * Math.PI * x.y / P.clientHeight)), g.copy(v);
      }
      function bi(y) {
        if (w.length == 1) R.set(y.pageX, y.pageY);
        else {
          const P = Xr(y), H = 0.5 * (y.pageX + P.x), U = 0.5 * (y.pageY + P.y);
          R.set(H, U);
        }
        M.subVectors(R, S).multiplyScalar(n.panSpeed), _e(M.x, M.y), S.copy(R);
      }
      function vi(y) {
        const P = Xr(y), H = y.pageX - P.x, U = y.pageY - P.y, te = Math.sqrt(H * H + U * U);
        O.set(0, te), _.set(0, Math.pow(O.y / I.y, n.zoomSpeed)), ue(_.y), I.copy(O);
      }
      function Vl(y) {
        n.enableZoom && vi(y), n.enablePan && bi(y);
      }
      function Yl(y) {
        n.enableZoom && vi(y), n.enableRotate && xi(y);
      }
      function wi(y) {
        var P, H;
        n.enabled !== false && (w.length === 0 && ((P = n.domElement) == null || P.ownerDocument.addEventListener("pointermove", zr), (H = n.domElement) == null || H.ownerDocument.addEventListener("pointerup", $t)), Kl(y), y.pointerType === "touch" ? Zl(y) : ql(y));
      }
      function zr(y) {
        n.enabled !== false && (y.pointerType === "touch" ? Ql(y) : $l(y));
      }
      function $t(y) {
        var P, H, U;
        Jl(y), w.length === 0 && ((P = n.domElement) == null || P.releasePointerCapture(y.pointerId), (H = n.domElement) == null || H.ownerDocument.removeEventListener("pointermove", zr), (U = n.domElement) == null || U.ownerDocument.removeEventListener("pointerup", $t)), n.dispatchEvent(o), l = a.NONE;
      }
      function ql(y) {
        let P;
        switch (y.button) {
          case 0:
            P = n.mouseButtons.LEFT;
            break;
          case 1:
            P = n.mouseButtons.MIDDLE;
            break;
          case 2:
            P = n.mouseButtons.RIGHT;
            break;
          default:
            P = -1;
        }
        switch (P) {
          case xt.DOLLY:
            if (n.enableZoom === false) return;
            Fl(y), l = a.DOLLY;
            break;
          case xt.ROTATE:
            if (y.ctrlKey || y.metaKey || y.shiftKey) {
              if (n.enablePan === false) return;
              pi(y), l = a.PAN;
            } else {
              if (n.enableRotate === false) return;
              hi(y), l = a.ROTATE;
            }
            break;
          case xt.PAN:
            if (y.ctrlKey || y.metaKey || y.shiftKey) {
              if (n.enableRotate === false) return;
              hi(y), l = a.ROTATE;
            } else {
              if (n.enablePan === false) return;
              pi(y), l = a.PAN;
            }
            break;
          default:
            l = a.NONE;
        }
        l !== a.NONE && n.dispatchEvent(i);
      }
      function $l(y) {
        if (n.enabled !== false) switch (l) {
          case a.ROTATE:
            if (n.enableRotate === false) return;
            zl(y);
            break;
          case a.DOLLY:
            if (n.enableZoom === false) return;
            kl(y);
            break;
          case a.PAN:
            if (n.enablePan === false) return;
            Xl(y);
            break;
        }
      }
      function Si(y) {
        n.enabled === false || n.enableZoom === false || l !== a.NONE && l !== a.ROTATE || (y.preventDefault(), n.dispatchEvent(i), Ul(y), n.dispatchEvent(o));
      }
      function kr(y) {
        n.enabled === false || n.enablePan === false || Gl(y);
      }
      function Zl(y) {
        switch (Ti(y), w.length) {
          case 1:
            switch (n.touches.ONE) {
              case bt.ROTATE:
                if (n.enableRotate === false) return;
                mi(), l = a.TOUCH_ROTATE;
                break;
              case bt.PAN:
                if (n.enablePan === false) return;
                gi(), l = a.TOUCH_PAN;
                break;
              default:
                l = a.NONE;
            }
            break;
          case 2:
            switch (n.touches.TWO) {
              case bt.DOLLY_PAN:
                if (n.enableZoom === false && n.enablePan === false) return;
                Bl(), l = a.TOUCH_DOLLY_PAN;
                break;
              case bt.DOLLY_ROTATE:
                if (n.enableZoom === false && n.enableRotate === false) return;
                Wl(), l = a.TOUCH_DOLLY_ROTATE;
                break;
              default:
                l = a.NONE;
            }
            break;
          default:
            l = a.NONE;
        }
        l !== a.NONE && n.dispatchEvent(i);
      }
      function Ql(y) {
        switch (Ti(y), l) {
          case a.TOUCH_ROTATE:
            if (n.enableRotate === false) return;
            xi(y), n.update();
            break;
          case a.TOUCH_PAN:
            if (n.enablePan === false) return;
            bi(y), n.update();
            break;
          case a.TOUCH_DOLLY_PAN:
            if (n.enableZoom === false && n.enablePan === false) return;
            Vl(y), n.update();
            break;
          case a.TOUCH_DOLLY_ROTATE:
            if (n.enableZoom === false && n.enableRotate === false) return;
            Yl(y), n.update();
            break;
          default:
            l = a.NONE;
        }
      }
      function Pi(y) {
        n.enabled !== false && y.preventDefault();
      }
      function Kl(y) {
        w.push(y);
      }
      function Jl(y) {
        delete T[y.pointerId];
        for (let P = 0; P < w.length; P++) if (w[P].pointerId == y.pointerId) {
          w.splice(P, 1);
          return;
        }
      }
      function Ti(y) {
        let P = T[y.pointerId];
        P === void 0 && (P = new z(), T[y.pointerId] = P), P.set(y.pageX, y.pageY);
      }
      function Xr(y) {
        const P = y.pointerId === w[0].pointerId ? w[1] : w[0];
        return T[P.pointerId];
      }
      this.dollyIn = (y = F()) => {
        qt(y), n.update();
      }, this.dollyOut = (y = F()) => {
        ue(y), n.update();
      }, this.getScale = () => h, this.setScale = (y) => {
        ot(y), n.update();
      }, this.getZoomScale = () => F(), t !== void 0 && this.connect(t), this.update();
    }
  };
  var Lu = Object.defineProperty, ju = (r, e, t) => e in r ? Lu(r, e, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: t
  }) : r[e] = t, G = (r, e, t) => (ju(r, typeof e != "symbol" ? e + "" : e, t), t);
  function Br(r, e, t, n, s) {
    let i;
    if (r = r.subarray || r.slice ? r : r.buffer, t = t.subarray || t.slice ? t : t.buffer, r = e ? r.subarray ? r.subarray(e, s && e + s) : r.slice(e, s && e + s) : r, t.set) t.set(r, n);
    else for (i = 0; i < r.length; i++) t[i + n] = r[i];
    return t;
  }
  function Hu(r) {
    return r instanceof Float32Array ? r : r instanceof yt ? r.getAttribute("position").array : r.map((e) => {
      const t = Array.isArray(e);
      return e instanceof b ? [
        e.x,
        e.y,
        e.z
      ] : e instanceof z ? [
        e.x,
        e.y,
        0
      ] : t && e.length === 3 ? [
        e[0],
        e[1],
        e[2]
      ] : t && e.length === 2 ? [
        e[0],
        e[1],
        0
      ] : e;
    }).flat();
  }
  class Nu extends yt {
    constructor() {
      super(), G(this, "type", "MeshLine"), G(this, "isMeshLine", true), G(this, "positions", []), G(this, "previous", []), G(this, "next", []), G(this, "side", []), G(this, "width", []), G(this, "indices_array", []), G(this, "uvs", []), G(this, "counters", []), G(this, "widthCallback", null), G(this, "_attributes"), G(this, "_points", []), G(this, "points"), G(this, "matrixWorld", new q()), Object.defineProperties(this, {
        points: {
          enumerable: true,
          get() {
            return this._points;
          },
          set(e) {
            this.setPoints(e, this.widthCallback);
          }
        }
      });
    }
    setMatrixWorld(e) {
      this.matrixWorld = e;
    }
    setPoints(e, t) {
      if (e = Hu(e), this._points = e, this.widthCallback = t ?? null, this.positions = [], this.counters = [], e.length && e[0] instanceof b) for (let n = 0; n < e.length; n++) {
        const s = e[n], i = n / (e.length - 1);
        this.positions.push(s.x, s.y, s.z), this.positions.push(s.x, s.y, s.z), this.counters.push(i), this.counters.push(i);
      }
      else for (let n = 0; n < e.length; n += 3) {
        const s = n / (e.length - 1);
        this.positions.push(e[n], e[n + 1], e[n + 2]), this.positions.push(e[n], e[n + 1], e[n + 2]), this.counters.push(s), this.counters.push(s);
      }
      this.process();
    }
    compareV3(e, t) {
      const n = e * 6, s = t * 6;
      return this.positions[n] === this.positions[s] && this.positions[n + 1] === this.positions[s + 1] && this.positions[n + 2] === this.positions[s + 2];
    }
    copyV3(e) {
      const t = e * 6;
      return [
        this.positions[t],
        this.positions[t + 1],
        this.positions[t + 2]
      ];
    }
    process() {
      const e = this.positions.length / 6;
      this.previous = [], this.next = [], this.side = [], this.width = [], this.indices_array = [], this.uvs = [];
      let t, n;
      this.compareV3(0, e - 1) ? n = this.copyV3(e - 2) : n = this.copyV3(0), this.previous.push(n[0], n[1], n[2]), this.previous.push(n[0], n[1], n[2]);
      for (let s = 0; s < e; s++) {
        if (this.side.push(1), this.side.push(-1), this.widthCallback ? t = this.widthCallback(s / (e - 1)) : t = 1, this.width.push(t), this.width.push(t), this.uvs.push(s / (e - 1), 0), this.uvs.push(s / (e - 1), 1), s < e - 1) {
          n = this.copyV3(s), this.previous.push(n[0], n[1], n[2]), this.previous.push(n[0], n[1], n[2]);
          const i = s * 2;
          this.indices_array.push(i, i + 1, i + 2), this.indices_array.push(i + 2, i + 1, i + 3);
        }
        s > 0 && (n = this.copyV3(s), this.next.push(n[0], n[1], n[2]), this.next.push(n[0], n[1], n[2]));
      }
      this.compareV3(e - 1, 0) ? n = this.copyV3(1) : n = this.copyV3(e - 1), this.next.push(n[0], n[1], n[2]), this.next.push(n[0], n[1], n[2]), !this._attributes || this._attributes.position.count !== this.counters.length ? this._attributes = {
        position: new de(new Float32Array(this.positions), 3),
        previous: new de(new Float32Array(this.previous), 3),
        next: new de(new Float32Array(this.next), 3),
        side: new de(new Float32Array(this.side), 1),
        width: new de(new Float32Array(this.width), 1),
        uv: new de(new Float32Array(this.uvs), 2),
        index: new de(new Uint16Array(this.indices_array), 1),
        counters: new de(new Float32Array(this.counters), 1)
      } : (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = true, this._attributes.previous.copyArray(new Float32Array(this.previous)), this._attributes.previous.needsUpdate = true, this._attributes.next.copyArray(new Float32Array(this.next)), this._attributes.next.needsUpdate = true, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = true, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = true, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = true, this._attributes.index.copyArray(new Uint16Array(this.indices_array)), this._attributes.index.needsUpdate = true), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setAttribute("position", this._attributes.position), this.setAttribute("previous", this._attributes.previous), this.setAttribute("next", this._attributes.next), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("counters", this._attributes.counters), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox();
    }
    advance({ x: e, y: t, z: n }) {
      const s = this._attributes.position.array, i = this._attributes.previous.array, o = this._attributes.next.array, a = s.length;
      Br(s, 0, i, 0, a), Br(s, 6, s, 0, a - 6), s[a - 6] = e, s[a - 5] = t, s[a - 4] = n, s[a - 3] = e, s[a - 2] = t, s[a - 1] = n, Br(s, 6, o, 0, a - 6), o[a - 6] = e, o[a - 5] = t, o[a - 4] = n, o[a - 3] = e, o[a - 2] = t, o[a - 1] = n, this._attributes.position.needsUpdate = true, this._attributes.previous.needsUpdate = true, this._attributes.next.needsUpdate = true;
    }
  }
  const Du = `
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`, Fu = parseInt(nc.replace(/\D+/g, "")), zu = Fu >= 154 ? "colorspace_fragment" : "encodings_fragment", ku = `
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${zu}>
  }
`;
  class Xu extends ec {
    constructor(e) {
      super({
        uniforms: {
          ...tc.fog,
          lineWidth: {
            value: 1
          },
          map: {
            value: null
          },
          useMap: {
            value: 0
          },
          alphaMap: {
            value: null
          },
          useAlphaMap: {
            value: 0
          },
          color: {
            value: new ie(16777215)
          },
          gradient: {
            value: [
              new ie(16711680),
              new ie(65280)
            ]
          },
          opacity: {
            value: 1
          },
          resolution: {
            value: new z(1, 1)
          },
          sizeAttenuation: {
            value: 1
          },
          dashArray: {
            value: 0
          },
          dashOffset: {
            value: 0
          },
          dashRatio: {
            value: 0.5
          },
          useDash: {
            value: 0
          },
          useGradient: {
            value: 0
          },
          visibility: {
            value: 1
          },
          alphaTest: {
            value: 0
          },
          repeat: {
            value: new z(1, 1)
          }
        },
        vertexShader: Du,
        fragmentShader: ku
      }), G(this, "lineWidth"), G(this, "map"), G(this, "useMap"), G(this, "alphaMap"), G(this, "useAlphaMap"), G(this, "color"), G(this, "gradient"), G(this, "resolution"), G(this, "sizeAttenuation"), G(this, "dashArray"), G(this, "dashOffset"), G(this, "dashRatio"), G(this, "useDash"), G(this, "useGradient"), G(this, "visibility"), G(this, "repeat"), this.type = "MeshLineMaterial", Object.defineProperties(this, {
        lineWidth: {
          enumerable: true,
          get() {
            return this.uniforms.lineWidth.value;
          },
          set(t) {
            this.uniforms.lineWidth.value = t;
          }
        },
        map: {
          enumerable: true,
          get() {
            return this.uniforms.map.value;
          },
          set(t) {
            this.uniforms.map.value = t;
          }
        },
        useMap: {
          enumerable: true,
          get() {
            return this.uniforms.useMap.value;
          },
          set(t) {
            this.uniforms.useMap.value = t;
          }
        },
        alphaMap: {
          enumerable: true,
          get() {
            return this.uniforms.alphaMap.value;
          },
          set(t) {
            this.uniforms.alphaMap.value = t;
          }
        },
        useAlphaMap: {
          enumerable: true,
          get() {
            return this.uniforms.useAlphaMap.value;
          },
          set(t) {
            this.uniforms.useAlphaMap.value = t;
          }
        },
        color: {
          enumerable: true,
          get() {
            return this.uniforms.color.value;
          },
          set(t) {
            this.uniforms.color.value = t;
          }
        },
        gradient: {
          enumerable: true,
          get() {
            return this.uniforms.gradient.value;
          },
          set(t) {
            this.uniforms.gradient.value = t;
          }
        },
        opacity: {
          enumerable: true,
          get() {
            return this.uniforms.opacity.value;
          },
          set(t) {
            this.uniforms.opacity.value = t;
          }
        },
        resolution: {
          enumerable: true,
          get() {
            return this.uniforms.resolution.value;
          },
          set(t) {
            this.uniforms.resolution.value.copy(t);
          }
        },
        sizeAttenuation: {
          enumerable: true,
          get() {
            return this.uniforms.sizeAttenuation.value;
          },
          set(t) {
            this.uniforms.sizeAttenuation.value = t;
          }
        },
        dashArray: {
          enumerable: true,
          get() {
            return this.uniforms.dashArray.value;
          },
          set(t) {
            this.uniforms.dashArray.value = t, this.useDash = t !== 0 ? 1 : 0;
          }
        },
        dashOffset: {
          enumerable: true,
          get() {
            return this.uniforms.dashOffset.value;
          },
          set(t) {
            this.uniforms.dashOffset.value = t;
          }
        },
        dashRatio: {
          enumerable: true,
          get() {
            return this.uniforms.dashRatio.value;
          },
          set(t) {
            this.uniforms.dashRatio.value = t;
          }
        },
        useDash: {
          enumerable: true,
          get() {
            return this.uniforms.useDash.value;
          },
          set(t) {
            this.uniforms.useDash.value = t;
          }
        },
        useGradient: {
          enumerable: true,
          get() {
            return this.uniforms.useGradient.value;
          },
          set(t) {
            this.uniforms.useGradient.value = t;
          }
        },
        visibility: {
          enumerable: true,
          get() {
            return this.uniforms.visibility.value;
          },
          set(t) {
            this.uniforms.visibility.value = t;
          }
        },
        alphaTest: {
          enumerable: true,
          get() {
            return this.uniforms.alphaTest.value;
          },
          set(t) {
            this.uniforms.alphaTest.value = t;
          }
        },
        repeat: {
          enumerable: true,
          get() {
            return this.uniforms.repeat.value;
          },
          set(t) {
            this.uniforms.repeat.value.copy(t);
          }
        }
      }), this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.lineWidth = e.lineWidth, this.map = e.map, this.useMap = e.useMap, this.alphaMap = e.alphaMap, this.useAlphaMap = e.useAlphaMap, this.color.copy(e.color), this.gradient = e.gradient, this.opacity = e.opacity, this.resolution.copy(e.resolution), this.sizeAttenuation = e.sizeAttenuation, this.dashArray = e.dashArray, this.dashOffset = e.dashOffset, this.dashRatio = e.dashRatio, this.useDash = e.useDash, this.useGradient = e.useGradient, this.visibility = e.visibility, this.alphaTest = e.alphaTest, this.repeat.copy(e.repeat), this;
    }
  }
  const Uu = p.forwardRef(({ makeDefault: r, camera: e, regress: t, domElement: n, enableDamping: s = true, keyEvents: i = false, onChange: o, onStart: a, onEnd: l, ...c }, u) => {
    const f = W((_) => _.invalidate), h = W((_) => _.camera), m = W((_) => _.gl), g = W((_) => _.events), v = W((_) => _.setEvents), x = W((_) => _.set), S = W((_) => _.get), R = W((_) => _.performance), M = e || h, I = n || g.connected || m.domElement, O = p.useMemo(() => new _u(M), [
      M
    ]);
    return X(() => {
      O.enabled && O.update();
    }, -1), p.useEffect(() => (i && O.connect(i === true ? I : i), O.connect(I), () => void O.dispose()), [
      i,
      I,
      t,
      O,
      f
    ]), p.useEffect(() => {
      const _ = (E) => {
        f(), t && R.regress(), o && o(E);
      }, L = (E) => {
        a && a(E);
      }, C = (E) => {
        l && l(E);
      };
      return O.addEventListener("change", _), O.addEventListener("start", L), O.addEventListener("end", C), () => {
        O.removeEventListener("start", L), O.removeEventListener("end", C), O.removeEventListener("change", _);
      };
    }, [
      o,
      a,
      l,
      O,
      f,
      v
    ]), p.useEffect(() => {
      if (r) {
        const _ = S().controls;
        return x({
          controls: O
        }), () => x({
          controls: _
        });
      }
    }, [
      r,
      O
    ]), p.createElement("primitive", rc({
      ref: u,
      object: O,
      enableDamping: s
    }, c));
  }), Gu = {}, Xi = (r) => {
    let e;
    const t = /* @__PURE__ */ new Set(), n = (u, f) => {
      const h = typeof u == "function" ? u(e) : u;
      if (!Object.is(h, e)) {
        const m = e;
        e = f ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), t.forEach((g) => g(e, m));
      }
    }, s = () => e, l = {
      setState: n,
      getState: s,
      getInitialState: () => c,
      subscribe: (u) => (t.add(u), () => t.delete(u)),
      destroy: () => {
        (Gu ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), t.clear();
      }
    }, c = e = r(n, s, l);
    return l;
  }, Bu = (r) => r ? Xi(r) : Xi, Ua = {}, { useDebugValue: Wu } = Ut, { useSyncExternalStoreWithSelector: Vu } = Pa;
  let Ui = false;
  const Yu = (r) => r;
  function qu(r, e = Yu, t) {
    (Ua ? "production" : void 0) !== "production" && t && !Ui && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Ui = true);
    const n = Vu(r.subscribe, r.getState, r.getServerState || r.getInitialState, e, t);
    return Wu(n), n;
  }
  const Gi = (r) => {
    (Ua ? "production" : void 0) !== "production" && typeof r != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    const e = typeof r == "function" ? Bu(r) : r, t = (n, s) => qu(e, n, s);
    return Object.assign(t, e), t;
  }, $u = (r) => r ? Gi(r) : Gi;
  var Bi, Wi;
  const Vi = typeof window < "u" && ((Bi = window.document) != null && Bi.createElement || ((Wi = window.navigator) == null ? void 0 : Wi.product) === "ReactNative") ? Ut.useLayoutEffect : Ut.useEffect;
  function Zu() {
    const r = $u((e) => ({
      current: new Array(),
      version: 0,
      set: e
    }));
    return {
      In: ({ children: e }) => {
        const t = r((s) => s.set), n = r((s) => s.version);
        return Vi(() => {
          t((s) => ({
            version: s.version + 1
          }));
        }, []), Vi(() => (t(({ current: s }) => ({
          current: [
            ...s,
            e
          ]
        })), () => t(({ current: s }) => ({
          current: s.filter((i) => i !== e)
        }))), [
          e,
          n
        ]), null;
      },
      Out: () => {
        const e = r((t) => t.current);
        return Ut.createElement(Ut.Fragment, null, e);
      }
    };
  }
  const Qu = 0.05, Yi = 0.1;
  function Ga(r, e, t) {
    const n = e.gamepad;
    if (n == null) return;
    const s = t.components;
    for (const i in s) {
      let o = r[i];
      o == null && (r[i] = o = {});
      const { gamepadIndices: a } = s[i];
      let l = false, c = false;
      if (a.button != null && a.button < n.buttons.length) {
        const u = n.buttons[a.button];
        o.button = Je(u.value, 0, 1), l || (l = u.pressed || o.button === 1), c || (c = u.touched || o.button > Qu);
      }
      a.xAxis != null && a.xAxis < n.axes.length && (o.xAxis = Je(n.axes[a.xAxis], -1, 1), c || (c = Math.abs(o.xAxis) > Yi)), a.yAxis != null && a.yAxis < n.axes.length && (o.yAxis = Je(n.axes[a.yAxis], -1, 1), c || (c = Math.abs(o.yAxis) > Yi)), o.state = l ? "pressed" : c ? "touched" : "default";
    }
  }
  function qi(r, e) {
    if (e === sc) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
    if (e === Ms || e === Ta) {
      let t = r.getIndex();
      if (t === null) {
        const o = [], a = r.getAttribute("position");
        if (a !== void 0) {
          for (let l = 0; l < a.count; l++) o.push(l);
          r.setIndex(o), t = r.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
      }
      const n = t.count - 2, s = [];
      if (e === Ms) for (let o = 1; o <= n; o++) s.push(t.getX(0)), s.push(t.getX(o)), s.push(t.getX(o + 1));
      else for (let o = 0; o < n; o++) o % 2 === 0 ? (s.push(t.getX(o)), s.push(t.getX(o + 1)), s.push(t.getX(o + 2))) : (s.push(t.getX(o + 2)), s.push(t.getX(o + 1)), s.push(t.getX(o)));
      s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const i = r.clone();
      return i.setIndex(s), i.clearGroups(), i;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
  }
  class Ba extends ic {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new nf(t);
      }), this.register(function(t) {
        return new rf(t);
      }), this.register(function(t) {
        return new hf(t);
      }), this.register(function(t) {
        return new pf(t);
      }), this.register(function(t) {
        return new mf(t);
      }), this.register(function(t) {
        return new of(t);
      }), this.register(function(t) {
        return new af(t);
      }), this.register(function(t) {
        return new lf(t);
      }), this.register(function(t) {
        return new cf(t);
      }), this.register(function(t) {
        return new tf(t);
      }), this.register(function(t) {
        return new uf(t);
      }), this.register(function(t) {
        return new sf(t);
      }), this.register(function(t) {
        return new df(t);
      }), this.register(function(t) {
        return new ff(t);
      }), this.register(function(t) {
        return new Ju(t);
      }), this.register(function(t) {
        return new gf(t);
      }), this.register(function(t) {
        return new yf(t);
      });
    }
    load(e, t, n, s) {
      const i = this;
      let o;
      if (this.resourcePath !== "") o = this.resourcePath;
      else if (this.path !== "") {
        const c = yn.extractUrlBase(e);
        o = yn.resolveURL(c, this.path);
      } else o = yn.extractUrlBase(e);
      this.manager.itemStart(e);
      const a = function(c) {
        s ? s(c) : console.error(c), i.manager.itemError(e), i.manager.itemEnd(e);
      }, l = new Ra(this.manager);
      l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
        try {
          i.parse(c, o, function(u) {
            t(u), i.manager.itemEnd(e);
          }, a);
        } catch (u) {
          a(u);
        }
      }, n, a);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setKTX2Loader(e) {
      return this.ktx2Loader = e, this;
    }
    setMeshoptDecoder(e) {
      return this.meshoptDecoder = e, this;
    }
    register(e) {
      return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
      return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, n, s) {
      let i;
      const o = {}, a = {}, l = new TextDecoder();
      if (typeof e == "string") i = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Wa) {
        try {
          o[D.KHR_BINARY_GLTF] = new xf(e);
        } catch (f) {
          s && s(f);
          return;
        }
        i = JSON.parse(o[D.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(l.decode(e));
      else i = e;
      if (i.asset === void 0 || i.asset.version[0] < 2) {
        s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const c = new Cf(i, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      c.fileLoader.setRequestHeader(this.requestHeader);
      for (let u = 0; u < this.pluginCallbacks.length; u++) {
        const f = this.pluginCallbacks[u](c);
        f.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[f.name] = f, o[f.name] = true;
      }
      if (i.extensionsUsed) for (let u = 0; u < i.extensionsUsed.length; ++u) {
        const f = i.extensionsUsed[u], h = i.extensionsRequired || [];
        switch (f) {
          case D.KHR_MATERIALS_UNLIT:
            o[f] = new ef();
            break;
          case D.KHR_DRACO_MESH_COMPRESSION:
            o[f] = new bf(i, this.dracoLoader);
            break;
          case D.KHR_TEXTURE_TRANSFORM:
            o[f] = new vf();
            break;
          case D.KHR_MESH_QUANTIZATION:
            o[f] = new wf();
            break;
          default:
            h.indexOf(f) >= 0 && a[f] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".');
        }
      }
      c.setExtensions(o), c.setPlugins(a), c.parse(n, s);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function(s, i) {
        n.parse(e, t, s, i);
      });
    }
  }
  function Ku() {
    let r = {};
    return {
      get: function(e) {
        return r[e];
      },
      add: function(e, t) {
        r[e] = t;
      },
      remove: function(e) {
        delete r[e];
      },
      removeAll: function() {
        r = {};
      }
    };
  }
  const D = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
  };
  class Ju {
    constructor(e) {
      this.parser = e, this.name = D.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let n = 0, s = t.length; n < s; n++) {
        const i = t[n];
        i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, n = "light:" + e;
      let s = t.cache.get(n);
      if (s) return s;
      const i = t.json, l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
      let c;
      const u = new ie(16777215);
      l.color !== void 0 && u.setRGB(l.color[0], l.color[1], l.color[2], Be);
      const f = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          c = new lc(u), c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        case "point":
          c = new ac(u), c.distance = f;
          break;
        case "spot":
          c = new oc(u), c.distance = f, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return c.position.set(0, 0, 0), ke(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), s = Promise.resolve(c), t.cache.add(n, s), s;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, n = this.parser, i = n.json.nodes[e], a = (i.extensions && i.extensions[this.name] || {}).light;
      return a === void 0 ? null : this._loadLight(a).then(function(l) {
        return n._getNodeRef(t.cache, a, l);
      });
    }
  }
  class ef {
    constructor() {
      this.name = D.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return V;
    }
    extendParams(e, t, n) {
      const s = [];
      e.color = new ie(1, 1, 1), e.opacity = 1;
      const i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          const o = i.baseColorFactor;
          e.color.setRGB(o[0], o[1], o[2], Be), e.opacity = o[3];
        }
        i.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", i.baseColorTexture, nt));
      }
      return Promise.all(s);
    }
  }
  class tf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = s.extensions[this.name].emissiveStrength;
      return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
    }
  }
  class nf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
        const a = o.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new z(a, a);
      }
      return Promise.all(i);
    }
  }
  class rf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = s.extensions[this.name];
      return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
    }
  }
  class sf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(i);
    }
  }
  class of {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [];
      t.sheenColor = new ie(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const o = s.extensions[this.name];
      if (o.sheenColorFactor !== void 0) {
        const a = o.sheenColorFactor;
        t.sheenColor.setRGB(a[0], a[1], a[2], Be);
      }
      return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, nt)), o.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i);
    }
  }
  class af {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(i);
    }
  }
  class lf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
      const a = o.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new ie().setRGB(a[0], a[1], a[2], Be), Promise.all(i);
    }
  }
  class cf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const s = this.parser.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = s.extensions[this.name];
      return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
    }
  }
  class uf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
      const a = o.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new ie().setRGB(a[0], a[1], a[2], Be), o.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, nt)), Promise.all(i);
    }
  }
  class ff {
    constructor(e) {
      this.parser = e, this.name = D.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(i);
    }
  }
  class df {
    constructor(e) {
      this.parser = e, this.name = D.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Ce;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, s = n.json.materials[e];
      if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
      const i = [], o = s.extensions[this.name];
      return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(i);
    }
  }
  class hf {
    constructor(e) {
      this.parser = e, this.name = D.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, n = t.json, s = n.textures[e];
      if (!s.extensions || !s.extensions[this.name]) return null;
      const i = s.extensions[this.name], o = t.options.ktx2Loader;
      if (!o) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, i.source, o);
    }
  }
  class pf {
    constructor(e) {
      this.parser = e, this.name = D.EXT_TEXTURE_WEBP;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      const o = i.extensions[t], a = s.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return n.loadTextureImage(e, o.source, l);
    }
  }
  class mf {
    constructor(e) {
      this.parser = e, this.name = D.EXT_TEXTURE_AVIF;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, s = n.json, i = s.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      const o = i.extensions[t], a = s.images[o.source];
      let l = n.textureLoader;
      if (a.uri) {
        const c = n.options.manager.getHandler(a.uri);
        c !== null && (l = c);
      }
      return n.loadTextureImage(e, o.source, l);
    }
  }
  class gf {
    constructor(e) {
      this.name = D.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const s = n.extensions[this.name], i = this.parser.getDependency("buffer", s.buffer), o = this.parser.options.meshoptDecoder;
        if (!o || !o.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return i.then(function(a) {
          const l = s.byteOffset || 0, c = s.byteLength || 0, u = s.count, f = s.byteStride, h = new Uint8Array(a, l, c);
          return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, f, h, s.mode, s.filter).then(function(m) {
            return m.buffer;
          }) : o.ready.then(function() {
            const m = new ArrayBuffer(u * f);
            return o.decodeGltfBuffer(new Uint8Array(m), u, f, h, s.mode, s.filter), m;
          });
        });
      } else return null;
    }
  }
  class yf {
    constructor(e) {
      this.name = D.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const s = t.meshes[n.mesh];
      for (const c of s.primitives) if (c.mode !== we.TRIANGLES && c.mode !== we.TRIANGLE_STRIP && c.mode !== we.TRIANGLE_FAN && c.mode !== void 0) return null;
      const o = n.extensions[this.name].attributes, a = [], l = {};
      for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then((u) => (l[c] = u, l[c])));
      return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((c) => {
        const u = c.pop(), f = u.isGroup ? u.children : [
          u
        ], h = c[0].count, m = [];
        for (const g of f) {
          const v = new q(), x = new b(), S = new N(), R = new b(1, 1, 1), M = new Ma(g.geometry, g.material, h);
          for (let I = 0; I < h; I++) l.TRANSLATION && x.fromBufferAttribute(l.TRANSLATION, I), l.ROTATION && S.fromBufferAttribute(l.ROTATION, I), l.SCALE && R.fromBufferAttribute(l.SCALE, I), M.setMatrixAt(I, v.compose(x, S, R));
          for (const I in l) if (I === "_COLOR_0") {
            const O = l[I];
            M.instanceColor = new cc(O.array, O.itemSize, O.normalized);
          } else I !== "TRANSLATION" && I !== "ROTATION" && I !== "SCALE" && g.geometry.setAttribute(I, l[I]);
          Pe.prototype.copy.call(M, g), this.parser.assignFinalMaterial(M), m.push(M);
        }
        return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
      }));
    }
  }
  const Wa = "glTF", Jt = 12, $i = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class xf {
    constructor(e) {
      this.name = D.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, Jt), n = new TextDecoder();
      if (this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== Wa) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const s = this.header.length - Jt, i = new DataView(e, Jt);
      let o = 0;
      for (; o < s; ) {
        const a = i.getUint32(o, true);
        o += 4;
        const l = i.getUint32(o, true);
        if (o += 4, l === $i.JSON) {
          const c = new Uint8Array(e, Jt + o, a);
          this.content = n.decode(c);
        } else if (l === $i.BIN) {
          const c = Jt + o;
          this.body = e.slice(c, c + a);
        }
        o += a;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class bf {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = D.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, s = this.dracoLoader, i = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {};
      for (const u in o) {
        const f = js[u] || u.toLowerCase();
        a[f] = o[u];
      }
      for (const u in e.attributes) {
        const f = js[u] || u.toLowerCase();
        if (o[u] !== void 0) {
          const h = n.accessors[e.attributes[u]], m = Nt[h.componentType];
          c[f] = m.name, l[f] = h.normalized === true;
        }
      }
      return t.getDependency("bufferView", i).then(function(u) {
        return new Promise(function(f, h) {
          s.decodeDracoFile(u, function(m) {
            for (const g in m.attributes) {
              const v = m.attributes[g], x = l[g];
              x !== void 0 && (v.normalized = x);
            }
            f(m);
          }, a, c, Be, h);
        });
      });
    }
  }
  class vf {
    constructor() {
      this.name = D.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class wf {
    constructor() {
      this.name = D.KHR_MESH_QUANTIZATION;
    }
  }
  class Va extends Ic {
    constructor(e, t, n, s) {
      super(e, t, n, s);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, s = this.valueSize, i = e * s * 3 + s;
      for (let o = 0; o !== s; o++) t[o] = n[i + o];
      return t;
    }
    interpolate_(e, t, n, s) {
      const i = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, u = s - t, f = (n - t) / u, h = f * f, m = h * f, g = e * c, v = g - c, x = -2 * m + 3 * h, S = m - h, R = 1 - x, M = S - h + f;
      for (let I = 0; I !== a; I++) {
        const O = o[v + I + a], _ = o[v + I + l] * u, L = o[g + I + a], C = o[g + I] * u;
        i[I] = R * O + M * _ + x * L + S * C;
      }
      return i;
    }
  }
  const Sf = new N();
  class Pf extends Va {
    interpolate_(e, t, n, s) {
      const i = super.interpolate_(e, t, n, s);
      return Sf.fromArray(i).normalize().toArray(i), i;
    }
  }
  const we = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, Nt = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, Zi = {
    9728: Aa,
    9729: mt,
    9984: mc,
    9985: pc,
    9986: hc,
    9987: Ea
  }, Qi = {
    33071: As,
    33648: gc,
    10497: Es
  }, Wr = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, js = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, Ve = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, Tf = {
    CUBICSPLINE: void 0,
    LINEAR: Oa,
    STEP: Ec
  }, Vr = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function Rf(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new Gs({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: dr
    })), r.DefaultMaterial;
  }
  function at(r, e, t) {
    for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function ke(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function Mf(r, e, t) {
    let n = false, s = false, i = false;
    for (let c = 0, u = e.length; c < u; c++) {
      const f = e[c];
      if (f.POSITION !== void 0 && (n = true), f.NORMAL !== void 0 && (s = true), f.COLOR_0 !== void 0 && (i = true), n && s && i) break;
    }
    if (!n && !s && !i) return Promise.resolve(r);
    const o = [], a = [], l = [];
    for (let c = 0, u = e.length; c < u; c++) {
      const f = e[c];
      if (n) {
        const h = f.POSITION !== void 0 ? t.getDependency("accessor", f.POSITION) : r.attributes.position;
        o.push(h);
      }
      if (s) {
        const h = f.NORMAL !== void 0 ? t.getDependency("accessor", f.NORMAL) : r.attributes.normal;
        a.push(h);
      }
      if (i) {
        const h = f.COLOR_0 !== void 0 ? t.getDependency("accessor", f.COLOR_0) : r.attributes.color;
        l.push(h);
      }
    }
    return Promise.all([
      Promise.all(o),
      Promise.all(a),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], f = c[1], h = c[2];
      return n && (r.morphAttributes.position = u), s && (r.morphAttributes.normal = f), i && (r.morphAttributes.color = h), r.morphTargetsRelative = true, r;
    });
  }
  function Ef(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (r.morphTargetInfluences.length === t.length) {
        r.morphTargetDictionary = {};
        for (let n = 0, s = t.length; n < s; n++) r.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function Af(r) {
    let e;
    const t = r.extensions && r.extensions[D.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Yr(t.attributes) : e = r.indices + ":" + Yr(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, s = r.targets.length; n < s; n++) e += ":" + Yr(r.targets[n]);
    return e;
  }
  function Yr(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, s = t.length; n < s; n++) e += t[n] + ":" + r[t[n]] + ";";
    return e;
  }
  function Hs(r) {
    switch (r) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  function If(r) {
    return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
  }
  const Of = new q();
  class Cf {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Ku(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let n = false, s = -1, i = false, o = -1;
      if (typeof navigator < "u") {
        const a = navigator.userAgent;
        n = /^((?!chrome|android).)*safari/i.test(a) === true;
        const l = a.match(/Version\/(\d+)/);
        s = n && l ? parseInt(l[1], 10) : -1, i = a.indexOf("Firefox") > -1, o = i ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
      }
      typeof createImageBitmap > "u" || n && s < 17 || i && o < 98 ? this.textureLoader = new uc(this.options.manager) : this.textureLoader = new fc(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ra(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this, s = this.json, i = this.extensions;
      this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
        return o._markDefs && o._markDefs();
      }), Promise.all(this._invokeAll(function(o) {
        return o.beforeRoot && o.beforeRoot();
      })).then(function() {
        return Promise.all([
          n.getDependencies("scene"),
          n.getDependencies("animation"),
          n.getDependencies("camera")
        ]);
      }).then(function(o) {
        const a = {
          scene: o[0][s.scene || 0],
          scenes: o[0],
          animations: o[1],
          cameras: o[2],
          asset: s.asset,
          parser: n,
          userData: {}
        };
        return at(i, a, s), ke(a, s), Promise.all(n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(a);
        })).then(function() {
          for (const l of a.scenes) l.updateMatrixWorld();
          e(a);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
      for (let s = 0, i = t.length; s < i; s++) {
        const o = t[s].joints;
        for (let a = 0, l = o.length; a < l; a++) e[o[a]].isBone = true;
      }
      for (let s = 0, i = e.length; s < i; s++) {
        const o = e[s];
        o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const s = n.clone(), i = (o, a) => {
        const l = this.associations.get(o);
        l != null && this.associations.set(a, l);
        for (const [c, u] of o.children.entries()) i(u, a.children[c]);
      };
      return i(n, s), s.name += "_instance_" + e.uses[t]++, s;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const s = e(t[n]);
        if (s) return s;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let s = 0; s < t.length; s++) {
        const i = e(t[s]);
        i && n.push(i);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let s = this.cache.get(n);
      if (!s) {
        switch (e) {
          case "scene":
            s = this.loadScene(t);
            break;
          case "node":
            s = this._invokeOne(function(i) {
              return i.loadNode && i.loadNode(t);
            });
            break;
          case "mesh":
            s = this._invokeOne(function(i) {
              return i.loadMesh && i.loadMesh(t);
            });
            break;
          case "accessor":
            s = this.loadAccessor(t);
            break;
          case "bufferView":
            s = this._invokeOne(function(i) {
              return i.loadBufferView && i.loadBufferView(t);
            });
            break;
          case "buffer":
            s = this.loadBuffer(t);
            break;
          case "material":
            s = this._invokeOne(function(i) {
              return i.loadMaterial && i.loadMaterial(t);
            });
            break;
          case "texture":
            s = this._invokeOne(function(i) {
              return i.loadTexture && i.loadTexture(t);
            });
            break;
          case "skin":
            s = this.loadSkin(t);
            break;
          case "animation":
            s = this._invokeOne(function(i) {
              return i.loadAnimation && i.loadAnimation(t);
            });
            break;
          case "camera":
            s = this.loadCamera(t);
            break;
          default:
            if (s = this._invokeOne(function(i) {
              return i != this && i.getDependency && i.getDependency(e, t);
            }), !s) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, s);
      }
      return s;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this, s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(s.map(function(i, o) {
          return n.getDependency(e, o);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[D.KHR_BINARY_GLTF].body);
      const s = this.options;
      return new Promise(function(i, o) {
        n.load(yn.resolveURL(t.uri, s.path), i, void 0, function() {
          o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(n) {
        const s = t.byteLength || 0, i = t.byteOffset || 0;
        return n.slice(i, i + s);
      });
    }
    loadAccessor(e) {
      const t = this, n = this.json, s = this.json.accessors[e];
      if (s.bufferView === void 0 && s.sparse === void 0) {
        const o = Wr[s.type], a = Nt[s.componentType], l = s.normalized === true, c = new a(s.count * o);
        return Promise.resolve(new de(c, o, l));
      }
      const i = [];
      return s.bufferView !== void 0 ? i.push(this.getDependency("bufferView", s.bufferView)) : i.push(null), s.sparse !== void 0 && (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", s.sparse.values.bufferView))), Promise.all(i).then(function(o) {
        const a = o[0], l = Wr[s.type], c = Nt[s.componentType], u = c.BYTES_PER_ELEMENT, f = u * l, h = s.byteOffset || 0, m = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, g = s.normalized === true;
        let v, x;
        if (m && m !== f) {
          const S = Math.floor(h / m), R = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + S + ":" + s.count;
          let M = t.cache.get(R);
          M || (v = new c(a, S * m, s.count * m / u), M = new dc(v, m / u), t.cache.add(R, M)), x = new Ac(M, l, h % m / u, g);
        } else a === null ? v = new c(s.count * l) : v = new c(a, h, s.count * l), x = new de(v, l, g);
        if (s.sparse !== void 0) {
          const S = Wr.SCALAR, R = Nt[s.sparse.indices.componentType], M = s.sparse.indices.byteOffset || 0, I = s.sparse.values.byteOffset || 0, O = new R(o[1], M, s.sparse.count * S), _ = new c(o[2], I, s.sparse.count * l);
          a !== null && (x = new de(x.array.slice(), x.itemSize, x.normalized)), x.normalized = false;
          for (let L = 0, C = O.length; L < C; L++) {
            const E = O[L];
            if (x.setX(E, _[L * l]), l >= 2 && x.setY(E, _[L * l + 1]), l >= 3 && x.setZ(E, _[L * l + 2]), l >= 4 && x.setW(E, _[L * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
          x.normalized = g;
        }
        return x;
      });
    }
    loadTexture(e) {
      const t = this.json, n = this.options, i = t.textures[e].source, o = t.images[i];
      let a = this.textureLoader;
      if (o.uri) {
        const l = n.manager.getHandler(o.uri);
        l !== null && (a = l);
      }
      return this.loadTextureImage(e, i, a);
    }
    loadTextureImage(e, t, n) {
      const s = this, i = this.json, o = i.textures[e], a = i.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const c = this.loadImageSource(t, n).then(function(u) {
        u.flipY = false, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
        const h = (i.samplers || {})[o.sampler] || {};
        return u.magFilter = Zi[h.magFilter] || mt, u.minFilter = Zi[h.minFilter] || Ea, u.wrapS = Qi[h.wrapS] || Es, u.wrapT = Qi[h.wrapT] || Es, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== Aa && u.minFilter !== mt, s.associations.set(u, {
          textures: e
        }), u;
      }).catch(function() {
        return null;
      });
      return this.textureCache[l] = c, c;
    }
    loadImageSource(e, t) {
      const n = this, s = this.json, i = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((f) => f.clone());
      const o = s.images[e], a = self.URL || self.webkitURL;
      let l = o.uri || "", c = false;
      if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function(f) {
        c = true;
        const h = new Blob([
          f
        ], {
          type: o.mimeType
        });
        return l = a.createObjectURL(h), l;
      });
      else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const u = Promise.resolve(l).then(function(f) {
        return new Promise(function(h, m) {
          let g = h;
          t.isImageBitmapLoader === true && (g = function(v) {
            const x = new Is(v);
            x.needsUpdate = true, h(x);
          }), t.load(yn.resolveURL(f, i.path), g, void 0, m);
        });
      }).then(function(f) {
        return c === true && a.revokeObjectURL(l), ke(f, o), f.userData.mimeType = o.mimeType || If(o.uri), f;
      }).catch(function(f) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), f;
      });
      return this.sourceCache[e] = u, u;
    }
    assignTexture(e, t, n, s) {
      const i = this;
      return this.getDependency("texture", n.index).then(function(o) {
        if (!o) return null;
        if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), i.extensions[D.KHR_TEXTURE_TRANSFORM]) {
          const a = n.extensions !== void 0 ? n.extensions[D.KHR_TEXTURE_TRANSFORM] : void 0;
          if (a) {
            const l = i.associations.get(o);
            o = i.extensions[D.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), i.associations.set(o, l);
          }
        }
        return s !== void 0 && (o.colorSpace = s), e[t] = o, o;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const s = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
      if (e.isPoints) {
        const a = "PointsMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new yc(), xn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(a, l)), n = l;
      } else if (e.isLine) {
        const a = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(a);
        l || (l = new Us(), xn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l;
      }
      if (s || i || o) {
        let a = "ClonedMaterial:" + n.uuid + ":";
        s && (a += "derivative-tangents:"), i && (a += "vertex-colors:"), o && (a += "flat-shading:");
        let l = this.cache.get(a);
        l || (l = n.clone(), i && (l.vertexColors = true), o && (l.flatShading = true), s && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l;
      }
      e.material = n;
    }
    getMaterialType() {
      return Gs;
    }
    loadMaterial(e) {
      const t = this, n = this.json, s = this.extensions, i = n.materials[e];
      let o;
      const a = {}, l = i.extensions || {}, c = [];
      if (l[D.KHR_MATERIALS_UNLIT]) {
        const f = s[D.KHR_MATERIALS_UNLIT];
        o = f.getMaterialType(), c.push(f.extendParams(a, i, t));
      } else {
        const f = i.pbrMetallicRoughness || {};
        if (a.color = new ie(1, 1, 1), a.opacity = 1, Array.isArray(f.baseColorFactor)) {
          const h = f.baseColorFactor;
          a.color.setRGB(h[0], h[1], h[2], Be), a.opacity = h[3];
        }
        f.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", f.baseColorTexture, nt)), a.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, a.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", f.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", f.metallicRoughnessTexture))), o = this._invokeOne(function(h) {
          return h.getMaterialType && h.getMaterialType(e);
        }), c.push(Promise.all(this._invokeAll(function(h) {
          return h.extendMaterialParams && h.extendMaterialParams(e, a);
        })));
      }
      i.doubleSided === true && (a.side = Ia);
      const u = i.alphaMode || Vr.OPAQUE;
      if (u === Vr.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === Vr.MASK && (a.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && o !== V && (c.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new z(1, 1), i.normalTexture.scale !== void 0)) {
        const f = i.normalTexture.scale;
        a.normalScale.set(f, f);
      }
      if (i.occlusionTexture !== void 0 && o !== V && (c.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && o !== V) {
        const f = i.emissiveFactor;
        a.emissive = new ie().setRGB(f[0], f[1], f[2], Be);
      }
      return i.emissiveTexture !== void 0 && o !== V && c.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, nt)), Promise.all(c).then(function() {
        const f = new o(a);
        return i.name && (f.name = i.name), ke(f, i), t.associations.set(f, {
          materials: e
        }), i.extensions && at(s, f, i), f;
      });
    }
    createUniqueName(e) {
      const t = xc.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, s = this.primitiveCache;
      function i(a) {
        return n[D.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(l) {
          return Ki(l, a, t);
        });
      }
      const o = [];
      for (let a = 0, l = e.length; a < l; a++) {
        const c = e[a], u = Af(c), f = s[u];
        if (f) o.push(f.promise);
        else {
          let h;
          c.extensions && c.extensions[D.KHR_DRACO_MESH_COMPRESSION] ? h = i(c) : h = Ki(new yt(), c, t), s[u] = {
            primitive: c,
            promise: h
          }, o.push(h);
        }
      }
      return Promise.all(o);
    }
    loadMesh(e) {
      const t = this, n = this.json, s = this.extensions, i = n.meshes[e], o = i.primitives, a = [];
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l].material === void 0 ? Rf(this.cache) : this.getDependency("material", o[l].material);
        a.push(u);
      }
      return a.push(t.loadGeometries(o)), Promise.all(a).then(function(l) {
        const c = l.slice(0, l.length - 1), u = l[l.length - 1], f = [];
        for (let m = 0, g = u.length; m < g; m++) {
          const v = u[m], x = o[m];
          let S;
          const R = c[m];
          if (x.mode === we.TRIANGLES || x.mode === we.TRIANGLE_STRIP || x.mode === we.TRIANGLE_FAN || x.mode === void 0) S = i.isSkinnedMesh === true ? new bc(v, R) : new k(v, R), S.isSkinnedMesh === true && S.normalizeSkinWeights(), x.mode === we.TRIANGLE_STRIP ? S.geometry = qi(S.geometry, Ta) : x.mode === we.TRIANGLE_FAN && (S.geometry = qi(S.geometry, Ms));
          else if (x.mode === we.LINES) S = new Bs(v, R);
          else if (x.mode === we.LINE_STRIP) S = new vc(v, R);
          else if (x.mode === we.LINE_LOOP) S = new wc(v, R);
          else if (x.mode === we.POINTS) S = new Sc(v, R);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + x.mode);
          Object.keys(S.geometry.morphAttributes).length > 0 && Ef(S, i), S.name = t.createUniqueName(i.name || "mesh_" + e), ke(S, i), x.extensions && at(s, S, x), t.assignFinalMaterial(S), f.push(S);
        }
        for (let m = 0, g = f.length; m < g; m++) t.associations.set(f[m], {
          meshes: e,
          primitives: m
        });
        if (f.length === 1) return i.extensions && at(s, f[0], i), f[0];
        const h = new ce();
        i.extensions && at(s, h, i), t.associations.set(h, {
          meshes: e
        });
        for (let m = 0, g = f.length; m < g; m++) h.add(f[m]);
        return h;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], s = n[n.type];
      if (!s) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new Ke(Pc.radToDeg(s.yfov), s.aspectRatio || 1, s.znear || 1, s.zfar || 2e6) : n.type === "orthographic" && (t = new gn(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)), n.name && (t.name = this.createUniqueName(n.name)), ke(t, n), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], n = [];
      for (let s = 0, i = t.joints.length; s < i; s++) n.push(this._loadNodeShallow(t.joints[s]));
      return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(s) {
        const i = s.pop(), o = s, a = [], l = [];
        for (let c = 0, u = o.length; c < u; c++) {
          const f = o[c];
          if (f) {
            a.push(f);
            const h = new q();
            i !== null && h.fromArray(i.array, c * 16), l.push(h);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
        }
        return new Tc(a, l);
      });
    }
    loadAnimation(e) {
      const t = this.json, n = this, s = t.animations[e], i = s.name ? s.name : "animation_" + e, o = [], a = [], l = [], c = [], u = [];
      for (let f = 0, h = s.channels.length; f < h; f++) {
        const m = s.channels[f], g = s.samplers[m.sampler], v = m.target, x = v.node, S = s.parameters !== void 0 ? s.parameters[g.input] : g.input, R = s.parameters !== void 0 ? s.parameters[g.output] : g.output;
        v.node !== void 0 && (o.push(this.getDependency("node", x)), a.push(this.getDependency("accessor", S)), l.push(this.getDependency("accessor", R)), c.push(g), u.push(v));
      }
      return Promise.all([
        Promise.all(o),
        Promise.all(a),
        Promise.all(l),
        Promise.all(c),
        Promise.all(u)
      ]).then(function(f) {
        const h = f[0], m = f[1], g = f[2], v = f[3], x = f[4], S = [];
        for (let R = 0, M = h.length; R < M; R++) {
          const I = h[R], O = m[R], _ = g[R], L = v[R], C = x[R];
          if (I === void 0) continue;
          I.updateMatrix && I.updateMatrix();
          const E = n._createAnimationTracks(I, O, _, L, C);
          if (E) for (let w = 0; w < E.length; w++) S.push(E[w]);
        }
        return new Rc(i, void 0, S);
      });
    }
    createNodeMesh(e) {
      const t = this.json, n = this, s = t.nodes[e];
      return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(i) {
        const o = n._getNodeRef(n.meshCache, s.mesh, i);
        return s.weights !== void 0 && o.traverse(function(a) {
          if (a.isMesh) for (let l = 0, c = s.weights.length; l < c; l++) a.morphTargetInfluences[l] = s.weights[l];
        }), o;
      });
    }
    loadNode(e) {
      const t = this.json, n = this, s = t.nodes[e], i = n._loadNodeShallow(e), o = [], a = s.children || [];
      for (let c = 0, u = a.length; c < u; c++) o.push(n.getDependency("node", a[c]));
      const l = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
      return Promise.all([
        i,
        Promise.all(o),
        l
      ]).then(function(c) {
        const u = c[0], f = c[1], h = c[2];
        h !== null && u.traverse(function(m) {
          m.isSkinnedMesh && m.bind(h, Of);
        });
        for (let m = 0, g = f.length; m < g; m++) u.add(f[m]);
        return u;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json, n = this.extensions, s = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const i = t.nodes[e], o = i.name ? s.createUniqueName(i.name) : "", a = [], l = s._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && a.push(l), i.camera !== void 0 && a.push(s.getDependency("camera", i.camera).then(function(c) {
        return s._getNodeRef(s.cameraCache, i.camera, c);
      })), s._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        a.push(c);
      }), this.nodeCache[e] = Promise.all(a).then(function(c) {
        let u;
        if (i.isBone === true ? u = new Mc() : c.length > 1 ? u = new ce() : c.length === 1 ? u = c[0] : u = new Pe(), u !== c[0]) for (let f = 0, h = c.length; f < h; f++) u.add(c[f]);
        if (i.name && (u.userData.name = i.name, u.name = o), ke(u, i), i.extensions && at(n, u, i), i.matrix !== void 0) {
          const f = new q();
          f.fromArray(i.matrix), u.applyMatrix4(f);
        } else i.translation !== void 0 && u.position.fromArray(i.translation), i.rotation !== void 0 && u.quaternion.fromArray(i.rotation), i.scale !== void 0 && u.scale.fromArray(i.scale);
        if (!s.associations.has(u)) s.associations.set(u, {});
        else if (i.mesh !== void 0 && s.meshCache.refs[i.mesh] > 1) {
          const f = s.associations.get(u);
          s.associations.set(u, {
            ...f
          });
        }
        return s.associations.get(u).nodes = e, u;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], s = this, i = new ce();
      n.name && (i.name = s.createUniqueName(n.name)), ke(i, n), n.extensions && at(t, i, n);
      const o = n.nodes || [], a = [];
      for (let l = 0, c = o.length; l < c; l++) a.push(s.getDependency("node", o[l]));
      return Promise.all(a).then(function(l) {
        for (let u = 0, f = l.length; u < f; u++) i.add(l[u]);
        const c = (u) => {
          const f = /* @__PURE__ */ new Map();
          for (const [h, m] of s.associations) (h instanceof xn || h instanceof Is) && f.set(h, m);
          return u.traverse((h) => {
            const m = s.associations.get(h);
            m != null && f.set(h, m);
          }), f;
        };
        return s.associations = c(i), i;
      });
    }
    _createAnimationTracks(e, t, n, s, i) {
      const o = [], a = e.name ? e.name : e.uuid, l = [];
      Ve[i.path] === Ve.weights ? e.traverse(function(h) {
        h.morphTargetInfluences && l.push(h.name ? h.name : h.uuid);
      }) : l.push(a);
      let c;
      switch (Ve[i.path]) {
        case Ve.weights:
          c = Ai;
          break;
        case Ve.rotation:
          c = Ii;
          break;
        case Ve.translation:
        case Ve.scale:
          c = Ei;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              c = Ai;
              break;
            case 2:
            case 3:
            default:
              c = Ei;
              break;
          }
          break;
      }
      const u = s.interpolation !== void 0 ? Tf[s.interpolation] : Oa, f = this._getArrayFromAccessor(n);
      for (let h = 0, m = l.length; h < m; h++) {
        const g = new c(l[h] + "." + Ve[i.path], t.array, f, u);
        s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g);
      }
      return o;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const n = Hs(t.constructor), s = new Float32Array(t.length);
        for (let i = 0, o = t.length; i < o; i++) s[i] = t[i] * n;
        t = s;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(n) {
        const s = this instanceof Ii ? Pf : Va;
        return new s(this.times, this.values, this.getValueSize() / 3, n);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function _f(r, e, t) {
    const n = e.attributes, s = new Oc();
    if (n.POSITION !== void 0) {
      const a = t.json.accessors[n.POSITION], l = a.min, c = a.max;
      if (l !== void 0 && c !== void 0) {
        if (s.set(new b(l[0], l[1], l[2]), new b(c[0], c[1], c[2])), a.normalized) {
          const u = Hs(Nt[a.componentType]);
          s.min.multiplyScalar(u), s.max.multiplyScalar(u);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const i = e.targets;
    if (i !== void 0) {
      const a = new b(), l = new b();
      for (let c = 0, u = i.length; c < u; c++) {
        const f = i[c];
        if (f.POSITION !== void 0) {
          const h = t.json.accessors[f.POSITION], m = h.min, g = h.max;
          if (m !== void 0 && g !== void 0) {
            if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), h.normalized) {
              const v = Hs(Nt[h.componentType]);
              l.multiplyScalar(v);
            }
            a.max(l);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      s.expandByVector(a);
    }
    r.boundingBox = s;
    const o = new Ws();
    s.getCenter(o.center), o.radius = s.min.distanceTo(s.max) / 2, r.boundingSphere = o;
  }
  function Ki(r, e, t) {
    const n = e.attributes, s = [];
    function i(o, a) {
      return t.getDependency("accessor", o).then(function(l) {
        r.setAttribute(a, l);
      });
    }
    for (const o in n) {
      const a = js[o] || o.toLowerCase();
      a in r.attributes || s.push(i(n[o], a));
    }
    if (e.indices !== void 0 && !r.index) {
      const o = t.getDependency("accessor", e.indices).then(function(a) {
        r.setIndex(a);
      });
      s.push(o);
    }
    return Oi.workingColorSpace !== Be && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Oi.workingColorSpace}" not supported.`), ke(r, e), _f(r, e, t), Promise.all(s).then(function() {
      return e.targets !== void 0 ? Mf(r, e.targets, t) : r;
    });
  }
  function Lf(r) {
    return {
      data: new Float32Array(r.size * 16)
    };
  }
  function jf(r, e, t, n, s) {
    const i = n.getReferenceSpace();
    i == null || e == null || e.session.visibilityState === "visible-blurred" || e.session.visibilityState === "hidden" || Hf(e, i, t, r.data);
  }
  const qr = new q(), $r = new q();
  function Hf(r, e, t, n) {
    if (!r.fillPoses(t.values(), e, n)) return false;
    qr.fromArray(n, 0), qr.invert();
    for (let i = 0; i < n.length; i += 16) $r.fromArray(n, i), $r.premultiply(qr), $r.toArray(n, i);
    return true;
  }
  function Nf(r) {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = r.clone();
    return Ya(r, n, function(s, i) {
      e.set(i, s), t.set(s, i);
    }), n.traverse(function(s) {
      if (!s.isSkinnedMesh) return;
      const i = s, o = e.get(s), a = o.skeleton.bones;
      i.skeleton = o.skeleton.clone(), i.bindMatrix.copy(o.bindMatrix), i.skeleton.bones = a.map(function(l) {
        return t.get(l);
      }), i.bind(i.skeleton, i.bindMatrix);
    }), n;
  }
  function Ya(r, e, t) {
    t(r, e);
    for (let n = 0; n < r.children.length; n++) Ya(r.children[n], e.children[n], t);
  }
  const Df = "generic-hand";
  function Ff(r, e) {
    const t = (e == null ? void 0 : e.baseAssetPath) ?? cl, n = (e == null ? void 0 : e.defaultXRHandProfileId) ?? Df;
    return new URL(`${n}/${r}.glb`, t).href;
  }
  function zf({ scene: r }) {
    const e = Nf(r), t = e.getObjectByProperty("type", "SkinnedMesh");
    if (t == null) throw new Error("missing SkinnedMesh in loaded XRHand model");
    return t.frustumCulled = false, e;
  }
  function kf(r, e) {
    r.renderOrder = (e == null ? void 0 : e.renderOrder) ?? 0, r.traverse((t) => {
      t instanceof k && t.material instanceof xn && (t.material.colorWrite = (e == null ? void 0 : e.colorWrite) ?? true);
    });
  }
  function Xf(r, e, t, n, s) {
    return {
      id: r,
      isPrimary: s,
      type: "hand",
      inputSource: e,
      pose: Lf(e.hand),
      assetPath: Ff(e.handedness, t),
      events: n
    };
  }
  function Uf({ inputSource: r, pose: e }, t, n) {
    jf(e, t, r.hand, n, r.handedness);
  }
  const Gf = [
    "wrist",
    "thumb-metacarpal",
    "thumb-phalanx-proximal",
    "thumb-phalanx-distal",
    "thumb-tip",
    "index-finger-metacarpal",
    "index-finger-phalanx-proximal",
    "index-finger-phalanx-intermediate",
    "index-finger-phalanx-distal",
    "index-finger-tip",
    "middle-finger-metacarpal",
    "middle-finger-phalanx-proximal",
    "middle-finger-phalanx-intermediate",
    "middle-finger-phalanx-distal",
    "middle-finger-tip",
    "ring-finger-metacarpal",
    "ring-finger-phalanx-proximal",
    "ring-finger-phalanx-intermediate",
    "ring-finger-phalanx-distal",
    "ring-finger-tip",
    "pinky-finger-metacarpal",
    "pinky-finger-phalanx-proximal",
    "pinky-finger-phalanx-intermediate",
    "pinky-finger-phalanx-distal",
    "pinky-finger-tip"
  ];
  function Bf(r, e, t) {
    const n = new Float32Array(r.size * 16), s = Gf.map((i) => {
      const o = e.getObjectByName(i);
      if (o == null) throw new Error(`missing joint "${i}" in hand model`);
      return o.matrixAutoUpdate = false, o;
    });
    return (i) => {
      const o = typeof t == "function" ? t() : t;
      if (i == null || o == null) return;
      i.fillPoses(r.values(), o, n);
      const a = s.length;
      for (let l = 0; l < a; l++) s[l].matrix.fromArray(n, l * 16);
    };
  }
  function Wf(r) {
    return r != null && typeof r == "object" && "inputSource" in r;
  }
  function Vf(r, e) {
    const t = (n) => e.push(n);
    return r.addEventListener("selectstart", t), r.addEventListener("selectend", t), r.addEventListener("select", t), r.addEventListener("squeeze", t), r.addEventListener("squeezestart", t), r.addEventListener("squeezeend", t), () => {
      r.removeEventListener("selectstart", t), r.removeEventListener("selectend", t), r.removeEventListener("select", t), r.removeEventListener("squeeze", t), r.removeEventListener("squeezestart", t), r.removeEventListener("squeezeend", t);
    };
  }
  let Yf = 0;
  function qf(r, e) {
    const t = /* @__PURE__ */ new Map(), n = new Th(e), s = /* @__PURE__ */ new Map();
    return (i, o, a) => {
      var _a2;
      if (a === "remove-all") {
        for (const c of t.values()) c();
        return o;
      }
      const l = [
        ...o
      ];
      for (const { added: c, isPrimary: u, removed: f } of a) {
        if (f != null) for (const h of f) {
          const m = l.findIndex(({ inputSource: g, isPrimary: v }) => v === u && g === h);
          m !== -1 && (l.splice(m, 1), (_a2 = t.get(h)) == null ? void 0 : _a2(), t.delete(h));
        }
        if (c != null) for (const h of c) {
          const m = [];
          let g = Vf(i, m);
          const v = `${h.handedness}-${h.hand ? "hand" : "nohand"}-${h.targetRayMode}-${h.profiles.join(",")}`;
          let x;
          if ((x = s.get(v)) == null && s.set(v, x = `${Yf++}`), h.hand != null) l.push(Xf(x, h, e, m, u));
          else switch (h.targetRayMode) {
            case "gaze":
              l.push({
                id: x,
                isPrimary: u,
                type: "gaze",
                inputSource: h,
                events: m
              });
              break;
            case "screen":
              l.push({
                id: x,
                isPrimary: u,
                type: "screenInput",
                inputSource: h,
                events: m
              });
              break;
            case "transient-pointer":
              l.push({
                id: x,
                isPrimary: u,
                type: "transientPointer",
                inputSource: h,
                events: m
              });
              break;
            case "tracked-pointer":
              let S = false;
              const R = g;
              g = () => {
                R(), S = true;
              };
              const M = Rh(x, h, n, m, u);
              M instanceof Promise ? M.then((I) => !S && r(I)).catch(console.error) : l.push(M);
              break;
          }
          t.set(h, g);
        }
      }
      return l;
    };
  }
  function $f(r, e) {
    const t = (n, s) => {
      s != null && n.visibilityState === s.visibilityState || e(n.visibilityState === "visible");
    };
    return t(r.getState()), r.subscribe(t);
  }
  class Zf extends V {
    constructor() {
      super({
        transparent: true,
        toneMapped: false,
        depthWrite: false
      });
    }
    onBeforeCompile(e, t) {
      super.onBeforeCompile(e, t), e.vertexShader = `varying vec2 vLocalPosition;
` + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <color_vertex>", `#include <color_vertex>
        vLocalPosition = position.xy * 2.0;`), e.fragmentShader = `varying vec2 vLocalPosition;
` + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
          float value = max(0.0, 1.0 - sqrt(dot(vLocalPosition, vLocalPosition)));
          diffuseColor.a = diffuseColor.a * value * value;`);
    }
  }
  const Qf = new b(0, 0, 1), Ji = new N(), Zr = new b();
  function Kf(r, e, t, n, s) {
    var _a2;
    const i = n.getIntersection();
    if (i == null || !n.getEnabled() || i.object.isVoidObject === true || !qa(r)) {
      e.visible = false;
      return;
    }
    e.visible = true;
    const o = typeof s.color == "function" ? s.color(n) : s.color;
    Array.isArray(o) ? t.color.set(...o) : t.color.set(o ?? "white"), t.opacity = typeof s.opacity == "function" ? s.opacity(n) : s.opacity ?? 0.4, e.position.copy(i.pointOnFace), e.scale.setScalar(s.size ?? 0.1);
    const a = i.normal ?? ((_a2 = i.face) == null ? void 0 : _a2.normal);
    a != null && (Ji.setFromUnitVectors(Qf, a), i.object.getWorldQuaternion(e.quaternion), e.quaternion.multiply(Ji), Zr.set(0, 0, s.cursorOffset ?? 0.01), Zr.applyQuaternion(e.quaternion), e.position.add(Zr)), e.updateMatrix();
  }
  function qa({ visible: r, parent: e }) {
    return r ? e == null ? true : qa(e) : false;
  }
  class Jf extends V {
    constructor() {
      super({
        transparent: true,
        toneMapped: false
      });
    }
    onBeforeCompile(e, t) {
      super.onBeforeCompile(e, t), e.vertexShader = `varying float vFade;
` + e.vertexShader, e.vertexShader = e.vertexShader.replace("#include <color_vertex>", `#include <color_vertex>
            vFade = position.z + 0.5;`), e.fragmentShader = `varying float vFade;
` + e.fragmentShader, e.fragmentShader = e.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
              diffuseColor.a *= vFade;`);
    }
  }
  function ed(r, e, t, n) {
    const s = t.getIntersection();
    if (!t.getEnabled() || s == null) {
      r.visible = false;
      return;
    }
    r.visible = true;
    const i = typeof n.color == "function" ? n.color(t) : n.color;
    Array.isArray(i) ? e.color.set(...i) : e.color.set(i ?? "white"), e.opacity = typeof n.opacity == "function" ? n.opacity(t) : n.opacity ?? 0.4;
    const o = Math.min(n.maxLength ?? 1, s.distance);
    r.position.z = -o / 2;
    const a = n.size ?? 5e-3;
    r.scale.set(a, a, o), r.updateMatrix();
  }
  function td(r, e, t, n, s, i = {}) {
    const o = (f) => {
      f.inputSource === t && r.down(Object.assign(f, {
        button: i.button ?? 0
      }));
    }, a = (f) => {
      f.inputSource === t && r.up(Object.assign(f, {
        button: i.button ?? 0
      }));
    }, l = `${n}start`, c = `${n}end`, u = s.length;
    for (let f = 0; f < u; f++) {
      const h = s[f];
      switch (h.type) {
        case l:
          o(h);
          break;
        case c:
          a(h);
          break;
      }
    }
    return e.addEventListener(l, o), e.addEventListener(c, a), () => {
      e.removeEventListener(l, o), e.removeEventListener(c, a);
    };
  }
  function nd(r) {
    var _a2;
    return r.getButtonsDown().size > 0 ? 0.6 : $a(((_a2 = r.getIntersection()) == null ? void 0 : _a2.distance) ?? 1 / 0, 0.07, 0, 0.2, 0.4);
  }
  function mr(r) {
    return r.getButtonsDown().size > 0 ? 0.6 : 0.4;
  }
  function rd(r) {
    var _a2;
    return $a(((_a2 = r.getIntersection()) == null ? void 0 : _a2.distance) ?? 1 / 0, 0.1, 0.03, 0.2, 0.6);
  }
  function $a(r, e, t, n, s) {
    return n + Math.max(0, Math.min(1, (r - e) / (t - e))) * (s - n);
  }
  function sd(r, e) {
    return (t, n) => {
      if (r === e) return t.identity(), true;
      const s = typeof e == "function" ? e() : e;
      if (s == null) return false;
      const i = n == null ? void 0 : n.getPose(r, s);
      return i == null ? false : (t.fromArray(i.transform.matrix), true);
    };
  }
  function Rr(r, e, t, n) {
    n == null ? void 0 : n.copy(r.matrix);
    const s = Za(r.parent, n);
    return s ?? (n != null && id(r, e, n), t);
  }
  function id(r, e, t) {
    if (r.updateWorldMatrix(true, false), e == null) {
      t.copy(r.matrixWorld);
      return;
    }
    e.updateWorldMatrix(true, false), t.copy(e.matrixWorld).invert().multiply(r.matrixWorld);
  }
  function Za(r, e) {
    if (r != null) return r.xrSpace != null ? r.xrSpace : (e == null ? void 0 : e.premultiply(r.matrix), Za(r.parent, e));
  }
  class od {
    constructor(e) {
      __publicField(this, "nativeEvent");
      __publicField(this, "NONE", 0);
      __publicField(this, "CAPTURING_PHASE", 1);
      __publicField(this, "AT_TARGET", 2);
      __publicField(this, "BUBBLING_PHASE", 3);
      __publicField(this, "relatedTarget", null);
      this.nativeEvent = e;
    }
    get altKey() {
      return this.getFromNative("altKey", false);
    }
    get button() {
      return this.getFromNative("button", 0);
    }
    get buttons() {
      return this.getFromNative("buttons", 0);
    }
    get clientX() {
      return this.getFromNative("clientX", 0);
    }
    get clientY() {
      return this.getFromNative("clientY", 0);
    }
    get ctrlKey() {
      return this.getFromNative("ctrlKey", false);
    }
    get layerX() {
      return this.getFromNative("layerX", 0);
    }
    get layerY() {
      return this.getFromNative("layerY", 0);
    }
    get metaKey() {
      return this.getFromNative("metaKey", false);
    }
    get movementX() {
      return this.getFromNative("movementX", 0);
    }
    get movementY() {
      return this.getFromNative("movementY", 0);
    }
    get offsetX() {
      return this.getFromNative("offsetX", 0);
    }
    get offsetY() {
      return this.getFromNative("offsetY", 0);
    }
    get pageX() {
      return this.getFromNative("pageX", 0);
    }
    get pageY() {
      return this.getFromNative("pageY", 0);
    }
    get screenX() {
      return this.getFromNative("screenX", 0);
    }
    get screenY() {
      return this.getFromNative("screenY", 0);
    }
    get shiftKey() {
      return this.getFromNative("shiftKey", false);
    }
    get x() {
      return this.getFromNative("x", 0);
    }
    get y() {
      return this.getFromNative("y", 0);
    }
    get detail() {
      return this.getFromNative("detail", 0);
    }
    get view() {
      return this.getFromNative("view", null);
    }
    get which() {
      return this.getFromNative("which", 0);
    }
    get cancelBubble() {
      return this.getFromNative("cancelBubble", false);
    }
    get composed() {
      return this.getFromNative("composed", false);
    }
    get eventPhase() {
      return this.getFromNative("eventPhase", 0);
    }
    get isTrusted() {
      return this.getFromNative("isTrusted", false);
    }
    get returnValue() {
      return this.getFromNative("returnValue", false);
    }
    get timeStamp() {
      return this.getFromNative("timeStamp", 0);
    }
    get cancelable() {
      return this.getFromNative("cancelable", false);
    }
    get defaultPrevented() {
      return this.getFromNative("defaultPrevented", false);
    }
    getFromNative(e, t) {
      return e in this.nativeEvent ? this.nativeEvent[e] : t;
    }
  }
  const Qr = new b();
  class ae extends od {
    constructor(e, t, n, s, i, o, a = i.object, l = a, c = {
      stopped: !t,
      stoppedImmediate: false
    }) {
      super(n);
      __publicField(this, "type");
      __publicField(this, "bubbles");
      __publicField(this, "internalPointer");
      __publicField(this, "intersection");
      __publicField(this, "camera");
      __publicField(this, "currentObject");
      __publicField(this, "object");
      __publicField(this, "propagationState");
      __publicField(this, "_pointer");
      __publicField(this, "_ray");
      __publicField(this, "_intersections", []);
      __publicField(this, "_unprojectedPoint");
      this.type = e, this.bubbles = t, this.internalPointer = s, this.intersection = i, this.camera = o, this.currentObject = a, this.object = l, this.propagationState = c;
    }
    get pointerId() {
      return this.internalPointer.id;
    }
    get pointerType() {
      return this.internalPointer.type;
    }
    get pointerState() {
      return this.internalPointer.state;
    }
    get distance() {
      return this.intersection.distance;
    }
    get distanceToRay() {
      return this.intersection.distanceToRay;
    }
    get point() {
      return this.intersection.point;
    }
    get index() {
      return this.intersection.index;
    }
    get face() {
      return this.intersection.face;
    }
    get faceIndex() {
      return this.intersection.faceIndex;
    }
    get uv() {
      return this.intersection.uv;
    }
    get uv1() {
      return this.intersection.uv1;
    }
    get normal() {
      return this.intersection.normal;
    }
    get instanceId() {
      return this.intersection.instanceId;
    }
    get pointOnLine() {
      return this.intersection.pointOnLine;
    }
    get batchId() {
      return this.intersection.batchId;
    }
    get pointerPosition() {
      return this.intersection.pointerPosition;
    }
    get pointerQuaternion() {
      return this.intersection.pointerQuaternion;
    }
    get pointOnFace() {
      return this.intersection.pointOnFace;
    }
    get localPoint() {
      return this.intersection.localPoint;
    }
    get details() {
      return this.intersection.details;
    }
    get target() {
      return this.object;
    }
    get currentTarget() {
      return this.currentObject;
    }
    get eventObject() {
      return this.currentObject;
    }
    get srcElement() {
      return this.currentObject;
    }
    get pointer() {
      return this._pointer == null && (Qr.copy(this.intersection.point).project(this.camera), this._pointer = new z(Qr.x, Qr.y)), this._pointer;
    }
    get ray() {
      if (this._ray != null) return this._ray;
      switch (this.intersection.details.type) {
        case "screen-ray":
        case "ray":
        case "sphere":
          return this._ray = new fr(this.intersection.pointerPosition, new b(0, 0, -1).applyQuaternion(this.intersection.pointerQuaternion));
        case "lines":
          return this._ray = new fr(this.intersection.details.line.start, this.intersection.details.line.end.clone().sub(this.intersection.details.line.start).normalize());
      }
    }
    get intersections() {
      return this._intersections == null && (this._intersections = [
        {
          ...this.intersection,
          eventObject: this.currentObject
        }
      ]), this._intersections;
    }
    get unprojectedPoint() {
      if (this._unprojectedPoint == null) {
        const e = this.pointer;
        this._unprojectedPoint = new b(e.x, e.y, 0).unproject(this.camera);
      }
      return this._unprojectedPoint;
    }
    get stopped() {
      return this.propagationState.stoppedImmediate || this.propagationState.stopped;
    }
    get stoppedImmediate() {
      return this.propagationState.stoppedImmediate;
    }
    get delta() {
      throw new Error("not supported");
    }
    stopPropagation() {
      this.propagationState.stopped = true;
    }
    stopImmediatePropagation() {
      this.propagationState.stoppedImmediate = true;
    }
    retarget(e) {
      return new ae(this.type, this.bubbles, this.nativeEvent, this.internalPointer, this.intersection, this.camera, e, this.target, this.propagationState);
    }
  }
  class gr extends ae {
    get deltaX() {
      return this.nativeEvent.deltaX;
    }
    get deltaY() {
      return this.nativeEvent.deltaY;
    }
    get deltaZ() {
      return this.nativeEvent.deltaZ;
    }
    constructor(e, t, n, s, i, o) {
      super("wheel", true, e, t, n, s, i, o);
    }
    retarget(e) {
      return new gr(this.nativeEvent, this.internalPointer, this.intersection, this.camera, e, this.target);
    }
  }
  function fe(r) {
    Qa(r, r.currentObject);
  }
  function Qa(r, e) {
    if (e == null) return;
    const t = ld(e, r.type);
    if (t != null && t.length > 0) {
      const n = r.retarget(e), s = t.length;
      for (let i = 0; i < s && !n.stoppedImmediate; i++) t[i](n);
    }
    r.stopped || Qa(r, e.parent);
  }
  const Ka = {
    click: "onClick",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
    pointercancel: "onPointerCancel",
    pointerdown: "onPointerDown",
    pointerenter: "onPointerEnter",
    pointerleave: "onPointerLeave",
    pointermove: "onPointerMove",
    pointerout: "onPointerOut",
    pointerover: "onPointerOver",
    pointerup: "onPointerUp",
    wheel: "onWheel"
  }, ad = Object.keys(Ka);
  function ld(r, e) {
    var _a2;
    if (r._listeners != null && e in r._listeners) return r._listeners[e];
    let t;
    if (r.isVoidObject && e === "click" && ((_a2 = r.parent) == null ? void 0 : _a2.__r3f) != null && (t = r.parent.__r3f.root.getState().onPointerMissed), r.__r3f != null && (t = r.__r3f.handlers[Ka[e]]), t != null) return [
      t
    ];
  }
  const cd = 1e10, ud = new Vs(cd), eo = /* @__PURE__ */ new Map();
  function Mr(r) {
    let e = eo.get(r);
    return e == null && (e = new k(ud), e.isVoidObject = true, e.parent = r, e.pointerEventsOrder = -1 / 0, eo.set(r, e)), e;
  }
  function Er(r, e, t) {
    var _a2;
    const n = e.normal ?? ((_a2 = e.face) == null ? void 0 : _a2.normal);
    return n == null ? false : (r.setFromNormalAndCoplanarPoint(n, e.localPoint), r.applyMatrix4(t), true);
  }
  function fd(r, e, t) {
    if (e === "none" || e === "listener" && !r) return false;
    if (t === "all") return true;
    if (typeof t == "function") return ({ id: i, type: o, state: a }) => t(i, o, a);
    let n, s;
    return "deny" in t ? (s = true, n = t.deny) : (s = false, n = t.allow), Array.isArray(n) ? (i) => to(n.includes(i.type), s) : (i) => to(n === i.type, s);
  }
  function to(r, e) {
    return e ? !r : r;
  }
  function Zs(r, e, t, n = false, s, i, o) {
    const a = n || dd(r, e), l = e.pointerEvents ?? s, c = l ?? e.defaultPointerEvents ?? "listener", u = e.pointerEventsType ?? i ?? "all", f = e.pointerEventsOrder ?? o ?? 0, h = fd(a, c, u), m = t.length;
    if (m === 1) (h === true || typeof h == "function" && h(t[0])) && Kr(t[0], e, c, u, f);
    else if (h === true) for (let x = 0; x < m; x++) Kr(t[x], e, c, u, f);
    else if (typeof h == "function") for (let x = 0; x < m; x++) {
      const S = t[x];
      h(S) && Kr(S, e, c, u, f);
    }
    if (e.children.length === 0 || e.intersectChildren === false) return;
    const g = e.interactableDescendants ?? e.children, v = g.length;
    for (let x = 0; x < v; x++) Zs(r, g[x], t, a, l, u, f);
  }
  function dd(r, e) {
    var _a2;
    if (e.ancestorsHaveListeners || r === "pointer" && e.ancestorsHavePointerListeners || r === "wheel" && e.ancestorsHaveWheelListeners || e.__r3f != null && ((_a2 = e.__r3f) == null ? void 0 : _a2.eventCount) > 0 && (r === "wheel" && e.__r3f.handlers.onWheel != null || r === "pointer" && Object.keys(e.__r3f.handlers).some((s) => s != "onWheel"))) return true;
    if (e._listeners == null) return false;
    if (r === "wheel") {
      const s = e._listeners.wheel;
      return s != null && s.length > 0;
    }
    const t = Object.entries(e._listeners), n = t.length;
    for (let s = 0; s < n; s++) {
      const i = t[s];
      if (i[0] !== "wheel" && ad.includes(i[0]) && i[1] != null && i[1].length > 0) return true;
    }
    return false;
  }
  function Kr({ intersector: r, options: e }, t, n, s, i) {
    var _a2;
    ((_a2 = e.filter) == null ? void 0 : _a2.call(e, t, n, s, i)) !== false && r.executeIntersection(t, i);
  }
  function Ar(r, e, { customSort: t = hd } = {}, n) {
    let s, i, o;
    const a = r.length;
    for (let l = 0; l < a; l++) {
      const c = r[l];
      if ((n == null ? void 0 : n(c)) === false) continue;
      const u = e == null ? void 0 : e[l];
      (s == null || t(c, u, s, i) < 0) && (o = l, s = c, i = u);
    }
    return o;
  }
  function hd(r, e = 0, t, n = 0) {
    return e != n ? n - e : r.distance - t.distance;
  }
  const no = 1e7;
  function Qs(r, e, t, n, s, i = 0) {
    const o = e.direction.clone().multiplyScalar(no), a = no;
    return {
      distance: a + i,
      object: Mr(r),
      point: o,
      normal: e.origin.clone().sub(o).normalize(),
      details: t(o, a),
      pointerPosition: n,
      pointerQuaternion: s,
      pointOnFace: o,
      localPoint: o
    };
  }
  function yr(r, e, t) {
    for (; t > 0; ) r.push(e), --t;
  }
  const Jr = Symbol("buttonsDownTime"), pd = Symbol("buttonsClickTime");
  globalThis.pointerEventspointerMap ?? (globalThis.pointerEventspointerMap = /* @__PURE__ */ new Map());
  Pe.prototype.setPointerCapture = function(r) {
    var _a2;
    (_a2 = Ks(r)) == null ? void 0 : _a2.setCapture(this);
  };
  Pe.prototype.releasePointerCapture = function(r) {
    const e = Ks(r);
    e == null || !e.hasCaptured(this) || e.setCapture(void 0);
  };
  Pe.prototype.hasPointerCapture = function(r) {
    var _a2;
    return ((_a2 = Ks(r)) == null ? void 0 : _a2.hasCaptured(this)) ?? false;
  };
  function Ks(r) {
    var _a2;
    return (_a2 = globalThis.pointerEventspointerMap) == null ? void 0 : _a2.get(r);
  }
  class Vt {
    constructor(e, t, n, s, i, o, a, l, c = {}) {
      __publicField(this, "id");
      __publicField(this, "type");
      __publicField(this, "state");
      __publicField(this, "intersector");
      __publicField(this, "getCamera");
      __publicField(this, "onMoveCommited");
      __publicField(this, "parentSetPointerCapture");
      __publicField(this, "parentReleasePointerCapture");
      __publicField(this, "options");
      __publicField(this, "prevIntersection");
      __publicField(this, "intersection");
      __publicField(this, "prevEnabled", true);
      __publicField(this, "enabled", true);
      __publicField(this, "wheelIntersection");
      __publicField(this, "pointerEntered", []);
      __publicField(this, "pointerEnteredHelper", []);
      __publicField(this, "pointerCapture");
      __publicField(this, "buttonsDownTime", /* @__PURE__ */ new Map());
      __publicField(this, "buttonsDown", /* @__PURE__ */ new Set());
      __publicField(this, "wasMoved", false);
      __publicField(this, "onFirstMove", []);
      var _a2;
      this.id = e, this.type = t, this.state = n, this.intersector = s, this.getCamera = i, this.onMoveCommited = o, this.parentSetPointerCapture = a, this.parentReleasePointerCapture = l, this.options = c, (_a2 = globalThis.pointerEventspointerMap) == null ? void 0 : _a2.set(e, this);
    }
    getPointerCapture() {
      return this.pointerCapture;
    }
    hasCaptured(e) {
      var _a2;
      return ((_a2 = this.pointerCapture) == null ? void 0 : _a2.object) === e;
    }
    setCapture(e) {
      var _a2, _b, _c2;
      ((_a2 = this.pointerCapture) == null ? void 0 : _a2.object) !== e && (this.pointerCapture != null && ((_b = this.parentReleasePointerCapture) == null ? void 0 : _b.call(this), this.pointerCapture = void 0), e != null && this.intersection != null && (this.pointerCapture = {
        object: e,
        intersection: this.intersection
      }, (_c2 = this.parentSetPointerCapture) == null ? void 0 : _c2.call(this)));
    }
    getButtonsDown() {
      return this.buttonsDown;
    }
    getIntersection() {
      return this.intersection;
    }
    getEnabled() {
      return this.enabled;
    }
    setEnabled(e, t, n = true) {
      var _a2;
      this.enabled !== e && (!e && this.pointerCapture != null && ((_a2 = this.parentReleasePointerCapture) == null ? void 0 : _a2.call(this), this.pointerCapture = void 0), this.enabled = e, n && this.commit(t, false));
    }
    computeIntersection(e, t, n) {
      return this.pointerCapture != null ? this.intersector.intersectPointerCapture(this.pointerCapture, n) : (this.intersector.startIntersection(n), Zs(e, t, [
        this
      ]), this.intersector.finalizeIntersection(t));
    }
    setIntersection(e) {
      this.intersection = e;
    }
    commit(e, t) {
      var _a2;
      const n = this.getCamera(), s = this.prevEnabled ? this.prevIntersection : void 0, i = this.enabled ? this.intersection : void 0;
      s != null && s.object != (i == null ? void 0 : i.object) && fe(new ae("pointerout", true, e, this, s, n));
      const o = this.pointerEntered;
      this.pointerEntered = [], this.pointerEnteredHelper.length = 0, Ja(i == null ? void 0 : i.object, this.pointerEntered, o, this.pointerEnteredHelper);
      const a = o.length;
      for (let l = 0; l < a; l++) {
        const c = o[l];
        fe(new ae("pointerleave", false, e, this, s, n, c));
      }
      i != null && (s == null ? void 0 : s.object) != i.object && fe(new ae("pointerover", true, e, this, i, n));
      for (let l = this.pointerEnteredHelper.length - 1; l >= 0; l--) {
        const c = this.pointerEnteredHelper[l];
        fe(new ae("pointerenter", false, e, this, i, n, c));
      }
      if (t && i != null && fe(new ae("pointermove", true, e, this, i, n)), this.prevIntersection = this.intersection, this.prevEnabled = this.enabled, !this.wasMoved && this.intersector.isReady()) {
        this.wasMoved = true;
        const l = this.onFirstMove.length;
        for (let c = 0; c < l; c++) this.onFirstMove[c](n);
        this.onFirstMove.length = 0;
      }
      (_a2 = this.onMoveCommited) == null ? void 0 : _a2.call(this, this);
    }
    move(e, t) {
      this.intersection = this.computeIntersection("pointer", e, t), this.commit(t, true);
    }
    emitMove(e) {
      this.intersection != null && fe(new ae("pointermove", true, e, this, this.intersection, this.getCamera()));
    }
    down(e) {
      if (this.buttonsDown.add(e.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.down.bind(this, e));
        return;
      }
      if (this.intersection == null) return;
      fe(new ae("pointerdown", true, e, this, this.intersection, this.getCamera()));
      const { object: t } = this.intersection;
      t[Jr] ?? (t[Jr] = /* @__PURE__ */ new Map()), t[Jr].set(e.button, e.timeStamp), this.buttonsDownTime.set(e.button, e.timeStamp);
    }
    up(e) {
      if (this.buttonsDown.delete(e.button), !this.enabled) return;
      if (!this.wasMoved) {
        this.onFirstMove.push(this.up.bind(this, e));
        return;
      }
      if (this.intersection == null) return;
      const { clickThesholdMs: t, contextMenuButton: n = 2, dblClickThresholdMs: s = 500, clickThresholdMs: i = t ?? 300 } = this.options;
      this.pointerCapture = void 0;
      const o = md(this.buttonsDownTime, this.intersection.object[Jr], e.button, e.timeStamp, i), a = this.getCamera();
      if (o && e.button === n && fe(new ae("contextmenu", true, e, this, this.intersection, a)), fe(new ae("pointerup", true, e, this, this.intersection, a)), !o || e.button === n) return;
      fe(new ae("click", true, e, this, this.intersection, a));
      const { object: l } = this.intersection, c = l[pd] ?? (l[pd] = /* @__PURE__ */ new Map()), u = c.get(e.button);
      if (u == null || e.timeStamp - u > s) {
        c.set(e.button, e.timeStamp);
        return;
      }
      fe(new ae("dblclick", true, e, this, this.intersection, a)), c.delete(e.button);
    }
    cancel(e) {
      if (this.enabled) {
        if (!this.wasMoved) {
          this.onFirstMove.push(this.cancel.bind(this, e));
          return;
        }
        this.intersection != null && fe(new ae("pointercancel", true, e, this, this.intersection, this.getCamera()));
      }
    }
    wheel(e, t, n = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && n) {
        this.onFirstMove.push(this.wheel.bind(this, e, t, n));
        return;
      }
      n || (this.wheelIntersection = this.computeIntersection("wheel", e, t));
      const s = n ? this.intersection : this.wheelIntersection;
      s != null && fe(new gr(t, this, s, this.getCamera()));
    }
    emitWheel(e, t = false) {
      if (!this.enabled) return;
      if (!this.wasMoved && t) {
        this.onFirstMove.push(this.emitWheel.bind(this, e, t));
        return;
      }
      const n = t ? this.intersection : this.wheelIntersection;
      n != null && fe(new gr(e, this, n, this.getCamera()));
    }
    exit(e) {
      var _a2;
      this.wasMoved && (this.pointerCapture != null && ((_a2 = this.parentReleasePointerCapture) == null ? void 0 : _a2.call(this), this.pointerCapture = void 0), this.intersection = void 0, this.commit(e, false)), this.onFirstMove.length = 0, this.wasMoved = false;
    }
  }
  function Ja(r, e, t, n) {
    if (r == null) return;
    const s = t.indexOf(r);
    s != -1 ? t.splice(s, 1) : n.push(r), e.push(r), Ja(r.parent, e, t, n);
  }
  function md(r, e, t, n, s) {
    if (e == null) return false;
    const i = e.get(t);
    return !(i == null || n - i > s || i != r.get(t));
  }
  function Ir(r) {
    return r.transformReady === false ? false : r.parent == null ? (r.matrixWorld.copy(r.matrix), true) : Ir(r.parent) ? (r.matrixWorld.multiplyMatrices(r.parent.matrixWorld, r.matrix), true) : false;
  }
  const en = new Ca(), es = new Ca(), ro = new z(), so = new z(), io = new z(), ts = new b(), gd = new q(), Hn = new b();
  function Mn(r, e, t) {
    Hn.copy(e).applyMatrix4(gd.copy(t.matrixWorld).invert());
    const n = t.geometry.attributes.uv;
    if (n == null || !(n instanceof de)) return false;
    let s;
    return yd(t, (i, o, a) => {
      t.getVertexPosition(i, en.a), t.getVertexPosition(o, en.b), t.getVertexPosition(a, en.c);
      const l = en.closestPointToPoint(Hn, ts).distanceTo(Hn);
      s != null && l >= s || (s = l, es.copy(en), ro.fromBufferAttribute(n, i), so.fromBufferAttribute(n, o), io.fromBufferAttribute(n, a));
    }), s == null ? false : (es.closestPointToPoint(Hn, ts), es.getInterpolation(ts, ro, so, io, r), true);
  }
  function yd(r, e) {
    const t = r.geometry.drawRange;
    if (r.geometry.index != null) {
      const o = r.geometry.index, a = Math.max(0, t.start), l = Math.min(o.count, t.start + t.count);
      for (let c = a; c < l; c += 3) e(o.getX(c), o.getX(c + 1), o.getX(c + 2));
      return;
    }
    const n = r.geometry.attributes.position;
    if (n == null) return;
    const s = Math.max(0, t.start), i = Math.min(n.count, t.start + t.count);
    for (let o = s; o < i; o += 3) e(o, o + 1, o + 2);
  }
  const xd = new q(), ns = new Os(), bd = new b(), oo = new rt(), vd = new fr(), ao = new z(), lo = [
    new b(0, 0, 0),
    new b(0, 0, 1)
  ];
  class wd {
    constructor(e, t) {
      __publicField(this, "space");
      __publicField(this, "options");
      __publicField(this, "raycasters", []);
      __publicField(this, "fromMatrixWorld", new q());
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      __publicField(this, "raycasterIndices", []);
      this.space = e, this.options = t;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      const e = this.space.current;
      return e == null ? this.ready = false : (this.ready = Ir(e), this.ready ? (this.fromMatrixWorld.copy(e.matrixWorld), true) : false);
    }
    intersectPointerCapture({ intersection: e, object: t }) {
      const n = e.details;
      if (n.type != "lines") throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a lines intersector`);
      if (!this.prepareTransformation()) return e;
      const s = this.options.linePoints ?? lo;
      ns.set(s[n.lineIndex], s[n.lineIndex + 1]).applyMatrix4(this.fromMatrixWorld);
      const i = ns.at(n.distanceOnLine / ns.distance(), new b());
      e.object.updateWorldMatrix(true, false), Er(oo, e, e.object.matrixWorld);
      const o = vd.intersectPlane(oo, new b()) ?? i, a = new b(), l = new N();
      this.fromMatrixWorld.decompose(a, l, bd);
      let c = e.uv;
      return e.object instanceof k && Mn(ao, i, e.object) && (c = ao.clone()), {
        ...e,
        object: t,
        uv: c,
        pointOnFace: o,
        point: i,
        pointerPosition: a,
        pointerQuaternion: l
      };
    }
    startIntersection() {
      if (!this.prepareTransformation()) return;
      const e = this.options.linePoints ?? lo, t = e.length - 1;
      for (let n = 0; n < t; n++) {
        const s = e[n], i = e[n + 1], o = this.raycasters[n] ?? (this.raycasters[n] = new Tr());
        o.ray.origin.copy(s).applyMatrix4(this.fromMatrixWorld), o.ray.direction.copy(i).applyMatrix4(this.fromMatrixWorld), o.ray.direction.sub(o.ray.origin);
        const a = o.ray.direction.length();
        o.ray.direction.divideScalar(a), o.far = a;
      }
      this.raycasters.length = t;
    }
    executeIntersection(e, t) {
      if (!this.isReady()) return;
      const n = this.intersects.length, s = this.raycasters.length;
      for (let i = 0; i < s; i++) {
        const o = this.raycasters[i], a = this.intersects.length;
        e.raycast(o, this.intersects), yr(this.raycasterIndices, i, this.intersects.length - a);
      }
      yr(this.pointerEventsOrders, t, this.intersects.length - n);
    }
    finalizeIntersection(e) {
      const t = new b().setFromMatrixPosition(this.fromMatrixWorld), n = new N().setFromRotationMatrix(this.fromMatrixWorld), s = Ar(this.intersects, this.pointerEventsOrders, this.options), i = s == null ? void 0 : this.intersects[s], o = s == null ? void 0 : this.raycasterIndices[s];
      if (this.intersects.length = 0, this.raycasterIndices.length = 0, this.pointerEventsOrders.length = 0, i == null || o == null) {
        const c = this.raycasters.length - 1, u = this.raycasters.reduce((h, m, g) => g === c ? h : h + m.far, 0), f = this.raycasters[c];
        return Qs(e, f.ray, (h, m) => ({
          line: new Os(f.ray.origin.clone(), h),
          lineIndex: this.raycasters.length - 1,
          distanceOnLine: m,
          type: "lines"
        }), t, n, u);
      }
      let a = i.distance;
      for (let c = 0; c < o; c++) a += this.raycasters[c].far;
      i.object.updateWorldMatrix(true, false);
      const l = this.raycasters[o];
      return Object.assign(i, {
        details: {
          lineIndex: o,
          distanceOnLine: i.distance,
          type: "lines",
          line: new Os(l.ray.origin.clone(), l.ray.direction.clone().multiplyScalar(l.far).add(l.ray.origin))
        },
        distance: a,
        pointerPosition: t,
        pointerQuaternion: n,
        pointOnFace: i.point,
        localPoint: i.point.clone().applyMatrix4(xd.copy(i.object.matrixWorld).invert())
      });
    }
  }
  const Ns = new q(), Ds = new b(), Sd = new b(0, 0, -1), co = new rt(), xr = new z();
  class Pd {
    constructor(e, t) {
      __publicField(this, "space");
      __publicField(this, "options");
      __publicField(this, "raycaster", new Tr());
      __publicField(this, "raycasterQuaternion", new N());
      __publicField(this, "worldScale", 0);
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      this.space = e, this.options = t;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      var _a2;
      const e = this.space.current;
      return e == null ? this.ready = false : (this.ready = Ir(e), this.ready ? (e.matrixWorld.decompose(this.raycaster.ray.origin, this.raycasterQuaternion, Ds), this.worldScale = Ds.x, this.raycaster.ray.direction.copy(((_a2 = this.options) == null ? void 0 : _a2.direction) ?? Sd).applyQuaternion(this.raycasterQuaternion), true) : false);
    }
    intersectPointerCapture({ intersection: e, object: t }) {
      if (e.details.type != "ray") throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a ray intersector`);
      if (!this.prepareTransformation()) return e;
      e.object.updateWorldMatrix(true, false), Er(co, e, e.object.matrixWorld);
      const { ray: n } = this.raycaster, s = n.intersectPlane(co, new b()) ?? e.point, i = n.direction.clone().multiplyScalar(e.pointerPosition.distanceTo(e.point)).add(n.origin);
      let o = e.uv;
      return e.object instanceof k && Mn(xr, i, e.object) && (o = xr.clone()), {
        ...e,
        uv: o,
        object: t,
        pointOnFace: s,
        point: i,
        pointerPosition: n.origin.clone(),
        pointerQuaternion: this.raycasterQuaternion.clone()
      };
    }
    startIntersection() {
      this.prepareTransformation();
    }
    executeIntersection(e, t) {
      if (!this.isReady()) return;
      const n = this.intersects.length;
      e.raycast(this.raycaster, this.intersects), yr(this.pointerEventsOrders, t, this.intersects.length - n);
    }
    finalizeIntersection(e) {
      const t = this.raycaster.ray.origin.clone(), n = this.raycasterQuaternion.clone();
      let s;
      if (this.options.minDistance != null) {
        const a = this.options.minDistance / this.worldScale;
        s = (l) => l.distance >= a;
      }
      const i = Ar(this.intersects, this.pointerEventsOrders, this.options, s), o = i == null ? void 0 : this.intersects[i];
      return this.intersects.length = 0, this.pointerEventsOrders.length = 0, o == null ? Qs(e, this.raycaster.ray, () => ({
        type: "ray"
      }), t, n) : (o.object.updateWorldMatrix(true, false), Object.assign(o, {
        details: {
          type: "ray"
        },
        pointerPosition: t,
        pointerQuaternion: n,
        pointOnFace: o.point,
        localPoint: o.point.clone().applyMatrix4(Ns.copy(o.object.matrixWorld).invert())
      }));
    }
  }
  const Td = new b();
  class Rd {
    constructor(e, t) {
      __publicField(this, "prepareTransformation");
      __publicField(this, "options");
      __publicField(this, "raycaster", new Tr());
      __publicField(this, "cameraQuaternion", new N());
      __publicField(this, "fromPosition", new b());
      __publicField(this, "fromQuaternion", new N());
      __publicField(this, "coords", new z());
      __publicField(this, "viewPlane", new rt());
      __publicField(this, "intersects", []);
      __publicField(this, "pointerEventsOrders", []);
      this.prepareTransformation = e, this.options = t;
    }
    isReady() {
      return true;
    }
    intersectPointerCapture({ intersection: e, object: t }, n) {
      const s = e.details;
      if (s.type != "screen-ray") throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a camera ray intersector`);
      if (!this.startIntersection(n)) return e;
      this.viewPlane.constant -= s.distanceViewPlane;
      const i = this.raycaster.ray.intersectPlane(this.viewPlane, new b());
      if (i == null) return e;
      e.object.updateWorldMatrix(true, false), Er(this.viewPlane, e, e.object.matrixWorld);
      let o = e.uv;
      return e.object instanceof k && Mn(xr, i, e.object) && (o = xr.clone()), {
        ...e,
        details: {
          ...s,
          direction: this.raycaster.ray.direction.clone(),
          screenPoint: this.coords.clone()
        },
        uv: o,
        object: t,
        point: i,
        pointOnFace: i,
        pointerPosition: this.raycaster.ray.origin.clone(),
        pointerQuaternion: this.cameraQuaternion.clone()
      };
    }
    startIntersection(e) {
      const t = this.prepareTransformation(e, this.coords);
      return t == null ? false : (t.updateWorldMatrix(true, false), t.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, Ds), this.raycaster.setFromCamera(this.coords, t), this.viewPlane.setFromNormalAndCoplanarPoint(t.getWorldDirection(Td), this.raycaster.ray.origin), true);
    }
    executeIntersection(e, t) {
      const n = this.intersects.length;
      e.raycast(this.raycaster, this.intersects), yr(this.pointerEventsOrders, t, this.intersects.length - n);
    }
    finalizeIntersection(e) {
      const t = this.fromPosition.clone(), n = this.cameraQuaternion.clone(), s = this.raycaster.ray.direction.clone(), i = Ar(this.intersects, this.pointerEventsOrders, this.options), o = i == null ? void 0 : this.intersects[i];
      return this.intersects.length = 0, this.pointerEventsOrders.length = 0, o == null ? Qs(e, this.raycaster.ray, (a, l) => ({
        type: "screen-ray",
        distanceViewPlane: l,
        screenPoint: this.coords.clone(),
        direction: s
      }), t, n) : (o.object.updateWorldMatrix(true, false), Ns.copy(o.object.matrixWorld).invert(), Object.assign(o, {
        details: {
          type: "screen-ray",
          distanceViewPlane: this.viewPlane.distanceToPoint(o.point),
          screenPoint: this.coords.clone(),
          direction: s
        },
        pointOnFace: o.point,
        pointerPosition: t,
        pointerQuaternion: n,
        localPoint: o.point.clone().applyMatrix4(Ns)
      }));
    }
  }
  const Md = new b(), br = new z();
  class el {
    constructor(e, t, n) {
      __publicField(this, "space");
      __publicField(this, "getSphereRadius");
      __publicField(this, "options");
      __publicField(this, "fromPosition", new b());
      __publicField(this, "fromQuaternion", new N());
      __publicField(this, "collisionSphere", new Ws());
      __publicField(this, "ready");
      __publicField(this, "intersects", []);
      this.space = e, this.getSphereRadius = t, this.options = n;
    }
    isReady() {
      return this.ready ?? this.prepareTransformation();
    }
    prepareTransformation() {
      const e = this.space.current;
      return e == null ? this.ready = false : (this.ready = Ir(e), this.ready ? (e.matrixWorld.decompose(this.fromPosition, this.fromQuaternion, Md), true) : false);
    }
    intersectPointerCapture({ intersection: e, object: t }) {
      if (e.details.type != "sphere") throw new Error(`unable to process a pointer capture of type "${e.details.type}" with a sphere intersector`);
      if (!this.prepareTransformation()) return e;
      uo.copy(e.point).sub(e.pointerPosition), fo.copy(e.pointerQuaternion).invert().multiply(this.fromQuaternion);
      const n = uo.clone().applyQuaternion(fo).add(this.fromPosition);
      e.object.updateWorldMatrix(true, false), Er(ho, e, e.object.matrixWorld);
      const s = ho.projectPoint(this.fromPosition, new b());
      let i = e.uv;
      return e.object instanceof k && Mn(br, n, e.object) && (i = br.clone()), {
        details: {
          type: "sphere"
        },
        uv: i,
        distance: n.distanceTo(s),
        pointerPosition: this.fromPosition.clone(),
        pointerQuaternion: this.fromQuaternion.clone(),
        object: t,
        point: n,
        pointOnFace: s,
        face: e.face,
        localPoint: e.localPoint
      };
    }
    startIntersection() {
      this.prepareTransformation() && (this.collisionSphere.center.copy(this.fromPosition), this.collisionSphere.radius = this.getSphereRadius());
    }
    executeIntersection(e) {
      this.isReady() && Ed(this.collisionSphere, e, this.intersects);
    }
    finalizeIntersection(e) {
      const t = this.fromPosition.clone(), n = this.fromQuaternion.clone(), s = Ar(this.intersects, void 0, this.options), i = s == null ? void 0 : this.intersects[s];
      return this.intersects.length = 0, i == null ? {
        details: {
          type: "sphere"
        },
        distance: 0,
        point: t,
        object: Mr(e),
        pointerPosition: t,
        pointerQuaternion: n,
        pointOnFace: t,
        localPoint: t
      } : (i.object.updateWorldMatrix(true, false), Object.assign(i, {
        details: {
          type: "sphere"
        },
        pointOnFace: i.point,
        pointerPosition: this.fromPosition.clone(),
        pointerQuaternion: this.fromQuaternion.clone(),
        localPoint: i.point.clone().applyMatrix4(vr.copy(i.object.matrixWorld).invert())
      }));
    }
  }
  const Nn = new q();
  function Ed(r, e, t) {
    if (e.updateWorldMatrix(true, false), e.spherecast != null) {
      e.spherecast(r, t);
      return;
    }
    if (e instanceof Ma) {
      e.geometry.boundingSphere == null && e.geometry.computeBoundingSphere(), e.geometry.boundingBox == null && e.geometry.computeBoundingBox();
      for (let s = 0; s < e.count; s++) {
        if (e.getMatrixAt(s, Nn), Nn.premultiply(e.matrixWorld), !po(r, e, Nn)) continue;
        const i = go(r, e, Nn, s);
        i != null && t.push(i);
      }
    }
    if (!(e instanceof k) || !po(r, e, e.matrixWorld)) return;
    vr.copy(e.matrixWorld).invert();
    const n = go(r, e, e.matrixWorld);
    n != null && t.push(n);
  }
  const uo = new b(), fo = new N(), ho = new rt(), Dt = new Ws();
  function po(r, { geometry: e }, t) {
    return e.boundingSphere == null && e.computeBoundingSphere(), Dt.copy(e.boundingSphere).applyMatrix4(t), Dt.center.distanceToSquared(r.center) < (r.radius + Dt.radius) ** 2;
  }
  const Dn = new b(), rs = new b(), mo = new b(), Ad = new b(1e-4, 1e-4, 1e-4), vr = new q();
  function go(r, e, t, n) {
    vr.copy(t).invert(), Dt.copy(r).applyMatrix4(vr);
    const { geometry: s } = e;
    s.boundingBox == null && s.computeBoundingBox(), s.boundingBox.getSize(rs), s.boundingBox.getCenter(mo), s.boundingBox.clampPoint(Dt.center, Dn), Dn.applyMatrix4(t);
    const i = Dn.distanceToSquared(r.center);
    if (i > r.radius * r.radius) return;
    rs.max(Ad);
    const o = Dt.center.clone().sub(mo);
    o.divide(rs), Id(o);
    const a = Dn.clone();
    let l;
    return Mn(br, a, e) && (l = br.clone()), {
      distance: Math.sqrt(i),
      face: {
        a: 0,
        b: 0,
        c: 0,
        materialIndex: 0,
        normal: o
      },
      uv: l,
      normal: o,
      point: a,
      instanceId: n,
      object: e
    };
  }
  function Id(r) {
    const e = Math.abs(r.x), t = Math.abs(r.y), n = Math.abs(r.z);
    if (e >= t && e >= n) {
      r.set(r.x < 0 ? -1 : 1, 0, 0);
      return;
    }
    if (t >= e && t >= n) {
      r.set(0, r.y < 0 ? -1 : 1, 0);
      return;
    }
    r.set(0, 0, r.z < 0 ? -1 : 1);
  }
  function Od(r, e, t, n = {}, s = "grab") {
    return new Vt(En(), s, t, new el(e, () => n.radius ?? 0.07, n), r, void 0, void 0, void 0, n);
  }
  function Cd(r, e, t, n = {}, s = "ray") {
    return new Vt(En(), s, t, new Pd(e, n), r, void 0, void 0, void 0, n);
  }
  function _d(r, e, t, n = {}, s = "lines") {
    return new Vt(En(), s, t, new wd(e, n), r, void 0, void 0, void 0, n);
  }
  function Ld(r, e, t, n = {}, s = "touch") {
    return new Vt(En(), s, t, new el(e, () => n.hoverRadius ?? 0.1, n), r, jd(n), void 0, void 0, n);
  }
  function jd(r) {
    let e = false;
    return (t) => {
      if (!t.getEnabled()) return;
      const n = t.getIntersection(), s = Hd(n, r.downRadius ?? 0.03);
      if (s === e) return;
      const i = {
        timeStamp: performance.now(),
        button: r.button ?? 0
      };
      s ? t.down(i) : t.up(i), e = s;
    };
  }
  function Hd(r, e) {
    return r == null ? false : r.distance <= e;
  }
  let Nd = 23412;
  function En() {
    return Nd++;
  }
  function Dd(r, e, t) {
    if (!(e instanceof globalThis.MouseEvent)) return t.set(0, 0);
    const { width: n, height: s, top: i, left: o } = r.getBoundingClientRect(), a = e.clientX - o, l = e.clientY - i;
    return t.set(a / n * 2 - 1, -(l / s) * 2 + 1);
  }
  Fd = function(r, e, t, n) {
    return zd(r, typeof e == "function" ? e : () => e, t, Dd.bind(null, r), r.setPointerCapture.bind(r), (s) => {
      r.hasPointerCapture(s) && r.releasePointerCapture(s);
    }, {
      pointerTypePrefix: "screen-",
      ...n
    });
  };
  function zd(r, e, t, n, s, i, o = {}) {
    const a = (o == null ? void 0 : o.forwardPointerCapture) ?? true, l = /* @__PURE__ */ new Map(), c = o.pointerTypePrefix ?? "forward-", u = (L, C) => {
      let E = l.get(L.pointerId);
      return E != null || (E = new Vt(En(), `${c}${L.pointerType}`, L.pointerState, new Rd((w, T) => (n(w, T), e()), o), e, void 0, a ? s.bind(null, L.pointerId) : void 0, a ? i.bind(null, L.pointerId) : void 0, o), C != "move" && C != "wheel" && (E.setIntersection(E.computeIntersection("pointer", t, L)), E.commit(L, false)), l.set(L.pointerId, E)), E;
    }, f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), m = [], g = [], v = (L, C, E) => {
      switch (L) {
        case "move":
          E.move(t, C);
          return;
        case "wheel":
          E.wheel(t, C);
          return;
        case "cancel":
          E.cancel(C);
          return;
        case "down":
          if (!yo(C)) return;
          E.down(C);
          return;
        case "up":
          if (!yo(C)) return;
          E.up(C);
          return;
        case "exit":
          h.delete(E), f.delete(E), E.exit(C);
          return;
      }
    }, x = (L, C) => {
      const E = u(C, L);
      L === "move" && h.set(E, C), L === "wheel" && f.set(E, C), o.batchEvents ?? true ? g.push({
        type: L,
        event: C
      }) : v(L, C, E);
    }, S = x.bind(null, "move"), R = x.bind(null, "cancel"), M = x.bind(null, "down"), I = x.bind(null, "up"), O = x.bind(null, "wheel"), _ = x.bind(null, "exit");
    return r.addEventListener("pointermove", S), r.addEventListener("pointercancel", R), r.addEventListener("pointerdown", M), r.addEventListener("pointerup", I), r.addEventListener("wheel", O), r.addEventListener("pointerleave", _), {
      destroy() {
        r.removeEventListener("pointermove", S), r.removeEventListener("pointercancel", R), r.removeEventListener("pointerdown", M), r.removeEventListener("pointerup", I), r.removeEventListener("wheel", O), r.removeEventListener("pointerleave", _), h.clear(), f.clear();
      },
      update() {
        const L = g.length;
        for (let C = 0; C < L; C++) {
          const { type: E, event: w } = g[C], T = u(w, E);
          if (E === "move" && (m.push(T), h.get(T) != w)) {
            T.emitMove(w);
            continue;
          }
          if (E === "wheel" && f.get(T) != w) {
            T.emitWheel(w);
            continue;
          }
          v(E, w, T);
        }
        if (g.length = 0, o.intersectEveryFrame ?? false) for (const [C, E] of h.entries()) m.includes(C) || C.move(t, E);
        m.length = 0;
      }
    };
  }
  function yo(r) {
    return r.button != null;
  }
  let tl = class Fs {
    constructor(e) {
      __publicField(this, "enableMultiplePointers");
      __publicField(this, "pointers", []);
      __publicField(this, "isDefaults", []);
      __publicField(this, "enabled", true);
      __publicField(this, "activePointer");
      __publicField(this, "nonCapturedPointers", []);
      this.enableMultiplePointers = e;
    }
    register(e, t = false) {
      return this.pointers.push(e), this.isDefaults.push(t), this.unregister.bind(this, e);
    }
    unregister(e) {
      const t = this.pointers.indexOf(e);
      t !== -1 && (this.isDefaults.splice(t, 1), this.pointers.splice(t, 1));
    }
    startIntersection(e, t) {
      const n = this.pointers.length;
      let s = false;
      for (let i = 0; i < n; i++) {
        const o = this.pointers[i];
        if (o instanceof Fs) {
          o.startIntersection(e, t);
          continue;
        }
        const a = o.getPointerCapture();
        if (a != null) {
          s = true, o.setIntersection(o.intersector.intersectPointerCapture(a, t));
          continue;
        }
        e.push(o), o.intersector.startIntersection(t);
      }
      return s;
    }
    getIntersection() {
      var _a2;
      return (_a2 = this.activePointer) == null ? void 0 : _a2.getIntersection();
    }
    getPointerCapture() {
      var _a2;
      return (_a2 = this.activePointer) == null ? void 0 : _a2.getPointerCapture();
    }
    computeActivePointer() {
      let e;
      this.activePointer = void 0;
      const t = this.pointers.length;
      for (let n = 0; n < t; n++) {
        const s = this.pointers[n];
        s instanceof Fs && s.computeActivePointer();
        const i = s.getIntersection(), o = s.getPointerCapture() != null ? -1 / 0 : (i == null ? void 0 : i.object.isVoidObject) ? 1 / 0 : (i == null ? void 0 : i.distance) ?? 1 / 0, a = this.isDefaults[n];
        (e == null || a && o === e || o < e) && (this.activePointer = s, e = o);
      }
    }
    commit(e, t, n = true) {
      if (this.enableMultiplePointers) {
        const i = this.pointers.length;
        for (let o = 0; o < i; o++) this.pointers[o].commit(e, t);
        return;
      }
      n && this.computeActivePointer();
      const s = this.pointers.length;
      for (let i = 0; i < s; i++) {
        const o = this.pointers[i];
        o.setEnabled(o === this.activePointer, e, false), o.commit(e, t, false);
      }
    }
    move(e, t) {
      if (!this.enabled) return;
      if (this.nonCapturedPointers.length = 0, !this.startIntersection(this.nonCapturedPointers, t) || this.enableMultiplePointers) {
        Zs("pointer", e, this.nonCapturedPointers);
        const s = this.nonCapturedPointers.length;
        for (let i = 0; i < s; i++) {
          const o = this.nonCapturedPointers[i];
          o.setIntersection(o.intersector.finalizeIntersection(e));
        }
      }
      this.commit(t, true);
    }
    setEnabled(e, t) {
      this.enabled = e;
      const n = this.pointers.length;
      for (let s = 0; s < n; s++) {
        const i = this.pointers[s];
        i.setEnabled(e && (this.enableMultiplePointers || i == this.activePointer), t);
      }
    }
  };
  const kd = {}, xo = (r) => {
    let e;
    const t = /* @__PURE__ */ new Set(), n = (u, f) => {
      const h = typeof u == "function" ? u(e) : u;
      if (!Object.is(h, e)) {
        const m = e;
        e = f ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), t.forEach((g) => g(e, m));
      }
    }, s = () => e, l = {
      setState: n,
      getState: s,
      getInitialState: () => c,
      subscribe: (u) => (t.add(u), () => t.delete(u)),
      destroy: () => {
        (kd ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), t.clear();
      }
    }, c = e = r(n, s, l);
    return l;
  }, Xd = (r) => r ? xo(r) : xo;
  new b();
  new b();
  new b();
  function Ud() {
    return navigator.userAgent.includes("Macintosh") && navigator.xr != null;
  }
  function nl(r, e, { anchors: t = true, handTracking: n = !Ud(), layers: s = true, meshDetection: i = true, planeDetection: o = true, customSessionInit: a, depthSensing: l = false, hitTest: c = true, domOverlay: u = true, bodyTracking: f = false, bounded: h } = {}) {
    if (a != null) return a;
    const m = h == null ? [
      "local-floor"
    ] : h ? [
      "bounded-floor"
    ] : [
      "unbounded",
      "local-floor"
    ], g = [];
    u instanceof Element && (u = true), Ne(t, "anchors", m, g), Ne(n, "hand-tracking", m, g), Ne(s, "layers", m, g), Ne(i, "mesh-detection", m, g), Ne(o, "plane-detection", m, g), Ne(l, "depth-sensing", m, g), Ne(u, "dom-overlay", m, g), Ne(c, "hit-test", m, g), Ne(f, "body-tracking", m, g);
    const v = {
      requiredFeatures: m,
      optionalFeatures: g
    };
    return e != null && (v.domOverlay = {
      root: e
    }), l && Object.assign(v, {
      depthSensing: {
        usagePreference: [
          "gpu-optimized"
        ],
        dataFormatPreference: []
      }
    }), v;
  }
  function Ne(r, e, t, n) {
    if (r !== false) {
      if (r === true) {
        n.push(e);
        return;
      }
      t.push(e);
    }
  }
  function Ft(r, e, t) {
    return typeof r == "function" ? r : (typeof r == "object" && (e != null && Gd(r, e) ? r = r[e] : "default" in r && (r = r.default)), r === false ? false : r === true ? t : r ?? t);
  }
  function Gd(r, e) {
    return e in r;
  }
  const rl = {
    session: void 0,
    mediaBinding: void 0,
    originReferenceSpace: void 0,
    visibilityState: void 0,
    mode: null,
    frameRate: void 0,
    inputSourceStates: [],
    detectedMeshes: [],
    detectedPlanes: [],
    layerEntries: []
  };
  async function bo(r, e, t) {
    var _a2, _b;
    if (typeof navigator > "u") return false;
    const [n, s] = await Promise.all([
      (_a2 = navigator.xr) == null ? void 0 : _a2.isSessionSupported("immersive-vr").catch((o) => (console.error(o), false)),
      (_b = navigator.xr) == null ? void 0 : _b.isSessionSupported("immersive-ar").catch((o) => (console.error(o), false))
    ]);
    if (s || n) return false;
    const { emulate: i } = await _a(async () => {
      const { emulate: o } = await import("./emulate-BLZKF8jP.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        emulate: o
      };
    }, __vite__mapDeps([0,1,2,3,4,5]));
    return t && window.alert("emulator started"), r.setState({
      emulator: i(e === true ? "metaQuest3" : e)
    }), true;
  }
  const ss = new b(), Fn = new b();
  function Bd(r) {
    const e = typeof HTMLElement > "u" ? void 0 : (r == null ? void 0 : r.domOverlay) instanceof HTMLElement ? r.domOverlay : document.createElement("div"), t = Xd(() => ({
      ...rl,
      controller: r == null ? void 0 : r.controller,
      hand: r == null ? void 0 : r.hand,
      gaze: r == null ? void 0 : r.gaze,
      screenInput: r == null ? void 0 : r.screenInput,
      transientPointer: r == null ? void 0 : r.transientPointer,
      domOverlayRoot: e
    })), n = t.subscribe(({ session: m }, { session: g }) => {
      g != null && m == null && f != null && zn(f, r, e).catch(console.error);
    }), s = (r == null ? void 0 : r.emulate) ?? "metaQuest3";
    let i;
    if (typeof window < "u" && s != false) {
      const m = (typeof s == "object" ? s.inject : void 0) ?? {
        hostname: "localhost"
      };
      (m === true || typeof m != "boolean" && window.location.hostname === m.hostname) && bo(t, s, false).then((v) => {
        !v || f == null || zn(f, r, e);
      });
      const g = (v) => {
        v.altKey && v.metaKey && v.code === "KeyE" && bo(t, s, true).then((x) => {
          !x || f == null || zn(f, r, e);
        });
      };
      window.addEventListener("keydown", g), i = () => window.removeEventListener("keydown", g);
    }
    let o;
    if (e != null) {
      if (e.parentNode == null) {
        const m = (v) => {
          e.style.display = v.session != null ? "block" : "none";
        }, g = t.subscribe(m);
        m(t.getState()), document.body.appendChild(e), o = () => {
          e.remove(), g();
        };
      }
      document.body.append(e);
    }
    const a = qf((m) => t.setState({
      inputSourceStates: [
        ...t.getState().inputSourceStates,
        m
      ]
    }), r), l = Yd(t, a, (r == null ? void 0 : r.secondaryInputSources) ?? false), c = Vd(r == null ? void 0 : r.enterGrantedSession, (m) => kn(e, m, r, f)), u = [];
    let f;
    const h = () => {
      t.setState(l(f.getSession()));
    };
    return Object.assign(t, {
      addLayerEntry(m) {
        t.getState().session != null && t.setState({
          layerEntries: [
            ...t.getState().layerEntries,
            m
          ]
        });
      },
      removeLayerEntry(m) {
        t.getState().session != null && t.setState({
          layerEntries: t.getState().layerEntries.filter((g) => g != m)
        });
      },
      requestFrame() {
        return new Promise((m) => u.push(m));
      },
      setWebXRManager(m) {
        if (f === m) return;
        f == null ? void 0 : f.removeEventListener("sessionstart", h), f = m, f.addEventListener("sessionstart", h);
        const { foveation: g, bounded: v } = r ?? {};
        f.setReferenceSpaceType(v ? "bounded-floor" : "local-floor"), g != null && f.setFoveation(g), zn(f, r, e).catch(console.error);
      },
      setFrameRate(m) {
        const { session: g } = t.getState();
        g != null && sl(g, m);
      },
      setHand(m, g) {
        if (g == null) {
          t.setState({
            hand: m
          });
          return;
        }
        const v = t.getState().hand, x = {};
        typeof v == "object" && Object.assign(x, v), Object.assign(x, {
          default: Ft(v, void 0, {}),
          [g]: m
        }), t.setState({
          hand: x
        });
      },
      setController(m, g) {
        if (g == null) {
          t.setState({
            controller: m
          });
          return;
        }
        const v = t.getState().controller, x = {};
        typeof v == "object" && Object.assign(x, v), Object.assign(x, {
          default: Ft(v, void 0, {}),
          [g]: m
        }), t.setState({
          controller: x
        });
      },
      setTransientPointer(m, g) {
        if (g == null) {
          t.setState({
            transientPointer: m
          });
          return;
        }
        const v = t.getState().transientPointer, x = {};
        typeof v == "object" && Object.assign(x, v), Object.assign(x, {
          default: Ft(v, void 0, {}),
          [g]: m
        }), t.setState({
          transientPointer: x
        });
      },
      setGaze(m) {
        t.setState({
          gaze: m
        });
      },
      setScreenInput(m) {
        t.setState({
          screenInput: m
        });
      },
      destroy() {
        f == null ? void 0 : f.removeEventListener("sessionstart", h), i == null ? void 0 : i(), o == null ? void 0 : o(), c == null ? void 0 : c(), n(), l(void 0);
      },
      enterXR: (m) => kn(e, m, r, f),
      enterAR: () => kn(e, "immersive-ar", r, f),
      enterVR: () => kn(e, "immersive-vr", r, f),
      onBeforeFrame(m, g, v) {
        let x;
        const S = (f == null ? void 0 : f.getReferenceSpace()) ?? void 0, R = t.getState(), M = g.parent ?? m;
        if (R.origin != M && (x ?? (x = {}), x.origin = M), S != R.originReferenceSpace && (x ?? (x = {}), x.originReferenceSpace = S), M.xrSpace = S, R.origin != M && R.origin != null && (R.origin.xrSpace = void 0), v != null && (f != null && qd(t, v, f), R.body != v.body && (x ?? (x = {}), x.body = v.body)), x != null && t.setState(x), v != null) {
          const I = u.length;
          for (let O = 0; O < I; O++) u[O](v);
          u.length = 0;
        }
      },
      onBeforeRender() {
        const { session: m, layerEntries: g } = t.getState();
        if (m == null || f == null) return;
        const v = f.getCamera();
        v.aspect = v.projectionMatrix.elements[5] / v.projectionMatrix.elements[0];
        const x = m == null ? void 0 : m.renderState.layers;
        if (x == null) return;
        v.getWorldPosition(ss), g.sort((M, I) => {
          const O = M.renderOrder - I.renderOrder;
          if (O !== 0) return O;
          M.object3D.getWorldPosition(Fn);
          const _ = Fn.distanceToSquared(ss);
          return I.object3D.getWorldPosition(Fn), Fn.distanceToSquared(ss) - _;
        });
        let S = false;
        const R = g.map(({ layer: M }, I) => (M != x[I] && (S = true), M));
        S && (R.push(f.getBaseLayer()), m.updateRenderState({
          layers: R
        }));
      }
    });
  }
  async function zn(r, e, t) {
    var _a2;
    const n = (e == null ? void 0 : e.offerSession) ?? true;
    if (((_a2 = navigator.xr) == null ? void 0 : _a2.offerSession) == null || n === false) return;
    let s;
    n === true ? s = await navigator.xr.isSessionSupported("immersive-ar") ?? false ? "immersive-ar" : "immersive-vr" : s = n;
    const i = await navigator.xr.offerSession(s, nl(s, t, e));
    il(i, r, e);
  }
  async function sl(r, e) {
    if (e === false) return;
    const { supportedFrameRates: t } = r;
    if (t == null || t.length === 0) return;
    if (typeof e == "function") {
      const s = e(t);
      if (s === false) return;
      await r.updateTargetFrameRate(s);
      return;
    }
    const n = e === "high" ? 1 : e === "mid" ? 0.5 : 0;
    await r.updateTargetFrameRate(t[Math.ceil((t.length - 1) * n)]);
  }
  async function kn(r, e, t, n) {
    if (typeof navigator > "u" || navigator.xr == null) return Promise.reject(new Error("WebXR not supported"));
    if (n == null) return Promise.reject(new Error("not connected to three.js. You either might be missing the <XR> component or the canvas is not yet loaded?"));
    const s = await navigator.xr.requestSession(e, nl(e, r, t));
    return await il(s, n, t), s;
  }
  async function il(r, e, t) {
    await Promise.all([
      sl(r, (t == null ? void 0 : t.frameRate) ?? "high"),
      Wd(e, r, t)
    ]);
  }
  async function Wd(r, e, t) {
    if (r == null) return;
    const n = XRWebGLLayer.getNativeFramebufferScaleFactor(e);
    let s = t == null ? void 0 : t.frameBufferScaling;
    typeof s == "function" && (s = s(n)), typeof s == "string" && (s = s === "high" ? n : s === "mid" ? 1 : 0.5), s != null && (r == null ? void 0 : r.setFramebufferScaleFactor(s)), await (r == null ? void 0 : r.setSession(e));
  }
  const vo = [
    "immersive-ar",
    "immersive-vr",
    "inline"
  ];
  function Vd(r = vo, e) {
    var _a2;
    if (typeof navigator > "u" || r === false) return;
    r === true && (r = vo);
    const t = async () => {
      var _a3;
      for (const n of r) await ((_a3 = navigator.xr) == null ? void 0 : _a3.isSessionSupported(n)) && e(n);
    };
    return (_a2 = navigator.xr) == null ? void 0 : _a2.addEventListener("sessiongranted", t), () => {
      var _a3;
      return (_a3 = navigator.xr) == null ? void 0 : _a3.removeEventListener("sessiongranted", t);
    };
  }
  function Yd(r, e, t) {
    let n;
    return (s) => {
      if (n == null ? void 0 : n(), s == null) return {};
      const i = [];
      let o;
      const a = () => {
        o = void 0, r.setState({
          inputSourceStates: e(s, r.getState().inputSourceStates, i)
        }), i.length = 0;
      }, l = (v, x) => {
        i.push({
          isPrimary: v,
          added: x.added,
          removed: x.removed
        }), o == null && (t ? o = setTimeout(a, 100) : a());
      }, c = l.bind(null, true);
      s.addEventListener("inputsourceschange", c);
      let u;
      if (t) {
        const v = l.bind(null, false);
        s.addEventListener("trackedsourceschange", v), u = () => s.removeEventListener("trackedsourceschange", v);
      }
      const f = () => r.setState({
        frameRate: s.frameRate,
        visibilityState: s.visibilityState
      });
      s.addEventListener("frameratechange", f), s.addEventListener("visibilitychange", f);
      const h = () => {
        n == null ? void 0 : n(), n = void 0, r.setState({
          emulator: r.getState().emulator,
          ...rl
        });
      };
      s.addEventListener("end", h);
      const m = [
        {
          isPrimary: true,
          added: s.inputSources
        }
      ];
      t && m.push({
        isPrimary: false,
        added: s.trackedSources
      });
      const g = e(s, [], m);
      return n = () => {
        u == null ? void 0 : u(), clearTimeout(o), e(s, r.getState().inputSourceStates, "remove-all"), s.removeEventListener("end", h), s.removeEventListener("frameratechange", f), s.removeEventListener("visibilitychange", f), s.removeEventListener("inputsourceschange", c);
      }, {
        inputSourceStates: g,
        frameRate: s.frameRate,
        visibilityState: s.visibilityState,
        detectedMeshes: [],
        detectedPlanes: [],
        mode: s.environmentBlendMode === "opaque" ? "immersive-vr" : "immersive-ar",
        session: s,
        mediaBinding: typeof XRMediaBinding > "u" ? void 0 : new XRMediaBinding(s)
      };
    };
  }
  function qd(r, e, t) {
    const n = t.getReferenceSpace(), { detectedMeshes: s, detectedPlanes: i, session: o, inputSourceStates: a } = r.getState();
    if (n == null || o == null) return;
    const l = wo(i, e.detectedPlanes), c = wo(s, e.detectedMeshes);
    (i != l || s != c) && r.setState({
      detectedPlanes: l,
      detectedMeshes: c
    });
    const u = a.length;
    for (let f = 0; f < u; f++) {
      const h = a[f];
      switch (h.type) {
        case "controller":
          Mh(h);
          break;
        case "hand":
          Uf(h, e, t);
          break;
      }
    }
  }
  const $d = [];
  function wo(r, e) {
    return e == null ? $d : r != null && Zd(e, r) ? r : Array.from(e);
  }
  function Zd(r, e) {
    if (r.size != e.length) return false;
    for (const t of e) if (!r.has(t)) return false;
    return true;
  }
  new Gt();
  new Cc();
  async function Qd(r, e = Sh) {
    const { scene: t } = await e.loadAsync(r.assetPath);
    return t.clone(true);
  }
  function Kd(r, e) {
    r.renderOrder = (e == null ? void 0 : e.renderOrder) ?? 0, r.traverse((t) => {
      t instanceof k && t.material instanceof xn && (t.material.colorWrite = (e == null ? void 0 : e.colorWrite) ?? true);
    });
  }
  function Jd(r, e, t) {
    const n = [];
    for (const s in e.components) {
      const i = e.components[s];
      let o = t[s];
      o == null && (t[s] = o = {
        state: "default"
      }), n.push(...Object.values(i.visualResponses).map((a) => eh(r, o, a)));
    }
    return () => {
      const s = n.length;
      for (let i = 0; i < s; i++) n[i]();
    };
  }
  function eh(r, e, t) {
    const n = r.getObjectByName(t.valueNodeName);
    if (e.object = n, n == null) return () => {
    };
    if (t.valueNodeProperty === "visibility") return () => n.visible = t.states.includes(e.state);
    const s = r.getObjectByName(t.minNodeName), i = r.getObjectByName(t.maxNodeName);
    return s == null || i == null ? () => {
    } : () => {
      const o = th(e, t);
      n.quaternion.slerpQuaternions(s.quaternion, i.quaternion, o), n.position.lerpVectors(s.position, i.position, o), n.updateMatrix();
    };
  }
  function th(r, { componentProperty: e, states: t }) {
    const n = t.includes(r.state);
    switch (e) {
      case "xAxis":
        return n ? So(r).x : 0.5;
      case "yAxis":
        return n ? So(r).y : 0.5;
      case "button":
        return n ? r.button ?? 0 : 0;
      case "state":
        return n ? 1 : 0;
    }
  }
  const tn = new z();
  function So({ xAxis: r = 0, yAxis: e = 0 }) {
    if (tn.lengthSq() > 1) {
      const n = Math.atan2(e, r);
      tn.set(Math.cos(n), Math.sin(n));
    } else tn.set(r, e);
    return tn.multiplyScalar(0.5).addScalar(0.5), tn;
  }
  function Po(r, e) {
    if (e != null && e.createdAt != null && e.createdAt >= r.lastChangedTime) return e;
    const t = new yt();
    return t.setIndex(new de(r.indices, 1)), t.setAttribute("position", new de(r.vertices, 3)), Object.assign(t, {
      creationTime: r.lastChangedTime
    });
  }
  function To(r, e) {
    return e != null && e.createdAt != null && e.createdAt >= r.lastChangedTime ? e : Object.assign(nh(r.polygon), {
      createdAt: r.lastChangedTime
    });
  }
  const nn = new _c(), Xn = new z();
  function nh(r) {
    if (r.length === 0) return new yt();
    const e = new Lc(), t = r.map(({ x: s, z: i }) => new z(s, i));
    nn.setFromPoints(t), nn.getSize(Xn);
    for (const s of t) s.sub(nn.min), s.divide(Xn);
    e.setFromPoints(t);
    const n = new jc(e);
    return n.scale(Xn.x, Xn.y, 1), n.translate(nn.min.x, nn.min.y, 0), n.rotateX(Math.PI / 2), n;
  }
  function wr(r, e = 1) {
    if (r != null) return {
      x: pt(r.x),
      y: pt(r.y),
      z: pt(r.z),
      w: "w" in r ? pt(r.w, e) : e
    };
  }
  function pt(r, e = 0) {
    return isNaN(r) ? e : r;
  }
  const ol = 60 / 180 * Math.PI, rh = 60 / 180 * Math.PI, sh = -30 / 180 * Math.PI, ih = 30 / 180 * Math.PI;
  function oh(r, e, t, n, s, i, o) {
    return r instanceof HTMLVideoElement ? ah(r, e, t, s, i, o) : lh(r, e.origin, t, n, s, i, o);
  }
  function ah(r, e, t, n, { invertStereo: s, layout: i, shape: o = "quad" }, a = {}) {
    var _a2;
    const l = Rr(n, e.origin, t, Wt), c = Js(Wt, gt), u = {
      invertStereo: s,
      layout: i,
      space: l,
      transform: c
    };
    ti(o, u, a.centralAngle, gt);
    const f = `create${al(o)}Layer`, h = (_a2 = e.mediaBinding) == null ? void 0 : _a2[f](r, u);
    if (h != null) return ei(h, a), h;
  }
  function lh(r, e, t, n, s, { shape: i = "quad", ...o }, a = {}) {
    var _a2;
    const l = Rr(s, e, t, Wt), c = Js(Wt, gt), u = {
      ...o,
      isStatic: !(r instanceof Tn),
      textureType: "texture",
      viewPixelWidth: o.layout === "stereo-left-right" ? r.width / 2 : r.width,
      viewPixelHeight: o.layout === "stereo-top-bottom" ? r.height / 2 : r.height,
      space: l,
      transform: c
    };
    ti(i, u, a.centralAngle, gt);
    const f = `create${al(i)}Layer`, h = (_a2 = n.getBinding()) == null ? void 0 : _a2[f](u);
    if (h != null) return ei(h, a), h;
  }
  const Wt = new q(), Ro = new b(), Mo = new N(), gt = new b();
  function Js(r, e = gt) {
    return r.decompose(Ro, Mo, e), e.x = pt(e.x), e.y = pt(e.y), e.z = pt(e.z), new XRRigidTransform(wr(Ro), wr(Mo));
  }
  function al(r) {
    return `${r[0].toUpperCase()}${r.slice(1)}`;
  }
  function ei(r, e = {}) {
    if (r.chromaticAberrationCorrection = e.chromaticAberrationCorrection, r.quality = e.quality ?? "default", r.blendTextureSourceAlpha = e.blendTextureSourceAlpha ?? false, r instanceof XRCylinderLayer) {
      r.centralAngle = (e == null ? void 0 : e.centralAngle) ?? ol;
      return;
    }
    r instanceof XREquirectLayer && (r.centralHorizontalAngle = (e == null ? void 0 : e.centralHorizontalAngle) ?? rh, r.lowerVerticalAngle = (e == null ? void 0 : e.lowerVerticalAngle) ?? sh, r.upperVerticalAngle = (e == null ? void 0 : e.upperVerticalAngle) ?? ih);
  }
  function ch(r, e, t, n) {
    let s = false;
    const i = async () => {
      const o = await e.requestFrame();
      s || fh(r, t, o, n);
    };
    return t.addEventListener("redraw", i), i(), () => {
      s = true, t.removeEventListener("redraw", i);
    };
  }
  function uh(r) {
    if (r instanceof Tn) return r.texture;
    const e = r instanceof HTMLVideoElement ? new Dc(r) : new Is(r);
    return e.colorSpace = nt, e.needsUpdate = true, e;
  }
  function fh(r, e, t, n) {
    const s = r.getContext(), i = r.xr.getBinding().getSubImage(e, t);
    r.state.bindTexture(s.TEXTURE_2D, i.colorTexture), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, true), s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, n.width, n.height, s.RGBA, s.UNSIGNED_BYTE, n);
  }
  function dh(r, e, t, n) {
    r.originReferenceSpace != null && (e.space = Rr(n, r.origin, r.originReferenceSpace, Wt), e.transform = Js(Wt, gt), ti(hh(e), e, t, gt));
  }
  function ti(r, e, t, n) {
    if (r === "cylinder") {
      const i = (n.x + n.z) / 2, o = i * (t ?? ol);
      e.radius = i, e.aspectRatio = n.y === 0 ? 1 : o / n.y;
    } else r === "quad" ? (e.width = n.x / 2, e.height = n.y / 2) : e.radius = (n.x + n.y + n.z) / 3;
  }
  function hh(r) {
    return r instanceof XRCylinderLayer ? "cylinder" : r instanceof XREquirectLayer ? "equirect" : "quad";
  }
  function ll(r, e, t) {
    return new Tn(r * t, e * t, {
      minFilter: mt,
      magFilter: mt,
      type: Nc,
      depthTexture: new Hc(r, e)
    });
  }
  const rn = new Y(0, 0, 0, "YXZ"), Un = new N();
  function ph(r, e, t) {
    r.updateWorldMatrix(true, false), r.matrixWorld.decompose(e.position, Un, e.scale), rn.setFromQuaternion(Un), rn.z = 0, rn.x = Je(rn.x - 10 * Math.PI / 180, -Math.PI / 2, 1.1 * Math.PI / 4), Un.setFromEuler(rn), e.quaternion.slerp(Un, t / 100);
  }
  function mh(r) {
    return r.userData.teleportTarget === true;
  }
  function gh(r = {}) {
    return (e, t, n, s) => !(!mh(e) || r.filter != null && !r.filter(e, t, n, s));
  }
  function yh() {
    return new Fc(new b(0, 0, 0), new b(0, 0, -8), new b(0, -20, -15)).getPoints(20);
  }
  let xh = class extends k {
    constructor(e) {
      const t = new Nu(), n = new Float32Array(e.length * 3);
      for (let o = 0; o < e.length; o++) e[o].toArray(n, o * 3);
      t.setPoints(n);
      const s = (e.length * 3 - 3) / (e.length * 3 - 1), i = new Xu({
        lineWidth: 0.1,
        resolution: void 0,
        visibility: s
      });
      super(t, i);
      __publicField(this, "multiplier");
      __publicField(this, "lineLengths");
      __publicField(this, "options", {});
      this.material.transparent = true, this.multiplier = s, this.material = i, this.lineLengths = e.slice(0, -1).map((o, a) => o.distanceTo(e[a + 1]));
    }
    update(e) {
      const t = e.getEnabled(), n = e.getIntersection();
      if (!t || e.getButtonsDown().size === 0 || n == null) {
        this.visible = false;
        return;
      }
      if (this.visible = true, n.details.type != "lines") {
        this.material.visibility = this.multiplier;
        return;
      }
      const { distanceOnLine: s, lineIndex: i } = n.details, o = this.lineLengths[i];
      this.material.visibility = this.multiplier * (i + s / o) / this.lineLengths.length;
      const { color: a = "white", opacity: l = 0.4, size: c = 0.01 } = this.options;
      this.material.lineWidth = c, this.material.opacity = typeof l == "function" ? l(e) : l;
      const u = typeof a == "function" ? a(e) : a;
      Array.isArray(u) ? this.material.color.set(...u) : this.material.color.set(u);
    }
  };
  const Eo = new q(), Gn = new b(), bh = new b(), Ao = new N();
  async function vh(r, e, t, n = [
    "point",
    "plane",
    "mesh"
  ]) {
    var _a2;
    typeof t == "string" && (t = await e.requestReferenceSpace(t));
    const s = Array.isArray(n) ? n : [
      n
    ];
    let i, o, a;
    const l = r.getState();
    if (t instanceof XRSpace) i = {
      space: t,
      entityTypes: s
    }, a = l.origin;
    else {
      const u = Rr(t, l.origin, l.originReferenceSpace, Eo);
      if (u == null) return;
      Eo.decompose(Gn, Ao, bh);
      const f = wr(Gn);
      Gn.set(0, 0, -1).applyQuaternion(Ao);
      const h = new XRRay(f, wr(Gn, 0));
      a = t, i = {
        space: u,
        offsetRay: h,
        entityTypes: s
      }, o = u;
    }
    const c = await ((_a2 = e == null ? void 0 : e.requestHitTestSource) == null ? void 0 : _a2.call(e, i));
    if (c != null) return {
      source: c,
      getWorldMatrix: wh.bind(null, r, o, a)
    };
  }
  function wh(r, e, t, n, s) {
    if (e ?? (e = r.getState().originReferenceSpace), e == null) return false;
    const i = s.getPose(e);
    return i == null ? false : (n.fromArray(i.transform.matrix), t != null && (t.updateWorldMatrix(true, false), n.premultiply(t.matrixWorld)), true);
  }
  new b(1, 1, 1);
  new b(0, 0, 0);
  new q();
  new q();
  new b();
  new b();
  new b();
  new Y();
  new b();
  new b();
  const Sh = new Ba(), cl = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/";
  function zs(r, ...e) {
    let t = r();
    for (const n of e) t instanceof Promise ? t = t.then(n) : t = n(t);
    return t;
  }
  const Ph = "generic-trigger";
  class Th {
    constructor(e) {
      __publicField(this, "baseAssetPath");
      __publicField(this, "defaultProfileId");
      __publicField(this, "profilesListCache");
      __publicField(this, "profileCacheMap", /* @__PURE__ */ new Map());
      __publicField(this, "loadAsync", this.load);
      this.baseAssetPath = (e == null ? void 0 : e.baseAssetPath) ?? cl, this.defaultProfileId = (e == null ? void 0 : e.defaultControllerProfileId) ?? Ph;
    }
    load(e, t) {
      return zs(() => this.loadProfile(e), (n) => {
        for (const s in n.layouts) if (s.includes(t)) return n.layouts[s];
        throw new Error(`No matching layout for "${t}", in profile ${n.profileId} with layouts ${Object.keys(n.layouts).join(", ")}.`);
      });
    }
    loadProfile(e) {
      return zs(() => this.profilesListCache ?? Io(new URL("profilesList.json", this.baseAssetPath).href).then((t) => this.profilesListCache = t), (t) => {
        const n = e.length;
        let s;
        for (let i = 0; i < n && (s = t[e[i]], s == null); i++) ;
        if (s ?? (s = t[this.defaultProfileId]), s == null) throw new Error(`no matching profile found for profiles "${e.join(", ")}" in profile list ${JSON.stringify(t)}`);
        return this.loadProfileFromPath(s.path);
      });
    }
    loadProfileFromPath(e) {
      const t = this.profileCacheMap.get(e);
      if (t != null) return t;
      const n = new URL(e, this.baseAssetPath).href;
      return Io(n).then((s) => {
        for (const i in s.layouts) {
          const o = s.layouts[i];
          o != null && (o.assetPath = new URL(o.assetPath, n).href);
        }
        return this.profileCacheMap.set(e, s), s;
      });
    }
  }
  async function Io(r) {
    let e = await fetch(r);
    return e.ok ? e.json() : Promise.reject(new Error(e.statusText));
  }
  function Rh(r, e, t, n, s) {
    return zs(() => t.load(e.profiles, e.handedness), (i) => {
      const o = {};
      return Ga(o, e, i), {
        id: r,
        isPrimary: s,
        events: n,
        type: "controller",
        inputSource: e,
        gamepad: o,
        layout: i
      };
    });
  }
  function Mh({ gamepad: r, inputSource: e, layout: t }) {
    Ga(r, e, t);
  }
  const ul = p.createContext(void 0), it = p.createContext(void 0), An = p.createContext(void 0), ni = p.createContext(void 0), Eh = {}, { useDebugValue: Ah } = Ut, { useSyncExternalStoreWithSelector: Ih } = Pa;
  let Oo = false;
  const Oh = (r) => r;
  function ri(r, e = Oh, t) {
    (Eh ? "production" : void 0) !== "production" && t && !Oo && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), Oo = true);
    const n = Ih(r.subscribe, r.getState, r.getServerState || r.getInitialState, e, t);
    return Ah(n), n;
  }
  function In(r, e) {
    if (Object.is(r, e)) return true;
    if (typeof r != "object" || r === null || typeof e != "object" || e === null) return false;
    if (r instanceof Map && e instanceof Map) {
      if (r.size !== e.size) return false;
      for (const [n, s] of r) if (!Object.is(s, e.get(n))) return false;
      return true;
    }
    if (r instanceof Set && e instanceof Set) {
      if (r.size !== e.size) return false;
      for (const n of r) if (!e.has(n)) return false;
      return true;
    }
    const t = Object.keys(r);
    if (t.length !== Object.keys(e).length) return false;
    for (const n of t) if (!Object.prototype.hasOwnProperty.call(e, n) || !Object.is(r[n], e[n])) return false;
    return true;
  }
  p.forwardRef(({ id: r, children: e, onPress: t, onRelease: n }, s) => {
    const i = et("controller"), [o, a] = p.useState(void 0);
    if (p.useImperativeHandle(s, () => o, [
      o
    ]), Ch(i, r, (l) => l === "pressed" ? t == null ? void 0 : t() : n == null ? void 0 : n()), X(() => {
      var _a2;
      return a((_a2 = i.gamepad[r]) == null ? void 0 : _a2.object);
    }), o != null) return Ys(e, o);
  });
  function Ch(r, e, t) {
    const n = p.useRef(void 0);
    X(() => {
      var _a2;
      const s = (_a2 = r == null ? void 0 : r.gamepad[e]) == null ? void 0 : _a2.state;
      s != null && s != n.current && t(s), n.current = s;
    });
  }
  const _h = Symbol("loadXRControllerModel"), Lh = p.forwardRef((r, e) => {
    const t = et("controller"), n = zc(Qd, [
      t.layout,
      void 0,
      _h
    ]);
    Kd(n, r), t.object = n, p.useImperativeHandle(e, () => n, [
      n
    ]);
    const s = p.useMemo(() => Jd(n, t.layout, t.gamepad), [
      n,
      t.layout,
      t.gamepad
    ]);
    return X(s), d.jsx(Me, {
      space: "grip-space",
      children: d.jsx("primitive", {
        object: n
      })
    });
  }), jh = p.forwardRef((r, e) => {
    const t = et("hand"), n = kc(Ba, t.assetPath), s = p.useMemo(() => zf(n), [
      n
    ]);
    kf(s, r), t.object = s, p.useImperativeHandle(e, () => s, [
      s
    ]);
    const i = ml(), o = p.useMemo(() => Bf(t.inputSource.hand, s, i), [
      t.inputSource,
      s,
      i
    ]);
    return X((a, l, c) => o(c)), d.jsx("primitive", {
      object: s
    });
  });
  p.forwardRef(({ joint: r, children: e }, t) => d.jsx(Me, {
    ref: t,
    space: r,
    children: e
  }));
  function fl({ children: r }) {
    const e = p.useMemo(() => new tl(false), []);
    return On(e), d.jsx(ni.Provider, {
      value: e,
      children: r
    });
  }
  function Or(r) {
    for (const e of Object.keys(r)) delete r[e];
  }
  function Hh(r, e, t, n) {
    const s = p.useMemo(() => ({}), []);
    Or(s), Object.assign(s, t);
    const i = st(), o = p.useMemo(() => Od(() => i.getState().camera, r, e, s, n), [
      i,
      r,
      e,
      s,
      n
    ]);
    return On(o, t == null ? void 0 : t.makeDefault), o;
  }
  function Nh(r, e, t, n) {
    const s = p.useMemo(() => ({}), []);
    Or(s), Object.assign(s, t);
    const i = st(), o = p.useMemo(() => Cd(() => i.getState().camera, r, e, s, n), [
      i,
      r,
      e,
      s,
      n
    ]);
    return On(o, t == null ? void 0 : t.makeDefault), o;
  }
  function Dh(r, e, t, n) {
    const s = p.useMemo(() => ({}), []);
    Or(s), Object.assign(s, t);
    const i = st(), o = p.useMemo(() => _d(() => i.getState().camera, r, e, s, n), [
      i,
      r,
      e,
      s,
      n
    ]);
    return On(o, t == null ? void 0 : t.makeDefault), o;
  }
  function Fh(r, e, t, n) {
    const s = p.useMemo(() => ({}), []);
    Or(s), Object.assign(s, t);
    const i = st(), o = p.useMemo(() => Ld(() => i.getState().camera, r, e, s, n), [
      i,
      r,
      e,
      s,
      n
    ]);
    return On(o, t == null ? void 0 : t.makeDefault), o;
  }
  const zh = p.forwardRef((r, e) => {
    const t = p.useMemo(() => {
      const s = r.materialClass ?? Jf;
      return new s();
    }, [
      r.materialClass
    ]), n = p.useRef(null);
    return p.useImperativeHandle(e, () => n.current, []), X(() => n.current != null && ed(n.current, t, r.pointer, r)), d.jsx("mesh", {
      matrixAutoUpdate: false,
      renderOrder: r.renderOrder ?? 2,
      ref: n,
      material: t,
      children: d.jsx("boxGeometry", {})
    });
  }), Cr = p.forwardRef((r, e) => {
    const t = p.useMemo(() => {
      const o = r.materialClass ?? Zf;
      return new o();
    }, [
      r.materialClass
    ]), n = p.useRef(null), s = p.useRef(null);
    p.useImperativeHandle(e, () => n.current, []), X(() => n.current != null && s.current != null && Kf(s.current, n.current, t, r.pointer, r));
    const i = W((o) => o.scene);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx("group", {
          ref: s
        }),
        Ys(d.jsx("mesh", {
          renderOrder: r.renderOrder ?? 1,
          ref: n,
          matrixAutoUpdate: false,
          material: t,
          children: d.jsx("planeGeometry", {})
        }), i)
      ]
    });
  });
  function si(r, e, t, n) {
    const s = Q((i) => i.session);
    p.useEffect(() => {
      if (s != null) return td(r, s, e, t, n);
    }, [
      t,
      e,
      r,
      s,
      n
    ]);
  }
  function On(r, e = false) {
    const t = p.useContext(ni);
    if (t == null) throw new Error("xr pointers can only be used inside the XR component");
    p.useEffect(() => {
      const n = t.register(r, e);
      return () => {
        n();
      };
    }, [
      t,
      r,
      e
    ]), p.useEffect(() => {
      if (r instanceof Vt) return () => r.exit({
        timeStamp: performance.now()
      });
    }, [
      r
    ]);
  }
  const kh = p.forwardRef(({ pointer: r, linePoints: e, ...t }, n) => {
    const s = p.useMemo(() => new xh(e), [
      e
    ]);
    return p.useImperativeHandle(n, () => s, [
      s
    ]), s.options = t, X(() => s.update(r)), d.jsx("primitive", {
      object: s
    });
  });
  function dl(r, e, t) {
    const n = p.useContext(it);
    if (n == null) throw new Error("DefaultXRInputSourceGrabPointer can only be used inside a XRInputSource");
    const s = p.useRef(null), i = Hh(s, n, t);
    si(i, n.inputSource, r, n.events);
    const o = t.cursorModel;
    return d.jsx(Me, {
      ref: s,
      space: e,
      children: o !== false && d.jsx(Cr, {
        pointer: i,
        opacity: nd,
        ...se(o)
      })
    });
  }
  const Xh = dl.bind(null, "select", "index-finger-tip"), Uh = dl.bind(null, "squeeze", "grip-space");
  function Cn(r) {
    const e = et(), t = p.useRef(null), n = Nh(t, e, r);
    si(n, e.inputSource, "select", e.events);
    const s = r.rayModel, i = r.cursorModel;
    return d.jsxs(Me, {
      ref: t,
      space: "target-ray-space",
      children: [
        s !== false && d.jsx(zh, {
          pointer: n,
          opacity: mr,
          ...se(s)
        }),
        i !== false && d.jsx(Cr, {
          pointer: n,
          opacity: mr,
          ...se(i)
        })
      ]
    });
  }
  function Gh(r) {
    const e = et("hand"), t = p.useRef(null), n = Fh(t, e, r), s = r.cursorModel;
    return d.jsx(Me, {
      ref: t,
      space: e.inputSource.hand.get("index-finger-tip"),
      children: s !== false && d.jsx(Cr, {
        pointer: n,
        opacity: rd,
        ...se(s)
      })
    });
  }
  function Bh(r) {
    const e = r.model, t = r.grabPointer, n = r.rayPointer, s = r.teleportPointer ?? false;
    return d.jsxs(d.Fragment, {
      children: [
        e !== false && d.jsx(p.Suspense, {
          children: d.jsx(Lh, {
            ...se(e)
          })
        }),
        d.jsxs(fl, {
          children: [
            t !== false && d.jsx(Uh, {
              ...se(t)
            }),
            n !== false && d.jsx(Cn, {
              makeDefault: true,
              minDistance: 0.2,
              ...se(n)
            }),
            s !== false && d.jsx(hl, {
              ...se(s)
            })
          ]
        })
      ]
    });
  }
  function Wh(r) {
    var _a2;
    const e = r.model, t = r.grabPointer, n = r.rayPointer, s = r.touchPointer, i = r.teleportPointer ?? false, o = n === false ? false : (_a2 = se(n)) == null ? void 0 : _a2.rayModel;
    return d.jsxs(d.Fragment, {
      children: [
        e !== false && d.jsx(p.Suspense, {
          children: d.jsx(jh, {
            ...se(e)
          })
        }),
        d.jsxs(fl, {
          children: [
            t !== false && d.jsx(Xh, {
              ...se(t)
            }),
            s !== false && d.jsx(Gh, {
              ...se(s)
            }),
            n !== false && d.jsx(Cn, {
              makeDefault: true,
              minDistance: 0.2,
              ...se(n),
              rayModel: o === false ? false : {
                maxLength: 0.2,
                ...se(o)
              }
            }),
            i !== false && d.jsx(hl, {
              ...se(i)
            })
          ]
        })
      ]
    });
  }
  function Vh(r) {
    return d.jsx(Cn, {
      ...r,
      rayModel: false
    });
  }
  function Yh(r) {
    return d.jsx(Cn, {
      ...r,
      rayModel: false
    });
  }
  function qh(r) {
    return d.jsx(Cn, {
      ...r,
      cursorModel: false,
      rayModel: false
    });
  }
  function hl(r) {
    const e = p.useContext(it);
    if (e == null) throw new Error("DefaultXRInputSourceRayPointer can only be used inside a XRInputSource");
    const t = p.useRef(null), n = p.useRef(null), s = p.useMemo(() => yh(), []), i = Dh(n, e, {
      ...r,
      linePoints: s,
      filter: gh(r)
    }, "teleport");
    si(i, e.inputSource, "select", e.events);
    const o = r.rayModel, a = r.cursorModel, l = W((u) => u.scene), c = p.useRef(null);
    return X((u, f) => {
      c.current != null && (c.current.visible = i.getEnabled() && i.getButtonsDown().size > 0);
      const h = n.current, m = t.current;
      h == null || m == null || ph(m, h, f * 1e3);
    }), d.jsxs(d.Fragment, {
      children: [
        d.jsx(Me, {
          ref: t,
          space: "target-ray-space"
        }),
        Ys(d.jsxs("group", {
          ref: n,
          children: [
            o !== false && d.jsx(kh, {
              linePoints: s,
              pointer: i,
              opacity: mr,
              ...se(o)
            }),
            a !== false && d.jsx(Cr, {
              ref: c,
              pointer: i,
              opacity: mr,
              ...se(a)
            })
          ]
        }), l)
      ]
    });
  }
  function se(r) {
    if (r !== true) return r;
  }
  function $h() {
    return Q((r) => r.visibilityState);
  }
  function Pn(r, e) {
    const t = p.useRef(e);
    t.current = e;
    const [n, s] = p.useMemo(() => {
      let i;
      return [
        (o) => {
          let a = false;
          return typeof navigator > "u" || navigator.xr == null ? (i = false, () => {
          }) : (navigator.xr.isSessionSupported(r).then((l) => {
            i = l, !a && o();
          }).catch((l) => {
            var _a2;
            a || ((_a2 = t.current) == null ? void 0 : _a2.call(t, l));
          }), () => a = true);
        },
        () => i
      ];
    }, [
      r
    ]);
    return p.useSyncExternalStore(n, s);
  }
  let Zh = 0;
  const Co = /* @__PURE__ */ new Map();
  function _r(r) {
    let e = Co.get(r);
    return e == null && Co.set(r, e = Zh++), e;
  }
  function Qh({ children: r }) {
    const e = Q((o) => o.originReferenceSpace), t = Q((o) => o.origin), n = $h() === "visible", s = st(), i = p.useMemo(() => Object.assign({}, s, {
      getState() {
        return {
          ...s.getState(),
          scene: t
        };
      }
    }), [
      t,
      s
    ]);
    return t == null || e == null ? null : d.jsx(d.Fragment, {
      children: Xc.createPortal(d.jsx(Uc.Provider, {
        value: s,
        children: d.jsxs(An.Provider, {
          value: e,
          children: [
            d.jsxs("group", {
              matrixAutoUpdate: false,
              visible: n,
              children: [
                d.jsx(Kh, {}),
                d.jsx(Jh, {}),
                d.jsx(ep, {}),
                d.jsx(tp, {}),
                d.jsx(np, {})
              ]
            }),
            r
          ]
        })
      }), i, null)
    });
  }
  function Kh() {
    const r = Q((t) => t.inputSourceStates.filter((n) => n.type === "controller"), In);
    let e = Q((t) => t.controller);
    return e === false ? null : d.jsx(d.Fragment, {
      children: r.map((t) => {
        const n = Ft(e, t.inputSource.handedness, {});
        return n === false ? null : d.jsx(it.Provider, {
          value: t,
          children: d.jsx(Me, {
            space: "target-ray-space",
            children: d.jsx(p.Suspense, {
              children: typeof n == "function" ? d.jsx(n, {}) : d.jsx(Bh, {
                ...n
              })
            })
          })
        }, t.id);
      })
    });
  }
  function Jh() {
    const r = Q((t) => t.inputSourceStates.filter((n) => n.type === "hand"), In), e = Q((t) => t.hand);
    return e === false ? null : d.jsx(d.Fragment, {
      children: r.map((t) => {
        const n = Ft(e, t.inputSource.handedness, {});
        return n === false ? null : d.jsx(it.Provider, {
          value: t,
          children: d.jsx(Me, {
            space: "target-ray-space",
            children: d.jsx(p.Suspense, {
              children: typeof n == "function" ? d.jsx(n, {}) : d.jsx(Wh, {
                ...n
              })
            })
          })
        }, _r(t));
      })
    });
  }
  function ep() {
    const r = Q((t) => t.inputSourceStates.filter((n) => n.type === "transientPointer"), In), e = Q((t) => t.transientPointer);
    return e === false ? null : d.jsx(d.Fragment, {
      children: r.map((t) => {
        const n = Ft(e, t.inputSource.handedness, {});
        return n === false ? null : d.jsx(it.Provider, {
          value: t,
          children: d.jsx(Me, {
            space: "target-ray-space",
            children: d.jsx(p.Suspense, {
              children: typeof n == "function" ? d.jsx(n, {}) : d.jsx(Vh, {
                ...n
              })
            })
          })
        }, _r(t));
      })
    });
  }
  function tp() {
    const r = Q((t) => t.inputSourceStates.filter((n) => n.type === "gaze"), In), e = Q((t) => t.gaze);
    return e === false ? null : d.jsx(d.Fragment, {
      children: r.map((t) => d.jsx(it.Provider, {
        value: t,
        children: d.jsx(Me, {
          space: "target-ray-space",
          children: d.jsx(p.Suspense, {
            children: typeof e == "function" ? d.jsx(e, {}) : d.jsx(Yh, {
              ...pl(e)
            })
          })
        })
      }, _r(t)))
    });
  }
  function np() {
    const r = Q((t) => t.inputSourceStates.filter((n) => n.type === "screenInput"), In), e = Q((t) => t.screenInput);
    return e === false ? null : d.jsx(d.Fragment, {
      children: r.map((t) => d.jsx(it.Provider, {
        value: t,
        children: d.jsx(Me, {
          space: "target-ray-space",
          children: d.jsx(p.Suspense, {
            children: typeof e == "function" ? d.jsx(e, {}) : d.jsx(qh, {
              ...pl(e)
            })
          })
        })
      }, _r(t)))
    });
  }
  function pl(r) {
    if (r !== true) return r;
  }
  function rp(r) {
    return Bd(r);
  }
  function sp({ children: r, store: e }) {
    e.setWebXRManager(W((n) => n.gl.xr));
    const t = st();
    return p.useEffect(() => {
      let n;
      return e.subscribe((s, i) => {
        if (s.session !== i.session) {
          if (s.session != null) {
            const { camera: o, gl: a } = t.getState();
            n = o, t.setState({
              camera: a.xr.getCamera()
            });
            return;
          }
          n != null && t.setState({
            camera: n
          });
        }
      });
    }, [
      t,
      e
    ]), X((n, s, i) => e.onBeforeFrame(n.scene, n.camera, i), -1e3), X(() => e.onBeforeRender()), d.jsx(ul.Provider, {
      value: e,
      children: d.jsxs(ip, {
        children: [
          d.jsx(Qh, {}),
          r
        ]
      })
    });
  }
  function ip({ children: r }) {
    const e = Lr(), t = p.useMemo(() => new tl(true), []);
    return p.useEffect(() => $f(e, (n) => t.setEnabled(n, {
      timeStamp: performance.now()
    })), [
      e,
      t
    ]), X((n) => t.move(n.scene, {
      timeStamp: performance.now()
    }), -50), d.jsx(ni.Provider, {
      value: t,
      children: r
    });
  }
  function Lr() {
    const r = p.useContext(ul);
    if (r == null) throw new Error("XR features can only be used inside the <XR> component");
    return r;
  }
  function Q(r = (t) => t, e) {
    return ri(Lr(), r, e);
  }
  function _o(r, e) {
    return Q((t) => t.inputSourceStates.find((n) => n.type === r && (e == null || n.inputSource.handedness === e)));
  }
  function et(r) {
    const e = p.useContext(it);
    if (e == null) throw new Error("useXRInputSourceStateContext() can only be used inside the xr store config");
    if (r != null && e.type != r) throw new Error(`useXRInputSourceStateContext(${r}) can not be used inside a component for input type "${e.type}"`);
    return e;
  }
  const Me = p.forwardRef(({ space: r, children: e }, t) => {
    const n = p.useRef(null), s = typeof r == "string" ? ml(r) : r;
    p.useImperativeHandle(t, () => n.current, []), ap(n, s);
    const i = p.useCallback((o) => {
      o != null && (o.transformReady = false, o.visible = false), n.current = o;
    }, []);
    return d.jsx("group", {
      xrSpace: s,
      matrixAutoUpdate: false,
      ref: i,
      children: s && d.jsx(An.Provider, {
        value: s,
        children: e
      })
    });
  });
  function ml(r) {
    var _a2;
    switch (r) {
      case "grip-space":
        return et().inputSource.gripSpace;
      case "target-ray-space":
        return et().inputSource.targetRaySpace;
      case "wrist":
      case "thumb-metacarpal":
      case "thumb-phalanx-proximal":
      case "thumb-phalanx-distal":
      case "thumb-tip":
      case "index-finger-metacarpal":
      case "index-finger-phalanx-proximal":
      case "index-finger-phalanx-intermediate":
      case "index-finger-phalanx-distal":
      case "index-finger-tip":
      case "middle-finger-metacarpal":
      case "middle-finger-phalanx-proximal":
      case "middle-finger-phalanx-intermediate":
      case "middle-finger-phalanx-distal":
      case "middle-finger-tip":
      case "ring-finger-metacarpal":
      case "ring-finger-phalanx-proximal":
      case "ring-finger-phalanx-intermediate":
      case "ring-finger-phalanx-distal":
      case "ring-finger-tip":
      case "pinky-finger-metacarpal":
      case "pinky-finger-phalanx-proximal":
      case "pinky-finger-phalanx-intermediate":
      case "pinky-finger-phalanx-distal":
      case "pinky-finger-tip":
        return et("hand").inputSource.hand.get(r);
      case "root":
      case "hips":
      case "spine-lower":
      case "spine-middle":
      case "spine-upper":
      case "chest":
      case "neck":
      case "head":
      case "left-shoulder":
      case "left-scapula":
      case "left-arm-upper":
      case "left-arm-lower":
      case "left-hand-wrist-twist":
      case "right-shoulder":
      case "right-scapula":
      case "right-arm-upper":
      case "right-arm-lower":
      case "right-hand-wrist-twist":
      case "left-hand-palm":
      case "left-hand-wrist":
      case "left-hand-thumb-metacarpal":
      case "left-hand-thumb-phalanx-proximal":
      case "left-hand-thumb-phalanx-distal":
      case "left-hand-thumb-tip":
      case "left-hand-index-metacarpal":
      case "left-hand-index-phalanx-proximal":
      case "left-hand-index-phalanx-intermediate":
      case "left-hand-index-phalanx-distal":
      case "left-hand-index-tip":
      case "left-hand-middle-metacarpal":
      case "left-hand-middle-phalanx-proximal":
      case "left-hand-middle-phalanx-intermediate":
      case "left-hand-middle-phalanx-distal":
      case "left-hand-middle-tip":
      case "left-hand-ring-metacarpal":
      case "left-hand-ring-phalanx-proximal":
      case "left-hand-ring-phalanx-intermediate":
      case "left-hand-ring-phalanx-distal":
      case "left-hand-ring-tip":
      case "left-hand-little-metacarpal":
      case "left-hand-little-phalanx-proximal":
      case "left-hand-little-phalanx-intermediate":
      case "left-hand-little-phalanx-distal":
      case "left-hand-little-tip":
      case "right-hand-palm":
      case "right-hand-wrist":
      case "right-hand-thumb-metacarpal":
      case "right-hand-thumb-phalanx-proximal":
      case "right-hand-thumb-phalanx-distal":
      case "right-hand-thumb-tip":
      case "right-hand-index-metacarpal":
      case "right-hand-index-phalanx-proximal":
      case "right-hand-index-phalanx-intermediate":
      case "right-hand-index-phalanx-distal":
      case "right-hand-index-tip":
      case "right-hand-middle-metacarpal":
      case "right-hand-middle-phalanx-proximal":
      case "right-hand-middle-phalanx-intermediate":
      case "right-hand-middle-phalanx-distal":
      case "right-hand-middle-tip":
      case "right-hand-ring-metacarpal":
      case "right-hand-ring-phalanx-proximal":
      case "right-hand-ring-phalanx-intermediate":
      case "right-hand-ring-phalanx-distal":
      case "right-hand-ring-tip":
      case "right-hand-little-metacarpal":
      case "right-hand-little-phalanx-proximal":
      case "right-hand-little-phalanx-intermediate":
      case "right-hand-little-phalanx-distal":
      case "right-hand-little-tip":
      case "left-upper-leg":
      case "left-lower-leg":
      case "left-foot-ankle-twist":
      case "left-foot-ankle":
      case "left-foot-subtalar":
      case "left-foot-transverse":
      case "left-foot-ball":
      case "right-upper-leg":
      case "right-lower-leg":
      case "right-foot-ankle-twist":
      case "right-foot-ankle":
      case "right-foot-subtalar":
      case "right-foot-transverse":
      case "right-foot-ball":
        return (_a2 = Q((s) => s.body)) == null ? void 0 : _a2.get(r);
    }
    if (r == null) {
      const s = p.useContext(An);
      if (s == null) throw new Error("XR objects must be placed inside the XROrigin");
      return s;
    }
    const [e, t] = p.useState(void 0), n = Q((s) => s.session);
    return p.useEffect(() => {
      if (n == null) return;
      let s = false;
      return n.requestReferenceSpace(r).then((i) => {
        s || t(i);
      }), () => void (s = true);
    }, [
      n,
      r
    ]), e;
  }
  function op(r) {
    const e = p.useContext(An), t = Q((n) => e ?? n.originReferenceSpace);
    return p.useMemo(() => r == null || t == null ? void 0 : sd(r, t), [
      r,
      t
    ]);
  }
  function ap(r, e, t) {
    const n = op(e);
    X((s, i, o) => {
      r.current != null && (r.current.visible = r.current.transformReady = (n == null ? void 0 : n(r.current.matrix, o)) ?? false);
    }, -100);
  }
  p.forwardRef(({ mesh: r, ...e }, t) => {
    const n = lp(r);
    return d.jsx("mesh", {
      ref: t,
      geometry: n,
      ...e
    });
  });
  function lp(r, e = true) {
    const [t, n] = p.useState(Po(r, void 0));
    return X(() => n((s) => Po(r, s))), p.useEffect(() => {
      if (e) return () => t.dispose();
    }, [
      t
    ]), t;
  }
  p.forwardRef(({ plane: r, ...e }, t) => {
    const n = cp(r);
    return d.jsx("mesh", {
      ref: t,
      geometry: n,
      ...e
    });
  });
  function cp(r, e = true) {
    const [t, n] = p.useState(To(r, void 0));
    return X(() => n((s) => To(r, s))), p.useEffect(() => {
      if (e) return () => t.dispose();
    }, [
      t
    ]), t;
  }
  const up = p.forwardRef(({ children: r, disabled: e, ...t }, n) => {
    const s = W((a) => a.gl.xr.getCamera()), i = p.useRef(null), o = Q((a) => a.originReferenceSpace);
    return p.useImperativeHandle(n, () => i.current, []), p.useEffect(() => {
      const a = i.current;
      if (!(a == null || e)) return a.add(s), () => void a.remove(s);
    }, [
      e,
      s
    ]), d.jsx("group", {
      ref: i,
      ...t,
      children: d.jsx(An.Provider, {
        value: o,
        children: r
      })
    });
  });
  function fp(r, e, t) {
    const n = p.useRef(void 0);
    dp(e, t, p.useCallback((s) => n.current = s, [])), X((s, i, o) => {
      r == null || o == null || n.current == null || r(o.getHitTestResults(n.current.source), n.current.getWorldMatrix);
    });
  }
  function dp(r, e, t) {
    const n = Lr(), s = ri(n, (i) => i.session);
    p.useEffect(() => {
      if (s == null) return;
      let i, o = false;
      const a = r instanceof XRSpace || typeof r == "string" ? r : r == null ? void 0 : r.current;
      if (a != null) return vh(n, s, a, e).then((l) => {
        o || (i = l, t(l));
      }), () => {
        t(void 0), o = true, i == null ? void 0 : i.source.cancel();
      };
    }, [
      s,
      n,
      r,
      e,
      t
    ]);
  }
  p.forwardRef(({ trackableType: r, onResults: e, space: t, ...n }, s) => {
    const i = p.useRef(null);
    return p.useImperativeHandle(s, () => i.current), fp(e, t ?? i, r), d.jsx("group", {
      ...n,
      ref: i
    });
  });
  p.forwardRef((r, e) => {
    const t = Q((i) => i.domOverlayRoot), { In: n, Out: s } = p.useMemo(Zu, []);
    return p.useEffect(() => {
      if (t == null) return;
      const i = Gc.createRoot(t);
      return i.render(d.jsx(s, {})), () => i.unmount();
    }, [
      t,
      s
    ]), d.jsx(n, {
      children: d.jsx("div", {
        ...r,
        ref: e
      })
    });
  });
  p.forwardRef(({ src: r, shape: e, colorFormat: t, depthFormat: n, layout: s, mipLevels: i, renderOrder: o = 0, blendTextureSourceAlpha: a, centralAngle: l, centralHorizontalAngle: c, chromaticAberrationCorrection: u, lowerVerticalAngle: f, quality: h, upperVerticalAngle: m, invertStereo: g, pixelWidth: v, pixelHeight: x, dpr: S, renderTargetRef: R, layerEntryRef: M, ...I }, O) => {
    const _ = p.useRef(null), L = W((F) => F.gl), C = Lr(), E = {
      blendTextureSourceAlpha: a,
      centralAngle: l,
      centralHorizontalAngle: c,
      chromaticAberrationCorrection: u,
      lowerVerticalAngle: f,
      quality: h,
      upperVerticalAngle: m
    }, w = p.useRef(E);
    w.current = E;
    const T = p.useRef(o);
    T.current = o;
    const ne = Q((F) => F.originReferenceSpace);
    return p.useEffect(() => {
      if (_.current == null || ne == null) return;
      const F = r ?? (R.current = ll(v, x, S)), K = oh(F, C.getState(), ne, L.xr, _.current, {
        colorFormat: t,
        depthFormat: n,
        invertStereo: g,
        layout: s,
        mipLevels: i,
        shape: e
      }, w.current);
      if (K == null) return;
      const re = M.current = {
        layer: K,
        renderOrder: T.current,
        object3D: _.current
      };
      if (C.addLayerEntry(re), F instanceof HTMLVideoElement || F instanceof Tn) return () => {
        C.removeLayerEntry(re), K.destroy();
      };
      const ye = ch(L, C, K, F);
      return () => {
        C.removeLayerEntry(re), ye(), K.destroy();
      };
    }, [
      ne,
      t,
      n,
      g,
      M,
      s,
      i,
      x,
      v,
      S,
      R,
      L,
      e,
      r,
      C
    ]), M.current != null && (M.current.renderOrder = o), M.current != null && ei(M.current.layer, w.current), X(() => {
      M.current == null || _.current == null || dh(C.getState(), M.current.layer, w.current.centralAngle, _.current);
    }), p.useImperativeHandle(O, () => _.current, []), d.jsx("mesh", {
      ...I,
      renderOrder: -1 / 0,
      ref: _,
      children: d.jsx("meshBasicMaterial", {
        colorWrite: false
      })
    });
  });
  p.forwardRef(({ src: r, renderTargetRef: e, dpr: t, renderOrder: n, pixelWidth: s, pixelHeight: i, ...o }, a) => {
    const l = p.useRef(null);
    return p.useEffect(() => {
      if (l.current == null) return;
      const c = r ?? (e.current = ll(s, i, t)), u = uh(c);
      return l.current.map = u, l.current.needsUpdate = true, () => {
        if (c instanceof Tn) {
          c.dispose();
          return;
        }
        u.dispose();
      };
    }, [
      r,
      s,
      i,
      t,
      e
    ]), d.jsx("mesh", {
      ref: a,
      ...o,
      children: d.jsx("meshBasicMaterial", {
        ref: l,
        toneMapped: false
      })
    });
  });
  new La();
  new La();
  function hp({ batchEvents: r, clickThesholdMs: e, clickThresholdMs: t, contextMenuButton: n, customSort: s, dblClickThresholdMs: i, filter: o, forwardPointerCapture: a, intersectEveryFrame: l, pointerTypePrefix: c }) {
    const u = W((g) => g.gl.domElement), f = W((g) => g.frameloop === "always"), h = W((g) => g.camera), m = W((g) => g.scene);
    return p.useEffect(() => {
      const { destroy: g, update: v } = Fd(u, () => h, m, {
        batchEvents: r ?? f,
        clickThesholdMs: e,
        clickThresholdMs: t,
        contextMenuButton: n,
        customSort: s,
        dblClickThresholdMs: i,
        filter: o,
        forwardPointerCapture: a,
        intersectEveryFrame: l,
        pointerTypePrefix: c
      }), x = Bc(v);
      return () => {
        x(), g();
      };
    }, [
      u,
      h,
      m,
      f,
      r,
      t,
      e,
      n,
      s,
      i,
      o,
      a,
      l,
      c
    ]), null;
  }
  const pp = () => ({
    enabled: false,
    priority: 0
  }), gl = p.forwardRef(({ store: r, mode: e, onError: t, children: n, ...s }, i) => {
    const o = ri(r, (l) => l.session), a = Pn(e, t);
    return d.jsx("button", {
      ref: i,
      ...s,
      onClick: () => o != null ? o.end() : r.enterXR(e).catch(t),
      children: typeof n == "function" ? n(a ? o != null ? "entered" : "exited" : "unsupported") : n
    });
  });
  p.forwardRef((r, e) => d.jsx(gl, {
    ref: e,
    mode: "immersive-ar",
    ...r
  }));
  p.forwardRef((r, e) => d.jsx(gl, {
    ref: e,
    mode: "immersive-vr",
    ...r
  }));
  const mp = {
    onBlur: "pointerleave",
    onHover: "pointerenter",
    onMove: "pointermove",
    onSelect: {
      type: "click",
      filter: (r) => r.pointerType === "ray"
    },
    onSelectEnd: {
      type: "pointerup",
      filter: (r) => r.pointerType === "ray"
    },
    onSelectStart: {
      type: "pointerdown",
      filter: (r) => r.pointerType === "ray"
    },
    onSqueeze: {
      type: "click",
      filter: (r) => r.pointerType === "grab"
    },
    onSqueezeEnd: {
      type: "pointerup",
      filter: (r) => r.pointerType === "grab"
    },
    onSqueezeStart: {
      type: "pointerdown",
      filter: (r) => r.pointerType === "grab"
    }
  };
  function De(r, e, t) {
    const n = p.useRef(t);
    n.current = t, p.useEffect(() => {
      const { current: s } = r;
      if (s == null) return;
      const i = mp[e], o = typeof i == "string" ? (l) => {
        var _a2;
        return (_a2 = n.current) == null ? void 0 : _a2.call(n, {
          intersection: l,
          intersections: [
            l
          ],
          target: l.pointerState
        });
      } : (l) => {
        var _a2;
        l instanceof ae && !i.filter(l) || ((_a2 = n.current) == null ? void 0 : _a2.call(n, {
          intersection: l,
          intersections: [
            l
          ],
          target: l.pointerState
        }));
      }, a = typeof i == "string" ? i : i.type;
      return s.addEventListener(a, o), () => s.removeEventListener(a, o);
    }, [
      r,
      e
    ]);
  }
  const gp = p.forwardRef(({ onHover: r, onBlur: e, onSelectStart: t, onSelectEnd: n, onSelect: s, onSqueezeStart: i, onSqueezeEnd: o, onSqueeze: a, onMove: l, children: c }, u) => {
    const f = p.useRef(null);
    return p.useImperativeHandle(u, () => f.current), De(f, "onHover", r), De(f, "onBlur", e), De(f, "onSelectStart", t), De(f, "onSelectEnd", n), De(f, "onSelect", s), De(f, "onSqueezeStart", i), De(f, "onSqueezeEnd", o), De(f, "onSqueeze", a), De(f, "onMove", l), d.jsx("group", {
      ref: f,
      children: c
    });
  });
  p.forwardRef(function({ onSelectStart: e, onSelectEnd: t, children: n, ...s }, i) {
    const o = p.useRef(void 0), a = p.useRef(null), l = p.useMemo(() => new q(), []);
    return p.useImperativeHandle(i, () => a.current), X(() => {
      const c = o.current, u = a.current;
      !u || !c || (u.applyMatrix4(l), c.updateWorldMatrix(true, false), u.applyMatrix4(c.matrixWorld), u.updateMatrixWorld(), l.copy(c.matrixWorld).invert());
    }), d.jsx(gp, {
      ref: a,
      onSelectStart: (c) => {
        Wf(c.target) && (c.target.type === "controller" || c.target.type === "hand") && c.target.object != null && (o.current = c.target.object, c.target.object.updateWorldMatrix(true, false), l.copy(c.target.object.matrixWorld).invert(), e == null ? void 0 : e(c));
      },
      onSelectEnd: (c) => {
        c.target.controller === o.current && (o.current = void 0), t == null ? void 0 : t(c);
      },
      ...s,
      children: n
    });
  });
  const yp = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/pinball_machine-DYmLIFvb.glb", xp = () => {
    const { debugMode: r } = ja(), e = p.useRef(null), t = p.useRef(A.Explore), n = () => {
      const s = e.current;
      if (!s) return;
      const i = s.id.includes("Nintendo") || s.id.includes("057e"), o = {
        [Z.Left]: s.buttons[6] > 0.25,
        [Z.Right]: s.buttons[7] > 0.25,
        [Z.Up]: s.axes[1] < -0.1,
        [Z.Down]: s.axes[1] > 0.1,
        [Z.A]: !!s.buttons[i ? 1 : 0],
        [Z.B]: !!s.buttons[i ? 0 : 1],
        [Z.Start]: !!s.buttons[9]
      };
      me.getState().setState(o);
    };
    return X(() => {
      const i = navigator.getGamepads()[0];
      i && (e.current = {
        id: i.id,
        axes: [
          ...i.axes
        ],
        buttons: i.buttons.map((o) => o.value)
      }, n());
    }, ru.inputs), p.useEffect(() => {
      const s = (a) => {
        switch (a) {
          case "ArrowLeft":
          case "KeyA":
          case "ShiftLeft":
          case "KeyZ":
            return Z.Left;
          case "ArrowRight":
          case "ShiftRight":
          case "KeyD":
          case "Slash":
            return Z.Right;
          case "ArrowUp":
          case "KeyW":
            return Z.Up;
          case "ArrowDown":
          case "Space":
          case "KeyS":
            return Z.Down;
          case "KeyX":
            return r ? Z.Debug : null;
          case "KeyC":
            return r ? Z.Replay : null;
          default:
            return null;
        }
      }, i = (a) => {
        if (a.repeat || t.current !== A.Pinball) return;
        const l = s(a.code);
        l && me.getState().setButtonDown(l);
      }, o = (a) => {
        const l = s(a.code);
        l && me.getState().setButtonUp(l);
      };
      return window.addEventListener("keydown", i), window.addEventListener("keyup", o), () => {
        window.removeEventListener("keydown", i), window.removeEventListener("keyup", o);
      };
    }, [
      r
    ]), p.useEffect(() => {
      const s = B.subscribe((i) => i.menuMode, (i) => {
        t.current = i;
      }, {
        fireImmediately: true
      });
      return () => {
        s();
      };
    }, []), null;
  };
  function bp() {
    const r = Wc(), e = p.useRef(null), t = p.useRef(null);
    p.useEffect(() => {
      const c = (f) => {
        f ? (e.current && (e.current.visible = false), t.current && (t.current.scale.set(0.34, 0.2, 0.2), t.current.position.x = 0.15)) : t.current && (t.current.scale.set(0.22, 0.2, 0.2), t.current.position.x = 0.08);
      };
      return c(Se.getState().plungeDoorClosed), Se.subscribe((f) => f.plungeDoorClosed, c);
    }, []);
    const n = (c) => {
      me.getState().setButtonDown(Z.Left);
    }, s = (c) => {
      me.getState().setButtonUp(Z.Left);
    }, i = (c) => {
      me.getState().setButtonDown(Z.Right);
    }, o = (c) => {
      me.getState().setButtonUp(Z.Right);
    }, a = (c) => {
      me.getState().setButtonDown(Z.Down);
    }, l = (c) => {
      me.getState().setButtonUp(Z.Down);
    };
    return r && d.jsxs(d.Fragment, {
      children: [
        d.jsxs("mesh", {
          scale: [
            0.25,
            0.2,
            0.2
          ],
          position: [
            -0.15,
            0,
            0.5
          ],
          onPointerDown: n,
          onPointerUp: s,
          onPointerCancel: s,
          visible: false,
          layers: J,
          children: [
            d.jsx("boxGeometry", {}),
            d.jsx("meshBasicMaterial", {
              color: "red"
            })
          ]
        }),
        d.jsxs("mesh", {
          ref: t,
          scale: [
            0.22,
            0.2,
            0.2
          ],
          position: [
            0.08,
            0,
            0.5
          ],
          onPointerDown: i,
          onPointerUp: o,
          onPointerCancel: o,
          visible: false,
          layers: J,
          children: [
            d.jsx("boxGeometry", {}),
            d.jsx("meshBasicMaterial", {
              color: "blue"
            })
          ]
        }),
        d.jsxs("mesh", {
          ref: e,
          scale: [
            0.12,
            0.2,
            0.5
          ],
          position: [
            0.26,
            0,
            0.5
          ],
          onPointerDown: a,
          onPointerUp: l,
          onPointerCancel: l,
          visible: false,
          layers: J,
          children: [
            d.jsx("boxGeometry", {}),
            d.jsx("meshBasicMaterial", {
              color: "green"
            })
          ]
        })
      ]
    });
  }
  const vp = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/cabinet-DFOID0jP.glb", is = new q(), wp = new q(), Sp = {
    x: "XYZ",
    y: "YXZ",
    z: "ZXY"
  };
  function ii(r, e, t, n, s, i) {
    is.copy(t), s != null && is.premultiply(wp.copy(s).invert());
    const o = new b(), a = new N(), l = new b();
    is.decompose(o, a, l), Ho(o, n.initialTargetPosition, i.translate ?? true);
    let c;
    const u = i.rotate ?? true;
    if (u === false) a.copy(n.initialTargetQuaternion), c = n.initialTargetRotation.clone();
    else if (Array.isArray(u) || u === true || typeof u != "string" && !Array.isArray(u) && u.x === true && u.y === true && u.z === true) c = new Y().setFromQuaternion(a, n.initialTargetRotation.order);
    else if (typeof u == "string") {
      const f = Sp[u];
      c = new Y().setFromQuaternion(a, f);
      for (const h of f) {
        const m = h.toLowerCase();
        m !== u && (c[m] = 0);
      }
      c.order = n.initialTargetRotation.order, a.setFromEuler(c);
    } else c = Mp(a, n.initialTargetRotation, u);
    return (typeof i.scale != "object" || !i.scale.uniform) && Ho(l, n.initialTargetScale, i.scale ?? true), {
      pointerAmount: e,
      position: o,
      quaternion: a,
      rotation: c,
      scale: l,
      time: r
    };
  }
  const wt = new rt(), St = new b(), Pt = new b(), Pp = new b(), Tp = new N();
  function Lo(r, e, t) {
    return wt.normal.copy(r), wt.constant = 0, Rp(St, wt.normal), Pt.copy(St), Pt.applyQuaternion(Tp.copy(e).invert().premultiply(t)), wt.projectPoint(St, St).normalize(), wt.projectPoint(Pt, Pt).normalize(), (Pp.crossVectors(St, wt.normal).dot(Pt) < 0 ? 1 : -1) * St.angleTo(Pt);
  }
  function Rp(r, e) {
    if (e.x === 0) {
      r.set(1, 0, 0);
      return;
    }
    if (e.y === 0) {
      r.set(0, 1, 0);
      return;
    }
    if (e.z === 0) {
      r.set(0, 0, 1);
      return;
    }
    r.set(-e.y, e.x, 0);
  }
  function Mp(r, e, t) {
    let n = "", s = "";
    for (const a of e.order) t[a.toLowerCase()] === false ? s += a : n += a;
    const i = n + s, o = new Y().setFromQuaternion(r, i);
    for (const a of i) {
      const l = a.toLowerCase();
      o[l] = ir(l, o[l], e[l], t);
    }
    return r.setFromEuler(o), o;
  }
  const os = new b(), jo = new rt(), Ep = new b(), Ap = new b();
  function Ho(r, e, t) {
    if (Array.isArray(t)) {
      switch (t.length) {
        case 0:
          r.copy(e);
          return;
        case 1:
          r.sub(e), yl(r, t[0] instanceof b ? t[0] : os.fromArray(t[0])), r.add(e);
          return;
        case 2:
          os.crossVectors(t[0] instanceof b ? t[0] : Ep.fromArray(t[0]), t[1] instanceof b ? t[1] : Ap.fromArray(t[1])), jo.setFromNormalAndCoplanarPoint(os, e), jo.projectPoint(r, r);
          return;
      }
      return;
    }
    r.x = ir("x", r.x, e.x, t), r.y = ir("y", r.y, e.y, t), r.z = ir("z", r.z, e.z, t);
  }
  function ir(r, e, t, n) {
    if (typeof n == "boolean") return n ? e : t;
    if (typeof n == "string") return n === r ? e : t;
    const s = n[r];
    return s === false ? t : Array.isArray(s) ? Je(e, ...s) : e;
  }
  function zt(r = true, e, t, n, s, i) {
    if (r) {
      switch (e.length) {
        case 0:
        case 3:
          return;
        case 1:
          Op(t, ...e, n, s, i);
          return;
        case 2:
          Ip(...e, t, n, s, i);
          return;
      }
      throw new Error(`space cannot be ${e.length}D but received (${e.map((o) => o.toArray().join("/")).join("; ")})`);
    }
  }
  const or = {
    x: new b(1, 0, 0),
    y: new b(0, 1, 0),
    z: new b(0, 0, 1)
  };
  function kt(r, e, t, n, s) {
    if (n !== false) {
      if (n === true) {
        r[0] = or.x, r[1] = or.y, r[2] = or.z;
        return;
      }
      if (typeof n == "string") {
        sn(r, e, t, n, s);
        return;
      }
      if (Array.isArray(n)) {
        for (const i of n) sn(r, e, t, i, s);
        return;
      }
      n.x !== false && sn(r, e, t, "x", s), n.y !== false && sn(r, e, t, "y", s), n.z !== false && sn(r, e, t, "z", s);
    }
  }
  const lt = new N(), Bn = new Y(), Te = new b(), Tt = new b(), ct = new b();
  function sn(r, e, t, n, s) {
    if (Array.isArray(n) ? Te.set(...n) : n instanceof b ? Te.copy(n) : Te.copy(or[n]), s === "translate") {
      Te.applyQuaternion(e), Wn(r, Te);
      return;
    }
    if (s === "scale") {
      Array.isArray(n) ? lt.identity() : lt.setFromEuler(t), lt.premultiply(e), Te.applyQuaternion(lt), Wn(r, Te);
      return;
    }
    if (Array.isArray(n)) Bn.set(0, 0, 0);
    else {
      Bn.copy(t);
      for (let i = 2; i >= 0; i--) {
        const o = t.order[i].toLowerCase();
        if (Bn[o] = 0, o === n) break;
      }
    }
    lt.setFromEuler(Bn).premultiply(e), Te.normalize(), Tt.set(0, 1, 0), Te.dot(Tt) > 0.99 && Tt.set(0, 0, 1), ct.crossVectors(Te, Tt).normalize(), Tt.copy(ct), ct.applyQuaternion(lt), Wn(r, ct), ct.crossVectors(Te, Tt).normalize(), ct.applyQuaternion(lt), Wn(r, ct);
  }
  const No = new b();
  function Wn(r, e) {
    if (r.length !== 3) {
      if (r.length === 0) {
        r.push(e.clone());
        return;
      }
      if (r.length === 1) {
        Math.abs(r[0].dot(e)) < 0.999 && r.push(e.clone());
        return;
      }
      No.crossVectors(r[0], r[1]), !(Math.abs(No.dot(e)) < 1e-3) && r.push(e.clone());
    }
  }
  const on = new rt(), as = new b(), mn = new b();
  function Ip(r, e, t, n, s, i) {
    as.crossVectors(r, e).normalize(), on.setFromNormalAndCoplanarPoint(as, t);
    const o = i == null ? 0 : Math.abs(as.dot(i));
    if (i == null || o < 0.01) {
      on.projectPoint(s, s);
      return;
    }
    const l = -on.distanceToPoint(n) / i.dot(on.normal);
    if (l < 0) {
      on.projectPoint(s, s);
      return;
    }
    mn.copy(s), s.copy(n).addScaledVector(i, l);
  }
  function Op(r, e, t, n, s) {
    const i = s == null ? 0 : 1 - Math.abs(e.dot(s));
    if (s == null || i < 1e-3) {
      Do(n, r, e);
      return;
    }
    mn.subVectors(t, r);
    const o = e.dot(s), a = e.dot(mn), l = s.dot(mn), c = 1 - o * o, u = (a - o * l) / c;
    if ((o * a - l) / c < 0) {
      Do(n, r, e);
      return;
    }
    mn.copy(n), n.copy(r).addScaledVector(e, u);
  }
  function Do(r, e, t) {
    r.sub(e), yl(r, t), r.add(e);
  }
  function yl(r, e) {
    const t = r.dot(e);
    r.copy(e).multiplyScalar(t);
  }
  const ls = new q(), Vn = new q(), Yn = new b(), Cp = new b(), ut = new N(), _p = new b(1, 1, 1), cs = [];
  function Lp(r, e, t, n, s) {
    return n == null ? ut.identity() : n.decompose(Yn, ut, Cp), cs.length = 0, kt(cs, ut, t.initialTargetRotation, s.translate ?? true, "translate"), Vn.makeRotationFromQuaternion(ut.copy(e.initialPointerWorldQuaternion).invert()).multiply(ls.makeTranslation(Yn.copy(e.initialPointerWorldPoint).negate())), t.initialTargetParentWorldMatrix != null && Vn.multiply(t.initialTargetParentWorldMatrix), zt(s.projectRays, cs, e.initialPointerWorldPoint, e.pointerWorldOrigin, Yn.copy(e.pointerWorldPoint), e.pointerWorldDirection), ut.copy(e.pointerWorldQuaternion), (s.rotate ?? true) === false && ut.copy(e.initialPointerWorldQuaternion), ls.compose(Yn, ut, _p).multiply(Vn).multiply(Vn.compose(t.initialTargetPosition, t.initialTargetQuaternion, t.initialTargetScale)), ii(r, 1, ls, t, n, s);
  }
  const Rt = new b(), an = new b(), ee = new b(), Ye = new b(), jp = new b(), Fo = new b(), Mt = new b(), zo = new q(), ln = new q(), qn = new q(), Ie = new N(), cn = new N(), Et = [];
  function Hp(r, e, t, n, s, i) {
    s == null ? Ie.identity() : s.decompose(ee, Ie, Ye), Et.length = 0, kt(Et, Ie, n.initialTargetRotation, i.translate ?? true, "translate"), kt(Et, Ie, n.initialTargetRotation, i.rotate ?? true, "rotate"), kt(Et, Ie, n.initialTargetRotation, i.scale ?? true, "scale"), zt(i.projectRays, Et, e.initialPointerWorldPoint, e.pointerWorldOrigin, ee.copy(e.pointerWorldPoint), e.pointerWorldDirection), zt(i.projectRays, Et, t.initialPointerWorldPoint, t.pointerWorldOrigin, Ye.copy(t.pointerWorldPoint), t.pointerWorldDirection), Rt.copy(t.initialPointerWorldPoint).sub(e.initialPointerWorldPoint), an.copy(Ye).sub(ee), ee.copy(Rt), n.prevTwoPointerDeltaRotation != null && ee.applyQuaternion(n.prevTwoPointerDeltaRotation), ee.normalize(), Ye.copy(an).normalize(), Ie.setFromUnitVectors(ee, Ye), n.prevTwoPointerDeltaRotation == null ? n.prevTwoPointerDeltaRotation = new N() : Ie.multiply(n.prevTwoPointerDeltaRotation), n.prevTwoPointerDeltaRotation.copy(Ie);
    const o = (Lo(Ye, e.prevPointerWorldQuaternion, e.pointerWorldQuaternion) + Lo(Ye, t.prevPointerWorldQuaternion, t.pointerWorldQuaternion)) * 0.5 + (n.prevAngle ?? 0);
    if (n.prevAngle = o, Ie.premultiply(cn.setFromAxisAngle(Ye, o)), qn.compose(n.initialTargetPosition, n.initialTargetQuaternion, n.initialTargetScale), n.initialTargetParentWorldMatrix != null && qn.premultiply(n.initialTargetParentWorldMatrix), typeof i.scale == "object" && (i.scale.uniform ?? false)) Mt.setScalar(an.length() / Rt.length());
    else {
      qn.decompose(jp, cn, Fo), ee.copy(Rt).applyQuaternion(cn.invert()).divide(Fo), ee.x = Math.abs(ee.x), ee.y = Math.abs(ee.y), ee.z = Math.abs(ee.z);
      const a = Math.max(...ee.toArray());
      ee.divideScalar(a), Mt.set(1, 1, 1), Mt.addScaledVector(ee, an.length() / Rt.length() - 1);
    }
    return zo.makeTranslation(ee.copy(an).multiplyScalar(0.5).add(e.pointerWorldPoint)).multiply(ln.makeRotationFromQuaternion(Ie)).multiply(ln.makeRotationFromQuaternion(cn.invert())).multiply(ln.makeScale(Mt.x, Mt.y, Mt.z)).multiply(ln.makeRotationFromQuaternion(cn.invert())).multiply(ln.makeTranslation(ee.copy(Rt).multiplyScalar(0.5).add(e.initialPointerWorldPoint).negate())).multiply(qn), ii(r, 2, zo, n, s, i);
  }
  const $ = new b(), be = new b(), us = new b(), qe = new b(), ft = new b(), ve = new N(), he = new N(), $e = new q(), Fe = new b(), At = [];
  function Np(r, e, t, n, s, i) {
    if (s == null ? ve.identity() : s.decompose($, ve, be), At.length = 0, i.translate === "as-scale" && kt(At, ve, t.initialTargetRotation, i.scale ?? true, "scale"), i.translate != "as-scale" && kt(At, ve, t.initialTargetRotation, i.rotate ?? true, "rotate"), $e.makeTranslation(t.initialTargetPosition), t.initialTargetParentWorldMatrix != null && $e.premultiply(t.initialTargetParentWorldMatrix), qe.setFromMatrixPosition($e), zt(i.projectRays, At, e.initialPointerWorldPoint, e.pointerWorldOrigin, qe, void 0), qe.negate().add(e.initialPointerWorldPoint), ft.setFromMatrixPosition(n), zt(i.projectRays, At, e.initialPointerWorldPoint, e.pointerWorldOrigin, ft, void 0), zt(i.projectRays, At, e.initialPointerWorldPoint, e.pointerWorldOrigin, be.copy(e.pointerWorldPoint), e.pointerWorldDirection), ft.negate().add(be), i.translate === "as-scale" ? ve.copy(t.initialTargetQuaternion) : ($.copy(qe), t.prevTranslateAsDeltaRotation != null && $.applyQuaternion(t.prevTranslateAsDeltaRotation), $.normalize(), be.copy(ft).normalize(), ve.setFromUnitVectors($, be), t.prevTranslateAsDeltaRotation == null ? t.prevTranslateAsDeltaRotation = new N() : ve.multiply(t.prevTranslateAsDeltaRotation), t.prevTranslateAsDeltaRotation.copy(ve), t.initialTargetParentWorldMatrix != null && (he.setFromRotationMatrix(t.initialTargetParentWorldMatrix), ve.multiply(he.normalize()), ve.premultiply(he.invert())), ve.multiply(t.initialTargetQuaternion)), i.translate === "as-rotate") Fe.set(1, 1, 1);
    else if (typeof i.scale == "object" && (i.scale.uniform ?? false)) Fe.setScalar(ft.length() / qe.length());
    else if (i.translate === "as-rotate-and-scale") {
      $e.compose(t.initialTargetPosition, t.initialTargetQuaternion, t.initialTargetScale), t.initialTargetParentWorldMatrix != null && $e.premultiply(t.initialTargetParentWorldMatrix), $e.decompose(be, he, us), $.copy(qe).applyQuaternion(he.invert()).divide(us), $.x = Math.abs($.x), $.y = Math.abs($.y), $.z = Math.abs($.z);
      const o = Math.max(...$.toArray());
      $.divideScalar(o), Fe.set(1, 1, 1), Fe.addScaledVector($, ft.length() / qe.length() - 1);
    } else t.initialTargetParentWorldMatrix != null ? (t.initialTargetParentWorldMatrix.decompose($, he, be), he.multiply(t.initialTargetQuaternion)) : he.copy(t.initialTargetQuaternion), $.copy(qe).applyQuaternion(he.invert()), s != null ? (s.decompose(be, he, us), he.multiply(t.initialTargetQuaternion)) : he.copy(t.initialTargetQuaternion), be.copy(ft).applyQuaternion(he.invert()), Fe.x = Math.abs($.x) < 1e-3 ? 1 : Math.abs(be.x / $.x), Fe.y = Math.abs($.y) < 1e-3 ? 1 : Math.abs(be.y / $.y), Fe.z = Math.abs($.z) < 1e-3 ? 1 : Math.abs(be.z / $.z);
    return Fe.multiply(t.initialTargetScale), $e.compose(t.initialTargetPosition, ve, Fe), ii(r, 1, $e, t, void 0, i);
  }
  class ko {
    constructor(e, t) {
      __publicField(this, "t1");
      __publicField(this, "t2");
      __publicField(this, "_position");
      __publicField(this, "_quaternion");
      __publicField(this, "_rotation");
      __publicField(this, "_scale");
      this.t1 = e, this.t2 = t;
    }
    get time() {
      return this.t1.time - this.t2.time;
    }
    get position() {
      return this._position ?? (this._position = this.t1.position.clone().sub(this.t2.position));
    }
    get quaternion() {
      return this._quaternion ?? (this._quaternion = this.t2.quaternion.clone().invert().premultiply(this.t1.quaternion));
    }
    get rotation() {
      return this._rotation ?? (this._rotation = new Y().setFromQuaternion(this.quaternion));
    }
    get scale() {
      return this._scale ?? (this._scale = this.t1.scale.clone().sub(this.t2.scale));
    }
  }
  class Dp {
    constructor(e) {
      __publicField(this, "cancel");
      __publicField(this, "previous");
      __publicField(this, "memo");
      __publicField(this, "event");
      __publicField(this, "initial");
      __publicField(this, "current");
      __publicField(this, "first");
      __publicField(this, "last");
      __publicField(this, "_delta");
      __publicField(this, "_offset");
      this.cancel = e;
    }
    start(e, t) {
      this.event = e, this.previous = void 0, this.current = t, this.initial = t, this.first = true, this.last = false, this.memo = void 0, this._delta = void 0, this._offset = void 0;
    }
    update(e, t) {
      this.event = e, this.previous = this.current, this.current = t, this.first = false, this.last = false, this._delta = void 0, this._offset = void 0;
    }
    end(e) {
      this.event = e, this.first = false, this.last = true, this._delta = void 0, this._offset = void 0;
    }
    get delta() {
      if (this.previous != null) return this._delta ?? (this._delta = new ko(this.current, this.previous));
    }
    get offset() {
      return this._offset ?? (this._offset = new ko(this.current, this.initial));
    }
  }
  function Xo(r, e) {
    if (r.details.type === "sphere") return false;
    if (r.details.type === "lines") {
      const { line: t } = r.details;
      return e.copy(t.end).sub(t.start).normalize(), true;
    }
    return r.details.type === "screen-ray" ? (e.copy(r.details.direction), true) : (e.set(0, 0, -1).applyQuaternion(r.pointerQuaternion), true);
  }
  const Uo = new b();
  class xl {
    constructor(e, t = () => ({})) {
      __publicField(this, "target");
      __publicField(this, "getOptions");
      __publicField(this, "outputState");
      __publicField(this, "latestMoveEvent");
      __publicField(this, "inputState", /* @__PURE__ */ new Map());
      __publicField(this, "capturedObjects", /* @__PURE__ */ new Map());
      __publicField(this, "initialTargetPosition", new b());
      __publicField(this, "initialTargetQuaternion", new N());
      __publicField(this, "initialTargetRotation", new Y());
      __publicField(this, "initialTargetScale", new b());
      __publicField(this, "initialTargetParentWorldMatrix");
      __publicField(this, "prevTwoPointerDeltaRotation");
      __publicField(this, "prevTranslateAsDeltaRotation");
      __publicField(this, "prevAngle");
      __publicField(this, "handlers", {
        onPointerDown: this.onPointerDown.bind(this),
        onPointerMove: this.onPointerMove.bind(this),
        onPointerUp: this.onPointerUp.bind(this)
      });
      this.target = e, this.getOptions = t, this.outputState = new Dp(this.cancel.bind(this));
    }
    firstOnPointer(e) {
      const t = this.getTarget();
      if (t == null) return;
      const n = Xo(e, Uo) ? Uo.clone() : void 0;
      e.intersection.details.type, this.inputState.set(e.pointerId, {
        pointerWorldDirection: n,
        pointerWorldPoint: e.point,
        pointerWorldOrigin: e.pointerPosition,
        pointerWorldQuaternion: e.pointerQuaternion,
        initialPointerWorldPoint: e.point.clone(),
        initialPointerWorldDirection: n == null ? void 0 : n.clone(),
        initialPointerWorldQuaternion: e.pointerQuaternion.clone(),
        prevPointerWorldQuaternion: e.pointerQuaternion
      }), this.save(), this.inputState.size === 1 && this.outputState.start(e, {
        pointerAmount: 1,
        time: e.timeStamp,
        position: this.initialTargetPosition.clone(),
        quaternion: this.initialTargetQuaternion.clone(),
        rotation: this.initialTargetRotation.clone(),
        scale: this.initialTargetScale.clone()
      }), this.outputState.memo = this.apply(t);
    }
    onPointerDown(e) {
      this.stopPropagation(e), this.capturePointer(e.pointerId, e.object) && this.firstOnPointer(e);
    }
    onPointerMove(e) {
      if (!this.capturedObjects.has(e.pointerId)) return;
      this.stopPropagation(e);
      const t = this.inputState.get(e.pointerId);
      if (t == null) {
        this.firstOnPointer(e);
        return;
      }
      this.latestMoveEvent = e, t.pointerWorldPoint = e.point, t.prevPointerWorldQuaternion = t.pointerWorldQuaternion, t.pointerWorldQuaternion = e.pointerQuaternion, t.pointerWorldOrigin = e.pointerPosition, t.pointerWorldDirection != null && Xo(e, t.pointerWorldDirection);
    }
    cancel() {
      if (this.capturedObjects.size === 0) return;
      for (const [t, n] of this.capturedObjects) n.releasePointerCapture(t);
      this.capturedObjects.clear(), this.inputState.clear(), this.outputState.end(void 0);
      const e = this.getTarget();
      e != null && this.apply(e);
    }
    onPointerUp(e) {
      this.capturedObjects.has(e.pointerId) && (this.stopPropagation(e), this.releasePointer(e.pointerId, e.object, e));
    }
    update(e) {
      var _a2, _b, _c2;
      const t = this.getTarget();
      if (t == null || this.inputState.size === 0 || this.latestMoveEvent == null && (this.getOptions().alwaysUpdate ?? false) === false) return;
      const n = this.getOptions();
      let s;
      if (n.translate === "as-rotate" || n.translate === "as-rotate-and-scale" || n.translate === "as-scale") {
        n.translate, this.prevTwoPointerDeltaRotation = void 0, this.prevAngle = void 0;
        const [i] = this.inputState.values(), o = t.matrixWorld, a = (_a2 = t.parent) == null ? void 0 : _a2.matrixWorld;
        s = Np(e, i, this, o, a, n);
      } else if (this.inputState.size === 1) {
        this.prevTwoPointerDeltaRotation = void 0, this.prevAngle = void 0, this.prevTranslateAsDeltaRotation = void 0;
        const [i] = this.inputState.values();
        s = Lp(e, i, this, (_b = t.parent) == null ? void 0 : _b.matrixWorld, n);
      } else {
        this.prevTranslateAsDeltaRotation = void 0;
        const [i, o] = this.inputState.values();
        s = Hp(e, i, o, this, (_c2 = t.parent) == null ? void 0 : _c2.matrixWorld, n);
      }
      this.outputState.update(this.latestMoveEvent, s), this.outputState.memo = this.apply(t), this.latestMoveEvent = void 0;
    }
    getTarget() {
      var _a2;
      return this.target instanceof Pe ? this.target : (_a2 = this.target) == null ? void 0 : _a2.current;
    }
    capturePointer(e, t) {
      if (this.capturedObjects.has(e)) return false;
      const { multitouch: n, translate: s } = this.getOptions();
      return ((n ?? true) === false || typeof s == "string") && this.capturedObjects.size === 1 ? false : (this.capturedObjects.set(e, t), t.setPointerCapture(e), true);
    }
    releasePointer(e, t, n) {
      const s = this.getTarget();
      if (!(s == null || !this.capturedObjects.delete(e))) {
        if (this.inputState.delete(e), t.releasePointerCapture(e), this.inputState.size > 0) {
          this.save();
          return;
        }
        this.outputState.end(n), this.apply(s);
      }
    }
    stopPropagation(e) {
      var _a2;
      e == null || !(((_a2 = this.getOptions()) == null ? void 0 : _a2.stopPropagation) ?? true) || e.stopPropagation();
    }
    apply(e) {
      return (this.getOptions().apply ?? oi)(this.outputState, e);
    }
    getState() {
      return this.inputState.size === 0 ? void 0 : this.outputState;
    }
    save() {
      var _a2, _b;
      const e = this.getTarget();
      if (e != null) {
        e.updateWorldMatrix(true, false), this.prevAngle = void 0, this.prevTwoPointerDeltaRotation = void 0, this.prevTranslateAsDeltaRotation = void 0, this.initialTargetParentWorldMatrix = (_a2 = e.parent) == null ? void 0 : _a2.matrixWorld.clone(), e.matrixAutoUpdate ? (this.initialTargetPosition.copy(e.position), this.initialTargetQuaternion.copy(e.quaternion), this.initialTargetRotation.copy(e.rotation), this.initialTargetScale.copy(e.scale)) : (e.matrix.decompose(this.initialTargetPosition, this.initialTargetQuaternion, this.initialTargetScale), this.initialTargetRotation.setFromQuaternion(this.initialTargetQuaternion, e.rotation.order));
        for (const t of this.inputState.values()) t.pointerWorldDirection != null && ((_b = t.initialPointerWorldDirection) == null ? void 0 : _b.copy(t.pointerWorldDirection)), t.initialPointerWorldPoint.copy(t.pointerWorldPoint), t.initialPointerWorldQuaternion.copy(t.pointerWorldQuaternion);
      }
    }
    bind(e) {
      const { onPointerDown: t, onPointerMove: n, onPointerUp: s } = this.handlers;
      return e.addEventListener("pointerdown", t), e.addEventListener("pointermove", n), e.addEventListener("pointerup", s), () => {
        e.removeEventListener("pointerdown", t), e.removeEventListener("pointermove", n), e.removeEventListener("pointerup", s), this.cancel();
      };
    }
    capture(e, t) {
      return this.capturePointer(e, t) ? () => this.releasePointer(e, t, void 0) : Fp;
    }
  }
  function Fp() {
  }
  function oi(r, e) {
    e.position.copy(r.current.position), e.rotation.order = r.current.rotation.order, e.quaternion.copy(r.current.quaternion), e.scale.copy(r.current.scale);
  }
  let ai = class {
    constructor(e, t) {
      __publicField(this, "target");
      __publicField(this, "getOptions");
      __publicField(this, "handles", []);
      __publicField(this, "hoveredTagMap", /* @__PURE__ */ new Map());
      __publicField(this, "hoverSubscriptions", []);
      __publicField(this, "applySubscriptions", []);
      __publicField(this, "space");
      this.target = e, this.getOptions = t;
    }
    getSpace() {
      return this.space ?? "world";
    }
    getTarget() {
      return this.target instanceof Pe ? this.target : this.target.current;
    }
    getHandleOptions(e, t) {
      var _a2;
      const n = (_a2 = this.getOptions) == null ? void 0 : _a2.call(this), s = t == null ? void 0 : t();
      return {
        ...n,
        ...s,
        apply: (i, o) => {
          var _a3;
          return this.onApply(e, i, o), (_a3 = (s == null ? void 0 : s.apply) ?? (n == null ? void 0 : n.apply) ?? oi) == null ? void 0 : _a3(i, o);
        }
      };
    }
    registerHandle(e, t, n) {
      const s = {
        object: t,
        store: e,
        tag: n
      };
      this.handles.push(s);
      const i = e.bind(t), o = this.onPointerEnter.bind(this, n), a = this.onPointerLeave.bind(this);
      return t.addEventListener("pointerenter", o), t.addEventListener("pointerleave", a), () => {
        const l = this.handles.indexOf(s);
        l != -1 && this.handles.splice(l, 1), i(), e.cancel();
      };
    }
    subscribeHover(e) {
      return this.hoverSubscriptions.push(e), e(Array.from(this.hoveredTagMap.values())), () => {
        const t = this.hoverSubscriptions.indexOf(e);
        t !== -1 && this.hoverSubscriptions.splice(t, 1);
      };
    }
    subscribeApply(e) {
      return this.applySubscriptions.push(e), () => {
        const t = this.applySubscriptions.indexOf(e);
        t !== -1 && this.applySubscriptions.splice(t, 1);
      };
    }
    update(e) {
      for (const { store: t } of this.handles) t.update(e);
    }
    onPointerEnter(e, t) {
      this.hoveredTagMap.set(t.pointerId, e), this.updateHover();
    }
    onPointerLeave(e) {
      this.hoveredTagMap.delete(e.pointerId), this.updateHover();
    }
    updateHover() {
      const e = Array.from(this.hoveredTagMap.values());
      for (const t of this.hoverSubscriptions) t(e);
    }
    onApply(e, t, n) {
      for (const s of this.applySubscriptions) s(e, t, n);
    }
  };
  const oe = {
    depthTest: false,
    depthWrite: false,
    fog: false,
    toneMapped: false,
    transparent: true
  };
  function ge(r, e, t, { color: n, hoverColor: s, hoverOpacity: i, opacity: o, disabled: a = false }) {
    if (s == null && i == null || a) {
      e.color.set(n), e.opacity = o ?? 1, a && (e.opacity *= 0.5, e.color.lerp(new ie(1, 1, 1), 0.5));
      return;
    }
    return s ?? (s = n), r.subscribeHover((l) => {
      const c = l.some((u) => u.includes(t));
      e.color.set(c ? s : n), e.opacity = (c ? i : o) ?? 1;
    });
  }
  const $n = new N(), bl = new yt();
  bl.setAttribute("position", new Ha([
    -1e3,
    0,
    0,
    1e3,
    0,
    0
  ], 3));
  let ar = class extends Bs {
    constructor(e, t) {
      super(bl);
      __publicField(this, "context");
      __publicField(this, "rotationOffset");
      this.context = e, this.rotationOffset = t, this.renderOrder = 1 / 0;
    }
    update() {
      this.quaternion.setFromEuler(this.rotationOffset);
      const e = this.context.getTarget();
      this.context.getSpace() === "world" && e != null && (e.getWorldQuaternion($n).invert(), this.quaternion.premultiply($n));
    }
    bind(e) {
      this.material = new Us({
        ...oe,
        color: this.material.color ?? "white",
        opacity: this.material.opacity ?? 1
      });
      const t = this.context.subscribeHover((s) => {
        const i = s.some((o) => o.includes(e));
        this.visible = i;
      }), n = this.context.subscribeApply((s, i) => {
        if (i.last) {
          this.position.set(0, 0, 0);
          return;
        }
        this.position.copy(i.initial.position).sub(i.current.position);
        const o = this.context.getTarget();
        o != null && ($n.copy(o.quaternion).invert(), this.position.applyQuaternion($n));
      });
      return () => {
        this.material.dispose(), t(), n();
      };
    }
  };
  class Ee extends ce {
    constructor(e, t, n, s) {
      super();
      __publicField(this, "context");
      __publicField(this, "axis");
      __publicField(this, "store");
      __publicField(this, "options");
      __publicField(this, "tag");
      this.context = e, this.axis = t, this.tag = (n ?? "") + t, this.store = new xl(e.target, () => e.getHandleOptions(this.tag, s));
    }
  }
  function Ae(r, e = true) {
    if (e === false) return {
      options: false,
      disabled: true
    };
    if (e === true) {
      const s = {
        x: false,
        y: false,
        z: false,
        e: false
      };
      for (const i of r) s[i] = true;
      return {
        options: s,
        disabled: false
      };
    }
    if (e === "disabled") return {
      options: {
        x: true,
        y: true,
        z: true,
        e: true
      },
      disabled: true
    };
    if (typeof e == "string") return {
      options: e === r ? {
        x: false,
        y: false,
        z: false,
        e: false,
        [r]: true
      } : false,
      disabled: false
    };
    const t = {
      x: false,
      y: false,
      z: false,
      e: false
    };
    let n = false;
    for (const s of r) {
      let i = e[s] ?? true;
      if (i === false) return {
        options: false,
        disabled: true
      };
      i === "disabled" && (n = true, i = true), t[s] = i;
    }
    return {
      options: t,
      disabled: n
    };
  }
  const Go = new b(), Bo = new b();
  function jr(r, e, t, n) {
    if (!t) return n;
    let s;
    return e instanceof gn ? s = (e.top - e.bottom) / e.zoom : (e.getWorldPosition(Go), r.getWorldPosition(Bo), s = Go.distanceTo(Bo) * Math.min(1.9 * Math.tan(Math.PI * e.fov / 360) / e.zoom, 7)), s * n / 4;
  }
  class fs extends Ee {
    constructor(e, t, n) {
      super(e, t, n, () => ({
        scale: this.options,
        rotate: false,
        translate: "as-scale",
        multitouch: false
      }));
    }
    bind(e, t) {
      const { options: n, disabled: s } = Ae(this.axis, t);
      if (n === false) return;
      this.options = n;
      const i = new V(oe), o = ge(this.context, i, this.tag, {
        color: e,
        hoverColor: 16777024,
        disabled: s
      }), a = new k(new Vs(0.04), i);
      a.renderOrder = 1 / 0, a.pointerEventsOrder = 1 / 0, a.position.x = 0.68;
      const l = s ? void 0 : this.context.registerHandle(this.store, a, this.tag);
      return this.add(a), () => {
        i.dispose(), a.geometry.dispose(), l == null ? void 0 : l(), o == null ? void 0 : o(), this.remove(a);
      };
    }
  }
  class ds extends Ee {
    constructor(e, t, n, s) {
      super(e, t, n, () => ({
        scale: false,
        translate: "as-rotate",
        rotate: s != null ? [
          s
        ] : this.options,
        multitouch: false
      }));
    }
    bind(e, t) {
      const { options: n, disabled: s } = Ae(this.axis, t);
      if (n === false) return;
      this.options = n;
      const i = new V(oe), o = ge(this.context, i, this.tag, {
        color: e,
        hoverColor: 16777024,
        disabled: s
      }), a = new k(new wn(0.45, 75e-4, 3, 64, Math.PI / 2), i);
      a.renderOrder = 1 / 0, a.rotation.set(0, Math.PI / 2, Math.PI / 2), this.add(a);
      const l = new k(new wn(0.45, 0.05, 4, 24, Math.PI / 2));
      l.pointerEventsOrder = 1 / 0, l.visible = false, l.rotation.set(0, Math.PI / 2, Math.PI / 2), this.add(l);
      const c = s ? void 0 : this.context.registerHandle(this.store, l, this.tag);
      return () => {
        i.dispose(), l.geometry.dispose(), a.geometry.dispose(), c == null ? void 0 : c(), o == null ? void 0 : o(), this.remove(a), this.remove(l);
      };
    }
  }
  const vl = new Sn(0, 0.04, 0.1, 12);
  vl.translate(0, 0.05, 0);
  const wl = new Sn(75e-4, 75e-4, 0.5, 3);
  wl.translate(0, 0.25, 0);
  const zp = new Y(0, 0, -Math.PI / 2), kp = new Y(0, 0, Math.PI / 2);
  class Xe extends Ee {
    constructor(e, t, n = "", s, i = false, o = true) {
      super(e, t, n, () => ({
        scale: false,
        rotate: false,
        translate: s != null ? [
          s
        ] : this.options,
        multitouch: false
      }));
      __publicField(this, "invert");
      __publicField(this, "showArrowBody");
      this.invert = i, this.showArrowBody = o;
    }
    bind(e, t, n) {
      const { options: s, disabled: i } = Ae(this.axis, n);
      if (s === false) return;
      this.options = s;
      const o = this.invert ? kp : zp, a = new V(oe), l = ge(this.context, a, this.tag, {
        color: e,
        hoverColor: t,
        disabled: i
      }), c = new k(vl, a);
      c.renderOrder = 1 / 0, c.position.x = this.invert ? -0.5 : 0.5, c.rotation.copy(o), this.add(c);
      let u, f;
      if (this.showArrowBody) {
        const g = new V(oe);
        u = ge(this.context, g, this.tag, {
          color: e,
          hoverColor: 16777024,
          disabled: i
        }), f = new k(wl, g), f.renderOrder = 1 / 0, f.rotation.copy(o), this.add(f);
      }
      const h = new k(new Sn(0.13, 0, 0.6, 4));
      h.pointerEventsOrder = 1 / 0, h.position.x = this.invert ? -0.3 : 0.3, h.rotation.copy(o), h.visible = false, this.add(h);
      const m = i ? void 0 : this.context.registerHandle(this.store, h, this.tag);
      return () => {
        a.dispose(), m == null ? void 0 : m(), l == null ? void 0 : l(), u == null ? void 0 : u(), this.remove(c), f != null && this.remove(f), this.remove(h);
      };
    }
  }
  class Xt extends Ee {
    constructor(e, t, n = "", s) {
      super(e, t, n, () => ({
        translate: s ?? this.options,
        scale: false,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e, t, n) {
      const { options: s, disabled: i } = Ae(this.axis, n);
      if (s === false) return;
      this.options = s;
      const o = new V(oe), a = ge(this.context, o, this.tag, {
        opacity: 0.5,
        hoverOpacity: 1,
        color: e,
        hoverColor: t,
        disabled: i
      }), l = new k(new Gt(0.2, 0.2, 0.01), o);
      l.renderOrder = 1 / 0, l.pointerEventsOrder = 1 / 0, l.position.set(0.15, 0.15, 0);
      const c = i ? void 0 : this.context.registerHandle(this.store, l, this.tag);
      return this.add(l), () => {
        o.dispose(), l.geometry.dispose(), c == null ? void 0 : c(), a == null ? void 0 : a(), this.remove(l);
      };
    }
  }
  const Wo = new b();
  let Xp = class extends ce {
    constructor(e, t, n) {
      super();
      __publicField(this, "context");
      __publicField(this, "size");
      __publicField(this, "fixed");
      __publicField(this, "scaleX");
      __publicField(this, "scaleY");
      __publicField(this, "scaleZ");
      __publicField(this, "rotationX");
      __publicField(this, "rotationY");
      __publicField(this, "rotationZ");
      __publicField(this, "translationX");
      __publicField(this, "translationY");
      __publicField(this, "translationZ");
      __publicField(this, "translationXY");
      __publicField(this, "translationYZ");
      __publicField(this, "translationXZ");
      __publicField(this, "xAxis", new b());
      __publicField(this, "yAxis", new b());
      __publicField(this, "zAxis", new b());
      __publicField(this, "xRotationAxis", new b());
      __publicField(this, "yRotationAxis", new b());
      __publicField(this, "zRotationAxis", new b());
      this.context = e, this.size = t, this.fixed = n, this.scaleX = new fs(e, "x", "s"), this.add(this.scaleX), this.scaleY = new fs(e, "y", "s"), this.scaleY.rotation.z = Math.PI / 2, this.add(this.scaleY), this.scaleZ = new fs(e, "z", "s"), this.scaleZ.rotation.y = -Math.PI / 2, this.add(this.scaleZ), this.rotationX = new ds(e, "x", "r", this.xRotationAxis), this.add(this.rotationX), this.rotationY = new ds(e, "y", "r", this.yRotationAxis), this.rotationY.rotation.z = -Math.PI / 2, this.add(this.rotationY), this.rotationZ = new ds(e, "z", "r", this.zRotationAxis), this.rotationZ.rotation.y = Math.PI / 2, this.add(this.rotationZ), this.translationX = new Xe(e, "x", "ta", this.xAxis), this.add(this.translationX), this.translationY = new Xe(e, "y", "ta", this.yAxis), this.translationY.rotation.z = Math.PI / 2, this.add(this.translationY), this.translationZ = new Xe(e, "z", "ta", this.zAxis), this.translationZ.rotation.y = -Math.PI / 2, this.add(this.translationZ), this.translationXY = new Xt(e, "xy", "tp", [
        this.xAxis,
        this.yAxis
      ]), this.add(this.translationXY), this.translationYZ = new Xt(e, "yz", "tp", [
        this.yAxis,
        this.zAxis
      ]), this.translationYZ.rotation.y = -Math.PI / 2, this.add(this.translationYZ), this.translationXZ = new Xt(e, "xz", "tp", [
        this.xAxis,
        this.zAxis
      ]), this.translationXZ.rotation.x = Math.PI / 2, this.add(this.translationXZ);
    }
    update(e) {
      this.updateWorldMatrix(true, false);
      const t = this.context.getTarget();
      t != null && (It(this.xAxis, t, void 0, 1, 0, 0), It(this.yAxis, t, void 0, 0, 1, 0), It(this.zAxis, t, void 0, 0, 0, 1), It(this.xRotationAxis, t, this.rotationX.store, 1, 0, 0), It(this.yRotationAxis, t, this.rotationY.store, 0, 1, 0), It(this.zRotationAxis, t, this.rotationZ.store, 0, 0, 1)), this.scale.setScalar(1), t != null && (t.getWorldScale(Wo), this.scale.divide(Wo)), this.scale.multiplyScalar(jr(this, e, this.fixed ?? true, this.size ?? 1));
    }
    bind(e, t, n) {
      const s = this.scaleX.bind(16719968, n), i = this.scaleY.bind(2154368, n), o = this.scaleZ.bind(2130175, n), a = this.rotationX.bind(16719968, t), l = this.rotationY.bind(2154368, t), c = this.rotationZ.bind(2130175, t), u = this.translationX.bind(16719968, 16777024, e), f = this.translationY.bind(2154368, 16777024, e), h = this.translationZ.bind(2130175, 16777024, e), m = this.translationXY.bind(16719968, 16777024, e), g = this.translationYZ.bind(2130175, 16777024, e), v = this.translationXZ.bind(2154368, 16777024, e);
      return () => {
        s == null ? void 0 : s(), i == null ? void 0 : i(), o == null ? void 0 : o(), a == null ? void 0 : a(), l == null ? void 0 : l(), c == null ? void 0 : c(), u == null ? void 0 : u(), f == null ? void 0 : f(), h == null ? void 0 : h(), m == null ? void 0 : m(), g == null ? void 0 : g(), v == null ? void 0 : v();
      };
    }
  };
  function It(r, e, t, ...[n, s, i]) {
    (t == null ? void 0 : t.getState()) == null && (r.set(n, s, i), r.applyQuaternion(e.quaternion));
  }
  const Vo = new N();
  function Up(r, e) {
    const t = new k(new hr(0.01, 2), new V(oe));
    t.renderOrder = 1 / 0, t.visible = false, r.add(t);
    const n = new k(new hr(0.01, 2), new V(oe));
    n.renderOrder = 1 / 0, n.visible = false, r.add(n);
    const s = new yt();
    s.setAttribute("position", new Ha([
      0,
      0,
      0,
      1,
      1,
      1
    ], 3));
    const i = new Bs(s, new Us(oe));
    i.renderOrder = 1 / 0, i.visible = false, r.add(i);
    const o = e.subscribeApply((a, l) => {
      n.position.set(0, 0, 0), t.position.copy(l.initial.position).sub(l.current.position);
      const c = e.getTarget();
      c != null && (Vo.copy(c.quaternion).invert(), t.position.applyQuaternion(Vo)), i.position.set(0, 0, 0), i.scale.copy(t.position), t.visible = !l.last, i.visible = !l.last, n.visible = !l.last;
    });
    return () => {
      t.geometry.dispose(), t.material.dispose(), n.geometry.dispose(), n.material.dispose(), i.geometry.dispose(), i.material.dispose(), r.remove(t), r.remove(n), r.remove(i), o();
    };
  }
  class Gp extends Ee {
    constructor(e) {
      super(e, "xyz", "", () => ({
        translate: this.options,
        scale: false,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e) {
      const { options: t, disabled: n } = Ae(this.axis, e);
      if (t === false) return;
      this.options = t;
      const s = new V(oe), i = ge(this.context, s, this.tag, {
        color: 16777215,
        hoverColor: 16776960,
        opacity: 0.25,
        hoverOpacity: 1,
        disabled: n
      }), o = new k(new hr(0.1, 0), s);
      o.renderOrder = 1 / 0, this.add(o);
      const a = new k(new hr(0.2, 0));
      a.pointerEventsOrder = 1 / 0, a.visible = false, this.add(a);
      const l = n ? void 0 : this.context.registerHandle(this.store, a, this.tag);
      return () => {
        s.dispose(), o.geometry.dispose(), a.geometry.dispose(), l == null ? void 0 : l(), i == null ? void 0 : i(), this.remove(o), this.remove(a);
      };
    }
  }
  const Yo = new b(), le = new N(), qo = new N(), $o = new N().setFromEuler(new Y(0, 0, Math.PI / 2)), Zo = new N().setFromEuler(new Y(0, -Math.PI / 2, 0)), Bp = new N(), Wp = new N().setFromEuler(new Y(0, -Math.PI / 2, 0)), Vp = new N().setFromEuler(new Y(Math.PI / 2, 0, 0));
  class Sl extends ce {
    constructor(e, t, n) {
      super();
      __publicField(this, "context");
      __publicField(this, "size");
      __publicField(this, "fixed");
      __publicField(this, "free");
      __publicField(this, "translationX");
      __publicField(this, "translationY");
      __publicField(this, "translationZ");
      __publicField(this, "translationNegX");
      __publicField(this, "translationNegY");
      __publicField(this, "translationNegZ");
      __publicField(this, "translationXY");
      __publicField(this, "translationYZ");
      __publicField(this, "translationXZ");
      __publicField(this, "scaleGroup", new ce());
      __publicField(this, "xAxis", new b());
      __publicField(this, "yAxis", new b());
      __publicField(this, "zAxis", new b());
      __publicField(this, "negXAxis", new b());
      __publicField(this, "negYAxis", new b());
      __publicField(this, "negZAxis", new b());
      this.context = e, this.size = t, this.fixed = n, this.add(this.scaleGroup), this.free = new Gp(this.context), this.scaleGroup.add(this.free), this.translationX = new Xe(this.context, "x", void 0, this.xAxis), this.scaleGroup.add(this.translationX), this.translationY = new Xe(this.context, "y", void 0, this.yAxis), this.scaleGroup.add(this.translationY), this.translationZ = new Xe(this.context, "z", void 0, this.zAxis), this.scaleGroup.add(this.translationZ), this.translationNegX = new Xe(this.context, "x", void 0, this.negXAxis, true, false), this.scaleGroup.add(this.translationNegX), this.translationNegY = new Xe(this.context, "y", void 0, this.negYAxis, true, false), this.scaleGroup.add(this.translationNegY), this.translationNegZ = new Xe(this.context, "z", void 0, this.negZAxis, true, false), this.scaleGroup.add(this.translationNegZ), this.translationXY = new Xt(this.context, "xy", void 0, [
        this.xAxis,
        this.yAxis
      ]), this.scaleGroup.add(this.translationXY), this.translationXZ = new Xt(this.context, "xz", void 0, [
        this.xAxis,
        this.zAxis
      ]), this.scaleGroup.add(this.translationXZ), this.translationYZ = new Xt(this.context, "yz", void 0, [
        this.yAxis,
        this.zAxis
      ]), this.scaleGroup.add(this.translationYZ);
    }
    update(e) {
      this.updateWorldMatrix(true, false), this.xAxis.set(1, 0, 0), this.yAxis.set(0, 1, 0), this.zAxis.set(0, 0, 1), this.free.quaternion.identity(), this.translationX.quaternion.copy(qo), this.translationY.quaternion.copy($o), this.translationZ.quaternion.copy(Zo), this.translationNegX.quaternion.copy(qo), this.translationNegY.quaternion.copy($o), this.translationNegZ.quaternion.copy(Zo), this.translationXY.quaternion.copy(Bp), this.translationYZ.quaternion.copy(Wp), this.translationXZ.quaternion.copy(Vp);
      const t = this.context.getSpace(), n = this.context.getTarget();
      t == "world" && n != null ? (n.getWorldQuaternion(le).invert(), this.free.quaternion.premultiply(le), this.translationX.quaternion.premultiply(le), this.translationY.quaternion.premultiply(le), this.translationZ.quaternion.premultiply(le), this.translationNegX.quaternion.premultiply(le), this.translationNegY.quaternion.premultiply(le), this.translationNegZ.quaternion.premultiply(le), this.translationXY.quaternion.premultiply(le), this.translationYZ.quaternion.premultiply(le), this.translationXZ.quaternion.premultiply(le), n.parent != null && (n.parent.getWorldQuaternion(le).invert(), this.xAxis.applyQuaternion(le), this.yAxis.applyQuaternion(le), this.zAxis.applyQuaternion(le))) : n != null && (this.xAxis.applyQuaternion(n.quaternion), this.yAxis.applyQuaternion(n.quaternion), this.zAxis.applyQuaternion(n.quaternion)), this.negXAxis.copy(this.xAxis).negate(), this.negYAxis.copy(this.yAxis).negate(), this.negZAxis.copy(this.zAxis).negate(), this.scaleGroup.scale.setScalar(1), n != null && (n.getWorldScale(Yo), this.scaleGroup.scale.divide(Yo)), this.scaleGroup.scale.multiplyScalar(jr(this, e, this.fixed ?? true, this.size ?? 1));
    }
    bind(e) {
      const t = Up(this, this.context), n = this.translationX.bind(16711680, 16776960, e), s = this.translationY.bind(65280, 16776960, e), i = this.translationZ.bind(255, 16776960, e), o = this.translationNegX.bind(16711680, 16776960, e), a = this.translationNegY.bind(65280, 16776960, e), l = this.translationNegZ.bind(255, 16776960, e), c = this.translationXY.bind(255, 16776960, e), u = this.translationYZ.bind(16711680, 16776960, e), f = this.translationXZ.bind(65280, 16776960, e), h = this.free.bind(e);
      return () => {
        t(), n == null ? void 0 : n(), s == null ? void 0 : s(), i == null ? void 0 : i(), o == null ? void 0 : o(), a == null ? void 0 : a(), l == null ? void 0 : l(), c == null ? void 0 : c(), u == null ? void 0 : u(), f == null ? void 0 : f(), h == null ? void 0 : h();
      };
    }
  }
  const Yp = new Y(0, 0, -Math.PI / 2), qp = new Y(0, 0, Math.PI / 2);
  class Ot extends Ee {
    constructor(e, t, n = "", s = false, i = true) {
      super(e, t, n, () => ({
        scale: this.options,
        rotate: false,
        translate: "as-scale",
        multitouch: false
      }));
      __publicField(this, "invert");
      __publicField(this, "showHandleLine");
      this.invert = s, this.showHandleLine = i;
    }
    bind(e, t, n) {
      const { options: s, disabled: i } = Ae(this.axis, n);
      if (s === false) return;
      this.options = s;
      const o = this.invert ? qp : Yp, a = new ce();
      a.position.x = this.invert ? -0.5 : 0.5, a.rotation.copy(o), this.add(a);
      const l = new V(oe), c = ge(this.context, l, this.tag, {
        color: e,
        hoverColor: t,
        disabled: i
      }), u = new k(new Gt(0.08, 0.08, 0.08), l);
      u.renderOrder = 1 / 0, u.rotation.copy(o), a.add(u);
      let f, h, m;
      if (this.showHandleLine) {
        m = new ce(), m.rotation.copy(o), this.add(m);
        const S = new V(oe);
        f = ge(this.context, S, this.tag, {
          color: e,
          hoverColor: t,
          disabled: i
        }), h = new k(new Sn(75e-4, 75e-4, 0.5, 3), S), h.renderOrder = 1 / 0, h.position.y = 0.25, m.add(h);
      }
      const g = new ce();
      g.visible = false, g.rotation.copy(o), g.position.x = this.invert ? -0.3 : 0.3, this.add(g);
      const v = new k(new Sn(0.2, 0, 0.5, 4));
      v.pointerEventsOrder = 1 / 0, v.position.y = 0.04, g.add(v);
      const x = i ? void 0 : this.context.registerHandle(this.store, v, this.tag);
      return () => {
        l.dispose(), v.geometry.dispose(), u.geometry.dispose(), h == null ? void 0 : h.geometry.dispose(), x == null ? void 0 : x(), c == null ? void 0 : c(), f == null ? void 0 : f(), m != null && this.remove(m), this.remove(g), this.remove(a);
      };
    }
  }
  class hs extends Ee {
    constructor(e, t, n = "") {
      super(e, t, n, () => ({
        translate: "as-scale",
        scale: this.options,
        rotate: false,
        multitouch: false
      }));
    }
    bind(e, t, n) {
      const { options: s, disabled: i } = Ae(this.axis, n);
      if (s === false) return;
      this.options = s;
      const o = new V(oe), a = ge(this.context, o, this.tag, {
        opacity: 0.5,
        hoverOpacity: 1,
        color: e,
        hoverColor: t,
        disabled: i
      }), l = new k(new Gt(0.2, 0.2, 0.01), o);
      l.renderOrder = 1 / 0, l.pointerEventsOrder = 1 / 0, l.position.set(0.15, 0.15, 0);
      const c = i ? void 0 : this.context.registerHandle(this.store, l, this.tag);
      return this.add(l), () => {
        o.dispose(), l.geometry.dispose(), c == null ? void 0 : c(), a == null ? void 0 : a(), this.remove(l);
      };
    }
  }
  const $p = new Y(0, 0, -Math.PI / 2), Zp = new Y(0, 0, Math.PI / 2);
  class Ct extends Ee {
    constructor(e, t = "", n, s = false) {
      super(e, "xyz", t, () => ({
        scale: {
          uniform: true,
          ...this.options
        },
        rotate: false,
        translate: "as-scale",
        multitouch: false
      }));
      __publicField(this, "actualAxis");
      __publicField(this, "invert");
      this.actualAxis = n, this.invert = s;
    }
    bind(e, t, n) {
      const { options: s, disabled: i } = Ae(this.actualAxis, n);
      if (s === false) return;
      this.options = s;
      const o = this.invert ? Zp : $p, a = new ce();
      a.position.x = this.invert ? -0.7 : 0.7, a.rotation.copy(o), this.add(a);
      const l = new V(oe), c = ge(this.context, l, this.tag, {
        color: e,
        hoverColor: t,
        opacity: 0.5,
        hoverOpacity: 1,
        disabled: i
      }), u = new k(new Gt(0.08, 0.08, 0.08), l);
      u.renderOrder = 1 / 0, u.rotation.copy(o), a.add(u);
      const f = new k(new Gt(0.15, 0.15, 0.15), l);
      f.visible = false, f.pointerEventsOrder = 1 / 0, f.rotation.copy(o), a.add(f);
      const h = i ? void 0 : this.context.registerHandle(this.store, f, this.tag);
      return () => {
        l.dispose(), u.geometry.dispose(), h == null ? void 0 : h(), c == null ? void 0 : c(), this.remove(a);
      };
    }
  }
  const Qo = new b();
  class Pl extends ce {
    constructor(e, t, n) {
      super();
      __publicField(this, "context");
      __publicField(this, "size");
      __publicField(this, "fixed");
      __publicField(this, "scaleX");
      __publicField(this, "scaleY");
      __publicField(this, "scaleZ");
      __publicField(this, "scaleNegX");
      __publicField(this, "scaleNegY");
      __publicField(this, "scaleNegZ");
      __publicField(this, "translationX");
      __publicField(this, "translationY");
      __publicField(this, "translationZ");
      __publicField(this, "translationNegX");
      __publicField(this, "translationNegY");
      __publicField(this, "translationNegZ");
      __publicField(this, "translationXY");
      __publicField(this, "translationYZ");
      __publicField(this, "translationXZ");
      this.context = e, this.size = t, this.fixed = n, this.scaleX = new Ct(this.context, void 0, "x"), this.add(this.scaleX), this.scaleY = new Ct(this.context, void 0, "y"), this.scaleY.rotation.z = Math.PI / 2, this.add(this.scaleY), this.scaleZ = new Ct(this.context, void 0, "z"), this.scaleZ.rotation.y = -Math.PI / 2, this.add(this.scaleZ), this.scaleNegX = new Ct(this.context, void 0, "x", true), this.add(this.scaleNegX), this.scaleNegY = new Ct(this.context, void 0, "y", true), this.scaleNegY.rotation.z = Math.PI / 2, this.add(this.scaleNegY), this.scaleNegZ = new Ct(this.context, void 0, "z", true), this.scaleNegZ.rotation.y = -Math.PI / 2, this.add(this.scaleNegZ), this.translationX = new Ot(this.context, "x"), this.add(this.translationX), this.translationY = new Ot(this.context, "y"), this.translationY.rotation.z = Math.PI / 2, this.add(this.translationY), this.translationZ = new Ot(this.context, "z"), this.translationZ.rotation.y = -Math.PI / 2, this.add(this.translationZ), this.translationNegX = new Ot(this.context, "x", void 0, true, false), this.add(this.translationNegX), this.translationNegY = new Ot(this.context, "y", void 0, true, false), this.translationNegY.rotation.z = Math.PI / 2, this.add(this.translationNegY), this.translationNegZ = new Ot(this.context, "z", void 0, true, false), this.translationNegZ.rotation.y = -Math.PI / 2, this.add(this.translationNegZ), this.translationXY = new hs(this.context, "xy"), this.add(this.translationXY), this.translationXZ = new hs(this.context, "xz"), this.translationXZ.rotation.x = Math.PI / 2, this.add(this.translationXZ), this.translationYZ = new hs(this.context, "yz"), this.translationYZ.rotation.y = -Math.PI / 2, this.add(this.translationYZ);
    }
    update(e) {
      this.updateWorldMatrix(true, false), this.scale.setScalar(1);
      const t = this.context.getTarget();
      t != null && (t.getWorldScale(Qo), this.scale.divide(Qo)), this.scale.multiplyScalar(jr(this, e, this.fixed ?? true, this.size ?? 1));
    }
    bind(e) {
      const t = this.scaleX.bind(16777215, 16776960, e), n = this.scaleY.bind(16777215, 16776960, e), s = this.scaleZ.bind(16777215, 16776960, e), i = this.scaleNegX.bind(16777215, 16776960, e), o = this.scaleNegY.bind(16777215, 16776960, e), a = this.scaleNegZ.bind(16777215, 16776960, e), l = this.translationX.bind(16711680, 16776960, e), c = this.translationY.bind(65280, 16776960, e), u = this.translationZ.bind(255, 16776960, e), f = this.translationNegX.bind(16711680, 16776960, e), h = this.translationNegY.bind(65280, 16776960, e), m = this.translationNegZ.bind(255, 16776960, e), g = this.translationXY.bind(255, 16776960, e), v = this.translationYZ.bind(16711680, 16776960, e), x = this.translationXZ.bind(65280, 16776960, e);
      return () => {
        l == null ? void 0 : l(), c == null ? void 0 : c(), u == null ? void 0 : u(), f == null ? void 0 : f(), h == null ? void 0 : h(), m == null ? void 0 : m(), g == null ? void 0 : g(), v == null ? void 0 : v(), x == null ? void 0 : x(), t == null ? void 0 : t(), n == null ? void 0 : n(), s == null ? void 0 : s(), i == null ? void 0 : i(), o == null ? void 0 : o(), a == null ? void 0 : a();
      };
    }
  }
  const Ko = {
    x: {
      vector1: new b(0, 0, -1),
      vector2: new b(0, -1, 0),
      rotationOffset: new N(),
      axis: [
        1,
        0,
        0
      ]
    },
    y: {
      vector1: new b(0, 0, -1),
      vector2: new b(-1, 0, -1),
      rotationOffset: new N().setFromEuler(new Y(0, 0, Math.PI / 2)),
      axis: [
        0,
        1,
        0
      ]
    },
    z: {
      vector1: new b(-1, 0, 0),
      vector2: new b(0, -1, 0),
      rotationOffset: new N().setFromEuler(new Y(0, Math.PI / 2, 0)),
      axis: [
        0,
        0,
        1
      ]
    }
  }, ps = new b(), un = new b(), Zn = new b(), dt = new b(), Re = new N();
  class ms extends Ee {
    constructor(e, t, n = "") {
      super(e, t, n, () => ({
        scale: false,
        translate: "as-rotate",
        rotate: [
          this.direction
        ],
        multitouch: false
      }));
      __publicField(this, "direction", new b(1, 0, 0));
    }
    update(e) {
      const { rotationOffset: t, vector1: n, vector2: s } = Ko[this.axis];
      e.getWorldPosition(ps), this.getWorldPosition(un).sub(ps), Zn.copy(n), dt.copy(s);
      const i = this.context.getTarget(), o = this.context.getSpace();
      o === "local" && i != null && (i.getWorldQuaternion(Re), Zn.applyQuaternion(Re), dt.applyQuaternion(Re)), dt.crossVectors(Zn, dt);
      const a = un.dot(dt);
      dt.multiplyScalar(a), un.sub(dt), this.quaternion.setFromUnitVectors(Zn, un.normalize()), o === "local" && i != null && (i.getWorldQuaternion(Re), this.quaternion.multiply(Re)), this.quaternion.multiply(t), (i == null ? void 0 : i.parent) != null ? (i.parent.matrixWorld.decompose(ps, Re, un), Re.invert(), this.quaternion.premultiply(Re)) : Re.identity(), this.store.getState() == null && (this.direction.fromArray(Ko[this.axis].axis), this.direction.applyQuaternion(o === "local" && i != null ? i == null ? void 0 : i.quaternion : Re)), i != null && this.quaternion.premultiply(Re.copy(i.quaternion).invert());
    }
    bind(e, t) {
      const { options: n, disabled: s } = Ae(this.axis, t);
      if (n === false) return;
      this.options = n;
      const i = new V(oe), o = ge(this.context, i, this.tag, {
        color: e,
        hoverColor: 16776960,
        disabled: s
      }), a = new k(li(0.5, 0.5), i);
      a.renderOrder = 1 / 0, this.add(a);
      const l = new k(new wn(0.5, 0.1, 4, 24));
      l.visible = false, l.pointerEventsOrder = 1 / 0, l.rotation.set(0, -Math.PI / 2, -Math.PI / 2), this.add(l);
      const c = s ? void 0 : this.context.registerHandle(this.store, l, this.tag);
      return () => {
        i.dispose(), l.geometry.dispose(), a.geometry.dispose(), c == null ? void 0 : c(), o == null ? void 0 : o(), this.remove(l), this.remove(a);
      };
    }
  }
  const gs = new b(), ys = new b(), Qp = new b(1, 0, 0), fn = new N();
  class Kp extends Ee {
    constructor(e, t = "") {
      super(e, "xyz", t, () => ({
        scale: false,
        translate: "as-rotate",
        rotate: this.options,
        multitouch: false
      }));
    }
    update(e) {
      e.getWorldPosition(gs), this.getWorldPosition(ys).sub(gs), this.quaternion.setFromUnitVectors(Qp, ys.normalize());
      const t = this.context.getTarget();
      (t == null ? void 0 : t.parent) != null && (t.parent.matrixWorld.decompose(gs, fn, ys), fn.invert(), this.quaternion.premultiply(fn)), t != null && (fn.copy(t.quaternion).invert(), this.quaternion.premultiply(fn));
    }
    bind(e) {
      const { options: t, disabled: n } = Ae(this.axis, e);
      if (t === false) return;
      this.options = t;
      const s = new V(oe), i = ge(this.context, s, this.tag, {
        color: 16777215,
        hoverColor: 16776960,
        opacity: 0.25,
        disabled: n
      }), o = new k(li(0.5, 1), s);
      o.renderOrder = 1 / 0, this.add(o);
      const a = new k(new Vs(0.25, 10, 8));
      a.visible = false, a.pointerEventsOrder = 1 / 0, this.add(a);
      const l = n ? void 0 : this.context.registerHandle(this.store, a, this.tag);
      return () => {
        this.pointerEvents = "none", s.dispose(), a.geometry.dispose(), o.geometry.dispose(), l == null ? void 0 : l(), i == null ? void 0 : i(), this.remove(a), this.remove(o);
      };
    }
  }
  const xs = new b(), Jp = new b(), em = new b(1, 0, 0), _t = new N();
  class tm extends Ee {
    constructor(e, t = "") {
      super(e, "e", t, () => ({
        scale: false,
        translate: "as-rotate",
        rotate: [
          this.direction
        ],
        multitouch: false
      }));
      __publicField(this, "direction", new b(1, 0, 0));
    }
    update(e) {
      e.getWorldPosition(xs), this.getWorldPosition(this.direction).sub(xs).normalize(), this.quaternion.setFromUnitVectors(em, this.direction);
      const t = this.context.getTarget();
      (t == null ? void 0 : t.parent) != null && (t.parent.matrixWorld.decompose(xs, _t, Jp), _t.invert(), this.quaternion.premultiply(_t), this.direction.applyQuaternion(_t)), t != null && (_t.copy(t.quaternion).invert(), this.quaternion.premultiply(_t)), this.direction.negate();
    }
    bind(e) {
      const { options: t, disabled: n } = Ae(this.axis, e);
      if (t === false) return;
      this.options = t;
      const s = new V(oe), i = ge(this.context, s, this.tag, {
        color: 16776960,
        hoverColor: 16776960,
        opacity: 0.5,
        disabled: n
      }), o = new k(li(0.75, 1), s);
      o.renderOrder = 1 / 0, this.add(o);
      const a = new k(new wn(0.75, 0.1, 2, 24), new V({
        color: "white"
      }));
      a.visible = false, a.rotation.y = Math.PI / 2, a.pointerEventsOrder = 1 / 0, this.add(a);
      const l = n ? void 0 : this.context.registerHandle(this.store, a, this.tag);
      return () => {
        s.dispose(), a.geometry.dispose(), o.geometry.dispose(), l == null ? void 0 : l(), i == null ? void 0 : i(), this.remove(a), this.remove(o);
      };
    }
  }
  function li(r, e) {
    const t = new wn(r, 75e-4, 3, 64, e * Math.PI * 2);
    return t.rotateY(Math.PI / 2), t.rotateX(Math.PI / 2), t;
  }
  const Jo = new b();
  class Tl extends ce {
    constructor(e, t, n) {
      super();
      __publicField(this, "context");
      __publicField(this, "fixed");
      __publicField(this, "size");
      __publicField(this, "rotationX");
      __publicField(this, "rotationY");
      __publicField(this, "rotationZ");
      __publicField(this, "free");
      __publicField(this, "screen");
      this.context = e, this.fixed = t, this.size = n, this.rotationX = new ms(this.context, "x"), this.add(this.rotationX), this.rotationY = new ms(this.context, "y"), this.add(this.rotationY), this.rotationZ = new ms(this.context, "z"), this.add(this.rotationZ), this.free = new Kp(this.context), this.add(this.free), this.screen = new tm(this.context), this.add(this.screen);
    }
    update(e) {
      this.updateWorldMatrix(true, false), this.rotationX.update(e), this.rotationY.update(e), this.rotationZ.update(e), this.free.update(e), this.screen.update(e), this.scale.setScalar(1);
      const t = this.context.getTarget();
      t != null && (t.getWorldScale(Jo), this.scale.divide(Jo)), this.scale.multiplyScalar(jr(this, e, this.fixed ?? true, this.size ?? 1));
    }
    bind(e) {
      const t = this.rotationX.bind(16711680, e), n = this.rotationY.bind(65280, e), s = this.rotationZ.bind(255, e), i = this.screen.bind(e), o = this.free.bind(e);
      return () => {
        t == null ? void 0 : t(), n == null ? void 0 : n(), s == null ? void 0 : s(), i == null ? void 0 : i(), o == null ? void 0 : o();
      };
    }
  }
  const nm = new Y(), rm = new Y(0, 0, Math.PI / 2), sm = new Y(0, -Math.PI / 2, 0);
  wg = class extends ce {
    constructor(e) {
      super();
      __publicField(this, "xAxisHighlight");
      __publicField(this, "yAxisHighlight");
      __publicField(this, "zAxisHighlight");
      __publicField(this, "handles");
      __publicField(this, "context");
      this.context = new ai(this, e), this.xAxisHighlight = new ar(this.context, nm), this.add(this.xAxisHighlight), this.yAxisHighlight = new ar(this.context, rm), this.add(this.yAxisHighlight), this.zAxisHighlight = new ar(this.context, sm), this.add(this.zAxisHighlight);
    }
    set space(e) {
      this.context.space = e;
    }
    get space() {
      return this.context.space;
    }
    update(e, t) {
      var _a2;
      this.context.update(e), this.xAxisHighlight.update(), this.yAxisHighlight.update(), this.zAxisHighlight.update(), (_a2 = this.handles) == null ? void 0 : _a2.update(t);
    }
    bind(e, t) {
      const n = this.xAxisHighlight.bind("x"), s = this.yAxisHighlight.bind("y"), i = this.zAxisHighlight.bind("z");
      switch (e) {
        case "rotate":
          this.handles = new Tl(this.context);
          break;
        case "scale":
          this.handles = new Pl(this.context);
          break;
        case "translate":
          this.handles = new Sl(this.context);
          break;
      }
      this.add(this.handles);
      const o = this.handles.bind(t);
      return () => {
        this.handles != null && this.remove(this.handles), this.handles = void 0, o(), n(), s(), i();
      };
    }
  };
  const im = {}, ea = (r) => {
    let e;
    const t = /* @__PURE__ */ new Set(), n = (u, f) => {
      const h = typeof u == "function" ? u(e) : u;
      if (!Object.is(h, e)) {
        const m = e;
        e = f ?? (typeof h != "object" || h === null) ? h : Object.assign({}, e, h), t.forEach((g) => g(e, m));
      }
    }, s = () => e, l = {
      setState: n,
      getState: s,
      getInitialState: () => c,
      subscribe: (u) => (t.add(u), () => t.delete(u)),
      destroy: () => {
        (im ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), t.clear();
      }
    }, c = e = r(n, s, l);
    return l;
  }, om = (r) => r ? ea(r) : ea, Rl = new b(0, 0, 1), lr = new b(0, 1, 0);
  function Sr(r, e) {
    e.setState(r);
  }
  const Lt = new b(), ta = new b(), tt = new Y(), na = new N();
  function Ml(r, e, t, n) {
    r.copy(Rl).applyEuler(t).applyQuaternion(n).multiplyScalar(e);
  }
  function ra(r, e, t, n, s, i) {
    Lt.set(e, t, n), ta.set(...s), Lt.sub(ta), Lt.applyQuaternion(i);
    const o = Lt.length();
    Lt.divideScalar(o), na.setFromUnitVectors(Rl, Lt), tt.setFromQuaternion(na, "YXZ"), r.distance = o, r.pitch = tt.x, r.yaw = tt.y;
  }
  const ze = new b(), vn = new N(), Qn = new N();
  function ks(r, e, t, n, s, i, o = Pe.DEFAULT_UP) {
    if (vn.setFromUnitVectors(lr, o), tt.set(r, e, 0, "YXZ"), s != null) {
      Ml(s, t, tt, vn);
      const [a, l, c] = n;
      s.x += a, s.y += l, s.z += c;
    }
    i == null ? void 0 : i.setFromEuler(tt).premultiply(vn);
  }
  function El({ distance: r = 5, origin: e = [
    0,
    0,
    0
  ], pitch: t = 0, yaw: n = 0 } = {}, s = Pe.DEFAULT_UP) {
    return om((i, o) => ({
      distance: r,
      origin: e,
      pitch: t,
      yaw: n,
      activeHandle: void 0,
      getCameraTransformation(a, l) {
        const { pitch: c, distance: u, yaw: f, origin: h } = o();
        ks(c, f, u, h, a, l, s);
      },
      setCameraPosition(a, l, c, u = false) {
        const f = {};
        if (Qn.setFromUnitVectors(s, lr), ra(f, a, l, c, o().origin, Qn), u === true) {
          const h = o();
          tt.set(h.pitch, h.yaw, 0, "YXZ"), vn.setFromUnitVectors(lr, s), Ml(ze, h.distance, tt, vn), ze.x -= a, ze.y -= l, ze.z -= c, f.origin = ze.toArray();
        }
        i(f);
      },
      setOriginPosition(a, l, c, u = false) {
        const f = [
          a,
          l,
          c
        ], h = {
          origin: f
        };
        if (u === false) {
          const { pitch: m, distance: g, origin: v, yaw: x } = o();
          ks(m, x, g, v, ze, void 0, s), Qn.setFromUnitVectors(s, lr), ra(h, ze.x, ze.y, ze.z, f, Qn);
        }
        i(h);
      }
    }));
  }
  function ci(r, e) {
    const t = (n) => {
      const s = e();
      s != null && n.getCameraTransformation(s.position, s.quaternion);
    };
    return t(r.getState()), r.subscribe(t);
  }
  function ui(r, e, t, n = Pe.DEFAULT_UP) {
    let { distance: s, yaw: i, origin: [o, a, l], pitch: c } = r.getState();
    return (u) => {
      const f = e();
      if (f == null || f instanceof Vc) return;
      let h = t();
      if (h === false) return;
      h === true && (h = 0.01);
      const { distance: m, yaw: g, origin: [v, x, S], pitch: R } = r.getState();
      s = vt(s, m, h, u);
      let M;
      for (; Math.abs(M = g - i) > Math.PI; ) i += (M > 0 ? 2 : -2) * Math.PI;
      i = vt(i, g, h, u), c = vt(c, R, h, u), o = vt(o, v, h, u), a = vt(a, x, h, u), l = vt(l, S, h, u), ks(c, i, s, [
        o,
        a,
        l
      ], f.position, f.quaternion, n);
    };
  }
  class fi {
    constructor(e, t) {
      __publicField(this, "apply");
      __publicField(this, "getInitial");
      __publicField(this, "map", /* @__PURE__ */ new Map());
      __publicField(this, "initial");
      this.apply = e, this.getInitial = t, this.initial = t();
    }
    bind(e) {
      const t = this.onPointerDown.bind(this), n = this.onPointerUp.bind(this), s = this.onPointerMove.bind(this), i = Mr(e);
      return i.addEventListener("pointermove", s), i.addEventListener("pointerdown", t), i.addEventListener("pointerup", n), () => {
        i.removeEventListener("pointermove", s), i.removeEventListener("pointerdown", t), i.removeEventListener("pointerup", n);
      };
    }
    onPointerDown(e) {
      e.intersection.details.type == "screen-ray" && (e.target.setPointerCapture(e.pointerId), this.map.set(e.pointerId, {
        initialScreenPosition: new z(),
        currentScreenPosition: e.intersection.details.screenPoint.clone(),
        initialEvent: e,
        latestEvent: e
      }), this.save());
    }
    onPointerUp(e) {
      this.map.delete(e.pointerId) && this.save();
    }
    onPointerMove(e) {
      if (e.intersection.details.type != "screen-ray") return;
      const t = this.map.get(e.pointerId);
      t != null && (t.latestEvent = e, t.currentScreenPosition.copy(e.intersection.details.screenPoint));
    }
    save() {
      for (const e of this.map.values()) e.initialScreenPosition.copy(e.currentScreenPosition);
      this.initial = this.getInitial();
    }
    update() {
      this.map.size !== 0 && this.apply(this.initial, this.map);
    }
  }
  function Pr(r, e, t) {
    r.set(0, 0);
    let n = 0;
    for (const s of e.values()) r.add(s[t]), n++;
    n !== 0 && r.divideScalar(n);
  }
  const dn = new z(), jt = new N(), Ze = new b(), bs = new b(), vs = new b();
  function Al(r, e, t, n, s, i) {
    n.set(0, 0, 0);
    const o = e instanceof Ke ? r.distance * 2 * Math.tan(e.fov / 2 * Math.PI / 180) : (e.top - e.bottom) / e.zoom;
    dn.copy(t).multiplyScalar(-0.5 * s * o), r.getCameraTransformation(void 0, jt);
    const a = e instanceof Ke ? e.aspect : (e.right - e.left) / (e.top - e.bottom);
    i === "screen" ? (Ze.set(1, 0, 0).applyQuaternion(jt).multiplyScalar(dn.x * a), n.add(Ze), Ze.set(0, 1, 0).applyQuaternion(jt).multiplyScalar(dn.y), n.add(Ze)) : (bs.set(0, 0, -1).applyQuaternion(jt), vs.set(0, 1, 0).applyQuaternion(jt), Ze.copy(Math.abs(bs.y) < Math.abs(vs.y) ? bs : vs).setComponent(1, 0).normalize(), n.addScaledVector(Ze, dn.y), Ze.set(1, 0, 0).applyQuaternion(jt).setComponent(1, 0).normalize().multiplyScalar(dn.x * a), n.add(Ze));
  }
  const ws = new z(), sa = new z(), hn = new b();
  class Il extends fi {
    constructor(e, t, n, s, i, o, a) {
      super((l, c) => {
        if (!this.filter(c)) return;
        Pr(ws, c, "currentScreenPosition"), Pr(sa, c, "initialScreenPosition"), ws.sub(sa), Al(t.getState(), n(), ws, hn, this.speed ?? 1, this.space ?? "screen");
        const [u, f, h] = l;
        hn.x += u, hn.y += f, hn.z += h, (this.customApply ?? Sr)({
          origin: hn.toArray()
        }, t);
      }, () => t.getState().origin);
      __publicField(this, "canvas");
      __publicField(this, "filter");
      __publicField(this, "customApply");
      __publicField(this, "speed");
      __publicField(this, "space");
      this.canvas = e, this.filter = s, this.customApply = i, this.speed = o, this.space = a;
    }
    bind(e) {
      const t = (s) => s.preventDefault();
      this.canvas.addEventListener("contextmenu", t);
      const n = super.bind(e);
      return () => {
        n(), this.canvas.removeEventListener("contextmenu", t);
      };
    }
  }
  const pn = new b(), ia = new z();
  class Ol extends fi {
    constructor(e, t, n, s, i, o) {
      super(({ distance: a, origin: l }, c) => {
        if (c.size < 2 || this.filter != null && !this.filter(c)) return;
        const [u, f] = c.values(), h = u.initialScreenPosition.distanceTo(f.initialScreenPosition), g = u.currentScreenPosition.distanceTo(f.currentScreenPosition) / h, v = {
          distance: a / g
        };
        (this.zoomToPointer ?? false) && (ia.copy(u.currentScreenPosition).add(f.currentScreenPosition).multiplyScalar(0.5), v.origin = aa(ia, e.getState(), l, t(), g)), (this.customApply ?? Sr)(v, e);
      }, () => ({
        distance: e.getState().distance,
        origin: e.getState().origin
      }));
      __publicField(this, "store");
      __publicField(this, "getCamera");
      __publicField(this, "filter");
      __publicField(this, "customApply");
      __publicField(this, "speed");
      __publicField(this, "zoomToPointer");
      this.store = e, this.getCamera = t, this.filter = n, this.customApply = s, this.speed = i, this.zoomToPointer = o;
    }
    onWheel(e) {
      const t = Math.pow(0.95, (this.speed ?? 1) * e.deltaY * 0.01), n = {
        distance: this.store.getState().distance / t
      };
      if (e.intersection.details.type === "screen-ray" && (this.zoomToPointer ?? false)) {
        const s = this.store.getState();
        n.origin = aa(e.intersection.details.screenPoint, s, s.origin, this.getCamera(), t);
      }
      (this.customApply ?? Sr)(n, this.store);
    }
    bind(e) {
      const t = Mr(e), n = this.onWheel.bind(this);
      t.addEventListener("wheel", n);
      const s = super.bind(e);
      return () => {
        s(), t.removeEventListener("wheel", n);
      };
    }
  }
  const oa = new z();
  function aa(r, e, t, n, s) {
    oa.copy(r).multiplyScalar(-(s - 1) / s), Al(e, n, oa, pn, 1, "screen");
    const [i, o, a] = t;
    return pn.x += i, pn.y += o, pn.z += a, pn.toArray();
  }
  const Kn = new z(), la = new z();
  class Cl extends fi {
    constructor(e, t, n, s, i) {
      super(([o, a], l) => {
        if (!this.filter(l)) return;
        Pr(Kn, l, "currentScreenPosition"), Pr(la, l, "initialScreenPosition"), Kn.sub(la).multiplyScalar(-Math.PI * (this.speed ?? 1));
        const c = t(), u = c instanceof Ke ? c.aspect : (c.right - c.left) / (c.top - c.bottom);
        (this.customApply ?? Sr)({
          pitch: o - Kn.y,
          yaw: a + Kn.x * u
        }, e);
      }, () => [
        e.getState().pitch,
        e.getState().yaw
      ]);
      __publicField(this, "filter");
      __publicField(this, "customApply");
      __publicField(this, "speed");
      this.filter = n, this.customApply = s, this.speed = i;
    }
  }
  function cr(r, e) {
    r.pitch != null && (r.pitch = Je(r.pitch, -Math.PI / 2, Math.PI / 2)), e.setState(r);
  }
  const am = new b();
  class lm {
    constructor(e, t, n) {
      __publicField(this, "rotate");
      __publicField(this, "pan");
      __publicField(this, "zoom");
      __publicField(this, "store");
      __publicField(this, "getCamera");
      __publicField(this, "updateDamping");
      __publicField(this, "damping", false);
      if (n == null) {
        n = El();
        const s = typeof t == "function" ? t() : t;
        n.getState().setCameraPosition(...s.getWorldPosition(am).toArray());
      }
      this.store = n, this.getCamera = typeof t == "function" ? t : () => t, this.updateDamping = ui(n, this.getCamera, () => this.damping), this.rotate = new Cl(n, this.getCamera, Nr, cr), this.pan = new Il(e, n, this.getCamera, Hr, cr), this.zoom = new Ol(n, this.getCamera, void 0, cr);
    }
    getStore() {
      return this.store;
    }
    update(e) {
      this.rotate.update(), this.pan.update(), this.zoom.update(), this.updateDamping(e);
    }
    bind(e, t = false) {
      const n = this.rotate.bind(e), s = this.pan.bind(e), i = this.zoom.bind(e);
      let o;
      return t === false && (o = ci(this.store, this.getCamera)), this.damping = t, () => {
        n(), s(), i(), o == null ? void 0 : o();
      };
    }
  }
  const cm = new b();
  function ur(r, e) {
    r.pitch != null && (r.pitch = Je(r.pitch, -Math.PI / 2, 0)), e.setState(r);
  }
  class um {
    constructor(e, t, n) {
      __publicField(this, "rotate");
      __publicField(this, "pan");
      __publicField(this, "zoom");
      __publicField(this, "store");
      __publicField(this, "getCamera");
      __publicField(this, "updateDamping");
      __publicField(this, "damping", false);
      if (n == null) {
        n = El();
        const s = typeof t == "function" ? t() : t;
        n.getState().setCameraPosition(...s.getWorldPosition(cm).toArray());
      }
      this.store = n, this.getCamera = typeof t == "function" ? t : () => t, this.updateDamping = ui(n, this.getCamera, () => this.damping), this.rotate = new Cl(n, this.getCamera, Hr, ur), this.pan = new Il(e, n, this.getCamera, Nr, ur, 1, "xz"), this.zoom = new Ol(n, this.getCamera, void 0, ur);
    }
    getStore() {
      return this.store;
    }
    update(e) {
      this.rotate.update(), this.pan.update(), this.zoom.update(), this.updateDamping(e);
    }
    bind(e, t = false) {
      const n = this.rotate.bind(e), s = this.pan.bind(e), i = this.zoom.bind(e);
      let o;
      return t === false && (o = ci(this.store, this.getCamera)), this.damping = t, () => {
        n(), s(), i(), o == null ? void 0 : o();
      };
    }
  }
  function Hr(r) {
    if (r.size != 1) return r.size === 2;
    const [e] = r.values();
    return e.initialEvent.button === 2;
  }
  function Nr(r) {
    if (r.size != 1) return false;
    const [e] = r.values();
    return e.initialEvent.button === 0;
  }
  function fm(r, e = {}, t) {
    const n = p.useRef(e);
    n.current = e;
    const s = p.useRef(t);
    s.current = t;
    const i = p.useMemo(() => new xl(r, () => {
      var _a2;
      return {
        ...(_a2 = s.current) == null ? void 0 : _a2.call(s),
        ...n.current
      };
    }), [
      r
    ]);
    X((a) => i.update(a.clock.getElapsedTime()), -1);
    const o = e.handle ?? r;
    return p.useEffect(() => {
      if (e.bind === false) return;
      const a = o.current;
      if (a != null) return i.bind(a);
    }, [
      i,
      o,
      e.bind
    ]), i;
  }
  const Xs = p.createContext(void 0);
  p.forwardRef(({ targetRef: r, children: e }, t) => {
    const n = p.useRef(null);
    return p.useImperativeHandle(t, () => (r ?? n).current, [
      r
    ]), r != null ? d.jsx(Xs.Provider, {
      value: r,
      children: e
    }) : d.jsx(Xs.Provider, {
      value: n,
      children: d.jsx("group", {
        ref: n,
        children: e
      })
    });
  });
  const dm = p.forwardRef(({ children: r, handleRef: e, useTargetFromContext: t, targetRef: n, getHandleOptions: s, ...i }, o) => {
    const a = p.useRef(null);
    let l = p.useContext(Xs);
    if (t === true && (n = "from-context"), n === "from-context") {
      if (l == null) throw new Error(`no HandleTarget found in the context of this handle while 'targetRef="from-context"' is set. Either wrap the Handle in a <HandleTarget> or remove the 'targetRef="from-context"' property or set it to an ref.`);
      n = l;
    }
    const u = fm(n ?? e ?? a, {
      handle: e ?? a,
      ...i
    }, s);
    return p.useImperativeHandle(o, () => u, [
      u
    ]), e != null ? r : d.jsx("group", {
      ref: a,
      children: r
    });
  });
  function _l(r) {
    const e = W((t) => t.controls);
    return p.useCallback((t, n) => (e != null && t.first && (e.enabled = false), e != null && t.last && (e.enabled = true), (r ?? oi)(t, n)), [
      r,
      e
    ]);
  }
  function pe(r) {
    if (r === false) return false;
    if (r === true || r === void 0 || r === "disabled") return "disabled";
    if (typeof r == "string") {
      const e = {
        x: false,
        y: false,
        z: false,
        e: false
      };
      return e[r] = "disabled", e;
    }
    return {
      x: Jn(r.x),
      y: Jn(r.y),
      z: Jn(r.z),
      e: Jn(r.e)
    };
  }
  function Jn(r) {
    return r === false ? false : "disabled";
  }
  p.forwardRef(({ children: r, scale: e, translation: t, rotation: n, size: s, fixed: i, disabled: o, hidden: a, ...l }, c) => d.jsxs(hm, {
    ...l,
    ref: c,
    children: [
      d.jsx(pm, {
        scale: e,
        translation: t,
        rotation: n,
        size: s,
        fixed: i,
        hidden: a,
        disabled: o
      }),
      r
    ]
  }));
  const Ll = p.createContext(void 0), hm = p.forwardRef(({ alwaysUpdate: r, apply: e, stopPropagation: t, children: n, ...s }, i) => {
    const o = p.useRef(null);
    p.useImperativeHandle(i, () => o.current, []);
    const a = _l(e), l = {
      alwaysUpdate: r,
      apply: a,
      stopPropagation: t
    }, c = p.useRef(l);
    c.current = l;
    const u = p.useMemo(() => new ai(o, () => c.current), []);
    return X((f) => u.update(f.clock.getElapsedTime()), -1), d.jsx("group", {
      ...s,
      ref: o,
      children: d.jsx(Ll.Provider, {
        value: u,
        children: n
      })
    });
  }), pm = p.forwardRef(({ size: r, fixed: e, scale: t, rotation: n, translation: s, disabled: i, hidden: o }, a) => {
    const l = p.useContext(Ll);
    if (l == null) throw new Error("PivotHandlesHandles can only be used inside PivotHandlesContext");
    const c = p.useMemo(() => new Xp(l), [
      l
    ]);
    return p.useImperativeHandle(a, () => c, [
      c
    ]), r !== null && (c.size = r), e !== null && (c.fixed = e), p.useEffect(() => o ? void 0 : c.scaleX.bind(16719968, i ? pe(t) : t), [
      i,
      t,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.scaleY.bind(2154368, i ? pe(t) : t), [
      i,
      t,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.scaleZ.bind(2130175, i ? pe(t) : t), [
      i,
      t,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.rotationX.bind(16719968, i ? pe(n) : n), [
      i,
      n,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.rotationY.bind(2154368, i ? pe(n) : n), [
      i,
      n,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.rotationZ.bind(2130175, i ? pe(n) : n), [
      i,
      n,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationX.bind(16719968, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationY.bind(2154368, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationZ.bind(2130175, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationXY.bind(16719968, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationYZ.bind(2130175, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), p.useEffect(() => o ? void 0 : c.translationXZ.bind(2154368, 16777024, i ? pe(s) : s), [
      i,
      s,
      c,
      o
    ]), X((u) => c.update(u.camera)), d.jsx("primitive", {
      object: c
    });
  }), mm = new Y(), gm = new Y(0, 0, Math.PI / 2), ym = new Y(0, -Math.PI / 2, 0);
  p.forwardRef(({ children: r, mode: e, size: t, fixed: n, disabled: s, hidden: i, x: o, y: a, z: l, e: c, ...u }, f) => d.jsxs(xm, {
    ...u,
    ref: f,
    children: [
      d.jsx(bm, {
        hidden: i,
        disabled: s,
        mode: e,
        x: o,
        y: a,
        z: l,
        e: c,
        size: t,
        fixed: n
      }),
      d.jsx(Ss, {
        tag: "x",
        rotationOffset: mm
      }),
      d.jsx(Ss, {
        tag: "y",
        rotationOffset: gm
      }),
      d.jsx(Ss, {
        tag: "z",
        rotationOffset: ym
      }),
      r
    ]
  }));
  const Ss = p.forwardRef(({ tag: r, rotationOffset: e }, t) => {
    const n = p.useContext(di);
    if (n == null) throw new Error("HandlesAxisHighlight can only be used inside TransformHandlesContext");
    const s = p.useMemo(() => new ar(n, e), [
      n,
      e
    ]);
    return p.useImperativeHandle(t, () => s, [
      s
    ]), p.useEffect(() => s.bind(r), [
      s,
      r
    ]), X(() => s.update()), d.jsx("primitive", {
      object: s
    });
  }), di = p.createContext(void 0), xm = p.forwardRef(({ alwaysUpdate: r, apply: e, stopPropagation: t, children: n, context: s, space: i, ...o }, a) => {
    const l = p.useRef(null), c = _l(e);
    p.useImperativeHandle(a, () => l.current, []);
    const u = {
      alwaysUpdate: r,
      apply: c,
      stopPropagation: t
    }, f = p.useRef(u);
    f.current = u;
    const h = p.useMemo(() => s ?? new ai(l, () => f.current), [
      s
    ]);
    return i !== null && (h.space = i), X((m) => h.update(m.clock.getElapsedTime()), -1), d.jsx("group", {
      ...o,
      ref: l,
      children: d.jsx(di.Provider, {
        value: h,
        children: n
      })
    });
  }), bm = p.forwardRef(({ mode: r = "translate", x: e, y: t, z: n, e: s, size: i, fixed: o, disabled: a, hidden: l }, c) => {
    const u = p.useContext(di);
    if (u == null) throw new Error("TransformHandlesHandles can only be used inside TransformHandlesContext");
    const f = p.useMemo(() => {
      switch (r) {
        case "rotate":
          return new Tl(u);
        case "scale":
          return new Pl(u);
        case "translate":
          return new Sl(u);
      }
    }, [
      u,
      r
    ]);
    return i !== null && (f.size = i), o !== null && (f.fixed = o), p.useImperativeHandle(c, () => f, [
      f
    ]), X((h) => f.update(h.camera)), p.useEffect(() => l ? void 0 : f.bind(a ? pe({
      x: e,
      y: t,
      z: n,
      e: s
    }) : {
      x: e,
      y: t,
      z: n,
      e: s
    }), [
      f,
      l,
      a,
      e,
      t,
      n,
      s
    ]), d.jsx("primitive", {
      object: f
    });
  });
  function jl(r, e, t, n, { apply: s, rotate: i, zoom: o, pan: a, store: l, camera: c, damping: u, disabled: f }) {
    const h = st(), m = p.useRef(c);
    m.current = c;
    const g = p.useCallback(() => m.current ?? h.getState().camera, [
      h
    ]), v = W((O) => O.gl.domElement), x = p.useMemo(() => new r(v, g, l), [
      v,
      r,
      g,
      l
    ]);
    vm(x.getStore(), f, u, c), X((O, _) => x.update(_ * 1e3));
    const S = W((O) => O.scene), R = !f && (typeof a == "boolean" ? a : true);
    p.useEffect(() => R ? x.pan.bind(S) : void 0, [
      x,
      R,
      S
    ]), x.pan.customApply = s, x.pan.speed = typeof a == "boolean" ? void 0 : a == null ? void 0 : a.speed, x.pan.filter = (typeof a == "boolean" ? void 0 : a == null ? void 0 : a.filter) ?? t;
    const M = !f && (typeof i == "boolean" ? i : true);
    p.useEffect(() => M ? x.rotate.bind(S) : void 0, [
      x,
      M,
      S
    ]), x.rotate.customApply = s ?? n, x.rotate.speed = typeof i == "boolean" ? void 0 : i == null ? void 0 : i.speed, x.rotate.filter = (typeof i == "boolean" ? void 0 : i == null ? void 0 : i.filter) ?? e;
    const I = !f && (typeof o == "boolean" ? o : true);
    p.useEffect(() => I ? x.zoom.bind(S) : void 0, [
      x,
      I,
      S
    ]), x.zoom.customApply = s, x.zoom.speed = typeof o == "boolean" ? void 0 : o == null ? void 0 : o.speed, x.zoom.filter = typeof o == "boolean" ? void 0 : o == null ? void 0 : o.filter;
  }
  function vm(r, e = false, t = false, n) {
    const s = st(), i = p.useRef(n);
    i.current = n;
    const o = p.useCallback(() => i.current ?? s.getState().camera, [
      s
    ]), a = t !== false;
    p.useEffect(() => !e && !a ? ci(r, o) : void 0, [
      a,
      e,
      o,
      r
    ]);
    const l = p.useRef(t);
    l.current = t;
    const c = p.useMemo(() => ui(r, o, () => l.current), [
      r,
      o
    ]);
    X((u, f) => c(f * 1e3));
  }
  jl.bind(null, um, Hr, Nr, ur);
  jl.bind(null, lm, Nr, Hr, cr);
  function wm({ children: r }) {
    const e = p.useRef(null);
    return X(() => {
      if (!e.current || !e.current.target || !e.current.target.current) return;
      const t = e.current.getState();
      t && t.current && t.current.position ? (Se.getState().setIsHoldingXRPlunger(true), Se.getState().setPlungerXRPosition(-t.current.position.y)) : (e.current.target.current.position.y = 0, Se.getState().setIsHoldingXRPlunger(false));
    }), d.jsx(dm, {
      ref: e,
      translate: {
        x: false,
        y: [
          -0.12,
          0
        ],
        z: false
      },
      rotate: false,
      children: r
    });
  }
  function Sm() {
    const { nodes: r, materials: e } = Rn(vp);
    p.useEffect(() => {
      e.chrome.side = dr, e["red rubber"].side = dr;
    }, [
      e
    ]);
    const t = p.useMemo(() => new V({
      map: e["CabinetExtras_Baked.003"].emissiveMap
    }), [
      e
    ]), n = p.useMemo(() => new V({
      map: e.PinballCabinet_Baked.emissiveMap
    }), [
      e
    ]);
    return d.jsxs("group", {
      dispose: null,
      children: [
        d.jsx("group", {
          position: [
            -0.256,
            -0.144,
            -0.769
          ],
          rotation: [
            -Math.PI / 2,
            0,
            0
          ],
          scale: [
            0.526,
            0.599,
            0.54
          ],
          children: d.jsxs(wm, {
            children: [
              d.jsx("mesh", {
                geometry: r.VRCab_PlungerHousing001.geometry,
                material: e.chrome
              }),
              d.jsx("mesh", {
                geometry: r.VRCab_PlungerHousing001_1.geometry,
                material: e["red rubber"]
              })
            ]
          })
        }),
        d.jsx("group", {
          position: [
            0,
            -0.522,
            -0.7
          ],
          rotation: [
            Math.PI / 2,
            0,
            -2.356
          ],
          children: d.jsx("mesh", {
            geometry: r.Plane011.geometry,
            material: t
          })
        }),
        d.jsx("mesh", {
          geometry: r.PinballCabinet_Baked.geometry,
          material: n,
          position: [
            0,
            5e-3,
            0
          ],
          rotation: [
            0.119,
            0,
            0
          ],
          scale: 0.276
        })
      ]
    });
  }
  const Hl = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/room-RxdO38m6.glb";
  function Pm() {
    const r = p.useRef(null), e = 1368, t = 770, n = p.useRef(false), s = p.useRef(null), i = p.useRef(null), o = () => {
      if (!n.current) {
        if (n.current = true, s.current) {
          const f = s.current.closest(".desktop-wrapper");
          f && f.classList.remove("disable-interactions");
        }
        l.current && (l.current.tabIndex = 0);
      }
    }, a = () => {
      if (n.current) {
        if (n.current = false, s.current) {
          const f = s.current.closest(".desktop-wrapper");
          f && f.classList.add("disable-interactions");
        }
        l.current && (l.current.tabIndex = -1);
      }
    };
    p.useEffect(() => {
      if (Se.getState().skipIntroSequence) setTimeout(() => {
        i.current && (i.current.style.opacity = "0");
      }, 200);
      else return qs.on("finishedIntroSequence", () => {
        i.current && (i.current.style.opacity = "0");
      });
    }, []), p.useEffect(() => {
      const f = new BroadcastChannel("desktop-apps"), h = Yc.subscribe((m) => m.topicData[qc.observe], (m) => {
        m && (f.postMessage({
          type: "FRONTEND_UPDATE",
          data: {
            requests: Math.round(m.edgeRequestsPerMinute || 0),
            megabytes: Math.round(m.edgeTBPerMinute * 1e3 || 0),
            cdn: Math.round(m.CDNRequestsPerMinute || 0)
          }
        }), f.postMessage({
          type: "BACKEND_UPDATE",
          data: {
            webhooks: Math.round(m.webhooksPerMinute || 0),
            shopify: Math.round(m.shopifyFunctionsRunsPerMinute || 0),
            database: Math.round(m.databaseQueriesPerMinute || 0)
          }
        }), f.postMessage({
          type: "OTHER_UPDATE",
          data: {
            log: Math.round(m.totalLogIngestedPerMinute || 0),
            kafka: Math.round(m.kafkaMessagesPerMinute || 0)
          }
        }));
      }, {
        fireImmediately: true
      });
      return () => {
        h(), f.close();
      };
    }, []);
    const l = p.useRef(null);
    p.useEffect(() => {
      const f = B.subscribe((m) => m.menuMode, (m) => {
        m === A.Computer ? o() : (a(), ht.getState().unsuppress());
      }, {
        fireImmediately: true
      }), h = (m) => {
        m.data.type === "EXIT_COMPUTER_MODE" && B.getState().setMenuMode(A.Explore);
      };
      return window.addEventListener("message", h), () => {
        window.removeEventListener("message", h), f();
      };
    }, []);
    const c = () => {
      ht.getState().suppress();
    }, u = () => {
      ht.getState().unsuppress();
    };
    return d.jsx(su, {
      wrapperClass: "desktop-wrapper disable-interactions",
      ref: s,
      transform: true,
      scale: 0.018,
      zIndexRange: [
        0,
        0
      ],
      style: {
        width: `${e}px`,
        height: `${t}px`,
        pointerEvents: "auto",
        userSelect: "none"
      },
      children: d.jsxs("div", {
        onPointerEnter: c,
        onPointerLeave: u,
        style: {
          width: "100%",
          height: "100%"
        },
        children: [
          d.jsx("div", {
            className: "desktop-overlay",
            ref: i,
            style: {
              width: "100%",
              height: "100%",
              background: "#000",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 1e3
            }
          }),
          d.jsx("link", {
            href: "https://fonts.googleapis.com/icon?family=Material+Icons",
            rel: "stylesheet"
          }),
          d.jsx("div", {
            ref: r,
            style: {
              width: `${e}px`,
              height: `${t}px`
            },
            children: d.jsx("iframe", {
              ref: l,
              src: "/desktop/index.html",
              width: "100%",
              height: "100%",
              title: "BFCM Os",
              style: {
                border: "0"
              },
              tabIndex: -1
            })
          })
        ]
      })
    });
  }
  const Yt = ({ tooltip: r, children: e, updateCursorStyle: t, validModes: n, targetName: s, innerText: i, stopPropagation: o = false }) => {
    const a = W((h) => h.gl), l = p.useRef(null), c = p.useRef(A.Explore);
    p.useEffect(() => {
      const h = B.subscribe((m) => m.menuMode, (m) => {
        c.current = m, n.includes(m) || (ht.getState().hide(), t && (m === A.Globe && B.getState().globeIsBeingHovered || a.domElement.style.setProperty("cursor", "auto", "important")));
      }, {
        fireImmediately: true
      });
      return () => {
        h();
      };
    }, [
      a,
      t,
      n
    ]);
    const u = (h) => {
      if (h.pointerType === "touch") return;
      o && h.stopPropagation(), n.includes(c.current) && (t && a.domElement.style.setProperty("cursor", "pointer", "important"), r && (ht.getState().show(), ht.getState().setTooltipText(r)));
    }, f = (h) => {
      if (h.pointerType === "touch") return;
      o && h.stopPropagation(), n.includes(c.current) && (t && a.domElement.style.setProperty("cursor", "auto", "important"), r && ht.getState().hide());
    };
    return d.jsx(iu, {
      targetName: s,
      innerText: i || r,
      parentName: "interactable-hover-effect",
      extraMetadata: {
        innerText: i || "",
        tooltip: r || ""
      },
      children: d.jsx("group", {
        ref: l,
        onPointerMove: u,
        onPointerLeave: f,
        children: e
      })
    });
  }, Ps = 0.615, Ts = 0.345, er = 0.615 * 5, ca = 0.345 * 11, ua = 0.615, tr = 0.345 * 5, Tm = () => {
    const { trackClick: r } = Na();
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx($s, {
          tooltip: "Use Computer",
          menuMode: A.Computer,
          validModesToDisplayTooltip: [
            A.Explore,
            A.Pinball
          ],
          targetName: "computer-enter",
          children: d.jsxs("mesh", {
            position: [
              0,
              0.01,
              0
            ],
            rotation: [
              Math.PI * -0.5,
              0,
              0
            ],
            scale: [
              Ps,
              Ts,
              1
            ],
            layers: J,
            onClick: () => {
              (B.getState().menuMode === A.Explore || B.getState().menuMode === A.Pinball) && B.getState().setMenuMode(A.Computer);
            },
            visible: false,
            children: [
              d.jsx("planeGeometry", {
                args: [
                  1,
                  1
                ]
              }),
              d.jsx("meshBasicMaterial", {
                color: "green",
                wireframe: true
              })
            ]
          })
        }),
        d.jsx(Yt, {
          tooltip: "Go Back",
          updateCursorStyle: true,
          validModes: [
            A.Computer
          ],
          stopPropagation: true,
          children: d.jsxs("group", {
            onClick: (e) => {
              B.getState().menuMode === A.Computer && (e.stopPropagation(), B.getState().setMenuMode(A.Explore), r({
                targetName: "computer-exit",
                eventType: "pointerdown",
                innerText: "Go Back"
              }));
            },
            children: [
              d.jsxs("mesh", {
                position: [
                  Ps / 2 + er / 2,
                  0.01,
                  0
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                scale: [
                  er,
                  ca,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "red",
                    wireframe: true
                  })
                ]
              }),
              d.jsxs("mesh", {
                position: [
                  -Ps / 2 - er / 2,
                  0.01,
                  0
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                scale: [
                  er,
                  ca,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "yellow",
                    wireframe: true
                  })
                ]
              }),
              d.jsxs("mesh", {
                position: [
                  0,
                  0.01,
                  Ts / 2 + tr / 2
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                scale: [
                  ua,
                  tr,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "blue",
                    wireframe: true
                  })
                ]
              }),
              d.jsxs("mesh", {
                position: [
                  0,
                  0.01,
                  -Ts / 2 - tr / 2
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                scale: [
                  ua,
                  tr,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "purple",
                    wireframe: true
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  };
  var Rm = `vec4 sampledDiffuseColor;

if (lampIsOn) {
  sampledDiffuseColor = texture2D( map, vMapUv );
} else {
  sampledDiffuseColor = texture2D( lampOffTexture, vMapUv );
}

diffuseColor *= sampledDiffuseColor;`, Mm = `uniform sampler2D lampOffTexture;
uniform bool lampIsOn;`;
  Bt.preload(Fa);
  const Em = ({ lamp: r }) => {
    const e = p.useRef(true), t = Bt(Fa, (i) => {
      i.anisotropy = 4, i.flipY = false, i.colorSpace = nt, i.needsUpdate = true;
    }), n = p.useRef(null), s = p.useMemo(() => {
      const i = new V({
        map: r.material.emissiveMap
      });
      return i.onBeforeCompile = (o) => {
        n.current = o, o.uniforms.time = {
          value: 0
        }, o.uniforms.lampOffTexture = {
          value: t
        }, o.uniforms.lampIsOn = {
          value: true
        }, o.fragmentShader = o.fragmentShader.replace("#include <common>", `
        #include <common>
        ${Mm}`), o.fragmentShader = o.fragmentShader.replace("#include <map_fragment>", `
        ${Rm}
        `);
      }, i;
    }, [
      r,
      t
    ]);
    return d.jsxs("group", {
      children: [
        d.jsx("mesh", {
          geometry: r.geometry,
          material: s,
          position: r.position,
          rotation: r.rotation,
          scale: r.scale
        }),
        d.jsx(Yt, {
          tooltip: "Toggle Lamp",
          updateCursorStyle: true,
          validModes: [
            A.Explore,
            A.Pinball
          ],
          stopPropagation: true,
          children: d.jsxs("group", {
            onClick: (i) => {
              B.getState().menuMode !== A.Explore && B.getState().menuMode !== A.Pinball || (i.stopPropagation(), e.current = !e.current, Se.getState().setLampIsOn(e.current), n.current && (n.current.uniforms.lampIsOn.value = e.current), Ue.getState().addSoundToQueue(Ge.LampToggle));
            },
            children: [
              d.jsx("mesh", {
                position: [
                  -0.58225,
                  0.4475,
                  -0.2033
                ],
                layers: J,
                visible: false,
                children: d.jsx("boxGeometry", {
                  args: [
                    0.121,
                    0.184,
                    0.121
                  ]
                })
              }),
              d.jsx("mesh", {
                position: [
                  -0.655,
                  0.181 + 0.1 * 0.5,
                  -0.3425
                ],
                layers: J,
                visible: false,
                children: d.jsx("boxGeometry", {
                  args: [
                    0.164,
                    0.361 + 0.1,
                    0.167
                  ]
                })
              })
            ]
          })
        })
      ]
    });
  };
  var Am = `vNumpad = round(_numpad);
vHoverProgress = 0.0;

vec3 transformed = vec3( position );

if (vNumpad < 10.0) {
  
  
  float startTime = startTimes[int(vNumpad)];
  float pressProgress = 0.0;
  if (startTime >= 0.0) {
    float rawProgress = easeOutCubic(clamp((time - startTime) / animationDuration, 0.0, 1.0));
    
    
    pressProgress = 1.0 - abs(rawProgress * 2.0 - 1.0);
  }

  
  float hoverStartTime = hoverStartTimes[int(vNumpad)];
  float hoverProgress = 0.0;
  if (hoverStartTime >= 0.0) {
    
    hoverProgress = clamp((time - hoverStartTime) / hoverAnimationDuration, 0.0, 1.0);
    hoverProgress = easeOutCubic(hoverProgress);
  } else if (hoverStartTime < -1.0) {
    
    float hoverOutStartTime = abs(hoverStartTime);
    hoverProgress = 1.0 - clamp((time - hoverOutStartTime) / hoverAnimationDuration, 0.0, 1.0);
    hoverProgress = easeOutCubic(hoverProgress);
  }

  vHoverProgress = hoverProgress;

  
  float pressOffset = pressProgress * pressDistance;
  float hoverOffset = hoverProgress * hoverDistance;
  transformed.y = transformed.y - max(pressOffset, hoverOffset);
}

#ifdef USE_ALPHAHASH

  vPosition = vec3( position );

#endif`, Im = `vec4 sampledDiffuseColor;

if (lampIsOn) {
   sampledDiffuseColor = texture2D( map, vMapUv );
} else {
   sampledDiffuseColor = texture2D( numpadLampOffTexture, vMapUv );
}

if (vNumpad < 10.0) {
   
   sampledDiffuseColor.rgb *= (vec3(1.0) + vHoverProgress * hoverGlowColor * hoverGlowBloom);
}

diffuseColor *= sampledDiffuseColor;`, Om = `if (vNumpad >= 11.0) {
   
   gl_FragColor = vec4( ledColor * ledBloom, diffuseColor.a );
}`, Cm = `varying float vNumpad;
varying float vHoverProgress;

uniform vec3 ledColor;
uniform float ledBloom;
uniform vec3 hoverGlowColor;
uniform float hoverGlowBloom;
uniform sampler2D numpadLampOffTexture;
uniform bool lampIsOn;`, _m = `attribute float _numpad;

uniform float startTimes[10];
uniform float hoverStartTimes[10];
uniform float time;

varying float vNumpad;
varying float vHoverProgress;

float easeOutCubic(float x) {
  return 1.0 - pow(1.0 - x, 3.0);
}

const float animationDuration = 0.2;
const float hoverAnimationDuration = 0.2;
const float pressDistance = 0.015;
const float hoverDistance = 0.0015;`, Lm = `vec2 vUv = vMapUv;

int digitIndex = int(clamp(floor(vUv.x / digitWidth), 0.0, 3.0));
float startingPointX = float(digitIndex) * digitWidth;

vec2 adjustedUv = vUv;

float sizeScalingFactor = 1.0 + sizeIncreaseInPercent;
float sizeHorizontalOffset = digitWidth * sizeIncreaseInPercent * 0.5;
adjustedUv.x = (vUv.x - startingPointX + sizeHorizontalOffset) / (digitWidth * sizeScalingFactor);

float newDigitHeight = originalDigitHeight * (1.0 / sizeScalingFactor);
float sizeVerticalOffset = (newDigitHeight - originalDigitHeight) * 0.5;
adjustedUv.y = ((adjustedUv.y * newDigitHeight) - sizeVerticalOffset) + digitVerticalOffsets[digitIndex];

adjustedUv.x = clamp(adjustedUv.x, 0.0, 1.0);
adjustedUv.y = clamp(adjustedUv.y, digitVerticalOffsets[digitIndex], digitVerticalOffsets[digitIndex] + originalDigitHeight);

vec4 sampledDiffuseColor = texture2D(map, adjustedUv);
if (sampledDiffuseColor.g > 0.1) {
  if (rejected) {
    sampledDiffuseColor.rgb = digitRejectedColor * digitRejectedBloom;
  } else {
    sampledDiffuseColor.rgb *= digitBloom;
  }
} else {
  sampledDiffuseColor.rgb *= unlitDigitMultiplier;
}
diffuseColor *= sampledDiffuseColor;`, jm = `uniform float digitVerticalOffsets[4];
uniform float digitBloom;
uniform float unlitDigitMultiplier;
uniform vec3 digitRejectedColor;
uniform float digitRejectedBloom;
uniform bool rejected;

const float digitWidth = 0.25;
const float originalDigitHeight = 1.0 / 12.0;
const float sizeIncreaseInPercent = -0.1;`;
  const Hm = 6, Nm = 0.075, Dm = "#FFC8C8", Fm = 8, fa = "#FFF9C4", da = 4, zm = "#C8FFC8", km = 4, Xm = "#FFC8C8", Um = 8, Gm = "#FF7F1A", Bm = 2.4;
  Bt.preload(za);
  Bt.preload(ka);
  const Wm = ({ numpadMesh: r, numpadWorldTransform: e, numpadScreenWorldTransform: t }) => {
    const n = Bt(za);
    n.wrapS = As, n.wrapT = As, n.minFilter = mt, n.magFilter = mt;
    const s = Bt(ka, (w) => {
      w.flipY = false, w.colorSpace = nt, w.needsUpdate = true;
    }), i = W((w) => w.clock), o = W((w) => w.gl), a = p.useRef(Array(10).fill(-100)), l = p.useRef(Array(10).fill(-1)), c = p.useRef(null), u = p.useRef(null), f = p.useMemo(() => {
      const w = new V({
        map: r.material.emissiveMap
      });
      return w.onBeforeCompile = (T) => {
        c.current = T, T.uniforms.time = {
          value: 0
        }, T.uniforms.startTimes = {
          value: Array(10).fill(-100)
        }, T.uniforms.hoverStartTimes = {
          value: Array(10).fill(-1)
        }, T.uniforms.ledColor = {
          value: new ie(fa).convertSRGBToLinear()
        }, T.uniforms.ledBloom = {
          value: da
        }, T.uniforms.hoverGlowColor = {
          value: new ie(Gm).convertSRGBToLinear()
        }, T.uniforms.hoverGlowBloom = {
          value: Bm
        }, T.uniforms.numpadLampOffTexture = {
          value: s
        }, T.uniforms.lampIsOn = {
          value: true
        }, T.vertexShader = T.vertexShader.replace("#include <common>", `
        #include <common>
        ${_m}`), T.vertexShader = T.vertexShader.replace("#include <begin_vertex>", `
        ${Am}`), T.fragmentShader = T.fragmentShader.replace("#include <common>", `
        #include <common>
        ${Cm}`), T.fragmentShader = T.fragmentShader.replace("#include <map_fragment>", `
        ${Im}
        `), T.fragmentShader = T.fragmentShader.replace("#include <opaque_fragment>", `
        #include <opaque_fragment>
        ${Om}`);
      }, w;
    }, [
      r,
      s
    ]), h = p.useMemo(() => {
      const w = new Gs({
        map: n
      });
      return w.onBeforeCompile = (T) => {
        u.current = T, T.uniforms.digitVerticalOffsets = {
          value: x.current
        }, T.uniforms.digitBloom = {
          value: Hm
        }, T.uniforms.unlitDigitMultiplier = {
          value: Nm
        }, T.uniforms.digitRejectedColor = {
          value: new ie(Dm).convertSRGBToLinear()
        }, T.uniforms.digitRejectedBloom = {
          value: Fm
        }, T.uniforms.rejected = {
          value: false
        }, T.fragmentShader = T.fragmentShader.replace("#include <common>", `
        #include <common>
        ${jm}`), T.fragmentShader = T.fragmentShader.replace("#include <map_fragment>", `
        ${Lm}
        `);
      }, w;
    }, [
      n
    ]);
    X(() => {
      c.current && (c.current.uniforms.time.value = i.elapsedTime);
    });
    const m = 0.116, g = m / 4, v = p.useMemo(() => g / 0.703125, [
      g
    ]), x = p.useRef([
      0,
      0,
      0,
      0
    ]), S = p.useRef([
      0,
      0,
      0,
      0
    ]), R = p.useRef([]), M = p.useRef(false), I = p.useRef(false), [O, _] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Oe.linear,
        duration: 1250
      },
      onChange: () => {
        if (!u.current) return;
        const w = O.progress.get();
        w < 0.2 ? u.current.uniforms.digitVerticalOffsets.value = S.current : w < 0.4 ? u.current.uniforms.digitVerticalOffsets.value = x.current : w < 0.6 ? u.current.uniforms.digitVerticalOffsets.value = S.current : w < 0.8 ? u.current.uniforms.digitVerticalOffsets.value = x.current : u.current.uniforms.digitVerticalOffsets.value = S.current;
      },
      onRest: () => {
        !u.current || !c.current || (x.current = [
          0,
          0,
          0,
          0
        ], R.current = [], M.current = false, u.current.uniforms.digitVerticalOffsets.value = x.current, u.current.uniforms.rejected.value = false, c.current.uniforms.ledColor.value = new ie(fa).convertSRGBToLinear(), c.current.uniforms.ledBloom.value = da, I.current = false);
      }
    }), []), { trackClick: L } = Na(), C = p.useCallback((w) => {
      if (!c.current || I.current) return;
      R.current.push(w);
      const T = R.current.length === 4, ne = {
        digit: w.toString(),
        finishedEnteringCode: T.toString()
      };
      if (T) {
        I.current = true;
        const re = R.current.join(""), ye = $c.getState().processCheatCode(re);
        ye ? (c.current.uniforms.ledColor.value = new ie(zm).convertSRGBToLinear(), c.current.uniforms.ledBloom.value = km, Ue.getState().addSoundToQueue(Ge.CodeGood), M.current = true) : (c.current.uniforms.ledColor.value = new ie(Xm).convertSRGBToLinear(), c.current.uniforms.ledBloom.value = Um, Ue.getState().addSoundToQueue(Ge.CodeBad), M.current = false), ne.codeIsCorrect = ye, ne.enteredDigits = R.current.join("");
      }
      L({
        targetName: `numpad-button-${w.toString()}`,
        innerText: `Number ${w}`,
        parentName: "numpad",
        eventType: "pointerdown",
        extraMetadata: ne
      });
      const F = [
        0,
        0,
        0,
        0
      ], K = R.current;
      for (let re = 0; re < K.length; re++) F[4 - K.length + re] = (11 - K[re]) / 12;
      x.current = F, u.current && (u.current.uniforms.digitVerticalOffsets.value = F), T && (u.current && (u.current.uniforms.rejected.value = !M.current), _.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        delay: 250
      }));
    }, [
      _,
      L
    ]), E = p.useRef(A.Explore);
    return p.useEffect(() => {
      const w = B.subscribe((T) => T.menuMode, (T) => {
        E.current = T;
      }, {
        fireImmediately: true
      });
      return () => {
        w();
      };
    }, [
      o
    ]), p.useEffect(() => {
      const w = Se.subscribe((T) => T.lampIsOn, (T) => {
        c.current && (c.current.uniforms.lampIsOn.value = T);
      });
      return () => {
        w();
      };
    }, [
      o
    ]), d.jsxs(d.Fragment, {
      children: [
        d.jsxs("group", {
          position: e.position,
          quaternion: e.quaternion,
          scale: e.scale,
          children: [
            d.jsx("mesh", {
              geometry: r.geometry,
              material: f
            }),
            [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9
            ].map((w) => {
              const T = (w - 1) % 3, ne = Math.floor((w - 1) / 3);
              return d.jsxs("mesh", {
                position: [
                  -0.015 + 0.035 * T,
                  0.09,
                  -0.0475 + 0.035 * ne
                ],
                visible: false,
                layers: J,
                onPointerOver: (F) => {
                  E.current !== A.Explore && E.current !== A.Pinball || (F.stopPropagation(), o.domElement.style.cursor = "pointer", c.current && (l.current[w] = i.elapsedTime, c.current.uniforms.hoverStartTimes.value = l.current));
                },
                onPointerOut: (F) => {
                  E.current !== A.Explore && E.current !== A.Pinball || (F.stopPropagation(), o.domElement.style.cursor = "auto", c.current && (l.current[w] = -i.elapsedTime, c.current.uniforms.hoverStartTimes.value = l.current));
                },
                onPointerDown: (F) => {
                  E.current !== A.Explore && E.current !== A.Pinball || (F.stopPropagation(), c.current && (a.current[w] = i.elapsedTime, c.current.uniforms.startTimes.value = a.current), Ue.getState().addSoundToQueue(Ge.NumpadButtonPress), C(w));
                },
                children: [
                  d.jsx("boxGeometry", {
                    args: [
                      0.024,
                      0.019,
                      0.024
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "cyan",
                    wireframe: true
                  })
                ]
              }, w);
            }),
            d.jsxs("mesh", {
              position: [
                -0.015 + 0.035 * 0.5,
                0.09,
                -0.0475 + 0.035 * 3
              ],
              visible: false,
              layers: J,
              onPointerOver: (w) => {
                E.current !== A.Explore && E.current !== A.Pinball || (w.stopPropagation(), o.domElement.style.cursor = "pointer", c.current && (l.current[0] = i.elapsedTime, c.current.uniforms.hoverStartTimes.value = l.current));
              },
              onPointerOut: (w) => {
                E.current !== A.Explore && E.current !== A.Pinball || (w.stopPropagation(), o.domElement.style.cursor = "auto", c.current && (l.current[0] = -i.elapsedTime, c.current.uniforms.hoverStartTimes.value = l.current));
              },
              onPointerDown: (w) => {
                E.current !== A.Explore && E.current !== A.Pinball || (w.stopPropagation(), c.current && (a.current[0] = i.elapsedTime, c.current.uniforms.startTimes.value = a.current), Ue.getState().addSoundToQueue(Ge.NumpadButtonPress), C(0));
              },
              children: [
                d.jsx("boxGeometry", {
                  args: [
                    0.024 * 2.3,
                    0.019,
                    0.024
                  ]
                }),
                d.jsx("meshBasicMaterial", {
                  color: "cyan",
                  wireframe: true
                })
              ]
            }),
            d.jsx(Yt, {
              tooltip: "Enter code",
              updateCursorStyle: false,
              validModes: [
                A.Explore,
                A.Pinball
              ],
              children: d.jsxs("mesh", {
                position: [
                  -0.015 + 0.035 * 1,
                  0.1,
                  -0.0475 + 0.035 * 1 - 0.01
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                visible: false,
                layers: J,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      0.125,
                      0.21
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "cyan",
                    wireframe: true
                  })
                ]
              })
            }),
            d.jsxs("mesh", {
              position: [
                -0.015 + 0.035 * 1,
                0.05,
                -0.0475 + 0.035 * 1 - 0.01
              ],
              rotation: [
                Math.PI * -0.5,
                0,
                0
              ],
              visible: false,
              layers: J,
              onPointerOver: (w) => {
                w.stopPropagation();
              },
              onPointerDown: (w) => {
                w.stopPropagation();
              },
              children: [
                d.jsx("planeGeometry", {
                  args: [
                    0.125 * 1.1,
                    0.21 * 1.1
                  ]
                }),
                d.jsx("meshBasicMaterial", {
                  color: "cyan",
                  wireframe: true
                })
              ]
            })
          ]
        }),
        d.jsx("group", {
          position: t.position,
          quaternion: t.quaternion,
          children: d.jsx("mesh", {
            rotation: [
              -Math.PI / 2,
              0,
              0
            ],
            material: h,
            children: d.jsx("planeGeometry", {
              args: [
                m,
                v
              ]
            })
          })
        })
      ]
    });
  }, ha = 0.55, pa = 0, nr = 0.55 * 0.8, ma = 1.2 * 0.35, ga = 0.02, ya = 0.19, xa = 30, Vm = () => {
    const r = W((t) => t.clock), e = p.useRef(-xa);
    return d.jsxs(d.Fragment, {
      children: [
        d.jsx($s, {
          tooltip: "Play",
          menuMode: A.Pinball,
          validModesToDisplayTooltip: [
            A.Explore
          ],
          targetName: "pinball-enter",
          children: d.jsxs("mesh", {
            position: [
              0,
              0,
              0
            ],
            rotation: [
              (90 - 6.5) * (Math.PI / 180) * -1,
              0,
              0
            ],
            scale: [
              0.55,
              1.2,
              1
            ],
            layers: J,
            onClick: () => {
              if (B.getState().menuMode === A.Explore) {
                B.getState().setMenuMode(A.Pinball);
                const t = r.elapsedTime;
                t - e.current > xa && (e.current = t, Ue.getState().addSoundToQueue(Ge.IntroSong));
              }
            },
            visible: false,
            children: [
              d.jsx("planeGeometry", {
                args: [
                  1,
                  1
                ]
              }),
              d.jsx("meshBasicMaterial", {
                color: "yellow",
                wireframe: true
              })
            ]
          })
        }),
        d.jsx(Yt, {
          tooltip: "Stop Playing",
          updateCursorStyle: true,
          validModes: [
            A.Pinball
          ],
          targetName: "pinball-exit",
          stopPropagation: true,
          children: d.jsxs("group", {
            onClick: (t) => {
              B.getState().menuMode === A.Pinball && (t.stopPropagation(), B.getState().setMenuMode(A.Explore));
            },
            children: [
              d.jsxs("mesh", {
                position: [
                  ha / 2 + nr / 2 + ga,
                  pa,
                  ya
                ],
                rotation: [
                  90 * (Math.PI / 180) * -1,
                  0,
                  0
                ],
                scale: [
                  nr,
                  ma,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "red",
                    wireframe: true
                  })
                ]
              }),
              d.jsxs("mesh", {
                position: [
                  -ha / 2 - nr / 2 - ga,
                  pa,
                  ya
                ],
                rotation: [
                  Math.PI * -0.5,
                  0,
                  0
                ],
                scale: [
                  nr,
                  ma,
                  1
                ],
                layers: J,
                visible: false,
                children: [
                  d.jsx("planeGeometry", {
                    args: [
                      1,
                      1
                    ]
                  }),
                  d.jsx("meshBasicMaterial", {
                    color: "green",
                    wireframe: true
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }, Nl = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/pineapple-CXdXsnb_.glb";
  Rn.preload(Nl);
  const ba = 0.358, rr = 0.05, va = 0.35, Ym = () => {
    const { scene: r } = Rn(Nl), e = p.useRef(null), t = p.useRef(false), [n, s] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        duration: 1500,
        easing: Oe.easeOutCubic
      },
      onStart: () => {
        t.current && e.current && (Ue.getState().addSoundToQueue(Ge.Pineapple), e.current.visible = true);
      },
      onChange: () => {
        if (e.current) {
          let o = n.progress.get();
          t.current || (o = Math.max(o, 0));
          const a = -0.3, l = 0.3, c = 0.8, u = 0, f = 0, h = 0, m = a + (u - a) * o, g = l + (f - l) * o, v = c + (h - c) * o;
          e.current.position.set(m, g, v);
          const x = Math.PI / 2, S = 0, R = 0, M = 0, I = 0, O = 0, _ = x + (M - x) * o, L = S + (I - S) * o, C = R + (O - R) * o;
          e.current.rotation.set(_, L, C);
        }
      },
      onRest: () => {
        !t.current && e.current && (Ue.getState().addSoundToQueue(Ge.Pineapple), e.current.visible = false);
      }
    })), i = p.useMemo(() => new V({
      map: r.children[0].children[0].material.emissiveMap,
      side: Ia
    }), [
      r
    ]);
    return d.jsxs("group", {
      children: [
        d.jsx("group", {
          position: r.position,
          quaternion: r.quaternion,
          scale: r.scale,
          children: d.jsx("group", {
            position: r.children[0].position,
            quaternion: r.children[0].quaternion,
            scale: r.children[0].scale,
            children: d.jsx("group", {
              ref: e,
              scale: [
                1,
                1,
                1
              ],
              visible: false,
              children: d.jsx("mesh", {
                geometry: r.children[0].children[0].geometry,
                material: i,
                position: r.children[0].children[0].position,
                quaternion: r.children[0].children[0].quaternion,
                scale: r.children[0].children[0].scale
              })
            })
          })
        }),
        d.jsx(Yt, {
          tooltip: "Add Pineapple",
          updateCursorStyle: true,
          validModes: [
            A.Explore,
            A.Pinball
          ],
          stopPropagation: true,
          children: d.jsxs("group", {
            onClick: (o) => {
              B.getState().menuMode !== A.Explore && B.getState().menuMode !== A.Pinball || (o.stopPropagation(), t.current = !t.current, t.current ? s.start({
                to: {
                  progress: 1
                },
                config: {
                  duration: 250,
                  easing: Oe.easeOutCubic
                }
              }) : s.start({
                to: {
                  progress: 0
                },
                config: {
                  duration: 750,
                  easing: Oe.easeInBack
                }
              }));
            },
            children: [
              d.jsx("group", {
                position: [
                  -0.871,
                  0,
                  0
                ],
                rotation: [
                  0,
                  -20.5 * Math.PI / 180,
                  0
                ],
                children: d.jsx("mesh", {
                  position: [
                    -0.12,
                    rr * 0.5,
                    -0.061
                  ],
                  layers: J,
                  visible: false,
                  children: d.jsx("boxGeometry", {
                    args: [
                      ba,
                      rr,
                      va
                    ]
                  })
                })
              }),
              d.jsx("group", {
                position: [
                  -0.871,
                  0,
                  0
                ],
                rotation: [
                  0,
                  -20.5 * Math.PI / 180,
                  0
                ],
                children: d.jsx("group", {
                  position: [
                    -0.295,
                    rr * 0.5,
                    -0.061
                  ],
                  children: d.jsx("group", {
                    rotation: [
                      0,
                      0,
                      57 * Math.PI / 180
                    ],
                    children: d.jsx("mesh", {
                      position: [
                        0.2,
                        0,
                        0
                      ],
                      layers: J,
                      visible: false,
                      children: d.jsx("boxGeometry", {
                        args: [
                          ba,
                          rr,
                          va
                        ]
                      })
                    })
                  })
                })
              })
            ]
          })
        })
      ]
    });
  }, qm = () => d.jsx("group", {
    children: d.jsx(Yt, {
      tooltip: "Quack",
      updateCursorStyle: true,
      validModes: [
        A.Explore,
        A.Pinball,
        A.Computer
      ],
      stopPropagation: true,
      children: d.jsx("group", {
        onClick: (r) => {
          B.getState().menuMode !== A.Explore && B.getState().menuMode !== A.Pinball && B.getState().menuMode !== A.Computer || (r.stopPropagation(), Ue.getState().addSoundToQueue(Ge.RubberDuck));
        },
        children: d.jsx("mesh", {
          position: [
            0.4445,
            0.433,
            -0.4625
          ],
          layers: J,
          visible: false,
          children: d.jsx("boxGeometry", {
            args: [
              0.051,
              0.05,
              0.06
            ]
          })
        })
      })
    })
  });
  Rn.preload(Hl);
  function $m() {
    const { scene: r } = Rn(Hl), { computerMonitorTransform: e, numpad: t, numpadScreen: n, pinballMeshes: s, lamp: i, sceneElements: o } = p.useMemo(() => {
      let a = null, l = null, c = null;
      const u = [];
      let f = null;
      const h = (g) => {
        if (g instanceof k) {
          if (g.name === "Screenplaceholder") return a = Gr(g), null;
          if (g.name === "numpad_Baked") return l = {
            mesh: g,
            worldTransform: Gr(g)
          }, null;
          if (g.name.startsWith("pinballmockup")) return g.material.side = dr, u.push(g), null;
          if (g.name === "desktopleftspotlight_Baked") return g.material.emissiveMap.anisotropy = 4, g.material.emissiveMap.needsUpdate = true, f = g, null;
        }
        if (g instanceof Pe && g.name === "numpadScreenOrigin") return c = {
          worldTransform: Gr(g)
        }, null;
        const v = g.children.map((x) => h(x)).filter(Boolean);
        return g instanceof k ? d.jsx("mesh", {
          name: g.name,
          geometry: g.geometry,
          material: new V({
            map: g.material.emissiveMap
          }),
          position: g.position,
          rotation: g.rotation,
          scale: g.scale,
          children: v
        }, g.uuid) : g instanceof ce || g instanceof Pe ? d.jsx("group", {
          name: g.name,
          position: g.position,
          rotation: g.rotation,
          scale: g.scale,
          children: v
        }, g.uuid) : null;
      }, m = h(r);
      return {
        computerMonitorTransform: a,
        numpad: l,
        numpadScreen: c,
        pinballMeshes: u,
        lamp: f,
        sceneElements: m
      };
    }, [
      r
    ]);
    return d.jsxs("group", {
      children: [
        e && d.jsxs("group", {
          position: e.position,
          quaternion: e.quaternion,
          children: [
            d.jsx(ou, {
              shape: "rectangle",
              width: 0.65,
              height: 0.3815,
              cornerRadius: 0.02,
              rotation: [
                -0.5 * Math.PI,
                0,
                0
              ],
              menuMode: A.Computer
            }),
            d.jsx("group", {
              "rotation-x": -Math.PI / 2,
              children: d.jsx(Pm, {})
            }),
            d.jsx(Tm, {})
          ]
        }),
        t && n && d.jsx(Wm, {
          numpadMesh: t.mesh,
          numpadWorldTransform: t.worldTransform,
          numpadScreenWorldTransform: n.worldTransform
        }),
        d.jsx(Vm, {}),
        d.jsx(Ym, {}),
        s.map((a) => d.jsx("mesh", {
          geometry: a.geometry,
          material: a.material,
          position: a.position,
          rotation: a.rotation,
          scale: a.scale
        }, a.uuid)),
        i && d.jsx(Em, {
          lamp: i
        }),
        d.jsx(qm, {}),
        o
      ]
    });
  }
  function Zm({ store: r }) {
    const e = Pn("immersive-ar"), t = Pn("immersive-vr");
    return d.jsx(d.Fragment, {
      children: d.jsx("button", {
        className: "enter-vr-button",
        type: "button",
        onClick: () => {
          e ? (r.enterAR(), Cs.getState().setVRIsEnabled(true)) : t && (r.enterVR(), Cs.getState().setVRIsEnabled(true));
        },
        children: "ENTER VR"
      })
    });
  }
  function Qm({ children: r }) {
    return Q((t) => t.mode === "immersive-vr" || t.mode === "immersive-ar") && r;
  }
  function Km({ children: r }) {
    return !Q((t) => t.mode === "immersive-vr" || t.mode === "immersive-ar") && r;
  }
  function Jm() {
    const r = _o("controller", "right"), e = _o("controller", "left");
    return X(() => {
      if (r) {
        const t = r.gamepad["xr-standard-trigger"];
        t && t.state === "pressed" ? me.getState().setButtonDown(Z.Right) : me.getState().setButtonUp(Z.Right);
      }
      if (e) {
        const t = e.gamepad["xr-standard-trigger"];
        t && t.state === "pressed" ? me.getState().setButtonDown(Z.Left) : me.getState().setButtonUp(Z.Left);
      }
    }), null;
  }
  const wa = 1920 / 968, Sa = 1920 / 968;
  function Rs(r, e, t) {
    const n = r / e;
    return n < wa ? 2 * Math.atan(Math.tan(t * Math.PI / 180 / 2) / (n / wa)) * (180 / Math.PI) : t;
  }
  function eg(r, e, t) {
    const n = r / e;
    return n > Sa ? 2 * Math.atan(Math.tan(t * Math.PI / 180 / 2) * (n / Sa)) * (180 / Math.PI) : t;
  }
  function tg() {
    const r = W((l) => l.camera), e = W((l) => l.size), t = p.useRef(A.Explore), n = p.useRef(pr), s = p.useRef(pr), [i, o] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Oe.easeOutSine,
        duration: 8e3
      },
      onChange: () => {
        const l = i.progress.get();
        n.current += (s.current - n.current) * l;
      }
    }), []), a = p.useCallback(() => t.current === A.Pinball ? eg(e.width, e.height, au) : t.current === A.Globe ? Rs(e.width, e.height, lu) : t.current === A.Computer ? Rs(e.width, e.height, cu) : Rs(e.width, e.height, uu), [
      e
    ]);
    return p.useEffect(() => {
      const l = B.subscribe((c) => c.menuMode, (c) => {
        t.current = c, s.current = a(), o.start({
          from: {
            progress: 0
          },
          to: {
            progress: 1
          }
        });
      }, {
        fireImmediately: true
      });
      return () => {
        l();
      };
    }, [
      o,
      a
    ]), p.useEffect(() => {
      const l = a();
      n.current = l, s.current = l;
    }, [
      e,
      a
    ]), X(() => {
      r.fov = n.current, r.updateProjectionMatrix();
    }), null;
  }
  const ng = 12.5 / 100, rg = 1, sg = 10;
  function ig() {
    const r = W((w) => w.gl), e = W((w) => w.raycaster), t = W((w) => w.clock), n = B((w) => w.startInGlobeMode), s = Se((w) => w.skipIntroSequence), i = p.useRef(false), o = p.useRef(-1), a = p.useRef(rg), { enableOrbitControls: l } = fu("Camera Controls", {
      enableOrbitControls: {
        value: false
      }
    }, {
      order: gu,
      collapsed: false
    }), c = p.useRef({
      x: 0,
      y: 0
    }), u = p.useRef(false), f = p.useRef({
      x: 0,
      y: 0
    }), h = p.useRef(Qe.clone()), m = p.useRef(s ? n ? Ci.clone() : Qe.clone() : _s.clone()), g = p.useRef(s ? n ? _i.clone() : sr.clone() : Ls.clone()), v = p.useRef(n ? A.Globe : A.Explore), x = p.useRef(new b()), S = p.useRef(new b()), R = p.useRef(false), M = p.useRef(1), [I, O] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Oe.linear,
        duration: 8e3
      },
      onStart: () => {
        R.current = true, B.getState().setMenuTransitionInProgress(true), B.getState().setMenuTransitionProgress(0);
      },
      onChange: () => {
        const w = I.progress.get(), T = Oe.easeOutSine(w);
        m.current.lerp(x.current, T), g.current.lerp(S.current, T), B.getState().setMenuTransitionProgress(w);
      },
      onRest: () => {
        R.current = false, B.getState().setMenuTransitionInProgress(false), B.getState().setMenuTransitionProgress(1);
      }
    }), []), [_, L] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Oe.easeInSine,
        duration: 1500
      },
      onStart: () => {
        M.current = 0;
      },
      onChange: () => {
        M.current = _.progress.get();
      },
      onRest: () => {
        M.current = 1;
      }
    }), []), [C, E] = Ht(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Oe.easeInSine,
        duration: 3e3
      },
      onStart: () => {
      },
      onChange: () => {
        c.current.x = f.current.x * C.progress.get(), c.current.y = f.current.y * C.progress.get();
      },
      onRest: () => {
      }
    }), []);
    return p.useEffect(() => {
      const w = B.subscribe((T) => T.menuMode, (T) => {
        v.current = T, v.current === A.Explore ? (x.current.copy(Qe), S.current.copy(sr), c.current.x = 0, c.current.y = 0, L.start({
          from: {
            progress: 0
          },
          to: {
            progress: 1
          }
        })) : v.current === A.Globe ? (x.current.copy(Ci), S.current.copy(_i)) : v.current === A.Computer ? (x.current.copy(du), S.current.copy(hu)) : v.current === A.Pinball && (x.current.copy(pu), S.current.copy(mu)), O.start({
          from: {
            progress: 0
          },
          to: {
            progress: 1
          }
        });
      });
      return () => {
        w();
      };
    }, [
      O,
      L
    ]), p.useEffect(() => {
      const w = r.domElement, T = (F) => {
        const K = w.getBoundingClientRect(), re = (F.clientX - K.left) / K.width * 2 - 1, ye = -((F.clientY - K.top) / K.height) * 2 + 1;
        c.current.x = re, c.current.y = ye, u.current && (E.stop(), L.start({
          from: {
            progress: 0.5
          },
          to: {
            progress: 1
          }
        }), u.current = false);
      }, ne = (F) => {
        (F.clientX < 0 || F.clientX > window.innerWidth || F.clientY < 0 || F.clientY > window.innerHeight) && (u.current = true, f.current.x = c.current.x, f.current.y = c.current.y, E.start({
          from: {
            progress: 1
          },
          to: {
            progress: 0
          }
        }));
      };
      return window.addEventListener("pointermove", T), document.addEventListener("pointerleave", ne), () => {
        window.removeEventListener("pointermove", T), document.removeEventListener("pointerleave", ne);
      };
    }, [
      r,
      L,
      E
    ]), X(({ camera: w }, T) => {
      if (l) return;
      if (!s && !i.current) {
        if (o.current > 0) {
          const ye = Math.min((t.elapsedTime - o.current) / sg, 1), _e = ((ot) => {
            if (ot < 0.9) {
              const ue = ot / 0.9, qt = 0.025 * ue, _n = 0.835 * ue * ue * ue * ue * ue;
              return qt + _n;
            } else {
              const ue = (ot - 0.9) / 0.1;
              return 0.85 + 0.15 * (1 - (1 - ue) * (1 - ue));
            }
          })(ye);
          m.current.lerpVectors(_s, x.current, _e), g.current.lerpVectors(Ls, S.current, _e), !i.current && ye >= 1 && (e.layers.enable(Da.RaycastLayer), c.current.x = 0, c.current.y = 0, L.start({
            from: {
              progress: 0
            },
            to: {
              progress: 1
            }
          }), Zc("finishedIntroSequence", {
            time: performance.now()
          }), i.current = true);
        }
        w.position.copy(m.current), w.lookAt(g.current);
        return;
      }
      const ne = Math.cos(ji), F = Math.sin(ji), K = c.current.x * -0.25, re = c.current.y * ng;
      h.current.set(Qe.x + K * ne, Qe.y - re, Qe.z + K * F), v.current === A.Explore && (R.current ? Li.damp3(x.current, h.current, 1, T * a.current * M.current, void 0, void 0, 1e-9) : Li.damp3(m.current, h.current, 1, T * a.current * M.current, void 0, void 0, 1e-9)), w.position.copy(m.current), w.lookAt(g.current);
    }), p.useEffect(() => qs.on("startedBFCMAnimation", () => {
      x.current.copy(Qe), S.current.copy(sr), o.current = t.elapsedTime;
    }), [
      t
    ]), d.jsxs(d.Fragment, {
      children: [
        l && d.jsx(Uu, {
          target: [
            0,
            0,
            0
          ],
          enablePan: true,
          enableRotate: true,
          enableZoom: true,
          makeDefault: true
        }),
        d.jsx(tg, {}),
        d.jsx($s, {
          tooltip: "View Globe",
          menuMode: A.Globe,
          validModesToDisplayTooltip: [
            A.Explore,
            A.Pinball
          ],
          children: d.jsxs("mesh", {
            position: [
              0,
              0.291,
              -0.529
            ],
            scale: [
              0.55,
              0.5,
              1
            ],
            layers: J,
            onClick: () => {
              (v.current === A.Explore || v.current === A.Pinball) && B.getState().setMenuMode(A.Globe);
            },
            visible: false,
            children: [
              d.jsx("planeGeometry", {
                args: [
                  1,
                  1
                ]
              }),
              d.jsx("meshBasicMaterial", {
                color: "red",
                wireframe: true
              })
            ]
          })
        })
      ]
    });
  }
  var og = `uniform float radius;
uniform float introProgress;
uniform float aspect;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  
  outputColor = inputColor;

  
  vec2 correctedUV = uv - 0.5;
  correctedUV.x *= aspect;

  
  float dist = length(correctedUV);

  
  float cornerDistance = 0.5 * sqrt(aspect * aspect + 1.0);

  
  float effectiveRadius = radius * cornerDistance * 2.0;

  
  float mask = 1.0 - smoothstep(effectiveRadius * introProgress * 1.5 - 0.05, effectiveRadius * introProgress * 1.5, dist);

  
  outputColor.rgb *= mask;
}`;
  class ag extends Qc {
    constructor({ radius: e = 0.8, introProgress: t = 0, aspect: n = 1 } = {}) {
      super("PinholeEffect", og, {
        uniforms: /* @__PURE__ */ new Map([
          [
            "radius",
            new Ur(e)
          ],
          [
            "introProgress",
            new Ur(t)
          ],
          [
            "aspect",
            new Ur(n)
          ]
        ])
      });
    }
    get radius() {
      var _a2;
      return ((_a2 = this.uniforms.get("radius")) == null ? void 0 : _a2.value) ?? 0.8;
    }
    set radius(e) {
      const t = this.uniforms.get("radius");
      t && (t.value = e);
    }
    get introProgress() {
      var _a2;
      return ((_a2 = this.uniforms.get("introProgress")) == null ? void 0 : _a2.value) ?? 0;
    }
    set introProgress(e) {
      const t = this.uniforms.get("introProgress");
      t && (t.value = e);
    }
    get aspect() {
      var _a2;
      return ((_a2 = this.uniforms.get("aspect")) == null ? void 0 : _a2.value) ?? 1;
    }
    set aspect(e) {
      const t = this.uniforms.get("aspect");
      t && (t.value = e);
    }
  }
  const Dl = p.forwardRef(({ radius: r = 0.8 }, e) => {
    const t = p.useMemo(() => new ag({
      radius: r
    }), [
      r
    ]);
    return X(({ camera: n, size: s }) => {
      const o = n.fov / pr;
      t.radius = r * o, t.aspect = s.width / s.height;
    }), d.jsx("primitive", {
      ref: e,
      object: t
    });
  });
  Dl.displayName = "Pinhole";
  const lg = 7;
  function cg() {
    const r = W((a) => a.clock), e = Se((a) => a.skipIntroSequence), t = p.useRef(null), n = p.useRef(-1), [s, i] = p.useState(true), o = p.useRef(false);
    return p.useEffect(() => qs.on("startedBFCMAnimation", () => {
      n.current = r.elapsedTime;
    }), [
      r
    ]), X(() => {
      if (t.current && n.current > 0) {
        const a = Math.min((r.elapsedTime - n.current) / lg, 1), l = t.current.uniforms.get("introProgress");
        l && (l.value = Oe.easeInOutSine(a)), !o.current && a >= 1 && (i(false), o.current = true);
      }
    }), d.jsx(d.Fragment, {
      children: d.jsxs(Kc, {
        stencilBuffer: false,
        multisampling: 0,
        children: [
          d.jsx(Jc, {
            luminanceThreshold: 0.7,
            luminanceSmoothing: 1,
            intensity: 1.1,
            kernelSize: tu.VERY_SMALL,
            mipmapBlur: true,
            radius: 0.7,
            blendFunction: eu.SCREEN,
            levels: 8
          }),
          e || !s ? d.jsx(d.Fragment, {}) : d.jsx(Dl, {
            ref: t,
            radius: 0.8
          })
        ]
      })
    });
  }
  const ug = p.lazy(() => _a(() => import("./index-C1ozSNLd.js"), __vite__mapDeps([6,1,2])).then((r) => ({
    default: r.Perf
  })));
  function fg() {
    const r = ja(), e = Cs((a) => a.vrIsEnabled), t = p.useMemo(() => {
      const a = new Ke(pr, window.innerWidth / window.innerHeight, 0.01, 100), l = Se.getState().skipIntroSequence;
      return a.position.copy(l || e ? Qe : _s), a.lookAt(l || e ? sr : Ls), a.updateMatrix(), a;
    }, [
      e
    ]), n = p.useMemo(() => {
      const a = new Tr();
      return a.layers.disableAll(), (Se.getState().skipIntroSequence || e) && a.layers.enable(Da.RaycastLayer), a;
    }, [
      e
    ]), s = rp({
      handTracking: false
    }), i = Pn("immersive-ar"), o = Pn("immersive-vr");
    return d.jsxs(d.Fragment, {
      children: [
        (o || i) && d.jsx(Zm, {
          store: s
        }),
        d.jsx(nu, {
          dpr: Je(window.devicePixelRatio, 1, 2),
          camera: t,
          raycaster: n,
          events: e ? pp : void 0,
          gl: {
            powerPreference: "high-performance",
            antialias: false
          },
          onContextMenu: (a) => a.preventDefault(),
          style: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          },
          children: d.jsxs(sp, {
            store: s,
            children: [
              d.jsx(up, {
                position: [
                  0,
                  -1,
                  0
                ],
                scale: 1
              }),
              d.jsxs(p.Suspense, {
                fallback: null,
                children: [
                  d.jsx(yu, {
                    all: true
                  }),
                  r.debugMode && d.jsx(ug, {
                    position: "bottom-left",
                    deepAnalyze: true,
                    className: "debug-perf"
                  }),
                  d.jsx("color", {
                    attach: "background",
                    args: [
                      "black"
                    ]
                  }),
                  d.jsx(xu, {}),
                  d.jsxs(Km, {
                    children: [
                      d.jsx(cg, {}),
                      d.jsx($m, {}),
                      d.jsx(ig, {}),
                      d.jsx(xp, {}),
                      d.jsx(bp, {})
                    ]
                  }),
                  d.jsxs(Qm, {
                    children: [
                      d.jsx(hp, {}),
                      d.jsx(Sm, {}),
                      d.jsx(Jm, {})
                    ]
                  }),
                  d.jsx(bu, {}),
                  d.jsx(vu, {
                    modelUrl: yp
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  }
  Sg = Object.freeze(Object.defineProperty({
    __proto__: null,
    R3FCanvas: fg
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Sg as R,
  wg as T,
  __tla,
  Fd as f
};
