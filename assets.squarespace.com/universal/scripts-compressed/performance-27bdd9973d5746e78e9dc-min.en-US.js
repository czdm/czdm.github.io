(function() {
    var Ne = {
            931060: function(f) {
                function n(s, p, i) {
                    return p in s ? Object.defineProperty(s, p, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : s[p] = i, s
                }
                f.exports = n, f.exports.default = f.exports, f.exports.__esModule = !0
            },
            545563: function(f) {
                function n(s) {
                    return s && s.__esModule ? s : {
                        default: s
                    }
                }
                f.exports = n, f.exports.default = f.exports, f.exports.__esModule = !0
            },
            273701: function(f, n, s) {
                var p = s(931060);

                function i(g) {
                    for (var P = 1; P < arguments.length; P++) {
                        var l = arguments[P] != null ? Object(arguments[P]) : {},
                            D = Object.keys(l);
                        typeof Object.getOwnPropertySymbols == "function" && (D = D.concat(Object.getOwnPropertySymbols(l).filter(function(L) {
                            return Object.getOwnPropertyDescriptor(l, L).enumerable
                        }))), D.forEach(function(L) {
                            p(g, L, l[L])
                        })
                    }
                    return g
                }
                f.exports = i, f.exports.default = f.exports, f.exports.__esModule = !0
            },
            412401: function(f, n, s) {
                var p = s(714806);

                function i() {
                    return i = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
                        }
                        return t
                    }, i.apply(this, arguments)
                }
                var g, P = function(t) {
                        return {
                            app: "a",
                            data: {
                                __encoding_config__: t,
                                __encoding_key__: "d"
                            },
                            event: "e",
                            pageLoadId: "pl",
                            ts: "t"
                        }
                    },
                    l = i({
                        context: {
                            __encoding_config__: {
                                accountId: "accountId",
                                ampEnabled: "ampEnabled",
                                authenticUrl: "authenticUrl",
                                cloneable: "cloneable",
                                collectionType: "collectionType",
                                createdOn: "createdOn",
                                developerMode: "developerMode",
                                impersonatedSession: "impersonatedSession",
                                inFrame: "inFrame",
                                isHstsEnabled: "isHstsEnabled",
                                isInternal: "isInternal",
                                language: "language",
                                memberId: "memberId",
                                pageType: "pageType",
                                platform: "platform",
                                templateId: "templateId",
                                timeZone: "timeZone",
                                websiteId: "websiteId",
                                websiteType: "websiteType"
                            },
                            __encoding_key__: "ctx"
                        },
                        supportLevel: "sl",
                        visibilityStateOnDCL: "vs"
                    }, {
                        analyticsId: "aid",
                        connection: {
                            __encoding_config__: {
                                downlink: "do",
                                effectiveType: "ef",
                                rtt: "rtt",
                                saveData: "sd"
                            },
                            __encoding_key__: "con"
                        },
                        deliveryType: "dt",
                        display: {
                            __encoding_config__: {
                                devicePixelRatio: "dpr",
                                screenHeight: "sh",
                                screenWidth: "sw",
                                viewportHeight: "vh",
                                viewportWidth: "vw"
                            },
                            __encoding_key__: "disp"
                        },
                        hardware: {
                            __encoding_config__: {
                                deviceMemory: "dm",
                                hardwareConcurrency: "hc"
                            },
                            __encoding_key__: "hdw"
                        },
                        hash: "h",
                        hostname: "hn",
                        marketingId: "mid",
                        memberId: "mem",
                        pathname: "p",
                        version: "v"
                    }, {
                        cumulativeLayoutShift: "cl",
                        decodedBodySize: "db",
                        domainLookup: "dml",
                        domContentLoadedEventEnd: "de",
                        domContentLoadedEventStart: "ds",
                        encodedBodySize: "eb",
                        firstContentfulPaint: "fcp",
                        firstInputDelay: "fid",
                        largestContentfulPaint: "lcp",
                        loadEventEnd: "le",
                        loadEventStart: "l",
                        tcpConnection: "tcp",
                        tlsConnection: "tls"
                    }),
                    D = {
                        duration: "d",
                        endMarkDetail: "e",
                        measureDetail: "m",
                        name: "n",
                        startMarkDetail: "s",
                        startTime: "st"
                    };
                (function(t) {
                    t.Element = "element", t.Event = "event", t.FirstInput = "first-input", t.LongTask = "longtask", t.LargestContentfulPaint = "largest-contentful-paint", t.LayoutShift = "layout-shift", t.Mark = "mark", t.Measure = "measure", t.Navigation = "navigation", t.Paint = "paint", t.Resource = "resource"
                })(g || (g = {}));
                var L, H = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;

                function j(t, e) {
                    var r = {};
                    return Object.keys(e).forEach(function(o) {
                        var m, h, v, T = e[o],
                            _ = t[o] || t,
                            A = typeof _,
                            B = A === "string";
                        if (B || A === "object" || _ === "undefined") {
                            if (B) m = _, h = typeof(v = T) == "boolean" ? v ? 1 : 0 : typeof v == "number" && isFinite(v) ? v.toString(36) : v;
                            else {
                                var S = _.__encoding_skip__,
                                    O = _.__encoding_config__,
                                    F = _.__encoding_fn__;
                                if (!S && !O && !t) throw new Error("Invalid encoding map");
                                m = S ? o : _.__encoding_key__, h = O ? j(O, T) : F ? F(T) : T
                            }
                            m && (r["" + m] = h)
                        }
                    }), r
                }

                function N() {
                    if (!Object.prototype.hasOwnProperty.call(window, "PerformanceObserver")) return !1;
                    try {
                        var t = new window.PerformanceObserver(function() {
                            return null
                        });
                        t.observe({
                            entryTypes: [g.Mark]
                        }), t.disconnect()
                    } catch (e) {
                        return !1
                    }
                    return !0
                }

                function X() {
                    var t;
                    return typeof((t = window.navigator) == null ? void 0 : t.sendBeacon) == "function" && !H.test(window.navigator.userAgent)
                }
                var M = [];

                function J() {
                    M.length && (function(t, e) {
                        if (!X() || !navigator.sendBeacon(t, e)) {
                            var r = new XMLHttpRequest;
                            r.open("POST", t, !0), r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), r.send(e)
                        }
                    }("/api/1/performance/records", JSON.stringify(M)), M = [])
                }

                function te(t, e) {
                    var r;
                    if (!(r = e ? j(e, t) : i({
                            raw: !0
                        }, t))) throw new Error("Data is empty");
                    M.push(r)
                }
                var V, x, y = function(t) {
                        return function() {
                            t && t.apply(void 0, [].slice.call(arguments))
                        }
                    },
                    b = function(t) {
                        return function() {
                            var e = arguments;
                            return new Promise(function(r, o) {
                                try {
                                    t.apply(void 0, [function(m) {
                                        r(m)
                                    }].concat([].slice.call(e)))
                                } catch (m) {
                                    o(m)
                                }
                            })
                        }
                    },
                    Z = function(t) {
                        return b(setTimeout)(t)
                    },
                    Q = function() {
                        return b(function(t) {
                            var e = function r(o) {
                                o.type !== "pagehide" && document.visibilityState !== "hidden" || (t(o), removeEventListener("visibilitychange", r, !0), removeEventListener("pagehide", r, !0))
                            };
                            window.addEventListener("visibilitychange", e, !0), window.addEventListener("pagehide", e, !0)
                        })()
                    },
                    re = function(t) {
                        document.readyState === "complete" ? window.setTimeout(t, 0) : window.addEventListener("pageshow", t, {
                            once: !0
                        })
                    },
                    R = function(t) {
                        try {
                            return Promise.resolve(b(re)).then(function() {
                                var e = window.performance.getEntriesByType(g.Navigation)[0],
                                    r = e != null ? e : function() {
                                        var m = {
                                                entryType: g.Navigation,
                                                startTime: 0
                                            },
                                            h = performance.timing;
                                        for (var v in h)
                                            if (v !== "navigationStart" && v !== "toJSON") {
                                                var T = Math.max(h[v] - h.navigationStart, 0);
                                                m[v] = T
                                            }
                                        return m
                                    }(),
                                    o = r[t];
                                if (!(typeof o != "number" || o < 0)) return Math.round(o)
                            })
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    },
                    K = function(t, e) {
                        if (typeof t == "number" && typeof e == "number" && t >= e) return t - e
                    },
                    ne = function(t) {
                        return Promise.all([R("domainLookupEnd"), R("domainLookupStart")]).then(function(e) {
                            t({
                                domainLookup: K(e[0], e[1])
                            })
                        })
                    },
                    ie = function(t) {
                        return Promise.all([R("connectEnd"), R("connectStart")]).then(function(e) {
                            t({
                                tcpConnection: K(e[0], e[1])
                            })
                        })
                    },
                    c = function(t) {
                        p.getCLS(function(e) {
                            var r;
                            t({
                                cumulativeLayoutShift: (r = e == null ? void 0 : e.value) != null ? r : void 0
                            })
                        })
                    },
                    a = function(t) {
                        return R("decodedBodySize").then(function(e) {
                            t({
                                decodedBodySize: e
                            })
                        })
                    },
                    d = function(t) {
                        return R("domContentLoadedEventEnd").then(function(e) {
                            t({
                                domContentLoadedEventEnd: e
                            })
                        })
                    },
                    E = function(t) {
                        return R("domContentLoadedEventStart").then(function(e) {
                            t({
                                domContentLoadedEventStart: e
                            })
                        })
                    },
                    u = function(t) {
                        return R("encodedBodySize").then(function(e) {
                            t({
                                encodedBodySize: e
                            })
                        })
                    },
                    C = function(t) {
                        p.getFCP(function(e) {
                            t({
                                firstContentfulPaint: e ? Math.round(e.value) : void 0
                            })
                        })
                    },
                    w = function(t) {
                        p.getFID(function(e) {
                            t({
                                firstInputDelay: e ? Math.round(e.value) : void 0
                            })
                        })
                    },
                    I = function(t) {
                        p.getLCP(function(e) {
                            t({
                                largestContentfulPaint: e ? Math.round(e.value) : void 0
                            })
                        })
                    },
                    k = function(t) {
                        return R("loadEventEnd").then(function(e) {
                            t({
                                loadEventEnd: e
                            })
                        })
                    },
                    oe = function(t) {
                        return R("loadEventStart").then(function(e) {
                            t({
                                loadEventStart: e
                            })
                        })
                    },
                    ge = function(t) {
                        return R("responseStart").then(function(e) {
                            t({
                                responseStart: e
                            })
                        })
                    },
                    we = function(t) {
                        return Promise.all([R("connectEnd"), R("secureConnectionStart")]).then(function(e) {
                            t({
                                tlsNegotiation: K(e[0], e[1])
                            })
                        })
                    },
                    Me = {
                        __proto__: null,
                        getDomainLookup: ne,
                        getTcpConnection: ie,
                        getCumulativeLayoutShift: c,
                        getDecodedBodySize: a,
                        getDomContentLoadedEventEnd: d,
                        getDomContentLoadedEventStart: E,
                        getEncodedBodySize: u,
                        getFirstContentfulPaint: C,
                        getFirstInputDelay: w,
                        getLargestContentfulPaint: I,
                        getLoadEventEnd: k,
                        getLoadEventStart: oe,
                        getResponseStart: ge,
                        getTlsNegotiation: we
                    };

                function le(t) {
                    Object.values(Me).forEach(function(e) {
                        try {
                            var r = function(o, m) {
                                try {
                                    var h = Promise.resolve(e(t)).then(function() {})
                                } catch (v) {
                                    return m(v)
                                }
                                return h && h.then ? h.then(void 0, m) : h
                            }(0, function(o) {
                                var m, h;
                                (m = window) == null || (h = m.SQUARESPACE_SENTRY) == null || h.captureException == null || h.captureException(o)
                            });
                            return Promise.resolve(r && r.then ? r.then(function() {}) : void 0)
                        } catch (o) {
                            return Promise.reject(o)
                        }
                    })
                }

                function _e(t) {
                    var e = new RegExp("(^| )" + t + "=([^;]+)"),
                        r = document.cookie.match(e);
                    return r ? r[2] : ""
                }

                function Ie(t) {
                    var e = {};
                    for (var r in t) typeof t[r] != "function" && (e[r] = t[r]);
                    return e
                }(function(t) {
                    t.Beacon = "beacon", t.XHR = "xhr"
                })(V || (V = {}));
                var me = function(t) {
                        var e = t.spanName,
                            r = t.tracer,
                            o = t.startTime,
                            m = t.spanAttributes,
                            h = m === void 0 ? {} : m;
                        x === void 0 && (x = new Map);
                        var v = r.startSpan(e, {
                            startTime: o
                        });
                        v.setAttributes(h), x.set(e, v)
                    },
                    he = function(t) {
                        var e = t.spanName,
                            r = t.spanAttributes,
                            o = r === void 0 ? {} : r;
                        if (x !== void 0 && x.has(e)) {
                            var m = x.get(e);
                            m.setAttributes(o), m.end(), x.delete(e)
                        }
                    },
                    Se = function(t) {
                        var e, r;
                        typeof((e = window) == null || (r = e.SQUARESPACE_SENTRY) == null ? void 0 : r.captureException) == "function" ? window.SQUARESPACE_SENTRY.captureException(t): console.warn("@sqs/rum-collector: user timing exception: " + t)
                    };

                function ye() {
                    return g.Mark in window.performance && g.Measure in window.performance
                }
                var ce, be = new Set,
                    Ae = ["serverTiming", "workerTiming"],
                    De = ["media-www.sqspcdn.com", "images.squarespace-cdn.com", "static1.squarespace.com"],
                    Te = function(t) {
                        try {
                            var e = function(o) {
                                return {
                                    appName: o.appName || "",
                                    context: o.context || {},
                                    enabled: typeof o.enabled != "boolean" || o.enabled,
                                    captureException: y(o.captureException)
                                }
                            }(t);
                            if (!e.enabled) return Promise.resolve();
                            var r = "";
                            return Promise.resolve(function(o, m) {
                                try {
                                    var h = Promise.resolve(new Promise(function(v, T) {
                                        var _ = new XMLHttpRequest;
                                        _.onreadystatechange = function() {
                                            if (_.readyState === XMLHttpRequest.DONE)
                                                if (_.status === 200) try {
                                                    v(JSON.parse(_.response))
                                                } catch (A) {
                                                    T(A)
                                                } else _.status !== 0 && T(new Error("XHR request DONE with unexpected status: " + _.status))
                                        }, _.ontimeout = function() {
                                            T(new Error("Metric settings request timeout"))
                                        }, _.open("GET", "/api/1/performance/settings", !0), _.timeout = 3e4, _.send()
                                    })).then(function(v) {
                                        if (!(r = v.pageLoadId)) throw new Error("Unable to resolve pageLoadId");
                                        var T = function(_, A) {
                                            return function(B, S, O) {
                                                te({
                                                    app: _,
                                                    data: B,
                                                    event: S,
                                                    pageLoadId: A,
                                                    ts: Date.now()
                                                }, O)
                                            }
                                        }(e.appName, r);
                                        (function(_, A) {
                                            Promise.resolve(function(B) {
                                                try {
                                                    var S = function(F) {
                                                            var $, ue, de, se, ae, W, Y;
                                                            return F === void 0 && (F = {}), {
                                                                context: F,
                                                                analyticsId: _e("SS_ANALYTICS_ID"),
                                                                marketingId: _e("SS_MID"),
                                                                memberId: ($ = window.Static) == null || (ue = $.SQUARESPACE_CONTEXT) == null || (de = ue.authenticatedAccount) == null ? void 0 : de.id,
                                                                version: "4.3.0",
                                                                connection: {
                                                                    downlink: (se = navigator.connection) == null ? void 0 : se.downlink,
                                                                    effectiveType: (ae = navigator.connection) == null ? void 0 : ae.effectiveType,
                                                                    rtt: (W = navigator.connection) == null ? void 0 : W.rtt,
                                                                    saveData: (Y = navigator.connection) == null ? void 0 : Y.saveData
                                                                },
                                                                deliveryType: X() ? V.Beacon : V.XHR,
                                                                display: {
                                                                    devicePixelRatio: window.devicePixelRatio,
                                                                    screenHeight: window.screen.height,
                                                                    screenWidth: window.screen.width,
                                                                    viewportHeight: window.innerHeight,
                                                                    viewportWidth: window.innerWidth
                                                                },
                                                                hardware: {
                                                                    deviceMemory: navigator.deviceMemory,
                                                                    hardwareConcurrency: navigator.hardwareConcurrency
                                                                },
                                                                hash: window.location.hash || "",
                                                                hostname: window.location.hostname || "",
                                                                pathname: window.location.pathname || "/"
                                                            }
                                                        }(B),
                                                        O = {};
                                                    return le(function(F) {
                                                        Object.assign(O, F)
                                                    }), Promise.resolve(Promise.race([Z(6e4), Q()])).then(function() {
                                                        return i({}, S, O)
                                                    })
                                                } catch (F) {
                                                    return Promise.reject(F)
                                                }
                                            }(A)).then(function(B) {
                                                _(B, "page_speed", P(l))
                                            })
                                        })(T, e.context),
                                        function(_) {
                                            if (window.PerformanceMeasure && window.PerformanceMark) {
                                                var A = function(B) {
                                                    B.map(Ie).forEach(function(S) {
                                                        if (typeof(O = S.name) == "string" && O.substring(0, 4) === "rum-") {
                                                            var O, F = S.name + "|" + S.duration;
                                                            be.has(F) || (_(S, "user", P(D)), be.add(F))
                                                        }
                                                    })
                                                };
                                                A(window.performance.getEntriesByType(g.Measure)), N() ? new window.PerformanceObserver(function(B) {
                                                    return A(B.getEntries())
                                                }).observe({
                                                    entryTypes: [g.Measure]
                                                }) : document.addEventListener("visibilitychange", function() {
                                                    document.visibilityState === "hidden" && A(window.performance.getEntriesByType(g.Measure))
                                                })
                                            }
                                        }(T),
                                        function(_) {
                                            try {
                                                if (!N()) return Promise.resolve();
                                                ce || p.getLCP(function(S) {
                                                    ce = S == null ? void 0 : S.value
                                                });
                                                var A = new Map;
                                                document.querySelectorAll("img[data-src]").forEach(function(S) {
                                                    var O = S.getAttribute("data-src");
                                                    S instanceof HTMLImageElement && O && A.set(O, S)
                                                });
                                                var B = function(S) {
                                                    return function(O) {
                                                        var F, $ = O.resource,
                                                            ue = O.deliverMetrics,
                                                            de = O.domImages;
                                                        try {
                                                            if (!($ instanceof PerformanceResourceTiming && (F = $.name, De.some(function(W) {
                                                                    return F.includes(W)
                                                                })))) return Promise.resolve();
                                                            var se = $.name.replace(/\?format=.*/, ""),
                                                                ae = de.get(se);
                                                            return ae === void 0 ? Promise.resolve() : Promise.resolve(function(W, Y) {
                                                                try {
                                                                    for (var Be = function(z) {
                                                                            var ee, G = Number((ee = z.getAttribute("data-image-resolution")) == null ? void 0 : ee.replace("w", ""));
                                                                            if (!Number.isNaN(G)) return G;
                                                                            var q = z.src.indexOf("format=");
                                                                            if (q === -1) return NaN;
                                                                            var fe = z.src.slice(q + 7).replace(/w.*/, "");
                                                                            return Number(fe)
                                                                        }(Y), Fe = Y.naturalWidth, je = Y.naturalHeight, Ue = Y.width, qe = Y.height, He = ce === void 0 || W.responseEnd < ce, ve = function(z, ee) {
                                                                            if (z == null) return {};
                                                                            var G, q, fe = {},
                                                                                Le = Object.keys(z);
                                                                            for (q = 0; q < Le.length; q++) ee.indexOf(G = Le[q]) >= 0 || (fe[G] = z[G]);
                                                                            return fe
                                                                        }(W.toJSON(), Ae), pe = 0, Oe = Object.entries(ve); pe < Oe.length; pe++) {
                                                                        var Pe = Oe[pe],
                                                                            Re = Pe[1];
                                                                        typeof Re == "number" && (ve[Pe[0]] = Math.floor(Re))
                                                                    }
                                                                    var xe = new Promise(function(z) {
                                                                        var ee = new IntersectionObserver(function(G) {
                                                                            G.forEach(function(q) {
                                                                                if (q.target === Y) return ee.disconnect(), z(i({
                                                                                    visibleOnLoad: q.isIntersecting,
                                                                                    observationTime: Math.floor(q.time),
                                                                                    intersectionRatio: q.intersectionRatio,
                                                                                    squarespaceSize: Be,
                                                                                    naturalHeight: je,
                                                                                    naturalWidth: Fe,
                                                                                    height: qe,
                                                                                    width: Ue,
                                                                                    loadedBeforeLCP: He
                                                                                }, ve))
                                                                            })
                                                                        });
                                                                        ee.observe(Y)
                                                                    });
                                                                    return Promise.resolve(xe)
                                                                } catch (z) {
                                                                    return Promise.reject(z)
                                                                }
                                                            }($, ae)).then(function(W) {
                                                                ue(W, "image")
                                                            })
                                                        } catch (W) {
                                                            return Promise.reject(W)
                                                        }
                                                    }({
                                                        resource: S,
                                                        deliverMetrics: _,
                                                        domImages: A
                                                    })
                                                };
                                                performance.getEntriesByType(g.Resource).forEach(B), new PerformanceObserver(function(S) {
                                                    S.getEntries().forEach(B)
                                                }).observe({
                                                    entryTypes: [g.Resource]
                                                }), Promise.resolve()
                                            } catch (S) {
                                                return Promise.reject(S)
                                            }
                                        }(T), window.addEventListener("load", function() {
                                            L = window.setTimeout(J, 3e4)
                                        }), document.addEventListener("visibilitychange", function() {
                                            document.visibilityState === "hidden" && (window.clearTimeout(L), J())
                                        })
                                    })
                                } catch (v) {
                                    return m(v)
                                }
                                return h && h.then ? h.then(void 0, m) : h
                            }(0, function(o) {
                                e.captureException(o, {
                                    pageLoadId: r,
                                    parsedOptions: e
                                })
                            }))
                        } catch (o) {
                            return Promise.reject(o)
                        }
                    },
                    ke = {
                        action: "load",
                        actor: "user",
                        event_owner_team: "web_performance",
                        event_source: "web",
                        object_type: "website"
                    },
                    Ce = Object.freeze({
                        cumulativeLayoutShift: "cumulative_layout_shift",
                        decodedBodySize: "decoded_body_size_bytes",
                        domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
                        domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
                        domainLookup: "domain_lookup_ms",
                        encodedBodySize: "encoded_body_size_bytes",
                        firstContentfulPaint: "first_contentful_paint_ms",
                        firstInputDelay: "first_input_delay_ms",
                        largestContentfulPaint: "largest_contentful_paint_ms",
                        loadEventEnd: "load_event_end_ms",
                        loadEventStart: "load_event_start_ms",
                        responseStart: "response_start_ms",
                        tcpConnection: "tcp_connection_ms",
                        tlsNegotiation: "tls_negotiation_ms"
                    });
                n.RUM_PREFIX = "rum-", n.default = function() {
                    return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."), Te.apply(void 0, [].slice.call(arguments))
                }, n.getCumulativeLayoutShift = c, n.getDecodedBodySize = a, n.getDomContentLoadedEventEnd = d, n.getDomContentLoadedEventStart = E, n.getDomainLookup = ne, n.getEncodedBodySize = u, n.getFirstContentfulPaint = C, n.getFirstInputDelay = w, n.getLargestContentfulPaint = I, n.getLoadEventEnd = k, n.getLoadEventStart = oe, n.getPerformanceMetrics = le, n.getResponseStart = ge, n.getTcpConnection = ie, n.getTlsNegotiation = we, n.init = Te, n.mark = function(t, e) {
                    e === void 0 && (e = {});
                    try {
                        if (!ye()) return;
                        var r = "rum-" + t;
                        if (window.performance.clearMarks(r), window.performance.mark(r, {
                                detail: e.detail,
                                startTime: e.startTime
                            }), e.tracer !== void 0) {
                            var o = window.performance.getEntriesByName(r, g.Mark).slice(-1);
                            me({
                                spanName: t,
                                tracer: e.tracer,
                                startTime: o[0].startTime,
                                spanAttributes: e.spanAttributes
                            })
                        }
                    } catch (m) {
                        Se(m)
                    }
                }, n.measure = function(t, e) {
                    e === void 0 && (e = {
                        requireStart: !1
                    });
                    try {
                        if (!(ye() && "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance)) return;
                        var r = "rum-" + t,
                            o = {
                                detail: e.detail,
                                duration: e.duration
                            };
                        if (o.start = e.start === void 0 ? r : typeof e.start == "string" ? "rum-" + e.start : e.start, o.end = typeof e.end == "string" ? "rum-" + e.end : e.end, e.requireStart && (typeof o.start == "number" || window.performance.getEntriesByName(o.start, g.Mark).length === 0)) return;
                        if (e.tracer !== void 0) {
                            var m = i({
                                measureName: r
                            }, e.spanAttributes);
                            typeof o.start == "number" ? (me({
                                spanName: r,
                                tracer: e.tracer,
                                startTime: o.start
                            }), he({
                                spanName: r,
                                spanAttributes: m
                            })) : (window.performance.getEntriesByName(o.start, g.Mark).length === 0 && me({
                                spanName: o.start,
                                tracer: e.tracer,
                                startTime: 0
                            }), he({
                                spanName: o.start,
                                spanAttributes: m
                            }))
                        }(function(v, T) {
                            try {
                                window.performance.measure(v, T)
                            } catch (B) {
                                var _ = typeof T.start == "string" ? T.start : v,
                                    A = typeof T.end == "string" ? T.end : void 0;
                                try {
                                    window.performance.measure(v, _, A)
                                } catch (S) {
                                    if (!(S instanceof DOMException)) throw S;
                                    try {
                                        window.performance.measure(v, "navigationStart")
                                    } catch (O) {
                                        if (!(O instanceof DOMException)) throw O;
                                        window.performance.measure(v)
                                    }
                                }
                            }
                        })(r, o);
                        var h = function(v) {
                            var T = window.performance.getEntriesByName(v, g.Measure);
                            return T[T.length - 1]
                        }(r);
                        return h
                    } catch (v) {
                        Se(v)
                    }
                }, n.trackEventsV2Factory = function(t, e) {
                    var r;
                    return e === void 0 && (r = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1), e = /^stage.sqsp.net/g.test(r) || /^qa\d+.sqsp.net/g.test(r) ? "staging" : /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g.test(r) ? "dev" : "prod"), new t({
                        customSchemaName: "Performance",
                        sourceEnvironment: e
                    }, ke)
                }, n.trackLoadPerformance = function(t) {
                    try {
                        var e = {};
                        return le(function(r) {
                            Object.entries(r).forEach(function(o) {
                                var m = o[0],
                                    h = o[1];
                                Object.prototype.hasOwnProperty.call(Ce, m) && (e[Ce[m]] = h)
                            })
                        }), Promise.resolve(Promise.race([Z(6e4), Q()])).then(function() {
                            t(e)
                        })
                    } catch (r) {
                        return Promise.reject(r)
                    }
                }
            },
            875119: function(f, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.withScope = n.isSentryConnected = n.configureScope = n.captureMessage = n.captureException = n.captureEvent = void 0;
                var s, p, i, g, P;
                n.withScope = P, n.configureScope = g, n.captureEvent = i, n.captureException = p, n.captureMessage = s;
                var l = function(H) {
                        for (var j, N = arguments.length, X = new Array(N > 1 ? N - 1 : 0), M = 1; M < N; M++) X[M - 1] = arguments[M];
                        return (j = console).log.apply(j, ["[Sentry] ".concat(H)].concat(X)), "some-error-identifier"
                    },
                    D = !1;
                n.isSentryConnected = D, window.SQUARESPACE_SENTRY ? (n.isSentryConnected = D = !0, n.captureMessage = s = window.SQUARESPACE_SENTRY.captureMessage, n.captureException = p = window.SQUARESPACE_SENTRY.captureException, n.captureEvent = i = window.SQUARESPACE_SENTRY.captureEvent, n.configureScope = g = window.SQUARESPACE_SENTRY.configureScope, n.withScope = P = window.SQUARESPACE_SENTRY.withScope) : (console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."), n.captureMessage = s = l, n.captureException = p = l, n.captureEvent = i = l, n.configureScope = g = function() {}, n.withScope = P = function() {})
            },
            714806: function(f, n, s) {
                "use strict";
                s.r(n), s.d(n, {
                    getCLS: function() {
                        return X
                    },
                    getFCP: function() {
                        return x
                    },
                    getFID: function() {
                        return K
                    },
                    getLCP: function() {
                        return ne
                    },
                    getTTFB: function() {
                        return ie
                    }
                });
                var p, i, g, P, l = function(c, a) {
                        return {
                            name: c,
                            value: a === void 0 ? -1 : a,
                            delta: 0,
                            entries: [],
                            id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                        }
                    },
                    D = function(c, a) {
                        try {
                            if (PerformanceObserver.supportedEntryTypes.includes(c)) {
                                if (c === "first-input" && !("PerformanceEventTiming" in self)) return;
                                var d = new PerformanceObserver(function(E) {
                                    return E.getEntries().map(a)
                                });
                                return d.observe({
                                    type: c,
                                    buffered: !0
                                }), d
                            }
                        } catch (E) {}
                    },
                    L = function(c, a) {
                        var d = function E(u) {
                            u.type !== "pagehide" && document.visibilityState !== "hidden" || (c(u), a && (removeEventListener("visibilitychange", E, !0), removeEventListener("pagehide", E, !0)))
                        };
                        addEventListener("visibilitychange", d, !0), addEventListener("pagehide", d, !0)
                    },
                    H = function(c) {
                        addEventListener("pageshow", function(a) {
                            a.persisted && c(a)
                        }, !0)
                    },
                    j = typeof WeakSet == "function" ? new WeakSet : new Set,
                    N = function(c, a, d) {
                        var E;
                        return function() {
                            a.value >= 0 && (d || j.has(a) || document.visibilityState === "hidden") && (a.delta = a.value - (E || 0), (a.delta || E === void 0) && (E = a.value, c(a)))
                        }
                    },
                    X = function(c, a) {
                        var d, E = l("CLS", 0),
                            u = function(w) {
                                w.hadRecentInput || (E.value += w.value, E.entries.push(w), d())
                            },
                            C = D("layout-shift", u);
                        C && (d = N(c, E, a), L(function() {
                            C.takeRecords().map(u), d()
                        }), H(function() {
                            E = l("CLS", 0), d = N(c, E, a)
                        }))
                    },
                    M = -1,
                    J = function() {
                        return document.visibilityState === "hidden" ? 0 : 1 / 0
                    },
                    te = function() {
                        L(function(c) {
                            var a = c.timeStamp;
                            M = a
                        }, !0)
                    },
                    V = function() {
                        return M < 0 && (M = J(), te(), H(function() {
                            setTimeout(function() {
                                M = J(), te()
                            }, 0)
                        })), {
                            get timeStamp() {
                                return M
                            }
                        }
                    },
                    x = function(c, a) {
                        var d, E = V(),
                            u = l("FCP"),
                            C = function(k) {
                                k.name === "first-contentful-paint" && (I && I.disconnect(), k.startTime < E.timeStamp && (u.value = k.startTime, u.entries.push(k), j.add(u), d()))
                            },
                            w = performance.getEntriesByName("first-contentful-paint")[0],
                            I = w ? null : D("paint", C);
                        (w || I) && (d = N(c, u, a), w && C(w), H(function(k) {
                            u = l("FCP"), d = N(c, u, a), requestAnimationFrame(function() {
                                requestAnimationFrame(function() {
                                    u.value = performance.now() - k.timeStamp, j.add(u), d()
                                })
                            })
                        }))
                    },
                    y = {
                        passive: !0,
                        capture: !0
                    },
                    b = new Date,
                    Z = function(c, a) {
                        p || (p = a, i = c, g = new Date, R(removeEventListener), Q())
                    },
                    Q = function() {
                        if (i >= 0 && i < g - b) {
                            var c = {
                                entryType: "first-input",
                                name: p.type,
                                target: p.target,
                                cancelable: p.cancelable,
                                startTime: p.timeStamp,
                                processingStart: p.timeStamp + i
                            };
                            P.forEach(function(a) {
                                a(c)
                            }), P = []
                        }
                    },
                    re = function(c) {
                        if (c.cancelable) {
                            var a = (c.timeStamp > 1e12 ? new Date : performance.now()) - c.timeStamp;
                            c.type == "pointerdown" ? function(d, E) {
                                var u = function() {
                                        Z(d, E), w()
                                    },
                                    C = function() {
                                        w()
                                    },
                                    w = function() {
                                        removeEventListener("pointerup", u, y), removeEventListener("pointercancel", C, y)
                                    };
                                addEventListener("pointerup", u, y), addEventListener("pointercancel", C, y)
                            }(a, c) : Z(a, c)
                        }
                    },
                    R = function(c) {
                        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(a) {
                            return c(a, re, y)
                        })
                    },
                    K = function(c, a) {
                        var d, E = V(),
                            u = l("FID"),
                            C = function(I) {
                                I.startTime < E.timeStamp && (u.value = I.processingStart - I.startTime, u.entries.push(I), j.add(u), d())
                            },
                            w = D("first-input", C);
                        d = N(c, u, a), w && L(function() {
                            w.takeRecords().map(C), w.disconnect()
                        }, !0), w && H(function() {
                            var I;
                            u = l("FID"), d = N(c, u, a), P = [], i = -1, p = null, R(addEventListener), I = C, P.push(I), Q()
                        })
                    },
                    ne = function(c, a) {
                        var d, E = V(),
                            u = l("LCP"),
                            C = function(k) {
                                var oe = k.startTime;
                                oe < E.timeStamp && (u.value = oe, u.entries.push(k)), d()
                            },
                            w = D("largest-contentful-paint", C);
                        if (w) {
                            d = N(c, u, a);
                            var I = function() {
                                j.has(u) || (w.takeRecords().map(C), w.disconnect(), j.add(u), d())
                            };
                            ["keydown", "click"].forEach(function(k) {
                                addEventListener(k, I, {
                                    once: !0,
                                    capture: !0
                                })
                            }), L(I, !0), H(function(k) {
                                u = l("LCP"), d = N(c, u, a), requestAnimationFrame(function() {
                                    requestAnimationFrame(function() {
                                        u.value = performance.now() - k.timeStamp, j.add(u), d()
                                    })
                                })
                            })
                        }
                    },
                    ie = function(c) {
                        var a, d = l("TTFB");
                        a = function() {
                            try {
                                var E = performance.getEntriesByType("navigation")[0] || function() {
                                    var u = performance.timing,
                                        C = {
                                            entryType: "navigation",
                                            startTime: 0
                                        };
                                    for (var w in u) w !== "navigationStart" && w !== "toJSON" && (C[w] = Math.max(u[w] - u.navigationStart, 0));
                                    return C
                                }();
                                if (d.value = d.delta = E.responseStart, d.value < 0) return;
                                d.entries = [E], c(d)
                            } catch (u) {}
                        }, document.readyState === "complete" ? setTimeout(a, 0) : addEventListener("pageshow", a)
                    }
            },
            768918: function(f, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var s;
                (function(i) {
                    i.MAIN_CONTENT = 1, i.CONTENT_COLLECTION = 1, i.PAGE = 2, i.SPLASH_PAGE = 3, i.CONTENT_ITEM = 50, i.NOT_FOUND = 100, i.ERROR = 101, i.SEARCH = 102, i.LOCK_SCREEN = 103, i.POPUP_OVERLAY = 104, i.PROTECTED_CONTENT = 105, i.MEMBER_AREA_ACCESS_DENIED = 106, i.SHOW_CART = 200, i.CHECKOUT = 201, i.ORDER_CONFIRMED = 202, i.DONATE = 203, i.CONTRIBUTION_CONFIRMED = 204, i.COMMERCE_CART_V2 = 205, i.SUBSCRIPTION_CONFIRMED = 206, i.ORDER_RECEIVED = 207, i.MEMBERSHIP_CONFIRMED = 208, i.REVIEWS_REQUEST = 209, i.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210, i.ORDER_STATUS = 211, i.NEWSLETTER_UNSUBSCRIBE = 300, i.COMMERCE_EMAIL_PREVIEW = 301
                })(s || (s = {}));
                var p = s;
                n.default = p, f.exports = n.default
            },
            672325: function(f, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var s;
                (function(i) {
                    i.EXPIRED = 1, i.PASTDUE = 2, i.TRIAL = 3, i.BETA = 4, i.REMOVED = 5, i.INTERNAL = 6, i.COMPED = 7, i.PAID = 8, i.V5_LINKED = 11, i.ACTIVE_PARKING_PAGE = 12, i.RESOLD = 13, i.RESOLD_GRACE_PERIOD = 14, i.ENTERPRISE = 15
                })(s || (s = {}));
                var p = s;
                n.default = p, f.exports = n.default
            }
        },
        Ee = {};

    function U(f) {
        var n = Ee[f];
        if (n !== void 0) return n.exports;
        var s = Ee[f] = {
            exports: {}
        };
        return Ne[f](s, s.exports, U), s.exports
    }(function() {
        U.d = function(f, n) {
            for (var s in n) U.o(n, s) && !U.o(f, s) && Object.defineProperty(f, s, {
                enumerable: !0,
                get: n[s]
            })
        }
    })(),
    function() {
        U.o = function(f, n) {
            return Object.prototype.hasOwnProperty.call(f, n)
        }
    }(),
    function() {
        U.r = function(f) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(f, "__esModule", {
                value: !0
            })
        }
    }();
    var We = {};
    (function() {
        "use strict";
        var f = U(545563),
            n = f(U(273701)),
            s = f(U(931060)),
            p = U(412401),
            i = f(U(672325)),
            g = f(U(768918)),
            P = U(875119),
            l = window.Static && window.Static.SQUARESPACE_CONTEXT,
            D = window.top !== window,
            L = Object.freeze((0, s.default)({}, g.default.COMMERCE_CART_V2, "commerce-cart"));

        function H() {
            var y = window.location && window.location.pathname || "";
            return !D && /^\/config(\/.*)?$/.test(y)
        }

        function j() {
            return {
                inFrame: D,
                templateId: l.templateId || "",
                impersonatedSession: !!l.impersonatedSession,
                pageType: typeof l.pageType == "number" ? l.pageType : -1
            }
        }

        function N() {
            var y = l.website,
                b = y === void 0 ? {} : y;
            return {
                authenticUrl: b.authenticUrl || "",
                cloneable: !!b.cloneable,
                developerMode: !!b.developerMode,
                isHstsEnabled: !!b.isHstsEnabled,
                language: b.language || "",
                timeZone: b.timeZone || "",
                websiteId: b.id || "",
                websiteType: b.websiteType || -1
            }
        }

        function X() {
            var y = l.websiteSettings,
                b = y === void 0 ? {} : y;
            return {
                ampEnabled: !!b.ampEnabled
            }
        }

        function M() {
            var y = l.collection,
                b = y === void 0 ? {} : y;
            return {
                collectionType: b.type || -1
            }
        }

        function J() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }

        function te() {
            return l.hasOwnProperty("templateVersion") ? l.templateVersion.replace(".", "_") : J() ? "8" : null
        }

        function V(y) {
            var b = H(),
                Z = L[l.pageType],
                Q = {
                    appName: Z || "v".concat(y, "-").concat(b ? "config" : "user-sites"),
                    context: (0, n.default)({}, j(), N(), X(), M()),
                    captureException: function(c, a) {
                        (0, P.withScope)(function(d) {
                            d.setTag("project", "rum-collector"), a !== void 0 && d.setExtra("extras", a), (0, P.captureException)(c)
                        })
                    }
                };
            if (b) {
                var re = l.website.siteStatus.value === i.default.INTERNAL,
                    R = l.authenticatedAccount,
                    K = R.createdOn,
                    ne = R.id;
                Q.context.isInternal = re, Q.context.createdOn = K, Q.context.memberId = ne
            }
            return Q
        }

        function x() {
            if (l) {
                var y = te();
                if (y === null) return;
                var b = V(y);
                (0, p.init)(b)
            }
        }
        x()
    })()
})();
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-d8b27f9a563bfe96434d3-min.en-US.js.map