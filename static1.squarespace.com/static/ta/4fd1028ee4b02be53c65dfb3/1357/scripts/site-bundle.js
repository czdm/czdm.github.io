! function(e) {
    function a(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
    }
    var t = {};
    return a.m = e, a.c = t, a.p = "", a(0)
}([function(e, a, t) {
    t(1), e.exports = t(8)
}, function(e, a, t) {
    var o = t(2);
    YUI.add("squarespace-dynamic-data", function(e) {
        e.namespace("Squarespace"), e.Squarespace.DynamicData = function(a) {
            function t() {
                (!m || window.innerWidth >= m) && (u = e.one(u), u && (e.on("click", l, b.search), n()))
            }

            function n() {
                var e = window.location.hash;
                h && e && (e = e.replace("#", ""), e = e.endsWith("/") ? e : e + "/", l(null, e))
            }

            function r(e) {
                "function" == typeof e && e()
            }

            function i(e) {
                return e.replace(/\//g, "")
            }

            function l(a, t) {
                var n, l, s = t && e.one(b.search + '[href="' + t + '"]') || a && a.currentTarget || null,
                    f = t || s && s.getAttribute("href");
                if (a && a.preventDefault(), g && (window.location.hash = f), s && !y && i(f) != u.getAttribute(b.activeWrapper) || s && y && !u.one("[" + b.activeWrapper + "=" + i(f) + "]")) {
                    o.Lifecycle.destroy(), u.setAttribute(b.activeWrapper, i(f)), e.all("." + b.active).removeClass(b.active), s.addClass(b.active), u.removeClass(b.ready), u.addClass(b.loading), t || c(), r(p), y && (n = e.Node.create("<div></div>"), n.addClass(b.appendWrapper), n.setAttribute(b.activeWrapper, i(f)), n.appendTo(u)), l = n ? n : u;
                    var h = e.one("body"),
                        m = new e.Squarespace.Spinner({
                            color: "dark",
                            size: "large",
                            render: h
                        });
                    h.addClass("index-loading"), l.load(f, v, function() {
                        m.destroy(), h.removeClass("index-loading"), d(f)
                    })
                } else u.setAttribute(b.activeWrapper, i(f)), t || c()
            }

            function s(a) {
                o.Lifecycle.init(), Squarespace.initializeCommerce(e), u.all("img[data-src]").each(function(e) {
                    e.ancestor(".sqs-layout") || ImageLoader.load(e)
                }), u.all("script").each(function(a) {
                    var t = document.createElement("script");
                    t.type = "text/javascript", a.getAttribute("src") ? t.src = a.getAttribute("src") : t.innerHTML = a.get("innerHTML"), e.one("head").append(t)
                }), r(a), e.fire("avenue:dynamicPageReady"), e.fire("template:dynamicPageReady", {
                    framework: "avenue"
                })
            }

            function c() {
                var a, t;
                if (w) {
                    var o = e.UA.gecko || e.UA.ie ? "html" : "body";
                    a = u.getXY(), a = a[1], t = new e.Anim({
                        node: e.one(document.scrollingElement || o),
                        to: {
                            scroll: [0, a]
                        },
                        duration: .2,
                        easing: "easeBoth"
                    }), t.run()
                }
            }

            function d(e) {
                s(f), u.removeClass(b.loading), u.addClass(b.ready)
            }
            var u = a && a.wrapper || "body",
                p = a && a.preCallback || null,
                f = a && a.postCallback || null,
                g = a && a.useHashes || !1,
                h = a && a.autoOpenHash || !1,
                v = a && a.injectEl || null,
                m = a && a.minimumResolution || null,
                w = a && a.scrollToWrapperPreLoad || !1,
                y = a && a.appendData || null,
                b = {
                    search: a && a.target || ".sqs-dynamic-data",
                    active: "sqs-dynamic-data-active",
                    loading: "sqs-dynamic-data-loading",
                    ready: "sqs-dynamic-data-ready",
                    activeWrapper: "data-dynamic-data-link",
                    appendWrapper: "sqs-dynamic-data-wrapper"
                };
            this.simulateHash = function(e) {
                e && (e = e.replace("#", ""), l(null, e))
            }, t()
        }
    }, "1.0", {
        requires: ["node", "node-load", "event", "squarespace-spinner"]
    })
}, function(e, a, t) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0;
    var n = o(t(3)),
        r = o(t(4)),
        i = o(t(5)),
        l = o(t(6)),
        s = {
            ImageLoader: n.default,
            Lifecycle: r.default,
            Tweak: i.default,
            UserAccounts: l.default
        },
        c = s;
    a.default = c, e.exports = a.default
}, function(e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0;
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var t = {
            load: function(e, a) {
                return window.ImageLoader.load(e, a)
            }
        },
        o = t;
    a.default = o, e.exports = a.default
}, function(e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0;
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var t = {
            init: function() {
                window.Squarespace.AFTER_BODY_LOADED = !1, window.Squarespace.afterBodyLoad()
            },
            destroy: function() {
                window.Squarespace.globalDestroy(window.Y)
            }
        },
        o = t;
    a.default = o, e.exports = a.default
}, function(e, a) {
    "use strict";

    function t() {
        window.Y.Global.on("tweak:change", function(e) {
            var a = e.getName(),
                t = {
                    name: a,
                    value: e.config && e.config.value || e.value
                };
            n[a] && n[a].callbacks.forEach(function(e) {
                try {
                    e(t)
                } catch (e) {
                    console.error(e)
                }
            }), n.all.callbacks.length > 0 && n.all.callbacks.forEach(function(e) {
                try {
                    e(t)
                } catch (e) {
                    console.error(e)
                }
            })
        })
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0;
    /**
     * @license
     * Copyright 2016 Squarespace, INC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var o = window.Static.SQUARESPACE_CONTEXT.authenticatedAccount,
        n = {
            all: {
                callbacks: []
            }
        },
        r = {
            getValue: function(e) {
                return e && "string" == typeof e ? window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@", "").replace(".", "")] : (console.error("squarespace-core: Invalid tweak name " + e), null)
            },
            watch: function() {
                var e = arguments;
                if (o) {
                    if (0 === arguments.length) return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");
                    if (1 === arguments.length) return void("function" == typeof arguments[0] && n.all.callbacks.push(arguments[0]));
                    if ("string" == typeof arguments[0] && "function" == typeof arguments[1]) {
                        var a = arguments[0];
                        n[a] || (n[a] = {
                            callbacks: []
                        }), n[a].callbacks.push(arguments[1])
                    } else arguments[0].constructor === Array && "function" == typeof arguments[1] && arguments[0].forEach(function(a) {
                        n[a] || (n[a] = {
                            callbacks: []
                        }), n[a].callbacks.push(e[1])
                    })
                }
            }
        };
    o && ("complete" !== document.readyState ? window.addEventListener("load", t) : window.Y && window.Y.Global && t());
    var i = r;
    a.default = i, e.exports = a.default
}, function(e, a, t) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = void 0;
    var o = t(7),
        n = "UserAccounts API not available",
        r = function() {
            console.warn(n)
        },
        i = function() {
            var e, a, t;
            return null !== (e = null === (a = window) || void 0 === a ? void 0 : null === (t = a[o.USER_ACCOUNT_API]) || void 0 === t ? void 0 : t[o.IS_USER_AUTHENTICATED]()) && void 0 !== e ? e : r()
        },
        l = function() {
            var e, a, t;
            return null !== (e = null === (a = window) || void 0 === a ? void 0 : null === (t = a[o.USER_ACCOUNT_API]) || void 0 === t ? void 0 : t[o.OPEN_ACCOUNT_SCREEN]()) && void 0 !== e ? e : r()
        },
        s = {
            isUserAuthenticated: i,
            openAccountScreen: l
        };
    a.default = s, e.exports = a.default
}, function(e, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.OPEN_ACCOUNT_SCREEN = a.IS_USER_AUTHENTICATED = a.USER_ACCOUNT_API = void 0;
    var t = "UserAccountApi";
    a.USER_ACCOUNT_API = t;
    var o = "isUserAuthenticated";
    a.IS_USER_AUTHENTICATED = o;
    var n = "openAccountScreen";
    a.OPEN_ACCOUNT_SCREEN = n
}, function(e, a, t) {
    var o = t(2);
    Y.use(["node", "squarespace-dynamic-data", "squarespace-gallery-ng", "history-hash", "squarespace-util"], function(e) {
        function a() {
            if (window.location.hash && "#" != window.location.hash) {
                var a = window.location.hash.split("#")[1];
                a = "/" == a.charAt(0) ? a : "/" + a, a = "/" == a.charAt(a.length - 1) ? a : a + "/";
                var n = e.one('#projectPages .project[data-url="' + a + '"]');
                if (!n) return;
                if (n.hasAttribute("data-type-protected") || !n.hasClass("page-project") && !n.hasClass("gallery-project")) return void window.location.replace(a);
                n.hasClass("page-project") && !n.hasClass("sqs-dynamic-data-ready") ? s["#" + a].simulateHash(a) : e.one("body").removeClass("index-loading"), e.one("#page").addClass("page-open"), e.one("body").addClass("index-page-open"), t(), e.all(".project.active-project").removeClass("active-project"), n.addClass("active-project"), e.one('#projectThumbs a.project[href="' + a + '"]').addClass("active-project"), n.next(".project") ? e.one("#projectNav .next-project").removeClass("disabled") : e.one("#projectNav .next-project").addClass("disabled"), n.previous(".project") ? e.one("#projectNav .prev-project").removeClass("disabled") : e.one("#projectNav .prev-project").addClass("disabled"), n.all("img.loading").each(function(e) {
                    ImageLoader.load(e, {
                        load: !0
                    })
                }), n.all(".sqs-video-wrapper").each(function(e) {
                    e.videoloader.load()
                }), o.Lifecycle.init(), i()
            } else e.one("#page").removeClass("page-open"), e.one("body").removeClass("index-page-open"), t(), e.all("div.active-project").removeClass("active-project")
        }

        function t() {
            var a = e.one("#projectPages .active-project");
            a && a.one(".video-block, .code-block, .embed-block, .audio-block") && (e.fire("audioPlayer:stopAll", {
                container: a
            }), a.empty(!0).removeClass("sqs-dynamic-data-ready").removeAttribute("data-dynamic-data-link")), a && a.one(".sqs-video-wrapper") && a.all(".sqs-video-wrapper").each(function(e) {
                !e.ancestor(".sqs-gallery") && e.videoloader.unload()
            })
        }

        function n() {
            var a = e.all("#projectThumbs img[data-src]"),
                t = function() {
                    a.each(function(a) {
                        a.inRegion(e.one(e.config.win).get("region")) && ImageLoader.load(a, {
                            load: !0
                        })
                    })
                },
                o = e.later(100, this, function() {
                    var e = a.some(function(e) {
                        return !!e.hasClass("loading") || (e.getAttribute("src") ? void 0 : (ImageLoader.load(e, {
                            load: !0
                        }), !0))
                    });
                    e || o.cancel()
                }, null, !0);
            e.one("window").on("resize", t);
            var n, r = function(a) {
                if (n && n.destroy(), "Autocolumns" != e.Squarespace.Template.getTweakValue("thumbnail-layout")) a && e.all(".project").each(function(e) {
                    e.removeAttribute("style")
                });
                else {
                    var t = function() {
                        var a = e.one("#projectThumbs").get("clientWidth"),
                            t = parseInt(e.Squarespace.Template.getTweakValue("TGutter"), 10) / 100;
                        return {
                            gutter: a * t,
                            width: e.Squarespace.Template.getTweakValue("TMaxWidth")
                        }
                    };
                    n = new e.Squarespace.Gallery2({
                        container: "#projectThumbs .wrapper",
                        design: "autocolumns",
                        designOptions: {
                            mixedContent: !0,
                            aspectRatio: !1,
                            gutter: t().gutter,
                            columnWidthBehavior: "min",
                            columnWidth: t().width
                        },
                        element: ".project",
                        loaderOptions: {
                            mode: "fill",
                            load: !1
                        },
                        refreshOnResize: !0
                    })
                }
                a && e.later(500, this, function() {
                    e.one(window).simulate("resize")
                })
            };
            r(), e.Global.on(["tweak:change", "tweak:aftershow", "tweak:afterclose"], r)
        }

        function r() {
            e.all("#projectThumbs a.project").each(e.bind(function(a) {
                var t = a.getAttribute("href"),
                    o = e.one('#projectPages [data-url="' + t + '"]');
                o && o.hasClass("page-project") ? s["#" + t] = new e.Squarespace.DynamicData({
                    wrapper: '#projectPages [data-url="' + t + '"]',
                    target: 'a.project[href="' + t + '"]',
                    injectEl: e.UA.ie ? "#page > *" : "section > *",
                    autoOpenHash: !0,
                    useHashes: !0
                }) : a.on("click", function(e) {
                    e.halt(), window.location.hash = "#" + a.getAttribute("href")
                })
            }, this))
        }

        function i(a) {
            var t = e.UA.gecko || e.UA.ie ? "html" : "body",
                o = e.one(document.scrollingElement || t);
            new e.Anim({
                node: o,
                to: {
                    scroll: [0, 0]
                },
                duration: .2,
                easing: e.Easing.easeBoth
            }).run().on("end", function() {
                0 != o.get("scrollTop") && o.set("scrollTop", 0), a && a()
            })
        }

        function l(a, t) {
            var o;
            e.one("window").on("resize", function(n) {
                o && o.cancel(), o = e.later(t, this, a)
            })
        }
        e.on("domready", function() {
            function t() {
                b.hasClass("logo-image") && C < 750 && c.one("img").get("offsetWidth") > c.one("img").get("offsetHeight") ? c.addClass("landscape") : c.removeClass("landscape")
            }

            function o() {
                var a;
                e.one("#sidebar") && (a = e.one("#sidebar").getComputedStyle("height")), a && e.one("#page").setStyle("minHeight", a)
            }
            e.one("#topNav .subnav") && (subnavMarginTop = parseInt(e.one("#topNav .subnav").getStyle("marginTop"), 10), subnavMarginTop > 0 && e.all("#topNav .subnav").setStyle("marginTop", 0));
            var l = function() {
                var a = e.all("#topNav .folder-collection .subnav");
                a.each(function(a) {
                    a.getDOMNode().getBoundingClientRect().right > e.config.win.innerWidth ? a.setStyles({
                        left: "auto",
                        right: "-15px"
                    }) : a.setStyles({
                        left: "",
                        right: ""
                    })
                })
            }();
            e.one(window).on("resize", l);
            var s = e.all("#mobileMenuLink a");
            s && s.on("click", function(a) {
                var t = parseInt(e.one("#mobileNavWrapper").get("offsetHeight"), 10);
                e.one("#mobileNav").hasClass("menu-open") ? (new e.Anim({
                    node: e.one("#mobileNav"),
                    to: {
                        height: 0
                    },
                    duration: .2,
                    easing: "easeBoth"
                }).run(), new e.Anim({
                    node: e.one("#header"),
                    to: {
                        top: 0
                    },
                    duration: .2,
                    easing: "easeBoth"
                }).run()) : (new e.Anim({
                    node: e.one("#mobileNav"),
                    to: {
                        height: t
                    },
                    duration: .2,
                    easing: "easeBoth"
                }).run(), new e.Anim({
                    node: e.one("#header"),
                    to: {
                        top: t
                    },
                    duration: .2,
                    easing: "easeBoth"
                }).run()), e.one("#mobileNav").toggleClass("menu-open")
            }), e.all(".folder-toggle-label").each(function(a) {
                a.on("click", function() {
                    e.later(200, this, function() {
                        if (e.one("#mobileNavWrapper")) {
                            var a = e.one("#mobileNavWrapper");
                            a.setStyle("display", "none"), a.get("offsetHeight"), a.setStyle("display", null)
                        }
                        var t = parseInt(a.get("offsetHeight"), 10);
                        e.one("#mobileNav").hasClass("menu-open") && (new e.Anim({
                            node: e.one("#mobileNav"),
                            to: {
                                height: t
                            },
                            duration: .2,
                            easing: "easeBoth"
                        }).run(), new e.Anim({
                            node: e.one("#header"),
                            to: {
                                top: t
                            },
                            duration: .2,
                            easing: "easeBoth"
                        }).run())
                    })
                })
            }), b = e.one("body"), C = parseInt(b.getComputedStyle("width"), 10), e.one("body").hasClass("layout-style-center") && e.all("#topNav .subnav").each(function(e) {
                e.setStyle("marginLeft", -(parseInt(e.getComputedStyle("width"), 10) / 2) + "px")
            });
            var c = e.one(".logo");
            if (t(), e.one("window").on("resize", t), e.one("#projectPages") && (n(), r(), a(), e.on("hashchange", a), e.one("#projectNav").delegate("click", function(a) {
                    var t = e.one("#projectPages .active-project").previous(".project");
                    t ? (i(), window.location.hash = t.getAttribute("data-url")) : a.currentTarget.addClass("disabled")
                }, ".prev-project"), e.one("#projectNav").delegate("click", function(a) {
                    var t = e.one("#projectPages .active-project").next(".project");
                    t ? (i(), window.location.hash = t.getAttribute("data-url")) : a.currentTarget.addClass("disabled")
                }, ".next-project"), 0 < e.UA.ie && e.UA.ie < 9)) {
                var d = e.Squarespace.Template.getTweakValue("TPerRow");
                d && (d = parseInt(d), e.all("#projectThumbs .project").each(function(e, a) {
                    a % d === 0 && e.setStyle("clear", "left")
                }))
            }
            if (e.one("body").hasClass("collection-type-gallery"))
                if (C < 750) e.all("img[data-src]").each(function(a, t) {
                    e.later(100 * t, this, function() {
                        ImageLoader.load(a, {
                            load: !0
                        })
                    })
                }), e.all(".sqs-video-wrapper").each(function(a) {
                    a.plug(e.Squarespace.VideoLoader)
                });
                else {
                    var u = e.Squarespace.Template.getTweakValue("gallery-auto-play") + "" == "true",
                        p = 3e3;
                    e.Squarespace.Template.getTweakValue("galleryPlaySpeed") && (p = 1e3 * e.Squarespace.Template.getTweakValue("galleryPlaySpeed"));
                    var f = e.one("body").get("winHeight"),
                        g = 2 * parseInt(e.Squarespace.Template.getTweakValue("pagePadding"), 10),
                        h = 2 * parseInt(e.Squarespace.Template.getTweakValue("outerPadding"), 10) + 2 * parseInt(e.Squarespace.Template.getTweakValue("topPadding"), 10),
                        v = parseInt(e.one("#footer").get("offsetHeight"), 10),
                        m = e.one("#slideshowWrapper").getY(),
                        w = m + g + v + h;
                    f - w > 500 ? e.one("#slideshowWrapper").setStyle("height", f - w) : e.one("#slideshowWrapper").setStyle("height", "500px"), e.one("window").on("resize", function(a) {
                        f = e.one("body").get("winHeight"), f - w > 500 ? e.one("#slideshowWrapper").setStyle("height", f - w) : e.one("#slideshowWrapper").setStyle("height", "500px"), y.refresh()
                    });
                    var y = new e.Squarespace.Gallery2({
                        container: e.one("#slideshow"),
                        elements: {
                            next: ".next-slide",
                            previous: ".prev-slide",
                            controls: "#dotControls, #numberControls, #tinyThumbControls"
                        },
                        loop: !0,
                        autoplay: u,
                        autoplayOptions: {
                            randomize: !1,
                            timeout: p,
                            pauseOnMouseover: []
                        },
                        design: "stacked",
                        designOptions: {
                            autoHeight: !1,
                            preloadCount: Modernizr.touch ? 0 : 1
                        },
                        lazyLoad: !0,
                        loaderOptions: {
                            mode: "fit",
                            load: !1
                        },
                        historyHash: !0
                    });
                    Modernizr.touch || e.all("#tinyThumbControls img").each(function(e) {
                        e.removeAttribute("data-load"), ImageLoader.load(e)
                    })
                }
            var b, C;
            o(), e.Squarespace.Management && e.Squarespace.Management.on("tweak", function(e) {
                "blogSidebarWidth" == e.getName() && o()
            });
            var S = e.one("#footer a[href=http://www.squarespace.com]");
            S && S.set("href", "http://www.squarespace.com?channel=word_of_mouth&subchannel=customer&source=footer&campaign=" + Static.SQUARESPACE_CONTEXT.website.id)
        });
        var s = {};
        l(function() {
            e.all("#projectThumbs img[data-src]").each(function(e) {
                ImageLoader.load(e, {
                    load: !0
                })
            })
        }, 250);
        var c = e.one(".user-account-link"),
            d = function() {
                e.all(".user-account-link").each(function(e) {
                    u(e.getDOMNode())
                })
            },
            u = function(e) {
                var a = e.querySelector(".sign-in"),
                    t = e.querySelector(".my-account"),
                    n = o.UserAccounts.isUserAuthenticated();
                a && n ? e.querySelector("a").removeChild(a) : t && !n && e.querySelector("a").removeChild(t), e.classList.add("loaded"), e.addEventListener("click", function(e) {
                    e.preventDefault(), o.UserAccounts.openAccountScreen()
                })
            };
        c && d()
    })
}]);