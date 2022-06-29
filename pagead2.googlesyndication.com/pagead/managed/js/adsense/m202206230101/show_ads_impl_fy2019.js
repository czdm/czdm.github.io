(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var q, ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
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
        ha = {},
        ka = {};

    function la(a, b) {
        var c = ka[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ma(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ha ? f = ha : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(ha, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ka[d] && (a = 1E9 * Math.random() >>> 0, ka[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ma("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
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
                ta = {};
            try {
                ta.__proto__ = ra;
                qa = ta.a;
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
    var ua = pa;

    function va(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ua) ua(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ef = b.prototype
    }
    ma("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        va(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ma("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ha.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var r = this || self;

    function wa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function xa(a) {
        var b = wa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
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

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha() {
        return Date.now()
    }

    function Ia(a, b) {
        a = a.split(".");
        var c = r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ja(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ef = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.wj = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ka(a) {
        return a
    };
    var La = {
        Di: 0,
        Ci: 1,
        Bi: 2
    };
    var Ma = {};

    function Na(a) {
        if (a !== Ma) throw Error("requires a valid immutable API token");
    };

    function Oa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ja(Oa, Error);
    Oa.prototype.name = "CustomError";
    var Pa;

    function Qa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Oa.call(this, c + a[d])
    }
    Ja(Qa, Oa);
    Qa.prototype.name = "AssertionError";

    function Ra(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sa(a) {
        if (!Ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;"));
        return a
    }
    var Ua = /&/g,
        Va = /</g,
        Wa = />/g,
        Xa = /"/g,
        Ya = /'/g,
        Za = /\x00/g,
        Ta = /[\x00&<>"']/;

    function $a(a, b) {
        return -1 != a.indexOf(b)
    }

    function ab(a, b) {
        let c = 0;
        a = Ra(String(a)).split(".");
        b = Ra(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = bb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || bb(0 == e[2].length, 0 == f[2].length) || bb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function bb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function db() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function v(a) {
        return $a(db(), a)
    };

    function eb() {
        return v("Opera")
    }

    function fb() {
        return v("Trident") || v("MSIE")
    }

    function gb() {
        return v("Firefox") || v("FxiOS")
    }

    function hb() {
        return v("Safari") && !(ib() || v("Coast") || eb() || v("Edge") || v("Edg/") || v("OPR") || gb() || v("Silk") || v("Android"))
    }

    function ib() {
        return (v("Chrome") || v("CriOS")) && !v("Edge") || v("Silk")
    }

    function kb() {
        return v("Android") && !(ib() || gb() || eb() || v("Silk"))
    }

    function lb(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function mb() {
        var a = db();
        if (fb()) {
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
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = lb(b);
        return eb() ? a(["Version", "Opera"]) :
            v("Edge") ? a(["Edge"]) : v("Edg/") ? a(["Edg"]) : v("Silk") ? a(["Silk"]) : ib() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function nb(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function ob(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function pb(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function qb(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function rb(a, b, c) {
        let d = c;
        ob(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function sb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function tb(a, b) {
        return 0 <= nb(a, b)
    }

    function ub(a, b) {
        b = nb(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function vb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function wb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function yb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function zb(a, b) {
        if (!xa(a) || !xa(b) || a.length != b.length) return !1;
        const c = a.length,
            d = Ab;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function Ab(a, b) {
        return a === b
    }

    function Bb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Bb.apply(null, yb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Cb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Db(a) {
        Db[" "](a);
        return a
    }
    Db[" "] = function() {};

    function Eb(a, b) {
        try {
            return Db(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Fb(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var Gb = eb(),
        Hb = fb(),
        Ib = v("Edge"),
        Jb = Ib || Hb,
        Kb = v("Gecko") && !($a(db().toLowerCase(), "webkit") && !v("Edge")) && !(v("Trident") || v("MSIE")) && !v("Edge"),
        Mb = $a(db().toLowerCase(), "webkit") && !v("Edge");

    function Nb() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    var Ob;
    a: {
        var Pb = "",
            Qb = function() {
                var a = db();
                if (Kb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Ib) return /Edge\/([\d\.]+)/.exec(a);
                if (Hb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Mb) return /WebKit\/(\S+)/.exec(a);
                if (Gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Qb && (Pb = Qb ? Qb[1] : "");
        if (Hb) {
            var Rb = Nb();
            if (null != Rb && Rb > parseFloat(Pb)) {
                Ob = String(Rb);
                break a
            }
        }
        Ob = Pb
    }
    var Sb = Ob,
        Tb = {};

    function Ub(a) {
        return Fb(Tb, a, function() {
            return 0 <= ab(Sb, a)
        })
    }
    var Vb;
    if (r.document && Hb) {
        var Wb = Nb();
        Vb = Wb ? Wb : parseInt(Sb, 10) || void 0
    } else Vb = void 0;
    var Xb = Vb;
    kb();
    ib();
    hb();
    var Yb = {},
        Zb = null;

    function $b(a, b) {
        void 0 === b && (b = 0);
        ac();
        b = Yb[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function bc(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return $b(b, 3)
    }

    function cc(a) {
        var b = [];
        dc(a, function(c) {
            b.push(c)
        });
        return b
    }

    function ec(a) {
        var b = a.length,
            c = 3 * b / 4;
        c % 3 ? c = Math.floor(c) : $a("=.", a[b - 1]) && (c = $a("=.", a[b - 2]) ? c - 2 : c - 1);
        var d = new Uint8Array(c),
            e = 0;
        dc(a, function(f) {
            d[e++] = f
        });
        return e !== c ? d.subarray(0, e) : d
    }

    function dc(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = Zb[k];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        ac();
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

    function ac() {
        if (!Zb) {
            Zb = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Yb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Zb[f] && (Zb[f] = e)
                }
            }
        }
    };
    var fc = "undefined" !== typeof Uint8Array;

    function gc(a) {
        return fc && null != a && a instanceof Uint8Array
    }
    let hc;
    var ic = {};
    let jc;

    function kc(a) {
        if (a !== ic) throw Error("illegal external caller");
    }

    function lc() {
        return jc || (jc = new mc(null, ic))
    }
    var mc = class {
        constructor(a, b) {
            kc(b);
            this.P = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.P
        }
    };
    const nc = Symbol(void 0);

    function oc(a, b) {
        Object.isFrozen(a) || (nc ? a[nc] |= b : void 0 !== a.Ha ? a.Ha |= b : Object.defineProperties(a, {
            Ha: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }))
    }

    function pc(a) {
        let b;
        nc ? b = a[nc] : b = a.Ha;
        return null == b ? 0 : b
    }

    function qc(a) {
        oc(a, 1);
        return a
    }

    function rc(a) {
        return Array.isArray(a) ? !!(pc(a) & 2) : !1
    }

    function sc(a) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as immutable");
        oc(a, 2)
    }

    function tc(a, b) {
        if (!Array.isArray(a)) throw Error("cannot mark non-array as mutable");
        b ? oc(a, 8) : Object.isFrozen(a) || (nc ? a[nc] &= -9 : void 0 !== a.Ha && (a.Ha &= -9))
    };

    function uc(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let vc;
    var wc = Object.freeze(qc([]));

    function xc(a) {
        if (rc(a.N)) throw Error("Cannot mutate an immutable Message");
    }

    function yc(a) {
        return {
            value: a,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }
    };

    function zc(a, b, c = !1) {
        if (Array.isArray(a)) return new b(a);
        if (c) return new b
    };

    function Ac(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a)) {
                    if (gc(a)) return $b(a);
                    if (a instanceof mc) {
                        var b = a.P;
                        b = null == b || "string" === typeof b ? b : fc && b instanceof Uint8Array ? $b(b) : null;
                        return null == b ? "" : a.P = b
                    }
                }
        }
        return a
    };

    function Bc(a, b = Cc) {
        return Dc(a, b)
    }

    function Ec(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Dc(a, b);
            else if (uc(a)) {
                const c = {};
                for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Ec(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Dc(a, b) {
        const c = a.slice();
        for (let d = 0; d < c.length; d++) c[d] = Ec(c[d], b);
        Array.isArray(a) && pc(a) & 1 && qc(c);
        return c
    }

    function Fc(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Ac(a);
        return Array.isArray(a) ? Bc(a, Fc) : a
    }

    function Cc(a) {
        return gc(a) ? new Uint8Array(a) : a
    };

    function Gc(a) {
        return a.A || (a.A = a.N[a.B + a.Ea] = {})
    }

    function x(a, b, c = !1) {
        return -1 === b ? null : b >= a.B ? a.A ? a.A[b] : void 0 : c && a.A && (c = a.A[b], null != c) ? c : a.N[b + a.Ea]
    }

    function z(a, b, c, d = !1, e = !1) {
        e || xc(a);
        b < a.B && !d ? a.N[b + a.Ea] = c : Gc(a)[b] = c;
        return a
    }

    function Hc(a, b) {
        return null != x(a, b)
    }

    function Ic(a, b) {
        return Array.isArray(x(a, b))
    }

    function Jc(a) {
        return Array.isArray(x(a, 13 === Kc(a, Lc) ? 13 : -1))
    }

    function Mc(a, b, c = !0, d) {
        let e = x(a, b, d);
        Array.isArray(e) || (e = wc);
        if (rc(a.N)) c && (sc(e), Object.freeze(e));
        else if (e === wc || rc(e)) e = qc(e.slice()), z(a, b, e, d);
        return e
    }

    function Nc(a, b) {
        a = x(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = x(a, b);
        return null == a ? a : !!a
    }

    function C(a, b, c) {
        a = x(a, b);
        return null == a ? c : a
    }

    function Oc(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function Pc(a, b, c) {
        null == c ? c = wc : qc(c);
        return z(a, b, c)
    }

    function Qc(a, b, c, d) {
        xc(a);
        c !== d ? z(a, b, c) : z(a, b, void 0, !1);
        return a
    }

    function Rc(a, b, c, d) {
        xc(a);
        (c = Kc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), z(a, c));
        return z(a, b, d)
    }

    function Kc(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != x(a, e) && (0 !== c && z(a, c, void 0, !1, !0), c = e)
        }
        return c
    }

    function D(a, b, c, d, e = !1) {
        if (-1 === c) d = null;
        else {
            a.j || (a.j = {});
            var f = a.j[c];
            if (f) d = f;
            else {
                var g = x(a, c, e);
                b = zc(g, b, d);
                void 0 == b ? d = f : (d && b.N !== g && z(a, c, b.N, e, !0), a.j[c] = b, rc(a.N) && sc(b.N), d = b)
            }
        }
        if (null == d) return d;
        rc(d.N) && !rc(a.N) && (d = d.Tc(Ma), z(a, c, d.N, e), a.j[c] = d);
        return d
    }

    function Sc(a, b, c, d, e = !0) {
        a.j || (a.j = {});
        var f = rc(a.N);
        let g = a.j[c];
        d = Mc(a, c, !0, d);
        const h = f || rc(d);
        if (!g) {
            g = [];
            f = f || h;
            for (let k = 0; k < d.length; k++) {
                var l = d[k];
                f = f || rc(l);
                l = zc(l, b);
                void 0 !== l && (g.push(l), h && sc(l.N))
            }
            a.j[c] = g;
            tc(d, !f)
        }
        b = h || e;
        e = rc(g);
        b && !e && (Object.isFrozen(g) && (a.j[c] = g = g.slice()), sc(g), Object.freeze(g));
        !b && e && (a.j[c] = g = g.slice());
        return g
    }

    function H(a, b, c, d = !1) {
        const e = rc(a.N);
        b = Sc(a, b, c, d, e);
        a = Mc(a, c, d);
        if (!(c = e) && (c = a)) {
            if (!Array.isArray(a)) throw Error("cannot check mutability state of non-array");
            c = !(pc(a) & 8)
        }
        if (c) {
            for (c = 0; c < b.length; c++)(d = b[c]) && rc(d.N) && !e && (b[c] = b[c].Tc(Ma), a[c] = b[c].N);
            tc(a, !0)
        }
        return b
    }

    function Tc(a, b, c) {
        xc(a);
        a.j || (a.j = {});
        const d = null != c ? c.N : c;
        a.j[b] = c;
        return z(a, b, d)
    }

    function Uc(a, b, c, d) {
        xc(a);
        a.j || (a.j = {});
        const e = null != d ? d.N : d;
        a.j[b] = d;
        return Rc(a, b, c, e)
    }

    function Vc(a, b, c) {
        xc(a);
        let d;
        if (null != c) {
            d = qc([]);
            let e = !1;
            for (let f = 0; f < c.length; f++) d[f] = c[f].N, e = e || rc(d[f]);
            a.j || (a.j = {});
            a.j[b] = c;
            tc(d, !e)
        } else a.j && (a.j[b] = void 0), d = wc;
        return z(a, b, d)
    }

    function J(a, b) {
        return C(a, b, "")
    }

    function Yc(a, b, c, d) {
        c = Kc(a, d) === c ? c : -1;
        return D(a, b, c)
    }

    function Zc(a, b, c) {
        return Qc(a, b, c, !1)
    }

    function $c(a, b) {
        return Qc(a, b, 1, 0)
    };

    function ad(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("Expected to deserialize an Array but got " + wa(b) + ": " + b);
        bd = b;
        a = new a(b);
        bd = null;
        return a
    }

    function cd(a) {
        vc = !0;
        try {
            return JSON.stringify(a.toJSON(), dd)
        } finally {
            vc = !1
        }
    }
    var ed = class {
        constructor(a, b, c) {
            a || (a = bd);
            bd = null;
            var d = this.constructor.messageId;
            a || (a = d ? [d] : []);
            this.Ea = (d ? 0 : -1) - (this.constructor.j || 0);
            this.j = void 0;
            this.N = a;
            a: {
                d = this.N.length;a = d - 1;
                if (d && (d = this.N[a], uc(d))) {
                    this.B = a - this.Ea;
                    this.A = d;
                    break a
                }
                void 0 !== b && -1 < b ? (this.B = Math.max(b, a + 1 - this.Ea), this.A = void 0) : this.B = Number.MAX_VALUE
            }
            if (c)
                for (b = 0; b < c.length; b++)
                    if (a = c[b], a < this.B) a += this.Ea, (d = this.N[a]) ? Array.isArray(d) && qc(d) : this.N[a] = wc;
                    else {
                        d = Gc(this);
                        let e = d[a];
                        e ? Array.isArray(e) && qc(e) : d[a] =
                            wc
                    }
        }
        toJSON() {
            const a = this.N;
            return vc ? a : Bc(a, Fc)
        }
    };

    function dd(a, b) {
        return Ac(b)
    }

    function fd(a, b) {
        b.tb && (a.tb = b.tb.slice());
        const c = b.j;
        if (c) {
            b = b.A;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = H(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) fd(d[e], g[e])
                    } else(d = D(a, g.constructor, e, void 0, d)) && fd(d, g)
                }
            }
        }
    }
    let bd;
    var gd = class extends ed {
        Tc() {
            return this
        }
    };
    Object.defineProperties(gd, {
        [Symbol.hasInstance]: yc(() => {
            throw Error("Cannot perform instanceof checks for MutableMessage");
        })
    });

    function hd(a, b, c, d, e, f) {
        (a = a.j && a.j[c]) ? Array.isArray(a) ? (e = f.jb ? qc(a.slice()) : a, Vc(b, c, e)) : Tc(b, c, a): (fc && d instanceof Uint8Array ? e = d.length ? new mc(new Uint8Array(d), ic) : lc() : (Array.isArray(d) && (e ? sc(d) : Array.isArray(d) && pc(d) & 1 && f.jb && (d = d.slice())), e = d), z(b, c, e))
    };
    class K extends gd {
        Tc(a) {
            Na(a);
            if (rc(this.N)) {
                ({
                    jb: a
                } = {
                    jb: !0
                });
                a = {
                    jb: a
                };
                const c = rc(this.N);
                if (c && !a.jb) throw Error("copyRepeatedFields must be true for frozen messages");
                const d = new this.constructor;
                this.tb && (d.tb = this.tb.slice());
                const e = this.N;
                for (let f = 0; f < e.length; f++) {
                    const g = e[f];
                    if (f === e.length - 1 && uc(g))
                        for (b in g) {
                            if (!Object.prototype.hasOwnProperty.call(g, b)) continue;
                            const h = +b;
                            Number.isNaN(h) ? Gc(d)[b] = g[b] : hd(this, d, h, g[b], c, a)
                        } else hd(this, d, f - this.Ea, g, c, a)
                }
                var b = d
            } else b = this;
            return b
        }
    }
    Object.defineProperties(K, {
        [Symbol.hasInstance]: yc(Object[Symbol.hasInstance])
    });

    function id(a, b) {
        this.j = a === jd && b || "";
        this.l = kd
    }
    id.prototype.qa = !0;
    id.prototype.ea = function() {
        return this.j
    };

    function ld(a) {
        return a instanceof id && a.constructor === id && a.l === kd ? a.j : "type_error:Const"
    }

    function md(a) {
        return new id(jd, a)
    }
    var kd = {},
        jd = {};
    var nd = md("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function od(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function pd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function qd(a) {
        var b = rd;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function sd(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function td(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const ud = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function vd(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < ud.length; f++) c = ud[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var wd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var xd;

    function yd() {
        if (void 0 === xd) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ka,
                        createScript: Ka,
                        createScriptURL: Ka
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                xd = a
            } else xd = a
        }
        return xd
    };
    const zd = {};

    function Ad(a) {
        return a instanceof Bd && a.constructor === Bd ? a.j : "type_error:SafeScript"
    }
    class Bd {
        constructor(a, b) {
            this.j = b === zd ? a : "";
            this.qa = !0
        }
        toString() {
            return this.j.toString()
        }
        ea() {
            return this.j.toString()
        }
    };
    var Dd = class {
        constructor(a, b) {
            this.j = b === Cd ? a : ""
        }
        toString() {
            return this.j + ""
        }
    };
    Dd.prototype.qa = !0;
    Dd.prototype.ea = function() {
        return this.j.toString()
    };

    function Ed(a, b) {
        a = Fd.exec(Id(a).toString());
        var c = a[3] || "";
        return Jd(a[1] + Kd("?", a[2] || "", b) + Kd("#", c))
    }

    function Id(a) {
        return a instanceof Dd && a.constructor === Dd ? a.j : "type_error:TrustedResourceUrl"
    }

    function Ld(a, b) {
        var c = ld(a);
        if (!Md.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Nd, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof id ? ld(d) : encodeURIComponent(String(d))
        });
        return Jd(a)
    }
    var Nd = /%{(\w+)}/g,
        Md = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Fd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Cd = {};

    function Jd(a) {
        const b = yd();
        a = b ? b.createScriptURL(a) : a;
        return new Dd(a, Cd)
    }

    function Kd(a, b, c) {
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
    var Pd = class {
        constructor(a, b) {
            this.j = b === Od ? a : ""
        }
        toString() {
            return this.j.toString()
        }
    };
    Pd.prototype.qa = !0;
    Pd.prototype.ea = function() {
        return this.j.toString()
    };

    function Qd(a) {
        return a instanceof Pd && a.constructor === Pd ? a.j : "type_error:SafeUrl"
    }
    var Rd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Sd(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        return a.match(Rd) ? new Pd(a, Od) : null
    }
    var Td = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Ud(a) {
        if (a instanceof Pd) return a;
        a = "object" == typeof a && a.qa ? a.ea() : String(a);
        return Td.test(a) ? new Pd(a, Od) : Sd(a)
    }

    function Vd(a, b) {
        if (a instanceof Pd) return a;
        a = "object" == typeof a && a.qa ? a.ea() : String(a);
        if (b && /^data:/i.test(a) && (b = Sd(a) || Wd, b.ea() == a)) return b;
        Td.test(a) || (a = "about:invalid#zClosurez");
        return new Pd(a, Od)
    }
    var Od = {},
        Wd = new Pd("about:invalid#zClosurez", Od);
    const Xd = {};

    function Yd(a) {
        return a instanceof Zd && a.constructor === Zd ? a.j : "type_error:SafeStyle"
    }

    function $d(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(ae).join(" ") : ae(d), b += `${c}:${d};`)
            }
        return b ? new Zd(b, Xd) : be
    }
    class Zd {
        constructor(a, b) {
            this.j = b === Xd ? a : "";
            this.qa = !0
        }
        ea() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var be = new Zd("", Xd);

    function ae(a) {
        if (a instanceof Pd) return 'url("' + Qd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof id) a = ld(a);
        else {
            a = String(a);
            var b = a.replace(ce, "$1").replace(ce, "$1").replace(de, "url");
            if (ee.test(b)) {
                if (b = !fe.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && ge(a)
                }
                a = b ? he(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Qa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function ge(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const ee = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        de = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        ce = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        fe = /\/\*/;

    function he(a) {
        return a.replace(de, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = (Ud(d) || Wd).ea();
            return c + f + b + f + e
        })
    };
    const ie = {};

    function je(a) {
        return a instanceof ke && a.constructor === ke ? a.j : "type_error:SafeStyleSheet"
    }
    class ke {
        constructor(a, b) {
            this.j = b === ie ? a : "";
            this.qa = !0
        }
        toString() {
            return this.j.toString()
        }
        ea() {
            return this.j
        }
    };
    const le = {};

    function me(a) {
        return a instanceof ne && a.constructor === ne ? a.j : "type_error:SafeHtml"
    }

    function oe(a) {
        return a instanceof ne ? a : pe(Sa("object" == typeof a && a.qa ? a.ea() : String(a)))
    }

    function pe(a) {
        const b = yd();
        a = b ? b.createHTML(a) : a;
        return new ne(a, le)
    }

    function qe(a, b, c) {
        var d = String(a);
        if (!re.test(d)) throw Error("");
        if (d.toUpperCase() in se) throw Error("");
        return te(String(a), b, c)
    }

    function te(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!re.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof id) e = ld(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!ya(e)) throw Error("");
                            e instanceof Zd || (e = $d(e));
                            e = Yd(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in ue)
                                if (e instanceof Dd) e = Id(e).toString();
                                else if (e instanceof Pd) e = Qd(e);
                            else if ("string" === typeof e) e = (Ud(e) || Wd).ea();
                            else throw Error("");
                        }
                        e.qa && (e = e.ea());
                        f = `${f}="` +
                            Sa(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === wd[a.toLowerCase()] ? b += ">" : (c = ve(c), b += ">" + me(c).toString() + "</" + a + ">");
        return pe(b)
    }

    function we(a) {
        const b = oe(xe),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = oe(e), c.push(me(e).toString()))
            };
        a.forEach(d);
        return pe(c.join(me(b).toString()))
    }

    function ve(a) {
        return we(Array.prototype.slice.call(arguments))
    }
    class ne {
        constructor(a, b) {
            this.j = b === le ? a : "";
            this.qa = !0
        }
        ea() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const re = /^[a-zA-Z0-9-]+$/,
        ue = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        se = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var ye = pe("<!DOCTYPE html>"),
        xe = new ne(r.trustedTypes && r.trustedTypes.emptyHTML || "", le),
        ze = pe("<br>");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Ae(a) {
        var b = Be(Ce) || Wd;
        a.href = Qd(b)
    };

    function De(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Ee = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Fe(a, b, c) {
        if (b instanceof Dd) a.href = Id(b).toString();
        else {
            if (-1 === Ee.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            a.href = Qd(b)
        }
        a.rel = c
    };

    function Ge(a) {
        var b;
        let c;
        const d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function He(a, b) {
        a.src = Id(b);
        Ge(a)
    };

    function Ie() {
        return !1
    }

    function Je() {
        return !0
    }

    function Ke(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Le(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Me(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ne(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Oe(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Pe(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Qe = {
            passive: !0
        },
        Se = Me(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Te(a) {
        return a ? a.passive && Se() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Te(d)), !0) : !1
    }

    function Ue(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Te(d)), !0) : !1
    };

    function Ve(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                let g;
                null == (g = f.parentElement) || g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            He(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function We(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.cb}`;
        let c = void 0;
        try {
            c = await Xe(b)
        } catch (g) {}
        if (c) {
            b = a.ub || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                xe: c.bg_hash_basename,
                we: c.bg_binary,
                Ze: a.j + "_" + a.l,
                ub: b,
                cb: a.cb,
                Zb: d,
                mc: e,
                Xb: f
            }
        }
    }
    let Xe = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ye(a) {
        var b = await We(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.xe,
                _bgp_: b.we,
                _li_: b.Ze,
                _jk_: b.ub,
                _st_: b.cb,
                _rc_: b.Zb,
                _dl_: b.mc,
                _g2_: b.Xb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Ld(nd, {
                basename: "sodar2"
            });
            Ve(a)
        }
    };

    function Ze(a, b) {
        return Tc(a, 5, b)
    }

    function $e(a, b) {
        return Qc(a, 3, b, "")
    }
    var af = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function bf(a, b) {
        return Qc(a, 1, b, "")
    }
    var cf = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function df(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var ef = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.ub = a.ub;
                this.win = a.T();
                this.cb = a.cb;
                this.Zb = a.Zb;
                this.mc = a.mc;
                this.Xb = a.Xb;
                this.A = a.j
            }
        },
        ff = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.cb = "env";
                this.Zb = "n";
                this.mc = "0";
                this.Xb = "1";
                this.j = !0
            }
            T() {
                return this.win
            }
            build() {
                return new ef(this)
            }
        };
    var hf = class extends K {
            constructor(a) {
                super(a, -1, gf)
            }
        },
        gf = [2, 3];

    function jf(a, b) {
        return z(a, 1, b)
    }

    function kf(a, b) {
        return z(a, 2, b)
    }

    function lf(a, b) {
        return z(a, 3, b)
    }

    function mf(a, b) {
        return z(a, 4, b)
    }
    var nf = class extends K {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return x(this, 5)
        }
    };
    var of = window;
    var pf = {
        Of: "google_adtest",
        Sf: "google_ad_client",
        Tf: "google_ad_format",
        Vf: "google_ad_height",
        ig: "google_ad_width",
        Zf: "google_ad_layout",
        ag: "google_ad_layout_key",
        bg: "google_ad_output",
        cg: "google_ad_region",
        fg: "google_ad_slot",
        gg: "google_ad_type",
        hg: "google_ad_url",
        jg: "google_allow_expandable_ads",
        yg: "google_analytics_domain_name",
        zg: "google_analytics_uacct",
        Ng: "google_container_id",
        Xg: "google_gl",
        wh: "google_enable_ose",
        Gh: "google_full_width_responsive",
        Gi: "google_rl_filtering",
        Fi: "google_rl_mode",
        Hi: "google_rt",
        Ei: "google_rl_dest_url",
        ki: "google_max_radlink_len",
        ri: "google_num_radlinks",
        si: "google_num_radlinks_per_unit",
        Rf: "google_ad_channel",
        ji: "google_max_num_ads",
        li: "google_max_responsive_height",
        Ig: "google_color_border",
        uh: "google_enable_content_recommendations",
        Ug: "google_content_recommendation_ui_type",
        Tg: "google_source_type",
        Sg: "google_content_recommendation_rows_num",
        Rg: "google_content_recommendation_columns_num",
        Qg: "google_content_recommendation_ad_positions",
        Vg: "google_content_recommendation_use_square_imgs",
        Kg: "google_color_link",
        Jg: "google_color_line",
        Mg: "google_color_url",
        Pf: "google_ad_block",
        eg: "google_ad_section",
        Qf: "google_ad_callback",
        Fg: "google_captcha_token",
        Lg: "google_color_text",
        vg: "google_alternate_ad_url",
        Yf: "google_ad_host_tier_id",
        Gg: "google_city",
        Wf: "google_ad_host",
        Xf: "google_ad_host_channel",
        wg: "google_alternate_color",
        Hg: "google_color_bg",
        xh: "google_encoding",
        Eh: "google_font_face",
        ah: "google_cust_ch",
        fh: "google_cust_job",
        eh: "google_cust_interests",
        bh: "google_cust_id",
        gh: "google_cust_u_url",
        Ih: "google_hints",
        Xh: "google_image_size",
        mi: "google_mtl",
        hj: "google_cpm",
        Pg: "google_contents",
        oi: "google_native_settings_key",
        Wg: "google_country",
        Zi: "google_targeting",
        Fh: "google_font_size",
        jh: "google_disable_video_autoplay",
        uj: "google_video_product_type",
        tj: "google_video_doc_id",
        sj: "google_cust_gender",
        Vi: "google_cust_lh",
        Ui: "google_cust_l",
        gj: "google_tfs",
        ni: "google_native_ad_template",
        ci: "google_kw",
        Wi: "google_tag_for_child_directed_treatment",
        Xi: "google_tag_for_under_age_of_consent",
        Ji: "google_region",
        Zg: "google_cust_criteria",
        dg: "google_safe",
        Yg: "google_ctr_threshold",
        Ki: "google_resizing_allowed",
        Mi: "google_resizing_width",
        Li: "google_resizing_height",
        rj: "google_cust_age",
        LANGUAGE: "google_language",
        di: "google_kw_type",
        xi: "google_pucrd",
        wi: "google_page_url",
        Yi: "google_tag_partner",
        Qi: "google_restrict_data_processing",
        Lf: "google_adbreak_test",
        Uf: "google_ad_frequency_hint",
        Mf: "google_admob_interstitial_slot",
        Nf: "google_admob_rewarded_slot",
        ii: "google_max_ad_content_rating",
        Ai: "google_ad_public_floor",
        yi: "google_ad_private_floor",
        qj: "google_traffic_source"
    };
    var qf = Me(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = me(xe);
        return !b.parentElement
    });

    function rf(a, b) {
        if (qf())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = me(b)
    }

    function sf(a, b) {
        b = b instanceof Pd ? b : Vd(b, /^data:image\//i.test(b));
        a.src = Qd(b)
    }
    var tf = /^[\w+/_-]+[=]{0,2}$/;

    function uf(a, b) {
        b = (b || r).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && tf.test(a) ? a : "" : ""
    };

    function vf(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function wf(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function xf(a) {
        return wf.apply(null, arguments) / arguments.length
    };

    function yf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    yf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    yf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    yf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function zf(a, b) {
        this.width = a;
        this.height = b
    }

    function Af(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    q = zf.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Bf(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(Cf, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = pe(e + " "), rf(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Cf = /&([^;\s<&]+);?/g;

    function Df(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Ef(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Ff(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Gf(a) {
        return a ? new Hf(If(a)) : Pa || (Pa = new Hf)
    }

    function Jf(a, b) {
        od(b, function(c, d) {
            c && "object" == typeof c && c.qa && (c = c.ea());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Kf.hasOwnProperty(d) ? a.setAttribute(Kf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var Kf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Lf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new zf(a.clientWidth, a.clientHeight)
    }

    function Mf(a) {
        var b = a.scrollingElement ? a.scrollingElement : Mb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Hb && Ub("10") && a.pageYOffset != b.scrollTop ? new yf(b.scrollLeft, b.scrollTop) : new yf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Nf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Of(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!xa(f) || ya(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ya(f)) {
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
                ob(g ? wb(f) : f, e)
            }
        }
    }

    function Pf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Qf(a, b) {
        var c = Pf(a, "DIV");
        Hb ? (b = ve(ze, b), rf(c, b), c.removeChild(c.firstChild)) : rf(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Rf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function If(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Sf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Tf = {
            IMG: " ",
            BR: "\n"
        };

    function Uf(a) {
        var b = [];
        Vf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Vf(a, b, c) {
        if (!(a.nodeName in Sf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Tf) b.push(Tf[a.nodeName]);
        else
            for (a = a.firstChild; a;) Vf(a, b, c), a = a.nextSibling
    }

    function Wf(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return Xf(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && tb(e.className.split(/\s+/), c))
        })
    }

    function Xf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Hf(a) {
        this.j = a || r.document || document
    }
    q = Hf.prototype;
    q.Pe = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    q.Kf = Hf.prototype.Pe;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.ha = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = Pf(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Jf(g, f));
        2 < e.length && Of(d, g, e, 2);
        return g
    };
    q.createElement = function(a) {
        return Pf(this.j, a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Yf(a, b) {
        return Qf(a.j, b)
    }
    q.T = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    q.appendChild = function(a, b) {
        a.appendChild(b)
    };
    q.append = function(a, b) {
        Of(If(a), a, arguments, 1)
    };
    q.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    q.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    q.Me = Rf;

    function Zf() {
        return !$f() && (v("iPod") || v("iPhone") || v("Android") || v("IEMobile"))
    }

    function $f() {
        return v("iPad") || v("Android") && !v("Mobile") || v("Silk")
    };
    var ag = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function bg(a) {
        try {
            return !!a && null != a.location.href && Eb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function cg(a, b = !1, c = !1, d = r) {
        c = c ? dg(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !bg(c) || !a(c));) c = dg(c)
    }

    function dg(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function eg(a) {
        return bg(a.top) ? a.top : null
    }

    function fg(a, b) {
        const c = gg("SCRIPT", a);
        He(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function hg(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function ig() {
        if (!ha.globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            ha.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }

    function jg(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function kg(a) {
        const b = [];
        jg(a, function(c) {
            b.push(c)
        });
        return b
    }

    function lg(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var ng = Me(() => sb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], mg) || 1E-4 > Math.random());
    const mg = a => $a(db(), a);
    var og = /^([0-9.]+)px$/,
        pg = /^(-?[0-9.]{1,30})$/;

    function qg(a) {
        if (!pg.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function rg(a) {
        return /^true$/.test(a)
    }

    function sg(a) {
        return (a = og.exec(a)) ? +a[1] : null
    }

    function tg() {
        var a = r.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var ug = {
        kg: "allow-forms",
        lg: "allow-modals",
        mg: "allow-orientation-lock",
        ng: "allow-pointer-lock",
        og: "allow-popups",
        pg: "allow-popups-to-escape-sandbox",
        qg: "allow-presentation",
        rg: "allow-same-origin",
        sg: "allow-scripts",
        tg: "allow-top-navigation",
        ug: "allow-top-navigation-by-user-activation"
    };
    const vg = Me(() => kg(ug));

    function wg() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = vg();
        return a.length ? pb(b, c => !tb(a, c)) : b
    }

    function xg() {
        const a = gg("IFRAME"),
            b = {};
        ob(vg(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var yg = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        zg = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (yg(a, b)) return a;
                if (!(a = dg(a))) break
            }
            return null
        },
        Ag = Me(() => Zf() ? 2 : $f() ? 1 : 0),
        M = (a, b) => {
            jg(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Bg = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Cg = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/;
    const Dg = /.*domain\.test$/,
        Eg = /\.prod\.google\.com(:\d+)?$/;
    var Fg = a => !!Bg[a] || Cg.test(a) || Dg.test(a) || Eg.test(a);
    let Gg = [];
    const Hg = () => {
        const a = Gg;
        Gg = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Ig = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ka(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ka(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function Jg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || Rf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        cg(f => {
            if (!f.parent || !bg(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? Nf(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    Jg(f.parent, g[k], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var Kg = (a, b) => {
            Jg(Nf(If(a)), a, b)
        },
        Lg = (a, b) => {
            "complete" === a.document.readyState ? (Gg.push(b), 1 == Gg.length && (window.Promise ? Promise.resolve().then(Hg) : window.setImmediate ? setImmediate(Hg) : setTimeout(Hg, 0))) : a.addEventListener("load", b)
        },
        Mg = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function gg(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Ng = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, bg(a) && (b = a);
        return b
    };

    function Og(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    q = Og.prototype;
    q.getWidth = function() {
        return this.right - this.left
    };
    q.getHeight = function() {
        return this.bottom - this.top
    };

    function Rg(a) {
        return new Og(a.top, a.right, a.bottom, a.left)
    }
    q.contains = function(a) {
        return this && a ? a instanceof Og ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Sg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    q.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    q.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    q.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Tg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ug(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Tg(c, e, d - c, a - e)
        }
        return null
    }

    function Vg(a, b) {
        var c = Ug(a, b);
        if (!c || !c.height || !c.width) return [new Tg(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new Tg(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new Tg(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new Tg(a.left, d, b.left - a.left, e));
        h < f && c.push(new Tg(h, d, f - h, e));
        return c
    }
    Tg.prototype.contains = function(a) {
        return a instanceof yf ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Tg.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Tg.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Tg.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Wg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Xg(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Yg() {
        const a = Xg();
        return a && a.initialIntersection
    }

    function Zg() {
        const a = Yg();
        return a && ya(a.rootBounds) ? new zf(a.rootBounds.width, a.rootBounds.height) : null
    }

    function $g(a) {
        return (a = a || Xg()) ? bg(a.master) ? a.master : null : null
    }

    function ah(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            ub(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || fg(a.document, g ? Ld(md("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Jd(ld(md("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Ue(a, "message", f)
        });
        return e
    };
    class bh {
        constructor(a) {
            this.Ye = a
        }
    }

    function ch(a) {
        return new bh(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Ce = [ch("data"), ch("http"), ch("https"), ch("mailto"), ch("ftp"), new bh(a => /^[^:]*([/?#]|$)/.test(a))];

    function Be(a = Ce) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof bh && c.Ye("#")) return new Pd("#", Od)
        }
    };

    function N(a, ...b) {
        if (0 === b.length) return Jd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Jd(c.join(""))
    }

    function dh(a, b) {
        let c = Id(a).toString();
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Jd(c)
    };

    function eh(a) {
        a = a[0];
        const b = yd();
        a = b ? b.createScript(a) : a;
        return new Bd(a, zd)
    };

    function fh(a) {
        return new ke(a[0], ie)
    };

    function gh(a) {
        return Jd(Id(a).toString())
    };

    function hh(a, b, c) {
        if ("string" === typeof b)(b = ih(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = ih(c, d);
                f && (c.style[f] = e)
            }
    }
    var jh = {};

    function ih(a, b) {
        var c = jh[b];
        if (!c) {
            var d = Ef(b);
            c = d;
            void 0 === a.style[d] && (d = (Mb ? "Webkit" : Kb ? "Moz" : Hb ? "ms" : null) + Ff(d), void 0 !== a.style[d] && (c = d));
            jh[b] = c
        }
        return c
    }

    function kh(a, b) {
        var c = If(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function lh(a, b) {
        return kh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function mh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function nh(a) {
        var b = If(a),
            c = new yf(0, 0);
        var d = b ? If(b) : document;
        d = !Hb || 9 <= Number(Xb) || "CSS1Compat" == Gf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = mh(a);
        b = Mf(Gf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function oh(a) {
        var b = ph;
        if ("none" != lh(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ph(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Mb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = mh(a), new zf(a.right - a.left, a.bottom - a.top)) : new zf(b, c)
    }

    function qh(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function rh(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? qh(a, b) : 0
    }
    var sh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function th(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in sh ? sh[b] : qh(a, b)
    };
    var uh = a => "number" === typeof a && 0 < a,
        wh = (a, b) => {
            a = vh(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        vh = a => Object.entries(xh(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        xh = a => {
            const b = {};
            jg(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        yh = () => {
            try {
                return of.history.length
            } catch (a) {
                return 0
            }
        },
        zh = a => {
            a = $g(Xg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Ah = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        Bh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = yh();
            let b;
            a.u_h = null == (b = of .screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = of .screen) ? void 0 : c.width;
            let d;
            a.u_ah = null == (d = of .screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = of .screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = of .screen) ? void 0 : f.colorDepth
        },
        Ch = a => {
            let b;
            b = (b = 9 !== a.nodeType && a.id) ? "/" + b : "";
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f <
                        d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + b + c
        },
        Dh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        Eh = () => {
            if (! of ) return !1;
            try {
                return !(! of .navigator.standalone && ! of .top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Fh = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        Gh = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e =
                            String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Hh = a => a == a.top;
    class Ih {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const Jh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Kh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Lh = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.wd = !!c;
                this.depth = null
            }
        };

    function Mh(a, b, c = null, d = !1) {
        Nh(a, b, c, d)
    }

    function Nh(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = gg("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                d && ub(a.google_image_requests, e);
                Ue(e, "load", f);
                Ue(e, "error", f)
            };
            L(e, "load", f);
            L(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Ph = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=dtt_err";
            jg(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            Oh(b)
        },
        Oh = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Mh(b, a, void 0, !1)
        };

    function Qh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Rh(a, b, c, d, e) {
        const f = [];
        jg(a, function(g, h) {
            (g = Sh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Sh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Sh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Rh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Th(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Uh(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Th(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = Rh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Vh {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Wh() {
        var a = Xh,
            b = r.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Yh(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Vh ? f = c : (f = new Vh, jg(c, (h, l) => {
                var k = f;
                const m = k.B++;
                h = Qh(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Uh(f, "/pagead/gen_204?id=" + b + "&");
            g && Mh(r, g)
        } catch (f) {}
    }
    class Zh {
        constructor() {
            this.j = Math.random()
        }
    };
    let $h = null;

    function ai() {
        if (null === $h) {
            $h = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    $h = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return $h
    };
    var bi = () => {
            const a = r.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ha()
        },
        ci = () => {
            const a = r.performance;
            return a && a.now ? a.now() : null
        };
    class di {
        constructor(a, b) {
            var c = ci() || bi();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const ei = r.performance,
        fi = !!(ei && ei.mark && ei.measure && ei.clearMarks),
        gi = Me(() => {
            var a;
            if (a = fi) a = ai(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function hi(a) {
        a && ei && gi() && (ei.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), ei.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function ii() {
        var a = ji;
        a.l = !1;
        a.j != a.A.google_js_reporting_queue && (gi() && ob(a.j, hi), a.j.length = 0)
    }

    function ki(a, b) {
        if (!a.l) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw hi(c), e;
        }
        a.end(c);
        return d
    }
    class li {
        constructor(a) {
            this.j = [];
            this.A = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = gi() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new di(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            ei && gi() && ei.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (ci() || bi()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                ei && gi() && ei.mark(b);
                !this.l || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function mi(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = ni(a.stack, b));
        return b
    }

    function ni(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    class oi {
        constructor(a = null) {
            this.B = Xh;
            this.l = null;
            this.D = this.ka;
            this.j = a;
            this.A = !1
        }
        xa() {
            return this.B
        }
        Od(a) {
            this.l = a
        }
        C(a) {
            this.A = a
        }
        zb(a, b, c) {
            let d, e;
            try {
                this.j && this.j.l ? (e = this.j.start(a.toString(), 3), d = b(), this.j.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    hi(e), b = this.D(a, new Ih(f, {
                        message: mi(f)
                    }), void 0, c)
                } catch (g) {
                    this.ka(217, g)
                }
                if (b) {
                    let g, h;
                    null == (g = window.console) || null == (h = g.error) || h.call(g, f)
                } else throw f;
            }
            return d
        }
        la(a, b) {
            return (...c) => this.zb(a, () => b.apply(void 0, c))
        }
        ka(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const I = new Vh;
                var g = I;
                g.j.push(1);
                g.l[1] = Qh("context", a);
                b.error && b.meta && b.id || (b = new Ih(b, {
                    message: mi(b)
                }));
                if (b.msg) {
                    g = I;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Qh("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.l) try {
                    this.l(b)
                } catch (T) {}
                if (d) try {
                    d(b)
                } catch (T) {}
                d = I;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = r;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (bg(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Lh(m || "", k));
                    try {
                        d = k.parent
                    } catch (T) {
                        d = null
                    }
                } while (d && k != d);
                for (let T =
                        0, cb = l.length - 1; T <= cb; ++T) l[T].depth = cb - T;
                k = r;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.wd = !0)
                    }
                var p = l;
                let ja = new Lh(r.location.href, r, !1);
                k = null;
                const Aa = p.length - 1;
                for (n = Aa; 0 <= n; --n) {
                    var u = p[n];
                    !k && Jh.test(u.url) && (k = u);
                    if (u.url && !u.wd) {
                        ja = u;
                        break
                    }
                }
                u = null;
                const Y = p.length && p[Aa].url;
                0 != ja.depth && Y && (u = p[Aa]);
                f = new Kh(ja, u);
                if (f.l) {
                    p = I;
                    var w = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Qh("top", w)
                }
                var t = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var A = f.j.url.match(ag),
                        y = A[1],
                        F = A[3],
                        E = A[4];
                    w = "";
                    y && (w += y + ":");
                    F && (w += "//", w += F, E && (w += ":" + E));
                    var G = w
                } else G = "";
                y = I;
                t = [t, {
                    url: G
                }];
                y.j.push(5);
                y.l[5] = t;
                Yh(this.B, e, I, this.A, c)
            } catch (I) {
                try {
                    Yh(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: mi(I),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (ja) {}
            }
            return !0
        }
        Za(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.ka(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const pi = a => null !== a && void 0 !== a;
    let qi = void 0;

    function ri(a, b) {
        const c = qi;
        qi = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    var si = a => "string" === typeof a,
        ti = a => void 0 === a;

    function ui() {
        var a = vi;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var wi;
    wi = {
        zi: 0,
        Wd: 3,
        Xd: 4,
        Zd: 5
    };
    var xi = wi.Wd,
        yi = wi.Xd,
        zi = wi.Zd;

    function Ai(a, ...b) {
        Bi(a, ...b.map(c => ({
            Gf: 7,
            message: c
        })))
    };

    function Ci(a) {
        return function(...b) {
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var Di = Ci(a => {
        const b = [];
        for (const c of a) Ci(() => {
            b.push([{
                [c.Gf]: c.message.toJSON()
            }])
        })();
        return JSON.stringify([b])
    });
    var Ei = (a, b) => {
        ha.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        })
    };

    function Bi(a, ...b) {
        Ci(() => {
            a.l.push(...b);
            const c = Ci(() => {
                const d = Di(a.l);
                a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                a.l = [];
                a.j = null
            });
            100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(c, 0)) : null === a.j && (a.j = setTimeout(c, 100))
        })()
    }
    var Fi = class {
        constructor() {
            this.A = Ei;
            this.l = [];
            this.j = null
        }
    };
    var O = a => {
        var b = "Ec";
        if (a.Ec && a.hasOwnProperty(b)) return a.Ec;
        b = new a;
        return a.Ec = b
    };
    class Gi {
        constructor(a) {
            this.methodName = a
        }
    }
    var Hi = new Gi(15),
        Ii = new Gi(2),
        Ji = new Gi(3),
        Ki = new Gi(5),
        Li = new Gi(6),
        Mi = new Gi(7),
        Ni = new Gi(8),
        Oi = new Gi(14),
        Pi = (a, b, c) => b[a.methodName] || c || (() => {});

    function Qi(a, b) {
        a.j = c => {
            Pi(Ii, b, () => [])(c, 1)
        };
        a.l = () => Pi(Ji, b, () => [])(1)
    }
    class Ri {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let Xh, Si;
    const ji = new li(r);
    (a => {
        Xh = a || new Zh;
        "number" !== typeof r.google_srt && (r.google_srt = Math.random());
        Wh();
        Si = new oi(ji);
        Si.C(!0);
        "complete" == r.document.readyState ? r.google_measure_js_timing || ii() : ji.l && L(r, "load", () => {
            r.google_measure_js_timing || ii()
        })
    })();
    var Ti = (a, b, c) => Si.zb(a, b, c),
        Ui = (a, b) => Si.la(a, b),
        Vi = (a, b, c) => {
            const d = O(Ri).l();
            !b.eid && d.length && (b.eid = d.toString());
            Yh(Xh, a, b, !0, c)
        },
        Wi = (a, b) => Si.ka(a, b, void 0, void 0);
    var Xi = (a, b) => {
        const c = tg();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(r.document.location.protocol), "//", encodeURIComponent(r.document.location.host)].join("")
    };
    Jd(ld(md("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Yi = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ue(a, "message", e));
                return g
            }
        },
        Zi = (a, b, c, d = null) => {
            const e = Yi(a, b, Ke(c, () => e()), d);
            return e
        },
        $i = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && $i(a[f], b, c, d, --e)
        };

    function aj(a, b, c, d) {
        Fg(d.origin) && "expandable-xpc-ready" == c.notify && bj(a, b)
    }

    function bj(a, b) {
        var c = a.Dc;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Pa,
            f: a.qf,
            g: a.me,
            h: a.Xe,
            i: void 0
        });
        r.setTimeout(Ui(220, Dh(() => {
            fg(c.document, gh(b))
        })), 0)
    };
    var dj = class extends K {
            constructor() {
                super(void 0, -1, cj)
            }
        },
        cj = [15];
    var ej = class extends K {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return C(this, 1, 0)
        }
        setCorrelator(a) {
            return Qc(this, 1, a, 0)
        }
    };
    var fj = class extends K {
        constructor() {
            super(void 0)
        }
    };
    let gj = null,
        hj = null;
    var ij = () => {
            if (null != gj) return gj;
            gj = !1;
            try {
                const a = eg(r);
                a && -1 !== a.location.hash.indexOf("google_logging") && (gj = !0);
                r.localStorage.getItem("google_logging") && (gj = !0)
            } catch (a) {}
            return gj
        },
        jj = () => {
            if (null != hj) return hj;
            hj = !1;
            try {
                const a = eg(r);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || r.localStorage.getItem("auto_ads_logging")) hj = !0
            } catch (a) {}
            return hj
        },
        kj = (a, b = []) => {
            let c = !1;
            r.google_logging_queue || (c = !0, r.google_logging_queue = []);
            r.google_logging_queue.push([a, b]);
            c && ij() && fg(r.document,
                Jd(ld(md("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let lj = (new Date).getTime();
    var mj = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var nj = {
        Th: 0,
        Sh: 1,
        Ph: 2,
        Kh: 3,
        Qh: 4,
        Lh: 5,
        Rh: 6,
        Nh: 7,
        Oh: 8,
        Jh: 9,
        Mh: 10
    };
    var oj = {
        Vh: 0,
        Wh: 1,
        Uh: 2
    };

    function pj(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function qj(a) {
        a = qb(a, b => new Og(b.top, b.right, b.bottom, b.left));
        a = rj(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function rj(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return rb(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Rg(a[0]))
    };
    var rd = {
        Ii: 0,
        yh: 1,
        Bh: 2,
        zh: 3,
        Ah: 4,
        Hh: 8,
        Ti: 9,
        gi: 10,
        hi: 11,
        Pi: 16,
        ih: 17,
        hh: 24,
        ei: 25,
        Bg: 26,
        Ag: 27,
        Yd: 30,
        Zh: 32,
        bi: 40
    };
    var sj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        tj = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function uj(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new vj;
        return a.google_reactive_ads_global_state
    }
    class vj {
        constructor() {
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
            this.floatingAdsStacking = new wj;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var wj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var xj = 728 * 1.38,
        yj = (a, b = 420) => (a = Q(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        zj = a => {
            var b = Q(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        Bj = a => Math.max(0, Aj(a, !0) - Q(a).clientHeight),
        Q = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        Aj = (a, b) => {
            const c = Q(a);
            return b ? c.scrollHeight == Q(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        Dj = (a, b) => Cj(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        Ej = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        Fj = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        Gj = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        Hj = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        Ij = (a, b, c, d, e) => {
            Yh(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        Cj = a => 26 === a || 27 === a || 40 === a;

    function Jj(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var Mj = class {
        constructor() {
            this.l = new Kj(this);
            this.j = 0
        }
        resolve(a) {
            Jj(this);
            this.j = 1;
            this.B = a;
            Lj(this.l)
        }
    };

    function Lj(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Kj = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            Lj(this)
        }
    };

    function Nj(a, b) {
        Oj(a).forEach(b, void 0)
    }

    function Oj(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Pj(a, b) {
        return void 0 !== a.j[Qj(b)]
    }

    function Rj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Sj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Tj = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Qj(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Qj(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Qj(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        qb() {
            return Rj(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Qj(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };
    const Uj = class {
        constructor(a) {
            this.j = new Tj;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Pj(this.j, a)
        }
    };
    const Vj = new Uj("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function Wj(a) {
        a && "function" == typeof a.va && a.va()
    };

    function Xj() {
        this.G = this.G;
        this.I = this.I
    }
    Xj.prototype.G = !1;
    Xj.prototype.va = function() {
        this.G || (this.G = !0, this.l())
    };

    function Yj(a, b) {
        a.G ? b() : (a.I || (a.I = []), a.I.push(b))
    }
    Xj.prototype.l = function() {
        if (this.I)
            for (; this.I.length;) this.I.shift()()
    };

    function Zj(a) {
        a.j.forEach((b, c) => {
            var d = a.element;
            b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
        })
    }

    function ak(a, b, c) {
        if (!a.j.has(b)) {
            var d = a.j,
                e = d.set;
            var f = a.element;
            const g = f.style.getPropertyValue(b);
            f = g ? {
                value: g,
                priority: f.style.getPropertyPriority(b)
            } : null;
            e.call(d, b, f)
        }
        a.element.style.setProperty(b, c, "important")
    }
    var bk = class extends Xj {
        constructor(a) {
            super();
            this.element = a;
            this.j = new Map
        }
        l() {
            Zj(this);
            super.l()
        }
    };

    function ck(a, b) {
        const c = new dk({
            first: a.P,
            second: b.P
        });
        a.ba(() => R(c, {
            first: a.P,
            second: b.P
        }));
        b.ba(() => R(c, {
            first: a.P,
            second: b.P
        }));
        return c
    }

    function ek(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new dk(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.ba(e));
        return fk(d)
    }

    function gk(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.P),
            d = new dk(c()),
            e = () => {
                R(d, c())
            };
        b.forEach(f => f.ba(e));
        return fk(d)
    }

    function R(a, b) {
        a.P = b;
        a.j.forEach(c => {
            c(a.P)
        })
    }

    function fk(a, b = hk) {
        var c = a.P;
        const d = new dk(a.P);
        a.ba(e => {
            b(e, c) || (c = e, R(d, e))
        });
        return d
    }

    function ik(a, b) {
        a.ba(b, !0)
    }

    function jk(a, b, c) {
        ik(a, d => {
            d === b && c()
        })
    }

    function pk(a, b, c) {
        fk(a).ba(d => {
            d === b && c()
        })
    }

    function qk(a, b) {
        a.l && a.l();
        a.l = b.ba(c => R(a, c), !0)
    }
    class dk {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.A = 1;
            this.l = null
        }
        ba(a, b = !1) {
            const c = this.A++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        map(a) {
            const b = new dk(a(this.P));
            this.ba(c => R(b, a(c)));
            return b
        }
    }

    function hk(a, b) {
        return a == b
    };

    function rk(a, b) {
        ob(a.j, c => {
            c(b)
        })
    }
    var sk = class {
        constructor() {
            this.j = []
        }
    };
    class tk {
        constructor(a) {
            this.j = a
        }
        ba(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new sk;
            this.ba(c => rk(b, a(c)));
            return new tk(b)
        }
    }

    function uk(...a) {
        const b = new sk;
        a.forEach(c => {
            c.ba(d => {
                rk(b, d)
            })
        });
        return new tk(b)
    };

    function vk(a) {
        return fk(ck(a.j, a.A).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : wk(c, b)
        }))
    }
    var yk = class {
        constructor(a) {
            this.l = a;
            this.j = new dk(null);
            this.A = new dk(null);
            this.B = new sk;
            this.G = b => {
                null == this.j.P && 1 == b.touches.length && R(this.j, b.touches[0])
            };
            this.C = b => {
                const c = this.j.P;
                null != c && (b = xk(c, b.changedTouches), null != b && (R(this.j, null), R(this.A, null), rk(this.B, wk(c, b))))
            };
            this.D = b => {
                var c = this.j.P;
                null != c && (c = xk(c, b.changedTouches), null != c && (R(this.A, c), b.preventDefault()))
            }
        }
    };

    function wk(a, b) {
        return {
            Ud: b.pageX - a.pageX,
            Vd: b.pageY - a.pageY
        }
    }

    function xk(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function zk(a) {
        return fk(ck(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Ak(c, b)
        }))
    }
    var Bk = class {
        constructor(a, b) {
            this.B = a;
            this.C = b;
            this.j = new dk(null);
            this.l = new dk(null);
            this.A = new sk;
            this.F = c => {
                R(this.j, c)
            };
            this.D = c => {
                const d = this.j.P;
                null != d && (R(this.j, null), R(this.l, null), rk(this.A, Ak(d, c)))
            };
            this.G = c => {
                null != this.j.P && (R(this.l, c), c.preventDefault())
            }
        }
    };

    function Ak(a, b) {
        return {
            Ud: b.screenX - a.screenX,
            Vd: b.screenY - a.screenY
        }
    };
    var Ek = (a, b) => {
        const c = new Ck(a, b);
        return () => Dk(c)
    };

    function Dk(a) {
        if (a.j) return !1;
        if (null == a.l) return Fk(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Fk(a), !0;
        Gk(a, b);
        return !0
    }

    function Fk(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function Gk(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            Fk(a)
        }, b)
    }
    class Ck {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function Hk(a) {
        return Ik(zk(a.j), vk(a.l))
    }

    function Jk(a) {
        return uk(new tk(a.j.A), new tk(a.l.B))
    }
    var Kk = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Ik(a, b) {
        return ck(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function Lk(a, b) {
        return new Mk(a, b)
    }

    function Nk(a) {
        a.win.requestAnimationFrame(() => {
            a.G || R(a.A, new zf(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Ok(a) {
        a.j || (a.j = !0, a.B.observe(a.element));
        return fk(a.A, Af)
    }
    var Mk = class extends Xj {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.A = new dk(new zf(this.element.offsetWidth, this.element.offsetHeight));
            this.B = new ResizeObserver(() => {
                Nk(this)
            })
        }
        l() {
            this.B.disconnect();
            super.l()
        }
    };

    function Pk(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class Qk {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Rk(a, b) {
        a = a.getBoundingClientRect();
        return new Sk(a.top + Fj(b), a.bottom - a.top)
    }

    function Tk(a) {
        return new Sk(Math.round(a.j), Math.round(a.l))
    }
    class Sk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Uk(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Vk {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.G = Ek(a, () => {
                if (null != this.C) {
                    var b = Aj(this.j, !0) - this.C;
                    1E3 < b && Uk(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = Aj(this.j, !0), this.j.addEventListener("scroll", this.G), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        va() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.G);
            this.l = [];
            this.A = null
        }
        addListener(a) {
            this.D ? a(this.A) : this.l.push(a)
        }
    };

    function Wk(a) {
        return new Xk(a, new bk(a.document.body), new bk(a.document.documentElement))
    }

    function Yk(a) {
        null === a.l && (a.l = a.B.pageYOffset, ak(a.j, "position", "fixed"), ak(a.j, "top", `${-a.l}px`), ak(a.j, "width", "100%"));
        ak(a.j, "overflow-x", "hidden");
        ak(a.j, "overflow-y", "hidden");
        ak(a.A, "overflow-x", "hidden");
        ak(a.A, "overflow-y", "hidden")
    }

    function Zk(a) {
        null !== a.l && (a.B.scrollTo(0, a.l), a.l = null)
    }
    var Xk = class {
        constructor(a, b, c) {
            this.B = a;
            this.j = b;
            this.A = c;
            this.l = null
        }
    };
    var $k = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class al {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function bl(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new cl(d)
    }

    function dl(a, b = 1) {
        a = a.j.slice(0);
        const c = new al(b);
        Cb(a, () => c.next());
        return new cl(a)
    }
    const cl = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new cl(pb(this.j, a))
        }
        apply(a) {
            return new cl(a(this.j.slice(0)))
        }
        sort(a) {
            return new cl(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new cl(b)
        }
    };
    class el {
        constructor(a) {
            this.j = new Uj(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function fl(a) {
        return new gl({
            value: a
        }, null)
    }

    function hl(a) {
        return new gl(null, Error(a))
    }

    function il(a) {
        try {
            return fl(a())
        } catch (b) {
            return new gl(null, b)
        }
    }

    function jl(a) {
        return null != a.j ? a.j.value : null
    }

    function kl(a, b) {
        null != a.j && b(a.j.value)
    }

    function ll(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class gl {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof gl ? a : fl(a)) : this
        }
    };
    class ml {
        constructor() {
            this.j = new Tj
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Uj, this.j.set(a, c));
            c.add(b)
        }
    };

    function nl(a) {
        return !a
    }

    function ol(a) {
        const b = {
            Ac: a
        };
        return () => {
            if (b.Ac) {
                const c = b.Ac;
                delete b.Ac;
                c()
            }
        }
    };
    var ql = class extends K {
            constructor(a) {
                super(a, -1, pl)
            }
            getId() {
                return x(this, 3)
            }
        },
        pl = [4];
    class rl {
        constructor(a, {
            bd: b,
            ee: c,
            Ve: d,
            Jd: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new cl(b || []);
            this.l = e;
            this.j = d
        }
    };
    var sl = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Tj;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        ul = a => {
            var b = tl(a);
            a = [];
            for (let c of b) b = String(c.hb), a.push(c.La + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const tl = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                La: "a",
                hb: vl(c)
            });
            null != a.A && b.push({
                La: "as",
                hb: a.A
            });
            null != a.j && b.push({
                La: "i",
                hb: String(a.j)
            });
            null != a.l && b.push({
                La: "rp",
                hb: String(a.l)
            });
            b.sort(function(d, e) {
                return d.La.localeCompare(e.La)
            });
            b.unshift({
                La: "t",
                hb: wl(a.C)
            });
            return b
        },
        wl = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        vl = a => {
            a = a.j.slice(0).map(xl);
            a = JSON.stringify(a);
            return lg(a)
        },
        xl = a => {
            const b = {};
            Hc(a, 7) && (b.q = x(a, 7));
            Hc(a, 2) &&
                (b.o = x(a, 2));
            Hc(a, 5) && (b.p = x(a, 5));
            return b
        };

    function yl() {
        var a = new zl;
        return z(a, 2, 1)
    }
    var zl = class extends K {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return z(this, 1, a)
        }
    };

    function Al(a) {
        const b = [].slice.call(arguments).filter(Le(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.ed || []);
            d = Object.assign(d, e.rb())
        });
        return new Bl(c, d)
    }

    function Cl(a) {
        switch (a) {
            case 1:
                return new Bl(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Bl(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Bl(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Bl(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Dl(a) {
        return null == a ? null : new Bl(null, {
            google_ml_rank: a
        })
    }

    function El(a) {
        return null == a ? null : new Bl(null, {
            google_placement_id: ul(a)
        })
    }
    class Bl {
        constructor(a, b) {
            this.ed = a;
            this.j = b
        }
        rb() {
            return this.j
        }
    };
    var Fl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Gl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Il = class extends K {
            constructor(a) {
                super(a, -1, Hl)
            }
        },
        Jl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Kl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Hl = [1];
    var Ll = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Ml = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Nl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ol = class extends K {
            constructor(a) {
                super(a)
            }
        };
    var Pl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Rl = class extends K {
            constructor(a) {
                super(a, -1, Ql)
            }
        },
        Sl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Tl = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Ql = [3];
    var Vl = class extends K {
            constructor(a) {
                super(a, -1, Ul)
            }
        },
        Ul = [2];
    var Wl = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Yl = class extends K {
            constructor(a) {
                super(a, -1, Xl)
            }
        },
        Xl = [1];
    var Zl = class extends K {
        constructor(a) {
            super(a)
        }
        aa() {
            return D(this, ql, 1)
        }
        l() {
            return x(this, 2)
        }
    };
    var $l = class extends K {
            constructor(a) {
                super(a)
            }
            getName() {
                return x(this, 4)
            }
        },
        am = class extends K {
            constructor(a) {
                super(a)
            }
        },
        bm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        cm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        dm = [1, 2, 3];
    var fm = class extends K {
            constructor(a) {
                super(a, -1, em)
            }
        },
        gm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        em = [1];
    var hm = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var jm = class extends K {
            constructor(a) {
                super(a, -1, im)
            }
        },
        im = [3, 4];
    var km = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var mm = class extends K {
            constructor(a) {
                super(a, -1, lm)
            }
            aa() {
                return D(this, ql, 1)
            }
            l() {
                return x(this, 2)
            }
        },
        lm = [6, 7, 9, 10, 11];
    var om = class extends K {
            constructor(a) {
                super(a, -1, nm)
            }
        },
        nm = [4];
    var qm = class extends K {
            constructor(a) {
                super(a, -1, pm)
            }
        },
        rm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        pm = [6];
    var tm = class extends K {
            constructor(a) {
                super(a, -1, sm)
            }
        },
        vm = class extends K {
            constructor(a) {
                super(a, -1, um)
            }
        },
        wm = class extends K {
            constructor(a) {
                super(a)
            }
            Rb() {
                return J(this, 1)
            }
            Cc() {
                return C(this, 2, 0)
            }
        },
        xm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        ym = class extends K {
            constructor(a) {
                super(a)
            }
        },
        zm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        sm = [1],
        um = [1],
        Am = [1, 2];

    function Bm(a) {
        return D(a, Cm, 13)
    }

    function Dm(a) {
        return D(a, Em, 15)
    }
    var Gm = class extends K {
            constructor(a) {
                super(a, -1, Fm)
            }
        },
        Hm = class extends K {
            constructor() {
                super(void 0)
            }
        },
        Im = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Km = class extends K {
            constructor(a) {
                super(a, -1, Jm)
            }
        },
        Lm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Mm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Cm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Nm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Em = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Om = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Pm = class extends K {
            constructor(a) {
                super(a)
            }
        },
        Fm = [1, 2, 5, 7],
        Jm = [2, 5, 6, 11];
    var Qm = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Rm(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? ad(Qm, b) : null
        } catch (b) {
            return null
        }
    }

    function Sm(a, b) {
        if (void 0 !== a.yc) {
            let c = Rm(b);
            c || (c = new Qm);
            void 0 !== a.yc && z(c, 2, a.yc);
            z(c, 1, Ha() + 864E5);
            a = cd(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Rm(b)) && x(a, 1) < Ha()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function Tm(a) {
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
    }

    function Um(a) {
        return Oj(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Vm(a, b) {
        a = (new Hf(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Wm(a, b, c) {
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
        Tm(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Xm(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Tm(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var S = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Ym = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Zm = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        };
    var $m = new S(1084),
        an = new S(1082, !0),
        bn = new S(236),
        cn = new S(1154),
        dn = new S(383, !0),
        en = new Ym(1130, 100),
        fn = new S(1150),
        gn = new Ym(1126, 5E3),
        hn = new Ym(1032, 200),
        jn = new Zm(14),
        kn = new S(1131, !0),
        ln = new Ym(1142, 8),
        mn = new Ym(1165, 1E3),
        nn = new Ym(1158),
        on = new Ym(1157),
        pn = new Ym(1103),
        qn = new S(1182),
        rn = new S(1176),
        sn = new S(1189),
        tn = new Ym(1116, 300),
        un = new Ym(1117, 100),
        vn = new S(1121),
        wn = new S(1186),
        xn = new S(1188),
        yn = new S(1187),
        zn = new Ym(1159, 500),
        An = new Ym(1119),
        Bn = new S(1122, !0),
        Cn = new S(1170),
        Dn = new S(1160),
        En = new S(316),
        Fn = new S(334),
        Gn = new Ym(54),
        Hn = new S(313),
        In = new Ym(66, -1),
        Jn = new Ym(65, -1),
        Kn = new S(369),
        Ln = new S(368),
        Mn = new Ym(1169, 15E3),
        Nn = new S(1162),
        On = new S(1175),
        Pn = new S(1120),
        Qn = new S(1178),
        Rn = new S(1171),
        Sn = new S(1151),
        Tn = new S(1164),
        Un = new S(1161, !0),
        Vn = new S(1179),
        Wn = new Ym(1072, .75),
        Xn = new Ym(1168, 15E3),
        Yn = new S(290),
        Zn = new S(190),
        $n = new S(154),
        ao = new Zm(1166),
        bo = new S(1147),
        co = new S(380254521),
        eo = new S(381914117, !0),
        fo = new S(447540098),
        go = new S(447540095),
        ho = new S(447540097),
        io = new S(447540099),
        jo = new S(447540096),
        ko = new S(83),
        lo = new S(77),
        mo = new S(78),
        no = new S(309),
        oo = new S(1953, !0),
        po = new S(80),
        qo = new S(76),
        ro = new S(1957),
        so = new S(380025941),
        to = new S(84),
        uo = new S(188),
        vo = new S(1971),
        wo = new S(1928),
        xo = new S(1941),
        yo = new S(370946349),
        zo = new S(392736476),
        Ao = new Ym(406149835),
        Bo = new S(432946749),
        Co = new S(432938498),
        Do = new Ym(1935);
    var Eo = class {
            constructor() {
                const a = {};
                this.A = (b, c) => null != a[b] ? a[b] : c;
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {}
            }
        },
        V = a => O(Eo).A(a.j, a.defaultValue),
        Fo = a => O(Eo).B(a.j, a.defaultValue);
    var Ho = (a, b, c, d = 0) => {
            var e = Go(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Qb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.hc
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Wm(a, e.anchor, e.position)
        },
        Io = (a, b, c, d = 0) => {
            V(Hn) ? Ho(a, b, c, d) : Wm(a, b, c)
        };

    function Go(a, b, c) {
        const d = f => {
                f = Jo(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Jo(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: Ko(a.previousSibling, d),
                    Qb: f => Ko(f.previousSibling, d),
                    hc: 0
                };
            case 2:
                return {
                    init: Ko(a.lastChild, d),
                    Qb: f => Ko(f.previousSibling, d),
                    hc: 0
                };
            case 3:
                return {
                    init: Ko(a.nextSibling, e),
                    Qb: f => Ko(f.nextSibling, e),
                    hc: 3
                };
            case 1:
                return {
                    init: Ko(a.firstChild, e),
                    Qb: f => Ko(f.nextSibling, e),
                    hc: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Jo(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ko(a, b) {
        return a && b(a) ? a : null
    };
    var Lo = (a, b = !1) => {
        try {
            return b ? (new zf(a.innerWidth, a.innerHeight)).round() : Lf(a || window).round()
        } catch (c) {
            return new zf(-12245933, -12245933)
        }
    };

    function Mo(a = r) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function No(a, b = r) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new yf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Oo(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Po(a) {
        -1 === a.l && (a.l = rb(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Qo {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.j[a] !== b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    N `https://www.googletagservices.com/console/host/host.js`;
    N `https://www.googletagservices.com/console/panel/index.html`;
    N `https://www.googletagservices.com/console/overlay/index.html`;
    var Ro = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function So(a, b) {
        jg(a, (c, d) => {
            b[d] = c
        })
    }
    var To = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            Gc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Gc: c
        }
    };

    function Uo(a) {
        if (a == a.top) return 0;
        for (; a && a != a.top && bg(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Vo = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Wo = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Xo = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Yo = (a, b, c) => {
        a = Vo(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Zo = (a, b) => {
            b = b.parentElement;
            return b ? (a = hg(b, a)) ? a.direction : "" : ""
        },
        $o = (a, b, c) => {
            if (0 === Yo(a, b, c)) return !1;
            Xo(b, c, "0px");
            const d = Yo(a, b, c);
            Xo(b, c, -1 * d + "px");
            a = Yo(a, b, c);
            0 !== a && a !== d && Xo(b, c, d / (a - d) * d + "px");
            return !0
        };
    const ap = RegExp("(^| )adsbygoogle($| )");

    function bp(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const e = Ef(d.Mc);
            a[e] = d.value
        }
    }

    function cp(a, b, c, d, e, f) {
        a = dp(a, e);
        a.ra.setAttribute("data-ad-format", d ? d : "auto");
        ep(a, b, c, f);
        return a
    }

    function fp(a, b, c = null) {
        a = dp(a, {});
        ep(a, b, null, c);
        return a
    }

    function ep(a, b, c, d) {
        var e = [];
        if (d = d && d.ed) a.Ra.className = d.join(" ");
        a = a.ra;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function dp(a, b) {
        var c = Vm(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.ec && bp(d, b.ec);
        a = (new Hf(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Uc && (d.marginTop = b.Uc);
        b.tc && (d.marginBottom = b.tc);
        b.eb && bp(d, b.eb);
        c.appendChild(a);
        return {
            Ra: c,
            ra: a
        }
    }

    function gp(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.rb();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function hp(a) {
        const b = Um(a.document);
        ob(b, function(c) {
            const d = ip(a, c);
            var e;
            if (e = d) e = Vo(c, a), e = !((e ? e.y : 0) < Q(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), gp(a, c))
        })
    }

    function ip(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in pf) a[pf[c]] && (b[pf[c]] = a[pf[c]]);
        return b
    };
    const jp = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = $a(b, "&") ? Bf(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Vj.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (jp(a, b[c])) return !0
        }
        return !1
    };
    var kp = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const lp = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return cp(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return kp(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function mp(a) {
        var b = [];
        Nj(a.getElementsByTagName("p"), function(c) {
            100 <= np(c) && b.push(c)
        });
        return b
    }

    function np(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Nj(a.childNodes, function(c) {
            b += np(c)
        });
        return b
    }

    function op(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function pp(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const qp = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.B)
            } catch (f) {}
            if (!b.length) return [];
            a = wb(b);
            a = pp(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.A) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = mp(a[c]),
                        e = this.A;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };
    class rp {
        constructor() {
            var a = N `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.B = Math.random();
            this.A = this.ka;
            this.D = a
        }
        Od(a) {
            this.j = a
        }
        C(a) {
            this.l = a
        }
        ka(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.B : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new Ih(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            r.google_js_errors = r.google_js_errors || [];
            r.google_js_errors.push(b);
            r.error_rep_loaded || (fg(r.document, gh(this.D)), r.error_rep_loaded = !0);
            return !1
        }
        zb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.A(a, d, .01, c, "jserror")) throw d;
            }
        }
        la(a, b) {
            return (...c) => this.zb(a, () => b.apply(void 0, c))
        }
        Za(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.ka(a, c instanceof Error ? c : Error(c))
            })
        }
    };
    const sp = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var tp = (a, b, c, d) => {
            const e = d || window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                f && queueMicrotask(() => {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                const g = ci();
                let h, l = 3;
                try {
                    h = b.apply(this, arguments)
                } catch (k) {
                    l = 13;
                    if (!c) throw k;
                    c(a, k)
                } finally {
                    e.google_measure_js_timing && g && sp(Object.assign({}, {
                        label: a.toString(),
                        value: g,
                        duration: (ci() || 0) - g,
                        type: l
                    }, f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return h
            }
        },
        up = (a, b) => tp(754, a, (c, d) => {
            (new rp).ka(c, d)
        }, b);

    function vp(a, b, c) {
        return V(Qn) ? tp(a, b, void 0, c).apply() : b()
    }

    function wp(a, b) {
        return V(Qn) ? up(a, b).apply() : Si.la(754, a).apply()
    }

    function xp(a) {
        if (!a) return null;
        var b = x(a, 7);
        if (x(a, 1) || a.getId() || 0 < Mc(a, 4).length) {
            var c = a.getId();
            b = Mc(a, 4);
            var d = x(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + op(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + op(b[c]);
            a = (b = e) ? new qp(b, x(a, 2), x(a, 5), yp(x(a, 6))) : null
        } else a = b ? new qp(b, x(a, 2), x(a, 5), yp(x(a, 6))) : null;
        return a
    }
    var zp = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function yp(a) {
        return null == a ? a : zp[a]
    }

    function Ap(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = x(a[c], 1),
                e = x(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Mc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Bp(a, b) {
        var c = {};
        a && (c.Uc = x(a, 1), c.tc = x(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.ec = Ap(H(b, hm, 3)), c.eb = Ap(H(b, hm, 4)));
        return c
    }
    var Cp = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Dp = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Ep = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return cp(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    class Fp {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = kp(a);
            return new Bl(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Gp = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const Hp = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < H(this.j, jm, 9).length ? H(this.j, jm, 9)[0] : null,
                f = Bp(D(this.j, km, 3), e);
            if (!e) return null;
            if (e = x(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Hf(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.ec && bp(c.style, f.ec);
                d = (new Hf(d)).createElement("INS");
                f.eb && bp(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Ra: c,
                    ra: d
                };
                f.ra.setAttribute("data-ad-type", "text");
                f.ra.setAttribute("data-native-settings-key",
                    e);
                ep(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < H(this.j, jm, 9).length ? H(this.j, jm, 9)[0] : null;
            if (!a) return null;
            a = H(a, hm, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == x(c, 1) && 0 < parseInt(x(c, 2), 10)) return parseInt(x(c, 2), 10)
            }
            return null
        }
    };
    const Ip = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        Mc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    eb: g
                }
            } else c = {};
            a = cp(d.document, a, f, e, c, b);
            a.ra.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        rb() {
            return this.j
        }
    };
    class Jp {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Bl([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Kp = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = this.B.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Lp(a, b, c) {
        const d = [];
        for (let u = 0; u < a.length; u++) {
            var e = a[u];
            var f = u,
                g = b,
                h = c,
                l = e.aa();
            if (l) {
                var k = xp(l);
                if (k) {
                    var m = Cp[e.l()],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = D(e, km, 3)) ? B(m, 3) : null;
                        k = new Kp(k, n);
                        n = Mc(e, 10).slice(0);
                        Hc(l, 5) && n.push(1);
                        var p = h ? h : {};
                        h = x(e, 12);
                        l = Ic(e, 4) ? D(e, zl, 4) : null;
                        1 == x(e, 8) || 2 == x(e, 8) && V(Cn) ? (p = p.ve || null, e = new Mp(k, new Ep(Bp(D(e, km, 3), null)), p, m, 0, n, l, g, f, h, e)) : e = 2 == x(e, 8) ? new Mp(k, new Hp(e), p.We || new Jp("text"), m, 1, n, l, g, f, h, e) : null
                    }
                } else e = null
            } else e =
                null;
            null !== e && d.push(e)
        }
        return d
    }

    function Np(a) {
        return a.B
    }

    function Op(a) {
        return a.Z
    }

    function Pp(a) {
        return a.D instanceof Ip ? a.D.rb() : null
    }

    function Qp(a, b, c) {
        Pj(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function Rp(a) {
        return Vm(a.j.document, a.I || !1)
    }

    function Sp(a) {
        return a.D.A(a.j)
    }

    function Tp(a, b = null, c = null) {
        return new Mp(a.F, b || a.D, c || a.M, a.I, a.Ta, a.Hc, a.lc, a.j, a.W, a.G, a.A, a.C, a.O)
    }
    class Mp {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, n = null, p = null) {
            this.F = a;
            this.D = b;
            this.M = c;
            this.I = d;
            this.Ta = e;
            this.Hc = f;
            this.lc = g ? g : new zl;
            this.j = h;
            this.W = l;
            this.G = k;
            this.A = m;
            (a = !m) || (a = !(m.aa() && null != x(m.aa(), 5)));
            this.Z = !a;
            this.C = n;
            this.O = p;
            this.J = [];
            this.B = !1;
            this.L = new Tj
        }
        T() {
            return this.j
        }
        l() {
            return this.F.l()
        }
    };
    const Up = {
        TABLE: {
            kb: new el([1, 2])
        },
        THEAD: {
            kb: new el([0, 3, 1, 2])
        },
        TBODY: {
            kb: new el([0, 3, 1, 2])
        },
        TR: {
            kb: new el([0, 3, 1, 2])
        },
        TD: {
            kb: new el([0, 3])
        }
    };

    function Vp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = nb(e, f), 0 > c || b.push(new Wp(a, [f], c, f, 3, Uf(f).trim(), d));
        return b
    }

    function Xp(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let n = 0; n < g; n++) {
            var k = f[n];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const p = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == p || "inline-block" == p ? null : m
                }
                m ? (d.length && l && e.push(new Wp(a, d, n - 1, m, 0, l, c)), d = [], h = n + 1, l = "") : (d.push(k), k = Uf(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new Wp(a, d, h, b, 2, l, c));
        return e
    }

    function Yp(a, b) {
        return a.j - b.j
    }

    function Zp(a) {
        const b = yl();
        return new Mp(new Gp(a.oc, a.pc), new Ep({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class Wp {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.ib = b.slice(0);
            this.j = c;
            this.oc = d;
            this.pc = e;
            this.B = f;
            this.l = g
        }
        T() {
            return this.l
        }
    };

    function $p(a) {
        return vb(a.B ? Xp(a.j, a.Aa, a.l) : [], a.A ? Vp(a.j, a.A, a.Aa, a.l) : []).filter(b => {
            var c = b.oc.tagName;
            c ? (c = Up[c.toUpperCase()], b = null != c && c.kb.contains(b.pc)) : b = !1;
            return !b
        })
    }
    class aq {
        constructor(a, b, c) {
            this.Aa = a;
            this.A = b.Lb;
            this.B = b.nd;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function bq(a, b) {
        if (!b) return !1;
        const c = za(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = bq(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function cq(a, b) {
        return sb(b.ib, c => bq(a, c))
    }
    class dq {
        constructor(a) {
            this.j = new Tj;
            this.l = a
        }
    };
    class eq {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var gq = (a, {
            yj: b = !1,
            zj: c = 3,
            Cf: d = null
        } = {}) => {
            a = $p(a);
            return fq(a, b, c, d)
        },
        fq = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Yp);
            a = [];
            b = new eq(b, d);
            for (const k of e) {
                d = b;
                e = {
                    ic: k,
                    Vb: 51 > k.B.length ? !1 : null != d.A ? !cq(d.A, k) : !0
                };
                if (d.B || e.Vb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].ic;
                        b: {
                            var g = f.T();
                            var h = f.ib[f.ib.length - 1];f = e.ic.ib[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (jp(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Vb && d.l.push(e.ic)) : (d.j = [e], d.l = e.Vb ? [e.ic] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Vb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var iq = (a, b) => {
            a = hq(a, b);
            const c = new dq(b);
            return $k(a, d => gq(d, {
                Cf: c
            }))
        },
        hq = (a, b) => {
            const c = new Tj;
            a.forEach(d => {
                var e = xp(D(d, ql, 1));
                if (e) {
                    const f = e.toString();
                    Pj(c, f) || c.set(f, {
                        articleStructure: d,
                        le: e,
                        Lb: null,
                        nd: !1
                    });
                    e = c.get(f);
                    (d = (d = D(d, ql, 2)) ? x(d, 7) : null) ? e.Lb = e.Lb ? e.Lb + "," + d : d: e.nd = !0
                }
            });
            return Sj(c).map(d => {
                const e = d.le.query(b.document);
                return e.length ? new aq(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const jq = a => {
            a = a.Aa.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        kq = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.Aa.getBoundingClientRect().width));
            return c => c.Aa.getBoundingClientRect().width > .5 * b
        },
        lq = a => {
            const b = Q(a).clientHeight || 0;
            return c => c.Aa.getBoundingClientRect().height >= .75 * b
        },
        mq = (a, b) => a.Aa.getBoundingClientRect().top - b.Aa.getBoundingClientRect().top;
    var nq = a => (null == a ? 0 : a.google_ad_slot) ? fl(new rl(1, {
            ee: a.google_ad_slot
        })) : hl("Missing dimension when creating placement id"),
        pq = a => {
            switch (a.Ta) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.aa(), null == a ? a = null : (b = b.l(), a = null == b ? null : new rl(0, {
                        bd: [a],
                        Jd: b
                    })));
                    return null != a ? fl(a) : hl("Missing dimension when creating placement id");
                case 2:
                    return a = oq(a), null != a ? fl(a) : hl("Missing dimension when creating placement id");
                default:
                    return hl("Invalid type: " + a.Ta)
            }
        };
    const oq = a => {
        if (null == a || null == a.C) return null;
        const b = D(a.C, ql, 1),
            c = D(a.C, ql, 2);
        if (null == b || null == c) return null;
        const d = a.O;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new rl(0, {
            bd: [b, c],
            Ve: d,
            Jd: Dp[a]
        })
    };

    function qq(a) {
        const b = Pp(a.V);
        return (b ? nq(b) : pq(a.V)).map(c => ul(c))
    }

    function rq(a) {
        a.j = a.j || qq(a);
        return a.j
    }

    function sq(a, b) {
        if (a.V.B) throw Error("AMA:AP:AP");
        Io(b, a.aa(), a.V.l());
        a = a.V;
        a.B = !0;
        null != b && a.J.push(b)
    }
    const tq = class {
        constructor(a, b, c) {
            this.V = a;
            this.l = b;
            this.X = c;
            this.j = null
        }
        aa() {
            return this.l
        }
        fill(a, b) {
            var c = this.V;
            (a = c.D.l(a, b, this.l, c.j)) && sq(this, a.Ra);
            return a
        }
    };

    function uq(a, b) {
        return wp(() => {
            const c = [],
                d = [];
            try {
                var e = [];
                for (var f = 0; f < a.length; f++) {
                    var g = a[f],
                        h = g.F.j(g.j);
                    h && e.push({
                        Gd: g,
                        anchorElement: h
                    })
                }
                for (g = 0; g < e.length; g++) {
                    f = d;
                    var l = f.push; {
                        var k = e[g];
                        const A = k.anchorElement,
                            y = k.Gd;
                        var m = y.I,
                            n = y.j.document.createElement("div");
                        n.className = "google-auto-placed";
                        var p = n.style;
                        p.textAlign = "center";
                        p.width = "100%";
                        p.height = "0px";
                        p.clear = m ? "both" : "none";
                        h = n;
                        try {
                            Io(h, A, y.l());
                            var u = h
                        } catch (F) {
                            throw Xm(h), F;
                        }
                    }
                    l.call(f, u)
                }
                const w = Fj(b),
                    t = Gj(b);
                for (k = 0; k < d.length; k++) {
                    l =
                        t;
                    u = w;
                    const A = d[k].getBoundingClientRect(),
                        y = e[k];
                    c.push(new tq(y.Gd, y.anchorElement, new Qk(A.left + l, A.top + u, A.right - A.left)))
                }
            } finally {
                for (e = 0; e < d.length; e++) Xm(d[e])
            }
            return c
        }, b)
    };

    function vq(a, b) {
        const c = $p(b);
        c.sort(Yp);
        return new wq(a, b, c)
    }

    function xq(a, b, c) {
        return new Mp(new Gp(b, c), new Ep({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var wq = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
        next() {
            if (!this.l) {
                if (this.A >= this.B.length) var a = null;
                else {
                    {
                        const b = this.B[this.A++].ib[0];
                        ya(b) && 1 == b.nodeType ? a = xq(this, b, 0) : (a = this.j.document.createElement("div"), M(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = xq(this, a, 3))
                    }
                    a = uq([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var yq = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const zq = {
            1: "0.5vp",
            2: "300px"
        },
        Aq = {
            1: 700,
            2: 1200
        },
        Bq = {
            [1]: {
                Rd: "3vp",
                Rc: "1vp",
                Qd: "0.3vp"
            },
            [2]: {
                Rd: "900px",
                Rc: "300px",
                Qd: "90px"
            }
        };

    function Cq(a, b, c) {
        var d = Dq(a),
            e = Q(a).clientHeight || Aq[d],
            f = void 0;
        c && (f = (c = (c = Eq(H(c, Rl, 2), d)) ? D(c, Tl, 7) : void 0) ? Fq(c, e) : void 0);
        c = f;
        f = Dq(a);
        a = Q(a).clientHeight || Aq[f];
        const g = Gq(Bq[f].Rc, a);
        a = null === g ? Hq(f, a) : new Iq(g, g, Jq(g, g, 8), 8, .3, c);
        c = Gq(Bq[d].Rd, e);
        f = Gq(Bq[d].Rc, e);
        e = Gq(Bq[d].Qd, e);
        d = a.A;
        c && e && f && void 0 !== b && (d = .5 >= b ? f + (1 - 2 * b) * (c - f) : e + (2 - 2 * b) * (f - e));
        b = d;
        return new Iq(d, b, Jq(d, b, a.l), a.l, a.B, a.j)
    }

    function Kq(a, b) {
        const c = Dq(a);
        a = Q(a).clientHeight || Aq[c];
        if (b = Eq(H(b, Rl, 2), c))
            if (b = Lq(b, a)) return b;
        return Hq(c, a)
    }

    function Mq(a) {
        const b = Dq(a);
        return Hq(b, Q(a).clientHeight || Aq[b])
    }

    function Nq(a, b) {
        let c = {
            cc: a.A,
            Xa: a.C
        };
        for (let d of a.D) d.adCount <= b && (c = d.Qc);
        return c
    }

    function Oq(a, b, c) {
        var d = B(b, 2);
        b = D(b, Rl, 1);
        const e = Q(c).clientHeight || Aq[Dq(c)];
        var f;
        c = null != (f = Gq(null == b ? void 0 : x(b, 2), e)) ? f : a.A;
        let g;
        f = null != (g = Gq(null == b ? void 0 : x(b, 5), e)) ? g : a.C;
        var h;
        d = d ? [] : null != (h = Pq(null == b ? void 0 : H(b, Sl, 3), e)) ? h : a.D;
        var l;
        h = null != (l = null == b ? void 0 : x(b, 4)) ? l : a.l;
        var k;
        l = null != (k = null == b ? void 0 : Nc(b, 6)) ? k : a.B;
        let m;
        k = null != (m = (null == b ? 0 : Ic(b, 7)) ? Fq(D(b, Tl, 7), e) : null) ? m : a.j;
        return new Iq(c, f, d, h, l, k)
    }
    class Iq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function Eq(a, b) {
        for (let c of a)
            if (x(c, 1) == b) return c;
        return null
    }

    function Pq(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = x(d, 1);
            const e = Gq(x(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Qc: {
                    cc: e,
                    Xa: Gq(x(d, 3), b)
                }
            })
        }
        return c
    }

    function Lq(a, b) {
        const c = Gq(x(a, 2), b),
            d = Gq(x(a, 5), b);
        if (null === c) return null;
        const e = x(a, 4);
        if (null == e) return null;
        var f = H(a, Sl, 3);
        f = Pq(f, b);
        if (null === f) return null;
        const g = D(a, Tl, 7);
        return new Iq(c, d, f, e, Nc(a, 6), g ? Fq(g, b) : void 0)
    }

    function Hq(a, b) {
        a = Gq(zq[a], b);
        return new Iq(null === a ? Infinity : a, null, [], 3, null)
    }

    function Gq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Dq(a) {
        a = 900 <= Q(a).clientWidth;
        return Zf() && !a ? 1 : 2
    }

    function Jq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Qc: {
                cc: 2 * a,
                Xa: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Qc: {
                cc: 3 * a,
                Xa: 3 * b
            }
        }]
    }

    function Fq(a, b) {
        return {
            Ad: Gq(x(a, 2), b) || 0,
            yd: x(a, 3) || 1,
            gb: Gq(x(a, 1), b) || 0
        }
    };

    function Qq(a, b, c) {
        return pj({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Rq(a) {
        if (!a.length) return null;
        const b = qj(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Sq(b, a)
    }
    class Sq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Tq(a = window) {
        a = a.googletag;
        return (null == a ? 0 : a.apiReady) ? a : void 0
    };
    var Zq = (a, b) => {
        const c = wb(b.document.querySelectorAll(".google-auto-placed")),
            d = Uq(b),
            e = Vq(b),
            f = Wq(b),
            g = Xq(b),
            h = wb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = wb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            k = wb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(wb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), wb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.Sb, c],
                [a.Sa, d],
                [a.Te, e],
                [a.Tb, f],
                [a.Ub, g],
                [a.Re, h],
                [a.Se, l],
                [a.Ue, k]
            ]) a = p, !1 === n ? b = b.concat(a) : m = m.concat(a);
        a = Yq(m);
        b = Yq(b);
        a = a.slice(0);
        for (const n of b)
            for (b = 0; b < a.length; b++)(n.contains(a[b]) || a[b].contains(n)) && a.splice(b, 1);
        return a
    };
    const $q = a => {
            const b = Tq(a);
            return b ? pb(qb(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Uq = a => wb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        Vq = a => wb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Wq = a => ($q(a) || wb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(wb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Xq = a => wb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Yq = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var ar = Si.la(453, Zq),
        br;
    br = Si.la(454, (a, b) => {
        const c = wb(b.document.querySelectorAll(".google-auto-placed")),
            d = Uq(b),
            e = Vq(b),
            f = Wq(b),
            g = Xq(b),
            h = wb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = wb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = wb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Yq([].concat(!0 === a.Sb ? c : [], !0 === a.Sa ? d : [], !0 === a.Te ? e : [], !0 === a.Tb ? f : [], !0 === a.Ub ? g : [], !0 === a.Re ? h : [], !0 === a.Se ? l : [], !0 === a.Ue ? b : []))
    });

    function cr(a, b, c) {
        const d = dr(a);
        b = er(d, b, c);
        return new fr(a, d, b)
    }

    function gr(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function hr(a) {
        return a.j.map(b => b.box)
    }

    function ir(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class fr {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function dr(a) {
        const b = ar({
                Sa: !1
            }, a),
            c = Gj(a),
            d = Fj(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && $a(e.className, "google-auto-placed")) || gr(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                vj: e ? 1 : 0
            } : null
        }).filter(Le(e => null === e))
    }

    function er(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? jr(a, b) : qb(a, d => new Sq(d.box, 1))
    }

    function jr(a, b) {
        a = qb(a, d => new Sq(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Qq(d, a[f], b)) {
                        d = Rq([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function kr(a, b, c) {
        const d = Pk(c, b);
        return !sb(a, e => pj(e, d))
    }

    function lr(a, b, c, d, e) {
        e = e.X;
        const f = Pk(e, b),
            g = Pk(e, c),
            h = Pk(e, d);
        return !sb(a, l => pj(l, g) || pj(l, f) && !pj(l, h))
    }

    function mr(a, b, c, d) {
        const e = hr(a);
        if (kr(e, b, d.X)) return !0;
        if (!lr(e, b, c.Ad, c.gb, d)) return !1;
        const f = new Sq(Pk(d.X, 0), 1);
        a = pb(a.B, g => Qq(g, f, c.gb));
        b = rb(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.yd ? !1 : !0
    };
    var nr = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function or(a, b) {
        const c = new ml,
            d = new Uj;
        b.forEach(e => {
            if (Yc(e, am, 1, dm)) {
                e = Yc(e, am, 1, dm);
                if (D(e, Zl, 1) && D(e, Zl, 1).aa() && D(e, Zl, 2) && D(e, Zl, 2).aa()) {
                    const g = pr(a, D(e, Zl, 1).aa()),
                        h = pr(a, D(e, Zl, 2).aa());
                    if (g && h)
                        for (var f of nr({
                                anchor: g,
                                position: D(e, Zl, 1).l()
                            }, {
                                anchor: h,
                                position: D(e, Zl, 2).l()
                            })) c.set(za(f.anchor), f.position)
                }
                D(e, Zl, 3) && D(e, Zl, 3).aa() && (f = pr(a, D(e, Zl, 3).aa())) && c.set(za(f), D(e, Zl, 3).l())
            } else Yc(e, bm, 2, dm) ? qr(a, Yc(e, bm, 2, dm), c) : Yc(e, cm, 3, dm) && rr(a, Yc(e, cm, 3, dm), d)
        });
        return new sr(c, d)
    }
    class sr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const qr = (a, b, c) => {
            D(b, ql, 1) && (a = tr(a, D(b, ql, 1))) && a.forEach(d => {
                d = za(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        rr = (a, b, c) => {
            D(b, ql, 1) && (a = tr(a, D(b, ql, 1))) && a.forEach(d => {
                c.add(za(d))
            })
        },
        pr = (a, b) => (a = tr(a, b)) && 0 < a.length ? a[0] : null,
        tr = (a, b) => (b = xp(b)) ? b.query(a) : null;

    function ur(a, b, c) {
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
            if (vr(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function wr(a) {
        a = xr(a);
        return a.has("all") || a.has("after")
    }

    function yr(a) {
        a = xr(a);
        return a.has("all") || a.has("before")
    }

    function xr(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function vr(a) {
        const b = xr(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var zr = class {
        constructor() {
            this.j = new Set
        }
    };

    function Ar(a) {
        return function(b) {
            return uq(b, a)
        }
    }

    function Br(a) {
        const b = Q(a).clientHeight;
        return b ? Ga(Cr, b + Fj(a)) : Ie
    }

    function Dr(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ie;
        const d = hr(c || cr(b));
        return e => kr(d, a, e.X)
    }

    function Er(a, b, c, d) {
        if (0 > a || 0 > b.Ad || 0 > b.yd || 0 > b.gb) throw Error("ama::ead:nd");
        return Infinity === a ? Ie : e => mr(d || cr(c, b.gb), a, b, e)
    }

    function Fr(a) {
        if (!a.length) return Ie;
        const b = new el(a);
        return c => b.contains(c.Ta)
    }

    function Gr(a) {
        return function(b) {
            for (let c of b.Hc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Hr(a) {
        return a.length ? function(b) {
            const c = b.Hc;
            return a.some(d => -1 < c.indexOf(d))
        } : Je
    }

    function Ir(a, b) {
        if (0 >= a) return Je;
        const c = Q(b).scrollHeight - a;
        return function(d) {
            return d.X.j <= c
        }
    }

    function Jr(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[x(c.lc, 2) || 0]
        }
    }

    function Kr(a) {
        return a.length ? b => a.includes(x(b.lc, 1) || 0) : Je
    }

    function Lr(a, b) {
        const c = or(a, b);
        return function(d) {
            var e = d.aa();
            d = Dp[d.V.l()];
            var f = za(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(za(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(za(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Mr() {
        const a = new zr;
        return function(b) {
            var c = b.aa();
            b = Dp[b.V.l()];
            a: switch (b) {
                case 1:
                    var d = wr(c.previousElementSibling) || yr(c);
                    break a;
                case 4:
                    d = wr(c) || yr(c.nextElementSibling);
                    break a;
                case 2:
                    d = yr(c.firstElementChild);
                    break a;
                case 3:
                    d = wr(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || ur(a, c, b))
        }
    }
    const Cr = (a, b) => b.X.j >= a,
        Nr = (a, b, c) => {
            c = c.X.l;
            return a <= c && c <= b
        };
    var Or = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Br(this.A);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Pr = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new mm;
            var b = D(this.A.j, ql, 1);
            a = Tc(a, 1, b);
            a = z(a, 2, 2);
            a = z(a, 8, 1);
            a = Lp([a], this.l);
            return uq(a, this.l)[0] || null
        }
    };
    const Qr = (a, b, c) => {
            a = a.createElement("script");
            He(a, Jd(ld(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        Rr = {
            [1]: "out_of_view"
        };
    class Sr {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function Tr() {
        const {
            promise: a,
            resolve: b
        } = new Sr;
        return {
            promise: a,
            resolve: b
        }
    };

    function Ur(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = Tr();
        b[a] = d;
        c();
        return d
    }

    function Vr(a, b, c) {
        return Ur(a, b, () => {
            fg(b.document, c)
        }).promise
    };

    function Wr(a, b, c) {
        a = Vr(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        });
        Si.Za(915, a);
        return new Xr(a)
    }

    function Yr(a, b) {
        if (!a.j) {
            var c = a.l.then(d => {
                d.handleAdBreak({
                    type: "preroll",
                    name: "audiosense-preroll",
                    adBreakDone: b
                })
            });
            Si.Za(956, c);
            a.j = !0
        }
    }
    var Xr = class {
        constructor(a) {
            this.l = a;
            this.j = !1
        }
    };
    var Zr = {
            Ba: "ama_success",
            ta: .1,
            wa: !0
        },
        $r = {
            Ba: "ama_failure",
            ta: .1,
            wa: !0
        },
        as = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        bs = {
            Ba: "ama_inf_scr",
            ta: .1,
            wa: !0
        },
        cs = {
            Ba: "ama_coverage",
            ta: .1,
            wa: !0
        },
        ds = {
            Ba: "ama_inf_scr",
            ta: 1,
            wa: !0
        },
        es = {
            Ba: "ama_opt",
            ta: .1,
            wa: !0
        },
        fs = {
            Ba: "ama_aud_sen",
            ta: 1,
            wa: !0
        };

    function gs(a, b) {
        for (var c = 0; c < b.length; c++) a.ua(b[c]);
        return a
    }

    function hs(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class is {
        constructor(a) {
            this.G = {};
            this.G.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.F = 0
        }
        bb(a) {
            this.G.wpc = a;
            return this
        }
        ua(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = td(this.G);
            0 < this.F && (b.t = this.F);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && ni(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function js(a, b, c) {
        !b.wa || "pvc" in c || (c.pvc = Ig(a.j));
        Vi(b.Ba, c, b.ta)
    }

    function ks(a, b, c) {
        c = c.B(a.j);
        b.wa && (c.pvc = Ig(a.j));
        0 < b.ta && (c.r = b.ta, js(a, b, c))
    }
    var ls = class {
        constructor(a) {
            this.j = a
        }
    };

    function ms(a, b, c, d, e) {
        let f;
        const g = null == (f = D(c, fm, 6)) ? void 0 : H(f, gm, 1);
        return g && 0 != g.length ? (c = D(c, Fl, 27)) ? D(c, Gl, 2) ? fl(new ns(a, b, g, c, d, e)) : hl("No AudioSenseConfig.PlacementConfig found") : hl("No AudioSenseConfig found") : hl("No ArticleStructure found")
    }

    function ts(a) {
        a.A.addEventListener("playing", () => {
            a.C.j || (a.A.pause(), Yr(a.C, () => a.A.play()))
        })
    }

    function us(a) {
        return (a = D(a.l, Il, 3)) ? H(a, Jl, 1).some(b => 1 === C(b, 1, 0)) : !1
    }

    function vs(a, b) {
        let c;
        js(a.D, fs, Object.assign({}, b, {
            vh: Q(a.j).clientHeight,
            eid: null == (c = D(a.l, Kl, 4)) ? void 0 : J(c, 2)
        }))
    }
    var ns = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.D = b;
            this.F = c;
            this.l = d;
            this.B = e;
            this.G = f;
            this.A = this.C = null
        }
    };
    const ws = ["-webkit-text-fill-color"];

    function xs(a) {
        if (Jb) {
            {
                const c = hg(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = ys(a)
                } else a = zs()
            }
        } else a = zs();
        return a
    }
    var zs = () => {
        const a = {
            all: "initial"
        };
        ob(ws, b => {
            a[b] = "unset"
        });
        return a
    };

    function ys(a) {
        ob(ws, b => {
            delete a[b]
        });
        return a
    };
    class As {
        constructor(a) {
            this.j = a
        }
        sa(a) {
            const b = a.document.createElement("div");
            M(b, xs(a));
            M(b, {
                width: "100%",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, xs(a));
            c.className = "auto-prose-searchbox-wrapper";
            c.appendChild(b);
            return c
        }
    };
    var Bs = {},
        Cs = {},
        Ds = {},
        Es = {},
        Fs = {};

    function Gs() {
        throw Error("Do not instantiate directly");
    }
    Gs.prototype.gd = null;
    Gs.prototype.sa = function() {
        return this.content
    };
    Gs.prototype.toString = function() {
        return this.content
    };

    function Hs(a) {
        if (a.hd !== Bs) throw Error("Sanitized content was not of kind HTML.");
        return pe(a.toString())
    }

    function Is() {
        Gs.call(this)
    }
    Ja(Is, Gs);
    Is.prototype.hd = Bs;

    function Js(a, b) {
        return null != a && a.hd === b
    };

    function Ks(a) {
        if (null != a) switch (a.gd) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Ls(a) {
        return Js(a, Bs) ? a : a instanceof ne ? Ms(me(a).toString()) : a instanceof ne ? Ms(me(a).toString()) : Ms(String(String(a)).replace(Ns, Os), Ks(a))
    }
    var Ms = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.gd = d);
            return c
        }
    }(Is);

    function Ps(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Qs(a) {
        return Js(a, Bs) ? String(String(a.sa()).replace(Rs, "").replace(Ss, "&lt;")).replace(Ts, Os) : String(a).replace(Ns, Os)
    }

    function Us(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let l = 0; l < g; l++) {
                var h = e[f + l];
                if (d[l] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Vs(a) {
        if (null == a) return " null ";
        if (Js(a, Cs)) return a.sa();
        if (a instanceof Bd || a instanceof Bd) return Ad(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ws, Xs) + "'"
        }
    }

    function W(a) {
        Js(a, Fs) ? a = Ps(a.sa()) : null == a ? a = "" : a instanceof Zd ? a = Ps(Yd(a)) : a instanceof Zd ? a = Ps(Yd(a)) : a instanceof ke ? a = Ps(je(a)) : a instanceof ke ? a = Ps(je(a)) : (a = String(a), a = Ys.test(a) ? a : "zSoyz");
        return a
    }
    const Zs = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Os(a) {
        return Zs[a]
    }
    const $s = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Xs(a) {
        return $s[a]
    }
    const at = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function bt(a) {
        return at[a]
    }
    const Ns = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Ts = /[\x00\x22\x27\x3c\x3e]/g,
        Ws = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        ct = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Ys = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        dt =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function et(a) {
        return String(a).replace(ct, bt)
    }
    const Rs = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Ss = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var ft = class {
        constructor(a) {
            this.j = a
        }
        init() {
            var a = Ms('<style>.autoprose-input {width: 100%; padding: 0; border: none; margin: 0; height: auto; outline: none;}.autoprose-input-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 1px; border-style: solid; border-radius: 24px 0 0 24px; -moz-border-radius: 24px 0 0 24px; -webkit-border-radius: 24px 0 0 24px; padding-left: 24px; width: 100%;}.autoprose-searchbox {width: 100%; padding: 0; border: none; margin: 0; height: auto; background: rgb(255, 255, 255); outline: none;}.autoprose-searchbox-clear-button {padding-right: 5px; visibility: hidden;}.autoprose-searchbox-clear-td {background: #fff; border-color: #bdc1c6; border-width: 1px 0 1px 0; border-style: solid;}.autoprose-search-button {border-color: #bdc1c6; background-color: #fff; background-image: none; font-size: 0; padding: 6px 27px; width: auto; vertical-align: middle; border: 1px solid #bdc1c6; border-radius: 0 24px 24px 0; -moz-border-radius: 0 24px 24px 0; -webkit-border-radius: 0 24px 24px 0; height: 100%;}.autoprose-searchbox-div {padding: 5px;}.autoprose-searchbox-table {height: 38px; margin-left: auto; margin-right: auto;}</style><div class="autoprose-searchbox-div"><table class="autoprose-searchbox-table" cellspacing="0" cellpadding="0"><tr><td class="autoprose-input-td"><input autocomplete="off" class="autoprose-input" dir="ltr" name="search" placeholder="Search" size="40" spellcheck="false" title="search" type="text"></td><td class="autoprose-searchbox-clear-td"><div class="autoprose-searchbox-clear-button" title="clear results"><svg width="14" height="14" viewBox="0 0 14 14" fill="none visibility: hidden;" mlns="http://www.w3.org/2000/svg" stlye="float: right;"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#80868b"/></svg></div></td><td><button class="autoprose-search-button"><svg width="13" height="13" viewBox="0 0 13 13"><title>search</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z" fill="#1a73e8"></path></svg></button></td></tr></table></div>');
            a = Hs(a);
            this.j.appendChild(Qf(document, a))
        }
    };

    function gt(a) {
        const b = Rp(a.A.V),
            c = a.C.sa(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ie: b,
            De: c
        }
    }
    class ht {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new dk(null)
        }
        init() {
            const a = gt(this);
            this.j = a.Ie;
            sq(this.A, this.j);
            R(this.l, a.De)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            R(this.l, null)
        }
        G() {
            return this.l
        }
    };

    function it(a) {
        var b;
        let c;
        const d = jt(a.l, H(a.j, mm, 1), null == (b = D(a.j, Nl, 31)) ? void 0 : null == (c = D(b, Ol, 2)) ? void 0 : C(c, 1, 0));
        if (d) {
            var e;
            null == (e = D(a.j, Nl, 31)) || D(e, Ll, 5);
            b = a.l.document.createElement("div");
            (new ht(a.l, d, new As(b))).init();
            var f;
            (new ft(b, null == (f = D(a.j, Nl, 31)) ? void 0 : D(f, Ml, 4))).init()
        }
    }
    var kt = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function jt(a, b, c) {
        b = b.filter(d => {
            a: {
                var e = x(D(d, zl, 4), 1);
                switch (c) {
                    case 1:
                        e = 4 === e || 2 === e;
                        break a;
                    case 2:
                        e = 5 === e || 3 === e;
                        break a;
                    default:
                        e = !1
                }
            }
            d = 1 === x(d, 8);
            return e && d
        });
        b = Lp(b, a);
        a = uq(b, a);
        a.sort(lt);
        b = [1, 3].includes(c) ? 0 : a.length - 1;
        return a[b] || null
    }

    function lt(a, b) {
        return a.X.j - b.X.j
    };
    var mt = class {
        constructor(a) {
            this.j = a
        }
        sa(a) {
            const b = a.document.createElement("div");
            M(b, xs(a));
            M(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            M(c, xs(a));
            M(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var nt = (a, b) => (b = D(b, fm, 6)) ? iq(H(b, gm, 1), a).map(c => Zp(c)) : [];

    function ot(a, b, c) {
        a.Ca.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.A
        })
    }
    var pt = class {
        constructor(a, b, c, d, e, f) {
            this.Ca = a;
            this.l = "9d449ff4a772956c6";
            this.j = b;
            this.host = c;
            this.language = d;
            this.B = e;
            this.A = f
        }
        init() {
            this.Ca.setAttribute("id", "prose-iframe");
            this.Ca.setAttribute("width", "100%");
            this.Ca.setAttribute("height", "100%");
            var a = this.Ca,
                b = $d({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = Yd(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Ud(a) || Wd;
            a = this.j;
            b = this.host;
            var d = this.language,
                e = this.B.replace("${website}",
                    this.host.startsWith("www.") ? this.host.slice(4) : this.host),
                f = Ms;
            Js(c, Ds) || Js(c, Es) ? c = et(c) : c instanceof Pd ? c = et(Qd(c)) : c instanceof Pd ? c = et(Qd(c)) : c instanceof Dd ? c = et(Id(c).toString()) : c instanceof Dd ? c = et(Id(c).toString()) : (c = String(c), c = dt.test(c) ? c.replace(ct, bt) : "about:invalid#zSoyz");
            a = f('<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; height: 16px; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style><img class="cse-favicon" src="' +
                Qs(c) + '" alt="' + Qs(b) + ' icon"><p class="cse-header"><strong>' + Ls(e) + '</strong></p><div class="gcse-search" data-gname="' + Qs("auto-rs-prose") + '" data-adclient="' + Qs(a) + '" data-adchannel="AutoRsVariant" data-as_sitesearch="' + Qs(b) + '" data-gl="' + Qs(d) + '" data-personalizedAds="false"></div>');
            a = Hs(a);
            b = {
                style: $d({
                    margin: 0
                })
            };
            d = {
                src: Ld(md("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.language
                })
            };
            e = {};
            f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] =
                d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = te("script", f);
            g = qe("body", b, [a, g]);
            this.Ca.srcdoc = me(g)
        }
    };

    function qt(a, b) {
        return new rt(a, b)
    }

    function st(a) {
        const b = tt(a);
        ob(a.j.maxZIndexListeners, c => c(b))
    }

    function tt(a) {
        a = kg(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class ut {
        constructor(a) {
            this.j = uj(a).floatingAdsStacking
        }
        addListener(a) {
            this.j.maxZIndexListeners.push(a);
            a(tt(this))
        }
    }

    function vt(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            st(b);
            a.j = d
        }
    }

    function wt(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            st(b);
            a.j = null
        }
    }
    class rt {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function xt(a) {
        L(a.l, "click", () => yt(a));
        L(a.F, "click", () => void yt(a));
        const b = a.width / a.win.innerWidth;
        L(a.win, "resize", () => {
            a.width = Math.floor(b * a.win.innerWidth);
            a.j.style.width = `${a.width}px`;
            a.j.style.height = `${a.win.innerHeight}px`;
            a.l.style.width = `${a.win.innerWidth}px`;
            a.l.style.height = `${a.win.innerHeight}px`;
            a.C && (a.B.style.transform = `translateX(${a.width}px)`)
        })
    }

    function yt(a) {
        a.C = !0;
        a.j.scrollTop = 0;
        a.B.style.transitionDuration = ".5s";
        a.B.style.transform = `translateX(${a.width}px)`;
        a.l.style.opacity = "0";
        a.A.style.transitionDelay = ".5s";
        Db(a.A.offsetWidth);
        a.A.style.visibility = "hidden";
        setTimeout(() => {
            a.win.document.documentElement.style.overflow = ""
        }, 500);
        for (const b of a.G) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }
    var zt = class {
        constructor(a, b) {
            this.win = a;
            this.width = b;
            this.G = [];
            this.C = !0;
            b = new Hf(a.document);
            this.l = b.ha("DIV", {
                "class": "adpub-drawer-modal-background"
            });
            var c = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
            c.setAttribute("viewBox", "0 0 24 24");
            var d = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
            d.setAttribute("fill", "#5f6368");
            d.setAttribute("d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z");
            c.appendChild(d);
            this.F = b.ha("DIV", {
                "class": "adpub-drawer-close-button"
            }, c);
            this.j = b.ha("DIV", {
                "class": "adpub-drawer-contents"
            });
            this.B = b.ha("DIV", {
                "class": "adpub-drawer"
            }, this.F, this.j);
            this.A = b.ha("DIV", {
                "class": "adpub-drawer-container"
            }, this.l, this.B);
            this.D = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            c = this.D.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.win.innerHeight - 5;
            var f = this.width,
                g = a.innerWidth;
            e = Ms("<style>.adpub-drawer-container {height: 100%; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " +
                W(100002) + ";}.adpub-drawer-modal-background {background-color: black; height: " + W(e + 5) + "px; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: " + W(g) + "px;}.adpub-drawer {position: absolute; transform: translateX(" + W(f) + "px); transition: transform .5s ease-in-out; height: 100%; overflow: auto; right: 0; border-radius: 20px 0 0 20px;}.adpub-drawer-close-button {color: #5f6368; height: 24px; width: 24px; top: 20px; right: 20px; position: fixed; cursor: pointer;}.adpub-drawer-contents {background: white; height: " +
                W(e) + "px; overflow-y: auto; padding-top: " + W(5) + "px; width: " + W(f) + "px;}</style>");
            d.call(c, Yf(b, Hs(e)));
            c.appendChild(this.A);
            M(this.D, xs(a))
        }
        init() {
            this.win.document.body.appendChild(this.D);
            xt(this)
        }
        Z(a) {
            for (; this.j.firstChild;) this.j.removeChild(this.j.firstChild);
            this.j.appendChild(a)
        }
        show() {
            this.C = !1;
            this.win.document.documentElement.style.overflow = "hidden";
            this.A.style.transitionDelay = "0s";
            this.A.style.visibility = "visible";
            this.l.style.opacity = ".5";
            this.B.style.transform = "translateX(0)"
        }
        pa(a) {
            this.G.push(a)
        }
    };

    function At(a) {
        L(a.J, "click", () => Bt(a));
        L(a.B, "mousedown", () => {
            const d = f => {
                    Ct(a, f.movementY)
                },
                e = () => {
                    Dt(a);
                    Ue(a.B, "mousemove", d);
                    Ue(a.B, "mouseup", e);
                    Ue(a.B, "mouseleave", e)
                };
            L(a.B, "mousemove", d);
            L(a.B, "mouseup", e);
            L(a.B, "mouseleave", e)
        });
        L(a.j, "touchstart", d => {
            let e = d.touches[0];
            const f = h => {
                    const l = h.touches[0];
                    0 === Et(a) ? a.l.classList.add("scrollable") : a.l.classList.remove("scrollable");
                    if (e) {
                        var k = 0 === Et(a) && a.l.scrollTop;
                        const m = l.target === a.B || l.target.parentElement === a.B;
                        if (!k || m) k = l.screenY - e.screenY,
                            Ct(a, k), k = 0 < k && 0 === a.l.scrollTop, k = a.I && !k, h.cancelable && !k && h.preventDefault()
                    }
                    e = l
                },
                g = () => {
                    Dt(a);
                    Ue(a.j, "touchmove", f);
                    Ue(a.j, "touchend", g);
                    Ue(a.j, "touchcancel", g)
                };
            L(a.j, "touchmove", f, {
                passive: !1
            });
            L(a.j, "touchend", g);
            L(a.j, "touchcancel", g)
        });
        L(a.C, "touchstart", () => {});
        const b = a.A / a.win.innerHeight,
            c = a.G / a.A;
        L(a.win, "resize", () => {
            a.A = Math.floor(b * a.win.innerHeight);
            a.G = Math.floor(c * a.A);
            a.D = a.win.innerHeight - (a.A + 30 - 20);
            const d = a.I ? 0 : a.A - a.G;
            a.l.style.height = `${a.A}px`;
            a.j.style.transform = a.L ? `translateY(${a.A+ 
a.D}px)` : `translateY(${d+a.D}px)`
        })
    }

    function Ft(a, b) {
        var c = ["https://cse.google.com"];
        const d = ["touchstart", "touchmove", "touchend", "touchcancel"],
            e = (k, m, n) => {
                try {
                    const p = n.map(u => new Touch(u));
                    k.dispatchEvent(new TouchEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        touches: p
                    }))
                } catch (p) {
                    m = new UIEvent(m, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: 1,
                        view: a.win
                    });
                    for (const u of n) k.dispatchEvent(Object.assign(m, {
                        touches: [u]
                    }))
                }
            },
            f = k => {
                k = k.contentDocument;
                for (const m of d) L(k, m, n => {
                    n = [...n.touches].map(p => ({
                        clientX: p.clientX,
                        clientY: p.clientY,
                        force: p.force,
                        identifier: p.identifier,
                        pageX: p.pageX,
                        pageY: p.pageY,
                        radiusX: p.radiusX,
                        radiusY: p.radiusY,
                        rotationAngle: p.rotationAngle,
                        screenX: p.screenX,
                        screenY: p.screenY,
                        target: a.l
                    }));
                    e(a.j, m, n)
                })
            },
            g = k => {
                if (void 0 === c || c.includes(k.origin)) {
                    var m;
                    if (d.includes(null == (m = k.data) ? void 0 : m.type)) {
                        var n;
                        Array.isArray(null == (n = k.data) ? void 0 : n.touches) && (m = k.data.type, k = k.data.touches.map(p => Object.assign({}, p, {
                            target: a.l
                        })), e(a.j, m, k))
                    }
                }
            },
            h = k => {
                k.contentWindow ? L(k.contentWindow, "message", g) : console.error("Loaded iframe missing content window.")
            };
        let l;
        "complete" === (null == (l = b.contentDocument) ? void 0 : l.readyState) && (h(b), f(b));
        L(b, "load", () => {
            h(b);
            f(b)
        })
    }

    function Gt(a, b, c) {
        let d;
        a.W.set(b, null != (d = a.win.document.documentElement.style.getPropertyValue(b)) ? d : "");
        a.win.document.documentElement.style.setProperty(b, c)
    }

    function Ht(a, b) {
        let c;
        const d = null != (c = a.W.get(b)) ? c : "";
        a.win.document.documentElement.style.setProperty(b, d)
    }

    function Bt(a) {
        a.L = !0;
        a.I = !1;
        Ht(a, "position");
        Ht(a, "width");
        Ht(a, "transform");
        Ht(a, "overflow");
        Ht(a, "touch-action");
        null != a.F && (a.win.document.documentElement.scrollTop = a.F, a.win.document.body.scrollTop = a.F);
        Ht(a, "scroll-behavior");
        a.C.style.transform = "";
        a.l.scrollTop = 0;
        a.l.classList.remove("scrollable");
        a.j.style.transitionDuration = ".5s";
        a.j.style.transform = `translateY(${a.A+a.D}px)`;
        a.J.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        Db(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        for (const b of a.O) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function Ct(a, b) {
        a.j.style.transitionDuration = "0s";
        b = Math.max(Et(a) + b, 0) + a.D;
        a.j.style.transform = `translateY(${b}px)`;
        Db(a.j.offsetHeight);
        a.j.style.transitionDuration = ".5s"
    }

    function Dt(a) {
        const b = Et(a);
        if (a.I) 50 < b ? Bt(a) : 0 !== b && It(a, 0);
        else {
            const c = a.A - a.G;
            b < c - 50 ? It(a, 0) : b > c + 50 ? Bt(a) : b !== c && It(a, a.A - a.G)
        }
    }

    function Et(a) {
        let b;
        const c = null != (b = a.j.style.transform) ? b : null;
        return Number(((new DOMMatrix(c)).f - a.D).toFixed(1))
    }

    function It(a, b) {
        a.L = !1;
        0 === b && (a.I = !0, a.l.classList.add("scrollable"));
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.J.style.opacity = ".5";
        a.j.style.transform = `translateY(${b+a.D}px)`
    }
    var Jt = class {
        constructor(a, b, c) {
            this.win = a;
            this.G = b;
            this.A = c;
            this.O = [];
            this.W = new Map;
            this.I = !1;
            this.L = !0;
            this.F = null;
            b = new Hf(a.document);
            this.J = b.ha("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            var d = b.ha("DIV", {
                "class": "cse-drawer-handle-icon"
            });
            this.B = b.ha("DIV", {
                "class": "cse-drawer-handle"
            }, d);
            this.l = b.ha("DIV", {
                "class": "cse-drawer-contents"
            });
            this.j = b.ha("DIV", {
                "class": "cse-drawer"
            }, this.B, this.l);
            this.C = b.ha("DIV", {
                "class": "cse-drawer-container"
            }, this.J, this.j);
            this.M = b.ha("DIV", {
                "class": "adpub-drawer-root"
            });
            this.D = a.innerHeight - (c + 30 - 20);
            c = this.M.attachShadow({
                mode: "open"
            });
            d = c.appendChild;
            var e = this.A;
            var f = this.D;
            e = Ms("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + W(100002) + ";}.cse-modal-background {background-color: black; height: 100vh; opacity: 0; overflow: hidden; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {background: white; position: absolute; transform: translateY(" +
                W(e + f) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {align-items: flex-end; border-radius: " + W(20) + "px " + W(20) + "px 0 0; background: white; display: flex; height: " + W(30) + "px; justify-content: center; margin-top: " + W(-20) + "px;}.cse-drawer-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.cse-drawer-contents {background: white; height: " + W(e) + "px; scrollbar-width: none; overflow: hidden;}.cse-drawer-scroller::-webkit-scrollbar {display: none;}.scrollable {overflow: auto;}</style>");
            d.call(c, Yf(b, Hs(e)));
            c.appendChild(this.C);
            M(this.M, xs(a))
        }
        init() {
            this.win.document.body.appendChild(this.M);
            At(this)
        }
        Z(a) {
            for (; this.l.firstChild;) this.l.removeChild(this.l.firstChild);
            this.l.appendChild(a)
        }
        show() {
            this.F = this.win.document.documentElement.scrollTop + this.win.document.body.scrollTop;
            Gt(this, "transform", `translateY(${-this.F}px)`);
            Gt(this, "position", "fixed");
            Gt(this, "width", "100%");
            Gt(this, "overflow", "hidden");
            Gt(this, "touch-action", "none");
            Gt(this, "scroll-behavior", "auto");
            this.C.style.transform =
                `translateY(${this.F}px)`;
            It(this, this.A - this.G)
        }
        pa(a) {
            this.O.push(a)
        }
    };

    function Kt(a) {
        a.B.init();
        a.B.Z(a.D);
        a.B instanceof Jt && Ft(a.B, a.D);
        a.B.pa(() => void wt(a.J));
        a.F.init()
    }

    function Lt(a) {
        let b;
        a.l.id = "cse-overlay-div";
        M(a.l, {
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        });
        b = a.A.createElement("DIV");
        b.id = "cse-overlay-close-button";
        M(b, {
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        });
        a.C.classList.add("gsc-modal-background-image");
        a.C.setAttribute("tabindex", 0);
        a.j.document.body.appendChild(a.l);
        a.j.document.body.appendChild(a.C);
        const c = () => {
            "flex" === a.l.style.display && (a.l.style.display = "none");
            a.C.classList.remove("gsc-modal-background-image-visible");
            wt(a.J)
        };
        b.onclick = c;
        a.C.onclick =
            c;
        a.l.appendChild(b);
        a.l.appendChild(a.D);
        a.F.init()
    }

    function Mt(a) {
        (function(c, d) {
            c[d] = c[d] || function() {
                (c[d].q = c[d].q || []).push(arguments)
            };
            c[d].t = 1 * new Date
        })(a.j, "_googCsa");
        const b = a.O.map(c => ({
            container: c,
            relatedSearches: 5
        }));
        a.j._googCsa("relatedsearch", {
            pubId: a.M,
            styleId: "5134551505",
            hl: a.I,
            fexp: a.L,
            channel: "AutoRsVariant",
            resultsPageBaseUrl: "http://google.com",
            resultsPageQueryParam: "q",
            relatedSearchTargeting: "content",
            relatedSearchResultClickedCallback: a.Z.bind(a),
            relatedSearchUseResultCallback: !0
        }, b)
    }
    var Nt = class {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.O = b;
            this.I = (null == d ? void 0 : J(d, 1)) || "en";
            this.W = (null == d ? void 0 : J(d, 2)) || "Search results from ${website}";
            this.G = e;
            this.L = f;
            this.M = c.replace("ca", "partner");
            this.J = qt(new ut(a), 1E5);
            this.A = new Hf(a.document);
            this.G ? 2 === Ag() ? (b = Math.round(.95 * this.j.innerHeight) - 30, b = new Jt(this.j, b, b)) : b = new zt(this.j, Math.round(.8 * this.j.innerWidth)) : b = null;
            this.B = b;
            this.l = this.A.createElement("DIV");
            this.C = this.A.createElement("DIV");
            this.D = this.A.createElement("IFRAME");
            this.F = new pt(this.D, this.M, a.location.host, this.I, this.W, this.L)
        }
        init() {
            if (0 !== this.O.length && (this.G || !this.j.document.querySelector('script[src*="cse.google.com/cse"]'))) {
                if (this.G) Kt(this);
                else {
                    Lt(this);
                    var a = this.A.createElement("SCRIPT"),
                        b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                    b = dh(b, new Map([
                        ["language", this.I]
                    ]));
                    He(a, b);
                    this.j.document.head.appendChild(a)
                }
                a = this.A.createElement("SCRIPT");
                He(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.j.document.head.appendChild(a);
                Mt(this)
            }
        }
        Z(a, b) {
            vt(this.J);
            if (this.G) {
                ot(this.F, a, b);
                const c = new ResizeObserver(e => {
                        this.D.height = e[0].target.scrollHeight
                    }),
                    d = () => {
                        let e;
                        const f = null == (e = this.D.contentDocument) ? void 0 : e.documentElement;
                        f ? c.observe(f) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                    };
                d();
                this.B.show()
            } else this.C.classList.add("gsc-modal-background-image-visible"), this.l.style.display = "flex", ot(this.F, a, b)
        }
    };

    function Ot(a) {
        var b = nt(a.l, a.j);
        b = uq(b, a.l).sort(Pt);
        var c = 0 == b.length ? [] : [b[Math.floor(b.length / 2)]];
        var d = a.l;
        b = [];
        for (let k = 0; k < c.length; k++) {
            const m = c[k],
                n = "autors-container-" + k,
                p = d.document.createElement("div");
            p.setAttribute("id", n);
            (new ht(d, m, new mt(p))).init();
            b.push(n)
        }
        var e;
        let f, g;
        c = (null == (e = D(a.j, Pl, 28)) ? void 0 : null == (f = D(e, Ll, 6)) ? void 0 : C(f, 1, 0)) || (null == (g = D(a.j, Pl, 28)) ? void 0 : C(g, 3, 0)) || 0;
        let h;
        e = (null == (h = D(a.j, Pl, 28)) ? void 0 : Oc(h, 4)) || !1;
        let l;
        (new Nt(a.l, b, a.A, null == (l = D(a.j,
            Pl, 28)) ? void 0 : D(l, Ml, 5), e, c)).init()
    }
    var Qt = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.A = c
        }
    };

    function Pt(a, b) {
        return a.X.j - b.X.j
    };
    var Rt = (a, b) => {
        const c = [];
        D(a, om, 18) && c.push(2);
        b.ca && c.push(0);
        D(a, Pl, 28) && 1 == C(D(a, Pl, 28), 1, 0) && c.push(1);
        D(a, Nl, 31) && 1 == C(D(a, Nl, 31), 1, 0) && c.push(5);
        D(a, Fl, 27) && 1 == C(D(a, Fl, 27), 1, 0) && c.push(3);
        D(a, qm, 29) && c.push(4);
        return c
    };

    function St(a, b) {
        const c = a.document.createElement("img");
        Tt(a, c);
        sf(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Ut(a, b) {
        const c = b.document.createElement("button");
        Tt(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Vt(a, b, c) {
        const d = b.document.createElement("img");
        sf(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        Tt(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Wt(a) {
        const b = a.document.createElement("ins");
        Tt(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Xt {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new dk(!1)
        }
        sa(a, b, c, d) {
            const e = St(a, d),
                f = St(a),
                g = Ut(this, a),
                h = Vt(this, a, c);
            a = Wt(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.ba(l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        rd() {
            return 40
        }
        Cd() {
            R(this.j, !1);
            return 0
        }
        Dd() {
            R(this.j, !0)
        }
    }

    function Tt(a, b) {
        M(b, xs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Yt(a, b) {
        const c = b.document.createElement("button");
        Zt(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function $t(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, xs(b));
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, xs(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Zt(a, b, c) {
        M(c, xs(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.G,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.F,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class au {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.F = c;
            this.l = d;
            this.G = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        sa(a) {
            const b = a.document.createElement("div");
            Zt(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                sf(c, this.B);
                Zt(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Zt(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Yt(this, a);
            c.appendChild(b);
            return this.A ? $t(this, a, c, this.A) : c
        }
    };
    var bu = (a, b) => {
        b = b.filter(c => 5 == x(D(c, zl, 4), 1) && 1 == x(c, 8));
        b = Lp(b, a);
        a = uq(b, a);
        a.sort((c, d) => d.X.j - c.X.j);
        return a[0] || null
    };
    var gu = a => {
            let b = 0;
            try {
                var c = a.K;
                b |= c != c.top ? 512 : 0;
                var d = a.K;
                var e = Math.min(d.screen.width || 0, d.screen.height || 0);
                b |= e ? 320 > e ? 8192 : 0 : 2048;
                var f = a.K;
                b |= f.navigator && cu(f.navigator.userAgent) ? 1048576 : 0;
                if (a.Ic) var g = b | (a.K.innerHeight >= a.Ic ? 0 : 1024);
                else {
                    var h = a.K;
                    g = b | (h.innerHeight >= h.innerWidth ? 0 : 8)
                }
                b = g;
                b |= yj(a.K, a.zd);
                b |= zj(a.K)
            } catch (l) {
                b |= 32
            }
            switch (a.ye) {
                case 2:
                    du(a.K, a.xa) && (b |= 16777216);
                    break;
                case 1:
                    eu(a.K, a.xa) && (b |= 16777216)
            }
            a.ze && fu(a.K, a.xa) && (b |= 16777216);
            return b
        },
        cu = a => /Android 2/.test(a) ||
        /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        du = (a, b = null) => {
            const c = hu(a.innerWidth, 3, 0, Math.min(Math.round(a.innerWidth / 320 * 50), iu) + 15, 3);
            return ju(a, c, b)
        },
        eu = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), iu) + 15,
                f = hu(c, 3, d - e, d, 3);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return ju(a, f, b)
        },
        fu = (a, b = null) => null != ku(a, b),
        ku = (a, b = null) => {
            var c = a.innerWidth;
            const d = a.innerHeight,
                e = Fo(nn);
            c =
                hu(c, 10, d - e, d, 10);
            return lu(a, c, b)
        },
        mu = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = hu(c, 3, e - b, e, 3);
                f = lu(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        ju = (a, b, c = null) => null != lu(a, b, c);

    function lu(a, b, c = null) {
        for (const d of b)
            if (b = nu(a, d, c)) return b;
        return null
    }

    function nu(a, b, c = null) {
        const d = ou(a.document, b.x, b.y);
        return d ? pu(d, a, b, c) || qu(d, a, b, c) || null : null
    }
    var ou = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function qu(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = pu(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var hu = (a, b, c, d, e) => {
        const f = [];
        for (let k = 0; k < e; k++)
            for (let m = 0; m < b; m++) {
                var g = f,
                    h = b - 1,
                    l = e - 1;
                g.push.call(g, {
                    x: (0 == h ? 0 : m / h) * a,
                    y: c + (0 == l ? 0 : k / l) * (d - c)
                })
            }
        return f
    };

    function pu(a, b, c, d = null) {
        if ("fixed" !== lh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= oh(a).width && 1 >= oh(a).height ? !0 : !1;
        d && Yh(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const iu = 90 * 1.38;

    function ru(a) {
        if (a.F) {
            const b = Fj(a.j);
            if (b > a.l + 100 || b < a.l - 100) su(a), a.l = Bj(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => tu(a), 200)
    }

    function tu(a) {
        var b = Bj(a.j);
        a.l && a.l > b && (a.l = b);
        b = Fj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), uu(a))
    }

    function vu(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function su(a) {
        a.F = !1;
        const b = a.C.Cd();
        switch (b) {
            case 0:
                R(a.B, a.D);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), R(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function uu(a) {
        a.A || (a.A = wu(a));
        M(a.A, {
            display: "block"
        });
        a.F = !0;
        a.C.Dd();
        R(a.B, a.D)
    }

    function wu(a) {
        var b = mu(a.j, a.C.rd() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, xs(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.sa(a.j, () => a.remove(), () => {
            vu(a);
            su(a)
        }, () => {
            vu(a);
            uu(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class xu {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new dk(null);
            this.J = c || null;
            this.A = null;
            this.F = !1;
            this.l = 0;
            this.I = null;
            this.L = () => ru(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = Bj(this.j);
            tu(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            vu(this);
            R(this.B, null)
        }
        G() {
            return this.B
        }
    };

    function yu(a) {
        R(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function zu(a) {
        a.l = new xu(a.C, a.J, a.F);
        a.l.init();
        qk(a.B, a.l.G());
        R(a.D, 2)
    }
    class Au {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.F = e;
            this.D = new dk(0);
            this.B = new dk(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new ht(this.C, this.I, this.L, this.F), this.A.init(), qk(this.B, this.A.G()), R(this.D, 1), null == this.j && (this.j = new Vk(this.C), this.j.init(2E3)), this.j.addListener(() => {
                yu(this);
                zu(this)
            })) : zu(this)
        }
        remove() {
            yu(this);
            this.j && (this.j.va(), this.j = null)
        }
        G() {
            return this.B
        }
    };
    var Bu = (a, b, c, d, e) => {
        a = new Au(a, bu(a, e), new au(b, d, "#FFF", "#4A4A4A", "normal"), new Xt(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var Cu = a => a.googlefc = a.googlefc || {},
        Du = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Eu(a) {
        var b = Du(a.j);
        if (Fu(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Bu(a.j, c, b, () => Gu(a), a.B))
        }
    }

    function Hu(a) {
        const b = Cu(a.j);
        Du(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Eu(a)
        })
    }

    function Gu(a) {
        vt(a.A);
        Du(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            wt(a.A)
        })
    }
    class Iu {
        constructor(a, b, c) {
            this.j = a;
            this.A = qt(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function Fu(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function Ju(a) {
        const b = a.document.createElement("ins");
        Ku(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Lu(a, b, c, d) {
        const e = a.document.createElement("img");
        sf(e, b);
        d && e.setAttribute("aria-label", d);
        Ku(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Mu(a, b) {
        const c = b.document.createElement("span");
        Ku(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Nu(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, xs(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Ou(a) {
        const b = a.document.createElement("div");
        M(b, xs(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Pu {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new dk(!1)
        }
        sa(a, b, c, d) {
            c = Ju(a);
            const e = Lu(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Lu(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Mu(this, a),
                h = Lu(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = Nu(this, a);
            a = Ou(a);
            a.appendChild(c);
            a.appendChild(l);
            this.j.ba(k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        rd() {
            return 71
        }
        Cd() {
            R(this.j, !1);
            return 0
        }
        Dd() {
            R(this.j, !0)
        }
    }

    function Ku(a, b) {
        M(b, xs(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function Qu(a) {
        Ru(a.l, b => {
            var c = a.B,
                d = b.zf,
                e = b.Be,
                f = b.ne;
            b = b.showRevocationMessage;
            (new Au(c, bu(c, a.A), new au(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Pu(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            wt(a.j)
        })
    }
    class Su {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = qt(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var Tu = a => {
        if (!a || !Hc(a, 1)) return !1;
        a = x(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function Uu(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            Tu(a.j) && (b = new Su(a.l, a.C, a.B || H(a.j, mm, 4), a.A), vt(b.j), Qu(b), b = !0);
            var c;
            a: if ((c = a.j) && Hc(c, 3)) switch (c = x(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Hu(new Iu(a.l, a.C, a.B || H(a.j, mm, 4))), b = !0);
            if (c = (c = a.j) ? !0 === B(c, 5) : !1) c = ((c = a.j) ? !0 === B(c, 6) : !1) || V(Sn);
            c && (b = !0);
            b && (a.A.start(), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Vu {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Wu = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = gg("SCRIPT", g);
                h.async = !0;
                He(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Wu(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Xu = (a, b, c = () => {}, d = () => {}) => {
            Wu(Gf(a), b, 0, !1, c, d)
        };
    var Yu = (a = null) => {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    sd(nj).map(a => Number(a));
    sd(oj).map(a => Number(a));
    var Zu = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = gg("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const $u = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function av(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = $u(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? !a.internalBlockOnErrors : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function bv(a) {
        return av(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? cv(a, "1") : !0 : !1
    }

    function cv(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function dv(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => cv(a, c))
    }

    function ev(a) {
        if (a.B) return a.B;
        a.B = zg(a.j, "__tcfapiLocator");
        return a.B
    }

    function fv(a) {
        return "function" === typeof a.j.__tcfapi || null != ev(a)
    }

    function gv(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (ev(a)) {
            hv(a);
            const e = ++a.J;
            a.F[e] = c;
            a.B && a.B.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function iv(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Ne(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        gv(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = $u(c), c.internalBlockOnErrors = a.A, av(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), gv(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function jv(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Ne(() => b(c));
        let e = 0; - 1 !== a.D && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.D));
        gv(a, "addEventListener", (f, g) => {
            var h = e;
            h && clearTimeout(h);
            g && (c = f);
            c.internalErrorState = $u(c);
            c.internalBlockOnErrors = a.A;
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (a.A) av(c) && (gv(a, "removeEventListener", null, c.listenerId), d());
            else if (0 != c.internalErrorState || av(c)) gv(a, "removeEventListener", null,
                c.listenerId), d()
        })
    }

    function kv(a) {
        return new Promise(b => {
            jv(a, b)
        })
    }

    function hv(a) {
        a.C || (a.C = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.F[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.C))
    }
    class lv extends Xj {
        constructor(a, b = 500, c = !1) {
            super();
            this.j = a;
            this.B = null;
            this.F = {};
            this.J = 0;
            this.D = b;
            this.A = c;
            this.C = null
        }
        l() {
            this.F = {};
            this.C && (Ue(this.j, "message", this.C), delete this.C);
            delete this.F;
            delete this.j;
            delete this.B;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Ne(() => a(b));
            let d = 0; - 1 !== this.D && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.D));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = $u(b), b.internalBlockOnErrors =
                    this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                gv(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && gv(this, "removeEventListener", null, a.listenerId)
        }
    };

    function Ru(a, b, c) {
        const d = Yu(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Yu(a.j),
                    f = new lv(a.j);
                fv(f) && iv(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        zf: e.getDefaultConsentRevocationText(),
                        Be: e.getDefaultConsentRevocationCloseText(),
                        ne: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function mv(a) {
        const b = Ld(md("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Xu(a.j, b, () => {}, () => {})
    }
    class nv {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            if (this.j === this.j.top) try {
                Zu(this.j, "googlefcPresent"), mv(this)
            } catch (a) {}
        }
    };
    var ov = (a, b, c) => {
        const d = D(a, fm, 6);
        if (!d) return [];
        c = iq(H(d, gm, 1), c);
        return (a = Dm(a)) && B(a, 11) ? c.map(e => Zp(e)) : c.map(e => {
            const f = yl();
            return new Mp(new Gp(e.oc, e.pc), new lp, new Fp(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var qv = class extends K {
        constructor() {
            super(void 0, -1, pv)
        }
    };

    function rv(a, b) {
        return z(a, 1, b)
    }

    function sv(a, b) {
        return Vc(a, 2, b)
    }
    var uv = class extends K {
            constructor(a) {
                super(a, -1, tv)
            }
        },
        vv = class extends K {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return C(this, 2, 0)
            }
        },
        pv = [5],
        tv = [2];
    var wv = class extends K {
            constructor() {
                super(void 0)
            }
        },
        xv = [1, 2];
    var yv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function zv(a) {
        return new Bl(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Av {
        j(a) {
            return zv(Math.floor(a.l))
        }
    };
    var Bv = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Si: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Cv(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c;
        a = null == (c = uj(a)) ? void 0 : c.tagSpecificState[1];
        if (null == a) c = null;
        else {
            var d;
            c = 4 === (null == (d = a.debugCard) ? void 0 : d.getAdType()) ? a.debugCard : null
        }(d = c) && d.displayAdLoadedContent(b)
    };
    var Dv = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Ev(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.qc = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ya(c) && (a.H = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                uh(a.B) && uh(a.l) || Vi("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.F(b)
    }
    class Fv {
        constructor() {
            this.D = this.H = this.A = this.qc = null;
            this.l = this.B = 0
        }
        F() {
            return !0
        }
    };

    function Gv(a, b = []) {
        const c = Date.now();
        return pb(b, d => c - d < 1E3 * a)
    }

    function Hv(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || sb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Gv(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Iv(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Hv(a, b)
    };
    var Jv = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= zj(a);
            d |= yj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Iv(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            V(so) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Kv extends Fv {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.G = !1
        }
        F(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = ad(Gm, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.G = !0);
            return !0
        }
    };
    const Lv = {};

    function Mv(a, b, c) {
        let d = Nv(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.yb && d.yb.length;) {
            const h = d.yb.shift();
            var g = Sp(h.V);
            const l = h.X.j,
                k = !!c.A.Pc || !!c.A.Vc || c.Ia() || !!c.A.jd || l > e;
            g = !g || g <= d.Ib;
            if (k && g && Ov(c, h, {
                    ac: d.Ib
                })) {
                e = l;
                if (d.Gb.j.length + 1 >= f) return !0;
                d = Nv(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    const Nv = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = cr(b.T(), f.j ? f.j.gb : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = Q(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - ir(f)) : e = void 0;
        a = null == e || 50 <= e ? Pv(b, f, {
            types: a
        }, c) : null;
        return {
            Gb: f,
            Ib: e,
            yb: a
        }
    };
    Lv[2] = Ga(function(a, b) {
        a = Pv(b, cr(b.T()), {
            types: a,
            Na: Mq(b.T())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Ov(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Lv[5] = Ga(Mv, [0], 5);
    Lv[10] = Ga(function(a, b) {
        a = [];
        const c = b.Z;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !V(Dn) && a.push(1);
        return Mv(a, 10, b)
    }, 10);
    Lv[3] = function(a) {
        if (!a.B) return !1;
        var b = Pv(a, cr(a.T()), {
            types: [0],
            Na: Mq(a.T())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Ov(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    const Qv = a => {
            var b;
            a.A.Td ? b = new Iq(0, null, [], 3, null) : b = Mq(a.T());
            return {
                types: [0],
                Na: b
            }
        },
        Sv = a => {
            const b = a.T().document.body.getBoundingClientRect().width;
            Rv(a, zv(b))
        },
        Uv = (a, b) => {
            var c = Qv(a);
            c.yf = [5];
            c = Pv(a, cr(a.T()), c, 8);
            Tv(a, c.reverse(), b)
        },
        Tv = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.X), Ov(a, d, {
                        rc: b
                    })) return !0;
            return !1
        };
    Lv[8] = function(a) {
        var b = a.T().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Lv[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Yb()) return !0;
        b = Qv(a);
        b.Nc = [2, 4, 5];
        b = Pv(a, cr(a.T()), b, 8);
        const c = new Av;
        if (Tv(a, b, c)) return !0;
        if (a.A.md) switch (a.A.Fd || 0) {
            case 1:
                Uv(a, c);
                break;
            default:
                Sv(a)
        }
        return !0
    };
    Lv[6] = Ga(Mv, [2], 6);
    Lv[7] = Ga(Mv, [1], 7);
    Lv[9] = function(a) {
        const b = Nv([0, 2], a, 9);
        if (!b || !b.yb) return a.C.push(17), Cv(a.T()), a.B;
        for (var c of b.yb) {
            var d = c;
            var e = a.A.zc || null;
            null == e ? d = null : (e = Tp(d.V, new Vv, new Wv(e, a.T())), d = new tq(e, d.aa(), d.X));
            if (d && !(Sp(d.V) > b.Ib) && Ov(a, d, {
                    ac: b.Ib,
                    uc: !0
                })) return a = d.V.J, c = c.V, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        Cv(a.T());
        return a.B
    };
    class Vv {
        l(a, b, c, d) {
            return fp(d.document, a, b)
        }
        A(a) {
            return Q(a).clientHeight || 0
        }
    };
    var Xv = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Gb = c
        }
        ia(a) {
            return this.j ? Er(this.l, this.j, a, this.Gb) : Dr(this.l, a, this.Gb)
        }
        ja() {
            return this.j ? 16 : 9
        }
    };
    var Yv = class {
        constructor(a) {
            this.sc = a
        }
        ia(a) {
            return Lr(a.document, this.sc)
        }
        ja() {
            return 11
        }
    };
    var Zv = class {
        constructor(a) {
            this.Xa = a
        }
        ia(a) {
            return Ir(this.Xa, a)
        }
        ja() {
            return 13
        }
    };
    var $v = class {
        ia(a) {
            return Br(a)
        }
        ja() {
            return 12
        }
    };
    var aw = class {
        constructor(a) {
            this.nb = a
        }
        ia() {
            return Gr(this.nb)
        }
        ja() {
            return 2
        }
    };
    var bw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Jr(this.j)
        }
        ja() {
            return 3
        }
    };
    var cw = class {
        ia() {
            return Mr()
        }
        ja() {
            return 17
        }
    };
    var dw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Fr(this.j)
        }
        ja() {
            return 1
        }
    };
    var ew = class {
        ia() {
            return Le(Np)
        }
        ja() {
            return 7
        }
    };
    var fw = class {
        constructor(a) {
            this.Nc = a
        }
        ia() {
            return Hr(this.Nc)
        }
        ja() {
            return 6
        }
    };
    var gw = class {
        constructor(a) {
            this.j = a
        }
        ia() {
            return Kr(this.j)
        }
        ja() {
            return 5
        }
    };
    var hw = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        ia() {
            return Ga(Nr, this.minWidth, this.maxWidth)
        }
        ja() {
            return 10
        }
    };
    var iw = class {
        constructor(a) {
            this.B = a.l.slice(0);
            this.l = a.j.slice(0);
            this.A = a.A;
            this.C = a.B;
            this.j = a.C
        }
    };

    function jw(a) {
        var b = new kw;
        b.C = a;
        b.l.push(new dw(a));
        return b
    }

    function lw(a, b) {
        a.l.push(new fw(b));
        return a
    }

    function mw(a, b) {
        a.l.push(new aw(b));
        return a
    }

    function nw(a, b) {
        a.l.push(new gw(b));
        return a
    }

    function ow(a, b) {
        a.l.push(new bw(b));
        return a
    }

    function pw(a) {
        a.l.push(new ew);
        return a
    }

    function qw(a) {
        a.j.push(new $v);
        return a
    }

    function rw(a, b = 0, c, d) {
        a.j.push(new Xv(b, c, d));
        return a
    }

    function sw(a, b = 0, c = Infinity) {
        a.j.push(new hw(b, c));
        return a
    }

    function tw(a) {
        a.j.push(new cw);
        return a
    }

    function uw(a, b = 0) {
        a.j.push(new Zv(b));
        return a
    }

    function vw(a, b) {
        a.A = b;
        return a
    }
    var kw = class {
        constructor() {
            this.A = 0;
            this.B = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new iw(this)
        }
    };
    class Wv {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.H || {};
            c.google_ad_client = a.qc;
            c.google_ad_height = Q(b).clientHeight || 0;
            c.google_ad_width = Q(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Dv;
            z(b, 1, a.C);
            a.j && Tc(b, 2, a.j);
            a.G && z(b, 3, !0);
            c.google_rasc = cd(b);
            a.A && (c.google_adtest = "on");
            return new Bl(["fsi_container"], c)
        }
    };
    var ww = ul(new rl(0, {})),
        xw = ul(new rl(1, {})),
        yw = a => a === ww || a === xw;

    function zw(a, b, c) {
        Pj(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class Aw {
        constructor() {
            this.j = new Tj
        }
    };

    function Bw(a, b) {
        b && (a.j.apv = x(b, 4), Ic(b, 23) && (a.j.sat = "" + x(D(b, Im, 23), 1)));
        return a
    }

    function Cw(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    class Dw extends is {
        constructor(a) {
            super(a);
            this.j = {}
        }
        I(a) {
            null != a && (this.j.allp = a);
            return this
        }
        B(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.B(a);
            vd(a, this.j);
            return a
        }
    }

    function Ew(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Fw(a, b) {
        a.l.op = Gw(b)
    }

    function Hw(a, b, c) {
        30 >= c.length ? a.l[b] = Iw(c) : (a.l[b] = Iw(c.slice(0, 30)), a.l[b + "_c"] = c.length.toString())
    }

    function Jw(a, b, c) {
        Hw(a, "fap", b);
        a.l.fad = Gw(c)
    }

    function Kw(a, b, c) {
        Hw(a, "fmp", b);
        a.l.fmd = Gw(c)
    }

    function Lw(a, b, c) {
        Hw(a, "vap", b);
        a.l.vad = Gw(c)
    }

    function Mw(a, b, c) {
        Hw(a, "vmp", b);
        a.l.vmd = Gw(c)
    }

    function Nw(a, b, c) {
        Hw(a, "pap", b);
        a.l.pad = Gw(c)
    }

    function Ow(a, b, c) {
        Hw(a, "pmp", b);
        a.l.pmd = Gw(c)
    }

    function Pw(a, b) {
        Hw(a, "psq", b)
    }
    var Qw = class extends Dw {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function Iw(a) {
        return a.map(b => {
            let c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function Gw(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Rw = class extends K {
        constructor() {
            super(void 0)
        }
        Rb() {
            return J(this, 1)
        }
        Cc() {
            return C(this, 2, 0)
        }
    };

    function Sw(a, b) {
        return Pc(a, 1, b)
    }

    function Tw() {
        var a = new Uw;
        xc(a);
        Mc(a, 2).push("irr");
        return a
    }

    function Vw(a, b) {
        return z(a, 3, b)
    }

    function Ww(a, b) {
        return z(a, 4, b)
    }

    function Xw(a, b) {
        return z(a, 5, b)
    }

    function Yw(a, b) {
        return z(a, 7, b)
    }

    function Zw(a, b) {
        return z(a, 8, b)
    }

    function $w(a, b) {
        return z(a, 9, b)
    }

    function ax(a, b) {
        return Vc(a, 10, b)
    }

    function bx(a, b) {
        return Pc(a, 11, b)
    }
    var Uw = class extends K {
            constructor() {
                super(void 0, -1, cx)
            }
        },
        cx = [1, 2, 10, 11];

    function dx(a, b, c) {
        const d = b.V;
        if (!Pj(a.j, d)) {
            let e;
            a.j.set(d, new ex(null != (e = jl(rq(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function fx(a, b) {
        dx(a, b, c => {
            c.j = !0
        })
    }

    function gx(a, b) {
        dx(a, b, c => {
            c.l = !0
        })
    }

    function hx(a, b) {
        dx(a, b, c => {
            c.A = !0
        });
        a.I.push(b.V)
    }

    function ix(a, b, c) {
        dx(a, b, d => {
            d.Va = c
        })
    }

    function jx(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (yw(null != (g = f.Va) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.Va) ? h : "", null);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
            Wa: e
        }
    }

    function kx(a, b) {
        Fw(b, a.l.qb());
        var c = Sj(a.j).filter(f => 0 === (f.Ka.startsWith(ww) ? 0 : 1)),
            d = Sj(a.j).filter(f => 1 === (f.Ka.startsWith(ww) ? 0 : 1)),
            e = jx(a, f => f.j, c);
        Jw(b, e.list, e.Wa);
        e = jx(a, f => f.j, d);
        Kw(b, e.list, e.Wa);
        e = jx(a, f => f.l, c);
        Lw(b, e.list, e.Wa);
        e = jx(a, f => f.l, d);
        Mw(b, e.list, e.Wa);
        c = jx(a, f => f.A, c);
        Nw(b, c.list, c.Wa);
        d = jx(a, f => f.A, d);
        Ow(b, d.list, d.Wa);
        Pw(b, a.I.map(f => {
            let g;
            return null == (g = a.j.get(f)) ? void 0 : g.Va
        }).map(f => {
            let g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function lx() {
        var a = O(mx);
        if (!a.B) return Tw();
        let b, c;
        const d = bx(ax($w(Zw(Yw(Xw(Ww(Vw(Sw(new Uw, null != (b = a.B) ? b : []), a.C), a.G), a.F), a.J), a.L), null != (c = a.D) ? c : 0), Sj(a.j).map(e => {
            var f;
            var g = new Rw;
            g = z(g, 1, e.Ka);
            var h = a.l.get(null != (f = e.Va) ? f : "", -1);
            f = z(g, 2, h);
            f = z(f, 3, e.j);
            return z(f, 4, e.l)
        })), a.I.map(e => {
            let f;
            return null == (f = a.j.get(e)) ? void 0 : f.Va
        }).map(e => {
            let f;
            return null != (f = a.l.get(e)) ? f : null
        }));
        null != a.A && z(d, 6, a.A);
        return d
    }
    var mx = class {
        constructor() {
            this.B = null;
            this.F = this.G = !1;
            this.A = null;
            this.L = this.C = this.J = !1;
            this.D = null;
            this.l = new Tj;
            this.j = new Tj;
            this.I = []
        }
    };
    class ex {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Va = null;
            this.Ka = a
        }
    };
    class nx {
        constructor(a = 0) {
            this.j = a
        }
    };
    class ox {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function px(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function qx(a, b) {
        const c = a.B.filter(d => Rj(d.Ob).every(e => d.Ob.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Ob.qb() > e.Ob.qb() ? d : e, c[0])
    }

    function rx(a, b) {
        b = rq(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Pj(a.A, b)) return a.A.get(b);
        var c = sl(b);
        c = qx(a, c);
        a.A.set(b, c);
        return c
    }

    function sx(a, b) {
        let c;
        return (null == (c = rx(a, b)) ? void 0 : c.rf) || Number.MAX_VALUE
    }

    function tx(a, b) {
        const c = Fo(Wn) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new cl(b)).filter(e => {
            let f;
            e = (null == (f = rx(a, e)) ? void 0 : f.Ka) || "";
            return "" != e && !(e === ww || e === xw)
        });
        return c <= d.j.length / b.length
    }
    var ux = class {
        constructor(a) {
            this.j = a;
            this.A = new Tj;
            let b;
            this.B = ((null == (b = D(a, vm, 2)) ? void 0 : H(b, wm, 1)) || []).map(c => ({
                Ob: sl(c.Rb()),
                rf: c.Cc(),
                Ka: c.Rb()
            }));
            this.l = []
        }
    };

    function vx(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => sx(a.j, c) - sx(a.j, d))
    }

    function wx(a, b) {
        var c = b.X.j,
            d = Math,
            e = d.min;
        const f = b.aa(),
            g = b.V.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? px(f.parentElement) : px(f));
        d = a.A;
        0 > d.j && (d.j = Q(d.l).scrollHeight || 0);
        d = d.j - b.X.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.aa();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function xx(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => wx(a, c) - wx(a, d))
    }

    function yx(a, b) {
        return b.sort((c, d) => {
            const e = c.V.G,
                f = d.V.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? wx(a, c) - wx(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class zx {
        constructor(a, b = 0, c = null) {
            this.A = new ox(a);
            this.l = new nx(b);
            this.j = c && new ux(c)
        }
    };

    function Ax(a, b, c = 0) {
        var d = a.l;
        for (var e of b.B) d = bl(d, e.ia(a.A), Bx(e.ja(), c));
        e = d = d.apply(Ar(a.A));
        for (const g of b.l) e = bl(e, g.ia(a.A), Cx(g.ja(), c));
        switch (b.A) {
            case 1:
                e = xx(a.j, e);
                break;
            case 2:
                e = yx(a.j, e);
                break;
            case 3:
                const g = O(mx);
                e = vx(a.j, e);
                d.forEach(h => {
                    fx(g, h);
                    var l;
                    null != (l = a.j.j) && (l = rx(l, h), null != (null == l ? void 0 : l.Ka) && ix(O(mx), h, l.Ka))
                });
                e.forEach(h => gx(g, h))
        }
        b.C && (e = dl(e, Df(a.A.location.href + a.A.localStorage.google_experiment_mod)));
        let f;
        1 === (null == (f = b.j) ? void 0 : f.length) && zw(a.B, b.j[0], {
            qe: d.j.length,
            Hf: e.j.length
        });
        return e.j.slice(0)
    }
    class Dx {
        constructor(a, b, c = 0, d = null) {
            this.l = new cl(a);
            this.j = new zx(b, c, d);
            this.A = b;
            this.B = new Aw
        }
    }
    const Bx = (a, b) => c => Qp(c, b, a),
        Cx = (a, b) => c => Qp(c.V, b, a);

    function Ex(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = Fx(Gx(c), a);
                    break a;
                case 3:
                    a = Fx(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = Fx(e ? 1 == e.nodeType ? e : Gx(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !Hx(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Tm(b) && 0 >= b.offsetWidth);
        return d
    }

    function Fx(a, b) {
        if (!a) return !1;
        a = hg(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Gx(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Hx(a) {
        return !!a.nextSibling || !!a.parentNode && Hx(a.parentNode)
    };
    var Ix = !Hb && !hb();

    function Jx(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Ix && a.dataset) {
            if (kb() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Kx = (a, b, c) => {
            if (!b) return null;
            const d = Pf(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Q(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        Lx = a => {
            const b = a.document.body;
            var c = Kx(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h = d.pop(),
                        l = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = l);
                    if (5 > h.depth)
                        for (let k = 0; k < l.children.length; k++) {
                            const m = l.children[k];
                            g = c;
                            const n = m.getBoundingClientRect().width;
                            (null == n || null == g ? 0 : n >= .9 * g && n <= 1.01 * g) && d.push({
                                element: m,
                                depth: h.depth + 1,
                                height: m.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? Kx(a, c.parentNode || b, c) : null
        },
        Nx = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Zf() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) ||
                    (b |= 32768), Mx(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Mx = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Jx(a[b])) return !0;
            return !1
        };

    function Ox(a) {
        const b = Aj(a, !0),
            c = Q(a).scrollWidth,
            d = Q(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Fj(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            p = [];
        let u = 0,
            w = 0,
            t = Infinity,
            A = Infinity,
            y = null;
        var F = Zq({
            Sa: !1
        }, a);
        for (var E of F) {
            F = E.getBoundingClientRect();
            const ja = b - (F.bottom + f);
            var G = void 0,
                I = void 0;
            if (E.className && $a(E.className, "adsbygoogle-ablated-ad-slot")) {
                G = E.getAttribute("google_element_uid");
                I = a.google_sv_map;
                if (!G || !I || !I[G]) continue;
                G = (I = Gh(I[G])) ? I.height : 0;
                I = I ? I.width : 0
            } else if (G = F.bottom - F.top, I = F.right - F.left, 1 >= G || 1 >= I) continue;
            g.push(G);
            l.push(I);
            k.push(G * I);
            E.className && $a(E.className, "google-auto-placed") ? (w += 1, E.className && $a(E.className, "pedestal_container") && (y = G)) : (t = Math.min(t, ja), n.push(F), u += 1, h.push(G), m.push(G * I));
            A = Math.min(A, ja);
            p.push(F)
        }
        t = Infinity === t ? null : t;
        A = Infinity === A ? null : A;
        f = Px(n);
        p = Px(p);
        h = Qx(b, h);
        n = Qx(b, g);
        m = Qx(b * c, m);
        E = Qx(b * c, k);
        return new Rx(a, {
            He: e,
            Lc: b,
            lf: c,
            kf: d,
            bf: u,
            pe: w,
            se: Sx(g),
            te: Sx(l),
            re: Sx(k),
            gf: f,
            ff: p,
            ef: t,
            df: A,
            xc: h,
            wc: n,
            ke: m,
            je: E,
            mf: y
        })
    }

    function Tx(a, b, c, d) {
        const e = Zf() && !(900 <= Q(a.l).clientWidth);
        d = pb(d, f => tb(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.He,
            pg_h: Ux(a.j.Lc),
            pg_w: Ux(a.j.lf),
            pg_hs: Ux(a.j.kf),
            c: Ux(a.j.bf),
            aa_c: Ux(a.j.pe),
            av_h: Ux(a.j.se),
            av_w: Ux(a.j.te),
            av_a: Ux(a.j.re),
            s: Ux(a.j.gf),
            all_s: Ux(a.j.ff),
            b: Ux(a.j.ef),
            all_b: Ux(a.j.df),
            d: Ux(a.j.xc),
            all_d: Ux(a.j.wc),
            ard: Ux(a.j.ke),
            all_ard: Ux(a.j.je),
            pd_h: Ux(a.j.mf),
            dt: e ? "m" : "d"
        }
    }
    class Rx {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Sx(a) {
        return xf.apply(null, pb(a, b => 0 < b)) || null
    }

    function Qx(a, b) {
        return 0 >= a ? null : wf.apply(null, b) / a
    }

    function Px(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Ux(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Vx(a, b) {
        b = (Q(b).clientHeight || 0) - Fj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            gr(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Wx(a) {
        const b = {};
        var c = ar({
            Sa: !1,
            Sb: !1,
            Tb: !1,
            Ub: !1
        }, a).map(d => d.getBoundingClientRect()).filter(gr);
        b.fe = c.length;
        c = br({
            Tb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(gr);
        b.Je = c.length;
        c = br({
            Ub: !0
        }, a).map(d => d.getBoundingClientRect()).filter(gr);
        b.hf = c.length;
        c = br({
            Sb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(gr);
        b.ie = c.length;
        c = (Q(a).clientHeight || 0) - Fj(a);
        c = ar({
            Sa: !1
        }, a).map(d => d.getBoundingClientRect()).filter(gr).filter(Fa(Xx, null, c));
        b.ge = c.length;
        a = Ox(a);
        c = null != a.j.xc ? a.j.xc :
            null;
        null != c && (b.cf = c);
        a = null != a.j.wc ? a.j.wc : null;
        null != a && (b.he = a);
        return b
    }

    function Ov(a, b, {
        ac: c,
        rc: d,
        uc: e
    } = {}) {
        return vp(997, () => Yx(a, b, {
            ac: c,
            rc: d,
            uc: e
        }), a.j)
    }

    function Pv(a, b, c, d) {
        var e = c.Na ? c.Na : a.D;
        const f = Nq(e, b.j.length);
        e = a.A.Xc ? e.j : void 0;
        const g = tw(uw(qw(sw(rw(pw(nw(ow(lw(mw(jw(c.types), a.W), c.Nc || []), a.O), c.yf || [])), f.cc || void 0, e, b), c.minWidth, c.maxWidth)), f.Xa || void 0));
        a.M && g.j.push(new Yv(a.M));
        b = 1;
        a.A.Vc ? b = 2 : a.Ia() && (b = 3);
        vw(g, b);
        a.A.Pc && (g.B = !0);
        return vp(995, () => Ax(a.l, g.build(), d), a.j)
    }

    function Rv(a, b) {
        const c = Lx(a.j);
        if (c) {
            const d = Al(a.J, b),
                e = cp(a.j.document, a.G, null, null, {}, d);
            e && (Io(e.Ra, c, 2, 256), vp(996, () => Zx(a, e, d), a.j))
        }
    }

    function $x(a) {
        return a.F ? a.F : a.F = a.j.google_ama_state
    }

    function Yx(a, b, {
        ac: c,
        rc: d,
        uc: e
    } = {}) {
        const f = b.V;
        if (f.B) return !1;
        var g = b.aa();
        if (!Ex(a.j, f.l(), g, a.B)) return !1;
        c = null == c ? null : new Bl(null, {
            google_max_responsive_height: c
        });
        g = Cl(x(f.lc, 2) || 0);
        const h = Dl(f.G),
            l = ay(a, f),
            k = Al(a.J, f.M ? f.M.j(b.X) : null, c, d || null, g, h, l),
            m = b.fill(a.G, k);
        if (e && !by(a, m, k) || !vp(996, () => Zx(a, m, k), a.j)) return !1;
        kj(9, [f.G, f.Ta]);
        a.Ia() && hx(O(mx), b);
        return !0
    }

    function ay(a, b) {
        return jl(ll(pq(b).map(El), () => {
            a.C.push(18)
        }))
    }

    function by(a, b, c) {
        if (!b) return !1;
        var d = b.ra,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.ra;
        c = c && c.rb() || {};
        if (d !== d.top) var g = eg(d) ? 3 : 16;
        else if (488 > Q(d).clientWidth)
            if (d.innerHeight >= d.innerWidth)
                if (g = Q(d).clientWidth, !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Q(d).clientWidth; h; h = h.parentElement) {
                            const l = hg(h, d);
                            if (!l) continue;
                            const k = sg(l.width);
                            if (k && !(k >= g) && "visible" != l.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !== g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = hg(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Q(d).clientWidth, f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.ra;
            if (f = Zo(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Xo(b, f, "0px"), b.style.width = Q(a).clientWidth + "px", $o(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Xm(b.Ra);
        return !1
    }

    function Zx(a, b, c) {
        if (!b) return !1;
        try {
            gp(a.j, b.ra, c)
        } catch (d) {
            return Xm(b.Ra), a.C.push(6), !1
        }
        return !0
    }
    class cy {
        constructor(a, b, c, d, e = {}, f = []) {
            this.l = a;
            this.G = b;
            this.j = c;
            this.D = d.Na;
            this.W = d.nb || [];
            this.J = d.Ke || null;
            this.O = d.Ge || [];
            this.M = d.sc || [];
            this.A = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.F = void 0;
            this.Z = f
        }
        T() {
            return this.j
        }
        ua(a) {
            this.L.push(a)
        }
        Ia() {
            var a;
            let b;
            if (0 == (null != (b = null == (a = this.l.j.j) ? void 0 : [...Mc(a.j, 1)].length) ? b : 0)) return !1;
            if (0 == (Fo(Wn) || 0)) return !0;
            if (void 0 === this.I) {
                const c = vw(qw(pw(jw([0, 1, 2]))), 1).build();
                a = vp(995, () => Ax(this.l, c), this.j);
                let d;
                this.I = (null == (d = this.l.j.j) ?
                    void 0 : tx(d, a)) || !1
            }
            return this.I
        }
        Fc() {
            return !!this.A.Ld
        }
        Yb() {
            return !Mx(this.j)
        }
    }
    const Xx = (a, b) => b.top <= a;

    function dy(a, b, c, d, e, f = 0, g = 0) {
        this.Da = a;
        this.kc = f;
        this.jc = g;
        this.errors = b;
        this.Ma = c;
        this.j = d;
        this.l = e
    };
    var ey = (a, {
        Yb: b = !1,
        Fc: c = !1,
        Af: d = !1,
        Ia: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e && V(Un)) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !V(Dn);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !V(Dn) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function fy(a, b, c) {
        a = ey(a, {
            Yb: b.Yb(),
            Fc: b.Fc(),
            Af: !!b.A.zc,
            Ia: b.Ia()
        });
        return new gy(a, b, c)
    }

    function hy(a, b) {
        const c = Lv[b];
        return c ? vp(998, () => c(a.j), a.C) : (a.j.ua(12), !0)
    }
    class gy {
        constructor(a, b, c) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = ub(this.l, 1);
            this.j = b;
            this.C = c
        }
    };
    const iy = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class jy {
        j() {
            return new Bl([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class ky {
        j() {
            return new Bl(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function ly(a) {
        return Um(a.j.document).map(b => {
            const c = new Gp(b, 3);
            b = new Ip(ip(a.j, b));
            return new Mp(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class my {
        constructor(a) {
            var b = new ky;
            this.j = a;
            this.l = b || null
        }
    };
    const ny = {
        Uc: "10px",
        tc: "10px"
    };

    function oy(a) {
        return Oj(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Mp(new Gp(b, 1), new Ep(ny), a.l, !1, 0, [], null, a.j, null))
    }
    class py {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function qy(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function ry(a, b, c) {
        const d = qy(c.Pb, "gapsMeasurementWindow") || qy(c.pb, "gapsPerMeasurementWindow") || qy(c.vb, "maxGapsToReport");
        return null != d ? hl(d) : c.Zc || -1 != c.pb || -1 != c.vb ? fl(new sy(a, b, c)) : hl("ShouldHaveLimits")
    }

    function ty(a) {
        return $x(a.A) && $x(a.A).placed || []
    }

    function uy(a) {
        return ty(a).map(b => Tk(Rk(b.element, a.j)))
    }

    function vy(a) {
        return ty(a).map(b => b.index)
    }

    function wy(a, b) {
        const c = b.V;
        return !a.D && c.A && Hc(c.A, 8) && 1 == x(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Tk(Rk(d, a.j))) : [Tk(new Sk(b.X.j, 0))]
    }

    function xy(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Sk(c, f - c)), c = d)
        }
        return b
    }

    function yy(a, b) {
        b = b.map(c => {
            var d = new vv;
            d = z(d, 1, c.j);
            c = c.getHeight();
            return z(d, 2, c)
        });
        return sv(rv(new uv, a), b)
    }

    function zy(a) {
        const b = H(a, vv, 2).map(c => `G${C(c,1,0)}~${c.getHeight()}`);
        return `W${C(a,1,0)}${b.join("")}`
    }

    function Ay(a, b) {
        const c = [];
        let d = 0;
        for (const e of Rj(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(yy(e, f));
            d += f.length;
            if (!a.G && d >= a.l) break
        }
        return c
    }

    function By(a) {
        const b = H(a, uv, 5).map(c => zy(c));
        return `M${C(a,1,0)}H${C(a,2,0)}C${C(a,3,0)}B${Number(!!Oc(a,4))}${b.join("")}`
    }

    function Cy(a) {
        var b = uq(a.A.l.l.j.slice(0), a.j),
            c = uy(a),
            d = new Uj(vy(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = wy(a, b[e]);
                c.push(...f)
            }
        c.push(new Sk(0, 0));
        c.push(Tk(new Sk(Q(a.j).scrollHeight, 0)));
        b = xy(c);
        c = new Tj;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.F ? 0 : Math.floor(e.j / a.B), Pj(c, f) || c.set(f, []), c.get(f).push(e);
        b = Ay(a, c);
        c = new qv;
        c = z(c, 1, a.l);
        c = z(c, 2, a.B);
        c = z(c, 3, a.C);
        a = z(c, 4, a.D);
        return Vc(a, 5, b)
    }

    function Dy(a) {
        a = Cy(a);
        return By(a)
    }
    var sy = class {
        constructor(a, b, c) {
            this.F = -1 == c.Pb;
            this.B = c.Pb;
            this.I = -1 == c.pb;
            this.C = c.pb;
            this.G = -1 == c.vb;
            this.l = c.vb;
            this.D = c.vd;
            this.A = b;
            this.j = a
        }
    };

    function Ey(a) {
        var b = new Fy;
        return z(b, 1, a)
    }
    var Fy = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var Gy = class extends K {
        constructor() {
            super(void 0)
        }
    };

    function Hy(a) {
        var b = lx();
        Tc(a, 1, b)
    }

    function Iy(a, b) {
        return Vc(a, 3, b)
    }

    function Jy(a, b) {
        Vc(a, 4, b)
    }

    function Ky(a, b) {
        var c = Fy;
        xc(a);
        const d = Sc(a, c, 4, void 0, !1);
        b = null != b ? b : new c;
        c = Mc(a, 4);
        d.push(b);
        c.push(b.N);
        Na(Ma);
        rc(b.N) && tc(c, !1);
        return a
    }

    function Ly(a, b) {
        return Vc(a, 5, b)
    }
    var Ny = class extends K {
            constructor() {
                super(void 0, -1, My)
            }
            I(a) {
                return z(this, 8, a)
            }
        },
        My = [3, 4, 5, 6];
    const Oy = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Py = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Qy = (a, b) => {
        a = Mc(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const Sy = (a, b) => {
            a = Py(Oy(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = lg(a),
                d = Ry(a);
            return b.find(e => {
                const f = Ic(e, 7) ? x(D(e, Lm, 7), 1) : x(e, 1);
                e = Ic(e, 7) ? x(D(e, Lm, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Ry = a => {
            const b = {};
            for (;;) {
                b[lg(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    const Ty = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var Uy = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Vi("ama", b, .01)
        },
        Vy = a => {
            const b = {};
            jg(Ty, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var Wy = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                Uy(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            Uy(a, {
                lserr: 1
            })
        }
    };

    function Xy(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Yy(a, b) {
        a = Xy(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };
    var Zy = class extends K {
            constructor() {
                super(void 0)
            }
            bb(a) {
                return z(this, 2, a)
            }
        },
        $y = [4, 5];

    function az() {
        if (bz) return bz;
        const a = $g() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? bz = b : a.google_persistent_state_async = bz = new cz
    }

    function dz(a, b, c) {
        b = ez[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function fz(a, b, c) {
        return a.S[ez[b] || "google_ps_" + b] = c
    }

    function gz(a, b) {
        return fz(a, b, dz(a, b, 0) + 1)
    }

    function hz() {
        var a = az();
        return dz(a, 20, {})
    }

    function iz() {
        var a = az();
        const b = dz(a, 31, !1);
        b || fz(a, 31, !0);
        return !b
    }

    function jz() {
        var a = az();
        return dz(a, 26)
    }

    function kz() {
        var a = az();
        return dz(a, 28, [])
    }
    class cz {
        constructor() {
            this.S = {}
        }
    }
    var bz = null;
    const ez = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var lz = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpf: "easpf",
            easpi: "easpi"
        },
        mz = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        nz = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g,
                        ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        oz = a => {
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
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    const pz = new WeakMap;

    function qz() {
        var a = rz,
            b = sz;
        const c = za(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...g]) => a.apply(f, g);
        return function(...f) {
            const g = this || r;
            let h = pz.get(g);
            h || (h = {}, pz.set(g, h));
            return Fb(h, [this, ...f], e, d)
        }
    }

    function sz(a, b) {
        a = [a];
        for (let c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function rz(a) {
        if (a.google_ad_client) return String(a.google_ad_client);
        var b, c, d;
        let e, f;
        if (null != (e = null != (d = null == (b = Xy(a).head_tag_slot_vars) ? void 0 : b.google_ad_client) ? d : null == (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) ? void 0 : c.getAttribute("data-ad-client"))) b = e;
        else {
            b: {
                b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Eh() ? mz : nz;
                for (c = b.length - 1; 0 <= c; c--)
                    if (d = b[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                        b = d;
                        break b
                    }
                b = null
            }
            if (b) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (c = {}; d = a.exec(b);) c[d[1]] = oz(d[2]);
                b = c;
                b = b.google_ad_client ? b.google_ad_client : ""
            } else b = ""
        }
        return null != (f = b) ? f : ""
    };

    function tz(a, b) {
        var c = new Zy;
        c = z(c, 1, a.B).bb(a.webPropertyCode);
        c = z(c, 3, a.l);
        b = Uc(c, 5, $y, b);
        a.j && !a.A.has(2) && (a.A.add(2), Ai(a.xa, b))
    }
    var uz = class {
        constructor(a) {
            this.A = new Set;
            this.win = $g() || window;
            this.l = Fo(en);
            var b = 0 < this.l && ig() < 1 / this.l;
            this.B = (this.j = !!dz(az(), 30, b)) ? Ig(this.win) : 0;
            this.j ? (b = this.win, b = V(Vn) ? qz()(b) : rz(b)) : b = "";
            this.webPropertyCode = b;
            this.xa = null != a ? a : new Fi
        }
    };
    var wz = (a, b, c, d, e, f = null, g = null, h) => {
            vz(a, new ls(a), b, c, d, e, f, new Vk(a), g, h)
        },
        vz = (a, b, c, d, e, f, g = null, h = null, l = null, k) => {
            if (c)
                if (d) {
                    var m = Rt(d, e);
                    try {
                        const n = new xz(a, b, c, d, e, m, f, g, h, l, k);
                        vp(990, () => yz(n), a)
                    } catch (n) {
                        jj() && kj(15, [n]), ks(b, $r, hs(Cw(Bw((new Dw(0)).bb(c), d), m).ua(1), n)), tz(O(uz), Ky(new Ny, Ey(1)))
                    }
                } else ks(b, $r, (new Dw(0)).bb(c).ua(8)), tz(O(uz), Ky(new Ny, Ey(8)));
            else ks(b, $r, (new Dw(0)).ua(9)), tz(O(uz), Ky(new Ny, Ey(9)))
        };

    function yz(a) {
        a.I.forEach(b => {
            switch (b) {
                case 0:
                    vp(991, () => zz(a), a.l);
                    break;
                case 1:
                    Ot(new Qt(a.l, a.j, a.C));
                    break;
                case 5:
                    it(new kt(a.l, a.j));
                    break;
                case 2:
                    Az(a);
                    break;
                case 3:
                    Bz(a);
                    break;
                case 4:
                    Cz(a)
            }
        })
    }

    function zz(a) {
        Dz(a);
        if (Bm(a.j) && 1 === x(Bm(a.j), 1)) {
            var b = D(Bm(a.j), Nm, 6);
            b && 2 === x(b, 1) && (hp(a.l), a.G = "b")
        }
        var c = a.B.pf;
        b = Kq(a.l, c);
        if (a.B.ca && Ic(a.B.ca, 10)) {
            var d = Nc(D(a.B.ca, Mm, 10), 1);
            null !== d && void 0 !== d && (b = Cq(a.l, d, c))
        }
        Ic(a.j, 26) && (b = Oq(b, D(a.j, Pm, 26), a.l));
        c = a.B.ca ? Mc(a.B.ca, 6) : [];
        d = a.B.ca ? H(a.B.ca, $l, 5) : [];
        const e = a.B.ca ? Mc(a.B.ca, 2) : [],
            f = vp(993, () => {
                var l = a.j,
                    k = H(l, mm, 1);
                const m = a.B.ca && Qy(a.B.ca, 1) ? "text_image" : "text";
                var n = new jy;
                let p = Lp(k, a.l, {
                    ve: n,
                    We: new Jp(m)
                });
                k.length != p.length && a.J.push(13);
                p = p.concat(oy(new py(a.l, n)));
                k = 0;
                n = V(Kn);
                let u = !1;
                if (Bm(l) && 1 === x(Bm(l), 1)) {
                    var w = D(Bm(l), Nm, 6);
                    w && (k = x(w, 2) || 0, 1 === x(w, 1) && (u = !0))
                }
                var t, A;
                let y;
                w = (null == (t = D(l, tm, 24)) ? void 0 : null == (A = D(t, xm, 3)) ? void 0 : null == (y = D(A, ym, 3)) ? void 0 : Yc(y, zm, 2, Am)) || !1;
                if (n || u || w)
                    if (t = ly(new my(a.l)), A = O(mx), p = p.concat(t), A.J = !0, A.D = t.length, "n" === a.G) {
                        let F, E;
                        a.G = (null == (F = D(l, tm, 24)) ? 0 : null == (E = Mc(F, 1)) ? 0 : E.length) ? "o" : "p"
                    }
                p = p.concat(ov(l, m, a.l));
                l = D(l, tm, 24);
                return new Dx(p, a.l, k, l)
            }, a.l);
        a.A = new cy(f, a.C, a.l, {
            Na: b,
            Ke: a.Z,
            nb: a.B.nb,
            Ge: c,
            sc: d
        }, Ez(a), e);
        let g, h;
        (null == (g = $x(a.A)) ? 0 : null == (h = g.optimization) ? 0 : h.ablatingThisPageview) && !a.A.Ia() && (hp(a.l), O(mx).C = !0, a.G = "f");
        a.F = fy(e, a.A, a.l);
        vp(992, () => {
            var l = a.F;
            const k = new Mj;
            for (l.j.B = !0; 0 < l.l.length;) hy(l, l.l[0]) || l.j.ua(5), l.l.shift();
            try {
                var m = k.resolve,
                    n = l.j.l.l.filter(Np).j.length,
                    p = l.j.L.slice(0),
                    u = l.j;
                let A;
                var w = [...u.C, ...((null == (A = u.l.j.j) ? void 0 : [...A.l]) || [])];
                var t = new dy(n, p, w, l.j.l.l.j.length, l.j.l.B.j, l.j.l.l.filter(Np).filter(Op).j.length, l.j.l.l.filter(Op).j.length);
                m.call(k, new iy(t))
            } catch (A) {
                l = A, Jj(k), k.j = 2, k.A = l, Lj(k.l)
            }
            return k.l
        }, a.l).then(vp(994, () => a.za.bind(a), a.l), a.W.bind(a))
    }

    function Az(a) {
        const b = D(a.j, om, 18);
        b && Uu(new Vu(a.l, new nv(a.l, a.C), b, new ut(a.l), H(a.j, mm, 1)))
    }

    function Bz(a) {
        kl(ms(a.l, a.D, a.j, a.pa, {
            google_ad_client: a.C
        }), b => {
            var c = b.j;
            var d = D(b.l, Gl, 2);
            var e = hq(b.F, c);
            e = e.filter(jq).filter(kq(e)).filter(lq(c));
            e.sort(mq);
            if (e = e[0] || null) {
                a: switch (C(d, 1, 0)) {
                    case 1:
                        c = new Pr(c, e);
                        break a;
                    case 2:
                        c = new yq(vq(c, e));
                        break a;
                    case 3:
                        c = new Or(c, vq(c, e));
                        break a;
                    default:
                        throw Error(`Unknown player position: ${C(d,1,0)}`);
                }
                c = c.j()
            }
            else c = null;
            if (c) {
                if (d = !!b.B.Bb && us(b)) b.C = Wr(b.j, b.G, b.B.Bb);
                e = b.j;
                var f = D(b.l, Kl, 4) || void 0;
                if (0 < e.document.getElementsByTagName("google-read-aloud-player").length) e =
                    hl("Player already created");
                else {
                    var g = b.B;
                    const l = e.document,
                        k = l.createElement("div");
                    k.id = "google-auto-placed-read-aloud-player";
                    M(k, {
                        margin: "5px"
                    });
                    const m = l.createElement("script");
                    var h = eh `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
                    m.textContent = Ad(h);
                    Ge(m);
                    k.appendChild(m);
                    Qr(l, k, md("https://www.google-analytics.com/analytics.js"));
                    Qr(l, k, md("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
                    h = l.createElement("google-read-aloud-player");
                    h.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
                    h.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
                    h.setAttribute("data-url", g.url);
                    h.setAttribute("data-voice", "en-us-m-6");
                    f && (Hc(f, 1) && 0 != C(f, 1, 0) && h.setAttribute("data-docking-begin-trigger", Rr[C(f, 1, 0)]), Hc(f, 2) && h.setAttribute("data-experiment", J(f, 2)));
                    k.appendChild(h);
                    sq(c, k);
                    e = fl(e.document.getElementsByTagName("google-read-aloud-player")[0])
                }
                null != e.j ? (b.A = e.j.value, d && ts(b), vs(b, {
                        sts: "ok",
                        pp: c.X.j
                    })) :
                    vs(b, {
                        sts: "wf"
                    })
            } else vs(b, {
                sts: "pf"
            })
        })
    }

    function Cz(a) {
        const b = D(a.j, qm, 29);
        if (b) {
            var c, d;
            Fz(a.ya, {
                win: a.l,
                webPropertyCode: a.C,
                pd: b,
                cd: null != (d = null == (c = D(a.j, fm, 6)) ? void 0 : H(c, gm, 1)) ? d : []
            })
        }
    }

    function Dz(a) {
        Gz(a) && Hz(a, "p", Iz(a))
    }

    function Ez(a) {
        const b = V(Ln);
        if (!Dm(a.j)) return {
            Pc: b,
            Vc: !1,
            jd: !1,
            Td: !1,
            md: !1,
            Ld: !1,
            nf: 0,
            Fd: 0,
            Xc: Jz(a),
            zc: a.O
        };
        const c = Dm(a.j);
        let d = Nc(c, 8);
        return {
            Pc: b || Oc(c, 14, !1),
            Vc: Oc(c, 2, !1),
            jd: Oc(c, 3, !1),
            Td: Oc(c, 4, !1),
            md: Oc(c, 5, !1),
            Ld: Oc(c, 6, !1),
            nf: null == d ? 0 : d,
            Fd: x(c, 10),
            Xc: Jz(a),
            zc: a.O
        }
    }

    function Jz(a) {
        return a.B.ca && Ic(a.B.ca, 10) ? .5 <= (Nc(D(a.B.ca, Mm, 10), 1) || 0) : !0
    }

    function Kz(a, b) {
        for (var c = gs(gs(new Dw(b.Da), b.errors), a.J), d = b.Ma, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.j.pp = b.jc;
        c.j.ppp = b.kc;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Mb;
        c.j.eatfAbg = b.Nb;
        c.j.reatf = b.sb;
        c.j.a = a.F.B.slice(0).join(",");
        c = Cw(Bw(c, a.j), a.I).bb(a.C);
        if (d = b.Hb) c.j.as_count = d.fe, c.j.d_count = d.Je, c.j.ng_count = d.hf, c.j.am_count = d.ie, c.j.atf_count = d.ge, c.j.mdns = Ew(d.cf), c.j.alldns = Ew(d.he);
        c = c.I(b.xb);
        if (d = b.Le) {
            e = [];
            for (var h of Rj(d)) 0 <
                d.get(h).length && (f = d.get(h)[0], e.push("(" + [h, f.qe, f.Hf].join() + ")"));
            c.j.fd = e.join(",")
        }
        h = b.Lc;
        null != h && (c.j.pgh = h);
        c.j.abl = b.sd;
        c.j.rr = a.G;
        void 0 !== b.exception && hs(c, b.exception).ua(1);
        return c
    }

    function Lz(a, b) {
        var c = Kz(a, b);
        ks(a.D, 0 < b.errors.length || 0 < a.J.length || void 0 !== b.exception ? 0 < a.M ? bs : $r : 0 < a.M ? as : Zr, c);
        if (D(a.j, tm, 24)) {
            if (null != (b = a.A.l.j.j)) {
                const p = O(mx);
                var d = [...Mc(b.j, 1)];
                p.B = d;
                var e;
                let u;
                d = !!(null == (e = D(b.j, xm, 3)) ? 0 : null == (u = D(e, ym, 3)) ? 0 : Yc(u, zm, 2, Am));
                p.F = d;
                e = new Tj;
                var f, g;
                for (var h of null != (g = null == (f = D(b.j, vm, 2)) ? void 0 : H(f, wm, 1)) ? g : []) e.set(h.Rb(), h.Cc());
                p.l = e
            }
            h = $x(a.A);
            f = O(mx);
            var l;
            g = !!(null == h ? 0 : null == (l = h.optimization) ? 0 : l.ablationFromStorage);
            f.A = g;
            let n;
            if (null ==
                h ? 0 : null == (n = h.optimization) ? 0 : n.ablatingThisPageview) f.G = !0;
            var k;
            l = !!(null == h ? 0 : null == (k = h.optimization) ? 0 : k.availableAbg);
            f.L = l;
            var m;
            k = O(mx);
            c = new Qw(c);
            k.B ? (l = null != (m = k.B) ? m : [], c.l.sl = l.join("~"), c.l.ab = Gw(k.G), c.l.rr = Gw(k.J), c.l.oab = Gw(k.F), null != k.A && (c.l.sab = Gw(k.A)), k.C && (c.l.fb = Gw(k.C)), c.l.ls = Gw(k.L), Fw(c, k.l.qb()), null != k.D && (c.l.rp = Gw(k.D)), kx(k, c)) : (m = c, k = "irr".replace(RegExp("~", "g"), ""), m.l.e = m.l.e ? m.l.e + ("~" + k) : k);
            m = c;
            ks(a.D, es, m)
        }
    }

    function Mz(a, b) {
        const c = O(uz);
        if (c.j) {
            var d = new Ny,
                e = b.Ma.filter(f => null !== f);
            b = a.J.concat(b.errors, b.exception ? [1] : []).filter(f => null !== f);
            Jy(Ly(Iy(d, a.F.B.slice(0).map(f => {
                var g = new yv;
                return z(g, 1, f)
            })), e.map(f => {
                var g = new Gy;
                return z(g, 1, f)
            })), b.map(f => Ey(f)));
            D(a.j, tm, 24) && Hy(d);
            tz(c, d)
        }
    }

    function Nz(a) {
        return Bm(a.j) && 1 === x(Bm(a.j), 1) ? !(D(Bm(a.j), Nm, 6) && 1 <= (x(D(Bm(a.j), Nm, 6), 3) || 0)) : !1
    }

    function Oz(a) {
        if (Nz(a)) {
            a = a.A;
            var b = br({
                Tb: !0,
                Ub: !0
            }, a.j);
            a = 0 < Vx(b, a.j)
        } else a = a.A.j, b = ar({
            Sa: !1,
            Sb: !1
        }, a), a = 0 < Vx(b, a);
        return a
    }

    function Pz(a) {
        if (Gz(a)) {
            var b = Iz(a);
            a.L.init(null == b ? void 0 : b, () => {
                Hz(a, "s", b)
            });
            a.L.addListener(c => {
                Hz(a, "d", Iz(a), c);
                a.L.va();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = Dm(d)) ? 0 : Oc(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = Dm(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.I) ? 0 : h.includes(0)) a.M++, zz(a), Hz(a, "r", Iz(a), c)
                    } catch (h) {
                        Hz(a, "f", Iz(a), c), ks(a.D, bs, hs(Cw(Bw((new Dw(0)).bb(a.C), a.j), a.I).ua(1), h))
                    }
                }
            })
        }
    }

    function Qz(a, b, c) {
        {
            var d = $x(a.A);
            const f = b.j,
                g = f.j,
                h = f.jc;
            let l = f.Da,
                k = f.kc,
                m = f.errors.slice(),
                n = f.Ma.slice(),
                p = b.exception;
            let u;
            var e = null != (u = Xy(a.l).had_ads_ablation) ? u : !1;
            d ? (d.numAutoAdsPlaced ? l += d.numAutoAdsPlaced : a.F.A && n.push(13), void 0 !== d.exception && (p = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Da: l,
                jc: h,
                kc: k,
                xb: g,
                errors: f.errors.slice(),
                Ma: n,
                exception: p,
                sb: c,
                Mb: !!d.eatf,
                Nb: !!d.eatfAbg,
                sd: e
            }) : (n.push(12), a.F.A && n.push(13), c = {
                Da: l,
                jc: h,
                kc: k,
                xb: g,
                errors: m,
                Ma: n,
                exception: p,
                sb: c,
                Mb: !1,
                Nb: !1,
                sd: e
            })
        }
        c.Hb = Wx(a.A.j);
        if (b = b.j.l) c.Le = b;
        c.Lc = Q(a.l).scrollHeight;
        if (jj()) {
            d = a.A.l.l.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Rj(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.F.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.Ta,
                    placed: f.B,
                    placementProto: f.A ? f.A.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            kj(14, [{
                placementIdentifiers: b
            }, a.A.G, c.Hb])
        }
        return c
    }

    function Rz(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.xb;
        c.numAutoAdsPlaced = b.Da;
        c.hasAtfAd = b.sb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = ry(a.l, a.A, {
            Pb: -1,
            pb: -1,
            vb: -1,
            vd: !0,
            Zc: !0
        }), null != a.j ? (c.placementPositionDiffs = Dy(a.j.value), b = Cy(a.j.value), a = new wv, a = Uc(a, 2, xv, b), c.placementPositionDiffsReport = cd(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new wv, a = Rc(a, 1, xv, b), c.placementPositionDiffsReport = cd(a)))
    }

    function Hz(a, b, c, d) {
        b = {
            r: b,
            pg_h: Q(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        js(a.D, ds, b)
    }

    function Gz(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = Dm(b)) ? void 0 : Oc(c, 18, !1)) ? d : !1
    }

    function Iz(a) {
        let b = null;
        Dm(a.j) && Hc(Dm(a.j), 19) && (b = x(Dm(a.j), 19));
        return b
    }
    class xz {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.I = f;
            this.Z = h || null;
            this.J = [];
            this.L = l;
            this.O = k;
            this.ya = g;
            this.M = 0;
            this.pa = m ? m : {
                url: a.location.href,
                Bb: void 0
            };
            this.G = "n"
        }
        za(a) {
            try {
                const b = Oz(this) || Nz(this) ? Oz(this) : void 0;
                Sm({
                    yc: b
                }, this.l);
                Pz(this);
                const c = Qz(this, a, Oz(this));
                Ic(this.j, 25) && B(D(this.j, Om, 25), 1) && Rz(this, c);
                Lz(this, c);
                Mz(this, c);
                Ui(753, () => {
                    if (V(Fn) && null != this.A) {
                        var d = ry(this.l, this.A, {
                                Pb: Fo(Jn),
                                pb: Fo(In),
                                vb: Fo(Gn),
                                vd: !0,
                                Zc: !1
                            }),
                            e = td(c);
                        null != d.j ? (d = Dy(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = Kz(this, e);
                        ks(this.D, cs, e)
                    }
                })()
            } catch (b) {
                this.W(b)
            }
        }
        W(a) {
            Lz(this, {
                Da: 0,
                xb: void 0,
                errors: [],
                Ma: [],
                exception: a,
                sb: void 0,
                Mb: void 0,
                Nb: void 0,
                Hb: void 0
            });
            Mz(this, {
                Da: 0,
                xb: void 0,
                errors: [],
                Ma: [],
                exception: a,
                sb: void 0,
                Mb: void 0,
                Nb: void 0,
                Hb: void 0
            })
        }
    };
    var Sz = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function Tz(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? il(() => ad(Sz, c)) : fl(null)
    };

    function Uz(a) {
        this.j = a || {
            cookie: ""
        }
    }
    q = Uz.prototype;
    q.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Bj, g = c.Bf || !1, f = c.domain || void 0, e = c.path || void 0, d = c.xd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    q.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ra(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    q.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            xd: 0,
            path: b,
            domain: c
        });
        return d
    };
    q.isEmpty = function() {
        return !this.j.cookie
    };
    q.qb = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    q.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ra(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function Vz(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Wz(a) {
        return "null" !== a.origin
    }

    function Xz(a, b, c) {
        b = B(b, 5) && Wz(c) ? c.document.cookie : null;
        return null === b ? null : (new Uz({
            cookie: b
        })).get(a) || ""
    };

    function Yz(a, b) {
        return z(a, 5, b)
    }
    var Zz = class extends K {
        constructor() {
            super(void 0)
        }
    };
    var bA = ({
        win: a,
        Wb: b,
        td: c = !1,
        ud: d = !1
    }) => {
        if (!$z({
                win: a,
                Wb: b,
                td: c,
                ud: d
            })) return aA(a, Yz(new Zz, !0));
        (b = dz(az(), 24)) ? (b = Yz(new Zz, bv(b)), a = aA(a, b)) : a = new gl(null, Error("tcunav"));
        return a
    };

    function $z({
        win: a,
        Wb: b,
        td: c,
        ud: d
    }) {
        if (!(d = !d && fv(new lv(a)))) {
            if (c = !c) {
                if (b) {
                    a = Tz(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Hc(a, 1)) b: switch (a = x(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Wi(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function aA(a, b) {
        return (a = Vz(b, a)) ? fl(a) : new gl(null, Error("unav"))
    };
    var cA = class extends K {
        constructor(a) {
            super(a)
        }
    };
    class dA {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };

    function Fz(a, {
        win: b,
        webPropertyCode: c,
        pd: d,
        cd: e
    }) {
        a = Vr(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: cd(d),
            serializedArticleStructures: e.map(g => cd(g))
        }));
        Si.Za(927, a)
    }
    var eA = class {
        constructor(a) {
            this.j = a
        }
    };
    var fA = {
            Cg: "google_ads_preview",
            kh: "google_mc_lab",
            Dh: "google_anchor_debug",
            Ch: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Yh: "google_scr_debug",
            ai: "google_ia_debug_allow_onclick",
            vi: "googleads",
            Yd: "google_pedestal_debug",
            Oi: "google_responsive_slot_preview",
            Ni: "google_responsive_dummy_ad",
            xg: "google_auto_gallery"
        },
        gA = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };

    function hA(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = iA(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function iA(a) {
        let b = "";
        jg(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function jA() {
        var a = r.location;
        let b = !1;
        jg(fA, c => {
            hA(a, c) && (b = !0)
        });
        return b
    }

    function kA(a, b) {
        switch (a) {
            case 1:
                return hA(b, "google_ia_debug");
            case 2:
                return hA(b, "google_bottom_anchor_debug");
            case 3:
                return hA(b, "google_anchor_debug") || hA(b, "googleads");
            case 4:
                return hA(b, "google_scr_debug")
        }
    };

    function lA({
        win: a,
        webPropertyCode: b,
        ob: c
    }) {
        if (hA(a.location, "google_auto_gallery")) {
            var d = new qm;
            var e = new rm;
            e = z(e, 1, !0);
            d = Tc(d, 3, e);
            Fz(new eA(c), {
                win: a,
                webPropertyCode: b,
                pd: d,
                cd: []
            })
        }
    };
    var mA = "a".charCodeAt(),
        nA = sd(nj),
        oA = sd(oj);

    function pA(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function qA(a) {
        return String.fromCharCode(mA + pA(a, 6)) + String.fromCharCode(mA + pA(a, 6))
    }

    function rA(a) {
        let b = pA(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!pA(a, 1),
                e = pA(a, 16);
            if (d)
                for (d = pA(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function sA(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (pA(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function tA(a) {
        const b = pA(a, 16);
        return !0 === !!pA(a, 1) ? (a = rA(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : sA(a, b)
    }
    class uA {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var wA = (a, b) => {
        try {
            var c = cc(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new uA(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = pA(d, 12);
            c.cmpVersion = pA(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = pA(d, 6);
            c.isServiceSpecific = !!pA(d, 1);
            c.useNonStandardStacks = !!pA(d, 1);
            c.specialFeatureOptins = vA(sA(d, 12, oA), oA);
            c.purpose = {
                consents: vA(sA(d, 24, nA), nA),
                legitimateInterests: vA(sA(d, 24, nA), nA)
            };
            c.purposeOneTreatment = !!pA(d, 1);
            c.publisherCC = qA(d);
            c.vendor = {
                consents: vA(tA(d), b),
                legitimateInterests: vA(tA(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const vA = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function xA() {
        var a = yA;
        zA || (zA = new AA);
        const b = zA.j[a.key];
        if ("proto" === a.valueType) {
            try {
                const c = JSON.parse(b);
                if (Array.isArray(c)) return c
            } catch (c) {}
            return a.defaultValue
        }
        return typeof b === typeof a.defaultValue ? b : a.defaultValue
    }
    var BA = class {
        constructor() {
            this.j = {}
        }
    };
    var CA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        DA = class extends K {
            constructor() {
                super(void 0)
            }
        };
    var EA = class extends K {
            constructor() {
                super(void 0)
            }
        },
        FA = [11, 8, 12, 13, 15, 17, 19, 18, 20, 21, 22, 24, 25];
    var GA = class {};
    var IA = class extends K {
            constructor(a) {
                super(a, -1, HA)
            }
        },
        JA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        KA = class extends K {
            constructor(a) {
                super(a)
            }
        },
        HA = [7];
    var yA = new class {
        constructor() {
            this.key = "45368529";
            this.defaultValue = !1;
            this.valueType = "boolean"
        }
    };
    var AA = class extends BA {
            constructor() {
                super();
                var a = r.__fcexpdef || "";
                try {
                    const b = JSON.parse(a)[0];
                    a = "";
                    for (let c = 0; c < b.length; c++) a += String.fromCharCode(b.charCodeAt(c) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c % 10));
                    this.j = JSON.parse(a)
                } catch (b) {}
            }
        },
        zA;

    function LA(a) {
        return (a = MA(a)) ? D(a, JA, 4) : null
    }

    function MA(a) {
        if (a = (new Uz(a)).get("FCCDCF", ""))
            if (xA())
                if (a.startsWith("%")) try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    NA(1), b = null
                } else b = a;
                else b = a;
        else b = null;
        try {
            return b ? ad(IA, b) : null
        } catch (c) {
            return NA(2), null
        }
    }

    function NA(a) {
        new GA;
        var b = new DA;
        a = z(b, 7, a);
        b = new CA;
        a = Tc(b, 1, a);
        b = new EA;
        Uc(b, 22, FA, a)
    };

    function OA(a) {
        a.__tcfapiPostMessageReady || PA(new QA(a))
    }

    function PA(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var QA = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };

    function RA(a) {
        var b = V(Rn);
        a.__uspapi || a.frames.__uspapiLocator || (a = new SA(a), TA(a), b && UA(a))
    }

    function TA(a) {
        !a.C || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Zu(a.j, "__uspapiLocator"), Ia("__uspapi", (...b) => VA(a, ...b)))
    }

    function UA(a) {
        !a.A || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", Zu(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ia("__tcfapi", (...b) => WA(a, ...b)), OA(a.j))
    }

    function VA(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.C
        }, !0)
    }

    function WA(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && 2 !== c) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(XA(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
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
                    b = c.push(d);
                    d(XA(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function XA(a, b, c) {
        if (!a.A) return null;
        b = wA(a.A, b);
        b.addtlConsent = null != a.B ? a.B : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class SA {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.C = (a = (a = MA(this.l)) ? D(a, KA, 5) || null : null) ? x(a, 2) : null;
            this.A = (a = LA(this.l)) && Hc(a, 1) ? x(a, 1) : null;
            this.B = (a = LA(this.l)) && Hc(a, 2) ? x(a, 2) : null
        }
    };

    function YA(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function ZA(a, b) {
        a = YA(a);
        b = YA(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var $A = Promise;
    class aB {
        constructor(a) {
            this.A = a
        }
        l(a, b, c) {
            this.A.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.A.then(c => c.j(a, b))
        }
    };
    class bB {
        constructor(a) {
            this.data = a
        }
    };

    function cB(a, b) {
        dB(a, b);
        return new eB(a)
    }
    class eB {
        constructor(a) {
            this.A = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            dB(d.port1, b);
            this.A.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new $A(c => {
                this.l(a, c, b)
            })
        }
    }

    function dB(a, b) {
        b && (a.onmessage = c => {
            b(new bB(c.data, cB(c.ports[0])))
        })
    };
    var hB = ({
        destination: a,
        Ca: b,
        origin: c,
        Pa: d = "ZNWN1d",
        onMessage: e,
        Bd: f
    }) => fB({
        destination: a,
        Qe: () => b.contentWindow,
        jf: gB(c),
        Pa: d,
        onMessage: e,
        Bd: f
    });
    const fB = ({
            destination: a,
            Qe: b,
            jf: c,
            Ej: d,
            Pa: e,
            onMessage: f,
            Bd: g
        }) => {
            const h = Object.create(null);
            c.forEach(l => {
                h[l] = !0
            });
            return new aB(new $A((l, k) => {
                const m = n => {
                    if (n.source === b())
                        if (!0 !== h[n.origin]) {
                            a.removeEventListener("message", m, !1);
                            const p = c.join(", ");
                            k(Error(`Origin mismatch while establishing channel "${e}". Expected ${1===c.length?p:`one of [${p}]`}, but received ${n.origin}.`))
                        } else(n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) :
                            (l(cB(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        gB = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var iB = (a, b, c, d, e, f, g = null, h) => {
        try {
            var l = a.localStorage
        } catch (u) {
            l = null
        }
        if (l) {
            if (V(En)) var k = null;
            else try {
                k = l.getItem("google_ama_config")
            } catch (u) {
                k = null
            }
            try {
                var m = k ? ad(Gm, k) : null
            } catch (u) {
                m = null
            }
            k = m
        } else k = null;
        a: {
            if (d) try {
                var n = ad(Gm, d);
                break a
            } catch (u) {
                Uy(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new Hm;
                Tc(d, 3, n);
                k = Dm(d) && x(Dm(d), 13) ? x(Dm(d), 13) : 1;
                z(n, 1, Date.now() + 864E5 * k);
                bd = n = Bc(d.N);
                n = new d.constructor(n);
                bd = null;
                fd(n, d);
                Dm(d) && (k = new Em, m = B(Dm(d), 23), k = z(k, 23, m), m = Oc(Dm(d), 12, !1), k = z(k, 12,
                    m), m = Oc(Dm(d), 15, !1), k = z(k, 15, m), Tc(n, 15, k));
                k = H(n, mm, 1);
                for (m = 0; m < k.length; m++) z(k[m], 11, wc);
                Tc(n, 22);
                if (V(En)) Wy(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", cd(n))
                } catch (u) {
                    Uy(a, {
                        lserr: 1
                    })
                }
            }
            e = Sy(a, H(d, Km, 7));
            a: {
                if (e && (n = x(e, 3), k = D(d, Yl, 9), n && k)) {
                    b: {
                        k = H(k, Wl, 1);
                        for (p of k)
                            if (x(p, 1) == n) {
                                var p = D(p, Vl, 2) || null;
                                break b
                            }
                        p = null
                    }
                    if (p) break a
                }
                p = D(d, Vl, 8) || new Vl
            }
            p = {
                pf: p
            };
            e && (p.ca = e);
            e && Qy(e, 3) && (p.nb = [1]);
            if (7 == c.google_pgb_reactive && (e = p.ca, !e || !B(e, 8))) return !1;
            Yy(a, 2) && (kj(5, [d.toJSON()]),
                e = Vy(c), f = new eA(f), c = p.ca, e.google_package = c && x(c, 4) || "", wz(a, b, d, p, f, new Bl(["google-auto-placed"], e), g, {
                    url: a.location.href,
                    Bb: h
                }));
            return !0
        }
        k && (Uy(a, {
            cfg: 1,
            cl: 1
        }), Wy(a));
        return !1
    };
    const jB = [255, 255, 255];

    function kB(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function lB(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = kB(b.backgroundColor);
        var c = mB(b);
        if (c) return c;
        a = (a = a.parentElement) ? lB(a) : jB;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function mB(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };

    function nB(a) {
        return 2 === C(a.B, 12, 0)
    }
    var pB = class {
        constructor(a, b, c, d, e, f, g = !1) {
            this.C = a;
            this.l = b;
            this.B = c;
            this.F = d;
            this.D = e;
            this.j = f;
            this.G = g;
            this.A = tb(oB, J(c, 7)) ? 1 : 0
        }
    };
    const oB = ["ja", "zh_CN", "zh_TW"];

    function qB(a) {
        M(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function rB(a, b, c, d, e) {
        a = {
            wp: e.C,
            c: e.F,
            e: Fo(pn),
            m: a,
            q: b,
            v: Math.round(c - d)
        };
        Vi("adfil-clk", a, 1)
    };

    function sB(a) {
        const b = a.document.createElement("div");
        M(b, xs(a));
        a.document.body.appendChild(b);
        a = b.attachShadow({
            mode: "open"
        });
        b.classList.add("adpub-drawer-root");
        return {
            Pd: b,
            shadowRoot: a
        }
    }

    function tB(a, b) {
        b = b.getElementById(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    }

    function uB(a, b) {
        const c = new dk(b.P);
        pk(b, !0, () => void R(c, !0));
        pk(b, !1, () => {
            a.setTimeout(() => {
                b.P || R(c, !1)
            }, 700)
        });
        return fk(c)
    };
    var vB = void 0;

    function wB() {
        void 0 === vB && (vB = 20);
        return vB
    };

    function xB(a) {
        if (a.G) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function yB(a) {
        const {
            Jc: b,
            Ae: c
        } = xB(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }
    var zB = class extends Xj {
        constructor(a, b, c, d) {
            super();
            this.B = b;
            this.j = new dk(!1);
            this.A = uB(a, this.j);
            pk(this.A, !0, () => {
                Yk(c);
                vt(d)
            });
            pk(this.A, !1, () => {
                Zj(c.j);
                Zj(c.A);
                Zk(c);
                wt(d)
            })
        }
        show({
            kd: a = !1
        } = {}) {
            xB(this).lb.classList.add("hd-revealed");
            R(this.j, !0);
            a && pk(this.A, !1, () => {
                this.va()
            })
        }
        collapse() {
            xB(this).lb.classList.remove("hd-revealed");
            R(this.j, !1)
        }
        init() {
            yB(this)
        }
        l() {
            const a = this.B.Oc.Pd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };
    var AB = void 0;

    function BB() {
        void 0 === AB && (AB = 20);
        return AB
    }
    var CB = void 0;

    function DB() {
        void 0 === CB && (CB = 30);
        return CB
    }

    function EB(a) {
        return Ms('<div class="ved-handle" id="' + Qs(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function FB(a) {
        return Hk(a.j).map(b => b ? GB(a, b) : 0)
    }

    function GB(a, b) {
        switch (a.direction) {
            case 0:
                return HB(-b.Vd);
            case 1:
                return HB(-b.Ud);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function IB(a) {
        return Jk(a.j).map(b => GB(a, b))
    }
    var JB = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function HB(a) {
        return 0 === a ? 0 : a
    };

    function X(a) {
        if (a.G) throw Error("Accessing domItems after disposal");
        return a.D
    }

    function KB(a) {
        X(a).lb.classList.add("ved-revealed");
        R(a.j, !0)
    }

    function LB(a) {
        return uB(a.win, a.j)
    }

    function MB(a, b) {
        const c = new dk(b());
        (new tk(a.B)).ba(() => void R(c, b()));
        return fk(c)
    }

    function NB(a) {
        const {
            ma: b,
            Kc: c
        } = X(a);
        return MB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function OB(a) {
        const {
            ma: b,
            Kc: c
        } = X(a);
        return MB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function PB(a) {
        const {
            ma: b
        } = X(a);
        return MB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function QB(a) {
        return gk(NB(a), PB(a))
    }

    function RB(a) {
        const {
            ma: b,
            wb: c
        } = X(a);
        return MB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function SB(a) {
        jk(NB(a), !0, () => {
            const {
                od: b,
                Ab: c
            } = X(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        jk(NB(a), !1, () => {
            const {
                od: b,
                Ab: c
            } = X(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function TB(a) {
        const b = Lk(a.win, X(a).vc);
        ik(Ok(b), () => void UB(a));
        Yj(a, Ga(Wj, b))
    }

    function VB(a) {
        jk(WB(a), !0, () => {
            X(a).Ed.classList.remove("ved-hidden")
        });
        jk(WB(a), !1, () => {
            X(a).Ed.classList.add("ved-hidden")
        })
    }

    function XB(a) {
        const b = () => void rk(a.F),
            {
                Jc: c,
                wb: d,
                Oe: e
            } = X(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        pk(YB(a), !0, b)
    }

    function UB(a) {
        if (!a.A) {
            var {
                Ee: b,
                vc: c
            } = X(a), d = c.getBoundingClientRect().height, e = b.getBoundingClientRect().height;
            d < e || (a.A = !0, e = ZB(a), b.style.setProperty("height", `${d}px`), e(), a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.A = !1
                })
            }))
        }
    }

    function WB(a) {
        const {
            ma: b,
            wb: c
        } = X(a);
        return MB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function YB(a) {
        return ek(a.C.map(nl), $B(a))
    }

    function $B(a) {
        return MB(a, () => 0 === X(a).ma.scrollTop)
    }

    function aC(a, b) {
        X(a).ma.scrollTop = b;
        rk(a.B)
    }

    function bC(a, b) {
        ({
            Ab: a
        } = X(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function cC(a, b) {
        R(a.C, !0);
        const {
            Ab: c,
            ma: d
        } = X(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void dC(a, b)
    }

    function dC(a, b) {
        const {
            Ab: c,
            ma: d
        } = X(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        aC(a, b);
        R(a.C, !1)
    }

    function ZB(a) {
        const b = X(a).ma.scrollTop;
        cC(a, b);
        return () => void dC(a, b)
    }
    var eC = class extends Xj {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.D = b;
            this.J = c;
            this.F = new sk;
            this.B = new sk;
            this.j = new dk(!1);
            this.C = new dk(!1);
            this.A = !1
        }
        init() {
            aC(this, bC(this, X(this).wb));
            SB(this);
            TB(this);
            VB(this);
            XB(this);
            X(this).ma.addEventListener("scroll", () => void rk(this.B))
        }
        l() {
            const a = this.D.Oc.Pd,
                b = a.parentNode;
            b && b.removeChild(a);
            super.l()
        }
    };

    function fC(a) {
        jk(ek(QB(a.j), RB(a.j)), !0, ol(() => {
            X(a.j).wb.classList.remove("ved-snap-point-top")
        }));
        jk(OB(a.j), !0, () => {
            X(a.j).ma.classList.add("ved-no-snap")
        });
        jk(OB(a.j), !1, () => {
            X(a.j).ma.classList.remove("ved-no-snap")
        });
        pk(OB(a.j), !1, () => {
            var b = a.j;
            var c = X(b).Kc;
            c = cC(b, bC(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function gC(a) {
        const b = a.j.J;
        FB(b).ba(c => {
            c = -c;
            if (0 < c) {
                const {
                    Sd: d
                } = X(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Sd: c
            } = X(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        IB(b).ba(c => {
            30 < -c && a.collapse()
        })
    }
    var hC = class extends Xj {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            pk(LB(b), !0, () => {
                Yk(c);
                vt(d)
            });
            pk(LB(b), !1, () => {
                Zj(c.j);
                Zj(c.A);
                Zk(c);
                wt(d)
            })
        }
        show({
            kd: a = !1
        } = {}) {
            KB(this.j);
            a && pk(LB(this.j), !1, () => {
                this.va()
            })
        }
        collapse() {
            var a = this.j;
            X(a).lb.classList.remove("ved-revealed");
            R(a.j, !1)
        }
        init() {
            (new tk(this.j.F)).ba(() => {
                this.collapse()
            });
            fC(this);
            gC(this);
            Db(this.win.document.body.offsetHeight)
        }
    };

    function iC(a, b, c) {
        const d = jC.find(f => f.dc <= a.document.body.clientWidth),
            e = b.l ? kC(a, b, c, d) : lC(a, b, c, d);
        e.show({
            kd: !0
        });
        mC.push(() => {
            e.va()
        })
    }

    function kC(a, b, c, d) {
        c = nC(a, b, c, d, a.innerWidth, "100%", "15px", "13px", "center");
        b = qt(new ut(a), 1E5);
        d = sB(a);
        var e = d.shadowRoot,
            f = e.appendChild,
            g = new Hf(a.document);
        var h = Ms("<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(100001) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " + W(95) +
            "%; transition: transform " + W(.5) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + W(BB()) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            W(75 / 95 * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + W(20 / 95 * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            W(75 / 95 * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + W(75 / 95 * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + W(DB() + 50) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            W(BB()) + "px " + W(BB()) + "px 0 0; background: white; display: flex; height: " + W(DB()) + 'px; justify-content: center; cursor: grab;}.ved-handle-icon {background: #dadce0; border-radius: 2px; height: 4px; margin-bottom: 8px; width: 50px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            EB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + EB("ved-fixed-handle") + "</div></div></div>");
        f.call(e, Yf(g, Hs(h)));
        f = tB("ved-content-container", e);
        f.appendChild(c);
        Db(a.document.body.offsetHeight);
        c = {
            lb: tB("ved-drawer-container", e),
            Jc: tB("ved-modal-background", e),
            Sd: tB("ved-ui-revealer", e),
            ma: tB("ved-scroller",
                e),
            Ab: tB("ved-scrolled-stack", e),
            Oe: tB("ved-fully-closed-anchor", e),
            wb: tB("ved-partially-extended-anchor", e),
            Ee: tB("ved-content-sizer", e),
            vc: f,
            Aj: tB("ved-moving-handle", e),
            Kc: tB("ved-moving-handle-holder", e),
            Ne: tB("ved-fixed-handle", e),
            od: tB("ved-fixed-handle-holder", e),
            Ed: tB("ved-over-scroll-block", e),
            Oc: d
        };
        d = c.Ne;
        d = new Kk(new Bk(a, d), new yk(d));
        e = d.j;
        e.C.addEventListener("mousedown", e.F);
        e.B.addEventListener("mouseup", e.D);
        e.B.addEventListener("mousemove", e.G, {
            passive: !1
        });
        e = d.l;
        e.l.addEventListener("touchstart",
            e.G);
        e.l.addEventListener("touchend", e.C);
        e.l.addEventListener("touchmove", e.D, {
            passive: !1
        });
        c = new eC(a, c, new JB(d));
        c.init();
        a = new hC(a, c, Wk(a), b);
        Yj(a, Ga(Wj, c));
        a.init();
        return a
    }

    function lC(a, b, c, d) {
        a: {
            var e = a.document.body.clientWidth;
            var f = .9 * e;
            for (e = 768 >= e ? 3 : 4; 1 <= e; e--) {
                var g = d.Oa * e + 42;
                if (g <= f) {
                    f = g;
                    break a
                }
            }
        }
        c = nC(a, b, c, d, f, "600px", "24px", "24px", "start");e = `${f}px`;
        var h = nB(b),
            l = J(b.B, 14);b = qt(new ut(a), 1E5);d = sB(a);f = d.shadowRoot;g = f.appendChild;
        var k = new Hf(a.document);h = h || !1;e = Ms("<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + W(100001) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            W(e) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + W(wB()) + "px; transition: transform " + W(.5) + "s ease-in-out;" + (h ? "left: 0; border-top-right-radius: " + W(wB()) + "px; border-bottom-right-radius: " + W(wB()) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + W(wB()) + "px; border-bottom-left-radius: " + W(wB()) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "text-align: left;" : "text-align: right;") + 'height: 24px;}#hd-close-button {border: none; background: none; cursor: pointer;}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}</style><div id="hd-drawer-container"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-close-button" aria-label="' + Qs(l) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#5F6368"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>');
        g.call(f, Yf(k, Hs(e)));e = tB("hd-content-container", f);e.appendChild(c);Db(a.document.body.offsetHeight);c = {
            lb: tB("hd-drawer-container", f),
            Jc: tB("hd-modal-background", f),
            vc: e,
            Ae: tB("hd-close-button", f),
            Oc: d
        };a = new zB(a, c, Wk(a), b);a.init();
        return a
    }

    function nC(a, b, c, d, e, f, g, h, l) {
        var k = b.B,
            m = !!b.j,
            n = J(k, 10),
            p = n.indexOf("TERM");
        const u = m ? "vert-pla-adfiliates-e4-srp" : "vert-pla-adfiliates-srp";
        var w = Fo(ln);
        e = Math.max(Math.floor((e - Math.floor(e / d.Oa) * d.Oa) / 2), 5);
        var t = b.G ? "on" : "",
            A = J(k, 3),
            y = `${Fo(pn)}`,
            F = J(k, 7),
            E = J(k, 6),
            G = b.C,
            I = n.substring(0, p);
        n = n.substring(p + 4);
        d = d.nc;
        m = !m;
        p = !!Oc(k, 13);
        c = Ms('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' +
            Qs(W(g)) + " " + Qs(W(h)) + "; text-align: " + Qs(W(l)) + ';">' + (m ? '<div style="max-width: ' + Qs(W(f)) + '">' + Ls(A) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Ls(E) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Qs(W(g)) + "; text-align: " + Qs(W(l)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
            Ls(I) + "</span>" + Ls(c) + '<span style="color:#80868b">' + Ls(n) + '</span></div></div><div id="adfil-csa" style="margin:5px ' + Qs(W(e)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': " + Us(Vs(u)) + ", 'styleId': " + Us(Vs(d)) + ", 'disableCarousel': true, 'query': " + Us(Vs(c)) + ", 'hl': " + Us(Vs(F)) + ", 'personalizedAds': 'false', 'fexp': " + Us(Vs(y)) + ", 'adfiliateWp': " + Us(Vs(G)) + ", 'adtest': " +
            Us(Vs(t)) + "}; const adBlock = {'container': 'adfil-csa', 'linkTarget': '_blank', 'number': " + Us(Vs(w)) + ", 'width': document.body.offsetWidth - 30}; _googCsa('plas', pageOptions, adBlock);\x3c/script>" + (p ? "<script>const el = document.getElementById('adfil-csa'); el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" : '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') +
            "</div>");
        b = qe("body", {
            dir: nB(b) ? "rtl" : "ltr",
            lang: J(k, 7),
            style: $d({
                margin: "0",
                height: "100%",
                "padding-top": "0px",
                overflow: V(sn) ? null : "hidden"
            })
        }, Hs(c));
        k = a.document.createElement("IFRAME");
        M(k, {
            border: "0",
            width: "100%"
        });
        oC(a, k);
        k.srcdoc = me(b);
        return k
    }

    function oC(a, b) {
        const c = a.requestAnimationFrame;
        b.onload = () => {
            const d = b.contentDocument.body,
                e = new ResizeObserver(() => {
                    c(() => {
                        b.height = `${d.parentElement.offsetHeight}px`
                    })
                });
            e.observe(d);
            mC.push(() => {
                e.disconnect()
            })
        }
    }
    const jC = [{
            nc: "5984482117",
            dc: 480,
            Oa: 220
        }, {
            nc: "1530485620",
            dc: 400,
            Oa: 180
        }, {
            nc: "4440010542",
            dc: 360,
            Oa: 160
        }, {
            nc: "1138882718",
            dc: -Infinity,
            Oa: 150
        }],
        mC = [];
    var pC = class {
        constructor(a, b, c, d, e, f) {
            this.L = a;
            this.M = b;
            this.A = c;
            this.F = d;
            this.I = e;
            this.C = f
        }
        get j() {
            return this.L
        }
        get G() {
            return this.M
        }
        get B() {
            return this.A
        }
        get D() {
            return this.F
        }
        get J() {
            return this.I
        }
        get l() {
            return this.C
        }
    };

    function qC(a, b) {
        const c = a.document.createElement("SPAN");
        c.appendChild(a.document.createTextNode("shoppingmode"));
        qB(c);
        M(c, b);
        c.className = "google-material-icons";
        return c
    };

    function rC(a) {
        return a.performance.now()
    };
    var sC = (a, b) => gu({
        K: a,
        zd: 3E3,
        Ic: a.innerWidth > xj ? 650 : 0,
        xa: Xh,
        ye: b
    });
    class tC {
        constructor(a, b) {
            this.A = a;
            this.j = !1;
            this.B = b;
            this.l = this.B.la(264, c => {
                this.j && (uC || (c = Date.now()), this.A(c), uC ? vC.call(r, this.l) : r.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, uC ? vC.call(r, this.l) : this.l(0))
        }
    }
    var vC = r.requestAnimationFrame || r.webkitRequestAnimationFrame,
        uC = !!vC && !/'iPhone'/.test(r.navigator.userAgent);

    function wC(a) {
        return a * a * a
    }

    function xC(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class yC {
        constructor(a, b) {
            var c = Si;
            this.l = a;
            this.G = b;
            this.L = 100;
            this.progress = 0;
            this.j = null;
            this.J = !1;
            this.A = [];
            this.B = null;
            this.C = new tC(Fa(this.M, this), c)
        }
        M(a) {
            if (this.J) this.C.j = !1;
            else {
                null === this.j && (this.j = a);
                this.progress = (a - this.j) / this.L;
                1 <= this.progress && (this.progress = 1);
                a = this.B ? this.B(this.progress) : this.progress;
                this.A = [];
                for (let b = 0; b < this.l.length; b++) this.A.push((this.G[b] - this.l[b]) * a + this.l[b]);
                this.D();
                1 == this.progress && (this.C.j = !1, this.F())
            }
        }
        F() {}
        D() {}
        play() {
            this.J = !1;
            this.C.start()
        }
        reset(a,
            b, c) {
            this.j = null;
            this.l = a;
            this.G = b;
            this.L = c;
            this.progress = 0
        }
    };
    class zC extends yC {
        constructor(a, b, c, d, e) {
            super([b], [c]);
            this.O = a;
            this.I = d ? d : null;
            this.B = e || null
        }
        D() {
            const a = {};
            a.left = this.A[0] + "px";
            hh(this.O, a)
        }
        F() {
            this.I && this.I()
        }
    };
    let AC = "",
        BC = "";

    function CC(a) {
        return a.document.getElementById("google-adfil-sa")
    }

    function DC(a, b) {
        const c = document.createElement("SPAN");
        qB(c);
        M(c, {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: "60px",
            right: "60px",
            display: "flex",
            "flex-direction": "row",
            "justify-content": "center",
            color: "#1967D2",
            cursor: "pointer"
        });
        var d = nB(b);
        b.l || M(c, {
            "justify-content": ""
        });
        c.appendChild(qC(a, {
            "font-family": '"Google Material Icons"',
            "font-size": "18px",
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none",
            width: "15px",
            height: "15px",
            "margin-left": d ? "8px" : "",
            "margin-right": d ?
                "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        }));
        d = document.createElement("SPAN");
        d.id = "google-adfil-sa-qtx";
        d.appendChild(a.document.createTextNode(J(b.B, 11).replace("TERM", AC)));
        M(d, {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        const e = rC(a);
        c.addEventListener("click", f => {
            rB(BC, AC,
                rC(a), e, b);
            iC(a, b, AC);
            f.preventDefault();
            return !1
        });
        c.appendChild(d);
        return c
    }

    function EC(a, b) {
        const c = document.createElement("SPAN");
        c.id = "gda";
        const d = FC(a, b);
        c.appendChild(d);
        c.addEventListener("click", e => {
            const f = nB(b),
                g = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
            (new zC(CC(a), 0, g, () => {}, wC)).play();
            const h = GC(b);
            h.appendChild(qC(a, {
                "font-family": '"Google Material Icons"',
                "font-size": "18px",
                "font-style": "normal",
                "font-weight": "normal",
                "text-decoration": "none",
                "margin-right": "8px",
                "margin-top": "10px",
                left: "13px",
                top: "14px",
                margin: "0",
                position: "absolute",
                "line-height": "normal"
            }));
            h.addEventListener("click", l => {
                const k = (b.l ? f : !f) ? a.innerWidth : -a.innerWidth;
                (new zC(CC(a), k, 0, () => {}, xC)).play();
                a.document.body.removeChild(h);
                l.preventDefault();
                return !1
            });
            a.document.body.appendChild(h);
            e.preventDefault();
            return !1
        });
        return c
    }

    function FC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = nB(b);
        b = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            left: b ? "" : "0",
            right: b ? "0" : "",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        b = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(b);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-linecap",
            "square");
        c.setAttribute("stroke-width", "2px");
        b = c.ownerDocument;
        d = b.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", "6");
        d.setAttribute("y1", "14");
        d.setAttribute("x2", "14");
        d.setAttribute("y2", "6");
        c.appendChild(d);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "6");
        b.setAttribute("y1", "6");
        b.setAttribute("x2", "14");
        b.setAttribute("y2", "14");
        c.appendChild(b);
        a.appendChild(c);
        return a
    }

    function HC(a, b) {
        const c = document.createElement("DIV");
        c.id = "google-adfil-ea";
        b.l || M(c, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        });
        const d = IC(a, b);
        c.appendChild(d);
        const e = rC(a);
        c.addEventListener("click", f => {
            rB(BC, AC, rC(a), e, b);
            iC(a, b, AC);
            f.preventDefault();
            return !1
        });
        return c
    }

    function IC(a, b) {
        var c = a.document;
        a = c.createElementNS("http://www.w3.org/2000/svg", "svg");
        var d = nB(b);
        d = b.l ? d : !d;
        M(a, {
            bottom: "12.5px",
            display: "block",
            height: "20px",
            margin: "0 20px",
            "pointer-events": "initial",
            position: "absolute",
            left: d ? "0" : "",
            right: d ? "" : "0",
            top: "12.5px",
            transform: "none",
            width: "20px"
        });
        d = c.createElementNS("http://www.w3.org/2000/svg", "defs");
        a.appendChild(d);
        c = c.createElementNS("http://www.w3.org/2000/svg", "g");
        c.setAttribute("class", "down");
        c.setAttribute("stroke", "#616161");
        c.setAttribute("stroke-width",
            "2px");
        c.setAttribute("stroke-linecap", "square");
        b.l ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "6"), d.setAttribute("y1", "12"), d.setAttribute("x2", "10"), d.setAttribute("y2", "8"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "8"), b.setAttribute("x2", "14"), b.setAttribute("y2", "12"), c.appendChild(b)) : nB(b) ? (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"),
            d.setAttribute("x1", "6"), d.setAttribute("y1", "6"), d.setAttribute("x2", "10"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg", "line"), b.setAttribute("x1", "10"), b.setAttribute("y1", "10"), b.setAttribute("x2", "6"), b.setAttribute("y2", "14"), c.appendChild(b)) : (b = c.ownerDocument, d = b.createElementNS("http://www.w3.org/2000/svg", "line"), d.setAttribute("x1", "10"), d.setAttribute("y1", "6"), d.setAttribute("x2", "6"), d.setAttribute("y2", "10"), c.appendChild(d), b = b.createElementNS("http://www.w3.org/2000/svg",
            "line"), b.setAttribute("x1", "6"), b.setAttribute("y1", "10"), b.setAttribute("x2", "10"), b.setAttribute("y2", "14"), c.appendChild(b));
        a.appendChild(c);
        return a
    }

    function GC(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = nB(a);
        a = a.l ? c : !c;
        M(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": Fo(mn).toString()
        });
        return b
    }

    function JC(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && M(a.document.body, {
                    "padding-bottom": "45px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function KC(a) {
        try {
            let b, c;
            return null !== (null == (b = a.location) ? void 0 : null == (c = b.href) ? void 0 : c.match(/goog_fsa=1/))
        } catch (b) {
            return !1
        }
    };
    var OC = class {
        constructor(a) {
            this.l = a;
            this.j = new LC;
            for (var b of this.l) {
                var c = J(b, 1);
                for (var d of H(b, MC, 2)) {
                    a = this.j;
                    var e = J(d, 1),
                        f = c,
                        g = a.l.has(f) ? a.l.get(f) : a.C++;
                    a.l.set(f, g);
                    a.B.set(g, f);
                    f = 0;
                    for (let h = 0; h < e.length; h++) {
                        const l = e.charCodeAt(h);
                        a.j[f].contains(l) || (a.j.push(new NC), a.j[a.size].C = f, a.j[a.size].G = l, a.j[f].A.set(l, a.size), a.size++);
                        f = a.j[f].A.get(l)
                    }
                    a.j[f].B = !0;
                    a.j[f].D = g;
                    a.j[f].F = a.A.length;
                    a.A.push(e.length)
                }
            }
            b = this.j;
            d = [];
            for (d.push(0); 0 < d.length;) {
                c = d.shift();
                a = b;
                e = c;
                g = a.j[e];
                if (0 === e) g.j = 0, g.l = 0;
                else if (0 === g.C) g.j = 0, g.l = g.B ? e : a.j[a.j[e].j].l;
                else {
                    g = a.j[a.j[e].C].j;
                    for (f = a.j[e].G;;) {
                        if (a.j[g].contains(f)) {
                            a.j[e].j = a.j[g].A.get(f);
                            break
                        }
                        if (0 === g) {
                            a.j[e].j = 0;
                            break
                        }
                        g = a.j[g].j
                    }
                    a.j[e].l = a.j[e].B ? e : a.j[a.j[e].j].l
                }
                for (const h of b.j[c].childNodes) d.push(h)
            }
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class LC {
        constructor() {
            this.size = 1;
            this.j = [new NC];
            this.A = [];
            this.l = new Map;
            this.B = new Map;
            this.C = 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let e = 0; e < a.length; e++) {
                for (;;) {
                    var d = a.charCodeAt(e);
                    if (this.j[b].contains(d)) {
                        b = this.j[b].A.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = this.j[b].j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    c.push(new PC(e + 1 - this.A[this.j[d].F], e, this.B.get(this.j[d].D)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class NC {
        constructor() {
            this.A = new Map;
            this.L = !1;
            this.Z = this.J = this.I = this.W = this.M = this.O = -1
        }
        contains(a) {
            return this.A.has(a)
        }
        set C(a) {
            this.O = a
        }
        get C() {
            return this.O
        }
        set G(a) {
            this.M = a
        }
        get G() {
            return this.M
        }
        set B(a) {
            this.L = a
        }
        get B() {
            return this.L
        }
        set D(a) {
            this.J = a
        }
        get D() {
            return this.J
        }
        set j(a) {
            this.W = a
        }
        get j() {
            return this.W
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set F(a) {
            this.Z = a
        }
        get F() {
            return this.Z
        }
        get childNodes() {
            return this.A.values()
        }
    }
    var PC = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.D = c
        }
        get B() {
            return this.l
        }
        get C() {
            return this.j
        }
        get A() {
            return this.D
        }
        get length() {
            return this.j - this.l
        }
    };
    const QC = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function RC(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; 0 <= c; c--) QC.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), "" === a ? 0 : a.split(/\s+/).length
        }
    }

    function SC(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || QC.test(a)
        }
    };
    const TC = ["block", "inline", "inline-block", "list-item", "table-cell"];
    class UC {
        constructor() {
            this.j = Infinity
        }
    }

    function VC(a, b, c, d, e, f) {
        if (rC(a) >= c.D) return !1;
        for (let Aa = 0; Aa < b.childNodes.length; Aa++) {
            const Y = b.childNodes[Aa];
            if (Y.nodeType === Node.TEXT_NODE && "" !== Y.textContent) {
                var g = b,
                    h = void 0;
                if (f) a: {
                    h = a;
                    var l = c,
                        k = Y.textContent,
                        m = d,
                        n = e,
                        p = f,
                        u = [];b: {
                        var w = k;
                        switch (l.A) {
                            case 1:
                                var t = Array(w.length),
                                    A = 0;
                                for (var y = 0; y < w.length; y++) QC.test(w[y]) || A++, t[y] = A;
                                w = t;
                                break b;
                            default:
                                t = Array(w.length);
                                for (y = A = 0; y < w.length;) {
                                    for (;
                                        /\s/.test(w[y]);) t[y] = A, y++;
                                    for (var F = !1; y < w.length && !/\s/.test(w[y]);) F = !0, t[y] = A, y++;
                                    F &&
                                        (A++, t[y - 1] = A)
                                }
                                w = t
                        }
                    }
                    if (k.includes("\u00bb")) p = [];
                    else {
                        t = p.match(k);
                        p = new Map;
                        for (const T of t) t = T.B, p.has(t) ? (A = p.get(t), T.length > A.length && p.set(t, T)) : p.set(t, T);
                        p = Array.from(p.values())
                    }
                    A = -1;
                    for (const T of p)
                        if (t = T.B, p = T.C, y = -1 === A ? m.j + w[t] : w[t] - w[A], SC(k.charAt(t - 1), l.A) && SC(k.charAt(p + 1), l.A) && !(y < Fo(un))) {
                            if (!l.j && !WC(h, g)) {
                                m.j += w[k.length - 1];
                                h = [];
                                break a
                            }
                            A += 1;
                            A < t && u.push(h.document.createTextNode(k.substring(A, t)));
                            A = u;
                            y = A.push;
                            F = h;
                            var E = l,
                                G = T.A;
                            t = k.substring(t, p + 1);
                            t = E.j ? XC(F, E, G, t) : YC(F, E,
                                G, t);
                            y.call(A, t);
                            t = n;
                            A = T.A;
                            t.j++;
                            t.l.add(A);
                            m.j = 0;
                            A = p
                        }
                    A++;
                    if (A < k.length) {
                        m.j += w[k.length - 1] - w[A];
                        if (!A) {
                            h = null;
                            break a
                        }
                        u.push(h.document.createTextNode(k.substring(A)))
                    }
                    h = u
                }
                else a: if (h = a, l = c, m = g, n = Y.textContent, g = d, u = e, n.includes("\u00bb")) h = null;
                    else
                        for (w = l.B, k = [], y = 0;;) {
                            t = n.length;
                            A = null;
                            p = "";
                            b: for (const T of H(w, ZC, 2))
                                for (const cb of H(T, MC, 2))
                                    for (F = J(cb, 1), E = y; E < n.length;) {
                                        E = n.indexOf(F, E);
                                        if (-1 === E) break;
                                        if (E > t || E === t && null !== A && F.length < A.length) break;
                                        if (!SC(n.charAt(E - 1), l.A) || !SC(n.charAt(E +
                                                F.length), l.A)) break;
                                        G = RC(n.substring(y, E), l.A);
                                        if (g.j + G >= Fo(un)) {
                                            if (!l.j && !WC(h, m)) break b;
                                            t = E;
                                            A = F;
                                            p = J(T, 1);
                                            break
                                        }
                                        E += 1
                                    }
                            if (null === A) {
                                if (0 === y) {
                                    g.j += RC(n, l.A);
                                    h = null;
                                    break a
                                }
                                y < n.length && (m = n.substring(y), k.push(h.document.createTextNode(m)), g.j += RC(m, l.A));
                                h = k;
                                break a
                            }
                            t > y && k.push(h.document.createTextNode(n.substring(y, t)));
                            y = k;
                            F = y.push;
                            E = h;
                            G = l;
                            var I = p,
                                ja = A;
                            E = G.j ? XC(E, G, I, ja) : YC(E, G, I, ja);
                            F.call(y, E);
                            g.j = 0;
                            y = t + A.length;
                            t = u;
                            t.j++;
                            t.l.add(p)
                        }
                if (h && !V(vn)) {
                    for (const T of h) b.insertBefore(T, Y), $C(T);
                    b.removeChild(Y);
                    Aa += h.length - 1
                }
            } else if (aD(Y, c) && !VC(a, Y, c, d, e, f)) return !1
        }
        return !0
    }

    function $C(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = mB(kB(getComputedStyle(a.parentElement).color)),
                    c = mB(kB(getComputedStyle(a).color));
                var d = lB(a);
                if (d = b && c && d ? ZA(c, d) < Math.min(ZA(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    M(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) $C(a.children[b])
        }
    }

    function aD(a, b) {
        if (a.nodeType !== Node.ELEMENT_NODE) return !1;
        let c;
        if (null == (c = a.classList) ? 0 : c.contains("google-adfil-skip")) return !1;
        let d, e;
        switch (null == (d = a.tagName) ? void 0 : null == (e = d.toUpperCase) ? void 0 : e.call(d)) {
            case "IFRAME":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            case "A":
                return !!b.j;
            default:
                if (!(b = !!b.j)) {
                    let f, g, h, l, k, m;
                    b = !((null == (g = (f = a.className).toUpperCase) ? 0 : null == (h = g.call(f)) ? 0 : h.includes("CRUMB")) || (null == (k = (l = a.id).toUpperCase) ? 0 : null == (m = k.call(l)) ? 0 : m.includes("CRUMB")))
                }
                return b
        }
    }

    function WC(a, b) {
        a = a.getComputedStyle(b);
        b = a.fontSize.match(/\d+/);
        return !!b && 12 <= Number(b[0]) && 22 >= Number(b[0]) && tb(TC, a.display)
    }

    function XC(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        e.appendChild(a.document.createTextNode(d));
        (new IntersectionObserver(f => {
            f.forEach(g => {
                g.isIntersecting && g.target.textContent && (AC = c, BC = d, CC(a) ? a.document.getElementById("google-adfil-sa-qtx").innerText = J(b.B, 11).replace("TERM", AC) : fu(a) || (g = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/), M(a.document.body, {
                        "padding-bottom": (g && g.length ? Number(g[0]) + 45 : 45) + "px"
                    }), JC(a), g = document.createElement("div"), g.id = "google-adfil-sa",
                    g.dir = nB(b) ? "rtl" : "ltr", M(g, {
                        background: "white",
                        "border-style": "solid",
                        "border-top-left-radius": "20px",
                        "border-top-right-radius": "20px",
                        bottom: "0",
                        height: "45px",
                        position: "fixed",
                        "text-align": "center",
                        width: "100%",
                        border: "0px",
                        left: "0px",
                        "box-shadow": "0px 0px 10px 0px #00000026",
                        "z-index": Fo(mn).toString()
                    }), g.appendChild(EC(a, b)), g.appendChild(DC(a, b)), g.appendChild(HC(a, b)), a.document.getElementsByTagName("body")[0].appendChild(g)))
            })
        }, {
            threshold: .98
        })).observe(e);
        return e
    }

    function YC(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        bD(e);
        e.appendChild(a.document.createTextNode(d));
        const f = a.document.createElement("A");
        qB(f);
        M(f, {
            "text-decoration": "none"
        });
        Ae(f);
        f.className = "google-adfil";
        f.appendChild(qC(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            "font-style": "normal",
            "font-weight": "normal",
            position: "relative",
            "text-decoration": "none"
        }));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        const g = rC(a);
        f.addEventListener("click", h => {
            Ti(999, () => {
                rB(d, c, rC(a), g, b);
                iC(a, b, c)
            }, l => {
                l.e = `${Fo(pn)}`
            });
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return f
    }

    function bD(a) {
        qB(a);
        M(a, {
            "text-decoration": "underline"
        });
        M(a, {
            "text-decoration-style": "dotted"
        });
        M(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    };
    var cD = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
        sendGen204(a, b, c, d, e, f, g) {
            let h;
            a = {
                wp: a,
                c: b,
                e: Fo(pn),
                ld: Array.from(null != (h = this.B) ? h : []).sort().join(","),
                lx: this.C || "",
                n: this.j,
                o: e,
                p: H(c, ZC, 2).length,
                t: this.l.size,
                w: this.A,
                x: Math.round(d)
            };
            Vi("adfil-imp", Object.assign({}, a, f ? {
                sap: Number(f.j),
                tap: Number(f.G),
                bap: Number(f.B),
                nsr: f.J,
                im: Number(f.l),
                mo: Number(f.D),
                ae: Number(g.l),
                fs: Number(g.j)
            } : {}), 1)
        }
    };
    var dD = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.vars = b;
            this.l = c;
            this.A = d
        }
        get window() {
            return this.win
        }
        get B() {
            return this.vars
        }
        get j() {
            return this.l
        }
        get C() {
            return this.A
        }
    };
    var eD = class {
        constructor(a) {
            this.l = a
        }
        get j() {
            return this.l
        }
    };

    function fD(a) {
        return a ? (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "" : ""
    }

    function gD(a) {
        return new Set(a.map(fD).filter(b => b.length))
    };
    var hD = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.D = b;
            this.G = c;
            this.C = d
        }
        get l() {
            return this.B
        }
        get A() {
            return this.D
        }
        get F() {
            return this.G
        }
        get j() {
            return this.C
        }
    };

    function iD(a, b, c, d, e) {
        const f = jD(c);
        if (f) {
            var g = 488 > Q(a).clientWidth,
                h = kD(a, g, c),
                l = new dD(a, b, c, d);
            kj(17, [d, f, g, h]);
            Ti(898, () => {
                a: {
                    try {
                        var k = a.document
                    } catch (ja) {
                        break a
                    }
                    if (a.performance) {
                        var m = rC(a),
                            n = Fo(An),
                            p = n ? m + n : Infinity;
                        !V(vn) && !V(rn) && 0 < H(f, ZC, 2).length && lD(a.document);
                        b.hasOwnProperty("adfcb") || (b.adfcb = ng() ? null : Math.floor(20 * ig()));
                        n = b.adfcb;
                        if (null != n) {
                            if (V(Nn) || KC(a))
                                if (KC(a)) var u = new pC(!0, !1, !1, e.j, 0, g);
                                else {
                                    u = gu({
                                        K: a,
                                        zd: 3E3,
                                        Ic: Fo(on),
                                        xa: Xh,
                                        ze: !0
                                    });
                                    var w = sC(a, 2),
                                        t = sC(a, 1);
                                    var A = 0 <
                                        u || !h.l || V(Tn) && !h.j || 0 === h.F ? !1 : !h.A || 0 < t || g && 0 === w ? !0 : !1;
                                    u = new pC(A, 0 === w, 0 === t, e.j, u, g)
                                }
                            else u = null;
                            mD(a, u, l);
                            w = new cD;
                            p = new pB(d, g, f, n, p, u, "on" === b.google_adtest);
                            if (k = k.body)
                                if (k.classList && void 0 !== k.classList.contains) {
                                    k = k.textContent || "";
                                    t = RC(k, p.A);
                                    w.A = t;
                                    A = fD(J(p.B, 7));
                                    var y = a.document.documentElement;
                                    y = fD(y.lang) || fD(y.getAttribute("xml:lang"));
                                    if ("" !== y) var F = new Set([y]);
                                    else {
                                        y = a.location;
                                        var E = y.host.match(/^[a-z]{2}\./i);
                                        E = E ? [E[0]] : [];
                                        for (G of y.pathname.split("/")) 2 === G.length && E.push(G);
                                        var G = gD(E);
                                        G.size || (y = a.navigator, G = gD((null == (F = y.languages) ? 0 : F.length) ? y.languages : [y.language]));
                                        F = G
                                    }
                                    w.C = A;
                                    w.B = new Set(F);
                                    if (t < Fo(tn)) var I = "sw";
                                    else if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) I = "si";
                                    else if (F.has(A))
                                        if (rC(a) >= p.D) I = "l";
                                        else {
                                            c: if (t = p.B, F = new UC, 0 === H(t, ZC, 2).length || p.j && !p.j.j) I = !0;
                                                else {
                                                    p.j || (G = a.document, A = G.createElement("style"), A.textContent = je(fh `@font-face{font-family:"goog-matfb";size-adjust:17.16%;src:local("Times New Roman");}`),
                                                        G.head.appendChild(A));
                                                    if (V(qn)) {
                                                        I = new OC(H(t, ZC, 2));
                                                        d: {
                                                            G = I.j;t = 0;
                                                            for (A = 0; A < k.length; A++) {
                                                                for (;;) {
                                                                    y = k.charCodeAt(A);
                                                                    if (G.j[t].contains(y)) {
                                                                        t = G.j[t].A.get(y);
                                                                        break
                                                                    }
                                                                    if (0 === t) break;
                                                                    t = G.j[t].j
                                                                }
                                                                for (y = t;;) {
                                                                    y = G.j[y].l;
                                                                    if (0 === y) break;
                                                                    k = !0;
                                                                    break d
                                                                }
                                                            }
                                                            k = !1
                                                        }
                                                        if (!k) {
                                                            I = !0;
                                                            break c
                                                        }
                                                    }
                                                    I = VC(a, a.document.body, p, F, w, I)
                                                }I = I ? "a" : "p"
                                        }
                                    else I = "sl"
                                } else I = "se";
                            else I = "sb";
                            m = rC(a) - m;
                            !V(vn) && 0 < w.j && (Oc(f, 13) && (p = a.document, k = p.createElement("LINK"), Fe(k, N `https://www.google.com/adsense/search/ads.js`, "prefetch"), k.as = "script",
                                p.head.appendChild(k)), V(rn) && lD(a.document));
                            w.sendGen204(d, n, f, m, I, u, h);
                            kj(18, [n, m, I, w])
                        }
                    }
                }
            }, k => {
                k.e = `${Fo(pn)}`
            })
        }
    }

    function mD(a, b, c) {
        V(Nn) && b && !b.j && (a = ku(a)) && Kg(a, () => {
            iD(c.window, c.B, c.j, c.C, new eD(!0))
        })
    }

    function kD(a, b, c) {
        if (!V(Nn) && !KC(a)) return null;
        a = !!c.U && Jc(c.U) && Oc(nD(c), 5);
        b = !!c.U && Jc(c.U) && Oc(nD(c), 6) && (b || !Oc(nD(c), 7));
        const d = H(jD(c), ZC, 2).length;
        c = !!c.U && Jc(c.U) && Oc(nD(c), 8);
        return new hD(a, b, d, c)
    }

    function lD(a) {
        const b = a.createElement("LINK"),
            c = V(On) ? N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700&text=shoppingmode` : N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
        Fe(b, c, "stylesheet");
        a.head.appendChild(b)
    };
    var pD = class extends K {
            constructor(a) {
                super(a, -1, oD)
            }
        },
        MC = class extends K {
            constructor(a) {
                super(a)
            }
        },
        ZC = class extends K {
            constructor(a) {
                super(a, -1, qD)
            }
        },
        oD = [2],
        qD = [2];

    function jD(a) {
        try {
            const f = a.l.match(/\bgoog_cpmi=([^&]*)/);
            if (f) {
                var b = decodeURIComponent(f[1]);
                var c = new pD(JSON.parse(b))
            } else c = null
        } catch (f) {
            c = null
        }
        c || (c = V(Pn) ? a.j : null);
        if (!c)
            if (V(Pn)) {
                var d, e;
                c = null != (e = null == (d = a.U) ? void 0 : D(d, pD, 11)) ? e : null
            } else c = null;
        return c
    }

    function nD(a) {
        let b, c;
        return null != (c = null == (b = a.U) ? void 0 : Yc(b, rD, 13, Lc)) ? c : null
    }
    var sD = class {
        constructor(a, b = null, c = null) {
            this.l = a;
            this.U = b;
            this.j = c
        }
    };
    var uD = a => {
        const b = a.H;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !! of .WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = tD(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = tD(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = tD(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = tD(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = tD(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = tD(a, b.google_color_line, c))
    };

    function tD(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function vD(a, b) {
        var c = Si,
            d;
        var e;
        d = (e = (e = Xg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new Tg(d.left, d.top, d.width, d.height) : null) ? new yf(e.left, e.top) : (d = Yg()) && ya(d.rootBounds) ? new yf(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new yf(0, 0),
                g = Nf(If(b));
            if (Eb(g, "parent")) {
                do {
                    if (g == a) var h = nh(b);
                    else {
                        var l = mh(b);
                        h = new yf(l.left, l.top)
                    }
                    d =
                        h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.ka(888, k), new yf(-12245933, -12245933)
        }
    };
    var rD = class extends K {
        constructor(a) {
            super(a)
        }
    };
    var xD = class extends K {
            constructor(a) {
                super(a, -1, wD)
            }
        },
        wD = [1];
    var zD = class extends K {
            constructor(a) {
                super(a, -1, yD)
            }
        },
        yD = [19],
        Lc = [13, 14];

    function AD(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var BD = class {
            constructor() {
                this.j = null;
                this.l = {
                    [xi]: {},
                    [yi]: {},
                    [zi]: {}
                };
                const a = b => this.j ? lg(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[yi] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        CD;
    let DD = void 0;

    function ED() {
        ri(DD, pi);
        return DD
    };

    function FD(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : pd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function GD(a) {
        V($m) && Vi("abg_adsensesettings_lserr", {
            s: a,
            g: V(an),
            c: ED(),
            r: .01
        }, .01)
    };
    var HD = (a = r) => a.ggeac || (a.ggeac = {});
    class ID {
        constructor() {
            this.j = () => {}
        }
    };
    var KD = (a = HD()) => {
            Qi(O(Ri), a);
            JD(a);
            O(ID).j = Pi(Oi, a);
            O(Eo).l()
        },
        JD = a => {
            const b = O(Eo);
            b.A = (c, d) => Pi(Ki, a, () => !1)(c, d, 1);
            b.B = (c, d) => Pi(Li, a, () => 0)(c, d, 1);
            b.j = (c, d) => Pi(Mi, a, () => "")(c, d, 1);
            b.C = (c, d) => Pi(Ni, a, () => [])(c, d, 1);
            b.l = () => {
                Pi(Hi, a)(1)
            }
        };
    var LD = a => {
        const b = O(Ri).l();
        a = Xy(a);
        a.eids || (a.eids = []);
        return b.concat(a.eids).join(",")
    };

    function MD(a, b, c) {
        return c ? Xz(b, c, a.j) : null
    }

    function ND(a, b, c, d) {
        if (d) {
            var e = {
                xd: x(c, 2) - Date.now() / 1E3,
                path: x(c, 3),
                domain: x(c, 4),
                Bf: !1
            };
            a = a.j;
            B(d, 5) && Wz(a) && (new Uz(a.document)).set(b, x(c, 1), e)
        }
    }

    function OD(a, b, c) {
        if (c && Xz(b, c, a.j))
            for (const e of PD(a.j.location.hostname)) {
                var d = a.j;
                B(c, 5) && Wz(d) && (new Uz(d.document)).remove(b, "/", e)
            }
    }
    var QD = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function PD(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function RD(a, b, c) {
        return Ui(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = mf(lf(kf(jf(new nf, g), h), l), e);
                switch (d) {
                    case 1:
                        ND(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        V(co) && ND(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function SD(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (MD(a, "__gads", b)) var e = !0;
            else if (e = a.j, B(b, 5) && Wz(e) && (new Uz(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === Xz("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && Wz(f) && (new Uz(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = RD(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function TD(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = MD(b, "__gads", a);
        e && (d.cookie = e);
        V(co) && ((e = MD(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e), d.gpid_exp = "1");
        const f = Ed(Jd(ld(md("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = SD(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            fg(c.document, f)
        }) : Promise.resolve()
    }
    var UD = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new QD(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : TD(a, d, b, c)
        } else Promise.resolve();
        a = MD(d, "__gads", a) || "";
        CD || (CD = new BD);
        b = CD;
        AD(b, a);
        a = b.l;
        O(ID).j(a);
        O(Ri).j(20);
        O(Ri).j(17)
    };
    var vi = {
        pj: 0,
        lj: 1,
        jj: 2,
        kj: 3,
        nj: 5,
        oj: 6,
        mj: 7
    };
    var VD = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.H = a.H;
            this.U = a.U;
            this.da = a.da;
            this.Ua = a.Ua;
            this.ga = a.ga;
            this.na = a.na;
            this.B = -1;
            this.j = 0;
            this.l = this.J = null;
            this.I = this.G = 0;
            this.A = [];
            this.mb = this.D = "";
            this.C = this.F = null
        }
    };
    var WD = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= yj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var XD = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= yj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var YD = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        ZD = (a, b, c) => {
            let d = 0;
            try {
                d |= yj(a, 2500);
                if (V(no)) {
                    const g = Q(a).clientHeight;
                    d |= g ? 320 > g ? 2097152 : 0 : 1073741824
                }
                d |= zj(a);
                var e;
                if (e = 0 < b) {
                    var f = Iv(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };

    function $D(a, b = null) {
        if (!V(ro)) return 32;
        let c = a != a.top ? 512 : 0;
        var d;
        cu(null == (d = a.navigator) ? void 0 : d.userAgent) && (c |= 1048576);
        d = a.innerWidth;
        1200 > d && (c |= 65536);
        const e = a.innerHeight;
        650 > e && (c |= 2097152);
        b && 0 === c && (aE({
            K: a,
            Nd: 1,
            position: 3 === b ? "left" : "right",
            R: d,
            Y: e,
            Ga: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (c |= 16));
        return c
    }

    function bE(a) {
        if (0 !== $D(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = aE({
                K: a,
                Nd: 1,
                position: e,
                R: c,
                Y: d,
                Ga: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function cE(a, b) {
        return null !== Xf(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function dE(a, b) {
        return Xf(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function eE(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function fE(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function gE(a) {
        return `${a.position}-${fE(a.R)}x${fE(a.Y)}-${fE(a.scrollY+a.Ya)}Y`
    }

    function hE(a) {
        return `f-${gE({position:a.position,Ya:a.Ya,scrollY:0,R:a.R,Y:a.Y})}`
    }

    function iE(a, b) {
        a = Math.min(null != a ? a : Infinity, null != b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function jE(a, b, c) {
        const d = uj(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.Y),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var l = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < l) {
                        var k = hE({
                            position: "left",
                            Ya: f,
                            R: c.R,
                            Y: c.Y
                        });
                        b.set(k, iE(b.get(k), h))
                    }
                    if (h < c.R && e > c.R - l) {
                        k = hE({
                            position: "right",
                            Ya: f,
                            R: c.R,
                            Y: c.Y
                        });
                        const m = c.R - e;
                        b.set(k, iE(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function aE(a) {
        var b = uj(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                R: a.R,
                Y: a.Y,
                Ga: a.Ga
            },
            d = `f-${fE(c.R)}x${fE(c.Y)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            uj(c.K).sideRailProcessedFixedElements.clear();
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")), ...c.Ga]);
            for (var e of eE(c.K)) cE(e, d) || jE(e, b, c)
        }
        c = [];
        d = .9 * a.Y;
        var f = Fj(a.K),
            g = e = (a.Y - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var n = g;
                var p = a.position,
                    u = b,
                    w = {
                        K: a.K,
                        R: a.R,
                        Y: a.Y,
                        Ga: a.Ga
                    };
                const A = hE({
                        position: p,
                        Ya: n,
                        R: w.R,
                        Y: w.Y
                    }),
                    y = gE({
                        position: p,
                        Ya: n,
                        scrollY: f,
                        R: w.R,
                        Y: w.Y
                    });
                if (u.has(y)) {
                    n = iE(u.get(A), u.get(y));
                    break a
                }
                const F = "left" === p ? 20 : w.R - 20;
                let E = F;p = .3 * w.R / 7 * ("left" === p ? 1 : -1);
                for (let G = 0; 8 > G; G++) {
                    const I = ou(w.K.document, Math.round(E), Math.round(n));
                    var t = cE(I, w.Ga);
                    const ja = dE(I, w.K);
                    if (!t && null !== ja) {
                        jE(ja, u, w);
                        u.delete(y);
                        break
                    }
                    t || (t = I.offsetHeight >= .25 * w.Y, t = I.offsetWidth >= .9 * w.R && t);
                    if (t) u.set(y, Math.round(Math.abs(E - F) + 20));
                    else if (E !== F) E -= p, p /= 2;
                    else {
                        u.set(y, 0);
                        break
                    }
                    E += p
                }
                n = iE(u.get(A), u.get(y))
            }
            m.call(k, n);
            g += h
        }
        b = a.Nd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (n = l; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (n = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    Dj: e + h[l] * d
                }, u = n.width >= g && n.height >= a, 0 === b && u) {
                m = n;
                break
            } else 1 === b && u && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const kE = {
        [27]: 512,
        [26]: 128
    };
    var lE = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === sC(a, c);
                case 3:
                case 4:
                    return 0 === $D(a, c);
                case 8:
                    return b = "on" === b.google_adtest || hA(a.location, "google_ia_debug") ? -1 : 3600, 0 == (YD(a) | ZD(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || hA(a.location, "google_scr_debug")), !Jv(a, b, d);
                case 30:
                    return 0 == Nx(a);
                case 26:
                    return 0 == XD(a);
                case 27:
                    return 0 === WD(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        mE = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return sC(a, c);
                case 3:
                case 4:
                    return $D(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || hA(a.location, "google_ia_debug") ? -1 : 3600, YD(a) | ZD(a, b, d);
                case 9:
                    return Jv(a, !("on" === b.google_adtest || hA(a.location, "google_scr_debug")), d);
                case 16:
                    return Wo(b, a) ? 0 : 8388608;
                case 30:
                    return Nx(a);
                case 26:
                    return XD(a);
                case 27:
                    return WD(a);
                default:
                    return 32
            }
        },
        nE = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!qd(d)) return !1;
            a = eg(a);
            if (!a || !lE(a, b, d, c)) return !1;
            b = uj(a);
            if (Dj(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        pE = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && oE(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        qE = a => {
            if (!a.hash) return null;
            let b = null;
            jg(fA, c => {
                !b && hA(a, c) && (b = gA[c])
            });
            return b
        },
        sE = (a, b) => {
            const c = uj(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && jg(Bv, d => {
                !c.debugCardRequested && "number" === typeof d && kA(d, a.location) && (c.debugCardRequested = !0, rE(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        uE = (a, b, c) => {
            if (!b) return null;
            const d = uj(b);
            let e = 0;
            jg(rd, f => {
                const g = kE[f];
                g && 0 ===
                    tE(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        vE = (a, b, c) => {
            const d = [];
            jg(rd, e => {
                if (V(ro) || 3 !== e && 4 !== e) {
                    var f = tE(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        wE = a => {
            const b = [],
                c = {};
            jg(a, (d, e) => {
                if ((e = sj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        xE = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        tE = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = uj(b),
                g = Dj(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            jg(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && qE(b.location) !== c && (e |= 128);
            return e | mE(b, a, c, d)
        },
        yE = (a, b) => {
            if (a) {
                var c = uj(a),
                    d = {};
                jg(b, (e, f) => {
                    (f = sj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                jg(rd, e => {
                    d[tj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        zE = (a, b, c) => {
            b = Si.la(b, c);
            return Vr(1, window, Ed(gh(a), O(Eo).j(jn.j, jn.defaultValue) ? {
                bust: O(Eo).j(jn.j, jn.defaultValue)
            } : {})).then(b)
        },
        rE = (a, b, c) => {
            c = Si.la(212, c);
            Vr(3, a, gh(b)).then(c)
        };
    const AE = a => {
        a.adsbygoogle || (a.adsbygoogle = [], fg(a.document, gh(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var BE = (a, b) => {
            L(a, "load", () => {
                AE(a);
                a.adsbygoogle.push(b)
            })
        },
        CE = a => {
            a = a.google_reactive_ad_format;
            return qd(a) ? "" + a : null
        },
        oE = a => !!CE(a) || null != a.google_pgb_reactive,
        DE = a => {
            a = CE(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var EE = a => "number" === typeof a.google_reactive_sra_index,
        JE = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.H;
            e.google_reactive_plat = vE(d, e, c);
            var f = wE(a);
            f && (e.google_reactive_plaf = f);
            (f = xE(a)) && (e.google_reactive_fba = f);
            (f = bE(d)) && (e.google_plas = f);
            FE(a, e);
            f = qE(b.pubWin.location);
            GE(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            V(wn) && (e.easpf = !0, e.easpi = V(Pn));
            V(bo) && (e.fsapi = !0);
            Zg() || Lo(b.pubWin.top);
            f = Zi(b.pubWin, "rsrai", Ui(429, (g, h) => HE(b, d, e.google_ad_client, a, g, h, c)), Si.la(430, Ga(Ij,
                b.pubWin, 431, Xh)));
            b.A.push(f);
            uj(d).wasReactiveTagRequestSent = !0;
            IE(b, a, c)
        };
    const IE = (a, b, c) => {
        const d = a.H,
            e = ya(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Zi(a.pubWin, "apcnf", Ui(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = gh(a.da.ob),
                m = gh(a.da.Bb);
            return Fg(g.origin) ? iB(h, l, e, f.config, c, k, null, m) : !1
        }), Si.la(353, Ga(Ij, a.pubWin, 353, Xh)));
        a.A.push(b)
    };
    var HE = (a, b, c, d, e, f, g) => {
            if (!Fg(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!Yy(b, 1)) return !0;
            f && kj(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = uj(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const p = f[n],
                    u = p.adFormat;
                k && p.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[u] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === u && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, KE(d, p));
                        const w = new Kv;
                        if (Ev(w, p)) {
                            m = w;
                            continue
                        }
                    }
                    h.push(p);
                    l.push(u)
                }
            }
            h.length && (Vi("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), zE(a.da.Hd, 522, n => {
                LE(h, b, c, n, d, g)
            }));
            e && iB(b, c, d, e, g, gh(a.da.ob), m);
            return !0
        },
        KE = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ya(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        LE = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    n = d.configProcessorForAdFormat(k);
                k && n && m ? (l.pubVars = KE(e, l), delete l.google_reactive_sra_index, g.push(k), Ti(466, () => n.verifyAndProcessConfig(b, l, f))) : Vi("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            Vi("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        FE = (a, b) => {
            const c = [];
            let d = !1;
            jg(sj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ya(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = sj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        GE = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    Db("script");
    var ME = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function NE(a, b) {
        if (!Wo(b, a)) return () => {};
        a = OE(b, a);
        if (!a) return () => {};
        const c = kz();
        b = td(b);
        const d = {
            Ja: a,
            H: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => ub(c, d)
    }

    function OE(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ap.test(a.className);) a = a.parentElement;
        return a
    }

    function PE(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = sg(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function QE(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function RE(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = kz();
            for (const d of a)
                if (d.Ja.offsetWidth != d.offsetWidth || d.H.google_full_width_responsive_allowed) d.offsetWidth = d.Ja.offsetWidth, Ti(467, () => {
                    var e = d.Ja,
                        f = d.H;
                    const g = PE(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = PE(e, f);
                    !h && g && 1 == e.childNodes.length ? (QE(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", AE(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h !=
                        g && (QE(g, !1), QE(h, !0)) : Vi("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    var SE = class extends Xj {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = az();
            if (!dz(b, 27, !1)) {
                fz(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => RE(this, a);
                L(a, "resize", c);
                Yj(this, () => {
                    Ue(a, "resize", c)
                })
            }
        }
    };
    var TE = class {
        constructor(a, b, c) {
            this.K = a;
            this.Ja = b;
            this.H = c;
            this.j = null;
            this.l = this.A = 0
        }
        B() {
            10 <= ++this.A && r.clearInterval(this.j);
            var a = Zo(this.K, this.Ja);
            a = $o(this.K, this.Ja, a);
            const b = Vo(this.Ja, this.K);
            null != b && 0 === b.x || r.clearInterval(this.j);
            a && (this.l++, Vi("rspv:al", {
                aligns: this.l,
                attempt: this.A,
                client: this.H.google_ad_client,
                eoffs: String(null != b ? b.x : null),
                eids: LD(this.H),
                slot: this.H.google_ad_slot,
                url: this.H.google_page_url
            }, .01))
        }
    };

    function UE(a, b) {
        var c = Yz(a, bv(b));
        c = z(c, 2, b.tcString);
        c = z(c, 4, b.addtlConsent || "");
        z(c, 7, b.internalErrorState);
        c = !dv(b);
        z(a, 9, c);
        null != b.gdprApplies && z(a, 3, b.gdprApplies)
    }

    function VE(a) {
        const b = new lv(a.pubWin, -1, V(vo));
        if (!fv(b)) return Promise.resolve(null);
        if (!V(cn)) return kv(b);
        const c = az(),
            d = dz(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = dz(c, 25, []);
            g.push(f);
            fz(c, 25, g)
        });
        d || null === d || (fz(c, 24, null), b.addEventListener(f => {
            if (av(f)) {
                fz(c, 24, f);
                UE(a.l, f);
                for (const g of dz(c, 25, [])) g.resolve(f);
                fz(c, 25, [])
            } else fz(c, 24, null)
        }));
        return e
    };

    function WE(a) {
        const b = {};
        b.dtd = XE((new Date).getTime(), lj);
        return wh(b, a)
    }

    function XE(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var ZE = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => YE(e));
        return Zi(a, "adpnt", (f, g) => {
            var h;
            if (Ej(g, c.contentWindow)) {
                f = Hj(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    null != a.googletag || (a.googletag = {
                        cmd: []
                    });
                    const l = null != (h = a.googletag.queryIds) ? h : [];
                    l.push(f);
                    500 < l.length && l.shift();
                    a.googletag.queryIds = l
                } catch (l) {}
                e.dataset.adStatus && Vi("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus =
                    "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function YE(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function $E(a, b, c) {
        try {
            if (!Fg(c.origin) || a.j && !Ej(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Cb[d]) && a.Z.zb(168, () => {
            e.call(a, b, c)
        })
    }
    class aF extends Xj {
        constructor(a, b) {
            var c = Si,
                d = Xh;
            super();
            this.A = a;
            this.j = b;
            this.Z = c;
            this.xa = d;
            this.Cb = {};
            this.ce = this.Z.la(168, (e, f) => void $E(this, e, f));
            this.ue = this.Z.la(169, (e, f) => Ij(this.A, "ras::xsf", this.xa, e, f));
            this.pa = [];
            this.ya(this.Cb);
            this.pa.push(Yi(this.A, "sth", this.ce, this.ue))
        }
        l() {
            for (const a of this.pa) a();
            this.pa.length = 0;
            super.l()
        }
    };
    class bF extends aF {
        constructor(a, b = null) {
            super(a, b);
            this.A = a
        }
    };
    var cF = class extends bF {
        constructor(a, b) {
            super(a, V(yn) ? b : null);
            this.B = b;
            this.C = () => {};
            L(this.B, "load", this.C)
        }
        l() {
            this.B && Ue(this.B, "load", this.C);
            super.l();
            this.B = null
        }
        ya(a) {
            a["adsense-labs"] = b => {
                if (b = Hj(b).settings) try {
                    var c = new hf(JSON.parse(b));
                    if (Hc(c, 1)) {
                        var d = this.A,
                            e = x(c, 1) || "";
                        if (V(an) ? null != bA({
                                win: d,
                                Wb: ED()
                            }).j : 1) {
                            if (V(an)) {
                                var f = bA({
                                    win: d,
                                    Wb: ED()
                                });
                                if (null != f.j) {
                                    GD("ok");
                                    var g = FD(f.j.value)
                                } else GD(f.l.message), g = {}
                            } else g = FD(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function dF(a) {
        a.B = a.D;
        a.J.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        eF(a)
    }

    function fF(a, b) {
        (a.j.contentWindow || a.j.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function eF(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.B}px, 0px)`;
        a.j.style.clip = b;
        a.F.style.clip = b;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.F.setAttribute("height", a.B);
        a.F.style.height = a.B + "px";
        a.C.style.height = a.B + "px";
        a.J.style.height = a.B + "px"
    }

    function gF(a, b) {
        b = qg(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.M = nh(a.J).y;
        a.L = Fj(a.A);
        if (a.M + a.B < a.L) return "2";
        if (a.M > Aj(a.A) - a.A.innerHeight) return "3";
        b = a.L;
        a.j.setAttribute("height", a.D);
        a.j.style.height = a.D + "px";
        a.F.style.overflow = "hidden";
        a.J.style.position = "relative";
        a.J.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.M, a.B);
        hh(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        hh(a.j, {
            clip: b
        });
        hh(a.F, {
            clip: b
        });
        return "0"
    }

    function hF(a, b = {}) {
        a.W && (b.eid = a.W);
        b.qid = a.Db;
        Vi("eoscrl", b, mj(String(a.Eb)))
    }
    class iF extends bF {
        constructor(a, b) {
            super(a.K, b);
            this.F = a.na.firstElementChild;
            this.C = a.na;
            this.J = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.B = parseInt(this.C.style.height, 10);
            this.W = null;
            this.Fb = this.Wc = !1;
            this.Db = "";
            this.za = this.L = this.D = 0;
            this.de = this.B / 5;
            this.M = nh(this.J).y;
            this.Eb = null;
            this.be = Pe(Ui(651, () => {
                this.M = nh(this.J).y;
                var c = this.L;
                this.L = Fj(this.A);
                this.B < this.D ? (c = this.L - c, 0 < c && (this.za += c, this.za >= this.de ? (dF(this),
                    fF(this, this.D)) : (this.B = Math.min(this.D, this.B + c), fF(this, c), eF(this)))) : Ue(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.be; of .requestAnimationFrame ? of .requestAnimationFrame(c) : c()
            }
        }
        ya(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Hj(b);
                this.W = b.i_expid;
                this.Db = b.qid;
                this.Eb = b.gen204_fraction;
                this.Wc || (this.Wc = !0, b = gF(this, b), "0" === b && L(this.A, "scroll", this.O, Qe), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), hF(this, {
                    err: b
                }))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Fb || (this.Fb = !0, dF(this), Ue(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Ue(this.A, "scroll", this.O, Qe);
            super.l()
        }
    };

    function jF(a) {
        const b = a.L.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.A.innerHeight) && !c
    }
    class kF extends Xj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.C = b;
            this.L = c;
            this.D = 0;
            this.B = jF(this);
            this.J = Oe(this.F, this);
            this.j = Ui(433, () => {
                var d = this.J; of .requestAnimationFrame ? of .requestAnimationFrame(d) : d()
            });
            L(this.A, "scroll", this.j, Qe)
        }
        F() {
            const a = jF(this);
            if (a && !this.B) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && ($i(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && Ue(this.A, "scroll", this.j, Qe))
            }
            this.B = a
        }
    };

    function lF(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Lf(a.j.T() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = mF(a, b, c, a.j.j.elementsFromPoint(vf(c.left + c.width / 2, c.left, c.right - 1), vf(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = mF(a, b, c, a.j.j.elementsFromPoint(vf(c.left + c.width / 2, c.left, c.right - 1), vf(c.top + 2, c.top, c.bottom - 1)), 2, e.Fa),
            g = mF(a, b, c, a.j.j.elementsFromPoint(vf(c.left + 2, c.left, c.right - 1), vf(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Fa, ...f.Fa]);
        const h = mF(a, b, c, a.j.j.elementsFromPoint(vf(c.right - 1 - 2, c.left, c.right - 1), vf(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Fa, ...f.Fa, ...g.Fa]);
        var l = nF(a, b, c),
            k = n => tb(a.A, n.overlapType) && tb(a.B, n.overlapDepth) && tb(a.l, n.overlapDetectionPoint);
        e = pb([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = pb(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = Mf(a.j.j);
        const m = new Tg(c.left, c.top, c.width, c.height);
        e = [...qb(e, n => new Tg(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Bb(qb(k, n => Vg(m, n.elementRect))), ...pb(Vg(m, new Tg(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? oF(m, e) : pF(c, e)
        }
    }

    function qF(a, b) {
        const c = a.j.T(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new li,
                                        m = ki(k, () => lF(a, l));
                                    m && (k.j.length && (m.executionTime = Math.round(Number(k.j[0].duration))), h.disconnect(), e(m))
                                }, rF);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function mF(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Fa: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (tb(f, p)) continue;
            h.push(p);
            const u = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(sF(a, c, p, u, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(sF(a, c, p, u, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = p;
                const A = l.j.Me(k, m);
                if (!A) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: y,
                    Qa: F
                } = tF(l, k, A, m) || {},
                {
                    suspectAncestor: E,
                    Qa: G
                } = tF(l, m, A, k) || {};l = y && F && E && G ? F <= G ? {
                    suspectAncestor: y,
                    overlapType: uF[F]
                } : {
                    suspectAncestor: E,
                    overlapType: vF[G]
                } : y && F ? {
                    suspectAncestor: y,
                    overlapType: uF[F]
                } : E && G ? {
                    suspectAncestor: E,
                    overlapType: vF[G]
                } : null
            }
            const {
                suspectAncestor: w,
                overlapType: t
            } = l || {};
            w && t ? g.push(sF(a, c, p, u, t, e, w)) : g.push(sF(a, c, p, u, 9, e))
        }
        return {
            entries: g,
            Fa: h
        }
    }

    function nF(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = hg(b, a.j.T());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(sF(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(sF(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(sF(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function oF(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ug(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function pF(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function sF(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (tb(a.A, e) && tb(a.l, f)) {
            b = new Og(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = wF(a, c)) && Sg(b, a)) c = 4;
            else {
                a = xF(c, d);
                if (Hb) {
                    e = rh(c, "paddingLeft");
                    f = rh(c, "paddingRight");
                    var l = rh(c, "paddingTop"),
                        k = rh(c, "paddingBottom");
                    e = new Og(l, f, k, e)
                } else e = kh(c, "paddingLeft"), f = kh(c, "paddingRight"), l = kh(c, "paddingTop"), k = kh(c, "paddingBottom"), e = new Og(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                Sg(b, new Og(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = xF(c, d), c = Sg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function tF(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.T();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = hg(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Qa: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Qa: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Qa: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = yF(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Qa: 4
                    }
                }
            }
        }
        return (a = yF(a, e, b)) ? {
                suspectAncestor: a,
                Qa: 5
            } :
            null
    }

    function yF(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = hg(f, a.j.T());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function wF(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Og(a.top, a.right, a.bottom, a.left)
    }

    function xF(a, b) {
        if (!Hb || 9 <= Number(Xb)) {
            var c = kh(a, "borderLeftWidth");
            d = kh(a, "borderRightWidth");
            e = kh(a, "borderTopWidth");
            a = kh(a, "borderBottomWidth");
            c = new Og(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = th(a, "borderLeft");
            var d = th(a, "borderRight"),
                e = th(a, "borderTop");
            a = th(a, "borderBottom");
            c = new Og(e, d, a, c)
        }
        return new Og(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class zF {
        constructor(a) {
            var b = AF;
            this.j = Gf(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const uF = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        vF = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    pb(kg({
        sh: 1,
        th: 2,
        bj: 3,
        cj: 4,
        ej: 5,
        mh: 6,
        oh: 7,
        rh: 8,
        ti: 9,
        dj: 10,
        qh: 11,
        aj: 12,
        lh: 13
    }), a => !tb([1, 2], a));
    kg({
        Dg: 1,
        ui: 2,
        Og: 3,
        fj: 4
    });
    const AF = kg({
            Eg: 1,
            ij: 2,
            fi: 3,
            Ri: 4
        }),
        rF = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function BF(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function CF(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function DF(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function EF(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.Mc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        hh(a, "transition", b.join(","))
    }
    var FF = Me(function() {
        if (Hb) return Ub("10.0");
        var a = Pf(document, "DIV"),
            b = Mb ? "-webkit" : Kb ? "-moz" : Hb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = qe("div", {
            style: c
        });
        rf(a, b);
        a = a.firstChild;
        b = a.style[Ef("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[ih(a, "transition")] || "")
    });

    function GF(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function HF(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function IF(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function JF(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(KF, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function LF(a) {
        var b = JF(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var MF = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function NF(a) {
        let b = a.Z;
        a.J = function() {};
        OF(a, a.F, b);
        let c = a.F.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : hg(c, b)
            } catch (g) {
                IF(a.j, "c")
            }
            const f = PF(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.W = !0);
            if (d && !f && QF(e)) {
                HF(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && RF(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Eb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !bg(b)) {
                        HF(a.j, "c");
                        break
                    }
                } catch (g) {
                    HF(a.j,
                        "c");
                    break
                }
            }
        }
        a.I && a.B && SF(a);
        return a.j
    }

    function TF(a) {
        function b() {
            UF(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let n = 0; n < m.length; n++) hh(h, m[n], "0px")
                };
                k(VF);
                k(WF)
            }
        }
        const c = a.F;
        c.style.overflow = a.Db ? "visible" : "hidden";
        a.I && (a.L ? (EF(c, XF), EF(a.L, XF)) : EF(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.G && null != a.A && (a.ya || a.A > a.G) ? a.A : null,
            e = null != a.D && null != a.l && (a.ya || a.l > a.D) ? a.l : null;
        if (a.M) {
            const k = a.M.length;
            for (let m = 0; m < k; m++) UF(a.M[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            l = a.W;
        a.I ? r.setTimeout(b, 1E3) : b()
    }

    function YF(a) {
        if (a.B && !a.Cb || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        NF(a);
        a.B = b;
        if (!b || null != a.pa && !JF(a.j, a.pa, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.G = null, a.D = null);
        if (null == a.G && null !== a.A || null == a.D && null !== a.l) a.I = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        TF(a);
        return NF(a)
    }

    function RF(a, b) {
        let c = !1;
        "none" == b.display && (HF(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || HF(a.j, "v");
        "hidden" == b.overflow && HF(a.j, "o");
        "absolute" == b.position ? (HF(a.j, "a"), c = !0) : "fixed" == b.position && (HF(a.j, "f"), c = !0);
        return c
    }

    function OF(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = ZF(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && GF(a.j, 0, "o"), d & 4 && GF(a.j, 1, "o"));
        return !(d & 1)
    }

    function PF(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (t) {
            IF(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = qg(f),
            h = c.getAttribute("height"),
            l = qg(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = OF(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            u = e && e.height,
            w = sg(m) == a.G && sg(n) == a.D;
        m = w ? m : p;
        u = w ? n : u;
        p = sg(m);
        w = sg(u);
        g = null !== a.G && (null !== p && a.G >= p || null !== g && a.G >= g);
        w = null !== a.D && (null !== w && a.D >= w || null !== l && a.D >= l);
        l = !b && QF(d);
        w = b || w || l || !(f || m || d && (!$F(String(d.minWidth)) || !aG(String(d.maxWidth))));
        k = b || g || l || k || !(h || u || d && (!$F(String(d.minHeight)) || !aG(String(d.maxHeight))));
        bG(a, 0, w, c, "width", f, a.G, a.A);
        cG(a, 0, "d", w, e, d, "width", m, a.G, a.A);
        cG(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.G, a.A);
        cG(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
        a.Fb ? (c = /^html|body$/i.test(c.nodeName), f = sg(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.B && !c && h && (e.setProperty("height", "auto", "important"), d && !$F(String(d.minHeight)) && e.setProperty("min-height",
            "0px", "important"), d && !aG(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (bG(a, 1, k, c, "height", h, a.D, a.l), cG(a, 1, "d", k, e, d, "height", u, a.D, a.l), cG(a, 1, "m", k, e, d, "minHeight", e && e.minHeight, a.D, a.l), cG(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l));
        return b
    }

    function SF(a) {
        function b() {
            if (0 < c) {
                var k = hg(e, d) || {};
                const m = sg(k.width);
                k = sg(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else r.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.Z,
            e = a.F,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        r.setTimeout(function() {
            l = r.setInterval(b, 16)
        }, 990)
    }

    function ZF(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = hg(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function bG(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = qg(f);
                null == f && (IF(a.j, "n"), GF(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.I) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, l - n);
                                k && k(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else GF(a.j, b, "d")
        }
    }

    function cG(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? $F(f) : aG(f)) || (f = sg(f), null == f ? HF(a.j, "p") : null != l && HF(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? $F(h) : aG(h)) return;
                h = sg(h);
                null == h && (IF(a.j, "p"), GF(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.I) {
                            const m = Math.max(h + k - (l || 0), 0),
                                n = a.J;
                            a.J = function(p, u) {
                                p == b && (e[g] = m - u + "px");
                                n && n(p, u)
                            }
                        } else e[g] = k + "px"
                } else GF(a.j, b, c)
        }
    }
    var hG = class {
        constructor(a, b, c, d, e, f, g) {
            this.Eb = a;
            this.M = c;
            this.F = b;
            this.Z = (a = this.F.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new dG(this.F);
            this.B = g;
            this.Cb = eG(this.C, d.Sc, d.height, d.Md);
            this.G = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = fG(d.width);
            this.l = fG(d.height);
            this.O = this.B ? fG(d.opacity) : null;
            this.pa =
                d.check;
            this.I = "animate" == d.Sc && !gG(this.C, this.l, this.za) && FF();
            this.Db = !!d.Yc;
            this.j = new MF;
            gG(this.C, this.l, this.za) && HF(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && HF(this.j, "b");
            this.L = this.J = null;
            this.W = !1;
            this.ya = !!d.xf;
            this.Fb = !!d.Kd;
            this.za = !!d.Md
        }
    };

    function gG(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, fG(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var dG = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && eg(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || r;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && BF(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function eG(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return gG(a, c, d)
        }
    }

    function QF(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function iG(a, b, c, d) {
        return YF(new hG(a, b, d, c, null, null, !0))
    }
    var jG = new MF("s", ""),
        KF = RegExp("[lonvafrbpEe]", "g");

    function aG(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function $F(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function UF(a, b, c) {
        null !== b && null !== qg(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== qg(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var VF = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        WF = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let kG = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        lG = VF;
    for (let a = 0; a < lG.length; a++) kG += ", " + lG[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    lG = WF;
    for (let a = 0; a < lG.length; a++) kG += ", " + lG[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var XF = kG;

    function fG(a) {
        return "string" === typeof a ? qg(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function mG(a, b, c, d, e, f, g, h, l, k) {
        const m = window;
        if (!a.j || !m) return k.err = "2", nG(a, k, null), !1;
        if ("no_rsz" === f) return k.err = "7", nG(a, k, null), !0;
        const n = new dG(a.j);
        if (!n.j) return k.err = "3", nG(a, k, null), !1;
        var p = n.getWidth();
        null != p && (k.w = p);
        p = n.getHeight();
        null != p && (k.h = p);
        if (eG(n, f, d, l)) {
            var u = a.j.ownerDocument.getElementById(a.j.id + "_anchor");
            p = u ? [a.j] : null;
            u = u || a.j;
            const w = V($n);
            b = iG(m, u, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Sc: f,
                Yc: g,
                xf: h,
                Kd: w,
                Md: l
            }, p);
            k.r_cui && rg(k.r_cui.toString()) && M(u, {
                height: (null ===
                    d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (k.nw = c);
            null != d && (k.nh = d);
            k.rsz = b.toString();
            k.abl = LF(b);
            k.frsz = ("force" === f).toString();
            k.err = "0";
            nG(a, k, n);
            sb(O(Ri).l(), t => tb([248427477, 248427478], t)) && a.A === m && qF(new zF(a.A), u).then(t => {
                kj(8, [t]);
                return t
            }).then(t => {
                Vi("resize-ovlp", {
                    adf: a.B,
                    eid: a.F,
                    io: Number(t.isOverlappingOrOutsideViewport),
                    oa: t.overlappedArea.toFixed(2),
                    qid: k.qid || "",
                    slot: a.J,
                    url: a.L,
                    vp: t.viewportSize.width + "x" + t.viewportSize.height
                }, 1)
            }).catch(t => {
                Vi("resize-ovlp-err", {
                        err: t.message
                    },
                    1)
            });
            return !0
        }
        k.err = "1";
        nG(a, k, n);
        return !1
    }

    function oG(a, b, c) {
        const d = {
            scrl: Fj(a.A || window),
            adk: a.D,
            adf: a.B,
            fmt: a.C
        };
        b && (d.str = gG(b, qg(c.r_nh), rg(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        jg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function nG(a, b, c) {
        const d = mj(String(b.gen204_fraction));
        b = oG(a, c, b);
        b.url = a.A.document.URL;
        Vi("resize", b, d)
    }
    class pG extends bF {
        constructor(a, b, c) {
            super(a, b);
            this.D = String(c.google_ad_unit_key || "");
            this.B = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.F = LD(c);
            this.J = String(c.google_ad_slot || "");
            this.L = String(c.google_page_url || "")
        }
        ya(a) {
            a["resize-me"] = (b, c) => {
                b = Hj(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = qg(b.r_nw),
                        f = qg(b.r_nh),
                        g = qg(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null;
                    e = mG(this, d, e, f, g, h, rg(b.r_ao), rg(b.r_ifr), rg(b.r_cab), b);
                    d = {
                        msg_type: "resize-result"
                    };
                    d.r_str = h;
                    d.r_status = e;
                    c = c.source;
                    d.googMsgType = "sth";
                    c.postMessage(JSON.stringify(d), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
        l() {
            super.l();
            this.j = null
        }
    };
    const qG = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const rG = /^blogger$/,
        sG = /^wordpress(.|\s|$)/i,
        tG = /^joomla!/i,
        uG = /^drupal/i,
        vG = /\/wp-content\//,
        wG = /\/wp-content\/plugins\/advanced-ads/,
        xG = /\/wp-content\/themes\/genesis/,
        yG = /\/wp-content\/plugins\/genesis/;

    function zG(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (wG.test(e)) return 5;
                if (yG.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", xG.test(e) || yG.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (rG.test(f)) return 1;
                if (sG.test(f)) return 2;
                if (tG.test(f)) return 3;
                if (uG.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", vG.test(d))) return 2;
        return 0
    };
    let AG = navigator;
    var BG = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        CG = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return BG(a.toLowerCase())
        };
    const DG = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        EG = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        FG = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var GG = () => {
        const a = new Qo;
        r.SVGElement && r.document.createElementNS && a.set(0);
        const b = xg();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        r.TextDecoder && r.TextEncoder && a.set(4);
        return Po(a)
    };
    var HG = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function IG(a, b, c) {
        const d = gg("LINK", a);
        try {
            if (d.rel = "preload", $a("preload", "stylesheet")) {
                d.href = Id(b).toString();
                const e = uf('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else d.href = b instanceof Dd ? Id(b).toString() : b instanceof Pd ? Qd(b) : Qd(Vd(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    let JG = r;
    const LG = a => {
        const b = new Map([
            ["domain", r.location.hostname]
        ]);
        KG[3] >= Ha() && b.set("adsid", KG[1]);
        return dh(HG.get(a).js, b)
    };
    let KG, MG;
    const NG = () => {
        JG = r;
        KG = JG.googleToken = JG.googleToken || {};
        const a = Ha();
        KG[1] && KG[3] > a && 0 < KG[2] || (KG[1] = "", KG[2] = -1, KG[3] = -1, KG[4] = "", KG[6] = "");
        MG = JG.googleIMState = JG.googleIMState || {};
        HG.has(MG[1]) || (MG[1] = ".google.com");
        Array.isArray(MG[5]) || (MG[5] = []);
        "boolean" !== typeof MG[6] && (MG[6] = !1);
        Array.isArray(MG[7]) || (MG[7] = []);
        "number" !== typeof MG[8] && (MG[8] = 0)
    };
    var OG = a => {
        NG();
        HG.has(a) && (MG[1] = a)
    };
    const PG = {
        Bc: () => 0 < MG[8],
        uf: () => {
            MG[8]++
        },
        vf: () => {
            0 < MG[8] && MG[8]--
        },
        wf: () => {
            MG[8] = 0
        },
        Cj: () => !1,
        qd: () => MG[5],
        dd: a => {
            try {
                a()
            } catch (b) {
                r.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        Id: () => {
            if (!PG.Bc()) {
                var a = r.document,
                    b = e => {
                        e = LG(e);
                        a: {
                            try {
                                var f = uf("script[nonce]");
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        IG(a, e.toString(), f);
                        f = gg("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => r.processGoogleToken({}, 2);
                        He(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), PG.uf()
                        } catch (g) {}
                    },
                    c = MG[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                r.setTimeout(() => r.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function QG(a) {
        NG();
        const b = JG.googleToken[5] || 0;
        a && (0 != b || KG[3] >= Ha() ? PG.dd(a) : (PG.qd().push(a), PG.Id()));
        KG[3] >= Ha() && KG[2] >= Ha() || PG.Id()
    }
    var SG = a => {
        r.processGoogleToken = r.processGoogleToken || ((b, c) => RG(b, c));
        QG(a)
    };
    const RG = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        NG();
        1 == b ? PG.wf() : PG.vf();
        var h = JG.googleToken = JG.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !PG.Bc() && (!(KG[3] >= Ha()) || "NT" == KG[1]);
        var k = !(KG[3] >= Ha()) && 0 != b;
        if (l || d || k) d = Ha(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Mh(r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, NG();
        if (l || !PG.Bc()) {
            b = PG.qd();
            for (c = 0; c < b.length; c++) PG.dd(b[c]);
            b.length = 0
        }
    };
    const TG = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        UG = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function VG(a) {
        try {
            let e, f;
            const g = null == (e = a.performance) ? void 0 : null == (f = e.getEntriesByType("navigation")) ? void 0 : f[0];
            if (null == g ? 0 : g.type) {
                let h;
                return null != (h = TG.get(g.type)) ? h : null
            }
        } catch (e) {}
        let b, c, d;
        return null != (d = UG.get(null == (b = a.performance) ? void 0 : null == (c = b.navigation) ? void 0 : c.type)) ? d : null
    };
    var WG = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Z = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };

    function XG() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function YG(a = window) {
        return !a.PeriodicSyncManager
    }

    function ZG(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = null == a ? void 0 : a.get(WG.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(Z.issuerOrigin)) && e.push(d);
        return e
    }

    function $G(a) {
        return V(Bo) ? !0 : a.some(b => b.hasRedemptionRecord)
    }

    function aH(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function bH(a, b) {
        a = V(Bo) ? a.filter(c => 12 !== c.state).map(c => c.issuerOrigin) : a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: V(Bo) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !V(Bo) && b && 0 < Object.keys(b).length && (a.additionalSigningData = bc(JSON.stringify(b)));
        return a
    }

    function cH(a, b, c) {
        let d;
        const e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function dH() {
        const a = `${WG.issuerOrigin}${WG.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: WG.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        cH(WG.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            cH(WG.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? cH(WG.issuerOrigin, 6, !0) : cH(WG.issuerOrigin, 5)
        })
    }

    function eH() {
        const a = `${WG.issuerOrigin}${WG.issuancePath}`;
        cH(WG.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            cH(WG.issuerOrigin, 10);
            return dH()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return cH(WG.issuerOrigin, 10), dH();
            cH(WG.issuerOrigin, 9)
        })
    }

    function fH() {
        cH(WG.issuerOrigin, 13);
        return document.hasTrustToken(WG.issuerOrigin).then(a => a ? dH() : eH())
    }

    function gH() {
        cH(Z.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Z.issuerOrigin}${Z.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            cH(Z.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                cH(Z.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) cH(Z.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    cH(Z.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Z.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Z.issuerOrigin}${Z.getStatePath}`;
                cH(Z.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Z.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    cH(Z.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = Ig(window);
            return a.then(e => {
                const f = `${Z.issuerOrigin}${Z.issuancePath}`;
                return e && e.srqt && e.cs ? (cH(Z.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    cH(Z.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return cH(Z.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    cH(Z.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                cH(Z.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        cH(Z.issuerOrigin, e.state);
                        const f = Fo(Ao);
                        Math.random() <= f && Ph({
                            state: e.state,
                            err: e.error.toString()
                        })
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function hH(a) {
        if (document.hasTrustToken && !V(yo) && a.A) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === WG.issuerOrigin)) {
                    let d = b.get(WG.issuerOrigin);
                    d || (d = fH(), b.set(WG.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === Z.issuerOrigin) && (a = b.get(Z.issuerOrigin), a || (a = gH(), b.set(Z.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var iH = class extends Xj {
        constructor(a, b, c) {
            super();
            this.A = a;
            this.j = [];
            b && XG() && this.j.push(WG);
            c && this.j.push(Z);
            if (document.hasTrustToken && !V(yo)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.A ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function jH(a) {
        var b;
        if (a = null == (b = a.navigator) ? void 0 : b.userActivation) {
            b = 0;
            if (null == a ? 0 : a.hasBeenActive) b |= 1;
            if (null == a ? 0 : a.isActive) b |= 2;
            return b
        }
    };
    const kH = /[+, ]/;

    function lH(a, b) {
        const c = a.H;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Ng(d);
        var h = Ro(d, c.google_ad_width, c.google_ad_height);
        var l = To(g).Gc;
        var k = d.top == d ? 0 : bg(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != k ? h || 2 != k ? h && 1 == k ? m = 7 : h && 2 == k && (m = 8) : m = 6 : m = 5;
        l && (m |= 16);
        l = "" + m;
        k = Uo(d);
        m = !!c.google_page_url;
        e.google_iframing = l;
        0 != k && (e.google_iframing_environment = k);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (l = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < l.indexOf("%");) try {
                l = decodeURIComponent(l)
            } catch (p) {
                break
            }
            c.google_page_url = l;
            m = !!l
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && bg(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch (p) {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = Xg()) && d.referrer || "";
        e.google_referrer_url = d;
        So(e, c);
        e =
            c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in qG), 2 <= e.length && (d = d || e[e.length - 2] in qG), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = mH(a, b);
        d = a.H;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" ===
        d.google_ad_client && nH.test(f) && (g = "/pagead/lopri?");
        a = wh(b, `https://${e}${g}` + (Oc(a.U, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function oH(a) {
        return encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + vh({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        })
    }

    function pH(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch (c) {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = Nf(a);
                if (c) {
                    const d = c.frameElement;
                    if (d && bg(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch (c) {}
            b = null
        }
        else b = null;
        return b
    }

    function qH(a, b) {
        b.eid = LD(a.pubWin);
        const c = a.H.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function rH(a, b) {
        a = (a = eg(a.pubWin)) && a.document ? No(a.document, a) : new yf(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function sH(a) {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    }

    function tH(a) {
        const b = ai();
        b && (a.debug_experiment_id = b);
        a.creatives = sH(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = sH(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    }

    function uH(a, b, c) {
        const d = a.H;
        var e = a.pubWin,
            f = a.K,
            g = Ng(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Xg(e)) && ya(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = To(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Gc || (b.usrc = 1));
        h = d.google_trust_token_additional_signing_data || {};
        h.url = b.url;
        d.google_trust_token_additional_signing_data = h;
        g.url != (b.loc || b.url) && (b.top =
            g.url);
        a.mb && (b.etu = a.mb);
        0 <= a.B && (b.eae = a.B);
        (c = uE(d, f, f ? Vz(c, f) : null)) && (b.fc = c);
        if (!Fh(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode && (h = (new Hf(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const aa = h.contentWindow.document;
                    aa.open();
                    aa.write(me(ye));
                    aa.close();
                    g += aa.documentMode
                } catch (aa) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, k, m, n, p, u, w, t, A;
        try {
            var y = e.screenX;
            l = e.screenY
        } catch (aa) {}
        try {
            k = e.outerWidth,
                m = e.outerHeight
        } catch (aa) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (aa) {}
        try {
            u = e.screenLeft, w = e.screenTop
        } catch (aa) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (aa) {}
        try {
            t = e.screen.availWidth, A = e.screen.availTop
        } catch (aa) {}
        b.brdim = [u, w, y, l, t, A, k, m, n, p].join();
        y = 0;
        void 0 === r.postMessage && (y |= 1);
        0 < y && (b.osd = y);
        b.vis = BF(e.document);
        y = a.ga;
        e = oE(d) ? jG : YF(new hG(e, y, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = LF(e);
        if (!oE(d) && (e = Gh(d), null != e)) {
            y = 0;
            a: {
                try {
                    {
                        var F =
                            d.google_async_iframe_id;
                        const aa = window.document;
                        if (F) var E = aa.getElementById(F);
                        else {
                            var G = aa.getElementsByTagName("script"),
                                I = G[G.length - 1];
                            E = I && I.parentNode || null
                        }
                    }
                    if (F = E) {
                        E = [];
                        G = 0;
                        for (var ja = Date.now(); 100 >= ++G && 50 > Date.now() - ja && (F = pH(F));) 1 === F.nodeType && E.push(F);
                        var Aa = E;
                        b: {
                            for (ja = 0; ja < Aa.length; ja++) {
                                c: {
                                    var Y = Aa[ja];
                                    try {
                                        if (Y.parentNode && 0 < Y.offsetWidth && 0 < Y.offsetHeight && Y.style && "none" !== Y.style.display && "hidden" !== Y.style.visibility && (!Y.style.opacity || 0 !== Number(Y.style.opacity))) {
                                            const aa =
                                                Y.getBoundingClientRect();
                                            var T = 0 < aa.right && 0 < aa.bottom;
                                            break c
                                        }
                                    } catch (aa) {}
                                    T = !1
                                }
                                if (!T) {
                                    var cb = !1;
                                    break b
                                }
                            }
                            cb = !0
                        }
                        if (cb) {
                            b: {
                                const aa = Date.now();cb = /^html|body$/i;T = /^fixed/i;
                                for (Y = 0; Y < Aa.length && 50 > Date.now() - aa; Y++) {
                                    const Gd = Aa[Y];
                                    if (!cb.test(Gd.tagName) && T.test(Gd.style.position || lh(Gd, "position"))) {
                                        var xb = Gd;
                                        break b
                                    }
                                }
                                xb = null
                            }
                            break a
                        }
                    }
                } catch (aa) {}
                xb = null
            }
            xb && xb.offsetWidth * xb.offsetHeight <= 4 * e.width * e.height && (y = 1);
            b.pfx = y
        }
        a: {
            if (.05 > Math.random() && f) try {
                const aa = f.document.getElementsByTagName("head")[0];
                var Wc = aa ? zG(aa) : 0;
                break a
            } catch (aa) {}
            Wc = 0
        }
        f = Wc;
        0 !== f && (b.cms = f);
        d.google_lrv !== J(a.U, 2) && (b.alvm = d.google_lrv || "none")
    }

    function vH(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : cg(() => {
            c++;
            return !1
        }, !0, !0, a);
        c && (b.nhd = c)
    }

    function wH(a, b) {
        const c = dz(b, 8, {});
        b = dz(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function xH(a, b, c) {
        const d = a.H,
            e = a.H;
        b.dt = lj;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        var f;
        a: {
            try {
                const P = r.performance;
                if (P && P.timing && P.now) {
                    var g = P.timing.navigationStart + Math.round(P.now()) - P.timing.domLoading;
                    break a
                }
            } catch (P) {}
            g = null
        }
        const h = g;
        (f = h ? XE(h, r.Date.now() - lj, 1E6) : null) && (b.bdt = f);
        b.idt = XE(a.I, lj);
        const l = a.H;
        b.shv = J(a.U, 2);
        a.Ua && (b.mjsv = a.Ua);
        "sa" == l.google_loader_used ? b.ptt = 5 : "aa" == l.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(l.google_loader_used) && (b.saldr =
            l.google_loader_used);
        const k = Xg(a.pubWin);
        if (k) {
            b.is_amp = 1;
            const P = k || Xg();
            b.amp_v = P && P.mode ? +P.mode.version || null : null; {
                const ba = k || Xg();
                if (ba && ba.container) {
                    const oa = ba.container.split(","),
                        ia = [];
                    for (let jb = 0; jb < oa.length; jb++) ia.push(Wg[oa[jb]] || "x");
                    var m = ia.join()
                } else m = null
            }
            const U = m;
            U && (b.act = U)
        }
        Hh(a.pubWin) && (b.abxe = 1);
        if ("_gfp_a_" in a.pubWin) {
            const P = a.pubWin._gfp_a_;
            if ("boolean" !== typeof P) throw Error(`Illegal value of ${"_gfp_a_"}: ${P}`);
            if (P) {
                const U = new QD(a.pubWin),
                    ba = MD(U, "__gads",
                        c);
                ba && (b.cookie = ba);
                if (V(co)) {
                    const oa = MD(U, "__gpi", c);
                    oa && !oa.includes("&") && (b.gpic = oa)
                }
                V(eo) && "1" === MD(U, "__gpi_opt_out", c) && (b.gpico = "1", b.pdopt = "1")
            }
        }
        const n = az(),
            p = dz(n, 8, {}),
            u = d.google_ad_section;
        p[u] && (b.prev_fmts = p[u]);
        const w = dz(n, 9, {});
        w[u] && (b.prev_slotnames = w[u].toLowerCase());
        wH(d, n);
        const t = dz(n, 15, 0);
        0 < t && (b.nras = String(t)); {
            const P = Xg(window);
            if (P) {
                {
                    const U = P || Xg();
                    if (U) {
                        let ba = U.pageViewId;
                        const oa = U.clientId;
                        "string" === typeof oa && (ba += oa.replace(/\D/g, "").substr(0, 6));
                        var A = ba
                    } else A =
                        null
                }
                var y = +A
            } else {
                var F = Ng(window),
                    E = F.google_global_correlator;
                E || (F.google_global_correlator = E = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
                y = E
            }
        }
        b.correlator = dz(n, 7, y);
        V(ko) && (b.rume = 1);
        if (d.google_ad_channel) {
            const P = dz(n, 10, {});
            let U = "";
            const ba = d.google_ad_channel.split(kH);
            for (let oa = 0; oa < ba.length; oa++) {
                const ia = ba[oa];
                P[ia] ? U += ia + "+" : P[ia] = !0
            }
            b.pv_ch = U
        }
        if (d.google_ad_host_channel) {
            var G = dz(n, 11, []);
            const P = d.google_ad_host_channel.split("|");
            let U = -1;
            const ba = [];
            for (let ia = 0; ia < P.length; ia++) {
                const jb =
                    P[ia].split(kH);
                G[ia] || (G[ia] = {});
                let Lb = "";
                for (let Xc = 0; Xc < jb.length; Xc++) {
                    const Pg = jb[Xc];
                    "" !== Pg && (G[ia][Pg] ? Lb += "+" + Pg : G[ia][Pg] = !0)
                }
                Lb = Lb.slice(1);
                ba[ia] = Lb;
                "" !== Lb && (U = ia)
            }
            let oa = "";
            if (-1 < U) {
                for (let ia = 0; ia < U; ia++) oa += ba[ia] + "|";
                oa += ba[U]
            }
            b.pv_h_ch = oa
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        var I = d.google_ad_client;
        try {
            const P = Ng(window);
            let U = P.google_prev_clients;
            U || (U = P.google_prev_clients = {});
            if (I in U) var ja = 1;
            else U[I] = !0, ja = 2
        } catch (P) {
            ja = 0
        }
        b.pv = ja;
        const Aa = a.pubWin.document,
            Y = a.H;
        var T = a.pubWin;
        var cb = Aa.domain,
            xb = (B(c, 5) && Wz(T) ? T.document.cookie : null) || "",
            Wc = a.pubWin.screen,
            aa = Aa.referrer,
            Gd = yh();
        if (Xg()) var os = window.gaGlobal || {};
        else {
            var kk = Math.round((new Date).getTime() / 1E3),
                lk = Y.google_analytics_domain_name,
                Qg = "undefined" == typeof lk ? CG("auto", cb) : CG(lk, cb),
                PH = -1 < xb.indexOf("__utma=" + Qg + "."),
                QH = -1 < xb.indexOf("__utmb=" + Qg),
                mk;
            if (!(mk = ($g() || window).gaGlobal)) {
                var RH = {};
                mk = ($g() || window).gaGlobal = RH
            }
            var sa = mk,
                ps = !1;
            if (PH) {
                var nk = xb.split("__utma=" + Qg + ".")[1].split(";")[0].split(".");
                QH ? sa.sid = nk[3] : sa.sid || (sa.sid = kk + "");
                sa.vid = nk[0] + "." + nk[1];
                sa.from_cookie = !0
            } else {
                sa.sid || (sa.sid = kk + "");
                if (!sa.vid) {
                    ps = !0;
                    var SH = Math.round(2147483647 * Math.random()),
                        qs = Gd;
                    let P, U;
                    var TH = AG.appName,
                        UH = AG.version,
                        VH = AG.language ? AG.language : AG.browserLanguage,
                        WH = AG.platform,
                        XH = AG.userAgent;
                    try {
                        var rs = AG.javaEnabled()
                    } catch (oa) {
                        rs = !1
                    }
                    let ba = [TH, UH, VH, WH, XH, rs ? 1 : 0].join("");
                    Wc ? ba += Wc.width + "x" + Wc.height + Wc.colorDepth : r.java && r.java.awt && (U = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), ba +=
                        U.screen.width + "x" + U.screen.height);
                    ba = ba + xb + (aa || "");
                    for (P = ba.length; 0 < qs;) ba += qs-- ^ P++;
                    sa.vid = (SH ^ BG(ba) & 2147483647) + "." + kk
                }
                V(oo) && sa.from_cookie || (sa.from_cookie = !1)
            }
            if (!sa.cid) {
                b: {
                    var Hd = lk;
                    let U = 999;Hd && (Hd = 0 == Hd.indexOf(".") ? Hd.substr(1) : Hd, U = Hd.split(".").length);
                    let ba, oa = 999;
                    const ia = xb.split(";");
                    for (let jb = 0; jb < ia.length; jb++) {
                        const Lb = DG.exec(ia[jb]) || EG.exec(ia[jb]) || FG.exec(ia[jb]);
                        if (!Lb) continue;
                        const Xc = Lb[1] || 0;
                        if (Xc == U) {
                            var ss = Lb[2];
                            break b
                        }
                        Xc < oa && (oa = Xc, ba = Lb[2])
                    }
                    ss = ba
                }
                const P =
                    ss;ps && P && -1 != P.search(/^\d+\.\d+$/) ? (sa.vid = P, sa.from_cookie = !0) : P != sa.vid && (sa.cid = P)
            }
            sa.dh = Qg;
            sa.hid || (sa.hid = Math.round(2147483647 * Math.random()));
            os = sa
        }
        const Re = os;
        b.ga_vid = Re.vid;
        b.ga_sid = Re.sid;
        b.ga_hid = Re.hid;
        b.ga_fc = Re.from_cookie;
        b.ga_cid = Re.cid;
        b.ga_wpids = Y.google_analytics_uacct;
        vH(a.pubWin, b);
        const ok = d.google_ad_layout;
        ok && 0 <= ME[ok] && (b.rplot = ME[ok])
    }

    function yH(a, b) {
        a = a.l;
        if ((null == a ? 0 : B(a, 6)) || jz()) b.npa = 1;
        if (a) {
            Hc(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0");
            var c = x(a, 1);
            c && (b.us_privacy = c);
            (c = x(a, 2)) && (b.gdpr_consent = c);
            (c = x(a, 4)) && (b.addtl_consent = c);
            (a = x(a, 7)) && (b.tcfe = a)
        }
    }

    function zH(a, b) {
        const c = a.H;
        yH(a, b);
        jg(lz, (d, e) => {
            b[d] = c[e]
        });
        oE(c) && (a = CE(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = nq(c), null != a.j && (a = ul(a.j.value), b.pi = a))
    }

    function AH(a, b) {
        var c = Zg() || Lo(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Lo(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function BH(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Lo(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = lg(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function CH(a, b) {
        (a = hz()[a.H.google_ad_client]) && (b.psts = a.join())
    }

    function DH(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function EH(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = bc(a))
    }

    function FH(a, b) {
        const c = V(YG(window) ? xo : wo),
            d = V(zo);
        (a = ZG(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = bc(JSON.stringify(a)))
    }

    function GH(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch (e) {}
    }

    function HH(a, b) {
        0 <= a.H.google_ad_public_floor && (b.pubf = a.H.google_ad_public_floor);
        0 <= a.H.google_ad_private_floor && (b.pvtf = a.H.google_ad_private_floor)
    }

    function IH(a, b) {
        const c = Number(a.H.google_traffic_source);
        c && Object.values(La).includes(c) && (b.trt = a.H.google_traffic_source)
    }

    function mH(a, b) {
        const c = {};
        zH(a, c);
        NG();
        c.adsid = KG[1];
        NG();
        c.pucrd = KG[6];
        EH(a, c);
        FH(a, c);
        xH(a, c, b);
        Bh(c);
        c.u_sd = Mo(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        Ti(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = vD(a.K, a.ga);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Oo(a.ga) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        AH(a, c);
        BH(a, c);
        rH(a, c);
        qH(a, c);
        a.G && (c.oid = a.G);
        CH(a, c);
        c.pvsid = Ig(a.pubWin,
            Si);
        DH(a, c);
        GH(a, c);
        V(kn) && (c.uas = jH(a.pubWin));
        (d = VG(a.pubWin)) && (c.nvt = d);
        a.D && (c.scar = a.D);
        a.C && (c.topics = a.C instanceof Uint8Array ? $b(a.C, 3) : a.C);
        uH(a, c, b);
        c.fu = a.j;
        c.bc = GG();
        NG();
        c.jar = KG[4];
        Oc(a.U, 9) && tH(c);
        ij() && (c.atl = !0);
        HH(a, c);
        IH(a, c);
        null == O(Eo).j(ao.j, ao.defaultValue) || !1 !== a.H.google_video_play_muted || 10 !== a.H.google_reactive_ad_format && 11 !== a.H.google_reactive_ad_format || (c.sdkv = O(Eo).j(ao.j, ao.defaultValue));
        return c
    }
    const nH = /YtLoPri/;

    function JH(a) {
        Si.Od(b => {
            b.shv = String(a);
            b.mjsv = "m202206230101";
            b.eid = LD(r)
        })
    }

    function KH(a) {
        JH(J(a, 2));
        a = Oc(a, 6);
        ri(DD, ti);
        DD = a
    };

    function LH({
        Ce: a,
        Df: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var MH = "undefined" === typeof sttc ? void 0 : sttc;

    function NH(a) {
        var b = Si;
        try {
            return ri(a, si), new zD(JSON.parse(a))
        } catch (c) {
            b.ka(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new zD
    };

    function OH(a, b, c, d) {
        const e = new Sr;
        let f = "";
        const g = w => {
            try {
                const t = "object" === typeof w.data ? w.data : JSON.parse(w.data);
                f === t.paw_id && (Ue(a, "message", g), t.error ? e.j(Error(t.error)) : e.resolve(d(t)))
            } catch (t) {}
        };
        let h;
        if ("function" === typeof(null == (h = a.gmaSdk) ? void 0 : h.getQueryInfo)) return L(a, "message", g), f = c(a.gmaSdk), e.promise;
        let l, k, m, n, p, u;
        return "function" === typeof(null == (l = a.webkit) ? void 0 : null == (k = l.messageHandlers) ? void 0 : null == (m = k.getGmaQueryInfo) ? void 0 : m.postMessage) || "function" === typeof(null ==
            (n = a.webkit) ? void 0 : null == (p = n.messageHandlers) ? void 0 : null == (u = p.getGmaSig) ? void 0 : u.postMessage) ? (f = String(Math.floor(2147483647 * ig())), L(a, "message", g), b(a.webkit.messageHandlers, f), e.promise) : null
    }

    function YH(a) {
        return OH(a, (b, c) => {
            let d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function ZH(a) {
        if (a.j) return a.j;
        a.j = zg(a.A, "__uspapiLocator");
        return a.j
    }

    function $H(a) {
        let b;
        return "function" === typeof(null == (b = a.A) ? void 0 : b.__uspapi) || null != ZH(a)
    }

    function aI(a, b) {
        var c;
        "function" === typeof(null == (c = a.A) ? void 0 : c.__uspapi) ? (a = a.A.__uspapi, a("getUSPData", 1, b)) : ZH(a) && (bI(a), c = ++a.D, a.C[c] = b, a.j && a.j.postMessage({
            __uspapiCall: {
                command: "getUSPData",
                version: 1,
                callId: c
            }
        }, "*"))
    }

    function cI(a, b) {
        let c = {};
        if ($H(a)) {
            var d = Ne(() => b(c));
            aI(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function bI(a) {
        a.B || (a.B = b => {
            try {
                let d = {};
                "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                var c = d.__uspapiReturn;
                let e;
                null == (e = a.C) || e[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.A, "message", a.B))
    }
    var dI = class extends Xj {
        constructor(a) {
            super();
            this.A = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.B = null
        }
        l() {
            this.C = {};
            this.B && (Ue(this.A, "message", this.B), delete this.B);
            delete this.C;
            delete this.A;
            delete this.j;
            super.l()
        }
    };
    var eI = class extends K {
        constructor(a) {
            super(a)
        }
    };

    function fI(a) {
        a.D || (a.j || (a.j = zg(a.B, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function gI(a) {
        a.A || (a.A = b => {
            try {
                const c = ad(eI, b.data.__fciReturn);
                (0, a.C[x(c, 1)])(c)
            } catch (c) {}
        }, L(a.B, "message", a.A))
    }

    function hI(a) {
        return new Promise(b => {
            if (fI(a))
                if (a.j === a.B) {
                    var c = a.j.googlefc || (a.j.googlefc = {});
                    c.__fci = c.__fci || [];
                    c.__fci.push("loaded", d => {
                        b(ad(eI, d))
                    })
                } else gI(a), c = a.F++, a.C[c] = b, a.j.postMessage({
                    __fciCall: {
                        command: "loaded",
                        callId: c
                    }
                }, "*")
        })
    }
    var iI = class extends Xj {
        constructor(a) {
            super();
            this.B = a;
            this.A = this.j = null;
            this.C = {};
            this.F = 0;
            this.D = !1
        }
    };
    const jI = (a, b) => {
        try {
            const g = void 0 === Oc(b, 6) ? !0 : Oc(b, 6);
            let h, l;
            a: switch (C(b, 4, 0)) {
                case 1:
                    var c = "pt";
                    break a;
                case 2:
                    c = "cr";
                    break a;
                default:
                    c = ""
            }
            var d = new ff(df(C(b, 2, 0)), J(b, 3), c),
                e = null != (l = null == (h = D(b, cf, 5)) ? void 0 : J(h, 1)) ? l : "";
            d.ub = e;
            d.j = g;
            d.win = a;
            var f = d.build();
            Ye(f)
        } catch (g) {}
    };

    function kI(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? jI(a, b) : L(a, "load", () => void jI(a, b)))
    };

    function lI(a) {
        try {
            let b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (b) {}
        return null
    }

    function mI(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function nI(a) {
        if (a === a.top || bg(a.top)) return Promise.resolve({
            status: 4
        });
        const b = lI(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && mI(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new Sr;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                mb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var oI = class extends K {
            constructor(a) {
                super(a)
            }
        },
        pI = [1, 3];
    const qI = N `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function rI(a = window) {
        const b = sI(a);
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: l
                }) => l)
            }
            const e = gg("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Id(qI).toString();
            const f = (new URL(qI.toString())).origin,
                g = hB({
                    destination: a,
                    Ca: e,
                    origin: f,
                    Pa: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(h => {
                "goog:topics:frame:handshake:ack" === h.data && c(d)
            });
            b.messageChannelSendRequestFn =
                d;
            a.document.documentElement.appendChild(e)
        })
    }

    function tI(a, b, c, d, e) {
        var f = Si;
        const {
            Kb: g,
            Jb: h
        } = uI(e);
        b = sI(b);
        b.getTopicsPromise || (c = {
                message: "goog:topics:frame:get:topics",
                callApi: c,
                sendGen204: d
            }, d && (c.pvsid = Ig(window)), a = a(c).then(l => {
                let k = h;
                if (l instanceof Uint8Array) k || (k = !(g instanceof Uint8Array && zb(l, g)));
                else if (ui()(l)) k || (k = l !== g);
                else return f.ka(989, Error(JSON.stringify(l))), 7;
                if (k && e) try {
                    var m = new oI;
                    var n = z(m, 2, bi());
                    l instanceof Uint8Array ? Rc(n, 1, pI, l) : Rc(n, 3, pI, l);
                    e.setItem("goog:cached:topics", cd(n))
                } catch (p) {}
                return l
            }), b.getTopicsPromise =
            a);
        return g && !h ? Promise.resolve(g) : b.getTopicsPromise
    }

    function uI(a) {
        if (!a) return {
            Kb: null,
            Jb: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                Kb: null,
                Jb: !0
            };
            const l = ad(oI, b);
            let k;
            const m = Kc(l, pI);
            switch (m) {
                case 0:
                    k = null;
                    break;
                case 1:
                    var c;
                    a = l;
                    var d = 1 === Kc(l, pI) ? 1 : -1; {
                        let n = x(a, d);
                        if (null == n) var e = null;
                        else n instanceof mc || (b = n, n = null == b ? lc() : b.constructor === mc ? b : "string" === typeof b ? b ? new mc(b, ic) : lc() : gc(b) ? b.length ? new mc(new Uint8Array(b), ic) : lc() : lc(), z(a, d, n, void 0, !0)), e = n
                    }
                    d = e;
                    var f = null == d ? lc() : d;
                    kc(ic);
                    var g = f.P;
                    var h = null == g || gc(g) ?
                        g : "string" === typeof g ? ec(g) : null;
                    k = (c = null == h ? h : f.P = h) ? new Uint8Array(c) : hc || (hc = new Uint8Array(0));
                    break;
                case 3:
                    k = C(l, 3 === Kc(l, pI) ? 3 : -1, 0);
                    break;
                default:
                    De(m, void 0)
            }
            return {
                Kb: k,
                Jb: C(l, 2, 0) + 6048E5 < bi()
            }
        } catch (l) {
            return {
                Kb: null,
                Jb: !0
            }
        }
    }

    function sI(a) {
        let b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };

    function vI(a, b) {
        const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
        a = a.document.getElementById(b.google_async_iframe_id + "_expand");
        if (null == c || null == a) throw Error("no_ins");
        return {
            ga: c,
            na: a
        }
    }
    async function wI({
        U: a,
        da: b,
        Ua: c,
        slot: d
    }) {
        const e = d.vars,
            {
                ga: f,
                na: g
            } = vI(d.pubWin, d.vars),
            h = eg(d.pubWin),
            l = new VD({
                K: h,
                pubWin: d.pubWin,
                H: e,
                U: a,
                da: b,
                Ua: c,
                ga: f,
                na: g
            });
        l.I = Date.now();
        kj(1, [l.H]);
        try {
            await xI(l)
        } catch (k) {
            if (!Wi(159, k)) throw k;
        }
        Ti(639, () => {
            {
                var k = l.H;
                const n = l.K;
                if (n && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(k.google_async_iframe_id)) ? Wf(m, "INS", "adsbygoogle") : null) ? (k = new TE(n, m, k), k.j = r.setInterval(Fa(k.B,
                        k), 500), k.B(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Ti(914, () => {
            if (h && !fb() && !V(wn)) {
                var k, m = d.vars;
                var n = (null == (k = h.location) ? void 0 : k.hash) || "";
                n = new sD(n, a);
                k = d.vars.google_ad_client;
                dz(az(), 29, !1) || (fz(az(), 29, !0), iD(h, m, n, k, new eD(!1)))
            }
        });
        V(wn) && V(xn) && d.vars.google_ad_client && h && !fb() && (b = Vz(l.l)) && (b = b.getItem("google_affa_config")) && yI(h, e, b);
        Yi(l.pubWin, "affa", k => {
            Ti(1008, () => {
                if (V(wn) && d.vars.google_ad_client && h && !fb() && V(vn) && !V(Nn)) {
                    var m = k.config;
                    if (V(xn)) {
                        var n = Vz(l.l);
                        n && n.setItem("google_affa_config",
                            m)
                    }
                    yI(h, e, k.config)
                }
            })
        });
        return l
    }

    function yI(a, b, c) {
        c = new pD(JSON.parse(c));
        var d, e = (null == (d = a.location) ? void 0 : d.hash) || "";
        d = new sD(e, void 0, c);
        c = b.google_ad_client;
        dz(az(), 29, !1) || (fz(az(), 29, !0), iD(a, b, d, c, new eD(!1)))
    }

    function xI(a) {
        if (/_sdo/.test(a.H.google_ad_format)) return Promise.resolve();
        O(Ri).j(13);
        O(Ri).j(11);
        var b = az(),
            c = dz(b, 23, !1);
        c || fz(b, 23, !0);
        if (!c) {
            c = a.H.google_ad_client;
            var d = a.U;
            if (Jc(d)) b = D(Yc(d, rD, 13, Lc), cA, 2);
            else {
                var e, f;
                b = zb(null != (f = null == (e = Yc(d, xD, 14, Lc)) ? void 0 : Mc(e, 1)) ? f : [], [c]) ? D(D(Yc(d, xD, 14, Lc), rD, 2), cA, 2) : new cA
            }
            e = new dA(a.pubWin, a.H.google_ad_client, b, Oc(a.U, 6));
            e.l = !0;
            b = D(e.C, om, 1);
            if (e.l && (f = e.j, e.B && !Tu(b) ? (c = new Sz, c = z(c, 1, 1)) : c = null, c)) {
                c = cd(c);
                try {
                    f.localStorage.setItem("google_auto_fc_cmp_setting",
                        c)
                } catch (g) {}
            }
            b && Uu(new Vu(e.j, new nv(e.j, e.A), b, new ut(e.j)))
        }
        e = !Xg() && !eb();
        return !e || e && !zI(a) ? AI(a) : Promise.resolve()
    }

    function BI(a, b, c = !1) {
        b = vD(a.K, b);
        const d = Zg() || Lo(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = No(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function zI(a) {
        return CI(a) || DI(a)
    }

    function CI(a) {
        const b = a.H;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                Vi("abg:cmppar", {
                    client: a.H.google_ad_client,
                    url: a.H.google_page_url
                })
            }, 1E4),
            d = Ui(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                zI(a) || AI(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function DI(a) {
        const b = a.pubWin.document,
            c = EI();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.ga,
            e = CF(b);
        if (!e) return !1;
        if (!DF(b)) return FI(a, c.visible, d);
        const f = 3 === BF(b);
        if (BI(a, d) <= c.hidden && !f) return !1;
        let g = Ui(332, () => {
            !DF(b) && g && (Ue(b, e, g), FI(a, c.visible, d) || AI(a), g = null)
        });
        return L(b, e, g)
    }

    function EI() {
        const a = {
            hidden: 0,
            visible: 3
        };
        r.IntersectionObserver || (a.visible = -1);
        Zf() && (a.visible *= 2);
        return a
    }

    function FI(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.H;
        if (!Cj(d.google_reactive_ad_format) && (oE(d) || d.google_reactive_ads_config) || !Oo(c) || BI(a, c) <= b) return !1;
        var e = az(),
            f = dz(e, 8, {});
        e = dz(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const l = new r.IntersectionObserver((k, m) => {
                ob(k, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.J = l;
            l.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        la(Promise, "any").call(Promise, [f, e]).then(() => {
            Ti(294, () => {
                AI(a)
            })
        });
        return !0
    }
    async function AI(a) {
        Ti(326, () => {
            if (1 === Ah(a.H)) {
                var c = V(uo),
                    d = c || V(to),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new ej;
                    d = new fj;
                    f.setCorrelator(Ig(a.pubWin));
                    var g = LD(a.pubWin);
                    Qc(f, 5, g, "");
                    $c(f, 2);
                    g = Tc(d, 1, f);
                    f = new dj;
                    f = Zc(f, 10, !0);
                    var h = V(lo);
                    f = Zc(f, 8, h);
                    h = V(mo);
                    f = Zc(f, 12, h);
                    h = V(qo);
                    f = Zc(f, 7, h);
                    h = V(po);
                    f = Zc(f, 13, h);
                    Tc(g, 2, f);
                    e.google_rum_config = d.toJSON();
                    fg(e.document, gh(Oc(a.U, 9) && c ? a.da.sf : a.da.tf))
                } else ii()
            }
        });
        a.H.google_ad_channel = GI(a, a.H.google_ad_channel);
        a.H.google_tag_partner = HI(a, a.H.google_tag_partner);
        II(a);
        const b = a.H.google_start_time;
        "number" === typeof b && (lj = b, a.H.google_start_time = null);
        uD(a);
        JI(a);
        iz() && lA({
            win: a.pubWin,
            webPropertyCode: a.H.google_ad_client,
            ob: gh(a.da.ob)
        });
        oE(a.H) && (jA() && (a.H.google_adtest = a.H.google_adtest || "on"), a.H.google_pgb_reactive = a.H.google_pgb_reactive || 3);
        KI(a.K);
        if (V(go) && "function" === typeof a.pubWin.document.browsingTopics) try {
            a.F = await rI(a.K)
        } catch (c) {
            Wi(984, c)
        }
        return LI(a)
    }

    function JI(a) {
        a.K && (sE(a.K, a.da.Fe), qE(a.K.location) && BE(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.H.google_ad_client
        }))
    }

    function GI(a, b) {
        return (b ? [b] : []).concat(Xy(a.H).ad_channels || []).join("+")
    }

    function HI(a, b) {
        return (b ? [b] : []).concat(Xy(a.H).tag_partners || []).join("+")
    }

    function MI(a, b, c, d) {
        c.src = WE(a);
        const e = d.pubWin.document;
        a = Hh(d.pubWin);
        c = NI(c);
        a && d.A.push(ah(d.pubWin, c));
        OI(d.ga, c);
        V(bn) && r.setTimeout(Ui(644, () => {
            const f = e.getElementById(b);
            Kg(f, () => {
                r.setTimeout(() => {
                    for (const g of d.A) g();
                    d.A.length = 0
                }, 200)
            })
        }), 0);
        return Promise.resolve(c)
    }

    function NI(a) {
        const b = gg("IFRAME");
        jg(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function PI(a, b, c) {
        return 9 == a.H.google_reactive_ad_format && Wf(a.na, null, "fsi_container") ? (a.ga.appendChild(b), Promise.resolve(b)) : zE(a.da.Hd, 525, d => {
            a.ga.appendChild(b);
            d.createAdSlot(a.K, a.H, b, a.na.parentElement, Vz(c, a.pubWin));
            return b
        })
    }

    function QI(a, b, c) {
        kI(a.pubWin, Zc($e($c($c(Ze(new af, bf(new cf, String(Ig(a.pubWin)))), 4), 2), J(a.U, 2)), 6, !0));
        const d = a.K;
        a.H.google_acr && a.H.google_acr(b);
        L(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? Xy(d).enable_overlap_observer || !1 : !1;
            (a.H.ovlp || V(Zn) || f) && d && d === a.pubWin && RI(d, a, a.na, b)
        });
        var e = f => {
            f && a.A.push(() => {
                f.va()
            })
        };
        SI(a, b);
        V(eo) && TI(a, b);
        !d || oE(a.H) && !DE(a.H) || (e(new pG(d, b, a.H)), e(new iF(a, b)), e(d.IntersectionObserver ? null : new kF(d, b, a.ga)));
        d && (e(new cF(d, b)),
            a.A.push(NE(d, a.H)), O(SE).init(d), a.A.push(ZE(d, a.na, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.H.iaaso;
        if (null != c) {
            e = a.na;
            const f = e.parentElement;
            (f && ap.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.na;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        UI(a)
    }

    function SI(a, b) {
        const c = a.pubWin,
            d = a.H.google_ad_client,
            e = hz();
        let f = null;
        const g = Yi(c, "pvt", (h, l) => {
            "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.A.push(g)
    }

    function VI(a, b) {
        var c = MD(a, "__gpi_opt_out", b.l);
        c && (c = mf(lf(kf(jf(new nf, c), 2147483647), "/"), b.pubWin.location.hostname), ND(a, "__gpi_opt_out", c, b.l))
    }

    function TI(a, b) {
        const c = Yi(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = mf(lf(kf(jf(new nf, d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new QD(a.pubWin);
                ND(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) OD(f, "__gads", a.l), OD(f, "__gpi", a.l)
            }
        });
        a.A.push(c)
    }

    function UI(a) {
        const b = Xg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                L(a.pubWin, "message", Si.la(616, c));
                a.A.push(() => {
                    Ue(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function RI(a, b, c, d) {
        qF(new zF(a), c).then(e => {
            kj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && ap.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.H.armr || "",
                g = e.executionTime || "",
                h = null == b.H.iaaso ? "" : Number(b.H.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                k = qb(e.entries, A => `${A.overlapType}:${A.overlapDepth}:${A.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                u = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                w = Ch(e.target),
                t = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            Vi("ovlp", {
                adf: b.H.google_ad_dom_fingerprint,
                armr: f,
                client: b.H.google_ad_client,
                eid: LD(b.H),
                et: g,
                fwrattr: b.H.google_full_width_responsive,
                iaaso: h,
                io: l,
                saldr: b.H.google_loader_used,
                oa: m,
                oe: k.join(","),
                qid: n,
                rafmt: b.H.google_responsive_auto_format,
                roa: p,
                slot: b.H.google_ad_slot,
                sp: u,
                tgt: w,
                tr: t,
                url: b.H.google_page_url,
                vp: e,
                pvc: Ig(a)
            }, 1)
        }).catch(e => {
            kj(8, ["Error:", e.message, c]);
            Vi("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function WI(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function XI(a, b, c, d) {
        var e = a.H;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var l = EE(e);
        const k = {
            id: f,
            name: f
        };
        k.style = l ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = xg();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var p = m.indexOf("?");
                if (0 > p || p > n) {
                    p =
                        n;
                    var u = ""
                } else u = m.substring(p + 1, n);
                m = [m.slice(0, p), u, m.slice(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            k.sandbox = wg().join(" ")
        }
        V(Bn) && !1 === e.google_video_play_muted && WI("autoplay", k);
        n = b;
        b = YI(b);
        p = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (k.width = String(g));
        null != h && (k.height = String(h));
        k.frameborder = "0";
        k.marginwidth = "0";
        k.marginheight = "0";
        k.vspace = "0";
        k.hspace = "0";
        k.allowtransparency = "true";
        k.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (p = ""; 0 < m--;) p += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = p;
            b = Xi(b, m);
            Xi(n, m)
        } else b = p;
        e.dash && (k.srcdoc = e.dash);
        n = V(YG(window) ? xo : wo);
        p = V(zo);
        n = ZG(a.pubWin, n, p);
        p = e.google_trust_token_additional_signing_data;
        n && $G(n) && (n = bH(n, p)) && (k.trustToken = JSON.stringify(n));
        let w;
        (null == (w = a.pubWin.document.featurePolicy) ? 0 : w.features().includes("attribution-reporting")) && WI("attribution-reporting", k);
        l ? (k.src = b, l = NI(k), d = PI(a, l, d)) : d = MI(b, f, k, a);
        c && (c = a.da.If, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Pa: m,
            qf: a.pubWin,
            me: f,
            xj: "google_expandable_ad_slot" + Ah(e),
            Xe: c.toString(),
            Dc: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Pa || !e.Dc ? void 0 : Yi(e.Dc, "ct", Ga(aj, e, c)), e && a.A.push(e));
        return d
    }

    function YI(a) {
        var b = Fo(v("Edge") ? Mn : Xn);
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            Vi("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function ZI(a) {
        var b = a.H,
            c = a.pubWin,
            d = a.l;
        V(co) && B(d, 5) && VI(new QD(a.pubWin), a);
        var e = Vz(d, a.pubWin);
        if (!B(d, 5) && V(dn)) return Promise.resolve();
        B(d, 5) && UD(d, a.pubWin, a.H.google_ad_client);
        var f = a.H.google_reactive_ads_config;
        f && (yE(a.K, f), JE(f, a, Vz(d)), f = f.page_level_pubvars, ya(f) && vd(a.H, f));
        B(d, 5) && await $I();
        if (!aH(a.pubWin, ED(), J(a.U, 8))) {
            const g = Fo(Do);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        EE(b) ?
            (f = a.da.Jf.toString() + "#" + oH(b), wH(b, az()), aJ(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !pE(b) || nE(c, b, e)) && aJ(b) && (f = lH(a, d));
        kj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || zh(c);
        e = Ah(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Ha()).toString(36)}`;
        c = 0 < BI(a, a.ga, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = az(), e.btvi = dz(c, 21, 1), gz(c, 21));
        f = wh(e, f);
        d = XI(a, f, 0 === a.B,
            d);
        f = YI(f);
        a.H.rpe && iG(a.pubWin, a.ga, {
            height: a.H.google_ad_height,
            Sc: "force",
            Yc: !0,
            Kd: !0,
            qc: a.H.google_ad_client
        });
        d = await d;
        try {
            QI(a, d, b)
        } catch (g) {
            Wi(223, g)
        }
    }

    function $I() {
        return (hb() ? 0 <= ab(mb(), 11) : gb() && 0 <= ab(mb(), 65)) ? new Promise(a => {
            SG(a.bind(null, !0))
        }) : (SG(null), Promise.resolve(!1))
    }

    function bJ(a) {
        const b = new dI(a);
        return new Promise(c => {
            cI(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function cJ(a) {
        var b = yg(r.top, "googlefcPresent");
        r.googlefc && !b && Vi("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function dJ(a) {
        return fI(a) ? hI(a) : Promise.resolve(null)
    }

    function eJ(a, b) {
        const c = b.Ff;
        b = b.uspString;
        V(cn) || (a.l = new Zz);
        a = a.l;
        c ? UE(a, c) : Yz(a, !0);
        b && z(a, 1, b)
    }

    function fJ(a) {
        const b = Fo(hn),
            c = V(fn);
        if (0 >= b && !c) return null;
        const d = bi(),
            e = YH(a.pubWin);
        if (!e) return null;
        a.D = "0";
        return (c ? e : Promise.race([e, Mg(b, "0")])).then(f => {
            Vi("adsense_paw", {
                time: bi() - d
            });
            (null == f ? void 0 : f.length) > Fo(gn) ? Wi(809, Error(`ML:${f.length}`)) : a.D = f
        }).catch(f => {
            Wi(809, f)
        })
    }

    function gJ(a) {
        const b = bi();
        return Promise.race([Ti(832, () => nI(a)), Mg(200)]).then(c => {
            let d;
            const e = null != (d = null == c ? void 0 : c.status) ? d : 100;
            Vi("afc_etu", {
                etus: e,
                sig: bi() - b,
                tms: 200
            });
            return null == c ? void 0 : c.mb
        })
    }

    function hJ(a) {
        var b = Fo(zn);
        return Promise.race([Ui(779, () => {
            const c = V(YG(window) ? xo : wo),
                d = V(zo);
            return hH(new iH(a, c, d))
        })(), Mg(b)])
    }
    async function iJ(a) {
        const b = fJ(a),
            c = Ti(868, () => gJ(a.pubWin));
        OG(J(a.U, 8));
        RA(a.pubWin);
        cJ(a.H.google_ad_client);
        var d = new iI(a.pubWin);
        await dJ(d);
        V(cn) && (a.l = new Zz);
        d = [VE(a), bJ(a.pubWin)];
        d = await Promise.all(d);
        eJ(a, {
            Ff: d[0],
            uspString: d[1]
        });
        aH(a.pubWin, ED(), J(a.U, 8)) && (d = hJ(!!B(a.l, 5)), V(Co) ? Si.Za(962, d) : await d);
        V(jo) && a.F && jJ(a) && (d = Vz(a.l, a.pubWin), d = tI(a.F, a.pubWin, V(fo), V(io), d).then(e => {
            a.C = e
        }), V(ho) ? Si.Za(985, d) : await d);
        V(fn) || await b;
        a.mb = await c || "";
        await ZI(a)
    }

    function jJ(a) {
        const b = a.l;
        a = a.H;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!B(b, 5) && !B(b, 6) && !jz() && !B(b, 9)
    }

    function LI(a) {
        var b = a.pubWin.document,
            c = a.H;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2; {
                c = navigator;
                const m = c.userAgent,
                    n = c.platform,
                    p = c.product;
                if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(n) && /^Opera/.test(m)) var g = !1;
                else if (/Win/.test(n) && /Trident/.test(m) && 11 <= b.documentMode) g = !0;
                else {
                    var h = (/WebKit\/(\d+)/.exec(m) || [0, 0])[1],
                        l = (/rv:(\d+\.\d+)/.exec(m) || [0, 0])[1];
                    g = !h && "Gecko" === p && 27 <= l && !/ rv: 1\.8([^.] |\.0) /.test(m) || 536 <= h ? !0 : !1
                }
            }
            g || (f |= 4);
            Ro(a.pubWin, d, e) && (f |= 2)
        } catch (m) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.H.google_allow_expandable_ads = !1);
        Ng(a.pubWin) != a.pubWin && (a.j |= 4);
        3 === BF(a.pubWin.document) && (a.j |= 32);
        if (b = a.K) b = a.K, b = !(Q(b).scrollWidth <= Q(b).clientWidth);
        b && (a.j |= 1024);
        let k;
        if (null == (k = a.pubWin.Prototype) ? 0 : k.Version) a.j |= 16384;
        a.H.google_loader_features_used && (a.j |= a.H.google_loader_features_used);
        a.G = 2;
        return iJ(a)
    }

    function OI(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }

    function aJ(a) {
        const b = az(),
            c = a.google_ad_section;
        oE(a) && gz(b, 15);
        if (Fh(a)) {
            if (100 < gz(b, 5)) return !1
        } else if (100 < gz(b, 6) - dz(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function II(a) {
        const b = a.K;
        if (b && !Xy(b).ads_density_stats_processed && !Xg(b) && (Xy(b).ads_density_stats_processed = !0, V(Yn) || .01 > ig())) {
            const c = () => {
                if (b) {
                    var d = Tx(Ox(b), a.H.google_ad_client, b.location.hostname, LD(a.H).split(","));
                    Vi("ama_stats", d, 1)
                }
            };
            Lg(b, () => {
                r.setTimeout(c, 1E3)
            })
        }
    }

    function KI(a) {
        a && !Xy(a).host_pinged_back && (Xy(a).host_pinged_back = !0, Vi("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        Ti(843, () => {
            if (!r.google_sa_impl) {
                var d = NH(a);
                KH(d);
                kj(16, [3, d.toJSON()]);
                var e = LH({
                        Ce: b,
                        Df: J(d, 2)
                    }),
                    f = c(e, d);
                r.google_sa_impl = async h => wI({
                    U: d,
                    da: f,
                    Ua: e,
                    slot: h
                });
                KD(HD(r));
                var g;
                null == (g = r.google_process_slots) || g.call(r);
                g = (r.Prototype || {}).Version;
                null != g && Vi("prtpjs", {
                    version: g
                })
            }
        })
    })(MH, "m202206230101", function(a, b) {
        const c = 2012 < C(b, 1, 0) ? `_fy${C(b,1,0)}` : "",
            d = J(b, 3);
        b = J(b, 2);
        return {
            tf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            sf: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Hd: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Fe: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            If: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Jf: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            Bb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            ob: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2019,\"r20220623\",\"r20110914\",null,null,null,null,\".google.com.sg\",null,null,null,null,[null,[]],null,null,null,\"deekaykwon.com\",-1,[44759876,44759927,44759837]]");