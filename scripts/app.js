(() => {
    var ug = Object.create;
    var Ls = Object.defineProperty
        , dg = Object.defineProperties
        , pg = Object.getOwnPropertyDescriptor
        , fg = Object.getOwnPropertyDescriptors
        , mg = Object.getOwnPropertyNames
        , Os = Object.getOwnPropertySymbols
        , vg = Object.getPrototypeOf
        , Vo = Object.prototype.hasOwnProperty
        , Zc = Object.prototype.propertyIsEnumerable;
    var gi = Math.pow
        , Qc = (i, t, e) => t in i ? Ls(i, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : i[t] = e
        , Ct = (i, t) => {
            for (var e in t || (t = {}))
                Vo.call(t, e) && Qc(i, e, t[e]);
            if (Os)
                for (var e of Os(t))
                    Zc.call(t, e) && Qc(i, e, t[e]);
            return i
        }
        , re = (i, t) => dg(i, fg(t));
    var be = (i, t) => {
        var e = {};
        for (var r in i)
            Vo.call(i, r) && t.indexOf(r) < 0 && (e[r] = i[r]);
        if (i != null && Os)
            for (var r of Os(i))
                t.indexOf(r) < 0 && Zc.call(i, r) && (e[r] = i[r]);
        return e
    }
        ;
    var z = (i, t) => () => (i && (t = i(i = 0)),
        t);
    var gg = (i, t) => () => (t || i((t = {
        exports: {}
    }).exports, t),
        t.exports)
        , Do = (i, t) => {
            for (var e in t)
                Ls(i, e, {
                    get: t[e],
                    enumerable: !0
                })
        }
        , _g = (i, t, e, r) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let s of mg(t))
                    !Vo.call(i, s) && s !== e && Ls(i, s, {
                        get: () => t[s],
                        enumerable: !(r = pg(t, s)) || r.enumerable
                    });
            return i
        }
        ;
    var bg = (i, t, e) => (e = i != null ? ug(vg(i)) : {},
        _g(t || !i || !i.__esModule ? Ls(e, "default", {
            value: i,
            enumerable: !0
        }) : e, i));
    var se = (i, t, e) => new Promise((r, s) => {
        var n = l => {
            try {
                a(e.next(l))
            } catch (h) {
                s(h)
            }
        }
            , o = l => {
                try {
                    a(e.throw(l))
                } catch (h) {
                    s(h)
                }
            }
            , a = l => l.done ? r(l.value) : Promise.resolve(l.value).then(n, o);
        a((e = e.apply(i, t)).next())
    }
    );
    function Ri(i) {
        let t = i[0]
            , e = i[1]
            , r = i[2];
        return Math.sqrt(t * t + e * e + r * r)
    }
    function vn(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i[2] = t[2],
            i
    }
    function jd(i, t, e, r) {
        return i[0] = t,
            i[1] = e,
            i[2] = r,
            i
    }
    function Qa(i, t, e) {
        return i[0] = t[0] + e[0],
            i[1] = t[1] + e[1],
            i[2] = t[2] + e[2],
            i
    }
    function Za(i, t, e) {
        return i[0] = t[0] - e[0],
            i[1] = t[1] - e[1],
            i[2] = t[2] - e[2],
            i
    }
    function qd(i, t, e) {
        return i[0] = t[0] * e[0],
            i[1] = t[1] * e[1],
            i[2] = t[2] * e[2],
            i
    }
    function Hd(i, t, e) {
        return i[0] = t[0] / e[0],
            i[1] = t[1] / e[1],
            i[2] = t[2] / e[2],
            i
    }
    function _n(i, t, e) {
        return i[0] = t[0] * e,
            i[1] = t[1] * e,
            i[2] = t[2] * e,
            i
    }
    function Wd(i, t) {
        let e = t[0] - i[0]
            , r = t[1] - i[1]
            , s = t[2] - i[2];
        return Math.sqrt(e * e + r * r + s * s)
    }
    function $d(i, t) {
        let e = t[0] - i[0]
            , r = t[1] - i[1]
            , s = t[2] - i[2];
        return e * e + r * r + s * s
    }
    function Ja(i) {
        let t = i[0]
            , e = i[1]
            , r = i[2];
        return t * t + e * e + r * r
    }
    function Gd(i, t) {
        return i[0] = -t[0],
            i[1] = -t[1],
            i[2] = -t[2],
            i
    }
    function Yd(i, t) {
        return i[0] = 1 / t[0],
            i[1] = 1 / t[1],
            i[2] = 1 / t[2],
            i
    }
    function gn(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = e * e + r * r + s * s;
        return n > 0 && (n = 1 / Math.sqrt(n)),
            i[0] = t[0] * n,
            i[1] = t[1] * n,
            i[2] = t[2] * n,
            i
    }
    function tl(i, t) {
        return i[0] * t[0] + i[1] * t[1] + i[2] * t[2]
    }
    function el(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = e[0]
            , a = e[1]
            , l = e[2];
        return i[0] = s * l - n * a,
            i[1] = n * o - r * l,
            i[2] = r * a - s * o,
            i
    }
    function bn(i, t, e, r) {
        let s = t[0]
            , n = t[1]
            , o = t[2];
        return i[0] = s + r * (e[0] - s),
            i[1] = n + r * (e[1] - n),
            i[2] = o + r * (e[2] - o),
            i
    }
    function Xd(i, t, e, r, s) {
        let n = Math.exp(-r * s)
            , o = t[0]
            , a = t[1]
            , l = t[2];
        return i[0] = e[0] + (o - e[0]) * n,
            i[1] = e[1] + (a - e[1]) * n,
            i[2] = e[2] + (l - e[2]) * n,
            i
    }
    function Kd(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = e[3] * r + e[7] * s + e[11] * n + e[15];
        return o = o || 1,
            i[0] = (e[0] * r + e[4] * s + e[8] * n + e[12]) / o,
            i[1] = (e[1] * r + e[5] * s + e[9] * n + e[13]) / o,
            i[2] = (e[2] * r + e[6] * s + e[10] * n + e[14]) / o,
            i
    }
    function Qd(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = e[3] * r + e[7] * s + e[11] * n + e[15];
        return o = o || 1,
            i[0] = (e[0] * r + e[4] * s + e[8] * n) / o,
            i[1] = (e[1] * r + e[5] * s + e[9] * n) / o,
            i[2] = (e[2] * r + e[6] * s + e[10] * n) / o,
            i
    }
    function Zd(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2];
        return i[0] = r * e[0] + s * e[3] + n * e[6],
            i[1] = r * e[1] + s * e[4] + n * e[7],
            i[2] = r * e[2] + s * e[5] + n * e[8],
            i
    }
    function Jd(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = e[0]
            , a = e[1]
            , l = e[2]
            , h = e[3]
            , c = a * n - l * s
            , u = l * r - o * n
            , d = o * s - a * r
            , f = a * d - l * u
            , m = l * c - o * d
            , p = o * u - a * c
            , v = h * 2;
        return c *= v,
            u *= v,
            d *= v,
            f *= 2,
            m *= 2,
            p *= 2,
            i[0] = r + c + f,
            i[1] = s + u + m,
            i[2] = n + d + p,
            i
    }
    function ep(i, t) {
        return i[0] === t[0] && i[1] === t[1] && i[2] === t[2]
    }
    var tp, wn = z(() => {
        tp = function () {
            let i = [0, 0, 0]
                , t = [0, 0, 0];
            return function (e, r) {
                vn(i, e),
                    vn(t, r),
                    gn(i, i),
                    gn(t, t);
                let s = tl(i, t);
                return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
            }
        }()
    }
    );
    var S, tt = z(() => {
        wn();
        S = class i extends Array {
            constructor(t = 0, e = t, r = t) {
                return super(t, e, r),
                    this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set z(t) {
                this[2] = t
            }
            set(t, e = t, r = t) {
                return t.length ? this.copy(t) : (jd(this, t, e, r),
                    this)
            }
            copy(t) {
                return vn(this, t),
                    this
            }
            add(t, e) {
                return e ? Qa(this, t, e) : Qa(this, this, t),
                    this
            }
            sub(t, e) {
                return e ? Za(this, t, e) : Za(this, this, t),
                    this
            }
            multiply(t) {
                return t.length ? qd(this, this, t) : _n(this, this, t),
                    this
            }
            divide(t) {
                return t.length ? Hd(this, this, t) : _n(this, this, 1 / t),
                    this
            }
            inverse(t = this) {
                return Yd(this, t),
                    this
            }
            len() {
                return Ri(this)
            }
            distance(t) {
                return t ? Wd(this, t) : Ri(this)
            }
            squaredLen() {
                return Ja(this)
            }
            squaredDistance(t) {
                return t ? $d(this, t) : Ja(this)
            }
            negate(t = this) {
                return Gd(this, t),
                    this
            }
            cross(t, e) {
                return e ? el(this, t, e) : el(this, this, t),
                    this
            }
            scale(t) {
                return _n(this, this, t),
                    this
            }
            normalize() {
                return gn(this, this),
                    this
            }
            dot(t) {
                return tl(this, t)
            }
            equals(t) {
                return ep(this, t)
            }
            applyMatrix3(t) {
                return Zd(this, this, t),
                    this
            }
            applyMatrix4(t) {
                return Kd(this, this, t),
                    this
            }
            scaleRotateMatrix4(t) {
                return Qd(this, this, t),
                    this
            }
            applyQuaternion(t) {
                return Jd(this, this, t),
                    this
            }
            angle(t) {
                return tp(this, t)
            }
            lerp(t, e) {
                return bn(this, this, t, e),
                    this
            }
            smoothLerp(t, e, r) {
                return Xd(this, this, t, e, r),
                    this
            }
            clone() {
                return new i(this[0], this[1], this[2])
            }
            fromArray(t, e = 0) {
                return this[0] = t[e],
                    this[1] = t[e + 1],
                    this[2] = t[e + 2],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0],
                    t[e + 1] = this[1],
                    t[e + 2] = this[2],
                    t
            }
            transformDirection(t) {
                let e = this[0]
                    , r = this[1]
                    , s = this[2];
                return this[0] = t[0] * e + t[4] * r + t[8] * s,
                    this[1] = t[1] * e + t[5] * r + t[9] * s,
                    this[2] = t[2] * e + t[6] * r + t[10] * s,
                    this.normalize()
            }
        }
    }
    );
    var rp, K_, Q_, sp, W, kt = z(() => {
        tt();
        rp = new S,
            K_ = 1,
            Q_ = 1,
            sp = !1,
            W = class {
                constructor(t, e = {}) {
                    t.canvas || console.error("gl not passed as first argument to Geometry"),
                        this.gl = t,
                        this.attributes = e,
                        this.id = K_++,
                        this.VAOs = {},
                        this.drawRange = {
                            start: 0,
                            count: 0
                        },
                        this.instancedCount = 0,
                        this.gl.renderer.bindVertexArray(null),
                        this.gl.renderer.currentGeometry = null,
                        this.glState = this.gl.renderer.state;
                    for (let r in e)
                        this.addAttribute(r, e[r])
                }
                addAttribute(t, e) {
                    if (this.attributes[t] = e,
                        e.id = Q_++,
                        e.size = e.size || 1,
                        e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT),
                        e.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER,
                        e.normalized = e.normalized || !1,
                        e.stride = e.stride || 0,
                        e.offset = e.offset || 0,
                        e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size),
                        e.divisor = e.instanced || 0,
                        e.needsUpdate = !1,
                        e.usage = e.usage || this.gl.STATIC_DRAW,
                        e.buffer || this.updateAttribute(e),
                        e.divisor) {
                        if (this.isInstanced = !0,
                            this.instancedCount && this.instancedCount !== e.count * e.divisor)
                            return console.warn("geometry has multiple instanced buffers of different length"),
                                this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor);
                        this.instancedCount = e.count * e.divisor
                    } else
                        t === "index" ? this.drawRange.count = e.count : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count))
                }
                updateAttribute(t) {
                    let e = !t.buffer;
                    e && (t.buffer = this.gl.createBuffer()),
                        this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer),
                            this.glState.boundBuffer = t.buffer),
                        e ? this.gl.bufferData(t.target, t.data, t.usage) : this.gl.bufferSubData(t.target, 0, t.data),
                        t.needsUpdate = !1
                }
                setIndex(t) {
                    this.addAttribute("index", t)
                }
                setDrawRange(t, e) {
                    this.drawRange.start = t,
                        this.drawRange.count = e
                }
                setInstancedCount(t) {
                    this.instancedCount = t
                }
                createVAO(t) {
                    this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray(),
                        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
                        this.bindAttributes(t)
                }
                bindAttributes(t) {
                    t.attributeLocations.forEach((e, { name: r, type: s }) => {
                        if (!this.attributes[r]) {
                            console.warn(`active attribute ${r} not being supplied`);
                            return
                        }
                        let n = this.attributes[r];
                        this.gl.bindBuffer(n.target, n.buffer),
                            this.glState.boundBuffer = n.buffer;
                        let o = 1;
                        s === 35674 && (o = 2),
                            s === 35675 && (o = 3),
                            s === 35676 && (o = 4);
                        let a = n.size / o
                            , l = o === 1 ? 0 : o * o * 4
                            , h = o === 1 ? 0 : o * 4;
                        for (let c = 0; c < o; c++)
                            this.gl.vertexAttribPointer(e + c, a, n.type, n.normalized, n.stride + l, n.offset + c * h),
                                this.gl.enableVertexAttribArray(e + c),
                                this.gl.renderer.vertexAttribDivisor(e + c, n.divisor)
                    }
                    ),
                        this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer)
                }
                draw({ program: t, mode: e = this.gl.TRIANGLES }) {
                    var s;
                    this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` && (this.VAOs[t.attributeOrder] || this.createVAO(t),
                        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
                        this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`),
                        t.attributeLocations.forEach((n, { name: o }) => {
                            let a = this.attributes[o];
                            a.needsUpdate && this.updateAttribute(a)
                        }
                        );
                    let r = 2;
                    ((s = this.attributes.index) == null ? void 0 : s.type) === this.gl.UNSIGNED_INT && (r = 4),
                        this.isInstanced ? this.attributes.index ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * r, this.instancedCount) : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount) : this.attributes.index ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * r) : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count)
                }
                getPosition() {
                    let t = this.attributes.position;
                    if (t.data)
                        return t;
                    if (!sp)
                        return console.warn("No position buffer data found to compute bounds"),
                            sp = !0
                }
                computeBoundingBox(t) {
                    t || (t = this.getPosition());
                    let e = t.data
                        , r = t.size;
                    this.bounds || (this.bounds = {
                        min: new S,
                        max: new S,
                        center: new S,
                        scale: new S,
                        radius: 1 / 0
                    });
                    let s = this.bounds.min
                        , n = this.bounds.max
                        , o = this.bounds.center
                        , a = this.bounds.scale;
                    s.set(1 / 0),
                        n.set(-1 / 0);
                    for (let l = 0, h = e.length; l < h; l += r) {
                        let c = e[l]
                            , u = e[l + 1]
                            , d = e[l + 2];
                        s.x = Math.min(c, s.x),
                            s.y = Math.min(u, s.y),
                            s.z = Math.min(d, s.z),
                            n.x = Math.max(c, n.x),
                            n.y = Math.max(u, n.y),
                            n.z = Math.max(d, n.z)
                    }
                    a.sub(n, s),
                        o.add(s, n).divide(2)
                }
                computeBoundingSphere(t) {
                    t || (t = this.getPosition());
                    let e = t.data
                        , r = t.size;
                    this.bounds || this.computeBoundingBox(t);
                    let s = 0;
                    for (let n = 0, o = e.length; n < o; n += r)
                        rp.fromArray(e, n),
                            s = Math.max(s, this.bounds.center.squaredDistance(rp));
                    this.bounds.radius = Math.sqrt(s)
                }
                remove() {
                    for (let t in this.VAOs)
                        this.gl.renderer.deleteVertexArray(this.VAOs[t]),
                            delete this.VAOs[t];
                    for (let t in this.attributes)
                        this.gl.deleteBuffer(this.attributes[t].buffer),
                            delete this.attributes[t]
                }
            }
    }
    );
    function il(i, t, e, r) {
        r = r.length ? J_(r) : r;
        let s = i.renderer.state.uniformLocations.get(e);
        if (r.length)
            if (s === void 0 || s.length !== r.length)
                i.renderer.state.uniformLocations.set(e, r.slice(0));
            else {
                if (tb(s, r))
                    return;
                s.set ? s.set(r) : eb(s, r),
                    i.renderer.state.uniformLocations.set(e, s)
            }
        else {
            if (s === r)
                return;
            i.renderer.state.uniformLocations.set(e, r)
        }
        switch (t) {
            case 5126:
                return r.length ? i.uniform1fv(e, r) : i.uniform1f(e, r);
            case 35664:
                return i.uniform2fv(e, r);
            case 35665:
                return i.uniform3fv(e, r);
            case 35666:
                return i.uniform4fv(e, r);
            case 35670:
            case 5124:
            case 35678:
            case 36306:
            case 35680:
            case 36289:
                return r.length ? i.uniform1iv(e, r) : i.uniform1i(e, r);
            case 35671:
            case 35667:
                return i.uniform2iv(e, r);
            case 35672:
            case 35668:
                return i.uniform3iv(e, r);
            case 35673:
            case 35669:
                return i.uniform4iv(e, r);
            case 35674:
                return i.uniformMatrix2fv(e, !1, r);
            case 35675:
                return i.uniformMatrix3fv(e, !1, r);
            case 35676:
                return i.uniformMatrix4fv(e, !1, r)
        }
    }
    function op(i) {
        let t = i.split(`
`);
        for (let e = 0; e < t.length; e++)
            t[e] = e + 1 + ": " + t[e];
        return t.join(`
`)
    }
    function J_(i) {
        let t = i.length
            , e = i[0].length;
        if (e === void 0)
            return i;
        let r = t * e
            , s = np[r];
        s || (np[r] = s = new Float32Array(r));
        for (let n = 0; n < t; n++)
            s.set(i[n], n * e);
        return s
    }
    function tb(i, t) {
        if (i.length !== t.length)
            return !1;
        for (let e = 0, r = i.length; e < r; e++)
            if (i[e] !== t[e])
                return !1;
        return !0
    }
    function eb(i, t) {
        for (let e = 0, r = i.length; e < r; e++)
            i[e] = t[e]
    }
    function ap(i) {
        rl > 100 || (console.warn(i),
            rl++,
            rl > 100 && console.warn("More than 100 program warnings - stopping logs."))
    }
    var Z_, np, Y, rl, Qt = z(() => {
        Z_ = 1,
            np = {},
            Y = class {
                constructor(t, { vertex: e, fragment: r, uniforms: s = {}, transparent: n = !1, cullFace: o = t.BACK, frontFace: a = t.CCW, depthTest: l = !0, depthWrite: h = !0, depthFunc: c = t.LEQUAL } = {}) {
                    t.canvas || console.error("gl not passed as first argument to Program"),
                        this.gl = t,
                        this.uniforms = s,
                        this.id = Z_++,
                        e || console.warn("vertex shader not supplied"),
                        r || console.warn("fragment shader not supplied"),
                        this.transparent = n,
                        this.cullFace = o,
                        this.frontFace = a,
                        this.depthTest = l,
                        this.depthWrite = h,
                        this.depthFunc = c,
                        this.blendFunc = {},
                        this.blendEquation = {},
                        this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
                        this.vertexShader = t.createShader(t.VERTEX_SHADER),
                        this.fragmentShader = t.createShader(t.FRAGMENT_SHADER),
                        this.program = t.createProgram(),
                        t.attachShader(this.program, this.vertexShader),
                        t.attachShader(this.program, this.fragmentShader),
                        this.setShaders({
                            vertex: e,
                            fragment: r
                        })
                }
                setShaders({ vertex: t, fragment: e }) {
                    if (t && (this.gl.shaderSource(this.vertexShader, t),
                        this.gl.compileShader(this.vertexShader),
                        this.gl.getShaderInfoLog(this.vertexShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${op(t)}`)),
                        e && (this.gl.shaderSource(this.fragmentShader, e),
                            this.gl.compileShader(this.fragmentShader),
                            this.gl.getShaderInfoLog(this.fragmentShader) !== "" && console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${op(e)}`)),
                        this.gl.linkProgram(this.program),
                        !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
                        return console.warn(this.gl.getProgramInfoLog(this.program));
                    this.uniformLocations = new Map;
                    let r = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
                    for (let o = 0; o < r; o++) {
                        let a = this.gl.getActiveUniform(this.program, o);
                        this.uniformLocations.set(a, this.gl.getUniformLocation(this.program, a.name));
                        let l = a.name.match(/(\w+)/g);
                        a.uniformName = l[0],
                            a.nameComponents = l.slice(1)
                    }
                    this.attributeLocations = new Map;
                    let s = []
                        , n = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
                    for (let o = 0; o < n; o++) {
                        let a = this.gl.getActiveAttrib(this.program, o)
                            , l = this.gl.getAttribLocation(this.program, a.name);
                        l !== -1 && (s[l] = a.name,
                            this.attributeLocations.set(a, l))
                    }
                    this.attributeOrder = s.join("")
                }
                setBlendFunc(t, e, r, s) {
                    this.blendFunc.src = t,
                        this.blendFunc.dst = e,
                        this.blendFunc.srcAlpha = r,
                        this.blendFunc.dstAlpha = s,
                        t && (this.transparent = !0)
                }
                setBlendEquation(t, e) {
                    this.blendEquation.modeRGB = t,
                        this.blendEquation.modeAlpha = e
                }
                applyState() {
                    this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                        this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                        this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                        this.gl.renderer.setFrontFace(this.frontFace),
                        this.gl.renderer.setDepthMask(this.depthWrite),
                        this.gl.renderer.setDepthFunc(this.depthFunc),
                        this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha)
                }
                use({ flipFaces: t = !1 } = {}) {
                    let e = -1;
                    this.gl.renderer.state.currentProgram === this.id || (this.gl.useProgram(this.program),
                        this.gl.renderer.state.currentProgram = this.id),
                        this.uniformLocations.forEach((s, n) => {
                            let o = this.uniforms[n.uniformName];
                            for (let a of n.nameComponents) {
                                if (!o)
                                    break;
                                if (a in o)
                                    o = o[a];
                                else {
                                    if (Array.isArray(o.value))
                                        break;
                                    o = void 0;
                                    break
                                }
                            }
                            if (!o)
                                return ap(`Active uniform ${n.name} has not been supplied`);
                            if (o && o.value === void 0)
                                return ap(`${n.name} uniform is missing a value parameter`);
                            if (o.value.texture)
                                return e = e + 1,
                                    o.value.update(e),
                                    il(this.gl, n.type, s, e);
                            if (o.value.length && o.value[0].texture) {
                                let a = [];
                                return o.value.forEach(l => {
                                    e = e + 1,
                                        l.update(e),
                                        a.push(e)
                                }
                                ),
                                    il(this.gl, n.type, s, a)
                            }
                            il(this.gl, n.type, s, o.value)
                        }
                        ),
                        this.applyState(),
                        t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW)
                }
                remove() {
                    this.gl.deleteProgram(this.program)
                }
            }
            ;
        rl = 0
    }
    );
    var sl, ib, cr, lp = z(() => {
        tt();
        sl = new S,
            ib = 1,
            cr = class {
                constructor({ canvas: t = document.createElement("canvas"), width: e = 300, height: r = 150, dpr: s = 1, alpha: n = !1, depth: o = !0, stencil: a = !1, antialias: l = !1, premultipliedAlpha: h = !1, preserveDrawingBuffer: c = !1, powerPreference: u = "default", autoClear: d = !0, webgl: f = 2 } = {}) {
                    let m = {
                        alpha: n,
                        depth: o,
                        stencil: a,
                        antialias: l,
                        premultipliedAlpha: h,
                        preserveDrawingBuffer: c,
                        powerPreference: u
                    };
                    this.dpr = s,
                        this.alpha = n,
                        this.color = !0,
                        this.depth = o,
                        this.stencil = a,
                        this.premultipliedAlpha = h,
                        this.autoClear = d,
                        this.id = ib++,
                        f === 2 && (this.gl = t.getContext("webgl2", m)),
                        this.isWebgl2 = !!this.gl,
                        this.gl || (this.gl = t.getContext("webgl", m)),
                        this.gl || console.error("unable to create webgl context"),
                        this.gl.renderer = this,
                        this.setSize(e, r),
                        this.state = {},
                        this.state.blendFunc = {
                            src: this.gl.ONE,
                            dst: this.gl.ZERO
                        },
                        this.state.blendEquation = {
                            modeRGB: this.gl.FUNC_ADD
                        },
                        this.state.cullFace = !1,
                        this.state.frontFace = this.gl.CCW,
                        this.state.depthMask = !0,
                        this.state.depthFunc = this.gl.LEQUAL,
                        this.state.premultiplyAlpha = !1,
                        this.state.flipY = !1,
                        this.state.unpackAlignment = 4,
                        this.state.framebuffer = null,
                        this.state.viewport = {
                            x: 0,
                            y: 0,
                            width: null,
                            height: null
                        },
                        this.state.textureUnits = [],
                        this.state.activeTextureUnit = 0,
                        this.state.boundBuffer = null,
                        this.state.uniformLocations = new Map,
                        this.state.currentProgram = null,
                        this.extensions = {},
                        this.isWebgl2 ? (this.getExtension("EXT_color_buffer_float"),
                            this.getExtension("OES_texture_float_linear")) : (this.getExtension("OES_texture_float"),
                                this.getExtension("OES_texture_float_linear"),
                                this.getExtension("OES_texture_half_float"),
                                this.getExtension("OES_texture_half_float_linear"),
                                this.getExtension("OES_element_index_uint"),
                                this.getExtension("OES_standard_derivatives"),
                                this.getExtension("EXT_sRGB"),
                                this.getExtension("WEBGL_depth_texture"),
                                this.getExtension("WEBGL_draw_buffers")),
                        this.getExtension("WEBGL_compressed_texture_astc"),
                        this.getExtension("EXT_texture_compression_bptc"),
                        this.getExtension("WEBGL_compressed_texture_s3tc"),
                        this.getExtension("WEBGL_compressed_texture_etc1"),
                        this.getExtension("WEBGL_compressed_texture_pvrtc"),
                        this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                        this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE"),
                        this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE"),
                        this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE"),
                        this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES"),
                        this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES"),
                        this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES"),
                        this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL"),
                        this.parameters = {},
                        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                        this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                }
                setSize(t, e) {
                    this.width = t,
                        this.height = e,
                        this.gl.canvas.width = t * this.dpr,
                        this.gl.canvas.height = e * this.dpr,
                        this.gl.canvas.style && Object.assign(this.gl.canvas.style, {
                            width: t + "px",
                            height: e + "px"
                        })
                }
                setViewport(t, e, r = 0, s = 0) {
                    this.state.viewport.width === t && this.state.viewport.height === e || (this.state.viewport.width = t,
                        this.state.viewport.height = e,
                        this.state.viewport.x = r,
                        this.state.viewport.y = s,
                        this.gl.viewport(r, s, t, e))
                }
                setScissor(t, e, r = 0, s = 0) {
                    this.gl.scissor(r, s, t, e)
                }
                enable(t) {
                    this.state[t] !== !0 && (this.gl.enable(t),
                        this.state[t] = !0)
                }
                disable(t) {
                    this.state[t] !== !1 && (this.gl.disable(t),
                        this.state[t] = !1)
                }
                setBlendFunc(t, e, r, s) {
                    this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === s || (this.state.blendFunc.src = t,
                        this.state.blendFunc.dst = e,
                        this.state.blendFunc.srcAlpha = r,
                        this.state.blendFunc.dstAlpha = s,
                        r !== void 0 ? this.gl.blendFuncSeparate(t, e, r, s) : this.gl.blendFunc(t, e))
                }
                setBlendEquation(t, e) {
                    t = t || this.gl.FUNC_ADD,
                        !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) && (this.state.blendEquation.modeRGB = t,
                            this.state.blendEquation.modeAlpha = e,
                            e !== void 0 ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t))
                }
                setCullFace(t) {
                    this.state.cullFace !== t && (this.state.cullFace = t,
                        this.gl.cullFace(t))
                }
                setFrontFace(t) {
                    this.state.frontFace !== t && (this.state.frontFace = t,
                        this.gl.frontFace(t))
                }
                setDepthMask(t) {
                    this.state.depthMask !== t && (this.state.depthMask = t,
                        this.gl.depthMask(t))
                }
                setDepthFunc(t) {
                    this.state.depthFunc !== t && (this.state.depthFunc = t,
                        this.gl.depthFunc(t))
                }
                activeTexture(t) {
                    this.state.activeTextureUnit !== t && (this.state.activeTextureUnit = t,
                        this.gl.activeTexture(this.gl.TEXTURE0 + t))
                }
                bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
                    this.state.framebuffer !== e && (this.state.framebuffer = e,
                        this.gl.bindFramebuffer(t, e))
                }
                getExtension(t, e, r) {
                    return e && this.gl[e] ? this.gl[e].bind(this.gl) : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
                        e ? this.extensions[t] ? this.extensions[t][r].bind(this.extensions[t]) : null : this.extensions[t])
                }
                sortOpaque(t, e) {
                    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id
                }
                sortTransparent(t, e) {
                    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id
                }
                sortUI(t, e) {
                    return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id
                }
                getRenderList({ scene: t, camera: e, frustumCull: r, sort: s }) {
                    let n = [];
                    if (e && r && e.updateFrustum(),
                        t.traverse(o => {
                            if (!o.visible)
                                return !0;
                            o.draw && (r && o.frustumCulled && e && !e.frustumIntersectsMesh(o) || n.push(o))
                        }
                        ),
                        s) {
                        let o = []
                            , a = []
                            , l = [];
                        n.forEach(h => {
                            h.program.transparent ? h.program.depthTest ? a.push(h) : l.push(h) : o.push(h),
                                h.zDepth = 0,
                                !(h.renderOrder !== 0 || !h.program.depthTest || !e) && (h.worldMatrix.getTranslation(sl),
                                    sl.applyMatrix4(e.projectionViewMatrix),
                                    h.zDepth = sl.z)
                        }
                        ),
                            o.sort(this.sortOpaque),
                            a.sort(this.sortTransparent),
                            l.sort(this.sortUI),
                            n = o.concat(a, l)
                    }
                    return n
                }
                render({ scene: t, camera: e, target: r = null, update: s = !0, sort: n = !0, frustumCull: o = !0, clear: a }) {
                    r === null ? (this.bindFramebuffer(),
                        this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(r),
                            this.setViewport(r.width, r.height)),
                        (a || this.autoClear && a !== !1) && (this.depth && (!r || r.depth) && (this.enable(this.gl.DEPTH_TEST),
                            this.setDepthMask(!0)),
                            this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
                        s && t.updateMatrixWorld(),
                        e && e.updateMatrixWorld(),
                        this.getRenderList({
                            scene: t,
                            camera: e,
                            frustumCull: o,
                            sort: n
                        }).forEach(h => {
                            h.draw({
                                camera: e
                            })
                        }
                        )
                }
            }
    }
    );
    function yn(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i[2] = t[2],
            i[3] = t[3],
            i
    }
    function xn(i, t, e, r, s) {
        return i[0] = t,
            i[1] = e,
            i[2] = r,
            i[3] = s,
            i
    }
    function nl(i, t, e) {
        return i[0] = t[0] * e,
            i[1] = t[1] * e,
            i[2] = t[2] * e,
            i[3] = t[3] * e,
            i
    }
    function En(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = e * e + r * r + s * s + n * n;
        return o > 0 && (o = 1 / Math.sqrt(o)),
            i[0] = e * o,
            i[1] = r * o,
            i[2] = s * o,
            i[3] = n * o,
            i
    }
    function Cn(i, t) {
        return i[0] * t[0] + i[1] * t[1] + i[2] * t[2] + i[3] * t[3]
    }
    var ol = z(() => { }
    );
    function cp(i) {
        return i[0] = 0,
            i[1] = 0,
            i[2] = 0,
            i[3] = 1,
            i
    }
    function up(i, t, e) {
        e = e * .5;
        let r = Math.sin(e);
        return i[0] = r * t[0],
            i[1] = r * t[1],
            i[2] = r * t[2],
            i[3] = Math.cos(e),
            i
    }
    function al(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = e[0]
            , l = e[1]
            , h = e[2]
            , c = e[3];
        return i[0] = r * c + o * a + s * h - n * l,
            i[1] = s * c + o * l + n * a - r * h,
            i[2] = n * c + o * h + r * l - s * a,
            i[3] = o * c - r * a - s * l - n * h,
            i
    }
    function dp(i, t, e) {
        e *= .5;
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = Math.sin(e)
            , l = Math.cos(e);
        return i[0] = r * l + o * a,
            i[1] = s * l + n * a,
            i[2] = n * l - s * a,
            i[3] = o * l - r * a,
            i
    }
    function pp(i, t, e) {
        e *= .5;
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = Math.sin(e)
            , l = Math.cos(e);
        return i[0] = r * l - n * a,
            i[1] = s * l + o * a,
            i[2] = n * l + r * a,
            i[3] = o * l - s * a,
            i
    }
    function fp(i, t, e) {
        e *= .5;
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = Math.sin(e)
            , l = Math.cos(e);
        return i[0] = r * l + s * a,
            i[1] = s * l - r * a,
            i[2] = n * l + o * a,
            i[3] = o * l - n * a,
            i
    }
    function mp(i, t, e, r) {
        let s = t[0], n = t[1], o = t[2], a = t[3], l = e[0], h = e[1], c = e[2], u = e[3], d, f, m, p, v;
        return f = s * l + n * h + o * c + a * u,
            f < 0 && (f = -f,
                l = -l,
                h = -h,
                c = -c,
                u = -u),
            1 - f > 1e-6 ? (d = Math.acos(f),
                m = Math.sin(d),
                p = Math.sin((1 - r) * d) / m,
                v = Math.sin(r * d) / m) : (p = 1 - r,
                    v = r),
            i[0] = p * s + v * l,
            i[1] = p * n + v * h,
            i[2] = p * o + v * c,
            i[3] = p * a + v * u,
            i
    }
    function vp(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = e * e + r * r + s * s + n * n
            , a = o ? 1 / o : 0;
        return i[0] = -e * a,
            i[1] = -r * a,
            i[2] = -s * a,
            i[3] = n * a,
            i
    }
    function gp(i, t) {
        return i[0] = -t[0],
            i[1] = -t[1],
            i[2] = -t[2],
            i[3] = t[3],
            i
    }
    function _p(i, t) {
        let e = t[0] + t[4] + t[8], r;
        if (e > 0)
            r = Math.sqrt(e + 1),
                i[3] = .5 * r,
                r = .5 / r,
                i[0] = (t[5] - t[7]) * r,
                i[1] = (t[6] - t[2]) * r,
                i[2] = (t[1] - t[3]) * r;
        else {
            let s = 0;
            t[4] > t[0] && (s = 1),
                t[8] > t[s * 3 + s] && (s = 2);
            let n = (s + 1) % 3
                , o = (s + 2) % 3;
            r = Math.sqrt(t[s * 3 + s] - t[n * 3 + n] - t[o * 3 + o] + 1),
                i[s] = .5 * r,
                r = .5 / r,
                i[3] = (t[n * 3 + o] - t[o * 3 + n]) * r,
                i[n] = (t[n * 3 + s] + t[s * 3 + n]) * r,
                i[o] = (t[o * 3 + s] + t[s * 3 + o]) * r
        }
        return i
    }
    function bp(i, t, e = "YXZ") {
        let r = Math.sin(t[0] * .5)
            , s = Math.cos(t[0] * .5)
            , n = Math.sin(t[1] * .5)
            , o = Math.cos(t[1] * .5)
            , a = Math.sin(t[2] * .5)
            , l = Math.cos(t[2] * .5);
        return e === "XYZ" ? (i[0] = r * o * l + s * n * a,
            i[1] = s * n * l - r * o * a,
            i[2] = s * o * a + r * n * l,
            i[3] = s * o * l - r * n * a) : e === "YXZ" ? (i[0] = r * o * l + s * n * a,
                i[1] = s * n * l - r * o * a,
                i[2] = s * o * a - r * n * l,
                i[3] = s * o * l + r * n * a) : e === "ZXY" ? (i[0] = r * o * l - s * n * a,
                    i[1] = s * n * l + r * o * a,
                    i[2] = s * o * a + r * n * l,
                    i[3] = s * o * l - r * n * a) : e === "ZYX" ? (i[0] = r * o * l - s * n * a,
                        i[1] = s * n * l + r * o * a,
                        i[2] = s * o * a - r * n * l,
                        i[3] = s * o * l + r * n * a) : e === "YZX" ? (i[0] = r * o * l + s * n * a,
                            i[1] = s * n * l + r * o * a,
                            i[2] = s * o * a - r * n * l,
                            i[3] = s * o * l - r * n * a) : e === "XZY" && (i[0] = r * o * l - s * n * a,
                                i[1] = s * n * l - r * o * a,
                                i[2] = s * o * a + r * n * l,
                                i[3] = s * o * l + r * n * a),
            i
    }
    var wp, yp, xp, Ep, Cp = z(() => {
        ol();
        wp = yn,
            yp = xn,
            xp = Cn,
            Ep = En
    }
    );
    var $t, Kr = z(() => {
        Cp();
        $t = class extends Array {
            constructor(t = 0, e = 0, r = 0, s = 1) {
                super(t, e, r, s),
                    this.onChange = () => { }
                    ,
                    this._target = this;
                let n = ["0", "1", "2", "3"];
                return new Proxy(this, {
                    set(o, a) {
                        let l = Reflect.set(...arguments);
                        return l && n.includes(a) && o.onChange(),
                            l
                    }
                })
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(t) {
                this._target[0] = t,
                    this.onChange()
            }
            set y(t) {
                this._target[1] = t,
                    this.onChange()
            }
            set z(t) {
                this._target[2] = t,
                    this.onChange()
            }
            set w(t) {
                this._target[3] = t,
                    this.onChange()
            }
            identity() {
                return cp(this._target),
                    this.onChange(),
                    this
            }
            set(t, e, r, s) {
                return t.length ? this.copy(t) : (yp(this._target, t, e, r, s),
                    this.onChange(),
                    this)
            }
            rotateX(t) {
                return dp(this._target, this._target, t),
                    this.onChange(),
                    this
            }
            rotateY(t) {
                return pp(this._target, this._target, t),
                    this.onChange(),
                    this
            }
            rotateZ(t) {
                return fp(this._target, this._target, t),
                    this.onChange(),
                    this
            }
            inverse(t = this._target) {
                return vp(this._target, t),
                    this.onChange(),
                    this
            }
            conjugate(t = this._target) {
                return gp(this._target, t),
                    this.onChange(),
                    this
            }
            copy(t) {
                return wp(this._target, t),
                    this.onChange(),
                    this
            }
            normalize(t = this._target) {
                return Ep(this._target, t),
                    this.onChange(),
                    this
            }
            multiply(t, e) {
                return e ? al(this._target, t, e) : al(this._target, this._target, t),
                    this.onChange(),
                    this
            }
            dot(t) {
                return xp(this._target, t)
            }
            fromMatrix3(t) {
                return _p(this._target, t),
                    this.onChange(),
                    this
            }
            fromEuler(t, e) {
                return bp(this._target, t, t.order),
                    e || this.onChange(),
                    this
            }
            fromAxisAngle(t, e) {
                return up(this._target, t, e),
                    this.onChange(),
                    this
            }
            slerp(t, e) {
                return mp(this._target, this._target, t, e),
                    this.onChange(),
                    this
            }
            fromArray(t, e = 0) {
                return this._target[0] = t[e],
                    this._target[1] = t[e + 1],
                    this._target[2] = t[e + 2],
                    this._target[3] = t[e + 3],
                    this.onChange(),
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0],
                    t[e + 1] = this[1],
                    t[e + 2] = this[2],
                    t[e + 3] = this[3],
                    t
            }
        }
    }
    );
    function Pp(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i[2] = t[2],
            i[3] = t[3],
            i[4] = t[4],
            i[5] = t[5],
            i[6] = t[6],
            i[7] = t[7],
            i[8] = t[8],
            i[9] = t[9],
            i[10] = t[10],
            i[11] = t[11],
            i[12] = t[12],
            i[13] = t[13],
            i[14] = t[14],
            i[15] = t[15],
            i
    }
    function Mp(i, t, e, r, s, n, o, a, l, h, c, u, d, f, m, p, v) {
        return i[0] = t,
            i[1] = e,
            i[2] = r,
            i[3] = s,
            i[4] = n,
            i[5] = o,
            i[6] = a,
            i[7] = l,
            i[8] = h,
            i[9] = c,
            i[10] = u,
            i[11] = d,
            i[12] = f,
            i[13] = m,
            i[14] = p,
            i[15] = v,
            i
    }
    function Sp(i) {
        return i[0] = 1,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = 1,
            i[6] = 0,
            i[7] = 0,
            i[8] = 0,
            i[9] = 0,
            i[10] = 1,
            i[11] = 0,
            i[12] = 0,
            i[13] = 0,
            i[14] = 0,
            i[15] = 1,
            i
    }
    function Tp(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = t[4]
            , a = t[5]
            , l = t[6]
            , h = t[7]
            , c = t[8]
            , u = t[9]
            , d = t[10]
            , f = t[11]
            , m = t[12]
            , p = t[13]
            , v = t[14]
            , g = t[15]
            , w = e * a - r * o
            , b = e * l - s * o
            , x = e * h - n * o
            , _ = r * l - s * a
            , y = r * h - n * a
            , P = s * h - n * l
            , E = c * p - u * m
            , C = c * v - d * m
            , M = c * g - f * m
            , A = u * v - d * p
            , T = u * g - f * p
            , O = d * g - f * v
            , k = w * O - b * T + x * A + _ * M - y * C + P * E;
        return k ? (k = 1 / k,
            i[0] = (a * O - l * T + h * A) * k,
            i[1] = (s * T - r * O - n * A) * k,
            i[2] = (p * P - v * y + g * _) * k,
            i[3] = (d * y - u * P - f * _) * k,
            i[4] = (l * M - o * O - h * C) * k,
            i[5] = (e * O - s * M + n * C) * k,
            i[6] = (v * x - m * P - g * b) * k,
            i[7] = (c * P - d * x + f * b) * k,
            i[8] = (o * T - a * M + h * E) * k,
            i[9] = (r * M - e * T - n * E) * k,
            i[10] = (m * y - p * x + g * w) * k,
            i[11] = (u * x - c * y - f * w) * k,
            i[12] = (a * C - o * A - l * E) * k,
            i[13] = (e * A - r * C + s * E) * k,
            i[14] = (p * b - m * _ - v * w) * k,
            i[15] = (c * _ - u * b + d * w) * k,
            i) : null
    }
    function ll(i) {
        let t = i[0]
            , e = i[1]
            , r = i[2]
            , s = i[3]
            , n = i[4]
            , o = i[5]
            , a = i[6]
            , l = i[7]
            , h = i[8]
            , c = i[9]
            , u = i[10]
            , d = i[11]
            , f = i[12]
            , m = i[13]
            , p = i[14]
            , v = i[15]
            , g = t * o - e * n
            , w = t * a - r * n
            , b = t * l - s * n
            , x = e * a - r * o
            , _ = e * l - s * o
            , y = r * l - s * a
            , P = h * m - c * f
            , E = h * p - u * f
            , C = h * v - d * f
            , M = c * p - u * m
            , A = c * v - d * m
            , T = u * v - d * p;
        return g * T - w * A + b * M + x * C - _ * E + y * P
    }
    function hl(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = t[4]
            , l = t[5]
            , h = t[6]
            , c = t[7]
            , u = t[8]
            , d = t[9]
            , f = t[10]
            , m = t[11]
            , p = t[12]
            , v = t[13]
            , g = t[14]
            , w = t[15]
            , b = e[0]
            , x = e[1]
            , _ = e[2]
            , y = e[3];
        return i[0] = b * r + x * a + _ * u + y * p,
            i[1] = b * s + x * l + _ * d + y * v,
            i[2] = b * n + x * h + _ * f + y * g,
            i[3] = b * o + x * c + _ * m + y * w,
            b = e[4],
            x = e[5],
            _ = e[6],
            y = e[7],
            i[4] = b * r + x * a + _ * u + y * p,
            i[5] = b * s + x * l + _ * d + y * v,
            i[6] = b * n + x * h + _ * f + y * g,
            i[7] = b * o + x * c + _ * m + y * w,
            b = e[8],
            x = e[9],
            _ = e[10],
            y = e[11],
            i[8] = b * r + x * a + _ * u + y * p,
            i[9] = b * s + x * l + _ * d + y * v,
            i[10] = b * n + x * h + _ * f + y * g,
            i[11] = b * o + x * c + _ * m + y * w,
            b = e[12],
            x = e[13],
            _ = e[14],
            y = e[15],
            i[12] = b * r + x * a + _ * u + y * p,
            i[13] = b * s + x * l + _ * d + y * v,
            i[14] = b * n + x * h + _ * f + y * g,
            i[15] = b * o + x * c + _ * m + y * w,
            i
    }
    function Ap(i, t, e) {
        let r = e[0], s = e[1], n = e[2], o, a, l, h, c, u, d, f, m, p, v, g;
        return t === i ? (i[12] = t[0] * r + t[4] * s + t[8] * n + t[12],
            i[13] = t[1] * r + t[5] * s + t[9] * n + t[13],
            i[14] = t[2] * r + t[6] * s + t[10] * n + t[14],
            i[15] = t[3] * r + t[7] * s + t[11] * n + t[15]) : (o = t[0],
                a = t[1],
                l = t[2],
                h = t[3],
                c = t[4],
                u = t[5],
                d = t[6],
                f = t[7],
                m = t[8],
                p = t[9],
                v = t[10],
                g = t[11],
                i[0] = o,
                i[1] = a,
                i[2] = l,
                i[3] = h,
                i[4] = c,
                i[5] = u,
                i[6] = d,
                i[7] = f,
                i[8] = m,
                i[9] = p,
                i[10] = v,
                i[11] = g,
                i[12] = o * r + c * s + m * n + t[12],
                i[13] = a * r + u * s + p * n + t[13],
                i[14] = l * r + d * s + v * n + t[14],
                i[15] = h * r + f * s + g * n + t[15]),
            i
    }
    function kp(i, t, e) {
        let r = e[0]
            , s = e[1]
            , n = e[2];
        return i[0] = t[0] * r,
            i[1] = t[1] * r,
            i[2] = t[2] * r,
            i[3] = t[3] * r,
            i[4] = t[4] * s,
            i[5] = t[5] * s,
            i[6] = t[6] * s,
            i[7] = t[7] * s,
            i[8] = t[8] * n,
            i[9] = t[9] * n,
            i[10] = t[10] * n,
            i[11] = t[11] * n,
            i[12] = t[12],
            i[13] = t[13],
            i[14] = t[14],
            i[15] = t[15],
            i
    }
    function Op(i, t, e, r) {
        let s = r[0], n = r[1], o = r[2], a = Math.hypot(s, n, o), l, h, c, u, d, f, m, p, v, g, w, b, x, _, y, P, E, C, M, A, T, O, k, F;
        return Math.abs(a) < sb ? null : (a = 1 / a,
            s *= a,
            n *= a,
            o *= a,
            l = Math.sin(e),
            h = Math.cos(e),
            c = 1 - h,
            u = t[0],
            d = t[1],
            f = t[2],
            m = t[3],
            p = t[4],
            v = t[5],
            g = t[6],
            w = t[7],
            b = t[8],
            x = t[9],
            _ = t[10],
            y = t[11],
            P = s * s * c + h,
            E = n * s * c + o * l,
            C = o * s * c - n * l,
            M = s * n * c - o * l,
            A = n * n * c + h,
            T = o * n * c + s * l,
            O = s * o * c + n * l,
            k = n * o * c - s * l,
            F = o * o * c + h,
            i[0] = u * P + p * E + b * C,
            i[1] = d * P + v * E + x * C,
            i[2] = f * P + g * E + _ * C,
            i[3] = m * P + w * E + y * C,
            i[4] = u * M + p * A + b * T,
            i[5] = d * M + v * A + x * T,
            i[6] = f * M + g * A + _ * T,
            i[7] = m * M + w * A + y * T,
            i[8] = u * O + p * k + b * F,
            i[9] = d * O + v * k + x * F,
            i[10] = f * O + g * k + _ * F,
            i[11] = m * O + w * k + y * F,
            t !== i && (i[12] = t[12],
                i[13] = t[13],
                i[14] = t[14],
                i[15] = t[15]),
            i)
    }
    function Lp(i, t) {
        return i[0] = t[12],
            i[1] = t[13],
            i[2] = t[14],
            i
    }
    function cl(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[4]
            , o = t[5]
            , a = t[6]
            , l = t[8]
            , h = t[9]
            , c = t[10];
        return i[0] = Math.hypot(e, r, s),
            i[1] = Math.hypot(n, o, a),
            i[2] = Math.hypot(l, h, c),
            i
    }
    function Rp(i) {
        let t = i[0]
            , e = i[1]
            , r = i[2]
            , s = i[4]
            , n = i[5]
            , o = i[6]
            , a = i[8]
            , l = i[9]
            , h = i[10]
            , c = t * t + e * e + r * r
            , u = s * s + n * n + o * o
            , d = a * a + l * l + h * h;
        return Math.sqrt(Math.max(c, u, d))
    }
    function Fp(i, t, e, r) {
        let s = Ri([i[0], i[1], i[2]])
            , n = Ri([i[4], i[5], i[6]])
            , o = Ri([i[8], i[9], i[10]]);
        ll(i) < 0 && (s = -s),
            e[0] = i[12],
            e[1] = i[13],
            e[2] = i[14];
        let l = i.slice()
            , h = 1 / s
            , c = 1 / n
            , u = 1 / o;
        l[0] *= h,
            l[1] *= h,
            l[2] *= h,
            l[4] *= c,
            l[5] *= c,
            l[6] *= c,
            l[8] *= u,
            l[9] *= u,
            l[10] *= u,
            ul(t, l),
            r[0] = s,
            r[1] = n,
            r[2] = o
    }
    function Ip(i, t, e, r) {
        let s = i
            , n = t[0]
            , o = t[1]
            , a = t[2]
            , l = t[3]
            , h = n + n
            , c = o + o
            , u = a + a
            , d = n * h
            , f = n * c
            , m = n * u
            , p = o * c
            , v = o * u
            , g = a * u
            , w = l * h
            , b = l * c
            , x = l * u
            , _ = r[0]
            , y = r[1]
            , P = r[2];
        return s[0] = (1 - (p + g)) * _,
            s[1] = (f + x) * _,
            s[2] = (m - b) * _,
            s[3] = 0,
            s[4] = (f - x) * y,
            s[5] = (1 - (d + g)) * y,
            s[6] = (v + w) * y,
            s[7] = 0,
            s[8] = (m + b) * P,
            s[9] = (v - w) * P,
            s[10] = (1 - (d + p)) * P,
            s[11] = 0,
            s[12] = e[0],
            s[13] = e[1],
            s[14] = e[2],
            s[15] = 1,
            s
    }
    function zp(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = e + e
            , a = r + r
            , l = s + s
            , h = e * o
            , c = r * o
            , u = r * a
            , d = s * o
            , f = s * a
            , m = s * l
            , p = n * o
            , v = n * a
            , g = n * l;
        return i[0] = 1 - u - m,
            i[1] = c + g,
            i[2] = d - v,
            i[3] = 0,
            i[4] = c - g,
            i[5] = 1 - h - m,
            i[6] = f + p,
            i[7] = 0,
            i[8] = d + v,
            i[9] = f - p,
            i[10] = 1 - h - u,
            i[11] = 0,
            i[12] = 0,
            i[13] = 0,
            i[14] = 0,
            i[15] = 1,
            i
    }
    function Vp(i, t, e, r, s) {
        let n = 1 / Math.tan(t / 2)
            , o = 1 / (r - s);
        return i[0] = n / e,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = n,
            i[6] = 0,
            i[7] = 0,
            i[8] = 0,
            i[9] = 0,
            i[10] = (s + r) * o,
            i[11] = -1,
            i[12] = 0,
            i[13] = 0,
            i[14] = 2 * s * r * o,
            i[15] = 0,
            i
    }
    function Dp(i, t, e, r, s, n, o) {
        let a = 1 / (t - e)
            , l = 1 / (r - s)
            , h = 1 / (n - o);
        return i[0] = -2 * a,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 0,
            i[5] = -2 * l,
            i[6] = 0,
            i[7] = 0,
            i[8] = 0,
            i[9] = 0,
            i[10] = 2 * h,
            i[11] = 0,
            i[12] = (t + e) * a,
            i[13] = (s + r) * l,
            i[14] = (o + n) * h,
            i[15] = 1,
            i
    }
    function Np(i, t, e, r) {
        let s = t[0]
            , n = t[1]
            , o = t[2]
            , a = r[0]
            , l = r[1]
            , h = r[2]
            , c = s - e[0]
            , u = n - e[1]
            , d = o - e[2]
            , f = c * c + u * u + d * d;
        f === 0 ? d = 1 : (f = 1 / Math.sqrt(f),
            c *= f,
            u *= f,
            d *= f);
        let m = l * d - h * u
            , p = h * c - a * d
            , v = a * u - l * c;
        return f = m * m + p * p + v * v,
            f === 0 && (h ? a += 1e-6 : l ? h += 1e-6 : l += 1e-6,
                m = l * d - h * u,
                p = h * c - a * d,
                v = a * u - l * c,
                f = m * m + p * p + v * v),
            f = 1 / Math.sqrt(f),
            m *= f,
            p *= f,
            v *= f,
            i[0] = m,
            i[1] = p,
            i[2] = v,
            i[3] = 0,
            i[4] = u * v - d * p,
            i[5] = d * m - c * v,
            i[6] = c * p - u * m,
            i[7] = 0,
            i[8] = c,
            i[9] = u,
            i[10] = d,
            i[11] = 0,
            i[12] = s,
            i[13] = n,
            i[14] = o,
            i[15] = 1,
            i
    }
    function dl(i, t, e) {
        return i[0] = t[0] + e[0],
            i[1] = t[1] + e[1],
            i[2] = t[2] + e[2],
            i[3] = t[3] + e[3],
            i[4] = t[4] + e[4],
            i[5] = t[5] + e[5],
            i[6] = t[6] + e[6],
            i[7] = t[7] + e[7],
            i[8] = t[8] + e[8],
            i[9] = t[9] + e[9],
            i[10] = t[10] + e[10],
            i[11] = t[11] + e[11],
            i[12] = t[12] + e[12],
            i[13] = t[13] + e[13],
            i[14] = t[14] + e[14],
            i[15] = t[15] + e[15],
            i
    }
    function pl(i, t, e) {
        return i[0] = t[0] - e[0],
            i[1] = t[1] - e[1],
            i[2] = t[2] - e[2],
            i[3] = t[3] - e[3],
            i[4] = t[4] - e[4],
            i[5] = t[5] - e[5],
            i[6] = t[6] - e[6],
            i[7] = t[7] - e[7],
            i[8] = t[8] - e[8],
            i[9] = t[9] - e[9],
            i[10] = t[10] - e[10],
            i[11] = t[11] - e[11],
            i[12] = t[12] - e[12],
            i[13] = t[13] - e[13],
            i[14] = t[14] - e[14],
            i[15] = t[15] - e[15],
            i
    }
    function Bp(i, t, e) {
        return i[0] = t[0] * e,
            i[1] = t[1] * e,
            i[2] = t[2] * e,
            i[3] = t[3] * e,
            i[4] = t[4] * e,
            i[5] = t[5] * e,
            i[6] = t[6] * e,
            i[7] = t[7] * e,
            i[8] = t[8] * e,
            i[9] = t[9] * e,
            i[10] = t[10] * e,
            i[11] = t[11] * e,
            i[12] = t[12] * e,
            i[13] = t[13] * e,
            i[14] = t[14] * e,
            i[15] = t[15] * e,
            i
    }
    var sb, ul, Up = z(() => {
        wn();
        sb = 1e-6;
        ul = function () {
            let i = [1, 1, 1];
            return function (t, e) {
                let r = i;
                cl(r, e);
                let s = 1 / r[0]
                    , n = 1 / r[1]
                    , o = 1 / r[2]
                    , a = e[0] * s
                    , l = e[1] * n
                    , h = e[2] * o
                    , c = e[4] * s
                    , u = e[5] * n
                    , d = e[6] * o
                    , f = e[8] * s
                    , m = e[9] * n
                    , p = e[10] * o
                    , v = a + u + p
                    , g = 0;
                return v > 0 ? (g = Math.sqrt(v + 1) * 2,
                    t[3] = .25 * g,
                    t[0] = (d - m) / g,
                    t[1] = (f - h) / g,
                    t[2] = (l - c) / g) : a > u && a > p ? (g = Math.sqrt(1 + a - u - p) * 2,
                        t[3] = (d - m) / g,
                        t[0] = .25 * g,
                        t[1] = (l + c) / g,
                        t[2] = (f + h) / g) : u > p ? (g = Math.sqrt(1 + u - a - p) * 2,
                            t[3] = (f - h) / g,
                            t[0] = (l + c) / g,
                            t[1] = .25 * g,
                            t[2] = (d + m) / g) : (g = Math.sqrt(1 + p - a - u) * 2,
                                t[3] = (l - c) / g,
                                t[0] = (f + h) / g,
                                t[1] = (d + m) / g,
                                t[2] = .25 * g),
                    t
            }
        }()
    }
    );
    var X, me = z(() => {
        Up();
        X = class extends Array {
            constructor(t = 1, e = 0, r = 0, s = 0, n = 0, o = 1, a = 0, l = 0, h = 0, c = 0, u = 1, d = 0, f = 0, m = 0, p = 0, v = 1) {
                return super(t, e, r, s, n, o, a, l, h, c, u, d, f, m, p, v),
                    this
            }
            get x() {
                return this[12]
            }
            get y() {
                return this[13]
            }
            get z() {
                return this[14]
            }
            get w() {
                return this[15]
            }
            set x(t) {
                this[12] = t
            }
            set y(t) {
                this[13] = t
            }
            set z(t) {
                this[14] = t
            }
            set w(t) {
                this[15] = t
            }
            set(t, e, r, s, n, o, a, l, h, c, u, d, f, m, p, v) {
                return t.length ? this.copy(t) : (Mp(this, t, e, r, s, n, o, a, l, h, c, u, d, f, m, p, v),
                    this)
            }
            translate(t, e = this) {
                return Ap(this, e, t),
                    this
            }
            rotate(t, e, r = this) {
                return Op(this, r, t, e),
                    this
            }
            scale(t, e = this) {
                return kp(this, e, typeof t == "number" ? [t, t, t] : t),
                    this
            }
            add(t, e) {
                return e ? dl(this, t, e) : dl(this, this, t),
                    this
            }
            sub(t, e) {
                return e ? pl(this, t, e) : pl(this, this, t),
                    this
            }
            multiply(t, e) {
                return t.length ? e ? hl(this, t, e) : hl(this, this, t) : Bp(this, this, t),
                    this
            }
            identity() {
                return Sp(this),
                    this
            }
            copy(t) {
                return Pp(this, t),
                    this
            }
            fromPerspective({ fov: t, aspect: e, near: r, far: s } = {}) {
                return Vp(this, t, e, r, s),
                    this
            }
            fromOrthogonal({ left: t, right: e, bottom: r, top: s, near: n, far: o }) {
                return Dp(this, t, e, r, s, n, o),
                    this
            }
            fromQuaternion(t) {
                return zp(this, t),
                    this
            }
            setPosition(t) {
                return this.x = t[0],
                    this.y = t[1],
                    this.z = t[2],
                    this
            }
            inverse(t = this) {
                return Tp(this, t),
                    this
            }
            compose(t, e, r) {
                return Ip(this, t, e, r),
                    this
            }
            decompose(t, e, r) {
                return Fp(this, t, e, r),
                    this
            }
            getRotation(t) {
                return ul(t, this),
                    this
            }
            getTranslation(t) {
                return Lp(t, this),
                    this
            }
            getScaling(t) {
                return cl(t, this),
                    this
            }
            getMaxScaleOnAxis() {
                return Rp(this)
            }
            lookAt(t, e, r) {
                return Np(this, t, e, r),
                    this
            }
            determinant() {
                return ll(this)
            }
            fromArray(t, e = 0) {
                return this[0] = t[e],
                    this[1] = t[e + 1],
                    this[2] = t[e + 2],
                    this[3] = t[e + 3],
                    this[4] = t[e + 4],
                    this[5] = t[e + 5],
                    this[6] = t[e + 6],
                    this[7] = t[e + 7],
                    this[8] = t[e + 8],
                    this[9] = t[e + 9],
                    this[10] = t[e + 10],
                    this[11] = t[e + 11],
                    this[12] = t[e + 12],
                    this[13] = t[e + 13],
                    this[14] = t[e + 14],
                    this[15] = t[e + 15],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0],
                    t[e + 1] = this[1],
                    t[e + 2] = this[2],
                    t[e + 3] = this[3],
                    t[e + 4] = this[4],
                    t[e + 5] = this[5],
                    t[e + 6] = this[6],
                    t[e + 7] = this[7],
                    t[e + 8] = this[8],
                    t[e + 9] = this[9],
                    t[e + 10] = this[10],
                    t[e + 11] = this[11],
                    t[e + 12] = this[12],
                    t[e + 13] = this[13],
                    t[e + 14] = this[14],
                    t[e + 15] = this[15],
                    t
            }
        }
    }
    );
    function jp(i, t, e = "YXZ") {
        return e === "XYZ" ? (i[1] = Math.asin(Math.min(Math.max(t[8], -1), 1)),
            Math.abs(t[8]) < .99999 ? (i[0] = Math.atan2(-t[9], t[10]),
                i[2] = Math.atan2(-t[4], t[0])) : (i[0] = Math.atan2(t[6], t[5]),
                    i[2] = 0)) : e === "YXZ" ? (i[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1)),
                        Math.abs(t[9]) < .99999 ? (i[1] = Math.atan2(t[8], t[10]),
                            i[2] = Math.atan2(t[1], t[5])) : (i[1] = Math.atan2(-t[2], t[0]),
                                i[2] = 0)) : e === "ZXY" ? (i[0] = Math.asin(Math.min(Math.max(t[6], -1), 1)),
                                    Math.abs(t[6]) < .99999 ? (i[1] = Math.atan2(-t[2], t[10]),
                                        i[2] = Math.atan2(-t[4], t[5])) : (i[1] = 0,
                                            i[2] = Math.atan2(t[1], t[0]))) : e === "ZYX" ? (i[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1)),
                                                Math.abs(t[2]) < .99999 ? (i[0] = Math.atan2(t[6], t[10]),
                                                    i[2] = Math.atan2(t[1], t[0])) : (i[0] = 0,
                                                        i[2] = Math.atan2(-t[4], t[5]))) : e === "YZX" ? (i[2] = Math.asin(Math.min(Math.max(t[1], -1), 1)),
                                                            Math.abs(t[1]) < .99999 ? (i[0] = Math.atan2(-t[9], t[5]),
                                                                i[1] = Math.atan2(-t[2], t[0])) : (i[0] = 0,
                                                                    i[1] = Math.atan2(t[8], t[10]))) : e === "XZY" && (i[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1)),
                                                                        Math.abs(t[4]) < .99999 ? (i[0] = Math.atan2(t[6], t[5]),
                                                                            i[1] = Math.atan2(t[8], t[0])) : (i[0] = Math.atan2(-t[9], t[10]),
                                                                                i[1] = 0)),
            i
    }
    var qp = z(() => { }
    );
    var Hp, ur, fl = z(() => {
        qp();
        me();
        Hp = new X,
            ur = class extends Array {
                constructor(t = 0, e = t, r = t, s = "YXZ") {
                    super(t, e, r),
                        this.order = s,
                        this.onChange = () => { }
                        ,
                        this._target = this;
                    let n = ["0", "1", "2"];
                    return new Proxy(this, {
                        set(o, a) {
                            let l = Reflect.set(...arguments);
                            return l && n.includes(a) && o.onChange(),
                                l
                        }
                    })
                }
                get x() {
                    return this[0]
                }
                get y() {
                    return this[1]
                }
                get z() {
                    return this[2]
                }
                set x(t) {
                    this._target[0] = t,
                        this.onChange()
                }
                set y(t) {
                    this._target[1] = t,
                        this.onChange()
                }
                set z(t) {
                    this._target[2] = t,
                        this.onChange()
                }
                set(t, e = t, r = t) {
                    return t.length ? this.copy(t) : (this._target[0] = t,
                        this._target[1] = e,
                        this._target[2] = r,
                        this.onChange(),
                        this)
                }
                copy(t) {
                    return this._target[0] = t[0],
                        this._target[1] = t[1],
                        this._target[2] = t[2],
                        this.onChange(),
                        this
                }
                reorder(t) {
                    return this._target.order = t,
                        this.onChange(),
                        this
                }
                fromRotationMatrix(t, e = this.order) {
                    return jp(this._target, t, e),
                        this.onChange(),
                        this
                }
                fromQuaternion(t, e = this.order, r) {
                    return Hp.fromQuaternion(t),
                        this._target.fromRotationMatrix(Hp, e),
                        r || this.onChange(),
                        this
                }
                fromArray(t, e = 0) {
                    return this._target[0] = t[e],
                        this._target[1] = t[e + 1],
                        this._target[2] = t[e + 2],
                        this
                }
                toArray(t = [], e = 0) {
                    return t[e] = this[0],
                        t[e + 1] = this[1],
                        t[e + 2] = this[2],
                        t
                }
            }
    }
    );
    var bt, Fi = z(() => {
        tt();
        Kr();
        me();
        fl();
        bt = class {
            constructor() {
                this.parent = null,
                    this.children = [],
                    this.visible = !0,
                    this.matrix = new X,
                    this.worldMatrix = new X,
                    this.matrixAutoUpdate = !0,
                    this.worldMatrixNeedsUpdate = !1,
                    this.position = new S,
                    this.quaternion = new $t,
                    this.scale = new S(1),
                    this.rotation = new ur,
                    this.up = new S(0, 1, 0),
                    this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, !0),
                    this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, void 0, !0)
            }
            setParent(t, e = !0) {
                this.parent && t !== this.parent && this.parent.removeChild(this, !1),
                    this.parent = t,
                    e && t && t.addChild(this, !1)
            }
            addChild(t, e = !0) {
                ~this.children.indexOf(t) || this.children.push(t),
                    e && t.setParent(this, !1)
            }
            removeChild(t, e = !0) {
                ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1),
                    e && t.setParent(null, !1)
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                    (this.worldMatrixNeedsUpdate || t) && (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
                        this.worldMatrixNeedsUpdate = !1,
                        t = !0);
                for (let e = 0, r = this.children.length; e < r; e++)
                    this.children[e].updateMatrixWorld(t)
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale),
                    this.worldMatrixNeedsUpdate = !0
            }
            traverse(t) {
                if (!t(this))
                    for (let e = 0, r = this.children.length; e < r; e++)
                        this.children[e].traverse(t)
            }
            decompose() {
                this.matrix.decompose(this.quaternion._target, this.position, this.scale),
                    this.rotation.fromQuaternion(this.quaternion)
            }
            lookAt(t, e = !1) {
                e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
                    this.matrix.getRotation(this.quaternion._target),
                    this.rotation.fromQuaternion(this.quaternion)
            }
        }
    }
    );
    var ab, lb, hb, ve, Pn = z(() => {
        Fi();
        me();
        tt();
        ab = new X,
            lb = new S,
            hb = new S,
            ve = class extends bt {
                constructor(t, { near: e = .1, far: r = 100, fov: s = 45, aspect: n = 1, left: o, right: a, bottom: l, top: h, zoom: c = 1 } = {}) {
                    super(),
                        Object.assign(this, {
                            near: e,
                            far: r,
                            fov: s,
                            aspect: n,
                            left: o,
                            right: a,
                            bottom: l,
                            top: h,
                            zoom: c
                        }),
                        this.projectionMatrix = new X,
                        this.viewMatrix = new X,
                        this.projectionViewMatrix = new X,
                        this.worldPosition = new S,
                        this.type = o || a ? "orthographic" : "perspective",
                        this.type === "orthographic" ? this.orthographic() : this.perspective()
                }
                perspective({ near: t = this.near, far: e = this.far, fov: r = this.fov, aspect: s = this.aspect } = {}) {
                    return Object.assign(this, {
                        near: t,
                        far: e,
                        fov: r,
                        aspect: s
                    }),
                        this.projectionMatrix.fromPerspective({
                            fov: r * (Math.PI / 180),
                            aspect: s,
                            near: t,
                            far: e
                        }),
                        this.type = "perspective",
                        this
                }
                orthographic({ near: t = this.near, far: e = this.far, left: r = this.left || -1, right: s = this.right || 1, bottom: n = this.bottom || -1, top: o = this.top || 1, zoom: a = this.zoom } = {}) {
                    return Object.assign(this, {
                        near: t,
                        far: e,
                        left: r,
                        right: s,
                        bottom: n,
                        top: o,
                        zoom: a
                    }),
                        r /= a,
                        s /= a,
                        n /= a,
                        o /= a,
                        this.projectionMatrix.fromOrthogonal({
                            left: r,
                            right: s,
                            bottom: n,
                            top: o,
                            near: t,
                            far: e
                        }),
                        this.type = "orthographic",
                        this
                }
                updateMatrixWorld() {
                    return super.updateMatrixWorld(),
                        this.viewMatrix.inverse(this.worldMatrix),
                        this.worldMatrix.getTranslation(this.worldPosition),
                        this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
                        this
                }
                updateProjectionMatrix() {
                    return this.type === "perspective" ? this.perspective() : this.orthographic()
                }
                lookAt(t) {
                    return super.lookAt(t, !0),
                        this
                }
                project(t) {
                    return t.applyMatrix4(this.viewMatrix),
                        t.applyMatrix4(this.projectionMatrix),
                        this
                }
                unproject(t) {
                    return t.applyMatrix4(ab.inverse(this.projectionMatrix)),
                        t.applyMatrix4(this.worldMatrix),
                        this
                }
                updateFrustum() {
                    this.frustum || (this.frustum = [new S, new S, new S, new S, new S, new S]);
                    let t = this.projectionViewMatrix;
                    this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12],
                        this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12],
                        this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13],
                        this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13],
                        this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14],
                        this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14];
                    for (let e = 0; e < 6; e++) {
                        let r = 1 / this.frustum[e].distance();
                        this.frustum[e].multiply(r),
                            this.frustum[e].constant *= r
                    }
                }
                frustumIntersectsMesh(t, e = t.worldMatrix) {
                    if (!t.geometry.attributes.position || ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) && t.geometry.computeBoundingSphere(),
                        !t.geometry.bounds))
                        return !0;
                    let r = lb;
                    r.copy(t.geometry.bounds.center),
                        r.applyMatrix4(e);
                    let s = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
                    return this.frustumIntersectsSphere(r, s)
                }
                frustumIntersectsSphere(t, e) {
                    let r = hb;
                    for (let s = 0; s < 6; s++) {
                        let n = this.frustum[s];
                        if (r.copy(n).dot(t) + n.constant < -e)
                            return !1
                    }
                    return !0
                }
            }
    }
    );
    function Wp(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i[2] = t[2],
            i[3] = t[4],
            i[4] = t[5],
            i[5] = t[6],
            i[6] = t[8],
            i[7] = t[9],
            i[8] = t[10],
            i
    }
    function $p(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = e + e
            , a = r + r
            , l = s + s
            , h = e * o
            , c = r * o
            , u = r * a
            , d = s * o
            , f = s * a
            , m = s * l
            , p = n * o
            , v = n * a
            , g = n * l;
        return i[0] = 1 - u - m,
            i[3] = c - g,
            i[6] = d + v,
            i[1] = c + g,
            i[4] = 1 - h - m,
            i[7] = f - p,
            i[2] = d - v,
            i[5] = f + p,
            i[8] = 1 - h - u,
            i
    }
    function Gp(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i[2] = t[2],
            i[3] = t[3],
            i[4] = t[4],
            i[5] = t[5],
            i[6] = t[6],
            i[7] = t[7],
            i[8] = t[8],
            i
    }
    function Yp(i, t, e, r, s, n, o, a, l, h) {
        return i[0] = t,
            i[1] = e,
            i[2] = r,
            i[3] = s,
            i[4] = n,
            i[5] = o,
            i[6] = a,
            i[7] = l,
            i[8] = h,
            i
    }
    function Xp(i) {
        return i[0] = 1,
            i[1] = 0,
            i[2] = 0,
            i[3] = 0,
            i[4] = 1,
            i[5] = 0,
            i[6] = 0,
            i[7] = 0,
            i[8] = 1,
            i
    }
    function Kp(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = t[4]
            , a = t[5]
            , l = t[6]
            , h = t[7]
            , c = t[8]
            , u = c * o - a * h
            , d = -c * n + a * l
            , f = h * n - o * l
            , m = e * u + r * d + s * f;
        return m ? (m = 1 / m,
            i[0] = u * m,
            i[1] = (-c * r + s * h) * m,
            i[2] = (a * r - s * o) * m,
            i[3] = d * m,
            i[4] = (c * e - s * l) * m,
            i[5] = (-a * e + s * n) * m,
            i[6] = f * m,
            i[7] = (-h * e + r * l) * m,
            i[8] = (o * e - r * n) * m,
            i) : null
    }
    function ml(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = t[4]
            , l = t[5]
            , h = t[6]
            , c = t[7]
            , u = t[8]
            , d = e[0]
            , f = e[1]
            , m = e[2]
            , p = e[3]
            , v = e[4]
            , g = e[5]
            , w = e[6]
            , b = e[7]
            , x = e[8];
        return i[0] = d * r + f * o + m * h,
            i[1] = d * s + f * a + m * c,
            i[2] = d * n + f * l + m * u,
            i[3] = p * r + v * o + g * h,
            i[4] = p * s + v * a + g * c,
            i[5] = p * n + v * l + g * u,
            i[6] = w * r + b * o + x * h,
            i[7] = w * s + b * a + x * c,
            i[8] = w * n + b * l + x * u,
            i
    }
    function Qp(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = t[4]
            , l = t[5]
            , h = t[6]
            , c = t[7]
            , u = t[8]
            , d = e[0]
            , f = e[1];
        return i[0] = r,
            i[1] = s,
            i[2] = n,
            i[3] = o,
            i[4] = a,
            i[5] = l,
            i[6] = d * r + f * o + h,
            i[7] = d * s + f * a + c,
            i[8] = d * n + f * l + u,
            i
    }
    function Zp(i, t, e) {
        let r = t[0]
            , s = t[1]
            , n = t[2]
            , o = t[3]
            , a = t[4]
            , l = t[5]
            , h = t[6]
            , c = t[7]
            , u = t[8]
            , d = Math.sin(e)
            , f = Math.cos(e);
        return i[0] = f * r + d * o,
            i[1] = f * s + d * a,
            i[2] = f * n + d * l,
            i[3] = f * o - d * r,
            i[4] = f * a - d * s,
            i[5] = f * l - d * n,
            i[6] = h,
            i[7] = c,
            i[8] = u,
            i
    }
    function Jp(i, t, e) {
        let r = e[0]
            , s = e[1];
        return i[0] = r * t[0],
            i[1] = r * t[1],
            i[2] = r * t[2],
            i[3] = s * t[3],
            i[4] = s * t[4],
            i[5] = s * t[5],
            i[6] = t[6],
            i[7] = t[7],
            i[8] = t[8],
            i
    }
    function tf(i, t) {
        let e = t[0]
            , r = t[1]
            , s = t[2]
            , n = t[3]
            , o = t[4]
            , a = t[5]
            , l = t[6]
            , h = t[7]
            , c = t[8]
            , u = t[9]
            , d = t[10]
            , f = t[11]
            , m = t[12]
            , p = t[13]
            , v = t[14]
            , g = t[15]
            , w = e * a - r * o
            , b = e * l - s * o
            , x = e * h - n * o
            , _ = r * l - s * a
            , y = r * h - n * a
            , P = s * h - n * l
            , E = c * p - u * m
            , C = c * v - d * m
            , M = c * g - f * m
            , A = u * v - d * p
            , T = u * g - f * p
            , O = d * g - f * v
            , k = w * O - b * T + x * A + _ * M - y * C + P * E;
        return k ? (k = 1 / k,
            i[0] = (a * O - l * T + h * A) * k,
            i[1] = (l * M - o * O - h * C) * k,
            i[2] = (o * T - a * M + h * E) * k,
            i[3] = (s * T - r * O - n * A) * k,
            i[4] = (e * O - s * M + n * C) * k,
            i[5] = (r * M - e * T - n * E) * k,
            i[6] = (p * P - v * y + g * _) * k,
            i[7] = (v * x - m * P - g * b) * k,
            i[8] = (m * y - p * x + g * w) * k,
            i) : null
    }
    var ef = z(() => { }
    );
    var Se, Qr = z(() => {
        ef();
        Se = class extends Array {
            constructor(t = 1, e = 0, r = 0, s = 0, n = 1, o = 0, a = 0, l = 0, h = 1) {
                return super(t, e, r, s, n, o, a, l, h),
                    this
            }
            set(t, e, r, s, n, o, a, l, h) {
                return t.length ? this.copy(t) : (Yp(this, t, e, r, s, n, o, a, l, h),
                    this)
            }
            translate(t, e = this) {
                return Qp(this, e, t),
                    this
            }
            rotate(t, e = this) {
                return Zp(this, e, t),
                    this
            }
            scale(t, e = this) {
                return Jp(this, e, t),
                    this
            }
            multiply(t, e) {
                return e ? ml(this, t, e) : ml(this, this, t),
                    this
            }
            identity() {
                return Xp(this),
                    this
            }
            copy(t) {
                return Gp(this, t),
                    this
            }
            fromMatrix4(t) {
                return Wp(this, t),
                    this
            }
            fromQuaternion(t) {
                return $p(this, t),
                    this
            }
            fromBasis(t, e, r) {
                return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]),
                    this
            }
            inverse(t = this) {
                return Kp(this, t),
                    this
            }
            getNormalMatrix(t) {
                return tf(this, t),
                    this
            }
        }
    }
    );
    var ub, q, Vt = z(() => {
        Fi();
        Qr();
        me();
        ub = 0,
            q = class extends bt {
                constructor(t, { geometry: e, program: r, mode: s = t.TRIANGLES, frustumCulled: n = !0, renderOrder: o = 0 } = {}) {
                    super(),
                        t.canvas || console.error("gl not passed as first argument to Mesh"),
                        this.gl = t,
                        this.id = ub++,
                        this.geometry = e,
                        this.program = r,
                        this.mode = s,
                        this.frustumCulled = n,
                        this.renderOrder = o,
                        this.modelViewMatrix = new X,
                        this.normalMatrix = new Se,
                        this.beforeRenderCallbacks = [],
                        this.afterRenderCallbacks = []
                }
                onBeforeRender(t) {
                    return this.beforeRenderCallbacks.push(t),
                        this
                }
                onAfterRender(t) {
                    return this.afterRenderCallbacks.push(t),
                        this
                }
                draw({ camera: t } = {}) {
                    t && (this.program.uniforms.modelMatrix || Object.assign(this.program.uniforms, {
                        modelMatrix: {
                            value: null
                        },
                        viewMatrix: {
                            value: null
                        },
                        modelViewMatrix: {
                            value: null
                        },
                        normalMatrix: {
                            value: null
                        },
                        projectionMatrix: {
                            value: null
                        },
                        cameraPosition: {
                            value: null
                        }
                    }),
                        this.program.uniforms.projectionMatrix.value = t.projectionMatrix,
                        this.program.uniforms.cameraPosition.value = t.worldPosition,
                        this.program.uniforms.viewMatrix.value = t.viewMatrix,
                        this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
                        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                        this.program.uniforms.modelMatrix.value = this.worldMatrix,
                        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix,
                        this.program.uniforms.normalMatrix.value = this.normalMatrix),
                        this.beforeRenderCallbacks.forEach(r => r && r({
                            mesh: this,
                            camera: t
                        }));
                    let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
                    this.program.use({
                        flipFaces: e
                    }),
                        this.geometry.draw({
                            mode: this.mode,
                            program: this.program
                        }),
                        this.afterRenderCallbacks.forEach(r => r && r({
                            mesh: this,
                            camera: t
                        }))
                }
            }
    }
    );
    function sf(i) {
        return (i & i - 1) === 0
    }
    var rf, db, ht, Be = z(() => {
        rf = new Uint8Array(4);
        db = 1,
            ht = class {
                constructor(t, { image: e, target: r = t.TEXTURE_2D, type: s = t.UNSIGNED_BYTE, format: n = t.RGBA, internalFormat: o = n, wrapS: a = t.CLAMP_TO_EDGE, wrapT: l = t.CLAMP_TO_EDGE, wrapR: h = t.CLAMP_TO_EDGE, generateMipmaps: c = r === (t.TEXTURE_2D || t.TEXTURE_CUBE_MAP), minFilter: u = c ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR, magFilter: d = t.LINEAR, premultiplyAlpha: f = !1, unpackAlignment: m = 4, flipY: p = r == (t.TEXTURE_2D || t.TEXTURE_3D), anisotropy: v = 0, level: g = 0, width: w, height: b = w, length: x = 1 } = {}) {
                    this.gl = t,
                        this.id = db++,
                        this.image = e,
                        this.target = r,
                        this.type = s,
                        this.format = n,
                        this.internalFormat = o,
                        this.minFilter = u,
                        this.magFilter = d,
                        this.wrapS = a,
                        this.wrapT = l,
                        this.wrapR = h,
                        this.generateMipmaps = c,
                        this.premultiplyAlpha = f,
                        this.unpackAlignment = m,
                        this.flipY = p,
                        this.anisotropy = Math.min(v, this.gl.renderer.parameters.maxAnisotropy),
                        this.level = g,
                        this.width = w,
                        this.height = b,
                        this.length = x,
                        this.texture = this.gl.createTexture(),
                        this.store = {
                            image: null
                        },
                        this.glState = this.gl.renderer.state,
                        this.state = {},
                        this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR,
                        this.state.magFilter = this.gl.LINEAR,
                        this.state.wrapS = this.gl.REPEAT,
                        this.state.wrapT = this.gl.REPEAT,
                        this.state.anisotropy = 0
                }
                bind() {
                    this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture),
                        this.glState.textureUnits[this.glState.activeTextureUnit] = this.id)
                }
                update(t = 0) {
                    let e = !(this.image === this.store.image && !this.needsUpdate);
                    if ((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t),
                        this.bind()),
                        !!e) {
                        if (this.needsUpdate = !1,
                            this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
                                this.glState.flipY = this.flipY),
                            this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha),
                                this.glState.premultiplyAlpha = this.premultiplyAlpha),
                            this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment),
                                this.glState.unpackAlignment = this.unpackAlignment),
                            this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter),
                                this.state.minFilter = this.minFilter),
                            this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter),
                                this.state.magFilter = this.magFilter),
                            this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS),
                                this.state.wrapS = this.wrapS),
                            this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT),
                                this.state.wrapT = this.wrapT),
                            this.wrapR !== this.state.wrapR && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_R, this.wrapR),
                                this.state.wrapR = this.wrapR),
                            this.anisotropy && this.anisotropy !== this.state.anisotropy && (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
                                this.state.anisotropy = this.anisotropy),
                            this.image) {
                            if (this.image.width && (this.width = this.image.width,
                                this.height = this.image.height),
                                this.target === this.gl.TEXTURE_CUBE_MAP)
                                for (let r = 0; r < 6; r++)
                                    this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, this.level, this.internalFormat, this.format, this.type, this.image[r]);
                            else if (ArrayBuffer.isView(this.image))
                                this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image) : (this.target === this.gl.TEXTURE_2D_ARRAY || this.target === this.gl.TEXTURE_3D) && this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                            else if (this.image.isCompressedTexture)
                                for (let r = 0; r < this.image.length; r++)
                                    this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
                            else
                                this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, this.image);
                            this.generateMipmaps && (!this.gl.renderer.isWebgl2 && (!sf(this.image.width) || !sf(this.image.height)) ? (this.generateMipmaps = !1,
                                this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE,
                                this.minFilter = this.gl.LINEAR) : this.gl.generateMipmap(this.target)),
                                this.onUpdate && this.onUpdate()
                        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
                            for (let r = 0; r < 6; r++)
                                this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, rf);
                        else
                            this.width ? this.target === this.gl.TEXTURE_2D ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null) : this.gl.texImage3D(this.target, this.level, this.internalFormat, this.width, this.height, this.length, 0, this.format, this.type, null) : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, rf);
                        this.store.image = this.image
                    }
                }
            }
    }
    );
    var Ot, dr = z(() => {
        Be();
        Ot = class {
            constructor(t, { width: e = t.canvas.width, height: r = t.canvas.height, target: s = t.FRAMEBUFFER, color: n = 1, depth: o = !0, stencil: a = !1, depthTexture: l = !1, wrapS: h = t.CLAMP_TO_EDGE, wrapT: c = t.CLAMP_TO_EDGE, minFilter: u = t.LINEAR, magFilter: d = u, type: f = t.UNSIGNED_BYTE, format: m = t.RGBA, internalFormat: p = m, unpackAlignment: v, premultiplyAlpha: g } = {}) {
                this.gl = t,
                    this.width = e,
                    this.height = r,
                    this.depth = o,
                    this.buffer = this.gl.createFramebuffer(),
                    this.target = s,
                    this.gl.renderer.bindFramebuffer(this),
                    this.textures = [];
                let w = [];
                for (let b = 0; b < n; b++)
                    this.textures.push(new ht(t, {
                        width: e,
                        height: r,
                        wrapS: h,
                        wrapT: c,
                        minFilter: u,
                        magFilter: d,
                        type: f,
                        format: m,
                        internalFormat: p,
                        unpackAlignment: v,
                        premultiplyAlpha: g,
                        flipY: !1,
                        generateMipmaps: !1
                    })),
                        this.textures[b].update(),
                        this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + b, this.gl.TEXTURE_2D, this.textures[b].texture, 0),
                        w.push(this.gl.COLOR_ATTACHMENT0 + b);
                w.length > 1 && this.gl.renderer.drawBuffers(w),
                    this.texture = this.textures[0],
                    l && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture")) ? (this.depthTexture = new ht(t, {
                        width: e,
                        height: r,
                        minFilter: this.gl.NEAREST,
                        magFilter: this.gl.NEAREST,
                        format: this.gl.DEPTH_COMPONENT,
                        internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                        type: this.gl.UNSIGNED_INT
                    }),
                        this.depthTexture.update(),
                        this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (o && !a && (this.depthBuffer = this.gl.createRenderbuffer(),
                            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
                            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r),
                            this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
                            a && !o && (this.stencilBuffer = this.gl.createRenderbuffer(),
                                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
                                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r),
                                this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
                            o && a && (this.depthStencilBuffer = this.gl.createRenderbuffer(),
                                this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
                                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r),
                                this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
                    this.gl.renderer.bindFramebuffer({
                        target: this.target
                    })
            }
            setSize(t, e) {
                if (!(this.width === t && this.height === e)) {
                    this.width = t,
                        this.height = e,
                        this.gl.renderer.bindFramebuffer(this);
                    for (let r = 0; r < this.textures.length; r++)
                        this.textures[r].width = t,
                            this.textures[r].height = e,
                            this.textures[r].needsUpdate = !0,
                            this.textures[r].update(),
                            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
                    this.depthTexture ? (this.depthTexture.width = t,
                        this.depthTexture.height = e,
                        this.depthTexture.needsUpdate = !0,
                        this.depthTexture.update(),
                        this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0)) : (this.depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
                            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, e)),
                            this.stencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
                                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, e)),
                            this.depthStencilBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
                                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, e))),
                        this.gl.renderer.bindFramebuffer({
                            target: this.target
                        })
                }
            }
        }
    }
    );
    function of(i) {
        i.length === 4 && (i = i[0] + i[1] + i[1] + i[2] + i[2] + i[3] + i[3]);
        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);
        return t || console.warn(`Unable to convert hex string ${i} to rgb values`),
            [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255]
    }
    function pb(i) {
        return i = parseInt(i),
            [(i >> 16 & 255) / 255, (i >> 8 & 255) / 255, (i & 255) / 255]
    }
    function vl(i) {
        return i === void 0 ? [0, 0, 0] : arguments.length === 3 ? arguments : isNaN(i) ? i[0] === "#" ? of(i) : nf[i.toLowerCase()] ? of(nf[i.toLowerCase()]) : (console.warn("Color format not recognised"),
            [0, 0, 0]) : pb(i)
    }
    var nf, af = z(() => {
        nf = {
            black: "#000000",
            white: "#ffffff",
            red: "#ff0000",
            green: "#00ff00",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            cyan: "#00ffff",
            yellow: "#ffff00",
            orange: "#ff8000"
        }
    }
    );
    var oi, Mn = z(() => {
        af();
        oi = class extends Array {
            constructor(t) {
                return Array.isArray(t) ? super(...t) : super(...vl(...arguments))
            }
            get r() {
                return this[0]
            }
            get g() {
                return this[1]
            }
            get b() {
                return this[2]
            }
            set r(t) {
                this[0] = t
            }
            set g(t) {
                this[1] = t
            }
            set b(t) {
                this[2] = t
            }
            set(t) {
                return Array.isArray(t) ? this.copy(t) : this.copy(vl(...arguments))
            }
            copy(t) {
                return this[0] = t[0],
                    this[1] = t[1],
                    this[2] = t[2],
                    this
            }
        }
    }
    );
    function lf(i, t) {
        return i[0] = t[0],
            i[1] = t[1],
            i
    }
    function hf(i, t, e) {
        return i[0] = t,
            i[1] = e,
            i
    }
    function gl(i, t, e) {
        return i[0] = t[0] + e[0],
            i[1] = t[1] + e[1],
            i
    }
    function _l(i, t, e) {
        return i[0] = t[0] - e[0],
            i[1] = t[1] - e[1],
            i
    }
    function cf(i, t, e) {
        return i[0] = t[0] * e[0],
            i[1] = t[1] * e[1],
            i
    }
    function uf(i, t, e) {
        return i[0] = t[0] / e[0],
            i[1] = t[1] / e[1],
            i
    }
    function Sn(i, t, e) {
        return i[0] = t[0] * e,
            i[1] = t[1] * e,
            i
    }
    function df(i, t) {
        var e = t[0] - i[0]
            , r = t[1] - i[1];
        return Math.sqrt(e * e + r * r)
    }
    function pf(i, t) {
        var e = t[0] - i[0]
            , r = t[1] - i[1];
        return e * e + r * r
    }
    function bl(i) {
        var t = i[0]
            , e = i[1];
        return Math.sqrt(t * t + e * e)
    }
    function ff(i) {
        var t = i[0]
            , e = i[1];
        return t * t + e * e
    }
    function mf(i, t) {
        return i[0] = -t[0],
            i[1] = -t[1],
            i
    }
    function vf(i, t) {
        return i[0] = 1 / t[0],
            i[1] = 1 / t[1],
            i
    }
    function gf(i, t) {
        var e = t[0]
            , r = t[1]
            , s = e * e + r * r;
        return s > 0 && (s = 1 / Math.sqrt(s)),
            i[0] = t[0] * s,
            i[1] = t[1] * s,
            i
    }
    function _f(i, t) {
        return i[0] * t[0] + i[1] * t[1]
    }
    function wl(i, t) {
        return i[0] * t[1] - i[1] * t[0]
    }
    function bf(i, t, e, r) {
        var s = t[0]
            , n = t[1];
        return i[0] = s + r * (e[0] - s),
            i[1] = n + r * (e[1] - n),
            i
    }
    function wf(i, t, e, r, s) {
        let n = Math.exp(-r * s)
            , o = t[0]
            , a = t[1];
        return i[0] = e[0] + (o - e[0]) * n,
            i[1] = e[1] + (a - e[1]) * n,
            i
    }
    function yf(i, t, e) {
        var r = t[0]
            , s = t[1];
        return i[0] = e[0] * r + e[3] * s + e[6],
            i[1] = e[1] * r + e[4] * s + e[7],
            i
    }
    function xf(i, t, e) {
        let r = t[0]
            , s = t[1];
        return i[0] = e[0] * r + e[4] * s + e[12],
            i[1] = e[1] * r + e[5] * s + e[13],
            i
    }
    function Ef(i, t) {
        return i[0] === t[0] && i[1] === t[1]
    }
    var Cf = z(() => { }
    );
    var et, Ii = z(() => {
        Cf();
        et = class i extends Array {
            constructor(t = 0, e = t) {
                return super(t, e),
                    this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set(t, e = t) {
                return t.length ? this.copy(t) : (hf(this, t, e),
                    this)
            }
            copy(t) {
                return lf(this, t),
                    this
            }
            add(t, e) {
                return e ? gl(this, t, e) : gl(this, this, t),
                    this
            }
            sub(t, e) {
                return e ? _l(this, t, e) : _l(this, this, t),
                    this
            }
            multiply(t) {
                return t.length ? cf(this, this, t) : Sn(this, this, t),
                    this
            }
            divide(t) {
                return t.length ? uf(this, this, t) : Sn(this, this, 1 / t),
                    this
            }
            inverse(t = this) {
                return vf(this, t),
                    this
            }
            len() {
                return bl(this)
            }
            distance(t) {
                return t ? df(this, t) : bl(this)
            }
            squaredLen() {
                return this.squaredDistance()
            }
            squaredDistance(t) {
                return t ? pf(this, t) : ff(this)
            }
            negate(t = this) {
                return mf(this, t),
                    this
            }
            cross(t, e) {
                return e ? wl(t, e) : wl(this, t)
            }
            scale(t) {
                return Sn(this, this, t),
                    this
            }
            normalize() {
                return gf(this, this),
                    this
            }
            dot(t) {
                return _f(this, t)
            }
            equals(t) {
                return Ef(this, t)
            }
            applyMatrix3(t) {
                return yf(this, this, t),
                    this
            }
            applyMatrix4(t) {
                return xf(this, this, t),
                    this
            }
            lerp(t, e) {
                return bf(this, this, t, e),
                    this
            }
            smoothLerp(t, e, r) {
                return wf(this, this, t, e, r),
                    this
            }
            clone() {
                return new i(this[0], this[1])
            }
            fromArray(t, e = 0) {
                return this[0] = t[e],
                    this[1] = t[e + 1],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0],
                    t[e + 1] = this[1],
                    t
            }
        }
    }
    );
    var pr, yl = z(() => {
        ol();
        pr = class extends Array {
            constructor(t = 0, e = t, r = t, s = t) {
                return super(t, e, r, s),
                    this
            }
            get x() {
                return this[0]
            }
            get y() {
                return this[1]
            }
            get z() {
                return this[2]
            }
            get w() {
                return this[3]
            }
            set x(t) {
                this[0] = t
            }
            set y(t) {
                this[1] = t
            }
            set z(t) {
                this[2] = t
            }
            set w(t) {
                this[3] = t
            }
            set(t, e = t, r = t, s = t) {
                return t.length ? this.copy(t) : (xn(this, t, e, r, s),
                    this)
            }
            copy(t) {
                return yn(this, t),
                    this
            }
            normalize() {
                return En(this, this),
                    this
            }
            multiply(t) {
                return nl(this, this, t),
                    this
            }
            dot(t) {
                return Cn(this, t)
            }
            fromArray(t, e = 0) {
                return this[0] = t[e],
                    this[1] = t[e + 1],
                    this[2] = t[e + 2],
                    this[3] = t[e + 3],
                    this
            }
            toArray(t = [], e = 0) {
                return t[e] = this[0],
                    t[e + 1] = this[1],
                    t[e + 2] = this[2],
                    t[e + 3] = this[3],
                    t
            }
        }
    }
    );
    var Zt, xl = z(() => {
        kt();
        Zt = class i extends W {
            constructor(t, { width: e = 1, height: r = 1, widthSegments: s = 1, heightSegments: n = 1, attributes: o = {} } = {}) {
                let a = s
                    , l = n
                    , h = (a + 1) * (l + 1)
                    , c = a * l * 6
                    , u = new Float32Array(h * 3)
                    , d = new Float32Array(h * 3)
                    , f = new Float32Array(h * 2)
                    , m = c > 65536 ? new Uint32Array(c) : new Uint16Array(c);
                i.buildPlane(u, d, f, m, e, r, 0, a, l),
                    Object.assign(o, {
                        position: {
                            size: 3,
                            data: u
                        },
                        normal: {
                            size: 3,
                            data: d
                        },
                        uv: {
                            size: 2,
                            data: f
                        },
                        index: {
                            data: m
                        }
                    }),
                    super(t, o)
            }
            static buildPlane(t, e, r, s, n, o, a, l, h, c = 0, u = 1, d = 2, f = 1, m = -1, p = 0, v = 0) {
                let g = p
                    , w = n / l
                    , b = o / h;
                for (let x = 0; x <= h; x++) {
                    let _ = x * b - o / 2;
                    for (let y = 0; y <= l; y++,
                        p++) {
                        let P = y * w - n / 2;
                        if (t[p * 3 + c] = P * f,
                            t[p * 3 + u] = _ * m,
                            t[p * 3 + d] = a / 2,
                            e[p * 3 + c] = 0,
                            e[p * 3 + u] = 0,
                            e[p * 3 + d] = a >= 0 ? 1 : -1,
                            r[p * 2] = y / l,
                            r[p * 2 + 1] = 1 - x / h,
                            x === h || y === l)
                            continue;
                        let E = g + y + x * (l + 1)
                            , C = g + y + (x + 1) * (l + 1)
                            , M = g + y + (x + 1) * (l + 1) + 1
                            , A = g + y + x * (l + 1) + 1;
                        s[v * 6] = E,
                            s[v * 6 + 1] = C,
                            s[v * 6 + 2] = A,
                            s[v * 6 + 3] = C,
                            s[v * 6 + 4] = M,
                            s[v * 6 + 5] = A,
                            v++
                    }
                }
            }
        }
    }
    );
    var Tn, Pf = z(() => {
        kt();
        xl();
        Tn = class extends W {
            constructor(t, { width: e = 1, height: r = 1, depth: s = 1, widthSegments: n = 1, heightSegments: o = 1, depthSegments: a = 1, attributes: l = {} } = {}) {
                let h = n
                    , c = o
                    , u = a
                    , d = (h + 1) * (c + 1) * 2 + (h + 1) * (u + 1) * 2 + (c + 1) * (u + 1) * 2
                    , f = (h * c * 2 + h * u * 2 + c * u * 2) * 6
                    , m = new Float32Array(d * 3)
                    , p = new Float32Array(d * 3)
                    , v = new Float32Array(d * 2)
                    , g = d > 65536 ? new Uint32Array(f) : new Uint16Array(f)
                    , w = 0
                    , b = 0;
                Zt.buildPlane(m, p, v, g, s, r, e, u, c, 2, 1, 0, -1, -1, w, b),
                    w += (u + 1) * (c + 1),
                    b += u * c,
                    Zt.buildPlane(m, p, v, g, s, r, -e, u, c, 2, 1, 0, 1, -1, w, b),
                    w += (u + 1) * (c + 1),
                    b += u * c,
                    Zt.buildPlane(m, p, v, g, e, s, r, u, h, 0, 2, 1, 1, 1, w, b),
                    w += (h + 1) * (u + 1),
                    b += h * u,
                    Zt.buildPlane(m, p, v, g, e, s, -r, u, h, 0, 2, 1, 1, -1, w, b),
                    w += (h + 1) * (u + 1),
                    b += h * u,
                    Zt.buildPlane(m, p, v, g, e, r, -s, h, c, 0, 1, 2, -1, -1, w, b),
                    w += (h + 1) * (c + 1),
                    b += h * c,
                    Zt.buildPlane(m, p, v, g, e, r, s, h, c, 0, 1, 2, 1, -1, w, b),
                    Object.assign(l, {
                        position: {
                            size: 3,
                            data: m
                        },
                        normal: {
                            size: 3,
                            data: p
                        },
                        uv: {
                            size: 2,
                            data: v
                        },
                        index: {
                            data: g
                        }
                    }),
                    super(t, l)
            }
        }
    }
    );
    var An, Mf = z(() => {
        kt();
        tt();
        An = class extends W {
            constructor(t, { radius: e = .5, widthSegments: r = 16, heightSegments: s = Math.ceil(r * .5), phiStart: n = 0, phiLength: o = Math.PI * 2, thetaStart: a = 0, thetaLength: l = Math.PI, attributes: h = {} } = {}) {
                let c = r
                    , u = s
                    , d = n
                    , f = o
                    , m = a
                    , p = l
                    , v = (c + 1) * (u + 1)
                    , g = c * u * 6
                    , w = new Float32Array(v * 3)
                    , b = new Float32Array(v * 3)
                    , x = new Float32Array(v * 2)
                    , _ = v > 65536 ? new Uint32Array(g) : new Uint16Array(g)
                    , y = 0
                    , P = 0
                    , E = 0
                    , C = m + p
                    , M = []
                    , A = new S;
                for (let T = 0; T <= u; T++) {
                    let O = []
                        , k = T / u;
                    for (let F = 0; F <= c; F++,
                        y++) {
                        let D = F / c
                            , N = -e * Math.cos(d + D * f) * Math.sin(m + k * p)
                            , V = e * Math.cos(m + k * p)
                            , J = e * Math.sin(d + D * f) * Math.sin(m + k * p);
                        w[y * 3] = N,
                            w[y * 3 + 1] = V,
                            w[y * 3 + 2] = J,
                            A.set(N, V, J).normalize(),
                            b[y * 3] = A.x,
                            b[y * 3 + 1] = A.y,
                            b[y * 3 + 2] = A.z,
                            x[y * 2] = D,
                            x[y * 2 + 1] = 1 - k,
                            O.push(P++)
                    }
                    M.push(O)
                }
                for (let T = 0; T < u; T++)
                    for (let O = 0; O < c; O++) {
                        let k = M[T][O + 1]
                            , F = M[T][O]
                            , D = M[T + 1][O]
                            , N = M[T + 1][O + 1];
                        (T !== 0 || m > 0) && (_[E * 3] = k,
                            _[E * 3 + 1] = F,
                            _[E * 3 + 2] = N,
                            E++),
                            (T !== u - 1 || C < Math.PI) && (_[E * 3] = F,
                                _[E * 3 + 1] = D,
                                _[E * 3 + 2] = N,
                                E++)
                    }
                Object.assign(h, {
                    position: {
                        size: 3,
                        data: w
                    },
                    normal: {
                        size: 3,
                        data: b
                    },
                    uv: {
                        size: 2,
                        data: x
                    },
                    index: {
                        data: _
                    }
                }),
                    super(t, h)
            }
        }
    }
    );
    var fr, Sf = z(() => {
        kt();
        tt();
        fr = class extends W {
            constructor(t, { radiusTop: e = .5, radiusBottom: r = .5, height: s = 1, radialSegments: n = 8, heightSegments: o = 1, openEnded: a = !1, thetaStart: l = 0, thetaLength: h = Math.PI * 2, attributes: c = {} } = {}) {
                let u = n
                    , d = o
                    , f = l
                    , m = h
                    , p = a ? 0 : r && e ? 2 : 1
                    , v = (u + 1) * (d + 1 + p) + p
                    , g = u * d * 6 + p * u * 3
                    , w = new Float32Array(v * 3)
                    , b = new Float32Array(v * 3)
                    , x = new Float32Array(v * 2)
                    , _ = v > 65536 ? new Uint32Array(g) : new Uint16Array(g)
                    , y = 0
                    , P = 0
                    , E = [];
                C(),
                    a || (e && M(!0),
                        r && M(!1));
                function C() {
                    let A, T, O = new S, k = (r - e) / s;
                    for (T = 0; T <= d; T++) {
                        let F = []
                            , D = T / d
                            , N = D * (r - e) + e;
                        for (A = 0; A <= u; A++) {
                            let V = A / u
                                , J = V * m + f
                                , nt = Math.sin(J)
                                , vt = Math.cos(J);
                            w.set([N * nt, (.5 - D) * s, N * vt], y * 3),
                                O.set(nt, k, vt).normalize(),
                                b.set([O.x, O.y, O.z], y * 3),
                                x.set([V, 1 - D], y * 2),
                                F.push(y++)
                        }
                        E.push(F)
                    }
                    for (A = 0; A < u; A++)
                        for (T = 0; T < d; T++) {
                            let F = E[T][A]
                                , D = E[T + 1][A]
                                , N = E[T + 1][A + 1]
                                , V = E[T][A + 1];
                            _.set([F, D, V, D, N, V], P * 3),
                                P += 2
                        }
                }
                function M(A) {
                    let T, O = A === !0 ? e : r, k = A === !0 ? 1 : -1, F = y;
                    for (w.set([0, .5 * s * k, 0], y * 3),
                        b.set([0, k, 0], y * 3),
                        x.set([.5, .5], y * 2),
                        y++,
                        T = 0; T <= u; T++) {
                        let N = T / u * m + f
                            , V = Math.cos(N)
                            , J = Math.sin(N);
                        w.set([O * J, .5 * s * k, O * V], y * 3),
                            b.set([0, k, 0], y * 3),
                            x.set([V * .5 + .5, J * .5 * k + .5], y * 2),
                            y++
                    }
                    for (T = 0; T < u; T++) {
                        let D = F + T + 1;
                        A ? _.set([D, D + 1, F], P * 3) : _.set([D + 1, D, F], P * 3),
                            P++
                    }
                }
                Object.assign(c, {
                    position: {
                        size: 3,
                        data: w
                    },
                    normal: {
                        size: 3,
                        data: b
                    },
                    uv: {
                        size: 2,
                        data: x
                    },
                    index: {
                        data: _
                    }
                }),
                    super(t, c)
            }
        }
    }
    );
    var Te, Zr = z(() => {
        kt();
        Te = class extends W {
            constructor(t, { attributes: e = {} } = {}) {
                Object.assign(e, {
                    position: {
                        size: 2,
                        data: new Float32Array([-1, -1, 3, -1, -1, 3])
                    },
                    uv: {
                        size: 2,
                        data: new Float32Array([0, 0, 2, 0, 0, 2])
                    }
                }),
                    super(t, e)
            }
        }
    }
    );
    var kn, Tf = z(() => {
        kt();
        tt();
        kn = class extends W {
            constructor(t, { radius: e = .5, tube: r = .2, radialSegments: s = 8, tubularSegments: n = 6, arc: o = Math.PI * 2, attributes: a = {} } = {}) {
                let l = (s + 1) * (n + 1)
                    , h = s * n * 6
                    , c = new Float32Array(l * 3)
                    , u = new Float32Array(l * 3)
                    , d = new Float32Array(l * 2)
                    , f = l > 65536 ? new Uint32Array(h) : new Uint16Array(h)
                    , m = new S
                    , p = new S
                    , v = new S
                    , g = 0;
                for (let w = 0; w <= s; w++)
                    for (let b = 0; b <= n; b++,
                        g++) {
                        let x = b / n * o
                            , _ = w / s * Math.PI * 2;
                        p.x = (e + r * Math.cos(_)) * Math.cos(x),
                            p.y = (e + r * Math.cos(_)) * Math.sin(x),
                            p.z = r * Math.sin(_),
                            c.set([p.x, p.y, p.z], g * 3),
                            m.x = e * Math.cos(x),
                            m.y = e * Math.sin(x),
                            v.sub(p, m).normalize(),
                            u.set([v.x, v.y, v.z], g * 3),
                            d.set([b / n, w / s], g * 2)
                    }
                g = 0;
                for (let w = 1; w <= s; w++)
                    for (let b = 1; b <= n; b++,
                        g++) {
                        let x = (n + 1) * w + b - 1
                            , _ = (n + 1) * (w - 1) + b - 1
                            , y = (n + 1) * (w - 1) + b
                            , P = (n + 1) * w + b;
                        f.set([x, _, P, _, y, P], g * 6)
                    }
                Object.assign(a, {
                    position: {
                        size: 3,
                        data: c
                    },
                    normal: {
                        size: 3,
                        data: u
                    },
                    uv: {
                        size: 2,
                        data: d
                    },
                    index: {
                        data: f
                    }
                }),
                    super(t, a)
            }
        }
    }
    );
    function Af(i, { element: t = document, enabled: e = !0, target: r = new S, ease: s = .25, inertia: n = .85, enableRotate: o = !0, rotateSpeed: a = .1, autoRotate: l = !1, autoRotateSpeed: h = 1, enableZoom: c = !0, zoomSpeed: u = 1, zoomStyle: d = "dolly", enablePan: f = !0, panSpeed: m = .1, minPolarAngle: p = 0, maxPolarAngle: v = Math.PI, minAzimuthAngle: g = -1 / 0, maxAzimuthAngle: w = 1 / 0, minDistance: b = 0, maxDistance: x = 1 / 0 } = {}) {
        this.enabled = e,
            this.target = r,
            this.zoomStyle = d,
            s = s || 1,
            n = n || 0,
            this.minDistance = b,
            this.maxDistance = x;
        let _ = {
            radius: 1,
            phi: 0,
            theta: 0
        }
            , y = {
                radius: 1,
                phi: 0,
                theta: 0
            }
            , P = {
                radius: 1,
                phi: 0,
                theta: 0
            }
            , E = new S
            , C = new S;
        C.copy(i.position).sub(this.target),
            P.radius = y.radius = C.distance(),
            P.theta = y.theta = Math.atan2(C.x, C.z),
            P.phi = y.phi = Math.acos(Math.min(Math.max(C.y / y.radius, -1), 1)),
            this.offset = C,
            this.update = () => {
                l && J(),
                    y.radius *= _.radius,
                    y.theta += _.theta,
                    y.phi += _.phi,
                    y.theta = Math.max(g, Math.min(w, y.theta)),
                    y.phi = Math.max(p, Math.min(v, y.phi)),
                    y.radius = Math.max(this.minDistance, Math.min(this.maxDistance, y.radius)),
                    P.phi += (y.phi - P.phi) * s,
                    P.theta += (y.theta - P.theta) * s,
                    P.radius += (y.radius - P.radius) * s,
                    this.target.add(E);
                let R = P.radius * Math.sin(Math.max(1e-6, P.phi));
                C.x = R * Math.sin(P.theta),
                    C.y = P.radius * Math.cos(P.phi),
                    C.z = R * Math.cos(P.theta),
                    i.position.copy(this.target).add(C),
                    i.lookAt(this.target),
                    _.theta *= n,
                    _.phi *= n,
                    E.multiply(n),
                    _.radius = 1
            }
            ,
            this.forcePosition = () => {
                C.copy(i.position).sub(this.target),
                    P.radius = y.radius = C.distance(),
                    P.theta = y.theta = Math.atan2(C.x, C.z),
                    P.phi = y.phi = Math.acos(Math.min(Math.max(C.y / y.radius, -1), 1)),
                    i.lookAt(this.target)
            }
            ;
        let M = new et
            , A = new et
            , T = new et
            , O = Lt.NONE;
        this.mouseButtons = {
            ORBIT: 0,
            ZOOM: 1,
            PAN: 2
        };
        function k() {
            return Math.pow(.95, u)
        }
        function F(R, ot) {
            ai.set(ot[0], ot[1], ot[2]),
                ai.multiply(-R),
                E.add(ai)
        }
        function D(R, ot) {
            ai.set(ot[4], ot[5], ot[6]),
                ai.multiply(R),
                E.add(ai)
        }
        let N = (R, ot) => {
            let Rt = t === document ? document.body : t;
            ai.copy(i.position).sub(this.target);
            let vi = ai.distance();
            vi *= Math.tan((i.fov || 45) / 2 * Math.PI / 180),
                F(2 * R * vi / Rt.clientHeight, i.matrix),
                D(2 * ot * vi / Rt.clientHeight, i.matrix)
        }
            , V = R => {
                this.zoomStyle === "dolly" ? _.radius /= R : (i.fov /= R,
                    i.type === "orthographic" ? i.orthographic() : i.perspective())
            }
            ;
        function J() {
            let R = 2 * Math.PI / 60 / 60 * h;
            _.theta -= R
        }
        function nt(R, ot) {
            he.set(R, ot),
                ge.sub(he, M).multiply(a);
            let Rt = t === document ? document.body : t;
            _.theta -= 2 * Math.PI * ge.x / Rt.clientHeight,
                _.phi -= 2 * Math.PI * ge.y / Rt.clientHeight,
                M.copy(he)
        }
        function vt(R) {
            he.set(R.clientX, R.clientY),
                ge.sub(he, T),
                ge.y > 0 ? V(k()) : ge.y < 0 && V(1 / k()),
                T.copy(he)
        }
        function gt(R, ot) {
            he.set(R, ot),
                ge.sub(he, A).multiply(m),
                N(ge.x, ge.y),
                A.copy(he)
        }
        function Qe(R) {
            if (c) {
                let ot = R.touches[0].pageX - R.touches[1].pageX
                    , Rt = R.touches[0].pageY - R.touches[1].pageY
                    , vi = Math.sqrt(ot * ot + Rt * Rt);
                T.set(0, vi)
            }
            if (f) {
                let ot = .5 * (R.touches[0].pageX + R.touches[1].pageX)
                    , Rt = .5 * (R.touches[0].pageY + R.touches[1].pageY);
                A.set(ot, Rt)
            }
        }
        function pe(R) {
            if (c) {
                let ot = R.touches[0].pageX - R.touches[1].pageX
                    , Rt = R.touches[0].pageY - R.touches[1].pageY
                    , vi = Math.sqrt(ot * ot + Rt * Rt);
                he.set(0, vi),
                    ge.set(0, Math.pow(he.y / T.y, u)),
                    V(ge.y),
                    T.copy(he)
            }
            if (f) {
                let ot = .5 * (R.touches[0].pageX + R.touches[1].pageX)
                    , Rt = .5 * (R.touches[0].pageY + R.touches[1].pageY);
                gt(ot, Rt)
            }
        }
        let _e = R => {
            if (this.enabled) {
                switch (R.button) {
                    case this.mouseButtons.ORBIT:
                        if (o === !1)
                            return;
                        M.set(R.clientX, R.clientY),
                            O = Lt.ROTATE;
                        break;
                    case this.mouseButtons.ZOOM:
                        if (c === !1)
                            return;
                        T.set(R.clientX, R.clientY),
                            O = Lt.DOLLY;
                        break;
                    case this.mouseButtons.PAN:
                        if (f === !1)
                            return;
                        A.set(R.clientX, R.clientY),
                            O = Lt.PAN;
                        break
                }
                O !== Lt.NONE && (window.addEventListener("mousemove", Io, !1),
                    window.addEventListener("mouseup", zo, !1))
            }
        }
            , Io = R => {
                if (this.enabled)
                    switch (O) {
                        case Lt.ROTATE:
                            if (o === !1)
                                return;
                            nt(R.clientX, R.clientY);
                            break;
                        case Lt.DOLLY:
                            if (c === !1)
                                return;
                            vt(R);
                            break;
                        case Lt.PAN:
                            if (f === !1)
                                return;
                            gt(R.clientX, R.clientY);
                            break
                    }
            }
            , zo = () => {
                window.removeEventListener("mousemove", Io, !1),
                    window.removeEventListener("mouseup", zo, !1),
                    O = Lt.NONE
            }
            , $c = R => {
                !this.enabled || !c || O !== Lt.NONE && O !== Lt.ROTATE || (R.stopPropagation(),
                    R.preventDefault(),
                    R.deltaY < 0 ? V(1 / k()) : R.deltaY > 0 && V(k()))
            }
            , Gc = R => {
                if (this.enabled)
                    switch (R.preventDefault(),
                    R.touches.length) {
                        case 1:
                            if (o === !1)
                                return;
                            M.set(R.touches[0].pageX, R.touches[0].pageY),
                                O = Lt.ROTATE;
                            break;
                        case 2:
                            if (c === !1 && f === !1)
                                return;
                            Qe(R),
                                O = Lt.DOLLY_PAN;
                            break;
                        default:
                            O = Lt.NONE
                    }
            }
            , Yc = R => {
                if (this.enabled)
                    switch (R.preventDefault(),
                    R.stopPropagation(),
                    R.touches.length) {
                        case 1:
                            if (o === !1)
                                return;
                            nt(R.touches[0].pageX, R.touches[0].pageY);
                            break;
                        case 2:
                            if (c === !1 && f === !1)
                                return;
                            pe(R);
                            break;
                        default:
                            O = Lt.NONE
                    }
            }
            , Xc = () => {
                this.enabled && (O = Lt.NONE)
            }
            , Kc = R => {
                this.enabled && R.preventDefault()
            }
            ;
        function cg() {
            t.addEventListener("contextmenu", Kc, !1),
                t.addEventListener("mousedown", _e, !1),
                t.addEventListener("wheel", $c, {
                    passive: !1
                }),
                t.addEventListener("touchstart", Gc, {
                    passive: !1
                }),
                t.addEventListener("touchend", Xc, !1),
                t.addEventListener("touchmove", Yc, {
                    passive: !1
                })
        }
        this.remove = function () {
            t.removeEventListener("contextmenu", Kc),
                t.removeEventListener("mousedown", _e),
                t.removeEventListener("wheel", $c),
                t.removeEventListener("touchstart", Gc),
                t.removeEventListener("touchend", Xc),
                t.removeEventListener("touchmove", Yc),
                window.removeEventListener("mousemove", Io),
                window.removeEventListener("mouseup", zo)
        }
            ,
            cg()
    }
    var Lt, ai, he, ge, kf = z(() => {
        tt();
        Ii();
        Lt = {
            NONE: -1,
            ROTATE: 0,
            DOLLY: 1,
            PAN: 2,
            DOLLY_PAN: 3
        },
            ai = new S,
            he = new et,
            ge = new et
    }
    );
    var vb, gb, _b, El, Of, Lf, bb, wb, yb, Rf, Cl, Ff, If, xb, zf, On, Vf = z(() => {
        Ii();
        tt();
        me();
        vb = new et,
            gb = new et,
            _b = new et,
            El = new S,
            Of = new S,
            Lf = new S,
            bb = new S,
            wb = new S,
            yb = new S,
            Rf = new S,
            Cl = new S,
            Ff = new S,
            If = new S,
            xb = new S,
            zf = new X,
            On = class {
                constructor() {
                    this.origin = new S,
                        this.direction = new S
                }
                castMouse(t, e = [0, 0]) {
                    if (t.type === "orthographic") {
                        let { left: r, right: s, bottom: n, top: o, zoom: a } = t
                            , l = r / a + (s - r) / a * (e[0] * .5 + .5)
                            , h = n / a + (o - n) / a * (e[1] * .5 + .5);
                        this.origin.set(l, h, 0),
                            this.origin.applyMatrix4(t.worldMatrix),
                            this.direction.x = -t.worldMatrix[8],
                            this.direction.y = -t.worldMatrix[9],
                            this.direction.z = -t.worldMatrix[10]
                    } else
                        t.worldMatrix.getTranslation(this.origin),
                            this.direction.set(e[0], e[1], .5),
                            t.unproject(this.direction),
                            this.direction.sub(this.origin).normalize()
                }
                intersectBounds(t, { maxDistance: e, output: r = [] } = {}) {
                    Array.isArray(t) || (t = [t]);
                    let s = zf
                        , n = El
                        , o = Of
                        , a = r;
                    return a.length = 0,
                        t.forEach(l => {
                            (!l.geometry.bounds || l.geometry.bounds.radius === 1 / 0) && l.geometry.computeBoundingSphere();
                            let h = l.geometry.bounds;
                            s.inverse(l.worldMatrix);
                            let c;
                            if (e && (o.copy(this.direction).scaleRotateMatrix4(s),
                                c = e * o.len()),
                                n.copy(this.origin).applyMatrix4(s),
                                o.copy(this.direction).transformDirection(s),
                                e && n.distance(h.center) - h.radius > c)
                                return;
                            let u = 0;
                            if (l.geometry.raycast === "sphere") {
                                if (n.distance(h.center) > h.radius && (u = this.intersectSphere(h, n, o),
                                    !u))
                                    return
                            } else if ((n.x < h.min.x || n.x > h.max.x || n.y < h.min.y || n.y > h.max.y || n.z < h.min.z || n.z > h.max.z) && (u = this.intersectBox(h, n, o),
                                !u))
                                return;
                            e && u > c || (l.hit || (l.hit = {
                                localPoint: new S,
                                point: new S
                            }),
                                l.hit.localPoint.copy(o).multiply(u).add(n),
                                l.hit.point.copy(l.hit.localPoint).applyMatrix4(l.worldMatrix),
                                l.hit.distance = l.hit.point.distance(this.origin),
                                a.push(l))
                        }
                        ),
                        a.sort((l, h) => l.hit.distance - h.hit.distance),
                        a
                }
                intersectMeshes(t, { cullFace: e = !0, maxDistance: r, includeUV: s = !0, includeNormal: n = !0, output: o = [] } = {}) {
                    let a = this.intersectBounds(t, {
                        maxDistance: r,
                        output: o
                    });
                    if (!a.length)
                        return a;
                    let l = zf
                        , h = El
                        , c = Of
                        , u = Lf
                        , d = bb
                        , f = wb
                        , m = yb
                        , p = Rf
                        , v = Cl
                        , g = vb
                        , w = gb
                        , b = _b;
                    for (let x = a.length - 1; x >= 0; x--) {
                        let _ = a[x];
                        l.inverse(_.worldMatrix);
                        let y;
                        r && (c.copy(this.direction).scaleRotateMatrix4(l),
                            y = r * c.len()),
                            h.copy(this.origin).applyMatrix4(l),
                            c.copy(this.direction).transformDirection(l);
                        let P = 0, E, C, M, A = _.geometry, T = A.attributes, O = T.index, k = T.position, F = Math.max(0, A.drawRange.start), D = Math.min(O ? O.count : k.count, A.drawRange.start + A.drawRange.count), N = k.size;
                        for (let V = F; V < D; V += 3) {
                            let J = O ? O.data[V] : V
                                , nt = O ? O.data[V + 1] : V + 1
                                , vt = O ? O.data[V + 2] : V + 2;
                            u.fromArray(k.data, J * N),
                                d.fromArray(k.data, nt * N),
                                f.fromArray(k.data, vt * N);
                            let gt = this.intersectTriangle(u, d, f, e, h, c, p);
                            gt && (r && gt > y || (!P || gt < P) && (P = gt,
                                E = J,
                                C = nt,
                                M = vt,
                                m.copy(p)))
                        }
                        P || a.splice(x, 1),
                            _.hit.localPoint.copy(c).multiply(P).add(h),
                            _.hit.point.copy(_.hit.localPoint).applyMatrix4(_.worldMatrix),
                            _.hit.distance = _.hit.point.distance(this.origin),
                            _.hit.faceNormal || (_.hit.localFaceNormal = new S,
                                _.hit.faceNormal = new S,
                                _.hit.uv = new et,
                                _.hit.localNormal = new S,
                                _.hit.normal = new S),
                            _.hit.localFaceNormal.copy(m),
                            _.hit.faceNormal.copy(_.hit.localFaceNormal).transformDirection(_.worldMatrix),
                            (s || n) && (u.fromArray(k.data, E * 3),
                                d.fromArray(k.data, C * 3),
                                f.fromArray(k.data, M * 3),
                                this.getBarycoord(_.hit.localPoint, u, d, f, v)),
                            s && T.uv && (g.fromArray(T.uv.data, E * 2),
                                w.fromArray(T.uv.data, C * 2),
                                b.fromArray(T.uv.data, M * 2),
                                _.hit.uv.set(g.x * v.x + w.x * v.y + b.x * v.z, g.y * v.x + w.y * v.y + b.y * v.z)),
                            n && T.normal && (u.fromArray(T.normal.data, E * 3),
                                d.fromArray(T.normal.data, C * 3),
                                f.fromArray(T.normal.data, M * 3),
                                _.hit.localNormal.set(u.x * v.x + d.x * v.y + f.x * v.z, u.y * v.x + d.y * v.y + f.y * v.z, u.z * v.x + d.z * v.y + f.z * v.z),
                                _.hit.normal.copy(_.hit.localNormal).transformDirection(_.worldMatrix))
                    }
                    return a.sort((x, _) => x.hit.distance - _.hit.distance),
                        a
                }
                intersectPlane(t, e = this.origin, r = this.direction) {
                    let s = El;
                    s.sub(t.origin, e);
                    let n = s.dot(t.normal)
                        , o = r.dot(t.normal);
                    if (o == 0)
                        return 0;
                    let a = n / o;
                    return a <= 0 ? 0 : e.add(r.scale(a))
                }
                intersectSphere(t, e = this.origin, r = this.direction) {
                    let s = Lf;
                    s.sub(t.center, e);
                    let n = s.dot(r)
                        , o = s.dot(s) - n * n
                        , a = t.radius * t.radius;
                    if (o > a)
                        return 0;
                    let l = Math.sqrt(a - o)
                        , h = n - l
                        , c = n + l;
                    return h < 0 && c < 0 ? 0 : h < 0 ? c : h
                }
                intersectBox(t, e = this.origin, r = this.direction) {
                    let s, n, o, a, l, h, c = 1 / r.x, u = 1 / r.y, d = 1 / r.z, f = t.min, m = t.max;
                    return s = ((c >= 0 ? f.x : m.x) - e.x) * c,
                        n = ((c >= 0 ? m.x : f.x) - e.x) * c,
                        o = ((u >= 0 ? f.y : m.y) - e.y) * u,
                        a = ((u >= 0 ? m.y : f.y) - e.y) * u,
                        s > a || o > n || (o > s && (s = o),
                            a < n && (n = a),
                            l = ((d >= 0 ? f.z : m.z) - e.z) * d,
                            h = ((d >= 0 ? m.z : f.z) - e.z) * d,
                            s > h || l > n) || (l > s && (s = l),
                                h < n && (n = h),
                                n < 0) ? 0 : s >= 0 ? s : n
                }
                intersectTriangle(t, e, r, s = !0, n = this.origin, o = this.direction, a = Rf) {
                    let l = Cl
                        , h = Ff
                        , c = If;
                    l.sub(e, t),
                        h.sub(r, t),
                        a.cross(l, h);
                    let u = o.dot(a);
                    if (!u)
                        return 0;
                    let d;
                    if (u > 0) {
                        if (s)
                            return 0;
                        d = 1
                    } else
                        d = -1,
                            u = -u;
                    c.sub(n, t);
                    let f = d * o.dot(h.cross(c, h));
                    if (f < 0)
                        return 0;
                    let m = d * o.dot(l.cross(c));
                    if (m < 0 || f + m > u)
                        return 0;
                    let p = -d * c.dot(a);
                    return p < 0 ? 0 : p / u
                }
                getBarycoord(t, e, r, s, n = Cl) {
                    let o = Ff
                        , a = If
                        , l = xb;
                    o.sub(s, e),
                        a.sub(r, e),
                        l.sub(t, e);
                    let h = o.dot(o)
                        , c = o.dot(a)
                        , u = o.dot(l)
                        , d = a.dot(a)
                        , f = a.dot(l)
                        , m = h * d - c * c;
                    if (m === 0)
                        return n.set(-2, -1, -1);
                    let p = 1 / m
                        , v = (d * u - c * f) * p
                        , g = (h * f - c * u) * p;
                    return n.set(1 - v - g, g, v)
                }
            }
    }
    );
    function Eb(i, t, e = .168, r = .168) {
        if (t < 1 ? zi.sub(i[1], i[0]).scale(e).add(i[0]) : zi.sub(i[t + 1], i[t - 1]).scale(e).add(i[t]),
            t > i.length - 3) {
            let s = i.length - 1;
            Vi.sub(i[s - 1], i[s]).scale(r).add(i[s])
        } else
            Vi.sub(i[t], i[t + 2]).scale(r).add(i[t + 1]);
        return [zi.clone(), Vi.clone()]
    }
    function Nf(i, t, e, r) {
        let s = 1 - i;
        zi.copy(t).scale(gi(s, 2)),
            Vi.copy(e).scale(2 * s * i),
            Ln.copy(r).scale(gi(i, 2));
        let n = new S;
        return n.add(zi, Vi).add(Ln),
            n
    }
    function Bf(i, t, e, r, s) {
        let n = 1 - i;
        zi.copy(t).scale(gi(n, 3)),
            Vi.copy(e).scale(3 * gi(n, 2) * i),
            Ln.copy(r).scale(3 * n * gi(i, 2)),
            Df.copy(s).scale(gi(i, 3));
        let o = new S;
        return o.add(zi, Vi).add(Ln).add(Df),
            o
    }
    var Pl, Ml, Uf, zi, Vi, Ln, Df, Di, jf = z(() => {
        tt();
        Pl = "catmullrom",
            Ml = "cubicbezier",
            Uf = "quadraticbezier",
            zi = new S,
            Vi = new S,
            Ln = new S,
            Df = new S;
        Di = class i {
            constructor({ points: t = [new S(0, 0, 0), new S(0, 1, 0), new S(1, 1, 0), new S(1, 0, 0)], divisions: e = 12, type: r = Pl } = {}) {
                this.points = t,
                    this.divisions = e,
                    this.type = r
            }
            _getQuadraticBezierPoints(t = this.divisions) {
                let e = []
                    , r = this.points.length;
                if (r < 3)
                    return console.warn("Not enough points provided."),
                        [];
                let s = this.points[0]
                    , n = this.points[1]
                    , o = this.points[2];
                for (let l = 0; l <= t; l++) {
                    let h = Nf(l / t, s, n, o);
                    e.push(h)
                }
                let a = 3;
                for (; r - a > 0;) {
                    s.copy(o),
                        n = o.scale(2).sub(n),
                        o = this.points[a];
                    for (let l = 1; l <= t; l++) {
                        let h = Nf(l / t, s, n, o);
                        e.push(h)
                    }
                    a++
                }
                return e
            }
            _getCubicBezierPoints(t = this.divisions) {
                let e = []
                    , r = this.points.length;
                if (r < 4)
                    return console.warn("Not enough points provided."),
                        [];
                let s = this.points[0]
                    , n = this.points[1]
                    , o = this.points[2]
                    , a = this.points[3];
                for (let h = 0; h <= t; h++) {
                    let c = Bf(h / t, s, n, o, a);
                    e.push(c)
                }
                let l = 4;
                for (; r - l > 1;) {
                    s.copy(a),
                        n = a.scale(2).sub(o),
                        o = this.points[l],
                        a = this.points[l + 1];
                    for (let h = 1; h <= t; h++) {
                        let c = Bf(h / t, s, n, o, a);
                        e.push(c)
                    }
                    l += 2
                }
                return e
            }
            _getCatmullRomPoints(t = this.divisions, e = .168, r = .168) {
                let s = [];
                if (this.points.length <= 2)
                    return this.points;
                let o;
                return this.points.forEach((a, l) => {
                    if (l === 0)
                        o = a;
                    else {
                        let [h, c] = Eb(this.points, l - 1, e, r)
                            , u = new i({
                                points: [o, h, c, a],
                                type: Ml
                            });
                        s.pop(),
                            s.push(...u.getPoints(t)),
                            o = a
                    }
                }
                ),
                    s
            }
            getPoints(t = this.divisions, e = .168, r = .168) {
                let s = this.type;
                return s === Uf ? this._getQuadraticBezierPoints(t) : s === Ml ? this._getCubicBezierPoints(t) : s === Pl ? this._getCatmullRomPoints(t, e, r) : this.points
            }
        }
            ;
        Di.CATMULLROM = Pl;
        Di.CUBICBEZIER = Ml;
        Di.QUADRATICBEZIER = Uf
    }
    );
    var Ue, Rn = z(() => {
        Ue = class {
            constructor() {
                this._len = -1,
                    this.tiltStart = 0,
                    this.tiltEnd = 0
            }
            getLength() {
                return this._len < 0 && this.updateLength(),
                    this._len
            }
            getTiltAt(t) {
                return this.tiltStart * (1 - t) * this.tiltEnd * t
            }
            clone() {
                return new this.constructor().copy(this)
            }
            copy(t) {
                return this._len = t._len,
                    this.tiltStart = t.tiltStart,
                    this.tiltEnd = t.tiltEnd,
                    this
            }
        }
    }
    );
    function Wf(i, t, e, r) {
        let s = t[0]
            , n = t[1]
            , o = t[2]
            , a = 1 - r;
        return i[0] = s * s * a + r,
            i[1] = n * s * a + o * e,
            i[2] = o * s * a - n * e,
            i[3] = 0,
            i[4] = s * n * a - o * e,
            i[5] = n * n * a + r,
            i[6] = o * n * a + s * e,
            i[7] = 0,
            i[8] = s * o * a + n * e,
            i[9] = n * o * a - s * e,
            i[10] = o * o * a + r,
            i[11] = 0,
            i[12] = 0,
            i[13] = 0,
            i[14] = 0,
            i[15] = 1,
            i
    }
    function Sl(i, t, e, r = t, s = e) {
        let n = Math.sin(i)
            , o = Math.cos(i)
            , a = o * t.x + n * e.x
            , l = o * t.y + n * e.y
            , h = o * t.z + n * e.z
            , c = o * e.x - n * t.x
            , u = o * e.y - n * t.y
            , d = o * e.z - n * t.z;
        r.set(a, l, h),
            s.set(c, u, d)
    }
    var mr, Fn, qf, Hf, In, zn = z(() => {
        mr = [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
            Fn = [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
            qf = i => i * Math.PI / 180,
            Hf = i => 180 * i / Math.PI,
            In = (i, t, e) => Math.max(t, Math.min(i, e))
    }
    );
    function Tl(i, t, e, r, s) {
        let n = 1 - i;
        return n * n * n * t + 3 * n * n * i * e + 3 * n * i * i * r + i * i * i * s
    }
    function Al(i, t, e, r, s) {
        let n = 1 - i;
        return 3 * n * n * (e - t) + 6 * n * i * (r - e) + 3 * i * i * (s - r)
    }
    var Cb, Jr, $f = z(() => {
        Rn();
        tt();
        zn();
        Cb = new S;
        Jr = class extends Ue {
            constructor(t, e, r, s, n = 0, o = 0) {
                super(),
                    this.p0 = t,
                    this.p1 = e,
                    this.p2 = r,
                    this.p3 = s,
                    this.tiltStart = n,
                    this.tiltEnd = o,
                    this._len = -1
            }
            updateLength() {
                let e = mr.length
                    , r = 0;
                for (let s = 0, n; s < e; s++)
                    n = .5 * mr[s] + .5,
                        r += Fn[s] * this.getDerivativeAt(n, Cb).len();
                this._len = .5 * r
            }
            getPointAt(t, e = new S) {
                return e.x = Tl(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x),
                    e.y = Tl(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y),
                    e.z = Tl(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z),
                    e
            }
            getDerivativeAt(t, e = new S) {
                return e.x = Al(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x),
                    e.y = Al(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y),
                    e.z = Al(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z),
                    e
            }
            getTangentAt(t, e = new S) {
                return this.getDerivativeAt(t, e).normalize()
            }
            lastPoint() {
                return this.p3
            }
        }
    }
    );
    function kl(i, t, e, r) {
        let s = 1 - i;
        return s * s * t + 2 * s * i * e + i * i * r
    }
    function Ol(i, t, e, r) {
        return 2 * (1 - i) * (e - t) + 2 * i * (r - e)
    }
    var Pb, ts, Gf = z(() => {
        Rn();
        tt();
        zn();
        Pb = new S;
        ts = class extends Ue {
            constructor(t, e, r, s = 0, n = 0) {
                super(),
                    this.p0 = t,
                    this.p1 = e,
                    this.p2 = r,
                    this.tiltStart = s,
                    this.tiltEnd = n,
                    this._len = -1
            }
            updateLength() {
                let e = mr.length
                    , r = 0;
                for (let s = 0, n; s < e; s++)
                    n = .5 * mr[s] + .5,
                        r += Fn[s] * this.getDerivativeAt(n, Pb).len();
                this._len = .5 * r
            }
            getPointAt(t, e = new S) {
                return e.x = kl(t, this.p0.x, this.p1.x, this.p2.x),
                    e.y = kl(t, this.p0.y, this.p1.y, this.p2.y),
                    e.z = kl(t, this.p0.z, this.p1.z, this.p2.z),
                    e
            }
            getDerivativeAt(t, e = new S) {
                return e.x = Ol(t, this.p0.x, this.p1.x, this.p2.x),
                    e.y = Ol(t, this.p0.y, this.p1.y, this.p2.y),
                    e.z = Ol(t, this.p0.z, this.p1.z, this.p2.z),
                    e
            }
            getTangentAt(t, e = new S) {
                return this.getDerivativeAt(t, e).normalize()
            }
            lastPoint() {
                return this.p2
            }
        }
    }
    );
    var Mb, es, Yf = z(() => {
        Rn();
        tt();
        wn();
        Mb = new S,
            es = class extends Ue {
                constructor(t, e, r = 0, s = 0) {
                    super(),
                        this.p0 = t,
                        this.p1 = e,
                        this.tiltStart = r,
                        this.tiltEnd = s,
                        this._len = -1
                }
                updateLength() {
                    this._len = Mb.sub(this.p1, this.p0).len()
                }
                getPointAt(t, e = new S) {
                    return bn(e, this.p0, this.p1, t),
                        e
                }
                getTangentAt(t, e = new S) {
                    return e.sub(this.p1, this.p0).normalize()
                }
                lastPoint() {
                    return this.p1
                }
            }
    }
    );
    function Sb(i, t) {
        if (this[i] == null)
            throw new Error(t)
    }
    var Ni, Xf, Vn, Kf = z(() => {
        tt();
        me();
        $f();
        Gf();
        Yf();
        zn();
        Ni = new S,
            Xf = new X;
        Vn = class {
            constructor() {
                this._segments = [],
                    this._lengthOffsets = null,
                    this._totalLength = -1,
                    this._lastPoint = null,
                    this._lastTilt = 0,
                    this._assertLastPoint = Sb.bind(this, "_lastPoint", "Can`t get previous point of curve. Did you forget moveTo command?"),
                    this.tiltFunction = null
            }
            moveTo(t, e = 0) {
                this._totalLength = -1,
                    this._lastPoint = t,
                    this._lastTilt = e
            }
            bezierCurveTo(t, e, r, s = 0) {
                this._assertLastPoint();
                let n = new Jr(this._lastPoint, t, e, r, this._lastTilt, s);
                return this.addSegment(n),
                    this
            }
            quadraticCurveTo(t, e, r = 0) {
                this._assertLastPoint();
                let s = new ts(this._lastPoint, t, e, this._lastTilt, r);
                return this.addSegment(s),
                    this
            }
            lineTo(t, e = 0) {
                this._assertLastPoint();
                let r = new es(this._lastPoint, t, this._lastTilt, e);
                return this.addSegment(r),
                    this
            }
            addSegment(t) {
                return this._totalLength = -1,
                    this._lastPoint = t.lastPoint(),
                    this._lastTilt = t.tiltEnd,
                    this._segments.push(t),
                    this
            }
            getSegments() {
                return this._segments
            }
            updateLength() {
                let t = this._segments.length;
                this._lengthOffsets = new Array(t);
                let e = 0;
                for (let r = 0; r < t; r++)
                    this._lengthOffsets[r] = e,
                        e += this._segments[r].getLength();
                this._totalLength = e
            }
            getLength() {
                return this._totalLength < 0 && this.updateLength(),
                    this._totalLength
            }
            findSegmentIndexAtLength(t) {
                let e = this.getLength();
                if (t <= 0)
                    return [0, 0];
                if (t >= e)
                    return [this._segments.length - 1, 1];
                let r = 0, s = this._lengthOffsets.length - 1, n = -1, o;
                for (; r <= s;)
                    if (o = Math.ceil((r + s) / 2),
                        o === 0 || o === this._lengthOffsets.length - 1 || t >= this._lengthOffsets[o] && t < this._lengthOffsets[o + 1]) {
                        n = o;
                        break
                    } else
                        t < this._lengthOffsets[o] ? s = o - 1 : r = o + 1;
                let l = this._segments[n].getLength()
                    , h = (t - this._lengthOffsets[n]) / l;
                return [n, h]
            }
            getPointAtLength(t, e = new S) {
                let [r, s] = this.findSegmentIndexAtLength(t);
                return this._segments[r].getPointAt(s, e)
            }
            getPointAt(t, e = new S) {
                let r = this.getLength();
                return this.getPointAtLength(t * r, e)
            }
            getTangentAtLength(t, e = new S) {
                let [r, s] = this.findSegmentIndexAtLength(t);
                return this._segments[r].getTangentAt(s, e)
            }
            getTangentAt(t, e = new S) {
                let r = this.getLength();
                return this.getTangentAtLength(t * r, e)
            }
            getTiltAtLength(t) {
                let [e, r] = this.findSegmentIndexAtLength(t);
                return this._segments[e].getTiltAt(r)
            }
            getTiltAt(t) {
                let e = this.getLength();
                return this.getTiltAtLength(t * e)
            }
            getPoints(t = 64) {
                let e = new Array(t + 1);
                for (let r = 0; r <= t; r++)
                    e[r] = this.getPointAt(r / t);
                return e
            }
            computeFrenetFrames(t = 64, e = !1) {
                var f;
                let r = new Array(t + 1)
                    , s = new Array(t + 1)
                    , n = (f = this.tiltFunction) != null ? f : m => m
                    , o = this.getLength();
                for (let m = 0; m <= t; m++) {
                    let [p, v] = this.findSegmentIndexAtLength(o * m / t)
                        , g = this._segments[p];
                    r[m] = g.getTangentAt(v),
                        s[m] = n(g.getTiltAt(v), m / t, this)
                }
                let a = Math.abs(r[0].x)
                    , l = Math.abs(r[0].y)
                    , h = Math.abs(r[0].z)
                    , c = new S;
                a < l && a < h ? c.set(1, 0, 0) : l < a && l < h ? c.set(0, 1, 0) : c.set(0, 0, 1);
                let u = new Array(t + 1)
                    , d = new Array(t + 1);
                u[0] = new S,
                    d[0] = new S,
                    Ni.cross(r[0], c).normalize(),
                    u[0].cross(r[0], Ni),
                    d[0].cross(r[0], u[0]);
                for (let m = 1; m < r.length; m++) {
                    u[m] = u[m - 1].clone(),
                        d[m] = new S,
                        Ni.cross(r[m - 1], r[m]);
                    let p = Ni.len();
                    if (p > Number.EPSILON) {
                        Ni.scale(1 / p);
                        let v = In(r[m - 1].dot(r[m]), -1, 1)
                            , g = In(p, -1, 1);
                        Wf(Xf, Ni, g, v),
                            u[m].applyMatrix4(Xf)
                    }
                    d[m].cross(r[m], u[m])
                }
                for (let m = 0; m < s.length; m++)
                    Sl(qf(s[m]), u[m], d[m]);
                if (e === !0) {
                    let m = u[u.length - 1]
                        , p = Math.acos(In(u[0].dot(m), -1, 1)) / (u.length - 1);
                    r[0].dot(Ni.cross(u[0], m)) > 0 && (p = -p);
                    for (let v = 1; v < u.length - 1; v++) {
                        let g = p * v;
                        Sl(g, u[v], d[v]),
                            s[v] += Hf(g)
                    }
                    u[u.length - 1] = u[0].clone(),
                        d[d.length - 1] = d[0].clone()
                }
                return {
                    tangents: r,
                    normals: u,
                    binormals: d,
                    tilts: s
                }
            }
        }
    }
    );
    var Dn, Bi, Ll, Nn, Bn, Qf = z(() => {
        kt();
        tt();
        Ii();
        Dn = new S,
            Bi = new S,
            Ll = new et,
            Nn = new S,
            Bn = class extends W {
                constructor(t, { path: e, radius: r = 1, tubularSegments: s = 64, radialSegments: n = 8, closed: o = !1, attributes: a = {} } = {}) {
                    super(t, a),
                        this.path = e,
                        this.radius = r,
                        this.tubularSegments = s,
                        this.radialSegments = n,
                        this.closed = o,
                        this.frenetFrames = e.computeFrenetFrames(s, o);
                    let l = (s + 1) * (n + 1)
                        , h = s * n * 6;
                    this.positions = new Float32Array(l * 3),
                        this.normals = new Float32Array(l * 3),
                        this.uvs = new Float32Array(l * 2),
                        this.indices = l > 65536 ? new Uint32Array(h) : new Uint16Array(h),
                        this._generateAttributes(),
                        this._generateIndices(),
                        this.addAttribute("position", {
                            size: 3,
                            data: this.positions
                        }),
                        this.addAttribute("normal", {
                            size: 3,
                            data: this.normals
                        }),
                        this.addAttribute("uv", {
                            size: 2,
                            data: this.uvs
                        }),
                        this.setIndex({
                            data: this.indices
                        })
                }
                _generateAttributes() {
                    for (let t = 0; t <= this.tubularSegments; t++) {
                        let e = t;
                        t === this.tubularSegments && (e = this.closed ? 0 : this.tubularSegments),
                            this.path.getPointAt(e / this.tubularSegments, Nn);
                        let r = this.frenetFrames.normals[e]
                            , s = this.frenetFrames.binormals[e];
                        for (let n = 0; n <= this.radialSegments; n++) {
                            let o = n / this.radialSegments * Math.PI * 2
                                , a = Math.sin(o)
                                , l = -Math.cos(o)
                                , h = t * (this.radialSegments + 1) + n;
                            Bi.x = l * r.x + a * s.x,
                                Bi.y = l * r.y + a * s.y,
                                Bi.z = l * r.z + a * s.z,
                                this.normals.set(Bi, h * 3),
                                Dn.x = Nn.x + this.radius * Bi.x,
                                Dn.y = Nn.y + this.radius * Bi.y,
                                Dn.z = Nn.z + this.radius * Bi.z,
                                this.positions.set(Dn, h * 3),
                                Ll.x = t / this.tubularSegments,
                                Ll.y = n / this.radialSegments,
                                this.uvs.set(Ll, h * 2)
                        }
                    }
                }
                _generateIndices() {
                    for (let t = 1; t <= this.tubularSegments; t++)
                        for (let e = 1; e <= this.radialSegments; e++) {
                            let r = (this.radialSegments + 1) * (t - 1) + (e - 1)
                                , s = (this.radialSegments + 1) * t + (e - 1)
                                , n = (this.radialSegments + 1) * t + e
                                , o = (this.radialSegments + 1) * (t - 1) + e
                                , a = (t - 1) * this.radialSegments + (e - 1);
                            this.indices.set([r, s, o, s, n, o], a * 6)
                        }
                }
            }
    }
    );
    var Un, Tb, Ab, Zf = z(() => {
        Qt();
        Vt();
        dr();
        Zr();
        Un = class {
            constructor(t, { width: e, height: r, dpr: s, wrapS: n = t.CLAMP_TO_EDGE, wrapT: o = t.CLAMP_TO_EDGE, minFilter: a = t.LINEAR, magFilter: l = t.LINEAR, geometry: h = new Te(t), targetOnly: c = null, depth: u = !0 } = {}) {
                this.gl = t,
                    this.passes = [],
                    this.geometry = h,
                    this.uniform = {
                        value: null
                    },
                    this.targetOnly = c,
                    s && (this.dpr = s),
                    e && (this.width = e),
                    r && (this.height = r),
                    s = this.dpr || this.gl.renderer.dpr,
                    this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * s),
                    this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * s);
                let d = {
                    dpr: this.dpr,
                    width: this.resolutionWidth,
                    height: this.resolutionHeight,
                    wrapS: n,
                    wrapT: o,
                    minFilter: a,
                    magFilter: l,
                    depth: u
                }
                    , f = this.fbo = {
                        read: new Ot(this.gl, d),
                        write: new Ot(this.gl, d),
                        swap: () => {
                            let m = f.read;
                            f.read = f.write,
                                f.write = m
                        }
                    }
            }
            addPass({ vertex: t = Tb, fragment: e = Ab, uniforms: r = {}, textureUniform: s = "tMap", enabled: n = !0 } = {}) {
                r[s] = {
                    value: this.fbo.read.texture
                };
                let o = new Y(this.gl, {
                    vertex: t,
                    fragment: e,
                    uniforms: r
                })
                    , l = {
                        mesh: new q(this.gl, {
                            geometry: this.geometry,
                            program: o
                        }),
                        program: o,
                        uniforms: r,
                        enabled: n,
                        textureUniform: s
                    };
                return this.passes.push(l),
                    l
            }
            resize({ width: t, height: e, dpr: r } = {}) {
                r && (this.dpr = r),
                    t && (this.width = t),
                    e && (this.height = e),
                    r = this.dpr || this.gl.renderer.dpr,
                    this.resolutionWidth = Math.floor(this.width || this.gl.renderer.width * r),
                    this.resolutionHeight = Math.floor(this.height || this.gl.renderer.height * r),
                    this.fbo.read.setSize(this.resolutionWidth, this.resolutionHeight),
                    this.fbo.write.setSize(this.resolutionWidth, this.resolutionHeight)
            }
            render({ scene: t, camera: e, texture: r, target: s = null, update: n = !0, sort: o = !0, frustumCull: a = !0, beforePostCallbacks: l }) {
                let h = this.passes.filter(c => c.enabled);
                r || (this.gl.renderer.render({
                    scene: t,
                    camera: e,
                    target: h.length || !s && this.targetOnly ? this.fbo.write : s,
                    update: n,
                    sort: o,
                    frustumCull: a
                }),
                    this.fbo.swap(),
                    l && l.forEach(c => c && c())),
                    h.forEach((c, u) => {
                        c.mesh.program.uniforms[c.textureUniform].value = !u && r ? r : this.fbo.read.texture,
                            this.gl.renderer.render({
                                scene: c.mesh,
                                target: u === h.length - 1 && (s || !this.targetOnly) ? s : this.fbo.write,
                                clear: !0
                            }),
                            this.fbo.swap()
                    }
                    ),
                    this.uniform.value = this.fbo.read.texture
            }
        }
            ,
            Tb = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
            Ab = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`
    }
    );
    var Rl, Fl, Il, Jf, tm, em, vr, zl = z(() => {
        tt();
        Kr();
        Rl = new S,
            Fl = new $t,
            Il = new S,
            Jf = new S,
            tm = new $t,
            em = new S,
            vr = class {
                constructor({ objects: t, data: e }) {
                    this.objects = t,
                        this.data = e,
                        this.elapsed = 0,
                        this.weight = 1,
                        this.duration = e.frames.length - 1
                }
                update(t = 1, e) {
                    let r = e ? 1 : this.weight / t
                        , s = this.elapsed % this.duration
                        , n = Math.floor(s)
                        , o = s - n
                        , a = this.data.frames[n]
                        , l = this.data.frames[(n + 1) % this.duration];
                    this.objects.forEach((h, c) => {
                        Rl.fromArray(a.position, c * 3),
                            Fl.fromArray(a.quaternion, c * 4),
                            Il.fromArray(a.scale, c * 3),
                            Jf.fromArray(l.position, c * 3),
                            tm.fromArray(l.quaternion, c * 4),
                            em.fromArray(l.scale, c * 3),
                            Rl.lerp(Jf, o),
                            Fl.slerp(tm, o),
                            Il.lerp(em, o),
                            h.position.lerp(Rl, r),
                            h.quaternion.slerp(Fl, r),
                            h.scale.lerp(Il, r)
                    }
                    )
                }
            }
    }
    );
    var im, jn, rm = z(() => {
        Vt();
        Fi();
        me();
        Be();
        zl();
        im = new X,
            jn = class extends q {
                constructor(t, { rig: e, geometry: r, program: s, mode: n = t.TRIANGLES } = {}) {
                    super(t, {
                        geometry: r,
                        program: s,
                        mode: n
                    }),
                        this.createBones(e),
                        this.createBoneTexture(),
                        this.animations = [],
                        Object.assign(this.program.uniforms, {
                            boneTexture: {
                                value: this.boneTexture
                            },
                            boneTextureSize: {
                                value: this.boneTextureSize
                            }
                        })
                }
                createBones(t) {
                    if (this.root = new bt,
                        this.bones = [],
                        !(!t.bones || !t.bones.length)) {
                        for (let e = 0; e < t.bones.length; e++) {
                            let r = new bt;
                            r.position.fromArray(t.bindPose.position, e * 3),
                                r.quaternion.fromArray(t.bindPose.quaternion, e * 4),
                                r.scale.fromArray(t.bindPose.scale, e * 3),
                                this.bones.push(r)
                        }
                        t.bones.forEach((e, r) => {
                            if (this.bones[r].name = e.name,
                                e.parent === -1)
                                return this.bones[r].setParent(this.root);
                            this.bones[r].setParent(this.bones[e.parent])
                        }
                        ),
                            this.root.updateMatrixWorld(!0),
                            this.bones.forEach(e => {
                                e.bindInverse = new X(...e.worldMatrix).inverse()
                            }
                            )
                    }
                }
                createBoneTexture() {
                    if (!this.bones.length)
                        return;
                    let t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
                    this.boneMatrices = new Float32Array(t * t * 4),
                        this.boneTextureSize = t,
                        this.boneTexture = new ht(this.gl, {
                            image: this.boneMatrices,
                            generateMipmaps: !1,
                            type: this.gl.FLOAT,
                            internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                            minFilter: this.gl.NEAREST,
                            magFilter: this.gl.NEAREST,
                            flipY: !1,
                            width: t
                        })
                }
                addAnimation(t) {
                    let e = new vr({
                        objects: this.bones,
                        data: t
                    });
                    return this.animations.push(e),
                        e
                }
                update() {
                    let t = 0;
                    this.animations.forEach(e => t += e.weight),
                        this.animations.forEach((e, r) => {
                            e.update(t, r === 0)
                        }
                        )
                }
                draw({ camera: t } = {}) {
                    this.root.updateMatrixWorld(!0),
                        this.bones.forEach((e, r) => {
                            im.multiply(e.worldMatrix, e.bindInverse),
                                this.boneMatrices.set(im, r * 16)
                        }
                        ),
                        this.boneTexture && (this.boneTexture.needsUpdate = !0),
                        super.draw({
                            camera: t
                        })
                }
            }
    }
    );
    function sm({ font: i, text: t, width: e = 1 / 0, align: r = "left", size: s = 1, letterSpacing: n = 0, lineHeight: o = 1.4, wordSpacing: a = 0, wordBreak: l = !1 }) {
        let h = this, c, u, d, f, m, p = /\n/, v = /\s/;
        g(),
            w();
        function g() {
            c = {},
                i.chars.forEach(y => c[y.char] = y)
        }
        function w() {
            d = i.common.lineHeight,
                f = i.common.base,
                m = s / f;
            let P = t.replace(/[ \n]/g, "").length;
            u = {
                position: new Float32Array(P * 4 * 3),
                uv: new Float32Array(P * 4 * 2),
                id: new Float32Array(P * 4),
                index: new Uint16Array(P * 6)
            };
            for (let E = 0; E < P; E++)
                u.id.set([E, E, E, E], E * 4),
                    u.index.set([E * 4, E * 4 + 2, E * 4 + 1, E * 4 + 1, E * 4 + 2, E * 4 + 3], E * 6);
            b()
        }
        function b() {
            let y = []
                , P = 0
                , E = 0
                , C = 0
                , M = A();
            function A() {
                let k = {
                    width: 0,
                    glyphs: []
                };
                return y.push(k),
                    E = P,
                    C = 0,
                    k
            }
            let T = 100
                , O = 0;
            for (; P < t.length && O < T;) {
                O++;
                let k = t[P];
                if (!M.width && v.test(k)) {
                    P++,
                        E = P,
                        C = 0;
                    continue
                }
                if (p.test(k)) {
                    P++,
                        M = A();
                    continue
                }
                let F = c[k] || c[" "];
                if (M.glyphs.length) {
                    let N = M.glyphs[M.glyphs.length - 1][0]
                        , V = _(F.id, N.id) * m;
                    M.width += V,
                        C += V
                }
                M.glyphs.push([F, M.width]);
                let D = 0;
                if (v.test(k) ? (E = P,
                    C = 0,
                    D += a * s) : D += n * s,
                    D += F.xadvance * m,
                    M.width += D,
                    C += D,
                    M.width > e) {
                    if (l && M.glyphs.length > 1) {
                        M.width -= D,
                            M.glyphs.pop(),
                            M = A();
                        continue
                    } else if (!l && C !== M.width) {
                        let N = P - E + 1;
                        M.glyphs.splice(-N, N),
                            P = E,
                            M.width -= C,
                            M = A();
                        continue
                    }
                }
                P++,
                    O = 0
            }
            M.width || y.pop(),
                x(y)
        }
        function x(y) {
            let P = i.common.scaleW
                , E = i.common.scaleH
                , C = .07 * s
                , M = 0;
            for (let A = 0; A < y.length; A++) {
                let T = y[A];
                for (let O = 0; O < T.glyphs.length; O++) {
                    let k = T.glyphs[O][0]
                        , F = T.glyphs[O][1];
                    if (r === "center" ? F -= T.width * .5 : r === "right" && (F -= T.width),
                        v.test(k.char))
                        continue;
                    F += k.xoffset * m,
                        C -= k.yoffset * m;
                    let D = k.width * m
                        , N = k.height * m;
                    u.position.set([F, C - N, 0, F, C, 0, F + D, C - N, 0, F + D, C, 0], M * 4 * 3);
                    let V = k.x / P
                        , J = k.width / P
                        , nt = 1 - k.y / E
                        , vt = k.height / E;
                    u.uv.set([V, nt - vt, V, nt, V + J, nt - vt, V + J, nt], M * 4 * 2),
                        C += k.yoffset * m,
                        M++
                }
                C -= s * o
            }
            h.buffers = u,
                h.numLines = y.length,
                h.height = h.numLines * s * o,
                h.width = Math.max(...y.map(A => A.width))
        }
        function _(y, P) {
            for (let E = 0; E < i.kernings.length; E++) {
                let C = i.kernings[E];
                if (!(C.first < y) && !(C.second < P))
                    return C.first > y || C.first === y && C.second > P ? 0 : C.amount
            }
            return 0
        }
        this.resize = function (y) {
            ({ width: e } = y),
                b()
        }
            ,
            this.update = function (y) {
                ({ text: t } = y),
                    w()
            }
    }
    var nm = z(() => { }
    );
    function gr(i) {
        return new Y(i, {
            vertex: kb,
            fragment: Ob,
            cullFace: !1
        })
    }
    var kb, Ob, Vl = z(() => {
        Qt();
        kb = `
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,
            Ob = `
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`
    }
    );
    var qn, Lb, Rb, om = z(() => {
        dr();
        Qt();
        Vt();
        Ii();
        Zr();
        qn = class {
            constructor(t, { size: e = 128, falloff: r = .3, alpha: s = 1, dissipation: n = .98, type: o } = {}) {
                let a = this;
                this.gl = t,
                    this.uniform = {
                        value: null
                    },
                    this.mask = {
                        read: null,
                        write: null,
                        swap: () => {
                            let c = a.mask.read;
                            a.mask.read = a.mask.write,
                                a.mask.write = c,
                                a.uniform.value = a.mask.read.texture
                        }
                    },
                    l(),
                    this.aspect = 1,
                    this.mouse = new et,
                    this.velocity = new et,
                    this.mesh = h();
                function l() {
                    o || (o = t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);
                    let c = t.renderer.isWebgl2 || t.renderer.extensions[`OES_texture_${o === t.FLOAT ? "" : "half_"}float_linear`] ? t.LINEAR : t.NEAREST
                        , u = {
                            width: e,
                            height: e,
                            type: o,
                            format: t.RGBA,
                            internalFormat: t.renderer.isWebgl2 ? o === t.FLOAT ? t.RGBA32F : t.RGBA16F : t.RGBA,
                            minFilter: c,
                            depth: !1
                        };
                    a.mask.read = new Ot(t, u),
                        a.mask.write = new Ot(t, u),
                        a.mask.swap()
                }
                function h() {
                    return new q(t, {
                        geometry: new Te(t),
                        program: new Y(t, {
                            vertex: Lb,
                            fragment: Rb,
                            uniforms: {
                                tMap: a.uniform,
                                uFalloff: {
                                    value: r * .5
                                },
                                uAlpha: {
                                    value: s
                                },
                                uDissipation: {
                                    value: n
                                },
                                uAspect: {
                                    value: 1
                                },
                                uMouse: {
                                    value: a.mouse
                                },
                                uVelocity: {
                                    value: a.velocity
                                }
                            },
                            depthTest: !1
                        })
                    })
                }
            }
            update() {
                this.mesh.program.uniforms.uAspect.value = this.aspect,
                    this.gl.renderer.render({
                        scene: this.mesh,
                        target: this.mask.write,
                        clear: !1
                    }),
                    this.mask.swap()
            }
        }
            ,
            Lb = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
            Rb = `
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`
    }
    );
    var Hn, Fb, Ib, am = z(() => {
        Qt();
        Vt();
        Be();
        dr();
        Zr();
        Hn = class {
            constructor(t, { data: e = new Float32Array(16), geometry: r = new Te(t), type: s }) {
                this.gl = t;
                let n = e;
                this.passes = [],
                    this.geometry = r,
                    this.dataLength = n.length / 4,
                    this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)),
                    this.coords = new Float32Array(this.dataLength * 2);
                for (let l = 0; l < this.dataLength; l++) {
                    let h = l % this.size / this.size
                        , c = Math.floor(l / this.size) / this.size;
                    this.coords.set([h, c], l * 2)
                }
                let o = (() => {
                    if (n.length === this.size * this.size * 4)
                        return n;
                    {
                        let l = new Float32Array(this.size * this.size * 4);
                        return l.set(n),
                            l
                    }
                }
                )();
                this.uniform = {
                    value: new ht(t, {
                        image: o,
                        target: t.TEXTURE_2D,
                        type: t.FLOAT,
                        format: t.RGBA,
                        internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
                        wrapS: t.CLAMP_TO_EDGE,
                        wrapT: t.CLAMP_TO_EDGE,
                        generateMipmaps: !1,
                        minFilter: t.NEAREST,
                        magFilter: t.NEAREST,
                        width: this.size,
                        flipY: !1
                    })
                };
                let a = {
                    width: this.size,
                    height: this.size,
                    type: s || t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
                    format: t.RGBA,
                    internalFormat: t.renderer.isWebgl2 ? s === t.FLOAT ? t.RGBA32F : t.RGBA16F : t.RGBA,
                    minFilter: t.NEAREST,
                    depth: !1,
                    unpackAlignment: 1
                };
                this.fbo = {
                    read: new Ot(t, a),
                    write: new Ot(t, a),
                    swap: () => {
                        let l = this.fbo.read;
                        this.fbo.read = this.fbo.write,
                            this.fbo.write = l,
                            this.uniform.value = this.fbo.read.texture
                    }
                }
            }
            addPass({ vertex: t = Fb, fragment: e = Ib, uniforms: r = {}, textureUniform: s = "tMap", enabled: n = !0 } = {}) {
                r[s] = this.uniform;
                let o = new Y(this.gl, {
                    vertex: t,
                    fragment: e,
                    uniforms: r
                })
                    , l = {
                        mesh: new q(this.gl, {
                            geometry: this.geometry,
                            program: o
                        }),
                        program: o,
                        uniforms: r,
                        enabled: n,
                        textureUniform: s
                    };
                return this.passes.push(l),
                    l
            }
            render() {
                this.passes.filter(e => e.enabled).forEach((e, r) => {
                    this.gl.renderer.render({
                        scene: e.mesh,
                        target: this.fbo.write,
                        clear: !1
                    }),
                        this.fbo.swap()
                }
                )
            }
        }
            ,
            Fb = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
            Ib = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`
    }
    );
    var _r, Wn, zb, Vb, lm = z(() => {
        kt();
        Qt();
        Vt();
        Ii();
        tt();
        Mn();
        _r = new S,
            Wn = class {
                constructor(t, { points: e, vertex: r = zb, fragment: s = Vb, uniforms: n = {}, attributes: o = {} }) {
                    this.gl = t,
                        this.points = e,
                        this.count = e.length,
                        this.position = new Float32Array(this.count * 3 * 2),
                        this.prev = new Float32Array(this.count * 3 * 2),
                        this.next = new Float32Array(this.count * 3 * 2);
                    let a = new Float32Array(this.count * 1 * 2)
                        , l = new Float32Array(this.count * 2 * 2)
                        , h = new Uint16Array((this.count - 1) * 3 * 2);
                    for (let d = 0; d < this.count; d++) {
                        a.set([-1, 1], d * 2);
                        let f = d / (this.count - 1);
                        if (l.set([0, f, 1, f], d * 4),
                            d === this.count - 1)
                            continue;
                        let m = d * 2;
                        h.set([m + 0, m + 1, m + 2], (m + 0) * 3),
                            h.set([m + 2, m + 1, m + 3], (m + 1) * 3)
                    }
                    let c = this.geometry = new W(t, Object.assign(o, {
                        position: {
                            size: 3,
                            data: this.position
                        },
                        prev: {
                            size: 3,
                            data: this.prev
                        },
                        next: {
                            size: 3,
                            data: this.next
                        },
                        side: {
                            size: 1,
                            data: a
                        },
                        uv: {
                            size: 2,
                            data: l
                        },
                        index: {
                            size: 1,
                            data: h
                        }
                    }));
                    this.updateGeometry(),
                        n.uResolution || (this.resolution = n.uResolution = {
                            value: new et
                        }),
                        n.uDPR || (this.dpr = n.uDPR = {
                            value: 1
                        }),
                        n.uThickness || (this.thickness = n.uThickness = {
                            value: 1
                        }),
                        n.uColor || (this.color = n.uColor = {
                            value: new oi("#000")
                        }),
                        n.uMiter || (this.miter = n.uMiter = {
                            value: 1
                        }),
                        this.resize();
                    let u = this.program = new Y(t, {
                        vertex: r,
                        fragment: s,
                        uniforms: n
                    });
                    this.mesh = new q(t, {
                        geometry: c,
                        program: u
                    })
                }
                updateGeometry() {
                    this.points.forEach((t, e) => {
                        t.toArray(this.position, e * 3 * 2),
                            t.toArray(this.position, e * 3 * 2 + 3),
                            e ? (t.toArray(this.next, (e - 1) * 3 * 2),
                                t.toArray(this.next, (e - 1) * 3 * 2 + 3)) : (_r.copy(t).sub(this.points[e + 1]).add(t),
                                    _r.toArray(this.prev, e * 3 * 2),
                                    _r.toArray(this.prev, e * 3 * 2 + 3)),
                            e === this.points.length - 1 ? (_r.copy(t).sub(this.points[e - 1]).add(t),
                                _r.toArray(this.next, e * 3 * 2),
                                _r.toArray(this.next, e * 3 * 2 + 3)) : (t.toArray(this.prev, (e + 1) * 3 * 2),
                                    t.toArray(this.prev, (e + 1) * 3 * 2 + 3))
                    }
                    ),
                        this.geometry.attributes.position.needsUpdate = !0,
                        this.geometry.attributes.prev.needsUpdate = !0,
                        this.geometry.attributes.next.needsUpdate = !0
                }
                resize() {
                    this.resolution && this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height),
                        this.dpr && (this.dpr.value = this.gl.renderer.dpr)
                }
            }
            ,
            zb = `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`,
            Vb = `
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`
    }
    );
    var $n, Dl, Nl, hm = z(() => {
        Pn();
        Qt();
        dr();
        $n = class {
            constructor(t, { light: e = new ve(t), width: r = 1024, height: s = r }) {
                this.gl = t,
                    this.light = e,
                    this.target = new Ot(t, {
                        width: r,
                        height: s
                    }),
                    this.targetUniform = {
                        value: this.target.texture
                    },
                    this.depthProgram = new Y(t, {
                        vertex: Dl,
                        fragment: Nl,
                        cullFace: !1
                    }),
                    this.castMeshes = []
            }
            add({ mesh: t, receive: e = !0, cast: r = !0, vertex: s = Dl, fragment: n = Nl, uniformProjection: o = "shadowProjectionMatrix", uniformView: a = "shadowViewMatrix", uniformTexture: l = "tShadow" }) {
                if (e && !t.program.uniforms[o] && (t.program.uniforms[o] = {
                    value: this.light.projectionMatrix
                },
                    t.program.uniforms[a] = {
                        value: this.light.viewMatrix
                    },
                    t.program.uniforms[l] = this.targetUniform),
                    !!r && (this.castMeshes.push(t),
                        t.colorProgram = t.program,
                        !t.depthProgram)) {
                    if (s === Dl && n === Nl) {
                        t.depthProgram = this.depthProgram;
                        return
                    }
                    t.depthProgram = new Y(this.gl, {
                        vertex: s,
                        fragment: n,
                        cullFace: !1
                    })
                }
            }
            setSize({ width: t = 1024, height: e = t }) {
                this.target = new Ot(this.gl, {
                    width: t,
                    height: e
                }),
                    this.targetUniform.value = this.target.texture
            }
            render({ scene: t }) {
                t.traverse(e => {
                    e.draw && (~this.castMeshes.indexOf(e) ? e.program = e.depthProgram : (e.isForceVisibility = e.visible,
                        e.visible = !1))
                }
                ),
                    this.gl.renderer.render({
                        scene: t,
                        camera: this.light,
                        target: this.target
                    }),
                    t.traverse(e => {
                        e.draw && (~this.castMeshes.indexOf(e) ? e.program = e.colorProgram : e.visible = e.isForceVisibility)
                    }
                    )
            }
        }
            ,
            Dl = `
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,
            Nl = `
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`
    }
    );
    function Db(i) {
        let t = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]
            , e = new Uint8Array(i, 0, 12);
        for (let u = 0; u < e.length; u++)
            if (e[u] !== t[u])
                return console.error("File missing KTX identifier");
        let r = Uint32Array.BYTES_PER_ELEMENT
            , s = new DataView(i, 12, 13 * r)
            , n = s.getUint32(0, !0) === 67305985;
        if (s.getUint32(1 * r, n) !== 0)
            return console.warn("only compressed formats currently supported");
        this.glInternalFormat = s.getUint32(4 * r, n);
        let a = s.getUint32(6 * r, n)
            , l = s.getUint32(7 * r, n);
        this.numberOfFaces = s.getUint32(10 * r, n),
            this.numberOfMipmapLevels = Math.max(1, s.getUint32(11 * r, n));
        let h = s.getUint32(12 * r, n);
        this.mipmaps = [];
        let c = 12 + 13 * 4 + h;
        for (let u = 0; u < this.numberOfMipmapLevels; u++) {
            let d = new Int32Array(i, c, 1)[0];
            c += 4;
            for (let f = 0; f < this.numberOfFaces; f++) {
                let m = new Uint8Array(i, c, d);
                this.mipmaps.push({
                    data: m,
                    width: a,
                    height: l
                }),
                    c += d,
                    c += 3 - (d + 3) % 4
            }
            a = a >> 1,
                l = l >> 1
        }
    }
    var br, Bl = z(() => {
        Be();
        br = class extends ht {
            constructor(t, { buffer: e, wrapS: r = t.CLAMP_TO_EDGE, wrapT: s = t.CLAMP_TO_EDGE, anisotropy: n = 0, minFilter: o, magFilter: a } = {}) {
                if (super(t, {
                    generateMipmaps: !1,
                    wrapS: r,
                    wrapT: s,
                    anisotropy: n,
                    minFilter: o,
                    magFilter: a
                }),
                    e)
                    return this.parseBuffer(e)
            }
            parseBuffer(t) {
                let e = new Db(t);
                e.mipmaps.isCompressedTexture = !0,
                    this.image = e.mipmaps,
                    this.internalFormat = e.glInternalFormat,
                    e.numberOfMipmapLevels > 1 ? this.minFilter === this.gl.LINEAR && (this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR) : this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR && (this.minFilter = this.gl.LINEAR)
            }
        }
    }
    );
    function cm(i) {
        return Math.log2(i) % 1 === 0
    }
    function Nb(i, t) {
        return new Promise((e, r) => {
            if (Bb())
                fetch(i, {
                    mode: "cors"
                }).then(s => s.blob()).then(s => createImageBitmap(s, {
                    imageOrientation: t ? "flipY" : "none",
                    premultiplyAlpha: "none"
                })).then(e).catch(s => r(s));
            else {
                let s = new Image;
                s.crossOrigin = "",
                    s.src = i,
                    s.onerror = ({ type: n }) => r(`${n}: Loading image`),
                    s.onload = () => e(s)
            }
        }
        )
    }
    function Bb() {
        if (!navigator.userAgent.toLowerCase().includes("chrome"))
            return !1;
        try {
            createImageBitmap
        } catch (t) {
            return !1
        }
        return !0
    }
    var Gn, is, Yn, um = z(() => {
        Be();
        Bl();
        Gn = {},
            is = [],
            Yn = class {
                static load(t, { src: e, wrapS: r = t.CLAMP_TO_EDGE, wrapT: s = t.CLAMP_TO_EDGE, anisotropy: n = 0, format: o = t.RGBA, internalFormat: a = o, generateMipmaps: l = !0, minFilter: h = l ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR, magFilter: c = t.LINEAR, premultiplyAlpha: u = !1, unpackAlignment: d = 4, flipY: f = !0 } = {}) {
                    let m = this.getSupportedExtensions(t)
                        , p = "none";
                    if (typeof e == "string" && (p = e.split(".").pop().split("?")[0].toLowerCase()),
                        typeof e == "object") {
                        for (let w in e)
                            if (m.includes(w.toLowerCase())) {
                                p = w.toLowerCase(),
                                    e = e[w];
                                break
                            }
                    }
                    let v = e + r + s + n + o + a + l + h + c + u + d + f + t.renderer.id;
                    if (Gn[v])
                        return Gn[v];
                    let g;
                    switch (p) {
                        case "ktx":
                        case "pvrtc":
                        case "s3tc":
                        case "etc":
                        case "etc1":
                        case "astc":
                            g = new br(t, {
                                src: e,
                                wrapS: r,
                                wrapT: s,
                                anisotropy: n,
                                minFilter: h,
                                magFilter: c
                            }),
                                g.loaded = this.loadKTX(e, g);
                            break;
                        case "webp":
                        case "jpg":
                        case "jpeg":
                        case "png":
                            g = new ht(t, {
                                wrapS: r,
                                wrapT: s,
                                anisotropy: n,
                                format: o,
                                internalFormat: a,
                                generateMipmaps: l,
                                minFilter: h,
                                magFilter: c,
                                premultiplyAlpha: u,
                                unpackAlignment: d,
                                flipY: f
                            }),
                                g.loaded = this.loadImage(t, e, g, f);
                            break;
                        default:
                            console.warn("No supported format supplied"),
                                g = new ht(t)
                    }
                    return g.ext = p,
                        Gn[v] = g,
                        g
                }
                static getSupportedExtensions(t) {
                    if (is.length)
                        return is;
                    let e = {
                        pvrtc: t.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || t.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                        s3tc: t.renderer.getExtension("WEBGL_compressed_texture_s3tc"),
                        etc1: t.renderer.getExtension("WEBGL_compressed_texture_etc1"),
                        astc: t.renderer.getExtension("WEBGL_compressed_texture_astc"),
                        bc7: t.renderer.getExtension("EXT_texture_compression_bptc")
                    };
                    for (let r in e)
                        e[r] && is.push(r);
                    return is.push("png", "jpg", "webp"),
                        is
                }
                static loadKTX(t, e) {
                    return fetch(t).then(r => r.arrayBuffer()).then(r => e.parseBuffer(r))
                }
                static loadImage(t, e, r, s) {
                    return Nb(e, s).then(n => (!t.renderer.isWebgl2 && (!cm(n.width) || !cm(n.height)) && (r.generateMipmaps && (r.generateMipmaps = !1),
                        r.minFilter === t.NEAREST_MIPMAP_LINEAR && (r.minFilter = t.LINEAR),
                        r.wrapS === t.REPEAT && (r.wrapS = r.wrapT = t.CLAMP_TO_EDGE)),
                        r.image = n,
                        r.onUpdate = () => {
                            n.close && n.close(),
                                r.onUpdate = null
                        }
                        ,
                        n))
                }
                static clearCache() {
                    Gn = {}
                }
            }
    }
    );
    var dm, Ub, jb, qb, pm, Hb, Wb, $b, wr, Ul = z(() => {
        tt();
        Kr();
        dm = new S,
            Ub = new S,
            jb = new S,
            qb = new S,
            pm = new $t,
            Hb = new $t,
            Wb = new $t,
            $b = new $t,
            wr = class {
                constructor(t, e = 1) {
                    this.data = t,
                        this.elapsed = 0,
                        this.weight = e,
                        this.loop = !0,
                        this.startTime = t.reduce((r, { times: s }) => Math.min(r, s[0]), 1 / 0),
                        this.endTime = t.reduce((r, { times: s }) => Math.max(r, s[s.length - 1]), 0),
                        this.duration = this.endTime - this.startTime
                }
                update(t = 1, e) {
                    let r = e ? 1 : this.weight / t
                        , s = this.duration ? (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - .001)) + this.startTime : 0;
                    this.data.forEach(({ node: n, transform: o, interpolation: a, times: l, values: h }) => {
                        if (!this.duration) {
                            let w = dm
                                , b = 3;
                            o === "quaternion" && (w = pm,
                                b = 4),
                                w.fromArray(h, 0),
                                b === 4 ? n[o].slerp(w, r) : n[o].lerp(w, r);
                            return
                        }
                        let c = Math.max(1, l.findIndex(w => w > s)) - 1
                            , u = c + 1
                            , d = (s - l[c]) / (l[u] - l[c]);
                        a === "STEP" && (d = 0);
                        let f = dm
                            , m = Ub
                            , p = jb
                            , v = qb
                            , g = 3;
                        o === "quaternion" && (f = pm,
                            m = Hb,
                            p = Wb,
                            v = $b,
                            g = 4),
                            a === "CUBICSPLINE" ? (f.fromArray(h, c * g * 3 + g * 1),
                                m.fromArray(h, c * g * 3 + g * 2),
                                p.fromArray(h, u * g * 3 + g * 0),
                                v.fromArray(h, u * g * 3 + g * 1),
                                f = this.cubicSplineInterpolate(d, f, m, p, v),
                                g === 4 && f.normalize()) : (f.fromArray(h, c * g),
                                    v.fromArray(h, u * g),
                                    g === 4 ? f.slerp(v, d) : f.lerp(v, d)),
                            g === 4 ? n[o].slerp(f, r) : n[o].lerp(f, r)
                    }
                    )
                }
                cubicSplineInterpolate(t, e, r, s, n) {
                    let o = t * t
                        , a = o * t
                        , l = 3 * o - 2 * a
                        , h = a - o
                        , c = 1 - l
                        , u = h - o + t;
                    for (let d = 0; d < e.length; d++)
                        e[d] = c * e[d] + u * (1 - t) * r[d] + l * n[d] + h * t * s[d];
                    return e
                }
            }
    }
    );
    var fm, Gb, yr, jl = z(() => {
        Vt();
        me();
        Be();
        fm = new X,
            Gb = new X,
            yr = class extends q {
                constructor(t, { skeleton: e, geometry: r, program: s, mode: n = t.TRIANGLES } = {}) {
                    super(t, {
                        geometry: r,
                        program: s,
                        mode: n
                    }),
                        this.skeleton = e,
                        this.program = s,
                        this.createBoneTexture()
                }
                createBoneTexture() {
                    if (!this.skeleton.joints.length)
                        return;
                    let t = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
                    this.boneMatrices = new Float32Array(t * t * 4),
                        this.boneTextureSize = t,
                        this.boneTexture = new ht(this.gl, {
                            image: this.boneMatrices,
                            generateMipmaps: !1,
                            type: this.gl.FLOAT,
                            internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA32F : this.gl.RGBA,
                            minFilter: this.gl.NEAREST,
                            magFilter: this.gl.NEAREST,
                            flipY: !1,
                            width: t
                        })
                }
                updateUniforms() {
                    this.skeleton.joints.forEach((t, e) => {
                        fm.multiply(t.worldMatrix, t.bindInverse),
                            this.boneMatrices.set(fm, e * 16)
                    }
                    ),
                        this.boneTexture.needsUpdate = !0,
                        this.program.uniforms.boneTexture.value = this.boneTexture,
                        this.program.uniforms.boneTextureSize.value = this.boneTextureSize
                }
                draw({ camera: t } = {}) {
                    this.program.uniforms.boneTexture || Object.assign(this.program.uniforms, {
                        boneTexture: {
                            value: this.boneTexture
                        },
                        boneTextureSize: {
                            value: this.boneTextureSize
                        }
                    }),
                        this.updateUniforms();
                    let e = this.worldMatrix;
                    this.worldMatrix = Gb,
                        super.draw({
                            camera: t
                        }),
                        this.worldMatrix = e
                }
            }
    }
    );
    var xr, ql = z(() => {
        Fi();
        Vt();
        yl();
        xr = class extends q {
            constructor(...t) {
                super(...t),
                    this.frustumCulled = !1,
                    this.isInstancedMesh = !0
            }
            addFrustumCull() {
                this.instanceTransforms = null,
                    this.instanceLightmapScaleOffset = null,
                    this.totalInstanceCount = 0,
                    this.frustumCullFunction = null,
                    this.instanceRenderList = null,
                    this.geometry.attributes.instanceMatrix || console.error(`mesh ${this.name ? `"${this.name}" ` : ""}missing instanceMatrix attribute; unable to frustum cull`);
                let t = this.geometry.attributes.instanceMatrix.data;
                this.instanceTransforms = [];
                for (let e = 0, r = 0; e < t.length; e += 16,
                    r++) {
                    let s = new bt;
                    s.index = r,
                        s.matrix.fromArray(t, e),
                        s.decompose(),
                        this.instanceTransforms.push(s),
                        s.setParent(this.parent)
                }
                if (this.totalInstanceCount = this.instanceTransforms.length,
                    this.geometry.attributes.lightmapScaleOffset) {
                    let e = this.geometry.attributes.lightmapScaleOffset.data;
                    for (let r = 0, s = 0; r < e.length; r += 4,
                        s++)
                        this.instanceTransforms[s].lightmapData = new pr().fromArray(e, r)
                }
                this.frustumCullFunction = ({ camera: e }) => {
                    this.instanceRenderList = [],
                        this.instanceTransforms.forEach(r => {
                            e.frustumIntersectsMesh(this, r.worldMatrix) && this.instanceRenderList.push(r)
                        }
                        ),
                        this.instanceRenderList.forEach((r, s) => {
                            r.matrix.toArray(this.geometry.attributes.instanceMatrix.data, s * 16),
                                r.lightmapData && (r.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, s * 4),
                                    this.geometry.attributes.lightmapScaleOffset.needsUpdate = !0)
                        }
                        ),
                        this.geometry.instancedCount = this.instanceRenderList.length,
                        this.geometry.attributes.instanceMatrix.needsUpdate = !0
                }
                    ,
                    this.onBeforeRender(this.frustumCullFunction)
            }
            removeFrustumCull() {
                this.offBeforeRender(this.frustumCullFunction),
                    this.geometry.instancedCount = this.totalInstanceCount,
                    this.instanceTransforms.forEach((t, e) => {
                        t.matrix.toArray(this.geometry.attributes.instanceMatrix.data, e * 16),
                            t.lightmapData && (t.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, e * 4),
                                this.geometry.attributes.lightmapScaleOffset.needsUpdate = !0)
                    }
                    ),
                    this.geometry.attributes.instanceMatrix.needsUpdate = !0
            }
        }
    }
    );
    var Yb, Xb, Kb, Qb, Xn, mm = z(() => {
        kt();
        Fi();
        Be();
        Vt();
        Pn();
        Ul();
        jl();
        me();
        tt();
        Vl();
        ql();
        Yb = {
            5121: Uint8Array,
            5122: Int16Array,
            5123: Uint16Array,
            5125: Uint32Array,
            5126: Float32Array,
            "image/jpeg": Uint8Array,
            "image/png": Uint8Array
        },
            Xb = {
                SCALAR: 1,
                VEC2: 2,
                VEC3: 3,
                VEC4: 4,
                MAT2: 4,
                MAT3: 9,
                MAT4: 16
            },
            Kb = {
                POSITION: "position",
                NORMAL: "normal",
                TANGENT: "tangent",
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv2",
                COLOR_0: "color",
                WEIGHTS_0: "skinWeight",
                JOINTS_0: "skinIndex"
            },
            Qb = {
                translation: "position",
                rotation: "quaternion",
                scale: "scale"
            },
            Xn = class {
                static setBasisManager(t) {
                    this.basisManager = t
                }
                static load(t, e) {
                    return se(this, null, function* () {
                        let r = e.split("/").slice(0, -1).join("/") + "/"
                            , s = yield this.parseDesc(e);
                        return this.parse(t, s, r)
                    })
                }
                static parse(t, e, r) {
                    return se(this, null, function* () {
                        var g;
                        (e.asset === void 0 || e.asset.version[0] < 2) && console.warn("Only GLTF >=2.0 supported. Attempting to parse."),
                            (g = e.extensionsRequired) != null && g.includes("KHR_texture_basisu") && !this.basisManager && console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");
                        let s = yield this.loadBuffers(e, r);
                        t.renderer.bindVertexArray(null);
                        let n = this.parseBufferViews(t, e, s)
                            , o = yield this.parseImages(t, e, r, n)
                            , a = this.parseTextures(t, e, o)
                            , l = this.parseMaterials(t, e, a)
                            , h = this.parseSkins(t, e, n)
                            , c = this.parseMeshes(t, e, n, l, h)
                            , [u, d] = this.parseNodes(t, e, c, h, o);
                        this.populateSkins(h, u);
                        let f = this.parseAnimations(t, e, u, n)
                            , m = this.parseScenes(e, u)
                            , p = m[e.scene]
                            , v = this.parseLights(t, e, u, m);
                        for (let w = u.length; w >= 0; w--)
                            u[w] || u.splice(w, 1);
                        return {
                            json: e,
                            buffers: s,
                            bufferViews: n,
                            cameras: d,
                            images: o,
                            textures: a,
                            materials: l,
                            meshes: c,
                            nodes: u,
                            lights: v,
                            animations: f,
                            scenes: m,
                            scene: p
                        }
                    })
                }
                static parseDesc(t) {
                    return t.match(/\.glb/) ? fetch(t).then(e => e.arrayBuffer()).then(e => this.unpackGLB(e)) : fetch(t).then(e => e.json())
                }
                static unpackGLB(t) {
                    let e = new Uint32Array(t, 0, 3);
                    if (e[0] !== 1179937895)
                        throw new Error("Invalid glTF asset.");
                    if (e[1] !== 2)
                        throw new Error(`Unsupported glTF binary version, "${e[1]}".`);
                    let r = new Uint32Array(t, 12, 2)
                        , s = 20
                        , n = r[0];
                    if (r[1] !== 1313821514)
                        throw new Error("Unexpected GLB layout.");
                    let o = new TextDecoder().decode(t.slice(s, s + n))
                        , a = JSON.parse(o);
                    if (s + n === t.byteLength)
                        return a;
                    let l = new Uint32Array(t, s + n, 2);
                    if (l[1] !== 5130562)
                        throw new Error("Unexpected GLB layout.");
                    let h = s + n + 8
                        , c = l[0]
                        , u = t.slice(h, h + c);
                    return a.buffers[0].binary = u,
                        a
                }
                static resolveURI(t, e) {
                    return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
                        /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
                }
                static loadBuffers(t, e) {
                    return t.buffers ? Promise.all(t.buffers.map(r => {
                        if (r.binary)
                            return r.binary;
                        let s = this.resolveURI(r.uri, e);
                        return fetch(s).then(n => n.arrayBuffer())
                    }
                    )) : null
                }
                static parseBufferViews(t, e, r) {
                    if (!e.bufferViews)
                        return null;
                    let s = e.bufferViews.map(n => Object.assign({}, n));
                    return e.meshes && e.meshes.forEach(({ primitives: n }) => {
                        n.forEach(({ attributes: o, indices: a }) => {
                            for (let l in o)
                                s[e.accessors[o[l]].bufferView].isAttribute = !0;
                            a !== void 0 && (s[e.accessors[a].bufferView].isAttribute = !0,
                                s[e.accessors[a].bufferView].target = t.ELEMENT_ARRAY_BUFFER)
                        }
                        )
                    }
                    ),
                        e.accessors.forEach(({ bufferView: n, componentType: o }) => {
                            s[n].componentType = o
                        }
                        ),
                        e.images && e.images.forEach(({ uri: n, bufferView: o, mimeType: a }) => {
                            o !== void 0 && (s[o].mimeType = a)
                        }
                        ),
                        s.forEach(({ buffer: n, byteOffset: o = 0, byteLength: a, byteStride: l, target: h = t.ARRAY_BUFFER, name: c, extensions: u, extras: d, componentType: f, mimeType: m, isAttribute: p }, v) => {
                            if (s[v].data = r[n].slice(o, o + a),
                                !p)
                                return;
                            let g = t.createBuffer();
                            t.bindBuffer(h, g),
                                t.renderer.state.boundBuffer = g,
                                t.bufferData(h, s[v].data, t.STATIC_DRAW),
                                s[v].buffer = g
                        }
                        ),
                        s
                }
                static parseImages(t, e, r, s) {
                    return e.images ? Promise.all(e.images.map(h => se(this, [h], function* ({ uri: n, bufferView: o, mimeType: a, name: l }) {
                        if (a === "image/ktx2") {
                            let { data: u } = s[o];
                            return yield this.basisManager.parseTexture(u)
                        }
                        let c = new Image;
                        if (c.name = l,
                            n)
                            c.src = this.resolveURI(n, r);
                        else if (o !== void 0) {
                            let { data: u } = s[o]
                                , d = new Blob([u], {
                                    type: a
                                });
                            c.src = URL.createObjectURL(d)
                        }
                        return c.ready = new Promise(u => {
                            c.onload = () => u()
                        }
                        ),
                            c
                    }))) : null
                }
                static parseTextures(t, e, r) {
                    return e.textures ? e.textures.map(s => this.createTexture(t, e, r, s)) : null
                }
                static createTexture(t, e, r, { sampler: s, source: n, name: o, extensions: a, extras: l }) {
                    n === void 0 && a && a.KHR_texture_basisu && (n = a.KHR_texture_basisu.source);
                    let h = r[n];
                    if (h.texture)
                        return h.texture;
                    let c = {
                        flipY: !1,
                        wrapS: t.REPEAT,
                        wrapT: t.REPEAT
                    }
                        , u = s !== void 0 ? e.samplers[s] : null;
                    if (u && ["magFilter", "minFilter", "wrapS", "wrapT"].forEach(f => {
                        u[f] && (c[f] = u[f])
                    }
                    ),
                        h.isBasis) {
                        c.image = h,
                            c.internalFormat = h.internalFormat,
                            h.isCompressedTexture && (c.generateMipmaps = !1,
                                h.length > 1 && (this.minFilter = t.NEAREST_MIPMAP_LINEAR));
                        let f = new ht(t, c);
                        return f.name = o,
                            h.texture = f,
                            f
                    }
                    let d = new ht(t, c);
                    return d.name = o,
                        h.texture = d,
                        h.ready.then(() => {
                            d.image = h
                        }
                        ),
                        d
                }
                static parseMaterials(t, e, r) {
                    return e.materials ? e.materials.map(({ name: s, extensions: n, extras: o, pbrMetallicRoughness: a = {}, normalTexture: l, occlusionTexture: h, emissiveTexture: c, emissiveFactor: u = [0, 0, 0], alphaMode: d = "OPAQUE", alphaCutoff: f = .5, doubleSided: m = !1 }) => {
                        let { baseColorFactor: p = [1, 1, 1, 1], baseColorTexture: v, metallicFactor: g = 1, roughnessFactor: w = 1, metallicRoughnessTexture: b } = a;
                        return v && (v.texture = r[v.index]),
                            l && (l.texture = r[l.index]),
                            b && (b.texture = r[b.index]),
                            h && (h.texture = r[h.index]),
                            c && (c.texture = r[c.index]),
                        {
                            name: s,
                            extensions: n,
                            extras: o,
                            baseColorFactor: p,
                            baseColorTexture: v,
                            metallicFactor: g,
                            roughnessFactor: w,
                            metallicRoughnessTexture: b,
                            normalTexture: l,
                            occlusionTexture: h,
                            emissiveTexture: c,
                            emissiveFactor: u,
                            alphaMode: d,
                            alphaCutoff: f,
                            doubleSided: m
                        }
                    }
                    ) : null
                }
                static parseSkins(t, e, r) {
                    return e.skins ? e.skins.map(({ inverseBindMatrices: s, skeleton: n, joints: o }) => ({
                        inverseBindMatrices: this.parseAccessor(s, e, r),
                        skeleton: n,
                        joints: o
                    })) : null
                }
                static parseMeshes(t, e, r, s, n) {
                    return e.meshes ? e.meshes.map(({ primitives: o, weights: a, name: l, extensions: h, extras: c = {} }, u) => {
                        let d = 0
                            , f = []
                            , m = !1;
                        return e.nodes && e.nodes.forEach(({ mesh: v, skin: g, extras: w }) => {
                            v === u && (d++,
                                g !== void 0 && f.push(g),
                                w && w.lightmap_scale_offset && (m = !0))
                        }
                        ),
                            !!f.length ? (o = f.map(v => this.parsePrimitives(t, o, e, r, s, 1, m).map(({ geometry: g, program: w, mode: b }) => {
                                let x = new yr(t, {
                                    skeleton: n[v],
                                    geometry: g,
                                    program: w,
                                    mode: b
                                });
                                return x.name = l,
                                    x.extras = c,
                                    h && (x.extensions = h),
                                    x.frustumCulled = !1,
                                    x
                            }
                            )),
                                o.instanceCount = 0,
                                o.numInstances = d) : o = this.parsePrimitives(t, o, e, r, s, d, m).map(({ geometry: v, program: g, mode: w }) => {
                                    let b = v.attributes.instanceMatrix ? xr : q
                                        , x = new b(t, {
                                            geometry: v,
                                            program: g,
                                            mode: w
                                        });
                                    return x.name = l,
                                        x.extras = c,
                                        h && (x.extensions = h),
                                        x.numInstances = d,
                                        x
                                }
                                ),
                        {
                            primitives: o,
                            weights: a,
                            name: l
                        }
                    }
                    ) : null
                }
                static parsePrimitives(t, e, r, s, n, o, a) {
                    return e.map(({ attributes: l, indices: h, material: c, mode: u = 4, targets: d, extensions: f, extras: m }) => {
                        let p = new gr(t);
                        c !== void 0 && (p.gltfMaterial = n[c]);
                        let v = new W(t);
                        m && (v.extras = m),
                            f && (v.extensions = f);
                        for (let g in l)
                            v.addAttribute(Kb[g], this.parseAccessor(l[g], r, s));
                        return h !== void 0 && v.addAttribute("index", this.parseAccessor(h, r, s)),
                            o > 1 && v.addAttribute("instanceMatrix", {
                                instanced: 1,
                                size: 16,
                                data: new Float32Array(o * 16)
                            }),
                            a && v.addAttribute("lightmapScaleOffset", {
                                instanced: 1,
                                size: 4,
                                data: new Float32Array(o * 4)
                            }),
                        {
                            geometry: v,
                            program: p,
                            mode: u
                        }
                    }
                    )
                }
                static parseAccessor(t, e, r) {
                    let { bufferView: s, byteOffset: n = 0, componentType: o, normalized: a = !1, count: l, type: h, min: c, max: u, sparse: d } = e.accessors[t], { data: f, buffer: m, byteOffset: p = 0, byteStride: v = 0, target: g } = r[s], w = Xb[h], b = Yb[o], x = b.BYTES_PER_ELEMENT, _ = v / x, y = !!v && _ !== w, P;
                    if (y) {
                        let E = new b(f, n);
                        P = new b(l * w);
                        for (let C = 0; C < l; C++) {
                            let M = _ * C
                                , A = M + w;
                            P.set(E.slice(M, A), C * w)
                        }
                    } else
                        P = new b(f, n, l * w);
                    return {
                        data: P,
                        size: w,
                        type: o,
                        normalized: a,
                        buffer: m,
                        stride: v,
                        offset: n,
                        count: l,
                        min: c,
                        max: u
                    }
                }
                static parseNodes(t, e, r, s, n) {
                    if (!e.nodes)
                        return null;
                    let o = []
                        , a = e.nodes.map(({ camera: l, children: h, skin: c, matrix: u, mesh: d, rotation: f, scale: m, translation: p, weights: v, name: g, extensions: w, extras: b }) => {
                            let x = l !== void 0
                                , _ = x ? new ve(t) : new bt;
                            if (x) {
                                let M = e.cameras[l];
                                if (M.type === "perspective") {
                                    let { yfov: A, znear: T, zfar: O } = M.perspective;
                                    _.perspective({
                                        fov: A * (180 / Math.PI),
                                        near: T,
                                        far: O
                                    })
                                } else {
                                    let { xmag: A, ymag: T, znear: O, zfar: k } = M.orthographic;
                                    _.orthographic({
                                        near: O,
                                        far: k,
                                        left: -A,
                                        right: A,
                                        top: -T,
                                        bottom: T
                                    })
                                }
                                o.push(_)
                            }
                            g && (_.name = g),
                                b && (_.extras = b),
                                w && (_.extensions = w),
                                b && b.lightmapTexture !== void 0 && (b.lightmapTexture.texture = this.createTexture(t, e, n, {
                                    source: b.lightmapTexture.index
                                })),
                                u ? (_.matrix.copy(u),
                                    _.decompose()) : (f && _.quaternion.copy(f),
                                        m && _.scale.copy(m),
                                        p && _.position.copy(p),
                                        _.updateMatrix());
                            let y = !1
                                , P = !0
                                , E = !1;
                            if (d !== void 0 && (c !== void 0 ? (r[d].primitives[r[d].primitives.instanceCount].forEach(M => {
                                b && Object.assign(M.extras, b),
                                    M.setParent(_)
                            }
                            ),
                                r[d].primitives.instanceCount++,
                                r[d].primitives.instanceCount === r[d].primitives.numInstances && (delete r[d].primitives.numInstances,
                                    delete r[d].primitives.instanceCount)) : r[d].primitives.forEach(M => {
                                        b && Object.assign(M.extras, b),
                                            M.geometry.isInstanced && (y = !0,
                                                M.instanceCount ? P = !1 : M.instanceCount = 0,
                                                M.geometry.attributes.instanceMatrix && (E = !0,
                                                    _.matrix.toArray(M.geometry.attributes.instanceMatrix.data, M.instanceCount * 16)),
                                                M.geometry.attributes.lightmapScaleOffset && M.geometry.attributes.lightmapScaleOffset.data.set(b.lightmap_scale_offset, M.instanceCount * 4),
                                                M.instanceCount++,
                                                M.instanceCount === M.numInstances && (delete M.numInstances,
                                                    delete M.instanceCount,
                                                    M.geometry.attributes.instanceMatrix && (M.geometry.attributes.instanceMatrix.needsUpdate = !0),
                                                    M.geometry.attributes.lightmapScaleOffset && (M.geometry.attributes.lightmapScaleOffset.needsUpdate = !0))),
                                            y ? P && M.setParent(_) : M.setParent(_)
                                    }
                                    )),
                                E) {
                                if (!P)
                                    return null;
                                _.matrix.identity(),
                                    _.decompose()
                            }
                            return _
                        }
                        );
                    return e.nodes.forEach(({ children: l = [] }, h) => {
                        l.forEach(c => {
                            a[c] && a[c].setParent(a[h])
                        }
                        )
                    }
                    ),
                        r.forEach(({ primitives: l }, h) => {
                            l.forEach((c, u) => {
                                c.isInstancedMesh && c.addFrustumCull()
                            }
                            )
                        }
                        ),
                        [a, o]
                }
                static populateSkins(t, e) {
                    t && t.forEach(r => {
                        r.joints = r.joints.map((s, n) => {
                            let o = e[s];
                            return o.skin = r,
                                o.bindInverse = new X(...r.inverseBindMatrices.data.slice(n * 16, (n + 1) * 16)),
                                o
                        }
                        ),
                            r.skeleton && (r.skeleton = e[r.skeleton])
                    }
                    )
                }
                static parseAnimations(t, e, r, s) {
                    return e.animations ? e.animations.map(({ channels: n, samplers: o, name: a }, l) => {
                        let h = n.map(({ sampler: c, target: u }) => {
                            let { input: d, interpolation: f = "LINEAR", output: m } = o[c]
                                , { node: p, path: v } = u
                                , g = r[p]
                                , w = Qb[v]
                                , b = this.parseAccessor(d, e, s).data
                                , x = this.parseAccessor(m, e, s).data;
                            return g.animations || (g.animations = []),
                                g.animations.includes(l) || g.animations.push(l),
                            {
                                node: g,
                                transform: w,
                                interpolation: f,
                                times: b,
                                values: x
                            }
                        }
                        );
                        return {
                            name: a,
                            animation: new wr(h)
                        }
                    }
                    ) : null
                }
                static parseScenes(t, e) {
                    return t.scenes ? t.scenes.map(({ nodes: r = [], name: s, extensions: n, extras: o }) => {
                        let a = r.reduce((l, h) => (e[h] && l.push(e[h]),
                            l), []);
                        return a.extras = o,
                            a
                    }
                    ) : null
                }
                static parseLights(t, e, r, s) {
                    var a, l;
                    let n = {
                        directional: [],
                        point: [],
                        spot: []
                    };
                    s.forEach(h => h.forEach(c => c.updateMatrixWorld()));
                    let o = ((l = (a = e.extensions) == null ? void 0 : a.KHR_lights_punctual) == null ? void 0 : l.lights) || [];
                    return r.forEach(h => {
                        var f;
                        if (!((f = h == null ? void 0 : h.extensions) != null && f.KHR_lights_punctual))
                            return;
                        let c = h.extensions.KHR_lights_punctual.light
                            , u = o[c]
                            , d = {
                                name: u.name || "",
                                color: {
                                    value: new S().set(u.color || 1)
                                }
                            };
                        switch (u.intensity !== void 0 && d.color.value.multiply(u.intensity),
                        u.type) {
                            case "directional":
                                d.direction = {
                                    value: new S(0, 0, 1).transformDirection(h.worldMatrix)
                                };
                                break;
                            case "point":
                                d.position = {
                                    value: new S().applyMatrix4(h.worldMatrix)
                                },
                                    d.distance = {
                                        value: u.range
                                    },
                                    d.decay = {
                                        value: 2
                                    };
                                break;
                            case "spot":
                                Object.assign(d, u);
                                break
                        }
                        n[u.type].push(d)
                    }
                    ),
                        n
                }
            }
    }
    );
    var Hl, Wl, Kn, vm = z(() => {
        Wl = 0,
            Kn = class {
                constructor(t, e) {
                    Hl || (Hl = this.getSupportedFormat(e)),
                        this.onMessage = this.onMessage.bind(this),
                        this.queue = new Map,
                        this.initWorker(t)
                }
                getSupportedFormat(t = document.createElement("canvas").getContext("webgl")) {
                    return t.getExtension("WEBGL_compressed_texture_astc") ? "astc" : t.getExtension("EXT_texture_compression_bptc") ? "bptc" : t.getExtension("WEBGL_compressed_texture_s3tc") ? "s3tc" : t.getExtension("WEBGL_compressed_texture_etc1") ? "etc1" : t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc") ? "pvrtc" : "none"
                }
                initWorker(t) {
                    this.worker = new Worker(t),
                        this.worker.onmessage = this.onMessage
                }
                onMessage({ data: t }) {
                    let { id: e, error: r, image: s } = t;
                    if (r) {
                        console.log(r, e);
                        return
                    }
                    let n = this.queue.get(e);
                    this.queue.delete(e),
                        s.isBasis = !0,
                        n(s)
                }
                parseTexture(t) {
                    Wl++,
                        this.worker.postMessage({
                            id: Wl,
                            buffer: t,
                            supportedFormat: Hl
                        });
                    let e, r = new Promise(s => e = s);
                    return this.queue.set(Wl, e),
                        r
                }
            }
    }
    );
    function Zb(i, t, e, r) {
        let s = [e[i], e[i + 1], e[i + 2], e[t], e[t + 1], e[t + 2]].join("#")
            , n = [e[t], e[t + 1], e[t + 2], e[i], e[i + 1], e[i + 2]].join("#")
            , o = r.size;
        return r.add(s),
            r.add(n),
            r.size - o === 2
    }
    var Qn, Jb, tw, gm = z(() => {
        Vt();
        Qt();
        kt();
        Mn();
        Qn = class extends q {
            constructor(t, n = {}) {
                var o = n
                    , { geometry: e, wireColor: r = new oi(0, .75, .5) } = o
                    , s = be(o, ["geometry", "wireColor"]);
                let a = new Y(t, {
                    vertex: Jb,
                    fragment: tw,
                    uniforms: {
                        wireColor: {
                            value: r
                        }
                    }
                })
                    , l = e.attributes.position.data
                    , h = []
                    , c = new Set;
                function u(m) {
                    for (let p = 0; p < m.length; p += 2)
                        Zb(m[p] * 3, m[p + 1] * 3, l, c) && h.push(m[p], m[p + 1])
                }
                if (e.attributes.index) {
                    let m = e.attributes.index.data;
                    for (let p = 0; p < m.length; p += 3)
                        u([m[p], m[p + 1], m[p + 1], m[p + 2], m[p + 2], m[p]])
                } else {
                    let m = Math.floor(l.length / 3);
                    for (let p = 0; p < m; p += 3)
                        u([p, p + 1, p + 1, p + 2, p + 2, p])
                }
                let d = h.length > 65536 ? new Uint32Array(h) : new Uint16Array(h)
                    , f = new W(t, {
                        position: Ct({}, e.attributes.position),
                        index: {
                            data: d
                        }
                    });
                super(t, re(Ct({}, s), {
                    mode: t.LINES,
                    geometry: f,
                    program: a
                }))
            }
        }
            ;
        Jb = `
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
            tw = `
precision highp float;
uniform vec3 wireColor;

void main() {    
    gl_FragColor = vec4(wireColor, 1.0);
}
`
    }
    );
    var Zn, ew, iw, _m = z(() => {
        Vt();
        Qt();
        kt();
        tt();
        Zn = class extends q {
            constructor(t, l = {}) {
                var h = l
                    , { size: e = 1, symmetric: r = !1, xColor: s = new S(.96, .21, .32), yColor: n = new S(.44, .64, .11), zColor: o = new S(.18, .52, .89) } = h
                    , a = be(h, ["size", "symmetric", "xColor", "yColor", "zColor"]);
                let c = r ? -e : 0
                    , u = e
                    , d = new Float32Array([c, 0, 0, u, 0, 0, 0, c, 0, 0, u, 0, 0, 0, c, 0, 0, u])
                    , f = new Float32Array([...s, ...s, ...n, ...n, ...o, ...o])
                    , m = new W(t, {
                        position: {
                            size: 3,
                            data: d
                        },
                        color: {
                            size: 3,
                            data: f
                        }
                    })
                    , p = new Y(t, {
                        vertex: ew,
                        fragment: iw
                    });
                super(t, re(Ct({}, a), {
                    mode: t.LINES,
                    geometry: m,
                    program: p
                }))
            }
        }
            ,
            ew = `
attribute vec3 position;
attribute vec3 color;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vColor;

void main() {    
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
            iw = `
precision highp float;
varying vec3 vColor;

void main() {    
    gl_FragColor = vec4(vColor, 1.0);
}
`
    }
    );
    var Jn, rw, sw, bm = z(() => {
        Vt();
        Qt();
        kt();
        tt();
        Jn = class extends q {
            constructor(t, o = {}) {
                var a = o
                    , { size: e = 10, divisions: r = 10, color: s = new S(.75, .75, .75) } = a
                    , n = be(a, ["size", "divisions", "color"]);
                let l = (e + 1) * 2 * 2
                    , h = new Float32Array(l * 3)
                    , c = e / 2;
                for (let f = 0; f <= r; f++) {
                    let p = f / r * e - c;
                    h.set([p, 0, -c, p, 0, c], f * 12),
                        h.set([-c, 0, p, c, 0, p], f * 12 + 6)
                }
                let u = new W(t, {
                    position: {
                        size: 3,
                        data: h
                    }
                })
                    , d = new Y(t, {
                        vertex: rw,
                        fragment: sw,
                        uniforms: {
                            color: {
                                value: s
                            }
                        }
                    });
                super(t, re(Ct({}, n), {
                    mode: t.LINES,
                    geometry: u,
                    program: d
                }))
            }
        }
            ,
            rw = `
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
            sw = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`
    }
    );
    var to, nw, ow, wm = z(() => {
        Vt();
        Qt();
        kt();
        tt();
        Qr();
        to = class extends q {
            constructor(t, n = {}) {
                var o = n
                    , { size: e = .1, color: r = new S(.86, .16, .86) } = o
                    , s = be(o, ["size", "color"]);
                let a = t.gl
                    , l = t.geometry.attributes.normal.count
                    , h = new Float32Array(l * 2 * 3)
                    , c = new Float32Array(l * 2 * 3)
                    , u = new Float32Array(l * 2)
                    , d = t.geometry.attributes.normal.data
                    , f = t.geometry.attributes.position.data
                    , m = new Float32Array([0, e]);
                for (let g = 0; g < l; g++) {
                    let w = g * 6
                        , b = g * 3
                        , x = f.subarray(b, b + 3);
                    h.set(x, w),
                        h.set(x, w + 3);
                    let _ = d.subarray(b, b + 3);
                    c.set(_, w),
                        c.set(_, w + 3),
                        u.set(m, g * 2)
                }
                let p = new W(a, {
                    position: {
                        size: 3,
                        data: h
                    },
                    normal: {
                        size: 3,
                        data: c
                    },
                    size: {
                        size: 1,
                        data: u
                    }
                })
                    , v = new Y(a, {
                        vertex: nw,
                        fragment: ow,
                        uniforms: {
                            color: {
                                value: r
                            },
                            worldNormalMatrix: {
                                value: new Se
                            },
                            objectWorldMatrix: {
                                value: t.worldMatrix
                            }
                        }
                    });
                super(a, re(Ct({}, s), {
                    mode: a.LINES,
                    geometry: p,
                    program: v
                })),
                    this.object = t
            }
            draw(t) {
                this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix),
                    super.draw(t)
            }
        }
            ,
            nw = `
attribute vec3 position;
attribute vec3 normal;
attribute float size;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 objectWorldMatrix;
uniform mat3 worldNormalMatrix;

void main() {
    vec3 n = normalize(worldNormalMatrix * normal) * size;
    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);
}
`,
            ow = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`
    }
    );
    var rs, eo, ss, $l, Gl, io, aw, lw, ym = z(() => {
        Vt();
        Qt();
        kt();
        tt();
        Qr();
        rs = new S,
            eo = new S,
            ss = new S,
            $l = new S,
            Gl = new S,
            io = class extends q {
                constructor(t, n = {}) {
                    var o = n
                        , { size: e = .1, color: r = new S(.15, .86, .86) } = o
                        , s = be(o, ["size", "color"]);
                    let a = t.gl
                        , l = t.geometry.attributes.position.data
                        , h = new Float32Array([0, e])
                        , c = t.geometry.attributes.index
                        , u = c ? b => c.data[b] : b => b
                        , d = c ? c.data.length : Math.floor(l.length / 3)
                        , f = Math.floor(d / 3)
                        , m = new Float32Array(f * 2 * 3)
                        , p = new Float32Array(f * 2 * 3)
                        , v = new Float32Array(f * 2);
                    for (let b = 0; b < d; b += 3) {
                        rs.fromArray(l, u(b + 0) * 3),
                            eo.fromArray(l, u(b + 1) * 3),
                            ss.fromArray(l, u(b + 2) * 3),
                            $l.add(rs, eo).add(ss).multiply(1 / 3),
                            rs.sub(rs, eo),
                            ss.sub(ss, eo),
                            Gl.cross(ss, rs).normalize();
                        let x = b * 2;
                        m.set($l, x),
                            m.set($l, x + 3),
                            p.set(Gl, x),
                            p.set(Gl, x + 3),
                            v.set(h, b / 3 * 2)
                    }
                    let g = new W(a, {
                        position: {
                            size: 3,
                            data: m
                        },
                        normal: {
                            size: 3,
                            data: p
                        },
                        size: {
                            size: 1,
                            data: v
                        }
                    })
                        , w = new Y(a, {
                            vertex: aw,
                            fragment: lw,
                            uniforms: {
                                color: {
                                    value: r
                                },
                                worldNormalMatrix: {
                                    value: new Se
                                },
                                objectWorldMatrix: {
                                    value: t.worldMatrix
                                }
                            }
                        });
                    super(a, re(Ct({}, s), {
                        mode: a.LINES,
                        geometry: g,
                        program: w
                    })),
                        this.object = t
                }
                draw(t) {
                    this.program.uniforms.worldNormalMatrix.value.getNormalMatrix(this.object.worldMatrix),
                        super.draw(t)
                }
            }
            ,
            aw = `
attribute vec3 position;
attribute vec3 normal;
attribute float size;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 objectWorldMatrix;
uniform mat3 worldNormalMatrix;

void main() {
    vec3 n = normalize(worldNormalMatrix * normal) * size;
    vec3 p = (objectWorldMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * viewMatrix * vec4(p + n, 1.0);
}
`,
            lw = `
precision highp float;
uniform vec3 color;

void main() {    
    gl_FragColor = vec4(color, 1.0);
}
`
    }
    );
    var xm = {};
    Do(xm, {
        Animation: () => vr,
        AxesHelper: () => Zn,
        BasisManager: () => Kn,
        Box: () => Tn,
        Camera: () => ve,
        Color: () => oi,
        Curve: () => Di,
        Cylinder: () => fr,
        Euler: () => ur,
        FaceNormalsHelper: () => io,
        Flowmap: () => qn,
        GLTFAnimation: () => wr,
        GLTFLoader: () => Xn,
        GLTFSkin: () => yr,
        GPGPU: () => Hn,
        Geometry: () => W,
        GridHelper: () => Jn,
        InstancedMesh: () => xr,
        KTXTexture: () => br,
        Mat3: () => Se,
        Mat4: () => X,
        Mesh: () => q,
        NormalProgram: () => gr,
        Orbit: () => Af,
        Path: () => Vn,
        Plane: () => Zt,
        Polyline: () => Wn,
        Post: () => Un,
        Program: () => Y,
        Quat: () => $t,
        Raycast: () => On,
        RenderTarget: () => Ot,
        Renderer: () => cr,
        Shadow: () => $n,
        Skin: () => jn,
        Sphere: () => An,
        Text: () => sm,
        Texture: () => ht,
        TextureLoader: () => Yn,
        Torus: () => kn,
        Transform: () => bt,
        Triangle: () => Te,
        Tube: () => Bn,
        Vec2: () => et,
        Vec3: () => S,
        Vec4: () => pr,
        VertexNormalsHelper: () => to,
        WireMesh: () => Qn
    });
    var ro = z(() => {
        kt();
        Qt();
        lp();
        Pn();
        Fi();
        Vt();
        Be();
        dr();
        Mn();
        fl();
        Qr();
        me();
        Kr();
        Ii();
        tt();
        yl();
        xl();
        Pf();
        Mf();
        Sf();
        Zr();
        Tf();
        kf();
        Vf();
        jf();
        Kf();
        Qf();
        Zf();
        rm();
        zl();
        nm();
        Vl();
        om();
        am();
        lm();
        hm();
        Bl();
        um();
        mm();
        jl();
        Ul();
        vm();
        gm();
        _m();
        bm();
        wm();
        ym();
        ql()
    }
    );
    function Z(i) {
        return i == null
    }
    function Sc(i) {
        return i !== null && typeof i == "object"
    }
    function ih(i) {
        return i !== null && typeof i == "object"
    }
    function cw(i, t) {
        if (i.length !== t.length)
            return !1;
        for (let e = 0; e < i.length; e++)
            if (i[e] !== t[e])
                return !1;
        return !0
    }
    function qi(i, t) {
        return Array.from(new Set([...Object.keys(i), ...Object.keys(t)])).reduce((r, s) => {
            let n = i[s]
                , o = t[s];
            return ih(n) && ih(o) ? Object.assign(Object.assign({}, r), {
                [s]: qi(n, o)
            }) : Object.assign(Object.assign({}, r), {
                [s]: s in t ? o : n
            })
        }
            , {})
    }
    function Tc(i) {
        return Sc(i) ? "target" in i : !1
    }
    function st(i, t) {
        let e = t == null ? void 0 : t.constraint
            , r = t == null ? void 0 : t.equals;
        return !e && !r ? new sh(i) : new rh(i, t)
    }
    function dw(i) {
        return [new nh(i), (t, e) => {
            i.setRawValue(t, e)
        }
        ]
    }
    function Ac(i) {
        return (t, e) => {
            for (let r = 0; r < i.length; r++) {
                let s = i[r](t, e);
                if (s !== "")
                    return s
            }
            return ""
        }
    }
    function hs(i, t) {
        var e;
        let r = i.substr(t).match(/^\s+/);
        return (e = r && r[0]) !== null && e !== void 0 ? e : ""
    }
    function mw(i, t) {
        let e = i.substr(t, 1);
        return e.match(/^[1-9]$/) ? e : ""
    }
    function cs(i, t) {
        var e;
        let r = i.substr(t).match(/^[0-9]+/);
        return (e = r && r[0]) !== null && e !== void 0 ? e : ""
    }
    function vw(i, t) {
        let e = cs(i, t);
        if (e !== "")
            return e;
        let r = i.substr(t, 1);
        if (t += 1,
            r !== "-" && r !== "+")
            return "";
        let s = cs(i, t);
        return s === "" ? "" : r + s
    }
    function kc(i, t) {
        let e = i.substr(t, 1);
        if (t += 1,
            e.toLowerCase() !== "e")
            return "";
        let r = vw(i, t);
        return r === "" ? "" : e + r
    }
    function Qm(i, t) {
        let e = i.substr(t, 1);
        if (e === "0")
            return e;
        let r = mw(i, t);
        return t += r.length,
            r === "" ? "" : r + cs(i, t)
    }
    function gw(i, t) {
        let e = Qm(i, t);
        if (t += e.length,
            e === "")
            return "";
        let r = i.substr(t, 1);
        if (t += r.length,
            r !== ".")
            return "";
        let s = cs(i, t);
        return t += s.length,
            e + r + s + kc(i, t)
    }
    function _w(i, t) {
        let e = i.substr(t, 1);
        if (t += e.length,
            e !== ".")
            return "";
        let r = cs(i, t);
        return t += r.length,
            r === "" ? "" : e + r + kc(i, t)
    }
    function bw(i, t) {
        let e = Qm(i, t);
        return t += e.length,
            e === "" ? "" : e + kc(i, t)
    }
    function yw(i, t) {
        var e;
        let r = i.substr(t).match(/^[01]+/);
        return (e = r && r[0]) !== null && e !== void 0 ? e : ""
    }
    function xw(i, t) {
        let e = i.substr(t, 2);
        if (t += e.length,
            e.toLowerCase() !== "0b")
            return "";
        let r = yw(i, t);
        return r === "" ? "" : e + r
    }
    function Ew(i, t) {
        var e;
        let r = i.substr(t).match(/^[0-7]+/);
        return (e = r && r[0]) !== null && e !== void 0 ? e : ""
    }
    function Cw(i, t) {
        let e = i.substr(t, 2);
        if (t += e.length,
            e.toLowerCase() !== "0o")
            return "";
        let r = Ew(i, t);
        return r === "" ? "" : e + r
    }
    function Pw(i, t) {
        var e;
        let r = i.substr(t).match(/^[0-9a-f]+/i);
        return (e = r && r[0]) !== null && e !== void 0 ? e : ""
    }
    function Mw(i, t) {
        let e = i.substr(t, 2);
        if (t += e.length,
            e.toLowerCase() !== "0x")
            return "";
        let r = Pw(i, t);
        return r === "" ? "" : e + r
    }
    function Aw(i, t) {
        let e = Tw(i, t);
        return t += e.length,
            e === "" ? null : {
                evaluable: new lh(e),
                cursor: t
            }
    }
    function kw(i, t) {
        let e = i.substr(t, 1);
        if (t += e.length,
            e !== "(")
            return null;
        let r = Jm(i, t);
        if (!r)
            return null;
        t = r.cursor,
            t += hs(i, t).length;
        let s = i.substr(t, 1);
        return t += s.length,
            s !== ")" ? null : {
                evaluable: r.evaluable,
                cursor: t
            }
    }
    function Ow(i, t) {
        var e;
        return (e = Aw(i, t)) !== null && e !== void 0 ? e : kw(i, t)
    }
    function Zm(i, t) {
        let e = Ow(i, t);
        if (e)
            return e;
        let r = i.substr(t, 1);
        if (t += r.length,
            r !== "+" && r !== "-" && r !== "~")
            return null;
        let s = Zm(i, t);
        return s ? (t = s.cursor,
        {
            cursor: t,
            evaluable: new ch(r, s.evaluable)
        }) : null
    }
    function Lw(i, t, e) {
        e += hs(t, e).length;
        let r = i.filter(s => t.startsWith(s, e))[0];
        return r ? (e += r.length,
            e += hs(t, e).length,
        {
            cursor: e,
            operator: r
        }) : null
    }
    function Rw(i, t) {
        return (e, r) => {
            let s = i(e, r);
            if (!s)
                return null;
            r = s.cursor;
            let n = s.evaluable;
            for (; ;) {
                let o = Lw(t, e, r);
                if (!o)
                    break;
                r = o.cursor;
                let a = i(e, r);
                if (!a)
                    return null;
                r = a.cursor,
                    n = new hh(o.operator, n, a.evaluable)
            }
            return n ? {
                cursor: r,
                evaluable: n
            } : null
        }
    }
    function Jm(i, t) {
        return t += hs(i, t).length,
            Fw(i, t)
    }
    function Iw(i) {
        let t = Jm(i, 0);
        return !t || t.cursor + hs(i, t.cursor).length !== i.length ? null : t.evaluable
    }
    function We(i) {
        var t;
        let e = Iw(i);
        return (t = e == null ? void 0 : e.evaluate()) !== null && t !== void 0 ? t : null
    }
    function tv(i) {
        if (typeof i == "number")
            return i;
        if (typeof i == "string") {
            let t = We(i);
            if (!Z(t))
                return t
        }
        return 0
    }
    function zw(i) {
        return String(i)
    }
    function Yt(i) {
        return t => t.toFixed(Math.max(Math.min(i, 20), 0))
    }
    function G(i, t, e, r, s) {
        let n = (i - t) / (e - t);
        return r + n * (s - r)
    }
    function Sm(i) {
        return String(i.toFixed(10)).split(".")[1].replace(/0+$/, "").length
    }
    function wt(i, t, e) {
        return Math.min(Math.max(i, t), e)
    }
    function ev(i, t) {
        return (i % t + t) % t
    }
    function Vw(i, t) {
        return Z(i.step) ? Math.max(Sm(t), 2) : Sm(i.step)
    }
    function iv(i) {
        var t;
        return (t = i.step) !== null && t !== void 0 ? t : 1
    }
    function rv(i, t) {
        var e;
        let r = Math.abs((e = i.step) !== null && e !== void 0 ? e : t);
        return r === 0 ? .1 : Math.pow(10, Math.floor(Math.log10(r)) - 1)
    }
    function sv(i, t) {
        return Z(i.step) ? null : new ah(i.step, t)
    }
    function nv(i) {
        return !Z(i.max) && !Z(i.min) ? new Hi({
            max: i.max,
            min: i.min
        }) : !Z(i.max) || !Z(i.min) ? new oh({
            max: i.max,
            min: i.min
        }) : null
    }
    function ov(i, t) {
        var e, r, s;
        return {
            formatter: (e = i.format) !== null && e !== void 0 ? e : Yt(Vw(i, t)),
            keyScale: (r = i.keyScale) !== null && r !== void 0 ? r : iv(i),
            pointerScale: (s = i.pointerScale) !== null && s !== void 0 ? s : rv(i, t)
        }
    }
    function av(i) {
        return {
            format: i.optional.function,
            keyScale: i.optional.number,
            max: i.optional.number,
            min: i.optional.number,
            pointerScale: i.optional.number,
            step: i.optional.number
        }
    }
    function Oc(i) {
        return {
            constraint: i.constraint,
            textProps: B.fromObject(ov(i.params, i.initialValue))
        }
    }
    function Dw(i) {
        if (!("binding" in i))
            return !1;
        let t = i.binding;
        return Tc(t) && "read" in t && "write" in t
    }
    function Nw(i, t) {
        let r = Object.keys(t).reduce((s, n) => {
            if (s === void 0)
                return;
            let o = t[n]
                , a = o(i[n]);
            return a.succeeded ? Object.assign(Object.assign({}, s), {
                [n]: a.value
            }) : void 0
        }
            , {});
        return r
    }
    function Bw(i, t) {
        return i.reduce((e, r) => {
            if (e === void 0)
                return;
            let s = t(r);
            if (!(!s.succeeded || s.value === void 0))
                return [...e, s.value]
        }
            , [])
    }
    function Uw(i) {
        return i === null ? !1 : typeof i == "object"
    }
    function je(i) {
        return t => e => {
            if (!t && e === void 0)
                return {
                    succeeded: !1,
                    value: void 0
                };
            if (t && e === void 0)
                return {
                    succeeded: !0,
                    value: void 0
                };
            let r = i(e);
            return r !== void 0 ? {
                succeeded: !0,
                value: r
            } : {
                succeeded: !1,
                value: void 0
            }
        }
    }
    function Tm(i) {
        return {
            custom: t => je(t)(i),
            boolean: je(t => typeof t == "boolean" ? t : void 0)(i),
            number: je(t => typeof t == "number" ? t : void 0)(i),
            string: je(t => typeof t == "string" ? t : void 0)(i),
            function: je(t => typeof t == "function" ? t : void 0)(i),
            constant: t => je(e => e === t ? t : void 0)(i),
            raw: je(t => t)(i),
            object: t => je(e => {
                if (Uw(e))
                    return Nw(e, t)
            }
            )(i),
            array: t => je(e => {
                if (Array.isArray(e))
                    return Bw(e, t)
            }
            )(i)
        }
    }
    function ct(i, t) {
        let e = t(mh)
            , r = mh.required.object(e)(i);
        return r.succeeded ? r.value : void 0
    }
    function Jt(i, t, e, r) {
        if (t && !t(i))
            return !1;
        let s = ct(i, e);
        return s ? r(s) : !1
    }
    function te(i, t) {
        var e;
        return qi((e = i == null ? void 0 : i()) !== null && e !== void 0 ? e : {}, t)
    }
    function ji(i) {
        return "value" in i
    }
    function lv(i) {
        if (!Sc(i) || !("binding" in i))
            return !1;
        let t = i.binding;
        return Tc(t)
    }
    function ho(i) {
        i.offsetHeight
    }
    function jw(i, t) {
        let e = i.style.transition;
        i.style.transition = "none",
            t(),
            i.style.transition = e
    }
    function Lc(i) {
        return i.ontouchstart !== void 0
    }
    function qw() {
        return globalThis
    }
    function Hw() {
        return qw().document
    }
    function Ww(i) {
        let t = i.ownerDocument.defaultView;
        return t && "document" in t ? i.getContext("2d", {
            willReadFrequently: !0
        }) : null
    }
    function Co(i, t) {
        let e = i.createElementNS(Ae, "svg");
        return e.innerHTML = $w[t],
            e
    }
    function hv(i, t, e) {
        i.insertBefore(t, i.children[e])
    }
    function Rc(i) {
        i.parentElement && i.parentElement.removeChild(i)
    }
    function cv(i) {
        for (; i.children.length > 0;)
            i.removeChild(i.children[0])
    }
    function Gw(i) {
        for (; i.childNodes.length > 0;)
            i.removeChild(i.childNodes[0])
    }
    function uv(i) {
        return i.relatedTarget ? i.relatedTarget : "explicitOriginalTarget" in i ? i.explicitOriginalTarget : null
    }
    function He(i, t) {
        i.emitter.on("change", e => {
            t(e.rawValue)
        }
        ),
            t(i.rawValue)
    }
    function Oe(i, t, e) {
        He(i.value(t), e)
    }
    function H(i) {
        return (e, r) => [Yw, "-", i, "v", e ? `_${e}` : "", r ? `-${r}` : ""].join("")
    }
    function Xw(i, t) {
        let e = i.createDocumentFragment();
        return t.split(`
`).map(s => i.createTextNode(s)).forEach((s, n) => {
            n > 0 && e.appendChild(i.createElement("br")),
                e.appendChild(s)
        }
        ),
            e
    }
    function Kw() {
        return ["veryfirst", "first", "last", "verylast"]
    }
    function Om(i) {
        let t = Object.assign({}, i);
        return delete t.value,
            t
    }
    function Qw(i) {
        return ji(i) && lv(i.value)
    }
    function Zw(i) {
        return ji(i) && Dw(i.value)
    }
    function dv(i, t) {
        for (; i.length < t;)
            i.push(void 0)
    }
    function Jw(i) {
        let t = [];
        return dv(t, i),
            t
    }
    function t1(i) {
        let t = i.indexOf(void 0);
        return t < 0 ? i : i.slice(0, t)
    }
    function e1(i, t) {
        let e = [...t1(i), t];
        return e.length > i.length ? e.splice(0, e.length - i.length) : dv(e, i.length),
            e
    }
    function i1(i) {
        if (!("binding" in i))
            return !1;
        let t = i.binding;
        return Tc(t) && "read" in t && !("write" in t)
    }
    function r1(i) {
        return ji(i) && i1(i.value)
    }
    function s1(i, t, e) {
        e ? i.classList.add(t) : i.classList.remove(t)
    }
    function Ar(i, t) {
        return e => {
            s1(i, t, e)
        }
    }
    function Fc(i, t) {
        He(i, e => {
            t.textContent = e != null ? e : ""
        }
        )
    }
    function Nt(i) {
        return Object.assign({
            core: kr
        }, i)
    }
    function o1(i, t) {
        return i.addBlade(Object.assign(Object.assign({}, t), {
            view: "button"
        }))
    }
    function a1(i, t) {
        return i.addBlade(Object.assign(Object.assign({}, t), {
            view: "folder"
        }))
    }
    function l1(i, t) {
        return i.addBlade(Object.assign(Object.assign({}, t), {
            view: "tab"
        }))
    }
    function h1(i) {
        return Sc(i) ? "refresh" in i && typeof i.refresh == "function" : !1
    }
    function c1(i, t) {
        if (!lo.isBindable(i))
            throw Et.notBindable();
        return new lo(i, t)
    }
    function Eh(i) {
        return "rackController" in i
    }
    function u1(i, t) {
        for (let e = 0; e < i.length; e++) {
            let r = i[e];
            if (ji(r) && r.value === t)
                return r
        }
        return null
    }
    function d1(i) {
        return Eh(i) ? i.rackController.rack.bcSet_ : null
    }
    function Or() {
        return new B({
            positions: st([], {
                equals: cw
            })
        })
    }
    function p1(i, t) {
        let e = 0;
        return jw(t, () => {
            i.set("expandedHeight", null),
                i.set("temporaryExpanded", !0),
                ho(t),
                e = t.clientHeight,
                i.set("temporaryExpanded", null),
                ho(t)
        }
        ),
            e
    }
    function Lm(i, t) {
        t.style.height = i.styleHeight
    }
    function Ic(i, t) {
        i.value("expanded").emitter.on("beforechange", () => {
            if (i.set("completed", !1),
                Z(i.get("expandedHeight"))) {
                let e = p1(i, t);
                e > 0 && i.set("expandedHeight", e)
            }
            i.set("shouldFixHeight", !0),
                ho(t)
        }
        ),
            i.emitter.on("change", () => {
                Lm(i, t)
            }
            ),
            Lm(i, t),
            t.addEventListener("transitionend", e => {
                e.propertyName === "height" && i.cleanUpTransition()
            }
            )
    }
    function Rm(i, t) {
        return Ar(i, m1(void 0, t))
    }
    function v1(i, t) {
        let e = i.accept(t.params);
        if (!e)
            return null;
        let r = ct(t.params, s => ({
            disabled: s.optional.boolean,
            hidden: s.optional.boolean
        }));
        return i.controller({
            blade: Or(),
            document: t.document,
            params: Object.assign(Object.assign({}, e.params), {
                disabled: r == null ? void 0 : r.disabled,
                hidden: r == null ? void 0 : r.hidden
            }),
            viewProps: Ye.create({
                disabled: r == null ? void 0 : r.disabled,
                hidden: r == null ? void 0 : r.hidden
            })
        })
    }
    function _o(i, t) {
        if (i instanceof t)
            return i;
        if (i instanceof Gi) {
            let e = i.constraints.reduce((r, s) => r || (s instanceof t ? s : null), null);
            if (e)
                return e
        }
        return null
    }
    function Ms(i) {
        var t;
        let e = mh;
        if (Array.isArray(i))
            return (t = ct({
                items: i
            }, r => ({
                items: r.required.array(r.required.object({
                    text: r.required.string,
                    value: r.required.raw
                }))
            }))) === null || t === void 0 ? void 0 : t.items;
        if (typeof i == "object")
            return e.required.raw(i).value
    }
    function zc(i) {
        if (Array.isArray(i))
            return i;
        let t = [];
        return Object.keys(i).forEach(e => {
            t.push({
                text: e,
                value: i[e]
            })
        }
        ),
            t
    }
    function Vc(i) {
        return Z(i) ? null : new Yi(zc(i))
    }
    function g1(i) {
        return String(i)
    }
    function mv(i) {
        return i === "false" ? !1 : !!i
    }
    function Dm(i) {
        return g1(i)
    }
    function _1(i) {
        return t => i.reduce((e, r) => e !== null ? e : r(t), null)
    }
    function wo(i) {
        return b1(i) + "%"
    }
    function vv(i) {
        return String(i)
    }
    function Nh(i) {
        return i
    }
    function Lr({ primary: i, secondary: t, forward: e, backward: r }) {
        let s = !1;
        function n(o) {
            s || (s = !0,
                o(),
                s = !1)
        }
        i.emitter.on("change", o => {
            n(() => {
                t.setRawValue(e(i.rawValue, t.rawValue), o.options)
            }
            )
        }
        ),
            t.emitter.on("change", o => {
                n(() => {
                    i.setRawValue(r(i.rawValue, t.rawValue), o.options)
                }
                ),
                    n(() => {
                        t.setRawValue(e(i.rawValue, t.rawValue), o.options)
                    }
                    )
            }
            ),
            n(() => {
                t.setRawValue(e(i.rawValue, t.rawValue), {
                    forceEmit: !1,
                    last: !0
                })
            }
            )
    }
    function Gt(i, t) {
        let e = i * (t.altKey ? .1 : 1) * (t.shiftKey ? 10 : 1);
        return t.upKey ? +e : t.downKey ? -e : 0
    }
    function _s(i) {
        return {
            altKey: i.altKey,
            downKey: i.key === "ArrowDown",
            shiftKey: i.shiftKey,
            upKey: i.key === "ArrowUp"
        }
    }
    function Xe(i) {
        return {
            altKey: i.altKey,
            downKey: i.key === "ArrowLeft",
            shiftKey: i.shiftKey,
            upKey: i.key === "ArrowRight"
        }
    }
    function w1(i) {
        return i === "ArrowUp" || i === "ArrowDown"
    }
    function gv(i) {
        return w1(i) || i === "ArrowLeft" || i === "ArrowRight"
    }
    function Kl(i, t) {
        var e, r;
        let s = t.ownerDocument.defaultView
            , n = t.getBoundingClientRect();
        return {
            x: i.pageX - (((e = s && s.scrollX) !== null && e !== void 0 ? e : 0) + n.left),
            y: i.pageY - (((r = s && s.scrollY) !== null && r !== void 0 ? r : 0) + n.top)
        }
    }
    function _v(i) {
        return {
            sliderProps: new B({
                keyScale: i.keyScale,
                max: i.max,
                min: i.min
            }),
            textProps: new B({
                formatter: st(i.formatter),
                keyScale: i.keyScale,
                pointerScale: st(i.pointerScale)
            })
        }
    }
    function bv(i) {
        return `--${y1[i]}`
    }
    function bs(i) {
        return av(i)
    }
    function di(i) {
        if (ih(i))
            return ct(i, bs)
    }
    function qe(i, t) {
        if (!i)
            return;
        let e = []
            , r = sv(i, t);
        r && e.push(r);
        let s = nv(i);
        return s && e.push(s),
            new Gi(e)
    }
    function x1(i) {
        return i ? i.major === kr.major : !1
    }
    function wv(i) {
        if (i === "inline" || i === "popup")
            return i
    }
    function Ss(i, t) {
        i.write(t)
    }
    function E1(i) {
        let t = []
            , e = Vc(i.options);
        return e && t.push(e),
            new Gi(t)
    }
    function P1(i, t, e) {
        let r = wt(i / 255, 0, 1)
            , s = wt(t / 255, 0, 1)
            , n = wt(e / 255, 0, 1)
            , o = Math.max(r, s, n)
            , a = Math.min(r, s, n)
            , l = o - a
            , h = 0
            , c = 0
            , u = (a + o) / 2;
        return l !== 0 && (c = l / (1 - Math.abs(o + a - 1)),
            r === o ? h = (s - n) / l : s === o ? h = 2 + (n - r) / l : h = 4 + (r - s) / l,
            h = h / 6 + (h < 0 ? 1 : 0)),
            [h * 360, c * 100, u * 100]
    }
    function M1(i, t, e) {
        let r = (i % 360 + 360) % 360, s = wt(t / 100, 0, 1), n = wt(e / 100, 0, 1), o = (1 - Math.abs(2 * n - 1)) * s, a = o * (1 - Math.abs(r / 60 % 2 - 1)), l = n - o / 2, h, c, u;
        return r >= 0 && r < 60 ? [h, c, u] = [o, a, 0] : r >= 60 && r < 120 ? [h, c, u] = [a, o, 0] : r >= 120 && r < 180 ? [h, c, u] = [0, o, a] : r >= 180 && r < 240 ? [h, c, u] = [0, a, o] : r >= 240 && r < 300 ? [h, c, u] = [a, 0, o] : [h, c, u] = [o, 0, a],
            [(h + l) * 255, (c + l) * 255, (u + l) * 255]
    }
    function S1(i, t, e) {
        let r = wt(i / 255, 0, 1), s = wt(t / 255, 0, 1), n = wt(e / 255, 0, 1), o = Math.max(r, s, n), a = Math.min(r, s, n), l = o - a, h;
        l === 0 ? h = 0 : o === r ? h = 60 * (((s - n) / l % 6 + 6) % 6) : o === s ? h = 60 * ((n - r) / l + 2) : h = 60 * ((r - s) / l + 4);
        let c = o === 0 ? 0 : l / o
            , u = o;
        return [h, c * 100, u * 100]
    }
    function yv(i, t, e) {
        let r = ev(i, 360), s = wt(t / 100, 0, 1), n = wt(e / 100, 0, 1), o = n * s, a = o * (1 - Math.abs(r / 60 % 2 - 1)), l = n - o, h, c, u;
        return r >= 0 && r < 60 ? [h, c, u] = [o, a, 0] : r >= 60 && r < 120 ? [h, c, u] = [a, o, 0] : r >= 120 && r < 180 ? [h, c, u] = [0, o, a] : r >= 180 && r < 240 ? [h, c, u] = [0, a, o] : r >= 240 && r < 300 ? [h, c, u] = [a, 0, o] : [h, c, u] = [o, 0, a],
            [(h + l) * 255, (c + l) * 255, (u + l) * 255]
    }
    function T1(i, t, e) {
        let r = e + t * (100 - Math.abs(2 * e - 100)) / 200;
        return [i, r !== 0 ? t * (100 - Math.abs(2 * e - 100)) / r : 0, e + t * (100 - Math.abs(2 * e - 100)) / (2 * 100)]
    }
    function A1(i, t, e) {
        let r = 100 - Math.abs(e * (200 - t) / 100 - 100);
        return [i, r !== 0 ? t * e / r : 0, e * (200 - t) / (2 * 100)]
    }
    function Re(i) {
        return [i[0], i[1], i[2]]
    }
    function Po(i, t) {
        return [i[0], i[1], i[2], t]
    }
    function Tr(i, t) {
        return [t === "float" ? 1 : i === "rgb" ? 255 : 360, t === "float" ? 1 : i === "rgb" ? 255 : 100, t === "float" ? 1 : i === "rgb" ? 255 : 100]
    }
    function O1(i, t) {
        return i === t ? t : ev(i, t)
    }
    function xv(i, t, e) {
        var r;
        let s = Tr(t, e);
        return [t === "rgb" ? wt(i[0], 0, s[0]) : O1(i[0], s[0]), wt(i[1], 0, s[1]), wt(i[2], 0, s[2]), wt((r = i[3]) !== null && r !== void 0 ? r : 1, 0, 1)]
    }
    function Nm(i, t, e, r) {
        let s = Tr(t, e)
            , n = Tr(t, r);
        return i.map((o, a) => o / s[a] * n[a])
    }
    function Ev(i, t, e) {
        let r = Nm(i, t.mode, t.type, "int")
            , s = k1[t.mode][e.mode](...r);
        return Nm(s, e.mode, "int", e.type)
    }
    function L1(i) {
        return i === "int" ? "int" : i === "float" ? "float" : void 0
    }
    function Dc(i) {
        return ct(i, t => ({
            color: t.optional.object({
                alpha: t.optional.boolean,
                type: t.optional.custom(L1)
            }),
            expanded: t.optional.boolean,
            picker: t.optional.custom(wv),
            readonly: t.optional.constant(!1)
        }))
    }
    function Qi(i) {
        return i ? .1 : 1
    }
    function Cv(i) {
        var t;
        return (t = i.color) === null || t === void 0 ? void 0 : t.type
    }
    function Nc(i, t, e) {
        return R1[e](i, t)
    }
    function F1(i) {
        return i.type === "float"
    }
    function I1(i) {
        return i.type === "int"
    }
    function z1(i) {
        let t = i.getComponents()
            , e = Tr(i.mode, "int");
        return new $([Math.round(G(t[0], 0, 1, 0, e[0])), Math.round(G(t[1], 0, 1, 0, e[1])), Math.round(G(t[2], 0, 1, 0, e[2])), t[3]], i.mode)
    }
    function V1(i) {
        let t = i.getComponents()
            , e = Tr(i.mode, "int");
        return new ws([G(t[0], 0, e[0], 0, 1), G(t[1], 0, e[1], 0, 1), G(t[2], 0, e[2], 0, 1), t[3]], i.mode)
    }
    function Dt(i, t) {
        if (i.type === t)
            return i;
        if (I1(i) && t === "float")
            return V1(i);
        if (F1(i) && t === "int")
            return z1(i);
        throw Et.shouldNeverHappen()
    }
    function D1(i, t) {
        return i.alpha === t.alpha && i.mode === t.mode && i.notation === t.notation && i.type === t.type
    }
    function ue(i, t) {
        let e = i.match(/^(.+)%$/);
        return Math.min(e ? parseFloat(e[1]) * .01 * t : parseFloat(i), t)
    }
    function Pv(i) {
        let t = i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
        if (!t)
            return parseFloat(i);
        let e = parseFloat(t[1])
            , r = t[2];
        return N1[r](e)
    }
    function Mv(i) {
        let t = i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!t)
            return null;
        let e = [ue(t[1], 255), ue(t[2], 255), ue(t[3], 255)];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
    }
    function B1(i) {
        let t = Mv(i);
        return t ? new $(t, "rgb") : null
    }
    function Sv(i) {
        let t = i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!t)
            return null;
        let e = [ue(t[1], 255), ue(t[2], 255), ue(t[3], 255), ue(t[4], 1)];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
    }
    function U1(i) {
        let t = Sv(i);
        return t ? new $(t, "rgb") : null
    }
    function Tv(i) {
        let t = i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!t)
            return null;
        let e = [Pv(t[1]), ue(t[2], 100), ue(t[3], 100)];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
    }
    function j1(i) {
        let t = Tv(i);
        return t ? new $(t, "hsl") : null
    }
    function Av(i) {
        let t = i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
        if (!t)
            return null;
        let e = [Pv(t[1]), ue(t[2], 100), ue(t[3], 100), ue(t[4], 1)];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
    }
    function q1(i) {
        let t = Av(i);
        return t ? new $(t, "hsl") : null
    }
    function kv(i) {
        let t = i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (t)
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
        let e = i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null
    }
    function H1(i) {
        let t = kv(i);
        return t ? new $(t, "rgb") : null
    }
    function Ov(i) {
        let t = i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
        if (t)
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), G(parseInt(t[4] + t[4], 16), 0, 255, 0, 1)];
        let e = i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
        return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), G(parseInt(e[4], 16), 0, 255, 0, 1)] : null
    }
    function W1(i) {
        let t = Ov(i);
        return t ? new $(t, "rgb") : null
    }
    function Lv(i) {
        let t = i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!t)
            return null;
        let e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
    }
    function Bm(i) {
        return t => {
            let e = Lv(t);
            return e ? Nc(e, "rgb", i) : null
        }
    }
    function Rv(i) {
        let t = i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
        if (!t)
            return null;
        let e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])];
        return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
    }
    function Um(i) {
        return t => {
            let e = Rv(t);
            return e ? Nc(e, "rgb", i) : null
        }
    }
    function G1(i) {
        return $1.reduce((t, { parser: e, result: r }) => t || (e(i) ? r : null), null)
    }
    function Y1(i, t = "int") {
        let e = G1(i);
        return e ? e.notation === "hex" && t !== "float" ? Object.assign(Object.assign({}, e), {
            type: "int"
        }) : e.notation === "func" ? Object.assign(Object.assign({}, e), {
            type: t
        }) : null : null
    }
    function Ts(i) {
        let t = [H1, W1, B1, U1, j1, q1];
        i === "int" && t.push(Bm("int"), Um("int")),
            i === "float" && t.push(Bm("float"), Um("float"));
        let e = _1(t);
        return r => {
            let s = e(r);
            return s ? Dt(s, i) : null
        }
    }
    function X1(i) {
        let t = Ts("int");
        if (typeof i != "string")
            return $.black();
        let e = t(i);
        return e != null ? e : $.black()
    }
    function Fv(i) {
        let t = wt(Math.floor(i), 0, 255).toString(16);
        return t.length === 1 ? `0${t}` : t
    }
    function Bc(i, t = "#") {
        let e = Re(i.getComponents("rgb")).map(Fv).join("");
        return `${t}${e}`
    }
    function Uc(i, t = "#") {
        let e = i.getComponents("rgb")
            , r = [e[0], e[1], e[2], e[3] * 255].map(Fv).join("");
        return `${t}${r}`
    }
    function Iv(i) {
        let t = Yt(0)
            , e = Dt(i, "int");
        return `rgb(${Re(e.getComponents("rgb")).map(s => t(s)).join(", ")})`
    }
    function oo(i) {
        let t = Yt(2)
            , e = Yt(0);
        return `rgba(${Dt(i, "int").getComponents("rgb").map((n, o) => (o === 3 ? t : e)(n)).join(", ")})`
    }
    function K1(i) {
        let t = [Yt(0), wo, wo]
            , e = Dt(i, "int");
        return `hsl(${Re(e.getComponents("hsl")).map((s, n) => t[n](s)).join(", ")})`
    }
    function Q1(i) {
        let t = [Yt(0), wo, wo, Yt(2)];
        return `hsla(${Dt(i, "int").getComponents("hsl").map((s, n) => t[n](s)).join(", ")})`
    }
    function zv(i, t) {
        let e = Yt(t === "float" ? 2 : 0)
            , r = ["r", "g", "b"]
            , s = Dt(i, t);
        return `{${Re(s.getComponents("rgb")).map((o, a) => `${r[a]}: ${e(o)}`).join(", ")}}`
    }
    function Z1(i) {
        return t => zv(t, i)
    }
    function Vv(i, t) {
        let e = Yt(2)
            , r = Yt(t === "float" ? 2 : 0)
            , s = ["r", "g", "b", "a"];
        return `{${Dt(i, t).getComponents("rgb").map((a, l) => {
            let h = l === 3 ? e : r;
            return `${s[l]}: ${h(a)}`
        }
        ).join(", ")}}`
    }
    function J1(i) {
        return t => Vv(t, i)
    }
    function Dv(i) {
        return ty.reduce((t, e) => t || (D1(e.format, i) ? e.stringifier : null), null)
    }
    function ey(i) {
        let t = i.createElement("select")
            , e = [{
                text: "RGB",
                value: "rgb"
            }, {
                text: "HSL",
                value: "hsl"
            }, {
                text: "HSV",
                value: "hsv"
            }, {
                text: "HEX",
                value: "hex"
            }];
        return t.appendChild(e.reduce((r, s) => {
            let n = i.createElement("option");
            return n.textContent = s.text,
                n.value = s.value,
                r.appendChild(n),
                r
        }
            , i.createDocumentFragment())),
            t
    }
    function iy(i) {
        return Yt(i === "float" ? 2 : 0)
    }
    function ry(i, t, e) {
        let r = Tr(i, t)[e];
        return new Hi({
            min: 0,
            max: r
        })
    }
    function sy(i, t, e) {
        return new Ki(i, {
            arrayPosition: e === 0 ? "fst" : e === 2 ? "lst" : "mid",
            parser: t.parser,
            props: B.fromObject({
                formatter: iy(t.colorType),
                keyScale: Qi(!1),
                pointerScale: t.colorType === "float" ? .01 : 1
            }),
            value: st(0, {
                constraint: ry(t.colorMode, t.colorType, e)
            }),
            viewProps: t.viewProps
        })
    }
    function ny(i, t) {
        let e = {
            colorMode: t.colorMode,
            colorType: t.colorType,
            parser: We,
            viewProps: t.viewProps
        };
        return [0, 1, 2].map(r => {
            let s = sy(i, e, r);
            return Lr({
                primary: t.value,
                secondary: s.value,
                forward(n) {
                    return Dt(n, t.colorType).getComponents(t.colorMode)[r]
                },
                backward(n, o) {
                    let a = t.colorMode
                        , h = Dt(n, t.colorType).getComponents(a);
                    h[r] = o;
                    let c = Nc(Po(Re(h), h[3]), a, t.colorType);
                    return Dt(c, "int")
                }
            }),
                s
        }
        )
    }
    function oy(i, t) {
        let e = new Xi(i, {
            parser: Ts("int"),
            props: B.fromObject({
                formatter: Bc
            }),
            value: st($.black()),
            viewProps: t.viewProps
        });
        return Lr({
            primary: t.value,
            secondary: e.value,
            forward: r => new $(Re(r.getComponents()), r.mode),
            backward: (r, s) => new $(Po(Re(s.getComponents(r.mode)), r.getComponents()[3]), r.mode)
        }),
            [e]
    }
    function ay(i) {
        return i !== "hex"
    }
    function ly(i) {
        return Re(i.getComponents("rgb")).reduce((t, e) => t << 8 | Math.floor(e) & 255, 0)
    }
    function hy(i) {
        return i.getComponents("rgb").reduce((t, e, r) => {
            let s = Math.floor(r === 3 ? e * 255 : e) & 255;
            return t << 8 | s
        }
            , 0) >>> 0
    }
    function cy(i) {
        return new $([i >> 16 & 255, i >> 8 & 255, i & 255], "rgb")
    }
    function uy(i) {
        return new $([i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, G(i & 255, 0, 255, 0, 1)], "rgb")
    }
    function dy(i) {
        return typeof i != "number" ? $.black() : cy(i)
    }
    function py(i) {
        return typeof i != "number" ? $.black() : uy(i)
    }
    function ao(i, t) {
        return typeof i != "object" || Z(i) ? !1 : t in i && typeof i[t] == "number"
    }
    function Nv(i) {
        return ao(i, "r") && ao(i, "g") && ao(i, "b")
    }
    function Bv(i) {
        return Nv(i) && ao(i, "a")
    }
    function Uv(i) {
        return Nv(i)
    }
    function jc(i, t) {
        if (i.mode !== t.mode || i.type !== t.type)
            return !1;
        let e = i.getComponents()
            , r = t.getComponents();
        for (let s = 0; s < e.length; s++)
            if (e[s] !== r[s])
                return !1;
        return !0
    }
    function qm(i) {
        return "a" in i ? [i.r, i.g, i.b, i.a] : [i.r, i.g, i.b]
    }
    function fy(i) {
        let t = Dv(i);
        return t ? (e, r) => {
            Ss(e, t(r))
        }
            : null
    }
    function my(i) {
        let t = i ? hy : ly;
        return (e, r) => {
            Ss(e, t(r))
        }
    }
    function vy(i, t, e) {
        let s = Dt(t, e).toRgbaObject();
        i.writeProperty("r", s.r),
            i.writeProperty("g", s.g),
            i.writeProperty("b", s.b),
            i.writeProperty("a", s.a)
    }
    function gy(i, t, e) {
        let s = Dt(t, e).toRgbaObject();
        i.writeProperty("r", s.r),
            i.writeProperty("g", s.g),
            i.writeProperty("b", s.b)
    }
    function _y(i, t) {
        return (e, r) => {
            i ? vy(e, r, t) : gy(e, r, t)
        }
    }
    function by(i) {
        var t;
        return !!(!((t = i == null ? void 0 : i.color) === null || t === void 0) && t.alpha)
    }
    function wy(i) {
        return i ? t => Uc(t, "0x") : t => Bc(t, "0x")
    }
    function yy(i) {
        return "color" in i || i.view === "color"
    }
    function Ey(i, t) {
        if (!Uv(i))
            return Dt($.black(), t);
        if (t === "int") {
            let e = qm(i);
            return new $(e, "rgb")
        }
        if (t === "float") {
            let e = qm(i);
            return new ws(e, "rgb")
        }
        return Dt($.black(), "int")
    }
    function Cy(i) {
        return Bv(i)
    }
    function Py(i) {
        return t => {
            let e = Ey(t, i);
            return Dt(e, "int")
        }
    }
    function My(i, t) {
        return e => i ? Vv(e, t) : zv(e, t)
    }
    function Ay(i, t, e) {
        return new Ki(i, {
            arrayPosition: e === 0 ? "fst" : e === t.axes.length - 1 ? "lst" : "mid",
            parser: t.parser,
            props: t.axes[e].textProps,
            value: st(0, {
                constraint: t.axes[e].constraint
            }),
            viewProps: t.viewProps
        })
    }
    function ky(i, t) {
        let e = []
            , r = sv(i, t);
        r && e.push(r);
        let s = nv(i);
        s && e.push(s);
        let n = Vc(i.options);
        return n && e.push(n),
            new Gi(e)
    }
    function Wm(i, t, e) {
        return [Gt(t[0], Xe(i)), Gt(t[1], _s(i)) * (e ? 1 : -1)]
    }
    function Ly(i) {
        return ke.isObject(i) ? new ke(i.x, i.y) : new ke
    }
    function Ry(i, t) {
        i.writeProperty("x", t.x),
            i.writeProperty("y", t.y)
    }
    function Fy(i, t) {
        return new xs({
            assembly: jv,
            components: [qe(Object.assign(Object.assign({}, i), i.x), t.x), qe(Object.assign(Object.assign({}, i), i.y), t.y)]
        })
    }
    function $m(i, t) {
        var e, r;
        if (!Z(i.min) || !Z(i.max))
            return Math.max(Math.abs((e = i.min) !== null && e !== void 0 ? e : 0), Math.abs((r = i.max) !== null && r !== void 0 ? r : 0));
        let s = iv(i);
        return Math.max(Math.abs(s) * 10, Math.abs(t) * 10)
    }
    function Iy(i, t) {
        var e, r;
        let s = $m(qi(i, (e = i.x) !== null && e !== void 0 ? e : {}), t.x)
            , n = $m(qi(i, (r = i.y) !== null && r !== void 0 ? r : {}), t.y);
        return Math.max(s, n)
    }
    function zy(i) {
        if (!("y" in i))
            return !1;
        let t = i.y;
        return t && "inverted" in t ? !!t.inverted : !1
    }
    function Dy(i) {
        return pi.isObject(i) ? new pi(i.x, i.y, i.z) : new pi
    }
    function Ny(i, t) {
        i.writeProperty("x", t.x),
            i.writeProperty("y", t.y),
            i.writeProperty("z", t.z)
    }
    function By(i, t) {
        return new xs({
            assembly: qv,
            components: [qe(Object.assign(Object.assign({}, i), i.x), t.x), qe(Object.assign(Object.assign({}, i), i.y), t.y), qe(Object.assign(Object.assign({}, i), i.z), t.z)]
        })
    }
    function jy(i) {
        return fi.isObject(i) ? new fi(i.x, i.y, i.z, i.w) : new fi
    }
    function qy(i, t) {
        i.writeProperty("x", t.x),
            i.writeProperty("y", t.y),
            i.writeProperty("z", t.z),
            i.writeProperty("w", t.w)
    }
    function Hy(i, t) {
        return new xs({
            assembly: Hv,
            components: [qe(Object.assign(Object.assign({}, i), i.x), t.x), qe(Object.assign(Object.assign({}, i), i.y), t.y), qe(Object.assign(Object.assign({}, i), i.z), t.z), qe(Object.assign(Object.assign({}, i), i.w), t.w)]
        })
    }
    function $y(i) {
        let t = []
            , e = Vc(i.options);
        return e && t.push(e),
            new Gi(t)
    }
    function mc(i) {
        return Z(i.format) ? Yt(2) : i.format
    }
    function Xy(i) {
        var t;
        return i.value.rawValue.length === 1 ? new Ps(i.document, {
            formatter: mc(i.params),
            value: i.value,
            viewProps: i.viewProps
        }) : new Cs(i.document, {
            formatter: mc(i.params),
            rows: (t = i.params.rows) !== null && t !== void 0 ? t : As.monitor.defaultRows,
            value: i.value,
            viewProps: i.viewProps
        })
    }
    function Ky(i) {
        var t, e, r;
        return new yo(i.document, {
            formatter: mc(i.params),
            rows: (t = i.params.rows) !== null && t !== void 0 ? t : As.monitor.defaultRows,
            props: B.fromObject({
                max: (e = i.params.max) !== null && e !== void 0 ? e : 100,
                min: (r = i.params.min) !== null && r !== void 0 ? r : 0
            }),
            value: i.value,
            viewProps: i.viewProps
        })
    }
    function Xm(i) {
        return i.view === "graph"
    }
    function Jy(i, t) {
        var e;
        let r = i.accept(t.target.read(), t.params);
        if (Z(r))
            return null;
        let s = {
            target: t.target,
            initialValue: r.initialValue,
            params: r.params
        }
            , n = ct(t.params, u => ({
                disabled: u.optional.boolean,
                hidden: u.optional.boolean,
                label: u.optional.string,
                tag: u.optional.string
            }))
            , o = i.binding.reader(s)
            , a = i.binding.constraint ? i.binding.constraint(s) : void 0
            , l = new gc({
                reader: o,
                target: t.target,
                writer: i.binding.writer(s)
            })
            , h = new fh(st(o(r.initialValue), {
                constraint: a,
                equals: i.binding.equals
            }), l)
            , c = i.controller({
                constraint: a,
                document: t.document,
                initialValue: r.initialValue,
                params: r.params,
                value: h,
                viewProps: Ye.create({
                    disabled: n == null ? void 0 : n.disabled,
                    hidden: n == null ? void 0 : n.hidden
                })
            });
        return new vh(t.document, {
            blade: Or(),
            props: B.fromObject({
                label: "label" in t.params ? (e = n == null ? void 0 : n.label) !== null && e !== void 0 ? e : null : t.target.key
            }),
            tag: n == null ? void 0 : n.tag,
            value: h,
            valueController: c
        })
    }
    function tx(i, t) {
        return t === 0 ? new Fh : new Ih(i, t != null ? t : As.monitor.defaultInterval)
    }
    function ex(i, t) {
        var e, r, s;
        let n = i.accept(t.target.read(), t.params);
        if (Z(n))
            return null;
        let o = {
            target: t.target,
            initialValue: n.initialValue,
            params: n.params
        }
            , a = ct(t.params, d => ({
                bufferSize: d.optional.number,
                disabled: d.optional.boolean,
                hidden: d.optional.boolean,
                interval: d.optional.number,
                label: d.optional.string
            }))
            , l = i.binding.reader(o)
            , h = (r = (e = a == null ? void 0 : a.bufferSize) !== null && e !== void 0 ? e : i.binding.defaultBufferSize && i.binding.defaultBufferSize(n.params)) !== null && r !== void 0 ? r : 1
            , c = new gh({
                binding: new _c({
                    reader: l,
                    target: t.target
                }),
                bufferSize: h,
                ticker: tx(t.document, a == null ? void 0 : a.interval)
            })
            , u = i.controller({
                document: t.document,
                params: n.params,
                value: c,
                viewProps: Ye.create({
                    disabled: a == null ? void 0 : a.disabled,
                    hidden: a == null ? void 0 : a.hidden
                })
            });
        return u.viewProps.bindDisabled(c.ticker),
            u.viewProps.handleDispose(() => {
                c.ticker.dispose()
            }
            ),
            new _h(t.document, {
                blade: Or(),
                props: B.fromObject({
                    label: "label" in t.params ? (s = a == null ? void 0 : a.label) !== null && s !== void 0 ? s : null : t.target.key
                }),
                value: c,
                valueController: u
            })
    }
    function rx() {
        let i = new bc(ix);
        return [Vy, Uy, Wy, Gy, Oy, Ty, Sy, xy, C1, Yy, Zy, Qy, n1, f1, fv].forEach(t => {
            i.register("core", t)
        }
        ),
            i
    }
    function lx(i) {
        let t = i.createElement("div");
        return t.classList.add(H("dfw")()),
            i.body && i.body.appendChild(t),
            t
    }
    function hx(i, t, e) {
        if (i.querySelector(`style[data-tp-style=${t}]`))
            return;
        let r = i.createElement("style");
        r.dataset.tpStyle = t,
            r.textContent = e,
            i.head.appendChild(r)
    }
    var uw, Et, lo, pt, rh, sh, nh, B, Hi, oh, ah, lh, pw, hh, fw, ch, ww, Sw, Tw, Fw, $e, Pr, Wi, uh, dh, ph, $i, fh, mh, Ae, $w, Yw, ns, co, uo, Am, km, Mr, Ge, po, vh, gh, _h, bh, Yl, wh, yh, fo, mo, kr, n1, xh, us, ds, Ch, Ph, ps, fs, vo, pv, Mh, ms, f1, m1, Ye, Fm, Sh, os, Th, Ah, vs, kh, Oh, Im, Lh, as, Rh, go, fv, gs, Fh, Ih, Gi, Yi, Xl, zh, Le, zm, Vh, bo, Vm, Dh, Xi, b1, Ke, ce, Bh, Ki, Ql, Uh, jh, Zl, qh, Sr, y1, no, Hh, Wh, C1, Ui, $h, k1, $, hi, Gh, ws, R1, N1, $1, ty, ls, Yh, Xh, Er, Kh, Qh, Jl, Zh, Jh, th, jm, tc, ec, ic, eh, rc, sc, ys, xy, Sy, Ty, xs, Hm, nc, Es, oc, Oy, ke, jv, Cr, ac, ci, lc, hc, cc, Vy, pi, qv, Uy, fi, Hv, Wy, Gy, As, Gm, uc, Cs, Ym, dc, Ps, Yy, pc, ui, fc, yo, Qy, Zy, vc, gc, _c, bc, ix, wc, yc, xc, Ec, sx, Cc, Pc, Km, Mc, xo, nx, ox, ax, Eo, rS, Wv = z(() => {
        uw = {
            alreadydisposed: () => "View has been already disposed",
            invalidparams: i => `Invalid parameters for '${i.name}'`,
            nomatchingcontroller: i => `No matching controller for '${i.key}'`,
            nomatchingview: i => `No matching view for '${JSON.stringify(i.params)}'`,
            notbindable: () => "Value is not bindable",
            notcompatible: i => `Not compatible with  plugin '${i.id}'`,
            propertynotfound: i => `Property '${i.name}' not found`,
            shouldneverhappen: () => "This error should never happen"
        },
            Et = class i {
                static alreadyDisposed() {
                    return new i({
                        type: "alreadydisposed"
                    })
                }
                static notBindable() {
                    return new i({
                        type: "notbindable"
                    })
                }
                static notCompatible(t, e) {
                    return new i({
                        type: "notcompatible",
                        context: {
                            id: `${t}.${e}`
                        }
                    })
                }
                static propertyNotFound(t) {
                    return new i({
                        type: "propertynotfound",
                        context: {
                            name: t
                        }
                    })
                }
                static shouldNeverHappen() {
                    return new i({
                        type: "shouldneverhappen"
                    })
                }
                constructor(t) {
                    var e;
                    this.message = (e = uw[t.type](t.context)) !== null && e !== void 0 ? e : "Unexpected error",
                        this.name = this.constructor.name,
                        this.stack = new Error(this.message).stack,
                        this.type = t.type
                }
                toString() {
                    return this.message
                }
            }
            ,
            lo = class i {
                constructor(t, e) {
                    this.obj_ = t,
                        this.key = e
                }
                static isBindable(t) {
                    return !(t === null || typeof t != "object" && typeof t != "function")
                }
                read() {
                    return this.obj_[this.key]
                }
                write(t) {
                    this.obj_[this.key] = t
                }
                writeProperty(t, e) {
                    let r = this.read();
                    if (!i.isBindable(r))
                        throw Et.notBindable();
                    if (!(t in r))
                        throw Et.propertyNotFound(t);
                    r[t] = e
                }
            }
            ,
            pt = class {
                constructor() {
                    this.observers_ = {}
                }
                on(t, e, r) {
                    var s;
                    let n = this.observers_[t];
                    return n || (n = this.observers_[t] = []),
                        n.push({
                            handler: e,
                            key: (s = r == null ? void 0 : r.key) !== null && s !== void 0 ? s : e
                        }),
                        this
                }
                off(t, e) {
                    let r = this.observers_[t];
                    return r && (this.observers_[t] = r.filter(s => s.key !== e)),
                        this
                }
                emit(t, e) {
                    let r = this.observers_[t];
                    r && r.forEach(s => {
                        s.handler(e)
                    }
                    )
                }
            }
            ,
            rh = class {
                constructor(t, e) {
                    var r;
                    this.constraint_ = e == null ? void 0 : e.constraint,
                        this.equals_ = (r = e == null ? void 0 : e.equals) !== null && r !== void 0 ? r : (s, n) => s === n,
                        this.emitter = new pt,
                        this.rawValue_ = t
                }
                get constraint() {
                    return this.constraint_
                }
                get rawValue() {
                    return this.rawValue_
                }
                set rawValue(t) {
                    this.setRawValue(t, {
                        forceEmit: !1,
                        last: !0
                    })
                }
                setRawValue(t, e) {
                    let r = e != null ? e : {
                        forceEmit: !1,
                        last: !0
                    }
                        , s = this.constraint_ ? this.constraint_.constrain(t) : t
                        , n = this.rawValue_;
                    this.equals_(n, s) && !r.forceEmit || (this.emitter.emit("beforechange", {
                        sender: this
                    }),
                        this.rawValue_ = s,
                        this.emitter.emit("change", {
                            options: r,
                            previousRawValue: n,
                            rawValue: s,
                            sender: this
                        }))
                }
            }
            ,
            sh = class {
                constructor(t) {
                    this.emitter = new pt,
                        this.value_ = t
                }
                get rawValue() {
                    return this.value_
                }
                set rawValue(t) {
                    this.setRawValue(t, {
                        forceEmit: !1,
                        last: !0
                    })
                }
                setRawValue(t, e) {
                    let r = e != null ? e : {
                        forceEmit: !1,
                        last: !0
                    }
                        , s = this.value_;
                    s === t && !r.forceEmit || (this.emitter.emit("beforechange", {
                        sender: this
                    }),
                        this.value_ = t,
                        this.emitter.emit("change", {
                            options: r,
                            previousRawValue: s,
                            rawValue: this.value_,
                            sender: this
                        }))
                }
            }
            ,
            nh = class {
                constructor(t) {
                    this.emitter = new pt,
                        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                        this.onValueChange_ = this.onValueChange_.bind(this),
                        this.value_ = t,
                        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                        this.value_.emitter.on("change", this.onValueChange_)
                }
                get rawValue() {
                    return this.value_.rawValue
                }
                onValueBeforeChange_(t) {
                    this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
                        sender: this
                    }))
                }
                onValueChange_(t) {
                    this.emitter.emit("change", Object.assign(Object.assign({}, t), {
                        sender: this
                    }))
                }
            }
            ;
        B = class i {
            constructor(t) {
                this.emitter = new pt,
                    this.valMap_ = t;
                for (let e in this.valMap_)
                    this.valMap_[e].emitter.on("change", () => {
                        this.emitter.emit("change", {
                            key: e,
                            sender: this
                        })
                    }
                    )
            }
            static createCore(t) {
                return Object.keys(t).reduce((r, s) => Object.assign(r, {
                    [s]: st(t[s])
                }), {})
            }
            static fromObject(t) {
                let e = this.createCore(t);
                return new i(e)
            }
            get(t) {
                return this.valMap_[t].rawValue
            }
            set(t, e) {
                this.valMap_[t].rawValue = e
            }
            value(t) {
                return this.valMap_[t]
            }
        }
            ,
            Hi = class {
                constructor(t) {
                    this.values = B.fromObject({
                        max: t.max,
                        min: t.min
                    })
                }
                constrain(t) {
                    let e = this.values.get("max")
                        , r = this.values.get("min");
                    return Math.min(Math.max(t, r), e)
                }
            }
            ,
            oh = class {
                constructor(t) {
                    this.values = B.fromObject({
                        max: t.max,
                        min: t.min
                    })
                }
                constrain(t) {
                    let e = this.values.get("max")
                        , r = this.values.get("min")
                        , s = t;
                    return Z(r) || (s = Math.max(s, r)),
                        Z(e) || (s = Math.min(s, e)),
                        s
                }
            }
            ,
            ah = class {
                constructor(t, e = 0) {
                    this.step = t,
                        this.origin = e
                }
                constrain(t) {
                    let e = this.origin % this.step
                        , r = Math.round((t - e) / this.step);
                    return e + r * this.step
                }
            }
            ,
            lh = class {
                constructor(t) {
                    this.text = t
                }
                evaluate() {
                    return Number(this.text)
                }
                toString() {
                    return this.text
                }
            }
            ,
            pw = {
                "**": (i, t) => Math.pow(i, t),
                "*": (i, t) => i * t,
                "/": (i, t) => i / t,
                "%": (i, t) => i % t,
                "+": (i, t) => i + t,
                "-": (i, t) => i - t,
                "<<": (i, t) => i << t,
                ">>": (i, t) => i >> t,
                ">>>": (i, t) => i >>> t,
                "&": (i, t) => i & t,
                "^": (i, t) => i ^ t,
                "|": (i, t) => i | t
            },
            hh = class {
                constructor(t, e, r) {
                    this.left = e,
                        this.operator = t,
                        this.right = r
                }
                evaluate() {
                    let t = pw[this.operator];
                    if (!t)
                        throw new Error(`unexpected binary operator: '${this.operator}`);
                    return t(this.left.evaluate(), this.right.evaluate())
                }
                toString() {
                    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ")
                }
            }
            ,
            fw = {
                "+": i => i,
                "-": i => -i,
                "~": i => ~i
            },
            ch = class {
                constructor(t, e) {
                    this.operator = t,
                        this.expression = e
                }
                evaluate() {
                    let t = fw[this.operator];
                    if (!t)
                        throw new Error(`unexpected unary operator: '${this.operator}`);
                    return t(this.expression.evaluate())
                }
                toString() {
                    return ["u(", this.operator, this.expression.toString(), ")"].join(" ")
                }
            }
            ;
        ww = Ac([gw, _w, bw]);
        Sw = Ac([xw, Cw, Mw]),
            Tw = Ac([Sw, ww]);
        Fw = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((i, t) => Rw(i, t), Zm);
        $e = class {
            constructor(t) {
                this.controller = t
            }
            get element() {
                return this.controller.view.element
            }
            get disabled() {
                return this.controller.viewProps.get("disabled")
            }
            set disabled(t) {
                this.controller.viewProps.set("disabled", t)
            }
            get hidden() {
                return this.controller.viewProps.get("hidden")
            }
            set hidden(t) {
                this.controller.viewProps.set("hidden", t)
            }
            dispose() {
                this.controller.viewProps.set("disposed", !0)
            }
            importState(t) {
                return this.controller.importState(t)
            }
            exportState() {
                return this.controller.exportState()
            }
        }
            ,
            Pr = class {
                constructor(t) {
                    this.target = t
                }
            }
            ,
            Wi = class extends Pr {
                constructor(t, e, r) {
                    super(t),
                        this.value = e,
                        this.last = r != null ? r : !0
                }
            }
            ,
            uh = class extends Pr {
                constructor(t, e) {
                    super(t),
                        this.expanded = e
                }
            }
            ,
            dh = class extends Pr {
                constructor(t, e) {
                    super(t),
                        this.index = e
                }
            }
            ,
            ph = class extends Pr {
                constructor(t, e) {
                    super(t),
                        this.native = e
                }
            }
            ,
            $i = class extends $e {
                constructor(t) {
                    super(t),
                        this.onValueChange_ = this.onValueChange_.bind(this),
                        this.emitter_ = new pt,
                        this.controller.value.emitter.on("change", this.onValueChange_)
                }
                get label() {
                    return this.controller.labelController.props.get("label")
                }
                set label(t) {
                    this.controller.labelController.props.set("label", t)
                }
                get key() {
                    return this.controller.value.binding.target.key
                }
                get tag() {
                    return this.controller.tag
                }
                set tag(t) {
                    this.controller.tag = t
                }
                on(t, e) {
                    let r = e.bind(this);
                    return this.emitter_.on(t, s => {
                        r(s)
                    }
                        , {
                            key: e
                        }),
                        this
                }
                off(t, e) {
                    return this.emitter_.off(t, e),
                        this
                }
                refresh() {
                    this.controller.value.fetch()
                }
                onValueChange_(t) {
                    let e = this.controller.value;
                    this.emitter_.emit("change", new Wi(this, e.binding.target.read(), t.options.last))
                }
            }
            ,
            fh = class {
                constructor(t, e) {
                    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                        this.onValueChange_ = this.onValueChange_.bind(this),
                        this.binding = e,
                        this.value_ = t,
                        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                        this.value_.emitter.on("change", this.onValueChange_),
                        this.emitter = new pt
                }
                get rawValue() {
                    return this.value_.rawValue
                }
                set rawValue(t) {
                    this.value_.rawValue = t
                }
                setRawValue(t, e) {
                    this.value_.setRawValue(t, e)
                }
                fetch() {
                    this.value_.rawValue = this.binding.read()
                }
                push() {
                    this.binding.write(this.value_.rawValue)
                }
                onValueBeforeChange_(t) {
                    this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
                        sender: this
                    }))
                }
                onValueChange_(t) {
                    this.push(),
                        this.emitter.emit("change", Object.assign(Object.assign({}, t), {
                            sender: this
                        }))
                }
            }
            ;
        mh = {
            optional: Tm(!0),
            required: Tm(!1)
        };
        Ae = "http://www.w3.org/2000/svg";
        $w = {
            check: '<path d="M2 8l4 4l8 -8"/>',
            dropdown: '<path d="M5 7h6l-3 3 z"/>',
            p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
        };
        Yw = "tp";
        ns = H("lbl");
        co = class {
            constructor(t, e) {
                this.element = t.createElement("div"),
                    this.element.classList.add(ns()),
                    e.viewProps.bindClassModifiers(this.element);
                let r = t.createElement("div");
                r.classList.add(ns("l")),
                    Oe(e.props, "label", n => {
                        Z(n) ? this.element.classList.add(ns(void 0, "nol")) : (this.element.classList.remove(ns(void 0, "nol")),
                            Gw(r),
                            r.appendChild(Xw(t, n)))
                    }
                    ),
                    this.element.appendChild(r),
                    this.labelElement = r;
                let s = t.createElement("div");
                s.classList.add(ns("v")),
                    this.element.appendChild(s),
                    this.valueElement = s
            }
        }
            ,
            uo = class {
                constructor(t, e) {
                    this.props = e.props,
                        this.valueController = e.valueController,
                        this.viewProps = e.valueController.viewProps,
                        this.view = new co(t, {
                            props: e.props,
                            viewProps: this.viewProps
                        }),
                        this.view.valueElement.appendChild(this.valueController.view.element)
                }
                importProps(t) {
                    return Jt(t, null, e => ({
                        label: e.optional.string
                    }), e => (this.props.set("label", e.label),
                        !0))
                }
                exportProps() {
                    return te(null, {
                        label: this.props.get("label")
                    })
                }
            }
            ;
        Am = H(""),
            km = {
                veryfirst: "vfst",
                first: "fst",
                last: "lst",
                verylast: "vlst"
            },
            Mr = class {
                constructor(t) {
                    this.parent_ = null,
                        this.blade = t.blade,
                        this.view = t.view,
                        this.viewProps = t.viewProps;
                    let e = this.view.element;
                    this.blade.value("positions").emitter.on("change", () => {
                        Kw().forEach(r => {
                            e.classList.remove(Am(void 0, km[r]))
                        }
                        ),
                            this.blade.get("positions").forEach(r => {
                                e.classList.add(Am(void 0, km[r]))
                            }
                            )
                    }
                    ),
                        this.viewProps.handleDispose(() => {
                            Rc(e)
                        }
                        )
                }
                get parent() {
                    return this.parent_
                }
                set parent(t) {
                    this.parent_ = t,
                        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null)
                }
                importState(t) {
                    return Jt(t, null, e => ({
                        disabled: e.required.boolean,
                        hidden: e.required.boolean
                    }), e => (this.viewProps.importState(e),
                        !0))
                }
                exportState() {
                    return te(null, Object.assign({}, this.viewProps.exportState()))
                }
            }
            ,
            Ge = class extends Mr {
                constructor(t, e) {
                    if (e.value !== e.valueController.value)
                        throw Et.shouldNeverHappen();
                    let r = e.valueController.viewProps
                        , s = new uo(t, {
                            blade: e.blade,
                            props: e.props,
                            valueController: e.valueController
                        });
                    super(Object.assign(Object.assign({}, e), {
                        view: new co(t, {
                            props: e.props,
                            viewProps: r
                        }),
                        viewProps: r
                    })),
                        this.labelController = s,
                        this.value = e.value,
                        this.valueController = e.valueController,
                        this.view.valueElement.appendChild(this.valueController.view.element)
                }
                importState(t) {
                    return Jt(t, e => {
                        var r, s, n;
                        return super.importState(e) && this.labelController.importProps(e) && ((n = (s = (r = this.valueController).importProps) === null || s === void 0 ? void 0 : s.call(r, t)) !== null && n !== void 0 ? n : !0)
                    }
                        , e => ({
                            value: e.optional.raw
                        }), e => (e.value && (this.value.rawValue = e.value),
                            !0))
                }
                exportState() {
                    var t, e, r;
                    return te(() => super.exportState(), Object.assign(Object.assign({
                        value: this.value.rawValue
                    }, this.labelController.exportProps()), (r = (e = (t = this.valueController).exportProps) === null || e === void 0 ? void 0 : e.call(t)) !== null && r !== void 0 ? r : {}))
                }
            }
            ;
        po = class extends Ge {
            constructor(t, e) {
                super(t, e),
                    this.tag = e.tag
            }
            importState(t) {
                return Jt(t, e => super.importState(Om(t)), e => ({
                    tag: e.optional.string
                }), e => (this.tag = e.tag,
                    !0))
            }
            exportState() {
                return te(() => Om(super.exportState()), {
                    binding: {
                        key: this.value.binding.target.key,
                        value: this.value.binding.target.read()
                    },
                    tag: this.tag
                })
            }
        }
            ;
        vh = class extends po {
            importState(t) {
                return Jt(t, e => super.importState(e), e => ({
                    binding: e.required.object({
                        value: e.required.raw
                    })
                }), e => (this.value.binding.inject(e.binding.value),
                    this.value.fetch(),
                    !0))
            }
        }
            ;
        gh = class {
            constructor(t) {
                this.emitter = new pt,
                    this.onTick_ = this.onTick_.bind(this),
                    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
                    this.onValueChange_ = this.onValueChange_.bind(this),
                    this.binding = t.binding,
                    this.value_ = st(Jw(t.bufferSize)),
                    this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
                    this.value_.emitter.on("change", this.onValueChange_),
                    this.ticker = t.ticker,
                    this.ticker.emitter.on("tick", this.onTick_),
                    this.fetch()
            }
            get rawValue() {
                return this.value_.rawValue
            }
            set rawValue(t) {
                this.value_.rawValue = t
            }
            setRawValue(t, e) {
                this.value_.setRawValue(t, e)
            }
            fetch() {
                this.value_.rawValue = e1(this.value_.rawValue, this.binding.read())
            }
            onTick_() {
                this.fetch()
            }
            onValueBeforeChange_(t) {
                this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
                    sender: this
                }))
            }
            onValueChange_(t) {
                this.emitter.emit("change", Object.assign(Object.assign({}, t), {
                    sender: this
                }))
            }
        }
            ;
        _h = class extends po {
            exportState() {
                return te(() => super.exportState(), {
                    binding: {
                        readonly: !0
                    }
                })
            }
        }
            ;
        bh = class extends $e {
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(t) {
                this.controller.labelController.props.set("label", t)
            }
            get title() {
                var t;
                return (t = this.controller.buttonController.props.get("title")) !== null && t !== void 0 ? t : ""
            }
            set title(t) {
                this.controller.buttonController.props.set("title", t)
            }
            on(t, e) {
                let r = e.bind(this);
                return this.controller.buttonController.emitter.on(t, n => {
                    r(new ph(this, n.nativeEvent))
                }
                ),
                    this
            }
            off(t, e) {
                return this.controller.buttonController.emitter.off(t, e),
                    this
            }
        }
            ;
        Yl = H("btn"),
            wh = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Yl()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("button");
                    r.classList.add(Yl("b")),
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.buttonElement = r;
                    let s = t.createElement("div");
                    s.classList.add(Yl("t")),
                        Fc(e.props.value("title"), s),
                        this.buttonElement.appendChild(s)
                }
            }
            ,
            yh = class {
                constructor(t, e) {
                    this.emitter = new pt,
                        this.onClick_ = this.onClick_.bind(this),
                        this.props = e.props,
                        this.viewProps = e.viewProps,
                        this.view = new wh(t, {
                            props: this.props,
                            viewProps: this.viewProps
                        }),
                        this.view.buttonElement.addEventListener("click", this.onClick_)
                }
                importProps(t) {
                    return Jt(t, null, e => ({
                        title: e.optional.string
                    }), e => (this.props.set("title", e.title),
                        !0))
                }
                exportProps() {
                    return te(null, {
                        title: this.props.get("title")
                    })
                }
                onClick_(t) {
                    this.emitter.emit("click", {
                        nativeEvent: t,
                        sender: this
                    })
                }
            }
            ,
            fo = class extends Mr {
                constructor(t, e) {
                    let r = new yh(t, {
                        props: e.buttonProps,
                        viewProps: e.viewProps
                    })
                        , s = new uo(t, {
                            blade: e.blade,
                            props: e.labelProps,
                            valueController: r
                        });
                    super({
                        blade: e.blade,
                        view: s.view,
                        viewProps: e.viewProps
                    }),
                        this.buttonController = r,
                        this.labelController = s
                }
                importState(t) {
                    return Jt(t, e => super.importState(e) && this.buttonController.importProps(e) && this.labelController.importProps(e), () => ({}), () => !0)
                }
                exportState() {
                    return te(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()))
                }
            }
            ,
            mo = class {
                constructor(t) {
                    let [e, r] = t.split("-")
                        , s = e.split(".");
                    this.major = parseInt(s[0], 10),
                        this.minor = parseInt(s[1], 10),
                        this.patch = parseInt(s[2], 10),
                        this.prerelease = r != null ? r : null
                }
                toString() {
                    let t = [this.major, this.minor, this.patch].join(".");
                    return this.prerelease !== null ? [t, this.prerelease].join("-") : t
                }
            }
            ,
            kr = new mo("2.0.5");
        n1 = Nt({
            id: "button",
            type: "blade",
            accept(i) {
                let t = ct(i, e => ({
                    title: e.required.string,
                    view: e.required.constant("button"),
                    label: e.optional.string
                }));
                return t ? {
                    params: t
                } : null
            },
            controller(i) {
                return new fo(i.document, {
                    blade: i.blade,
                    buttonProps: B.fromObject({
                        title: i.params.title
                    }),
                    labelProps: B.fromObject({
                        label: i.params.label
                    }),
                    viewProps: i.viewProps
                })
            },
            api(i) {
                return i.controller instanceof fo ? new bh(i.controller) : null
            }
        });
        xh = class {
            constructor(t, e) {
                this.onRackValueChange_ = this.onRackValueChange_.bind(this),
                    this.controller_ = t,
                    this.emitter_ = new pt,
                    this.pool_ = e,
                    this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_)
            }
            get children() {
                return this.controller_.rack.children.map(t => this.pool_.createApi(t))
            }
            addBinding(t, e, r) {
                let s = r != null ? r : {}
                    , n = this.controller_.element.ownerDocument
                    , o = this.pool_.createBinding(n, c1(t, e), s)
                    , a = this.pool_.createBindingApi(o);
                return this.add(a, s.index)
            }
            addFolder(t) {
                return a1(this, t)
            }
            addButton(t) {
                return o1(this, t)
            }
            addTab(t) {
                return l1(this, t)
            }
            add(t, e) {
                let r = t.controller;
                return this.controller_.rack.add(r, e),
                    t
            }
            remove(t) {
                this.controller_.rack.remove(t.controller)
            }
            addBlade(t) {
                let e = this.controller_.element.ownerDocument
                    , r = this.pool_.createBlade(e, t)
                    , s = this.pool_.createApi(r);
                return this.add(s, t.index)
            }
            on(t, e) {
                let r = e.bind(this);
                return this.emitter_.on(t, s => {
                    r(s)
                }
                    , {
                        key: e
                    }),
                    this
            }
            off(t, e) {
                return this.emitter_.off(t, e),
                    this
            }
            refresh() {
                this.children.forEach(t => {
                    h1(t) && t.refresh()
                }
                )
            }
            onRackValueChange_(t) {
                let e = t.bladeController
                    , r = this.pool_.createApi(e)
                    , s = lv(e.value) ? e.value.binding : null;
                this.emitter_.emit("change", new Wi(r, s ? s.target.read() : e.value.rawValue, t.options.last))
            }
        }
            ,
            us = class extends $e {
                constructor(t, e) {
                    super(t),
                        this.rackApi_ = new xh(t.rackController, e)
                }
                refresh() {
                    this.rackApi_.refresh()
                }
            }
            ,
            ds = class extends Mr {
                constructor(t) {
                    super({
                        blade: t.blade,
                        view: t.view,
                        viewProps: t.rackController.viewProps
                    }),
                        this.rackController = t.rackController
                }
                importState(t) {
                    return Jt(t, e => super.importState(e), e => ({
                        children: e.required.array(e.required.raw)
                    }), e => this.rackController.rack.children.every((r, s) => r.importState(e.children[s])))
                }
                exportState() {
                    return te(() => super.exportState(), {
                        children: this.rackController.rack.children.map(t => t.exportState())
                    })
                }
            }
            ;
        Ch = class {
            constructor(t) {
                this.emitter = new pt,
                    this.items_ = [],
                    this.cache_ = new Set,
                    this.onSubListAdd_ = this.onSubListAdd_.bind(this),
                    this.onSubListRemove_ = this.onSubListRemove_.bind(this),
                    this.extract_ = t
            }
            get items() {
                return this.items_
            }
            allItems() {
                return Array.from(this.cache_)
            }
            find(t) {
                for (let e of this.allItems())
                    if (t(e))
                        return e;
                return null
            }
            includes(t) {
                return this.cache_.has(t)
            }
            add(t, e) {
                if (this.includes(t))
                    throw Et.shouldNeverHappen();
                let r = e !== void 0 ? e : this.items_.length;
                this.items_.splice(r, 0, t),
                    this.cache_.add(t);
                let s = this.extract_(t);
                s && (s.emitter.on("add", this.onSubListAdd_),
                    s.emitter.on("remove", this.onSubListRemove_),
                    s.allItems().forEach(n => {
                        this.cache_.add(n)
                    }
                    )),
                    this.emitter.emit("add", {
                        index: r,
                        item: t,
                        root: this,
                        target: this
                    })
            }
            remove(t) {
                let e = this.items_.indexOf(t);
                if (e < 0)
                    return;
                this.items_.splice(e, 1),
                    this.cache_.delete(t);
                let r = this.extract_(t);
                r && (r.allItems().forEach(s => {
                    this.cache_.delete(s)
                }
                ),
                    r.emitter.off("add", this.onSubListAdd_),
                    r.emitter.off("remove", this.onSubListRemove_)),
                    this.emitter.emit("remove", {
                        index: e,
                        item: t,
                        root: this,
                        target: this
                    })
            }
            onSubListAdd_(t) {
                this.cache_.add(t.item),
                    this.emitter.emit("add", {
                        index: t.index,
                        item: t.item,
                        root: this,
                        target: t.target
                    })
            }
            onSubListRemove_(t) {
                this.cache_.delete(t.item),
                    this.emitter.emit("remove", {
                        index: t.index,
                        item: t.item,
                        root: this,
                        target: t.target
                    })
            }
        }
            ;
        Ph = class {
            constructor(t) {
                var e, r;
                this.emitter = new pt,
                    this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this),
                    this.onSetAdd_ = this.onSetAdd_.bind(this),
                    this.onSetRemove_ = this.onSetRemove_.bind(this),
                    this.onChildDispose_ = this.onChildDispose_.bind(this),
                    this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this),
                    this.onChildValueChange_ = this.onChildValueChange_.bind(this),
                    this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this),
                    this.onRackLayout_ = this.onRackLayout_.bind(this),
                    this.onRackValueChange_ = this.onRackValueChange_.bind(this),
                    this.blade_ = (e = t.blade) !== null && e !== void 0 ? e : null,
                    (r = this.blade_) === null || r === void 0 || r.value("positions").emitter.on("change", this.onBladePositionsChange_),
                    this.viewProps = t.viewProps,
                    this.bcSet_ = new Ch(d1),
                    this.bcSet_.emitter.on("add", this.onSetAdd_),
                    this.bcSet_.emitter.on("remove", this.onSetRemove_)
            }
            get children() {
                return this.bcSet_.items
            }
            add(t, e) {
                var r;
                (r = t.parent) === null || r === void 0 || r.remove(t),
                    t.parent = this,
                    this.bcSet_.add(t, e)
            }
            remove(t) {
                t.parent = null,
                    this.bcSet_.remove(t)
            }
            find(t) {
                return this.bcSet_.allItems().filter(t)
            }
            onSetAdd_(t) {
                this.updatePositions_();
                let e = t.target === t.root;
                if (this.emitter.emit("add", {
                    bladeController: t.item,
                    index: t.index,
                    root: e,
                    sender: this
                }),
                    !e)
                    return;
                let r = t.item;
                if (r.viewProps.emitter.on("change", this.onChildViewPropsChange_),
                    r.blade.value("positions").emitter.on("change", this.onChildPositionsChange_),
                    r.viewProps.handleDispose(this.onChildDispose_),
                    ji(r))
                    r.value.emitter.on("change", this.onChildValueChange_);
                else if (Eh(r)) {
                    let s = r.rackController.rack;
                    if (s) {
                        let n = s.emitter;
                        n.on("layout", this.onRackLayout_),
                            n.on("valuechange", this.onRackValueChange_)
                    }
                }
            }
            onSetRemove_(t) {
                this.updatePositions_();
                let e = t.target === t.root;
                if (this.emitter.emit("remove", {
                    bladeController: t.item,
                    root: e,
                    sender: this
                }),
                    !e)
                    return;
                let r = t.item;
                if (ji(r))
                    r.value.emitter.off("change", this.onChildValueChange_);
                else if (Eh(r)) {
                    let s = r.rackController.rack;
                    if (s) {
                        let n = s.emitter;
                        n.off("layout", this.onRackLayout_),
                            n.off("valuechange", this.onRackValueChange_)
                    }
                }
            }
            updatePositions_() {
                let t = this.bcSet_.items.filter(s => !s.viewProps.get("hidden"))
                    , e = t[0]
                    , r = t[t.length - 1];
                this.bcSet_.items.forEach(s => {
                    let n = [];
                    s === e && (n.push("first"),
                        (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && n.push("veryfirst")),
                        s === r && (n.push("last"),
                            (!this.blade_ || this.blade_.get("positions").includes("verylast")) && n.push("verylast")),
                        s.blade.set("positions", n)
                }
                )
            }
            onChildPositionsChange_() {
                this.updatePositions_(),
                    this.emitter.emit("layout", {
                        sender: this
                    })
            }
            onChildViewPropsChange_(t) {
                this.updatePositions_(),
                    this.emitter.emit("layout", {
                        sender: this
                    })
            }
            onChildDispose_() {
                this.bcSet_.items.filter(e => e.viewProps.get("disposed")).forEach(e => {
                    this.bcSet_.remove(e)
                }
                )
            }
            onChildValueChange_(t) {
                let e = u1(this.find(ji), t.sender);
                if (!e)
                    throw Et.alreadyDisposed();
                this.emitter.emit("valuechange", {
                    bladeController: e,
                    options: t.options,
                    sender: this
                })
            }
            onRackLayout_(t) {
                this.updatePositions_(),
                    this.emitter.emit("layout", {
                        sender: this
                    })
            }
            onRackValueChange_(t) {
                this.emitter.emit("valuechange", {
                    bladeController: t.bladeController,
                    options: t.options,
                    sender: this
                })
            }
            onBladePositionsChange_() {
                this.updatePositions_()
            }
        }
            ,
            ps = class {
                constructor(t) {
                    this.onRackAdd_ = this.onRackAdd_.bind(this),
                        this.onRackRemove_ = this.onRackRemove_.bind(this),
                        this.element = t.element,
                        this.viewProps = t.viewProps;
                    let e = new Ph({
                        blade: t.root ? void 0 : t.blade,
                        viewProps: t.viewProps
                    });
                    e.emitter.on("add", this.onRackAdd_),
                        e.emitter.on("remove", this.onRackRemove_),
                        this.rack = e,
                        this.viewProps.handleDispose(() => {
                            for (let r = this.rack.children.length - 1; r >= 0; r--)
                                this.rack.children[r].viewProps.set("disposed", !0)
                        }
                        )
                }
                onRackAdd_(t) {
                    t.root && hv(this.element, t.bladeController.view.element, t.index)
                }
                onRackRemove_(t) {
                    t.root && Rc(t.bladeController.view.element)
                }
            }
            ;
        fs = class i extends B {
            constructor(t) {
                super(t)
            }
            static create(t) {
                let e = {
                    completed: !0,
                    expanded: t,
                    expandedHeight: null,
                    shouldFixHeight: !1,
                    temporaryExpanded: null
                }
                    , r = B.createCore(e);
                return new i(r)
            }
            get styleExpanded() {
                var t;
                return (t = this.get("temporaryExpanded")) !== null && t !== void 0 ? t : this.get("expanded")
            }
            get styleHeight() {
                if (!this.styleExpanded)
                    return "0";
                let t = this.get("expandedHeight");
                return this.get("shouldFixHeight") && !Z(t) ? `${t}px` : "auto"
            }
            bindExpandedClass(t, e) {
                let r = () => {
                    this.styleExpanded ? t.classList.add(e) : t.classList.remove(e)
                }
                    ;
                Oe(this, "expanded", r),
                    Oe(this, "temporaryExpanded", r)
            }
            cleanUpTransition() {
                this.set("shouldFixHeight", !1),
                    this.set("expandedHeight", null),
                    this.set("completed", !0)
            }
        }
            ;
        vo = class extends us {
            constructor(t, e) {
                super(t, e),
                    this.emitter_ = new pt,
                    this.controller.foldable.value("expanded").emitter.on("change", r => {
                        this.emitter_.emit("fold", new uh(this, r.sender.rawValue))
                    }
                    ),
                    this.rackApi_.on("change", r => {
                        this.emitter_.emit("change", r)
                    }
                    )
            }
            get expanded() {
                return this.controller.foldable.get("expanded")
            }
            set expanded(t) {
                this.controller.foldable.set("expanded", t)
            }
            get title() {
                return this.controller.props.get("title")
            }
            set title(t) {
                this.controller.props.set("title", t)
            }
            get children() {
                return this.rackApi_.children
            }
            addBinding(t, e, r) {
                return this.rackApi_.addBinding(t, e, r)
            }
            addFolder(t) {
                return this.rackApi_.addFolder(t)
            }
            addButton(t) {
                return this.rackApi_.addButton(t)
            }
            addTab(t) {
                return this.rackApi_.addTab(t)
            }
            add(t, e) {
                return this.rackApi_.add(t, e)
            }
            remove(t) {
                this.rackApi_.remove(t)
            }
            addBlade(t) {
                return this.rackApi_.addBlade(t)
            }
            on(t, e) {
                let r = e.bind(this);
                return this.emitter_.on(t, s => {
                    r(s)
                }
                    , {
                        key: e
                    }),
                    this
            }
            off(t, e) {
                return this.emitter_.off(t, e),
                    this
            }
        }
            ,
            pv = H("cnt"),
            Mh = class {
                constructor(t, e) {
                    var r;
                    this.className_ = H((r = e.viewName) !== null && r !== void 0 ? r : "fld"),
                        this.element = t.createElement("div"),
                        this.element.classList.add(this.className_(), pv()),
                        e.viewProps.bindClassModifiers(this.element),
                        this.foldable_ = e.foldable,
                        this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")),
                        Oe(this.foldable_, "completed", Ar(this.element, this.className_(void 0, "cpl")));
                    let s = t.createElement("button");
                    s.classList.add(this.className_("b")),
                        Oe(e.props, "title", h => {
                            Z(h) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"))
                        }
                        ),
                        e.viewProps.bindDisabled(s),
                        this.element.appendChild(s),
                        this.buttonElement = s;
                    let n = t.createElement("div");
                    n.classList.add(this.className_("i")),
                        this.element.appendChild(n);
                    let o = t.createElement("div");
                    o.classList.add(this.className_("t")),
                        Fc(e.props.value("title"), o),
                        this.buttonElement.appendChild(o),
                        this.titleElement = o;
                    let a = t.createElement("div");
                    a.classList.add(this.className_("m")),
                        this.buttonElement.appendChild(a);
                    let l = t.createElement("div");
                    l.classList.add(this.className_("c")),
                        this.element.appendChild(l),
                        this.containerElement = l
                }
            }
            ,
            ms = class extends ds {
                constructor(t, e) {
                    var r;
                    let s = fs.create((r = e.expanded) !== null && r !== void 0 ? r : !0)
                        , n = new Mh(t, {
                            foldable: s,
                            props: e.props,
                            viewName: e.root ? "rot" : void 0,
                            viewProps: e.viewProps
                        });
                    super(Object.assign(Object.assign({}, e), {
                        rackController: new ps({
                            blade: e.blade,
                            element: n.containerElement,
                            root: e.root,
                            viewProps: e.viewProps
                        }),
                        view: n
                    })),
                        this.onTitleClick_ = this.onTitleClick_.bind(this),
                        this.props = e.props,
                        this.foldable = s,
                        Ic(this.foldable, this.view.containerElement),
                        this.rackController.rack.emitter.on("add", () => {
                            this.foldable.cleanUpTransition()
                        }
                        ),
                        this.rackController.rack.emitter.on("remove", () => {
                            this.foldable.cleanUpTransition()
                        }
                        ),
                        this.view.buttonElement.addEventListener("click", this.onTitleClick_)
                }
                get document() {
                    return this.view.element.ownerDocument
                }
                importState(t) {
                    return Jt(t, e => super.importState(e), e => ({
                        expanded: e.required.boolean,
                        title: e.optional.string
                    }), e => (this.foldable.set("expanded", e.expanded),
                        this.props.set("title", e.title),
                        !0))
                }
                exportState() {
                    return te(() => super.exportState(), {
                        expanded: this.foldable.get("expanded"),
                        title: this.props.get("title")
                    })
                }
                onTitleClick_() {
                    this.foldable.set("expanded", !this.foldable.get("expanded"))
                }
            }
            ,
            f1 = Nt({
                id: "folder",
                type: "blade",
                accept(i) {
                    let t = ct(i, e => ({
                        title: e.required.string,
                        view: e.required.constant("folder"),
                        expanded: e.optional.boolean
                    }));
                    return t ? {
                        params: t
                    } : null
                },
                controller(i) {
                    return new ms(i.document, {
                        blade: i.blade,
                        expanded: i.params.expanded,
                        props: B.fromObject({
                            title: i.params.title
                        }),
                        viewProps: i.viewProps
                    })
                },
                api(i) {
                    return i.controller instanceof ms ? new vo(i.controller, i.pool) : null
                }
            }),
            m1 = H("");
        Ye = class i extends B {
            constructor(t) {
                var e;
                super(t),
                    this.onDisabledChange_ = this.onDisabledChange_.bind(this),
                    this.onParentChange_ = this.onParentChange_.bind(this),
                    this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this),
                    [this.globalDisabled_, this.setGlobalDisabled_] = dw(st(this.getGlobalDisabled_())),
                    this.value("disabled").emitter.on("change", this.onDisabledChange_),
                    this.value("parent").emitter.on("change", this.onParentChange_),
                    (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_)
            }
            static create(t) {
                var e, r, s;
                let n = t != null ? t : {};
                return new i(B.createCore({
                    disabled: (e = n.disabled) !== null && e !== void 0 ? e : !1,
                    disposed: !1,
                    hidden: (r = n.hidden) !== null && r !== void 0 ? r : !1,
                    parent: (s = n.parent) !== null && s !== void 0 ? s : null
                }))
            }
            get globalDisabled() {
                return this.globalDisabled_
            }
            bindClassModifiers(t) {
                He(this.globalDisabled_, Rm(t, "disabled")),
                    Oe(this, "hidden", Rm(t, "hidden"))
            }
            bindDisabled(t) {
                He(this.globalDisabled_, e => {
                    t.disabled = e
                }
                )
            }
            bindTabIndex(t) {
                He(this.globalDisabled_, e => {
                    t.tabIndex = e ? -1 : 0
                }
                )
            }
            handleDispose(t) {
                this.value("disposed").emitter.on("change", e => {
                    e && t()
                }
                )
            }
            importState(t) {
                this.set("disabled", t.disabled),
                    this.set("hidden", t.hidden)
            }
            exportState() {
                return {
                    disabled: this.get("disabled"),
                    hidden: this.get("hidden")
                }
            }
            getGlobalDisabled_() {
                let t = this.get("parent");
                return (t ? t.globalDisabled.rawValue : !1) || this.get("disabled")
            }
            updateGlobalDisabled_() {
                this.setGlobalDisabled_(this.getGlobalDisabled_())
            }
            onDisabledChange_() {
                this.updateGlobalDisabled_()
            }
            onParentGlobalDisabledChange_() {
                this.updateGlobalDisabled_()
            }
            onParentChange_(t) {
                var e;
                let r = t.previousRawValue;
                r == null || r.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_),
                    (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_),
                    this.updateGlobalDisabled_()
            }
        }
            ,
            Fm = H("tbp"),
            Sh = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Fm()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("div");
                    r.classList.add(Fm("c")),
                        this.element.appendChild(r),
                        this.containerElement = r
                }
            }
            ,
            os = H("tbi"),
            Th = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(os()),
                        e.viewProps.bindClassModifiers(this.element),
                        Oe(e.props, "selected", n => {
                            n ? this.element.classList.add(os(void 0, "sel")) : this.element.classList.remove(os(void 0, "sel"))
                        }
                        );
                    let r = t.createElement("button");
                    r.classList.add(os("b")),
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.buttonElement = r;
                    let s = t.createElement("div");
                    s.classList.add(os("t")),
                        Fc(e.props.value("title"), s),
                        this.buttonElement.appendChild(s),
                        this.titleElement = s
                }
            }
            ,
            Ah = class {
                constructor(t, e) {
                    this.emitter = new pt,
                        this.onClick_ = this.onClick_.bind(this),
                        this.props = e.props,
                        this.viewProps = e.viewProps,
                        this.view = new Th(t, {
                            props: e.props,
                            viewProps: e.viewProps
                        }),
                        this.view.buttonElement.addEventListener("click", this.onClick_)
                }
                onClick_() {
                    this.emitter.emit("click", {
                        sender: this
                    })
                }
            }
            ,
            vs = class extends ds {
                constructor(t, e) {
                    let r = new Sh(t, {
                        viewProps: e.viewProps
                    });
                    super(Object.assign(Object.assign({}, e), {
                        rackController: new ps({
                            blade: e.blade,
                            element: r.containerElement,
                            viewProps: e.viewProps
                        }),
                        view: r
                    })),
                        this.onItemClick_ = this.onItemClick_.bind(this),
                        this.ic_ = new Ah(t, {
                            props: e.itemProps,
                            viewProps: Ye.create()
                        }),
                        this.ic_.emitter.on("click", this.onItemClick_),
                        this.props = e.props,
                        Oe(this.props, "selected", s => {
                            this.itemController.props.set("selected", s),
                                this.viewProps.set("hidden", !s)
                        }
                        )
                }
                get itemController() {
                    return this.ic_
                }
                importState(t) {
                    return Jt(t, e => super.importState(e), e => ({
                        selected: e.required.boolean,
                        title: e.required.string
                    }), e => (this.ic_.props.set("selected", e.selected),
                        this.ic_.props.set("title", e.title),
                        !0))
                }
                exportState() {
                    return te(() => super.exportState(), {
                        selected: this.ic_.props.get("selected"),
                        title: this.ic_.props.get("title")
                    })
                }
                onItemClick_() {
                    this.props.set("selected", !0)
                }
            }
            ,
            kh = class extends us {
                constructor(t, e) {
                    super(t, e),
                        this.emitter_ = new pt,
                        this.onSelect_ = this.onSelect_.bind(this),
                        this.pool_ = e,
                        this.rackApi_.on("change", r => {
                            this.emitter_.emit("change", r)
                        }
                        ),
                        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_)
                }
                get pages() {
                    return this.rackApi_.children
                }
                addPage(t) {
                    let e = this.controller.view.element.ownerDocument
                        , r = new vs(e, {
                            blade: Or(),
                            itemProps: B.fromObject({
                                selected: !1,
                                title: t.title
                            }),
                            props: B.fromObject({
                                selected: !1
                            }),
                            viewProps: Ye.create()
                        })
                        , s = this.pool_.createApi(r);
                    return this.rackApi_.add(s, t.index)
                }
                removePage(t) {
                    this.rackApi_.remove(this.rackApi_.children[t])
                }
                on(t, e) {
                    let r = e.bind(this);
                    return this.emitter_.on(t, s => {
                        r(s)
                    }
                        , {
                            key: e
                        }),
                        this
                }
                off(t, e) {
                    return this.emitter_.off(t, e),
                        this
                }
                onSelect_(t) {
                    this.emitter_.emit("select", new dh(this, t.rawValue))
                }
            }
            ,
            Oh = class extends us {
                get title() {
                    var t;
                    return (t = this.controller.itemController.props.get("title")) !== null && t !== void 0 ? t : ""
                }
                set title(t) {
                    this.controller.itemController.props.set("title", t)
                }
                get selected() {
                    return this.controller.props.get("selected")
                }
                set selected(t) {
                    this.controller.props.set("selected", t)
                }
                get children() {
                    return this.rackApi_.children
                }
                addButton(t) {
                    return this.rackApi_.addButton(t)
                }
                addFolder(t) {
                    return this.rackApi_.addFolder(t)
                }
                addTab(t) {
                    return this.rackApi_.addTab(t)
                }
                add(t, e) {
                    this.rackApi_.add(t, e)
                }
                remove(t) {
                    this.rackApi_.remove(t)
                }
                addBinding(t, e, r) {
                    return this.rackApi_.addBinding(t, e, r)
                }
                addBlade(t) {
                    return this.rackApi_.addBlade(t)
                }
            }
            ,
            Im = -1,
            Lh = class {
                constructor() {
                    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this),
                        this.empty = st(!0),
                        this.selectedIndex = st(Im),
                        this.items_ = []
                }
                add(t, e) {
                    let r = e != null ? e : this.items_.length;
                    this.items_.splice(r, 0, t),
                        t.emitter.on("change", this.onItemSelectedChange_),
                        this.keepSelection_()
                }
                remove(t) {
                    let e = this.items_.indexOf(t);
                    e < 0 || (this.items_.splice(e, 1),
                        t.emitter.off("change", this.onItemSelectedChange_),
                        this.keepSelection_())
                }
                keepSelection_() {
                    if (this.items_.length === 0) {
                        this.selectedIndex.rawValue = Im,
                            this.empty.rawValue = !0;
                        return
                    }
                    let t = this.items_.findIndex(e => e.rawValue);
                    t < 0 ? (this.items_.forEach((e, r) => {
                        e.rawValue = r === 0
                    }
                    ),
                        this.selectedIndex.rawValue = 0) : (this.items_.forEach((e, r) => {
                            e.rawValue = r === t
                        }
                        ),
                            this.selectedIndex.rawValue = t),
                        this.empty.rawValue = !1
                }
                onItemSelectedChange_(t) {
                    if (t.rawValue) {
                        let e = this.items_.findIndex(r => r === t.sender);
                        this.items_.forEach((r, s) => {
                            r.rawValue = s === e
                        }
                        ),
                            this.selectedIndex.rawValue = e
                    } else
                        this.keepSelection_()
                }
            }
            ,
            as = H("tab"),
            Rh = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(as(), pv()),
                        e.viewProps.bindClassModifiers(this.element),
                        He(e.empty, Ar(this.element, as(void 0, "nop")));
                    let r = t.createElement("div");
                    r.classList.add(as("t")),
                        this.element.appendChild(r),
                        this.itemsElement = r;
                    let s = t.createElement("div");
                    s.classList.add(as("i")),
                        this.element.appendChild(s);
                    let n = t.createElement("div");
                    n.classList.add(as("c")),
                        this.element.appendChild(n),
                        this.contentsElement = n
                }
            }
            ,
            go = class extends ds {
                constructor(t, e) {
                    let r = new Lh
                        , s = new Rh(t, {
                            empty: r.empty,
                            viewProps: e.viewProps
                        });
                    super({
                        blade: e.blade,
                        rackController: new ps({
                            blade: e.blade,
                            element: s.contentsElement,
                            viewProps: e.viewProps
                        }),
                        view: s
                    }),
                        this.onRackAdd_ = this.onRackAdd_.bind(this),
                        this.onRackRemove_ = this.onRackRemove_.bind(this);
                    let n = this.rackController.rack;
                    n.emitter.on("add", this.onRackAdd_),
                        n.emitter.on("remove", this.onRackRemove_),
                        this.tab = r
                }
                add(t, e) {
                    this.rackController.rack.add(t, e)
                }
                remove(t) {
                    this.rackController.rack.remove(this.rackController.rack.children[t])
                }
                onRackAdd_(t) {
                    if (!t.root)
                        return;
                    let e = t.bladeController;
                    hv(this.view.itemsElement, e.itemController.view.element, t.index),
                        e.itemController.viewProps.set("parent", this.viewProps),
                        this.tab.add(e.props.value("selected"))
                }
                onRackRemove_(t) {
                    if (!t.root)
                        return;
                    let e = t.bladeController;
                    Rc(e.itemController.view.element),
                        e.itemController.viewProps.set("parent", null),
                        this.tab.remove(e.props.value("selected"))
                }
            }
            ,
            fv = Nt({
                id: "tab",
                type: "blade",
                accept(i) {
                    let t = ct(i, e => ({
                        pages: e.required.array(e.required.object({
                            title: e.required.string
                        })),
                        view: e.required.constant("tab")
                    }));
                    return !t || t.pages.length === 0 ? null : {
                        params: t
                    }
                },
                controller(i) {
                    let t = new go(i.document, {
                        blade: i.blade,
                        viewProps: i.viewProps
                    });
                    return i.params.pages.forEach(e => {
                        let r = new vs(i.document, {
                            blade: Or(),
                            itemProps: B.fromObject({
                                selected: !1,
                                title: e.title
                            }),
                            props: B.fromObject({
                                selected: !1
                            }),
                            viewProps: Ye.create()
                        });
                        t.add(r)
                    }
                    ),
                        t
                },
                api(i) {
                    return i.controller instanceof go ? new kh(i.controller, i.pool) : i.controller instanceof vs ? new Oh(i.controller, i.pool) : null
                }
            });
        gs = class extends $i {
            get options() {
                return this.controller.valueController.props.get("options")
            }
            set options(t) {
                this.controller.valueController.props.set("options", t)
            }
        }
            ,
            Fh = class {
                constructor() {
                    this.disabled = !1,
                        this.emitter = new pt
                }
                dispose() { }
                tick() {
                    this.disabled || this.emitter.emit("tick", {
                        sender: this
                    })
                }
            }
            ,
            Ih = class {
                constructor(t, e) {
                    this.disabled_ = !1,
                        this.timerId_ = null,
                        this.onTick_ = this.onTick_.bind(this),
                        this.doc_ = t,
                        this.emitter = new pt,
                        this.interval_ = e,
                        this.setTimer_()
                }
                get disabled() {
                    return this.disabled_
                }
                set disabled(t) {
                    this.disabled_ = t,
                        this.disabled_ ? this.clearTimer_() : this.setTimer_()
                }
                dispose() {
                    this.clearTimer_()
                }
                clearTimer_() {
                    if (this.timerId_ === null)
                        return;
                    let t = this.doc_.defaultView;
                    t && t.clearInterval(this.timerId_),
                        this.timerId_ = null
                }
                setTimer_() {
                    if (this.clearTimer_(),
                        this.interval_ <= 0)
                        return;
                    let t = this.doc_.defaultView;
                    t && (this.timerId_ = t.setInterval(this.onTick_, this.interval_))
                }
                onTick_() {
                    this.disabled_ || this.emitter.emit("tick", {
                        sender: this
                    })
                }
            }
            ,
            Gi = class {
                constructor(t) {
                    this.constraints = t
                }
                constrain(t) {
                    return this.constraints.reduce((e, r) => r.constrain(e), t)
                }
            }
            ;
        Yi = class {
            constructor(t) {
                this.values = B.fromObject({
                    options: t
                })
            }
            constrain(t) {
                let e = this.values.get("options");
                return e.length === 0 || e.filter(s => s.value === t).length > 0 ? t : e[0].value
            }
        }
            ;
        Xl = H("lst"),
            zh = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        this.props_ = e.props,
                        this.element = t.createElement("div"),
                        this.element.classList.add(Xl()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("select");
                    r.classList.add(Xl("s")),
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.selectElement = r;
                    let s = t.createElement("div");
                    s.classList.add(Xl("m")),
                        s.appendChild(Co(t, "dropdown")),
                        this.element.appendChild(s),
                        e.value.emitter.on("change", this.onValueChange_),
                        this.value_ = e.value,
                        Oe(this.props_, "options", n => {
                            cv(this.selectElement),
                                n.forEach(o => {
                                    let a = t.createElement("option");
                                    a.textContent = o.text,
                                        this.selectElement.appendChild(a)
                                }
                                ),
                                this.update_()
                        }
                        )
                }
                update_() {
                    let t = this.props_.get("options").map(e => e.value);
                    this.selectElement.selectedIndex = t.indexOf(this.value_.rawValue)
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            Le = class {
                constructor(t, e) {
                    this.onSelectChange_ = this.onSelectChange_.bind(this),
                        this.props = e.props,
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new zh(t, {
                            props: this.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view.selectElement.addEventListener("change", this.onSelectChange_)
                }
                onSelectChange_(t) {
                    let e = t.currentTarget;
                    this.value.rawValue = this.props.get("options")[e.selectedIndex].value
                }
                importProps(t) {
                    return Jt(t, null, e => ({
                        options: e.required.custom(Ms)
                    }), e => (this.props.set("options", zc(e.options)),
                        !0))
                }
                exportProps() {
                    return te(null, {
                        options: this.props.get("options")
                    })
                }
            }
            ,
            zm = H("pop"),
            Vh = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(zm()),
                        e.viewProps.bindClassModifiers(this.element),
                        He(e.shows, Ar(this.element, zm(void 0, "v")))
                }
            }
            ,
            bo = class {
                constructor(t, e) {
                    this.shows = st(!1),
                        this.viewProps = e.viewProps,
                        this.view = new Vh(t, {
                            shows: this.shows,
                            viewProps: this.viewProps
                        })
                }
            }
            ,
            Vm = H("txt"),
            Dh = class {
                constructor(t, e) {
                    this.onChange_ = this.onChange_.bind(this),
                        this.element = t.createElement("div"),
                        this.element.classList.add(Vm()),
                        e.viewProps.bindClassModifiers(this.element),
                        this.props_ = e.props,
                        this.props_.emitter.on("change", this.onChange_);
                    let r = t.createElement("input");
                    r.classList.add(Vm("i")),
                        r.type = "text",
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.inputElement = r,
                        e.value.emitter.on("change", this.onChange_),
                        this.value_ = e.value,
                        this.refresh()
                }
                refresh() {
                    let t = this.props_.get("formatter");
                    this.inputElement.value = t(this.value_.rawValue)
                }
                onChange_() {
                    this.refresh()
                }
            }
            ,
            Xi = class {
                constructor(t, e) {
                    this.onInputChange_ = this.onInputChange_.bind(this),
                        this.parser_ = e.parser,
                        this.props = e.props,
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new Dh(t, {
                            props: e.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view.inputElement.addEventListener("change", this.onInputChange_)
                }
                onInputChange_(t) {
                    let r = t.currentTarget.value
                        , s = this.parser_(r);
                    Z(s) || (this.value.rawValue = s),
                        this.view.refresh()
                }
            }
            ;
        b1 = Yt(0);
        Ke = class {
            constructor(t) {
                this.lastTouch_ = null,
                    this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this),
                    this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this),
                    this.onMouseDown_ = this.onMouseDown_.bind(this),
                    this.onTouchEnd_ = this.onTouchEnd_.bind(this),
                    this.onTouchMove_ = this.onTouchMove_.bind(this),
                    this.onTouchStart_ = this.onTouchStart_.bind(this),
                    this.elem_ = t,
                    this.emitter = new pt,
                    t.addEventListener("touchstart", this.onTouchStart_, {
                        passive: !1
                    }),
                    t.addEventListener("touchmove", this.onTouchMove_, {
                        passive: !0
                    }),
                    t.addEventListener("touchend", this.onTouchEnd_),
                    t.addEventListener("mousedown", this.onMouseDown_)
            }
            computePosition_(t) {
                let e = this.elem_.getBoundingClientRect();
                return {
                    bounds: {
                        width: e.width,
                        height: e.height
                    },
                    point: t ? {
                        x: t.x,
                        y: t.y
                    } : null
                }
            }
            onMouseDown_(t) {
                var e;
                t.preventDefault(),
                    (e = t.currentTarget) === null || e === void 0 || e.focus();
                let r = this.elem_.ownerDocument;
                r.addEventListener("mousemove", this.onDocumentMouseMove_),
                    r.addEventListener("mouseup", this.onDocumentMouseUp_),
                    this.emitter.emit("down", {
                        altKey: t.altKey,
                        data: this.computePosition_(Kl(t, this.elem_)),
                        sender: this,
                        shiftKey: t.shiftKey
                    })
            }
            onDocumentMouseMove_(t) {
                this.emitter.emit("move", {
                    altKey: t.altKey,
                    data: this.computePosition_(Kl(t, this.elem_)),
                    sender: this,
                    shiftKey: t.shiftKey
                })
            }
            onDocumentMouseUp_(t) {
                let e = this.elem_.ownerDocument;
                e.removeEventListener("mousemove", this.onDocumentMouseMove_),
                    e.removeEventListener("mouseup", this.onDocumentMouseUp_),
                    this.emitter.emit("up", {
                        altKey: t.altKey,
                        data: this.computePosition_(Kl(t, this.elem_)),
                        sender: this,
                        shiftKey: t.shiftKey
                    })
            }
            onTouchStart_(t) {
                t.preventDefault();
                let e = t.targetTouches.item(0)
                    , r = this.elem_.getBoundingClientRect();
                this.emitter.emit("down", {
                    altKey: t.altKey,
                    data: this.computePosition_(e ? {
                        x: e.clientX - r.left,
                        y: e.clientY - r.top
                    } : void 0),
                    sender: this,
                    shiftKey: t.shiftKey
                }),
                    this.lastTouch_ = e
            }
            onTouchMove_(t) {
                let e = t.targetTouches.item(0)
                    , r = this.elem_.getBoundingClientRect();
                this.emitter.emit("move", {
                    altKey: t.altKey,
                    data: this.computePosition_(e ? {
                        x: e.clientX - r.left,
                        y: e.clientY - r.top
                    } : void 0),
                    sender: this,
                    shiftKey: t.shiftKey
                }),
                    this.lastTouch_ = e
            }
            onTouchEnd_(t) {
                var e;
                let r = (e = t.targetTouches.item(0)) !== null && e !== void 0 ? e : this.lastTouch_
                    , s = this.elem_.getBoundingClientRect();
                this.emitter.emit("up", {
                    altKey: t.altKey,
                    data: this.computePosition_(r ? {
                        x: r.clientX - s.left,
                        y: r.clientY - s.top
                    } : void 0),
                    sender: this,
                    shiftKey: t.shiftKey
                })
            }
        }
            ,
            ce = H("txt"),
            Bh = class {
                constructor(t, e) {
                    this.onChange_ = this.onChange_.bind(this),
                        this.props_ = e.props,
                        this.props_.emitter.on("change", this.onChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(ce(), ce(void 0, "num")),
                        e.arrayPosition && this.element.classList.add(ce(void 0, e.arrayPosition)),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("input");
                    r.classList.add(ce("i")),
                        r.type = "text",
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.inputElement = r,
                        this.onDraggingChange_ = this.onDraggingChange_.bind(this),
                        this.dragging_ = e.dragging,
                        this.dragging_.emitter.on("change", this.onDraggingChange_),
                        this.element.classList.add(ce()),
                        this.inputElement.classList.add(ce("i"));
                    let s = t.createElement("div");
                    s.classList.add(ce("k")),
                        this.element.appendChild(s),
                        this.knobElement = s;
                    let n = t.createElementNS(Ae, "svg");
                    n.classList.add(ce("g")),
                        this.knobElement.appendChild(n);
                    let o = t.createElementNS(Ae, "path");
                    o.classList.add(ce("gb")),
                        n.appendChild(o),
                        this.guideBodyElem_ = o;
                    let a = t.createElementNS(Ae, "path");
                    a.classList.add(ce("gh")),
                        n.appendChild(a),
                        this.guideHeadElem_ = a;
                    let l = t.createElement("div");
                    l.classList.add(H("tt")()),
                        this.knobElement.appendChild(l),
                        this.tooltipElem_ = l,
                        e.value.emitter.on("change", this.onChange_),
                        this.value = e.value,
                        this.refresh()
                }
                onDraggingChange_(t) {
                    if (t.rawValue === null) {
                        this.element.classList.remove(ce(void 0, "drg"));
                        return
                    }
                    this.element.classList.add(ce(void 0, "drg"));
                    let e = t.rawValue / this.props_.get("pointerScale")
                        , r = e + (e > 0 ? -1 : e < 0 ? 1 : 0)
                        , s = wt(-r, -4, 4);
                    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${r + s},0 L${r},4 L${r + s},8`, `M ${e},-1 L${e},9`].join(" ")),
                        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${e},4`);
                    let n = this.props_.get("formatter");
                    this.tooltipElem_.textContent = n(this.value.rawValue),
                        this.tooltipElem_.style.left = `${e}px`
                }
                refresh() {
                    let t = this.props_.get("formatter");
                    this.inputElement.value = t(this.value.rawValue)
                }
                onChange_() {
                    this.refresh()
                }
            }
            ,
            Ki = class {
                constructor(t, e) {
                    var r;
                    this.originRawValue_ = 0,
                        this.onInputChange_ = this.onInputChange_.bind(this),
                        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this),
                        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this),
                        this.onPointerDown_ = this.onPointerDown_.bind(this),
                        this.onPointerMove_ = this.onPointerMove_.bind(this),
                        this.onPointerUp_ = this.onPointerUp_.bind(this),
                        this.parser_ = e.parser,
                        this.props = e.props,
                        this.sliderProps_ = (r = e.sliderProps) !== null && r !== void 0 ? r : null,
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.dragging_ = st(null),
                        this.view = new Bh(t, {
                            arrayPosition: e.arrayPosition,
                            dragging: this.dragging_,
                            props: this.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view.inputElement.addEventListener("change", this.onInputChange_),
                        this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_),
                        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
                    let s = new Ke(this.view.knobElement);
                    s.emitter.on("down", this.onPointerDown_),
                        s.emitter.on("move", this.onPointerMove_),
                        s.emitter.on("up", this.onPointerUp_)
                }
                constrainValue_(t) {
                    var e, r;
                    let s = (e = this.sliderProps_) === null || e === void 0 ? void 0 : e.get("min")
                        , n = (r = this.sliderProps_) === null || r === void 0 ? void 0 : r.get("max")
                        , o = t;
                    return s !== void 0 && (o = Math.max(o, s)),
                        n !== void 0 && (o = Math.min(o, n)),
                        o
                }
                onInputChange_(t) {
                    let r = t.currentTarget.value
                        , s = this.parser_(r);
                    Z(s) || (this.value.rawValue = this.constrainValue_(s)),
                        this.view.refresh()
                }
                onInputKeyDown_(t) {
                    let e = Gt(this.props.get("keyScale"), _s(t));
                    e !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + e), {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onInputKeyUp_(t) {
                    Gt(this.props.get("keyScale"), _s(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                        forceEmit: !0,
                        last: !0
                    })
                }
                onPointerDown_() {
                    this.originRawValue_ = this.value.rawValue,
                        this.dragging_.rawValue = 0
                }
                computeDraggingValue_(t) {
                    if (!t.point)
                        return null;
                    let e = t.point.x - t.bounds.width / 2;
                    return this.constrainValue_(this.originRawValue_ + e * this.props.get("pointerScale"))
                }
                onPointerMove_(t) {
                    let e = this.computeDraggingValue_(t.data);
                    e !== null && (this.value.setRawValue(e, {
                        forceEmit: !1,
                        last: !1
                    }),
                        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_)
                }
                onPointerUp_(t) {
                    let e = this.computeDraggingValue_(t.data);
                    e !== null && (this.value.setRawValue(e, {
                        forceEmit: !0,
                        last: !0
                    }),
                        this.dragging_.rawValue = null)
                }
            }
            ,
            Ql = H("sld"),
            Uh = class {
                constructor(t, e) {
                    this.onChange_ = this.onChange_.bind(this),
                        this.props_ = e.props,
                        this.props_.emitter.on("change", this.onChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(Ql()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("div");
                    r.classList.add(Ql("t")),
                        e.viewProps.bindTabIndex(r),
                        this.element.appendChild(r),
                        this.trackElement = r;
                    let s = t.createElement("div");
                    s.classList.add(Ql("k")),
                        this.trackElement.appendChild(s),
                        this.knobElement = s,
                        e.value.emitter.on("change", this.onChange_),
                        this.value = e.value,
                        this.update_()
                }
                update_() {
                    let t = wt(G(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
                    this.knobElement.style.width = `${t}%`
                }
                onChange_() {
                    this.update_()
                }
            }
            ,
            jh = class {
                constructor(t, e) {
                    this.onKeyDown_ = this.onKeyDown_.bind(this),
                        this.onKeyUp_ = this.onKeyUp_.bind(this),
                        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this),
                        this.onPointerUp_ = this.onPointerUp_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.props = e.props,
                        this.view = new Uh(t, {
                            props: this.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.ptHandler_ = new Ke(this.view.trackElement),
                        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_),
                        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_),
                        this.ptHandler_.emitter.on("up", this.onPointerUp_),
                        this.view.trackElement.addEventListener("keydown", this.onKeyDown_),
                        this.view.trackElement.addEventListener("keyup", this.onKeyUp_)
                }
                handlePointerEvent_(t, e) {
                    t.point && this.value.setRawValue(G(wt(t.point.x, 0, t.bounds.width), 0, t.bounds.width, this.props.get("min"), this.props.get("max")), e)
                }
                onPointerDownOrMove_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerUp_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !0,
                        last: !0
                    })
                }
                onKeyDown_(t) {
                    let e = Gt(this.props.get("keyScale"), Xe(t));
                    e !== 0 && this.value.setRawValue(this.value.rawValue + e, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onKeyUp_(t) {
                    Gt(this.props.get("keyScale"), Xe(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                        forceEmit: !0,
                        last: !0
                    })
                }
            }
            ,
            Zl = H("sldtxt"),
            qh = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Zl());
                    let r = t.createElement("div");
                    r.classList.add(Zl("s")),
                        this.sliderView_ = e.sliderView,
                        r.appendChild(this.sliderView_.element),
                        this.element.appendChild(r);
                    let s = t.createElement("div");
                    s.classList.add(Zl("t")),
                        this.textView_ = e.textView,
                        s.appendChild(this.textView_.element),
                        this.element.appendChild(s)
                }
            }
            ,
            Sr = class {
                constructor(t, e) {
                    this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.sliderC_ = new jh(t, {
                            props: e.sliderProps,
                            value: e.value,
                            viewProps: this.viewProps
                        }),
                        this.textC_ = new Ki(t, {
                            parser: e.parser,
                            props: e.textProps,
                            sliderProps: e.sliderProps,
                            value: e.value,
                            viewProps: e.viewProps
                        }),
                        this.view = new qh(t, {
                            sliderView: this.sliderC_.view,
                            textView: this.textC_.view
                        })
                }
                get sliderController() {
                    return this.sliderC_
                }
                get textController() {
                    return this.textC_
                }
                importProps(t) {
                    return Jt(t, null, e => ({
                        max: e.required.number,
                        min: e.required.number
                    }), e => {
                        let r = this.sliderC_.props;
                        return r.set("max", e.max),
                            r.set("min", e.min),
                            !0
                    }
                    )
                }
                exportProps() {
                    let t = this.sliderC_.props;
                    return te(null, {
                        max: t.get("max"),
                        min: t.get("min")
                    })
                }
            }
            ;
        y1 = {
            containerUnitSize: "cnt-usz"
        };
        no = H("ckb"),
            Hh = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        this.element = t.createElement("div"),
                        this.element.classList.add(no()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("label");
                    r.classList.add(no("l")),
                        this.element.appendChild(r),
                        this.labelElement = r;
                    let s = t.createElement("input");
                    s.classList.add(no("i")),
                        s.type = "checkbox",
                        this.labelElement.appendChild(s),
                        this.inputElement = s,
                        e.viewProps.bindDisabled(this.inputElement);
                    let n = t.createElement("div");
                    n.classList.add(no("w")),
                        this.labelElement.appendChild(n);
                    let o = Co(t, "check");
                    n.appendChild(o),
                        e.value.emitter.on("change", this.onValueChange_),
                        this.value = e.value,
                        this.update_()
                }
                update_() {
                    this.inputElement.checked = this.value.rawValue
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            Wh = class {
                constructor(t, e) {
                    this.onInputChange_ = this.onInputChange_.bind(this),
                        this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new Hh(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view.inputElement.addEventListener("change", this.onInputChange_),
                        this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_)
                }
                onInputChange_(t) {
                    let e = t.currentTarget;
                    this.value.rawValue = e.checked,
                        t.preventDefault(),
                        t.stopPropagation()
                }
                onLabelMouseDown_(t) {
                    t.preventDefault()
                }
            }
            ;
        C1 = Nt({
            id: "input-bool",
            type: "input",
            accept: (i, t) => {
                if (typeof i != "boolean")
                    return null;
                let e = ct(t, r => ({
                    options: r.optional.custom(Ms),
                    readonly: r.optional.constant(!1)
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: i => mv,
                constraint: i => E1(i.params),
                writer: i => Ss
            },
            controller: i => {
                let t = i.document
                    , e = i.value
                    , r = i.constraint
                    , s = r && _o(r, Yi);
                return s ? new Le(t, {
                    props: new B({
                        options: s.values.value("options")
                    }),
                    value: e,
                    viewProps: i.viewProps
                }) : new Wh(t, {
                    value: e,
                    viewProps: i.viewProps
                })
            }
            ,
            api(i) {
                return typeof i.controller.value.rawValue != "boolean" ? null : i.controller.valueController instanceof Le ? new gs(i.controller) : null
            }
        }),
            Ui = H("col"),
            $h = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Ui()),
                        e.foldable.bindExpandedClass(this.element, Ui(void 0, "expanded")),
                        Oe(e.foldable, "completed", Ar(this.element, Ui(void 0, "cpl")));
                    let r = t.createElement("div");
                    r.classList.add(Ui("h")),
                        this.element.appendChild(r);
                    let s = t.createElement("div");
                    s.classList.add(Ui("s")),
                        r.appendChild(s),
                        this.swatchElement = s;
                    let n = t.createElement("div");
                    if (n.classList.add(Ui("t")),
                        r.appendChild(n),
                        this.textElement = n,
                        e.pickerLayout === "inline") {
                        let o = t.createElement("div");
                        o.classList.add(Ui("p")),
                            this.element.appendChild(o),
                            this.pickerElement = o
                    } else
                        this.pickerElement = null
                }
            }
            ;
        k1 = {
            hsl: {
                hsl: (i, t, e) => [i, t, e],
                hsv: T1,
                rgb: M1
            },
            hsv: {
                hsl: A1,
                hsv: (i, t, e) => [i, t, e],
                rgb: yv
            },
            rgb: {
                hsl: P1,
                hsv: S1,
                rgb: (i, t, e) => [i, t, e]
            }
        };
        $ = class i {
            static black() {
                return new i([0, 0, 0], "rgb")
            }
            constructor(t, e) {
                this.type = "int",
                    this.mode = e,
                    this.comps_ = xv(t, e, this.type)
            }
            getComponents(t) {
                return Po(Ev(Re(this.comps_), {
                    mode: this.mode,
                    type: this.type
                }, {
                    mode: t != null ? t : this.mode,
                    type: this.type
                }), this.comps_[3])
            }
            toRgbaObject() {
                let t = this.getComponents("rgb");
                return {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: t[3]
                }
            }
        }
            ,
            hi = H("colp"),
            Gh = class {
                constructor(t, e) {
                    this.alphaViews_ = null,
                        this.element = t.createElement("div"),
                        this.element.classList.add(hi()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("div");
                    r.classList.add(hi("hsv"));
                    let s = t.createElement("div");
                    s.classList.add(hi("sv")),
                        this.svPaletteView_ = e.svPaletteView,
                        s.appendChild(this.svPaletteView_.element),
                        r.appendChild(s);
                    let n = t.createElement("div");
                    n.classList.add(hi("h")),
                        this.hPaletteView_ = e.hPaletteView,
                        n.appendChild(this.hPaletteView_.element),
                        r.appendChild(n),
                        this.element.appendChild(r);
                    let o = t.createElement("div");
                    if (o.classList.add(hi("rgb")),
                        this.textsView_ = e.textsView,
                        o.appendChild(this.textsView_.element),
                        this.element.appendChild(o),
                        e.alphaViews) {
                        this.alphaViews_ = {
                            palette: e.alphaViews.palette,
                            text: e.alphaViews.text
                        };
                        let a = t.createElement("div");
                        a.classList.add(hi("a"));
                        let l = t.createElement("div");
                        l.classList.add(hi("ap")),
                            l.appendChild(this.alphaViews_.palette.element),
                            a.appendChild(l);
                        let h = t.createElement("div");
                        h.classList.add(hi("at")),
                            h.appendChild(this.alphaViews_.text.element),
                            a.appendChild(h),
                            this.element.appendChild(a)
                    }
                }
                get allFocusableElements() {
                    let t = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map(e => e.inputElement)];
                    return this.alphaViews_ && t.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement),
                        t
                }
            }
            ;
        ws = class {
            constructor(t, e) {
                this.type = "float",
                    this.mode = e,
                    this.comps_ = xv(t, e, this.type)
            }
            getComponents(t) {
                return Po(Ev(Re(this.comps_), {
                    mode: this.mode,
                    type: this.type
                }, {
                    mode: t != null ? t : this.mode,
                    type: this.type
                }), this.comps_[3])
            }
            toRgbaObject() {
                let t = this.getComponents("rgb");
                return {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: t[3]
                }
            }
        }
            ,
            R1 = {
                int: (i, t) => new $(i, t),
                float: (i, t) => new ws(i, t)
            };
        N1 = {
            deg: i => i,
            grad: i => i * 360 / 400,
            rad: i => i * 360 / (2 * Math.PI),
            turn: i => i * 360
        };
        $1 = [{
            parser: kv,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "hex"
            }
        }, {
            parser: Ov,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "hex"
            }
        }, {
            parser: Mv,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "func"
            }
        }, {
            parser: Sv,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "func"
            }
        }, {
            parser: Tv,
            result: {
                alpha: !1,
                mode: "hsl",
                notation: "func"
            }
        }, {
            parser: Av,
            result: {
                alpha: !0,
                mode: "hsl",
                notation: "func"
            }
        }, {
            parser: Lv,
            result: {
                alpha: !1,
                mode: "rgb",
                notation: "object"
            }
        }, {
            parser: Rv,
            result: {
                alpha: !0,
                mode: "rgb",
                notation: "object"
            }
        }];
        ty = [{
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "hex",
                type: "int"
            },
            stringifier: Bc
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "hex",
                type: "int"
            },
            stringifier: Uc
        }, {
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "func",
                type: "int"
            },
            stringifier: Iv
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "func",
                type: "int"
            },
            stringifier: oo
        }, {
            format: {
                alpha: !1,
                mode: "hsl",
                notation: "func",
                type: "int"
            },
            stringifier: K1
        }, {
            format: {
                alpha: !0,
                mode: "hsl",
                notation: "func",
                type: "int"
            },
            stringifier: Q1
        }, ...["int", "float"].reduce((i, t) => [...i, {
            format: {
                alpha: !1,
                mode: "rgb",
                notation: "object",
                type: t
            },
            stringifier: Z1(t)
        }, {
            format: {
                alpha: !0,
                mode: "rgb",
                notation: "object",
                type: t
            },
            stringifier: J1(t)
        }], [])];
        ls = H("apl"),
            Yh = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        this.value = e.value,
                        this.value.emitter.on("change", this.onValueChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(ls()),
                        e.viewProps.bindClassModifiers(this.element),
                        e.viewProps.bindTabIndex(this.element);
                    let r = t.createElement("div");
                    r.classList.add(ls("b")),
                        this.element.appendChild(r);
                    let s = t.createElement("div");
                    s.classList.add(ls("c")),
                        r.appendChild(s),
                        this.colorElem_ = s;
                    let n = t.createElement("div");
                    n.classList.add(ls("m")),
                        this.element.appendChild(n),
                        this.markerElem_ = n;
                    let o = t.createElement("div");
                    o.classList.add(ls("p")),
                        this.markerElem_.appendChild(o),
                        this.previewElem_ = o,
                        this.update_()
                }
                update_() {
                    let t = this.value.rawValue
                        , e = t.getComponents("rgb")
                        , r = new $([e[0], e[1], e[2], 0], "rgb")
                        , s = new $([e[0], e[1], e[2], 255], "rgb")
                        , n = ["to right", oo(r), oo(s)];
                    this.colorElem_.style.background = `linear-gradient(${n.join(",")})`,
                        this.previewElem_.style.backgroundColor = oo(t);
                    let o = G(e[3], 0, 1, 0, 100);
                    this.markerElem_.style.left = `${o}%`
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            Xh = class {
                constructor(t, e) {
                    this.onKeyDown_ = this.onKeyDown_.bind(this),
                        this.onKeyUp_ = this.onKeyUp_.bind(this),
                        this.onPointerDown_ = this.onPointerDown_.bind(this),
                        this.onPointerMove_ = this.onPointerMove_.bind(this),
                        this.onPointerUp_ = this.onPointerUp_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new Yh(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.ptHandler_ = new Ke(this.view.element),
                        this.ptHandler_.emitter.on("down", this.onPointerDown_),
                        this.ptHandler_.emitter.on("move", this.onPointerMove_),
                        this.ptHandler_.emitter.on("up", this.onPointerUp_),
                        this.view.element.addEventListener("keydown", this.onKeyDown_),
                        this.view.element.addEventListener("keyup", this.onKeyUp_)
                }
                handlePointerEvent_(t, e) {
                    if (!t.point)
                        return;
                    let r = t.point.x / t.bounds.width
                        , s = this.value.rawValue
                        , [n, o, a] = s.getComponents("hsv");
                    this.value.setRawValue(new $([n, o, a, r], "hsv"), e)
                }
                onPointerDown_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerMove_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerUp_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !0,
                        last: !0
                    })
                }
                onKeyDown_(t) {
                    let e = Gt(Qi(!0), Xe(t));
                    if (e === 0)
                        return;
                    let r = this.value.rawValue
                        , [s, n, o, a] = r.getComponents("hsv");
                    this.value.setRawValue(new $([s, n, o, a + e], "hsv"), {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onKeyUp_(t) {
                    Gt(Qi(!0), Xe(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                        forceEmit: !0,
                        last: !0
                    })
                }
            }
            ,
            Er = H("coltxt");
        Kh = class {
            constructor(t, e) {
                this.element = t.createElement("div"),
                    this.element.classList.add(Er()),
                    e.viewProps.bindClassModifiers(this.element);
                let r = t.createElement("div");
                r.classList.add(Er("m")),
                    this.modeElem_ = ey(t),
                    this.modeElem_.classList.add(Er("ms")),
                    r.appendChild(this.modeSelectElement),
                    e.viewProps.bindDisabled(this.modeElem_);
                let s = t.createElement("div");
                s.classList.add(Er("mm")),
                    s.appendChild(Co(t, "dropdown")),
                    r.appendChild(s),
                    this.element.appendChild(r);
                let n = t.createElement("div");
                n.classList.add(Er("w")),
                    this.element.appendChild(n),
                    this.inputsElem_ = n,
                    this.inputViews_ = e.inputViews,
                    this.applyInputViews_(),
                    He(e.mode, o => {
                        this.modeElem_.value = o
                    }
                    )
            }
            get modeSelectElement() {
                return this.modeElem_
            }
            get inputViews() {
                return this.inputViews_
            }
            set inputViews(t) {
                this.inputViews_ = t,
                    this.applyInputViews_()
            }
            applyInputViews_() {
                cv(this.inputsElem_);
                let t = this.element.ownerDocument;
                this.inputViews_.forEach(e => {
                    let r = t.createElement("div");
                    r.classList.add(Er("c")),
                        r.appendChild(e.element),
                        this.inputsElem_.appendChild(r)
                }
                )
            }
        }
            ;
        Qh = class {
            constructor(t, e) {
                this.onModeSelectChange_ = this.onModeSelectChange_.bind(this),
                    this.colorType_ = e.colorType,
                    this.value = e.value,
                    this.viewProps = e.viewProps,
                    this.colorMode = st(this.value.rawValue.mode),
                    this.ccs_ = this.createComponentControllers_(t),
                    this.view = new Kh(t, {
                        mode: this.colorMode,
                        inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
                        viewProps: this.viewProps
                    }),
                    this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_)
            }
            createComponentControllers_(t) {
                let e = this.colorMode.rawValue;
                return ay(e) ? ny(t, {
                    colorMode: e,
                    colorType: this.colorType_,
                    value: this.value,
                    viewProps: this.viewProps
                }) : oy(t, {
                    value: this.value,
                    viewProps: this.viewProps
                })
            }
            onModeSelectChange_(t) {
                let e = t.currentTarget;
                this.colorMode.rawValue = e.value,
                    this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument),
                    this.view.inputViews = this.ccs_.map(r => r.view)
            }
        }
            ,
            Jl = H("hpl"),
            Zh = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        this.value = e.value,
                        this.value.emitter.on("change", this.onValueChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(Jl()),
                        e.viewProps.bindClassModifiers(this.element),
                        e.viewProps.bindTabIndex(this.element);
                    let r = t.createElement("div");
                    r.classList.add(Jl("c")),
                        this.element.appendChild(r);
                    let s = t.createElement("div");
                    s.classList.add(Jl("m")),
                        this.element.appendChild(s),
                        this.markerElem_ = s,
                        this.update_()
                }
                update_() {
                    let t = this.value.rawValue
                        , [e] = t.getComponents("hsv");
                    this.markerElem_.style.backgroundColor = Iv(new $([e, 100, 100], "hsv"));
                    let r = G(e, 0, 360, 0, 100);
                    this.markerElem_.style.left = `${r}%`
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            Jh = class {
                constructor(t, e) {
                    this.onKeyDown_ = this.onKeyDown_.bind(this),
                        this.onKeyUp_ = this.onKeyUp_.bind(this),
                        this.onPointerDown_ = this.onPointerDown_.bind(this),
                        this.onPointerMove_ = this.onPointerMove_.bind(this),
                        this.onPointerUp_ = this.onPointerUp_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new Zh(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.ptHandler_ = new Ke(this.view.element),
                        this.ptHandler_.emitter.on("down", this.onPointerDown_),
                        this.ptHandler_.emitter.on("move", this.onPointerMove_),
                        this.ptHandler_.emitter.on("up", this.onPointerUp_),
                        this.view.element.addEventListener("keydown", this.onKeyDown_),
                        this.view.element.addEventListener("keyup", this.onKeyUp_)
                }
                handlePointerEvent_(t, e) {
                    if (!t.point)
                        return;
                    let r = G(wt(t.point.x, 0, t.bounds.width), 0, t.bounds.width, 0, 360)
                        , s = this.value.rawValue
                        , [, n, o, a] = s.getComponents("hsv");
                    this.value.setRawValue(new $([r, n, o, a], "hsv"), e)
                }
                onPointerDown_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerMove_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerUp_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !0,
                        last: !0
                    })
                }
                onKeyDown_(t) {
                    let e = Gt(Qi(!1), Xe(t));
                    if (e === 0)
                        return;
                    let r = this.value.rawValue
                        , [s, n, o, a] = r.getComponents("hsv");
                    this.value.setRawValue(new $([s + e, n, o, a], "hsv"), {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onKeyUp_(t) {
                    Gt(Qi(!1), Xe(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
                        forceEmit: !0,
                        last: !0
                    })
                }
            }
            ,
            th = H("svp"),
            jm = 64,
            tc = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        this.value = e.value,
                        this.value.emitter.on("change", this.onValueChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(th()),
                        e.viewProps.bindClassModifiers(this.element),
                        e.viewProps.bindTabIndex(this.element);
                    let r = t.createElement("canvas");
                    r.height = jm,
                        r.width = jm,
                        r.classList.add(th("c")),
                        this.element.appendChild(r),
                        this.canvasElement = r;
                    let s = t.createElement("div");
                    s.classList.add(th("m")),
                        this.element.appendChild(s),
                        this.markerElem_ = s,
                        this.update_()
                }
                update_() {
                    let t = Ww(this.canvasElement);
                    if (!t)
                        return;
                    let r = this.value.rawValue.getComponents("hsv")
                        , s = this.canvasElement.width
                        , n = this.canvasElement.height
                        , o = t.getImageData(0, 0, s, n)
                        , a = o.data;
                    for (let c = 0; c < n; c++)
                        for (let u = 0; u < s; u++) {
                            let d = G(u, 0, s, 0, 100)
                                , f = G(c, 0, n, 100, 0)
                                , m = yv(r[0], d, f)
                                , p = (c * s + u) * 4;
                            a[p] = m[0],
                                a[p + 1] = m[1],
                                a[p + 2] = m[2],
                                a[p + 3] = 255
                        }
                    t.putImageData(o, 0, 0);
                    let l = G(r[1], 0, 100, 0, 100);
                    this.markerElem_.style.left = `${l}%`;
                    let h = G(r[2], 0, 100, 100, 0);
                    this.markerElem_.style.top = `${h}%`
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            ec = class {
                constructor(t, e) {
                    this.onKeyDown_ = this.onKeyDown_.bind(this),
                        this.onKeyUp_ = this.onKeyUp_.bind(this),
                        this.onPointerDown_ = this.onPointerDown_.bind(this),
                        this.onPointerMove_ = this.onPointerMove_.bind(this),
                        this.onPointerUp_ = this.onPointerUp_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new tc(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.ptHandler_ = new Ke(this.view.element),
                        this.ptHandler_.emitter.on("down", this.onPointerDown_),
                        this.ptHandler_.emitter.on("move", this.onPointerMove_),
                        this.ptHandler_.emitter.on("up", this.onPointerUp_),
                        this.view.element.addEventListener("keydown", this.onKeyDown_),
                        this.view.element.addEventListener("keyup", this.onKeyUp_)
                }
                handlePointerEvent_(t, e) {
                    if (!t.point)
                        return;
                    let r = G(t.point.x, 0, t.bounds.width, 0, 100)
                        , s = G(t.point.y, 0, t.bounds.height, 100, 0)
                        , [n, , , o] = this.value.rawValue.getComponents("hsv");
                    this.value.setRawValue(new $([n, r, s, o], "hsv"), e)
                }
                onPointerDown_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerMove_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onPointerUp_(t) {
                    this.handlePointerEvent_(t.data, {
                        forceEmit: !0,
                        last: !0
                    })
                }
                onKeyDown_(t) {
                    gv(t.key) && t.preventDefault();
                    let [e, r, s, n] = this.value.rawValue.getComponents("hsv")
                        , o = Qi(!1)
                        , a = Gt(o, Xe(t))
                        , l = Gt(o, _s(t));
                    a === 0 && l === 0 || this.value.setRawValue(new $([e, r + a, s + l, n], "hsv"), {
                        forceEmit: !1,
                        last: !1
                    })
                }
                onKeyUp_(t) {
                    let e = Qi(!1)
                        , r = Gt(e, Xe(t))
                        , s = Gt(e, _s(t));
                    r === 0 && s === 0 || this.value.setRawValue(this.value.rawValue, {
                        forceEmit: !0,
                        last: !0
                    })
                }
            }
            ,
            ic = class {
                constructor(t, e) {
                    this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.hPaletteC_ = new Jh(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.svPaletteC_ = new ec(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.alphaIcs_ = e.supportsAlpha ? {
                            palette: new Xh(t, {
                                value: this.value,
                                viewProps: this.viewProps
                            }),
                            text: new Ki(t, {
                                parser: We,
                                props: B.fromObject({
                                    pointerScale: .01,
                                    keyScale: .1,
                                    formatter: Yt(2)
                                }),
                                value: st(0, {
                                    constraint: new Hi({
                                        min: 0,
                                        max: 1
                                    })
                                }),
                                viewProps: this.viewProps
                            })
                        } : null,
                        this.alphaIcs_ && Lr({
                            primary: this.value,
                            secondary: this.alphaIcs_.text.value,
                            forward: r => r.getComponents()[3],
                            backward: (r, s) => {
                                let n = r.getComponents();
                                return n[3] = s,
                                    new $(n, r.mode)
                            }
                        }),
                        this.textsC_ = new Qh(t, {
                            colorType: e.colorType,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view = new Gh(t, {
                            alphaViews: this.alphaIcs_ ? {
                                palette: this.alphaIcs_.palette.view,
                                text: this.alphaIcs_.text.view
                            } : null,
                            hPaletteView: this.hPaletteC_.view,
                            supportsAlpha: e.supportsAlpha,
                            svPaletteView: this.svPaletteC_.view,
                            textsView: this.textsC_.view,
                            viewProps: this.viewProps
                        })
                }
                get textsController() {
                    return this.textsC_
                }
            }
            ,
            eh = H("colsw"),
            rc = class {
                constructor(t, e) {
                    this.onValueChange_ = this.onValueChange_.bind(this),
                        e.value.emitter.on("change", this.onValueChange_),
                        this.value = e.value,
                        this.element = t.createElement("div"),
                        this.element.classList.add(eh()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("div");
                    r.classList.add(eh("sw")),
                        this.element.appendChild(r),
                        this.swatchElem_ = r;
                    let s = t.createElement("button");
                    s.classList.add(eh("b")),
                        e.viewProps.bindDisabled(s),
                        this.element.appendChild(s),
                        this.buttonElement = s,
                        this.update_()
                }
                update_() {
                    let t = this.value.rawValue;
                    this.swatchElem_.style.backgroundColor = Uc(t)
                }
                onValueChange_() {
                    this.update_()
                }
            }
            ,
            sc = class {
                constructor(t, e) {
                    this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new rc(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        })
                }
            }
            ,
            ys = class {
                constructor(t, e) {
                    this.onButtonBlur_ = this.onButtonBlur_.bind(this),
                        this.onButtonClick_ = this.onButtonClick_.bind(this),
                        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
                        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.foldable_ = fs.create(e.expanded),
                        this.swatchC_ = new sc(t, {
                            value: this.value,
                            viewProps: this.viewProps
                        });
                    let r = this.swatchC_.view.buttonElement;
                    r.addEventListener("blur", this.onButtonBlur_),
                        r.addEventListener("click", this.onButtonClick_),
                        this.textC_ = new Xi(t, {
                            parser: e.parser,
                            props: B.fromObject({
                                formatter: e.formatter
                            }),
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view = new $h(t, {
                            foldable: this.foldable_,
                            pickerLayout: e.pickerLayout
                        }),
                        this.view.swatchElement.appendChild(this.swatchC_.view.element),
                        this.view.textElement.appendChild(this.textC_.view.element),
                        this.popC_ = e.pickerLayout === "popup" ? new bo(t, {
                            viewProps: this.viewProps
                        }) : null;
                    let s = new ic(t, {
                        colorType: e.colorType,
                        supportsAlpha: e.supportsAlpha,
                        value: this.value,
                        viewProps: this.viewProps
                    });
                    s.view.allFocusableElements.forEach(n => {
                        n.addEventListener("blur", this.onPopupChildBlur_),
                            n.addEventListener("keydown", this.onPopupChildKeydown_)
                    }
                    ),
                        this.pickerC_ = s,
                        this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
                            this.popC_.view.element.appendChild(s.view.element),
                            Lr({
                                primary: this.foldable_.value("expanded"),
                                secondary: this.popC_.shows,
                                forward: n => n,
                                backward: (n, o) => o
                            })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
                                Ic(this.foldable_, this.view.pickerElement))
                }
                get textController() {
                    return this.textC_
                }
                onButtonBlur_(t) {
                    if (!this.popC_)
                        return;
                    let e = this.view.element
                        , r = t.relatedTarget;
                    (!r || !e.contains(r)) && (this.popC_.shows.rawValue = !1)
                }
                onButtonClick_() {
                    this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                        this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
                }
                onPopupChildBlur_(t) {
                    if (!this.popC_)
                        return;
                    let e = this.popC_.view.element
                        , r = uv(t);
                    r && e.contains(r) || r && r === this.swatchC_.view.buttonElement && !Lc(e.ownerDocument) || (this.popC_.shows.rawValue = !1)
                }
                onPopupChildKeydown_(t) {
                    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && t.key === "Escape" && this.swatchC_.view.buttonElement.focus()
                }
            }
            ;
        xy = Nt({
            id: "input-color-number",
            type: "input",
            accept: (i, t) => {
                if (typeof i != "number" || !yy(t))
                    return null;
                let e = Dc(t);
                return e ? {
                    initialValue: i,
                    params: Object.assign(Object.assign({}, e), {
                        supportsAlpha: by(t)
                    })
                } : null
            }
            ,
            binding: {
                reader: i => i.params.supportsAlpha ? py : dy,
                equals: jc,
                writer: i => my(i.params.supportsAlpha)
            },
            controller: i => {
                var t, e;
                return new ys(i.document, {
                    colorType: "int",
                    expanded: (t = i.params.expanded) !== null && t !== void 0 ? t : !1,
                    formatter: wy(i.params.supportsAlpha),
                    parser: Ts("int"),
                    pickerLayout: (e = i.params.picker) !== null && e !== void 0 ? e : "popup",
                    supportsAlpha: i.params.supportsAlpha,
                    value: i.value,
                    viewProps: i.viewProps
                })
            }
        });
        Sy = Nt({
            id: "input-color-object",
            type: "input",
            accept: (i, t) => {
                var e;
                if (!Uv(i))
                    return null;
                let r = Dc(t);
                return r ? {
                    initialValue: i,
                    params: Object.assign(Object.assign({}, r), {
                        colorType: (e = Cv(t)) !== null && e !== void 0 ? e : "int"
                    })
                } : null
            }
            ,
            binding: {
                reader: i => Py(i.params.colorType),
                equals: jc,
                writer: i => _y(Cy(i.initialValue), i.params.colorType)
            },
            controller: i => {
                var t, e;
                let r = Bv(i.initialValue);
                return new ys(i.document, {
                    colorType: i.params.colorType,
                    expanded: (t = i.params.expanded) !== null && t !== void 0 ? t : !1,
                    formatter: My(r, i.params.colorType),
                    parser: Ts("int"),
                    pickerLayout: (e = i.params.picker) !== null && e !== void 0 ? e : "popup",
                    supportsAlpha: r,
                    value: i.value,
                    viewProps: i.viewProps
                })
            }
        }),
            Ty = Nt({
                id: "input-color-string",
                type: "input",
                accept: (i, t) => {
                    if (typeof i != "string" || t.view === "text")
                        return null;
                    let e = Y1(i, Cv(t));
                    if (!e)
                        return null;
                    let r = Dv(e);
                    if (!r)
                        return null;
                    let s = Dc(t);
                    return s ? {
                        initialValue: i,
                        params: Object.assign(Object.assign({}, s), {
                            format: e,
                            stringifier: r
                        })
                    } : null
                }
                ,
                binding: {
                    reader: () => X1,
                    equals: jc,
                    writer: i => {
                        let t = fy(i.params.format);
                        if (!t)
                            throw Et.notBindable();
                        return t
                    }
                },
                controller: i => {
                    var t, e;
                    return new ys(i.document, {
                        colorType: i.params.format.type,
                        expanded: (t = i.params.expanded) !== null && t !== void 0 ? t : !1,
                        formatter: i.params.stringifier,
                        parser: Ts("int"),
                        pickerLayout: (e = i.params.picker) !== null && e !== void 0 ? e : "popup",
                        supportsAlpha: i.params.format.alpha,
                        value: i.value,
                        viewProps: i.viewProps
                    })
                }
            }),
            xs = class {
                constructor(t) {
                    this.components = t.components,
                        this.asm_ = t.assembly
                }
                constrain(t) {
                    let e = this.asm_.toComponents(t).map((r, s) => {
                        var n, o;
                        return (o = (n = this.components[s]) === null || n === void 0 ? void 0 : n.constrain(r)) !== null && o !== void 0 ? o : r
                    }
                    );
                    return this.asm_.fromComponents(e)
                }
            }
            ,
            Hm = H("pndtxt"),
            nc = class {
                constructor(t, e) {
                    this.textViews = e.textViews,
                        this.element = t.createElement("div"),
                        this.element.classList.add(Hm()),
                        this.textViews.forEach(r => {
                            let s = t.createElement("div");
                            s.classList.add(Hm("a")),
                                s.appendChild(r.element),
                                this.element.appendChild(s)
                        }
                        )
                }
            }
            ;
        Es = class {
            constructor(t, e) {
                this.value = e.value,
                    this.viewProps = e.viewProps,
                    this.acs_ = e.axes.map((r, s) => Ay(t, e, s)),
                    this.acs_.forEach((r, s) => {
                        Lr({
                            primary: this.value,
                            secondary: r.value,
                            forward: n => e.assembly.toComponents(n)[s],
                            backward: (n, o) => {
                                let a = e.assembly.toComponents(n);
                                return a[s] = o,
                                    e.assembly.fromComponents(a)
                            }
                        })
                    }
                    ),
                    this.view = new nc(t, {
                        textViews: this.acs_.map(r => r.view)
                    })
            }
            get textControllers() {
                return this.acs_
            }
        }
            ,
            oc = class extends $i {
                get max() {
                    return this.controller.valueController.sliderController.props.get("max")
                }
                set max(t) {
                    this.controller.valueController.sliderController.props.set("max", t)
                }
                get min() {
                    return this.controller.valueController.sliderController.props.get("min")
                }
                set min(t) {
                    this.controller.valueController.sliderController.props.set("min", t)
                }
            }
            ;
        Oy = Nt({
            id: "input-number",
            type: "input",
            accept: (i, t) => {
                if (typeof i != "number")
                    return null;
                let e = ct(t, r => Object.assign(Object.assign({}, av(r)), {
                    options: r.optional.custom(Ms),
                    readonly: r.optional.constant(!1)
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: i => tv,
                constraint: i => ky(i.params, i.initialValue),
                writer: i => Ss
            },
            controller: i => {
                let t = i.value
                    , e = i.constraint
                    , r = e && _o(e, Yi);
                if (r)
                    return new Le(i.document, {
                        props: new B({
                            options: r.values.value("options")
                        }),
                        value: t,
                        viewProps: i.viewProps
                    });
                let s = ov(i.params, t.rawValue)
                    , n = e && _o(e, Hi);
                return n ? new Sr(i.document, Object.assign(Object.assign({}, _v(Object.assign(Object.assign({}, s), {
                    keyScale: st(s.keyScale),
                    max: n.values.value("max"),
                    min: n.values.value("min")
                }))), {
                    parser: We,
                    value: t,
                    viewProps: i.viewProps
                })) : new Ki(i.document, {
                    parser: We,
                    props: B.fromObject(s),
                    value: t,
                    viewProps: i.viewProps
                })
            }
            ,
            api(i) {
                return typeof i.controller.value.rawValue != "number" ? null : i.controller.valueController instanceof Sr ? new oc(i.controller) : i.controller.valueController instanceof Le ? new gs(i.controller) : null
            }
        }),
            ke = class {
                constructor(t = 0, e = 0) {
                    this.x = t,
                        this.y = e
                }
                getComponents() {
                    return [this.x, this.y]
                }
                static isObject(t) {
                    if (Z(t))
                        return !1;
                    let e = t.x
                        , r = t.y;
                    return !(typeof e != "number" || typeof r != "number")
                }
                static equals(t, e) {
                    return t.x === e.x && t.y === e.y
                }
                toObject() {
                    return {
                        x: this.x,
                        y: this.y
                    }
                }
            }
            ,
            jv = {
                toComponents: i => i.getComponents(),
                fromComponents: i => new ke(...i)
            },
            Cr = H("p2d"),
            ac = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Cr()),
                        e.viewProps.bindClassModifiers(this.element),
                        He(e.expanded, Ar(this.element, Cr(void 0, "expanded")));
                    let r = t.createElement("div");
                    r.classList.add(Cr("h")),
                        this.element.appendChild(r);
                    let s = t.createElement("button");
                    s.classList.add(Cr("b")),
                        s.appendChild(Co(t, "p2dpad")),
                        e.viewProps.bindDisabled(s),
                        r.appendChild(s),
                        this.buttonElement = s;
                    let n = t.createElement("div");
                    if (n.classList.add(Cr("t")),
                        r.appendChild(n),
                        this.textElement = n,
                        e.pickerLayout === "inline") {
                        let o = t.createElement("div");
                        o.classList.add(Cr("p")),
                            this.element.appendChild(o),
                            this.pickerElement = o
                    } else
                        this.pickerElement = null
                }
            }
            ,
            ci = H("p2dp"),
            lc = class {
                constructor(t, e) {
                    this.onFoldableChange_ = this.onFoldableChange_.bind(this),
                        this.onPropsChange_ = this.onPropsChange_.bind(this),
                        this.onValueChange_ = this.onValueChange_.bind(this),
                        this.props_ = e.props,
                        this.props_.emitter.on("change", this.onPropsChange_),
                        this.element = t.createElement("div"),
                        this.element.classList.add(ci()),
                        e.layout === "popup" && this.element.classList.add(ci(void 0, "p")),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("div");
                    r.classList.add(ci("p")),
                        e.viewProps.bindTabIndex(r),
                        this.element.appendChild(r),
                        this.padElement = r;
                    let s = t.createElementNS(Ae, "svg");
                    s.classList.add(ci("g")),
                        this.padElement.appendChild(s),
                        this.svgElem_ = s;
                    let n = t.createElementNS(Ae, "line");
                    n.classList.add(ci("ax")),
                        n.setAttributeNS(null, "x1", "0"),
                        n.setAttributeNS(null, "y1", "50%"),
                        n.setAttributeNS(null, "x2", "100%"),
                        n.setAttributeNS(null, "y2", "50%"),
                        this.svgElem_.appendChild(n);
                    let o = t.createElementNS(Ae, "line");
                    o.classList.add(ci("ax")),
                        o.setAttributeNS(null, "x1", "50%"),
                        o.setAttributeNS(null, "y1", "0"),
                        o.setAttributeNS(null, "x2", "50%"),
                        o.setAttributeNS(null, "y2", "100%"),
                        this.svgElem_.appendChild(o);
                    let a = t.createElementNS(Ae, "line");
                    a.classList.add(ci("l")),
                        a.setAttributeNS(null, "x1", "50%"),
                        a.setAttributeNS(null, "y1", "50%"),
                        this.svgElem_.appendChild(a),
                        this.lineElem_ = a;
                    let l = t.createElement("div");
                    l.classList.add(ci("m")),
                        this.padElement.appendChild(l),
                        this.markerElem_ = l,
                        e.value.emitter.on("change", this.onValueChange_),
                        this.value = e.value,
                        this.update_()
                }
                get allFocusableElements() {
                    return [this.padElement]
                }
                update_() {
                    let [t, e] = this.value.rawValue.getComponents()
                        , r = this.props_.get("max")
                        , s = G(t, -r, +r, 0, 100)
                        , n = G(e, -r, +r, 0, 100)
                        , o = this.props_.get("invertsY") ? 100 - n : n;
                    this.lineElem_.setAttributeNS(null, "x2", `${s}%`),
                        this.lineElem_.setAttributeNS(null, "y2", `${o}%`),
                        this.markerElem_.style.left = `${s}%`,
                        this.markerElem_.style.top = `${o}%`
                }
                onValueChange_() {
                    this.update_()
                }
                onPropsChange_() {
                    this.update_()
                }
                onFoldableChange_() {
                    this.update_()
                }
            }
            ;
        hc = class {
            constructor(t, e) {
                this.onPadKeyDown_ = this.onPadKeyDown_.bind(this),
                    this.onPadKeyUp_ = this.onPadKeyUp_.bind(this),
                    this.onPointerDown_ = this.onPointerDown_.bind(this),
                    this.onPointerMove_ = this.onPointerMove_.bind(this),
                    this.onPointerUp_ = this.onPointerUp_.bind(this),
                    this.props = e.props,
                    this.value = e.value,
                    this.viewProps = e.viewProps,
                    this.view = new lc(t, {
                        layout: e.layout,
                        props: this.props,
                        value: this.value,
                        viewProps: this.viewProps
                    }),
                    this.ptHandler_ = new Ke(this.view.padElement),
                    this.ptHandler_.emitter.on("down", this.onPointerDown_),
                    this.ptHandler_.emitter.on("move", this.onPointerMove_),
                    this.ptHandler_.emitter.on("up", this.onPointerUp_),
                    this.view.padElement.addEventListener("keydown", this.onPadKeyDown_),
                    this.view.padElement.addEventListener("keyup", this.onPadKeyUp_)
            }
            handlePointerEvent_(t, e) {
                if (!t.point)
                    return;
                let r = this.props.get("max")
                    , s = G(t.point.x, 0, t.bounds.width, -r, +r)
                    , n = G(this.props.get("invertsY") ? t.bounds.height - t.point.y : t.point.y, 0, t.bounds.height, -r, +r);
                this.value.setRawValue(new ke(s, n), e)
            }
            onPointerDown_(t) {
                this.handlePointerEvent_(t.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerMove_(t) {
                this.handlePointerEvent_(t.data, {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPointerUp_(t) {
                this.handlePointerEvent_(t.data, {
                    forceEmit: !0,
                    last: !0
                })
            }
            onPadKeyDown_(t) {
                gv(t.key) && t.preventDefault();
                let [e, r] = Wm(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
                e === 0 && r === 0 || this.value.setRawValue(new ke(this.value.rawValue.x + e, this.value.rawValue.y + r), {
                    forceEmit: !1,
                    last: !1
                })
            }
            onPadKeyUp_(t) {
                let [e, r] = Wm(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
                e === 0 && r === 0 || this.value.setRawValue(this.value.rawValue, {
                    forceEmit: !0,
                    last: !0
                })
            }
        }
            ,
            cc = class {
                constructor(t, e) {
                    var r, s;
                    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
                        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
                        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this),
                        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this),
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.foldable_ = fs.create(e.expanded),
                        this.popC_ = e.pickerLayout === "popup" ? new bo(t, {
                            viewProps: this.viewProps
                        }) : null;
                    let n = new hc(t, {
                        layout: e.pickerLayout,
                        props: new B({
                            invertsY: st(e.invertsY),
                            max: st(e.max),
                            xKeyScale: e.axes[0].textProps.value("keyScale"),
                            yKeyScale: e.axes[1].textProps.value("keyScale")
                        }),
                        value: this.value,
                        viewProps: this.viewProps
                    });
                    n.view.allFocusableElements.forEach(o => {
                        o.addEventListener("blur", this.onPopupChildBlur_),
                            o.addEventListener("keydown", this.onPopupChildKeydown_)
                    }
                    ),
                        this.pickerC_ = n,
                        this.textC_ = new Es(t, {
                            assembly: jv,
                            axes: e.axes,
                            parser: e.parser,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        this.view = new ac(t, {
                            expanded: this.foldable_.value("expanded"),
                            pickerLayout: e.pickerLayout,
                            viewProps: this.viewProps
                        }),
                        this.view.textElement.appendChild(this.textC_.view.element),
                        (r = this.view.buttonElement) === null || r === void 0 || r.addEventListener("blur", this.onPadButtonBlur_),
                        (s = this.view.buttonElement) === null || s === void 0 || s.addEventListener("click", this.onPadButtonClick_),
                        this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
                            this.popC_.view.element.appendChild(this.pickerC_.view.element),
                            Lr({
                                primary: this.foldable_.value("expanded"),
                                secondary: this.popC_.shows,
                                forward: o => o,
                                backward: (o, a) => a
                            })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
                                Ic(this.foldable_, this.view.pickerElement))
                }
                get textController() {
                    return this.textC_
                }
                onPadButtonBlur_(t) {
                    if (!this.popC_)
                        return;
                    let e = this.view.element
                        , r = t.relatedTarget;
                    (!r || !e.contains(r)) && (this.popC_.shows.rawValue = !1)
                }
                onPadButtonClick_() {
                    this.foldable_.set("expanded", !this.foldable_.get("expanded")),
                        this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
                }
                onPopupChildBlur_(t) {
                    if (!this.popC_)
                        return;
                    let e = this.popC_.view.element
                        , r = uv(t);
                    r && e.contains(r) || r && r === this.view.buttonElement && !Lc(e.ownerDocument) || (this.popC_.shows.rawValue = !1)
                }
                onPopupChildKeydown_(t) {
                    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && t.key === "Escape" && this.view.buttonElement.focus()
                }
            }
            ;
        Vy = Nt({
            id: "input-point2d",
            type: "input",
            accept: (i, t) => {
                if (!ke.isObject(i))
                    return null;
                let e = ct(t, r => Object.assign(Object.assign({}, bs(r)), {
                    expanded: r.optional.boolean,
                    picker: r.optional.custom(wv),
                    readonly: r.optional.constant(!1),
                    x: r.optional.custom(di),
                    y: r.optional.object(Object.assign(Object.assign({}, bs(r)), {
                        inverted: r.optional.boolean
                    }))
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: () => Ly,
                constraint: i => Fy(i.params, i.initialValue),
                equals: ke.equals,
                writer: () => Ry
            },
            controller: i => {
                var t, e;
                let r = i.document
                    , s = i.value
                    , n = i.constraint
                    , o = [i.params.x, i.params.y];
                return new cc(r, {
                    axes: s.rawValue.getComponents().map((a, l) => {
                        var h;
                        return Oc({
                            constraint: n.components[l],
                            initialValue: a,
                            params: qi(i.params, (h = o[l]) !== null && h !== void 0 ? h : {})
                        })
                    }
                    ),
                    expanded: (t = i.params.expanded) !== null && t !== void 0 ? t : !1,
                    invertsY: zy(i.params),
                    max: Iy(i.params, s.rawValue),
                    parser: We,
                    pickerLayout: (e = i.params.picker) !== null && e !== void 0 ? e : "popup",
                    value: s,
                    viewProps: i.viewProps
                })
            }
        }),
            pi = class {
                constructor(t = 0, e = 0, r = 0) {
                    this.x = t,
                        this.y = e,
                        this.z = r
                }
                getComponents() {
                    return [this.x, this.y, this.z]
                }
                static isObject(t) {
                    if (Z(t))
                        return !1;
                    let e = t.x
                        , r = t.y
                        , s = t.z;
                    return !(typeof e != "number" || typeof r != "number" || typeof s != "number")
                }
                static equals(t, e) {
                    return t.x === e.x && t.y === e.y && t.z === e.z
                }
                toObject() {
                    return {
                        x: this.x,
                        y: this.y,
                        z: this.z
                    }
                }
            }
            ,
            qv = {
                toComponents: i => i.getComponents(),
                fromComponents: i => new pi(...i)
            };
        Uy = Nt({
            id: "input-point3d",
            type: "input",
            accept: (i, t) => {
                if (!pi.isObject(i))
                    return null;
                let e = ct(t, r => Object.assign(Object.assign({}, bs(r)), {
                    readonly: r.optional.constant(!1),
                    x: r.optional.custom(di),
                    y: r.optional.custom(di),
                    z: r.optional.custom(di)
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: i => Dy,
                constraint: i => By(i.params, i.initialValue),
                equals: pi.equals,
                writer: i => Ny
            },
            controller: i => {
                let t = i.value
                    , e = i.constraint
                    , r = [i.params.x, i.params.y, i.params.z];
                return new Es(i.document, {
                    assembly: qv,
                    axes: t.rawValue.getComponents().map((s, n) => {
                        var o;
                        return Oc({
                            constraint: e.components[n],
                            initialValue: s,
                            params: qi(i.params, (o = r[n]) !== null && o !== void 0 ? o : {})
                        })
                    }
                    ),
                    parser: We,
                    value: t,
                    viewProps: i.viewProps
                })
            }
        }),
            fi = class {
                constructor(t = 0, e = 0, r = 0, s = 0) {
                    this.x = t,
                        this.y = e,
                        this.z = r,
                        this.w = s
                }
                getComponents() {
                    return [this.x, this.y, this.z, this.w]
                }
                static isObject(t) {
                    if (Z(t))
                        return !1;
                    let e = t.x
                        , r = t.y
                        , s = t.z
                        , n = t.w;
                    return !(typeof e != "number" || typeof r != "number" || typeof s != "number" || typeof n != "number")
                }
                static equals(t, e) {
                    return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w
                }
                toObject() {
                    return {
                        x: this.x,
                        y: this.y,
                        z: this.z,
                        w: this.w
                    }
                }
            }
            ,
            Hv = {
                toComponents: i => i.getComponents(),
                fromComponents: i => new fi(...i)
            };
        Wy = Nt({
            id: "input-point4d",
            type: "input",
            accept: (i, t) => {
                if (!fi.isObject(i))
                    return null;
                let e = ct(t, r => Object.assign(Object.assign({}, bs(r)), {
                    readonly: r.optional.constant(!1),
                    w: r.optional.custom(di),
                    x: r.optional.custom(di),
                    y: r.optional.custom(di),
                    z: r.optional.custom(di)
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: i => jy,
                constraint: i => Hy(i.params, i.initialValue),
                equals: fi.equals,
                writer: i => qy
            },
            controller: i => {
                let t = i.value
                    , e = i.constraint
                    , r = [i.params.x, i.params.y, i.params.z, i.params.w];
                return new Es(i.document, {
                    assembly: Hv,
                    axes: t.rawValue.getComponents().map((s, n) => {
                        var o;
                        return Oc({
                            constraint: e.components[n],
                            initialValue: s,
                            params: qi(i.params, (o = r[n]) !== null && o !== void 0 ? o : {})
                        })
                    }
                    ),
                    parser: We,
                    value: t,
                    viewProps: i.viewProps
                })
            }
        });
        Gy = Nt({
            id: "input-string",
            type: "input",
            accept: (i, t) => {
                if (typeof i != "string")
                    return null;
                let e = ct(t, r => ({
                    readonly: r.optional.constant(!1),
                    options: r.optional.custom(Ms)
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                reader: i => vv,
                constraint: i => $y(i.params),
                writer: i => Ss
            },
            controller: i => {
                let t = i.document
                    , e = i.value
                    , r = i.constraint
                    , s = r && _o(r, Yi);
                return s ? new Le(t, {
                    props: new B({
                        options: s.values.value("options")
                    }),
                    value: e,
                    viewProps: i.viewProps
                }) : new Xi(t, {
                    parser: n => n,
                    props: B.fromObject({
                        formatter: Nh
                    }),
                    value: e,
                    viewProps: i.viewProps
                })
            }
            ,
            api(i) {
                return typeof i.controller.value.rawValue != "string" ? null : i.controller.valueController instanceof Le ? new gs(i.controller) : null
            }
        }),
            As = {
                monitor: {
                    defaultInterval: 200,
                    defaultRows: 3
                }
            },
            Gm = H("mll"),
            uc = class {
                constructor(t, e) {
                    this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                        this.formatter_ = e.formatter,
                        this.element = t.createElement("div"),
                        this.element.classList.add(Gm()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("textarea");
                    r.classList.add(Gm("i")),
                        r.style.height = `calc(var(${bv("containerUnitSize")}) * ${e.rows})`,
                        r.readOnly = !0,
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.textareaElem_ = r,
                        e.value.emitter.on("change", this.onValueUpdate_),
                        this.value = e.value,
                        this.update_()
                }
                update_() {
                    let t = this.textareaElem_
                        , e = t.scrollTop === t.scrollHeight - t.clientHeight
                        , r = [];
                    this.value.rawValue.forEach(s => {
                        s !== void 0 && r.push(this.formatter_(s))
                    }
                    ),
                        t.textContent = r.join(`
`),
                        e && (t.scrollTop = t.scrollHeight)
                }
                onValueUpdate_() {
                    this.update_()
                }
            }
            ,
            Cs = class {
                constructor(t, e) {
                    this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new uc(t, {
                            formatter: e.formatter,
                            rows: e.rows,
                            value: this.value,
                            viewProps: this.viewProps
                        })
                }
            }
            ,
            Ym = H("sgl"),
            dc = class {
                constructor(t, e) {
                    this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                        this.formatter_ = e.formatter,
                        this.element = t.createElement("div"),
                        this.element.classList.add(Ym()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("input");
                    r.classList.add(Ym("i")),
                        r.readOnly = !0,
                        r.type = "text",
                        e.viewProps.bindDisabled(r),
                        this.element.appendChild(r),
                        this.inputElement = r,
                        e.value.emitter.on("change", this.onValueUpdate_),
                        this.value = e.value,
                        this.update_()
                }
                update_() {
                    let t = this.value.rawValue
                        , e = t[t.length - 1];
                    this.inputElement.value = e !== void 0 ? this.formatter_(e) : ""
                }
                onValueUpdate_() {
                    this.update_()
                }
            }
            ,
            Ps = class {
                constructor(t, e) {
                    this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.view = new dc(t, {
                            formatter: e.formatter,
                            value: this.value,
                            viewProps: this.viewProps
                        })
                }
            }
            ,
            Yy = Nt({
                id: "monitor-bool",
                type: "monitor",
                accept: (i, t) => {
                    if (typeof i != "boolean")
                        return null;
                    let e = ct(t, r => ({
                        readonly: r.required.constant(!0),
                        rows: r.optional.number
                    }));
                    return e ? {
                        initialValue: i,
                        params: e
                    } : null
                }
                ,
                binding: {
                    reader: i => mv
                },
                controller: i => {
                    var t;
                    return i.value.rawValue.length === 1 ? new Ps(i.document, {
                        formatter: Dm,
                        value: i.value,
                        viewProps: i.viewProps
                    }) : new Cs(i.document, {
                        formatter: Dm,
                        rows: (t = i.params.rows) !== null && t !== void 0 ? t : As.monitor.defaultRows,
                        value: i.value,
                        viewProps: i.viewProps
                    })
                }
            }),
            pc = class extends $i {
                get max() {
                    return this.controller.valueController.props.get("max")
                }
                set max(t) {
                    this.controller.valueController.props.set("max", t)
                }
                get min() {
                    return this.controller.valueController.props.get("min")
                }
                set min(t) {
                    this.controller.valueController.props.set("min", t)
                }
            }
            ,
            ui = H("grl"),
            fc = class {
                constructor(t, e) {
                    this.onCursorChange_ = this.onCursorChange_.bind(this),
                        this.onValueUpdate_ = this.onValueUpdate_.bind(this),
                        this.element = t.createElement("div"),
                        this.element.classList.add(ui()),
                        e.viewProps.bindClassModifiers(this.element),
                        this.formatter_ = e.formatter,
                        this.props_ = e.props,
                        this.cursor_ = e.cursor,
                        this.cursor_.emitter.on("change", this.onCursorChange_);
                    let r = t.createElementNS(Ae, "svg");
                    r.classList.add(ui("g")),
                        r.style.height = `calc(var(${bv("containerUnitSize")}) * ${e.rows})`,
                        this.element.appendChild(r),
                        this.svgElem_ = r;
                    let s = t.createElementNS(Ae, "polyline");
                    this.svgElem_.appendChild(s),
                        this.lineElem_ = s;
                    let n = t.createElement("div");
                    n.classList.add(ui("t"), H("tt")()),
                        this.element.appendChild(n),
                        this.tooltipElem_ = n,
                        e.value.emitter.on("change", this.onValueUpdate_),
                        this.value = e.value,
                        this.update_()
                }
                get graphElement() {
                    return this.svgElem_
                }
                update_() {
                    let { clientWidth: t, clientHeight: e } = this.element
                        , r = this.value.rawValue.length - 1
                        , s = this.props_.get("min")
                        , n = this.props_.get("max")
                        , o = [];
                    this.value.rawValue.forEach((u, d) => {
                        if (u === void 0)
                            return;
                        let f = G(d, 0, r, 0, t)
                            , m = G(u, s, n, e, 0);
                        o.push([f, m].join(","))
                    }
                    ),
                        this.lineElem_.setAttributeNS(null, "points", o.join(" "));
                    let a = this.tooltipElem_
                        , l = this.value.rawValue[this.cursor_.rawValue];
                    if (l === void 0) {
                        a.classList.remove(ui("t", "a"));
                        return
                    }
                    let h = G(this.cursor_.rawValue, 0, r, 0, t)
                        , c = G(l, s, n, e, 0);
                    a.style.left = `${h}px`,
                        a.style.top = `${c}px`,
                        a.textContent = `${this.formatter_(l)}`,
                        a.classList.contains(ui("t", "a")) || (a.classList.add(ui("t", "a"), ui("t", "in")),
                            ho(a),
                            a.classList.remove(ui("t", "in")))
                }
                onValueUpdate_() {
                    this.update_()
                }
                onCursorChange_() {
                    this.update_()
                }
            }
            ,
            yo = class {
                constructor(t, e) {
                    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this),
                        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this),
                        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this),
                        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this),
                        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this),
                        this.props = e.props,
                        this.value = e.value,
                        this.viewProps = e.viewProps,
                        this.cursor_ = st(-1),
                        this.view = new fc(t, {
                            cursor: this.cursor_,
                            formatter: e.formatter,
                            rows: e.rows,
                            props: this.props,
                            value: this.value,
                            viewProps: this.viewProps
                        }),
                        !Lc(t))
                        this.view.element.addEventListener("mousemove", this.onGraphMouseMove_),
                            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
                    else {
                        let r = new Ke(this.view.element);
                        r.emitter.on("down", this.onGraphPointerDown_),
                            r.emitter.on("move", this.onGraphPointerMove_),
                            r.emitter.on("up", this.onGraphPointerUp_)
                    }
                }
                importProps(t) {
                    return Jt(t, null, e => ({
                        max: e.required.number,
                        min: e.required.number
                    }), e => (this.props.set("max", e.max),
                        this.props.set("min", e.min),
                        !0))
                }
                exportProps() {
                    return te(null, {
                        max: this.props.get("max"),
                        min: this.props.get("min")
                    })
                }
                onGraphMouseLeave_() {
                    this.cursor_.rawValue = -1
                }
                onGraphMouseMove_(t) {
                    let { clientWidth: e } = this.view.element;
                    this.cursor_.rawValue = Math.floor(G(t.offsetX, 0, e, 0, this.value.rawValue.length))
                }
                onGraphPointerDown_(t) {
                    this.onGraphPointerMove_(t)
                }
                onGraphPointerMove_(t) {
                    if (!t.data.point) {
                        this.cursor_.rawValue = -1;
                        return
                    }
                    this.cursor_.rawValue = Math.floor(G(t.data.point.x, 0, t.data.bounds.width, 0, this.value.rawValue.length))
                }
                onGraphPointerUp_() {
                    this.cursor_.rawValue = -1
                }
            }
            ;
        Qy = Nt({
            id: "monitor-number",
            type: "monitor",
            accept: (i, t) => {
                if (typeof i != "number")
                    return null;
                let e = ct(t, r => ({
                    format: r.optional.function,
                    max: r.optional.number,
                    min: r.optional.number,
                    readonly: r.required.constant(!0),
                    rows: r.optional.number,
                    view: r.optional.string
                }));
                return e ? {
                    initialValue: i,
                    params: e
                } : null
            }
            ,
            binding: {
                defaultBufferSize: i => Xm(i) ? 64 : 1,
                reader: i => tv
            },
            controller: i => Xm(i.params) ? Ky(i) : Xy(i),
            api: i => i.controller.valueController instanceof yo ? new pc(i.controller) : null
        }),
            Zy = Nt({
                id: "monitor-string",
                type: "monitor",
                accept: (i, t) => {
                    if (typeof i != "string")
                        return null;
                    let e = ct(t, r => ({
                        multiline: r.optional.boolean,
                        readonly: r.required.constant(!0),
                        rows: r.optional.number
                    }));
                    return e ? {
                        initialValue: i,
                        params: e
                    } : null
                }
                ,
                binding: {
                    reader: i => vv
                },
                controller: i => {
                    var t;
                    let e = i.value;
                    return e.rawValue.length > 1 || i.params.multiline ? new Cs(i.document, {
                        formatter: Nh,
                        rows: (t = i.params.rows) !== null && t !== void 0 ? t : As.monitor.defaultRows,
                        value: e,
                        viewProps: i.viewProps
                    }) : new Ps(i.document, {
                        formatter: Nh,
                        value: e,
                        viewProps: i.viewProps
                    })
                }
            }),
            vc = class {
                constructor() {
                    this.map_ = new Map
                }
                get(t) {
                    var e;
                    return (e = this.map_.get(t)) !== null && e !== void 0 ? e : null
                }
                has(t) {
                    return this.map_.has(t)
                }
                add(t, e) {
                    return this.map_.set(t, e),
                        t.viewProps.handleDispose(() => {
                            this.map_.delete(t)
                        }
                        ),
                        e
                }
            }
            ,
            gc = class {
                constructor(t) {
                    this.target = t.target,
                        this.reader_ = t.reader,
                        this.writer_ = t.writer
                }
                read() {
                    return this.reader_(this.target.read())
                }
                write(t) {
                    this.writer_(this.target, t)
                }
                inject(t) {
                    this.write(this.reader_(t))
                }
            }
            ;
        _c = class {
            constructor(t) {
                this.target = t.target,
                    this.reader_ = t.reader
            }
            read() {
                return this.reader_(this.target.read())
            }
        }
            ;
        bc = class {
            constructor(t) {
                this.pluginsMap_ = {
                    blades: [],
                    inputs: [],
                    monitors: []
                },
                    this.apiCache_ = t
            }
            getAll() {
                return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors]
            }
            register(t, e) {
                if (!x1(e.core))
                    throw Et.notCompatible(t, e.id);
                e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e)
            }
            createInput_(t, e, r) {
                return this.pluginsMap_.inputs.reduce((s, n) => s != null ? s : Jy(n, {
                    document: t,
                    target: e,
                    params: r
                }), null)
            }
            createMonitor_(t, e, r) {
                return this.pluginsMap_.monitors.reduce((s, n) => s != null ? s : ex(n, {
                    document: t,
                    params: r,
                    target: e
                }), null)
            }
            createBinding(t, e, r) {
                let s = e.read();
                if (Z(s))
                    throw new Et({
                        context: {
                            key: e.key
                        },
                        type: "nomatchingcontroller"
                    });
                let n = this.createInput_(t, e, r);
                if (n)
                    return n;
                let o = this.createMonitor_(t, e, r);
                if (o)
                    return o;
                throw new Et({
                    context: {
                        key: e.key
                    },
                    type: "nomatchingcontroller"
                })
            }
            createBlade(t, e) {
                let r = this.pluginsMap_.blades.reduce((s, n) => s != null ? s : v1(n, {
                    document: t,
                    params: e
                }), null);
                if (!r)
                    throw new Et({
                        type: "nomatchingview",
                        context: {
                            params: e
                        }
                    });
                return r
            }
            createInputBindingApi_(t) {
                let e = this.pluginsMap_.inputs.reduce((r, s) => {
                    var n, o;
                    return r || ((o = (n = s.api) === null || n === void 0 ? void 0 : n.call(s, {
                        controller: t
                    })) !== null && o !== void 0 ? o : null)
                }
                    , null);
                return this.apiCache_.add(t, e != null ? e : new $i(t))
            }
            createMonitorBindingApi_(t) {
                let e = this.pluginsMap_.monitors.reduce((r, s) => {
                    var n, o;
                    return r || ((o = (n = s.api) === null || n === void 0 ? void 0 : n.call(s, {
                        controller: t
                    })) !== null && o !== void 0 ? o : null)
                }
                    , null);
                return this.apiCache_.add(t, e != null ? e : new $i(t))
            }
            createBindingApi(t) {
                if (this.apiCache_.has(t))
                    return this.apiCache_.get(t);
                if (Zw(t))
                    return this.createInputBindingApi_(t);
                if (r1(t))
                    return this.createMonitorBindingApi_(t);
                throw Et.shouldNeverHappen()
            }
            createApi(t) {
                if (this.apiCache_.has(t))
                    return this.apiCache_.get(t);
                if (Qw(t))
                    return this.createBindingApi(t);
                let e = this.pluginsMap_.blades.reduce((r, s) => r != null ? r : s.api({
                    controller: t,
                    pool: this
                }), null);
                if (!e)
                    throw Et.shouldNeverHappen();
                return this.apiCache_.add(t, e)
            }
        }
            ,
            ix = new vc;
        wc = class extends $e {
            constructor(t) {
                super(t),
                    this.emitter_ = new pt,
                    this.controller.value.emitter.on("change", e => {
                        this.emitter_.emit("change", new Wi(this, e.rawValue))
                    }
                    )
            }
            get label() {
                return this.controller.labelController.props.get("label")
            }
            set label(t) {
                this.controller.labelController.props.set("label", t)
            }
            get options() {
                return this.controller.valueController.props.get("options")
            }
            set options(t) {
                this.controller.valueController.props.set("options", t)
            }
            get value() {
                return this.controller.value.rawValue
            }
            set value(t) {
                this.controller.value.rawValue = t
            }
            on(t, e) {
                let r = e.bind(this);
                return this.emitter_.on(t, s => {
                    r(s)
                }
                    , {
                        key: e
                    }),
                    this
            }
            off(t, e) {
                return this.emitter_.off(t, e),
                    this
            }
        }
            ,
            yc = class extends $e {
            }
            ,
            xc = class extends $e {
                constructor(t) {
                    super(t),
                        this.emitter_ = new pt,
                        this.controller.value.emitter.on("change", e => {
                            this.emitter_.emit("change", new Wi(this, e.rawValue))
                        }
                        )
                }
                get label() {
                    return this.controller.labelController.props.get("label")
                }
                set label(t) {
                    this.controller.labelController.props.set("label", t)
                }
                get max() {
                    return this.controller.valueController.sliderController.props.get("max")
                }
                set max(t) {
                    this.controller.valueController.sliderController.props.set("max", t)
                }
                get min() {
                    return this.controller.valueController.sliderController.props.get("min")
                }
                set min(t) {
                    this.controller.valueController.sliderController.props.set("min", t)
                }
                get value() {
                    return this.controller.value.rawValue
                }
                set value(t) {
                    this.controller.value.rawValue = t
                }
                on(t, e) {
                    let r = e.bind(this);
                    return this.emitter_.on(t, s => {
                        r(s)
                    }
                        , {
                            key: e
                        }),
                        this
                }
                off(t, e) {
                    return this.emitter_.off(t, e),
                        this
                }
            }
            ,
            Ec = class extends $e {
                constructor(t) {
                    super(t),
                        this.emitter_ = new pt,
                        this.controller.value.emitter.on("change", e => {
                            this.emitter_.emit("change", new Wi(this, e.rawValue))
                        }
                        )
                }
                get label() {
                    return this.controller.labelController.props.get("label")
                }
                set label(t) {
                    this.controller.labelController.props.set("label", t)
                }
                get formatter() {
                    return this.controller.valueController.props.get("formatter")
                }
                set formatter(t) {
                    this.controller.valueController.props.set("formatter", t)
                }
                get value() {
                    return this.controller.value.rawValue
                }
                set value(t) {
                    this.controller.value.rawValue = t
                }
                on(t, e) {
                    let r = e.bind(this);
                    return this.emitter_.on(t, s => {
                        r(s)
                    }
                        , {
                            key: e
                        }),
                        this
                }
                off(t, e) {
                    return this.emitter_.off(t, e),
                        this
                }
            }
            ,
            sx = function () {
                return {
                    id: "list",
                    type: "blade",
                    core: kr,
                    accept(i) {
                        let t = ct(i, e => ({
                            options: e.required.custom(Ms),
                            value: e.required.raw,
                            view: e.required.constant("list"),
                            label: e.optional.string
                        }));
                        return t ? {
                            params: t
                        } : null
                    },
                    controller(i) {
                        let t = new Yi(zc(i.params.options))
                            , e = st(i.params.value, {
                                constraint: t
                            })
                            , r = new Le(i.document, {
                                props: new B({
                                    options: t.values.value("options")
                                }),
                                value: e,
                                viewProps: i.viewProps
                            });
                        return new Ge(i.document, {
                            blade: i.blade,
                            props: B.fromObject({
                                label: i.params.label
                            }),
                            value: e,
                            valueController: r
                        })
                    },
                    api(i) {
                        return !(i.controller instanceof Ge) || !(i.controller.valueController instanceof Le) ? null : new wc(i.controller)
                    }
                }
            }(),
            Cc = class extends vo {
                constructor(t, e) {
                    super(t, e)
                }
                get element() {
                    return this.controller.view.element
                }
            }
            ,
            Pc = class extends ms {
                constructor(t, e) {
                    super(t, {
                        expanded: e.expanded,
                        blade: e.blade,
                        props: e.props,
                        root: !0,
                        viewProps: e.viewProps
                    })
                }
            }
            ,
            Km = H("spr"),
            Mc = class {
                constructor(t, e) {
                    this.element = t.createElement("div"),
                        this.element.classList.add(Km()),
                        e.viewProps.bindClassModifiers(this.element);
                    let r = t.createElement("hr");
                    r.classList.add(Km("r")),
                        this.element.appendChild(r)
                }
            }
            ,
            xo = class extends Mr {
                constructor(t, e) {
                    super(Object.assign(Object.assign({}, e), {
                        view: new Mc(t, {
                            viewProps: e.viewProps
                        })
                    }))
                }
            }
            ,
            nx = {
                id: "separator",
                type: "blade",
                core: kr,
                accept(i) {
                    let t = ct(i, e => ({
                        view: e.required.constant("separator")
                    }));
                    return t ? {
                        params: t
                    } : null
                },
                controller(i) {
                    return new xo(i.document, {
                        blade: i.blade,
                        viewProps: i.viewProps
                    })
                },
                api(i) {
                    return i.controller instanceof xo ? new yc(i.controller) : null
                }
            },
            ox = {
                id: "slider",
                type: "blade",
                core: kr,
                accept(i) {
                    let t = ct(i, e => ({
                        max: e.required.number,
                        min: e.required.number,
                        view: e.required.constant("slider"),
                        format: e.optional.function,
                        label: e.optional.string,
                        value: e.optional.number
                    }));
                    return t ? {
                        params: t
                    } : null
                },
                controller(i) {
                    var t, e;
                    let r = (t = i.params.value) !== null && t !== void 0 ? t : 0
                        , s = new Hi({
                            max: i.params.max,
                            min: i.params.min
                        })
                        , n = st(r, {
                            constraint: s
                        })
                        , o = new Sr(i.document, Object.assign(Object.assign({}, _v({
                            formatter: (e = i.params.format) !== null && e !== void 0 ? e : zw,
                            keyScale: st(1),
                            max: s.values.value("max"),
                            min: s.values.value("min"),
                            pointerScale: rv(i.params, r)
                        })), {
                            parser: We,
                            value: n,
                            viewProps: i.viewProps
                        }));
                    return new Ge(i.document, {
                        blade: i.blade,
                        props: B.fromObject({
                            label: i.params.label
                        }),
                        value: n,
                        valueController: o
                    })
                },
                api(i) {
                    return !(i.controller instanceof Ge) || !(i.controller.valueController instanceof Sr) ? null : new xc(i.controller)
                }
            },
            ax = function () {
                return {
                    id: "text",
                    type: "blade",
                    core: kr,
                    accept(i) {
                        let t = ct(i, e => ({
                            parse: e.required.function,
                            value: e.required.raw,
                            view: e.required.constant("text"),
                            format: e.optional.function,
                            label: e.optional.string
                        }));
                        return t ? {
                            params: t
                        } : null
                    },
                    controller(i) {
                        var t;
                        let e = st(i.params.value)
                            , r = new Xi(i.document, {
                                parser: i.params.parse,
                                props: B.fromObject({
                                    formatter: (t = i.params.format) !== null && t !== void 0 ? t : s => String(s)
                                }),
                                value: e,
                                viewProps: i.viewProps
                            });
                        return new Ge(i.document, {
                            blade: i.blade,
                            props: B.fromObject({
                                label: i.params.label
                            }),
                            value: e,
                            valueController: r
                        })
                    },
                    api(i) {
                        return !(i.controller instanceof Ge) || !(i.controller.valueController instanceof Xi) ? null : new Ec(i.controller)
                    }
                }
            }();
        Eo = class extends Cc {
            constructor(t) {
                var e, r;
                let s = t != null ? t : {}
                    , n = (e = s.document) !== null && e !== void 0 ? e : Hw()
                    , o = rx()
                    , a = new Pc(n, {
                        expanded: s.expanded,
                        blade: Or(),
                        props: B.fromObject({
                            title: s.title
                        }),
                        viewProps: Ye.create()
                    });
                super(a, o),
                    this.pool_ = o,
                    this.containerElem_ = (r = s.container) !== null && r !== void 0 ? r : lx(n),
                    this.containerElem_.appendChild(this.element),
                    this.doc_ = n,
                    this.usesDefaultWrapper_ = !s.container,
                    this.setUpDefaultPlugins_()
            }
            get document() {
                if (!this.doc_)
                    throw Et.alreadyDisposed();
                return this.doc_
            }
            dispose() {
                let t = this.containerElem_;
                if (!t)
                    throw Et.alreadyDisposed();
                if (this.usesDefaultWrapper_) {
                    let e = t.parentElement;
                    e && e.removeChild(t)
                }
                this.containerElem_ = null,
                    this.doc_ = null,
                    super.dispose()
            }
            registerPlugin(t) {
                t.css && hx(this.document, `plugin-${t.id}`, t.css),
                    ("plugin" in t ? [t.plugin] : "plugins" in t ? t.plugins : []).forEach(r => {
                        this.pool_.register(t.id, r)
                    }
                    )
            }
            setUpDefaultPlugins_() {
                this.registerPlugin({
                    id: "default",
                    css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
                    plugins: [sx, nx, ox, fv, ax]
                })
            }
        }
            ,
            rS = new mo("4.0.5")
    }
    );
    var $v = {};
    Do($v, {
        default: () => qc
    });
    var qc, Gv = z(() => {
        "use strict";
        Wv();
        qc = class i {
            constructor() {
                if (i.instance)
                    return i.instance;
                i.instance = this,
                    this.gui = new Eo({
                        title: "DEBUG"
                    }),
                    this.gui.element.parentElement && (this.gui.element.parentElement.style.position = "fixed",
                        this.gui.element.parentElement.style.zIndex = "1000")
            }
            createForObject(t, e) {
                var r;
                if (!this.gui || !t || "noGUI" in t && t.noGUI)
                    return;
                let s = (e || this.gui).addFolder({
                    title: t.name || "obj-" + t.id,
                    expanded: !1
                })
                    , n = {
                        position: t.position.clone(),
                        scale: t.scale.clone()
                    };
                s.addBinding(t, "visible");
                let o = s.addBinding(t.scale, "x", {
                    min: 0,
                    max: 3,
                    label: "scale"
                }).on("change", ({ value: l }) => {
                    t.scale.set(l, l, l)
                }
                )
                    , a = s.addBinding(t, "position", {
                        x: {
                            min: -25,
                            max: 25
                        },
                        y: {
                            min: -25,
                            max: 25
                        },
                        z: {
                            min: -25,
                            max: 25
                        }
                    });
                return s.addButton({
                    title: "reset"
                }).on("click", () => {
                    t.position.copy(n.position),
                        t.scale.copy(n.scale),
                        o.refresh(),
                        a.refresh()
                }
                ),
                    (r = t.gui) == null || r.call(t, s),
                    t.guiFolder = s,
                    s
            }
            addFolder(t, e) {
                var r;
                e ? e.addFolder({
                    title: t,
                    expanded: !1
                }) : (r = this.gui) == null || r.addFolder({
                    title: t,
                    expanded: !1
                })
            }
            destroy() {
                var t;
                (t = this.gui) == null || t.dispose()
            }
        }
    }
    );
    var og = gg((ng, Fo) => {
        (function (i, t) {
            typeof define == "function" && define.amd ? define([], function () {
                return i.svg4everybody = t()
            }) : typeof Fo == "object" && Fo.exports ? Fo.exports = t() : i.svg4everybody = t()
        }
        )(ng, function () {
            function i(s, n, o) {
                if (o) {
                    var a = document.createDocumentFragment()
                        , l = !n.hasAttribute("viewBox") && o.getAttribute("viewBox");
                    l && n.setAttribute("viewBox", l);
                    for (var h = o.cloneNode(!0); h.childNodes.length;)
                        a.appendChild(h.firstChild);
                    s.appendChild(a)
                }
            }
            function t(s) {
                s.onreadystatechange = function () {
                    if (s.readyState === 4) {
                        var n = s._cachedDocument;
                        n || (n = s._cachedDocument = document.implementation.createHTMLDocument(""),
                            n.body.innerHTML = s.responseText,
                            s._cachedTarget = {}),
                            s._embeds.splice(0).map(function (o) {
                                var a = s._cachedTarget[o.id];
                                a || (a = s._cachedTarget[o.id] = n.getElementById(o.id)),
                                    i(o.parent, o.svg, a)
                            })
                    }
                }
                    ,
                    s.onreadystatechange()
            }
            function e(s) {
                function n() {
                    for (var g = 0; g < p.length;) {
                        var w = p[g]
                            , b = w.parentNode
                            , x = r(b)
                            , _ = w.getAttribute("xlink:href") || w.getAttribute("href");
                        if (!_ && a.attributeName && (_ = w.getAttribute(a.attributeName)),
                            x && _) {
                            if (o)
                                if (!a.validate || a.validate(_, x, w)) {
                                    b.removeChild(w);
                                    var y = _.split("#")
                                        , P = y.shift()
                                        , E = y.join("#");
                                    if (P.length) {
                                        var C = f[P];
                                        C || (C = f[P] = new XMLHttpRequest,
                                            C.open("GET", P),
                                            C.send(),
                                            C._embeds = []),
                                            C._embeds.push({
                                                parent: b,
                                                svg: x,
                                                id: E
                                            }),
                                            t(C)
                                    } else
                                        i(b, x, document.getElementById(E))
                                } else
                                    ++g,
                                        ++v
                        } else
                            ++g
                    }
                    (!p.length || p.length - v > 0) && m(n, 67)
                }
                var o, a = Object(s), l = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, h = /\bAppleWebKit\/(\d+)\b/, c = /\bEdge\/12\.(\d+)\b/, u = /\bEdge\/.(\d+)\b/, d = window.top !== window.self;
                o = "polyfill" in a ? a.polyfill : l.test(navigator.userAgent) || (navigator.userAgent.match(c) || [])[1] < 10547 || (navigator.userAgent.match(h) || [])[1] < 537 || u.test(navigator.userAgent) && d;
                var f = {}
                    , m = window.requestAnimationFrame || setTimeout
                    , p = document.getElementsByTagName("use")
                    , v = 0;
                o && n()
            }
            function r(s) {
                for (var n = s; n.nodeName.toLowerCase() !== "svg" && (n = n.parentNode);)
                    ;
                return n
            }
            return e
        })
    }
    );
    function Fs(i) {
        "@babel/helpers - typeof";
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fs = function (t) {
            return typeof t
        }
            : Fs = function (t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Fs(i)
    }
    function eu(i, t) {
        if (!(i instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Jc(i, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(i, r.key, r)
        }
    }
    function iu(i, t, e) {
        return t && Jc(i.prototype, t),
            e && Jc(i, e),
            i
    }
    function tu(i, t, e) {
        return t in i ? Object.defineProperty(i, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[t] = e,
            i
    }
    function Rs(i, t) {
        return xg(i) || Cg(i, t) || ru(i, t) || Mg()
    }
    function wg(i) {
        return yg(i) || Eg(i) || ru(i) || Pg()
    }
    function yg(i) {
        if (Array.isArray(i))
            return No(i)
    }
    function xg(i) {
        if (Array.isArray(i))
            return i
    }
    function Eg(i) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(i))
            return Array.from(i)
    }
    function Cg(i, t) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(i)))) {
            var e = []
                , r = !0
                , s = !1
                , n = void 0;
            try {
                for (var o = i[Symbol.iterator](), a; !(r = (a = o.next()).done) && (e.push(a.value),
                    !(t && e.length === t)); r = !0)
                    ;
            } catch (l) {
                s = !0,
                    n = l
            } finally {
                try {
                    !r && o.return != null && o.return()
                } finally {
                    if (s)
                        throw n
                }
            }
            return e
        }
    }
    function ru(i, t) {
        if (i) {
            if (typeof i == "string")
                return No(i, t);
            var e = Object.prototype.toString.call(i).slice(8, -1);
            if (e === "Object" && i.constructor && (e = i.constructor.name),
                e === "Map" || e === "Set")
                return Array.from(i);
            if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return No(i, t)
        }
    }
    function No(i, t) {
        (t == null || t > i.length) && (t = i.length);
        for (var e = 0, r = new Array(t); e < t; e++)
            r[e] = i[e];
        return r
    }
    function Pg() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function Mg() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var it = function () {
        function i(t) {
            eu(this, i),
                this.mAttr = "data-" + t.dataName,
                this.mCaptureEvents = ["mouseenter", "mouseleave"],
                this.el = t.el
        }
        return iu(i, [{
            key: "mInit",
            value: function (e) {
                var r = this;
                this.modules = e,
                    this.mCheckEventTarget = this.mCheckEventTarget.bind(this),
                    this.events && Object.keys(this.events).forEach(function (s) {
                        return r.mAddEvent(s)
                    })
            }
        }, {
            key: "mUpdate",
            value: function (e) {
                this.modules = e
            }
        }, {
            key: "mDestroy",
            value: function () {
                var e = this;
                this.events && Object.keys(this.events).forEach(function (r) {
                    return e.mRemoveEvent(r)
                })
            }
        }, {
            key: "mAddEvent",
            value: function (e) {
                var r = !!this.mCaptureEvents.includes(e);
                this.el.addEventListener(e, this.mCheckEventTarget, r)
            }
        }, {
            key: "mRemoveEvent",
            value: function (e) {
                var r = !!this.mCaptureEvents.includes(e);
                this.el.removeEventListener(e, this.mCheckEventTarget, r)
            }
        }, {
            key: "mCheckEventTarget",
            value: function (e) {
                var r = this.events[e.type];
                if (typeof r == "string")
                    this[r](e);
                else {
                    var s = "[" + this.mAttr + "]"
                        , n = e.target;
                    if (this.mCaptureEvents.includes(e.type))
                        n.matches(s) && this.mCallEventMethod(e, r, n);
                    else
                        for (; n && n !== document && !(n.matches(s) && this.mCallEventMethod(e, r, n) != "undefined");)
                            n = n.parentNode
                }
            }
        }, {
            key: "mCallEventMethod",
            value: function (e, r, s) {
                var n = s.getAttribute(this.mAttr);
                if (r.hasOwnProperty(n)) {
                    var o = r[n];
                    e.hasOwnProperty("currentTarget") || Object.defineProperty(e, "currentTarget", {
                        value: s
                    }),
                        e.hasOwnProperty("curTarget") || Object.defineProperty(e, "curTarget", {
                            value: s
                        }),
                        this[o](e)
                }
            }
        }, {
            key: "$",
            value: function (e, r) {
                var s = e.indexOf(".")
                    , n = e.indexOf("#")
                    , o = e.indexOf("[")
                    , a = [s, n, o].filter(function (d) {
                        return d != -1
                    })
                    , l = !1
                    , h = e
                    , c = ""
                    , u = this.el;
                return a.length && (l = Math.min.apply(Math, wg(a)),
                    h = e.slice(0, l),
                    c = e.slice(l)),
                    Fs(r) == "object" && (u = r),
                    u.querySelectorAll("[" + this.mAttr + "=" + h + "]" + c)
            }
        }, {
            key: "parent",
            value: function (e, r) {
                for (var s = "[" + this.mAttr + "=" + e + "]", n = r.parentNode; n && n !== document;) {
                    if (n.matches(s))
                        return n;
                    n = n.parentNode
                }
            }
        }, {
            key: "getData",
            value: function (e, r) {
                var s = r || this.el;
                return s.getAttribute(this.mAttr + "-" + e)
            }
        }, {
            key: "setData",
            value: function (e, r, s) {
                var n = s || this.el;
                return n.setAttribute(this.mAttr + "-" + e, r)
            }
        }, {
            key: "call",
            value: function (e, r, s, n) {
                var o = this;
                r && !s && (s = r,
                    r = !1),
                    this.modules[s] && (n ? this.modules[s][n] && this.modules[s][n][e](r) : Object.keys(this.modules[s]).forEach(function (a) {
                        o.modules[s][a][e](r)
                    }))
            }
        }, {
            key: "on",
            value: function (e, r, s, n) {
                var o = this;
                this.modules[r] && (n ? this.modules[r][n].el.addEventListener(e, function (a) {
                    return s(a)
                }) : Object.keys(this.modules[r]).forEach(function (a) {
                    o.modules[r][a].el.addEventListener(e, function (l) {
                        return s(l)
                    })
                }))
            }
        }, {
            key: "init",
            value: function () { }
        }, {
            key: "destroy",
            value: function () { }
        }]),
            i
    }()
        , Sg = function () {
            function i(t) {
                eu(this, i),
                    this.app,
                    this.modules = t.modules,
                    this.currentModules = {},
                    this.activeModules = {},
                    this.newModules = {},
                    this.moduleId = 0
            }
            return iu(i, [{
                key: "init",
                value: function (e, r) {
                    var s = this
                        , n = r || document
                        , o = n.querySelectorAll("*");
                    e && !this.app && (this.app = e),
                        this.activeModules.app = {
                            app: this.app
                        },
                        o.forEach(function (a) {
                            Array.from(a.attributes).forEach(function (l) {
                                if (l.name.startsWith("data-module")) {
                                    var h = !1
                                        , c = l.name.split("-").splice(2)
                                        , u = s.toCamel(c);
                                    if (s.modules[u] ? h = !0 : s.modules[s.toUpper(u)] && (u = s.toUpper(u),
                                        h = !0),
                                        h) {
                                        var d = {
                                            el: a,
                                            name: u,
                                            dataName: c.join("-")
                                        }
                                            , f = new s.modules[u](d)
                                            , m = l.value;
                                        m || (s.moduleId++,
                                            m = "m" + s.moduleId,
                                            a.setAttribute(l.name, m)),
                                            s.addActiveModule(u, m, f);
                                        var p = u + "-" + m;
                                        r ? s.newModules[p] = f : s.currentModules[p] = f
                                    }
                                }
                            })
                        }),
                        Object.entries(this.currentModules).forEach(function (a) {
                            var l = Rs(a, 2)
                                , h = l[0]
                                , c = l[1];
                            if (r) {
                                var u = h.split("-")
                                    , d = u.shift()
                                    , f = u.pop();
                                s.addActiveModule(d, f, c)
                            } else
                                s.initModule(c)
                        })
                }
            }, {
                key: "initModule",
                value: function (e) {
                    e.mInit(this.activeModules),
                        e.init()
                }
            }, {
                key: "addActiveModule",
                value: function (e, r, s) {
                    this.activeModules[e] ? Object.assign(this.activeModules[e], tu({}, r, s)) : this.activeModules[e] = tu({}, r, s)
                }
            }, {
                key: "update",
                value: function (e) {
                    var r = this;
                    this.init(this.app, e),
                        Object.entries(this.currentModules).forEach(function (s) {
                            var n = Rs(s, 2)
                                , o = n[0]
                                , a = n[1];
                            a.mUpdate(r.activeModules)
                        }),
                        Object.entries(this.newModules).forEach(function (s) {
                            var n = Rs(s, 2)
                                , o = n[0]
                                , a = n[1];
                            r.initModule(a)
                        }),
                        Object.assign(this.currentModules, this.newModules)
                }
            }, {
                key: "destroy",
                value: function (e) {
                    e ? this.destroyScope(e) : this.destroyModules()
                }
            }, {
                key: "destroyScope",
                value: function (e) {
                    var r = this
                        , s = e.querySelectorAll("*");
                    s.forEach(function (n) {
                        Array.from(n.attributes).forEach(function (o) {
                            if (o.name.startsWith("data-module")) {
                                var a = o.value
                                    , l = o.name.split("-").splice(2)
                                    , h = r.toCamel(l) + "-" + a
                                    , c = !1;
                                r.currentModules[h] ? c = !0 : r.currentModules[r.toUpper(h)] && (h = r.toUpper(h),
                                    c = !0),
                                    c && (r.destroyModule(r.currentModules[h]),
                                        delete r.currentModules[h])
                            }
                        })
                    }),
                        this.activeModules = {},
                        this.newModules = {}
                }
            }, {
                key: "destroyModules",
                value: function () {
                    var e = this;
                    Object.entries(this.currentModules).forEach(function (r) {
                        var s = Rs(r, 2)
                            , n = s[0]
                            , o = s[1];
                        e.destroyModule(o)
                    }),
                        this.currentModules = []
                }
            }, {
                key: "destroyModule",
                value: function (e) {
                    e.mDestroy(),
                        e.destroy()
                }
            }, {
                key: "toCamel",
                value: function (e) {
                    var r = this;
                    return e.reduce(function (s, n) {
                        return s + r.toUpper(n)
                    })
                }
            }, {
                key: "toUpper",
                value: function (e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
            }]),
                i
        }()
        , su = Sg;
    var Wc = {};
    Do(Wc, {
        About: () => Ro,
        Cursor: () => un,
        Example: () => Is,
        Hero: () => ko,
        Load: () => nn,
        Manifesto: () => Lo,
        Menu: () => pn,
        Portfolio: () => Oo,
        Scroll: () => cn,
        SectionTitle: () => fn,
        Split: () => mn,
        Time: () => dn
    });
    var Is = class extends it {
        constructor(i) {
            super(i)
        }
        init() { }
    }
        ;
    function Tg(i, t) {
        if (!(i instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function nu(i, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(i, r.key, r)
        }
    }
    function Ag(i, t, e) {
        return t && nu(i.prototype, t),
            e && nu(i, e),
            i
    }
    function kg(i, t) {
        return Og(i) || Lg(i, t) || Rg(i, t) || Fg()
    }
    function Og(i) {
        if (Array.isArray(i))
            return i
    }
    function Lg(i, t) {
        var e = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
        if (e != null) {
            var r = [], s = !0, n = !1, o, a;
            try {
                for (e = e.call(i); !(s = (o = e.next()).done) && (r.push(o.value),
                    !(t && r.length === t)); s = !0)
                    ;
            } catch (l) {
                n = !0,
                    a = l
            } finally {
                try {
                    !s && e.return != null && e.return()
                } finally {
                    if (n)
                        throw a
                }
            }
            return r
        }
    }
    function Rg(i, t) {
        if (i) {
            if (typeof i == "string")
                return ou(i, t);
            var e = Object.prototype.toString.call(i).slice(8, -1);
            if (e === "Object" && i.constructor && (e = i.constructor.name),
                e === "Map" || e === "Set")
                return Array.from(i);
            if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return ou(i, t)
        }
    }
    function ou(i, t) {
        (t == null || t > i.length) && (t = i.length);
        for (var e = 0, r = new Array(t); e < t; e++)
            r[e] = i[e];
        return r
    }
    function Fg() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var Ig = function () {
        function i(t) {
            Tg(this, i),
                this.defaults = {
                    name: "load",
                    loadingClass: "is-loading",
                    loadedClass: "is-loaded",
                    readyClass: "is-ready",
                    transitionsPrefix: "is-",
                    transitionsHistory: !0,
                    enterDelay: 0,
                    exitDelay: 0,
                    loadedDelay: 0,
                    isLoaded: !1,
                    isEntered: !1,
                    isUrl: !1,
                    transitionContainer: null,
                    popstateIgnore: !1
                },
                Object.assign(this, this.defaults, t),
                this.options = t,
                this.namespace = "modular",
                this.html = document.documentElement,
                this.href = window.location.href,
                this.container = "data-" + this.name + "-container",
                this.subContainer = !1,
                this.prevTransition = null,
                this.loadAttributes = ["src", "srcset", "style", "href"],
                this.isInserted = !1,
                this.isLoading = !1,
                this.enterTimeout = !1,
                this.controller = new AbortController,
                this.classContainer = this.html,
                this.isChrome = navigator.userAgent.indexOf("Chrome") != -1,
                this.init()
        }
        return Ag(i, [{
            key: "init",
            value: function () {
                var e = this;
                window.addEventListener("popstate", function (r) {
                    return e.checkState(r)
                }, !1),
                    this.html.addEventListener("click", function (r) {
                        return e.checkClick(r)
                    }, !1),
                    this.loadEls(document)
            }
        }, {
            key: "checkClick",
            value: function (e) {
                if (!e.ctrlKey && !e.metaKey)
                    for (var r = e.target; r && r !== document;) {
                        if (r.matches("a") && r.getAttribute("download") == null) {
                            var s = r.getAttribute("href");
                            !s.startsWith("#") && !s.startsWith("mailto:") && !s.startsWith("tel:") && (e.preventDefault(),
                                this.reset(),
                                this.getClickOptions(r));
                            break
                        }
                        r = r.parentNode
                    }
            }
        }, {
            key: "checkState",
            value: function () {
                typeof this.popstateIgnore == "string" && window.location.href.indexOf(this.popstateIgnore) > -1 || (this.reset(),
                    this.getStateOptions())
            }
        }, {
            key: "reset",
            value: function () {
                this.isLoading && (this.controller.abort(),
                    this.isLoading = !1,
                    this.controller = new AbortController),
                    window.clearTimeout(this.enterTimeout),
                    this.isInserted && this.removeContainer(),
                    this.classContainer = this.html,
                    Object.assign(this, this.defaults, this.options)
            }
        }, {
            key: "getClickOptions",
            value: function (e) {
                this.transition = e.getAttribute("data-" + this.name),
                    this.isUrl = e.getAttribute("data-" + this.name + "-url");
                var r = e.getAttribute("href")
                    , s = e.getAttribute("target");
                if (s == "_blank") {
                    window.open(r, "_blank");
                    return
                }
                if (this.transition == "false") {
                    window.location = r;
                    return
                }
                this.setOptions(r, !0)
            }
        }, {
            key: "getStateOptions",
            value: function () {
                this.transitionsHistory ? this.transition = history.state : this.transition = !1;
                var e = window.location.href;
                this.setOptions(e)
            }
        }, {
            key: "goTo",
            value: function (e, r, s) {
                this.reset(),
                    this.transition = r,
                    this.isUrl = s,
                    this.setOptions(e, !0)
            }
        }, {
            key: "setOptions",
            value: function (e, r) {
                var s = "[" + this.container + "]", n;
                this.transition && this.transition != "true" && (this.transitionContainer = "[" + this.container + '="' + this.transition + '"]',
                    this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass,
                    this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass,
                    this.readyClass = this.transitions[this.transition].readyClass || this.readyClass,
                    this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix,
                    this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay,
                    this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay,
                    this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay,
                    n = document.querySelector(this.transitionContainer)),
                    n ? (s = this.transitionContainer,
                        this.oldContainer = n,
                        this.classContainer = this.oldContainer.parentNode,
                        this.subContainer || history.replaceState(this.transition, null, this.href),
                        this.subContainer = !0) : (this.oldContainer = document.querySelector(s),
                            this.subContainer && history.replaceState(this.prevTransition, null, this.href),
                            this.subContainer = !1),
                    this.href = e,
                    this.parentContainer = this.oldContainer.parentNode,
                    this.isUrl === "" || this.isUrl != null && this.isUrl != "false" && this.isUrl != !1 ? history.pushState(this.transition, null, e) : (this.oldContainer.classList.add("is-old"),
                        this.setLoading(),
                        this.startEnterDelay(),
                        this.loadHref(e, s, r))
            }
        }, {
            key: "setLoading",
            value: function () {
                this.classContainer.classList.remove(this.loadedClass, this.readyClass),
                    this.classContainer.classList.add(this.loadingClass),
                    this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition),
                    this.transition && this.classContainer.classList.add(this.transitionsPrefix + this.transition),
                    this.subContainer || (this.prevTransition = this.transition);
                var e = new Event(this.namespace + "loading");
                window.dispatchEvent(e)
            }
        }, {
            key: "startEnterDelay",
            value: function () {
                var e = this;
                this.enterTimeout = window.setTimeout(function () {
                    e.isEntered = !0,
                        e.isLoaded && e.transitionContainers()
                }, this.enterDelay)
            }
        }, {
            key: "loadHref",
            value: function (e, r, s) {
                var n = this;
                this.isLoading = !0;
                var o = this.controller.signal;
                fetch(e, {
                    signal: o
                }).then(function (a) {
                    return a.text()
                }).then(function (a) {
                    s && history.pushState(n.transition, null, e);
                    var l = new DOMParser;
                    n.data = l.parseFromString(a, "text/html"),
                        n.newContainer = n.data.querySelector(r),
                        n.newContainer.classList.add("is-new"),
                        n.parentNewContainer = n.newContainer.parentNode,
                        n.hideContainer(),
                        n.parentContainer.insertBefore(n.newContainer, n.oldContainer),
                        n.isInserted = !0,
                        n.setSvgs(),
                        n.isLoaded = !0,
                        n.isEntered && n.transitionContainers(),
                        n.loadEls(n.newContainer),
                        n.isLoading = !1
                }).catch(function (a) {
                    window.location = e
                })
            }
        }, {
            key: "transitionContainers",
            value: function () {
                var e = this;
                this.setAttributes(),
                    this.showContainer(),
                    this.setLoaded(),
                    setTimeout(function () {
                        e.removeContainer(),
                            e.setReady()
                    }, this.exitDelay)
            }
        }, {
            key: "setSvgs",
            value: function () {
                if (this.isChrome) {
                    var e = this.newContainer.querySelectorAll("use");
                    e.length && e.forEach(function (r) {
                        var s = r.getAttribute("xlink:href");
                        if (s)
                            r.parentNode.innerHTML = '<use xlink:href="' + s + '"></use>';
                        else {
                            var n = r.getAttribute("href");
                            n && (r.parentNode.innerHTML = '<use href="' + n + '"></use>')
                        }
                    })
                }
            }
        }, {
            key: "setAttributes",
            value: function () {
                var e = this, r = this.data.getElementsByTagName("title")[0], s = this.data.head.querySelector('meta[name="description"]'), n = document.head.querySelector('meta[name="description"]'), o, a;
                this.subContainer ? (a = this.parentNewContainer,
                    o = document.querySelector(this.transitionContainer).parentNode) : (a = this.data.querySelector("html"),
                        o = document.querySelector("html"));
                var l = Object.assign({}, a.dataset);
                r && (document.title = r.innerText),
                    n && s && n.setAttribute("content", s.getAttribute("content")),
                    l && Object.entries(l).forEach(function (h) {
                        var c = kg(h, 2)
                            , u = c[0]
                            , d = c[1];
                        o.setAttribute("data-" + e.toDash(u), d)
                    })
            }
        }, {
            key: "toDash",
            value: function (e) {
                return e.split(/(?=[A-Z])/).join("-").toLowerCase()
            }
        }, {
            key: "hideContainer",
            value: function () {
                this.newContainer.style.visibility = "hidden",
                    this.newContainer.style.height = 0,
                    this.newContainer.style.overflow = "hidden"
            }
        }, {
            key: "showContainer",
            value: function () {
                this.newContainer.style.visibility = "",
                    this.newContainer.style.height = "",
                    this.newContainer.style.overflow = ""
            }
        }, {
            key: "loadEls",
            value: function (e) {
                var r = this
                    , s = [];
                this.loadAttributes.forEach(function (n) {
                    var o = "data-" + r.name + "-" + n
                        , a = e.querySelectorAll("[" + o + "]");
                    a.length && a.forEach(function (l) {
                        var h = l.getAttribute(o);
                        if (l.setAttribute(n, h),
                            n == "src" || n == "srcset") {
                            var c = new Promise(function (u) {
                                l.onload = function () {
                                    return u(l)
                                }
                            }
                            );
                            s.push(c)
                        }
                    })
                }),
                    Promise.all(s).then(function (n) {
                        var o = new Event(r.namespace + "images");
                        window.dispatchEvent(o)
                    })
            }
        }, {
            key: "setLoaded",
            value: function () {
                var e = this;
                this.classContainer.classList.remove(this.loadingClass),
                    setTimeout(function () {
                        e.classContainer.classList.add(e.loadedClass)
                    }, this.loadedDelay);
                var r = new Event(this.namespace + "loaded");
                window.dispatchEvent(r)
            }
        }, {
            key: "removeContainer",
            value: function () {
                this.parentContainer.removeChild(this.oldContainer),
                    this.newContainer.classList.remove("is-new"),
                    this.isInserted = !1
            }
        }, {
            key: "setReady",
            value: function () {
                this.classContainer.classList.add(this.readyClass);
                var e = new Event(this.namespace + "ready");
                window.dispatchEvent(e)
            }
        }, {
            key: "on",
            value: function (e, r) {
                var s = this;
                window.addEventListener(this.namespace + e, function () {
                    switch (e) {
                        case "loading":
                            return r(s.transition, s.oldContainer);
                        case "loaded":
                            return r(s.transition, s.oldContainer, s.newContainer);
                        case "ready":
                            return r(s.transition, s.newContainer);
                        default:
                            return r()
                    }
                }, !1)
            }
        }]),
            i
    }()
        , au = Ig;
    function Ie(i) {
        if (i === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
    }
    function mu(i, t) {
        i.prototype = Object.create(t.prototype),
            i.prototype.constructor = i,
            i.__proto__ = t
    }
    var Ht = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, tr = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, sa, St, rt, oe = 1e8, Q = 1 / oe, Go = Math.PI * 2, zg = Go / 4, Vg = 0, vu = Math.sqrt, Dg = Math.cos, Ng = Math.sin, _t = function (t) {
        return typeof t == "string"
    }, ut = function (t) {
        return typeof t == "function"
    }, Ve = function (t) {
        return typeof t == "number"
    }, Ws = function (t) {
        return typeof t == "undefined"
    }, xe = function (t) {
        return typeof t == "object"
    }, qt = function (t) {
        return t !== !1
    }, na = function () {
        return typeof window != "undefined"
    }, zs = function (t) {
        return ut(t) || _t(t)
    }, gu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () { }
        , Tt = Array.isArray, Yo = /(?:-?\.?\d|\.)+/gi, oa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, xi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Bo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, aa = /[+-]=-?[.\d]+/, _u = /[^,'"\[\]\s]+/gi, Bg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, at, we, Xo, la, Kt = {}, Bs = {}, bu, wu = function (t) {
            return (Bs = yi(t, Kt)) && At
        }, $s = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }, Br = function (t, e) {
            return !e && console.warn(t)
        }, yu = function (t, e) {
            return t && (Kt[t] = e) && Bs && (Bs[t] = e) || Kt
        }, Ur = function () {
            return 0
        }, Ug = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        }, Vs = {
            suppressEvents: !0,
            kill: !1
        }, jg = {
            suppressEvents: !0
        }, ha = {}, Je = [], Ko = {}, xu, Ut = {}, Uo = {}, lu = 30, Ds = [], ca = "", ua = function (t) {
            var e = t[0], r, s;
            if (xe(e) || ut(e) || (t = [t]),
                !(r = (e._gsap || {}).harness)) {
                for (s = Ds.length; s-- && !Ds[s].targetTest(e);)
                    ;
                r = Ds[s]
            }
            for (s = t.length; s--;)
                t[s] && (t[s]._gsap || (t[s]._gsap = new fa(t[s], r))) || t.splice(s, 1);
            return t
        }, ti = function (t) {
            return t._gsap || ua(ae(t))[0]._gsap
        }, da = function (t, e, r) {
            return (r = t[e]) && ut(r) ? t[e]() : Ws(r) && t.getAttribute && t.getAttribute(e) || r
        }, Ft = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, dt = function (t) {
            return Math.round(t * 1e5) / 1e5 || 0
        }, xt = function (t) {
            return Math.round(t * 1e7) / 1e7 || 0
        }, Ei = function (t, e) {
            var r = e.charAt(0)
                , s = parseFloat(e.substr(2));
            return t = parseFloat(t),
                r === "+" ? t + s : r === "-" ? t - s : r === "*" ? t * s : t / s
        }, qg = function (t, e) {
            for (var r = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < r;)
                ;
            return s < r
        }, Us = function () {
            var t = Je.length, e = Je.slice(0), r, s;
            for (Ko = {},
                Je.length = 0,
                r = 0; r < t; r++)
                s = e[r],
                    s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0)
        }, Eu = function (t, e, r, s) {
            Je.length && !St && Us(),
                t.render(e, r, s || St && e < 0 && (t._initted || t._startAt)),
                Je.length && !St && Us()
        }, Cu = function (t) {
            var e = parseFloat(t);
            return (e || e === 0) && (t + "").match(_u).length < 2 ? e : _t(t) ? t.trim() : t
        }, Pu = function (t) {
            return t
        }, le = function (t, e) {
            for (var r in e)
                r in t || (t[r] = e[r]);
            return t
        }, Hg = function (t) {
            return function (e, r) {
                for (var s in r)
                    s in e || s === "duration" && t || s === "ease" || (e[s] = r[s])
            }
        }, yi = function (t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        }, hu = function i(t, e) {
            for (var r in e)
                r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = xe(e[r]) ? i(t[r] || (t[r] = {}), e[r]) : e[r]);
            return t
        }, js = function (t, e) {
            var r = {}, s;
            for (s in t)
                s in e || (r[s] = t[s]);
            return r
        }, Vr = function (t) {
            var e = t.parent || at
                , r = t.keyframes ? Hg(Tt(t.keyframes)) : le;
            if (qt(t.inherit))
                for (; e;)
                    r(t, e.vars.defaults),
                        e = e.parent || e._dp;
            return t
        }, Wg = function (t, e) {
            for (var r = t.length, s = r === e.length; s && r-- && t[r] === e[r];)
                ;
            return r < 0
        }, Mu = function (t, e, r, s, n) {
            r === void 0 && (r = "_first"),
                s === void 0 && (s = "_last");
            var o = t[s], a;
            if (n)
                for (a = e[n]; o && o[n] > a;)
                    o = o._prev;
            return o ? (e._next = o._next,
                o._next = e) : (e._next = t[r],
                    t[r] = e),
                e._next ? e._next._prev = e : t[s] = e,
                e._prev = o,
                e.parent = e._dp = t,
                e
        }, Gs = function (t, e, r, s) {
            r === void 0 && (r = "_first"),
                s === void 0 && (s = "_last");
            var n = e._prev
                , o = e._next;
            n ? n._next = o : t[r] === e && (t[r] = o),
                o ? o._prev = n : t[s] === e && (t[s] = n),
                e._next = e._prev = e.parent = null
        }, ei = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
                t._act = 0
        }, _i = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;)
                    r._dirty = 1,
                        r = r.parent;
            return t
        }, $g = function (t) {
            for (var e = t.parent; e && e.parent;)
                e._dirty = 1,
                    e.totalDuration(),
                    e = e.parent;
            return t
        }, Qo = function (t, e, r, s) {
            return t._startAt && (St ? t._startAt.revert(Vs) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, s))
        }, Gg = function i(t) {
            return !t || t._ts && i(t.parent)
        }, cu = function (t) {
            return t._repeat ? er(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, er = function (t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        }, qs = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, Ys = function (t) {
            return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || Q) || 0))
        }, Xs = function (t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = xt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
                Ys(t),
                r._dirty || _i(r, t)),
                t
        }, Su = function (t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = qs(t.rawTime(), e),
                (!e._dur || Hr(0, e.totalDuration(), r) - e._tTime > Q) && e.render(r, !0)),
                _i(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;)
                        r.rawTime() >= 0 && r.totalTime(r._tTime),
                            r = r._dp;
                t._zTime = -Q
            }
        }, ye = function (t, e, r, s) {
            return e.parent && ei(e),
                e._start = xt((Ve(r) ? r : r || t !== at ? ne(t, r, e) : t._time) + e._delay),
                e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                Mu(t, e, "_first", "_last", t._sort ? "_start" : 0),
                Zo(e) || (t._recent = e),
                s || Su(t, e),
                t._ts < 0 && Xs(t, t._tTime),
                t
        }, Tu = function (t, e) {
            return (Kt.ScrollTrigger || $s("scrollTrigger", e)) && Kt.ScrollTrigger.create(e, t)
        }, Au = function (t, e, r, s, n) {
            if (ga(t, e, n),
                !t._initted)
                return 1;
            if (!r && t._pt && !St && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && xu !== jt.frame)
                return Je.push(t),
                    t._lazy = [n, s],
                    1
        }, Yg = function i(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e))
        }, Zo = function (t) {
            var e = t.data;
            return e === "isFromStart" || e === "isStart"
        }, Xg = function (t, e, r, s) {
            var n = t.ratio, o = e < 0 || !e && (!t._start && Yg(t) && !(!t._initted && Zo(t)) || (t._ts < 0 || t._dp._ts < 0) && !Zo(t)) ? 0 : 1, a = t._rDelay, l = 0, h, c, u;
            if (a && t._repeat && (l = Hr(0, t._tDur, e),
                c = er(l, a),
                t._yoyo && c & 1 && (o = 1 - o),
                c !== er(t._tTime, a) && (n = 1 - o,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                o !== n || St || s || t._zTime === Q || !e && t._zTime) {
                if (!t._initted && Au(t, e, s, r, l))
                    return;
                for (u = t._zTime,
                    t._zTime = e || (r ? Q : 0),
                    r || (r = e && !u),
                    t.ratio = o,
                    t._from && (o = 1 - o),
                    t._time = 0,
                    t._tTime = l,
                    h = t._pt; h;)
                    h.r(o, h.d),
                        h = h._next;
                e < 0 && Qo(t, e, r, !0),
                    t._onUpdate && !r && Xt(t, "onUpdate"),
                    l && t._repeat && !r && t.parent && Xt(t, "onRepeat"),
                    (e >= t._tDur || e < 0) && t.ratio === o && (o && ei(t, 1),
                        !r && !St && (Xt(t, o ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
            } else
                t._zTime || (t._zTime = e)
        }, Kg = function (t, e, r) {
            var s;
            if (r > e)
                for (s = t._first; s && s._start <= r;) {
                    if (s.data === "isPause" && s._start > e)
                        return s;
                    s = s._next
                }
            else
                for (s = t._last; s && s._start >= r;) {
                    if (s.data === "isPause" && s._start < e)
                        return s;
                    s = s._prev
                }
        }, ir = function (t, e, r, s) {
            var n = t._repeat
                , o = xt(e) || 0
                , a = t._tTime / t._tDur;
            return a && !s && (t._time *= o / t._dur),
                t._dur = o,
                t._tDur = n ? n < 0 ? 1e10 : xt(o * (n + 1) + t._rDelay * n) : o,
                a > 0 && !s && Xs(t, t._tTime = t._tDur * a),
                t.parent && Ys(t),
                r || _i(t.parent, t),
                t
        }, uu = function (t) {
            return t instanceof Pt ? _i(t) : ir(t, t._dur)
        }, Qg = {
            _start: 0,
            endTime: Ur,
            totalDuration: Ur
        }, ne = function i(t, e, r) {
            var s = t.labels, n = t._recent || Qg, o = t.duration() >= oe ? n.endTime(!1) : t._dur, a, l, h;
            return _t(e) && (isNaN(e) || e in s) ? (l = e.charAt(0),
                h = e.substr(-1) === "%",
                a = e.indexOf("="),
                l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
                    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (h ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in s || (s[e] = o),
                        s[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
                            h && r && (l = l / 100 * (Tt(r) ? r[0] : r).totalDuration()),
                            a > 1 ? i(t, e.substr(0, a - 1), r) + l : o + l)) : e == null ? o : +e
        }, Dr = function (t, e, r) {
            var s = Ve(e[1]), n = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[n], a, l;
            if (s && (o.duration = e[1]),
                o.parent = r,
                t) {
                for (a = o,
                    l = r; l && !("immediateRender" in a);)
                    a = l.vars.defaults || {},
                        l = qt(l.vars.inherit) && l.parent;
                o.immediateRender = qt(a.immediateRender),
                    t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1]
            }
            return new mt(e[0], o, e[n + 1])
        }, ii = function (t, e) {
            return t || t === 0 ? e(t) : e
        }, Hr = function (t, e, r) {
            return r < t ? t : r > e ? e : r
        }, Mt = function (t, e) {
            return !_t(t) || !(e = Bg.exec(t)) ? "" : e[1]
        }, Zg = function (t, e, r) {
            return ii(r, function (s) {
                return Hr(t, e, s)
            })
        }, Jo = [].slice, ku = function (t, e) {
            return t && xe(t) && "length" in t && (!e && !t.length || t.length - 1 in t && xe(t[0])) && !t.nodeType && t !== we
        }, Jg = function (t, e, r) {
            return r === void 0 && (r = []),
                t.forEach(function (s) {
                    var n;
                    return _t(s) && !e || ku(s, 1) ? (n = r).push.apply(n, ae(s)) : r.push(s)
                }) || r
        }, ae = function (t, e, r) {
            return rt && !e && rt.selector ? rt.selector(t) : _t(t) && !r && (Xo || !rr()) ? Jo.call((e || la).querySelectorAll(t), 0) : Tt(t) ? Jg(t, r) : ku(t) ? Jo.call(t, 0) : t ? [t] : []
        }, ta = function (t) {
            return t = ae(t)[0] || Br("Invalid scope") || {},
                function (e) {
                    var r = t.current || t.nativeElement || t;
                    return ae(e, r.querySelectorAll ? r : r === t ? Br("Invalid scope") || la.createElement("div") : t)
                }
        }, Ou = function (t) {
            return t.sort(function () {
                return .5 - Math.random()
            })
        }, Lu = function (t) {
            if (ut(t))
                return t;
            var e = xe(t) ? t : {
                each: t
            }
                , r = bi(e.ease)
                , s = e.from || 0
                , n = parseFloat(e.base) || 0
                , o = {}
                , a = s > 0 && s < 1
                , l = isNaN(s) || a
                , h = e.axis
                , c = s
                , u = s;
            return _t(s) ? c = u = {
                center: .5,
                edges: .5,
                end: 1
            }[s] || 0 : !a && l && (c = s[0],
                u = s[1]),
                function (d, f, m) {
                    var p = (m || e).length, v = o[p], g, w, b, x, _, y, P, E, C;
                    if (!v) {
                        if (C = e.grid === "auto" ? 0 : (e.grid || [1, oe])[1],
                            !C) {
                            for (P = -oe; P < (P = m[C++].getBoundingClientRect().left) && C < p;)
                                ;
                            C < p && C--
                        }
                        for (v = o[p] = [],
                            g = l ? Math.min(C, p) * c - .5 : s % C,
                            w = C === oe ? 0 : l ? p * u / C - .5 : s / C | 0,
                            P = 0,
                            E = oe,
                            y = 0; y < p; y++)
                            b = y % C - g,
                                x = w - (y / C | 0),
                                v[y] = _ = h ? Math.abs(h === "y" ? x : b) : vu(b * b + x * x),
                                _ > P && (P = _),
                                _ < E && (E = _);
                        s === "random" && Ou(v),
                            v.max = P - E,
                            v.min = E,
                            v.v = p = (parseFloat(e.amount) || parseFloat(e.each) * (C > p ? p - 1 : h ? h === "y" ? p / C : C : Math.max(C, p / C)) || 0) * (s === "edges" ? -1 : 1),
                            v.b = p < 0 ? n - p : n,
                            v.u = Mt(e.amount || e.each) || 0,
                            r = r && p < 0 ? Uu(r) : r
                    }
                    return p = (v[d] - v.min) / v.max || 0,
                        xt(v.b + (r ? r(p) : p) * v.v) + v.u
                }
        }, ea = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (r) {
                var s = xt(Math.round(parseFloat(r) / t) * t * e);
                return (s - s % 1) / e + (Ve(r) ? 0 : Mt(r))
            }
        }, Ru = function (t, e) {
            var r = Tt(t), s, n;
            return !r && xe(t) && (s = r = t.radius || oe,
                t.values ? (t = ae(t.values),
                    (n = !Ve(t[0])) && (s *= s)) : t = ea(t.increment)),
                ii(e, r ? ut(t) ? function (o) {
                    return n = t(o),
                        Math.abs(n - o) <= s ? n : o
                }
                    : function (o) {
                        for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), h = oe, c = 0, u = t.length, d, f; u--;)
                            n ? (d = t[u].x - a,
                                f = t[u].y - l,
                                d = d * d + f * f) : d = Math.abs(t[u] - a),
                                d < h && (h = d,
                                    c = u);
                        return c = !s || h <= s ? t[c] : o,
                            n || c === o || Ve(o) ? c : c + Mt(o)
                    }
                    : ea(t))
        }, Fu = function (t, e, r, s) {
            return ii(Tt(t) ? !e : r === !0 ? !!(r = 0) : !s, function () {
                return Tt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * .99)) / r) * r * s) / s
            })
        }, t0 = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return function (s) {
                return e.reduce(function (n, o) {
                    return o(n)
                }, s)
            }
        }, e0 = function (t, e) {
            return function (r) {
                return t(parseFloat(r)) + (e || Mt(r))
            }
        }, i0 = function (t, e, r) {
            return zu(t, e, 0, 1, r)
        }, Iu = function (t, e, r) {
            return ii(r, function (s) {
                return t[~~e(s)]
            })
        }, r0 = function i(t, e, r) {
            var s = e - t;
            return Tt(t) ? Iu(t, i(0, t.length), e) : ii(r, function (n) {
                return (s + (n - t) % s) % s + t
            })
        }, s0 = function i(t, e, r) {
            var s = e - t
                , n = s * 2;
            return Tt(t) ? Iu(t, i(0, t.length - 1), e) : ii(r, function (o) {
                return o = (n + (o - t) % n) % n || 0,
                    t + (o > s ? n - o : o)
            })
        }, sr = function (t) {
            for (var e = 0, r = "", s, n, o, a; ~(s = t.indexOf("random(", e));)
                o = t.indexOf(")", s),
                    a = t.charAt(s + 7) === "[",
                    n = t.substr(s + 7, o - s - 7).match(a ? _u : Yo),
                    r += t.substr(e, s - e) + Fu(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
                    e = o + 1;
            return r + t.substr(e, t.length - e)
        }, zu = function (t, e, r, s, n) {
            var o = e - t
                , a = s - r;
            return ii(n, function (l) {
                return r + ((l - t) / o * a || 0)
            })
        }, n0 = function i(t, e, r, s) {
            var n = isNaN(t + e) ? 0 : function (f) {
                return (1 - f) * t + f * e
            }
                ;
            if (!n) {
                var o = _t(t), a = {}, l, h, c, u, d;
                if (r === !0 && (s = 1) && (r = null),
                    o)
                    t = {
                        p: t
                    },
                        e = {
                            p: e
                        };
                else if (Tt(t) && !Tt(e)) {
                    for (c = [],
                        u = t.length,
                        d = u - 2,
                        h = 1; h < u; h++)
                        c.push(i(t[h - 1], t[h]));
                    u--,
                        n = function (m) {
                            m *= u;
                            var p = Math.min(d, ~~m);
                            return c[p](m - p)
                        }
                        ,
                        r = e
                } else
                    s || (t = yi(Tt(t) ? [] : {}, t));
                if (!c) {
                    for (l in e)
                        ma.call(a, t, l, "get", e[l]);
                    n = function (m) {
                        return wa(m, a) || (o ? t.p : t)
                    }
                }
            }
            return ii(r, n)
        }, du = function (t, e, r) {
            var s = t.labels, n = oe, o, a, l;
            for (o in s)
                a = s[o] - e,
                    a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o,
                        n = a);
            return l
        }, Xt = function (t, e, r) {
            var s = t.vars, n = s[e], o = rt, a = t._ctx, l, h, c;
            if (n)
                return l = s[e + "Params"],
                    h = s.callbackScope || t,
                    r && Je.length && Us(),
                    a && (rt = a),
                    c = l ? n.apply(h, l) : n.call(h),
                    rt = o,
                    c
        }, Ir = function (t) {
            return ei(t),
                t.scrollTrigger && t.scrollTrigger.kill(!!St),
                t.progress() < 1 && Xt(t, "onInterrupt"),
                t
        }, Ji, Vu = [], Du = function (t) {
            if (t)
                if (t = !t.name && t.default || t,
                    na() || t.headless) {
                    var e = t.name
                        , r = ut(t)
                        , s = e && !r && t.init ? function () {
                            this._props = []
                        }
                            : t
                        , n = {
                            init: Ur,
                            render: wa,
                            add: ma,
                            kill: y0,
                            modifier: w0,
                            rawVars: 0
                        }
                        , o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Ks,
                            aliases: {},
                            register: 0
                        };
                    if (rr(),
                        t !== s) {
                        if (Ut[e])
                            return;
                        le(s, le(js(t, n), o)),
                            yi(s.prototype, yi(n, js(t, o))),
                            Ut[s.prop = e] = s,
                            t.targetTest && (Ds.push(s),
                                ha[e] = 1),
                            e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    yu(e, s),
                        t.register && t.register(At, s, It)
                } else
                    Vu.push(t)
        }, K = 255, zr = {
            aqua: [0, K, K],
            lime: [0, K, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, K],
            navy: [0, 0, 128],
            white: [K, K, K],
            olive: [128, 128, 0],
            yellow: [K, K, 0],
            orange: [K, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [K, 0, 0],
            pink: [K, 192, 203],
            cyan: [0, K, K],
            transparent: [K, K, K, 0]
        }, jo = function (t, e, r) {
            return t += t < 0 ? 1 : t > 1 ? -1 : 0,
                (t * 6 < 1 ? e + (r - e) * t * 6 : t < .5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * K + .5 | 0
        }, Nu = function (t, e, r) {
            var s = t ? Ve(t) ? [t >> 16, t >> 8 & K, t & K] : 0 : zr.black, n, o, a, l, h, c, u, d, f, m;
            if (!s) {
                if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
                    zr[t])
                    s = zr[t];
                else if (t.charAt(0) === "#") {
                    if (t.length < 6 && (n = t.charAt(1),
                        o = t.charAt(2),
                        a = t.charAt(3),
                        t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
                        t.length === 9)
                        return s = parseInt(t.substr(1, 6), 16),
                            [s >> 16, s >> 8 & K, s & K, parseInt(t.substr(7), 16) / 255];
                    t = parseInt(t.substr(1), 16),
                        s = [t >> 16, t >> 8 & K, t & K]
                } else if (t.substr(0, 3) === "hsl") {
                    if (s = m = t.match(Yo),
                        !e)
                        l = +s[0] % 360 / 360,
                            h = +s[1] / 100,
                            c = +s[2] / 100,
                            o = c <= .5 ? c * (h + 1) : c + h - c * h,
                            n = c * 2 - o,
                            s.length > 3 && (s[3] *= 1),
                            s[0] = jo(l + 1 / 3, n, o),
                            s[1] = jo(l, n, o),
                            s[2] = jo(l - 1 / 3, n, o);
                    else if (~t.indexOf("="))
                        return s = t.match(oa),
                            r && s.length < 4 && (s[3] = 1),
                            s
                } else
                    s = t.match(Yo) || zr.transparent;
                s = s.map(Number)
            }
            return e && !m && (n = s[0] / K,
                o = s[1] / K,
                a = s[2] / K,
                u = Math.max(n, o, a),
                d = Math.min(n, o, a),
                c = (u + d) / 2,
                u === d ? l = h = 0 : (f = u - d,
                    h = c > .5 ? f / (2 - u - d) : f / (u + d),
                    l = u === n ? (o - a) / f + (o < a ? 6 : 0) : u === o ? (a - n) / f + 2 : (n - o) / f + 4,
                    l *= 60),
                s[0] = ~~(l + .5),
                s[1] = ~~(h * 100 + .5),
                s[2] = ~~(c * 100 + .5)),
                r && s.length < 4 && (s[3] = 1),
                s
        }, Bu = function (t) {
            var e = []
                , r = []
                , s = -1;
            return t.split(ze).forEach(function (n) {
                var o = n.match(xi) || [];
                e.push.apply(e, o),
                    r.push(s += o.length + 1)
            }),
                e.c = r,
                e
        }, pu = function (t, e, r) {
            var s = "", n = (t + s).match(ze), o = e ? "hsla(" : "rgba(", a = 0, l, h, c, u;
            if (!n)
                return t;
            if (n = n.map(function (d) {
                return (d = Nu(d, e, 1)) && o + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
            }),
                r && (c = Bu(t),
                    l = r.c,
                    l.join(s) !== c.c.join(s)))
                for (h = t.replace(ze, "1").split(xi),
                    u = h.length - 1; a < u; a++)
                    s += h[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : r).shift());
            if (!h)
                for (h = t.split(ze),
                    u = h.length - 1; a < u; a++)
                    s += h[a] + n[a];
            return s + h[u]
        }, ze = function () {
            var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
            for (t in zr)
                i += "|" + t + "\\b";
            return new RegExp(i + ")", "gi")
        }(), o0 = /hsl[a]?\(/, pa = function (t) {
            var e = t.join(" "), r;
            if (ze.lastIndex = 0,
                ze.test(e))
                return r = o0.test(e),
                    t[1] = pu(t[1], r),
                    t[0] = pu(t[0], r, Bu(t[1])),
                    !0
        }, jr, jt = function () {
            var i = Date.now, t = 500, e = 33, r = i(), s = r, n = 1e3 / 240, o = n, a = [], l, h, c, u, d, f, m = function p(v) {
                var g = i() - s, w = v === !0, b, x, _, y;
                if ((g > t || g < 0) && (r += g - e),
                    s += g,
                    _ = s - r,
                    b = _ - o,
                    (b > 0 || w) && (y = ++u.frame,
                        d = _ - u.time * 1e3,
                        u.time = _ = _ / 1e3,
                        o += b + (b >= n ? 4 : n - b),
                        x = 1),
                    w || (l = h(p)),
                    x)
                    for (f = 0; f < a.length; f++)
                        a[f](_, d, y, v)
            };
            return u = {
                time: 0,
                frame: 0,
                tick: function () {
                    m(!0)
                },
                deltaRatio: function (v) {
                    return d / (1e3 / (v || 60))
                },
                wake: function () {
                    bu && (!Xo && na() && (we = Xo = window,
                        la = we.document || {},
                        Kt.gsap = At,
                        (we.gsapVersions || (we.gsapVersions = [])).push(At.version),
                        wu(Bs || we.GreenSockGlobals || !we.gsap && we || {}),
                        Vu.forEach(Du)),
                        c = typeof requestAnimationFrame != "undefined" && requestAnimationFrame,
                        l && u.sleep(),
                        h = c || function (v) {
                            return setTimeout(v, o - u.time * 1e3 + 1 | 0)
                        }
                        ,
                        jr = 1,
                        m(2))
                },
                sleep: function () {
                    (c ? cancelAnimationFrame : clearTimeout)(l),
                        jr = 0,
                        h = Ur
                },
                lagSmoothing: function (v, g) {
                    t = v || 1 / 0,
                        e = Math.min(g || 33, t)
                },
                fps: function (v) {
                    n = 1e3 / (v || 240),
                        o = u.time * 1e3 + n
                },
                add: function (v, g, w) {
                    var b = g ? function (x, _, y, P) {
                        v(x, _, y, P),
                            u.remove(b)
                    }
                        : v;
                    return u.remove(v),
                        a[w ? "unshift" : "push"](b),
                        rr(),
                        b
                },
                remove: function (v, g) {
                    ~(g = a.indexOf(v)) && a.splice(g, 1) && f >= g && f--
                },
                _listeners: a
            },
                u
        }(), rr = function () {
            return !jr && jt.wake()
        }, U = {}, a0 = /^[\d.\-M][\d.\-,\s]/, l0 = /["']/g, h0 = function (t) {
            for (var e = {}, r = t.substr(1, t.length - 3).split(":"), s = r[0], n = 1, o = r.length, a, l, h; n < o; n++)
                l = r[n],
                    a = n !== o - 1 ? l.lastIndexOf(",") : l.length,
                    h = l.substr(0, a),
                    e[s] = isNaN(h) ? h.replace(l0, "").trim() : +h,
                    s = l.substr(a + 1).trim();
            return e
        }, c0 = function (t) {
            var e = t.indexOf("(") + 1
                , r = t.indexOf(")")
                , s = t.indexOf("(", e);
            return t.substring(e, ~s && s < r ? t.indexOf(")", r + 1) : r)
        }, u0 = function (t) {
            var e = (t + "").split("(")
                , r = U[e[0]];
            return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [h0(e[1])] : c0(t).split(",").map(Cu)) : U._CE && a0.test(t) ? U._CE("", t) : r
        }, Uu = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        }, ju = function i(t, e) {
            for (var r = t._first, s; r;)
                r instanceof Pt ? i(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? i(r.timeline, e) : (s = r._ease,
                    r._ease = r._yEase,
                    r._yEase = s,
                    r._yoyo = e)),
                    r = r._next
        }, bi = function (t, e) {
            return t && (ut(t) ? t : U[t] || u0(t)) || e
        }, Ci = function (t, e, r, s) {
            r === void 0 && (r = function (l) {
                return 1 - e(1 - l)
            }
            ),
                s === void 0 && (s = function (l) {
                    return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
                }
                );
            var n = {
                easeIn: e,
                easeOut: r,
                easeInOut: s
            }, o;
            return Ft(t, function (a) {
                U[a] = Kt[a] = n,
                    U[o = a.toLowerCase()] = r;
                for (var l in n)
                    U[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = U[a + "." + l] = n[l]
            }),
                n
        }, qu = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
            }
        }, qo = function i(t, e, r) {
            var s = e >= 1 ? e : 1
                , n = (r || (t ? .3 : .45)) / (e < 1 ? e : 1)
                , o = n / Go * (Math.asin(1 / s) || 0)
                , a = function (c) {
                    return c === 1 ? 1 : s * Math.pow(2, -10 * c) * Ng((c - o) * n) + 1
                }
                , l = t === "out" ? a : t === "in" ? function (h) {
                    return 1 - a(1 - h)
                }
                    : qu(a);
            return n = Go / n,
                l.config = function (h, c) {
                    return i(t, h, c)
                }
                ,
                l
        }, Ho = function i(t, e) {
            e === void 0 && (e = 1.70158);
            var r = function (o) {
                return o ? --o * o * ((e + 1) * o + e) + 1 : 0
            }
                , s = t === "out" ? r : t === "in" ? function (n) {
                    return 1 - r(1 - n)
                }
                    : qu(r);
            return s.config = function (n) {
                return i(t, n)
            }
                ,
                s
        };
    Ft("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, t) {
        var e = t < 5 ? t + 1 : t;
        Ci(i + ",Power" + (e - 1), t ? function (r) {
            return Math.pow(r, e)
        }
            : function (r) {
                return r
            }
            , function (r) {
                return 1 - Math.pow(1 - r, e)
            }, function (r) {
                return r < .5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2
            })
    });
    U.Linear.easeNone = U.none = U.Linear.easeIn;
    Ci("Elastic", qo("in"), qo("out"), qo());
    (function (i, t) {
        var e = 1 / t
            , r = 2 * e
            , s = 2.5 * e
            , n = function (a) {
                return a < e ? i * a * a : a < r ? i * Math.pow(a - 1.5 / t, 2) + .75 : a < s ? i * (a -= 2.25 / t) * a + .9375 : i * Math.pow(a - 2.625 / t, 2) + .984375
            };
        Ci("Bounce", function (o) {
            return 1 - n(1 - o)
        }, n)
    }
    )(7.5625, 2.75);
    Ci("Expo", function (i) {
        return i ? Math.pow(2, 10 * (i - 1)) : 0
    });
    Ci("Circ", function (i) {
        return -(vu(1 - i * i) - 1)
    });
    Ci("Sine", function (i) {
        return i === 1 ? 1 : -Dg(i * zg) + 1
    });
    Ci("Back", Ho("in"), Ho("out"), Ho());
    U.SteppedEase = U.steps = Kt.SteppedEase = {
        config: function (t, e) {
            t === void 0 && (t = 1);
            var r = 1 / t
                , s = t + (e ? 0 : 1)
                , n = e ? 1 : 0
                , o = 1 - Q;
            return function (a) {
                return ((s * Hr(0, o, a) | 0) + n) * r
            }
        }
    };
    tr.ease = U["quad.out"];
    Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) {
        return ca += i + "," + i + "Params,"
    });
    var fa = function (t, e) {
        this.id = Vg++,
            t._gsap = this,
            this.target = t,
            this.harness = e,
            this.get = e ? e.get : da,
            this.set = e ? e.getSetter : Ks
    }
        , qr = function () {
            function i(e) {
                this.vars = e,
                    this._delay = +e.delay || 0,
                    (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
                        this._yoyo = !!e.yoyo || !!e.yoyoEase),
                    this._ts = 1,
                    ir(this, +e.duration, 1, 1),
                    this.data = e.data,
                    rt && (this._ctx = rt,
                        rt.data.push(this)),
                    jr || jt.wake()
            }
            var t = i.prototype;
            return t.delay = function (r) {
                return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
                    this._delay = r,
                    this) : this._delay
            }
                ,
                t.duration = function (r) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
                }
                ,
                t.totalDuration = function (r) {
                    return arguments.length ? (this._dirty = 0,
                        ir(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }
                ,
                t.totalTime = function (r, s) {
                    if (rr(),
                        !arguments.length)
                        return this._tTime;
                    var n = this._dp;
                    if (n && n.smoothChildTiming && this._ts) {
                        for (Xs(this, r),
                            !n._dp || n.parent || Su(n, this); n && n.parent;)
                            n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                                n = n.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ye(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== r || !this._dur && !s || this._initted && Math.abs(this._zTime) === Q || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
                        Eu(this, r, s)),
                        this
                }
                ,
                t.time = function (r, s) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + cu(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s) : this._time
                }
                ,
                t.totalProgress = function (r, s) {
                    return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
                }
                ,
                t.progress = function (r, s) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + cu(this), s) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
                }
                ,
                t.iteration = function (r, s) {
                    var n = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (r - 1) * n, s) : this._repeat ? er(this._tTime, n) + 1 : 1
                }
                ,
                t.timeScale = function (r, s) {
                    if (!arguments.length)
                        return this._rts === -Q ? 0 : this._rts;
                    if (this._rts === r)
                        return this;
                    var n = this.parent && this._ts ? qs(this.parent._time, this) : this._tTime;
                    return this._rts = +r || 0,
                        this._ts = this._ps || r === -Q ? 0 : this._rts,
                        this.totalTime(Hr(-Math.abs(this._delay), this._tDur, n), s !== !1),
                        Ys(this),
                        $g(this)
                }
                ,
                t.paused = function (r) {
                    return arguments.length ? (this._ps !== r && (this._ps = r,
                        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                            this._ts = this._act = 0) : (rr(),
                                this._ts = this._rts,
                                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Q && (this._tTime -= Q)))),
                        this) : this._ps
                }
                ,
                t.startTime = function (r) {
                    if (arguments.length) {
                        this._start = r;
                        var s = this.parent || this._dp;
                        return s && (s._sort || !this.parent) && ye(s, this, r - this._delay),
                            this
                    }
                    return this._start
                }
                ,
                t.endTime = function (r) {
                    return this._start + (qt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                }
                ,
                t.rawTime = function (r) {
                    var s = this.parent || this._dp;
                    return s ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? qs(s.rawTime(r), this) : this._tTime : this._tTime
                }
                ,
                t.revert = function (r) {
                    r === void 0 && (r = jg);
                    var s = St;
                    return St = r,
                        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
                            this.totalTime(-.01, r.suppressEvents)),
                        this.data !== "nested" && r.kill !== !1 && this.kill(),
                        St = s,
                        this
                }
                ,
                t.globalTime = function (r) {
                    for (var s = this, n = arguments.length ? r : s.rawTime(); s;)
                        n = s._start + n / (Math.abs(s._ts) || 1),
                            s = s._dp;
                    return !this.parent && this._sat ? this._sat.globalTime(r) : n
                }
                ,
                t.repeat = function (r) {
                    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
                        uu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
                }
                ,
                t.repeatDelay = function (r) {
                    if (arguments.length) {
                        var s = this._time;
                        return this._rDelay = r,
                            uu(this),
                            s ? this.time(s) : this
                    }
                    return this._rDelay
                }
                ,
                t.yoyo = function (r) {
                    return arguments.length ? (this._yoyo = r,
                        this) : this._yoyo
                }
                ,
                t.seek = function (r, s) {
                    return this.totalTime(ne(this, r), qt(s))
                }
                ,
                t.restart = function (r, s) {
                    return this.play().totalTime(r ? -this._delay : 0, qt(s))
                }
                ,
                t.play = function (r, s) {
                    return r != null && this.seek(r, s),
                        this.reversed(!1).paused(!1)
                }
                ,
                t.reverse = function (r, s) {
                    return r != null && this.seek(r || this.totalDuration(), s),
                        this.reversed(!0).paused(!1)
                }
                ,
                t.pause = function (r, s) {
                    return r != null && this.seek(r, s),
                        this.paused(!0)
                }
                ,
                t.resume = function () {
                    return this.paused(!1)
                }
                ,
                t.reversed = function (r) {
                    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Q : 0)),
                        this) : this._rts < 0
                }
                ,
                t.invalidate = function () {
                    return this._initted = this._act = 0,
                        this._zTime = -Q,
                        this
                }
                ,
                t.isActive = function () {
                    var r = this.parent || this._dp, s = this._start, n;
                    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= s && n < this.endTime(!0) - Q)
                }
                ,
                t.eventCallback = function (r, s, n) {
                    var o = this.vars;
                    return arguments.length > 1 ? (s ? (o[r] = s,
                        n && (o[r + "Params"] = n),
                        r === "onUpdate" && (this._onUpdate = s)) : delete o[r],
                        this) : o[r]
                }
                ,
                t.then = function (r) {
                    var s = this;
                    return new Promise(function (n) {
                        var o = ut(r) ? r : Pu
                            , a = function () {
                                var h = s.then;
                                s.then = null,
                                    ut(o) && (o = o(s)) && (o.then || o === s) && (s.then = h),
                                    n(o),
                                    s.then = h
                            };
                        s._initted && s.totalProgress() === 1 && s._ts >= 0 || !s._tTime && s._ts < 0 ? a() : s._prom = a
                    }
                    )
                }
                ,
                t.kill = function () {
                    Ir(this)
                }
                ,
                i
        }();
    le(qr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Q,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Pt = function (i) {
        mu(t, i);
        function t(r, s) {
            var n;
            return r === void 0 && (r = {}),
                n = i.call(this, r) || this,
                n.labels = {},
                n.smoothChildTiming = !!r.smoothChildTiming,
                n.autoRemoveChildren = !!r.autoRemoveChildren,
                n._sort = qt(r.sortChildren),
                at && ye(r.parent || at, Ie(n), s),
                r.reversed && n.reverse(),
                r.paused && n.paused(!0),
                r.scrollTrigger && Tu(Ie(n), r.scrollTrigger),
                n
        }
        var e = t.prototype;
        return e.to = function (s, n, o) {
            return Dr(0, arguments, this),
                this
        }
            ,
            e.from = function (s, n, o) {
                return Dr(1, arguments, this),
                    this
            }
            ,
            e.fromTo = function (s, n, o, a) {
                return Dr(2, arguments, this),
                    this
            }
            ,
            e.set = function (s, n, o) {
                return n.duration = 0,
                    n.parent = this,
                    Vr(n).repeatDelay || (n.repeat = 0),
                    n.immediateRender = !!n.immediateRender,
                    new mt(s, n, ne(this, o), 1),
                    this
            }
            ,
            e.call = function (s, n, o) {
                return ye(this, mt.delayedCall(0, s, n), o)
            }
            ,
            e.staggerTo = function (s, n, o, a, l, h, c) {
                return o.duration = n,
                    o.stagger = o.stagger || a,
                    o.onComplete = h,
                    o.onCompleteParams = c,
                    o.parent = this,
                    new mt(s, o, ne(this, l)),
                    this
            }
            ,
            e.staggerFrom = function (s, n, o, a, l, h, c) {
                return o.runBackwards = 1,
                    Vr(o).immediateRender = qt(o.immediateRender),
                    this.staggerTo(s, n, o, a, l, h, c)
            }
            ,
            e.staggerFromTo = function (s, n, o, a, l, h, c, u) {
                return a.startAt = o,
                    Vr(a).immediateRender = qt(a.immediateRender),
                    this.staggerTo(s, n, a, l, h, c, u)
            }
            ,
            e.render = function (s, n, o) {
                var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, h = this._dur, c = s <= 0 ? 0 : xt(s), u = this._zTime < 0 != s < 0 && (this._initted || !h), d, f, m, p, v, g, w, b, x, _, y, P;
                if (this !== at && c > l && s >= 0 && (c = l),
                    c !== this._tTime || o || u) {
                    if (a !== this._time && h && (c += this._time - a,
                        s += this._time - a),
                        d = c,
                        x = this._start,
                        b = this._ts,
                        g = !b,
                        u && (h || (a = this._zTime),
                            (s || !n) && (this._zTime = s)),
                        this._repeat) {
                        if (y = this._yoyo,
                            v = h + this._rDelay,
                            this._repeat < -1 && s < 0)
                            return this.totalTime(v * 100 + s, n, o);
                        if (d = xt(c % v),
                            c === l ? (p = this._repeat,
                                d = h) : (p = ~~(c / v),
                                    p && p === c / v && (d = h,
                                        p--),
                                    d > h && (d = h)),
                            _ = er(this._tTime, v),
                            !a && this._tTime && _ !== p && this._tTime - _ * v - this._dur <= 0 && (_ = p),
                            y && p & 1 && (d = h - d,
                                P = 1),
                            p !== _ && !this._lock) {
                            var E = y && _ & 1
                                , C = E === (y && p & 1);
                            if (p < _ && (E = !E),
                                a = E ? 0 : c % h ? h : c,
                                this._lock = 1,
                                this.render(a || (P ? 0 : xt(p * v)), n, !h)._lock = 0,
                                this._tTime = c,
                                !n && this.parent && Xt(this, "onRepeat"),
                                this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                                a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (h = this._dur,
                                l = this._tDur,
                                C && (this._lock = 2,
                                    a = E ? h : -1e-4,
                                    this.render(a, !0),
                                    this.vars.repeatRefresh && !P && this.invalidate()),
                                this._lock = 0,
                                !this._ts && !g)
                                return this;
                            ju(this, P)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (w = Kg(this, xt(a), xt(d)),
                        w && (c -= d - (d = w._start))),
                        this._tTime = c,
                        this._time = d,
                        this._act = !b,
                        this._initted || (this._onUpdate = this.vars.onUpdate,
                            this._initted = 1,
                            this._zTime = s,
                            a = 0),
                        !a && d && !n && !p && (Xt(this, "onStart"),
                            this._tTime !== c))
                        return this;
                    if (d >= a && s >= 0)
                        for (f = this._first; f;) {
                            if (m = f._next,
                                (f._act || d >= f._start) && f._ts && w !== f) {
                                if (f.parent !== this)
                                    return this.render(s, n, o);
                                if (f.render(f._ts > 0 ? (d - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (d - f._start) * f._ts, n, o),
                                    d !== this._time || !this._ts && !g) {
                                    w = 0,
                                        m && (c += this._zTime = -Q);
                                    break
                                }
                            }
                            f = m
                        }
                    else {
                        f = this._last;
                        for (var M = s < 0 ? s : d; f;) {
                            if (m = f._prev,
                                (f._act || M <= f._end) && f._ts && w !== f) {
                                if (f.parent !== this)
                                    return this.render(s, n, o);
                                if (f.render(f._ts > 0 ? (M - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (M - f._start) * f._ts, n, o || St && (f._initted || f._startAt)),
                                    d !== this._time || !this._ts && !g) {
                                    w = 0,
                                        m && (c += this._zTime = M ? -Q : Q);
                                    break
                                }
                            }
                            f = m
                        }
                    }
                    if (w && !n && (this.pause(),
                        w.render(d >= a ? 0 : -Q)._zTime = d >= a ? 1 : -1,
                        this._ts))
                        return this._start = x,
                            Ys(this),
                            this.render(s, n, o);
                    this._onUpdate && !n && Xt(this, "onUpdate", !0),
                        (c === l && this._tTime >= this.totalDuration() || !c && a) && (x === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((s || !h) && (c === l && this._ts > 0 || !c && this._ts < 0) && ei(this, 1),
                            !n && !(s < 0 && !a) && (c || a || !l) && (Xt(this, c === l && s >= 0 ? "onComplete" : "onReverseComplete", !0),
                                this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
                }
                return this
            }
            ,
            e.add = function (s, n) {
                var o = this;
                if (Ve(n) || (n = ne(this, n, s)),
                    !(s instanceof qr)) {
                    if (Tt(s))
                        return s.forEach(function (a) {
                            return o.add(a, n)
                        }),
                            this;
                    if (_t(s))
                        return this.addLabel(s, n);
                    if (ut(s))
                        s = mt.delayedCall(0, s);
                    else
                        return this
                }
                return this !== s ? ye(this, s, n) : this
            }
            ,
            e.getChildren = function (s, n, o, a) {
                s === void 0 && (s = !0),
                    n === void 0 && (n = !0),
                    o === void 0 && (o = !0),
                    a === void 0 && (a = -oe);
                for (var l = [], h = this._first; h;)
                    h._start >= a && (h instanceof mt ? n && l.push(h) : (o && l.push(h),
                        s && l.push.apply(l, h.getChildren(!0, n, o)))),
                        h = h._next;
                return l
            }
            ,
            e.getById = function (s) {
                for (var n = this.getChildren(1, 1, 1), o = n.length; o--;)
                    if (n[o].vars.id === s)
                        return n[o]
            }
            ,
            e.remove = function (s) {
                return _t(s) ? this.removeLabel(s) : ut(s) ? this.killTweensOf(s) : (Gs(this, s),
                    s === this._recent && (this._recent = this._last),
                    _i(this))
            }
            ,
            e.totalTime = function (s, n) {
                return arguments.length ? (this._forcing = 1,
                    !this._dp && this._ts && (this._start = xt(jt.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
                    i.prototype.totalTime.call(this, s, n),
                    this._forcing = 0,
                    this) : this._tTime
            }
            ,
            e.addLabel = function (s, n) {
                return this.labels[s] = ne(this, n),
                    this
            }
            ,
            e.removeLabel = function (s) {
                return delete this.labels[s],
                    this
            }
            ,
            e.addPause = function (s, n, o) {
                var a = mt.delayedCall(0, n || Ur, o);
                return a.data = "isPause",
                    this._hasPause = 1,
                    ye(this, a, ne(this, s))
            }
            ,
            e.removePause = function (s) {
                var n = this._first;
                for (s = ne(this, s); n;)
                    n._start === s && n.data === "isPause" && ei(n),
                        n = n._next
            }
            ,
            e.killTweensOf = function (s, n, o) {
                for (var a = this.getTweensOf(s, o), l = a.length; l--;)
                    Ze !== a[l] && a[l].kill(s, n);
                return this
            }
            ,
            e.getTweensOf = function (s, n) {
                for (var o = [], a = ae(s), l = this._first, h = Ve(n), c; l;)
                    l instanceof mt ? qg(l._targets, a) && (h ? (!Ze || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c),
                        l = l._next;
                return o
            }
            ,
            e.tweenTo = function (s, n) {
                n = n || {};
                var o = this, a = ne(o, s), l = n, h = l.startAt, c = l.onStart, u = l.onStartParams, d = l.immediateRender, f, m = mt.to(o, le({
                    ease: n.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: a,
                    overwrite: "auto",
                    duration: n.duration || Math.abs((a - (h && "time" in h ? h.time : o._time)) / o.timeScale()) || Q,
                    onStart: function () {
                        if (o.pause(),
                            !f) {
                            var v = n.duration || Math.abs((a - (h && "time" in h ? h.time : o._time)) / o.timeScale());
                            m._dur !== v && ir(m, v, 0, 1).render(m._time, !0, !0),
                                f = 1
                        }
                        c && c.apply(m, u || [])
                    }
                }, n));
                return d ? m.render(0) : m
            }
            ,
            e.tweenFromTo = function (s, n, o) {
                return this.tweenTo(n, le({
                    startAt: {
                        time: ne(this, s)
                    }
                }, o))
            }
            ,
            e.recent = function () {
                return this._recent
            }
            ,
            e.nextLabel = function (s) {
                return s === void 0 && (s = this._time),
                    du(this, ne(this, s))
            }
            ,
            e.previousLabel = function (s) {
                return s === void 0 && (s = this._time),
                    du(this, ne(this, s), 1)
            }
            ,
            e.currentLabel = function (s) {
                return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + Q)
            }
            ,
            e.shiftChildren = function (s, n, o) {
                o === void 0 && (o = 0);
                for (var a = this._first, l = this.labels, h; a;)
                    a._start >= o && (a._start += s,
                        a._end += s),
                        a = a._next;
                if (n)
                    for (h in l)
                        l[h] >= o && (l[h] += s);
                return _i(this)
            }
            ,
            e.invalidate = function (s) {
                var n = this._first;
                for (this._lock = 0; n;)
                    n.invalidate(s),
                        n = n._next;
                return i.prototype.invalidate.call(this, s)
            }
            ,
            e.clear = function (s) {
                s === void 0 && (s = !0);
                for (var n = this._first, o; n;)
                    o = n._next,
                        this.remove(n),
                        n = o;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                    s && (this.labels = {}),
                    _i(this)
            }
            ,
            e.totalDuration = function (s) {
                var n = 0, o = this, a = o._last, l = oe, h, c, u;
                if (arguments.length)
                    return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
                if (o._dirty) {
                    for (u = o.parent; a;)
                        h = a._prev,
                            a._dirty && a.totalDuration(),
                            c = a._start,
                            c > l && o._sort && a._ts && !o._lock ? (o._lock = 1,
                                ye(o, a, c - a._delay, 1)._lock = 0) : l = c,
                            c < 0 && a._ts && (n -= c,
                                (!u && !o._dp || u && u.smoothChildTiming) && (o._start += c / o._ts,
                                    o._time -= c,
                                    o._tTime -= c),
                                o.shiftChildren(-c, !1, -1 / 0),
                                l = 0),
                            a._end > n && a._ts && (n = a._end),
                            a = h;
                    ir(o, o === at && o._time > n ? o._time : n, 1, 1),
                        o._dirty = 0
                }
                return o._tDur
            }
            ,
            t.updateRoot = function (s) {
                if (at._ts && (Eu(at, qs(s, at)),
                    xu = jt.frame),
                    jt.frame >= lu) {
                    lu += Ht.autoSleep || 120;
                    var n = at._first;
                    if ((!n || !n._ts) && Ht.autoSleep && jt._listeners.length < 2) {
                        for (; n && !n._ts;)
                            n = n._next;
                        n || jt.sleep()
                    }
                }
            }
            ,
            t
    }(qr);
    le(Pt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var d0 = function (t, e, r, s, n, o, a) {
        var l = new It(this._pt, t, e, 0, 1, ba, null, n), h = 0, c = 0, u, d, f, m, p, v, g, w;
        for (l.b = r,
            l.e = s,
            r += "",
            s += "",
            (g = ~s.indexOf("random(")) && (s = sr(s)),
            o && (w = [r, s],
                o(w, t, e),
                r = w[0],
                s = w[1]),
            d = r.match(Bo) || []; u = Bo.exec(s);)
            m = u[0],
                p = s.substring(h, u.index),
                f ? f = (f + 1) % 5 : p.substr(-5) === "rgba(" && (f = 1),
                m !== d[c++] && (v = parseFloat(d[c - 1]) || 0,
                    l._pt = {
                        _next: l._pt,
                        p: p || c === 1 ? p : ",",
                        s: v,
                        c: m.charAt(1) === "=" ? Ei(v, m) - v : parseFloat(m) - v,
                        m: f && f < 4 ? Math.round : 0
                    },
                    h = Bo.lastIndex);
        return l.c = h < s.length ? s.substring(h, s.length) : "",
            l.fp = a,
            (aa.test(s) || g) && (l.e = 0),
            this._pt = l,
            l
    }, ma = function (t, e, r, s, n, o, a, l, h, c) {
        ut(s) && (s = s(n || 0, t, o));
        var u = t[e], d = r !== "get" ? r : ut(u) ? h ? t[e.indexOf("set") || !ut(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : u, f = ut(u) ? h ? g0 : $u : _a, m;
        if (_t(s) && (~s.indexOf("random(") && (s = sr(s)),
            s.charAt(1) === "=" && (m = Ei(d, s) + (Mt(d) || 0),
                (m || m === 0) && (s = m))),
            !c || d !== s || ia)
            return !isNaN(d * s) && s !== "" ? (m = new It(this._pt, t, e, +d || 0, s - (d || 0), typeof u == "boolean" ? b0 : Gu, 0, f),
                h && (m.fp = h),
                a && m.modifier(a, this, t),
                this._pt = m) : (!u && !(e in t) && $s(e, s),
                    d0.call(this, t, e, d, s, f, l || Ht.stringFilter, h))
    }, p0 = function (t, e, r, s, n) {
        if (ut(t) && (t = Nr(t, n, e, r, s)),
            !xe(t) || t.style && t.nodeType || Tt(t) || gu(t))
            return _t(t) ? Nr(t, n, e, r, s) : t;
        var o = {}, a;
        for (a in t)
            o[a] = Nr(t[a], n, e, r, s);
        return o
    }, va = function (t, e, r, s, n, o) {
        var a, l, h, c;
        if (Ut[t] && (a = new Ut[t]).init(n, a.rawVars ? e[t] : p0(e[t], s, n, o, r), r, s, o) !== !1 && (r._pt = l = new It(r._pt, n, t, 0, 1, a.render, a, 0, a.priority),
            r !== Ji))
            for (h = r._ptLookup[r._targets.indexOf(n)],
                c = a._props.length; c--;)
                h[a._props[c]] = l;
        return a
    }, Ze, ia, ga = function i(t, e, r) {
        var s = t.vars, n = s.ease, o = s.startAt, a = s.immediateRender, l = s.lazy, h = s.onUpdate, c = s.runBackwards, u = s.yoyoEase, d = s.keyframes, f = s.autoRevert, m = t._dur, p = t._startAt, v = t._targets, g = t.parent, w = g && g.data === "nested" ? g.vars.targets : v, b = t._overwrite === "auto" && !sa, x = t.timeline, _, y, P, E, C, M, A, T, O, k, F, D, N;
        if (x && (!d || !n) && (n = "none"),
            t._ease = bi(n, tr.ease),
            t._yEase = u ? Uu(bi(u === !0 ? n : u, tr.ease)) : 0,
            u && t._yoyo && !t._repeat && (u = t._yEase,
                t._yEase = t._ease,
                t._ease = u),
            t._from = !x && !!s.runBackwards,
            !x || d && !s.stagger) {
            if (T = v[0] ? ti(v[0]).harness : 0,
                D = T && s[T.prop],
                _ = js(s, ha),
                p && (p._zTime < 0 && p.progress(1),
                    e < 0 && c && a && !f ? p.render(-1, !0) : p.revert(c && m ? Vs : Ug),
                    p._lazy = 0),
                o) {
                if (ei(t._startAt = mt.set(v, le({
                    data: "isStart",
                    overwrite: !1,
                    parent: g,
                    immediateRender: !0,
                    lazy: !p && qt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: h && function () {
                        return Xt(t, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, o))),
                    t._startAt._dp = 0,
                    t._startAt._sat = t,
                    e < 0 && (St || !a && !f) && t._startAt.revert(Vs),
                    a && m && e <= 0 && r <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else if (c && m && !p) {
                if (e && (a = !1),
                    P = le({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && !p && qt(l),
                        immediateRender: a,
                        stagger: 0,
                        parent: g
                    }, _),
                    D && (P[T.prop] = D),
                    ei(t._startAt = mt.set(v, P)),
                    t._startAt._dp = 0,
                    t._startAt._sat = t,
                    e < 0 && (St ? t._startAt.revert(Vs) : t._startAt.render(-1, !0)),
                    t._zTime = e,
                    !a)
                    i(t._startAt, Q, Q);
                else if (!e)
                    return
            }
            for (t._pt = t._ptCache = 0,
                l = m && qt(l) || l && !m,
                y = 0; y < v.length; y++) {
                if (C = v[y],
                    A = C._gsap || ua(v)[y]._gsap,
                    t._ptLookup[y] = k = {},
                    Ko[A.id] && Je.length && Us(),
                    F = w === v ? y : w.indexOf(C),
                    T && (O = new T).init(C, D || _, t, F, w) !== !1 && (t._pt = E = new It(t._pt, C, O.name, 0, 1, O.render, O, 0, O.priority),
                        O._props.forEach(function (V) {
                            k[V] = E
                        }),
                        O.priority && (M = 1)),
                    !T || D)
                    for (P in _)
                        Ut[P] && (O = va(P, _, t, F, C, w)) ? O.priority && (M = 1) : k[P] = E = ma.call(t, C, P, "get", _[P], F, w, 0, s.stringFilter);
                t._op && t._op[y] && t.kill(C, t._op[y]),
                    b && t._pt && (Ze = t,
                        at.killTweensOf(C, k, t.globalTime(e)),
                        N = !t.parent,
                        Ze = 0),
                    t._pt && l && (Ko[A.id] = 1)
            }
            M && ya(t),
                t._onInit && t._onInit(t)
        }
        t._onUpdate = h,
            t._initted = (!t._op || t._pt) && !N,
            d && e <= 0 && x.render(oe, !0, !0)
    }, f0 = function (t, e, r, s, n, o, a, l) {
        var h = (t._pt && t._ptCache || (t._ptCache = {}))[e], c, u, d, f;
        if (!h)
            for (h = t._ptCache[e] = [],
                d = t._ptLookup,
                f = t._targets.length; f--;) {
                if (c = d[f][e],
                    c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== e && c.fp !== e;)
                        c = c._next;
                if (!c)
                    return ia = 1,
                        t.vars[e] = "+=0",
                        ga(t, a),
                        ia = 0,
                        l ? Br(e + " not eligible for reset") : 1;
                h.push(c)
            }
        for (f = h.length; f--;)
            u = h[f],
                c = u._pt || u,
                c.s = (s || s === 0) && !n ? s : c.s + (s || 0) + o * c.c,
                c.c = r - c.s,
                u.e && (u.e = dt(r) + Mt(u.e)),
                u.b && (u.b = c.s + Mt(u.b))
    }, m0 = function (t, e) {
        var r = t[0] ? ti(t[0]).harness : 0, s = r && r.aliases, n, o, a, l;
        if (!s)
            return e;
        n = yi({}, e);
        for (o in s)
            if (o in n)
                for (l = s[o].split(","),
                    a = l.length; a--;)
                    n[l[a]] = n[o];
        return n
    }, v0 = function (t, e, r, s) {
        var n = e.ease || s || "power1.inOut", o, a;
        if (Tt(e))
            a = r[t] || (r[t] = []),
                e.forEach(function (l, h) {
                    return a.push({
                        t: h / (e.length - 1) * 100,
                        v: l,
                        e: n
                    })
                });
        else
            for (o in e)
                a = r[o] || (r[o] = []),
                    o === "ease" || a.push({
                        t: parseFloat(t),
                        v: e[o],
                        e: n
                    })
    }, Nr = function (t, e, r, s, n) {
        return ut(t) ? t.call(e, r, s, n) : _t(t) && ~t.indexOf("random(") ? sr(t) : t
    }, Hu = ca + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Wu = {};
    Ft(Hu + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
        return Wu[i] = 1
    });
    var mt = function (i) {
        mu(t, i);
        function t(r, s, n, o) {
            var a;
            typeof s == "number" && (n.duration = s,
                s = n,
                n = null),
                a = i.call(this, o ? s : Vr(s)) || this;
            var l = a.vars, h = l.duration, c = l.delay, u = l.immediateRender, d = l.stagger, f = l.overwrite, m = l.keyframes, p = l.defaults, v = l.scrollTrigger, g = l.yoyoEase, w = s.parent || at, b = (Tt(r) || gu(r) ? Ve(r[0]) : "length" in s) ? [r] : ae(r), x, _, y, P, E, C, M, A;
            if (a._targets = b.length ? ua(b) : Br("GSAP target " + r + " not found. https://gsap.com", !Ht.nullTargetWarn) || [],
                a._ptLookup = [],
                a._overwrite = f,
                m || d || zs(h) || zs(c)) {
                if (s = a.vars,
                    x = a.timeline = new Pt({
                        data: "nested",
                        defaults: p || {},
                        targets: w && w.data === "nested" ? w.vars.targets : b
                    }),
                    x.kill(),
                    x.parent = x._dp = Ie(a),
                    x._start = 0,
                    d || zs(h) || zs(c)) {
                    if (P = b.length,
                        M = d && Lu(d),
                        xe(d))
                        for (E in d)
                            ~Hu.indexOf(E) && (A || (A = {}),
                                A[E] = d[E]);
                    for (_ = 0; _ < P; _++)
                        y = js(s, Wu),
                            y.stagger = 0,
                            g && (y.yoyoEase = g),
                            A && yi(y, A),
                            C = b[_],
                            y.duration = +Nr(h, Ie(a), _, C, b),
                            y.delay = (+Nr(c, Ie(a), _, C, b) || 0) - a._delay,
                            !d && P === 1 && y.delay && (a._delay = c = y.delay,
                                a._start += c,
                                y.delay = 0),
                            x.to(C, y, M ? M(_, C, b) : 0),
                            x._ease = U.none;
                    x.duration() ? h = c = 0 : a.timeline = 0
                } else if (m) {
                    Vr(le(x.vars.defaults, {
                        ease: "none"
                    })),
                        x._ease = bi(m.ease || s.ease || "none");
                    var T = 0, O, k, F;
                    if (Tt(m))
                        m.forEach(function (D) {
                            return x.to(b, D, ">")
                        }),
                            x.duration();
                    else {
                        y = {};
                        for (E in m)
                            E === "ease" || E === "easeEach" || v0(E, m[E], y, m.easeEach);
                        for (E in y)
                            for (O = y[E].sort(function (D, N) {
                                return D.t - N.t
                            }),
                                T = 0,
                                _ = 0; _ < O.length; _++)
                                k = O[_],
                                    F = {
                                        ease: k.e,
                                        duration: (k.t - (_ ? O[_ - 1].t : 0)) / 100 * h
                                    },
                                    F[E] = k.v,
                                    x.to(b, F, T),
                                    T += F.duration;
                        x.duration() < h && x.to({}, {
                            duration: h - x.duration()
                        })
                    }
                }
                h || a.duration(h = x.duration())
            } else
                a.timeline = 0;
            return f === !0 && !sa && (Ze = Ie(a),
                at.killTweensOf(b),
                Ze = 0),
                ye(w, Ie(a), n),
                s.reversed && a.reverse(),
                s.paused && a.paused(!0),
                (u || !h && !m && a._start === xt(w._time) && qt(u) && Gg(Ie(a)) && w.data !== "nested") && (a._tTime = -Q,
                    a.render(Math.max(0, -c) || 0)),
                v && Tu(Ie(a), v),
                a
        }
        var e = t.prototype;
        return e.render = function (s, n, o) {
            var a = this._time, l = this._tDur, h = this._dur, c = s < 0, u = s > l - Q && !c ? l : s < Q ? 0 : s, d, f, m, p, v, g, w, b, x;
            if (!h)
                Xg(this, s, n, o);
            else if (u !== this._tTime || !s || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c) {
                if (d = u,
                    b = this.timeline,
                    this._repeat) {
                    if (p = h + this._rDelay,
                        this._repeat < -1 && c)
                        return this.totalTime(p * 100 + s, n, o);
                    if (d = xt(u % p),
                        u === l ? (m = this._repeat,
                            d = h) : (m = ~~(u / p),
                                m && m === xt(u / p) && (d = h,
                                    m--),
                                d > h && (d = h)),
                        g = this._yoyo && m & 1,
                        g && (x = this._yEase,
                            d = h - d),
                        v = er(this._tTime, p),
                        d === a && !o && this._initted && m === v)
                        return this._tTime = u,
                            this;
                    m !== v && (b && this._yEase && ju(b, g),
                        this.vars.repeatRefresh && !g && !this._lock && this._time !== p && this._initted && (this._lock = o = 1,
                            this.render(xt(p * m), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (Au(this, c ? s : d, o, n, u))
                        return this._tTime = 0,
                            this;
                    if (a !== this._time && !(o && this.vars.repeatRefresh && m !== v))
                        return this;
                    if (h !== this._dur)
                        return this.render(s, n, o)
                }
                if (this._tTime = u,
                    this._time = d,
                    !this._act && this._ts && (this._act = 1,
                        this._lazy = 0),
                    this.ratio = w = (x || this._ease)(d / h),
                    this._from && (this.ratio = w = 1 - w),
                    d && !a && !n && !m && (Xt(this, "onStart"),
                        this._tTime !== u))
                    return this;
                for (f = this._pt; f;)
                    f.r(w, f.d),
                        f = f._next;
                b && b.render(s < 0 ? s : b._dur * b._ease(d / this._dur), n, o) || this._startAt && (this._zTime = s),
                    this._onUpdate && !n && (c && Qo(this, s, n, o),
                        Xt(this, "onUpdate")),
                    this._repeat && m !== v && this.vars.onRepeat && !n && this.parent && Xt(this, "onRepeat"),
                    (u === this._tDur || !u) && this._tTime === u && (c && !this._onUpdate && Qo(this, s, !0, !0),
                        (s || !h) && (u === this._tDur && this._ts > 0 || !u && this._ts < 0) && ei(this, 1),
                        !n && !(c && !a) && (u || a || g) && (Xt(this, u === l ? "onComplete" : "onReverseComplete", !0),
                            this._prom && !(u < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
            ,
            e.targets = function () {
                return this._targets
            }
            ,
            e.invalidate = function (s) {
                return (!s || !this.vars.runBackwards) && (this._startAt = 0),
                    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                    this._ptLookup = [],
                    this.timeline && this.timeline.invalidate(s),
                    i.prototype.invalidate.call(this, s)
            }
            ,
            e.resetTo = function (s, n, o, a, l) {
                jr || jt.wake(),
                    this._ts || this.play();
                var h = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
                return this._initted || ga(this, h),
                    c = this._ease(h / this._dur),
                    f0(this, s, n, o, a, c, h, l) ? this.resetTo(s, n, o, a, 1) : (Xs(this, 0),
                        this.parent || Mu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                        this.render(0))
            }
            ,
            e.kill = function (s, n) {
                if (n === void 0 && (n = "all"),
                    !s && (!n || n === "all"))
                    return this._lazy = this._pt = 0,
                        this.parent ? Ir(this) : this;
                if (this.timeline) {
                    var o = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(s, n, Ze && Ze.vars.overwrite !== !0)._first || Ir(this),
                        this.parent && o !== this.timeline.totalDuration() && ir(this, this._dur * this.timeline._tDur / o, 0, 1),
                        this
                }
                var a = this._targets, l = s ? ae(s) : a, h = this._ptLookup, c = this._pt, u, d, f, m, p, v, g;
                if ((!n || n === "all") && Wg(a, l))
                    return n === "all" && (this._pt = 0),
                        Ir(this);
                for (u = this._op = this._op || [],
                    n !== "all" && (_t(n) && (p = {},
                        Ft(n, function (w) {
                            return p[w] = 1
                        }),
                        n = p),
                        n = m0(a, n)),
                    g = a.length; g--;)
                    if (~l.indexOf(a[g])) {
                        d = h[g],
                            n === "all" ? (u[g] = n,
                                m = d,
                                f = {}) : (f = u[g] = u[g] || {},
                                    m = n);
                        for (p in m)
                            v = d && d[p],
                                v && ((!("kill" in v.d) || v.d.kill(p) === !0) && Gs(this, v, "_pt"),
                                    delete d[p]),
                                f !== "all" && (f[p] = 1)
                    }
                return this._initted && !this._pt && c && Ir(this),
                    this
            }
            ,
            t.to = function (s, n) {
                return new t(s, n, arguments[2])
            }
            ,
            t.from = function (s, n) {
                return Dr(1, arguments)
            }
            ,
            t.delayedCall = function (s, n, o, a) {
                return new t(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: s,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: o,
                    onReverseCompleteParams: o,
                    callbackScope: a
                })
            }
            ,
            t.fromTo = function (s, n, o) {
                return Dr(2, arguments)
            }
            ,
            t.set = function (s, n) {
                return n.duration = 0,
                    n.repeatDelay || (n.repeat = 0),
                    new t(s, n)
            }
            ,
            t.killTweensOf = function (s, n, o) {
                return at.killTweensOf(s, n, o)
            }
            ,
            t
    }(qr);
    le(mt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    });
    Ft("staggerTo,staggerFrom,staggerFromTo", function (i) {
        mt[i] = function () {
            var t = new Pt
                , e = Jo.call(arguments, 0);
            return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0),
                t[i].apply(t, e)
        }
    });
    var _a = function (t, e, r) {
        return t[e] = r
    }
        , $u = function (t, e, r) {
            return t[e](r)
        }
        , g0 = function (t, e, r, s) {
            return t[e](s.fp, r)
        }
        , _0 = function (t, e, r) {
            return t.setAttribute(e, r)
        }
        , Ks = function (t, e) {
            return ut(t[e]) ? $u : Ws(t[e]) && t.setAttribute ? _0 : _a
        }
        , Gu = function (t, e) {
            return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
        }
        , b0 = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }
        , ba = function (t, e) {
            var r = e._pt
                , s = "";
            if (!t && e.b)
                s = e.b;
            else if (t === 1 && e.e)
                s = e.e;
            else {
                for (; r;)
                    s = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + s,
                        r = r._next;
                s += e.c
            }
            e.set(e.t, e.p, s, e)
        }
        , wa = function (t, e) {
            for (var r = e._pt; r;)
                r.r(t, r.d),
                    r = r._next
        }
        , w0 = function (t, e, r, s) {
            for (var n = this._pt, o; n;)
                o = n._next,
                    n.p === s && n.modifier(t, e, r),
                    n = o
        }
        , y0 = function (t) {
            for (var e = this._pt, r, s; e;)
                s = e._next,
                    e.p === t && !e.op || e.op === t ? Gs(this, e, "_pt") : e.dep || (r = 1),
                    e = s;
            return !r
        }
        , x0 = function (t, e, r, s) {
            s.mSet(t, e, s.m.call(s.tween, r, s.mt), s)
        }
        , ya = function (t) {
            for (var e = t._pt, r, s, n, o; e;) {
                for (r = e._next,
                    s = n; s && s.pr > e.pr;)
                    s = s._next;
                (e._prev = s ? s._prev : o) ? e._prev._next = e : n = e,
                    (e._next = s) ? s._prev = e : o = e,
                    e = r
            }
            t._pt = n
        }
        , It = function () {
            function i(e, r, s, n, o, a, l, h, c) {
                this.t = r,
                    this.s = n,
                    this.c = o,
                    this.p = s,
                    this.r = a || Gu,
                    this.d = l || this,
                    this.set = h || _a,
                    this.pr = c || 0,
                    this._next = e,
                    e && (e._prev = this)
            }
            var t = i.prototype;
            return t.modifier = function (r, s, n) {
                this.mSet = this.mSet || this.set,
                    this.set = x0,
                    this.m = r,
                    this.mt = n,
                    this.tween = s
            }
                ,
                i
        }();
    Ft(ca + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (i) {
        return ha[i] = 1
    });
    Kt.TweenMax = Kt.TweenLite = mt;
    Kt.TimelineLite = Kt.TimelineMax = Pt;
    at = new Pt({
        sortChildren: !1,
        defaults: tr,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    });
    Ht.stringFilter = pa;
    var wi = []
        , Ns = {}
        , E0 = []
        , fu = 0
        , C0 = 0
        , Wo = function (t) {
            return (Ns[t] || E0).map(function (e) {
                return e()
            })
        }
        , ra = function () {
            var t = Date.now()
                , e = [];
            t - fu > 2 && (Wo("matchMediaInit"),
                wi.forEach(function (r) {
                    var s = r.queries, n = r.conditions, o, a, l, h;
                    for (a in s)
                        o = we.matchMedia(s[a]).matches,
                            o && (l = 1),
                            o !== n[a] && (n[a] = o,
                                h = 1);
                    h && (r.revert(),
                        l && e.push(r))
                }),
                Wo("matchMediaRevert"),
                e.forEach(function (r) {
                    return r.onMatch(r, function (s) {
                        return r.add(null, s)
                    })
                }),
                fu = t,
                Wo("matchMedia"))
        }
        , Yu = function () {
            function i(e, r) {
                this.selector = r && ta(r),
                    this.data = [],
                    this._r = [],
                    this.isReverted = !1,
                    this.id = C0++,
                    e && this.add(e)
            }
            var t = i.prototype;
            return t.add = function (r, s, n) {
                ut(r) && (n = s,
                    s = r,
                    r = ut);
                var o = this
                    , a = function () {
                        var h = rt, c = o.selector, u;
                        return h && h !== o && h.data.push(o),
                            n && (o.selector = ta(n)),
                            rt = o,
                            u = s.apply(o, arguments),
                            ut(u) && o._r.push(u),
                            rt = h,
                            o.selector = c,
                            o.isReverted = !1,
                            u
                    };
                return o.last = a,
                    r === ut ? a(o, function (l) {
                        return o.add(null, l)
                    }) : r ? o[r] = a : a
            }
                ,
                t.ignore = function (r) {
                    var s = rt;
                    rt = null,
                        r(this),
                        rt = s
                }
                ,
                t.getTweens = function () {
                    var r = [];
                    return this.data.forEach(function (s) {
                        return s instanceof i ? r.push.apply(r, s.getTweens()) : s instanceof mt && !(s.parent && s.parent.data === "nested") && r.push(s)
                    }),
                        r
                }
                ,
                t.clear = function () {
                    this._r.length = this.data.length = 0
                }
                ,
                t.kill = function (r, s) {
                    var n = this;
                    if (r ? function () {
                        for (var a = n.getTweens(), l = n.data.length, h; l--;)
                            h = n.data[l],
                                h.data === "isFlip" && (h.revert(),
                                    h.getChildren(!0, !0, !1).forEach(function (c) {
                                        return a.splice(a.indexOf(c), 1)
                                    }));
                        for (a.map(function (c) {
                            return {
                                g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                                t: c
                            }
                        }).sort(function (c, u) {
                            return u.g - c.g || -1 / 0
                        }).forEach(function (c) {
                            return c.t.revert(r)
                        }),
                            l = n.data.length; l--;)
                            h = n.data[l],
                                h instanceof Pt ? h.data !== "nested" && (h.scrollTrigger && h.scrollTrigger.revert(),
                                    h.kill()) : !(h instanceof mt) && h.revert && h.revert(r);
                        n._r.forEach(function (c) {
                            return c(r, n)
                        }),
                            n.isReverted = !0
                    }() : this.data.forEach(function (a) {
                        return a.kill && a.kill()
                    }),
                        this.clear(),
                        s)
                        for (var o = wi.length; o--;)
                            wi[o].id === this.id && wi.splice(o, 1)
                }
                ,
                t.revert = function (r) {
                    this.kill(r || {})
                }
                ,
                i
        }()
        , P0 = function () {
            function i(e) {
                this.contexts = [],
                    this.scope = e,
                    rt && rt.data.push(this)
            }
            var t = i.prototype;
            return t.add = function (r, s, n) {
                xe(r) || (r = {
                    matches: r
                });
                var o = new Yu(0, n || this.scope), a = o.conditions = {}, l, h, c;
                rt && !o.selector && (o.selector = rt.selector),
                    this.contexts.push(o),
                    s = o.add("onMatch", s),
                    o.queries = r;
                for (h in r)
                    h === "all" ? c = 1 : (l = we.matchMedia(r[h]),
                        l && (wi.indexOf(o) < 0 && wi.push(o),
                            (a[h] = l.matches) && (c = 1),
                            l.addListener ? l.addListener(ra) : l.addEventListener("change", ra)));
                return c && s(o, function (u) {
                    return o.add(null, u)
                }),
                    this
            }
                ,
                t.revert = function (r) {
                    this.kill(r || {})
                }
                ,
                t.kill = function (r) {
                    this.contexts.forEach(function (s) {
                        return s.kill(r, !0)
                    })
                }
                ,
                i
        }()
        , Hs = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                e.forEach(function (s) {
                    return Du(s)
                })
            },
            timeline: function (t) {
                return new Pt(t)
            },
            getTweensOf: function (t, e) {
                return at.getTweensOf(t, e)
            },
            getProperty: function (t, e, r, s) {
                _t(t) && (t = ae(t)[0]);
                var n = ti(t || {}).get
                    , o = r ? Pu : Cu;
                return r === "native" && (r = ""),
                    t && (e ? o((Ut[e] && Ut[e].get || n)(t, e, r, s)) : function (a, l, h) {
                        return o((Ut[a] && Ut[a].get || n)(t, a, l, h))
                    }
                    )
            },
            quickSetter: function (t, e, r) {
                if (t = ae(t),
                    t.length > 1) {
                    var s = t.map(function (c) {
                        return At.quickSetter(c, e, r)
                    })
                        , n = s.length;
                    return function (c) {
                        for (var u = n; u--;)
                            s[u](c)
                    }
                }
                t = t[0] || {};
                var o = Ut[e]
                    , a = ti(t)
                    , l = a.harness && (a.harness.aliases || {})[e] || e
                    , h = o ? function (c) {
                        var u = new o;
                        Ji._pt = 0,
                            u.init(t, r ? c + r : c, Ji, 0, [t]),
                            u.render(1, u),
                            Ji._pt && wa(1, Ji)
                    }
                        : a.set(t, l);
                return o ? h : function (c) {
                    return h(t, l, r ? c + r : c, a, 1)
                }
            },
            quickTo: function (t, e, r) {
                var s, n = At.to(t, yi((s = {},
                    s[e] = "+=0.1",
                    s.paused = !0,
                    s), r || {})), o = function (l, h, c) {
                        return n.resetTo(e, l, h, c)
                    };
                return o.tween = n,
                    o
            },
            isTweening: function (t) {
                return at.getTweensOf(t, !0).length > 0
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = bi(t.ease, tr.ease)),
                    hu(tr, t || {})
            },
            config: function (t) {
                return hu(Ht, t || {})
            },
            registerEffect: function (t) {
                var e = t.name
                    , r = t.effect
                    , s = t.plugins
                    , n = t.defaults
                    , o = t.extendTimeline;
                (s || "").split(",").forEach(function (a) {
                    return a && !Ut[a] && !Kt[a] && Br(e + " effect requires " + a + " plugin.")
                }),
                    Uo[e] = function (a, l, h) {
                        return r(ae(a), le(l || {}, n), h)
                    }
                    ,
                    o && (Pt.prototype[e] = function (a, l, h) {
                        return this.add(Uo[e](a, xe(l) ? l : (h = l) && {}, this), h)
                    }
                    )
            },
            registerEase: function (t, e) {
                U[t] = bi(e)
            },
            parseEase: function (t, e) {
                return arguments.length ? bi(t, e) : U
            },
            getById: function (t) {
                return at.getById(t)
            },
            exportRoot: function (t, e) {
                t === void 0 && (t = {});
                var r = new Pt(t), s, n;
                for (r.smoothChildTiming = qt(t.smoothChildTiming),
                    at.remove(r),
                    r._dp = 0,
                    r._time = r._tTime = at._time,
                    s = at._first; s;)
                    n = s._next,
                        (e || !(!s._dur && s instanceof mt && s.vars.onComplete === s._targets[0])) && ye(r, s, s._start - s._delay),
                        s = n;
                return ye(at, r, 0),
                    r
            },
            context: function (t, e) {
                return t ? new Yu(t, e) : rt
            },
            matchMedia: function (t) {
                return new P0(t)
            },
            matchMediaRefresh: function () {
                return wi.forEach(function (t) {
                    var e = t.conditions, r, s;
                    for (s in e)
                        e[s] && (e[s] = !1,
                            r = 1);
                    r && t.revert()
                }) || ra()
            },
            addEventListener: function (t, e) {
                var r = Ns[t] || (Ns[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function (t, e) {
                var r = Ns[t]
                    , s = r && r.indexOf(e);
                s >= 0 && r.splice(s, 1)
            },
            utils: {
                wrap: r0,
                wrapYoyo: s0,
                distribute: Lu,
                random: Fu,
                snap: Ru,
                normalize: i0,
                getUnit: Mt,
                clamp: Zg,
                splitColor: Nu,
                toArray: ae,
                selector: ta,
                mapRange: zu,
                pipe: t0,
                unitize: e0,
                interpolate: n0,
                shuffle: Ou
            },
            install: wu,
            effects: Uo,
            ticker: jt,
            updateRoot: Pt.updateRoot,
            plugins: Ut,
            globalTimeline: at,
            core: {
                PropTween: It,
                globals: yu,
                Tween: mt,
                Timeline: Pt,
                Animation: qr,
                getCache: ti,
                _removeLinkedListItem: Gs,
                reverting: function () {
                    return St
                },
                context: function (t) {
                    return t && rt && (rt.data.push(t),
                        t._ctx = rt),
                        rt
                },
                suppressOverwrites: function (t) {
                    return sa = t
                }
            }
        };
    Ft("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
        return Hs[i] = mt[i]
    });
    jt.add(Pt.updateRoot);
    Ji = Hs.to({}, {
        duration: 0
    });
    var M0 = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;)
            r = r._next;
        return r
    }
        , S0 = function (t, e) {
            var r = t._targets, s, n, o;
            for (s in e)
                for (n = r.length; n--;)
                    o = t._ptLookup[n][s],
                        o && (o = o.d) && (o._pt && (o = M0(o, s)),
                            o && o.modifier && o.modifier(e[s], t, r[n], s))
        }
        , $o = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (s, n, o) {
                    o._onInit = function (a) {
                        var l, h;
                        if (_t(n) && (l = {},
                            Ft(n, function (c) {
                                return l[c] = 1
                            }),
                            n = l),
                            e) {
                            l = {};
                            for (h in n)
                                l[h] = e(n[h]);
                            n = l
                        }
                        S0(a, n)
                    }
                }
            }
        }
        , At = Hs.registerPlugin({
            name: "attr",
            init: function (t, e, r, s, n) {
                var o, a, l;
                this.tween = r;
                for (o in e)
                    l = t.getAttribute(o) || "",
                        a = this.add(t, "setAttribute", (l || 0) + "", e[o], s, n, 0, 0, o),
                        a.op = o,
                        a.b = l,
                        this._props.push(o)
            },
            render: function (t, e) {
                for (var r = e._pt; r;)
                    St ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                        r = r._next
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var r = e.length; r--;)
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, $o("roundProps", ea), $o("modifiers"), $o("snap", Ru)) || Hs;
    mt.version = Pt.version = At.version = "3.12.5";
    bu = 1;
    na() && rr();
    var T0 = U.Power0
        , A0 = U.Power1
        , k0 = U.Power2
        , O0 = U.Power3
        , L0 = U.Power4
        , R0 = U.Linear
        , F0 = U.Quad
        , I0 = U.Cubic
        , z0 = U.Quart
        , V0 = U.Quint
        , D0 = U.Strong
        , N0 = U.Elastic
        , B0 = U.Back
        , U0 = U.SteppedEase
        , j0 = U.Bounce
        , q0 = U.Sine
        , H0 = U.Expo
        , W0 = U.Circ;
    var Xu, ri, or, Ta, Ti, $0, Ku, Aa, G0 = function () {
        return typeof window != "undefined"
    }, Ne = {}, Si = 180 / Math.PI, ar = Math.PI / 180, nr = Math.atan2, Qu = 1e8, ka = /([A-Z])/g, Y0 = /(left|right|width|margin|padding|x)/i, X0 = /[\s,\(]\S/, Ee = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ca = function (t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, K0 = function (t, e) {
        return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, Q0 = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, Z0 = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, sd = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, nd = function (t, e) {
        return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
    }, J0 = function (t, e, r) {
        return t.style[e] = r
    }, t_ = function (t, e, r) {
        return t.style.setProperty(e, r)
    }, e_ = function (t, e, r) {
        return t._gsap[e] = r
    }, i_ = function (t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, r_ = function (t, e, r, s, n) {
        var o = t._gsap;
        o.scaleX = o.scaleY = r,
            o.renderTransform(n, o)
    }, s_ = function (t, e, r, s, n) {
        var o = t._gsap;
        o[e] = r,
            o.renderTransform(n, o)
    }, lt = "transform", Wt = lt + "Origin", n_ = function i(t, e) {
        var r = this
            , s = this.target
            , n = s.style
            , o = s._gsap;
        if (t in Ne && n) {
            if (this.tfm = this.tfm || {},
                t !== "transform")
                t = Ee[t] || t,
                    ~t.indexOf(",") ? t.split(",").forEach(function (a) {
                        return r.tfm[a] = De(s, a)
                    }) : this.tfm[t] = o.x ? o[t] : De(s, t),
                    t === Wt && (this.tfm.zOrigin = o.zOrigin);
            else
                return Ee.transform.split(",").forEach(function (a) {
                    return i.call(r, a, e)
                });
            if (this.props.indexOf(lt) >= 0)
                return;
            o.svg && (this.svgo = s.getAttribute("data-svg-origin"),
                this.props.push(Wt, e, "")),
                t = lt
        }
        (n || e) && this.props.push(t, e, n[t])
    }, od = function (t) {
        t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
    }, o_ = function () {
        var t = this.props, e = this.target, r = e.style, s = e._gsap, n, o;
        for (n = 0; n < t.length; n += 3)
            t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(ka, "-$1").toLowerCase());
        if (this.tfm) {
            for (o in this.tfm)
                s[o] = this.tfm[o];
            s.svg && (s.renderTransform(),
                e.setAttribute("data-svg-origin", this.svgo || "")),
                n = Aa(),
                (!n || !n.isStart) && !r[lt] && (od(r),
                    s.zOrigin && r[Wt] && (r[Wt] += " " + s.zOrigin + "px",
                        s.zOrigin = 0,
                        s.renderTransform()),
                    s.uncache = 1)
        }
    }, ad = function (t, e) {
        var r = {
            target: t,
            props: [],
            revert: o_,
            save: n_
        };
        return t._gsap || At.core.getCache(t),
            e && e.split(",").forEach(function (s) {
                return r.save(s)
            }),
            r
    }, ld, Pa = function (t, e) {
        var r = ri.createElementNS ? ri.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ri.createElement(t);
        return r && r.style ? r : ri.createElement(t)
    }, Ce = function i(t, e, r) {
        var s = getComputedStyle(t);
        return s[e] || s.getPropertyValue(e.replace(ka, "-$1").toLowerCase()) || s.getPropertyValue(e) || !r && i(t, lr(e) || e, 1) || ""
    }, Zu = "O,Moz,ms,Ms,Webkit".split(","), lr = function (t, e, r) {
        var s = e || Ti
            , n = s.style
            , o = 5;
        if (t in n && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Zu[o] + t in n);)
            ;
        return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Zu[o] : "") + t
    }, Ma = function () {
        G0() && window.document && (Xu = window,
            ri = Xu.document,
            or = ri.documentElement,
            Ti = Pa("div") || {
                style: {}
            },
            $0 = Pa("div"),
            lt = lr(lt),
            Wt = lt + "Origin",
            Ti.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            ld = !!lr("perspective"),
            Aa = At.core.reverting,
            Ta = 1)
    }, xa = function i(t) {
        var e = Pa("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, n = this.style.cssText, o;
        if (or.appendChild(e),
            e.appendChild(this),
            this.style.display = "block",
            t)
            try {
                o = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = i
            } catch (a) { }
        else
            this._gsapBBox && (o = this._gsapBBox());
        return r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
            or.removeChild(e),
            this.style.cssText = n,
            o
    }, Ju = function (t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, hd = function (t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = xa.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === xa || (e = xa.call(t, !0)),
            e && !e.width && !e.x && !e.y ? {
                x: +Ju(t, ["x", "cx", "x1"]) || 0,
                y: +Ju(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : e
    }, cd = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && hd(t))
    }, Ai = function (t, e) {
        if (e) {
            var r = t.style, s;
            e in Ne && e !== Wt && (e = lt),
                r.removeProperty ? (s = e.substr(0, 2),
                    (s === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
                    r.removeProperty(s === "--" ? e : e.replace(ka, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }, si = function (t, e, r, s, n, o) {
        var a = new It(t._pt, e, r, 0, 1, o ? nd : sd);
        return t._pt = a,
            a.b = s,
            a.e = n,
            t._props.push(r),
            a
    }, td = {
        deg: 1,
        rad: 1,
        turn: 1
    }, a_ = {
        grid: 1,
        flex: 1
    }, ni = function i(t, e, r, s) {
        var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = Ti.style, l = Y0.test(e), h = t.tagName.toLowerCase() === "svg", c = (h ? "client" : "offset") + (l ? "Width" : "Height"), u = 100, d = s === "px", f = s === "%", m, p, v, g;
        if (s === o || !n || td[s] || td[o])
            return n;
        if (o !== "px" && !d && (n = i(t, e, r, "px")),
            g = t.getCTM && cd(t),
            (f || o === "%") && (Ne[e] || ~e.indexOf("adius")))
            return m = g ? t.getBBox()[l ? "width" : "height"] : t[c],
                dt(f ? n / m * u : n / 100 * m);
        if (a[l ? "width" : "height"] = u + (d ? o : s),
            p = ~e.indexOf("adius") || s === "em" && t.appendChild && !h ? t : t.parentNode,
            g && (p = (t.ownerSVGElement || {}).parentNode),
            (!p || p === ri || !p.appendChild) && (p = ri.body),
            v = p._gsap,
            v && f && v.width && l && v.time === jt.time && !v.uncache)
            return dt(n / v.width * u);
        if (f && (e === "height" || e === "width")) {
            var w = t.style[e];
            t.style[e] = u + s,
                m = t[c],
                w ? t.style[e] = w : Ai(t, e)
        } else
            (f || o === "%") && !a_[Ce(p, "display")] && (a.position = Ce(t, "position")),
                p === t && (a.position = "static"),
                p.appendChild(Ti),
                m = Ti[c],
                p.removeChild(Ti),
                a.position = "absolute";
        return l && f && (v = ti(p),
            v.time = jt.time,
            v.width = p[c]),
            dt(d ? m * n / u : m && n ? u / m * n : 0)
    }, De = function (t, e, r, s) {
        var n;
        return Ta || Ma(),
            e in Ee && e !== "transform" && (e = Ee[e],
                ~e.indexOf(",") && (e = e.split(",")[0])),
            Ne[e] && e !== "transform" ? (n = Gr(t, s),
                n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Zs(Ce(t, Wt)) + " " + n.zOrigin + "px") : (n = t.style[e],
                    (!n || n === "auto" || s || ~(n + "").indexOf("calc(")) && (n = Qs[e] && Qs[e](t, e, r) || Ce(t, e) || da(t, e) || (e === "opacity" ? 1 : 0))),
            r && !~(n + "").trim().indexOf(" ") ? ni(t, e, n, r) + r : n
    }, l_ = function (t, e, r, s) {
        if (!r || r === "none") {
            var n = lr(e, t, 1)
                , o = n && Ce(t, n, 1);
            o && o !== r ? (e = n,
                r = o) : e === "borderColor" && (r = Ce(t, "borderTopColor"))
        }
        var a = new It(this._pt, t.style, e, 0, 1, ba), l = 0, h = 0, c, u, d, f, m, p, v, g, w, b, x, _;
        if (a.b = r,
            a.e = s,
            r += "",
            s += "",
            s === "auto" && (p = t.style[e],
                t.style[e] = s,
                s = Ce(t, e) || s,
                p ? t.style[e] = p : Ai(t, e)),
            c = [r, s],
            pa(c),
            r = c[0],
            s = c[1],
            d = r.match(xi) || [],
            _ = s.match(xi) || [],
            _.length) {
            for (; u = xi.exec(s);)
                v = u[0],
                    w = s.substring(l, u.index),
                    m ? m = (m + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (m = 1),
                    v !== (p = d[h++] || "") && (f = parseFloat(p) || 0,
                        x = p.substr((f + "").length),
                        v.charAt(1) === "=" && (v = Ei(f, v) + x),
                        g = parseFloat(v),
                        b = v.substr((g + "").length),
                        l = xi.lastIndex - b.length,
                        b || (b = b || Ht.units[e] || x,
                            l === s.length && (s += b,
                                a.e += b)),
                        x !== b && (f = ni(t, e, p, b) || 0),
                        a._pt = {
                            _next: a._pt,
                            p: w || h === 1 ? w : ",",
                            s: f,
                            c: g - f,
                            m: m && m < 4 || e === "zIndex" ? Math.round : 0
                        });
            a.c = l < s.length ? s.substring(l, s.length) : ""
        } else
            a.r = e === "display" && s === "none" ? nd : sd;
        return aa.test(s) && (a.e = 0),
            this._pt = a,
            a
    }, ed = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, h_ = function (t) {
        var e = t.split(" ")
            , r = e[0]
            , s = e[1] || "50%";
        return (r === "top" || r === "bottom" || s === "left" || s === "right") && (t = r,
            r = s,
            s = t),
            e[0] = ed[r] || r,
            e[1] = ed[s] || s,
            e.join(" ")
    }, c_ = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r = e.t, s = r.style, n = e.u, o = r._gsap, a, l, h;
            if (n === "all" || n === !0)
                s.cssText = "",
                    l = 1;
            else
                for (n = n.split(","),
                    h = n.length; --h > -1;)
                    a = n[h],
                        Ne[a] && (l = 1,
                            a = a === "transformOrigin" ? Wt : lt),
                        Ai(r, a);
            l && (Ai(r, lt),
                o && (o.svg && r.removeAttribute("transform"),
                    Gr(r, 1),
                    o.uncache = 1,
                    od(s)))
        }
    }, Qs = {
        clearProps: function (t, e, r, s, n) {
            if (n.data !== "isFromStart") {
                var o = t._pt = new It(t._pt, e, r, 0, 0, c_);
                return o.u = s,
                    o.pr = -10,
                    o.tween = n,
                    t._props.push(r),
                    1
            }
        }
    }, $r = [1, 0, 0, 1, 0, 0], ud = {}, dd = function (t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    }, id = function (t) {
        var e = Ce(t, lt);
        return dd(e) ? $r : e.substr(7).match(oa).map(dt)
    }, Oa = function (t, e) {
        var r = t._gsap || ti(t), s = t.style, n = id(t), o, a, l, h;
        return r.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
            n = [l.a, l.b, l.c, l.d, l.e, l.f],
            n.join(",") === "1,0,0,1,0,0" ? $r : n) : (n === $r && !t.offsetParent && t !== or && !r.svg && (l = s.display,
                s.display = "block",
                o = t.parentNode,
                (!o || !t.offsetParent) && (h = 1,
                    a = t.nextElementSibling,
                    or.appendChild(t)),
                n = id(t),
                l ? s.display = l : Ai(t, "display"),
                h && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : or.removeChild(t))),
                e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    }, Sa = function (t, e, r, s, n, o) {
        var a = t._gsap, l = n || Oa(t, !0), h = a.xOrigin || 0, c = a.yOrigin || 0, u = a.xOffset || 0, d = a.yOffset || 0, f = l[0], m = l[1], p = l[2], v = l[3], g = l[4], w = l[5], b = e.split(" "), x = parseFloat(b[0]) || 0, _ = parseFloat(b[1]) || 0, y, P, E, C;
        r ? l !== $r && (P = f * v - m * p) && (E = x * (v / P) + _ * (-p / P) + (p * w - v * g) / P,
            C = x * (-m / P) + _ * (f / P) - (f * w - m * g) / P,
            x = E,
            _ = C) : (y = hd(t),
                x = y.x + (~b[0].indexOf("%") ? x / 100 * y.width : x),
                _ = y.y + (~(b[1] || b[0]).indexOf("%") ? _ / 100 * y.height : _)),
            s || s !== !1 && a.smooth ? (g = x - h,
                w = _ - c,
                a.xOffset = u + (g * f + w * p) - g,
                a.yOffset = d + (g * m + w * v) - w) : a.xOffset = a.yOffset = 0,
            a.xOrigin = x,
            a.yOrigin = _,
            a.smooth = !!s,
            a.origin = e,
            a.originIsAbsolute = !!r,
            t.style[Wt] = "0px 0px",
            o && (si(o, a, "xOrigin", h, x),
                si(o, a, "yOrigin", c, _),
                si(o, a, "xOffset", u, a.xOffset),
                si(o, a, "yOffset", d, a.yOffset)),
            t.setAttribute("data-svg-origin", x + " " + _)
    }, Gr = function (t, e) {
        var r = t._gsap || new fa(t);
        if ("x" in r && !e && !r.uncache)
            return r;
        var s = t.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), h = Ce(t, Wt) || "0", c, u, d, f, m, p, v, g, w, b, x, _, y, P, E, C, M, A, T, O, k, F, D, N, V, J, nt, vt, gt, Qe, pe, _e;
        return c = u = d = p = v = g = w = b = x = 0,
            f = m = 1,
            r.svg = !!(t.getCTM && cd(t)),
            l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (s[lt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[lt] !== "none" ? l[lt] : "")),
                s.scale = s.rotate = s.translate = "none"),
            P = Oa(t, r.svg),
            r.svg && (r.uncache ? (V = t.getBBox(),
                h = r.xOrigin - V.x + "px " + (r.yOrigin - V.y) + "px",
                N = "") : N = !e && t.getAttribute("data-svg-origin"),
                Sa(t, N || h, !!N || r.originIsAbsolute, r.smooth !== !1, P)),
            _ = r.xOrigin || 0,
            y = r.yOrigin || 0,
            P !== $r && (A = P[0],
                T = P[1],
                O = P[2],
                k = P[3],
                c = F = P[4],
                u = D = P[5],
                P.length === 6 ? (f = Math.sqrt(A * A + T * T),
                    m = Math.sqrt(k * k + O * O),
                    p = A || T ? nr(T, A) * Si : 0,
                    w = O || k ? nr(O, k) * Si + p : 0,
                    w && (m *= Math.abs(Math.cos(w * ar))),
                    r.svg && (c -= _ - (_ * A + y * O),
                        u -= y - (_ * T + y * k))) : (_e = P[6],
                            Qe = P[7],
                            nt = P[8],
                            vt = P[9],
                            gt = P[10],
                            pe = P[11],
                            c = P[12],
                            u = P[13],
                            d = P[14],
                            E = nr(_e, gt),
                            v = E * Si,
                            E && (C = Math.cos(-E),
                                M = Math.sin(-E),
                                N = F * C + nt * M,
                                V = D * C + vt * M,
                                J = _e * C + gt * M,
                                nt = F * -M + nt * C,
                                vt = D * -M + vt * C,
                                gt = _e * -M + gt * C,
                                pe = Qe * -M + pe * C,
                                F = N,
                                D = V,
                                _e = J),
                            E = nr(-O, gt),
                            g = E * Si,
                            E && (C = Math.cos(-E),
                                M = Math.sin(-E),
                                N = A * C - nt * M,
                                V = T * C - vt * M,
                                J = O * C - gt * M,
                                pe = k * M + pe * C,
                                A = N,
                                T = V,
                                O = J),
                            E = nr(T, A),
                            p = E * Si,
                            E && (C = Math.cos(E),
                                M = Math.sin(E),
                                N = A * C + T * M,
                                V = F * C + D * M,
                                T = T * C - A * M,
                                D = D * C - F * M,
                                A = N,
                                F = V),
                            v && Math.abs(v) + Math.abs(p) > 359.9 && (v = p = 0,
                                g = 180 - g),
                            f = dt(Math.sqrt(A * A + T * T + O * O)),
                            m = dt(Math.sqrt(D * D + _e * _e)),
                            E = nr(F, D),
                            w = Math.abs(E) > 2e-4 ? E * Si : 0,
                            x = pe ? 1 / (pe < 0 ? -pe : pe) : 0),
                r.svg && (N = t.getAttribute("transform"),
                    r.forceCSS = t.setAttribute("transform", "") || !dd(Ce(t, lt)),
                    N && t.setAttribute("transform", N))),
            Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1,
                w += p <= 0 ? 180 : -180,
                p += p <= 0 ? 180 : -180) : (m *= -1,
                    w += w <= 0 ? 180 : -180)),
            e = e || r.uncache,
            r.x = c - ((r.xPercent = c && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + o,
            r.y = u - ((r.yPercent = u && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + o,
            r.z = d + o,
            r.scaleX = dt(f),
            r.scaleY = dt(m),
            r.rotation = dt(p) + a,
            r.rotationX = dt(v) + a,
            r.rotationY = dt(g) + a,
            r.skewX = w + a,
            r.skewY = b + a,
            r.transformPerspective = x + o,
            (r.zOrigin = parseFloat(h.split(" ")[2]) || !e && r.zOrigin || 0) && (s[Wt] = Zs(h)),
            r.xOffset = r.yOffset = 0,
            r.force3D = Ht.force3D,
            r.renderTransform = r.svg ? d_ : ld ? pd : u_,
            r.uncache = 0,
            r
    }, Zs = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, Ea = function (t, e, r) {
        var s = Mt(e);
        return dt(parseFloat(e) + parseFloat(ni(t, "x", r + "px", s))) + s
    }, u_ = function (t, e) {
        e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            pd(t, e)
    }, Pi = "0deg", Wr = "0px", Mi = ") ", pd = function (t, e) {
        var r = e || this
            , s = r.xPercent
            , n = r.yPercent
            , o = r.x
            , a = r.y
            , l = r.z
            , h = r.rotation
            , c = r.rotationY
            , u = r.rotationX
            , d = r.skewX
            , f = r.skewY
            , m = r.scaleX
            , p = r.scaleY
            , v = r.transformPerspective
            , g = r.force3D
            , w = r.target
            , b = r.zOrigin
            , x = ""
            , _ = g === "auto" && t && t !== 1 || g === !0;
        if (b && (u !== Pi || c !== Pi)) {
            var y = parseFloat(c) * ar, P = Math.sin(y), E = Math.cos(y), C;
            y = parseFloat(u) * ar,
                C = Math.cos(y),
                o = Ea(w, o, P * C * -b),
                a = Ea(w, a, -Math.sin(y) * -b),
                l = Ea(w, l, E * C * -b + b)
        }
        v !== Wr && (x += "perspective(" + v + Mi),
            (s || n) && (x += "translate(" + s + "%, " + n + "%) "),
            (_ || o !== Wr || a !== Wr || l !== Wr) && (x += l !== Wr || _ ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Mi),
            h !== Pi && (x += "rotate(" + h + Mi),
            c !== Pi && (x += "rotateY(" + c + Mi),
            u !== Pi && (x += "rotateX(" + u + Mi),
            (d !== Pi || f !== Pi) && (x += "skew(" + d + ", " + f + Mi),
            (m !== 1 || p !== 1) && (x += "scale(" + m + ", " + p + Mi),
            w.style[lt] = x || "translate(0, 0)"
    }, d_ = function (t, e) {
        var r = e || this, s = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, h = r.skewX, c = r.skewY, u = r.scaleX, d = r.scaleY, f = r.target, m = r.xOrigin, p = r.yOrigin, v = r.xOffset, g = r.yOffset, w = r.forceCSS, b = parseFloat(o), x = parseFloat(a), _, y, P, E, C;
        l = parseFloat(l),
            h = parseFloat(h),
            c = parseFloat(c),
            c && (c = parseFloat(c),
                h += c,
                l += c),
            l || h ? (l *= ar,
                h *= ar,
                _ = Math.cos(l) * u,
                y = Math.sin(l) * u,
                P = Math.sin(l - h) * -d,
                E = Math.cos(l - h) * d,
                h && (c *= ar,
                    C = Math.tan(h - c),
                    C = Math.sqrt(1 + C * C),
                    P *= C,
                    E *= C,
                    c && (C = Math.tan(c),
                        C = Math.sqrt(1 + C * C),
                        _ *= C,
                        y *= C)),
                _ = dt(_),
                y = dt(y),
                P = dt(P),
                E = dt(E)) : (_ = u,
                    E = d,
                    y = P = 0),
            (b && !~(o + "").indexOf("px") || x && !~(a + "").indexOf("px")) && (b = ni(f, "x", o, "px"),
                x = ni(f, "y", a, "px")),
            (m || p || v || g) && (b = dt(b + m - (m * _ + p * P) + v),
                x = dt(x + p - (m * y + p * E) + g)),
            (s || n) && (C = f.getBBox(),
                b = dt(b + s / 100 * C.width),
                x = dt(x + n / 100 * C.height)),
            C = "matrix(" + _ + "," + y + "," + P + "," + E + "," + b + "," + x + ")",
            f.setAttribute("transform", C),
            w && (f.style[lt] = C)
    }, p_ = function (t, e, r, s, n) {
        var o = 360, a = _t(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Si : 1), h = l - s, c = s + h + "deg", u, d;
        return a && (u = n.split("_")[1],
            u === "short" && (h %= o,
                h !== h % (o / 2) && (h += h < 0 ? o : -o)),
            u === "cw" && h < 0 ? h = (h + o * Qu) % o - ~~(h / o) * o : u === "ccw" && h > 0 && (h = (h - o * Qu) % o - ~~(h / o) * o)),
            t._pt = d = new It(t._pt, e, r, s, h, K0),
            d.e = c,
            d.u = "deg",
            t._props.push(r),
            d
    }, rd = function (t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, f_ = function (t, e, r) {
        var s = rd({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, h, c, u, d, f, m;
        s.svg ? (h = r.getAttribute("transform"),
            r.setAttribute("transform", ""),
            o[lt] = e,
            a = Gr(r, 1),
            Ai(r, lt),
            r.setAttribute("transform", h)) : (h = getComputedStyle(r)[lt],
                o[lt] = e,
                a = Gr(r, 1),
                o[lt] = h);
        for (l in Ne)
            h = s[l],
                c = a[l],
                h !== c && n.indexOf(l) < 0 && (f = Mt(h),
                    m = Mt(c),
                    u = f !== m ? ni(r, l, h, m) : parseFloat(h),
                    d = parseFloat(c),
                    t._pt = new It(t._pt, a, l, u, d - u, Ca),
                    t._pt.u = m || 0,
                    t._props.push(l));
        rd(a, s)
    };
    Ft("padding,margin,Width,Radius", function (i, t) {
        var e = "Top"
            , r = "Right"
            , s = "Bottom"
            , n = "Left"
            , o = (t < 3 ? [e, r, s, n] : [e + n, e + r, s + r, s + n]).map(function (a) {
                return t < 2 ? i + a : "border" + a + i
            });
        Qs[t > 1 ? "border" + i : i] = function (a, l, h, c, u) {
            var d, f;
            if (arguments.length < 4)
                return d = o.map(function (m) {
                    return De(a, m, h)
                }),
                    f = d.join(" "),
                    f.split(d[0]).length === 5 ? d[0] : f;
            d = (c + "").split(" "),
                f = {},
                o.forEach(function (m, p) {
                    return f[m] = d[p] = d[p] || d[(p - 1) / 2 | 0]
                }),
                a.init(l, f, u)
        }
    });
    var La = {
        name: "css",
        register: Ma,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, r, s, n) {
            var o = this._props, a = t.style, l = r.vars.startAt, h, c, u, d, f, m, p, v, g, w, b, x, _, y, P, E;
            Ta || Ma(),
                this.styles = this.styles || ad(t),
                E = this.styles.props,
                this.tween = r;
            for (p in e)
                if (p !== "autoRound" && (c = e[p],
                    !(Ut[p] && va(p, e, r, s, t, n)))) {
                    if (f = typeof c,
                        m = Qs[p],
                        f === "function" && (c = c.call(r, s, t, n),
                            f = typeof c),
                        f === "string" && ~c.indexOf("random(") && (c = sr(c)),
                        m)
                        m(this, t, p, c, r) && (P = 1);
                    else if (p.substr(0, 2) === "--")
                        h = (getComputedStyle(t).getPropertyValue(p) + "").trim(),
                            c += "",
                            ze.lastIndex = 0,
                            ze.test(h) || (v = Mt(h),
                                g = Mt(c)),
                            g ? v !== g && (h = ni(t, p, h, g) + g) : v && (c += v),
                            this.add(a, "setProperty", h, c, s, n, 0, 0, p),
                            o.push(p),
                            E.push(p, 0, a[p]);
                    else if (f !== "undefined") {
                        if (l && p in l ? (h = typeof l[p] == "function" ? l[p].call(r, s, t, n) : l[p],
                            _t(h) && ~h.indexOf("random(") && (h = sr(h)),
                            Mt(h + "") || h === "auto" || (h += Ht.units[p] || Mt(De(t, p)) || ""),
                            (h + "").charAt(1) === "=" && (h = De(t, p))) : h = De(t, p),
                            d = parseFloat(h),
                            w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2),
                            w && (c = c.substr(2)),
                            u = parseFloat(c),
                            p in Ee && (p === "autoAlpha" && (d === 1 && De(t, "visibility") === "hidden" && u && (d = 0),
                                E.push("visibility", 0, a.visibility),
                                si(this, a, "visibility", d ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                                p !== "scale" && p !== "transform" && (p = Ee[p],
                                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                            b = p in Ne,
                            b) {
                            if (this.styles.save(p),
                                x || (_ = t._gsap,
                                    _.renderTransform && !e.parseTransform || Gr(t, e.parseTransform),
                                    y = e.smoothOrigin !== !1 && _.smooth,
                                    x = this._pt = new It(this._pt, a, lt, 0, 1, _.renderTransform, _, 0, -1),
                                    x.dep = 1),
                                p === "scale")
                                this._pt = new It(this._pt, _, "scaleY", _.scaleY, (w ? Ei(_.scaleY, w + u) : u) - _.scaleY || 0, Ca),
                                    this._pt.u = 0,
                                    o.push("scaleY", p),
                                    p += "X";
                            else if (p === "transformOrigin") {
                                E.push(Wt, 0, a[Wt]),
                                    c = h_(c),
                                    _.svg ? Sa(t, c, 0, y, 0, this) : (g = parseFloat(c.split(" ")[2]) || 0,
                                        g !== _.zOrigin && si(this, _, "zOrigin", _.zOrigin, g),
                                        si(this, a, p, Zs(h), Zs(c)));
                                continue
                            } else if (p === "svgOrigin") {
                                Sa(t, c, 1, y, 0, this);
                                continue
                            } else if (p in ud) {
                                p_(this, _, p, d, w ? Ei(d, w + c) : c);
                                continue
                            } else if (p === "smoothOrigin") {
                                si(this, _, "smooth", _.smooth, c);
                                continue
                            } else if (p === "force3D") {
                                _[p] = c;
                                continue
                            } else if (p === "transform") {
                                f_(this, c, t);
                                continue
                            }
                        } else
                            p in a || (p = lr(p) || p);
                        if (b || (u || u === 0) && (d || d === 0) && !X0.test(c) && p in a)
                            v = (h + "").substr((d + "").length),
                                u || (u = 0),
                                g = Mt(c) || (p in Ht.units ? Ht.units[p] : v),
                                v !== g && (d = ni(t, p, h, g)),
                                this._pt = new It(this._pt, b ? _ : a, p, d, (w ? Ei(d, w + u) : u) - d, !b && (g === "px" || p === "zIndex") && e.autoRound !== !1 ? Z0 : Ca),
                                this._pt.u = g || 0,
                                v !== g && g !== "%" && (this._pt.b = h,
                                    this._pt.r = Q0);
                        else if (p in a)
                            l_.call(this, t, p, h, w ? w + c : c);
                        else if (p in t)
                            this.add(t, p, h || t[p], w ? w + c : c, s, n);
                        else if (p !== "parseTransform") {
                            $s(p, c);
                            continue
                        }
                        b || (p in a ? E.push(p, 0, a[p]) : E.push(p, 1, h || t[p])),
                            o.push(p)
                    }
                }
            P && ya(this)
        },
        render: function (t, e) {
            if (e.tween._time || !Aa())
                for (var r = e._pt; r;)
                    r.r(t, r.d),
                        r = r._next;
            else
                e.styles.revert()
        },
        get: De,
        aliases: Ee,
        getSetter: function (t, e, r) {
            var s = Ee[e];
            return s && s.indexOf(",") < 0 && (e = s),
                e in Ne && e !== Wt && (t._gsap.x || De(t, "x")) ? r && Ku === r ? e === "scale" ? i_ : e_ : (Ku = r || {}) && (e === "scale" ? r_ : s_) : t.style && !Ws(t.style[e]) ? J0 : ~e.indexOf("-") ? t_ : Ks(t, e)
        },
        core: {
            _removeProperty: Ai,
            _getMatrix: Oa
        }
    };
    At.utils.checkPrefix = lr;
    At.core.getStyleSaver = ad;
    (function (i, t, e, r) {
        var s = Ft(i + "," + t + "," + e, function (n) {
            Ne[n] = 1
        });
        Ft(t, function (n) {
            Ht.units[n] = "deg",
                ud[n] = 1
        }),
            Ee[s[13]] = i + "," + t,
            Ft(r, function (n) {
                var o = n.split(":");
                Ee[o[1]] = s[o[0]]
            })
    }
    )("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
    Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) {
        Ht.units[i] = "px"
    });
    At.registerPlugin(La);
    var I = At.registerPlugin(La) || At
        , Cx = I.core.Tween;
    (function () {
        function i() {
            for (var r = arguments.length, s = 0; s < r; s++) {
                var n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                n.nodeType === 1 || n.nodeType === 11 ? this.appendChild(n) : this.appendChild(document.createTextNode(String(n)))
            }
        }
        function t() {
            for (; this.lastChild;)
                this.removeChild(this.lastChild);
            arguments.length && this.append.apply(this, arguments)
        }
        function e() {
            for (var r = this.parentNode, s = arguments.length, n = new Array(s), o = 0; o < s; o++)
                n[o] = arguments[o];
            var a = n.length;
            if (r)
                for (a || r.removeChild(this); a--;) {
                    var l = n[a];
                    typeof l != "object" ? l = this.ownerDocument.createTextNode(l) : l.parentNode && l.parentNode.removeChild(l),
                        a ? r.insertBefore(this.previousSibling, l) : r.replaceChild(l, this)
                }
        }
        typeof Element != "undefined" && (Element.prototype.append || (Element.prototype.append = i,
            DocumentFragment.prototype.append = i),
            Element.prototype.replaceChildren || (Element.prototype.replaceChildren = t,
                DocumentFragment.prototype.replaceChildren = t),
            Element.prototype.replaceWith || (Element.prototype.replaceWith = e,
                DocumentFragment.prototype.replaceWith = e))
    }
    )();
    function m_(i, t) {
        if (!(i instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function fd(i, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(i, r.key, r)
        }
    }
    function md(i, t, e) {
        return t && fd(i.prototype, t),
            e && fd(i, e),
            i
    }
    function v_(i, t, e) {
        return t in i ? Object.defineProperty(i, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[t] = e,
            i
    }
    function vd(i, t) {
        var e = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(i);
            t && (r = r.filter(function (s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable
            })),
                e.push.apply(e, r)
        }
        return e
    }
    function gd(i) {
        for (var t = 1; t < arguments.length; t++) {
            var e = arguments[t] != null ? arguments[t] : {};
            t % 2 ? vd(Object(e), !0).forEach(function (r) {
                v_(i, r, e[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(e)) : vd(Object(e)).forEach(function (r) {
                Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(e, r))
            })
        }
        return i
    }
    function bd(i, t) {
        return __(i) || w_(i, t) || wd(i, t) || x_()
    }
    function zt(i) {
        return g_(i) || b_(i) || wd(i) || y_()
    }
    function g_(i) {
        if (Array.isArray(i))
            return Ra(i)
    }
    function __(i) {
        if (Array.isArray(i))
            return i
    }
    function b_(i) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(i))
            return Array.from(i)
    }
    function w_(i, t) {
        if (!(typeof Symbol == "undefined" || !(Symbol.iterator in Object(i)))) {
            var e = []
                , r = !0
                , s = !1
                , n = void 0;
            try {
                for (var o = i[Symbol.iterator](), a; !(r = (a = o.next()).done) && (e.push(a.value),
                    !(t && e.length === t)); r = !0)
                    ;
            } catch (l) {
                s = !0,
                    n = l
            } finally {
                try {
                    !r && o.return != null && o.return()
                } finally {
                    if (s)
                        throw n
                }
            }
            return e
        }
    }
    function wd(i, t) {
        if (i) {
            if (typeof i == "string")
                return Ra(i, t);
            var e = Object.prototype.toString.call(i).slice(8, -1);
            if (e === "Object" && i.constructor && (e = i.constructor.name),
                e === "Map" || e === "Set")
                return Array.from(i);
            if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return Ra(i, t)
        }
    }
    function Ra(i, t) {
        (t == null || t > i.length) && (t = i.length);
        for (var e = 0, r = new Array(t); e < t; e++)
            r[e] = i[e];
        return r
    }
    function y_() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function x_() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function ki(i, t) {
        return Object.getOwnPropertyNames(Object(i)).reduce(function (e, r) {
            var s = Object.getOwnPropertyDescriptor(Object(i), r)
                , n = Object.getOwnPropertyDescriptor(Object(t), r);
            return Object.defineProperty(e, r, n || s)
        }, {})
    }
    function Yr(i) {
        return typeof i == "string"
    }
    function Va(i) {
        return Array.isArray(i)
    }
    function Js() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ki(i), e;
        return t.types !== void 0 ? e = t.types : t.split !== void 0 && (e = t.split),
            e !== void 0 && (t.types = (Yr(e) || Va(e) ? String(e) : "").split(",").map(function (r) {
                return String(r).trim()
            }).filter(function (r) {
                return /((line)|(word)|(char))/i.test(r)
            })),
            (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(i.position)),
            t
    }
    function Da(i) {
        var t = Yr(i) || Va(i) ? String(i) : "";
        return {
            none: !t,
            lines: /line/i.test(t),
            words: /word/i.test(t),
            chars: /char/i.test(t)
        }
    }
    function en(i) {
        return i !== null && typeof i == "object"
    }
    function E_(i) {
        return en(i) && /^(1|3|11)$/.test(i.nodeType)
    }
    function C_(i) {
        return typeof i == "number" && i > -1 && i % 1 === 0
    }
    function P_(i) {
        return en(i) && C_(i.length)
    }
    function Li(i) {
        return Va(i) ? i : i == null ? [] : P_(i) ? Array.prototype.slice.call(i) : [i]
    }
    function _d(i) {
        var t = i;
        return Yr(i) && (/^(#[a-z]\w+)$/.test(i.trim()) ? t = document.getElementById(i.trim().slice(1)) : t = document.querySelectorAll(i)),
            Li(t).reduce(function (e, r) {
                return [].concat(zt(e), zt(Li(r).filter(E_)))
            }, [])
    }
    var M_ = Object.entries
        , tn = "_splittype"
        , fe = {}
        , S_ = 0;
    function Pe(i, t, e) {
        if (!en(i))
            return console.warn("[data.set] owner is not an object"),
                null;
        var r = i[tn] || (i[tn] = ++S_)
            , s = fe[r] || (fe[r] = {});
        return e === void 0 ? t && Object.getPrototypeOf(t) === Object.prototype && (fe[r] = gd(gd({}, s), t)) : t !== void 0 && (s[t] = e),
            e
    }
    function Oi(i, t) {
        var e = en(i) ? i[tn] : null
            , r = e && fe[e] || {};
        return t === void 0 ? r : r[t]
    }
    function yd(i) {
        var t = i && i[tn];
        t && (delete i[t],
            delete fe[t])
    }
    function T_() {
        Object.keys(fe).forEach(function (i) {
            delete fe[i]
        })
    }
    function A_() {
        M_(fe).forEach(function (i) {
            var t = bd(i, 2)
                , e = t[0]
                , r = t[1]
                , s = r.isRoot
                , n = r.isSplit;
            (!s || !n) && (fe[e] = null,
                delete fe[e])
        })
    }
    function k_(i) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " "
            , e = i ? String(i) : "";
        return e.trim().replace(/\s+/g, " ").split(t)
    }
    var Na = "\\ud800-\\udfff"
        , xd = "\\u0300-\\u036f\\ufe20-\\ufe23"
        , Ed = "\\u20d0-\\u20f0"
        , Cd = "\\ufe0e\\ufe0f"
        , O_ = "[".concat(Na, "]")
        , Fa = "[".concat(xd).concat(Ed, "]")
        , Ia = "\\ud83c[\\udffb-\\udfff]"
        , L_ = "(?:".concat(Fa, "|").concat(Ia, ")")
        , Pd = "[^".concat(Na, "]")
        , Md = "(?:\\ud83c[\\udde6-\\uddff]){2}"
        , Sd = "[\\ud800-\\udbff][\\udc00-\\udfff]"
        , Td = "\\u200d"
        , Ad = "".concat(L_, "?")
        , kd = "[".concat(Cd, "]?")
        , R_ = "(?:" + Td + "(?:" + [Pd, Md, Sd].join("|") + ")" + kd + Ad + ")*"
        , F_ = kd + Ad + R_
        , I_ = "(?:".concat(["".concat(Pd).concat(Fa, "?"), Fa, Md, Sd, O_].join("|"), `
)`)
        , z_ = RegExp("".concat(Ia, "(?=").concat(Ia, ")|").concat(I_).concat(F_), "g")
        , V_ = [Td, Na, xd, Ed, Cd]
        , D_ = RegExp("[".concat(V_.join(""), "]"));
    function N_(i) {
        return i.split("")
    }
    function Od(i) {
        return D_.test(i)
    }
    function B_(i) {
        return i.match(z_) || []
    }
    function U_(i) {
        return Od(i) ? B_(i) : N_(i)
    }
    function j_(i) {
        return i == null ? "" : String(i)
    }
    function q_(i) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        return i = j_(i),
            i && Yr(i) && !t && Od(i) ? U_(i) : i.split(t)
    }
    function za(i, t) {
        var e = document.createElement(i);
        return t && Object.keys(t).forEach(function (r) {
            var s = t[r]
                , n = Yr(s) ? s.trim() : s;
            n === null || n === "" || (r === "children" ? e.append.apply(e, zt(Li(n))) : e.setAttribute(r, n))
        }),
            e
    }
    var Ba = {
        splitClass: "",
        lineClass: "line",
        wordClass: "word",
        charClass: "char",
        types: ["lines", "words", "chars"],
        absolute: !1,
        tagName: "div"
    };
    function H_(i, t) {
        t = ki(Ba, t);
        var e = Da(t.types)
            , r = t.tagName
            , s = i.nodeValue
            , n = document.createDocumentFragment()
            , o = []
            , a = [];
        return /^\s/.test(s) && n.append(" "),
            o = k_(s).reduce(function (l, h, c, u) {
                var d, f;
                return e.chars && (f = q_(h).map(function (m) {
                    var p = za(r, {
                        class: "".concat(t.splitClass, " ").concat(t.charClass),
                        style: "display: inline-block;",
                        children: m
                    });
                    return Pe(p, "isChar", !0),
                        a = [].concat(zt(a), [p]),
                        p
                })),
                    e.words || e.lines ? (d = za(r, {
                        class: "".concat(t.wordClass, " ").concat(t.splitClass),
                        style: "display: inline-block; ".concat(e.words && t.absolute ? "position: relative;" : ""),
                        children: e.chars ? f : h
                    }),
                        Pe(d, {
                            isWord: !0,
                            isWordStart: !0,
                            isWordEnd: !0
                        }),
                        n.appendChild(d)) : f.forEach(function (m) {
                            n.appendChild(m)
                        }),
                    c < u.length - 1 && n.append(" "),
                    e.words ? l.concat(d) : l
            }, []),
            /\s$/.test(s) && n.append(" "),
            i.replaceWith(n),
        {
            words: o,
            chars: a
        }
    }
    function Ld(i, t) {
        var e = i.nodeType
            , r = {
                words: [],
                chars: []
            };
        if (!/(1|3|11)/.test(e))
            return r;
        if (e === 3 && /\S/.test(i.nodeValue))
            return H_(i, t);
        var s = Li(i.childNodes);
        if (s.length && (Pe(i, "isSplit", !0),
            !Oi(i).isRoot)) {
            i.style.display = "inline-block",
                i.style.position = "relative";
            var n = i.nextSibling
                , o = i.previousSibling
                , a = i.textContent || ""
                , l = n ? n.textContent : " "
                , h = o ? o.textContent : " ";
            Pe(i, {
                isWordEnd: /\s$/.test(a) || /^\s/.test(l),
                isWordStart: /^\s/.test(a) || /\s$/.test(h)
            })
        }
        return s.reduce(function (c, u) {
            var d = Ld(u, t)
                , f = d.words
                , m = d.chars;
            return {
                words: [].concat(zt(c.words), zt(f)),
                chars: [].concat(zt(c.chars), zt(m))
            }
        }, r)
    }
    function W_(i, t, e, r) {
        if (!e.absolute)
            return {
                top: t ? i.offsetTop : null
            };
        var s = i.offsetParent
            , n = bd(r, 2)
            , o = n[0]
            , a = n[1]
            , l = 0
            , h = 0;
        if (s && s !== document.body) {
            var c = s.getBoundingClientRect();
            l = c.x + o,
                h = c.y + a
        }
        var u = i.getBoundingClientRect()
            , d = u.width
            , f = u.height
            , m = u.x
            , p = u.y
            , v = p + a - h
            , g = m + o - l;
        return {
            width: d,
            height: f,
            top: v,
            left: g
        }
    }
    function Rd(i) {
        Oi(i).isWord ? (yd(i),
            i.replaceWith.apply(i, zt(i.childNodes))) : Li(i.children).forEach(function (t) {
                return Rd(t)
            })
    }
    var $_ = function () {
        return document.createDocumentFragment()
    };
    function G_(i, t, e) {
        var r = Da(t.types), s = t.tagName, n = i.getElementsByTagName("*"), o = [], a = [], l = null, h, c, u, d = [], f = i.parentElement, m = i.nextElementSibling, p = $_(), v = window.getComputedStyle(i), g = v.textAlign, w = parseFloat(v.fontSize), b = w * .2;
        return t.absolute && (u = {
            left: i.offsetLeft,
            top: i.offsetTop,
            width: i.offsetWidth
        },
            c = i.offsetWidth,
            h = i.offsetHeight,
            Pe(i, {
                cssWidth: i.style.width,
                cssHeight: i.style.height
            })),
            Li(n).forEach(function (x) {
                var _ = x.parentElement === i
                    , y = W_(x, _, t, e)
                    , P = y.width
                    , E = y.height
                    , C = y.top
                    , M = y.left;
                /^br$/i.test(x.nodeName) || (r.lines && _ && ((l === null || C - l >= b) && (l = C,
                    o.push(a = [])),
                    a.push(x)),
                    t.absolute && Pe(x, {
                        top: C,
                        left: M,
                        width: P,
                        height: E
                    }))
            }),
            f && f.removeChild(i),
            r.lines && (d = o.map(function (x) {
                var _ = za(s, {
                    class: "".concat(t.splitClass, " ").concat(t.lineClass),
                    style: "display: block; text-align: ".concat(g, "; width: 100%;")
                });
                Pe(_, "isLine", !0);
                var y = {
                    height: 0,
                    top: 1e4
                };
                return p.appendChild(_),
                    x.forEach(function (P, E, C) {
                        var M = Oi(P)
                            , A = M.isWordEnd
                            , T = M.top
                            , O = M.height
                            , k = C[E + 1];
                        y.height = Math.max(y.height, O),
                            y.top = Math.min(y.top, T),
                            _.appendChild(P),
                            A && Oi(k).isWordStart && _.append(" ")
                    }),
                    t.absolute && Pe(_, {
                        height: y.height,
                        top: y.top
                    }),
                    _
            }),
                r.words || Rd(p),
                i.replaceChildren(p)),
            t.absolute && (i.style.width = "".concat(i.style.width || c, "px"),
                i.style.height = "".concat(h, "px"),
                Li(n).forEach(function (x) {
                    var _ = Oi(x)
                        , y = _.isLine
                        , P = _.top
                        , E = _.left
                        , C = _.width
                        , M = _.height
                        , A = Oi(x.parentElement)
                        , T = !y && A.isLine;
                    x.style.top = "".concat(T ? P - A.top : P, "px"),
                        x.style.left = y ? "".concat(u.left, "px") : "".concat(E - (T ? u.left : 0), "px"),
                        x.style.height = "".concat(M, "px"),
                        x.style.width = y ? "".concat(u.width, "px") : "".concat(C, "px"),
                        x.style.position = "absolute"
                })),
            f && (m ? f.insertBefore(i, m) : f.appendChild(i)),
            d
    }
    var hr = ki(Ba, {})
        , rn = function () {
            md(i, null, [{
                key: "clearData",
                value: function () {
                    T_()
                }
            }, {
                key: "setDefaults",
                value: function (e) {
                    return hr = ki(hr, Js(e)),
                        Ba
                }
            }, {
                key: "revert",
                value: function (e) {
                    _d(e).forEach(function (r) {
                        var s = Oi(r)
                            , n = s.isSplit
                            , o = s.html
                            , a = s.cssWidth
                            , l = s.cssHeight;
                        n && (r.innerHTML = o,
                            r.style.width = a || "",
                            r.style.height = l || "",
                            yd(r))
                    })
                }
            }, {
                key: "create",
                value: function (e, r) {
                    return new i(e, r)
                }
            }, {
                key: "data",
                get: function () {
                    return fe
                }
            }, {
                key: "defaults",
                get: function () {
                    return hr
                },
                set: function (e) {
                    hr = ki(hr, Js(e))
                }
            }]);
            function i(t, e) {
                m_(this, i),
                    this.isSplit = !1,
                    this.settings = ki(hr, Js(e)),
                    this.elements = _d(t),
                    this.split()
            }
            return md(i, [{
                key: "split",
                value: function (e) {
                    var r = this;
                    this.revert(),
                        this.elements.forEach(function (o) {
                            Pe(o, "html", o.innerHTML)
                        }),
                        this.lines = [],
                        this.words = [],
                        this.chars = [];
                    var s = [window.pageXOffset, window.pageYOffset];
                    e !== void 0 && (this.settings = ki(this.settings, Js(e)));
                    var n = Da(this.settings.types);
                    n.none || (this.elements.forEach(function (o) {
                        Pe(o, "isRoot", !0);
                        var a = Ld(o, r.settings)
                            , l = a.words
                            , h = a.chars;
                        r.words = [].concat(zt(r.words), zt(l)),
                            r.chars = [].concat(zt(r.chars), zt(h))
                    }),
                        this.elements.forEach(function (o) {
                            if (n.lines || r.settings.absolute) {
                                var a = G_(o, r.settings, s);
                                r.lines = [].concat(zt(r.lines), zt(a))
                            }
                        }),
                        this.isSplit = !0,
                        window.scrollTo(s[0], s[1]),
                        A_())
                }
            }, {
                key: "revert",
                value: function () {
                    this.isSplit && (this.lines = null,
                        this.words = null,
                        this.chars = null,
                        this.isSplit = !1),
                        i.revert(this.elements)
                }
            }]),
                i
        }();
    var Fd = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ";", ":", "<", ">", ","]
        , Me = class {
            constructor(t) {
                this.textElement = t,
                    this.originalChars = [],
                    this.splitText()
            }
            splitText() {
                this.splitter = new rn(this.textElement, {
                    types: "words, chars"
                }),
                    this.originalChars = this.splitter.chars.map(t => t.innerHTML)
            }
            animate() {
                this.reset(),
                    this.splitter.chars.forEach((e, r) => {
                        let s = e.innerHTML;
                        I.fromTo(e, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .03,
                            onComplete: () => I.set(e, {
                                innerHTML: s,
                                delay: .1
                            }),
                            repeat: 2,
                            repeatRefresh: !0,
                            repeatDelay: .05,
                            delay: (r + 1) * .03,
                            innerHTML: () => Fd[Math.floor(Math.random() * Fd.length)]
                        })
                    }
                    ),
                    I.fromTo(this.textElement, {
                        "--anim": 0
                    }, {
                        duration: 1,
                        ease: "expo",
                        "--anim": 1
                    })
            }
            animateBack() {
                I.killTweensOf(this.textElement),
                    I.to(this.textElement, {
                        duration: .6,
                        ease: "power4",
                        "--anim": 0
                    })
            }
            reset() {
                this.splitter.chars.forEach((e, r) => {
                    I.killTweensOf(e),
                        e.innerHTML = this.originalChars[r]
                }
                ),
                    I.killTweensOf(this.textElement),
                    I.set(this.textElement, {
                        "--anim": 0
                    })
            }
        }
        ;
    function Id() {
        document.querySelectorAll(".c-button").forEach(i => {
            if (!i.querySelector(".c-button_label"))
                return;
            let t = new Me(i.querySelector(".c-button_label"));
            i.addEventListener("mouseenter", () => {
                t.animate()
            }
            ),
                i.addEventListener("mouseleave", () => {
                    t.animateBack()
                }
                )
        }
        )
    }
    function sn() {
        Id()
    }
    var Fx = document.documentElement
        , zd = document.body;
    var nn = class extends it {
        constructor(i) {
            super(i)
        }
        init() {
            let i = new au({
                enterDelay: 1200,
                transitions: {
                    customTransition: {}
                }
            });
            this.DOM = {
                loading: document.querySelector(".o-loading")
            },
                window.addEventListener("page-loaded", () => {
                    this.play()
                }
                ),
                i.on("loading", (t, e) => {
                    this.call("stop", "Scroll"),
                        setTimeout(() => {
                            I.set(e, {
                                transformOrigin: "top left"
                            }),
                                I.to(e, {
                                    opacity: 0,
                                    rotate: -5,
                                    y: "-20vh",
                                    duration: .5,
                                    ease: "none"
                                });
                            let r = document.querySelector("[data-load-container].is-new");
                            this.call("update", r, "app"),
                                I.set(r, {
                                    transformOrigin: "top left"
                                }),
                                I.fromTo(r, {
                                    y: "100vh",
                                    rotate: 10
                                }, {
                                    y: "0vh",
                                    rotate: 0,
                                    duration: 1,
                                    ease: "expo.out"
                                })
                        }
                            , 50)
                }
                ),
                i.on("loaded", (t, e, r) => {
                    sn(),
                        this.call("update", "Cursor"),
                        this.call("start", "Scroll"),
                        this.call("destroy", e, "app"),
                        this.call("update", r, "app")
                }
                )
        }
        play(i = 0) {
            this.DOM.loading.classList.add("-hidden")
        }
        setNewBodyClass() {
            if (this.el.querySelector("[data-bodyclass]")) {
                let i = this.el.querySelector("[data-bodyclass]").getAttribute("data-bodyclass");
                zd.className = i
            }
        }
    }
        ;
    function Dd(i, t, e) {
        return Math.max(i, Math.min(t, e))
    }
    var Ua = class {
        constructor() {
            this.isRunning = !1,
                this.value = 0,
                this.from = 0,
                this.to = 0,
                this.duration = 0,
                this.currentTime = 0
        }
        advance(t) {
            var e;
            if (!this.isRunning)
                return;
            let r = !1;
            if (this.duration && this.easing) {
                this.currentTime += t;
                let s = Dd(0, this.currentTime / this.duration, 1);
                r = s >= 1;
                let n = r ? 1 : this.easing(s);
                this.value = this.from + (this.to - this.from) * n
            } else
                this.lerp ? (this.value = function (n, o, a, l) {
                    return function (c, u, d) {
                        return (1 - d) * c + d * u
                    }(n, o, 1 - Math.exp(-a * l))
                }(this.value, this.to, 60 * this.lerp, t),
                    Math.round(this.value) === this.to && (this.value = this.to,
                        r = !0)) : (this.value = this.to,
                            r = !0);
            r && this.stop(),
                (e = this.onUpdate) === null || e === void 0 || e.call(this, this.value, r)
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(t, e, { lerp: r, duration: s, easing: n, onStart: o, onUpdate: a }) {
            this.from = this.value = t,
                this.to = e,
                this.lerp = r,
                this.duration = s,
                this.easing = n,
                this.currentTime = 0,
                this.isRunning = !0,
                o == null || o(),
                this.onUpdate = a
        }
    }
        , ja = class {
            constructor({ wrapper: t, content: e, autoResize: r = !0, debounce: s = 250 } = {}) {
                this.width = 0,
                    this.height = 0,
                    this.scrollWidth = 0,
                    this.scrollHeight = 0,
                    this.resize = () => {
                        this.onWrapperResize(),
                            this.onContentResize()
                    }
                    ,
                    this.onWrapperResize = () => {
                        this.wrapper === window ? (this.width = window.innerWidth,
                            this.height = window.innerHeight) : this.wrapper instanceof HTMLElement && (this.width = this.wrapper.clientWidth,
                                this.height = this.wrapper.clientHeight)
                    }
                    ,
                    this.onContentResize = () => {
                        this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
                            this.scrollWidth = this.content.scrollWidth) : this.wrapper instanceof HTMLElement && (this.scrollHeight = this.wrapper.scrollHeight,
                                this.scrollWidth = this.wrapper.scrollWidth)
                    }
                    ,
                    this.wrapper = t,
                    this.content = e,
                    r && (this.debouncedResize = function (o, a) {
                        let l;
                        return function () {
                            let h = arguments
                                , c = this;
                            clearTimeout(l),
                                l = setTimeout(function () {
                                    o.apply(c, h)
                                }, a)
                        }
                    }(this.resize, s),
                        this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
                            this.wrapperResizeObserver.observe(this.wrapper)),
                        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
                        this.contentResizeObserver.observe(this.content)),
                    this.resize()
            }
            destroy() {
                var t, e;
                (t = this.wrapperResizeObserver) === null || t === void 0 || t.disconnect(),
                    (e = this.contentResizeObserver) === null || e === void 0 || e.disconnect(),
                    window.removeEventListener("resize", this.debouncedResize, !1)
            }
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        }
        , on = class {
            constructor() {
                this.events = {}
            }
            emit(t, ...e) {
                let r = this.events[t] || [];
                for (let s = 0, n = r.length; s < n; s++)
                    r[s](...e)
            }
            on(t, e) {
                var r;
                return !((r = this.events[t]) === null || r === void 0) && r.push(e) || (this.events[t] = [e]),
                    () => {
                        var s;
                        this.events[t] = (s = this.events[t]) === null || s === void 0 ? void 0 : s.filter(n => e !== n)
                    }
            }
            off(t, e) {
                var r;
                this.events[t] = (r = this.events[t]) === null || r === void 0 ? void 0 : r.filter(s => e !== s)
            }
            destroy() {
                this.events = {}
            }
        }
        , Vd = 100 / 6
        , qa = class {
            constructor(t, { wheelMultiplier: e = 1, touchMultiplier: r = 1 }) {
                this.lastDelta = {
                    x: 0,
                    y: 0
                },
                    this.windowWidth = 0,
                    this.windowHeight = 0,
                    this.onTouchStart = s => {
                        let { clientX: n, clientY: o } = s.targetTouches ? s.targetTouches[0] : s;
                        this.touchStart.x = n,
                            this.touchStart.y = o,
                            this.lastDelta = {
                                x: 0,
                                y: 0
                            },
                            this.emitter.emit("scroll", {
                                deltaX: 0,
                                deltaY: 0,
                                event: s
                            })
                    }
                    ,
                    this.onTouchMove = s => {
                        var n, o, a, l;
                        let { clientX: h, clientY: c } = s.targetTouches ? s.targetTouches[0] : s
                            , u = -(h - ((o = (n = this.touchStart) === null || n === void 0 ? void 0 : n.x) !== null && o !== void 0 ? o : 0)) * this.touchMultiplier
                            , d = -(c - ((l = (a = this.touchStart) === null || a === void 0 ? void 0 : a.y) !== null && l !== void 0 ? l : 0)) * this.touchMultiplier;
                        this.touchStart.x = h,
                            this.touchStart.y = c,
                            this.lastDelta = {
                                x: u,
                                y: d
                            },
                            this.emitter.emit("scroll", {
                                deltaX: u,
                                deltaY: d,
                                event: s
                            })
                    }
                    ,
                    this.onTouchEnd = s => {
                        this.emitter.emit("scroll", {
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: s
                        })
                    }
                    ,
                    this.onWheel = s => {
                        let { deltaX: n, deltaY: o, deltaMode: a } = s;
                        n *= a === 1 ? Vd : a === 2 ? this.windowWidth : 1,
                            o *= a === 1 ? Vd : a === 2 ? this.windowHeight : 1,
                            n *= this.wheelMultiplier,
                            o *= this.wheelMultiplier,
                            this.emitter.emit("scroll", {
                                deltaX: n,
                                deltaY: o,
                                event: s
                            })
                    }
                    ,
                    this.onWindowResize = () => {
                        this.windowWidth = window.innerWidth,
                            this.windowHeight = window.innerHeight
                    }
                    ,
                    this.element = t,
                    this.wheelMultiplier = e,
                    this.touchMultiplier = r,
                    this.touchStart = {
                        x: null,
                        y: null
                    },
                    this.emitter = new on,
                    window.addEventListener("resize", this.onWindowResize, !1),
                    this.onWindowResize(),
                    this.element.addEventListener("wheel", this.onWheel, {
                        passive: !1
                    }),
                    this.element.addEventListener("touchstart", this.onTouchStart, {
                        passive: !1
                    }),
                    this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !1
                    }),
                    this.element.addEventListener("touchend", this.onTouchEnd, {
                        passive: !1
                    })
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            destroy() {
                this.emitter.destroy(),
                    window.removeEventListener("resize", this.onWindowResize, !1),
                    this.element.removeEventListener("wheel", this.onWheel),
                    this.element.removeEventListener("touchstart", this.onTouchStart),
                    this.element.removeEventListener("touchmove", this.onTouchMove),
                    this.element.removeEventListener("touchend", this.onTouchEnd)
            }
        }
        , an = class {
            constructor({ wrapper: t = window, content: e = document.documentElement, wheelEventsTarget: r = t, eventsTarget: s = r, smoothWheel: n = !0, syncTouch: o = !1, syncTouchLerp: a = .075, touchInertiaMultiplier: l = 35, duration: h, easing: c = _ => Math.min(1, 1.001 - Math.pow(2, -10 * _)), lerp: u = .1, infinite: d = !1, orientation: f = "vertical", gestureOrientation: m = "vertical", touchMultiplier: p = 1, wheelMultiplier: v = 1, autoResize: g = !0, prevent: w, virtualScroll: b, __experimental__naiveDimensions: x = !1 } = {}) {
                this.__isScrolling = !1,
                    this.__isStopped = !1,
                    this.__isLocked = !1,
                    this.userData = {},
                    this.lastVelocity = 0,
                    this.velocity = 0,
                    this.direction = 0,
                    this.onPointerDown = _ => {
                        _.button === 1 && this.reset()
                    }
                    ,
                    this.onVirtualScroll = _ => {
                        if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(_) === !1)
                            return;
                        let { deltaX: y, deltaY: P, event: E } = _;
                        if (this.emitter.emit("virtual-scroll", {
                            deltaX: y,
                            deltaY: P,
                            event: E
                        }),
                            E.ctrlKey)
                            return;
                        let C = E.type.includes("touch")
                            , M = E.type.includes("wheel");
                        if (this.isTouching = E.type === "touchstart" || E.type === "touchmove",
                            this.options.syncTouch && C && E.type === "touchstart" && !this.isStopped && !this.isLocked)
                            return void this.reset();
                        let A = y === 0 && P === 0
                            , T = this.options.gestureOrientation === "vertical" && P === 0 || this.options.gestureOrientation === "horizontal" && y === 0;
                        if (A || T)
                            return;
                        let O = E.composedPath();
                        O = O.slice(0, O.indexOf(this.rootElement));
                        let k = this.options.prevent;
                        if (O.find(V => {
                            var J, nt, vt, gt, Qe;
                            return V instanceof Element && (typeof k == "function" && (k == null ? void 0 : k(V)) || ((J = V.hasAttribute) === null || J === void 0 ? void 0 : J.call(V, "data-lenis-prevent")) || C && ((nt = V.hasAttribute) === null || nt === void 0 ? void 0 : nt.call(V, "data-lenis-prevent-touch")) || M && ((vt = V.hasAttribute) === null || vt === void 0 ? void 0 : vt.call(V, "data-lenis-prevent-wheel")) || ((gt = V.classList) === null || gt === void 0 ? void 0 : gt.contains("lenis")) && !(!((Qe = V.classList) === null || Qe === void 0) && Qe.contains("lenis-stopped")))
                        }
                        ))
                            return;
                        if (this.isStopped || this.isLocked)
                            return void E.preventDefault();
                        if (!(this.options.syncTouch && C || this.options.smoothWheel && M))
                            return this.isScrolling = "native",
                                void this.animate.stop();
                        E.preventDefault();
                        let F = P;
                        this.options.gestureOrientation === "both" ? F = Math.abs(P) > Math.abs(y) ? P : y : this.options.gestureOrientation === "horizontal" && (F = y);
                        let D = C && this.options.syncTouch
                            , N = C && E.type === "touchend" && Math.abs(F) > 5;
                        N && (F = this.velocity * this.options.touchInertiaMultiplier),
                            this.scrollTo(this.targetScroll + F, Object.assign({
                                programmatic: !1
                            }, D ? {
                                lerp: N ? this.options.syncTouchLerp : 1
                            } : {
                                lerp: this.options.lerp,
                                duration: this.options.duration,
                                easing: this.options.easing
                            }))
                    }
                    ,
                    this.onNativeScroll = () => {
                        if (clearTimeout(this.__resetVelocityTimeout),
                            delete this.__resetVelocityTimeout,
                            this.__preventNextNativeScrollEvent)
                            delete this.__preventNextNativeScrollEvent;
                        else if (this.isScrolling === !1 || this.isScrolling === "native") {
                            let _ = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll,
                                this.lastVelocity = this.velocity,
                                this.velocity = this.animatedScroll - _,
                                this.direction = Math.sign(this.animatedScroll - _),
                                this.isScrolling = "native",
                                this.emit(),
                                this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout(() => {
                                    this.lastVelocity = this.velocity,
                                        this.velocity = 0,
                                        this.isScrolling = !1,
                                        this.emit()
                                }
                                    , 400))
                        }
                    }
                    ,
                    window.lenisVersion = "1.1.9",
                    t && t !== document.documentElement && t !== document.body || (t = window),
                    this.options = {
                        wrapper: t,
                        content: e,
                        wheelEventsTarget: r,
                        eventsTarget: s,
                        smoothWheel: n,
                        syncTouch: o,
                        syncTouchLerp: a,
                        touchInertiaMultiplier: l,
                        duration: h,
                        easing: c,
                        lerp: u,
                        infinite: d,
                        gestureOrientation: m,
                        orientation: f,
                        touchMultiplier: p,
                        wheelMultiplier: v,
                        autoResize: g,
                        prevent: w,
                        virtualScroll: b,
                        __experimental__naiveDimensions: x
                    },
                    this.animate = new Ua,
                    this.emitter = new on,
                    this.dimensions = new ja({
                        wrapper: t,
                        content: e,
                        autoResize: g
                    }),
                    this.updateClassName(),
                    this.userData = {},
                    this.time = 0,
                    this.velocity = this.lastVelocity = 0,
                    this.isLocked = !1,
                    this.isStopped = !1,
                    this.isScrolling = !1,
                    this.targetScroll = this.animatedScroll = this.actualScroll,
                    this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
                    this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1),
                    this.virtualScroll = new qa(s, {
                        touchMultiplier: p,
                        wheelMultiplier: v
                    }),
                    this.virtualScroll.on("scroll", this.onVirtualScroll)
            }
            destroy() {
                this.emitter.destroy(),
                    this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
                    this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1),
                    this.virtualScroll.destroy(),
                    this.dimensions.destroy(),
                    this.cleanUpClassName()
            }
            on(t, e) {
                return this.emitter.on(t, e)
            }
            off(t, e) {
                return this.emitter.off(t, e)
            }
            setScroll(t) {
                this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
            }
            resize() {
                this.dimensions.resize()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            reset() {
                this.isLocked = !1,
                    this.isScrolling = !1,
                    this.animatedScroll = this.targetScroll = this.actualScroll,
                    this.lastVelocity = this.velocity = 0,
                    this.animate.stop()
            }
            start() {
                this.isStopped && (this.isStopped = !1,
                    this.reset())
            }
            stop() {
                this.isStopped || (this.isStopped = !0,
                    this.animate.stop(),
                    this.reset())
            }
            raf(t) {
                let e = t - (this.time || t);
                this.time = t,
                    this.animate.advance(.001 * e)
            }
            scrollTo(t, { offset: e = 0, immediate: r = !1, lock: s = !1, duration: n = this.options.duration, easing: o = this.options.easing, lerp: a = this.options.lerp, onStart: l, onComplete: h, force: c = !1, programmatic: u = !0, userData: d = {} } = {}) {
                if (!this.isStopped && !this.isLocked || c) {
                    if (typeof t == "string" && ["top", "left", "start"].includes(t))
                        t = 0;
                    else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
                        t = this.limit;
                    else {
                        let f;
                        if (typeof t == "string" ? f = document.querySelector(t) : t instanceof HTMLElement && (t != null && t.nodeType) && (f = t),
                            f) {
                            if (this.options.wrapper !== window) {
                                let p = this.rootElement.getBoundingClientRect();
                                e -= this.isHorizontal ? p.left : p.top
                            }
                            let m = f.getBoundingClientRect();
                            t = (this.isHorizontal ? m.left : m.top) + this.animatedScroll
                        }
                    }
                    if (typeof t == "number" && (t += e,
                        t = Math.round(t),
                        this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : t = Dd(0, t, this.limit),
                        t !== this.targetScroll)) {
                        if (this.userData = d,
                            r)
                            return this.animatedScroll = this.targetScroll = t,
                                this.setScroll(this.scroll),
                                this.reset(),
                                this.preventNextNativeScrollEvent(),
                                this.emit(),
                                h == null || h(this),
                                void (this.userData = {});
                        u || (this.targetScroll = t),
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: n,
                                easing: o,
                                lerp: a,
                                onStart: () => {
                                    s && (this.isLocked = !0),
                                        this.isScrolling = "smooth",
                                        l == null || l(this)
                                }
                                ,
                                onUpdate: (f, m) => {
                                    this.isScrolling = "smooth",
                                        this.lastVelocity = this.velocity,
                                        this.velocity = f - this.animatedScroll,
                                        this.direction = Math.sign(this.velocity),
                                        this.animatedScroll = f,
                                        this.setScroll(this.scroll),
                                        u && (this.targetScroll = f),
                                        m || this.emit(),
                                        m && (this.reset(),
                                            this.emit(),
                                            h == null || h(this),
                                            this.userData = {},
                                            this.preventNextNativeScrollEvent())
                                }
                            })
                    }
                }
            }
            preventNextNativeScrollEvent() {
                this.__preventNextNativeScrollEvent = !0,
                    requestAnimationFrame(() => {
                        delete this.__preventNextNativeScrollEvent
                    }
                    )
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return this.options.orientation === "horizontal"
            }
            get actualScroll() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
            get scroll() {
                return this.options.infinite ? function (e, r) {
                    return (e % r + r) % r
                }(this.animatedScroll, this.limit) : this.animatedScroll
            }
            get progress() {
                return this.limit === 0 ? 1 : this.scroll / this.limit
            }
            get isScrolling() {
                return this.__isScrolling
            }
            set isScrolling(t) {
                this.__isScrolling !== t && (this.__isScrolling = t,
                    this.updateClassName())
            }
            get isStopped() {
                return this.__isStopped
            }
            set isStopped(t) {
                this.__isStopped !== t && (this.__isStopped = t,
                    this.updateClassName())
            }
            get isLocked() {
                return this.__isLocked
            }
            set isLocked(t) {
                this.__isLocked !== t && (this.__isLocked = t,
                    this.updateClassName())
            }
            get isSmooth() {
                return this.isScrolling === "smooth"
            }
            get className() {
                let t = "lenis";
                return this.isStopped && (t += " lenis-stopped"),
                    this.isLocked && (t += " lenis-locked"),
                    this.isScrolling && (t += " lenis-scrolling"),
                    this.isScrolling === "smooth" && (t += " lenis-smooth"),
                    t
            }
            updateClassName() {
                this.cleanUpClassName(),
                    this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
            }
            cleanUpClassName() {
                this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
            }
        }
        ;
    function Ha() {
        return Ha = Object.assign ? Object.assign.bind() : function (i) {
            for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t];
                for (var r in e)
                    ({}).hasOwnProperty.call(e, r) && (i[r] = e[r])
            }
            return i
        }
            ,
            Ha.apply(null, arguments)
    }
    var ln = class {
        constructor({ scrollElements: t, rootMargin: e = "-1px -1px -1px -1px", IORaf: r }) {
            this.scrollElements = void 0,
                this.rootMargin = void 0,
                this.IORaf = void 0,
                this.observer = void 0,
                this.scrollElements = t,
                this.rootMargin = e,
                this.IORaf = r,
                this._init()
        }
        _init() {
            this.observer = new IntersectionObserver(t => {
                t.forEach(e => {
                    let r = this.scrollElements.find(s => s.$el === e.target);
                    e.isIntersecting ? (r && (r.isAlreadyIntersected = !0),
                        this._setInview(e)) : r && r.isAlreadyIntersected && this._setOutOfView(e)
                }
                )
            }
                , {
                    rootMargin: this.rootMargin
                });
            for (let t of this.scrollElements)
                this.observe(t.$el)
        }
        destroy() {
            this.observer.disconnect()
        }
        observe(t) {
            t && this.observer.observe(t)
        }
        unobserve(t) {
            t && this.observer.unobserve(t)
        }
        _setInview(t) {
            let e = this.scrollElements.find(r => r.$el === t.target);
            this.IORaf && (e == null || e.setInteractivityOn()),
                !this.IORaf && (e == null || e.setInview())
        }
        _setOutOfView(t) {
            let e = this.scrollElements.find(r => r.$el === t.target);
            this.IORaf && (e == null || e.setInteractivityOff()),
                !this.IORaf && (e == null || e.setOutOfView()),
                e != null && e.attributes.scrollRepeat || this.IORaf || this.unobserve(t.target)
        }
    }
        ;
    function Nd(i, t, e, r, s) {
        return e + ((s - i) / (t - i) * (r - e) || 0)
    }
    function Bd(i, t) {
        return i.reduce((e, r) => Math.abs(r - t) < Math.abs(e - t) ? r : e)
    }
    var Wa = class {
        constructor({ $el: t, id: e, modularInstance: r, subscribeElementUpdateFn: s, unsubscribeElementUpdateFn: n, needRaf: o, scrollOrientation: a }) {
            var l, h, c, u, d;
            this.$el = void 0,
                this.id = void 0,
                this.needRaf = void 0,
                this.attributes = void 0,
                this.scrollOrientation = void 0,
                this.isAlreadyIntersected = void 0,
                this.intersection = void 0,
                this.metrics = void 0,
                this.currentScroll = void 0,
                this.translateValue = void 0,
                this.progress = void 0,
                this.lastProgress = void 0,
                this.modularInstance = void 0,
                this.progressModularModules = void 0,
                this.isInview = void 0,
                this.isInteractive = void 0,
                this.isInFold = void 0,
                this.isFirstResize = void 0,
                this.subscribeElementUpdateFn = void 0,
                this.unsubscribeElementUpdateFn = void 0,
                this.$el = t,
                this.id = e,
                this.needRaf = o,
                this.scrollOrientation = a,
                this.modularInstance = r,
                this.subscribeElementUpdateFn = s,
                this.unsubscribeElementUpdateFn = n,
                this.attributes = {
                    scrollClass: (l = this.$el.dataset.scrollClass) != null ? l : "is-inview",
                    scrollOffset: (h = this.$el.dataset.scrollOffset) != null ? h : "0,0",
                    scrollPosition: (c = this.$el.dataset.scrollPosition) != null ? c : "start,end",
                    scrollModuleProgress: this.$el.dataset.scrollModuleProgress != null,
                    scrollCssProgress: this.$el.dataset.scrollCssProgress != null,
                    scrollEventProgress: (u = this.$el.dataset.scrollEventProgress) != null ? u : null,
                    scrollSpeed: this.$el.dataset.scrollSpeed != null ? parseFloat(this.$el.dataset.scrollSpeed) : null,
                    scrollRepeat: this.$el.dataset.scrollRepeat != null,
                    scrollCall: (d = this.$el.dataset.scrollCall) != null ? d : null,
                    scrollCallSelf: this.$el.dataset.scrollCallSelf != null,
                    scrollIgnoreFold: this.$el.dataset.scrollIgnoreFold != null,
                    scrollEnableTouchSpeed: this.$el.dataset.scrollEnableTouchSpeed != null
                },
                this.intersection = {
                    start: 0,
                    end: 0
                },
                this.metrics = {
                    offsetStart: 0,
                    offsetEnd: 0,
                    bcr: {}
                },
                this.currentScroll = this.scrollOrientation === "vertical" ? window.scrollY : window.scrollX,
                this.translateValue = 0,
                this.progress = 0,
                this.lastProgress = null,
                this.progressModularModules = [],
                this.isInview = !1,
                this.isInteractive = !1,
                this.isAlreadyIntersected = !1,
                this.isInFold = !1,
                this.isFirstResize = !0,
                this._init()
        }
        _init() {
            this.needRaf && (this.modularInstance && this.attributes.scrollModuleProgress && this._getProgressModularModules(),
                this._resize())
        }
        onResize({ currentScroll: t }) {
            this.currentScroll = t,
                this._resize()
        }
        onRender({ currentScroll: t, smooth: e }) {
            let r = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth;
            if (this.currentScroll = t,
                this._computeProgress(),
                this.attributes.scrollSpeed && !isNaN(this.attributes.scrollSpeed))
                if (this.attributes.scrollEnableTouchSpeed || e) {
                    if (this.isInFold) {
                        let s = Math.max(0, this.progress);
                        this.translateValue = s * r * this.attributes.scrollSpeed * -1
                    } else {
                        let s = Nd(0, 1, -1, 1, this.progress);
                        this.translateValue = s * r * this.attributes.scrollSpeed * -1
                    }
                    this.$el.style.transform = this.scrollOrientation === "vertical" ? `translate3d(0, ${this.translateValue}px, 0)` : `translate3d(${this.translateValue}px, 0, 0)`
                } else
                    this.translateValue && (this.$el.style.transform = "translate3d(0, 0, 0)"),
                        this.translateValue = 0
        }
        setInview() {
            if (this.isInview)
                return;
            this.isInview = !0,
                this.$el.classList.add(this.attributes.scrollClass);
            let t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("enter", t)
        }
        setOutOfView() {
            if (!this.isInview || !this.attributes.scrollRepeat)
                return;
            this.isInview = !1,
                this.$el.classList.remove(this.attributes.scrollClass);
            let t = this._getScrollCallFrom();
            this.attributes.scrollCall && this._dispatchCall("leave", t)
        }
        setInteractivityOn() {
            this.isInteractive || (this.isInteractive = !0,
                this.subscribeElementUpdateFn(this))
        }
        setInteractivityOff() {
            this.isInteractive && (this.isInteractive = !1,
                this.unsubscribeElementUpdateFn(this),
                this.lastProgress != null && this._computeProgress(Bd([0, 1], this.lastProgress)))
        }
        _resize() {
            this.metrics.bcr = this.$el.getBoundingClientRect(),
                this._computeMetrics(),
                this._computeIntersection(),
                this.isFirstResize && (this.isFirstResize = !1,
                    this.isInFold && this.setInview())
        }
        _computeMetrics() {
            let { top: t, left: e, height: r, width: s } = this.metrics.bcr
                , n = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
                , o = this.scrollOrientation === "vertical" ? r : s;
            this.metrics.offsetStart = this.currentScroll + (this.scrollOrientation === "vertical" ? t : e) - this.translateValue,
                this.metrics.offsetEnd = this.metrics.offsetStart + o,
                this.isInFold = this.metrics.offsetStart < n && !this.attributes.scrollIgnoreFold
        }
        _computeIntersection() {
            let t = this.scrollOrientation === "vertical" ? window.innerHeight : window.innerWidth
                , e = this.scrollOrientation === "vertical" ? this.metrics.bcr.height : this.metrics.bcr.width
                , r = this.attributes.scrollOffset.split(",")
                , s = r[0] != null ? r[0].trim() : "0"
                , n = r[1] != null ? r[1].trim() : "0"
                , o = this.attributes.scrollPosition.split(",")
                , a = o[0] != null ? o[0].trim() : "start"
                , l = o[1] != null ? o[1].trim() : "end"
                , h = s.includes("%") ? t * parseInt(s.replace("%", "").trim()) * .01 : parseInt(s)
                , c = n.includes("%") ? t * parseInt(n.replace("%", "").trim()) * .01 : parseInt(n);
            switch (this.isInFold && (a = "fold"),
            a) {
                case "start":
                default:
                    this.intersection.start = this.metrics.offsetStart - t + h;
                    break;
                case "middle":
                    this.intersection.start = this.metrics.offsetStart - t + h + .5 * e;
                    break;
                case "end":
                    this.intersection.start = this.metrics.offsetStart - t + h + e;
                    break;
                case "fold":
                    this.intersection.start = 0
            }
            switch (l) {
                case "start":
                    this.intersection.end = this.metrics.offsetStart - c;
                    break;
                case "middle":
                    this.intersection.end = this.metrics.offsetStart - c + .5 * e;
                    break;
                default:
                    this.intersection.end = this.metrics.offsetStart - c + e
            }
            if (this.intersection.end <= this.intersection.start)
                switch (l) {
                    case "start":
                    default:
                        this.intersection.end = this.intersection.start + 1;
                        break;
                    case "middle":
                        this.intersection.end = this.intersection.start + .5 * e;
                        break;
                    case "end":
                        this.intersection.end = this.intersection.start + e
                }
        }
        _computeProgress(t) {
            let e = t != null ? t : (r = Nd(this.intersection.start, this.intersection.end, 0, 1, this.currentScroll)) < 0 ? 0 : r > 1 ? 1 : r;
            var r;
            if (this.progress = e,
                e != this.lastProgress) {
                if (this.lastProgress = e,
                    this.attributes.scrollCssProgress && this._setCssProgress(e),
                    this.attributes.scrollEventProgress && this._setCustomEventProgress(e),
                    this.attributes.scrollModuleProgress)
                    for (let s of this.progressModularModules)
                        this.modularInstance && this.modularInstance.call("onScrollProgress", e, s.moduleName, s.moduleId);
                e > 0 && e < 1 && this.setInview(),
                    e === 0 && this.setOutOfView(),
                    e === 1 && this.setOutOfView()
            }
        }
        _setCssProgress(t = 0) {
            this.$el.style.setProperty("--progress", t.toString())
        }
        _setCustomEventProgress(t = 0) {
            let e = this.attributes.scrollEventProgress;
            if (!e)
                return;
            let r = new CustomEvent(e, {
                detail: {
                    target: this.$el,
                    progress: t
                }
            });
            window.dispatchEvent(r)
        }
        _getProgressModularModules() {
            if (!this.modularInstance)
                return;
            let t = Object.keys(this.$el.dataset).filter(r => r.includes("module"))
                , e = Object.entries(this.modularInstance.modules);
            if (t.length)
                for (let r of t) {
                    let s = this.$el.dataset[r];
                    if (!s)
                        return;
                    for (let n of e) {
                        let [o, a] = n;
                        s in a && this.progressModularModules.push({
                            moduleName: o,
                            moduleId: s
                        })
                    }
                }
        }
        _getScrollCallFrom() {
            let t = Bd([this.intersection.start, this.intersection.end], this.currentScroll);
            return this.intersection.start === t ? "start" : "end"
        }
        _dispatchCall(t, e) {
            var r, s;
            let n = (r = this.attributes.scrollCall) == null ? void 0 : r.split(",")
                , o = (s = this.attributes) == null ? void 0 : s.scrollCallSelf;
            if (n && n.length > 1) {
                var a;
                let [l, h, c] = n, u;
                u = o ? this.$el.dataset[`module${h.trim()}`] : c,
                    this.modularInstance && this.modularInstance.call(l.trim(), {
                        target: this.$el,
                        way: t,
                        from: e
                    }, h.trim(), (a = u) == null ? void 0 : a.trim())
            } else if (n) {
                let [l] = n
                    , h = new CustomEvent(l, {
                        detail: {
                            target: this.$el,
                            way: t,
                            from: e
                        }
                    });
                window.dispatchEvent(h)
            }
        }
    }
        , Y_ = ["scrollOffset", "scrollPosition", "scrollModuleProgress", "scrollCssProgress", "scrollEventProgress", "scrollSpeed"]
        , $a = class {
            constructor({ $el: t, modularInstance: e, triggerRootMargin: r, rafRootMargin: s, scrollOrientation: n }) {
                this.$scrollContainer = void 0,
                    this.modularInstance = void 0,
                    this.triggerRootMargin = void 0,
                    this.rafRootMargin = void 0,
                    this.scrollElements = void 0,
                    this.triggeredScrollElements = void 0,
                    this.RAFScrollElements = void 0,
                    this.scrollElementsToUpdate = void 0,
                    this.IOTriggerInstance = void 0,
                    this.IORafInstance = void 0,
                    this.scrollOrientation = void 0,
                    t ? (this.$scrollContainer = t,
                        this.modularInstance = e,
                        this.scrollOrientation = n,
                        this.triggerRootMargin = r != null ? r : "-1px -1px -1px -1px",
                        this.rafRootMargin = s != null ? s : "100% 100% 100% 100%",
                        this.scrollElements = [],
                        this.triggeredScrollElements = [],
                        this.RAFScrollElements = [],
                        this.scrollElementsToUpdate = [],
                        this._init()) : console.error("Please provide a DOM Element as scrollContainer")
            }
            _init() {
                let t = this.$scrollContainer.querySelectorAll("[data-scroll]")
                    , e = Array.from(t);
                this._subscribeScrollElements(e),
                    this.IOTriggerInstance = new ln({
                        scrollElements: [...this.triggeredScrollElements],
                        rootMargin: this.triggerRootMargin,
                        IORaf: !1
                    }),
                    this.IORafInstance = new ln({
                        scrollElements: [...this.RAFScrollElements],
                        rootMargin: this.rafRootMargin,
                        IORaf: !0
                    })
            }
            destroy() {
                this.IOTriggerInstance.destroy(),
                    this.IORafInstance.destroy(),
                    this._unsubscribeAllScrollElements()
            }
            onResize({ currentScroll: t }) {
                for (let e of this.RAFScrollElements)
                    e.onResize({
                        currentScroll: t
                    })
            }
            onRender({ currentScroll: t, smooth: e }) {
                for (let r of this.scrollElementsToUpdate)
                    r.onRender({
                        currentScroll: t,
                        smooth: e
                    })
            }
            removeScrollElements(t) {
                let e = t.querySelectorAll("[data-scroll]");
                if (e.length) {
                    for (let r = 0; r < this.triggeredScrollElements.length; r++) {
                        let s = this.triggeredScrollElements[r];
                        Array.from(e).indexOf(s.$el) > -1 && (this.IOTriggerInstance.unobserve(s.$el),
                            this.triggeredScrollElements.splice(r, 1))
                    }
                    for (let r = 0; r < this.RAFScrollElements.length; r++) {
                        let s = this.RAFScrollElements[r];
                        Array.from(e).indexOf(s.$el) > -1 && (this.IORafInstance.unobserve(s.$el),
                            this.RAFScrollElements.splice(r, 1))
                    }
                    e.forEach(r => {
                        let s = this.scrollElementsToUpdate.find(o => o.$el === r)
                            , n = this.scrollElements.find(o => o.$el === r);
                        s && this._unsubscribeElementUpdate(s),
                            n && (this.scrollElements = this.scrollElements.filter(o => o.id != n.id))
                    }
                    )
                }
            }
            addScrollElements(t) {
                let e = t.querySelectorAll("[data-scroll]")
                    , r = [];
                this.scrollElements.forEach(o => {
                    r.push(o.id)
                }
                );
                let s = Math.max(...r, 0) + 1
                    , n = Array.from(e);
                this._subscribeScrollElements(n, s, !0)
            }
            _subscribeScrollElements(t, e = 0, r = !1) {
                for (let s = 0; s < t.length; s++) {
                    let n = t[s]
                        , o = this._checkRafNeeded(n)
                        , a = new Wa({
                            $el: n,
                            id: e + s,
                            scrollOrientation: this.scrollOrientation,
                            modularInstance: this.modularInstance,
                            subscribeElementUpdateFn: this._subscribeElementUpdate.bind(this),
                            unsubscribeElementUpdateFn: this._unsubscribeElementUpdate.bind(this),
                            needRaf: o
                        });
                    this.scrollElements.push(a),
                        o ? (this.RAFScrollElements.push(a),
                            r && (this.IORafInstance.scrollElements.push(a),
                                this.IORafInstance.observe(a.$el))) : (this.triggeredScrollElements.push(a),
                                    r && (this.IOTriggerInstance.scrollElements.push(a),
                                        this.IOTriggerInstance.observe(a.$el)))
                }
            }
            _unsubscribeAllScrollElements() {
                this.scrollElements = [],
                    this.RAFScrollElements = [],
                    this.triggeredScrollElements = [],
                    this.scrollElementsToUpdate = []
            }
            _subscribeElementUpdate(t) {
                this.scrollElementsToUpdate.push(t)
            }
            _unsubscribeElementUpdate(t) {
                this.scrollElementsToUpdate = this.scrollElementsToUpdate.filter(e => e.id != t.id)
            }
            _checkRafNeeded(t) {
                let e = [...Y_]
                    , r = s => {
                        e = e.filter(n => n != s)
                    }
                    ;
                if (t.dataset.scrollOffset) {
                    if (t.dataset.scrollOffset.split(",").map(s => s.replace("%", "").trim()).join(",") != "0,0")
                        return !0;
                    r("scrollOffset")
                } else
                    r("scrollOffset");
                if (t.dataset.scrollPosition) {
                    if (t.dataset.scrollPosition.trim() != "top,bottom")
                        return !0;
                    r("scrollPosition")
                } else
                    r("scrollPosition");
                if (t.dataset.scrollSpeed && !isNaN(parseFloat(t.dataset.scrollSpeed)))
                    return !0;
                r("scrollSpeed");
                for (let s of e)
                    if (s in t.dataset)
                        return !0;
                return !1
            }
        }
        , Ga = class {
            constructor({ resizeElements: t, resizeCallback: e = () => { }
            }) {
                this.$resizeElements = void 0,
                    this.isFirstObserve = void 0,
                    this.observer = void 0,
                    this.resizeCallback = void 0,
                    this.$resizeElements = t,
                    this.resizeCallback = e,
                    this.isFirstObserve = !0,
                    this._init()
            }
            _init() {
                this.observer = new ResizeObserver(t => {
                    var e;
                    !this.isFirstObserve && ((e = this.resizeCallback) == null || e.call(this)),
                        this.isFirstObserve = !1
                }
                );
                for (let t of this.$resizeElements)
                    this.observer.observe(t)
            }
            destroy() {
                this.observer.disconnect()
            }
        }
        , hn = class {
            constructor({ lenisOptions: t = {}, modularInstance: e, triggerRootMargin: r, rafRootMargin: s, autoResize: n = !0, autoStart: o = !0, scrollCallback: a = () => { }
                , initCustomTicker: l, destroyCustomTicker: h } = {}) {
                this.rafPlaying = void 0,
                    this.lenisInstance = void 0,
                    this.coreInstance = void 0,
                    this.lenisOptions = void 0,
                    this.modularInstance = void 0,
                    this.triggerRootMargin = void 0,
                    this.rafRootMargin = void 0,
                    this.rafInstance = void 0,
                    this.autoResize = void 0,
                    this.autoStart = void 0,
                    this.ROInstance = void 0,
                    this.initCustomTicker = void 0,
                    this.destroyCustomTicker = void 0,
                    this._onRenderBind = void 0,
                    this._onResizeBind = void 0,
                    this._onScrollToBind = void 0;
                for (let [c] of Object.entries(t))
                    ["wrapper", "content", "infinite"].includes(c) && console.warn(`Warning: Key "${c}" is not possible to edit in Locomotive Scroll.`);
                Object.assign(this, {
                    lenisOptions: t,
                    modularInstance: e,
                    triggerRootMargin: r,
                    rafRootMargin: s,
                    autoResize: n,
                    autoStart: o,
                    scrollCallback: a,
                    initCustomTicker: l,
                    destroyCustomTicker: h
                }),
                    this._onRenderBind = this._onRender.bind(this),
                    this._onScrollToBind = this._onScrollTo.bind(this),
                    this._onResizeBind = this._onResize.bind(this),
                    this.rafPlaying = !1,
                    this._init()
            }
            _init() {
                var t;
                this.lenisInstance = new an(Ha({}, this.lenisOptions, {
                    wrapper: window,
                    content: document.documentElement,
                    infinite: !1
                })),
                    (t = this.lenisInstance) == null || t.on("scroll", this.scrollCallback),
                    document.documentElement.setAttribute("data-scroll-orientation", this.lenisInstance.options.orientation),
                    requestAnimationFrame(() => {
                        this.coreInstance = new $a({
                            $el: this.lenisInstance.rootElement,
                            modularInstance: this.modularInstance,
                            triggerRootMargin: this.triggerRootMargin,
                            rafRootMargin: this.rafRootMargin,
                            scrollOrientation: this.lenisInstance.options.orientation
                        }),
                            this._bindEvents(),
                            this.initCustomTicker && !this.destroyCustomTicker ? console.warn("initCustomTicker callback is declared, but destroyCustomTicker is not. Please pay attention. It could cause trouble.") : !this.initCustomTicker && this.destroyCustomTicker && console.warn("destroyCustomTicker callback is declared, but initCustomTicker is not. Please pay attention. It could cause trouble."),
                            this.autoStart && this.start()
                    }
                    )
            }
            destroy() {
                var t;
                this.stop(),
                    this._unbindEvents(),
                    this.lenisInstance.destroy(),
                    (t = this.coreInstance) == null || t.destroy(),
                    requestAnimationFrame(() => {
                        var e;
                        (e = this.coreInstance) == null || e.destroy()
                    }
                    )
            }
            _bindEvents() {
                this._bindScrollToEvents(),
                    this.autoResize && ("ResizeObserver" in window ? this.ROInstance = new Ga({
                        resizeElements: [document.body],
                        resizeCallback: this._onResizeBind
                    }) : window.addEventListener("resize", this._onResizeBind))
            }
            _unbindEvents() {
                this._unbindScrollToEvents(),
                    this.autoResize && ("ResizeObserver" in window ? this.ROInstance && this.ROInstance.destroy() : window.removeEventListener("resize", this._onResizeBind))
            }
            _bindScrollToEvents(t) {
                let e = t || this.lenisInstance.rootElement
                    , r = e == null ? void 0 : e.querySelectorAll("[data-scroll-to]");
                r != null && r.length && r.forEach(s => {
                    s.addEventListener("click", this._onScrollToBind, !1)
                }
                )
            }
            _unbindScrollToEvents(t) {
                let e = t || this.lenisInstance.rootElement
                    , r = e == null ? void 0 : e.querySelectorAll("[data-scroll-to]");
                r != null && r.length && r.forEach(s => {
                    s.removeEventListener("click", this._onScrollToBind, !1)
                }
                )
            }
            _onResize() {
                requestAnimationFrame(() => {
                    var t;
                    (t = this.coreInstance) == null || t.onResize({
                        currentScroll: this.lenisInstance.scroll
                    })
                }
                )
            }
            _onRender() {
                var t, e;
                (t = this.lenisInstance) == null || t.raf(Date.now()),
                    (e = this.coreInstance) == null || e.onRender({
                        currentScroll: this.lenisInstance.scroll,
                        smooth: this.lenisInstance.options.smoothWheel
                    })
            }
            _onScrollTo(t) {
                var e;
                t.preventDefault();
                let r = (e = t.currentTarget) != null ? e : null;
                if (!r)
                    return;
                let s = r.getAttribute("data-scroll-to-href") || r.getAttribute("href")
                    , n = r.getAttribute("data-scroll-to-offset") || 0
                    , o = r.getAttribute("data-scroll-to-duration") || this.lenisInstance.options.duration;
                s && this.scrollTo(s, {
                    offset: typeof n == "string" ? parseInt(n) : n,
                    duration: typeof o == "string" ? parseInt(o) : o
                })
            }
            start() {
                var t;
                this.rafPlaying || ((t = this.lenisInstance) == null || t.start(),
                    this.rafPlaying = !0,
                    this.initCustomTicker ? this.initCustomTicker(this._onRenderBind) : this._raf())
            }
            stop() {
                var t;
                this.rafPlaying && ((t = this.lenisInstance) == null || t.stop(),
                    this.rafPlaying = !1,
                    this.destroyCustomTicker ? this.destroyCustomTicker(this._onRenderBind) : this.rafInstance && cancelAnimationFrame(this.rafInstance))
            }
            removeScrollElements(t) {
                var e;
                t ? (this._unbindScrollToEvents(t),
                    (e = this.coreInstance) == null || e.removeScrollElements(t)) : console.error("Please provide a DOM Element as $oldContainer")
            }
            addScrollElements(t) {
                var e;
                t ? ((e = this.coreInstance) == null || e.addScrollElements(t),
                    requestAnimationFrame(() => {
                        this._bindScrollToEvents(t)
                    }
                    )) : console.error("Please provide a DOM Element as $newContainer")
            }
            resize() {
                this._onResizeBind()
            }
            scrollTo(t, e) {
                var r;
                (r = this.lenisInstance) == null || r.scrollTo(t, {
                    offset: e == null ? void 0 : e.offset,
                    lerp: e == null ? void 0 : e.lerp,
                    duration: e == null ? void 0 : e.duration,
                    immediate: e == null ? void 0 : e.immediate,
                    lock: e == null ? void 0 : e.lock,
                    force: e == null ? void 0 : e.force,
                    easing: e == null ? void 0 : e.easing,
                    onComplete: e == null ? void 0 : e.onComplete
                })
            }
            _raf() {
                this._onRenderBind(),
                    this.rafInstance = requestAnimationFrame(() => this._raf())
            }
        }
        ;
    var cn = class extends it {
        constructor(i) {
            super(i)
        }
        init() {
            this.scroll = new hn({
                modularInstance: this,
                autoStart: !1,
                scrollCallback: ({ scroll: i, limit: t, velocity: e, direction: r, progress: s }) => this.onScroll({
                    scroll: i,
                    limit: t,
                    velocity: e,
                    direction: r,
                    progress: s
                }),
                lenisOptions: {
                    wheelMultiplier: this.getWheelMultiplier()
                }
            }),
                history.scrollRestoration && (history.scrollRestoration = "manual",
                    window.scrollTo(0, 0)),
                this.initScrollToElements(),
                window.addEventListener("scroll-start", () => {
                    this.start()
                }
                ),
                window.addEventListener("scroll-stop", () => {
                    this.stop()
                }
                ),
                window.addEventListener("scroll-resize", () => {
                    this.resize()
                }
                )
        }
        startAndTop() {
            this.scroll.start(),
                this.scroll.scrollTo("top", {
                    immediate: !0
                })
        }
        start() {
            this.scroll.start()
        }
        stop() {
            this.scroll.stop()
        }
        resize() {
            this.scroll.resize()
        }
        onScroll({ scroll: i, limit: t, velocity: e, direction: r, progress: s }) {
            this.call("onScroll", {
                velocity: e
            }, "Hero")
        }
        scrollTo(i = {}) {
            let t = Ct({
                target: null,
                delay: 0,
                duration: 1,
                immediate: !1
            }, i);
            setTimeout(() => {
                var e;
                (e = this.scroll) == null || e.scrollTo(t.target, {
                    duration: t.duration,
                    lerp: .1,
                    lock: !1,
                    immediate: t.immediate,
                    easing: r => r === 1 ? 1 : 1 - Math.pow(2, -10 * r)
                })
            }
                , t.delay)
        }
        initScrollToElements() {
            this.el.querySelectorAll("[data-scroll-to]").forEach(i => {
                i.addEventListener("click", t => {
                    t.preventDefault();
                    let e = document.querySelector('[data-scroll-target="' + i.getAttribute("data-scroll-to") + '"]')
                        , r = i.getAttribute("data-scroll-to-delay") ? parseInt(i.getAttribute("data-scroll-to-delay")) : 0;
                    e && this.scrollTo({
                        target: e,
                        delay: r
                    })
                }
                )
            }
            )
        }
        scrollTop(i) {
            this.scroll && (i ? this.scroll.scrollTo("top", {
                immediate: !0
            }) : this.scrollTo({
                target: "top"
            }))
        }
        destroy() {
            this.scroll.destroy()
        }
        getWheelMultiplier() {
            let i = window.innerHeight
                , t = .55;
            return i < 700 ? t = .25 : i < 800 ? t = .35 : i < 900 && (t = .45),
                t
        }
    }
        ;
    var Ya = (i, t, e) => i * (1 - e) + t * e;
    var un = class extends it {
        constructor(i) {
            super(i)
        }
        init() {
            this.elts = [],
                this.update(),
                this.cursorTxt = this.el.querySelector(".c-cursor_txt"),
                this.data = {
                    mouse: {
                        x: 0,
                        y: 0
                    },
                    current: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    ease: .15,
                    velo: 3,
                    fxX: {
                        diff: 0,
                        acc: 0,
                        velo: 0,
                        scale: 0
                    },
                    fxY: {
                        diff: 0,
                        acc: 0,
                        velo: 0,
                        scale: 0
                    }
                },
                this.rAF = null,
                this.targets = null,
                this.run = this.run.bind(this),
                this.mousePos = this.mousePos.bind(this),
                this.documentEnter = this.documentEnter.bind(this),
                this.documentLeave = this.documentLeave.bind(this),
                this.mouseEnter = this.mouseEnter.bind(this),
                this.mouseLeave = this.mouseLeave.bind(this),
                this.raf()
        }
        update() {
            this.elts = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")],
                this.addListeners()
        }
        mousePos(i) {
            this.el.classList.remove("-hidden"),
                this.data.mouse.x = i.clientX,
                this.data.mouse.y = i.clientY,
                this.data.current.x = i.clientX,
                this.data.current.y = i.clientY
        }
        run() {
            this.data.last.x = Ya(this.data.last.x, this.data.current.x, this.data.ease),
                this.data.last.y = Ya(this.data.last.y, this.data.current.y, this.data.ease),
                this.data.fxX.diff = this.data.current.x - this.data.last.x,
                this.data.fxX.acc = this.data.fxX.diff / window.innerWidth,
                this.data.fxX.velo = +this.data.fxX.acc,
                this.data.fxX.scale = 1 - Math.abs(this.data.fxX.velo * this.data.velo),
                this.data.fxY.diff = this.data.current.y - this.data.last.y,
                this.data.fxY.acc = this.data.fxY.diff / window.innerHeight,
                this.data.fxY.velo = +this.data.fxY.acc,
                this.data.fxY.scale = 1 - Math.abs(this.data.fxY.velo * this.data.velo),
                this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fxY.scale}, ${this.data.fxX.scale})`,
                this.raf()
        }
        raf() {
            this.rAF = requestAnimationFrame(this.run)
        }
        documentEnter() {
            this.el.classList.remove("-hidden")
        }
        documentLeave() {
            this.el.classList.add("-hidden")
        }
        mouseEnter(i) {
            let t = i.target.getAttribute("data-cursor-txt");
            this.cursorTxt.innerHTML = t || "",
                this.el.classList.add("-active")
        }
        mouseLeave() {
            this.cursorTxt.innerHTML = "",
                this.el.classList.remove("-active")
        }
        addListeners() {
            window.addEventListener("mousemove", i => {
                this.mousePos(i)
            }
                , {
                    passive: !0
                }),
                document.addEventListener("mouseenter", i => {
                    this.documentEnter(i)
                }
                    , {
                        passive: !0
                    }),
                document.addEventListener("mouseleave", i => {
                    this.documentLeave(i)
                }
                    , {
                        passive: !0
                    }),
                this.elts && this.elts.forEach(i => {
                    i.addEventListener("mouseenter", t => {
                        this.mouseEnter(t)
                    }
                        , {
                            passive: !0
                        }),
                        i.addEventListener("mouseleave", t => {
                            this.mouseLeave(t)
                        }
                            , {
                                passive: !0
                            })
                }
                )
        }
        toto(i) {
            console.log("OUI", i)
        }
    }
        ;
    var dn = class extends it {
        constructor(i) {
            super(i),
                this.mtlTime = this.getMtlTime(),
                this.update()
        }
        init() {
            setInterval(() => {
                this.mtlTime = this.getMtlTime(),
                    this.update()
            }
                , 5e3)
        }
        getMtlTime() {
            return new Date(new Date().toLocaleString("en-US", {
                timeZone: "America/Montreal"
            }))
        }
        update() {
            let i = this.mtlTime.getHours().toString()
                , t = this.mtlTime.getMinutes().toString();
            this.el.innerHTML = i + ":" + t.padStart(2, "0") + " MTL"
        }
    }
        ;
    var X_ = () => {
        let i = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--grid-margin"))
            , t = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--grid-gutter"))
            , e = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--grid-columns"));
        return (100 - i * 2 - (e - 1) * t) / e
    }
        , Xa = (i, t = "vw") => {
            let e = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--grid-gutter"));
            return X_() * i + (i - 1) * e + t
        }
        ;
    var pn = class extends it {
        constructor(i) {
            super(i),
                this.events = {
                    click: {
                        toggle: "toggleMenu",
                        scrollTo: "scrollTo"
                    }
                },
                this.isOpened = !1,
                this.openedClass = "-opened",
                this.TL = null,
                this.toggle = this.el.querySelector(".c-menu_toggle"),
                this.label = this.el.querySelector(".c-menu_toggle_label"),
                this.logo = this.el.querySelector(".c-menu_toggle_logo"),
                this.menuWrap = this.el.querySelector(".c-menu_wrap"),
                this.menuContent = this.el.querySelector(".c-menu_content"),
                this.lang = this.el.querySelector(".c-menu_lang"),
                this.intro = this.el.querySelector(".c-menu_content_intro"),
                this.items = this.el.querySelectorAll(".c-menu_content_item"),
                this.menuW = null,
                this.menuSize()
        }
        init() {
            let i = new Me(this.label.querySelector(".-default"))
                , t = new Me(this.label.querySelector(".-opened"));
            this.toggle.addEventListener("mouseenter", () => {
                i.animate(),
                    t.animate()
            }
            ),
                this.toggle.addEventListener("mouseleave", () => {
                    i.animateBack(),
                        t.animateBack()
                }
                ),
                this.items.forEach(e => {
                    let r = new Me(e.querySelector("span"));
                    e.addEventListener("mouseenter", () => {
                        r.animate()
                    }
                    ),
                        e.addEventListener("mouseleave", () => {
                            r.animateBack()
                        }
                        )
                }
                )
        }
        menuSize() {
            window.matchMedia("(min-width: 1200px)").matches ? this.menuW = Xa(2) : window.matchMedia("(min-width: 800px)").matches && (this.menuW = Xa(3))
        }
        toggleMenu() {
            this.TL && this.TL.isActive() || (this.isOpened == !1 ? this.openMenu() : this.closeMenu())
        }
        openMenu() {
            this.menuSize(),
                this.isOpened = !0,
                this.menuContent.scrollTop = 0,
                this.logo.classList.add(this.openedClass),
                this.label.classList.add(this.openedClass);
            let i = this.label.querySelector(".opened").offsetWidth;
            I.to(this.label, {
                width: i,
                duration: .4,
                ease: "power4.out"
            }),
                this.TL = new I.timeline({
                    onStart: () => {
                        this.menuWrap.classList.add("-visible")
                    }
                }),
                this.menuW != null && this.TL.to(this.el, {
                    width: this.menuW,
                    duration: .4,
                    ease: "power4.out"
                }),
                this.TL.fromTo(this.menuContent, {
                    y: "-101%"
                }, {
                    y: 0,
                    duration: .8,
                    ease: "power4.out"
                }),
                this.TL.fromTo(this.intro, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .4,
                    ease: "none"
                }, "-=0.25"),
                this.TL.fromTo(this.lang, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .4,
                    ease: "none"
                }, "-=0.25"),
                this.TL.fromTo(this.items, {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .6,
                    ease: "power4.out",
                    stagger: .075
                }, "-=0.4")
        }
        closeMenu() {
            this.menuSize(),
                this.isOpened = !1,
                this.TL = new I.timeline,
                this.TL.fromTo(this.items, {
                    opacity: 1,
                    y: 0
                }, {
                    opacity: 0,
                    y: -40,
                    duration: .4,
                    ease: "power4.out"
                }, 0),
                this.TL.fromTo(this.intro, {
                    opacity: 1
                }, {
                    opacity: 0,
                    duration: .2,
                    ease: "none"
                }, 0),
                this.TL.fromTo(this.lang, {
                    opacity: 1
                }, {
                    opacity: 0,
                    duration: .2,
                    ease: "none"
                }, 0),
                this.TL.fromTo(this.menuContent, {
                    y: 0
                }, {
                    y: "-101%",
                    duration: .5,
                    ease: "power4.out",
                    onStart: () => {
                        this.logo.classList.remove(this.openedClass),
                            this.label.classList.remove(this.openedClass);
                        let i = this.label.querySelector(".default").offsetWidth;
                        I.to(this.label, {
                            width: i,
                            duration: .4,
                            ease: "power4.out"
                        })
                    }
                    ,
                    onComplete: () => {
                        this.menuWrap.classList.remove("-visible")
                    }
                }),
                this.menuW != null && this.TL.to(this.el, {
                    width: "auto",
                    duration: .3,
                    ease: "power4.out"
                }, "-=0.2")
        }
        scrollTo(i) {
            let e = i.currentTarget.getAttribute("data-section-id")
                , r = document.querySelector('[data-scroll-target="' + e + '"]');
            r && (this.closeMenu(),
                this.call("scrollTo", {
                    target: r
                }, "Scroll"))
        }
    }
        ;
    var Ka = "production"
        , Ud = window.matchMedia("(any-pointer:coarse)").matches && window.matchMedia("(max-width: 700px)").matches
        , Xr = Object.freeze({
            NAME: Ka,
            IS_PROD: Ka === "production",
            IS_DEV: Ka === "development",
            IS_MOBILE: Ud,
            IS_DESKTOP: !Ud
        })
        , dE = Object.freeze({
            LOADING: "is-loading",
            LOADED: "is-loaded",
            READY: "is-ready",
            LAZY_CONTAINER: "c-lazy",
            LAZY_LOADED: "-lazy-loaded"
        });
    var fn = class extends it {
        constructor(i) {
            super(i)
        }
        init() {
            this.wrap = this.el.querySelector(".c-section-title_wrap"),
                this.glitchs = [],
                this.createElements(),
                this.currentRender = null
        }
        createElements() {
            document.querySelectorAll("[data-section-title]").forEach(i => {
                let t = i.getAttribute("data-section-title")
                    , e = i.getAttribute("data-section-title-id")
                    , r = document.createElement("div");
                r.setAttribute("data-id", e),
                    r.classList.add("c-section-title_render"),
                    r.innerHTML = t,
                    this.wrap.appendChild(r),
                    this.glitchs.push({
                        id: e,
                        render: r,
                        glitch: new Me(r)
                    })
            }
            )
        }
        hide() {
            Xr.IS_MOBILE || I.to(this.wrap, {
                width: 0,
                duration: .4,
                ease: "power4"
            }),
                I.to(this.el, {
                    opacity: 0,
                    duration: .2,
                    ease: "none"
                }),
                this.currentRender != null && (I.to(this.currentRender, {
                    opacity: 0,
                    duration: .1,
                    ease: "none"
                }),
                    this.currentRender = null)
        }
        changeTitle(i) {
            i.way != "leave" && (i.target.hasAttribute("data-section-title-hide") ? this.hide() : this.changeText(i.target.getAttribute("data-section-title-id")))
        }
        changeText(i) {
            let t = this.glitchs.find(s => s.id == i);
            if (!t)
                return;
            let e = t.render.offsetWidth
                , r = new I.timeline;
            this.currentRender ? r.to(this.currentRender, {
                opacity: 0,
                duration: .1,
                ease: "none"
            }) : r.to(this.el, {
                opacity: 1,
                duration: .2,
                ease: "none"
            }),
                this.currentRender = t.render,
                Xr.IS_MOBILE ? (I.set(this.currentRender, {
                    opacity: 1
                }),
                    t.glitch.animate()) : r.to(this.wrap, {
                        width: e,
                        duration: .4,
                        ease: "power4",
                        onComplete: () => {
                            I.set(this.currentRender, {
                                opacity: 1
                            }),
                                t.glitch.animate()
                        }
                    })
        }
    }
        ;
    var mn = class extends it {
        constructor(i) {
            super(i),
                this.split = null,
                this.splitConfig = "lines, words"
        }
        init() {
            this.splitConfig = this.el.getAttribute("data-split") ? this.el.getAttribute("data-split") : "lines, words",
                this.split = new rn(this.el, {
                    types: this.splitConfig
                }),
                this.split.lines && this.split.lines.forEach((i, t) => {
                    i.style.setProperty("--l-index", t)
                }
                ),
                this.split.words && this.split.words.forEach((i, t) => {
                    i.style.setProperty("--w-index", t)
                }
                ),
                this.split.chars && this.split.chars.forEach((i, t) => {
                    i.style.setProperty("--c-index", t)
                }
                )
        }
    }
        ;
    ro();
    ro();
    var li = {
        files: {},
        add: (i, t) => li.files[i] = t,
        get: i => li.files[i],
        remove: i => delete li.files[i],
        clear: () => li.files = {},
        load: i => new Promise(t => {
            let e = li.get(i);
            if (e)
                return t(e);
            let r = new Image;
            r.onload = () => {
                li.add(i, r),
                    t(r)
            }
                ,
                r.src = i
        }
        )
    };
    var Em = `# version 300 es
precision highp float;in vec3 position;in vec2 uv;out vec2 vUv;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform float uBend;uniform float uBendSides;const float PI=3.141592653589793238;void main(){vUv=uv;vec3 newPosition=position;newPosition.z=sin((uv.x*(1.0-uBendSides)+(uBendSides*0.5))*PI)*0.5*uBend;gl_Position=projectionMatrix*modelViewMatrix*vec4(newPosition,1.0);}`;
    var Cm = `#version 300 es
precision highp float;in vec2 vUv;out vec4 fragColor;uniform sampler2D uMap;uniform vec2 uImageSize;uniform vec2 uPlaneSize;uniform float uAlpha;uniform float uZoom;void main(){vec2 ratio=vec2(min((uPlaneSize.x/uPlaneSize.y)/(uImageSize.x/uImageSize.y),1.0),min((uPlaneSize.y/uPlaneSize.x)/(uImageSize.y/uImageSize.x),1.0));vec2 uv=vec2(vUv.x*ratio.x+(1.0-ratio.x)*0.5,vUv.y*ratio.y+(1.0-ratio.y)*0.5);vec2 center=vec2(0.5);uv=center+(uv-center)*(1.0-uZoom*0.5);fragColor=vec4(texture(uMap,uv).rgb,uAlpha);}`;
    function hw(i, t, e) {
        return Math.min(Math.max(i, t), e)
    }
    function Pm(i) {
        return hw(i, 0, 1)
    }
    function Mm(i, t, e, r, s) {
        return (i - t) / (e - t) * (s - r) + r
    }
    var so = class {
        constructor({ gl: t, camera: e, images: r = [], mode: s = "desktop", options: n }) {
            this.gl = t,
                this.images = r.map(a => re(Ct({}, a), {
                    isLoaded: !1,
                    textures: {}
                })),
                this.mode = s,
                this.planes = [],
                this.camera = e,
                this.baseCameraPosition = this.camera.position.clone(),
                this.loops = 2;
            let o = {
                rotationSpeed: .1,
                maxScrollRotationSpeed: .5,
                enableOppositeDirection: !1,
                maxScrollVelocity: 15,
                maxScrollRadius: .24,
                cameraAmplitudeX: 1,
                cameraAmplitudeY: 1,
                bendSides: .25,
                zoom: .2,
                maxZoom: .2,
                radius: 3,
                introStartPosition: new S(0, 10, 11)
            };
            this.options = Ct(Ct({}, o), n),
                this.mouse = {
                    x: 0,
                    y: 0
                },
                this.factors = {
                    scrollVelocity: 0,
                    scrollRadius: 0,
                    zoom: 0,
                    cameraX: 0,
                    cameraY: 0,
                    quickToRadiusDuration: {
                        desktop: .3,
                        mobile: .2
                    },
                    quickToZoomDuration: {
                        desktop: .3,
                        mobile: .2
                    },
                    quickToCameraDuration: 1
                },
                this.factors.quickToRadius = I.quickTo(this.factors, "scrollRadius", {
                    duration: this.factors.quickToRadiusDuration[this.mode],
                    ease: "power2",
                    onUpdate: () => {
                        let a = this.options.radius + this.options.maxScrollRadius * this.factors.scrollRadius;
                        this.positionPlanes(a),
                            this.bend = this.getBendFromRadius(a),
                            this.planes.forEach(l => {
                                l.program.uniforms.uBend.value = this.bend
                            }
                            )
                    }
                }),
                this.factors.quickToCameraX = I.quickTo(this.camera.position, "x", {
                    duration: this.factors.quickToCameraDuration,
                    ease: "power2"
                }),
                this.factors.quickToCameraY = I.quickTo(this.camera.position, "y", {
                    duration: this.factors.quickToCameraDuration,
                    ease: "power2"
                }),
                this.factors.quickToZoom = I.quickTo(this.factors, "zoom", {
                    duration: this.factors.quickToZoomDuration[this.mode],
                    ease: "power2",
                    onUpdate: () => {
                        let a = this.options.zoom + this.options.maxZoom * this.factors.zoom;
                        this.planes.forEach(l => {
                            l.program.uniforms.uZoom.value = a
                        }
                        )
                    }
                }),
                this.enableRotation = !1,
                this.scene = new bt,
                this.group = new bt,
                this.cameraTarget = new bt,
                this.cameraTarget.setParent(this.scene),
                this.bend = this.getBendFromRadius(),
                this.group.setParent(this.scene),
                this.createPlanes(),
                this.isIntroDone = !1,
                this.introTimeline = this.createAppearTimeline(),
                this.outro = this.createOutro()
        }
        createPlanes() {
            let t = new Zt(this.gl, {
                width: 1,
                height: .5625,
                heightSegments: 1,
                widthSegments: 100
            });
            for (let e = 0; e < this.loops; e++)
                this.images.forEach((r, s) => {
                    let n = new Y(this.gl, {
                        vertex: Em,
                        fragment: Cm,
                        cullFace: !1,
                        transparent: !0,
                        uniforms: {
                            uMap: {
                                value: new ht(this.gl)
                            },
                            uImageSize: {
                                value: new et(0, 0)
                            },
                            uPlaneSize: {
                                value: new et(1, .5625)
                            },
                            uBend: {
                                value: this.bend
                            },
                            uBendSides: {
                                value: this.options.bendSides
                            },
                            uAlpha: {
                                value: 0
                            },
                            uZoom: {
                                value: this.options.zoom
                            }
                        }
                    })
                        , o = new q(this.gl, {
                            geometry: t,
                            program: n
                        });
                    o.name = this.images[s].name + "-" + (e + 1),
                        this.positionPlane(o, s + e * this.images.length),
                        o.setParent(this.group),
                        this.planes.push(o)
                }
                )
        }
        positionPlanes(t) {
            this.planes.forEach((e, r) => this.positionPlane(e, r, t))
        }
        positionPlane(t, e, r = this.options.radius) {
            let s = e / (this.images.length * this.loops) * Math.PI * 2 - Math.PI / 2
                , n = Math.cos(s) * r
                , o = Math.sin(s) * r;
            t.position.set(n, 0, o),
                t.lookAt([0, 0, 0])
        }
        getBendFromRadius(t = this.options.radius) {
            var e, r;
            let s = -t / (this.loops * this.images.length);
            return (r = (e = this.debug) == null ? void 0 : e.bendControl) == null || r.refresh(),
                s
        }
        prepare() {
            return se(this, null, function* () {
                return yield this.load()
            })
        }
        load() {
            return se(this, null, function* () {
                this.debug && console.log("Experience: loading " + this.images.length + " images");
                let t = [];
                this.images.forEach((e, r) => {
                    let s = e.desktop;
                    if (!s)
                        return;
                    let n = li.load(s).then(o => {
                        for (let a = 0; a < this.loops; a++)
                            this.planes[r + a * this.images.length].program.uniforms.uMap.value.image = o,
                                this.planes[r + a * this.images.length].program.uniforms.uImageSize.value.set(o.naturalWidth, o.naturalHeight)
                    }
                    );
                    t.push(n)
                }
                ),
                    yield Promise.all(t)
            })
        }
        render(t, e) {
            var r, s, n, o;
            if (this.enableRotation) {
                let a = this.options.rotationSpeed + this.options.maxScrollRotationSpeed * this.factors.scrollVelocity + this.outro.rotationAdd;
                this.group.rotation.y -= a * (e / 1e3)
            }
            this.camera.lookAt(this.cameraTarget.position),
                this.isIntroDone && ((s = (r = this.factors).quickToCameraX) == null || s.call(r, this.mouse.x * this.outro.mouseReducerFactorX + this.outro.mouseAddX),
                    (o = (n = this.factors).quickToCameraY) == null || o.call(n, this.mouse.y * this.outro.mouseReducerFactorY + this.outro.mouseAddY))
        }
        resize({ width: t, height: e }) { }
        onPointerMove(t, e) {
            if (!this.isIntroDone)
                return;
            let r = (t / window.innerWidth * 2 - 1) * this.options.cameraAmplitudeX
                , s = (e / window.innerHeight * 2 - 1) * this.options.cameraAmplitudeY;
            this.mouse.x = r,
                this.mouse.y = -s
        }
        onPointerOut() {
            this.isIntroDone && (this.mouse.x = this.baseCameraPosition.x,
                this.mouse.y = this.baseCameraPosition.y)
        }
        createAppearTimeline(t = 3) {
            if (this.introTimeline)
                return this.introTimeline;
            let e = I.timeline({
                paused: !0,
                onStart: () => {
                    this.isIntroDone = !1
                }
                ,
                onComplete: () => {
                    var r, s;
                    this.isIntroDone = !0,
                        (s = (r = this.debug) == null ? void 0 : r.alphaControls) == null || s.forEach(n => {
                            n.refresh()
                        }
                        )
                }
            });
            return e.add("start").fromTo(this.cameraTarget.position, {
                x: 0,
                y: 0,
                z: 0
            }, {
                duration: t,
                x: this.planes[0].position.x,
                y: this.planes[0].position.y,
                z: this.planes[0].position.z,
                ease: "power2.inOut"
            }, "start").fromTo(this.camera.position, {
                x: () => this.options.introStartPosition.x,
                y: () => this.options.introStartPosition.y,
                z: () => this.options.introStartPosition.z
            }, {
                duration: t,
                keyframes: {
                    x: [() => this.options.introStartPosition.x, 0, this.baseCameraPosition.x],
                    y: [() => this.options.introStartPosition.y, 5, this.baseCameraPosition.y],
                    z: [() => this.options.introStartPosition.z, 8, this.baseCameraPosition.z],
                    easeEach: "none",
                    ease: "power2.inOut"
                }
            }, "start").fromTo(this.group.rotation, {
                y: Math.PI * 2 * Math.sign(this.options.rotationSpeed)
            }, {
                duration: t * .85,
                y: 0,
                ease: "power2.inOut"
            }, "start").fromTo(this.options, {
                rotationSpeed: 0
            }, {
                duration: t * .15,
                rotationSpeed: this.options.rotationSpeed,
                ease: "none",
                onStart: () => {
                    var r, s;
                    this.enableRotation = !0,
                        (s = (r = this.debug) == null ? void 0 : r.enableRotationControl) == null || s.refresh()
                }
                ,
                onComplete: () => {
                    var r, s;
                    (s = (r = this.debug) == null ? void 0 : r.rotationSpeedControl) == null || s.refresh()
                }
            }, "start+=" + t * .85).fromTo(this.planes.map(r => r.program.uniforms.uAlpha), {
                value: 0
            }, {
                duration: t * .45,
                value: 1,
                ease: "none",
                stagger: {
                    amount: t * .3,
                    from: "edges"
                }
            }, "start+=" + t * .05),
                e
        }
        appear(t = 3) {
            var e, r, s, n;
            return this.isIntroDone = !1,
                (e = this.introTimeline) == null || e.invalidate().pause().progress(0).duration(t).play(),
                (s = (r = this.debug) == null ? void 0 : r.pausedIntro) != null && s.value && ((n = this.introTimeline) == null || n.pause()),
                this.introTimeline
        }
        createOutro() {
            let t = I.timeline({
                paused: !0
            })
                , e = 1;
            return this.outro = {
                timeline: t,
                mouseReducerFactorX: 1,
                mouseReducerFactorY: 1,
                mouseAddX: 0,
                mouseAddY: 0,
                rotationAdd: 0
            },
                t.add("start").to(this.outro, {
                    duration: e * .5,
                    ease: "none",
                    mouseReducerFactorX: 0,
                    mouseReducerFactorY: .5
                }, "start").to(this.outro, {
                    duration: e,
                    ease: "none",
                    mouseAddY: 2,
                    rotationAdd: () => 1.1 * Math.sign(this.options.rotationSpeed)
                }, "start").to(this.camera.position, {
                    duration: e,
                    ease: "power1.in",
                    z: 10
                }, "start").to(this.planes.map(r => r.program.uniforms.uAlpha), {
                    duration: e * .5,
                    value: 0,
                    ease: "power1.in",
                    stagger: {
                        amount: e * .3
                    }
                }, "start+=" + e * .5),
                this.outro
        }
        onProgress(t) {
            var e;
            (e = this.outro.timeline) == null || e.progress(t)
        }
        onScroll(t) {
            var e, r, s, n;
            if (!this.isIntroDone)
                return;
            let o = Pm(Mm(Math.abs(t), 0, this.options.maxScrollVelocity, 0, 1))
                , a = t > 0 ? 1 : -1;
            this.factors.scrollVelocity = o * (this.options.enableOppositeDirection ? a : 1),
                (r = (e = this.factors).quickToRadius) == null || r.call(e, o * a),
                (n = (s = this.factors).quickToZoom) == null || n.call(s, o * a)
        }
        setMode(t) {
            var e, r;
            this.mode = t,
                (e = this.factors.quickToRadius) == null || e.tween.duration(this.factors.quickToRadiusDuration[t]),
                (r = this.factors.quickToZoom) == null || r.tween.duration(this.factors.quickToZoomDuration[t])
        }
        debugMode(t) {
            var e, r, s, n, o, a, l, h, c, u, d, f, m, p, v, g, w;
            let b = (e = t == null ? void 0 : t.gui) == null ? void 0 : e.addBinding(this, "enableRotation")
                , x = (r = t == null ? void 0 : t.gui) == null ? void 0 : r.addBinding(this.options, "rotationSpeed", {
                    min: -2,
                    max: 2
                });
            (s = t == null ? void 0 : t.gui) == null || s.addBinding(this.options, "radius", {
                min: 0,
                max: 10
            }).on("change", () => {
                this.positionPlanes(),
                    this.bend = this.getBendFromRadius()
            }
            );
            let _ = (n = t == null ? void 0 : t.gui) == null ? void 0 : n.addBinding(this, "bend", {
                min: -1,
                max: 1
            }).on("change", () => {
                this.planes.forEach(A => {
                    A.program.uniforms.uBend.value = this.bend
                }
                )
            }
            );
            (o = t == null ? void 0 : t.gui) == null || o.addBinding(this.options, "bendSides", {
                min: -1,
                max: 1
            }).on("change", () => {
                this.planes.forEach(A => {
                    A.program.uniforms.uBendSides.value = this.options.bendSides
                }
                )
            }
            ),
                (a = t == null ? void 0 : t.gui) == null || a.addBinding(this.options, "zoom", {
                    min: 0,
                    max: 1
                }).on("change", () => {
                    this.planes.forEach(A => {
                        A.program.uniforms.uZoom.value = this.options.zoom
                    }
                    )
                }
                ),
                (l = t == null ? void 0 : t.gui) == null || l.addBlade({
                    view: "separator"
                }),
                (h = t == null ? void 0 : t.gui) == null || h.addBinding(this.options, "introStartPosition", {
                    label: "cam start"
                }).on("change", () => {
                    var A;
                    (A = this.introTimeline) == null || A.invalidate()
                }
                );
            let y = (c = t == null ? void 0 : t.gui) == null ? void 0 : c.addButton({
                title: "Start intro animation"
            });
            y == null || y.on("click", () => this.appear()),
                this.debug = {
                    enableRotationControl: b,
                    rotationSpeedControl: x,
                    bendControl: _,
                    alphaControls: [],
                    pausedIntro: {
                        value: !1
                    }
                };
            let P = (u = t == null ? void 0 : t.gui) == null ? void 0 : u.addBinding(this.debug.pausedIntro, "value", {
                label: "Pause anim ?"
            }).on("change", () => {
                var A, T;
                this.debug.pausedIntro.value ? (A = this.introTimeline) == null || A.pause() : (T = this.introTimeline) == null || T.play()
            }
            );
            this.debug.pausedControl = P,
                y == null || y.on("click", () => this.appear()),
                (d = t == null ? void 0 : t.gui) == null || d.addBlade({
                    view: "separator"
                });
            let E = (f = t == null ? void 0 : t.gui) == null ? void 0 : f.addTab({
                pages: [{
                    title: "SCROLL"
                }, {
                    title: "MOUSE"
                }]
            });
            E == null || E.pages[0].addBinding(this.options, "maxScrollVelocity", {
                min: 1,
                max: 40,
                label: "max velocity"
            }),
                E == null || E.pages[0].addBlade({
                    view: "separator"
                }),
                E == null || E.pages[0].addBinding(this.options, "maxScrollRotationSpeed", {
                    min: -1,
                    max: 1,
                    label: "rotation boost"
                }),
                E == null || E.pages[0].addBinding(this.options, "enableOppositeDirection", {
                    label: "enable reverse"
                }),
                E == null || E.pages[0].addBlade({
                    view: "separator"
                }),
                E == null || E.pages[0].addBinding(this.options, "maxScrollRadius", {
                    min: -this.options.radius,
                    max: this.options.radius,
                    label: "radius boost"
                });
            let C = {
                radius: (m = this.factors.quickToRadius) == null ? void 0 : m.tween.duration(),
                zoom: (p = this.factors.quickToZoom) == null ? void 0 : p.tween.duration(),
                camera: (v = this.factors.quickToCameraX) == null ? void 0 : v.tween.duration()
            };
            E == null || E.pages[0].addBinding(C, "radius", {
                min: 0,
                max: 2,
                label: "radius smoothness"
            }).on("change", () => {
                var A;
                C.radius && ((A = this.factors.quickToRadius) == null || A.tween.duration(C.radius))
            }
            ),
                E == null || E.pages[0].addBlade({
                    view: "separator"
                }),
                E == null || E.pages[0].addBinding(this.options, "maxZoom", {
                    min: -1,
                    max: 1,
                    label: "zoom boost"
                }),
                E == null || E.pages[0].addBinding(C, "zoom", {
                    min: 0,
                    max: 2,
                    label: "zoom smoothness"
                }).on("change", () => {
                    var A;
                    C.zoom && ((A = this.factors.quickToZoom) == null || A.tween.duration(C.zoom))
                }
                ),
                E == null || E.pages[1].addBinding(this.options, "cameraAmplitudeX", {
                    min: 0,
                    max: 2,
                    label: "amplitude X"
                }),
                E == null || E.pages[1].addBinding(this.options, "cameraAmplitudeY", {
                    min: 0,
                    max: 2,
                    label: "amplitude Y"
                }),
                E == null || E.pages[1].addBinding(C, "camera", {
                    min: 0,
                    max: 2,
                    label: "smoothness"
                }).on("change", () => {
                    var A, T;
                    C.camera && ((A = this.factors.quickToCameraX) == null || A.tween.duration(C.camera),
                        (T = this.factors.quickToCameraY) == null || T.tween.duration(C.camera))
                }
                ),
                (g = t == null ? void 0 : t.gui) == null || g.addBlade({
                    view: "separator"
                });
            let M = (w = t == null ? void 0 : t.gui) == null ? void 0 : w.addFolder({
                title: "Meshes",
                expanded: !1
            });
            this.planes.forEach(A => {
                var T, O;
                let k = t == null ? void 0 : t.createForObject(A, M)
                    , F = k == null ? void 0 : k.addBinding(A.program.uniforms.uAlpha, "value", {
                        min: 0,
                        max: 1,
                        label: "alpha"
                    });
                F && ((O = (T = this.debug) == null ? void 0 : T.alphaControls) == null || O.push(F))
            }
            )
        }
    }
        ;
    var Jv = i => {
        throw TypeError(i)
    }
        , Hc = (i, t, e) => t.has(i) || Jv("Cannot " + e), L = (i, t, e) => (Hc(i, t, "read from private field"),
            e ? e.call(i) : t.get(i)), de = (i, t, e) => t.has(i) ? Jv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), Fe = (i, t, e, r) => (Hc(i, t, "write to private field"),
                r ? r.call(i, e) : t.set(i, e),
                e), ie = (i, t, e) => (Hc(i, t, "access private method"),
                    e), ft, So, Rr, To, ks, Zi, j, yt, Fr, ee, mi, Bt, tg, Yv, Xv, Kv, Qv, eg, Zv, ig, rg, Mo, sg, Ao = class {
                        constructor({ container: t, images: e = [], mobileBreakpoint: r = 600, options: s }) {
                            de(this, Bt),
                                de(this, ft),
                                de(this, So, ie(this, Bt, rg).bind(this)),
                                de(this, Rr, ie(this, Bt, ig).bind(this)),
                                de(this, To, ie(this, Bt, eg).bind(this)),
                                de(this, ks),
                                de(this, Zi),
                                de(this, j),
                                de(this, yt),
                                de(this, Fr),
                                de(this, ee),
                                de(this, mi),
                                this.container = t,
                                this.mobileBreakpoint = r,
                                Fe(this, ee, {
                                    desktop: new S(0, 0, .1),
                                    mobile: new S(0, 0, 2)
                                }),
                                this.render = this.render.bind(this),
                                this.experience = ie(this, Bt, tg).call(this, e, s)
                        }
                        prepare() {
                            return se(this, null, function* () {
                                if (L(this, mi) || !this.experience)
                                    return Promise.resolve();
                                yield this.experience.prepare(),
                                    Fe(this, mi, !0),
                                    this.running = !0,
                                    window.location.hash === "#debug" && (yield ie(this, Bt, sg).call(this))
                            })
                        }
                        getIntroTimeline() {
                            return this.experience.introTimeline
                        }
                        appear(t = 3) {
                            return this.experience.appear(t)
                        }
                        onProgress(t) {
                            L(this, mi) && t !== void 0 && this.experience.onProgress(t)
                        }
                        onScroll(t) {
                            L(this, mi) && this.experience.onScroll(t)
                        }
                        render(t, e) {
                            var r, s, n, o, a, l, h, c;
                            !L(this, mi) || !this.running || !L(this, Fr) || (this.experience.render(t, e),
                                (r = L(this, j)) == null || r.controls.update(),
                                (n = (s = L(this, j)) == null ? void 0 : s.orbitPositionControl) == null || n.refresh(),
                                (a = (o = L(this, j)) == null ? void 0 : o.orbitRotationControl) == null || a.refresh(),
                                (l = L(this, j)) == null || l.cameraHelper.position.set(L(this, yt).position.x, L(this, yt).position.y, L(this, yt).position.z - L(this, j).cameraHelperHeight),
                                (h = L(this, j)) == null || h.cameraHelper.rotation.set(L(this, yt).rotation.x + Math.PI * .5, L(this, yt).rotation.y, L(this, yt).rotation.z),
                                (c = L(this, ft)) == null || c.render({
                                    scene: this.experience.scene,
                                    camera: L(this, Fr)
                                }))
                        }
                        destroy() {
                            var t, e, r, s;
                            Fe(this, mi, !1),
                                this.running = !1,
                                "ontouchstart" in window || (window.removeEventListener("pointermove", L(this, So)),
                                    window.removeEventListener("pointerleave", L(this, Rr)),
                                    window.removeEventListener("pointerout", L(this, Rr))),
                                (t = L(this, ks)) == null || t.disconnect(),
                                (e = L(this, Zi)) == null || e.removeEventListener("change", L(this, To)),
                                (r = L(this, j)) == null || r.guiManager.destroy(),
                                (s = L(this, j)) == null || s.controls.remove()
                        }
                    }
        ;
    ft = new WeakMap,
        So = new WeakMap,
        Rr = new WeakMap,
        To = new WeakMap,
        ks = new WeakMap,
        Zi = new WeakMap,
        j = new WeakMap,
        yt = new WeakMap,
        Fr = new WeakMap,
        ee = new WeakMap,
        mi = new WeakMap,
        Bt = new WeakSet,
        tg = function (i, t) {
            var e;
            return ie(this, Bt, Qv).call(this),
                ie(this, Bt, Yv).call(this),
                ie(this, Bt, Xv).call(this),
                ie(this, Bt, Kv).call(this),
                this.experience = new so({
                    gl: L(this, ft).gl,
                    images: i,
                    camera: L(this, yt),
                    mode: (e = L(this, Zi)) != null && e.matches ? "mobile" : "desktop",
                    options: t
                }),
                ie(this, Bt, Zv).call(this),
                ie(this, Bt, Mo).call(this),
                this.experience
        }
        ,
        Yv = function () {
            Fe(this, ft, new cr({
                dpr: Math.min(window.devicePixelRatio, 2),
                width: this.container.offsetWidth,
                height: this.container.offsetHeight,
                powerPreference: "high-performance",
                alpha: !0,
                antialias: !0
            })),
                L(this, ft).gl.clearColor(0, 0, 0, 0),
                L(this, ft).gl.canvas.style.position = "relative",
                L(this, ft).gl.canvas.style.width = "100%",
                L(this, ft).gl.canvas.style.height = "100%",
                this.container.appendChild(L(this, ft).gl.canvas)
        }
        ,
        Xv = function () {
            Fe(this, yt, new ve(L(this, ft).gl, {
                fov: 45
            })),
                L(this, yt).position.copy(L(this, ee)[this.mode]),
                L(this, yt).lookAt([0, 0, 0]),
                Fe(this, Fr, L(this, yt))
        }
        ,
        Kv = function () {
            Fe(this, ks, new ResizeObserver(i => {
                if (!i.length)
                    return;
                let { inlineSize: t, blockSize: e } = i[0].contentBoxSize[0];
                ie(this, Bt, Mo).call(this, {
                    width: t,
                    height: e
                })
            }
            )),
                L(this, ks).observe(this.container)
        }
        ,
        Qv = function () {
            var i;
            Fe(this, Zi, window.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`)),
                L(this, Zi).addEventListener("change", L(this, To)),
                this.mode = (i = L(this, Zi)) != null && i.matches ? "mobile" : "desktop"
        }
        ,
        eg = function ({ matches: i }) {
            this.mode = i ? "mobile" : "desktop",
                this.experience.setMode(i ? "mobile" : "desktop")
        }
        ,
        Zv = function () {
            "ontouchstart" in window || (window.addEventListener("pointermove", L(this, So), !1),
                window.addEventListener("pointerleave", L(this, Rr), !1),
                window.addEventListener("pointerout", L(this, Rr), !1))
        }
        ,
        ig = function () {
            this.experience.onPointerOut()
        }
        ,
        rg = function (i) {
            this.experience.onPointerMove(i.clientX, i.clientY)
        }
        ,
        Mo = function ({ width: i = this.container.offsetWidth, height: t = this.container.offsetHeight } = {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        }) {
            var e, r;
            if (!L(this, ft))
                return;
            L(this, ft).dpr = Math.min(window.devicePixelRatio, 2),
                L(this, ft).setSize(i, t);
            let s = L(this, ft).gl.canvas.width / L(this, ft).gl.canvas.height;
            (e = L(this, yt)) == null || e.perspective({
                aspect: s
            }),
                (r = L(this, j)) == null || r.camera.perspective({
                    aspect: s
                }),
                this.experience.resize({
                    width: i,
                    height: t
                })
        }
        ,
        sg = function () {
            return se(this, null, function* () {
                var i, t, e, r, s, n;
                let { default: o } = yield Promise.resolve().then(() => (Gv(),
                    $v))
                    , { Orbit: a } = yield Promise.resolve().then(() => (ro(),
                        xm))
                    , l = .4
                    , h = new fr(L(this, ft).gl, {
                        radiusTop: 0,
                        radiusBottom: l * .33,
                        height: l
                    })
                    , c = new gr(L(this, ft).gl)
                    , u = new q(L(this, ft).gl, {
                        geometry: h,
                        program: c
                    })
                    , d = new ve(L(this, ft).gl, {
                        fov: L(this, yt).fov,
                        near: .01,
                        far: 1e3
                    })
                    , f = !1;
                u.position.set(L(this, ee)[this.mode].x, L(this, ee)[this.mode].y, L(this, ee)[this.mode].z - l * .5),
                    u.rotation.set(Math.PI * .5, 0, 0),
                    u.setParent(this.experience.scene),
                    u.visible = !1,
                    d.position.set(L(this, ee)[this.mode].x, L(this, ee)[this.mode].y, L(this, ee)[this.mode].z + l * .5),
                    d.lookAt([0, 0, 0]),
                    Fe(this, j, {
                        orbit: f,
                        camera: d,
                        cameraHelperHeight: l * .5,
                        cameraHelper: u,
                        guiManager: new o,
                        controls: new a(d, {
                            enabled: f,
                            element: this.container,
                            enablePan: !1
                        }),
                        orbitPositionControl: void 0,
                        orbitRotationControl: void 0
                    }),
                    (i = L(this, j).guiManager.gui) == null || i.addBinding(L(this, yt), "fov", {
                        min: 10,
                        max: 120,
                        label: "cameraFOV"
                    }).on("change", () => {
                        var m;
                        let p = L(this, ft).gl.canvas.width / L(this, ft).gl.canvas.height;
                        (m = L(this, yt)) == null || m.perspective({
                            aspect: p
                        }),
                            L(this, j).camera.fov = L(this, yt).fov,
                            L(this, j).camera.perspective({
                                aspect: p
                            })
                    }
                    ),
                    (t = L(this, j).guiManager.gui) == null || t.addBinding(L(this, j), "orbit").on("change", () => {
                        L(this, j).controls.enabled = L(this, j).orbit,
                            Fe(this, Fr, L(this, j).orbit ? L(this, j).camera : L(this, yt)),
                            u.visible = L(this, j).orbit
                    }
                    ),
                    L(this, j).orbitPositionControl = (e = L(this, j).guiManager.gui) == null ? void 0 : e.addBinding(L(this, j).camera, "position", {
                        disabled: !0
                    }),
                    L(this, j).orbitRotationControl = (r = L(this, j).guiManager.gui) == null ? void 0 : r.addBinding(L(this, j).camera, "rotation", {
                        disabled: !0
                    }),
                    (s = L(this, j).guiManager.gui) == null || s.addButton({
                        title: "Reset Orbit"
                    }).on("click", () => {
                        L(this, j).camera.position.set(L(this, ee)[this.mode].x, L(this, ee)[this.mode].y, L(this, ee)[this.mode].z + L(this, j).cameraHelperHeight),
                            L(this, j).camera.lookAt([0, 0, 0]),
                            L(this, j).controls.forcePosition()
                    }
                    ),
                    (n = L(this, j).guiManager.gui) == null || n.addBlade({
                        view: "separator"
                    }),
                    this.experience.debugMode(L(this, j).guiManager),
                    ie(this, Bt, Mo).call(this)
            })
        }
        ;
    var ko = class extends it {
        constructor(i) {
            super(i),
                this.nav = document.querySelector(".o-nav"),
                this.experiment = document.querySelector(".s-hero_experiment"),
                this.logo = this.el.querySelector(".s-hero_logo"),
                this.backgroundStart = this.el.querySelector(".s-hero_background_start"),
                this.title = this.el.querySelector(".s-hero_title"),
                this.content = this.el.querySelector(".s-hero_content"),
                this.tl = null,
                this.rotator = this.el.querySelector(".s-hero_title_rotator"),
                this.rotatorItems = this.rotator.querySelectorAll("li"),
                this.rotatorIndex = 0,
                this.rotatorPrevIndex = null,
                this.rotatorTL = I.timeline({
                    repeatDelay: 4,
                    repeat: -1,
                    paused: !0
                }),
                this.rotatorTL.call(() => {
                    this.updateRotator()
                }
                ),
                this.updateRotator(),
                this.gl = null,
                this.images = [{
                    name: "congreso1",
                    desktop: "/images/congresos1.png"
                }, {
                    name: "congreso2",
                    desktop: "/images/congreso2.png"
                }, {
                    name: "foxglove",
                    desktop: "/images/foxglove.png"
                }, {
                    name: "impresion3d",
                    desktop: "/images/impresion3d.png"
                }, {
                    name: "sate-lite-us",
                    desktop: "/images/sate-lite-us.jpeg"
                }, {
                    name: "trabajo",
                    desktop: "/images/trabajo.png"
                }],
                window.addEventListener("hideBgs", t => {
                    let { target: e, progress: r } = t.detail;
                    this.hideBgs(r)
                }
                ),
                window.addEventListener("toggleBgs", t => {
                    let { target: e, progress: r } = t.detail;
                    this.toggleBgs(r)
                }
                ),
                window.addEventListener("outroGL", t => {
                    let { target: e, progress: r } = t.detail;
                    this.outroGL(r)
                }
                ),
                window.addEventListener("hideContents", t => {
                    let { target: e, progress: r } = t.detail;
                    this.hideContents(r)
                }
                )
        }
        init() {
            return se(this, null, function* () {
                this.gl = new Ao({
                    container: this.experiment,
                    images: this.images,
                    options: {
                        rotationSpeed: -.1,
                        maxScrollRotationSpeed: -.5,
                        enableOppositeDirection: !0,
                        cameraAmplitudeX: 1.1,
                        cameraAmplitudeY: 1.2
                    }
                }),
                    yield this.gl.prepare(),
                    this.startRender(),
                    this.appear()
            })
        }
        startRender() {
            this.gl && I.ticker.add(this.gl.render),
                this.experiment.classList.add("-visible")
        }
        stopRender() {
            this.gl && I.ticker.remove(this.gl.render),
                this.experiment.classList.remove("-visible")
        }
        appear() {
            I.delayedCall(4.8, () => {
                this.playRotator()
            }
            ),
                this.tl = I.timeline({
                    onComplete: () => {
                        this.call("startAndTop", "Scroll")
                    }
                }),
                this.tl.fromTo(this.backgroundStart, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: "none"
                }, 0),
                this.tl.fromTo(this.logo, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .6,
                    ease: "none"
                }, 0);
            let i = this;
            this.gl && this.tl.call(() => {
                i.gl.appear(4)
            }
                , null, 1),
                this.tl.to(this.logo, {
                    autoAlpha: 0,
                    duration: .6,
                    ease: "none"
                }, 2.2),
                this.tl.fromTo(this.nav, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: 1,
                    ease: "none"
                }, 2.2),
                this.tlContents = I.timeline({
                    onStart: () => {
                        this.title.classList.add("-visible"),
                            this.content.classList.add("-visible")
                    }
                }),
                this.title.querySelectorAll(".line").forEach((t, e) => {
                    this.tlContents.fromTo(t.querySelectorAll(".word"), {
                        opacity: 0,
                        y: "101%"
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    }, e == 0 ? 0 : "-=0.85")
                }
                ),
                this.content.querySelectorAll(".line").forEach((t, e) => {
                    this.tlContents.fromTo(t.querySelectorAll(".word"), {
                        opacity: 0,
                        y: "101%"
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    }, "-=0.85")
                }
                ),
                this.tl.add(this.tlContents, 3.5)
        }
        hideBgs(i) {
            this.el.style.setProperty("--bgsProgress", 1 - i)
        }
        toggleBgs(i) {
            this.el.style.setProperty("--bgEndProgress", i)
        }
        outroGL(i) {
            this.experiment.style.setProperty("--hideGL", i),
                this.gl && this.gl.onProgress(i)
        }
        hideContents(i) {
            this.el.style.setProperty("--hideContents", i)
        }
        onScroll(i = {}) {
            this.experiment.classList.contains("-visible") && this.gl && this.gl.onScroll(i.velocity)
        }
        toggleGL(i) {
            i.way == "leave" && i.from == "end" && (this.stopRender(),
                this.rotatorTL.pause()),
                i.way == "enter" && i.from == "end" && (this.startRender(),
                    this.playRotator())
        }
        playRotator() {
            this.rotatorTL.play()
        }
        updateRotator() {
            let i = this.rotatorItems[this.rotatorIndex];
            I.to(this.rotator, {
                width: i.offsetWidth,
                duration: .8,
                ease: "power4.out"
            }),
                this.rotatorPrevIndex != null && I.to(this.rotatorItems[this.rotatorPrevIndex], {
                    opacity: 0,
                    duration: .25,
                    ease: "none"
                }),
                I.fromTo(i, {
                    y: "101%",
                    opacity: 0
                }, {
                    y: "0%",
                    opacity: 1,
                    duration: .8,
                    ease: "power4.out",
                    delay: 0,
                    onComplete: () => {
                        this.rotatorPrevIndex = this.rotatorIndex,
                            this.rotatorIndex = this.rotatorIndex == this.rotatorItems.length - 1 ? 0 : this.rotatorIndex + 1
                    }
                })
        }
    }
        ;
    var Oo = class extends it {
        constructor(i) {
            super(i),
                this.aside = this.el.querySelector(".s-portfolio_aside"),
                this.nav = this.el.querySelector(".s-portfolio_nav"),
                this.navItems = this.el.querySelectorAll(".s-portfolio_nav_item"),
                this.progress = this.el.querySelector(".s-portfolio_progress"),
                this.targets = this.el.querySelectorAll(".s-portfolio_target"),
                this.items = [],
                this.navItems.forEach(t => {
                    let e = t.getAttribute("data-index");
                    this.items.push({
                        id: e,
                        nav: t,
                        bg: this.el.querySelector('.s-portfolio_background[data-index="' + e + '"]'),
                        wrap: this.el.querySelector('.s-portfolio_content[data-index="' + e + '"]'),
                        intro: this.el.querySelector('.s-portfolio_content[data-index="' + e + '"] .s-portfolio_content_intro'),
                        content: this.el.querySelector('.s-portfolio_content[data-index="' + e + '"] .s-portfolio_content_text'),
                        tlShow: null,
                        tlHide: null
                    }),
                        t.addEventListener("click", r => {
                            r.preventDefault();
                            let s = t.getAttribute("data-index")
                                , n = this.el.querySelector('.s-portfolio_target[data-index="' + s + '"]');
                            n && this.call("scrollTo", {
                                target: n
                            }, "Scroll")
                        }
                        )
                }
                ),
                this.zindex = 1,
                this.visibleClass = "-visible",
                this.activeClass = "-active",
                this.tlNavShow = null,
                this.tlNavHide = null,
                window.addEventListener("portfolioProgress", t => {
                    let { target: e, progress: r } = t.detail;
                    this.el.style.setProperty("--progress", r)
                }
                )
        }
        getItem(i) {
            return this.items.find(t => t.id == i)
        }
        inview(i) {
            i.way == "enter" ? this.showNav() : this.hideNav()
        }
        showNav() {
            this.tlNavHide && this.tlNavHide.pause(),
                this.tlNavShow = I.timeline({
                    onStart: () => {
                        this.aside.classList.add(this.visibleClass)
                    }
                }),
                this.tlNavShow.fromTo(this.navItems, {
                    opacity: 0,
                    x: "100%"
                }, {
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    ease: "power4.out",
                    stagger: {
                        each: .05
                    }
                }, 0),
                this.tlNavShow.fromTo(this.progress, {
                    scaleY: 0,
                    opacity: 0,
                    x: 20
                }, {
                    scaleY: 1,
                    opacity: 1,
                    x: 0,
                    duration: .6,
                    ease: "power4.out"
                }, 0)
        }
        hideNav() {
            this.tlNavShow && this.tlNavShow.pause(),
                this.tlNavHide = I.timeline({
                    onComplete: () => {
                        this.aside.classList.remove(this.visibleClass)
                    }
                }),
                this.tlNavHide.to(this.navItems, {
                    opacity: 0,
                    x: "100%",
                    duration: .4,
                    ease: "power4.out",
                    stagger: {
                        each: .02,
                        from: "end"
                    }
                }, 0),
                this.tlNavHide.to(this.progress, {
                    opacity: 0,
                    duration: .4,
                    ease: "power4.out"
                }, 0)
        }
        activeSub(i) {
            let e = i.target.getAttribute("data-index")
                , r = this.getItem(e);
            i.way == "enter" ? (r.nav.classList.add(this.activeClass),
                this.zindex++,
                r.bg.style.zIndex = this.zindex,
                r.tlHide && r.tlHide.pause(),
                r.tlShow ? r.tlShow.restart() : (r.tlShow = this.getShowTL(e),
                    r.tlShow.play())) : (r.nav.classList.remove(this.activeClass),
                        r.tlShow && r.tlShow.pause(),
                        r.tlHide ? r.tlHide.restart() : (r.tlHide = this.getHideTL(e),
                            r.tlHide.play()))
        }
        getShowTL(i) {
            let t = this.getItem(i)
                , e = I.timeline({
                    paused: !0
                });
            return e.fromTo(t.bg, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .4,
                ease: "none"
            }, 0),
                e.fromTo(t.bg.querySelector("img"), {
                    scale: 1.1
                }, {
                    scale: 1,
                    duration: 1.6,
                    ease: "power4.out"
                }, 0),
                e.set(t.intro, {
                    autoAlpha: 1
                }, 0),
                t.intro.querySelectorAll(".line").forEach((r, s) => {
                    e.fromTo(r.querySelectorAll(".word"), {
                        opacity: 0,
                        y: "101%"
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    }, .1 + s * .08)
                }
                ),
                e.fromTo(t.content, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .4,
                    ease: "none"
                }, .5),
                e
        }
        getHideTL(i) {
            let t = this.getItem(i)
                , e = I.timeline({
                    paused: !0
                });
            return e.to(t.bg, {
                opacity: 0,
                duration: .4,
                ease: "none"
            }, 0),
                e.to(t.intro.querySelectorAll(".word"), {
                    opacity: 0,
                    duration: .4,
                    ease: "power4.out"
                }, 0),
                e.to(t.content, {
                    opacity: 0,
                    duration: .2,
                    ease: "none"
                }, 0),
                e.set(t.intro, {
                    autoAlpha: 0
                }, .45),
                e.set(t.content, {
                    autoAlpha: 0
                }, .25),
                e
        }
    }
        ;
    var Lo = class extends it {
        constructor(i) {
            super(i),
                this.titlesWrap = this.el.querySelector(".s-manifesto_titles"),
                this.contentsWrap = this.el.querySelector(".s-manifesto_contents"),
                this.bgImg = this.el.querySelector(".o-section_background img"),
                this.items = [],
                this.el.querySelectorAll(".s-manifesto_title").forEach(t => {
                    let e = t.getAttribute("data-item");
                    this.items.push({
                        title: t,
                        content: this.el.querySelector('.s-manifesto_content[data-item="' + e + '"]'),
                        tlShow: null,
                        tlHide: null
                    })
                }
                ),
                window.addEventListener("manifestoShow", t => {
                    let { target: e, progress: r } = t.detail;
                    this.showManifesto(r)
                }
                ),
                window.addEventListener("manifestoHide", t => {
                    let { target: e, progress: r } = t.detail;
                    this.hideManifesto(r)
                }
                ),
                window.addEventListener("manifestoProgress", t => {
                    let { target: e, progress: r } = t.detail;
                    I.to(this.bgImg, {
                        scale: 1 + r * .2,
                        duration: .4,
                        ease: "power2.out"
                    })
                }
                )
        }
        init() { }
        getShowTL(i) {
            let t = this.items[i]
                , e = I.timeline({
                    paused: !0
                });
            return e.fromTo(t.title.querySelectorAll(".char"), {
                opacity: 0,
                scale: .6
            }, {
                opacity: 1,
                scale: 1,
                duration: .6,
                stagger: {
                    each: .04,
                    from: "end"
                },
                ease: "power4.out"
            }),
                e.set(t.content, {
                    autoAlpha: 1
                }, 0),
                t.content.querySelectorAll(".line").forEach((r, s) => {
                    e.fromTo(r.querySelectorAll(".word"), {
                        opacity: 0,
                        y: "101%"
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: .6,
                        ease: "power4.out"
                    }, .1 + s * .06)
                }
                ),
                e
        }
        getHideTL(i) {
            let t = this.items[i]
                , e = I.timeline({
                    paused: !0
                });
            return e.fromTo(t.title.querySelectorAll(".char"), {
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: .8,
                duration: .6,
                stagger: {
                    each: .04,
                    from: "end"
                },
                ease: "power4.out"
            }),
                e.fromTo(t.content.querySelectorAll(".word"), {
                    opacity: 1
                }, {
                    opacity: 0,
                    duration: .4,
                    ease: "power4.out"
                }, 0),
                e.set(t.content, {
                    autoAlpha: 0
                }, .45),
                e
        }
        activeItem(i) {
            let t = i.target
                , e = parseInt(t.getAttribute("data-item"));
            i.way == "enter" ? (this.items[e].tlHide && this.items[e].tlHide.pause(),
                this.items[e].tlShow ? this.items[e].tlShow.restart() : (this.items[e].tlShow = this.getShowTL(e),
                    this.items[e].tlShow.play())) : (this.items[e].tlShow && this.items[e].tlShow.pause(),
                        this.items[e].tlHide ? this.items[e].tlHide.restart() : (this.items[e].tlHide = this.getHideTL(e),
                            this.items[e].tlHide.play()))
        }
        showManifesto(i) {
            this.el.style.setProperty("--progressShow", i)
        }
        hideManifesto(i) {
            this.el.style.setProperty("--progressShow", 1 - i)
        }
        toggleUI(i) {
            if (i.way == "enter") {
                let t = I.timeline();
                t.to(this.el.querySelector(".s-manifesto_ova"), {
                    opacity: 1,
                    duration: .4,
                    ease: "none"
                }, 0),
                    t.to(this.el.querySelector(".s-manifesto_footer"), {
                        opacity: 1,
                        duration: .4,
                        ease: "none"
                    }, 0)
            } else {
                let t = I.timeline();
                t.to(this.el.querySelector(".s-manifesto_ova"), {
                    opacity: 0,
                    duration: .2,
                    ease: "none"
                }, 0),
                    t.to(this.el.querySelector(".s-manifesto_footer"), {
                        opacity: 0,
                        duration: .2,
                        ease: "none"
                    }, 0)
            }
        }
    }
        ;
    var Ro = class extends it {
        constructor(i) {
            super(i),
                this.about = {
                    el: this.el.querySelector(".s-about")
                },
                this.about.title = this.about.el.querySelector(".-h1"),
                this.about.content = this.about.el.querySelector(".s-about_content"),
                this.about.clipMax = Xr.IS_MOBILE ? 200 : 125,
                this.contact = {
                    el: this.el.querySelector(".s-contact")
                },
                this.contact.title = this.contact.el.querySelector(".-h1"),
                this.contact.content = this.contact.el.querySelector(".s-contact_content"),
                this.contact.footer = this.contact.el.querySelector(".o-footer"),
                window.addEventListener("aboutShowBg", t => {
                    let { target: e, progress: r } = t.detail;
                    this.el.style.setProperty("--progressBg", r)
                }
                ),
                window.addEventListener("aboutShowBgContact", t => {
                    let { target: e, progress: r } = t.detail;
                    this.el.style.setProperty("--progressBgContact", r)
                }
                ),
                window.addEventListener("aboutProgressTxt", t => {
                    let { target: e, progress: r } = t.detail;
                    this.tlText && this.tlText.progress(r)
                }
                ),
                window.addEventListener("aboutProgressClip", t => {
                    let { target: e, progress: r } = t.detail;
                    I.to(".s-about_background.-inter", {
                        clipPath: `circle(${r * this.about.clipMax}% at 50% 100%)`,
                        duration: .4,
                        ease: "power2.out"
                    })
                }
                )
        }
        init() {
            this.tlText = I.timeline({
                paused: !0
            }),
                setTimeout(() => {
                    this.tlText.fromTo(this.about.content.querySelectorAll(".char"), {
                        opacity: .3
                    }, {
                        opacity: 1,
                        duration: .5,
                        ease: "none",
                        stagger: .03
                    })
                }
                    , 500)
        }
        showAboutTitle(i) {
            if (i.way == "enter") {
                let t = I.timeline();
                this.about.title.querySelectorAll(".line").forEach((e, r) => {
                    t.fromTo(e.querySelectorAll(".word"), {
                        opacity: 0,
                        y: "101%"
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: .6,
                        ease: "power4.out"
                    }, .1 + r * .06)
                }
                )
            } else
                I.timeline().to(this.about.title.querySelectorAll(".word"), {
                    opacity: 0,
                    y: "-101%",
                    duration: .6,
                    ease: "power4.out"
                }, 0)
        }
        showAboutContent(i) {
            if (i.way == "enter") {
                let t = I.timeline();
                t.set(this.about.content, {
                    autoAlpha: 1
                }),
                    this.about.content.querySelectorAll(".line").forEach((e, r) => {
                        t.fromTo(e.querySelectorAll(".word"), {
                            opacity: 0,
                            y: "101%"
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: .8,
                            ease: "power4.out"
                        }, r * .06)
                    }
                    )
            } else
                I.timeline().to(this.about.content, {
                    autoAlpha: 0,
                    duration: .4,
                    ease: "none"
                }, 0)
        }
        showContact(i) {
            if (i.way == "enter") {
                let t = I.timeline();
                t.set(this.contact.el, {
                    autoAlpha: 1
                }, 0),
                    t.to(this.about.el, {
                        autoAlpha: 0,
                        duration: .2,
                        ease: "none"
                    }, 0),
                    this.contact.title.querySelectorAll(".line").forEach((e, r) => {
                        t.fromTo(e.querySelectorAll(".word"), {
                            opacity: 0,
                            y: "101%"
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: .6,
                            ease: "power4.out"
                        }, r * .06)
                    }
                    ),
                    this.contact.content.querySelectorAll(".line").forEach((e, r) => {
                        I.timeline().fromTo(e.querySelectorAll(".word"), {
                            opacity: 0,
                            y: "101%"
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: .6,
                            ease: "power4.out"
                        }, .2 + r * .06)
                    }
                    ),
                    t.fromTo(this.contact.footer, {
                        autoAlpha: 0,
                        y: "101%"
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power4.out"
                    }, .4)
            } else {
                let t = I.timeline();
                t.to(this.about.el, {
                    autoAlpha: 1,
                    duration: .2,
                    ease: "none"
                }, 0),
                    t.to(this.contact.title.querySelectorAll(".word"), {
                        opacity: 0,
                        duration: .4,
                        ease: "power4.out"
                    }, 0),
                    t.to(this.contact.content.querySelectorAll(".word"), {
                        opacity: 0,
                        duration: .4,
                        ease: "power4.out"
                    }, 0),
                    t.to(this.contact.footer, {
                        autoAlpha: 0,
                        duration: .4,
                        ease: "power4.out"
                    }, 0),
                    t.set(this.contact.el, {
                        autoAlpha: 0
                    }, .45)
            }
        }
    }
        ;
    var ag = bg(og());
    function lg() {
        (0,
            ag.default)()
    }
    var hg = new su({
        modules: Wc
    });
    function cx() {
        lg(),
            sn(),
            hg.init(hg)
    }
    window.addEventListener("load", () => {
        cx()
    }
    );
}
)();
/*! Bundled license information:

tweakpane/dist/tweakpane.js:
  (*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. *)

svg4everybody/dist/svg4everybody.js:
  (*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
