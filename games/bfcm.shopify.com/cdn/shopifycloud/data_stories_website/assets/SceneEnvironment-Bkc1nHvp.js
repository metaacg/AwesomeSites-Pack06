const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/rapier-Bi6UcDs9.js","assets/application-CtunUkHU.js","assets/audio-stop-CE8PsAHr.js","assets/volleyball_map-BEG_dgXk.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as u, u as Ue, a4 as pf, i as it, V as F, a1 as vn, H as Bn, y as Pr, ab as dc, aa as bi, a7 as Ne, x as et, a9 as _f, G as Jr, w as Ye, a8 as F2, ak as hf, al as mf, am as La, an as L2, v as ir, bF as gf, ai as sr, ao as fc, ap as qo, aq as yn, ar as Vr, au as wf, av as bf, aw as yf, ax as D2, D as Af, O as ni, ay as G2, az as vf, ah as ht, aA as Cf, aB as O2, aC as Sf, aD as Rf, aE as Mf, L as Wt, aF as Da, aG as nn, aH as Ef, aI as Ir, aJ as Bf, aK as ds, aL as If, aM as go, l as _t, aN as Tf, ag as Nn, aO as xf, aP as pc, aQ as Pf, aR as Ff, Z as Lf, aS as m0, K as j0, aT as Df, aU as Gf, aV as Of, aW as Hf, aX as H2, aY as rt, T as mn, aZ as sl, a_ as al, a$ as cl, F as Dt, b1 as kf, A as Ao, z as _c, bG as k2, bb as hr, bH as Nr, bI as so, bJ as oi, bK as j2, I as U2, bk as Ga, bL as Cn, bM as jf, U as ll, aj as ul, b4 as Uf, bf as Sn, b9 as U0, ba as Nf, Y as N0, P as vo, bN as v0, bO as zf, bP as Wf, as as ii, bQ as Jf, bR as Vf, bS as Kf, bT as Qf, bU as C0, bV as Xf, bW as S0, at as fr, bX as qf, bY as Yf, bZ as Zf, b_ as $f, b$ as e9, c0 as N2, be as z2, c1 as Oa, c2 as t9, af as hc, ae as W2, c3 as mc, c4 as gc, c5 as Zt, g as se, h as L, by as he, c6 as $t, d as Ft, M as tt, j as R, a0 as r9, p as wo, _ as n9, m as yi, c7 as o9, Q as i9, bt as s9, bs as Li, c8 as Ha, c9 as R0, ca as kn, bu as At, cb as J2, cc as a9, a6 as V2, cd as c9, ce as Jo, cf as l9, cg as wc, bv as Le, bw as Te, ch as Di, N as K2, ci as u9, cj as ot, ck as Q2, cl as X2, cm as dl, bq as fs, br as d9, cn as yt, co as fl, cp as pl, k as M0, B as si, bx as xr, o as f9, cq as De, bp as p9, b5 as _9, cr as h9, cs as m9, ct as q2, cu as g9, cv as ps, cw as w9, __tla as __tla_0 } from "./application-CtunUkHU.js";
import { d as z0, s as W0, c as Y2, e as Z2, n as $2, a as g0, b as _l, f as b9, g as hl, t as y9, h as A9, v as v9, i as C9, j as S9, k as R9, l as M9, m as E9, o as ed, p as td, q as rd } from "./volleyball_map-BEG_dgXk.js";
let Ka, Dd, Ld, Gd, Hc, zt, xM, FM, IM, TM, bp, PM, Lt, mM, GM, RM, iM, MM, qt, Bd, Ya, Xa, fe, qa, Od, Ud, P0, kt, gM, kd, Db, li, Hd, Qd, ao, es, Jd, LM, $0, aM, rl, K5, X5, V5, _M, fM, dM, Ed, hM, Q5, pM, oM, Ru, SM, Qa, jd, Wd, Nd, ar, Ri, ui, er, o1, Lb, Kd, n1, zd, Fb, Vd, cp, J0, oA, iA, Sa, ft, tl, sM, uM, cM, lM, AM, CM, tp, np, wM, bM, yM, vM, Be, zn, HM, kM, OM, Bt, bo, BM, Tc, EM, rn, vt, Rn, En, Lu, Mn, jn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const Ai = new F(), bc = new F(), B9 = new F(), ml = new Pr();
  function I9(r, e, t) {
    const n = Ai.setFromMatrixPosition(r.matrixWorld);
    n.project(e);
    const o = t.width / 2, i = t.height / 2;
    return [
      n.x * o + o,
      -(n.y * i) + i
    ];
  }
  function T9(r, e) {
    const t = Ai.setFromMatrixPosition(r.matrixWorld), n = bc.setFromMatrixPosition(e.matrixWorld), o = t.sub(n), i = e.getWorldDirection(B9);
    return o.angleTo(i) > Math.PI / 2;
  }
  function x9(r, e, t, n) {
    const o = Ai.setFromMatrixPosition(r.matrixWorld), i = o.clone();
    i.project(e), ml.set(i.x, i.y), t.setFromCamera(ml, e);
    const s = t.intersectObjects(n, true);
    if (s.length) {
      const c = s[0].distance;
      return o.distanceTo(t.ray.origin) < c;
    }
    return true;
  }
  function P9(r, e) {
    if (e instanceof bi) return e.zoom;
    if (e instanceof dc) {
      const t = Ai.setFromMatrixPosition(r.matrixWorld), n = bc.setFromMatrixPosition(e.matrixWorld), o = e.fov * Math.PI / 180, i = t.distanceTo(n);
      return 1 / (2 * Math.tan(o / 2) * i);
    } else return 1;
  }
  function F9(r, e, t) {
    if (e instanceof dc || e instanceof bi) {
      const n = Ai.setFromMatrixPosition(r.matrixWorld), o = bc.setFromMatrixPosition(e.matrixWorld), i = n.distanceTo(o), s = (t[1] - t[0]) / (e.far - e.near), c = t[1] - s * e.far;
      return Math.round(s * i + c);
    }
  }
  const ka = (r) => Math.abs(r) < 1e-10 ? 0 : r;
  function nd(r, e, t = "") {
    let n = "matrix3d(";
    for (let o = 0; o !== 16; o++) n += ka(e[o] * r.elements[o]) + (o !== 15 ? "," : ")");
    return t + n;
  }
  const L9 = /* @__PURE__ */ ((r) => (e) => nd(e, r))([
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    -1,
    1,
    1
  ]), D9 = /* @__PURE__ */ ((r) => (e, t) => nd(e, r(t), "translate(-50%,-50%)"))((r) => [
    1 / r,
    1 / r,
    1 / r,
    1,
    -1 / r,
    -1 / r,
    -1 / r,
    -1,
    1 / r,
    1 / r,
    1 / r,
    1,
    1,
    1,
    1,
    1
  ]);
  function G9(r) {
    return r && typeof r == "object" && "current" in r;
  }
  J0 = u.forwardRef(({ children: r, eps: e = 1e-3, style: t, className: n, prepend: o, center: i, fullscreen: s, portal: c, distanceFactor: l, sprite: a = false, transform: p = false, occlude: f, onOcclude: d, castShadow: _, receiveShadow: h, material: b, geometry: g, zIndexRange: y = [
    16777271,
    0
  ], calculatePosition: A = I9, as: C = "div", wrapperClass: S, pointerEvents: B = "auto", ...T }, E) => {
    const { gl: M, camera: x, scene: P, size: D, raycaster: H, events: k, viewport: J } = Ue(), [W] = u.useState(() => document.createElement(C)), K = u.useRef(null), Q = u.useRef(null), Z = u.useRef(0), j = u.useRef([
      0,
      0
    ]), U = u.useRef(null), N = u.useRef(null), oe = (c == null ? void 0 : c.current) || k.connected || M.domElement.parentNode, ue = u.useRef(null), we = u.useRef(false), ve = u.useMemo(() => f && f !== "blending" || Array.isArray(f) && f.length && G9(f[0]), [
      f
    ]);
    u.useLayoutEffect(() => {
      const $ = M.domElement;
      f && f === "blending" ? ($.style.zIndex = `${Math.floor(y[0] / 2)}`, $.style.position = "absolute", $.style.pointerEvents = "none") : ($.style.zIndex = null, $.style.position = null, $.style.pointerEvents = null);
    }, [
      f
    ]), u.useLayoutEffect(() => {
      if (Q.current) {
        const $ = K.current = pf.createRoot(W);
        if (P.updateMatrixWorld(), p) W.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
        else {
          const re = A(Q.current, x, D);
          W.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${re[0]}px,${re[1]}px,0);transform-origin:0 0;`;
        }
        return oe && (o ? oe.prepend(W) : oe.appendChild(W)), () => {
          oe && oe.removeChild(W), $.unmount();
        };
      }
    }, [
      oe,
      p
    ]), u.useLayoutEffect(() => {
      S && (W.className = S);
    }, [
      S
    ]);
    const ne = u.useMemo(() => p ? {
      position: "absolute",
      top: 0,
      left: 0,
      width: D.width,
      height: D.height,
      transformStyle: "preserve-3d",
      pointerEvents: "none"
    } : {
      position: "absolute",
      transform: i ? "translate3d(-50%,-50%,0)" : "none",
      ...s && {
        top: -D.height / 2,
        left: -D.width / 2,
        width: D.width,
        height: D.height
      },
      ...t
    }, [
      t,
      i,
      s,
      D,
      p
    ]), Ie = u.useMemo(() => ({
      position: "absolute",
      pointerEvents: B
    }), [
      B
    ]);
    u.useLayoutEffect(() => {
      if (we.current = false, p) {
        var $;
        ($ = K.current) == null || $.render(u.createElement("div", {
          ref: U,
          style: ne
        }, u.createElement("div", {
          ref: N,
          style: Ie
        }, u.createElement("div", {
          ref: E,
          className: n,
          style: t,
          children: r
        }))));
      } else {
        var re;
        (re = K.current) == null || re.render(u.createElement("div", {
          ref: E,
          style: ne,
          className: n,
          children: r
        }));
      }
    });
    const ie = u.useRef(true);
    it(($) => {
      if (Q.current) {
        x.updateMatrixWorld(), Q.current.updateWorldMatrix(true, false);
        const re = p ? j.current : A(Q.current, x, D);
        if (p || Math.abs(Z.current - x.zoom) > e || Math.abs(j.current[0] - re[0]) > e || Math.abs(j.current[1] - re[1]) > e) {
          const Me = T9(Q.current, x);
          let Ce = false;
          ve && (Array.isArray(f) ? Ce = f.map((Ve) => Ve.current) : f !== "blending" && (Ce = [
            P
          ]));
          const Ee = ie.current;
          if (Ce) {
            const Ve = x9(Q.current, x, H, Ce);
            ie.current = Ve && !Me;
          } else ie.current = !Me;
          Ee !== ie.current && (d ? d(!ie.current) : W.style.display = ie.current ? "block" : "none");
          const Ge = Math.floor(y[0] / 2), Oe = f ? ve ? [
            y[0],
            Ge
          ] : [
            Ge - 1,
            0
          ] : y;
          if (W.style.zIndex = `${F9(Q.current, x, Oe)}`, p) {
            const [Ve, Rt] = [
              D.width / 2,
              D.height / 2
            ], Ke = x.projectionMatrix.elements[5] * Rt, { isOrthographicCamera: st, top: Ot, left: Jt, bottom: tr, right: Rr } = x, Lr = L9(x.matrixWorldInverse), an = st ? `scale(${Ke})translate(${ka(-(Rr + Jt) / 2)}px,${ka((Ot + tr) / 2)}px)` : `translateZ(${Ke}px)`;
            let gr = Q.current.matrixWorld;
            a && (gr = x.matrixWorldInverse.clone().transpose().copyPosition(gr).scale(Q.current.scale), gr.elements[3] = gr.elements[7] = gr.elements[11] = 0, gr.elements[15] = 1), W.style.width = D.width + "px", W.style.height = D.height + "px", W.style.perspective = st ? "" : `${Ke}px`, U.current && N.current && (U.current.style.transform = `${an}${Lr}translate(${Ve}px,${Rt}px)`, N.current.style.transform = D9(gr, 1 / ((l || 10) / 400)));
          } else {
            const Ve = l === void 0 ? 1 : P9(Q.current, x) * l;
            W.style.transform = `translate3d(${re[0]}px,${re[1]}px,0) scale(${Ve})`;
          }
          j.current = re, Z.current = x.zoom;
        }
      }
      if (!ve && ue.current && !we.current) if (p) {
        if (U.current) {
          const re = U.current.children[0];
          if (re != null && re.clientWidth && re != null && re.clientHeight) {
            const { isOrthographicCamera: Me } = x;
            if (Me || g) T.scale && (Array.isArray(T.scale) ? T.scale instanceof F ? ue.current.scale.copy(T.scale.clone().divideScalar(1)) : ue.current.scale.set(1 / T.scale[0], 1 / T.scale[1], 1 / T.scale[2]) : ue.current.scale.setScalar(1 / T.scale));
            else {
              const Ce = (l || 10) / 400, Ee = re.clientWidth * Ce, Ge = re.clientHeight * Ce;
              ue.current.scale.set(Ee, Ge, 1);
            }
            we.current = true;
          }
        }
      } else {
        const re = W.children[0];
        if (re != null && re.clientWidth && re != null && re.clientHeight) {
          const Me = 1 / J.factor, Ce = re.clientWidth * Me, Ee = re.clientHeight * Me;
          ue.current.scale.set(Ce, Ee, 1), we.current = true;
        }
        ue.current.lookAt($.camera.position);
      }
    });
    const z = u.useMemo(() => ({
      vertexShader: p ? void 0 : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
    }), [
      p
    ]);
    return u.createElement("group", vn({}, T, {
      ref: Q
    }), f && !ve && u.createElement("mesh", {
      castShadow: _,
      receiveShadow: h,
      ref: ue
    }, g || u.createElement("planeGeometry", null), b || u.createElement("shaderMaterial", {
      side: Bn,
      vertexShader: z.vertexShader,
      fragmentShader: z.fragmentShader
    })));
  });
  function ja(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
    return n;
  }
  function O9(r, e) {
    if (r) {
      if (typeof r == "string") return ja(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ja(r, e);
    }
  }
  function H9(r) {
    if (Array.isArray(r)) return ja(r);
  }
  function k9(r) {
    if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
  }
  function j9() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function U9(r) {
    return H9(r) || k9(r) || O9(r) || j9();
  }
  new Pr();
  new Pr();
  function N9(r, e, t) {
    return Math.max(e, Math.min(t, r));
  }
  function z9(r, e) {
    return N9(r - Math.floor(r / e) * e, 0, e);
  }
  function W9(r, e) {
    var t = z9(e - r, Math.PI * 2);
    return t > Math.PI && (t -= Math.PI * 2), t;
  }
  var J9 = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.01, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1 / (2 * Math.PI);
    return n / Math.atan(1 / t) * Math.atan(Math.sin(2 * Math.PI * e * o) / t);
  }, od = function(e) {
    return 1 / (1 + e + 0.48 * e * e + 0.235 * e * e * e);
  }, V9 = function(e) {
    return e;
  }, K9 = {
    in: function(e) {
      return 1 - Math.cos(e * Math.PI / 2);
    },
    out: function(e) {
      return Math.sin(e * Math.PI / 2);
    },
    inOut: function(e) {
      return -(Math.cos(Math.PI * e) - 1) / 2;
    }
  }, Q9 = {
    in: function(e) {
      return e * e * e;
    },
    out: function(e) {
      return 1 - Math.pow(1 - e, 3);
    },
    inOut: function(e) {
      return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
    }
  }, X9 = {
    in: function(e) {
      return e * e * e * e * e;
    },
    out: function(e) {
      return 1 - Math.pow(1 - e, 5);
    },
    inOut: function(e) {
      return e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
    }
  }, q9 = {
    in: function(e) {
      return 1 - Math.sqrt(1 - Math.pow(e, 2));
    },
    out: function(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    },
    inOut: function(e) {
      return e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
    }
  }, Y9 = {
    in: function(e) {
      return e * e * e * e;
    },
    out: function(e) {
      return 1 - --e * e * e * e;
    },
    inOut: function(e) {
      return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
    }
  }, Z9 = {
    in: function(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * e - 10);
    },
    out: function(e) {
      return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
    },
    inOut: function(e) {
      return e === 0 ? 0 : e === 1 ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
    }
  };
  function Gt(r, e, t) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.01, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 1 / 0, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : od, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 1e-3, l = "velocity_" + e;
    if (r.__damp === void 0 && (r.__damp = {}), r.__damp[l] === void 0 && (r.__damp[l] = 0), Math.abs(r[e] - t) <= c) return r[e] = t, false;
    n = Math.max(1e-4, n);
    var a = 2 / n, p = s(a * o), f = r[e] - t, d = t, _ = i * n;
    f = Math.min(Math.max(f, -_), _), t = r[e] - f;
    var h = (r.__damp[l] + a * f) * o;
    r.__damp[l] = (r.__damp[l] - a * h) * p;
    var b = t + (f + h) * p;
    return d - r[e] > 0 == b > d && (b = d, r.__damp[l] = (b - d) / o), r[e] = b, true;
  }
  var $9 = function(e) {
    return e && e.isCamera;
  }, e4 = function(e) {
    return e && e.isLight;
  }, Bo = new F(), gl = new Ne(), wl = new Ne(), Io = new et(), _s = new F();
  function t4(r, e, t, n, o, i, s) {
    typeof e == "number" ? Bo.setScalar(e) : Array.isArray(e) ? Bo.set(e[0], e[1], e[2]) : Bo.copy(e);
    var c = r.parent;
    r.updateWorldMatrix(true, false), _s.setFromMatrixPosition(r.matrixWorld), $9(r) || e4(r) ? Io.lookAt(_s, Bo, r.up) : Io.lookAt(Bo, _s, r.up), E0(r.quaternion, wl.setFromRotationMatrix(Io), t, n, o, i, s), c && (Io.extractRotation(c.matrixWorld), gl.setFromRotationMatrix(Io), E0(r.quaternion, wl.copy(r.quaternion).premultiply(gl.invert()), t, n, o, i, s));
  }
  function uo(r, e, t, n, o, i, s, c) {
    return Gt(r, e, r[e] + W9(r[e], t), n, o, i, s, c);
  }
  var To = new Pr(), bl, yl;
  function r4(r, e, t, n, o, i, s) {
    return typeof e == "number" ? To.setScalar(e) : Array.isArray(e) ? To.set(e[0], e[1]) : To.copy(e), bl = Gt(r, "x", To.x, t, n, o, i, s), yl = Gt(r, "y", To.y, t, n, o, i, s), bl || yl;
  }
  var Jn = new F(), Al, vl, Cl;
  function Ua(r, e, t, n, o, i, s) {
    return typeof e == "number" ? Jn.setScalar(e) : Array.isArray(e) ? Jn.set(e[0], e[1], e[2]) : Jn.copy(e), Al = Gt(r, "x", Jn.x, t, n, o, i, s), vl = Gt(r, "y", Jn.y, t, n, o, i, s), Cl = Gt(r, "z", Jn.z, t, n, o, i, s), Al || vl || Cl;
  }
  var xn = new Jr(), Sl, Rl, Ml, El;
  function n4(r, e, t, n, o, i, s) {
    return typeof e == "number" ? xn.setScalar(e) : Array.isArray(e) ? xn.set(e[0], e[1], e[2], e[3]) : xn.copy(e), Sl = Gt(r, "x", xn.x, t, n, o, i, s), Rl = Gt(r, "y", xn.y, t, n, o, i, s), Ml = Gt(r, "z", xn.z, t, n, o, i, s), El = Gt(r, "w", xn.w, t, n, o, i, s), Sl || Rl || Ml || El;
  }
  var xo = new F2(), Bl, Il, Tl;
  function o4(r, e, t, n, o, i, s) {
    return Array.isArray(e) ? xo.set(e[0], e[1], e[2], e[3]) : xo.copy(e), Bl = uo(r, "x", xo.x, t, n, o, i, s), Il = uo(r, "y", xo.y, t, n, o, i, s), Tl = uo(r, "z", xo.z, t, n, o, i, s), Bl || Il || Tl;
  }
  var Vn = new Ye(), xl, Pl, Fl;
  function i4(r, e, t, n, o, i, s) {
    return e instanceof Ye ? Vn.copy(e) : Array.isArray(e) ? Vn.setRGB(e[0], e[1], e[2]) : Vn.set(e), xl = Gt(r, "r", Vn.r, t, n, o, i, s), Pl = Gt(r, "g", Vn.g, t, n, o, i, s), Fl = Gt(r, "b", Vn.b, t, n, o, i, s), xl || Pl || Fl;
  }
  var Mr = new Ne(), Xr = new Jr(), Ll = new Jr(), Po = new Jr(), Dl, Gl, Ol, Hl;
  function E0(r, e, t, n, o, i, s) {
    var c = r;
    Array.isArray(e) ? Mr.set(e[0], e[1], e[2], e[3]) : Mr.copy(e);
    var l = r.dot(Mr) > 0 ? 1 : -1;
    return Mr.x *= l, Mr.y *= l, Mr.z *= l, Mr.w *= l, Dl = Gt(r, "x", Mr.x, t, n, o, i, s), Gl = Gt(r, "y", Mr.y, t, n, o, i, s), Ol = Gt(r, "z", Mr.z, t, n, o, i, s), Hl = Gt(r, "w", Mr.w, t, n, o, i, s), Xr.set(r.x, r.y, r.z, r.w).normalize(), Ll.set(c.__damp.velocity_x, c.__damp.velocity_y, c.__damp.velocity_z, c.__damp.velocity_w), Po.copy(Xr).multiplyScalar(Ll.dot(Xr) / Xr.dot(Xr)), c.__damp.velocity_x -= Po.x, c.__damp.velocity_y -= Po.y, c.__damp.velocity_z -= Po.z, c.__damp.velocity_w -= Po.w, r.set(Xr.x, Xr.y, Xr.z, Xr.w), Dl || Gl || Ol || Hl;
  }
  var Fo = new _f(), kl, jl, Ul;
  function s4(r, e, t, n, o, i, s) {
    return Array.isArray(e) ? Fo.set(e[0], e[1], e[2]) : Fo.copy(e), kl = Gt(r, "radius", Fo.radius, t, n, o, i, s), jl = uo(r, "phi", Fo.phi, t, n, o, i, s), Ul = uo(r, "theta", Fo.theta, t, n, o, i, s), kl || jl || Ul;
  }
  var Gi = new et(), Nl = new F(), zl = new Ne(), Wl = new F(), Jl, Vl, Kl;
  function a4(r, e, t, n, o, i, s) {
    var c = r;
    return c.__damp === void 0 && (c.__damp = {
      position: new F(),
      rotation: new Ne(),
      scale: new F()
    }, r.decompose(c.__damp.position, c.__damp.rotation, c.__damp.scale)), Array.isArray(e) ? Gi.set.apply(Gi, U9(e)) : Gi.copy(e), Gi.decompose(Nl, zl, Wl), Jl = Ua(c.__damp.position, Nl, t, n, o, i, s), Vl = E0(c.__damp.rotation, zl, t, n, o, i, s), Kl = Ua(c.__damp.scale, Wl, t, n, o, i, s), r.compose(c.__damp.position, c.__damp.rotation, c.__damp.scale), Jl || Vl || Kl;
  }
  oM = Object.freeze({
    __proto__: null,
    rsqw: J9,
    exp: od,
    linear: V9,
    sine: K9,
    cubic: Q9,
    quint: X9,
    circ: q9,
    quart: Y9,
    expo: Z9,
    damp: Gt,
    dampLookAt: t4,
    dampAngle: uo,
    damp2: r4,
    damp3: Ua,
    damp4: n4,
    dampE: o4,
    dampC: i4,
    dampQ: E0,
    dampS: s4,
    dampM: a4
  });
  const vi = parseInt(hf.replace(/\D+/g, "")), id = vi >= 125 ? "uv1" : "uv2";
  function Ql(r, e) {
    if (e === mf) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
    if (e === La || e === L2) {
      let t = r.getIndex();
      if (t === null) {
        const s = [], c = r.getAttribute("position");
        if (c !== void 0) {
          for (let l = 0; l < c.count; l++) s.push(l);
          r.setIndex(s), t = r.getIndex();
        } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
      }
      const n = t.count - 2, o = [];
      if (t) if (e === La) for (let s = 1; s <= n; s++) o.push(t.getX(0)), o.push(t.getX(s)), o.push(t.getX(s + 1));
      else for (let s = 0; s < n; s++) s % 2 === 0 ? (o.push(t.getX(s)), o.push(t.getX(s + 1)), o.push(t.getX(s + 2))) : (o.push(t.getX(s + 2)), o.push(t.getX(s + 1)), o.push(t.getX(s)));
      o.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const i = r.clone();
      return i.setIndex(o), i.clearGroups(), i;
    } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
  }
  var vr = Uint8Array, gn = Uint16Array, Na = Uint32Array, sd = new vr([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0
  ]), ad = new vr([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0
  ]), c4 = new vr([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ]), cd = function(r, e) {
    for (var t = new gn(31), n = 0; n < 31; ++n) t[n] = e += 1 << r[n - 1];
    for (var o = new Na(t[30]), n = 1; n < 30; ++n) for (var i = t[n]; i < t[n + 1]; ++i) o[i] = i - t[n] << 5 | n;
    return [
      t,
      o
    ];
  }, ld = cd(sd, 2), ud = ld[0], l4 = ld[1];
  ud[28] = 258, l4[258] = 28;
  var u4 = cd(ad, 0), d4 = u4[0], za = new gn(32768);
  for (var St = 0; St < 32768; ++St) {
    var un = (St & 43690) >>> 1 | (St & 21845) << 1;
    un = (un & 52428) >>> 2 | (un & 13107) << 2, un = (un & 61680) >>> 4 | (un & 3855) << 4, za[St] = ((un & 65280) >>> 8 | (un & 255) << 8) >>> 1;
  }
  var Yo = function(r, e, t) {
    for (var n = r.length, o = 0, i = new gn(e); o < n; ++o) ++i[r[o] - 1];
    var s = new gn(e);
    for (o = 0; o < e; ++o) s[o] = s[o - 1] + i[o - 1] << 1;
    var c;
    if (t) {
      c = new gn(1 << e);
      var l = 15 - e;
      for (o = 0; o < n; ++o) if (r[o]) for (var a = o << 4 | r[o], p = e - r[o], f = s[r[o] - 1]++ << p, d = f | (1 << p) - 1; f <= d; ++f) c[za[f] >>> l] = a;
    } else for (c = new gn(n), o = 0; o < n; ++o) r[o] && (c[o] = za[s[r[o] - 1]++] >>> 15 - r[o]);
    return c;
  }, Ci = new vr(288);
  for (var St = 0; St < 144; ++St) Ci[St] = 8;
  for (var St = 144; St < 256; ++St) Ci[St] = 9;
  for (var St = 256; St < 280; ++St) Ci[St] = 7;
  for (var St = 280; St < 288; ++St) Ci[St] = 8;
  var dd = new vr(32);
  for (var St = 0; St < 32; ++St) dd[St] = 5;
  var f4 = Yo(Ci, 9, 1), p4 = Yo(dd, 5, 1), hs = function(r) {
    for (var e = r[0], t = 1; t < r.length; ++t) r[t] > e && (e = r[t]);
    return e;
  }, Er = function(r, e, t) {
    var n = e / 8 | 0;
    return (r[n] | r[n + 1] << 8) >> (e & 7) & t;
  }, ms = function(r, e) {
    var t = e / 8 | 0;
    return (r[t] | r[t + 1] << 8 | r[t + 2] << 16) >> (e & 7);
  }, _4 = function(r) {
    return (r / 8 | 0) + (r & 7 && 1);
  }, h4 = function(r, e, t) {
    (t == null || t > r.length) && (t = r.length);
    var n = new (r instanceof gn ? gn : r instanceof Na ? Na : vr)(t - e);
    return n.set(r.subarray(e, t)), n;
  }, m4 = function(r, e, t) {
    var n = r.length;
    if (!n || t && !t.l && n < 5) return e || new vr(0);
    var o = !e || t, i = !t || t.i;
    t || (t = {}), e || (e = new vr(n * 3));
    var s = function(ne) {
      var Ie = e.length;
      if (ne > Ie) {
        var ie = new vr(Math.max(Ie * 2, ne));
        ie.set(e), e = ie;
      }
    }, c = t.f || 0, l = t.p || 0, a = t.b || 0, p = t.l, f = t.d, d = t.m, _ = t.n, h = n * 8;
    do {
      if (!p) {
        t.f = c = Er(r, l, 1);
        var b = Er(r, l + 1, 3);
        if (l += 3, b) if (b == 1) p = f4, f = p4, d = 9, _ = 5;
        else if (b == 2) {
          var C = Er(r, l, 31) + 257, S = Er(r, l + 10, 15) + 4, B = C + Er(r, l + 5, 31) + 1;
          l += 14;
          for (var T = new vr(B), E = new vr(19), M = 0; M < S; ++M) E[c4[M]] = Er(r, l + M * 3, 7);
          l += S * 3;
          for (var x = hs(E), P = (1 << x) - 1, D = Yo(E, x, 1), M = 0; M < B; ) {
            var H = D[Er(r, l, P)];
            l += H & 15;
            var g = H >>> 4;
            if (g < 16) T[M++] = g;
            else {
              var k = 0, J = 0;
              for (g == 16 ? (J = 3 + Er(r, l, 3), l += 2, k = T[M - 1]) : g == 17 ? (J = 3 + Er(r, l, 7), l += 3) : g == 18 && (J = 11 + Er(r, l, 127), l += 7); J--; ) T[M++] = k;
            }
          }
          var W = T.subarray(0, C), K = T.subarray(C);
          d = hs(W), _ = hs(K), p = Yo(W, d, 1), f = Yo(K, _, 1);
        } else throw "invalid block type";
        else {
          var g = _4(l) + 4, y = r[g - 4] | r[g - 3] << 8, A = g + y;
          if (A > n) {
            if (i) throw "unexpected EOF";
            break;
          }
          o && s(a + y), e.set(r.subarray(g, A), a), t.b = a += y, t.p = l = A * 8;
          continue;
        }
        if (l > h) {
          if (i) throw "unexpected EOF";
          break;
        }
      }
      o && s(a + 131072);
      for (var Q = (1 << d) - 1, Z = (1 << _) - 1, j = l; ; j = l) {
        var k = p[ms(r, l) & Q], U = k >>> 4;
        if (l += k & 15, l > h) {
          if (i) throw "unexpected EOF";
          break;
        }
        if (!k) throw "invalid length/literal";
        if (U < 256) e[a++] = U;
        else if (U == 256) {
          j = l, p = null;
          break;
        } else {
          var N = U - 254;
          if (U > 264) {
            var M = U - 257, oe = sd[M];
            N = Er(r, l, (1 << oe) - 1) + ud[M], l += oe;
          }
          var ue = f[ms(r, l) & Z], we = ue >>> 4;
          if (!ue) throw "invalid distance";
          l += ue & 15;
          var K = d4[we];
          if (we > 3) {
            var oe = ad[we];
            K += ms(r, l) & (1 << oe) - 1, l += oe;
          }
          if (l > h) {
            if (i) throw "unexpected EOF";
            break;
          }
          o && s(a + 131072);
          for (var ve = a + N; a < ve; a += 4) e[a] = e[a - K], e[a + 1] = e[a + 1 - K], e[a + 2] = e[a + 2 - K], e[a + 3] = e[a + 3 - K];
          a = ve;
        }
      }
      t.l = p, t.p = j, t.b = a, p && (c = 1, t.m = d, t.d = f, t.n = _);
    } while (!c);
    return a == e.length ? e : h4(e, 0, a);
  }, g4 = new vr(0), w4 = function(r) {
    if ((r[0] & 15) != 8 || r[0] >>> 4 > 7 || (r[0] << 8 | r[1]) % 31) throw "invalid zlib data";
    if (r[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
  };
  function Oi(r, e) {
    return m4((w4(r), r.subarray(2, -4)), e);
  }
  var b4 = typeof TextDecoder < "u" && new TextDecoder(), y4 = 0;
  try {
    b4.decode(g4, {
      stream: true
    }), y4 = 1;
  } catch {
  }
  const A4 = (r) => r && r.isCubeTexture;
  class v4 extends ir {
    constructor(e, t) {
      var n, o;
      const i = A4(e), c = ((o = i ? (n = e.image[0]) == null ? void 0 : n.width : e.image.width) != null ? o : 1024) / 4, l = Math.floor(Math.log2(c)), a = Math.pow(2, l), p = 3 * Math.max(a, 112), f = 4 * a, d = [
        i ? "#define ENVMAP_TYPE_CUBE" : "",
        `#define CUBEUV_TEXEL_WIDTH ${1 / p}`,
        `#define CUBEUV_TEXEL_HEIGHT ${1 / f}`,
        `#define CUBEUV_MAX_MIP ${l}.0`
      ], _ = `
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `, h = d.join(`
`) + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${vi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, b = {
        map: {
          value: e
        },
        height: {
          value: (t == null ? void 0 : t.height) || 15
        },
        radius: {
          value: (t == null ? void 0 : t.radius) || 100
        }
      }, g = new gf(1, 16), y = new sr({
        uniforms: b,
        fragmentShader: h,
        vertexShader: _,
        side: Bn
      });
      super(g, y);
    }
    set radius(e) {
      this.material.uniforms.radius.value = e;
    }
    get radius() {
      return this.material.uniforms.radius.value;
    }
    set height(e) {
      this.material.uniforms.height.value = e;
    }
    get height() {
      return this.material.uniforms.height.value;
    }
  }
  function B0(r) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(r);
    let e = "";
    for (let t = 0, n = r.length; t < n; t++) e += String.fromCharCode(r[t]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  const Gn = "srgb", on = "srgb-linear", Xl = 3001, C4 = 3e3;
  class yc extends fc {
    constructor(e) {
      super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
        return new B4(t);
      }), this.register(function(t) {
        return new I4(t);
      }), this.register(function(t) {
        return new H4(t);
      }), this.register(function(t) {
        return new k4(t);
      }), this.register(function(t) {
        return new j4(t);
      }), this.register(function(t) {
        return new x4(t);
      }), this.register(function(t) {
        return new P4(t);
      }), this.register(function(t) {
        return new F4(t);
      }), this.register(function(t) {
        return new L4(t);
      }), this.register(function(t) {
        return new E4(t);
      }), this.register(function(t) {
        return new D4(t);
      }), this.register(function(t) {
        return new T4(t);
      }), this.register(function(t) {
        return new O4(t);
      }), this.register(function(t) {
        return new G4(t);
      }), this.register(function(t) {
        return new R4(t);
      }), this.register(function(t) {
        return new U4(t);
      }), this.register(function(t) {
        return new N4(t);
      });
    }
    load(e, t, n, o) {
      const i = this;
      let s;
      if (this.resourcePath !== "") s = this.resourcePath;
      else if (this.path !== "") {
        const a = qo.extractUrlBase(e);
        s = qo.resolveURL(a, this.path);
      } else s = qo.extractUrlBase(e);
      this.manager.itemStart(e);
      const c = function(a) {
        o ? o(a) : console.error(a), i.manager.itemError(e), i.manager.itemEnd(e);
      }, l = new yn(this.manager);
      l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(a) {
        try {
          i.parse(a, s, function(p) {
            t(p), i.manager.itemEnd(e);
          }, c);
        } catch (p) {
          c(p);
        }
      }, n, c);
    }
    setDRACOLoader(e) {
      return this.dracoLoader = e, this;
    }
    setDDSLoader() {
      throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
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
    parse(e, t, n, o) {
      let i;
      const s = {}, c = {};
      if (typeof e == "string") i = JSON.parse(e);
      else if (e instanceof ArrayBuffer) if (B0(new Uint8Array(e.slice(0, 4))) === fd) {
        try {
          s[Je.KHR_BINARY_GLTF] = new z4(e);
        } catch (p) {
          o && o(p);
          return;
        }
        i = JSON.parse(s[Je.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(B0(new Uint8Array(e)));
      else i = e;
      if (i.asset === void 0 || i.asset.version[0] < 2) {
        o && o(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
        return;
      }
      const l = new r5(i, {
        path: t || this.resourcePath || "",
        crossOrigin: this.crossOrigin,
        requestHeader: this.requestHeader,
        manager: this.manager,
        ktx2Loader: this.ktx2Loader,
        meshoptDecoder: this.meshoptDecoder
      });
      l.fileLoader.setRequestHeader(this.requestHeader);
      for (let a = 0; a < this.pluginCallbacks.length; a++) {
        const p = this.pluginCallbacks[a](l);
        p.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), c[p.name] = p, s[p.name] = true;
      }
      if (i.extensionsUsed) for (let a = 0; a < i.extensionsUsed.length; ++a) {
        const p = i.extensionsUsed[a], f = i.extensionsRequired || [];
        switch (p) {
          case Je.KHR_MATERIALS_UNLIT:
            s[p] = new M4();
            break;
          case Je.KHR_DRACO_MESH_COMPRESSION:
            s[p] = new W4(i, this.dracoLoader);
            break;
          case Je.KHR_TEXTURE_TRANSFORM:
            s[p] = new J4();
            break;
          case Je.KHR_MESH_QUANTIZATION:
            s[p] = new V4();
            break;
          default:
            f.indexOf(p) >= 0 && c[p] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + p + '".');
        }
      }
      l.setExtensions(s), l.setPlugins(c), l.parse(n, o);
    }
    parseAsync(e, t) {
      const n = this;
      return new Promise(function(o, i) {
        n.parse(e, t, o, i);
      });
    }
  }
  function S4() {
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
  const Je = {
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
  class R4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      const e = this.parser, t = this.parser.json.nodes || [];
      for (let n = 0, o = t.length; n < o; n++) {
        const i = t[n];
        i.extensions && i.extensions[this.name] && i.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, i.extensions[this.name].light);
      }
    }
    _loadLight(e) {
      const t = this.parser, n = "light:" + e;
      let o = t.cache.get(n);
      if (o) return o;
      const i = t.json, l = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
      let a;
      const p = new Ye(16777215);
      l.color !== void 0 && p.setRGB(l.color[0], l.color[1], l.color[2], on);
      const f = l.range !== void 0 ? l.range : 0;
      switch (l.type) {
        case "directional":
          a = new yf(p), a.target.position.set(0, 0, -1), a.add(a.target);
          break;
        case "point":
          a = new bf(p), a.distance = f;
          break;
        case "spot":
          a = new wf(p), a.distance = f, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, a.angle = l.spot.outerConeAngle, a.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
          break;
        default:
          throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
      }
      return a.position.set(0, 0, 0), a.decay = 2, en(a, l), l.intensity !== void 0 && (a.intensity = l.intensity), a.name = t.createUniqueName(l.name || "light_" + e), o = Promise.resolve(a), t.cache.add(n, o), o;
    }
    getDependency(e, t) {
      if (e === "light") return this._loadLight(t);
    }
    createNodeAttachment(e) {
      const t = this, n = this.parser, i = n.json.nodes[e], c = (i.extensions && i.extensions[this.name] || {}).light;
      return c === void 0 ? null : this._loadLight(c).then(function(l) {
        return n._getNodeRef(t.cache, c, l);
      });
    }
  }
  class M4 {
    constructor() {
      this.name = Je.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return _t;
    }
    extendParams(e, t, n) {
      const o = [];
      e.color = new Ye(1, 1, 1), e.opacity = 1;
      const i = t.pbrMetallicRoughness;
      if (i) {
        if (Array.isArray(i.baseColorFactor)) {
          const s = i.baseColorFactor;
          e.color.setRGB(s[0], s[1], s[2], on), e.opacity = s[3];
        }
        i.baseColorTexture !== void 0 && o.push(n.assignTexture(e, "map", i.baseColorTexture, Gn));
      }
      return Promise.all(o);
    }
  }
  class E4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(e, t) {
      const o = this.parser.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = o.extensions[this.name].emissiveStrength;
      return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
    }
  }
  class B4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      if (s.clearcoatFactor !== void 0 && (t.clearcoat = s.clearcoatFactor), s.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", s.clearcoatTexture)), s.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = s.clearcoatRoughnessFactor), s.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), s.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", s.clearcoatNormalTexture)), s.clearcoatNormalTexture.scale !== void 0)) {
        const c = s.clearcoatNormalTexture.scale;
        t.clearcoatNormalScale = new Pr(c, c);
      }
      return Promise.all(i);
    }
  }
  class I4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_DISPERSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const o = this.parser.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = o.extensions[this.name];
      return t.dispersion = i.dispersion !== void 0 ? i.dispersion : 0, Promise.resolve();
    }
  }
  class T4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      return s.iridescenceFactor !== void 0 && (t.iridescence = s.iridescenceFactor), s.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", s.iridescenceTexture)), s.iridescenceIor !== void 0 && (t.iridescenceIOR = s.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [
        100,
        400
      ]), s.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = s.iridescenceThicknessMinimum), s.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = s.iridescenceThicknessMaximum), s.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", s.iridescenceThicknessTexture)), Promise.all(i);
    }
  }
  class x4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [];
      t.sheenColor = new Ye(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
      const s = o.extensions[this.name];
      if (s.sheenColorFactor !== void 0) {
        const c = s.sheenColorFactor;
        t.sheenColor.setRGB(c[0], c[1], c[2], on);
      }
      return s.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = s.sheenRoughnessFactor), s.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", s.sheenColorTexture, Gn)), s.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", s.sheenRoughnessTexture)), Promise.all(i);
    }
  }
  class P4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      return s.transmissionFactor !== void 0 && (t.transmission = s.transmissionFactor), s.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", s.transmissionTexture)), Promise.all(i);
    }
  }
  class F4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      t.thickness = s.thicknessFactor !== void 0 ? s.thicknessFactor : 0, s.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", s.thicknessTexture)), t.attenuationDistance = s.attenuationDistance || 1 / 0;
      const c = s.attenuationColor || [
        1,
        1,
        1
      ];
      return t.attenuationColor = new Ye().setRGB(c[0], c[1], c[2], on), Promise.all(i);
    }
  }
  class L4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_IOR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const o = this.parser.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = o.extensions[this.name];
      return t.ior = i.ior !== void 0 ? i.ior : 1.5, Promise.resolve();
    }
  }
  class D4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      t.specularIntensity = s.specularFactor !== void 0 ? s.specularFactor : 1, s.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", s.specularTexture));
      const c = s.specularColorFactor || [
        1,
        1,
        1
      ];
      return t.specularColor = new Ye().setRGB(c[0], c[1], c[2], on), s.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", s.specularColorTexture, Gn)), Promise.all(i);
    }
  }
  class G4 {
    constructor(e) {
      this.parser = e, this.name = Je.EXT_MATERIALS_BUMP;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      return t.bumpScale = s.bumpFactor !== void 0 ? s.bumpFactor : 1, s.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", s.bumpTexture)), Promise.all(i);
    }
  }
  class O4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_MATERIALS_ANISOTROPY;
    }
    getMaterialType(e) {
      const n = this.parser.json.materials[e];
      return !n.extensions || !n.extensions[this.name] ? null : Vr;
    }
    extendMaterialParams(e, t) {
      const n = this.parser, o = n.json.materials[e];
      if (!o.extensions || !o.extensions[this.name]) return Promise.resolve();
      const i = [], s = o.extensions[this.name];
      return s.anisotropyStrength !== void 0 && (t.anisotropy = s.anisotropyStrength), s.anisotropyRotation !== void 0 && (t.anisotropyRotation = s.anisotropyRotation), s.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", s.anisotropyTexture)), Promise.all(i);
    }
  }
  class H4 {
    constructor(e) {
      this.parser = e, this.name = Je.KHR_TEXTURE_BASISU;
    }
    loadTexture(e) {
      const t = this.parser, n = t.json, o = n.textures[e];
      if (!o.extensions || !o.extensions[this.name]) return null;
      const i = o.extensions[this.name], s = t.options.ktx2Loader;
      if (!s) {
        if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
        return null;
      }
      return t.loadTextureImage(e, i.source, s);
    }
  }
  class k4 {
    constructor(e) {
      this.parser = e, this.name = Je.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, o = n.json, i = o.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      const s = i.extensions[t], c = o.images[s.source];
      let l = n.textureLoader;
      if (c.uri) {
        const a = n.options.manager.getHandler(c.uri);
        a !== null && (l = a);
      }
      return this.detectSupport().then(function(a) {
        if (a) return n.loadTextureImage(e, s.source, l);
        if (o.extensionsRequired && o.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class j4 {
    constructor(e) {
      this.parser = e, this.name = Je.EXT_TEXTURE_AVIF, this.isSupported = null;
    }
    loadTexture(e) {
      const t = this.name, n = this.parser, o = n.json, i = o.textures[e];
      if (!i.extensions || !i.extensions[t]) return null;
      const s = i.extensions[t], c = o.images[s.source];
      let l = n.textureLoader;
      if (c.uri) {
        const a = n.options.manager.getHandler(c.uri);
        a !== null && (l = a);
      }
      return this.detectSupport().then(function(a) {
        if (a) return n.loadTextureImage(e, s.source, l);
        if (o.extensionsRequired && o.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
        return n.loadTexture(e);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function(e) {
        const t = new Image();
        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
          e(t.height === 1);
        };
      })), this.isSupported;
    }
  }
  class U4 {
    constructor(e) {
      this.name = Je.EXT_MESHOPT_COMPRESSION, this.parser = e;
    }
    loadBufferView(e) {
      const t = this.parser.json, n = t.bufferViews[e];
      if (n.extensions && n.extensions[this.name]) {
        const o = n.extensions[this.name], i = this.parser.getDependency("buffer", o.buffer), s = this.parser.options.meshoptDecoder;
        if (!s || !s.supported) {
          if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
          return null;
        }
        return i.then(function(c) {
          const l = o.byteOffset || 0, a = o.byteLength || 0, p = o.count, f = o.byteStride, d = new Uint8Array(c, l, a);
          return s.decodeGltfBufferAsync ? s.decodeGltfBufferAsync(p, f, d, o.mode, o.filter).then(function(_) {
            return _.buffer;
          }) : s.ready.then(function() {
            const _ = new ArrayBuffer(p * f);
            return s.decodeGltfBuffer(new Uint8Array(_), p, f, d, o.mode, o.filter), _;
          });
        });
      } else return null;
    }
  }
  class N4 {
    constructor(e) {
      this.name = Je.EXT_MESH_GPU_INSTANCING, this.parser = e;
    }
    createNodeMesh(e) {
      const t = this.parser.json, n = t.nodes[e];
      if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
      const o = t.meshes[n.mesh];
      for (const a of o.primitives) if (a.mode !== yr.TRIANGLES && a.mode !== yr.TRIANGLE_STRIP && a.mode !== yr.TRIANGLE_FAN && a.mode !== void 0) return null;
      const s = n.extensions[this.name].attributes, c = [], l = {};
      for (const a in s) c.push(this.parser.getDependency("accessor", s[a]).then((p) => (l[a] = p, l[a])));
      return c.length < 1 ? null : (c.push(this.parser.createNodeMesh(e)), Promise.all(c).then((a) => {
        const p = a.pop(), f = p.isGroup ? p.children : [
          p
        ], d = a[0].count, _ = [];
        for (const h of f) {
          const b = new et(), g = new F(), y = new Ne(), A = new F(1, 1, 1), C = new D2(h.geometry, h.material, d);
          for (let S = 0; S < d; S++) l.TRANSLATION && g.fromBufferAttribute(l.TRANSLATION, S), l.ROTATION && y.fromBufferAttribute(l.ROTATION, S), l.SCALE && A.fromBufferAttribute(l.SCALE, S), C.setMatrixAt(S, b.compose(g, y, A));
          for (const S in l) if (S === "_COLOR_0") {
            const B = l[S];
            C.instanceColor = new Af(B.array, B.itemSize, B.normalized);
          } else S !== "TRANSLATION" && S !== "ROTATION" && S !== "SCALE" && h.geometry.setAttribute(S, l[S]);
          ni.prototype.copy.call(C, h), this.parser.assignFinalMaterial(C), _.push(C);
        }
        return p.isGroup ? (p.clear(), p.add(..._), p) : _[0];
      }));
    }
  }
  const fd = "glTF", Lo = 12, ql = {
    JSON: 1313821514,
    BIN: 5130562
  };
  class z4 {
    constructor(e) {
      this.name = Je.KHR_BINARY_GLTF, this.content = null, this.body = null;
      const t = new DataView(e, 0, Lo);
      if (this.header = {
        magic: B0(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, true),
        length: t.getUint32(8, true)
      }, this.header.magic !== fd) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      const n = this.header.length - Lo, o = new DataView(e, Lo);
      let i = 0;
      for (; i < n; ) {
        const s = o.getUint32(i, true);
        i += 4;
        const c = o.getUint32(i, true);
        if (i += 4, c === ql.JSON) {
          const l = new Uint8Array(e, Lo + i, s);
          this.content = B0(l);
        } else if (c === ql.BIN) {
          const l = Lo + i;
          this.body = e.slice(l, l + s);
        }
        i += s;
      }
      if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class W4 {
    constructor(e, t) {
      if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = Je.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
    }
    decodePrimitive(e, t) {
      const n = this.json, o = this.dracoLoader, i = e.extensions[this.name].bufferView, s = e.extensions[this.name].attributes, c = {}, l = {}, a = {};
      for (const p in s) {
        const f = Wa[p] || p.toLowerCase();
        c[f] = s[p];
      }
      for (const p in e.attributes) {
        const f = Wa[p] || p.toLowerCase();
        if (s[p] !== void 0) {
          const d = n.accessors[e.attributes[p]], _ = fo[d.componentType];
          a[f] = _.name, l[f] = d.normalized === true;
        }
      }
      return t.getDependency("bufferView", i).then(function(p) {
        return new Promise(function(f, d) {
          o.decodeDracoFile(p, function(_) {
            for (const h in _.attributes) {
              const b = _.attributes[h], g = l[h];
              g !== void 0 && (b.normalized = g);
            }
            f(_);
          }, c, a, on, d);
        });
      });
    }
  }
  class J4 {
    constructor() {
      this.name = Je.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(e, t) {
      return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
    }
  }
  class V4 {
    constructor() {
      this.name = Je.KHR_MESH_QUANTIZATION;
    }
  }
  class pd extends kf {
    constructor(e, t, n, o) {
      super(e, t, n, o);
    }
    copySampleValue_(e) {
      const t = this.resultBuffer, n = this.sampleValues, o = this.valueSize, i = e * o * 3 + o;
      for (let s = 0; s !== o; s++) t[s] = n[i + s];
      return t;
    }
    interpolate_(e, t, n, o) {
      const i = this.resultBuffer, s = this.sampleValues, c = this.valueSize, l = c * 2, a = c * 3, p = o - t, f = (n - t) / p, d = f * f, _ = d * f, h = e * a, b = h - a, g = -2 * _ + 3 * d, y = _ - d, A = 1 - g, C = y - d + f;
      for (let S = 0; S !== c; S++) {
        const B = s[b + S + c], T = s[b + S + l] * p, E = s[h + S + c], M = s[h + S] * p;
        i[S] = A * B + C * T + g * E + y * M;
      }
      return i;
    }
  }
  const K4 = new Ne();
  class Q4 extends pd {
    interpolate_(e, t, n, o) {
      const i = super.interpolate_(e, t, n, o);
      return K4.fromArray(i).normalize().toArray(i), i;
    }
  }
  const yr = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
  }, fo = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
  }, Yl = {
    9728: Da,
    9729: Wt,
    9984: Mf,
    9985: Rf,
    9986: Sf,
    9987: O2
  }, Zl = {
    33071: Ir,
    33648: Ef,
    10497: nn
  }, gs = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
  }, Wa = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    ...vi >= 152 ? {
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv1",
      TEXCOORD_2: "uv2",
      TEXCOORD_3: "uv3"
    } : {
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2"
    },
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
  }, dn = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
  }, X4 = {
    CUBICSPLINE: void 0,
    LINEAR: H2,
    STEP: Hf
  }, ws = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
  };
  function q4(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new go({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: false,
      depthTest: true,
      side: Dt
    })), r.DefaultMaterial;
  }
  function Pn(r, e, t) {
    for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
  }
  function en(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
  }
  function Y4(r, e, t) {
    let n = false, o = false, i = false;
    for (let a = 0, p = e.length; a < p; a++) {
      const f = e[a];
      if (f.POSITION !== void 0 && (n = true), f.NORMAL !== void 0 && (o = true), f.COLOR_0 !== void 0 && (i = true), n && o && i) break;
    }
    if (!n && !o && !i) return Promise.resolve(r);
    const s = [], c = [], l = [];
    for (let a = 0, p = e.length; a < p; a++) {
      const f = e[a];
      if (n) {
        const d = f.POSITION !== void 0 ? t.getDependency("accessor", f.POSITION) : r.attributes.position;
        s.push(d);
      }
      if (o) {
        const d = f.NORMAL !== void 0 ? t.getDependency("accessor", f.NORMAL) : r.attributes.normal;
        c.push(d);
      }
      if (i) {
        const d = f.COLOR_0 !== void 0 ? t.getDependency("accessor", f.COLOR_0) : r.attributes.color;
        l.push(d);
      }
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(c),
      Promise.all(l)
    ]).then(function(a) {
      const p = a[0], f = a[1], d = a[2];
      return n && (r.morphAttributes.position = p), o && (r.morphAttributes.normal = f), i && (r.morphAttributes.color = d), r.morphTargetsRelative = true, r;
    });
  }
  function Z4(r, e) {
    if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
      const t = e.extras.targetNames;
      if (r.morphTargetInfluences.length === t.length) {
        r.morphTargetDictionary = {};
        for (let n = 0, o = t.length; n < o; n++) r.morphTargetDictionary[t[n]] = n;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function $4(r) {
    let e;
    const t = r.extensions && r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + bs(t.attributes) : e = r.indices + ":" + bs(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, o = r.targets.length; n < o; n++) e += ":" + bs(r.targets[n]);
    return e;
  }
  function bs(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, o = t.length; n < o; n++) e += t[n] + ":" + r[t[n]] + ";";
    return e;
  }
  function Ja(r) {
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
  function e5(r) {
    return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
  }
  const t5 = new et();
  class r5 {
    constructor(e = {}, t = {}) {
      this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new S4(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
      let n = false, o = false, i = -1;
      typeof navigator < "u" && typeof navigator.userAgent < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true, o = navigator.userAgent.indexOf("Firefox") > -1, i = o ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || o && i < 98 ? this.textureLoader = new G2(this.options.manager) : this.textureLoader = new vf(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new yn(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
    }
    setExtensions(e) {
      this.extensions = e;
    }
    setPlugins(e) {
      this.plugins = e;
    }
    parse(e, t) {
      const n = this, o = this.json, i = this.extensions;
      this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(s) {
        return s._markDefs && s._markDefs();
      }), Promise.all(this._invokeAll(function(s) {
        return s.beforeRoot && s.beforeRoot();
      })).then(function() {
        return Promise.all([
          n.getDependencies("scene"),
          n.getDependencies("animation"),
          n.getDependencies("camera")
        ]);
      }).then(function(s) {
        const c = {
          scene: s[0][o.scene || 0],
          scenes: s[0],
          animations: s[1],
          cameras: s[2],
          asset: o.asset,
          parser: n,
          userData: {}
        };
        return Pn(i, c, o), en(c, o), Promise.all(n._invokeAll(function(l) {
          return l.afterRoot && l.afterRoot(c);
        })).then(function() {
          for (const l of c.scenes) l.updateMatrixWorld();
          e(c);
        });
      }).catch(t);
    }
    _markDefs() {
      const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
      for (let o = 0, i = t.length; o < i; o++) {
        const s = t[o].joints;
        for (let c = 0, l = s.length; c < l; c++) e[s[c]].isBone = true;
      }
      for (let o = 0, i = e.length; o < i; o++) {
        const s = e[o];
        s.mesh !== void 0 && (this._addNodeRef(this.meshCache, s.mesh), s.skin !== void 0 && (n[s.mesh].isSkinnedMesh = true)), s.camera !== void 0 && this._addNodeRef(this.cameraCache, s.camera);
      }
    }
    _addNodeRef(e, t) {
      t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
    }
    _getNodeRef(e, t, n) {
      if (e.refs[t] <= 1) return n;
      const o = n.clone(), i = (s, c) => {
        const l = this.associations.get(s);
        l != null && this.associations.set(c, l);
        for (const [a, p] of s.children.entries()) i(p, c.children[a]);
      };
      return i(n, o), o.name += "_instance_" + e.uses[t]++, o;
    }
    _invokeOne(e) {
      const t = Object.values(this.plugins);
      t.push(this);
      for (let n = 0; n < t.length; n++) {
        const o = e(t[n]);
        if (o) return o;
      }
      return null;
    }
    _invokeAll(e) {
      const t = Object.values(this.plugins);
      t.unshift(this);
      const n = [];
      for (let o = 0; o < t.length; o++) {
        const i = e(t[o]);
        i && n.push(i);
      }
      return n;
    }
    getDependency(e, t) {
      const n = e + ":" + t;
      let o = this.cache.get(n);
      if (!o) {
        switch (e) {
          case "scene":
            o = this.loadScene(t);
            break;
          case "node":
            o = this._invokeOne(function(i) {
              return i.loadNode && i.loadNode(t);
            });
            break;
          case "mesh":
            o = this._invokeOne(function(i) {
              return i.loadMesh && i.loadMesh(t);
            });
            break;
          case "accessor":
            o = this.loadAccessor(t);
            break;
          case "bufferView":
            o = this._invokeOne(function(i) {
              return i.loadBufferView && i.loadBufferView(t);
            });
            break;
          case "buffer":
            o = this.loadBuffer(t);
            break;
          case "material":
            o = this._invokeOne(function(i) {
              return i.loadMaterial && i.loadMaterial(t);
            });
            break;
          case "texture":
            o = this._invokeOne(function(i) {
              return i.loadTexture && i.loadTexture(t);
            });
            break;
          case "skin":
            o = this.loadSkin(t);
            break;
          case "animation":
            o = this._invokeOne(function(i) {
              return i.loadAnimation && i.loadAnimation(t);
            });
            break;
          case "camera":
            o = this.loadCamera(t);
            break;
          default:
            if (o = this._invokeOne(function(i) {
              return i != this && i.getDependency && i.getDependency(e, t);
            }), !o) throw new Error("Unknown type: " + e);
            break;
        }
        this.cache.add(n, o);
      }
      return o;
    }
    getDependencies(e) {
      let t = this.cache.get(e);
      if (!t) {
        const n = this, o = this.json[e + (e === "mesh" ? "es" : "s")] || [];
        t = Promise.all(o.map(function(i, s) {
          return n.getDependency(e, s);
        })), this.cache.add(e, t);
      }
      return t;
    }
    loadBuffer(e) {
      const t = this.json.buffers[e], n = this.fileLoader;
      if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
      if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);
      const o = this.options;
      return new Promise(function(i, s) {
        n.load(qo.resolveURL(t.uri, o.path), i, void 0, function() {
          s(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
        });
      });
    }
    loadBufferView(e) {
      const t = this.json.bufferViews[e];
      return this.getDependency("buffer", t.buffer).then(function(n) {
        const o = t.byteLength || 0, i = t.byteOffset || 0;
        return n.slice(i, i + o);
      });
    }
    loadAccessor(e) {
      const t = this, n = this.json, o = this.json.accessors[e];
      if (o.bufferView === void 0 && o.sparse === void 0) {
        const s = gs[o.type], c = fo[o.componentType], l = o.normalized === true, a = new c(o.count * s);
        return Promise.resolve(new ht(a, s, l));
      }
      const i = [];
      return o.bufferView !== void 0 ? i.push(this.getDependency("bufferView", o.bufferView)) : i.push(null), o.sparse !== void 0 && (i.push(this.getDependency("bufferView", o.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", o.sparse.values.bufferView))), Promise.all(i).then(function(s) {
        const c = s[0], l = gs[o.type], a = fo[o.componentType], p = a.BYTES_PER_ELEMENT, f = p * l, d = o.byteOffset || 0, _ = o.bufferView !== void 0 ? n.bufferViews[o.bufferView].byteStride : void 0, h = o.normalized === true;
        let b, g;
        if (_ && _ !== f) {
          const y = Math.floor(d / _), A = "InterleavedBuffer:" + o.bufferView + ":" + o.componentType + ":" + y + ":" + o.count;
          let C = t.cache.get(A);
          C || (b = new a(c, y * _, o.count * _ / p), C = new Cf(b, _ / p), t.cache.add(A, C)), g = new rt(C, l, d % _ / p, h);
        } else c === null ? b = new a(o.count * l) : b = new a(c, d, o.count * l), g = new ht(b, l, h);
        if (o.sparse !== void 0) {
          const y = gs.SCALAR, A = fo[o.sparse.indices.componentType], C = o.sparse.indices.byteOffset || 0, S = o.sparse.values.byteOffset || 0, B = new A(s[1], C, o.sparse.count * y), T = new a(s[2], S, o.sparse.count * l);
          c !== null && (g = new ht(g.array.slice(), g.itemSize, g.normalized));
          for (let E = 0, M = B.length; E < M; E++) {
            const x = B[E];
            if (g.setX(x, T[E * l]), l >= 2 && g.setY(x, T[E * l + 1]), l >= 3 && g.setZ(x, T[E * l + 2]), l >= 4 && g.setW(x, T[E * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
          }
        }
        return g;
      });
    }
    loadTexture(e) {
      const t = this.json, n = this.options, i = t.textures[e].source, s = t.images[i];
      let c = this.textureLoader;
      if (s.uri) {
        const l = n.manager.getHandler(s.uri);
        l !== null && (c = l);
      }
      return this.loadTextureImage(e, i, c);
    }
    loadTextureImage(e, t, n) {
      const o = this, i = this.json, s = i.textures[e], c = i.images[t], l = (c.uri || c.bufferView) + ":" + s.sampler;
      if (this.textureCache[l]) return this.textureCache[l];
      const a = this.loadImageSource(t, n).then(function(p) {
        p.flipY = false, p.name = s.name || c.name || "", p.name === "" && typeof c.uri == "string" && c.uri.startsWith("data:image/") === false && (p.name = c.uri);
        const d = (i.samplers || {})[s.sampler] || {};
        return p.magFilter = Yl[d.magFilter] || Wt, p.minFilter = Yl[d.minFilter] || O2, p.wrapS = Zl[d.wrapS] || nn, p.wrapT = Zl[d.wrapT] || nn, o.associations.set(p, {
          textures: e
        }), p;
      }).catch(function() {
        return null;
      });
      return this.textureCache[l] = a, a;
    }
    loadImageSource(e, t) {
      const n = this, o = this.json, i = this.options;
      if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((f) => f.clone());
      const s = o.images[e], c = self.URL || self.webkitURL;
      let l = s.uri || "", a = false;
      if (s.bufferView !== void 0) l = n.getDependency("bufferView", s.bufferView).then(function(f) {
        a = true;
        const d = new Blob([
          f
        ], {
          type: s.mimeType
        });
        return l = c.createObjectURL(d), l;
      });
      else if (s.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      const p = Promise.resolve(l).then(function(f) {
        return new Promise(function(d, _) {
          let h = d;
          t.isImageBitmapLoader === true && (h = function(b) {
            const g = new mn(b);
            g.needsUpdate = true, d(g);
          }), t.load(qo.resolveURL(f, i.path), h, void 0, _);
        });
      }).then(function(f) {
        return a === true && c.revokeObjectURL(l), en(f, s), f.userData.mimeType = s.mimeType || e5(s.uri), f;
      }).catch(function(f) {
        throw console.error("THREE.GLTFLoader: Couldn't load texture", l), f;
      });
      return this.sourceCache[e] = p, p;
    }
    assignTexture(e, t, n, o) {
      const i = this;
      return this.getDependency("texture", n.index).then(function(s) {
        if (!s) return null;
        if (n.texCoord !== void 0 && n.texCoord > 0 && (s = s.clone(), s.channel = n.texCoord), i.extensions[Je.KHR_TEXTURE_TRANSFORM]) {
          const c = n.extensions !== void 0 ? n.extensions[Je.KHR_TEXTURE_TRANSFORM] : void 0;
          if (c) {
            const l = i.associations.get(s);
            s = i.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(s, c), i.associations.set(s, l);
          }
        }
        return o !== void 0 && (typeof o == "number" && (o = o === Xl ? Gn : on), "colorSpace" in s ? s.colorSpace = o : s.encoding = o === Gn ? Xl : C4), e[t] = s, s;
      });
    }
    assignFinalMaterial(e) {
      const t = e.geometry;
      let n = e.material;
      const o = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, s = t.attributes.normal === void 0;
      if (e.isPoints) {
        const c = "PointsMaterial:" + n.uuid;
        let l = this.cache.get(c);
        l || (l = new Bf(), ds.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(c, l)), n = l;
      } else if (e.isLine) {
        const c = "LineBasicMaterial:" + n.uuid;
        let l = this.cache.get(c);
        l || (l = new If(), ds.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(c, l)), n = l;
      }
      if (o || i || s) {
        let c = "ClonedMaterial:" + n.uuid + ":";
        o && (c += "derivative-tangents:"), i && (c += "vertex-colors:"), s && (c += "flat-shading:");
        let l = this.cache.get(c);
        l || (l = n.clone(), i && (l.vertexColors = true), s && (l.flatShading = true), o && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(c, l), this.associations.set(l, this.associations.get(n))), n = l;
      }
      e.material = n;
    }
    getMaterialType() {
      return go;
    }
    loadMaterial(e) {
      const t = this, n = this.json, o = this.extensions, i = n.materials[e];
      let s;
      const c = {}, l = i.extensions || {}, a = [];
      if (l[Je.KHR_MATERIALS_UNLIT]) {
        const f = o[Je.KHR_MATERIALS_UNLIT];
        s = f.getMaterialType(), a.push(f.extendParams(c, i, t));
      } else {
        const f = i.pbrMetallicRoughness || {};
        if (c.color = new Ye(1, 1, 1), c.opacity = 1, Array.isArray(f.baseColorFactor)) {
          const d = f.baseColorFactor;
          c.color.setRGB(d[0], d[1], d[2], on), c.opacity = d[3];
        }
        f.baseColorTexture !== void 0 && a.push(t.assignTexture(c, "map", f.baseColorTexture, Gn)), c.metalness = f.metallicFactor !== void 0 ? f.metallicFactor : 1, c.roughness = f.roughnessFactor !== void 0 ? f.roughnessFactor : 1, f.metallicRoughnessTexture !== void 0 && (a.push(t.assignTexture(c, "metalnessMap", f.metallicRoughnessTexture)), a.push(t.assignTexture(c, "roughnessMap", f.metallicRoughnessTexture))), s = this._invokeOne(function(d) {
          return d.getMaterialType && d.getMaterialType(e);
        }), a.push(Promise.all(this._invokeAll(function(d) {
          return d.extendMaterialParams && d.extendMaterialParams(e, c);
        })));
      }
      i.doubleSided === true && (c.side = Bn);
      const p = i.alphaMode || ws.OPAQUE;
      if (p === ws.BLEND ? (c.transparent = true, c.depthWrite = false) : (c.transparent = false, p === ws.MASK && (c.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)), i.normalTexture !== void 0 && s !== _t && (a.push(t.assignTexture(c, "normalMap", i.normalTexture)), c.normalScale = new Pr(1, 1), i.normalTexture.scale !== void 0)) {
        const f = i.normalTexture.scale;
        c.normalScale.set(f, f);
      }
      if (i.occlusionTexture !== void 0 && s !== _t && (a.push(t.assignTexture(c, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (c.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && s !== _t) {
        const f = i.emissiveFactor;
        c.emissive = new Ye().setRGB(f[0], f[1], f[2], on);
      }
      return i.emissiveTexture !== void 0 && s !== _t && a.push(t.assignTexture(c, "emissiveMap", i.emissiveTexture, Gn)), Promise.all(a).then(function() {
        const f = new s(c);
        return i.name && (f.name = i.name), en(f, i), t.associations.set(f, {
          materials: e
        }), i.extensions && Pn(o, f, i), f;
      });
    }
    createUniqueName(e) {
      const t = Tf.sanitizeNodeName(e || "");
      return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
    }
    loadGeometries(e) {
      const t = this, n = this.extensions, o = this.primitiveCache;
      function i(c) {
        return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c, t).then(function(l) {
          return $l(l, c, t);
        });
      }
      const s = [];
      for (let c = 0, l = e.length; c < l; c++) {
        const a = e[c], p = $4(a), f = o[p];
        if (f) s.push(f.promise);
        else {
          let d;
          a.extensions && a.extensions[Je.KHR_DRACO_MESH_COMPRESSION] ? d = i(a) : d = $l(new Nn(), a, t), o[p] = {
            primitive: a,
            promise: d
          }, s.push(d);
        }
      }
      return Promise.all(s);
    }
    loadMesh(e) {
      const t = this, n = this.json, o = this.extensions, i = n.meshes[e], s = i.primitives, c = [];
      for (let l = 0, a = s.length; l < a; l++) {
        const p = s[l].material === void 0 ? q4(this.cache) : this.getDependency("material", s[l].material);
        c.push(p);
      }
      return c.push(t.loadGeometries(s)), Promise.all(c).then(function(l) {
        const a = l.slice(0, l.length - 1), p = l[l.length - 1], f = [];
        for (let _ = 0, h = p.length; _ < h; _++) {
          const b = p[_], g = s[_];
          let y;
          const A = a[_];
          if (g.mode === yr.TRIANGLES || g.mode === yr.TRIANGLE_STRIP || g.mode === yr.TRIANGLE_FAN || g.mode === void 0) y = i.isSkinnedMesh === true ? new xf(b, A) : new ir(b, A), y.isSkinnedMesh === true && y.normalizeSkinWeights(), g.mode === yr.TRIANGLE_STRIP ? y.geometry = Ql(y.geometry, L2) : g.mode === yr.TRIANGLE_FAN && (y.geometry = Ql(y.geometry, La));
          else if (g.mode === yr.LINES) y = new pc(b, A);
          else if (g.mode === yr.LINE_STRIP) y = new Pf(b, A);
          else if (g.mode === yr.LINE_LOOP) y = new Ff(b, A);
          else if (g.mode === yr.POINTS) y = new Lf(b, A);
          else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
          Object.keys(y.geometry.morphAttributes).length > 0 && Z4(y, i), y.name = t.createUniqueName(i.name || "mesh_" + e), en(y, i), g.extensions && Pn(o, y, g), t.assignFinalMaterial(y), f.push(y);
        }
        for (let _ = 0, h = f.length; _ < h; _++) t.associations.set(f[_], {
          meshes: e,
          primitives: _
        });
        if (f.length === 1) return i.extensions && Pn(o, f[0], i), f[0];
        const d = new m0();
        i.extensions && Pn(o, d, i), t.associations.set(d, {
          meshes: e
        });
        for (let _ = 0, h = f.length; _ < h; _++) d.add(f[_]);
        return d;
      });
    }
    loadCamera(e) {
      let t;
      const n = this.json.cameras[e], o = n[n.type];
      if (!o) {
        console.warn("THREE.GLTFLoader: Missing camera parameters.");
        return;
      }
      return n.type === "perspective" ? t = new dc(j0.radToDeg(o.yfov), o.aspectRatio || 1, o.znear || 1, o.zfar || 2e6) : n.type === "orthographic" && (t = new bi(-o.xmag, o.xmag, o.ymag, -o.ymag, o.znear, o.zfar)), n.name && (t.name = this.createUniqueName(n.name)), en(t, n), Promise.resolve(t);
    }
    loadSkin(e) {
      const t = this.json.skins[e], n = [];
      for (let o = 0, i = t.joints.length; o < i; o++) n.push(this._loadNodeShallow(t.joints[o]));
      return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(o) {
        const i = o.pop(), s = o, c = [], l = [];
        for (let a = 0, p = s.length; a < p; a++) {
          const f = s[a];
          if (f) {
            c.push(f);
            const d = new et();
            i !== null && d.fromArray(i.array, a * 16), l.push(d);
          } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[a]);
        }
        return new Df(c, l);
      });
    }
    loadAnimation(e) {
      const t = this.json, n = this, o = t.animations[e], i = o.name ? o.name : "animation_" + e, s = [], c = [], l = [], a = [], p = [];
      for (let f = 0, d = o.channels.length; f < d; f++) {
        const _ = o.channels[f], h = o.samplers[_.sampler], b = _.target, g = b.node, y = o.parameters !== void 0 ? o.parameters[h.input] : h.input, A = o.parameters !== void 0 ? o.parameters[h.output] : h.output;
        b.node !== void 0 && (s.push(this.getDependency("node", g)), c.push(this.getDependency("accessor", y)), l.push(this.getDependency("accessor", A)), a.push(h), p.push(b));
      }
      return Promise.all([
        Promise.all(s),
        Promise.all(c),
        Promise.all(l),
        Promise.all(a),
        Promise.all(p)
      ]).then(function(f) {
        const d = f[0], _ = f[1], h = f[2], b = f[3], g = f[4], y = [];
        for (let A = 0, C = d.length; A < C; A++) {
          const S = d[A], B = _[A], T = h[A], E = b[A], M = g[A];
          if (S === void 0) continue;
          S.updateMatrix && S.updateMatrix();
          const x = n._createAnimationTracks(S, B, T, E, M);
          if (x) for (let P = 0; P < x.length; P++) y.push(x[P]);
        }
        return new Gf(i, void 0, y);
      });
    }
    createNodeMesh(e) {
      const t = this.json, n = this, o = t.nodes[e];
      return o.mesh === void 0 ? null : n.getDependency("mesh", o.mesh).then(function(i) {
        const s = n._getNodeRef(n.meshCache, o.mesh, i);
        return o.weights !== void 0 && s.traverse(function(c) {
          if (c.isMesh) for (let l = 0, a = o.weights.length; l < a; l++) c.morphTargetInfluences[l] = o.weights[l];
        }), s;
      });
    }
    loadNode(e) {
      const t = this.json, n = this, o = t.nodes[e], i = n._loadNodeShallow(e), s = [], c = o.children || [];
      for (let a = 0, p = c.length; a < p; a++) s.push(n.getDependency("node", c[a]));
      const l = o.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", o.skin);
      return Promise.all([
        i,
        Promise.all(s),
        l
      ]).then(function(a) {
        const p = a[0], f = a[1], d = a[2];
        d !== null && p.traverse(function(_) {
          _.isSkinnedMesh && _.bind(d, t5);
        });
        for (let _ = 0, h = f.length; _ < h; _++) p.add(f[_]);
        return p;
      });
    }
    _loadNodeShallow(e) {
      const t = this.json, n = this.extensions, o = this;
      if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
      const i = t.nodes[e], s = i.name ? o.createUniqueName(i.name) : "", c = [], l = o._invokeOne(function(a) {
        return a.createNodeMesh && a.createNodeMesh(e);
      });
      return l && c.push(l), i.camera !== void 0 && c.push(o.getDependency("camera", i.camera).then(function(a) {
        return o._getNodeRef(o.cameraCache, i.camera, a);
      })), o._invokeAll(function(a) {
        return a.createNodeAttachment && a.createNodeAttachment(e);
      }).forEach(function(a) {
        c.push(a);
      }), this.nodeCache[e] = Promise.all(c).then(function(a) {
        let p;
        if (i.isBone === true ? p = new Of() : a.length > 1 ? p = new m0() : a.length === 1 ? p = a[0] : p = new ni(), p !== a[0]) for (let f = 0, d = a.length; f < d; f++) p.add(a[f]);
        if (i.name && (p.userData.name = i.name, p.name = s), en(p, i), i.extensions && Pn(n, p, i), i.matrix !== void 0) {
          const f = new et();
          f.fromArray(i.matrix), p.applyMatrix4(f);
        } else i.translation !== void 0 && p.position.fromArray(i.translation), i.rotation !== void 0 && p.quaternion.fromArray(i.rotation), i.scale !== void 0 && p.scale.fromArray(i.scale);
        return o.associations.has(p) || o.associations.set(p, {}), o.associations.get(p).nodes = e, p;
      }), this.nodeCache[e];
    }
    loadScene(e) {
      const t = this.extensions, n = this.json.scenes[e], o = this, i = new m0();
      n.name && (i.name = o.createUniqueName(n.name)), en(i, n), n.extensions && Pn(t, i, n);
      const s = n.nodes || [], c = [];
      for (let l = 0, a = s.length; l < a; l++) c.push(o.getDependency("node", s[l]));
      return Promise.all(c).then(function(l) {
        for (let p = 0, f = l.length; p < f; p++) i.add(l[p]);
        const a = (p) => {
          const f = /* @__PURE__ */ new Map();
          for (const [d, _] of o.associations) (d instanceof ds || d instanceof mn) && f.set(d, _);
          return p.traverse((d) => {
            const _ = o.associations.get(d);
            _ != null && f.set(d, _);
          }), f;
        };
        return o.associations = a(i), i;
      });
    }
    _createAnimationTracks(e, t, n, o, i) {
      const s = [], c = e.name ? e.name : e.uuid, l = [];
      dn[i.path] === dn.weights ? e.traverse(function(d) {
        d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
      }) : l.push(c);
      let a;
      switch (dn[i.path]) {
        case dn.weights:
          a = al;
          break;
        case dn.rotation:
          a = cl;
          break;
        case dn.position:
        case dn.scale:
          a = sl;
          break;
        default:
          switch (n.itemSize) {
            case 1:
              a = al;
              break;
            case 2:
            case 3:
            default:
              a = sl;
              break;
          }
          break;
      }
      const p = o.interpolation !== void 0 ? X4[o.interpolation] : H2, f = this._getArrayFromAccessor(n);
      for (let d = 0, _ = l.length; d < _; d++) {
        const h = new a(l[d] + "." + dn[i.path], t.array, f, p);
        o.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(h), s.push(h);
      }
      return s;
    }
    _getArrayFromAccessor(e) {
      let t = e.array;
      if (e.normalized) {
        const n = Ja(t.constructor), o = new Float32Array(t.length);
        for (let i = 0, s = t.length; i < s; i++) o[i] = t[i] * n;
        t = o;
      }
      return t;
    }
    _createCubicSplineTrackInterpolant(e) {
      e.createInterpolant = function(n) {
        const o = this instanceof cl ? Q4 : pd;
        return new o(this.times, this.values, this.getValueSize() / 3, n);
      }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
    }
  }
  function n5(r, e, t) {
    const n = e.attributes, o = new Ao();
    if (n.POSITION !== void 0) {
      const c = t.json.accessors[n.POSITION], l = c.min, a = c.max;
      if (l !== void 0 && a !== void 0) {
        if (o.set(new F(l[0], l[1], l[2]), new F(a[0], a[1], a[2])), c.normalized) {
          const p = Ja(fo[c.componentType]);
          o.min.multiplyScalar(p), o.max.multiplyScalar(p);
        }
      } else {
        console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        return;
      }
    } else return;
    const i = e.targets;
    if (i !== void 0) {
      const c = new F(), l = new F();
      for (let a = 0, p = i.length; a < p; a++) {
        const f = i[a];
        if (f.POSITION !== void 0) {
          const d = t.json.accessors[f.POSITION], _ = d.min, h = d.max;
          if (_ !== void 0 && h !== void 0) {
            if (l.setX(Math.max(Math.abs(_[0]), Math.abs(h[0]))), l.setY(Math.max(Math.abs(_[1]), Math.abs(h[1]))), l.setZ(Math.max(Math.abs(_[2]), Math.abs(h[2]))), d.normalized) {
              const b = Ja(fo[d.componentType]);
              l.multiplyScalar(b);
            }
            c.max(l);
          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
        }
      }
      o.expandByVector(c);
    }
    r.boundingBox = o;
    const s = new _c();
    o.getCenter(s.center), s.radius = o.min.distanceTo(o.max) / 2, r.boundingSphere = s;
  }
  function $l(r, e, t) {
    const n = e.attributes, o = [];
    function i(s, c) {
      return t.getDependency("accessor", s).then(function(l) {
        r.setAttribute(c, l);
      });
    }
    for (const s in n) {
      const c = Wa[s] || s.toLowerCase();
      c in r.attributes || o.push(i(n[s], c));
    }
    if (e.indices !== void 0 && !r.index) {
      const s = t.getDependency("accessor", e.indices).then(function(c) {
        r.setIndex(c);
      });
      o.push(s);
    }
    return en(r, e), n5(r, e, t), Promise.all(o).then(function() {
      return e.targets !== void 0 ? Y4(r, e.targets, t) : r;
    });
  }
  class o5 extends k2 {
    constructor(e) {
      super(e), this.type = hr;
    }
    parse(e) {
      const s = function(M, x) {
        switch (M) {
          case 1:
            throw new Error("THREE.RGBELoader: Read Error: " + (x || ""));
          case 2:
            throw new Error("THREE.RGBELoader: Write Error: " + (x || ""));
          case 3:
            throw new Error("THREE.RGBELoader: Bad File Format: " + (x || ""));
          default:
          case 4:
            throw new Error("THREE.RGBELoader: Memory Error: " + (x || ""));
        }
      }, f = function(M, x, P) {
        x = x || 1024;
        let H = M.pos, k = -1, J = 0, W = "", K = String.fromCharCode.apply(null, new Uint16Array(M.subarray(H, H + 128)));
        for (; 0 > (k = K.indexOf(`
`)) && J < x && H < M.byteLength; ) W += K, J += K.length, H += 128, K += String.fromCharCode.apply(null, new Uint16Array(M.subarray(H, H + 128)));
        return -1 < k ? (M.pos += J + k + 1, W + K.slice(0, k)) : false;
      }, d = function(M) {
        const x = /^#\?(\S+)/, P = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, D = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, H = /^\s*FORMAT=(\S+)\s*$/, k = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, J = {
          valid: 0,
          string: "",
          comments: "",
          programtype: "RGBE",
          format: "",
          gamma: 1,
          exposure: 1,
          width: 0,
          height: 0
        };
        let W, K;
        for ((M.pos >= M.byteLength || !(W = f(M))) && s(1, "no header found"), (K = W.match(x)) || s(3, "bad initial token"), J.valid |= 1, J.programtype = K[1], J.string += W + `
`; W = f(M), W !== false; ) {
          if (J.string += W + `
`, W.charAt(0) === "#") {
            J.comments += W + `
`;
            continue;
          }
          if ((K = W.match(P)) && (J.gamma = parseFloat(K[1])), (K = W.match(D)) && (J.exposure = parseFloat(K[1])), (K = W.match(H)) && (J.valid |= 2, J.format = K[1]), (K = W.match(k)) && (J.valid |= 4, J.height = parseInt(K[1], 10), J.width = parseInt(K[2], 10)), J.valid & 2 && J.valid & 4) break;
        }
        return J.valid & 2 || s(3, "missing format specifier"), J.valid & 4 || s(3, "missing image size specifier"), J;
      }, _ = function(M, x, P) {
        const D = x;
        if (D < 8 || D > 32767 || M[0] !== 2 || M[1] !== 2 || M[2] & 128) return new Uint8Array(M);
        D !== (M[2] << 8 | M[3]) && s(3, "wrong scanline width");
        const H = new Uint8Array(4 * x * P);
        H.length || s(4, "unable to allocate buffer space");
        let k = 0, J = 0;
        const W = 4 * D, K = new Uint8Array(4), Q = new Uint8Array(W);
        let Z = P;
        for (; Z > 0 && J < M.byteLength; ) {
          J + 4 > M.byteLength && s(1), K[0] = M[J++], K[1] = M[J++], K[2] = M[J++], K[3] = M[J++], (K[0] != 2 || K[1] != 2 || (K[2] << 8 | K[3]) != D) && s(3, "bad rgbe scanline format");
          let j = 0, U;
          for (; j < W && J < M.byteLength; ) {
            U = M[J++];
            const oe = U > 128;
            if (oe && (U -= 128), (U === 0 || j + U > W) && s(3, "bad scanline data"), oe) {
              const ue = M[J++];
              for (let we = 0; we < U; we++) Q[j++] = ue;
            } else Q.set(M.subarray(J, J + U), j), j += U, J += U;
          }
          const N = D;
          for (let oe = 0; oe < N; oe++) {
            let ue = 0;
            H[k] = Q[oe + ue], ue += D, H[k + 1] = Q[oe + ue], ue += D, H[k + 2] = Q[oe + ue], ue += D, H[k + 3] = Q[oe + ue], k += 4;
          }
          Z--;
        }
        return H;
      }, h = function(M, x, P, D) {
        const H = M[x + 3], k = Math.pow(2, H - 128) / 255;
        P[D + 0] = M[x + 0] * k, P[D + 1] = M[x + 1] * k, P[D + 2] = M[x + 2] * k, P[D + 3] = 1;
      }, b = function(M, x, P, D) {
        const H = M[x + 3], k = Math.pow(2, H - 128) / 255;
        P[D + 0] = so.toHalfFloat(Math.min(M[x + 0] * k, 65504)), P[D + 1] = so.toHalfFloat(Math.min(M[x + 1] * k, 65504)), P[D + 2] = so.toHalfFloat(Math.min(M[x + 2] * k, 65504)), P[D + 3] = so.toHalfFloat(1);
      }, g = new Uint8Array(e);
      g.pos = 0;
      const y = d(g), A = y.width, C = y.height, S = _(g.subarray(g.pos), A, C);
      let B, T, E;
      switch (this.type) {
        case Nr:
          E = S.length / 4;
          const M = new Float32Array(E * 4);
          for (let P = 0; P < E; P++) h(S, P * 4, M, P * 4);
          B = M, T = Nr;
          break;
        case hr:
          E = S.length / 4;
          const x = new Uint16Array(E * 4);
          for (let P = 0; P < E; P++) b(S, P * 4, x, P * 4);
          B = x, T = hr;
          break;
        default:
          throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
      }
      return {
        width: A,
        height: C,
        data: B,
        header: y.string,
        gamma: y.gamma,
        exposure: y.exposure,
        type: T
      };
    }
    setDataType(e) {
      return this.type = e, this;
    }
    load(e, t, n, o) {
      function i(s, c) {
        switch (s.type) {
          case Nr:
          case hr:
            "colorSpace" in s ? s.colorSpace = "srgb-linear" : s.encoding = 3e3, s.minFilter = Wt, s.magFilter = Wt, s.generateMipmaps = false, s.flipY = true;
            break;
        }
        t && t(s, c);
      }
      return super.load(e, i, n, o);
    }
  }
  const Do = vi >= 152;
  class i5 extends k2 {
    constructor(e) {
      super(e), this.type = hr;
    }
    parse(e) {
      const x = Math.pow(2.7182818, 2.2);
      function P(v, I) {
        for (var O = 0, Y = 0; Y < 65536; ++Y) (Y == 0 || v[Y >> 3] & 1 << (Y & 7)) && (I[O++] = Y);
        for (var ee = O - 1; O < 65536; ) I[O++] = 0;
        return ee;
      }
      function D(v) {
        for (var I = 0; I < 16384; I++) v[I] = {}, v[I].len = 0, v[I].lit = 0, v[I].p = null;
      }
      const H = {
        l: 0,
        c: 0,
        lc: 0
      };
      function k(v, I, O, Y, ee) {
        for (; O < v; ) I = I << 8 | Pi(Y, ee), O += 8;
        O -= v, H.l = I >> O & (1 << v) - 1, H.c = I, H.lc = O;
      }
      const J = new Array(59);
      function W(v) {
        for (var I = 0; I <= 58; ++I) J[I] = 0;
        for (var I = 0; I < 65537; ++I) J[v[I]] += 1;
        for (var O = 0, I = 58; I > 0; --I) {
          var Y = O + J[I] >> 1;
          J[I] = O, O = Y;
        }
        for (var I = 0; I < 65537; ++I) {
          var ee = v[I];
          ee > 0 && (v[I] = ee | J[ee]++ << 6);
        }
      }
      function K(v, I, O, Y, ee, te, pe) {
        for (var de = O, be = 0, ge = 0; ee <= te; ee++) {
          if (de.value - O.value > Y) return false;
          k(6, be, ge, v, de);
          var Ae = H.l;
          if (be = H.c, ge = H.lc, pe[ee] = Ae, Ae == 63) {
            if (de.value - O.value > Y) throw "Something wrong with hufUnpackEncTable";
            k(8, be, ge, v, de);
            var me = H.l + 6;
            if (be = H.c, ge = H.lc, ee + me > te + 1) throw "Something wrong with hufUnpackEncTable";
            for (; me--; ) pe[ee++] = 0;
            ee--;
          } else if (Ae >= 59) {
            var me = Ae - 59 + 2;
            if (ee + me > te + 1) throw "Something wrong with hufUnpackEncTable";
            for (; me--; ) pe[ee++] = 0;
            ee--;
          }
        }
        W(pe);
      }
      function Q(v) {
        return v & 63;
      }
      function Z(v) {
        return v >> 6;
      }
      function j(v, I, O, Y) {
        for (; I <= O; I++) {
          var ee = Z(v[I]), te = Q(v[I]);
          if (ee >> te) throw "Invalid table entry";
          if (te > 14) {
            var pe = Y[ee >> te - 14];
            if (pe.len) throw "Invalid table entry";
            if (pe.lit++, pe.p) {
              var de = pe.p;
              pe.p = new Array(pe.lit);
              for (var be = 0; be < pe.lit - 1; ++be) pe.p[be] = de[be];
            } else pe.p = new Array(1);
            pe.p[pe.lit - 1] = I;
          } else if (te) for (var ge = 0, be = 1 << 14 - te; be > 0; be--) {
            var pe = Y[(ee << 14 - te) + ge];
            if (pe.len || pe.p) throw "Invalid table entry";
            pe.len = te, pe.lit = I, ge++;
          }
        }
        return true;
      }
      const U = {
        c: 0,
        lc: 0
      };
      function N(v, I, O, Y) {
        v = v << 8 | Pi(O, Y), I += 8, U.c = v, U.lc = I;
      }
      const oe = {
        c: 0,
        lc: 0
      };
      function ue(v, I, O, Y, ee, te, pe, de, be, ge) {
        if (v == I) {
          Y < 8 && (N(O, Y, ee, pe), O = U.c, Y = U.lc), Y -= 8;
          var Ae = O >> Y, Ae = new Uint8Array([
            Ae
          ])[0];
          if (be.value + Ae > ge) return false;
          for (var me = de[be.value - 1]; Ae-- > 0; ) de[be.value++] = me;
        } else if (be.value < ge) de[be.value++] = v;
        else return false;
        oe.c = O, oe.lc = Y;
      }
      function we(v) {
        return v & 65535;
      }
      function ve(v) {
        var I = we(v);
        return I > 32767 ? I - 65536 : I;
      }
      const ne = {
        a: 0,
        b: 0
      };
      function Ie(v, I) {
        var O = ve(v), Y = ve(I), ee = Y, te = O + (ee & 1) + (ee >> 1), pe = te, de = te - ee;
        ne.a = pe, ne.b = de;
      }
      function ie(v, I) {
        var O = we(v), Y = we(I), ee = O - (Y >> 1) & 65535, te = Y + ee - 32768 & 65535;
        ne.a = te, ne.b = ee;
      }
      function z(v, I, O, Y, ee, te, pe) {
        for (var de = pe < 16384, be = O > ee ? ee : O, ge = 1, Ae; ge <= be; ) ge <<= 1;
        for (ge >>= 1, Ae = ge, ge >>= 1; ge >= 1; ) {
          for (var me = 0, It = me + te * (ee - Ae), xe = te * ge, Pe = te * Ae, je = Y * ge, ze = Y * Ae, ut, gt, jt, rr; me <= It; me += Pe) {
            for (var wt = me, Dr = me + Y * (O - Ae); wt <= Dr; wt += ze) {
              var Ct = wt + je, Ut = wt + xe, Qr = Ut + je;
              de ? (Ie(v[wt + I], v[Ut + I]), ut = ne.a, jt = ne.b, Ie(v[Ct + I], v[Qr + I]), gt = ne.a, rr = ne.b, Ie(ut, gt), v[wt + I] = ne.a, v[Ct + I] = ne.b, Ie(jt, rr), v[Ut + I] = ne.a, v[Qr + I] = ne.b) : (ie(v[wt + I], v[Ut + I]), ut = ne.a, jt = ne.b, ie(v[Ct + I], v[Qr + I]), gt = ne.a, rr = ne.b, ie(ut, gt), v[wt + I] = ne.a, v[Ct + I] = ne.b, ie(jt, rr), v[Ut + I] = ne.a, v[Qr + I] = ne.b);
            }
            if (O & ge) {
              var Ut = wt + xe;
              de ? Ie(v[wt + I], v[Ut + I]) : ie(v[wt + I], v[Ut + I]), ut = ne.a, v[Ut + I] = ne.b, v[wt + I] = ut;
            }
          }
          if (ee & ge) for (var wt = me, Dr = me + Y * (O - Ae); wt <= Dr; wt += ze) {
            var Ct = wt + je;
            de ? Ie(v[wt + I], v[Ct + I]) : ie(v[wt + I], v[Ct + I]), ut = ne.a, v[Ct + I] = ne.b, v[wt + I] = ut;
          }
          Ae = ge, ge >>= 1;
        }
        return me;
      }
      function $(v, I, O, Y, ee, te, pe, de, be, ge) {
        for (var Ae = 0, me = 0, It = de, xe = Math.trunc(ee.value + (te + 7) / 8); ee.value < xe; ) for (N(Ae, me, O, ee), Ae = U.c, me = U.lc; me >= 14; ) {
          var Pe = Ae >> me - 14 & 16383, je = I[Pe];
          if (je.len) me -= je.len, ue(je.lit, pe, Ae, me, O, Y, ee, be, ge, It), Ae = oe.c, me = oe.lc;
          else {
            if (!je.p) throw "hufDecode issues";
            var ze;
            for (ze = 0; ze < je.lit; ze++) {
              for (var ut = Q(v[je.p[ze]]); me < ut && ee.value < xe; ) N(Ae, me, O, ee), Ae = U.c, me = U.lc;
              if (me >= ut && Z(v[je.p[ze]]) == (Ae >> me - ut & (1 << ut) - 1)) {
                me -= ut, ue(je.p[ze], pe, Ae, me, O, Y, ee, be, ge, It), Ae = oe.c, me = oe.lc;
                break;
              }
            }
            if (ze == je.lit) throw "hufDecode issues";
          }
        }
        var gt = 8 - te & 7;
        for (Ae >>= gt, me -= gt; me > 0; ) {
          var je = I[Ae << 14 - me & 16383];
          if (je.len) me -= je.len, ue(je.lit, pe, Ae, me, O, Y, ee, be, ge, It), Ae = oe.c, me = oe.lc;
          else throw "hufDecode issues";
        }
        return true;
      }
      function re(v, I, O, Y, ee, te) {
        var pe = {
          value: 0
        }, de = O.value, be = Vt(I, O), ge = Vt(I, O);
        O.value += 4;
        var Ae = Vt(I, O);
        if (O.value += 4, be < 0 || be >= 65537 || ge < 0 || ge >= 65537) throw "Something wrong with HUF_ENCSIZE";
        var me = new Array(65537), It = new Array(16384);
        D(It);
        var xe = Y - (O.value - de);
        if (K(v, I, O, xe, be, ge, me), Ae > 8 * (Y - (O.value - de))) throw "Something wrong with hufUncompress";
        j(me, be, ge, It), $(me, It, v, I, O, Ae, ge, te, ee, pe);
      }
      function Me(v, I, O) {
        for (var Y = 0; Y < O; ++Y) I[Y] = v[I[Y]];
      }
      function Ce(v) {
        for (var I = 1; I < v.length; I++) {
          var O = v[I - 1] + v[I] - 128;
          v[I] = O;
        }
      }
      function Ee(v, I) {
        for (var O = 0, Y = Math.floor((v.length + 1) / 2), ee = 0, te = v.length - 1; !(ee > te || (I[ee++] = v[O++], ee > te)); ) I[ee++] = v[Y++];
      }
      function Ge(v) {
        for (var I = v.byteLength, O = new Array(), Y = 0, ee = new DataView(v); I > 0; ) {
          var te = ee.getInt8(Y++);
          if (te < 0) {
            var pe = -te;
            I -= pe + 1;
            for (var de = 0; de < pe; de++) O.push(ee.getUint8(Y++));
          } else {
            var pe = te;
            I -= 2;
            for (var be = ee.getUint8(Y++), de = 0; de < pe + 1; de++) O.push(be);
          }
        }
        return O;
      }
      function Oe(v, I, O, Y, ee, te) {
        var Ct = new DataView(te.buffer), pe = O[v.idx[0]].width, de = O[v.idx[0]].height, be = 3, ge = Math.floor(pe / 8), Ae = Math.ceil(pe / 8), me = Math.ceil(de / 8), It = pe - (Ae - 1) * 8, xe = de - (me - 1) * 8, Pe = {
          value: 0
        }, je = new Array(be), ze = new Array(be), ut = new Array(be), gt = new Array(be), jt = new Array(be);
        for (let dt = 0; dt < be; ++dt) jt[dt] = I[v.idx[dt]], je[dt] = dt < 1 ? 0 : je[dt - 1] + Ae * me, ze[dt] = new Float32Array(64), ut[dt] = new Uint16Array(64), gt[dt] = new Uint16Array(Ae * 64);
        for (let dt = 0; dt < me; ++dt) {
          var rr = 8;
          dt == me - 1 && (rr = xe);
          var wt = 8;
          for (let Mt = 0; Mt < Ae; ++Mt) {
            Mt == Ae - 1 && (wt = It);
            for (let at = 0; at < be; ++at) ut[at].fill(0), ut[at][0] = ee[je[at]++], Ve(Pe, Y, ut[at]), Rt(ut[at], ze[at]), Ke(ze[at]);
            st(ze);
            for (let at = 0; at < be; ++at) Ot(ze[at], gt[at], Mt * 64);
          }
          let Yt = 0;
          for (let Mt = 0; Mt < be; ++Mt) {
            const at = O[v.idx[Mt]].type;
            for (let br = 8 * dt; br < 8 * dt + rr; ++br) {
              Yt = jt[Mt][br];
              for (let Tn = 0; Tn < ge; ++Tn) {
                const dr = Tn * 64 + (br & 7) * 8;
                Ct.setUint16(Yt + 0 * at, gt[Mt][dr + 0], true), Ct.setUint16(Yt + 2 * at, gt[Mt][dr + 1], true), Ct.setUint16(Yt + 4 * at, gt[Mt][dr + 2], true), Ct.setUint16(Yt + 6 * at, gt[Mt][dr + 3], true), Ct.setUint16(Yt + 8 * at, gt[Mt][dr + 4], true), Ct.setUint16(Yt + 10 * at, gt[Mt][dr + 5], true), Ct.setUint16(Yt + 12 * at, gt[Mt][dr + 6], true), Ct.setUint16(Yt + 14 * at, gt[Mt][dr + 7], true), Yt += 16 * at;
              }
            }
            if (ge != Ae) for (let br = 8 * dt; br < 8 * dt + rr; ++br) {
              const Tn = jt[Mt][br] + 8 * ge * 2 * at, dr = ge * 64 + (br & 7) * 8;
              for (let ln = 0; ln < wt; ++ln) Ct.setUint16(Tn + ln * 2 * at, gt[Mt][dr + ln], true);
            }
          }
        }
        for (var Dr = new Uint16Array(pe), Ct = new DataView(te.buffer), Ut = 0; Ut < be; ++Ut) {
          O[v.idx[Ut]].decoded = true;
          var Qr = O[v.idx[Ut]].type;
          if (O[Ut].type == 2) for (var Eo = 0; Eo < de; ++Eo) {
            const dt = jt[Ut][Eo];
            for (var wr = 0; wr < pe; ++wr) Dr[wr] = Ct.getUint16(dt + wr * 2 * Qr, true);
            for (var wr = 0; wr < pe; ++wr) Ct.setFloat32(dt + wr * 2 * Qr, V(Dr[wr]), true);
          }
        }
      }
      function Ve(v, I, O) {
        for (var Y, ee = 1; ee < 64; ) Y = I[v.value], Y == 65280 ? ee = 64 : Y >> 8 == 255 ? ee += Y & 255 : (O[ee] = Y, ee++), v.value++;
      }
      function Rt(v, I) {
        I[0] = V(v[0]), I[1] = V(v[1]), I[2] = V(v[5]), I[3] = V(v[6]), I[4] = V(v[14]), I[5] = V(v[15]), I[6] = V(v[27]), I[7] = V(v[28]), I[8] = V(v[2]), I[9] = V(v[4]), I[10] = V(v[7]), I[11] = V(v[13]), I[12] = V(v[16]), I[13] = V(v[26]), I[14] = V(v[29]), I[15] = V(v[42]), I[16] = V(v[3]), I[17] = V(v[8]), I[18] = V(v[12]), I[19] = V(v[17]), I[20] = V(v[25]), I[21] = V(v[30]), I[22] = V(v[41]), I[23] = V(v[43]), I[24] = V(v[9]), I[25] = V(v[11]), I[26] = V(v[18]), I[27] = V(v[24]), I[28] = V(v[31]), I[29] = V(v[40]), I[30] = V(v[44]), I[31] = V(v[53]), I[32] = V(v[10]), I[33] = V(v[19]), I[34] = V(v[23]), I[35] = V(v[32]), I[36] = V(v[39]), I[37] = V(v[45]), I[38] = V(v[52]), I[39] = V(v[54]), I[40] = V(v[20]), I[41] = V(v[22]), I[42] = V(v[33]), I[43] = V(v[38]), I[44] = V(v[46]), I[45] = V(v[51]), I[46] = V(v[55]), I[47] = V(v[60]), I[48] = V(v[21]), I[49] = V(v[34]), I[50] = V(v[37]), I[51] = V(v[47]), I[52] = V(v[50]), I[53] = V(v[56]), I[54] = V(v[59]), I[55] = V(v[61]), I[56] = V(v[35]), I[57] = V(v[36]), I[58] = V(v[48]), I[59] = V(v[49]), I[60] = V(v[57]), I[61] = V(v[58]), I[62] = V(v[62]), I[63] = V(v[63]);
      }
      function Ke(v) {
        const I = 0.5 * Math.cos(0.7853975), O = 0.5 * Math.cos(3.14159 / 16), Y = 0.5 * Math.cos(3.14159 / 8), ee = 0.5 * Math.cos(3 * 3.14159 / 16), te = 0.5 * Math.cos(5 * 3.14159 / 16), pe = 0.5 * Math.cos(3 * 3.14159 / 8), de = 0.5 * Math.cos(7 * 3.14159 / 16);
        for (var be = new Array(4), ge = new Array(4), Ae = new Array(4), me = new Array(4), It = 0; It < 8; ++It) {
          var xe = It * 8;
          be[0] = Y * v[xe + 2], be[1] = pe * v[xe + 2], be[2] = Y * v[xe + 6], be[3] = pe * v[xe + 6], ge[0] = O * v[xe + 1] + ee * v[xe + 3] + te * v[xe + 5] + de * v[xe + 7], ge[1] = ee * v[xe + 1] - de * v[xe + 3] - O * v[xe + 5] - te * v[xe + 7], ge[2] = te * v[xe + 1] - O * v[xe + 3] + de * v[xe + 5] + ee * v[xe + 7], ge[3] = de * v[xe + 1] - te * v[xe + 3] + ee * v[xe + 5] - O * v[xe + 7], Ae[0] = I * (v[xe + 0] + v[xe + 4]), Ae[3] = I * (v[xe + 0] - v[xe + 4]), Ae[1] = be[0] + be[3], Ae[2] = be[1] - be[2], me[0] = Ae[0] + Ae[1], me[1] = Ae[3] + Ae[2], me[2] = Ae[3] - Ae[2], me[3] = Ae[0] - Ae[1], v[xe + 0] = me[0] + ge[0], v[xe + 1] = me[1] + ge[1], v[xe + 2] = me[2] + ge[2], v[xe + 3] = me[3] + ge[3], v[xe + 4] = me[3] - ge[3], v[xe + 5] = me[2] - ge[2], v[xe + 6] = me[1] - ge[1], v[xe + 7] = me[0] - ge[0];
        }
        for (var Pe = 0; Pe < 8; ++Pe) be[0] = Y * v[16 + Pe], be[1] = pe * v[16 + Pe], be[2] = Y * v[48 + Pe], be[3] = pe * v[48 + Pe], ge[0] = O * v[8 + Pe] + ee * v[24 + Pe] + te * v[40 + Pe] + de * v[56 + Pe], ge[1] = ee * v[8 + Pe] - de * v[24 + Pe] - O * v[40 + Pe] - te * v[56 + Pe], ge[2] = te * v[8 + Pe] - O * v[24 + Pe] + de * v[40 + Pe] + ee * v[56 + Pe], ge[3] = de * v[8 + Pe] - te * v[24 + Pe] + ee * v[40 + Pe] - O * v[56 + Pe], Ae[0] = I * (v[Pe] + v[32 + Pe]), Ae[3] = I * (v[Pe] - v[32 + Pe]), Ae[1] = be[0] + be[3], Ae[2] = be[1] - be[2], me[0] = Ae[0] + Ae[1], me[1] = Ae[3] + Ae[2], me[2] = Ae[3] - Ae[2], me[3] = Ae[0] - Ae[1], v[0 + Pe] = me[0] + ge[0], v[8 + Pe] = me[1] + ge[1], v[16 + Pe] = me[2] + ge[2], v[24 + Pe] = me[3] + ge[3], v[32 + Pe] = me[3] - ge[3], v[40 + Pe] = me[2] - ge[2], v[48 + Pe] = me[1] - ge[1], v[56 + Pe] = me[0] - ge[0];
      }
      function st(v) {
        for (var I = 0; I < 64; ++I) {
          var O = v[0][I], Y = v[1][I], ee = v[2][I];
          v[0][I] = O + 1.5747 * ee, v[1][I] = O - 0.1873 * Y - 0.4682 * ee, v[2][I] = O + 1.8556 * Y;
        }
      }
      function Ot(v, I, O) {
        for (var Y = 0; Y < 64; ++Y) I[O + Y] = so.toHalfFloat(Jt(v[Y]));
      }
      function Jt(v) {
        return v <= 1 ? Math.sign(v) * Math.pow(Math.abs(v), 2.2) : Math.sign(v) * Math.pow(x, Math.abs(v) - 1);
      }
      function tr(v) {
        return new DataView(v.array.buffer, v.offset.value, v.size);
      }
      function Rr(v) {
        var I = v.viewer.buffer.slice(v.offset.value, v.offset.value + v.size), O = new Uint8Array(Ge(I)), Y = new Uint8Array(O.length);
        return Ce(O), Ee(O, Y), new DataView(Y.buffer);
      }
      function Lr(v) {
        var I = v.array.slice(v.offset.value, v.offset.value + v.size), O = Oi(I), Y = new Uint8Array(O.length);
        return Ce(O), Ee(O, Y), new DataView(Y.buffer);
      }
      function an(v) {
        for (var I = v.viewer, O = {
          value: v.offset.value
        }, Y = new Uint16Array(v.width * v.scanlineBlockSize * (v.channels * v.type)), ee = new Uint8Array(8192), te = 0, pe = new Array(v.channels), de = 0; de < v.channels; de++) pe[de] = {}, pe[de].start = te, pe[de].end = pe[de].start, pe[de].nx = v.width, pe[de].ny = v.lines, pe[de].size = v.type, te += pe[de].nx * pe[de].ny * pe[de].size;
        var be = ce(I, O), ge = ce(I, O);
        if (ge >= 8192) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
        if (be <= ge) for (var de = 0; de < ge - be + 1; de++) ee[de + be] = Kr(I, O);
        var Ae = new Uint16Array(65536), me = P(ee, Ae), It = Vt(I, O);
        re(v.array, I, O, It, Y, te);
        for (var de = 0; de < v.channels; ++de) for (var xe = pe[de], Pe = 0; Pe < pe[de].size; ++Pe) z(Y, xe.start + Pe, xe.nx, xe.size, xe.ny, xe.nx * xe.size, me);
        Me(Ae, Y, te);
        for (var je = 0, ze = new Uint8Array(Y.buffer.byteLength), ut = 0; ut < v.lines; ut++) for (var gt = 0; gt < v.channels; gt++) {
          var xe = pe[gt], jt = xe.nx * xe.size, rr = new Uint8Array(Y.buffer, xe.end * 2, jt * 2);
          ze.set(rr, je), je += jt * 2, xe.end += jt;
        }
        return new DataView(ze.buffer);
      }
      function gr(v) {
        var I = v.array.slice(v.offset.value, v.offset.value + v.size), O = Oi(I);
        const Y = v.lines * v.channels * v.width, ee = v.type == 1 ? new Uint16Array(Y) : new Uint32Array(Y);
        let te = 0, pe = 0;
        const de = new Array(4);
        for (let be = 0; be < v.lines; be++) for (let ge = 0; ge < v.channels; ge++) {
          let Ae = 0;
          switch (v.type) {
            case 1:
              de[0] = te, de[1] = de[0] + v.width, te = de[1] + v.width;
              for (let me = 0; me < v.width; ++me) {
                const It = O[de[0]++] << 8 | O[de[1]++];
                Ae += It, ee[pe] = Ae, pe++;
              }
              break;
            case 2:
              de[0] = te, de[1] = de[0] + v.width, de[2] = de[1] + v.width, te = de[2] + v.width;
              for (let me = 0; me < v.width; ++me) {
                const It = O[de[0]++] << 24 | O[de[1]++] << 16 | O[de[2]++] << 8;
                Ae += It, ee[pe] = Ae, pe++;
              }
              break;
          }
        }
        return new DataView(ee.buffer);
      }
      function So(v) {
        var I = v.viewer, O = {
          value: v.offset.value
        }, Y = new Uint8Array(v.width * v.lines * (v.channels * v.type * 2)), ee = {
          version: q(I, O),
          unknownUncompressedSize: q(I, O),
          unknownCompressedSize: q(I, O),
          acCompressedSize: q(I, O),
          dcCompressedSize: q(I, O),
          rleCompressedSize: q(I, O),
          rleUncompressedSize: q(I, O),
          rleRawSize: q(I, O),
          totalAcUncompressedCount: q(I, O),
          totalDcUncompressedCount: q(I, O),
          acCompression: q(I, O)
        };
        if (ee.version < 2) throw "EXRLoader.parse: " + Mo.compression + " version " + ee.version + " is unsupported";
        for (var te = new Array(), pe = ce(I, O) - 2; pe > 0; ) {
          var de = In(I.buffer, O), be = Kr(I, O), ge = be >> 2 & 3, Ae = (be >> 4) - 1, me = new Int8Array([
            Ae
          ])[0], It = Kr(I, O);
          te.push({
            name: de,
            index: me,
            type: It,
            compression: ge
          }), pe -= de.length + 3;
        }
        for (var xe = Mo.channels, Pe = new Array(v.channels), je = 0; je < v.channels; ++je) {
          var ze = Pe[je] = {}, ut = xe[je];
          ze.name = ut.name, ze.compression = 0, ze.decoded = false, ze.type = ut.pixelType, ze.pLinear = ut.pLinear, ze.width = v.width, ze.height = v.lines;
        }
        for (var gt = {
          idx: new Array(3)
        }, jt = 0; jt < v.channels; ++jt) for (var ze = Pe[jt], je = 0; je < te.length; ++je) {
          var rr = te[je];
          ze.name == rr.name && (ze.compression = rr.compression, rr.index >= 0 && (gt.idx[rr.index] = jt), ze.offset = jt);
        }
        if (ee.acCompressedSize > 0) switch (ee.acCompression) {
          case 0:
            var Ct = new Uint16Array(ee.totalAcUncompressedCount);
            re(v.array, I, O, ee.acCompressedSize, Ct, ee.totalAcUncompressedCount);
            break;
          case 1:
            var wt = v.array.slice(O.value, O.value + ee.totalAcUncompressedCount), Dr = Oi(wt), Ct = new Uint16Array(Dr.buffer);
            O.value += ee.totalAcUncompressedCount;
            break;
        }
        if (ee.dcCompressedSize > 0) {
          var Ut = {
            array: v.array,
            offset: O,
            size: ee.dcCompressedSize
          }, Qr = new Uint16Array(Lr(Ut).buffer);
          O.value += ee.dcCompressedSize;
        }
        if (ee.rleRawSize > 0) {
          var wt = v.array.slice(O.value, O.value + ee.rleCompressedSize), Dr = Oi(wt), Eo = Ge(Dr.buffer);
          O.value += ee.rleCompressedSize;
        }
        for (var wr = 0, dt = new Array(Pe.length), je = 0; je < dt.length; ++je) dt[je] = new Array();
        for (var Yt = 0; Yt < v.lines; ++Yt) for (var Mt = 0; Mt < Pe.length; ++Mt) dt[Mt].push(wr), wr += Pe[Mt].width * v.type * 2;
        Oe(gt, dt, Pe, Ct, Qr, Y);
        for (var je = 0; je < Pe.length; ++je) {
          var ze = Pe[je];
          if (!ze.decoded) switch (ze.compression) {
            case 2:
              for (var at = 0, br = 0, Yt = 0; Yt < v.lines; ++Yt) {
                for (var Tn = dt[je][at], dr = 0; dr < ze.width; ++dr) {
                  for (var ln = 0; ln < 2 * ze.type; ++ln) Y[Tn++] = Eo[br + ln * ze.width * ze.height];
                  br++;
                }
                at++;
              }
              break;
            case 1:
            default:
              throw "EXRLoader.parse: unsupported channel compression";
          }
        }
        return new DataView(Y.buffer);
      }
      function In(v, I) {
        for (var O = new Uint8Array(v), Y = 0; O[I.value + Y] != 0; ) Y += 1;
        var ee = new TextDecoder().decode(O.slice(I.value, I.value + Y));
        return I.value = I.value + Y + 1, ee;
      }
      function Ii(v, I, O) {
        var Y = new TextDecoder().decode(new Uint8Array(v).slice(I.value, I.value + O));
        return I.value = I.value + O, Y;
      }
      function Ti(v, I) {
        var O = cn(v, I), Y = Vt(v, I);
        return [
          O,
          Y
        ];
      }
      function xi(v, I) {
        var O = Vt(v, I), Y = Vt(v, I);
        return [
          O,
          Y
        ];
      }
      function cn(v, I) {
        var O = v.getInt32(I.value, true);
        return I.value = I.value + 4, O;
      }
      function Vt(v, I) {
        var O = v.getUint32(I.value, true);
        return I.value = I.value + 4, O;
      }
      function Pi(v, I) {
        var O = v[I.value];
        return I.value = I.value + 1, O;
      }
      function Kr(v, I) {
        var O = v.getUint8(I.value);
        return I.value = I.value + 1, O;
      }
      const q = function(v, I) {
        let O;
        return "getBigInt64" in DataView.prototype ? O = Number(v.getBigInt64(I.value, true)) : O = v.getUint32(I.value + 4, true) + Number(v.getUint32(I.value, true) << 32), I.value += 8, O;
      };
      function Ht(v, I) {
        var O = v.getFloat32(I.value, true);
        return I.value += 4, O;
      }
      function le(v, I) {
        return so.toHalfFloat(Ht(v, I));
      }
      function V(v) {
        var I = (v & 31744) >> 10, O = v & 1023;
        return (v >> 15 ? -1 : 1) * (I ? I === 31 ? O ? NaN : 1 / 0 : Math.pow(2, I - 15) * (1 + O / 1024) : 6103515625e-14 * (O / 1024));
      }
      function ce(v, I) {
        var O = v.getUint16(I.value, true);
        return I.value += 2, O;
      }
      function ye(v, I) {
        return V(ce(v, I));
      }
      function ae(v, I, O, Y) {
        for (var ee = O.value, te = []; O.value < ee + Y - 1; ) {
          var pe = In(I, O), de = cn(v, O), be = Kr(v, O);
          O.value += 3;
          var ge = cn(v, O), Ae = cn(v, O);
          te.push({
            name: pe,
            pixelType: de,
            pLinear: be,
            xSampling: ge,
            ySampling: Ae
          });
        }
        return O.value += 1, te;
      }
      function Re(v, I) {
        var O = Ht(v, I), Y = Ht(v, I), ee = Ht(v, I), te = Ht(v, I), pe = Ht(v, I), de = Ht(v, I), be = Ht(v, I), ge = Ht(v, I);
        return {
          redX: O,
          redY: Y,
          greenX: ee,
          greenY: te,
          blueX: pe,
          blueY: de,
          whiteX: be,
          whiteY: ge
        };
      }
      function Se(v, I) {
        var O = [
          "NO_COMPRESSION",
          "RLE_COMPRESSION",
          "ZIPS_COMPRESSION",
          "ZIP_COMPRESSION",
          "PIZ_COMPRESSION",
          "PXR24_COMPRESSION",
          "B44_COMPRESSION",
          "B44A_COMPRESSION",
          "DWAA_COMPRESSION",
          "DWAB_COMPRESSION"
        ], Y = Kr(v, I);
        return O[Y];
      }
      function nt(v, I) {
        var O = Vt(v, I), Y = Vt(v, I), ee = Vt(v, I), te = Vt(v, I);
        return {
          xMin: O,
          yMin: Y,
          xMax: ee,
          yMax: te
        };
      }
      function cr(v, I) {
        var O = [
          "INCREASING_Y"
        ], Y = Kr(v, I);
        return O[Y];
      }
      function mt(v, I) {
        var O = Ht(v, I), Y = Ht(v, I);
        return [
          O,
          Y
        ];
      }
      function af(v, I) {
        var O = Ht(v, I), Y = Ht(v, I), ee = Ht(v, I);
        return [
          O,
          Y,
          ee
        ];
      }
      function cf(v, I, O, Y, ee) {
        if (Y === "string" || Y === "stringvector" || Y === "iccProfile") return Ii(I, O, ee);
        if (Y === "chlist") return ae(v, I, O, ee);
        if (Y === "chromaticities") return Re(v, O);
        if (Y === "compression") return Se(v, O);
        if (Y === "box2i") return nt(v, O);
        if (Y === "lineOrder") return cr(v, O);
        if (Y === "float") return Ht(v, O);
        if (Y === "v2f") return mt(v, O);
        if (Y === "v3f") return af(v, O);
        if (Y === "int") return cn(v, O);
        if (Y === "rational") return Ti(v, O);
        if (Y === "timecode") return xi(v, O);
        if (Y === "preview") return O.value += ee, "skipped";
        O.value += ee;
      }
      function lf(v, I, O) {
        const Y = {};
        if (v.getUint32(0, true) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
        Y.version = v.getUint8(4);
        const ee = v.getUint8(5);
        Y.spec = {
          singleTile: !!(ee & 2),
          longName: !!(ee & 4),
          deepFormat: !!(ee & 8),
          multiPart: !!(ee & 16)
        }, O.value = 8;
        for (var te = true; te; ) {
          var pe = In(I, O);
          if (pe == 0) te = false;
          else {
            var de = In(I, O), be = Vt(v, O), ge = cf(v, I, O, de, be);
            ge === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${de}'.`) : Y[pe] = ge;
          }
        }
        if ((ee & -5) != 0) throw console.error("EXRHeader:", Y), "THREE.EXRLoader: provided file is currently unsupported.";
        return Y;
      }
      function uf(v, I, O, Y, ee) {
        const te = {
          size: 0,
          viewer: I,
          array: O,
          offset: Y,
          width: v.dataWindow.xMax - v.dataWindow.xMin + 1,
          height: v.dataWindow.yMax - v.dataWindow.yMin + 1,
          channels: v.channels.length,
          bytesPerLine: null,
          lines: null,
          inputSize: null,
          type: v.channels[0].pixelType,
          uncompress: null,
          getter: null,
          format: null,
          [Do ? "colorSpace" : "encoding"]: null
        };
        switch (v.compression) {
          case "NO_COMPRESSION":
            te.lines = 1, te.uncompress = tr;
            break;
          case "RLE_COMPRESSION":
            te.lines = 1, te.uncompress = Rr;
            break;
          case "ZIPS_COMPRESSION":
            te.lines = 1, te.uncompress = Lr;
            break;
          case "ZIP_COMPRESSION":
            te.lines = 16, te.uncompress = Lr;
            break;
          case "PIZ_COMPRESSION":
            te.lines = 32, te.uncompress = an;
            break;
          case "PXR24_COMPRESSION":
            te.lines = 16, te.uncompress = gr;
            break;
          case "DWAA_COMPRESSION":
            te.lines = 32, te.uncompress = So;
            break;
          case "DWAB_COMPRESSION":
            te.lines = 256, te.uncompress = So;
            break;
          default:
            throw "EXRLoader.parse: " + v.compression + " is unsupported";
        }
        if (te.scanlineBlockSize = te.lines, te.type == 1) switch (ee) {
          case Nr:
            te.getter = ye, te.inputSize = 2;
            break;
          case hr:
            te.getter = ce, te.inputSize = 2;
            break;
        }
        else if (te.type == 2) switch (ee) {
          case Nr:
            te.getter = Ht, te.inputSize = 4;
            break;
          case hr:
            te.getter = le, te.inputSize = 4;
        }
        else throw "EXRLoader.parse: unsupported pixelType " + te.type + " for " + v.compression + ".";
        te.blockCount = (v.dataWindow.yMax + 1) / te.scanlineBlockSize;
        for (var pe = 0; pe < te.blockCount; pe++) q(I, Y);
        te.outputChannels = te.channels == 3 ? 4 : te.channels;
        const de = te.width * te.height * te.outputChannels;
        switch (ee) {
          case Nr:
            te.byteArray = new Float32Array(de), te.channels < te.outputChannels && te.byteArray.fill(1, 0, de);
            break;
          case hr:
            te.byteArray = new Uint16Array(de), te.channels < te.outputChannels && te.byteArray.fill(15360, 0, de);
            break;
          default:
            console.error("THREE.EXRLoader: unsupported type: ", ee);
            break;
        }
        return te.bytesPerLine = te.width * te.inputSize * te.channels, te.outputChannels == 4 ? te.format = oi : te.format = j2, Do ? te.colorSpace = "srgb-linear" : te.encoding = 3e3, te;
      }
      const Fi = new DataView(e), df = new Uint8Array(e), Ro = {
        value: 0
      }, Mo = lf(Fi, e, Ro), Xe = uf(Mo, Fi, df, Ro, this.type), il = {
        value: 0
      }, ff = {
        R: 0,
        G: 1,
        B: 2,
        A: 3,
        Y: 0
      };
      for (let v = 0; v < Xe.height / Xe.scanlineBlockSize; v++) {
        const I = Vt(Fi, Ro);
        Xe.size = Vt(Fi, Ro), Xe.lines = I + Xe.scanlineBlockSize > Xe.height ? Xe.height - I : Xe.scanlineBlockSize;
        const Y = Xe.size < Xe.lines * Xe.bytesPerLine ? Xe.uncompress(Xe) : tr(Xe);
        Ro.value += Xe.size;
        for (let ee = 0; ee < Xe.scanlineBlockSize; ee++) {
          const te = ee + v * Xe.scanlineBlockSize;
          if (te >= Xe.height) break;
          for (let pe = 0; pe < Xe.channels; pe++) {
            const de = ff[Mo.channels[pe].name];
            for (let be = 0; be < Xe.width; be++) {
              il.value = (ee * (Xe.channels * Xe.width) + pe * Xe.width + be) * Xe.inputSize;
              const ge = (Xe.height - 1 - te) * (Xe.width * Xe.outputChannels) + be * Xe.outputChannels + de;
              Xe.byteArray[ge] = Xe.getter(Y, il);
            }
          }
        }
      }
      return {
        header: Mo,
        width: Xe.width,
        height: Xe.height,
        data: Xe.byteArray,
        format: Xe.format,
        [Do ? "colorSpace" : "encoding"]: Xe[Do ? "colorSpace" : "encoding"],
        type: this.type
      };
    }
    setDataType(e) {
      return this.type = e, this;
    }
    load(e, t, n, o) {
      function i(s, c) {
        Do ? s.colorSpace = c.colorSpace : s.encoding = c.encoding, s.minFilter = Wt, s.magFilter = Wt, s.generateMipmaps = false, s.flipY = false, t && t(s, c);
      }
      return super.load(e, i, n, o);
    }
  }
  const ys = /* @__PURE__ */ new WeakMap();
  class s5 extends fc {
    constructor(e) {
      super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD"
      }, this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array"
      };
    }
    setDecoderPath(e) {
      return this.decoderPath = e, this;
    }
    setDecoderConfig(e) {
      return this.decoderConfig = e, this;
    }
    setWorkerLimit(e) {
      return this.workerLimit = e, this;
    }
    load(e, t, n, o) {
      const i = new yn(this.manager);
      i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(e, (s) => {
        const c = {
          attributeIDs: this.defaultAttributeIDs,
          attributeTypes: this.defaultAttributeTypes,
          useUniqueIDs: false
        };
        this.decodeGeometry(s, c).then(t).catch(o);
      }, n, o);
    }
    decodeDracoFile(e, t, n, o) {
      const i = {
        attributeIDs: n || this.defaultAttributeIDs,
        attributeTypes: o || this.defaultAttributeTypes,
        useUniqueIDs: !!n
      };
      this.decodeGeometry(e, i).then(t);
    }
    decodeGeometry(e, t) {
      for (const l in t.attributeTypes) {
        const a = t.attributeTypes[l];
        a.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = a.name);
      }
      const n = JSON.stringify(t);
      if (ys.has(e)) {
        const l = ys.get(e);
        if (l.key === n) return l.promise;
        if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
      let o;
      const i = this.workerNextTaskID++, s = e.byteLength, c = this._getWorker(i, s).then((l) => (o = l, new Promise((a, p) => {
        o._callbacks[i] = {
          resolve: a,
          reject: p
        }, o.postMessage({
          type: "decode",
          id: i,
          taskConfig: t,
          buffer: e
        }, [
          e
        ]);
      }))).then((l) => this._createGeometry(l.geometry));
      return c.catch(() => true).then(() => {
        o && i && this._releaseTask(o, i);
      }), ys.set(e, {
        key: n,
        promise: c
      }), c;
    }
    _createGeometry(e) {
      const t = new Nn();
      e.index && t.setIndex(new ht(e.index.array, 1));
      for (let n = 0; n < e.attributes.length; n++) {
        const o = e.attributes[n], i = o.name, s = o.array, c = o.itemSize;
        t.setAttribute(i, new ht(s, c));
      }
      return t;
    }
    _loadLibrary(e, t) {
      const n = new yn(this.manager);
      return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((o, i) => {
        n.load(e, o, void 0, i);
      });
    }
    preload() {
      return this._initDecoder(), this;
    }
    _initDecoder() {
      if (this.decoderPending) return this.decoderPending;
      const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
      return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((n) => {
        const o = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const i = a5.toString(), s = [
          "/* draco decoder */",
          o,
          "",
          "/* worker */",
          i.substring(i.indexOf("{") + 1, i.lastIndexOf("}"))
        ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([
          s
        ]));
      }), this.decoderPending;
    }
    _getWorker(e, t) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          const o = new Worker(this.workerSourceURL);
          o._callbacks = {}, o._taskCosts = {}, o._taskLoad = 0, o.postMessage({
            type: "init",
            decoderConfig: this.decoderConfig
          }), o.onmessage = function(i) {
            const s = i.data;
            switch (s.type) {
              case "decode":
                o._callbacks[s.id].resolve(s);
                break;
              case "error":
                o._callbacks[s.id].reject(s);
                break;
              default:
                console.error('THREE.DRACOLoader: Unexpected message, "' + s.type + '"');
            }
          }, this.workerPool.push(o);
        } else this.workerPool.sort(function(o, i) {
          return o._taskLoad > i._taskLoad ? -1 : 1;
        });
        const n = this.workerPool[this.workerPool.length - 1];
        return n._taskCosts[e] = t, n._taskLoad += t, n;
      });
    }
    _releaseTask(e, t) {
      e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
    }
    debug() {
      console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
    }
    dispose() {
      for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
      return this.workerPool.length = 0, this;
    }
  }
  function a5() {
    let r, e;
    onmessage = function(s) {
      const c = s.data;
      switch (c.type) {
        case "init":
          r = c.decoderConfig, e = new Promise(function(p) {
            r.onModuleLoaded = function(f) {
              p({
                draco: f
              });
            }, DracoDecoderModule(r);
          });
          break;
        case "decode":
          const l = c.buffer, a = c.taskConfig;
          e.then((p) => {
            const f = p.draco, d = new f.Decoder(), _ = new f.DecoderBuffer();
            _.Init(new Int8Array(l), l.byteLength);
            try {
              const h = t(f, d, _, a), b = h.attributes.map((g) => g.array.buffer);
              h.index && b.push(h.index.array.buffer), self.postMessage({
                type: "decode",
                id: c.id,
                geometry: h
              }, b);
            } catch (h) {
              console.error(h), self.postMessage({
                type: "error",
                id: c.id,
                error: h.message
              });
            } finally {
              f.destroy(_), f.destroy(d);
            }
          });
          break;
      }
    };
    function t(s, c, l, a) {
      const p = a.attributeIDs, f = a.attributeTypes;
      let d, _;
      const h = c.GetEncodedGeometryType(l);
      if (h === s.TRIANGULAR_MESH) d = new s.Mesh(), _ = c.DecodeBufferToMesh(l, d);
      else if (h === s.POINT_CLOUD) d = new s.PointCloud(), _ = c.DecodeBufferToPointCloud(l, d);
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!_.ok() || d.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + _.error_msg());
      const b = {
        index: null,
        attributes: []
      };
      for (const g in p) {
        const y = self[f[g]];
        let A, C;
        if (a.useUniqueIDs) C = p[g], A = c.GetAttributeByUniqueId(d, C);
        else {
          if (C = c.GetAttributeId(d, s[p[g]]), C === -1) continue;
          A = c.GetAttribute(d, C);
        }
        b.attributes.push(o(s, c, d, g, y, A));
      }
      return h === s.TRIANGULAR_MESH && (b.index = n(s, c, d)), s.destroy(d), b;
    }
    function n(s, c, l) {
      const p = l.num_faces() * 3, f = p * 4, d = s._malloc(f);
      c.GetTrianglesUInt32Array(l, f, d);
      const _ = new Uint32Array(s.HEAPF32.buffer, d, p).slice();
      return s._free(d), {
        array: _,
        itemSize: 1
      };
    }
    function o(s, c, l, a, p, f) {
      const d = f.num_components(), h = l.num_points() * d, b = h * p.BYTES_PER_ELEMENT, g = i(s, p), y = s._malloc(b);
      c.GetAttributeDataArrayForAllPoints(l, f, g, b, y);
      const A = new p(s.HEAPF32.buffer, y, h).slice();
      return s._free(y), {
        name: a,
        array: A,
        itemSize: d
      };
    }
    function i(s, c) {
      switch (c) {
        case Float32Array:
          return s.DT_FLOAT32;
        case Int8Array:
          return s.DT_INT8;
        case Int16Array:
          return s.DT_INT16;
        case Int32Array:
          return s.DT_INT32;
        case Uint8Array:
          return s.DT_UINT8;
        case Uint16Array:
          return s.DT_UINT16;
        case Uint32Array:
          return s.DT_UINT32;
      }
    }
  }
  const eu = new Ao(), Hi = new F();
  class Ac extends U2 {
    constructor() {
      super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
      const e = [
        -1,
        2,
        0,
        1,
        2,
        0,
        -1,
        1,
        0,
        1,
        1,
        0,
        -1,
        0,
        0,
        1,
        0,
        0,
        -1,
        -1,
        0,
        1,
        -1,
        0
      ], t = [
        -1,
        2,
        1,
        2,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        -1,
        -2,
        1,
        -2
      ], n = [
        0,
        2,
        1,
        2,
        3,
        1,
        2,
        4,
        3,
        4,
        5,
        3,
        4,
        6,
        5,
        6,
        7,
        5
      ];
      this.setIndex(n), this.setAttribute("position", new Ga(e, 3)), this.setAttribute("uv", new Ga(t, 2));
    }
    applyMatrix4(e) {
      const t = this.attributes.instanceStart, n = this.attributes.instanceEnd;
      return t !== void 0 && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    setPositions(e) {
      let t;
      e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
      const n = new Cn(t, 6, 1);
      return this.setAttribute("instanceStart", new rt(n, 3, 0)), this.setAttribute("instanceEnd", new rt(n, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
    }
    setColors(e, t = 3) {
      let n;
      e instanceof Float32Array ? n = e : Array.isArray(e) && (n = new Float32Array(e));
      const o = new Cn(n, t * 2, 1);
      return this.setAttribute("instanceColorStart", new rt(o, t, 0)), this.setAttribute("instanceColorEnd", new rt(o, t, t)), this;
    }
    fromWireframeGeometry(e) {
      return this.setPositions(e.attributes.position.array), this;
    }
    fromEdgesGeometry(e) {
      return this.setPositions(e.attributes.position.array), this;
    }
    fromMesh(e) {
      return this.fromWireframeGeometry(new jf(e.geometry)), this;
    }
    fromLineSegments(e) {
      const t = e.geometry;
      return this.setPositions(t.attributes.position.array), this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new Ao());
      const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
      e !== void 0 && t !== void 0 && (this.boundingBox.setFromBufferAttribute(e), eu.setFromBufferAttribute(t), this.boundingBox.union(eu));
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new _c()), this.boundingBox === null && this.computeBoundingBox();
      const e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
      if (e !== void 0 && t !== void 0) {
        const n = this.boundingSphere.center;
        this.boundingBox.getCenter(n);
        let o = 0;
        for (let i = 0, s = e.count; i < s; i++) Hi.fromBufferAttribute(e, i), o = Math.max(o, n.distanceToSquared(Hi)), Hi.fromBufferAttribute(t, i), o = Math.max(o, n.distanceToSquared(Hi));
        this.boundingSphere.radius = Math.sqrt(o), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
      }
    }
    toJSON() {
    }
    applyMatrix(e) {
      return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e);
    }
  }
  class _d extends Ac {
    constructor() {
      super(), this.isLineGeometry = true, this.type = "LineGeometry";
    }
    setPositions(e) {
      const t = e.length - 3, n = new Float32Array(2 * t);
      for (let o = 0; o < t; o += 3) n[2 * o] = e[o], n[2 * o + 1] = e[o + 1], n[2 * o + 2] = e[o + 2], n[2 * o + 3] = e[o + 3], n[2 * o + 4] = e[o + 4], n[2 * o + 5] = e[o + 5];
      return super.setPositions(n), this;
    }
    setColors(e, t = 3) {
      const n = e.length - t, o = new Float32Array(2 * n);
      if (t === 3) for (let i = 0; i < n; i += t) o[2 * i] = e[i], o[2 * i + 1] = e[i + 1], o[2 * i + 2] = e[i + 2], o[2 * i + 3] = e[i + 3], o[2 * i + 4] = e[i + 4], o[2 * i + 5] = e[i + 5];
      else for (let i = 0; i < n; i += t) o[2 * i] = e[i], o[2 * i + 1] = e[i + 1], o[2 * i + 2] = e[i + 2], o[2 * i + 3] = e[i + 3], o[2 * i + 4] = e[i + 4], o[2 * i + 5] = e[i + 5], o[2 * i + 6] = e[i + 6], o[2 * i + 7] = e[i + 7];
      return super.setColors(o, t), this;
    }
    fromLine(e) {
      const t = e.geometry;
      return this.setPositions(t.attributes.position.array), this;
    }
  }
  class vc extends sr {
    constructor(e) {
      super({
        type: "LineMaterial",
        uniforms: ll.clone(ll.merge([
          ul.common,
          ul.fog,
          {
            worldUnits: {
              value: 1
            },
            linewidth: {
              value: 1
            },
            resolution: {
              value: new Pr(1, 1)
            },
            dashOffset: {
              value: 0
            },
            dashScale: {
              value: 1
            },
            dashSize: {
              value: 1
            },
            gapSize: {
              value: 1
            }
          }
        ])),
        vertexShader: `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,
        fragmentShader: `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${vi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,
        clipping: true
      }), this.isLineMaterial = true, this.onBeforeCompile = function() {
        this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
      }, Object.defineProperties(this, {
        color: {
          enumerable: true,
          get: function() {
            return this.uniforms.diffuse.value;
          },
          set: function(t) {
            this.uniforms.diffuse.value = t;
          }
        },
        worldUnits: {
          enumerable: true,
          get: function() {
            return "WORLD_UNITS" in this.defines;
          },
          set: function(t) {
            t === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
          }
        },
        linewidth: {
          enumerable: true,
          get: function() {
            return this.uniforms.linewidth.value;
          },
          set: function(t) {
            this.uniforms.linewidth.value = t;
          }
        },
        dashed: {
          enumerable: true,
          get: function() {
            return "USE_DASH" in this.defines;
          },
          set(t) {
            !!t != "USE_DASH" in this.defines && (this.needsUpdate = true), t === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
          }
        },
        dashScale: {
          enumerable: true,
          get: function() {
            return this.uniforms.dashScale.value;
          },
          set: function(t) {
            this.uniforms.dashScale.value = t;
          }
        },
        dashSize: {
          enumerable: true,
          get: function() {
            return this.uniforms.dashSize.value;
          },
          set: function(t) {
            this.uniforms.dashSize.value = t;
          }
        },
        dashOffset: {
          enumerable: true,
          get: function() {
            return this.uniforms.dashOffset.value;
          },
          set: function(t) {
            this.uniforms.dashOffset.value = t;
          }
        },
        gapSize: {
          enumerable: true,
          get: function() {
            return this.uniforms.gapSize.value;
          },
          set: function(t) {
            this.uniforms.gapSize.value = t;
          }
        },
        opacity: {
          enumerable: true,
          get: function() {
            return this.uniforms.opacity.value;
          },
          set: function(t) {
            this.uniforms.opacity.value = t;
          }
        },
        resolution: {
          enumerable: true,
          get: function() {
            return this.uniforms.resolution.value;
          },
          set: function(t) {
            this.uniforms.resolution.value.copy(t);
          }
        },
        alphaToCoverage: {
          enumerable: true,
          get: function() {
            return "USE_ALPHA_TO_COVERAGE" in this.defines;
          },
          set: function(t) {
            !!t != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = true), t === true ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = true) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = false);
          }
        }
      }), this.setValues(e);
    }
  }
  const As = new Jr(), tu = new F(), ru = new F(), Kt = new Jr(), Qt = new Jr(), Gr = new Jr(), vs = new F(), Cs = new et(), Xt = new Uf(), nu = new F(), ki = new Ao(), ji = new _c(), Or = new Jr();
  let Ur, On;
  function ou(r, e, t) {
    return Or.set(0, 0, -e, 1).applyMatrix4(r.projectionMatrix), Or.multiplyScalar(1 / Or.w), Or.x = On / t.width, Or.y = On / t.height, Or.applyMatrix4(r.projectionMatrixInverse), Or.multiplyScalar(1 / Or.w), Math.abs(Math.max(Or.x, Or.y));
  }
  function c5(r, e) {
    const t = r.matrixWorld, n = r.geometry, o = n.attributes.instanceStart, i = n.attributes.instanceEnd, s = Math.min(n.instanceCount, o.count);
    for (let c = 0, l = s; c < l; c++) {
      Xt.start.fromBufferAttribute(o, c), Xt.end.fromBufferAttribute(i, c), Xt.applyMatrix4(t);
      const a = new F(), p = new F();
      Ur.distanceSqToSegment(Xt.start, Xt.end, p, a), p.distanceTo(a) < On * 0.5 && e.push({
        point: p,
        pointOnLine: a,
        distance: Ur.origin.distanceTo(p),
        object: r,
        face: null,
        faceIndex: c,
        uv: null,
        [id]: null
      });
    }
  }
  function l5(r, e, t) {
    const n = e.projectionMatrix, i = r.material.resolution, s = r.matrixWorld, c = r.geometry, l = c.attributes.instanceStart, a = c.attributes.instanceEnd, p = Math.min(c.instanceCount, l.count), f = -e.near;
    Ur.at(1, Gr), Gr.w = 1, Gr.applyMatrix4(e.matrixWorldInverse), Gr.applyMatrix4(n), Gr.multiplyScalar(1 / Gr.w), Gr.x *= i.x / 2, Gr.y *= i.y / 2, Gr.z = 0, vs.copy(Gr), Cs.multiplyMatrices(e.matrixWorldInverse, s);
    for (let d = 0, _ = p; d < _; d++) {
      if (Kt.fromBufferAttribute(l, d), Qt.fromBufferAttribute(a, d), Kt.w = 1, Qt.w = 1, Kt.applyMatrix4(Cs), Qt.applyMatrix4(Cs), Kt.z > f && Qt.z > f) continue;
      if (Kt.z > f) {
        const C = Kt.z - Qt.z, S = (Kt.z - f) / C;
        Kt.lerp(Qt, S);
      } else if (Qt.z > f) {
        const C = Qt.z - Kt.z, S = (Qt.z - f) / C;
        Qt.lerp(Kt, S);
      }
      Kt.applyMatrix4(n), Qt.applyMatrix4(n), Kt.multiplyScalar(1 / Kt.w), Qt.multiplyScalar(1 / Qt.w), Kt.x *= i.x / 2, Kt.y *= i.y / 2, Qt.x *= i.x / 2, Qt.y *= i.y / 2, Xt.start.copy(Kt), Xt.start.z = 0, Xt.end.copy(Qt), Xt.end.z = 0;
      const b = Xt.closestPointToPointParameter(vs, true);
      Xt.at(b, nu);
      const g = j0.lerp(Kt.z, Qt.z, b), y = g >= -1 && g <= 1, A = vs.distanceTo(nu) < On * 0.5;
      if (y && A) {
        Xt.start.fromBufferAttribute(l, d), Xt.end.fromBufferAttribute(a, d), Xt.start.applyMatrix4(s), Xt.end.applyMatrix4(s);
        const C = new F(), S = new F();
        Ur.distanceSqToSegment(Xt.start, Xt.end, S, C), t.push({
          point: S,
          pointOnLine: C,
          distance: Ur.origin.distanceTo(S),
          object: r,
          face: null,
          faceIndex: d,
          uv: null,
          [id]: null
        });
      }
    }
  }
  class hd extends ir {
    constructor(e = new Ac(), t = new vc({
      color: Math.random() * 16777215
    })) {
      super(e, t), this.isLineSegments2 = true, this.type = "LineSegments2";
    }
    computeLineDistances() {
      const e = this.geometry, t = e.attributes.instanceStart, n = e.attributes.instanceEnd, o = new Float32Array(2 * t.count);
      for (let s = 0, c = 0, l = t.count; s < l; s++, c += 2) tu.fromBufferAttribute(t, s), ru.fromBufferAttribute(n, s), o[c] = c === 0 ? 0 : o[c - 1], o[c + 1] = o[c] + tu.distanceTo(ru);
      const i = new Cn(o, 2, 1);
      return e.setAttribute("instanceDistanceStart", new rt(i, 1, 0)), e.setAttribute("instanceDistanceEnd", new rt(i, 1, 1)), this;
    }
    raycast(e, t) {
      const n = this.material.worldUnits, o = e.camera;
      o === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
      const i = e.params.Line2 !== void 0 && e.params.Line2.threshold || 0;
      Ur = e.ray;
      const s = this.matrixWorld, c = this.geometry, l = this.material;
      On = l.linewidth + i, c.boundingSphere === null && c.computeBoundingSphere(), ji.copy(c.boundingSphere).applyMatrix4(s);
      let a;
      if (n) a = On * 0.5;
      else {
        const f = Math.max(o.near, ji.distanceToPoint(Ur.origin));
        a = ou(o, f, l.resolution);
      }
      if (ji.radius += a, Ur.intersectsSphere(ji) === false) return;
      c.boundingBox === null && c.computeBoundingBox(), ki.copy(c.boundingBox).applyMatrix4(s);
      let p;
      if (n) p = On * 0.5;
      else {
        const f = Math.max(o.near, ki.distanceToPoint(Ur.origin));
        p = ou(o, f, l.resolution);
      }
      ki.expandByScalar(p), Ur.intersectsBox(ki) !== false && (n ? c5(this, t) : l5(this, o, t));
    }
    onBeforeRender(e) {
      const t = this.material.uniforms;
      t && t.resolution && (e.getViewport(As), this.material.uniforms.resolution.value.set(As.z, As.w));
    }
  }
  class u5 extends hd {
    constructor(e = new _d(), t = new vc({
      color: Math.random() * 16777215
    })) {
      super(e, t), this.isLine2 = true, this.type = "Line2";
    }
  }
  let Ui;
  const Ss = () => {
    if (Ui) return Ui;
    const r = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB", e = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB", t = new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      4,
      1,
      96,
      0,
      0,
      3,
      3,
      2,
      0,
      0,
      5,
      3,
      1,
      0,
      1,
      12,
      1,
      0,
      10,
      22,
      2,
      12,
      0,
      65,
      0,
      65,
      0,
      65,
      0,
      252,
      10,
      0,
      0,
      11,
      7,
      0,
      65,
      0,
      253,
      15,
      26,
      11
    ]), n = new Uint8Array([
      32,
      0,
      65,
      253,
      3,
      1,
      2,
      34,
      4,
      106,
      6,
      5,
      11,
      8,
      7,
      20,
      13,
      33,
      12,
      16,
      128,
      9,
      116,
      64,
      19,
      113,
      127,
      15,
      10,
      21,
      22,
      14,
      255,
      66,
      24,
      54,
      136,
      107,
      18,
      23,
      192,
      26,
      114,
      118,
      132,
      17,
      77,
      101,
      130,
      144,
      27,
      87,
      131,
      44,
      45,
      74,
      156,
      154,
      70,
      167
    ]);
    if (typeof WebAssembly != "object") return {
      supported: false
    };
    let o = r;
    WebAssembly.validate(t) && (o = e);
    let i;
    const s = WebAssembly.instantiate(c(o), {}).then((f) => {
      i = f.instance, i.exports.__wasm_call_ctors();
    });
    function c(f) {
      const d = new Uint8Array(f.length);
      for (let h = 0; h < f.length; ++h) {
        const b = f.charCodeAt(h);
        d[h] = b > 96 ? b - 71 : b > 64 ? b - 65 : b > 47 ? b + 4 : b > 46 ? 63 : 62;
      }
      let _ = 0;
      for (let h = 0; h < f.length; ++h) d[_++] = d[h] < 60 ? n[d[h]] : (d[h] - 60) * 64 + d[++h];
      return d.buffer.slice(0, _);
    }
    function l(f, d, _, h, b, g) {
      const y = i.exports.sbrk, A = _ + 3 & -4, C = y(A * h), S = y(b.length), B = new Uint8Array(i.exports.memory.buffer);
      B.set(b, S);
      const T = f(C, _, h, S, b.length);
      if (T === 0 && g && g(C, A, h), d.set(B.subarray(C, C + _ * h)), y(C - y(0)), T !== 0) throw new Error(`Malformed buffer data: ${T}`);
    }
    const a = {
      0: "",
      1: "meshopt_decodeFilterOct",
      2: "meshopt_decodeFilterQuat",
      3: "meshopt_decodeFilterExp",
      NONE: "",
      OCTAHEDRAL: "meshopt_decodeFilterOct",
      QUATERNION: "meshopt_decodeFilterQuat",
      EXPONENTIAL: "meshopt_decodeFilterExp"
    }, p = {
      0: "meshopt_decodeVertexBuffer",
      1: "meshopt_decodeIndexBuffer",
      2: "meshopt_decodeIndexSequence",
      ATTRIBUTES: "meshopt_decodeVertexBuffer",
      TRIANGLES: "meshopt_decodeIndexBuffer",
      INDICES: "meshopt_decodeIndexSequence"
    };
    return Ui = {
      ready: s,
      supported: true,
      decodeVertexBuffer(f, d, _, h, b) {
        l(i.exports.meshopt_decodeVertexBuffer, f, d, _, h, i.exports[a[b]]);
      },
      decodeIndexBuffer(f, d, _, h) {
        l(i.exports.meshopt_decodeIndexBuffer, f, d, _, h);
      },
      decodeIndexSequence(f, d, _, h) {
        l(i.exports.meshopt_decodeIndexSequence, f, d, _, h);
      },
      decodeGltfBuffer(f, d, _, h, b, g) {
        l(i.exports[p[b]], f, d, _, h, i.exports[a[g]]);
      }
    }, Ui;
  }, d5 = new F(), f5 = new F(), p5 = new F(), _5 = (r, e, t) => {
    const n = t.width / 2, o = t.height / 2;
    e.updateMatrixWorld(false);
    const i = r.project(e);
    return i.x = i.x * n + n, i.y = -(i.y * o) + o, i;
  }, h5 = (r, e, t, n = 1) => {
    const o = d5.set(r.x / t.width * 2 - 1, -(r.y / t.height) * 2 + 1, n);
    return o.unproject(e), o;
  }, md = (r, e, t, n) => {
    const o = _5(p5.copy(r), t, n);
    let i = 0;
    for (let s = 0; s < 2; ++s) {
      const c = f5.copy(o).setComponent(s, o.getComponent(s) + e), l = h5(c, t, n, c.z);
      i = Math.max(i, r.distanceTo(l));
    }
    return i;
  }, I0 = u.forwardRef(function({ points: e, color: t = 16777215, vertexColors: n, linewidth: o, lineWidth: i, segments: s, dashed: c, ...l }, a) {
    var p, f;
    const d = Ue((y) => y.size), _ = u.useMemo(() => s ? new hd() : new u5(), [
      s
    ]), [h] = u.useState(() => new vc()), b = (n == null || (p = n[0]) == null ? void 0 : p.length) === 4 ? 4 : 3, g = u.useMemo(() => {
      const y = s ? new Ac() : new _d(), A = e.map((C) => {
        const S = Array.isArray(C);
        return C instanceof F || C instanceof Jr ? [
          C.x,
          C.y,
          C.z
        ] : C instanceof Pr ? [
          C.x,
          C.y,
          0
        ] : S && C.length === 3 ? [
          C[0],
          C[1],
          C[2]
        ] : S && C.length === 2 ? [
          C[0],
          C[1],
          0
        ] : C;
      });
      if (y.setPositions(A.flat()), n) {
        t = 16777215;
        const C = n.map((S) => S instanceof Ye ? S.toArray() : S);
        y.setColors(C.flat(), b);
      }
      return y;
    }, [
      e,
      s,
      n,
      b
    ]);
    return u.useLayoutEffect(() => {
      _.computeLineDistances();
    }, [
      e,
      _
    ]), u.useLayoutEffect(() => {
      c ? h.defines.USE_DASH = "" : delete h.defines.USE_DASH, h.needsUpdate = true;
    }, [
      c,
      h
    ]), u.useEffect(() => () => {
      g.dispose(), h.dispose();
    }, [
      g
    ]), u.createElement("primitive", vn({
      object: _,
      ref: a
    }, l), u.createElement("primitive", {
      object: g,
      attach: "geometry"
    }), u.createElement("primitive", vn({
      object: h,
      attach: "material",
      color: t,
      vertexColors: !!n,
      resolution: [
        d.width,
        d.height
      ],
      linewidth: (f = o ?? i) !== null && f !== void 0 ? f : 1,
      dashed: c,
      transparent: b === 4
    }, l)));
  });
  let Ni = null, gd = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
  function wd(r = true, e = true, t) {
    return (n) => {
      t && t(n), r && (Ni || (Ni = new s5()), Ni.setDecoderPath(typeof r == "string" ? r : gd), n.setDRACOLoader(Ni)), e && n.setMeshoptDecoder(typeof Ss == "function" ? Ss() : Ss);
    };
  }
  zn = (r, e, t, n) => Sn(yc, r, wd(e, t, n));
  zn.preload = (r, e, t, n) => Sn.preload(yc, r, wd(e, t, n));
  zn.clear = (r) => Sn.clear(yc, r);
  zn.setDecoderPath = (r) => {
    gd = r;
  };
  function bd(r, e, t) {
    const n = Ue((_) => _.size), o = Ue((_) => _.viewport), i = typeof r == "number" ? r : n.width * o.dpr, s = typeof e == "number" ? e : n.height * o.dpr, c = (typeof r == "number" ? t : r) || {}, { samples: l = 0, depth: a, ...p } = c, f = a ?? c.depthBuffer, d = u.useMemo(() => {
      const _ = new U0(i, s, {
        minFilter: Wt,
        magFilter: Wt,
        type: hr,
        ...p
      });
      return f && (_.depthTexture = new Nf(i, s, Nr)), _.samples = l, _;
    }, []);
    return u.useLayoutEffect(() => {
      d.setSize(i, s), l && (d.samples = l);
    }, [
      l,
      d,
      i,
      s
    ]), u.useEffect(() => () => d.dispose(), []), d;
  }
  const m5 = (r) => typeof r == "function", g5 = u.forwardRef(({ envMap: r, resolution: e = 256, frames: t = 1 / 0, children: n, makeDefault: o, ...i }, s) => {
    const c = Ue(({ set: g }) => g), l = Ue(({ camera: g }) => g), a = Ue(({ size: g }) => g), p = u.useRef(null);
    u.useImperativeHandle(s, () => p.current, []);
    const f = u.useRef(null), d = bd(e);
    u.useLayoutEffect(() => {
      i.manual || p.current.updateProjectionMatrix();
    }, [
      a,
      i
    ]), u.useLayoutEffect(() => {
      p.current.updateProjectionMatrix();
    }), u.useLayoutEffect(() => {
      if (o) {
        const g = l;
        return c(() => ({
          camera: p.current
        })), () => c(() => ({
          camera: g
        }));
      }
    }, [
      p,
      o,
      c
    ]);
    let _ = 0, h = null;
    const b = m5(n);
    return it((g) => {
      b && (t === 1 / 0 || _ < t) && (f.current.visible = false, g.gl.setRenderTarget(d), h = g.scene.background, r && (g.scene.background = r), g.gl.render(g.scene, p.current), g.scene.background = h, g.gl.setRenderTarget(null), f.current.visible = true, _++);
    }), u.createElement(u.Fragment, null, u.createElement("orthographicCamera", vn({
      left: a.width / -2,
      right: a.width / 2,
      top: a.height / 2,
      bottom: a.height / -2,
      ref: p
    }, i), !b && n), u.createElement("group", {
      ref: f
    }, b && n(d.texture)));
  }), yd = (r, e, t) => {
    let n;
    switch (r) {
      case C0:
        n = new Uint8ClampedArray(e * t * 4);
        break;
      case hr:
        n = new Uint16Array(e * t * 4);
        break;
      case Qf:
        n = new Uint32Array(e * t * 4);
        break;
      case Kf:
        n = new Int8Array(e * t * 4);
        break;
      case Vf:
        n = new Int16Array(e * t * 4);
        break;
      case Jf:
        n = new Int32Array(e * t * 4);
        break;
      case Nr:
        n = new Float32Array(e * t * 4);
        break;
      default:
        throw new Error("Unsupported data type");
    }
    return n;
  };
  let zi;
  const w5 = (r, e, t, n) => {
    if (zi !== void 0) return zi;
    const o = new U0(1, 1, n);
    e.setRenderTarget(o);
    const i = new ir(new vo(), new _t({
      color: 16777215
    }));
    e.render(i, t), e.setRenderTarget(null);
    const s = yd(r, o.width, o.height);
    return e.readRenderTargetPixels(o, 0, 0, o.width, o.height, s), o.dispose(), i.geometry.dispose(), i.material.dispose(), zi = s[0] !== 0, zi;
  };
  class Cc {
    constructor(e) {
      var t, n, o, i, s, c, l, a, p, f, d, _, h, b, g, y;
      this._rendererIsDisposable = false, this._supportsReadPixels = true, this.render = () => {
        this._renderer.setRenderTarget(this._renderTarget);
        try {
          this._renderer.render(this._scene, this._camera);
        } catch (C) {
          throw this._renderer.setRenderTarget(null), C;
        }
        this._renderer.setRenderTarget(null);
      }, this._width = e.width, this._height = e.height, this._type = e.type, this._colorSpace = e.colorSpace;
      const A = {
        format: oi,
        depthBuffer: false,
        stencilBuffer: false,
        type: this._type,
        colorSpace: this._colorSpace,
        anisotropy: ((t = e.renderTargetOptions) === null || t === void 0 ? void 0 : t.anisotropy) !== void 0 ? (n = e.renderTargetOptions) === null || n === void 0 ? void 0 : n.anisotropy : 1,
        generateMipmaps: ((o = e.renderTargetOptions) === null || o === void 0 ? void 0 : o.generateMipmaps) !== void 0 ? (i = e.renderTargetOptions) === null || i === void 0 ? void 0 : i.generateMipmaps : false,
        magFilter: ((s = e.renderTargetOptions) === null || s === void 0 ? void 0 : s.magFilter) !== void 0 ? (c = e.renderTargetOptions) === null || c === void 0 ? void 0 : c.magFilter : Wt,
        minFilter: ((l = e.renderTargetOptions) === null || l === void 0 ? void 0 : l.minFilter) !== void 0 ? (a = e.renderTargetOptions) === null || a === void 0 ? void 0 : a.minFilter : Wt,
        samples: ((p = e.renderTargetOptions) === null || p === void 0 ? void 0 : p.samples) !== void 0 ? (f = e.renderTargetOptions) === null || f === void 0 ? void 0 : f.samples : void 0,
        wrapS: ((d = e.renderTargetOptions) === null || d === void 0 ? void 0 : d.wrapS) !== void 0 ? (_ = e.renderTargetOptions) === null || _ === void 0 ? void 0 : _.wrapS : Ir,
        wrapT: ((h = e.renderTargetOptions) === null || h === void 0 ? void 0 : h.wrapT) !== void 0 ? (b = e.renderTargetOptions) === null || b === void 0 ? void 0 : b.wrapT : Ir
      };
      if (this._material = e.material, e.renderer ? this._renderer = e.renderer : (this._renderer = Cc.instantiateRenderer(), this._rendererIsDisposable = true), this._scene = new N0(), this._camera = new bi(), this._camera.position.set(0, 0, 10), this._camera.left = -0.5, this._camera.right = 0.5, this._camera.top = 0.5, this._camera.bottom = -0.5, this._camera.updateProjectionMatrix(), !w5(this._type, this._renderer, this._camera, A)) {
        let C;
        switch (this._type) {
          case hr:
            C = this._renderer.extensions.has("EXT_color_buffer_float") ? Nr : void 0;
            break;
        }
        C !== void 0 ? (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Nr}`), this._type = C) : (this._supportsReadPixels = false, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"));
      }
      this._quad = new ir(new vo(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new U0(this.width, this.height, A), this._renderTarget.texture.mapping = ((g = e.renderTargetOptions) === null || g === void 0 ? void 0 : g.mapping) !== void 0 ? (y = e.renderTargetOptions) === null || y === void 0 ? void 0 : y.mapping : v0;
    }
    static instantiateRenderer() {
      const e = new zf();
      return e.setSize(128, 128), e;
    }
    toArray() {
      if (!this._supportsReadPixels) throw new Error("Can't read pixels in this browser");
      const e = yd(this._type, this._width, this._height);
      return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, e), e;
    }
    toDataTexture(e) {
      const t = new Wf(this.toArray(), this.width, this.height, oi, this._type, (e == null ? void 0 : e.mapping) || v0, (e == null ? void 0 : e.wrapS) || Ir, (e == null ? void 0 : e.wrapT) || Ir, (e == null ? void 0 : e.magFilter) || Wt, (e == null ? void 0 : e.minFilter) || Wt, (e == null ? void 0 : e.anisotropy) || 1, ii);
      return t.generateMipmaps = (e == null ? void 0 : e.generateMipmaps) !== void 0 ? e == null ? void 0 : e.generateMipmaps : false, t;
    }
    disposeOnDemandRenderer() {
      this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
    }
    dispose(e) {
      this.disposeOnDemandRenderer(), e && this.renderTarget.dispose(), this.material instanceof sr && Object.values(this.material.uniforms).forEach((t) => {
        t.value instanceof mn && t.value.dispose();
      }), Object.values(this.material).forEach((t) => {
        t instanceof mn && t.dispose();
      }), this.material.dispose(), this._quad.geometry.dispose();
    }
    get width() {
      return this._width;
    }
    set width(e) {
      this._width = e, this._renderTarget.setSize(this._width, this._height);
    }
    get height() {
      return this._height;
    }
    set height(e) {
      this._height = e, this._renderTarget.setSize(this._width, this._height);
    }
    get renderer() {
      return this._renderer;
    }
    get renderTarget() {
      return this._renderTarget;
    }
    set renderTarget(e) {
      this._renderTarget = e, this._width = e.width, this._height = e.height;
    }
    get material() {
      return this._material;
    }
    get type() {
      return this._type;
    }
    get colorSpace() {
      return this._colorSpace;
    }
  }
  const b5 = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, y5 = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
  class A5 extends sr {
    constructor({ gamma: e, offsetHdr: t, offsetSdr: n, gainMapMin: o, gainMapMax: i, maxDisplayBoost: s, hdrCapacityMin: c, hdrCapacityMax: l, sdr: a, gainMap: p }) {
      super({
        name: "GainMapDecoderMaterial",
        vertexShader: b5,
        fragmentShader: y5,
        uniforms: {
          sdr: {
            value: a
          },
          gainMap: {
            value: p
          },
          gamma: {
            value: new F(1 / e[0], 1 / e[1], 1 / e[2])
          },
          offsetHdr: {
            value: new F().fromArray(t)
          },
          offsetSdr: {
            value: new F().fromArray(n)
          },
          gainMapMin: {
            value: new F().fromArray(o)
          },
          gainMapMax: {
            value: new F().fromArray(i)
          },
          weightFactor: {
            value: (Math.log2(s) - c) / (l - c)
          }
        },
        blending: qf,
        depthTest: false,
        depthWrite: false
      }), this._maxDisplayBoost = s, this._hdrCapacityMin = c, this._hdrCapacityMax = l, this.needsUpdate = true, this.uniformsNeedUpdate = true;
    }
    get sdr() {
      return this.uniforms.sdr.value;
    }
    set sdr(e) {
      this.uniforms.sdr.value = e;
    }
    get gainMap() {
      return this.uniforms.gainMap.value;
    }
    set gainMap(e) {
      this.uniforms.gainMap.value = e;
    }
    get offsetHdr() {
      return this.uniforms.offsetHdr.value.toArray();
    }
    set offsetHdr(e) {
      this.uniforms.offsetHdr.value.fromArray(e);
    }
    get offsetSdr() {
      return this.uniforms.offsetSdr.value.toArray();
    }
    set offsetSdr(e) {
      this.uniforms.offsetSdr.value.fromArray(e);
    }
    get gainMapMin() {
      return this.uniforms.gainMapMin.value.toArray();
    }
    set gainMapMin(e) {
      this.uniforms.gainMapMin.value.fromArray(e);
    }
    get gainMapMax() {
      return this.uniforms.gainMapMax.value.toArray();
    }
    set gainMapMax(e) {
      this.uniforms.gainMapMax.value.fromArray(e);
    }
    get gamma() {
      const e = this.uniforms.gamma.value;
      return [
        1 / e.x,
        1 / e.y,
        1 / e.z
      ];
    }
    set gamma(e) {
      const t = this.uniforms.gamma.value;
      t.x = 1 / e[0], t.y = 1 / e[1], t.z = 1 / e[2];
    }
    get hdrCapacityMin() {
      return this._hdrCapacityMin;
    }
    set hdrCapacityMin(e) {
      this._hdrCapacityMin = e, this.calculateWeight();
    }
    get hdrCapacityMax() {
      return this._hdrCapacityMax;
    }
    set hdrCapacityMax(e) {
      this._hdrCapacityMax = e, this.calculateWeight();
    }
    get maxDisplayBoost() {
      return this._maxDisplayBoost;
    }
    set maxDisplayBoost(e) {
      this._maxDisplayBoost = Math.max(1, Math.min(65504, e)), this.calculateWeight();
    }
    calculateWeight() {
      const e = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
      this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
    }
  }
  class Ad extends Error {
  }
  class vd extends Error {
  }
  const Go = (r, e, t) => {
    const n = new RegExp(`${e}="([^"]*)"`, "i").exec(r);
    if (n) return n[1];
    const o = new RegExp(`<${e}[^>]*>([\\s\\S]*?)</${e}>`, "i").exec(r);
    if (o) {
      const i = o[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
      return i && i.length === 3 ? i.map((s) => s.replace(/<\/?rdf:li>/g, "")) : o[1].trim();
    }
    if (t !== void 0) return t;
    throw new Error(`Can't find ${e} in gainmap metadata`);
  }, v5 = (r) => {
    let e;
    typeof TextDecoder < "u" ? e = new TextDecoder().decode(r) : e = r.toString();
    let t = e.indexOf("<x:xmpmeta");
    for (; t !== -1; ) {
      const n = e.indexOf("x:xmpmeta>", t), o = e.slice(t, n + 10);
      try {
        const i = Go(o, "hdrgm:GainMapMin", "0"), s = Go(o, "hdrgm:GainMapMax"), c = Go(o, "hdrgm:Gamma", "1"), l = Go(o, "hdrgm:OffsetSDR", "0.015625"), a = Go(o, "hdrgm:OffsetHDR", "0.015625"), p = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(o), f = p ? p[1] : "0", d = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(o);
        if (!d) throw new Error("Incomplete gainmap metadata");
        const _ = d[1];
        return {
          gainMapMin: Array.isArray(i) ? i.map((h) => parseFloat(h)) : [
            parseFloat(i),
            parseFloat(i),
            parseFloat(i)
          ],
          gainMapMax: Array.isArray(s) ? s.map((h) => parseFloat(h)) : [
            parseFloat(s),
            parseFloat(s),
            parseFloat(s)
          ],
          gamma: Array.isArray(c) ? c.map((h) => parseFloat(h)) : [
            parseFloat(c),
            parseFloat(c),
            parseFloat(c)
          ],
          offsetSdr: Array.isArray(l) ? l.map((h) => parseFloat(h)) : [
            parseFloat(l),
            parseFloat(l),
            parseFloat(l)
          ],
          offsetHdr: Array.isArray(a) ? a.map((h) => parseFloat(h)) : [
            parseFloat(a),
            parseFloat(a),
            parseFloat(a)
          ],
          hdrCapacityMin: parseFloat(f),
          hdrCapacityMax: parseFloat(_)
        };
      } catch {
      }
      t = e.indexOf("<x:xmpmeta", n);
    }
  };
  class C5 {
    constructor(e) {
      this.options = {
        debug: e && e.debug !== void 0 ? e.debug : false,
        extractFII: e && e.extractFII !== void 0 ? e.extractFII : true,
        extractNonFII: e && e.extractNonFII !== void 0 ? e.extractNonFII : true
      };
    }
    extract(e) {
      return new Promise((t, n) => {
        const o = this.options.debug, i = new DataView(e.buffer);
        if (i.getUint16(0) !== 65496) {
          n(new Error("Not a valid jpeg"));
          return;
        }
        const s = i.byteLength;
        let c = 2, l = 0, a;
        for (; c < s; ) {
          if (++l > 250) {
            n(new Error(`Found no marker after ${l} loops \u{1F635}`));
            return;
          }
          if (i.getUint8(c) !== 255) {
            n(new Error(`Not a valid marker at offset 0x${c.toString(16)}, found: 0x${i.getUint8(c).toString(16)}`));
            return;
          }
          if (a = i.getUint8(c + 1), o && console.log(`Marker: ${a.toString(16)}`), a === 226) {
            o && console.log("Found APP2 marker (0xffe2)");
            const p = c + 4;
            if (i.getUint32(p) === 1297106432) {
              const f = p + 4;
              let d;
              if (i.getUint16(f) === 18761) d = false;
              else if (i.getUint16(f) === 19789) d = true;
              else {
                n(new Error("No valid endianness marker found in TIFF header"));
                return;
              }
              if (i.getUint16(f + 2, !d) !== 42) {
                n(new Error("Not valid TIFF data! (no 0x002A marker)"));
                return;
              }
              const _ = i.getUint32(f + 4, !d);
              if (_ < 8) {
                n(new Error("Not valid TIFF data! (First offset less than 8)"));
                return;
              }
              const h = f + _, b = i.getUint16(h, !d), g = h + 2;
              let y = 0;
              for (let B = g; B < g + 12 * b; B += 12) i.getUint16(B, !d) === 45057 && (y = i.getUint32(B + 8, !d));
              const C = h + 2 + b * 12 + 4, S = [];
              for (let B = C; B < C + y * 16; B += 16) {
                const T = {
                  MPType: i.getUint32(B, !d),
                  size: i.getUint32(B + 4, !d),
                  dataOffset: i.getUint32(B + 8, !d),
                  dependantImages: i.getUint32(B + 12, !d),
                  start: -1,
                  end: -1,
                  isFII: false
                };
                T.dataOffset ? (T.start = f + T.dataOffset, T.isFII = false) : (T.start = 0, T.isFII = true), T.end = T.start + T.size, S.push(T);
              }
              if (this.options.extractNonFII && S.length) {
                const B = new Blob([
                  i
                ]), T = [];
                for (const E of S) {
                  if (E.isFII && !this.options.extractFII) continue;
                  const M = B.slice(E.start, E.end + 1, "image/jpeg");
                  T.push(M);
                }
                t(T);
              }
            }
          }
          c += 2 + i.getUint16(c + 2);
        }
      });
    }
  }
  const S5 = async (r) => {
    const e = v5(r);
    if (!e) throw new vd("Gain map XMP metadata not found");
    const n = await new C5({
      extractFII: true,
      extractNonFII: true
    }).extract(r);
    if (n.length !== 2) throw new Ad("Gain map recovery image not found");
    return {
      sdr: new Uint8Array(await n[0].arrayBuffer()),
      gainMap: new Uint8Array(await n[1].arrayBuffer()),
      metadata: e
    };
  }, iu = (r) => new Promise((e, t) => {
    const n = document.createElement("img");
    n.onload = () => {
      e(n);
    }, n.onerror = (o) => {
      t(o);
    }, n.src = URL.createObjectURL(r);
  });
  class Cd extends fc {
    constructor(e, t) {
      super(t), e && (this._renderer = e), this._internalLoadingManager = new Xf();
    }
    setRenderer(e) {
      return this._renderer = e, this;
    }
    setRenderTargetOptions(e) {
      return this._renderTargetOptions = e, this;
    }
    prepareQuadRenderer() {
      this._renderer || console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
      const e = new A5({
        gainMapMax: [
          1,
          1,
          1
        ],
        gainMapMin: [
          0,
          0,
          0
        ],
        gamma: [
          1,
          1,
          1
        ],
        offsetHdr: [
          1,
          1,
          1
        ],
        offsetSdr: [
          1,
          1,
          1
        ],
        hdrCapacityMax: 1,
        hdrCapacityMin: 0,
        maxDisplayBoost: 1,
        gainMap: new mn(),
        sdr: new mn()
      });
      return new Cc({
        width: 16,
        height: 16,
        type: hr,
        colorSpace: ii,
        material: e,
        renderer: this._renderer,
        renderTargetOptions: this._renderTargetOptions
      });
    }
    async render(e, t, n, o) {
      const i = o ? new Blob([
        o
      ], {
        type: "image/jpeg"
      }) : void 0, s = new Blob([
        n
      ], {
        type: "image/jpeg"
      });
      let c, l, a = false;
      if (typeof createImageBitmap > "u") {
        const d = await Promise.all([
          i ? iu(i) : Promise.resolve(void 0),
          iu(s)
        ]);
        l = d[0], c = d[1], a = true;
      } else {
        const d = await Promise.all([
          i ? createImageBitmap(i, {
            imageOrientation: "flipY"
          }) : Promise.resolve(void 0),
          createImageBitmap(s, {
            imageOrientation: "flipY"
          })
        ]);
        l = d[0], c = d[1];
      }
      const p = new mn(l || new ImageData(2, 2), v0, Ir, Ir, Wt, S0, oi, C0, 1, ii);
      p.flipY = a, p.needsUpdate = true;
      const f = new mn(c, v0, Ir, Ir, Wt, S0, oi, C0, 1, fr);
      f.flipY = a, f.needsUpdate = true, e.width = c.width, e.height = c.height, e.material.gainMap = p, e.material.sdr = f, e.material.gainMapMin = t.gainMapMin, e.material.gainMapMax = t.gainMapMax, e.material.offsetHdr = t.offsetHdr, e.material.offsetSdr = t.offsetSdr, e.material.gamma = t.gamma, e.material.hdrCapacityMin = t.hdrCapacityMin, e.material.hdrCapacityMax = t.hdrCapacityMax, e.material.maxDisplayBoost = Math.pow(2, t.hdrCapacityMax), e.material.needsUpdate = true, e.render();
    }
  }
  class R5 extends Cd {
    load([e, t, n], o, i, s) {
      const c = this.prepareQuadRenderer();
      let l, a, p;
      const f = async () => {
        if (l && a && p) {
          try {
            await this.render(c, p, l, a);
          } catch (x) {
            this.manager.itemError(e), this.manager.itemError(t), this.manager.itemError(n), typeof s == "function" && s(x), c.disposeOnDemandRenderer();
            return;
          }
          typeof o == "function" && o(c), this.manager.itemEnd(e), this.manager.itemEnd(t), this.manager.itemEnd(n), c.disposeOnDemandRenderer();
        }
      };
      let d = true, _ = 0, h = 0, b = true, g = 0, y = 0, A = true, C = 0, S = 0;
      const B = () => {
        if (typeof i == "function") {
          const x = _ + g + C, P = h + y + S, D = d && b && A;
          i(new ProgressEvent("progress", {
            lengthComputable: D,
            loaded: P,
            total: x
          }));
        }
      };
      this.manager.itemStart(e), this.manager.itemStart(t), this.manager.itemStart(n);
      const T = new yn(this._internalLoadingManager);
      T.setResponseType("arraybuffer"), T.setRequestHeader(this.requestHeader), T.setPath(this.path), T.setWithCredentials(this.withCredentials), T.load(e, async (x) => {
        if (typeof x == "string") throw new Error("Invalid sdr buffer");
        l = x, await f();
      }, (x) => {
        d = x.lengthComputable, h = x.loaded, _ = x.total, B();
      }, (x) => {
        this.manager.itemError(e), typeof s == "function" && s(x);
      });
      const E = new yn(this._internalLoadingManager);
      E.setResponseType("arraybuffer"), E.setRequestHeader(this.requestHeader), E.setPath(this.path), E.setWithCredentials(this.withCredentials), E.load(t, async (x) => {
        if (typeof x == "string") throw new Error("Invalid gainmap buffer");
        a = x, await f();
      }, (x) => {
        b = x.lengthComputable, y = x.loaded, g = x.total, B();
      }, (x) => {
        this.manager.itemError(t), typeof s == "function" && s(x);
      });
      const M = new yn(this._internalLoadingManager);
      return M.setRequestHeader(this.requestHeader), M.setPath(this.path), M.setWithCredentials(this.withCredentials), M.load(n, async (x) => {
        if (typeof x != "string") throw new Error("Invalid metadata string");
        p = JSON.parse(x), await f();
      }, (x) => {
        A = x.lengthComputable, S = x.loaded, C = x.total, B();
      }, (x) => {
        this.manager.itemError(n), typeof s == "function" && s(x);
      }), c;
    }
  }
  class M5 extends Cd {
    load(e, t, n, o) {
      const i = this.prepareQuadRenderer(), s = new yn(this._internalLoadingManager);
      return s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setPath(this.path), s.setWithCredentials(this.withCredentials), this.manager.itemStart(e), s.load(e, async (c) => {
        if (typeof c == "string") throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
        const l = new Uint8Array(c);
        let a, p, f;
        try {
          const d = await S5(l);
          a = d.sdr, p = d.gainMap, f = d.metadata;
        } catch (d) {
          if (d instanceof vd || d instanceof Ad) console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), f = {
            gainMapMin: [
              0,
              0,
              0
            ],
            gainMapMax: [
              1,
              1,
              1
            ],
            gamma: [
              1,
              1,
              1
            ],
            hdrCapacityMin: 0,
            hdrCapacityMax: 1,
            offsetHdr: [
              0,
              0,
              0
            ],
            offsetSdr: [
              0,
              0,
              0
            ]
          }, a = l;
          else throw d;
        }
        try {
          await this.render(i, f, a, p);
        } catch (d) {
          this.manager.itemError(e), typeof o == "function" && o(d), i.disposeOnDemandRenderer();
          return;
        }
        typeof t == "function" && t(i), this.manager.itemEnd(e), i.disposeOnDemandRenderer();
      }, n, (c) => {
        this.manager.itemError(e), typeof o == "function" && o(c);
      }), i;
    }
  }
  const ai = {
    apartment: "lebombo_1k.hdr",
    city: "potsdamer_platz_1k.hdr",
    dawn: "kiara_1_dawn_1k.hdr",
    forest: "forest_slope_1k.hdr",
    lobby: "st_fagans_interior_1k.hdr",
    night: "dikhololo_night_1k.hdr",
    park: "rooitou_park_1k.hdr",
    studio: "studio_small_03_1k.hdr",
    sunset: "venice_sunset_1k.hdr",
    warehouse: "empty_warehouse_01_1k.hdr"
  }, Sd = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", po = (r) => Array.isArray(r), Sc = [
    "/px.png",
    "/nx.png",
    "/py.png",
    "/ny.png",
    "/pz.png",
    "/nz.png"
  ];
  function V0({ files: r = Sc, path: e = "", preset: t = void 0, colorSpace: n = void 0, extensions: o } = {}) {
    t && (Rc(t), r = ai[t], e = Sd);
    const i = po(r), { extension: s, isCubemap: c } = Mc(r), l = Ec(s);
    if (!l) throw new Error("useEnvironment: Unrecognized file extension: " + r);
    const a = Ue((_) => _.gl);
    u.useLayoutEffect(() => {
      if (s !== "webp" && s !== "jpg" && s !== "jpeg") return;
      function _() {
        Sn.clear(l, i ? [
          r
        ] : r);
      }
      a.domElement.addEventListener("webglcontextlost", _, {
        once: true
      });
    }, [
      r,
      a.domElement
    ]);
    const p = Sn(l, i ? [
      r
    ] : r, (_) => {
      (s === "webp" || s === "jpg" || s === "jpeg") && _.setRenderer(a), _.setPath == null || _.setPath(e), o && o(_);
    });
    let f = i ? p[0] : p;
    if (s === "jpg" || s === "jpeg" || s === "webp") {
      var d;
      f = (d = f.renderTarget) == null ? void 0 : d.texture;
    }
    return f.mapping = c ? Yf : Zf, f.colorSpace = n ?? (c ? "srgb" : "srgb-linear"), f;
  }
  const E5 = {
    files: Sc,
    path: "",
    preset: void 0,
    extensions: void 0
  };
  V0.preload = (r) => {
    const e = {
      ...E5,
      ...r
    };
    let { files: t, path: n = "" } = e;
    const { preset: o, extensions: i } = e;
    o && (Rc(o), t = ai[o], n = Sd);
    const { extension: s } = Mc(t);
    if (s === "webp" || s === "jpg" || s === "jpeg") throw new Error("useEnvironment: Preloading gainmaps is not supported");
    const c = Ec(s);
    if (!c) throw new Error("useEnvironment: Unrecognized file extension: " + t);
    Sn.preload(c, po(t) ? [
      t
    ] : t, (l) => {
      l.setPath == null || l.setPath(n), i && i(l);
    });
  };
  const B5 = {
    files: Sc,
    preset: void 0
  };
  V0.clear = (r) => {
    const e = {
      ...B5,
      ...r
    };
    let { files: t } = e;
    const { preset: n } = e;
    n && (Rc(n), t = ai[n]);
    const { extension: o } = Mc(t), i = Ec(o);
    if (!i) throw new Error("useEnvironment: Unrecognized file extension: " + t);
    Sn.clear(i, po(t) ? [
      t
    ] : t);
  };
  function Rc(r) {
    if (!(r in ai)) throw new Error("Preset must be one of: " + Object.keys(ai).join(", "));
  }
  function Mc(r) {
    var e;
    const t = po(r) && r.length === 6, n = po(r) && r.length === 3 && r.some((s) => s.endsWith("json")), o = po(r) ? r[0] : r;
    return {
      extension: t ? "cube" : n ? "webp" : o.startsWith("data:application/exr") ? "exr" : o.startsWith("data:application/hdr") ? "hdr" : o.startsWith("data:image/jpeg") ? "jpg" : (e = o.split(".").pop()) == null || (e = e.split("?")) == null || (e = e.shift()) == null ? void 0 : e.toLowerCase(),
      isCubemap: t,
      isGainmap: n
    };
  }
  function Ec(r) {
    return r === "cube" ? $f : r === "hdr" ? o5 : r === "exr" ? i5 : r === "jpg" || r === "jpeg" ? M5 : r === "webp" ? R5 : null;
  }
  const I5 = (r) => r.current && r.current.isScene, T5 = (r) => I5(r) ? r.current : r;
  function Bc(r, e, t, n, o = {}) {
    var i, s, c, l;
    o = {
      backgroundBlurriness: 0,
      backgroundIntensity: 1,
      backgroundRotation: [
        0,
        0,
        0
      ],
      environmentIntensity: 1,
      environmentRotation: [
        0,
        0,
        0
      ],
      ...o
    };
    const a = T5(e || t), p = a.background, f = a.environment, d = {
      backgroundBlurriness: a.backgroundBlurriness,
      backgroundIntensity: a.backgroundIntensity,
      backgroundRotation: (i = (s = a.backgroundRotation) == null || s.clone == null ? void 0 : s.clone()) !== null && i !== void 0 ? i : [
        0,
        0,
        0
      ],
      environmentIntensity: a.environmentIntensity,
      environmentRotation: (c = (l = a.environmentRotation) == null || l.clone == null ? void 0 : l.clone()) !== null && c !== void 0 ? c : [
        0,
        0,
        0
      ]
    };
    return r !== "only" && (a.environment = n), r && (a.background = n), Oa(a, o), () => {
      r !== "only" && (a.environment = f), r && (a.background = p), Oa(a, d);
    };
  }
  function Ic({ scene: r, background: e = false, map: t, ...n }) {
    const o = Ue((i) => i.scene);
    return u.useLayoutEffect(() => {
      if (t) return Bc(e, r, o, t, n);
    }), null;
  }
  function Rd({ background: r = false, scene: e, blur: t, backgroundBlurriness: n, backgroundIntensity: o, backgroundRotation: i, environmentIntensity: s, environmentRotation: c, ...l }) {
    const a = V0(l), p = Ue((f) => f.scene);
    return u.useLayoutEffect(() => Bc(r, e, p, a, {
      backgroundBlurriness: t ?? n,
      backgroundIntensity: o,
      backgroundRotation: i,
      environmentIntensity: s,
      environmentRotation: c
    })), u.useEffect(() => () => {
      a.dispose();
    }, [
      a
    ]), null;
  }
  function x5({ children: r, near: e = 0.1, far: t = 1e3, resolution: n = 256, frames: o = 1, map: i, background: s = false, blur: c, backgroundBlurriness: l, backgroundIntensity: a, backgroundRotation: p, environmentIntensity: f, environmentRotation: d, scene: _, files: h, path: b, preset: g = void 0, extensions: y }) {
    const A = Ue((M) => M.gl), C = Ue((M) => M.scene), S = u.useRef(null), [B] = u.useState(() => new N0()), T = u.useMemo(() => {
      const M = new N2(n);
      return M.texture.type = hr, M;
    }, [
      n
    ]);
    u.useEffect(() => () => {
      T.dispose();
    }, [
      T
    ]), u.useLayoutEffect(() => {
      if (o === 1) {
        const M = A.autoClear;
        A.autoClear = true, S.current.update(A, B), A.autoClear = M;
      }
      return Bc(s, _, C, T.texture, {
        backgroundBlurriness: c ?? l,
        backgroundIntensity: a,
        backgroundRotation: p,
        environmentIntensity: f,
        environmentRotation: d
      });
    }, [
      r,
      B,
      T.texture,
      _,
      C,
      s,
      o,
      A
    ]);
    let E = 1;
    return it(() => {
      if (o === 1 / 0 || E < o) {
        const M = A.autoClear;
        A.autoClear = true, S.current.update(A, B), A.autoClear = M, E++;
      }
    }), u.createElement(u.Fragment, null, z2(u.createElement(u.Fragment, null, r, u.createElement("cubeCamera", {
      ref: S,
      args: [
        e,
        t,
        T
      ]
    }), h || g ? u.createElement(Rd, {
      background: true,
      files: h,
      preset: g,
      path: b,
      extensions: y
    }) : i ? u.createElement(Ic, {
      background: true,
      map: i,
      extensions: y
    }) : null), B));
  }
  function P5(r) {
    var e, t, n, o;
    const i = V0(r), s = r.map || i;
    u.useMemo(() => e9({
      GroundProjectedEnvImpl: v4
    }), []), u.useEffect(() => () => {
      i.dispose();
    }, [
      i
    ]);
    const c = u.useMemo(() => [
      s
    ], [
      s
    ]), l = (e = r.ground) == null ? void 0 : e.height, a = (t = r.ground) == null ? void 0 : t.radius, p = (n = (o = r.ground) == null ? void 0 : o.scale) !== null && n !== void 0 ? n : 1e3;
    return u.createElement(u.Fragment, null, u.createElement(Ic, vn({}, r, {
      map: s
    })), u.createElement("groundProjectedEnvImpl", {
      args: c,
      scale: p,
      height: l,
      radius: a
    }));
  }
  function F5(r) {
    return r.ground ? u.createElement(P5, r) : r.map ? u.createElement(Ic, r) : r.children ? u.createElement(x5, r) : u.createElement(Rd, r);
  }
  iM = function({ all: r, scene: e, camera: t }) {
    const n = Ue(({ gl: s }) => s), o = Ue(({ camera: s }) => s), i = Ue(({ scene: s }) => s);
    return u.useLayoutEffect(() => {
      const s = [];
      r && (e || i).traverse((a) => {
        a.visible === false && (s.push(a), a.visible = true);
      }), n.compile(e || i, t || o);
      const c = new N2(128);
      new t9(0.01, 1e5, c).update(n, e || i), c.dispose(), s.forEach((a) => a.visible = false);
    }, []), null;
  };
  const L5 = u.forwardRef(({ children: r, compute: e, width: t, height: n, samples: o = 8, renderPriority: i = 0, eventPriority: s = 0, frames: c = 1 / 0, stencilBuffer: l = false, depthBuffer: a = true, generateMipmaps: p = false, ...f }, d) => {
    const { size: _, viewport: h } = Ue(), b = bd((t || _.width) * h.dpr, (n || _.height) * h.dpr, {
      samples: o,
      stencilBuffer: l,
      depthBuffer: a,
      generateMipmaps: p
    }), [g] = u.useState(() => new N0()), y = u.useCallback((A, C, S) => {
      var B, T;
      let E = (B = b.texture) == null || (B = B.__r3f.parent) == null ? void 0 : B.object;
      for (; E && !(E instanceof ni); ) {
        var M;
        E = (M = E.__r3f.parent) == null ? void 0 : M.object;
      }
      if (!E) return false;
      S.raycaster.camera || S.events.compute(A, S, (T = S.previousRoot) == null ? void 0 : T.getState());
      const [x] = S.raycaster.intersectObject(E);
      if (!x) return false;
      const P = x.uv;
      if (!P) return false;
      C.raycaster.setFromCamera(C.pointer.set(P.x * 2 - 1, P.y * 2 - 1), C.camera);
    }, []);
    return u.useImperativeHandle(d, () => b.texture, [
      b
    ]), u.createElement(u.Fragment, null, z2(u.createElement(D5, {
      renderPriority: i,
      frames: c,
      fbo: b
    }, r, u.createElement("group", {
      onPointerOver: () => null
    })), g, {
      events: {
        compute: e || y,
        priority: s
      }
    }), u.createElement("primitive", vn({
      object: b.texture
    }, f)));
  });
  function D5({ frames: r, renderPriority: e, children: t, fbo: n }) {
    let o = 0, i, s, c, l;
    return it((a) => {
      (r === 1 / 0 || o < r) && (i = a.gl.autoClear, s = a.gl.xr.enabled, c = a.gl.getRenderTarget(), l = a.gl.xr.isPresenting, a.gl.autoClear = true, a.gl.xr.enabled = false, a.gl.xr.isPresenting = false, a.gl.setRenderTarget(n), a.gl.render(a.scene, a.camera), a.gl.setRenderTarget(c), a.gl.autoClear = i, a.gl.xr.enabled = s, a.gl.xr.isPresenting = l, o++);
    }, e), u.createElement(u.Fragment, null, t);
  }
  let Si, Wi, su, G5, O5, au, Rs, Ms, Es, Bs, H5, k5, j5, cu, Ji, lu, Vi, Is, Ts, U5, Ki, Qi, uu, xs, Vo, du, N5, z5, Oo, fu, Ps, pu, _u, hu, Xi, Fs, Kn, mu, gu, wu, Qn, Ls, bu, yu, Au, vu, Ho, Xn, qn, Yn, W5, Cu, J5, Ds, Su, Gs, Os, Mu, Hs, Eu, Md, q5, Y5, Z5, Va, $5, ep, ks, Bu, js, Iu;
  Si = u.createContext(null);
  Wi = new F();
  su = new F();
  G5 = (r, e, t, n) => {
    const o = e.dot(e), i = e.dot(r) - e.dot(t), s = e.dot(n);
    return s === 0 ? -i / o : (Wi.copy(n).multiplyScalar(o / s).sub(e), su.copy(n).multiplyScalar(i / s).add(t).sub(r), -Wi.dot(su) / Wi.dot(Wi));
  };
  O5 = new F(0, 1, 0);
  au = new et();
  Rs = ({ direction: r, axis: e }) => {
    const { translation: t, translationLimits: n, annotations: o, annotationsClass: i, depthTest: s, scale: c, lineWidth: l, fixed: a, axisColors: p, hoveredColor: f, opacity: d, renderOrder: _, onDragStart: h, onDrag: b, onDragEnd: g, userData: y } = u.useContext(Si), A = Ue((Z) => Z.controls), C = u.useRef(null), S = u.useRef(null), B = u.useRef(null), T = u.useRef(0), [E, M] = u.useState(false), x = u.useCallback((Z) => {
      o && (C.current.innerText = `${t.current[e].toFixed(2)}`, C.current.style.display = "block"), Z.stopPropagation();
      const j = new et().extractRotation(S.current.matrixWorld), U = Z.point.clone(), N = new F().setFromMatrixPosition(S.current.matrixWorld), oe = r.clone().applyMatrix4(j).normalize();
      B.current = {
        clickPoint: U,
        dir: oe
      }, T.current = t.current[e], h({
        component: "Arrow",
        axis: e,
        origin: N,
        directions: [
          oe
        ]
      }), A && (A.enabled = false), Z.target.setPointerCapture(Z.pointerId);
    }, [
      o,
      r,
      A,
      h,
      t,
      e
    ]), P = u.useCallback((Z) => {
      if (Z.stopPropagation(), E || M(true), B.current) {
        const { clickPoint: j, dir: U } = B.current, [N, oe] = (n == null ? void 0 : n[e]) || [
          void 0,
          void 0
        ];
        let ue = G5(j, U, Z.ray.origin, Z.ray.direction);
        N !== void 0 && (ue = Math.max(ue, N - T.current)), oe !== void 0 && (ue = Math.min(ue, oe - T.current)), t.current[e] = T.current + ue, o && (C.current.innerText = `${t.current[e].toFixed(2)}`), au.makeTranslation(U.x * ue, U.y * ue, U.z * ue), b(au);
      }
    }, [
      o,
      b,
      E,
      t,
      n,
      e
    ]), D = u.useCallback((Z) => {
      o && (C.current.style.display = "none"), Z.stopPropagation(), B.current = null, g(), A && (A.enabled = true), Z.target.releasePointerCapture(Z.pointerId);
    }, [
      o,
      A,
      g
    ]), H = u.useCallback((Z) => {
      Z.stopPropagation(), M(false);
    }, []), { cylinderLength: k, coneWidth: J, coneLength: W, matrixL: K } = u.useMemo(() => {
      const Z = a ? l / c * 1.6 : c / 20, j = a ? 0.2 : c / 5, U = a ? 1 - j : c - j, N = new Ne().setFromUnitVectors(O5, r.clone().normalize()), oe = new et().makeRotationFromQuaternion(N);
      return {
        cylinderLength: U,
        coneWidth: Z,
        coneLength: j,
        matrixL: oe
      };
    }, [
      r,
      c,
      l,
      a
    ]), Q = E ? f : p[e];
    return u.createElement("group", {
      ref: S
    }, u.createElement("group", {
      matrix: K,
      matrixAutoUpdate: false,
      onPointerDown: x,
      onPointerMove: P,
      onPointerUp: D,
      onPointerOut: H
    }, o && u.createElement(J0, {
      position: [
        0,
        -W,
        0
      ]
    }, u.createElement("div", {
      style: {
        display: "none",
        background: "#151520",
        color: "white",
        padding: "6px 8px",
        borderRadius: 7,
        whiteSpace: "nowrap"
      },
      className: i,
      ref: C
    })), u.createElement("mesh", {
      visible: false,
      position: [
        0,
        (k + W) / 2,
        0
      ],
      userData: y
    }, u.createElement("cylinderGeometry", {
      args: [
        J * 1.4,
        J * 1.4,
        k + W,
        8,
        1
      ]
    })), u.createElement(I0, {
      transparent: true,
      raycast: () => null,
      depthTest: s,
      points: [
        0,
        0,
        0,
        0,
        k,
        0
      ],
      lineWidth: l,
      side: Bn,
      color: Q,
      opacity: d,
      polygonOffset: true,
      renderOrder: 1,
      polygonOffsetFactor: -10,
      fog: false
    }), u.createElement("mesh", {
      raycast: () => null,
      position: [
        0,
        k + W / 2,
        0
      ],
      renderOrder: _
    }, u.createElement("coneGeometry", {
      args: [
        J,
        W,
        24,
        1
      ]
    }), u.createElement("meshBasicMaterial", {
      transparent: true,
      depthTest: s,
      color: Q,
      opacity: d,
      polygonOffset: true,
      polygonOffsetFactor: -10,
      fog: false
    }))));
  };
  Ms = new F();
  Es = new F();
  Bs = (r) => r * 180 / Math.PI;
  H5 = (r) => r * Math.PI / 180;
  k5 = (r, e, t, n, o) => {
    Ms.copy(r).sub(t), Es.copy(e).sub(t);
    const i = n.dot(n), s = o.dot(o), c = Ms.dot(n) / i, l = Ms.dot(o) / s, a = Es.dot(n) / i, p = Es.dot(o) / s, f = Math.atan2(l, c);
    return Math.atan2(p, a) - f;
  };
  j5 = (r, e) => {
    let t = Math.floor(r / e);
    return t = t < 0 ? t + 1 : t, r - t * e;
  };
  cu = (r) => {
    let e = j5(r, 2 * Math.PI);
    return Math.abs(e) < 1e-6 ? 0 : (e < 0 && (e += 2 * Math.PI), e);
  };
  Ji = new et();
  lu = new F();
  Vi = new W2();
  Is = new F();
  Ts = ({ dir1: r, dir2: e, axis: t }) => {
    const { rotationLimits: n, annotations: o, annotationsClass: i, depthTest: s, scale: c, lineWidth: l, fixed: a, axisColors: p, hoveredColor: f, renderOrder: d, opacity: _, onDragStart: h, onDrag: b, onDragEnd: g, userData: y } = u.useContext(Si), A = Ue((Q) => Q.controls), C = u.useRef(null), S = u.useRef(null), B = u.useRef(0), T = u.useRef(0), E = u.useRef(null), [M, x] = u.useState(false), P = u.useCallback((Q) => {
      o && (C.current.innerText = `${Bs(T.current).toFixed(0)}\xBA`, C.current.style.display = "block"), Q.stopPropagation();
      const Z = Q.point.clone(), j = new F().setFromMatrixPosition(S.current.matrixWorld), U = new F().setFromMatrixColumn(S.current.matrixWorld, 0).normalize(), N = new F().setFromMatrixColumn(S.current.matrixWorld, 1).normalize(), oe = new F().setFromMatrixColumn(S.current.matrixWorld, 2).normalize(), ue = new hc().setFromNormalAndCoplanarPoint(oe, j);
      E.current = {
        clickPoint: Z,
        origin: j,
        e1: U,
        e2: N,
        normal: oe,
        plane: ue
      }, h({
        component: "Rotator",
        axis: t,
        origin: j,
        directions: [
          U,
          N,
          oe
        ]
      }), A && (A.enabled = false), Q.target.setPointerCapture(Q.pointerId);
    }, [
      o,
      A,
      h,
      t
    ]), D = u.useCallback((Q) => {
      if (Q.stopPropagation(), M || x(true), E.current) {
        const { clickPoint: Z, origin: j, e1: U, e2: N, normal: oe, plane: ue } = E.current, [we, ve] = (n == null ? void 0 : n[t]) || [
          void 0,
          void 0
        ];
        Vi.copy(Q.ray), Vi.intersectPlane(ue, Is), Vi.direction.negate(), Vi.intersectPlane(ue, Is);
        let ne = k5(Z, Is, j, U, N), Ie = Bs(ne);
        Q.shiftKey && (Ie = Math.round(Ie / 10) * 10, ne = H5(Ie)), we !== void 0 && ve !== void 0 && ve - we < 2 * Math.PI ? (ne = cu(ne), ne = ne > Math.PI ? ne - 2 * Math.PI : ne, ne = j0.clamp(ne, we - B.current, ve - B.current), T.current = B.current + ne) : (T.current = cu(B.current + ne), T.current = T.current > Math.PI ? T.current - 2 * Math.PI : T.current), o && (Ie = Bs(T.current), C.current.innerText = `${Ie.toFixed(0)}\xBA`), Ji.makeRotationAxis(oe, ne), lu.copy(j).applyMatrix4(Ji).sub(j).negate(), Ji.setPosition(lu), b(Ji);
      }
    }, [
      o,
      b,
      M,
      n,
      t
    ]), H = u.useCallback((Q) => {
      o && (C.current.style.display = "none"), Q.stopPropagation(), B.current = T.current, E.current = null, g(), A && (A.enabled = true), Q.target.releasePointerCapture(Q.pointerId);
    }, [
      o,
      A,
      g
    ]), k = u.useCallback((Q) => {
      Q.stopPropagation(), x(false);
    }, []), J = u.useMemo(() => {
      const Q = r.clone().normalize(), Z = e.clone().normalize();
      return new et().makeBasis(Q, Z, Q.clone().cross(Z));
    }, [
      r,
      e
    ]), W = a ? 0.65 : c * 0.65, K = u.useMemo(() => {
      const Z = [];
      for (let j = 0; j <= 32; j++) {
        const U = j * (Math.PI / 2) / 32;
        Z.push(new F(Math.cos(U) * W, Math.sin(U) * W, 0));
      }
      return Z;
    }, [
      W
    ]);
    return u.createElement("group", {
      ref: S,
      onPointerDown: P,
      onPointerMove: D,
      onPointerUp: H,
      onPointerOut: k,
      matrix: J,
      matrixAutoUpdate: false
    }, o && u.createElement(J0, {
      position: [
        W,
        W,
        0
      ]
    }, u.createElement("div", {
      style: {
        display: "none",
        background: "#151520",
        color: "white",
        padding: "6px 8px",
        borderRadius: 7,
        whiteSpace: "nowrap"
      },
      className: i,
      ref: C
    })), u.createElement(I0, {
      points: K,
      lineWidth: l * 4,
      visible: false,
      userData: y
    }), u.createElement(I0, {
      transparent: true,
      raycast: () => null,
      depthTest: s,
      points: K,
      lineWidth: l,
      side: Bn,
      color: M ? f : p[t],
      opacity: _,
      polygonOffset: true,
      polygonOffsetFactor: -10,
      renderOrder: d,
      fog: false
    }));
  };
  U5 = (r, e, t) => {
    const n = Math.abs(r.x) >= Math.abs(r.y) && Math.abs(r.x) >= Math.abs(r.z) ? 0 : Math.abs(r.y) >= Math.abs(r.x) && Math.abs(r.y) >= Math.abs(r.z) ? 1 : 2, o = [
      0,
      1,
      2
    ].sort((h, b) => Math.abs(e.getComponent(b)) - Math.abs(e.getComponent(h))), i = n === o[0] ? o[1] : o[0], s = r.getComponent(n), c = r.getComponent(i), l = e.getComponent(n), a = e.getComponent(i), p = t.getComponent(n), d = (t.getComponent(i) - p * (c / s)) / (a - l * (c / s));
    return [
      (p - d * l) / s,
      d
    ];
  };
  Ki = new W2();
  Qi = new F();
  uu = new et();
  xs = ({ dir1: r, dir2: e, axis: t }) => {
    const { translation: n, translationLimits: o, annotations: i, annotationsClass: s, depthTest: c, scale: l, lineWidth: a, fixed: p, axisColors: f, hoveredColor: d, opacity: _, onDragStart: h, onDrag: b, onDragEnd: g, userData: y } = u.useContext(Si), A = Ue((j) => j.controls), C = u.useRef(null), S = u.useRef(null), B = u.useRef(null), T = u.useRef(0), E = u.useRef(0), [M, x] = u.useState(false), P = u.useCallback((j) => {
      i && (C.current.innerText = `${n.current[(t + 1) % 3].toFixed(2)}, ${n.current[(t + 2) % 3].toFixed(2)}`, C.current.style.display = "block"), j.stopPropagation();
      const U = j.point.clone(), N = new F().setFromMatrixPosition(S.current.matrixWorld), oe = new F().setFromMatrixColumn(S.current.matrixWorld, 0).normalize(), ue = new F().setFromMatrixColumn(S.current.matrixWorld, 1).normalize(), we = new F().setFromMatrixColumn(S.current.matrixWorld, 2).normalize(), ve = new hc().setFromNormalAndCoplanarPoint(we, N);
      B.current = {
        clickPoint: U,
        e1: oe,
        e2: ue,
        plane: ve
      }, T.current = n.current[(t + 1) % 3], E.current = n.current[(t + 2) % 3], h({
        component: "Slider",
        axis: t,
        origin: N,
        directions: [
          oe,
          ue,
          we
        ]
      }), A && (A.enabled = false), j.target.setPointerCapture(j.pointerId);
    }, [
      i,
      A,
      h,
      t
    ]), D = u.useCallback((j) => {
      if (j.stopPropagation(), M || x(true), B.current) {
        const { clickPoint: U, e1: N, e2: oe, plane: ue } = B.current, [we, ve] = (o == null ? void 0 : o[(t + 1) % 3]) || [
          void 0,
          void 0
        ], [ne, Ie] = (o == null ? void 0 : o[(t + 2) % 3]) || [
          void 0,
          void 0
        ];
        Ki.copy(j.ray), Ki.intersectPlane(ue, Qi), Ki.direction.negate(), Ki.intersectPlane(ue, Qi), Qi.sub(U);
        let [ie, z] = U5(N, oe, Qi);
        we !== void 0 && (ie = Math.max(ie, we - T.current)), ve !== void 0 && (ie = Math.min(ie, ve - T.current)), ne !== void 0 && (z = Math.max(z, ne - E.current)), Ie !== void 0 && (z = Math.min(z, Ie - E.current)), n.current[(t + 1) % 3] = T.current + ie, n.current[(t + 2) % 3] = E.current + z, i && (C.current.innerText = `${n.current[(t + 1) % 3].toFixed(2)}, ${n.current[(t + 2) % 3].toFixed(2)}`), uu.makeTranslation(ie * N.x + z * oe.x, ie * N.y + z * oe.y, ie * N.z + z * oe.z), b(uu);
      }
    }, [
      i,
      b,
      M,
      n,
      o,
      t
    ]), H = u.useCallback((j) => {
      i && (C.current.style.display = "none"), j.stopPropagation(), B.current = null, g(), A && (A.enabled = true), j.target.releasePointerCapture(j.pointerId);
    }, [
      i,
      A,
      g
    ]), k = u.useCallback((j) => {
      j.stopPropagation(), x(false);
    }, []), J = u.useMemo(() => {
      const j = r.clone().normalize(), U = e.clone().normalize();
      return new et().makeBasis(j, U, j.clone().cross(U));
    }, [
      r,
      e
    ]), W = p ? 1 / 7 : l / 7, K = p ? 0.225 : l * 0.225, Q = M ? d : f[t], Z = u.useMemo(() => [
      new F(0, 0, 0),
      new F(0, K, 0),
      new F(K, K, 0),
      new F(K, 0, 0),
      new F(0, 0, 0)
    ], [
      K
    ]);
    return u.createElement("group", {
      ref: S,
      matrix: J,
      matrixAutoUpdate: false
    }, i && u.createElement(J0, {
      position: [
        0,
        0,
        0
      ]
    }, u.createElement("div", {
      style: {
        display: "none",
        background: "#151520",
        color: "white",
        padding: "6px 8px",
        borderRadius: 7,
        whiteSpace: "nowrap"
      },
      className: s,
      ref: C
    })), u.createElement("group", {
      position: [
        W * 1.7,
        W * 1.7,
        0
      ]
    }, u.createElement("mesh", {
      visible: true,
      onPointerDown: P,
      onPointerMove: D,
      onPointerUp: H,
      onPointerOut: k,
      scale: K,
      userData: y
    }, u.createElement("planeGeometry", null), u.createElement("meshBasicMaterial", {
      transparent: true,
      depthTest: c,
      color: Q,
      polygonOffset: true,
      polygonOffsetFactor: -10,
      side: Bn,
      fog: false
    })), u.createElement(I0, {
      position: [
        -K / 2,
        -K / 2,
        0
      ],
      transparent: true,
      depthTest: c,
      points: Z,
      lineWidth: a,
      color: Q,
      opacity: _,
      polygonOffset: true,
      polygonOffsetFactor: -10,
      userData: y,
      fog: false
    })));
  };
  Vo = new F();
  du = new F();
  N5 = (r, e, t, n) => {
    const o = e.dot(e), i = e.dot(r) - e.dot(t), s = e.dot(n);
    return s === 0 ? -i / o : (Vo.copy(n).multiplyScalar(o / s).sub(e), du.copy(n).multiplyScalar(i / s).add(t).sub(r), -Vo.dot(du) / Vo.dot(Vo));
  };
  z5 = new F(0, 1, 0);
  Oo = new F();
  fu = new et();
  Ps = ({ direction: r, axis: e }) => {
    const { scaleLimits: t, annotations: n, annotationsClass: o, depthTest: i, scale: s, lineWidth: c, fixed: l, axisColors: a, hoveredColor: p, opacity: f, renderOrder: d, onDragStart: _, onDrag: h, onDragEnd: b, userData: g } = u.useContext(Si), y = Ue((j) => j.size), A = Ue((j) => j.controls), C = u.useRef(null), S = u.useRef(null), B = u.useRef(null), T = u.useRef(1), E = u.useRef(1), M = u.useRef(null), [x, P] = u.useState(false), D = l ? 1.2 : 1.2 * s, H = u.useCallback((j) => {
      n && (C.current.innerText = `${E.current.toFixed(2)}`, C.current.style.display = "block"), j.stopPropagation();
      const U = new et().extractRotation(S.current.matrixWorld), N = j.point.clone(), oe = new F().setFromMatrixPosition(S.current.matrixWorld), ue = r.clone().applyMatrix4(U).normalize(), we = S.current.matrixWorld.clone(), ve = we.clone().invert(), ne = l ? 1 / md(S.current.getWorldPosition(Vo), s, j.camera, y) : 1;
      M.current = {
        clickPoint: N,
        dir: ue,
        mPLG: we,
        mPLGInv: ve,
        offsetMultiplier: ne
      }, _({
        component: "Sphere",
        axis: e,
        origin: oe,
        directions: [
          ue
        ]
      }), A && (A.enabled = false), j.target.setPointerCapture(j.pointerId);
    }, [
      n,
      A,
      r,
      _,
      e,
      l,
      s,
      y
    ]), k = u.useCallback((j) => {
      if (j.stopPropagation(), x || P(true), M.current) {
        const { clickPoint: U, dir: N, mPLG: oe, mPLGInv: ue, offsetMultiplier: we } = M.current, [ve, ne] = (t == null ? void 0 : t[e]) || [
          1e-5,
          void 0
        ], ie = N5(U, N, j.ray.origin, j.ray.direction) * we, z = l ? ie : ie / s;
        let $ = Math.pow(2, z * 0.2);
        j.shiftKey && ($ = Math.round($ * 10) / 10), $ = Math.max($, ve / T.current), ne !== void 0 && ($ = Math.min($, ne / T.current)), E.current = T.current * $, B.current.position.set(0, D + ie, 0), n && (C.current.innerText = `${E.current.toFixed(2)}`), Oo.set(1, 1, 1), Oo.setComponent(e, $), fu.makeScale(Oo.x, Oo.y, Oo.z).premultiply(oe).multiply(ue), h(fu);
      }
    }, [
      n,
      D,
      h,
      x,
      t,
      e
    ]), J = u.useCallback((j) => {
      n && (C.current.style.display = "none"), j.stopPropagation(), T.current = E.current, M.current = null, B.current.position.set(0, D, 0), b(), A && (A.enabled = true), j.target.releasePointerCapture(j.pointerId);
    }, [
      n,
      A,
      b,
      D
    ]), W = u.useCallback((j) => {
      j.stopPropagation(), P(false);
    }, []), { radius: K, matrixL: Q } = u.useMemo(() => {
      const j = l ? c / s * 1.8 : s / 22.5, U = new Ne().setFromUnitVectors(z5, r.clone().normalize()), N = new et().makeRotationFromQuaternion(U);
      return {
        radius: j,
        matrixL: N
      };
    }, [
      r,
      s,
      c,
      l
    ]), Z = x ? p : a[e];
    return u.createElement("group", {
      ref: S
    }, u.createElement("group", {
      matrix: Q,
      matrixAutoUpdate: false,
      onPointerDown: H,
      onPointerMove: k,
      onPointerUp: J,
      onPointerOut: W
    }, n && u.createElement(J0, {
      position: [
        0,
        D / 2,
        0
      ]
    }, u.createElement("div", {
      style: {
        display: "none",
        background: "#151520",
        color: "white",
        padding: "6px 8px",
        borderRadius: 7,
        whiteSpace: "nowrap"
      },
      className: o,
      ref: C
    })), u.createElement("mesh", {
      ref: B,
      position: [
        0,
        D,
        0
      ],
      renderOrder: d,
      userData: g
    }, u.createElement("sphereGeometry", {
      args: [
        K,
        12,
        12
      ]
    }), u.createElement("meshBasicMaterial", {
      transparent: true,
      depthTest: i,
      color: Z,
      opacity: f,
      polygonOffset: true,
      polygonOffsetFactor: -10
    }))));
  };
  pu = new et();
  _u = new et();
  hu = new et();
  Xi = new et();
  Fs = new et();
  Kn = new et();
  mu = new et();
  gu = new et();
  wu = new et();
  Qn = new Ao();
  Ls = new Ao();
  bu = new F();
  yu = new F();
  Au = new F();
  vu = new F();
  Ho = new F();
  Xn = new F(1, 0, 0);
  qn = new F(0, 1, 0);
  Yn = new F(0, 0, 1);
  W5 = u.forwardRef(({ enabled: r = true, matrix: e, onDragStart: t, onDrag: n, onDragEnd: o, autoTransform: i = true, anchor: s, disableAxes: c = false, disableSliders: l = false, disableRotations: a = false, disableScaling: p = false, activeAxes: f = [
    true,
    true,
    true
  ], offset: d = [
    0,
    0,
    0
  ], rotation: _ = [
    0,
    0,
    0
  ], scale: h = 1, lineWidth: b = 4, fixed: g = false, translationLimits: y, rotationLimits: A, scaleLimits: C, depthTest: S = true, renderOrder: B = 500, axisColors: T = [
    "#ff2060",
    "#20df80",
    "#2080ff"
  ], hoveredColor: E = "#ffff40", annotations: M = false, annotationsClass: x, opacity: P = 1, visible: D = true, userData: H, children: k, ...J }, W) => {
    const K = Ue((ne) => ne.invalidate), Q = u.useRef(null), Z = u.useRef(null), j = u.useRef(null), U = u.useRef(null), N = u.useRef([
      0,
      0,
      0
    ]), oe = u.useRef(new F(1, 1, 1)), ue = u.useRef(new F(1, 1, 1));
    u.useLayoutEffect(() => {
      s && (U.current.updateWorldMatrix(true, true), Xi.copy(U.current.matrixWorld).invert(), Qn.makeEmpty(), U.current.traverse((ne) => {
        ne.geometry && (ne.geometry.boundingBox || ne.geometry.computeBoundingBox(), Kn.copy(ne.matrixWorld).premultiply(Xi), Ls.copy(ne.geometry.boundingBox), Ls.applyMatrix4(Kn), Qn.union(Ls));
      }), bu.copy(Qn.max).add(Qn.min).multiplyScalar(0.5), yu.copy(Qn.max).sub(Qn.min).multiplyScalar(0.5), Au.copy(yu).multiply(new F(...s)).add(bu), vu.set(...d).add(Au), j.current.position.copy(vu), K());
    });
    const we = u.useMemo(() => ({
      onDragStart: (ne) => {
        pu.copy(Z.current.matrix), _u.copy(Z.current.matrixWorld), t && t(ne), K();
      },
      onDrag: (ne) => {
        hu.copy(Q.current.matrixWorld), Xi.copy(hu).invert(), Fs.copy(_u).premultiply(ne), Kn.copy(Fs).premultiply(Xi), mu.copy(pu).invert(), gu.copy(Kn).multiply(mu), i && Z.current.matrix.copy(Kn), n && n(Kn, gu, Fs, ne), K();
      },
      onDragEnd: () => {
        o && o(), K();
      },
      translation: N,
      translationLimits: y,
      rotationLimits: A,
      axisColors: T,
      hoveredColor: E,
      opacity: P,
      scale: h,
      lineWidth: b,
      fixed: g,
      depthTest: S,
      renderOrder: B,
      userData: H,
      annotations: M,
      annotationsClass: x
    }), [
      t,
      n,
      o,
      N,
      y,
      A,
      C,
      S,
      h,
      b,
      g,
      ...T,
      E,
      P,
      H,
      i,
      M,
      x
    ]), ve = new F();
    return it((ne) => {
      if (g) {
        const Ie = md(j.current.getWorldPosition(ve), h, ne.camera, ne.size);
        oe.current.setScalar(Ie);
      }
      e && e instanceof et && (Z.current.matrix = e), Z.current.updateWorldMatrix(true, true), wu.makeRotationFromEuler(j.current.rotation).setPosition(j.current.position).premultiply(Z.current.matrixWorld), ue.current.setFromMatrixScale(wu), Ho.copy(oe.current).divide(ue.current), (Math.abs(j.current.scale.x - Ho.x) > 1e-4 || Math.abs(j.current.scale.y - Ho.y) > 1e-4 || Math.abs(j.current.scale.z - Ho.z) > 1e-4) && (j.current.scale.copy(Ho), ne.invalidate());
    }), u.useImperativeHandle(W, () => Z.current, []), u.createElement(Si.Provider, {
      value: we
    }, u.createElement("group", {
      ref: Q
    }, u.createElement("group", vn({
      ref: Z,
      matrix: e,
      matrixAutoUpdate: false
    }, J), u.createElement("group", {
      visible: D,
      ref: j,
      position: d,
      rotation: _
    }, r && u.createElement(u.Fragment, null, !c && f[0] && u.createElement(Rs, {
      axis: 0,
      direction: Xn
    }), !c && f[1] && u.createElement(Rs, {
      axis: 1,
      direction: qn
    }), !c && f[2] && u.createElement(Rs, {
      axis: 2,
      direction: Yn
    }), !l && f[0] && f[1] && u.createElement(xs, {
      axis: 2,
      dir1: Xn,
      dir2: qn
    }), !l && f[0] && f[2] && u.createElement(xs, {
      axis: 1,
      dir1: Yn,
      dir2: Xn
    }), !l && f[2] && f[1] && u.createElement(xs, {
      axis: 0,
      dir1: qn,
      dir2: Yn
    }), !a && f[0] && f[1] && u.createElement(Ts, {
      axis: 2,
      dir1: Xn,
      dir2: qn
    }), !a && f[0] && f[2] && u.createElement(Ts, {
      axis: 1,
      dir1: Yn,
      dir2: Xn
    }), !a && f[2] && f[1] && u.createElement(Ts, {
      axis: 0,
      dir1: qn,
      dir2: Yn
    }), !p && f[0] && u.createElement(Ps, {
      axis: 0,
      direction: Xn
    }), !p && f[1] && u.createElement(Ps, {
      axis: 1,
      direction: qn
    }), !p && f[2] && u.createElement(Ps, {
      axis: 2,
      direction: Yn
    }))), u.createElement("group", {
      ref: U
    }, k))));
  });
  Cu = 0.1;
  sM = 26.5;
  aM = 26.5;
  cM = 26.5;
  lM = 26.5;
  uM = 28;
  J5 = 0.05;
  V5 = new F(0.12418296933174133, 0.27698033242536874, -0.5767450100755617 + 0.35);
  Ds = 0;
  Su = 0;
  dM = V5.clone().add(new F(Math.cos(Ds) * Math.sin(Su), Math.sin(Ds), -Math.cos(Ds) * Math.cos(Su)));
  K5 = new F(0, 0.43848, 1.5383);
  Gs = -10 * Math.PI / 180;
  Ru = 0;
  fM = K5.clone().add(new F(Math.cos(Gs) * Math.sin(Ru), Math.sin(Gs), -Math.cos(Gs) * Math.cos(Ru)));
  Q5 = new F(0, 1.275, 1.6);
  Os = -37.2 * Math.PI / 180;
  Mu = 0;
  pM = Q5.clone().add(new F(Math.cos(Os) * Math.sin(Mu), Math.sin(Os), -Math.cos(Os) * Math.cos(Mu)));
  X5 = new F(0.075, 0.17, 0.2);
  Hs = 0 * Math.PI / 180;
  Eu = -5 * Math.PI / 180;
  _M = X5.clone().add(new F(Math.cos(Hs) * Math.sin(Eu), Math.sin(Hs), -Math.cos(Hs) * Math.cos(Eu)));
  Md = new F(0.5999780893325806, 0.22621649503707886, -0.3290720582008362);
  q5 = new Ne(0.6219218494532723, -0.19359746893751392, 0.16244754535441686, 0.741177468393135);
  Y5 = new F(0, 1, 0).applyQuaternion(q5).normalize();
  Z5 = 0.85;
  Ed = new F().copy(Md).addScaledVector(Y5, Z5);
  Va = Md.clone().sub(Ed).normalize();
  $5 = Math.asin(Va.y);
  ep = Math.atan2(Va.x, -Va.z);
  ks = $5;
  Bu = ep;
  hM = Ed.clone().add(new F(Math.cos(ks) * Math.sin(Bu), Math.sin(ks), -Math.cos(ks) * Math.cos(Bu)));
  tp = new F(-0.100953, 0.324844, 0.767361);
  mM = new F(0.5, 1.5, 4.3);
  js = -0.1;
  Iu = 0;
  gM = tp.clone().add(new F(Math.cos(js) * Math.sin(Iu), Math.sin(js), -Math.cos(js) * Math.cos(Iu)));
  new F(0, 1.5, 3);
  let rp, Us, Tu;
  wM = new F(0, 0.15, 0);
  bM = new F(0, 2, 1.5);
  yM = new F(0, 0.15, 0);
  rp = new F(0, 5.854542472644852, 1.9236790262273729);
  AM = 25;
  vM = 25;
  Us = -0.7411347672489961;
  Tu = 0.014299597730848101;
  rp.clone().add(new F(Math.cos(Us) * Math.sin(Tu), Math.sin(Us), -Math.cos(Us) * Math.cos(Tu)));
  let Ns, xu;
  np = new F(0, 1.2, 2.3);
  Ns = -25 * Math.PI / 180;
  xu = 0;
  np.clone().add(new F(Math.cos(Ns) * Math.sin(xu), Math.sin(Ns), -Math.cos(Ns) * Math.cos(xu)));
  CM = 35;
  Bd = ((r) => (r[r.RenderLayer = 0] = "RenderLayer", r[r.RaycastLayer = 1] = "RaycastLayer", r[r.RampLayer = 2] = "RampLayer", r))(Bd || {});
  const Id = new mc();
  Id.disable(0);
  Id.enable(1);
  Tc = new mc();
  Tc.enable(1);
  const xc = new mc();
  xc.disable(0);
  xc.enable(2);
  let op, ip, sp, ap, lp, up, dp;
  op = -119;
  ip = -119;
  sp = -118;
  ap = -116;
  SM = -106;
  cp = {
    inputs: -5,
    physics: -4
  };
  lp = () => {
    gc("Game Simulator", {
      shopLettersComplete: Zt(() => {
        L.getState().setShopLettersComplete(0, true), L.getState().setShopLettersComplete(1, true), L.getState().setShopLettersComplete(2, true), L.getState().setShopLettersComplete(3, true);
      }),
      rolloverLanesComplete: Zt(() => {
        L.getState().setRolloverLanesComplete(0, true), L.getState().setRolloverLanesComplete(1, true), L.getState().setRolloverLanesComplete(2, true);
      }),
      bfcmLettersComplete: Zt(() => {
        L.getState().setBfcmTargetsComplete(0, true), L.getState().setBfcmTargetsComplete(1, true), L.getState().setBfcmTargetsComplete(2, true), L.getState().setBfcmTargetsComplete(3, true);
      }),
      allMiniGamesMissionCompleted: Zt(() => {
        he("retailStoresMiniGameCompleted", {
          time: performance.now()
        }), he("fiveStarMiniGameCompleted", {
          time: performance.now()
        }), he("cashRegisterMiniGameCompleted", {
          time: performance.now()
        }), he("boxesMiniGameCompleted", {
          time: performance.now()
        }), he("podiumMiniGameCompleted", {
          time: performance.now()
        });
      }),
      "Simulate Ramp Entry": Zt(() => {
        he("advanceAirplane", {
          time: performance.now()
        });
      }),
      "Simulate Add Shopify Letter": Zt(() => {
        L.getState().incrementNumShopifyLettersCompleted();
      })
    }, {
      collapsed: false
    }), u.useEffect(() => se.on("laneEvent", (e) => {
      (e.type === "outlane" || e.type === "inlane") && L.getState().setShopLettersComplete(e.id, true);
    }), []), u.useEffect(() => L.subscribe((e) => e.shopLettersComplete, (e) => {
      e[0] && e[1] && e[2] && e[3] && (he("shopLettersComplete", {
        time: performance.now()
      }), L.getState().setShopLettersComplete(0, false), L.getState().setShopLettersComplete(1, false), L.getState().setShopLettersComplete(2, false), L.getState().setShopLettersComplete(3, false));
    }), []), u.useEffect(() => se.on("newBall", () => {
      L.getState().setShopLettersComplete(0, false), L.getState().setShopLettersComplete(1, false), L.getState().setShopLettersComplete(2, false), L.getState().setShopLettersComplete(3, false);
    }), []), u.useEffect(() => se.on("gameOver", () => {
      L.getState().setShopLettersComplete(0, false), L.getState().setShopLettersComplete(1, false), L.getState().setShopLettersComplete(2, false), L.getState().setShopLettersComplete(3, false);
    }), []), u.useEffect(() => se.on("laneEvent", (e) => {
      e.type === "rolloverLane" && L.getState().setRolloverLanesComplete(e.id - 4, true);
    }), []), u.useEffect(() => L.subscribe((e) => e.rolloverLanesComplete, (e) => {
      e[0] && e[1] && e[2] && (he("rolloverLanesComplete", {
        time: performance.now()
      }), L.getState().setRolloverLanesComplete(0, false), L.getState().setRolloverLanesComplete(1, false), L.getState().setRolloverLanesComplete(2, false));
    }), []), u.useEffect(() => se.on("newBall", () => {
      L.getState().setRolloverLanesComplete(0, false), L.getState().setRolloverLanesComplete(1, false), L.getState().setRolloverLanesComplete(2, false);
    }), []), u.useEffect(() => se.on("gameOver", () => {
      L.getState().setRolloverLanesComplete(0, false), L.getState().setRolloverLanesComplete(1, false), L.getState().setRolloverLanesComplete(2, false);
    }), []), u.useEffect(() => se.on("buttonTargetPressed", (e) => {
      const t = [
        $t.LetterB,
        $t.LetterF,
        $t.LetterC,
        $t.LetterM
      ];
      L.getState().setBfcmTargetsComplete(t.indexOf(e.name), true);
    }), []), u.useEffect(() => L.subscribe((e) => e.bfcmTargetsComplete, (e) => {
      e[0] && e[1] && e[2] && e[3] && (he("bfcmLettersComplete", {
        time: performance.now()
      }), L.getState().setBfcmTargetsComplete(0, false), L.getState().setBfcmTargetsComplete(1, false), L.getState().setBfcmTargetsComplete(2, false), L.getState().setBfcmTargetsComplete(3, false));
    }), []), u.useEffect(() => se.on("newBall", () => {
      L.getState().setBfcmTargetsComplete(0, false), L.getState().setBfcmTargetsComplete(1, false), L.getState().setBfcmTargetsComplete(2, false), L.getState().setBfcmTargetsComplete(3, false);
    }), []), u.useEffect(() => se.on("gameOver", () => {
      L.getState().setBfcmTargetsComplete(0, false), L.getState().setBfcmTargetsComplete(1, false), L.getState().setBfcmTargetsComplete(2, false), L.getState().setBfcmTargetsComplete(3, false);
    }), []), u.useEffect(() => Ft.subscribe((e) => e.menuMode, (e) => {
      e === tt.Pinball && he("gameStart", {
        time: performance.now()
      });
    }), []);
    const r = () => {
      L.getState().retailStoresMiniGameCompleted && L.getState().fiveStarMiniGameCompleted && L.getState().cashRegisterMiniGameCompleted && L.getState().boxesMiniGameCompleted && L.getState().podiumMiniGameCompleted && (he("allMiniGamesMissionCompleted", {
        time: performance.now()
      }), L.getState().setAllMiniGamesMissionCompleted(true));
    };
    return u.useEffect(() => se.on("retailStoresMiniGameCompleted", () => {
      L.getState().setRetailStoresMiniGameCompleted(true), L.getState().setSingleMiniGameMissionCompleted(true), r();
    }), []), u.useEffect(() => se.on("fiveStarMiniGameCompleted", () => {
      L.getState().setFiveStarMiniGameCompleted(true), L.getState().setSingleMiniGameMissionCompleted(true), r();
    }), []), u.useEffect(() => se.on("cashRegisterMiniGameCompleted", () => {
      L.getState().setCashRegisterMiniGameCompleted(true), L.getState().setSingleMiniGameMissionCompleted(true), r();
    }), []), u.useEffect(() => se.on("boxesMiniGameCompleted", () => {
      L.getState().setBoxesMiniGameCompleted(true), L.getState().setSingleMiniGameMissionCompleted(true), r();
    }), []), u.useEffect(() => se.on("podiumMiniGameCompleted", () => {
      L.getState().setPodiumMiniGameCompleted(true), L.getState().setSingleMiniGameMissionCompleted(true), r();
    }), []), u.useEffect(() => se.on("gameOver", () => {
      L.getState().setRetailStoresMiniGameCompleted(false), L.getState().setFiveStarMiniGameCompleted(false), L.getState().setCashRegisterMiniGameCompleted(false), L.getState().setBoxesMiniGameCompleted(false), L.getState().setPodiumMiniGameCompleted(false), L.getState().setSingleMiniGameMissionCompleted(false), L.getState().setAllMiniGamesMissionCompleted(false), L.getState().setShopifyLettersMissionCompleted(false), L.getState().setNumShopifyLettersCompleted(0);
    }), []), R.jsx(R.Fragment, {});
  };
  up = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/rapier_wasm2d_bg-D0O05KJI.wasm";
  dp = async (r = {}, e) => {
    let t;
    if (e.startsWith("data:")) {
      const n = e.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") o = Buffer.from(n, "base64");
      else if (typeof atob == "function") {
        const i = atob(n);
        o = new Uint8Array(i.length);
        for (let s = 0; s < i.length; s++) o[s] = i.charCodeAt(s);
      } else throw new Error("Cannot decode base64-encoded data URL");
      t = await WebAssembly.instantiate(o, r);
    } else {
      const n = await fetch(e), o = n.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && o.startsWith("application/wasm")) t = await WebAssembly.instantiateStreaming(n, r);
      else {
        const i = await n.arrayBuffer();
        t = await WebAssembly.instantiate(i, r);
      }
    }
    return t.instance.exports;
  };
  let m;
  function fp(r) {
    m = r;
  }
  const Ze = new Array(128).fill(void 0);
  Ze.push(void 0, null, true, false);
  function Qe(r) {
    return Ze[r];
  }
  let Zo = Ze.length;
  function lt(r) {
    Zo === Ze.length && Ze.push(Ze.length + 1);
    const e = Zo;
    return Zo = Ze[e], Ze[e] = r, e;
  }
  function K0(r, e) {
    try {
      return r.apply(this, e);
    } catch (t) {
      m.__wbindgen_export_0(lt(t));
    }
  }
  const pp = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Td = new pp("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Td.decode();
  let qi = null;
  function _p() {
    return (qi === null || qi.byteLength === 0) && (qi = new Uint8Array(m.memory.buffer)), qi;
  }
  function Pc(r, e) {
    return r = r >>> 0, Td.decode(_p().subarray(r, r + e));
  }
  function Fe(r) {
    return r == null;
  }
  let Zn = null;
  function Nt() {
    return (Zn === null || Zn.buffer.detached === true || Zn.buffer.detached === void 0 && Zn.buffer !== m.memory.buffer) && (Zn = new DataView(m.memory.buffer)), Zn;
  }
  function hp(r) {
    r < 132 || (Ze[r] = Zo, Zo = r);
  }
  function T0(r) {
    const e = Qe(r);
    return hp(r), e;
  }
  RM = function() {
    let r, e;
    try {
      const o = m.__wbindgen_add_to_stack_pointer(-16);
      m.version(o);
      var t = Nt().getInt32(o + 0, true), n = Nt().getInt32(o + 4, true);
      return r = t, e = n, Pc(t, n);
    } finally {
      m.__wbindgen_add_to_stack_pointer(16), m.__wbindgen_export_1(r, e, 1);
    }
  };
  MM = function(r) {
    m.reserve_memory(r);
  };
  function G(r, e) {
    if (!(r instanceof e)) throw new Error(`expected instance of ${e.name}`);
  }
  let pt = 128;
  function Et(r) {
    if (pt == 1) throw new Error("out of js stack");
    return Ze[--pt] = r, pt;
  }
  let Yi = null;
  function mp() {
    return (Yi === null || Yi.byteLength === 0) && (Yi = new Int32Array(m.memory.buffer)), Yi;
  }
  function gp(r, e) {
    return r = r >>> 0, mp().subarray(r / 4, r / 4 + e);
  }
  let Zi = null;
  function xd() {
    return (Zi === null || Zi.byteLength === 0) && (Zi = new Float32Array(m.memory.buffer)), Zi;
  }
  function Pu(r, e) {
    return r = r >>> 0, xd().subarray(r / 4, r / 4 + e);
  }
  let $i = null;
  function Pd() {
    return ($i === null || $i.byteLength === 0) && ($i = new Uint32Array(m.memory.buffer)), $i;
  }
  function wp(r, e) {
    return r = r >>> 0, Pd().subarray(r / 4, r / 4 + e);
  }
  let _r = 0;
  function zs(r, e) {
    const t = e(r.length * 4, 4) >>> 0;
    return Pd().set(r, t / 4), _r = r.length, t;
  }
  function fn(r, e) {
    const t = e(r.length * 4, 4) >>> 0;
    return xd().set(r, t / 4), _r = r.length, t;
  }
  let lr, Ws;
  EM = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    AngX: 2,
    2: "AngX"
  });
  BM = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Generic: 5,
    5: "Generic"
  });
  lr = Object.freeze({
    Ball: 0,
    0: "Ball",
    Cuboid: 1,
    1: "Cuboid",
    Capsule: 2,
    2: "Capsule",
    Segment: 3,
    3: "Segment",
    Polyline: 4,
    4: "Polyline",
    Triangle: 5,
    5: "Triangle",
    TriMesh: 6,
    6: "TriMesh",
    HeightField: 7,
    7: "HeightField",
    Compound: 8,
    8: "Compound",
    ConvexPolygon: 9,
    9: "ConvexPolygon",
    RoundCuboid: 10,
    10: "RoundCuboid",
    RoundTriangle: 11,
    11: "RoundTriangle",
    RoundConvexPolygon: 12,
    12: "RoundConvexPolygon",
    HalfSpace: 13,
    13: "HalfSpace",
    Voxels: 14,
    14: "Voxels"
  });
  Ws = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawbroadphase_free(r >>> 0, 1));
  jn = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(jn.prototype);
      return t.__wbg_ptr = e, Ws.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ws.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawbroadphase_free(e, 0);
    }
    constructor() {
      const e = m.rawbroadphase_new();
      return this.__wbg_ptr = e >>> 0, Ws.register(this, this.__wbg_ptr, this), this;
    }
    castRay(e, t, n, o, i, s, c, l, a, p, f, d) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, X);
        const _ = m.rawbroadphase_castRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s, c, l, Fe(a) ? 4294967297 : a >>> 0, !Fe(p), Fe(p) ? 0 : p, !Fe(f), Fe(f) ? 0 : f, Et(d));
        return _ === 0 ? void 0 : Oc.__wrap(_);
      } finally {
        Ze[pt++] = void 0;
      }
    }
    castRayAndGetNormal(e, t, n, o, i, s, c, l, a, p, f, d) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, X);
        const _ = m.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s, c, l, Fe(a) ? 4294967297 : a >>> 0, !Fe(p), Fe(p) ? 0 : p, !Fe(f), Fe(f) ? 0 : f, Et(d));
        return _ === 0 ? void 0 : q0.__wrap(_);
      } finally {
        Ze[pt++] = void 0;
      }
    }
    intersectionsWithRay(e, t, n, o, i, s, c, l, a, p, f, d, _) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, X), m.rawbroadphase_intersectionsWithRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s, c, Et(l), a, Fe(p) ? 4294967297 : p >>> 0, !Fe(f), Fe(f) ? 0 : f, !Fe(d), Fe(d) ? 0 : d, Et(_));
      } finally {
        Ze[pt++] = void 0, Ze[pt++] = void 0;
      }
    }
    intersectionWithShape(e, t, n, o, i, s, c, l, a, p, f) {
      try {
        const h = m.__wbindgen_add_to_stack_pointer(-16);
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, $e), G(s, He), m.rawbroadphase_intersectionWithShape(h, this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c, Fe(l) ? 4294967297 : l >>> 0, !Fe(a), Fe(a) ? 0 : a, !Fe(p), Fe(p) ? 0 : p, Et(f));
        var d = Nt().getInt32(h + 0, true), _ = Nt().getFloat64(h + 8, true);
        return d === 0 ? void 0 : _;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16), Ze[pt++] = void 0;
      }
    }
    projectPoint(e, t, n, o, i, s, c, l, a, p) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X);
        const f = m.rawbroadphase_projectPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i, s, Fe(c) ? 4294967297 : c >>> 0, !Fe(l), Fe(l) ? 0 : l, !Fe(a), Fe(a) ? 0 : a, Et(p));
        return f === 0 ? void 0 : x0.__wrap(f);
      } finally {
        Ze[pt++] = void 0;
      }
    }
    projectPointAndGetFeature(e, t, n, o, i, s, c, l, a) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X);
        const p = m.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i, Fe(s) ? 4294967297 : s >>> 0, !Fe(c), Fe(c) ? 0 : c, !Fe(l), Fe(l) ? 0 : l, Et(a));
        return p === 0 ? void 0 : x0.__wrap(p);
      } finally {
        Ze[pt++] = void 0;
      }
    }
    intersectionsWithPoint(e, t, n, o, i, s, c, l, a, p) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), m.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, Et(i), s, Fe(c) ? 4294967297 : c >>> 0, !Fe(l), Fe(l) ? 0 : l, !Fe(a), Fe(a) ? 0 : a, Et(p));
      } finally {
        Ze[pt++] = void 0, Ze[pt++] = void 0;
      }
    }
    castShape(e, t, n, o, i, s, c, l, a, p, f, d, _, h, b) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, $e), G(s, X), G(c, He);
        const g = m.rawbroadphase_castShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c.__wbg_ptr, l, a, p, f, Fe(d) ? 4294967297 : d >>> 0, !Fe(_), Fe(_) ? 0 : _, !Fe(h), Fe(h) ? 0 : h, Et(b));
        return g === 0 ? void 0 : Q0.__wrap(g);
      } finally {
        Ze[pt++] = void 0;
      }
    }
    intersectionsWithShape(e, t, n, o, i, s, c, l, a, p, f, d) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, $e), G(s, He), m.rawbroadphase_intersectionsWithShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, Et(c), l, Fe(a) ? 4294967297 : a >>> 0, !Fe(p), Fe(p) ? 0 : p, !Fe(f), Fe(f) ? 0 : f, Et(d));
      } finally {
        Ze[pt++] = void 0, Ze[pt++] = void 0;
      }
    }
    collidersWithAabbIntersectingAabb(e, t, n, o, i, s) {
      try {
        G(e, zt), G(t, Bt), G(n, Lt), G(o, X), G(i, X), m.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, Et(s));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const Fu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawccdsolver_free(r >>> 0, 1));
  Lu = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Fu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawccdsolver_free(e, 0);
    }
    constructor() {
      const e = m.rawccdsolver_new();
      return this.__wbg_ptr = e >>> 0, Fu.register(this, this.__wbg_ptr, this), this;
    }
  };
  const Du = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcharactercollision_free(r >>> 0, 1));
  bp = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Du.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcharactercollision_free(e, 0);
    }
    constructor() {
      const e = m.rawcharactercollision_new();
      return this.__wbg_ptr = e >>> 0, Du.register(this, this.__wbg_ptr, this), this;
    }
    handle() {
      return m.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
      const e = m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return X.__wrap(e);
    }
    translationDeltaRemaining() {
      const e = m.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
      return X.__wrap(e);
    }
    toi() {
      return m.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
      const e = m.rawcharactercollision_worldWitness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    worldWitness2() {
      const e = m.rawcharactercollision_worldWitness2(this.__wbg_ptr);
      return X.__wrap(e);
    }
    worldNormal1() {
      const e = m.rawcharactercollision_worldNormal1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    worldNormal2() {
      const e = m.rawcharactercollision_worldNormal2(this.__wbg_ptr);
      return X.__wrap(e);
    }
  };
  const Js = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcolliderset_free(r >>> 0, 1));
  Lt = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Lt.prototype);
      return t.__wbg_ptr = e, Js.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Js.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcolliderset_free(e, 0);
    }
    coTranslation(e) {
      const t = m.rawcolliderset_coTranslation(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    coRotation(e) {
      const t = m.rawcolliderset_coRotation(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    coTranslationWrtParent(e) {
      const t = m.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    coRotationWrtParent(e) {
      const t = m.rawcolliderset_coRotationWrtParent(this.__wbg_ptr, e);
      return t === 0 ? void 0 : $e.__wrap(t);
    }
    coSetTranslation(e, t, n) {
      m.rawcolliderset_coSetTranslation(this.__wbg_ptr, e, t, n);
    }
    coSetTranslationWrtParent(e, t, n) {
      m.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, e, t, n);
    }
    coSetRotation(e, t) {
      m.rawcolliderset_coSetRotation(this.__wbg_ptr, e, t);
    }
    coSetRotationWrtParent(e, t) {
      m.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, e, t);
    }
    coIsSensor(e) {
      return m.rawcolliderset_coIsSensor(this.__wbg_ptr, e) !== 0;
    }
    coShapeType(e) {
      return m.rawcolliderset_coShapeType(this.__wbg_ptr, e);
    }
    coHalfspaceNormal(e) {
      const t = m.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    coHalfExtents(e) {
      const t = m.rawcolliderset_coHalfExtents(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    coSetHalfExtents(e, t) {
      G(t, X), m.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, e, t.__wbg_ptr);
    }
    coRadius(e) {
      const t = m.rawcolliderset_coRadius(this.__wbg_ptr, e);
      return t === 4294967297 ? void 0 : t;
    }
    coSetRadius(e, t) {
      m.rawcolliderset_coSetRadius(this.__wbg_ptr, e, t);
    }
    coHalfHeight(e) {
      const t = m.rawcolliderset_coHalfHeight(this.__wbg_ptr, e);
      return t === 4294967297 ? void 0 : t;
    }
    coSetHalfHeight(e, t) {
      m.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, e, t);
    }
    coRoundRadius(e) {
      const t = m.rawcolliderset_coRoundRadius(this.__wbg_ptr, e);
      return t === 4294967297 ? void 0 : t;
    }
    coSetRoundRadius(e, t) {
      m.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, e, t);
    }
    coVoxelData(e) {
      try {
        const o = m.__wbindgen_add_to_stack_pointer(-16);
        m.rawcolliderset_coVoxelData(o, this.__wbg_ptr, e);
        var t = Nt().getInt32(o + 0, true), n = Nt().getInt32(o + 4, true);
        let i;
        return t !== 0 && (i = gp(t, n).slice(), m.__wbindgen_export_1(t, n * 4, 4)), i;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coVoxelSize(e) {
      const t = m.rawcolliderset_coVoxelSize(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    coSetVoxel(e, t, n, o) {
      m.rawcolliderset_coSetVoxel(this.__wbg_ptr, e, t, n, o);
    }
    coPropagateVoxelChange(e, t, n, o, i, s) {
      m.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr, e, t, n, o, i, s);
    }
    coCombineVoxelStates(e, t, n, o) {
      m.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr, e, t, n, o);
    }
    coVertices(e) {
      try {
        const o = m.__wbindgen_add_to_stack_pointer(-16);
        m.rawcolliderset_coVertices(o, this.__wbg_ptr, e);
        var t = Nt().getInt32(o + 0, true), n = Nt().getInt32(o + 4, true);
        let i;
        return t !== 0 && (i = Pu(t, n).slice(), m.__wbindgen_export_1(t, n * 4, 4)), i;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coIndices(e) {
      try {
        const o = m.__wbindgen_add_to_stack_pointer(-16);
        m.rawcolliderset_coIndices(o, this.__wbg_ptr, e);
        var t = Nt().getInt32(o + 0, true), n = Nt().getInt32(o + 4, true);
        let i;
        return t !== 0 && (i = wp(t, n).slice(), m.__wbindgen_export_1(t, n * 4, 4)), i;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coTriMeshFlags(e) {
      const t = m.rawcolliderset_coTriMeshFlags(this.__wbg_ptr, e);
      return t === 4294967297 ? void 0 : t;
    }
    coHeightfieldHeights(e) {
      try {
        const o = m.__wbindgen_add_to_stack_pointer(-16);
        m.rawcolliderset_coHeightfieldHeights(o, this.__wbg_ptr, e);
        var t = Nt().getInt32(o + 0, true), n = Nt().getInt32(o + 4, true);
        let i;
        return t !== 0 && (i = Pu(t, n).slice(), m.__wbindgen_export_1(t, n * 4, 4)), i;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coHeightfieldScale(e) {
      const t = m.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    coParent(e) {
      try {
        const o = m.__wbindgen_add_to_stack_pointer(-16);
        m.rawcolliderset_coParent(o, this.__wbg_ptr, e);
        var t = Nt().getInt32(o + 0, true), n = Nt().getFloat64(o + 8, true);
        return t === 0 ? void 0 : n;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    coSetEnabled(e, t) {
      m.rawcolliderset_coSetEnabled(this.__wbg_ptr, e, t);
    }
    coIsEnabled(e) {
      return m.rawcolliderset_coIsEnabled(this.__wbg_ptr, e) !== 0;
    }
    coSetContactSkin(e, t) {
      m.rawcolliderset_coSetContactSkin(this.__wbg_ptr, e, t);
    }
    coContactSkin(e) {
      return m.rawcolliderset_coContactSkin(this.__wbg_ptr, e);
    }
    coFriction(e) {
      return m.rawcolliderset_coFriction(this.__wbg_ptr, e);
    }
    coRestitution(e) {
      return m.rawcolliderset_coRestitution(this.__wbg_ptr, e);
    }
    coDensity(e) {
      return m.rawcolliderset_coDensity(this.__wbg_ptr, e);
    }
    coMass(e) {
      return m.rawcolliderset_coMass(this.__wbg_ptr, e);
    }
    coVolume(e) {
      return m.rawcolliderset_coVolume(this.__wbg_ptr, e);
    }
    coCollisionGroups(e) {
      return m.rawcolliderset_coCollisionGroups(this.__wbg_ptr, e) >>> 0;
    }
    coSolverGroups(e) {
      return m.rawcolliderset_coSolverGroups(this.__wbg_ptr, e) >>> 0;
    }
    coActiveHooks(e) {
      return m.rawcolliderset_coActiveHooks(this.__wbg_ptr, e) >>> 0;
    }
    coActiveCollisionTypes(e) {
      return m.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, e);
    }
    coActiveEvents(e) {
      return m.rawcolliderset_coActiveEvents(this.__wbg_ptr, e) >>> 0;
    }
    coContactForceEventThreshold(e) {
      return m.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, e);
    }
    coContainsPoint(e, t) {
      return G(t, X), m.rawcolliderset_coContainsPoint(this.__wbg_ptr, e, t.__wbg_ptr) !== 0;
    }
    coCastShape(e, t, n, o, i, s, c, l, a) {
      G(t, X), G(n, He), G(o, X), G(i, $e), G(s, X);
      const p = m.rawcolliderset_coCastShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c, l, a);
      return p === 0 ? void 0 : Z0.__wrap(p);
    }
    coCastCollider(e, t, n, o, i, s, c) {
      G(t, X), G(o, X);
      const l = m.rawcolliderset_coCastCollider(this.__wbg_ptr, e, t.__wbg_ptr, n, o.__wbg_ptr, i, s, c);
      return l === 0 ? void 0 : Q0.__wrap(l);
    }
    coIntersectsShape(e, t, n, o) {
      return G(t, He), G(n, X), G(o, $e), m.rawcolliderset_coIntersectsShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr) !== 0;
    }
    coContactShape(e, t, n, o, i) {
      G(t, He), G(n, X), G(o, $e);
      const s = m.rawcolliderset_coContactShape(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i);
      return s === 0 ? void 0 : ci.__wrap(s);
    }
    coContactCollider(e, t, n) {
      const o = m.rawcolliderset_coContactCollider(this.__wbg_ptr, e, t, n);
      return o === 0 ? void 0 : ci.__wrap(o);
    }
    coProjectPoint(e, t, n) {
      G(t, X);
      const o = m.rawcolliderset_coProjectPoint(this.__wbg_ptr, e, t.__wbg_ptr, n);
      return X0.__wrap(o);
    }
    coIntersectsRay(e, t, n, o) {
      return G(t, X), G(n, X), m.rawcolliderset_coIntersectsRay(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o) !== 0;
    }
    coCastRay(e, t, n, o, i) {
      return G(t, X), G(n, X), m.rawcolliderset_coCastRay(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o, i);
    }
    coCastRayAndGetNormal(e, t, n, o, i) {
      G(t, X), G(n, X);
      const s = m.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o, i);
      return s === 0 ? void 0 : Y0.__wrap(s);
    }
    coSetSensor(e, t) {
      m.rawcolliderset_coSetSensor(this.__wbg_ptr, e, t);
    }
    coSetRestitution(e, t) {
      m.rawcolliderset_coSetRestitution(this.__wbg_ptr, e, t);
    }
    coSetFriction(e, t) {
      m.rawcolliderset_coSetFriction(this.__wbg_ptr, e, t);
    }
    coFrictionCombineRule(e) {
      return m.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, e) >>> 0;
    }
    coSetFrictionCombineRule(e, t) {
      m.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, e, t);
    }
    coRestitutionCombineRule(e) {
      return m.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, e) >>> 0;
    }
    coSetRestitutionCombineRule(e, t) {
      m.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, e, t);
    }
    coSetCollisionGroups(e, t) {
      m.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, e, t);
    }
    coSetSolverGroups(e, t) {
      m.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, e, t);
    }
    coSetActiveHooks(e, t) {
      m.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, e, t);
    }
    coSetActiveEvents(e, t) {
      m.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, e, t);
    }
    coSetActiveCollisionTypes(e, t) {
      m.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, e, t);
    }
    coSetShape(e, t) {
      G(t, He), m.rawcolliderset_coSetShape(this.__wbg_ptr, e, t.__wbg_ptr);
    }
    coSetContactForceEventThreshold(e, t) {
      m.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, e, t);
    }
    coSetDensity(e, t) {
      m.rawcolliderset_coSetDensity(this.__wbg_ptr, e, t);
    }
    coSetMass(e, t) {
      m.rawcolliderset_coSetMass(this.__wbg_ptr, e, t);
    }
    coSetMassProperties(e, t, n, o) {
      G(n, X), m.rawcolliderset_coSetMassProperties(this.__wbg_ptr, e, t, n.__wbg_ptr, o);
    }
    constructor() {
      const e = m.rawcolliderset_new();
      return this.__wbg_ptr = e >>> 0, Js.register(this, this.__wbg_ptr, this), this;
    }
    len() {
      return m.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(e) {
      return m.rawcolliderset_contains(this.__wbg_ptr, e) !== 0;
    }
    createCollider(e, t, n, o, i, s, c, l, a, p, f, d, _, h, b, g, y, A, C, S, B, T, E, M) {
      try {
        const D = m.__wbindgen_add_to_stack_pointer(-16);
        G(t, He), G(n, X), G(o, $e), G(c, X), G(M, Bt), m.rawcolliderset_createCollider(D, this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i, s, c.__wbg_ptr, l, a, p, f, d, _, h, b, g, y, A, C, S, B, T, E, M.__wbg_ptr);
        var x = Nt().getInt32(D + 0, true), P = Nt().getFloat64(D + 8, true);
        return x === 0 ? void 0 : P;
      } finally {
        m.__wbindgen_add_to_stack_pointer(16);
      }
    }
    remove(e, t, n, o) {
      G(t, Mn), G(n, Bt), m.rawcolliderset_remove(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o);
    }
    isHandleValid(e) {
      return m.rawcolliderset_contains(this.__wbg_ptr, e) !== 0;
    }
    forEachColliderHandle(e) {
      try {
        m.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const Gu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcollidershapecasthit_free(r >>> 0, 1));
  class Q0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Q0.prototype);
      return t.__wbg_ptr = e, Gu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Gu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcollidershapecasthit_free(e, 0);
    }
    colliderHandle() {
      return m.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
    }
    time_of_impact() {
      return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
      const e = m.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    witness2() {
      const e = m.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal1() {
      const e = m.rawcollidershapecasthit_normal1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal2() {
      const e = m.rawcollidershapecasthit_normal2(this.__wbg_ptr);
      return X.__wrap(e);
    }
  }
  const Ou = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcontactforceevent_free(r >>> 0, 1));
  class Fc {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Fc.prototype);
      return t.__wbg_ptr = e, Ou.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ou.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcontactforceevent_free(e, 0);
    }
    collider1() {
      return m.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
    }
    collider2() {
      return m.rawcontactforceevent_collider2(this.__wbg_ptr);
    }
    total_force() {
      const e = m.rawcontactforceevent_total_force(this.__wbg_ptr);
      return X.__wrap(e);
    }
    total_force_magnitude() {
      return m.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
      const e = m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return X.__wrap(e);
    }
    max_force_magnitude() {
      return m.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
  }
  const Hu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcontactmanifold_free(r >>> 0, 1));
  class Lc {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Lc.prototype);
      return t.__wbg_ptr = e, Hu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Hu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcontactmanifold_free(e, 0);
    }
    normal() {
      const e = m.rawcontactmanifold_normal(this.__wbg_ptr);
      return X.__wrap(e);
    }
    local_n1() {
      const e = m.rawcontactmanifold_local_n1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    local_n2() {
      const e = m.rawcontactmanifold_local_n2(this.__wbg_ptr);
      return X.__wrap(e);
    }
    subshape1() {
      return m.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
    }
    subshape2() {
      return m.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
    }
    num_contacts() {
      return m.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
    }
    contact_local_p1(e) {
      const t = m.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    contact_local_p2(e) {
      const t = m.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    contact_dist(e) {
      return m.rawcontactmanifold_contact_dist(this.__wbg_ptr, e);
    }
    contact_fid1(e) {
      return m.rawcontactmanifold_contact_fid1(this.__wbg_ptr, e) >>> 0;
    }
    contact_fid2(e) {
      return m.rawcontactmanifold_contact_fid2(this.__wbg_ptr, e) >>> 0;
    }
    contact_impulse(e) {
      return m.rawcontactmanifold_contact_impulse(this.__wbg_ptr, e);
    }
    contact_tangent_impulse(e) {
      return m.rawcontactmanifold_contact_tangent_impulse(this.__wbg_ptr, e);
    }
    num_solver_contacts() {
      return m.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(e) {
      const t = m.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, e);
      return t === 0 ? void 0 : X.__wrap(t);
    }
    solver_contact_dist(e) {
      return m.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, e);
    }
    solver_contact_friction(e) {
      return m.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, e);
    }
    solver_contact_restitution(e) {
      return m.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, e);
    }
    solver_contact_tangent_velocity(e) {
      const t = m.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
  }
  const ku = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawcontactpair_free(r >>> 0, 1));
  class Dc {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Dc.prototype);
      return t.__wbg_ptr = e, ku.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ku.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawcontactpair_free(e, 0);
    }
    collider1() {
      return m.rawcontactpair_collider1(this.__wbg_ptr);
    }
    collider2() {
      return m.rawcontactpair_collider2(this.__wbg_ptr);
    }
    numContactManifolds() {
      return m.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
    }
    contactManifold(e) {
      const t = m.rawcontactpair_contactManifold(this.__wbg_ptr, e);
      return t === 0 ? void 0 : Lc.__wrap(t);
    }
  }
  const ju = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawdebugrenderpipeline_free(r >>> 0, 1));
  IM = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, ju.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawdebugrenderpipeline_free(e, 0);
    }
    constructor() {
      const e = m.rawdebugrenderpipeline_new();
      return this.__wbg_ptr = e >>> 0, ju.register(this, this.__wbg_ptr, this), this;
    }
    vertices() {
      const e = m.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
      return T0(e);
    }
    colors() {
      const e = m.rawdebugrenderpipeline_colors(this.__wbg_ptr);
      return T0(e);
    }
    render(e, t, n, o, i, s, c) {
      try {
        G(e, Bt), G(t, Lt), G(n, Rn), G(o, En), G(i, zt), m.rawdebugrenderpipeline_render(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s, Et(c));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const Uu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawdeserializedworld_free(r >>> 0, 1));
  class Gc {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Gc.prototype);
      return t.__wbg_ptr = e, Uu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Uu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawdeserializedworld_free(e, 0);
    }
    takeGravity() {
      const e = m.rawdeserializedworld_takeGravity(this.__wbg_ptr);
      return e === 0 ? void 0 : X.__wrap(e);
    }
    takeIntegrationParameters() {
      const e = m.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
      return e === 0 ? void 0 : bo.__wrap(e);
    }
    takeIslandManager() {
      const e = m.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
      return e === 0 ? void 0 : Mn.__wrap(e);
    }
    takeBroadPhase() {
      const e = m.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
      return e === 0 ? void 0 : jn.__wrap(e);
    }
    takeNarrowPhase() {
      const e = m.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
      return e === 0 ? void 0 : zt.__wrap(e);
    }
    takeBodies() {
      const e = m.rawdeserializedworld_takeBodies(this.__wbg_ptr);
      return e === 0 ? void 0 : Bt.__wrap(e);
    }
    takeColliders() {
      const e = m.rawdeserializedworld_takeColliders(this.__wbg_ptr);
      return e === 0 ? void 0 : Lt.__wrap(e);
    }
    takeImpulseJoints() {
      const e = m.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
      return e === 0 ? void 0 : Rn.__wrap(e);
    }
    takeMultibodyJoints() {
      const e = m.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
      return e === 0 ? void 0 : En.__wrap(e);
    }
  }
  const Nu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_raweventqueue_free(r >>> 0, 1));
  class Fd {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Nu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_raweventqueue_free(e, 0);
    }
    constructor(e) {
      const t = m.raweventqueue_new(e);
      return this.__wbg_ptr = t >>> 0, Nu.register(this, this.__wbg_ptr, this), this;
    }
    drainCollisionEvents(e) {
      try {
        m.raweventqueue_drainCollisionEvents(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    drainContactForceEvents(e) {
      try {
        m.raweventqueue_drainContactForceEvents(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    clear() {
      m.raweventqueue_clear(this.__wbg_ptr);
    }
  }
  const zu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawgenericjoint_free(r >>> 0, 1));
  rn = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(rn.prototype);
      return t.__wbg_ptr = e, zu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, zu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawgenericjoint_free(e, 0);
    }
    static spring(e, t, n, o, i) {
      G(o, X), G(i, X);
      const s = m.rawgenericjoint_spring(e, t, n, o.__wbg_ptr, i.__wbg_ptr);
      return rn.__wrap(s);
    }
    static rope(e, t, n) {
      G(t, X), G(n, X);
      const o = m.rawgenericjoint_rope(e, t.__wbg_ptr, n.__wbg_ptr);
      return rn.__wrap(o);
    }
    static prismatic(e, t, n, o, i, s) {
      G(e, X), G(t, X), G(n, X);
      const c = m.rawgenericjoint_prismatic(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o, i, s);
      return c === 0 ? void 0 : rn.__wrap(c);
    }
    static fixed(e, t, n, o) {
      G(e, X), G(t, $e), G(n, X), G(o, $e);
      const i = m.rawgenericjoint_fixed(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr);
      return rn.__wrap(i);
    }
    static revolute(e, t) {
      G(e, X), G(t, X);
      const n = m.rawgenericjoint_revolute(e.__wbg_ptr, t.__wbg_ptr);
      return n === 0 ? void 0 : rn.__wrap(n);
    }
  };
  const Vs = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawimpulsejointset_free(r >>> 0, 1));
  Rn = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Rn.prototype);
      return t.__wbg_ptr = e, Vs.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Vs.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawimpulsejointset_free(e, 0);
    }
    jointType(e) {
      return m.rawimpulsejointset_jointType(this.__wbg_ptr, e);
    }
    jointBodyHandle1(e) {
      return m.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, e);
    }
    jointBodyHandle2(e) {
      return m.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, e);
    }
    jointFrameX1(e) {
      const t = m.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    jointFrameX2(e) {
      const t = m.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    jointAnchor1(e) {
      const t = m.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    jointAnchor2(e) {
      const t = m.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    jointSetAnchor1(e, t) {
      G(t, X), m.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, e, t.__wbg_ptr);
    }
    jointSetAnchor2(e, t) {
      G(t, X), m.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, e, t.__wbg_ptr);
    }
    jointContactsEnabled(e) {
      return m.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, e) !== 0;
    }
    jointSetContactsEnabled(e, t) {
      m.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, e, t);
    }
    jointLimitsEnabled(e, t) {
      return m.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, e, t) !== 0;
    }
    jointLimitsMin(e, t) {
      return m.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, e, t);
    }
    jointLimitsMax(e, t) {
      return m.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, e, t);
    }
    jointSetLimits(e, t, n, o) {
      m.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, e, t, n, o);
    }
    jointConfigureMotorModel(e, t, n) {
      m.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, e, t, n);
    }
    jointConfigureMotorVelocity(e, t, n, o) {
      m.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, e, t, n, o);
    }
    jointConfigureMotorPosition(e, t, n, o, i) {
      m.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, e, t, n, o, i);
    }
    jointConfigureMotor(e, t, n, o, i, s) {
      m.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, e, t, n, o, i, s);
    }
    constructor() {
      const e = m.rawimpulsejointset_new();
      return this.__wbg_ptr = e >>> 0, Vs.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(e, t, n, o) {
      return G(e, rn), m.rawimpulsejointset_createJoint(this.__wbg_ptr, e.__wbg_ptr, t, n, o);
    }
    remove(e, t) {
      m.rawimpulsejointset_remove(this.__wbg_ptr, e, t);
    }
    len() {
      return m.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    contains(e) {
      return m.rawimpulsejointset_contains(this.__wbg_ptr, e) !== 0;
    }
    forEachJointHandle(e) {
      try {
        m.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(e, t) {
      try {
        m.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, e, Et(t));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const Ks = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawintegrationparameters_free(r >>> 0, 1));
  bo = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(bo.prototype);
      return t.__wbg_ptr = e, Ks.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ks.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawintegrationparameters_free(e, 0);
    }
    constructor() {
      const e = m.rawintegrationparameters_new();
      return this.__wbg_ptr = e >>> 0, Ks.register(this, this.__wbg_ptr, this), this;
    }
    get dt() {
      return m.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
      return m.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
      return m.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    get normalizedPredictionDistance() {
      return m.rawcharactercollision_toi(this.__wbg_ptr);
    }
    get numSolverIterations() {
      return m.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
    }
    get numInternalPgsIterations() {
      return m.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr) >>> 0;
    }
    get minIslandSize() {
      return m.rawintegrationparameters_minIslandSize(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
      return m.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
      return m.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
    }
    set dt(e) {
      m.rawintegrationparameters_set_dt(this.__wbg_ptr, e);
    }
    set contact_natural_frequency(e) {
      m.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr, e);
    }
    set normalizedAllowedLinearError(e) {
      m.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, e);
    }
    set normalizedPredictionDistance(e) {
      m.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, e);
    }
    set numSolverIterations(e) {
      m.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, e);
    }
    set numInternalPgsIterations(e) {
      m.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr, e);
    }
    set minIslandSize(e) {
      m.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, e);
    }
    set maxCcdSubsteps(e) {
      m.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, e);
    }
    set lengthUnit(e) {
      m.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, e);
    }
  };
  const Qs = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawislandmanager_free(r >>> 0, 1));
  Mn = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Mn.prototype);
      return t.__wbg_ptr = e, Qs.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Qs.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawislandmanager_free(e, 0);
    }
    constructor() {
      const e = m.rawislandmanager_new();
      return this.__wbg_ptr = e >>> 0, Qs.register(this, this.__wbg_ptr, this), this;
    }
    forEachActiveRigidBodyHandle(e) {
      try {
        m.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const Wu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawkinematiccharactercontroller_free(r >>> 0, 1));
  TM = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Wu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawkinematiccharactercontroller_free(e, 0);
    }
    constructor(e) {
      const t = m.rawkinematiccharactercontroller_new(e);
      return this.__wbg_ptr = t >>> 0, Wu.register(this, this.__wbg_ptr, this), this;
    }
    up() {
      const e = m.rawcollidershapecasthit_normal2(this.__wbg_ptr);
      return X.__wrap(e);
    }
    setUp(e) {
      G(e, X), m.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, e.__wbg_ptr);
    }
    normalNudgeFactor() {
      return m.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    }
    setNormalNudgeFactor(e) {
      m.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, e);
    }
    offset() {
      return m.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    setOffset(e) {
      m.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, e);
    }
    slideEnabled() {
      return m.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
    }
    setSlideEnabled(e) {
      m.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, e);
    }
    autostepMaxHeight() {
      const e = m.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
    autostepMinWidth() {
      const e = m.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
    autostepIncludesDynamicBodies() {
      const e = m.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
      return e === 16777215 ? void 0 : e !== 0;
    }
    autostepEnabled() {
      return m.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
    }
    enableAutostep(e, t, n) {
      m.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, e, t, n);
    }
    disableAutostep() {
      m.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
      return m.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
    }
    setMaxSlopeClimbAngle(e) {
      m.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, e);
    }
    minSlopeSlideAngle() {
      return m.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    }
    setMinSlopeSlideAngle(e) {
      m.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, e);
    }
    snapToGroundDistance() {
      const e = m.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
    enableSnapToGround(e) {
      m.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, e);
    }
    disableSnapToGround() {
      m.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
      return m.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
    }
    computeColliderMovement(e, t, n, o, i, s, c, l, a, p, f, d) {
      try {
        G(t, jn), G(n, zt), G(o, Bt), G(i, Lt), G(c, X), m.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s, c.__wbg_ptr, l, Fe(a) ? 4294967297 : Math.fround(a), p, Fe(f) ? 4294967297 : f >>> 0, Et(d));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    computedMovement() {
      const e = m.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
      return X.__wrap(e);
    }
    computedGrounded() {
      return m.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
    }
    numComputedCollisions() {
      return m.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
    }
    computedCollision(e, t) {
      return G(t, bp), m.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, e, t.__wbg_ptr) !== 0;
    }
  };
  const Xs = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawmultibodyjointset_free(r >>> 0, 1));
  En = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(En.prototype);
      return t.__wbg_ptr = e, Xs.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Xs.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawmultibodyjointset_free(e, 0);
    }
    jointType(e) {
      return m.rawmultibodyjointset_jointType(this.__wbg_ptr, e);
    }
    jointFrameX1(e) {
      const t = m.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    jointFrameX2(e) {
      const t = m.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    jointAnchor1(e) {
      const t = m.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    jointAnchor2(e) {
      const t = m.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    jointContactsEnabled(e) {
      return m.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, e) !== 0;
    }
    jointSetContactsEnabled(e, t) {
      m.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, e, t);
    }
    jointLimitsEnabled(e, t) {
      return m.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, e, t) !== 0;
    }
    jointLimitsMin(e, t) {
      return m.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, e, t);
    }
    jointLimitsMax(e, t) {
      return m.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, e, t);
    }
    constructor() {
      const e = m.rawmultibodyjointset_new();
      return this.__wbg_ptr = e >>> 0, Xs.register(this, this.__wbg_ptr, this), this;
    }
    createJoint(e, t, n, o) {
      return G(e, rn), m.rawmultibodyjointset_createJoint(this.__wbg_ptr, e.__wbg_ptr, t, n, o);
    }
    remove(e, t) {
      m.rawmultibodyjointset_remove(this.__wbg_ptr, e, t);
    }
    contains(e) {
      return m.rawmultibodyjointset_contains(this.__wbg_ptr, e) !== 0;
    }
    forEachJointHandle(e) {
      try {
        m.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    forEachJointAttachedToRigidBody(e, t) {
      try {
        m.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, e, Et(t));
      } finally {
        Ze[pt++] = void 0;
      }
    }
  };
  const qs = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawnarrowphase_free(r >>> 0, 1));
  zt = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(zt.prototype);
      return t.__wbg_ptr = e, qs.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, qs.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawnarrowphase_free(e, 0);
    }
    constructor() {
      const e = m.rawnarrowphase_new();
      return this.__wbg_ptr = e >>> 0, qs.register(this, this.__wbg_ptr, this), this;
    }
    contact_pairs_with(e, t) {
      m.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, e, lt(t));
    }
    contact_pair(e, t) {
      const n = m.rawnarrowphase_contact_pair(this.__wbg_ptr, e, t);
      return n === 0 ? void 0 : Dc.__wrap(n);
    }
    intersection_pairs_with(e, t) {
      m.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, e, lt(t));
    }
    intersection_pair(e, t) {
      return m.rawnarrowphase_intersection_pair(this.__wbg_ptr, e, t) !== 0;
    }
  };
  const Ju = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawphysicspipeline_free(r >>> 0, 1));
  xM = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ju.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawphysicspipeline_free(e, 0);
    }
    constructor() {
      const e = m.rawphysicspipeline_new();
      return this.__wbg_ptr = e >>> 0, Ju.register(this, this.__wbg_ptr, this), this;
    }
    set_profiler_enabled(e) {
      m.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr, e);
    }
    is_profiler_enabled() {
      return m.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr) !== 0;
    }
    timing_step() {
      return m.rawphysicspipeline_timing_step(this.__wbg_ptr);
    }
    timing_collision_detection() {
      return m.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr);
    }
    timing_broad_phase() {
      return m.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr);
    }
    timing_narrow_phase() {
      return m.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr);
    }
    timing_solver() {
      return m.rawphysicspipeline_timing_solver(this.__wbg_ptr);
    }
    timing_velocity_assembly() {
      return m.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr);
    }
    timing_velocity_resolution() {
      return m.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr);
    }
    timing_velocity_update() {
      return m.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr);
    }
    timing_velocity_writeback() {
      return m.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr);
    }
    timing_ccd() {
      return m.rawphysicspipeline_timing_ccd(this.__wbg_ptr);
    }
    timing_ccd_toi_computation() {
      return m.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr);
    }
    timing_ccd_broad_phase() {
      return m.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr);
    }
    timing_ccd_narrow_phase() {
      return m.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr);
    }
    timing_ccd_solver() {
      return m.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr);
    }
    timing_island_construction() {
      return m.rawphysicspipeline_timing_island_construction(this.__wbg_ptr);
    }
    timing_user_changes() {
      return m.rawphysicspipeline_timing_user_changes(this.__wbg_ptr);
    }
    step(e, t, n, o, i, s, c, l, a, p) {
      G(e, X), G(t, bo), G(n, Mn), G(o, jn), G(i, zt), G(s, Bt), G(c, Lt), G(l, Rn), G(a, En), G(p, Lu), m.rawphysicspipeline_step(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, a.__wbg_ptr, p.__wbg_ptr);
    }
    stepWithEvents(e, t, n, o, i, s, c, l, a, p, f, d, _, h) {
      G(e, X), G(t, bo), G(n, Mn), G(o, jn), G(i, zt), G(s, Bt), G(c, Lt), G(l, Rn), G(a, En), G(p, Lu), G(f, Fd), m.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, a.__wbg_ptr, p.__wbg_ptr, f.__wbg_ptr, lt(d), lt(_), lt(h));
    }
  };
  const Vu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawpidcontroller_free(r >>> 0, 1));
  PM = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Vu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawpidcontroller_free(e, 0);
    }
    constructor(e, t, n, o) {
      const i = m.rawpidcontroller_new(e, t, n, o);
      return this.__wbg_ptr = i >>> 0, Vu.register(this, this.__wbg_ptr, this), this;
    }
    set_kp(e, t) {
      m.rawpidcontroller_set_kp(this.__wbg_ptr, e, t);
    }
    set_ki(e, t) {
      m.rawpidcontroller_set_ki(this.__wbg_ptr, e, t);
    }
    set_kd(e, t) {
      m.rawpidcontroller_set_kd(this.__wbg_ptr, e, t);
    }
    set_axes_mask(e) {
      m.rawpidcontroller_set_axes_mask(this.__wbg_ptr, e);
    }
    reset_integrals() {
      m.rawpidcontroller_reset_integrals(this.__wbg_ptr);
    }
    apply_linear_correction(e, t, n, o, i) {
      G(t, Bt), G(o, X), G(i, X), m.rawpidcontroller_apply_linear_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, o.__wbg_ptr, i.__wbg_ptr);
    }
    apply_angular_correction(e, t, n, o, i) {
      G(t, Bt), m.rawpidcontroller_apply_angular_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, o, i);
    }
    linear_correction(e, t, n, o, i) {
      G(t, Bt), G(o, X), G(i, X);
      const s = m.rawpidcontroller_linear_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, o.__wbg_ptr, i.__wbg_ptr);
      return X.__wrap(s);
    }
    angular_correction(e, t, n, o, i) {
      return G(t, Bt), m.rawpidcontroller_angular_correction(this.__wbg_ptr, e, t.__wbg_ptr, n, o, i);
    }
  };
  const Ku = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawpointcolliderprojection_free(r >>> 0, 1));
  class x0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(x0.prototype);
      return t.__wbg_ptr = e, Ku.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ku.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawpointcolliderprojection_free(e, 0);
    }
    colliderHandle() {
      return m.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    point() {
      const e = m.rawpointcolliderprojection_point(this.__wbg_ptr);
      return X.__wrap(e);
    }
    isInside() {
      return m.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
    }
    featureType() {
      return m.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const e = m.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
  }
  const Qu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawpointprojection_free(r >>> 0, 1));
  class X0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(X0.prototype);
      return t.__wbg_ptr = e, Qu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Qu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawpointprojection_free(e, 0);
    }
    point() {
      const e = m.rawpointprojection_point(this.__wbg_ptr);
      return X.__wrap(e);
    }
    isInside() {
      return m.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
  }
  const Xu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawraycolliderhit_free(r >>> 0, 1));
  class Oc {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Oc.prototype);
      return t.__wbg_ptr = e, Xu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Xu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawraycolliderhit_free(e, 0);
    }
    colliderHandle() {
      return m.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
    }
    timeOfImpact() {
      return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
  }
  const qu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawraycolliderintersection_free(r >>> 0, 1));
  class q0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(q0.prototype);
      return t.__wbg_ptr = e, qu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, qu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawraycolliderintersection_free(e, 0);
    }
    colliderHandle() {
      return m.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
      const e = m.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    time_of_impact() {
      return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return m.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const e = m.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
  }
  const Yu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawrayintersection_free(r >>> 0, 1));
  class Y0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Y0.prototype);
      return t.__wbg_ptr = e, Yu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Yu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawrayintersection_free(e, 0);
    }
    normal() {
      const e = m.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    time_of_impact() {
      return m.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
      return m.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
      const e = m.rawpointcolliderprojection_featureId(this.__wbg_ptr);
      return e === 4294967297 ? void 0 : e;
    }
  }
  const Ys = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawrigidbodyset_free(r >>> 0, 1));
  Bt = class {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Bt.prototype);
      return t.__wbg_ptr = e, Ys.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Ys.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawrigidbodyset_free(e, 0);
    }
    rbTranslation(e) {
      const t = m.rawrigidbodyset_rbTranslation(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbRotation(e) {
      const t = m.rawrigidbodyset_rbRotation(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    rbSleep(e) {
      m.rawrigidbodyset_rbSleep(this.__wbg_ptr, e);
    }
    rbIsSleeping(e) {
      return m.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, e) !== 0;
    }
    rbIsMoving(e) {
      return m.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, e) !== 0;
    }
    rbNextTranslation(e) {
      const t = m.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbNextRotation(e) {
      const t = m.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, e);
      return $e.__wrap(t);
    }
    rbSetTranslation(e, t, n, o) {
      m.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, e, t, n, o);
    }
    rbSetRotation(e, t, n) {
      m.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, e, t, n);
    }
    rbSetLinvel(e, t, n) {
      G(t, X), m.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, e, t.__wbg_ptr, n);
    }
    rbSetAngvel(e, t, n) {
      m.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, e, t, n);
    }
    rbSetNextKinematicTranslation(e, t, n) {
      m.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, e, t, n);
    }
    rbSetNextKinematicRotation(e, t) {
      m.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, e, t);
    }
    rbRecomputeMassPropertiesFromColliders(e, t) {
      G(t, Lt), m.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, e, t.__wbg_ptr);
    }
    rbSetAdditionalMass(e, t, n) {
      m.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, e, t, n);
    }
    rbSetAdditionalMassProperties(e, t, n, o, i) {
      G(n, X), m.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, e, t, n.__wbg_ptr, o, i);
    }
    rbLinvel(e) {
      const t = m.rawrigidbodyset_rbLinvel(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbAngvel(e) {
      return m.rawrigidbodyset_rbAngvel(this.__wbg_ptr, e);
    }
    rbVelocityAtPoint(e, t) {
      G(t, X);
      const n = m.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr, e, t.__wbg_ptr);
      return X.__wrap(n);
    }
    rbLockTranslations(e, t, n) {
      m.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, e, t, n);
    }
    rbSetEnabledTranslations(e, t, n, o) {
      m.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, e, t, n, o);
    }
    rbLockRotations(e, t, n) {
      m.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, e, t, n);
    }
    rbDominanceGroup(e) {
      return m.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, e);
    }
    rbSetDominanceGroup(e, t) {
      m.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, e, t);
    }
    rbEnableCcd(e, t) {
      m.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, e, t);
    }
    rbSetSoftCcdPrediction(e, t) {
      m.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, e, t);
    }
    rbMass(e) {
      return m.rawrigidbodyset_rbMass(this.__wbg_ptr, e);
    }
    rbInvMass(e) {
      return m.rawrigidbodyset_rbInvMass(this.__wbg_ptr, e);
    }
    rbEffectiveInvMass(e) {
      const t = m.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbLocalCom(e) {
      const t = m.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbWorldCom(e) {
      const t = m.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbInvPrincipalInertia(e) {
      return m.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr, e);
    }
    rbPrincipalInertia(e) {
      return m.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, e);
    }
    rbEffectiveWorldInvInertia(e) {
      return m.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr, e);
    }
    rbEffectiveAngularInertia(e) {
      return m.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, e);
    }
    rbWakeUp(e) {
      m.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, e);
    }
    rbIsCcdEnabled(e) {
      return m.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, e) !== 0;
    }
    rbSoftCcdPrediction(e) {
      return m.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, e);
    }
    rbNumColliders(e) {
      return m.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, e) >>> 0;
    }
    rbCollider(e, t) {
      return m.rawrigidbodyset_rbCollider(this.__wbg_ptr, e, t);
    }
    rbBodyType(e) {
      return m.rawrigidbodyset_rbBodyType(this.__wbg_ptr, e);
    }
    rbSetBodyType(e, t, n) {
      m.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, e, t, n);
    }
    rbIsFixed(e) {
      return m.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, e) !== 0;
    }
    rbIsKinematic(e) {
      return m.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, e) !== 0;
    }
    rbIsDynamic(e) {
      return m.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, e) !== 0;
    }
    rbLinearDamping(e) {
      return m.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, e);
    }
    rbAngularDamping(e) {
      return m.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, e);
    }
    rbSetLinearDamping(e, t) {
      m.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, e, t);
    }
    rbSetAngularDamping(e, t) {
      m.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, e, t);
    }
    rbSetEnabled(e, t) {
      m.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, e, t);
    }
    rbIsEnabled(e) {
      return m.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, e) !== 0;
    }
    rbGravityScale(e) {
      return m.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, e);
    }
    rbSetGravityScale(e, t, n) {
      m.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, e, t, n);
    }
    rbResetForces(e, t) {
      m.rawrigidbodyset_rbResetForces(this.__wbg_ptr, e, t);
    }
    rbResetTorques(e, t) {
      m.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, e, t);
    }
    rbAddForce(e, t, n) {
      G(t, X), m.rawrigidbodyset_rbAddForce(this.__wbg_ptr, e, t.__wbg_ptr, n);
    }
    rbApplyImpulse(e, t, n) {
      G(t, X), m.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, e, t.__wbg_ptr, n);
    }
    rbAddTorque(e, t, n) {
      m.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, e, t, n);
    }
    rbApplyTorqueImpulse(e, t, n) {
      m.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, e, t, n);
    }
    rbAddForceAtPoint(e, t, n, o) {
      G(t, X), G(n, X), m.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o);
    }
    rbApplyImpulseAtPoint(e, t, n, o) {
      G(t, X), G(n, X), m.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o);
    }
    rbAdditionalSolverIterations(e) {
      return m.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, e) >>> 0;
    }
    rbSetAdditionalSolverIterations(e, t) {
      m.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, e, t);
    }
    rbUserData(e) {
      return m.rawrigidbodyset_rbUserData(this.__wbg_ptr, e) >>> 0;
    }
    rbSetUserData(e, t) {
      m.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, e, t);
    }
    rbUserForce(e) {
      const t = m.rawrigidbodyset_rbUserForce(this.__wbg_ptr, e);
      return X.__wrap(t);
    }
    rbUserTorque(e) {
      return m.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, e);
    }
    constructor() {
      const e = m.rawrigidbodyset_new();
      return this.__wbg_ptr = e >>> 0, Ys.register(this, this.__wbg_ptr, this), this;
    }
    createRigidBody(e, t, n, o, i, s, c, l, a, p, f, d, _, h, b, g, y, A, C, S, B, T) {
      return G(t, X), G(n, $e), G(c, X), G(l, X), m.rawrigidbodyset_createRigidBody(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o, i, s, c.__wbg_ptr, l.__wbg_ptr, a, p, f, d, _, h, b, g, y, A, C, S, B, T);
    }
    remove(e, t, n, o, i) {
      G(t, Mn), G(n, Lt), G(o, Rn), G(i, En), m.rawrigidbodyset_remove(this.__wbg_ptr, e, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr);
    }
    len() {
      return m.rawrigidbodyset_len(this.__wbg_ptr) >>> 0;
    }
    contains(e) {
      return m.rawrigidbodyset_contains(this.__wbg_ptr, e) !== 0;
    }
    forEachRigidBodyHandle(e) {
      try {
        m.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, Et(e));
      } finally {
        Ze[pt++] = void 0;
      }
    }
    propagateModifiedBodyPositionsToColliders(e) {
      G(e, Lt), m.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, e.__wbg_ptr);
    }
  };
  const Zu = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawrotation_free(r >>> 0, 1));
  class $e {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create($e.prototype);
      return t.__wbg_ptr = e, Zu.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Zu.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawrotation_free(e, 0);
    }
    static identity() {
      const e = m.rawrotation_identity();
      return $e.__wrap(e);
    }
    static fromAngle(e) {
      const t = m.rawrotation_fromAngle(e);
      return $e.__wrap(t);
    }
    get im() {
      return m.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    get re() {
      return m.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get angle() {
      return m.rawrotation_angle(this.__wbg_ptr);
    }
  }
  const $u = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawserializationpipeline_free(r >>> 0, 1));
  FM = class {
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, $u.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawserializationpipeline_free(e, 0);
    }
    constructor() {
      const e = m.rawccdsolver_new();
      return this.__wbg_ptr = e >>> 0, $u.register(this, this.__wbg_ptr, this), this;
    }
    serializeAll(e, t, n, o, i, s, c, l, a) {
      G(e, X), G(t, bo), G(n, Mn), G(o, jn), G(i, zt), G(s, Bt), G(c, Lt), G(l, Rn), G(a, En);
      const p = m.rawserializationpipeline_serializeAll(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c.__wbg_ptr, l.__wbg_ptr, a.__wbg_ptr);
      return T0(p);
    }
    deserializeAll(e) {
      const t = m.rawserializationpipeline_deserializeAll(this.__wbg_ptr, lt(e));
      return t === 0 ? void 0 : Gc.__wrap(t);
    }
  };
  const e1 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawshape_free(r >>> 0, 1));
  class He {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(He.prototype);
      return t.__wbg_ptr = e, e1.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, e1.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawshape_free(e, 0);
    }
    static cuboid(e, t) {
      const n = m.rawshape_cuboid(e, t);
      return He.__wrap(n);
    }
    static roundCuboid(e, t, n) {
      const o = m.rawshape_roundCuboid(e, t, n);
      return He.__wrap(o);
    }
    static ball(e) {
      const t = m.rawshape_ball(e);
      return He.__wrap(t);
    }
    static halfspace(e) {
      G(e, X);
      const t = m.rawshape_halfspace(e.__wbg_ptr);
      return He.__wrap(t);
    }
    static capsule(e, t) {
      const n = m.rawshape_capsule(e, t);
      return He.__wrap(n);
    }
    static voxels(e, t) {
      G(e, X);
      const n = zs(t, m.__wbindgen_export_2), o = _r, i = m.rawshape_voxels(e.__wbg_ptr, n, o);
      return He.__wrap(i);
    }
    static voxelsFromPoints(e, t) {
      G(e, X);
      const n = fn(t, m.__wbindgen_export_2), o = _r, i = m.rawshape_voxelsFromPoints(e.__wbg_ptr, n, o);
      return He.__wrap(i);
    }
    static polyline(e, t) {
      const n = fn(e, m.__wbindgen_export_2), o = _r, i = zs(t, m.__wbindgen_export_2), s = _r, c = m.rawshape_polyline(n, o, i, s);
      return He.__wrap(c);
    }
    static trimesh(e, t, n) {
      const o = fn(e, m.__wbindgen_export_2), i = _r, s = zs(t, m.__wbindgen_export_2), c = _r, l = m.rawshape_trimesh(o, i, s, c, n);
      return l === 0 ? void 0 : He.__wrap(l);
    }
    static heightfield(e, t) {
      const n = fn(e, m.__wbindgen_export_2), o = _r;
      G(t, X);
      const i = m.rawshape_heightfield(n, o, t.__wbg_ptr);
      return He.__wrap(i);
    }
    static segment(e, t) {
      G(e, X), G(t, X);
      const n = m.rawshape_segment(e.__wbg_ptr, t.__wbg_ptr);
      return He.__wrap(n);
    }
    static triangle(e, t, n) {
      G(e, X), G(t, X), G(n, X);
      const o = m.rawshape_triangle(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr);
      return He.__wrap(o);
    }
    static roundTriangle(e, t, n, o) {
      G(e, X), G(t, X), G(n, X);
      const i = m.rawshape_roundTriangle(e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o);
      return He.__wrap(i);
    }
    static convexHull(e) {
      const t = fn(e, m.__wbindgen_export_2), n = _r, o = m.rawshape_convexHull(t, n);
      return o === 0 ? void 0 : He.__wrap(o);
    }
    static roundConvexHull(e, t) {
      const n = fn(e, m.__wbindgen_export_2), o = _r, i = m.rawshape_roundConvexHull(n, o, t);
      return i === 0 ? void 0 : He.__wrap(i);
    }
    static convexPolyline(e) {
      const t = fn(e, m.__wbindgen_export_2), n = _r, o = m.rawshape_convexPolyline(t, n);
      return o === 0 ? void 0 : He.__wrap(o);
    }
    static roundConvexPolyline(e, t) {
      const n = fn(e, m.__wbindgen_export_2), o = _r, i = m.rawshape_roundConvexPolyline(n, o, t);
      return i === 0 ? void 0 : He.__wrap(i);
    }
    castShape(e, t, n, o, i, s, c, l, a, p) {
      G(e, X), G(t, $e), G(n, X), G(o, He), G(i, X), G(s, $e), G(c, X);
      const f = m.rawshape_castShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s.__wbg_ptr, c.__wbg_ptr, l, a, p);
      return f === 0 ? void 0 : Z0.__wrap(f);
    }
    intersectsShape(e, t, n, o, i) {
      return G(e, X), G(t, $e), G(n, He), G(o, X), G(i, $e), m.rawshape_intersectsShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr) !== 0;
    }
    contactShape(e, t, n, o, i, s) {
      G(e, X), G(t, $e), G(n, He), G(o, X), G(i, $e);
      const c = m.rawshape_contactShape(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i.__wbg_ptr, s);
      return c === 0 ? void 0 : ci.__wrap(c);
    }
    containsPoint(e, t, n) {
      return G(e, X), G(t, $e), G(n, X), m.rawshape_containsPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr) !== 0;
    }
    projectPoint(e, t, n, o) {
      G(e, X), G(t, $e), G(n, X);
      const i = m.rawshape_projectPoint(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o);
      return X0.__wrap(i);
    }
    intersectsRay(e, t, n, o, i) {
      return G(e, X), G(t, $e), G(n, X), G(o, X), m.rawshape_intersectsRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i) !== 0;
    }
    castRay(e, t, n, o, i, s) {
      return G(e, X), G(t, $e), G(n, X), G(o, X), m.rawshape_castRay(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i, s);
    }
    castRayAndGetNormal(e, t, n, o, i, s) {
      G(e, X), G(t, $e), G(n, X), G(o, X);
      const c = m.rawshape_castRayAndGetNormal(this.__wbg_ptr, e.__wbg_ptr, t.__wbg_ptr, n.__wbg_ptr, o.__wbg_ptr, i, s);
      return c === 0 ? void 0 : Y0.__wrap(c);
    }
  }
  const t1 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawshapecasthit_free(r >>> 0, 1));
  class Z0 {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(Z0.prototype);
      return t.__wbg_ptr = e, t1.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t1.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawshapecasthit_free(e, 0);
    }
    time_of_impact() {
      return m.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    witness1() {
      const e = m.rawshapecasthit_witness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    witness2() {
      const e = m.rawcollidershapecasthit_witness1(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal1() {
      const e = m.rawcollidershapecasthit_witness2(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal2() {
      const e = m.rawcollidershapecasthit_normal1(this.__wbg_ptr);
      return X.__wrap(e);
    }
  }
  const r1 = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawshapecontact_free(r >>> 0, 1));
  class ci {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(ci.prototype);
      return t.__wbg_ptr = e, r1.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, r1.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawshapecontact_free(e, 0);
    }
    distance() {
      return m.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    point1() {
      const e = m.rawpointprojection_point(this.__wbg_ptr);
      return X.__wrap(e);
    }
    point2() {
      const e = m.rawpointcolliderprojection_point(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal1() {
      const e = m.rawcontactforceevent_total_force(this.__wbg_ptr);
      return X.__wrap(e);
    }
    normal2() {
      const e = m.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
      return X.__wrap(e);
    }
  }
  const Zs = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((r) => m.__wbg_rawvector_free(r >>> 0, 1));
  class X {
    static __wrap(e) {
      e = e >>> 0;
      const t = Object.create(X.prototype);
      return t.__wbg_ptr = e, Zs.register(t, t.__wbg_ptr, t), t;
    }
    __destroy_into_raw() {
      const e = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Zs.unregister(this), e;
    }
    free() {
      const e = this.__destroy_into_raw();
      m.__wbg_rawvector_free(e, 0);
    }
    static zero() {
      const e = m.rawvector_zero();
      return X.__wrap(e);
    }
    constructor(e, t) {
      const n = m.rawvector_new(e, t);
      return this.__wbg_ptr = n >>> 0, Zs.register(this, this.__wbg_ptr, this), this;
    }
    get x() {
      return m.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    set x(e) {
      m.rawintegrationparameters_set_dt(this.__wbg_ptr, e);
    }
    get y() {
      return m.rawkinematiccharactercontroller_offset(this.__wbg_ptr);
    }
    set y(e) {
      m.rawvector_set_y(this.__wbg_ptr, e);
    }
    xy() {
      const e = m.rawvector_xy(this.__wbg_ptr);
      return X.__wrap(e);
    }
    yx() {
      const e = m.rawvector_yx(this.__wbg_ptr);
      return X.__wrap(e);
    }
  }
  function yp(r, e, t, n) {
    const o = Qe(r).bind(Qe(e), Qe(t), Qe(n));
    return lt(o);
  }
  function Ap(r) {
    const e = Qe(r).buffer;
    return lt(e);
  }
  function vp() {
    return K0(function(r, e) {
      const t = Qe(r).call(Qe(e));
      return lt(t);
    }, arguments);
  }
  function Cp() {
    return K0(function(r, e, t) {
      const n = Qe(r).call(Qe(e), Qe(t));
      return lt(n);
    }, arguments);
  }
  function Sp() {
    return K0(function(r, e, t, n) {
      const o = Qe(r).call(Qe(e), Qe(t), Qe(n));
      return lt(o);
    }, arguments);
  }
  function Rp() {
    return K0(function(r, e, t, n, o) {
      const i = Qe(r).call(Qe(e), Qe(t), Qe(n), Qe(o));
      return lt(i);
    }, arguments);
  }
  function Mp(r) {
    return Qe(r).length;
  }
  function Ep(r) {
    return Qe(r).length;
  }
  function Bp(r) {
    const e = new Uint8Array(Qe(r));
    return lt(e);
  }
  function Ip(r, e) {
    const t = new Function(Pc(r, e));
    return lt(t);
  }
  function Tp(r, e, t) {
    const n = new Uint8Array(Qe(r), e >>> 0, t >>> 0);
    return lt(n);
  }
  function xp(r, e, t) {
    const n = new Float32Array(Qe(r), e >>> 0, t >>> 0);
    return lt(n);
  }
  function Pp(r) {
    const e = new Float32Array(r >>> 0);
    return lt(e);
  }
  function Fp(r) {
    return Qe(r).now();
  }
  function Lp(r) {
    const e = Qe(r).performance;
    return lt(e);
  }
  function Dp(r) {
    const e = Fc.__wrap(r);
    return lt(e);
  }
  function Gp(r) {
    const e = q0.__wrap(r);
    return lt(e);
  }
  function Op(r, e, t) {
    Qe(r).set(Qe(e), t >>> 0);
  }
  function Hp(r, e, t) {
    Qe(r).set(Qe(e), t >>> 0);
  }
  function kp() {
    const r = typeof global > "u" ? null : global;
    return Fe(r) ? 0 : lt(r);
  }
  function jp() {
    const r = typeof globalThis > "u" ? null : globalThis;
    return Fe(r) ? 0 : lt(r);
  }
  function Up() {
    const r = typeof self > "u" ? null : self;
    return Fe(r) ? 0 : lt(r);
  }
  function Np() {
    const r = typeof window > "u" ? null : window;
    return Fe(r) ? 0 : lt(r);
  }
  function zp(r) {
    const e = Qe(r);
    return typeof e == "boolean" ? e ? 1 : 0 : 2;
  }
  function Wp(r) {
    return typeof Qe(r) == "function";
  }
  function Jp(r) {
    return Qe(r) === void 0;
  }
  function Vp() {
    const r = m.memory;
    return lt(r);
  }
  function Kp(r, e) {
    const t = Qe(e), n = typeof t == "number" ? t : void 0;
    Nt().setFloat64(r + 8, Fe(n) ? 0 : n, true), Nt().setInt32(r + 0, !Fe(n), true);
  }
  function Qp(r) {
    return lt(r);
  }
  function Xp(r) {
    const e = Qe(r);
    return lt(e);
  }
  function qp(r) {
    T0(r);
  }
  function Yp(r, e) {
    throw new Error(Pc(r, e));
  }
  URL = globalThis.URL;
  const w = await dp({
    "./rapier_wasm2d_bg.js": {
      __wbindgen_number_new: Qp,
      __wbindgen_boolean_get: zp,
      __wbindgen_object_drop_ref: qp,
      __wbindgen_number_get: Kp,
      __wbindgen_is_function: Wp,
      __wbg_rawraycolliderintersection_new: Gp,
      __wbg_rawcontactforceevent_new: Dp,
      __wbg_performance_7a3ffd0b17f663ad: Lp,
      __wbindgen_is_undefined: Jp,
      __wbg_now_2c95c9de01293173: Fp,
      __wbindgen_object_clone_ref: Xp,
      __wbg_newnoargs_105ed471475aaf50: Ip,
      __wbg_call_672a4d21634d4a24: vp,
      __wbg_call_7cccdd69e0791ae2: Cp,
      __wbg_call_833bed5770ea2041: Sp,
      __wbg_call_b8adc8b1d0a0d8eb: Rp,
      __wbg_bind_c8359b1cba058168: yp,
      __wbg_buffer_609cc3eee51ed158: Ap,
      __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: jp,
      __wbg_static_accessor_SELF_37c5d418e4bf5819: Up,
      __wbg_static_accessor_WINDOW_5de37043a91a9c40: Np,
      __wbg_static_accessor_GLOBAL_88a902d13a557d07: kp,
      __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: Tp,
      __wbg_new_a12002a7f91c75be: Bp,
      __wbg_set_65595bdd868b3009: Hp,
      __wbg_length_a446193dc22c12f8: Ep,
      __wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354: xp,
      __wbg_set_10bad9bee0e9c58b: Op,
      __wbg_length_3b4f022188ae8db6: Mp,
      __wbg_newwithlength_5a5efe313cfd59f1: Pp,
      __wbindgen_throw: Yp,
      __wbindgen_memory: Vp
    }
  }, up), Zp = w.memory, $p = w.version, e8 = w.__wbg_rawkinematiccharactercontroller_free, t8 = w.rawkinematiccharactercontroller_new, r8 = w.rawkinematiccharactercontroller_setUp, n8 = w.rawkinematiccharactercontroller_normalNudgeFactor, o8 = w.rawkinematiccharactercontroller_setNormalNudgeFactor, i8 = w.rawkinematiccharactercontroller_offset, s8 = w.rawkinematiccharactercontroller_setOffset, a8 = w.rawkinematiccharactercontroller_slideEnabled, c8 = w.rawkinematiccharactercontroller_setSlideEnabled, l8 = w.rawkinematiccharactercontroller_autostepMaxHeight, u8 = w.rawkinematiccharactercontroller_autostepMinWidth, d8 = w.rawkinematiccharactercontroller_autostepIncludesDynamicBodies, f8 = w.rawkinematiccharactercontroller_autostepEnabled, p8 = w.rawkinematiccharactercontroller_enableAutostep, _8 = w.rawkinematiccharactercontroller_disableAutostep, h8 = w.rawkinematiccharactercontroller_maxSlopeClimbAngle, m8 = w.rawkinematiccharactercontroller_setMaxSlopeClimbAngle, g8 = w.rawkinematiccharactercontroller_minSlopeSlideAngle, w8 = w.rawkinematiccharactercontroller_setMinSlopeSlideAngle, b8 = w.rawkinematiccharactercontroller_snapToGroundDistance, y8 = w.rawkinematiccharactercontroller_enableSnapToGround, A8 = w.rawkinematiccharactercontroller_disableSnapToGround, v8 = w.rawkinematiccharactercontroller_snapToGroundEnabled, C8 = w.rawkinematiccharactercontroller_computeColliderMovement, S8 = w.rawkinematiccharactercontroller_computedMovement, R8 = w.rawkinematiccharactercontroller_computedGrounded, M8 = w.rawkinematiccharactercontroller_numComputedCollisions, E8 = w.rawkinematiccharactercontroller_computedCollision, B8 = w.__wbg_rawcharactercollision_free, I8 = w.rawcharactercollision_new, T8 = w.rawcharactercollision_handle, x8 = w.rawcharactercollision_translationDeltaApplied, P8 = w.rawcharactercollision_translationDeltaRemaining, F8 = w.rawcharactercollision_toi, L8 = w.rawcharactercollision_worldWitness1, D8 = w.rawcharactercollision_worldWitness2, G8 = w.rawcharactercollision_worldNormal1, O8 = w.rawcharactercollision_worldNormal2, H8 = w.__wbg_rawpidcontroller_free, k8 = w.rawpidcontroller_new, j8 = w.rawpidcontroller_set_kp, U8 = w.rawpidcontroller_set_ki, N8 = w.rawpidcontroller_set_kd, z8 = w.rawpidcontroller_set_axes_mask, W8 = w.rawpidcontroller_reset_integrals, J8 = w.rawpidcontroller_apply_linear_correction, V8 = w.rawpidcontroller_apply_angular_correction, K8 = w.rawpidcontroller_linear_correction, Q8 = w.rawpidcontroller_angular_correction, X8 = w.__wbg_rawccdsolver_free, q8 = w.rawimpulsejointset_jointType, Y8 = w.rawimpulsejointset_jointBodyHandle1, Z8 = w.rawimpulsejointset_jointBodyHandle2, $8 = w.rawimpulsejointset_jointFrameX1, e7 = w.rawimpulsejointset_jointFrameX2, t7 = w.rawimpulsejointset_jointAnchor1, r7 = w.rawimpulsejointset_jointAnchor2, n7 = w.rawimpulsejointset_jointSetAnchor1, o7 = w.rawimpulsejointset_jointSetAnchor2, i7 = w.rawimpulsejointset_jointContactsEnabled, s7 = w.rawimpulsejointset_jointSetContactsEnabled, a7 = w.rawimpulsejointset_jointLimitsEnabled, c7 = w.rawimpulsejointset_jointLimitsMin, l7 = w.rawimpulsejointset_jointLimitsMax, u7 = w.rawimpulsejointset_jointSetLimits, d7 = w.rawimpulsejointset_jointConfigureMotorModel, f7 = w.rawimpulsejointset_jointConfigureMotorVelocity, p7 = w.rawimpulsejointset_jointConfigureMotorPosition, _7 = w.rawimpulsejointset_jointConfigureMotor, h7 = w.__wbg_rawimpulsejointset_free, m7 = w.rawimpulsejointset_new, g7 = w.rawimpulsejointset_createJoint, w7 = w.rawimpulsejointset_remove, b7 = w.rawimpulsejointset_len, y7 = w.rawimpulsejointset_contains, A7 = w.rawimpulsejointset_forEachJointHandle, v7 = w.rawimpulsejointset_forEachJointAttachedToRigidBody, C7 = w.__wbg_rawintegrationparameters_free, S7 = w.rawintegrationparameters_new, R7 = w.rawintegrationparameters_dt, M7 = w.rawintegrationparameters_contact_erp, E7 = w.rawintegrationparameters_numSolverIterations, B7 = w.rawintegrationparameters_numInternalPgsIterations, I7 = w.rawintegrationparameters_minIslandSize, T7 = w.rawintegrationparameters_maxCcdSubsteps, x7 = w.rawintegrationparameters_lengthUnit, P7 = w.rawintegrationparameters_set_dt, F7 = w.rawintegrationparameters_set_contact_natural_frequency, L7 = w.rawintegrationparameters_set_normalizedAllowedLinearError, D7 = w.rawintegrationparameters_set_normalizedPredictionDistance, G7 = w.rawintegrationparameters_set_numSolverIterations, O7 = w.rawintegrationparameters_set_numInternalPgsIterations, H7 = w.rawintegrationparameters_set_minIslandSize, k7 = w.rawintegrationparameters_set_maxCcdSubsteps, j7 = w.rawintegrationparameters_set_lengthUnit, U7 = w.__wbg_rawislandmanager_free, N7 = w.rawislandmanager_new, z7 = w.rawislandmanager_forEachActiveRigidBodyHandle, W7 = w.__wbg_rawgenericjoint_free, J7 = w.rawgenericjoint_spring, V7 = w.rawgenericjoint_rope, K7 = w.rawgenericjoint_prismatic, Q7 = w.rawgenericjoint_fixed, X7 = w.rawgenericjoint_revolute, q7 = w.rawmultibodyjointset_jointType, Y7 = w.rawmultibodyjointset_jointFrameX1, Z7 = w.rawmultibodyjointset_jointFrameX2, $7 = w.rawmultibodyjointset_jointAnchor1, e_ = w.rawmultibodyjointset_jointAnchor2, t_ = w.rawmultibodyjointset_jointContactsEnabled, r_ = w.rawmultibodyjointset_jointSetContactsEnabled, n_ = w.rawmultibodyjointset_jointLimitsEnabled, o_ = w.rawmultibodyjointset_jointLimitsMin, i_ = w.rawmultibodyjointset_jointLimitsMax, s_ = w.__wbg_rawmultibodyjointset_free, a_ = w.rawmultibodyjointset_new, c_ = w.rawmultibodyjointset_createJoint, l_ = w.rawmultibodyjointset_remove, u_ = w.rawmultibodyjointset_contains, d_ = w.rawmultibodyjointset_forEachJointHandle, f_ = w.rawmultibodyjointset_forEachJointAttachedToRigidBody, p_ = w.rawrigidbodyset_rbTranslation, __ = w.rawrigidbodyset_rbRotation, h_ = w.rawrigidbodyset_rbSleep, m_ = w.rawrigidbodyset_rbIsSleeping, g_ = w.rawrigidbodyset_rbIsMoving, w_ = w.rawrigidbodyset_rbNextTranslation, b_ = w.rawrigidbodyset_rbNextRotation, y_ = w.rawrigidbodyset_rbSetTranslation, A_ = w.rawrigidbodyset_rbSetRotation, v_ = w.rawrigidbodyset_rbSetLinvel, C_ = w.rawrigidbodyset_rbSetAngvel, S_ = w.rawrigidbodyset_rbSetNextKinematicTranslation, R_ = w.rawrigidbodyset_rbSetNextKinematicRotation, M_ = w.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders, E_ = w.rawrigidbodyset_rbSetAdditionalMass, B_ = w.rawrigidbodyset_rbSetAdditionalMassProperties, I_ = w.rawrigidbodyset_rbLinvel, T_ = w.rawrigidbodyset_rbAngvel, x_ = w.rawrigidbodyset_rbVelocityAtPoint, P_ = w.rawrigidbodyset_rbLockTranslations, F_ = w.rawrigidbodyset_rbSetEnabledTranslations, L_ = w.rawrigidbodyset_rbLockRotations, D_ = w.rawrigidbodyset_rbDominanceGroup, G_ = w.rawrigidbodyset_rbSetDominanceGroup, O_ = w.rawrigidbodyset_rbEnableCcd, H_ = w.rawrigidbodyset_rbSetSoftCcdPrediction, k_ = w.rawrigidbodyset_rbMass, j_ = w.rawrigidbodyset_rbInvMass, U_ = w.rawrigidbodyset_rbEffectiveInvMass, N_ = w.rawrigidbodyset_rbLocalCom, z_ = w.rawrigidbodyset_rbWorldCom, W_ = w.rawrigidbodyset_rbInvPrincipalInertia, J_ = w.rawrigidbodyset_rbPrincipalInertia, V_ = w.rawrigidbodyset_rbEffectiveWorldInvInertia, K_ = w.rawrigidbodyset_rbEffectiveAngularInertia, Q_ = w.rawrigidbodyset_rbWakeUp, X_ = w.rawrigidbodyset_rbIsCcdEnabled, q_ = w.rawrigidbodyset_rbSoftCcdPrediction, Y_ = w.rawrigidbodyset_rbNumColliders, Z_ = w.rawrigidbodyset_rbCollider, $_ = w.rawrigidbodyset_rbBodyType, e6 = w.rawrigidbodyset_rbSetBodyType, t6 = w.rawrigidbodyset_rbIsFixed, r6 = w.rawrigidbodyset_rbIsKinematic, n6 = w.rawrigidbodyset_rbIsDynamic, o6 = w.rawrigidbodyset_rbLinearDamping, i6 = w.rawrigidbodyset_rbAngularDamping, s6 = w.rawrigidbodyset_rbSetLinearDamping, a6 = w.rawrigidbodyset_rbSetAngularDamping, c6 = w.rawrigidbodyset_rbSetEnabled, l6 = w.rawrigidbodyset_rbIsEnabled, u6 = w.rawrigidbodyset_rbGravityScale, d6 = w.rawrigidbodyset_rbSetGravityScale, f6 = w.rawrigidbodyset_rbResetForces, p6 = w.rawrigidbodyset_rbResetTorques, _6 = w.rawrigidbodyset_rbAddForce, h6 = w.rawrigidbodyset_rbApplyImpulse, m6 = w.rawrigidbodyset_rbAddTorque, g6 = w.rawrigidbodyset_rbApplyTorqueImpulse, w6 = w.rawrigidbodyset_rbAddForceAtPoint, b6 = w.rawrigidbodyset_rbApplyImpulseAtPoint, y6 = w.rawrigidbodyset_rbAdditionalSolverIterations, A6 = w.rawrigidbodyset_rbSetAdditionalSolverIterations, v6 = w.rawrigidbodyset_rbUserData, C6 = w.rawrigidbodyset_rbSetUserData, S6 = w.rawrigidbodyset_rbUserForce, R6 = w.rawrigidbodyset_rbUserTorque, M6 = w.__wbg_rawrigidbodyset_free, E6 = w.rawrigidbodyset_new, B6 = w.rawrigidbodyset_createRigidBody, I6 = w.rawrigidbodyset_remove, T6 = w.rawrigidbodyset_len, x6 = w.rawrigidbodyset_contains, P6 = w.rawrigidbodyset_forEachRigidBodyHandle, F6 = w.rawrigidbodyset_propagateModifiedBodyPositionsToColliders, L6 = w.__wbg_rawbroadphase_free, D6 = w.rawbroadphase_new, G6 = w.rawbroadphase_castRay, O6 = w.rawbroadphase_castRayAndGetNormal, H6 = w.rawbroadphase_intersectionsWithRay, k6 = w.rawbroadphase_intersectionWithShape, j6 = w.rawbroadphase_projectPoint, U6 = w.rawbroadphase_projectPointAndGetFeature, N6 = w.rawbroadphase_intersectionsWithPoint, z6 = w.rawbroadphase_castShape, W6 = w.rawbroadphase_intersectionsWithShape, J6 = w.rawbroadphase_collidersWithAabbIntersectingAabb, V6 = w.rawcolliderset_coTranslation, K6 = w.rawcolliderset_coRotation, Q6 = w.rawcolliderset_coTranslationWrtParent, X6 = w.rawcolliderset_coRotationWrtParent, q6 = w.rawcolliderset_coSetTranslation, Y6 = w.rawcolliderset_coSetTranslationWrtParent, Z6 = w.rawcolliderset_coSetRotation, $6 = w.rawcolliderset_coSetRotationWrtParent, eh = w.rawcolliderset_coIsSensor, th = w.rawcolliderset_coShapeType, rh = w.rawcolliderset_coHalfspaceNormal, nh = w.rawcolliderset_coHalfExtents, oh = w.rawcolliderset_coSetHalfExtents, ih = w.rawcolliderset_coRadius, sh = w.rawcolliderset_coSetRadius, ah = w.rawcolliderset_coHalfHeight, ch = w.rawcolliderset_coSetHalfHeight, lh = w.rawcolliderset_coRoundRadius, uh = w.rawcolliderset_coSetRoundRadius, dh = w.rawcolliderset_coVoxelData, fh = w.rawcolliderset_coVoxelSize, ph = w.rawcolliderset_coSetVoxel, _h = w.rawcolliderset_coPropagateVoxelChange, hh = w.rawcolliderset_coCombineVoxelStates, mh = w.rawcolliderset_coVertices, gh = w.rawcolliderset_coIndices, wh = w.rawcolliderset_coTriMeshFlags, bh = w.rawcolliderset_coHeightfieldHeights, yh = w.rawcolliderset_coHeightfieldScale, Ah = w.rawcolliderset_coParent, vh = w.rawcolliderset_coSetEnabled, Ch = w.rawcolliderset_coIsEnabled, Sh = w.rawcolliderset_coSetContactSkin, Rh = w.rawcolliderset_coContactSkin, Mh = w.rawcolliderset_coFriction, Eh = w.rawcolliderset_coRestitution, Bh = w.rawcolliderset_coDensity, Ih = w.rawcolliderset_coMass, Th = w.rawcolliderset_coVolume, xh = w.rawcolliderset_coCollisionGroups, Ph = w.rawcolliderset_coSolverGroups, Fh = w.rawcolliderset_coActiveHooks, Lh = w.rawcolliderset_coActiveCollisionTypes, Dh = w.rawcolliderset_coActiveEvents, Gh = w.rawcolliderset_coContactForceEventThreshold, Oh = w.rawcolliderset_coContainsPoint, Hh = w.rawcolliderset_coCastShape, kh = w.rawcolliderset_coCastCollider, jh = w.rawcolliderset_coIntersectsShape, Uh = w.rawcolliderset_coContactShape, Nh = w.rawcolliderset_coContactCollider, zh = w.rawcolliderset_coProjectPoint, Wh = w.rawcolliderset_coIntersectsRay, Jh = w.rawcolliderset_coCastRay, Vh = w.rawcolliderset_coCastRayAndGetNormal, Kh = w.rawcolliderset_coSetSensor, Qh = w.rawcolliderset_coSetRestitution, Xh = w.rawcolliderset_coSetFriction, qh = w.rawcolliderset_coFrictionCombineRule, Yh = w.rawcolliderset_coSetFrictionCombineRule, Zh = w.rawcolliderset_coRestitutionCombineRule, $h = w.rawcolliderset_coSetRestitutionCombineRule, em = w.rawcolliderset_coSetCollisionGroups, tm = w.rawcolliderset_coSetSolverGroups, rm = w.rawcolliderset_coSetActiveHooks, nm = w.rawcolliderset_coSetActiveEvents, om = w.rawcolliderset_coSetActiveCollisionTypes, im = w.rawcolliderset_coSetShape, sm = w.rawcolliderset_coSetContactForceEventThreshold, am = w.rawcolliderset_coSetDensity, cm = w.rawcolliderset_coSetMass, lm = w.rawcolliderset_coSetMassProperties, um = w.__wbg_rawcolliderset_free, dm = w.rawcolliderset_new, fm = w.rawcolliderset_len, pm = w.rawcolliderset_contains, _m = w.rawcolliderset_createCollider, hm = w.rawcolliderset_remove, mm = w.rawcolliderset_forEachColliderHandle, gm = w.__wbg_rawshapecontact_free, wm = w.__wbg_rawnarrowphase_free, bm = w.rawnarrowphase_new, ym = w.rawnarrowphase_contact_pairs_with, Am = w.rawnarrowphase_contact_pair, vm = w.rawnarrowphase_intersection_pairs_with, Cm = w.rawnarrowphase_intersection_pair, Sm = w.__wbg_rawcontactmanifold_free, Rm = w.rawcontactpair_collider1, Mm = w.rawcontactpair_collider2, Em = w.rawcontactpair_numContactManifolds, Bm = w.rawcontactpair_contactManifold, Im = w.rawcontactmanifold_normal, Tm = w.rawcontactmanifold_local_n1, xm = w.rawcontactmanifold_local_n2, Pm = w.rawcontactmanifold_subshape1, Fm = w.rawcontactmanifold_subshape2, Lm = w.rawcontactmanifold_num_contacts, Dm = w.rawcontactmanifold_contact_local_p1, Gm = w.rawcontactmanifold_contact_local_p2, Om = w.rawcontactmanifold_contact_dist, Hm = w.rawcontactmanifold_contact_fid1, km = w.rawcontactmanifold_contact_fid2, jm = w.rawcontactmanifold_contact_impulse, Um = w.rawcontactmanifold_contact_tangent_impulse, Nm = w.rawcontactmanifold_num_solver_contacts, zm = w.rawcontactmanifold_solver_contact_point, Wm = w.rawcontactmanifold_solver_contact_dist, Jm = w.rawcontactmanifold_solver_contact_friction, Vm = w.rawcontactmanifold_solver_contact_restitution, Km = w.rawcontactmanifold_solver_contact_tangent_velocity, Qm = w.__wbg_rawpointprojection_free, Xm = w.rawpointprojection_point, qm = w.rawpointprojection_isInside, Ym = w.__wbg_rawpointcolliderprojection_free, Zm = w.rawpointcolliderprojection_colliderHandle, $m = w.rawpointcolliderprojection_point, eg = w.rawpointcolliderprojection_isInside, tg = w.rawpointcolliderprojection_featureType, rg = w.rawpointcolliderprojection_featureId, ng = w.__wbg_rawrayintersection_free, og = w.__wbg_rawshape_free, ig = w.rawshape_cuboid, sg = w.rawshape_roundCuboid, ag = w.rawshape_ball, cg = w.rawshape_halfspace, lg = w.rawshape_capsule, ug = w.rawshape_voxels, dg = w.rawshape_voxelsFromPoints, fg = w.rawshape_polyline, pg = w.rawshape_trimesh, _g = w.rawshape_heightfield, hg = w.rawshape_segment, mg = w.rawshape_triangle, gg = w.rawshape_roundTriangle, wg = w.rawshape_convexHull, bg = w.rawshape_roundConvexHull, yg = w.rawshape_convexPolyline, Ag = w.rawshape_roundConvexPolyline, vg = w.rawshape_castShape, Cg = w.rawshape_intersectsShape, Sg = w.rawshape_contactShape, Rg = w.rawshape_containsPoint, Mg = w.rawshape_projectPoint, Eg = w.rawshape_intersectsRay, Bg = w.rawshape_castRay, Ig = w.rawshape_castRayAndGetNormal, Tg = w.rawshapecasthit_witness1, xg = w.__wbg_rawcollidershapecasthit_free, Pg = w.rawcollidershapecasthit_colliderHandle, Fg = w.rawcollidershapecasthit_time_of_impact, Lg = w.rawcollidershapecasthit_witness1, Dg = w.rawcollidershapecasthit_witness2, Gg = w.rawcollidershapecasthit_normal1, Og = w.rawcollidershapecasthit_normal2, Hg = w.__wbg_rawrotation_free, kg = w.rawrotation_identity, jg = w.rawrotation_fromAngle, Ug = w.rawrotation_angle, Ng = w.__wbg_rawvector_free, zg = w.rawvector_zero, Wg = w.rawvector_new, Jg = w.rawvector_set_y, Vg = w.rawvector_xy, Kg = w.rawvector_yx, Qg = w.__wbg_rawdebugrenderpipeline_free, Xg = w.rawdebugrenderpipeline_new, qg = w.rawdebugrenderpipeline_vertices, Yg = w.rawdebugrenderpipeline_colors, Zg = w.rawdebugrenderpipeline_render, $g = w.__wbg_raweventqueue_free, ew = w.__wbg_rawcontactforceevent_free, tw = w.rawcontactforceevent_collider2, rw = w.rawcontactforceevent_total_force, nw = w.rawcontactforceevent_total_force_magnitude, ow = w.rawcontactforceevent_max_force_magnitude, iw = w.raweventqueue_new, sw = w.raweventqueue_drainCollisionEvents, aw = w.raweventqueue_drainContactForceEvents, cw = w.raweventqueue_clear, lw = w.__wbg_rawphysicspipeline_free, uw = w.rawphysicspipeline_new, dw = w.rawphysicspipeline_set_profiler_enabled, fw = w.rawphysicspipeline_is_profiler_enabled, pw = w.rawphysicspipeline_timing_step, _w = w.rawphysicspipeline_timing_collision_detection, hw = w.rawphysicspipeline_timing_broad_phase, mw = w.rawphysicspipeline_timing_narrow_phase, gw = w.rawphysicspipeline_timing_solver, ww = w.rawphysicspipeline_timing_velocity_assembly, bw = w.rawphysicspipeline_timing_velocity_resolution, yw = w.rawphysicspipeline_timing_velocity_update, Aw = w.rawphysicspipeline_timing_velocity_writeback, vw = w.rawphysicspipeline_timing_ccd, Cw = w.rawphysicspipeline_timing_ccd_toi_computation, Sw = w.rawphysicspipeline_timing_ccd_broad_phase, Rw = w.rawphysicspipeline_timing_ccd_narrow_phase, Mw = w.rawphysicspipeline_timing_ccd_solver, Ew = w.rawphysicspipeline_timing_island_construction, Bw = w.rawphysicspipeline_timing_user_changes, Iw = w.rawphysicspipeline_step, Tw = w.rawphysicspipeline_stepWithEvents, xw = w.__wbg_rawdeserializedworld_free, Pw = w.rawdeserializedworld_takeGravity, Fw = w.rawdeserializedworld_takeIntegrationParameters, Lw = w.rawdeserializedworld_takeIslandManager, Dw = w.rawdeserializedworld_takeBroadPhase, Gw = w.rawdeserializedworld_takeNarrowPhase, Ow = w.rawdeserializedworld_takeBodies, Hw = w.rawdeserializedworld_takeColliders, kw = w.rawdeserializedworld_takeImpulseJoints, jw = w.rawdeserializedworld_takeMultibodyJoints, Uw = w.rawserializationpipeline_serializeAll, Nw = w.rawserializationpipeline_deserializeAll, zw = w.rawcolliderset_isHandleValid, Ww = w.rawvector_set_x, Jw = w.reserve_memory, Vw = w.rawrayintersection_featureId, Kw = w.rawraycolliderintersection_featureId, Qw = w.rawintegrationparameters_normalizedPredictionDistance, Xw = w.rawshapecontact_distance, qw = w.rawrayintersection_featureType, Yw = w.rawraycolliderintersection_colliderHandle, Zw = w.rawrayintersection_time_of_impact, $w = w.rawraycolliderintersection_featureType, eb = w.rawraycolliderintersection_time_of_impact, tb = w.rawshapecasthit_time_of_impact, rb = w.rawraycolliderhit_colliderHandle, nb = w.rawraycolliderhit_timeOfImpact, ob = w.rawrotation_im, ib = w.rawrotation_re, sb = w.rawvector_x, ab = w.rawvector_y, cb = w.rawcontactforceevent_collider1, lb = w.rawintegrationparameters_normalizedAllowedLinearError, ub = w.__wbg_rawcontactpair_free, db = w.__wbg_rawraycolliderintersection_free, fb = w.__wbg_rawraycolliderhit_free, pb = w.__wbg_rawshapecasthit_free, _b = w.__wbg_rawserializationpipeline_free, hb = w.rawshapecontact_normal2, mb = w.rawshapecontact_point1, gb = w.rawshapecontact_point2, wb = w.rawrayintersection_normal, bb = w.rawshapecasthit_witness2, yb = w.rawraycolliderintersection_normal, Ab = w.rawshapecasthit_normal1, vb = w.rawshapecasthit_normal2, Cb = w.rawkinematiccharactercontroller_up, Sb = w.rawshapecontact_normal1, Rb = w.rawcontactforceevent_max_force_direction, Mb = w.rawccdsolver_new, Eb = w.rawserializationpipeline_new, Bb = w.__wbindgen_export_0, Ib = w.__wbindgen_add_to_stack_pointer, Tb = w.__wbindgen_export_1, xb = w.__wbindgen_export_2, Pb = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_rawbroadphase_free: L6,
    __wbg_rawccdsolver_free: X8,
    __wbg_rawcharactercollision_free: B8,
    __wbg_rawcolliderset_free: um,
    __wbg_rawcollidershapecasthit_free: xg,
    __wbg_rawcontactforceevent_free: ew,
    __wbg_rawcontactmanifold_free: Sm,
    __wbg_rawcontactpair_free: ub,
    __wbg_rawdebugrenderpipeline_free: Qg,
    __wbg_rawdeserializedworld_free: xw,
    __wbg_raweventqueue_free: $g,
    __wbg_rawgenericjoint_free: W7,
    __wbg_rawimpulsejointset_free: h7,
    __wbg_rawintegrationparameters_free: C7,
    __wbg_rawislandmanager_free: U7,
    __wbg_rawkinematiccharactercontroller_free: e8,
    __wbg_rawmultibodyjointset_free: s_,
    __wbg_rawnarrowphase_free: wm,
    __wbg_rawphysicspipeline_free: lw,
    __wbg_rawpidcontroller_free: H8,
    __wbg_rawpointcolliderprojection_free: Ym,
    __wbg_rawpointprojection_free: Qm,
    __wbg_rawraycolliderhit_free: fb,
    __wbg_rawraycolliderintersection_free: db,
    __wbg_rawrayintersection_free: ng,
    __wbg_rawrigidbodyset_free: M6,
    __wbg_rawrotation_free: Hg,
    __wbg_rawserializationpipeline_free: _b,
    __wbg_rawshape_free: og,
    __wbg_rawshapecasthit_free: pb,
    __wbg_rawshapecontact_free: gm,
    __wbg_rawvector_free: Ng,
    __wbindgen_add_to_stack_pointer: Ib,
    __wbindgen_export_0: Bb,
    __wbindgen_export_1: Tb,
    __wbindgen_export_2: xb,
    memory: Zp,
    rawbroadphase_castRay: G6,
    rawbroadphase_castRayAndGetNormal: O6,
    rawbroadphase_castShape: z6,
    rawbroadphase_collidersWithAabbIntersectingAabb: J6,
    rawbroadphase_intersectionWithShape: k6,
    rawbroadphase_intersectionsWithPoint: N6,
    rawbroadphase_intersectionsWithRay: H6,
    rawbroadphase_intersectionsWithShape: W6,
    rawbroadphase_new: D6,
    rawbroadphase_projectPoint: j6,
    rawbroadphase_projectPointAndGetFeature: U6,
    rawccdsolver_new: Mb,
    rawcharactercollision_handle: T8,
    rawcharactercollision_new: I8,
    rawcharactercollision_toi: F8,
    rawcharactercollision_translationDeltaApplied: x8,
    rawcharactercollision_translationDeltaRemaining: P8,
    rawcharactercollision_worldNormal1: G8,
    rawcharactercollision_worldNormal2: O8,
    rawcharactercollision_worldWitness1: L8,
    rawcharactercollision_worldWitness2: D8,
    rawcolliderset_coActiveCollisionTypes: Lh,
    rawcolliderset_coActiveEvents: Dh,
    rawcolliderset_coActiveHooks: Fh,
    rawcolliderset_coCastCollider: kh,
    rawcolliderset_coCastRay: Jh,
    rawcolliderset_coCastRayAndGetNormal: Vh,
    rawcolliderset_coCastShape: Hh,
    rawcolliderset_coCollisionGroups: xh,
    rawcolliderset_coCombineVoxelStates: hh,
    rawcolliderset_coContactCollider: Nh,
    rawcolliderset_coContactForceEventThreshold: Gh,
    rawcolliderset_coContactShape: Uh,
    rawcolliderset_coContactSkin: Rh,
    rawcolliderset_coContainsPoint: Oh,
    rawcolliderset_coDensity: Bh,
    rawcolliderset_coFriction: Mh,
    rawcolliderset_coFrictionCombineRule: qh,
    rawcolliderset_coHalfExtents: nh,
    rawcolliderset_coHalfHeight: ah,
    rawcolliderset_coHalfspaceNormal: rh,
    rawcolliderset_coHeightfieldHeights: bh,
    rawcolliderset_coHeightfieldScale: yh,
    rawcolliderset_coIndices: gh,
    rawcolliderset_coIntersectsRay: Wh,
    rawcolliderset_coIntersectsShape: jh,
    rawcolliderset_coIsEnabled: Ch,
    rawcolliderset_coIsSensor: eh,
    rawcolliderset_coMass: Ih,
    rawcolliderset_coParent: Ah,
    rawcolliderset_coProjectPoint: zh,
    rawcolliderset_coPropagateVoxelChange: _h,
    rawcolliderset_coRadius: ih,
    rawcolliderset_coRestitution: Eh,
    rawcolliderset_coRestitutionCombineRule: Zh,
    rawcolliderset_coRotation: K6,
    rawcolliderset_coRotationWrtParent: X6,
    rawcolliderset_coRoundRadius: lh,
    rawcolliderset_coSetActiveCollisionTypes: om,
    rawcolliderset_coSetActiveEvents: nm,
    rawcolliderset_coSetActiveHooks: rm,
    rawcolliderset_coSetCollisionGroups: em,
    rawcolliderset_coSetContactForceEventThreshold: sm,
    rawcolliderset_coSetContactSkin: Sh,
    rawcolliderset_coSetDensity: am,
    rawcolliderset_coSetEnabled: vh,
    rawcolliderset_coSetFriction: Xh,
    rawcolliderset_coSetFrictionCombineRule: Yh,
    rawcolliderset_coSetHalfExtents: oh,
    rawcolliderset_coSetHalfHeight: ch,
    rawcolliderset_coSetMass: cm,
    rawcolliderset_coSetMassProperties: lm,
    rawcolliderset_coSetRadius: sh,
    rawcolliderset_coSetRestitution: Qh,
    rawcolliderset_coSetRestitutionCombineRule: $h,
    rawcolliderset_coSetRotation: Z6,
    rawcolliderset_coSetRotationWrtParent: $6,
    rawcolliderset_coSetRoundRadius: uh,
    rawcolliderset_coSetSensor: Kh,
    rawcolliderset_coSetShape: im,
    rawcolliderset_coSetSolverGroups: tm,
    rawcolliderset_coSetTranslation: q6,
    rawcolliderset_coSetTranslationWrtParent: Y6,
    rawcolliderset_coSetVoxel: ph,
    rawcolliderset_coShapeType: th,
    rawcolliderset_coSolverGroups: Ph,
    rawcolliderset_coTranslation: V6,
    rawcolliderset_coTranslationWrtParent: Q6,
    rawcolliderset_coTriMeshFlags: wh,
    rawcolliderset_coVertices: mh,
    rawcolliderset_coVolume: Th,
    rawcolliderset_coVoxelData: dh,
    rawcolliderset_coVoxelSize: fh,
    rawcolliderset_contains: pm,
    rawcolliderset_createCollider: _m,
    rawcolliderset_forEachColliderHandle: mm,
    rawcolliderset_isHandleValid: zw,
    rawcolliderset_len: fm,
    rawcolliderset_new: dm,
    rawcolliderset_remove: hm,
    rawcollidershapecasthit_colliderHandle: Pg,
    rawcollidershapecasthit_normal1: Gg,
    rawcollidershapecasthit_normal2: Og,
    rawcollidershapecasthit_time_of_impact: Fg,
    rawcollidershapecasthit_witness1: Lg,
    rawcollidershapecasthit_witness2: Dg,
    rawcontactforceevent_collider1: cb,
    rawcontactforceevent_collider2: tw,
    rawcontactforceevent_max_force_direction: Rb,
    rawcontactforceevent_max_force_magnitude: ow,
    rawcontactforceevent_total_force: rw,
    rawcontactforceevent_total_force_magnitude: nw,
    rawcontactmanifold_contact_dist: Om,
    rawcontactmanifold_contact_fid1: Hm,
    rawcontactmanifold_contact_fid2: km,
    rawcontactmanifold_contact_impulse: jm,
    rawcontactmanifold_contact_local_p1: Dm,
    rawcontactmanifold_contact_local_p2: Gm,
    rawcontactmanifold_contact_tangent_impulse: Um,
    rawcontactmanifold_local_n1: Tm,
    rawcontactmanifold_local_n2: xm,
    rawcontactmanifold_normal: Im,
    rawcontactmanifold_num_contacts: Lm,
    rawcontactmanifold_num_solver_contacts: Nm,
    rawcontactmanifold_solver_contact_dist: Wm,
    rawcontactmanifold_solver_contact_friction: Jm,
    rawcontactmanifold_solver_contact_point: zm,
    rawcontactmanifold_solver_contact_restitution: Vm,
    rawcontactmanifold_solver_contact_tangent_velocity: Km,
    rawcontactmanifold_subshape1: Pm,
    rawcontactmanifold_subshape2: Fm,
    rawcontactpair_collider1: Rm,
    rawcontactpair_collider2: Mm,
    rawcontactpair_contactManifold: Bm,
    rawcontactpair_numContactManifolds: Em,
    rawdebugrenderpipeline_colors: Yg,
    rawdebugrenderpipeline_new: Xg,
    rawdebugrenderpipeline_render: Zg,
    rawdebugrenderpipeline_vertices: qg,
    rawdeserializedworld_takeBodies: Ow,
    rawdeserializedworld_takeBroadPhase: Dw,
    rawdeserializedworld_takeColliders: Hw,
    rawdeserializedworld_takeGravity: Pw,
    rawdeserializedworld_takeImpulseJoints: kw,
    rawdeserializedworld_takeIntegrationParameters: Fw,
    rawdeserializedworld_takeIslandManager: Lw,
    rawdeserializedworld_takeMultibodyJoints: jw,
    rawdeserializedworld_takeNarrowPhase: Gw,
    raweventqueue_clear: cw,
    raweventqueue_drainCollisionEvents: sw,
    raweventqueue_drainContactForceEvents: aw,
    raweventqueue_new: iw,
    rawgenericjoint_fixed: Q7,
    rawgenericjoint_prismatic: K7,
    rawgenericjoint_revolute: X7,
    rawgenericjoint_rope: V7,
    rawgenericjoint_spring: J7,
    rawimpulsejointset_contains: y7,
    rawimpulsejointset_createJoint: g7,
    rawimpulsejointset_forEachJointAttachedToRigidBody: v7,
    rawimpulsejointset_forEachJointHandle: A7,
    rawimpulsejointset_jointAnchor1: t7,
    rawimpulsejointset_jointAnchor2: r7,
    rawimpulsejointset_jointBodyHandle1: Y8,
    rawimpulsejointset_jointBodyHandle2: Z8,
    rawimpulsejointset_jointConfigureMotor: _7,
    rawimpulsejointset_jointConfigureMotorModel: d7,
    rawimpulsejointset_jointConfigureMotorPosition: p7,
    rawimpulsejointset_jointConfigureMotorVelocity: f7,
    rawimpulsejointset_jointContactsEnabled: i7,
    rawimpulsejointset_jointFrameX1: $8,
    rawimpulsejointset_jointFrameX2: e7,
    rawimpulsejointset_jointLimitsEnabled: a7,
    rawimpulsejointset_jointLimitsMax: l7,
    rawimpulsejointset_jointLimitsMin: c7,
    rawimpulsejointset_jointSetAnchor1: n7,
    rawimpulsejointset_jointSetAnchor2: o7,
    rawimpulsejointset_jointSetContactsEnabled: s7,
    rawimpulsejointset_jointSetLimits: u7,
    rawimpulsejointset_jointType: q8,
    rawimpulsejointset_len: b7,
    rawimpulsejointset_new: m7,
    rawimpulsejointset_remove: w7,
    rawintegrationparameters_contact_erp: M7,
    rawintegrationparameters_dt: R7,
    rawintegrationparameters_lengthUnit: x7,
    rawintegrationparameters_maxCcdSubsteps: T7,
    rawintegrationparameters_minIslandSize: I7,
    rawintegrationparameters_new: S7,
    rawintegrationparameters_normalizedAllowedLinearError: lb,
    rawintegrationparameters_normalizedPredictionDistance: Qw,
    rawintegrationparameters_numInternalPgsIterations: B7,
    rawintegrationparameters_numSolverIterations: E7,
    rawintegrationparameters_set_contact_natural_frequency: F7,
    rawintegrationparameters_set_dt: P7,
    rawintegrationparameters_set_lengthUnit: j7,
    rawintegrationparameters_set_maxCcdSubsteps: k7,
    rawintegrationparameters_set_minIslandSize: H7,
    rawintegrationparameters_set_normalizedAllowedLinearError: L7,
    rawintegrationparameters_set_normalizedPredictionDistance: D7,
    rawintegrationparameters_set_numInternalPgsIterations: O7,
    rawintegrationparameters_set_numSolverIterations: G7,
    rawislandmanager_forEachActiveRigidBodyHandle: z7,
    rawislandmanager_new: N7,
    rawkinematiccharactercontroller_autostepEnabled: f8,
    rawkinematiccharactercontroller_autostepIncludesDynamicBodies: d8,
    rawkinematiccharactercontroller_autostepMaxHeight: l8,
    rawkinematiccharactercontroller_autostepMinWidth: u8,
    rawkinematiccharactercontroller_computeColliderMovement: C8,
    rawkinematiccharactercontroller_computedCollision: E8,
    rawkinematiccharactercontroller_computedGrounded: R8,
    rawkinematiccharactercontroller_computedMovement: S8,
    rawkinematiccharactercontroller_disableAutostep: _8,
    rawkinematiccharactercontroller_disableSnapToGround: A8,
    rawkinematiccharactercontroller_enableAutostep: p8,
    rawkinematiccharactercontroller_enableSnapToGround: y8,
    rawkinematiccharactercontroller_maxSlopeClimbAngle: h8,
    rawkinematiccharactercontroller_minSlopeSlideAngle: g8,
    rawkinematiccharactercontroller_new: t8,
    rawkinematiccharactercontroller_normalNudgeFactor: n8,
    rawkinematiccharactercontroller_numComputedCollisions: M8,
    rawkinematiccharactercontroller_offset: i8,
    rawkinematiccharactercontroller_setMaxSlopeClimbAngle: m8,
    rawkinematiccharactercontroller_setMinSlopeSlideAngle: w8,
    rawkinematiccharactercontroller_setNormalNudgeFactor: o8,
    rawkinematiccharactercontroller_setOffset: s8,
    rawkinematiccharactercontroller_setSlideEnabled: c8,
    rawkinematiccharactercontroller_setUp: r8,
    rawkinematiccharactercontroller_slideEnabled: a8,
    rawkinematiccharactercontroller_snapToGroundDistance: b8,
    rawkinematiccharactercontroller_snapToGroundEnabled: v8,
    rawkinematiccharactercontroller_up: Cb,
    rawmultibodyjointset_contains: u_,
    rawmultibodyjointset_createJoint: c_,
    rawmultibodyjointset_forEachJointAttachedToRigidBody: f_,
    rawmultibodyjointset_forEachJointHandle: d_,
    rawmultibodyjointset_jointAnchor1: $7,
    rawmultibodyjointset_jointAnchor2: e_,
    rawmultibodyjointset_jointContactsEnabled: t_,
    rawmultibodyjointset_jointFrameX1: Y7,
    rawmultibodyjointset_jointFrameX2: Z7,
    rawmultibodyjointset_jointLimitsEnabled: n_,
    rawmultibodyjointset_jointLimitsMax: i_,
    rawmultibodyjointset_jointLimitsMin: o_,
    rawmultibodyjointset_jointSetContactsEnabled: r_,
    rawmultibodyjointset_jointType: q7,
    rawmultibodyjointset_new: a_,
    rawmultibodyjointset_remove: l_,
    rawnarrowphase_contact_pair: Am,
    rawnarrowphase_contact_pairs_with: ym,
    rawnarrowphase_intersection_pair: Cm,
    rawnarrowphase_intersection_pairs_with: vm,
    rawnarrowphase_new: bm,
    rawphysicspipeline_is_profiler_enabled: fw,
    rawphysicspipeline_new: uw,
    rawphysicspipeline_set_profiler_enabled: dw,
    rawphysicspipeline_step: Iw,
    rawphysicspipeline_stepWithEvents: Tw,
    rawphysicspipeline_timing_broad_phase: hw,
    rawphysicspipeline_timing_ccd: vw,
    rawphysicspipeline_timing_ccd_broad_phase: Sw,
    rawphysicspipeline_timing_ccd_narrow_phase: Rw,
    rawphysicspipeline_timing_ccd_solver: Mw,
    rawphysicspipeline_timing_ccd_toi_computation: Cw,
    rawphysicspipeline_timing_collision_detection: _w,
    rawphysicspipeline_timing_island_construction: Ew,
    rawphysicspipeline_timing_narrow_phase: mw,
    rawphysicspipeline_timing_solver: gw,
    rawphysicspipeline_timing_step: pw,
    rawphysicspipeline_timing_user_changes: Bw,
    rawphysicspipeline_timing_velocity_assembly: ww,
    rawphysicspipeline_timing_velocity_resolution: bw,
    rawphysicspipeline_timing_velocity_update: yw,
    rawphysicspipeline_timing_velocity_writeback: Aw,
    rawpidcontroller_angular_correction: Q8,
    rawpidcontroller_apply_angular_correction: V8,
    rawpidcontroller_apply_linear_correction: J8,
    rawpidcontroller_linear_correction: K8,
    rawpidcontroller_new: k8,
    rawpidcontroller_reset_integrals: W8,
    rawpidcontroller_set_axes_mask: z8,
    rawpidcontroller_set_kd: N8,
    rawpidcontroller_set_ki: U8,
    rawpidcontroller_set_kp: j8,
    rawpointcolliderprojection_colliderHandle: Zm,
    rawpointcolliderprojection_featureId: rg,
    rawpointcolliderprojection_featureType: tg,
    rawpointcolliderprojection_isInside: eg,
    rawpointcolliderprojection_point: $m,
    rawpointprojection_isInside: qm,
    rawpointprojection_point: Xm,
    rawraycolliderhit_colliderHandle: rb,
    rawraycolliderhit_timeOfImpact: nb,
    rawraycolliderintersection_colliderHandle: Yw,
    rawraycolliderintersection_featureId: Kw,
    rawraycolliderintersection_featureType: $w,
    rawraycolliderintersection_normal: yb,
    rawraycolliderintersection_time_of_impact: eb,
    rawrayintersection_featureId: Vw,
    rawrayintersection_featureType: qw,
    rawrayintersection_normal: wb,
    rawrayintersection_time_of_impact: Zw,
    rawrigidbodyset_contains: x6,
    rawrigidbodyset_createRigidBody: B6,
    rawrigidbodyset_forEachRigidBodyHandle: P6,
    rawrigidbodyset_len: T6,
    rawrigidbodyset_new: E6,
    rawrigidbodyset_propagateModifiedBodyPositionsToColliders: F6,
    rawrigidbodyset_rbAddForce: _6,
    rawrigidbodyset_rbAddForceAtPoint: w6,
    rawrigidbodyset_rbAddTorque: m6,
    rawrigidbodyset_rbAdditionalSolverIterations: y6,
    rawrigidbodyset_rbAngularDamping: i6,
    rawrigidbodyset_rbAngvel: T_,
    rawrigidbodyset_rbApplyImpulse: h6,
    rawrigidbodyset_rbApplyImpulseAtPoint: b6,
    rawrigidbodyset_rbApplyTorqueImpulse: g6,
    rawrigidbodyset_rbBodyType: $_,
    rawrigidbodyset_rbCollider: Z_,
    rawrigidbodyset_rbDominanceGroup: D_,
    rawrigidbodyset_rbEffectiveAngularInertia: K_,
    rawrigidbodyset_rbEffectiveInvMass: U_,
    rawrigidbodyset_rbEffectiveWorldInvInertia: V_,
    rawrigidbodyset_rbEnableCcd: O_,
    rawrigidbodyset_rbGravityScale: u6,
    rawrigidbodyset_rbInvMass: j_,
    rawrigidbodyset_rbInvPrincipalInertia: W_,
    rawrigidbodyset_rbIsCcdEnabled: X_,
    rawrigidbodyset_rbIsDynamic: n6,
    rawrigidbodyset_rbIsEnabled: l6,
    rawrigidbodyset_rbIsFixed: t6,
    rawrigidbodyset_rbIsKinematic: r6,
    rawrigidbodyset_rbIsMoving: g_,
    rawrigidbodyset_rbIsSleeping: m_,
    rawrigidbodyset_rbLinearDamping: o6,
    rawrigidbodyset_rbLinvel: I_,
    rawrigidbodyset_rbLocalCom: N_,
    rawrigidbodyset_rbLockRotations: L_,
    rawrigidbodyset_rbLockTranslations: P_,
    rawrigidbodyset_rbMass: k_,
    rawrigidbodyset_rbNextRotation: b_,
    rawrigidbodyset_rbNextTranslation: w_,
    rawrigidbodyset_rbNumColliders: Y_,
    rawrigidbodyset_rbPrincipalInertia: J_,
    rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: M_,
    rawrigidbodyset_rbResetForces: f6,
    rawrigidbodyset_rbResetTorques: p6,
    rawrigidbodyset_rbRotation: __,
    rawrigidbodyset_rbSetAdditionalMass: E_,
    rawrigidbodyset_rbSetAdditionalMassProperties: B_,
    rawrigidbodyset_rbSetAdditionalSolverIterations: A6,
    rawrigidbodyset_rbSetAngularDamping: a6,
    rawrigidbodyset_rbSetAngvel: C_,
    rawrigidbodyset_rbSetBodyType: e6,
    rawrigidbodyset_rbSetDominanceGroup: G_,
    rawrigidbodyset_rbSetEnabled: c6,
    rawrigidbodyset_rbSetEnabledTranslations: F_,
    rawrigidbodyset_rbSetGravityScale: d6,
    rawrigidbodyset_rbSetLinearDamping: s6,
    rawrigidbodyset_rbSetLinvel: v_,
    rawrigidbodyset_rbSetNextKinematicRotation: R_,
    rawrigidbodyset_rbSetNextKinematicTranslation: S_,
    rawrigidbodyset_rbSetRotation: A_,
    rawrigidbodyset_rbSetSoftCcdPrediction: H_,
    rawrigidbodyset_rbSetTranslation: y_,
    rawrigidbodyset_rbSetUserData: C6,
    rawrigidbodyset_rbSleep: h_,
    rawrigidbodyset_rbSoftCcdPrediction: q_,
    rawrigidbodyset_rbTranslation: p_,
    rawrigidbodyset_rbUserData: v6,
    rawrigidbodyset_rbUserForce: S6,
    rawrigidbodyset_rbUserTorque: R6,
    rawrigidbodyset_rbVelocityAtPoint: x_,
    rawrigidbodyset_rbWakeUp: Q_,
    rawrigidbodyset_rbWorldCom: z_,
    rawrigidbodyset_remove: I6,
    rawrotation_angle: Ug,
    rawrotation_fromAngle: jg,
    rawrotation_identity: kg,
    rawrotation_im: ob,
    rawrotation_re: ib,
    rawserializationpipeline_deserializeAll: Nw,
    rawserializationpipeline_new: Eb,
    rawserializationpipeline_serializeAll: Uw,
    rawshape_ball: ag,
    rawshape_capsule: lg,
    rawshape_castRay: Bg,
    rawshape_castRayAndGetNormal: Ig,
    rawshape_castShape: vg,
    rawshape_contactShape: Sg,
    rawshape_containsPoint: Rg,
    rawshape_convexHull: wg,
    rawshape_convexPolyline: yg,
    rawshape_cuboid: ig,
    rawshape_halfspace: cg,
    rawshape_heightfield: _g,
    rawshape_intersectsRay: Eg,
    rawshape_intersectsShape: Cg,
    rawshape_polyline: fg,
    rawshape_projectPoint: Mg,
    rawshape_roundConvexHull: bg,
    rawshape_roundConvexPolyline: Ag,
    rawshape_roundCuboid: sg,
    rawshape_roundTriangle: gg,
    rawshape_segment: hg,
    rawshape_triangle: mg,
    rawshape_trimesh: pg,
    rawshape_voxels: ug,
    rawshape_voxelsFromPoints: dg,
    rawshapecasthit_normal1: Ab,
    rawshapecasthit_normal2: vb,
    rawshapecasthit_time_of_impact: tb,
    rawshapecasthit_witness1: Tg,
    rawshapecasthit_witness2: bb,
    rawshapecontact_distance: Xw,
    rawshapecontact_normal1: Sb,
    rawshapecontact_normal2: hb,
    rawshapecontact_point1: mb,
    rawshapecontact_point2: gb,
    rawvector_new: Wg,
    rawvector_set_x: Ww,
    rawvector_set_y: Jg,
    rawvector_x: sb,
    rawvector_xy: Vg,
    rawvector_y: ab,
    rawvector_yx: Kg,
    rawvector_zero: zg,
    reserve_memory: Jw,
    version: $p
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fp(Pb);
  Fb = class {
    constructor(e, t) {
      this.x = e, this.y = t;
    }
  };
  fe = class {
    static new(e, t) {
      return new Fb(e, t);
    }
    static zeros() {
      return fe.new(0, 0);
    }
    static fromRaw(e) {
      if (!e) return null;
      let t = fe.new(e.x, e.y);
      return e.free(), t;
    }
    static intoRaw(e) {
      return new X(e.x, e.y);
    }
    static copy(e, t) {
      e.x = t.x, e.y = t.y;
    }
  };
  qt = class {
    static identity() {
      return 0;
    }
    static fromRaw(e) {
      if (!e) return null;
      let t = e.angle;
      return e.free(), t;
    }
    static intoRaw(e) {
      return $e.fromAngle(e);
    }
  };
  (function(r) {
    r[r.Average = 0] = "Average", r[r.Min = 1] = "Min", r[r.Multiply = 2] = "Multiply", r[r.Max = 3] = "Max";
  })(P0 || (P0 = {}));
  (function(r) {
    r[r.Vertex = 0] = "Vertex", r[r.Face = 1] = "Face", r[r.Unknown = 2] = "Unknown";
  })(li || (li = {}));
  LM = class {
    constructor(e, t) {
      this.origin = e, this.dir = t;
    }
    pointAt(e) {
      return {
        x: this.origin.x + this.dir.x * e,
        y: this.origin.y + this.dir.y * e
      };
    }
  };
  $0 = class {
    constructor(e, t, n, o) {
      this.featureType = li.Unknown, this.featureId = void 0, this.timeOfImpact = e, this.normal = t, o !== void 0 && (this.featureId = o), n !== void 0 && (this.featureType = n);
    }
    static fromRaw(e) {
      if (!e) return null;
      const t = new $0(e.time_of_impact(), fe.fromRaw(e.normal()), e.featureType(), e.featureId());
      return e.free(), t;
    }
  };
  Ld = class {
    constructor(e, t, n, o, i) {
      this.featureType = li.Unknown, this.featureId = void 0, this.collider = e, this.timeOfImpact = t, this.normal = n, i !== void 0 && (this.featureId = i), o !== void 0 && (this.featureType = o);
    }
    static fromRaw(e, t) {
      if (!t) return null;
      const n = new Ld(e.get(t.colliderHandle()), t.time_of_impact(), fe.fromRaw(t.normal()), t.featureType(), t.featureId());
      return t.free(), n;
    }
  };
  Dd = class {
    constructor(e, t) {
      this.collider = e, this.timeOfImpact = t;
    }
    static fromRaw(e, t) {
      if (!t) return null;
      const n = new Dd(e.get(t.colliderHandle()), t.timeOfImpact());
      return t.free(), n;
    }
  };
  es = class {
    constructor(e, t) {
      this.point = e, this.isInside = t;
    }
    static fromRaw(e) {
      if (!e) return null;
      const t = new es(fe.fromRaw(e.point()), e.isInside());
      return e.free(), t;
    }
  };
  Gd = class {
    constructor(e, t, n, o, i) {
      this.featureType = li.Unknown, this.featureId = void 0, this.collider = e, this.point = t, this.isInside = n, i !== void 0 && (this.featureId = i), o !== void 0 && (this.featureType = o);
    }
    static fromRaw(e, t) {
      if (!t) return null;
      const n = new Gd(e.get(t.colliderHandle()), fe.fromRaw(t.point()), t.isInside(), t.featureType(), t.featureId());
      return t.free(), n;
    }
  };
  Ri = class {
    constructor(e, t, n, o, i) {
      this.time_of_impact = e, this.witness1 = t, this.witness2 = n, this.normal1 = o, this.normal2 = i;
    }
    static fromRaw(e, t) {
      if (!t) return null;
      const n = new Ri(t.time_of_impact(), fe.fromRaw(t.witness1()), fe.fromRaw(t.witness2()), fe.fromRaw(t.normal1()), fe.fromRaw(t.normal2()));
      return t.free(), n;
    }
  };
  Hc = class extends Ri {
    constructor(e, t, n, o, i, s) {
      super(t, n, o, i, s), this.collider = e;
    }
    static fromRaw(e, t) {
      if (!t) return null;
      const n = new Hc(e.get(t.colliderHandle()), t.time_of_impact(), fe.fromRaw(t.witness1()), fe.fromRaw(t.witness2()), fe.fromRaw(t.normal1()), fe.fromRaw(t.normal2()));
      return t.free(), n;
    }
  };
  ui = class {
    constructor(e, t, n, o, i) {
      this.distance = e, this.point1 = t, this.point2 = n, this.normal1 = o, this.normal2 = i;
    }
    static fromRaw(e) {
      if (!e) return null;
      const t = new ui(e.distance(), fe.fromRaw(e.point1()), fe.fromRaw(e.point2()), fe.fromRaw(e.normal1()), fe.fromRaw(e.normal2()));
      return e.free(), t;
    }
  };
  ar = class {
    static fromRaw(e, t) {
      const n = e.coShapeType(t);
      let o, i, s, c, l, a, p;
      switch (n) {
        case lr.Ball:
          return new Od(e.coRadius(t));
        case lr.Cuboid:
          return o = e.coHalfExtents(t), new kd(o.x, o.y);
        case lr.RoundCuboid:
          return o = e.coHalfExtents(t), i = e.coRoundRadius(t), new jd(o.x, o.y, i);
        case lr.Capsule:
          return l = e.coHalfHeight(t), a = e.coRadius(t), new Ud(l, a);
        case lr.Segment:
          return s = e.coVertices(t), new Nd(fe.new(s[0], s[1]), fe.new(s[2], s[3]));
        case lr.Polyline:
          return s = e.coVertices(t), c = e.coIndices(t), new Jd(s, c);
        case lr.Triangle:
          return s = e.coVertices(t), new zd(fe.new(s[0], s[1]), fe.new(s[2], s[3]), fe.new(s[4], s[5]));
        case lr.RoundTriangle:
          return s = e.coVertices(t), i = e.coRoundRadius(t), new Wd(fe.new(s[0], s[1]), fe.new(s[2], s[3]), fe.new(s[4], s[5]), i);
        case lr.HalfSpace:
          return p = fe.fromRaw(e.coHalfspaceNormal(t)), new Hd(p);
        case lr.Voxels:
          const f = e.coVoxelData(t), d = e.coVoxelSize(t);
          return new Vd(f, d);
        case lr.TriMesh:
          s = e.coVertices(t), c = e.coIndices(t);
          const _ = e.coTriMeshFlags(t);
          return new Kd(s, c, _);
        case lr.HeightField:
          const h = e.coHeightfieldScale(t), b = e.coHeightfieldHeights(t);
          return new Qd(b, h);
        case lr.ConvexPolygon:
          return s = e.coVertices(t), new Ka(s, false);
        case lr.RoundConvexPolygon:
          return s = e.coVertices(t), i = e.coRoundRadius(t), new Qa(s, i, false);
        default:
          throw new Error("unknown shape type: " + n);
      }
    }
    castShape(e, t, n, o, i, s, c, l, a, p) {
      let f = fe.intoRaw(e), d = qt.intoRaw(t), _ = fe.intoRaw(n), h = fe.intoRaw(i), b = qt.intoRaw(s), g = fe.intoRaw(c), y = this.intoRaw(), A = o.intoRaw(), C = Ri.fromRaw(null, y.castShape(f, d, _, A, h, b, g, l, a, p));
      return f.free(), d.free(), _.free(), h.free(), b.free(), g.free(), y.free(), A.free(), C;
    }
    intersectsShape(e, t, n, o, i) {
      let s = fe.intoRaw(e), c = qt.intoRaw(t), l = fe.intoRaw(o), a = qt.intoRaw(i), p = this.intoRaw(), f = n.intoRaw(), d = p.intersectsShape(s, c, f, l, a);
      return s.free(), c.free(), l.free(), a.free(), p.free(), f.free(), d;
    }
    contactShape(e, t, n, o, i, s) {
      let c = fe.intoRaw(e), l = qt.intoRaw(t), a = fe.intoRaw(o), p = qt.intoRaw(i), f = this.intoRaw(), d = n.intoRaw(), _ = ui.fromRaw(f.contactShape(c, l, d, a, p, s));
      return c.free(), l.free(), a.free(), p.free(), f.free(), d.free(), _;
    }
    containsPoint(e, t, n) {
      let o = fe.intoRaw(e), i = qt.intoRaw(t), s = fe.intoRaw(n), c = this.intoRaw(), l = c.containsPoint(o, i, s);
      return o.free(), i.free(), s.free(), c.free(), l;
    }
    projectPoint(e, t, n, o) {
      let i = fe.intoRaw(e), s = qt.intoRaw(t), c = fe.intoRaw(n), l = this.intoRaw(), a = es.fromRaw(l.projectPoint(i, s, c, o));
      return i.free(), s.free(), c.free(), l.free(), a;
    }
    intersectsRay(e, t, n, o) {
      let i = fe.intoRaw(t), s = qt.intoRaw(n), c = fe.intoRaw(e.origin), l = fe.intoRaw(e.dir), a = this.intoRaw(), p = a.intersectsRay(i, s, c, l, o);
      return i.free(), s.free(), c.free(), l.free(), a.free(), p;
    }
    castRay(e, t, n, o, i) {
      let s = fe.intoRaw(t), c = qt.intoRaw(n), l = fe.intoRaw(e.origin), a = fe.intoRaw(e.dir), p = this.intoRaw(), f = p.castRay(s, c, l, a, o, i);
      return s.free(), c.free(), l.free(), a.free(), p.free(), f;
    }
    castRayAndGetNormal(e, t, n, o, i) {
      let s = fe.intoRaw(t), c = qt.intoRaw(n), l = fe.intoRaw(e.origin), a = fe.intoRaw(e.dir), p = this.intoRaw(), f = $0.fromRaw(p.castRayAndGetNormal(s, c, l, a, o, i));
      return s.free(), c.free(), l.free(), a.free(), p.free(), f;
    }
  };
  (function(r) {
    r[r.Ball = 0] = "Ball", r[r.Cuboid = 1] = "Cuboid", r[r.Capsule = 2] = "Capsule", r[r.Segment = 3] = "Segment", r[r.Polyline = 4] = "Polyline", r[r.Triangle = 5] = "Triangle", r[r.TriMesh = 6] = "TriMesh", r[r.HeightField = 7] = "HeightField", r[r.ConvexPolygon = 9] = "ConvexPolygon", r[r.RoundCuboid = 10] = "RoundCuboid", r[r.RoundTriangle = 11] = "RoundTriangle", r[r.RoundConvexPolygon = 12] = "RoundConvexPolygon", r[r.HalfSpace = 13] = "HalfSpace", r[r.Voxels = 14] = "Voxels";
  })(er || (er = {}));
  (function(r) {
    r[r.DELETE_BAD_TOPOLOGY_TRIANGLES = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES", r[r.ORIENTED = 8] = "ORIENTED", r[r.MERGE_DUPLICATE_VERTICES = 16] = "MERGE_DUPLICATE_VERTICES", r[r.DELETE_DEGENERATE_TRIANGLES = 32] = "DELETE_DEGENERATE_TRIANGLES", r[r.DELETE_DUPLICATE_TRIANGLES = 64] = "DELETE_DUPLICATE_TRIANGLES", r[r.FIX_INTERNAL_EDGES = 144] = "FIX_INTERNAL_EDGES";
  })(n1 || (n1 = {}));
  Od = class extends ar {
    constructor(e) {
      super(), this.type = er.Ball, this.radius = e;
    }
    intoRaw() {
      return He.ball(this.radius);
    }
  };
  Hd = class extends ar {
    constructor(e) {
      super(), this.type = er.HalfSpace, this.normal = e;
    }
    intoRaw() {
      let e = fe.intoRaw(this.normal), t = He.halfspace(e);
      return e.free(), t;
    }
  };
  kd = class extends ar {
    constructor(e, t) {
      super(), this.type = er.Cuboid, this.halfExtents = fe.new(e, t);
    }
    intoRaw() {
      return He.cuboid(this.halfExtents.x, this.halfExtents.y);
    }
  };
  jd = class extends ar {
    constructor(e, t, n) {
      super(), this.type = er.RoundCuboid, this.halfExtents = fe.new(e, t), this.borderRadius = n;
    }
    intoRaw() {
      return He.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.borderRadius);
    }
  };
  Ud = class extends ar {
    constructor(e, t) {
      super(), this.type = er.Capsule, this.halfHeight = e, this.radius = t;
    }
    intoRaw() {
      return He.capsule(this.halfHeight, this.radius);
    }
  };
  Nd = class extends ar {
    constructor(e, t) {
      super(), this.type = er.Segment, this.a = e, this.b = t;
    }
    intoRaw() {
      let e = fe.intoRaw(this.a), t = fe.intoRaw(this.b), n = He.segment(e, t);
      return e.free(), t.free(), n;
    }
  };
  zd = class extends ar {
    constructor(e, t, n) {
      super(), this.type = er.Triangle, this.a = e, this.b = t, this.c = n;
    }
    intoRaw() {
      let e = fe.intoRaw(this.a), t = fe.intoRaw(this.b), n = fe.intoRaw(this.c), o = He.triangle(e, t, n);
      return e.free(), t.free(), n.free(), o;
    }
  };
  Wd = class extends ar {
    constructor(e, t, n, o) {
      super(), this.type = er.RoundTriangle, this.a = e, this.b = t, this.c = n, this.borderRadius = o;
    }
    intoRaw() {
      let e = fe.intoRaw(this.a), t = fe.intoRaw(this.b), n = fe.intoRaw(this.c), o = He.roundTriangle(e, t, n, this.borderRadius);
      return e.free(), t.free(), n.free(), o;
    }
  };
  Jd = class extends ar {
    constructor(e, t) {
      super(), this.type = er.Polyline, this.vertices = e, this.indices = t ?? new Uint32Array(0);
    }
    intoRaw() {
      return He.polyline(this.vertices, this.indices);
    }
  };
  Vd = class extends ar {
    constructor(e, t) {
      super(), this.type = er.Voxels, this.data = e, this.voxelSize = t;
    }
    intoRaw() {
      let e = fe.intoRaw(this.voxelSize), t;
      return this.data instanceof Int32Array ? t = He.voxels(e, this.data) : t = He.voxelsFromPoints(e, this.data), e.free(), t;
    }
  };
  Kd = class extends ar {
    constructor(e, t, n) {
      super(), this.type = er.TriMesh, this.vertices = e, this.indices = t, this.flags = n;
    }
    intoRaw() {
      return He.trimesh(this.vertices, this.indices, this.flags);
    }
  };
  Ka = class extends ar {
    constructor(e, t) {
      super(), this.type = er.ConvexPolygon, this.vertices = e, this.skipConvexHullComputation = !!t;
    }
    intoRaw() {
      return this.skipConvexHullComputation ? He.convexPolyline(this.vertices) : He.convexHull(this.vertices);
    }
  };
  Qa = class extends ar {
    constructor(e, t, n) {
      super(), this.type = er.RoundConvexPolygon, this.vertices = e, this.borderRadius = t, this.skipConvexHullComputation = !!n;
    }
    intoRaw() {
      return this.skipConvexHullComputation ? He.roundConvexPolyline(this.vertices, this.borderRadius) : He.roundConvexHull(this.vertices, this.borderRadius);
    }
  };
  Qd = class extends ar {
    constructor(e, t) {
      super(), this.type = er.HeightField, this.heights = e, this.scale = t;
    }
    intoRaw() {
      let e = fe.intoRaw(this.scale), t = He.heightfield(this.heights, e);
      return e.free(), t;
    }
  };
  (function(r) {
    r[r.NONE = 0] = "NONE", r[r.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", r[r.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
  })(Xa || (Xa = {}));
  Lb = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    collider1() {
      return this.raw.collider1();
    }
    collider2() {
      return this.raw.collider2();
    }
    totalForce() {
      return fe.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
      return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
      return fe.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
      return this.raw.max_force_magnitude();
    }
  };
  Db = class {
    constructor(e, t) {
      this.raw = t || new Fd(e);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    drainCollisionEvents(e) {
      this.raw.drainCollisionEvents(e);
    }
    drainContactForceEvents(e) {
      let t = new Lb();
      this.raw.drainContactForceEvents((n) => {
        t.raw = n, e(t), t.free();
      });
    }
    clear() {
      this.raw.clear();
    }
  };
  (function(r) {
    r[r.NONE = 0] = "NONE", r[r.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", r[r.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
  })(qa || (qa = {}));
  (function(r) {
    r[r.EMPTY = 0] = "EMPTY", r[r.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
  })(o1 || (o1 = {}));
  (function(r) {
    r[r.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", r[r.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", r[r.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", r[r.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", r[r.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", r[r.FIXED_FIXED = 32] = "FIXED_FIXED", r[r.DEFAULT = 15] = "DEFAULT", r[r.ALL = 60943] = "ALL";
  })(Ya || (Ya = {}));
  GM = class {
    constructor(e, t, n, o) {
      this.colliderSet = e, this.handle = t, this._parent = n, this._shape = o;
    }
    finalizeDeserialization(e) {
      this.handle != null && (this._parent = e.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
      this._shape || (this._shape = ar.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
      return this.ensureShapeIsCached(), this._shape;
    }
    clearShapeCache() {
      this._shape = null;
    }
    isValid() {
      return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
      return fe.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    translationWrtParent() {
      return fe.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle));
    }
    rotation() {
      return qt.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    rotationWrtParent() {
      return qt.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle));
    }
    isSensor() {
      return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(e) {
      this.colliderSet.raw.coSetSensor(this.handle, e);
    }
    setShape(e) {
      let t = e.intoRaw();
      this.colliderSet.raw.coSetShape(this.handle, t), t.free(), this._shape = e;
    }
    setEnabled(e) {
      this.colliderSet.raw.coSetEnabled(this.handle, e);
    }
    isEnabled() {
      return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    setRestitution(e) {
      this.colliderSet.raw.coSetRestitution(this.handle, e);
    }
    setFriction(e) {
      this.colliderSet.raw.coSetFriction(this.handle, e);
    }
    frictionCombineRule() {
      return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    setFrictionCombineRule(e) {
      this.colliderSet.raw.coSetFrictionCombineRule(this.handle, e);
    }
    restitutionCombineRule() {
      return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    setRestitutionCombineRule(e) {
      this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, e);
    }
    setCollisionGroups(e) {
      this.colliderSet.raw.coSetCollisionGroups(this.handle, e);
    }
    setSolverGroups(e) {
      this.colliderSet.raw.coSetSolverGroups(this.handle, e);
    }
    contactSkin() {
      return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(e) {
      return this.colliderSet.raw.coSetContactSkin(this.handle, e);
    }
    activeHooks() {
      return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    setActiveHooks(e) {
      this.colliderSet.raw.coSetActiveHooks(this.handle, e);
    }
    activeEvents() {
      return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    setActiveEvents(e) {
      this.colliderSet.raw.coSetActiveEvents(this.handle, e);
    }
    activeCollisionTypes() {
      return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    setContactForceEventThreshold(e) {
      return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, e);
    }
    contactForceEventThreshold() {
      return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    setActiveCollisionTypes(e) {
      this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, e);
    }
    setDensity(e) {
      this.colliderSet.raw.coSetDensity(this.handle, e);
    }
    setMass(e) {
      this.colliderSet.raw.coSetMass(this.handle, e);
    }
    setMassProperties(e, t, n) {
      let o = fe.intoRaw(t);
      this.colliderSet.raw.coSetMassProperties(this.handle, e, o, n), o.free();
    }
    setTranslation(e) {
      this.colliderSet.raw.coSetTranslation(this.handle, e.x, e.y);
    }
    setTranslationWrtParent(e) {
      this.colliderSet.raw.coSetTranslationWrtParent(this.handle, e.x, e.y);
    }
    setRotation(e) {
      this.colliderSet.raw.coSetRotation(this.handle, e);
    }
    setRotationWrtParent(e) {
      this.colliderSet.raw.coSetRotationWrtParent(this.handle, e);
    }
    shapeType() {
      return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
      return fe.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(e) {
      const t = fe.intoRaw(e);
      this.colliderSet.raw.coSetHalfExtents(this.handle, t);
    }
    radius() {
      return this.colliderSet.raw.coRadius(this.handle);
    }
    setRadius(e) {
      this.colliderSet.raw.coSetRadius(this.handle, e);
    }
    roundRadius() {
      return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    setRoundRadius(e) {
      this.colliderSet.raw.coSetRoundRadius(this.handle, e);
    }
    halfHeight() {
      return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    setHalfHeight(e) {
      this.colliderSet.raw.coSetHalfHeight(this.handle, e);
    }
    setVoxel(e, t, n) {
      this.colliderSet.raw.coSetVoxel(this.handle, e, t, n), this._shape = null;
    }
    propagateVoxelChange(e, t, n, o, i) {
      this.colliderSet.raw.coPropagateVoxelChange(this.handle, e.handle, t, n, o, i), this._shape = null;
    }
    combineVoxelStates(e, t, n) {
      this.colliderSet.raw.coCombineVoxelStates(this.handle, e.handle, t, n), this._shape = null;
    }
    vertices() {
      return this.colliderSet.raw.coVertices(this.handle);
    }
    indices() {
      return this.colliderSet.raw.coIndices(this.handle);
    }
    heightfieldHeights() {
      return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    heightfieldScale() {
      let e = this.colliderSet.raw.coHeightfieldScale(this.handle);
      return fe.fromRaw(e);
    }
    parent() {
      return this._parent;
    }
    friction() {
      return this.colliderSet.raw.coFriction(this.handle);
    }
    restitution() {
      return this.colliderSet.raw.coRestitution(this.handle);
    }
    density() {
      return this.colliderSet.raw.coDensity(this.handle);
    }
    mass() {
      return this.colliderSet.raw.coMass(this.handle);
    }
    volume() {
      return this.colliderSet.raw.coVolume(this.handle);
    }
    collisionGroups() {
      return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    solverGroups() {
      return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    containsPoint(e) {
      let t = fe.intoRaw(e), n = this.colliderSet.raw.coContainsPoint(this.handle, t);
      return t.free(), n;
    }
    projectPoint(e, t) {
      let n = fe.intoRaw(e), o = es.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, n, t));
      return n.free(), o;
    }
    intersectsRay(e, t) {
      let n = fe.intoRaw(e.origin), o = fe.intoRaw(e.dir), i = this.colliderSet.raw.coIntersectsRay(this.handle, n, o, t);
      return n.free(), o.free(), i;
    }
    castShape(e, t, n, o, i, s, c, l) {
      let a = fe.intoRaw(e), p = fe.intoRaw(n), f = qt.intoRaw(o), d = fe.intoRaw(i), _ = t.intoRaw(), h = Ri.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, a, _, p, f, d, s, c, l));
      return a.free(), p.free(), f.free(), d.free(), _.free(), h;
    }
    castCollider(e, t, n, o, i, s) {
      let c = fe.intoRaw(e), l = fe.intoRaw(n), a = Hc.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, c, t.handle, l, o, i, s));
      return c.free(), l.free(), a;
    }
    intersectsShape(e, t, n) {
      let o = fe.intoRaw(t), i = qt.intoRaw(n), s = e.intoRaw(), c = this.colliderSet.raw.coIntersectsShape(this.handle, s, o, i);
      return o.free(), i.free(), s.free(), c;
    }
    contactShape(e, t, n, o) {
      let i = fe.intoRaw(t), s = qt.intoRaw(n), c = e.intoRaw(), l = ui.fromRaw(this.colliderSet.raw.coContactShape(this.handle, c, i, s, o));
      return i.free(), s.free(), c.free(), l;
    }
    contactCollider(e, t) {
      return ui.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, e.handle, t));
    }
    castRay(e, t, n) {
      let o = fe.intoRaw(e.origin), i = fe.intoRaw(e.dir), s = this.colliderSet.raw.coCastRay(this.handle, o, i, t, n);
      return o.free(), i.free(), s;
    }
    castRayAndGetNormal(e, t, n) {
      let o = fe.intoRaw(e.origin), i = fe.intoRaw(e.dir), s = $0.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, o, i, t, n));
      return o.free(), i.free(), s;
    }
  };
  (function(r) {
    r[r.Density = 0] = "Density", r[r.Mass = 1] = "Mass", r[r.MassProps = 2] = "MassProps";
  })(ao || (ao = {}));
  kt = class {
    constructor(e) {
      this.enabled = true, this.shape = e, this.massPropsMode = ao.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = qt.identity(), this.translation = fe.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = P0.Average, this.restitutionCombineRule = P0.Average, this.activeCollisionTypes = Ya.DEFAULT, this.activeEvents = Xa.NONE, this.activeHooks = qa.NONE, this.mass = 0, this.centerOfMass = fe.zeros(), this.contactForceEventThreshold = 0, this.contactSkin = 0, this.principalAngularInertia = 0, this.rotationsEnabled = true;
    }
    static ball(e) {
      const t = new Od(e);
      return new kt(t);
    }
    static capsule(e, t) {
      const n = new Ud(e, t);
      return new kt(n);
    }
    static segment(e, t) {
      const n = new Nd(e, t);
      return new kt(n);
    }
    static triangle(e, t, n) {
      const o = new zd(e, t, n);
      return new kt(o);
    }
    static roundTriangle(e, t, n, o) {
      const i = new Wd(e, t, n, o);
      return new kt(i);
    }
    static polyline(e, t) {
      const n = new Jd(e, t);
      return new kt(n);
    }
    static voxels(e, t) {
      const n = new Vd(e, t);
      return new kt(n);
    }
    static trimesh(e, t, n) {
      const o = new Kd(e, t, n);
      return new kt(o);
    }
    static cuboid(e, t) {
      const n = new kd(e, t);
      return new kt(n);
    }
    static roundCuboid(e, t, n) {
      const o = new jd(e, t, n);
      return new kt(o);
    }
    static halfspace(e) {
      const t = new Hd(e);
      return new kt(t);
    }
    static heightfield(e, t) {
      const n = new Qd(e, t);
      return new kt(n);
    }
    static convexHull(e) {
      const t = new Ka(e, false);
      return new kt(t);
    }
    static convexPolyline(e) {
      const t = new Ka(e, true);
      return new kt(t);
    }
    static roundConvexHull(e, t) {
      const n = new Qa(e, t, false);
      return new kt(n);
    }
    static roundConvexPolyline(e, t) {
      const n = new Qa(e, t, true);
      return new kt(n);
    }
    setTranslation(e, t) {
      if (typeof e != "number" || typeof t != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: e,
        y: t
      }, this;
    }
    setRotation(e) {
      return this.rotation = e, this;
    }
    setSensor(e) {
      return this.isSensor = e, this;
    }
    setEnabled(e) {
      return this.enabled = e, this;
    }
    setContactSkin(e) {
      return this.contactSkin = e, this;
    }
    setDensity(e) {
      return this.massPropsMode = ao.Density, this.density = e, this;
    }
    setMass(e) {
      return this.massPropsMode = ao.Mass, this.mass = e, this;
    }
    setMassProperties(e, t, n) {
      return this.massPropsMode = ao.MassProps, this.mass = e, fe.copy(this.centerOfMass, t), this.principalAngularInertia = n, this;
    }
    setRestitution(e) {
      return this.restitution = e, this;
    }
    setFriction(e) {
      return this.friction = e, this;
    }
    setFrictionCombineRule(e) {
      return this.frictionCombineRule = e, this;
    }
    setRestitutionCombineRule(e) {
      return this.restitutionCombineRule = e, this;
    }
    setCollisionGroups(e) {
      return this.collisionGroups = e, this;
    }
    setSolverGroups(e) {
      return this.solverGroups = e, this;
    }
    setActiveHooks(e) {
      return this.activeHooks = e, this;
    }
    setActiveEvents(e) {
      return this.activeEvents = e, this;
    }
    setActiveCollisionTypes(e) {
      return this.activeCollisionTypes = e, this;
    }
    setContactForceEventThreshold(e) {
      return this.contactForceEventThreshold = e, this;
    }
  };
  const kc = 6.5, Gb = 6.5, or = 0.0269875 * 0.5, Xd = -0.045, ct = 0, Pt = 1, qd = 2, Yd = 3, $r = 4, F0 = 5, Zd = 6, Ko = 7, $d = 8, w0 = 9, Za = 10, e3 = 11, Ob = 0.03, Hb = 0.25, kb = 0.25, $s = 0.8, i1 = 3e3, jb = 2, t3 = 5, Ub = (r) => {
    let e;
    const t = {
      get(s, c) {
        return e || (e = r()), Reflect.get(e, c);
      },
      set(s, c, l) {
        return e || (e = r()), Reflect.set(e, c, l);
      }
    };
    return {
      proxy: new Proxy({}, t),
      reset: () => {
        e = void 0;
      },
      set: (s) => {
        e = s;
      }
    };
  };
  function $n(r) {
    const e = u.useRef(null);
    return e.current === null && (e.current = {
      value: typeof r == "function" ? r() : r
    }), e.current.value;
  }
  const s1 = async () => await n9(() => import("./rapier-Bi6UcDs9.js").then(async (m10) => {
    await m10.__tla;
    return m10;
  }), __vite__mapDeps([0,1,2,3])), eo = new Pr(0, 0), Hr = new F(0, 0, 0), Nb = (r, e, t) => {
    const n = Math.PI * 2, o = (r % n + n) % n;
    let s = (e % n + n) % n - o;
    return s > Math.PI ? s -= n : s < -Math.PI && (s += n), o + s * t;
  }, e0 = (r, e) => {
    var _a2;
    return {
      target: {
        rigidBody: r.rigidBody.object,
        collider: r.collider.object
      },
      other: {
        rigidBody: e.rigidBody.object,
        collider: e.collider.object,
        object: (_a2 = e.rigidBody.state) == null ? void 0 : _a2.object
      }
    };
  }, r3 = u.createContext(void 0), t0 = [
    0,
    -9.81 * Math.sin(Gb * Math.PI / 180)
  ], zb = 100, r0 = 1 / 120, Wb = ({ children: r }) => {
    const e = r9(s1, [
      "@react-three/rapier2d",
      s1
    ]), { proxy: t, reset: n } = $n(() => Ub(() => new e.World(new e.Vector2(t0[0], t0[1])))), o = $n(() => new Db(false)), i = $n(() => /* @__PURE__ */ new Set()), s = $n(() => /* @__PURE__ */ new Set()), c = $n(() => /* @__PURE__ */ new Map()), l = $n(() => /* @__PURE__ */ new Map()), a = u.useCallback((_, h) => (c.set(_, h), () => {
      c.delete(_);
    }), [
      c
    ]);
    u.useEffect(() => {
      const _ = t;
      _.gravity = new e.Vector2(t0[0], t0[1]), _.numSolverIterations = zb, _.integrationParameters.maxCcdSubsteps = 10;
    }, [
      t,
      e.Vector2
    ]), u.useEffect(() => () => {
      t.free(), i.clear(), s.clear(), c.clear(), l.clear(), n();
    }, []);
    const p = u.useMemo(() => ({
      RAPIER: e,
      world: t,
      eventQueue: o,
      rigidBodyStates: l,
      colliderEvents: c,
      beforeStepCallbacks: i,
      afterStepCallbacks: s,
      subscribeToColliderEvents: a
    }), [
      e,
      t,
      o,
      l,
      c,
      i,
      s,
      a
    ]), f = u.useCallback((_) => {
      var _a2;
      const h = t.getCollider(_), b = (_a2 = h == null ? void 0 : h.parent()) == null ? void 0 : _a2.handle, g = b === void 0 ? void 0 : t.getRigidBody(b), y = b === void 0 ? void 0 : l.get(b);
      return {
        collider: {
          object: h,
          events: c.get(_)
        },
        rigidBody: {
          object: g,
          state: y
        }
      };
    }, []), [d] = u.useState({
      previousState: {},
      accumulator: 0
    });
    return it((_, h) => {
      const b = h, g = t, y = wo(b, 0, 0.5), A = (S) => {
        i.forEach((B) => {
          B.current(g);
        }), g.timestep = S, g.step(o), s.forEach((B) => {
          B.current(g);
        });
      };
      for (d.accumulator += y; d.accumulator >= r0; ) d.previousState = {}, g.forEachRigidBody((S) => {
        d.previousState[S.handle] = {
          position: S.translation(),
          rotation: S.rotation()
        };
      }), A(r0), d.accumulator -= r0;
      const C = d.accumulator / r0;
      l.forEach((S, B) => {
        const T = g.getRigidBody(B), E = T.translation(), M = T.rotation(), x = d.previousState[B], P = x.position, D = x.rotation;
        eo.set(P.x, P.y), eo.lerp(E, C);
        const H = Nb(D, M, C);
        if (S.object.parent) {
          Hr.set(eo.x, 0, -eo.y);
          const k = kc * Math.PI / 180, J = Math.cos(k), W = Math.sin(k), K = Hr.y * J - Hr.z * W, Q = Hr.y * W + Hr.z * J;
          Hr.y = K, Hr.z = Q, S.object.parent.worldToLocal(Hr), S.object.position.x = Hr.x, S.object.position.z = Hr.z;
        } else S.object.position.x = eo.x, S.object.position.z = -eo.y;
        S.object.name !== "ball" && (S.object.rotation.y = H);
      }), o.drainCollisionEvents((S, B, T) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2;
        const E = f(S), M = f(B);
        if (!(E == null ? void 0 : E.collider.object) || !(M == null ? void 0 : M.collider.object)) return;
        const x = e0(E, M), P = e0(M, E);
        T ? g.contactPair(E.collider.object, M.collider.object, (D, H) => {
          var _a3, _b3, _c3, _d3;
          (_b3 = (_a3 = E.collider.events) == null ? void 0 : _a3.onCollisionEnter) == null ? void 0 : _b3.call(_a3, {
            ...x,
            manifold: D,
            flipped: H
          }), (_d3 = (_c3 = M.collider.events) == null ? void 0 : _c3.onCollisionEnter) == null ? void 0 : _d3.call(_c3, {
            ...P,
            manifold: D,
            flipped: H
          });
        }) : ((_b2 = (_a2 = E.collider.events) == null ? void 0 : _a2.onCollisionExit) == null ? void 0 : _b2.call(_a2, x), (_d2 = (_c2 = M.collider.events) == null ? void 0 : _c2.onCollisionExit) == null ? void 0 : _d2.call(_c2, P)), T ? g.intersectionPair(E.collider.object, M.collider.object) && ((_f2 = (_e2 = E.collider.events) == null ? void 0 : _e2.onIntersectionEnter) == null ? void 0 : _f2.call(_e2, x), (_h2 = (_g2 = M.collider.events) == null ? void 0 : _g2.onIntersectionEnter) == null ? void 0 : _h2.call(_g2, P)) : ((_j = (_i2 = E.collider.events) == null ? void 0 : _i2.onIntersectionExit) == null ? void 0 : _j.call(_i2, x), (_l2 = (_k = M.collider.events) == null ? void 0 : _k.onIntersectionExit) == null ? void 0 : _l2.call(_k, P));
      }), o.drainContactForceEvents((S) => {
        var _a2, _b2, _c2, _d2;
        const B = f(S.collider1()), T = f(S.collider2());
        if (!(B == null ? void 0 : B.collider.object) || !(T == null ? void 0 : T.collider.object)) return;
        const E = e0(B, T), M = e0(T, B);
        (_b2 = (_a2 = B.collider.events) == null ? void 0 : _a2.onContactForce) == null ? void 0 : _b2.call(_a2, {
          ...E,
          totalForce: S.totalForce(),
          totalForceMagnitude: S.totalForceMagnitude(),
          maxForceDirection: S.maxForceDirection(),
          maxForceMagnitude: S.maxForceMagnitude()
        }), (_d2 = (_c2 = T.collider.events) == null ? void 0 : _c2.onContactForce) == null ? void 0 : _d2.call(_c2, {
          ...M,
          totalForce: S.totalForce(),
          totalForceMagnitude: S.totalForceMagnitude(),
          maxForceDirection: S.maxForceDirection(),
          maxForceMagnitude: S.maxForceMagnitude()
        });
      });
    }, cp.physics), R.jsx(r3.Provider, {
      value: p,
      children: r
    });
  }, n3 = (r) => {
    const e = u.useRef(r);
    return u.useEffect(() => {
      e.current = r;
    }, [
      r
    ]), e;
  }, Jb = (r) => {
    const { beforeStepCallbacks: e } = Fr(), t = n3(r);
    u.useEffect(() => (e.add(t), () => {
      e.delete(t);
    }), []);
  }, Vb = (r) => {
    const { afterStepCallbacks: e } = Fr(), t = n3(r);
    u.useEffect(() => (e.add(t), () => {
      e.delete(t);
    }), []);
  };
  function Fr() {
    const r = u.useContext(r3);
    if (!r) throw new Error("usePhysics2D must be used within a Physics2DProvider");
    return r;
  }
  function Kb() {
    const { debugMode: r } = yi(), e = u.useRef(0), t = u.useRef([]), n = u.useRef(null);
    return Jb(() => {
      e.current = performance.now();
    }), Vb(() => {
      const o = performance.now() - e.current;
      t.current.push(o);
    }), u.useEffect(() => {
      if (!r) return;
      const o = document.createElement("div");
      o.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: #0f0;
      padding: 8px 12px;
      font-family: monospace;
      font-size: 14px;
      border-radius: 4px;
      z-index: 1000;
    `, o.textContent = "Physics: 0.00ms avg | 0.00ms max", document.body.appendChild(o), n.current = o;
      const i = setInterval(() => {
        if (t.current.length > 0 && n.current) {
          const s = t.current.reduce((l, a) => l + a, 0) / t.current.length, c = Math.max(...t.current);
          n.current.textContent = `Physics: ${s.toFixed(2)}ms avg | ${c.toFixed(2)}ms max`, t.current = [];
        }
      }, 3e3);
      return () => {
        clearInterval(i), n.current && document.body.contains(n.current) && document.body.removeChild(n.current);
      };
    }, [
      r
    ]), null;
  }
  var jc = Ei(), ke = (r) => Mi(r, jc), Uc = Ei();
  ke.write = (r) => Mi(r, Uc);
  var ts = Ei();
  ke.onStart = (r) => Mi(r, ts);
  var Nc = Ei();
  ke.onFrame = (r) => Mi(r, Nc);
  var zc = Ei();
  ke.onFinish = (r) => Mi(r, zc);
  var _o = [];
  ke.setTimeout = (r, e) => {
    const t = ke.now() + e, n = () => {
      const i = _o.findIndex((s) => s.cancel == n);
      ~i && _o.splice(i, 1), bn -= ~i ? 1 : 0;
    }, o = {
      time: t,
      handler: r,
      cancel: n
    };
    return _o.splice(o3(t), 0, o), bn += 1, i3(), o;
  };
  var o3 = (r) => ~(~_o.findIndex((e) => e.time > r) || ~_o.length);
  ke.cancel = (r) => {
    ts.delete(r), Nc.delete(r), zc.delete(r), jc.delete(r), Uc.delete(r);
  };
  ke.sync = (r) => {
    $a = true, ke.batchedUpdates(r), $a = false;
  };
  ke.throttle = (r) => {
    let e;
    function t() {
      try {
        r(...e);
      } finally {
        e = null;
      }
    }
    function n(...o) {
      e = o, ke.onStart(t);
    }
    return n.handler = r, n.cancel = () => {
      ts.delete(t), e = null;
    }, n;
  };
  var Wc = typeof window < "u" ? window.requestAnimationFrame : () => {
  };
  ke.use = (r) => Wc = r;
  ke.now = typeof performance < "u" ? () => performance.now() : Date.now;
  ke.batchedUpdates = (r) => r();
  ke.catch = console.error;
  ke.frameLoop = "always";
  ke.advance = () => {
    ke.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : a3();
  };
  var wn = -1, bn = 0, $a = false;
  function Mi(r, e) {
    $a ? (e.delete(r), r(0)) : (e.add(r), i3());
  }
  function i3() {
    wn < 0 && (wn = 0, ke.frameLoop !== "demand" && Wc(s3));
  }
  function Qb() {
    wn = -1;
  }
  function s3() {
    ~wn && (Wc(s3), ke.batchedUpdates(a3));
  }
  function a3() {
    const r = wn;
    wn = ke.now();
    const e = o3(wn);
    if (e && (c3(_o.splice(0, e), (t) => t.handler()), bn -= e), !bn) {
      Qb();
      return;
    }
    ts.flush(), jc.flush(r ? Math.min(64, wn - r) : 16.667), Nc.flush(), Uc.flush(), zc.flush();
  }
  function Ei() {
    let r = /* @__PURE__ */ new Set(), e = r;
    return {
      add(t) {
        bn += e == r && !r.has(t) ? 1 : 0, r.add(t);
      },
      delete(t) {
        return bn -= e == r && r.has(t) ? 1 : 0, r.delete(t);
      },
      flush(t) {
        e.size && (r = /* @__PURE__ */ new Set(), bn -= e.size, c3(e, (n) => n(t) && r.add(n)), bn += r.size, e = r);
      }
    };
  }
  function c3(r, e) {
    r.forEach((t) => {
      try {
        e(t);
      } catch (n) {
        ke.catch(n);
      }
    });
  }
  var Xb = Object.defineProperty, qb = (r, e) => {
    for (var t in e) Xb(r, t, {
      get: e[t],
      enumerable: true
    });
  }, Sr = {};
  qb(Sr, {
    assign: () => Zb,
    colors: () => An,
    createStringInterpolator: () => Vc,
    skipAnimation: () => u3,
    to: () => l3,
    willAdvance: () => Kc
  });
  function ec() {
  }
  var Yb = (r, e, t) => Object.defineProperty(r, e, {
    value: t,
    writable: true,
    configurable: true
  }), _e = {
    arr: Array.isArray,
    obj: (r) => !!r && r.constructor.name === "Object",
    fun: (r) => typeof r == "function",
    str: (r) => typeof r == "string",
    num: (r) => typeof r == "number",
    und: (r) => r === void 0
  };
  function tn(r, e) {
    if (_e.arr(r)) {
      if (!_e.arr(e) || r.length !== e.length) return false;
      for (let t = 0; t < r.length; t++) if (r[t] !== e[t]) return false;
      return true;
    }
    return r === e;
  }
  var qe = (r, e) => r.forEach(e);
  function zr(r, e, t) {
    if (_e.arr(r)) {
      for (let n = 0; n < r.length; n++) e.call(t, r[n], `${n}`);
      return;
    }
    for (const n in r) r.hasOwnProperty(n) && e.call(t, r[n], n);
  }
  var mr = (r) => _e.und(r) ? [] : _e.arr(r) ? r : [
    r
  ];
  function $o(r, e) {
    if (r.size) {
      const t = Array.from(r);
      r.clear(), qe(t, e);
    }
  }
  var Qo = (r, ...e) => $o(r, (t) => t(...e)), Jc = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Vc, l3, An = null, u3 = false, Kc = ec, Zb = (r) => {
    r.to && (l3 = r.to), r.now && (ke.now = r.now), r.colors !== void 0 && (An = r.colors), r.skipAnimation != null && (u3 = r.skipAnimation), r.createStringInterpolator && (Vc = r.createStringInterpolator), r.requestAnimationFrame && ke.use(r.requestAnimationFrame), r.batchedUpdates && (ke.batchedUpdates = r.batchedUpdates), r.willAdvance && (Kc = r.willAdvance), r.frameLoop && (ke.frameLoop = r.frameLoop);
  }, ei = /* @__PURE__ */ new Set(), Cr = [], ea = [], L0 = 0, rs = {
    get idle() {
      return !ei.size && !Cr.length;
    },
    start(r) {
      L0 > r.priority ? (ei.add(r), ke.onStart($b)) : (d3(r), ke(tc));
    },
    advance: tc,
    sort(r) {
      if (L0) ke.onFrame(() => rs.sort(r));
      else {
        const e = Cr.indexOf(r);
        ~e && (Cr.splice(e, 1), f3(r));
      }
    },
    clear() {
      Cr = [], ei.clear();
    }
  };
  function $b() {
    ei.forEach(d3), ei.clear(), ke(tc);
  }
  function d3(r) {
    Cr.includes(r) || f3(r);
  }
  function f3(r) {
    Cr.splice(ey(Cr, (e) => e.priority > r.priority), 0, r);
  }
  function tc(r) {
    const e = ea;
    for (let t = 0; t < Cr.length; t++) {
      const n = Cr[t];
      L0 = n.priority, n.idle || (Kc(n), n.advance(r), n.idle || e.push(n));
    }
    return L0 = 0, ea = Cr, ea.length = 0, Cr = e, Cr.length > 0;
  }
  function ey(r, e) {
    const t = r.findIndex(e);
    return t < 0 ? r.length : t;
  }
  var ty = (r, e, t) => Math.min(Math.max(t, r), e), p3 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  }, Tr = "[-+]?\\d*\\.?\\d+", D0 = Tr + "%";
  function ns(...r) {
    return "\\(\\s*(" + r.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  var ry = new RegExp("rgb" + ns(Tr, Tr, Tr)), ny = new RegExp("rgba" + ns(Tr, Tr, Tr, Tr)), oy = new RegExp("hsl" + ns(Tr, D0, D0)), iy = new RegExp("hsla" + ns(Tr, D0, D0, Tr)), sy = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, ay = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, cy = /^#([0-9a-fA-F]{6})$/, ly = /^#([0-9a-fA-F]{8})$/;
  function uy(r) {
    let e;
    return typeof r == "number" ? r >>> 0 === r && r >= 0 && r <= 4294967295 ? r : null : (e = cy.exec(r)) ? parseInt(e[1] + "ff", 16) >>> 0 : An && An[r] !== void 0 ? An[r] : (e = ry.exec(r)) ? (to(e[1]) << 24 | to(e[2]) << 16 | to(e[3]) << 8 | 255) >>> 0 : (e = ny.exec(r)) ? (to(e[1]) << 24 | to(e[2]) << 16 | to(e[3]) << 8 | l1(e[4])) >>> 0 : (e = sy.exec(r)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + "ff", 16) >>> 0 : (e = ly.exec(r)) ? parseInt(e[1], 16) >>> 0 : (e = ay.exec(r)) ? parseInt(e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + e[4] + e[4], 16) >>> 0 : (e = oy.exec(r)) ? (a1(c1(e[1]), n0(e[2]), n0(e[3])) | 255) >>> 0 : (e = iy.exec(r)) ? (a1(c1(e[1]), n0(e[2]), n0(e[3])) | l1(e[4])) >>> 0 : null;
  }
  function ta(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * (2 / 3 - t) * 6 : r;
  }
  function a1(r, e, t) {
    const n = t < 0.5 ? t * (1 + e) : t + e - t * e, o = 2 * t - n, i = ta(o, n, r + 1 / 3), s = ta(o, n, r), c = ta(o, n, r - 1 / 3);
    return Math.round(i * 255) << 24 | Math.round(s * 255) << 16 | Math.round(c * 255) << 8;
  }
  function to(r) {
    const e = parseInt(r, 10);
    return e < 0 ? 0 : e > 255 ? 255 : e;
  }
  function c1(r) {
    return (parseFloat(r) % 360 + 360) % 360 / 360;
  }
  function l1(r) {
    const e = parseFloat(r);
    return e < 0 ? 0 : e > 1 ? 255 : Math.round(e * 255);
  }
  function n0(r) {
    const e = parseFloat(r);
    return e < 0 ? 0 : e > 100 ? 1 : e / 100;
  }
  function u1(r) {
    let e = uy(r);
    if (e === null) return r;
    e = e || 0;
    const t = (e & 4278190080) >>> 24, n = (e & 16711680) >>> 16, o = (e & 65280) >>> 8, i = (e & 255) / 255;
    return `rgba(${t}, ${n}, ${o}, ${i})`;
  }
  var di = (r, e, t) => {
    if (_e.fun(r)) return r;
    if (_e.arr(r)) return di({
      range: r,
      output: e,
      extrapolate: t
    });
    if (_e.str(r.output[0])) return Vc(r);
    const n = r, o = n.output, i = n.range || [
      0,
      1
    ], s = n.extrapolateLeft || n.extrapolate || "extend", c = n.extrapolateRight || n.extrapolate || "extend", l = n.easing || ((a) => a);
    return (a) => {
      const p = fy(a, i);
      return dy(a, i[p], i[p + 1], o[p], o[p + 1], l, s, c, n.map);
    };
  };
  function dy(r, e, t, n, o, i, s, c, l) {
    let a = l ? l(r) : r;
    if (a < e) {
      if (s === "identity") return a;
      s === "clamp" && (a = e);
    }
    if (a > t) {
      if (c === "identity") return a;
      c === "clamp" && (a = t);
    }
    return n === o ? n : e === t ? r <= e ? n : o : (e === -1 / 0 ? a = -a : t === 1 / 0 ? a = a - e : a = (a - e) / (t - e), a = i(a), n === -1 / 0 ? a = -a : o === 1 / 0 ? a = a + n : a = a * (o - n) + n, a);
  }
  function fy(r, e) {
    for (var t = 1; t < e.length - 1 && !(e[t] >= r); ++t) ;
    return t - 1;
  }
  let py, G0, o0, d1, f1, p1, i0, fi, yo, Ar, ur, _1;
  py = (r, e = "end") => (t) => {
    t = e === "end" ? Math.min(t, 0.999) : Math.max(t, 1e-3);
    const n = t * r, o = e === "end" ? Math.floor(n) : Math.ceil(n);
    return ty(0, 1, o / r);
  };
  G0 = 1.70158;
  o0 = G0 * 1.525;
  d1 = G0 + 1;
  f1 = 2 * Math.PI / 3;
  p1 = 2 * Math.PI / 4.5;
  i0 = (r) => r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  Be = {
    linear: (r) => r,
    easeInQuad: (r) => r * r,
    easeOutQuad: (r) => 1 - (1 - r) * (1 - r),
    easeInOutQuad: (r) => r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2,
    easeInCubic: (r) => r * r * r,
    easeOutCubic: (r) => 1 - Math.pow(1 - r, 3),
    easeInOutCubic: (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2,
    easeInQuart: (r) => r * r * r * r,
    easeOutQuart: (r) => 1 - Math.pow(1 - r, 4),
    easeInOutQuart: (r) => r < 0.5 ? 8 * r * r * r * r : 1 - Math.pow(-2 * r + 2, 4) / 2,
    easeInQuint: (r) => r * r * r * r * r,
    easeOutQuint: (r) => 1 - Math.pow(1 - r, 5),
    easeInOutQuint: (r) => r < 0.5 ? 16 * r * r * r * r * r : 1 - Math.pow(-2 * r + 2, 5) / 2,
    easeInSine: (r) => 1 - Math.cos(r * Math.PI / 2),
    easeOutSine: (r) => Math.sin(r * Math.PI / 2),
    easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2,
    easeInExpo: (r) => r === 0 ? 0 : Math.pow(2, 10 * r - 10),
    easeOutExpo: (r) => r === 1 ? 1 : 1 - Math.pow(2, -10 * r),
    easeInOutExpo: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? Math.pow(2, 20 * r - 10) / 2 : (2 - Math.pow(2, -20 * r + 10)) / 2,
    easeInCirc: (r) => 1 - Math.sqrt(1 - Math.pow(r, 2)),
    easeOutCirc: (r) => Math.sqrt(1 - Math.pow(r - 1, 2)),
    easeInOutCirc: (r) => r < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * r, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * r + 2, 2)) + 1) / 2,
    easeInBack: (r) => d1 * r * r * r - G0 * r * r,
    easeOutBack: (r) => 1 + d1 * Math.pow(r - 1, 3) + G0 * Math.pow(r - 1, 2),
    easeInOutBack: (r) => r < 0.5 ? Math.pow(2 * r, 2) * ((o0 + 1) * 2 * r - o0) / 2 : (Math.pow(2 * r - 2, 2) * ((o0 + 1) * (r * 2 - 2) + o0) + 2) / 2,
    easeInElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : -Math.pow(2, 10 * r - 10) * Math.sin((r * 10 - 10.75) * f1),
    easeOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : Math.pow(2, -10 * r) * Math.sin((r * 10 - 0.75) * f1) + 1,
    easeInOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? -(Math.pow(2, 20 * r - 10) * Math.sin((20 * r - 11.125) * p1)) / 2 : Math.pow(2, -20 * r + 10) * Math.sin((20 * r - 11.125) * p1) / 2 + 1,
    easeInBounce: (r) => 1 - i0(1 - r),
    easeOutBounce: i0,
    easeInOutBounce: (r) => r < 0.5 ? (1 - i0(1 - 2 * r)) / 2 : (1 + i0(2 * r - 1)) / 2,
    steps: py
  };
  fi = Symbol.for("FluidValue.get");
  yo = Symbol.for("FluidValue.observers");
  Ar = (r) => !!(r && r[fi]);
  ur = (r) => r && r[fi] ? r[fi]() : r;
  _1 = (r) => r[yo] || null;
  function _y(r, e) {
    r.eventObserved ? r.eventObserved(e) : r(e);
  }
  function pi(r, e) {
    const t = r[yo];
    t && t.forEach((n) => {
      _y(n, e);
    });
  }
  var _3 = class {
    constructor(r) {
      if (!r && !(r = this.get)) throw Error("Unknown getter");
      hy(this, r);
    }
  }, hy = (r, e) => h3(r, fi, e);
  function Co(r, e) {
    if (r[fi]) {
      let t = r[yo];
      t || h3(r, yo, t = /* @__PURE__ */ new Set()), t.has(e) || (t.add(e), r.observerAdded && r.observerAdded(t.size, e));
    }
    return e;
  }
  function _i(r, e) {
    const t = r[yo];
    if (t && t.has(e)) {
      const n = t.size - 1;
      n ? t.delete(e) : r[yo] = null, r.observerRemoved && r.observerRemoved(n, e);
    }
  }
  var h3 = (r, e, t) => Object.defineProperty(r, e, {
    value: t,
    writable: true,
    configurable: true
  }), b0 = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, my = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, h1 = new RegExp(`(${b0.source})(%|[a-z]+)`, "i"), gy = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, os = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, m3 = (r) => {
    const [e, t] = wy(r);
    if (!e || Jc()) return r;
    const n = window.getComputedStyle(document.documentElement).getPropertyValue(e);
    if (n) return n.trim();
    if (t && t.startsWith("--")) {
      const o = window.getComputedStyle(document.documentElement).getPropertyValue(t);
      return o || r;
    } else {
      if (t && os.test(t)) return m3(t);
      if (t) return t;
    }
    return r;
  }, wy = (r) => {
    const e = os.exec(r);
    if (!e) return [
      ,
    ];
    const [, t, n] = e;
    return [
      t,
      n
    ];
  }, ra, by = (r, e, t, n, o) => `rgba(${Math.round(e)}, ${Math.round(t)}, ${Math.round(n)}, ${o})`, Qc = (r) => {
    ra || (ra = An ? new RegExp(`(${Object.keys(An).join("|")})(?!\\w)`, "g") : /^\b$/);
    const e = r.output.map((i) => ur(i).replace(os, m3).replace(my, u1).replace(ra, u1)), t = e.map((i) => i.match(b0).map(Number)), o = t[0].map((i, s) => t.map((c) => {
      if (!(s in c)) throw Error('The arity of each "output" value must be equal');
      return c[s];
    })).map((i) => di({
      ...r,
      output: i
    }));
    return (i) => {
      var _a2;
      const s = !h1.test(e[0]) && ((_a2 = e.find((l) => h1.test(l))) == null ? void 0 : _a2.replace(b0, ""));
      let c = 0;
      return e[0].replace(b0, () => `${o[c++](i)}${s || ""}`).replace(gy, by);
    };
  }, Xc = "react-spring: ", g3 = (r) => {
    const e = r;
    let t = false;
    if (typeof e != "function") throw new TypeError(`${Xc}once requires a function parameter`);
    return (...n) => {
      t || (e(...n), t = true);
    };
  }, yy = g3(console.warn);
  function Ay() {
    yy(`${Xc}The "interpolate" function is deprecated in v9 (use "to" instead)`);
  }
  var vy = g3(console.warn);
  function Cy() {
    vy(`${Xc}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
  }
  function is(r) {
    return _e.str(r) && (r[0] == "#" || /\d/.test(r) || !Jc() && os.test(r) || r in (An || {}));
  }
  var qc = Jc() ? u.useEffect : u.useLayoutEffect, Sy = () => {
    const r = u.useRef(false);
    return qc(() => (r.current = true, () => {
      r.current = false;
    }), []), r;
  };
  function w3() {
    const r = u.useState()[1], e = Sy();
    return () => {
      e.current && r(Math.random());
    };
  }
  var b3 = (r) => u.useEffect(r, Ry), Ry = [];
  function m1(r) {
    const e = u.useRef(void 0);
    return u.useEffect(() => {
      e.current = r;
    }), e.current;
  }
  var hi = Symbol.for("Animated:node"), My = (r) => !!r && r[hi] === r, jr = (r) => r && r[hi], Yc = (r, e) => Yb(r, hi, e), ss = (r) => r && r[hi] && r[hi].getPayload(), y3 = class {
    constructor() {
      Yc(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  }, as = class A3 extends y3 {
    constructor(e) {
      super(), this._value = e, this.done = true, this.durationProgress = 0, _e.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new A3(e);
    }
    getPayload() {
      return [
        this
      ];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return _e.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value === e ? false : (this._value = e, true);
    }
    reset() {
      const { done: e } = this;
      this.done = false, _e.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
    }
  }, O0 = class v3 extends as {
    constructor(e) {
      super(0), this._string = null, this._toString = di({
        output: [
          e,
          e
        ]
      });
    }
    static create(e) {
      return new v3(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (_e.str(e)) {
        if (e == this._string) return false;
        this._string = e, this._value = 1;
      } else if (super.setValue(e)) this._string = null;
      else return false;
      return true;
    }
    reset(e) {
      e && (this._toString = di({
        output: [
          this.getValue(),
          e
        ]
      })), this._value = 0, super.reset();
    }
  }, H0 = {
    dependencies: null
  }, cs = class extends y3 {
    constructor(r) {
      super(), this.source = r, this.setValue(r);
    }
    getValue(r) {
      const e = {};
      return zr(this.source, (t, n) => {
        My(t) ? e[n] = t.getValue(r) : Ar(t) ? e[n] = ur(t) : r || (e[n] = t);
      }), e;
    }
    setValue(r) {
      this.source = r, this.payload = this._makePayload(r);
    }
    reset() {
      this.payload && qe(this.payload, (r) => r.reset());
    }
    _makePayload(r) {
      if (r) {
        const e = /* @__PURE__ */ new Set();
        return zr(r, this._addToPayload, e), Array.from(e);
      }
    }
    _addToPayload(r) {
      H0.dependencies && Ar(r) && H0.dependencies.add(r);
      const e = ss(r);
      e && qe(e, (t) => this.add(t));
    }
  }, Ey = class C3 extends cs {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new C3(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length ? t.map((n, o) => n.setValue(e[o])).some(Boolean) : (super.setValue(e.map(By)), true);
    }
  };
  function By(r) {
    return (is(r) ? O0 : as).create(r);
  }
  function rc(r) {
    const e = jr(r);
    return e ? e.constructor : _e.arr(r) ? Ey : is(r) ? O0 : as;
  }
  var g1 = (r, e) => {
    const t = !_e.fun(r) || r.prototype && r.prototype.isReactComponent;
    return u.forwardRef((n, o) => {
      const i = u.useRef(null), s = t && u.useCallback((h) => {
        i.current = xy(o, h);
      }, [
        o
      ]), [c, l] = Ty(n, e), a = w3(), p = () => {
        const h = i.current;
        if (t && !h) return;
        (h ? e.applyAnimatedValues(h, c.getValue(true)) : false) === false && a();
      }, f = new Iy(p, l), d = u.useRef(void 0);
      qc(() => (d.current = f, qe(l, (h) => Co(h, f)), () => {
        d.current && (qe(d.current.deps, (h) => _i(h, d.current)), ke.cancel(d.current.update));
      })), u.useEffect(p, []), b3(() => () => {
        const h = d.current;
        qe(h.deps, (b) => _i(b, h));
      });
      const _ = e.getComponentProps(c.getValue());
      return u.createElement(r, {
        ..._,
        ref: s
      });
    });
  }, Iy = class {
    constructor(r, e) {
      this.update = r, this.deps = e;
    }
    eventObserved(r) {
      r.type == "change" && ke.write(this.update);
    }
  };
  function Ty(r, e) {
    const t = /* @__PURE__ */ new Set();
    return H0.dependencies = t, r.style && (r = {
      ...r,
      style: e.createAnimatedStyle(r.style)
    }), r = new cs(r), H0.dependencies = null, [
      r,
      t
    ];
  }
  function xy(r, e) {
    return r && (_e.fun(r) ? r(e) : r.current = e), e;
  }
  var w1 = Symbol.for("AnimatedComponent"), S3 = (r, { applyAnimatedValues: e = () => false, createAnimatedStyle: t = (o) => new cs(o), getComponentProps: n = (o) => o } = {}) => {
    const o = {
      applyAnimatedValues: e,
      createAnimatedStyle: t,
      getComponentProps: n
    }, i = (s) => {
      const c = b1(s) || "Anonymous";
      return _e.str(s) ? s = i[s] || (i[s] = g1(s, o)) : s = s[w1] || (s[w1] = g1(s, o)), s.displayName = `Animated(${c})`, s;
    };
    return zr(r, (s, c) => {
      _e.arr(r) && (c = b1(s)), i[c] = i(s);
    }), {
      animated: i
    };
  }, b1 = (r) => _e.str(r) ? r : r && _e.str(r.displayName) ? r.displayName : _e.fun(r) && r.name || null;
  function Dn(r, ...e) {
    return _e.fun(r) ? r(...e) : r;
  }
  var ti = (r, e) => r === true || !!(e && r && (_e.fun(r) ? r(e) : mr(r).includes(e))), R3 = (r, e) => _e.obj(r) ? e && r[e] : r, M3 = (r, e) => r.default === true ? r[e] : r.default ? r.default[e] : void 0, Py = (r) => r, Zc = (r, e = Py) => {
    let t = Fy;
    r.default && r.default !== true && (r = r.default, t = Object.keys(r));
    const n = {};
    for (const o of t) {
      const i = e(r[o], o);
      _e.und(i) || (n[o] = i);
    }
    return n;
  }, Fy = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest"
  ], Ly = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1
  };
  function Dy(r) {
    const e = {};
    let t = 0;
    if (zr(r, (n, o) => {
      Ly[o] || (e[o] = n, t++);
    }), t) return e;
  }
  function E3(r) {
    const e = Dy(r);
    if (e) {
      const t = {
        to: e
      };
      return zr(r, (n, o) => o in e || (t[o] = n)), t;
    }
    return {
      ...r
    };
  }
  function mi(r) {
    return r = ur(r), _e.arr(r) ? r.map(mi) : is(r) ? Sr.createStringInterpolator({
      range: [
        0,
        1
      ],
      output: [
        r,
        r
      ]
    })(1) : r;
  }
  function Gy(r) {
    for (const e in r) return true;
    return false;
  }
  function nc(r) {
    return _e.fun(r) || _e.arr(r) && _e.obj(r[0]);
  }
  function Oy(r, e) {
    var _a2;
    (_a2 = r.ref) == null ? void 0 : _a2.delete(r), e == null ? void 0 : e.delete(r);
  }
  function Hy(r, e) {
    var _a2;
    e && r.ref !== e && ((_a2 = r.ref) == null ? void 0 : _a2.delete(r), e.add(r), r.ref = e);
  }
  var ky = {
    default: {
      tension: 170,
      friction: 26
    }
  }, oc = {
    ...ky.default,
    mass: 1,
    damping: 1,
    easing: Be.linear,
    clamp: false
  }, jy = class {
    constructor() {
      this.velocity = 0, Object.assign(this, oc);
    }
  };
  function Uy(r, e, t) {
    t && (t = {
      ...t
    }, y1(t, e), e = {
      ...t,
      ...e
    }), y1(r, e), Object.assign(r, e);
    for (const s in oc) r[s] == null && (r[s] = oc[s]);
    let { frequency: n, damping: o } = r;
    const { mass: i } = r;
    return _e.und(n) || (n < 0.01 && (n = 0.01), o < 0 && (o = 0), r.tension = Math.pow(2 * Math.PI / n, 2) * i, r.friction = 4 * Math.PI * o * i / n), r;
  }
  function y1(r, e) {
    if (!_e.und(e.decay)) r.duration = void 0;
    else {
      const t = !_e.und(e.tension) || !_e.und(e.friction);
      (t || !_e.und(e.frequency) || !_e.und(e.damping) || !_e.und(e.mass)) && (r.duration = void 0, r.decay = void 0), t && (r.frequency = void 0);
    }
  }
  var A1 = [], Ny = class {
    constructor() {
      this.changed = false, this.values = A1, this.toValues = null, this.fromValues = A1, this.config = new jy(), this.immediate = false;
    }
  };
  function B3(r, { key: e, props: t, defaultProps: n, state: o, actions: i }) {
    return new Promise((s, c) => {
      let l, a, p = ti(t.cancel ?? (n == null ? void 0 : n.cancel), e);
      if (p) _();
      else {
        _e.und(t.pause) || (o.paused = ti(t.pause, e));
        let h = n == null ? void 0 : n.pause;
        h !== true && (h = o.paused || ti(h, e)), l = Dn(t.delay || 0, e), h ? (o.resumeQueue.add(d), i.pause()) : (i.resume(), d());
      }
      function f() {
        o.resumeQueue.add(d), o.timeouts.delete(a), a.cancel(), l = a.time - ke.now();
      }
      function d() {
        l > 0 && !Sr.skipAnimation ? (o.delayed = true, a = ke.setTimeout(_, l), o.pauseQueue.add(f), o.timeouts.add(a)) : _();
      }
      function _() {
        o.delayed && (o.delayed = false), o.pauseQueue.delete(f), o.timeouts.delete(a), r <= (o.cancelId || 0) && (p = true);
        try {
          i.start({
            ...t,
            callId: r,
            cancel: p
          }, s);
        } catch (h) {
          c(h);
        }
      }
    });
  }
  var $c = (r, e) => e.length == 1 ? e[0] : e.some((t) => t.cancelled) ? ho(r.get()) : e.every((t) => t.noop) ? I3(r.get()) : Br(r.get(), e.every((t) => t.finished)), I3 = (r) => ({
    value: r,
    noop: true,
    finished: true,
    cancelled: false
  }), Br = (r, e, t = false) => ({
    value: r,
    finished: e,
    cancelled: t
  }), ho = (r) => ({
    value: r,
    cancelled: true,
    finished: false
  });
  function T3(r, e, t, n) {
    const { callId: o, parentId: i, onRest: s } = e, { asyncTo: c, promise: l } = t;
    return !i && r === c && !e.reset ? l : t.promise = (async () => {
      t.asyncId = o, t.asyncTo = r;
      const a = Zc(e, (g, y) => y === "onRest" ? void 0 : g);
      let p, f;
      const d = new Promise((g, y) => (p = g, f = y)), _ = (g) => {
        const y = o <= (t.cancelId || 0) && ho(n) || o !== t.asyncId && Br(n, false);
        if (y) throw g.result = y, f(g), g;
      }, h = (g, y) => {
        const A = new v1(), C = new C1();
        return (async () => {
          if (Sr.skipAnimation) throw gi(t), C.result = Br(n, false), f(C), C;
          _(A);
          const S = _e.obj(g) ? {
            ...g
          } : {
            ...y,
            to: g
          };
          S.parentId = o, zr(a, (T, E) => {
            _e.und(S[E]) && (S[E] = T);
          });
          const B = await n.start(S);
          return _(A), t.paused && await new Promise((T) => {
            t.resumeQueue.add(T);
          }), B;
        })();
      };
      let b;
      if (Sr.skipAnimation) return gi(t), Br(n, false);
      try {
        let g;
        _e.arr(r) ? g = (async (y) => {
          for (const A of y) await h(A);
        })(r) : g = Promise.resolve(r(h, n.stop.bind(n))), await Promise.all([
          g.then(p),
          d
        ]), b = Br(n.get(), true, false);
      } catch (g) {
        if (g instanceof v1) b = g.result;
        else if (g instanceof C1) b = g.result;
        else throw g;
      } finally {
        o == t.asyncId && (t.asyncId = i, t.asyncTo = i ? c : void 0, t.promise = i ? l : void 0);
      }
      return _e.fun(s) && ke.batchedUpdates(() => {
        s(b, n, n.item);
      }), b;
    })();
  }
  function gi(r, e) {
    $o(r.timeouts, (t) => t.cancel()), r.pauseQueue.clear(), r.resumeQueue.clear(), r.asyncId = r.asyncTo = r.promise = void 0, e && (r.cancelId = e);
  }
  var v1 = class extends Error {
    constructor() {
      super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    }
  }, C1 = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  }, ic = (r) => r instanceof el, zy = 1, el = class extends _3 {
    constructor() {
      super(...arguments), this.id = zy++, this._priority = 0;
    }
    get priority() {
      return this._priority;
    }
    set priority(r) {
      this._priority != r && (this._priority = r, this._onPriorityChange(r));
    }
    get() {
      const r = jr(this);
      return r && r.getValue();
    }
    to(...r) {
      return Sr.to(this, r);
    }
    interpolate(...r) {
      return Ay(), Sr.to(this, r);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(r) {
      r == 1 && this._attach();
    }
    observerRemoved(r) {
      r == 0 && this._detach();
    }
    _attach() {
    }
    _detach() {
    }
    _onChange(r, e = false) {
      pi(this, {
        type: "change",
        parent: this,
        value: r,
        idle: e
      });
    }
    _onPriorityChange(r) {
      this.idle || rs.sort(this), pi(this, {
        type: "priority",
        parent: this,
        priority: r
      });
    }
  }, Un = Symbol.for("SpringPhase"), x3 = 1, sc = 2, ac = 4, na = (r) => (r[Un] & x3) > 0, pn = (r) => (r[Un] & sc) > 0, ko = (r) => (r[Un] & ac) > 0, S1 = (r, e) => e ? r[Un] |= sc | x3 : r[Un] &= ~sc, R1 = (r, e) => e ? r[Un] |= ac : r[Un] &= ~ac, Wy = class extends el {
    constructor(r, e) {
      if (super(), this.animation = new Ny(), this.defaultProps = {}, this._state = {
        paused: false,
        delayed: false,
        pauseQueue: /* @__PURE__ */ new Set(),
        resumeQueue: /* @__PURE__ */ new Set(),
        timeouts: /* @__PURE__ */ new Set()
      }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !_e.und(r) || !_e.und(e)) {
        const t = _e.obj(r) ? {
          ...r
        } : {
          ...e,
          from: r
        };
        _e.und(t.default) && (t.default = true), this.start(t);
      }
    }
    get idle() {
      return !(pn(this) || this._state.asyncTo) || ko(this);
    }
    get goal() {
      return ur(this.animation.to);
    }
    get velocity() {
      const r = jr(this);
      return r instanceof as ? r.lastVelocity || 0 : r.getPayload().map((e) => e.lastVelocity || 0);
    }
    get hasAnimated() {
      return na(this);
    }
    get isAnimating() {
      return pn(this);
    }
    get isPaused() {
      return ko(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(r) {
      let e = true, t = false;
      const n = this.animation;
      let { toValues: o } = n;
      const { config: i } = n, s = ss(n.to);
      !s && Ar(n.to) && (o = mr(ur(n.to))), n.values.forEach((a, p) => {
        if (a.done) return;
        const f = a.constructor == O0 ? 1 : s ? s[p].lastPosition : o[p];
        let d = n.immediate, _ = f;
        if (!d) {
          if (_ = a.lastPosition, i.tension <= 0) {
            a.done = true;
            return;
          }
          let h = a.elapsedTime += r;
          const b = n.fromValues[p], g = a.v0 != null ? a.v0 : a.v0 = _e.arr(i.velocity) ? i.velocity[p] : i.velocity;
          let y;
          const A = i.precision || (b == f ? 5e-3 : Math.min(1, Math.abs(f - b) * 1e-3));
          if (_e.und(i.duration)) if (i.decay) {
            const C = i.decay === true ? 0.998 : i.decay, S = Math.exp(-(1 - C) * h);
            _ = b + g / (1 - C) * (1 - S), d = Math.abs(a.lastPosition - _) <= A, y = g * S;
          } else {
            y = a.lastVelocity == null ? g : a.lastVelocity;
            const C = i.restVelocity || A / 10, S = i.clamp ? 0 : i.bounce, B = !_e.und(S), T = b == f ? a.v0 > 0 : b < f;
            let E, M = false;
            const x = 1, P = Math.ceil(r / x);
            for (let D = 0; D < P && (E = Math.abs(y) > C, !(!E && (d = Math.abs(f - _) <= A, d))); ++D) {
              B && (M = _ == f || _ > f == T, M && (y = -y * S, _ = f));
              const H = -i.tension * 1e-6 * (_ - f), k = -i.friction * 1e-3 * y, J = (H + k) / i.mass;
              y = y + J * x, _ = _ + y * x;
            }
          }
          else {
            let C = 1;
            i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, h = a.elapsedTime += r)), C = (i.progress || 0) + h / this._memoizedDuration, C = C > 1 ? 1 : C < 0 ? 0 : C, a.durationProgress = C), _ = b + i.easing(C) * (f - b), y = (_ - a.lastPosition) / r, d = C == 1;
          }
          a.lastVelocity = y, Number.isNaN(_) && (console.warn("Got NaN while animating:", this), d = true);
        }
        s && !s[p].done && (d = false), d ? a.done = true : e = false, a.setValue(_, i.round) && (t = true);
      });
      const c = jr(this), l = c.getValue();
      if (e) {
        const a = ur(n.to);
        (l !== a || t) && !i.decay ? (c.setValue(a), this._onChange(a)) : t && i.decay && this._onChange(l), this._stop();
      } else t && this._onChange(l);
    }
    set(r) {
      return ke.batchedUpdates(() => {
        this._stop(), this._focus(r), this._set(r);
      }), this;
    }
    pause() {
      this._update({
        pause: true
      });
    }
    resume() {
      this._update({
        pause: false
      });
    }
    finish() {
      if (pn(this)) {
        const { to: r, config: e } = this.animation;
        ke.batchedUpdates(() => {
          this._onStart(), e.decay || this._set(r, false), this._stop();
        });
      }
      return this;
    }
    update(r) {
      return (this.queue || (this.queue = [])).push(r), this;
    }
    start(r, e) {
      let t;
      return _e.und(r) ? (t = this.queue || [], this.queue = []) : t = [
        _e.obj(r) ? r : {
          ...e,
          to: r
        }
      ], Promise.all(t.map((n) => this._update(n))).then((n) => $c(this, n));
    }
    stop(r) {
      const { to: e } = this.animation;
      return this._focus(this.get()), gi(this._state, r && this._lastCallId), ke.batchedUpdates(() => this._stop(e, r)), this;
    }
    reset() {
      this._update({
        reset: true
      });
    }
    eventObserved(r) {
      r.type == "change" ? this._start() : r.type == "priority" && (this.priority = r.priority + 1);
    }
    _prepareNode(r) {
      const e = this.key || "";
      let { to: t, from: n } = r;
      t = _e.obj(t) ? t[e] : t, (t == null || nc(t)) && (t = void 0), n = _e.obj(n) ? n[e] : n, n == null && (n = void 0);
      const o = {
        to: t,
        from: n
      };
      return na(this) || (r.reverse && ([t, n] = [
        n,
        t
      ]), n = ur(n), _e.und(n) ? jr(this) || this._set(t) : this._set(n)), o;
    }
    _update({ ...r }, e) {
      const { key: t, defaultProps: n } = this;
      r.default && Object.assign(n, Zc(r, (s, c) => /^on/.test(c) ? R3(s, t) : s)), E1(this, r, "onProps"), Uo(this, "onProps", r, this);
      const o = this._prepareNode(r);
      if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
      const i = this._state;
      return B3(++this._lastCallId, {
        key: t,
        props: r,
        defaultProps: n,
        state: i,
        actions: {
          pause: () => {
            ko(this) || (R1(this, true), Qo(i.pauseQueue), Uo(this, "onPause", Br(this, jo(this, this.animation.to)), this));
          },
          resume: () => {
            ko(this) && (R1(this, false), pn(this) && this._resume(), Qo(i.resumeQueue), Uo(this, "onResume", Br(this, jo(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, o)
        }
      }).then((s) => {
        if (r.loop && s.finished && !(e && s.noop)) {
          const c = P3(r);
          if (c) return this._update(c, true);
        }
        return s;
      });
    }
    _merge(r, e, t) {
      if (e.cancel) return this.stop(true), t(ho(this));
      const n = !_e.und(r.to), o = !_e.und(r.from);
      if (n || o) if (e.callId > this._lastToId) this._lastToId = e.callId;
      else return t(ho(this));
      const { key: i, defaultProps: s, animation: c } = this, { to: l, from: a } = c;
      let { to: p = l, from: f = a } = r;
      o && !n && (!e.default || _e.und(p)) && (p = f), e.reverse && ([p, f] = [
        f,
        p
      ]);
      const d = !tn(f, a);
      d && (c.from = f), f = ur(f);
      const _ = !tn(p, l);
      _ && this._focus(p);
      const h = nc(e.to), { config: b } = c, { decay: g, velocity: y } = b;
      (n || o) && (b.velocity = 0), e.config && !h && Uy(b, Dn(e.config, i), e.config !== s.config ? Dn(s.config, i) : void 0);
      let A = jr(this);
      if (!A || _e.und(p)) return t(Br(this, true));
      const C = _e.und(e.reset) ? o && !e.default : !_e.und(f) && ti(e.reset, i), S = C ? f : this.get(), B = mi(p), T = _e.num(B) || _e.arr(B) || is(B), E = !h && (!T || ti(s.immediate || e.immediate, i));
      if (_) {
        const D = rc(p);
        if (D !== A.constructor) if (E) A = this._set(B);
        else throw Error(`Cannot animate between ${A.constructor.name} and ${D.name}, as the "to" prop suggests`);
      }
      const M = A.constructor;
      let x = Ar(p), P = false;
      if (!x) {
        const D = C || !na(this) && d;
        (_ || D) && (P = tn(mi(S), B), x = !P), (!tn(c.immediate, E) && !E || !tn(b.decay, g) || !tn(b.velocity, y)) && (x = true);
      }
      if (P && pn(this) && (c.changed && !C ? x = true : x || this._stop(l)), !h && ((x || Ar(l)) && (c.values = A.getPayload(), c.toValues = Ar(p) ? null : M == O0 ? [
        1
      ] : mr(B)), c.immediate != E && (c.immediate = E, !E && !C && this._set(l)), x)) {
        const { onRest: D } = c;
        qe(Vy, (k) => E1(this, e, k));
        const H = Br(this, jo(this, l));
        Qo(this._pendingCalls, H), this._pendingCalls.add(t), c.changed && ke.batchedUpdates(() => {
          var _a2;
          c.changed = !C, D == null ? void 0 : D(H, this), C ? Dn(s.onRest, H) : (_a2 = c.onStart) == null ? void 0 : _a2.call(c, H, this);
        });
      }
      C && this._set(S), h ? t(T3(e.to, e, this._state, this)) : x ? this._start() : pn(this) && !_ ? this._pendingCalls.add(t) : t(I3(S));
    }
    _focus(r) {
      const e = this.animation;
      r !== e.to && (_1(this) && this._detach(), e.to = r, _1(this) && this._attach());
    }
    _attach() {
      let r = 0;
      const { to: e } = this.animation;
      Ar(e) && (Co(e, this), ic(e) && (r = e.priority + 1)), this.priority = r;
    }
    _detach() {
      const { to: r } = this.animation;
      Ar(r) && _i(r, this);
    }
    _set(r, e = true) {
      const t = ur(r);
      if (!_e.und(t)) {
        const n = jr(this);
        if (!n || !tn(t, n.getValue())) {
          const o = rc(t);
          !n || n.constructor != o ? Yc(this, o.create(t)) : n.setValue(t), n && ke.batchedUpdates(() => {
            this._onChange(t, e);
          });
        }
      }
      return jr(this);
    }
    _onStart() {
      const r = this.animation;
      r.changed || (r.changed = true, Uo(this, "onStart", Br(this, jo(this, r.to)), this));
    }
    _onChange(r, e) {
      e || (this._onStart(), Dn(this.animation.onChange, r, this)), Dn(this.defaultProps.onChange, r, this), super._onChange(r, e);
    }
    _start() {
      const r = this.animation;
      jr(this).reset(ur(r.to)), r.immediate || (r.fromValues = r.values.map((e) => e.lastPosition)), pn(this) || (S1(this, true), ko(this) || this._resume());
    }
    _resume() {
      Sr.skipAnimation ? this.finish() : rs.start(this);
    }
    _stop(r, e) {
      if (pn(this)) {
        S1(this, false);
        const t = this.animation;
        qe(t.values, (o) => {
          o.done = true;
        }), t.toValues && (t.onChange = t.onPause = t.onResume = void 0), pi(this, {
          type: "idle",
          parent: this
        });
        const n = e ? ho(this.get()) : Br(this.get(), jo(this, r ?? t.to));
        Qo(this._pendingCalls, n), t.changed && (t.changed = false, Uo(this, "onRest", n, this));
      }
    }
  };
  function jo(r, e) {
    const t = mi(e), n = mi(r.get());
    return tn(n, t);
  }
  function P3(r, e = r.loop, t = r.to) {
    const n = Dn(e);
    if (n) {
      const o = n !== true && E3(n), i = (o || r).reverse, s = !o || o.reset;
      return wi({
        ...r,
        loop: e,
        default: false,
        pause: void 0,
        to: !i || nc(t) ? t : void 0,
        from: s ? r.from : void 0,
        reset: s,
        ...o
      });
    }
  }
  function wi(r) {
    const { to: e, from: t } = r = E3(r), n = /* @__PURE__ */ new Set();
    return _e.obj(e) && M1(e, n), _e.obj(t) && M1(t, n), r.keys = n.size ? Array.from(n) : null, r;
  }
  function Jy(r) {
    const e = wi(r);
    return _e.und(e.default) && (e.default = Zc(e)), e;
  }
  function M1(r, e) {
    zr(r, (t, n) => t != null && e.add(n));
  }
  var Vy = [
    "onStart",
    "onRest",
    "onChange",
    "onPause",
    "onResume"
  ];
  function E1(r, e, t) {
    r.animation[t] = e[t] !== M3(e, t) ? R3(e[t], r.key) : void 0;
  }
  function Uo(r, e, ...t) {
    var _a2, _b2, _c2, _d2;
    (_b2 = (_a2 = r.animation)[e]) == null ? void 0 : _b2.call(_a2, ...t), (_d2 = (_c2 = r.defaultProps)[e]) == null ? void 0 : _d2.call(_c2, ...t);
  }
  var Ky = [
    "onStart",
    "onChange",
    "onRest"
  ], Qy = 1, Xy = class {
    constructor(r, e) {
      this.id = Qy++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = false, this._state = {
        paused: false,
        pauseQueue: /* @__PURE__ */ new Set(),
        resumeQueue: /* @__PURE__ */ new Set(),
        timeouts: /* @__PURE__ */ new Set()
      }, this._events = {
        onStart: /* @__PURE__ */ new Map(),
        onChange: /* @__PURE__ */ new Map(),
        onRest: /* @__PURE__ */ new Map()
      }, this._onFrame = this._onFrame.bind(this), e && (this._flush = e), r && this.start({
        default: true,
        ...r
      });
    }
    get idle() {
      return !this._state.asyncTo && Object.values(this.springs).every((r) => r.idle && !r.isDelayed && !r.isPaused);
    }
    get item() {
      return this._item;
    }
    set item(r) {
      this._item = r;
    }
    get() {
      const r = {};
      return this.each((e, t) => r[t] = e.get()), r;
    }
    set(r) {
      for (const e in r) {
        const t = r[e];
        _e.und(t) || this.springs[e].set(t);
      }
    }
    update(r) {
      return r && this.queue.push(wi(r)), this;
    }
    start(r) {
      let { queue: e } = this;
      return r ? e = mr(r).map(wi) : this.queue = [], this._flush ? this._flush(this, e) : (O3(this, e), cc(this, e));
    }
    stop(r, e) {
      if (r !== !!r && (e = r), e) {
        const t = this.springs;
        qe(mr(e), (n) => t[n].stop(!!r));
      } else gi(this._state, this._lastAsyncId), this.each((t) => t.stop(!!r));
      return this;
    }
    pause(r) {
      if (_e.und(r)) this.start({
        pause: true
      });
      else {
        const e = this.springs;
        qe(mr(r), (t) => e[t].pause());
      }
      return this;
    }
    resume(r) {
      if (_e.und(r)) this.start({
        pause: false
      });
      else {
        const e = this.springs;
        qe(mr(r), (t) => e[t].resume());
      }
      return this;
    }
    each(r) {
      zr(this.springs, r);
    }
    _onFrame() {
      const { onStart: r, onChange: e, onRest: t } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
      (n && !this._started || o && !this._started) && (this._started = true, $o(r, ([c, l]) => {
        l.value = this.get(), c(l, this, this._item);
      }));
      const i = !n && this._started, s = o || i && t.size ? this.get() : null;
      o && e.size && $o(e, ([c, l]) => {
        l.value = s, c(l, this, this._item);
      }), i && (this._started = false, $o(t, ([c, l]) => {
        l.value = s, c(l, this, this._item);
      }));
    }
    eventObserved(r) {
      if (r.type == "change") this._changed.add(r.parent), r.idle || this._active.add(r.parent);
      else if (r.type == "idle") this._active.delete(r.parent);
      else return;
      ke.onFrame(this._onFrame);
    }
  };
  function cc(r, e) {
    return Promise.all(e.map((t) => F3(r, t))).then((t) => $c(r, t));
  }
  async function F3(r, e, t) {
    const { keys: n, to: o, from: i, loop: s, onRest: c, onResolve: l } = e, a = _e.obj(e.default) && e.default;
    s && (e.loop = false), o === false && (e.to = null), i === false && (e.from = null);
    const p = _e.arr(o) || _e.fun(o) ? o : void 0;
    p ? (e.to = void 0, e.onRest = void 0, a && (a.onRest = void 0)) : qe(Ky, (b) => {
      const g = e[b];
      if (_e.fun(g)) {
        const y = r._events[b];
        e[b] = ({ finished: A, cancelled: C }) => {
          const S = y.get(g);
          S ? (A || (S.finished = false), C && (S.cancelled = true)) : y.set(g, {
            value: null,
            finished: A || false,
            cancelled: C || false
          });
        }, a && (a[b] = e[b]);
      }
    });
    const f = r._state;
    e.pause === !f.paused ? (f.paused = e.pause, Qo(e.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (e.pause = true);
    const d = (n || Object.keys(r.springs)).map((b) => r.springs[b].start(e)), _ = e.cancel === true || M3(e, "cancel") === true;
    (p || _ && f.asyncId) && d.push(B3(++r._lastAsyncId, {
      props: e,
      state: f,
      actions: {
        pause: ec,
        resume: ec,
        start(b, g) {
          _ ? (gi(f, r._lastAsyncId), g(ho(r))) : (b.onRest = c, g(T3(p, b, f, r)));
        }
      }
    })), f.paused && await new Promise((b) => {
      f.resumeQueue.add(b);
    });
    const h = $c(r, await Promise.all(d));
    if (s && h.finished && !(t && h.noop)) {
      const b = P3(e, s, o);
      if (b) return O3(r, [
        b
      ]), F3(r, b, true);
    }
    return l && ke.batchedUpdates(() => l(h, r, r.item)), h;
  }
  function B1(r, e) {
    const t = {
      ...r.springs
    };
    return e && qe(mr(e), (n) => {
      _e.und(n.keys) && (n = wi(n)), _e.obj(n.to) || (n = {
        ...n,
        to: void 0
      }), G3(t, n, (o) => D3(o));
    }), L3(r, t), t;
  }
  function L3(r, e) {
    zr(e, (t, n) => {
      r.springs[n] || (r.springs[n] = t, Co(t, r));
    });
  }
  function D3(r, e) {
    const t = new Wy();
    return t.key = r, e && Co(t, e), t;
  }
  function G3(r, e, t) {
    e.keys && qe(e.keys, (n) => {
      (r[n] || (r[n] = t(n)))._prepareNode(e);
    });
  }
  function O3(r, e) {
    qe(e, (t) => {
      G3(r.springs, t, (n) => D3(n, r));
    });
  }
  var qy = u.createContext({
    pause: false,
    immediate: false
  }), Yy = () => {
    const r = [], e = function(n) {
      Cy();
      const o = [];
      return qe(r, (i, s) => {
        if (_e.und(n)) o.push(i.start());
        else {
          const c = t(n, i, s);
          c && o.push(i.start(c));
        }
      }), o;
    };
    e.current = r, e.add = function(n) {
      r.includes(n) || r.push(n);
    }, e.delete = function(n) {
      const o = r.indexOf(n);
      ~o && r.splice(o, 1);
    }, e.pause = function() {
      return qe(r, (n) => n.pause(...arguments)), this;
    }, e.resume = function() {
      return qe(r, (n) => n.resume(...arguments)), this;
    }, e.set = function(n) {
      qe(r, (o, i) => {
        const s = _e.fun(n) ? n(i, o) : n;
        s && o.set(s);
      });
    }, e.start = function(n) {
      const o = [];
      return qe(r, (i, s) => {
        if (_e.und(n)) o.push(i.start());
        else {
          const c = this._getProps(n, i, s);
          c && o.push(i.start(c));
        }
      }), o;
    }, e.stop = function() {
      return qe(r, (n) => n.stop(...arguments)), this;
    }, e.update = function(n) {
      return qe(r, (o, i) => o.update(this._getProps(n, o, i))), this;
    };
    const t = function(n, o, i) {
      return _e.fun(n) ? n(i, o) : n;
    };
    return e._getProps = t, e;
  };
  function Zy(r, e, t) {
    const n = _e.fun(e) && e;
    n && !t && (t = []);
    const o = u.useMemo(() => n || arguments.length == 3 ? Yy() : void 0, []), i = u.useRef(0), s = w3(), c = u.useMemo(() => ({
      ctrls: [],
      queue: [],
      flush(y, A) {
        const C = B1(y, A);
        return i.current > 0 && !c.queue.length && !Object.keys(C).some((B) => !y.springs[B]) ? cc(y, A) : new Promise((B) => {
          L3(y, C), c.queue.push(() => {
            B(cc(y, A));
          }), s();
        });
      }
    }), []), l = u.useRef([
      ...c.ctrls
    ]), a = u.useRef([]), p = m1(r) || 0;
    u.useMemo(() => {
      qe(l.current.slice(r, p), (y) => {
        Oy(y, o), y.stop(true);
      }), l.current.length = r, f(p, r);
    }, [
      r
    ]), u.useMemo(() => {
      f(0, Math.min(p, r));
    }, t);
    function f(y, A) {
      for (let C = y; C < A; C++) {
        const S = l.current[C] || (l.current[C] = new Xy(null, c.flush)), B = n ? n(C, S) : e[C];
        B && (a.current[C] = Jy(B));
      }
    }
    const d = l.current.map((y, A) => B1(y, a.current[A])), _ = u.useContext(qy), h = m1(_), b = _ !== h && Gy(_);
    qc(() => {
      i.current++, c.ctrls = l.current;
      const { queue: y } = c;
      y.length && (c.queue = [], qe(y, (A) => A())), qe(l.current, (A, C) => {
        o == null ? void 0 : o.add(A), b && A.start({
          default: _
        });
        const S = a.current[C];
        S && (Hy(A, S.ref), A.ref ? A.queue.push(S) : A.start(S));
      });
    }), b3(() => () => {
      qe(c.ctrls, (y) => y.stop(true));
    });
    const g = d.map((y) => ({
      ...y
    }));
    return o ? [
      g,
      o
    ] : g;
  }
  vt = function(r, e) {
    const t = _e.fun(r), [[n], o] = Zy(1, t ? r : [
      r
    ], t ? e || [] : e);
    return t || arguments.length == 2 ? [
      n,
      o
    ] : n;
  };
  var $y = class extends el {
    constructor(r, e) {
      super(), this.source = r, this.idle = true, this._active = /* @__PURE__ */ new Set(), this.calc = di(...e);
      const t = this._get(), n = rc(t);
      Yc(this, n.create(t));
    }
    advance(r) {
      const e = this._get(), t = this.get();
      tn(e, t) || (jr(this).setValue(e), this._onChange(e, this.idle)), !this.idle && I1(this._active) && oa(this);
    }
    _get() {
      const r = _e.arr(this.source) ? this.source.map(ur) : mr(ur(this.source));
      return this.calc(...r);
    }
    _start() {
      this.idle && !I1(this._active) && (this.idle = false, qe(ss(this), (r) => {
        r.done = false;
      }), Sr.skipAnimation ? (ke.batchedUpdates(() => this.advance()), oa(this)) : rs.start(this));
    }
    _attach() {
      let r = 1;
      qe(mr(this.source), (e) => {
        Ar(e) && Co(e, this), ic(e) && (e.idle || this._active.add(e), r = Math.max(r, e.priority + 1));
      }), this.priority = r, this._start();
    }
    _detach() {
      qe(mr(this.source), (r) => {
        Ar(r) && _i(r, this);
      }), this._active.clear(), oa(this);
    }
    eventObserved(r) {
      r.type == "change" ? r.idle ? this.advance() : (this._active.add(r.parent), this._start()) : r.type == "idle" ? this._active.delete(r.parent) : r.type == "priority" && (this.priority = mr(this.source).reduce((e, t) => Math.max(e, (ic(t) ? t.priority : 0) + 1), 0));
    }
  };
  function eA(r) {
    return r.idle !== false;
  }
  function I1(r) {
    return !r.size || Array.from(r).every(eA);
  }
  function oa(r) {
    r.idle || (r.idle = true, qe(ss(r), (e) => {
      e.done = true;
    }), pi(r, {
      type: "idle",
      parent: r
    }));
  }
  Sr.assign({
    createStringInterpolator: Qc,
    to: (r, e) => new $y(r, e)
  });
  var tA = [
    "primitive"
  ].concat(Object.keys(o9).filter((r) => /^[A-Z]/.test(r)).map((r) => r[0].toLowerCase() + r.slice(1)));
  Sr.assign({
    createStringInterpolator: Qc,
    colors: p3,
    frameLoop: "demand"
  });
  i9(() => {
    ke.advance();
  });
  var rA = S3(tA, {
    applyAnimatedValues: Oa
  }), nA = rA.animated;
  oA = ({ children: r, targetName: e, ...t }) => {
    const { trackClick: n } = s9(), o = u.useCallback((i) => {
      e && n({
        targetName: e,
        ...t,
        event: i
      });
    }, [
      n,
      e,
      t
    ]);
    return R.jsx("group", {
      onPointerDown: o,
      name: e,
      children: r
    });
  };
  iA = ({ tooltip: r, children: e, menuMode: t, validModesToDisplayTooltip: n, targetName: o, innerText: i }) => {
    const s = Ue((f) => f.gl), c = u.useRef(null), l = u.useRef(tt.Explore);
    u.useEffect(() => {
      const f = Ft.subscribe((d) => d.menuMode, (d) => {
        l.current = d, n.includes(d) || (Li.getState().hide(), d === tt.Globe && Ft.getState().globeIsBeingHovered || s.domElement.style.setProperty("cursor", "auto", "important"));
      }, {
        fireImmediately: true
      });
      return () => {
        f();
      };
    }, [
      s,
      n
    ]);
    const a = (f) => {
      if (f.pointerType === "touch") return;
      n.includes(l.current) && (t !== tt.Globe && f.stopPropagation(), s.domElement.style.setProperty("cursor", "pointer", "important"), r && (Li.getState().show(), Li.getState().setTooltipText(r)), Ft.getState().setModeBeingHovered(t));
    }, p = (f) => {
      if (f.pointerType === "touch") return;
      n.includes(l.current) && (t !== tt.Globe && f.stopPropagation(), s.domElement.style.setProperty("cursor", "auto", "important"), r && Li.getState().hide(), Ft.getState().setModeBeingHovered(null));
    };
    return R.jsx(oA, {
      targetName: o,
      innerText: i || r,
      parentName: "menu-hover-effect",
      extraMetadata: {
        innerText: i || "",
        tooltip: r || "",
        menuMode: t.toString()
      },
      children: R.jsx("group", {
        ref: c,
        onPointerMove: a,
        onPointerLeave: p,
        children: e
      })
    });
  };
  function T1(r) {
    const e = Math.sin(r * 0.5);
    return e * e;
  }
  const s0 = Math.PI / 180;
  function sA(r, e) {
    const t = e[0] * s0, n = e[1] * s0, o = r[0] * s0, i = r[1] * s0, s = Math.cos(n), c = Math.sin(n), l = Math.cos(i), a = Math.sin(i), p = s * Math.cos(t), f = s * Math.sin(t), d = l * Math.cos(o), _ = l * Math.sin(o), h = 2 * Math.asin(Math.sqrt(T1(i - n) + s * l * T1(o - t))), b = Math.sin(h), g = h ? function(y) {
      const A = y * h, C = Math.sin(A) / b, S = Math.sin(h - A) / b, B = S * p + C * d, T = S * f + C * _, E = S * c + C * a;
      return [
        B,
        E,
        -T
      ];
    } : function() {
      return [
        p,
        c,
        -f
      ];
    };
    return g.distance = h, g;
  }
  const aA = new F(), cA = new F(), lA = new F(), uA = new F(), dA = new F(), fA = new F();
  function x1(r, e, t, n, o, i, s) {
    const l = aA.set(...Ha(r, e, 1)), a = cA.set(...Ha(t, n, 1)), p = l.distanceTo(a), f = R0(o, i, Be.easeInQuad(p / 2)), d = sA([
      n,
      t
    ], [
      e,
      r
    ]), _ = lA.set(...d(0.25)).multiplyScalar(1 + f), h = uA.set(...d(0.75)).multiplyScalar(1 + f), b = dA.set(...d(0.25)).multiplyScalar(1);
    b.sub(_), b.cross(fA.copy(h).sub(_));
    const g = R0(0, s, p / 2);
    return b.normalize().multiplyScalar(Math.random() * g - g * 0.5), Math.random() > 0.5, _.add(b), h.add(b), {
      start: l,
      midCoord1: _,
      midCoord2: h,
      end: a,
      distance: p
    };
  }
  const pA = 60, _A = 24.396308, hA = -125, mA = -66.93457;
  function P1(r, e) {
    return r >= _A && r <= pA && e >= hA && e <= mA;
  }
  function gA(r) {
    return P1(r.sLa, r.sLo) && P1(r.cLa, r.cLo);
  }
  var wA = `varying float vAge;
varying vec2 vUv;
varying float vInNA;
varying vec3 vColor;
varying vec2 vNoiseScale;

float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 n) {
    const vec2 d = vec2(0.0, 1.0);
    vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

float ramp(float t) {
    float v = step(0.0, t) * (1.0 - step(1.0, t));
    return smoothstep(0.0, 1.0, (1.0 - t)) * v;
}

void main() {

    if(vAge <= 0.0 || vAge >= 2.0) {
        discard;
    }

    
    float adjustedAge = vAge - vUv.y;

    float r = ramp(adjustedAge);
    vec2 uvScaled = vUv;
    float n = noise(uvScaled);

    float alpha = step(1.0 - r, n);
    alpha =  alpha * (1.0 * pow(1.0 - adjustedAge, (vInNA > 0.5 ? 8.0 : 2.8)));
    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(vColor.rgb * 2.0, alpha);
}`, bA = `uniform float time;
uniform float duration;
uniform float thickness;
uniform vec3 color;
uniform float varyBloomWithDistance;
uniform float bloom;
uniform float minBloom;
uniform float maxBloom;
uniform vec2 noiseScale;

attribute vec3 startPos;
attribute vec3 midCoord1;
attribute vec3 midCoord2;
attribute vec3 endPos;
attribute float startTime;
attribute float distance;
attribute float inNA;

varying float vAge;
varying vec2 vUv;
varying float vInNA;
varying vec3 vColor;
varying vec2 vNoiseScale;

vec3 cubicBezier(vec3 startPoint, vec3 controlPoint1, vec3 controlPoint2, vec3 endPoint, float t) {
  float u = 1.0 - t;
  float tt = t * t;
  float uu = u * u;
  float uuu = uu * u;
  float ttt = tt * t;

  vec3 p = uuu * startPoint;
  p += 3.0 * uu * t * controlPoint1;
  p += 3.0 * u * tt * controlPoint2;
  p += ttt * endPoint;

  return p;
}

vec3 cubicBezierTangent(vec3 startPoint, vec3 controlPoint1, vec3 controlPoint2, vec3 endPoint, float t) {
  float u = 1.0 - t;
  float tt = t * t;
  float uu = u * u;

  vec3 p = -3.0 * uu * startPoint;
  p += 3.0 * (3.0 * tt - 4.0 * t + 1.0) * controlPoint1;
  p += 3.0 * (2.0 * t - 3.0 * tt) * controlPoint2;
  p += 3.0 * tt * endPoint;

  return normalize(p);
}

void main() {
  vAge = clamp((time - startTime) / duration, 0.0, 2.0);
  vUv = uv;
  vInNA = inNA;

  if(vAge <= 0.0 || vAge >= 2.0) {
    return;
  }

  float t = uv.y;
  float side = 2.0 * uv.x - 1.0;

  
  vec3 originalPosition = (modelMatrix * vec4(cubicBezier(startPos, midCoord1, midCoord2, endPos, t), 1.0)).xyz;
  vec3 direction = (modelMatrix * vec4(cubicBezierTangent(startPos, midCoord1, midCoord2, endPos, t), 0.0)).xyz;

  vec3 look = normalize(originalPosition - cameraPosition);
  vec3 offset = cross(look, direction * side);

  float distanceScalingFactor = distance * 0.5;

  float adjustedThickness = thickness;
  if(inNA < 0.5 && distance < 0.65) {
    adjustedThickness *= 2.5;
  }

  vec3 adjustedPosition = originalPosition + normalize(offset) * adjustedThickness;

  float scaledBloom = clamp(bloom * distanceScalingFactor, minBloom, maxBloom);
  float adjustedBloom = mix(bloom, scaledBloom, varyBloomWithDistance);
  vColor = color * adjustedBloom;

  vNoiseScale = vec2(adjustedThickness * 2.0, distance) * noiseScale;

  gl_Position = projectionMatrix * viewMatrix * vec4(adjustedPosition, 1.0);
}`;
  const We = 15;
  function F1({ numInstances: r = 1e4, arcSegments: e = 20, duration: t = 1, thickness: n = 3, offset: o = 0.55, minArcHeight: i = 0, maxArcHeight: s = 1, color: c = "#b3ffaf", varyBloomWithDistance: l = true, bloom: a = 1.125, minBloom: p = 1, maxBloom: f = 1.25, noiseScale: d = {
    x: 800,
    y: 800
  }, nerdMenuFolderName: _ = "Arcs" }) {
    const h = u.useMemo(() => new sr({
      uniforms: {
        time: {
          value: 0
        },
        duration: {
          value: t
        },
        thickness: {
          value: n / 1e4
        },
        color: {
          value: new Ye(c)
        },
        varyBloomWithDistance: {
          value: l ? 1 : 0
        },
        bloom: {
          value: a
        },
        minBloom: {
          value: p
        },
        maxBloom: {
          value: f
        },
        noiseScale: {
          value: d
        }
      },
      vertexShader: bA,
      fragmentShader: wA,
      transparent: true,
      depthWrite: false
    }), [
      t,
      n,
      c,
      l,
      a,
      p,
      f,
      d
    ]), b = u.useMemo(() => {
      const C = new U2(), S = new Float32Array(r * We), B = new Cn(S, We), T = new Uint16Array(e * 6), E = new Float32Array((e + 1) * 2 * 3), M = new Float32Array((e + 1) * 2 * 2);
      for (let x = 0, P = 0; P < e * 6; x += 2, P += 6) T[P + 0] = x + 0, T[P + 1] = x + 1, T[P + 2] = x + 2, T[P + 3] = x + 2, T[P + 4] = x + 1, T[P + 5] = x + 3;
      for (let x = 0; x <= e; x++) {
        const P = x / e;
        M[x * 4 + 0] = 0, M[x * 4 + 1] = P, M[x * 4 + 2] = 1, M[x * 4 + 3] = P;
      }
      for (let x = 0; x < r; x++) {
        const { start: P, midCoord1: D, midCoord2: H, end: k, distance: J } = x1(0, 0, 0, 0, i, s, o), W = -t * 2;
        S[x * We + 0] = P.x, S[x * We + 1] = P.y, S[x * We + 2] = P.z, S[x * We + 3] = D.x, S[x * We + 4] = D.y, S[x * We + 5] = D.z, S[x * We + 6] = H.x, S[x * We + 7] = H.y, S[x * We + 8] = H.z, S[x * We + 9] = k.x, S[x * We + 10] = k.y, S[x * We + 11] = k.z, S[x * We + 12] = W, S[x * We + 13] = J, S[x * We + 14] = 0;
      }
      return C.setIndex(new ht(T, 1)), C.setAttribute("position", new ht(E, 3)), C.setAttribute("uv", new ht(M, 2)), C.setAttribute("startPos", new rt(B, 3, 0)), C.setAttribute("midCoord1", new rt(B, 3, 3)), C.setAttribute("midCoord2", new rt(B, 3, 6)), C.setAttribute("endPos", new rt(B, 3, 9)), C.setAttribute("startTime", new rt(B, 1, 12)), C.setAttribute("distance", new rt(B, 1, 13)), C.setAttribute("inNA", new rt(B, 1, 14)), C;
    }, [
      e,
      r,
      t,
      i,
      s,
      o
    ]), g = u.useRef(0);
    it(({ clock: C }) => {
      g.current = C.elapsedTime, h.uniforms.time.value = g.current;
    });
    const y = u.useCallback((C) => {
      const S = b.attributes.startPos.data, B = S.array;
      let T = 0, E = false;
      for (; T < r; T++) {
        const J = B[T * We + 12];
        if (g.current - J < t * 2) {
          E = true;
          break;
        }
      }
      let M = T;
      if (E) {
        for (; M < r; M++) {
          const W = B[M * We + 12];
          if (g.current - W >= t * 2) break;
        }
        M - T > 0 && B.copyWithin(0, T * We, M * We);
      }
      const x = M - T, P = r - x, D = Math.min(C.length, P), H = [];
      for (let J = 0; J < D; J++) {
        const W = C.shift();
        if (!W) break;
        const K = x + J, { start: Q, midCoord1: Z, midCoord2: j, end: U, distance: N } = x1(W.sLa, W.sLo, W.cLa, W.cLo, i, s, o), oe = W.delay && W.delay > 0 ? g.current + W.delay : g.current + (10 - (J + 1) / D * 10);
        B[K * We + 12] = oe, H.push({
          impactPosition: [
            U.x,
            U.y,
            U.z
          ],
          impactTime: oe + t,
          impactLatLon: [
            W.cLa,
            W.cLo
          ]
        }), B[K * We + 0] = Q.x, B[K * We + 1] = Q.y, B[K * We + 2] = Q.z, B[K * We + 3] = Z.x, B[K * We + 4] = Z.y, B[K * We + 5] = Z.z, B[K * We + 6] = j.x, B[K * We + 7] = j.y, B[K * We + 8] = j.z, B[K * We + 9] = U.x, B[K * We + 10] = U.y, B[K * We + 11] = U.z, B[K * We + 13] = N, B[K * We + 14] = gA(W) ? 1 : 0;
      }
      const k = M - T;
      if (k > 0) {
        const J = k - D;
        for (let W = 0; W < J; W++) B[(x + D + W) * We + 12] = g.current - t * 2;
      }
      return S.needsUpdate = true, H;
    }, [
      r,
      t,
      i,
      s,
      o,
      b
    ]), A = u.useCallback((C) => y(C), [
      y
    ]);
    return u.useLayoutEffect(() => {
      _ === "Short Arcs" ? kn.setState({
        launchShortArcs: A
      }) : _ === "Long Arcs" && kn.setState({
        launchLongArcs: A
      });
    }, [
      _,
      A
    ]), R.jsx("instancedMesh", {
      args: [
        b,
        h,
        r
      ],
      renderOrder: 3
    });
  }
  const yA = JSON.parse("[[34.926,138.608],[-34.893,138.836],[-36.026,146.971],[-28.853,153.487],[-27.437,153.041],[-28.604,153.483],[-17.061,145.921],[-33.316,151.295],[-32.925,151.225],[-31.904,115.908],[-33.692,115.284],[-32.037,115.916],[-32.068,115.636],[-31.783,115.766],[-32.047,115.829],[-31.886,115.82],[-31.741,116.067],[-31.931,115.852],[-31.609,115.727],[-37.493,143.781],[-31.956,115.948],[-12.394,130.882],[-32.058,115.766],[-36.734,144.423],[-38.072,144.423],[-31.965,115.846],[-31.952,115.819],[-38.371,142.512],[-30.189,153.04],[-35.289,149.133],[-35.457,149.099],[-27.976,153.321],[-42.832,147.344],[-27.666,152.668],[-41.432,147.131],[-28.756,153.271],[-27.762,153.04],[-37.851,145.267],[-27.117,152.886],[-35.086,138.875],[-32.829,151.63],[-26.325,152.946],[-33.325,149.12],[-27.551,153.355],[-28.062,152.796],[-34.581,150.777],[-36.345,144.716],[-37.336,144.617],[-35.093,150.383],[-26.699,152.901],[-38.312,144.053],[-33.764,150.924],[-27.582,151.536],[-31.98,115.78],[-31.98,115.902],[-19.296,146.756],[-28.358,153.358],[-34.477,150.356],[-34.375,150.838],[48.208,16.378],[51.26,4.37],[51.309,4.5],[50.873,4.375],[51.074,3.725],[51.029,4.45],[51.01,3.622],[50.79,4.361],[-22.923,-43.451],[-22.426,-48.551],[49.069,-122.285],[43.864,-79.025],[43.996,-79.447],[44.36,-79.682],[45.975,-70.659],[45.241,-73.956],[44.727,-63.669],[44.237,-77.361],[43.715,-79.752],[43.156,-80.272],[44.6,-75.697],[45.166,-72.762],[43.379,-79.84],[49.248,-122.965],[43.849,-79.902],[51.035,-114.052],[43.401,-80.328],[43.716,-80.387],[49.143,-121.93],[49.099,-122.66],[52.282,-113.797],[43.971,-78.653],[44.591,-80.246],[49.297,-122.771],[49.697,-124.977],[44.687,-63.558],[49.073,-123.088],[45.541,-73.903],[49.361,-123.003],[45.204,-78.404],[53.519,-113.502],[45.957,-66.644],[45.491,-75.659],[46.59,-81.045],[43.533,-80.237],[44.645,-63.634],[43.624,-79.942],[43.253,-79.958],[50.695,-120.328],[44.517,-78.816],[49.885,-119.44],[43.976,-79.609],[44.312,-76.454],[43.421,-80.47],[45.416,-72.652],[45.833,-74.021],[45.615,-73.202],[45.605,-73.725],[45.209,-73.23],[44.686,-75.921],[45.672,-72.907],[45.746,-73.655],[45.929,-74.256],[49.687,-112.848],[43.175,-79.417],[42.953,-81.238],[45.526,-73.427],[46.711,-71.242],[49.263,-122.516],[45.731,-73.322],[43.881,-79.295],[50.046,-110.702],[43.519,-79.945],[45.652,-74.06],[43.598,-79.661],[46.117,-64.813],[45.502,-73.567],[49.48,-117.366],[44.084,-79.778],[44.049,-79.461],[43.051,-79.102],[49.315,-123.072],[43.453,-79.719],[43.939,-78.873],[45.293,-75.775],[44.305,-78.326],[43.909,-79.113],[49.253,-122.762],[44.01,-78.387],[49.297,-122.874],[45.457,-74.954],[44.176,-77.582],[50.455,-104.628],[49.169,-123.172],[45.347,-73.609],[48.496,-123.386],[52.145,-106.645],[45.401,-71.962],[53.546,-113.311],[49.745,-123.141],[53.641,-113.638],[43.182,-79.258],[47.482,-52.786],[43.37,-80.983],[49.107,-122.795],[48.409,-89.265],[45.704,-73.832],[43.723,-79.389],[51.063,-115.326],[49.094,-122.572],[46.363,-72.612],[49.254,-123.113],[45.367,-74.213],[43.836,-79.565],[50.23,-119.355],[48.428,-123.359],[48.372,-71.132],[43.48,-80.544],[49.86,-119.609],[49.366,-123.196],[43.922,-78.96],[43.397,-80.651],[42.29,-82.988],[49.864,-97.157],[40.185,116.411],[28.228,113.153],[31.625,119.636],[30.653,103.93],[29.512,106.503],[22.934,113.875],[23.007,112.944],[25.99,119.307],[23.33,113.539],[29.9,119.468],[31.762,117.356],[22.246,114.203],[29.116,119.95],[22.321,114.19],[34.563,119.176],[31.926,118.843],[22.341,114.186],[29.597,121.679],[36.29,120.369],[25.166,118.315],[31.198,121.899],[22.605,114.145],[31.381,120.653],[34.108,108.789],[24.649,118.127],[34.073,113.709],[34.628,113.469],[6.258,-75.611],[3.426,-76.519],[45.833,15.978],[35.116,33.307],[34.901,33.62],[50.067,14.466],[57.013,9.963],[56.163,10.157],[55.297,10.068],[55.676,12.553],[55.42,8.684],[56.311,9.931],[55.68,12.524],[55.751,12.553],[56.049,12.233],[55.794,9.743],[56.038,12.497],[56.157,8.876],[55.929,12.239],[56.37,8.604],[55.928,9.784],[55.659,12.239],[56.036,9.23],[55.455,9.44],[55.786,12.509],[55.452,9.886],[55.26,11.732],[55.385,10.372],[56.516,10.068],[55.637,12.103],[55.834,12.489],[55.687,12.449],[56.193,9.517],[56.078,9.872],[55.343,11.342],[55.486,11.559],[55.09,10.597],[56.945,8.602],[55.742,9.366],[56.462,9.404],[29.984,31.601],[59.425,24.744],[60.164,24.714],[60.113,25.017],[62.131,25.647],[65.152,25.758],[60.338,23.239],[61.629,23.881],[60.471,22.264],[60.452,25.002],[60.313,24.951],[43.536,5.399],[48.912,2.384],[48.946,2.493],[44.858,-0.573],[48.836,2.239],[48.904,2.306],[48.935,2.294],[48.895,2.287],[50.632,3.047],[45.755,4.836],[43.292,5.419],[43.613,3.869],[48.864,2.449],[47.232,-1.548],[48.886,2.267],[43.712,7.238],[47.882,1.917],[48.857,2.343],[43.596,1.432],[48.346,10.885],[49.887,10.898],[52.501,13.402],[52.011,8.541],[51.47,7.225],[47.733,9.401],[50.706,7.11],[53.119,8.781],[52.275,10.524],[51.147,11.884],[50.826,12.912],[52.911,7.905],[50.946,6.974],[52.042,13.82],[51.516,7.475],[51.066,13.783],[51.44,6.735],[51.236,6.81],[51.347,7.324],[51.434,7.017],[50.117,8.644],[47.993,7.819],[49.491,10.966],[51.225,14.751],[53.646,9.635],[53.316,9.963],[49.405,8.694],[51.307,8.385],[49.012,8.413],[51.311,9.461],[54.326,10.134],[51.345,6.58],[49.618,8.66],[51.961,6.899],[51.867,7.366],[51.932,8.352],[51.049,6.164],[52.168,8.644],[51.652,6.259],[51.981,8.951],[51.257,6.969],[51.664,8.72],[51.672,7.16],[52.211,7.579],[51.579,7.637],[51.283,6.326],[51.627,6.618],[50.648,8.366],[53.499,7.37],[48.108,9.775],[47.925,7.925],[48.678,8.943],[49.855,8.795],[52.728,8.701],[48.148,7.898],[52.737,7.403],[48.648,9.369],[50.564,9.759],[52.476,7.02],[48.663,9.718],[49.177,9.191],[52.09,9.943],[47.798,8.91],[48.941,9.124],[50.332,7.332],[48.074,11.631],[50.022,8.812],[52.988,8.389],[47.825,9.78],[47.878,12.163],[49.144,9.909],[48.006,11.282],[48.482,8.988],[51.342,12.375],[50.244,9.286],[50.103,8.436],[49.974,8.241],[49.499,8.5],[48.153,11.547],[51.262,7.713],[51.954,7.624],[51.473,12.78],[49.437,11.083],[51.013,7.517],[51.616,13.943],[53.145,8.224],[48.421,8.016],[52.277,8.047],[48.878,10.09],[53.715,9.732],[52.426,13.029],[52.246,12.689],[52.422,9.72],[48.899,9.501],[50.905,6.717],[51.143,6.649],[49.368,8.767],[50.761,7.234],[50.142,8.081],[51.023,7.195],[54.147,12.141],[54.627,9.511],[53.92,10.141],[53.593,9.412],[53.721,10.331],[48.775,9.172],[50.727,6.217],[52.073,13.276],[48.391,9.95],[50.079,8.261],[51.251,7.169],[48.267,8.938],[47.484,19.108],[64.043,-21.685],[64.186,-21.727],[22.781,72.247],[12.951,77.596],[13.064,80.243],[28.394,77.556],[28.369,76.94],[26.976,75.717],[22.527,88.358],[17.544,78.558],[18.986,72.838],[19.143,72.877],[28.576,77.148],[28.794,77.107],[28.725,77.044],[18.571,74.069],[28.481,77.19],[28.54,77.272],[21.267,73.069],[19.358,73.316],[28.655,77.065],[-6.183,106.652],[53.342,-8.817],[51.9,-8.491],[53.359,-6.258],[53.255,-6.199],[53.492,-6.256],[53.283,-9.05],[53.281,-6.404],[52.647,-8.615],[53.585,-6.465],[53.472,-7.626],[53.174,-6.211],[54.018,-6.364],[53.643,-6.707],[52.202,-7.099],[53.979,-9.727],[32.011,34.783],[32.308,34.86],[32.085,34.79],[44.498,11.333],[44.823,11.649],[43.78,11.245],[40.402,18.178],[45.468,9.173],[44.644,10.915],[40.857,14.239],[41.886,12.461],[45.072,7.678],[35.779,139.795],[35.688,139.755],[35.669,139.777],[35.321,139.534],[35.625,139.824],[35.63,139.688],[35.65,139.743],[35.711,139.662],[35.557,139.784],[35.908,139.655],[35.64,139.635],[35.668,139.696],[35.61,139.737],[35.701,139.709],[35.697,139.625],[35.712,139.816],[35.715,139.786],[35.732,139.712],[35.448,139.604],[35.106,135.727],[35.141,136.921],[34.662,135.47],[34.698,135.158],[33.787,130.163],[-1.298,36.86],[33.888,35.504],[3.133,101.606],[24.668,-107.259],[20.676,-103.336],[29.023,-111.474],[19.383,-99.34],[21.125,-101.622],[19.277,-99.139],[25.645,-100.311],[21.811,-102.296],[28.999,-106.232],[19.008,-98.175],[20.729,-100.453],[32.404,-116.82],[20.984,-89.64],[19.471,-99.293],[25.645,-100.375],[20.591,-103.348],[19.543,-99.17],[20.795,-103.494],[43.736,7.424],[-36.522,174.869],[-43.514,172.605],[-45.674,170.258],[-37.773,175.268],[-39.417,176.627],[-40.58,175.355],[-40.862,175.177],[-41.279,174.957],[-41.113,173.396],[-39.05,174.375],[-40.386,175.642],[-44.674,168.857],[-38.814,176.047],[-37.703,176.189],[-41.079,175.115],[-37.541,175.07],[-43.249,172.311],[-41.256,174.75],[-35.716,174.257],[59.683,10.477],[60.36,5.371],[59.933,10.507],[59.597,11.216],[58.063,7.955],[59.975,10.739],[63.37,10.396],[62.727,6.326],[14.491,121.002],[52.229,21.048],[38.743,-9.156],[38.743,-9.156],[44.441,26.088],[46.782,23.61],[47.066,21.919],[44.809,20.426],[1.33,103.931],[48.164,17.126],[41.4,2.151],[40.283,-3.797],[40.465,-3.696],[39.556,2.715],[37.392,-5.957],[39.42,-0.358],[41.31,2.099],[47.381,8.531],[50.448,30.548],[25.324,55.56],[50.844,-0.299],[50.841,-0.568],[51.125,0.811],[52.051,0.916],[53.536,-1.533],[51.59,0.466],[51.273,-1.201],[53.333,-0.959],[52.489,-1.875],[52.572,-1.222],[53.579,-2.467],[53.845,-1.855],[51.942,0.59],[52.588,0.837],[51.639,0.311],[52.362,-2.016],[51.725,-0.047],[52.976,-1.262],[53.588,-2.313],[53.721,-1.973],[52.199,0.133],[52.712,-1.98],[51.284,1.102],[54.971,-2.809],[52.737,-1.146],[51.725,0.481],[51.897,-2.074],[51.959,-1.276],[53.256,-1.401],[50.937,-0.742],[53.661,-2.648],[51.873,0.861],[51.816,-1.893],[52.417,-1.52],[54.08,-2.174],[51.778,-0.541],[51.431,0.253],[53.128,-1.694],[53.544,-1.096],[52.483,-2.109],[52.343,0.295],[50.764,-3.225],[51.075,-0.955],[51.865,-0.008],[53.249,0.03],[52.863,-1.812],[52.237,1.461],[50.776,0.266],[50.933,-1.327],[54.613,-2.622],[51.357,-0.392],[51.709,0.149],[52.935,-1.347],[50.722,-3.51],[50.853,-1.225],[51.054,0.994],[54.935,-1.683],[53.028,-1.119],[51.248,-0.562],[54.287,-1.319],[52.539,-1.008],[51.768,0.109],[54.067,-1.596],[51.285,-0.897],[50.869,0.57],[50.838,-0.989],[51.677,-0.281],[53.373,-1.874],[52.616,-1.391],[50.994,-0.366],[52.374,-0.221],[53.759,-2.39],[52.056,1.16],[52.727,0.471],[53.627,-1.763],[53.425,-2.834],[54.069,-2.715],[53.826,-1.506],[50.882,0.005],[52.688,-1.805],[53.225,-0.555],[53.395,-2.917],[51.5,-0.109],[51.235,0.581],[51.71,0.783],[52.183,-2.345],[53.451,-2.233],[53.171,-1.173],[52.796,-0.856],[51.203,-2.545],[50.876,-3.556],[52.247,1.092],[51.021,-0.127],[51.212,-0.325],[50.858,-1.625],[53.124,-0.92],[55.008,-1.658],[52.993,-2.319],[51.07,-3.915],[53.226,-1.448],[51.959,-0.193],[52.851,1.17],[55.028,-1.517],[52.547,-1.628],[52.753,-1.405],[52.632,1.283],[52.501,-1.476],[52.587,-1.093],[53.552,-2.051],[51.755,-1.241],[53.865,-2.185],[53.812,-2.698],[52.282,-1.952],[51.253,-0.192],[53.907,-2.445],[53.617,-2.158],[51.591,0.81],[53.694,-2.267],[50.952,0.539],[53.409,-1.286],[51.394,-0.541],[52.901,-1.038],[54.21,-0.852],[53.49,-2.37],[52.515,-2.009],[54.366,-0.635],[51.185,-2.953],[53.565,-3.016],[53.787,-1.135],[51.275,0.172],[53.404,-1.55],[52.413,-1.727],[51.087,-3.363],[52.173,0.081],[52.831,-1.56],[50.374,-3.823],[52.854,-0.518],[54.293,-2.85],[52.515,1.276],[51.634,-1.071],[53.728,-2.71],[50.988,-2.71],[54.964,-1.444],[51.772,-0.342],[53.459,-2.724],[52.848,-2.176],[51.904,-0.189],[53.394,-2.128],[52.179,-1.623],[51.729,-2.3],[54.88,-1.452],[51.343,-0.671],[51.342,0.813],[53.477,-2.063],[52.626,-1.678],[51.227,-0.043],[50.606,-3.656],[51.128,-1.511],[51.946,-2.087],[51.661,-0.461],[51.274,0.358],[50.887,-4.251],[53.419,-2.355],[51.114,0.431],[51.935,0.28],[51.634,-1.442],[53.661,-1.412],[52.599,-1.966],[52.31,-1.585],[51.668,-0.403],[51.15,-0.633],[50.967,0.199],[51.767,-0.194],[50.656,-4.046],[53.61,-2.883],[51.838,-1.507],[52.278,0.622],[53.524,-2.589],[51.028,-1.221],[53.368,-3.093],[51.314,-0.561],[52.589,-2.121],[50.829,-0.396],[52.164,-2.051],[53.903,-2.854],[32.455,-99.739],[42.484,-71.438],[34.056,-84.671],[32.959,-96.836],[34.151,-118.761],[33.534,-81.727],[41.099,-74.099],[41.08,-81.522],[37.756,-122.274],[44.627,-123.097],[35.108,-106.642],[38.818,-77.086],[34.084,-118.135],[33.579,-117.729],[33.108,-96.673],[34.07,-84.274],[40.463,-111.772],[28.662,-81.395],[35.199,-101.831],[40.379,-111.795],[42.026,-93.622],[42.871,-71.607],[40.671,-73.417],[48.488,-122.627],[33.839,-117.857],[61.148,-149.194],[42.647,-71.165],[41.729,-93.603],[42.276,-83.731],[38.971,-76.503],[37.978,-121.797],[35.724,-78.877],[44.278,-88.389],[34.134,-118.037],[40.862,-124.075],[33.111,-97.187],[32.7,-97.125],[42.095,-87.982],[35.124,-120.585],[39.831,-105.144],[35.721,-79.813],[35.571,-82.554],[42.191,-122.699],[44.479,-88.089],[39.195,-106.837],[33.951,-83.369],[33.763,-84.423],[33.36,-82.074],[41.764,-88.29],[30.297,-97.749],[25.957,-80.137],[34.139,-117.912],[47.654,-122.515],[34.343,-84.364],[39.29,-76.612],[41.668,-70.353],[41.848,-88.311],[30.442,-91.131],[40.744,-73.261],[40.665,-74.109],[45.478,-122.817],[45.783,-111.176],[33.98,-118.18],[29.704,-95.462],[47.595,-122.155],[48.754,-122.471],[37.515,-122.295],[32.677,-97.463],[44.057,-121.309],[40.109,-74.943],[41.958,-87.943],[36.355,-94.231],[37.867,-122.3],[40.727,-74.592],[36.12,-86.767],[40.627,-75.368],[42.558,-70.843],[34.079,-118.402],[43.444,-70.398],[33.527,-86.795],[39.901,-75.599],[35.945,-95.877],[48.985,-122.746],[44.831,-93.315],[39.248,-84.383],[40.477,-111.939],[26.374,-80.106],[29.784,-98.729],[43.6,-116.231],[41.69,-88.102],[26.356,-81.787],[40.905,-74.405],[32.523,-93.667],[42.329,-71.011],[47.774,-122.204],[40.027,-105.252],[41.724,-70.585],[26.528,-80.081],[45.684,-111.056],[27.488,-82.578],[33.925,-117.865],[39.499,-106.043],[35.992,-86.776],[41.397,-73.616],[41.187,-73.196],[40.594,-74.608],[42.53,-83.785],[37.69,-122.339],[36.037,-95.781],[41.467,-73.392],[33.875,-84.331],[42.324,-71.141],[25.998,-97.457],[31.145,-81.474],[33.431,-112.643],[33.857,-118.005],[42.898,-78.853],[34.118,-83.992],[34.188,-118.324],[32.517,-97.335],[37.589,-122.364],[44.487,-73.231],[44.765,-93.279],[34.137,-118.669],[43.645,-116.66],[34.223,-119.032],[45.6,-122.431],[42.376,-71.118],[40.242,-76.927],[40.808,-81.368],[26.645,-81.996],[38.939,-74.902],[39.395,-107.214],[33.119,-117.311],[40.825,-74.061],[39.965,-86.146],[34.377,-119.514],[32.989,-96.9],[33.837,-118.256],[39.151,-119.748],[34.163,-84.801],[35.782,-78.819],[42.842,-106.321],[39.376,-104.854],[37.684,-113.096],[30.511,-97.82],[41.966,-91.678],[40.625,-73.728],[38.898,-82.446],[33.868,-118.069],[41.432,-81.389],[33.884,-84.301],[40.114,-88.274],[33.282,-111.851],[44.854,-93.562],[35.927,-79.039],[32.812,-79.961],[35.206,-80.834],[38.037,-78.485],[35.068,-85.249],[42.908,-78.75],[40.078,-75.138],[39.903,-74.995],[36.678,-76.302],[41.511,-72.904],[38.658,-90.579],[41.083,-74.055],[41.838,-87.685],[39.757,-121.817],[33.984,-117.667],[33.951,-117.725],[32.629,-117.014],[39.141,-84.506],[43.067,-73.778],[34.126,-117.715],[36.57,-87.343],[39.803,-75.46],[41.103,-112.024],[27.979,-82.769],[28.54,-81.727],[41.479,-81.68],[40.863,-74.158],[36.829,-119.687],[26.322,-80.182],[47.704,-116.793],[41.946,-84.998],[30.585,-96.296],[35.056,-89.693],[38.867,-104.76],[34.036,-80.904],[39.986,-82.985],[39.864,-104.843],[33.893,-118.227],[37.972,-122.002],[30.322,-95.482],[36.149,-85.508],[32.964,-96.991],[25.677,-80.249],[35.474,-80.884],[33.862,-117.564],[27.828,-97.481],[44.569,-123.278],[33.667,-117.913],[40.614,-111.815],[34.09,-117.882],[39.034,-84.517],[41.766,-71.486],[38.662,-90.443],[41.414,-87.345],[34.006,-118.397],[34.207,-84.134],[37.317,-122.045],[25.576,-80.337],[33.817,-118.039],[32.794,-96.766],[34.771,-84.977],[37.686,-122.469],[33.443,-117.707],[42.574,-70.949],[37.812,-121.97],[41.052,-73.479],[41.557,-90.605],[26.079,-80.287],[39.78,-84.2],[29.199,-81.101],[42.313,-83.213],[40.763,-73.319],[26.305,-80.126],[26.455,-80.09],[33.21,-97.148],[39.762,-104.876],[41.572,-93.61],[42.034,-87.901],[42.383,-83.102],[46.806,-95.845],[33.999,-117.816],[25.815,-80.357],[33.907,-84.271],[31.233,-85.406],[33.738,-84.707],[39.161,-75.52],[41.795,-88.017],[33.938,-118.131],[40.314,-75.128],[40.496,-111.861],[30.192,-98.081],[37.716,-121.896],[42.501,-90.707],[34.005,-84.149],[37.246,-107.835],[35.979,-78.902],[42.044,-70.657],[44.817,-93.164],[43.722,-116.387],[40.428,-74.418],[42.036,-71.11],[33.961,-117.58],[40.291,-74.056],[44.82,-91.494],[44.849,-93.46],[44.891,-93.36],[40.536,-74.369],[35.669,-97.416],[47.826,-122.37],[32.804,-116.959],[31.848,-106.43],[33.912,-118.431],[42.039,-88.322],[40.665,-74.192],[42.006,-87.993],[41.691,-85.961],[46.999,-120.547],[29.955,-90.188],[40.905,-74.12],[37.839,-122.298],[33.042,-117.292],[42.118,-76.022],[39.647,-104.994],[47.202,-121.99],[33.135,-117.072],[44.057,-123.117],[42.046,-87.694],[37.988,-87.534],[47.962,-122.189],[48.911,-122.353],[39.86,-74.895],[42.99,-70.964],[40.936,-74.118],[38.853,-77.3],[39.33,-84.541],[30.525,-87.884],[41.714,-71.101],[38.885,-77.175],[46.867,-96.828],[44.299,-93.279],[32.927,-96.881],[40.985,-111.906],[36.072,-94.166],[38.528,-90.449],[30.658,-81.45],[39.959,-85.967],[35.432,-82.506],[34.83,-87.666],[33.034,-97.114],[34.097,-117.46],[40.548,-105.066],[26.141,-80.143],[40.851,-73.971],[26.62,-81.83],[35.349,-94.369],[41.089,-85.144],[32.782,-97.347],[33.607,-111.74],[33.711,-117.951],[35.921,-86.852],[42.539,-82.95],[39.434,-77.414],[38.299,-77.487],[37.525,-121.995],[36.783,-119.795],[45.084,-93.259],[29.511,-95.198],[33.884,-117.928],[40.025,-82.864],[29.682,-82.345],[39.135,-77.213],[36.378,-86.459],[40.727,-73.645],[33.779,-117.96],[33.894,-118.307],[40.879,-74.108],[32.91,-96.63],[35.248,-81.184],[45.021,-84.681],[30.667,-97.695],[47.332,-122.594],[33.31,-111.746],[37.005,-121.584],[34.182,-118.247],[34.145,-117.847],[39.792,-75.036],[39.742,-105.213],[44.99,-93.359],[35.378,-77.972],[34.436,-119.86],[36.332,-86.704],[43.055,-86.22],[39.087,-108.569],[42.755,-84.744],[32.686,-97.021],[42.961,-85.656],[42.434,-123.332],[32.934,-97.074],[40.787,-73.726],[40.414,-104.771],[44.516,-87.989],[36.096,-79.827],[33.112,-96.11],[41.045,-73.626],[39.602,-86.107],[39.615,-104.913],[34.936,-82.234],[42.377,-87.927],[40.889,-74.046],[25.985,-80.141],[32.818,-97.271],[40.205,-74.676],[40.82,-74.429],[35.317,-80.651],[38.436,-78.873],[40.821,-73.216],[33.915,-118.348],[47.768,-116.804],[37.628,-122.102],[36.012,-115.039],[36.305,-86.6],[33.86,-118.419],[25.869,-80.304],[35.742,-81.323],[42.182,-87.81],[45.527,-122.936],[36.068,-79.1],[40.696,-74.229],[40.745,-74.028],[42.064,-88.146],[40.795,-73.071],[42.768,-86.099],[26.031,-80.164],[25.466,-80.447],[33.462,-86.809],[21.322,-157.812],[45.709,-121.526],[33.378,-86.802],[40.199,-75.166],[34.489,-93.05],[29.776,-95.376],[42.609,-83.935],[40.182,-74.198],[42.252,-73.786],[29.992,-95.266],[35.406,-80.875],[40.88,-73.412],[33.672,-118.025],[33.98,-118.217],[34.698,-86.625],[37.149,-113.352],[30.537,-97.551],[43.487,-112.036],[39.228,-119.951],[28.087,-80.57],[39.782,-86.138],[34.017,-117.927],[33.957,-118.344],[33.677,-117.774],[32.858,-96.97],[34.112,-117.963],[47.542,-122.044],[41.977,-88.018],[43.472,-110.774],[30.337,-81.66],[30.279,-81.375],[42.097,-79.237],[42.69,-89.012],[38.205,-85.57],[40.712,-74.065],[34.033,-84.203],[36.34,-82.379],[41.519,-88.15],[35.821,-90.679],[37.081,-94.506],[26.92,-80.112],[34,-117.471],[42.275,-85.588],[48.215,-114.328],[35.477,-80.638],[39.124,-94.554],[29.791,-95.837],[41.029,-111.945],[40.753,-74.12],[60.11,-151.723],[40.678,-74.289],[30.011,-90.255],[34.026,-84.618],[47.389,-122.213],[42.885,-85.593],[36.107,-80.087],[43.687,-114.373],[39.696,-84.15],[24.564,-81.777],[41.93,-73.997],[47.7,-122.198],[38.579,-90.42],[28.305,-81.417],[35.968,-83.95],[43.824,-91.228],[33.928,-117.952],[33.902,-118.009],[34.12,-117.77],[30.208,-92.032],[33.514,-117.786],[33.592,-117.699],[33.527,-117.705],[30.203,-93.215],[33.684,-117.335],[33.661,-117.671],[28.759,-81.336],[45.413,-122.7],[28.056,-81.954],[42.34,-88.203],[30.355,-97.987],[40.076,-74.203],[40.042,-76.301],[42.714,-84.56],[26.583,-80.055],[40.926,-73.753],[27.562,-99.487],[27.909,-82.772],[37.939,-122.531],[36.242,-115.272],[31.696,-89.145],[33.888,-118.353],[38.96,-95.264],[33.952,-83.993],[29.488,-95.108],[30.573,-97.863],[38.917,-94.381],[40.414,-111.873],[38.961,-94.802],[38.779,-75.146],[44.091,-70.168],[33.045,-96.979],[38.042,-84.459],[30.66,-97.9],[40.232,-75.534],[40.341,-111.719],[41.741,-73.193],[34.726,-92.358],[39.591,-105.019],[37.687,-121.761],[40.786,-74.329],[42.397,-83.373],[40.878,-74.081],[41.74,-111.842],[34.043,-117.248],[42.88,-71.387],[33.779,-118.168],[40.296,-73.99],[40.17,-105.105],[32.519,-94.762],[28.701,-81.349],[34.089,-118.407],[38.177,-85.667],[40.418,-105.062],[40.028,-75.281],[33.566,-101.888],[37.4,-79.191],[32.806,-83.697],[34.712,-86.762],[30.21,-95.744],[41.082,-74.186],[28.629,-81.371],[34.009,-118.766],[40.28,-74.344],[42.985,-71.445],[30.375,-90.091],[33.886,-118.424],[32.569,-97.121],[32.436,-111.154],[25.933,-81.701],[33.953,-84.542],[38.719,-90.476],[48.081,-122.156],[39.356,-84.305],[42.426,-71.456],[26.232,-98.247],[33.202,-96.668],[42.337,-122.854],[41.136,-81.869],[25.864,-80.351],[28.115,-80.658],[40.782,-73.408],[35.104,-89.979],[44.881,-93.14],[37.481,-122.149],[41.689,-81.336],[43.611,-116.398],[33.405,-111.723],[29.998,-90.178],[42.734,-71.189],[25.775,-80.21],[25.815,-80.137],[25.943,-80.243],[25.912,-80.322],[39.445,-75.716],[32.015,-102.128],[40.615,-111.893],[35.463,-97.371],[41.224,-73.059],[37.909,-122.542],[40.689,-111.829],[35.384,-82.587],[37.434,-121.892],[34.135,-84.314],[43.063,-87.965],[32.817,-98.078],[44.964,-93.268],[44.932,-93.46],[25.977,-80.336],[33.61,-117.655],[46.875,-114.021],[29.564,-95.537],[38.57,-109.548],[30.674,-88.09],[37.661,-120.989],[41.532,-87.879],[34.165,-117.992],[34.015,-118.111],[34.05,-118.132],[30.393,-95.696],[45.299,-93.8],[38.469,-107.861],[35.33,-97.477],[35.585,-80.824],[34.286,-118.877],[33.924,-117.205],[39.638,-79.946],[35.837,-78.835],[46.731,-116.999],[36.501,-80.614],[28.815,-81.633],[36.203,-86.517],[41.202,-73.728],[39.948,-74.905],[32.85,-79.831],[48.42,-122.311],[33.487,-86.74],[37.4,-122.08],[40.396,-75.925],[47.916,-122.31],[35.865,-86.439],[40.65,-111.887],[33.582,-117.178],[41.42,-91.069],[33.707,-78.876],[31.613,-94.653],[43.584,-116.564],[41.302,-70.117],[38.298,-122.301],[41.748,-88.166],[26.151,-81.794],[42.749,-71.491],[36.171,-86.784],[32.665,-117.098],[42.281,-71.241],[40.847,-73.152],[41.67,-70.943],[42.973,-88.129],[29.7,-98.115],[40.487,-74.445],[41.159,-73.499],[41.311,-72.925],[30.069,-89.93],[40.664,-73.939],[39.677,-75.757],[41.48,-71.32],[33.596,-117.893],[42.332,-71.208],[39.992,-75.411],[43.092,-79.014],[37.895,-84.567],[42.028,-87.81],[40.036,-86.006],[35.954,-86.662],[33.938,-84.206],[36.896,-76.263],[35.234,-97.347],[40.794,-74.024],[40.45,-74.48],[40.874,-81.397],[32.908,-80.066],[39.14,-94.564],[36.27,-115.125],[41.776,-111.807],[25.901,-80.168],[25.93,-80.166],[26.822,-80.056],[40.844,-111.919],[42.327,-72.675],[42.323,-71.646],[39.896,-104.982],[41.093,-73.419],[38.092,-122.557],[42.479,-83.489],[41.093,-73.913],[42.465,-83.182],[37.77,-122.225],[26.178,-80.153],[29.18,-82.149],[40.252,-74.039],[33.212,-117.33],[41.228,-111.968],[34.449,-119.247],[35.467,-97.514],[38.885,-94.819],[40.404,-74.309],[41.295,-72.384],[28.051,-82.67],[47.042,-122.896],[41.264,-96.038],[34.039,-117.606],[32.66,-85.38],[33.804,-117.821],[45.341,-122.593],[40.298,-111.699],[37.881,-122.179],[28.48,-81.344],[41.683,-88.337],[38.902,-94.687],[28.658,-81.187],[34.361,-89.528],[34.2,-119.212],[38.785,-90.718],[42.118,-88.043],[26.691,-80.039],[26.849,-80.166],[33.688,-116.374],[33.798,-116.547],[27.525,-82.576],[37.395,-122.143],[35.547,-100.965],[30.205,-85.587],[30.237,-85.877],[36.08,-115.136],[33.898,-118.165],[40.946,-74.071],[40.65,-111.501],[42.013,-87.844],[39.506,-104.774],[26.322,-80.254],[40.86,-74.424],[34.16,-118.139],[35.639,-120.656],[40.857,-74.128],[40.915,-74.162],[40.036,-111.739],[33.394,-84.571],[33.967,-84.232],[29.559,-95.321],[33.312,-86.756],[26.013,-80.338],[40.392,-78.115],[30.451,-87.202],[33.786,-112.3],[40.963,-74.304],[41.538,-83.641],[38.242,-122.626],[30.453,-97.602],[40.008,-75.134],[33.571,-112.089],[33.99,-118.089],[27.859,-82.708],[40.547,-74.463],[40.44,-79.976],[33.881,-117.855],[39.7,-86.374],[40.784,-73.472],[33.05,-96.749],[40.372,-111.741],[37.666,-121.881],[40.502,-79.75],[45.022,-93.462],[34.058,-117.763],[26.243,-80.129],[32.104,-81.257],[42.993,-82.434],[27.281,-80.383],[40.827,-73.677],[45.537,-122.65],[43.058,-70.783],[47.721,-116.939],[47.742,-122.641],[32.987,-117.02],[40.168,-83.08],[34.585,-112.447],[33.24,-96.808],[41.824,-71.421],[40.246,-111.646],[47.179,-122.29],[33.239,-111.643],[40.029,-75.367],[34.13,-117.562],[33.632,-117.599],[44.072,-103.22],[40.57,-122.366],[34.051,-117.171],[47.678,-122.118],[33.842,-118.403],[37.518,-122.211],[38.716,-75.08],[39.551,-119.852],[47.476,-122.191],[43.822,-111.792],[32.971,-96.71],[37.53,-77.476],[40.831,-74.015],[32.422,-90.145],[43.673,-111.913],[33.938,-117.395],[40.518,-111.964],[26.782,-80.073],[40.963,-85.375],[43.168,-77.616],[42.665,-83.156],[34.939,-81.028],[38.808,-121.249],[39.083,-77.155],[40.664,-73.638],[32.917,-96.437],[36.317,-94.153],[33.779,-118.351],[34.267,-85.187],[41.632,-88.1],[40.803,-73.127],[43.223,-123.352],[41.989,-87.872],[29.546,-95.822],[45.016,-93.154],[34.039,-84.351],[36.388,-78.981],[42.508,-83.154],[40.949,-73.675],[38.566,-121.468],[40.903,-74.096],[40.997,-72.291],[38.797,-90.516],[28.23,-81.285],[44.949,-93.365],[44.948,-93.104],[38.782,-90.606],[27.761,-82.643],[42.515,-70.849],[35.666,-80.489],[40.778,-111.931],[29.465,-98.524],[34.155,-117.263],[37.498,-122.268],[33.418,-117.623],[32.817,-117.133],[37.76,-122.694],[34.095,-118.099],[33.501,-117.654],[37.705,-122.163],[35.267,-120.669],[33.135,-117.174],[37.559,-122.311],[37.982,-122.507],[37.762,-121.935],[40.571,-111.851],[33.937,-84.37],[35.486,-79.176],[33.737,-117.882],[34.4,-119.712],[37.365,-121.968],[34.417,-118.496],[36.974,-122.035],[35.662,-105.982],[33.933,-118.062],[34.933,-120.445],[34.01,-118.5],[38.446,-122.706],[32.856,-116.985],[27.338,-82.533],[37.858,-122.492],[32.028,-81.179],[42.03,-88.084],[41.026,-80.204],[37.056,-122.012],[33.687,-111.865],[33.738,-118.089],[47.62,-122.351],[38.4,-122.828],[40.783,-74.066],[34.858,-111.795],[43.745,-87.732],[44.389,-73.241],[44.796,-106.964],[32.466,-93.796],[33.803,-118.168],[34.266,-118.749],[43.54,-96.739],[42.946,-76.428],[42.036,-87.74],[30.288,-89.783],[35.513,-78.35],[33.862,-84.516],[47.927,-122.097],[32.995,-117.258],[41.386,-81.44],[42.391,-71.101],[38.29,-122.46],[37.981,-120.382],[40.384,-74.526],[44.46,-73.22],[33.945,-118.193],[29.661,-95.228],[40.557,-111.978],[41.448,-71.544],[25.708,-80.295],[34.11,-118.157],[43.632,-70.286],[40.706,-111.899],[37.653,-122.346],[34.953,-89.976],[42.477,-83.261],[32.955,-97.15],[40.11,-111.641],[39.571,-119.715],[34.944,-81.926],[47.667,-117.433],[47.662,-117.235],[36.1,-115.262],[36.19,-94.157],[37.194,-93.292],[41.96,-80.45],[40.164,-111.621],[41.919,-88.311],[37.077,-113.577],[38.636,-90.245],[27.707,-82.765],[29.627,-95.565],[41.08,-73.55],[32.441,-81.775],[35.785,-80.87],[32.215,-98.22],[42.581,-83.03],[36.131,-97.074],[33.526,-84.229],[37.977,-121.309],[41.365,-71.908],[41.23,-73.996],[41.176,-81.434],[41.313,-81.831],[27.194,-80.243],[29.594,-95.636],[36.096,-115.372],[33.005,-80.181],[25.938,-80.125],[37.386,-122.027],[26.155,-80.3],[34.051,-84.069],[25.778,-80.376],[47.242,-122.454],[30.455,-84.253],[26.206,-80.254],[27.995,-82.444],[40.89,-74.011],[37.942,-107.832],[33.493,-117.131],[33.388,-111.932],[33.449,-94.081],[39.192,-84.334],[30.174,-95.513],[30.84,-83.978],[34.191,-118.876],[45.424,-122.784],[41.567,-87.805],[41.664,-83.582],[30.095,-95.619],[39.037,-95.695],[33.831,-118.356],[37.724,-121.444],[44.754,-85.603],[42.582,-83.146],[41.26,-73.208],[45.377,-122.775],[33.844,-84.202],[47.477,-122.273],[36.128,-95.904],[33.235,-87.527],[33.731,-117.81],[32.318,-95.307],[37.603,-122.019],[32.851,-96.794],[34.118,-117.66],[40.09,-75.379],[40.157,-75.102],[39.937,-75.398],[41.639,-93.781],[40.052,-75.668],[38.36,-121.969],[30.85,-83.278],[38.107,-122.266],[40.665,-73.704],[41.48,-87.052],[45.637,-122.596],[27.117,-82.412],[34.267,-119.256],[40.305,-111.754],[36.766,-76.029],[33.19,-117.239],[31.559,-97.188],[41.028,-81.732],[35.963,-78.514],[42.986,-85.744],[34.033,-117.859],[37.902,-122.04],[42.146,-71.255],[42.389,-71.242],[40.204,-75.091],[42.493,-83.027],[41.707,-71.435],[38.905,-77.016],[36.921,-121.771],[32.401,-96.843],[40.948,-74.245],[32.755,-97.77],[26.646,-80.27],[43.007,-88.03],[41.897,-88.226],[34.055,-117.911],[41.552,-93.781],[46.857,-96.904],[39.976,-75.593],[41.767,-72.754],[41.208,-112.054],[34.088,-118.372],[40.602,-112.001],[26.747,-80.132],[33.606,-88.657],[38.556,-121.55],[40.689,-112.012],[40.034,-86.153],[41.452,-81.929],[34.137,-118.822],[26.1,-80.405],[41.123,-73.346],[39.773,-105.103],[42.131,-87.924],[45.065,-93.015],[33.968,-118.019],[37.69,-97.344],[33.907,-98.529],[33.617,-117.258],[37.269,-76.708],[41.24,-77.037],[30.431,-95.483],[39.735,-75.529],[41.207,-73.44],[26.159,-80.139],[36.137,-115.13],[28.503,-81.537],[40.468,-104.921],[36.103,-80.261],[28.542,-81.596],[28.012,-81.701],[28.599,-81.344],[42.524,-83.535],[42.487,-71.154],[41.967,-87.981],[44.906,-92.923],[47.757,-122.148],[38.671,-121.75],[40.873,-111.917],[34.103,-84.509],[42.271,-71.808],[40.095,-83.021],[33.036,-96.517],[42.891,-85.707],[46.593,-120.548],[40.947,-73.867],[33.889,-117.771],[41.099,-80.646],[42.244,-83.621],[-26.14,28.06],[-33.95,18.53],[30.09,31.28],[-25.77,28.18],[-29.85,30.96],[-33.94,25.57],[6.54,3.35],[31.2,29.94],[33.57,-7.61],[-32.99,27.9],[-1.29,36.79],[-29.6,30.38],[-20.24,57.5],[-29.11,26.21],[-33.97,22.47],[-33.72,18.98],[-26.7,27.08],[5.63,-0.17],[-26.7,27.87],[9.06,7.45],[14.72,-17.46],[33.98,-6.84],[-28.74,24.75],[-26.87,26.66],[5.35,-3.99],[-23.9,29.47],[36.74,3.05],[31.63,-8],[-22.6,17.1],[-8.84,13.24],[-34.41,19.22],[32.88,13.19],[-28.22,28.31],[-25.62,27.78],[-33.77,25.42],[6.38,2.41],[-27.98,26.74],[-25.48,30.98],[-23.85,30.15],[-33.31,26.52],[-27.66,27.23],[0.31,32.6],[-33.6,22.19],[-4.62,55.44],[-33.64,19.44],[-26.57,28.84],[-31.59,28.79],[-32.87,27.4],[-17.81,31.05],[-31.91,26.91],[35.77,-5.82],[-15.39,28.3],[30.4,-9.56],[36.81,10.23],[4.82,7],[27.21,31.15],[-28.46,21.25],[-34.01,20.44],[-25.65,27.23],[31.06,31.42],[-22.98,30.53],[-27.46,23.42],[11.99,8.53],[6.33,5.61],[-34.04,23.04],[36.86,7.72],[-25.85,25.63],[29.98,32.53],[-30.71,30.45],[-26.95,29.26],[-34.18,22.13],[30.59,32.28],[-24.64,25.91],[7.39,3.88],[35.71,-0.63],[31.41,31.77],[26.53,31.73],[35.4,0.14],[-4.35,15.29],[-28.56,29.77],[6.48,7.57],[5.88,6.98],[-30.7,26.71],[-22.36,30.03],[33.89,-5.54],[34.27,-6.6],[34.67,-1.9],[36.35,6.61],[6.7,-1.61],[-32.35,22.59],[-26.46,29.48],[4.06,9.73],[-6.81,39.28],[-34.51,20.04],[33.21,-8.51],[0.4,9.46],[32.28,-9.23],[29.33,30.84],[-27.76,30.8],[28.08,30.77],[-26.97,24.72],[-1.95,30.07],[29.08,31.11],[-28.31,31.44],[12.64,-8],[34.02,-5],[4.92,-1.78],[-33.01,17.93],[-27.38,29.88],[-4.03,39.7],[5.54,5.79],[-25.95,32.56],[24.09,32.88],[3.84,11.51],[31.26,32.29],[31.02,30.47],[-11.69,27.48],[10.51,7.43],[-30.66,24.03],[8.47,-13.23],[25.68,32.6],[7.56,5.24],[-29.67,22.73],[-19.8,34.91],[7.13,3.34],[19.6,37.2],[-18.86,47.48],[9,38.79],[-20.45,16.63],[36.74,5.05],[27.26,33.81],[-0.31,36.1],[26.06,32.19],[34.91,-1.31],[28.23,30.73],[-4.79,11.88],[-29.65,17.89],[5.92,5.7],[32.74,12.71],[32.1,20.08],[28.54,30.8],[-0.09,37.73],[6.3,-10.77],[36.91,6.94],[5.12,7.34],[-13.95,33.78],[12.36,-1.51],[0.51,35.28],[4.96,8.33],[36.19,5.39],[2.05,45.31],[32.99,-7.63],[-27.65,25.6],[35.19,-0.6],[-30.72,25.08],[-0.08,34.78],[-28.56,16.44],[6.15,1.21],[31.9,-4.42],[32.16,13.01],[9.92,8.89],[-20.16,28.6],[14.03,35.38],[-3.36,29.36],[9.6,-13.61],[-0.66,34.76],[7.77,4.54],[23.72,-15.95],[34.99,-5.89],[11.58,43.14],[35.4,8.08],[5.22,-3.73],[4.01,9.2],[-15.11,39.3],[6.82,3.92],[33.8,2.91],[8.49,4.58],[34.41,8.79],[-22.95,14.5],[13.44,-16.55],[31.2,16.57],[35.8,10.58],[-26.28,31.09],[-21.17,27.48],[-4.28,15.27],[-6.19,39.2],[31.61,-2.19],[-12.79,28.21],[34.79,10.75],[-29.3,27.5],[26.16,32.72],[-5.05,32.81],[-20.01,23.39],[14.81,-16.92],[-15.19,12.14],[24.43,32.95],[-15.73,35.06],[7.49,4.56],[29,-10.05],[11.13,7.68],[35.68,139.68],[1.34,103.83],[22.34,114.14],[34.73,135.47],[32.06,34.83],[14.6,121.01],[35.13,136.96],[25.22,55.3],[37.48,126.97],[25,121.41],[3.09,101.64],[24.74,46.66],[29.27,48.03],[33.55,130.43],[19.14,72.9],[12.95,77.63],[31.61,74.09],[-6.36,106.99],[25.28,51.49],[29.19,77.36],[43.07,141.37],[13.77,100.56],[17.45,78.43],[21.58,39.17],[32.81,35.04],[12.97,80.1],[24.48,54.4],[24.86,67.06],[24.15,120.65],[33.64,73.07],[22.38,87.75],[22.79,120.3],[38.27,140.89],[34.4,132.45],[31.79,35.2],[26.39,50.11],[28.45,77.03],[33.82,130.82],[34.74,137.78],[18.54,73.86],[36.34,139.08],[34.63,133.87],[33.88,35.55],[31.18,121.13],[34.81,136.55],[36.48,139.87],[22.89,72.72],[26.26,127.74],[32.81,130.74],[31.31,75.72],[36.56,136.63],[26.17,50.54],[35.17,129.06],[35.03,135.94],[34.99,138.42],[37.89,139.05],[26.94,80.53],[1.52,103.76],[35.65,138.57],[8.91,76.81],[-7.46,112.67],[33.83,132.77],[36.57,138.21],[31.96,35.9],[10.16,76.29],[31.57,130.54],[34.09,134.52],[39.9,116.39],[34.23,135.21],[30.16,71.85],[36.38,140.48],[10.31,123.91],[10.79,106.69],[35.86,128.6],[34.32,134.05],[36.7,137.23],[33.23,131.64],[5.38,100.3],[-7.4,110.53],[11.04,77.06],[26.92,75.78],[31.92,131.42],[43.25,76.93],[32.52,74.57],[28.5,77.41],[32.77,129.86],[21.23,72.87],[6.9,80.01],[39.71,141.14],[21.42,39.86],[36.36,127.38],[34.05,71.64],[10.43,78.62],[36.08,136.22],[31.25,34.79],[25.03,85.58],[43.77,142.38],[23.6,58.4],[32.89,73.76],[37.4,140.36],[38.26,140.34],[36.21,137.97],[7.09,125.6],[23.56,120.44],[5.36,100.46],[24.17,55.74],[33.56,133.54],[39.72,140.11],[11.38,75.8],[37.77,140.47],[29.33,47.69],[32.69,35.3],[30.27,104.85],[16.45,80.59],[40.82,140.75],[37.01,140.88],[25.9,83.17],[22.73,75.87],[21.14,79.09],[24.48,39.61],[55.74,37.59],[42.92,143.19],[41.8,140.75],[23.92,90.44],[20.99,105.92],[5.95,116.1],[34,130.95],[35.16,126.88],[33.33,44.38],[21.23,81.55],[30.55,114.27],[37.44,138.84],[2.25,102.27],[16.81,96.16],[11.57,78.02],[17.72,83.25],[33.17,129.74],[10.67,122.97],[4.61,101.1],[26.16,91.76],[-8.71,115.2],[11.52,104.86],[25.8,55.98],[25.38,49.58],[2.71,101.93],[25.39,68.37],[23.23,77.44],[34.24,132.59],[35.46,133.07],[32.03,118.79],[1.54,110.35],[16.42,120.59],[40.6,140.47],[43,144.39],[40.51,141.51],[12.32,76.65],[35.5,134.22],[36.64,127.45],[10.74,122.56],[18.79,98.99],[6.12,125.16],[51.17,71.43],[26.36,43.95],[8.49,124.6],[3.59,98.66],[42.91,74.62],[16.96,81.95],[38.3,117.52],[43.81,143.89],[22,96.11],[23.36,85.3],[43.19,141],[28.39,36.56],[35.55,129.33],[47.89,106.91],[13.73,121.06],[40.39,49.86],[4.41,114],[35.83,127.12],[42.64,141.58],[29.86,121.57],[21.29,40.42],[35.21,128.65],[19.99,73.8],[32.13,72.71],[27.17,78.04],[5.64,100.5],[25.11,56.33],[42.36,141.03],[25.31,81.77],[30.18,67],[23.71,92.72],[26.67,88.43],[6.1,100.37],[4.91,114.92],[34.7,113.68],[41.33,69.27],[28.37,70.23],[26.28,73.02],[55.8,49.14],[51.5,-0.19],[48.85,2.33],[53.5,-2.29],[51.36,6.86],[52.5,13.39],[55.7,12.48],[52.51,-1.96],[51,4.33],[55.84,-4.23],[51.97,4.44],[53.58,10.01],[50.09,8.57],[53.43,-2.82],[48.14,11.56],[45.57,9.22],[51,7],[40.43,-3.71],[54.96,-1.55],[53.41,-1.4],[53.33,-6.27],[52.35,4.88],[48.2,16.36],[50.88,-1.21],[48.8,9.22],[53,-1.21],[59.33,18.03],[41.44,2.14],[51.48,-2.57],[53.74,-1.79],[51.55,-3.27],[51.5,7.5],[53.77,-1.56],[59.91,10.76],[60.23,24.92],[50.83,-0.24],[55.93,-3.19],[47.37,8.55],[49.44,8.54],[45.75,4.85],[41.88,12.51],[54.59,-5.94],[50.75,-1.88],[52.08,5.11],[52.64,-1.14],[49.45,11.07],[52.38,9.74],[50.74,7.13],[40.86,14.37],[51.05,13.74],[56.17,10.2],[53.08,8.8],[44.46,26.09],[52.23,21],[38.77,-9.22],[52.43,-1.51],[54.55,-1.23],[51.34,12.37],[43.66,7.13],[41.03,29],[43.34,5.4],[53.03,-2.19],[44.84,-0.59],[43.6,1.43],[51.64,-3.92],[50.66,3.1],[50.08,14.44],[49.29,6.97],[52.42,4.65],[47.5,19.08],[38,23.75],[57.69,11.98],[51.74,-1.25],[50.39,-4.13],[51.44,5.47],[39.48,-0.4],[49,8.41],[41.24,-8.53],[52.63,1.28],[53.82,-3.02],[57.16,-2.13],[53.76,-0.37],[51.88,-0.44],[45.07,7.65],[48.36,10.89],[47.22,-1.56],[55.39,10.38],[46.2,6.14],[57.03,9.92],[47.06,15.45],[51.95,7.63],[47.53,7.61],[54.69,25.28],[61.48,23.75],[51.9,-8.46],[48.25,14.23],[54.33,10.13],[37.37,-5.98],[53.97,-1.09],[50.72,-3.52],[56.48,-2.96],[43.62,3.88],[52.02,8.54],[48.58,7.74],[51.31,9.48],[60.37,5.32],[50.39,7.53],[43.82,11.16],[50.63,5.62],[51.38,-2.36],[53.21,6.57],[49.01,12.11],[52.27,10.53],[48.01,7.84],[43.29,-2.95],[52.06,1.17],[63.41,10.41],[64.11,-21.88],[46.95,7.45],[49.21,6.14],[45.2,5.72],[52.27,8.04],[53.87,10.7],[46.53,6.61],[55.59,13.01],[47.6,7.64],[44.5,11.35],[50.06,19.98],[53.19,-2.89],[42.67,23.33],[52.13,11.63],[50.83,12.89],[45.8,15.98],[49.79,9.94],[53.15,8.2],[43.13,5.93],[48.76,11.44],[60.45,22.28],[48.4,9.98],[54.1,12.1],[47.27,11.41],[56.95,24.11],[59.43,24.74],[50.83,3.23],[48.16,17.12],[50.98,11.03],[49.43,1.09],[35.88,14.49],[65.02,25.49],[47.8,13.04],[48.11,-1.67],[49.62,6.12],[47.05,8.3],[41.65,-0.88],[46.08,14.52],[54.89,-2.94],[52.67,-8.6],[46.21,6.15],[55.49,8.43],[47.38,0.7],[44.41,8.93],[54.92,23.93],[48.69,6.18],[55.01,-7.31],[55.47,-4.62],[54.4,18.56],[51.54,9.93],[51.1,17.02],[45.44,10.95],[43.48,-1.52],[49.21,16.61],[45.79,3.09],[39.92,32.78],[39.58,2.65],[47.9,1.91],[36.72,-4.44],[45.91,6.12],[58.96,5.71],[53.29,-9.06],[52.41,16.91],[47.32,5.05],[59.85,17.65],[38.13,13.35],[38.38,-0.47],[50.42,4.47],[47.47,-0.55],[50.59,8.67],[37.18,-3.61],[55.64,12.1],[38,-1.15],[49.2,-0.35],[50.29,19.03],[43.34,-8.39],[50.92,11.59],[51.19,3.21],[56.41,-3.46],[53.21,5.81],[43.3,-1.97],[28.46,-16.28],[42.81,-1.64],[47.76,7.33],[-33.85,151.09],[-37.84,145.04],[-27.47,153.01],[-31.95,115.86],[-34.92,138.59],[-36.9,174.79],[-28.02,153.4],[-35.31,149.09],[-32.94,151.69],[-26.72,153.1],[-43.53,172.62],[-36.77,174.74],[-34.4,150.88],[-38.15,144.34],[-41.29,174.78],[-19.3,146.77],[-42.87,147.31],[-27.57,151.94],[-37.56,143.84],[-16.93,145.74],[-37.78,175.27],[-41.44,147.14],[-12.41,130.87],[-36.77,144.28],[-21.14,149.17],[-28.19,153.53],[-27.09,152.95],[-45.89,170.49],[-23.37,150.52],[-35.13,147.36],[-31.45,152.9],[-37.7,176.15],[-40.36,175.61],[-33.28,149.1],[-35.37,149.22],[-36.06,146.93],[-24.87,152.35],[-37.68,144.57],[-39.07,174.07],[-32.25,148.62],[-34.88,150.6],[-38.37,142.48],[-31.1,150.93],[-46.4,168.37],[-30.3,153.12],[-36.38,145.42],[-33.35,115.64],[-35.71,174.32],[-38.18,146.53],[-23.88,151.24],[-41.3,173.25],[-38.14,176.25],[-37.83,140.77],[-41.13,175.06],[-34.19,142.15],[-30.76,121.46],[-37.57,144.72],[-23.71,133.88],[-28.82,153.3],[-42.99,147.3],[-32.54,115.74],[-39.93,175.04],[-38.66,178.01],[-33.7,150.34],[-34.74,149.71],[-28.77,114.61],[-32.71,151.54],[-20.72,139.49],[-39.63,176.83],[-31.96,141.45],[-23.53,148.16],[-30.51,151.66],[-41.52,173.95],[-33.04,137.54],[-35.01,117.88],[-28.86,153.57],[-41.19,146.35],[-36.36,146.31],[-41.07,145.88],[-38.69,176.09],[-36.71,142.21],[-36.13,144.74],[-32.61,149.58],[-34.72,135.88],[-25.3,152.87],[-33.85,121.9],[-33.2,138.01],[-44.39,171.24],[-38.09,147.08],[-25.54,152.7],[-35.33,143.56],[-40.95,175.66],[-34.27,146.05],[-28.64,153.59],[-37.82,147.62],[-21.99,148.06],[-28.22,152.02],[-35.13,139.26],[-31.91,152.46],[-27.07,153.15],[-33.41,149.55],[-33.14,148.18],[-32.23,115.81],[-26.18,152.67],[-34.31,148.31],[-35.55,138.63],[-32.26,150.9],[-33.49,150.15],[-20.75,116.86],[-17.96,122.22],[-30.98,150.25],[-37.73,142.01],[-38.35,141.6],[-29.48,149.83],[-32.2,152.52],[-40.62,175.27],[-43.89,171.75],[-26.56,148.8],[-27.2,151.26],[-33.6,150.75],[-38.34,143.6],[-26.53,151.84],[-35.37,150.46],[-37.97,176.98],[-19.58,147.4],[-32.56,151.19],[-29.78,151.11],[-30.33,149.79],[-36.23,149.12],[-20.08,146.25],[-37.28,142.95],[-33.84,148.68],[-22.68,117.78],[-35.29,148.23],[-28.54,150.3],[-31.07,152.83],[-33.46,151.29],[-33.38,148.03],[-17.25,145.48],[-37.05,143.75],[-14.46,132.29],[-38.6,145.61],[-20.42,148.6],[-43.38,172.66],[-37.02,145.13],[-32.49,137.78],[-35.53,144.96],[-24.42,150.52],[-33.66,115.36],[-13.83,-171.77],[-15.76,128.75],[-18.66,146.16],[-17.52,146.05],[-31.67,116.68],[-33.83,138.6],[-34.29,140.62],[-34.23,116.13],[-37.04,142.77],[-34.54,146.38],[-21.93,114.12],[-32.93,117.16],[-29.45,153.37],[-23.45,144.27],[-40.84,145.11],[-35.93,145.65],[-26.41,146.26],[-31.47,118.29],[-23.12,150.74],[-29.72,152.93],[-20.71,140.49],[-36.87,149.89],[-33.7,117.57],[-42.72,170.97],[-33.94,137.62],[-36.32,140.76],[-32.12,133.66],[-16.49,145.47],[-37.39,140.81],[-34.61,117.65],[-23.55,145.31],[-20.33,118.59],[-41.17,147.53],[-19.64,134.19],[-22.4,143.03],[-33.31,117.33],[-17.77,177.43],[-25.25,131],[-35.68,150.16],[-18.12,178.46],[-31.36,115.92],[-33.68,136.93],[-42.07,145.59],[-29.21,116.01],[-28.88,121.35],[-32.99,138.85],[-35.06,142.35],[-42.31,147.34],[-18.31,143.54],[-20.77,117.16],[-17.61,177.43],[-33.44,-70.62],[-23.57,-46.64],[4.67,-74.09],[-34.63,-58.45],[-12.08,-77.02],[6.23,-75.59],[-22.91,-43.3],[-23.61,-70.4],[-19.91,-43.98],[3.45,-76.52],[-15.8,-47.94],[-25.46,-49.26],[-29.96,-51.16],[-33.01,-71.55],[-34.87,-56.15],[10.99,-74.81],[-36.84,-73.06],[-22.91,-47.08],[7.09,-73.1],[10.48,-66.87],[-16.71,-49.3],[-12.97,-38.46],[-8.07,-34.91],[-31.36,-64.18],[-3.77,-38.53],[-20.29,-40.29],[-32.94,-60.64],[4.81,-75.71],[10.4,-75.51],[-23.97,-46.34],[-22.88,-43.08],[7.9,-72.51],[-32.87,-68.81],[-26.81,-65.2],[-0.17,-78.45],[-21.18,-47.8],[-23.23,-45.9],[-29.91,-71.22],[-26.95,-48.66],[-27.59,-48.53],[-23.5,-47.46],[-39.79,-73.22],[-20.28,-70.08],[-15.6,-56.08],[-20.45,-54.6],[-23.31,-51.16],[-2.16,-79.9],[-22.76,-47.33],[-23.19,-46.88],[-5.83,-35.23],[-40.6,-73.16],[-18.92,-48.27],[-26.3,-48.84],[-7.12,-34.85],[-1.42,-48.46],[-23.42,-51.93],[-36.62,-72.09],[-37.99,-57.57],[-8.12,-79],[-9.61,-35.73],[-38.7,-62.23],[4.44,-75.21],[-3.08,-60],[-23.15,-47.25],[2.94,-75.29],[-35.01,-71.23],[-25.29,-57.57],[5.06,-75.5],[-29.17,-51.18],[-26.9,-49.09],[-2.51,-44.25],[-20.81,-49.38],[11.23,-74.19],[-10.94,-37.07],[-21.77,-43.36],[-16.4,-71.53],[-25.52,-54.57],[8.75,-75.88],[4.55,-75.67],[-37.51,-72.34],[-33.58,-71.61],[1.21,-77.29],[4.15,-73.63],[-22.72,-47.65],[-30.62,-71.21],[9.3,-75.38],[-27.4,-70.3],[-22.99,-45.54],[-24.97,-53.47],[10.47,-73.26],[-31.6,-60.71],[-18.51,-70.29],[-45.87,-67.51],[-5.08,-42.78],[-22,-47.9],[-38.73,-72.6],[-26.49,-49.08],[-27.09,-52.64],[-22.33,-49.05],[-25.1,-50.16],[2.45,-76.6],[-22.48,-43.17],[-32.88,-71.23],[-22.57,-47.41],[-28.7,-49.38],[-21.76,-41.32],[-22.51,-44.1],[-19.49,-42.57],[-19.75,-47.94],[-31.52,-68.51],[-28.27,-52.41],[-19.98,-43.89],[-34.9,-54.97],[-27.41,-55.9],[5.54,-73.34],[-36.99,-73.15],[-20.54,-47.4],[-8.77,-63.89],[11.53,-72.91],[7.05,-73.85],[-22.21,-49.94],[-29.69,-53.8],[1.62,-75.6],[4.08,-76.2],[-21.21,-50.45],[-13.51,-72],[-16.73,-43.87],[-37.31,-59.11],[-22.39,-41.8],[-5.21,-80.62],[-16.51,-68.12],[-16.33,-48.95],[-7.21,-35.88],[-31.75,-52.34],[-22.41,-47.57],[-54.8,-68.27],[-17.8,-50.92],[-29.18,-51.5],[-12.24,-38.94],[-21.8,-46.56],[-2.9,-78.99],[-35.43,-71.65],[4.75,-75.93],[-33.09,-64.3],[-9.41,-40.51],[5.83,-73.03],[-27.8,-50.32],[-18.86,-41.95],[5.84,-55.17],[-34.59,-68.3],[-22.11,-51.41],[-34.17,-70.74],[-22.22,-54.8],[4.3,-74.79],[-22.88,-48.45],[-27.51,-59],[-22.87,-42.12],[-27.79,-64.27],[10.22,-68],[5.71,-72.92],[-36.59,-64.26],[-20.14,-44.88],[-37.8,-72.69],[-5.51,-47.5],[-31.39,-57.96],[-21.21,-43.78],[5.68,-76.66],[-22.95,-46.54],[8.24,-73.35],[-22.77,-45.18],[-7.22,-39.34],[-19.46,-44.24],[-8.27,-35.97],[-28.48,-49],[2.82,-60.69],[0.02,-51.07],[-18.64,-48.19],[-27.1,-48.91],[-41.47,-72.95],[-14.87,-40.85],[-14.81,-39.27],[-17.38,-66.16],[-22.28,-42.54],[-32.32,-58.09],[-25.39,-51.48],[9.21,-66.01],[-1.28,-78.6],[-29.71,-52.43],[10.12,-66.79],[-45.4,-72.67],[5.19,-74.73],[-21.14,-48.98],[-34.2,-58.95],[-22.28,-48.57],[-33.91,-60.58],[-20.68,-43.81],[-6.77,-79.84],[-33.3,-66.32],[3.88,-77.03],[-12.15,-45.01],[40.79,-73.87],[33.96,-118.07],[41.89,-87.87],[26.1,-80.23],[39.03,-76.99],[37.6,-122.19],[42.31,-71.2],[39.98,-75.24],[32.87,-96.95],[43.68,-79.48],[33.89,-84.35],[29.81,-95.46],[47.55,-122.28],[33.48,-111.98],[32.92,-117.15],[39.73,-104.98],[45.39,-119.29],[42.49,-83.2],[44.95,-93.27],[27.99,-82.57],[41.31,-81.62],[40.78,-111.93],[30.35,-97.76],[36.13,-115.15],[49.24,-123.01],[45.55,-73.67],[28.55,-81.37],[38.64,-90.4],[38.62,-121.35],[35.24,-80.79],[40.46,-80],[19.44,-99.15],[39.3,-83.18],[39.01,-94.61],[39.18,-84.47],[36.1,-86.76],[39.85,-86.13],[29.52,-98.51],[35.81,-78.69],[51.02,-114.09],[37.58,-77.9],[43.05,-88.02],[45.4,-75.71],[36.91,-76.54],[30.52,-81.37],[42.94,-78.82],[21.35,-157.89],[33.46,-86.78],[38.23,-85.67],[29.96,-90.12],[27.32,-82.5],[53.54,-113.52],[35.1,-89.88],[35.52,-97.53],[43.28,-79.73],[32.26,-110.93],[35.14,-106.62],[40.34,-111.75],[33.78,-80.32],[41.23,-96.05],[43.62,-116.3],[40.27,-81.6],[38.87,-104.78],[32.62,-117.03],[34.81,-82.47],[26.22,-81.76],[35.2,-83.86],[36.07,-95.91],[46.81,-71.28],[33.75,-116.36],[18.35,-66.09],[42.94,-85.67],[40.64,-75.4],[31.81,-106.42],[30.38,-91.05],[49.88,-97.15],[37.43,-96.86],[35.96,-84.03],[39.73,-84.16],[36.81,-119.76],[35.96,-78.95],[41.77,-72.64],[36.85,-121.94],[26.23,-98.2],[43.07,-89.41],[43.43,-80.45],[47.67,-117.35],[39.52,-119.8],[41.62,-93.68],[41.6,-80.97],[35.36,-119.07],[34.43,-119.74],[35.59,-86.62],[36.06,-79.88],[43.07,-76.14],[38.01,-84.5],[40.51,-105.07],[20.67,-103.38],[25.71,-100.34],[48.45,-123.39],[37.69,-97.32],[41.65,-83.62],[42.25,-83.71],[36.1,-80.28],[28.12,-80.68],[34.51,-87.1],[33.98,-90.13],[42.99,-81.26],[35.57,-82.57],[37.09,-76.44],[35.05,-85.23],[34.21,-77.88],[61.16,-149.85],[44.06,-123.08],[38.42,-122.71],[42.27,-71.78],[34.77,-92.33],[44.66,-63.59],[32.97,-89.92],[34.14,-81.31],[30.48,-84.26],[27.3,-80.34],[41.1,-85.14],[44.06,-121.3],[40.01,-105.26],[40.79,-96.67],[26.54,-81.83],[29.19,-81.05],[37.66,-120.99],[52.13,-106.64],[30.48,-87.25],[41.62,-73.89],[44.94,-123.03],[47.02,-122.85],[42.72,-84.52],[41.11,-80.71],[37.27,-79.98],[37.11,-113.58],[44.25,-88.4],[29.65,-82.39],[39.92,-87.91],[30.67,-88.15],[26.62,-81.98],[33.55,-101.9],[39.96,-76.71],[40.29,-76.76],[42.28,-82.98],[32.01,-102.12],[27.54,-99.48],[41.52,-90.53],[38.28,-77.5],[38.11,-122.22],[42.31,-89.03],[49.88,-119.44],[41.7,-86.21],[44.49,-88.03],[46.86,-96.81],[32.47,-93.72],[33.19,-97.1],[50.46,-104.61],[44.04,-75.26],[32.03,-81.11],[48.76,-122.47],[36.57,-87.35],[35.18,-101.88],[42.01,-91.65],[47.59,-122.65],[43.52,-96.73],[43.6,-116.6],[19.04,-98.23],[42.26,-85.6],[43.01,-83.69],[35.86,-86.4],[27.72,-97.39],[42.8,-73.93],[47.56,-52.75],[35.66,-105.97],[32.35,-86.23],[38.04,-78.49],[37.99,-87.5],[33.94,-83.39],[31.52,-97.17],[45.79,-108.55],[44.38,-79.68],[45.39,-71.93],[30.63,-96.33],[36.33,-119.32],[39.08,-108.54],[29.17,-82.1],[40.1,-88.25],[42.34,-122.87],[41.42,-75.66],[44.24,-76.52],[38.34,-106.79],[34.96,-81.95],[40.72,-89.6],[33.2,-87.54],[43.49,-112],[32.61,-85.45],[27.61,-80.42],[9.94,-84.11],[9.01,-79.5],[14.61,-90.53],[18.49,-69.93],[32.28,-64.79],[15.5,-88],[14.1,-87.21],[10.64,-61.4],[25.04,-77.34],[18,-76.8],[13.12,-59.59],[13.7,-89.23],[10.3,-61.46],[19.46,-70.69],[14.89,-91.53],[9.36,-79.9],[18.48,-69.31],[12.1,-86.29],[9.87,-83.92],[8.41,-82.44],[17.98,-76.93],[18.54,-72.31],[17.12,-61.84],[18.48,-77.91],[7.94,-80.44],[12.05,-61.75],[14.29,-90.81],[26.52,-78.67],[14.28,-89.9],[15.71,-88.61],[8.1,-80.96],[17.52,-88.2],[13.5,-88.18],[19.23,-70.52],[13.31,-87.18],[13.99,-89.51],[15.78,-86.79],[10.65,-85.44],[17.96,-77.24],[18.43,-68.98],[15.31,-61.38],[7.79,-80.28],[19.29,-70.27],[16.93,-89.89],[9.99,-83.04],[14.44,-87.64],[15.33,-91.47],[17.29,-62.7],[14.78,-88.79],[10.34,-84.45],[17.24,-88.77],[10.44,-85.09],[9.97,-84.78],[14.65,-86.22],[13.07,-86.36],[14.01,-60.98],[15.48,-90.37],[14.55,-91.49],[21.45,-71.12],[18.2,-71.08],[8.52,-80.37],[8.98,-83.51],[13.73,-89.73],[13.14,-61.22],[12.41,-86.88],[19.86,-71.63],[12.63,-87.11],[18.08,-88.57],[16.78,-90.1],[13.92,-90.85],[9.3,-82.4],[13.54,-87.49],[11.44,-85.84],[11.94,-85.95],[23.11,-82.29],[12.1,-85.37],[11.08,-85.63],[18.49,-71.42],[19.27,-81.31]]");
  var AA = `uniform sampler2D dotTexture;
uniform vec3 color;
uniform float bloomIntensity;

varying vec2 vUv;

void main() {
  gl_FragColor = texture2D(dotTexture, vUv);
  gl_FragColor.rgb = color * bloomIntensity;
}`, vA = `attribute vec3 cityPosition;

uniform float size;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 particlePosition = (modelMatrix * vec4(cityPosition, 1.0)).xyz;

  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  
  vec3 orientedPosition = position.x * right * size +
    position.y * up * size;

  gl_Position = projectionMatrix * viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}`;
  const CA = 5, L1 = 10, D1 = 0.3, SA = 1.65, RA = "#FF8600", MA = 5;
  At.preload(z0);
  function EA({ globePosition: r }) {
    const e = At(z0), { cityDotsGeometry: t, numInstances: n } = u.useMemo(() => {
      const i = [];
      yA.forEach((p) => {
        const f = Ha(p[0], p[1], 1);
        i.push(f);
      });
      const s = 3, c = new Float32Array(i.length * s);
      for (let p = 0; p < i.length; p++) c[p * s + 0] = i[p][0], c[p * s + 1] = i[p][1], c[p * s + 2] = i[p][2];
      const l = new Cn(c, s), a = new vo(1, 1);
      return a.setAttribute("cityPosition", new rt(l, 3, 0)), {
        cityDotsGeometry: a,
        numInstances: i.length
      };
    }, []), o = u.useMemo(() => new sr({
      uniforms: {
        size: {
          value: L1 / 1e4
        },
        dotTexture: {
          value: e
        },
        color: {
          value: new Ye(RA)
        },
        bloomIntensity: {
          value: MA
        }
      },
      vertexShader: vA,
      fragmentShader: AA,
      transparent: true,
      depthWrite: false
    }), [
      e
    ]);
    return it(({ camera: i }) => {
      const s = i.position.distanceTo(r), c = wo((s - D1) / (SA - D1), 0, 1), l = R0(CA, L1, c);
      o.uniforms.size.value = l / 1e4;
    }), R.jsx("instancedMesh", {
      args: [
        t,
        o,
        n
      ],
      scale: 1.002,
      renderOrder: 0
    });
  }
  const Xo = 20, co = 16;
  function BA(r, e, t) {
    const n = e * co;
    r[n + 0] = t.startTime, r[n + 1] = t.scale, r[n + 2] = t.speed, r[n + 3] = t.movementDirection.x, r[n + 4] = t.movementDirection.y, r[n + 5] = t.movementDirection.z, r[n + 6] = t.normalizedShrinkStartTime, r[n + 7] = t.color.r, r[n + 8] = t.color.g, r[n + 9] = t.color.b, r[n + 10] = t.shapeIndex, r[n + 11] = t.rotationDirection, r[n + 12] = t.rotationSpeed, r[n + 13] = t.timeOffset, r[n + 14] = t.burstRotationX, r[n + 15] = t.burstRotationY;
  }
  function IA(r, e, t, n, o, i, s, c, l, a, p, f, d, _, h) {
    const b = r * Xo, g = new Float32Array(b * co), y = [
      new Ye(a),
      new Ye(p),
      new Ye(f),
      new Ye(d),
      new Ye(_),
      new Ye(h)
    ], A = new Ne(), C = new F(0, 0, 1), S = new F(), B = new Ne(), T = new F(), E = J2(o);
    for (let M = 0; M < b; M++) {
      const x = e / 1e3 + Math.random() * (t / 1e3), P = (0.1 + Math.random() ** 1.5 * 0.1) * n, D = Math.random() * 2 * Math.PI, H = Math.acos(1 - Math.random() * (1 - Math.cos(E)));
      S.set(Math.sin(H) * Math.cos(D), Math.sin(H) * Math.sin(D), Math.cos(H)), S.applyQuaternion(A), B.setFromUnitVectors(C, S), T.copy(C).applyQuaternion(B).normalize();
      const k = i + Math.random() * s, J = y[Math.floor(Math.random() * 6)], W = Math.floor(Math.random() * 4), K = Math.random() < 0.5 ? -1 : 1, Q = c + Math.random() * l, Z = Math.random() * 1e3;
      BA(g, M, {
        startTime: -100,
        scale: x,
        speed: P,
        movementDirection: T,
        normalizedShrinkStartTime: k,
        color: J,
        shapeIndex: W,
        rotationDirection: K,
        rotationSpeed: Q,
        timeOffset: Z,
        burstRotationX: 0,
        burstRotationY: 0
      });
    }
    return g;
  }
  var TA = `uniform sampler2D shapesTextureAtlas;

varying vec2 vUv;
varying float vLifetime;
varying vec4 vColorAndShapeIndex;
uniform float bloom;

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  vec3 color = vColorAndShapeIndex.rgb;
  float shapeIndex = vColorAndShapeIndex.a;

  
  
  float column = mod(shapeIndex, 2.0);
  
  float row = floor(shapeIndex / 2.0);

  
  float shapeU = (1.0 - vUv.x) * 0.5 + column * 0.5;
  float shapeV = vUv.y * 0.5 + row * 0.5;

  vec4 shape = texture2D(shapesTextureAtlas, vec2(shapeU, shapeV));

  gl_FragColor = vec4(shape.rgb * color * 2.0 * mix(1.0, bloom, 1.0 - vLifetime), shape.a);
}`, xA = `uniform float time;
uniform float duration;
uniform float linearSpeedScalingFactor;
uniform float linearRotationSpeed;

attribute vec3 startTimeAndAndScaleAndSpeed;
attribute vec3 movementDirection;
attribute float normalizedShrinkStartTime;
attribute vec4 colorAndShapeIndex;
attribute vec3 rotationDirectionAndSpeedAndTimeOffset;
attribute vec2 burstRotation;

varying vec2 vUv;
varying float vLifetime;
varying vec4 vColorAndShapeIndex;

#define PI 3.14159265359

float easeOutCubic(float x) {
  return 1.0 - pow(1.0 - x, 3.0);
}

float easeOutQuint(float x) {
  return 1.0 - pow(1.0 - x, 5.0);
}

mat3 computeBurstRotationMatrix(vec2 rotation) {
  float rotX = rotation.x;
  float rotY = rotation.y;

  float cx = cos(rotX);
  float sx = sin(rotX);
  float cy = cos(rotY);
  float sy = sin(rotY);

  
  
  
  mat3 rotMatrix = mat3(cy, 0.0, sy, 
  sx * sy, cx, -sx * cy, 
  -cx * sy, sx, cx * cy 
  );

  return rotMatrix;
}

void main() {
  float startTime = startTimeAndAndScaleAndSpeed.x;

  vUv = uv;
  vLifetime = clamp((time - startTime) / duration, 0.0, 1.0);
  vColorAndShapeIndex = colorAndShapeIndex;

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  float scale = startTimeAndAndScaleAndSpeed.y;
  float speed = startTimeAndAndScaleAndSpeed.z;
  float rotationDirection = rotationDirectionAndSpeedAndTimeOffset.x;
  float rotationSpeed = rotationDirectionAndSpeedAndTimeOffset.y;
  float timeOffset = rotationDirectionAndSpeedAndTimeOffset.z;
  float timeSinceStart = time - startTime;

  mat3 burstRotationMatrix = computeBurstRotationMatrix(burstRotation);

  
  vec3 particlePosition = vec3(0.0, 0.0, 1.0);
  
  particlePosition += movementDirection * easeOutQuint(vLifetime) * speed + movementDirection * timeSinceStart * speed * linearSpeedScalingFactor;
  
  particlePosition = burstRotationMatrix * particlePosition;
  particlePosition = vec3(modelMatrix * vec4(particlePosition, 1.0));

  
  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  
  
  
  float rotationAngle = rotationDirection * (easeOutQuint(vLifetime) * rotationSpeed + timeOffset) + rotationDirection * timeSinceStart * linearRotationSpeed;
  float cosAngle = cos(rotationAngle);
  float sinAngle = sin(rotationAngle);
  vec3 rotatedUp = cosAngle * up + sinAngle * cross(toCameraVector, up);
  vec3 rotatedRight = cosAngle * right + sinAngle * cross(toCameraVector, right);

  
  float growAndShrinkScalingFactor = 1.0;
  if(vLifetime <= 0.1) {
    growAndShrinkScalingFactor = (vLifetime / 0.1);
  } else if(vLifetime >= normalizedShrinkStartTime) {
    growAndShrinkScalingFactor = 1.0 - (clamp(((vLifetime - normalizedShrinkStartTime) / 0.1), 0.0, 1.0));
  }

  float finalScale = scale * growAndShrinkScalingFactor * 0.1;
  vec3 orientedPosition = position.x * rotatedRight * finalScale +
    position.y * rotatedUp * finalScale;
  vec3 worldPos = particlePosition + orientedPosition;

  gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
}`;
  const No = 100, G1 = 2.5, O1 = 1.25, PA = 30, FA = 20, LA = 26, DA = 2, GA = 0.05, OA = 0.5, HA = 0.4, kA = 0, jA = 5, UA = 1.5, NA = 3.25, zA = "#55fdb5", WA = "#56d7ea", JA = "#d861e2", VA = "#ed70be", KA = "#fe8391", QA = "#af50c0";
  At.preload(W0);
  function XA() {
    const r = Ue((l) => l.clock), e = At(W0), t = u.useRef(0), n = u.useRef(null), o = u.useMemo(() => {
      const l = new Cn(IA(No, FA, LA, DA, PA, OA, HA, kA, jA, zA, WA, JA, VA, KA, QA), co), a = new vo(1, 1);
      return a.setAttribute("startTimeAndAndScaleAndSpeed", new rt(l, 3, 0)), a.setAttribute("movementDirection", new rt(l, 3, 3)), a.setAttribute("normalizedShrinkStartTime", new rt(l, 1, 6)), a.setAttribute("colorAndShapeIndex", new rt(l, 4, 7)), a.setAttribute("rotationDirectionAndSpeedAndTimeOffset", new rt(l, 3, 11)), a.setAttribute("burstRotation", new rt(l, 2, 14)), a;
    }, []), i = u.useMemo(() => new sr({
      uniforms: {
        time: {
          value: 0
        },
        duration: {
          value: G1
        },
        linearSpeedScalingFactor: {
          value: GA
        },
        linearRotationSpeed: {
          value: UA
        },
        shapesTextureAtlas: {
          value: e
        },
        bloom: {
          value: NA
        }
      },
      vertexShader: xA,
      fragmentShader: TA,
      transparent: true,
      depthWrite: false,
      side: Bn
    }), [
      e
    ]);
    it(({ clock: l }) => {
      i.uniforms.time.value = l.elapsedTime;
    });
    const s = u.useCallback((l, a) => {
      const p = o.attributes.startTimeAndAndScaleAndSpeed.data, f = p.array;
      let d = -1;
      const _ = r.elapsedTime;
      for (let y = 0; y < Xo; y++) {
        const A = (t.current + y) % Xo, C = A * No * co;
        if (f[C + 0] + G1 + O1 < _) {
          d = A;
          break;
        }
      }
      if (d === -1) return;
      const h = d * No * co, b = l, g = -a - 90;
      for (let y = 0; y < No; y++) {
        const A = h + y * co;
        f[A + 0] = _ + Math.random() * O1, f[A + 14] = b * Math.PI / 180, f[A + 15] = g * Math.PI / 180;
      }
      p.needsUpdate = true, t.current = (d + 1) % Xo;
    }, [
      o,
      r
    ]);
    n.current = s;
    const c = u.useCallback((l, a) => {
      l === 0 && a === 0 || s(l, a);
    }, [
      s
    ]);
    return u.useEffect(() => se.on("merchantFirstSale", (l) => {
      c(l.storeLat, l.storeLon);
    }), [
      c
    ]), R.jsx("instancedMesh", {
      args: [
        o,
        i,
        No * Xo
      ],
      frustumCulled: false,
      renderOrder: 4
    });
  }
  var H3 = /^--/;
  function qA(r, e) {
    return e == null || typeof e == "boolean" || e === "" ? "" : typeof e == "number" && e !== 0 && !H3.test(r) && !(ri.hasOwnProperty(r) && ri[r]) ? e + "px" : ("" + e).trim();
  }
  var H1 = {};
  function YA(r, e) {
    if (!r.nodeType || !r.setAttribute) return false;
    const t = r.nodeName === "filter" || r.parentNode && r.parentNode.nodeName === "filter", { className: n, style: o, children: i, scrollTop: s, scrollLeft: c, viewBox: l, ...a } = e, p = Object.values(a), f = Object.keys(a).map((d) => t || r.hasAttribute(d) ? d : H1[d] || (H1[d] = d.replace(/([A-Z])/g, (_) => "-" + _.toLowerCase())));
    i !== void 0 && (r.textContent = i);
    for (const d in o) if (o.hasOwnProperty(d)) {
      const _ = qA(d, o[d]);
      H3.test(d) ? r.style.setProperty(d, _) : r.style[d] = _;
    }
    f.forEach((d, _) => {
      r.setAttribute(d, p[_]);
    }), n !== void 0 && (r.className = n), s !== void 0 && (r.scrollTop = s), c !== void 0 && (r.scrollLeft = c), l !== void 0 && r.setAttribute("viewBox", l);
  }
  var ri = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, ZA = (r, e) => r + e.charAt(0).toUpperCase() + e.substring(1), $A = [
    "Webkit",
    "Ms",
    "Moz",
    "O"
  ];
  ri = Object.keys(ri).reduce((r, e) => ($A.forEach((t) => r[ZA(t, e)] = r[e]), r), ri);
  var ev = /^(matrix|translate|scale|rotate|skew)/, tv = /^(translate)/, rv = /^(rotate|skew)/, ia = (r, e) => _e.num(r) && r !== 0 ? r + e : r, y0 = (r, e) => _e.arr(r) ? r.every((t) => y0(t, e)) : _e.num(r) ? r === e : parseFloat(r) === e, nv = class extends cs {
    constructor({ x: r, y: e, z: t, ...n }) {
      const o = [], i = [];
      (r || e || t) && (o.push([
        r || 0,
        e || 0,
        t || 0
      ]), i.push((s) => [
        `translate3d(${s.map((c) => ia(c, "px")).join(",")})`,
        y0(s, 0)
      ])), zr(n, (s, c) => {
        if (c === "transform") o.push([
          s || ""
        ]), i.push((l) => [
          l,
          l === ""
        ]);
        else if (ev.test(c)) {
          if (delete n[c], _e.und(s)) return;
          const l = tv.test(c) ? "px" : rv.test(c) ? "deg" : "";
          o.push(mr(s)), i.push(c === "rotate3d" ? ([a, p, f, d]) => [
            `rotate3d(${a},${p},${f},${ia(d, l)})`,
            y0(d, 0)
          ] : (a) => [
            `${c}(${a.map((p) => ia(p, l)).join(",")})`,
            y0(a, c.startsWith("scale") ? 1 : 0)
          ]);
        }
      }), o.length && (n.transform = new ov(o, i)), super(n);
    }
  }, ov = class extends _3 {
    constructor(r, e) {
      super(), this.inputs = r, this.transforms = e, this._value = null;
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let r = "", e = true;
      return qe(this.inputs, (t, n) => {
        const o = ur(t[0]), [i, s] = this.transforms[n](_e.arr(o) ? o : t.map(ur));
        r += " " + i, e = e && s;
      }), e ? "none" : r;
    }
    observerAdded(r) {
      r == 1 && qe(this.inputs, (e) => qe(e, (t) => Ar(t) && Co(t, this)));
    }
    observerRemoved(r) {
      r == 0 && qe(this.inputs, (e) => qe(e, (t) => Ar(t) && _i(t, this)));
    }
    eventObserved(r) {
      r.type == "change" && (this._value = null), pi(this, r);
    }
  }, iv = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  Sr.assign({
    batchedUpdates: a9.unstable_batchedUpdates,
    createStringInterpolator: Qc,
    colors: p3
  });
  S3(iv, {
    applyAnimatedValues: YA,
    createAnimatedStyle: (r) => new nv(r),
    getComponentProps: ({ scrollTop: r, scrollLeft: e, ...t }) => t
  });
  let mo;
  mo = V2((r) => ({
    shopifyRampLetterShader: null,
    setShopifyRampLetterShader: (e) => r({
      shopifyRampLetterShader: e
    }),
    globeShader: null,
    setGlobeShader: (e) => r({
      globeShader: e
    }),
    popBumperShader: null,
    setPopBumperShader: (e) => r({
      popBumperShader: e
    })
  }));
  tl = V2(c9((r) => ({
    vrIsEnabled: false,
    setVRIsEnabled: (e) => r({
      vrIsEnabled: e
    })
  })));
  function sv(r, e, t) {
    r.uniforms.equirectMap = {
      value: e
    }, r.defines = r.defines || {}, r.defines.IS_MOBILE = Jo() || t, r.uniforms.fresnelColor = {
      value: new Ye("#eba379")
    }, r.uniforms.fresnelStrength = {
      value: 0.84
    }, r.uniforms.fresnelPower = {
      value: 0.34
    }, r.uniforms.hoverEffect = {
      value: 0
    }, r.uniforms.innerLight = {
      value: 0
    }, r.vertexShader = r.vertexShader.replace("#include <common>", `
    #include <common>
    varying vec3 vPosition;
    `), r.vertexShader = r.vertexShader.replace("#include <fog_vertex>", `
    #include <fog_vertex>
    vPosition = position;
    `), r.fragmentShader = r.fragmentShader.replace("#include <common>", `
    #include <common>
    uniform vec3 fresnelColor;
    uniform float fresnelStrength;
    uniform float fresnelPower;
    uniform float hoverEffect;
    uniform float innerLight;

    uniform sampler2D equirectMap;
    `), r.fragmentShader = r.fragmentShader.replace("vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;", `
    vec3 earthMask = texture2D(equirectMap, vMapUv).rgb;
    vec3 shadelessEarth = texture2D(map, vMapUv).rgb;
    vec3 outgoingLight = mix(totalDiffuse + totalSpecular + totalEmissiveRadiance, shadelessEarth, 0.5);
     #ifdef IS_MOBILE
     outgoingLight -= earthMask.bbb * 0.4;
     #else
     outgoingLight -= earthMask.bbb * 1.0;
     #endif
    `), r.fragmentShader = r.fragmentShader.replace("#include <dithering_fragment>", `
    #include <dithering_fragment>

    vec3 normalizedNormal = normalize(normal);
    vec3 normalizedViewPosition = normalize(vViewPosition);
    float dotProduct = dot(normalizedNormal, -normalizedViewPosition);
    float fresnel = pow(1.0 - abs(dotProduct), fresnelPower);
    fresnel = smoothstep(1.0, 0.0, fresnel);

    vec3 fresnelEffect = fresnelColor * fresnel * (fresnelStrength + hoverEffect + innerLight * 1.3);

    gl_FragColor.rgb *= 0.8;
    gl_FragColor.rgb += fresnelEffect * earthMask.r;
    `);
  }
  At.preload(Y2);
  At.preload(Z2);
  At.preload($2);
  function av() {
    const r = u.useRef(0), e = tl((p) => p.vrIsEnabled);
    u.useEffect(() => se.on("collision", (p) => {
      p.target.startsWith("BumperGroup") && (r.current = 2);
    }), []);
    const t = At(Y2);
    t.minFilter = S0, t.magFilter = Wt;
    const n = At(Z2);
    n.minFilter = S0, n.magFilter = Wt;
    const o = At($2);
    o.wrapS = nn, o.wrapT = nn, o.repeat.set(8, 8);
    const i = u.useRef(null), s = u.useRef(null);
    u.useEffect(() => {
      kn.getState().setSceneHasRendered(true);
    }, []);
    const [c, l] = vt(() => ({
      lightIntensity: 0,
      config: {
        duration: 350,
        easing: Be.easeInOutCubic
      },
      onChange: () => {
        s.current && (s.current.uniforms.hoverEffect.value = c.lightIntensity.get());
      }
    }));
    u.useEffect(() => {
      const p = kn.subscribe((f) => f.hoveringOnGlobe, (f) => {
        f ? l.start({
          to: {
            lightIntensity: 0.2
          }
        }) : l.start({
          to: {
            lightIntensity: 0
          }
        });
      });
      return () => {
        p();
      };
    }, [
      l
    ]), u.useEffect(() => {
      i.current && L.getState().setGlobeMaterial(i.current);
    }, []);
    const a = Ue((p) => p.scene);
    return u.useEffect(() => {
      i.current && (i.current.envMap = a.environment);
    }, [
      a.environment
    ]), R.jsx(R.Fragment, {
      children: R.jsxs("mesh", {
        children: [
          R.jsx("sphereGeometry", {
            args: [
              1,
              32,
              32
            ]
          }),
          R.jsx("meshPhysicalMaterial", {
            ref: i,
            envMapIntensity: 0.8,
            map: t,
            roughness: 0.2,
            metalness: 0,
            clearcoat: 1,
            clearcoatRoughness: 0.15,
            envMapRotation: new F2(0, -Math.PI * 0.5, 0),
            normalMap: o,
            normalScale: new Pr(0.3, 0.3),
            onBeforeCompile: (p) => {
              s.current = p, mo.getState().setGlobeShader(p), sv(p, n, e);
            }
          })
        ]
      })
    });
  }
  function cv({ children: r, speed: e = 1, rotation: t = [
    0,
    0,
    0
  ], polar: n = [
    0,
    Math.PI / 2
  ], config: o = {
    mass: 1,
    tension: 120,
    friction: 52
  }, dragGroupRef: i, hoverGroupRef: s, validModes: c }) {
    const l = Ue((M) => M.gl), a = Ue((M) => M.size), p = Ue((M) => M.controls), f = u.useRef(1), d = u.useRef(tt.Explore), _ = u.useRef(false), h = u.useMemo(() => [
      n[0],
      n[1]
    ], [
      n
    ]), b = u.useMemo(() => [
      wo(t[0], h[0], h[1]),
      t[1],
      t[2]
    ], [
      h,
      t
    ]);
    u.useEffect(() => {
      i.current && i.current.rotation.set(b[0], b[1], b[2]);
    }, [
      i,
      b
    ]);
    const [g, y] = vt(() => ({
      from: {
        rotation: b
      },
      config: o
    })), [A, C] = vt(() => ({
      from: {
        scale: 1
      }
    })), S = u.useRef(1), [B, T] = vt(() => ({
      from: {
        progress: 1
      },
      config: {
        easing: Be.easeOutSine,
        duration: 1e3
      },
      onChange: () => {
        const M = B.progress.get();
        S.current = M;
      }
    })), E = l9({
      onHover: ({ event: M, last: x, hovering: P }) => {
        M.stopPropagation(), _.current = P ?? false, Ft.getState().setGlobeIsBeingHovered(P ?? false);
        const D = d.current === tt.Globe;
        D && (l.domElement.style.cursor = x ? "auto" : "grab");
        const H = d.current === tt.Explore, k = d.current === tt.Pinball;
        !D && !H && !k || (P ? (T.start({
          to: {
            progress: 0
          }
        }), kn.getState().setHoveringOnGlobe(true), C.start({
          to: {
            scale: 1.025
          },
          config: {
            easing: Be.easeInOutCubic,
            duration: 400
          },
          onChange: () => {
            if (!s.current) return;
            const J = A.scale.get();
            s.current.scale.set(J, J, J);
          }
        })) : (T.start({
          to: {
            progress: 1
          }
        }), kn.getState().setHoveringOnGlobe(false), C.start({
          to: {
            scale: 1
          },
          config: {
            easing: Be.easeInOutCubic,
            duration: 400
          },
          onChange: () => {
            if (!s.current) return;
            const J = A.scale.get();
            s.current.scale.set(J, J, J);
          }
        })));
      },
      onDrag: ({ event: M, active: x, delta: [P, D], memo: [H, k] = g.rotation.animation.to || b }) => {
        if (M.stopPropagation(), !c.includes(d.current)) return [
          H,
          k
        ];
        l.domElement.style.cursor = x ? "grabbing" : "grab";
        const W = k + P / a.width * Math.PI * e, K = wo(H + D / a.height * Math.PI * e, h[0], h[1]);
        return y.start({
          to: {
            rotation: [
              K,
              W,
              0
            ]
          },
          config: o,
          onChange: () => {
            if (!i.current) return;
            const Q = g.rotation.get();
            i.current.rotation.set(Q[0], Q[1], Q[2]);
          }
        }), [
          K,
          W
        ];
      },
      onDragStart: ({ event: M }) => {
        M.stopPropagation(), c.includes(d.current) && p && (p.enabled = false);
      },
      onDragEnd: ({ event: M }) => {
        M.stopPropagation(), c.includes(d.current) && p && (p.enabled = true);
      }
    }, {
      target: void 0
    });
    return u.useEffect(() => {
      const M = Ft.subscribe((x) => x.menuMode, (x) => {
        const P = d.current;
        d.current = x, P !== tt.Globe && x === tt.Globe && _.current && (l.domElement.style.cursor = "grab");
      }, {
        fireImmediately: true
      });
      return () => {
        M();
      };
    }, [
      l,
      T,
      C,
      A,
      s
    ]), it((M, x) => {
      if (!s.current) return;
      const P = x * 0.05 * f.current * S.current;
      s.current.rotation.y -= P;
    }), u.createElement(nA.group, vn({}, E == null ? void 0 : E(), g), r);
  }
  const lv = JSON.parse("[[[0.19,-0.98,-0.055],[0.195,-0.979,-0.059],[0.191,-0.98,-0.065],[0.185,-0.981,-0.066],[0.178,-0.982,-0.067],[0.17,-0.983,-0.065],[0.17,-0.984,-0.058],[0.177,-0.983,-0.056],[0.184,-0.981,-0.056],[0.185,-0.981,-0.056]],[[-0.586,0.808,-0.064],[-0.596,0.8,-0.063],[-0.608,0.791,-0.072],[-0.613,0.784,-0.092],[-0.609,0.786,-0.107],[-0.596,0.797,-0.096],[-0.581,0.808,-0.099],[-0.572,0.816,-0.084],[-0.567,0.82,-0.075],[-0.567,0.821,-0.067],[-0.577,0.815,-0.057]],[[0.776,-0.045,0.629],[0.795,-0.057,0.605],[0.813,-0.067,0.578],[0.819,-0.076,0.568],[0.824,-0.085,0.56],[0.825,-0.095,0.557],[0.84,-0.106,0.532],[0.841,-0.115,0.528],[0.833,-0.117,0.541],[0.834,-0.129,0.537],[0.84,-0.14,0.523],[0.844,-0.158,0.512],[0.849,-0.158,0.504],[0.848,-0.165,0.504],[0.854,-0.168,0.492],[0.851,-0.171,0.496],[0.859,-0.179,0.48],[0.857,-0.184,0.481],[0.851,-0.185,0.491],[0.85,-0.18,0.495],[0.843,-0.178,0.508],[0.834,-0.176,0.523],[0.828,-0.165,0.535],[0.824,-0.155,0.544],[0.821,-0.14,0.553],[0.809,-0.133,0.572],[0.8,-0.138,0.584],[0.793,-0.143,0.592],[0.793,-0.156,0.589],[0.784,-0.162,0.599],[0.779,-0.159,0.607],[0.768,-0.158,0.621],[0.76,-0.144,0.634],[0.749,-0.141,0.648],[0.745,-0.146,0.651],[0.731,-0.146,0.667],[0.737,-0.132,0.663],[0.745,-0.127,0.655],[0.743,-0.109,0.66],[0.739,-0.094,0.667],[0.717,-0.079,0.693],[0.707,-0.078,0.703],[0.689,-0.062,0.722],[0.685,-0.07,0.725],[0.68,-0.072,0.73],[0.677,-0.065,0.733],[0.678,-0.058,0.733],[0.668,-0.049,0.742],[0.682,-0.043,0.73],[0.691,-0.043,0.721],[0.69,-0.039,0.722],[0.672,-0.039,0.74],[0.667,-0.028,0.745],[0.655,-0.025,0.755],[0.65,-0.016,0.76],[0.667,-0.012,0.745],[0.674,-0.006,0.739],[0.694,-0.014,0.719],[0.696,-0.02,0.717],[0.699,-0.048,0.713],[0.712,-0.059,0.7],[0.722,-0.04,0.69],[0.736,-0.03,0.676],[0.747,-0.03,0.665],[0.756,-0.036,0.653],[0.765,-0.042,0.643]],[[0.409,0.079,0.909],[0.415,0.085,0.906],[0.428,0.095,0.899],[0.439,0.107,0.892],[0.446,0.121,0.887],[0.453,0.121,0.883],[0.461,0.112,0.88],[0.462,0.104,0.881],[0.472,0.099,0.876],[0.485,0.094,0.869],[0.485,0.087,0.87],[0.474,0.087,0.876],[0.478,0.078,0.875],[0.466,0.072,0.882],[0.458,0.056,0.887],[0.47,0.04,0.882],[0.467,0.032,0.884],[0.485,0.016,0.875],[0.467,0.014,0.884],[0.461,0.002,0.887],[0.462,-0.014,0.887],[0.447,-0.026,0.894],[0.446,-0.043,0.894],[0.44,-0.07,0.895],[0.437,-0.064,0.897],[0.419,-0.072,0.905],[0.413,-0.061,0.908],[0.402,-0.06,0.914],[0.394,-0.054,0.917],[0.375,-0.061,0.925],[0.369,-0.052,0.928],[0.359,-0.053,0.932],[0.345,-0.051,0.937],[0.343,-0.028,0.939],[0.335,-0.023,0.942],[0.327,-0.008,0.945],[0.325,0.007,0.946],[0.327,0.023,0.945],[0.336,0.035,0.941],[0.348,0.029,0.937],[0.361,0.032,0.932],[0.364,0.047,0.93],[0.371,0.05,0.927],[0.39,0.054,0.919],[0.401,0.068,0.913]],[[0.016,0.966,-0.259],[0.019,0.964,-0.265],[0.026,0.964,-0.263],[0.031,0.966,-0.258],[0.028,0.968,-0.251],[0.021,0.969,-0.247],[0.018,0.967,-0.253]],[[0.014,0.976,-0.216],[0.016,0.976,-0.216],[0.023,0.977,-0.214],[0.024,0.978,-0.209],[0.016,0.977,-0.21],[0.014,0.977,-0.214]],[[0.023,0.981,-0.193],[0.019,0.98,-0.2],[0.021,0.978,-0.206],[0.027,0.978,-0.209],[0.029,0.978,-0.204],[0.03,0.98,-0.198],[0.029,0.981,-0.191],[0.025,0.981,-0.192]],[[-0.009,0.963,-0.269],[-0.001,0.964,-0.267],[0.011,0.965,-0.261],[0.012,0.968,-0.252],[0.012,0.97,-0.244],[0.016,0.972,-0.236],[0.024,0.972,-0.233],[0.028,0.973,-0.227],[0.026,0.975,-0.221],[0.018,0.975,-0.223],[0.014,0.973,-0.228],[0.006,0.973,-0.229],[0.003,0.972,-0.234],[0.004,0.971,-0.241],[-0.001,0.97,-0.244],[-0.004,0.969,-0.248],[-0.009,0.968,-0.249],[-0.016,0.968,-0.25],[-0.022,0.969,-0.246],[-0.031,0.969,-0.244],[-0.038,0.969,-0.244],[-0.044,0.967,-0.249],[-0.046,0.966,-0.256],[-0.044,0.964,-0.261],[-0.038,0.963,-0.266],[-0.031,0.964,-0.264],[-0.018,0.963,-0.268]],[[0.074,0.979,-0.191],[0.071,0.978,-0.196],[0.074,0.977,-0.2],[0.082,0.976,-0.202],[0.085,0.977,-0.195],[0.08,0.978,-0.191]],[[0.069,0.981,-0.181],[0.066,0.98,-0.186],[0.072,0.98,-0.188],[0.077,0.98,-0.186],[0.076,0.98,-0.183],[0.071,0.981,-0.18]],[[-0.381,0.318,-0.868],[-0.389,0.316,-0.865],[-0.393,0.313,-0.865],[-0.389,0.309,-0.868],[-0.378,0.309,-0.873],[-0.369,0.308,-0.877],[-0.367,0.315,-0.875],[-0.369,0.318,-0.873]],[[-0.204,0.317,-0.926],[-0.215,0.316,-0.924],[-0.224,0.312,-0.923],[-0.227,0.307,-0.924],[-0.216,0.307,-0.927],[-0.211,0.304,-0.929],[-0.202,0.307,-0.93],[-0.192,0.313,-0.93],[-0.194,0.317,-0.929],[-0.2,0.318,-0.927]],[[-0.124,0.394,-0.911],[-0.137,0.393,-0.909],[-0.15,0.392,-0.907],[-0.165,0.387,-0.907],[-0.172,0.381,-0.908],[-0.187,0.383,-0.905],[-0.192,0.379,-0.905],[-0.207,0.369,-0.906],[-0.217,0.362,-0.907],[-0.222,0.362,-0.905],[-0.232,0.359,-0.904],[-0.231,0.354,-0.906],[-0.243,0.353,-0.903],[-0.256,0.347,-0.902],[-0.254,0.343,-0.904],[-0.244,0.341,-0.908],[-0.233,0.34,-0.911],[-0.222,0.341,-0.913],[-0.199,0.34,-0.919],[-0.209,0.349,-0.913],[-0.203,0.353,-0.913],[-0.192,0.354,-0.915],[-0.186,0.359,-0.915],[-0.182,0.368,-0.912],[-0.173,0.367,-0.914],[-0.158,0.372,-0.915],[-0.153,0.375,-0.914],[-0.132,0.378,-0.917],[-0.126,0.381,-0.916],[-0.132,0.385,-0.914],[-0.116,0.386,-0.915],[-0.105,0.377,-0.92],[-0.098,0.377,-0.921],[-0.096,0.373,-0.923],[-0.088,0.371,-0.924],[-0.081,0.373,-0.924],[-0.09,0.378,-0.921],[-0.093,0.384,-0.919],[-0.1,0.387,-0.917],[-0.108,0.39,-0.914],[-0.12,0.392,-0.912]],[[-0.353,0.781,-0.516],[-0.353,0.774,-0.526],[-0.353,0.764,-0.54],[-0.357,0.768,-0.532],[-0.365,0.765,-0.53],[-0.364,0.761,-0.536],[-0.375,0.758,-0.534],[-0.377,0.761,-0.528],[-0.388,0.758,-0.525],[-0.391,0.749,-0.534],[-0.397,0.751,-0.528],[-0.402,0.745,-0.532],[-0.41,0.738,-0.537],[-0.412,0.727,-0.549],[-0.408,0.727,-0.552],[-0.401,0.729,-0.555],[-0.397,0.739,-0.545],[-0.393,0.74,-0.546],[-0.388,0.73,-0.563],[-0.382,0.73,-0.566],[-0.385,0.736,-0.557],[-0.374,0.739,-0.56],[-0.364,0.738,-0.568],[-0.345,0.738,-0.58],[-0.341,0.742,-0.577],[-0.345,0.746,-0.57],[-0.339,0.749,-0.569],[-0.343,0.756,-0.557],[-0.341,0.774,-0.533],[-0.343,0.78,-0.523],[-0.348,0.784,-0.514],[-0.353,0.784,-0.511]],[[-0.045,0.907,-0.418],[-0.054,0.905,-0.423],[-0.063,0.902,-0.427],[-0.064,0.899,-0.434],[-0.07,0.899,-0.432],[-0.076,0.897,-0.436],[-0.07,0.894,-0.442],[-0.058,0.896,-0.44],[-0.052,0.9,-0.434],[-0.046,0.895,-0.443],[-0.035,0.891,-0.452],[-0.032,0.896,-0.443],[-0.022,0.895,-0.445],[-0.028,0.899,-0.437],[-0.028,0.905,-0.424],[-0.029,0.912,-0.41],[-0.035,0.911,-0.411],[-0.037,0.908,-0.418],[-0.04,0.909,-0.415]],[[-0.059,0.953,-0.297],[-0.063,0.955,-0.29],[-0.076,0.952,-0.295],[-0.085,0.95,-0.301],[-0.088,0.947,-0.308],[-0.096,0.949,-0.301],[-0.105,0.945,-0.309],[-0.121,0.943,-0.311],[-0.128,0.94,-0.315],[-0.139,0.935,-0.327],[-0.131,0.932,-0.338],[-0.149,0.928,-0.342],[-0.16,0.926,-0.341],[-0.175,0.92,-0.35],[-0.185,0.92,-0.346],[-0.189,0.915,-0.357],[-0.186,0.906,-0.38],[-0.175,0.909,-0.377],[-0.158,0.916,-0.368],[-0.151,0.915,-0.373],[-0.153,0.911,-0.382],[-0.164,0.907,-0.388],[-0.176,0.904,-0.39],[-0.181,0.902,-0.393],[-0.192,0.894,-0.405],[-0.194,0.888,-0.416],[-0.183,0.891,-0.416],[-0.16,0.897,-0.412],[-0.175,0.89,-0.421],[-0.187,0.885,-0.426],[-0.19,0.882,-0.43],[-0.167,0.886,-0.433],[-0.148,0.89,-0.431],[-0.137,0.894,-0.426],[-0.138,0.896,-0.421],[-0.125,0.9,-0.417],[-0.112,0.904,-0.413],[-0.113,0.902,-0.417],[-0.093,0.901,-0.425],[-0.085,0.903,-0.421],[-0.088,0.909,-0.408],[-0.101,0.909,-0.405],[-0.115,0.91,-0.399],[-0.111,0.912,-0.394],[-0.111,0.916,-0.386],[-0.115,0.922,-0.369],[-0.111,0.925,-0.362],[-0.107,0.928,-0.358],[-0.096,0.931,-0.353],[-0.082,0.933,-0.351],[-0.085,0.935,-0.346],[-0.076,0.938,-0.337],[-0.071,0.939,-0.338],[-0.065,0.941,-0.333],[-0.063,0.939,-0.338],[-0.052,0.938,-0.342],[-0.03,0.939,-0.341],[-0.017,0.941,-0.337],[-0.008,0.942,-0.335],[-0.003,0.944,-0.329],[-0.009,0.947,-0.322],[-0.001,0.947,-0.322],[0.001,0.952,-0.305],[-0.003,0.957,-0.29],[-0.008,0.959,-0.283],[-0.02,0.96,-0.278],[-0.017,0.957,-0.289],[-0.022,0.954,-0.299],[-0.026,0.958,-0.286],[-0.037,0.96,-0.277],[-0.049,0.955,-0.293],[-0.05,0.951,-0.304]],[[0.021,0.962,-0.273],[0.012,0.962,-0.274],[0.002,0.961,-0.278],[0.01,0.956,-0.293],[0.017,0.955,-0.296],[0.023,0.951,-0.308],[0.029,0.951,-0.307],[0.031,0.956,-0.292],[0.03,0.959,-0.283],[0.027,0.961,-0.277]],[[0.054,0.955,-0.292],[0.057,0.958,-0.281],[0.05,0.961,-0.274],[0.045,0.959,-0.278],[0.036,0.96,-0.277],[0.035,0.959,-0.282],[0.041,0.956,-0.29],[0.034,0.954,-0.298],[0.037,0.949,-0.312],[0.047,0.947,-0.318],[0.052,0.948,-0.315],[0.054,0.95,-0.309],[0.065,0.954,-0.294],[0.064,0.955,-0.288]],[[0.075,0.97,-0.233],[0.07,0.97,-0.231],[0.066,0.97,-0.233],[0.068,0.968,-0.241],[0.073,0.966,-0.248],[0.088,0.965,-0.246],[0.102,0.963,-0.249],[0.108,0.963,-0.246],[0.107,0.965,-0.241],[0.095,0.967,-0.238],[0.114,0.966,-0.231],[0.119,0.967,-0.226],[0.106,0.971,-0.214],[0.1,0.972,-0.211],[0.092,0.971,-0.221],[0.089,0.968,-0.233],[0.082,0.968,-0.237],[0.082,0.972,-0.22],[0.077,0.974,-0.215],[0.073,0.973,-0.218],[0.075,0.971,-0.227]],[[0.13,0.971,-0.202],[0.118,0.974,-0.194],[0.105,0.976,-0.189],[0.1,0.976,-0.192],[0.094,0.977,-0.192],[0.101,0.974,-0.203],[0.106,0.972,-0.207],[0.11,0.972,-0.206],[0.12,0.971,-0.209],[0.127,0.97,-0.208]],[[0.14,0.963,-0.228],[0.136,0.962,-0.235],[0.126,0.962,-0.242],[0.124,0.961,-0.248],[0.122,0.959,-0.257],[0.13,0.957,-0.258],[0.147,0.954,-0.262],[0.158,0.95,-0.269],[0.162,0.948,-0.275],[0.179,0.945,-0.274],[0.177,0.947,-0.266],[0.183,0.95,-0.252],[0.177,0.953,-0.248],[0.167,0.956,-0.24],[0.157,0.96,-0.233],[0.155,0.963,-0.222]],[[0.48,0.869,-0.116],[0.48,0.869,-0.123],[0.486,0.865,-0.125],[0.489,0.864,-0.12],[0.488,0.866,-0.114],[0.485,0.868,-0.108]],[[0.474,0.848,-0.239],[0.472,0.847,-0.245],[0.474,0.844,-0.25],[0.484,0.84,-0.246],[0.493,0.836,-0.24],[0.492,0.839,-0.234],[0.486,0.843,-0.23],[0.478,0.846,-0.235]],[[0.398,0.809,-0.431],[0.39,0.81,-0.437],[0.403,0.798,-0.447],[0.404,0.79,-0.462],[0.407,0.79,-0.459],[0.407,0.795,-0.45],[0.406,0.8,-0.442],[0.407,0.803,-0.436],[0.404,0.807,-0.43],[0.401,0.811,-0.427]],[[0.373,0.765,-0.524],[0.372,0.76,-0.533],[0.366,0.755,-0.544],[0.366,0.749,-0.552],[0.372,0.747,-0.551],[0.384,0.753,-0.535],[0.384,0.757,-0.529],[0.389,0.761,-0.519],[0.389,0.764,-0.515],[0.396,0.766,-0.506],[0.395,0.772,-0.498],[0.392,0.775,-0.496],[0.385,0.772,-0.505],[0.381,0.771,-0.511],[0.373,0.769,-0.518]],[[0.437,0.897,-0.064],[0.439,0.896,-0.069],[0.437,0.896,-0.073],[0.44,0.894,-0.08],[0.441,0.893,-0.088],[0.442,0.892,-0.088],[0.447,0.891,-0.083],[0.445,0.893,-0.076],[0.442,0.894,-0.073],[0.444,0.894,-0.066],[0.443,0.894,-0.064]],[[0.05,0.983,-0.179],[0.044,0.982,-0.183],[0.036,0.981,-0.191],[0.035,0.979,-0.199],[0.035,0.978,-0.207],[0.041,0.978,-0.204],[0.045,0.979,-0.197],[0.053,0.98,-0.194],[0.048,0.981,-0.19],[0.051,0.981,-0.185]],[[-0.684,0.579,0.443],[-0.679,0.579,0.452],[-0.669,0.583,0.461],[-0.678,0.577,0.456],[-0.679,0.573,0.458],[-0.691,0.567,0.448],[-0.693,0.569,0.442],[-0.692,0.575,0.437],[-0.687,0.576,0.443]],[[-0.732,0.578,0.361],[-0.735,0.574,0.361],[-0.745,0.572,0.343],[-0.743,0.575,0.342],[-0.749,0.578,0.326],[-0.744,0.584,0.326],[-0.744,0.579,0.335],[-0.738,0.58,0.345],[-0.734,0.579,0.355],[-0.736,0.576,0.355]],[[-0.634,-0.216,0.743],[-0.629,-0.223,0.745],[-0.624,-0.234,0.745],[-0.619,-0.255,0.743],[-0.614,-0.263,0.744],[-0.614,-0.271,0.741],[-0.615,-0.276,0.739],[-0.621,-0.266,0.737],[-0.623,-0.271,0.734],[-0.618,-0.283,0.733],[-0.618,-0.29,0.731],[-0.621,-0.294,0.727],[-0.619,-0.308,0.723],[-0.619,-0.328,0.714],[-0.62,-0.35,0.702],[-0.62,-0.381,0.686],[-0.618,-0.403,0.675],[-0.617,-0.422,0.664],[-0.625,-0.425,0.654],[-0.633,-0.432,0.642],[-0.641,-0.428,0.637],[-0.652,-0.422,0.63],[-0.657,-0.414,0.63],[-0.663,-0.4,0.633],[-0.671,-0.387,0.633],[-0.675,-0.376,0.635],[-0.676,-0.364,0.64],[-0.672,-0.361,0.647],[-0.673,-0.356,0.648],[-0.671,-0.343,0.657],[-0.673,-0.333,0.661],[-0.678,-0.325,0.66],[-0.682,-0.315,0.66],[-0.687,-0.299,0.662],[-0.685,-0.29,0.669],[-0.686,-0.279,0.672],[-0.68,-0.279,0.678],[-0.674,-0.275,0.686],[-0.67,-0.272,0.691],[-0.665,-0.272,0.696],[-0.66,-0.262,0.704],[-0.651,-0.252,0.716],[-0.649,-0.243,0.721],[-0.652,-0.236,0.721],[-0.646,-0.238,0.725],[-0.641,-0.226,0.733],[-0.642,-0.216,0.735],[-0.639,-0.209,0.74]],[[0.938,-0.274,0.213],[0.937,-0.283,0.202],[0.936,-0.286,0.207],[0.937,-0.278,0.213]],[[0.937,-0.27,0.22],[0.938,-0.265,0.223],[0.941,-0.253,0.224],[0.942,-0.258,0.216],[0.939,-0.271,0.212],[0.938,-0.269,0.217]],[[0.692,-0.12,0.712],[0.692,-0.107,0.714],[0.695,-0.101,0.712],[0.698,-0.095,0.71],[0.7,-0.1,0.707],[0.7,-0.108,0.706]],[[-0.137,-0.978,-0.155],[-0.138,-0.978,-0.154],[-0.145,-0.978,-0.153],[-0.146,-0.978,-0.147],[-0.144,-0.98,-0.139],[-0.137,-0.982,-0.13],[-0.132,-0.983,-0.125],[-0.126,-0.985,-0.119],[-0.119,-0.986,-0.118],[-0.112,-0.987,-0.119],[-0.106,-0.987,-0.119],[-0.099,-0.988,-0.12],[-0.095,-0.988,-0.125],[-0.095,-0.987,-0.132],[-0.1,-0.985,-0.137],[-0.108,-0.985,-0.137],[-0.113,-0.984,-0.14],[-0.12,-0.982,-0.145],[-0.125,-0.981,-0.148],[-0.13,-0.98,-0.152]],[[-0.068,-0.986,-0.155],[-0.074,-0.986,-0.152],[-0.079,-0.986,-0.147],[-0.084,-0.985,-0.152],[-0.088,-0.984,-0.157],[-0.088,-0.985,-0.149],[-0.082,-0.986,-0.142],[-0.078,-0.988,-0.136],[-0.074,-0.987,-0.141],[-0.068,-0.987,-0.142],[-0.067,-0.987,-0.149]],[[-0.089,-0.947,-0.309],[-0.093,-0.946,-0.309],[-0.099,-0.947,-0.307],[-0.103,-0.944,-0.314],[-0.106,-0.942,-0.32],[-0.11,-0.937,-0.332],[-0.115,-0.934,-0.339],[-0.122,-0.933,-0.339],[-0.123,-0.935,-0.332],[-0.122,-0.937,-0.326],[-0.122,-0.94,-0.318],[-0.121,-0.943,-0.311],[-0.12,-0.945,-0.303],[-0.118,-0.948,-0.296],[-0.114,-0.95,-0.291],[-0.111,-0.952,-0.285],[-0.104,-0.953,-0.286],[-0.098,-0.954,-0.284],[-0.091,-0.954,-0.287],[-0.096,-0.952,-0.292],[-0.089,-0.952,-0.292],[-0.083,-0.953,-0.291],[-0.08,-0.951,-0.297],[-0.081,-0.949,-0.304]],[[0.066,-0.95,-0.304],[0.064,-0.95,-0.307],[0.056,-0.95,-0.306],[0.048,-0.951,-0.306],[0.042,-0.951,-0.305],[0.037,-0.951,-0.308],[0.032,-0.954,-0.299],[0.037,-0.953,-0.299],[0.043,-0.954,-0.298],[0.049,-0.953,-0.298],[0.056,-0.954,-0.295],[0.062,-0.953,-0.298]],[[0.152,-0.96,-0.237],[0.154,-0.958,-0.242],[0.147,-0.959,-0.243],[0.14,-0.96,-0.244],[0.137,-0.959,-0.249],[0.136,-0.96,-0.243],[0.138,-0.962,-0.237],[0.144,-0.961,-0.235]],[[0.172,-0.959,-0.226],[0.172,-0.958,-0.232],[0.165,-0.959,-0.231],[0.155,-0.961,-0.23],[0.158,-0.96,-0.229],[0.164,-0.96,-0.227]],[[0.904,-0.36,0.229],[0.904,-0.37,0.215],[0.903,-0.377,0.206],[0.9,-0.381,0.212],[0.9,-0.377,0.221],[0.9,-0.369,0.233],[0.9,-0.361,0.244],[0.901,-0.349,0.256],[0.903,-0.344,0.258],[0.905,-0.344,0.252],[0.905,-0.35,0.242],[0.905,-0.355,0.235]],[[0.886,-0.064,0.459],[0.889,-0.069,0.453],[0.889,-0.078,0.45],[0.887,-0.083,0.455],[0.886,-0.073,0.458],[0.884,-0.066,0.462],[0.881,-0.06,0.469],[0.877,-0.053,0.478],[0.871,-0.048,0.489],[0.873,-0.044,0.485],[0.878,-0.049,0.477],[0.88,-0.052,0.472],[0.883,-0.057,0.465]],[[0.873,-0.102,0.478],[0.868,-0.106,0.486],[0.863,-0.11,0.493],[0.858,-0.11,0.501],[0.851,-0.105,0.514],[0.847,-0.1,0.523],[0.848,-0.095,0.522],[0.856,-0.097,0.508],[0.861,-0.096,0.5],[0.863,-0.088,0.498],[0.864,-0.087,0.496],[0.864,-0.096,0.494],[0.869,-0.095,0.486],[0.872,-0.089,0.482],[0.877,-0.083,0.473],[0.877,-0.073,0.475],[0.882,-0.072,0.466],[0.883,-0.075,0.463],[0.882,-0.085,0.463],[0.879,-0.095,0.468],[0.874,-0.097,0.476]],[[0.936,-0.182,0.302],[0.936,-0.188,0.297],[0.933,-0.188,0.308],[0.932,-0.177,0.315],[0.935,-0.181,0.305]],[[0.936,-0.167,0.31],[0.935,-0.17,0.312],[0.933,-0.155,0.325],[0.933,-0.145,0.329],[0.935,-0.145,0.323],[0.935,-0.159,0.317]],[[0.931,-0.171,0.323],[0.928,-0.172,0.329],[0.925,-0.17,0.339],[0.924,-0.167,0.343],[0.926,-0.161,0.342],[0.929,-0.163,0.332],[0.93,-0.167,0.326]],[[0.928,-0.14,0.345],[0.929,-0.145,0.34],[0.929,-0.148,0.34],[0.925,-0.141,0.353],[0.922,-0.135,0.362],[0.921,-0.129,0.368],[0.922,-0.127,0.366],[0.924,-0.132,0.358]],[[0.915,-0.122,0.386],[0.917,-0.128,0.379],[0.915,-0.129,0.382],[0.913,-0.125,0.389],[0.911,-0.118,0.396],[0.911,-0.115,0.395]],[[0.901,-0.093,0.425],[0.902,-0.097,0.42],[0.905,-0.108,0.412],[0.908,-0.114,0.404],[0.906,-0.119,0.406],[0.904,-0.12,0.41],[0.902,-0.114,0.417],[0.9,-0.103,0.425],[0.899,-0.09,0.429],[0.9,-0.088,0.426]],[[0.764,-0.644,0.042],[0.758,-0.651,0.046],[0.75,-0.66,0.052],[0.744,-0.665,0.062],[0.747,-0.662,0.064],[0.748,-0.66,0.07],[0.758,-0.649,0.063],[0.764,-0.642,0.068],[0.767,-0.636,0.083],[0.771,-0.631,0.083],[0.776,-0.627,0.074],[0.784,-0.616,0.072],[0.791,-0.607,0.073],[0.798,-0.598,0.08],[0.8,-0.595,0.08],[0.803,-0.59,0.087],[0.811,-0.577,0.099],[0.817,-0.567,0.106],[0.818,-0.566,0.1],[0.814,-0.574,0.092],[0.812,-0.577,0.081],[0.804,-0.59,0.076],[0.794,-0.605,0.065],[0.801,-0.595,0.065],[0.799,-0.599,0.059],[0.791,-0.61,0.056],[0.788,-0.614,0.045],[0.788,-0.615,0.035],[0.792,-0.61,0.028],[0.791,-0.611,0.02],[0.781,-0.624,0.024],[0.775,-0.632,0.027],[0.775,-0.631,0.038],[0.771,-0.635,0.041],[0.766,-0.641,0.04]],[[0.713,-0.689,0.13],[0.721,-0.682,0.12],[0.728,-0.676,0.114],[0.738,-0.666,0.109],[0.741,-0.663,0.105],[0.748,-0.655,0.104],[0.754,-0.649,0.095],[0.75,-0.655,0.092],[0.746,-0.66,0.088],[0.751,-0.655,0.08],[0.747,-0.661,0.075],[0.742,-0.666,0.075],[0.736,-0.672,0.079],[0.727,-0.682,0.086],[0.721,-0.687,0.092],[0.716,-0.693,0.087],[0.714,-0.693,0.096],[0.708,-0.698,0.106],[0.7,-0.706,0.109],[0.686,-0.718,0.113],[0.679,-0.724,0.122],[0.675,-0.727,0.127],[0.673,-0.727,0.138],[0.675,-0.723,0.146],[0.673,-0.722,0.159],[0.677,-0.718,0.162],[0.688,-0.708,0.158],[0.703,-0.696,0.146],[0.707,-0.694,0.138]],[[0.64,-0.654,0.405],[0.643,-0.654,0.397],[0.632,-0.67,0.389],[0.626,-0.674,0.391],[0.618,-0.685,0.387],[0.618,-0.681,0.393],[0.606,-0.69,0.396],[0.605,-0.689,0.398],[0.601,-0.689,0.405],[0.605,-0.678,0.417],[0.611,-0.67,0.423],[0.615,-0.658,0.435],[0.619,-0.652,0.438],[0.623,-0.653,0.43],[0.627,-0.658,0.417],[0.632,-0.656,0.412]],[[0.499,-0.533,0.683],[0.484,-0.541,0.688],[0.472,-0.544,0.694],[0.467,-0.552,0.691],[0.46,-0.558,0.691],[0.45,-0.558,0.697],[0.442,-0.559,0.702],[0.432,-0.557,0.71],[0.422,-0.558,0.714],[0.413,-0.559,0.719],[0.403,-0.567,0.719],[0.4,-0.566,0.721],[0.392,-0.57,0.722],[0.385,-0.575,0.723],[0.376,-0.574,0.728],[0.367,-0.574,0.732],[0.356,-0.565,0.744],[0.35,-0.562,0.749],[0.353,-0.554,0.754],[0.36,-0.552,0.752],[0.363,-0.548,0.753],[0.364,-0.543,0.757],[0.368,-0.533,0.762],[0.369,-0.524,0.767],[0.366,-0.509,0.779],[0.366,-0.5,0.785],[0.369,-0.492,0.789],[0.365,-0.482,0.796],[0.366,-0.477,0.799],[0.361,-0.471,0.805],[0.362,-0.459,0.811],[0.356,-0.447,0.821],[0.356,-0.44,0.824],[0.361,-0.447,0.819],[0.359,-0.432,0.827],[0.365,-0.437,0.822],[0.368,-0.443,0.818],[0.369,-0.435,0.821],[0.365,-0.423,0.83],[0.364,-0.418,0.832],[0.362,-0.413,0.836],[0.365,-0.404,0.839],[0.369,-0.4,0.839],[0.372,-0.392,0.842],[0.372,-0.382,0.846],[0.38,-0.371,0.847],[0.379,-0.383,0.842],[0.387,-0.372,0.844],[0.4,-0.366,0.84],[0.408,-0.359,0.839],[0.42,-0.354,0.836],[0.427,-0.352,0.833],[0.431,-0.354,0.83],[0.443,-0.348,0.826],[0.452,-0.346,0.822],[0.455,-0.343,0.822],[0.459,-0.341,0.82],[0.467,-0.342,0.816],[0.483,-0.337,0.808],[0.492,-0.33,0.806],[0.497,-0.321,0.806],[0.507,-0.312,0.804],[0.509,-0.306,0.805],[0.51,-0.297,0.807],[0.523,-0.282,0.804],[0.526,-0.297,0.797],[0.533,-0.294,0.794],[0.529,-0.286,0.799],[0.535,-0.278,0.798],[0.54,-0.281,0.793],[0.544,-0.268,0.795],[0.553,-0.26,0.792],[0.557,-0.253,0.791],[0.565,-0.251,0.786],[0.565,-0.246,0.787],[0.571,-0.248,0.783],[0.572,-0.244,0.783],[0.578,-0.241,0.779],[0.585,-0.239,0.775],[0.594,-0.247,0.766],[0.6,-0.257,0.758],[0.608,-0.257,0.751],[0.616,-0.258,0.744],[0.615,-0.249,0.748],[0.623,-0.235,0.746],[0.63,-0.231,0.742],[0.628,-0.227,0.744],[0.635,-0.217,0.741],[0.644,-0.211,0.735],[0.65,-0.213,0.729],[0.661,-0.21,0.72],[0.663,-0.201,0.722],[0.654,-0.195,0.731],[0.661,-0.193,0.725],[0.669,-0.197,0.717],[0.674,-0.204,0.709],[0.684,-0.209,0.699],[0.688,-0.207,0.696],[0.695,-0.212,0.687],[0.702,-0.207,0.681],[0.707,-0.209,0.676],[0.71,-0.205,0.674],[0.714,-0.214,0.667],[0.709,-0.223,0.669],[0.704,-0.23,0.672],[0.7,-0.23,0.676],[0.7,-0.237,0.674],[0.695,-0.246,0.676],[0.689,-0.254,0.679],[0.689,-0.259,0.677],[0.696,-0.268,0.666],[0.704,-0.273,0.655],[0.709,-0.279,0.648],[0.715,-0.289,0.637],[0.718,-0.289,0.633],[0.723,-0.293,0.626],[0.723,-0.299,0.623],[0.732,-0.304,0.61],[0.74,-0.299,0.602],[0.745,-0.29,0.601],[0.748,-0.282,0.6],[0.752,-0.273,0.6],[0.758,-0.26,0.599],[0.758,-0.251,0.602],[0.76,-0.246,0.602],[0.761,-0.237,0.605],[0.764,-0.224,0.605],[0.767,-0.221,0.603],[0.766,-0.215,0.605],[0.77,-0.206,0.603],[0.774,-0.196,0.602],[0.775,-0.192,0.602],[0.78,-0.185,0.598],[0.781,-0.194,0.593],[0.78,-0.204,0.591],[0.783,-0.206,0.587],[0.782,-0.213,0.586],[0.784,-0.222,0.58],[0.783,-0.232,0.577],[0.781,-0.238,0.577],[0.782,-0.251,0.57],[0.79,-0.245,0.562],[0.792,-0.252,0.557],[0.795,-0.259,0.549],[0.792,-0.266,0.549],[0.791,-0.28,0.544],[0.79,-0.289,0.54],[0.792,-0.291,0.537],[0.791,-0.305,0.53],[0.788,-0.314,0.53],[0.788,-0.325,0.524],[0.795,-0.333,0.507],[0.799,-0.341,0.496],[0.802,-0.348,0.485],[0.8,-0.352,0.486],[0.801,-0.363,0.476],[0.798,-0.38,0.467],[0.803,-0.377,0.462],[0.804,-0.384,0.455],[0.806,-0.381,0.452],[0.802,-0.398,0.446],[0.803,-0.408,0.434],[0.804,-0.414,0.426],[0.805,-0.427,0.413],[0.801,-0.439,0.406],[0.798,-0.448,0.404],[0.793,-0.458,0.402],[0.79,-0.471,0.393],[0.783,-0.485,0.39],[0.778,-0.492,0.391],[0.769,-0.505,0.391],[0.765,-0.514,0.388],[0.758,-0.525,0.388],[0.747,-0.538,0.39],[0.738,-0.545,0.397],[0.729,-0.557,0.398],[0.723,-0.564,0.4],[0.713,-0.576,0.4],[0.706,-0.583,0.402],[0.697,-0.594,0.401],[0.69,-0.603,0.399],[0.688,-0.608,0.397],[0.681,-0.613,0.402],[0.672,-0.613,0.415],[0.662,-0.619,0.423],[0.655,-0.624,0.426],[0.646,-0.63,0.431],[0.644,-0.624,0.443],[0.641,-0.621,0.451],[0.647,-0.614,0.452],[0.641,-0.617,0.457],[0.627,-0.627,0.462],[0.623,-0.623,0.474],[0.619,-0.621,0.481],[0.615,-0.62,0.487],[0.609,-0.616,0.5],[0.608,-0.607,0.511],[0.613,-0.597,0.518],[0.615,-0.59,0.524],[0.613,-0.584,0.532],[0.605,-0.582,0.543],[0.612,-0.575,0.542],[0.615,-0.565,0.55],[0.605,-0.575,0.551],[0.596,-0.577,0.559],[0.605,-0.569,0.557],[0.61,-0.561,0.559],[0.618,-0.554,0.558],[0.622,-0.543,0.564],[0.608,-0.556,0.567],[0.599,-0.561,0.571],[0.59,-0.572,0.57],[0.585,-0.566,0.581],[0.589,-0.558,0.584],[0.588,-0.548,0.596],[0.584,-0.542,0.603],[0.588,-0.539,0.603],[0.578,-0.53,0.62],[0.571,-0.53,0.627],[0.563,-0.522,0.64],[0.542,-0.524,0.657],[0.525,-0.529,0.666],[0.51,-0.534,0.674]],[[-0.142,0.131,0.981],[-0.145,0.113,0.983],[-0.152,0.108,0.983],[-0.167,0.104,0.981],[-0.175,0.118,0.978],[-0.177,0.143,0.974],[-0.169,0.171,0.971],[-0.157,0.161,0.974],[-0.15,0.149,0.977]],[[0.634,-0.049,0.772],[0.648,-0.054,0.76],[0.652,-0.067,0.755],[0.641,-0.06,0.765],[0.63,-0.059,0.774],[0.623,-0.06,0.78],[0.613,-0.059,0.788],[0.617,-0.05,0.786]],[[0.599,-0.066,0.798],[0.589,-0.063,0.806],[0.587,-0.055,0.808],[0.601,-0.055,0.797],[0.604,-0.06,0.795]],[[0.614,0.038,0.788],[0.615,0.028,0.788],[0.624,0.027,0.781],[0.625,0.02,0.78],[0.624,0.005,0.781],[0.617,0.006,0.787],[0.615,-0.004,0.788],[0.621,-0.014,0.784],[0.617,-0.016,0.787],[0.611,-0.005,0.791],[0.607,0.018,0.794],[0.61,0.032,0.792]],[[0.544,0.015,0.839],[0.56,0.016,0.828],[0.574,0.029,0.818],[0.577,0.025,0.816],[0.565,0.007,0.825],[0.555,0.004,0.832],[0.541,0.008,0.841],[0.516,0.007,0.857],[0.503,0.004,0.864],[0.501,-0.009,0.866],[0.514,-0.025,0.857],[0.522,-0.017,0.853],[0.55,-0.011,0.835],[0.548,-0.019,0.836],[0.542,-0.016,0.84],[0.535,-0.026,0.844],[0.522,-0.033,0.852],[0.536,-0.056,0.843],[0.533,-0.062,0.844],[0.545,-0.082,0.834],[0.545,-0.093,0.833],[0.537,-0.098,0.838],[0.531,-0.092,0.842],[0.539,-0.078,0.839],[0.524,-0.085,0.847],[0.521,-0.08,0.85],[0.523,-0.073,0.849],[0.512,-0.063,0.856],[0.514,-0.046,0.857],[0.504,-0.051,0.862],[0.505,-0.071,0.86],[0.504,-0.096,0.858],[0.494,-0.099,0.864],[0.488,-0.094,0.868],[0.493,-0.078,0.866],[0.491,-0.061,0.869],[0.485,-0.061,0.872],[0.481,-0.049,0.876],[0.487,-0.037,0.872],[0.49,-0.024,0.872],[0.497,0.003,0.868],[0.501,0.01,0.866],[0.513,0.023,0.858],[0.525,0.018,0.851]],[[0.496,-0.178,0.85],[0.478,-0.166,0.863],[0.492,-0.163,0.855],[0.499,-0.168,0.85],[0.504,-0.173,0.846],[0.503,-0.178,0.846]],[[0.514,-0.148,0.845],[0.524,-0.147,0.839],[0.538,-0.141,0.831],[0.535,-0.15,0.831],[0.513,-0.155,0.845],[0.493,-0.153,0.856],[0.493,-0.147,0.857],[0.506,-0.143,0.851]],[[0.468,-0.145,0.871],[0.478,-0.144,0.867],[0.481,-0.151,0.863],[0.463,-0.155,0.873],[0.453,-0.157,0.878],[0.444,-0.157,0.882],[0.45,-0.147,0.881],[0.459,-0.147,0.876],[0.463,-0.141,0.875]],[[0.315,-0.112,0.942],[0.317,-0.118,0.941],[0.348,-0.12,0.93],[0.352,-0.113,0.929],[0.382,-0.121,0.916],[0.387,-0.132,0.913],[0.411,-0.135,0.902],[0.429,-0.146,0.891],[0.411,-0.152,0.899],[0.394,-0.145,0.908],[0.38,-0.146,0.914],[0.363,-0.144,0.921],[0.348,-0.141,0.927],[0.33,-0.135,0.934],[0.318,-0.133,0.939],[0.311,-0.135,0.941],[0.281,-0.128,0.951],[0.278,-0.121,0.953],[0.263,-0.119,0.957],[0.275,-0.103,0.956],[0.295,-0.104,0.95],[0.308,-0.111,0.945]],[[0.248,-0.019,0.969],[0.251,-0.031,0.968],[0.257,-0.041,0.966],[0.269,-0.042,0.962],[0.277,-0.053,0.959],[0.272,-0.075,0.959],[0.271,-0.102,0.957],[0.253,-0.102,0.962],[0.239,-0.088,0.967],[0.217,-0.074,0.973],[0.21,-0.063,0.976],[0.197,-0.049,0.979],[0.189,-0.036,0.981],[0.176,-0.011,0.984],[0.161,0.003,0.987],[0.156,0.018,0.988],[0.149,0.032,0.988],[0.134,0.043,0.99],[0.125,0.058,0.991],[0.112,0.067,0.991],[0.093,0.087,0.992],[0.092,0.095,0.991],[0.103,0.095,0.99],[0.13,0.091,0.987],[0.145,0.074,0.987],[0.159,0.063,0.985],[0.168,0.055,0.984],[0.185,0.037,0.982],[0.202,0.036,0.979],[0.216,0.024,0.976],[0.226,0.01,0.974],[0.239,0.002,0.971],[0.232,-0.012,0.973],[0.242,-0.018,0.97]],[[0.5,0.22,0.838],[0.491,0.233,0.839],[0.504,0.232,0.832],[0.509,0.226,0.83],[0.507,0.211,0.835]],[[0.53,0.173,0.83],[0.534,0.178,0.827],[0.534,0.189,0.824],[0.542,0.19,0.819],[0.541,0.178,0.822],[0.55,0.195,0.812],[0.55,0.178,0.816],[0.545,0.173,0.82],[0.542,0.162,0.825],[0.538,0.157,0.828],[0.528,0.169,0.832]],[[0.587,0.146,0.796],[0.589,0.135,0.797],[0.591,0.125,0.797],[0.587,0.109,0.802],[0.581,0.127,0.804],[0.575,0.118,0.81],[0.58,0.105,0.808],[0.576,0.097,0.811],[0.559,0.107,0.822],[0.554,0.12,0.824],[0.558,0.128,0.82],[0.548,0.136,0.825],[0.544,0.129,0.829],[0.537,0.13,0.833],[0.527,0.12,0.841],[0.525,0.125,0.842],[0.529,0.14,0.837],[0.538,0.145,0.83],[0.545,0.151,0.824],[0.551,0.143,0.822],[0.562,0.148,0.814],[0.563,0.156,0.811],[0.573,0.156,0.804],[0.571,0.17,0.803],[0.583,0.161,0.796],[0.585,0.153,0.796]],[[0.317,0.312,0.896],[0.303,0.317,0.898],[0.301,0.332,0.894],[0.308,0.339,0.889],[0.324,0.344,0.881],[0.333,0.343,0.878],[0.338,0.337,0.879],[0.332,0.33,0.884],[0.329,0.32,0.888]],[[0.48,0.413,0.774],[0.477,0.387,0.789],[0.474,0.374,0.797],[0.464,0.388,0.796],[0.46,0.4,0.793],[0.464,0.415,0.782],[0.472,0.427,0.771],[0.48,0.423,0.769]],[[0.61,0.632,0.478],[0.611,0.618,0.495],[0.619,0.604,0.502],[0.622,0.593,0.511],[0.628,0.586,0.513],[0.629,0.576,0.523],[0.62,0.569,0.54],[0.604,0.568,0.559],[0.598,0.551,0.582],[0.588,0.557,0.586],[0.583,0.568,0.581],[0.566,0.565,0.6],[0.557,0.558,0.615],[0.544,0.558,0.627],[0.56,0.547,0.622],[0.563,0.522,0.641],[0.559,0.515,0.65],[0.551,0.521,0.652],[0.548,0.535,0.643],[0.539,0.539,0.647],[0.531,0.549,0.646],[0.539,0.553,0.635],[0.541,0.563,0.625],[0.549,0.57,0.612],[0.552,0.58,0.6],[0.57,0.584,0.578],[0.582,0.581,0.569],[0.579,0.606,0.545],[0.589,0.599,0.542],[0.595,0.613,0.52],[0.597,0.619,0.511],[0.592,0.635,0.496],[0.581,0.65,0.49],[0.579,0.659,0.481],[0.586,0.661,0.468],[0.603,0.643,0.473]],[[0.587,0.694,0.417],[0.588,0.699,0.407],[0.6,0.685,0.412],[0.592,0.682,0.429],[0.595,0.669,0.445],[0.576,0.678,0.457],[0.582,0.664,0.47],[0.573,0.664,0.481],[0.563,0.676,0.475],[0.56,0.686,0.465],[0.568,0.687,0.454],[0.557,0.704,0.44],[0.552,0.714,0.431],[0.571,0.701,0.428],[0.58,0.697,0.422]],[[-0.747,0.655,0.114],[-0.743,0.659,0.12],[-0.749,0.649,0.13],[-0.764,0.632,0.13],[-0.765,0.633,0.124],[-0.769,0.628,0.119],[-0.767,0.632,0.114],[-0.754,0.648,0.111],[-0.748,0.655,0.107]],[[-0.727,0.677,0.112],[-0.721,0.682,0.119],[-0.731,0.671,0.123],[-0.741,0.661,0.12],[-0.739,0.664,0.114],[-0.732,0.672,0.11]],[[-0.545,0.83,0.119],[-0.551,0.825,0.124],[-0.564,0.817,0.121],[-0.558,0.823,0.109],[-0.552,0.827,0.106]],[[-0.52,0.853,-0.038],[-0.52,0.854,-0.027],[-0.535,0.844,-0.038],[-0.534,0.845,-0.028],[-0.534,0.845,-0.018],[-0.546,0.837,-0.021],[-0.559,0.829,-0.03],[-0.56,0.828,-0.02],[-0.579,0.815,-0.011],[-0.581,0.814,-0.004],[-0.597,0.802,0.002],[-0.603,0.798,0.005],[-0.605,0.796,0.018],[-0.614,0.789,0.017],[-0.618,0.786,0.011],[-0.625,0.78,0.016],[-0.632,0.775,0.006],[-0.632,0.775,-0.009],[-0.635,0.772,-0.028],[-0.633,0.774,-0.033],[-0.638,0.769,-0.04],[-0.636,0.77,-0.051],[-0.641,0.766,-0.059],[-0.637,0.768,-0.064],[-0.625,0.779,-0.047],[-0.622,0.782,-0.037],[-0.619,0.784,-0.054],[-0.613,0.788,-0.057],[-0.61,0.791,-0.045],[-0.602,0.797,-0.05],[-0.593,0.804,-0.048],[-0.595,0.803,-0.032],[-0.587,0.809,-0.03],[-0.578,0.815,-0.037],[-0.575,0.817,-0.049],[-0.57,0.82,-0.051],[-0.564,0.824,-0.047],[-0.56,0.827,-0.049],[-0.566,0.822,-0.055],[-0.553,0.832,-0.055],[-0.545,0.837,-0.059],[-0.53,0.846,-0.054],[-0.519,0.854,-0.045]],[[-0.387,0.917,-0.1],[-0.396,0.912,-0.104],[-0.409,0.907,-0.099],[-0.418,0.902,-0.111],[-0.422,0.896,-0.136],[-0.423,0.895,-0.143],[-0.417,0.896,-0.152],[-0.405,0.898,-0.17],[-0.401,0.902,-0.16],[-0.388,0.906,-0.172],[-0.39,0.907,-0.159],[-0.386,0.909,-0.158],[-0.376,0.911,-0.17],[-0.369,0.915,-0.161],[-0.371,0.916,-0.151],[-0.385,0.912,-0.144],[-0.38,0.915,-0.131],[-0.387,0.914,-0.124],[-0.383,0.917,-0.111]],[[0.472,0.806,0.357],[0.485,0.796,0.362],[0.496,0.785,0.37],[0.51,0.774,0.375],[0.535,0.754,0.38],[0.522,0.758,0.391],[0.533,0.742,0.408],[0.55,0.729,0.407],[0.557,0.721,0.412],[0.545,0.728,0.415],[0.548,0.719,0.427],[0.539,0.729,0.422],[0.53,0.741,0.414],[0.518,0.753,0.406],[0.512,0.762,0.398],[0.498,0.777,0.386],[0.483,0.787,0.383],[0.469,0.802,0.371],[0.47,0.807,0.359],[0.462,0.811,0.358],[0.463,0.813,0.353]],[[0.471,0.162,0.867],[0.452,0.146,0.88],[0.458,0.158,0.875],[0.469,0.168,0.867],[0.477,0.18,0.86],[0.483,0.197,0.853],[0.487,0.183,0.854],[0.478,0.174,0.861]],[[0.508,0.313,0.803],[0.507,0.306,0.806],[0.514,0.294,0.806],[0.512,0.28,0.812],[0.505,0.274,0.818],[0.504,0.261,0.823],[0.51,0.247,0.824],[0.517,0.246,0.82],[0.523,0.248,0.815],[0.542,0.238,0.806],[0.542,0.229,0.808],[0.547,0.225,0.806],[0.547,0.217,0.809],[0.535,0.225,0.814],[0.528,0.234,0.816],[0.526,0.228,0.82],[0.515,0.238,0.823],[0.502,0.236,0.832],[0.495,0.24,0.835],[0.494,0.247,0.833],[0.498,0.251,0.83],[0.494,0.255,0.832],[0.493,0.249,0.834],[0.484,0.258,0.836],[0.481,0.266,0.836],[0.478,0.282,0.832],[0.485,0.276,0.83],[0.482,0.302,0.822],[0.484,0.317,0.815],[0.493,0.317,0.81],[0.502,0.313,0.806],[0.506,0.317,0.802]],[[0.52,0.198,0.831],[0.517,0.206,0.831],[0.526,0.201,0.826],[0.535,0.201,0.82],[0.536,0.194,0.822],[0.53,0.186,0.827],[0.521,0.181,0.834],[0.52,0.189,0.833]],[[0.568,0.211,0.796],[0.574,0.192,0.796],[0.563,0.196,0.803],[0.564,0.19,0.804],[0.568,0.18,0.803],[0.562,0.176,0.808],[0.56,0.188,0.807],[0.556,0.189,0.81],[0.552,0.199,0.81],[0.561,0.198,0.804],[0.56,0.204,0.803],[0.55,0.217,0.807],[0.563,0.217,0.797]],[[-0.16,-0.797,-0.583],[-0.167,-0.799,-0.577],[-0.179,-0.806,-0.564],[-0.19,-0.81,-0.555],[-0.197,-0.805,-0.559],[-0.204,-0.798,-0.567],[-0.215,-0.794,-0.569],[-0.221,-0.795,-0.565],[-0.222,-0.8,-0.558],[-0.223,-0.807,-0.546],[-0.232,-0.814,-0.533],[-0.244,-0.816,-0.524],[-0.237,-0.821,-0.519],[-0.228,-0.822,-0.523],[-0.225,-0.818,-0.529],[-0.22,-0.822,-0.525],[-0.21,-0.825,-0.524],[-0.206,-0.825,-0.526],[-0.201,-0.824,-0.53],[-0.196,-0.821,-0.536],[-0.186,-0.82,-0.542],[-0.177,-0.814,-0.553],[-0.169,-0.809,-0.564]],[[-0.116,0.987,0.115],[-0.11,0.987,0.117],[-0.107,0.987,0.12],[-0.109,0.986,0.123],[-0.105,0.987,0.121],[-0.101,0.987,0.121],[-0.101,0.987,0.127],[-0.103,0.986,0.128],[-0.107,0.986,0.127],[-0.11,0.986,0.126],[-0.112,0.985,0.128],[-0.117,0.985,0.128],[-0.117,0.986,0.123],[-0.112,0.986,0.12]],[[-0.166,0.96,0.225],[-0.149,0.964,0.22],[-0.145,0.966,0.213],[-0.132,0.969,0.21],[-0.115,0.971,0.208],[-0.101,0.972,0.212],[-0.092,0.974,0.209],[-0.084,0.974,0.21],[-0.084,0.973,0.217],[-0.088,0.971,0.221],[-0.106,0.969,0.223],[-0.121,0.967,0.224],[-0.141,0.963,0.231],[-0.156,0.958,0.241],[-0.172,0.953,0.249],[-0.179,0.949,0.261],[-0.177,0.944,0.279],[-0.181,0.943,0.278],[-0.195,0.944,0.265],[-0.192,0.947,0.259],[-0.197,0.948,0.249],[-0.192,0.951,0.241],[-0.186,0.952,0.242],[-0.181,0.955,0.235],[-0.164,0.959,0.229]],[[-0.153,0.985,0.079],[-0.164,0.983,0.08],[-0.169,0.983,0.072],[-0.17,0.983,0.062],[-0.166,0.984,0.06],[-0.167,0.984,0.056],[-0.16,0.986,0.05],[-0.153,0.987,0.057],[-0.155,0.986,0.062],[-0.15,0.987,0.063],[-0.15,0.986,0.072]],[[-0.191,0.978,0.088],[-0.201,0.976,0.083],[-0.2,0.977,0.076],[-0.195,0.978,0.076],[-0.19,0.979,0.072],[-0.184,0.98,0.078],[-0.19,0.978,0.082]],[[-0.173,0.984,0.047],[-0.167,0.985,0.046],[-0.165,0.985,0.05],[-0.17,0.984,0.056],[-0.178,0.981,0.07],[-0.187,0.98,0.065],[-0.2,0.978,0.067],[-0.204,0.977,0.065],[-0.218,0.974,0.067],[-0.22,0.973,0.063],[-0.212,0.976,0.052],[-0.205,0.977,0.054],[-0.202,0.978,0.047],[-0.189,0.981,0.038],[-0.177,0.984,0.033],[-0.169,0.985,0.04],[-0.174,0.984,0.043]],[[-0.295,0.337,-0.894],[-0.297,0.34,-0.892],[-0.3,0.34,-0.891],[-0.309,0.34,-0.888],[-0.319,0.336,-0.886],[-0.323,0.336,-0.885],[-0.326,0.33,-0.886],[-0.335,0.331,-0.882],[-0.335,0.326,-0.884],[-0.342,0.325,-0.882],[-0.35,0.319,-0.881],[-0.345,0.312,-0.885],[-0.337,0.316,-0.887],[-0.33,0.315,-0.89],[-0.325,0.316,-0.891],[-0.323,0.313,-0.893],[-0.317,0.312,-0.896],[-0.314,0.316,-0.895],[-0.309,0.314,-0.898],[-0.304,0.302,-0.903],[-0.3,0.305,-0.904],[-0.298,0.31,-0.903],[-0.288,0.313,-0.905],[-0.28,0.311,-0.908],[-0.271,0.313,-0.911],[-0.263,0.31,-0.914],[-0.254,0.315,-0.914],[-0.255,0.32,-0.912],[-0.27,0.318,-0.909],[-0.282,0.316,-0.906],[-0.287,0.32,-0.903],[-0.28,0.327,-0.903],[-0.279,0.334,-0.9],[-0.269,0.336,-0.903],[-0.272,0.341,-0.9],[-0.282,0.34,-0.897]],[[-0.761,0.618,0.2],[-0.757,0.619,0.21],[-0.766,0.608,0.208],[-0.769,0.604,0.21],[-0.775,0.597,0.209],[-0.774,0.602,0.198],[-0.774,0.603,0.191],[-0.774,0.61,0.171],[-0.768,0.617,0.171],[-0.765,0.616,0.187]],[[0.562,0.551,0.616],[0.564,0.56,0.607],[0.571,0.558,0.602],[0.572,0.564,0.595],[0.581,0.561,0.589],[0.585,0.556,0.59],[0.583,0.548,0.6],[0.577,0.552,0.602],[0.573,0.549,0.609],[0.574,0.54,0.615],[0.565,0.544,0.62]],[[0.581,-0.147,0.801],[0.59,-0.146,0.794],[0.595,-0.144,0.791],[0.6,-0.146,0.787],[0.594,-0.151,0.79],[0.579,-0.158,0.8],[0.567,-0.163,0.807],[0.557,-0.176,0.812],[0.544,-0.18,0.82],[0.543,-0.178,0.821],[0.544,-0.172,0.821],[0.552,-0.161,0.818],[0.566,-0.155,0.81],[0.568,-0.151,0.809]],[[0.092,-0.996,0],[0.102,-0.995,-0.002],[0.097,-0.995,-0.005],[0.103,-0.995,-0.007],[0.095,-0.995,-0.009],[0.102,-0.995,-0.012],[0.103,-0.995,-0.013],[0.105,-0.994,-0.019],[0.101,-0.995,-0.02],[0.098,-0.995,-0.02],[0.092,-0.996,-0.021],[0.087,-0.996,-0.025],[0.081,-0.996,-0.026],[0.075,-0.997,-0.03],[0.078,-0.996,-0.036],[0.072,-0.997,-0.04],[0.065,-0.997,-0.04],[0.068,-0.997,-0.046],[0.069,-0.996,-0.052],[0.075,-0.996,-0.057],[0.08,-0.995,-0.052],[0.086,-0.995,-0.05],[0.093,-0.994,-0.052],[0.098,-0.994,-0.049],[0.105,-0.993,-0.053],[0.111,-0.992,-0.057],[0.117,-0.991,-0.06],[0.123,-0.99,-0.063],[0.129,-0.99,-0.062],[0.136,-0.989,-0.062],[0.142,-0.988,-0.061],[0.139,-0.988,-0.066],[0.138,-0.988,-0.073],[0.131,-0.989,-0.074],[0.133,-0.988,-0.08],[0.136,-0.987,-0.088],[0.14,-0.986,-0.093],[0.146,-0.985,-0.096],[0.152,-0.984,-0.095],[0.159,-0.983,-0.094],[0.163,-0.983,-0.088],[0.168,-0.982,-0.084],[0.172,-0.982,-0.079],[0.179,-0.981,-0.08],[0.186,-0.979,-0.078],[0.192,-0.978,-0.078],[0.211,-0.974,-0.084],[0.209,-0.974,-0.085],[0.202,-0.976,-0.086],[0.201,-0.975,-0.092],[0.201,-0.975,-0.099],[0.193,-0.976,-0.099],[0.191,-0.976,-0.105],[0.192,-0.975,-0.111],[0.194,-0.974,-0.118],[0.196,-0.973,-0.124],[0.194,-0.972,-0.13],[0.199,-0.971,-0.134],[0.205,-0.969,-0.136],[0.21,-0.968,-0.14],[0.209,-0.967,-0.147],[0.203,-0.968,-0.146],[0.202,-0.967,-0.153],[0.202,-0.966,-0.16],[0.198,-0.966,-0.165],[0.195,-0.966,-0.171],[0.194,-0.965,-0.178],[0.193,-0.964,-0.184],[0.192,-0.963,-0.191],[0.189,-0.963,-0.192],[0.185,-0.963,-0.194],[0.182,-0.963,-0.2],[0.175,-0.964,-0.202],[0.171,-0.963,-0.207],[0.167,-0.963,-0.212],[0.161,-0.963,-0.215],[0.155,-0.964,-0.218],[0.15,-0.964,-0.222],[0.144,-0.964,-0.225],[0.138,-0.964,-0.229],[0.133,-0.964,-0.232],[0.131,-0.962,-0.239],[0.127,-0.961,-0.244],[0.12,-0.962,-0.244],[0.116,-0.962,-0.249],[0.114,-0.96,-0.256],[0.109,-0.961,-0.253],[0.105,-0.963,-0.248],[0.1,-0.965,-0.244],[0.097,-0.963,-0.25],[0.09,-0.965,-0.246],[0.084,-0.966,-0.247],[0.077,-0.967,-0.244],[0.071,-0.966,-0.247],[0.067,-0.966,-0.251],[0.06,-0.966,-0.252],[0.053,-0.966,-0.251],[0.047,-0.967,-0.249],[0.046,-0.965,-0.257],[0.05,-0.964,-0.262],[0.053,-0.962,-0.267],[0.059,-0.962,-0.267],[0.064,-0.96,-0.273],[0.066,-0.958,-0.279],[0.071,-0.954,-0.29],[0.066,-0.955,-0.289],[0.059,-0.955,-0.289],[0.053,-0.955,-0.292],[0.047,-0.956,-0.29],[0.041,-0.957,-0.286],[0.038,-0.959,-0.28],[0.031,-0.959,-0.28],[0.025,-0.959,-0.283],[0.018,-0.958,-0.287],[0.012,-0.957,-0.289],[0.007,-0.958,-0.286],[0,-0.958,-0.287],[-0.004,-0.954,-0.3],[-0.008,-0.956,-0.292],[-0.014,-0.957,-0.289],[-0.02,-0.957,-0.29],[-0.024,-0.959,-0.283],[-0.03,-0.959,-0.282],[-0.036,-0.959,-0.279],[-0.041,-0.961,-0.275],[-0.046,-0.959,-0.281],[-0.049,-0.957,-0.286],[-0.053,-0.959,-0.279],[-0.06,-0.958,-0.279],[-0.064,-0.959,-0.274],[-0.066,-0.961,-0.268],[-0.072,-0.961,-0.268],[-0.078,-0.96,-0.27],[-0.084,-0.958,-0.273],[-0.091,-0.958,-0.273],[-0.098,-0.957,-0.273],[-0.105,-0.956,-0.273],[-0.111,-0.955,-0.274],[-0.116,-0.954,-0.278],[-0.12,-0.951,-0.284],[-0.122,-0.949,-0.291],[-0.123,-0.947,-0.297],[-0.123,-0.945,-0.304],[-0.124,-0.942,-0.311],[-0.125,-0.94,-0.317],[-0.127,-0.938,-0.323],[-0.13,-0.936,-0.328],[-0.135,-0.933,-0.333],[-0.139,-0.931,-0.338],[-0.143,-0.928,-0.344],[-0.144,-0.925,-0.351],[-0.146,-0.923,-0.357],[-0.152,-0.92,-0.362],[-0.157,-0.918,-0.365],[-0.164,-0.915,-0.369],[-0.17,-0.913,-0.371],[-0.177,-0.911,-0.373],[-0.183,-0.908,-0.378],[-0.188,-0.906,-0.38],[-0.194,-0.904,-0.382],[-0.201,-0.903,-0.379],[-0.208,-0.901,-0.381],[-0.214,-0.899,-0.381],[-0.22,-0.898,-0.38],[-0.227,-0.896,-0.38],[-0.233,-0.894,-0.382],[-0.24,-0.893,-0.381],[-0.241,-0.895,-0.375],[-0.236,-0.898,-0.372],[-0.227,-0.9,-0.372],[-0.223,-0.902,-0.371],[-0.219,-0.9,-0.376],[-0.213,-0.901,-0.378],[-0.206,-0.903,-0.377],[-0.2,-0.905,-0.376],[-0.194,-0.907,-0.374],[-0.191,-0.91,-0.369],[-0.188,-0.913,-0.363],[-0.189,-0.915,-0.357],[-0.183,-0.917,-0.356],[-0.176,-0.917,-0.358],[-0.171,-0.919,-0.354],[-0.165,-0.922,-0.352],[-0.158,-0.924,-0.347],[-0.155,-0.927,-0.342],[-0.154,-0.93,-0.335],[-0.155,-0.932,-0.329],[-0.158,-0.933,-0.323],[-0.16,-0.935,-0.317],[-0.159,-0.937,-0.31],[-0.158,-0.94,-0.304],[-0.156,-0.942,-0.297],[-0.156,-0.944,-0.291],[-0.155,-0.946,-0.285],[-0.148,-0.951,-0.271],[-0.146,-0.953,-0.265],[-0.144,-0.955,-0.259],[-0.142,-0.957,-0.253],[-0.137,-0.96,-0.245],[-0.131,-0.962,-0.24],[-0.126,-0.963,-0.237],[-0.12,-0.964,-0.238],[-0.115,-0.966,-0.233],[-0.11,-0.967,-0.229],[-0.101,-0.969,-0.226],[-0.095,-0.969,-0.226],[-0.089,-0.97,-0.225],[-0.082,-0.971,-0.223],[-0.077,-0.973,-0.218],[-0.07,-0.973,-0.219],[-0.064,-0.973,-0.222],[-0.057,-0.973,-0.223],[-0.051,-0.973,-0.224],[-0.05,-0.975,-0.217],[-0.056,-0.975,-0.213],[-0.058,-0.977,-0.207],[-0.059,-0.978,-0.201],[-0.054,-0.979,-0.197],[-0.048,-0.979,-0.2],[-0.042,-0.979,-0.197],[-0.04,-0.981,-0.19],[-0.039,-0.982,-0.184],[-0.041,-0.983,-0.177],[-0.041,-0.984,-0.171],[-0.043,-0.986,-0.164],[-0.048,-0.986,-0.159],[-0.051,-0.987,-0.153],[-0.053,-0.988,-0.147],[-0.056,-0.989,-0.14],[-0.061,-0.989,-0.135],[-0.065,-0.99,-0.128],[-0.066,-0.99,-0.122],[-0.067,-0.991,-0.115],[-0.065,-0.992,-0.106],[-0.062,-0.993,-0.1],[-0.068,-0.992,-0.104],[-0.073,-0.992,-0.106],[-0.08,-0.991,-0.108],[-0.087,-0.99,-0.109],[-0.093,-0.99,-0.11],[-0.098,-0.99,-0.106],[-0.101,-0.99,-0.1],[-0.101,-0.99,-0.094],[-0.108,-0.989,-0.097],[-0.114,-0.989,-0.098],[-0.118,-0.989,-0.093],[-0.124,-0.988,-0.091],[-0.13,-0.987,-0.089],[-0.136,-0.987,-0.086],[-0.141,-0.987,-0.082],[-0.147,-0.986,-0.08],[-0.152,-0.985,-0.085],[-0.156,-0.984,-0.089],[-0.162,-0.982,-0.092],[-0.158,-0.983,-0.097],[-0.152,-0.983,-0.101],[-0.149,-0.983,-0.107],[-0.153,-0.982,-0.111],[-0.164,-0.979,-0.118],[-0.168,-0.979,-0.119],[-0.174,-0.978,-0.117],[-0.181,-0.977,-0.114],[-0.188,-0.976,-0.113],[-0.194,-0.975,-0.111],[-0.202,-0.973,-0.111],[-0.207,-0.972,-0.108],[-0.212,-0.972,-0.104],[-0.214,-0.971,-0.102],[-0.217,-0.971,-0.096],[-0.222,-0.971,-0.092],[-0.227,-0.97,-0.088],[-0.232,-0.969,-0.085],[-0.238,-0.968,-0.081],[-0.245,-0.966,-0.077],[-0.251,-0.965,-0.075],[-0.257,-0.964,-0.072],[-0.264,-0.962,-0.073],[-0.266,-0.961,-0.079],[-0.273,-0.959,-0.079],[-0.279,-0.957,-0.077],[-0.284,-0.956,-0.073],[-0.289,-0.955,-0.068],[-0.295,-0.953,-0.064],[-0.303,-0.951,-0.062],[-0.311,-0.949,-0.061],[-0.316,-0.947,-0.057],[-0.316,-0.947,-0.051],[-0.311,-0.949,-0.047],[-0.311,-0.949,-0.041],[-0.318,-0.947,-0.041],[-0.324,-0.945,-0.039],[-0.323,-0.946,-0.033],[-0.317,-0.948,-0.031],[-0.317,-0.948,-0.024],[-0.32,-0.947,-0.017],[-0.323,-0.946,-0.01],[-0.322,-0.947,-0.004],[-0.315,-0.949,-0.001],[-0.32,-0.947,0.005],[-0.323,-0.946,0.011],[-0.325,-0.945,0.017],[-0.327,-0.945,0.024],[-0.331,-0.943,0.03],[-0.332,-0.942,0.037],[-0.335,-0.941,0.042],[-0.341,-0.939,0.046],[-0.336,-0.941,0.05],[-0.337,-0.94,0.057],[-0.329,-0.943,0.059],[-0.322,-0.945,0.062],[-0.324,-0.943,0.069],[-0.33,-0.941,0.073],[-0.333,-0.94,0.08],[-0.33,-0.94,0.087],[-0.324,-0.942,0.088],[-0.328,-0.94,0.094],[-0.328,-0.939,0.101],[-0.327,-0.939,0.107],[-0.325,-0.939,0.113],[-0.32,-0.94,0.119],[-0.317,-0.94,0.125],[-0.311,-0.942,0.125],[-0.305,-0.944,0.127],[-0.305,-0.943,0.134],[-0.303,-0.943,0.14],[-0.3,-0.943,0.146],[-0.298,-0.942,0.152],[-0.297,-0.942,0.159],[-0.296,-0.941,0.165],[-0.297,-0.939,0.172],[-0.297,-0.938,0.178],[-0.295,-0.938,0.184],[-0.296,-0.936,0.19],[-0.302,-0.933,0.198],[-0.304,-0.93,0.204],[-0.298,-0.931,0.208],[-0.292,-0.934,0.207],[-0.286,-0.935,0.209],[-0.283,-0.935,0.215],[-0.276,-0.937,0.215],[-0.27,-0.938,0.216],[-0.269,-0.937,0.223],[-0.273,-0.934,0.229],[-0.272,-0.933,0.235],[-0.271,-0.931,0.244],[-0.269,-0.93,0.25],[-0.266,-0.929,0.258],[-0.265,-0.928,0.264],[-0.264,-0.926,0.27],[-0.262,-0.925,0.276],[-0.256,-0.925,0.279],[-0.256,-0.923,0.288],[-0.255,-0.921,0.294],[-0.25,-0.921,0.298],[-0.248,-0.92,0.304],[-0.251,-0.917,0.309],[-0.249,-0.915,0.316],[-0.246,-0.914,0.323],[-0.242,-0.913,0.329],[-0.238,-0.912,0.334],[-0.232,-0.913,0.336],[-0.226,-0.913,0.339],[-0.218,-0.915,0.338],[-0.214,-0.918,0.333],[-0.206,-0.921,0.332],[-0.2,-0.922,0.33],[-0.192,-0.923,0.333],[-0.186,-0.925,0.331],[-0.18,-0.927,0.33],[-0.174,-0.927,0.332],[-0.17,-0.926,0.337],[-0.168,-0.923,0.345],[-0.161,-0.925,0.345],[-0.154,-0.925,0.346],[-0.148,-0.926,0.347],[-0.141,-0.927,0.348],[-0.135,-0.927,0.35],[-0.124,-0.933,0.337],[-0.123,-0.935,0.333],[-0.121,-0.938,0.325],[-0.125,-0.939,0.319],[-0.127,-0.942,0.312],[-0.124,-0.944,0.306],[-0.118,-0.944,0.309],[-0.117,-0.946,0.303],[-0.117,-0.948,0.296],[-0.117,-0.95,0.289],[-0.111,-0.952,0.285],[-0.105,-0.952,0.286],[-0.1,-0.952,0.291],[-0.099,-0.949,0.298],[-0.099,-0.947,0.304],[-0.098,-0.946,0.31],[-0.096,-0.944,0.316],[-0.096,-0.942,0.322],[-0.096,-0.939,0.331],[-0.092,-0.938,0.333],[-0.086,-0.938,0.335],[-0.081,-0.937,0.339],[-0.075,-0.936,0.343],[-0.073,-0.934,0.35],[-0.073,-0.932,0.356],[-0.07,-0.929,0.363],[-0.064,-0.928,0.368],[-0.059,-0.926,0.372],[-0.057,-0.924,0.378],[-0.053,-0.923,0.381],[-0.049,-0.922,0.384],[-0.042,-0.923,0.384],[-0.036,-0.922,0.386],[-0.029,-0.921,0.388],[-0.022,-0.922,0.388],[-0.017,-0.92,0.392],[-0.014,-0.915,0.403],[-0.011,-0.917,0.399],[-0.008,-0.92,0.391],[-0.002,-0.922,0.388],[0.004,-0.922,0.387],[0.011,-0.921,0.389],[0.018,-0.922,0.387],[0.024,-0.922,0.387],[0.028,-0.921,0.388],[0.034,-0.922,0.387],[0.039,-0.923,0.383],[0.045,-0.922,0.384],[0.052,-0.922,0.383],[0.059,-0.921,0.384],[0.065,-0.922,0.381],[0.071,-0.92,0.386],[0.075,-0.918,0.39],[0.081,-0.916,0.394],[0.092,-0.91,0.403],[0.096,-0.911,0.4],[0.1,-0.913,0.395],[0.103,-0.916,0.388],[0.109,-0.92,0.376],[0.116,-0.92,0.374],[0.121,-0.92,0.372],[0.129,-0.919,0.372],[0.137,-0.918,0.371],[0.144,-0.917,0.373],[0.15,-0.914,0.376],[0.157,-0.914,0.373],[0.164,-0.913,0.375],[0.167,-0.914,0.369],[0.169,-0.916,0.363],[0.171,-0.918,0.357],[0.178,-0.918,0.354],[0.18,-0.92,0.348],[0.186,-0.922,0.341],[0.192,-0.922,0.335],[0.199,-0.922,0.333],[0.206,-0.92,0.334],[0.213,-0.917,0.336],[0.219,-0.917,0.334],[0.223,-0.918,0.328],[0.228,-0.919,0.323],[0.234,-0.917,0.321],[0.239,-0.917,0.318],[0.243,-0.918,0.313],[0.247,-0.919,0.308],[0.254,-0.918,0.306],[0.261,-0.917,0.303],[0.267,-0.916,0.299],[0.273,-0.916,0.293],[0.279,-0.916,0.29],[0.284,-0.915,0.286],[0.291,-0.912,0.291],[0.296,-0.909,0.295],[0.296,-0.911,0.289],[0.292,-0.914,0.283],[0.288,-0.917,0.277],[0.287,-0.919,0.271],[0.288,-0.92,0.265],[0.294,-0.92,0.26],[0.3,-0.92,0.253],[0.305,-0.919,0.249],[0.311,-0.919,0.242],[0.315,-0.919,0.237],[0.32,-0.919,0.229],[0.323,-0.92,0.222],[0.322,-0.922,0.215],[0.316,-0.925,0.213],[0.314,-0.926,0.207],[0.315,-0.928,0.199],[0.315,-0.93,0.191],[0.317,-0.931,0.182],[0.319,-0.932,0.173],[0.32,-0.933,0.166],[0.323,-0.933,0.16],[0.329,-0.931,0.159],[0.328,-0.933,0.152],[0.325,-0.935,0.145],[0.324,-0.936,0.139],[0.325,-0.937,0.131],[0.326,-0.937,0.124],[0.321,-0.94,0.119],[0.319,-0.941,0.111],[0.315,-0.943,0.105],[0.315,-0.944,0.098],[0.317,-0.944,0.092],[0.318,-0.944,0.086],[0.32,-0.944,0.079],[0.32,-0.945,0.072],[0.319,-0.945,0.065],[0.317,-0.947,0.059],[0.315,-0.948,0.053],[0.31,-0.949,0.048],[0.304,-0.952,0.048],[0.298,-0.953,0.049],[0.29,-0.956,0.051],[0.284,-0.958,0.051],[0.276,-0.96,0.052],[0.273,-0.96,0.058],[0.266,-0.962,0.06],[0.261,-0.963,0.065],[0.254,-0.965,0.065],[0.248,-0.967,0.067],[0.242,-0.968,0.068],[0.234,-0.97,0.068],[0.228,-0.971,0.067],[0.221,-0.973,0.065],[0.215,-0.975,0.064],[0.209,-0.976,0.06],[0.203,-0.978,0.057],[0.198,-0.979,0.054],[0.197,-0.979,0.047],[0.19,-0.981,0.044],[0.186,-0.981,0.049],[0.181,-0.982,0.053],[0.179,-0.982,0.059],[0.168,-0.984,0.058],[0.161,-0.985,0.056],[0.154,-0.986,0.055],[0.148,-0.988,0.054],[0.143,-0.988,0.049],[0.137,-0.99,0.046],[0.132,-0.99,0.042],[0.127,-0.991,0.037],[0.123,-0.992,0.033],[0.118,-0.993,0.028],[0.114,-0.993,0.022],[0.106,-0.994,0.02],[0.103,-0.995,0.014],[0.102,-0.995,0.013],[0.097,-0.995,0.011],[0.102,-0.995,0.007],[0.096,-0.995,0.003]],[[-0.298,-0.786,-0.541],[-0.313,-0.78,-0.542],[-0.319,-0.783,-0.534],[-0.328,-0.778,-0.536],[-0.332,-0.783,-0.526],[-0.327,-0.787,-0.524],[-0.312,-0.79,-0.528],[-0.31,-0.786,-0.534],[-0.299,-0.791,-0.533]],[[-0.238,-0.75,0.617],[-0.229,-0.754,0.616],[-0.218,-0.755,0.618],[-0.217,-0.758,0.615],[-0.218,-0.763,0.609],[-0.234,-0.764,0.602],[-0.237,-0.757,0.608],[-0.237,-0.753,0.614]],[[0.953,-0.301,0.031],[0.954,-0.298,0.027],[0.953,-0.303,0.021],[0.95,-0.312,0.024],[0.949,-0.314,0.034],[0.949,-0.312,0.043],[0.951,-0.304,0.045],[0.954,-0.299,0.039]],[[-0.466,0.187,-0.865],[-0.475,0.189,-0.86],[-0.478,0.188,-0.858],[-0.478,0.176,-0.86],[-0.466,0.174,-0.868],[-0.463,0.175,-0.869],[-0.467,0.18,-0.866]],[[0.854,0.343,-0.391],[0.853,0.342,-0.394],[0.853,0.34,-0.397],[0.853,0.334,-0.401],[0.853,0.333,-0.401],[0.857,0.33,-0.396],[0.86,0.327,-0.391],[0.862,0.324,-0.389],[0.863,0.327,-0.385],[0.861,0.331,-0.385],[0.861,0.337,-0.382],[0.86,0.339,-0.382],[0.858,0.342,-0.385],[0.857,0.345,-0.383],[0.856,0.346,-0.384],[0.856,0.346,-0.385]],[[0.854,0.355,-0.38],[0.855,0.353,-0.379],[0.858,0.351,-0.375],[0.858,0.355,-0.372],[0.858,0.356,-0.37],[0.858,0.357,-0.369],[0.857,0.359,-0.371],[0.855,0.357,-0.376]],[[0.857,0.361,-0.368],[0.858,0.359,-0.368],[0.861,0.36,-0.36],[0.86,0.362,-0.36]],[[0.862,0.37,-0.348],[0.861,0.369,-0.349],[0.862,0.364,-0.354],[0.862,0.363,-0.354],[0.863,0.363,-0.352],[0.865,0.363,-0.347],[0.864,0.367,-0.345]],[[0.866,0.378,-0.326],[0.868,0.374,-0.327],[0.869,0.373,-0.326],[0.87,0.376,-0.32],[0.869,0.377,-0.321],[0.868,0.378,-0.323]],[[-0.185,0.426,-0.886],[-0.19,0.425,-0.885],[-0.197,0.412,-0.89],[-0.198,0.403,-0.894],[-0.194,0.402,-0.895],[-0.189,0.411,-0.892],[-0.183,0.416,-0.891]],[[-0.171,0.451,-0.876],[-0.178,0.452,-0.874],[-0.188,0.452,-0.872],[-0.189,0.447,-0.874],[-0.172,0.445,-0.879]],[[-0.188,0.455,-0.871],[-0.201,0.448,-0.871],[-0.2,0.436,-0.877],[-0.197,0.438,-0.877],[-0.196,0.447,-0.873],[-0.189,0.453,-0.871]],[[-0.299,0.732,-0.613],[-0.305,0.726,-0.616],[-0.314,0.724,-0.614],[-0.323,0.725,-0.608],[-0.321,0.72,-0.616],[-0.317,0.719,-0.619],[-0.301,0.724,-0.621],[-0.296,0.728,-0.618]],[[-0.488,0.702,0.518],[-0.471,0.715,0.517],[-0.461,0.717,0.523],[-0.452,0.724,0.521],[-0.441,0.727,0.527],[-0.427,0.732,0.531],[-0.421,0.729,0.54],[-0.411,0.73,0.546],[-0.414,0.722,0.554],[-0.423,0.71,0.562],[-0.431,0.712,0.554],[-0.44,0.71,0.55],[-0.446,0.701,0.556],[-0.455,0.702,0.548],[-0.457,0.698,0.551],[-0.454,0.695,0.558],[-0.456,0.684,0.57],[-0.447,0.679,0.582],[-0.447,0.675,0.587],[-0.453,0.669,0.589],[-0.454,0.666,0.592],[-0.455,0.658,0.6],[-0.449,0.667,0.594],[-0.439,0.671,0.598],[-0.44,0.663,0.606],[-0.436,0.655,0.617],[-0.448,0.651,0.613],[-0.456,0.654,0.603],[-0.464,0.643,0.609],[-0.457,0.642,0.615],[-0.465,0.633,0.619],[-0.458,0.629,0.628],[-0.467,0.614,0.636],[-0.469,0.605,0.644],[-0.472,0.601,0.645],[-0.491,0.598,0.634],[-0.505,0.6,0.62],[-0.509,0.607,0.61],[-0.518,0.61,0.6],[-0.516,0.62,0.591],[-0.513,0.627,0.587],[-0.507,0.63,0.588],[-0.503,0.635,0.587],[-0.496,0.645,0.582],[-0.487,0.646,0.588],[-0.488,0.65,0.583],[-0.492,0.65,0.579],[-0.492,0.66,0.568],[-0.493,0.667,0.559],[-0.494,0.682,0.539],[-0.488,0.69,0.534]],[[-0.277,0.765,-0.582],[-0.28,0.766,-0.579],[-0.295,0.763,-0.575],[-0.308,0.758,-0.575],[-0.309,0.756,-0.577],[-0.304,0.756,-0.58],[-0.289,0.759,-0.583]],[[-0.079,0.884,-0.461],[-0.081,0.886,-0.456],[-0.084,0.886,-0.456],[-0.087,0.884,-0.459],[-0.085,0.88,-0.467],[-0.081,0.881,-0.467],[-0.079,0.883,-0.463]],[[-0.048,0.887,-0.46],[-0.054,0.89,-0.452],[-0.064,0.89,-0.451],[-0.065,0.889,-0.454],[-0.056,0.884,-0.464],[-0.051,0.884,-0.464]],[[-0.098,0.924,-0.371],[-0.095,0.922,-0.377],[-0.088,0.921,-0.379],[-0.084,0.924,-0.372],[-0.085,0.928,-0.362],[-0.09,0.929,-0.359],[-0.096,0.927,-0.362],[-0.098,0.924,-0.369]],[[0.04,0.938,-0.345],[0.035,0.934,-0.355],[0.04,0.932,-0.36],[0.047,0.934,-0.354],[0.053,0.933,-0.355],[0.06,0.936,-0.347],[0.054,0.938,-0.343],[0.049,0.941,-0.336],[0.043,0.939,-0.342]],[[0.083,0.957,-0.279],[0.079,0.955,-0.287],[0.08,0.949,-0.304],[0.081,0.945,-0.315],[0.074,0.943,-0.326],[0.065,0.94,-0.335],[0.067,0.937,-0.342],[0.077,0.937,-0.342],[0.075,0.934,-0.349],[0.078,0.932,-0.354],[0.089,0.933,-0.349],[0.098,0.935,-0.342],[0.105,0.934,-0.341],[0.118,0.932,-0.342],[0.134,0.931,-0.339],[0.145,0.931,-0.336],[0.145,0.934,-0.328],[0.151,0.935,-0.32],[0.156,0.935,-0.319],[0.157,0.939,-0.304],[0.153,0.94,-0.305],[0.144,0.941,-0.306],[0.136,0.941,-0.31],[0.128,0.942,-0.311],[0.137,0.943,-0.303],[0.149,0.943,-0.298],[0.156,0.943,-0.294],[0.156,0.945,-0.288],[0.141,0.947,-0.288],[0.149,0.947,-0.284],[0.155,0.949,-0.276],[0.145,0.953,-0.267],[0.139,0.955,-0.263],[0.122,0.958,-0.26],[0.119,0.957,-0.265],[0.124,0.955,-0.271],[0.112,0.956,-0.271],[0.108,0.953,-0.281],[0.1,0.956,-0.275],[0.097,0.954,-0.282],[0.098,0.949,-0.299],[0.094,0.951,-0.293],[0.092,0.957,-0.276],[0.087,0.958,-0.275]],[[-0.052,0.955,-0.291],[-0.045,0.958,-0.283],[-0.045,0.96,-0.277],[-0.047,0.96,-0.276],[-0.058,0.96,-0.275],[-0.069,0.957,-0.282],[-0.07,0.955,-0.287],[-0.065,0.956,-0.288],[-0.059,0.956,-0.288],[-0.054,0.955,-0.292]],[[0.219,0.958,0.184],[0.217,0.96,0.177],[0.219,0.961,0.171],[0.229,0.959,0.169],[0.232,0.957,0.171],[0.228,0.957,0.178],[0.22,0.958,0.184]],[[0.215,0.967,0.133],[0.225,0.966,0.126],[0.228,0.965,0.134],[0.223,0.965,0.139],[0.212,0.967,0.143],[0.208,0.968,0.139]],[[0.18,0.971,0.158],[0.188,0.971,0.15],[0.204,0.968,0.143],[0.213,0.965,0.153],[0.202,0.965,0.166],[0.2,0.964,0.174],[0.186,0.967,0.174],[0.179,0.97,0.164]],[[0.035,0.973,-0.229],[0.034,0.973,-0.227],[0.032,0.971,-0.235],[0.033,0.969,-0.244],[0.037,0.966,-0.256],[0.044,0.965,-0.257],[0.049,0.966,-0.253],[0.047,0.969,-0.244],[0.054,0.968,-0.243],[0.051,0.972,-0.231],[0.047,0.972,-0.232],[0.04,0.973,-0.227]],[[0.041,0.983,0.181],[0.052,0.981,0.189],[0.053,0.979,0.196],[0.034,0.978,0.206],[0.036,0.982,0.183],[0.039,0.983,0.181]],[[0.01,0.988,0.156],[0.016,0.988,0.151],[0.022,0.987,0.159],[0.031,0.984,0.175],[0.033,0.981,0.19],[0.026,0.981,0.193],[0.016,0.982,0.189],[0.011,0.983,0.183],[0.008,0.985,0.171],[0.003,0.986,0.168]],[[0.017,0.987,-0.162],[0.015,0.987,-0.157],[0.012,0.988,-0.156],[0.013,0.988,-0.152],[0.006,0.988,-0.152],[0.003,0.987,-0.161],[-0.006,0.986,-0.168],[-0.009,0.984,-0.179],[-0.014,0.983,-0.185],[-0.009,0.982,-0.19],[-0.003,0.979,-0.203],[0.003,0.979,-0.204],[0.01,0.979,-0.202],[0.013,0.981,-0.195],[0.013,0.982,-0.188],[0.01,0.983,-0.184],[0.016,0.983,-0.184],[0.019,0.984,-0.178],[0.02,0.985,-0.17]],[[0.004,0.99,-0.141],[0,0.99,-0.138],[-0.003,0.991,-0.137],[-0.007,0.991,-0.134],[-0.01,0.992,-0.127],[-0.013,0.992,-0.128],[-0.016,0.991,-0.133],[-0.016,0.992,-0.123],[-0.019,0.993,-0.12],[-0.022,0.993,-0.118],[-0.028,0.993,-0.115],[-0.03,0.993,-0.117],[-0.035,0.993,-0.113],[-0.039,0.993,-0.112],[-0.044,0.993,-0.112],[-0.05,0.993,-0.111],[-0.055,0.992,-0.111],[-0.061,0.992,-0.113],[-0.063,0.991,-0.117],[-0.061,0.99,-0.127],[-0.057,0.99,-0.132],[-0.056,0.989,-0.137],[-0.061,0.989,-0.134],[-0.06,0.987,-0.146],[-0.057,0.987,-0.153],[-0.057,0.984,-0.168],[-0.052,0.984,-0.172],[-0.051,0.983,-0.176],[-0.042,0.983,-0.18],[-0.047,0.982,-0.181],[-0.045,0.982,-0.185],[-0.05,0.98,-0.192],[-0.048,0.979,-0.199],[-0.044,0.978,-0.205],[-0.044,0.976,-0.212],[-0.039,0.975,-0.218],[-0.041,0.974,-0.222],[-0.047,0.974,-0.22],[-0.048,0.973,-0.224],[-0.039,0.971,-0.236],[-0.028,0.972,-0.233],[-0.016,0.972,-0.236],[-0.01,0.972,-0.235],[-0.002,0.972,-0.234],[-0.002,0.974,-0.226],[-0.009,0.975,-0.222],[-0.006,0.978,-0.21],[-0.009,0.978,-0.208],[-0.019,0.976,-0.215],[-0.013,0.979,-0.204],[-0.007,0.979,-0.201],[-0.01,0.981,-0.195],[-0.015,0.982,-0.19],[-0.016,0.983,-0.184],[-0.011,0.984,-0.178],[-0.009,0.986,-0.169],[-0.017,0.985,-0.169],[-0.02,0.985,-0.171],[-0.023,0.986,-0.164],[-0.017,0.987,-0.163],[-0.007,0.986,-0.165],[-0.002,0.987,-0.159],[0.001,0.988,-0.152],[0.004,0.989,-0.147]],[[-0.088,0.992,-0.093],[-0.086,0.993,-0.081],[-0.091,0.993,-0.076],[-0.088,0.994,-0.07],[-0.091,0.994,-0.064],[-0.1,0.994,-0.051],[-0.118,0.992,-0.045],[-0.123,0.991,-0.051],[-0.12,0.991,-0.06],[-0.115,0.991,-0.072],[-0.118,0.99,-0.072],[-0.121,0.991,-0.064],[-0.13,0.99,-0.06],[-0.127,0.99,-0.054],[-0.133,0.99,-0.054],[-0.141,0.988,-0.061],[-0.138,0.989,-0.052],[-0.135,0.99,-0.038],[-0.14,0.99,-0.032],[-0.148,0.988,-0.032],[-0.157,0.987,-0.046],[-0.16,0.986,-0.049],[-0.16,0.985,-0.058],[-0.163,0.985,-0.052],[-0.174,0.983,-0.06],[-0.184,0.981,-0.066],[-0.202,0.977,-0.072],[-0.214,0.974,-0.071],[-0.212,0.974,-0.077],[-0.215,0.973,-0.085],[-0.226,0.971,-0.082],[-0.24,0.967,-0.085],[-0.24,0.967,-0.09],[-0.255,0.963,-0.09],[-0.253,0.962,-0.1],[-0.261,0.96,-0.097],[-0.266,0.959,-0.101],[-0.266,0.958,-0.108],[-0.263,0.958,-0.115],[-0.276,0.954,-0.113],[-0.283,0.952,-0.116],[-0.273,0.954,-0.123],[-0.276,0.953,-0.127],[-0.282,0.951,-0.122],[-0.294,0.948,-0.12],[-0.308,0.944,-0.123],[-0.306,0.942,-0.133],[-0.299,0.945,-0.135],[-0.287,0.948,-0.137],[-0.298,0.944,-0.14],[-0.303,0.941,-0.15],[-0.31,0.941,-0.136],[-0.314,0.94,-0.129],[-0.321,0.935,-0.15],[-0.325,0.93,-0.171],[-0.32,0.928,-0.19],[-0.317,0.928,-0.196],[-0.318,0.925,-0.205],[-0.327,0.918,-0.223],[-0.328,0.913,-0.241],[-0.325,0.913,-0.246],[-0.323,0.911,-0.256],[-0.319,0.91,-0.266],[-0.322,0.905,-0.277],[-0.331,0.9,-0.284],[-0.336,0.895,-0.294],[-0.337,0.888,-0.312],[-0.348,0.882,-0.318],[-0.355,0.875,-0.329],[-0.362,0.867,-0.342],[-0.354,0.866,-0.352],[-0.337,0.873,-0.352],[-0.324,0.873,-0.363],[-0.313,0.878,-0.362],[-0.299,0.886,-0.355],[-0.276,0.896,-0.348],[-0.266,0.901,-0.343],[-0.257,0.908,-0.332],[-0.24,0.914,-0.326],[-0.235,0.919,-0.315],[-0.228,0.922,-0.314],[-0.222,0.93,-0.294],[-0.226,0.932,-0.284],[-0.224,0.935,-0.277],[-0.217,0.939,-0.266],[-0.215,0.937,-0.275],[-0.214,0.936,-0.279],[-0.211,0.935,-0.284],[-0.201,0.937,-0.284],[-0.195,0.941,-0.275],[-0.191,0.944,-0.267],[-0.196,0.945,-0.264],[-0.208,0.943,-0.26],[-0.193,0.947,-0.258],[-0.186,0.949,-0.256],[-0.183,0.948,-0.261],[-0.177,0.949,-0.26],[-0.173,0.954,-0.244],[-0.167,0.956,-0.241],[-0.157,0.96,-0.234],[-0.142,0.965,-0.222],[-0.134,0.966,-0.219],[-0.13,0.968,-0.213],[-0.115,0.971,-0.211],[-0.107,0.971,-0.214],[-0.097,0.971,-0.219],[-0.088,0.971,-0.224],[-0.082,0.972,-0.221],[-0.072,0.974,-0.213],[-0.079,0.976,-0.205],[-0.086,0.976,-0.201],[-0.07,0.977,-0.203],[-0.06,0.978,-0.198],[-0.058,0.98,-0.192],[-0.068,0.981,-0.18],[-0.076,0.983,-0.168],[-0.074,0.984,-0.162],[-0.064,0.985,-0.159],[-0.064,0.986,-0.152],[-0.068,0.988,-0.137],[-0.07,0.989,-0.134],[-0.066,0.99,-0.127],[-0.069,0.99,-0.12],[-0.074,0.991,-0.114],[-0.08,0.991,-0.11],[-0.085,0.99,-0.113],[-0.084,0.991,-0.101],[-0.092,0.99,-0.103],[-0.096,0.99,-0.101],[-0.103,0.989,-0.102],[-0.093,0.991,-0.099]],[[0.081,0.959,-0.271],[0.074,0.96,-0.272],[0.071,0.958,-0.276],[0.079,0.955,-0.286],[0.083,0.959,-0.272]],[[-0.216,0.151,-0.965],[-0.225,0.15,-0.963],[-0.237,0.162,-0.958],[-0.244,0.164,-0.956],[-0.244,0.17,-0.955],[-0.246,0.184,-0.951],[-0.256,0.192,-0.947],[-0.266,0.193,-0.945],[-0.267,0.196,-0.944],[-0.28,0.195,-0.94],[-0.292,0.203,-0.934],[-0.298,0.207,-0.932],[-0.306,0.215,-0.927],[-0.312,0.214,-0.926],[-0.316,0.21,-0.925],[-0.313,0.204,-0.927],[-0.313,0.2,-0.928],[-0.304,0.198,-0.932],[-0.31,0.19,-0.932],[-0.31,0.181,-0.933],[-0.303,0.171,-0.937],[-0.31,0.158,-0.938],[-0.317,0.159,-0.935],[-0.32,0.171,-0.932],[-0.315,0.177,-0.932],[-0.313,0.19,-0.93],[-0.333,0.197,-0.922],[-0.33,0.205,-0.921],[-0.335,0.211,-0.918],[-0.342,0.199,-0.919],[-0.353,0.198,-0.914],[-0.364,0.189,-0.912],[-0.365,0.183,-0.913],[-0.379,0.183,-0.907],[-0.396,0.185,-0.899],[-0.406,0.177,-0.897],[-0.418,0.175,-0.892],[-0.426,0.18,-0.887],[-0.426,0.185,-0.886],[-0.445,0.186,-0.876],[-0.463,0.186,-0.867],[-0.451,0.181,-0.874],[-0.457,0.173,-0.873],[-0.469,0.171,-0.867],[-0.481,0.163,-0.862],[-0.484,0.149,-0.862],[-0.492,0.15,-0.858],[-0.498,0.146,-0.855],[-0.509,0.139,-0.85],[-0.518,0.128,-0.845],[-0.519,0.119,-0.846],[-0.525,0.119,-0.843],[-0.533,0.11,-0.839],[-0.54,0.104,-0.836],[-0.557,0.101,-0.824],[-0.558,0.104,-0.823],[-0.57,0.105,-0.815],[-0.585,0.1,-0.805],[-0.59,0.098,-0.801],[-0.601,0.094,-0.794],[-0.616,0.08,-0.784],[-0.619,0.072,-0.782],[-0.624,0.072,-0.778],[-0.627,0.064,-0.776],[-0.636,0.033,-0.771],[-0.643,0.03,-0.765],[-0.643,0.018,-0.765],[-0.633,0.004,-0.774],[-0.638,-0.001,-0.77],[-0.661,-0.004,-0.75],[-0.661,-0.022,-0.75],[-0.671,-0.01,-0.741],[-0.687,-0.016,-0.726],[-0.708,-0.027,-0.706],[-0.714,-0.037,-0.699],[-0.711,-0.047,-0.701],[-0.726,-0.042,-0.687],[-0.748,-0.051,-0.661],[-0.765,-0.05,-0.642],[-0.781,-0.065,-0.621],[-0.793,-0.084,-0.603],[-0.801,-0.089,-0.592],[-0.81,-0.09,-0.58],[-0.813,-0.095,-0.574],[-0.815,-0.117,-0.568],[-0.815,-0.128,-0.565],[-0.808,-0.156,-0.568],[-0.801,-0.168,-0.574],[-0.783,-0.192,-0.591],[-0.774,-0.211,-0.598],[-0.763,-0.226,-0.605],[-0.761,-0.226,-0.609],[-0.755,-0.238,-0.611],[-0.75,-0.27,-0.604],[-0.741,-0.296,-0.603],[-0.737,-0.307,-0.602],[-0.732,-0.313,-0.605],[-0.724,-0.335,-0.603],[-0.707,-0.357,-0.61],[-0.701,-0.374,-0.608],[-0.69,-0.381,-0.616],[-0.684,-0.39,-0.616],[-0.673,-0.39,-0.629],[-0.653,-0.396,-0.645],[-0.643,-0.403,-0.651],[-0.629,-0.408,-0.662],[-0.611,-0.421,-0.67],[-0.596,-0.436,-0.674],[-0.591,-0.448,-0.671],[-0.59,-0.457,-0.666],[-0.582,-0.472,-0.662],[-0.577,-0.48,-0.661],[-0.566,-0.488,-0.664],[-0.543,-0.515,-0.663],[-0.528,-0.527,-0.666],[-0.518,-0.534,-0.669],[-0.507,-0.548,-0.666],[-0.496,-0.556,-0.667],[-0.487,-0.565,-0.666],[-0.471,-0.573,-0.671],[-0.463,-0.57,-0.679],[-0.456,-0.572,-0.682],[-0.448,-0.565,-0.693],[-0.439,-0.566,-0.698],[-0.435,-0.558,-0.707],[-0.431,-0.565,-0.703],[-0.442,-0.578,-0.686],[-0.436,-0.587,-0.681],[-0.441,-0.594,-0.673],[-0.438,-0.6,-0.669],[-0.419,-0.618,-0.665],[-0.399,-0.626,-0.67],[-0.374,-0.628,-0.682],[-0.362,-0.627,-0.69],[-0.361,-0.635,-0.683],[-0.355,-0.645,-0.677],[-0.354,-0.652,-0.671],[-0.345,-0.656,-0.671],[-0.333,-0.658,-0.675],[-0.323,-0.653,-0.685],[-0.317,-0.657,-0.684],[-0.314,-0.67,-0.673],[-0.32,-0.674,-0.666],[-0.328,-0.67,-0.666],[-0.329,-0.676,-0.659],[-0.317,-0.68,-0.661],[-0.304,-0.688,-0.658],[-0.298,-0.701,-0.648],[-0.292,-0.708,-0.643],[-0.282,-0.708,-0.648],[-0.27,-0.714,-0.646],[-0.263,-0.723,-0.639],[-0.271,-0.732,-0.625],[-0.28,-0.734,-0.619],[-0.272,-0.745,-0.61],[-0.256,-0.751,-0.608],[-0.243,-0.765,-0.597],[-0.232,-0.769,-0.596],[-0.225,-0.774,-0.591],[-0.224,-0.786,-0.577],[-0.227,-0.792,-0.567],[-0.223,-0.791,-0.569],[-0.215,-0.791,-0.573],[-0.209,-0.794,-0.571],[-0.198,-0.798,-0.57],[-0.192,-0.807,-0.558],[-0.188,-0.808,-0.559],[-0.178,-0.804,-0.567],[-0.17,-0.797,-0.58],[-0.159,-0.791,-0.591],[-0.158,-0.784,-0.6],[-0.163,-0.778,-0.607],[-0.16,-0.77,-0.617],[-0.164,-0.751,-0.64],[-0.172,-0.74,-0.65],[-0.187,-0.731,-0.657],[-0.17,-0.727,-0.665],[-0.184,-0.716,-0.673],[-0.194,-0.696,-0.691],[-0.206,-0.7,-0.683],[-0.219,-0.674,-0.705],[-0.212,-0.671,-0.711],[-0.204,-0.687,-0.698],[-0.197,-0.685,-0.702],[-0.205,-0.666,-0.717],[-0.215,-0.642,-0.736],[-0.224,-0.633,-0.741],[-0.223,-0.62,-0.753],[-0.225,-0.604,-0.765],[-0.231,-0.604,-0.763],[-0.244,-0.581,-0.777],[-0.258,-0.558,-0.789],[-0.269,-0.536,-0.8],[-0.27,-0.514,-0.814],[-0.276,-0.501,-0.82],[-0.278,-0.483,-0.83],[-0.29,-0.464,-0.837],[-0.297,-0.434,-0.851],[-0.307,-0.401,-0.863],[-0.317,-0.365,-0.875],[-0.319,-0.338,-0.885],[-0.319,-0.315,-0.894],[-0.304,-0.305,-0.902],[-0.303,-0.298,-0.905],[-0.273,-0.282,-0.92],[-0.246,-0.263,-0.933],[-0.234,-0.253,-0.939],[-0.228,-0.239,-0.944],[-0.231,-0.234,-0.944],[-0.218,-0.212,-0.953],[-0.203,-0.18,-0.962],[-0.188,-0.146,-0.971],[-0.181,-0.138,-0.974],[-0.176,-0.125,-0.976],[-0.163,-0.114,-0.98],[-0.151,-0.107,-0.983],[-0.157,-0.099,-0.983],[-0.149,-0.083,-0.985],[-0.154,-0.07,-0.986],[-0.168,-0.059,-0.984],[-0.177,-0.046,-0.983],[-0.174,-0.039,-0.984],[-0.167,-0.047,-0.985],[-0.157,-0.039,-0.987],[-0.16,-0.034,-0.986],[-0.158,-0.018,-0.987],[-0.164,-0.016,-0.986],[-0.167,-0.005,-0.986],[-0.173,0.006,-0.985],[-0.172,0.013,-0.985],[-0.181,0.017,-0.983],[-0.193,0.024,-0.981],[-0.191,0.03,-0.981],[-0.197,0.031,-0.98],[-0.196,0.04,-0.98],[-0.2,0.046,-0.979],[-0.209,0.047,-0.977],[-0.216,0.058,-0.975],[-0.222,0.067,-0.973],[-0.216,0.071,-0.974],[-0.219,0.081,-0.972],[-0.215,0.097,-0.972],[-0.218,0.102,-0.971],[-0.215,0.117,-0.97],[-0.208,0.126,-0.97],[-0.202,0.131,-0.971],[-0.199,0.14,-0.97],[-0.203,0.145,-0.969],[-0.198,0.146,-0.969],[-0.195,0.152,-0.969],[-0.186,0.156,-0.97],[-0.179,0.155,-0.972],[-0.176,0.149,-0.973],[-0.169,0.145,-0.975],[-0.165,0.144,-0.976],[-0.164,0.141,-0.976],[-0.172,0.131,-0.976],[-0.167,0.129,-0.977],[-0.165,0.127,-0.978],[-0.157,0.126,-0.98],[-0.154,0.136,-0.979],[-0.152,0.133,-0.979],[-0.146,0.134,-0.98],[-0.143,0.141,-0.98],[-0.136,0.142,-0.981],[-0.131,0.144,-0.981],[-0.127,0.144,-0.981],[-0.124,0.144,-0.982],[-0.123,0.14,-0.982],[-0.121,0.143,-0.982],[-0.112,0.147,-0.983],[-0.108,0.151,-0.983],[-0.11,0.154,-0.982],[-0.11,0.157,-0.981],[-0.105,0.161,-0.981],[-0.098,0.165,-0.981],[-0.092,0.167,-0.982],[-0.091,0.172,-0.981],[-0.086,0.175,-0.981],[-0.087,0.17,-0.982],[-0.084,0.166,-0.983],[-0.08,0.171,-0.982],[-0.075,0.173,-0.982],[-0.072,0.176,-0.982],[-0.072,0.181,-0.981],[-0.074,0.187,-0.98],[-0.072,0.188,-0.98],[-0.069,0.189,-0.98],[-0.073,0.192,-0.979],[-0.067,0.198,-0.978],[-0.059,0.205,-0.977],[-0.055,0.21,-0.976],[-0.048,0.216,-0.975],[-0.04,0.223,-0.974],[-0.042,0.226,-0.973],[-0.044,0.223,-0.974],[-0.046,0.225,-0.973],[-0.043,0.23,-0.972],[-0.04,0.231,-0.972],[-0.037,0.231,-0.972],[-0.036,0.227,-0.973],[-0.026,0.228,-0.973],[-0.02,0.229,-0.973],[-0.013,0.233,-0.972],[-0.003,0.234,-0.972],[0.002,0.237,-0.971],[0.01,0.24,-0.971],[0.021,0.241,-0.97],[0.029,0.244,-0.969],[0.038,0.251,-0.967],[0.056,0.269,-0.961],[0.065,0.275,-0.959],[0.079,0.279,-0.957],[0.088,0.278,-0.957],[0.101,0.271,-0.957],[0.11,0.27,-0.957],[0.122,0.274,-0.954],[0.134,0.277,-0.951],[0.149,0.285,-0.947],[0.161,0.287,-0.944],[0.18,0.295,-0.938],[0.193,0.303,-0.933],[0.197,0.308,-0.931],[0.206,0.309,-0.929],[0.222,0.314,-0.923],[0.228,0.321,-0.919],[0.244,0.331,-0.912],[0.251,0.341,-0.906],[0.254,0.349,-0.902],[0.249,0.351,-0.903],[0.25,0.355,-0.901],[0.246,0.36,-0.9],[0.245,0.365,-0.898],[0.25,0.373,-0.894],[0.25,0.379,-0.891],[0.255,0.387,-0.886],[0.266,0.403,-0.876],[0.28,0.415,-0.866],[0.286,0.425,-0.859],[0.298,0.432,-0.851],[0.3,0.436,-0.849],[0.296,0.445,-0.845],[0.303,0.449,-0.841],[0.31,0.457,-0.834],[0.312,0.467,-0.827],[0.319,0.469,-0.824],[0.326,0.477,-0.816],[0.331,0.484,-0.81],[0.331,0.489,-0.807],[0.336,0.5,-0.798],[0.338,0.512,-0.79],[0.336,0.518,-0.787],[0.345,0.524,-0.779],[0.35,0.523,-0.777],[0.356,0.527,-0.772],[0.36,0.521,-0.774],[0.359,0.514,-0.779],[0.361,0.502,-0.786],[0.358,0.496,-0.791],[0.35,0.486,-0.801],[0.348,0.482,-0.804],[0.346,0.481,-0.805],[0.346,0.476,-0.809],[0.343,0.476,-0.81],[0.342,0.466,-0.816],[0.339,0.462,-0.82],[0.337,0.457,-0.823],[0.329,0.449,-0.831],[0.327,0.434,-0.839],[0.324,0.427,-0.844],[0.321,0.42,-0.849],[0.321,0.411,-0.853],[0.314,0.411,-0.856],[0.309,0.404,-0.861],[0.305,0.397,-0.866],[0.306,0.394,-0.867],[0.313,0.388,-0.867],[0.316,0.388,-0.866],[0.318,0.398,-0.861],[0.327,0.407,-0.853],[0.336,0.414,-0.846],[0.343,0.418,-0.841],[0.34,0.43,-0.836],[0.341,0.439,-0.831],[0.347,0.443,-0.826],[0.356,0.45,-0.819],[0.358,0.448,-0.819],[0.361,0.452,-0.816],[0.369,0.456,-0.81],[0.375,0.465,-0.802],[0.374,0.466,-0.802],[0.368,0.465,-0.805],[0.362,0.471,-0.804],[0.359,0.478,-0.801],[0.368,0.489,-0.791],[0.375,0.493,-0.785],[0.377,0.503,-0.778],[0.38,0.513,-0.77],[0.383,0.525,-0.76],[0.384,0.538,-0.75],[0.384,0.545,-0.745],[0.39,0.554,-0.736],[0.396,0.555,-0.731],[0.396,0.56,-0.728],[0.403,0.56,-0.724],[0.406,0.564,-0.719],[0.417,0.566,-0.712],[0.419,0.568,-0.708],[0.418,0.576,-0.703],[0.424,0.59,-0.687],[0.427,0.609,-0.668],[0.425,0.613,-0.666],[0.428,0.617,-0.66],[0.432,0.629,-0.647],[0.428,0.64,-0.638],[0.431,0.647,-0.629],[0.423,0.658,-0.623],[0.418,0.669,-0.615],[0.416,0.679,-0.605],[0.406,0.691,-0.598],[0.398,0.702,-0.59],[0.391,0.714,-0.582],[0.383,0.73,-0.566],[0.38,0.74,-0.555],[0.379,0.745,-0.548],[0.377,0.748,-0.547],[0.365,0.744,-0.56],[0.367,0.732,-0.574],[0.362,0.736,-0.572],[0.358,0.745,-0.562],[0.356,0.755,-0.551],[0.357,0.755,-0.55],[0.368,0.766,-0.527],[0.371,0.771,-0.518],[0.384,0.775,-0.502],[0.381,0.785,-0.488],[0.375,0.792,-0.483],[0.382,0.796,-0.469],[0.376,0.804,-0.46],[0.379,0.812,-0.444],[0.375,0.817,-0.438],[0.375,0.821,-0.43],[0.379,0.824,-0.421],[0.372,0.833,-0.41],[0.373,0.84,-0.393],[0.367,0.849,-0.379],[0.373,0.85,-0.372],[0.383,0.85,-0.362],[0.387,0.853,-0.351],[0.388,0.862,-0.327],[0.391,0.864,-0.318],[0.396,0.867,-0.303],[0.404,0.866,-0.294],[0.408,0.87,-0.276],[0.409,0.874,-0.264],[0.416,0.872,-0.258],[0.424,0.866,-0.265],[0.428,0.865,-0.261],[0.436,0.863,-0.254],[0.444,0.86,-0.25],[0.451,0.859,-0.243],[0.444,0.864,-0.238],[0.429,0.872,-0.234],[0.421,0.875,-0.24],[0.419,0.877,-0.236],[0.431,0.872,-0.23],[0.443,0.867,-0.23],[0.458,0.86,-0.223],[0.462,0.856,-0.232],[0.475,0.849,-0.229],[0.485,0.846,-0.223],[0.493,0.843,-0.216],[0.5,0.838,-0.217],[0.513,0.834,-0.206],[0.52,0.829,-0.206],[0.53,0.825,-0.197],[0.531,0.826,-0.19],[0.538,0.823,-0.183],[0.546,0.819,-0.175],[0.553,0.816,-0.168],[0.562,0.813,-0.153],[0.56,0.815,-0.151],[0.55,0.82,-0.159],[0.543,0.823,-0.167],[0.533,0.828,-0.175],[0.527,0.829,-0.186],[0.52,0.833,-0.189],[0.507,0.839,-0.198],[0.504,0.841,-0.199],[0.496,0.844,-0.203],[0.485,0.851,-0.201],[0.475,0.856,-0.201],[0.484,0.854,-0.193],[0.482,0.855,-0.19],[0.489,0.852,-0.187],[0.484,0.857,-0.179],[0.49,0.853,-0.178],[0.484,0.858,-0.173],[0.493,0.854,-0.166],[0.494,0.854,-0.161],[0.486,0.86,-0.157],[0.48,0.863,-0.157],[0.477,0.866,-0.15],[0.483,0.864,-0.14],[0.478,0.868,-0.131],[0.476,0.87,-0.125],[0.468,0.875,-0.122],[0.463,0.879,-0.114],[0.454,0.884,-0.115],[0.444,0.888,-0.12],[0.435,0.892,-0.12],[0.433,0.893,-0.126],[0.433,0.891,-0.132],[0.424,0.895,-0.136],[0.424,0.895,-0.142],[0.417,0.897,-0.146],[0.411,0.9,-0.142],[0.41,0.902,-0.137],[0.402,0.905,-0.14],[0.404,0.905,-0.136],[0.41,0.903,-0.13],[0.414,0.901,-0.128],[0.412,0.903,-0.122],[0.417,0.902,-0.112],[0.416,0.904,-0.1],[0.41,0.907,-0.096],[0.403,0.911,-0.085],[0.394,0.914,-0.093],[0.383,0.918,-0.106],[0.381,0.918,-0.112],[0.389,0.914,-0.113],[0.384,0.914,-0.127],[0.377,0.919,-0.119],[0.373,0.921,-0.109],[0.367,0.925,-0.102],[0.362,0.927,-0.094],[0.359,0.93,-0.084],[0.35,0.933,-0.086],[0.347,0.933,-0.097],[0.337,0.936,-0.102],[0.329,0.939,-0.101],[0.32,0.942,-0.105],[0.316,0.942,-0.109],[0.306,0.945,-0.117],[0.305,0.945,-0.122],[0.293,0.948,-0.127],[0.293,0.946,-0.136],[0.298,0.944,-0.143],[0.294,0.945,-0.144],[0.29,0.945,-0.153],[0.294,0.943,-0.155],[0.292,0.942,-0.164],[0.288,0.943,-0.168],[0.286,0.941,-0.181],[0.281,0.94,-0.192],[0.28,0.94,-0.197],[0.273,0.941,-0.202],[0.272,0.939,-0.212],[0.269,0.938,-0.218],[0.265,0.936,-0.23],[0.265,0.934,-0.242],[0.261,0.933,-0.248],[0.252,0.936,-0.247],[0.244,0.937,-0.249],[0.238,0.937,-0.256],[0.227,0.939,-0.257],[0.217,0.941,-0.26],[0.218,0.938,-0.268],[0.212,0.94,-0.268],[0.206,0.943,-0.263],[0.204,0.942,-0.267],[0.205,0.937,-0.284],[0.192,0.941,-0.28],[0.198,0.936,-0.291],[0.19,0.937,-0.293],[0.186,0.939,-0.29],[0.18,0.938,-0.295],[0.176,0.936,-0.305],[0.166,0.934,-0.317],[0.16,0.933,-0.324],[0.154,0.933,-0.326],[0.149,0.93,-0.337],[0.161,0.927,-0.34],[0.151,0.925,-0.348],[0.134,0.926,-0.353],[0.128,0.927,-0.352],[0.124,0.923,-0.364],[0.115,0.926,-0.358],[0.119,0.929,-0.35],[0.113,0.931,-0.346],[0.106,0.932,-0.347],[0.101,0.932,-0.347],[0.097,0.931,-0.352],[0.093,0.927,-0.363],[0.085,0.928,-0.363],[0.076,0.925,-0.373],[0.065,0.926,-0.372],[0.056,0.926,-0.374],[0.055,0.93,-0.364],[0.049,0.931,-0.362],[0.04,0.929,-0.369],[0.041,0.922,-0.384],[0.036,0.928,-0.371],[0.031,0.928,-0.372],[0.026,0.934,-0.356],[0.032,0.938,-0.346],[0.038,0.94,-0.338],[0.036,0.947,-0.32],[0.028,0.951,-0.309],[0.021,0.95,-0.312],[0.016,0.947,-0.32],[0.009,0.941,-0.339],[0.015,0.938,-0.347],[0.003,0.937,-0.35],[0.004,0.93,-0.367],[-0.005,0.935,-0.354],[-0.013,0.931,-0.364],[-0.011,0.926,-0.376],[-0.018,0.922,-0.387],[-0.024,0.927,-0.375],[-0.028,0.932,-0.361],[-0.027,0.939,-0.343],[-0.035,0.939,-0.343],[-0.045,0.938,-0.345],[-0.054,0.935,-0.352],[-0.056,0.931,-0.36],[-0.052,0.928,-0.369],[-0.058,0.925,-0.377],[-0.058,0.921,-0.385],[-0.046,0.916,-0.397],[-0.037,0.915,-0.401],[-0.029,0.917,-0.397],[-0.028,0.914,-0.405],[-0.022,0.908,-0.419],[-0.02,0.905,-0.426],[-0.012,0.9,-0.437],[-0.001,0.899,-0.438],[0.005,0.896,-0.444],[0.006,0.891,-0.455],[0.015,0.89,-0.456],[0.026,0.883,-0.468],[0.036,0.874,-0.485],[0.04,0.867,-0.497],[0.042,0.857,-0.514],[0.029,0.855,-0.517],[0.026,0.847,-0.532],[0.022,0.839,-0.543],[0.008,0.841,-0.54],[-0.009,0.837,-0.547],[-0.019,0.834,-0.552],[-0.026,0.829,-0.559],[-0.039,0.826,-0.562],[-0.049,0.822,-0.567],[-0.066,0.822,-0.566],[-0.077,0.821,-0.566],[-0.077,0.812,-0.579],[-0.082,0.802,-0.592],[-0.092,0.79,-0.607],[-0.11,0.779,-0.617],[-0.117,0.783,-0.611],[-0.12,0.794,-0.596],[-0.111,0.81,-0.575],[-0.102,0.816,-0.569],[-0.117,0.821,-0.56],[-0.125,0.827,-0.547],[-0.128,0.834,-0.536],[-0.125,0.841,-0.527],[-0.116,0.849,-0.516],[-0.103,0.855,-0.508],[-0.11,0.865,-0.49],[-0.103,0.873,-0.477],[-0.096,0.886,-0.455],[-0.1,0.887,-0.45],[-0.115,0.885,-0.451],[-0.123,0.884,-0.45],[-0.129,0.887,-0.444],[-0.138,0.884,-0.447],[-0.15,0.879,-0.453],[-0.154,0.876,-0.457],[-0.169,0.875,-0.453],[-0.173,0.868,-0.466],[-0.182,0.857,-0.482],[-0.191,0.855,-0.482],[-0.2,0.85,-0.487],[-0.209,0.855,-0.474],[-0.21,0.865,-0.456],[-0.212,0.869,-0.447],[-0.224,0.861,-0.456],[-0.244,0.85,-0.468],[-0.261,0.838,-0.479],[-0.262,0.832,-0.488],[-0.277,0.827,-0.489],[-0.289,0.821,-0.492],[-0.305,0.819,-0.487],[-0.312,0.815,-0.487],[-0.322,0.807,-0.495],[-0.33,0.805,-0.492],[-0.337,0.801,-0.494],[-0.346,0.79,-0.507],[-0.342,0.786,-0.515],[-0.338,0.782,-0.524],[-0.326,0.778,-0.537],[-0.319,0.769,-0.554],[-0.304,0.767,-0.565],[-0.281,0.769,-0.574],[-0.266,0.769,-0.581],[-0.256,0.769,-0.586],[-0.251,0.761,-0.599],[-0.24,0.755,-0.61],[-0.23,0.74,-0.632],[-0.222,0.729,-0.647],[-0.23,0.731,-0.642],[-0.242,0.747,-0.62],[-0.26,0.756,-0.6],[-0.275,0.757,-0.592],[-0.287,0.752,-0.594],[-0.281,0.744,-0.606],[-0.29,0.731,-0.617],[-0.298,0.722,-0.624],[-0.315,0.716,-0.623],[-0.332,0.718,-0.612],[-0.336,0.731,-0.594],[-0.341,0.723,-0.601],[-0.35,0.718,-0.601],[-0.341,0.71,-0.616],[-0.32,0.703,-0.635],[-0.311,0.698,-0.645],[-0.302,0.689,-0.659],[-0.293,0.69,-0.662],[-0.288,0.7,-0.653],[-0.304,0.711,-0.635],[-0.286,0.71,-0.643],[-0.274,0.709,-0.65],[-0.278,0.705,-0.653],[-0.268,0.699,-0.663],[-0.257,0.694,-0.672],[-0.246,0.691,-0.68],[-0.242,0.683,-0.689],[-0.241,0.68,-0.692],[-0.243,0.673,-0.698],[-0.249,0.667,-0.703],[-0.254,0.666,-0.701],[-0.251,0.671,-0.698],[-0.256,0.668,-0.699],[-0.256,0.664,-0.702],[-0.248,0.662,-0.707],[-0.242,0.663,-0.709],[-0.234,0.66,-0.714],[-0.229,0.66,-0.716],[-0.221,0.659,-0.719],[-0.212,0.655,-0.725],[-0.23,0.658,-0.717],[-0.234,0.655,-0.718],[-0.218,0.651,-0.727],[-0.209,0.651,-0.729],[-0.209,0.653,-0.728],[-0.206,0.649,-0.732],[-0.21,0.648,-0.732],[-0.21,0.639,-0.74],[-0.203,0.628,-0.751],[-0.201,0.632,-0.749],[-0.198,0.633,-0.749],[-0.193,0.636,-0.747],[-0.197,0.629,-0.752],[-0.201,0.626,-0.753],[-0.202,0.621,-0.757],[-0.199,0.616,-0.762],[-0.193,0.605,-0.772],[-0.192,0.605,-0.772],[-0.195,0.615,-0.764],[-0.187,0.62,-0.762],[-0.183,0.631,-0.754],[-0.182,0.625,-0.759],[-0.186,0.617,-0.765],[-0.177,0.619,-0.765],[-0.187,0.615,-0.766],[-0.19,0.601,-0.776],[-0.194,0.6,-0.776],[-0.196,0.596,-0.779],[-0.201,0.581,-0.788],[-0.194,0.571,-0.798],[-0.18,0.567,-0.804],[-0.172,0.558,-0.812],[-0.165,0.557,-0.814],[-0.158,0.552,-0.819],[-0.157,0.547,-0.822],[-0.142,0.537,-0.831],[-0.135,0.53,-0.837],[-0.129,0.522,-0.843],[-0.127,0.511,-0.85],[-0.131,0.501,-0.856],[-0.137,0.488,-0.862],[-0.145,0.477,-0.867],[-0.145,0.47,-0.871],[-0.154,0.452,-0.879],[-0.154,0.442,-0.884],[-0.154,0.435,-0.887],[-0.151,0.426,-0.892],[-0.147,0.424,-0.894],[-0.139,0.426,-0.894],[-0.136,0.433,-0.891],[-0.13,0.436,-0.89],[-0.121,0.45,-0.885],[-0.113,0.462,-0.88],[-0.11,0.468,-0.877],[-0.112,0.478,-0.871],[-0.108,0.486,-0.867],[-0.095,0.499,-0.861],[-0.089,0.501,-0.861],[-0.074,0.494,-0.866],[-0.071,0.495,-0.866],[-0.064,0.502,-0.862],[-0.054,0.506,-0.861],[-0.037,0.504,-0.863],[-0.024,0.506,-0.862],[-0.012,0.505,-0.863],[-0.006,0.502,-0.865],[-0.009,0.498,-0.867],[-0.009,0.492,-0.87],[-0.012,0.489,-0.872],[-0.009,0.487,-0.873],[-0.003,0.489,-0.872],[0.002,0.487,-0.874],[0.013,0.487,-0.873],[0.025,0.495,-0.868],[0.038,0.493,-0.869],[0.049,0.497,-0.867],[0.058,0.496,-0.867],[0.071,0.492,-0.868],[0.086,0.481,-0.873],[0.101,0.474,-0.875],[0.11,0.467,-0.877],[0.114,0.46,-0.881],[0.115,0.449,-0.886],[0.114,0.442,-0.89],[0.112,0.436,-0.893],[0.119,0.422,-0.899],[0.122,0.411,-0.903],[0.125,0.39,-0.912],[0.127,0.382,-0.916],[0.124,0.373,-0.919],[0.12,0.365,-0.923],[0.117,0.352,-0.928],[0.107,0.34,-0.934],[0.103,0.331,-0.938],[0.097,0.323,-0.941],[0.08,0.318,-0.945],[0.073,0.311,-0.947],[0.059,0.316,-0.947],[0.046,0.318,-0.947],[0.034,0.321,-0.947],[0.023,0.324,-0.946],[0.013,0.33,-0.944],[0.009,0.34,-0.94],[0.007,0.354,-0.935],[0.005,0.358,-0.934],[-0.006,0.363,-0.932],[-0.024,0.366,-0.93],[-0.038,0.366,-0.93],[-0.048,0.367,-0.929],[-0.052,0.364,-0.93],[-0.051,0.356,-0.933],[-0.043,0.346,-0.937],[-0.039,0.336,-0.941],[-0.042,0.333,-0.942],[-0.04,0.326,-0.944],[-0.036,0.313,-0.949],[-0.032,0.318,-0.948],[-0.028,0.317,-0.948],[-0.028,0.315,-0.949],[-0.031,0.315,-0.949],[-0.031,0.31,-0.95],[-0.029,0.303,-0.953],[-0.03,0.301,-0.953],[-0.028,0.295,-0.955],[-0.029,0.293,-0.956],[-0.028,0.285,-0.958],[-0.024,0.28,-0.96],[-0.021,0.28,-0.96],[-0.018,0.274,-0.962],[-0.023,0.271,-0.962],[-0.025,0.273,-0.962],[-0.03,0.271,-0.962],[-0.032,0.27,-0.962],[-0.035,0.273,-0.961],[-0.04,0.274,-0.961],[-0.042,0.272,-0.961],[-0.044,0.273,-0.961],[-0.052,0.272,-0.961],[-0.06,0.272,-0.96],[-0.065,0.274,-0.96],[-0.067,0.276,-0.959],[-0.072,0.275,-0.959],[-0.076,0.274,-0.959],[-0.081,0.274,-0.958],[-0.084,0.276,-0.958],[-0.092,0.273,-0.958],[-0.094,0.273,-0.957],[-0.1,0.27,-0.958],[-0.105,0.266,-0.958],[-0.111,0.263,-0.958],[-0.115,0.259,-0.959],[-0.114,0.257,-0.96],[-0.113,0.253,-0.961],[-0.115,0.247,-0.962],[-0.111,0.241,-0.964],[-0.11,0.235,-0.966],[-0.109,0.227,-0.968],[-0.11,0.223,-0.969],[-0.111,0.215,-0.97],[-0.108,0.213,-0.971],[-0.107,0.206,-0.973],[-0.108,0.202,-0.973],[-0.105,0.197,-0.975],[-0.106,0.193,-0.976],[-0.108,0.19,-0.976],[-0.11,0.187,-0.976],[-0.113,0.18,-0.977],[-0.12,0.174,-0.978],[-0.128,0.166,-0.978],[-0.134,0.16,-0.978],[-0.134,0.156,-0.979],[-0.141,0.156,-0.978],[-0.142,0.157,-0.977],[-0.147,0.153,-0.977],[-0.155,0.154,-0.976],[-0.163,0.158,-0.974],[-0.173,0.162,-0.972],[-0.178,0.167,-0.97],[-0.188,0.166,-0.968],[-0.187,0.164,-0.968],[-0.197,0.164,-0.967],[-0.204,0.161,-0.966],[-0.21,0.156,-0.965]],[[-0.907,0.327,-0.265],[-0.904,0.335,-0.266],[-0.901,0.344,-0.263],[-0.898,0.351,-0.266],[-0.892,0.358,-0.274],[-0.89,0.365,-0.272],[-0.888,0.373,-0.271],[-0.888,0.377,-0.264],[-0.886,0.386,-0.258],[-0.883,0.391,-0.259],[-0.88,0.402,-0.252],[-0.878,0.412,-0.242],[-0.878,0.415,-0.237],[-0.875,0.424,-0.232],[-0.872,0.433,-0.23],[-0.869,0.442,-0.224],[-0.868,0.448,-0.213],[-0.863,0.464,-0.201],[-0.861,0.47,-0.193],[-0.863,0.472,-0.179],[-0.86,0.482,-0.166],[-0.859,0.486,-0.158],[-0.855,0.499,-0.144],[-0.843,0.518,-0.146],[-0.836,0.53,-0.139],[-0.832,0.538,-0.136],[-0.827,0.548,-0.126],[-0.825,0.555,-0.111],[-0.822,0.561,-0.1],[-0.813,0.576,-0.089],[-0.807,0.584,-0.084],[-0.808,0.584,-0.073],[-0.813,0.578,-0.065],[-0.813,0.579,-0.052],[-0.817,0.576,-0.037],[-0.817,0.576,-0.031],[-0.812,0.584,-0.017],[-0.81,0.586,-0.002],[-0.806,0.592,0.007],[-0.802,0.596,0.021],[-0.8,0.599,0.044],[-0.797,0.6,0.067],[-0.798,0.598,0.074],[-0.793,0.603,0.087],[-0.791,0.603,0.102],[-0.793,0.6,0.108],[-0.791,0.601,0.117],[-0.784,0.607,0.131],[-0.784,0.605,0.141],[-0.789,0.598,0.142],[-0.783,0.603,0.153],[-0.785,0.6,0.154],[-0.791,0.594,0.148],[-0.796,0.587,0.149],[-0.797,0.584,0.154],[-0.806,0.571,0.154],[-0.813,0.564,0.146],[-0.818,0.556,0.149],[-0.816,0.556,0.157],[-0.82,0.549,0.161],[-0.821,0.547,0.167],[-0.82,0.542,0.184],[-0.818,0.543,0.19],[-0.817,0.54,0.202],[-0.816,0.534,0.222],[-0.822,0.521,0.231],[-0.82,0.518,0.245],[-0.817,0.511,0.266],[-0.816,0.504,0.282],[-0.812,0.508,0.289],[-0.805,0.515,0.294],[-0.8,0.526,0.288],[-0.794,0.533,0.291],[-0.786,0.54,0.3],[-0.781,0.542,0.309],[-0.776,0.539,0.328],[-0.778,0.533,0.334],[-0.775,0.533,0.339],[-0.775,0.53,0.344],[-0.77,0.528,0.358],[-0.771,0.524,0.362],[-0.762,0.524,0.38],[-0.758,0.52,0.394],[-0.753,0.515,0.408],[-0.751,0.513,0.415],[-0.743,0.518,0.424],[-0.738,0.522,0.428],[-0.731,0.523,0.439],[-0.726,0.521,0.448],[-0.728,0.514,0.454],[-0.723,0.519,0.455],[-0.719,0.515,0.467],[-0.713,0.515,0.477],[-0.707,0.518,0.481],[-0.702,0.523,0.483],[-0.702,0.524,0.482],[-0.696,0.531,0.483],[-0.689,0.542,0.481],[-0.686,0.546,0.482],[-0.676,0.558,0.482],[-0.666,0.568,0.484],[-0.66,0.579,0.478],[-0.655,0.585,0.478],[-0.654,0.592,0.471],[-0.648,0.597,0.473],[-0.653,0.596,0.467],[-0.658,0.599,0.456],[-0.669,0.591,0.451],[-0.681,0.589,0.434],[-0.683,0.597,0.422],[-0.69,0.597,0.409],[-0.696,0.591,0.408],[-0.701,0.59,0.4],[-0.703,0.597,0.386],[-0.711,0.597,0.372],[-0.705,0.611,0.36],[-0.704,0.619,0.348],[-0.694,0.629,0.351],[-0.693,0.636,0.341],[-0.677,0.648,0.349],[-0.667,0.649,0.367],[-0.656,0.659,0.367],[-0.645,0.657,0.39],[-0.63,0.666,0.399],[-0.619,0.669,0.41],[-0.607,0.67,0.428],[-0.6,0.66,0.451],[-0.592,0.655,0.469],[-0.581,0.657,0.479],[-0.575,0.656,0.489],[-0.56,0.663,0.497],[-0.555,0.669,0.495],[-0.551,0.677,0.487],[-0.553,0.682,0.479],[-0.556,0.684,0.472],[-0.557,0.688,0.466],[-0.559,0.698,0.447],[-0.564,0.703,0.433],[-0.565,0.71,0.421],[-0.558,0.712,0.426],[-0.543,0.722,0.428],[-0.543,0.727,0.42],[-0.528,0.732,0.43],[-0.526,0.734,0.428],[-0.535,0.733,0.421],[-0.541,0.732,0.414],[-0.549,0.728,0.41],[-0.557,0.727,0.402],[-0.566,0.723,0.396],[-0.572,0.715,0.401],[-0.571,0.712,0.408],[-0.564,0.713,0.417],[-0.568,0.709,0.418],[-0.578,0.706,0.408],[-0.594,0.699,0.399],[-0.595,0.702,0.391],[-0.589,0.708,0.391],[-0.593,0.711,0.377],[-0.59,0.713,0.378],[-0.58,0.718,0.385],[-0.58,0.72,0.381],[-0.587,0.723,0.363],[-0.584,0.728,0.36],[-0.591,0.726,0.351],[-0.599,0.72,0.351],[-0.612,0.711,0.348],[-0.614,0.708,0.349],[-0.62,0.705,0.345],[-0.62,0.706,0.342],[-0.635,0.691,0.346],[-0.642,0.686,0.342],[-0.652,0.677,0.342],[-0.656,0.669,0.349],[-0.659,0.664,0.352],[-0.657,0.66,0.364],[-0.661,0.657,0.363],[-0.669,0.656,0.35],[-0.674,0.652,0.347],[-0.685,0.645,0.339],[-0.682,0.651,0.333],[-0.68,0.654,0.332],[-0.683,0.654,0.325],[-0.685,0.655,0.318],[-0.694,0.652,0.305],[-0.696,0.644,0.316],[-0.701,0.642,0.311],[-0.704,0.642,0.304],[-0.701,0.649,0.295],[-0.704,0.646,0.294],[-0.709,0.638,0.299],[-0.712,0.632,0.307],[-0.716,0.629,0.303],[-0.717,0.623,0.312],[-0.718,0.619,0.32],[-0.723,0.611,0.323],[-0.726,0.615,0.31],[-0.729,0.608,0.316],[-0.733,0.606,0.308],[-0.74,0.594,0.316],[-0.744,0.594,0.308],[-0.744,0.6,0.296],[-0.738,0.611,0.288],[-0.732,0.62,0.283],[-0.729,0.626,0.276],[-0.726,0.634,0.267],[-0.723,0.638,0.265],[-0.723,0.639,0.263],[-0.721,0.642,0.262],[-0.72,0.646,0.254],[-0.715,0.652,0.251],[-0.707,0.661,0.249],[-0.703,0.665,0.25],[-0.702,0.668,0.247],[-0.702,0.669,0.244],[-0.7,0.673,0.239],[-0.7,0.675,0.233],[-0.699,0.68,0.221],[-0.697,0.685,0.212],[-0.697,0.688,0.2],[-0.691,0.698,0.188],[-0.69,0.699,0.19],[-0.686,0.704,0.183],[-0.682,0.708,0.182],[-0.683,0.71,0.173],[-0.689,0.705,0.171],[-0.685,0.709,0.167],[-0.681,0.713,0.166],[-0.679,0.714,0.169],[-0.68,0.716,0.159],[-0.686,0.712,0.15],[-0.692,0.706,0.152],[-0.696,0.702,0.151],[-0.701,0.696,0.157],[-0.704,0.689,0.169],[-0.712,0.679,0.178],[-0.718,0.669,0.194],[-0.715,0.669,0.204],[-0.717,0.666,0.208],[-0.72,0.663,0.205],[-0.721,0.658,0.217],[-0.721,0.654,0.228],[-0.723,0.648,0.24],[-0.725,0.645,0.242],[-0.729,0.64,0.241],[-0.727,0.646,0.232],[-0.728,0.649,0.221],[-0.737,0.64,0.218],[-0.738,0.635,0.228],[-0.744,0.628,0.228],[-0.746,0.627,0.223],[-0.757,0.615,0.219],[-0.76,0.614,0.213],[-0.756,0.619,0.212],[-0.75,0.626,0.214],[-0.747,0.629,0.216],[-0.742,0.637,0.209],[-0.738,0.643,0.203],[-0.738,0.645,0.198],[-0.734,0.651,0.193],[-0.734,0.653,0.184],[-0.731,0.659,0.177],[-0.733,0.659,0.168],[-0.73,0.665,0.157],[-0.725,0.674,0.143],[-0.72,0.681,0.134],[-0.709,0.694,0.128],[-0.709,0.695,0.121],[-0.706,0.699,0.11],[-0.709,0.698,0.105],[-0.715,0.692,0.099],[-0.717,0.691,0.094],[-0.725,0.684,0.083],[-0.724,0.687,0.058],[-0.729,0.683,0.04],[-0.737,0.675,0.038],[-0.743,0.668,0.039],[-0.752,0.659,0.027],[-0.754,0.656,0.011],[-0.758,0.652,0.01],[-0.765,0.644,0.001],[-0.774,0.634,-0.004],[-0.78,0.626,0.002],[-0.785,0.62,-0.006],[-0.792,0.611,-0.009],[-0.794,0.608,-0.02],[-0.801,0.597,-0.03],[-0.801,0.597,-0.048],[-0.8,0.597,-0.061],[-0.803,0.592,-0.07],[-0.806,0.587,-0.076],[-0.804,0.588,-0.083],[-0.8,0.593,-0.087],[-0.794,0.601,-0.091],[-0.791,0.603,-0.103],[-0.793,0.6,-0.109],[-0.79,0.602,-0.116],[-0.79,0.6,-0.124],[-0.783,0.611,-0.12],[-0.776,0.619,-0.121],[-0.774,0.621,-0.127],[-0.769,0.626,-0.129],[-0.762,0.635,-0.127],[-0.759,0.64,-0.121],[-0.755,0.645,-0.119],[-0.749,0.653,-0.115],[-0.744,0.658,-0.115],[-0.739,0.663,-0.117],[-0.735,0.668,-0.117],[-0.727,0.677,-0.115],[-0.721,0.682,-0.119],[-0.715,0.691,-0.1],[-0.72,0.689,-0.085],[-0.721,0.689,-0.068],[-0.724,0.687,-0.055],[-0.725,0.688,-0.045],[-0.726,0.687,-0.024],[-0.719,0.695,-0.017],[-0.694,0.72,-0.014],[-0.681,0.732,-0.026],[-0.674,0.738,-0.035],[-0.668,0.743,-0.052],[-0.658,0.751,-0.053],[-0.656,0.754,-0.038],[-0.66,0.751,-0.019],[-0.645,0.764,-0.022],[-0.651,0.759,-0.011],[-0.641,0.767,0.015],[-0.63,0.777,0.018],[-0.627,0.779,0.028],[-0.624,0.781,0.036],[-0.619,0.784,0.041],[-0.599,0.8,0.049],[-0.591,0.804,0.063],[-0.591,0.804,0.072],[-0.588,0.806,0.073],[-0.586,0.806,0.082],[-0.588,0.804,0.084],[-0.581,0.809,0.09],[-0.576,0.813,0.087],[-0.568,0.819,0.085],[-0.56,0.824,0.08],[-0.546,0.834,0.078],[-0.542,0.837,0.079],[-0.537,0.84,0.081],[-0.535,0.84,0.089],[-0.53,0.843,0.091],[-0.525,0.846,0.098],[-0.532,0.841,0.099],[-0.538,0.838,0.097],[-0.541,0.835,0.099],[-0.543,0.833,0.105],[-0.548,0.83,0.103],[-0.547,0.831,0.1],[-0.559,0.824,0.095],[-0.565,0.819,0.099],[-0.571,0.815,0.1],[-0.572,0.813,0.111],[-0.577,0.809,0.112],[-0.572,0.811,0.121],[-0.567,0.814,0.126],[-0.57,0.81,0.138],[-0.573,0.807,0.144],[-0.568,0.81,0.15],[-0.557,0.814,0.164],[-0.549,0.818,0.174],[-0.548,0.816,0.185],[-0.551,0.813,0.186],[-0.548,0.813,0.196],[-0.541,0.818,0.196],[-0.532,0.821,0.207],[-0.521,0.829,0.201],[-0.511,0.837,0.197],[-0.501,0.843,0.198],[-0.493,0.846,0.204],[-0.5,0.839,0.216],[-0.497,0.839,0.222],[-0.486,0.846,0.219],[-0.477,0.852,0.217],[-0.48,0.85,0.214],[-0.478,0.854,0.207],[-0.47,0.859,0.203],[-0.462,0.861,0.212],[-0.455,0.863,0.221],[-0.453,0.861,0.23],[-0.449,0.861,0.238],[-0.436,0.866,0.243],[-0.434,0.87,0.232],[-0.443,0.87,0.218],[-0.454,0.867,0.207],[-0.463,0.865,0.195],[-0.457,0.869,0.187],[-0.456,0.872,0.178],[-0.441,0.881,0.174],[-0.429,0.888,0.165],[-0.42,0.893,0.166],[-0.408,0.897,0.168],[-0.385,0.906,0.177],[-0.38,0.907,0.181],[-0.374,0.91,0.177],[-0.372,0.914,0.165],[-0.381,0.912,0.155],[-0.394,0.906,0.153],[-0.402,0.902,0.157],[-0.418,0.896,0.15],[-0.436,0.889,0.14],[-0.458,0.877,0.141],[-0.467,0.872,0.15],[-0.472,0.867,0.161],[-0.491,0.857,0.158],[-0.497,0.855,0.15],[-0.522,0.839,0.154],[-0.536,0.83,0.153],[-0.538,0.831,0.141],[-0.551,0.823,0.138],[-0.554,0.823,0.127],[-0.541,0.832,0.121],[-0.527,0.843,0.11],[-0.508,0.856,0.099],[-0.5,0.861,0.091],[-0.52,0.851,0.077],[-0.525,0.849,0.065],[-0.519,0.853,0.051],[-0.503,0.863,0.047],[-0.468,0.883,0.041],[-0.458,0.888,0.047],[-0.442,0.895,0.066],[-0.423,0.902,0.079],[-0.399,0.913,0.087],[-0.365,0.926,0.096],[-0.351,0.931,0.103],[-0.326,0.939,0.113],[-0.315,0.941,0.123],[-0.312,0.941,0.132],[-0.296,0.946,0.135],[-0.292,0.945,0.145],[-0.284,0.947,0.152],[-0.286,0.942,0.174],[-0.294,0.941,0.17],[-0.299,0.937,0.18],[-0.291,0.939,0.183],[-0.294,0.935,0.196],[-0.287,0.934,0.213],[-0.287,0.927,0.243],[-0.289,0.924,0.252],[-0.297,0.919,0.259],[-0.308,0.915,0.259],[-0.319,0.914,0.253],[-0.327,0.919,0.22],[-0.332,0.918,0.217],[-0.335,0.913,0.233],[-0.341,0.909,0.238],[-0.354,0.902,0.247],[-0.352,0.9,0.258],[-0.352,0.898,0.265],[-0.345,0.901,0.262],[-0.343,0.905,0.254],[-0.335,0.907,0.254],[-0.331,0.903,0.274],[-0.325,0.905,0.277],[-0.319,0.91,0.265],[-0.296,0.917,0.268],[-0.293,0.916,0.273],[-0.292,0.914,0.282],[-0.281,0.919,0.277],[-0.278,0.923,0.266],[-0.269,0.927,0.261],[-0.265,0.931,0.251],[-0.256,0.929,0.268],[-0.26,0.925,0.277],[-0.267,0.924,0.272],[-0.273,0.921,0.279],[-0.273,0.918,0.287],[-0.263,0.92,0.291],[-0.255,0.924,0.285],[-0.213,0.933,0.291],[-0.21,0.932,0.294],[-0.221,0.928,0.298],[-0.215,0.928,0.305],[-0.208,0.93,0.303],[-0.198,0.93,0.309],[-0.187,0.933,0.308],[-0.185,0.929,0.32],[-0.174,0.933,0.315],[-0.175,0.937,0.303],[-0.169,0.939,0.3],[-0.156,0.937,0.313],[-0.15,0.935,0.321],[-0.137,0.928,0.347],[-0.13,0.931,0.341],[-0.132,0.934,0.33],[-0.131,0.936,0.327],[-0.138,0.936,0.323],[-0.133,0.939,0.317],[-0.131,0.944,0.303],[-0.129,0.946,0.299],[-0.113,0.951,0.289],[-0.105,0.956,0.276],[-0.1,0.957,0.274],[-0.089,0.955,0.283],[-0.09,0.952,0.292],[-0.099,0.948,0.303],[-0.098,0.946,0.309],[-0.099,0.942,0.321],[-0.107,0.934,0.342],[-0.103,0.93,0.353],[-0.109,0.925,0.363],[-0.129,0.916,0.38],[-0.122,0.915,0.385],[-0.118,0.917,0.38],[-0.109,0.919,0.379],[-0.105,0.922,0.372],[-0.098,0.926,0.366],[-0.099,0.929,0.356],[-0.093,0.934,0.346],[-0.099,0.934,0.343],[-0.098,0.937,0.334],[-0.089,0.943,0.319],[-0.092,0.948,0.304],[-0.08,0.952,0.296],[-0.078,0.955,0.285],[-0.076,0.956,0.285],[-0.075,0.953,0.295],[-0.081,0.947,0.31],[-0.076,0.946,0.314],[-0.076,0.95,0.302],[-0.066,0.952,0.297],[-0.055,0.953,0.299],[-0.046,0.95,0.31],[-0.049,0.954,0.295],[-0.046,0.96,0.278],[-0.038,0.961,0.276],[-0.026,0.96,0.278],[-0.015,0.961,0.276],[-0.019,0.963,0.267],[-0.013,0.966,0.257],[-0.008,0.967,0.256],[0.001,0.969,0.248],[0.012,0.969,0.245],[0.014,0.97,0.241],[0.024,0.971,0.238],[0.028,0.97,0.242],[0.036,0.972,0.232],[0.044,0.972,0.231],[0.044,0.974,0.223],[0.046,0.975,0.215],[0.053,0.977,0.206],[0.06,0.976,0.21],[0.057,0.975,0.215],[0.066,0.974,0.216],[0.069,0.972,0.223],[0.072,0.973,0.218],[0.083,0.973,0.215],[0.094,0.971,0.219],[0.1,0.97,0.223],[0.103,0.967,0.232],[0.1,0.966,0.238],[0.092,0.964,0.251],[0.091,0.962,0.257],[0.097,0.961,0.257],[0.105,0.96,0.259],[0.108,0.961,0.254],[0.114,0.958,0.263],[0.115,0.959,0.258],[0.121,0.96,0.252],[0.136,0.959,0.248],[0.141,0.957,0.254],[0.16,0.956,0.245],[0.154,0.96,0.234],[0.164,0.959,0.231],[0.17,0.959,0.226],[0.182,0.957,0.228],[0.191,0.953,0.235],[0.192,0.951,0.242],[0.206,0.947,0.248],[0.217,0.944,0.247],[0.21,0.95,0.231],[0.221,0.948,0.23],[0.225,0.949,0.22],[0.236,0.947,0.216],[0.235,0.949,0.21],[0.243,0.948,0.205],[0.229,0.953,0.198],[0.227,0.956,0.188],[0.263,0.952,0.155],[0.274,0.949,0.156],[0.292,0.945,0.149],[0.299,0.946,0.127],[0.306,0.945,0.117],[0.314,0.942,0.115],[0.325,0.938,0.12],[0.332,0.936,0.115],[0.331,0.938,0.106],[0.334,0.938,0.095],[0.34,0.937,0.085],[0.341,0.937,0.073],[0.357,0.932,0.066],[0.354,0.934,0.057],[0.342,0.938,0.06],[0.336,0.94,0.056],[0.343,0.939,0.038],[0.343,0.939,0.026],[0.352,0.936,0.009],[0.359,0.933,0],[0.371,0.928,-0.016],[0.386,0.922,-0.034],[0.396,0.918,-0.035],[0.399,0.916,-0.04],[0.388,0.921,-0.037],[0.388,0.92,-0.056],[0.401,0.913,-0.071],[0.409,0.91,-0.066],[0.412,0.91,-0.054],[0.427,0.902,-0.056],[0.431,0.901,-0.053],[0.431,0.901,-0.046],[0.427,0.904,-0.04],[0.423,0.906,-0.03],[0.416,0.909,-0.028],[0.414,0.91,-0.02],[0.416,0.909,-0.012],[0.411,0.912,-0.008],[0.405,0.914,-0.009],[0.409,0.913,-0.001],[0.416,0.909,-0.004],[0.423,0.906,0],[0.43,0.903,0.01],[0.428,0.903,0.019],[0.437,0.899,0.013],[0.45,0.893,0.009],[0.454,0.891,0.005],[0.461,0.888,0.004],[0.465,0.885,0.006],[0.461,0.887,0.021],[0.471,0.881,0.045],[0.472,0.88,0.052],[0.481,0.874,0.066],[0.488,0.869,0.08],[0.495,0.865,0.084],[0.482,0.871,0.095],[0.489,0.864,0.119],[0.482,0.867,0.122],[0.487,0.864,0.132],[0.481,0.865,0.142],[0.49,0.859,0.148],[0.501,0.85,0.162],[0.506,0.847,0.164],[0.513,0.844,0.155],[0.533,0.831,0.162],[0.531,0.83,0.171],[0.541,0.822,0.179],[0.548,0.818,0.177],[0.549,0.813,0.196],[0.563,0.801,0.205],[0.561,0.798,0.22],[0.572,0.787,0.229],[0.578,0.777,0.248],[0.568,0.785,0.248],[0.548,0.8,0.244],[0.517,0.823,0.236],[0.5,0.836,0.224],[0.496,0.842,0.213],[0.489,0.846,0.21],[0.492,0.849,0.195],[0.48,0.86,0.173],[0.47,0.869,0.154],[0.463,0.876,0.136],[0.444,0.887,0.123],[0.443,0.887,0.133],[0.453,0.88,0.142],[0.462,0.871,0.167],[0.442,0.881,0.167],[0.439,0.878,0.189],[0.454,0.864,0.219],[0.465,0.858,0.216],[0.46,0.856,0.236],[0.454,0.855,0.249],[0.445,0.862,0.243],[0.437,0.863,0.254],[0.437,0.859,0.267],[0.42,0.86,0.289],[0.406,0.858,0.315],[0.41,0.84,0.357],[0.409,0.816,0.407],[0.422,0.815,0.397],[0.431,0.809,0.4],[0.441,0.806,0.394],[0.44,0.812,0.385],[0.448,0.811,0.377],[0.469,0.8,0.375],[0.478,0.791,0.382],[0.484,0.78,0.397],[0.496,0.767,0.408],[0.509,0.748,0.426],[0.511,0.731,0.451],[0.515,0.723,0.46],[0.515,0.709,0.482],[0.513,0.695,0.504],[0.513,0.687,0.515],[0.505,0.68,0.532],[0.5,0.679,0.537],[0.49,0.686,0.539],[0.483,0.676,0.557],[0.484,0.672,0.561],[0.48,0.673,0.563],[0.478,0.668,0.57],[0.477,0.664,0.576],[0.483,0.655,0.582],[0.479,0.652,0.588],[0.479,0.649,0.591],[0.477,0.645,0.597],[0.471,0.643,0.604],[0.468,0.64,0.61],[0.471,0.634,0.614],[0.47,0.632,0.616],[0.476,0.63,0.614],[0.485,0.624,0.613],[0.502,0.608,0.615],[0.509,0.599,0.618],[0.517,0.583,0.627],[0.516,0.575,0.635],[0.507,0.572,0.645],[0.501,0.566,0.655],[0.491,0.565,0.663],[0.486,0.573,0.66],[0.484,0.583,0.652],[0.472,0.598,0.647],[0.48,0.6,0.64],[0.467,0.612,0.638],[0.46,0.615,0.641],[0.46,0.612,0.643],[0.457,0.611,0.646],[0.456,0.614,0.645],[0.452,0.615,0.646],[0.448,0.617,0.647],[0.448,0.623,0.641],[0.45,0.625,0.638],[0.448,0.627,0.637],[0.448,0.635,0.63],[0.446,0.637,0.629],[0.439,0.638,0.633],[0.432,0.642,0.634],[0.418,0.638,0.647],[0.412,0.632,0.657],[0.401,0.628,0.667],[0.405,0.634,0.659],[0.4,0.639,0.656],[0.405,0.648,0.644],[0.396,0.655,0.643],[0.388,0.651,0.652],[0.379,0.641,0.667],[0.376,0.633,0.677],[0.364,0.632,0.684],[0.361,0.626,0.692],[0.37,0.617,0.695],[0.381,0.614,0.691],[0.384,0.608,0.695],[0.395,0.604,0.692],[0.404,0.614,0.678],[0.417,0.609,0.675],[0.425,0.608,0.671],[0.43,0.601,0.674],[0.414,0.597,0.687],[0.412,0.589,0.695],[0.402,0.582,0.706],[0.399,0.572,0.716],[0.416,0.564,0.713],[0.425,0.55,0.719],[0.437,0.537,0.722],[0.45,0.525,0.722],[0.453,0.514,0.728],[0.446,0.51,0.735],[0.452,0.502,0.737],[0.461,0.497,0.735],[0.463,0.485,0.742],[0.463,0.473,0.75],[0.456,0.472,0.755],[0.451,0.455,0.768],[0.445,0.434,0.783],[0.436,0.415,0.798],[0.42,0.401,0.814],[0.403,0.387,0.829],[0.387,0.385,0.838],[0.379,0.378,0.845],[0.373,0.383,0.845],[0.366,0.375,0.852],[0.346,0.367,0.863],[0.33,0.365,0.87],[0.328,0.351,0.877],[0.328,0.348,0.879],[0.319,0.347,0.882],[0.314,0.359,0.879],[0.316,0.365,0.876],[0.295,0.37,0.881],[0.288,0.367,0.884],[0.269,0.353,0.896],[0.258,0.338,0.905],[0.255,0.327,0.91],[0.269,0.309,0.912],[0.286,0.287,0.914],[0.301,0.277,0.912],[0.312,0.263,0.913],[0.322,0.232,0.918],[0.322,0.202,0.925],[0.309,0.191,0.932],[0.291,0.18,0.94],[0.279,0.166,0.946],[0.259,0.15,0.954],[0.252,0.161,0.954],[0.256,0.172,0.951],[0.243,0.182,0.953],[0.229,0.185,0.956],[0.222,0.193,0.956],[0.213,0.211,0.954],[0.198,0.219,0.956],[0.183,0.219,0.958],[0.185,0.232,0.955],[0.171,0.232,0.958],[0.17,0.213,0.962],[0.162,0.188,0.969],[0.157,0.173,0.972],[0.158,0.161,0.974],[0.169,0.16,0.972],[0.177,0.144,0.974],[0.18,0.129,0.975],[0.19,0.119,0.975],[0.2,0.117,0.973],[0.209,0.108,0.972],[0.213,0.107,0.971],[0.223,0.096,0.97],[0.231,0.085,0.969],[0.232,0.073,0.97],[0.23,0.065,0.971],[0.232,0.059,0.971],[0.233,0.049,0.971],[0.239,0.044,0.97],[0.246,0.028,0.969],[0.246,0.023,0.969],[0.234,0.021,0.972],[0.218,0.034,0.975],[0.197,0.048,0.979],[0.195,0.057,0.979],[0.185,0.069,0.98],[0.183,0.083,0.98],[0.176,0.093,0.98],[0.178,0.105,0.978],[0.174,0.113,0.978],[0.167,0.119,0.979],[0.164,0.128,0.978],[0.155,0.138,0.978],[0.146,0.146,0.978],[0.144,0.136,0.98],[0.14,0.145,0.979],[0.142,0.156,0.978],[0.147,0.172,0.974],[0.145,0.185,0.972],[0.149,0.198,0.969],[0.143,0.208,0.967],[0.144,0.227,0.963],[0.137,0.236,0.962],[0.131,0.256,0.958],[0.127,0.277,0.952],[0.119,0.291,0.949],[0.109,0.283,0.953],[0.09,0.271,0.958],[0.081,0.272,0.959],[0.07,0.276,0.959],[0.075,0.297,0.952],[0.072,0.313,0.947],[0.058,0.332,0.942],[0.06,0.338,0.939],[0.051,0.34,0.939],[0.039,0.353,0.935],[0.034,0.361,0.932],[0.033,0.37,0.929],[0.03,0.378,0.926],[0.023,0.387,0.922],[0.008,0.388,0.922],[0.009,0.381,0.925],[0.004,0.372,0.928],[-0.002,0.375,0.927],[-0.005,0.372,0.928],[-0.009,0.374,0.927],[-0.016,0.376,0.927],[-0.018,0.37,0.929],[-0.029,0.37,0.929],[-0.049,0.366,0.929],[-0.048,0.354,0.934],[-0.057,0.345,0.937],[-0.081,0.333,0.939],[-0.1,0.314,0.944],[-0.113,0.304,0.946],[-0.13,0.293,0.947],[-0.13,0.285,0.95],[-0.139,0.281,0.95],[-0.154,0.275,0.949],[-0.162,0.274,0.948],[-0.167,0.261,0.951],[-0.165,0.239,0.957],[-0.164,0.225,0.96],[-0.172,0.209,0.963],[-0.173,0.18,0.968],[-0.182,0.179,0.967],[-0.19,0.166,0.968],[-0.185,0.16,0.97],[-0.201,0.155,0.967],[-0.207,0.144,0.968],[-0.214,0.139,0.967],[-0.229,0.155,0.961],[-0.236,0.179,0.955],[-0.241,0.196,0.95],[-0.247,0.204,0.947],[-0.255,0.221,0.942],[-0.257,0.242,0.936],[-0.26,0.252,0.932],[-0.272,0.275,0.922],[-0.276,0.308,0.91],[-0.279,0.329,0.902],[-0.277,0.349,0.895],[-0.278,0.364,0.889],[-0.302,0.354,0.885],[-0.312,0.356,0.881],[-0.33,0.376,0.866],[-0.321,0.382,0.866],[-0.325,0.388,0.862],[-0.34,0.402,0.85],[-0.351,0.406,0.844],[-0.353,0.417,0.837],[-0.362,0.429,0.827],[-0.389,0.426,0.817],[-0.412,0.426,0.805],[-0.432,0.424,0.796],[-0.457,0.429,0.779],[-0.471,0.432,0.769],[-0.485,0.434,0.759],[-0.486,0.453,0.747],[-0.491,0.456,0.742],[-0.502,0.453,0.736],[-0.517,0.446,0.731],[-0.531,0.451,0.717],[-0.54,0.463,0.703],[-0.55,0.467,0.692],[-0.553,0.482,0.68],[-0.555,0.502,0.664],[-0.562,0.5,0.659],[-0.567,0.505,0.651],[-0.573,0.499,0.65],[-0.58,0.5,0.643],[-0.58,0.493,0.648],[-0.582,0.489,0.649],[-0.583,0.478,0.657],[-0.583,0.465,0.666],[-0.579,0.461,0.673],[-0.578,0.456,0.677],[-0.572,0.449,0.686],[-0.574,0.443,0.689],[-0.577,0.437,0.69],[-0.577,0.432,0.693],[-0.575,0.428,0.698],[-0.575,0.423,0.701],[-0.574,0.419,0.704],[-0.571,0.43,0.699],[-0.565,0.438,0.699],[-0.562,0.44,0.701],[-0.559,0.435,0.705],[-0.562,0.426,0.709],[-0.567,0.417,0.71],[-0.567,0.411,0.714],[-0.564,0.411,0.716],[-0.565,0.407,0.718],[-0.554,0.41,0.725],[-0.544,0.409,0.733],[-0.536,0.409,0.738],[-0.525,0.419,0.741],[-0.512,0.43,0.744],[-0.501,0.439,0.745],[-0.496,0.445,0.746],[-0.495,0.443,0.747],[-0.498,0.437,0.749],[-0.5,0.434,0.749],[-0.502,0.421,0.755],[-0.499,0.411,0.763],[-0.493,0.405,0.77],[-0.483,0.403,0.777],[-0.476,0.4,0.783],[-0.472,0.391,0.791],[-0.469,0.385,0.795],[-0.465,0.383,0.798],[-0.465,0.38,0.8],[-0.472,0.37,0.8],[-0.475,0.365,0.8],[-0.482,0.36,0.798],[-0.49,0.349,0.799],[-0.496,0.35,0.795],[-0.5,0.346,0.794],[-0.503,0.338,0.795],[-0.504,0.327,0.8],[-0.505,0.325,0.799],[-0.512,0.325,0.795],[-0.522,0.319,0.791],[-0.524,0.31,0.793],[-0.528,0.307,0.792],[-0.537,0.307,0.786],[-0.543,0.303,0.783],[-0.544,0.296,0.785],[-0.552,0.292,0.782],[-0.559,0.293,0.776],[-0.569,0.287,0.771],[-0.575,0.287,0.766],[-0.586,0.282,0.76],[-0.589,0.275,0.76],[-0.591,0.269,0.761],[-0.605,0.262,0.752],[-0.627,0.254,0.736],[-0.641,0.242,0.729],[-0.646,0.241,0.724],[-0.65,0.242,0.72],[-0.658,0.235,0.715],[-0.667,0.232,0.708],[-0.677,0.231,0.698],[-0.681,0.23,0.696],[-0.684,0.225,0.694],[-0.687,0.224,0.691],[-0.69,0.22,0.69],[-0.696,0.22,0.684],[-0.7,0.218,0.68],[-0.708,0.219,0.671],[-0.709,0.229,0.667],[-0.707,0.238,0.666],[-0.708,0.243,0.663],[-0.708,0.255,0.658],[-0.71,0.262,0.653],[-0.708,0.263,0.656],[-0.707,0.271,0.653],[-0.705,0.274,0.654],[-0.704,0.281,0.652],[-0.704,0.289,0.649],[-0.706,0.294,0.644],[-0.706,0.3,0.642],[-0.71,0.306,0.634],[-0.713,0.32,0.624],[-0.712,0.334,0.618],[-0.716,0.345,0.606],[-0.72,0.348,0.6],[-0.723,0.363,0.588],[-0.72,0.374,0.584],[-0.717,0.384,0.582],[-0.717,0.402,0.57],[-0.719,0.408,0.562],[-0.723,0.411,0.555],[-0.723,0.42,0.548],[-0.721,0.424,0.548],[-0.721,0.432,0.542],[-0.722,0.436,0.537],[-0.721,0.447,0.529],[-0.722,0.46,0.517],[-0.722,0.47,0.508],[-0.726,0.47,0.502],[-0.721,0.479,0.501],[-0.718,0.484,0.5],[-0.714,0.49,0.499],[-0.714,0.492,0.498],[-0.719,0.486,0.497],[-0.726,0.475,0.498],[-0.732,0.467,0.497],[-0.735,0.464,0.494],[-0.736,0.469,0.489],[-0.736,0.476,0.481],[-0.732,0.498,0.465],[-0.734,0.496,0.464],[-0.738,0.48,0.474],[-0.74,0.465,0.487],[-0.743,0.441,0.503],[-0.743,0.432,0.51],[-0.744,0.423,0.517],[-0.742,0.406,0.533],[-0.745,0.403,0.531],[-0.749,0.392,0.534],[-0.742,0.378,0.553],[-0.742,0.375,0.556],[-0.744,0.359,0.564],[-0.747,0.356,0.562],[-0.75,0.339,0.568],[-0.752,0.319,0.577],[-0.749,0.315,0.583],[-0.745,0.309,0.591],[-0.744,0.29,0.602],[-0.745,0.274,0.609],[-0.74,0.266,0.617],[-0.729,0.25,0.637],[-0.724,0.241,0.646],[-0.72,0.231,0.655],[-0.717,0.225,0.659],[-0.713,0.22,0.666],[-0.711,0.215,0.67],[-0.712,0.207,0.671],[-0.719,0.203,0.664],[-0.715,0.199,0.67],[-0.712,0.196,0.675],[-0.71,0.188,0.678],[-0.706,0.181,0.685],[-0.7,0.181,0.691],[-0.688,0.186,0.702],[-0.674,0.188,0.714],[-0.663,0.193,0.724],[-0.656,0.194,0.729],[-0.651,0.197,0.733],[-0.644,0.198,0.739],[-0.64,0.198,0.743],[-0.633,0.201,0.747],[-0.626,0.202,0.753],[-0.619,0.208,0.757],[-0.614,0.208,0.761],[-0.614,0.204,0.762],[-0.617,0.194,0.763],[-0.618,0.185,0.764],[-0.621,0.178,0.763],[-0.627,0.16,0.762],[-0.635,0.141,0.759],[-0.645,0.118,0.755],[-0.659,0.093,0.747],[-0.671,0.074,0.738],[-0.687,0.05,0.725],[-0.7,0.036,0.714],[-0.718,0.018,0.695],[-0.73,0.005,0.684],[-0.743,-0.016,0.67],[-0.745,-0.025,0.666],[-0.748,-0.029,0.663],[-0.756,-0.036,0.654],[-0.758,-0.044,0.651],[-0.762,-0.045,0.646],[-0.763,-0.057,0.643],[-0.767,-0.064,0.639],[-0.768,-0.076,0.636],[-0.772,-0.082,0.63],[-0.776,-0.103,0.622],[-0.774,-0.113,0.623],[-0.767,-0.119,0.631],[-0.766,-0.124,0.631],[-0.768,-0.134,0.626],[-0.767,-0.139,0.627],[-0.767,-0.148,0.625],[-0.761,-0.158,0.629],[-0.755,-0.175,0.632],[-0.75,-0.179,0.637],[-0.747,-0.187,0.638],[-0.745,-0.204,0.635],[-0.741,-0.219,0.634],[-0.736,-0.245,0.631],[-0.733,-0.254,0.632],[-0.733,-0.266,0.626],[-0.735,-0.277,0.619],[-0.74,-0.288,0.609],[-0.748,-0.294,0.595],[-0.757,-0.302,0.579],[-0.764,-0.32,0.561],[-0.767,-0.323,0.555],[-0.77,-0.335,0.543],[-0.773,-0.338,0.537],[-0.77,-0.35,0.533],[-0.762,-0.363,0.537],[-0.757,-0.372,0.537],[-0.755,-0.377,0.536],[-0.754,-0.376,0.539],[-0.749,-0.392,0.535],[-0.748,-0.399,0.531],[-0.744,-0.402,0.533],[-0.743,-0.409,0.529],[-0.745,-0.414,0.523],[-0.751,-0.42,0.51],[-0.758,-0.428,0.492],[-0.759,-0.434,0.485],[-0.756,-0.441,0.484],[-0.753,-0.442,0.488],[-0.75,-0.45,0.484],[-0.748,-0.461,0.478],[-0.743,-0.474,0.473],[-0.742,-0.481,0.467],[-0.744,-0.489,0.456],[-0.744,-0.491,0.453],[-0.744,-0.499,0.445],[-0.742,-0.506,0.439],[-0.741,-0.517,0.429],[-0.741,-0.532,0.409],[-0.741,-0.541,0.398],[-0.742,-0.548,0.386],[-0.746,-0.554,0.371],[-0.749,-0.554,0.364],[-0.747,-0.558,0.361],[-0.752,-0.556,0.353],[-0.753,-0.559,0.346],[-0.762,-0.556,0.333],[-0.764,-0.558,0.324],[-0.767,-0.557,0.319],[-0.769,-0.563,0.303],[-0.772,-0.565,0.291],[-0.771,-0.571,0.282],[-0.773,-0.571,0.276],[-0.779,-0.566,0.271],[-0.78,-0.566,0.267],[-0.787,-0.559,0.262],[-0.785,-0.561,0.261],[-0.789,-0.557,0.26],[-0.794,-0.549,0.262],[-0.801,-0.539,0.259],[-0.802,-0.536,0.264],[-0.808,-0.525,0.266],[-0.82,-0.511,0.259],[-0.829,-0.498,0.254],[-0.843,-0.478,0.247],[-0.852,-0.467,0.238],[-0.859,-0.455,0.234],[-0.867,-0.44,0.232],[-0.874,-0.429,0.23],[-0.886,-0.404,0.228],[-0.894,-0.385,0.229],[-0.898,-0.376,0.228],[-0.902,-0.37,0.223],[-0.909,-0.356,0.216],[-0.918,-0.337,0.209],[-0.922,-0.326,0.206],[-0.931,-0.31,0.194],[-0.935,-0.297,0.194],[-0.938,-0.287,0.193],[-0.942,-0.272,0.196],[-0.945,-0.257,0.203],[-0.947,-0.25,0.204],[-0.949,-0.234,0.21],[-0.95,-0.227,0.215],[-0.95,-0.216,0.225],[-0.95,-0.209,0.231],[-0.953,-0.196,0.233],[-0.955,-0.186,0.232],[-0.957,-0.18,0.228],[-0.96,-0.17,0.224],[-0.962,-0.159,0.22],[-0.963,-0.156,0.221],[-0.963,-0.149,0.226],[-0.966,-0.132,0.222],[-0.968,-0.121,0.219],[-0.971,-0.11,0.211],[-0.971,-0.106,0.212],[-0.972,-0.101,0.21],[-0.975,-0.088,0.206],[-0.979,-0.069,0.192],[-0.983,-0.052,0.175],[-0.986,-0.037,0.163],[-0.988,-0.019,0.153],[-0.988,-0.014,0.153],[-0.988,-0.008,0.157],[-0.987,0.005,0.161],[-0.986,0.018,0.165],[-0.987,0.02,0.162],[-0.985,0.04,0.167],[-0.984,0.054,0.17],[-0.984,0.065,0.163],[-0.986,0.068,0.155],[-0.986,0.076,0.152],[-0.986,0.078,0.147],[-0.986,0.083,0.147],[-0.989,0.077,0.129],[-0.989,0.078,0.123],[-0.99,0.074,0.116],[-0.992,0.074,0.102],[-0.992,0.085,0.093],[-0.991,0.098,0.087],[-0.991,0.109,0.075],[-0.992,0.109,0.062],[-0.993,0.109,0.047],[-0.994,0.107,0.032],[-0.994,0.103,0.018],[-0.996,0.093,-0.009],[-0.996,0.087,-0.018],[-0.996,0.082,-0.034],[-0.995,0.087,-0.05],[-0.995,0.087,-0.058],[-0.993,0.09,-0.07],[-0.993,0.09,-0.081],[-0.991,0.087,-0.101],[-0.99,0.082,-0.113],[-0.989,0.076,-0.13],[-0.988,0.076,-0.134],[-0.987,0.076,-0.138],[-0.984,0.084,-0.156],[-0.98,0.097,-0.171],[-0.977,0.107,-0.186],[-0.973,0.118,-0.197],[-0.972,0.119,-0.201],[-0.969,0.126,-0.213],[-0.966,0.136,-0.222],[-0.964,0.142,-0.225],[-0.962,0.155,-0.226],[-0.958,0.165,-0.233],[-0.956,0.172,-0.24],[-0.954,0.174,-0.244],[-0.952,0.177,-0.248],[-0.951,0.185,-0.249],[-0.949,0.189,-0.252],[-0.947,0.192,-0.256],[-0.944,0.199,-0.265],[-0.941,0.2,-0.271],[-0.939,0.205,-0.275],[-0.939,0.207,-0.275],[-0.937,0.211,-0.279],[-0.936,0.214,-0.28],[-0.932,0.228,-0.282],[-0.931,0.235,-0.28],[-0.926,0.248,-0.285],[-0.922,0.254,-0.293],[-0.923,0.257,-0.286],[-0.922,0.269,-0.277],[-0.921,0.278,-0.272],[-0.918,0.287,-0.273],[-0.917,0.295,-0.268],[-0.913,0.311,-0.264]],[[0.961,-0.277,0],[0.961,-0.276,-0.003],[0.959,-0.284,-0.001],[0.959,-0.285,0],[0.957,-0.289,0.011],[0.956,-0.293,0.021],[0.958,-0.286,0.023],[0.959,-0.283,0.015],[0.959,-0.282,0.01]],[[0.317,0.948,0],[0.316,0.949,-0.001],[0.316,0.949,-0.005],[0.321,0.947,-0.014],[0.323,0.946,-0.013],[0.327,0.945,-0.007],[0.328,0.945,0],[0.329,0.944,0.006],[0.324,0.946,0.007]]]");
  var uv = `uniform vec3 color;
uniform float brightness;
uniform float lineOpacity;

void main() {
  gl_FragColor = vec4(color * brightness, lineOpacity);
}`, dv = `uniform float thickness;

attribute vec3 direction;

void main() {
  vec3 modelPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 look = normalize(modelPos - cameraPosition);
  vec3 direction = normalize(vec3(modelMatrix * vec4(normalize(direction), 0.0)));
  float side = 2.0 * uv.x - 1.0;
  vec3 offset = cross(look, direction * side);

  vec3 billboardedPos = modelPos.xyz + normalize(offset) * thickness * 0.0012;

  gl_Position = projectionMatrix * viewMatrix * vec4(billboardedPos, 1.0);
}`;
  const fv = "#162c65", pv = 0.2, _v = 1.4;
  var k3 = ((r) => (r[r.Coastlines = 0] = "Coastlines", r[r.BorderLines = 1] = "BorderLines", r))(k3 || {});
  function hv({ lineType: r, numSegmentsForShortestLoop: e, numSegmentsForLongestLoop: t, visible: n }) {
    const o = u.useMemo(() => {
      let s;
      r === 0 && (s = lv);
      const c = s.map((k) => k.map(([J, W, K]) => new F(J, W, K).normalize())), l = c.length;
      if (l === 0) return;
      const a = [], p = new wc();
      let f = 1 / 0, d = -1 / 0;
      for (let k = 0; k < l; k++) {
        if (r === 0 && (k === 51 || k === 89 || k === 119 || k === 121 || k === 122)) {
          a.push(-1);
          continue;
        }
        p.points = c[k], p.closed = false, p.updateArcLengths();
        const J = p.getLength();
        J > d && (d = J), J < f && (f = J), a.push(J);
      }
      const _ = [];
      for (let k = 0; k < l; k++) {
        if (r === 0 && (k === 51 || k === 89 || k === 119 || k === 121 || k === 122)) {
          switch (k) {
            case 51:
              _.push(768);
              break;
            case 89:
              _.push(512);
              break;
            case 119:
              _.push(512);
              break;
            case 121:
              _.push(4096);
              break;
            case 122:
              _.push(4096);
              break;
          }
          continue;
        }
        const W = (a[k] - f) / (d - f);
        let K = e + (t - e) * W;
        K = Math.trunc(K), K % 2 !== 0 && (K += 1), _.push(K);
      }
      const h = _.reduce((k, J) => k + J, 0), b = new Nn(), g = new Uint32Array(h * 6), y = new Float32Array(h * 2 * 3 + l * 2 * 3), A = new Float32Array(h * 2 * 2 + l * 2 * 2), C = new Float32Array(h * 2 * 3 + l * 2 * 3);
      let S = 0, B = 0;
      const T = new F(), E = new F(), M = new F(), x = new F(), P = new F(), D = new F(), H = new F();
      for (let k = 0; k < l; k++) {
        const J = _[k];
        let W = false;
        (r === 0 || k === 0 || k === 24 || k === 28) && (W = true), p.points = c[k], p.closed = W, p.updateArcLengths();
        let K = true;
        for (let Q = 0; Q <= J; Q++) {
          const Z = S + Q, j = Q / J;
          if (A[Z * 4 + 0] = 0, A[Z * 4 + 1] = j, A[Z * 4 + 2] = 1, A[Z * 4 + 3] = j, p.getPointAt(j, P), j < 1) {
            const U = (Q + 1) / J;
            p.getPointAt(U, H), D.subVectors(H, P).normalize(), M.copy(P), x.copy(D), K && (T.copy(P), E.copy(D), K = false);
          } else r === 0 || k === 0 || k === 24 || k === 28 ? (P.copy(T), D.copy(E)) : (P.copy(M), D.copy(x));
          y[Z * 6 + 0] = P.x, y[Z * 6 + 1] = P.y, y[Z * 6 + 2] = P.z, y[Z * 6 + 3] = P.x, y[Z * 6 + 4] = P.y, y[Z * 6 + 5] = P.z, C[Z * 6 + 0] = D.x, C[Z * 6 + 1] = D.y, C[Z * 6 + 2] = D.z, C[Z * 6 + 3] = D.x, C[Z * 6 + 4] = D.y, C[Z * 6 + 5] = D.z;
        }
        for (let Q = 0, Z = 0; Z < J * 6; Q += 2, Z += 6) {
          const j = S * 2;
          g[B + Z + 0] = j + Q + 0, g[B + Z + 1] = j + Q + 1, g[B + Z + 2] = j + Q + 2, g[B + Z + 3] = j + Q + 2, g[B + Z + 4] = j + Q + 1, g[B + Z + 5] = j + Q + 3;
        }
        S += J + 1, B += J * 6;
      }
      return b.setIndex(new ht(g, 1)), b.setAttribute("position", new ht(y, 3)), b.setAttribute("uv", new ht(A, 2)), b.setAttribute("direction", new ht(C, 3)), b;
    }, [
      r,
      t,
      e
    ]), i = u.useMemo(() => new sr({
      uniforms: {
        thickness: {
          value: pv
        },
        color: {
          value: new Ye(fv)
        },
        brightness: {
          value: _v
        },
        lineOpacity: {
          value: 1
        }
      },
      vertexShader: dv,
      fragmentShader: uv,
      transparent: true,
      wireframe: false
    }), []);
    return R.jsx(R.Fragment, {
      children: R.jsx("mesh", {
        visible: n,
        geometry: o,
        material: i,
        rotation: [
          0,
          Math.PI,
          0
        ],
        scale: 1.015,
        renderOrder: 2
      })
    });
  }
  var mv = `uniform sampler2D dotTexture;
uniform vec3 color;
uniform float bloomIntensity;

varying float vLifetime;
varying vec2 vUv;

void main() {
    if(vLifetime <= 0.0 || vLifetime >= 2.0) {
        discard;
    }

    gl_FragColor = texture2D(dotTexture, vUv);
    gl_FragColor.rgb = color * bloomIntensity;
}`, gv = `attribute vec3 impactPosition;
attribute float startTime;

uniform float time;
uniform float duration;
uniform float size;

varying float vLifetime;
varying vec2 vUv;

float easeOutBack(float t) {
  float s = 1.70158;
  t = t - 1.0;
  return (t * t * ((s + 1.0) * t + s) + 1.0);
}

float easeInBack(float t) {
  float s = 2.70158;
  return t * t * ((s + 1.0) * t - s);
}

void main() {
  vLifetime = clamp((time - startTime) / duration, 0.0, 2.0);
  vUv = uv;

  if(vLifetime <= 0.0 || vLifetime >= 2.0) {
    return;
  }

  
  float expandStartTime = 0.0;
  float expandEndTime = 0.4;

  
  float shrinkStartTime = 1.5;
  float shrinkEndTime = 2.0;

  
  float expandProgress = clamp((vLifetime - expandStartTime) / (expandEndTime - expandStartTime), 0.0, 1.0);
  float shrinkProgress = clamp((vLifetime - shrinkStartTime) / (shrinkEndTime - shrinkStartTime), 0.0, 1.0);

  
  float scale;
  if(vLifetime < expandEndTime) {
    scale = easeOutBack(expandProgress);
  } else if(vLifetime < shrinkStartTime) {
    scale = 1.0;
  } else {
    scale = 1.0 - easeInBack(shrinkProgress);
  }

  vec3 particlePosition = (modelMatrix * vec4(impactPosition, 1.0)).xyz;

  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  float finalScale = scale * size;

  
  vec3 orientedPosition = position.x * right * finalScale +
    position.y * up * finalScale;

  gl_Position = projectionMatrix * viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}`;
  const sa = 1, wv = 5, k1 = 8, j1 = 0.3, bv = 1.65, yv = "#b3ffaf", Av = 9.4, Fn = 11500, kr = 4;
  At.preload(z0);
  function vv({ globePosition: r }) {
    const e = At(z0), n = yi().isMobile, o = u.useMemo(() => new sr({
      uniforms: {
        time: {
          value: 0
        },
        duration: {
          value: sa
        },
        size: {
          value: k1 / 1e3
        },
        dotTexture: {
          value: e
        },
        color: {
          value: new Ye(n ? "#83ff9f" : yv)
        },
        bloomIntensity: {
          value: n ? 1 : Av
        }
      },
      vertexShader: gv,
      fragmentShader: mv,
      transparent: true,
      depthWrite: false
    }), [
      e,
      n
    ]), i = u.useMemo(() => {
      const l = new Float32Array(Fn * kr);
      for (let f = 0; f < Fn; f++) l[f * kr + 0] = 0, l[f * kr + 1] = 0, l[f * kr + 2] = 0, l[f * kr + 3] = -sa * 2;
      const a = new Cn(l, kr), p = new vo(1, 1);
      return p.setAttribute("impactPosition", new rt(a, 3, 0)), p.setAttribute("startTime", new rt(a, 1, 3)), p;
    }, []), s = u.useMemo(() => Array.from({
      length: Fn
    }, () => ({
      t: 2,
      startTime: 0
    })), []);
    it(({ clock: l, camera: a }) => {
      const p = l.elapsedTime;
      for (let h = 0; h < Fn; h++) {
        const b = s[h];
        b.t >= 2 || (b.t = (p - b.startTime) / sa);
      }
      o.uniforms.time.value = p;
      const f = a.position.distanceTo(r), d = wo((f - j1) / (bv - j1), 0, 1), _ = R0(wv, k1, d) * (n ? 3 : 1.6);
      o.uniforms.size.value = _ / 1e4;
    });
    const c = u.useCallback((l) => {
      if (s.length === 0) return;
      const a = i.attributes.impactPosition.data, p = a.array, f = l.length;
      let d = 0;
      for (let _ = 0; _ < f; _++) {
        for (; d < Fn && s[d].t < 2; ) d++;
        if (d >= Fn) break;
        const h = s[d], b = l[_];
        h.t = 0, h.startTime = b.impactTime, p[d * kr + 0] = b.impactPosition[0], p[d * kr + 1] = b.impactPosition[1], p[d * kr + 2] = b.impactPosition[2], p[d * kr + 3] = h.startTime, d++;
      }
      a.needsUpdate = true;
    }, [
      s,
      i
    ]);
    return u.useLayoutEffect(() => {
      kn.setState({
        launchImpactDots: c
      });
    }, [
      c
    ]), R.jsx("instancedMesh", {
      args: [
        i,
        o,
        Fn
      ],
      scale: 1.002,
      renderOrder: 1
    });
  }
  function Cv({ globePosition: r }) {
    const e = u.useRef(null), t = u.useRef(null), n = u.useRef(null), o = u.useRef(1), i = u.useRef(0), s = u.useRef(tt.Explore);
    u.useEffect(() => {
      const a = Ft.subscribe((p) => p.menuMode, (p) => {
        s.current = p;
      }, {
        fireImmediately: true
      });
      return () => {
        a();
      };
    }, []);
    const [c, l] = vt(() => ({
      progress: 0,
      config: {
        duration: i1,
        easing: Be.easeOutBack
      },
      onChange: () => {
        const a = c.progress.get();
        n.current && (n.current.rotation.y = -o.current * a * Math.PI * 2);
      },
      onRest: () => {
        n.current && (n.current.rotation.y = 0);
      }
    }));
    return u.useEffect(() => se.on("globeSpin", ({ direction: a, time: p }) => {
      p - i.current < i1 || (i.current = p, o.current = a, l.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }), Le.getState().addSoundToQueue(Te.GlobeSpin));
    }), [
      l
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          ref: n,
          position: r,
          scale: Cu,
          children: R.jsx("group", {
            ref: e,
            children: R.jsxs("group", {
              ref: t,
              children: [
                R.jsx(av, {}),
                R.jsx(EA, {
                  globePosition: r
                }),
                R.jsx(F1, {
                  numInstances: 9500,
                  arcSegments: 15,
                  thickness: Jo() ? 7 : 3,
                  color: Jo() ? "#83ff9f" : "#b3ffaf",
                  nerdMenuFolderName: "Short Arcs"
                }),
                R.jsx(F1, {
                  numInstances: 500,
                  arcSegments: 40,
                  thickness: Jo() ? 7 : 3,
                  color: Jo() ? "#83ff9f" : "#b3ffaf",
                  nerdMenuFolderName: "Long Arcs"
                }),
                R.jsx(vv, {
                  globePosition: r
                }),
                R.jsx(XA, {}),
                R.jsx(hv, {
                  lineType: k3.Coastlines,
                  numSegmentsForShortestLoop: 32,
                  numSegmentsForLongestLoop: 256,
                  visible: true
                })
              ]
            })
          })
        }),
        R.jsx("group", {
          position: r,
          children: R.jsx(cv, {
            rotation: [
              18 * Math.PI / 180,
              0,
              0
            ],
            polar: [
              -Math.PI * 0.275,
              Math.PI * 0.275
            ],
            dragGroupRef: e,
            hoverGroupRef: t,
            speed: 3,
            validModes: [
              tt.Globe,
              tt.Explore,
              tt.Pinball
            ],
            children: R.jsx(iA, {
              tooltip: "View Globe",
              menuMode: tt.Globe,
              validModesToDisplayTooltip: [
                tt.Explore,
                tt.Pinball
              ],
              targetName: "globe-enter",
              children: R.jsxs("mesh", {
                layers: Tc,
                visible: false,
                onClick: () => {
                  (s.current === tt.Explore || s.current === tt.Pinball) && Ft.getState().setMenuMode(tt.Globe);
                },
                children: [
                  R.jsx("sphereGeometry", {
                    args: [
                      1.1 * Cu,
                      16,
                      8
                    ]
                  }),
                  R.jsx("meshBasicMaterial", {
                    color: "red",
                    wireframe: true
                  })
                ]
              })
            })
          })
        })
      ]
    });
  }
  const Sv = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/mobile_back-Dtsxo0gP.glb", Rv = 4096, Mv = 1664, Ev = {
    aroundtheworld: {
      frameCount: 16,
      yOffset: 0
    },
    ball_saved: {
      frameCount: 35,
      yOffset: 32
    },
    "bfcm-logo": {
      frameCount: 79,
      yOffset: 96
    },
    bfcm: {
      frameCount: 48,
      yOffset: 192
    },
    "cha-ching": {
      frameCount: 20,
      yOffset: 256
    },
    clapping: {
      frameCount: 16,
      yOffset: 288
    },
    "dmd-100k-strip": {
      frameCount: 51,
      yOffset: 320
    },
    "dmd-10k-strip": {
      frameCount: 51,
      yOffset: 384
    },
    "dmd-1m-strip": {
      frameCount: 56,
      yOffset: 448
    },
    "dmd-ball02": {
      frameCount: 12,
      yOffset: 512
    },
    "dmd-ball03": {
      frameCount: 12,
      yOffset: 544
    },
    "dmd-ballBounce-strip": {
      frameCount: 50,
      yOffset: 576
    },
    "dmd-border-strip": {
      frameCount: 15,
      yOffset: 640
    },
    "dmd-firstSale-01-strip": {
      frameCount: 12,
      yOffset: 672
    },
    "dmd-firstSale-02-strip": {
      frameCount: 12,
      yOffset: 704
    },
    "dmd-firstSale-03-strip": {
      frameCount: 12,
      yOffset: 736
    },
    "dmd-firstSale-04-strip": {
      frameCount: 12,
      yOffset: 768
    },
    "dmd-firstSale-05-strip": {
      frameCount: 12,
      yOffset: 800
    },
    "dmd-firstSale-text-strip": {
      frameCount: 6,
      yOffset: 832
    },
    "dmd-live-strip": {
      frameCount: 15,
      yOffset: 864
    },
    firstsale: {
      frameCount: 56,
      yOffset: 896
    },
    fivesstars: {
      frameCount: 30,
      yOffset: 960
    },
    gameover: {
      frameCount: 17,
      yOffset: 992
    },
    gamestart: {
      frameCount: 16,
      yOffset: 1024
    },
    idle: {
      frameCount: 40,
      yOffset: 1056
    },
    loader: {
      frameCount: 40,
      yOffset: 1120
    },
    "merchantfirstsale-strip": {
      frameCount: 56,
      yOffset: 1184
    },
    "minigame-box": {
      frameCount: 20,
      yOffset: 1248
    },
    missioncomplete: {
      frameCount: 16,
      yOffset: 1280
    },
    plane: {
      frameCount: 20,
      yOffset: 1312
    },
    "retail-lock-1": {
      frameCount: 15,
      yOffset: 1344
    },
    "retail-lock-2": {
      frameCount: 15,
      yOffset: 1376
    },
    "retail-lock-3": {
      frameCount: 35,
      yOffset: 1408
    },
    "retail-multiball": {
      frameCount: 30,
      yOffset: 1472
    },
    seeya: {
      frameCount: 12,
      yOffset: 1504
    },
    shipit: {
      frameCount: 12,
      yOffset: 1536
    },
    shoppy: {
      frameCount: 9,
      yOffset: 1568
    },
    watchtheworld: {
      frameCount: 45,
      yOffset: 1600
    }
  }, Hn = {
    atlasWidth: Rv,
    atlasHeight: Mv,
    animations: Ev
  }, j3 = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/atlas-_Ms3ySym.png", Bv = (r, e = "en-US") => `$${r.toLocaleString(e)}`;
  var aa, U1;
  function U3() {
    if (U1) return aa;
    U1 = 1;
    function r(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    return aa = r, aa;
  }
  var ca, N1;
  function Iv() {
    if (N1) return ca;
    N1 = 1;
    var r = typeof Di == "object" && Di && Di.Object === Object && Di;
    return ca = r, ca;
  }
  var la, z1;
  function N3() {
    if (z1) return la;
    z1 = 1;
    var r = Iv(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
    return la = t, la;
  }
  var ua, W1;
  function Tv() {
    if (W1) return ua;
    W1 = 1;
    var r = N3(), e = function() {
      return r.Date.now();
    };
    return ua = e, ua;
  }
  var da, J1;
  function xv() {
    if (J1) return da;
    J1 = 1;
    var r = /\s/;
    function e(t) {
      for (var n = t.length; n-- && r.test(t.charAt(n)); ) ;
      return n;
    }
    return da = e, da;
  }
  var fa, V1;
  function Pv() {
    if (V1) return fa;
    V1 = 1;
    var r = xv(), e = /^\s+/;
    function t(n) {
      return n && n.slice(0, r(n) + 1).replace(e, "");
    }
    return fa = t, fa;
  }
  var pa, K1;
  function z3() {
    if (K1) return pa;
    K1 = 1;
    var r = N3(), e = r.Symbol;
    return pa = e, pa;
  }
  var _a, Q1;
  function Fv() {
    if (Q1) return _a;
    Q1 = 1;
    var r = z3(), e = Object.prototype, t = e.hasOwnProperty, n = e.toString, o = r ? r.toStringTag : void 0;
    function i(s) {
      var c = t.call(s, o), l = s[o];
      try {
        s[o] = void 0;
        var a = true;
      } catch {
      }
      var p = n.call(s);
      return a && (c ? s[o] = l : delete s[o]), p;
    }
    return _a = i, _a;
  }
  var ha, X1;
  function Lv() {
    if (X1) return ha;
    X1 = 1;
    var r = Object.prototype, e = r.toString;
    function t(n) {
      return e.call(n);
    }
    return ha = t, ha;
  }
  var ma, q1;
  function Dv() {
    if (q1) return ma;
    q1 = 1;
    var r = z3(), e = Fv(), t = Lv(), n = "[object Null]", o = "[object Undefined]", i = r ? r.toStringTag : void 0;
    function s(c) {
      return c == null ? c === void 0 ? o : n : i && i in Object(c) ? e(c) : t(c);
    }
    return ma = s, ma;
  }
  var ga, Y1;
  function Gv() {
    if (Y1) return ga;
    Y1 = 1;
    function r(e) {
      return e != null && typeof e == "object";
    }
    return ga = r, ga;
  }
  var wa, Z1;
  function Ov() {
    if (Z1) return wa;
    Z1 = 1;
    var r = Dv(), e = Gv(), t = "[object Symbol]";
    function n(o) {
      return typeof o == "symbol" || e(o) && r(o) == t;
    }
    return wa = n, wa;
  }
  var ba, $1;
  function Hv() {
    if ($1) return ba;
    $1 = 1;
    var r = Pv(), e = U3(), t = Ov(), n = NaN, o = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, c = parseInt;
    function l(a) {
      if (typeof a == "number") return a;
      if (t(a)) return n;
      if (e(a)) {
        var p = typeof a.valueOf == "function" ? a.valueOf() : a;
        a = e(p) ? p + "" : p;
      }
      if (typeof a != "string") return a === 0 ? a : +a;
      a = r(a);
      var f = i.test(a);
      return f || s.test(a) ? c(a.slice(2), f ? 2 : 8) : o.test(a) ? n : +a;
    }
    return ba = l, ba;
  }
  var ya, e2;
  function kv() {
    if (e2) return ya;
    e2 = 1;
    var r = U3(), e = Tv(), t = Hv(), n = "Expected a function", o = Math.max, i = Math.min;
    function s(c, l, a) {
      var p, f, d, _, h, b, g = 0, y = false, A = false, C = true;
      if (typeof c != "function") throw new TypeError(n);
      l = t(l) || 0, r(a) && (y = !!a.leading, A = "maxWait" in a, d = A ? o(t(a.maxWait) || 0, l) : d, C = "trailing" in a ? !!a.trailing : C);
      function S(k) {
        var J = p, W = f;
        return p = f = void 0, g = k, _ = c.apply(W, J), _;
      }
      function B(k) {
        return g = k, h = setTimeout(M, l), y ? S(k) : _;
      }
      function T(k) {
        var J = k - b, W = k - g, K = l - J;
        return A ? i(K, d - W) : K;
      }
      function E(k) {
        var J = k - b, W = k - g;
        return b === void 0 || J >= l || J < 0 || A && W >= d;
      }
      function M() {
        var k = e();
        if (E(k)) return x(k);
        h = setTimeout(M, T(k));
      }
      function x(k) {
        return h = void 0, C && p ? S(k) : (p = f = void 0, _);
      }
      function P() {
        h !== void 0 && clearTimeout(h), g = 0, p = b = f = h = void 0;
      }
      function D() {
        return h === void 0 ? _ : x(e());
      }
      function H() {
        var k = e(), J = E(k);
        if (p = arguments, f = this, b = k, J) {
          if (h === void 0) return B(b);
          if (A) return clearTimeout(h), h = setTimeout(M, l), S(b);
        }
        return h === void 0 && (h = setTimeout(M, l)), _;
      }
      return H.cancel = P, H.flush = D, H;
    }
    return ya = s, ya;
  }
  var jv = kv();
  const Uv = K2(jv);
  var Aa, t2;
  function Nv() {
    if (t2) return Aa;
    t2 = 1;
    function r() {
      function e(i) {
        var s = t();
        return s[i];
      }
      function t() {
        var i = window.location.hash;
        i && (i = i.split("#")[1]);
        var s = i.split("&"), c = {};
        return s.forEach(function(l, a) {
          l = l.split("="), l[0] != "" && (c[l[0]] = l[1]);
        }), c;
      }
      function n(i) {
        var s = Object.keys(i), c = Object.values(i), l = [];
        s.forEach(function(p, f) {
          p != "" && l.push(s[f] + "=" + c[f]);
        });
        var a = l.join("&");
        window.location.hash = a;
      }
      function o(i, s) {
        var c = t();
        c[i] = s, n(c);
      }
      return {
        getUrlHashParameter: e,
        getUrlHashParameters: t,
        setUrlHashParameter: o,
        setUrlHashParameters: n
      };
    }
    return Aa = r, Aa;
  }
  var zv = Nv();
  const Wv = K2(zv), { setUrlHashParameter: Jv, getUrlHashParameters: Vv } = Wv();
  rl = function(r, e, t) {
    const n = Vv(), o = (f, d) => {
      const _ = encodeURIComponent(f), h = n[_];
      if (h === void 0) return null;
      switch (d.type) {
        case "BOOLEAN":
          return h === "true";
        case "VECTOR2D":
        case "VECTOR3D":
          return JSON.parse(decodeURIComponent(h));
        case "COLOR":
          return `#${h}`;
        default:
          return decodeURIComponent(h);
      }
    }, i = (f) => {
      const d = f.toString().split(".");
      return d.length > 1 ? d[1].length : 0;
    }, s = (f, d) => {
      var _a2;
      switch (d.type) {
        case "VECTOR2D":
        case "VECTOR3D":
          return JSON.stringify(f);
        case "COLOR":
          return f.replace("#", "");
        case "NUMBER":
          return f.toFixed(i(((_a2 = d.settings) == null ? void 0 : _a2.step) || f));
        default:
          return encodeURIComponent(f);
      }
    }, c = (f, d, _) => {
      Jv(encodeURIComponent(d), s(f, _));
    }, l = (f, d) => {
      const _ = o(f, d);
      _ !== null && setTimeout(() => u9.set({
        [f]: _
      }, false), 0);
    }, a = (f) => Object.fromEntries(Object.entries(f).map(([d, _]) => {
      if (_.type === "FOLDER") return [
        d,
        {
          ..._,
          schema: a(_.schema)
        }
      ];
      const h = {
        ..._,
        value: _.value
      };
      h.onChange === void 0 && (h.transient = false);
      const b = Uv((g, y, A) => {
        c(g, y, A);
      }, 100);
      return h.onChange = (g, y, A) => {
        var _a2;
        (_a2 = document.activeElement) == null ? void 0 : _a2.blur();
        const C = _.onChange;
        A.initial ? l(y, A) : b(g, y, A), C && C(g, y, A);
      }, [
        d,
        h
      ];
    })), p = a(e);
    return gc(r, p, t);
  };
  const Wr = (r, e) => {
    !r || !e || r.getCollider(e.handle) && r.removeCollider(e, true);
  }, sn = (r, e) => {
    !r || !e || r.getRigidBody(e.handle) && r.removeRigidBody(e);
  }, W3 = (r, e) => {
    !r || !e || r.getImpulseJoint(e.handle) && r.removeImpulseJoint(e, false);
  };
  function Tt(r, e) {
    let t = 0, n = 0;
    for (const o of r) t |= 1 << o;
    for (const o of e) n |= 1 << o;
    return t << 16 | n;
  }
  function ls(r, e, t = false) {
    const n = r.geometry.attributes.position.array, o = [], i = new F();
    for (let s = 0; s < n.length; s += 3) i.set(n[s], n[s + 1], n[s + 2]), i.multiply(r.scale), i.applyQuaternion(r.quaternion), i.add(r.position), i.multiply(e.scale), i.applyQuaternion(e.quaternion), t && i.add(e.position), o.push(i.x), o.push(-i.z);
    return new Float32Array(o);
  }
  function Bi(r, e, t = false) {
    const n = r.geometry.attributes.position.array, o = [], i = new F();
    for (let s = 0; s < n.length; s += 3) i.set(n[s], n[s + 1], n[s + 2]), i.multiply(r.scale), i.applyQuaternion(r.quaternion), i.add(r.position), i.multiply(e.scale), i.applyQuaternion(e.quaternion), t && i.add(e.position), o.push(i.x), o.push(-i.z);
    return new Float32Array(o);
  }
  const Kv = 0.25, Qv = 0.05, xt = u.forwardRef(({ mesh: r, collisionGroup: e = Pt, worldTransform: t, sensor: n = false, type: o = "polyline", applyWorldTranslationToVertices: i = false, enabled: s = true, onIntersectionEnter: c, onIntersectionExit: l, onCollisionEnter: a, onCollisionExit: p, onContactForce: f }, d) => {
    const { world: _, RAPIER: h, subscribeToColliderEvents: b } = Fr(), g = u.useRef(null);
    return u.useLayoutEffect(() => {
      var _a2, _b2;
      if (!_ || !h) return;
      let y = null;
      if (r instanceof ir) {
        const T = ls(r, t, i);
        if (o === "hull") y = kt.convexHull(T);
        else if (o === "trimesh") {
          const E = (_a2 = r.geometry.index) == null ? void 0 : _a2.array;
          if (!E) return;
          y = kt.trimesh(T, E);
        }
      } else if (r instanceof pc) {
        const T = Bi(r, t, i), E = (_b2 = r.geometry.index) == null ? void 0 : _b2.array;
        if (!E) return;
        y = kt.polyline(T, E);
      }
      if (!y) return;
      y.setEnabled(s), e === qd || e === Yd ? y.setRestitution(Qv) : y.setRestitution(Kv);
      const A = Tt([
        e
      ], [
        ct
      ]);
      y.setCollisionGroups(A), n && y.setSensor(true);
      const C = c || l || a || p, S = f;
      C && S ? y.setActiveEvents(h.ActiveEvents.COLLISION_EVENTS | h.ActiveEvents.CONTACT_FORCE_EVENTS) : C ? y.setActiveEvents(h.ActiveEvents.COLLISION_EVENTS) : S && y.setActiveEvents(h.ActiveEvents.CONTACT_FORCE_EVENTS), g.current = _.createCollider(y);
      const B = b(g.current.handle, {
        onIntersectionEnter: c,
        onIntersectionExit: l,
        onCollisionEnter: a,
        onCollisionExit: p,
        onContactForce: f
      });
      return () => {
        B(), Wr(_, g.current);
      };
    }, [
      r,
      e,
      t,
      b,
      n,
      c,
      l,
      a,
      p,
      _,
      h,
      o,
      i,
      s,
      f
    ]), u.useImperativeHandle(d, () => g.current, []), null;
  });
  xt.displayName = "StaticCollider";
  const Xv = 500 / 1e6, qv = 0.05, Yv = 0.02, Zv = 200, $v = new Pr(), us = u.forwardRef(({ name: r, colliderMesh: e, ringMesh: t, worldTransform: n, worldPositionOfBumperCenter: o, impulseStrength: i = Xv, collisionCooldown: s = qv, ringTravelDistance: c = Yv, animationDuration: l = Zv, colliderType: a = "hull", worldTransformForCollider: p = null, collisionGroup: f = Pt, enabled: d = true, bumperIndex: _ = 0, onHit: h }, b) => {
    const g = Ue((P) => P.clock), y = u.useRef(0), A = u.useRef(null), C = u.useRef(null), S = u.useRef(false), B = u.useRef(null), T = u.useRef(true), [E, M] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: l
      },
      onStart: () => {
        S.current = true;
      },
      onChange: () => {
        if (!A.current) return;
        const P = E.progress.get();
        if (P < 0.5) {
          const D = Be.easeOutBounce(P / 0.5);
          A.current.position.y = D * -c;
        } else {
          const D = Be.easeOutBounce((P - 0.5) / 0.5);
          A.current.position.y = -c + D * c;
        }
      },
      onRest: () => {
        A.current && (A.current.position.y = 0, S.current = false);
      }
    })), x = u.useCallback((P) => {
      if (!T.current) return;
      const D = P.other.rigidBody;
      if (!D) return;
      const H = g.elapsedTime;
      if (H - y.current < s) return;
      y.current = H;
      const k = D.translation(), J = $v.set(k.x - o.x, k.y - -o.z).normalize(), W = {
        x: J.x * i,
        y: J.y * i
      };
      D.applyImpulse(W, true), S.current || M.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }), he("collision", {
        target: r,
        time: g.elapsedTime,
        type: "bumper",
        ball: P.other.object
      }), h && h(_), Le.getState().addSoundToQueue(Te.PopBumperHit), Le.getState().addSoundToQueue(Te.BallHit);
    }, [
      r,
      g,
      M,
      s,
      i,
      o,
      h,
      _
    ]);
    return u.useImperativeHandle(b, () => ({
      getCollider: () => B.current,
      getOuterRingGroup: () => C.current,
      enableBumperResponse: () => {
        T.current = true;
      },
      disableBumperResponse: () => {
        T.current = false;
      }
    }), []), u.useEffect(() => {
      t.material.side = Dt;
    }, [
      t
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: n.position,
          quaternion: n.quaternion,
          scale: n.scale,
          children: R.jsx("group", {
            ref: C,
            children: R.jsx("group", {
              ref: A,
              children: R.jsx("mesh", {
                geometry: t.geometry,
                material: t.material,
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
              })
            })
          })
        }),
        R.jsx(xt, {
          ref: B,
          mesh: e,
          collisionGroup: f,
          worldTransform: p ?? n,
          applyWorldTranslationToVertices: true,
          type: a,
          onCollisionEnter: x,
          enabled: d
        })
      ]
    });
  });
  us.displayName = "Bumper";
  function r2(r) {
    switch (r) {
      case ot.RetailStores:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          F0
        ]);
      case ot.FiveStar:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          Zd
        ]);
      case ot.Boxes:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          Ko
        ]);
      case ot.CashRegister:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          $d
        ]);
      case ot.Podium:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          w0
        ]);
      case ot.Milestone:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          Za
        ]);
      case ot.FirstSale:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          e3
        ]);
      default:
        return Tt([
          ct
        ], [
          ct,
          Pt,
          $r,
          F0
        ]);
    }
  }
  function J3(r, e) {
    const t = L.getState(), n = t.ballMeshRefs, o = t.ballLockTargets, i = e * e;
    for (let s = 0; s < n.length; s++) {
      const c = n[s];
      if (c && o[s].target === null && c.position.distanceToSquared(r) < i) return false;
    }
    return true;
  }
  ft = function(r) {
    const e = new F(), t = new Ne(), n = new F();
    return r.getWorldPosition(e), r.getWorldQuaternion(t), r.getWorldScale(n), {
      position: e,
      quaternion: t,
      scale: n
    };
  };
  var eC = `uniform vec3 color;
uniform float bloomIntensity;
uniform float pulseLength;

varying vec2 vUv;
varying float vProgress;

void main() {
  if (vProgress <= 0.0 || vProgress >= 1.0) {
    discard;
  }

  float t = vProgress - vUv.y;

  
  float currentPulseLength = pulseLength * (1.0 - vProgress);

  
  if(t <= 0.0 || t > currentPulseLength) {
    discard;
  }

  
  float tailOpacityAdjustment = (1.0 - t / currentPulseLength);

  
  float fadeOutFactor = 1.0;
  float fadeOutStartThreshold = 0.8;
  float fadeOutEndThreshold = 0.975;
  if (vProgress > fadeOutStartThreshold) {
    float normalizedFadeOutProgress = clamp((vProgress - fadeOutStartThreshold) / (fadeOutEndThreshold - fadeOutStartThreshold), 0.0, 1.0);
    fadeOutFactor = 1.0 - normalizedFadeOutProgress;
  }

  gl_FragColor = vec4(color * bloomIntensity, tailOpacityAdjustment * fadeOutFactor);
}`, tC = `attribute vec3 direction;
attribute float bumperIndex;

uniform float thickness;

uniform float startTimes[3];
uniform float time;
uniform float animationDuration;

varying vec2 vUv;
varying float vProgress;

float easeOutCubic(float x) {
  return 1.0 - pow(1.0 - x, 3.0);
}

void main() {
  vUv = uv;
  vProgress = easeOutCubic(clamp((time - startTimes[int(bumperIndex)]) / animationDuration, 0.0, 1.0));
  if (vProgress <= 0.0 || vProgress >= 1.0) {
    return;
  }

  vec3 modelPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 look = normalize(modelPos - cameraPosition);
  vec3 direction = normalize(vec3(modelMatrix * vec4(normalize(direction), 0.0)));
  float side = 2.0 * uv.x - 1.0;
  vec3 offset = cross(look, direction * side);
  vec3 billboardedPos = modelPos.xyz + normalize(offset) * thickness * 0.0012;
  gl_Position = projectionMatrix * viewMatrix * vec4(billboardedPos, 1.0);
}`;
  const n2 = 3, va = 20, rC = 30, nC = 0.25, oC = 0.25, iC = 1, sC = 0.8, aC = "#f5c17e", cC = 9, lC = 0.3, a0 = 0.5, V3 = u.forwardRef(({ bumperNormals: r, bumperPositions: e }, t) => {
    const n = Ue((a) => a.clock), o = u.useCallback((a, p, f) => {
      const _ = [], h = new F(), b = new Ne(), g = new F(), y = new F();
      for (let A = 0; A < va; A += 1) {
        const C = [], S = j0.degToRad(rC), B = Math.random() * 2 * Math.PI, T = Math.acos(1 - Math.random() * (1 - Math.cos(S)));
        h.set(Math.sin(T) * Math.cos(B), Math.sin(T) * Math.sin(B), Math.cos(T)), h.applyQuaternion(f), b.setFromUnitVectors(a, h), g.copy(a).applyQuaternion(b).normalize();
        const E = nC + Math.random() * oC;
        for (let M = 0; M < 10; M += 1) {
          const x = M / 9;
          C.push(g.clone().multiplyScalar(x).sub(y.set(0, iC * 0.5 * x * x, 0)).multiplyScalar(E).add(p));
        }
        _.push(C);
      }
      return _;
    }, []), i = u.useMemo(() => {
      const a = [], p = new F(), f = new F(0, 0, 1), d = new Ne();
      return e.forEach((_, h) => {
        const b = r[h];
        d.setFromUnitVectors(f, b), p.copy(_).addScaledVector(b, -0);
        const g = o(b, p, d);
        a.push(g);
      }), a;
    }, [
      r,
      e,
      o
    ]), s = u.useMemo(() => {
      const a = i.length, p = a * va, f = 32, d = p * f, _ = new Nn();
      if (p === 0) return _;
      const h = new Uint32Array(d * 6), b = new Float32Array(d * 2 * 3 + p * 2 * 3), g = new Float32Array(d * 2 * 2 + p * 2 * 2), y = new Float32Array(d * 2 * 3 + p * 2 * 3), A = new Float32Array(d * 2 * 1 + p * 2 * 1);
      let C = 0;
      const S = new wc(), B = new F(), T = new F(), E = new F(), M = new F();
      for (let x = 0; x < a; x++) for (let P = 0; P < va; P++) {
        S.points = i[x][P], S.closed = false, S.updateArcLengths();
        for (let D = 0; D <= f; D++) {
          const H = C * (f + 1) + D, k = D / f;
          if (g[H * 4 + 0] = 0, g[H * 4 + 1] = k, g[H * 4 + 2] = 1, g[H * 4 + 3] = k, S.getPointAt(k, T), k < 1) {
            const J = (D + 1) / f;
            S.getPointAt(J, M), E.subVectors(M, T).normalize(), B.copy(E);
          } else T.copy(T), E.copy(B);
          b[H * 6 + 0] = T.x, b[H * 6 + 1] = T.y, b[H * 6 + 2] = T.z, b[H * 6 + 3] = T.x, b[H * 6 + 4] = T.y, b[H * 6 + 5] = T.z, y[H * 6 + 0] = E.x, y[H * 6 + 1] = E.y, y[H * 6 + 2] = E.z, y[H * 6 + 3] = E.x, y[H * 6 + 4] = E.y, y[H * 6 + 5] = E.z, A[H * 2 + 0] = x, A[H * 2 + 1] = x;
        }
        for (let D = 0, H = 0; H < f * 6; D += 2, H += 6) {
          const k = C * (f + 1) * 2;
          h[C * f * 6 + H + 0] = k + D + 0, h[C * f * 6 + H + 1] = k + D + 1, h[C * f * 6 + H + 2] = k + D + 2, h[C * f * 6 + H + 3] = k + D + 2, h[C * f * 6 + H + 4] = k + D + 1, h[C * f * 6 + H + 5] = k + D + 3;
        }
        C += 1;
      }
      return _.setIndex(new ht(h, 1)), _.setAttribute("position", new ht(b, 3)), _.setAttribute("uv", new ht(g, 2)), _.setAttribute("direction", new ht(y, 3)), _.setAttribute("bumperIndex", new ht(A, 1)), _;
    }, [
      i
    ]), c = u.useMemo(() => new sr({
      uniforms: {
        thickness: {
          value: sC
        },
        color: {
          value: new Ye(aC)
        },
        bloomIntensity: {
          value: cC
        },
        pulseLength: {
          value: lC
        },
        startTimes: {
          value: Array(n2).fill(-a0)
        },
        time: {
          value: 0
        },
        animationDuration: {
          value: a0
        }
      },
      vertexShader: tC,
      fragmentShader: eC,
      transparent: true,
      visible: false
    }), []), l = u.useRef(Array(n2).fill(-a0));
    return u.useImperativeHandle(t, () => ({
      fireSparks: (a) => {
        const p = n.elapsedTime;
        p - l.current[a] > a0 && (l.current[a] = p, c.uniforms.startTimes.value = l.current, Le.getState().addSoundToQueue(Te.Sparks));
      },
      setVisible: (a) => {
        c.visible = a;
      }
    }), [
      n,
      c
    ]), it(({ clock: a }) => {
      c.uniforms.time.value = a.elapsedTime;
    }), R.jsx(R.Fragment, {
      children: R.jsx("mesh", {
        geometry: s,
        material: c,
        renderOrder: 5
      })
    });
  });
  V3.displayName = "Sparks";
  const uC = 650, dC = 650, Wn = ({ miniGameType: r, miniGameHeight: e, onLowerStart: t, onLowerComplete: n, onRaiseStart: o, onRaiseComplete: i }) => {
    const s = u.useRef(null), c = L.getState().currentMiniGame, l = u.useRef(r === c), a = u.useRef(false), [p, f] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeInOutCubic,
        duration: uC
      },
      onChange: () => {
        if (!s.current) return;
        const d = p.progress.get();
        a.current ? s.current.position.y = -e + d * e : s.current.position.y = 0 - d * e;
      },
      onRest: () => {
        if (!a.current && s.current) {
          if (s.current.visible = false, n) {
            const d = L.getState(), _ = d.currentMiniGame === ot.Milestone || d.currentMiniGame === ot.FirstSale, h = d.previousMiniGame === r;
            (!_ || !h) && n();
          }
        } else a.current && (i && i(), he("miniGameFence", {
          raise: false
        }));
      }
    }));
    return u.useEffect(() => L.subscribe((d) => d.currentMiniGame, (d) => {
      d === r && !l.current ? (l.current = true, f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        delay: dC,
        onStart: () => {
          a.current = true, s.current && (s.current.visible = true), o && o();
        }
      })) : d !== r && l.current && (Le.getState().addSoundToQueue(Te.MiniGameSwap), l.current = false, f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        onStart: () => {
          a.current = false, t && t();
        }
      }), he("miniGameFence", {
        raise: true
      }));
    }), [
      f,
      r,
      o,
      t
    ]), u.useEffect(() => {
      r === c && (o && o(), i && i());
    }, []), {
      miniGameGroupRef: s,
      initiallyVisible: r === c
    };
  }, o2 = () => {
    const r = new Nn(), e = 0.02, t = e * Math.sqrt(3) / 2, n = new Float32Array([
      0,
      t / 2,
      0,
      -e / 2,
      -t / 2,
      0,
      e / 2,
      -t / 2,
      0
    ]);
    return r.setAttribute("position", new Ga(n, 3)), r.computeVertexNormals(), r;
  }, fC = 15, pC = 20, _C = 2e3, K3 = 30, Ca = 0.01, hC = 0.08, mC = ({ floorMesh: r, podiumMeshes: e, podiumColliderMeshes: t, worldTransform: n }) => {
    const o = u.useRef(false), { miniGameGroupRef: i, initiallyVisible: s } = Wn({
      miniGameType: ot.Podium,
      miniGameHeight: 0.17205,
      onLowerComplete: () => {
        o.current = false, a.current = 0, L.getState().setPodiumMiniGameHitCount(0), p.current = false, h.current && h.current.setVisible(false);
      },
      onRaiseStart: () => {
        o.current = true, h.current && h.current.setVisible(true);
      }
    }), c = u.useMemo(() => e.map((E) => {
      const M = new F();
      return E.getWorldPosition(M), M;
    }), [
      e
    ]), l = u.useMemo(() => e.map((E) => {
      const M = new Ne();
      return E.getWorldQuaternion(M), new F(0, 1, 0).applyQuaternion(M).normalize();
    }), [
      e
    ]), a = u.useRef(0), p = u.useRef(false), f = u.useRef(Array(e.length).fill(null)), d = u.useRef(0), _ = u.useRef(false), h = u.useRef(null), b = u.useRef(false), [g, y] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: _C
      },
      onStart: () => {
        h.current && (h.current.fireSparks(0), h.current.fireSparks(1), h.current.fireSparks(2));
      },
      onChange: () => {
        const E = g.progress.get();
        if (E < 0.25) {
          const x = Be.easeOutBounce(E / 0.25) * Ca;
          f.current.forEach((P) => {
            if (P) {
              const D = P.getOuterRingGroup();
              D && (D.position.y = x);
            }
          });
        } else if (E > 0.75) {
          const M = Be.easeOutBounce((E - 0.75) / 0.25), x = Ca - M * Ca;
          f.current.forEach((P) => {
            if (P) {
              const D = P.getOuterRingGroup();
              D && (D.position.y = x);
            }
          });
        }
      },
      onRest: () => {
        _.current = false, d.current = 0, f.current.forEach((E) => {
          if (E) {
            E.enableBumperResponse();
            const M = E.getOuterRingGroup();
            M && (M.position.y = 0);
          }
        });
      }
    })), A = u.useCallback((E) => {
      _.current || (d.current++, d.current >= fC && h.current && h.current.fireSparks(E), d.current >= pC && (_.current = true, d.current = 0, f.current.forEach((M) => {
        M && M.disableBumperResponse();
      }), y.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      })), a.current++, L.getState().setPodiumMiniGameHitCount(a.current), a.current >= K3 && !p.current && (L.getState().setSwapIsInProgress(true), p.current = true, he("podiumMiniGameCompleted", {
        time: performance.now()
      }), he("swapMiniGame", {
        time: performance.now()
      })));
    }, [
      y
    ]);
    u.useEffect(() => se.on("gameOver", () => {
      L.getState().currentMiniGame === ot.Podium && (a.current = 0, L.getState().setPodiumMiniGameHitCount(0), p.current = false);
    }), []);
    const C = u.useMemo(() => {
      const E = new ir();
      return E.geometry = o2(), E.rotation.x = Math.PI / 2, E.rotation.z = -30 * (Math.PI / 180), E;
    }, []), S = u.useMemo(() => {
      const E = new ir();
      return E.geometry = o2(), E.rotation.x = Math.PI / 2, E.rotation.z = -75 * (Math.PI / 180), E;
    }, []), B = u.useMemo(() => {
      const E = {
        position: new F().copy(n.position),
        quaternion: new Ne().copy(n.quaternion),
        scale: new F().copy(n.scale)
      };
      return E.position.x += 0.05, E.position.z += 5e-3, E;
    }, [
      n
    ]), T = u.useMemo(() => {
      const E = {
        position: new F().copy(n.position),
        quaternion: new Ne().copy(n.quaternion),
        scale: new F().copy(n.scale)
      };
      return E.position.x += -0.045, E.position.z += -0, E.scale.x = 1.2, E.scale.y = 1.2, E.scale.z = 1.2, E;
    }, [
      n
    ]);
    return it(() => {
      if (!o.current) return;
      const E = J3(n.position, hC);
      E && !b.current ? (b.current = true, d.current = 0) : !E && b.current && (b.current = false, d.current = 0);
    }), R.jsxs(R.Fragment, {
      children: [
        R.jsxs("group", {
          position: n.position,
          quaternion: n.quaternion,
          scale: n.scale,
          children: [
            R.jsxs("group", {
              ref: i,
              visible: s,
              children: [
                R.jsx("mesh", {
                  geometry: r.geometry,
                  material: r.material,
                  position: r.position,
                  rotation: r.rotation,
                  scale: r.scale
                }),
                e.map((E, M) => R.jsx(us, {
                  name: E.name,
                  colliderMesh: t[M],
                  ringMesh: E,
                  worldTransform: {
                    position: new F(),
                    quaternion: new Ne(),
                    scale: new F(1, 1, 1)
                  },
                  worldPositionOfBumperCenter: c[M],
                  impulseStrength: 500 / 1e6,
                  collisionCooldown: 0.05,
                  worldTransformForCollider: n,
                  collisionGroup: w0,
                  bumperIndex: M,
                  onHit: A,
                  ref: (x) => {
                    f.current[M] = x;
                  }
                }, E.uuid))
              ]
            }),
            R.jsx(xt, {
              mesh: C,
              worldTransform: B,
              collisionGroup: w0,
              applyWorldTranslationToVertices: true,
              type: "hull"
            }),
            R.jsx(xt, {
              mesh: S,
              worldTransform: T,
              collisionGroup: w0,
              applyWorldTranslationToVertices: true,
              type: "hull"
            })
          ]
        }),
        R.jsx(V3, {
          ref: h,
          bumperPositions: c,
          bumperNormals: l
        })
      ]
    });
  }, nr = 128, pr = 32, gC = 4096, i2 = Math.floor(gC / nr), Q3 = nr / Hn.atlasWidth, X3 = pr / Hn.atlasHeight, nl = {
    charWidth: 6,
    charHeight: 8,
    charSpacing: 1
  }, wC = {
    charWidth: 12,
    charHeight: 16,
    charSpacing: 1
  }, q3 = {
    A: [
      0,
      0
    ],
    B: [
      1,
      0
    ],
    C: [
      2,
      0
    ],
    D: [
      3,
      0
    ],
    E: [
      4,
      0
    ],
    F: [
      5,
      0
    ],
    G: [
      6,
      0
    ],
    H: [
      7,
      0
    ],
    I: [
      8,
      0
    ],
    J: [
      9,
      0
    ],
    K: [
      10,
      0
    ],
    L: [
      11,
      0
    ],
    M: [
      12,
      0
    ],
    N: [
      13,
      0
    ],
    O: [
      14,
      0
    ],
    P: [
      15,
      0
    ],
    Q: [
      16,
      0
    ],
    R: [
      17,
      0
    ],
    S: [
      18,
      0
    ],
    T: [
      19,
      0
    ],
    U: [
      20,
      0
    ],
    V: [
      0,
      1
    ],
    W: [
      1,
      1
    ],
    X: [
      2,
      1
    ],
    Y: [
      3,
      1
    ],
    Z: [
      4,
      1
    ],
    1: [
      5,
      1
    ],
    2: [
      6,
      1
    ],
    3: [
      7,
      1
    ],
    4: [
      8,
      1
    ],
    5: [
      9,
      1
    ],
    6: [
      10,
      1
    ],
    7: [
      11,
      1
    ],
    8: [
      12,
      1
    ],
    9: [
      13,
      1
    ],
    0: [
      14,
      1
    ],
    ",": [
      15,
      1,
      2,
      6
    ],
    " ": [
      16,
      1,
      0,
      2
    ],
    $: [
      16,
      1,
      0,
      6
    ]
  }, ro = (r, e) => {
    let t = 0;
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = q3[o];
      if (i) {
        const [, , , s] = i;
        let c = s ?? e.charWidth;
        o === "," && e.charWidth === nl.charWidth && (c = 3), t += c, n < r.length - 1 && (t += e.charSpacing);
      }
    }
    return t;
  }, qr = (r, e, t, n, o) => {
    let i = t;
    for (const s of e) {
      const c = q3[s];
      if (c) {
        const [l, a, p = 0, f] = c;
        let d = f ?? o.charWidth;
        s === "," && o.charWidth === nl.charWidth && (d = 3), r.drawImage(o.image, l * o.charWidth, a * o.charHeight + p, o.charWidth, o.charHeight, i, n + p, o.charWidth, o.charHeight), i += d + o.charSpacing;
      }
    }
    return i;
  }, bC = (r, e) => {
    const t = Hn.animations[r], n = Math.floor(e / i2), i = e % i2 * Q3, s = 1 - t.yOffset / Hn.atlasHeight - (n + 1) * X3;
    return [
      i,
      s
    ];
  };
  At.preload(j3);
  At.preload(Q2);
  At.preload(X2);
  const lc = ({ mesh: r, type: e }) => {
    const [t, n, o] = At([
      j3,
      Q2,
      X2
    ]), i = u.useRef(null), s = u.useRef(0), c = u.useRef(0), l = u.useRef("none"), a = u.useRef([
      0,
      0
    ]), p = u.useRef(0), f = u.useRef(null), d = u.useRef(5), _ = u.useRef(null), h = u.useRef(false), b = u.useRef("0"), g = e === "top", y = e === "bottom", A = u.useRef(null), C = u.useRef(null), S = {
      image: o.image,
      ...wC
    }, B = {
      image: n.image,
      ...nl
    }, T = u.useRef(false), E = u.useRef(false), M = u.useRef(false), x = u.useRef(0), P = u.useRef(0), D = u.useRef(false), H = [
      [
        "idle",
        2
      ],
      [
        "dmd-ballBounce-strip",
        1
      ],
      [
        "watchtheworld",
        1
      ],
      [
        "dmd-live-strip",
        2
      ],
      [
        "idle",
        1
      ]
    ], k = () => {
      const z = H.length;
      let $ = 0;
      for (; $ < z; ) {
        x.current = (x.current + 1) % H.length;
        const [re] = H[x.current];
        if (re === "dmd-live-strip" && !fs.getState().isLiveData) {
          $++;
          continue;
        }
        return P.current = 0, re;
      }
      return P.current = 0, H[0][0];
    };
    u.useEffect(() => {
      if (!g) return Ft.subscribe((z) => z.menuMode, (z) => {
        const $ = z === tt.Pinball;
        M.current = !$, !$ && l.current === "none" ? (x.current = 0, P.current = 0, W(H[0][0], 0, true)) : $ && H.some(([re]) => re === l.current) && (l.current = "none", s.current = 0);
      }, {
        fireImmediately: true
      });
    }, [
      g
    ]), u.useEffect(() => {
      const z = document.createElement("canvas");
      z.width = nr, z.height = pr, A.current = z;
      const $ = new dl(z);
      C.current = $;
      const re = z.getContext("2d");
      return re && (re.clearRect(0, 0, nr, pr), re.imageSmoothingEnabled = false), i.current && (i.current.uniforms.scoreTexture.value = $), () => {
        $.dispose();
      };
    }, []);
    const J = {
      none: "none",
      ...Object.keys(Hn.animations).reduce((z, $) => (z[$] = $, z), {})
    }, W = (z, $ = 5, re = false) => {
      if (z !== "none") {
        if (!Hn.animations[z]) {
          console.warn(`[DMD] Animation "${z}" does not exist, ignoring`);
          return;
        }
        if (re) {
          l.current = z, s.current = 0, c.current = 0, p.current = $, f.current = null;
          return;
        }
        if (l.current === "none") l.current = z, s.current = 0, c.current = 0, p.current = $;
        else {
          if (l.current === z) return;
          f.current = z, d.current = $;
        }
      }
    }, { dotSize: K, framerate: Q, bloom: Z } = rl("DMD", {
      dotSize: {
        value: 0.4,
        min: 0,
        max: 0.5,
        step: 0.01,
        label: "Dot Size"
      },
      framerate: {
        value: 8,
        min: 1,
        max: 60,
        step: 1,
        label: "Framerate"
      },
      bloom: {
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
        label: "Bloom"
      },
      animation: {
        value: "none",
        options: J,
        label: "Animation",
        onChange: (z) => {
          W(z);
        }
      }
    }, {
      order: ip
    }), [j, U] = vt(() => ({
      gmv: 0,
      orders: 0,
      shoppers: 0,
      config: {
        duration: 12e3,
        easing: Be.easeOutCubic
      }
    })), N = u.useRef(0), oe = (z, $, re) => {
      const Me = A.current, Ce = Me == null ? void 0 : Me.getContext("2d");
      if (!Ce || !Me) return;
      Ce.clearRect(0, 0, nr, pr);
      const Ee = Bv(z), Ge = ro(Ee, S), Oe = Math.floor((nr - Ge) / 2), Ve = Math.floor((pr - S.charHeight) / 2 - 3);
      qr(Ce, Ee, Oe, Ve - 2, S);
      const Rt = $.toLocaleString("en-US");
      if (qr(Ce, Rt, 2, 23, B), re > 0) {
        const Ot = re.toLocaleString("en-US"), Jt = ro(Ot, B), tr = nr - Jt - 2;
        qr(Ce, Ot, tr, 23, B);
      }
      C.current && (C.current.needsUpdate = true);
    }, ue = (z, $) => {
      const re = A.current, Me = re == null ? void 0 : re.getContext("2d");
      if (!Me || !re) return;
      Me.clearRect(0, 0, nr, pr);
      const Ce = Number(z).toLocaleString("en-US"), Ee = ro(Ce, S), Ge = Math.floor((nr - Ee) / 2), Oe = Math.floor((pr - S.charHeight) / 2 - 3);
      qr(Me, Ce, Ge, Oe, S);
      const Ve = `BALL ${$}`, Rt = 2, Ke = pr - B.charHeight;
      qr(Me, Ve, Rt, Ke, B), C.current && (C.current.needsUpdate = true);
    }, we = (z) => {
      const $ = A.current, re = $ == null ? void 0 : $.getContext("2d");
      if (!re || !$) return;
      re.clearRect(0, 0, nr, pr);
      const Me = Number(z).toLocaleString("en-US"), Ce = ro(Me, S), Ee = Math.floor((nr - Ce) / 2), Ge = Math.floor((pr - S.charHeight) / 2 - 3);
      qr(re, Me, Ee, Ge, S);
      const Oe = "GAME OVER", Ve = 2, Rt = pr - B.charHeight;
      qr(re, Oe, Ve, Rt, B), C.current && (C.current.needsUpdate = true);
    }, ve = (z) => {
      const $ = A.current, re = $ == null ? void 0 : $.getContext("2d");
      if (!re || !$) return;
      re.clearRect(0, 0, nr, pr);
      const Me = `${z}`, Ce = ro(Me, S), Ee = Math.floor((nr - Ce) / 2), Ge = 2;
      qr(re, Me, Ee, Ge, S);
      const Oe = "HITS REMAINING", Ve = ro(Oe, B), Rt = Math.floor((nr - Ve) / 2), Ke = Ge + S.charHeight + 2;
      qr(re, Oe, Rt, Ke, B), C.current && (C.current.needsUpdate = true);
    };
    u.useEffect(() => {
      if (!y) return fs.subscribe((z) => z.topicData[d9.salesMetric], (z) => {
        if (!z) return;
        const { rolling_gmv_1m: $, rolling_transactions_1m: re, bfcm_unique_consumers: Me } = z;
        let Ce = j.gmv.get();
        Ce === 0 && $ > 1e5 && (Ce = $ - 1e5), U.start({
          from: {
            gmv: Ce,
            orders: j.orders.get(),
            shoppers: j.shoppers.get()
          },
          to: {
            gmv: $,
            orders: re,
            shoppers: Me
          },
          reset: true
        });
      }, {
        fireImmediately: true
      });
    }, [
      y,
      U,
      j
    ]), u.useEffect(() => {
      if (!g) return L.subscribe((z) => z.numBallsRemaining, (z) => {
        if (_.current !== null || h.current) return;
        const $ = L.getState().score;
        ue($.toString(), 4 - z), z === 1 ? W("dmd-ball03") : z === 2 && W("dmd-ball02");
      }, {
        fireImmediately: true
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return L.subscribe((z) => z.score, (z) => {
        _.current === null && (h.current && z > 0 && (h.current = false), !h.current && ue(z.toString(), 4 - L.getState().numBallsRemaining));
      }, {
        fireImmediately: true
      });
    }, [
      g
    ]);
    const { isMobile: ne } = yi(), Ie = tl((z) => z.vrIsEnabled), ie = u.useMemo(() => {
      const z = document.createElement("canvas");
      z.width = nr, z.height = pr;
      const $ = new dl(z);
      return {
        imageTexture: {
          value: t
        },
        scoreTexture: {
          value: C.current || $
        },
        uvOffset: {
          value: a.current
        },
        frameSize: {
          value: [
            Q3,
            X3
          ]
        },
        dotSize: {
          value: 0.2
        },
        bloom: {
          value: ne || Ie ? 0 : 1
        },
        showScore: {
          value: 0
        },
        roundedDots: {
          value: true
        },
        width: {
          value: 128
        },
        height: {
          value: 32
        }
      };
    }, [
      t,
      ne,
      Ie
    ]);
    return it((z) => {
      const $ = i.current;
      if ($) {
        if ($.uniforms.dotSize.value = K, $.uniforms.roundedDots.value = wo(window.devicePixelRatio, 1, 2) >= 1.5 && !ne || ne && Ft.getState().menuMode === tt.Globe, $.uniforms.showScore.value = l.current === "none" ? 1 : 0, g) {
          const re = Math.round(j.gmv.get()), Me = Math.round(j.orders.get()), Ce = Math.round(j.shoppers.get()), Ee = re > 1e5 && Me > 1e3;
          if (Ee && !D.current && (D.current = true), E.current && !D.current && l.current === "none" && W("bfcm-logo", 0, true), l.current === "none") {
            const Ge = z.clock.elapsedTime;
            Ge - N.current >= J5 && (Ee && oe(re, Me, Ce), N.current = Ge);
          }
        }
        if (l.current !== "none") {
          const re = z.clock.elapsedTime, Me = 1 / Q;
          if (re - c.current >= Me) {
            const Ce = l.current, Ee = Hn.animations[Ce];
            if (!Ee) return;
            s.current += 1;
            const Ge = Ee.frameCount + p.current;
            if (s.current >= Ge) if (f.current && f.current !== "none") l.current = f.current, p.current = d.current, s.current = 0, c.current = 0, f.current = null;
            else if (g && Ce === "bfcm") E.current = true, l.current = "none", s.current = 0;
            else if (g && !D.current && Ce === "dmd-border-strip") s.current = 0, c.current = re;
            else if (M.current) if (H.some(([Ve]) => Ve === Ce)) {
              const [Ve, Rt] = H[x.current];
              if (P.current += 1, P.current < Rt) {
                if (Ve === "dmd-live-strip" && !fs.getState().isLiveData) {
                  l.current = k(), p.current = 0, s.current = 0, c.current = 0;
                  return;
                }
                s.current = 0, c.current = re;
              } else l.current = k(), p.current = 0, s.current = 0, c.current = 0;
            } else l.current = k(), p.current = 0, s.current = 0, c.current = 0;
            else l.current = "none", s.current = 0;
            else {
              c.current = re;
              const Oe = Math.min(s.current, Ee.frameCount - 1), [Ve, Rt] = bC(Ce, Oe);
              a.current[0] = Ve, a.current[1] = Rt;
            }
          }
        }
      }
    }), u.useEffect(() => {
      y || (W("bfcm"), T.current || (L.getState().skipIntroSequence || he("startedBFCMAnimation", {
        time: performance.now()
      }), T.current = true));
    }, [
      y
    ]), u.useEffect(() => {
      if (!g) return se.on("gameStart", () => {
        h.current = false, b.current = "0", W("gamestart", 0, true);
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("ballSave", () => {
        W("ball_saved");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("globeSpin", ({ direction: z }) => {
        z > 0 ? W("aroundtheworld") : W("plane");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("plungeEvent", (z) => {
        W("shipit");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("gameOver", ({ type: z, score: $ }) => {
        if (_.current !== null && (clearTimeout(_.current), _.current = null), z === "forcedExit") {
          W("seeya", 1, true);
          return;
        }
        b.current = $.toString(), h.current = true, we(b.current), W("gameover", 5);
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("retailStoresCapturedBall", (z) => {
        z.numBallsCaptured === 1 ? W("retail-lock-1", 10) : z.numBallsCaptured === 2 ? W("retail-lock-2", 10) : z.numBallsCaptured === 3 && W("retail-lock-3", 10);
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("bfcmLettersComplete", () => {
        W("missioncomplete");
      });
    }, [
      g
    ]), u.useEffect(() => L.subscribe((z) => z.shopifyLettersMissionCompleted, (z) => {
      g || !z || W("missioncomplete");
    }), [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("allMiniGamesMissionCompleted", () => {
        W("missioncomplete");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("shopLettersComplete", () => {
        W("missioncomplete");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("airplaneMissionCompleted", () => {
        W("missioncomplete");
      });
    }, [
      g
    ]), u.useEffect(() => L.subscribe((z) => z.singleMiniGameMissionCompleted, (z) => {
      g || !z || W("missioncomplete");
    }), [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("boxesMiniGameCompleted", () => {
        W("minigame-box");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("fiveStarTargetHit", () => {
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("firstSaleReceivedByPinballMachine", ({ numFirstSaleEventsReceived: z }) => {
        z === 1 ? W("dmd-firstSale-01-strip") : z === 2 ? W("dmd-firstSale-02-strip") : z === 3 ? W("dmd-firstSale-03-strip") : z === 4 ? W("dmd-firstSale-04-strip") : z === 5 && (W("dmd-firstSale-05-strip"), W("retail-multiball"));
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("merchantMilestone", (z) => {
        z.type === "10k" ? W("dmd-10k-strip") : z.type === "100k" ? W("dmd-100k-strip") : z.type === "1M" && W("dmd-1m-strip");
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("merchantFirstSale", () => {
        W("dmd-firstSale-text-strip", 10);
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (g) return;
      const z = L.subscribe(($) => $.podiumMiniGameHitCount, ($) => {
        if (!h.current && $ >= 0) {
          _.current !== null && clearTimeout(_.current);
          const re = Math.max(0, K3 - $);
          if (re === 0) {
            W("clapping", 10);
            return;
          }
          re > 0 && (ve(re), _.current = window.setTimeout(() => {
            const Me = L.getState().score, Ce = L.getState().numBallsRemaining;
            ue(Me.toString(), 4 - Ce), _.current = null;
          }, 2e3));
        }
      });
      return () => {
        z(), _.current !== null && clearTimeout(_.current);
      };
    }, [
      ve,
      ue,
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("cashRegisterHit", () => {
        W("cha-ching", 1);
      });
    }, [
      g
    ]), u.useEffect(() => {
      if (!g) return se.on("ballReachedLockTarget", (z) => {
        z.type === yt.Shoppy && W("shoppy");
      });
    }, [
      W,
      g
    ]), R.jsx("group", {
      children: R.jsxs("mesh", {
        visible: true,
        geometry: r.geometry,
        position: r.position,
        rotation: r.rotation,
        scale: r.scale,
        children: [
          R.jsx("shaderMaterial", {
            ref: i,
            vertexShader: pl,
            fragmentShader: fl,
            uniforms: ie
          }),
          R.jsx("meshBasicMaterial", {
            children: R.jsxs(L5, {
              attach: "map",
              width: ne ? 256 : 360,
              height: ne ? 64 : 90,
              generateMipmaps: true,
              children: [
                R.jsx(g5, {
                  makeDefault: true,
                  position: [
                    0,
                    0,
                    1
                  ],
                  bottom: -16,
                  top: 16,
                  left: -64,
                  right: 64
                }),
                R.jsxs("mesh", {
                  children: [
                    R.jsx("planeGeometry", {
                      args: [
                        128,
                        32
                      ]
                    }),
                    R.jsx("shaderMaterial", {
                      ref: i,
                      vertexShader: pl,
                      fragmentShader: fl,
                      uniforms: ie
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    });
  };
  function yC() {
    const { nodes: r, materials: e } = zn(Sv), t = u.useMemo(() => new _t({
      map: e.backboard_mobile.emissiveMap
    }), [
      e
    ]);
    return R.jsx(R.Fragment, {
      children: R.jsxs("group", {
        dispose: null,
        children: [
          R.jsx(lc, {
            type: "top",
            mesh: r.DMD_mobile
          }),
          R.jsx("mesh", {
            geometry: r.backboard_mobile.geometry,
            material: t,
            position: [
              0,
              0.38,
              -0.623
            ]
          })
        ]
      })
    });
  }
  var AC = `uniform vec3 color;
uniform float bloomIntensity;
uniform float fadeProgress;

void main() {
  gl_FragColor = vec4(color * bloomIntensity, fadeProgress);
}`, vC = `uniform float thickness;

attribute vec3 direction;

void main() {
  
  vec3 modelPos = (modelMatrix * vec4(position, 1.0)).xyz;

  
  vec3 worldDirection = normalize(vec3(modelMatrix * vec4(direction, 0.0)));

  
  vec3 look = normalize(modelPos - cameraPosition);

  
  float side = 2.0 * uv.x - 1.0;

  
  vec3 offset = cross(look, worldDirection * side);

  
  vec3 billboardedPos = modelPos + normalize(offset) * thickness;

  
  gl_Position = projectionMatrix * viewMatrix * vec4(billboardedPos, 1.0);
}`;
  Sa = function(r) {
    const { shape: e = "rectangle", width: t = 2, height: n = 1, cornerRadius: o = 0.2, radius: i = 1, numSegments: s = 128, thickness: c = 1e-3, color: l = "#FFFFFF", position: a = [
      0,
      0,
      0
    ], rotation: p = [
      0,
      0,
      0
    ], menuMode: f } = r, { totalPerimeter: d, cornerPositions: _ } = u.useMemo(() => {
      if (e === "circle") return {
        totalPerimeter: 2 * Math.PI * i,
        cornerPositions: [
          0,
          0.25,
          0.5,
          0.75,
          1
        ]
      };
      {
        const B = t - 2 * Math.min(o, Math.min(t, n) / 2), T = n - 2 * Math.min(o, Math.min(t, n) / 2), E = Math.min(o, Math.min(t, n) / 2), M = Math.PI / 2 * E, x = 2 * B + 2 * T + 4 * M, D = B + M, k = D + T + M, W = k + B + M;
        return {
          totalPerimeter: x,
          cornerPositions: [
            0,
            D / x,
            k / x,
            W / x,
            1
          ]
        };
      }
    }, [
      e,
      t,
      n,
      o,
      i
    ]), h = u.useMemo(() => {
      const B = [];
      if (e === "circle") {
        const j = 2 * Math.PI * i, U = Math.max(32, Math.floor(j * 32));
        for (let N = 0; N < U; N++) {
          const oe = N / U * 2 * Math.PI, ue = i * Math.cos(oe), we = i * Math.sin(oe);
          B.push(new F(ue, we, 0));
        }
        return B;
      }
      const T = Math.min(t, n) / 2, E = Math.min(o, T), M = t / 2, x = n / 2, P = t - 2 * E, D = n - 2 * E, H = Math.PI / 2 * E, k = 2 * P + 2 * D + 4 * H, J = Math.max(64, s * 2), W = Math.floor(J / 4), K = 2, Q = [
        K,
        W,
        K,
        W,
        K,
        W,
        K,
        W
      ], Z = [
        {
          start: 0,
          end: P,
          isCorner: false
        },
        {
          start: P,
          end: P + H,
          isCorner: true
        },
        {
          start: P + H,
          end: P + H + D,
          isCorner: false
        },
        {
          start: P + H + D,
          end: P + 2 * H + D,
          isCorner: true
        },
        {
          start: P + 2 * H + D,
          end: 2 * P + 2 * H + D,
          isCorner: false
        },
        {
          start: 2 * P + 2 * H + D,
          end: 2 * P + 3 * H + D,
          isCorner: true
        },
        {
          start: 2 * P + 3 * H + D,
          end: 2 * P + 3 * H + 2 * D,
          isCorner: false
        },
        {
          start: 2 * P + 3 * H + 2 * D,
          end: k,
          isCorner: true
        }
      ];
      for (let j = 0; j < Z.length; j++) {
        const U = Z[j], N = Q[j];
        for (let oe = 0; oe < N; oe++) {
          const ue = oe / N, we = U.start + ue * (U.end - U.start);
          let ve = 0, ne = 0;
          const Ie = P, ie = Ie + H, z = ie + D, $ = z + H, re = $ + P, Me = re + H, Ce = Me + D;
          if (we < Ie) {
            const Ee = we;
            ve = -M + E + Ee, ne = x;
          } else if (we < ie) {
            const Ge = (we - Ie) / H, Oe = Math.PI / 2 * (1 - Ge);
            ve = M - E + E * Math.cos(Oe), ne = x - E + E * Math.sin(Oe);
          } else if (we < z) {
            const Ee = we - ie;
            ve = M, ne = x - E - Ee;
          } else if (we < $) {
            const Ge = (we - z) / H, Oe = -(Math.PI / 2) * Ge;
            ve = M - E + E * Math.cos(Oe), ne = -x + E + E * Math.sin(Oe);
          } else if (we < re) {
            const Ee = we - $;
            ve = M - E - Ee, ne = -x;
          } else if (we < Me) {
            const Ge = (we - re) / H, Oe = -Math.PI / 2 - Math.PI / 2 * Ge;
            ve = -M + E + E * Math.cos(Oe), ne = -x + E + E * Math.sin(Oe);
          } else if (we < Ce) {
            const Ee = we - Me;
            ve = -M, ne = -x + E + Ee;
          } else {
            const Ge = (we - Ce) / H, Oe = Math.PI - Math.PI / 2 * Ge;
            ve = -M + E + E * Math.cos(Oe), ne = x - E + E * Math.sin(Oe);
          }
          B.push(new F(ve, ne, 0));
        }
      }
      return B;
    }, [
      e,
      t,
      n,
      o,
      i,
      s
    ]), b = u.useMemo(() => {
      const B = new Nn();
      if (h.length === 0) return B;
      const T = new wc(h);
      T.closed = true, T.updateArcLengths();
      const E = [];
      if (e === "circle") for (let U = 0; U <= s; U++) E.push(U / s);
      else {
        const U = t - 2 * Math.min(o, Math.min(t, n) / 2), N = n - 2 * Math.min(o, Math.min(t, n) / 2), oe = Math.min(o, Math.min(t, n) / 2), ue = Math.PI / 2 * oe, we = U / d, ve = _[1], ne = (U + ue + N) / d, Ie = _[2], ie = (U + ue + N + ue + U) / d, z = _[3], $ = (U + ue + N + ue + U + ue + N) / d, re = [];
        re.push([
          0,
          we,
          1
        ]), re.push([
          we,
          ve,
          2
        ]), re.push([
          ve,
          ne,
          1
        ]), re.push([
          ne,
          Ie,
          2
        ]), re.push([
          Ie,
          ie,
          1
        ]), re.push([
          ie,
          z,
          2
        ]), re.push([
          z,
          $,
          1
        ]), re.push([
          $,
          1,
          2
        ]);
        for (const [Ke, st, Ot] of re) ;
        const Me = s + 4, Ce = [];
        for (const [, , Ke] of re) ;
        const Ee = s;
        let Ge = 0;
        const Oe = [];
        for (const [Ke, st, Ot] of re) if (Ot === 1) Oe.push(0);
        else {
          const Jt = st - Ke;
          Oe.push(Jt), Ge += Jt;
        }
        let Ve = 0;
        for (let Ke = 0; Ke < re.length; Ke++) {
          const [, , st] = re[Ke];
          if (st === 1) Ce.push(1), Ve += 1;
          else {
            const Ot = Oe[Ke] / Ge, Jt = Math.floor(Ot * Ee);
            Ce.push(Jt), Ve += Jt;
          }
        }
        const Rt = Me - Ve;
        if (Rt > 0) {
          const Ke = [];
          for (let st = 0; st < re.length; st++) {
            const [, , Ot] = re[st];
            if (Ot !== 1) {
              const tr = Oe[st] / Ge * Ee;
              Ke.push({
                index: st,
                frac: tr - Ce[st]
              });
            }
          }
          Ke.sort((st, Ot) => Ot.frac - st.frac);
          for (let st = 0; st < Rt; st++) Ce[Ke[st].index]++;
        }
        E.push(0);
        for (let Ke = 0; Ke < re.length; Ke++) {
          const [st, Ot] = re[Ke], Jt = Ot - st, tr = Ce[Ke];
          if (tr > 0) for (let Rr = 1; Rr <= tr; Rr++) {
            const Lr = Rr / tr, an = st + Lr * Jt;
            E.length < Me + 1 && E.push(an);
          }
        }
      }
      const M = e === "circle" ? s : s + 4, x = new Uint32Array(M * 6), P = new Float32Array(M * 2 * 3 + 6), D = new Float32Array(M * 2 * 2 + 4), H = new Float32Array(M * 2 * 3 + 6), k = new F(), J = new F(), W = new F(), K = new F(), Q = new F(), Z = new F();
      let j = true;
      for (let U = 0; U <= M; U++) {
        const N = E[U];
        if (D[U * 4 + 0] = 0, D[U * 4 + 1] = N, D[U * 4 + 2] = 1, D[U * 4 + 3] = N, T.getPointAt(N, k), U < M) {
          const oe = E[U + 1];
          T.getPointAt(oe, W), J.subVectors(W, k).normalize(), j && (K.copy(k), Q.copy(J), j = false), Z.copy(J);
        } else k.copy(K), J.copy(Q);
        P[U * 6 + 0] = k.x, P[U * 6 + 1] = k.y, P[U * 6 + 2] = k.z, P[U * 6 + 3] = k.x, P[U * 6 + 4] = k.y, P[U * 6 + 5] = k.z, H[U * 6 + 0] = J.x, H[U * 6 + 1] = J.y, H[U * 6 + 2] = J.z, H[U * 6 + 3] = J.x, H[U * 6 + 4] = J.y, H[U * 6 + 5] = J.z;
      }
      for (let U = 0, N = 0; N < M * 6; U += 2, N += 6) x[N + 0] = U + 0, x[N + 1] = U + 1, x[N + 2] = U + 2, x[N + 3] = U + 2, x[N + 4] = U + 1, x[N + 5] = U + 3;
      return B.setIndex(new ht(x, 1)), B.setAttribute("position", new ht(P, 3)), B.setAttribute("uv", new ht(D, 2)), B.setAttribute("direction", new ht(H, 3)), B;
    }, [
      h,
      s,
      e,
      _,
      t,
      n,
      o,
      d
    ]), g = u.useMemo(() => new sr({
      uniforms: {
        thickness: {
          value: c
        },
        color: {
          value: new Ye(l)
        },
        bloomIntensity: {
          value: 1.1
        },
        fadeProgress: {
          value: 0
        }
      },
      vertexShader: vC,
      fragmentShader: AC,
      transparent: true,
      wireframe: false
    }), [
      c,
      l
    ]), y = u.useRef(null), A = u.useRef(false), [C, S] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeInOutCubic,
        duration: 500
      },
      onStart: () => {
        y.current && A.current && (y.current.visible = true);
      },
      onChange: () => {
        const B = C.progress.get();
        g.uniforms.fadeProgress.value = B;
      },
      onRest: () => {
        y.current && (A.current || (y.current.visible = false));
      }
    }), []);
    return u.useEffect(() => {
      const B = Ft.subscribe((T) => T.modeBeingHovered, (T) => {
        T === f ? (A.current = true, S.start({
          to: {
            progress: 1
          }
        })) : (A.current = false, S.start({
          to: {
            progress: 0
          }
        }));
      });
      return () => {
        B();
      };
    }, [
      f,
      S
    ]), u.useEffect(() => {
      const B = Ft.subscribe((T) => T.menuMode, (T) => {
        T !== tt.Explore && (A.current = false, Ft.getState().setModeBeingHovered(null), S.start({
          to: {
            progress: 0
          }
        }));
      }, {
        fireImmediately: true
      });
      return () => {
        B();
      };
    }, [
      f,
      S
    ]), R.jsx("mesh", {
      ref: y,
      geometry: b,
      material: g,
      position: a,
      rotation: p,
      visible: false
    });
  };
  const Y3 = new F(), Z3 = new F(), CC = new F(), SC = new F(), RC = new F(), $3 = new F();
  function A0(r, e, t, n) {
    const o = e.geometry.attributes.position, i = e.matrixWorld, s = o.count, c = $3.set(i.elements[12], i.elements[13], i.elements[14]), l = 1 - r, a = Math.min(Math.floor(l * (s - 1)), s - 2), p = l * (s - 1) - a, f = Y3.set(o.getX(a), o.getY(a), o.getZ(a)).add(c), d = Z3.set(o.getX(a + 1), o.getY(a + 1), o.getZ(a + 1)).add(c);
    t.copy(f).lerp(d, p), n && n.copy(f).sub(d).normalize();
  }
  function MC(r, e, t) {
    const n = e.geometry.attributes.position;
    let o = 1 / 0, i = 0;
    const s = t, c = e.matrixWorld, l = n.count, a = $3.set(c.elements[12], c.elements[13], c.elements[14]);
    for (let p = 0; p < l - 1; p++) {
      const f = Y3.set(n.getX(p), n.getY(p), n.getZ(p)).add(a), d = Z3.set(n.getX(p + 1), n.getY(p + 1), n.getZ(p + 1)).add(a), _ = CC.copy(d).sub(f), h = _.length();
      if (h === 0) continue;
      const b = SC.copy(r).sub(f), g = Math.max(0, Math.min(1, b.dot(_) / (h * h))), y = RC.copy(f).add(_.multiplyScalar(g)), A = r.distanceTo(y);
      A < o && (o = A, i = 1 - (p + g) / (l - 1), s.copy(y));
    }
    return {
      t: i,
      distance: o
    };
  }
  const Ln = 0.12, EC = 0.203, BC = (EC - Ln) / 5, IC = new F(), TC = new F(), xC = new F(), PC = new F(), FC = new F(), LC = new F(), DC = new F(), GC = new et(), s2 = (r, e) => {
    const t = xC.copy(r).normalize(), n = PC.set(0, 1, 0), o = FC.crossVectors(n, t).normalize(), i = LC.crossVectors(t, o).normalize(), s = GC;
    s.makeBasis(o, i, t), e.setFromRotationMatrix(s);
  }, OC = ({ mesh: r, curve: e }) => {
    const t = u.useRef(null), n = u.useRef(Ln), o = u.useRef(Ln), i = u.useRef(Ln), s = u.useRef(new Ne()), c = u.useRef(new Ne()), l = u.useRef(0), a = u.useMemo(() => {
      const _ = new F(), h = new F();
      A0(Ln, e, _, h);
      const b = new Ne();
      return s2(h, b), {
        position: _,
        quaternion: b
      };
    }, [
      e
    ]), [p, f] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutElastic,
        duration: 2e3
      },
      onChange: () => {
        if (!t.current) return;
        const _ = p.progress.get(), h = o.current - n.current;
        i.current = n.current + h * _;
        const b = DC;
        A0(i.current, e, b), t.current.position.copy(b), t.current.quaternion.slerpQuaternions(s.current, c.current, _);
      }
    }), []);
    u.useEffect(() => se.on("advanceAirplane", () => {
      if (!t.current || (l.current++, l.current > 5)) return;
      f.stop(), n.current = i.current, o.current += BC;
      const _ = IC, h = TC;
      A0(o.current, e, _, h), s.current.copy(t.current.quaternion), s2(h, c.current), l.current === 5 ? f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutElastic,
          duration: 2e3
        },
        onRest: () => {
          t.current && (L.getState().setAirplaneMissionCompleted(true), he("airplaneMissionCompleted", {
            time: performance.now()
          }), n.current = i.current, o.current = Ln, s.current.copy(t.current.quaternion), c.current.copy(a.quaternion), f.start({
            from: {
              progress: 0
            },
            to: {
              progress: 1
            },
            config: {
              easing: Be.easeOutBounce,
              duration: 1500
            },
            onRest: () => {
              l.current = 0;
            }
          }));
        }
      }) : f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutElastic,
          duration: 2e3
        },
        onRest: () => {
        }
      }), Le.getState().addSoundToQueue(Te.Airplane);
    }), [
      f,
      e,
      a
    ]), u.useEffect(() => se.on("gameOver", () => {
      t.current && (L.getState().setAirplaneMissionCompleted(false), f.stop(), l.current = 0, n.current = i.current, o.current = Ln, s.current.copy(t.current.quaternion), c.current.copy(a.quaternion), f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutBounce,
          duration: 1500
        }
      }));
    }), [
      f,
      a
    ]);
    const d = u.useMemo(() => new _t({
      map: r.material.emissiveMap
    }), [
      r
    ]);
    return R.jsx("group", {
      ref: t,
      position: a.position,
      quaternion: a.quaternion,
      children: R.jsx("group", {
        position: [
          -0.04,
          0.03,
          0
        ],
        children: R.jsx("mesh", {
          geometry: r.geometry,
          material: d
        })
      })
    });
  }, HC = new F(), kC = new F(), jC = new Ne(), UC = ({ mesh: r, body: e }) => {
    const t = u.useRef(null);
    u.useEffect(() => {
      t.current && t.current.traverse((i) => {
        i.isMesh && (i.layers.enable(0), i.layers.enable(1));
      });
    }, []);
    const n = u.useMemo(() => new et().makeTranslation((r == null ? void 0 : r.position.x) || 0, (r == null ? void 0 : r.position.y) || 0, (r == null ? void 0 : r.position.z) || 0), [
      r
    ]), o = u.useCallback((i) => {
      const s = HC, c = jC, l = kC;
      i.decompose(s, c, l), r == null ? void 0 : r.position.copy(s), e == null ? void 0 : e.setTranslation({
        x: s.x,
        y: -s.z
      }, true);
    }, [
      r,
      e
    ]);
    return R.jsx(W5, {
      ref: t,
      matrix: n,
      disableRotations: true,
      disableScaling: true,
      activeAxes: [
        true,
        false,
        true
      ],
      depthTest: false,
      lineWidth: 2,
      scale: 0.1,
      onDrag: o
    });
  }, a2 = 0.15, NC = 3, c2 = 2e-3, zC = 75e-4, l2 = 0.03, WC = new F(0, 1, 0), JC = new F(), ef = u.forwardRef((r, e) => {
    const t = Ue((_) => _.controls), n = u.useRef(false), o = u.useRef(new F()), i = u.useRef(null), s = u.useRef(new hc()), c = u.useRef(new F()), l = u.useRef(new F()), a = u.useRef(null);
    u.useImperativeHandle(e, () => ({
      getVelocity: () => o.current,
      resetVelocity: () => {
        o.current.set(0, 0, 0);
      },
      updateBallPosition: (_) => {
        l.current.copy(_), a.current && a.current.position.set(_.x, _.y + l2, _.z), i.current && i.current.position.set(_.x, _.y, _.z);
      }
    }));
    const p = u.useCallback((_) => {
      i.current && (_.stopPropagation(), t && (t.enabled = false), n.current = true, s.current.setFromNormalAndCoplanarPoint(WC, l.current), i.current.position.copy(l.current), i.current.scale.set(0, 0, 0), i.current.rotation.y = 0, _.target && _.target.setPointerCapture(_.pointerId));
    }, [
      t
    ]), f = u.useCallback((_) => {
      if (!n.current || !i.current) return;
      _.stopPropagation(), _.ray.intersectPlane(s.current, c.current);
      const h = JC.copy(c.current).sub(l.current), b = Math.min(h.length(), a2), g = h.normalize(), y = b / a2 * NC;
      o.current.copy(g).multiplyScalar(y), i.current.position.copy(l.current);
      const A = Math.atan2(g.x, g.z);
      i.current.rotation.y = A, i.current.scale.set(c2, c2, b);
    }, []), d = u.useCallback((_) => {
      n.current && (_.stopPropagation(), t && (t.enabled = true), n.current = false, _.target && _.target.releasePointerCapture(_.pointerId));
    }, [
      t
    ]);
    return R.jsxs(R.Fragment, {
      children: [
        R.jsxs("mesh", {
          ref: a,
          position: [
            0,
            0 + l2,
            0
          ],
          onPointerDown: p,
          onPointerMove: f,
          onPointerUp: d,
          layers: Tc,
          children: [
            R.jsx("sphereGeometry", {
              args: [
                zC,
                16,
                16
              ]
            }),
            R.jsx("meshBasicMaterial", {
              color: "#ffff00",
              opacity: 0.7,
              transparent: true
            })
          ]
        }),
        R.jsx("group", {
          ref: i,
          scale: 0,
          children: R.jsxs("mesh", {
            position: [
              0,
              0,
              0.5
            ],
            children: [
              R.jsx("boxGeometry", {
                args: [
                  1,
                  1,
                  1
                ]
              }),
              R.jsx("meshBasicMaterial", {
                color: "#00ff00"
              })
            ]
          })
        })
      ]
    });
  });
  ef.displayName = "VelocityControl";
  const VC = 0, KC = 0.2, QC = 0.1, XC = 400, lo = new f9();
  lo.layers.disableAll();
  lo.layers.enable(Bd.RampLayer);
  const qC = Tt([
    ct
  ], []), u2 = new F(), YC = new F(), ZC = new F(), d2 = new F(), f2 = new F(), p2 = new F(), $C = new F(), eS = new F(), _2 = new F(), tS = new Ne(), h2 = new Ne(), rS = new Ne(), m2 = new Ne().setFromAxisAngle(new F(1, 0, 0), -kc * Math.PI / 180);
  function no({ spawnPoint: r, ballId: e }) {
    const { world: t, RAPIER: n, rigidBodyStates: o, subscribeToColliderEvents: i } = Fr(), s = Ue((ie) => ie.clock), c = Ue((ie) => ie.scene), l = u.useRef(or), a = u.useRef(null), p = u.useRef(null), f = u.useRef(null), d = u.useRef(r2(L.getState().currentMiniGame));
    u.useEffect(() => (f.current && L.getState().setBallMesh(e, f.current), () => {
      L.getState().setBallMesh(e, null);
    }), [
      e
    ]);
    const _ = u.useRef(null), h = u.useRef(new F(0, 1, 0)), b = u.useRef(0), g = u.useRef(new F(0, 1, 0)), y = u.useRef(false), A = u.useRef(0), C = u.useRef(0), S = u.useRef(0), B = u.useRef(new F());
    u.useEffect(() => {
      const ie = L.subscribe((z) => z.ballMaterial, (z) => {
        f.current && z && (f.current.material = z);
      }, {
        fireImmediately: true
      });
      return () => {
        ie();
      };
    }, []);
    const T = u.useRef(e === 0), E = u.useRef(null), M = u.useRef(yt.None), x = u.useRef(false), P = u.useRef(0), D = u.useRef(new F()), H = u.useRef(false), k = u.useRef(new Ne()), J = u.useRef(false), [W, K] = u.useState(false), Q = u.useRef(null), Z = u.useRef({
      x: 0,
      y: 0
    }), j = u.useRef(new F()), U = u.useCallback((ie = false, z = false) => {
      !a.current || !f.current || !p.current || (a.current.bodyType() !== 1 && a.current.setBodyType(1, true), a.current.setEnabled(false), ie && a.current.setTranslation({
        x: r.x,
        y: -r.z
      }, true), f.current.visible = !z, p.current.setCollisionGroups(qC));
    }, [
      r
    ]), N = u.useCallback((ie = true) => {
      !a.current || !f.current || !p.current || (a.current.bodyType() !== 0 && a.current.setBodyType(0, true), a.current.setEnabled(true), f.current.visible = ie, p.current.setCollisionGroups(d.current));
    }, []);
    u.useEffect(() => {
      const ie = L.subscribe((z) => z.activeBallId, (z) => {
        T.current = z === e, T.current && L.getState().setBallInPlay(e, true);
      });
      return () => {
        ie();
      };
    }, [
      e
    ]), u.useEffect(() => {
      const ie = L.subscribe((z) => ({
        lockTarget: z.ballLockTargets[e]
      }), ({ lockTarget: z }) => {
        const $ = E.current !== null;
        if (E.current = z.target, M.current = z.type, z.target && !$ && (x.current = true, P.current = s.elapsedTime, D.current.copy(f.current.position), H.current = z.type === yt.FirstSale), E.current) U();
        else if (z.type === yt.Retail) {
          N();
          const re = u2.set(-0.40641549166093827, -0.1034324605270248, 0.9078150550895944).normalize(), Me = 3, Ce = {
            x: re.x * Me,
            y: -re.z * Me
          };
          a.current.setLinvel(Ce, true);
        } else if (z.type === yt.Shoppy) {
          N();
          const re = u2.set(0.9848077439162202, 0.01965720710190616, -0.17253203103075587).normalize(), Me = 1.25, Ce = {
            x: re.x * Me,
            y: -re.z * Me
          };
          a.current.setLinvel(Ce, true);
        } else if (z.type === yt.FirstSale) {
          N();
          const re = L.getState().firstSaleTowerFiringDirection, Me = 0.75, Ce = {
            x: re.x * Me,
            y: -re.z * Me
          };
          a.current.setLinvel(Ce, true);
        } else if (z.type === yt.Boxes) {
          N();
          const re = L.getState().boxesMiniGameFiringDirection, Me = 3, Ce = {
            x: re.x * Me,
            y: -re.z * Me
          };
          a.current.setLinvel(Ce, true);
        }
      }, {
        equalityFn: (z, $) => z.lockTarget === $.lockTarget
      });
      return () => {
        ie();
      };
    }, [
      e,
      s,
      U,
      N
    ]);
    const oe = u.useCallback((ie) => {
      a.current && (a.current.setTranslation({
        x: ie.x,
        y: -ie.z
      }, true), B.current.copy(ie), _.current = null, a.current.setLinvel({
        x: 0,
        y: 0
      }, true), a.current.setAngvel(0, true), f.current.position.y = l.current, T.current && L.getState().setBallInPlay(e, true));
    }, [
      e
    ]);
    u.useEffect(() => M0.subscribe((ie) => ie[si.Debug], (ie) => {
      var _a2, _b2, _c2;
      if (ie && T.current) {
        if (J.current = !J.current, K(J.current), J.current && a.current) U(), (_a2 = Q.current) == null ? void 0 : _a2.resetVelocity();
        else if (a.current) {
          N();
          const z = (_b2 = Q.current) == null ? void 0 : _b2.getVelocity(), $ = {
            x: z ? z.x : 0,
            y: z ? -z.z : 0
          };
          a.current.setLinvel($, true), Z.current.x = $.x, Z.current.y = $.y, j.current.copy(f.current.position), (_c2 = Q.current) == null ? void 0 : _c2.resetVelocity();
        }
      }
    }), [
      U,
      N
    ]), u.useEffect(() => M0.subscribe((ie) => ie[si.Replay], (ie) => {
      ie && T.current && a.current && (N(), a.current.setTranslation({
        x: j.current.x,
        y: -j.current.z
      }, true), f.current.position.copy(j.current), f.current.position.y = l.current, a.current.setLinvel({
        x: 0,
        y: 0
      }, true), a.current.setAngvel(0, true), a.current.setLinvel(Z.current, true), _.current = null, y.current = false, L.getState().setBallIsLockedToCurve(e, false), A.current = 0, C.current = 0, S.current = 0);
    }), [
      N,
      e
    ]);
    const ue = u.useCallback((ie) => {
      const z = ie.other.rigidBody, $ = ie.other.object;
      if (z && $ && $.userData.ballId !== void 0) {
        const re = $.userData.ballId;
        e < re && Le.getState().addSoundToQueue(Te.BallBallCollision);
      } else if (z) {
        const re = ie.target.rigidBody, Me = L.getState();
        if (re && Me.ballLockTargets[e].target === null) {
          const Ce = Me.ballSpeeds[e], Ee = 1, Oe = 0.5 * (Math.min(Ce, Ee) / Ee);
          Le.getState().addSoundToQueue(Te.BallHit, Oe);
        }
      }
    }, [
      e
    ]);
    u.useEffect(() => {
      if (!t || !n || !o) return;
      const ie = tS;
      f.current.parent.getWorldQuaternion(ie), h.current.applyQuaternion(ie).normalize();
      const z = n.RigidBodyDesc.dynamic().setTranslation(r.x, -r.z).setLinearDamping(KC).setAngularDamping(QC).setCcdEnabled(true).setCanSleep(false).setEnabled(T.current);
      a.current = t.createRigidBody(z), B.current.copy(r);
      const $ = n.ColliderDesc.ball(or).setRestitution(VC).setFriction(0);
      $.setCollisionGroups(d.current), $.setActiveEvents(n.ActiveEvents.COLLISION_EVENTS), p.current = t.createCollider($, a.current);
      const re = i(p.current.handle, {
        onCollisionEnter: ue
      });
      return o.set(a.current.handle, {
        rigidBody: a.current,
        object: f.current
      }), () => {
        re(), o.delete(a.current.handle), Wr(t, p.current), sn(t, a.current);
      };
    }, [
      t,
      n,
      r,
      o,
      i,
      ue
    ]), u.useEffect(() => se.on("drain", ({ ball: ie }) => {
      if (ie.userData.ballId !== e) return;
      const z = L.getState();
      if (z.setBallLockTarget(e, null, yt.None), z.multiballModeIsActive) {
        U(true, true), z.decrementNumBallsInPlayDuringMultiball(), z.setBallInPlay(e, false);
        const $ = L.getState();
        if ($.numBallsInPlayDuringMultiball === 1) {
          const Ce = $.ballsInPlay.findIndex((Ee, Ge) => {
            const Oe = $.ballLockTargets[Ge], Ve = Oe.target !== null && Oe.type === yt.Retail;
            return Ee && !Ve;
          });
          Ce === -1 ? $.setActiveBallId(0) : $.setActiveBallId(Ce), he("multiballEnded", {
            retailMultiballWasActive: $.retailMultiballIsActive,
            firstSaleMultiballWasActive: $.firstSaleMultiballIsActive
          });
        }
      } else {
        const $ = s.elapsedTime - L.getState().timeWhenPlungerLaneDoorClosed;
        if (!z.ballSaveHasBeenUsed && $ <= t3) z.setBallSaveHasBeenUsed(true), oe(r), he("ballSave", {
          type: "timer"
        }), he("newBall", {
          time: performance.now(),
          ballId: e
        }), Le.getState().addSoundToQueue(Te.BallSaved);
        else {
          const re = z.numBallsRemaining;
          z.decrementNumBallsRemaining(), z.setBallSaveHasBeenUsed(false), re - 1 <= 0 ? (z.setNumBallsRemaining(3), he("clearPendingSwaps", {
            time: performance.now()
          }), he("gameOver", {
            time: performance.now(),
            score: z.score
          }), Le.getState().addSoundToQueue(Te.GameOver)) : (oe(r), he("newBall", {
            time: performance.now(),
            ballId: e
          }), Le.getState().addSoundToQueue(Te.Drain));
        }
      }
    }), [
      oe,
      r,
      s,
      U,
      e
    ]), u.useEffect(() => se.on("spawnBall", () => {
      !p.current || !a.current || !T.current || (oe(r), N(), _.current = null, f.current.position.y = l.current);
    }), [
      oe,
      r,
      N
    ]), u.useEffect(() => se.on("rampEntry", (ie) => {
      f.current === ie.ball && !_.current && (p.current.setCollisionGroups(Tt([
        ct
      ], [
        ie.collisionGroup,
        $r
      ])), _.current = {
        floorMesh: ie.rampFloorMesh,
        curvePath: ie.curvePath || null,
        name: ie.name,
        curveLength: ie.name === "RampGroup1" ? 1.5400267045302958 : 1.764783592868488
      }, y.current = false, L.getState().setBallIsLockedToCurve(e, false), A.current = 0);
    }), [
      e
    ]), u.useEffect(() => se.on("rampExit", (ie) => {
      f.current === ie.ball && (y.current && a.current ? (N(), y.current = false, L.getState().setBallIsLockedToCurve(e, false), Le.getState().addSoundToQueue(Te.BallFallingOffRail)) : p.current.setCollisionGroups(d.current), _.current = null, C.current = 0, S.current = 0, A.current = 0);
    }), [
      N,
      e
    ]), u.useEffect(() => se.on("gameOver", () => {
      const ie = L.getState();
      ie.setBallLockTarget(e, null, yt.None), e === 0 ? (ie.setActiveBallId(e), ie.setBallInPlay(e, true), N(), oe(r)) : (ie.setBallInPlay(e, false), U(true, true));
    }), [
      oe,
      r,
      e,
      U,
      N
    ]);
    const we = () => {
      const ie = YC;
      f.current.getWorldPosition(ie);
      let z = [];
      if (_.current ? (lo.set(f2.copy(ie).add(h.current), p2.copy(h.current).negate()), z = lo.intersectObject(_.current.floorMesh)) : (lo.set(f2.copy(ie), p2.copy(h.current).negate()), z = lo.intersectObjects(c.children, true)), z.length > 0) {
        const $ = f.current.parent.worldToLocal($C.copy(z[0].point));
        if (b.current = Math.max($.y, 0) + l.current, z[0].face) {
          const re = z[0].face.normal;
          g.current.copy(re).applyQuaternion(m2).normalize();
        }
      } else b.current = l.current;
    }, ve = u.useCallback(() => {
      _.current = null, C.current = 0, S.current = 0, A.current = 0, b.current = l.current, N(), y.current && (a.current.setLinvel({
        x: 0,
        y: 0
      }, true), a.current.setAngvel(0, true), y.current = false, L.getState().setBallIsLockedToCurve(e, false));
    }, [
      N,
      e
    ]), ne = u.useCallback((ie) => {
      var _a2, _b2, _c2, _d2;
      if (y.current && _.current) {
        const z = _.current.curveLength;
        A.current > $s ? Gt(A, "current", $s, 0.65, ie) : Gt(A, "current", $s, 1.5, ie);
        const $ = A.current;
        L.getState().setBallSpeed(e, $ * $);
        const re = C.current, Me = $ * ie / z;
        C.current = Math.min(1, C.current + Me);
        const Ce = ((_a2 = _.current) == null ? void 0 : _a2.name) === "RampGroup1" ? Hb : kb;
        re < Ce && C.current > Ce && he("globeSpin", {
          ball: f.current,
          time: performance.now(),
          direction: ((_b2 = _.current) == null ? void 0 : _b2.name) === "RampGroup1" ? 1 : -1
        }), S.current = Math.max(S.current, C.current);
        const Ee = _2;
        A0(C.current, _.current.curvePath, Ee), f.current.position.x = Ee.x, f.current.position.y = Ee.y + l.current, f.current.position.z = Ee.z, a.current.setTranslation({
          x: Ee.x,
          y: -Ee.z
        }), C.current >= 1 && (he("rampExit", {
          ball: f.current,
          name: (_c2 = _.current) == null ? void 0 : _c2.name,
          success: true,
          furthestTAlongSpline: 1
        }), ve());
      } else {
        if (_.current.curvePath) {
          const z = _2, { t: $, distance: re } = MC(f.current.position, _.current.curvePath, z);
          C.current = $;
          let Me = false;
          if (S.current = Math.max(S.current, C.current), _.current.name === "RampGroup2" && ($ > 0.2 && $ < 0.35 || $ > 0.62) && (Me = true), _.current.name === "RampGroup1" && $ > 0.22 && (Me = true), Me && re < or * 2) {
            const Ce = a.current.linvel();
            A.current = Math.sqrt(Ce.x * Ce.x + Ce.y * Ce.y), a.current.bodyType() !== 2 && a.current.setBodyType(2, true), y.current = true, L.getState().setBallIsLockedToCurve(e, true), _.current.name === "RampGroup2" ? he("advanceAirplane", {
              time: performance.now()
            }) : L.getState().incrementNumShopifyLettersCompleted();
            return;
          }
        }
        b.current <= l.current && (he("rampExit", {
          ball: f.current,
          name: (_d2 = _.current) == null ? void 0 : _d2.name,
          success: false,
          furthestTAlongSpline: S.current
        }), ve());
      }
    }, [
      ve,
      e
    ]);
    u.useEffect(() => L.subscribe((ie) => ie.currentMiniGame, (ie) => {
      d.current = r2(ie), _.current || p.current.setCollisionGroups(d.current);
    }), []), it((ie, z) => {
      if (!f.current || !a.current) return;
      const $ = a.current.linvel(), re = $.x * $.x + $.y * $.y;
      if (L.getState().setBallSpeed(e, re), J.current) {
        Q.current && f.current && Q.current.updateBallPosition(f.current.position);
        return;
      }
      if (E.current) {
        const Ee = ZC;
        if (E.current.getWorldPosition(Ee), Ee.y -= Xd, Ee.applyQuaternion(m2), x.current) {
          const Ge = (s.elapsedTime - P.current) * 1e3;
          let Oe = Math.min(Ge / XC, 1);
          H.current && (Oe = 1);
          const Ve = Be.easeOutElastic(Oe);
          f.current.position.lerpVectors(D.current, Ee, Ve);
          const Rt = {
            x: f.current.position.x,
            y: -f.current.position.z
          };
          if (a.current.setTranslation(Rt, true), Oe >= 1) {
            x.current = false, H.current = false;
            const Ke = h2;
            E.current.getWorldQuaternion(Ke), Ke.invert(), k.current.copy(Ke.multiply(f.current.quaternion)), he("ballReachedLockTarget", {
              ballId: e,
              type: M.current
            });
          }
        } else {
          f.current.position.copy(Ee), a.current.setTranslation({
            x: Ee.x,
            y: -Ee.z
          }, true);
          const Ge = h2;
          E.current.getWorldQuaternion(Ge), f.current.quaternion.copy(Ge).multiply(k.current);
        }
        return;
      }
      if (!T.current && !L.getState().multiballModeIsActive) return;
      we(), _.current && ne(z);
      const Me = eS.copy(f.current.position).sub(B.current), Ce = Me.length();
      if (Ce > 1e-5) {
        const Ee = Ce / l.current, Ge = Me.normalize();
        let Oe;
        y.current ? Oe = d2.crossVectors(Ge, g.current).normalize() : Oe = d2.set(-Ge.z, 0, Ge.x).normalize();
        const Ve = rS.setFromAxisAngle(Oe, -Ee).normalize();
        f.current.quaternion.premultiply(Ve);
      }
      y.current || (_.current ? f.current.position.y = b.current : (f.current.position.y > b.current && (f.current.position.y -= 0.5 * z), f.current.position.y < b.current && (f.current.position.y = b.current))), B.current.copy(f.current.position);
    }), u.useEffect(() => {
      const ie = xr.subscribe((z) => z.enabledCheatIds.has("tinyBalls"), (z) => {
        if (!f.current || !p.current || !n) return;
        const $ = z ? 0.5 : 1;
        f.current.scale.set($, $, $);
        const re = or * $, Me = n.ColliderDesc.ball(re).shape;
        p.current.setShape(Me), l.current = re;
      });
      return () => {
        ie();
      };
    }, [
      n
    ]);
    const Ie = u.useRef(null);
    return u.useEffect(() => {
      const ie = xr.subscribe((z) => z.enabledCheatIds.has("ballIsHotDog"), (z) => {
        e === 0 && Ie.current && (Ie.current.visible = !z);
      });
      return () => {
        ie();
      };
    }, [
      e
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          ref: Ie,
          children: R.jsx("mesh", {
            name: "ball",
            ref: f,
            visible: e === 0,
            userData: {
              ballId: e
            },
            rotation: [
              Math.PI * 0.75,
              0,
              0
            ],
            children: R.jsx("sphereGeometry", {
              args: [
                or,
                32,
                16
              ]
            })
          })
        }),
        W && R.jsxs(R.Fragment, {
          children: [
            R.jsx(UC, {
              mesh: f.current,
              body: a.current
            }),
            R.jsx(ef, {
              ref: Q
            })
          ]
        })
      ]
    });
  }
  At.preload(g0);
  const nS = () => {
    const r = Ue((l) => l.scene), e = At(g0, (l) => {
      l.wrapS = nn, l.wrapT = nn, l.flipY = false, l.colorSpace = ii, l.needsUpdate = true;
    });
    rl("Ball Material", {
      material: {
        label: "Material",
        value: De.Chrome,
        options: {
          Chrome: De.Chrome,
          Shiny: De.Shiny,
          Golf: De.Golf,
          Basketball: De.Basketball,
          Soccer: De.Soccer,
          Tennis: De.Tennis,
          Glowing: De.Glowing,
          Shoppy: De.Shoppy,
          Volleyball: De.Volleyball,
          Globe: De.Globe,
          Eyeball: De.Eyeball,
          Tobi: De.Tobi,
          Devs: De.Devs,
          Carl: De.Carl,
          BFCM: De.BFCM
        },
        onChange: (l) => {
          L.getState().setBallMaterialName(l);
        }
      }
    }, {
      order: op,
      collapsed: false
    });
    const t = u.useMemo(() => ({
      [De.Chrome]: {
        color: new Ye(0.8, 0.8, 0.8),
        metalness: 1,
        roughness: 1,
        roughnessAndMetalnessMapURL: g0
      },
      [De.Shiny]: {
        color: new Ye(0.8, 0.8, 0.8),
        metalness: 1,
        roughness: 0
      },
      [De.Golf]: {
        envMapIntensity: 1.25,
        normalMapURL: E9
      },
      [De.Basketball]: {
        mapURL: M9,
        mapColorSpace: fr,
        envMapIntensity: 1
      },
      [De.Soccer]: {
        mapURL: R9,
        mapColorSpace: fr,
        envMapIntensity: 1
      },
      [De.Tennis]: {
        mapURL: S9,
        mapColorSpace: fr,
        envMapIntensity: 1
      },
      [De.Glowing]: {
        emissive: new Ye("#96bf48"),
        emissiveIntensity: 5
      },
      [De.Shoppy]: {
        mapURL: C9,
        mapFlipY: true,
        mapColorSpace: fr,
        envMapIntensity: 1,
        metalness: 0.1,
        roughness: 0.25
      },
      [De.Volleyball]: {
        mapURL: v9,
        mapColorSpace: fr,
        envMapIntensity: 1
      },
      [De.Globe]: {},
      [De.Eyeball]: {
        mapURL: A9,
        mapColorSpace: fr,
        envMapIntensity: 1,
        metalness: 0,
        roughness: 0
      },
      [De.Tobi]: {
        mapURL: y9,
        mapFlipY: true,
        mapColorSpace: fr,
        envMapIntensity: 1,
        metalness: 0,
        roughness: 0
      },
      [De.Devs]: {
        mapURL: hl,
        mapFlipY: true,
        mapColorSpace: fr,
        emissiveMapURL: hl,
        emissiveMapFlipY: true,
        emissiveMapColorSpace: fr,
        emissiveIntensity: 5,
        emissive: new Ye(1, 1, 1),
        metalness: 0,
        roughness: 0,
        envMapIntensity: 1
      },
      [De.Carl]: {
        mapURL: b9,
        mapFlipY: true,
        mapColorSpace: fr,
        envMapIntensity: 1,
        metalness: 0,
        roughness: 0
      },
      [De.BFCM]: {
        mapURL: _l,
        mapFlipY: true,
        mapColorSpace: fr,
        emissiveMapURL: _l,
        emissiveMapFlipY: true,
        emissiveMapColorSpace: fr,
        emissiveIntensity: 5,
        emissive: new Ye(0.1, 1, 0.1),
        metalness: 0,
        roughness: 0,
        envMapIntensity: 1
      }
    }), []), n = u.useRef(/* @__PURE__ */ new Map()), o = u.useRef(/* @__PURE__ */ new Map()), i = u.useRef(/* @__PURE__ */ new Set());
    u.useEffect(() => {
      const l = t[De.Chrome], a = new go({
        color: l.color,
        metalness: l.metalness,
        roughness: l.roughness,
        roughnessMap: e,
        metalnessMap: e
      });
      a.envMap = r.environment, n.current.set(De.Chrome, a), L.getState().setBallMaterial(a), o.current.set(g0, e);
    }, [
      e,
      r.environment,
      t
    ]), u.useEffect(() => {
      const l = xr.subscribe((a) => a.enabledCheatIds, (a) => {
        let p = De.Chrome;
        a.has("golfBall") ? p = De.Golf : a.has("basketball") ? p = De.Basketball : a.has("tennisBall") ? p = De.Tennis : a.has("shinyBall") ? p = De.Shiny : a.has("glowingBall") ? p = De.Glowing : a.has("soccerBall") ? p = De.Soccer : a.has("shoppyBall") ? p = De.Shoppy : a.has("volleyball") ? p = De.Volleyball : a.has("globeBall") ? p = De.Globe : a.has("eyeball") ? p = De.Eyeball : a.has("tobiBall") ? p = De.Tobi : a.has("devsBall") ? p = De.Devs : a.has("carlBall") ? p = De.Carl : a.has("bfcmBall") && (p = De.BFCM), L.getState().setBallMaterialName(p);
      });
      return () => {
        l();
      };
    }, []);
    const s = u.useRef(new G2()), c = async (l, a = ii, p = false) => {
      let f = o.current.get(l);
      return f || (f = await new Promise((d, _) => {
        s.current.load(l, (h) => {
          h.wrapS = nn, h.wrapT = nn, h.flipY = p, h.colorSpace = a, h.needsUpdate = true, d(h);
        }, void 0, (h) => {
          _(h);
        });
      }), o.current.set(l, f)), f;
    };
    return u.useEffect(() => {
      const l = L.subscribe((a) => a.ballMaterialName, async (a) => {
        if (a === De.Globe) {
          const d = L.getState().globeMaterial;
          if (d) {
            L.getState().setBallMaterial(d);
            return;
          }
        }
        const p = n.current.get(a);
        if (p) {
          L.getState().setBallMaterial(p);
          return;
        }
        if (i.current.has(a)) return;
        i.current.add(a);
        const f = t[a];
        if (!f) {
          console.error(`No settings found for material: ${a}`), i.current.delete(a);
          return;
        }
        try {
          const d = {};
          for (const [h, b] of Object.entries(f)) !h.endsWith("MapURL") && b !== void 0 && (d[h] = b);
          if (f.mapURL && (d.map = await c(f.mapURL, f.mapColorSpace, f.mapFlipY)), f.roughnessAndMetalnessMapURL) {
            const h = await c(f.roughnessAndMetalnessMapURL, f.roughnessAndMetalnessMapColorSpace, f.roughnessAndMetalnessMapFlipY);
            d.roughnessMap = h, d.metalnessMap = h;
          } else f.roughnessMapURL && (d.roughnessMap = await c(f.roughnessMapURL, f.roughnessMapColorSpace, f.roughnessMapFlipY)), f.metalnessMapURL && (d.metalnessMap = await c(f.metalnessMapURL, f.metalnessMapColorSpace, f.metalnessMapFlipY));
          f.normalMapURL && (d.normalMap = await c(f.normalMapURL, f.normalMapColorSpace, f.normalMapFlipY)), f.aoMapURL && (d.aoMap = await c(f.aoMapURL, f.aoMapColorSpace, f.aoMapFlipY)), f.displacementMapURL && (d.displacementMap = await c(f.displacementMapURL, f.displacementMapColorSpace, f.displacementMapFlipY)), f.emissiveMapURL && (d.emissiveMap = await c(f.emissiveMapURL, f.emissiveMapColorSpace, f.emissiveMapFlipY));
          const _ = new go(d);
          _.envMap = r.environment, n.current.set(a, _), L.getState().setBallMaterial(_);
        } catch (d) {
          console.error(`Failed to load material ${a}:`, d);
        } finally {
          i.current.delete(a);
        }
      });
      return () => {
        l();
      };
    }, [
      t,
      r
    ]), null;
  }, oS = Tt([
    Pt
  ], []), iS = Tt([
    Pt
  ], [
    ct
  ]), sS = ({ bumperGroups: r, worldTransform: e }) => {
    const t = u.useMemo(() => r.map((g) => {
      const y = new F();
      return g.bumperGroup.getWorldPosition(y), y;
    }), [
      r
    ]), n = u.useRef(Array(r.length).fill(null)), o = u.useRef(Array(r.length).fill(null)), i = u.useRef(Array(r.length).fill(false)), s = u.useRef(Array(r.length).fill(false)), c = u.useRef(Array(r.length).fill(false)), l = u.useRef(false), a = 1500, p = r.length, f = a / p, d = 0.5, _ = a * (1 - (p - 1) / p * d), [h, b] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        duration: _,
        easing: Be.linear
      },
      onStart: () => {
        n.current.forEach((g) => {
          g && (g.visible = true);
        });
      },
      onChange: () => {
        const y = h.progress.get() * _;
        n.current.forEach((A, C) => {
          if (A) if (y > f * C * (1 - d)) {
            const S = Math.min((y - f * C * (1 - d)) / f, 1), B = Be.easeOutCubic(S);
            A.scale.set(B, B, B), l.current && !i.current[C] && S > 0 && (s.current[C] = true);
          } else A.scale.set(0, 0, 0), !l.current && i.current[C] && (c.current[C] = true);
        });
      },
      onRest: () => {
        l.current || n.current.forEach((g) => {
          g && (g.visible = false);
        });
      }
    }));
    return it(() => {
      o.current.forEach((g, y) => {
        if (g) {
          if (s.current[y]) {
            const A = g.getCollider();
            A && (A.setCollisionGroups(iS), A.setEnabled(true), i.current[y] = true), s.current[y] = false;
          }
          if (c.current[y]) {
            const A = g.getCollider();
            A && (A.setCollisionGroups(oS), A.setEnabled(false), i.current[y] = false), c.current[y] = false;
          }
        }
      });
    }), u.useEffect(() => {
      const g = xr.subscribe((y) => y.enabledCheatIds.has("bumperWorld"), (y) => {
        l.current = y, y ? b.start({
          to: {
            progress: 1
          }
        }) : b.start({
          to: {
            progress: 0
          }
        });
      });
      return () => {
        g();
      };
    }, [
      b
    ]), R.jsx(R.Fragment, {
      children: R.jsx("group", {
        position: e.position,
        quaternion: e.quaternion,
        scale: e.scale,
        children: r.map((g, y) => R.jsxs("group", {
          position: g.bumperGroup.position,
          quaternion: g.bumperGroup.quaternion,
          scale: 0,
          ref: (A) => {
            n.current[y] = A;
          },
          visible: false,
          children: [
            R.jsx(us, {
              name: g.bumperGroup.name,
              colliderMesh: g.bumperColliderMesh,
              ringMesh: g.bumperRingMesh,
              worldTransform: {
                position: new F(),
                quaternion: new Ne(),
                scale: new F(1, 1, 1)
              },
              worldPositionOfBumperCenter: t[y],
              worldTransformForCollider: g.worldTransform,
              collisionGroup: Pt,
              colliderType: "polyline",
              ref: (A) => {
                o.current[y] = A;
              },
              enabled: false
            }),
            R.jsx("mesh", {
              geometry: g.bumperDecorationMesh.geometry,
              material: g.bumperDecorationMesh.material,
              position: g.bumperDecorationMesh.position,
              rotation: g.bumperDecorationMesh.rotation,
              scale: g.bumperDecorationMesh.scale
            })
          ]
        }, g.bumperGroup.uuid))
      })
    });
  };
  var aS = `int index = int(_light) - 1;
if (index >= 0) {
  vBrightness = lightValues[index];
}
vec3 transformed = vec3(position);
#ifdef USE_ALPHAHASH

  vPosition = vec3( position );

#endif`, cS = `vec4 sampledDiffuseColor = texture2D( map, vMapUv );

if (vBrightness > 0.0) {
   sampledDiffuseColor.r *= (1.0 + vBrightness * glowIntensity);
   sampledDiffuseColor.g *= (1.0 + vBrightness* glowIntensity * 0.1);
   sampledDiffuseColor.b *= (1.0 + vBrightness * glowIntensity * 0.1);
}

diffuseColor *= sampledDiffuseColor;`, lS = `varying float vBrightness;
uniform float glowIntensity;`, uS = `attribute float _light;
uniform float lightValues[3];

varying float vBrightness;`;
  function dS({ mesh: r }) {
    const e = u.useMemo(() => {
      const t = new _t({
        map: r.material.emissiveMap
      });
      return t.onBeforeCompile = (n) => {
        mo.getState().setPopBumperShader(n), n.uniforms.lightValues = {
          value: [
            0,
            0,
            0
          ]
        }, n.uniforms.glowIntensity = {
          value: 23
        }, n.vertexShader = n.vertexShader.replace("#include <common>", `
          #include <common>
          ${uS}`), n.vertexShader = n.vertexShader.replace("#include <begin_vertex>", `
          ${aS}`), n.fragmentShader = n.fragmentShader.replace("#include <common>", `
          #include <common>
          ${lS}`), n.fragmentShader = n.fragmentShader.replace("#include <map_fragment>", `
          ${cS}`);
      }, t;
    }, [
      r
    ]);
    return R.jsx("group", {
      children: R.jsx("mesh", {
        geometry: r.geometry,
        material: e,
        position: r.position,
        rotation: r.rotation,
        scale: r.scale
      })
    });
  }
  function fS({ name: r, targetMesh: e, sensor: t, worldTransform: n }) {
    const o = u.useRef(null), i = u.useRef(true), s = u.useRef(0), c = u.useRef(0), [l, a] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutElastic,
        duration: 2e3
      },
      onChange: () => {
        if (!o.current) return;
        const _ = c.current - s.current;
        o.current.rotation.y = s.current + _ * l.progress.get();
      }
    }), []), p = u.useCallback(() => {
      o.current && (a.stop(), s.current = o.current.rotation.y, c.current += i.current ? 3 * Math.PI : 2 * Math.PI, i.current = false, a.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }), he("buttonTargetPressed", {
        name: r
      }));
    }, [
      a,
      r
    ]), f = u.useCallback(() => {
      p(), Le.getState().addSoundToQueue(Te.ButtonTargetHit), Le.getState().addSoundToQueue(Te.BallHit);
    }, [
      p
    ]), d = u.useCallback(() => {
      !o.current || i.current || (a.stop(), s.current = o.current.rotation.y, c.current += Math.PI, i.current = true, a.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }));
    }, [
      a
    ]);
    return u.useEffect(() => se.on("newBall", () => {
      d();
    }), [
      d
    ]), u.useEffect(() => se.on("gameOver", () => {
      d();
    }), [
      d
    ]), u.useEffect(() => se.on("bfcmLettersComplete", () => {
      setTimeout(() => {
        d();
      }, 2e3);
    }), [
      d
    ]), u.useEffect(() => {
      e.material.side = Dt;
    }, [
      e
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx(xt, {
          mesh: t,
          worldTransform: n,
          applyWorldTranslationToVertices: true,
          sensor: true,
          onIntersectionEnter: f
        }),
        R.jsx("group", {
          position: n.position,
          quaternion: n.quaternion,
          scale: n.scale,
          children: R.jsx("group", {
            ref: o,
            children: R.jsx("mesh", {
              geometry: e.geometry,
              material: e.material,
              position: e.position,
              rotation: e.rotation,
              scale: e.scale
            })
          })
        })
      ]
    });
  }
  var pS = `uniform sampler2D gradientsTextureAtlas;
uniform sampler2D shapesTextureAtlas;
uniform sampler2D dollarBill;
uniform bool moneyModeIsEnabled;

varying vec2 vUv;
varying float vLifetime;
varying vec2 vGradientIDAndShapeIndex;

vec4 sampleGradientTexture(float gradientID) {
  
  
  float column = mod(gradientID, 4.0);
  
  float row = floor(gradientID / 4.0);

  
  
  float gradientU = (1.0 - vUv.x) * 0.25 + column * 0.25;
  
  float gradientV = vUv.y * 0.125 + row * 0.125;

  return texture2D(gradientsTextureAtlas, vec2(gradientU, gradientV));
}

vec4 sampleShapeTexture(float shapeIndex) {
  
  
  float column = mod(shapeIndex, 2.0);
  
  float row = floor(shapeIndex / 2.0);

  
  float shapeU = (1.0 - vUv.x) * 0.5 + column * 0.5;
  float shapeV = vUv.y * 0.5 + row * 0.5;

  return texture2D(shapesTextureAtlas, vec2(shapeU, shapeV));
}

void main() {
  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    discard;
  }

  if(moneyModeIsEnabled) {
    gl_FragColor = texture2D(dollarBill, vUv);
  } else {
    float gradientID = vGradientIDAndShapeIndex.x;
    float shapeIndex = vGradientIDAndShapeIndex.y;

    vec4 shapeColor = sampleShapeTexture(shapeIndex);
    if (shapeColor.a < 0.5) {
      discard;
    }

    gl_FragColor = sampleGradientTexture(gradientID);
  }
}`, _S = `uniform float time;
uniform float duration;
uniform bool moneyModeIsEnabled;

attribute vec3 spawnPosition;
attribute float scale;
attribute vec3 direction;
attribute float timeOffset;
attribute float rotationDirection;
attribute vec2 gradientIDAndShapeIndex;
attribute float speedScalingFactor;
attribute float startTime;
attribute float loopEnabled;

varying vec2 vUv;
varying float vLifetime;
varying vec2 vGradientIDAndShapeIndex;

const float speed = 0.18;

void main() {
  vUv = uv;

  
  float particleTime = time - startTime;
  if (loopEnabled > 0.5 && particleTime >= 0.0) {
    particleTime = mod(particleTime, duration);
  }
  vLifetime = particleTime / duration;

  if(vLifetime <= 0.0 || vLifetime >= 1.0) {
    gl_Position = vec4(0.0);
    return;
  }

  vec3 particlePosition = spawnPosition;
  
  float velocityFactor = exp(-2.0 * particleTime);
  
  float distanceTraveled = (speed + speedScalingFactor * 0.15) * (1.0 - velocityFactor) * 1.25;
  particlePosition += direction * distanceTraveled;
  
  particlePosition.y -= 9.8 * particleTime * particleTime * 0.001875;
  
  float floatTime = (time * 0.5 + timeOffset * 1000.0) * rotationDirection;
  float floatProgress = clamp(vLifetime / 0.75, 0.0, 1.0);
  float floatAmplitude = 10.0 * 0.5 * 0.02 * (timeOffset / duration) * floatProgress;
  particlePosition.x += sin(floatTime) * floatAmplitude;
  particlePosition.z += cos(floatTime) * floatAmplitude;

  
  vec3 toCameraVector = normalize(cameraPosition - particlePosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 right = normalize(cross(up, toCameraVector));
  up = normalize(cross(toCameraVector, right));

  
  float rotationAngle = 20.0 * floatTime;
  float cosAngle = cos(rotationAngle);
  float sinAngle = sin(rotationAngle);
  vec3 rotatedUp = cosAngle * up + sinAngle * cross(toCameraVector, up);
  vec3 rotatedRight = cosAngle * right + sinAngle * cross(toCameraVector, right);
  
  vec3 finalUp = cosAngle * rotatedUp + sinAngle * cross(rotatedRight, rotatedUp);

  
  float growAndShrinkScalingFactor = 1.0;
  if(vLifetime <= 0.01) {
    growAndShrinkScalingFactor = (vLifetime / 0.01);
  } else if(vLifetime >= 0.9) {
    growAndShrinkScalingFactor = 1.0 - (clamp(((vLifetime - 0.9) / 0.1), 0.0, 1.0));
  }

  vec3 orientedPosition;
  if (moneyModeIsEnabled) {
    float xScale = scale * 0.8;
    float yScale = scale * 0.4;
    orientedPosition = position.x * rotatedRight * xScale * growAndShrinkScalingFactor + position.y * finalUp * yScale * growAndShrinkScalingFactor;
  } else {
    orientedPosition = position.x * rotatedRight * scale * growAndShrinkScalingFactor + position.y * finalUp * scale * growAndShrinkScalingFactor;
  }

  vGradientIDAndShapeIndex = gradientIDAndShapeIndex;

  gl_Position = projectionMatrix * viewMatrix * vec4(particlePosition + orientedPosition, 1.0);
}`;
  const bt = 14, _n = 12, oo = 13, tf = 250, rf = 3, c0 = tf * rf, Yr = 4;
  At.preload(ed);
  At.preload(W0);
  At.preload(td);
  function hS() {
    const r = Ue((_) => _.clock), e = At(ed), t = At(W0), n = At(td), o = u.useMemo(() => [
      new F(0.071408655009468, -0.01873270319451867, -0.2282423685865353),
      new F(0.010448345002902613, -0.0217474113367401, -0.2017826148084191),
      new F(0.09803959632180823, -0.02563360619954975, -0.1676739202506921)
    ], []), i = u.useMemo(() => [
      new F(-0.05708324386077046, 0.9648515526154167, 0.256520924656619).normalize(),
      new F(0.14564767541648405, 0.9748773317908898, 0.1685257964647352).normalize(),
      new F(-0.14564767542005114, 0.9878013448868502, 0.055093190490431154).normalize()
    ], []), s = u.useMemo(() => {
      const g = 0.004687500000000001, y = new Float32Array(c0 * bt), A = new Ne(), C = new F(0, 0, 1), S = new F(), B = new Ne(), T = new F();
      let E = 0;
      for (let P = 0; P < rf; P++) {
        A.setFromUnitVectors(C, i[P]);
        for (let D = 0; D < tf; D++) {
          const H = o[P], k = Math.random() * Math.PI * 2, J = 0 * Math.random(), W = Math.cos(k) * J, K = 0, Q = Math.sin(k) * J, Z = J2(0), j = Math.random() * 2 * Math.PI, U = Math.acos(1 - Math.random() * (1 - Math.cos(Z)));
          S.set(Math.sin(U) * Math.cos(j), Math.sin(U) * Math.sin(j), Math.cos(U)), S.applyQuaternion(A), B.setFromUnitVectors(i[P], S), T.copy(i[P]).applyQuaternion(B).normalize();
          const N = Math.floor(Math.random() * 32), oe = Math.floor(Math.random() * 4);
          y[E * bt + 0] = H.x + W, y[E * bt + 1] = H.y + K, y[E * bt + 2] = H.z + Q, y[E * bt + 3] = 625e-5 + Math.random() * g, y[E * bt + 4] = T.x, y[E * bt + 5] = T.y, y[E * bt + 6] = T.z, y[E * bt + 7] = Math.random() * Yr, y[E * bt + 8] = Math.random() < 0.5 ? -1 : 1, y[E * bt + 9] = N, y[E * bt + 10] = oe, y[E * bt + 11] = Math.random(), y[E * bt + _n] = -100, y[E * bt + oo] = 0, E++;
        }
      }
      const M = new Cn(y, bt), x = new vo(1, 1);
      return x.setAttribute("spawnPosition", new rt(M, 3, 0)), x.setAttribute("scale", new rt(M, 1, 3)), x.setAttribute("direction", new rt(M, 3, 4)), x.setAttribute("timeOffset", new rt(M, 1, 7)), x.setAttribute("rotationDirection", new rt(M, 1, 8)), x.setAttribute("gradientIDAndShapeIndex", new rt(M, 2, 9)), x.setAttribute("speedScalingFactor", new rt(M, 1, 11)), x.setAttribute("startTime", new rt(M, 1, _n)), x.setAttribute("loopEnabled", new rt(M, 1, oo)), x;
    }, [
      o,
      i
    ]), c = u.useMemo(() => new sr({
      uniforms: {
        time: {
          value: 0
        },
        duration: {
          value: Yr
        },
        gradientsTextureAtlas: {
          value: e
        },
        shapesTextureAtlas: {
          value: t
        },
        dollarBill: {
          value: n
        },
        moneyModeIsEnabled: {
          value: false
        }
      },
      vertexShader: _S,
      fragmentShader: pS,
      side: Bn
    }), [
      e,
      t,
      n
    ]), l = u.useRef(null), a = u.useRef(null), p = u.useRef(false);
    it((_) => {
      c.uniforms.time.value = _.clock.elapsedTime;
    });
    const f = u.useCallback(() => {
      a.current && (clearTimeout(a.current), a.current = null), p.current = true;
      const _ = r.elapsedTime, h = s.attributes.spawnPosition.data, b = h.array;
      for (let g = 0; g < c0; g++) {
        const y = b[g * bt + _n], A = _ - y;
        A < 0 || A >= Yr ? (b[g * bt + _n] = _ + Math.random() * Yr, b[g * bt + oo] = 1) : b[g * bt + oo] = 0;
      }
      h.needsUpdate = true, l.current && (l.current.visible = true);
    }, [
      r,
      s
    ]), d = u.useCallback(() => {
      p.current = false;
      const _ = r.elapsedTime, h = s.attributes.spawnPosition.data, b = h.array;
      for (let g = 0; g < c0; g++) {
        const y = b[g * bt + _n], A = _ - y, C = b[g * bt + oo];
        if (A >= 0) if ((C > 0.5 ? A % Yr : A) < Yr) {
          const B = Math.floor(A / Yr);
          b[g * bt + _n] = y + B * Yr;
        } else b[g * bt + _n] = -100;
        else b[g * bt + _n] = -100;
        b[g * bt + oo] = 0;
      }
      h.needsUpdate = true, a.current = setTimeout(() => {
        !p.current && l.current && (l.current.visible = false);
      }, Yr * 1e3);
    }, [
      r,
      s
    ]);
    return u.useEffect(() => L.subscribe((_) => _.confettiStatus, (_) => {
      c.uniforms.moneyModeIsEnabled.value = _.moneyModeIsEnabled, _.turnedOn ? f() : d();
    }), [
      f,
      d,
      c
    ]), R.jsx(R.Fragment, {
      children: R.jsx("instancedMesh", {
        ref: l,
        args: [
          s,
          c,
          c0
        ],
        frustumCulled: false,
        visible: false
      })
    });
  }
  const mS = 65, gS = 40.5, wS = 55, bS = 50, yS = 650, AS = 400, g2 = 1, w2 = 0.7, vS = 0.791, CS = 1;
  function SS({ name: r, side: e, baseGroup: t, base: n, baseGlow: o, guard: i, worldTransform: s }) {
    const { world: c, RAPIER: l, rigidBodyStates: a } = Fr(), p = u.useRef(null), f = u.useRef(null), d = u.useRef(null), _ = u.useRef(null), h = u.useRef(null), b = u.useRef(null), g = u.useMemo(() => e === "left" ? si.Left : si.Right, [
      e
    ]);
    u.useEffect(() => {
      var _a2;
      if (!c || !l || !b.current) return;
      const S = l.RigidBodyDesc.fixed().setTranslation(s.position.x, -s.position.z);
      p.current = c.createRigidBody(S);
      const B = l.RigidBodyDesc.dynamic().setTranslation(s.position.x, -s.position.z).setLinearDamping(vS).setAngularDamping(CS);
      B.setCcdEnabled(true), B.setCanSleep(false), f.current = c.createRigidBody(B);
      const T = ls(n, s), E = l.ColliderDesc.convexHull(T);
      if (!E) return;
      E.setFriction(g2), E.setRestitution(w2);
      const M = Tt([
        Pt
      ], [
        ct
      ]);
      if (E.setCollisionGroups(M), d.current = c.createCollider(E, f.current), i) {
        const J = Bi(i, s), W = (_a2 = i.geometry.index) == null ? void 0 : _a2.array;
        if (W) {
          const K = l.ColliderDesc.polyline(J, W);
          K.setDensity(0), K.setFriction(g2), K.setRestitution(w2), K.setCollisionGroups(M), _.current = c.createCollider(K, f.current);
        }
      }
      const x = l.JointData.revolute({
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 0
      });
      h.current = c.createImpulseJoint(x, p.current, f.current, true);
      const D = r === "RightFlipperGroup2" ? gS : mS, H = e === "left" ? 0 : -D * (Math.PI / 180), k = e === "left" ? D * (Math.PI / 180) : 0;
      return h.current.setLimits(H, k), h.current.configureMotorModel(l.MotorModel.AccelerationBased), h.current.configureMotorVelocity(0, 0), a.set(f.current.handle, {
        rigidBody: f.current,
        object: b.current
      }), () => {
        a.delete(f.current.handle), Wr(c, d.current), _.current && Wr(c, _.current), W3(c, h.current), sn(c, f.current), sn(c, p.current);
      };
    }, [
      c,
      l,
      s,
      a,
      n,
      i,
      e,
      r
    ]);
    const y = u.useCallback(() => {
      if (!h.current) return;
      const S = (e === "left" ? 1 : -1) * wS;
      h.current.configureMotorVelocity(S, yS), i || Le.getState().addSoundToQueue(Te.FlipperUp);
    }, [
      e,
      i
    ]), A = u.useCallback(() => {
      if (!h.current) return;
      const S = (e === "left" ? -1 : 1) * bS;
      h.current.configureMotorVelocity(S, AS), i || Le.getState().addSoundToQueue(Te.FlipperDown);
    }, [
      e,
      i
    ]);
    u.useEffect(() => M0.subscribe((S) => S[g], (S) => {
      S ? y() : A();
    }), [
      g,
      y,
      A
    ]);
    const C = u.useMemo(() => new _t({
      map: n.material.emissiveMap
    }), [
      n
    ]);
    return u.useEffect(() => {
      o.material.side = Dt;
    }, [
      o
    ]), R.jsx("group", {
      position: s.position,
      quaternion: s.quaternion,
      children: R.jsxs("group", {
        ref: b,
        position: t.position,
        quaternion: t.quaternion,
        scale: t.scale,
        children: [
          R.jsx("mesh", {
            geometry: n.geometry,
            material: C,
            position: n.position,
            rotation: n.rotation,
            scale: n.scale
          }),
          R.jsx("mesh", {
            geometry: o.geometry,
            material: o.material,
            position: o.position,
            rotation: o.rotation,
            scale: o.scale
          })
        ]
      })
    });
  }
  const b2 = {
    pulse: {
      fn: (r = {}) => {
        const { count: e = 1 } = r;
        return (t, n, o) => {
          const s = n * e % 1 < 0.5 ? 1 : 0;
          t.forEach((c) => o(c.id, s));
        };
      },
      duration: (r = {}) => (r.duration ?? 0.4) * (r.count ?? 1)
    },
    step: {
      fn: (r = {}) => {
        const { delay: e = 0.2 } = r;
        return (t, n, o) => {
          const i = Math.floor(n * t.length);
          t.forEach((s, c) => {
            o(s.id, c === i ? 1 : 0);
          });
        };
      },
      duration: (r = {}, e) => (r.delay ?? 0.2) * e
    },
    zWave: {
      fn: (r = {}) => {
        const { pulseWidth: e = 0.2, flipped: t = false, zStart: n = -0.6, zEnd: o = 0.6 } = r;
        return (i, s, c) => {
          const l = t ? o - s * (o - n) : n + s * (o - n);
          i.forEach((a) => {
            const p = a.position.z, d = Math.abs(p - l) < e ? 1 : 0;
            c(a.id, d);
          });
        };
      },
      duration: (r = {}) => r.duration ?? 1
    },
    radialWave: {
      fn: (r = {}) => {
        const { centerX: e = 0, centerY: t = 0, centerZ: n = 0, pulseWidth: o = 0.2, maxRadius: i = 2 } = r;
        return (s, c, l) => {
          const a = c * i;
          s.forEach((p) => {
            const f = p.position.x - e, d = p.position.y - t, _ = p.position.z - n, h = Math.sqrt(f * f + d * d + _ * _), g = Math.abs(h - a) < o ? 1 : 0;
            l(p.id, g);
          });
        };
      },
      duration: (r = {}) => r.duration ?? 1.5
    },
    spiralWave: {
      fn: (r = {}) => {
        const { centerX: e = 0, centerZ: t = 0, pulseWidth: n = 0.5, loops: o = 1 } = r;
        return (i, s, c) => {
          const l = -Math.PI / 2, a = 2 * Math.PI * o, p = l - s * a;
          i.forEach((f) => {
            const d = f.position.x - e, _ = f.position.z - t;
            let b = (Math.atan2(_, d) - p) % (2 * Math.PI);
            b < 0 && (b += 2 * Math.PI);
            const g = b < n ? 1 : 0;
            c(f.id, g);
          });
        };
      },
      duration: (r = {}) => r.duration ?? 1
    },
    directionalWave: {
      fn: (r = {}) => {
        const { posX: e = 0, posZ: t = 0, dirX: n = 0, dirZ: o = 1, pulseWidth: i = 0.2, maxDistance: s = 2 } = r, c = Math.sqrt(n * n + o * o), l = n / c, a = o / c;
        return (p, f, d) => {
          const _ = f * s;
          p.forEach((h) => {
            const b = h.position.x - e, g = h.position.z - t, y = b * l + g * a;
            if (y < 0) {
              d(h.id, 0);
              return;
            }
            const C = Math.abs(y - _) < i ? 1 : 0;
            d(h.id, C);
          });
        };
      },
      duration: (r = {}) => r.duration ?? 1
    }
  };
  function RS(r, e) {
    const t = e.length, n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), i = Array.from({
      length: t
    }, () => /* @__PURE__ */ new Map()), s = /* @__PURE__ */ new Map();
    function c(p) {
      const f = [];
      n.forEach((d) => {
        d.stepElapsedTime += p;
        const _ = d.steps[d.currentStepIndex], h = Math.min(d.stepElapsedTime / _.duration, 1), b = (y, A) => {
          y >= 0 && y < t && i[y].set(d.chainId, A);
        }, g = _.lightIndices.map((y) => e[y]);
        _.updateFn(g, h, b), h >= 1 && (d.stepElapsedTime -= _.duration, d.currentStepIndex++, d.currentStepIndex >= d.steps.length && (d.loop === true ? d.currentStepIndex = 0 : typeof d.loop == "number" && d.loopCount < d.loop ? (d.loopCount++, d.currentStepIndex = 0) : f.push(d)));
      }), f.forEach((d) => {
        n.delete(d);
        for (let _ = 0; _ < t; _++) i[_].delete(d.chainId);
        s.delete(d.chainId), o.delete(d.name);
      }), l();
    }
    function l() {
      for (let p = 0; p < t; p++) {
        if (i[p].size === 0) {
          r.current[p] = -1;
          continue;
        }
        let f = 0, d = -1 / 0;
        i[p].forEach((_, h) => {
          const b = s.get(h) ?? 0;
          (b > d || b === d && _ > f) && (f = _, d = b);
        }), r.current[p] = f;
      }
    }
    let a = 0;
    return {
      animate(p = {}) {
        const f = p.name ?? `__auto_${a++}`, d = {
          priority: p.priority ?? 0,
          loop: p.loop ?? false,
          name: f
        }, _ = o.get(f);
        if (_) {
          n.delete(_);
          for (let C = 0; C < t; C++) i[C].delete(_.chainId);
          s.delete(_.chainId), o.delete(f);
        }
        const h = [], b = Symbol("animation-chain");
        s.set(b, d.priority);
        let g = null;
        const y = () => {
          !g && h.length > 0 && (g = {
            steps: h,
            currentStepIndex: 0,
            stepElapsedTime: 0,
            priority: d.priority,
            chainId: b,
            name: d.name,
            loop: d.loop,
            loopCount: 0
          }, n.add(g), o.set(d.name, g));
        }, A = {
          wait: (C) => (h.push({
            duration: C,
            lightIndices: [],
            updateFn: () => {
            }
          }), y(), A),
          custom: (C, S, B) => (h.push({
            duration: S,
            lightIndices: C,
            updateFn: B
          }), y(), A),
          stop: () => {
            if (g) {
              n.delete(g);
              for (let C = 0; C < t; C++) i[C].delete(b);
              s.delete(b), l();
            }
          }
        };
        return Object.keys(b2).forEach((C) => {
          const S = b2[C];
          A[C] = (B, T = {}) => {
            const E = typeof S.duration == "function" ? S.duration(T, B.length) : S.duration;
            return h.push({
              duration: E,
              lightIndices: B,
              updateFn: S.fn(T)
            }), y(), A;
          };
        }), A;
      },
      updateAnimations: c,
      stopAnimation: (p) => {
        const f = o.get(p);
        if (f) {
          n.delete(f);
          for (let d = 0; d < t; d++) i[d].delete(f.chainId);
          s.delete(f.chainId), o.delete(p), l();
        }
      },
      stopAllAnimations: () => {
        n.clear(), o.clear();
        for (let p = 0; p < t; p++) i[p].clear();
        s.clear(), l();
      }
    };
  }
  function MS(r, e) {
    const t = u.useMemo(() => RS(r, e), [
      r,
      e
    ]);
    return u.useEffect(() => (t.stopAllAnimations(), () => {
      t.stopAllAnimations();
    }), [
      t
    ]), t;
  }
  const ES = 18, Zr = 3, BS = ({ lightValuesRef: r, lightInfos: e }) => {
    const t = e.length, n = u.useRef(new Float32Array(t).fill(-1)), o = u.useRef(new Float32Array(t)), { animate: i, updateAnimations: s, stopAnimation: c, stopAllAnimations: l } = MS(n, e), a = Array.from({
      length: t
    }, (d, _) => _);
    it((d, _) => {
      s(_);
      const h = mo.getState().shopifyRampLetterShader, b = [
        r.current[60],
        r.current[59],
        r.current[58],
        r.current[57],
        r.current[56],
        r.current[55],
        r.current[54]
      ];
      h && (h.uniforms.letters = {
        value: b
      });
      const g = mo.getState().globeShader;
      g && (g.uniforms.innerLight = {
        value: r.current[61]
      });
      const y = mo.getState().popBumperShader;
      y && (y.uniforms.lightValues = {
        value: [
          r.current[76],
          r.current[77],
          r.current[78]
        ]
      });
      for (let B = 0; B < t; B++) {
        const T = n.current[B] >= 0 ? n.current[B] : o.current[B], E = B === 61;
        r.current[B] = p9(r.current[B], T, E ? 9 : ES, _);
      }
      const A = L.getState().ballSaveHasBeenUsed, C = d.clock.elapsedTime - L.getState().timeWhenPlungerLaneDoorClosed, S = !A && C <= t3 && L.getState().plungeDoorClosed;
      p(75, S ? 1 : 0);
    });
    const p = (d, _) => {
      o.current[d] = _;
    }, f = () => {
      for (let d = 0; d < t; d++) o.current[d] = 0;
    };
    return gc("Lights", {
      activeLight: {
        value: -1,
        min: -1,
        max: t - 1,
        step: 1,
        onChange: (d) => {
          for (let _ = 0; _ < t; _++) o.current[_] = 0;
          o.current[d] = 1;
        }
      },
      partyTime: Zt(() => {
        i({
          name: "party",
          loop: false,
          priority: 2
        }).zWave(a).wait(0.3).zWave(a).wait(0.3).zWave(a).pulse(a, {
          count: 3
        }).wait(0.3).zWave(a, {
          flipped: true
        });
      })
    }, {
      order: ap
    }), u.useEffect(() => L.subscribe((d) => d.plungeDoorClosed, (d) => {
      const _ = !d, h = [
        16,
        17,
        18,
        19,
        20
      ];
      _ ? i({
        name: "launch",
        loop: true,
        priority: 1
      }).step(h).pulse(h, {
        count: 2
      }) : (c("launch"), i({
        name: "plunge"
      }).zWave(a, {
        flipped: true,
        duration: 0.5
      }));
    }, {
      fireImmediately: true
    }), [
      i,
      c,
      a
    ]), u.useEffect(() => se.on("collision", (d) => {
      let _ = 0, h = 0;
      d.target === "BumperGroup0" ? (_ = 21, h = 77) : d.target === "BumperGroup1" ? (_ = 23, h = 76) : d.target === "BumperGroup2" ? (_ = 22, h = 78) : d.target === "LeftSlingshotGroup" ? _ = 41 : d.target === "RightSlingshotGroup" && (_ = 42), _ > 0 && i({
        name: "collisionAnimation"
      }).pulse([
        _
      ], {
        duration: 0.1
      }), h > 0 && i({
        name: "bumperTopCollisionAnimation"
      }).pulse([
        h
      ], {
        duration: 0.1
      });
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.shopLettersComplete, (d, _) => {
      d[0] !== _[0] && (d[0] && i({
        name: "shopLetterA"
      }).pulse([
        13
      ], {
        duration: 0.2
      }), p(13, d[0] ? 1 : 0)), d[1] !== _[1] && (d[1] && i({
        name: "shopLetterB"
      }).pulse([
        12
      ], {
        duration: 0.2
      }), p(12, d[1] ? 1 : 0)), d[2] !== _[2] && (d[2] && i({
        name: "shopLetterC"
      }).pulse([
        14
      ], {
        duration: 0.2
      }), p(14, d[2] ? 1 : 0)), d[3] !== _[3] && (d[3] && i({
        name: "shopLetterD"
      }).pulse([
        15
      ], {
        duration: 0.2
      }), p(15, d[3] ? 1 : 0));
    }), [
      i
    ]), u.useEffect(() => {
      se.on("shopLettersComplete", () => {
        const d = [
          13,
          12,
          14,
          15
        ];
        p(50, 1), i({
          name: "shopLettersComplete"
        }).step(d, {
          duration: 0.2,
          delay: 0.1
        }).step(d, {
          duration: 0.2,
          delay: 0.1
        }).step(d, {
          duration: 0.2,
          delay: 0.1
        }).pulse(d, {
          duration: 0.2,
          count: 5
        });
      });
    }, [
      i
    ]), u.useEffect(() => {
      se.on("airplaneMissionCompleted", () => {
        p(52, 1);
      });
    }, [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.rolloverLanesComplete, (d, _) => {
      d[0] !== _[0] && (d[0] && i({
        name: "rollover1"
      }).pulse([
        28
      ], {
        duration: 0.2
      }), p(28, d[0] ? 1 : 0)), d[1] !== _[1] && (d[1] && i({
        name: "rollover2"
      }).pulse([
        29
      ], {
        duration: 0.2
      }), p(29, d[1] ? 1 : 0)), d[2] !== _[2] && (d[2] && i({
        name: "rollover3"
      }).pulse([
        30
      ], {
        duration: 0.2
      }), p(30, d[2] ? 1 : 0));
    }), [
      i
    ]), u.useEffect(() => se.on("laneEvent", ({ type: d, id: _ }) => {
      if (d === "rolloverLane") {
        const b = {
          4: 28,
          5: 29,
          6: 30
        }[_];
        i({
          name: "rolloverLane",
          priority: Zr
        }).pulse([
          b
        ], {
          duration: 0.2,
          count: 2
        });
      }
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.rolloverLanesComplete, (d) => {
      if (c("rolloverLanesRemaining"), !(d[0] && d[1] && d[2]) && (d[0] || d[1] || d[2])) {
        const _ = [
          28,
          29,
          30
        ].filter((h, b) => !d[b]);
        i({
          name: "rolloverLanesRemaining",
          loop: true
        }).pulse(_, {
          duration: 0.8
        });
      }
    }), [
      i,
      c
    ]), u.useEffect(() => se.on("rolloverLanesComplete", (d) => {
      const _ = [
        28,
        29,
        30
      ];
      c("rolloverLanesRemaining"), i({
        name: "rolloverLanesComplete"
      }).step(_, {
        duration: 0.2,
        delay: 0.1
      }).step(_, {
        duration: 0.2,
        delay: 0.1
      }).step(_, {
        duration: 0.2,
        delay: 0.1
      }).pulse(_, {
        duration: 0.2,
        count: 5
      });
    }), [
      i,
      c
    ]), u.useEffect(() => se.on("buttonTargetPressed", (d) => {
      $t.LetterB, $t.LetterF, $t.LetterC, $t.LetterM, d.name === $t.LetterM && i("Hitwave M").directionalWave(a, {
        posX: 0.2,
        posZ: -0.25,
        dirX: -0.5,
        dirZ: 0.5,
        pulseWidth: 0.2,
        duration: 1.5
      }), (d.name === $t.LetterB || d.name === $t.LetterF || d.name === $t.LetterC) && i("Hitwave BFC").directionalWave(a, {
        posX: 0,
        posZ: -0.3,
        dirX: 0.5,
        dirZ: 0.5,
        pulseWidth: 0.2,
        duration: 1.5
      });
    })), u.useEffect(() => L.subscribe((d) => d.bfcmTargetsComplete, (d, _) => {
      if (d[0] && d[1] && d[2] && d[3]) return;
      const h = {
        duration: 0.2,
        count: 5
      };
      d[0] !== _[0] && (d[0] !== _[0] && i({
        name: "bfcmLetterA"
      }).pulse([
        37
      ], h), p(37, d[0] ? 1 : 0)), d[1] !== _[1] && (d[1] && i({
        name: "bfcmLetterB"
      }).pulse([
        38
      ], h), p(38, d[1] ? 1 : 0)), d[2] !== _[2] && (d[2] && i({
        name: "bfcmLetterC"
      }).pulse([
        39
      ], h), p(39, d[2] ? 1 : 0)), d[3] !== _[3] && (d[3] && i({
        name: "bfcmLetterD"
      }).pulse([
        40
      ], h), p(40, d[3] ? 1 : 0));
    }), [
      i
    ]), u.useEffect(() => se.on("bfcmLettersComplete", (d) => {
      const _ = [
        37,
        38,
        39,
        40
      ];
      p(48, 1), i({
        name: "bfcmLettersComplete"
      }).step(_, {
        duration: 0.2,
        delay: 0.5
      }).step(_, {
        duration: 0.2,
        delay: 0.5
      }).step(_, {
        duration: 0.2,
        delay: 0.5
      }).pulse(_, {
        duration: 0.2,
        count: 5
      });
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.plungeDoorClosed, (d) => {
      const _ = d, h = [
        8,
        9,
        10,
        2,
        3,
        4,
        7,
        6,
        68
      ], b = [
        0,
        5
      ];
      _ ? (i({
        name: "rampIdle",
        loop: true,
        priority: 1
      }).step(h).wait(0.1).pulse([
        8,
        9,
        10,
        7,
        6,
        68
      ]).wait(0.1).pulse([
        2,
        3,
        4
      ]).wait(2.5), i({
        name: "rampIdle2",
        loop: true,
        priority: 1
      }).wait(2.5).pulse(b, {
        count: 5,
        duration: 0.3
      })) : (c("rampIdle"), c("rampIdle2"));
    }, {
      fireImmediately: true
    }), [
      i,
      c
    ]), u.useEffect(() => se.on("globeSpin", ({ direction: d }) => {
      let _ = a;
      d < 0 && (_ = _.reverse()), i({
        name: "ringLightsAfterRamp"
      }).spiralWave(_, {
        duration: 2.5,
        loops: 6,
        direction: d
      });
    }), [
      i,
      a
    ]), u.useEffect(() => se.on("ballReachedLockTarget", (d) => {
      if (d.type === yt.Retail) i({
        name: "retailLockPulse",
        priority: Zr
      }).pulse(a, {
        duration: 0.5,
        count: 3
      });
      else if (d.type === yt.Shoppy) {
        const _ = [
          53,
          52,
          51,
          50,
          49,
          48,
          61,
          60,
          59,
          58,
          57,
          56,
          55,
          54
        ];
        i({
          name: "shoppyLockPulse",
          priority: Zr
        }).pulse(_, {
          duration: 0.5,
          count: 3
        }), i({
          name: "shoppyLightParty",
          loop: false,
          priority: 2
        }).spiralWave(a, {
          loops: 3,
          duration: 1.5,
          pulseWidth: 2
        }), i({
          name: "shoppyLockPulseLight",
          priority: Zr
        }).pulse([
          26
        ], {
          duration: 0.2,
          count: 12
        });
      }
    }), [
      i,
      a
    ]), u.useEffect(() => se.on("laneEvent", ({ type: d, id: _ }) => {
      if (d === "sideLane") {
        const h = _ === 7 ? [
          8,
          9,
          10
        ] : [
          7,
          6,
          68
        ], b = _ === 7 ? [
          79,
          80,
          81
        ] : [
          82,
          83
        ];
        i({
          name: "sideLane",
          priority: Zr
        }).pulse(h, {
          duration: 0.2,
          count: 4
        }), i({
          name: "sideLaneFlash",
          priority: Zr
        }).step(b, {
          delay: 0.1,
          count: 4
        }).pulse(b, {
          duration: 0.2,
          count: 4
        });
      }
    }), [
      i
    ]), u.useEffect(() => se.on("miniGameFence", ({ raise: d }) => {
      d && i({
        name: "miniGameFence"
      }).pulse([
        43,
        44,
        45,
        46,
        47
      ], {
        duration: 0.5,
        count: 3
      });
    }), [
      i,
      a
    ]), u.useEffect(() => L.subscribe((d) => d.retailStoresMiniGameCompleted, (d) => {
      p(43, d ? 1 : 0);
    }), [
      i,
      p
    ]), u.useEffect(() => L.subscribe((d) => d.boxesMiniGameCompleted, (d) => {
      p(44, d ? 1 : 0);
    }), [
      i,
      p
    ]), u.useEffect(() => L.subscribe((d) => d.fiveStarMiniGameCompleted, (d) => {
      p(45, d ? 1 : 0);
    }), [
      i,
      p
    ]), u.useEffect(() => L.subscribe((d) => d.cashRegisterMiniGameCompleted, (d) => {
      p(46, d ? 1 : 0);
    }), [
      i,
      p
    ]), u.useEffect(() => L.subscribe((d) => d.podiumMiniGameCompleted, (d) => {
      p(47, d ? 1 : 0);
    }), [
      i,
      p
    ]), u.useEffect(() => L.subscribe((d) => d.allMiniGamesMissionCompleted, (d) => {
      p(53, d ? 1 : 0), d && i({
        name: "allMiniGamesMissionCompleted",
        priority: Zr
      }).pulse(a, {
        count: 5
      }).zWave(a).zWave(a, {
        flipped: true
      }).pulse(a, {
        count: 5
      });
    }), [
      i,
      p,
      a
    ]), u.useEffect(() => se.on("gameOver", (d) => {
      f();
    }), []), u.useEffect(() => se.on("ballSave", (d) => {
      d.type === "timer" && i({
        name: "ballSave"
      }).pulse([
        75
      ], {
        duration: 0.5,
        count: 5
      });
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.numShopifyLettersCompleted, (d) => {
      const _ = d - 1;
      if (_ < 0 || _ > 6) return;
      const h = [
        60,
        59,
        58,
        57,
        56,
        55,
        54
      ], b = [
        "S",
        "H",
        "O",
        "P",
        "I",
        "F",
        "Y"
      ], g = h[_];
      i({
        name: `shopifyLetter${b[_]}`
      }).pulse([
        g
      ], {
        duration: 0.2
      }), p(g, 1);
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.shopifyLettersMissionCompleted, (d) => {
      d && p(51, 1);
    }), [
      i
    ]), u.useEffect(() => L.subscribe((d) => d.singleMiniGameMissionCompleted, (d) => {
      p(49, d ? 1 : 0);
    }), [
      i,
      p,
      a
    ]), u.useEffect(() => se.on("merchantFirstSale", (d) => {
      i({
        name: "merchantFirstSale"
      }).pulse(a, {
        duration: 0.2,
        count: 3
      }).radialWave(a, {
        duration: 1,
        pulseWidth: 0.05,
        maxRadius: 1
      }).radialWave(a, {
        duration: 1,
        pulseWidth: 0.05,
        maxRadius: 1
      }).pulse(a, {
        duration: 0.2,
        count: 3
      });
    }), [
      i,
      p,
      a
    ]), u.useEffect(() => se.on("newBall", (d) => {
      i({
        name: "drainball"
      }).zWave(a, {
        flipped: false
      }), i({
        name: "drainball2",
        priority: Zr + 1
      }).step([
        41,
        42
      ], {
        delay: 0.2
      }).step([
        41,
        42
      ], {
        delay: 0.2
      }).step([
        41,
        42
      ], {
        delay: 0.2
      }).step([
        41,
        42
      ], {
        delay: 0.2
      }).step([
        41,
        42
      ], {
        delay: 0.2
      }).step([
        41,
        42
      ], {
        delay: 0.2
      });
    }), [
      i,
      a
    ]), u.useEffect(() => L.subscribe((d) => d.confettiStatus, (d) => {
      if (d.turnedOn) {
        const _ = a;
        i({
          name: "confettiLights",
          loop: true,
          priority: Zr + 1
        }).pulse(_, {
          duration: 0.2,
          count: 2
        }).spiralWave(_, {
          duration: 1,
          count: 2
        }).radialWave(_, {
          duration: 1,
          pulseWidth: 0.05,
          maxRadius: 1
        }).pulse(_, {
          duration: 0.2,
          count: 2
        });
      } else c("confettiLights");
    }), [
      i,
      p,
      a
    ]), R.jsx(R.Fragment, {});
  };
  var IS = `varying vec3 vPosition;
varying vec2 vUv;

uniform sampler2D maskTexture;
uniform sampler2D map;
uniform sampler2D emissiveMap;
uniform float boardEmissiveIntensity;
uniform int currentIndex;
uniform float lightValues[\${numLights}];
uniform float ballPositions[18];
uniform bool ballVisibility[6];
uniform float shadowRadius;

#define SHADOW_STRENGTH 4.0

float getBallShadow(int ballId) {
    float shadow = smoothstep(shadowRadius, 0.0, distance(vPosition.xyz, vec3(ballPositions[ballId * 3], ballPositions[ballId * 3 + 1], ballPositions[ballId * 3 + 2])));
    return shadow;
}

void main() {
    
    int maskId = int(texture2D(maskTexture, vUv).r * 255.0);
    float maskIntensity = lightValues[maskId - 1];

    
    vec4 emissiveColor = texture2D(emissiveMap, vUv);

    
    vec3 totalEmissiveRadiance = emissiveColor.rgb * maskIntensity * boardEmissiveIntensity;

    
    float shadow = 0.0;
    if (ballVisibility[0]) shadow += getBallShadow(0);
    if (ballVisibility[1]) shadow += getBallShadow(1);
    if (ballVisibility[2]) shadow += getBallShadow(2);
    if (ballVisibility[3]) shadow += getBallShadow(3);
    if (ballVisibility[4]) shadow += getBallShadow(4);
    if (ballVisibility[5]) shadow += getBallShadow(5);

    
    vec3 baseColor = texture2D(map, vUv).rgb;
    #ifdef MOBILE
      baseColor = pow(baseColor, vec3(0.4545));
    #endif
    vec3 outgoingLight = baseColor * (1.0 - (shadow * SHADOW_STRENGTH));
    outgoingLight += totalEmissiveRadiance * (1.0 - (shadow * SHADOW_STRENGTH));

    gl_FragColor = vec4(outgoingLight, 1.0);
}`, TS = `varying vec3 vPosition;
varying vec2 vUv;

void main() {
    vPosition = position;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`, xS = `varying float vInstanceID;
void main() {
  float id = vInstanceID + 1.0; 
  gl_FragColor = vec4(id / 255.0);
}`, PS = `varying float vInstanceID;
void main() {
  vInstanceID = float(gl_InstanceID);
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`;
  const Ra = 0.022, FS = ({ mesh: r, lightMaskGroup: e }) => {
    const t = Ue((d) => d.gl), [n, o] = u.useState(null), i = e.children.length, s = u.useMemo(() => e.children.map((d, _) => ({
      id: _,
      position: {
        x: d.position.x,
        y: d.position.y,
        z: d.position.z
      }
    })), [
      e
    ]);
    u.useEffect(() => {
      if (!e) return;
      r.geometry.computeBoundingBox();
      const d = r.geometry.boundingBox, _ = new F();
      d.getSize(_);
      const h = new F();
      d.getCenter(h);
      const b = _.x / _.z, g = 1024, y = g, A = Math.floor(g * b), C = new U0(A, y, {
        format: j2,
        type: C0,
        minFilter: Da,
        magFilter: Da,
        generateMipmaps: false
      });
      C.texture.unpackAlignment = 1, o(C);
      const S = new bi(_.x / 2 / b + h.x, -_.x / 2 / b + h.x, _.z / 2 + h.z, -_.z / 2 + h.z, 0.1, 100);
      S.position.set(0, 10, 0), S.rotation.set(-Math.PI / 2, 0, Math.PI), S.updateProjectionMatrix();
      const B = new N0(), T = e.children, E = new sr({
        vertexShader: PS,
        fragmentShader: xS
      }), M = new _9(1, 1, 1), x = new D2(M, E, T.length), P = new et().makeScale(0.04, 0.04, 0.04);
      T.forEach((H, k) => {
        const J = new et();
        H.updateWorldMatrix(true, false), J.copy(H.matrixWorld), J.multiply(P), x.setMatrixAt(k, J);
      }), x.instanceMatrix.needsUpdate = true, B.add(x);
      const D = t.getRenderTarget();
      return t.setRenderTarget(C), t.clear(), t.render(B, S), t.setRenderTarget(D), M.dispose(), E.dispose(), x.dispose(), () => {
        C.dispose();
      };
    }, [
      r,
      e,
      t
    ]);
    const c = u.useRef(null), l = u.useRef(new Float32Array(i)), a = yi(), p = tl((d) => d.vrIsEnabled), f = u.useMemo(() => {
      if (!n) return r.material;
      const d = new sr({
        vertexShader: TS,
        fragmentShader: IS,
        defines: {
          MOBILE: a.isMobile || p
        },
        uniforms: {
          ballPositions: {
            value: new Float32Array(18)
          },
          ballVisibility: {
            value: new Float32Array(6)
          },
          maskTexture: {
            value: n.texture
          },
          lightValues: {
            value: l.current
          },
          shadowRadius: {
            value: Ra
          },
          map: {
            value: r.material.map
          },
          emissiveMap: {
            value: r.material.emissiveMap
          },
          boardEmissiveIntensity: {
            value: jb
          }
        }
      });
      return d.fragmentShader = d.fragmentShader.replace("${numLights}", i.toString()), d;
    }, [
      r.material,
      n,
      i,
      p,
      a.isMobile
    ]);
    return it(() => {
      if (!c.current) return;
      const d = L.getState().ballMeshRefs, _ = d.flatMap((b) => b ? [
        b.position.x,
        b.position.y,
        b.position.z
      ] : [
        0,
        0,
        0
      ]), h = d.map((b) => (b == null ? void 0 : b.visible) ? 1 : 0);
      c.current.uniforms.ballPositions.value = _, c.current.uniforms.ballVisibility.value = h;
    }), u.useEffect(() => {
      const d = xr.subscribe((_) => _.enabledCheatIds.has("tinyBalls"), (_) => {
        if (!c.current) return;
        const h = _ ? Ra * 0.5 : Ra;
        c.current.uniforms.shadowRadius.value = h;
      });
      return () => {
        d();
      };
    }, []), R.jsxs(R.Fragment, {
      children: [
        R.jsx("mesh", {
          name: "floor",
          geometry: r.geometry,
          scale: r.scale,
          material: f
        }),
        n && R.jsx(BS, {
          lightValuesRef: l,
          lightInfos: s
        })
      ]
    });
  }, nf = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/hotdog-DC3NVcu8.glb";
  zn.preload(nf);
  const LS = () => {
    const { nodes: r } = zn(nf), e = u.useRef(null), t = u.useRef(null), n = u.useRef(false);
    u.useEffect(() => {
      const i = L.subscribe((s) => s.ballMeshRefs, (s) => {
        e.current = s[0];
      }, {
        fireImmediately: true
      });
      return () => {
        i();
      };
    }, []), u.useEffect(() => {
      const i = xr.subscribe((s) => s.enabledCheatIds.has("ballIsHotDog"), (s) => {
        s && (he("clearPendingSwaps", {
          time: performance.now()
        }), he("gameOver", {
          time: performance.now(),
          type: "forcedExit",
          score: L.getState().score
        })), t.current && (t.current.visible = s), n.current = s;
      });
      return () => {
        i();
      };
    }, []), u.useEffect(() => {
      const i = xr.subscribe((s) => s.enabledCheatIds.has("tinyBalls"), (s) => {
        if (!t.current) return;
        const c = s ? 0.5 : 1;
        t.current.scale.set(c, c, c);
      });
      return () => {
        i();
      };
    }, []), it(() => {
      !n.current || !e.current || !t.current || (t.current.position.copy(e.current.position), t.current.position.x = 0.22987699508666992);
    });
    const o = u.useMemo(() => new _t({
      map: r.hotdogbun_Baked.material.emissiveMap
    }), [
      r
    ]);
    return R.jsx("group", {
      ref: t,
      visible: false,
      children: R.jsx("mesh", {
        geometry: r.hotdogbun_Baked.geometry,
        material: o,
        position: [
          0,
          -0.01325,
          -0.03
        ],
        rotation: [
          0,
          Math.PI * 0.5,
          0
        ],
        scale: 0.515
      })
    });
  }, DS = 2e3 / 1e6, Ma = 0.015, y2 = 56.15 * (Math.PI / 180);
  function GS({ rodColliderMesh: r, rodMesh: e, doorColliderMesh: t, doorMesh: n, worldTransform: o }) {
    const i = u.useRef(null), s = u.useMemo(() => e.position.clone(), [
      e
    ]), c = u.useRef(null), l = u.useRef(null), a = u.useRef(false), p = u.useRef(false), f = u.useMemo(() => n.name === "DecorationKickerdoor0" ? {
      topGroupPosition: [
        -0.015,
        0,
        -0.01
      ],
      bottomGroupPosition: [
        0.01335,
        0,
        875e-5
      ],
      openAngle: -y2
    } : {
      topGroupPosition: [
        0.015,
        0,
        -0.01
      ],
      bottomGroupPosition: [
        -0.01335,
        0,
        875e-5
      ],
      openAngle: y2
    }, [
      n
    ]), d = u.useRef(f.openAngle), _ = u.useRef(0), [h, b] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutElastic,
        duration: 500
      },
      onChange: () => {
        if (!l.current) return;
        const B = _.current - d.current;
        l.current.rotation.y = d.current + B * h.progress.get();
      }
    }), []), g = u.useCallback(() => {
      c.current && l.current && (c.current.setEnabled(true), l.current.rotation.y !== 0 && (d.current = l.current.rotation.y, _.current = 0, b.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutElastic,
          duration: 500
        }
      })));
    }, [
      b
    ]), y = u.useCallback(() => {
      c.current && l.current && (c.current.setEnabled(false), l.current.rotation.y !== f.openAngle && (d.current = l.current.rotation.y, _.current = f.openAngle, b.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutBounce,
          duration: 500
        }
      })));
    }, [
      b,
      f
    ]), [A, C] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: 100
      },
      onChange: () => {
        if (!i.current) return;
        const B = A.progress.get();
        if (B <= 0.5) {
          const T = Be.easeOutCubic(B / 0.5);
          i.current.position.copy(s), i.current.position.z -= T * Ma;
        } else {
          const T = Be.linear((B - 0.5) / 0.5);
          i.current.position.copy(s), i.current.position.z += -Ma + T * Ma;
        }
      },
      onRest: () => {
        a.current && (g(), he("ballSave", {
          type: "outlane"
        }));
      }
    }), []), S = u.useCallback((B) => {
      if (a.current || p.current || !B.other.rigidBody) return;
      a.current = true;
      const E = {
        x: 0,
        y: DS
      };
      B.other.rigidBody.applyImpulse(E, true), Le.getState().addSoundToQueue(Te.SlingshotHit), Le.getState().addSoundToQueue(Te.BallHit), Le.getState().addSoundToQueue(Te.BallSaved), C.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      });
    }, [
      C
    ]);
    return u.useEffect(() => L.subscribe((B) => B.multiballModeIsActive, (B) => {
      B ? g() : a.current || y(), p.current = B;
    }), [
      g,
      y
    ]), u.useEffect(() => se.on("gameOver", () => {
      y(), a.current = false;
    }), [
      y
    ]), u.useEffect(() => {
      e.material.side = Dt, n.material.side = Dt;
    }, [
      e,
      n
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsxs("group", {
          position: o.position,
          quaternion: o.quaternion,
          scale: o.scale,
          children: [
            R.jsx("mesh", {
              ref: i,
              geometry: e.geometry,
              material: e.material,
              position: e.position,
              rotation: e.rotation,
              scale: e.scale
            }),
            R.jsx("group", {
              position: n.position,
              rotation: n.rotation,
              scale: n.scale,
              children: R.jsx("group", {
                ref: l,
                position: f.topGroupPosition,
                rotation: [
                  0,
                  f.openAngle,
                  0
                ],
                children: R.jsx("group", {
                  position: f.bottomGroupPosition,
                  children: R.jsx("mesh", {
                    geometry: n.geometry,
                    material: n.material
                  })
                })
              })
            })
          ]
        }),
        R.jsx(xt, {
          mesh: r,
          worldTransform: o,
          applyWorldTranslationToVertices: true,
          sensor: true,
          type: "hull",
          onIntersectionEnter: S
        }),
        R.jsx(xt, {
          ref: c,
          mesh: t,
          worldTransform: o,
          applyWorldTranslationToVertices: true,
          enabled: false
        })
      ]
    });
  }
  const A2 = 4e3, OS = 6, HS = 0.02, kS = 12, jS = 0.12 * 1.5, US = new Ne(), NS = (r) => {
    const e = Math.sin(r * Math.PI);
    return Math.sin(r * kS * Math.PI * 2) * e * jS;
  }, zS = ({ floorMesh: r, mainBoxMesh: e, ringOfBoxesMesh: t, mainBoxLeftFlapMesh: n, mainBoxRightFlapMesh: o, doorSensorMesh: i, mainBoxColliderMesh: s, ringOfBoxesColliderMesh: c, closedBoxColliderMesh: l, worldTransform: a }) => {
    const { world: p, RAPIER: f } = Fr(), d = u.useRef(null), _ = u.useRef(null), h = u.useRef(null), b = u.useRef(null), g = u.useRef(null), y = u.useRef(null), A = u.useRef(null), C = u.useRef(null), S = u.useRef(false), B = u.useRef(true), T = u.useRef(0), E = u.useRef(0), M = u.useRef(0), x = u.useRef(false), P = u.useRef(0), D = u.useRef(false), H = u.useRef("duringPlay");
    u.useEffect(() => {
      var _a2;
      if (!p || !f) return;
      const we = f.RigidBodyDesc.kinematicPositionBased().setTranslation(a.position.x, a.position.z * -1);
      b.current = p.createRigidBody(we);
      const ve = Bi(c, a), ne = (_a2 = c.geometry.index) == null ? void 0 : _a2.array;
      if (!ne) return;
      const Ie = f.ColliderDesc.polyline(ve, ne), ie = Tt([
        Ko
      ], [
        ct
      ]);
      return Ie.setCollisionGroups(ie), g.current = p.createCollider(Ie, b.current), () => {
        Wr(p, g.current), sn(p, b.current);
      };
    }, [
      p,
      f,
      c,
      a
    ]);
    const k = () => {
      !d.current || !A.current || !C.current || (d.current.position.y = 0, d.current.rotation.z = 0, A.current.rotation.y = 0, C.current.rotation.y = 0, B.current = true, D.current = true);
    }, { miniGameGroupRef: J, initiallyVisible: W } = Wn({
      miniGameType: ot.Boxes,
      miniGameHeight: 0.15485,
      onRaiseStart: () => {
        S.current = true, k();
      },
      onLowerComplete: () => {
        S.current = false;
      }
    }), K = (we) => {
      if (!D.current) return;
      D.current = false, L.getState().setSwapIsInProgress(true);
      const ve = we.other.object;
      y.current && (he("boxesMiniGameCompleted", {
        time: performance.now()
      }), L.getState().setBallLockTarget(ve.userData.ballId, y.current, yt.Boxes), Le.getState().addSoundToQueue(Te.BallLockMagnet)), _.current && _.current.setEnabled(true);
    }, [Q, Z] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: A2
      },
      onStart: () => {
        if (!d.current || !A.current || !C.current) return;
        H.current = "duringPlay", d.current.position.y = 0, d.current.rotation.z = 0, A.current.rotation.y = 0, C.current.rotation.y = 0, B.current = false, E.current = T.current;
        const we = -60 * Math.PI / 180, ve = Math.floor(E.current / (2 * Math.PI));
        let ne = we + ve * 2 * Math.PI;
        ne -= 2 * Math.PI, M.current = ne, x.current = false;
      },
      onChange: () => {
        if (!d.current || !A.current || !C.current || !h.current || !b.current) return;
        const ve = Q.progress.get() * A2;
        if (ve < 3e3) {
          const ne = ve / 3e3, Ie = Be.easeOutSine(ne);
          T.current = E.current + (M.current - E.current) * Ie, h.current.rotation.y = T.current, b.current.setNextKinematicRotation(T.current);
        }
        if (ve < 750) {
          const ne = ve / 750, Ie = Be.easeOutBounce(ne);
          A.current.rotation.y = Ie * 121 * (Math.PI / 180), C.current.rotation.y = Ie * -124 * (Math.PI / 180);
        } else if (ve < 3e3) {
          const ne = (ve - 750) / 2250, Ie = Math.abs(Math.sin(ne * OS * Math.PI)), ie = 1 - ne ** 2;
          d.current.position.y = Ie * ie * HS, d.current.rotation.z = NS(ne);
        } else if (ve < 4e3) {
          _.current && _.current.isEnabled() && _.current.setEnabled(false), d.current.position.y = 0, d.current.rotation.z = 0, T.current = M.current, h.current.rotation.y = T.current, b.current.setNextKinematicRotation(T.current);
          const ne = (ve - 3e3) / 1e3, Ie = Be.easeOutElastic(ne);
          if (A.current.rotation.y = (1 - Ie) * 121 * (Math.PI / 180), C.current.rotation.y = (1 - Ie) * -124 * (Math.PI / 180), ve > 3050 && !x.current) {
            x.current = true;
            const ie = US;
            d.current.getWorldQuaternion(ie), L.getState().setBoxesMiniGameFiringDirection(new F(0, 0, 1).applyQuaternion(ie).normalize()), L.getState().setBallLockTarget(P.current, null, yt.Boxes);
          }
        }
      },
      onRest: () => {
        B.current = true, H.current !== "forcedExit" && he("swapMiniGame", {
          time: performance.now()
        }), H.current = "duringPlay";
      }
    }), []);
    u.useEffect(() => se.on("ballReachedLockTarget", ({ ballId: we, type: ve }) => {
      ve === yt.Boxes && (Le.getState().addSoundToQueue(Te.BoxRelease), P.current = we, Z.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }));
    }), [
      Z
    ]), u.useEffect(() => se.on("gameOver", (we) => {
      H.current = we.type ?? "duringPlay", Z.stop(), k();
    }), [
      Z
    ]), it((we, ve) => {
      !S.current || !b.current || !h.current || !B.current || (T.current -= ve, b.current.setNextKinematicRotation(T.current), h.current.rotation.y = T.current);
    });
    const j = u.useMemo(() => new _t({
      map: r.material.emissiveMap
    }), [
      r
    ]), U = u.useMemo(() => new _t({
      map: e.material.emissiveMap
    }), [
      e
    ]), N = u.useMemo(() => new _t({
      map: n.material.emissiveMap
    }), [
      n
    ]), oe = u.useMemo(() => new _t({
      map: o.material.emissiveMap
    }), [
      o
    ]), ue = u.useMemo(() => new _t({
      map: t.material.emissiveMap
    }), [
      t
    ]);
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: a.position,
          quaternion: a.quaternion,
          scale: a.scale,
          children: R.jsxs("group", {
            ref: J,
            visible: W,
            children: [
              R.jsx("mesh", {
                geometry: r.geometry,
                material: j,
                position: r.position,
                rotation: r.rotation,
                scale: r.scale
              }),
              R.jsx("group", {
                position: e.position,
                quaternion: e.quaternion,
                children: R.jsx("group", {
                  position: [
                    0,
                    0.0163,
                    0
                  ],
                  children: R.jsxs("group", {
                    ref: d,
                    position: [
                      0,
                      0,
                      0
                    ],
                    rotation: [
                      0,
                      0,
                      0
                    ],
                    children: [
                      R.jsxs("group", {
                        position: [
                          0,
                          -0.0163,
                          0
                        ],
                        children: [
                          R.jsx("mesh", {
                            geometry: e.geometry,
                            material: U,
                            scale: e.scale
                          }),
                          R.jsx("group", {
                            quaternion: e.quaternion.clone().invert(),
                            children: R.jsxs("group", {
                              position: e.position.clone().negate(),
                              children: [
                                R.jsx("group", {
                                  position: n.position,
                                  rotation: n.rotation,
                                  scale: n.scale,
                                  children: R.jsx("mesh", {
                                    ref: A,
                                    geometry: n.geometry,
                                    material: N
                                  })
                                }),
                                R.jsx("group", {
                                  position: o.position,
                                  rotation: o.rotation,
                                  scale: o.scale,
                                  children: R.jsx("mesh", {
                                    ref: C,
                                    geometry: o.geometry,
                                    material: oe
                                  })
                                })
                              ]
                            })
                          })
                        ]
                      }),
                      R.jsx("group", {
                        position: [
                          4e-4,
                          -0.0163 + or - 125e-5,
                          5e-5
                        ],
                        children: R.jsx("group", {
                          ref: y
                        })
                      })
                    ]
                  })
                })
              }),
              R.jsx("group", {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale,
                children: R.jsx("mesh", {
                  ref: h,
                  geometry: t.geometry,
                  material: ue
                })
              })
            ]
          })
        }),
        R.jsx(xt, {
          mesh: i,
          worldTransform: a,
          sensor: true,
          type: "hull",
          applyWorldTranslationToVertices: true,
          onIntersectionEnter: K,
          collisionGroup: Ko
        }),
        R.jsx(xt, {
          mesh: s,
          worldTransform: a,
          applyWorldTranslationToVertices: true,
          collisionGroup: Ko
        }),
        R.jsx(xt, {
          ref: _,
          mesh: l,
          worldTransform: a,
          applyWorldTranslationToVertices: true,
          collisionGroup: Ko,
          enabled: false
        })
      ]
    });
  };
  var WS = `vec2 vUv = vMapUv;

vec2 adjustedUv = vUv;

float sizeScalingFactor = 1.0 + sizeIncreaseInPercent;
float sizeHorizontalOffset = digitWidth * sizeIncreaseInPercent * 0.5;
adjustedUv.x = (vUv.x + sizeHorizontalOffset) / (digitWidth * sizeScalingFactor);

float newDigitHeight = originalDigitHeight * (1.0 / sizeScalingFactor);
float sizeVerticalOffset = (newDigitHeight - originalDigitHeight) * 0.5;
adjustedUv.y = ((adjustedUv.y * newDigitHeight) - sizeVerticalOffset) + digitVerticalOffset;

adjustedUv.x = clamp(adjustedUv.x, 0.0, 1.0);
adjustedUv.y = clamp(adjustedUv.y, digitVerticalOffset, digitVerticalOffset + originalDigitHeight);

vec4 sampledDiffuseColor = texture2D(map, adjustedUv);
sampledDiffuseColor.rgb *= digitColor * 7.5;
diffuseColor *= sampledDiffuseColor;`, JS = `uniform float digitVerticalOffset;
uniform vec3 digitColor;

const float digitWidth = 1.0;
const float originalDigitHeight = 1.0 / 11.0;
const float sizeIncreaseInPercent = 0.1;`;
  const VS = 0.1, KS = 20, QS = 0.99, XS = 5, Ea = 5 / 11, qS = 0.5, uc = 0.0105, YS = uc, ZS = 32, $S = 64, eR = ZS / $S, v2 = YS / eR, tR = new F(), rR = new F(), nR = new Ne();
  At.preload(rd);
  const oR = ({ floorMesh: r, cashRegisterMesh: e, cashRegisterDrawerMesh: t, cashRegisterColliderMesh: n, screenTarget: o, worldTransform: i }) => {
    const s = Ue((x) => x.clock), c = u.useRef(0), l = u.useRef(null), a = u.useRef(null), p = u.useRef(null), f = u.useRef(false), d = u.useRef(0), _ = u.useRef(0), h = u.useRef(null), b = u.useRef(null), g = u.useRef(null), { miniGameGroupRef: y, initiallyVisible: A } = Wn({
      miniGameType: ot.CashRegister,
      miniGameHeight: 0.19418,
      onRaiseStart: () => {
        d.current = 0, a.current && (a.current.rotation.x = 0), f.current = true;
      },
      onLowerStart: () => {
        b.current = null, L.getState().setConfettiStatus({
          turnedOn: false,
          moneyModeIsEnabled: true
        });
      },
      onLowerComplete: () => {
        _.current = 0, h.current && (h.current.uniforms.digitVerticalOffset.value = Ea), g.current = null, p.current && (p.current.position.z = 0), f.current = false;
      }
    }), C = u.useCallback((x) => {
      const P = x.other.rigidBody, D = x.other.object;
      if (!P || D === void 0 || !l.current) return;
      const H = s.elapsedTime;
      if (H - c.current < VS) return;
      c.current = H;
      const k = tR;
      D.getWorldPosition(k);
      const J = P.linvel(), W = Math.sqrt(J.x * J.x + J.y * J.y), K = rR;
      l.current.getWorldPosition(K), k.y = K.y;
      const Q = K.sub(k).normalize(), Z = nR;
      l.current.getWorldQuaternion(Z);
      const j = Q.applyQuaternion(Z.invert());
      d.current += j.z * W * KS, d.current = Math.max(Math.min(d.current, 15), -15), _.current++, he("cashRegisterHit", {
        time: performance.now()
      }), Le.getState().addSoundToQueue(Te.CashRegisterHit), Le.getState().addSoundToQueue(Te.BallHit), h.current && (_.current < 5 ? h.current.uniforms.digitVerticalOffset.value = (_.current + 5) / 11 : h.current.uniforms.digitVerticalOffset.value = 0);
      const U = L.getState();
      U.setConfettiStatus({
        turnedOn: true,
        moneyModeIsEnabled: true
      }), b.current = H, _.current >= XS && (U.setSwapIsInProgress(true), g.current = H, he("cashRegisterMiniGameCompleted", {
        time: performance.now()
      }), he("swapMiniGame", {
        time: performance.now()
      }));
    }, [
      s
    ]);
    it((x, P) => {
      if (!f.current || !a.current) return;
      const D = Math.min(P, 0.05), H = D * 60, k = -5 * a.current.rotation.x;
      d.current += k * H, d.current *= QS ** H, a.current.rotation.x += d.current * D;
      const J = s.elapsedTime;
      if (b.current && J - b.current >= qS && (L.getState().setConfettiStatus({
        turnedOn: false,
        moneyModeIsEnabled: true
      }), b.current = null), g.current && p.current) {
        const W = J - g.current, K = Math.min(W / 0.5, 1), Q = Be.easeOutCubic(K);
        p.current.position.z = Q * 5e-3, Q >= 1 && (g.current = null);
      }
    }), u.useEffect(() => se.on("gameOver", () => {
      L.getState().currentMiniGame === ot.CashRegister && (h.current && (h.current.uniforms.digitVerticalOffset.value = Ea), p.current && (p.current.position.z = 0), _.current = 0);
    }), []);
    const S = At(rd);
    S.wrapS = Ir, S.wrapT = Ir, S.minFilter = Wt, S.magFilter = Wt;
    const B = u.useMemo(() => {
      const x = new go({
        map: S,
        transparent: true
      });
      return x.onBeforeCompile = (P) => {
        h.current = P, P.uniforms.digitVerticalOffset = {
          value: Ea
        }, P.uniforms.digitColor = {
          value: new Ye("#C8FFC8").convertSRGBToLinear()
        }, P.fragmentShader = P.fragmentShader.replace("#include <common>", `
        #include <common>
        ${JS}`), P.fragmentShader = P.fragmentShader.replace("#include <map_fragment>", `
        ${WS}
        `);
      }, x;
    }, [
      S
    ]), T = u.useMemo(() => new _t({
      map: r.material.emissiveMap
    }), [
      r
    ]), E = u.useMemo(() => new _t({
      map: e.material.emissiveMap
    }), [
      e
    ]), M = u.useMemo(() => new _t({
      map: t.material.emissiveMap
    }), [
      t
    ]);
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: i.position,
          quaternion: i.quaternion,
          scale: i.scale,
          children: R.jsxs("group", {
            ref: y,
            visible: A,
            children: [
              R.jsx("mesh", {
                geometry: r.geometry,
                material: T,
                position: r.position,
                rotation: r.rotation,
                scale: r.scale
              }),
              R.jsx("group", {
                ref: l,
                position: e.position,
                rotation: e.rotation,
                scale: e.scale,
                children: R.jsxs("group", {
                  ref: a,
                  children: [
                    R.jsx("mesh", {
                      geometry: e.geometry,
                      material: E
                    }),
                    R.jsx("group", {
                      position: t.position,
                      rotation: t.rotation,
                      scale: t.scale,
                      children: R.jsx("mesh", {
                        ref: p,
                        geometry: t.geometry,
                        material: M
                      })
                    }),
                    R.jsxs("group", {
                      position: o.position,
                      quaternion: o.quaternion,
                      scale: o.scale,
                      children: [
                        R.jsx("group", {
                          position: [
                            0,
                            5e-4,
                            0
                          ],
                          children: R.jsxs("mesh", {
                            rotation: [
                              -Math.PI / 2,
                              0,
                              0
                            ],
                            children: [
                              R.jsx("planeGeometry", {
                                args: [
                                  uc * 1.7,
                                  v2
                                ]
                              }),
                              R.jsx("meshBasicMaterial", {
                                color: "black"
                              })
                            ]
                          })
                        }),
                        R.jsx("group", {
                          position: [
                            0,
                            1e-3,
                            0
                          ],
                          children: R.jsx("mesh", {
                            rotation: [
                              -Math.PI / 2,
                              0,
                              0
                            ],
                            material: B,
                            children: R.jsx("planeGeometry", {
                              args: [
                                uc,
                                v2
                              ]
                            })
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        }),
        R.jsx(xt, {
          mesh: n,
          worldTransform: i,
          collisionGroup: $d,
          applyWorldTranslationToVertices: true,
          onCollisionEnter: C
        })
      ]
    });
  }, iR = new Ne(), sR = ({ towerGroup: r, towerMeshes: e, towerColliderMesh: t, ballTarget0: n, ballTarget1: o, ballTarget2: i, worldTransform: s }) => {
    const { world: c, RAPIER: l } = Fr(), a = u.useRef(null), p = u.useRef(null), f = u.useRef(null), d = u.useRef(Array(3).fill(null)), _ = u.useRef(false), h = u.useRef(null), b = u.useRef([
      false,
      false,
      false
    ]), g = u.useRef(false), y = u.useRef([]);
    u.useEffect(() => {
      var _a2;
      if (!c || !l) return;
      const M = l.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.z * -1);
      a.current = c.createRigidBody(M);
      const x = Bi(t, s), P = (_a2 = t.geometry.index) == null ? void 0 : _a2.array;
      if (!P) return;
      const D = l.ColliderDesc.polyline(x, P), H = Tt([
        e3
      ], [
        ct
      ]);
      return D.setCollisionGroups(H), p.current = c.createCollider(D, a.current), () => {
        Wr(c, p.current), sn(c, a.current);
      };
    }, [
      c,
      l,
      t,
      s
    ]);
    const A = u.useCallback(() => {
      _.current = false, he("crowdCheer", {
        startCheering: false
      });
    }, []), C = u.useCallback(() => {
      const M = L.getState(), x = M.ballsInPlay.filter((k) => k).length, P = M.ballLockTargets.filter((k) => k.target !== null && k.type === yt.Retail).length, D = x - P + 3;
      M.setNumBallsInPlayDuringMultiball(D);
      const H = [];
      M.ballsInPlay.forEach((k, J) => {
        !k && H.length < 3 && H.push(J);
      }), y.current = H, H.forEach((k, J) => {
        const W = d.current[J];
        W && (M.setBallLockTarget(k, W, yt.FirstSale), M.setBallInPlay(k, true));
      }), h.current && a.current && f.current && (h.current.position.y = 0, a.current.setNextKinematicRotation(0), f.current.rotation.y = 0), g.current = false, _.current = false;
    }, []), S = u.useCallback(() => {
      _.current = true, he("crowdCheer", {
        startCheering: true
      }), Le.getState().addSoundToQueue(Te.Multiball);
    }, []), { miniGameGroupRef: B } = Wn({
      miniGameType: ot.FirstSale,
      miniGameHeight: 0.3,
      onLowerStart: A,
      onRaiseStart: C,
      onRaiseComplete: S
    }), [T, E] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: 5500
      },
      onStart: () => {
        !h.current || !a.current || !f.current || (b.current = [
          false,
          false,
          false
        ], h.current.position.y = 0, a.current.setNextKinematicRotation(0), f.current.rotation.y = 0, g.current = false);
      },
      onChange: () => {
        if (!h.current || !f.current) return;
        const M = f.current, P = T.progress.get() * 5500;
        if (!(P < 500)) {
          if (P < 1500) {
            const D = (P - 500) / 1e3, H = Be.easeOutElastic(D), k = Math.PI * 0.25 * H;
            a.current.setNextKinematicRotation(k), M.rotation.y = k;
          } else if (P < 2500) {
            const D = (P - 1500) / 1e3, H = Be.easeOutElastic(D), k = Math.PI * 0.25 - Math.PI * 0.5 * H;
            a.current.setNextKinematicRotation(k), M.rotation.y = k;
          } else if (P < 4500) {
            g.current || (L.getState().setConfettiStatus({
              turnedOn: true,
              moneyModeIsEnabled: false
            }), g.current = true);
            const D = (P - 2500) / 2e3, H = Be.easeInOutCubic(D), k = -Math.PI * 0.25 + Math.PI * 0.5 * H;
            a.current.setNextKinematicRotation(k), M.rotation.y = k;
            const W = -Be.easeInOutCubic(D) * or * 14;
            [
              2,
              6,
              10
            ].forEach((Q, Z) => {
              if (!b.current[Z] && W <= -or * Q) {
                Le.getState().addSoundToQueue(Te.BallFallingOffRail), b.current[Z] = true;
                const j = y.current[Z];
                if (j !== void 0) {
                  const U = iR;
                  M.getWorldQuaternion(U), L.getState().setFirstSaleTowerFiringDirection(new F(0, 0, 1).applyQuaternion(U).normalize()), L.getState().setBallLockTarget(j, null, yt.FirstSale);
                }
              }
            }), h.current.position.y = W;
          } else if (P <= 5500) {
            const D = (P - 4500) / 1e3, H = Be.easeOutElastic(D), k = Math.PI * 0.25 - Math.PI * 0.25 * H;
            a.current.setNextKinematicRotation(k), M.rotation.y = k;
          }
        }
      }
    }), []);
    return u.useEffect(() => se.on("miniGameFenceIsDoneLowering", () => {
      _.current && L.getState().firstSaleMultiballIsActive && (he("firstSaleMultiball", {
        time: performance.now()
      }), E.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }));
    }), [
      E
    ]), u.useEffect(() => se.on("multiballEnded", ({ firstSaleMultiballWasActive: M }) => {
      if (!M) return;
      const x = L.getState();
      x.setConfettiStatus({
        turnedOn: false,
        moneyModeIsEnabled: false
      }), x.setFirstSaleMultiballIsActive(false), he("firstSaleCompleted", {
        time: performance.now()
      }), x.resetMultiballMode();
    }), []), u.useEffect(() => se.on("gameOver", () => {
      E.stop(), _.current = false, b.current = [
        false,
        false,
        false
      ], g.current = false, y.current = [];
      const M = L.getState();
      M.firstSaleMultiballIsActive && (M.setFirstSaleMultiballIsActive(false), he("firstSaleCompleted", {
        time: performance.now()
      }), M.setConfettiStatus({
        turnedOn: false,
        moneyModeIsEnabled: false
      }));
    }), [
      E
    ]), R.jsx(R.Fragment, {
      children: R.jsx("group", {
        position: s.position,
        quaternion: s.quaternion,
        scale: s.scale,
        children: R.jsx("group", {
          ref: B,
          visible: false,
          children: R.jsxs("group", {
            ref: f,
            children: [
              R.jsx("group", {
                position: r.position,
                quaternion: r.quaternion,
                scale: r.scale,
                children: e.map((M) => R.jsx("mesh", {
                  geometry: M.geometry,
                  material: M.material,
                  position: M.position,
                  rotation: M.rotation,
                  scale: M.scale
                }, M.uuid))
              }),
              R.jsxs("group", {
                ref: h,
                children: [
                  R.jsx("group", {
                    ref: (M) => {
                      d.current[0] = M;
                    },
                    position: [
                      0,
                      or * 3,
                      0
                    ],
                    children: R.jsx("axesHelper", {
                      args: [
                        or * 2
                      ],
                      visible: false
                    })
                  }),
                  R.jsx("group", {
                    ref: (M) => {
                      d.current[1] = M;
                    },
                    position: [
                      0,
                      or * 7,
                      0
                    ],
                    children: R.jsx("axesHelper", {
                      args: [
                        or * 2
                      ],
                      visible: false
                    })
                  }),
                  R.jsx("group", {
                    ref: (M) => {
                      d.current[2] = M;
                    },
                    position: [
                      0,
                      or * 11,
                      0
                    ],
                    children: R.jsx("axesHelper", {
                      args: [
                        or * 2
                      ],
                      visible: false
                    })
                  })
                ]
              })
            ]
          })
        })
      })
    });
  }, C2 = 2.5, S2 = 3, k0 = 0.75, l0 = k0 * 0.5, u0 = k0 / 5, aR = [
    0,
    u0,
    u0 * 2,
    u0 * 3,
    u0 * 4
  ], cR = [
    3,
    2,
    4,
    1,
    0
  ], lR = 0.1, uR = ({ floorMesh: r, targetMeshes: e, targetColliders: t, worldTransform: n }) => {
    const o = Ue((B) => B.clock), i = u.useRef(Array(e.length).fill(null)), s = u.useRef(Array(t.length).fill(null)), c = 0.82, l = 0.5, a = u.useRef(Array(e.length).fill(null)), p = u.useRef(Array(e.length).fill(0)), f = u.useRef(Array(e.length).fill(0)), d = u.useRef(0), _ = u.useRef(0), h = u.useRef(0), b = u.useMemo(() => {
      const B = [];
      for (const T of e) if (T.material instanceof go) {
        const E = T.material.clone();
        E.emissiveIntensity = 7.5, B.push(E);
      }
      return B;
    }, [
      e
    ]), g = u.useRef(false), y = () => {
      d.current = 0, _.current = 0;
      for (const B of i.current) B && (B.position.y = 0);
      for (const B of s.current) B && B.setEnabled(true);
      a.current.fill(null), p.current.fill(0), g.current = false;
    }, A = u.useCallback(() => {
      d.current = 0, _.current = 0;
      const B = o.elapsedTime;
      for (let T = 0; T < i.current.length; T++) {
        const E = i.current[T], M = s.current[T];
        E && E.position.y < 0 && (f.current[T] = E.position.y, a.current[T] = B, p.current[T] = 2), M && M.setEnabled(true);
      }
    }, [
      o
    ]), { miniGameGroupRef: C, initiallyVisible: S } = Wn({
      miniGameType: ot.FiveStar,
      miniGameHeight: 4.11,
      onRaiseStart: () => {
        g.current = true;
      },
      onLowerComplete: y
    });
    return it(() => {
      if (!g.current) return;
      const B = o.elapsedTime;
      for (let T = 0; T < b.length; T++) {
        const E = cR[T], M = b[E], x = (B + aR[T]) % k0;
        if (x < l0) {
          const P = x / l0, D = C2 + S2 * Be.easeInOutSine(P);
          M.emissiveIntensity = D;
        } else if (x < k0) {
          const P = (x - l0) / l0, D = C2 + S2 * (1 - Be.easeInOutSine(P));
          M.emissiveIntensity = D;
        }
      }
      for (let T = 0; T < a.current.length; T++) {
        const E = a.current[T], M = p.current[T];
        if (E === null || M === 0) continue;
        const x = B - E, P = Math.min(x / l, 1), D = Be.easeOutBounce(P), H = i.current[T];
        if (H) if (M === 1) H.position.y = -D * c;
        else {
          const k = f.current[T];
          H.position.y = k * (1 - D);
        }
        if (P >= 1) {
          const k = s.current[T];
          M === 1 && (k && k.setEnabled(false), _.current++, _.current === e.length && (he("fiveStarMiniGameCompleted", {
            time: performance.now()
          }), he("swapMiniGame", {
            time: performance.now()
          }))), a.current[T] = null, p.current[T] = 0;
        }
      }
    }), u.useEffect(() => se.on("gameOver", () => {
      L.getState().currentMiniGame === ot.FiveStar && A();
    }), [
      A
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: n.position,
          quaternion: n.quaternion,
          scale: n.scale,
          children: R.jsxs("group", {
            ref: C,
            visible: S,
            children: [
              R.jsx("mesh", {
                geometry: r.geometry,
                material: r.material,
                position: r.position,
                rotation: r.rotation,
                scale: r.scale
              }),
              e.map((B, T) => R.jsx("group", {
                ref: (E) => {
                  i.current[T] = E;
                },
                children: R.jsx("mesh", {
                  geometry: B.geometry,
                  material: b[T],
                  position: B.position,
                  rotation: B.rotation,
                  scale: B.scale
                })
              }, B.uuid))
            ]
          })
        }),
        t.map((B, T) => R.jsx(xt, {
          ref: (E) => {
            s.current[T] = E;
          },
          mesh: B,
          worldTransform: n,
          collisionGroup: Zd,
          applyWorldTranslationToVertices: true,
          onCollisionEnter: () => {
            const E = o.elapsedTime;
            a.current[T] === null && E - h.current > lR && (Le.getState().addSoundToQueue(Te.Ding), Le.getState().addSoundToQueue(Te.BallHit), Le.getState().addSoundToQueue(Te.FiveStar), d.current++, d.current === e.length && L.getState().setSwapIsInProgress(true), h.current = E, a.current[T] = E, p.current[T] = 1, he("fiveStarTargetHit", {
              time: performance.now()
            }));
          }
        }, B.uuid))
      ]
    });
  }, dR = new F(), fR = ({ trophyGroup: r, shoppingBagMesh: e, shopifyLogoMesh: t, colliderMesh: n, backColliderMesh: o, otherMeshes: i, worldTransform: s }) => {
    const { world: c, RAPIER: l, subscribeToColliderEvents: a } = Fr(), p = u.useRef(null), f = u.useRef(null), d = u.useRef(null), _ = u.useRef(1), h = u.useRef(false), { miniGameGroupRef: b } = Wn({
      miniGameType: ot.Milestone,
      miniGameHeight: 4.917,
      onRaiseComplete: () => {
        L.getState().setConfettiStatus({
          turnedOn: true,
          moneyModeIsEnabled: false
        }), he("crowdCheer", {
          startCheering: true
        });
      },
      onLowerStart: () => {
        L.getState().setConfettiStatus({
          turnedOn: false,
          moneyModeIsEnabled: false
        }), he("crowdCheer", {
          startCheering: false
        });
      }
    }), [g, y] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutElastic,
        duration: 2e3
      },
      onStart: () => {
      },
      onChange: () => {
        const B = g.progress.get() * Math.PI * 2 * _.current;
        p.current && p.current.setNextKinematicRotation(B), d.current && (d.current.rotation.y = B);
      },
      onRest: () => {
        h.current = false;
      }
    }), []), A = u.useMemo(() => new et().compose(s.position, s.quaternion, new F(1, 1, 1)).invert(), [
      s
    ]), C = u.useCallback((S) => {
      if (h.current) return;
      const B = S.other.rigidBody;
      if (!B) return;
      const T = B.translation(), E = dR.set(T.x, 0, -T.y).applyMatrix4(A);
      _.current = E.x > 0 ? -1 : 1, h.current = true, y.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }), he("milestoneTrophyHit", {
        time: performance.now()
      }), Le.getState().addSoundToQueue(Te.BallHit), Le.getState().addSoundToQueue(Te.Swoosh);
    }, [
      y,
      A
    ]);
    return u.useEffect(() => {
      if (!c || !l) return;
      const S = l.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.z * -1);
      p.current = c.createRigidBody(S);
      const B = ls(n, s), T = l.ColliderDesc.convexHull(B);
      if (!T) return;
      const E = Tt([
        Za
      ], [
        ct
      ]);
      T.setCollisionGroups(E), T.setActiveEvents(l.ActiveEvents.COLLISION_EVENTS), f.current = c.createCollider(T, p.current);
      const M = a(f.current.handle, {
        onCollisionEnter: C
      });
      return () => {
        M(), Wr(c, f.current), sn(c, p.current);
      };
    }, [
      c,
      l,
      n,
      s,
      C,
      a
    ]), u.useEffect(() => se.on("milestone", (S) => {
      S.type === "10k" ? (e.material.color = new Ye("#ffffff").multiplyScalar(6), t.material.color = new Ye("#ffffff").multiplyScalar(4)) : S.type === "100k" ? (e.material.color = new Ye("#efefff").multiplyScalar(5), t.material.color = new Ye("#eeeeee").multiplyScalar(4)) : S.type === "1M" && (e.material.color = new Ye("#fbefcc").multiplyScalar(6), t.material.color = new Ye("#efefcc").multiplyScalar(4));
    }), [
      e,
      t
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: s.position,
          quaternion: s.quaternion,
          scale: s.scale,
          children: R.jsxs("group", {
            ref: b,
            visible: false,
            children: [
              R.jsx("group", {
                ref: d,
                children: R.jsxs("group", {
                  position: r.position,
                  quaternion: r.quaternion,
                  scale: r.scale,
                  children: [
                    R.jsx("mesh", {
                      geometry: e.geometry,
                      material: e.material,
                      position: e.position,
                      rotation: e.rotation,
                      scale: e.scale
                    }),
                    R.jsx("mesh", {
                      geometry: t.geometry,
                      material: t.material,
                      position: t.position,
                      rotation: t.rotation,
                      scale: t.scale
                    })
                  ]
                })
              }),
              i.map((S) => R.jsx("mesh", {
                geometry: S.geometry,
                material: S.material,
                position: S.position,
                rotation: S.rotation,
                scale: S.scale
              }, S.uuid))
            ]
          })
        }),
        R.jsx(xt, {
          mesh: o,
          worldTransform: s,
          collisionGroup: Za,
          applyWorldTranslationToVertices: true
        })
      ]
    });
  }, d0 = 0.022 - 2e-3, pR = 0.09, _R = 1e3, hR = 1e4, mR = ({ colliderMesh: r, fenceMesh: e, worldTransform: t, worldTransformOfMiniGameArea: n }) => {
    const o = u.useRef(null), i = u.useRef(null), s = u.useRef(false), c = u.useRef(false), l = u.useRef(null), a = u.useRef(L.getState().miniGameSequence[0]), p = u.useRef(null), f = u.useRef("10k"), [d, _] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeInOutCubic,
        duration: 250
      },
      onChange: () => {
        if (!o.current) return;
        const y = d.progress.get();
        s.current ? o.current.position.y = -d0 + y * d0 : o.current.position.y = 0 - y * d0;
      },
      onRest: () => {
        if (!s.current && i.current) {
          c.current = true;
          const y = L.getState();
          y.setSwapIsInProgress(false), y.milestoneSwapPending ? (y.setMilestoneSwapPending(false), he("swapMiniGame", {
            time: performance.now(),
            milestone: true,
            milestoneType: f.current
          })) : y.firstSaleSwapPending && (y.setFirstSaleSwapPending(false), he("swapMiniGame", {
            time: performance.now(),
            firstSale: true
          })), he("miniGameFenceIsDoneLowering", {
            time: performance.now()
          });
        }
      }
    }), []);
    it(() => {
      c.current && i.current && (i.current.setEnabled(false), c.current = false);
    }), u.useEffect(() => se.on("miniGameFence", (y) => {
      y.raise ? (s.current = true, c.current = false, i.current && i.current.setEnabled(true), _.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      })) : (s.current = false, _.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }));
    }), [
      _
    ]);
    const h = u.useCallback(() => {
      const y = L.getState(), A = y.miniGameSequence, C = A.indexOf(y.currentMiniGame);
      if (C === -1) return A[0];
      const S = (C + 1) % A.length;
      return A[S];
    }, []), b = u.useCallback((y, A) => {
      if (l.current !== null && (clearTimeout(l.current), l.current = null), J3(n.position, pR)) {
        const C = y ?? h();
        L.getState().setCurrentMiniGame(C), A == null ? void 0 : A();
      } else l.current = setTimeout(() => b(y, A), _R);
    }, [
      h,
      n
    ]);
    u.useEffect(() => se.on("swapMiniGame", (y) => {
      if (y.milestone) {
        const A = L.getState(), C = A.currentMiniGame;
        if (C === ot.Milestone || A.milestoneSwapPending || C === ot.FirstSale || A.firstSaleSwapPending || (f.current = y.milestoneType ?? "10k", a.current = C, A.setPreviousMiniGame(C), A.setMilestoneSwapPending(true), A.swapIsInProgress)) return;
        b(ot.Milestone, () => {
          A.setMilestoneSwapPending(false), he("milestone", {
            type: f.current
          }), p.current = setTimeout(() => {
            p.current = null, he("milestone", {
              type: "none"
            }), b(a.current);
          }, hR);
        });
      } else if (y.firstSale) {
        const A = L.getState(), C = A.currentMiniGame;
        if (C === ot.FirstSale || A.firstSaleSwapPending || C === ot.Milestone || A.milestoneSwapPending || Ft.getState().menuMode !== tt.Pinball || !A.plungeDoorClosed || (a.current = C, A.setPreviousMiniGame(C), A.setMultiballModeIsActive(true), A.setFirstSaleMultiballIsActive(true), A.setFirstSaleSwapPending(true), A.swapIsInProgress)) return;
        b(ot.FirstSale, () => {
          A.setFirstSaleSwapPending(false);
        });
      } else p.current !== null && (clearTimeout(p.current), p.current = null, he("milestone", {
        type: "none"
      })), b();
    }), [
      b
    ]), u.useEffect(() => se.on("firstSaleCompleted", () => {
      b(a.current);
    }), [
      b
    ]), u.useEffect(() => se.on("clearPendingSwaps", () => {
      const y = L.getState();
      y.firstSaleSwapPending && y.setFirstSaleSwapPending(false);
    }), []), rl("Mini Game Manager", {
      "Swap Mini Game": Zt(() => {
        he("swapMiniGame", {
          time: performance.now()
        });
      }),
      "10k Milestone": Zt(() => {
        he("swapMiniGame", {
          time: performance.now(),
          milestone: true,
          milestoneType: "10k"
        });
      }),
      "100k Milestone": Zt(() => {
        he("swapMiniGame", {
          time: performance.now(),
          milestone: true,
          milestoneType: "100k"
        });
      }),
      "1M Milestone": Zt(() => {
        he("swapMiniGame", {
          time: performance.now(),
          milestone: true,
          milestoneType: "1M"
        });
      }),
      "First Sale Event": Zt(() => {
        he("swapMiniGame", {
          time: performance.now(),
          firstSale: true
        });
      }),
      "Simulate Merchant First Sale": Zt(() => {
        he("merchantFirstSale", {
          time: performance.now(),
          customerLat: 0,
          customerLon: 0,
          storeLat: 0,
          storeLon: 0
        });
      }),
      "Simulate Merchant 10k Milestone": Zt(() => {
        he("merchantMilestone", {
          time: performance.now(),
          type: "10k",
          customerLat: 0,
          customerLon: 0,
          storeLat: 0,
          storeLon: 0
        });
      }),
      "Simulate Merchant 100k Milestone": Zt(() => {
        he("merchantMilestone", {
          time: performance.now(),
          type: "100k",
          customerLat: 0,
          customerLon: 0,
          storeLat: 0,
          storeLon: 0
        });
      }),
      "Simulate Merchant 1M Milestone": Zt(() => {
        he("merchantMilestone", {
          time: performance.now(),
          type: "1M",
          customerLat: 0,
          customerLon: 0,
          storeLat: 0,
          storeLon: 0
        });
      })
    }, {
      order: sp
    });
    const g = u.useRef(0);
    return u.useEffect(() => se.on("merchantFirstSale", () => {
      if (g.current === 4) {
        const y = L.getState(), A = y.currentMiniGame;
        if (A === ot.FirstSale || y.firstSaleSwapPending || A === ot.Milestone || y.milestoneSwapPending || Ft.getState().menuMode !== tt.Pinball || !y.plungeDoorClosed || Ft.getState().startInGlobeMode) return;
        he("firstSaleReceivedByPinballMachine", {
          numFirstSaleEventsReceived: 5
        }), he("swapMiniGame", {
          time: performance.now(),
          firstSale: true
        }), g.current = 0;
      } else {
        const y = L.getState(), A = y.currentMiniGame;
        if (A === ot.FirstSale || y.firstSaleSwapPending || A === ot.Milestone || y.milestoneSwapPending || Ft.getState().menuMode !== tt.Pinball || Ft.getState().startInGlobeMode) return;
        g.current++, he("firstSaleReceivedByPinballMachine", {
          numFirstSaleEventsReceived: g.current
        });
      }
    }), []), u.useEffect(() => se.on("merchantMilestone", (y) => {
      const A = L.getState(), C = A.currentMiniGame;
      C === ot.Milestone || A.milestoneSwapPending || C === ot.FirstSale || A.firstSaleSwapPending || Ft.getState().startInGlobeMode || he("swapMiniGame", {
        time: performance.now(),
        milestone: true,
        milestoneType: y.type
      });
    }), []), u.useEffect(() => se.on("gameOver", (y) => {
      y.type === "forcedExit" && (g.current = 0);
    }), []), u.useEffect(() => () => {
      l.current !== null && clearTimeout(l.current), p.current !== null && clearTimeout(p.current);
    }, []), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: t.position,
          quaternion: t.quaternion,
          scale: t.scale,
          children: R.jsx("group", {
            ref: o,
            position: [
              0,
              -d0,
              0
            ],
            children: R.jsx("mesh", {
              geometry: e.geometry,
              material: e.material,
              position: e.position,
              rotation: e.rotation,
              scale: e.scale
            })
          })
        }),
        R.jsx(xt, {
          ref: i,
          mesh: r,
          worldTransform: t,
          enabled: false,
          onCollisionEnter: () => {
            Le.getState().addSoundToQueue(Te.BallHit);
          }
        })
      ]
    });
  }, R2 = 1e3, gR = 1e3, M2 = 6e3, zo = 0.6, Wo = 0.75, wR = 5, Ba = 1.3, Ia = 2.9, bR = new Ne(), yR = ({ buildingMeshesGroup: r, buildingColliderMesh: e, doorSensorMesh: t, ballTarget0: n, ballTarget1: o, ballTarget2: i, worldTransform: s }) => {
    const { miniGameGroupRef: c, initiallyVisible: l } = Wn({
      miniGameType: ot.RetailStores,
      miniGameHeight: 0.20735
    }), { world: a, RAPIER: p } = Fr(), f = u.useRef(null), d = u.useRef(null), _ = u.useRef(0), h = u.useRef(0), b = u.useRef(0), g = u.useRef(false), y = u.useRef(Array(3).fill(null)), A = u.useRef(0), C = u.useRef([]), S = u.useRef(false), B = u.useRef(false), T = u.useRef([
      false,
      false,
      false
    ]), E = u.useRef("duringPlay"), M = u.useRef(null), x = u.useRef(false), P = u.useMemo(() => {
      let j = null, U = null, N = null;
      for (const oe of r.children) oe instanceof ir && oe.material && (oe.material.name === "neon blue" ? j = oe.material : oe.material.name === "neon red" ? U = oe.material : oe.material.name === "glow yellow" && (N = oe.material));
      return j && (j.emissiveIntensity = zo), U && (U.emissiveIntensity = Wo), N && (N.emissiveIntensity = wR), {
        neonBlueMaterial: j,
        neonRedMaterial: U
      };
    }, [
      r
    ]), [D, H] = vt(() => ({
      from: {
        rotation: 0
      },
      config: {
        easing: Be.easeInOutSine,
        duration: R2
      },
      onChange: () => {
        const j = D.rotation.get();
        h.current = j, f.current && f.current.setNextKinematicRotation(j), c.current && (c.current.rotation.y = j);
      }
    }), []), [k, J] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: gR
      },
      onStart: () => {
      },
      onChange: () => {
        if (!P.neonBlueMaterial || !P.neonRedMaterial) return;
        const j = k.progress.get();
        if (g.current) {
          const U = h9("mmamammmmammamamaaamammma", j);
          P.neonBlueMaterial.emissiveIntensity = zo + U * Ba, P.neonRedMaterial.emissiveIntensity = Wo + U * Ia;
        } else {
          const U = Be.easeOutCubic(j);
          P.neonBlueMaterial.emissiveIntensity = zo + U * Ba, P.neonRedMaterial.emissiveIntensity = Wo + U * Ia;
        }
      },
      onRest: () => {
        !P.neonBlueMaterial || !P.neonRedMaterial || (g.current ? (P.neonBlueMaterial.emissiveIntensity = zo + Ba, P.neonRedMaterial.emissiveIntensity = Wo + Ia) : (P.neonBlueMaterial.emissiveIntensity = zo, P.neonRedMaterial.emissiveIntensity = Wo));
      }
    }), []), [W, K] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: M2
      },
      onStart: () => {
        E.current = "duringPlay", B.current = false, T.current = [
          false,
          false,
          false
        ], b.current = h.current;
      },
      onChange: () => {
        const U = W.progress.get() * M2, N = [
          {
            startTime: 0,
            endTime: 1e3,
            ballIndex: -1,
            rotation: -Math.PI * 0.5
          },
          {
            startTime: 2e3,
            endTime: 3e3,
            ballIndex: 0,
            rotation: Math.PI * 0.5
          },
          {
            startTime: 3e3,
            endTime: 4e3,
            ballIndex: 1,
            rotation: Math.PI * 0.5
          },
          {
            startTime: 4e3,
            endTime: 5e3,
            ballIndex: 2,
            rotation: Math.PI * 0.5
          },
          {
            startTime: 5e3,
            endTime: 6e3,
            ballIndex: -1,
            rotation: Math.PI * 0.5
          }
        ];
        if (c.current && f.current) {
          let ue = b.current, we = 0;
          for (const ne of N) U >= ne.endTime && (we += ne.rotation);
          let ve = -1;
          for (let ne = 0; ne < N.length; ne++) {
            const Ie = N[ne];
            if (U >= Ie.startTime && U < Ie.endTime) {
              ve = ne;
              break;
            }
          }
          if (ve >= 0) {
            const ne = N[ve], Ie = (U - ne.startTime) / (ne.endTime - ne.startTime), ie = Be.easeInOutSine(Ie);
            let z = 0;
            for (let $ = 0; $ < ve; $++) z += N[$].rotation;
            ue = b.current + z + ie * ne.rotation;
          } else ue = b.current + we;
          h.current = ue, c.current.rotation.y = ue, f.current.setNextKinematicRotation(ue);
        }
        U >= R2 && !B.current && (B.current = true, g.current = true, Le.getState().addSoundToQueue(Te.NeonSign), Le.getState().addSoundToQueue(Te.Multiball), J.start({
          to: {
            progress: 1
          }
        }));
        const oe = [
          ...C.current
        ].reverse();
        N.forEach((ue) => {
          if (ue.ballIndex >= 0 && U >= ue.endTime && !T.current[ue.ballIndex] && (T.current[ue.ballIndex] = true, S.current)) {
            if (M.current) {
              const we = bR;
              M.current.getWorldQuaternion(we), L.getState().setRetailStoresFiringDirection(new F(0, 0, 1).applyQuaternion(we).normalize());
            }
            L.getState().setBallLockTarget(oe[ue.ballIndex], null, yt.Retail), Le.getState().addSoundToQueue(Te.Thump);
          }
        });
      },
      onRest: () => {
        x.current = false, E.current !== "forcedExit" && he("swapMiniGame", {
          time: performance.now()
        }), E.current = "duringPlay";
      }
    }), []);
    u.useEffect(() => {
      var _a2;
      if (!a || !p) return;
      const j = p.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.z * -1);
      f.current = a.createRigidBody(j);
      const U = Bi(e, s), N = (_a2 = e.geometry.index) == null ? void 0 : _a2.array;
      if (!N) return;
      const oe = p.ColliderDesc.polyline(U, N), ue = Tt([
        F0
      ], [
        ct
      ]);
      return oe.setCollisionGroups(ue), d.current = a.createCollider(oe, f.current), () => {
        Wr(a, d.current), sn(a, f.current);
      };
    }, [
      a,
      p,
      e,
      s
    ]), u.useEffect(() => se.on("ballReachedLockTarget", ({ type: j }) => {
      if (j === yt.Retail) if (C.current.length >= 3) {
        he("retailStoresMiniGameCompleted", {
          time: performance.now()
        }), S.current = true;
        const U = L.getState();
        U.setNumBallsInPlayDuringMultiball(3), U.setMultiballModeIsActive(true), U.setRetailMultiballIsActive(true), K.start({
          from: {
            progress: 0
          },
          to: {
            progress: 1
          }
        });
      } else {
        _.current -= Math.PI * 0.5, H.start({
          to: {
            rotation: _.current
          }
        });
        const U = L.getState(), N = U.ballsInPlay.findIndex((oe) => !oe);
        N !== -1 && (U.setActiveBallId(N), U.setBallSaveHasBeenUsed(false), he("spawnBall", {
          time: performance.now()
        }), he("autoPlunge", {
          time: performance.now()
        }));
      }
    }), [
      H,
      K
    ]);
    const Q = u.useCallback(() => {
      x.current = false, A.current = 0, C.current = [], g.current = false, J.start({
        to: {
          progress: 0
        }
      });
    }, [
      J
    ]);
    u.useEffect(() => se.on("multiballEnded", ({ retailMultiballWasActive: j }) => {
      if (!j) return;
      const U = L.getState();
      let N = false;
      if (x.current && (K.stop(), N = true), Q(), U.setRetailMultiballIsActive(false), N) {
        const oe = Math.round(h.current / (Math.PI * 2)) * Math.PI * 2;
        oe !== h.current && (_.current = oe, H.start({
          from: {
            rotation: h.current
          },
          to: {
            rotation: _.current
          }
        }));
      } else _.current = h.current - Math.PI * 0.5, H.start({
        from: {
          rotation: h.current
        },
        to: {
          rotation: _.current
        }
      });
      U.resetMultiballMode();
    }), [
      Q,
      H,
      K
    ]);
    const Z = (j) => {
      if (L.getState().multiballModeIsActive) return;
      const U = j.other.object, N = U.userData.ballId, oe = A.current, ue = y.current[oe];
      ue && oe < 3 && (L.getState().setBallLockTarget(U.userData.ballId, ue, yt.Retail), Le.getState().addSoundToQueue(Te.BallLockMagnet), C.current.push(N), A.current++, he("retailStoresCapturedBall", {
        numBallsCaptured: A.current
      })), A.current === 3 && (L.getState().setSwapIsInProgress(true), x.current = true);
    };
    return u.useEffect(() => se.on("gameOver", (j) => {
      S.current = false, E.current = j.type ?? "duringPlay", K.stop();
      const U = L.getState();
      U.resetMultiballMode(), Q(), U.setRetailMultiballIsActive(false);
      const N = Math.round(h.current / (Math.PI * 2)) * Math.PI * 2;
      N !== h.current && (_.current = N, H.start({
        from: {
          rotation: h.current
        },
        to: {
          rotation: _.current
        }
      }));
    }), [
      H,
      K,
      Q
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsxs("group", {
          position: s.position,
          quaternion: s.quaternion,
          scale: s.scale,
          children: [
            R.jsx("group", {
              rotation: [
                0,
                Math.PI * -0.1,
                0
              ],
              visible: false,
              children: R.jsx("group", {
                ref: M,
                children: R.jsx("axesHelper", {
                  args: [
                    1
                  ]
                })
              })
            }),
            R.jsxs("group", {
              ref: c,
              visible: l,
              children: [
                R.jsx("primitive", {
                  object: r
                }),
                R.jsx("group", {
                  ref: (j) => {
                    y.current[0] = j;
                  },
                  position: n.position,
                  quaternion: n.quaternion,
                  visible: false,
                  children: R.jsx("axesHelper", {
                    args: [
                      1
                    ]
                  })
                }),
                R.jsx("group", {
                  ref: (j) => {
                    y.current[1] = j;
                  },
                  position: o.position,
                  quaternion: o.quaternion,
                  visible: false,
                  children: R.jsx("axesHelper", {
                    args: [
                      0.02
                    ]
                  })
                }),
                R.jsx("group", {
                  ref: (j) => {
                    y.current[2] = j;
                  },
                  position: i.position,
                  quaternion: i.quaternion,
                  visible: false,
                  children: R.jsx("axesHelper", {
                    args: [
                      0.02
                    ]
                  })
                })
              ]
            })
          ]
        }),
        R.jsx(xt, {
          mesh: t,
          worldTransform: s,
          sensor: true,
          type: "hull",
          applyWorldTranslationToVertices: true,
          onIntersectionEnter: Z,
          collisionGroup: F0
        })
      ]
    });
  };
  function of({ position: r, radius: e, sensor: t = false, collisionGroups: n, onIntersectionEnter: o, onIntersectionExit: i, onCollisionEnter: s, onCollisionExit: c, onContactForce: l }) {
    const { world: a, RAPIER: p, subscribeToColliderEvents: f } = Fr(), d = u.useRef(null);
    return u.useEffect(() => {
      if (!a || !p) return;
      const _ = p.ColliderDesc.ball(e);
      t && _.setSensor(true), _.setTranslation(r.x, -r.z), n !== void 0 && _.setCollisionGroups(n);
      const h = o || i || s || c, b = l;
      h && b ? _.setActiveEvents(p.ActiveEvents.COLLISION_EVENTS | p.ActiveEvents.CONTACT_FORCE_EVENTS) : h ? _.setActiveEvents(p.ActiveEvents.COLLISION_EVENTS) : b && _.setActiveEvents(p.ActiveEvents.CONTACT_FORCE_EVENTS), d.current = a.createCollider(_);
      const g = f(d.current.handle, {
        onIntersectionEnter: o,
        onIntersectionExit: i,
        onCollisionEnter: s,
        onCollisionExit: c,
        onContactForce: l
      });
      return () => {
        g(), Wr(a, d.current);
      };
    }, [
      a,
      p,
      r.x,
      r.z,
      e,
      t,
      n,
      f,
      o,
      i,
      s,
      c,
      l
    ]), null;
  }
  const f0 = 0.08, Ta = 150, xa = 35, Pa = 270, p0 = 6, AR = 0, vR = -0.489, CR = 2e-3, SR = 0.07;
  function RR({ colliderMesh: r, rodMesh: e, worldTransform: t }) {
    const { world: n, RAPIER: o, rigidBodyStates: i } = Fr(), s = u.useRef(null), c = u.useRef(null), l = u.useRef(null), a = u.useRef(null), p = u.useRef(null), f = u.useMemo(() => e.position.clone(), [
      e
    ]), d = u.useRef(0), _ = u.useRef(false), h = u.useRef(Pa), b = u.useRef(false);
    u.useEffect(() => {
      if (!n || !o || !p.current) return;
      const A = o.RigidBodyDesc.fixed().setTranslation(t.position.x, -t.position.z);
      s.current = n.createRigidBody(A);
      const C = o.RigidBodyDesc.dynamic().setTranslation(t.position.x, -t.position.z);
      c.current = n.createRigidBody(C);
      const S = ls(r, t), B = o.ColliderDesc.convexHull(S);
      if (!B) return;
      B.setRestitution(AR);
      const T = Tt([
        Pt
      ], [
        ct
      ]);
      B.setCollisionGroups(T), l.current = n.createCollider(B, c.current);
      const E = o.JointData.prismatic({
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 1
      });
      return a.current = n.createImpulseJoint(E, s.current, c.current, true), a.current.configureMotorModel(o.MotorModel.ForceBased), a.current.configureMotorPosition(0, 0, 0), i.set(c.current.handle, {
        rigidBody: c.current,
        object: p.current
      }), d.current = c.current.translation().y, () => {
        i.delete(c.current.handle), Wr(n, l.current), W3(n, a.current), sn(n, c.current), sn(n, s.current);
      };
    }, [
      n,
      o,
      t,
      r,
      i
    ]);
    const g = u.useCallback(() => {
      let A = 0;
      p.current && (A = 0.0050704219709344365 - p.current.position.z);
      const C = L.getState().plungeDoorClosed;
      A < SR || C || b.current ? Le.getState().addSoundToQueue(Te.LaunchBallSoft) : Le.getState().addSoundToQueue(Te.LaunchBallPowerful);
    }, []);
    u.useEffect(() => M0.subscribe((A) => A[si.Down], (A) => {
      _.current || !a.current || (A ? a.current.configureMotorPosition(-f0, Ta, xa) : (c.current.translation().y < vR && !L.getState().plungeDoorClosed && he("plungeEvent", {
        time: performance.now()
      }), g(), a.current.configureMotorPosition(0, h.current, p0)));
    }), [
      g
    ]);
    const y = u.useCallback(() => {
      !c.current || !a.current || !p.current || (c.current.setLinvel({
        x: 0,
        y: 0
      }, true), c.current.setTranslation({
        x: t.position.x,
        y: -t.position.z
      }, true), a.current.configureMotorPosition(0, h.current, p0));
    }, [
      t
    ]);
    return u.useEffect(() => se.on("autoPlunge", () => {
      !c.current || !a.current || !p.current || (y(), a.current.configureMotorPosition(-f0, Ta, xa), _.current = true);
    }), [
      t,
      f,
      y
    ]), it(() => {
      if (!c.current) return;
      const A = d.current - c.current.translation().y;
      if (L.getState().setPlungerBodyPosition(A), !_.current || !a.current) return;
      const C = Math.abs(A);
      Math.abs(C - f0) < CR && (a.current.configureMotorPosition(0, h.current, p0), Le.getState().addSoundToQueue(Te.LaunchBallPowerful), _.current = false);
    }), u.useEffect(() => se.on("gameOver", () => {
      y(), _.current = false;
    }), [
      y
    ]), u.useEffect(() => L.subscribe((A) => A.isHoldingXRPlunger, (A) => {
      if (!A) {
        if (a.current.motorPosition === 0) return;
        g(), a.current.configureMotorPosition(0, h.current, p0);
      }
    }), [
      g
    ]), u.useEffect(() => L.subscribe((A) => A.plungerXRPosition, (A) => {
      if (_.current || !a.current) return;
      const S = -Math.min(A / 0.12, 1) * f0;
      a.current.configureMotorPosition(S, Ta, xa);
    }), []), u.useEffect(() => {
      const A = xr.subscribe((C) => C.enabledCheatIds.has("ballIsHotDog"), (C) => {
        b.current = C, h.current = C ? Pa * 0.3 : Pa;
      });
      return () => {
        A();
      };
    }, []), u.useEffect(() => {
      e.material.side = Dt;
    }, [
      e
    ]), R.jsx("group", {
      position: t.position,
      quaternion: t.quaternion,
      children: R.jsx("mesh", {
        ref: p,
        geometry: e.geometry,
        material: e.material,
        position: e.position,
        rotation: e.rotation,
        scale: e.scale
      })
    });
  }
  const _0 = 17 * (Math.PI / 180), MR = ({ colliderMesh: r, doorMesh: e, sensor: t, worldTransform: n }) => {
    const o = Ue((b) => b.clock), i = u.useRef(null), s = u.useRef(null), c = u.useRef(true), l = u.useRef(_0), a = u.useRef(0), [p, f] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutElastic,
        duration: 500
      },
      onChange: () => {
        if (!s.current) return;
        const b = a.current - l.current;
        s.current.rotation.y = l.current + b * p.progress.get();
      }
    }), []), d = u.useCallback(() => {
      i.current && s.current && (i.current.setEnabled(true), s.current.rotation.y !== 0 && (l.current = s.current.rotation.y, a.current = 0, f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutElastic,
          duration: 500
        }
      })), L.getState().setPlungeDoorClosed(true)), c.current && he("launched", {
        time: o.elapsedTime
      }), L.getState().setTimeWhenPlungerLaneDoorClosed(o.elapsedTime), c.current = false;
    }, [
      f,
      o
    ]), _ = u.useCallback(() => {
      i.current && s.current && (i.current.setEnabled(false), s.current.rotation.y !== _0 && (l.current = s.current.rotation.y, a.current = _0, f.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: {
          easing: Be.easeOutBounce,
          duration: 500
        }
      })), L.getState().setPlungeDoorClosed(false)), c.current = true;
    }, [
      f
    ]), h = u.useRef(false);
    return u.useEffect(() => L.subscribe((b) => b.multiballModeIsActive, (b) => {
      h.current = b;
    }), []), u.useEffect(() => se.on("newBall", () => {
      _();
    }), [
      _
    ]), u.useEffect(() => se.on("spawnBall", () => {
      _();
    }), [
      _
    ]), u.useEffect(() => se.on("gameOver", () => {
      _();
    }), [
      _
    ]), u.useEffect(() => {
      _();
    }, [
      _
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx(xt, {
          ref: i,
          mesh: r,
          worldTransform: n,
          collisionGroup: Pt
        }),
        R.jsx("group", {
          position: e.position,
          quaternion: e.quaternion,
          scale: e.scale,
          children: R.jsx("mesh", {
            ref: s,
            geometry: e.geometry,
            material: e.material,
            rotation: [
              0,
              _0,
              0
            ]
          })
        }),
        R.jsx(xt, {
          mesh: t,
          worldTransform: n,
          collisionGroup: Pt,
          sensor: true,
          onIntersectionEnter: () => {
            c.current && d();
          },
          type: "polyline"
        })
      ]
    });
  }, ER = ({ name: r, colliderMesh: e, floorCollisionMesh: t, entrySensor: n, worldTransform: o, collisionGroup: i, curvePath: s }) => {
    const c = (p) => {
      a.current && he("rampEntry", {
        name: r,
        ball: p.other.object,
        collisionGroup: i,
        rampFloorMesh: a.current,
        curvePath: s
      });
    }, l = u.useRef(null), a = u.useRef(null);
    return u.useEffect(() => se.on("spawnBall", () => {
      l.current && (clearTimeout(l.current), l.current = null);
    }), []), R.jsxs(R.Fragment, {
      children: [
        R.jsx("mesh", {
          ref: a,
          geometry: t.geometry,
          position: t.position,
          rotation: t.rotation,
          scale: t.scale,
          layers: xc,
          visible: false
        }),
        R.jsx(xt, {
          mesh: e,
          worldTransform: o,
          collisionGroup: i
        }),
        R.jsx(xt, {
          mesh: n,
          worldTransform: o,
          sensor: true,
          type: "hull",
          onIntersectionEnter: c,
          collisionGroup: Pt
        })
      ]
    });
  };
  var BR = `vTimeOffset = _timeoffset;

vec3 transformed = vec3(position);

#ifdef USE_ALPHAHASH

  vPosition = vec3( position );

#endif`, IR = `vec4 sampledDiffuseColor = texture2D( map, vMapUv );

if (vTimeOffset > 0.0) {
  
  float blinkSpeed = 2.0; 
  float offsetTime = time * blinkSpeed + vTimeOffset * 100.0;

  
  float blinkValue = sin(offsetTime) > 0.0 ? 1.0 : 0.0;

  
  float brightness = blinkValue > 0.5 ? 1.5 : 0.5;

  sampledDiffuseColor.rgb *= brightness;
}

diffuseColor *= sampledDiffuseColor;`, TR = `uniform float time;

varying float vTimeOffset;`, xR = `attribute float _timeoffset;

varying float vTimeOffset;`;
  function PR({ mesh: r }) {
    const e = u.useRef(null), t = u.useMemo(() => {
      const n = new _t({
        map: r.material.emissiveMap
      });
      return n.onBeforeCompile = (o) => {
        e.current = o, o.uniforms.time = {
          value: 0
        }, o.vertexShader = o.vertexShader.replace("#include <common>", `
          #include <common>
          ${xR}`), o.vertexShader = o.vertexShader.replace("#include <begin_vertex>", `
          ${BR}`), o.fragmentShader = o.fragmentShader.replace("#include <common>", `
          #include <common>
          ${TR}`), o.fragmentShader = o.fragmentShader.replace("#include <map_fragment>", `
          ${IR}`);
      }, n;
    }, [
      r
    ]);
    return it(({ clock: n }) => {
      e.current && (e.current.uniforms.time.value = n.elapsedTime);
    }), R.jsx("group", {
      children: R.jsx("mesh", {
        geometry: r.geometry,
        material: t,
        position: r.position,
        rotation: r.rotation,
        scale: r.scale
      })
    });
  }
  const FR = ({ mesh: r }) => R.jsx("mesh", {
    geometry: r.geometry,
    position: r.position,
    rotation: r.rotation,
    scale: r.scale,
    children: R.jsx("meshBasicMaterial", {
      color: "red",
      onBeforeCompile: (e) => {
        e.uniforms.letters = {
          value: [
            0,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        }, mo.getState().setShopifyRampLetterShader(e), e.vertexShader = `
            attribute float _shopifylight;
            varying float vBrightness;
            uniform float letters[7];

            void main() {
            int index = int(_shopifylight);
            vBrightness = letters[index];

              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `, e.fragmentShader = `
            precision highp float;
            varying float vBrightness;  // Receive the brightness value
            const vec3 color = vec3(1.0, 0.68, 0.14);

            void main() {
              gl_FragColor = vec4((vBrightness + 0.4) * 3.0 * color, 1.0);
            }
          `;
      }
    })
  }), LR = ({ bodyMesh: r, armsMesh: e, ballTarget: t, ballTargetWorldPosition: n, worldTransform: o }) => {
    const i = u.useRef(null), s = u.useRef(null), c = u.useRef(null), l = u.useRef(null), a = u.useRef(false), p = u.useRef(false), f = u.useRef(0), [d, _] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.linear,
        duration: 4e3
      },
      onStart: () => {
        !s.current || !c.current || !l.current || (s.current.rotation.x = -35 * Math.PI / 180, c.current.rotation.x = 0, l.current.rotation.z = 0, p.current = false);
      },
      onChange: () => {
        if (!s.current || !c.current || !l.current) return;
        const b = d.progress.get() * 4e3;
        if (b < 1e3) {
          const g = b / 1e3, y = Be.easeOutElastic(g);
          s.current.rotation.x = (-35 + 35 * y) * (Math.PI / 180);
        } else if (b < 2e3) {
          const g = (b - 1e3) / 1e3, y = Be.easeOutElastic(g), A = (0 - 75 * y) * (Math.PI / 180);
          s.current.rotation.x = A, c.current.rotation.x = A;
          const C = (0 - 35 * y) * (Math.PI / 180);
          l.current.rotation.z = C;
        } else if (b < 3e3) {
          const g = (b - 2e3) / 1e3, y = Be.easeOutElastic(g);
          y > 0.5 && !p.current && (L.getState().setBallLockTarget(f.current, null, yt.Shoppy), p.current = true);
          const A = (-75 + 75 * y) * (Math.PI / 180);
          s.current.rotation.x = A, c.current.rotation.x = A;
        } else {
          const g = (b - 3e3) / 1e3, y = Be.easeOutElastic(g);
          s.current.rotation.x = (0 - 35 * y) * (Math.PI / 180), l.current.rotation.z = (-35 + 35 * y) * (Math.PI / 180);
        }
      },
      onRest: () => {
        !s.current || !c.current || !l.current || (s.current.rotation.x = -35 * Math.PI / 180, c.current.rotation.x = 0, l.current.rotation.z = 0, a.current = false);
      }
    }), []);
    return u.useEffect(() => se.on("ballReachedLockTarget", ({ ballId: h, type: b }) => {
      b === yt.Shoppy && (f.current = h, Le.getState().addSoundToQueue(Te.ShoppyThrow), _.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }));
    }), [
      _
    ]), u.useEffect(() => se.on("gameOver", () => {
      a.current && (_.stop(), a.current = false);
    }), [
      _
    ]), u.useEffect(() => {
      r.material.side = Dt, e.material.side = Dt;
    }, [
      r,
      e
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsx("group", {
          position: o.position,
          quaternion: o.quaternion,
          scale: o.scale,
          children: R.jsx("group", {
            position: r.position,
            rotation: r.rotation,
            scale: r.scale,
            children: R.jsxs("group", {
              ref: l,
              rotation: [
                0,
                0,
                0 * Math.PI / 180
              ],
              children: [
                R.jsx("mesh", {
                  geometry: r.geometry,
                  material: r.material
                }),
                R.jsxs("group", {
                  position: e.position,
                  rotation: e.rotation,
                  scale: e.scale,
                  children: [
                    R.jsx("group", {
                      ref: s,
                      rotation: [
                        -35 * Math.PI / 180,
                        0,
                        0
                      ],
                      children: R.jsx("mesh", {
                        geometry: e.geometry,
                        material: e.material
                      })
                    }),
                    R.jsx("group", {
                      ref: c,
                      rotation: [
                        0 * Math.PI / 180,
                        0,
                        0
                      ],
                      children: R.jsx("group", {
                        ref: i,
                        position: t.position,
                        quaternion: t.quaternion,
                        scale: t.scale
                      })
                    })
                  ]
                })
              ]
            })
          })
        }),
        R.jsx(of, {
          position: n,
          radius: 0.01,
          sensor: true,
          collisionGroups: Tt([
            Pt
          ], [
            ct
          ]),
          onIntersectionEnter: (h) => {
            if (!a.current && (a.current = true, i.current)) {
              const b = h.other.object;
              L.getState().setBallLockTarget(b.userData.ballId, i.current, yt.Shoppy), Le.getState().addSoundToQueue(Te.BallLockMagnet);
            }
          }
        })
      ]
    });
  }, E2 = 600 / 1e6, B2 = 450 / 1e6, I2 = 30.146 * (Math.PI / 180), T2 = 39.694 * (Math.PI / 180), DR = 0.1, GR = 0.01, OR = new F();
  function HR({ name: r, colliderMesh: e, rubberBandMesh0: t, rubberBandMesh1: n, rubberBandMesh2: o, side: i, worldTransform: s }) {
    const c = Ue((A) => A.clock), l = u.useRef(0), a = u.useRef(null), p = u.useRef(null), f = u.useRef(null), d = u.useMemo(() => new et().compose(s.position, s.quaternion, new F(1, 1, 1)).invert(), [
      s
    ]), _ = u.useMemo(() => {
      const A = i === "left" ? I2 : -I2, C = new F(0, 0, 1), S = new Ne().setFromAxisAngle(new F(1, 0, 0), A);
      return S.premultiply(s.quaternion), C.applyQuaternion(S), {
        x: C.x,
        y: -C.z
      };
    }, [
      i,
      s.quaternion
    ]), h = u.useMemo(() => {
      const A = i === "left" ? -T2 : T2, C = new F(0, 0, 1), S = new Ne().setFromAxisAngle(new F(1, 0, 0), A);
      return S.premultiply(s.quaternion), C.applyQuaternion(S), {
        x: C.x,
        y: -C.z
      };
    }, [
      i,
      s.quaternion
    ]), [b, g] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        easing: Be.easeOutBounce,
        duration: 100
      },
      onChange: () => {
        if (!a.current || !p.current || !f.current) return;
        b.progress.get() < 0.5 ? (a.current.visible = false, p.current.visible = false, f.current.visible = true) : (a.current.visible = false, p.current.visible = true, f.current.visible = false);
      },
      onRest: () => {
        !a.current || !p.current || !f.current || (a.current.visible = true, p.current.visible = false, f.current.visible = false);
      }
    })), y = u.useCallback((A) => {
      const C = A.other.rigidBody;
      if (A.maxForceMagnitude < GR || !C) return;
      const S = c.elapsedTime;
      if (S - l.current < DR) return;
      l.current = S;
      const B = C.translation(), T = OR.set(B.x, 0, -B.y).applyMatrix4(d);
      let E = {
        x: 0,
        y: 0
      };
      if (i === "right") if (T.y >= 0) {
        const M = E2;
        E = {
          x: _.x * M,
          y: _.y * M
        };
      } else {
        const M = B2;
        E = {
          x: h.x * M,
          y: h.y * M
        };
      }
      else if (i === "left") if (T.y >= 0) {
        const M = B2;
        E = {
          x: h.x * M,
          y: h.y * M
        };
      } else {
        const M = E2;
        E = {
          x: _.x * M,
          y: _.y * M
        };
      }
      C.applyImpulse(E, true), g.start({
        from: {
          progress: 0
        },
        to: {
          progress: 1
        }
      }), he("collision", {
        target: r,
        time: c.elapsedTime,
        type: "slingshot",
        ball: A.other.object
      }), Le.getState().addSoundToQueue(Te.SlingshotHit), Le.getState().addSoundToQueue(Te.BallHit);
    }, [
      r,
      c,
      d,
      _,
      h,
      i,
      g
    ]);
    return u.useEffect(() => {
      t.material.side = Dt, n.material.side = Dt, o.material.side = Dt;
    }, [
      t,
      n,
      o
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsxs("group", {
          position: s.position,
          quaternion: s.quaternion,
          children: [
            R.jsx("mesh", {
              ref: a,
              geometry: t.geometry,
              material: t.material,
              position: t.position,
              rotation: t.rotation,
              scale: t.scale,
              visible: true
            }),
            R.jsx("mesh", {
              ref: p,
              geometry: n.geometry,
              material: n.material,
              position: n.position,
              rotation: n.rotation,
              scale: n.scale,
              visible: false
            }),
            R.jsx("mesh", {
              ref: f,
              geometry: o.geometry,
              material: o.material,
              position: o.position,
              rotation: o.rotation,
              scale: o.scale,
              visible: false
            })
          ]
        }),
        R.jsx(xt, {
          mesh: e,
          worldTransform: s,
          applyWorldTranslationToVertices: true,
          onContactForce: y
        })
      ]
    });
  }
  const kR = 0.97, jR = 40, UR = 1e-3, NR = 0.01, io = 2 * Math.PI, ol = u.forwardRef(({ spinnerGroup: r, spinnerWireMesh: e, spinnerTargetMesh: t, spinnerFrameMesh: n, sensor: o, worldTransform: i, worldTransformForCollider: s = null, enabled: c = true }, l) => {
    const a = u.useRef(null), p = u.useRef(0), f = u.useRef(0), d = u.useRef(0), _ = u.useRef(null), h = u.useRef(c);
    it((g, y) => {
      if (!a.current || !h.current) return;
      if (Math.abs(p.current) < UR) {
        const x = Math.round(f.current / io) * io, P = f.current - x;
        if (Math.abs(P) < NR) {
          f.current = x, p.current = 0, a.current.rotation.x = f.current;
          return;
        }
      }
      const A = Math.min(y, 0.05), C = A * 60, S = Math.round(f.current / io) * io, T = -1 * (f.current - S);
      p.current += T * C, p.current *= kR ** C, f.current += p.current * A;
      const E = Math.abs(f.current - d.current), M = Math.floor(E / io);
      if (M > 0) {
        for (let P = 0; P < M; P++) he("spinnerTargetCompletedRotation", {
          time: performance.now()
        }), Le.getState().addSoundToQueue(Te.SpinnerTargetSpin);
        const x = f.current >= d.current ? 1 : -1;
        d.current += x * M * io;
      }
      a.current.rotation.x = f.current;
    });
    const b = u.useCallback((g) => {
      const y = g.other.rigidBody;
      if (!y) return;
      const A = y.linvel();
      p.current += A.y * jR, Le.getState().addSoundToQueue(Te.BallHit);
    }, []);
    return u.useImperativeHandle(l, () => ({
      getCollider: () => _.current,
      enableSpinnerResponse: () => {
        h.current = true;
      },
      disableSpinnerResponse: () => {
        h.current = false;
      }
    }), []), u.useEffect(() => {
      e.material.side = Dt, t.material.side = Dt, n && (n.material.side = Dt);
    }, [
      e,
      t,
      n
    ]), R.jsxs(R.Fragment, {
      children: [
        R.jsxs("group", {
          position: i.position,
          quaternion: i.quaternion,
          scale: i.scale,
          children: [
            R.jsx("group", {
              position: r.position,
              quaternion: r.quaternion,
              scale: r.scale,
              children: R.jsxs("group", {
                ref: a,
                children: [
                  R.jsx("mesh", {
                    geometry: e.geometry,
                    material: e.material,
                    position: e.position,
                    rotation: e.rotation,
                    scale: e.scale
                  }),
                  R.jsx("mesh", {
                    geometry: t.geometry,
                    material: t.material,
                    position: t.position,
                    rotation: t.rotation,
                    scale: t.scale
                  })
                ]
              })
            }),
            n && R.jsx("mesh", {
              geometry: n.geometry,
              material: n.material,
              position: n.position,
              rotation: n.rotation,
              scale: n.scale
            })
          ]
        }),
        R.jsx(xt, {
          ref: _,
          mesh: o,
          worldTransform: s ?? i,
          sensor: true,
          type: "hull",
          onIntersectionEnter: b,
          applyWorldTranslationToVertices: true,
          enabled: c
        })
      ]
    });
  });
  ol.displayName = "SpinnerTarget";
  const zR = Tt([
    Pt
  ], []), WR = Tt([
    Pt
  ], [
    ct
  ]), JR = ({ spinnerGroups: r, worldTransform: e }) => {
    const t = u.useMemo(() => r.map((g) => {
      const y = new F(), A = new Ne(), C = new F();
      return g.spinnerGroup.getWorldPosition(y), g.spinnerGroup.getWorldQuaternion(A), g.spinnerGroup.getWorldScale(C), {
        position: y,
        quaternion: A,
        scale: C
      };
    }), [
      r
    ]), n = u.useRef(Array(r.length).fill(null)), o = u.useRef(Array(r.length).fill(null)), i = u.useRef(Array(r.length).fill(false)), s = u.useRef(Array(r.length).fill(false)), c = u.useRef(Array(r.length).fill(false)), l = u.useRef(false), a = 2e3, p = r.length, f = a / p, d = 0.5, _ = a * (1 - (p - 1) / p * d), [h, b] = vt(() => ({
      from: {
        progress: 0
      },
      config: {
        duration: _,
        easing: Be.linear
      },
      onStart: () => {
        n.current.forEach((g) => {
          g && (g.visible = true);
        });
      },
      onChange: () => {
        const y = h.progress.get() * _;
        n.current.forEach((A, C) => {
          if (A) if (y > f * C * (1 - d)) {
            const S = Math.min((y - f * C * (1 - d)) / f, 1), B = Be.easeOutCubic(S);
            A.scale.set(B, B, B), l.current && !i.current[C] && S > 0 && (s.current[C] = true);
          } else A.scale.set(0, 0, 0), !l.current && i.current[C] && (c.current[C] = true);
        });
      },
      onRest: () => {
        l.current || n.current.forEach((g) => {
          g && (g.visible = false);
        });
      }
    }));
    return it(() => {
      o.current.forEach((g, y) => {
        if (g) {
          if (s.current[y]) {
            const A = g.getCollider();
            A && (A.setCollisionGroups(WR), A.setEnabled(true), g.enableSpinnerResponse(), i.current[y] = true), s.current[y] = false;
          }
          if (c.current[y]) {
            const A = g.getCollider();
            A && (A.setCollisionGroups(zR), A.setEnabled(false), g.disableSpinnerResponse(), i.current[y] = false), c.current[y] = false;
          }
        }
      });
    }), u.useEffect(() => {
      const g = xr.subscribe((y) => y.enabledCheatIds.has("spinnerWorld"), (y) => {
        l.current = y, y ? b.start({
          to: {
            progress: 1
          }
        }) : b.start({
          to: {
            progress: 0
          }
        });
      });
      return () => {
        g();
      };
    }, [
      b
    ]), R.jsx(R.Fragment, {
      children: R.jsx("group", {
        position: e.position,
        quaternion: e.quaternion,
        scale: e.scale,
        children: r.map((g, y) => R.jsx("group", {
          position: g.spinnerGroup.position,
          quaternion: g.spinnerGroup.quaternion,
          scale: 0,
          ref: (A) => {
            n.current[y] = A;
          },
          visible: false,
          children: R.jsx(ol, {
            spinnerGroup: g.spinnerSubGroup,
            spinnerWireMesh: g.spinnerWireMesh,
            spinnerTargetMesh: g.spinnerTargetMesh,
            spinnerFrameMesh: g.spinnerFrameMesh,
            sensor: g.sensor,
            worldTransform: {
              position: new F(),
              quaternion: new Ne(),
              scale: new F(1, 1, 1)
            },
            worldTransformForCollider: t[y],
            ref: (A) => {
              o.current[y] = A;
            },
            enabled: false
          })
        }, g.spinnerGroup.uuid))
      })
    });
  }, Fa = /* @__PURE__ */ new WeakMap();
  function VR({ modelUrl: r }) {
    const { scene: e } = zn(r), { isMobile: t } = yi(), { spawnPoint: n, deathPoint: o, flippers: i, slingshots: s, bumpers: c, plungers: l, ramps: a, shopifyRampLetters: p, plungerDoor: f, airplane: d, bottomDmd: _, topDmd: h, floor: b, lightMaskGroup: g, miniGameManager: y, retailStoresMiniGame: A, firstSaleMiniGame: C, milestoneMiniGame: S, fiveStarMiniGame: B, boxesMiniGame: T, cashRegisterMiniGame: E, podiumMiniGame: M, bumperCheatCode: x, spinnerCheatCode: P, shoppyBallLock: D, laneSwitches: H, buttonTargets: k, kickers: J, spinnerTargets: W, bumperDecoration: K, servers: Q, topDMDWorldTransform: Z, globeWorldTransform: j, sceneElements: U } = u.useMemo(() => {
      if (Fa.has(e)) return Fa.get(e);
      let N = null, oe = null;
      const ue = [], we = [], ve = [];
      let ne = null, Ie = null, ie = null, z = null, $ = null, re = null, Me = null;
      const Ce = [], Ee = [];
      let Ge = null, Oe = null, Ve = null, Rt = null, Ke = null, st = null, Ot = null, Jt = null, tr = null, Rr = null, Lr = null;
      const an = [], gr = [], So = [], In = [];
      let Ii = null, Ti = null, xi = null, cn = null;
      const Vt = (q) => {
        if (q instanceof ni) {
          if (q.name === "SpawnPoint") return N = new F(0.22987699508666992, or * 0.5, 0.31761470437049866), null;
          if (q.name === "DeathPoint") return oe = ft(q).position.clone(), null;
          if (q.name.startsWith("LeftFlipperGroup") || q.name.startsWith("RightFlipperGroup")) {
            let le = null, V = null, ce = null, ye = null;
            for (const ae of q.children) if (ae.name.startsWith("FlipperBase")) {
              le = ae;
              for (const Re of le.children) Re.name.startsWith("Base0") && !Re.name.endsWith("_1") ? V = Re : Re.name.startsWith("Base0") && Re.name.endsWith("_1") && (ce = Re);
            } else ae.name.startsWith("FlipperGuard") && (ye = ae);
            if (le && V && ce) {
              const ae = ft(q);
              ue.push({
                name: q.name,
                side: q.name.startsWith("LeftFlipperGroup") ? "left" : "right",
                baseGroup: le,
                base: V,
                baseGlow: ce,
                guard: ye,
                worldTransform: ae
              });
            }
            return null;
          }
          if (q.name.startsWith("RampGroup")) {
            let le = null, V = null, ce = null, ye;
            const ae = q.name.slice(-1);
            for (const Se of q.children) Se.name.startsWith("RampEntry") ? ce = Se : Se.name.startsWith("RampFloor") ? V = Se : Se.name.startsWith("RampWalls") ? le = Se : Se.name.startsWith("RampPath") && (ye = Se);
            let Re;
            switch (ae) {
              case "1":
                Re = qd;
                break;
              case "2":
                Re = Yd;
                break;
            }
            return le && V && ce && Ce.push({
              name: q.name,
              id: parseInt(ae, 10),
              colliderMesh: le,
              floorCollisionMesh: V,
              collisionGroup: Re,
              entrySensor: ce,
              worldTransform: ft(q),
              curvePath: ye
            }), null;
          }
          if (q.name.startsWith("Decorationfloor")) return ie = q, null;
          if (q.name === "LightMaskGroup") return z = q, null;
          if (!t && q.name.startsWith("DMDtop")) return xi = ft(q), Ie = {
            mesh: q
          }, null;
          if (q.name.startsWith("DMDbottom")) return ne = {
            mesh: q
          }, null;
          if (q.name.startsWith("Decorationmodel_plane_Baked")) return $ = q, null;
          if (q.name.startsWith("PlungerDoorGroup")) {
            let le = null, V = null, ce = null;
            for (const ye of q.children) ye.name.includes("StaticColliderplungerdoor") ? le = ye : ye.name.includes("Decorationplungerdoor") ? V = ye : ye.name.startsWith("PlungerExit") && (ce = ye);
            return le && V && ce && (re = {
              worldTransform: ft(q),
              colliderMesh: le,
              doorMesh: V,
              sensor: ce
            }), null;
          }
          if (q.name.startsWith("LeftSlingshotGroup") || q.name.startsWith("RightSlingshotGroup")) {
            let le = null, V = null, ce = null, ye = null;
            for (const ae of q.children) ae.name.startsWith("SlingshotCollider") ? le = ae : ae.name.startsWith("SlingshotRubberBand0") ? V = ae : ae.name.startsWith("SlingshotRubberBand1") ? ce = ae : ae.name.startsWith("SlingshotRubberBand2") && (ye = ae);
            if (le && V && ce && ye) {
              const ae = ft(q);
              we.push({
                name: q.name,
                side: q.name.startsWith("LeftSlingshotGroup") ? "left" : "right",
                colliderMesh: le,
                rubberBandMesh0: V,
                rubberBandMesh1: ce,
                rubberBandMesh2: ye,
                worldTransform: ae
              });
            }
            return null;
          }
          if (q.name.startsWith("BumperGroup")) {
            let le = null, V = null;
            for (const ce of q.children) ce.name.startsWith("BumperCollider") ? le = ce : ce.name.startsWith("BumperRing") && (V = ce);
            if (le && V) {
              const ce = ft(q);
              ve.push({
                name: q.name,
                colliderMesh: le,
                ringMesh: V,
                worldTransform: ce
              });
            }
            return null;
          }
          if (q.name === "PlungerGroup") {
            let le = null, V = null;
            for (const ce of q.children) ce.name.startsWith("PlungerCollider") ? le = ce : ce.name.startsWith("PlungerRod") && (V = ce);
            if (le && V) {
              const ce = ft(q);
              Ee.push({
                colliderMesh: le,
                rodMesh: V,
                worldTransform: ce
              });
            }
            return null;
          }
          if (q.name.startsWith("MiniFenceGroup")) {
            let le = null, V = null;
            for (const ce of q.children) ce.name.startsWith("StaticColliderMinifence") ? le = ce : ce.name.startsWith("DecorationMinifence") && (V = ce);
            if (le && V) {
              V.material = new _t({
                map: V.material.emissiveMap
              });
              const ce = ft(q);
              Ge = {
                colliderMesh: le,
                fenceMesh: V,
                worldTransform: ce
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniRetailStoresGroup")) {
            let le = null, V = null, ce = null, ye = null, ae = null, Re = null;
            for (const Se of q.children) Se.name.startsWith("Decorationshopcube") ? le = Se : Se.name.startsWith("BuildingCollider") ? V = Se : Se.name.startsWith("DoorSensor") ? ce = Se : Se.name.startsWith("BallTarget0") ? ye = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            } : Se.name.startsWith("BallTarget1") ? ae = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            } : Se.name.startsWith("BallTarget2") && (Re = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            });
            if (le && V && ce && ye && ae && Re) {
              le.traverse((nt) => {
                nt instanceof ir && nt.material.name === "Decoration.shopcube_Baked.004" && (nt.material = new _t({
                  map: nt.material.emissiveMap
                }));
              });
              const Se = ft(q);
              Oe = {
                buildingMeshesGroup: le,
                buildingCollider: V,
                doorSensor: ce,
                ballTarget0: ye,
                ballTarget1: ae,
                ballTarget2: Re,
                worldTransform: Se
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniBellGroup")) return null;
          if (q.name.startsWith("MiniFirstSaleGroup")) {
            let le = null;
            const V = [];
            let ce = null, ye = null, ae = null, Re = null;
            for (const Se of q.children) if (Se.name.startsWith("Decorationfirstsaletower")) {
              le = Se;
              for (const nt of le.children) nt instanceof ir && V.push(nt);
            } else Se.name.startsWith("StaticColliderfirstsaletower") ? ce = Se : Se.name.startsWith("ball0") ? ye = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            } : Se.name.startsWith("ball1") ? ae = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            } : Se.name.startsWith("ball2") && (Re = {
              position: Se.position.clone(),
              quaternion: Se.quaternion.clone()
            });
            if (le && V.length > 0 && ce && ye && ae && Re) {
              V.forEach((nt) => {
                nt.material.name === "first sale bake" ? nt.material = new _t({
                  map: nt.material.emissiveMap
                }) : nt.material.name === "chrome" && (nt.material.side = Dt);
              });
              const Se = ft(q);
              Ve = {
                towerGroup: le,
                towerMeshes: V,
                towerColliderMesh: ce,
                ballTarget0: ye,
                ballTarget1: ae,
                ballTarget2: Re,
                worldTransform: Se
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniMilestoneGroup")) {
            let le = null, V = null, ce = null, ye = null, ae = null;
            const Re = [];
            for (const Se of q.children) if (Se.name === "Decorationtrophy") {
              le = Se;
              for (const nt of le.children) nt.name === "Low_Poly" ? V = nt : nt.name === "Low_Poly_1" && (ce = nt);
            } else Se.name.startsWith("StaticCollidertrophy") ? ye = Se : Se.name.startsWith("StaticCollidercannons") ? ae = Se : Re.push(Se);
            if (le && V && ce && ye && ae && Re.length > 0) {
              V.material.side = Dt, ce.material.side = Dt, Re.forEach((nt) => {
                nt.material = new _t({
                  map: nt.material.emissiveMap
                });
              });
              const Se = ft(q);
              Rt = {
                trophyGroup: le,
                shoppingBagMesh: V,
                shopifyLogoMesh: ce,
                colliderMesh: ye,
                backColliderMesh: ae,
                otherMeshes: Re,
                worldTransform: Se
              };
            }
            return null;
          }
          if (q.name.startsWith("Decoration_SHOPIFY_ramp")) return Me = {
            mesh: q
          }, null;
          if (q.name.startsWith("MiniFivestarGroup")) {
            let le = null;
            const V = [], ce = [];
            for (const ae of q.children) ae.name.startsWith("Decorationfivestarfloor") ? le = ae : ae.name.startsWith("Decorationfivestar") ? V.push(ae) : ae.name.startsWith("StaticColliderfivestar") && ce.push(ae);
            const ye = (ae) => {
              const Re = ae.match(/fivestar(\d+)/);
              return Re ? parseInt(Re[1], 10) : 0;
            };
            if (V.sort((ae, Re) => ye(ae.name) - ye(Re.name)), ce.sort((ae, Re) => ye(ae.name) - ye(Re.name)), le && V.length > 0 && ce.length > 0) {
              le.material.side = Dt, V.forEach((Re) => {
                Re.material.side = Dt;
              });
              const ae = ft(q);
              Ke = {
                floorMesh: le,
                targetMeshes: V,
                targetColliders: ce,
                worldTransform: ae
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniBoxesGroup")) {
            let le = null, V = null, ce = null, ye = null, ae = null, Re = null, Se = null, nt = null, cr = null;
            for (const mt of q.children) mt.name.startsWith("Decorationboxfloor_Baked") ? le = mt : mt.name.startsWith("Decorationbox_Baked") ? V = mt : mt.name.startsWith("Decorationboxesring_Baked") ? ce = mt : mt.name.startsWith("Decorationboxflapleft_Baked") ? ye = mt : mt.name.startsWith("Decorationboxflapright_Baked") ? ae = mt : mt.name.startsWith("MiniBoxesDoorSensor") ? Re = mt : mt.name.startsWith("StaticColliderboxesdoorclosed") ? cr = mt : mt.name.startsWith("StaticColliderbox") ? Se = mt : mt.name.startsWith("StaticColliderring") && (nt = mt);
            if (le && V && ce && ye && ae && Re && Se && nt && cr) {
              const mt = ft(q);
              st = {
                floorMesh: le,
                mainBoxMesh: V,
                ringOfBoxesMesh: ce,
                mainBoxLeftFlapMesh: ye,
                mainBoxRightFlapMesh: ae,
                doorSensorMesh: Re,
                mainBoxColliderMesh: Se,
                ringOfBoxesColliderMesh: nt,
                closedBoxColliderMesh: cr,
                worldTransform: mt
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniCashRegisterGroup")) {
            let le = null, V = null, ce = null, ye = null, ae = null;
            for (const Re of q.children) Re.name.startsWith("Decorationcashregisterfloor_Baked") ? le = Re : Re.name.startsWith("Decorationcashregister_Baked") ? (V = Re, V.children[0] instanceof ir ? (ce = V.children[0], ae = V.children[1]) : (ce = V.children[1], ae = V.children[0])) : Re.name.startsWith("MiniCashRegisterSensor") && (ye = Re);
            if (le && V && ce && ye && ae) {
              const Re = ft(q);
              Ot = {
                floorMesh: le,
                cashRegisterMesh: V,
                cashRegisterDrawerMesh: ce,
                cashRegisterColliderMesh: ye,
                screenTarget: ae,
                worldTransform: Re
              };
            }
            return null;
          }
          if (q.name.startsWith("MiniPodiumGroup")) {
            let le = null;
            const V = [], ce = [];
            for (const ae of q.children) ae.name.startsWith("Decorationpodiumfloor_Baked") ? le = ae : ae.name.startsWith("Decorationpodium") ? V.push(ae) : ae.name.startsWith("StaticColliderpodium") && ce.push(ae);
            const ye = (ae) => {
              const Re = ae.match(/\d+$/);
              return Re ? parseInt(Re[0], 10) : 0;
            };
            if (V.sort((ae, Re) => ye(ae.name) - ye(Re.name)), ce.sort((ae, Re) => ye(ae.name) - ye(Re.name)), le && V.length > 0 && ce.length > 0) {
              le.material = new _t({
                map: le.material.emissiveMap
              }), V.forEach((Re) => {
                Re.material = new _t({
                  map: Re.material.emissiveMap
                });
              });
              const ae = ft(q);
              Jt = {
                floorMesh: le,
                podiumMeshes: V,
                podiumColliderMeshes: ce,
                worldTransform: ae
              };
            }
            return null;
          }
          if (q.name.startsWith("CheatBumperGroup")) {
            const le = [];
            for (const V of q.children) if (V.name.startsWith("BumperGroup")) {
              const ce = V;
              let ye = null, ae = null, Re = null;
              for (const Se of ce.children) Se.name.startsWith("StaticCollidercheatbumper") ? ye = Se : Se.name.startsWith("BumperRing") ? ae = Se : Se.name.startsWith("Decorationcheatbumper") && (Re = Se);
              if (ye && ae && Re) {
                const Se = ft(ce);
                le.push({
                  bumperGroup: ce,
                  bumperColliderMesh: ye,
                  bumperRingMesh: ae,
                  bumperDecorationMesh: Re,
                  worldTransform: Se
                });
              }
            }
            if (le.length > 0) {
              const V = ft(q);
              tr = {
                bumperGroups: le,
                worldTransform: V
              };
            }
            return null;
          }
          if (q.name.startsWith("CheatSpinnerTargetGroup")) {
            const le = [];
            for (const V of q.children) if (V.name.startsWith("CheatSpinnerTargetGroup")) {
              const ce = V;
              let ye = null, ae = null, Re = null, Se = null, nt = null;
              for (const cr of ce.children) if (cr.name.startsWith("Decorationspinnerhoop")) Se = cr;
              else if (cr.name.startsWith("SpinnerTarget")) nt = cr;
              else if (cr.name.startsWith("Spinner")) {
                ye = cr;
                for (const mt of ye.children) mt.name.endsWith("_1") ? Re = mt : ae = mt;
              }
              if (ye && ae && Re && nt) {
                const cr = ft(ce);
                le.push({
                  spinnerGroup: ce,
                  spinnerSubGroup: ye,
                  spinnerWireMesh: ae,
                  spinnerTargetMesh: Re,
                  spinnerFrameMesh: Se,
                  sensor: nt,
                  worldTransform: cr
                });
              }
            }
            if (le.length > 0) {
              const V = ft(q);
              Rr = {
                spinnerGroups: le,
                worldTransform: V
              };
            }
            return null;
          }
          if (q.name.startsWith("ShoppyBallLockGroup")) {
            let le = null, V = null, ce = null;
            for (const ye of q.children) ye.name.startsWith("DecorationShoppy") && (le = ye, V = le.children[0], ce = V.children[0]);
            if (le && V && ce) {
              const ye = ft(q), ae = new F();
              ce.getWorldPosition(ae), Lr = {
                bodyMesh: le,
                armsMesh: V,
                ballTarget: ce,
                ballTargetWorldPosition: ae,
                worldTransform: ye
              };
            }
            return null;
          }
          if (q.name.startsWith("InlaneTargetGroup")) {
            const le = parseInt(q.name.replace("InlaneTargetGroup", ""), 10);
            let V = null, ce = null;
            switch (le) {
              case 0:
              case 3:
                V = "outlane", ce = () => {
                  Le.getState().addSoundToQueue(Te.RollOverSwitchPress), he("laneEvent", {
                    type: "outlane",
                    id: le
                  });
                };
                break;
              case 1:
              case 2:
                V = "inlane", ce = () => {
                  Le.getState().addSoundToQueue(Te.RollOverSwitchPress), he("laneEvent", {
                    type: "inlane",
                    id: le
                  });
                };
                break;
              case 4:
              case 5:
              case 6:
                V = "rolloverLane", ce = () => {
                  Le.getState().addSoundToQueue(Te.RollOverSwitchPress), he("laneEvent", {
                    type: "rolloverLane",
                    id: le
                  });
                };
                break;
              case 7:
              case 8:
                V = "sideLane", ce = () => {
                  he("laneEvent", {
                    type: "sideLane",
                    id: le
                  });
                };
                break;
              default:
                return null;
            }
            if (V === null || ce === null) return null;
            let ye = null;
            for (const ae of q.children) ae.name.startsWith("InlaneTarget") && (le >= 0 && le < 4, ye = ae);
            return ye && an.push({
              name: V + le,
              sensor: ye,
              worldTransform: ft(q),
              onIntersectionEnter: ce
            }), null;
          }
          if (q.name.startsWith("SpinTargetGroup")) {
            const le = q.name.replace("SpinTargetGroup", "");
            let V = null;
            switch (le) {
              case "B":
                V = $t.LetterB;
                break;
              case "F":
                V = $t.LetterF;
                break;
              case "C":
                V = $t.LetterC;
                break;
              case "M":
                V = $t.LetterM;
                break;
              default:
                return null;
            }
            if (V === null) return null;
            let ce = null, ye = null;
            for (const ae of q.children) ae.name.startsWith("SpinTargetSensor") ? ye = ae : ae.name.startsWith("Target") && (ce = ae);
            return ce && ye && gr.push({
              name: V,
              targetMesh: ce,
              sensor: ye,
              worldTransform: ft(q)
            }), null;
          }
          if (q.name.startsWith("KickerGroup")) {
            let le = null, V = null, ce = null, ye = null;
            for (const ae of q.children) ae.name.startsWith("KickerCollider") ? le = ae : ae.name.startsWith("DecorationKickerRod") ? V = ae : ae.name.startsWith("StaticColliderKickerdoor") ? ce = ae : ae.name.startsWith("DecorationKickerdoor") && (ye = ae);
            if (le && V && ce && ye) {
              const ae = ft(q);
              So.push({
                rodColliderMesh: le,
                rodMesh: V,
                doorColliderMesh: ce,
                doorMesh: ye,
                worldTransform: ae
              });
            }
            return null;
          }
          if (q.name.startsWith("SpinnerTargetGroup")) {
            let le = null, V = null, ce = null, ye = null, ae = null;
            for (const Re of q.children) if (Re.name.startsWith("Decorationspinnerframe")) ye = Re;
            else if (Re.name.startsWith("SpinnerTarget")) ae = Re;
            else if (Re.name.startsWith("Spinner")) {
              le = Re;
              for (const Se of le.children) Se.name === "Cube026" ? V = Se : Se.name === "Cube026_1" && (ce = Se);
            }
            if (le && V && ce && ae) {
              const Re = ft(q);
              In.push({
                spinnerGroup: le,
                spinnerWireMesh: V,
                spinnerTargetMesh: ce,
                spinnerFrameMesh: ye,
                sensor: ae,
                worldTransform: Re
              });
            }
            return null;
          }
          if (q.name.startsWith("Decorationpopbumpers_Baked")) return Ii = q, null;
          if (q.name.startsWith("globe_stand_Baked")) return Ti = q, null;
          if (q.name.startsWith("GlobePoint")) return cn = ft(q), null;
        }
        const Ht = q.children.map((le) => Vt(le)).filter(Boolean);
        if (q instanceof ir || q instanceof pc) {
          const le = q instanceof ir;
          if (q.name.startsWith("StaticCollider")) {
            const V = ft(q);
            return R.jsx(xt, {
              mesh: q,
              worldTransform: V,
              type: le ? "hull" : "polyline"
            }, q.uuid);
          }
          return le ? q.name === "Decorationwalls002" ? null : q.name === "Decorationramp1_Baked" || q.name === "Decorationbackgroundboxes_Baked" || q.name === "backboard_Baked" || q.name === "Decorationwalls003_Baked" || q.name === "lowercover_Baked" ? R.jsx("mesh", {
            name: q.name,
            geometry: q.geometry,
            material: new _t({
              map: q.material.emissiveMap
            }),
            position: q.position,
            rotation: q.rotation,
            scale: q.scale,
            children: Ht
          }, q.uuid) : (q.material.side = Dt, R.jsx("mesh", {
            name: q.name,
            geometry: q.geometry,
            material: q.material,
            position: q.position,
            rotation: q.rotation,
            scale: q.scale,
            children: Ht
          }, q.uuid)) : null;
        }
        return q instanceof m0 || q instanceof ni ? R.jsx("group", {
          name: q.name,
          position: q.position,
          rotation: q.rotation,
          scale: q.scale,
          children: Ht
        }, q.uuid) : null;
      }, Pi = Vt(e), Kr = {
        spawnPoint: N,
        deathPoint: oe,
        flippers: ue,
        ramps: Ce,
        shopifyRampLetters: Me,
        airplane: $,
        bottomDmd: ne,
        topDmd: Ie,
        floor: ie,
        lightMaskGroup: z,
        plungerDoor: re,
        slingshots: we,
        bumpers: ve,
        plungers: Ee,
        miniGameManager: Ge,
        retailStoresMiniGame: Oe,
        firstSaleMiniGame: Ve,
        milestoneMiniGame: Rt,
        fiveStarMiniGame: Ke,
        boxesMiniGame: st,
        cashRegisterMiniGame: Ot,
        podiumMiniGame: Jt,
        bumperCheatCode: tr,
        spinnerCheatCode: Rr,
        shoppyBallLock: Lr,
        laneSwitches: an,
        buttonTargets: gr,
        kickers: So,
        spinnerTargets: In,
        topDMDWorldTransform: xi,
        globeWorldTransform: cn,
        bumperDecoration: Ii,
        servers: Ti,
        sceneElements: Pi
      };
      return Fa.set(e, Kr), Kr;
    }, [
      e,
      t
    ]);
    return R.jsxs("group", {
      rotation: [
        kc * Math.PI / 180,
        0,
        0
      ],
      position: [
        0,
        Xd,
        0
      ],
      children: [
        t && R.jsx(yC, {}),
        o && R.jsx(of, {
          position: o,
          radius: Ob,
          sensor: true,
          collisionGroups: Tt([
            Pt
          ], [
            ct
          ]),
          onIntersectionEnter: (N) => {
            he("drain", {
              time: performance.now(),
              ball: N.other.object
            });
          }
        }),
        R.jsx(nS, {}),
        n && R.jsxs(R.Fragment, {
          children: [
            R.jsx(no, {
              spawnPoint: n,
              ballId: 0
            }),
            R.jsx(no, {
              spawnPoint: n,
              ballId: 1
            }),
            R.jsx(no, {
              spawnPoint: n,
              ballId: 2
            }),
            R.jsx(no, {
              spawnPoint: n,
              ballId: 3
            }),
            R.jsx(no, {
              spawnPoint: n,
              ballId: 4
            }),
            R.jsx(no, {
              spawnPoint: n,
              ballId: 5
            })
          ]
        }),
        i.map((N) => R.jsx(SS, {
          name: N.name,
          side: N.side,
          baseGroup: N.baseGroup,
          base: N.base,
          baseGlow: N.baseGlow,
          guard: N.guard,
          worldTransform: N.worldTransform
        }, N.base.uuid)),
        s.map((N) => R.jsx(HR, {
          name: N.name,
          colliderMesh: N.colliderMesh,
          rubberBandMesh0: N.rubberBandMesh0,
          rubberBandMesh1: N.rubberBandMesh1,
          rubberBandMesh2: N.rubberBandMesh2,
          side: N.side,
          worldTransform: N.worldTransform
        }, N.colliderMesh.uuid)),
        c.map((N) => R.jsx(us, {
          name: N.name,
          colliderMesh: N.colliderMesh,
          ringMesh: N.ringMesh,
          worldTransform: N.worldTransform,
          worldPositionOfBumperCenter: N.worldTransform.position.clone()
        }, N.colliderMesh.uuid)),
        l.map((N) => R.jsx(RR, {
          colliderMesh: N.colliderMesh,
          rodMesh: N.rodMesh,
          worldTransform: N.worldTransform
        }, N.colliderMesh.uuid)),
        b && g && R.jsx(FS, {
          mesh: b,
          lightMaskGroup: g
        }),
        _ && R.jsx(lc, {
          mesh: _.mesh,
          type: "bottom"
        }),
        !t && h && R.jsx(lc, {
          mesh: h.mesh,
          type: "top"
        }),
        f && R.jsx(MR, {
          colliderMesh: f.colliderMesh,
          doorMesh: f.doorMesh,
          sensor: f.sensor,
          worldTransform: f.worldTransform
        }),
        p && R.jsx(FR, {
          mesh: p.mesh
        }),
        a && R.jsx(R.Fragment, {
          children: a.map((N) => R.jsx(ER, {
            ...N
          }, N.name))
        }),
        y && A && R.jsx(mR, {
          colliderMesh: y.colliderMesh,
          fenceMesh: y.fenceMesh,
          worldTransform: y.worldTransform,
          worldTransformOfMiniGameArea: A.worldTransform
        }),
        d && a.length > 1 && R.jsx(OC, {
          mesh: d,
          curve: a[1].curvePath
        }),
        A && R.jsx(yR, {
          buildingMeshesGroup: A.buildingMeshesGroup,
          buildingColliderMesh: A.buildingCollider,
          doorSensorMesh: A.doorSensor,
          ballTarget0: A.ballTarget0,
          ballTarget1: A.ballTarget1,
          ballTarget2: A.ballTarget2,
          worldTransform: A.worldTransform
        }),
        C && R.jsx(sR, {
          towerGroup: C.towerGroup,
          towerMeshes: C.towerMeshes,
          towerColliderMesh: C.towerColliderMesh,
          ballTarget0: C.ballTarget0,
          ballTarget1: C.ballTarget1,
          ballTarget2: C.ballTarget2,
          worldTransform: C.worldTransform
        }),
        S && R.jsx(fR, {
          trophyGroup: S.trophyGroup,
          shoppingBagMesh: S.shoppingBagMesh,
          shopifyLogoMesh: S.shopifyLogoMesh,
          colliderMesh: S.colliderMesh,
          backColliderMesh: S.backColliderMesh,
          otherMeshes: S.otherMeshes,
          worldTransform: S.worldTransform
        }),
        B && R.jsx(uR, {
          floorMesh: B.floorMesh,
          targetMeshes: B.targetMeshes,
          targetColliders: B.targetColliders,
          worldTransform: B.worldTransform
        }),
        T && R.jsx(zS, {
          floorMesh: T.floorMesh,
          mainBoxMesh: T.mainBoxMesh,
          ringOfBoxesMesh: T.ringOfBoxesMesh,
          mainBoxLeftFlapMesh: T.mainBoxLeftFlapMesh,
          mainBoxRightFlapMesh: T.mainBoxRightFlapMesh,
          doorSensorMesh: T.doorSensorMesh,
          mainBoxColliderMesh: T.mainBoxColliderMesh,
          ringOfBoxesColliderMesh: T.ringOfBoxesColliderMesh,
          closedBoxColliderMesh: T.closedBoxColliderMesh,
          worldTransform: T.worldTransform
        }),
        E && R.jsx(oR, {
          floorMesh: E.floorMesh,
          cashRegisterMesh: E.cashRegisterMesh,
          cashRegisterDrawerMesh: E.cashRegisterDrawerMesh,
          cashRegisterColliderMesh: E.cashRegisterColliderMesh,
          screenTarget: E.screenTarget,
          worldTransform: E.worldTransform
        }),
        M && R.jsx(mC, {
          floorMesh: M.floorMesh,
          podiumMeshes: M.podiumMeshes,
          podiumColliderMeshes: M.podiumColliderMeshes,
          worldTransform: M.worldTransform
        }),
        x && R.jsx(sS, {
          bumperGroups: x.bumperGroups,
          worldTransform: x.worldTransform
        }),
        P && R.jsx(JR, {
          spinnerGroups: P.spinnerGroups,
          worldTransform: P.worldTransform
        }),
        D && R.jsx(LR, {
          bodyMesh: D.bodyMesh,
          armsMesh: D.armsMesh,
          ballTarget: D.ballTarget,
          ballTargetWorldPosition: D.ballTargetWorldPosition,
          worldTransform: D.worldTransform
        }),
        H && R.jsx(R.Fragment, {
          children: H.map((N) => R.jsx(xt, {
            mesh: N.sensor,
            worldTransform: N.worldTransform,
            type: N.sensor instanceof ir ? "hull" : "polyline",
            sensor: true,
            onIntersectionEnter: N.onIntersectionEnter
          }, N.name))
        }),
        k && R.jsx(R.Fragment, {
          children: k.map((N) => R.jsx(fS, {
            name: N.name,
            targetMesh: N.targetMesh,
            sensor: N.sensor,
            worldTransform: N.worldTransform
          }, N.name))
        }),
        J.map((N) => R.jsx(GS, {
          rodColliderMesh: N.rodColliderMesh,
          rodMesh: N.rodMesh,
          doorColliderMesh: N.doorColliderMesh,
          doorMesh: N.doorMesh,
          worldTransform: N.worldTransform
        }, N.rodColliderMesh.uuid)),
        W.map((N) => R.jsx(ol, {
          spinnerGroup: N.spinnerGroup,
          spinnerWireMesh: N.spinnerWireMesh,
          spinnerTargetMesh: N.spinnerTargetMesh,
          spinnerFrameMesh: N.spinnerFrameMesh,
          sensor: N.sensor,
          worldTransform: N.worldTransform
        }, N.spinnerGroup.uuid)),
        Z && R.jsx("group", {
          position: Z.position,
          quaternion: Z.quaternion,
          children: R.jsx("group", {
            position: [
              0,
              0.01,
              0
            ],
            children: R.jsx(Sa, {
              shape: "rectangle",
              width: 0.31,
              height: 0.08,
              cornerRadius: 0.01,
              rotation: [
                -0.5 * Math.PI,
                0,
                0
              ],
              menuMode: tt.Globe
            })
          })
        }),
        j && R.jsxs(R.Fragment, {
          children: [
            R.jsx(Cv, {
              globePosition: j.position.clone()
            }),
            R.jsx("group", {
              position: j.position,
              quaternion: j.quaternion,
              children: R.jsx(Sa, {
                shape: "circle",
                radius: 0.11,
                menuMode: tt.Globe
              })
            })
          ]
        }),
        R.jsx("group", {
          position: [
            0,
            0.115,
            0
          ],
          children: R.jsx(Sa, {
            shape: "rectangle",
            width: 0.55,
            height: 1.175,
            cornerRadius: 0.01,
            position: [
              0,
              -0.02,
              0.01
            ],
            rotation: [
              -0.5 * Math.PI,
              0,
              0
            ],
            menuMode: tt.Pinball
          })
        }),
        U,
        S && R.jsx("group", {
          position: S.worldTransform.position,
          quaternion: S.worldTransform.quaternion,
          scale: S.worldTransform.scale,
          children: R.jsx(hS, {})
        }),
        K && R.jsx(dS, {
          mesh: K
        }),
        Q && R.jsx(PR, {
          mesh: Q
        }),
        R.jsx(LS, {})
      ]
    });
  }
  const KR = () => {
    const r = u.useRef(1), e = (t) => {
      L.getState().numBallsRemaining === 0 || Ft.getState().menuMode !== tt.Pinball || L.getState().addToScore(t * r.current);
    };
    return u.useEffect(() => se.on("collision", (t) => {
      switch (t.type) {
        case "bumper":
          e(500);
          break;
        case "slingshot":
          e(500);
          break;
      }
    }), []), u.useEffect(() => se.on("buttonTargetPressed", (t) => {
      e(5e3);
    }), []), u.useEffect(() => se.on("launched", (t) => {
      e(1500);
    }), []), u.useEffect(() => L.subscribe((t) => t.numBallsRemaining, (t) => {
      t > 0 && e(1e4);
    }), []), u.useEffect(() => se.on("laneEvent", ({ type: t }) => {
      switch (t) {
        case "rolloverLane":
          e(2e3);
          break;
        case "outlane":
          e(2e4);
          break;
        case "sideLane":
          e(5e3);
          break;
      }
    }), []), u.useEffect(() => se.on("ballReachedLockTarget", (t) => {
      t.type === yt.Retail ? e(7500) : t.type === yt.Shoppy && e(1e4);
    }), []), u.useEffect(() => se.on("retailStoresMiniGameCompleted", (t) => {
      e(5e4);
    }), []), u.useEffect(() => se.on("fiveStarMiniGameCompleted", (t) => {
      e(35e3);
    }), []), u.useEffect(() => se.on("cashRegisterMiniGameCompleted", (t) => {
      e(35e3);
    }), []), u.useEffect(() => se.on("boxesMiniGameCompleted", (t) => {
      e(35e3);
    }), []), u.useEffect(() => se.on("podiumMiniGameCompleted", (t) => {
      e(35e3);
    }), []), u.useEffect(() => se.on("allMiniGamesMissionCompleted", (t) => {
      e(5e5);
    }), []), u.useEffect(() => se.on("ballSave", (t) => {
      e(1e3);
    }), []), u.useEffect(() => se.on("gameOver", (t) => {
      L.getState().setNumBallsRemaining(3), L.getState().setScore(0);
    }), []), u.useEffect(() => se.on("rampExit", ({ name: t, success: n }) => {
      n && (t === "RampGroup1" ? e(2e4) : t === "RampGroup2" && e(1e4));
    }), []), u.useEffect(() => se.on("spinnerTargetCompletedRotation", (t) => {
      e(500);
    }), []), u.useEffect(() => se.on("milestone", (t) => {
      t.type === "10k" ? r.current = 10 : t.type === "100k" ? r.current = 50 : t.type === "1M" ? r.current = 100 : r.current = 1;
    }), []), u.useEffect(() => se.on("milestoneTrophyHit", (t) => {
      e(5e3);
    }), []), u.useEffect(() => se.on("shopLettersComplete", (t) => {
      e(5e4);
    }), []), u.useEffect(() => se.on("airplaneMissionCompleted", (t) => {
      e(5e4);
    }), []), u.useEffect(() => se.on("rolloverLanesComplete", (t) => {
      e(2e4);
    }), []), u.useEffect(() => se.on("bfcmLettersComplete", (t) => {
      e(5e4);
    }), []), u.useEffect(() => L.subscribe((t) => t.shopifyLettersMissionCompleted, (t) => {
      t && e(5e4);
    }), []), u.useEffect(() => se.on("fiveStarTargetHit", (t) => {
      e(5e3);
    }), []), u.useEffect(() => se.on("firstSaleMultiball", (t) => {
      e(5e4);
    }), []), u.useEffect(() => se.on("cashRegisterHit", (t) => {
      e(5e3);
    }), []), u.useEffect(() => L.subscribe((t) => t.singleMiniGameMissionCompleted, (t) => {
      t && e(5e4);
    }), []), null;
  };
  var QR = `uniform float time;

varying vec2 vUv;

vec3 pal(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float lerpFactor = mod(((1.0 - vUv.x) - time * 1.5) * 2.0, 1.0);
  vec3 rainbowColor = pal(lerpFactor, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.0, 0.33, 0.67));
  gl_FragColor = vec4(rainbowColor * 5.0, vUv.x * vUv.x);
}`, XR = `attribute float side;
attribute float width;

varying vec2 vUv;

const float lineWidth = 0.01;

void main() {
  vUv = uv;
  vec3 offset = normal * (lineWidth * width * 0.5 * side);
  gl_Position = projectionMatrix * viewMatrix * vec4(position + offset, 1.0);
}`;
  class qR extends Nn {
    constructor() {
      super();
      __publicField(this, "positions", []);
      __publicField(this, "normals", []);
      __publicField(this, "side", []);
      __publicField(this, "width", []);
      __publicField(this, "uvs", []);
      __publicField(this, "indicesArray", []);
      __publicField(this, "widthCallback");
      __publicField(this, "_attributes");
    }
    setPointsAndNormals(e, t, n) {
      this.widthCallback = n === void 0 ? void 0 : n, this.positions = [], this.normals = [];
      for (let o = 0; o < e.length; o += 3) this.positions.push(e[o], e[o + 1], e[o + 2]), this.positions.push(e[o], e[o + 1], e[o + 2]), this.normals.push(t[o], t[o + 1], t[o + 2]), this.normals.push(t[o], t[o + 1], t[o + 2]);
      this.process();
    }
    process() {
      const e = this.positions.length / 6;
      this.side = [], this.width = [], this.indicesArray = [], this.uvs = [];
      let t;
      for (let n = 0; n < e; n++) if (this.side.push(1), this.side.push(-1), this.widthCallback === void 0 ? t = 1 : t = this.widthCallback(n / (e - 1)), this.width.push(t), this.width.push(t), this.uvs.push(n / (e - 1), 0), this.uvs.push(n / (e - 1), 1), n < e - 1) {
        const o = n * 2;
        this.indicesArray.push(o, o + 1, o + 2), this.indicesArray.push(o + 2, o + 1, o + 3);
      }
      this._attributes ? (this._attributes.position.copyArray(new Float32Array(this.positions)), this._attributes.position.needsUpdate = true, this._attributes.side.copyArray(new Float32Array(this.side)), this._attributes.side.needsUpdate = true, this._attributes.width.copyArray(new Float32Array(this.width)), this._attributes.width.needsUpdate = true, this._attributes.uv.copyArray(new Float32Array(this.uvs)), this._attributes.uv.needsUpdate = true, this._attributes.index.copyArray(new Uint16Array(this.indicesArray)), this._attributes.index.needsUpdate = true, this._attributes.normal.copyArray(new Float32Array(this.normals)), this._attributes.normal.needsUpdate = true) : this._attributes = {
        position: new ht(new Float32Array(this.positions), 3),
        side: new ht(new Float32Array(this.side), 1),
        width: new ht(new Float32Array(this.width), 1),
        uv: new ht(new Float32Array(this.uvs), 2),
        index: new ht(new Uint16Array(this.indicesArray), 1),
        normal: new ht(new Float32Array(this.normals), 3)
      }, this.setAttribute("position", this._attributes.position), this.setAttribute("side", this._attributes.side), this.setAttribute("width", this._attributes.width), this.setAttribute("uv", this._attributes.uv), this.setAttribute("normal", this._attributes.normal), this.setIndex(this._attributes.index), this.computeBoundingSphere(), this.computeBoundingBox();
    }
  }
  const h0 = new F(0, 1, 0), x2 = new F(), P2 = (r, e = 1) => (r.set(r.subarray(e)), r.fill(-1 / 0, -e), r), sf = u.forwardRef(({ target: r, verticalOffset: e = 0, attenuation: t, length: n = 1, decay: o = 1, stride: i = 0, interval: s = 1 }, c) => {
    const l = u.useRef(null), a = u.useRef(null), p = u.useRef(new F()), f = u.useRef(new F(1, 0, 0)), d = u.useRef(new F()), _ = u.useRef(0), h = u.useRef(null), b = u.useRef(true), g = u.useMemo(() => new qR(), []), y = u.useMemo(() => new sr({
      uniforms: {
        time: {
          value: 0
        }
      },
      vertexShader: XR,
      fragmentShader: QR,
      side: m9,
      transparent: true
    }), []), A = u.useCallback(() => {
      if (r) {
        r.getWorldPosition(p.current), p.current.addScaledVector(h0, e);
        const T = x2.copy(p.current).sub(d.current).normalize().cross(h0).normalize();
        f.current.copy(T), l.current = Float32Array.from({
          length: n * 10 * 3
        }, (E, M) => p.current.getComponent(M % 3)), a.current = Float32Array.from({
          length: n * 10 * 3
        }, (E, M) => f.current.getComponent(M % 3)), g.setPointsAndNormals(l.current, a.current, t);
      }
    }, [
      n,
      t,
      g,
      r,
      e
    ]), C = u.useCallback(() => {
      b.current || (h.current && (h.current.visible = false), A(), b.current = true);
    }, [
      A
    ]), S = u.useCallback(() => {
      b.current && (h.current && (h.current.visible = true), A(), b.current = false);
    }, [
      A
    ]);
    return u.useLayoutEffect(() => {
      A();
    }, [
      A
    ]), it(({ clock: B }) => {
      if (!(!r || !l.current || !a.current || b.current)) {
        if (_.current === 0) {
          r.getWorldPosition(p.current), p.current.addScaledVector(h0, e), p.current.distanceTo(d.current) > 0.25 && A();
          const M = x2.copy(p.current).sub(d.current).normalize().cross(h0).normalize();
          f.current.copy(M);
          const x = o;
          if (p.current.distanceTo(d.current) >= i) for (let P = 0; P < x; P++) P2(l.current, 3), P2(a.current, 3), l.current.set(p.current.toArray(), l.current.length - 3), a.current.set(f.current.toArray(), a.current.length - 3);
          d.current.copy(p.current);
        }
        _.current++, _.current %= s, g.setPointsAndNormals(l.current, a.current, t), y.uniforms.time.value = B.elapsedTime;
      }
    }), u.useImperativeHandle(c, () => ({
      stopTrail: C,
      startTrail: S
    })), R.jsx("mesh", {
      ref: h,
      geometry: g,
      material: y,
      visible: false
    });
  });
  sf.displayName = "Trail";
  const YR = 7.5, ZR = 0, $R = 2;
  function eM() {
    const r = L((n) => n.ballMeshRefs), e = u.useRef(Array(6).fill(null)), t = u.useRef(false);
    return u.useEffect(() => {
      const n = xr.subscribe((i) => i.enabledCheatIds.has("rainbowBallTrails"), (i) => {
        t.current = i;
        const s = L.getState().ballsInPlay;
        i ? e.current.forEach((c, l) => {
          s[l] ? c == null ? void 0 : c.startTrail() : c == null ? void 0 : c.stopTrail();
        }) : e.current.forEach((c) => c == null ? void 0 : c.stopTrail());
      }), o = L.subscribe((i) => i.ballsInPlay, (i) => {
        xr.getState().enabledCheatIds.has("rainbowBallTrails") && i.forEach((c, l) => {
          var _a2, _b2;
          c ? (_a2 = e.current[l]) == null ? void 0 : _a2.startTrail() : (_b2 = e.current[l]) == null ? void 0 : _b2.stopTrail();
        });
      });
      return () => {
        n(), o();
      };
    }, []), !r[0] || !r[1] || !r[2] || !r[3] || !r[4] || !r[5] ? null : R.jsx(R.Fragment, {
      children: r.map((n, o) => R.jsx(sf, {
        ref: (i) => {
          e.current[o] = i;
        },
        target: n,
        verticalOffset: ZR,
        length: YR,
        decay: $R
      }, `ball-trail-${o}`))
    });
  }
  OM = function({ modelUrl: r }) {
    return R.jsxs(R.Fragment, {
      children: [
        R.jsxs(Wb, {
          children: [
            R.jsx(Kb, {}),
            R.jsx(VR, {
              modelUrl: r
            })
          ]
        }),
        R.jsx(KR, {}),
        R.jsx(lp, {}),
        R.jsx(eM, {})
      ]
    });
  };
  const hn = ({ listener: r, buffer: e, initialVolume: t = 0, autoPlay: n = true }) => {
    const o = u.useMemo(() => {
      const _ = new q2(r);
      return _.setBuffer(e), _.loop = true, _.gain.gain.value = t, _;
    }, [
      r,
      e,
      t
    ]);
    u.useEffect(() => {
      const _ = Le.subscribe((h) => h.isAudioEnabled, (h) => {
        h ? n && o.play() : o.stop();
      }, {
        fireImmediately: true
      });
      return () => {
        _();
      };
    }, [
      r,
      o,
      n
    ]), u.useEffect(() => () => {
      o.stop(), o.disconnect();
    }, [
      o
    ]);
    const i = u.useCallback((_ = 1e3) => {
      const h = o.context.currentTime, b = _ / 1e3;
      o.gain.gain.cancelScheduledValues(h), o.gain.gain.setValueAtTime(1e-3, h), o.gain.gain.exponentialRampToValueAtTime(t, h + b);
    }, [
      o,
      t
    ]), s = u.useCallback((_ = 1e3) => {
      const h = o.context.currentTime, b = _ / 1e3;
      o.gain.gain.cancelScheduledValues(h), o.gain.gain.setValueAtTime(o.gain.gain.value, h), o.gain.gain.exponentialRampToValueAtTime(1e-3, h + b);
    }, [
      o
    ]), c = u.useCallback(() => {
      o.stop(), o.play();
    }, [
      o
    ]), l = u.useCallback(() => {
      o.play();
    }, [
      o
    ]), a = u.useCallback(() => {
      o.stop();
    }, [
      o
    ]), p = u.useCallback((_) => {
      o.setVolume(_);
    }, [
      o
    ]), f = u.useCallback((_) => {
      o.source && (o.source.playbackRate.value = _);
    }, [
      o
    ]), d = u.useCallback((_) => {
      o.source && (o.source.detune.value = _);
    }, [
      o
    ]);
    return {
      audioSource: o,
      play: l,
      stop: a,
      restart: c,
      fadeIn: i,
      fadeOut: s,
      setVolume: p,
      setPlaybackRate: f,
      setPitch: d
    };
  };
  HM = function() {
    const r = u.useRef(false), e = u.useRef([]), t = u.useRef([]), n = u.useCallback((K, Q) => {
      r.current ? e.current.push({
        soundType: K,
        volume: Q
      }) : K !== Te.BallHit && t.current.push({
        soundType: K,
        volume: Q
      });
    }, []);
    u.useEffect(() => {
      Le.getState().setAddSoundToQueue(n);
    }, [
      n
    ]);
    const o = u.useCallback(() => {
      const K = Le.getState();
      K.isAudioEnabled || (K.setIsAudioEnabled(true), r.current = true, e.current.push(...t.current), t.current = []), document.removeEventListener("click", o), document.removeEventListener("touchstart", o), document.removeEventListener("keydown", o);
    }, []);
    u.useEffect(() => (document.addEventListener("click", o), document.addEventListener("touchstart", o), document.addEventListener("keydown", o), () => {
      document.removeEventListener("click", o), document.removeEventListener("touchstart", o), document.removeEventListener("keydown", o);
    }), [
      o
    ]);
    const i = Ue((K) => K.camera), s = u.useMemo(() => new g9(), []);
    u.useEffect(() => (i.add(s), () => {
      i.remove(s);
    }), [
      i,
      s
    ]);
    const c = Sn(w9, Object.values(ps).map((K) => K.url)), l = u.useMemo(() => {
      const K = {};
      return Object.keys(ps).forEach((Q, Z) => {
        K[Q] = c[Z];
      }), K;
    }, [
      c
    ]), a = u.useMemo(() => Array.from({
      length: 20
    }, () => new q2(s)), [
      s
    ]), p = 6, f = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), d = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), _ = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), h = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), b = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), g = hn({
      listener: s,
      buffer: l[Te.BallRolling],
      autoPlay: false
    }), y = u.useMemo(() => [
      f,
      d,
      _,
      h,
      b,
      g
    ], [
      f,
      d,
      _,
      h,
      b,
      g
    ]), A = u.useRef(Array(p).fill(false)), C = u.useRef(Array(p).fill(0)), S = u.useRef(Array(p).fill(0)), B = 0.2, T = 2e3, E = hn({
      listener: s,
      buffer: l[Te.BackgroundMusic],
      initialVolume: B,
      autoPlay: false
    }), M = u.useRef(null);
    u.useEffect(() => {
      const K = Ft.subscribe((Q) => Q.menuMode, (Q) => {
        const Z = E.audioSource;
        if (Q === tt.Pinball) M.current !== null && (clearTimeout(M.current), M.current = null), Z.isPlaying || (Z.play(), Z.gain.gain.setValueAtTime(1e-3, Z.context.currentTime)), E.fadeIn(T);
        else if (Z.isPlaying) {
          const j = Z.context.currentTime, U = T / 1e3;
          Z.gain.gain.cancelScheduledValues(j), Z.gain.gain.setValueAtTime(Z.gain.gain.value, j), Z.gain.gain.exponentialRampToValueAtTime(1e-3, j + U), M.current = window.setTimeout(() => {
            Z.isPlaying && Z.stop(), M.current = null;
          }, T);
        }
      });
      return () => {
        K(), M.current !== null && clearTimeout(M.current);
      };
    }, [
      E,
      T
    ]);
    const x = u.useCallback(() => {
      function K() {
        return a.find((Q) => !Q.isPlaying);
      }
      for (; e.current.length; ) {
        const Q = K();
        if (Q) {
          const Z = e.current.shift();
          if (Z === void 0) return;
          const j = ps[Z.soundType];
          Q.setBuffer(l[Z.soundType]), Z.volume === void 0 ? Q.setVolume(j.volume || 1) : Q.setVolume(Z.volume), Q.setPlaybackRate(j.playbackRate || 1), j.basePitch && j.maxPitchVariation ? Q.detune = j.basePitch + j.maxPitchVariation * Math.random() : j.basePitch ? Q.detune = j.basePitch : j.maxPitchVariation ? Q.detune = j.maxPitchVariation * Math.random() : Q.detune = 0, Q.play();
        } else break;
      }
    }, [
      a,
      l
    ]);
    u.useEffect(() => {
      const K = Le.subscribe((Q) => Q.isMuted, (Q) => {
        s.setMasterVolume(Q ? 0 : 1);
      });
      return () => {
        K();
      };
    }, [
      s
    ]);
    const P = u.useCallback((K, Q, Z, j, U) => {
      let N = 0, oe = 0;
      K > U.minThreshold && (N = Math.min(K / U.volumeDivisor, 1), oe = (K - U.detuneCenter) * U.detuneFactor), C.current[Q] += (N - C.current[Q]) * U.smoothingFactor, S.current[Q] += (oe - S.current[Q]) * U.smoothingFactor, Z(C.current[Q]), j(S.current[Q]);
    }, []), D = {
      minThreshold: 0.05,
      volumeDivisor: 30,
      detuneFactor: 16,
      detuneCenter: 4,
      smoothingFactor: 0.2
    }, H = {
      minThreshold: 0.05,
      volumeDivisor: 25,
      detuneFactor: 16,
      detuneCenter: 4,
      smoothingFactor: 0.2
    }, k = 0.1, J = 2e3, W = hn({
      listener: s,
      buffer: l[Te.Cheer],
      initialVolume: k,
      autoPlay: false
    });
    return u.useEffect(() => se.on("crowdCheer", (K) => {
      var _a2;
      const Q = W.audioSource;
      if (K.startCheering) Q.isPlaying || (Q.play(), Q.gain.gain.setValueAtTime(1e-3, Q.context.currentTime)), W.fadeIn(J);
      else {
        const Z = Q.context.currentTime, j = J / 1e3;
        Q.gain.gain.cancelScheduledValues(Z), Q.gain.gain.setValueAtTime(Q.gain.gain.value, Z), Q.gain.gain.exponentialRampToValueAtTime(1e-3, Z + j), (_a2 = Q.source) == null ? void 0 : _a2.stop(Z + j);
      }
    }), [
      W,
      J
    ]), it(() => {
      x();
      const K = L.getState().ballSpeeds, Q = L.getState().ballIsLockedToCurve, Z = L.getState().ballsInPlay;
      for (let j = 0; j < p; j++) {
        const U = Z[j], N = y[j].audioSource;
        if (!U) {
          N.isPlaying && N.stop(), C.current[j] = 0, S.current[j] = 0;
          continue;
        }
        N.isPlaying || N.play();
        const oe = K[j] || 0, ue = Q[j] || false;
        if (A.current[j] !== ue) {
          const ve = ue ? l[Te.BallRollingOnRail] : l[Te.BallRolling];
          N.stop(), N.setBuffer(ve), N.play(), A.current[j] = ue;
        }
        const we = ue ? H : D;
        P(oe, j, y[j].setVolume, y[j].setPitch, we);
      }
    }), null;
  };
  const tM = "/cdn.shopify.com/shopifycloud/data_stories_website/assets/spaceship-IM8MImr4.exr";
  kM = function() {
    return R.jsxs(R.Fragment, {
      children: [
        R.jsx(F5, {
          files: tM,
          environmentIntensity: 0.47,
          environmentRotation: [
            0,
            4.09,
            0
          ]
        }),
        R.jsx("ambientLight", {
          intensity: 0.23
        })
      ]
    });
  };
});
export {
  Ka as $,
  Dd as A,
  Ld as B,
  Gd as C,
  Hc as D,
  zt as E,
  xM as F,
  FM as G,
  IM as H,
  TM as I,
  bp as J,
  PM as K,
  Lt as L,
  mM as M,
  GM as N,
  RM as O,
  iM as P,
  MM as Q,
  qt as R,
  Bd as S,
  Ya as T,
  Xa as U,
  fe as V,
  qa as W,
  Od as X,
  Ud as Y,
  P0 as Z,
  kt as _,
  __tla,
  gM as a,
  kd as a0,
  Db as a1,
  li as a2,
  Hd as a3,
  Qd as a4,
  ao as a5,
  es as a6,
  Jd as a7,
  LM as a8,
  $0 as a9,
  aM as aA,
  rl as aB,
  K5 as aC,
  X5 as aD,
  V5 as aE,
  _M as aF,
  fM as aG,
  dM as aH,
  Ed as aI,
  hM as aJ,
  Q5 as aK,
  pM as aL,
  oM as aM,
  Ru as aN,
  SM as aO,
  Qa as aa,
  jd as ab,
  Wd as ac,
  Nd as ad,
  ar as ae,
  Ri as af,
  ui as ag,
  er as ah,
  o1 as ai,
  Lb as aj,
  Kd as ak,
  n1 as al,
  zd as am,
  Fb as an,
  Vd as ao,
  cp as ap,
  J0 as aq,
  oA as ar,
  iA as as,
  Sa as at,
  ft as au,
  tl as av,
  sM as aw,
  uM as ax,
  cM as ay,
  lM as az,
  AM as b,
  CM as c,
  tp as d,
  np as e,
  wM as f,
  bM as g,
  yM as h,
  vM as i,
  Be as j,
  zn as k,
  HM as l,
  kM as m,
  OM as n,
  Bt as o,
  bo as p,
  BM as q,
  Tc as r,
  EM as s,
  rn as t,
  vt as u,
  Rn as v,
  En as w,
  Lu as x,
  Mn as y,
  jn as z
};
