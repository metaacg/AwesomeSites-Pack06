import { V as o, R as b, o as gt, p as bt, q as R, s as E, t as A, v as St, w as Pt, x as Ct, y as Rt, z as vt, A as X, B as D, C as M, D as K, E as yt, F as At, G as It, H as Et, I as _t, J as Tt, K as Dt, L as Mt, N as L, O as Lt, Q as zt, T as Nt, U as jt, W as xt, X as Bt, Y as Gt, Z as Jt, _ as Wt, $ as Ut, a0 as Ft, a1 as Ot, a2 as Xt, a3 as Kt, a4 as Vt, a5 as Ht, a6 as Yt, a7 as kt, a8 as qt, a9 as Zt, aa as $t, ab as Qt, ac as te, ad as ee, ae as ie, af as re, ag as ae, ah as se, ai as ne, aj as oe, ak as le, al as he, am as ce, an as de, ao as we, __tla as __tla_0 } from "./SceneEnvironment-Bkc1nHvp.js";
import { __tla as __tla_1 } from "./application-CtunUkHU.js";
import "./audio-stop-CE8PsAHr.js";
import "./volleyball_map-BEG_dgXk.js";
let nt, at, wt, mt, ct, dt, Y, tt, P, Q, H, st, j, v, f, ut, N, y, rt, ot, ht, B, pt, Z, et, G, $, it, z, S, V, g, k, x, q, lt, J, W, T, Se, pe, ue;
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
  (function(a) {
    a[a.Dynamic = 0] = "Dynamic", a[a.Fixed = 1] = "Fixed", a[a.KinematicPositionBased = 2] = "KinematicPositionBased", a[a.KinematicVelocityBased = 3] = "KinematicVelocityBased";
  })(g || (g = {}));
  z = class {
    constructor(t, e, i) {
      this.rawSet = t, this.colliderSet = e, this.handle = i;
    }
    finalizeDeserialization(t) {
      this.colliderSet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    lockTranslations(t, e) {
      return this.rawSet.rbLockTranslations(this.handle, t, e);
    }
    lockRotations(t, e) {
      return this.rawSet.rbLockRotations(this.handle, t, e);
    }
    setEnabledTranslations(t, e, i) {
      return this.rawSet.rbSetEnabledTranslations(this.handle, t, e, i);
    }
    restrictTranslations(t, e, i) {
      this.setEnabledTranslations(t, t, i);
    }
    dominanceGroup() {
      return this.rawSet.rbDominanceGroup(this.handle);
    }
    setDominanceGroup(t) {
      this.rawSet.rbSetDominanceGroup(this.handle, t);
    }
    additionalSolverIterations() {
      return this.rawSet.rbAdditionalSolverIterations(this.handle);
    }
    setAdditionalSolverIterations(t) {
      this.rawSet.rbSetAdditionalSolverIterations(this.handle, t);
    }
    enableCcd(t) {
      this.rawSet.rbEnableCcd(this.handle, t);
    }
    setSoftCcdPrediction(t) {
      this.rawSet.rbSetSoftCcdPrediction(this.handle, t);
    }
    softCcdPrediction() {
      return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
      let t = this.rawSet.rbTranslation(this.handle);
      return o.fromRaw(t);
    }
    rotation() {
      let t = this.rawSet.rbRotation(this.handle);
      return b.fromRaw(t);
    }
    nextTranslation() {
      let t = this.rawSet.rbNextTranslation(this.handle);
      return o.fromRaw(t);
    }
    nextRotation() {
      let t = this.rawSet.rbNextRotation(this.handle);
      return b.fromRaw(t);
    }
    setTranslation(t, e) {
      this.rawSet.rbSetTranslation(this.handle, t.x, t.y, e);
    }
    setLinvel(t, e) {
      let i = o.intoRaw(t);
      this.rawSet.rbSetLinvel(this.handle, i, e), i.free();
    }
    gravityScale() {
      return this.rawSet.rbGravityScale(this.handle);
    }
    setGravityScale(t, e) {
      this.rawSet.rbSetGravityScale(this.handle, t, e);
    }
    setRotation(t, e) {
      this.rawSet.rbSetRotation(this.handle, t, e);
    }
    setAngvel(t, e) {
      this.rawSet.rbSetAngvel(this.handle, t, e);
    }
    setNextKinematicTranslation(t) {
      this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y);
    }
    setNextKinematicRotation(t) {
      this.rawSet.rbSetNextKinematicRotation(this.handle, t);
    }
    linvel() {
      return o.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    velocityAtPoint(t) {
      const e = o.intoRaw(t);
      let i = o.fromRaw(this.rawSet.rbVelocityAtPoint(this.handle, e));
      return e.free(), i;
    }
    angvel() {
      return this.rawSet.rbAngvel(this.handle);
    }
    mass() {
      return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
      return o.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
      return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
      return o.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
      return o.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertia() {
      return this.rawSet.rbInvPrincipalInertia(this.handle);
    }
    principalInertia() {
      return this.rawSet.rbPrincipalInertia(this.handle);
    }
    effectiveWorldInvInertia() {
      return this.rawSet.rbEffectiveWorldInvInertia(this.handle);
    }
    effectiveAngularInertia() {
      return this.rawSet.rbEffectiveAngularInertia(this.handle);
    }
    sleep() {
      this.rawSet.rbSleep(this.handle);
    }
    wakeUp() {
      this.rawSet.rbWakeUp(this.handle);
    }
    isCcdEnabled() {
      return this.rawSet.rbIsCcdEnabled(this.handle);
    }
    numColliders() {
      return this.rawSet.rbNumColliders(this.handle);
    }
    collider(t) {
      return this.colliderSet.get(this.rawSet.rbCollider(this.handle, t));
    }
    setEnabled(t) {
      this.rawSet.rbSetEnabled(this.handle, t);
    }
    isEnabled() {
      return this.rawSet.rbIsEnabled(this.handle);
    }
    bodyType() {
      return this.rawSet.rbBodyType(this.handle);
    }
    setBodyType(t, e) {
      return this.rawSet.rbSetBodyType(this.handle, t, e);
    }
    isSleeping() {
      return this.rawSet.rbIsSleeping(this.handle);
    }
    isMoving() {
      return this.rawSet.rbIsMoving(this.handle);
    }
    isFixed() {
      return this.rawSet.rbIsFixed(this.handle);
    }
    isKinematic() {
      return this.rawSet.rbIsKinematic(this.handle);
    }
    isDynamic() {
      return this.rawSet.rbIsDynamic(this.handle);
    }
    linearDamping() {
      return this.rawSet.rbLinearDamping(this.handle);
    }
    angularDamping() {
      return this.rawSet.rbAngularDamping(this.handle);
    }
    setLinearDamping(t) {
      this.rawSet.rbSetLinearDamping(this.handle, t);
    }
    recomputeMassPropertiesFromColliders() {
      this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
    }
    setAdditionalMass(t, e) {
      this.rawSet.rbSetAdditionalMass(this.handle, t, e);
    }
    setAdditionalMassProperties(t, e, i, r) {
      let s = o.intoRaw(e);
      this.rawSet.rbSetAdditionalMassProperties(this.handle, t, s, i, r), s.free();
    }
    setAngularDamping(t) {
      this.rawSet.rbSetAngularDamping(this.handle, t);
    }
    resetForces(t) {
      this.rawSet.rbResetForces(this.handle, t);
    }
    resetTorques(t) {
      this.rawSet.rbResetTorques(this.handle, t);
    }
    addForce(t, e) {
      const i = o.intoRaw(t);
      this.rawSet.rbAddForce(this.handle, i, e), i.free();
    }
    applyImpulse(t, e) {
      const i = o.intoRaw(t);
      this.rawSet.rbApplyImpulse(this.handle, i, e), i.free();
    }
    addTorque(t, e) {
      this.rawSet.rbAddTorque(this.handle, t, e);
    }
    applyTorqueImpulse(t, e) {
      this.rawSet.rbApplyTorqueImpulse(this.handle, t, e);
    }
    addForceAtPoint(t, e, i) {
      const r = o.intoRaw(t), s = o.intoRaw(e);
      this.rawSet.rbAddForceAtPoint(this.handle, r, s, i), r.free(), s.free();
    }
    applyImpulseAtPoint(t, e, i) {
      const r = o.intoRaw(t), s = o.intoRaw(e);
      this.rawSet.rbApplyImpulseAtPoint(this.handle, r, s, i), r.free(), s.free();
    }
    userForce() {
      return o.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
      return this.rawSet.rbUserTorque(this.handle);
    }
  };
  S = class {
    constructor(t) {
      this.enabled = true, this.status = t, this.translation = o.zeros(), this.rotation = b.identity(), this.gravityScale = 1, this.linvel = o.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = o.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = 0, this.principalAngularInertia = 0, this.rotationsEnabled = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.softCcdPrediction = 0, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
    }
    static dynamic() {
      return new S(g.Dynamic);
    }
    static kinematicPositionBased() {
      return new S(g.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
      return new S(g.KinematicVelocityBased);
    }
    static fixed() {
      return new S(g.Fixed);
    }
    static newDynamic() {
      return new S(g.Dynamic);
    }
    static newKinematicPositionBased() {
      return new S(g.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
      return new S(g.KinematicVelocityBased);
    }
    static newStatic() {
      return new S(g.Fixed);
    }
    setDominanceGroup(t) {
      return this.dominanceGroup = t, this;
    }
    setAdditionalSolverIterations(t) {
      return this.additionalSolverIterations = t, this;
    }
    setEnabled(t) {
      return this.enabled = t, this;
    }
    setTranslation(t, e) {
      if (typeof t != "number" || typeof e != "number") throw TypeError("The translation components must be numbers.");
      return this.translation = {
        x: t,
        y: e
      }, this;
    }
    setRotation(t) {
      return this.rotation = t, this;
    }
    setGravityScale(t) {
      return this.gravityScale = t, this;
    }
    setAdditionalMass(t) {
      return this.mass = t, this.massOnly = true, this;
    }
    setLinvel(t, e) {
      if (typeof t != "number" || typeof e != "number") throw TypeError("The linvel components must be numbers.");
      return this.linvel = {
        x: t,
        y: e
      }, this;
    }
    setAngvel(t) {
      return this.angvel = t, this;
    }
    setAdditionalMassProperties(t, e, i) {
      return this.mass = t, o.copy(this.centerOfMass, e), this.principalAngularInertia = i, this.massOnly = false, this;
    }
    enabledTranslations(t, e) {
      return this.translationsEnabledX = t, this.translationsEnabledY = e, this;
    }
    restrictTranslations(t, e) {
      return this.enabledTranslations(t, e);
    }
    lockTranslations() {
      return this.restrictTranslations(false, false);
    }
    lockRotations() {
      return this.rotationsEnabled = false, this;
    }
    setLinearDamping(t) {
      return this.linearDamping = t, this;
    }
    setAngularDamping(t) {
      return this.angularDamping = t, this;
    }
    setCanSleep(t) {
      return this.canSleep = t, this;
    }
    setSleeping(t) {
      return this.sleeping = t, this;
    }
    setCcdEnabled(t) {
      return this.ccdEnabled = t, this;
    }
    setSoftCcdPrediction(t) {
      return this.softCcdPrediction = t, this;
    }
    setUserData(t) {
      return this.userData = t, this;
    }
  };
  class _ {
    constructor() {
      this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
    }
    set(t, e) {
      let i = this.index(t);
      for (; this.data.length <= i; ) this.data.push(null);
      this.data[i] == null && (this.size += 1), this.data[i] = e;
    }
    len() {
      return this.size;
    }
    delete(t) {
      let e = this.index(t);
      e < this.data.length && (this.data[e] != null && (this.size -= 1), this.data[e] = null);
    }
    clear() {
      this.data = new Array();
    }
    get(t) {
      let e = this.index(t);
      return e < this.data.length ? this.data[e] : null;
    }
    forEach(t) {
      for (const e of this.data) e != null && t(e);
    }
    getAll() {
      return this.data.filter((t) => t != null);
    }
    index(t) {
      return this.fconv[0] = t, this.uconv[0];
    }
  }
  V = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new gt(), this.map = new _(), t && t.forEachRigidBodyHandle((e) => {
        this.map.set(e, new z(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createRigidBody(t, e) {
      let i = o.intoRaw(e.translation), r = b.intoRaw(e.rotation), s = o.intoRaw(e.linvel), n = o.intoRaw(e.centerOfMass), l = this.raw.createRigidBody(e.enabled, i, r, e.gravityScale, e.mass, e.massOnly, n, s, e.angvel, e.principalAngularInertia, e.translationsEnabledX, e.translationsEnabledY, e.rotationsEnabled, e.linearDamping, e.angularDamping, e.status, e.canSleep, e.sleeping, e.softCcdPrediction, e.ccdEnabled, e.dominanceGroup, e.additionalSolverIterations);
      i.free(), r.free(), s.free(), n.free();
      const h = new z(this.raw, t, l);
      return h.userData = e.userData, this.map.set(l, h), h;
    }
    remove(t, e, i, r, s) {
      for (let n = 0; n < this.raw.rbNumColliders(t); n += 1) i.unmap(this.raw.rbCollider(t, n));
      r.forEachJointHandleAttachedToRigidBody(t, (n) => r.unmap(n)), s.forEachJointHandleAttachedToRigidBody(t, (n) => s.unmap(n)), this.raw.remove(t, e.raw, i.raw, r.raw, s.raw), this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachActiveRigidBody(t, e) {
      t.forEachActiveRigidBodyHandle((i) => {
        e(this.get(i));
      });
    }
    getAll() {
      return this.map.getAll();
    }
  };
  H = class {
    constructor(t) {
      this.raw = t || new bt();
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    get dt() {
      return this.raw.dt;
    }
    get contact_erp() {
      return this.raw.contact_erp;
    }
    get lengthUnit() {
      return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
      return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
      return this.raw.normalizedPredictionDistance;
    }
    get numSolverIterations() {
      return this.raw.numSolverIterations;
    }
    get numInternalPgsIterations() {
      return this.raw.numInternalPgsIterations;
    }
    get minIslandSize() {
      return this.raw.minIslandSize;
    }
    get maxCcdSubsteps() {
      return this.raw.maxCcdSubsteps;
    }
    set dt(t) {
      this.raw.dt = t;
    }
    set contact_natural_frequency(t) {
      this.raw.contact_natural_frequency = t;
    }
    set lengthUnit(t) {
      this.raw.lengthUnit = t;
    }
    set normalizedAllowedLinearError(t) {
      this.raw.normalizedAllowedLinearError = t;
    }
    set normalizedPredictionDistance(t) {
      this.raw.normalizedPredictionDistance = t;
    }
    set numSolverIterations(t) {
      this.raw.numSolverIterations = t;
    }
    set numInternalPgsIterations(t) {
      this.raw.numInternalPgsIterations = t;
    }
    set minIslandSize(t) {
      this.raw.minIslandSize = t;
    }
    set maxCcdSubsteps(t) {
      this.raw.maxCcdSubsteps = t;
    }
  };
  (function(a) {
    a[a.Revolute = 0] = "Revolute", a[a.Fixed = 1] = "Fixed", a[a.Prismatic = 2] = "Prismatic", a[a.Rope = 3] = "Rope", a[a.Spring = 4] = "Spring";
  })(f || (f = {}));
  (function(a) {
    a[a.AccelerationBased = 0] = "AccelerationBased", a[a.ForceBased = 1] = "ForceBased";
  })(N || (N = {}));
  (function(a) {
    a[a.LinX = 1] = "LinX", a[a.LinY = 2] = "LinY", a[a.LinZ = 4] = "LinZ", a[a.AngX = 8] = "AngX", a[a.AngY = 16] = "AngY", a[a.AngZ = 32] = "AngZ";
  })(j || (j = {}));
  P = class {
    constructor(t, e, i) {
      this.rawSet = t, this.bodySet = e, this.handle = i;
    }
    static newTyped(t, e, i) {
      switch (t.jointType(i)) {
        case R.Revolute:
          return new $(t, e, i);
        case R.Prismatic:
          return new Z(t, e, i);
        case R.Fixed:
          return new Y(t, e, i);
        case R.Spring:
          return new q(t, e, i);
        case R.Rope:
          return new k(t, e, i);
        default:
          return new P(t, e, i);
      }
    }
    finalizeDeserialization(t) {
      this.bodySet = t;
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    body1() {
      return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
    }
    body2() {
      return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
    }
    type() {
      return this.rawSet.jointType(this.handle);
    }
    anchor1() {
      return o.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
      return o.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(t) {
      const e = o.intoRaw(t);
      this.rawSet.jointSetAnchor1(this.handle, e), e.free();
    }
    setAnchor2(t) {
      const e = o.intoRaw(t);
      this.rawSet.jointSetAnchor2(this.handle, e), e.free();
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  };
  J = class extends P {
    limitsEnabled() {
      return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
    }
    limitsMin() {
      return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
    }
    limitsMax() {
      return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
    }
    setLimits(t, e) {
      this.rawSet.jointSetLimits(this.handle, this.rawAxis(), t, e);
    }
    configureMotorModel(t) {
      this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), t);
    }
    configureMotorVelocity(t, e) {
      this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), t, e);
    }
    configureMotorPosition(t, e, i) {
      this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), t, e, i);
    }
    configureMotor(t, e, i, r) {
      this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), t, e, i, r);
    }
  };
  Y = class extends P {
  };
  k = class extends P {
  };
  q = class extends P {
  };
  Z = class extends J {
    rawAxis() {
      return E.LinX;
    }
  };
  $ = class extends J {
    rawAxis() {
      return E.AngX;
    }
  };
  v = class {
    constructor() {
    }
    static fixed(t, e, i, r) {
      let s = new v();
      return s.anchor1 = t, s.anchor2 = i, s.frame1 = e, s.frame2 = r, s.jointType = f.Fixed, s;
    }
    static spring(t, e, i, r, s) {
      let n = new v();
      return n.anchor1 = r, n.anchor2 = s, n.length = t, n.stiffness = e, n.damping = i, n.jointType = f.Spring, n;
    }
    static rope(t, e, i) {
      let r = new v();
      return r.anchor1 = e, r.anchor2 = i, r.length = t, r.jointType = f.Rope, r;
    }
    static revolute(t, e) {
      let i = new v();
      return i.anchor1 = t, i.anchor2 = e, i.jointType = f.Revolute, i;
    }
    static prismatic(t, e, i) {
      let r = new v();
      return r.anchor1 = t, r.anchor2 = e, r.axis = i, r.jointType = f.Prismatic, r;
    }
    intoRaw() {
      let t = o.intoRaw(this.anchor1), e = o.intoRaw(this.anchor2), i, r, s = false, n = 0, l = 0;
      switch (this.jointType) {
        case f.Fixed:
          let h = b.intoRaw(this.frame1), c = b.intoRaw(this.frame2);
          r = A.fixed(t, h, e, c), h.free(), c.free();
          break;
        case f.Spring:
          r = A.spring(this.length, this.stiffness, this.damping, t, e);
          break;
        case f.Rope:
          r = A.rope(this.length, t, e);
          break;
        case f.Prismatic:
          i = o.intoRaw(this.axis), this.limitsEnabled && (s = true, n = this.limits[0], l = this.limits[1]), r = A.prismatic(t, e, i, s, n, l), i.free();
          break;
        case f.Revolute:
          r = A.revolute(t, e);
          break;
      }
      return t.free(), e.free(), r;
    }
  };
  Q = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new St(), this.map = new _(), t && t.forEachJointHandle((e) => {
        this.map.set(e, P.newTyped(t, null, e));
      });
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createJoint(t, e, i, r, s) {
      const n = e.intoRaw(), l = this.raw.createJoint(n, i, r, s);
      n.free();
      let h = P.newTyped(this.raw, t, l);
      return this.map.set(l, h), h;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.unmap(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  y = class {
    constructor(t, e) {
      this.rawSet = t, this.handle = e;
    }
    static newTyped(t, e) {
      switch (t.jointType(e)) {
        case R.Revolute:
          return new it(t, e);
        case R.Prismatic:
          return new et(t, e);
        case R.Fixed:
          return new tt(t, e);
        default:
          return new y(t, e);
      }
    }
    isValid() {
      return this.rawSet.contains(this.handle);
    }
    setContactsEnabled(t) {
      this.rawSet.jointSetContactsEnabled(this.handle, t);
    }
    contactsEnabled() {
      return this.rawSet.jointContactsEnabled(this.handle);
    }
  };
  W = class extends y {
  };
  tt = class extends y {
  };
  et = class extends W {
    rawAxis() {
      return E.LinX;
    }
  };
  it = class extends W {
    rawAxis() {
      return E.AngX;
    }
  };
  rt = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Pt(), this.map = new _(), t && t.forEachJointHandle((e) => {
        this.map.set(e, y.newTyped(this.raw, e));
      });
    }
    createJoint(t, e, i, r) {
      const s = t.intoRaw(), n = this.raw.createJoint(s, e, i, r);
      s.free();
      let l = y.newTyped(this.raw, n);
      return this.map.set(n, l), l;
    }
    remove(t, e) {
      this.raw.remove(t, e), this.map.delete(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    get(t) {
      return this.map.get(t);
    }
    forEach(t) {
      this.map.forEach(t);
    }
    forEachJointHandleAttachedToRigidBody(t, e) {
      this.raw.forEachJointAttachedToRigidBody(t, e);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  at = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Ct();
    }
  };
  st = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new Rt();
    }
    forEachActiveRigidBodyHandle(t) {
      this.raw.forEachActiveRigidBodyHandle(t);
    }
  };
  nt = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new vt();
    }
    castRay(t, e, i, r, s, n, l, h, c, w, d) {
      let u = o.intoRaw(r.origin), p = o.intoRaw(r.dir), m = X.fromRaw(i, this.raw.castRay(t.raw, e.raw, i.raw, u, p, s, n, l, h, c, w, d));
      return u.free(), p.free(), m;
    }
    castRayAndGetNormal(t, e, i, r, s, n, l, h, c, w, d) {
      let u = o.intoRaw(r.origin), p = o.intoRaw(r.dir), m = D.fromRaw(i, this.raw.castRayAndGetNormal(t.raw, e.raw, i.raw, u, p, s, n, l, h, c, w, d));
      return u.free(), p.free(), m;
    }
    intersectionsWithRay(t, e, i, r, s, n, l, h, c, w, d, u) {
      let p = o.intoRaw(r.origin), m = o.intoRaw(r.dir), C = (I) => l(D.fromRaw(i, I));
      this.raw.intersectionsWithRay(t.raw, e.raw, i.raw, p, m, s, n, C, h, c, w, d, u), p.free(), m.free();
    }
    intersectionWithShape(t, e, i, r, s, n, l, h, c, w, d) {
      let u = o.intoRaw(r), p = b.intoRaw(s), m = n.intoRaw(), C = this.raw.intersectionWithShape(t.raw, e.raw, i.raw, u, p, m, l, h, c, w, d);
      return u.free(), p.free(), m.free(), C;
    }
    projectPoint(t, e, i, r, s, n, l, h, c, w) {
      let d = o.intoRaw(r), u = M.fromRaw(i, this.raw.projectPoint(t.raw, e.raw, i.raw, d, s, n, l, h, c, w));
      return d.free(), u;
    }
    projectPointAndGetFeature(t, e, i, r, s, n, l, h, c) {
      let w = o.intoRaw(r), d = M.fromRaw(i, this.raw.projectPointAndGetFeature(t.raw, e.raw, i.raw, w, s, n, l, h, c));
      return w.free(), d;
    }
    intersectionsWithPoint(t, e, i, r, s, n, l, h, c, w) {
      let d = o.intoRaw(r);
      this.raw.intersectionsWithPoint(t.raw, e.raw, i.raw, d, s, n, l, h, c, w), d.free();
    }
    castShape(t, e, i, r, s, n, l, h, c, w, d, u, p, m, C) {
      let I = o.intoRaw(r), U = b.intoRaw(s), F = o.intoRaw(n), O = l.intoRaw(), ft = K.fromRaw(i, this.raw.castShape(t.raw, e.raw, i.raw, I, U, F, O, h, c, w, d, u, p, m, C));
      return I.free(), U.free(), F.free(), O.free(), ft;
    }
    intersectionsWithShape(t, e, i, r, s, n, l, h, c, w, d, u) {
      let p = o.intoRaw(r), m = b.intoRaw(s), C = n.intoRaw();
      this.raw.intersectionsWithShape(t.raw, e.raw, i.raw, p, m, C, l, h, c, w, d, u), p.free(), m.free(), C.free();
    }
    collidersWithAabbIntersectingAabb(t, e, i, r, s, n) {
      let l = o.intoRaw(r), h = o.intoRaw(s);
      this.raw.collidersWithAabbIntersectingAabb(t.raw, e.raw, i.raw, l, h, n), l.free(), h.free();
    }
  };
  ot = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new yt(), this.tempManifold = new lt(null);
    }
    contactPairsWith(t, e) {
      this.raw.contact_pairs_with(t, e);
    }
    intersectionPairsWith(t, e) {
      this.raw.intersection_pairs_with(t, e);
    }
    contactPair(t, e, i) {
      const r = this.raw.contact_pair(t, e);
      if (r) {
        const s = r.collider1() != t;
        let n;
        for (n = 0; n < r.numContactManifolds(); ++n) this.tempManifold.raw = r.contactManifold(n), this.tempManifold.raw && i(this.tempManifold, s), this.tempManifold.free();
        r.free();
      }
    }
    intersectionPair(t, e) {
      return this.raw.intersection_pair(t, e);
    }
  };
  lt = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t;
    }
    normal() {
      return o.fromRaw(this.raw.normal());
    }
    localNormal1() {
      return o.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
      return o.fromRaw(this.raw.local_n2());
    }
    subshape1() {
      return this.raw.subshape1();
    }
    subshape2() {
      return this.raw.subshape2();
    }
    numContacts() {
      return this.raw.num_contacts();
    }
    localContactPoint1(t) {
      return o.fromRaw(this.raw.contact_local_p1(t));
    }
    localContactPoint2(t) {
      return o.fromRaw(this.raw.contact_local_p2(t));
    }
    contactDist(t) {
      return this.raw.contact_dist(t);
    }
    contactFid1(t) {
      return this.raw.contact_fid1(t);
    }
    contactFid2(t) {
      return this.raw.contact_fid2(t);
    }
    contactImpulse(t) {
      return this.raw.contact_impulse(t);
    }
    contactTangentImpulse(t) {
      return this.raw.contact_tangent_impulse(t);
    }
    numSolverContacts() {
      return this.raw.num_solver_contacts();
    }
    solverContactPoint(t) {
      return o.fromRaw(this.raw.solver_contact_point(t));
    }
    solverContactDist(t) {
      return this.raw.solver_contact_dist(t);
    }
    solverContactFriction(t) {
      return this.raw.solver_contact_friction(t);
    }
    solverContactRestitution(t) {
      return this.raw.solver_contact_restitution(t);
    }
    solverContactTangentVelocity(t) {
      return o.fromRaw(this.raw.solver_contact_tangent_velocity(t));
    }
  };
  ht = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new At();
    }
    step(t, e, i, r, s, n, l, h, c, w, d, u) {
      let p = o.intoRaw(t);
      d ? this.raw.stepWithEvents(p, e.raw, i.raw, r.raw, s.raw, n.raw, l.raw, h.raw, c.raw, w.raw, d.raw, u, u ? u.filterContactPair : null, u ? u.filterIntersectionPair : null) : this.raw.step(p, e.raw, i.raw, r.raw, s.raw, n.raw, l.raw, h.raw, c.raw, w.raw), p.free();
    }
  };
  x = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    constructor(t) {
      this.raw = t || new It();
    }
    serializeAll(t, e, i, r, s, n, l, h, c) {
      let w = o.intoRaw(t);
      const d = this.raw.serializeAll(w, e.raw, i.raw, r.raw, s.raw, n.raw, l.raw, h.raw, c.raw);
      return w.free(), d;
    }
    deserializeAll(t) {
      return T.fromRaw(this.raw.deserializeAll(t));
    }
  };
  ct = class {
    constructor(t, e) {
      this.vertices = t, this.colors = e;
    }
  };
  dt = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
    }
    constructor(t) {
      this.raw = t || new Et();
    }
    render(t, e, i, r, s, n, l) {
      this.raw.render(t.raw, e.raw, i.raw, r.raw, s.raw, n, e.castClosure(l)), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
    }
  };
  wt = class {
  };
  ut = class {
    constructor(t, e, i, r, s, n) {
      this.params = e, this.bodies = s, this.colliders = n, this.broadPhase = i, this.narrowPhase = r, this.raw = new _t(t), this.rawCharacterCollision = new Tt(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
    }
    free() {
      this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
    }
    up() {
      return this.raw.up();
    }
    setUp(t) {
      let e = o.intoRaw(t);
      return this.raw.setUp(e);
    }
    applyImpulsesToDynamicBodies() {
      return this._applyImpulsesToDynamicBodies;
    }
    setApplyImpulsesToDynamicBodies(t) {
      this._applyImpulsesToDynamicBodies = t;
    }
    characterMass() {
      return this._characterMass;
    }
    setCharacterMass(t) {
      this._characterMass = t;
    }
    offset() {
      return this.raw.offset();
    }
    setOffset(t) {
      this.raw.setOffset(t);
    }
    normalNudgeFactor() {
      return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(t) {
      this.raw.setNormalNudgeFactor(t);
    }
    slideEnabled() {
      return this.raw.slideEnabled();
    }
    setSlideEnabled(t) {
      this.raw.setSlideEnabled(t);
    }
    autostepMaxHeight() {
      return this.raw.autostepMaxHeight();
    }
    autostepMinWidth() {
      return this.raw.autostepMinWidth();
    }
    autostepIncludesDynamicBodies() {
      return this.raw.autostepIncludesDynamicBodies();
    }
    autostepEnabled() {
      return this.raw.autostepEnabled();
    }
    enableAutostep(t, e, i) {
      this.raw.enableAutostep(t, e, i);
    }
    disableAutostep() {
      return this.raw.disableAutostep();
    }
    maxSlopeClimbAngle() {
      return this.raw.maxSlopeClimbAngle();
    }
    setMaxSlopeClimbAngle(t) {
      this.raw.setMaxSlopeClimbAngle(t);
    }
    minSlopeSlideAngle() {
      return this.raw.minSlopeSlideAngle();
    }
    setMinSlopeSlideAngle(t) {
      this.raw.setMinSlopeSlideAngle(t);
    }
    snapToGroundDistance() {
      return this.raw.snapToGroundDistance();
    }
    enableSnapToGround(t) {
      this.raw.enableSnapToGround(t);
    }
    disableSnapToGround() {
      this.raw.disableSnapToGround();
    }
    snapToGroundEnabled() {
      return this.raw.snapToGroundEnabled();
    }
    computeColliderMovement(t, e, i, r, s) {
      let n = o.intoRaw(e);
      this.raw.computeColliderMovement(this.params.dt, this.broadPhase.raw, this.narrowPhase.raw, this.bodies.raw, this.colliders.raw, t.handle, n, this._applyImpulsesToDynamicBodies, this._characterMass, i, r, this.colliders.castClosure(s)), n.free();
    }
    computedMovement() {
      return o.fromRaw(this.raw.computedMovement());
    }
    computedGrounded() {
      return this.raw.computedGrounded();
    }
    numComputedCollisions() {
      return this.raw.numComputedCollisions();
    }
    computedCollision(t, e) {
      if (this.raw.computedCollision(t, this.rawCharacterCollision)) {
        let i = this.rawCharacterCollision;
        return e = e ?? new wt(), e.translationDeltaApplied = o.fromRaw(i.translationDeltaApplied()), e.translationDeltaRemaining = o.fromRaw(i.translationDeltaRemaining()), e.toi = i.toi(), e.witness1 = o.fromRaw(i.worldWitness1()), e.witness2 = o.fromRaw(i.worldWitness2()), e.normal1 = o.fromRaw(i.worldNormal1()), e.normal2 = o.fromRaw(i.worldNormal2()), e.collider = this.colliders.get(i.handle()), e;
      } else return null;
    }
  };
  (function(a) {
    a[a.None = 0] = "None", a[a.LinX = 1] = "LinX", a[a.LinY = 2] = "LinY", a[a.LinZ = 4] = "LinZ", a[a.AngZ = 32] = "AngZ", a[a.AllLin = 3] = "AllLin", a[a.AllAng = 32] = "AllAng", a[a.All = 35] = "All";
  })(B || (B = {}));
  pt = class {
    constructor(t, e, i, r, s, n) {
      this.params = t, this.bodies = e, this.raw = new Dt(i, r, s, n);
    }
    free() {
      this.raw && this.raw.free(), this.raw = void 0;
    }
    setKp(t, e) {
      this.raw.set_kp(t, e);
    }
    setKi(t, e) {
      this.raw.set_kp(t, e);
    }
    setKd(t, e) {
      this.raw.set_kp(t, e);
    }
    setAxes(t) {
      this.raw.set_axes_mask(t);
    }
    resetIntegrals() {
      this.raw.reset_integrals();
    }
    applyLinearCorrection(t, e, i) {
      let r = o.intoRaw(e), s = o.intoRaw(i);
      this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, t.handle, r, s), r.free(), s.free();
    }
    applyAngularCorrection(t, e, i) {
      this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, t.handle, e, i);
    }
    linearCorrection(t, e, i) {
      let r = o.intoRaw(e), s = o.intoRaw(i), n = this.raw.linear_correction(this.params.dt, this.bodies.raw, t.handle, r, s);
      return r.free(), s.free(), o.fromRaw(n);
    }
    angularCorrection(t, e, i) {
      return this.raw.angular_correction(this.params.dt, this.bodies.raw, t.handle, e, i);
    }
  };
  T = class {
    free() {
      this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((t) => t.free()), this.pidControllers.forEach((t) => t.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.pidControllers = void 0;
    }
    constructor(t, e, i, r, s, n, l, h, c, w, d, u, p) {
      this.gravity = t, this.integrationParameters = new H(e), this.islands = new st(i), this.broadPhase = new nt(r), this.narrowPhase = new ot(s), this.bodies = new V(n), this.colliders = new mt(l), this.impulseJoints = new Q(h), this.multibodyJoints = new rt(c), this.ccdSolver = new at(w), this.physicsPipeline = new ht(d), this.serializationPipeline = new x(u), this.debugRenderPipeline = new dt(p), this.characterControllers = /* @__PURE__ */ new Set(), this.pidControllers = /* @__PURE__ */ new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
    }
    static fromRaw(t) {
      return t ? new T(o.fromRaw(t.takeGravity()), t.takeIntegrationParameters(), t.takeIslandManager(), t.takeBroadPhase(), t.takeNarrowPhase(), t.takeBodies(), t.takeColliders(), t.takeImpulseJoints(), t.takeMultibodyJoints()) : null;
    }
    takeSnapshot() {
      return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    static restoreSnapshot(t) {
      return new x().deserializeAll(t);
    }
    debugRender(t, e) {
      return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase, t, e), new ct(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
    }
    step(t, e) {
      this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, t, e);
    }
    propagateModifiedBodyPositionsToColliders() {
      this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
    }
    get timestep() {
      return this.integrationParameters.dt;
    }
    set timestep(t) {
      this.integrationParameters.dt = t;
    }
    get lengthUnit() {
      return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(t) {
      this.integrationParameters.lengthUnit = t;
    }
    get numSolverIterations() {
      return this.integrationParameters.numSolverIterations;
    }
    set numSolverIterations(t) {
      this.integrationParameters.numSolverIterations = t;
    }
    get numInternalPgsIterations() {
      return this.integrationParameters.numInternalPgsIterations;
    }
    set numInternalPgsIterations(t) {
      this.integrationParameters.numInternalPgsIterations = t;
    }
    get maxCcdSubsteps() {
      return this.integrationParameters.maxCcdSubsteps;
    }
    set maxCcdSubsteps(t) {
      this.integrationParameters.maxCcdSubsteps = t;
    }
    createRigidBody(t) {
      return this.bodies.createRigidBody(this.colliders, t);
    }
    createCharacterController(t) {
      let e = new ut(t, this.integrationParameters, this.broadPhase, this.narrowPhase, this.bodies, this.colliders);
      return this.characterControllers.add(e), e;
    }
    removeCharacterController(t) {
      this.characterControllers.delete(t), t.free();
    }
    createPidController(t, e, i, r) {
      let s = new pt(this.integrationParameters, this.bodies, t, e, i, r);
      return this.pidControllers.add(s), s;
    }
    removePidController(t) {
      this.pidControllers.delete(t), t.free();
    }
    createCollider(t, e) {
      let i = e ? e.handle : void 0;
      return this.colliders.createCollider(this.bodies, t, i);
    }
    createImpulseJoint(t, e, i, r) {
      return this.impulseJoints.createJoint(this.bodies, t, e.handle, i.handle, r);
    }
    createMultibodyJoint(t, e, i, r) {
      return this.multibodyJoints.createJoint(t, e.handle, i.handle, r);
    }
    getRigidBody(t) {
      return this.bodies.get(t);
    }
    getCollider(t) {
      return this.colliders.get(t);
    }
    getImpulseJoint(t) {
      return this.impulseJoints.get(t);
    }
    getMultibodyJoint(t) {
      return this.multibodyJoints.get(t);
    }
    removeRigidBody(t) {
      this.bodies && this.bodies.remove(t.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
    removeCollider(t, e) {
      this.colliders && this.colliders.remove(t.handle, this.islands, this.bodies, e);
    }
    removeImpulseJoint(t, e) {
      this.impulseJoints && this.impulseJoints.remove(t.handle, e);
    }
    removeMultibodyJoint(t, e) {
      this.impulseJoints && this.multibodyJoints.remove(t.handle, e);
    }
    forEachCollider(t) {
      this.colliders.forEach(t);
    }
    forEachRigidBody(t) {
      this.bodies.forEach(t);
    }
    forEachActiveRigidBody(t) {
      this.bodies.forEachActiveRigidBody(this.islands, t);
    }
    castRay(t, e, i, r, s, n, l, h) {
      return this.broadPhase.castRay(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s, n ? n.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
    }
    castRayAndGetNormal(t, e, i, r, s, n, l, h) {
      return this.broadPhase.castRayAndGetNormal(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s, n ? n.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
    }
    intersectionsWithRay(t, e, i, r, s, n, l, h, c) {
      this.broadPhase.intersectionsWithRay(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s, n, l ? l.handle : null, h ? h.handle : null, this.colliders.castClosure(c));
    }
    intersectionWithShape(t, e, i, r, s, n, l, h) {
      let c = this.broadPhase.intersectionWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s, n ? n.handle : null, l ? l.handle : null, this.colliders.castClosure(h));
      return c != null ? this.colliders.get(c) : null;
    }
    projectPoint(t, e, i, r, s, n, l) {
      return this.broadPhase.projectPoint(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s ? s.handle : null, n ? n.handle : null, this.colliders.castClosure(l));
    }
    projectPointAndGetFeature(t, e, i, r, s, n) {
      return this.broadPhase.projectPointAndGetFeature(this.narrowPhase, this.bodies, this.colliders, t, e, i, r ? r.handle : null, s ? s.handle : null, this.colliders.castClosure(n));
    }
    intersectionsWithPoint(t, e, i, r, s, n, l) {
      this.broadPhase.intersectionsWithPoint(this.narrowPhase, this.bodies, this.colliders, t, this.colliders.castClosure(e), i, r, s ? s.handle : null, n ? n.handle : null, this.colliders.castClosure(l));
    }
    castShape(t, e, i, r, s, n, l, h, c, w, d, u) {
      return this.broadPhase.castShape(this.narrowPhase, this.bodies, this.colliders, t, e, i, r, s, n, l, h, c, w ? w.handle : null, d ? d.handle : null, this.colliders.castClosure(u));
    }
    intersectionsWithShape(t, e, i, r, s, n, l, h, c) {
      this.broadPhase.intersectionsWithShape(this.narrowPhase, this.bodies, this.colliders, t, e, i, this.colliders.castClosure(r), s, n, l ? l.handle : null, h ? h.handle : null, this.colliders.castClosure(c));
    }
    collidersWithAabbIntersectingAabb(t, e, i) {
      this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase, this.bodies, this.colliders, t, e, this.colliders.castClosure(i));
    }
    contactPairsWith(t, e) {
      this.narrowPhase.contactPairsWith(t.handle, this.colliders.castClosure(e));
    }
    intersectionPairsWith(t, e) {
      this.narrowPhase.intersectionPairsWith(t.handle, this.colliders.castClosure(e));
    }
    contactPair(t, e, i) {
      this.narrowPhase.contactPair(t.handle, e.handle, i);
    }
    intersectionPair(t, e) {
      return this.narrowPhase.intersectionPair(t.handle, e.handle);
    }
    set profilerEnabled(t) {
      this.physicsPipeline.raw.set_profiler_enabled(t);
    }
    get profilerEnabled() {
      return this.physicsPipeline.raw.is_profiler_enabled();
    }
    timingStep() {
      return this.physicsPipeline.raw.timing_step();
    }
    timingCollisionDetection() {
      return this.physicsPipeline.raw.timing_collision_detection();
    }
    timingBroadPhase() {
      return this.physicsPipeline.raw.timing_broad_phase();
    }
    timingNarrowPhase() {
      return this.physicsPipeline.raw.timing_narrow_phase();
    }
    timingSolver() {
      return this.physicsPipeline.raw.timing_solver();
    }
    timingVelocityAssembly() {
      return this.physicsPipeline.raw.timing_velocity_assembly();
    }
    timingVelocityResolution() {
      return this.physicsPipeline.raw.timing_velocity_resolution();
    }
    timingVelocityUpdate() {
      return this.physicsPipeline.raw.timing_velocity_update();
    }
    timingVelocityWriteback() {
      return this.physicsPipeline.raw.timing_velocity_writeback();
    }
    timingCcd() {
      return this.physicsPipeline.raw.timing_ccd();
    }
    timingCcdToiComputation() {
      return this.physicsPipeline.raw.timing_ccd_toi_computation();
    }
    timingCcdBroadPhase() {
      return this.physicsPipeline.raw.timing_ccd_broad_phase();
    }
    timingCcdNarrowPhase() {
      return this.physicsPipeline.raw.timing_ccd_narrow_phase();
    }
    timingCcdSolver() {
      return this.physicsPipeline.raw.timing_ccd_solver();
    }
    timingIslandConstruction() {
      return this.physicsPipeline.raw.timing_island_construction();
    }
    timingUserChanges() {
      return this.physicsPipeline.raw.timing_user_changes();
    }
  };
  (function(a) {
    a[a.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", a[a.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", a[a.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", a[a.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", a[a.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", a[a.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", a[a.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", a[a.ONLY_FIXED = 6] = "ONLY_FIXED";
  })(G || (G = {}));
  mt = class {
    free() {
      this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
    }
    constructor(t) {
      this.raw = t || new Mt(), this.map = new _(), t && t.forEachColliderHandle((e) => {
        this.map.set(e, new L(this, e, null));
      });
    }
    castClosure(t) {
      return (e) => {
        if (t) return t(this.get(e));
      };
    }
    finalizeDeserialization(t) {
      this.map.forEach((e) => e.finalizeDeserialization(t));
    }
    createCollider(t, e, i) {
      let r = i != null && i != null;
      if (r && isNaN(i)) throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
      let s = e.shape.intoRaw(), n = o.intoRaw(e.translation), l = b.intoRaw(e.rotation), h = o.intoRaw(e.centerOfMass), c = this.raw.createCollider(e.enabled, s, n, l, e.massPropsMode, e.mass, h, e.principalAngularInertia, e.density, e.friction, e.restitution, e.frictionCombineRule, e.restitutionCombineRule, e.isSensor, e.collisionGroups, e.solverGroups, e.activeCollisionTypes, e.activeHooks, e.activeEvents, e.contactForceEventThreshold, e.contactSkin, r, r ? i : 0, t.raw);
      s.free(), n.free(), l.free(), h.free();
      let w = r ? t.get(i) : null, d = new L(this, c, w, e.shape);
      return this.map.set(c, d), d;
    }
    remove(t, e, i, r) {
      this.raw.remove(t, e.raw, i.raw, r), this.unmap(t);
    }
    unmap(t) {
      this.map.delete(t);
    }
    get(t) {
      return this.map.get(t);
    }
    len() {
      return this.map.len();
    }
    contains(t) {
      return this.get(t) != null;
    }
    forEach(t) {
      this.map.forEach(t);
    }
    getAll() {
      return this.map.getAll();
    }
  };
  ue = function() {
    return Lt();
  };
  pe = function(a) {
    zt(a);
  };
  Se = Object.freeze(Object.defineProperty({
    __proto__: null,
    get ActiveCollisionTypes() {
      return Nt;
    },
    get ActiveEvents() {
      return jt;
    },
    get ActiveHooks() {
      return xt;
    },
    Ball: Bt,
    BroadPhase: nt,
    CCDSolver: at,
    Capsule: Gt,
    CharacterCollision: wt,
    get CoefficientCombineRule() {
      return Jt;
    },
    Collider: L,
    ColliderDesc: Wt,
    ColliderSet: mt,
    ColliderShapeCastHit: K,
    ConvexPolygon: Ut,
    Cuboid: Ft,
    DebugRenderBuffers: ct,
    DebugRenderPipeline: dt,
    EventQueue: Ot,
    get FeatureType() {
      return Xt;
    },
    FixedImpulseJoint: Y,
    FixedMultibodyJoint: tt,
    HalfSpace: Kt,
    Heightfield: Vt,
    ImpulseJoint: P,
    ImpulseJointSet: Q,
    IntegrationParameters: H,
    IslandManager: st,
    get JointAxesMask() {
      return j;
    },
    JointData: v,
    get JointType() {
      return f;
    },
    KinematicCharacterController: ut,
    get MassPropsMode() {
      return Ht;
    },
    get MotorModel() {
      return N;
    },
    MultibodyJoint: y,
    MultibodyJointSet: rt,
    NarrowPhase: ot,
    PhysicsPipeline: ht,
    get PidAxesMask() {
      return B;
    },
    PidController: pt,
    PointColliderProjection: M,
    PointProjection: Yt,
    Polyline: kt,
    PrismaticImpulseJoint: Z,
    PrismaticMultibodyJoint: et,
    get QueryFilterFlags() {
      return G;
    },
    Ray: qt,
    RayColliderHit: X,
    RayColliderIntersection: D,
    RayIntersection: Zt,
    RevoluteImpulseJoint: $,
    RevoluteMultibodyJoint: it,
    RigidBody: z,
    RigidBodyDesc: S,
    RigidBodySet: V,
    get RigidBodyType() {
      return g;
    },
    RopeImpulseJoint: k,
    RotationOps: b,
    RoundConvexPolygon: $t,
    RoundCuboid: Qt,
    RoundTriangle: te,
    Segment: ee,
    SerializationPipeline: x,
    Shape: ie,
    ShapeCastHit: re,
    ShapeContact: ae,
    get ShapeType() {
      return se;
    },
    get SolverFlags() {
      return ne;
    },
    SpringImpulseJoint: q,
    TempContactForceEvent: oe,
    TempContactManifold: lt,
    TriMesh: le,
    get TriMeshFlags() {
      return he;
    },
    Triangle: ce,
    UnitImpulseJoint: J,
    UnitMultibodyJoint: W,
    Vector2: de,
    VectorOps: o,
    Voxels: we,
    World: T,
    reserveMemory: pe,
    version: ue
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Nt as ActiveCollisionTypes,
  jt as ActiveEvents,
  xt as ActiveHooks,
  Bt as Ball,
  nt as BroadPhase,
  at as CCDSolver,
  Gt as Capsule,
  wt as CharacterCollision,
  Jt as CoefficientCombineRule,
  L as Collider,
  Wt as ColliderDesc,
  mt as ColliderSet,
  K as ColliderShapeCastHit,
  Ut as ConvexPolygon,
  Ft as Cuboid,
  ct as DebugRenderBuffers,
  dt as DebugRenderPipeline,
  Ot as EventQueue,
  Xt as FeatureType,
  Y as FixedImpulseJoint,
  tt as FixedMultibodyJoint,
  Kt as HalfSpace,
  Vt as Heightfield,
  P as ImpulseJoint,
  Q as ImpulseJointSet,
  H as IntegrationParameters,
  st as IslandManager,
  j as JointAxesMask,
  v as JointData,
  f as JointType,
  ut as KinematicCharacterController,
  Ht as MassPropsMode,
  N as MotorModel,
  y as MultibodyJoint,
  rt as MultibodyJointSet,
  ot as NarrowPhase,
  ht as PhysicsPipeline,
  B as PidAxesMask,
  pt as PidController,
  M as PointColliderProjection,
  Yt as PointProjection,
  kt as Polyline,
  Z as PrismaticImpulseJoint,
  et as PrismaticMultibodyJoint,
  G as QueryFilterFlags,
  qt as Ray,
  X as RayColliderHit,
  D as RayColliderIntersection,
  Zt as RayIntersection,
  $ as RevoluteImpulseJoint,
  it as RevoluteMultibodyJoint,
  z as RigidBody,
  S as RigidBodyDesc,
  V as RigidBodySet,
  g as RigidBodyType,
  k as RopeImpulseJoint,
  b as RotationOps,
  $t as RoundConvexPolygon,
  Qt as RoundCuboid,
  te as RoundTriangle,
  ee as Segment,
  x as SerializationPipeline,
  ie as Shape,
  re as ShapeCastHit,
  ae as ShapeContact,
  se as ShapeType,
  ne as SolverFlags,
  q as SpringImpulseJoint,
  oe as TempContactForceEvent,
  lt as TempContactManifold,
  le as TriMesh,
  he as TriMeshFlags,
  ce as Triangle,
  J as UnitImpulseJoint,
  W as UnitMultibodyJoint,
  de as Vector2,
  o as VectorOps,
  we as Voxels,
  T as World,
  __tla,
  Se as default,
  pe as reserveMemory,
  ue as version
};
