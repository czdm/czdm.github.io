(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function t(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    t("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    t("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ja(a) {
        return a.raw = a
    }

    function v(a) {
        var b = "undefined" != typeof p.Symbol && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function ka(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }

    function la(a) {
        return a instanceof Array ? a : ka(v(a))
    }

    function ma(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var na = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ma(d, e) && (a[e] = d[e])
        }
        return a
    };
    t("Object.assign", function(a) {
        return a || na
    }, "es6");
    var oa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (fa && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function w(a, b) {
        a.prototype = oa(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.cc = b.prototype
    }

    function ua() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    t("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.B = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.P),
                reject: g(this.m)
            }
        };
        b.prototype.P = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.U(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.O(g) : this.v(g)
            }
        };
        b.prototype.O = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.ja(h, g) : this.v(g)
        };
        b.prototype.m = function(g) {
            this.D(2, g)
        };
        b.prototype.v = function(g) {
            this.D(1, g)
        };
        b.prototype.D = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.R();
            this.H()
        };
        b.prototype.R = function() {
            var g = this;
            e(function() {
                if (g.J()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.J =
            function() {
                if (this.B) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.H = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.U = function(g) {
            var h = this.l();
            g.la(h.resolve, h.reject)
        };
        b.prototype.ja = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(u, z) {
                return "function" == typeof u ? function(J) {
                    try {
                        l(u(J))
                    } catch (C) {
                        m(C)
                    }
                } : z
            }
            var l, m, q = new b(function(u, z) {
                l = u;
                m = z
            });
            this.la(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.la = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.B = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = v(g), m = l.next(); !m.done; m = l.next()) d(m.value).la(h, k)
            })
        };
        b.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(J) {
                    return function(C) {
                        u[J] = C;
                        z--;
                        0 == z && l(u)
                    }
                }
                var u = [],
                    z = 0;
                do u.push(void 0), z++, d(k.value).la(q(u.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    t("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    }, "es6");
    t("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ma(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ma(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ma(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ma(g, e) && ma(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    t("Map", function(a) {
        function b() {
            var h = {};
            return h.M = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ia(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.M;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ma(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        C: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                C: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.C ? l.C.value = k : (l.C = {
                next: this.h,
                M: this.h.M,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.C), this.h.M.next = l.C, this.h.M = l.C, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.C && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.C.M.next = h.C.next, h.C.next.M = h.C.M, h.C.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.M = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).C
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).C) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    t("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");

    function wa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    t("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    t("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = wa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    t("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    t("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return r(this.h, "values").call(this.h)
        };
        b.prototype.keys = r(b.prototype,
            "values");
        b.prototype[r(p.Symbol, "iterator")] = r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    t("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    }, "es6");
    t("Array.prototype.values", function(a) {
        return a ? a : function() {
            return va(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    t("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    t("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    t("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== wa(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    t("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = wa(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? r(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    t("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var x = this || self;

    function xa(a) {
        a = a.split(".");
        for (var b = x, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ya(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function za(a) {
        var b = ya(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ga(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ga = Ea : Ga = Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ia(a, b) {
        a = a.split(".");
        var c = x;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ja(a) {
        return a
    };
    var Ka = (new Date).getTime();
    var La = {};

    function Ma(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Na(a, b) {
        var c = 0;
        a = Ma(String(a)).split(".");
        b = Ma(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = Oa(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Oa(0 == f[2].length, 0 == g[2].length) || Oa(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function Oa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Pa() {
        var a = x.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function y(a) {
        return -1 != Pa().indexOf(a)
    };

    function Qa() {
        return y("Trident") || y("MSIE")
    }

    function Ra() {
        return (y("Chrome") || y("CriOS")) && !y("Edge") || y("Silk")
    }

    function Sa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[r(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Ta() {
        var a = Pa();
        if (Qa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Sa(b);
        return y("Opera") ? a(["Version", "Opera"]) :
            y("Edge") ? a(["Edge"]) : y("Edg/") ? a(["Edg"]) : y("Silk") ? a(["Silk"]) : Ra() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ua(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Va(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Wa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Xa(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ya(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Za(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function $a(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ab(a, b) {
        return 0 <= Ua(a, b)
    }

    function bb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function cb(a) {
        cb[" "](a);
        return a
    }
    cb[" "] = function() {};
    var db = Qa();
    !y("Android") || Ra();
    Ra();
    !y("Safari") || Ra();
    var eb = {},
        fb = null;

    function gb(a) {
        var b;
        void 0 === b && (b = 0);
        hb();
        b = eb[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function ib(a) {
        var b = [];
        jb(a, function(c) {
            b.push(c)
        });
        return b
    }

    function jb(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = fb[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        hb();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function hb() {
        if (!fb) {
            fb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                eb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === fb[f] && (fb[f] = e)
                }
            }
        }
    };
    var kb = "undefined" !== typeof Uint8Array,
        lb = {};
    var mb;

    function nb(a) {
        if (lb !== lb) throw Error("illegal external caller");
        this.ya = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    nb.prototype.isEmpty = function() {
        return null == this.ya
    };
    var ob = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function pb(a, b) {
        Object.isFrozen(a) || (ob ? a[ob] |= b : void 0 !== a.X ? a.X |= b : Object.defineProperties(a, {
            X: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function qb(a) {
        var b;
        ob ? b = a[ob] : b = a.X;
        return null == b ? 0 : b
    }

    function rb(a) {
        pb(a, 1);
        return a
    }

    function sb(a) {
        return Array.isArray(a) ? !!(qb(a) & 2) : !1
    }

    function tb(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        pb(a, 2)
    }

    function ub(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? pb(a, 8) : Object.isFrozen(a) || (ob ? a[ob] &= -9 : void 0 !== a.X && (a.X &= -9))
    };

    function vb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var wb, xb = Object.freeze(rb([]));

    function yb(a) {
        if (sb(a.u)) throw Error("Cannot mutate an immutable Message");
    }
    var zb = "undefined" != typeof p.Symbol && "undefined" != typeof p.Symbol.hasInstance;

    function Ab(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function Bb(a, b) {
        var c = void 0 === c ? !1 : c;
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function Cb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (kb && null != a && a instanceof Uint8Array) return gb(a);
                    if (a instanceof nb) {
                        var b = a.ya;
                        b = null == b || "string" === typeof b ? b : kb && b instanceof Uint8Array ? gb(b) : null;
                        return null == b ? "" : a.ya = b
                    }
                }
        }
        return a
    };

    function Db(a) {
        var b = Eb;
        b = void 0 === b ? Fb : b;
        return Gb(a, b)
    }

    function Hb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Gb(a, b);
            else if (vb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Hb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Gb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = Hb(c[d], b);
        Array.isArray(a) && qb(a) & 1 && rb(c);
        return c
    }

    function Eb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Cb(a);
        return Array.isArray(a) ? Db(a) : a
    }

    function Fb(a) {
        return kb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };

    function Ib(a) {
        return a.i || (a.i = a.u[a.j + a.V] = {})
    }

    function A(a, b, c) {
        return -1 === b ? null : b >= a.j ? a.i ? a.i[b] : void 0 : (void 0 === c ? 0 : c) && a.i && (c = a.i[b], null != c) ? c : a.u[b + a.V]
    }

    function B(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        (void 0 === e ? 0 : e) || yb(a);
        b < a.j && !d ? a.u[b + a.V] = c : Ib(a)[b] = c;
        return a
    }

    function Jb(a, b) {
        return Array.isArray(A(a, Kb(a, Lb, b)))
    }

    function Mb(a, b, c, d) {
        c = void 0 === c ? !0 : c;
        var e = A(a, b, d);
        Array.isArray(e) || (e = xb);
        if (sb(a.u)) c && (tb(e), Object.freeze(e));
        else if (e === xb || sb(e)) e = rb(e.slice()), B(a, b, e, d);
        return e
    }

    function Nb(a, b) {
        a = A(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = A(a, b);
        return null == a ? c : a
    }

    function E(a, b, c) {
        a = Nb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function Ob(a, b) {
        a = A(a, b);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function Pb(a, b, c) {
        null == c ? c = xb : rb(c);
        return B(a, b, c)
    }

    function Qb(a, b, c) {
        yb(a);
        0 !== c ? B(a, b, c) : B(a, b, void 0, !1);
        return a
    }

    function Rb(a, b, c, d) {
        yb(a);
        (c = Sb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), B(a, c));
        return B(a, b, d)
    }

    function Kb(a, b, c) {
        return Sb(a, b) === c ? c : -1
    }

    function Sb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != A(a, e) && (0 !== c && B(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function F(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (-1 === c) var e = null;
        else a.h || (a.h = {}), e = a.h[c], e || (b = Bb(A(a, c, d), b), void 0 != b && (a.h[c] = b, sb(a.u) && tb(b.u), e = b));
        if (null == e) return e;
        sb(e.u) && !sb(a.u) && (e = e.xa(La), B(a, c, e.u, d), a.h[c] = e);
        return e
    }

    function G(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var e = sb(a.u),
            f = e;
        f = void 0 === f ? !0 : f;
        a.h || (a.h = {});
        var g = sb(a.u);
        var h = a.h[c];
        var k = Mb(a, c, !0, d),
            l = g || sb(k);
        if (!h) {
            h = [];
            g = g || l;
            for (var m = 0; m < k.length; m++) {
                var q = k[m];
                g = g || sb(q);
                q = Bb(q, b);
                void 0 !== q && (h.push(q), l && tb(q.u))
            }
            a.h[c] = h;
            ub(k, !g)
        }
        b = l || f;
        f = sb(h);
        b && !f && (Object.isFrozen(h) && (a.h[c] = h = h.slice()), tb(h), Object.freeze(h));
        !b && f && (a.h[c] = h = h.slice());
        a = Mb(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
            c = !(qb(a) & 8)
        }
        if (c) {
            for (c = 0; c < h.length; c++)(d = h[c]) && sb(d.u) && !e && (h[c] = h[c].xa(La), a[c] = h[c].u);
            ub(a, !0)
        }
        return h
    }

    function Tb(a, b, c) {
        yb(a);
        a.h || (a.h = {});
        var d = null != c ? c.u : c;
        a.h[b] = c;
        return B(a, b, d)
    }

    function Ub(a, b, c, d) {
        yb(a);
        a.h || (a.h = {});
        var e = null != d ? d.u : d;
        a.h[b] = d;
        return Rb(a, b, c, e)
    }

    function Vb(a, b, c) {
        yb(a);
        if (null != c) {
            var d = rb([]);
            for (var e = !1, f = 0; f < c.length; f++) d[f] = c[f].u, e = e || sb(d[f]);
            a.h || (a.h = {});
            a.h[b] = c;
            ub(d, !e)
        } else a.h && (a.h[b] = void 0), d = xb;
        return B(a, b, d)
    }

    function Wb(a, b) {
        return D(a, b, "")
    }

    function Xb(a, b, c) {
        return D(a, Kb(a, c, b), 0)
    }

    function Yb(a, b, c, d) {
        return F(a, b, Kb(a, d, c))
    };

    function Zb(a, b, c) {
        a || (a = $b);
        $b = null;
        var d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.V = (d ? 0 : -1) - (this.constructor.h || 0);
        this.h = void 0;
        this.u = a;
        a: {
            d = this.u.length;a = d - 1;
            if (d && (d = this.u[a], vb(d))) {
                this.j = a - this.V;
                this.i = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.j = Math.max(b, a + 1 - this.V), this.i = void 0) : this.j = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.j) a += this.V, (d = this.u[a]) ? Array.isArray(d) && rb(d) : this.u[a] = xb;
                else {
                    d = Ib(this);
                    var e = d[a];
                    e ? Array.isArray(e) && rb(e) : d[a] = xb
                }
    }
    Zb.prototype.toJSON = function() {
        var a = this.u;
        return wb ? a : Db(a)
    };

    function ac(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + ya(b) + ": " + b);
        $b = b;
        a = new a(b);
        $b = null;
        return a
    }

    function bc(a, b) {
        return Cb(b)
    }
    var $b;

    function cc() {
        Zb.apply(this, arguments)
    }
    w(cc, Zb);
    cc.prototype.xa = function() {
        return this
    };
    if (zb) {
        var dc = {};
        Object.defineProperties(cc, (dc[p.Symbol.hasInstance] = Ab(function() {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        }), dc))
    };

    function ec(a, b, c, d, e, f) {
        (a = a.h && a.h[c]) ? Array.isArray(a) ? (e = f.ta ? rb(a.slice()) : a, Vb(b, c, e)) : Tb(b, c, a): (kb && d instanceof Uint8Array ? e = d.length ? new nb(new Uint8Array(d)) : mb || (mb = new nb(null)) : (Array.isArray(d) && (e ? tb(d) : Array.isArray(d) && qb(d) & 1 && f.ta && (d = d.slice())), e = d), B(b, c, e))
    };

    function I() {
        cc.apply(this, arguments)
    }
    w(I, cc);
    I.prototype.xa = function(a) {
        if (a !== La) throw Error("requires a valid immutable API token");
        if (sb(this.u)) {
            a = {
                ta: !0
            };
            var b = sb(this.u);
            if (b && !a.ta) throw Error("copyRepeatedFields must be true for frozen messages");
            var c = new this.constructor;
            this.Qa && (c.Qa = this.Qa.slice());
            for (var d = this.u, e = 0; e < d.length; e++) {
                var f = d[e];
                if (e === d.length - 1 && vb(f))
                    for (h in f) {
                        if (Object.prototype.hasOwnProperty.call(f, h)) {
                            var g = +h;
                            r(Number, "isNaN").call(Number, g) ? Ib(c)[h] = f[h] : ec(this, c, g, f[h], b, a)
                        }
                    } else ec(this, c, e - this.V,
                        f, b, a)
            }
            var h = c
        } else h = this;
        return h
    };
    if (zb) {
        var fc = {};
        Object.defineProperties(I, (fc[p.Symbol.hasInstance] = Ab(Object[p.Symbol.hasInstance]), fc))
    };

    function gc(a) {
        I.call(this, a, -1, hc)
    }
    w(gc, I);

    function ic(a) {
        I.call(this, a)
    }
    w(ic, I);
    var hc = [2, 3];

    function jc(a, b) {
        this.i = a === kc && b || "";
        this.h = lc
    }
    var lc = {},
        kc = {};

    function mc(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function nc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function oc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function pc(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var qc;

    function rc() {
        if (void 0 === qc) {
            var a = null,
                b = x.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ja,
                        createScript: Ja,
                        createScriptURL: Ja
                    })
                } catch (c) {
                    x.console && x.console.error(c.message)
                }
                qc = a
            } else qc = a
        }
        return qc
    };
    var sc = {};

    function tc(a, b) {
        this.h = b === sc ? a : ""
    }
    tc.prototype.toString = function() {
        return this.h.toString()
    };

    function uc(a, b) {
        this.h = b === vc ? a : ""
    }
    uc.prototype.toString = function() {
        return this.h + ""
    };

    function wc(a, b) {
        a = xc.exec(yc(a).toString());
        var c = a[3] || "";
        return zc(a[1] + Ac("?", a[2] || "", b) + Ac("#", c))
    }

    function yc(a) {
        return a instanceof uc && a.constructor === uc ? a.h : "type_error:TrustedResourceUrl"
    }
    var xc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        vc = {};

    function zc(a) {
        var b = rc();
        a = b ? b.createScriptURL(a) : a;
        return new uc(a, vc)
    }

    function Ac(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Bc(a, b) {
        this.h = b === Cc ? a : ""
    }
    Bc.prototype.toString = function() {
        return this.h.toString()
    };
    var Cc = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Dc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Ec(a, b, c) {
        if (b instanceof uc) a.href = yc(b).toString();
        else {
            if (-1 === Dc.indexOf(c)) throw Error('TrustedResourceUrl href attribute required with rel="' + c + '"');
            a.href = b instanceof Bc && b.constructor === Bc ? b.h : "type_error:SafeUrl"
        }
        a.rel = c
    };

    function Fc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Gc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Hc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Ic(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Jc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };

    function Kc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Lc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!za(f) || Aa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Aa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Va(g ? bb(f) : f, d)
            }
        }
    }

    function Mc(a) {
        this.h = a || x.document || document
    }
    n = Mc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        Lc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Nc() {
        return !Oc() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"))
    }

    function Oc() {
        return y("iPad") || y("Android") && !y("Mobile") || y("Silk")
    };
    var Pc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Qc = /#|$/;

    function Rc(a) {
        var b = a.search(Qc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        return decodeURIComponent(a.slice(c + 7, -1 !== d ? d : 0).replace(/\+/g, " "))
    };

    function Sc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    cb(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function Tc(a) {
        return Sc(a.top) ? a.top : null
    }

    function Uc(a, b) {
        var c = Vc("SCRIPT", a);
        c.src = yc(b);
        var d, e;
        (d = (b = null == (e = (d = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : e.call(d, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Wc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Xc(a, b) {
        if (!$c() && !ad()) {
            var c = Math.random();
            if (c < b) return c = bd(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function bd() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function cd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function dd(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ad = Gc(function() {
            return Ya(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], ed) || 1E-4 > Math.random()
        }),
        $c = Gc(function() {
            return ed("MSIE")
        });

    function ed(a) {
        return -1 != Pa().indexOf(a)
    }
    var fd = /^([0-9.]+)px$/,
        gd = /^(-?[0-9.]{1,30})$/;

    function hd(a) {
        var b = void 0 === b ? null : b;
        if (!gd.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function K(a) {
        return (a = fd.exec(a)) ? +a[1] : null
    }

    function id(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var jd = Gc(function() {
        return Nc() ? 2 : Oc() ? 1 : 0
    });

    function kd(a) {
        cd({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var ld = [];

    function md() {
        var a = ld;
        ld = [];
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function nd(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = Vc("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }

    function od(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function pd(a) {
        var b = qd;
        "complete" === b.readyState || "interactive" === b.readyState ? (ld.push(a), 1 == ld.length && (p.Promise ? p.Promise.resolve().then(md) : window.setImmediate ? setImmediate(md) : setTimeout(md, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function Vc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var rd = null;
    var qd = document,
        L = window;
    var sd = null;

    function td(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        x.google_logging_queue || (c = !0, x.google_logging_queue = []);
        x.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == sd) {
                sd = !1;
                try {
                    var d = Tc(x);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (sd = !0);
                    x.localStorage.getItem("google_logging") && (sd = !0)
                } catch (e) {}
            }
            a = sd
        }
        a && (d = x.document, a = new jc(kc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = zc(a instanceof jc && a.constructor === jc && a.h === lc ? a.i : "type_error:Const"), Uc(d, a))
    };

    function ud(a) {
        a = void 0 === a ? x : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function vd(a) {
        return (a = a || ud()) ? Sc(a.master) ? a.master : null : null
    };

    function wd(a) {
        var b = ua.apply(1, arguments);
        if (0 === b.length) return zc(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return zc(c.join(""))
    };

    function xd(a) {
        var b = void 0 === b ? 1 : b;
        a = vd(ud(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function yd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }

    function zd() {
        var a = void 0 === a ? L : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function Ad(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };
    var Bd = {
        Ob: 0,
        Nb: 1,
        Kb: 2,
        Fb: 3,
        Lb: 4,
        Gb: 5,
        Mb: 6,
        Ib: 7,
        Jb: 8,
        Eb: 9,
        Hb: 10
    };
    var Cd = {
        Qb: 0,
        Rb: 1,
        Pb: 2
    };

    function Dd() {
        this.i = new Ed(this);
        this.h = 0
    }
    Dd.prototype.resolve = function(a) {
        Fd(this);
        this.h = 1;
        this.l = a;
        Gd(this.i)
    };
    Dd.prototype.reject = function(a) {
        Fd(this);
        this.h = 2;
        this.j = a;
        Gd(this.i)
    };

    function Fd(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function Ed(a) {
        this.h = a
    }
    Ed.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        Gd(this)
    };

    function Gd(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function Hd() {
        this.v = this.v;
        this.B = this.B
    }
    Hd.prototype.v = !1;
    Hd.prototype.j = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };

    function Id(a) {
        this.h = a.slice(0)
    }
    n = Id.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new Id(Wa(this.h, a))
    };
    n.apply = function(a) {
        return new Id(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new Id(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new Id(b)
    };

    function Jd(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function Kd() {
        this.h = {};
        this.i = {}
    }
    Kd.prototype.set = function(a, b) {
        var c = Ld(a);
        this.h[c] = b;
        this.i[c] = a
    };
    Kd.prototype.get = function(a, b) {
        a = Ld(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    Kd.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function Ld(a) {
        return a instanceof Object ? String(Ba(a)) : a + ""
    };

    function Md(a, b) {
        this.h = a;
        this.i = b
    }

    function Nd(a) {
        return null != a.h ? a.h.value : null
    }

    function Od(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    Md.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof Md ? a : Pd(a)) : this
    };

    function Qd(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function Pd(a) {
        return new Md({
            value: a
        }, null)
    }

    function Rd(a) {
        return new Md(null, a)
    }

    function Sd(a) {
        try {
            return Pd(a())
        } catch (b) {
            return Rd(b)
        }
    };

    function Td(a) {
        this.h = new Kd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    Td.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    Td.prototype.contains = function(a) {
        return void 0 !== this.h.h[Ld(a)]
    };

    function Ud() {
        this.h = new Kd
    }
    Ud.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new Td, this.h.set(a, c));
        c.add(b)
    };

    function Vd(a) {
        I.call(this, a, -1, Wd)
    }
    w(Vd, I);
    Vd.prototype.getId = function() {
        return A(this, 3)
    };
    var Wd = [4];

    function Xd(a) {
        var b = void 0 === a.La ? void 0 : a.La,
            c = void 0 === a.ob ? void 0 : a.ob,
            d = void 0 === a.Xa ? void 0 : a.Xa;
        this.h = void 0 === a.jb ? void 0 : a.jb;
        this.l = new Id(b || []);
        this.j = d;
        this.i = c
    };

    function Yd(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            Z: "a",
            fa: Zd(c)
        });
        null != a.h && b.push({
            Z: "as",
            fa: a.h
        });
        null != a.i && b.push({
            Z: "i",
            fa: String(a.i)
        });
        null != a.j && b.push({
            Z: "rp",
            fa: String(a.j)
        });
        b.sort(function(d, e) {
            return d.Z.localeCompare(e.Z)
        });
        b.unshift({
            Z: "t",
            fa: "aa"
        });
        return b
    }

    function Zd(a) {
        a = a.h.slice(0).map($d);
        a = JSON.stringify(a);
        return dd(a)
    }

    function $d(a) {
        var b = {};
        null != A(a, 7) && (b.q = A(a, 7));
        null != A(a, 2) && (b.o = A(a, 2));
        null != A(a, 5) && (b.p = A(a, 5));
        return b
    };

    function ae(a) {
        I.call(this, a)
    }
    w(ae, I);
    ae.prototype.setLocation = function(a) {
        return B(this, 1, a)
    };

    function be(a, b) {
        this.Oa = a;
        this.Wa = b
    }

    function ce(a) {
        var b = [].slice.call(arguments).filter(Fc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Oa || []);
            d = r(Object, "assign").call(Object, d, e.Wa)
        });
        return new be(c, d)
    }

    function de(a) {
        switch (a) {
            case 1:
                return new be(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new be(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new be(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new be(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function ee(a) {
        if (null == a) a = null;
        else {
            var b = Yd(a);
            a = [];
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.fa);
                a.push(c.Z + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new be(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var fe = {},
        ge = new be(["google-auto-placed"], (fe.google_reactive_ad_format = 40, fe.google_tag_origin = "qs", fe));

    function he(a) {
        I.call(this, a)
    }
    w(he, I);

    function ie(a) {
        I.call(this, a)
    }
    w(ie, I);
    ie.prototype.getName = function() {
        return A(this, 4)
    };

    function je(a) {
        I.call(this, a)
    }
    w(je, I);

    function ke(a) {
        I.call(this, a)
    }
    w(ke, I);

    function le(a) {
        I.call(this, a)
    }
    w(le, I);
    var me = [1, 2, 3];

    function ne(a) {
        I.call(this, a)
    }
    w(ne, I);

    function oe(a) {
        I.call(this, a, -1, pe)
    }
    w(oe, I);
    var pe = [6, 7, 9, 10, 11];

    function qe(a) {
        I.call(this, a, -1, re)
    }
    w(qe, I);

    function se(a) {
        I.call(this, a)
    }
    w(se, I);

    function te(a) {
        I.call(this, a)
    }
    w(te, I);
    var re = [1],
        ue = [1, 2];

    function ve(a) {
        I.call(this, a, -1, xe)
    }
    w(ve, I);

    function ye(a) {
        I.call(this, a)
    }
    w(ye, I);

    function ze(a) {
        I.call(this, a, -1, Ae)
    }
    w(ze, I);

    function Be(a) {
        I.call(this, a)
    }
    w(Be, I);

    function Ce(a) {
        I.call(this, a)
    }
    w(Ce, I);

    function De(a) {
        I.call(this, a)
    }
    w(De, I);

    function Ee(a) {
        I.call(this, a)
    }
    w(Ee, I);
    var xe = [1, 2, 5, 7],
        Ae = [2, 5, 6, 11];

    function Fe(a) {
        I.call(this, a)
    }
    w(Fe, I);

    function Ge(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function He(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Ge(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function M(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function N(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function Ie(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var Je = new M(1084),
        Ke = new M(1082, !0),
        Le = new N(62, .001),
        Me = new N(1130, 100),
        Ne = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        Oe = new N(1114, 1),
        Pe = new N(1110),
        Qe = new N(1111),
        Re = new N(1112),
        Se = new N(1113),
        Te = new N(1104),
        Ue = new N(1108),
        Ve = new N(1106),
        We = new N(1107),
        Xe = new N(1105),
        Ye = new N(1115, 1),
        Ze = new M(1121),
        $e = new M(1180),
        af = new M(1144),
        bf = new M(1143),
        cf = new M(1186),
        df = new M(316),
        ef = new M(313),
        ff = new M(369),
        gf = new M(1093),
        hf = new N(1098),
        jf = new M(1129, !0),
        kf = new M(1128),
        lf = new M(1026),
        mf = new M(1090),
        nf = new M(1177),
        of = new M(1053, !0),
        pf = new M(1162),
        qf = new M(1175),
        rf = new M(1120),
        sf = new M(1100, !0),
        tf = new M(1178),
        uf = new M(1171),
        vf = new N(1046),
        wf = new M(218),
        xf = new M(217),
        yf = new M(1179),
        zf = new M(227),
        Af = new M(208),
        Bf = new M(282),
        Cf = new M(1086),
        Df = new N(1079, 5),
        Ef = new M(1141),
        Ff = new M(1190),
        Gf = new Ie(1934, ["AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A/9La288e7MDEU2ifusFnMg1C2Ij6uoa/Z/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        Hf = new M(203),
        If = new M(84),
        Jf = new M(1973),
        Kf = new M(1928),
        Lf = new M(1941),
        Mf = new M(370946349),
        Nf = new M(392736476),
        Of = new N(406149835),
        Pf = new Ie(1932),
        Qf = new N(1935);

    function O(a) {
        var b = "va";
        if (a.va && a.hasOwnProperty(b)) return a.va;
        b = new a;
        return a.va = b
    };

    function Rf() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function P(a) {
        return O(Rf).i(a.h, a.defaultValue)
    }

    function Q(a) {
        return O(Rf).j(a.h, a.defaultValue)
    }

    function Sf() {
        return O(Rf).l(Ne.h, Ne.defaultValue)
    };

    function Tf(a, b, c) {
        function d(f) {
            f = Uf(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = Uf(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: Vf(a.previousSibling, e),
                    ma: function(f) {
                        return Vf(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 2:
                return {
                    init: Vf(a.lastChild, e),
                    ma: function(f) {
                        return Vf(f.previousSibling, e)
                    },
                    pa: 0
                };
            case 3:
                return {
                    init: Vf(a.nextSibling, d),
                    ma: function(f) {
                        return Vf(f.nextSibling, d)
                    },
                    pa: 3
                };
            case 1:
                return {
                    init: Vf(a.firstChild, d),
                    ma: function(f) {
                        return Vf(f.nextSibling, d)
                    },
                    pa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function Uf(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Vf(a, b) {
        return a && b(a) ? a : null
    };
    var Wf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Xf(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = Vc("IMG", a.document);
        if (c) {
            var e = function() {
                if (c) {
                    var f = a.google_image_requests,
                        g = Ua(f, d);
                    0 <= g && Array.prototype.splice.call(f, g, 1)
                }
                Jc(d, "load", e);
                Jc(d, "error", e)
            };
            Ic(d, "load", e);
            Ic(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Yf(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        cd(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        Zf(d, c)
    }

    function Zf(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Xf(c, a, void 0 === b ? !1 : b)
    };

    function $f() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function ag(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function bg(a, b, c, d, e) {
        var f = [];
        cd(a, function(g, h) {
            (g = cg(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function cg(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(cg(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(bg(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function dg(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = eg(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = bg(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function eg(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function fg() {
        this.h = Math.random()
    }

    function gg() {
        var a = hg,
            b = x.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function ig(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof $f) var f = c;
            else f = new $f, cd(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = ag(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = dg(f, "/pagead/gen_204?id=" + b + "&");
            g && Xf(x, g, !1)
        } catch (h) {}
    };
    var jg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function kg() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new lg;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function mg(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new kg;
        return a.google_reactive_ads_global_state
    }

    function lg() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function ng(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function og(a) {
        return ng(a).clientWidth
    };

    function pg(a) {
        return null !== a && void 0 !== a
    }
    var qg = void 0;

    function rg(a, b) {
        var c = qg;
        qg = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };

    function sg(a) {
        return "string" === typeof a
    }

    function tg(a) {
        return void 0 === a
    };

    function ug(a) {
        I.call(this, a, -1, vg)
    }
    w(ug, I);
    var vg = [2, 8],
        wg = [3, 4, 5],
        xg = [6, 7];
    var yg;
    yg = {
        Sb: 0,
        fb: 3,
        gb: 4,
        hb: 5
    };
    var zg = yg.fb,
        Ag = yg.gb,
        Bg = yg.hb;

    function Cg(a) {
        return null != a ? !a : a
    }

    function Dg(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Eg(a, b) {
        var c = G(a, ug, 2);
        if (!c.length) return Fg(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Cg(Eg(c[0], b));
        c = Xa(c, function(d) {
            return function() {
                return Eg(d, b)
            }
        });
        switch (a) {
            case 2:
                return Dg(c, !1);
            case 3:
                return Dg(c, !0)
        }
    }

    function Fg(a, b) {
        var c = Sb(a, wg);
        a: {
            switch (c) {
                case zg:
                    var d = Xb(a, 3, wg);
                    break a;
                case Ag:
                    d = Xb(a, 4, wg);
                    break a;
                case Bg:
                    d = Xb(a, 5, wg);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, la(Mb(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = Wb(a, Kb(a, xg, 7));
            else a: {
                switch (c) {
                    case Ag:
                        a = Ob(a, Kb(a, xg, 6));
                        break a;
                    case Bg:
                        a = Wb(a, Kb(a, xg, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Na(String(e), a);
                if (d) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return sg(a) && sg(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Na(String(e), a);
                    case 11:
                        return null != e && 1 === Na(String(e), a)
                }
            }
        }
    }

    function Gg(a, b) {
        return !a || !(!b || !Eg(a, b))
    };

    function Hg(a) {
        I.call(this, a, -1, Ig)
    }
    w(Hg, I);
    var Ig = [4];

    function Jg(a) {
        I.call(this, a)
    }
    w(Jg, I);

    function Kg(a) {
        I.call(this, a, -1, Lg)
    }
    w(Kg, I);
    var Lg = [5],
        Mg = [1, 2, 3, 6, 7];

    function Ng(a) {
        a.Ya.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                eb: 4,
                message: b
            }
        })))
    }

    function Og(a) {
        a.Ya.apply(a, la(ua.apply(1, arguments).map(function(b) {
            return {
                eb: 7,
                message: b
            }
        })))
    };

    function Pg(a) {
        return function() {
            var b = ua.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var Qg = Pg(function(a) {
        var b = [],
            c = {};
        a = v(a);
        for (var d = a.next(); !d.done; c = {
                ha: c.ha
            }, d = a.next()) c.ha = d.value, Pg(function(e) {
            return function() {
                var f = {};
                b.push([(f[e.ha.eb] = e.ha.message.toJSON(), f)])
            }
        }(c))();
        return JSON.stringify([b])
    });

    function Rg(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function Sg(a) {
        var b = void 0 === b ? Rg : b;
        this.l = void 0 === a ? 1E3 : a;
        this.j = b;
        this.i = [];
        this.h = null
    }
    Sg.prototype.Ya = function() {
        var a = ua.apply(0, arguments),
            b = this;
        Pg(function() {
            b.i.push.apply(b.i, la(a));
            var c = Pg(function() {
                var d = Qg(b.i);
                b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.i = [];
                b.h = null
            });
            100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
        })()
    };

    function Tg(a) {
        I.call(this, a, -1, Ug)
    }
    w(Tg, I);

    function Vg(a, b) {
        return Tb(a, 1, b)
    }

    function Wg(a, b) {
        return Vb(a, 2, b)
    }

    function Xg(a, b) {
        return Pb(a, 4, b)
    }

    function Yg(a, b) {
        return Vb(a, 5, b)
    }

    function Zg(a, b) {
        return Qb(a, 6, b)
    }

    function $g(a) {
        I.call(this, a)
    }
    w($g, I);
    $g.prototype.W = function() {
        return D(this, 1, 0)
    };

    function ah(a, b) {
        return Qb(a, 1, b)
    }

    function bh(a, b) {
        return Qb(a, 2, b)
    }

    function ch(a) {
        I.call(this, a)
    }
    w(ch, I);
    var Ug = [2, 4, 5],
        dh = [1, 2];

    function eh(a) {
        I.call(this, a, -1, fh)
    }
    w(eh, I);

    function gh(a) {
        I.call(this, a, -1, hh)
    }
    w(gh, I);
    var fh = [2, 3],
        hh = [5],
        ih = [1, 2, 3, 4];

    function jh(a) {
        I.call(this, a)
    }
    w(jh, I);
    jh.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };

    function kh(a) {
        var b = new jh;
        return Ub(b, 4, lh, a)
    }
    var lh = [4, 5, 7];

    function mh(a, b, c) {
        var d = void 0 === d ? new Sg(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && bd() < 1 / this.i
    }

    function nh(a, b, c, d, e, f) {
        var g = bh(ah(new $g, b), c);
        b = Zg(Wg(Vg(Yg(Xg(new Tg, d), e), g), a.h), f);
        b = kh(b);
        a.l && Ng(a.j, oh(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.W() === g.W() && D(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function ph(a, b, c, d) {
        if (a.m) {
            var e = new eh;
            b = Vb(e, 2, b);
            c = Vb(b, 3, c);
            d && Qb(c, 1, d);
            d = new jh;
            d = Ub(d, 7, lh, c);
            a.l && Ng(a.j, oh(a, d))
        }
    }

    function oh(a, b) {
        b = Qb(b, 1, Date.now());
        var c = od(window);
        b = Qb(b, 2, c);
        return Qb(b, 6, a.i)
    };

    function qh() {
        var a = {};
        this.h = (a[zg] = {}, a[Ag] = {}, a[Bg] = {}, a)
    };
    var rh = /^true$/.test("false");

    function sh(a, b) {
        switch (b) {
            case 1:
                return Xb(a, 1, Mg);
            case 2:
                return Xb(a, 2, Mg);
            case 3:
                return Xb(a, 3, Mg);
            case 6:
                return Xb(a, 6, Mg);
            default:
                return null
        }
    }

    function th(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return E(a, 1);
            case 7:
                return Wb(a, 3);
            case 2:
                return Ob(a, 2);
            case 3:
                return Wb(a, 3);
            case 6:
                return Mb(a, 4);
            default:
                return null
        }
    }
    var uh = Gc(function() {
        if (!rh) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function vh(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        O(wh).j[e] = null != (g = null == (f = O(wh).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = uh();
        if (null != e[b]) return e[b];
        b = xh(d)[b];
        if (!b) return c;
        b = new Kg(b);
        b = Ch(b);
        a = th(b, a);
        return null != a ? a : c
    }

    function Ch(a) {
        var b = O(qh).h;
        if (b) {
            var c = $a(G(a, Jg, 5), function(d) {
                return Gg(F(d, ug, 1), b)
            });
            if (c) return F(c, Hg, 2)
        }
        return F(a, Hg, 4)
    }

    function wh() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new p.Map
    }

    function Dh(a, b, c) {
        return !!vh(1, a, void 0 === b ? !1 : b, c)
    }

    function Eh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(vh(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Fh(a, b, c) {
        return vh(3, a, void 0 === b ? "" : b, c)
    }

    function Gh(a, b, c) {
        b = void 0 === b ? [] : b;
        return vh(6, a, b, c)
    }

    function xh(a) {
        return O(wh).i[a] || (O(wh).i[a] = {})
    }

    function Hh(a, b) {
        var c = xh(b);
        cd(a, function(d, e) {
            return c[e] = d
        })
    }

    function Ih(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Va(b, function(h) {
            var k = xh(h);
            Va(a, function(l) {
                var m = Sb(l, Mg),
                    q = sh(l, m);
                if (q) {
                    var u, z, J;
                    var C = null != (J = null == (u = O(wh).h.get(h)) ? void 0 : null == (z = u.get(q)) ? void 0 : z.slice(0)) ? J : [];
                    a: {
                        u = new gh;
                        switch (m) {
                            case 1:
                                Rb(u, 1, ih, q);
                                break;
                            case 2:
                                Rb(u, 2, ih, q);
                                break;
                            case 3:
                                Rb(u, 3, ih, q);
                                break;
                            case 6:
                                Rb(u, 4, ih, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Pb(u, 5, C);m = u
                    }
                    if (C = m) {
                        var H;
                        C = !(null == (H = O(wh).j[h]) || !H.has(q))
                    }
                    C && f.push(m);
                    if (H = m) {
                        var T;
                        H = !(null == (T = O(wh).h.get(h)) ||
                            !T.has(q))
                    }
                    H && g.push(m);
                    e || (T = O(wh), T.h.has(h) || T.h.set(h, new p.Map), T.h.get(h).has(q) || T.h.get(h).set(q, []), d && T.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && ph(c, f, g, null != d ? d : void 0)
    }

    function Jh(a, b) {
        var c = xh(b);
        Va(a, function(d) {
            var e = new Kg(d),
                f = Sb(e, Mg);
            (e = sh(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function Kh() {
        return Xa(r(Object, "keys").call(Object, O(wh).i), function(a) {
            return Number(a)
        })
    }

    function Lh(a) {
        ab(O(wh).l, a) || Hh(xh(4), a)
    };

    function Mh(a) {
        this.methodName = a
    }
    var Nh = new Mh(1),
        Oh = new Mh(16),
        Ph = new Mh(15),
        Qh = new Mh(2),
        Rh = new Mh(3),
        Sh = new Mh(4),
        Th = new Mh(5),
        Uh = new Mh(6),
        Vh = new Mh(7),
        Wh = new Mh(8),
        Xh = new Mh(9),
        Yh = new Mh(10),
        Zh = new Mh(11),
        $h = new Mh(12),
        ai = new Mh(13),
        bi = new Mh(14);

    function ci(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function di(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function ei(a) {
        ci(Th, Dh, a);
        ci(Uh, Eh, a);
        ci(Vh, Fh, a);
        ci(Wh, Gh, a);
        ci(ai, Jh, a);
        ci(Ph, Lh, a)
    }

    function fi(a) {
        ci(Sh, function(b) {
            O(qh).h = b
        }, a);
        ci(Xh, function(b, c) {
            var d = O(qh);
            d.h[zg][b] || (d.h[zg][b] = c)
        }, a);
        ci(Yh, function(b, c) {
            var d = O(qh);
            d.h[Ag][b] || (d.h[Ag][b] = c)
        }, a);
        ci(Zh, function(b, c) {
            var d = O(qh);
            d.h[Bg][b] || (d.h[Bg][b] = c)
        }, a);
        ci(bi, function(b) {
            for (var c = O(qh), d = v([zg, Ag, Bg]), e = d.next(); !e.done; e = d.next()) e = e.value, r(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function gi(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function hi() {
        this.l = function() {};
        this.j = function() {};
        this.i = function() {};
        this.h = function() {
            return []
        }
    }

    function ii(a, b, c) {
        a.l = di(Nh, b, function() {});
        a.i = function(d) {
            di(Qh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return di(Rh, b, function() {
                return []
            })(c)
        };
        a.j = function(d) {
            di(Oh, b, function() {})(d, c)
        }
    };

    function ji(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function ki(a) {
        return !!(a.error && a.meta && a.id)
    };
    var li = null;

    function mi() {
        if (null === li) {
            li = "";
            try {
                var a = "";
                try {
                    a = x.top.location.hash
                } catch (c) {
                    a = x.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    li = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return li
    };

    function ni() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function oi() {
        var a = void 0 === a ? x : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function pi(a, b) {
        var c = oi() || ni();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.taskId = this.slotId = void 0
    };
    var qi = x.performance,
        ri = !!(qi && qi.mark && qi.measure && qi.clearMarks),
        si = Gc(function() {
            var a;
            if (a = ri) a = mi(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ti() {
        this.i = [];
        this.j = x || x;
        var a = null;
        x && (x.google_js_reporting_queue = x.google_js_reporting_queue || [], this.i = x.google_js_reporting_queue, a = x.google_measure_js_timing);
        this.h = si() || (null != a ? a : 1 > Math.random())
    }

    function ui(a) {
        a && qi && si() && (qi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), qi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ti.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new pi(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        qi && si() && qi.mark(b);
        return a
    };
    ti.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (oi() || ni()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            qi && si() && qi.mark(b);
            !this.h || 2048 < this.i.length || this.i.push(a)
        }
    };
    var vi = ja(["https://www.googletagservices.com/console/host/host.js"]),
        wi = ja(["https://www.googletagservices.com/console/panel/index.html"]),
        xi = ja(["https://www.googletagservices.com/console/overlay/index.html"]);
    wd(vi);
    wd(wi);
    wd(xi);

    function yi(a, b) {
        do {
            var c = Wc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function zi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = K(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Ai(a, b) {
        return !((gd.test(b.google_ad_width) || fd.test(a.style.width)) && (gd.test(b.google_ad_height) || fd.test(a.style.height)))
    }

    function Bi(a, b) {
        return (a = Ci(a, b)) ? a.y : 0
    }

    function Ci(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function Di(a) {
        var b = 0,
            c;
        for (c in Wf) - 1 != a.indexOf(c) && (b |= Wf[c]);
        return b
    }

    function Ei(a, b, c, d, e) {
        if (a !== a.top) return Tc(a) ? 3 : 16;
        if (!(488 > og(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = og(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = og(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = Wc(b, a)) && (e = K(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Fi(a, b, c, d) {
        var e = Ei(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || yi(c, b) ? (b = og(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Gi(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function Hi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = Wc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function Ii(a, b, c) {
        a = Ci(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Ji(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Wc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Gi(b, c, "0px");
            b.style.width = og(a) + "px";
            if (0 !== Ii(a, b, c)) {
                Gi(b, c, "0px");
                var d = Ii(a, b, c);
                Gi(b, c, -1 * d + "px");
                a = Ii(a, b, c);
                0 !== a && a !== d && Gi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Ki(a, b) {
        this.l = a;
        this.j = b
    }
    Ki.prototype.minWidth = function() {
        return this.l
    };
    Ki.prototype.height = function() {
        return this.j
    };
    Ki.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    Ki.prototype.i = function() {};

    function Li(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = Wc(a, b)) && e[c] && d(e[c]) || null
    }

    function Mi(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Ni(a, b, c, d) {
        var e = a && Oi(c, b),
            f = Pi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Qi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Oi(a, b) {
        return Bi(a, b) < ng(b).clientHeight - 100
    }

    function Ri(a, b) {
        var c = Li(b, a, "height", K);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Li(b, a, "height", K);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = Li(b, a, "maxHeight", K)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Pi(a, b) {
        var c = 0 == yd(a);
        return b && c ? Math.max(250, 2 * ng(a).clientHeight / 3) : 250
    };
    var R = {},
        Si = (R.google_ad_channel = !0, R.google_ad_client = !0, R.google_ad_host = !0, R.google_ad_host_channel = !0, R.google_adtest = !0, R.google_tag_for_child_directed_treatment = !0, R.google_tag_for_under_age_of_consent = !0, R.google_tag_partner = !0, R.google_restrict_data_processing = !0, R.google_page_url = !0, R.google_debug_params = !0, R.google_adbreak_test = !0, R.google_ad_frequency_hint = !0, R.google_admob_interstitial_slot = !0, R.google_admob_rewarded_slot = !0, R.google_max_ad_content_rating = !0, R.google_traffic_source = !0,
            R),
        Ti = RegExp("(^| )adsbygoogle($| )");

    function Ui(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Kc(d.Zb);
            a[e] = d.value
        }
    };

    function Vi(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }
    Vi.prototype.query = function(a) {
        var b = [];
        try {
            b = a.querySelectorAll(this.l)
        } catch (f) {}
        if (!b.length) return [];
        a = bb(b);
        a = Wi(this, a);
        "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
        if ("number" === typeof this.j) {
            b = [];
            for (var c = 0; c < a.length; c++) {
                var d = Xi(a[c]),
                    e = this.j;
                0 > e && (e += d.length);
                0 <= e && e < d.length && b.push(d[e])
            }
            a = b
        }
        return a
    };
    Vi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Wi(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Xi(a) {
        var b = [];
        Jd(a.getElementsByTagName("p"), function(c) {
            100 <= Yi(c) && b.push(c)
        });
        return b
    }

    function Yi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Jd(a.childNodes, function(c) {
            b += Yi(c)
        });
        return b
    }

    function Zi(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };
    var $i = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function aj(a, b) {
        this.h = a;
        this.i = b
    }

    function bj(a, b, c) {
        this.url = a;
        this.A = b;
        this.Ra = !!c;
        this.depth = null
    };

    function cj() {
        var a = dj;
        this.m = hg;
        this.i = null;
        this.l = this.I;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = cj.prototype;
    n.ab = function(a) {
        this.l = a
    };
    n.Za = function(a) {
        this.i = a
    };
    n.bb = function(a) {
        this.j = a
    };
    n.qa = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                ui(d), b = this.l(a, new ji(h, {
                    message: ej(h)
                }), void 0, c)
            } catch (k) {
                this.I(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Ua = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.I = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new $f;
            f.h.push(1);
            f.i[1] = ag("context", a);
            ki(b) || (b = new ji(b, {
                message: ej(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = ag("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (Yc) {}
            if (d) try {
                d(h)
            } catch (Yc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = x;
            b = [];
            g = null;
            do {
                var k = d;
                if (Sc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new bj(l || "", k));
                try {
                    d = k.parent
                } catch (Yc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = x;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ra = !0)
                }
            var u = new bj(x.location.href, x, !1);
            k = null;
            var z = b.length - 1;
            for (q = z; 0 <= q; --q) {
                var J = b[q];
                !k && $i.test(J.url) && (k = J);
                if (J.url && !J.Ra) {
                    u = J;
                    break
                }
            }
            J = null;
            var C = b.length && b[z].url;
            0 != u.depth && C && (J = b[z]);
            var H = new aj(u, J);
            if (H.i) {
                var T = H.i.url || "";
                f.h.push(4);
                f.i[4] = ag("top", T)
            }
            var Zc = {
                url: H.h.url || ""
            };
            if (H.h.url) {
                var we = H.h.url.match(Pc),
                    yh = we[1],
                    zh = we[3],
                    Ah = we[4];
                u = "";
                yh && (u += yh + ":");
                zh && (u += "//", u += zh, Ah && (u += ":" + Ah));
                var Bh = u
            } else Bh = "";
            Zc = [Zc, {
                url: Bh
            }];
            f.h.push(5);
            f.i[5] = Zc;
            ig(this.m, e, f, this.j, c)
        } catch (Yc) {
            try {
                ig(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ej(Yc),
                    url: H && H.h.url
                }, this.j, c)
            } catch (Gq) {}
        }
        return !0
    };
    n.Va = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function ej(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };

    function S(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, S) : this.stack = Error().stack || ""
    }
    w(S, Error);
    var hg, fj, dj = new ti;

    function gj(a) {
        null != a && (x.google_measure_js_timing = a);
        x.google_measure_js_timing || (a = dj, a.h = !1, a.i != a.j.google_js_reporting_queue && (si() && Va(a.i, ui), a.i.length = 0))
    }(function(a) {
        hg = a || new fg;
        "number" !== typeof x.google_srt && (x.google_srt = Math.random());
        gg();
        fj = new cj;
        fj.bb(!0);
        "complete" == x.document.readyState ? gj() : dj.h && Ic(x, "load", function() {
            gj()
        })
    })();

    function hj(a, b, c) {
        return fj.qa(a, b, c)
    }

    function ij(a, b) {
        return fj.Ua(a, b)
    }

    function jj(a, b, c) {
        var d = O(hi).h();
        !b.eid && d.length && (b.eid = d.toString());
        ig(hg, a, b, !0, c)
    }

    function kj(a, b) {
        fj.Va(a, b)
    }

    function lj(a, b, c, d) {
        var e;
        ki(b) ? e = b.msg || ej(b.error) : e = ej(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof ji ? b.error : b, c.pbr || (c.pbr = !0, fj.I(a, b, .1, d, "puberror")), !1) : fj.I(a, b, c, d)
    };
    var mj = ja(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function nj() {
        var a = void 0 === a ? "jserror" : a;
        var b = void 0 === b ? .01 : b;
        var c = void 0 === c ? wd(mj) : c;
        this.j = a;
        this.h = null;
        this.l = !1;
        this.v = Math.random();
        this.m = b;
        this.i = this.I;
        this.B = c
    }
    n = nj.prototype;
    n.Za = function(a) {
        this.h = a
    };
    n.bb = function(a) {
        this.l = a
    };
    n.ab = function(a) {
        this.i = a
    };
    n.I = function(a, b, c, d, e) {
        c = void 0 === c ? this.m : c;
        e = void 0 === e ? this.j : e;
        if ((this.l ? this.v : Math.random()) > c) return !1;
        ki(b) || (b = new ji(b, {
            context: a,
            id: e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        x.google_js_errors = x.google_js_errors || [];
        x.google_js_errors.push(b);
        x.error_rep_loaded || (Uc(x.document, zc(yc(this.B).toString())), x.error_rep_loaded = !0);
        return !1
    };
    n.qa = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.i(a, d, this.m, c, this.j)) throw d;
        }
    };
    n.Ua = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.qa(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    n.Va = function(a, b) {
        var c = this;
        b.catch(function(d) {
            d = d ? d : "unknown rejection";
            c.I(a, d instanceof Error ? d : Error(d))
        })
    };

    function oj(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }

    function pj(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = d || window,
            g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var h = oi(),
                k = 3;
            try {
                var l = b.apply(this, arguments)
            } catch (m) {
                k = 13;
                if (!c) throw m;
                c(a, m)
            } finally {
                f.google_measure_js_timing && h && oj(r(Object, "assign").call(Object, {}, {
                    label: a.toString(),
                    value: h,
                    duration: (oi() || 0) - h,
                    type: k
                }, e && g && {
                    taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter ||
                        1
                }), f)
            }
            return l
        }
    }

    function qj(a, b) {
        return pj(a, b, function(c, d) {
            (new nj).I(c, d)
        }, void 0, !1)
    };

    function rj(a, b, c) {
        return P(tf) ? pj(a, b, void 0, c, !0).apply() : b()
    }

    function sj(a) {
        if (!a) return null;
        var b = A(a, 7);
        if (A(a, 1) || a.getId() || 0 < Mb(a, 4).length) {
            var c = a.getId();
            b = Mb(a, 4);
            var d = A(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Zi(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Zi(b[c]);
            a = (b = e) ? new Vi(b, A(a, 2), A(a, 5), tj(A(a, 6))) : null
        } else a = b ? new Vi(b, A(a, 2), A(a, 5), tj(A(a, 6))) : null;
        return a
    }
    var uj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function tj(a) {
        return null == a ? a : uj[a]
    }
    var vj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function wj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function xj(a) {
        a = wj(a);
        return a.optimization = a.optimization || {}
    };

    function yj(a) {
        switch (A(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = F(a, Vd, 1), null == b ? b = null : (a = A(a, 2), b = null == a ? null : new Xd({
                    La: [b],
                    Xa: a
                }));
                return null != b ? Pd(b) : Rd(Error("Missing dimension when creating placement id"));
            case 3:
                return Rd(Error("Missing dimension when creating placement id"));
            default:
                return Rd(Error("Invalid type: " + A(a, 8)))
        }
    };

    function zj(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Aj(a, b) {
        this.i = a;
        this.h = b
    }

    function Bj(a, b) {
        var c = new Ud,
            d = new Td;
        b.forEach(function(e) {
            if (Yb(e, je, 1, me)) {
                e = Yb(e, je, 1, me);
                if (F(e, he, 1) && F(F(e, he, 1), Vd, 1) && F(e, he, 2) && F(F(e, he, 2), Vd, 1)) {
                    var f = Cj(a, F(F(e, he, 1), Vd, 1)),
                        g = Cj(a, F(F(e, he, 2), Vd, 1));
                    if (f && g)
                        for (f = v(zj({
                                anchor: f,
                                position: A(F(e, he, 1), 2)
                            }, {
                                anchor: g,
                                position: A(F(e, he, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Ba(g.anchor), g.position)
                }
                F(e, he, 3) && F(F(e, he, 3), Vd, 1) && (f = Cj(a, F(F(e, he, 3), Vd, 1))) && c.set(Ba(f), A(F(e, he, 3), 2))
            } else Yb(e, ke, 2, me) ? Dj(a, Yb(e, ke, 2, me),
                c) : Yb(e, le, 3, me) && Ej(a, Yb(e, le, 3, me), d)
        });
        return new Aj(c, d)
    }

    function Dj(a, b, c) {
        F(b, Vd, 1) && (a = Fj(a, F(b, Vd, 1))) && a.forEach(function(d) {
            d = Ba(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Ej(a, b, c) {
        F(b, Vd, 1) && (a = Fj(a, F(b, Vd, 1))) && a.forEach(function(d) {
            c.add(Ba(d))
        })
    }

    function Cj(a, b) {
        return (a = Fj(a, b)) && 0 < a.length ? a[0] : null
    }

    function Fj(a, b) {
        return (b = sj(b)) ? b.query(a) : null
    };

    function Gj() {
        this.h = new p.Set
    }

    function Hj(a) {
        a = Ij(a);
        return a.has("all") || a.has("after")
    }

    function Jj(a) {
        a = Ij(a);
        return a.has("all") || a.has("before")
    }

    function Kj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Lj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function Lj(a) {
        var b = Ij(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function Ij(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function Mj(a, b) {
        if (!a) return !1;
        a = Wc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Nj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Oj(a) {
        return !!a.nextSibling || !!a.parentNode && Oj(a.parentNode)
    };

    function Pj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };

    function Qj(a) {
        var b = Pj(a);
        return b ? Wa(Xa(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function Rj(a, b) {
        return bb(a.document.querySelectorAll(b))
    }

    function Sj(a) {
        var b = [];
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function Tj(a, b, c, d, e) {
        this.h = a;
        this.H = b;
        this.j = c;
        this.m = e || null;
        this.v = (this.D = d) ? Bj(a.document, G(d, ie, 5)) : Bj(a.document, []);
        this.B = new Gj;
        this.i = 0;
        this.l = !1
    }

    function Uj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = G(a.j, oe, 1);
        a.i = 0;
        var d = Vj(a.D);
        var e = a.h;
        try {
            var f = e.localStorage.getItem("google_ama_settings");
            var g = f ? ac(Fe, f) : null
        } catch (Zc) {
            g = null
        }
        var h = null !== g && E(g, 2, !1);
        g = wj(e);
        h && (g.eatf = !0, td(7, [!0, 0, !1]));
        var k = P(kf) || P(jf);
        f = P(jf);
        if (k) {
            b: {
                var l = {
                        mb: !1,
                        nb: !1
                    },
                    m = Rj(e, ".google-auto-placed"),
                    q = Rj(e, "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"),
                    u = Rj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var z = (Qj(e) || Rj(e, "div[id^=div-gpt-ad]")).concat(Rj(e,
                    "iframe[id^=google_ads_iframe]"));
                var J = Rj(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    C = Rj(e, "ins.adsbygoogle-ablated-ad-slot"),
                    H = Rj(e, "div.googlepublisherpluginad"),
                    T = Rj(e, "html > ins.adsbygoogle");k = [].concat(Rj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), Rj(e, "body ins.adsbygoogle"));h = [];l = v([
                    [l.Ub, m],
                    [l.mb, q],
                    [l.Xb, u],
                    [l.Vb, z],
                    [l.Yb, J],
                    [l.Tb, C],
                    [l.Wb, H],
                    [l.nb, T]
                ]);
                for (m = l.next(); !m.done; m = l.next()) q = v(m.value),
                m = q.next().value,
                q = q.next().value,
                !1 === m ? h = h.concat(q) : k = k.concat(q);k = Sj(k);l = Sj(h);h = k.slice(0);k = v(l);
                for (l = k.next(); !l.done; l = k.next())
                    for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) &&
                        h.splice(m, 1);e = ng(e).clientHeight;
                for (k = 0; k < h.length; k++)
                    if (l = h[k].getBoundingClientRect(), !(0 === l.height && !f || l.top > e)) {
                        e = !0;
                        break b
                    }
                e = !1
            }
            g = e ? g.eatfAbg = !0 : !1
        }
        else g = h;
        if (g) return !0;
        g = new Td([2]);
        for (e = 0; e < c.length; e++) {
            f = a;
            k = c[e];
            h = e;
            l = b;
            if (!F(k, ae, 4) || !g.contains(A(F(k, ae, 4), 1)) || 1 !== A(k, 8) || k && Array.isArray(A(k, 4)) && d[A(F(k, ae, 4), 2)]) f = null;
            else {
                f.i++;
                if (l = Wj(f, k, l, d)) m = wj(f.h), m.numAutoAdsPlaced || (m.numAutoAdsPlaced = 0), F(k, Vd, 1) && null != A(F(k, Vd, 1), 5) && (m.numPostPlacementsPlaced ? m.numPostPlacementsPlaced++ :
                    m.numPostPlacementsPlaced = 1), null == m.placed && (m.placed = []), m.numAutoAdsPlaced++, m.placed.push({
                    index: h,
                    element: l.ka
                }), td(7, [!1, f.i, !0]);
                f = l
            }
            if (f) return !0
        }
        td(7, [!1, a.i, !1]);
        return !1
    }

    function Wj(a, b, c, d) {
        if (b && Array.isArray(A(b, 4)) && d[A(F(b, ae, 4), 2)] || 1 != A(b, 8)) return null;
        d = F(b, Vd, 1);
        if (!d) return null;
        d = sj(d);
        if (!d) return null;
        d = d.query(a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = vj[A(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = Mj(Nj(d), f);
                        break a;
                    case 3:
                        f = Mj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Mj(g ? 1 == g.nodeType ? g : Nj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Oj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Ge(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = A(b, 2);
            g = Ba(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(Ba(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(Ba(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.B;
            f = A(b, 2);
            a: switch (f) {
                case 1:
                    g = Hj(d.previousElementSibling) || Jj(d);
                    break a;
                case 4:
                    g = Hj(d) || Jj(d.nextElementSibling);
                    break a;
                case 2:
                    g = Jj(d.firstElementChild);
                    break a;
                case 3:
                    g = Hj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || Kj(c, d, f)
        }
        if (c) return null;
        c = F(b, ne, 3);
        f = {};
        c && (f.cb = A(c, 1), f.Ma = A(c, 2), f.kb = !!Nb(c, 3));
        c = F(b, ae, 4) && A(F(b, ae, 4), 2) ? A(F(b, ae, 4), 2) : null;
        c = de(c);
        g = null != A(b, 12) ? A(b, 12) : null;
        g = null == g ? null : new be(null, {
            google_ml_rank: g
        });
        b = Xj(a, b);
        b = ce(a.m, c, g, b);
        c = a.h;
        a = a.H;
        var h = c.document,
            k = f.kb || !1;
        g = (new Mc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.tb && Ui(k, f.tb);
        h = (new Mc(h)).createElement("INS");
        k = h.style;
        k.display =
            "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.cb && (k.marginTop = f.cb);
        f.Ma && (k.marginBottom = f.Ma);
        f.ib && Ui(k, f.ib);
        g.appendChild(h);
        f = {
            ua: g,
            ka: h
        };
        f.ka.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Oa) f.ua.className = h.join(" ");
        h = f.ka;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.ua;
                var q = void 0 === q ? 0 : q;
                if (P(ef)) {
                    q = void 0 === q ? 0 : q;
                    var u = Tf(d, e, q);
                    if (u.init) {
                        var z = u.init;
                        for (d = z; d = u.ma(d);) z = d;
                        var J = {
                            anchor: z,
                            position: u.pa
                        }
                    } else J = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    He(m, J.anchor, J.position)
                } else He(m, d, e);
                b: {
                    var C = f.ka;C.dataset.adsbygoogleStatus = "reserved";C.className += " adsbygoogle-noablate";m = {
                        element: C
                    };
                    var H = b && b.Wa;
                    if (C.hasAttribute("data-pub-vars")) {
                        try {
                            H = JSON.parse(C.getAttribute("data-pub-vars"))
                        } catch (T) {
                            break b
                        }
                        C.removeAttribute("data-pub-vars")
                    }
                    H && (m.params = H);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (T) {
                (C = f.ua) && C.parentNode && (H = C.parentNode, H.removeChild(C),
                    Ge(H) && (H.style.display = H.getAttribute("data-init-display") || "none"));
                C = !1;
                break a
            }
            C = !0
        }
        return C ? f : null
    }

    function Xj(a, b) {
        return Nd(Qd(yj(b).map(ee), function(c) {
            wj(a.h).exception = c
        }))
    }

    function Vj(a) {
        var b = {};
        a && Mb(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    };

    function Yj(a) {
        I.call(this, a)
    }
    w(Yj, I);

    function Zj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? Sd(function() {
            return ac(Yj, c)
        }) : Pd(null)
    };

    function ak() {
        this.S = {}
    }

    function bk() {
        if (ck) return ck;
        var a = vd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? ck = b : a.google_persistent_state_async = ck = new ak
    }

    function dk(a) {
        return ek[a] || "google_ps_" + a
    }

    function fk(a, b, c) {
        b = dk(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var ck = null,
        gk = {},
        ek = (gk[8] = "google_prev_ad_formats_by_region", gk[9] = "google_prev_ad_slotnames_by_region", gk);

    function hk(a) {
        this.h = a || {
            cookie: ""
        }
    }
    hk.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.ac;
            d = c.bc || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.rb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    hk.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ma(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    hk.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    hk.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ma(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            rb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function ik(a) {
        I.call(this, a)
    }
    w(ik, I);

    function jk(a) {
        var b = new ik;
        return B(b, 5, a)
    };

    function kk(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function lk(a, b, c) {
        b = void 0 === b ? 500 : b;
        c = void 0 === c ? !1 : c;
        Hd.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.J = 0;
        this.H = b;
        this.D = c;
        this.l = null
    }
    w(lk, Hd);
    lk.prototype.j = function() {
        this.m = {};
        this.l && (Jc(this.h, "message", this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        Hd.prototype.j.call(this)
    };

    function mk(a) {
        return "function" === typeof a.h.__tcfapi || null != nk(a)
    }
    lk.prototype.addEventListener = function(a) {
        function b(g, h) {
            clearTimeout(f);
            g ? (d = g, d.internalErrorState = kk(d), d.internalBlockOnErrors = c.D, h && 0 === d.internalErrorState || (d.tcString = "tcunavailable", h || (d.internalErrorState = 3))) : (d.tcString = "tcunavailable", d.internalErrorState = 3);
            a(d)
        }
        var c = this,
            d = {
                internalBlockOnErrors: this.D
            },
            e = Hc(function() {
                return a(d)
            }),
            f = 0; - 1 !== this.H && (f = setTimeout(function() {
            d.tcString = "tcunavailable";
            d.internalErrorState = 1;
            e()
        }, this.H));
        try {
            ok(this, "addEventListener", b)
        } catch (g) {
            d.tcString =
                "tcunavailable", d.internalErrorState = 3, f && (clearTimeout(f), f = 0), e()
        }
    };
    lk.prototype.removeEventListener = function(a) {
        a && a.listenerId && ok(this, "removeEventListener", null, a.listenerId)
    };

    function ok(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (nk(a)) {
            pk(a);
            var e = ++a.J;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function nk(a) {
        if (a.i) return a.i;
        a.i = id(a.h, "__tcfapiLocator");
        return a.i
    }

    function pk(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Ic(a.h, "message", a.l))
    };

    function qk(a) {
        var b = a.A,
            c = a.wa,
            d = a.Na;
        a = rk({
            A: b,
            ba: a.ba,
            na: void 0 === a.na ? !1 : a.na,
            oa: void 0 === a.oa ? !1 : a.oa
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : sk(b, c).then(function(e) {
            return e.map(tk)
        }).then(function(e) {
            return e.map(function(f) {
                return uk(b, f)
            })
        }).then(d)
    }

    function rk(a) {
        var b = a.A,
            c = a.ba,
            d = void 0 === a.na ? !1 : a.na;
        if (a = (void 0 === a.oa ? 0 : a.oa) || !mk(new lk(b))) {
            if (!d) {
                if (!(c = !c))
                    if (c = Zj(b), null == c.h) fj.I(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != A(c, 1)) b: switch (c = A(c, 1), c) {
                    case 1:
                        c = !0;
                        break b;
                    default:
                        throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                } else c = !1;
                d = c
            }
            a = d
        }
        if (a) return uk(b, jk(!0));
        c = bk();
        return (c = fk(c, 24)) ? uk(b, tk(c)) : Rd(Error("tcunav"))
    }

    function sk(a, b) {
        return p.Promise.race([vk(), wk(a, b)])
    }

    function vk() {
        return (new p.Promise(function(a) {
            var b = bk();
            a = {
                resolve: a
            };
            var c = fk(b, 25, []);
            c.push(a);
            b.S[dk(25)] = c
        })).then(xk)
    }

    function wk(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, Rd(Error("tcto")))
        })
    }

    function xk(a) {
        return a ? Pd(a) : Rd(Error("tcnull"))
    }

    function tk(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = kk(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions &&
                        (b = a.publisher.restrictions["1"], void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return jk(a)
    }

    function uk(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (Nb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? Pd(b) : Rd(Error("unav"))
    };

    function yk(a) {
        I.call(this, a)
    }
    w(yk, I);

    function zk(a) {
        I.call(this, a, -1, Ak)
    }
    w(zk, I);
    var Ak = [1, 2];

    function Bk(a) {
        this.exception = a
    }

    function Ck(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    Ck.prototype.start = function() {
        this.l()
    };
    Ck.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    Uj(this.h, !0);
                    Dk(this);
                    break;
                default:
                    Uj(this.h, !1) ? Dk(this) : this.j.setTimeout(Ga(this.l, this), 100)
            }
        } catch (a) {
            Dk(this, a)
        }
    };

    function Dk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            wj(e.h);
            G(e.j, oe, 1);
            d.call(c, new Bk(b))
        } catch (f) {
            a.i.reject(f)
        }
    };
    var Ek = "a".charCodeAt(),
        Fk = oc(Bd),
        Gk = oc(Cd);

    function Hk(a) {
        if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
        this.i = a;
        this.h = 0
    }

    function Ik(a) {
        var b = Jk(a, 16);
        return !0 === !!Jk(a, 1) ? (a = Kk(a), a.forEach(function(c) {
            if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
        }), a) : Lk(a, b)
    }

    function Kk(a) {
        for (var b = Jk(a, 12), c = []; b--;) {
            var d = !0 === !!Jk(a, 1),
                e = Jk(a, 16);
            if (d)
                for (d = Jk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort(function(f, g) {
            return f - g
        });
        return c
    }

    function Lk(a, b, c) {
        for (var d = [], e = 0; e < b; e++)
            if (Jk(a, 1)) {
                var f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                d.push(f)
            }
        return d
    }

    function Jk(a, b) {
        if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        var c = a.i.substring(a.h, a.h + b);
        a.h += b;
        return parseInt(c, 2)
    };

    function Mk(a, b) {
        try {
            var c = ib(a.split(".")[0]).map(function(e) {
                    return (aa = e.toString(2), r(aa, "padStart")).call(aa, 8, "0")
                }).join(""),
                d = new Hk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.h += 78;
            c.cmpId = Jk(d, 12);
            c.cmpVersion = Jk(d, 12);
            d.h += 30;
            c.tcfPolicyVersion = Jk(d, 6);
            c.isServiceSpecific = !!Jk(d, 1);
            c.useNonStandardStacks = !!Jk(d, 1);
            c.specialFeatureOptins = Nk(Lk(d, 12, Gk), Gk);
            c.purpose = {
                consents: Nk(Lk(d, 24, Fk), Fk),
                legitimateInterests: Nk(Lk(d, 24, Fk), Fk)
            };
            c.purposeOneTreatment = !!Jk(d, 1);
            c.publisherCC = String.fromCharCode(Ek +
                Jk(d, 6)) + String.fromCharCode(Ek + Jk(d, 6));
            c.vendor = {
                consents: Nk(Ik(d), b),
                legitimateInterests: Nk(Ik(d), b)
            };
            return c
        } catch (e) {
            return null
        }
    }

    function Nk(a, b) {
        var c = {};
        if (Array.isArray(b) && 0 !== b.length) {
            b = v(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
        } else
            for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
        delete c[0];
        return c
    };

    function Ok() {
        this.h = {}
    }

    function Pk() {
        var a = Qk;
        Rk || (Rk = new Sk);
        var b = Rk.h[a.key];
        if ("proto" === a.valueType) {
            try {
                var c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (d) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    };

    function Tk(a) {
        I.call(this, a)
    }
    w(Tk, I);

    function Uk(a) {
        I.call(this, a)
    }
    w(Uk, I);

    function Vk(a) {
        I.call(this, a)
    }
    w(Vk, I);
    var Wk = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];

    function Xk() {};

    function Yk(a) {
        I.call(this, a, -1, Zk)
    }
    w(Yk, I);

    function $k(a) {
        I.call(this, a)
    }
    w($k, I);

    function al(a) {
        I.call(this, a)
    }
    w(al, I);
    var Zk = [7];
    var Qk = new function() {
        this.key = "45368529";
        this.defaultValue = !1;
        this.valueType = "boolean"
    };

    function Sk() {
        this.h = {};
        var a = x.__fcexpdef || "";
        try {
            var b = JSON.parse(a)[0];
            a = "";
            for (var c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
            this.h = JSON.parse(a)
        } catch (d) {}
    }
    var Rk;
    w(Sk, Ok);

    function bl(a) {
        return (a = cl(a)) ? F(a, $k, 4) : null
    }

    function cl(a) {
        if (a = (new hk(a)).get("FCCDCF", ""))
            if (Pk())
                if (r(a, "startsWith").call(a, "%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    dl(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? ac(Yk, b) : null
        } catch (c) {
            return dl(2), null
        }
    }

    function dl(a) {
        new Xk;
        var b = new Uk;
        a = B(b, 7, a);
        b = new Tk;
        a = Tb(b, 1, a);
        b = new Vk;
        Ub(b, 22, Wk, a)
    };
    oc(Bd).map(function(a) {
        return Number(a)
    });
    oc(Cd).map(function(a) {
        return Number(a)
    });

    function el(a) {
        this.h = a;
        this.i = null
    }

    function fl(a) {
        a.__tcfapiPostMessageReady || gl(new el(a))
    }

    function gl(a) {
        a.i = function(b) {
            var c = "string" == typeof b.data;
            try {
                var d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            var e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
                var h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage &&
                    b.source.postMessage(f, b.origin);
                return f
            }, e.parameter)
        };
        a.h.addEventListener("message", a.i);
        a.h.__tcfapiPostMessageReady = !0
    };

    function hl(a, b) {
        function c() {
            if (!a.frames[b])
                if (d.body) {
                    var e = Vc("IFRAME", d);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    d.body.appendChild(e)
                } else a.setTimeout(c, 5)
        }
        var d = a.document;
        c()
    };

    function il(a) {
        this.h = a;
        this.i = a.document;
        this.m = (a = (a = cl(this.i)) ? F(a, al, 5) || null : null) ? A(a, 2) : null;
        this.j = (a = bl(this.i)) && null != A(a, 1) ? A(a, 1) : null;
        this.l = (a = bl(this.i)) && null != A(a, 2) ? A(a, 2) : null
    }

    function jl() {
        var a = window,
            b = P(uf);
        a.__uspapi || a.frames.__uspapiLocator || (a = new il(a), kl(a), b && ll(a))
    }

    function kl(a) {
        !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", hl(a.h, "__uspapiLocator"), Ia("__uspapi", function() {
            return a.B.apply(a, la(ua.apply(0, arguments)))
        }))
    }
    il.prototype.B = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };

    function ll(a) {
        !a.j || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", hl(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], Ia("__tcfapi", function() {
            return a.v.apply(a, la(ua.apply(0, arguments)))
        }), fl(a.h))
    }
    il.prototype.v = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(ml(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(ml(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ?
                        (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };

    function ml(a, b, c) {
        if (!a.j) return null;
        b = Mk(a.j, b);
        b.addtlConsent = null != a.l ? a.l : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };

    function nl(a) {
        I.call(this, a)
    }
    w(nl, I);
    nl.prototype.getWidth = function() {
        return D(this, 1, 0)
    };
    nl.prototype.getHeight = function() {
        return D(this, 2, 0)
    };

    function ol(a) {
        I.call(this, a)
    }
    w(ol, I);

    function pl(a) {
        I.call(this, a)
    }
    w(pl, I);
    var ql = [4, 5];

    function rl(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function sl(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function tl(a) {
        a = Mb(a, 2);
        if (!a) return !1;
        for (var b = 0; b < a.length; b++)
            if (1 == a[b]) return !0;
        return !1
    }

    function ul(a, b) {
        a = sl(rl(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = dd(a),
            d = vl(a);
        return r(b, "find").call(b, function(e) {
            var f = Array.isArray(A(e, 7)) ? A(F(e, Be, 7), 1) : A(e, 1);
            e = Array.isArray(A(e, 7)) ? A(F(e, Be, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function vl(a) {
        for (var b = {};;) {
            b[dd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var wl = {},
        xl = (wl.google_ad_channel = !0, wl.google_ad_host = !0, wl);

    function yl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        jj("ama", b, .01)
    }

    function zl(a) {
        var b = {};
        cd(xl, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function Al(a) {
        a = F(a, ye, 3);
        return !a || A(a, 1) <= Date.now() ? !1 : !0
    }

    function Bl(a) {
        return (a = Cl(Dl(a))) ? Al(a) ? a : null : null
    }

    function El(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            yl(a, {
                lserr: 1
            })
        }
    }

    function Cl(a) {
        try {
            return a ? ac(ve, a) : null
        } catch (b) {
            return null
        }
    }

    function Dl(a) {
        if (P(df)) return null;
        try {
            return a.getItem("google_ama_config")
        } catch (b) {
            return null
        }
    };

    function Fl(a) {
        I.call(this, a)
    }
    w(Fl, I);

    function Gl(a) {
        I.call(this, a, -1, Hl)
    }
    w(Gl, I);
    var Hl = [1];

    function Il(a) {
        I.call(this, a, -1, Jl)
    }
    w(Il, I);
    Il.prototype.getId = function() {
        return D(this, 1, 0)
    };
    Il.prototype.W = function() {
        return D(this, 7, 0)
    };
    var Jl = [2];

    function Kl(a) {
        I.call(this, a, -1, Ll)
    }
    w(Kl, I);
    Kl.prototype.W = function() {
        return D(this, 5, 0)
    };
    var Ll = [2];

    function Ml(a) {
        I.call(this, a, -1, Nl)
    }
    w(Ml, I);

    function Ol(a) {
        I.call(this, a, -1, Pl)
    }
    w(Ol, I);
    Ol.prototype.W = function() {
        return D(this, 1, 0)
    };

    function Ql(a) {
        I.call(this, a)
    }
    w(Ql, I);
    var Nl = [1, 4, 2, 3],
        Pl = [2];

    function Rl(a) {
        I.call(this, a, -1, Sl)
    }
    w(Rl, I);

    function Tl(a) {
        return Yb(a, Gl, 14, Lb)
    }
    var Sl = [19],
        Lb = [13, 14];
    var Ul = void 0;

    function Vl() {
        rg(Ul, pg);
        return Ul
    }

    function Wl(a) {
        rg(Ul, tg);
        Ul = a
    };

    function Xl(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && Yl(c, void 0 === d ? null : d) ? !0 : Zl(a, c, function(e) {
            return Ya(G(e, ic, 2), function(f) {
                return A(f, 1) === b
            })
        })
    }

    function Yl(a, b) {
        return b ? Jb(b, 13) ? E(Yb(b, Fl, 13, Lb), 1) : Jb(b, 14) && "" !== a && 1 === Mb(Tl(b), 1).length && Mb(Tl(b), 1)[0] === a ? E(F(Tl(b), Fl, 2), 1) : !1 : !1
    }

    function $l(a, b) {
        b = D(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function am(a) {
        var b = void 0 === b ? "" : b;
        var c = Tc(L) || L;
        return bm(c, a) ? !0 : Zl(L, b, function(d) {
            return Ya(Mb(d, 3), function(e) {
                return e === a
            })
        })
    }

    function cm(a) {
        return Zl(x, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function bm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && ab(a.split(","), b.toString())
    }

    function Zl(a, b, c) {
        a = Tc(a) || a;
        var d = dm(a);
        b && (b = Ad(String(b)));
        return nc(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function dm(a) {
        a = em(a);
        var b = {};
        cd(a, function(c, d) {
            try {
                var e = new gc(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function em(a) {
        return P(Ke) ? (a = rk({
            A: a,
            ba: Vl()
        }), null != a.h ? (fm("ok"), a = gm(a.h.value)) : (fm(a.i.message), a = {}), a) : gm(a.localStorage)
    }

    function gm(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : mc(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function fm(a) {
        P(Je) && jj("abg_adsensesettings_lserr", {
            s: a,
            g: P(Ke),
            c: Vl(),
            r: .01
        }, .01)
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function hm(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ka: !0,
            Bb: b,
            sa: a.ablation_viewport_offset
        } : null
    }

    function im(a, b) {
        a = U(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function jm(a) {
        U(L).allow_second_reactive_tag = a
    }

    function km() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function lm(a) {
        var b, c, d;
        return null != (d = null == (b = U(a)) ? void 0 : null == (c = b.head_tag_slot_vars) ? void 0 : c.google_ad_host) ? d : mm(a)
    }

    function mm(a) {
        var b, c;
        return null != (c = null == (b = a.document.querySelector('meta[name="google-adsense-platform-account"]')) ? void 0 : b.getAttribute("content")) ? c : null
    };

    function nm(a, b, c, d) {
        om(new pm(a, b, c, d))
    }

    function pm(a, b, c, d) {
        this.A = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function om(a) {
        Qd(Od(rk({
            A: a.A,
            ba: E(a.i, 6)
        }), function(b) {
            qm(a, b, !0)
        }), function() {
            rm(a)
        })
    }

    function qm(a, b, c) {
        Qd(Od(sm(b), function(d) {
            tm("ok");
            a.h(d)
        }), function() {
            El(a.A, b);
            c ? rm(a) : a.h(null)
        })
    }

    function rm(a) {
        Qd(Od(um(a), a.h), function() {
            vm(a)
        })
    }

    function vm(a) {
        qk({
            A: a.A,
            ba: E(a.i, 6),
            wa: 50,
            Na: function(b) {
                wm(a, b)
            }
        })
    }

    function sm(a) {
        return (a = Bl(a)) ? Pd(a) : Rd(Error("invlocst"))
    }

    function um(a) {
        if (lm(a.A)) return Rd(Error("invtag"));
        a: {
            var b = a.A;
            var c = a.j;a = a.i;
            if (Jb(a, 13)) b = (b = F(F(Yb(a, Fl, 13, Lb), yk, 2), zk, 2)) && 0 < G(b, oe, 1).length ? b : null;
            else {
                if (Jb(a, 14)) {
                    var d = Mb(Tl(a), 1),
                        e = F(F(F(Tl(a), Fl, 2), yk, 2), zk, 2);
                    if (1 === d.length && d[0] === c && e && 0 < G(e, oe, 1).length && Wb(a, 17) === b.location.host) {
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new ve, a = G(b, oe, 1), c = Vb(c, 1, a), b = G(b, ze, 2), b = Vb(c, 7, b), b = Pd(b)) : b = Rd(Error("invtag"));
        return b
    }

    function wm(a, b) {
        Qd(Od(b, function(c) {
            qm(a, c, !1)
        }), function(c) {
            tm(c.message);
            a.h(null)
        })
    }

    function tm(a) {
        jj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function xm(a, b, c, d) {
        try {
            var e = ul(a, G(c, ze, 7));
            if (e && tl(e)) {
                if (A(e, 4)) {
                    var f = {},
                        g = new be(null, (f.google_package = A(e, 4), f));
                    d = ce(d, g)
                }
                var h = new Tj(a, b, c, e, d);
                rj(1E3, function() {
                    var k = new Dd;
                    (new Ck(a, h, k)).start();
                    return k.i
                }, a).then(Ha(ym, a), Ha(zm, a))
            }
        } catch (k) {
            yl(a, {
                atf: -1
            })
        }
    }

    function ym(a) {
        yl(a, {
            atf: 1
        })
    }

    function zm(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        yl(a, {
            atf: 0
        })
    };

    function Am(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Bm(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Bm(a) {
        var b = "";
        cd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    db || !y("Safari") || Ra();

    function Cm() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function Dm() {
        var a = new Cm;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function Em(a) {
        a = void 0 === a ? function() {} : a;
        x.google_llp || (x.google_llp = {});
        var b = x.google_llp,
            c = b[7];
        if (c) return c;
        c = Dm();
        b[7] = c;
        a();
        return c
    }

    function Fm(a) {
        return Em(function() {
            Uc(x.document, a)
        }).promise
    };

    function Gm(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Hm(a) {
        if (x.google_apltlad || x !== x.top || !a.google_ad_client) return null;
        x.google_apltlad = !0;
        var b = Gm(a.google_ad_client),
            c = b.enable_page_level_ads;
        cd(a, function(d, e) {
            Si[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        P(cf) && (c.easpf = !0, c.easpi = P(rf));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function Im(a) {
        return Aa(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Jm(a, b) {
        U(L).ama_ran_on_page || rj(1001, function() {
            return Km(new Lm(a, b))
        }, x)
    }

    function Lm(a, b) {
        this.h = x;
        this.i = a;
        this.j = b
    }

    function Km(a) {
        P(Ef) ? nm(a.h, a.j, a.i.google_ad_client || "", function(b) {
            var c = a.h,
                d = a.i;
            U(L).ama_ran_on_page || b && Mm(c, d, b)
        }) : qk({
            A: a.h,
            ba: E(a.j, 6),
            wa: 50,
            Na: function(b) {
                return Nm(a, b)
            }
        })
    }

    function Nm(a, b) {
        Qd(Od(b, function(c) {
            Om("ok");
            var d = a.h,
                e = a.i;
            if (!U(L).ama_ran_on_page) {
                var f = Bl(c);
                f ? Mm(d, e, f) : El(d, c)
            }
        }), function(c) {
            return Om(c.message)
        })
    }

    function Om(a) {
        jj("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Mm(a, b, c) {
        if (Array.isArray(A(c, 24))) {
            var d = xj(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = F(c, qe, 24)) ? 0 : null == (f = F(e, se, 3)) ? 0 : Yb(f, te, 2, ue))
        }
        if (Im(b) && (d = ul(a, G(c, ze, 7)), !d || !Nb(d, 8))) return;
        U(L).ama_ran_on_page = !0;
        var g;
        if (null == (g = F(c, Ee, 15)) ? 0 : Nb(g, 23)) U(a).enable_overlap_observer = !0;
        if ((g = F(c, Ce, 13)) && 1 === A(g, 1)) {
            var h = 0,
                k = F(g, De, 6);
            k && A(k, 3) && (h = A(k, 3) || 0);
            im(a, h)
        } else if (null == (h = F(c, qe, 24)) ? 0 : null == (k = F(h, se, 3)) ? 0 : Yb(k, te, 2, ue)) xj(a).ablatingThisPageview = !0, im(a,
            1);
        td(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = zl(Aa(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = ce(ge, new be(null, b));
        hj(782, function() {
            xm(a, l, c, m)
        })
    };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var Pm = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode"]),
        Qm = ja(["https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700"]),
        Rm = ja(["https://fonts.googleapis.com"]),
        Sm = ja(["https://fonts.gstatic.com"]);

    function Tm() {
        for (var a = L.document, b = v([wd(Rm), wd(Sm)]), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.createElement("LINK");
            d.crossOrigin = "";
            Ec(d, c, "preconnect");
            a.head.appendChild(d)
        }
    };

    function Um(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Vm(a) {
        var b = L.document;
        if (b.currentScript) return Um(b.currentScript, a);
        b = v(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === Um(c.value, a)) return 0;
        return 1
    };

    function Wm(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[zg] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return Xl(L, Number(g))
        }, c[24] = function(g) {
            return am(Number(g))
        }, c[61] = function() {
            return E(b, 6)
        }, c[63] = function() {
            return E(b, 6) || ".google.ch" === Wb(b, 8)
        }, c), f[Ag] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (q) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            a: {
                var k = -1;
                try {
                    h && (k = parseInt(h.getItem(g), 10))
                } catch (q) {
                    k = null;
                    break a
                }
                k = 0 <= k && 1E3 >
                k ? k : null
            }
            if (null === k) {
                k = ad() ? null : Math.floor(1E3 * bd());
                var l;
                if (l = null != k && h) a: {
                    var m = String(k);
                    try {
                        if (h) {
                            h.setItem(g, m);
                            l = m;
                            break a
                        }
                    } catch (q) {}
                    l = null
                }
                h = l ? k : null
            } else h = k;
            return null != h ? h : void 0
        }, d), f[Bg] = (e[6] = function() {
            return Wb(b, 15)
        }, e), f
    };

    function Xm(a) {
        a = void 0 === a ? x : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Ym() {
        var a = O(Rf).h(Gf.h, Gf.defaultValue),
            b = L.document;
        b = void 0 === b ? window.document : b;
        nd(a, b)
    };

    function Zm(a, b) {
        try {
            var c = a.split(".");
            a = x;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function $m() {
        var a = {};
        this[zg] = (a[8] = function(b) {
            try {
                return null != xa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = xa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return ab(O(hi).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Zm(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!x.document.querySelector(b)
            } catch (c) {}
        }, a[69] = function(b) {
            var c =
                x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.features(), r(aa, "includes")).call(aa, b))
        }, a[70] = function(b) {
            var c = x.document;
            c = void 0 === c ? document : c;
            var d;
            return !(null == (d = c.featurePolicy) || !(aa = d.allowedFeatures(), r(aa, "includes")).call(aa, b))
        }, a);
        a = {};
        this[Ag] = (a[3] = function() {
            return jd()
        }, a[6] = function(b) {
            b = Zm(b, "number");
            return void 0 !== b ? b : void 0
        }, a[11] = function(b) {
            b = void 0 === b ? "" : b;
            var c = x;
            b = void 0 === b ? "" : b;
            c = void 0 === c ? window : c;
            b = (c = (c = c.location.href.match(Pc)[3] ||
                null) ? decodeURI(c) : c) ? dd(c + b) : null;
            return null == b ? void 0 : b % 1E3
        }, a);
        a = {};
        this[Bg] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Zm(b, "string");
            return void 0 !== b ? b : void 0
        }, a[10] = function() {
            try {
                var b = x.document;
                return b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""
            } catch (c) {
                return ""
            }
        }, a[11] = function() {
            try {
                var b, c, d, e, f;
                return null != (f = null == (d = null == (b = xa("google_tag_data")) ? void 0 : null == (c =
                    b.uach) ? void 0 : c.fullVersionList) ? void 0 : null == (e = r(d, "find").call(d, function(g) {
                    return "Google Chrome" === g.brand
                })) ? void 0 : e.version) ? f : ""
            } catch (g) {
                return ""
            }
        }, a)
    };
    var an = [12, 13, 20];

    function bn() {}
    bn.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Pa ? !1 : d.Pa,
            g = void 0 === d.sb ? {} : d.sb;
        d = void 0 === d.ub ? [] : d.ub;
        this.l = a;
        this.v = {};
        this.B = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = mi()) && Va(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Va(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function cn(a, b, c) {
        var d = [],
            e = dn(a.l, b),
            f;
        if (f = 9 !== b) a.v[b] ? f = !0 : (a.v[b] = !0, f = !1);
        if (f) {
            var g;
            null == (g = a.h) || nh(g, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var h;
            null == (h = a.h) || nh(h, b, c, d, [], 3);
            return d
        }
        var k = ab(an, b),
            l = [];
        Va(e, function(q) {
            var u = new ch;
            if (q = en(a, q, c, u)) 0 !== Sb(u, dh) && l.push(u), u = q.getId(), d.push(u), fn(a, u, k ? 4 : c), (q = G(q, Kg, 2)) && (k ? Ih(q, Kh(), a.h, u) : Ih(q, [c], a.h, u))
        });
        var m;
        null == (m = a.h) || nh(m, b, c, d, l, 1);
        return d
    }

    function fn(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        ab(a, b) || a.push(b)
    }

    function gn(a, b) {
        a.l.push.apply(a.l, la(Wa(Xa(b, function(c) {
            return new Ol(c)
        }), function(c) {
            return !ab(an, c.W())
        })))
    }

    function en(a, b, c, d) {
        var e = O(qh).h;
        if (!Gg(F(b, ug, 3), e)) return null;
        var f = G(b, Il, 2),
            g = D(b, 6, 0);
        if (g) {
            Rb(d, 1, dh, g);
            f = e[Ag];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), Qb(d, 3, c)
            } catch (k) {}
            return (b = hn(b, c)) ? jn(a, [b], 1) : null
        }
        if (g = D(b, 10, 0)) {
            Rb(d, 2, dh, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Ag][9];
                    break;
                case 2:
                    h = e[Ag][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && Qb(d, 3, c);
            return (b = hn(b, c)) ? jn(a, [b], 1) : null
        }
        d = e ? Wa(f, function(k) {
            return Gg(F(k,
                ug, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * D(b, 1, 0);
        return (b = D(b, 4, 0)) ? kn(a, b, c, d) : jn(a, d, c / 1E3)
    }

    function kn(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = jn(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function jn(a, b, c) {
        var d = a.j,
            e = Za(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.B ? null : Xc(b, c)
    }

    function ln(a, b) {
        ci(Nh, function(c) {
            a.j[c] = !0
        }, b);
        ci(Qh, function(c, d) {
            return cn(a, c, d)
        }, b);
        ci(Rh, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        ci($h, function(c) {
            return gn(a, c)
        }, b);
        ci(Oh, function(c, d) {
            return fn(a, c, d)
        }, b)
    }

    function dn(a, b) {
        return (a = Za(a, function(c) {
            return c.W() == b
        })) && G(a, Kl, 2) || []
    }

    function hn(a, b) {
        var c = G(a, Il, 2),
            d = c.length,
            e = D(a, 8, 0);
        a = d * D(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * bd());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = O(qh).h;
        return !c || e && !Gg(F(c, ug, 3), e) ? null : c
    };

    function mn() {
        this.h = function() {}
    }

    function nn(a) {
        O(mn).h(a)
    };
    var on, pn, qn, rn, sn, tn;

    function un(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Xm() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new mh(null != (rn = null == (on = F(a, Ql, 5)) ? void 0 : D(on, 2, 0)) ? rn : 0, null != (sn = null == (pn = F(a, Ql, 5)) ? void 0 : D(pn, 4, 0)) ? sn : 0, null != (tn = null == (qn = F(a, Ql, 5)) ? void 0 : E(qn, 3)) ? tn : !1) : f;
        d.hasOwnProperty("init-done") ? (di($h, d)(Xa(G(a, Ol, 2), function(g) {
            return g.toJSON()
        })), di(ai, d)(Xa(G(a, Kg, 1), function(g) {
            return g.toJSON()
        }), e), b && di(bi, d)(b), vn(d, e)) : (ln(O(bn).init(G(a, Ol, 2), e, f, c), d), ei(d), fi(d), gi(d), vn(d, e), Ih(G(a, Kg, 1), [e], f,
            void 0, !0), rh = rh || !(!c || !c.pb), nn(O($m)), b && nn(b))
    }

    function vn(a, b) {
        a = void 0 === a ? Xm() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        ii(O(hi), c, d);
        wn(a, b);
        O(mn).h = di(bi, a);
        O(Rf).m()
    }

    function wn(a, b) {
        var c = O(Rf);
        c.i = function(d, e) {
            return di(Th, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return di(Uh, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return di(Vh, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return di(Wh, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            di(Ph, a)(b)
        }
    };

    function xn(a, b, c) {
        var d = U(a);
        if (d.plle) vn(Xm(a), 1);
        else {
            d.plle = !0;
            d = F(b, Ml, 12);
            var e = E(b, 9);
            un(d, Wm(c, b), {
                Pa: e && !!a.google_disable_experiments,
                pb: e
            }, Xm(a));
            if (c = Wb(b, 15)) c = Number(c), O(hi).l(c);
            b = v(Mb(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, O(hi).j(c);
            O(hi).i(12);
            O(hi).i(10);
            a = Tc(a) || a;
            Am(a.location, "google_mc_lab") && O(hi).j(44738307)
        }
    };

    function yn(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var zn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function An(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Ki.call(this, a, b);
        this.ga = c;
        this.qb = d
    }
    w(V, Ki);
    V.prototype.ra = function() {
        return this.ga
    };
    V.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function Bn(a) {
        return function(b) {
            return !!(b.ga & a)
        }
    };
    var Cn = {},
        Dn = (Cn.image_stacked = 1 / 1.91, Cn.image_sidebyside = 1 / 3.82, Cn.mobile_banner_image_sidebyside = 1 / 3.82, Cn.pub_control_image_stacked = 1 / 1.91, Cn.pub_control_image_sidebyside = 1 / 3.82, Cn.pub_control_image_card_stacked = 1 / 1.91, Cn.pub_control_image_card_sidebyside = 1 / 3.74, Cn.pub_control_text = 0, Cn.pub_control_text_card = 0, Cn),
        En = {},
        Fn = (En.image_stacked = 80, En.image_sidebyside = 0, En.mobile_banner_image_sidebyside = 0, En.pub_control_image_stacked = 80, En.pub_control_image_sidebyside = 0, En.pub_control_image_card_stacked =
            85, En.pub_control_image_card_sidebyside = 0, En.pub_control_text = 80, En.pub_control_text_card = 80, En),
        Gn = {},
        Hn = (Gn.pub_control_image_stacked = 100, Gn.pub_control_image_sidebyside = 200, Gn.pub_control_image_card_stacked = 150, Gn.pub_control_image_card_sidebyside = 250, Gn.pub_control_text = 100, Gn.pub_control_text_card = 150, Gn);

    function In(a) {
        var b = 0;
        a.T && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b) return {
            N: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.T.split(",");
        var c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            N: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            N: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                N: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (r(Number, "isNaN").call(Number, g) || 0 === g) return {
                N: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            L: d,
            K: e,
            Ta: b
        }
    }

    function Jn(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Kn = cb("script");

    function Ln(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.v = a;
        this.U = b;
        this.ga = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.P = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.H = void 0 === h ? null : h;
        this.J = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.O = void 0 === q ? null : q;
        this.R = this.D = this.B = null
    }
    Ln.prototype.size = function() {
        return this.U
    };

    function Mn(a, b, c) {
        null != a.ga && (c.google_responsive_formats = a.ga);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.H && (c.gfwroml = a.H);
        null != a.J && (c.gfwromr = a.J);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.O && (c.gfwroz = a.O);
        null != a.B && (c.gml = a.B);
        null != a.D && (c.gmr = a.D);
        null != a.R && (c.gzi = a.R);
        b = Tc(window) || window;
        Am(b.location, "google_responsive_dummy_ad") &&
            (ab([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + Kn + ">window.top.postMessage('" + a + "', '*');\n          </" + Kn + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var Nn = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function On(a, b) {
        Ki.call(this, a, b)
    }
    w(On, Ki);
    On.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Pn(a, b) {
        Qn(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Ln(9, new On(a, Math.floor(a * b.google_phwr)));
        var c = Nc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Dn.mobile_banner_image_sidebyside + Fn.mobile_banner_image_sidebyside) + 96), a = {
            da: a,
            ca: c,
            K: 1,
            L: 12,
            T: "mobile_banner_image_sidebyside"
        }) : (a = Jn(a), a = {
            da: a.width,
            ca: a.height,
            K: 1,
            L: 13,
            T: "image_sidebyside"
        }) : (a = Jn(a), a = {
            da: a.width,
            ca: a.height,
            K: 4,
            L: 2,
            T: "image_stacked"
        });
        Rn(b, a);
        return new Ln(9, new On(a.da,
            a.ca))
    }

    function Sn(a, b) {
        Qn(a, b);
        var c = In({
            L: b.google_content_recommendation_rows_num,
            K: b.google_content_recommendation_columns_num,
            T: b.google_content_recommendation_ui_type
        });
        if (c.N) a = {
            da: 0,
            ca: 0,
            K: 0,
            L: 0,
            T: "image_stacked",
            N: c.N
        };
        else {
            var d = 2 === c.Ta.length && 468 <= a ? 1 : 0;
            var e = c.Ta[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Hn[e];
            for (var g = c.K[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.L[d];
            d = Math.floor(((a - 8 * f - 8) / f * Dn[e] + Fn[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    zb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    zb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                da: a.width,
                ca: a.height,
                K: f,
                L: c,
                T: e
            }
        }
        if (a.N) throw new S(a.N);
        Rn(b, a);
        return new Ln(9, new On(a.da, a.ca))
    }

    function Qn(a, b) {
        if (0 >= a) throw new S("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Rn(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };

    function Tn(a, b) {
        Ki.call(this, a, b)
    }
    w(Tn, Ki);
    Tn.prototype.h = function() {
        return this.minWidth()
    };
    Tn.prototype.i = function(a, b, c) {
        Ji(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Un = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Vn(a, b) {
        Ki.call(this, a, b)
    }
    w(Vn, Ki);
    Vn.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Wn(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = Ei(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = og(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && Hi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Ji(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new S("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Ln(11, new Ki(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new S("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new S("Invalid height: height=" + f);
            if (50 > f) throw new S("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new S("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Ln(11, new Ki(a, f))
        }
        d = Un[f];
        if (!d) throw new S("Invalid data-ad-layout value: " + f);
        c = Oi(c, b);
        b = og(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new Ln(11, "in-article" == f ? new Vn(a, b) : new Ki(a, b))
    };

    function Xn(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Yn(a, b) {
        for (var c = Zn.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        Zn = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];

    function $n(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            F: a,
            G: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || ao(b) || e.google_ad_resize ? (b = Fi(a, c, d, e), c = !0 !== b ? {
            F: a,
            G: b
        } : {
            F: og(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        b = c.G;
        return !0 !== b ? {
            F: a,
            G: b
        } : d.parentElement ? {
            F: c.F,
            G: b
        } : {
            F: a,
            G: b
        }
    }

    function bo(a, b, c, d, e) {
        var f = hj(247, function() {
                return $n(a, b, c, d, e)
            }),
            g = f.F;
        f = f.G;
        var h = !0 === f,
            k = K(d.style.width),
            l = K(d.style.height),
            m = co(g, b, c, d, e, h);
        g = m.aa;
        h = m.Y;
        var q = m.ra;
        m = m.Sa;
        var u = eo(b, q),
            z, J = (z = Li(d, c, "marginLeft", K)) ? z + "px" : "",
            C = (z = Li(d, c, "marginRight", K)) ? z + "px" : "";
        z = Li(d, c, "zIndex") || "";
        return new Ln(u, g, q, null, m, f, h, J, C, l, k, z)
    }

    function ao(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function co(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, og(c)) ? 4 : 3 : Di(b);
        var g = !1,
            h = !1;
        if (488 > og(c)) {
            var k = yi(d, c);
            var l = Oi(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Mi(a), Bn(b)];
        l.push(Ni(488 > og(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Qi(e.google_max_responsive_height));
        var m = [function(u) {
            return !u.qb
        }];
        if (g || h) g = Ri(c, d), m.push(Qi(g));
        var q = Yn(Xn(l), Xn(m));
        if (!q) throw new S("No slot size for availableWidth=" + a);
        l = hj(248, function() {
            var u;
            a: if (f) {
                if (e.gfwrnh && (u = K(e.gfwrnh))) {
                    u = {
                        aa: new Tn(a, u),
                        Y: !0
                    };
                    break a
                }
                u = a / 1.2;
                var z = Math;
                var J = z.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var C = Infinity;
                else {
                    C = d;
                    var H = Infinity;
                    do {
                        var T = Li(C, c, "height", K);
                        T && (H = Math.min(H, T));
                        (T = Li(C, c, "maxHeight", K)) && (H = Math.min(H, T))
                    } while ((C = C.parentElement) && "HTML" != C.tagName);
                    C = H
                }
                z = J.call(z, u, C);
                if (z < .5 * u || 100 > z) z = u;
                P(Bf) && !Oi(d, c) && (z = Math.max(z, .5 * ng(c).clientHeight));
                u = {
                    aa: new Tn(a, Math.floor(z)),
                    Y: z < u ? 102 : !0
                }
            } else u = {
                aa: q,
                Y: 100
            };
            return u
        });
        g = l.aa;
        l = l.Y;
        return "in-article" === e.google_ad_layout &&
            fo(c) ? {
                aa: go(a, c, d, g, e),
                Y: !1,
                ra: b,
                Sa: k
            } : {
                aa: g,
                Y: l,
                ra: b,
                Sa: k
            }
    }

    function eo(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function go(a, b, c, d, e) {
        var f = e.google_ad_height || Li(c, b, "height", K);
        b = Wn(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new V(b.minWidth(), b.height(), 1) : d
    }

    function fo(a) {
        return P(zf) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function ho(a, b, c, d, e) {
        var f;
        (f = og(b)) ? 488 > og(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ji(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        var g = f;
        f = g.F;
        g = g.G;
        if (!0 !== g || a == f) return new Ln(12, new Ki(a, d), null, null, !0, g, 100);
        a = co(f, "auto", b, c, e, !0);
        return new Ln(1, a.aa, a.ra, 2, !0, g, a.Y)
    };

    function io(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = v(Nn), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (ao(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = P(Af) || P(zf) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (jo(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return jo(b), 1
    }

    function ko(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Li(b, d, "width", K) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = lo(a, e, b, c, d)) ? f : bo(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        Mn(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function lo(a, b, c, d, e) {
        var f = d.google_ad_height || Li(c, e, "height", K);
        switch (a) {
            case 5:
                return f = hj(247, function() {
                    return $n(b, d.google_ad_format, e, c, d)
                }), a = f.F, f = f.G, !0 === f && b != a && Ji(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Pn(a, d);
            case 9:
                return Sn(b, d);
            case 8:
                return Wn(b, e, c, f, d);
            case 10:
                return ho(b, e, c, f, d)
        }
    }

    function jo(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function mo(a, b) {
        var c = Tc(b);
        if (c) {
            c = og(c);
            var d = Wc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var no = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        oo = ja(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        po = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        qo = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        ro = ja(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function so(a) {
        fj.Za(function(b) {
            b.shv = String(a);
            b.mjsv = "m202206270101";
            var c = O(hi).h(),
                d = U(x);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function to(a) {
        var b = a.vb;
        return a.lb || ("dev" === b ? "dev" : "")
    };
    var uo = {},
        vo = (uo.google_ad_modifications = !0, uo.google_analytics_domain_name = !0, uo.google_analytics_uacct = !0, uo.google_pause_ad_requests = !0, uo.google_user_agent_client_hint = !0, uo);

    function wo(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function xo(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function yo(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };
    var zo = new p.WeakMap;

    function Ao() {
        function a(e) {
            e = v(e);
            e.next();
            e = ka(e);
            return c(d, e)
        }
        var b = Bo;
        var c = void 0 === c ? Co : c;
        var d = Ba(b);
        return function() {
            var e = ua.apply(0, arguments),
                f = this || x,
                g = zo.get(f);
            g || (g = {}, zo.set(f, g));
            f = g;
            g = [this].concat(la(e));
            e = a ? a(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = v(g);
                g = h.next().value;
                h = ka(h);
                g = b.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    }

    function Co(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Do(a) {
        return P(yf) ? Ao()(a) : Bo(a)
    }

    function Bo(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d, e, f;
        if (null != (e = null != (d = null == (b = U(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) ||
                /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !zd() ? wo : xo;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = yo(d[2]);
                b = c.google_ad_client ? c.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };
    var Eo = "undefined" === typeof sttc ? void 0 : sttc;

    function Fo(a) {
        var b = fj;
        try {
            return rg(a, sg), new Rl(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Rl
    };

    function Go(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function Ho(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function Io() {
        var a = new p.Set,
            b = Pj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function Jo(a) {
        a = a.id;
        return null != a && (Io().has(a) || r(a, "startsWith").call(a, "google_ads_iframe_") || r(a, "startsWith").call(a, "aswift"))
    }

    function Ko(a, b, c) {
        if (!a.sources) return !1;
        switch (Lo(a)) {
            case 2:
                var d = Mo(a);
                if (d) return c.some(function(f) {
                    return No(d, f)
                });
            case 1:
                var e = Oo(a);
                if (e) return b.some(function(f) {
                    return No(e, f)
                })
        }
        return !1
    }

    function Lo(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Oo(a) {
        return Po(a, function(b) {
            return b.currentRect
        })
    }

    function Mo(a) {
        return Po(a, function(b) {
            return b.previousRect
        })
    }

    function Po(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Qo() {
        Hd.call(this);
        this.i = this.h = this.P = this.O = this.H = 0;
        this.Ga = this.Da = Number.NEGATIVE_INFINITY;
        this.za = this.Ba = this.Ca = this.Ea = this.Ja = this.m = this.Ia = this.U = 0;
        this.Aa = !1;
        this.R = this.J = this.D = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ha = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.Fa = !1;
        this.ja = function() {}
    }
    w(Qo, Hd);

    function Ro() {
        var a = new Qo;
        if (P(Hf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, So(a).observe({
                    type: c,
                    buffered: !0
                });
                To(a)
            }
        }
    }

    function So(a) {
        a.l || (a.l = new PerformanceObserver(qj(640, function(b) {
            var c = Uo !== window.scrollX || Vo !== window.scrollY ? [] : Wo,
                d = Xo();
            b = v(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.H += Number(e.value);
                        Number(e.value) > f.O && (f.O = Number(e.value));
                        f.P += 1;
                        var g = Ko(e, c, d);
                        g && (f.m += e.value, f.Ea++);
                        if (5E3 < e.startTime - f.Da || 1E3 < e.startTime - f.Ga) f.Da = e.startTime, f.h = 0, f.i = 0;
                        f.Ga = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.U && (f.U = f.h, f.Ja = f.i, f.Ia = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.Ca = Math.floor(e.renderTime || e.loadTime);
                    a.Ba = e.size;
                    break;
                case "first-input":
                    a.za = Number((e.processingStart - e.startTime).toFixed(3));
                    a.Aa = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.D += e, a.J = Math.max(a.J, e), a.R += 1
            }
        })));
        return a.l
    }

    function To(a) {
        var b = qj(641, function() {
                var d = document;
                2 == (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Yo(a)
            }),
            c = qj(641, function() {
                return void Yo(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.ja = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            So(a).disconnect()
        }
    }
    Qo.prototype.j = function() {
        Hd.prototype.j.call(this);
        this.ja()
    };

    function Yo(a) {
        if (!a.Fa) {
            a.Fa = !0;
            So(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Ho("cls", a.H), b += Ho("mls", a.O), b += Go("nls", a.P), window.LayoutShiftAttribution && (b += Ho("cas", a.m), b += Go("nas", a.Ea)), b += Ho("wls", a.U), b += Ho("tls", a.Ia), window.LayoutShiftAttribution && (b += Ho("was", a.Ja)));
            window.LargestContentfulPaint && (b += Go("lcp", a.Ca), b += Go("lcps", a.Ba));
            window.PerformanceEventTiming && a.Aa && (b += Go("fid", a.za));
            window.PerformanceLongTaskTiming &&
                (b += Go("cbt", a.D), b += Go("mbt", a.J), b += Go("nlt", a.R));
            for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) Jo(e.value) && c++;
            b += Go("nif", c);
            b += Go("ifi", yd(window));
            c = O(hi).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (x === x.top ? 1 : 0);
            b += a.Ha ? "&qqid=" + encodeURIComponent(a.Ha) : Go("pvsid", od(x));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.v || (a.v = !0, a.j())
        }
    }

    function No(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Xo() {
        var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(Jo),
            b = [].concat(la(Io())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Uo = window.scrollX;
        Vo = window.scrollY;
        return Wo = [].concat(la(a), la(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Uo = void 0,
        Vo = void 0,
        Wo = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function Zo(a, b, c) {
        Hd.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && $o() && this.h.push(X);
        c && this.h.push(Y);
        if (document.hasTrustToken && !P(Mf)) {
            var e = new p.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(la(e), la(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    w(Zo, Hd);

    function $o() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function ap() {
        var a = void 0 === a ? window.document : a;
        var b = O(Rf).h(Pf.h, Pf.defaultValue);
        nd(b, a)
    }

    function bp(a, b) {
        return a || ".google.ch" === b || "function" === typeof L.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function cp() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function dp() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return cp()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), cp();
            Z(X.issuerOrigin, 9)
        })
    }

    function ep() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? cp() : dp()
        })
    }

    function fp() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = od(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = Q(Of);
                        Math.random() <= f && Yf({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function gp(a) {
        if (document.hasTrustToken && !P(Mf) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = ep(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = fp(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };

    function hp(a) {
        I.call(this, a, -1, ip)
    }
    w(hp, I);

    function jp(a, b) {
        return B(a, 2, b)
    }

    function kp(a, b) {
        return B(a, 3, b)
    }

    function lp(a, b) {
        return B(a, 4, b)
    }

    function mp(a, b) {
        return B(a, 5, b)
    }

    function np(a, b) {
        return B(a, 9, b)
    }

    function op(a, b) {
        return Vb(a, 10, b)
    }

    function pp(a, b) {
        return B(a, 11, b)
    }

    function qp(a, b) {
        return B(a, 1, b)
    }

    function rp(a) {
        I.call(this, a)
    }
    w(rp, I);
    rp.prototype.getVersion = function() {
        return Wb(this, 2)
    };
    var ip = [10, 6];
    var sp = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function tp() {
        var a;
        return null != (a = L.google_tag_data) ? a : L.google_tag_data = {}
    }

    function up() {
        var a, b;
        if ("function" !== typeof(null == (a = L.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)) return null;
        var c = tp();
        if (c.uach_promise) return c.uach_promise;
        a = L.navigator.userAgentData.getHighEntropyValues(sp).then(function(d) {
            null != c.uach || (c.uach = d);
            return d
        });
        return c.uach_promise = a
    }

    function vp(a) {
        var b;
        return pp(op(np(mp(lp(kp(jp(qp(new hp, a.platform || ""), a.platformVersion || ""), a.architecture || ""), a.model || ""), a.uaFullVersion || ""), a.bitness || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new rp;
            d = B(d, 1, c.brand);
            return B(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function wp() {
        var a, b;
        return null != (b = null == (a = up()) ? void 0 : a.then(function(c) {
            return vp(c)
        })) ? b : null
    };

    function xp(a, b) {
        b.google_ad_host || (a = mm(a)) && (b.google_ad_host = a)
    }

    function yp(a, b, c) {
        c = void 0 === c ? "" : c;
        L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
        L.google_sa_queue || (L.google_sa_queue = [], L.google_process_slots = ij(215, function() {
            return zp(L.google_sa_queue)
        }), a = Ap(c, a, b), Uc(L.document, a).id = "google_shimpl")
    }

    function zp(a) {
        var b = a.shift();
        "function" === typeof b && hj(216, b);
        a.length && x.setTimeout(ij(215, function() {
            return zp(a)
        }), 0)
    }

    function Bp(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Ap(a, b, c) {
        var d = Math.random() < Q(vf) ? zc(yc(b.xb).toString()) : null;
        b = E(c, 4) ? b.wb : b.yb;
        d = d ? d : zc(yc(b).toString());
        b = {};
        a: {
            if (E(c, 4)) {
                if (c = a || Do(L)) {
                    var e = {};
                    c = (e.client = c, e.plah = L.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        Cp(c, b);
        a: {
            if (!P(cf) && (P(rf) || P(bf)) && (a = a || Do(L), c = lm(L), a)) {
                e = {};
                a = (e.client = a, e.plah = L.location.host, e.ama_t = "adsense", e.asntp = Q(Te), e.asntpv = Q(Xe), e.asntpl = Q(Ve), e.asntpm = Q(We), e.asntpc = Q(Ue), e.asna = Q(Pe), e.asnd = Q(Qe), e.asnp = Q(Re), e.asns =
                    Q(Se), e.asmat = Q(Oe), e.asptt = Q(Ye), e.easpi = P(rf), e.asro = P(Ze), e.host = c, e.easai = P(pf), e);
                break a
            }
            a = {}
        }
        Cp(a, b);
        Cp(Sf() ? {
            bust: Sf()
        } : {}, b);
        return wc(d, b)
    }

    function Cp(a, b) {
        cd(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Dp(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            for (var c = [x.top], d = [], e = 0, f; f = c[e++];) {
                b && !Sc(f) || d.push(f);
                try {
                    if (f.frames)
                        for (var g = 0; g < f.frames.length && 1024 > c.length; ++g) c.push(f.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < d.length; b++) try {
                var h = d[b].frames.google_esf;
                if (h) {
                    rd = h;
                    break a
                }
            } catch (k) {}
            rd = null
        }
        if (rd) return null;d = Vc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = yc(a.Db).toString();d.style.display = "none";
        return d
    }

    function Ep(a, b, c, d) {
        Fp(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + (P(Ff) ? "_host" : "_anchor"));) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            if (P(Ff)) h = Vc("DIV"), h.id = e + "_host", yn(h, g, f), h.style.display = "block", f = h;
            else {
                h = Vc("INS");
                h.id = e + "_anchor";
                yn(h, g, f);
                h.style.display = "block";
                var k = Vc("INS");
                k.id = e + "_expand";
                yn(k, g, f);
                k.style.display = "inline-table";
                k.appendChild(h);
                f = k
            }
            c.appendChild(f);
            return e
        })
    }

    function Fp(a, b, c, d, e) {
        e = e(a, b);
        Gp(a, c, b);
        c = Ka;
        var f = (new Date).getTime();
        b.google_lrv = Wb(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = f > c ? f - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + (P(Ff) ? "_host" : "_anchor")) ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        var g = {
            pubWin: a,
            vars: b
        };
        Bp(a, function() {
            var h = a.google_sa_impl(g);
            h && h.catch && kj(911, h)
        }, d)
    }

    function Gp(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !zn[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = dd(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var u = a.parent;
                for (e = 0; u && u !== a && 25 > e; ++e) {
                    var z = u.frames;
                    for (d = 0; d < z.length; ++d)
                        if (a === z[d]) {
                            b.push(d);
                            break
                        }
                    a = u;
                    u = a.parent
                }
            } catch (J) {}
            c.google_ad_dom_fingerprint = dd(h + b.join()).toString()
        }
    }

    function Hp() {
        var a = Tc(x);
        a && (a = mg(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Ip(a) {
        ap();
        bp(Vl(), Wb(a, 8)) || ij(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = P(b.PeriodicSyncManager ? Kf : Lf);
            var c = P(Nf);
            b = new Zo(!0, b, c);
            0 < Q(Qf) ? L.google_trust_token_operation_promise = gp(b) : gp(b)
        })();
        a = wp();
        null != a && a.then(function(b) {
            a: {
                wb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), bc);
                    break a
                } finally {
                    wb = !1
                }
                c = void 0
            }
            L.google_user_agent_client_hint = c
        });
        Ym()
    };

    function Jp(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Kp(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = Rc(c)) && (b.google_ad_client = Jp("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ma(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Jp(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Lp(a) {
        if (a = ud(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Mp(a, b, c, d) {
        Kp(a, b);
        if (c.document && c.document.body && !io(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = mo(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!zn[e + "x" + g];
                var h = f;
                if (e) {
                    var k = An(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new S("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = bo(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                Mn(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Li(a, c, "width", K) || b.google_ad_width || 0;
        f = Ha(bo, e, "auto", c, a, b, !1, !0);
        if (!P(mf) && 488 > og(c)) {
            g = Tc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : Am(g.location, "google_responsive_slot_preview") || P(xf) ? 1 : P(wf) ? 2 : Xl(g, 1, h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || P(nf) && b.google_ad_resize || io(c, b) || Ai(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = Wc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!ab(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    g = Ei(c, a, e, .3, b);
                    !0 !== g ? (b.gfwrnwer = g, g = !1) : g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, Mn(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        } else d = !1;
        if (e = io(c, b)) ko(e, a, b, c, d);
        else {
            if (Ai(a, b)) {
                if (d = Wc(a, c)) a.style.width =
                    d.width, a.style.height = d.height, zi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Lp(c)
            } else zi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? ko(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Fi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Np(a) {
        this.j = new p.Set;
        this.A = vd() || window;
        this.h = Q(Me);
        var b = 0 < this.h && bd() < 1 / this.h;
        this.v = (this.i = !!fk(bk(), 30, b)) ? od(this.A) : 0;
        this.m = this.i ? Do(this.A) : "";
        this.l = null != a ? a : new Sg(100)
    }

    function Op() {
        var a = O(Np);
        var b = new nl;
        b = B(b, 1, ng(a.A).scrollWidth);
        b = B(b, 2, ng(a.A).scrollHeight);
        var c = new nl;
        c = B(c, 1, og(a.A));
        c = B(c, 2, ng(a.A).clientHeight);
        var d = new pl;
        d = B(d, 1, a.v);
        d = B(d, 2, a.m);
        d = B(d, 3, a.h);
        var e = new ol;
        b = Tb(e, 2, b);
        b = Tb(b, 1, c);
        b = Ub(d, 4, ql, b);
        a.i && !a.j.has(1) && (a.j.add(1), Og(a.l, b))
    };
    var Pp = ja(["(a=0)=>{let b;const c=class{};}"]);

    function Qp() {
        var a = Pp[0];
        var b = rc();
        a = b ? b.createScript(a) : a;
        a = new tc(a, sc);
        try {
            b = window;
            var c = a instanceof tc && a.constructor === tc ? a.h : "type_error:SafeScript";
            b.eval(c) === c && b.eval(c.toString());
            return [!0, ""]
        } catch (d) {
            return [!1, String(d)]
        }
    };

    function Rp(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        Ic(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function Sp(a, b) {
        b = void 0 === b ? 500 : b;
        Hd.call(this);
        this.i = a;
        this.wa = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    w(Sp, Hd);
    Sp.prototype.j = function() {
        this.m = {};
        this.l && (Jc(this.i, "message", this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        Hd.prototype.j.call(this)
    };

    function Tp(a) {
        Hd.call(this);
        this.l = a;
        this.h = null;
        this.i = !1
    }
    w(Tp, Hd);

    function Up() {
        if (Ra()) {
            var a = L.document.documentElement.lang;
            Vp() ? Wp(!0, "", a) : (new MutationObserver(function(b, c) {
                Vp() && (Wp(!1, a, L.document.documentElement.lang), c.disconnect())
            })).observe(L.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function Vp() {
        return L.document.documentElement.classList.contains("translated-rtl") || L.document.documentElement.classList.contains("translated-ltr")
    }

    function Wp(a, b, c) {
        var d = od(L);
        Yf({
            pvsid: "" + d,
            ibatl: String(a),
            pl: b,
            nl: c
        }, "translate-event")
    };
    var Xp = null,
        Yp = [],
        Zp = new p.Map,
        $p = -1;

    function aq(a) {
        return Ti.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function bq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        cq(a, b, c)
    }

    function cq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Mp);
        var e = b.google_reactive_ads_config;
        e || Mp(a, b, d, c);
        xp(d, b);
        if (!dq(a, b, d)) {
            e || (d.google_lpabyc = Bi(a, d) + Li(a, d, "height", K));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(L).page_contains_reactive_tag && !U(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        jm(!1);
                        return
                    }
                    throw new S("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(L).page_contains_reactive_tag = !0;
                jm(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = xd(d);
            cd(vo, function(f, g) {
                b[g] = b[g] ||
                    d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(L).first_tag_on_page || 0);
            hj(164, function() {
                Ep(d, b, a, c)
            })
        }
    }

    function dq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = hm(c);
        if (f && f.Ka && "on" != b.google_adtest && !e) {
            e = Bi(a, c);
            var g = ng(c).clientHeight;
            if (!f.sa || f.sa && ((0 == g ? null : e / g) || 0) >= f.sa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Ba(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.Bb && (null !== hd(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== hd(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Wc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (x.console && x.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function eq(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (aq(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function fq(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    gq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function hq() {
        var a = Vc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        kd(a);
        return a
    }

    function iq(a, b) {
        var c = {};
        cd(jg, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        Aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = hq();
        qd.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(L).pause_ad_requests;
        bq(d, e, b)
    }

    function jq(a, b) {
        function c() {
            return iq(a, b)
        }
        mg(x).wasPlaTagProcessed = !0;
        var d = x.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = Hc(ij(191, c));
            Ic(d, "DOMContentLoaded", e);
            (new x.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function gq(a, b, c) {
        var d = {};
        hj(165, function() {
            kq(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function lq(a) {
        delete a.google_checked_head;
        cd(a, function(b, c) {
            Si[c] || (delete a[c], x.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function mq(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) nq(c);
            else {
                var e = {};
                Kp(c, e);
                lq(e);
                var f = pc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                L.adsbygoogle || (L.adsbygoogle = []);
                d = L.adsbygoogle;
                d.loaded ? d.push(c) : d.splice(0, 0, c);
                var g;
                e.google_adbreak_test || (null == (g = Yb(b, Fl, 13, Lb)) ? 0 : E(g, 3)) && P(Cf) ? oq(f, a) : Rp(function() {
                    oq(f, a)
                })
            }
        }
    }

    function nq(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Rc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new S("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function pq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function kq(a, b, c, d) {
        if (null == a) throw new S("push() called with no parameters.");
        Jb(d, 14) && qq(a, Mb(Tl(d), 1), Wb(d, 2));
        var e = pq(a);
        if (0 !== e) P(sf) && (d = km(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ka)), null == Xp ? (rq(a), Yp.push(a)) : 3 === e ? hj(787, function() {
            Xp.handleAdConfig(a)
        }) : kj(730, Xp.handleAdBreak(a));
        else {
            Ka = (new Date).getTime();
            yp(c, d, sq(a));
            tq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new S("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) uq(a, d);
            else if ((e = a.params) && cd(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. 联系 your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = vq(a.element);
                Kp(e, b);
                c = U(x).head_tag_slot_vars || {};
                cd(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") && !U(x).head_tag_slot_vars) throw new S("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new S("Ad client is missing from the slot.");
                b.google_apsail = cm(b.google_ad_client);
                var f = (c = 0 === (U(L).first_tag_on_page || 0) && Hm(b)) && Im(c);
                c && !f && (uq(c, d), U(L).skip_next_reactive_tag = !0);
                0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(L).pause_ad_requests;
                bq(e, b, d);
                c && f && wq(c)
            }
        }
    }
    var xq = !1;

    function qq(a, b, c) {
        P( of ) && !xq && (xq = !0, (a = sq(a)) || (a = Do(L)), jj("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function sq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function tq() {
        if (P(ff)) {
            var a = hm(L);
            if (!(a = a && a.Ka)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Cl(Dl(b)) : null;
                a = !(b && Al(b) && b)
            }
            a || im(L, 1)
        }
    }

    function wq(a) {
        pd(function() {
            mg(x).wasPlaTagProcessed || x.adsbygoogle && x.adsbygoogle.push(a)
        })
    }

    function uq(a, b) {
        if (U(L).skip_next_reactive_tag) U(L).skip_next_reactive_tag = !1;
        else {
            0 === (U(L).first_tag_on_page || 0) && (U(L).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(x);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            Jm(a, b);
            jq(a, b)
        }
    }

    function vq(a) {
        if (a) {
            if (!aq(a) && (a.id ? a = eq(a.id) : a = null, !a)) throw new S("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new S("'element' is not a good DOM element.");
        } else if (a = eq(), !a) throw new S("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function yq() {
        var a = new lk(L),
            b = new Sp(L),
            c = new Tp(L),
            d = L.__cmp ? 1 : 0;
        a = mk(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null == (e = b.i) ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = id(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        b = f ? 1 : 0;
        c.i || (c.h || (c.h = id(c.l, "googlefcPresent")), c.i = !0);
        jj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, Q(Le))
    }

    function zq(a) {
        a = {
            value: E(a, 16)
        };
        var b = .01;
        Q(hf) && (a.eid = Q(hf), b = 1);
        a.frequency = b;
        jj("new_abg_tag", a, b)
    }

    function Aq(a) {
        bk().S[dk(26)] = !!Number(a)
    }

    function Bq(a) {
        Number(a) ? U(L).pause_ad_requests = !0 : (U(L).pause_ad_requests = !1, a = function() {
            if (!U(L).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                L.dispatchEvent(c)
            }
        }, x.setTimeout(a, 0), x.setTimeout(a, 1E3))
    }

    function Cq(a) {
        jj("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        L._gfp_a_ = a
    }

    function Dq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function oq(a, b) {
        b = Fm(wc(zc(yc(b.Ab).toString()), Sf() ? {
            bust: Sf()
        } : {})).then(function(c) {
            null == Xp && (c.init(a), Xp = c, Eq())
        });
        kj(723, b);
        r(b, "finally").call(b, function() {
            Yp.length = 0;
            jj("slotcar", {
                event: "api_ld",
                time: Date.now() - Ka,
                time_pr: Date.now() - $p
            })
        })
    }

    function Eq() {
        for (var a = v(r(Zp, "keys").call(Zp)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Zp.get(b); - 1 !== c && (x.clearTimeout(c), Zp.delete(b))
        }
        a = {};
        for (b = 0; b < Yp.length; a = {
                ia: a.ia,
                ea: a.ea
            }, b++) Zp.has(b) || (a.ea = Yp[b], a.ia = pq(a.ea), hj(723, function(d) {
            return function() {
                3 === d.ia ? Xp.handleAdConfig(d.ea) : 2 === d.ia && kj(730, Xp.handleAdBreakBeforeReady(d.ea))
            }
        }(a)))
    }

    function rq(a) {
        var b = Yp.length;
        if (2 === pq(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === $p && ($p = Date.now());
            var c = x.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), Zp.set(b, -1), jj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * Q(Df));
            Zp.set(b, c)
        }
    }

    function Fq() {
        if (P(rf) && !P(Ze)) {
            if (P(af)) {
                var a = L.document,
                    b = a.createElement("LINK"),
                    c = P(qf) ? wd(Pm) : wd(Qm);
                Ec(b, c, "stylesheet");
                a.head.appendChild(b)
            }
            if (P($e)) {
                Tm();
                return
            }
        }
        P($e) && Tm()
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        fj.ab(lj);
        hj(166, function() {
            var e = Fo(b);
            so(Wb(e, 2));
            Wl(E(e, 6));
            d();
            td(16, [1, e.toJSON()]);
            var f = vd(ud(L)) || L,
                g = c(to({
                    lb: a,
                    vb: Wb(e, 2)
                }), e);
            $l(f, e);
            xn(f, e, null === L.document.currentScript ? 1 : Vm(g.Cb));
            Op();
            if ((!Qa() || 0 <= Na(Ta(), 11)) && (null == (L.Prototype || {}).Version || !P(lf))) {
                gj(P(If));
                Ip(e);
                jl();
                try {
                    Ro()
                } catch (q) {}
                Hp();
                mq(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (P(gf) && !E(e, 16)) try {
                        if (L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    Fq();
                    zq(e);
                    P(Jf) && Up();
                    Q(Le) && yq();
                    var k = {
                        push: function(q) {
                            gq(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: Aq
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: Bq
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: Cq
                        }), Object.defineProperty(k, "onload", {
                            set: Dq
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = v(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    fq(h, g, e);
                    f.adsbygoogle =
                        k;
                    h && (k.onload = h.onload);
                    (f = Dp(g)) && document.documentElement.appendChild(f);
                    f = Qp();
                    jj("modern_js", {
                        fy: D(e, 1, 0),
                        supports: f[0],
                        c: 2012,
                        e: f[1]
                    }, .01)
                }
            }
        })
    })("m202206270101", Eo, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "",
            d = Wb(b, 3),
            e = Wb(b, 2);
        b = wd(no, a, c);
        d = wd(oo, e, d);
        return {
            Ab: b,
            yb: wd(po, a, c),
            wb: wd(qo, a, c),
            xb: wd(ro, a, c),
            Db: d,
            Cb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20220623\",\"r20190131\",null,null,null,null,\".google.com.sg\",null,null,null,[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1130,null,[null,100]],[null,1126,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1131,null,null,[1]],[null,1142,null,[null,8]],[null,1165,null,[null,1000]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[null,1159,null,[null,500]],[null,1119,null,[]],[1122,null,null,[1]],[1145,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1087,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,15000]],[1053,null,null,[1]],[1100,null,null,[1]],[1178,null,null,[1]],[1161,null,null,[1]],[1149,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,15000]],[1036,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1034,null,[]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[1033,null,null,[1]],[380254521,null,null,[],[[[1,[[4,null,63]]],[1]]]],[381914117,null,null,[1]],[null,null,null,[],null,1939],[null,null,null,[null,null,null,[\"AzoawhTRDevLR66Y6MROu167EDncFPBvcKOaQispTo9ouEt5LvcBjnRFqiAByRT+2cDHG1Yj4dXwpLeIhc98\/gIAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6+nc62kbJgC46ypOwRsNW6RkDn2x7tgRh0wp7jb3DtFF7oEhu1hhm4rdZHZ6zXvnKZLlYcBlQUImC4d3kKihAcAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A\/9La288e7MDEU2ifusFnMg1C2Ij6uoa\/Z\/ylwJIXSsWfK37oESIPbxbt4IU86OGqDEPnNVruUiMjfKo65H\/CQwAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1934],[1970,null,null,[1]],[1953,null,null,[1]],[1947,null,null,[1]],[434462125,null,null,[1]],[null,1972,null,[]],[392736476,null,null,[]],[null,null,null,[],null,1932],[432938498,null,null,[]]],[[12,[[200,[[42531605],[42531606]]],[200,[[42531607],[42531608]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31067825],[31067826,[[1971,null,null,[1]]]]]]]],[10,[[10,[[31068105],[31068106,[[1141,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[20,[[44760911],[44760912,[[1160,null,null,[1]]]],[44763827,[[1170,null,null,[1]]]]]],[1,[[44767166],[44767167]]],[10,[[44768326,[[null,1072,null,[]]]],[44768327,[[null,1072,null,[]]]]]],[null,[[44755592],[44755593,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755594,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44755653,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[1,[[44763957],[44763958,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44766752,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44768336,[[null,null,1166,[null,null,\"h.3.0.0\"]]]],[44768337,[[null,null,1166,[null,null,\"h.3.0.0\"]]]]],null,51],[10,[[44766558],[44766559,[[1184,null,null,[1]]]]],null,56],[10,[[21066428],[21066429]]],[50,[[31065544],[31065545,[[1154,null,null,[1]]]]]],[50,[[31065741],[31065742,[[1134,null,null,[1]]]]]],[50,[[31067527],[31067528,[[1147,null,null,[1]]]]],null,54],[50,[[31067983],[31067984,[[null,1169,null,[null,61440]],[null,1168,null,[null,61440]]]]]],[300,[[31068155,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068155]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[100,[[31068195],[31068196,[[1187,null,null,[1]]]]]],[20,[[31068226,[[null,1103,null,[null,31068226]],[null,1119,null,[null,300]]]],[31068227,[[null,1158,null,[null,45]],[null,1157,null,[null,400]],[null,1103,null,[null,31068227]],[1182,null,null,[1]],[null,1114,null,[null,-1]],[null,1116,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1162,null,null,[1]],[1120,null,null,[1]],[1164,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1000,[[31068231,[[null,null,14,[null,null,\"31068231\"]]],[6,null,null,null,6,null,\"31068231\"]],[31068232,[[null,null,14,[null,null,\"31068232\"]]],[6,null,null,null,6,null,\"31068232\"]]],[4,null,55]],[10,[[31068260],[31068261,[[1177,null,null,[1]]]]]],[1000,[[31068268,[[null,null,14,[null,null,\"31068268\"]]],[6,null,null,null,6,null,\"31068268\"]],[31068269,[[null,null,14,[null,null,\"31068269\"]]],[6,null,null,null,6,null,\"31068269\"]]],[4,null,55]],[null,[[44764509],[44764510,[[1174,null,null,[1]]]]]],[5,[[44766992,[[null,1103,null,[null,44766992]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44767519,[[null,1103,null,[null,44767519]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[5,[[44767279,[[null,1103,null,[null,44767279]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44767280,[[null,1103,null,[null,44767280]],[1182,null,null,[1]],[null,1114,null,[null,0.4]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[1,[[44767921,[[null,1103,null,[null,44767921]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44767922,[[null,1103,null,[null,44767922]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1180,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[44767923,[[null,1103,null,[null,44767923]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44767924,[[null,1103,null,[null,44767924]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[1,[[44767925,[[null,1103,null,[null,44767925]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44767926,[[null,1103,null,[null,44767926]],[1121,null,null,[1]],[1186,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[500,[[44767927,[[null,1103,null,[null,44767927]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[5,[[44768096,[[null,1103,null,[null,44768096]]]],[44768097,[[null,1103,null,[null,44768097]],[1143,null,null,[1]]]],[44768098,[[null,1103,null,[null,44768098]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44768099,[[null,1103,null,[null,44768099]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[2,[[4,null,55],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]]]],49],[5,[[44768100,[[null,1103,null,[null,44768100]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1117,null,[null,100]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44768101,[[null,1103,null,[null,44768101]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1117,null,[null,1]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44768102,[[null,1103,null,[null,44768102]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1117,null,[null,10]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44768103,[[null,1103,null,[null,44768103]],[1182,null,null,[1]],[null,1114,null,[null,0.9]],[null,1117,null,[null,50]],[null,1110,null,[null,5]],[null,1111,null,[null,5]],[null,1112,null,[null,5]],[null,1113,null,[null,5]],[null,1104,null,[null,100]],[null,1106,null,[null,10]],[null,1107,null,[null,10]],[null,1105,null,[null,10]],[null,1115,null,[null,-1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]],[1,[[12,null,null,null,2,null,\"smitmehta\\\\.com\/|autoplaced\\\\.com\/\"]]],49],[50,[[31061761],[31067422],[31067423,[[null,1032,null,[]]]],[31067605]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[11,[[10,[[44766067],[44766068,[[1957,null,null,[1]]]],[44766069,[[1957,null,null,[1]]]]],null,48],[1,[[31067985],[31067986,[[447540095,null,null,[1]]]]],null,55],[100,[[31067987],[31067988,[[447540095,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],55],[1,[[31067989],[31067990,[[447540095,null,null,[1]],[447540096,null,null,[1]]]],[31067991,[[447540095,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],null,55],[100,[[31067992],[31067993,[[447540095,null,null,[1]],[447540096,null,null,[1]]]],[31067994,[[447540095,null,null,[1]],[447540097,null,null,[1]],[447540096,null,null,[1]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],55]]],[17,[[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[13,[[10,[[31065824],[31065825,[[424117738,null,null,[1]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[50,[[31064018],[31064019,[[1961,null,null,[1]]]]]],[1000,[[31065981,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"crossOriginIsolated\"]]]]]]],[1000,[[31067146,null,[4,null,9,null,null,null,null,[\"document.browsingTopics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,9,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,9,null,null,null,null,[\"navigator.joinAdInterestGroup\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,8,null,null,null,null,[\"attributionReporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[10,[[44768158,null,[2,[[4,null,8,null,null,null,null,[\"attributionReporting\"]],[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[44768159,null,[2,[[4,null,8,null,null,null,null,[\"attributionReporting\"]],[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,\"31068232\",1,\"www.emanuelecolombo.it\",1704396879,[44759875,44759926,44759837]]");