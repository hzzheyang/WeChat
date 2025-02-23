document.__wxjsjs__isLoaded = 'loaded';
(function() {
    function I(c) {
        true ? (D.push(c), c = O(), window.weixinPostMessageHandlers.weixinDispatchMessage.postMessage(c)) : (D.push(c), document.location = ba)
    }
    function O() {
        if (B._fetchQueue !== ca)
            return "";
        var c = s.stringify(D);
        D = [];
        var d = [];
        d[0] = c;
        d[1] = J;
        var a = d.join(""),
            d = "";
        "yes" === P && (d = K.SHA1(a).toString());
        a = {};
        a[da] = c;
        a[S] = d;
        return s.stringify(a)
    }
    function T(c) {
        if (B._handleMessageFromWeixin !== ea)
            return "{}";
        var d;
        d = c[fa];
        var c = c[S],
            a = [];
        a[0] = d;
        a[1] = J;
        var a = a.join(""),
            b = "";
        if ("yes" === P && (b = K.SHA1(a).toString(),
        b !== c))
            return "{}";
        var f;
        try {
            f = s.parse(d)
        } catch (o) {
            f = "undefined" !== typeof window.weixinJSONParse ? window.weixinJSONParse(d) : window.JSON.parse(d)
        }
        switch (f[U]) {
        case "callback":
            return "string" === typeof f[G] && "function" === typeof L[f[G]] ? (d = L[f[G]](f.__params), delete L[f[G]], s.stringify(d)) : s.stringify({
                __err_code: "cb404"
            });
        case "event":
            "object" === typeof f[V] && (W = f[V]);
            X = f[Y];
            if ("string" === typeof f[H]) {
                if ("function" === typeof E[f[H]] && M(f[H]))
                    return d = E[f[H]](f.__params), s.stringify(d);
                if ("function" === typeof F[f[H]])
                    return d =
                    F[f[H]](f.__params), s.stringify(d)
            }
            return s.stringify({
                __err_code: "ev404"
            })
        }
        return "{}"
    }
    function M(c) {
        return W.some(function(d) {
            return d === c
        })
    }
    function w(c) {
        if (B.log === ga) {
            for (var d = [], a = 0; a < arguments.length; a++)
                d.push(arguments[a]);
            var a = d.shift(),
                b;
            try {
                d.unshift(a), b = Q.apply(null, d)
            } catch (f) {
                b = c
            }
            p("log", {
                msg: b
            })
        }
    }
    function p(c, d, a) {
        if ("preInject" === document.__wxjsjs__isPreInject && !0 !== document.wxjsSysinit) {
            var b = {};
            b.params = d;
            b.callback = a;
            N[c] = b
        } else if (B.call === ha && c && "string" === typeof c) {
            "object" !==
            typeof d && (d = {});
            b = (ia++).toString();
            "function" === typeof a && (L[b] = a);
            a = [];
            a[0] = X;
            a[1] = J;
            var a = a.join(""),
                f = "";
            "yes" === P && (f = K.SHA1(a).toString());
            d[Y] = f;
            c = {
                func: c,
                params: d
            };
            c[U] = "call";
            c[G] = b;
            I(s.stringify(c))
        }
    }
    function A(c, d) {
        c && "string" === typeof c && "function" === typeof d && (F[c] = d)
    }
    function Z(c, d) {
        B.on === ja && c && "string" === typeof c && "function" === typeof d && (E[c] = d)
    }
    function C(c, d) {
        if ("function" === typeof E[c] && M(c))
            E[c](d);
        else if ("function" === typeof F[c])
            F[c](d)
    }
    function ka(c, d) {
        var a = new Image,
            b = !1;
        a.onload = function() {
            b || (b = !0, d(a))
        };
        a.src = c;
        setTimeout(function() {
            b || (b = !0, d(a))
        }, 1E3)
    }
    function la(c, d) {
        ka(c.src, function(a) {
            var b = /^data:image\/(png|jpg|jpeg|tiff|gif|bmp);base64,/i,
                f = "";
            if (a.src.match(b))
                f = a.src;
            else if (629145.6 > a.width * a.height) {
                var o = document.createElement("canvas");
                o.width = a.width;
                o.height = a.height;
                o.getContext("2d").drawImage(a, 0, 0);
                var i = "jpg",
                    j = a.src.match(/\.(png|jpg|jpeg|tiff|gif|bmp)$/i);
                j && (i = j[1].toLowerCase());
                try {
                    f = o.toDataURL("image/" + i)
                } catch (k) {
                    w(k.message)
                }
            }
            d(f.replace(b,
            ""), a, c)
        })
    }
    function ma() {
        for (var c = q("audio"), d = 0; d < c.length; d++)
            if (!c[d].paused && !c[d].ended) {
                p("audioStateChanged", {
                    state: "play"
                });
                break
            }
        c.on("play", function() {
            p("audioStateChanged", {
                state: "play"
            })
        });
        c.on("ended", function() {
            p("audioStateChanged", {
                state: "ended"
            })
        });
        c.on("pause", function() {
            p("audioStateChanged", {
                state: "pause"
            })
        });
        c = q("video");
        c.on("play", function() {
            p("videoStateChanged", {
                state: "play"
            })
        });
        c.on("ended", function() {
            p("videoStateChanged", {
                state: "ended"
            })
        });
        c.on("pause", function() {
            p("videoStateChanged",
            {
                state: "pause"
            })
        })
    }
    function $() {
        var c = window.getSelection().toString();
        if (c && 0 < c.length)
            return c;
        for (var d = document.querySelectorAll("iframe"), a = 0; a < d.length; ++a)
            try {
                var b = d[a].contentWindow.getSelection().toString();
                if (0 < b.length) {
                    c = b;
                    break
                }
            } catch (f) {}
        return c
    }
    function aa(c) {
        var d = document.createElement("a");
        d.href = location.href;
        d.href = c;
        return d.href
    }
    var q = function() {
        function c(e) {
            return "[object Function]" == G.call(e)
        }
        function d(e) {
            return e instanceof Object
        }
        function a(e) {
            var a,
                b;
            if ("[object Object]" !==
            G.call(e))
                return !1;
            b = c(e.constructor) && e.constructor.prototype;
            if (!b || !hasOwnProperty.call(b, "isPrototypeOf"))
                return !1;
            for (a in e)
                ;
            return a === n || hasOwnProperty.call(e, a)
        }
        function b(e) {
            return e instanceof Array
        }
        function f(e) {
            return "number" == typeof e.length
        }
        function o(e) {
            return e.filter(function(e) {
                return e !== n && null !== e
            })
        }
        function i(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }
        function j(e) {
            return e in q ?
            q[e] : q[e] = RegExp("(^|\\s)" + e + "(\\s|$)")
        }
        function k(e, a) {
            return a === n ? g(e) : g(e).filter(a)
        }
        function m(e, a, b, h) {
            return c(a) ? a.call(e, b, h) : a
        }
        function l(e, a, b) {
            var c = e % 2 ? a : a.parentNode;
            c ? c.insertBefore(b, !e ? a.nextSibling : 1 == e ? c.firstChild : 2 == e ? a : null) : g(b).remove()
        }
        function r(e, a) {
            a(e);
            for (var b in e.childNodes)
                r(e.childNodes[b], a)
        }
        var n,
            h,
            g,
            x,
            t = [],
            u = t.slice,
            y = window.document,
            p = {},
            q = {},
            s = y.defaultView.getComputedStyle,
            w = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            },
            z = /^\s*<(\w+|!)[^>]*>/,
            A = [1, 3, 8, 9, 11],
            R = y.createElement("table"),
            B = y.createElement("tr"),
            C = {
                tr: y.createElement("tbody"),
                tbody: R,
                thead: R,
                tfoot: R,
                td: B,
                th: B,
                "*": y.createElement("div")
            },
            E = /complete|loaded|interactive/,
            H = /^\.([\w-]+)$/,
            I = /^#([\w-]+)$/,
            K = /^[\w-]+$/,
            G = {}.toString,
            v = {},
            F,
            D,
            J = y.createElement("div");
        v.matches = function(e, a) {
            if (!e || 1 !== e.nodeType)
                return !1;
            var b = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
            if (b)
                return b.call(e, a);
            var c;
            c = e.parentNode;
            (b = !c) && (c = J).appendChild(e);
            c = ~v.qsa(c, a).indexOf(e);
            b && J.removeChild(e);
            return c
        };
        F = function(e) {
            return e.replace(/-+(.)?/g, function(e, a) {
                return a ? a.toUpperCase() : ""
            })
        };
        D = function(e) {
            return e.filter(function(a, b) {
                return e.indexOf(a) == b
            })
        };
        v.fragment = function(e, a) {
            a === n && (a = z.test(e) && RegExp.$1);
            a in C || (a = "*");
            var b = C[a];
            b.innerHTML = "" + e;
            return g.each(u.call(b.childNodes), function() {
                b.removeChild(this)
            })
        };
        v.Z = function(e, a) {
            e = e || [];
            e.__proto__ = arguments.callee.prototype;
            e.selector = a || "";
            return e
        };
        v.isZ = function(e) {
            return e instanceof v.Z
        };
        v.init = function(e, h) {
            if (e) {
                if (c(e))
                    return g(y).ready(e);
                if (v.isZ(e))
                    return e;
                var x;
                if (b(e))
                    x = o(e);
                else if (a(e))
                    x = [g.extend({}, e)], e = null;
                else if (0 <= A.indexOf(e.nodeType) || e === window)
                    x = [e], e = null;
                else if (z.test(e))
                    x = v.fragment(e.trim(), RegExp.$1), e = null;
                else {
                    if (h !== n)
                        return g(h).find(e);
                    x = v.qsa(y, e)
                }
                return v.Z(x, e)
            }
            return v.Z()
        };
        g = function(e, a) {
            return v.init(e, a)
        };
        g.extend = function(e) {
            u.call(arguments, 1).forEach(function(a) {
                for (h in a)
                    a[h] !== n && (e[h] = a[h])
            });
            return e
        };
        v.qsa = function(e, a) {
            var b;
            return e === y && I.test(a) ? (b = e.getElementById(RegExp.$1)) ? [b] : t : 1 !== e.nodeType && 9 !== e.nodeType ? t : u.call(H.test(a) ? e.getElementsByClassName(RegExp.$1) : K.test(a) ? e.getElementsByTagName(a) : e.querySelectorAll(a))
        };
        g.isFunction = c;
        g.isObject = d;
        g.isArray = b;
        g.isPlainObject = a;
        g.inArray = function(e, a, b) {
            return t.indexOf.call(a, e, b)
        };
        g.trim = function(e) {
            return e.trim()
        };
        g.uuid = 0;
        g.map = function(e, a) {
            var b,
                c = [],
                h;
            if (f(e))
                for (h = 0; h < e.length; h++)
                    b = a(e[h], h), null != b && c.push(b);
            else
                for (h in e)
                    b =
                    a(e[h], h), null != b && c.push(b);
            return 0 < c.length ? [].concat.apply([], c) : c
        };
        g.each = function(e, a) {
            var b;
            if (f(e))
                for (b = 0; b < e.length && !1 !== a.call(e[b], b, e[b]); b++)
                    ;
            else
                for (b in e)
                    if (!1 === a.call(e[b], b, e[b]))
                        break;
            return e
        };
        g.fn = {
            forEach: t.forEach,
            reduce: t.reduce,
            push: t.push,
            indexOf: t.indexOf,
            concat: t.concat,
            map: function(e) {
                return g.map(this, function(a, b) {
                    return e.call(a, b, a)
                })
            },
            slice: function() {
                return g(u.apply(this, arguments))
            },
            ready: function(e) {
                E.test(y.readyState) ? e(g) : y.addEventListener("DOMContentLoaded",
                function() {
                    e(g)
                }, !1);
                return this
            },
            get: function(e) {
                return e === n ? u.call(this) : this[e]
            },
            toArray: function() {
                return this.get()
            },
            size: function() {
                return this.length
            },
            remove: function() {
                return this.each(function() {
                    null != this.parentNode && this.parentNode.removeChild(this)
                })
            },
            each: function(e) {
                this.forEach(function(a, b) {
                    e.call(a, b, a)
                });
                return this
            },
            filter: function(e) {
                return g([].filter.call(this, function(a) {
                    return v.matches(a, e)
                }))
            },
            add: function(e, a) {
                return g(D(this.concat(g(e, a))))
            },
            is: function(e) {
                return 0 < this.length &&
                    v.matches(this[0], e)
            },
            not: function(e) {
                var a = [];
                if (c(e) && e.call !== n)
                    this.each(function(b) {
                        e.call(this, b) || a.push(this)
                    });
                else {
                    var b = "string" == typeof e ? this.filter(e) : f(e) && c(e.item) ? u.call(e) : g(e);
                    this.forEach(function(e) {
                        0 > b.indexOf(e) && a.push(e)
                    })
                }
                return g(a)
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            },
            first: function() {
                var e = this[0];
                return e && !d(e) ? e : g(e)
            },
            last: function() {
                var e = this[this.length - 1];
                return e && !d(e) ? e : g(e)
            },
            find: function(e) {
                var a;
                a = 1 == this.length ? v.qsa(this[0], e) :
                this.map(function() {
                    return v.qsa(this, e)
                });
                return g(a)
            },
            closest: function(e, a) {
                for (var b = this[0]; b && !v.matches(b, e);)
                    b = b !== a && b !== y && b.parentNode;
                return g(b)
            },
            parents: function(e) {
                for (var a = [], b = this; 0 < b.length;)
                    b = g.map(b, function(e) {
                        if ((e = e.parentNode) && e !== y && 0 > a.indexOf(e))
                            return a.push(e), e
                    });
                return k(a, e)
            },
            parent: function(e) {
                return k(D(this.pluck("parentNode")), e)
            },
            children: function(e) {
                return k(this.map(function() {
                    return u.call(this.children)
                }), e)
            },
            siblings: function(e) {
                return k(this.map(function(e,
                a) {
                    return u.call(a.parentNode.children).filter(function(e) {
                        return e !== a
                    })
                }), e)
            },
            empty: function() {
                return this.each(function() {
                    this.innerHTML = ""
                })
            },
            pluck: function(e) {
                return this.map(function() {
                    return this[e]
                })
            },
            show: function() {
                return this.each(function() {
                    "none" == this.style.display && (this.style.display = null);
                    if ("none" == s(this, "").getPropertyValue("display")) {
                        var e = this.style,
                            a = this.nodeName,
                            b,
                            c;
                        p[a] || (b = y.createElement(a), y.body.appendChild(b), c = s(b, "").getPropertyValue("display"), b.parentNode.removeChild(b),
                        "none" == c && (c = "block"), p[a] = c);
                        e.display = p[a]
                    }
                })
            },
            replaceWith: function(e) {
                return this.before(e).remove()
            },
            wrap: function(e) {
                return this.each(function() {
                    g(this).wrapAll(g(e)[0].cloneNode(!1))
                })
            },
            wrapAll: function(e) {
                this[0] && (g(this[0]).before(e = g(e)), e.append(this));
                return this
            },
            unwrap: function() {
                this.parent().each(function() {
                    g(this).replaceWith(g(this).children())
                });
                return this
            },
            clone: function() {
                return g(this.map(function() {
                    return this.cloneNode(!0)
                }))
            },
            hide: function() {
                return this.css("display", "none")
            },
            toggle: function(e) {
                return (e === n ? "none" == this.css("display") : e) ? this.show() : this.hide()
            },
            prev: function() {
                return g(this.pluck("previousElementSibling"))
            },
            next: function() {
                return g(this.pluck("nextElementSibling"))
            },
            html: function(e) {
                return e === n ? 0 < this.length ? this[0].innerHTML : null : this.each(function(a) {
                    var b = this.innerHTML;
                    g(this).empty().append(m(this, e, a, b))
                })
            },
            text: function(e) {
                return e === n ? 0 < this.length ? this[0].textContent : null : this.each(function() {
                    this.textContent = e
                })
            },
            attr: function(e, a) {
                var b;
                return "string" ==
                typeof e && a === n ? 0 == this.length || 1 !== this[0].nodeType ? n : "value" == e && "INPUT" == this[0].nodeName ? this.val() : !(b = this[0].getAttribute(e)) && e in this[0] ? this[0][e] : b : this.each(function(b) {
                    if (1 === this.nodeType)
                        if (d(e))
                            for (h in e)
                                this.setAttribute(h, e[h]);
                        else
                            this.setAttribute(e, m(this, a, b, this.getAttribute(e)))
                })
            },
            removeAttr: function(e) {
                return this.each(function() {
                    1 === this.nodeType && this.removeAttribute(e)
                })
            },
            prop: function(e, a) {
                return a === n ? this[0] ? this[0][e] : n : this.each(function(b) {
                    this[e] = m(this, a, b,
                    this[e])
                })
            },
            data: function(e, a) {
                var b = this.attr("data-" + i(e), a);
                return null !== b ? b : n
            },
            val: function(e) {
                return e === n ? 0 < this.length ? this[0].value : n : this.each(function(a) {
                    this.value = m(this, e, a, this.value)
                })
            },
            offset: function() {
                if (0 == this.length)
                    return null;
                var a = this[0].getBoundingClientRect();
                return {
                    left: a.left + window.pageXOffset,
                    top: a.top + window.pageYOffset,
                    width: a.width,
                    height: a.height
                }
            },
            css: function(a, b) {
                if (b === n && "string" == typeof a)
                    return 0 == this.length ? n : this[0].style[F(a)] || s(this[0], "").getPropertyValue(a);
                var c = "";
                for (h in a)
                    "string" == typeof a[h] && "" == a[h] ? this.each(function() {
                        this.style.removeProperty(i(h))
                    }) : c += i(h) + ":" + ("number" == typeof a[h] && !w[i(h)] ? a[h] + "px" : a[h]) + ";";
                "string" == typeof a && ("" == b ? this.each(function() {
                    this.style.removeProperty(i(a))
                }) : c = i(a) + ":" + ("number" == typeof b && !w[i(a)] ? b + "px" : b));
                return this.each(function() {
                    this.style.cssText += ";" + c
                })
            },
            index: function(a) {
                return a ? this.indexOf(g(a)[0]) : this.parent().children().indexOf(this[0])
            },
            hasClass: function(a) {
                return 1 > this.length ? !1 : j(a).test(this[0].className)
            },
            addClass: function(a) {
                return this.each(function(b) {
                    x = [];
                    var c = this.className;
                    m(this, a, b, c).split(/\s+/g).forEach(function(a) {
                        g(this).hasClass(a) || x.push(a)
                    }, this);
                    x.length && (this.className += (c ? " " : "") + x.join(" "))
                })
            },
            removeClass: function(a) {
                return this.each(function(b) {
                    if (a === n)
                        return this.className = "";
                    x = this.className;
                    m(this, a, b, x).split(/\s+/g).forEach(function(a) {
                        x = x.replace(j(a), " ")
                    });
                    this.className = x.trim()
                })
            },
            toggleClass: function(a, b) {
                return this.each(function(c) {
                    c = m(this, a, c, this.className);
                    (b === n ? !g(this).hasClass(c) : b) ? g(this).addClass(c) : g(this).removeClass(c)
                })
            }
        };
        ["width", "height"].forEach(function(a) {
            g.fn[a] = function(b) {
                var c,
                    h = a.replace(/./, function(a) {
                        return a[0].toUpperCase()
                    });
                return b === n ? this[0] == window ? window["inner" + h] : this[0] == y ? y.documentElement["offset" + h] : (c = this.offset()) && c[a] : this.each(function(c) {
                    var h = g(this);
                    h.css(a, m(this, b, c, h[a]()))
                })
            }
        });
        ["after", "prepend", "before", "append"].forEach(function(a, b) {
            g.fn[a] = function() {
                var a = g.map(arguments, function(a) {
                    return d(a) ?
                    a : v.fragment(a)
                });
                if (1 > a.length)
                    return this;
                var e = this.length,
                    c = 1 < e,
                    h = 2 > b;
                return this.each(function(x, t) {
                    for (var g = 0; g < a.length; g++) {
                        var d = a[h ? a.length - g - 1 : g];
                        r(d, function(a) {
                            null != a.nodeName && ("SCRIPT" === a.nodeName.toUpperCase() && (!a.type || "text/javascript" === a.type)) && window.eval.call(window, a.innerHTML)
                        });
                        c && x < e - 1 && (d = d.cloneNode(!0));
                        l(b, t, d)
                    }
                })
            };
            g.fn[b % 2 ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
                g(b)[a](this);
                return this
            }
        });
        v.Z.prototype = g.fn;
        v.camelize = F;
        v.uniq = D;
        g._WXJS = v;
        return g
    }();
    window._WXJS = q;
    (function(c) {
        function d(a) {
            return a._zid || (a._zid = l++)
        }
        function a(a, c, h, g) {
            c = b(c);
            if (c.ns)
                var f = RegExp("(?:^| )" + c.ns.replace(" ", " .* ?") + "(?: |$)");
            return (m[d(a)] || []).filter(function(a) {
                return a && (!c.e || a.e == c.e) && (!c.ns || f.test(a.ns)) && (!h || d(a.fn) === d(h)) && (!g || a.sel == g)
            })
        }
        function b(a) {
            a = ("" + a).split(".");
            return {
                e: a[0],
                ns: a.slice(1).sort().join(" ")
            }
        }
        function f(a, b, h) {
            c.isObject(a) ? c.each(a, h) : a.split(/\s/).forEach(function(a) {
                h(a, b)
            })
        }
        function o(a, h, g, i, o, l) {
            var l = !!l,
                n = d(a),
                j = m[n] || (m[n] = []);
            f(h, g, function(h, g) {
                var d = o && o(g, h),
                    t = d || g,
                    f = function(b) {
                        var c = t.apply(a, [b].concat(b.data));
                        !1 === c && b.preventDefault();
                        return c
                    },
                    d = c.extend(b(h), {
                        fn: g,
                        proxy: f,
                        sel: i,
                        del: d,
                        i: j.length
                    });
                j.push(d);
                a.addEventListener(d.e, f, l)
            })
        }
        function i(b, c, h, g) {
            var i = d(b);
            f(c || "", h, function(c, h) {
                a(b, c, h, g).forEach(function(a) {
                    delete m[i][a.i];
                    b.removeEventListener(a.e, a.proxy, !1)
                })
            })
        }
        function j(a) {
            var b = c.extend({
                originalEvent: a
            }, a);
            c.each(g, function(c, g) {
                b[c] = function() {
                    this[g] = n;
                    return a[c].apply(a,
                    arguments)
                };
                b[g] = h
            });
            return b
        }
        function k(a) {
            if (!("defaultPrevented" in a)) {
                a.defaultPrevented = !1;
                var b = a.preventDefault;
                a.preventDefault = function() {
                    this.defaultPrevented = !0;
                    b.call(this)
                }
            }
        }
        var m = {},
            l = 1,
            r = {};
        r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents";
        c.event = {
            add: o,
            remove: i
        };
        c.proxy = function(a, b) {
            if (c.isFunction(a)) {
                var h = function() {
                    return a.apply(b, arguments)
                };
                h._zid = d(a);
                return h
            }
            if ("string" == typeof b)
                return c.proxy(a[b], a);
            throw new TypeError("expected function");
        };
        c.fn.bind = function(a,
        b) {
            return this.each(function() {
                o(this, a, b)
            })
        };
        c.fn.unbind = function(a, b) {
            return this.each(function() {
                i(this, a, b)
            })
        };
        c.fn.one = function(a, b) {
            return this.each(function(c, h) {
                o(this, a, b, null, function(a, b) {
                    return function() {
                        var c = a.apply(h, arguments);
                        i(h, b, a);
                        return c
                    }
                })
            })
        };
        var n = function() {
                return !0
            },
            h = function() {
                return !1
            },
            g = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        c.fn.delegate = function(a, b, h) {
            var g = !1;
            if ("blur" ==
            b || "focus" == b)
                c.iswebkit ? b = "blur" == b ? "focusout" : "focus" == b ? "focusin" : b : g = !0;
            return this.each(function(d, f) {
                o(f, b, h, a, function(b) {
                    return function(h) {
                        var g,
                            d = c(h.target).closest(a, f).get(0);
                        if (d)
                            return g = c.extend(j(h), {
                                currentTarget: d,
                                liveFired: f
                            }), b.apply(d, [g].concat([].slice.call(arguments, 1)))
                    }
                }, g)
            })
        };
        c.fn.undelegate = function(a, b, c) {
            return this.each(function() {
                i(this, b, c, a)
            })
        };
        c.fn.live = function(a, b) {
            c(document.body).delegate(this.selector, a, b);
            return this
        };
        c.fn.die = function(a, b) {
            c(document.body).undelegate(this.selector,
            a, b);
            return this
        };
        c.fn.on = function(a, b, h) {
            return void 0 == b || c.isFunction(b) ? this.bind(a, b) : this.delegate(b, a, h)
        };
        c.fn.off = function(a, b, h) {
            return void 0 == b || c.isFunction(b) ? this.unbind(a, b) : this.undelegate(b, a, h)
        };
        c.fn.trigger = function(a, b) {
            "string" == typeof a && (a = c.Event(a));
            k(a);
            a.data = b;
            return this.each(function() {
                "dispatchEvent" in this && this.dispatchEvent(a)
            })
        };
        c.fn.triggerHandler = function(b, h) {
            var g,
                d;
            this.each(function(f, i) {
                g = j("string" == typeof b ? c.Event(b) : b);
                g.data = h;
                g.target = i;
                c.each(a(i, b.type ||
                b), function(a, b) {
                    d = b.proxy(g);
                    if (g.isImmediatePropagationStopped())
                        return !1
                })
            });
            return d
        };
        "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(a) {
            c.fn[a] = function(b) {
                return this.bind(a, b)
            }
        });
        ["focus", "blur"].forEach(function(a) {
            c.fn[a] = function(b) {
                if (b)
                    this.bind(a, b);
                else if (this.length)
                    try {
                        this.get(0)[a]()
                    } catch (c) {}
                return this
            }
        });
        c.Event = function(a, b) {
            var c = document.createEvent(r[a] ||
                "Events"),
                h = !0;
            if (b)
                for (var g in b)
                    "bubbles" == g ? h = !!b[g] : c[g] = b[g];
            c.initEvent(a, h, !0, null, null, null, null, null, null, null, null, null, null, null, null);
            return c
        }
    })(q);
    (function(c) {
        function d(a) {
            var b = this.os = {},
                c = this.browser = {},
                d = a.match(/WebKit\/([\d.]+)/),
                i = a.match(/(Android)\s+([\d.]+)/),
                j = a.match(/(iPad).*OS\s([\d_]+)/),
                k = !j && a.match(/(iPhone\sOS)\s([\d_]+)/),
                m = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                l = m && a.match(/TouchPad/),
                r = a.match(/Kindle\/([\d.]+)/),
                n = a.match(/Silk\/([\d._]+)/),
                h = a.match(/(BlackBerry).*Version\/([\d.]+)/);
            if (c.webkit = !!d)
                c.version = d[1];
            i && (b.android = !0, b.version = i[2]);
            k && (b.ios = b.iphone = !0, b.version = k[2].replace(/_/g, "."));
            j && (b.ios = b.ipad = !0, b.version = j[2].replace(/_/g, "."));
            m && (b.webos = !0, b.version = m[2]);
            l && (b.touchpad = !0);
            h && (b.blackberry = !0, b.version = h[2]);
            r && (b.kindle = !0, b.version = r[1]);
            n && (c.silk = !0, c.version = n[1]);
            !n && (b.android && a.match(/Kindle Fire/)) && (c.silk = !0)
        }
        d.call(c, navigator.userAgent);
        c.__detect = d
    })(q);
    var Q = function() {
            function c(a) {
                return Object.prototype.toString.call(a).slice(8,
                -1).toLowerCase()
            }
            var d = function() {
                d.cache.hasOwnProperty(arguments[0]) || (d.cache[arguments[0]] = d.parse(arguments[0]));
                return d.format.call(null, d.cache[arguments[0]], arguments)
            };
            d.format = function(a, b) {
                var d = 1,
                    o = a.length,
                    i = "",
                    j = [],
                    k,
                    m,
                    l,
                    r;
                for (k = 0; k < o; k++)
                    if (i = c(a[k]), "string" === i)
                        j.push(a[k]);
                    else if ("array" === i) {
                        l = a[k];
                        if (l[2]) {
                            i = b[d];
                            for (m = 0; m < l[2].length; m++) {
                                if (!i.hasOwnProperty(l[2][m]))
                                    throw Q('[sprintf] property "%s" does not exist', l[2][m]);
                                i = i[l[2][m]]
                            }
                        } else
                            i = l[1] ? b[l[1]] : b[d++];
                        if (/[^s]/.test(l[8]) &&
                        "number" != c(i))
                            throw Q("[sprintf] expecting number but found %s", c(i));
                        switch (l[8]) {
                        case "b":
                            i = i.toString(2);
                            break;
                        case "c":
                            i = String.fromCharCode(i);
                            break;
                        case "d":
                            i = parseInt(i, 10);
                            break;
                        case "e":
                            i = l[7] ? i.toExponential(l[7]) : i.toExponential();
                            break;
                        case "f":
                            i = l[7] ? parseFloat(i).toFixed(l[7]) : parseFloat(i);
                            break;
                        case "o":
                            i = i.toString(8);
                            break;
                        case "s":
                            i = (i = "" + i) && l[7] ? i.substring(0, l[7]) : i;
                            break;
                        case "u":
                            i = Math.abs(i);
                            break;
                        case "x":
                            i = i.toString(16);
                            break;
                        case "X":
                            i = i.toString(16).toUpperCase()
                        }
                        i =
                        /[def]/.test(l[8]) && l[3] && 0 <= i ? "+" + i : i;
                        m = l[4] ? "0" == l[4] ? "0" : l[4].charAt(1) : " ";
                        r = l[6] - ("" + i).length;
                        if (l[6]) {
                            for (var n = []; 0 < r; n[--r] = m)
                                ;
                            m = n.join("")
                        } else
                            m = "";
                        j.push(l[5] ? i + m : m + i)
                    }
                return j.join("")
            };
            d.cache = {};
            d.parse = function(a) {
                for (var b = [], c = [], d = 0; a;) {
                    if (null !== (b = /^[^\x25]+/.exec(a)))
                        c.push(b[0]);
                    else if (null !== (b = /^\x25{2}/.exec(a)))
                        c.push("%");
                    else if (null !== (b = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))) {
                        if (b[2]) {
                            var d = d | 1,
                                i = [],
                                j = b[2],
                                k =
                                [];
                            if (null !== (k = /^([a-z_][a-z_\d]*)/i.exec(j)))
                                for (i.push(k[1]); "" !== (j = j.substring(k[0].length));)
                                    if (null !== (k = /^\.([a-z_][a-z_\d]*)/i.exec(j)))
                                        i.push(k[1]);
                                    else if (null !== (k = /^\[(\d+)\]/.exec(j)))
                                        i.push(k[1]);
                                    else
                                        throw "[sprintf] huh?";
                            else
                                throw "[sprintf] huh?";
                            b[2] = i
                        } else
                            d |= 2;
                        if (3 === d)
                            throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                        c.push(b)
                    } else
                        throw "[sprintf] huh?";
                    a = a.substring(b[0].length)
                }
                return c
            };
            return d
        }(),
        s;
    s || (s = {});
    (function() {
        function c(a) {
            return 10 >
            a ? "0" + a : a
        }
        function d(a) {
            f.lastIndex = 0;
            return f.test(a) ? '"' + a.replace(f, function(a) {
                var b = j[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }
        function a(b, c) {
            var f,
                n,
                h,
                g,
                j = o,
                t,
                u = c[b];
            "function" === typeof k && (u = k.call(c, b, u));
            switch (typeof u) {
            case "string":
                return d(u);
            case "number":
                return isFinite(u) ? "" + u : "null";
            case "boolean":
            case "null":
                return "" + u;
            case "object":
                if (!u)
                    return "null";
                o += i;
                t = [];
                if ("[object Array]" === Object.prototype.toString.apply(u)) {
                    g =
                    u.length;
                    for (f = 0; f < g; f += 1)
                        t[f] = a(f, u) || "null";
                    h = 0 === t.length ? "[]" : o ? "[\n" + o + t.join(",\n" + o) + "\n" + j + "]" : "[" + t.join(",") + "]";
                    o = j;
                    return h
                }
                if (k && "object" === typeof k) {
                    g = k.length;
                    for (f = 0; f < g; f += 1)
                        "string" === typeof k[f] && (n = k[f], (h = a(n, u)) && t.push(d(n) + (o ? ": " : ":") + h))
                } else
                    for (n in u)
                        Object.prototype.hasOwnProperty.call(u, n) && (h = a(n, u)) && t.push(d(n) + (o ? ": " : ":") + h);
                h = 0 === t.length ? "{}" : o ? "{\n" + o + t.join(",\n" + o) + "\n" + j + "}" : "{" + t.join(",") + "}";
                o = j;
                return h
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON =
        function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + c(this.getUTCMonth() + 1) + "-" + c(this.getUTCDate()) + "T" + c(this.getUTCHours()) + ":" + c(this.getUTCMinutes()) + ":" + c(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            o,
            i,
            j = {
                "\u0008": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\u000c": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            k;
        "function" !== typeof s.stringify && (s.stringify = function(b, c, d) {
            var f;
            i = o = "";
            if (typeof d === "number")
                for (f = 0; f < d; f = f + 1)
                    i = i + " ";
            else
                typeof d === "string" && (i = d);
            if ((k = c) && typeof c !== "function" && (typeof c !== "object" || typeof c.length !== "number"))
                throw Error("JSON.stringify");
            return a("", {
                "": b
            })
        });
        "function" !== typeof s.parse && (s.parse = function(a, c) {
            function d(a, b) {
                var f,
                    i,
                    j = a[b];
                if (j && typeof j === "object")
                    for (f in j)
                        if (Object.prototype.hasOwnProperty.call(j,
                        f)) {
                            i = d(j, f);
                            i !== void 0 ? j[f] = i : delete j[f]
                        }
                return c.call(a, b, j)
            }
            var f,
                a = "" + a;
            b.lastIndex = 0;
            b.test(a) && (a = a.replace(b, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                f = eval("(" + a + ")");
                return typeof c === "function" ? d({
                    "": f
                }, "") : f
            }
            throw new SyntaxError("JSON.parse");
        })
    })();
    var K = K || function(c,
    d) {
        var a = {},
            b = a.lib = {},
            f = function() {},
            o = b.Base = {
                extend: function(a) {
                    f.prototype = this;
                    var b = new f;
                    a && b.mixIn(a);
                    b.hasOwnProperty("init") || (b.init = function() {
                        b.$super.init.apply(this, arguments)
                    });
                    b.init.prototype = b;
                    b.$super = this;
                    return b
                },
                create: function() {
                    var a = this.extend();
                    a.init.apply(a, arguments);
                    return a
                },
                init: function() {},
                mixIn: function(a) {
                    for (var b in a)
                        a.hasOwnProperty(b) && (this[b] = a[b]);
                    a.hasOwnProperty("toString") && (this.toString = a.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            },
            i = b.WordArray = o.extend({
                init: function(a, b) {
                    a = this.words = a || [];
                    this.sigBytes = b != d ? b : 4 * a.length
                },
                toString: function(a) {
                    return (a || k).stringify(this)
                },
                concat: function(a) {
                    var b = this.words,
                        c = a.words,
                        d = this.sigBytes,
                        a = a.sigBytes;
                    this.clamp();
                    if (d % 4)
                        for (var f = 0; f < a; f++)
                            b[d + f >>> 2] |= (c[f >>> 2] >>> 24 - 8 * (f % 4) & 255) << 24 - 8 * ((d + f) % 4);
                    else if (65535 < c.length)
                        for (f = 0; f < a; f += 4)
                            b[d + f >>> 2] = c[f >>> 2];
                    else
                        b.push.apply(b, c);
                    this.sigBytes += a;
                    return this
                },
                clamp: function() {
                    var a = this.words,
                        b = this.sigBytes;
                    a[b >>> 2] &= 4294967295 <<
                    32 - 8 * (b % 4);
                    a.length = c.ceil(b / 4)
                },
                clone: function() {
                    var a = o.clone.call(this);
                    a.words = this.words.slice(0);
                    return a
                },
                random: function(a) {
                    for (var b = [], d = 0; d < a; d += 4)
                        b.push(4294967296 * c.random() | 0);
                    return new i.init(b, a)
                }
            }),
            j = a.enc = {},
            k = j.Hex = {
                stringify: function(a) {
                    for (var b = a.words, a = a.sigBytes, c = [], d = 0; d < a; d++) {
                        var f = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                        c.push((f >>> 4).toString(16));
                        c.push((f & 15).toString(16))
                    }
                    return c.join("")
                },
                parse: function(a) {
                    for (var b = a.length, c = [], d = 0; d < b; d += 2)
                        c[d >>> 3] |= parseInt(a.substr(d, 2),
                        16) << 24 - 4 * (d % 8);
                    return new i.init(c, b / 2)
                }
            },
            m = j.Latin1 = {
                stringify: function(a) {
                    for (var b = a.words, a = a.sigBytes, c = [], d = 0; d < a; d++)
                        c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
                    return c.join("")
                },
                parse: function(a) {
                    for (var b = a.length, c = [], d = 0; d < b; d++)
                        c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
                    return new i.init(c, b)
                }
            },
            l = j.Utf8 = {
                stringify: function(a) {
                    try {
                        return decodeURIComponent(escape(m.stringify(a)))
                    } catch (b) {
                        throw Error("Malformed UTF-8 data");
                    }
                },
                parse: function(a) {
                    return m.parse(unescape(encodeURIComponent(a)))
                }
            },
            r = b.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new i.init;
                    this._nDataBytes = 0
                },
                _append: function(a) {
                    "string" == typeof a && (a = l.parse(a));
                    this._data.concat(a);
                    this._nDataBytes += a.sigBytes
                },
                _process: function(a) {
                    var b = this._data,
                        d = b.words,
                        f = b.sigBytes,
                        j = this.blockSize,
                        o = f / (4 * j),
                        o = a ? c.ceil(o) : c.max((o | 0) - this._minBufferSize, 0),
                        a = o * j,
                        f = c.min(4 * a, f);
                    if (a) {
                        for (var k = 0; k < a; k += j)
                            this._doProcessBlock(d, k);
                        k = d.splice(0, a);
                        b.sigBytes -= f
                    }
                    return new i.init(k, f)
                },
                clone: function() {
                    var a = o.clone.call(this);
                    a._data = this._data.clone();
                    return a
                },
                _minBufferSize: 0
            });
        b.Hasher = r.extend({
            cfg: o.extend(),
            init: function(a) {
                this.cfg = this.cfg.extend(a);
                this.reset()
            },
            reset: function() {
                r.reset.call(this);
                this._doReset()
            },
            update: function(a) {
                this._append(a);
                this._process();
                return this
            },
            finalize: function(a) {
                a && this._append(a);
                return this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(a) {
                return function(b, c) {
                    return (new a.init(c)).finalize(b)
                }
            },
            _createHmacHelper: function(a) {
                return function(b, c) {
                    return (new n.HMAC.init(a,
                    c)).finalize(b)
                }
            }
        });
        var n = a.algo = {};
        return a
    }(Math);
    (function() {
        var c = K,
            d = c.lib,
            a = d.WordArray,
            b = d.Hasher,
            f = [],
            d = c.algo.SHA1 = b.extend({
                _doReset: function() {
                    this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                },
                _doProcessBlock: function(a, b) {
                    for (var c = this._hash.words, d = c[0], m = c[1], l = c[2], r = c[3], n = c[4], h = 0; 80 > h; h++) {
                        if (16 > h)
                            f[h] = a[b + h] | 0;
                        else {
                            var g = f[h - 3] ^ f[h - 8] ^ f[h - 14] ^ f[h - 16];
                            f[h] = g << 1 | g >>> 31
                        }
                        g = (d << 5 | d >>> 27) + n + f[h];
                        g = 20 > h ? g + ((m & l | ~m & r) + 1518500249) : 40 > h ? g + ((m ^ l ^ r) + 1859775393) :
                        60 > h ? g + ((m & l | m & r | l & r) - 1894007588) : g + ((m ^ l ^ r) - 899497514);
                        n = r;
                        r = l;
                        l = m << 30 | m >>> 2;
                        m = d;
                        d = g
                    }
                    c[0] = c[0] + d | 0;
                    c[1] = c[1] + m | 0;
                    c[2] = c[2] + l | 0;
                    c[3] = c[3] + r | 0;
                    c[4] = c[4] + n | 0
                },
                _doFinalize: function() {
                    var a = this._data,
                        b = a.words,
                        c = 8 * this._nDataBytes,
                        d = 8 * a.sigBytes;
                    b[d >>> 5] |= 128 << 24 - d % 32;
                    b[(d + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296);
                    b[(d + 64 >>> 9 << 4) + 15] = c;
                    a.sigBytes = 4 * b.length;
                    this._process();
                    return this._hash
                },
                clone: function() {
                    var a = b.clone.call(this);
                    a._hash = this._hash.clone();
                    return a
                }
            });
        c.SHA1 = b._createHelper(d);
        c.HmacSHA1 =
        b._createHmacHelper(d)
    })();
    var D = [],
        ia = 1E3,
        L = {},
        F = {},
        z = {},
        N = [],
        U = "__msg_type",
        G = "__callback_id",
        H = "__event_id",
        ba = "weixin://dispatch_message/",
        W = [],
        E = {},
        V = "__runOn3rd_apis",
        J = "F1B1EA6A-FD38-46E6-B10C-13E5615D1DC8",
        fa = "__json_message",
        da = "__msg_queue",
        Y = "__context_key",
        X = "",
        P = "yes",
        S = "__sha_key",
        ea = T,
        ca = O,
        ga = w,
        ja = Z,
        ha = p,
        na = window.alert;
    window.alert = function(c) {
        if (!("yes" === document.__wxjsjs__isWebviewWillClosed || "yes" === document.__wxjsjs__isDisableAlertView))
            return na(c)
    };
    var oa = window.prompt;
    window.prompt = function(c,
    d) {
        if (!("yes" === document.__wxjsjs__isWebviewWillClosed || "yes" === document.__wxjsjs__isDisableAlertView))
            return oa(c, d)
    };
    var B = {
        invoke: p,
        call: p,
        on: Z,
        log: w,
        _getSelectedText: $,
        _fetchQueue: O
    };
    try {
        Object.defineProperty(B, "_handleMessageFromWeixin", {
            value: T,
            writable: !1,
            configurable: !1
        })
    } catch (ra) {
        return
    }
    if (window.WeixinJSBridge)
        q.extend(window.WeixinJSBridge, B);
    else
        try {
            Object.defineProperty(window, "WeixinJSBridge", {
                value: B,
                writable: !1,
                configurable: !1
            })
        } catch (sa) {
            return
        }
    (function() {
        function c(a, b) {
            for (var c =
                document.elementFromPoint(a, b), d = c; d && "IMG" != d.tagName;)
                d = d.parentNode;
            if (!d)
                var i = function(a, b) {
                        if (!a)
                            return null;
                        for (var c in a.childNodes) {
                            if (b(c))
                                return c;
                            var d = i(c, b);
                            if (d)
                                return d
                        }
                        return null
                    },
                    d = i(c, function(a) {
                        return a && "IMG" == a.tagName
                    });
            return d && "IMG" == d.tagName ? d : null
        }
        A("menu:setfont", function(a) {
            if ("function" === typeof changefont) {
                var b = parseInt(a.fontSize);
                changefont(b)
            } else if (!a.isFirstAutoSet || !("2" === a.fontSize || "100" === a.fontScale)) {
                b = parseInt(a.fontScale);
                if (50 <= b && 500 >= b)
                    a = a.fontScale +
                    "%";
                else
                    switch (a.fontSize) {
                    case "1":
                        a = "80%";
                        break;
                    case "2":
                        a = "100%";
                        break;
                    case "3":
                        a = "120%";
                        break;
                    case "4":
                        a = "140%";
                        break;
                    default:
                        return
                    }
                document.getElementsByTagName("body")[0].style.webkitTextSizeAdjust = a
            }
        });
        var d = function(a) {
            var b = !1,
                c = function(c) {
                    b || (b = !0, a(c))
                },
                d = q("img");
            if (0 == d.length)
                return c();
            for (var i = {}, j = [], k = 0; k < d.length; k++) {
                var m = d[k];
                if (!("none" == q(m).css("display") || "hidden" == q(m).css("visibility")) && !i[m.src])
                    i[m.src] = 1, j.push(m)
            }
            for (var l = [], k = 0; k < j.length && 100 > k; k++)
                d = j[k], i =
                new Image, i.onload = function() {
                    this.isLoaded = !0;
                    for (var a = 0, b = 0; b < l.length; b++) {
                        var d = l[b];
                        if (!d.isLoaded)
                            break;
                        a++;
                        if (290 < d.width && 290 < d.height) {
                            c(d);
                            break
                        }
                    }
                    a == l.length && c()
                }, i.src = d.src, l.push(i);
            setTimeout(function() {
                for (var a = 0; a < l.length; a++) {
                    var b = l[a];
                    if (b.isLoaded && 290 < b.width && 290 < b.height) {
                        c(b);
                        return
                    }
                }
                c()
            }, 1E3)
        };
        A("menu:share:timeline", function(a) {
            w("share timeline");
            var b;
            "string" === typeof a.title ? (b = a, p("shareTimeline", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI ||
                z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width = a.width, b.img_height = a.height);
                p("shareTimeline", b)
            }))
        });
        A("menu:share:qq", function(a) {
            w("share QQ");
            var b;
            "string" === typeof a.title ? (b = a, p("shareQQ", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI || z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width = a.width, b.img_height = a.height);
                p("shareQQ", b)
            }))
        });
        A("menu:share:weiboApp", function(a) {
            w("share Weibo App");
            var b;
            "string" ===
            typeof a.title ? (b = a, p("shareWeiboApp", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI || z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width = a.width, b.img_height = a.height);
                p("shareWeiboApp", b)
            }))
        });
        A("menu:share:QZone", function(a) {
            w("share QZone");
            var b;
            "string" === typeof a.title ? (b = a, p("shareQZone", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI || z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width =
                a.width, b.img_height = a.height);
                p("shareQZone", b)
            }))
        });
        A("general:share", function(a) {
            w("general share");
            "friend" === a.shareTo || "favorite" === a.shareTo || "connector" === a.shareTo || "wework" === a.shareTo ? C("menu:share:appmessage", a) : "timeline" === a.shareTo ? C("menu:share:timeline", a) : "weiboApp" == a.shareTo ? C("menu:share:weiboApp", a) : "QQ" === a.shareTo ? "function" === typeof E["menu:share:qq"] && M("menu:share:qq") ? C("menu:share:qq", a) : C("menu:share:appmessage", a) : "QZone" === a.shareTo ? "function" === typeof E["menu:share:QZone"] &&
            M("menu:share:QZone") ? C("menu:share:QZone", a) : C("menu:share:appmessage", a) : "weread" === a.shareTo && C("menu:share:appmessage", a)
        });
        A("menu:share:appmessage", function(a) {
            w("share appmessage");
            var b;
            "string" === typeof a.title ? (b = a, p("sendAppMessage", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI || z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width = a.width, b.img_height = a.height);
                p("sendAppMessage", b)
            }))
        });
        A("menu:share:email", function(a) {
            w("share email");
            p("sendEmail", "string" === typeof a.title ? a : {
                content: document.documentURI || z.init_url,
                title: document.title
            })
        });
        A("menu:share:facebook", function(a) {
            w("share facebook");
            var b;
            "string" === typeof a.title ? (b = a, p("shareFB", b)) : (b = {
                link: document.documentURI || z.init_url,
                desc: document.documentURI || z.init_url,
                title: document.title
            }, d(function(a) {
                a && (b.img_url = a.src, b.img_width = a.width, b.img_height = a.height);
                p("shareFB", b)
            }))
        });
        A("ui:longpress", function(a) {
            w("longpress at (" + a.x + "," + a.y + "," + a.webViewWidth + "," + a.webViewHeight +
            ")");
            var b = document.body.clientWidth / a.webViewWidth,
                d = c(a.x * b, a.y * b);
            d ? la(d, function(a, c, d) {
                p("saveImage", {
                    base64DataString: a,
                    url: c.src,
                    elementWidth: d.width / b,
                    elementHeight: d.height / b,
                    elementTop: d.getBoundingClientRect().top / b,
                    elementLeft: d.getBoundingClientRect().left / b
                })
            }) : w("cannot find image at (" + a.x + "," + a.y + "," + b + ")")
        });
        A("sys:init", function(a) {
            z = a;
            a = document.createEvent("Events");
            a.initEvent("WeixinJSBridgeReady");
            document.dispatchEvent(a);
            if ("preInject" === document.__wxjsjs__isPreInject) {
                document.wxjsSysinit =
                !0;
                for (var b in N)
                    a = N[b], p(b, a.params, a.callback);
                N = []
            }
        });
        A("sys:bridged", function() {
            try {
                _enable_old_UrlStyleImagePreviews(), _enable_old_ReaderShareUrls(), ma()
            } catch (a) {
                w("error %s", a)
            }
        });
        A("sys:record", function() {
            w("sys:record");
            d(function(a) {
                var b = 1500;
                document.title && (b = 1);
                setTimeout(function() {
                    data = {
                        title: document.title,
                        source: window.location.hostname
                    };
                    a && (data.img_url = a.src, data.img_width = a.width, data.img_height = a.height);
                    p("recordHistory", data)
                }, b)
            })
        })
    })();
    q.JSON = s;
    q.disableImageSelection = function() {
        for (var c =
            q("img"), d = 0; d < c.length; d++)
            q(c[d])._wxjs_old_touch_callout = q(c[d]).css("-webkit-touch-callout"), q(c[d])._wxjs_old_user_select = q(c[d]).css("-webkit-user-select");
        q("img").css({
            "-webkit-touch-callout": "none",
            "-webkit-user-select": "none"
        })
    };
    q.restoreImageSelection = function() {
        for (var c = q("img"), d = 0; d < c.length; d++)
            "undefined" != typeof q(c[d])._wxjs_old_touch_callout && q(c[d]).css({
                "-webkit-touch-callout": q(c[d])._wxjs_old_touch_callout,
                "-webkit-user-select": q(c[d])._wxjs_old_user_select
            })
    };
    q.disableAlertView =
    function() {
        window.__wxjs_sys_alert = window.alert;
        window.alert = null;
        window.__wxjs_sys_prompt = window.prompt;
        window.prompt = null;
        window.__wxjs_sys_confirm = window.confirm;
        window.confirm = null
    };
    q.restoreAlertView = function() {
        window.alert = window.__wxjs_sys_alert;
        window.prompt = window.__wxjs_sys_prompt;
        window.confirm = window.__wxjs_sys_confirm;
        delete window.__wxjs_sys_alert;
        delete window.__wxjs_sys_prompt;
        delete window.__wxjs_sys_confirm
    };
    if (true) {
        window.__wxjs_is_wkwebview = !0;
        q("document").ready(function() {
            var c =
            document.oncopy;
            document.oncopy = function() {
                var d = $();
                I(s.stringify({
                    __onCopy: d
                }));
                if ("undefined" !== typeof c && null !== c)
                    return c()
            };
            I(s.stringify({
                __domReadyNotify: J
            }))
        });
        if (history.pushState) {
            var pa = history.pushState;
            history.pushState = function(c, d, a) {
                var b = aa(a);
                I(s.stringify({
                    __pageStateChange: b
                }));
                pa.apply(this, arguments)
            }
        }
        if (history.replaceState) {
            var qa = history.replaceState;
            history.replaceState = function(c, d, a) {
                var b = aa(a);
                I(s.stringify({
                    __pageStateChange: b
                }));
                qa.apply(this, arguments)
            }
        }
    } else
        window.__wxjs_is_wkwebview =
        !1
})();
window.__wxjs_is_injected_success = "yes";


(function(j) {
    var k = {
            qqmusic: function(a, b) {
                var c = {
                    type: "music",
                    content: "",
                    title: a("#song_name")[0].innerHTML,
                    desc: a("#singer_name")[0].innerHTML,
                    img_url: a("#album_pic")[0].src,
                    link: document.location.href,
                    data_url: a("audio")[0].src
                };
                b(c)
            },
            qqvideo: function(a, b) {
                var c = {
                    type: "video",
                    content: "",
                    title: a(".mod_video_tit")[0].innerHTML,
                    desc: "",
                    img_url: a(".tvp-poster-img")[0].src,
                    link: document.location.href,
                    data_url: document.location.href
                };
                b(c)
            },
            qqnews: function(a, b) {
                b({
                    type: "link",
                    content: "",
                    title: contentModel.title,
                    desc: contentModel.desc,
                    img_url: contentModel.img_url,
                    link: contentModel.link
                })
            },
            mpmsg: function(a, b) {
                var c = {
                    type: "link",
                    content: "",
                    title: document.title,
                    desc: a("<div/>").html(a("#txt-desc").html()).text(),
                    img_url: _WXJS("#media img").attr("src"),
                    link: document.location.href
                };
                b(c)
            }
        },
        h = [{
            re: /^http(s)?:\/\/y.qq.com\/i\/song\.html\?songid=.*/,
            handlers: ["qqmusic"]
        }, {
            re: /^http(s)?:\/\/(m|3g)\.v\.qq\.com\/play\/play.html\?.*/,
            handlers: ["qqvideo"]
        }, {
            re: /^http(s)?:\/\/view.inews.qq.com\/w\/.*/,
            handlers: ["qqnews"]
        },
        {
            re: /^http(s)?:\/\/mp\.weixin\.qq\.com\/mp\/appmsg\/show.*/,
            handlers: ["mpmsg"]
        }],
        l = {
            getShareObject: function(a, b, c) {
                var f,
                    e,
                    d,
                    g,
                    i;
                for (e = 0; e < h.length; e++)
                    if (f = h[e], f.re.test(document.location.href)) {
                        i = !0;
                        for (g = 0; g < f.handlers.length; g++)
                            e = f.handlers[g], k[e](a, function(a) {
                                d || (d = a) && b(a)
                            });
                        break
                    }
                i ? setTimeout(function() {
                    d || (d = "timeout", c(d))
                }, 4E3) : (d = "nomatch", c(d))
            }
        };
    j.on("__internal:get_share_object", function(a) {
        l.getShareObject(a.$, a.success, a.fail)
    })
})(WeixinJSBridge);

