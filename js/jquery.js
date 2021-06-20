! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        o = n.slice,
        i = n.flat ? function(e) {
            return n.flat.call(e)
        } : function(e) {
            return n.concat.apply([], e)
        },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        p = {},
        h = function isFunction(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        g = function isWindow(e) {
            return null != e && e === e.window
        },
        m = e.document,
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function DOMEval(e, t, n) {
        var r, o, i = (n = n || m).createElement("script");
        if (i.text = e, t)
            for (r in v)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }

    function toType(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var jQuery = function(e, t) {
        return new jQuery.fn.init(e, t)
    };

    function isArrayLike(e) {
        var t = !!e && "length" in e && e.length,
            n = toType(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    jQuery.fn = jQuery.prototype = {
        jquery: "3.5.1",
        constructor: jQuery,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = jQuery.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return jQuery.each(this, e)
        },
        map: function(e) {
            return this.pushStack(jQuery.map(this, (function(t, n) {
                return e.call(t, n, t)
            })))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, (function(e, t) {
                return (t + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, (function(e, t) {
                return t % 2
            })))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var e, t, n, r, o, i, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || h(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (jQuery.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || jQuery.isPlainObject(n) ? n : {}, o = !1, a[t] = jQuery.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        return a
    }, jQuery.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof(n = c.call(t, "constructor") && t.constructor) && f.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            DOMEval(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (isArrayLike(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (isArrayLike(Object(e)) ? jQuery.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, a = 0,
                s = [];
            if (isArrayLike(e))
                for (r = e.length; a < r; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return i(s)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (jQuery.fn[Symbol.iterator] = n[Symbol.iterator]), jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    }));
    var y =
        function(e) {
            var t, n, r, o, i, a, s, u, l, c, f, d, p, h, g, m, v, y, x, b = "sizzle" + 1 * new Date,
                w = e.document,
                T = 0,
                C = 0,
                S = createCache(),
                A = createCache(),
                k = createCache(),
                E = createCache(),
                sortOrder = function(e, t) {
                    return e === t && (f = !0), 0
                },
                N = {}.hasOwnProperty,
                D = [],
                j = D.pop,
                P = D.push,
                L = D.push,
                q = D.slice,
                indexOf = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                F = "\\[" + O + "*(" + M + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + O + "*\\]",
                z = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                I = new RegExp(O + "+", "g"),
                R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                W = new RegExp("^" + O + "*," + O + "*"),
                B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
                $ = new RegExp(O + "|>"),
                _ = new RegExp(z),
                U = new RegExp("^" + M + "$"),
                X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + H + ")$", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /HTML$/i,
                V = /^(?:input|select|textarea|button)$/i,
                Y = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                K = /[+~]/,
                Z = new RegExp("\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])", "g"),
                funescape = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                ee = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function(e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                unloadHandler = function() {
                    d()
                },
                te = addCombinator((function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                L.apply(D = q.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: D.length ? function(e, t) {
                        P.apply(e, q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function Sizzle(e, t, r, o) {
                var i, s, l, c, f, h, v, y = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!o && (d(t), t = t || p, g)) {
                    if (11 !== w && (f = J.exec(e)))
                        if (i = f[1]) {
                            if (9 === w) {
                                if (!(l = t.getElementById(i))) return r;
                                if (l.id === i) return r.push(l), r
                            } else if (y && (l = y.getElementById(i)) && x(t, l) && l.id === i) return r.push(l), r
                        } else {
                            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                            if ((i = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(i)), r
                        } if (n.qsa && !E[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (v = e, y = t, 1 === w && ($.test(e) || B.test(e))) {
                            for ((y = K.test(e) && testContext(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ee, fcssescape) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + toSelector(h[s]);
                            v = h.join(",")
                        }
                        try {
                            return L.apply(r, y.querySelectorAll(v)), r
                        } catch (t) {
                            E(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return u(e.replace(R, "$1"), t, r, o)
            }

            function createCache() {
                var e = [];
                return function cache(t, n) {
                    return e.push(t + " ") > r.cacheLength && delete cache[e.shift()], cache[t + " "] = n
                }
            }

            function markFunction(e) {
                return e[b] = !0, e
            }

            function assert(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function addHandle(e, t) {
                for (var n = e.split("|"), o = n.length; o--;) r.attrHandle[n[o]] = t
            }

            function siblingCheck(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function createInputPseudo(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function createButtonPseudo(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function createDisabledPseudo(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function createPositionalPseudo(e) {
                return markFunction((function(t) {
                    return t = +t, markFunction((function(n, r) {
                        for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                    }))
                }))
            }

            function testContext(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = Sizzle.support = {}, i = Sizzle.isXML = function(e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !G.test(t || n && n.nodeName || "HTML")
                }, d = Sizzle.setDocument = function(e) {
                    var t, o, a = e ? e.ownerDocument || e : w;
                    return a != p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, g = !i(p), w != p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", unloadHandler, !1) : o.attachEvent && o.attachEvent("onunload", unloadHandler)), n.scope = assert((function(e) {
                        return h.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    })), n.attributes = assert((function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    })), n.getElementsByTagName = assert((function(e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    })), n.getElementsByClassName = Q.test(p.getElementsByClassName), n.getById = assert((function(e) {
                        return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                    })), n.getById ? (r.filter.ID = function(e) {
                        var t = e.replace(Z, funescape);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (r.filter.ID = function(e) {
                        var t = e.replace(Z, funescape);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, r.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && g) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                            }
                            return []
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                    }, v = [], m = [], (n.qsa = Q.test(p.querySelectorAll)) && (assert((function(e) {
                        var t;
                        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), (t = p.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                    })), assert((function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    }))), (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert((function(e) {
                        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", z)
                    })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, sortOrder = t ? function(e, t) {
                        if (e === t) return f = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? indexOf(c, e) - indexOf(c, t) : 0 : 4 & r ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return f = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!o || !i) return e == p ? -1 : t == p ? 1 : o ? -1 : i ? 1 : c ? indexOf(c, e) - indexOf(c, t) : 0;
                        if (o === i) return siblingCheck(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? siblingCheck(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                    }, p) : p
                }, Sizzle.matches = function(e, t) {
                    return Sizzle(e, null, null, t)
                }, Sizzle.matchesSelector = function(e, t) {
                    if (d(e), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {
                        E(t, !0)
                    }
                    return Sizzle(t, p, null, [e]).length > 0
                }, Sizzle.contains = function(e, t) {
                    return (e.ownerDocument || e) != p && d(e), x(e, t)
                }, Sizzle.attr = function(e, t) {
                    (e.ownerDocument || e) != p && d(e);
                    var o = r.attrHandle[t.toLowerCase()],
                        i = o && N.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                    return void 0 !== i ? i : n.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, Sizzle.escape = function(e) {
                    return (e + "").replace(ee, fcssescape)
                }, Sizzle.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, Sizzle.uniqueSort = function(e) {
                    var t, r = [],
                        o = 0,
                        i = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(sortOrder), f) {
                        for (; t = e[i++];) t === e[i] && (o = r.push(i));
                        for (; o--;) e.splice(r[o], 1)
                    }
                    return c = null, e
                }, o = Sizzle.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += o(t);
                    return n
                }, (r = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Z, funescape), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, funescape), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && _.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, funescape).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = S[e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && S(e, (function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            }))
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var o = Sizzle.attr(r, e);
                                return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    x = !1;
                                if (m) {
                                    if (i) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (x = (p = (l = (c = (f = (d = m)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [T, p, x];
                                                break
                                            }
                                    } else if (y && (x = p = (l = (c = (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                        for (;
                                            (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[b] || (d[b] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [T, x]), d !== t)););
                                    return (x -= o) === r || x % r == 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                            return o[b] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction((function(e, n) {
                                for (var r, i = o(e, t), a = i.length; a--;) e[r = indexOf(e, i[a])] = !(n[r] = i[a])
                            })) : function(e) {
                                return o(e, 0, n)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: markFunction((function(e) {
                            var t = [],
                                n = [],
                                r = s(e.replace(R, "$1"));
                            return r[b] ? markFunction((function(e, t, n, o) {
                                for (var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                            })) : function(e, o, i) {
                                return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                            }
                        })),
                        has: markFunction((function(e) {
                            return function(t) {
                                return Sizzle(e, t).length > 0
                            }
                        })),
                        contains: markFunction((function(e) {
                            return e = e.replace(Z, funescape),
                                function(t) {
                                    return (t.textContent || o(t)).indexOf(e) > -1
                                }
                        })),
                        lang: markFunction((function(e) {
                            return U.test(e || "") || Sizzle.error("unsupported lang: " + e), e = e.replace(Z, funescape).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        })),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Y.test(e.nodeName)
                        },
                        input: function(e) {
                            return V.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: createPositionalPseudo((function() {
                            return [0]
                        })),
                        last: createPositionalPseudo((function(e, t) {
                            return [t - 1]
                        })),
                        eq: createPositionalPseudo((function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        })),
                        even: createPositionalPseudo((function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        })),
                        odd: createPositionalPseudo((function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        })),
                        lt: createPositionalPseudo((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                            return e
                        })),
                        gt: createPositionalPseudo((function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        }))
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[t] = createInputPseudo(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[t] = createButtonPseudo(t);

            function setFilters() {}

            function toSelector(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function addCombinator(e, t, n) {
                var r = t.dir,
                    o = t.next,
                    i = o || r,
                    a = n && "parentNode" === i,
                    s = C++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || a) return e(t, n, o);
                    return !1
                } : function(t, n, u) {
                    var l, c, f, d = [T, s];
                    if (u) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || a)
                                if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;
                                else {
                                    if ((l = c[i]) && l[0] === T && l[1] === s) return d[2] = l[2];
                                    if (c[i] = d, d[2] = e(t, n, u)) return !0
                                } return !1
                }
            }

            function elementMatcher(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function condense(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
                return a
            }

            function setMatcher(e, t, n, r, o, i) {
                return r && !r[b] && (r = setMatcher(r)), o && !o[b] && (o = setMatcher(o, i)), markFunction((function(i, a, s, u) {
                    var l, c, f, d = [],
                        p = [],
                        h = a.length,
                        g = i || function multipleContexts(e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) Sizzle(e, t[r], n);
                            return n
                        }(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !i && t ? g : condense(g, d, e, s, u),
                        v = n ? o || (i ? e : h || r) ? [] : a : m;
                    if (n && n(m, v, s, u), r)
                        for (l = condense(v, p), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = v.length; c--;)(f = v[c]) && l.push(m[c] = f);
                                o(null, v = [], l, u)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (l = o ? indexOf(i, f) : d[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    } else v = condense(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : L.apply(a, v)
                }))
            }

            function matcherFromTokens(e) {
                for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = addCombinator((function(e) {
                        return e === t
                    }), s, !0), f = addCombinator((function(e) {
                        return indexOf(t, e) > -1
                    }), s, !0), d = [function(e, n, r) {
                        var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                        return t = null, o
                    }]; u < i; u++)
                    if (n = r.relative[e[u].type]) d = [addCombinator(elementMatcher(d), n)];
                    else {
                        if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                            for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                            return setMatcher(u > 1 && elementMatcher(d), u > 1 && toSelector(e.slice(0, u - 1).concat({
                                value: " " === e[u - 2].type ? "*" : ""
                            })).replace(R, "$1"), n, u < o && matcherFromTokens(e.slice(u, o)), o < i && matcherFromTokens(e = e.slice(o)), o < i && toSelector(e))
                        }
                        d.push(n)
                    } return elementMatcher(d)
            }
            return setFilters.prototype = r.filters = r.pseudos, r.setFilters = new setFilters, a = Sizzle.tokenize = function(e, t) {
                var n, o, i, a, s, u, l, c = A[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s;) {
                    for (a in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = B.exec(s)) && (n = o.shift(), i.push({
                            value: n,
                            type: o[0].replace(R, " ")
                        }), s = s.slice(n.length)), r.filter) !(o = X[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
                        value: n,
                        type: a,
                        matches: o
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return t ? s.length : s ? Sizzle.error(e) : A(e, u).slice(0)
            }, s = Sizzle.compile = function(e, t) {
                var n, o = [],
                    i = [],
                    s = k[e + " "];
                if (!s) {
                    for (t || (t = a(e)), n = t.length; n--;)(s = matcherFromTokens(t[n]))[b] ? o.push(s) : i.push(s);
                    (s = k(e, function matcherFromGroupMatchers(e, t) {
                        var n = t.length > 0,
                            o = e.length > 0,
                            superMatcher = function(i, a, s, u, c) {
                                var f, h, m, v = 0,
                                    y = "0",
                                    x = i && [],
                                    b = [],
                                    w = l,
                                    C = i || o && r.find.TAG("*", c),
                                    S = T += null == w ? 1 : Math.random() || .1,
                                    A = C.length;
                                for (c && (l = a == p || a || c); y !== A && null != (f = C[y]); y++) {
                                    if (o && f) {
                                        for (h = 0, a || f.ownerDocument == p || (d(f), s = !g); m = e[h++];)
                                            if (m(f, a || p, s)) {
                                                u.push(f);
                                                break
                                            } c && (T = S)
                                    }
                                    n && ((f = !m && f) && v--, i && x.push(f))
                                }
                                if (v += y, n && y !== v) {
                                    for (h = 0; m = t[h++];) m(x, b, a, s);
                                    if (i) {
                                        if (v > 0)
                                            for (; y--;) x[y] || b[y] || (b[y] = j.call(u));
                                        b = condense(b)
                                    }
                                    L.apply(u, b), c && !i && b.length > 0 && v + t.length > 1 && Sizzle.uniqueSort(u)
                                }
                                return c && (T = S, l = w), x
                            };
                        return n ? markFunction(superMatcher) : superMatcher
                    }(i, o))).selector = e
                }
                return s
            }, u = Sizzle.select = function(e, t, n, o) {
                var i, u, l, c, f, d = "function" == typeof e && e,
                    p = !o && a(e = d.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((u = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, funescape), t) || [])[0])) return n;
                        d && (t = t.parentNode), e = e.slice(u.shift().value.length)
                    }
                    for (i = X.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);)
                        if ((f = r.find[c]) && (o = f(l.matches[0].replace(Z, funescape), K.test(u[0].type) && testContext(t.parentNode) || t))) {
                            if (u.splice(i, 1), !(e = o.length && toSelector(u))) return L.apply(n, o), n;
                            break
                        }
                }
                return (d || s(e, p))(o, t, !g, n, !t || K.test(e) && testContext(t.parentNode) || t), n
            }, n.sortStable = b.split("").sort(sortOrder).join("") === b, n.detectDuplicates = !!f, d(), n.sortDetached = assert((function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            })), assert((function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            })) || addHandle("type|href|height|width", (function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            })), n.attributes && assert((function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            })) || addHandle("value", (function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            })), assert((function(e) {
                return null == e.getAttribute("disabled")
            })) || addHandle(H, (function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            })), Sizzle
        }(e);
    jQuery.find = y, jQuery.expr = y.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.uniqueSort = jQuery.unique = y.uniqueSort, jQuery.text = y.getText, jQuery.isXMLDoc = y.isXML, jQuery.contains = y.contains, jQuery.escapeSelector = y.escape;
    var dir = function(e, t, n) {
            for (var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && jQuery(e).is(n)) break;
                    r.push(e)
                } return r
        },
        siblings = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        x = jQuery.expr.match.needsContext;

    function nodeName(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var b = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function winnow(e, t, n) {
        return h(t) ? jQuery.grep(e, (function(e, r) {
            return !!t.call(e, r, e) !== n
        })) : t.nodeType ? jQuery.grep(e, (function(e) {
            return e === t !== n
        })) : "string" != typeof t ? jQuery.grep(e, (function(e) {
            return s.call(t, e) > -1 !== n
        })) : jQuery.filter(t, e, n)
    }
    jQuery.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? jQuery.find.matchesSelector(r, e) ? [r] : [] : jQuery.find.matches(e, jQuery.grep(t, (function(e) {
            return 1 === e.nodeType
        })))
    }, jQuery.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(jQuery(e).filter((function() {
                for (t = 0; t < r; t++)
                    if (jQuery.contains(o[t], this)) return !0
            })));
            for (n = this.pushStack([]), t = 0; t < r; t++) jQuery.find(e, o[t], n);
            return r > 1 ? jQuery.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(winnow(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(winnow(this, e || [], !0))
        },
        is: function(e) {
            return !!winnow(this, "string" == typeof e && x.test(e) ? jQuery(e) : e || [], !1).length
        }
    });
    var w, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (jQuery.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || w, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : T.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof jQuery ? t[0] : t, jQuery.merge(this, jQuery.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), b.test(r[1]) && jQuery.isPlainObject(t))
                    for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = m.getElementById(r[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(jQuery) : jQuery.makeArray(e, this)
    }).prototype = jQuery.fn, w = jQuery(m);
    var C = /^(?:parents|prev(?:Until|All))/,
        S = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function sibling(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    jQuery.fn.extend({
        has: function(e) {
            var t = jQuery(e, this),
                n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (jQuery.contains(this, t[e])) return !0
            }))
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && jQuery(e);
            if (!x.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && jQuery.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        } return this.pushStack(i.length > 1 ? jQuery.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(jQuery(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), jQuery.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return dir(e, "parentNode", n)
        },
        next: function(e) {
            return sibling(e, "nextSibling")
        },
        prev: function(e) {
            return sibling(e, "previousSibling")
        },
        nextAll: function(e) {
            return dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return siblings((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return siblings(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), jQuery.merge([], e.childNodes))
        }
    }, (function(e, t) {
        jQuery.fn[e] = function(n, r) {
            var o = jQuery.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = jQuery.filter(r, o)), this.length > 1 && (S[e] || jQuery.uniqueSort(o), C.test(e) && o.reverse()), this.pushStack(o)
        }
    }));
    var A = /[^\x20\t\r\n\f]+/g;

    function Identity(e) {
        return e
    }

    function Thrower(e) {
        throw e
    }

    function adoptValue(e, t, n, r) {
        var o;
        try {
            e && h(o = e.promise) ? o.call(e).done(t).fail(n) : e && h(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    jQuery.Callbacks = function(e) {
        e = "string" == typeof e ? function createOptions(e) {
            var t = {};
            return jQuery.each(e.match(A) || [], (function(e, n) {
                t[n] = !0
            })), t
        }(e) : jQuery.extend({}, e);
        var t, n, r, o, i = [],
            a = [],
            s = -1,
            fire = function() {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
            },
            u = {
                add: function() {
                    return i && (n && !t && (s = i.length - 1, a.push(n)), function add(t) {
                        jQuery.each(t, (function(t, n) {
                            h(n) ? e.unique && u.has(n) || i.push(n) : n && n.length && "string" !== toType(n) && add(n)
                        }))
                    }(arguments), n && !t && fire()), this
                },
                remove: function() {
                    return jQuery.each(arguments, (function(e, t) {
                        for (var n;
                            (n = jQuery.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                    })), this
                },
                has: function(e) {
                    return e ? jQuery.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []), this
                },
                disable: function() {
                    return o = a = [], i = n = "", this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return o = a = [], n || t || (i = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || fire()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return u
    }, jQuery.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return jQuery.Deferred((function(t) {
                            jQuery.each(n, (function(n, r) {
                                var o = h(e[r[4]]) && e[r[4]];
                                i[r[1]]((function() {
                                    var e = o && o.apply(this, arguments);
                                    e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    },
                    then: function(t, r, o) {
                        var i = 0;

                        function resolve(t, n, r, o) {
                            return function() {
                                var a = this,
                                    s = arguments,
                                    mightThrow = function() {
                                        var e, u;
                                        if (!(t < i)) {
                                            if ((e = r.apply(a, s)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, h(u) ? o ? u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o)) : (i++, u.call(e, resolve(i, n, Identity, o), resolve(i, n, Thrower, o), resolve(i, n, Identity, n.notifyWith))) : (r !== Identity && (a = void 0, s = [e]), (o || n.resolveWith)(a, s))
                                        }
                                    },
                                    u = o ? mightThrow : function() {
                                        try {
                                            mightThrow()
                                        } catch (e) {
                                            jQuery.Deferred.exceptionHook && jQuery.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= i && (r !== Thrower && (a = void 0, s = [e]), n.rejectWith(a, s))
                                        }
                                    };
                                t ? u() : (jQuery.Deferred.getStackHook && (u.stackTrace = jQuery.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return jQuery.Deferred((function(e) {
                            n[0][3].add(resolve(0, e, h(o) ? o : Identity, e.notifyWith)), n[1][3].add(resolve(0, e, h(t) ? t : Identity)), n[2][3].add(resolve(0, e, h(r) ? r : Thrower))
                        })).promise()
                    },
                    promise: function(e) {
                        return null != e ? jQuery.extend(e, o) : o
                    }
                },
                i = {};
            return jQuery.each(n, (function(e, t) {
                var a = t[2],
                    s = t[5];
                o[t[1]] = a.add, s && a.add((function() {
                    r = s
                }), n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = a.fireWith
            })), o.promise(i), t && t.call(i, i), i
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = jQuery.Deferred(),
                updateFunc = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (adoptValue(e, a.done(updateFunc(n)).resolve, a.reject, !t), "pending" === a.state() || h(i[n] && i[n].then))) return a.then();
            for (; n--;) adoptValue(i[n], updateFunc(n), a.reject);
            return a.promise()
        }
    });
    var k = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && k.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, jQuery.readyException = function(t) {
        e.setTimeout((function() {
            throw t
        }))
    };
    var E = jQuery.Deferred();

    function completed() {
        m.removeEventListener("DOMContentLoaded", completed), e.removeEventListener("load", completed), jQuery.ready()
    }
    jQuery.fn.ready = function(e) {
        return E.then(e).catch((function(e) {
            jQuery.readyException(e)
        })), this
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, !0 !== e && --jQuery.readyWait > 0 || E.resolveWith(m, [jQuery]))
        }
    }), jQuery.ready.then = E.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(jQuery.ready) : (m.addEventListener("DOMContentLoaded", completed), e.addEventListener("load", completed));
    var access = function(e, t, n, r, o, i, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === toType(n))
                for (s in o = !0, n) access(e, t, s, n[s], !0, i, a);
            else if (void 0 !== r && (o = !0, h(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(jQuery(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
        },
        N = /^-ms-/,
        D = /-([a-z])/g;

    function fcamelCase(e, t) {
        return t.toUpperCase()
    }

    function camelCase(e) {
        return e.replace(N, "ms-").replace(D, fcamelCase)
    }
    var acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Data() {
        this.expando = jQuery.expando + Data.uid++
    }
    Data.uid = 1, Data.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, acceptData(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[camelCase(t)] = n;
            else
                for (r in t) o[camelCase(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(camelCase) : (t = camelCase(t)) in r ? [t] : t.match(A) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || jQuery.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !jQuery.isEmptyObject(t)
        }
    };
    var j = new Data,
        P = new Data,
        L = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /[A-Z]/g;

    function dataAttr(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = function getData(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : L.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                P.set(e, t, n)
            } else n = void 0;
        return n
    }
    jQuery.extend({
        hasData: function(e) {
            return P.hasData(e) || j.hasData(e)
        },
        data: function(e, t, n) {
            return P.access(e, t, n)
        },
        removeData: function(e, t) {
            P.remove(e, t)
        },
        _data: function(e, t, n) {
            return j.access(e, t, n)
        },
        _removeData: function(e, t) {
            j.remove(e, t)
        }
    }), jQuery.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = P.get(i), 1 === i.nodeType && !j.get(i, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = camelCase(r.slice(5)), dataAttr(i, r, o[r]));
                    j.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each((function() {
                P.set(this, e)
            })) : access(this, (function(t) {
                var n;
                if (i && void 0 === t) return void 0 !== (n = P.get(i, e)) || void 0 !== (n = dataAttr(i, e)) ? n : void 0;
                this.each((function() {
                    P.set(this, e, t)
                }))
            }), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                P.remove(this, e)
            }))
        }
    }), jQuery.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = j.get(e, t), n && (!r || Array.isArray(n) ? r = j.access(e, t, jQuery.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = jQuery.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = jQuery._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, (function() {
                jQuery.dequeue(e, t)
            }), i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return j.get(e, n) || j.access(e, n, {
                empty: jQuery.Callbacks("once memory").add((function() {
                    j.remove(e, [t + "queue", n])
                }))
            })
        }
    }), jQuery.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? jQuery.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = jQuery.queue(this, e, t);
                jQuery._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && jQuery.dequeue(this, e)
            }))
        },
        dequeue: function(e) {
            return this.each((function() {
                jQuery.dequeue(this, e)
            }))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                o = jQuery.Deferred(),
                i = this,
                a = this.length,
                resolve = function() {
                    --r || o.resolveWith(i, [i])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = j.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(resolve));
            return resolve(), o.promise(t)
        }
    });
    var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        O = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
        M = ["Top", "Right", "Bottom", "Left"],
        F = m.documentElement,
        isAttached = function(e) {
            return jQuery.contains(e.ownerDocument, e)
        },
        z = {
            composed: !0
        };
    F.getRootNode && (isAttached = function(e) {
        return jQuery.contains(e.ownerDocument, e) || e.getRootNode(z) === e.ownerDocument
    });
    var isHiddenWithinTree = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && isAttached(e) && "none" === jQuery.css(e, "display")
    };

    function adjustCSS(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return jQuery.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (jQuery.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (jQuery.cssNumber[t] || "px" !== l && +u) && O.exec(jQuery.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--;) jQuery.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            c *= 2, jQuery.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }
    var I = {};

    function getDefaultDisplay(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            o = I[r];
        return o || (t = n.body.appendChild(n.createElement(r)), o = jQuery.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), I[r] = o, o)
    }

    function showHide(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = j.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && isHiddenWithinTree(r) && (o[i] = getDefaultDisplay(r))) : "none" !== n && (o[i] = "none", j.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                isHiddenWithinTree(this) ? jQuery(this).show() : jQuery(this).hide()
            }))
        }
    });
    var R, W, B = /^(?:checkbox|radio)$/i,
        $ = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        _ = /^$|^module$|\/(?:java|ecma)script/i;
    R = m.createDocumentFragment().appendChild(m.createElement("div")), (W = m.createElement("input")).setAttribute("type", "radio"), W.setAttribute("checked", "checked"), W.setAttribute("name", "t"), R.appendChild(W), p.checkClone = R.cloneNode(!0).cloneNode(!0).lastChild.checked, R.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!R.cloneNode(!0).lastChild.defaultValue, R.innerHTML = "<option></option>", p.option = !!R.lastChild;
    var U = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function getAll(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t) ? jQuery.merge([e], n) : n
    }

    function setGlobalEval(e, t) {
        for (var n = 0, r = e.length; n < r; n++) j.set(e[n], "globalEval", !t || j.get(t[n], "globalEval"))
    }
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead, U.th = U.td, p.option || (U.optgroup = U.option = [1, "<select multiple='multiple'>", "</select>"]);
    var X = /<|&#?\w+;/;

    function buildFragment(e, t, n, r, o) {
        for (var i, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === toType(i)) jQuery.merge(d, i.nodeType ? [i] : i);
                else if (X.test(i)) {
            for (a = a || f.appendChild(t.createElement("div")), s = ($.exec(i) || ["", ""])[1].toLowerCase(), u = U[s] || U._default, a.innerHTML = u[1] + jQuery.htmlPrefilter(i) + u[2], c = u[0]; c--;) a = a.lastChild;
            jQuery.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(i));
        for (f.textContent = "", p = 0; i = d[p++];)
            if (r && jQuery.inArray(i, r) > -1) o && o.push(i);
            else if (l = isAttached(i), a = getAll(f.appendChild(i), "script"), l && setGlobalEval(a), n)
            for (c = 0; i = a[c++];) _.test(i.type || "") && n.push(i);
        return f
    }
    var G = /^key/,
        V = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Y = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }

    function expectSync(e, t) {
        return e === function safeActiveElement() {
            try {
                return m.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function on(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) on(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = returnFalse;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return jQuery().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = jQuery.guid++)), e.each((function() {
            jQuery.event.add(this, t, o, r, n)
        }))
    }

    function leverageNative(e, t, n) {
        n ? (j.set(e, t, !1), jQuery.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, a = j.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)(jQuery.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = o.call(arguments), j.set(this, t, a), r = n(this, t), this[t](), a !== (i = j.get(this, t)) || r ? j.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else a.length && (j.set(this, t, {
                    value: jQuery.event.trigger(jQuery.extend(a[0], jQuery.Event.prototype), a.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === j.get(e, t) && jQuery.event.add(e, t, returnTrue)
    }
    jQuery.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = j.get(e);
            if (acceptData(e))
                for (n.handler && (n = (i = n).handler, o = i.selector), o && jQuery.find.matchesSelector(F, o), n.guid || (n.guid = jQuery.guid++), (u = m.events) || (u = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
                        return void 0 !== jQuery && jQuery.event.triggered !== t.type ? jQuery.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(A) || [""]).length; l--;) p = g = (s = Y.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = jQuery.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, f = jQuery.event.special[p] || {}, c = jQuery.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && jQuery.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, i), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, c) : d.push(c), jQuery.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, d, p, h, g, m = j.hasData(e) && j.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(A) || [""]).length; l--;)
                    if (p = g = (s = Y.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = jQuery.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) c = d[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(i, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || jQuery.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) jQuery.event.remove(e, p + t[l], n, r, !0);
                jQuery.isEmptyObject(u) && j.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a, s = new Array(arguments.length),
                u = jQuery.event.fix(e),
                l = (j.get(this, "events") || Object.create(null))[u.type] || [],
                c = jQuery.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = jQuery.event.handlers.call(this, u, l), t = 0;
                    (o = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = o.elem, n = 0;
                        (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== i.namespace && !u.rnamespace.test(i.namespace) || (u.handleObj = i, u.data = i.data, void 0 !== (r = ((jQuery.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? jQuery(o, this).index(l) > -1 : jQuery.find(o, this, null, [l]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(jQuery.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[jQuery.expando] ? e : new jQuery.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return B.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click", returnTrue), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return B.test(t.type) && t.click && nodeName(t, "input") && leverageNative(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return B.test(t.type) && t.click && nodeName(t, "input") && j.get(t, "click") || nodeName(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, jQuery.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, jQuery.Event = function(e, t) {
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && jQuery.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[jQuery.expando] = !0
    }, jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, jQuery.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && G.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && V.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, jQuery.event.addProp), jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        jQuery.event.special[e] = {
            setup: function() {
                return leverageNative(this, e, expectSync), !1
            },
            trigger: function() {
                return leverageNative(this, e), !0
            },
            delegateType: t
        }
    })), jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        jQuery.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    o = e.relatedTarget,
                    i = e.handleObj;
                return o && (o === r || jQuery.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), jQuery.fn.extend({
        on: function(e, t, n, r) {
            return on(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return on(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, jQuery(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = returnFalse), this.each((function() {
                jQuery.event.remove(this, e, n, t)
            }))
        }
    });
    var Q = /<script|<style|<link/i,
        J = /checked\s*(?:[^=]|=\s*.checked.)/i,
        K = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function manipulationTarget(e, t) {
        return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && jQuery(e).children("tbody")[0] || e
    }

    function disableScript(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function restoreScript(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function cloneCopyEvent(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
            if (j.hasData(e) && (s = j.get(e).events))
                for (o in j.remove(t, "handle events"), s)
                    for (n = 0, r = s[o].length; n < r; n++) jQuery.event.add(t, o, s[o][n]);
            P.hasData(e) && (i = P.access(e), a = jQuery.extend({}, i), P.set(t, a))
        }
    }

    function fixInput(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && B.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function domManip(e, t, n, r) {
        t = i(t);
        var o, a, s, u, l, c, f = 0,
            d = e.length,
            g = d - 1,
            m = t[0],
            v = h(m);
        if (v || d > 1 && "string" == typeof m && !p.checkClone && J.test(m)) return e.each((function(o) {
            var i = e.eq(o);
            v && (t[0] = m.call(this, o, i.html())), domManip(i, t, n, r)
        }));
        if (d && (a = (o = buildFragment(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = a), a || r)) {
            for (u = (s = jQuery.map(getAll(o, "script"), disableScript)).length; f < d; f++) l = o, f !== g && (l = jQuery.clone(l, !0, !0), u && jQuery.merge(s, getAll(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, jQuery.map(s, restoreScript), f = 0; f < u; f++) l = s[f], _.test(l.type || "") && !j.access(l, "globalEval") && jQuery.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? jQuery._evalUrl && !l.noModule && jQuery._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }, c) : DOMEval(l.textContent.replace(K, ""), l, c))
        }
        return e
    }

    function remove(e, t, n) {
        for (var r, o = t ? jQuery.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || jQuery.cleanData(getAll(r)), r.parentNode && (n && isAttached(r) && setGlobalEval(getAll(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    jQuery.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, i, a, s = e.cloneNode(!0),
                u = isAttached(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || jQuery.isXMLDoc(e)))
                for (a = getAll(s), r = 0, o = (i = getAll(e)).length; r < o; r++) fixInput(i[r], a[r]);
            if (t)
                if (n)
                    for (i = i || getAll(e), a = a || getAll(s), r = 0, o = i.length; r < o; r++) cloneCopyEvent(i[r], a[r]);
                else cloneCopyEvent(e, s);
            return (a = getAll(s, "script")).length > 0 && setGlobalEval(a, !u && getAll(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, o = jQuery.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (acceptData(n)) {
                    if (t = n[j.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? jQuery.event.remove(n, r) : jQuery.removeEvent(n, r, t.handle);
                        n[j.expando] = void 0
                    }
                    n[P.expando] && (n[P.expando] = void 0)
                }
        }
    }), jQuery.fn.extend({
        detach: function(e) {
            return remove(this, e, !0)
        },
        remove: function(e) {
            return remove(this, e)
        },
        text: function(e) {
            return access(this, (function(e) {
                return void 0 === e ? jQuery.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        },
        append: function() {
            return domManip(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, e).appendChild(e)
            }))
        },
        prepend: function() {
            return domManip(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = manipulationTarget(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }))
        },
        before: function() {
            return domManip(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        },
        after: function() {
            return domManip(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (jQuery.cleanData(getAll(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                return jQuery.clone(this, e, t)
            }))
        },
        html: function(e) {
            return access(this, (function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Q.test(e) && !U[($.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = jQuery.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (jQuery.cleanData(getAll(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return domManip(this, arguments, (function(t) {
                var n = this.parentNode;
                jQuery.inArray(this, e) < 0 && (jQuery.cleanData(getAll(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        jQuery.fn[e] = function(e) {
            for (var n, r = [], o = jQuery(e), i = o.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), jQuery(o[s])[t](n), a.apply(r, n.get());
            return this.pushStack(r)
        }
    }));
    var Z = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
        getStyles = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        swap = function(e, t, n) {
            var r, o, i = {};
            for (o in t) i[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.call(e), t) e.style[o] = i[o];
            return r
        },
        ee = new RegExp(M.join("|"), "i");

    function curCSS(e, t, n) {
        var r, o, i, a, s = e.style;
        return (n = n || getStyles(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || isAttached(e) || (a = jQuery.style(e, t)), !p.pixelBoxStyles() && Z.test(a) && ee.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a
    }

    function addGetHookIf(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function computeStyleTests() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", F.appendChild(s).appendChild(u);
                var i = e.getComputedStyle(u);
                t = "1%" !== i.top, a = 12 === roundPixelMeasures(i.marginLeft), u.style.right = "60%", o = 36 === roundPixelMeasures(i.right), n = 36 === roundPixelMeasures(i.width), u.style.position = "absolute", r = 12 === roundPixelMeasures(u.offsetWidth / 3), F.removeChild(s), u = null
            }
        }

        function roundPixelMeasures(e) {
            return Math.round(parseFloat(e))
        }
        var t, n, r, o, i, a, s = m.createElement("div"),
            u = m.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, jQuery.extend(p, {
            boxSizingReliable: function() {
                return computeStyleTests(), n
            },
            pixelBoxStyles: function() {
                return computeStyleTests(), o
            },
            pixelPosition: function() {
                return computeStyleTests(), t
            },
            reliableMarginLeft: function() {
                return computeStyleTests(), a
            },
            scrollboxSize: function() {
                return computeStyleTests(), r
            },
            reliableTrDimensions: function() {
                var t, n, r, o;
                return null == i && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", F.appendChild(t).appendChild(n).appendChild(r), o = e.getComputedStyle(n), i = parseInt(o.height) > 3, F.removeChild(t)), i
            }
        }))
    }();
    var te = ["Webkit", "Moz", "ms"],
        ne = m.createElement("div").style,
        re = {};

    function finalPropName(e) {
        var t = jQuery.cssProps[e] || re[e];
        return t || (e in ne ? e : re[e] = function vendorPropName(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = te.length; n--;)
                if ((e = te[n] + t) in ne) return e
        }(e) || e)
    }
    var oe = /^(none|table(?!-c[ea]).+)/,
        ie = /^--/,
        ae = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        se = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function setPositiveNumber(e, t, n) {
        var r = O.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function boxModelAdjustment(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += jQuery.css(e, n + M[a], !0, o)), r ? ("content" === n && (u -= jQuery.css(e, "padding" + M[a], !0, o)), "margin" !== n && (u -= jQuery.css(e, "border" + M[a] + "Width", !0, o))) : (u += jQuery.css(e, "padding" + M[a], !0, o), "padding" !== n ? u += jQuery.css(e, "border" + M[a] + "Width", !0, o) : s += jQuery.css(e, "border" + M[a] + "Width", !0, o));
        return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
    }

    function getWidthOrHeight(e, t, n) {
        var r = getStyles(e),
            o = (!p.boxSizingReliable() || n) && "border-box" === jQuery.css(e, "boxSizing", !1, r),
            i = o,
            a = curCSS(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Z.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!p.boxSizingReliable() && o || !p.reliableTrDimensions() && nodeName(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === jQuery.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === jQuery.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }

    function Tween(e, t, n, r, o) {
        return new Tween.prototype.init(e, t, n, r, o)
    }
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = curCSS(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = camelCase(t),
                    u = ie.test(t),
                    l = e.style;
                if (u || (t = finalPropName(s)), a = jQuery.cssHooks[t] || jQuery.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = O.exec(n)) && o[1] && (n = adjustCSS(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (jQuery.cssNumber[s] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, a, s = camelCase(t);
            return ie.test(t) || (t = finalPropName(s)), (a = jQuery.cssHooks[t] || jQuery.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = curCSS(e, t, r)), "normal" === o && t in se && (o = se[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), jQuery.each(["height", "width"], (function(e, t) {
        jQuery.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !oe.test(jQuery.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, r) : swap(e, ae, (function() {
                    return getWidthOrHeight(e, t, r)
                }))
            },
            set: function(e, n, r) {
                var o, i = getStyles(e),
                    a = !p.scrollboxSize() && "absolute" === i.position,
                    s = (a || r) && "border-box" === jQuery.css(e, "boxSizing", !1, i),
                    u = r ? boxModelAdjustment(e, t, r, s, i) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - boxModelAdjustment(e, t, "border", !1, i) - .5)), u && (o = O.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = jQuery.css(e, t)), setPositiveNumber(0, n, u)
            }
        }
    })), jQuery.cssHooks.marginLeft = addGetHookIf(p.reliableMarginLeft, (function(e, t) {
        if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - swap(e, {
            marginLeft: 0
        }, (function() {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        jQuery.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + M[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, "margin" !== e && (jQuery.cssHooks[e + t].set = setPositiveNumber)
    })), jQuery.fn.extend({
        css: function(e, t) {
            return access(this, (function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = getStyles(e), o = t.length; a < o; a++) i[t[a]] = jQuery.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? jQuery.style(e, t, n) : jQuery.css(e, t)
            }), e, t, arguments.length > 1)
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || jQuery.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (jQuery.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Tween.propHooks[this.prop];
            return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = t = jQuery.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = jQuery.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                jQuery.fx.step[e.prop] ? jQuery.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !jQuery.cssHooks[e.prop] && null == e.elem.style[finalPropName(e.prop)] ? e.elem[e.prop] = e.now : jQuery.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, jQuery.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var ue, le, ce = /^(?:toggle|show|hide)$/,
        fe = /queueHooks$/;

    function schedule() {
        le && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(schedule) : e.setTimeout(schedule, jQuery.fx.interval), jQuery.fx.tick())
    }

    function createFxNow() {
        return e.setTimeout((function() {
            ue = void 0
        })), ue = Date.now()
    }

    function genFx(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = M[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function createTween(e, t, n) {
        for (var r, o = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function Animation(e, t, n) {
        var r, o, i = 0,
            a = Animation.prefilters.length,
            s = jQuery.Deferred().always((function() {
                delete tick.elem
            })),
            tick = function() {
                if (o) return !1;
                for (var t = ue || createFxNow(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; i < a; i++) u.tweens[i].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: jQuery.extend({}, t),
                opts: jQuery.extend(!0, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ue || createFxNow(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = jQuery.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            l = u.props;
        for (! function propFilter(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (o = t[r = camelCase(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = jQuery.cssHooks[r]) && "expand" in a)
                        for (n in i = a.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = o);
                    else t[r] = o
            }(l, u.opts.specialEasing); i < a; i++)
            if (r = Animation.prefilters[i].call(u, e, l, u.opts)) return h(r.stop) && (jQuery._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
        return jQuery.map(l, createTween, u), h(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), jQuery.fx.timer(jQuery.extend(tick, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }
    jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return adjustCSS(n.elem, e, O.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                h(e) ? (t = e, e = ["*"]) : e = e.match(A);
                for (var n, r = 0, o = e.length; r < o; r++) n = e[r], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(t)
            },
            prefilters: [function defaultPrefilter(e, t, n) {
                var r, o, i, a, s, u, l, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    h = e.style,
                    g = e.nodeType && isHiddenWithinTree(e),
                    m = j.get(e, "fxshow");
                for (r in n.queue || (null == (a = jQuery._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, d.always((function() {
                        d.always((function() {
                            a.unqueued--, jQuery.queue(e, "fx").length || a.empty.fire()
                        }))
                    }))), t)
                    if (o = t[r], ce.test(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (g ? "hide" : "show")) {
                            if ("show" !== o || !m || void 0 === m[r]) continue;
                            g = !0
                        }
                        p[r] = m && m[r] || jQuery.style(e, r)
                    } if ((u = !jQuery.isEmptyObject(t)) || !jQuery.isEmptyObject(p))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = m && m.display) && (l = j.get(e, "display")), "none" === (c = jQuery.css(e, "display")) && (l ? c = l : (showHide([e], !0), l = e.style.display || l, c = jQuery.css(e, "display"), showHide([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === jQuery.css(e, "float") && (u || (d.done((function() {
                            h.display = l
                        })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always((function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        }))), u = !1, p) u || (m ? "hidden" in m && (g = m.hidden) : m = j.access(e, "fxshow", {
                        display: l
                    }), i && (m.hidden = !g), g && showHide([e], !0), d.done((function() {
                        for (r in g || showHide([e]), j.remove(e, "fxshow"), p) jQuery.style(e, r, p[r])
                    }))), u = createTween(g ? m[r] : 0, r, d), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
            }
        }), jQuery.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? jQuery.extend({}, e) : {
                complete: n || !n && t || h(e) && e,
                duration: e,
                easing: n && t || t && !h(t) && t
            };
            return jQuery.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in jQuery.fx.speeds ? r.duration = jQuery.fx.speeds[r.duration] : r.duration = jQuery.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                h(r.old) && r.old.call(this), r.queue && jQuery.dequeue(this, r.queue)
            }, r
        }, jQuery.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var o = jQuery.isEmptyObject(e),
                    i = jQuery.speed(t, n, r),
                    doAnimation = function() {
                        var t = Animation(this, jQuery.extend({}, e), i);
                        (o || j.get(this, "finish")) && t.stop(!0)
                    };
                return doAnimation.finish = doAnimation, o || !1 === i.queue ? this.each(doAnimation) : this.queue(i.queue, doAnimation)
            },
            stop: function(e, t, n) {
                var stopQueue = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = jQuery.timers,
                        i = j.get(this);
                    if (r) i[r] && i[r].stop && stopQueue(i[r]);
                    else
                        for (r in i) i[r] && i[r].stop && fe.test(r) && stopQueue(i[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || jQuery.dequeue(this, e)
                }))
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each((function() {
                    var t, n = j.get(this),
                        r = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        i = jQuery.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, jQuery.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                }))
            }
        }), jQuery.each(["toggle", "show", "hide"], (function(e, t) {
            var n = jQuery.fn[t];
            jQuery.fn[t] = function(e, r, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, r, o)
            }
        })), jQuery.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(e, t) {
            jQuery.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        })), jQuery.timers = [], jQuery.fx.tick = function() {
            var e, t = 0,
                n = jQuery.timers;
            for (ue = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || jQuery.fx.stop(), ue = void 0
        }, jQuery.fx.timer = function(e) {
            jQuery.timers.push(e), jQuery.fx.start()
        }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
            le || (le = !0, schedule())
        }, jQuery.fx.stop = function() {
            le = null
        }, jQuery.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, jQuery.fn.delay = function(t, n) {
            return t = jQuery.fx && jQuery.fx.speeds[t] || t, n = n || "fx", this.queue(n, (function(n, r) {
                var o = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(o)
                }
            }))
        },
        function() {
            var e = m.createElement("input"),
                t = m.createElement("select").appendChild(m.createElement("option"));
            e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = m.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value
        }();
    var de, pe = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(e, t) {
            return access(this, jQuery.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                jQuery.removeAttr(this, e)
            }))
        }
    }), jQuery.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? jQuery.prop(e, t, n) : (1 === i && jQuery.isXMLDoc(e) || (o = jQuery.attrHooks[t.toLowerCase()] || (jQuery.expr.match.bool.test(t) ? de : void 0)), void 0 !== n ? null === n ? void jQuery.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = jQuery.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                o = t && t.match(A);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) e.removeAttribute(n)
        }
    }), de = {
        set: function(e, t, n) {
            return !1 === t ? jQuery.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = pe[t] || jQuery.find.attr;
        pe[t] = function(e, t, r) {
            var o, i, a = t.toLowerCase();
            return r || (i = pe[a], pe[a] = o, o = null != n(e, t, r) ? a : null, pe[a] = i), o
        }
    }));
    var he = /^(?:input|select|textarea|button)$/i,
        ge = /^(?:a|area)$/i;

    function stripAndCollapse(e) {
        return (e.match(A) || []).join(" ")
    }

    function getClass(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function classesToArray(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(A) || []
    }
    jQuery.fn.extend({
        prop: function(e, t) {
            return access(this, jQuery.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[jQuery.propFix[e] || e]
            }))
        }
    }), jQuery.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && jQuery.isXMLDoc(e) || (t = jQuery.propFix[t] || t, o = jQuery.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = jQuery.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : he.test(e.nodeName) || ge.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (jQuery.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        jQuery.propFix[this.toLowerCase()] = this
    })), jQuery.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e)) return this.each((function(t) {
                jQuery(this).addClass(e.call(this, t, getClass(this)))
            }));
            if ((t = classesToArray(e)).length)
                for (; n = this[u++];)
                    if (o = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, a, s, u = 0;
            if (h(e)) return this.each((function(t) {
                jQuery(this).removeClass(e.call(this, t, getClass(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((t = classesToArray(e)).length)
                for (; n = this[u++];)
                    if (o = getClass(n), r = 1 === n.nodeType && " " + stripAndCollapse(o) + " ") {
                        for (a = 0; i = t[a++];)
                            for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        o !== (s = stripAndCollapse(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each((function(n) {
                jQuery(this).toggleClass(e.call(this, n, getClass(this), t), t)
            })) : this.each((function() {
                var t, o, i, a;
                if (r)
                    for (o = 0, i = jQuery(this), a = classesToArray(e); t = a[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = getClass(this)) && j.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : j.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var me = /\r/g;
    jQuery.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = h(e), this.each((function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, jQuery(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = jQuery.map(o, (function(e) {
                    return null == e ? "" : e + ""
                }))), (t = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            }))) : o ? (t = jQuery.valHooks[o.type] || jQuery.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(me, "") : null == n ? "" : n : void 0
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = jQuery.find.attr(e, "value");
                    return null != t ? t : stripAndCollapse(jQuery.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        i = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                        if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                            if (t = jQuery(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = jQuery.makeArray(t), a = o.length; a--;)((r = o[a]).selected = jQuery.inArray(jQuery.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), jQuery.each(["radio", "checkbox"], (function() {
        jQuery.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = jQuery.inArray(jQuery(e).val(), t) > -1
            }
        }, p.checkOn || (jQuery.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    })), p.focusin = "onfocusin" in e;
    var ve = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function(e) {
            e.stopPropagation()
        };
    jQuery.extend(jQuery.event, {
        trigger: function(t, n, r, o) {
            var i, a, s, u, l, f, d, p, v = [r || m],
                y = c.call(t, "type") ? t.type : t,
                x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !ve.test(y + jQuery.event.triggered) && (y.indexOf(".") > -1 && (x = y.split("."), y = x.shift(), x.sort()), l = y.indexOf(":") < 0 && "on" + y, (t = t[jQuery.expando] ? t : new jQuery.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : jQuery.makeArray(n, [t]), d = jQuery.event.special[y] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !g(r)) {
                    for (u = d.delegateType || y, ve.test(u + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), s = a;
                    s === (r.ownerDocument || m) && v.push(s.defaultView || s.parentWindow || e)
                }
                for (i = 0;
                    (a = v[i++]) && !t.isPropagationStopped();) p = a, t.type = i > 1 ? u : d.bindType || y, (f = (j.get(a, "events") || Object.create(null))[t.type] && j.get(a, "handle")) && f.apply(a, n), (f = l && a[l]) && f.apply && acceptData(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !acceptData(r) || l && h(r[y]) && !g(r) && ((s = r[l]) && (r[l] = null), jQuery.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, stopPropagationCallback), r[y](), t.isPropagationStopped() && p.removeEventListener(y, stopPropagationCallback), jQuery.event.triggered = void 0, s && (r[l] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = jQuery.extend(new jQuery.Event, n, {
                type: e,
                isSimulated: !0
            });
            jQuery.event.trigger(r, null, t)
        }
    }), jQuery.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                jQuery.event.trigger(e, t, this)
            }))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return jQuery.event.trigger(e, t, n, !0)
        }
    }), p.focusin || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var handler = function(e) {
            jQuery.event.simulate(t, e.target, jQuery.event.fix(e))
        };
        jQuery.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this.document || this,
                    r = j.access(n, t);
                r || n.addEventListener(e, handler, !0), j.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this.document || this,
                    r = j.access(n, t) - 1;
                r ? j.access(n, t, r) : (n.removeEventListener(e, handler, !0), j.remove(n, t))
            }
        }
    }));
    var ye = e.location,
        xe = {
            guid: Date.now()
        },
        be = /\?/;
    jQuery.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + t), n
    };
    var we = /\[\]$/,
        Te = /\r?\n/g,
        Ce = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;

    function buildParams(e, t, n, r) {
        var o;
        if (Array.isArray(t)) jQuery.each(t, (function(t, o) {
            n || we.test(e) ? r(e, o) : buildParams(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
        }));
        else if (n || "object" !== toType(t)) r(e, t);
        else
            for (o in t) buildParams(e + "[" + o + "]", t[o], n, r)
    }
    jQuery.param = function(e, t) {
        var n, r = [],
            add = function(e, t) {
                var n = h(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !jQuery.isPlainObject(e)) jQuery.each(e, (function() {
            add(this.name, this.value)
        }));
        else
            for (n in e) buildParams(n, e[n], t, add);
        return r.join("&")
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = jQuery.prop(this, "elements");
                return e ? jQuery.makeArray(e) : this
            })).filter((function() {
                var e = this.type;
                return this.name && !jQuery(this).is(":disabled") && Se.test(this.nodeName) && !Ce.test(e) && (this.checked || !B.test(e))
            })).map((function(e, t) {
                var n = jQuery(this).val();
                return null == n ? null : Array.isArray(n) ? jQuery.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Te, "\r\n")
                    }
                })) : {
                    name: t.name,
                    value: n.replace(Te, "\r\n")
                }
            })).get()
        }
    });
    var Ae = /%20/g,
        ke = /#.*$/,
        Ee = /([?&])_=[^&]*/,
        Ne = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        De = /^(?:GET|HEAD)$/,
        je = /^\/\//,
        Pe = {},
        Le = {},
        qe = "*/".concat("*"),
        He = m.createElement("a");

    function addToPrefiltersOrTransports(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, o = 0,
                i = t.toLowerCase().match(A) || [];
            if (h(n))
                for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function inspectPrefiltersOrTransports(e, t, n, r) {
        var o = {},
            i = e === Le;

        function inspect(a) {
            var s;
            return o[a] = !0, jQuery.each(e[a] || [], (function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || i || o[u] ? i ? !(s = u) : void 0 : (t.dataTypes.unshift(u), inspect(u), !1)
            })), s
        }
        return inspect(t.dataTypes[0]) || !o["*"] && inspect("*")
    }

    function ajaxExtend(e, t) {
        var n, r, o = jQuery.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && jQuery.extend(!0, e, r), e
    }
    He.href = ye.href, jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ye.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ajaxExtend(ajaxExtend(e, jQuery.ajaxSettings), t) : ajaxExtend(jQuery.ajaxSettings, e)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(Pe),
        ajaxTransport: addToPrefiltersOrTransports(Le),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, i, a, s, u, l, c, f, d, p = jQuery.ajaxSetup({}, n),
                h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? jQuery(h) : jQuery.event,
                v = jQuery.Deferred(),
                y = jQuery.Callbacks("once memory"),
                x = p.statusCode || {},
                b = {},
                w = {},
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = Ne.exec(i);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l) C.always(e[C.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t), done(0, t), this
                    }
                };
            if (v.promise(C), p.url = ((t || p.url || ye.href) + "").replace(je, ye.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(A) || [""], null == p.crossDomain) {
                u = m.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = He.protocol + "//" + He.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = jQuery.param(p.data, p.traditional)), inspectPrefiltersOrTransports(Pe, p, n, C), l) return C;
            for (f in (c = jQuery.event && p.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !De.test(p.type), o = p.url.replace(ke, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ae, "+")) : (d = p.url.slice(o.length), p.data && (p.processData || "string" == typeof p.data) && (o += (be.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Ee, "$1"), d = (be.test(o) ? "&" : "?") + "_=" + xe.guid++ + d), p.url = o + d), p.ifModified && (jQuery.lastModified[o] && C.setRequestHeader("If-Modified-Since", jQuery.lastModified[o]), jQuery.etag[o] && C.setRequestHeader("If-None-Match", jQuery.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l)) return C.abort();
            if (T = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), r = inspectPrefiltersOrTransports(Le, p, n, C)) {
                if (C.readyState = 1, c && g.trigger("ajaxSend", [C, p]), l) return C;
                p.async && p.timeout > 0 && (s = e.setTimeout((function() {
                    C.abort("timeout")
                }), p.timeout));
                try {
                    l = !1, r.send(b, done)
                } catch (e) {
                    if (l) throw e;
                    done(-1, e)
                }
            } else done(-1, "No Transport");

            function done(t, n, a, u) {
                var f, d, m, b, w, T = n;
                l || (l = !0, s && e.clearTimeout(s), r = void 0, i = u || "", C.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (b = function ajaxHandleResponses(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            } if (u[0] in n) i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a || (a = o)
                        }
                        i = i || a
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i]
                }(p, C, a)), !f && jQuery.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), b = function ajaxConvert(e, t, n, r) {
                    var o, i, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                            if ("*" === i) i = u;
                            else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                            for (o in l)
                                if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, b, C, f), f ? (p.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (jQuery.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (jQuery.etag[o] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, f = !(m = b.error))) : (m = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", f ? v.resolveWith(h, [d, T, C]) : v.rejectWith(h, [C, T, m]), C.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : m]), y.fireWith(h, [C, T]), c && (g.trigger("ajaxComplete", [C, p]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return jQuery.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return jQuery.get(e, void 0, t, "script")
        }
    }), jQuery.each(["get", "post"], (function(e, t) {
        jQuery[t] = function(e, n, r, o) {
            return h(n) && (o = o || r, r = n, n = void 0), jQuery.ajax(jQuery.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, jQuery.isPlainObject(e) && e))
        }
    })), jQuery.ajaxPrefilter((function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), jQuery._evalUrl = function(e, t, n) {
        return jQuery.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                jQuery.globalEval(e, t, n)
            }
        })
    }, jQuery.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])), t = jQuery(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this
        },
        wrapInner: function(e) {
            return h(e) ? this.each((function(t) {
                jQuery(this).wrapInner(e.call(this, t))
            })) : this.each((function() {
                var t = jQuery(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        },
        wrap: function(e) {
            var t = h(e);
            return this.each((function(n) {
                jQuery(this).wrapAll(t ? e.call(this, n) : e)
            }))
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each((function() {
                jQuery(this).replaceWith(this.childNodes)
            })), this
        }
    }), jQuery.expr.pseudos.hidden = function(e) {
        return !jQuery.expr.pseudos.visible(e)
    }, jQuery.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, jQuery.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Oe = {
            0: 200,
            1223: 204
        },
        Me = jQuery.ajaxSettings.xhr();
    p.cors = !!Me && "withCredentials" in Me, p.ajax = Me = !!Me, jQuery.ajaxTransport((function(t) {
        var n, r;
        if (p.cors || Me && !t.crossDomain) return {
            send: function(o, i) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) s.setRequestHeader(a, o[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Oe[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout((function() {
                        n && r()
                    }))
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), jQuery.ajaxPrefilter((function(e) {
        e.crossDomain && (e.contents.script = !1)
    })), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return jQuery.globalEval(e), e
            }
        }
    }), jQuery.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), jQuery.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(r, o) {
                t = jQuery("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), m.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var Fe, ze = [],
        Ie = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ze.pop() || jQuery.expando + "_" + xe.guid++;
            return this[e] = !0, e
        }
    }), jQuery.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var o, i, a, s = !1 !== t.jsonp && (Ie.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ie, "$1" + o) : !1 !== t.jsonp && (t.url += (be.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || jQuery.error(o + " was not called"), a[0]
        }, t.dataTypes[0] = "json", i = e[o], e[o] = function() {
            a = arguments
        }, r.always((function() {
            void 0 === i ? jQuery(e).removeProp(o) : e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, ze.push(o)), a && h(i) && i(a[0]), a = i = void 0
        })), "script"
    })), p.createHTMLDocument = ((Fe = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Fe.childNodes.length), jQuery.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), i = !n && [], (o = b.exec(e)) ? [t.createElement(o[1])] : (o = buildFragment([e], t, i), i && i.length && jQuery(i).remove(), jQuery.merge([], o.childNodes)));
        var r, o, i
    }, jQuery.fn.load = function(e, t, n) {
        var r, o, i, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = stripAndCollapse(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && jQuery.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            i = arguments, a.html(r ? jQuery("<div>").append(jQuery.parseHTML(e)).find(r) : e)
        })).always(n && function(e, t) {
            a.each((function() {
                n.apply(this, i || [e.responseText, t, e])
            }))
        }), this
    }, jQuery.expr.pseudos.animated = function(e) {
        return jQuery.grep(jQuery.timers, (function(t) {
            return e === t.elem
        })).length
    }, jQuery.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, a, s, u, l = jQuery.css(e, "position"),
                c = jQuery(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), i = jQuery.css(e, "top"), u = jQuery.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), h(t) && (t = t.call(e, n, jQuery.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, jQuery.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                jQuery.offset.setOffset(this, e, t)
            }));
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === jQuery.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === jQuery.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = jQuery(e).offset()).top += jQuery.css(e, "borderTopWidth", !0), o.left += jQuery.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - jQuery.css(r, "marginTop", !0),
                    left: t.left - o.left - jQuery.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === jQuery.css(e, "position");) e = e.offsetParent;
                return e || F
            }))
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        jQuery.fn[e] = function(r) {
            return access(this, (function(e, r, o) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }), e, r, arguments.length)
        }
    })), jQuery.each(["top", "left"], (function(e, t) {
        jQuery.cssHooks[t] = addGetHookIf(p.pixelPosition, (function(e, n) {
            if (n) return n = curCSS(e, t), Z.test(n) ? jQuery(e).position()[t] + "px" : n
        }))
    })), jQuery.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        jQuery.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            jQuery.fn[r] = function(o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === i ? "margin" : "border");
                return access(this, (function(t, n, o) {
                    var i;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? jQuery.css(t, n, s) : jQuery.style(t, n, o, s)
                }), t, a ? o : void 0, a)
            }
        }))
    })), jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        jQuery.fn[t] = function(e) {
            return this.on(t, e)
        }
    })), jQuery.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
        jQuery.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }));
    var Re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || jQuery.guid++, i
    }, jQuery.holdReady = function(e) {
        e ? jQuery.readyWait++ : jQuery.ready(!0)
    }, jQuery.isArray = Array.isArray, jQuery.parseJSON = JSON.parse, jQuery.nodeName = nodeName, jQuery.isFunction = h, jQuery.isWindow = g, jQuery.camelCase = camelCase, jQuery.type = toType, jQuery.now = Date.now, jQuery.isNumeric = function(e) {
        var t = jQuery.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, jQuery.trim = function(e) {
        return null == e ? "" : (e + "").replace(Re, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return jQuery
    }));
    var We = e.jQuery,
        Be = e.$;
    return jQuery.noConflict = function(t) {
        return e.$ === jQuery && (e.$ = Be), t && e.jQuery === jQuery && (e.jQuery = We), jQuery
    }, void 0 === t && (e.jQuery = e.$ = jQuery), jQuery
}));