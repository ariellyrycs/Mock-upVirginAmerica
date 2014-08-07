/*
 * Copyright 2013 Google Inc.
 *
 * Swiffy runtime version 6.0.1
 *
 * In addition to the Google Terms of Service (http://www.google.com/accounts/TOS),
 * Google grants you and the Google Swiffy end users a personal, worldwide,
 * royalty-free, non-assignable and non-exclusive license to use the Google Swiffy
 * runtime to host it for Google Swiffy end users and to use it in connection with
 * the Google Swiffy service.
 */
(function () {
    var g, aa = this,
        ba = function (a, b, c) {
            a = a.split(".");
            c = c || aa;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {} : c[d] = b
        }, ca = function (a) {
            a.Ha = function () {
                return a.Hr ? a.Hr : a.Hr = new a
            }
        }, da = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length &&
                        "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
                else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }, l = function (a) {
            return void 0 !== a
        }, ea = function (a) {
            return "array" == da(a)
        }, fa = function (a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" ==
                typeof a.length
        }, m = function (a) {
            return "string" == typeof a
        }, ga = function (a) {
            return "boolean" == typeof a
        }, ha = function (a) {
            return "number" == typeof a
        }, p = function (a) {
            return "function" == da(a)
        }, ia = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }, ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ka = 0,
        la = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        }, ma = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        }, na = function (a, b, c) {
            na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
            return na.apply(null, arguments)
        }, oa = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        }, t = function (a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.q = b.prototype;
            a.prototype = new c;
            a.prototype.constructor =
                a;
            a.Hj = function (a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
    var va = function (a, b) {
        if (b) return a.replace(pa, "&amp;").replace(qa, "&lt;").replace(ra, "&gt;").replace(sa, "&quot;").replace(ta, "&#39;");
        if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ta, "&#39;"));
        return a
    }, pa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /[&<>"']/,
        wa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\"
        }, xa = {
            "'": "\\'"
        }, ya = function (a) {
            a = String(a);
            if (a.quote) return a.quote();
            for (var b = ['"'], c = 0; c < a.length; c++) {
                var d = a.charAt(c),
                    e = d.charCodeAt(0),
                    f = b,
                    h = c + 1,
                    k;
                if (!(k = wa[d])) {
                    if (!(31 < e && 127 > e))
                        if (d in xa) d = xa[d];
                        else if (d in wa) d = xa[d] = wa[d];
                    else {
                        e = d;
                        k = d.charCodeAt(0);
                        if (31 < k && 127 > k) e = d;
                        else {
                            if (256 > k) {
                                if (e = "\\x", 16 > k || 256 < k) e += "0"
                            } else e = "\\u", 4096 > k && (e += "0");
                            e += k.toString(16).toUpperCase()
                        }
                        d = xa[d] = e
                    }
                    k = d
                }
                f[h] = k
            }
            b.push('"');
            return b.join("")
        }, za = function (a,
            b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Aa = Array.prototype,
        Ba = Aa.indexOf ? function (a, b, c) {
            return Aa.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        }, Ca = Aa.forEach ? function (a, b, c) {
            Aa.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        }, Ea = Aa.map ? function (a, b, c) {
            return Aa.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f =
                    m(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
            return e
        }, Fa = Aa.every ? function (a, b, c) {
            return Aa.every.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        }, Ga = function (a, b) {
            var c = Ba(a, b),
                d;
            (d = 0 <= c) && Aa.splice.call(a, c, 1);
            return d
        }, Ha = function (a, b, c) {
            t: {
                for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++)
                    if (f in e && b.call(c, e[f], f, a)) {
                        b = f;
                        break t
                    }
                b = -1
            }
            return 0 <= b ? (Aa.splice.call(a, b, 1), !0) : !1
        }, Ja = function (a) {
            return Aa.concat.apply(Aa,
                arguments)
        }, Ka = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        }, La = function (a, b, c) {
            return 2 >= arguments.length ? Aa.slice.call(a, b) : Aa.slice.call(a, b, c)
        }, Na = function (a, b, c) {
            c = c || Ma;
            for (var d = 0, e = a.length, f; d < e;) {
                var h = d + e >> 1,
                    k;
                k = c(b, a[h]);
                0 < k ? d = h + 1 : (e = h, f = !k)
            }
            return f ? d : ~d
        }, Ma = function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var Oa = function (a) {
        return a
    };
    var Pa = function (a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }, Qa = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        }, Ra = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        }, Ta = function (a) {
            var b = da(a);
            if ("object" == b || "array" == b) {
                if (a.G) return a.G();
                var b = "array" == b ? [] : {}, c;
                for (c in a) b[c] = Ta(a[c]);
                return b
            }
            return a
        }, Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Va = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Wa, Xa, Ya, Za, ab, bb = function () {
            return aa.navigator ? aa.navigator.userAgent : null
        };
    ab = Za = Ya = Xa = Wa = !1;
    var cb;
    if (cb = bb()) {
        var db = aa.navigator;
        Wa = 0 == cb.lastIndexOf("Opera", 0);
        Xa = !Wa && (-1 != cb.indexOf("MSIE") || -1 != cb.indexOf("Trident"));
        Za = (Ya = !Wa && -1 != cb.indexOf("WebKit")) && -1 != cb.indexOf("Mobile");
        ab = !Wa && !Ya && !Xa && "Gecko" == db.product
    }
    var eb = Wa,
        fb = Xa,
        gb = ab,
        hb = Ya,
        ib = Za,
        jb = aa.navigator,
        kb = -1 != (jb && jb.platform || "").indexOf("Mac"),
        lb = function () {
            var a = aa.document;
            return a ? a.documentMode : void 0
        }, mb;
    t: {
        var nb = "",
            ob;
        if (eb && aa.opera) var pb = aa.opera.version,
        nb = "function" == typeof pb ? pb() : pb;
        else if (gb ? ob = /rv\:([^\);]+)(\)|;)/ : fb ? ob = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : hb && (ob = /WebKit\/(\S+)/), ob) var qb = ob.exec(bb()),
        nb = qb ? qb[1] : "";
        if (fb) {
            var rb = lb();
            if (rb > parseFloat(nb)) {
                mb = String(rb);
                break t
            }
        }
        mb = nb
    }
    var sb = mb,
        tb = {}, ub = function (a) {
            var b;
            if (!(b = tb[a])) {
                b = 0;
                for (var c = String(sb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var h = c[f] || "",
                        k = d[f] || "",
                        n = RegExp("(\\d*)(\\D*)", "g"),
                        q = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var s = n.exec(h) || ["", "", ""],
                            r = q.exec(k) || ["", "", ""];
                        if (0 == s[0].length && 0 == r[0].length) break;
                        b = za(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || za(0 == s[2].length,
                            0 == r[2].length) || za(s[2], r[2])
                    } while (0 == b)
                }
                b = tb[a] = 0 <= b
            }
            return b
        }, vb = aa.document,
        wb = vb && fb ? lb() || ("CSS1Compat" == vb.compatMode ? parseInt(sb, 10) : 5) : void 0;
    var xb = !fb || fb && 9 <= wb;
    !gb && !fb || fb && fb && 9 <= wb || gb && ub("1.9.1");
    fb && ub("9");
    var yb = function (a, b) {
        var c;
        c = a.className;
        c = m(c) && c.match(/\S+/g) || [];
        for (var d = La(arguments, 1), e = c.length + d.length, f = c, h = 0; h < d.length; h++) 0 <= Ba(f, d[h]) || f.push(d[h]);
        a.className = c.join(" ");
        return c.length == e
    };
    var Ab = function (a, b) {
        Pa(b, function (b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in zb ? a.setAttribute(zb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }, zb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        }, Cb = function (a, b, c) {
            var d = arguments,
                e = d[0],
                f = d[1];
            if (!xb && f && (f.name || f.type)) {
                e = ["<", e];
                f.name && e.push(' name="', va(f.name), '"');
                if (f.type) {
                    e.push(' type="', va(f.type), '"');
                    var h = {};
                    Va(h, f);
                    delete h.type;
                    f = h
                }
                e.push(">");
                e = e.join("")
            }
            e = document.createElement(e);
            f && (m(f) ? e.className = f : ea(f) ? yb.apply(null, [e].concat(f)) : Ab(e, f));
            2 < d.length && Bb(document, e, d, 2);
            return e
        }, Bb = function (a, b, c, d) {
            function e(c) {
                c && b.appendChild(m(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !fa(f) || ia(f) && 0 < f.nodeType ? e(f) : Ca(Db(f) ? Ka(f) : f, e)
            }
        }, Eb = function (a) {
            for (var b; b =
                a.firstChild;) a.removeChild(b)
        }, Fb = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        }, Db = function (a) {
            if (a && "number" == typeof a.length) {
                if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (p(a)) return "function" == typeof a.item
            }
            return !1
        };
    var Gb = function (a) {
        Gb[" "](a);
        return a
    };
    Gb[" "] = function () {};
    var Hb = !fb || fb && 9 <= wb,
        Ib = fb && !ub("9");
    !hb || ub("528");
    gb && ub("1.9b") || fb && ub("8") || eb && ub("9.5") || hb && ub("528");
    gb && !ub("8") || fb && ub("9");
    var Jb = function () {};
    Jb.prototype.Xr = !1;
    Jb.prototype.Nk = function () {
        this.Xr || (this.Xr = !0, this.pf())
    };
    Jb.prototype.pf = function () {
        if (this.Es)
            for (; this.Es.length;) this.Es.shift()()
    };
    var Kb = function (a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.vf = !1;
        this.Bq = !0
    };
    Kb.prototype.pf = function () {};
    Kb.prototype.Nk = function () {};
    Kb.prototype.stopPropagation = function () {
        this.vf = !0
    };
    Kb.prototype.preventDefault = function () {
        this.defaultPrevented = !0;
        this.Bq = !1
    };
    var Lb = function (a, b) {
        Kb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Ud = this.state = null;
        a && this.init(a, b)
    };
    t(Lb, Kb);
    Lb.prototype.init = function (a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (gb) {
                var e;
                t: {
                    try {
                        Gb(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = hb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = hb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY :
            a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Ud = a;
        a.defaultPrevented && this.preventDefault()
    };
    Lb.prototype.stopPropagation = function () {
        Lb.q.stopPropagation.call(this);
        this.Ud.stopPropagation ? this.Ud.stopPropagation() : this.Ud.cancelBubble = !0
    };
    Lb.prototype.preventDefault = function () {
        Lb.q.preventDefault.call(this);
        var a = this.Ud;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Ib) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Lb.prototype.pf = function () {};
    var Mb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Nb = function (a) {
            try {
                return !(!a || !a[Mb])
            } catch (b) {
                return !1
            }
        }, Ob = 0;
    var Pb = function (a, b, c, d, e, f) {
        this.Qc = a;
        this.bk = b;
        this.src = c;
        this.type = d;
        this.Sj = !! e;
        this.ef = f;
        this.key = ++Ob;
        this.Dg = this.Xj = !1
    };
    Pb.prototype.ik = function () {
        this.Dg = !0;
        this.ef = this.src = this.bk = this.Qc = null
    };
    var Qb = function (a) {
        this.src = a;
        this.qb = {};
        this.ki = 0
    };
    g = Qb.prototype;
    g.add = function (a, b, c, d, e) {
        var f = this.qb[a];
        f || (f = this.qb[a] = [], this.ki++);
        var h = Rb(f, b, d, e); - 1 < h ? (a = f[h], c || (a.Xj = !1)) : (a = new Pb(b, null, this.src, a, !! d, e), a.Xj = c, f.push(a));
        return a
    };
    g.remove = function (a, b, c, d) {
        if (!(a in this.qb)) return !1;
        var e = this.qb[a];
        b = Rb(e, b, c, d);
        return -1 < b ? (e[b].ik(), Aa.splice.call(e, b, 1), 0 == e.length && (delete this.qb[a], this.ki--), !0) : !1
    };
    g.kr = function (a) {
        var b = a.type;
        if (!(b in this.qb)) return !1;
        var c = Ga(this.qb[b], a);
        c && (a.ik(), 0 == this.qb[b].length && (delete this.qb[b], this.ki--));
        return c
    };
    g.Zr = function (a) {
        var b = 0,
            c;
        for (c in this.qb)
            if (!a || c == a) {
                for (var d = this.qb[c], e = 0; e < d.length; e++)++b, d[e].ik();
                delete this.qb[c];
                this.ki--
            }
        return b
    };
    g.yn = function (a, b, c, d) {
        a = this.qb[a];
        var e = -1;
        a && (e = Rb(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    var Rb = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Dg && f.Qc == b && f.Sj == !! c && f.ef == d) return e
        }
        return -1
    };
    var Sb = "closure_lm_" + (1E6 * Math.random() | 0),
        Tb = {}, Ub = 0,
        v = function (a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) v(a, b[f], c, d, e);
                return null
            }
            c = Vb(c);
            if (Nb(a)) a = a.aw(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !! d,
                    h = Wb(a);
                h || (a[Sb] = h = new Qb(a));
                c = h.add(b, c, !1, d, e);
                c.bk || (d = Xb(), c.bk = d, d.src = a, d.Qc = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in Tb ? Tb[b] : Tb[b] = "on" + b, d), Ub++);
                a = c
            }
            return a
        }, Xb = function () {
            var a = Zb,
                b = Hb ? function (c) {
                    return a.call(b.src, b.Qc, c)
                } : function (c) {
                    c =
                        a.call(b.src, b.Qc, c);
                    if (!c) return c
                };
            return b
        }, $b = function (a, b, c, d, e) {
            if (ea(b)) {
                for (var f = 0; f < b.length; f++) $b(a, b[f], c, d, e);
                return null
            }
            c = Vb(c);
            if (Nb(a)) return a.Hw(b, c, d, e);
            if (!a) return !1;
            if (a = Wb(a))
                if (b = a.yn(b, c, !! d, e)) return ac(b);
            return !1
        }, ac = function (a) {
            if (ha(a) || !a || a.Dg) return !1;
            var b = a.src;
            if (Nb(b)) return b.oq(a);
            var c = a.type,
                d = a.bk;
            b.removeEventListener ? b.removeEventListener(c, d, a.Sj) : b.detachEvent && b.detachEvent(c in Tb ? Tb[c] : Tb[c] = "on" + c, d);
            Ub--;
            (c = Wb(b)) ? (c.kr(a), 0 == c.ki && (c.src = null,
                b[Sb] = null)) : a.ik();
            return !0
        }, bc = function (a, b) {
            if (!a) return 0;
            if (Nb(a)) return a.vq(b);
            var c = Wb(a);
            if (!c) return 0;
            var d = 0,
                e;
            for (e in c.qb)
                if (!b || e == b)
                    for (var f = Ka(c.qb[e]), h = 0; h < f.length; ++h) ac(f[h]) && ++d;
            return d
        }, dc = function (a, b, c, d) {
            var e = 1;
            if (a = Wb(a))
                if (b = a.qb[b])
                    for (b = Ka(b), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.Sj == c && !f.Dg && (e &= !1 !== cc(f, d))
                    }
                return Boolean(e)
        }, cc = function (a, b) {
            var c = a.Qc,
                d = a.ef || a.src;
            a.Xj && ac(a);
            return c.call(d, b)
        }, Zb = function (a, b) {
            if (a.Dg) return !0;
            if (!Hb) {
                var c;
                if (!(c = b)) t: {
                    c = ["window", "event"];
                    for (var d = aa, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break t
                        }
                    c = d
                }
                e = c;
                c = new Lb(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    t: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break t
                        } catch (h) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, k = e.length - 1; !c.vf && 0 <= k; k--) c.currentTarget = e[k], d &= dc(e[k], f, !0, c);
                    for (k = 0; !c.vf && k < e.length; k++) c.currentTarget = e[k], d &= dc(e[k], f, !1, c)
                }
                return d
            }
            return cc(a,
                new Lb(b, this))
        }, Wb = function (a) {
            a = a[Sb];
            return a instanceof Qb ? a : null
        }, ec = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Vb = function (a) {
            return p(a) ? a : a[ec] || (a[ec] = function (b) {
                return a.handleEvent(b)
            })
        };
    var fc = function () {
        this.mf = new Qb(this);
        this.Mv = this
    };
    t(fc, Jb);
    fc.prototype[Mb] = !0;
    g = fc.prototype;
    g.Mm = null;
    g.addEventListener = function (a, b, c, d) {
        v(this, a, b, c, d)
    };
    g.removeEventListener = function (a, b, c, d) {
        $b(this, a, b, c, d)
    };
    g.dispatchEvent = function (a) {
        var b, c = this.Mm;
        if (c)
            for (b = []; c; c = c.Mm) b.push(c);
        var c = this.Mv,
            d = a.type || a;
        if (m(a)) a = new Kb(a, c);
        else if (a instanceof Kb) a.target = a.target || c;
        else {
            var e = a;
            a = new Kb(d, c);
            Va(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var h = b.length - 1; !a.vf && 0 <= h; h--) f = a.currentTarget = b[h], e = f.Ek(d, !0, a) && e;
        a.vf || (f = a.currentTarget = c, e = f.Ek(d, !0, a) && e, a.vf || (e = f.Ek(d, !1, a) && e));
        if (b)
            for (h = 0; !a.vf && h < b.length; h++) f = a.currentTarget = b[h], e = f.Ek(d, !1, a) && e;
        return e
    };
    g.pf = function () {
        fc.q.pf.call(this);
        this.vq();
        this.Mm = null
    };
    g.aw = function (a, b, c, d) {
        return this.mf.add(String(a), b, !1, c, d)
    };
    g.Hw = function (a, b, c, d) {
        return this.mf.remove(String(a), b, c, d)
    };
    g.oq = function (a) {
        return this.mf.kr(a)
    };
    g.vq = function (a) {
        return this.mf ? this.mf.Zr(a) : 0
    };
    g.Ek = function (a, b, c) {
        a = this.mf.qb[String(a)];
        if (!a) return !0;
        a = Ka(a);
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.Dg && f.Sj == b) {
                var h = f.Qc,
                    k = f.ef || f.src;
                f.Xj && this.oq(f);
                d = !1 !== h.call(k, c) && d
            }
        }
        return d && !1 != c.Bq
    };
    g.yn = function (a, b, c, d) {
        return this.mf.yn(String(a), b, c, d)
    };
    var ic = function (a, b, c, d, e) {
        if (!(fb || hb && ub("525"))) return !0;
        if (kb && e) return gc(a);
        if (e && !d) return !1;
        ha(b) && (b = hc(b));
        if (!c && (17 == b || 18 == b || kb && 91 == b)) return !1;
        if (hb && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
        }
        if (fb && d && b == a) return !1;
        switch (a) {
        case 13:
            return !(fb && fb && 9 <= wb);
        case 27:
            return !hb
        }
        return gc(a)
    }, gc = function (a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || hb && 0 == a) return !0;
            switch (a) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
            }
        }, hc = function (a) {
            if (gb) a = jc(a);
            else if (kb && hb) t: switch (a) {
            case 93:
                a = 91;
                break t
            }
            return a
        }, jc = function (a) {
            switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
            }
        };
    var kc = function (a, b) {
        fc.call(this);
        a && this.bi(a, b)
    };
    t(kc, fc);
    g = kc.prototype;
    g.pi = null;
    g.nk = null;
    g.Um = null;
    g.ok = null;
    g.ec = -1;
    g.xe = -1;
    g.cn = !1;
    var lc = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, mc = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        }, nc = fb || hb && ub("525"),
        oc = kb && gb;
    g = kc.prototype;
    g.Nv = function (a) {
        hb && (17 == this.ec && !a.ctrlKey || 18 == this.ec && !a.altKey || kb && 91 == this.ec && !a.metaKey) && (this.xe = this.ec = -1); - 1 == this.ec && (a.ctrlKey && 17 != a.keyCode ? this.ec = 17 : a.altKey && 18 != a.keyCode ? this.ec = 18 : a.metaKey && 91 != a.keyCode && (this.ec = 91));
        nc && !ic(a.keyCode, this.ec, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.xe = hc(a.keyCode), oc && (this.cn = a.altKey))
    };
    g.Gw = function () {
        this.xe = this.ec = -1
    };
    g.Ov = function (a) {
        this.Gw();
        this.cn = a.altKey
    };
    g.handleEvent = function (a) {
        var b = a.Ud,
            c, d, e = b.altKey;
        fb && "keypress" == a.type ? (c = this.xe, d = 13 != c && 27 != c ? b.keyCode : 0) : hb && "keypress" == a.type ? (c = this.xe, d = 0 <= b.charCode && 63232 > b.charCode && gc(c) ? b.charCode : 0) : eb ? (c = this.xe, d = gc(c) ? b.keyCode : 0) : (c = b.keyCode || this.xe, d = b.charCode || 0, oc && (e = this.cn), kb && 63 == d && 224 == c && (c = 191));
        var f = c = hc(c),
            h = b.keyIdentifier;
        c ? 63232 <= c && c in lc ? f = lc[c] : 25 == c && a.shiftKey && (f = 9) : h && h in mc && (f = mc[h]);
        a = f == this.ec;
        this.ec = f;
        b = new pc(f, d, a, b);
        b.altKey = e;
        this.dispatchEvent(b)
    };
    g.bi = function (a, b) {
        this.ok && this.detach();
        this.pi = a;
        this.nk = v(this.pi, "keypress", this, b);
        this.Um = v(this.pi, "keydown", this.Nv, b, this);
        this.ok = v(this.pi, "keyup", this.Ov, b, this)
    };
    g.detach = function () {
        this.nk && (ac(this.nk), ac(this.Um), ac(this.ok), this.ok = this.Um = this.nk = null);
        this.pi = null;
        this.xe = this.ec = -1
    };
    g.pf = function () {
        kc.q.pf.call(this);
        this.detach()
    };
    var pc = function (a, b, c, d) {
        Lb.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    t(pc, Lb);
    var qc = function () {};
    ca(qc);
    qc.prototype.Px = 0;
    qc.prototype.Ia = function () {
        return ":" + (this.Px++).toString(36)
    };
    var rc = "StopIteration" in aa ? aa.StopIteration : Error("StopIteration"),
        sc = function () {};
    sc.prototype.next = function () {
        throw rc;
    };
    sc.prototype.jn = function () {
        return this
    };
    var tc = function (a, b) {
        this.ia = {};
        this.za = [];
        this.Uj = this.Fa = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.di(a)
    };
    g = tc.prototype;
    g.Pc = function () {
        return this.Fa
    };
    g.cc = function () {
        this.$h();
        for (var a = [], b = 0; b < this.za.length; b++) a.push(this.ia[this.za[b]]);
        return a
    };
    g.sf = function () {
        this.$h();
        return this.za.concat()
    };
    g.Ld = function (a) {
        return uc(this.ia, a)
    };
    g.xn = function (a) {
        for (var b = 0; b < this.za.length; b++) {
            var c = this.za[b];
            if (uc(this.ia, c) && this.ia[c] == a) return !0
        }
        return !1
    };
    g.Ed = function (a, b) {
        if (this === a) return !0;
        if (this.Fa != a.Pc()) return !1;
        var c = b || vc;
        this.$h();
        for (var d, e = 0; d = this.za[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var vc = function (a, b) {
        return a === b
    };
    g = tc.prototype;
    g.Va = function () {
        return 0 == this.Fa
    };
    g.remove = function (a) {
        return uc(this.ia, a) ? (delete this.ia[a], this.Fa--, this.Uj++, this.za.length > 2 * this.Fa && this.$h(), !0) : !1
    };
    g.$h = function () {
        if (this.Fa != this.za.length) {
            for (var a = 0, b = 0; a < this.za.length;) {
                var c = this.za[a];
                uc(this.ia, c) && (this.za[b++] = c);
                a++
            }
            this.za.length = b
        }
        if (this.Fa != this.za.length) {
            for (var d = {}, b = a = 0; a < this.za.length;) c = this.za[a], uc(d, c) || (this.za[b++] = c, d[c] = 1), a++;
            this.za.length = b
        }
    };
    g.get = function (a, b) {
        return uc(this.ia, a) ? this.ia[a] : b
    };
    g.set = function (a, b) {
        uc(this.ia, a) || (this.Fa++, this.za.push(a), this.Uj++);
        this.ia[a] = b
    };
    g.di = function (a) {
        var b;
        a instanceof tc ? (b = a.sf(), a = a.cc()) : (b = Ra(a), a = Qa(a));
        for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    g.G = function () {
        return new tc(this)
    };
    g.jn = function (a) {
        this.$h();
        var b = 0,
            c = this.za,
            d = this.ia,
            e = this.Uj,
            f = this,
            h = new sc;
        h.next = function () {
            for (;;) {
                if (e != f.Uj) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw rc;
                var h = c[b++];
                return a ? h : d[h]
            }
        };
        return h
    };
    var uc = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var wc = function (a) {
        if ("function" == typeof a.Pc) a = a.Pc();
        else if (fa(a) || m(a)) a = a.length;
        else {
            var b = 0,
                c;
            for (c in a) b++;
            a = b
        }
        return a
    }, xc = function (a) {
            if ("function" == typeof a.cc) return a.cc();
            if (m(a)) return a.split("");
            if (fa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Qa(a)
        }, yc = function (a, b, c) {
            if ("function" == typeof a.every) return a.every(b, c);
            if (fa(a) || m(a)) return Fa(a, b, c);
            var d;
            if ("function" == typeof a.sf) d = a.sf();
            else if ("function" != typeof a.cc)
                if (fa(a) || m(a)) {
                    d = [];
                    for (var e =
                        a.length, f = 0; f < e; f++) d.push(f)
                } else d = Ra(a);
                else d = void 0;
            for (var e = xc(a), f = e.length, h = 0; h < f; h++)
                if (!b.call(c, e[h], d && d[h], a)) return !1;
            return !0
        };
    var zc = function (a, b, c) {
        this.ne = a || null;
        this.sw = !! c
    };
    g = zc.prototype;
    g.re = function () {
        if (!this.Sa && (this.Sa = new tc, this.Fa = 0, this.ne))
            for (var a = this.ne.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("="),
                    d = null,
                    e = null;
                0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
                d = decodeURIComponent(d.replace(/\+/g, " "));
                d = this.hf(d);
                this.add(d, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
    };
    g.Sa = null;
    g.Fa = null;
    g.Pc = function () {
        this.re();
        return this.Fa
    };
    g.add = function (a, b) {
        this.re();
        this.Yj();
        a = this.hf(a);
        var c = this.Sa.get(a);
        c || this.Sa.set(a, c = []);
        c.push(b);
        this.Fa++;
        return this
    };
    g.remove = function (a) {
        this.re();
        a = this.hf(a);
        return this.Sa.Ld(a) ? (this.Yj(), this.Fa -= this.Sa.get(a).length, this.Sa.remove(a)) : !1
    };
    g.Va = function () {
        this.re();
        return 0 == this.Fa
    };
    g.Ld = function (a) {
        this.re();
        a = this.hf(a);
        return this.Sa.Ld(a)
    };
    g.xn = function (a) {
        var b = this.cc();
        return 0 <= Ba(b, a)
    };
    g.sf = function () {
        this.re();
        for (var a = this.Sa.cc(), b = this.Sa.sf(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.cc = function (a) {
        this.re();
        var b = [];
        if (m(a)) this.Ld(a) && (b = Ja(b, this.Sa.get(this.hf(a))));
        else {
            a = this.Sa.cc();
            for (var c = 0; c < a.length; c++) b = Ja(b, a[c])
        }
        return b
    };
    g.set = function (a, b) {
        this.re();
        this.Yj();
        a = this.hf(a);
        this.Ld(a) && (this.Fa -= this.Sa.get(a).length);
        this.Sa.set(a, [b]);
        this.Fa++;
        return this
    };
    g.get = function (a, b) {
        var c = a ? this.cc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    g.oy = function (a, b) {
        this.remove(a);
        0 < b.length && (this.Yj(), this.Sa.set(this.hf(a), Ka(b)), this.Fa += b.length)
    };
    g.toString = function () {
        if (this.ne) return this.ne;
        if (!this.Sa) return "";
        for (var a = [], b = this.Sa.sf(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.cc(d), f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        return this.ne = a.join("&")
    };
    g.Yj = function () {
        this.ne = null
    };
    g.G = function () {
        var a = new zc;
        a.ne = this.ne;
        this.Sa && (a.Sa = this.Sa.G(), a.Fa = this.Fa);
        return a
    };
    g.hf = function (a) {
        a = String(a);
        this.sw && (a = a.toLowerCase());
        return a
    };
    var Ac = function (a) {
        this.ia = new tc;
        a && this.di(a)
    }, Bc = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (a[ja] || (a[ja] = ++ka)) : b.substr(0, 1) + a
        };
    g = Ac.prototype;
    g.Pc = function () {
        return this.ia.Pc()
    };
    g.add = function (a) {
        this.ia.set(Bc(a), a)
    };
    g.di = function (a) {
        a = xc(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    g.Zr = function (a) {
        a = xc(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    g.remove = function (a) {
        return this.ia.remove(Bc(a))
    };
    g.Va = function () {
        return this.ia.Va()
    };
    g.contains = function (a) {
        return this.ia.Ld(Bc(a))
    };
    g.cc = function () {
        return this.ia.cc()
    };
    g.G = function () {
        return new Ac(this)
    };
    g.Ed = function (a) {
        return this.Pc() == wc(a) && this.mw(a)
    };
    g.mw = function (a) {
        var b = wc(a);
        if (this.Pc() > b) return !1;
        !(a instanceof Ac) && 5 < b && (a = new Ac(a));
        return yc(this, function (b) {
            var d = a;
            if ("function" == typeof d.contains) b = d.contains(b);
            else if ("function" == typeof d.xn) b = d.xn(b);
            else if (fa(d) || m(d)) b = 0 <= Ba(d, b);
            else t: {
                for (var e in d)
                    if (d[e] == b) {
                        b = !0;
                        break t
                    }
                b = !1
            }
            return b
        })
    };
    g.jn = function () {
        return this.ia.jn(!1)
    };
    var Cc = null,
        Dc = null,
        Ec = gb || hb || eb || "function" == typeof aa.atob,
        Fc = function () {
            if (!Cc) {
                Cc = {};
                Dc = {};
                for (var a = 0; 65 > a; a++) Cc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Dc[Cc[a]] = a
            }
        };
    var Gc = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };
    var Ic = function (a, b) {
        this.wq = a || null;
        this.vc = !! b;
        this.ia = new tc;
        this.Ga = new Hc("", void 0);
        this.Ga.next = this.Ga.wc = this.Ga
    };
    g = Ic.prototype;
    g.Ar = function (a) {
        (a = this.ia.get(a)) && this.vc && (a.remove(), this.fr(a));
        return a
    };
    g.get = function (a, b) {
        var c = this.Ar(a);
        return c ? c.value : b
    };
    g.set = function (a, b) {
        var c = this.Ar(a);
        c ? c.value = b : (c = new Hc(a, b), this.ia.set(a, c), this.fr(c))
    };
    g.shift = function () {
        return this.tr(this.Ga.next)
    };
    g.pop = function () {
        return this.tr(this.Ga.wc)
    };
    g.remove = function (a) {
        return (a = this.ia.get(a)) ? (this.removeNode(a), !0) : !1
    };
    g.removeNode = function (a) {
        a.remove();
        this.ia.remove(a.key)
    };
    g.Pc = function () {
        return this.ia.Pc()
    };
    g.Va = function () {
        return this.ia.Va()
    };
    g.sf = function () {
        return this.map(function (a, b) {
            return b
        })
    };
    g.cc = function () {
        return this.map(function (a) {
            return a
        })
    };
    g.contains = function (a) {
        return this.some(function (b) {
            return b == a
        })
    };
    g.Ld = function (a) {
        return this.ia.Ld(a)
    };
    g.forEach = function (a, b) {
        for (var c = this.Ga.next; c != this.Ga; c = c.next) a.call(b, c.value, c.key, this)
    };
    g.map = function (a, b) {
        for (var c = [], d = this.Ga.next; d != this.Ga; d = d.next) c.push(a.call(b, d.value, d.key, this));
        return c
    };
    g.some = function (a, b) {
        for (var c = this.Ga.next; c != this.Ga; c = c.next)
            if (a.call(b, c.value, c.key, this)) return !0;
        return !1
    };
    g.every = function (a, b) {
        for (var c = this.Ga.next; c != this.Ga; c = c.next)
            if (!a.call(b, c.value, c.key, this)) return !1;
        return !0
    };
    g.fr = function (a) {
        this.vc ? (a.next = this.Ga.next, a.wc = this.Ga, this.Ga.next = a, a.next.wc = a) : (a.wc = this.Ga.wc, a.next = this.Ga, this.Ga.wc = a, a.wc.next = a);
        null != this.wq && this.dv(this.wq)
    };
    g.dv = function (a) {
        for (var b = this.ia.Pc(); b > a; b--) this.removeNode(this.vc ? this.Ga.wc : this.Ga.next)
    };
    g.tr = function (a) {
        this.Ga != a && this.removeNode(a);
        return a.value
    };
    var Hc = function (a, b) {
        this.key = a;
        this.value = b
    };
    Hc.prototype.remove = function () {
        this.wc.next = this.next;
        this.next.wc = this.wc;
        delete this.wc;
        delete this.next
    };
    var Jc = /iPhone|iPod/,
        Kc = function (a, b, c, d) {
            return a << 21 | b << 14 | c << 7 | d
        }, Lc = /OS (\d)_(\d)(?:_(\d))?/,
        Mc = function () {
            var a = Lc.exec(navigator.userAgent) || [];
            a.shift();
            return Kc.apply(null, a)
        };
    var Nc = {
        normal: 0,
        layer: 1,
        multiply: 2,
        screen: 3,
        lighten: 4,
        darken: 5,
        difference: 6,
        add: 7,
        subtract: 8,
        invert: 9,
        alpha: 10,
        erase: 11,
        overlay: 12,
        hardlight: 13
    }, Oc = "normal layer multiply screen lighten darken difference add subtract invert alpha erase overlay hardlight".split(" ");
    Object.defineProperty && !Object.defineProperties && (Object.defineProperties = function (a, b) {
        for (var c in b) Object.defineProperty(a, c, b[c])
    });
    var Pc = function (a, b) {
        this.x = a;
        this.y = b
    };
    Pc.prototype.u = function (a) {
        var b = this.x * a.o + this.y * a.g + a.j;
        this.x = this.x * a.k + this.y * a.h + a.i;
        this.y = b
    };
    Pc.prototype.G = function () {
        return new Pc(this.x, this.y)
    };
    var Qc = function (a, b) {
        return Math.sqrt(a * a + b * b)
    }, Rc = function (a, b, c, d, e, f) {
            this.k = a;
            this.o = b;
            this.h = c;
            this.g = d;
            this.i = e;
            this.j = f
        }, Sc = new Rc(1, 0, 0, 1, 0, 0),
        Tc = new Rc(20, 0, 0, 20, 0, 0);
    g = Rc.prototype;
    g.Bc = function () {
        var a = this.k * this.g - this.o * this.h;
        return new Rc(this.g / a, -this.o / a, -this.h / a, this.k / a, (this.h * this.j - this.g * this.i) / a, (this.o * this.i - this.k * this.j) / a)
    };
    g.Kt = function () {
        return 0 != this.k * this.g - this.o * this.h
    };
    g.multiply = function (a) {
        return new Rc(this.k * a.k + this.o * a.h, this.k * a.o + this.o * a.g, this.h * a.k + this.g * a.h, this.h * a.o + this.g * a.g, this.i * a.k + this.j * a.h + a.i, this.i * a.o + this.j * a.g + a.j)
    };
    g.hm = function (a, b) {
        return new Rc(this.k * a, this.o * a, this.h * b, this.g * b, this.i, this.j)
    };
    g.Zg = function (a) {
        var b = Math.cos(a);
        a = Math.sin(a);
        return new Rc(this.k * b + this.o * a, this.o * b - this.k * a, this.h * b + this.g * a, this.g * b - this.h * a, this.i * b + this.j * a, this.j * b - this.i * a)
    };
    g.Vd = function (a, b) {
        return new Rc(this.k * a, this.o * b, this.h * a, this.g * b, this.i * a, this.j * b)
    };
    g.rd = function () {
        return Math.sqrt(this.k * this.k + this.o * this.o)
    };
    g.Pd = function () {
        return Math.sqrt(this.h * this.h + this.g * this.g)
    };
    g.translate = function (a, b) {
        return new Rc(this.k, this.o, this.h, this.g, this.i + a, this.j + b)
    };
    g.cd = function (a, b) {
        return new Rc(this.k, this.o, this.h, this.g, a, b)
    };
    g.toString = function () {
        return "matrix(" + this.k + "," + this.o + "," + this.h + "," + this.g + "," + this.i + "," + this.j + ")"
    };
    g.Fo = function () {
        var a = this.rd(),
            b = this.Pd();
        if (!a || !b) return {
            zd: 1,
            Je: 1,
            angle: 0,
            h: 0,
            g: 1
        };
        var c = this.k / a,
            d = this.o / a;
        return {
            zd: a,
            Je: b,
            angle: -Math.atan2(this.o, this.k),
            h: (c * this.h + d * this.g) / a,
            g: (c * this.g - d * this.h) / b
        }
    };
    g.Ed = function (a) {
        return a == this ? !0 : a ? this.k == a.k && this.o == a.o && this.h == a.h && this.g == a.g && this.i == a.i && this.j == a.j : !1
    };
    g.ib = function (a) {
        a.transform(this.k, this.o, this.h, this.g, this.i, this.j)
    };
    var Uc = function (a, b, c, d, e, f, h, k) {
        this.W = a;
        this.O = b;
        this.U = c;
        this.N = d;
        this.T = e;
        this.K = f;
        this.H = h;
        this.P = k
    }, Vc = new Uc(1, 0, 1, 0, 1, 0, 1, 0);
    g = Uc.prototype;
    g.zm = function (a) {
        return new Uc(this.W * a.W, this.W * a.O + this.O, this.U * a.U, this.U * a.N + this.N, this.T * a.T, this.T * a.K + this.K, this.H * a.H, this.H * a.P + this.P)
    };
    g.apply = function (a) {
        return new Xc(a.ha * this.W + this.O, a.fa * this.U + this.N, a.ea * this.T + this.K, this.dh(a.Qa))
    };
    g.dh = function (a) {
        return this.H * a + this.P / 255
    };
    g.Ed = function (a) {
        return null != a && this.W == a.W && this.O == a.O && this.U == a.U && this.N == a.N && this.T == a.T && this.K == a.K && this.H == a.H && this.P == a.P
    };
    g.Ci = function () {
        return 1 == this.W && 0 == this.O && 1 == this.U && 0 == this.N && 1 == this.T && 0 == this.K && 0 == this.P
    };
    var Yc = function (a, b, c, d) {
        this.d = a;
        this.e = b;
        this.D = c;
        this.C = d;
        this.Va() && this.reset()
    };
    g = Yc.prototype;
    g.reset = function () {
        this.e = this.d = Number.POSITIVE_INFINITY;
        this.C = this.D = Number.NEGATIVE_INFINITY
    };
    g.G = function () {
        return new Yc(this.d, this.e, this.D, this.C)
    };
    g.expand = function (a, b) {
        this.Fd(a, b, 0, 0)
    };
    g.Fd = function (a, b, c, d) {
        this.d = Math.min(this.d, a - c);
        this.D = Math.max(this.D, a + c);
        this.e = Math.min(this.e, b - d);
        this.C = Math.max(this.C, b + d)
    };
    g.Rn = function () {
        this.d = Math.floor(this.d);
        this.e = Math.floor(this.e);
        this.D = Math.ceil(this.D);
        this.C = Math.ceil(this.C)
    };
    g.add = function (a) {
        this.e += a.e;
        this.C += a.C;
        this.d += a.d;
        this.D += a.D
    };
    g.u = function (a) {
        if (!this.Va()) {
            var b = new Pc(this.d, this.e),
                c = this.D - this.d,
                d = this.C - this.e;
            this.reset();
            b.u(a);
            var e = c * a.o,
                c = c * a.k,
                f = d * a.h;
            a = d * a.g;
            this.expand(b.x, b.y);
            this.expand(b.x + c, b.y + e);
            this.expand(b.x + f, b.y + a);
            this.expand(b.x + c + f, b.y + e + a)
        }
    };
    g.Un = function (a) {
        return this.D >= a.d && a.D >= this.d && this.C >= a.e && a.C >= this.e
    };
    g.uq = function (a) {
        return a.d >= this.d && a.D <= this.D && a.e >= this.e && a.C <= this.C
    };
    g.Ed = function (a) {
        return a.d == this.d && a.D == this.D && a.e == this.e && a.C == this.C
    };
    g.contains = function (a, b) {
        return a >= this.d && a <= this.D && b >= this.e && b <= this.C
    };
    g.Yc = function (a) {
        this.d = Math.min(this.d, a.d);
        this.D = Math.max(this.D, a.D);
        this.e = Math.min(this.e, a.e);
        this.C = Math.max(this.C, a.C)
    };
    g.Qk = function (a) {
        this.d = Math.max(this.d, a.d);
        this.D = Math.min(this.D, a.D);
        this.e = Math.max(this.e, a.e);
        this.C = Math.min(this.C, a.C);
        this.Va() && this.reset()
    };
    g.Va = function () {
        return !(this.d <= this.D && this.e <= this.C)
    };
    g.et = function () {
        return new Yc(-this.D, -this.C, -this.d, -this.e)
    };
    g.width = function () {
        return Math.max(this.D - this.d, 0)
    };
    g.height = function () {
        return Math.max(this.C - this.e, 0)
    };
    var Zc = function (a) {
        return new Yc(a.xmin, a.ymin, a.xmax, a.ymax)
    };
    Yc.prototype.toString = function () {
        return "" + this.d + " " + this.e + " " + this.width() + " " + this.height()
    };
    Yc.prototype.Tc = function (a) {
        this.Va() ? (a.setAttribute("x", 0), a.setAttribute("y", 0), a.setAttribute("width", 0), a.setAttribute("height", 0)) : (a.setAttribute("x", this.d), a.setAttribute("y", this.e), a.setAttribute("width", this.D - this.d), a.setAttribute("height", this.C - this.e))
    };
    var $c = function (a, b, c) {
        this.m = a ? a : [];
        this.$a = b ? b : 0;
        this.cb = c ? c : 0;
        this.Ag = this.Bg = null
    }, ad = {
            0: 1,
            1: 1,
            2: 2,
            3: 0
        }, bd = {
            0: "m",
            1: "l",
            2: "q",
            3: "z"
        };
    g = $c.prototype;
    g.toString = function () {
        return "M " + this.$a + " " + this.cb + (this.m.length ? " " : "") + this.io()
    };
    g.io = function () {
        if (void 0 == this.m.ob) {
            for (var a = this.m.slice(0), b = 0, c = a.length; b < c;) {
                var d = a[b];
                a[b++] = bd[d];
                b += 2 * ad[d]
            }
            this.m.ob = a.join(" ")
        }
        return this.m.ob
    };
    g.Mj = function (a, b) {
        var c = new $c;
        c.m = this.m;
        c.$a = this.$a + a;
        c.cb = this.cb + b;
        c.Bg = this.Bg ? this.Bg.Mj(a, b) : null;
        c.Ag = this.Ag ? this.Ag.Mj(a, b) : null;
        return c
    };
    g.Fd = function (a, b) {
        for (var c = 0, d = this.$a, e = this.cb, f = d, h = e, k = this.m; c < k.length;) switch (k[c++]) {
        case 0:
            d += k[c++];
            e += k[c++];
            f = d;
            h = e;
            break;
        case 1:
            a.Fd(d, e, b, b);
            d += k[c++];
            e += k[c++];
            a.Fd(d, e, b, b);
            break;
        case 2:
            var n = d + k[c++],
                q = e + k[c++],
                s = d + k[c++],
                r = e + k[c++],
                u = (n - d) / (2 * n - d - s),
                w = (q - e) / (2 * q - e - r);
            0 < w && 1 > w && a.Fd(d, (1 - w) * (1 - w) * e + 2 * (1 - w) * w * q + w * w * r, b, b);
            0 < u && 1 > u && a.Fd((1 - u) * (1 - u) * d + 2 * (1 - u) * u * n + u * u * s, e, b, b);
            d = s;
            e = r;
            a.Fd(d, e, b, b);
            break;
        case 3:
            d = f, e = h
        }
    };
    g.tj = function (a) {
        var b = this.m,
            c = 0,
            d = b.length,
            e = ["M", this.$a * a.k + this.cb * a.h + a.i, this.$a * a.o + this.cb * a.g + a.j];
        if (1 != a.k || 1 != a.g || 0 != a.o || 0 != a.h)
            for (; c < d;) {
                var f = b[c];
                e.push(bd[f]);
                ++c;
                for (f = ad[f]; 0 < f; --f) {
                    var h = b[c + 0],
                        k = b[c + 1];
                    e.push(h * a.k + k * a.h);
                    e.push(h * a.o + k * a.g);
                    c += 2
                }
            } else e.push(this.io());
        return e.join(" ")
    };
    g.be = function (a) {
        var b = 0,
            c = this.$a,
            d = this.cb,
            e = c,
            f = d,
            h = this.m;
        for (a.moveTo(c, d); b < h.length;) switch (h[b++]) {
        case 0:
            c += h[b++];
            d += h[b++];
            e = c;
            f = d;
            a.moveTo(c, d);
            break;
        case 2:
            var k = c + h[b++],
                n = d + h[b++],
                c = c + h[b++],
                d = d + h[b++];
            a.quadraticCurveTo(k, n, c, d);
            break;
        case 1:
            c += h[b++];
            d += h[b++];
            a.lineTo(c, d);
            break;
        case 3:
            a.closePath(), c = e, d = f
        }
    };
    g.u = function (a) {
        if (a == Sc) return this;
        for (var b = 0, c = [], d = this.m.length; b < d;) {
            var e = this.m[b++];
            c.push(e);
            for (var f = 0; f < ad[e]; f++) {
                var h = this.m[b],
                    k = this.m[b + 1];
                c.push(h * a.k + k * a.h);
                c.push(h * a.o + k * a.g);
                b += 2
            }
        }
        return new $c(c, this.$a * a.k + this.cb * a.h + a.i, this.$a * a.o + this.cb * a.g + a.j)
    };
    g.concat = function (a) {
        if (0 == a.m.length) return this;
        if (0 == this.m.length) return a;
        for (var b = this.$a, c = this.cb, d = b, e = c, f = 0; f < this.m.length;) switch (this.m[f++]) {
        case 0:
            b += this.m[f++];
            c += this.m[f++];
            d = b;
            e = c;
            break;
        case 3:
            b = d;
            c = e;
            break;
        case 2:
            f += 2;
        case 1:
            b += this.m[f++], c += this.m[f++]
        }
        b = a.$a - b;
        c = a.cb - c;
        d = this.m.concat(0, b, c, a.m);
        e = this.m.ob;
        a = a.m.ob;
        e && a && (d.ob = e + " m " + b + " " + c + " " + a);
        return new $c(d, this.$a, this.cb)
    };
    g.yu = function () {
        var a = this.m;
        if (10 != a.length && 13 != a.length || 1 != a[0] || 1 != a[3] || 1 != a[6] || 3 != a[a.length - 1]) return !1;
        var b = a[1],
            c = a[2],
            d = a[4],
            e = a[5],
            f = a[7],
            h = a[8];
        if (!(0 == c && 0 == d && 0 == h && b == -f || 0 == b && 0 == e && 0 == f && c == -h)) return !1;
        if (13 == a.length) {
            if (1 != a[9]) return !1;
            b = a[11];
            if (d != -a[10] || e != -b) return !1
        }
        return !0
    };
    g.Ct = function () {
        if (this.yu()) {
            var a = new Yc,
                b = this.$a,
                c = this.cb;
            a.expand(b, c);
            a.expand(b + this.m[1] + this.m[4], c + this.m[2] + this.m[5]);
            return a
        }
        return null
    };
    g.Va = function () {
        for (var a = 0; a < this.m.length;) {
            var b = this.m[a++];
            switch (b) {
            case 0:
            case 3:
                break;
            case 1:
            case 2:
                return !1;
            default:
                return !1
            }
            a += 2 * ad[b]
        }
        return !0
    };
    g.js = function () {
        for (var a = [], b = 0; b < this.m.length;) {
            var c = this.m[b++];
            3 != c && a.push(c);
            for (var d = 0; d < 2 * ad[c]; d++) a.push(this.m[b++])
        }
        return new $c(a, this.$a, this.cb)
    };
    var dd = function (a) {
        for (var b = [], c = 0, d = 0, e = 0, f = cd(function () {
                return a.charCodeAt(e++)
            }), h = 0, k = 0, n = 0, q = 0, s = 0, r = 0, u = 0, w = 0, C = !0; e < a.length;) {
            n = f();
            C || b.push(n);
            switch (n) {
            case 0:
                h += n = f();
                k += q = f();
                s = h;
                r = k;
                C ? (c = n + u, d = q + w) : (b.push(n + u), b.push(q + w));
                break;
            case 1:
                h += n = f();
                k += q = f();
                b.push(n + u);
                b.push(q + w);
                break;
            case 2:
                var C = f(),
                    H = f(),
                    h = h + (n = f()),
                    k = k + (q = f());
                b.push(C + u);
                b.push(H + w);
                b.push(n + u);
                b.push(q + w);
                break;
            case 3:
                u = h - s;
                w = k - r;
                C = !1;
                continue
            }
            C = !1;
            w = u = 0
        }
        return new $c(b, c, d)
    };
    g = $c.prototype;
    g.Em = function (a, b, c, d, e) {
        c = a - c;
        d = b - d;
        var f = 10 * Math.max(Math.abs(c), Math.abs(d));
        c /= f;
        d /= f;
        e.push(0, a, b);
        e.push(1, -c, -d);
        e.push(1, c, d)
    };
    g.kq = function () {
        this.Bg || this.Mr();
        return this.Bg
    };
    g.jq = function () {
        this.Ag || this.Mr();
        return this.Ag
    };
    g.Pv = function (a, b) {
        for (var c = 0, d = []; c < this.m.length;) {
            var e = this.m[c++];
            d.push(e);
            for (var f = 0; f < 2 * ad[e]; f++) d.push(ed(this.m[c], a.m[c++], b))
        }
        return new $c(d, ed(this.$a, a.$a, b), ed(this.cb, a.cb, b))
    };
    g.Mr = function () {
        for (var a = [], b = [], c = 0, d = 0, e = 0, f = 0, h = 0, k = 0, n, q, s = this.m, r = 0; r < s.length;) {
            var u = void 0 === n,
                w = s[r++];
            if (0 == w) void 0 != n && (this.Em(h - e, k - f, n - e, q - f, b), e = h, f = k), h += s[r++], k += s[r++], n = q = void 0;
            else if (3 == w) h = c, k = d, n = q = void 0;
            else {
                n = h;
                q = k;
                var C = h + s[r++],
                    H = k + s[r++];
                u && (this.Em(n - c, q - d, C - c, H - d, a), c = n, d = q);
                2 == w ? (n = C, q = H, h += s[r++], k += s[r++]) : (h = C, k = H)
            }
        }
        void 0 != n && this.Em(h - e, k - f, n - e, q - f, b);
        this.Bg = new $c(a, this.$a, this.cb);
        this.Ag = new $c(b, this.$a, this.cb)
    };
    var fd = function () {
        $c.call(this);
        this.qe = this.pe = this.Dm = this.Cm = 0
    };
    t(fd, $c);
    fd.prototype.Xh = function (a, b) {
        var c = a - this.pe,
            d = b - this.qe;
        this.m.push(0, c, d);
        this.pe = this.Cm = a;
        this.qe = this.Dm = b;
        null != this.m.ob && (this.m.ob += bd[0] + c + " " + d);
        return this
    };
    fd.prototype.ld = function (a, b) {
        var c = a - this.pe,
            d = b - this.qe;
        this.m.push(1, c, d);
        this.pe = a;
        this.qe = b;
        null != this.m.ob && (this.m.ob += bd[1] + c + " " + d);
        return this
    };
    fd.prototype.close = function () {
        this.m.push(3);
        this.pe = this.Cm;
        this.qe = this.Dm;
        null != this.m.ob && (this.m.ob += bd[3]);
        return this
    };
    fd.prototype.dc = function (a, b, c, d) {
        a -= this.pe;
        b -= this.qe;
        var e = c - this.pe,
            f = d - this.qe;
        this.m.push(2, a, b, e, f);
        this.pe = this.Cm = c;
        this.qe = this.Dm = d;
        null != this.m.ob && (this.m.ob += bd[2] + a + " " + b + " " + e + " " + f);
        return this
    };
    var gd, hd = (-1 != navigator.userAgent.indexOf("iPad") || Jc.test(navigator.userAgent)) && Mc() < Kc(7),
        Xc = function (a, b, c, d) {
            this.ha = a;
            this.fa = b;
            this.ea = c;
            this.Qa = d
        };
    Xc.prototype.toString = function () {
        return "rgb(" + this.ha.toFixed() + "," + this.fa.toFixed() + "," + this.ea.toFixed() + ")"
    };
    Xc.prototype.Ec = function () {
        return "rgba(" + this.ha.toFixed() + "," + this.fa.toFixed() + "," + this.ea.toFixed() + "," + this.Qa.toFixed(3) + ")"
    };
    var id = function (a) {
        var b = 0,
            c = cd(function () {
                return a.charCodeAt(b++)
            });
        return new Rc(c() / 65536 + 1, c() / 65536, c() / 65536, c() / 65536 + 1, c(), c())
    }, kd = function (a) {
            for (var b = [], c = 0, d = jd(function () {
                    return a.charCodeAt(c++)
                }), e = 0; c < a.length;) e += parseInt(d(), 10), b.push(e);
            return b
        }, jd = function (a) {
            return function () {
                var b = a();
                if (58 == b) return 0;
                for (var c = ""; 48 <= b && 57 >= b;) c += String.fromCharCode(b), b = a();
                return (97 <= b ? b - 96 : -(b - 64)) + c
            }
        }, cd = function (a) {
            var b = jd(a);
            return function () {
                return parseInt(b(), 10)
            }
        }, ld = function (a) {
            a =
                Number(a);
            return isFinite(a) ? a : 0
        }, md = function (a) {
            var b = 0,
                c = cd(function () {
                    return a.charCodeAt(b++)
                });
            return new Uc((c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c(), (c() + 256) / 256, c())
        }, nd = function (a, b) {
            var c = a,
                d = c & 255,
                c = c >> 8,
                e = c & 255,
                c = c >> 8,
                f = c & 255,
                c = c >> 8 & 255,
                c = c / 255;
            b && (f = f * b.W + b.O, e = e * b.U + b.N, d = d * b.T + b.K, c = c * b.H + b.P / 255);
            return new Xc(f, e, d, c)
        }, od = function (a) {
            a = a.replace(/^ *rgb *\( *([^,]+) *, *([^,]+) *, *([^,]+) *\) *$/, function (a, c, d, e) {
                return (c << 16) + (d << 8) + (e << 0)
            });
            a = a.replace(/^ *#([0-9a-fA-F]+) *$/,
                function (a, c) {
                    var d = parseInt(c, 16);
                    return 4278190080 | d
                });
            return a | 0
        }, pd = function (a, b) {
            l(b) || (b = 100);
            return a & 16777215 | (2.55 * b & 255) << 24
        }, qd = function (a, b) {
            var c = new Pc(20 * b.x, 20 * b.y);
            c.u(a);
            c.x /= 20;
            c.y /= 20;
            return c
        }, ed = function (a, b, c) {
            return a + (b - a) * c
        }, rd = function (a) {
            a = String(a).trim();
            return "0" == a.charAt(0) && "x" != a.charAt(1).toLowerCase()
        }, sd = function (a) {
            a.setAttribute("opacity", 0)
        }, td = function (a) {
            if (!gd) {
                var b = function (a) {
                    window.setTimeout(a, 1E3 / 60)
                };
                gd = hd ? b : window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || b
            }
            gd.call(window, a)
        }, ud = function (a) {
            return "__swiffy_" == a.substr(0, 9)
        }, vd = function (a, b) {
            var c;
            if (m(a)) c = a;
            else {
                c = new zc;
                if (a)
                    for (var d in a) {
                        var e = a[d];
                        "$" == d.charAt(0) || ud(d) || e instanceof x || (ea(e) || (e = [e]), c.oy(d, e))
                    }
                c = c.toString()
            } if (!b) return c;
            if (!c) return b;
            d = b.indexOf("?");
            return b = -1 != d ? b.slice(0, d + 1) + c + "&" + b.slice(d + 1) : b + ("?" + c)
        }, xd = function (a) {
            var b = a.internedStrings;
            b && (delete a.internedStrings,
                wd(a, b))
        }, wd = function (a, b) {
            for (var c in a) {
                var d = a[c];
                "string" == typeof d && "#" == d.charAt(0) ? a[c] = b[d.substr(1)] : d instanceof Object && wd(d, b)
            }
        }, yd = function (a) {
            a = a.replace(/\+/g, " ");
            try {
                return decodeURIComponent(a)
            } catch (b) {
                for (var c = "", d = 0, e = d; e < a.length; d = e) {
                    e = a.indexOf("%", d);
                    if (0 > e) break;
                    for (var c = c + a.substring(d, e), f = d = 0; e < a.length;) {
                        var h = a.charCodeAt(e++);
                        if (37 === h) {
                            if (!/[0-9a-fA-F]/.test(a.charAt(e)) || !/[0-9a-fA-F]/.test(a.charAt(++e)))
                                if (0 < f) continue;
                                else break;
                            h = parseInt(a.substr(++e - 2, 2),
                                16)
                        }
                        if (0 < f) d = (d << 6) + (h & 63), f--;
                        else if (192 === (h & 192)) {
                            for (; h & 64;) h <<= 1, f++;
                            d = (h & 127) >> f
                        } else d = h; if (0 === f) {
                            c += String.fromCharCode(d);
                            break
                        }
                    }
                }
                return c + a.substring(d)
            }
        }, Ad = function (a) {
            var b = a.indexOf("?"),
                c = a.indexOf("#");
            return 0 <= b && (0 > c || c > b) ? zd(a.substring(b + 1)) : {}
        }, zd = function (a, b) {
            var c = {};
            if (a)
                for (var d = a.split("&"), e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = f.indexOf("="),
                        k = 0 <= h ? f.substring(0, h) : f;
                    if (k || b) f = 0 <= h ? f.substring(h + 1) : "", k = yd(k), f = yd(f), k in c || (c[k] = []), c[k].push(f)
                }
            return c
        }, Bd = function (a,
            b, c, d) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
            l(b) && e.setAttribute("in", b);
            l(c) && e.setAttribute("in2", c);
            e.setAttribute("mode", a);
            l(d) && e.setAttribute("result", d);
            return e
        }, Cd = function (a, b, c, d) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            l(b) && e.setAttribute("in", b);
            l(c) && e.setAttribute("in2", c);
            e.setAttribute("operator", a);
            l(d) && e.setAttribute("result", d);
            return e
        }, Dd = function (a, b, c, d, e, f, h) {
            var k = document.createElementNS("http://www.w3.org/2000/svg",
                "feComposite");
            l(e) && k.setAttribute("in", e);
            l(f) && k.setAttribute("in2", f);
            k.setAttribute("operator", "arithmetic");
            k.setAttribute("k1", a);
            k.setAttribute("k2", b);
            k.setAttribute("k3", c);
            k.setAttribute("k4", d);
            l(h) && k.setAttribute("result", h);
            return k
        }, Ed = function (a, b, c, d, e, f) {
            var h = document.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer"),
                k;
            if (1 != c || 0 != d) k = document.createElementNS("http://www.w3.org/2000/svg", "feFuncA"), k.setAttribute("type", "linear"), k.setAttribute("slope", c), k.setAttribute("intercept",
                d), h.appendChild(k);
            if (1 != a || 0 != b)
                for (c = ["feFuncR", "feFuncG", "feFuncB"], d = 0; 3 > d; ++d) k = document.createElementNS("http://www.w3.org/2000/svg", c[d]), k.setAttribute("type", "linear"), k.setAttribute("slope", a), k.setAttribute("intercept", b), h.appendChild(k);
            l(e) && h.setAttribute("in", e);
            l(f) && h.setAttribute("result", f);
            return h
        }, Fd = function (a, b, c) {
            b = b ? b.nextSibling : a.firstChild;
            b != c && a.insertBefore(c, b);
            return c
        }, Gd = function (a, b) {
            for (var c = b ? b.nextSibling : a.firstChild; c;) {
                var d = c,
                    c = c.nextSibling;
                a.removeChild(d)
            }
        };
    var Id = function (a) {
        this.pr = a || ":" + (Hd++).toString(36)
    }, Hd = 0,
        Jd = new Id,
        Kd = {};
    Id.prototype.Iw = 0;
    Id.prototype.el = function () {
        return this.pr + "-" + (this.Iw++).toString(36)
    };
    var Ld = function () {
        this.Qm = [];
        this.ed = {};
        this.Vf = document.createElementNS("http://www.w3.org/2000/svg", "defs")
    }, Md = function (a, b) {
            this.id = a;
            this.dk = b
        };
    Md.prototype.al = function () {
        return !!this.dk
    };
    Md.prototype.get = function () {
        return this.dk
    };
    Ld.prototype.ke = function (a) {
        var b = this.Qm[a];
        b || (b = new Md(a, null), this.Qm[a] = b);
        return b
    };
    Ld.prototype.wr = function (a, b) {
        this.ke(a).dk = b
    };
    Ld.prototype.Vv = function (a, b) {
        for (var c = this.Qm, d = 0; d < c.length; d++)
            if (c[d] && c[d].dk) {
                var e = c[d].get().da(a);
                e && this.Vf.appendChild(e)
            }
        b && a.Rq(b);
        a.Sq()
    };
    var Nd = 1,
        Od = function (a, b) {
            a.prototype = Object.create(b.prototype);
            a.prototype.constructor = a
        }, y = function (a, b, c) {
            c && Od(a, c);
            a.prototype ? (c = a.prototype.__swiffy_as2_classdef || null, Object.defineProperty(a.prototype, "__swiffy_as2_classdef", {
                value: a
            })) : c = Object;
            Object.defineProperty(a, "__swiffy_as2_typeid", {
                value: Nd++
            });
            Object.defineProperty(a, "__swiffy_as2_baseclass", {
                value: c
            });
            Object.defineProperty(a, "__swiffy_as2_name", {
                value: b
            })
        };
    y(Object, "Object");
    var z = function (a, b, c, d) {
        if (ia(a)) {
            b = null == b ? Object.getOwnPropertyNames(a) : m(b) ? b.split(",") : b;
            var e = {};
            d & 4 && (e.writable = !0);
            d & 2 && (e.configurable = !0);
            d & 1 && (e.enumerable = !0);
            c & 4 && (e.writable = !1);
            c & 2 && (e.configurable = !1);
            c & 1 && (e.enumerable = !1);
            for (c = 0; c < b.length; ++c)(d = Object.getOwnPropertyDescriptor(a, b[c])) && d.configurable && Object.defineProperty(a, b[c], e)
        }
    }, Pd = function () {};
    Pd.prototype.valueOf = function () {};
    var Qd = function (a) {
        return null != a ? Object(a) : new Pd
    }, Rd = function (a) {
            return null != a ? Object(a) : Object.create(Qd.prototype)
        }, Sd = {};
    Qd.registerClass = function (a, b) {
        if (2 > arguments.length) return !1;
        Sd[a] = b;
        return !0
    };
    z(Qd, null, 3);
    var Td = function (a) {
        Object.defineProperty(this, "__swiffy_vm", {
            value: a
        })
    };
    y(Td, "AsBroadcaster");
    var Vd = function (a, b) {
        for (var c = Array.prototype.slice.call(arguments, 2), d = 0; d < this._listeners.length; ++d) {
            var e = this._listeners[d];
            if (null != e) {
                var f = e[a.t(e, b)];
                p(f) && f.apply(e, c)
            }
        }
        return 0 < this._listeners.length ? !0 : void 0
    }, Wd = function (a) {
            null != a ? Ga(this._listeners, a) : Ha(this._listeners, function (a) {
                return null == a
            });
            this._listeners.push(a);
            return !0
        }, Xd = function (a) {
            return Ga(this._listeners, a)
        };
    Td.prototype.initialize = function (a) {
        a._listeners = [];
        a.addListener = Wd;
        a.broadcastMessage = oa(Vd, this.__swiffy_vm);
        a.removeListener = Xd;
        z(a, ["addListener", "broadcastMessage", "removeListener", "_listeners"], 3)
    };
    z(Td.prototype, null, 3);
    var Yd = {
        Xa: function () {
            return 0
        }
    }, $d = function (a, b, c) {
            return 1 == a.length ? new Zd(c(a[0])) : new b(c(a[0]), c(a[1]))
        }, Zd = function (a) {
            this.value = a
        };
    Zd.prototype.Re = !0;
    Zd.prototype.xa = function () {
        return this.value
    };
    var ae = function (a, b) {
        this.from = a;
        this.to = b
    };
    ae.prototype.Re = !1;
    ae.prototype.xa = function (a) {
        return ed(this.from, this.to, a.Xa())
    };
    var be = function (a) {
        return $d(a, ae, Oa)
    }, ce = function (a, b) {
            this.from = a;
            this.to = b
        };
    ce.prototype.Re = !1;
    ce.prototype.xa = function (a) {
        var b = this.from,
            c = this.to;
        a = a.Xa();
        return new Rc(ed(b.k, c.k, a), ed(b.o, c.o, a), ed(b.h, c.h, a), ed(b.g, c.g, a), ed(b.i, c.i, a), ed(b.j, c.j, a))
    };
    var de = function (a, b) {
        return $d(a, ce, function (a) {
            return id(a).hm(b, b)
        })
    }, ee = function (a, b) {
            this.from = a;
            this.to = b
        };
    ee.prototype.Re = !1;
    ee.prototype.xa = function (a) {
        var b = this.from,
            c = this.to;
        a = a.Xa();
        return new Xc(ed(b.ha, c.ha, a), ed(b.fa, c.fa, a), ed(b.ea, c.ea, a), ed(b.Qa, c.Qa, a))
    };
    var fe = function (a, b) {
        this.from = a;
        this.to = b;
        this.Hv = a.js();
        this.Iv = b.js()
    };
    fe.prototype.Re = !1;
    fe.prototype.xa = function (a) {
        a = a.Xa();
        return 0 == a ? this.from : 1 == a ? this.to : this.Hv.Pv(this.Iv, a)
    };
    var ge = (-1 != navigator.userAgent.indexOf("iPad") || Jc.test(navigator.userAgent)) && Mc() < Kc(6),
        he = [null, "reflect", "repeat"],
        ie = [null, "linearRGB"],
        je = function (a, b) {
            this.color = $d(b.color, ee, nd)
        };
    g = je.prototype;
    g.mc = function () {
        return null
    };
    g.We = function (a, b, c, d, e, f) {
        a.setAttribute(d, f, this.color, ke);
        return d
    };
    g.Jj = !1;
    g.zb = !0;
    g.ib = function (a, b, c, d) {
        (b = this.color.xa(b)) && d && (b = d.apply(b));
        a.fillStyle = b.Ec();
        a.fill();
        return !0
    };
    var le = function (a, b, c, d, e, f) {
        d.setAttribute(f, "url(#" + e.id + ")");
        return d
    }, me = function (a, b) {
            b.transform && (this.transform = de(b.transform, 16384));
            this.stops = [];
            if (b.gradient.stops)
                for (var c = 0; c < b.gradient.stops.length; c++) {
                    var d = b.gradient.stops[c];
                    this.stops[c] = {
                        color: $d(d.color, ee, nd),
                        offset: be(d.offset.map(function (a) {
                            return a / 255
                        }))
                    }
                }
            this.Si = he[b.gradient.spread];
            this.ar = ie[b.gradient.interpolation]
        };
    g = me.prototype;
    g.is = function (a, b) {
        a.setAttribute("gradientUnits", "userSpaceOnUse");
        this.transform ? b.setAttribute(a, "gradientTransform", this.transform, ne) : a.setAttribute("gradientTransform", "scale(16384)");
        for (var c = 0; c < this.stops.length; c++) a.appendChild(oe(this.stops[c], b));
        this.Si && a.setAttribute("spreadMethod", this.Si);
        this.ar && a.setAttribute("color-interpolation", this.ar);
        a.id = qc.Ha().Ia();
        return a
    };
    g.We = le;
    g.mc = function () {};
    g.ib = function () {};
    g.Jj = !1;
    g.zb = !1;
    var pe = function (a, b) {
        me.call(this, a, b)
    };
    t(pe, me);
    pe.prototype.mc = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        c.setAttribute("x1", -1);
        c.setAttribute("x2", 1);
        c.setAttribute("y1", 0);
        c.setAttribute("y2", 0);
        return this.is(c, b)
    };
    pe.prototype.ib = function (a, b, c, d) {
        if (this.Si) return !1;
        this.transform ? (c = this.transform.xa(b), a.transform(c.k, c.o, c.h, c.g, c.i, c.j)) : a.scale(16384, 16384);
        c = a.createLinearGradient(-1, 0, 1, 0);
        for (var e = this.stops, f = 0; f < e.length; f++) {
            var h = e[f].color.xa(b);
            h && d && (h = d.apply(h));
            c.addColorStop(e[f].offset.xa(b), h.Ec())
        }
        a.fillStyle = c;
        a.fill();
        return !0
    };
    pe.prototype.zb = !1;
    var qe = function (a, b) {
        me.call(this, a, b);
        b.gradient.f && (this.Yi = be(b.gradient.f))
    };
    t(qe, me);
    qe.prototype.mc = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "radialGradient");
        c.setAttribute("r", 1);
        c.setAttribute("cx", 0);
        c.setAttribute("cy", 0);
        this.Yi && b.setAttribute(c, "fx", this.Yi, ne);
        return this.is(c, b)
    };
    qe.prototype.ib = function (a, b, c, d) {
        if (this.Si) return !1;
        this.transform ? (c = this.transform.xa(b), a.transform(c.k, c.o, c.h, c.g, c.i, c.j)) : a.scale(16384, 16384);
        c = 0;
        this.Yi && (c = this.Yi.xa(b));
        c = a.createRadialGradient(c, 0, 0, 0, 0, 1);
        for (var e = this.stops, f = 0; f < e.length; f++) {
            var h = e[f].color.xa(b);
            h && d && (h = d.apply(h));
            c.addColorStop(e[f].offset.xa(b), h.Ec())
        }
        a.fillStyle = c;
        a.fill();
        return !0
    };
    qe.prototype.zb = !1;
    var se = function (a, b) {
        this.Ml = "";
        var c = a.ke(b.bitmap).get();
        c instanceof re && (this.Zc = c);
        this.transform = b.transform ? id(b.transform) : Tc
    };
    g = se.prototype;
    g.mc = function () {
        this.Ml || (this.Ml = this.Zc ? "#" + this.Zc.km : "missing");
        return null
    };
    g.We = function (a, b, c, d, e) {
        null == e ? (c = document.createElementNS("http://www.w3.org/2000/svg", "use"), c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.Ml)) : c = e;
        this.transform && c.setAttribute("transform", this.transform.toString());
        a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.appendChild(c);
        var f;
        b.data.Re && (f = b.data.xa(Yd).Ct());
        if (f && this.Zc) {
            var h;
            if (null == e) e = new Pc(0, 0), h = new Pc(this.Zc.width, this.Zc.height);
            else {
                b = Number(e.getAttribute("x"));
                c = Number(e.getAttribute("y"));
                var k = Number(e.getAttribute("width"));
                h = Number(e.getAttribute("height"));
                e = new Pc(b, c);
                h = new Pc(b + k, c + h)
            }
            this.transform && (e.u(this.transform), h.u(this.transform));
            b = Math.round(e.x);
            c = Math.round(e.y);
            k = Math.round(h.x - e.x);
            h = Math.round(h.y - e.y);
            0 > k && (b += k, k = -k);
            0 > h && (c += h, h = -h);
            if (f.d == b && f.e == c && f.width() == k && f.height() == h) return a
        }
        f = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        f.id = qc.Ha().Ia();
        f.appendChild(d);
        a.appendChild(f);
        a.setAttribute("clip-path", "url(#" + f.id + ")");
        return a
    };
    g.Jj = !0;
    g.ib = function (a, b, c, d) {
        d && (a.globalAlpha = d.dh(a.globalAlpha));
        this.transform && (b = this.transform, a.transform(b.k, b.o, b.h, b.g, b.i, b.j));
        a.clip();
        a.drawImage(this.Zc.ic, 0, 0);
        return !0
    };
    g.zb = !1;
    var te = function (a, b) {
        se.call(this, a, b)
    };
    t(te, se);
    te.prototype.mc = function (a, b) {
        te.q.mc.call(this, a, b);
        var c = this.Zc;
        if (!c) return null;
        var d = this.transform,
            e = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
        e.setAttribute("width", c.width);
        e.setAttribute("height", c.height);
        e.setAttribute("patternUnits", "userSpaceOnUse");
        var f = document.createElementNS("http://www.w3.org/2000/svg", "use");
        f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + c.km);
        e.appendChild(f);
        e.setAttribute("patternTransform", d.toString());
        e.id = qc.Ha().Ia();
        return e
    };
    te.prototype.We = function (a, b, c, d, e, f) {
        le(a, b, c, d, e, f);
        a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.appendChild(d);
        return a
    };
    te.prototype.ib = function (a, b, c, d) {
        d && (a.globalAlpha = d.dh(a.globalAlpha));
        b = a.createPattern(this.Zc.ic, "repeat");
        this.transform && (c = this.transform, a.transform(c.k, c.o, c.h, c.g, c.i, c.j));
        a.fillStyle = b;
        a.fill();
        return !0
    };
    te.prototype.zb = !1;
    var ue = function (a, b) {
        se.call(this, a, b)
    };
    t(ue, se);
    ue.prototype.mc = function (a, b) {
        ue.q.mc.call(this, a, b);
        if (!this.Zc) return null;
        var c = this.transform,
            d = this.Zc,
            e = a[0].G();
        e.u(c.Bc());
        var f = e.width(),
            h = e.height(),
            c = document.createElement("canvas");
        c.setAttribute("width", f);
        c.setAttribute("height", h);
        var k = document.createElementNS("http://www.w3.org/2000/svg", "image");
        k.setAttribute("width", f);
        k.setAttribute("height", h);
        k.setAttribute("x", e.d);
        k.setAttribute("y", e.e);
        var n = c.getContext("2d");
        n.rect(0, 0, f, h);
        n.translate(-e.d, -e.e);
        d = n.createPattern(d.ic,
            "repeat");
        n.fillStyle = d;
        n.fill();
        k.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.toDataURL("image/png"));
        k.id = qc.Ha().Ia();
        return k
    };
    var oe = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        b.setAttribute(c, "offset", a.offset, ne);
        b.setAttribute(c, "stop-color", a.color, ke);
        return c
    }, ve = [null, je, pe, qe, qe, ge ? ue : te, se],
        we = function (a, b) {
            var c = ve[b.type];
            return c ? new c(a, b) : null
        };
    var xe = ["round", "butt", "square"],
        ye = ["round", "none", "square"],
        ze = ["round", "bevel", "miter"],
        Ae = function (a, b) {
            b.fill ? this.fill = we(a, b.fill) : this.color = $d(b.color, ee, nd);
            var c = b.cap | 0,
                d = l(b.ecap) ? b.ecap : c;
            this.Fg = xe[c];
            this.Rj = xe[d];
            this.gq = ze[b.joint | 0];
            b.miter && (this.miter = b.miter);
            this.width = be(b.width)
        }, Be = function (a, b) {
            return b ? new Ae(a, b) : null
        };
    g = Ae.prototype;
    g.mc = function (a, b) {
        return this.fill ? this.fill.mc(a, b) : null
    };
    g.Jj = !1;
    g.zb = !1;
    g.zr = function (a, b, c, d, e) {
        "butt" != d && (b = document.createElementNS("http://www.w3.org/2000/svg", "path"), b.setAttribute("stroke-linecap", d), b.setAttribute("stroke-linejoin", "bevel"), a.appendChild(b), c.ax(b, e))
    };
    g.We = function (a, b, c, d, e, f) {
        if (this.Fg == this.Rj) d.setAttribute("stroke-linecap", this.Fg);
        else {
            var h = document.createElementNS("http://www.w3.org/2000/svg", "g");
            this.zr(h, a, c, this.Fg, function (a) {
                return a.kq()
            });
            this.zr(h, a, c, this.Rj, function (a) {
                return a.jq()
            });
            h.appendChild(d);
            d = h
        }
        a.setAttribute(d, "stroke-width", this.width, Ce);
        d.setAttribute("stroke-linejoin", this.gq);
        null != this.miter && d.setAttribute("stroke-miterlimit", this.miter);
        if (this.fill) return this.fill.We(a, b, c, d, e, f);
        a.setAttribute(d, f, this.color,
            ke);
        return d
    };
    g.ib = function (a, b, c, d, e) {
        if (this.fill) return !1;
        var f = this.Fg != this.Rj;
        a.lineCap = f ? "butt" : this.Fg;
        a.lineJoin = this.gq;
        null != this.miter && (a.miterLimit = this.miter);
        e = Math.max(e.rd(), e.Pd());
        e = Math.max(this.width.xa(b), 20 / e);
        a.lineWidth = e;
        (b = this.color.xa(b)) && d && (b = d.apply(b));
        a.strokeStyle = b.Ec();
        a.stroke();
        f && (a.lineJoin = "bevel", a.beginPath(), a.lineCap = this.Fg, c.kq().be(a), a.stroke(), a.beginPath(), a.lineCap = this.Rj, c.jq().be(a), a.stroke());
        return !0
    };
    var De = function (a, b, c) {
        this.Ma = a ? a : new Yc;
        this.nb = b;
        this.ac = c
    };
    g = De.prototype;
    g.Yc = function (a) {
        this.nb ? a.nb ? this.nb.Yc(a.nb) : this.nb.Yc(a.Ma) : a.nb && (this.nb = this.Ma.G(), this.nb.Yc(a.nb));
        this.Ma.Yc(a.Ma);
        this.Vo(a.ac, !0)
    };
    g.Vo = function (a, b) {
        a && !this.Ma.uq(a) ? (this.ac || (this.ac = this.Ma.G()), this.ac.Yc(a)) : b && this.ac && this.Ma.uq(this.ac) && (this.ac = void 0)
    };
    g.u = function (a) {
        this.nb && this.nb.u(a);
        this.ac && this.ac.u(a);
        this.Ma.u(a)
    };
    g.G = function () {
        return new De(this.Ma.G(), this.nb ? this.nb.G() : void 0, this.ac ? this.ac.G() : void 0)
    };
    g.Wc = function () {
        return this.nb ? this.nb : this.Ma
    };
    g.eh = function () {
        return this.ac ? this.ac : this.Ma
    };
    g.$t = function (a) {
        this.nb || (this.nb = this.Ma.G());
        this.Ma = a
    };
    var Ee = function (a, b) {
        this.type = a;
        this.Te = b || null
    }, Fe = {
            GA: 0,
            EA: 1,
            UA: 2,
            PA: 3,
            QA: 4,
            yC: 5,
            Bz: 6,
            MA: 7,
            OB: 8,
            PB: 9,
            HB: 10,
            GB: 11,
            iB: 12,
            vz: 13,
            xz: 14,
            uz: 15,
            wz: 16,
            uA: 17,
            fz: 18,
            rf: 19,
            FA: 20,
            wy: 21,
            RA: 22,
            TA: 23,
            uy: 24,
            tz: 25,
            JB: 26,
            vy: 27,
            IB: 28
        };
    var Ge = function () {
        this.qs = [];
        this.rs = null
    };
    Ge.prototype.ud = function (a) {
        return new(this.qs[He(a.constructor)])(a)
    };
    Ge.prototype.gt = function (a) {
        return new this.rs(a)
    };
    Ge.prototype.c = function (a, b) {
        this.qs[He(a)] = b
    };
    Ge.prototype.On = function (a) {
        this.rs = a
    };
    var Ie = [],
        He = function (a) {
            l(a.Hs) || (a.Hs = Ie.length, Ie.push(a));
            return a.Hs
        };
    var Je = function (a) {
        this.vc = this.le = this.oa = null;
        this.xg = 0;
        this.r = a || null;
        this.Vh = []
    };
    g = Je.prototype;
    g.Dk = function (a) {
        if (!this.oa || this.oa.depth > a) return this.vc = null;
        var b = this.oa;
        this.vc && a >= this.vc.depth && (b = this.vc);
        for (; b.nextSibling && !(b.nextSibling.depth >= a);) b = b.nextSibling;
        b.nextSibling && b.nextSibling.depth == a && (b = b.nextSibling);
        return this.vc = b
    };
    g.Wj = function (a, b) {
        this.Qr(a, this.Dk(b));
        a.depth = b
    };
    g.Qr = function (a, b) {
        b ? (b.nextSibling ? b.nextSibling.sc = a : this.le = a, a.sc = b, a.nextSibling = b.nextSibling, b.nextSibling = a) : (this.oa && (this.oa.sc = a, a.nextSibling = this.oa), this.oa = a, this.le || (this.le = a));
        a.$c || ++this.xg
    };
    g.Og = function (a) {
        this.vc === a && (this.vc = this.vc.nextSibling);
        a.sc ? a.sc.nextSibling = a.nextSibling : this.oa = a.nextSibling;
        a.nextSibling ? a.nextSibling.sc = a.sc : this.le = a.sc;
        a.nextSibling = null;
        a.sc = null;
        a.depth = void 0;
        a.$c || --this.xg
    };
    g.bl = function (a, b) {
        this.Wj(a, b);
        Ke(this.r, a)
    };
    g.jo = function (a) {
        return (a = this.Fc(a)) ? this.om(a) : null
    };
    g.om = function (a) {
        this.Og(a);
        a.$v(5) ? this.Vh.push(a) : this.Ym(a);
        return a
    };
    g.Rt = function (a) {
        for (var b = this.oa; b;) {
            var c = b,
                b = b.nextSibling;
            c.$c || a(c) || this.om(c)
        }
    };
    g.Fc = function (a) {
        var b = this.Dk(a);
        return b && b.depth == a ? b : null
    };
    g.forEach = function (a) {
        for (var b = this.oa; b;) {
            if (a(b)) return !0;
            b = b.nextSibling
        }
        return !1
    };
    g.pv = function (a) {
        for (var b = this.le; b;) {
            if (a(b)) return !0;
            b = b.sc
        }
        return !1
    };
    g.mr = function (a) {
        for (var b = this.oa; b;) {
            if (b.getName() == a) return b;
            b = b.nextSibling
        }
        return null
    };
    g.qv = function () {
        return this.le ? Math.max(0, this.le.depth + 1) : 0
    };
    g.Ym = function (a) {
        Le(this.r, a);
        a.p();
        a.depth = void 0
    };
    g.p = function () {
        for (; this.oa;) {
            var a = this.oa;
            this.Og(a);
            this.Ym(a)
        }
    };
    g.Wd = function () {
        for (var a = this.oa; a;) a.Wd(), a = a.nextSibling
    };
    g.ev = function () {
        if (0 < this.Vh.length) {
            for (var a = 0; a < this.Vh.length; a++) this.Ym(this.Vh[a]);
            this.Vh = []
        }
    };
    g.Qt = function (a) {
        this.r = a.r;
        for (a = this.oa; a;) Ke(this.r, a), a = a.nextSibling
    };
    g.Lm = function (a, b) {
        this.r && (Le(this.r, a), b && Ke(this.r, a, b))
    };
    g.Jm = function (a, b) {
        b < a && (b = a = b);
        var c = this.Dk(a),
            d = this.Dk(b);
        c && c.depth == a ? this.Og(c) : c = null;
        d && d.depth == b ? this.Og(d) : d = null;
        c && this.Wj(c, b);
        d && this.Wj(d, a)
    };
    g.lu = function (a) {
        var b = Math.min(-16384, this.oa.depth) - 1;
        this.Og(a);
        this.Wj(a, b)
    };
    g.lk = function () {
        return this.xg
    };
    g.gf = function (a) {
        if (0 > a || a >= this.xg) return null;
        if (a <= this.xg - a) {
            for (var b = this.oa; 1 <= a;) b = b.nextSibling, b.$c || --a;
            for (; b.$c;) b = b.nextSibling
        } else {
            b = this.le;
            for (a = this.xg - 1 - a; 1 <= a;) b = b.sc, b.$c || --a;
            for (; b.$c;) b = b.sc
        }
        return b
    };
    g.Tg = function (a) {
        for (var b = 0, c = this.oa; c; c = c.nextSibling) {
            if (c == a) return b;
            c.$c || ++b
        }
    };
    g.bf = function (a, b) {
        var c = this.gf(b - 1);
        a.depth = NaN;
        this.Qr(a, c)
    };
    g.Nh = function (a) {
        this.Og(a)
    };
    var Ke = function (a, b, c) {
        if (a && (c = l(c) ? c : b.getName())) {
            var d = b.a.J();
            b = b.na() ? b.r : a;
            d.Go(a, c, b, !0)
        }
    }, Le = function (a, b) {
            if (a) {
                var c = b.getName();
                if (c) {
                    var d = b.a.J(),
                        e = b.na() ? b.r : a;
                    d.Ho(a, c, e)
                }
            }
        };
    Je.prototype.zb = function () {
        for (var a = this.oa; a;) {
            if (!a.zb()) return !1;
            a = a.nextSibling
        }
        return !0
    };
    var Me = function (a, b, c) {
        this.a = a;
        this.definition = b;
        this.r = c || this.wa();
        this.r.__swiffy_d = this;
        this.r.__swiffy_child_ref = {}
    };
    Me.prototype.da = function (a, b) {
        this.a.J().np(this, a, b)
    };
    Me.prototype.Ah = function () {};
    Me.prototype.pg = function () {};
    var Ne = function () {
        var a = document.createElement("canvas");
        a.width = 1;
        a.height = 1;
        this.md = a.getContext("2d");
        this.md.transform(0.05, 0, 0, 0.05, 0, 0);
        this.md.save();
        this.xm = !1
    };
    Ne.prototype.aq = function (a, b, c) {
        this.xm && (this.md.setTransform(1, 0, 0, 1, 0, 0), this.md.clearRect(0, 0, 1, 1), this.md.restore(), this.md.save(), this.xm = !1);
        this.md.translate(-b, -c);
        a.getParent() && a.getParent().qa().ib(this.md);
        a = Oe.ud(a);
        b = !1;
        a.gc(this.md, 8) && (this.xm = !0, b = 0 < this.md.getImageData(0, 0, 1, 1).data[3]);
        a.p();
        return b
    };
    var Pe = function (a, b, c) {
        Me.call(this, a, b, c);
        this.depth = this.Vi = void 0;
        this.Ne = "";
        this.sc = this.nextSibling = this.$ = null;
        this.Ji = this.S = 4100;
        this.ta = 31;
        this.Na = [];
        this.ul = null;
        this.Fe = !0;
        this.wo = 0;
        this.Fi = void 0;
        this.Xc = !1;
        this.Cc = Sc;
        this.If = null;
        this.tb = Vc;
        this.no = this.qo = null;
        this.nl = this.tb;
        this.ml = Vc;
        this.ql = void 0;
        this.uo = !1;
        this.ub = this.Ge = this.Ni = null;
        this.Hi = !1;
        this.Cd = null;
        this.$c = !1;
        this.Sk = this.rc = this.Yf = null;
        this.ol = !1;
        this.Qd = null;
        this.hh = !1;
        this.Gc = 471859200
    };
    t(Pe, Me);
    g = Pe.prototype;
    g.Fj = function (a) {
        this.hh = a;
        this.s(1048576);
        this.Cj(function (b) {
            b.Fj(a)
        })
    };
    g.mm = function (a) {
        !a && this.ta & 16 || (this.ta |= 16, this.s(4096), !a && this.Tb() || this.Cj(function (a) {
            a.mm()
        }))
    };
    g.Wr = function () {
        if (this.ta & 16) {
            var a = this.$,
                a = a ? a.Eb().zm(this.tb) : this.tb;
            this.Tb() ? (this.ml = a, this.nl = Vc) : (this.ml = Vc, this.nl = a);
            this.ta &= -17
        }
    };
    g.Eb = function () {
        this.Wr();
        return this.nl
    };
    g.Rk = function () {
        this.Wr();
        return this.ml
    };
    g.qa = function () {
        this.ta & 1 && (this.qo = this.$ ? this.Cc.multiply(this.$.qa()) : this.Cc, this.ta ^= 1);
        return this.qo
    };
    g.fc = function () {
        this.ta & 2 && (this.no = this.qa().Bc(), this.ta ^= 2);
        return this.no
    };
    g.Cj = function () {
        return !1
    };
    g.$p = function () {
        return !1
    };
    g.map = function (a) {
        return a(this)
    };
    g.Ca = function () {
        this.uo = !0
    };
    g.Ro = function () {
        return !!this.uo
    };
    g.setTransform = function (a) {
        this.Cc != a && (this.s(1), this.Cc = a, this.If = null, this.zj(), this.$ && this.$.Fb())
    };
    g.yc = function () {
        this.If || (this.If = this.Cc.Fo());
        return this.If
    };
    g.Jg = function () {
        var a = this.If;
        if (a) {
            var b = Math.cos(a.angle),
                c = Math.sin(a.angle);
            this.setTransform(new Rc(a.zd * b, -a.zd * c, a.zd * b * a.h + a.Je * c * a.g, a.Je * b * a.g - a.zd * c * a.h, this.Cc.i, this.Cc.j));
            this.If = a
        }
    };
    g.ka = function () {
        var a = this.Ua().Wc();
        if (a.Va()) return 0;
        a = a.G();
        a.u(this.Z());
        return (a.D - a.d) / 20
    };
    g.nn = function (a) {
        if (0 <= a) {
            var b = this.ka(),
                c = this.Z();
            0 == b ? (b = this.Ua().Wc().width() / 20, 0 == b && (b = 1), this.setTransform(new Rc(a / b, c.o, 0, c.g, c.i, c.j))) : (0 == a && (a = 1 / 1024), this.setTransform(c.Vd(a / b, 1).cd(c.i, c.j)))
        }
    };
    g.jb = function () {
        var a = this.Ua().Wc();
        if (a.Va()) return 0;
        a = a.G();
        a.u(this.Z());
        return (a.C - a.e) / 20
    };
    g.mn = function (a) {
        if (0 <= a) {
            var b = this.jb(),
                c = this.Z();
            0 == b ? (b = this.Ua().Wc().height() / 20, 0 == b && (b = 1), this.setTransform(new Rc(c.k, 0, c.h, a / b, c.i, c.j))) : (0 == a && (a = 1 / 1024), this.setTransform(c.Vd(1, a / b).cd(c.i, c.j)))
        }
    };
    g.zj = function () {
        this.ta |= 3;
        this.s(2048);
        this.Cj(function (a) {
            a.zj()
        });
        this.ub && this.ub.$ != this.$ && this.ub.s(32768);
        this.Ge && this.Ge.$ != this.$ && this.s(32768);
        0 < this.Na.length && this.Fb()
    };
    g.Fb = function () {
        this.ta |= 4;
        this.s(16384);
        this.$ && this.$.Fb()
    };
    g.ru = function () {
        this.ta |= 8;
        this.Fb()
    };
    g.Z = function () {
        return this.Cc
    };
    g.Lb = function () {
        return this.Vi
    };
    g.nh = function () {
        return l(this.Vi)
    };
    g.Uk = function (a) {
        this.Vi != a && (this.s(32768), this.Vi = a)
    };
    g.Xa = function () {
        return this.wo
    };
    g.s = function (a) {
        (this.S & a) != a && (this.S |= a, this.Ji |= a, this.$ && this.$.s(65536))
    };
    g.Ti = function (a) {
        this.wo = a
    };
    g.p = function () {
        this.Fi = !0;
        this.ub && this.ub.Qe(null);
        this.a.zt(this) && this.a.jj();
        this.a.J().Wo(this)
    };
    g.Wd = function () {};
    g.hc = function (a) {
        this.tb.Ed(a) || (this.s(4), this.tb = a, this.mm())
    };
    g.Ph = function (a) {
        a != this.hb() && (this.s(8192), this.mm(!0), (a = (1 < a ? -1 : 0) + (1 < this.hb() ? 1 : 0)) && this.$ && this.$.og(a))
    };
    g.mh = function (a) {
        var b = this.hb();
        this.ql = a;
        this.Ph(b)
    };
    g.hb = function () {
        return !this.ql && (0 < this.Na.length || this.ol) ? 1 : this.ql | 0
    };
    g.Qe = function (a) {
        if (this.Ge != a) {
            this.s(32768);
            var b = this.Ge;
            this.ub && this.ub.Qe(null);
            b && (b.ub = null, b.s(32768), b.zj());
            a && (a.Qe(null), a.Uk(void 0), a.ub && a.ub.Qe(null), a.ub = this, a.s(32768), a.zj());
            this.Ge = a
        }
    };
    g.Jf = function (a) {
        if (this.Na != a && (0 < this.Na.length || 0 < a.length)) {
            var b = this.hb();
            this.s(2);
            var c = this.Na;
            this.Na = [];
            for (var d = 0, e = 0; e < a.length; e++) {
                for (var f = !1; !f && d < c.length;) c[d].update(a[e]) && (this.Na.push(c[d]), f = !0), d++;
                f || this.Na.push(a[e].pb())
            }
            this.ru();
            this.Ph(b)
        }
    };
    g.ao = function () {
        if (this.ta & 8) {
            this.ul = new Yc(0, 0, 0, 0);
            for (var a = 0; a < this.Na.length; a++) this.ul.add(this.Na[a].tf());
            this.ta ^= 8
        }
        return this.ul
    };
    g.Kb = function (a) {
        a = String(a);
        a != this.Ne && this.$ && this.$.Lm(this, a);
        this.Ne = a
    };
    g.getName = function () {
        return this.Ne
    };
    g.Pf = function (a) {
        if (this.$ != a) {
            var b = (1 < this.hb() ? 1 : 0) + (this.Tb() ? 0 : this.pm());
            this.$ && (this.S || b) && (b && this.$.og(-b), this.$.s(65536));
            (this.$ = a) && (this.S || b) && (b && this.$.og(b), this.$.s(65536));
            this.hh != ( !! a && a.hh) && this.Fj( !! a && a.hh)
        }
    };
    g.getParent = function () {
        return this.$
    };
    g.Zm = function () {
        for (var a = [], b = this; b; b = b.getParent()) a.push(b);
        return a
    };
    g.nv = function () {
        return this.a.B.contains(this)
    };
    g.Ap = function () {
        for (var a = "", b = this; b && b.getName();) a = "." + b.getName() + a, b = b.getParent();
        b && b.getParent() == b.a.B && (a = "_level" + (b.depth - -16384) + a);
        return a
    };
    g.Pl = function () {
        return this.Qd ? this.Qd : this.getParent() && this.getParent().Pl() || this.a.J().jh()
    };
    g.Tn = function (a) {
        this.Qd = a
    };
    g.pj = function (a) {
        this.Fe != a && (this.s(8), this.Fe = a)
    };
    g.na = function () {
        return !1
    };
    g.mv = function () {
        return !1 === this.Fi
    };
    g.Sd = function () {
        return !0 === this.Fi
    };
    g.qh = function (a) {
        this.Gc |= 1 << a
    };
    g.ht = function (a) {
        this.Gc &= ~(1 << a)
    };
    g.fireEvent = function (a, b) {
        var c = !1;
        !this.$c && this.Gc & 1 << a.type && ((c = this.Cl(a.type)) && c.sound && this.a.He().Co(c.sound), c = this.a.J().fireEvent(this.r, c, a, b));
        return c
    };
    g.Cl = function () {
        return null
    };
    g.$v = function (a) {
        return !!this.Cl(a, !0)
    };
    g.Ua = function () {
        if (this.ta & 4) {
            this.Ni = this.Gd();
            if (0 < this.Na.length) {
                var a = this.Ni.Ma.G();
                a.u(this.qa());
                a.add(this.ao());
                a.u(this.fc());
                this.Ni.$t(a)
            }
            this.ta ^= 4
        }
        return this.Ni
    };
    g.da = function (a, b) {
        this.Fi = !1;
        Pe.q.da.call(this, a, b)
    };
    g.Qf = function (a) {
        this.Cd = a
    };
    g.ct = function () {
        var a = this.Ua().Ma.G();
        a.u(this.qa());
        var b = new Yc(0, 0, 20 * this.a.B.ph, 20 * this.a.B.oh);
        b.add(this.ao().et());
        a.Qk(b);
        return a
    };
    g.cj = function () {
        return this.a.J().cj(this)
    };
    g.ko = function (a) {
        this.Hi = a
    };
    g.contains = function (a) {
        for (; a && a != this;) a = a.getParent();
        return a == this
    };
    g.Db = function (a) {
        this.Yf != a && (this.rc && this.rc.p(), this.S = this.Ji, this.rc = a.ud(this), this.Yf = a);
        return this.rc
    };
    g.cg = function () {
        this.rc && this.rc.p();
        this.rc = this.Yf = null
    };
    g.ly = function (a) {
        this.Sk = a
    };
    g.Ii = function () {
        return !1
    };
    g.pm = function () {
        return 0
    };
    g.Tb = function () {
        return 1 <= this.hb()
    };
    g.og = function () {};
    g.sm = function () {
        return !1
    };
    g.hl = function (a, b) {
        return (new Ne).aq(this, a, b)
    };
    g.eh = function (a, b, c, d) {
        if (this.Fe) {
            var e = this.Ua().Ma,
                f = new Pc(a, b);
            f.u(this.fc());
            if (e.contains(f.x, f.y)) {
                var h = l(d) ? d : new Ne;
                if (h.aq(this, a, b)) {
                    var k;
                    this.$p(function (d) {
                        k = d.eh(a, b, c, h);
                        return !!k
                    });
                    return k || c(this) && this || null
                }
            }
        }
        return null
    };
    g.Tl = function (a) {
        var b = this.hb();
        this.ol = a;
        this.Ph(b)
    };
    g.xj = function () {
        return this.ol || 0 < this.Na.length
    };
    var Qe = {
        ir: 27,
        jr: 21
    }, Re = {
            ir: 28,
            jr: 26
        };
    Pe.prototype.pg = function (a, b, c) {
        c != this.$ && this.mv() && (this.fireEvent(new Ee(a.ir), !0), this.nv() && this.map(function (c) {
            c.fireEvent(new Ee(a.jr), !0);
            return b
        }))
    };
    var Se = function () {
        this.actions = []
    }, Te = function (a, b, c, d) {
            Pe.call(this, a, b, d);
            this.oc = 1;
            this.lh = !1;
            this.sh = !0;
            this.Rm = [];
            this.El = !1;
            this.Fl = 0;
            this.Kf = c || Jd.el();
            this.Gc |= 65011456
        };
    t(Te, Pe);
    g = Te.prototype;
    g.Cl = function (a, b) {
        var c = this.Rm[a];
        return !c || b && !c.actions.length ? null : c
    };
    g.cp = function (a) {
        var b = this.Rm[a];
        b || (b = new Se, this.Rm[a] = b);
        return b
    };
    g.eo = function (a, b, c) {
        var d = this.a.J(),
            e;
        for (e in Fe) {
            var f = Fe[e];
            if (a & 1 << f) {
                this.qh(f);
                var h = this.cp(f),
                    k = {};
                k.Bl = new Ue(c, d.At(this));
                20 === f && (k.Bo = function (a) {
                    return a.getKey().Bt() == b
                }, k.stopPropagation = !0);
                h.actions.push(k);
                1 << f & 63045376 && this.xh()
            }
        }
    };
    g.ku = function (a, b) {
        for (var c in Fe) {
            var d = Fe[c];
            a & d && (this.cp(d).sound = b)
        }
    };
    g.isEnabled = function () {
        return this.gd() && this.sh
    };
    g.gd = function () {
        return this.lh && !this.Sd() && !1 != this.r.enabled
    };
    g.xh = function () {
        this.lh || (this.s(256), this.lh = !0)
    };
    g.yb = function (a) {
        this.oc != a && (this.oc = a)
    };
    g.ay = function (a) {
        this.El = a
    };
    g.gy = function (a) {
        this.sh = a;
        this.s(256)
    };
    g.trackAsMenu = function () {
        return !1
    };
    g.hw = function (a) {
        this.gd() && (this.a.fg() || this.fireEvent(new Ee(23, a)))
    };
    g.Pr = function (a) {
        if (this.gd()) {
            var b;
            this.a.fg() || 1 != this.oc ? this.trackAsMenu() && !this.a.bj() && 1 == this.oc ? (this.yb(4), b = 14) : this.a.Wi(this) && 2 == this.oc && (this.yb(4), b = 16) : (this.yb(2), b = 9);
            b && this.fireEvent(new Ee(b, a))
        }
    };
    g.gw = function (a) {
        this.gd() && (this.a.fg() || this.fireEvent(new Ee(22, a)))
    };
    g.Or = function (a) {
        if (this.gd()) {
            var b;
            this.a.fg() || 2 != this.oc ? this.trackAsMenu() && !this.a.bj() && 4 == this.oc ? (this.yb(1), b = 13) : this.a.Wi(this) && 4 == this.oc && (this.yb(2), b = 15) : (this.yb(1), b = 8);
            b && this.fireEvent(new Ee(b, a))
        } else this.yb(1)
    };
    g.Gg = function () {
        this.gd() ? (this.trackAsMenu() ? this.a.setCapture(this) : this.a.setCapture(this, !0, na(this.Ut, this)), this.yb(4), this.fireEvent(new Ee(12))) : this.yb(1)
    };
    g.Hg = function () {
        if (this.gd()) {
            var a = this.trackAsMenu() && !1 == this.a.bj() || this.a.Wi(this);
            this.a.releaseCapture(this);
            this.yb(2);
            if (a) {
                var a = Date.now(),
                    b = a - this.Fl;
                this.El && 600 > b ? (this.fireEvent(new Ee(25)), this.Fl = 0) : (this.fireEvent(new Ee(11)), this.Fl = a)
            } else this.fireEvent(new Ee(9))
        } else this.yb(1)
    };
    g.zg = function () {
        this.isEnabled() && !this.a.fg() && this.fireEvent(new Ee(24))
    };
    g.Ut = function () {
        this.gd() && (this.yb(1), this.fireEvent(new Ee(10)))
    };
    var Ve = function (a, b, c, d) {
        Te.call(this, a, b, c, d);
        this.F = new Je(this.r);
        this.vm = !0
    };
    t(Ve, Te);
    g = Ve.prototype;
    g.p = function () {
        Ve.q.p.call(this);
        this.F.p();
        this.s(16)
    };
    g.Gd = function () {
        var a = new De;
        this.F.forEach(function (b) {
            var c = b.Ua().G();
            c.u(b.Z());
            a.Yc(c)
        });
        return a
    };
    g.map = function (a) {
        var b = Ve.q.map.call(this, a);
        return b = b || this.F.forEach(function (b) {
            return b.map(a)
        })
    };
    g.Cj = function (a) {
        return this.F.forEach(a)
    };
    g.$p = function (a) {
        return this.F.pv(a)
    };
    g.na = function () {
        return !0
    };
    g.fv = function (a) {
        return this.F.mr(a)
    };
    g.ad = function (a, b) {
        this.s(16);
        var c = a.getParent();
        c && c.removeChild(a);
        a.Pf(this);
        this.F.bl(a, b);
        this.Fb();
        a.pg(Qe, !1, c)
    };
    g.removeChild = function (a, b) {
        a.pg(Re, !1, b);
        this.s(16);
        this.F.om(a);
        a.Wd();
        a.Pf(null);
        this.Fb()
    };
    g.vu = function () {
        for (var a = this.F.oa; a;) this.removeChild(a), a = this.F.oa
    };
    g.vd = function (a) {
        (a = this.F.Fc(a)) && this.removeChild(a)
    };
    g.Fc = function (a) {
        return this.F.Fc(a)
    };
    g.Lm = function (a, b) {
        this.F.Lm(a, b)
    };
    g.Jm = function (a, b) {
        this.s(16);
        this.F.Jm(a, b)
    };
    g.lk = function () {
        return this.F.lk()
    };
    g.gf = function (a) {
        return this.F.gf(a)
    };
    g.Tg = function (a) {
        return this.F.Tg(a)
    };
    g.bf = function (a, b) {
        this.s(16);
        var c = a.getParent();
        c && c.Nh(a, this);
        a.Pf(this);
        this.F.bf(a, b);
        this.Fb();
        a.pg(Qe, !1, c)
    };
    g.Nh = function (a, b) {
        a.pg(Re, !1, b);
        this.s(16);
        this.F.Nh(a);
        a.Pf(null);
        this.Fb()
    };
    g.zb = function () {
        return this.F.zb()
    };
    g.fy = function (a) {
        this.vm = a;
        this.s(256)
    };
    g.Ii = function () {
        return 0 < this.tm
    };
    g.pm = function () {
        return this.tm | 0
    };
    g.Ph = function (a) {
        Ve.q.Ph.call(this, a);
        var b = this.tm;
        (a = (1 <= a ? b : 0) + (1 <= this.hb() ? -b : 0)) && this.getParent().og(a)
    };
    g.og = function (a) {
        this.tm = this.pm() + a;
        this.s(131072);
        !this.Tb() && this.getParent() && this.getParent().og(a)
    };
    var Ye = function (a, b, c) {
        Me.call(this, b, a, c);
        this.Yh = this.l = null;
        this.Mc = !1;
        this.Fm = [];
        this.Am = this.Pj = !1;
        a !== We && (this.l = Xe(a.width, a.height), this.l.drawImage(a.ic, 0, 0), this.Mc = a.transparent, USING_SWIFFY_MOCKS && (this.Yh = a.data))
    };
    t(Ye, Me);
    var We = {}, Xe = function (a, b) {
            var c = document.createElement("canvas");
            c.width = a;
            c.height = b;
            return c.getContext("2d")
        };
    g = Ye.prototype;
    g.lb = function (a, b, c, d) {
        this.l || (this.l = Xe(a, b), (this.Mc = c) || (d = (d | 4278190080) >>> 0), this.l.fillStyle = nd(d).Ec(), this.l.fillRect(0, 0, a, b))
    };
    g.ka = function () {
        return this.l ? this.l.canvas.width : 0
    };
    g.jb = function () {
        return this.l ? this.l.canvas.height : 0
    };
    g.Wt = function () {
        if (!this.Yh) {
            if (this.Pj || !this.l) return "";
            this.Yh = this.l.canvas.toDataURL("image/png")
        }
        return this.Yh
    };
    g.dq = function (a) {
        var b = this.Fm;
        0 <= Ba(b, a) || b.push(a)
    };
    g.Xp = function (a) {
        Ga(this.Fm, a)
    };
    g.Lx = function () {
        this.Pj = !0
    };
    g.ry = function () {
        this.Pj = !1;
        this.Am && this.Sh()
    };
    g.Sh = function () {
        this.Pj ? this.Am = !0 : (this.Am = !1, this.Yh = null, this.Fm.forEach(function (a) {
            a.hr()
        }))
    };
    g.Nk = function () {
        this.l = null;
        this.Sh()
    };
    g.Xv = function (a, b) {
        return this.l.createImageData(a, b)
    };
    g.ue = function (a, b, c, d) {
        return this.l.getImageData(a, b, c, d)
    };
    g.gi = function (a, b, c) {
        this.l.putImageData(a, b, c);
        this.Sh()
    };
    g.fillRect = function (a, b, c, d, e) {
        var f = this.l;
        this.Mc ? 4278190080 === (e & 4278190080) || f.clearRect(a, b, c, d) : e = (e | 4278190080) >>> 0;
        0 != e && (f.fillStyle = nd(e).Ec(), f.fillRect(a, b, c, d));
        this.Sh()
    };
    g.Qn = function (a, b, c) {
        var d = this.Xv(1, 1),
            e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        e[3] = this.Mc ? c >>> 24 : 255;
        this.gi(d, a, b)
    };
    g.iy = function (a, b, c) {
        var d = this.ue(a, b, 1, 1),
            e = d.data;
        e[0] = c >>> 16 & 255;
        e[1] = c >>> 8 & 255;
        e[2] = c & 255;
        this.gi(d, a, b)
    };
    g.Mn = function (a, b) {
        var c = this.ue(a, b, 1, 1).data;
        return (c[3] << 24 | c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.xx = function (a, b) {
        var c = this.ue(a, b, 1, 1).data;
        return (c[0] << 16 | c[1] << 8 | c[2]) >>> 0
    };
    g.zx = function (a, b, c, d) {
        if (0 >= c || 0 >= d) return [];
        a = this.ue(a, b, c, d).data;
        b = Array(Math.floor(a.length / 4));
        for (d = c = 0; d < b.length; d++) b[d] = (a[c++] << 16 | a[c++] << 8 | a[c++] | a[c++] << 24) >>> 0;
        return b
    };
    g.jy = function (a, b, c, d, e) {
        if (!(0 >= c || 0 >= d)) {
            var f = this.ue(a, b, c, d),
                h = f.data;
            c = Math.min(e.length, c * d * 4);
            d = this.Mc ? 0 : 255;
            for (var k = 0, n = 0; k < c; k++) {
                var q = e[k];
                h[n++] = q >>> 16 & 255;
                h[n++] = q >>> 8 & 255;
                h[n++] = q & 255;
                h[n++] = (q >>> 24 | d) & 255
            }
            this.gi(f, a, b)
        }
    };
    g.yx = function (a, b, c, d, e) {
        if (0 >= c || 0 >= d) return new Uint8Array(0);
        a = this.ue(a, b, c, d).data;
        if (e)
            for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 2], a[e + 2] = b;
        else
            for (e = 0; e < a.length; e += 4) b = a[e], a[e] = a[e + 3], a[e + 3] = a[e + 2], a[e + 2] = a[e + 1], a[e + 1] = b;
        return a
    };
    g.Jv = function (a, b, c, d, e, f) {
        if (!(0 >= c || 0 >= d)) {
            c = this.ue(a, b, c, d);
            d = c.data;
            var h = 4 * Math.floor(Math.min(d.length, e.length) / 4),
                k = this.Mc ? 0 : 255;
            e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            if (f)
                for (f = 0; f < h; f += 4) d[f] = e[f + 2], d[f + 1] = e[f + 1], d[f + 2] = e[f], d[f + 3] = e[f + 3] | k;
            else
                for (f = 0; f < h; f += 4) d[f] = e[f + 1], d[f + 1] = e[f + 2], d[f + 2] = e[f + 3], d[f + 3] = e[f] | k;
            this.gi(c, a, b)
        }
    };
    g.scroll = function (a, b) {
        if (a || b) {
            var c = 0 > a ? -a : 0,
                d = 0 > b ? -b : 0,
                e = 0 > a ? 0 : a,
                f = 0 > b ? 0 : b,
                h = this.ka() - c - e,
                k = this.jb() - d - f;
            0 < h && 0 < k && this.gi(this.ue(c, d, h, k), e, f)
        }
    };
    g.ss = function (a, b, c, d, e, f, h, k, n, q, s) {
        d = Math.min(d, a.ka() - b, this.ka() - f);
        e = Math.min(e, a.jb() - c, this.jb() - h);
        k && (d = Math.min(d, k.ka() - n), e = Math.min(e, k.jb() - q));
        if (!(0 >= d || 0 >= e)) {
            var r;
            k && k.Mc ? (r = Xe(d, e), r.drawImage(a.l.canvas, -b, -c), r.globalCompositeOperation = "destination-in", r.drawImage(k.l.canvas, -n, -q), c = b = 0, a = !0) : (r = a.l, a = a.Mc);
            !a || !s && this.Mc ? this.l.putImageData(r.getImageData(b, c, d, e), f, h) : this.l.drawImage(r.canvas, b, c, d, e, f, h, d, e);
            this.Sh()
        }
    };
    var Ze = function (a, b, c) {
        Pe.call(this, b, We, c);
        this.Ob = a;
        this.Jr = "auto";
        this.Bk = !1
    };
    t(Ze, Pe);
    g = Ze.prototype;
    g.hb = function () {
        return Math.max(1, Ze.q.hb.call(this))
    };
    g.Yx = function (a) {
        a !== this.Ob && (this.Ob && this.Ob.Xp(this), (this.Ob = a) && this.Ob.dq(this), this.hr())
    };
    g.hr = function () {
        this.s(262144)
    };
    g.da = function (a, b) {
        Ze.q.da.call(this, a, b);
        this.Ob && this.Ob.dq(this)
    };
    g.p = function () {
        Ze.q.p.call(this);
        this.Ob && this.Ob.Xp(this)
    };
    g.Gd = function () {
        var a = this.Ob,
            b = a ? 20 * a.ka() : 0,
            a = a ? 20 * a.jb() : 0;
        return new De(new Yc(0, 0, b, a))
    };
    var $e = function (a, b, c, d) {
        Ve.call(this, b, a, c, d);
        this.Le = new Je
    };
    t($e, Ve);
    g = $e.prototype;
    g.da = function () {
        $e.q.da.call(this);
        this.Ke(this.F, 1);
        this.Ke(this.Le, 8);
        this.xh();
        for (var a = 0; a < this.definition.actions.length; a++) {
            var b = this.definition.actions[a];
            this.eo(b.events, b.key, b.actions)
        }
        for (a = 0; a < this.definition.sounds.length; a++) b = this.definition.sounds[a], this.ku(b.events, b.sound)
    };
    g.p = function () {
        $e.q.p.call(this);
        this.Le.p()
    };
    g.Gd = function () {
        var a = $e.q.Gd.call(this);
        this.Le.forEach(function (b) {
            var c = b.Ua().eh().G();
            c.u(b.Z());
            a.Vo(c, !1)
        });
        return a
    };
    g.yb = function (a) {
        a != this.oc && (this.Ke(this.F, a, this.oc), this.a.Ff = !0);
        $e.q.yb.call(this, a)
    };
    g.gd = function () {
        return $e.q.gd.call(this) && this.sh
    };
    g.trackAsMenu = function () {
        return this.definition.trackAsMenu
    };
    g.Ke = function (a, b, c) {
        this.s(16);
        var d = this.definition.records;
        if (d) {
            if (l(c))
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = f.states & c,
                        k = f.states & b;
                    h && !k && a.jo(f.depth)
                }
            for (e = 0; e < d.length; e++)
                if (f = d[e], h = f.states & c, (k = f.states & b) && !h && (h = this.Kf + "." + f.definition.id.toString(36), f.definition.al() && (h = f.definition.get().Ic(this.a, h)))) h.na() && 8 != b && h.Kb(this.a.rh()), h.Pf(this), h.da(), a.bl(h, f.depth), f.transform && h.setTransform(f.transform), f.filters && h.Jf(f.filters), f.blendmode && h.mh(f.blendmode), f.mo && h.hc(f.mo)
        }
    };
    g.zb = function () {
        return !0
    };
    var af = function (a, b, c, d) {
        $e.call(this, a, b, c, d);
        this.Nc = {}
    };
    t(af, $e);
    af.prototype.da = function () {
        af.q.da.call(this);
        this.Ke(this.F, 1);
        this.Ke(this.Le, 8)
    };
    af.prototype.p = function () {
        af.q.p.call(this)
    };
    af.prototype.Fk = function (a, b) {
        b.Pf(this);
        this.Nc[a] = b;
        a != this.oc && 8 != a || this.Ke(8 == a ? this.Le : this.F, a)
    };
    af.prototype.Ke = function (a, b) {
        var c = this.Nc[b];
        c != a.Fc(1) && (a.jo(1), c && a.bl(c, 1), this.s(16))
    };
    var bf = function () {
        this.color = this.bold = this.Ka = null;
        this.af = !1;
        this.letterSpacing = this.Ya = this.leading = this.leftMargin = this.rightMargin = this.indent = this.target = this.url = this.fb = this.size = this.italic = this.font = null
    };
    g = bf.prototype;
    g.jw = function (a) {
        this.color = a;
        this.af = !0
    };
    g.Oj = function (a) {
        this.af = a.af;
        null != a.color && (this.color = a.color, this.af = !0);
        this.bold = null != a.bold ? a.bold : this.bold;
        this.font = null != a.font ? a.font : this.font;
        this.italic = null != a.italic ? a.italic : this.italic;
        this.size = null != a.size ? a.size : this.size;
        this.fb = null != a.fb ? a.fb : this.fb;
        this.Ka = null != a.Ka ? a.Ka : this.Ka;
        this.target = null != a.target ? a.target : this.target;
        this.url = null != a.url ? a.url : this.url;
        this.indent = null != a.indent ? a.indent : this.indent;
        this.rightMargin = null != a.rightMargin ? a.rightMargin : this.rightMargin;
        this.leftMargin = null != a.leftMargin ? a.leftMargin : this.leftMargin;
        this.leading = null != a.leading ? a.leading : this.leading;
        this.Ya = null != a.Ya ? a.Ya : this.Ya;
        this.letterSpacing = null != a.letterSpacing ? a.letterSpacing : this.letterSpacing
    };
    g.Ye = function () {
        return !!this.font && this.font instanceof cf
    };
    g.Bh = function () {
        return !!this.font && this.font instanceof cf && (0 < this.font.glyphs.length || this.font == df)
    };
    g.G = function () {
        var a = new bf;
        a.bold = this.bold;
        a.color = this.color;
        a.font = this.font;
        a.italic = this.italic;
        a.size = this.size;
        a.fb = this.fb;
        a.af = this.af;
        a.Ka = this.Ka;
        a.url = this.url;
        a.target = this.target;
        a.indent = this.indent;
        a.rightMargin = this.rightMargin;
        a.leftMargin = this.leftMargin;
        a.leading = this.leading;
        a.Ya = this.Ya;
        a.letterSpacing = this.letterSpacing;
        return a
    };
    var ef = function (a) {
        var b = new bf;
        b.bold = !1;
        b.italic = !1;
        b.fb = !1;
        b.font = "Arial";
        b.color = 0;
        b.size = null;
        b.indent = 0;
        b.rightMargin = 0;
        b.leftMargin = 0;
        b.leading = 0;
        b.Ka = 0;
        b.Ya = !1;
        b.letterSpacing = 0;
        l(a) && (b.color = l(a.color) ? 16777215 & a.color : b.color, b.size = l(a.height) ? a.height / 20 : b.size, b.indent = l(a.indent) ? a.indent : b.indent, b.Ka = l(a.align) ? a.align : 0, b.rightMargin = l(a.rightMargin) ? a.rightMargin : b.rightMargin, b.leftMargin = l(a.leftMargin) ? a.leftMargin : b.leftMargin, b.leading = l(a.leading) ? a.leading : b.leading, b.Ya =
            l(a.Ya) ? a.Ya : b.Ya, b.letterSpacing = l(a.letterSpacing) ? a.letterSpacing : b.letterSpacing);
        return b
    };
    bf.prototype.Wu = function (a) {
        this.bold = this.bold == a.bold ? this.bold : null;
        this.color = this.color == a.color ? this.color : null;
        this.font = this.font == a.font ? this.font : null;
        this.italic = this.italic == a.italic ? this.italic : null;
        this.size = this.size == a.size ? this.size : null;
        this.fb = this.fb == a.fb ? this.fb : null;
        this.Ka = this.Ka == a.Ka ? this.Ka : null;
        this.url = this.url == a.url ? this.url : null;
        this.target = this.target == a.target ? this.target : null;
        this.Ya = this.Ya == a.Ya ? this.Ya : null;
        this.indent = this.indent == a.indent ? this.indent : null;
        this.rightMargin = this.rightMargin == a.rightMargin ? this.rightMargin : null;
        this.leftMargin = this.leftMargin == a.leftMargin ? this.leftMargin : null;
        this.leading = this.leading == a.leading ? this.leading : null;
        this.letterSpacing = this.letterSpacing == a.letterSpacing ? this.letterSpacing : null
    };
    var gf = function (a) {
        var b = new bf;
        if (!a) return b;
        b.Ka = ff(a.align);
        b.bold = a.bold;
        l(a.color) && (b.color = 16777215 & a.color);
        b.font = a.font;
        b.italic = a.italic;
        b.size = a.size;
        b.fb = a.underline;
        b.url = a.url;
        b.target = a.target;
        b.Ya = a.kerning;
        l(a.indent) && (b.indent = 20 * a.indent);
        l(a.rightMargin) && (b.rightMargin = 20 * a.rightMargin);
        l(a.leftMargin) && (b.leftMargin = 20 * a.leftMargin);
        l(a.leading) && (b.leading = 20 * a.leading);
        l(a.letterSpacing) && (b.letterSpacing = 20 * a.letterSpacing);
        return b
    };
    bf.prototype.fs = function () {
        var a = new hf;
        a.align = jf(this.Ka);
        a.bold = this.bold;
        a.color = this.color;
        a.font = this.font;
        a.italic = this.italic;
        a.size = this.size;
        a.underline = this.fb;
        a.url = this.url;
        a.target = this.target;
        a.kerning = this.Ya;
        l(this.indent) && (a.indent = this.indent / 20);
        l(this.rightMargin) && (a.rightMargin = this.rightMargin / 20);
        l(this.leftMargin) && (a.leftMargin = this.leftMargin / 20);
        l(this.leading) && (a.leading = this.leading / 20);
        l(this.letterSpacing) && (a.letterSpacing = this.letterSpacing / 20);
        return a
    };
    var kf = function (a) {
        var b = new bf;
        if (!a) return b;
        b.Ka = ff(a.align);
        b.Su = a.blockIndent;
        b.bold = a.bold;
        b.Tu = a.bullet;
        b.color = a.color;
        b.font = a.font;
        l(a.indent) && (b.indent = 20 * a.indent);
        b.italic = a.italic;
        b.Ya = a.kerning;
        l(a.leftMargin) && (b.leftMargin = 20 * a.leftMargin);
        l(a.leading) && (b.leading = 20 * a.leading);
        l(a.rightMargin) && (b.rightMargin = 20 * a.rightMargin);
        b.size = a.size;
        b.Vu = a.tabStops;
        b.target = a.target;
        b.fb = a.underline;
        b.url = a.url;
        l(a.letterSpacing) && (b.letterSpacing = 20 * a.letterSpacing);
        return b
    };
    bf.prototype.gs = function () {
        var a = new lf;
        a.align = jf(this.Ka);
        a.blockIndent = this.Su;
        a.bold = this.bold;
        a.bullet = this.Tu;
        a.color = this.color;
        a.font = this.font;
        l(this.indent) && (a.indent = this.indent / 20);
        a.italic = this.italic;
        a.kerning = this.Ya;
        l(this.leading) && (a.leading = this.leading / 20);
        l(this.leftMargin) && (a.leftMargin = this.leftMargin / 20);
        l(this.leftMargin) && (a.leftMargin = this.leftMargin / 20);
        l(this.letterSpacing) && (a.letterSpacing = this.letterSpacing / 20);
        l(this.rightMargin) && (a.rightMargin = this.rightMargin /
            20);
        a.size = this.size;
        a.tabStops = this.Vu;
        a.target = this.target;
        a.underline = this.fb;
        a.url = this.url;
        return a
    };
    var jf = function (a) {
        switch (a) {
        case 2:
            return "center";
        case 1:
            return "right";
        case 3:
            return "justify"
        }
        return "left"
    }, ff = function (a) {
            switch (a) {
            case "center":
                return 2;
            case "right":
                return 1;
            case "justify":
                return 3
            }
            return 0
        };
    bf.prototype.Xl = function () {
        return null != this.size ? this.size : 12
    };
    bf.prototype.Vl = function () {
        var a = this.Ye() ? this.font.name : this.font;
        return "_sans" == a ? "Arial, Helvetica, sans-serif" : "_serif" == a ? "Times, serif" : "_typewriter" == a ? "monospace" : a + ", sans-serif"
    };
    var mf = function (a, b, c, d) {
        Te.call(this, b, a, c, d);
        this.$l = "normal";
        this.Nf = a.autoSize;
        this.qp = a.border;
        this.am = 16777215;
        this.fh = a.border;
        this.bm = 0;
        this.rp = !1;
        this.cm = a.editable;
        this.Lf = a.Vn;
        this.tp = "pixel";
        this.Mb = a.html;
        this.up = a.maxChars;
        this.hg = a.multiline;
        this.Eh = !1;
        this.vp = a.password;
        this.Tt = null;
        this.dm = a.selectable;
        this.wp = 0;
        this.Pe = a.color;
        this.xp = 0;
        this.Ih = a.wrap;
        this.hd = ef(a);
        this.Me = [];
        this.yd = [];
        this.sd = a.bounds.G();
        l(this.fd) || (b = a.text, this.Td(l(b) ? b : ""));
        this.To = !0;
        this.Ko = !1;
        this.Sf =
            a.variable
    };
    t(mf, Te);
    g = mf.prototype;
    g.Gd = function () {
        var a = this.sd;
        if ("none" != this.Nf) {
            var b = new Yc(a.d, a.e, a.d + this.Lp(), a.e + this.Kp());
            b.Yc(a);
            a = b
        }
        return new De(a)
    };
    g.Td = function (a) {
        this.To && this.Mb && this.Pe != this.definition.color && (this.s(64), this.Pe = this.definition.color);
        if (this.Eh || this.fd != a) this.Ko = !0, this.eq(a), this.Eh = !1
    };
    g.lj = function (a) {
        this.To = a
    };
    g.iw = function (a) {
        this.Mb != a && (this.s(64), this.Mb = a)
    };
    g.Ss = function (a) {
        this.Pe = 16777215 & a | this.Pe & 4278190080;
        a = new bf;
        a.jw(this.Pe);
        this.yk(a)
    };
    g.Cs = function () {
        return this.Pe & 16777215
    };
    g.Js = function (a) {
        this.$l = a
    };
    g.si = function (a) {
        this.qp = a
    };
    g.Xx = function (a) {
        this.am = 16777215 & a | this.am & 4278190080
    };
    g.qx = function () {
        return this.am & 16777215
    };
    g.Ls = function (a) {
        this.fh = a;
        this.s(128)
    };
    g.Zx = function (a) {
        this.bm = 16777215 & a | this.bm & 4278190080
    };
    g.rx = function () {
        return this.bm & 16777215
    };
    g.$x = function (a) {
        this.rp = a
    };
    g.Ns = function (a) {
        this.Lf = a;
        this.eq(this.fd)
    };
    g.cy = function (a) {
        this.tp = a
    };
    g.dy = function (a) {
        this.up = a
    };
    g.Os = function (a) {
        this.hg != a && (this.Eh = !0);
        this.hg = a;
        this.Uf()
    };
    g.hy = function (a) {
        this.vp = a
    };
    g.ky = function (a) {
        this.BC = a
    };
    g.my = function (a) {
        this.wp = a
    };
    g.ny = function (a) {
        this.xp = a
    };
    g.ae = function () {
        return this.Sf
    };
    g.hj = function (a) {
        this.Sf && this.a.J().vl(this.Sf, this);
        (this.Sf = a) && this.a.J().zl(this.Sf, this, this.definition.text)
    };
    g.Ts = function (a) {
        this.Ih != a && (this.Eh = !0);
        this.Ih = a;
        this.Uf()
    };
    g.Ks = function (a) {
        this.s(32);
        this.Nf = a;
        this.Fb()
    };
    g.Rs = function (a) {
        this.dm = a
    };
    g.Pn = function (a) {
        this.cm = a
    };
    g.es = function (a, b) {
        l(a) ? l(b) || (b = a + 1) : (a = 0, b = this.fd.length);
        for (var c = null, d = 0, e, f = 0; f < this.Me.length; f++)
            for (var h = this.Me[f], k = 0; k < h.length; k++) {
                var n = h[k];
                e = d + n.text.length - 1;
                d < b && e >= a && (c ? c.Wu(n.format) : c = n.format.G());
                d = e + 1
            }
        c ? c.font = c.Ye() ? c.font.name : c.font : c = new bf;
        return c
    };
    g.ds = function () {
        var a = new bf;
        a.Oj(this.hd);
        return a
    };
    g.yk = function (a, b, c) {
        l(b) ? l(c) || (c = b + 1) : (b = 0, c = this.fd.length);
        for (var d = 0, e, f = 0; f < this.Me.length; f++)
            for (var h = this.Me[f], k = 0; k < h.length; k++) {
                var n = h[k];
                e = d + n.text.length - 1;
                if (d < c && e >= b) {
                    var q = Math.max(d, b) - d,
                        d = Math.min(e + 1, c) - d;
                    if (0 < q) {
                        var s = n.Qh(n.text.substring(0, q));
                        h.splice(k, 0, s);
                        k++
                    }
                    d < n.text.length && (s = n.Qh(n.text.substring(d)), h.splice(k + 1, 0, s));
                    n.text = n.text.substring(q, d);
                    null != a.color && (a.color |= 4278190080);
                    !this.Lf && n.format.Bh() && (a.font = n.format.font);
                    n.format.Oj(a);
                    n.Hh(this.jm())
                }
                d =
                    e + 1
            }
        this.Uf();
        this.s(128)
    };
    g.Ps = function (a) {
        this.Eh = !0;
        this.hd.Oj(a)
    };
    g.da = function () {
        mf.q.da.call(this);
        this.definition.variable && this.a.J().zl(this.definition.variable, this, this.definition.text)
    };
    g.p = function () {
        mf.q.p.call(this);
        this.definition.variable && this.a.J().vl(this.definition.variable, this)
    };
    g.na = function () {
        return this.definition.na
    };
    g.eq = function (a) {
        this.s(32);
        "none" != this.Nf && this.Fb();
        this.fd = a;
        this.Me = [];
        this.Mb || (a = nf(a));
        this.qu(a, this.hg)
    };
    g.qu = function (a, b) {
        var c = new of;
        c.format = ef(this.definition);
        if (this.Lf && this.definition.font) {
            var d = this.definition.font.get();
            d instanceof cf && (c.format.font = d)
        } else this.definition.font && (d = this.definition.font.get(), d instanceof cf && (c.format.font = d.name));
        c.format.color = this.Pe | 0;
        c.format.Ye() && (d = c.format.font, c.format.italic = d.italic, c.format.bold = d.bold);
        this.Mb && this.hd && (c.format.italic = !! this.hd.italic, c.format.bold = !! this.hd.bold, c.format.size = this.hd.size, c.format.Ka = this.hd.Ka, c.format.indent =
            this.hd.indent, d = this.hd.color, c.format.color = this.hd.af ? 4278190080 | d : c.format.color);
        var d = new pf(c, this.jm(), b),
            e = a.replace(/(&nbsp;)+/g, "&nbsp;").replace(/\r\n|\r|\n/g, "<br/>");
        c.Hh(this.jm());
        c = document.createElement("div");
        c.innerHTML = e;
        for (e = 0; e < c.childNodes.length; e++) qf(c.childNodes[e], d);
        this.Me = d.qm;
        this.Uf()
    };
    g.Uf = function () {
        var a = this.Me;
        if (!(this.Ko || this.hg || this.Mb)) {
            var b = [];
            b.push(Array.prototype.concat.apply([], a));
            a = b
        }
        this.Ih && (a = this.$u(a, this.sd));
        this.yd = a
    };
    g.Yo = function (a, b) {
        var c = a.D - a.d - 80;
        b && (c -= b.leftMargin + b.rightMargin);
        return c
    };
    g.$u = function (a, b) {
        var c = [],
            d = 0;
        c[d] = [];
        for (var e = 0; e < a.length; e++) {
            for (var f = a[e], h = 0 < f.length ? f[0].format : null, k = this.Yo(b, h), h = h ? h.indent | 0 : 0, n = 0; n < f.length; n++)
                for (var q = f[n].ov(h, k), s = 0; s < q.length; s++) {
                    var r = f[n].Qh(q[s]);
                    r.ij = s == q.length - 1;
                    c[d].push(r);
                    s == q.length - 1 ? h += r.ka() : (d++, c[d] = [], h = 0)
                }
            d++;
            c[d] = []
        }
        0 == c[d].length && c.pop();
        return c
    };
    g.ux = function (a) {
        if (0 <= a && a < this.yd.length) {
            a = this.yd[a];
            for (var b = "", c = 0; c < a.length; c++) b += a[0].text;
            return b.replace(/\n/, "")
        }
        return null
    };
    g.Xk = function (a) {
        for (var b = this.sd, c = 0, d = !0, e = 0, f = this.yd, h = 0; h < f.length; h++) {
            var k = f[h],
                n = 0 < k.length ? k[0].format : null;
            0 == h && n && (e = n.leading | 0, c = b.e + 40 - 0.5 * e, 0 > e ? c = b.e : 0 > c && (c = b.e + 40));
            for (var q = b.d + 40 + (n ? n.leftMargin : 0), s = this.Yo(b, n), r = 0, u = 0; u < k.length; u++) r += k[u].ka();
            if (n) switch (l(n.indent) && d && (q += n.indent, s -= n.indent, d = !1), n.Ka) {
            case 2:
                q += (s - r) / 2;
                break;
            case 1:
                q += s - r
            }
            for (var n = 0, r = rf(k), w = sf(k), u = 0; u < k.length; u++)
                if (k[u].text.length) {
                    var C = 0,
                        n = n + k[u].ka();
                    !k[k.length - 1].ij && 3 == k[u].format.Ka &&
                        h < f.length - 1 && (C = (k[u].text.match(/ /g) || []).length, C = (s - k[u].ka()) / C);
                    b.expand(b.d, c + r * w);
                    a.Ri(k[u], q, c, w, C);
                    q += k[u].ka();
                    d = d || k[u].ij
                }
            c += r * w + e;
            if ("none" == this.Nf && c + r * w > b.C) break
        }
    };
    g.jm = function () {
        return this.Lf ? this.a.kc : null
    };
    g.nn = function (a) {
        0 <= a && (this.sd.D = this.sd.d + 20 * a, this.Fb(), this.Uf(), this.s(128))
    };
    g.mn = function (a) {
        0 <= a && (this.sd.C = this.sd.e + 20 * a, this.Fb(), this.Uf(), this.s(128))
    };
    var of = function () {
        this.text = "";
        this.format = ef();
        this.ij = !1
    };
    g = of.prototype;
    g.Qh = function (a) {
        var b = this.Er();
        b.text = a;
        return b
    };
    g.Hh = function (a, b) {
        !l(b) && this.format.Ye() && (b = this.format.font.name);
        if (a) {
            if (!l(b) && l(this.format.font) && (b = String(this.format.font)), !this.format.Ye() || b != this.format.font.name || !! this.format.italic != !! this.format.font.italic || !! this.format.bold != !! this.format.font.bold) {
                var c = df;
                if (l(b) && a && a[b])
                    for (var d = a[b], e = 0; e < d.length; ++e) {
                        if ( !! this.format.italic == !! d[e].italic && !! this.format.bold == !! d[e].bold) {
                            this.format.font = d[e];
                            return
                        }
                        c == df && (c = d[e])
                    }
                this.format.font = c
            }
        } else b && (this.format.font = b)
    };
    g.Er = function () {
        var a = new of;
        a.format.Oj(this.format);
        return a
    };
    g.ka = function (a) {
        l(a) || (a = this.text);
        if (this.format.Bh()) {
            for (var b = 0, c = 0; c < a.length; c++) {
                var d = this.format.font.ti(a.charAt(c));
                l(d) && (b += d.advance ? d.advance : 0)
            }
            b = b * this.format.size * 20 / (this.format.font.emSquareSize | 0);
            return b += this.format.letterSpacing * a.length | 0
        }
        return this.kw(a)
    };
    g.Bs = function () {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.width = "auto";
        a.style.fontSize = 20 * this.format.size + "px";
        this.format.Ye() ? (a.style.fontFamily = "'" + this.format.font.name + "'", a.style.fontWeight = this.format.font.bold ? "bold" : "normal", a.style.fontStyle = this.format.font.italic ? "italic" : "normal") : (a.style.fontFamily = this.format.Vl(), a.style.fontWeight = this.bold ? "bold" : "normal", a.style.fontStyle = this.format.italic ? "italic" : "normal");
        a.style.whiteSpace = "nowrap";
        return a
    };
    g.kw = function (a) {
        var b = this.Bs();
        b.appendChild(document.createTextNode(a));
        document.body.appendChild(b);
        a = b.clientWidth;
        Fb(b);
        return a
    };
    g.ov = function (a, b) {
        for (var c = [], d = 0, e = c[0] = "", f = 0, h = this.text.split(" "), k = 0; k < h.length; k++)
            if (!(0 < d && 0 == a && "" == h[k])) {
                h[k] = h[k].replace(/&nbsp;/g, " ");
                var n = this.ka(h[k]);
                a + f + n > b ? n < b && 0 < k ? (d++, a = n, c[d] = h[k]) : (d || c[d] ? a = 0 : c.pop(), this.Lv(h[k], b, a, c), d = c.length - 1, a = this.ka(c[d])) : (c[d] = c[d] + e + h[k], a += f + n);
                0 == k && (e = " ", f = this.ka("a a") - this.ka("aa"))
            }
        return c
    };
    g.Lv = function (a, b, c, d) {
        this.format.Bh() ? this.uw(a, b, c, d) : this.tw(a, b, c, d)
    };
    g.uw = function (a, b, c, d) {
        for (var e = 0, f = 0, h = 20 * this.format.size / (this.format.font.emSquareSize | 0), k = 0; k < a.length; k++) {
            var n = this.format.font.ti(a.charAt(k)),
                n = (l(n) && n.advance ? n.advance : 0) * h + this.format.letterSpacing;
            0 < k - f && e + n > b - c && (d.push(a.substring(f, k)), f = k, c = e = 0);
            e += n
        }
        d.push(a.substring(f))
    };
    g.tw = function (a, b, c, d) {
        var e = this.Bs(),
            f = document.createTextNode("");
        e.appendChild(f);
        document.body.appendChild(e);
        for (var h = 0; h < a.length;) {
            for (var k = h + 1, n = a.length, q; n > k;) {
                var s = k + (n - k) / 2,
                    s = Math.ceil(s);
                q = a.substring(h, s);
                f.data = q;
                e.clientWidth <= b - c ? k = s : n = s - 1
            }
            d.push(a.substr(h, k));
            h = k;
            c = 0
        }
        Fb(e)
    };
    g.Mw = function (a, b, c) {
        var d = this.text,
            e = 20 * this.format.size,
            f = [];
        f.push(b);
        if (a instanceof cf && a.glyphs.length)
            for (var h = 1; h < d.length; h++) {
                var k = a.ti(d.charAt(h - 1)),
                    n = 0;
                l(k) && l(k.advance) && (n += k.advance, b += n * e / a.emSquareSize, this.format && (b += this.format.letterSpacing | 0), f.push(b), " " == d.charAt(h) && (b += c))
            }
        return f
    };
    g.Gl = function (a, b, c, d) {
        var e = this.format.font;
        a = this.Mw(e, a, d);
        return this.Kw(a, b + c * e.ascent / e.emSquareSize, d)
    };
    g.Kw = function (a, b) {
        for (var c = [], d = this.text, e = this.format.font, f = 20 * this.format.size / e.emSquareSize, h = b / f, k = 0, n = 0; n < d.length && k < a.length; n++) {
            var q = e.Aq(d.charAt(n)),
                s = a[k] / f;
            if (q) {
                if (this.format.fb) {
                    var r = e.ti(d.charAt(n)).advance,
                        r = r + (this.format.letterSpacing | 0);
                    c.push((new $c([0, 0, e.descent / 2, 1, r, 0, 1, 0, 400, 1, -r, 0, 3])).Mj(s, h))
                }
                c.push(q.Mj(s, h));
                k++
            }
        }
        return c
    };
    var tf = function (a, b) {
        return a.replace(/<[^>]+>|&[^;]+;/g, function (a) {
            switch (a) {
            case "&amp;":
                return "&";
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return '"';
            case "&apos;":
                return "'";
            case "&nbsp;":
                return " ";
            case "</p>":
            case "<br>":
            case "<br/>":
                return b ? "\n" : ""
            }
            return ""
        })
    }, uf = function (a) {
            return a.replace(/[<>&]/g, function (a) {
                switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;"
                }
                return a
            })
        }, nf = function (a) {
            return a.replace(/[&<>"'\u02c6\u02dc]/g, function (a) {
                switch (a) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "'":
                    return "&apos;";
                case '"':
                    return "&quot;";
                case "\u02c6":
                    return "&#710;";
                case "\u02dc":
                    return "&#732;"
                }
                return a
            })
        }, vf = function (a) {
            for (var b = /\s*<p(?: [^>]*)?>.*?<\/p>\s*/ig, c = 0, d = b.exec(a), e = ""; d;) d.index > c && (e += "<p>" + a.substring(c, d.index) + "</p>"), e += d[0], c = b.lastIndex, d = b.exec(a);
            a.length > c && (e += "<p>" + a.substring(c) + "</p>");
            return e
        }, qf = function (a, b) {
            switch (a.nodeType) {
            case Node.ELEMENT_NODE:
                var c = a.nodeName.toLowerCase();
                b.Dw(c, a);
                for (var d = 0; d < a.childNodes.length; d++) qf(a.childNodes[d],
                    b);
                b.Cw(c);
                break;
            case Node.TEXT_NODE:
                b.Bw(a.data)
            }
        };
    mf.prototype.Kp = function () {
        for (var a = 0, b = 0; b < this.yd.length; b++) var c = this.yd[b],
        d = sf(c), c = rf(c), a = a + c * d;
        0 < a && (a += 40);
        return a
    };
    var sf = function (a) {
        for (var b = 0, c = 0; c < a.length; c++) b = Math.max(b, 20 * a[c].format.Xl());
        return b
    }, rf = function (a) {
            for (var b = 1, c = 0; c < a.length; c++) b = a[c].format.Ye() && a[c].format.font.lineHeight ? Math.max(b, a[c].format.font.lineHeight) : Math.max(b, 1.14);
            return b
        }, wf = function (a) {
            switch (a) {
            case "left":
                return 0;
            case "center":
                return 2;
            case "right":
                return 1;
            case "justify":
                return 3;
            default:
                return 0
            }
        };
    mf.prototype.Lp = function () {
        for (var a = 0, b = 0; b < this.yd.length; b++) {
            for (var c = 0, d = this.yd[b], e = 0; e < d.length; e++) c += d[e].ka();
            a = Math.max(a, c)
        }
        return a
    };
    var pf = function (a, b, c) {
        this.Pg = [];
        this.Cb = a;
        this.pd = [];
        this.qm = [];
        this.qm.push(this.pd);
        this.kc = b;
        this.multiline = c
    };
    g = pf.prototype;
    g.Ig = function (a) {
        this.Pg.push(this.Cb.Er());
        this.Pg.push(a)
    };
    g.Jw = function (a) {
        this.Pg[this.Pg.length - 1] == a && (this.Pg.pop(), this.Cb = this.Pg.pop())
    };
    g.Dw = function (a, b) {
        switch (a) {
        case "p":
            this.Ig(a);
            var c = b.getAttribute("align");
            c && (this.Cb.format.Ka = wf(c));
            break;
        case "b":
            this.Ig(a);
            this.Cb.format.bold = !0;
            this.Cb.Hh(this.kc);
            break;
        case "i":
            this.Ig(a);
            this.Cb.format.italic = !0;
            this.Cb.Hh(this.kc);
            break;
        case "u":
            this.Ig(a);
            this.Cb.format.fb = !0;
            break;
        case "a":
            this.Ig(a);
            if (c = b.getAttribute("href")) this.Cb.format.url = c;
            if (c = b.getAttribute("target")) this.Cb.format.fq = c;
            break;
        case "br":
        case "sbr":
            this.pq();
            break;
        case "font":
            this.Ig(a);
            if (c = b.getAttribute("color")) this.Cb.format.color =
                od(c);
            (c = b.getAttribute("face")) && this.Cb.Hh(this.kc, c);
            if (c = b.getAttribute("size")) this.Cb.format.size = c;
            if (c = b.getAttribute("letterspacing")) this.Cb.format.letterSpacing = 20 * c
        }
    };
    g.Cw = function (a) {
        switch (a) {
        case "p":
            this.multiline && this.pq()
        }
        this.Jw(a)
    };
    g.pq = function () {
        if (this.pd.length) {
            var a = this.pd.length;
            a && (this.pd[a - 1].ij = !0);
            do {
                a--;
                var b = this.pd[a];
                b.text = b.text.replace(/\s+$/g, "")
            } while (0 < a && !this.pd[a].text.length)
        } else this.pd.push(this.Cb.Qh(""));
        this.pd = [];
        this.qm.push(this.pd)
    };
    g.Bw = function (a) {
        this.pd.push(this.Cb.Qh(a))
    };
    mf.prototype.zb = function () {
        return !1
    };
    var xf = function (a, b, c) {
        Pe.call(this, b, a, c)
    };
    t(xf, Pe);
    g = xf.prototype;
    g.Gd = function () {
        return this.definition.Gd(this.Xa())
    };
    g.Ti = function (a) {
        a != this.Xa() && (this.s(512), this.Fb());
        xf.q.Ti.call(this, a)
    };
    g.zb = function () {
        for (var a = this.definition.fillstyles, b = 0; b < a.length; b++)
            if (!a[b].zb) return !1;
        return !0
    };
    g.Ev = function (a, b) {
        var c = this.qa(),
            d = c.rd(),
            c = c.Pd();
        return d >= a && d <= b && c >= a && c <= b
    };
    g.sm = function () {
        return ib && null != this.definition.Mi && this.Eb().Ed(Vc) && this.Ev(0.2, 1)
    };
    var zf = function (a, b) {
        Pe.call(this, a, new yf(-1, [], null, [], []), b);
        this.clear();
        this.Mh = this.qg = null;
        this.Ca()
    };
    t(zf, xf);
    zf.prototype.Za = function (a, b) {
        this[a].apply(this, b)
    };
    zf.prototype.duplicate = function () {
        var a = new zf(this.a);
        a.definition = Ta(this.definition);
        return a
    };
    zf.prototype.clear = function () {
        this.definition.fillstyles = [];
        this.definition.linestyles = [];
        this.definition.paths = [];
        this.jd = this.kd = this.fe = this.ge = 0;
        this.s(1024);
        this.Fb()
    };
    zf.prototype.jf = function () {
        var a = this.qg,
            b = this.Mh,
            c;
        b && (c = b);
        a && a != b && (c = a);
        return c ? (this.s(1024), this.Fb(), c.data.value) : new fd
    };
    zf.prototype.moveTo = function (a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, this.jf().Xh(a, b), this.jd = a, this.kd = b, this.fe = a, this.ge = b)
    };
    zf.prototype.lineTo = function (a, b) {
        l(a) && l(b) && (a *= 20, b *= 20, a != this.jd || b != this.kd || this.Mh ? this.jf().ld(a, b) : this.jf().close(), this.fe = a, this.ge = b)
    };
    zf.prototype.curveTo = function (a, b, c, d) {
        l(c) && l(d) && l(a) && l(b) && (a *= 20, b *= 20, c *= 20, d *= 20, this.jf().dc(a, b, c, d), this.fe = c, this.ge = d)
    };
    zf.prototype.drawRect = function (a, b, c, d) {
        l(a) && l(b) && l(c) && l(d) && (a *= 20, b *= 20, c *= 20, d *= 20, this.jf().Xh(a, b).ld(a, b + d).ld(a + c, b + d).ld(a + c, b).ld(a, b), this.jd = this.fe = a, this.kd = this.ge = b)
    };
    var Af = Math.sqrt(2);
    zf.prototype.drawEllipse = function (a, b, c, d) {
        if (l(a) && l(b) && l(c) && l(d)) {
            a *= 20;
            b *= 20;
            c *= 20;
            d *= 20;
            var e = c / Af,
                f = d / Af,
                h = c * (Af - 1),
                k = d * (Af - 1);
            this.jf().Xh(a + c, b).dc(a + c, b + k, a + e, b + f).dc(a + h, b + d, a, b + d).dc(a - h, b + d, a - e, b + f).dc(a - c, b + k, a - c, b).dc(a - c, b - k, a - e, b - f).dc(a - h, b - d, a, b - d).dc(a + h, b - d, a + e, b - f).dc(a + c, b - k, a + c, b);
            this.jd = this.fe = a + c;
            this.kd = this.ge = b
        }
    };
    zf.prototype.drawRoundRect = function (a, b, c, d, e, f) {
        l(a) && l(b) && l(c) && l(d) && l(e) && l(f) && (e && f ? (e > c && (e = c), f > d && (f = d)) : e = f = 0, a *= 20, b *= 20, c *= 20, d *= 20, e *= 10, f *= 10, this.jf().Xh(a + c, b + d - f).dc(a + c, b + d, a + c - e, b + d).ld(a + e, b + d).dc(a, b + d, a, b + d - f).ld(a, b + f).dc(a, b, a + e, b).ld(a + c - e, b).dc(a + c, b, a + c, b + f).ld(a + c, b + d - f), this.jd = this.fe = a + c, this.kd = this.ge = b + d - f)
    };
    zf.prototype.Th = function (a, b, c, d) {
        var e = this.definition.paths,
            f = e[e.length - 1],
            h = new fd;
        h.Xh(a, b);
        a = new Bf(new Zd(h), d, c);
        f && f.data.value.Va() ? e[e.length - 1] = a : e.push(a);
        return a
    };
    zf.prototype.Ox = function (a) {
        var b = this.qg,
            c = this.Mh;
        if (c) {
            if (c.data.value.Va()) {
                b = c;
                b.line = a;
                this.qg = b;
                return
            }
            b == c && (b = this.Th(0, 0, c.line, void 0), b.data = c.data, delete c.line)
        }
        this.qg = b = l(a) ? this.Th(this.fe, this.ge, a, void 0) : null
    };
    zf.prototype.Nn = function (a) {
        var b = this.Mh;
        b && b.data.value.close();
        var c = this.qg;
        b && c && c != b ? (c.data.value.ld(this.jd, this.kd), l(a) ? c = b = this.Th(this.jd, this.kd, c.line, a) : b = null) : (b = l(a) ? this.Th(this.jd, this.kd, void 0, a) : null, c && (b ? (b.line = c.line, c = b) : c = this.Th(this.jd, this.kd, c.line, void 0)));
        this.Mh = b;
        this.qg = c;
        this.fe = this.jd;
        this.ge = this.kd;
        this.s(1024)
    };
    zf.prototype.lineStyle = function (a, b, c, d, e, f, h, k) {
        d = void 0;
        l(a) && (d = this.definition.linestyles, e = {}, e.width = [20 * a], e.color = [pd(b, c)], e.cap = Cf(ye, f, 0), e.joint = Cf(ze, h, 0), l(k) && (e.miter = k), d.push(new Ae(null, e)), d = d.length - 1);
        this.Ox(d)
    };
    var Cf = function (a, b, c) {
        return b && (a = a.indexOf(b), 0 <= a) ? a : c
    };
    zf.prototype.beginFill = function (a, b) {
        if (l(a)) {
            var c = this.definition.fillstyles,
                d = {
                    type: 1
                };
            d.color = [pd(a, b)];
            c.push(new je(null, d));
            this.Nn(c.length - 1)
        } else this.Nn()
    };
    zf.prototype.endFill = function () {
        this.Nn()
    };
    var Df = function (a, b, c) {
        Pe.call(this, b, a, c)
    };
    t(Df, Pe);
    Df.prototype.Gd = function () {
        return new De(this.definition.bounds)
    };
    Df.prototype.zb = function () {
        return !1
    };
    var A = function (a, b, c, d) {
        Ve.call(this, b, a, c, d);
        this.yo();
        this.Zi = !1;
        this.Fh = {};
        this.$f = null;
        this.uj = void 0;
        this.a.Pt(this);
        this.co = na(Ef, this);
        this.Gc |= 127
    };
    t(A, Ve);
    g = A.prototype;
    g.yo = function () {
        this.dr = [];
        this.Da = -1;
        this.Vj = !1;
        this.Xi = !0;
        this.zq = []
    };
    g.Wl = function (a) {
        this.Wd();
        this.vu();
        this.yo();
        for (var b = this.r, c = Object.getOwnPropertyNames(b), d = 0; d < c.length; ++d) ud(c[d]) || delete b[c[d]];
        this.definition = a;
        this.Xc = !0;
        this.da()
    };
    g.da = function (a, b) {
        this.Xc && this.qh(7);
        A.q.da.call(this, a, b)
    };
    g.Ah = function () {
        A.q.Ah.call(this);
        this.Zi || this.a.Pa === this || (this.Zi = !0, this.play(), this.Ao())
    };
    g.Wd = function () {
        this.Zi && (this.F.Wd(), this.fireEvent(new Ee(5)), this.Zi = !1);
        A.q.Wd.call(this)
    };
    g.play = function () {
        this.Vj = !0
    };
    g.Ms = function (a) {
        this.Xi = a
    };
    g.Ul = function () {
        this.F.ev();
        this.Vj && this.Ao()
    };
    g.Ao = function () {
        var a = this.Da + 1;
        if (a >= this.definition.frameCount) {
            if (this.a.Pa === this && this.a.Zs) return;
            a = 0
        }
        0 == this.definition.frameCount && this.a.Pa == this || this.lg(a)
    };
    g.stop = function () {
        this.Vj = !1
    };
    g.$d = function (a, b) {
        0 <= a && (a >= this.definition.frameCount ? this.gp(this.definition.frameCount - 1) : this.lg(a), this.Vj = b)
    };
    g.Sx = function () {
        var a = this.definition.dg.uv(this.Da);
        isFinite(a) && this.lg(a);
        this.stop()
    };
    g.Qx = function () {
        var a = this.definition.dg.tv(this.Da);
        isFinite(a) && this.lg(a);
        this.stop()
    };
    g.Xe = function (a, b) {
        var c = this.definition.dg,
            d;
        if (l(b)) {
            if (d = c.br[b], !l(d)) return
        } else d = c.nr(this.Da);
        var e = Number(a) + d - 1;
        return 0 <= e && e == Math.floor(e) ? e : (e = c.aj[a]) && c.nr(e) != d ? void 0 : e
    };
    g.cu = function (a) {
        return this.definition.tags[a]
    };
    g.lg = function (a) {
        if (a != this.Da)
            if (a > this.Da) {
                if (this.gp(a - 1), this.Da = a, this.J().ig(this.co), this.mp(this.Da), a = this.definition.tags[this.Da])
                    for (var b = 0; b < a.length; b++) a[b].Ve(this), a[b].Yl(this)
            } else {
                this.Da = a;
                this.J().ig(this.co);
                a = this.definition.dp[this.Da];
                var c = [];
                if (a)
                    for (b = 0; b < a.length; b++) {
                        var d = a[b].Kh(this);
                        d && c.push(d);
                        a[b].Yl(this)
                    }
                var e = this;
                this.F.Rt(function (a) {
                    if (!(0 > a.depth) || 0 <= c.indexOf(a)) return !0;
                    e.s(16);
                    a.Wd();
                    return !1
                });
                this.S & 16 && this.F.Qt(this)
            }
    };
    g.gp = function (a) {
        for (; a > this.Da;) {
            this.Da++;
            this.mp(this.Da);
            var b = this.definition.tags[this.Da];
            if (b)
                for (var c = 0; c < b.length; c++) b[c].Ve(this)
        }
    };
    var Ef = function () {
        var a = this.zq[this.Da];
        if (p(a)) {
            var b = this;
            this.J().Mq(a, function () {
                b.stop()
            })
        }
    };
    g = A.prototype;
    g.mp = function (a) {
        if (!this.dr[a]) {
            for (var b = this.definition.zk[a], c = 0; b && c < b.length; c++) b[c].nm(this);
            this.dr[a] = !0
        }
    };
    g.Bn = function () {
        0 < this.Da && this.lg(this.Da - 1);
        this.stop()
    };
    g.xi = function () {
        this.Da + 1 < this.definition.frameCount && this.lg(this.Da + 1);
        this.stop()
    };
    g.J = function () {
        return this.a.J()
    };
    g.fm = function () {
        return this.a.fm()
    };
    g.He = function () {
        return this.a.He()
    };
    g.setCapture = function (a, b, c) {
        this.a.setCapture(a, b, c)
    };
    g.releaseCapture = function (a) {
        this.a.releaseCapture(a)
    };
    g.duplicate = function (a, b, c) {
        var d = new A(this.definition, this.a, this.Kf + "_d");
        d.Xc = !0;
        d.Kb(b);
        d.setTransform(this.Z());
        this.$f && (d.$f = this.$f.duplicate(d), d.ad(d.$f, -16385));
        d.da();
        a.vd(c);
        a.ad(d, c);
        d.hc(this.tb);
        return d
    };
    g.Za = function (a, b) {
        var c = this.$f;
        c || (this.$f = c = new zf(this.a), c.$c = !0, this.ad(c, -16385));
        c[a].apply(c, b)
    };
    g.yb = function (a) {
        if (this.Xi && a != this.oc) {
            var b;
            switch (a) {
            case 1:
                b = "_up";
                break;
            case 4:
                b = "_down";
                break;
            case 2:
                b = "_over"
            }
            b && (b = this.definition.dg.aj[b], l(b) && (this.$d(b, !1), this.a.Ff = !0))
        }
        A.q.yb.call(this, a)
    };
    g.bp = function (a, b, c) {
        var d = new Ff;
        this.Qf(Gf(a));
        var e = this;
        d.xb = function (a) {
            Hf(e, a)
        };
        If(a, this.a, b || void 0, c, d)
    };
    g.gv = function () {
        var a = this.a.jc,
            b = this;
        return this.a.B.eh(a.x, a.y, function (a) {
            return !b.contains(a) && a instanceof A
        })
    };
    var Kf = function (a, b) {
        Ve.call(this, a, new Jf(0, 0, null, null), "stage");
        this.backgroundColor = nd(b.backgroundColor).toString();
        this.ph = b.frameSize.xmax / 20;
        this.oh = b.frameSize.ymax / 20;
        this.Jc = "showAll";
        this.se = 0;
        this.s(524288);
        this.Gi = this.Df = Sc;
        this.po()
    };
    t(Kf, Ve);
    g = Kf.prototype;
    g.xh = function () {};
    g.Qs = function (a) {
        this.Jc != a && (this.Jc = a, this.s(524288), "noScale" == this.Jc && (a = this.zc != this.oh, (this.Ac != this.ph || a) && this.a.J().tl()))
    };
    g.Is = function (a) {
        a = a.toUpperCase();
        var b = 0; - 1 < a.indexOf("L") && (b |= 1); - 1 < a.indexOf("T") && (b |= 2); - 1 < a.indexOf("R") && (b |= 4); - 1 < a.indexOf("B") && (b |= 8);
        this.se != b && (this.se = b, this.s(524288))
    };
    g.wu = function () {
        return this.se & 1 ? 0 : this.se & 4 ? 2 : 1
    };
    g.xu = function () {
        return this.se & 2 ? 0 : this.se & 8 ? 2 : 1
    };
    g.po = function () {
        var a = this.a.td.offsetWidth,
            b = this.a.td.offsetHeight,
            c, d = this.a.td,
            e = c = 0;
        if (d.offsetParent) {
            do c += d.offsetLeft, e += d.offsetTop; while (d = d.offsetParent)
        }
        c = [c, e];
        d = c[0];
        c = c[1];
        if (this.Be != d || this.Ce != c) this.Be = d, this.Ce = c, this.s(524288);
        if (this.Ac != a || this.zc != b) this.Ac = a, this.zc = b, "noScale" == this.Jc && this.a.J().tl(), this.s(524288)
    };
    g.xt = function () {
        var a = this.Ac,
            b = this.zc,
            c = this.ph,
            d = this.oh,
            e = a / c,
            f = b / d;
        switch (this.Jc) {
        case "noScale":
            e = f = 1;
            break;
        case "showAll":
            e < f ? f = e : e = f;
            break;
        case "noBorder":
            e > f ? f = e : e = f
        }
        var h = 0,
            k = 0;
        switch (this.wu()) {
        case 1:
            h = (a - c * e) / 2;
            break;
        case 2:
            h = a - c * e
        }
        switch (this.xu()) {
        case 1:
            k = (b - d * f) / 2;
            break;
        case 2:
            k = b - d * f
        }
        this.Df = new Rc(e / 20, 0, 0, f / 20, this.Be + h, this.Ce + k);
        this.Gi = this.Df.Bc()
    };
    g.Wa = function () {
        this.po();
        if (this.S & 524288) {
            this.xt();
            var a = this.Df.translate(-this.Be, -this.Ce);
            this.a.Uc.Kl(a)
        } else if (!this.a.Ff) return;
        this.a.Uc.Jl();
        this.a.Ff = !1
    };
    g.Tb = function () {
        return !0
    };
    g.si = function (a) {
        this.s(524288);
        this.backgroundColor = a ? a : "rgba(0,0,0,0)"
    };
    var Lf = function (a) {
        this.Wf = a || null;
        this.Dr = this.Cd = "";
        this.ho = {};
        this.vr = this.content = null
    };
    Lf.prototype.vx = function () {
        return this.Dr || this.Cd
    };
    Lf.prototype.Uv = function (a) {
        this.Dr = a
    };
    Lf.prototype.Qf = function (a) {
        this.Cd = a
    };
    var Hf = function (a, b, c) {
        var d = a.a,
            e = new Ld,
            f = Mf(b, d, e);
        d.Ei(e, function () {
            a.Wl(f);
            a.fireEvent(new Ee(18));
            d.Ba();
            c && c()
        })
    }, Nf = function (a, b, c, d, e) {
            var f = new Ld,
                h = Mf(c, a, f);
            a.Ei(f, function () {
                var c = new A(h, a, null);
                d && d(c);
                a.Vk(c, b);
                c.da();
                c.Xc = !0;
                a.Ba();
                e && e()
            })
        }, Of = function (a, b, c, d) {
            var e = !1;
            if (ea(c))
                for (var f = 0; f < c.length; ++f) {
                    var h = c[f];
                    switch (h.name && h.name.toLowerCase()) {
                    case "content-type":
                        e = !0
                    }
                    a.setRequestHeader(h.name, h.value)
                }
            e || ("POST" == b && (d = d || "application/x-www-form-urlencoded"), d && a.setRequestHeader("Content-Type",
                d))
        }, Rf = function (a, b, c, d, e, f, h) {
            d = String(d).toUpperCase();
            switch (d) {
            case "POST":
                if ("function" == typeof ArrayBuffer) {
                    Pf(a, b, c, "POST", vd(e), f, h);
                    break
                }
            case "GET":
                b = vd(e, b);
            default:
                USING_XML_HTTP_MOCK ? Pf(a, b, c, "GET", null, f, h) : Qf(b, c, f)
            }
        }, Pf = function (a, b, c, d, e, f, h) {
            c && c.Lj();
            var k = new XMLHttpRequest;
            k.open(d, b);
            k.responseType = "arraybuffer";
            k.onreadystatechange = function () {
                if (4 == k.readyState) {
                    if (200 == k.status || 0 == k.status && k.response) {
                        var b = new Uint8Array(k.response);
                        if (!fa(b)) throw Error("encodeByteArray takes an array as a parameter");
                        Fc();
                        for (var d = Cc, e = [], h = 0; h < b.length; h += 3) {
                            var u = b[h],
                                w = h + 1 < b.length,
                                C = w ? b[h + 1] : 0,
                                H = h + 2 < b.length,
                                $a = H ? b[h + 2] : 0,
                                Ia = u >> 2,
                                u = (u & 3) << 4 | C >> 4,
                                C = (C & 15) << 2 | $a >> 6,
                                $a = $a & 63;
                            H || ($a = 64, w || (C = 64));
                            e.push(d[Ia], d[u], d[C], d[$a])
                        }
                        Qf("data:image/" + a + ";base64," + e.join(""), c, f)
                    } else f.nc(k.status);
                    c && c.cf()
                }
            };
            Of(k, d, h);
            k.send(e)
        }, Qf = function (a, b, c) {
            b && b.Lj();
            var d = new Image;
            d.onload = function () {
                c.xb({
                    tags: [{
                        type: 8,
                        id: 1,
                        data: d.src,
                        width: d.width,
                        height: d.height
                    }, {
                        type: 3,
                        id: 1,
                        depth: 1
                    }, {
                        type: 2
                    }],
                    frameCount: 1,
                    id: 0
                }, 200);
                b && b.cf()
            };
            d.onerror = function () {
                c.nc(404);
                b && b.cf()
            };
            d.src = a
        }, Sf = function (a, b, c, d, e, f, h) {
            b && b.Lj();
            var k = new XMLHttpRequest;
            c = String(c).toUpperCase();
            var n = null;
            switch (c) {
            case "POST":
                k.open(c, a);
                n = vd(d);
                break;
            case "GET":
                a = vd(d, a);
            default:
                k.open("GET.html", a)
            }
            k.onreadystatechange = function () {
                4 == k.readyState && (200 == k.status || 0 == k.status && k.response ? e.xb(k.responseText, k.status) : e.nc(k.status), b && b.cf())
            };
            Of(k, c, f, h);
            k.send(n)
        }, Tf = function (a, b, c, d, e, f) {
            var h = new Ff;
            h.xb = function (a) {
                var b = e(),
                    c = b.r;
                a = zd(a);
                for (var d = Object.keys(a), f = 0; f < d.length; f++) {
                    var h = a[d[f]];
                    c[d[f]] = h[h.length - 1]
                }
                b.fireEvent(new Ee(18));
                c.onData && c.onData.call(c)
            };
            Sf(a, b, c, d, h, f)
        }, Uf = {
            png: oa(Rf, "png"),
            gif: oa(Rf, "gif"),
            jpg: oa(Rf, "jpeg"),
            jpeg: oa(Rf, "jpeg"),
            swf: function (a, b, c, d, e, f) {
                USING_XML_HTTP_MOCK || (a = a.replace(/^([^?#]+)([?#].*)?$/g, "$1.json$2"));
                var h = new Ff(e);
                h.xb = function (a, b) {
                    var c = {};
                    a && (c = Gc(a), xd(c));
                    e.xb(c, b)
                };
                Sf(a, b, c, d, h, f)
            }
        }, If = function (a, b, c, d, e, f) {
            var h = a.match(/\.([^.?#]+)(?:#.*$|\?.*$|$)/);
            (h = Uf[h && h[1] || ""]) &&
                h(a, b, c, d, e, f)
        }, Gf = function (a) {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        }, Ff = function (a) {
            this.yr = function () {
                l(a) && p(a.yr) && a.yr()
            };
            this.nc = function (b) {
                l(a) && p(a.nc) && a.nc(b)
            };
            this.xr = function (b, c) {
                l(a) && p(a.xr) && a.xr(b, c)
            };
            this.xb = function (b, c) {
                l(a) && p(a.xb) && a.xb(b, c)
            }
        };
    var Vf = function () {
        this.Tr = [];
        this.nw = [];
        this.zi = []
    };
    Vf.prototype.ww = function (a, b, c) {
        this.Tr[a] = b;
        this.nw[a] = c
    };
    Vf.prototype.Co = function (a) {
        this.zi[a] = new Audio(this.Tr[a]);
        this.zi[a].play()
    };
    Vf.prototype.Op = function () {
        for (var a = 0; a < this.zi.length; a++) l(this.zi[a]) && this.zi[a].pause()
    };
    Object.defineProperty(Date, "__swiffy_override", {
        value: function (a, b, c, d, e, f, h) {
            switch (arguments.length) {
            case 0:
                return new Date(Date.now());
            case 1:
                return new Date(arguments[0]);
            default:
                return c = l(c) ? c : 1, d = l(d) ? d : 0, e = l(e) ? e : 0, f = l(f) ? f : 0, h = l(h) ? h : 0, new Date(a, b, c, d, e, f, h)
            }
        }
    });
    Object.defineProperty(Array, "__swiffy_override", {
        value: Array
    });
    var Wf = function (a) {
        this.value = a
    }, Xf = function (a) {
            Object.defineProperty(a.prototype, "__swiffy_nvr", {
                value: !0
            })
        }, Yf = function (a) {
            window.console && window.console.log("[trace] " + a)
        }, Zf = function (a) {
            if (a instanceof Wf) Yf(a.value);
            else throw a;
        }, $f = function (a) {
            throw a;
        }, ag = function () {};
    "__proto__" in Object || Object.defineProperty(Qd.prototype, "__proto__", {
        get: function () {
            return Object.getPrototypeOf(this)
        }
    });
    var bg = function (a, b, c, d, e, f, h) {
        this.Q = a;
        this.variables = b;
        this.url = c;
        this.target = d || "_self";
        this.method = e;
        this.ap = !! f;
        this.Rl = !! h;
        this.Dl = null;
        if (this.ap || this.Rl) this.Dl = this.iv()
    }, cg = {
            0: void 0,
            1: "GET",
            2: "POST"
        };
    g = bg.prototype;
    g.rw = function (a) {
        var b = this.target.match(/^\_level(\d+)$/i);
        if (this.ap) return this.Rl ? b ? this.ep(Number(b[1])) : this.Ht() : this.Gt(), !0;
        if (b) return this.Rl ? this.ep(Number(b[1])) : this.Ft(Number(b[1])), !0;
        if ("" == this.url) return !0;
        if (this.url.match(/^fscommand:/i)) return this.Et(), !0;
        b = this.target;
        "_self" == b && this.Q.a.Dt() && (b = "_parent");
        switch (this.method) {
        case 0:
        case 1:
            if (!a && "_self" != this.target) return !1;
            var c = this.url;
            1 == this.method && (c = vd(this.variables, c), c = c.replace(/%20/g, "+"));
            window.open(c, b);
            break;
        case 2:
            a = Cb("form");
            a.acceptCharset = "utf-8";
            a.method = "post";
            if (m(this.variables)) {
                var d = Cb("input", {
                    type: "hidden",
                    name: this.variables
                });
                a.appendChild(d)
            } else
                for (c in this.variables) "$" == c.charAt(0) || ud(c) || (d = Cb("input", {
                    type: "hidden",
                    name: c,
                    value: this.variables[c]
                }), a.appendChild(d));
            a.action = this.url;
            a.target = b;
            a.style.visibility = "hidden";
            document.body.appendChild(a);
            a.submit();
            Fb(a);
            break;
        default:
            if (!a && "_self" != this.target) return !1;
            window.open(this.url, b)
        }
        return !0
    };
    g.Et = function () {
        var a = this.Q.a.getName();
        if (a) {
            var a = a + "_DoFSCommand",
                b = this.url.substr(10),
                c = this.target;
            if (window[a]) window[a](b, c)
        }
    };
    g.Ft = function (a) {
        var b = this.Q.a;
        b.B.vd(-16384 + a);
        if (this.url) {
            var c = new Ff;
            c.xb = function (c) {
                Nf(b, a, c)
            };
            If(this.url, b, cg[this.method], this.variables, c)
        }
    };
    g.Gt = function () {
        var a = this.Dl,
            b = cg[this.method];
        if (a instanceof B) {
            var c = a.__swiffy_d;
            if (c) {
                var d = c.a.J().ua(this.url);
                c.bp(d, b, a)
            }
        }
    };
    g.Ht = function () {
        var a = this.Dl,
            b = cg[this.method];
        a instanceof B && a.loadVariables.call(a, this.url, b)
    };
    g.ep = function (a) {
        var b = this.Q.a;
        Tf(this.url, b, cg[this.method], this.variables, function () {
            var c = b.yt(a);
            c || (c = new Jf(0, 0, null, {}), c = new A(c, b, null), b.Vk(c, a), c.da(), c.Xc = !0);
            return c
        })
    };
    g.iv = function () {
        return this.Q.ae("_self" == this.target ? "this" : this.target)
    };
    var dg = new Ge("svg");
    ba("swiffy.html", dg, void 0);
    var ig = function (a) {
        var b = dg;
        a.nh() || null != a.ub ? b = null != a.ub && a.Tb() && a.ub.Tb() ? eg : fg : !gg && a.Ii() && (b = hg);
        return a.Db(b)
    };
    var jg = new Ge("nul");
    var kg = function (a, b, c, d, e) {
        this.clip = a;
        c || (a = a.Z(), d = this.Jp(d, e), this.Hp = a.i - d.x, this.Ip = a.j - d.y);
        this.Gp = b
    };
    kg.prototype.Hp = 0;
    kg.prototype.Ip = 0;
    kg.prototype.Jp = function (a, b) {
        var c = this.clip.getParent() ? this.clip.getParent().qa() : Sc,
            d = new Pc(a, b);
        d.u(c.Bc());
        return d
    };
    kg.prototype.su = function (a, b) {
        if (!this.Gp || this.Gp.contains(a, b)) {
            var c = this.Jp(a, b);
            this.clip.setTransform(this.clip.Z().cd(c.x + this.Hp, c.y + this.Ip))
        }
    };
    USING_SWIFFY_MOCKS = !! aa.USING_SWIFFY_MOCKS;
    USING_XML_HTTP_MOCK = !! aa.USING_XML_HTTP_MOCK;
    var lg = !! aa.SVGFilterElement,
        mg = -1 != navigator.userAgent.indexOf("iPad") || Jc.test(navigator.userAgent),
        gg = !hb || !lg,
        pg = function (a, b, c, d) {
            xd(b);
            this.td = a;
            this.vb = b.version;
            this.Ff = !1;
            a = window.location.href;
            this.it = c || dg;
            this.Uc = this.it.gt(this);
            this.jc = new Pc(0, 0);
            this.Gf = !1;
            this.jt = new Vf;
            this.$s = b.fileSize;
            this.Zs = !! b.truncated;
            this.gl = new ng(b.frameRate, this);
            this.$i = [];
            this.Wn = [];
            this.kc = {};
            c = new Ld;
            var e = Mf(b, this, c);
            this.ya || this.Ie(E);
            this.Hf = [];
            this.Bd = null;
            this.jl = !1;
            this.Ui = null;
            this.kt = 1;
            this.bd = [];
            this.Zn = !d;
            this.Vb = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
            this.Vb.style.position = "relative";
            this.Vb.style.width = "100%";
            this.Vb.style.height = "100%";
            this.Vb.style.overflow = "hidden";
            this.Vb.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
            this.B = new Kf(this, b);
            this.Pa = new A(e, this, "#0");
            this.ya instanceof og && (this.Pa.Kb("root1"), this.Pa.Tn(this.ya.jh()));
            this.B.da();
            this.Pa.ht(19);
            this.Pa.play();
            this.Vk(this.Pa, 0);
            this.lc = null;
            this.sl = 0;
            this.Ei(c);
            this.bo = !1;
            this.Dd = [];
            this.Xd = null;
            this.so(a)
        };
    ba("swiffy.Stage", pg, void 0);
    g = pg.prototype;
    g.Vk = function (a, b) {
        this.B.ad(a, -16384 + b);
        this.J().rq(a, b)
    };
    g.yt = function (a) {
        return this.B.Fc(-16384 + a)
    };
    g.Lj = function () {
        this.sl++
    };
    g.cf = function () {
        this.sl--;
        this.Sq()
    };
    g.hs = function () {
        return 0 == this.sl
    };
    g.Rq = function (a) {
        this.hs() ? a() : this.$i.push(a)
    };
    g.Sq = function () {
        if (this.hs()) {
            for (var a = 0; a < this.$i.length; a++)(0, this.$i[a])();
            this.$i = []
        }
    };
    g.si = function (a) {
        this.B.si(a)
    };
    pg.prototype.setBackground = pg.prototype.si;
    pg.prototype.px = function () {
        this.gl.stop();
        for (var a = 0; a < this.bd.length; a++) ac(this.bd[a]);
        this.B.p();
        this.Uc.p();
        bc(this.Vb);
        Fb(this.Vb);
        this.He().Op()
    };
    pg.prototype.destroy = pg.prototype.px;
    g = pg.prototype;
    g.Xt = function () {
        this.Zn = !1;
        this.Uc.Xm(this.Vb, this.bd);
        v(document, "keyup", this.kv, !1, this);
        v(new kc(document), "key", this.jv, !1, this)
    };
    g.Uu = function (a) {
        this.Pa.map(function (b) {
            if (b instanceof Te) return b.fireEvent(a)
        })
    };
    g.em = function (a) {
        2 != a.button && (a.stopPropagation(), this.wl())
    };
    g.wl = function () {
        this.Zp();
        this.Gf = !0;
        this.ya.wg(new Ee(3));
        this.Ba();
        this.ya.Gg();
        this.lc ? this.lc.Gg() : this.setCapture(this);
        this.Ba();
        this.gg(!1)
    };
    g.gm = function () {
        this.Gf = !1;
        this.ya.wg(new Ee(2));
        this.Ba();
        this.ya.Hg();
        this.lc ? this.lc.Hg() : this.releaseCapture(this);
        this.Ba();
        this.gg(!0)
    };
    g.Zo = function () {
        this.Gf = !0;
        this.setCapture(this, !0)
    };
    g.$o = function () {
        this.Gf = !1;
        this.releaseCapture(this)
    };
    g.vj = function (a) {
        if (!this.B.Gi) return null;
        var b = a.Ud.touches;
        b && 1 == b.length && (a = b[0]);
        var c = b = 0;
        if (a.pageX || a.pageY) b = a.pageX, c = a.pageY;
        else if (a.clientX || a.clientY) b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        a = new Pc(b, c);
        a.u(this.B.Gi);
        return a
    };
    g.kv = function (a) {
        this.ya.ak(a);
        this.ya.wg(new Ee(0));
        this.Ba();
        this.ya.Kq();
        this.gg(!0)
    };
    g.jv = function (a) {
        this.ya.$j(a);
        this.ya.wg(new Ee(1));
        this.Ba();
        this.ya.Iq();
        this.Uu(new Ee(20));
        this.Ba();
        this.gg(!0)
    };
    g.Mu = function () {
        return null != this.lc
    };
    g.wm = function () {
        var a = "default";
        this.J().sq() ? (this.bj() || this.Lu() || !this.fg() && this.Mu()) && this.lc && this.J().tq(this.lc) && (a = "pointer") : a = "none";
        this.Vb.style.cursor = a
    };
    g.ip = function (a, b, c, d, e, f) {
        this.jj();
        var h = null;
        l(c) && l(d) && l(e) && l(f) && (h = new Yc(20 * c, 20 * d, 20 * e, 20 * f));
        this.Xd = new kg(a, h, l(b) && b, this.jc.x, this.jc.y);
        a.Fj(!0)
    };
    g.jj = function () {
        if (this.Xd) {
            var a = this.Xd.clip;
            this.Xd = null;
            a.Fj(!1)
        }
    };
    g.zt = function (a) {
        return null != this.Xd && this.Xd.clip === a
    };
    g.wj = function (a, b, c) {
        this.jc.x = b;
        this.jc.y = c;
        this.Xd && this.Xd.su(b, c);
        this.ya.zg(a);
        if (a && (b = a.getParent())) {
            do this.ya.cj(b) || (a = b); while (b = b.getParent())
        }
        this.lc != a && (this.ya.bq(this.lc, a), this.lc = a, this.Ba(), this.gg(!1), this.wm())
    };
    g.qc = function (a, b) {
        var c = this.vj(b);
        null == c && (c = this.jc);
        this.wj(a, c.x, c.y)
    };
    g.ot = function (a, b) {
        this.qc(a, b);
        this.em(b)
    };
    g.fg = function () {
        return null != this.Bd
    };
    g.bj = function () {
        return null != this.Bd && this.jl
    };
    g.Wi = function (a) {
        return this.Bd == a
    };
    g.Lu = function () {
        return null != this.Bd && this.Bd == this.lc
    };
    g.setCapture = function (a, b, c) {
        this.releaseCapture(a);
        this.Bd = a;
        b && (this.jl = !0);
        c && (this.Ui = c, this.wm())
    };
    g.releaseCapture = function (a) {
        this.Bd && (this.wm(), this.Bd != a && (this.Zp(), this.Ui && (this.Ui(), this.Ba())), this.Bd = this.Ui = null, this.jl = !1)
    };
    g.start = function (arg) {
        var a = this.gl;
        this.Rq(function () {
            a.start()
        })
    };

    g.stop = function (arg) {
        var a = this.gl;
        this.Rq(function () {
            a.stop()
        })
    };

    pg.prototype.start = pg.prototype.start;
    pg.prototype.stop = pg.prototype.stop;

    g = pg.prototype;
    g.Pt = function (a) {
        this.Hf.push(a)
    };
    g.Ei = function (a, b) {
        a.Vv(this, b);
        this.Wn.push(a);
        this.Uc.tn(a)
    };
    g.Ul = function () {
        this.Zn && this.Xt();
        this.Hf = this.Hf.filter(function (a) {
            return !a.Sd()
        });
        this.ya.Dp();
        for (var a = this.Hf.length - 1; 0 <= a; --a) {
            var b = this.Hf[a];
            b.fireEvent(new Ee(6));
            b.Ul()
        }
        this.bo || (this.Pa.r.$version = "HTML 11,0,0,0", this.Pa.da(), this.Ba(), this.Pa.qh(7), this.Pa.fireEvent(new Ee(7)), this.bo = !0);
        this.ya.Ep();
        this.Ba();
        this.gg(!this.Gf);
        this.Ff = !0
    };
    g.Ie = function (a) {
        this.ya || (this.ya = new a(this));
        return this.ya
    };
    g.J = function () {
        return this.ya
    };
    g.Ba = function () {
        this.ya.Ba()
    };
    g.gg = function (a) {
        for (var b = [], c = 0; c < this.Dd.length; ++c) this.Dd[c].rw(a) || b.push(this.Dd[c]);
        this.Dd = b
    };
    g.Zp = function () {
        this.Dd = []
    };
    g.Dh = function (a) {
        for (var b = 0; b < this.Dd.length; ++b)
            if (this.Dd[b].target == a.target) {
                this.Dd[b] = a;
                return
            }
        this.Dd.push(a)
    };
    g.fm = function () {
        return this.gl
    };
    g.He = function () {
        return this.jt
    };
    g.by = function (a) {
        this.sr(zd(a))
    };
    pg.prototype.setFlashVars = pg.prototype.by;
    pg.prototype.sr = function (a) {
        for (var b = Object.keys(a), c = 0; c < b.length; c++) {
            var d = b[c],
                e = a[d];
            this.J().ur(d, e[e.length - 1])
        }
    };
    pg.prototype.so = function (a) {
        this.ya.jh().Qf(a);
        this.sr(Ad(a))
    };
    pg.prototype.setSwfUrl = pg.prototype.so;
    pg.prototype.rh = function () {
        return "instance" + this.kt++
    };
    pg.prototype.Wa = function () {
        this.B.Wa();
        this.Vb.parentNode || (this.Uc.bi(this.Vb), this.td.appendChild(this.Vb))
    };
    pg.prototype.getName = function () {
        return this.td.id
    };
    pg.prototype.Dt = function () {
        if (window.top == window) return !1;
        var a = this.td.parentNode;
        if (!a || a != document.body) return !1;
        for (a = a.firstChild; a; a = a.nextSibling)
            if (a != this.td && "SCRIPT" != a.tagName && (a.nodeType != Node.TEXT_NODE || a.nodeValue.trim())) return !1;
        return !0
    };
    var qg = new Ge("geometry");
    var rg = new Ge("blend container"),
        sg = function (a) {
            this.b = a;
            this.Wb = [];
            this.Mf = 0
        };
    g = sg.prototype;
    g.sp = function () {
        var a = dg.ud(this.b),
            a = new tg(a, a.nj);
        a.S = this.b.Ji;
        return a
    };
    g.Yn = function (a) {
        for (var b = 0; b < a; ++b) Gd(this.Wb[b].Dc, this.Wb[b].Ch);
        for (; this.Wb.length > a;) this.Wb.pop().wb.p()
    };
    g.Xn = function (a, b, c) {
        var d = this.Mf;
        1 >= a && (a = 0);
        for (var e, f; f = this.Wb[--d];) {
            if (f.Ef.Un(c)) {
                f.De == a && 0 == a && (e = f);
                break
            }
            f.De == a && (e = f)
        }
        e || ((e = this.Wb[this.Mf]) ? (e.S = this.b.S, e.Ef.reset(), e.Ch = null) : this.Wb[this.Mf] = e = this.sp(), e.De = a, ++this.Mf);
        e.Ch = Fd(e.Dc, e.Ch, b);
        e.Ef.Yc(c)
    };
    g.Sn = function (a) {
        this.Mf = 0;
        for (var b = [], c = this.b.F.oa; c;) {
            for (; 0 < b.length && c.depth > b[b.length - 1].Lb();) b.pop();
            var d = c.nh() || null != c.ub;
            if (d || c.Tb() || !c.Ii()) {
                var e = d ? 0 : c.hb(),
                    d = ig(c),
                    f = c.Ua().eh().G();
                f.u(c.Z());
                this.Xn(e, d.Wa(a, b), f)
            } else {
                for (var d = c.Db(rg), e = d.Sn(a), h = 0; h < e.length; ++h) {
                    var k = e[h];
                    c.S = k.S & -65553;
                    f = k.Ef.G();
                    f.u(c.Z());
                    this.Xn(k.De, k.wb.Wa(a, b), f)
                }
                c.S = 0
            }!c.nh() || c instanceof mf || b.push(d);
            c = c.nextSibling
        }
        this.Yn(this.Mf);
        return this.Wb
    };
    g.p = function () {
        for (var a = 0; a < this.Wb.length; ++a) this.Wb[a].wb.p()
    };
    rg.c(A, sg);
    rg.c($e, sg);
    rg.c(af, sg);
    var hg = new Ge("blend context"),
        ug = function (a) {
            sg.call(this, a);
            this.wb = dg.ud(this.b);
            this.target = document.createElementNS("http://www.w3.org/2000/svg", "g");
            this.wb.nj.appendChild(this.target);
            this.filters = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            this.filters.setAttribute("filterUnits", "userSpaceOnUse");
            this.filters.setAttribute("primitiveUnits", "userSpaceOnUse");
            this.filters.id = qc.Ha().Ia();
            this.target.setAttribute("filter", "url(#" + this.filters.id + ")");
            this.target.appendChild(this.filters);
            this.Tk = document.createElementNS("http://www.w3.org/2000/svg", "g");
            sd(this.Tk);
            this.target.appendChild(this.Tk)
        };
    t(ug, sg);
    g = ug.prototype;
    g.sp = function () {
        return new tg(this.wb, document.createElementNS("http://www.w3.org/2000/svg", "g"))
    };
    g.Yn = function (a) {
        for (var b = 0; b < a; ++b) Gd(this.Wb[b].Dc, this.Wb[b].Ch);
        this.Wb.length = a
    };
    g.Wa = function (a, b) {
        this.b.S & 65552 && (this.Zb(this.wb.Xo(a)), this.b.S &= -65553);
        return this.wb.Wa(a, b)
    };
    g.Zb = function (a) {
        a = this.Sn(a);
        var b = this.filters,
            c = this.Tk,
            d = "",
            e = new Yc;
        Eb(b);
        var f = this.b.a.B,
            h = new Yc(-f.Be, -f.Ce, -f.Be + f.Ac, -f.Ce + f.zc),
            f = this.b.qa().multiply(f.Df),
            k = f.Bc();
        if (this.b.backgroundColor) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            n.setAttribute("flood-color", this.b.backgroundColor);
            n.setAttribute("result", d = "bg");
            b.appendChild(n)
        }
        var q = a.length;
        Fb(this.target.nextSibling);
        if (1 == q || 0 == a[q - 1].De) {
            --q;
            n = a[q].Dc;
            n.removeAttribute("transform");
            var s = this.target;
            s.parentNode && s.parentNode.insertBefore(n, s.nextSibling)
        }
        for (var r = c.firstChild, s = 0; s < q; ++s) {
            var u, n = a[s].Dc;
            r ? (u = r, r = u.firstChild, r != n && (r ? u.replaceChild(n, r) : u.appendChild(n)), r = u.nextSibling) : (u = c.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g")), u.appendChild(n));
            var w = a[s].Ef;
            w.u(f);
            w.Qk(h);
            w.Va() || (w.Rn(), w.u(k), n.id || (n.id = qc.Ha().Ia()), n.setAttribute("transform", "translate(" + -w.d + " " + -w.e + ")"), u.setAttribute("transform", "translate(" + w.d + " " + w.e + ")"), d = this.Ws(a[s], d,
                b), e.Yc(w))
        }
        for (; r;) r.firstChild && r.removeChild(r.firstChild), r = r.nextSibling;
        e.Tc(b)
    };
    g.Ws = function (a, b, c) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", "feImage");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + a.Dc.id);
        a.Ef.Tc(d);
        c.appendChild(d);
        if (!b) {
            var e = "bg";
            d.setAttribute("result", e);
            return e
        }
        e = "fg";
        d.setAttribute("result", e);
        switch (a.De) {
        case 2:
        case 4:
        case 5:
        case 3:
            d = Bd(Oc[a.De], e, b);
            break;
        case 13:
            d = this.Wq(c, b, e);
            break;
        case 12:
            d = this.Wq(c, e, b);
            break;
        case 7:
            d = Dd(0, 1, 1, 0, e, b);
            break;
        case 8:
            a = "-fg";
            c.appendChild(Ed(-1, 1, 0, 1, e, a));
            c.appendChild(Dd(0,
                1, 1, -1, a, b));
            d = this.fi(c, e, b);
            break;
        case 6:
            a = "-fg";
            c.appendChild(Ed(-1, 1, 0, 1, e, a));
            c.appendChild(Ed(1, 0, 0, 1, b, "*bg"));
            c.appendChild(Dd(0, 1, 1, -1, "*bg", a, "bg-fg"));
            c.appendChild(Ed(-1, 1, 0, 1, b, "-bg"));
            c.appendChild(Ed(1, 0, 0, 1, e, "*fg"));
            c.appendChild(Dd(0, 1, 1, -1, "-bg", "*fg", "fg-bg"));
            c.appendChild(Dd(0, 1, 1, 0, "bg-fg", "fg-bg"));
            d = this.Qj(c, e, b);
            break;
        default:
            d = Cd("over", e, b)
        }
        d.setAttribute("result", "bg");
        c.appendChild(d);
        return "bg"
    };
    g.Wq = function (a, b, c) {
        a.appendChild(Ed(1, 0, 0, 1, b, "blend"));
        a.appendChild(Ed(2, -1, 1, 0, c, "2bg"));
        a.appendChild(Bd("screen", "2bg", "blend", "blend"));
        a.appendChild(Ed(2, 0, 1, 0, c, "2bg"));
        a.appendChild(Bd("multiply", "2bg", "blend", "blend"));
        a.appendChild(Cd("in", "blend", b));
        return Cd("over", void 0, c)
    };
    g.Qj = function (a, b, c) {
        a.appendChild(Cd("in", void 0, c));
        return this.fi(a, b, c)
    };
    g.fi = function (a, b, c) {
        a.appendChild(Cd("atop", void 0, b));
        return Cd("over", void 0, c)
    };
    g.wd = function () {
        return this.wb.wd()
    };
    g.Lb = function () {
        return this.wb.Lb()
    };
    g.p = function () {
        this.wb.p()
    };
    hg.c(A, ug);
    hg.c($e, ug);
    hg.c(af, ug);
    hg.c(Kf, ug);
    var eg = new Ge("svg mask"),
        vg = function (a) {
            this.b = a;
            this.Lc = this.Pb = null;
            this.$n = dg.ud(this.b)
        };
    g = vg.prototype;
    g.Wa = function (a, b) {
        if (!this.va) {
            this.va = document.createElementNS("http://www.w3.org/2000/svg", "mask");
            this.va.setAttribute("maskUnits", "userSpaceOnUse");
            this.va.id = this.wd();
            this.vh = document.createElementNS("http://www.w3.org/2000/svg", "g");
            this.va.appendChild(this.vh);
            this.sa = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            this.sa.setAttribute("filterUnits", "userSpaceOnUse");
            this.sa.id = qc.Ha().Ia();
            var c = Ed(1, 1, 1, 0);
            this.sa.appendChild(c);
            this.va.appendChild(this.sa);
            this.vh.setAttribute("filter",
                "url(#" + this.sa.id + ")")
        }
        c = this.b;
        if (c.S & 16385) {
            var d = c.Ua().Ma,
                d = d.G();
            d.u(c.Z());
            d.Tc(this.va);
            d.Tc(this.sa)
        }
        this.$n.Wa(a | 4, b);
        c = this.$n.wh();
        d = this.vh.firstChild;
        d != c && (d ? (d.removeAttribute("filter"), this.vh.replaceChild(c, d)) : this.vh.appendChild(c));
        return this.va
    };
    g.wd = function () {
        null == this.Pb && (this.Pb = qc.Ha().Ia());
        return this.Pb
    };
    g.Qo = function () {
        null == this.Lc && (this.Lc = qc.Ha().Ia(), this.va && (this.va.firstChild.id = this.Lc));
        return this.Lc
    };
    g.Lb = function () {
        return this.b.Lb()
    };
    g.p = function () {
        Fb(this.sa)
    };
    eg.c(xf, vg);
    eg.c(zf, vg);
    eg.c(Df, vg);
    eg.c(mf, vg);
    eg.c(A, vg);
    eg.c($e, vg);
    eg.c(af, vg);
    var fg = new Ge("svg clipPath"),
        wg = function (a) {
            this.b = a;
            this.Lc = this.Pb = null;
            this.au = qg.ud(this.b)
        };
    g = wg.prototype;
    g.Wa = function () {
        if (!this.va) {
            this.va = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            this.va.id = this.wd();
            var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
            this.va.appendChild(a);
            this.Lc && (a.id = this.Lc)
        }
        var b = this.au.So(Sc),
            a = this.va.firstChild;
        a.setAttribute("d", b || "M 0 0");
        return this.va
    };
    g.wd = function () {
        null == this.Pb && (this.Pb = qc.Ha().Ia());
        return this.Pb
    };
    g.Qo = function () {
        null == this.Lc && (this.Lc = qc.Ha().Ia(), this.va && (this.va.firstChild.id = this.Lc));
        return this.Lc
    };
    g.Lb = function () {
        return this.b.Lb()
    };
    g.p = function () {
        Fb(this.va)
    };
    fg.c(xf, wg);
    fg.c(zf, wg);
    fg.c(Df, wg);
    fg.c(mf, wg);
    fg.c(A, wg);
    fg.c($e, wg);
    fg.c(af, wg);
    var xg = function (a, b, c) {
        a.setAttribute("type", "linear");
        a.setAttribute("slope", b);
        a.setAttribute("intercept", c)
    }, yg = function (a, b, c) {
            if (0 >= c) a.setAttribute("type", "linear"), a.setAttribute("slope", b), a.setAttribute("intercept", c), a.removeAttribute("tableValues");
            else {
                a.setAttribute("type", "table");
                a.removeAttribute("slope");
                a.removeAttribute("intercept");
                for (var d = "0", e = 1; 15 >= e; ++e) d += " ", d += Math.min(e * b / 15 + c, 1).toFixed(3);
                a.setAttribute("tableValues", d)
            }
        }, zg = function (a, b, c, d, e, f, h) {
            if (c != e || d != f)
                if (1 !=
                    c || 0 != d || b.parentNode) h(b, c, d / 255), b.parentNode || a.appendChild(b)
        }, Ag = function (a, b) {
            var c = null,
                d = null,
                e = null,
                f = null,
                h = null,
                k = null,
                n = new Uc(1, 0, 1, 0, 1, 0, 1, 0);
            return function () {
                var q = this.b.Eb();
                q.Ci() ? (c && c.parentNode && (Fb(c), a.removeAttribute("filter")), a.setAttribute("opacity", q.H.toFixed(3))) : (c || (c = document.createElementNS("http://www.w3.org/2000/svg", "filter"), c.id = qc.Ha().Ia(), b ? (c.setAttribute("filterUnits", "userSpaceOnUse"), b.Tc(c)) : (c.setAttribute("filterUnits", "objectBoundingBox"), c.setAttribute("x",
                        0), c.setAttribute("y", 0), c.setAttribute("width", 1), c.setAttribute("height", 1)), k = document.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer"), c.appendChild(k), d = document.createElementNS("http://www.w3.org/2000/svg", "feFuncR"), e = document.createElementNS("http://www.w3.org/2000/svg", "feFuncG"), f = document.createElementNS("http://www.w3.org/2000/svg", "feFuncB"), h = document.createElementNS("http://www.w3.org/2000/svg", "feFuncA"), h.setAttribute("type", "linear")), a.removeAttribute("opacity"),
                    c.parentNode || (a.appendChild(c), a.setAttribute("filter", "url(#" + c.id + ")")), zg(k, d, q.W, q.O, n.W, n.O, xg), zg(k, e, q.U, q.N, n.U, n.N, xg), zg(k, f, q.T, q.K, n.T, n.K, xg), zg(k, h, q.H, q.P, n.H, n.P, yg), n = q)
            }
        };
    var Bg = function (a) {
        this.b = a;
        this.Pb = this.Rd = this.Oa = this.Ub = this.lo = this.Li = this.Ll = this.Yd = this.pc = this.sa = null;
        this.Uo = 0;
        this.ih = 1;
        this.xd = [];
        this.Yk = !1
    };
    dg.c(Pe, Bg);
    g = Bg.prototype;
    g.wh = function () {
        return this.Ub
    };
    g.Gv = function (a) {
        return nd(a, this.b.Eb())
    };
    g.ro = function (a) {
        this.Ub || (this.Ub = this.Oa = this.Oc(a), this.Pb && (this.Oa.id = this.Pb));
        return this.Ub
    };
    g.Wa = function (a, b) {
        this.ro(a);
        var c = this.b.S;
        c && (this.Ee(a, c), this.Zb(a, c), this.Zt(c), this.b.S = 0);
        this.mj(b);
        return this.Ub
    };
    g.Zb = function () {};
    g.Ee = function (a, b) {
        this.ro(a);
        var c = this.b;
        c.hh ? b & 1048576 && this.Oe().setAttribute("pointer-events", "none") : a & 1 && !(c instanceof Ve) ? this.Oe().setAttribute("pointer-events", "visiblePainted") : b & 1048576 && this.Oe().removeAttribute("pointer-events");
        b & 8 && this.Oa.setAttribute("display", c.Fe ? "inline" : "none");
        b & 40960 && this.tt();
        b & 4096 && (b |= 8192);
        gg && b & 139264 && (c.Ii() && c.Tb() ? this.Oa.setAttribute("enable-background", "new") : this.Oa.removeAttribute("enable-background"));
        b & 8192 && this.st() && (b |= 2);
        b & 1 && (c.Sk &&
            0 == c.Z().Fo().angle && c.zb() ? this.vt() : this.Oa.setAttribute("transform", this.xl()));
        b & 2 ? lg && this.wt( !! (a & 4)) : this.sa && (b & 2048 || b & 16384) && this.oo( !! (a & 4));
        this.ut(b)
    };
    g.wt = function (a) {
        var b = "SourceGraphic",
            c = this.b.Na;
        this.sa && Eb(this.sa);
        this.ih = 1;
        for (var d = 0; d < c.length; ++d) c[d].Db(dg).pp(b, this.Wk()), b = "result", this.ih = Math.max(this.ih, c[d].op());
        this.pc && this.pc.Db(dg).pp(b, this.Wk());
        this.oo(a);
        this.sa && 0 < this.sa.childNodes.length ? this.Tf().setAttribute("filter", "url(#" + this.sa.id + ")") : this.Yd && this.Yd.removeAttribute("filter")
    };
    g.vt = function () {
        if (!this.Rd) {
            this.Rd = document.createElementNS("http://www.w3.org/2000/svg", "g");
            var a = document.createElementNS("http://www.w3.org/2000/svg", "defs");
            a.appendChild(this.Oa);
            this.Rd.appendChild(a);
            this.Oa.id && (this.Rd.id = this.Oa.id);
            this.Oa.id = qc.Ha().Ia();
            for (a = 0; 9 > a; a++) this.Xs(this.Rd, this.Oa.id);
            this.Ub = this.Oa = this.Rd
        }
        var b = this.Rd,
            c = this.b.Z(),
            a = this.b.Ua().Ma;
        b.setAttribute("transform", Sc.translate(c.i + a.d * (c.rd() - 1), c.j + a.e * (c.Pd() - 1)).toString());
        var d = a.D - a.d,
            e = a.C - a.e,
            f = this.b.Sk,
            h = [f.d - a.d, f.D - f.d, a.D - f.D],
            f = [f.e - a.e, f.C - f.e, a.C - f.C],
            k = [1, 0, 1],
            n = [1, 0, 1];
        h[0] + h[2] > Math.abs(d * c.rd()) ? k[0] = c.rd() * d / (h[0] + h[2]) : k[1] = 1 + (c.rd() - 1) * d / h[1];
        k[2] = k[0];
        f[0] + f[2] > Math.abs(e * c.Pd()) ? n[0] = c.Pd() * e / (f[0] + f[2]) : n[1] = 1 + (c.Pd() - 1) * e / f[1];
        n[2] = n[0];
        for (var c = [a.d * (1 - k[0]), (a.d + h[0]) * (1 - k[1]), h[1] * (k[1] - 1) + (a.d + h[1]) * (1 - k[0])], d = [a.e * (1 - n[0]), (a.e + f[0]) * (1 - n[1]), f[1] * (n[1] - 1) + (a.e + f[1]) * (1 - n[0])], b = b.childNodes, e = a.e, q = 0; 3 > q; q++) {
            for (var s = a.d, r = 0; 3 > r; r++) {
                var u = 2 * (r + 3 * q) + 1;
                this.Ys(b[u], b[u +
                    1], s, e, h[r], f[q], k[r], n[q], c[r], d[q]);
                s += h[r]
            }
            e += f[q]
        }
    };
    g.Ys = function (a, b, c, d, e, f, h, k, n, q) {
        a = a.childNodes[0];
        a.setAttribute("x", c);
        a.setAttribute("y", d);
        a.setAttribute("width", e);
        a.setAttribute("height", f);
        c = Sc.hm(h, k).translate(n, q);
        b.setAttribute("transform", c.toString())
    };
    g.Xs = function (a, b) {
        var c = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
        c.id = qc.Ha().Ia();
        var d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        c.appendChild(d);
        a.appendChild(c);
        d = document.createElementNS("http://www.w3.org/2000/svg", "use");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + b);
        d.setAttribute("clip-path", "url(#" + c.id + ")");
        a.appendChild(d)
    };
    g.Oe = function () {
        return this.Ub
    };
    g.xl = function () {
        return this.b.Z().toString()
    };
    g.Xf = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "g"),
            c = a.parentNode;
        c && c.replaceChild(b, a);
        b.appendChild(a);
        this.Ub == a && (this.Ub = b);
        return b
    };
    g.tt = function () {
        var a = this.b,
            b = a.Ge,
            c = this.Li;
        if (b) {
            c || (this.Li = c = this.Xf(this.Oa, "dynmask"));
            var d = !(b.Tb() && this.b.Tb()),
                e;
            e = d ? b.Db(fg) : b.Db(eg);
            if (a.getParent() != b.getParent()) {
                var f, h = this.lo;
                f = d ? "clipPath" : "mask";
                h && h.localName != f && (Fb(h), h = null);
                h ? (fb && !ub(10) && (h.id = qc.Ha().Ia()), f = h.firstChild) : (this.lo = h = document.createElementNS("http://www.w3.org/2000/svg", f), h.id = qc.Ha().Ia(), c.appendChild(h), f = document.createElementNS("http://www.w3.org/2000/svg", "use"), h.appendChild(f));
                f.setAttributeNS("http://www.w3.org/1999/xlink",
                    "xlink:href", "#" + e.Qo());
                b = b.getParent().qa();
                b = b.multiply(a.getParent().fc());
                f.setAttribute("transform", b.toString());
                a = h.id
            } else a = e.wd();
            d ? (c.removeAttribute("mask"), c.setAttribute("clip-path", "url(#" + a + ")")) : (c.removeAttribute("clip-path"), c.setAttribute("mask", "url(#" + a + ")"))
        } else c && (c.removeAttribute("mask"), c.removeAttribute("clip-path"))
    };
    g.mj = function (a) {
        var b = this.Ll;
        if (b || a.length) {
            var c = this.Uo;
            b || (this.Ll = b = this.Xf(this.Ub, "clip-path"), c = 1);
            for (var d = 0, e = Math.min(c, a.length); d < e;) b.setAttribute("clip-path", "url(#" + a[d].wd() + ")"), b = b.firstChild, ++d;
            if (a.length > e)
                for (e = a.length; d < e;) c = this.Xf(b, "clip-path"), c.setAttribute("clip-path", "url(#" + a[d].wd() + ")"), ++d;
            else if (c > e)
                for (e = c, b == this.Ll && (b.removeAttribute("clip-path"), b = b.firstChild, ++d); d < e;) {
                    var c = b.firstChild,
                        f = b.parentNode;
                    f && f.replaceChild(c, b);
                    b = c;
                    ++d
                }
            this.Uo = a.length
        }
    };
    g.wd = function () {
        l(this.Pb) || (this.Pb = qc.Ha().Ia(), this.Oa && (this.Oa.id = this.Pb));
        return this.Pb
    };
    g.p = function () {
        Fb(this.wh())
    };
    g.Wk = function () {
        null == this.sa && (this.sa = document.createElementNS("http://www.w3.org/2000/svg", "filter"), this.sa.setAttribute("filterUnits", "userSpaceOnUse"), this.sa.setAttribute("x", 0), this.sa.setAttribute("y", 0), this.sa.setAttribute("width", 0), this.sa.setAttribute("height", 0), this.sa.id = qc.Ha().Ia(), this.Tf().appendChild(this.sa));
        return this.sa
    };
    g.Tf = function () {
        null == this.Yd && (this.Yd = this.Xf(this.Li || this.Oa, "filter"));
        return this.Yd
    };
    g.at = function (a) {
        if (!fb || !gg) return a;
        if (1 >= this.b.hb()) return this.ng && (this.ng.removeAttribute("transform"), this.Ql.removeAttribute("transform")), a;
        var b = Sc,
            c = this.b;
        do c = c.getParent(), b = b.multiply(c.Z()); while (!c.Tb());
        b.Ed(Sc) ? this.ng && (this.ng.removeAttribute("transform"), this.Ql.removeAttribute("transform")) : (this.ng || (this.ng = this.Xf(this.Li || this.Oa, "ieforward"), this.Ql = this.Xf(this.Tf(), "ieinverse"), this.mg && this.Tf().appendChild(this.mg)), c = b.Bc(), this.ng.setAttribute("transform", b.toString()),
            this.Ql.setAttribute("transform", c.toString()), a = a.multiply(b));
        return a
    };
    g.bt = function () {
        null == this.mg && (this.mg = document.createElementNS("http://www.w3.org/2000/svg", "rect"), this.mg.setAttribute("opacity", 0), this.Tf().appendChild(this.mg));
        return this.mg
    };
    g.oo = function (a) {
        var b = this.b.getParent().fc(),
            b = this.at(b),
            c = this.b.ct(),
            d = this.Wk();
        if (c.Va()) d.setAttribute("width", 0), d.setAttribute("height", 0);
        else {
            var e = Math.ceil((c.D - c.d) / 20),
                f = Math.ceil((c.C - c.e) / 20),
                h = e,
                k = f;
            5E4 < e * f && (h = Math.floor(h / this.ih), k = Math.floor(k / this.ih));
            c = c.G();
            c.u(b);
            c.Tc(d);
            h < e ? d.setAttribute("filterRes", h + " " + k) : d.removeAttribute("filterRes");
            if (gb || fb || a) a = this.bt(), c.Tc(a)
        }
    };
    g.bu = function () {
        var a = this.b.getParent();
        return a ? a.fc().cd(0, 0) : Sc
    };
    g.ut = function (a) {
        var b = this.b.Na;
        if (b.length || this.pc) {
            for (var c = this.bu(), d = 0; d < b.length; ++d) b[d].Db(dg).Wa(a, c);
            this.pc && this.pc.Db(dg).Wa(a, c)
        }
    };
    g.st = function () {
        var a = this.b,
            b = a.Rk(),
            a = a.hb();
        gg || (a = Math.min(a, 1));
        if (lg && (1 < a || 1 == a && !b.Ci())) return this.pc ? this.pc.Vt(a) : (this.pc = new Cg(a), this.Yd && this.Yd.removeAttribute("opacity")), !0;
        b = b.H.toFixed(3);
        (1 != b || this.Yd) && this.Tf().setAttribute("opacity", b);
        return this.pc ? (this.pc = null, !0) : !1
    };
    g.Jh = function (a, b, c) {
        this.xd.push(function () {
            var d = this.Gv(c);
            a.setAttribute(b, d.toString());
            a.setAttribute(b + "-opacity", d.Qa.toFixed(3))
        })
    };
    g.Zt = function (a) {
        if (a & 4098) {
            a = this.xd;
            for (var b = 0; b < a.length; ++b) a[b].call(this);
            this.pc && this.pc.Db(dg).du(this.b.Rk())
        }
    };
    g.Lb = function () {};
    var Dg = function (a) {
        Bg.call(this, a);
        this.bd = []
    };
    t(Dg, Bg);
    dg.c(Te, Dg);
    g = Dg.prototype;
    g.Ee = function (a, b) {
        Dg.q.Ee.call(this, a, b);
        if (b & 256 && this.b.lh) {
            var c = this.Oe(),
                d;
            "createTouch" in document && !mg && (d = v(c, "touchmove", this.dl, !1, this), this.bd.push(d), d = v(c, "touchstart", this.uh, !1, this), this.bd.push(d));
            d = v(c, "mousemove", this.cl, !1, this);
            this.bd.push(d);
            d = v(c, "mousedown", this.Qi, !1, this);
            this.bd.push(d)
        }
    };
    g.cl = function (a) {
        this.b.a.qc(this.b, a);
        a.stopPropagation()
    };
    g.Qi = function (a) {
        2 != a.button && (this.b.a.qc(this.b, a), this.b.a.wl(), a.stopPropagation())
    };
    g.dl = function () {
        this.b.a.Wi(this.b) && (this.b.fireEvent(new Ee(13)), this.b.a.releaseCapture(this.b.a))
    };
    g.uh = function (a) {
        1 == a.Ud.touches.length && (this.b.a.ot(this.b, a), a.stopPropagation())
    };
    g.p = function () {
        Dg.q.p.call(this);
        for (var a = 0; a < this.bd.length; a++) ac(this.bd[a])
    };
    var Eg = function (a, b) {
        this.F = a;
        this.Ub = b;
        this.Yb = []
    };
    Eg.prototype.Wa = function (a) {
        this.im();
        for (var b = [], c = this.F.oa, d = null; c;) {
            for (; 0 < b.length && c.depth > b[b.length - 1].Lb();) b.pop();
            var e = ig(c);
            this.Yb.push(c);
            var f = e.Wa(a, b),
                d = Fd(this.Ub, d, f);
            !c.nh() || c instanceof mf || b.push(e);
            c = c.nextSibling
        }
        Gd(this.Ub, d)
    };
    Eg.prototype.im = function () {
        for (var a = this.Yb.length - 1; 0 <= a; --a) {
            var b = this.Yb[a];
            b.Sd() && b.cg()
        }
        this.Yb = []
    };
    Eg.prototype.p = function () {
        for (var a = 0; a < this.Yb.length; ++a) this.Yb[a].cg()
    };
    var Fg = function (a) {
        Dg.call(this, a);
        this.nj = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.Lh = new Eg(a.F, this.nj)
    };
    t(Fg, Dg);
    dg.c(Ve, Fg);
    Fg.prototype.Xo = function (a) {
        this.b instanceof $e ? a &= -2 : this.b.isEnabled() && this.b.getParent() != this.b.a.B && (a |= 1);
        return a
    };
    Fg.prototype.Zb = function (a, b) {
        Fg.q.Zb.call(this, a, b);
        a = this.Xo(a);
        b & 65552 && this.Lh.Wa(a)
    };
    Fg.prototype.p = function () {
        Fg.q.p.call(this);
        this.Lh.p()
    };
    Fg.prototype.Oc = function () {
        return this.nj
    };
    var tg = function (a, b) {
        this.wb = a;
        this.De = 0;
        this.Ef = new Yc;
        this.Dc = b;
        this.Ch = null;
        this.S = 0
    };
    var Gg = function (a) {
        Fg.call(this, a);
        this.hq = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.Np = new Eg(a.Le, this.hq)
    };
    t(Gg, Fg);
    dg.c($e, Gg);
    dg.c(af, Gg);
    Gg.prototype.Oc = function (a) {
        var b = Gg.q.Oc.call(this, a),
            c = this.Np;
        c.Wa(a | 1);
        this.Im = this.hq.cloneNode(!0);
        sd(this.Im);
        a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.appendChild(this.Im);
        a.appendChild(b);
        return a
    };
    Gg.prototype.Oe = function () {
        return this.Im
    };
    Gg.prototype.p = function () {
        Gg.q.p.call(this);
        this.Np.p()
    };
    var Hg = function (a) {
        Bg.call(this, a)
    };
    t(Hg, Bg);
    dg.c(mf, Hg);
    g = Hg.prototype;
    g.Zb = function (a, b) {
        Hg.q.Zb.call(this, a, b);
        if (b & 224) {
            Eb(this.ej);
            this.xd.splice(this.Jo, Number.POSITIVE_INFINITY);
            this.b.Xk(this);
            var c = this.b.sd;
            c.Tc(this.Se);
            c.Tc(this.Io);
            this.b.fh ? this.Se.removeAttribute("opacity") : this.Se.setAttribute("opacity", 0)
        }
        for (c = this.Jo; c < this.xd.length; ++c) this.xd[c].call(this)
    };
    g.Ri = function (a, b, c, d, e) {
        var f = this.ej,
            h = f;
        if (a.format.url) {
            var k = document.createElementNS("http://www.w3.org/2000/svg", "a");
            k.setAttribute("pointer-events", "visible");
            k.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.format.url);
            a.format.fq && k.setAttribute("target", a.format.fq);
            h = k;
            f.appendChild(k)
        }
        a.format.Bh() ? this.Yv(a, b, c, d, e, h) : (a = this.Zv(a, b, c, d, e), h.appendChild(a))
    };
    g.Oc = function () {
        var a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.xd = [];
        this.ej = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.Se = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.Jh(this.Se, "fill", 4294967295);
        this.Jh(this.Se, "stroke", 4278190080);
        this.Se.setAttribute("stroke-width", "10");
        var b = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"),
            c = qc.Ha().Ia();
        b.setAttribute("id", c);
        this.Io = document.createElementNS("http://www.w3.org/2000/svg",
            "rect");
        b.appendChild(this.Io);
        a.appendChild(b);
        this.ej.setAttribute("clip-path", "url(#" + c + ")");
        a.appendChild(this.Se);
        a.appendChild(this.ej);
        this.Jo = this.xd.length;
        return a
    };
    g.Zv = function (a, b, c, d) {
        var e = document.createElementNS("http://www.w3.org/2000/svg", "text");
        e.setAttribute("fill-rule", "nonzero");
        e.setAttribute("style", "white-space:pre");
        e.setAttribute("font-size", 20 * a.format.Xl());
        var f = a.text;
        a.format.font ? e.setAttribute("font-family", a.format.Vl()) : e.removeAttribute("font-family");
        e.setAttribute("y", c + 0.9 * d);
        e.setAttribute("x", b);
        a.format.bold && e.setAttribute("font-weight", "bold");
        a.format.italic && e.setAttribute("font-style", "italic");
        a.format.letterSpacing &&
            e.setAttribute("letter-spacing", a.format.letterSpacing);
        e.appendChild(document.createTextNode(String(f)));
        a.format.fb && e.setAttribute("text-decoration", "underline");
        this.Jh(e, "fill", a.format.color);
        return e
    };
    g.Yv = function (a, b, c, d, e, f) {
        var h = a.format.font;
        h instanceof cf && h.ascent && h.emSquareSize && (h = 20 * a.format.size / h.emSquareSize, b = a.Gl(b, c, d, e), c = document.createElementNS("http://www.w3.org/2000/svg", "path"), c.setAttribute("transform", "scale(" + h + ")"), c.setAttribute("d", b.join(" ")), this.Jh(c, "fill", a.format.color), f.appendChild(c))
    };
    var ne = function (a, b, c, d, e) {
        this.wb = a;
        this.Dc = b;
        this.name = c;
        this.value = d;
        this.Km = [];
        this.Xq = e;
        this.me = 0;
        d && !d.Re && (this.me |= 512)
    };
    g = ne.prototype;
    g.ax = function (a, b) {
        var c = new this.constructor(this.wb, a, this.name, this.value, b);
        this.Km.push(c);
        c.Sm(this.Tm)
    };
    g.set = function (a) {
        this.Dc.setAttribute(this.name, a.toString())
    };
    g.Sm = function (a) {
        a = this.Xq ? this.Xq(a) : a;
        this.set(a)
    };
    g.apply = function () {
        this.Tm = this.value.xa(this);
        this.Sm(this.Tm);
        for (var a = 0; a < this.Km.length; a++) this.Km[a].Sm(this.Tm)
    };
    g.Xa = function () {
        return this.wb.b.Xa() / 65535
    };
    var Ce = function (a, b, c, d) {
        ne.call(this, a, b, c, d);
        this.me |= 2048
    };
    t(Ce, ne);
    Ce.prototype.set = function (a) {
        var b = this.wb.b.qa(),
            b = 20 / ((b.rd() + b.Pd()) / 2);
        this.Dc.setAttribute(this.name, a < b ? b : a)
    };
    var ke = function (a, b, c, d) {
        ne.call(this, a, b, c, d);
        this.opacity = ("-color" == c.slice(-6) ? c.slice(0, -6) : c) + "-opacity";
        this.me |= 4096
    };
    t(ke, ne);
    ke.prototype.set = function (a) {
        a = this.wb.b.Eb().apply(a);
        this.Dc.setAttribute(this.name, a.toString());
        this.Dc.setAttribute(this.opacity, a.Qa.toFixed(3))
    };
    var Ig = function (a) {
        Bg.call(this, a);
        this.fj = [];
        this.gj = [];
        this.Oh = [];
        this.kb = this.kg = this.lm = null
    };
    t(Ig, Bg);
    dg.c(xf, Ig);
    g = Ig.prototype;
    g.Oc = function (a) {
        this.lm = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.Gq(a);
        return this.lm
    };
    g.Gq = function (a) {
        this.kb = this.ft(this.b.a.Uc.Vf);
        this.Yk = void 0;
        this.fo(a)
    };
    g.iu = function () {
        var a = this.b.definition;
        if (!this.kg) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "image");
            b.setAttribute("width", a.$k);
            b.setAttribute("height", a.Zk);
            b.setAttribute("x", a.Oi);
            b.setAttribute("y", a.Pi);
            b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.Mi);
            this.kg = b
        }
        return this.kg
    };
    g.ft = function (a) {
        this.xd = [];
        for (var b = this.b.definition, c = b.paths, d = [], e = b.fillstyles, f = 0; f < e.length; f++)
            if (e[f]) {
                var h = e[f].mc(b.bounds, this);
                null != h && (this.fj[f] = h, a.appendChild(h))
            }
        e = b.linestyles;
        for (f = 0; f < e.length; f++) e[f] && (h = e[f].mc(b.bounds, this), null != h && (this.gj[f] = h, a.appendChild(h)));
        a = b.bounds && b.bounds.length ? b.bounds[0] : void 0;
        for (f = 0; f < c.length; f++) {
            var e = c[f],
                h = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                k = this.setAttribute(h, "d", e.data, ne);
            null != e.line && (h = b.linestyles[e.line].We(this,
                e, k, h, this.gj[e.line], "stroke"));
            if (null != e.fill) {
                var n = b.fillstyles[e.fill],
                    h = n.We(this, e, k, h, this.fj[e.fill], "fill");
                n.Jj && this.xd.push(Ag(h, a))
            } else h.setAttribute("fill", "none");
            d.push(h)
        }
        if (1 == d.length) h = d[0];
        else
            for (h = document.createElementNS("http://www.w3.org/2000/svg", "g"), f = 0; f < d.length; f++) h.appendChild(d[f]);
        return h
    };
    g.Xa = function () {
        return this.b.Xa() / 65535
    };
    g.setAttribute = function (a, b, c, d) {
        a = new d(this, a, b, c);
        a.apply();
        d == ne && c.Re || !a.me || this.Oh.push(a);
        return a
    };
    g.p = function () {
        Ig.q.p.call(this);
        for (var a = 0; a < this.fj.length; a++) Fb(this.fj[a]);
        for (a = 0; a < this.gj.length; a++) Fb(this.gj[a]);
        this.Oh = []
    };
    g.fo = function (a) {
        var b = this.lm;
        b && (a = 0 == (a & 1) && 0 == (a & 2) && this.b.sm(), this.Yk != a && (b.firstChild && b.removeChild(b.firstChild), a ? b.appendChild(this.iu()) : b.appendChild(this.kb), this.Yk = a))
    };
    g.Zb = function (a, b) {
        Ig.q.Zb.call(this, a, b);
        this.fo(a);
        for (var c = 0; c < this.Oh.length; c++) b & this.Oh[c].me && this.Oh[c].apply()
    };
    var Jg = function (a) {
        Ig.call(this, a)
    };
    t(Jg, Ig);
    dg.c(zf, Jg);
    Jg.prototype.Zb = function (a, b) {
        b & 1024 && this.Gq(0);
        Jg.q.Zb.call(this, a, b)
    };
    var Kg = function (a) {
        Bg.call(this, a);
        this.kh = !1;
        this.b.s(1)
    };
    t(Kg, Bg);
    dg.c(Df, Kg);
    g = Kg.prototype;
    g.Oc = function () {
        return this.kx()
    };
    g.kx = function () {
        var a = document.createElementNS("http://www.w3.org/2000/svg", "g");
        a.setAttribute("fill-rule", "nonzero");
        a.setAttribute("opacity", 1);
        for (var b = this.b.definition, c = 0; c < b.records.length; c++) {
            var d = b.records[c],
                e = b.il(c),
                f = document.createElementNS("http://www.w3.org/2000/svg", "path");
            f.setAttribute("d", e.toString());
            a.appendChild(f);
            this.Jh(f, "fill", d.color)
        }
        return a
    };
    g.Oe = function () {
        var a = this.ju;
        if (!a) {
            var b = this.Oa,
                a = this.b.definition;
            if (1 === a.mode) {
                var c = a.bounds,
                    a = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                c.Tc(a);
                sd(a);
                b.appendChild(a)
            } else a = b;
            this.ju = a
        }
        return a
    };
    g.Ee = function (a, b) {
        var c = this.b;
        if (b & 2048) {
            var d = c.qa(),
                e = c.a.B.Df,
                c = c.Ua().Ma.G();
            c.u(e);
            c.u(d);
            1 > c.width() || 1 > c.height() ? this.kh || (this.kh = !0, b |= 1) : this.kh && (this.kh = !1, b |= 1)
        }
        Kg.q.Ee.call(this, a, b)
    };
    g.xl = function () {
        return this.kh ? "scale(0)" : Kg.q.xl.call(this)
    };
    var Lg = function (a) {
        Fg.call(this, a)
    };
    t(Lg, Fg);
    dg.c(A, Lg);
    Lg.prototype.Oc = function (a) {
        return Lg.q.Oc.call(this, a)
    };
    Lg.prototype.Oe = function () {
        return this.wh()
    };
    var Mg = function (a) {
        Fg.call(this, a);
        this.Rf = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    };
    t(Mg, Lg);
    dg.c(Kf, Mg);
    Mg.prototype.Oc = function (a) {
        a = Mg.q.Oc.call(this, a);
        var b = document.createElementNS("http://www.w3.org/2000/svg", "g");
        b.appendChild(this.Rf);
        b.appendChild(a);
        return b
    };
    Mg.prototype.Ee = function (a, b) {
        if (b & 524288) {
            var c = this.b,
                d = c.Gi;
            this.Rf.setAttribute("x", d.i);
            this.Rf.setAttribute("y", d.j);
            this.Rf.setAttribute("width", d.k * (c.Be + c.Ac));
            this.Rf.setAttribute("height", d.g * (c.Ce + c.zc));
            this.Rf.setAttribute("fill", c.backgroundColor)
        }
        Mg.q.Ee.call(this, a, b)
    };
    var Ng = function (a) {
        this.a = a;
        this.kb = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.kb.setAttribute("color-interpolation-filters", "sRGB");
        this.kb.setAttribute("fill-rule", "evenodd");
        this.kb.setAttribute("pointer-events", "none");
        this.kb.setAttribute("width", "100%");
        this.kb.setAttribute("height", "100%");
        this.kb.style.MozUserSelect = "none";
        this.kb.style.webkitUserSelect = "none";
        this.kb.style.sy = "none";
        this.kb.style.ty = "none";
        this.kb.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.kb.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.Il = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.kb.appendChild(this.Il);
        this.Vf = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.kb.appendChild(this.Vf)
    };
    dg.On(Ng);
    g = Ng.prototype;
    g.bi = function (a) {
        a.appendChild(this.kb)
    };
    g.tn = function (a) {
        this.Vf.appendChild(a.Vf)
    };
    g.Kl = function (a) {
        this.Il.setAttribute("transform", a.toString())
    };
    g.Jl = function () {
        var a = ig(this.a.B),
            b = this.Il,
            a = a.Wa(0, []),
            c = b.firstChild;
        c != a && (c ? b.replaceChild(a, c) : b.appendChild(a))
    };
    g.p = function () {
        this.a.B.cg()
    };
    g.Al = function (a) {
        a = a.toDataURL("image/png");
        return "data:image/png" == a.substr(0, 14) ? a : null
    };
    g.Xm = function (a, b) {
        if ("createTouch" in document && !mg) {
            v(a, "touchstart", this.uh, !1, this);
            v(a, "touchmove", this.kp, !1, this);
            v(a, "touchend", this.Nl, !1, this);
            var c = v(document, "touchstart", this.Ol, !1, this);
            b.push(c)
        }
        v(a, "mousemove", this.kp, !1, this);
        v(a, "mousedown", this.Mt, !1, this);
        v(a, "mouseup", this.Ot, !1, this);
        v(a, "mouseout", this.Nt, !1, this);
        v(a, "mouseover", function (a) {
            a.stopPropagation()
        }, !1);
        c = v(document, "mousedown", this.a.Zo, !1, this.a);
        b.push(c);
        c = v(document, "mouseup", this.a.$o, !1, this.a);
        b.push(c);
        c = v(document, "mouseover", function (a) {
            this.qc(null, a)
        }, !1, this.a);
        b.push(c)
    };
    g.uh = function (a) {
        this.a.qc(null, a);
        this.a.em(a)
    };
    g.Ol = function (a) {
        this.a.qc(null, a)
    };
    g.kp = function (a) {
        a.stopPropagation();
        this.a.qc(null, a)
    };
    g.Nl = function (a) {
        a.stopPropagation();
        this.a.gm()
    };
    g.Mt = function (a) {
        a.stopPropagation();
        this.a.em(a)
    };
    g.Ot = function (a) {
        2 != a.button && (a.stopPropagation(), this.a.gm())
    };
    g.Nt = function (a) {
        var b;
        if (!(b = !a.relatedTarget)) {
            b = this.a.Vb;
            var c = a.relatedTarget;
            if (b.contains && 1 == c.nodeType) b = b == c || b.contains(c);
            else if ("undefined" != typeof b.compareDocumentPosition) b = b == c || Boolean(b.compareDocumentPosition(c) & 16);
            else {
                for (; c && b != c;) c = c.parentNode;
                b = c == b
            }
            b = !b
        }
        b && this.a.qc(null, a)
    };
    var Og = function (a) {
        Bg.call(this, a);
        this.kg = null
    };
    t(Og, Bg);
    dg.c(Ze, Og);
    Og.prototype.Oc = function () {
        return document.createElementNS("http://www.w3.org/2000/svg", "g")
    };
    Og.prototype.Xa = function () {
        return 1
    };
    Og.prototype.Xu = function () {
        var a = this.kg;
        a || (a = this.kg = document.createElementNS("http://www.w3.org/2000/svg", "image"), this.Oa.appendChild(a));
        var b = this.b.Ob;
        a.setAttribute("width", 20 * b.ka());
        a.setAttribute("height", 20 * b.jb());
        a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.Wt())
    };
    Og.prototype.Zb = function (a, b) {
        Og.q.Zb.call(this, a, b);
        b && this.Xu()
    };
    var Pg = function (a) {
        this.b = a;
        this.Jd = null
    };
    qg.c(Pe, Pg);
    Pg.prototype.de = function () {
        return ""
    };
    Pg.prototype.So = function (a) {
        if (this.b.S) return this.Jd = null, this.b.S = 0, this.de(a);
        null == this.Jd && (this.Jd = this.de(a));
        return this.Jd
    };
    Pg.prototype.p = function () {};
    var Qg = function (a) {
        Pg.call(this, a)
    };
    t(Qg, Pg);
    qg.c(Ve, Qg);
    qg.c($e, Qg);
    qg.c(af, Qg);
    qg.c(A, Qg);
    Qg.prototype.de = function (a) {
        a = this.b.Z().multiply(a);
        for (var b = "", c = this.b.F.oa; c;) b += c.Db(qg).So(a), c = c.nextSibling;
        return b
    };
    var Rg = function (a) {
        Pg.call(this, a);
        this.Ea = this.Ej = null
    };
    t(Rg, Pg);
    qg.c(mf, Rg);
    Rg.prototype.de = function (a) {
        this.Ej = "";
        this.Ea = a;
        this.b.Xk(this);
        return this.Ej
    };
    Rg.prototype.Ri = function (a, b, c, d, e) {
        var f = a.format.font;
        if (f instanceof cf && f.ascent && f.emSquareSize)
            for (f = 20 * a.format.size / f.emSquareSize, f = this.b.Z().hm(f, f).multiply(this.Ea), a = a.Gl(b, c, d, e), b = 0; b < a.length; b++) this.Ej += a[b].tj(f)
    };
    var Sg = function (a) {
        Pg.call(this, a)
    };
    t(Sg, Pg);
    qg.c(xf, Sg);
    qg.c(zf, Sg);
    Sg.prototype.de = function (a) {
        var b = this.b.definition;
        a = this.b.Z().multiply(a);
        var c = "";
        if (0 == this.b.Xa()) c = b.de().tj(a);
        else
            for (var d = 0; d < b.paths.length; d++)
                if (null != b.paths[d].fill) var e = b.paths[d].data.xa(this),
        c = c + e.tj(a);
        return c
    };
    Sg.prototype.Xa = function () {
        return this.b.Xa() / 65535
    };
    var Tg = function (a) {
        Pg.call(this, a)
    };
    t(Tg, Pg);
    qg.c(Df, Tg);
    Tg.prototype.de = function (a) {
        for (var b = this.b.definition, c = b.records, d = new $c, e = 0; e < c.length; e++) var f = b.il(e),
        d = d.concat(f);
        a = this.b.Z().multiply(a);
        return d.tj(a)
    };
    var Oe = new Ge("canvas");
    ba("swiffy.CANVAS", Oe, void 0);
    var Ug = function (a) {
        this.b = a;
        this.Di = null
    };
    Oe.c(Pe, Ug);
    g = Ug.prototype;
    g.gc = function (a, b) {
        var c = !0;
        b & 16 && this.b.Z().Kt() ? (this.hp(a), c = this.Vc(a, b), this.Jt(a)) : b & 16 || !(this.b.Fe || b & 8) || (a.save(), this.mj(a, b), this.hp(a), !this.b.Tb() || b & 8 ? (c = this.Vc(a, b), this.Di = null) : c = this.Lt(a, b), a.restore());
        b & 8 || (this.b.S = 0);
        return c
    };
    g.Lt = function (a, b) {
        var c = !0,
            d = this.b.Ua().Ma.G(),
            e = this.b.a,
            f = e.B.Df,
            f = f.translate(-e.B.Be, -e.B.Ce),
            f = this.b.qa().multiply(f);
        d.u(f);
        e = new Yc(0, 0, e.B.Ac, e.B.zc);
        d.Qk(e);
        d.Rn();
        var e = d.width(),
            h = d.height();
        if (0 < e && 0 < h) {
            var k = this.Di,
                n = this.b.Rk();
            if (this.b.S) {
                k ? k.getContext("2d").clearRect(0, 0, k.width, k.height) : this.Di = k = document.createElement("canvas");
                k.width = e;
                k.height = h;
                var q = k.getContext("2d");
                this.b.backgroundColor && (q.fillStyle = this.b.backgroundColor, q.fillRect(0, 0, e, h));
                q.translate(-d.d, -d.e);
                f.ib(q);
                c = this.Vc(q, b);
                this.Us(q, e, h);
                if (!n.Ci()) {
                    for (var s = q.getImageData(0, 0, e, h), r = s.data, u = r.length, w = n.W, C = n.O, H = n.U, $a = n.N, Ia = n.T, Yb = n.K, Da = n.H, Sa = n.P, J = 0; J < u; J += 4) r[J + 3] && (r[J + 0] = r[J + 0] * w + C, r[J + 1] = r[J + 1] * H + $a, r[J + 2] = r[J + 2] * Ia + Yb, r[J + 3] = r[J + 3] * Da + Sa);
                    q.putImageData(s, 0, 0)
                }
            }
            f.Bc().ib(a);
            n.Ci() && (a.globalAlpha = n.dh(a.globalAlpha));
            switch (this.b.hb()) {
            case 7:
                Vg(a, d.d, d.e, k.getContext("2d"), e, h, 1, a.globalAlpha);
                break;
            case 8:
                Vg(a, d.d, d.e, k.getContext("2d"), e, h, -1, a.globalAlpha);
                break;
            default:
                a.globalCompositeOperation =
                    this.Vs(), a.drawImage(k, d.d, d.e)
            }
        } else this.Di = null;
        return c
    };
    g.Vs = function () {
        var a = this.b.hb();
        switch (a) {
        case 2:
        case 4:
        case 5:
        case 3:
        case 12:
        case 6:
            return Oc[a];
        case 13:
            return "hard-light";
        default:
            return "source-over"
        }
    };
    g.Vc = function () {
        return !1
    };
    g.hp = function (a) {
        this.b.Z().ib(a)
    };
    g.Jt = function (a) {
        this.b.Z().Bc().ib(a)
    };
    g.Us = function (a, b, c) {
        for (var d = this.b.Na, e = 0; e < d.length; ++e) d[e].Db(Oe).apply(a, b, c)
    };
    g.p = function () {};
    g.Lb = function () {
        return this.b.Lb()
    };
    g.mj = function (a, b) {
        var c = this.b,
            d = c.Ge;
        if (d) {
            var e = d.Db(Oe),
                f = c.getParent() != d.getParent(),
                h = null;
            f && (h = d.getParent().qa(), h = h.multiply(c.getParent().fc()), h.ib(a));
            d.xj() && this.b.xj() ? (e.gc(a, b), a.globalCompositeOperation = "source-in") : (a.beginPath(), e.gc(a, 16 | b), a.clip());
            f && h.Bc().ib(a)
        }
    };
    var Wg = function (a) {
        Ug.call(this, a)
    };
    t(Wg, Ug);
    Oe.c(Te, Wg);
    Wg.prototype.gc = function (a, b) {
        b & 8 || !this.b.lh || this.b.a.Uc.dt(this.b);
        return Wg.q.gc.call(this, a, b)
    };
    var Yg = function (a) {
        Ug.call(this, a);
        this.Lh = new Xg(a.F)
    };
    t(Yg, Wg);
    Oe.c(Ve, Yg);
    Oe.c(A, Yg);
    Oe.c(Kf, Yg);
    Oe.c(pg, Yg);
    Yg.prototype.Vc = function (a, b) {
        return this.Lh.gc(a, b)
    };
    Yg.prototype.p = function () {
        Yg.q.p.call(this);
        this.Lh.p()
    };
    var Zg = function (a) {
        this.a = a;
        this.dj = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        this.zh = []
    };
    Oe.On(Zg);
    g = Zg.prototype;
    g.Kl = function (a) {
        this.Cc = a
    };
    g.bi = function (a) {
        a.appendChild(this.dj)
    };
    g.Xm = function (a, b) {
        if ("createTouch" in document && !mg) {
            v(a, "touchstart", this.uh, !1, this);
            v(a, "touchmove", this.dl, !1, this);
            v(a, "touchend", this.Nl, !1, this);
            var c = v(document, "touchstart", this.Ol, !1, this);
            b.push(c)
        }
        v(a, "mousemove", this.cl, !1, this);
        v(a, "mousedown", this.Qi, !1, this);
        v(a, "mouseup", this.fp, !1, this);
        v(a, "mouseout", this.It, !1, this);
        v(a, "mouseover", function (a) {
            a.stopPropagation()
        }, !1);
        c = v(document, "mousedown", this.a.Zo, !1, this.a);
        b.push(c);
        c = v(document, "mouseup", this.a.$o, !1, this.a);
        b.push(c);
        c = v(document, "mouseover", function (a) {
            this.qc(null, a)
        }, !1, this.a);
        b.push(c)
    };
    g.cl = function (a) {
        a.stopPropagation();
        a = this.a.vj(a);
        this.a.wj(this.zp(a), a.x, a.y)
    };
    g.Qi = function (a) {
        a.stopPropagation();
        if (2 != a.button) {
            a = this.a.vj(a);
            var b = this.zp(a);
            b && this.a.wj(b, a.x, a.y);
            this.a.wl()
        }
    };
    g.zp = function (a) {
        for (var b = this.zh.length - 1; 0 <= b; b--) {
            var c = this.zh[b];
            if (c.sh && c !== this.a.Pa)
                if (c instanceof $e) {
                    if (c.hl(a.x, a.y)) return c
                } else {
                    var d = c.Ua().Wc().G();
                    d.u(c.qa());
                    if (d.contains(a.x, a.y) && c.hl(a.x, a.y)) return c
                }
        }
        return null
    };
    g.fp = function (a) {
        a.stopPropagation();
        2 != a.button && this.a.gm()
    };
    g.It = function (a) {
        a.stopPropagation();
        a = this.a.vj(a);
        this.a.wj(null, a.x, a.y)
    };
    g.uh = function (a) {
        this.a.qc(null, a);
        this.Qi(a)
    };
    g.Ol = function (a) {
        this.a.qc(null, a)
    };
    g.dl = function (a) {
        this.a.qc(null, a);
        a.stopPropagation()
    };
    g.Nl = function (a) {
        this.fp(a)
    };
    g.dt = function (a) {
        this.zh.push(a)
    };
    g.St = function (a) {
        a = this.zh.indexOf(a); - 1 != a && this.zh.splice(a, 1)
    };
    g.tn = function () {};
    g.Jl = function () {
        var a = this.a;
        this.dj.width = a.B.Ac;
        this.dj.height = a.B.zc;
        var b = this.dj.getContext("2d");
        this.qt(b);
        this.Cc && this.Cc.ib(b);
        a.B.Db(Oe).gc(b, 0)
    };
    g.qt = function (a) {
        var b = this.a;
        /rgba.*|hsla.*|transparent/.test(b.B.backgroundColor) && a.clearRect(0, 0, b.B.Ac, b.B.zc);
        a.beginPath();
        a.rect(0, 0, b.B.Ac, b.B.zc);
        a.fillStyle = b.B.backgroundColor;
        a.fill()
    };
    g.Al = function (a) {
        return a
    };
    g.p = function () {
        Zg.q.p.call(this);
        this.a.B.cg()
    };
    var Xg = function (a) {
        this.F = a;
        this.Yb = []
    };
    g = Xg.prototype;
    g.gc = function (a, b) {
        this.im();
        for (var c = [], d = this.F.oa, e = !0; d;) {
            for (; 0 < c.length && d.depth > c[c.length - 1];) c.pop(), a.restore();
            var f;
            b & 8 ? f = Oe.ud(d) : (f = d.Db(Oe), this.Yb.push(d));
            var h = !(b & 16) && d.nh(),
                k = !d.ub && !(h && d instanceof mf);
            !h || d instanceof mf ? k && (e = f.gc(a, b) && e) : (a.save(), a.beginPath(), e = f.gc(a, b | 16) && e, a.clip(), c.push(f.Lb()));
            d = d.nextSibling
        }
        for (d = 0; d < c.length; d++) a.restore();
        return e
    };
    g.im = function () {
        for (var a = this.Yb.length - 1; 0 <= a; --a) {
            var b = this.Yb[a];
            b.Sd() && b.cg()
        }
        this.Yb = []
    };
    g.p = function () {
        for (var a = 0; a < this.Yb.length; ++a) {
            var b = this.Yb[a];
            b.cg();
            b.a.Uc.St(b)
        }
    };
    g.mj = function () {};
    g.Lb = function () {};
    var $g = function (a) {
        Ug.call(this, a)
    };
    t($g, Ug);
    Oe.c(xf, $g);
    Oe.c(zf, $g);
    g = $g.prototype;
    g.Vc = function (a, b) {
        return b & 16 ? this.mu(a) : b & 8 || !this.b.sm() ? this.ou(a) : this.nu(a)
    };
    g.mu = function (a) {
        for (var b = this.b.definition, c = 0; c < b.paths.length; c++) b.paths[c].data.xa(this).be(a);
        return !0
    };
    g.nu = function (a) {
        var b = this.b.definition;
        a.globalAlpha = this.b.Eb().dh(a.globalAlpha);
        a.drawImage(b.Mi, b.Oi, b.Pi, b.$k, b.Zk);
        return !0
    };
    g.ou = function (a) {
        for (var b = this.b.definition, c = !0, d = 0; d < b.paths.length; d++) {
            var e = b.paths[d],
                f = e.data.xa(this),
                h = null != e.line ? b.linestyles[e.line] : null,
                e = null != e.fill ? b.fillstyles[e.fill] : null;
            a.beginPath();
            f.be(a);
            e && (a.save(), c = e.ib(a, this, f, this.b.Eb()) && c, a.restore());
            h && (c = h.ib(a, this, f, this.b.Eb(), this.b.qa()) && c)
        }
        return c
    };
    g.Xa = function () {
        return this.b.Xa() / 65535
    };
    var ah = function (a) {
        Ug.call(this, a)
    };
    t(ah, Ug);
    Oe.c(mf, ah);
    ah.prototype.Vc = function (a, b) {
        if (!(b & 16)) {
            a.beginPath();
            var c = this.b.sd;
            a.rect(c.d, c.e, c.D - c.d, c.C - c.e);
            this.b.fh && (c = nd(4294967295), c = this.b.Eb().apply(c), a.fillStyle = c.Ec(), a.fill(), c = nd(4278190080), this.b.Eb().apply(c), a.strokeStyle = nd(4278190080).Ec(), a.lineWidth = 10, a.stroke())
        }
        this.Ri = na(bh, this, a, !! (b & 16), this.b);
        this.b.Xk(this);
        return !0
    };
    ah.prototype.Ri = function () {};
    var bh = function (a, b, c, d, e, f, h, k) {
        if (d.format.Bh()) {
            if (c = d.format.font, c instanceof cf && c.ascent && c.emSquareSize) {
                c = 20 * d.format.size / c.emSquareSize;
                e = d.Gl(e, f, h, k);
                a.save();
                a.scale(c, c);
                for (f = 0; f < e.length; f++) h = e[f], b ? h.be(a) : (a.beginPath(), h.be(a), k = nd(d.format.color, this.b.Eb()), a.fillStyle = k.Ec(), a.fill());
                a.restore()
            }
        } else b = "", d.format.bold && (b += "bold "), d.format.italic && (b += "italic "), b += 20 * d.format.Xl() * c.qa().rd() + "px", k = nd(d.format.color), k = this.b.Eb().apply(k), b = d.format.font ? b + (" " + d.format.Vl()) :
            b + " sans-serif", a.font = b, a.fillStyle = k.Ec(), a.fillText(d.text, e, f + h)
    };
    var ch = function (a) {
        Ug.call(this, a)
    };
    t(ch, Ug);
    Oe.c(Df, ch);
    ch.prototype.Vc = function (a, b) {
        for (var c = this.b.definition, d = 0; d < c.records.length; d++) {
            var e = c.records[d],
                f = c.il(d);
            this.lt(f, e.color, a, !! (b & 16))
        }
        b & 8 && 1 === c.mode && (c = c.bounds, c.Va() || a.fillRect(c.d, c.e, c.D - c.d, c.C - c.e));
        return !0
    };
    ch.prototype.lt = function (a, b, c, d) {
        d ? a.be(c) : (c.beginPath(), a.be(c), a = nd(b), a = this.b.Eb().apply(a), c.fillStyle = a.Ec(), c.fill())
    };
    var dh = function (a) {
        Ug.call(this, a)
    };
    t(dh, Ug);
    Oe.c(Ze, dh);
    dh.prototype.Vc = function (a, b) {
        var c = this.b.Ob;
        b & 24 ? b & 8 ? a.fillRect(0, 0, 20 * c.ka(), 20 * c.jb()) : a.rect(0, 0, 20 * c.ka(), 20 * c.jb()) : a.drawImage(c.l.canvas, 0, 0, 20 * c.ka(), 20 * c.jb());
        return !0
    };
    var eh = function (a) {
        Yg.call(this, a);
        this.Vp = new Xg(a.Le)
    };
    t(eh, Yg);
    Oe.c($e, eh);
    Oe.c(af, eh);
    eh.prototype.Vc = function (a, b) {
        return b & 8 ? this.Vp.gc(a, b) : eh.q.Vc.call(this, a, b)
    };
    eh.prototype.p = function () {
        eh.q.p.call(this);
        this.Vp.p()
    };
    var fh = function (a) {
        this.a = a
    };
    jg.On(fh);
    g = fh.prototype;
    g.Jl = function () {
        this.a.B.map(function (a) {
            a.S = 0
        })
    };
    g.p = function () {};
    g.bi = function () {};
    g.tn = function () {};
    g.Kl = function () {};
    g.Al = function () {
        return null
    };
    g.Xm = function () {};
    var gh = function () {
        this.S = !0;
        this.rc = this.Yf = null
    };
    gh.prototype.update = function () {
        return !1
    };
    gh.prototype.Db = function (a) {
        this.Yf != a && (this.rc && this.rc.p(), this.S = !0, this.rc = a.ud(this), this.Yf = a);
        return this.rc
    };
    var hh = [];
    gh.prototype.pb = function () {
        return new gh
    };
    var ih = function (a) {
        return (0, hh[a.type])(a)
    };
    gh.prototype.tf = function () {
        return new Yc(0, 0, 0, 0)
    };
    var kh = function (a, b, c, d) {
        var e = new Yc;
        c = jh(b, c);
        b = jh(b, d);
        e.expand(3 * -c, 3 * -b);
        e.expand(3 * +c, 3 * +b);
        a.add(e)
    }, lh = function (a, b, c) {
            a.expand(Math.cos(b) * c * 20, Math.sin(b) * c * 20)
        };
    gh.prototype.op = function () {
        return 1
    };
    var mh = 3 * Math.sqrt(2 * Math.PI) / 4,
        jh = function (a, b) {
            var c = 1;
            switch (a) {
            case 1:
                c = 2 * mh;
                break;
            case 2:
                c = 1.5 * mh;
                break;
            case 3:
                c = mh
            }
            return Math.abs(20 * b / c)
        };
    var nh = function (a) {
        gh.call(this);
        this.Ea = a;
        this.Ea[4] /= 255;
        this.Ea[9] /= 255;
        this.Ea[14] /= 255;
        this.Ea[19] /= 255
    };
    t(nh, gh);
    hh[3] = function (a) {
        return new nh(a.matrix)
    };
    g = nh.prototype;
    g.pb = function () {
        return new nh(this.Ln())
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.S = !0, this.Ea = a.Ea, !0) : !1
    };
    g.wf = function () {
        return new oh(this.Ln())
    };
    g.xf = function () {
        return new ph(this.Ln())
    };
    g.Ln = function () {
        var a = this.Ea.slice();
        a[4] *= 255;
        a[9] *= 255;
        a[14] *= 255;
        a[19] *= 255;
        return a
    };
    var qh = function (a, b, c, d, e, f, h, k) {
        gh.call(this);
        this.rg = a;
        this.Uh = b;
        this.df = c;
        this.sg = d;
        this.Ea = e;
        this.tg = f;
        this.ug = h;
        this.vg = k
    };
    t(qh, gh);
    hh[5] = function (a) {
        return new qh(a.bias, a.clamp, a.color, a.divisor, a.matrix, a.matrixX, a.matrixY, a.preserveAlpha)
    };
    qh.prototype.pb = function () {
        return new qh(this.rg, this.Uh, this.df, this.sg, this.Ea, this.tg, this.ug, this.vg)
    };
    qh.prototype.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.S = !0, this.rg = a.rg, this.Uh = a.Uh, this.df = a.df, this.sg = a.sg, this.Ea = a.Ea, this.tg = a.tg, this.ug = a.ug, this.vg = a.vg, !0) : !1
    };
    qh.prototype.wf = function () {
        return new rh(this.tg, this.ug, this.Ea, this.sg, this.rg, this.vg, this.Uh, this.df & 16777215, (this.df >>> 24) / 255)
    };
    qh.prototype.xf = function () {
        return new sh(this.tg, this.ug, this.Ea, this.sg, this.rg, this.vg, this.Uh, this.df & 16777215, (this.df >>> 24) / 255)
    };
    var th = function (a, b, c) {
        gh.call(this);
        this.quality = a;
        this.x = b;
        this.y = c
    };
    t(th, gh);
    hh[2] = function (a) {
        return new th(a.quality, a.x, a.y)
    };
    g = th.prototype;
    g.pb = function () {
        return new th(this.quality, this.x, this.y)
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.S = !0, this.x = a.x, this.y = a.y, this.quality = a.quality, !0) : !1
    };
    g.wf = function () {
        return new uh(this.x, this.y, this.quality)
    };
    g.xf = function () {
        return new vh(this.x, this.y, this.quality)
    };
    g.op = function () {
        return 1 < this.x && 1 < this.y ? 2 : 1
    };
    g.tf = function () {
        var a = new Yc(0, 0, 0, 0);
        kh(a, this.quality, this.x, this.y);
        return a
    };
    var wh = function (a, b, c, d, e, f, h) {
        gh.call(this);
        this.angle = a;
        this.distance = b;
        this.strength = c;
        this.quality = d;
        this.x = e;
        this.y = f;
        this.ca = h
    };
    t(wh, gh);
    wh.prototype.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (this.S = !0, this.angle = a.angle, this.distance = a.distance, this.strength = a.strength, this.quality = a.quality, this.x = a.x, this.y = a.y, this.ca = a.ca, !0) : !1
    };
    var xh = {
        type: "inner",
        knockout: !1,
        apply: function (a, b, c) {
            a.Ab("atop", b, c)
        },
        Id: "source-atop"
    }, yh = {
            type: "inner",
            knockout: !0,
            apply: function (a, b, c) {
                a.Ab("in", b, c)
            },
            Id: "source-in"
        }, zh = [xh, yh, {
            type: "outer",
            knockout: !1,
            apply: function (a, b, c) {
                a.Ab("over", c, b)
            },
            Id: "destination-over"
        }, {
            type: "outer",
            knockout: !0,
            apply: function (a, b, c) {
                a.Ab("out", b, c)
            },
            Id: "source-out"
        }, {
            type: "full",
            knockout: !1,
            apply: function (a, b, c) {
                a.Ab("over", b, c)
            },
            Id: "source-over"
        }, {
            type: "full",
            knockout: !0,
            apply: function () {},
            Id: "copy"
        }],
        Bh = function (a,
            b, c) {
            return Ah(b ? "inner" : a ? "full" : "outer", c)
        }, Ah = function (a, b) {
            for (var c = 0; c < zh.length; ++c)
                if (a == zh[c].type && !! b == zh[c].knockout) return zh[c];
            return b ? yh : xh
        };
    wh.prototype.Cn = function (a, b) {
        var c = 20 * this.distance * b;
        a.Fd(Math.cos(this.angle) * c, Math.sin(this.angle) * c, this.quality * this.x * 10, this.quality * this.y * 10)
    };
    wh.prototype.Tp = function () {
        var a = 20 * this.distance;
        return Math.abs(Math.cos(this.angle) * a) > 3 * jh(this.quality, this.x) || Math.abs(Math.sin(this.angle) * a) > 3 * jh(this.quality, this.y) ? !1 : !0
    };
    var Ch = function (a, b, c, d, e, f, h, k) {
        wh.call(this, a, c, d, e, f, h, k);
        this.color = b
    };
    t(Ch, wh);
    var Dh = function (a, b, c) {
        return Ah(b ? "inner" : a && !c ? "full" : "outer", c || a)
    };
    hh[1] = function (a) {
        return new Ch(a.angle, a.color, a.distance, a.strength, a.quality, a.x, a.y, Dh(a.hideObject, a.inner, a.knockout))
    };
    g = Ch.prototype;
    g.pb = function () {
        return new Ch(this.angle, this.color, this.distance, this.strength, this.quality, this.x, this.y, this.ca)
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Ch.q.update.call(this, a), this.color = a.color, !0) : !1
    };
    g.wf = function () {
        return new Eh(this.distance, 180 * this.angle / Math.PI, this.color & 16777215, (this.color >>> 24) / 255, this.x, this.y, this.strength, this.quality, "inner" == this.ca.type, this.ca.knockout && "outer" == this.ca.type, this.ca.knockout)
    };
    g.xf = function () {
        return new Fh(this.distance, 180 * this.angle / Math.PI, this.color & 16777215, (this.color >>> 24) / 255, this.x, this.y, this.strength, this.quality, "inner" == this.ca.type, this.ca.knockout && "outer" == this.ca.type, this.ca.knockout)
    };
    g.tf = function () {
        var a = new Yc(0, 0, 0, 0);
        lh(a, this.angle, this.distance);
        kh(a, this.quality, this.x, this.y);
        return a
    };
    var Gh = function (a, b, c, d, e, f, h, k, n) {
        wh.call(this, a, d, e, f, h, k, n);
        this.highlight = b;
        this.shadow = c
    };
    t(Gh, wh);
    hh[4] = function (a) {
        return new Gh(a.angle, a.highlight, a.shadow, a.distance, a.strength, a.quality, a.x, a.y, Bh(a.onTop, a.inner, a.knockout))
    };
    g = Gh.prototype;
    g.pb = function () {
        return new Gh(this.angle, this.highlight, this.shadow, this.distance, this.strength, this.quality, this.x, this.y, this.ca)
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Gh.q.update.call(this, a), this.highlight = a.highlight, this.shadow = a.shadow, !0) : !1
    };
    g.wf = function () {
        return new Hh(this.distance, 180 * this.angle / Math.PI, this.highlight & 16777215, (this.highlight >>> 24) / 255, this.shadow & 16777215, (this.shadow >>> 24) / 255, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.xf = function () {
        return new Ih(this.distance, 180 * this.angle / Math.PI, this.highlight & 16777215, (this.highlight >>> 24) / 255, this.shadow & 16777215, (this.shadow >>> 24) / 255, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.tf = function () {
        var a = new Yc(0, 0, 0, 0);
        lh(a, this.angle, -this.distance);
        lh(a, this.angle, this.distance);
        kh(a, this.quality, this.x, this.y);
        return a
    };
    var Jh = function (a, b, c, d, e, f, h, k, n, q) {
        wh.call(this, a, e, f, h, k, n, q);
        this.Ib = b;
        this.Bb = c;
        this.Jb = d
    };
    t(Jh, wh);
    hh[6] = function (a) {
        for (var b = kd(a.ratios), c = kd(a.colors), d = Array(c.length), e = 0; e < c.length; ++e) d[e] = (c[e] >>> 24) / 255, c[e] &= 16777215;
        return new Jh(a.angle, c, d, b, a.distance, a.strength, a.quality, a.x, a.y, Bh(a.onTop, a.inner, a.knockout))
    };
    g = Jh.prototype;
    g.pb = function () {
        return new Jh(this.angle, this.Ib, this.Bb, this.Jb, this.distance, this.strength, this.quality, this.x, this.y, this.ca)
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Jh.q.update.call(this, a), this.Ib = a.Ib, this.Bb = a.Bb, this.Jb = a.Jb, !0) : !1
    };
    g.wf = function () {
        return new Kh(this.distance, 180 * this.angle / Math.PI, this.Ib, this.Bb, this.Jb, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.xf = function () {
        return new Lh(this.distance, 180 * this.angle / Math.PI, this.Ib, this.Bb, this.Jb, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.tf = function () {
        var a = new Yc(0, 0, 0, 0);
        this.Cn(a, 1);
        return a
    };
    var Mh = function (a, b, c, d, e, f, h, k, n, q) {
        wh.call(this, a, e, f, h, k, n, q);
        this.Ib = b;
        this.Bb = c;
        this.Jb = d
    };
    t(Mh, wh);
    hh[7] = function (a) {
        for (var b = kd(a.ratios), c = kd(a.colors), d = Array(c.length), e = 0; e < c.length; ++e) d[e] = (c[e] >>> 24) / 255, c[e] &= 16777215;
        return new Mh(a.angle, c, d, b, a.distance, a.strength, a.quality, a.x, a.y, Bh(a.onTop, a.inner, a.knockout))
    };
    g = Mh.prototype;
    g.pb = function () {
        return new Mh(this.angle, this.Ib, this.Bb, this.Jb, this.distance, this.strength, this.quality, this.x, this.y, this.ca)
    };
    g.update = function (a) {
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) ? (Mh.q.update.call(this, a), this.Ib = a.Ib, this.Bb = a.Bb, this.Jb = a.Jb, !0) : !1
    };
    g.wf = function () {
        return new Nh(this.distance, 180 * this.angle / Math.PI, this.Ib, this.Bb, this.Jb, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.xf = function () {
        return new Oh(this.distance, 180 * this.angle / Math.PI, this.Ib, this.Bb, this.Jb, this.x, this.y, this.strength, this.quality, this.ca.type, this.ca.knockout)
    };
    g.tf = function () {
        var a = new Yc(0, 0, 0, 0);
        this.Cn(a, 1);
        this.Cn(a, -1);
        return a
    };
    var Cg = function (a) {
        gh.call(this);
        this.mode = a
    };
    t(Cg, gh);
    Cg.prototype.update = function (a) {
        this.S = !1;
        return Object.getPrototypeOf(this) == Object.getPrototypeOf(a) && this.mode == a.mode
    };
    Cg.prototype.pb = function () {
        return new Cg(this.mode)
    };
    Cg.prototype.Vt = function (a) {
        this.mode = a
    };
    var Ph = function () {
        gh.call(this)
    };
    t(Ph, gh);
    hh[0] = function (a) {
        return new Ph(a)
    };
    Ph.prototype.tf = function () {
        return new Yc(0, 0, 0, 0)
    };
    Ph.prototype.pb = function () {
        return this
    };
    var Qh = function (a) {
        this.filter = a;
        this.Hb = [];
        this.Wh = [];
        this.Hq = null
    };
    g = Qh.prototype;
    g.pp = function (a, b) {
        if (this.filter.S || this.Hq != a) this.Hq = a, this.Hb = [], this.Wh = [], this.od(a);
        for (var c = 0; c < this.Hb.length; c++) b.appendChild(this.Hb[c]);
        this.S = !1
    };
    g.od = function () {};
    g.qi = function (a, b, c, d) {
        var e = document.createElementNS("http://www.w3.org/2000/svg", "feBlend");
        e.setAttribute("mode", a);
        l(c) && e.setAttribute("in", c);
        e.setAttribute("in2", b);
        l(d) && e.setAttribute("result", d);
        this.Hb.push(e)
    };
    g.on = function (a, b, c, d, e) {
        var f = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        l(d) && f.setAttribute("in", d);
        l(e) && f.setAttribute("result", e);
        this.Wh.push(function (d) {
            var e = new Pc(b, c);
            e.u(d);
            f.setAttribute("stdDeviation", jh(a, e.x) + " " + jh(a, e.y))
        });
        this.Hb.push(f)
    };
    g.$b = function (a, b, c, d, e, f, h) {
        var k = document.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        l(f) && k.setAttribute("in", f);
        l(h) && k.setAttribute("result", h);
        l(e) || (e = "linear");
        f = ["feFuncR", "feFuncG", "feFuncB", "feFuncA"];
        a = [a, b, c, d];
        for (b = 0; 4 > b; ++b) {
            c = null;
            for (var n in a[b]) null == c && (c = document.createElementNS("http://www.w3.org/2000/svg", f[b]), c.setAttribute("type", e)), c.setAttribute(n, a[b][n]);
            c && k.appendChild(c)
        }
        this.Hb.push(k);
        return k
    };
    g.Cu = function (a, b, c) {
        a = nd(a);
        this.$b({
            intercept: a.ha / 255,
            slope: 0
        }, {
            intercept: a.fa / 255,
            slope: 0
        }, {
            intercept: a.ea / 255,
            slope: 0
        }, {
            intercept: 0,
            slope: a.Qa * b
        }, void 0, void 0, c)
    };
    g.Eu = function (a, b, c) {
        a = nd(a);
        this.$b({
            intercept: a.ha / 255,
            slope: 0
        }, {
            intercept: a.fa / 255,
            slope: 0
        }, {
            intercept: a.ea / 255,
            slope: 0
        }, {
            intercept: a.Qa * b,
            slope: -a.Qa * b
        }, void 0, void 0, c)
    };
    g.mq = function (a, b, c, d, e, f) {
        var h = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        h.setAttribute("type", "matrix");
        h.setAttribute("values", "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 1");
        this.Hb.push(h);
        if (0 == d) a = nd(a[0]), b = {
            ha: [a.ha, a.ha],
            fa: [a.fa, a.fa],
            ea: [a.ea, a.ea],
            Qa: [b[0], b[0]]
        };
        else {
            for (var h = {
                ha: Array(256),
                fa: Array(256),
                ea: Array(256),
                Qa: Array(256)
            }, k = 0, n = nd(a[k]), q = b[k], s = c[k] / d, r = 0, u = n, w = q, C = 0; 256 > C; ++C) {
                if (C >= s && (u = n, w = q, r = s, ++k < c.length ? (n = nd(a[k]), q = b[k], s = c[k] / d) : s = 255,
                    C == r)) {
                    h.ha[C] = u.ha / 255;
                    h.fa[C] = u.fa / 255;
                    h.ea[C] = u.ea / 255;
                    h.Qa[C] = w;
                    continue
                }
                var H = (C - r) / (s - r);
                h.ha[C] = (u.ha + (n.ha - u.ha) * H) / 255;
                h.fa[C] = (u.fa + (n.fa - u.fa) * H) / 255;
                h.ea[C] = (u.ea + (n.ea - u.ea) * H) / 255;
                h.Qa[C] = w + (q - w) * H
            }
            b = h
        }
        this.$b({
            tableValues: b.ha.join(" ")
        }, {
            tableValues: b.fa.join(" ")
        }, {
            tableValues: b.ea.join(" ")
        }, null, "discrete", void 0, "colors");
        this.$b(null, null, null, {
            tableValues: b.Qa.join(" ")
        }, "discrete", e, "alpha");
        this.Ab("in", "colors", "alpha", void 0, f)
    };
    g.Ab = function (a, b, c, d, e) {
        var f = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
        l(e) && f.setAttribute("result", e);
        l(b) && f.setAttribute("in", b);
        l(c) && f.setAttribute("in2", c);
        f.setAttribute("operator", a);
        if (l(d))
            for (var h in d) f.setAttribute(h, d[h]);
        this.Hb.push(f)
    };
    g.Du = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        l(a) && b.setAttribute("result", a);
        b.setAttribute("flood-color", "black");
        this.Hb.push(b)
    };
    g.Bu = function (a, b) {
        var c = nd(a),
            d = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
        d.setAttribute("flood-color", c.toString());
        d.setAttribute("flood-opacity", c.Qa * b);
        this.Hb.push(d)
    };
    g.pn = function (a, b, c, d) {
        var e = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        l(c) && e.setAttribute("in", c);
        l(d) && e.setAttribute("result", d);
        this.dw(e, a, b);
        this.Hb.push(e)
    };
    g.dw = function (a, b, c) {
        var d = Math.cos(b) * c * 20,
            e = Math.sin(b) * c * 20;
        this.Wh.push(function (b) {
            var c = new Pc(d, e);
            c.u(b);
            a.setAttribute("dx", c.x);
            a.setAttribute("dy", c.y)
        })
    };
    g.Kj = function (a, b) {
        var c = this.Hb;
        return 0 < c.length ? (c[c.length - 1].setAttribute("result", a), a) : b
    };
    g.Wa = function (a, b) {
        if (a & 2050)
            for (var c = 0; c < this.Wh.length; ++c) this.Wh[c](b)
    };
    g.p = function () {};
    var Rh = function (a) {
        Qh.call(this, a)
    };
    t(Rh, Qh);
    dg.c(nh, Rh);
    Rh.prototype.od = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        b.setAttribute("in", a);
        b.setAttribute("result", "result");
        b.setAttribute("type", "matrix");
        b.setAttribute("values", this.filter.Ea.join(" "));
        this.Hb.push(b)
    };
    var Sh = function (a) {
        Qh.call(this, a)
    };
    t(Sh, Qh);
    dg.c(qh, Sh);
    Sh.prototype.od = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "feConvolveMatrix");
        b.setAttribute("in", a);
        b.setAttribute("result", "result");
        b.setAttribute("order", this.filter.tg + "," + this.filter.ug);
        b.setAttribute("divisor", this.filter.sg);
        b.setAttribute("bias", this.filter.rg / 255);
        b.setAttribute("kernelMatrix", this.filter.Ea.slice().reverse().join(" "));
        b.setAttribute("preserveAlpha", this.filter.vg);
        this.Hb.push(b)
    };
    var Th = function (a) {
        Qh.call(this, a)
    };
    t(Th, Qh);
    dg.c(th, Th);
    Th.prototype.od = function (a) {
        var b = this.filter;
        this.on(b.quality, b.x, b.y, a, "result")
    };
    var Uh = function (a) {
        Qh.call(this, a)
    };
    t(Uh, Qh);
    Uh.prototype.Sp = function (a) {
        var b = this.filter;
        0 != b.distance && (this.pn(b.angle, b.distance, a), a = void 0);
        var c = b.x,
            d = b.y;
        (0 < c || 0 < d) && this.on(b.quality, c, d, a)
    };
    Uh.prototype.Fp = function (a) {
        var b = this.filter;
        if (0 < b.x || 0 < b.y) this.on(b.quality, b.x, b.y, a, "blur"), a = "blur";
        this.pn(b.angle, -b.distance, a, "highlight");
        this.pn(b.angle, b.distance, a, "shadow");
        this.Ab("arithmetic", "highlight", "shadow", {
            k2: 0.5 * b.strength,
            k3: -0.5 * b.strength,
            k4: 0.5
        })
    };
    Uh.prototype.qj = function (a, b) {
        this.filter.ca.apply(this, a, b);
        this.Kj("result", a)
    };
    var Vh = function (a) {
        Qh.call(this, a)
    };
    t(Vh, Uh);
    dg.c(Ch, Vh);
    Vh.prototype.od = function (a) {
        var b = this.filter;
        this.Sp(a);
        var c = "inner" == b.ca.type,
            d = b.strength;
        1 < d && (this.$b(null, null, null, {
            slope: d,
            intercept: c ? 1 - d : 0
        }), d = 1);
        c ? b.Tp() ? this.Eu(b.color, d, "shadow") : (c = this.Kj("shadow", a), this.Bu(b.color, d), this.Ab("out", void 0, c, null, "shadow")) : this.Cu(b.color, d, "shadow");
        this.qj("shadow", a)
    };
    var Wh = function (a) {
        Qh.call(this, a)
    };
    t(Wh, Uh);
    dg.c(Gh, Wh);
    Wh.prototype.od = function (a) {
        var b = this.filter;
        this.Fp(a);
        var c = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
        c.setAttribute("type", "matrix");
        c.setAttribute("values", "0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0");
        this.Hb.push(c);
        c = nd(b.highlight);
        b = nd(b.shadow);
        this.$b({
            tableValues: b.ha / 255 + " " + c.ha / 255
        }, {
            tableValues: b.fa / 255 + " " + c.fa / 255
        }, {
            tableValues: b.ea / 255 + " " + c.ea / 255
        }, {
            tableValues: b.Qa + " 0 " + c.Qa
        }, "discrete", void 0, "bevel").lastChild.setAttribute("type", "table");
        this.qj("bevel",
            a)
    };
    var Xh = function (a) {
        Qh.call(this, a)
    };
    t(Xh, Uh);
    dg.c(Jh, Xh);
    Xh.prototype.od = function (a) {
        var b = this.filter;
        this.Sp(a);
        var c = this.Kj("shadow", a);
        0 < b.Bb[0] && !b.Tp() && (this.Du("black"), this.Ab("in", c, "black", void 0, "shadow"), c = "shadow");
        this.mq(b.Ib, b.Bb, b.Jb, b.strength, c, "shadow");
        this.qj("shadow", a)
    };
    var Yh = function (a) {
        Qh.call(this, a)
    };
    t(Yh, Uh);
    dg.c(Mh, Yh);
    Yh.prototype.od = function (a) {
        var b = this.filter;
        this.Fp(a);
        var c = this.Kj("bevel", a);
        this.mq(b.Ib, b.Bb, b.Jb, 1, c, "bevel");
        this.qj("bevel", a)
    };
    var Zh = function (a) {
        Qh.call(this, a);
        this.Eo = null
    };
    t(Zh, Qh);
    dg.c(Cg, Zh);
    g = Zh.prototype;
    g.od = function (a) {
        this.Eo = this.$b({
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, {
            intercept: 0
        }, "linear", a, "BlendSource");
        switch (this.filter.mode) {
        case 5:
        case 4:
        case 2:
        case 3:
            this.zv(Oc[this.filter.mode], "BlendSource");
            break;
        case 7:
            this.yv("BlendSource");
            break;
        case 6:
            this.Av("BlendSource");
            break;
        case 8:
            this.Dv("BlendSource");
            break;
        case 13:
            this.Bv("BlendSource");
            break;
        case 12:
            this.Cv("BlendSource")
        }
    };
    g.du = function (a) {
        for (var b = this.Eo, c = 0; c < b.childNodes.length; ++c) {
            var d = b.childNodes[c];
            switch (d.localName) {
            case "feFuncR":
                d.setAttribute("slope", a.W);
                d.setAttribute("intercept", a.O / 255);
                break;
            case "feFuncG":
                d.setAttribute("slope", a.U);
                d.setAttribute("intercept", a.N / 255);
                break;
            case "feFuncB":
                d.setAttribute("slope", a.T);
                d.setAttribute("intercept", a.K / 255);
                break;
            case "feFuncA":
                yg(d, a.H, a.P / 255)
            }
        }
    };
    g.zv = function (a, b) {
        var c = this.li(b);
        this.qi(a, "BackgroundImage", c);
        this.Ab("in", void 0, b, void 0, "result")
    };
    g.yv = function (a) {
        this.Ab("arithmetic", a, "BackgroundImage", {
            k2: 1,
            k3: 1
        })
    };
    g.Dv = function (a) {
        var b = this.an(a);
        this.$m(b, "BackgroundImage");
        this.fi(a)
    };
    g.Av = function (a) {
        var b = this.li(a),
            c = this.an(a),
            d = this.li("BackgroundImage"),
            e = this.an("BackgroundImage"),
            b = this.$m(b, e),
            c = this.$m(c, d);
        this.Ab("arithmetic", b, c, {
            k2: 1,
            k3: 1
        });
        this.Qj(a)
    };
    g.Bv = function (a) {
        var b = this.li("BackgroundImage");
        this.$b({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.qi("screen", b, void 0, "blend");
        this.$b({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a);
        this.qi("multiply", "blend");
        this.Qj(a)
    };
    g.Cv = function (a) {
        var b = this.li(a);
        this.$b({
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {
            slope: 2,
            intercept: -1
        }, {}, "linear", "BackgroundImage");
        this.qi("screen", b, void 0, "blend");
        this.$b({
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {
            slope: 2,
            intercept: 0
        }, {}, "linear", "BackgroundImage");
        this.qi("multiply", "blend");
        this.Ab("in", void 0, a, void 0, "result")
    };
    g.Qj = function (a) {
        this.Ab("in", void 0, "BackgroundImage");
        this.fi(a)
    };
    g.fi = function (a) {
        this.Ab("atop", void 0, a, void 0, "result")
    };
    g.$m = function (a, b) {
        var c = a + b;
        this.Ab("arithmetic", a, b, {
            k2: 1,
            k3: 1,
            k4: -1
        }, c);
        return c
    };
    g.li = function (a) {
        var b = "op" + a;
        this.$b({}, {}, {}, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    g.an = function (a) {
        var b = "not" + a;
        this.$b({
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: -1,
            intercept: 1
        }, {
            slope: 0,
            intercept: 1
        }, "linear", a, b);
        return b
    };
    var $h = function (a) {
        Qh.call(this, a)
    };
    t($h, Qh);
    dg.c(Ph, $h);
    $h.prototype.apply = function () {};
    $h.prototype.od = function () {};
    var ai = function (a) {
        this.filter = a
    };
    Oe.c(nh, ai);
    Oe.c(qh, ai);
    Oe.c(Mh, ai);
    Oe.c(Jh, ai);
    Oe.c(Ph, ai);
    ai.prototype.apply = function () {};
    ai.prototype.p = function () {};
    var Vg = function (a, b, c, d, e, f, h, k) {
        d = d.getImageData(0, 0, e, f).data;
        e = a.getImageData(b, c, e, f);
        f = e.data;
        for (var n = d.length, q = 0; q < n; q += 4) {
            var s = d[q + 3] * k,
                r = f[q + 3];
            f[q + 3] = s + r;
            var u = 1 / f[q + 3],
                s = s * h;
            f[q + 0] = (f[q + 0] * r + d[q + 0] * s) * u;
            f[q + 1] = (f[q + 1] * r + d[q + 1] * s) * u;
            f[q + 2] = (f[q + 2] * r + d[q + 2] * s) * u
        }
        a.putImageData(e, b, c)
    };
    window.Zw || (window.Zw = Array);
    var bi = function (a) {
        this.filter = a
    };
    t(bi, ai);
    Oe.c(th, bi);
    bi.prototype.apply = function (a, b, c) {
        for (var d = a.getImageData(0, 0, b, c), e = d.data, f = new Uint32Array(e.length), h = this.filter, k = Math.max(h.x | 0, 1), n = Math.max(h.y | 0, 1), h = h.quality, q = h & 1, s = 2 - q; 1 < h--;) ci(e, f, b, c), di(e, f, b, c, k, n, s), s = 3 - s;
        q && (k = k - 1 | 1, n = n - 1 | 1);
        ci(e, f, b, c);
        di(e, f, b, c, k, n, s);
        a.putImageData(d, 0, 0)
    };
    var ci = function (a, b, c, d) {
        b[0] = a[0];
        b[1] = a[1];
        b[2] = a[2];
        b[3] = a[3];
        for (var e = 1; e < c; ++e) b[4 * e + 0] = a[4 * e + 0] + b[4 * (e - 1) + 0], b[4 * e + 1] = a[4 * e + 1] + b[4 * (e - 1) + 1], b[4 * e + 2] = a[4 * e + 2] + b[4 * (e - 1) + 2], b[4 * e + 3] = a[4 * e + 3] + b[4 * (e - 1) + 3];
        for (var f = 1; f < d; ++f) {
            var h = f * c;
            b[4 * h + 0] = a[4 * h + 0] + b[4 * (h - c) + 0];
            b[4 * h + 1] = a[4 * h + 1] + b[4 * (h - c) + 1];
            b[4 * h + 2] = a[4 * h + 2] + b[4 * (h - c) + 2];
            b[4 * h + 3] = a[4 * h + 3] + b[4 * (h - c) + 3];
            for (e = 1; e < c; ++e) b[4 * (h + e) + 0] = a[4 * (h + e) + 0] + b[4 * (h + e - 1) + 0] + b[4 * (h + e - c) + 0] - b[4 * (h + e - c - 1) + 0], b[4 * (h + e) + 1] = a[4 * (h + e) + 1] + b[4 * (h + e - 1) + 1] + b[4 * (h +
                e - c) + 1] - b[4 * (h + e - c - 1) + 1], b[4 * (h + e) + 2] = a[4 * (h + e) + 2] + b[4 * (h + e - 1) + 2] + b[4 * (h + e - c) + 2] - b[4 * (h + e - c - 1) + 2], b[4 * (h + e) + 3] = a[4 * (h + e) + 3] + b[4 * (h + e - 1) + 3] + b[4 * (h + e - c) + 3] - b[4 * (h + e - c - 1) + 3]
        }
    }, di = function (a, b, c, d, e, f, h) {
            var k = 1 / (f * e),
                n = (e + h) / 2 | 0;
            e -= n;
            h = (f + h) / 2 | 0;
            f -= h;
            for (var q = 0; 0 > q - h; ++q) {
                for (var s = (q + f) * c, r = q * c, u = 0; 0 > u - n; ++u) {
                    var w = u + e;
                    a[4 * (r + u) + 0] = b[4 * (s + w) + 0] * k;
                    a[4 * (r + u) + 1] = b[4 * (s + w) + 1] * k;
                    a[4 * (r + u) + 2] = b[4 * (s + w) + 2] * k;
                    a[4 * (r + u) + 3] = b[4 * (s + w) + 3] * k
                }
                for (; u < c; ++u) {
                    var C = u - n,
                        w = Math.min(c - 1, u + e);
                    a[4 * (r + u) + 0] = (b[4 * (s + w) + 0] -
                        b[4 * (s + C) + 0]) * k;
                    a[4 * (r + u) + 1] = (b[4 * (s + w) + 1] - b[4 * (s + C) + 1]) * k;
                    a[4 * (r + u) + 2] = (b[4 * (s + w) + 2] - b[4 * (s + C) + 2]) * k;
                    a[4 * (r + u) + 3] = (b[4 * (s + w) + 3] - b[4 * (s + C) + 3]) * k
                }
            }
            for (; q < d; ++q) {
                for (var H = (q - h) * c, s = Math.min(d - 1, q + f) * c, r = q * c, u = 0; 0 > u - n; ++u) w = u + e, a[4 * (r + u) + 0] = (b[4 * (s + w) + 0] - b[4 * (H + w) + 0]) * k, a[4 * (r + u) + 1] = (b[4 * (s + w) + 1] - b[4 * (H + w) + 1]) * k, a[4 * (r + u) + 2] = (b[4 * (s + w) + 2] - b[4 * (H + w) + 2]) * k, a[4 * (r + u) + 3] = (b[4 * (s + w) + 3] - b[4 * (H + w) + 3]) * k;
                for (; u < c; ++u) C = u - n, w = Math.min(c - 1, u + e), a[4 * (r + u) + 0] = (b[4 * (s + w) + 0] - b[4 * (s + C) + 0] - b[4 * (H + w) + 0] + b[4 * (H + C) + 0]) *
                    k, a[4 * (r + u) + 1] = (b[4 * (s + w) + 1] - b[4 * (s + C) + 1] - b[4 * (H + w) + 1] + b[4 * (H + C) + 1]) * k, a[4 * (r + u) + 2] = (b[4 * (s + w) + 2] - b[4 * (s + C) + 2] - b[4 * (H + w) + 2] + b[4 * (H + C) + 2]) * k, a[4 * (r + u) + 3] = (b[4 * (s + w) + 3] - b[4 * (s + C) + 3] - b[4 * (H + w) + 3] + b[4 * (H + C) + 3]) * k
            }
        };
    var ei = function (a) {
        this.filter = a
    };
    t(ei, ai);
    ei.prototype.Aj = function (a, b, c) {
        for (var d = Math.max(this.filter.x | 0, 1), e = Math.max(this.filter.y | 0, 1), f = this.filter.quality, h = new Uint32Array(a.length / 4), k = 2 - (f & 1); 1 < f--;) fi(a, h, b, c), gi(a, h, b, c, d, e, k), k = 3 - k;
        fi(a, h, b, c);
        return h
    };
    var fi = function (a, b, c, d) {
        b[0] = a[3];
        for (var e = 1; e < c; ++e) b[e] = a[4 * e + 3] + b[e - 1];
        for (var f = 1; f < d; ++f) {
            var h = f * c;
            b[h] = a[4 * h + 3] + b[h - c];
            for (e = 1; e < c; ++e) b[h + e] = a[4 * (h + e) + 3] + b[h + e - 1] + b[h + e - c] - b[h + e - c - 1]
        }
    }, gi = function (a, b, c, d, e, f, h) {
            var k = 1 / (f * e),
                n = (e + h) / 2 | 0;
            e -= n;
            h = (f + h) / 2 | 0;
            f -= h;
            for (var q = 0; 0 > q - h; ++q) {
                for (var s = Math.min(d - 1, q + f) * c, r = q * c, u = 0; 0 > u - n; ++u) {
                    var w = u + e,
                        w = b[s + w] * k;
                    a[4 * (r + u) + 3] = w
                }
                for (; u < c; ++u) {
                    var C = u - n,
                        w = Math.min(c - 1, u + e),
                        w = (b[s + w] - b[s + C]) * k;
                    a[4 * (r + u) + 3] = w
                }
            }
            for (; q < d; ++q) {
                for (var H = Math.max(0, q - h) * c,
                        s = Math.min(d - 1, q + f) * c, r = q * c, u = 0; 0 > u - n; ++u) w = u + e, w = (b[s + w] - b[H + w]) * k, a[4 * (r + u) + 3] = w;
                for (; u < c; ++u) C = u - n, w = Math.min(c - 1, u + e), w = (b[s + w] + b[H + C] - b[s + C] - b[H + w]) * k, a[4 * (r + u) + 3] = w
            }
        }, hi = function (a, b, c, d, e, f, h, k, n) {
            n = 0.5 * n / (f * e);
            var q = (e + 1) / 2 | 0;
            e -= q;
            var s = (f + 1) / 2 | 0;
            f -= s;
            for (var r = 0; r < d; ++r)
                for (var u = Math.max(0, Math.min(d - 1, r - s - k)) * c, w = Math.max(0, Math.min(d - 1, r + f - k)) * c, C = Math.max(0, Math.min(d - 1, r - s + k)) * c, H = Math.max(0, Math.min(d - 1, r + f + k)) * c, $a = r * c, Ia = 0; Ia < c; ++Ia) {
                    var Yb = Math.max(0, Math.min(c - 1, Ia - q - h)),
                        Da = Math.max(0,
                            Math.min(c - 1, Ia + e - h)),
                        Sa = Math.max(0, Math.min(c - 1, Ia - q + h)),
                        J = Math.max(0, Math.min(c - 1, Ia + e + h));
                    a[4 * ($a + Ia) + 3] = (b[H + J] + b[C + Sa] - b[H + Sa] - b[C + J] - (b[w + Da] + b[u + Yb] - b[w + Yb] - b[u + Da])) * n + 127.5
                }
        }, ii = function (a, b, c, d, e, f, h) {
            b = new Uint8Array(1024);
            if (0 == h)
                for (d = nd(d[0]), c = 0; 256 > c; ++c) b[4 * c + 0] = d.ha, b[4 * c + 1] = d.fa, b[4 * c + 2] = d.ea, b[4 * c + 3] = 255 * e[0];
            else {
                var k = 0,
                    n = nd(d[k]),
                    q = e[k],
                    s = f[k] / h,
                    r = 0,
                    u = n,
                    w = q;
                for (c = 0; 256 > c; ++c) {
                    if (c >= s && (u = n, w = q, r = s, ++k < f.length ? (n = nd(d[k]), q = e[k], s = f[k] / h) : s = 255, c == r)) {
                        b[4 * c + 0] = u.ha;
                        b[4 * c + 1] =
                            u.fa;
                        b[4 * c + 2] = u.ea;
                        b[4 * c + 3] = 255 * w;
                        continue
                    }
                    var C = (c - r) / (s - r);
                    b[4 * c + 0] = u.ha + (n.ha - u.ha) * C;
                    b[4 * c + 1] = u.fa + (n.fa - u.fa) * C;
                    b[4 * c + 2] = u.ea + (n.ea - u.ea) * C;
                    b[4 * c + 3] = 255 * (w + (q - w) * C)
                }
            }
            e = a.length;
            for (d = 0; d < e; d += 4) f = 4 * a[d + 3], a[d + 0] = b[f + 0], a[d + 1] = b[f + 1], a[d + 2] = b[f + 2], a[d + 3] = b[f + 3]
        };
    var ji = function (a) {
        this.filter = a
    };
    t(ji, ei);
    Oe.c(Ch, ji);
    ji.prototype.apply = function (a, b, c) {
        var d = this.filter,
            e = d.distance,
            f = Math.cos(d.angle) * e,
            h = Math.sin(d.angle) * e,
            e = document.createElement("canvas");
        e.width = b;
        e.height = c;
        var k = e.getContext("2d");
        k.drawImage(a.canvas, f, h);
        var f = k.getImageData(0, 0, b, c),
            h = this.Aj(f.data, b, c),
            n = Math.max(d.x | 0, 1),
            q = Math.max(d.y | 0, 1);
        d.quality & 1 && (n = n - 1 | 1, q = q - 1 | 1);
        var s = nd(d.color);
        if ("inner" == d.ca.type) {
            for (var r = f.data, u = s.ha, w = s.fa, C = s.ea, H = d.strength, $a = 1 / (q * n), Ia = (n + 1) / 2 | 0, n = n - Ia, Yb = (q + 1) / 2 | 0, q = q - Yb, Da = 0; 0 > Da - Yb; ++Da) {
                for (var Sa =
                    Math.min(c - 1, Da + q) * b, J = Da * b, D = 0; 0 > D - Ia; ++D) {
                    var Y = D + n,
                        Y = h[Sa + Y] * $a;
                    r[4 * (J + D) + 0] = u;
                    r[4 * (J + D) + 1] = w;
                    r[4 * (J + D) + 2] = C;
                    r[4 * (J + D) + 3] = (255 - Y) * H
                }
                for (; D < b; ++D) {
                    var Wc = D - Ia,
                        Y = Math.min(b - 1, D + n),
                        Y = (h[Sa + Y] - h[Sa + Wc]) * $a;
                    r[4 * (J + D) + 0] = u;
                    r[4 * (J + D) + 1] = w;
                    r[4 * (J + D) + 2] = C;
                    r[4 * (J + D) + 3] = (255 - Y) * H
                }
            }
            for (; Da < c; ++Da) {
                for (var Ud = Math.max(0, Da - Yb) * b, Sa = Math.min(c - 1, Da + q) * b, J = Da * b, D = 0; 0 > D - Ia; ++D) Y = D + n, Y = (h[Sa + Y] - h[Ud + Y]) * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = (255 - Y) * H;
                for (; D < b; ++D) Wc = D - Ia, Y = Math.min(b - 1, D +
                    n), Y = (h[Sa + Y] + h[Ud + Wc] - h[Sa + Wc] - h[Ud + Y]) * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = (255 - Y) * H
            }
        } else {
            r = f.data;
            u = s.ha;
            w = s.fa;
            C = s.ea;
            H = d.strength;
            $a = 1 / (q * n);
            Ia = (n + 1) / 2 | 0;
            n -= Ia;
            Yb = (q + 1) / 2 | 0;
            q -= Yb;
            for (Da = 0; 0 > Da - Yb; ++Da) {
                Sa = Math.min(c - 1, Da + q) * b;
                J = Da * b;
                for (D = 0; 0 > D - Ia; ++D) Y = D + n, Y = h[Sa + Y] * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = Y * H;
                for (; D < b; ++D) Wc = D - Ia, Y = Math.min(b - 1, D + n), Y = (h[Sa + Y] - h[Sa + Wc]) * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = Y * H
            }
            for (; Da < c; ++Da) {
                Ud =
                    Math.max(0, Da - Yb) * b;
                Sa = Math.min(c - 1, Da + q) * b;
                J = Da * b;
                for (D = 0; 0 > D - Ia; ++D) Y = D + n, Y = (h[Sa + Y] - h[Ud + Y]) * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = Y * H;
                for (; D < b; ++D) Wc = D - Ia, Y = Math.min(b - 1, D + n), Y = (h[Sa + Y] + h[Ud + Wc] - h[Sa + Wc] - h[Ud + Y]) * $a, r[4 * (J + D) + 0] = u, r[4 * (J + D) + 1] = w, r[4 * (J + D) + 2] = C, r[4 * (J + D) + 3] = Y * H
            }
        }
        k.putImageData(f, 0, 0);
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.globalCompositeOperation = d.ca.Id;
        a.globalAlpha = s.Qa;
        a.drawImage(e, 0, 0);
        a.restore()
    };
    var ki = function (a) {
        this.filter = a
    };
    t(ki, ei);
    Oe.c(Gh, ki);
    ki.prototype.apply = function (a, b, c) {
        var d = document.createElement("canvas");
        d.width = b;
        d.height = c;
        var e = d.getContext("2d"),
            f = a.getImageData(0, 0, b, c),
            h = this.Aj(f.data, b, c),
            k = this.filter,
            n = Math.max(k.x | 0, 1),
            q = Math.max(k.y | 0, 1);
        k.quality & 1 && (n = n - 1 | 1, q = q - 1 | 1);
        var s = k.distance,
            r = Math.round(Math.cos(k.angle) * s),
            s = Math.round(Math.sin(k.angle) * s);
        hi(f.data, h, b, c, n, q, r, s, k.strength);
        var q = nd(k.highlight),
            u = nd(k.shadow);
        b = f.data;
        c = q.ha;
        for (var h = q.fa, n = q.ea, q = q.Qa, r = u.ha, s = u.fa, w = u.ea, u = u.Qa, C = b.length, q = 2 * q,
                u = 2 * u, H = 0; H < C; H += 4) 127.5 < b[H + 3] ? (b[H + 0] = c, b[H + 1] = h, b[H + 2] = n, b[H + 3] = (b[H + 3] - 127.5) * u) : (b[H + 0] = r, b[H + 1] = s, b[H + 2] = w, b[H + 3] = (127.5 - b[H + 3]) * q);
        e.putImageData(f, 0, 0);
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.globalCompositeOperation = k.ca.Id;
        a.globalAlpha = 1;
        a.drawImage(d, 0, 0);
        a.restore()
    };
    var li = function (a) {
        this.filter = a
    };
    t(li, ei);
    Oe.c(Jh, li);
    li.prototype.apply = function (a, b, c) {
        var d = this.filter,
            e = d.distance,
            f = Math.cos(d.angle) * e,
            h = Math.sin(d.angle) * e,
            e = document.createElement("canvas");
        e.width = b;
        e.height = c;
        var k = e.getContext("2d");
        k.drawImage(a.canvas, f, h);
        var f = k.getImageData(0, 0, b, c),
            h = this.Aj(f.data, b, c),
            n = Math.max(d.x | 0, 1),
            q = Math.max(d.y | 0, 1);
        d.quality & 1 && (n = n - 1 | 1, q = q - 1 | 1);
        gi(f.data, h, b, c, n, q, 1);
        ii(f.data, b, c, d.Ib, d.Bb, d.Jb, d.strength);
        k.putImageData(f, 0, 0);
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.globalCompositeOperation = d.ca.Id;
        a.globalAlpha =
            1;
        a.drawImage(e, 0, 0);
        a.restore()
    };
    var mi = function (a) {
        this.filter = a
    };
    t(mi, ei);
    Oe.c(Mh, mi);
    mi.prototype.apply = function (a, b, c) {
        var d = document.createElement("canvas");
        d.width = b;
        d.height = c;
        var e = d.getContext("2d"),
            f = a.getImageData(0, 0, b, c),
            h = this.Aj(f.data, b, c),
            k = this.filter,
            n = Math.max(k.x | 0, 1),
            q = Math.max(k.y | 0, 1);
        k.quality & 1 && (n = n - 1 | 1, q = q - 1 | 1);
        var s = k.distance,
            r = Math.round(Math.cos(k.angle) * s),
            s = Math.round(Math.sin(k.angle) * s);
        hi(f.data, h, b, c, n, q, r, s, k.strength);
        ii(f.data, b, c, k.Ib, k.Bb, k.Jb, 1);
        e.putImageData(f, 0, 0);
        a.save();
        a.setTransform(1, 0, 0, 1, 0, 0);
        a.globalCompositeOperation = k.ca.Id;
        a.globalAlpha =
            1;
        a.drawImage(d, 0, 0);
        a.restore()
    };
    var ni = function () {};
    ni.prototype.lb = function () {};
    var oi = [];
    var pi = function (a) {
        this.id = a
    };
    t(pi, ni);
    g = pi.prototype;
    g.na = !1;
    g.da = function () {
        return null
    };
    g.Ic = function () {
        return null
    };
    g.dn = function (a) {
        this.wk = a;
        qi(a, this)
    };
    g.lb = function (a, b, c) {
        c.wr(this.id, this)
    };
    var ri = function (a, b) {
        this.id = a;
        this.kl = "";
        this.ed = b
    };
    t(ri, pi);
    var si = function () {};
    t(si, ni);
    g = si.prototype;
    g.Kh = function () {};
    g.nm = function () {};
    g.Ve = function () {};
    g.Yl = function () {};
    g.zn = function () {};
    g.yi = function () {};
    var ui = function (a, b) {
        for (var c = 0; c < a.length; ++c)
            if (a[c] instanceof ti && a[c].depth == b) return c;
        return -1
    };
    si.prototype.lb = function (a, b, c, d) {
        a.tags[d] || (a.tags[d] = []);
        a.tags[d].push(this)
    };
    var vi = function (a, b, c, d, e, f, h) {
        this.definition = a;
        this.depth = b;
        this.transform = c;
        this.states = d;
        this.mo = e;
        this.filters = f;
        this.blendmode = h
    }, wi = function (a, b, c) {
            this.actions = a;
            this.key = b;
            this.events = c
        }, xi = function (a, b) {
            this.events = a;
            this.sound = b
        }, yi = function (a, b, c, d, e) {
            this.id = a;
            this.trackAsMenu = b;
            this.records = c;
            this.actions = d;
            this.sounds = e
        };
    t(yi, pi);
    oi[10] = function (a, b, c) {
        for (var d = [], e = 0; a.records && e < a.records.length; e++) {
            var f = a.records[e],
                h = f.transform ? id(f.transform) : null,
                k = f.colortransform ? md(f.colortransform) : null,
                n = void 0;
            if (f.filters)
                for (var n = [], q = 0; q < f.filters.length; q++) n.push(ih(f.filters[q]));
            l(f.id) && d.push(new vi(c.ke(f.id), f.depth, h, f.states, k, n, f.blendmode))
        }
        c = [];
        for (e = 0; a.actions && e < a.actions.length; e++) f = b.Ie(E), h = a.actions[e], c.push(new wi(f.hk(h.actions, void 0), h.key, h.events));
        b = [];
        for (e = 0; a.sounds && e < a.sounds.length; e++) f =
            a.sounds[e], b.push(new xi(f.events, f.sound));
        return new yi(a.id, a.trackAsMenu, d, c, b)
    };
    yi.prototype.Ic = function (a, b, c) {
        return new $e(this, a, b, c)
    };
    yi.prototype.na = !0;
    var zi = function (a) {
        yi.call(this, a, !1, [], [], [])
    };
    t(zi, yi);
    zi.prototype.Ic = function (a, b, c) {
        return new af(this, a, b, c)
    };
    var Ai = function (a, b, c, d) {
        this.id = a;
        this.font = b;
        this.height = c;
        this.color = l(d) ? d : 4278190080;
        this.autoSize = "none"
    };
    t(Ai, pi);
    oi[13] = function (a, b, c) {
        c = l(a.font) ? c.ke(a.font) : null;
        c = new Ai(a.id, c, a.height, a.color);
        c.text = a.text;
        c.align = a.align;
        c.bounds = Zc(a.bounds);
        c.html = !! a.html;
        c.wrap = !! a.wrap;
        c.multiline = !! a.multiline;
        c.indent = a.indent;
        c.leading = a.leading;
        c.leftMargin = a.leftMargin;
        c.rightMargin = a.rightMargin;
        c.border = !! a.border;
        c.variable = a.variable || null;
        c.na = 6 <= b.vb;
        c.selectable = !! a.selectable;
        c.editable = !! a.editable;
        c.password = !! a.password;
        c.maxChars = a.maxChars || null;
        c.Vn = !! a.embed;
        c.autoSize = a.autoSize ? "left" : "none";
        return c
    };
    Ai.prototype.Ic = function (a, b, c) {
        return new mf(this, a, b, c)
    };
    var Bi = function (a, b, c) {
        this.data = a;
        this.unicode = b;
        this.advance = c
    }, cf = function (a, b, c, d, e, f, h, k) {
            this.id = a;
            this.name = b;
            this.glyphs = c;
            this.emSquareSize = d;
            this.ascent = e;
            this.descent = f;
            this.bold = h;
            this.italic = k;
            this.lineHeight = (e + f) / d;
            this.Kk = {};
            for (a = 0; a < c.length; a++) this.Kk[c[a].unicode] = c[a]
        };
    t(cf, pi);
    var df = new cf(-1, "", [], 0, 0, 0, !1, !1);
    oi[5] = function (a) {
        for (var b = a.emSquareSize ? a.emSquareSize : 1024, c = [], d = 0; a.glyphs && d < a.glyphs.length; d++) c.push(new Bi(dd(a.glyphs[d].data), a.glyphs[d].unicode, a.glyphs[d].advance));
        return new cf(a.id, a.name, c, b, a.ascent ? a.ascent : 0, a.descent ? a.descent : 0, a.bold, a.italic)
    };
    g = cf.prototype;
    g.wh = function () {
        return this.va
    };
    g.Aq = function (a) {
        return this.Kk[a] ? this.Kk[a].data : null
    };
    g.ti = function (a) {
        return this.Kk[a]
    };
    g.da = function () {
        return null
    };
    g.lb = function (a, b, c, d) {
        cf.q.lb.call(this, a, b, c, d);
        a = this.name;
        b.kc[a] || (b.kc[a] = []);
        b.kc[a].push(this)
    };
    var re = function (a, b, c, d, e, f) {
        ri.call(this, a, null);
        this.data = b;
        this.mask = c;
        this.width = d;
        this.height = e;
        this.transparent = f;
        this.va = this.ic = null;
        this.km = ""
    };
    t(re, ri);
    oi[8] = function (a) {
        return new re(a.id, a.data, a.mask, a.width, a.height, !(!a.transparent && !a.mask))
    };
    g = re.prototype;
    g.wh = function () {
        return this.va
    };
    g.da = function (a) {
        var b = this.cq(this.data);
        this.va = b;
        a.Lj();
        this.mask ? USING_SWIFFY_MOCKS && !ib ? (this.uu(b), a.cf()) : this.tu(b, a) : (this.ic = new Image, this.ic.onload = this.ic.onerror = function () {
            a.cf()
        }, this.ic.src = this.data);
        b.id = this.km = qc.Ha().Ia();
        return this.va
    };
    g.tu = function (a, b) {
        var c = this.width,
            d = this.height,
            e = document.createElement("canvas");
        e.width = this.width;
        e.height = this.height;
        var f = new Image,
            h = new Image,
            k = !1,
            n = !1,
            q = this,
            s = function () {
                if (k && n) {
                    var r = e.getContext("2d");
                    r.clearRect(0, 0, c, d);
                    r.drawImage(f, 0, 0, c, d);
                    r.globalCompositeOperation = "destination-in";
                    r.drawImage(h, 0, 0, c, d);
                    r = e.toDataURL("image/png");
                    a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
                    q.ic = new Image;
                    q.ic.onload = q.ic.onerror = function () {
                        b.cf()
                    };
                    q.ic.src = r
                }
            };
        f.onload = function () {
            k = !0;
            s()
        };
        h.onload = function () {
            n = !0;
            s()
        };
        f.src = this.data;
        h.src = this.mask
    };
    g.uu = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "mask");
        b.appendChild(this.cq(this.mask));
        b.id = qc.Ha().Ia();
        var c = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        c.appendChild(a);
        c.appendChild(b);
        a.setAttribute("mask", "url(#" + b.id + ")");
        this.va = c
    };
    g.cq = function (a) {
        var b = document.createElementNS("http://www.w3.org/2000/svg", "image");
        b.setAttribute("width", this.width);
        b.setAttribute("height", this.height);
        b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        return b
    };
    g.Ic = function (a, b, c) {
        return new Ze(new Ye(this, a), a, c)
    };
    g.dn = function (a) {
        var b = this;
        b.wk = a;
        Ci(a, Di(Ei, a) ? function (a, d) {
            return new Ze(new Ye(b, a), a, d)
        } : function (a, d) {
            return new Ye(b, a, d)
        })
    };
    g.lb = function (a, b, c, d) {
        re.q.lb.call(this, a, b, c, d);
        this.ed = c.ed
    };
    var yf = function (a, b, c, d, e) {
        this.id = a;
        this.paths = b;
        this.bounds = c;
        this.fillstyles = d;
        this.linestyles = e;
        this.Mi = null;
        this.Pi = this.Oi = this.Zk = this.$k = 0
    };
    t(yf, pi);
    yf.prototype.pt = function () {
        if (!this.bounds || 1 < this.bounds.length) return !1;
        for (var a = 0, b = 0; b < this.paths.length; b++) {
            var c = this.paths[b],
                d = c.data.xa(Yd).m.length + 3,
                e = null != c.fill ? this.fillstyles[c.fill] : null;
            if (e instanceof se) return !1;
            a += d * ( !! e + 2 * !(null == c.line || !this.linestyles[c.line]))
        }
        return 100 < a
    };
    yf.prototype.da = function (a) {
        if (!ib || !this.pt()) return null;
        if (this.bounds && 1 == this.bounds.length) {
            var b = document.createElement("canvas"),
                c = this.bounds[0],
                d = Math.ceil(c.D / 20) + 1,
                e = Math.ceil(c.C / 20) + 1,
                f = Math.floor(c.d / 20) - 1,
                c = Math.floor(c.e / 20) - 1;
            this.$k = 20 * (d - f);
            this.Zk = 20 * (e - c);
            this.Oi = 20 * f;
            this.Pi = 20 * c;
            b.width = d - f;
            b.height = e - c;
            d = b.getContext("2d");
            d.save();
            d.transform(0.05, 0, 0, 0.05, 0, 0);
            d.translate(-this.Oi, -this.Pi);
            e = new xf(this, a, null);
            e = Oe.ud(e);
            (a = a.Uc) && e.gc(d, 0) && (this.Mi = a.Al(b));
            e.p()
        }
    };
    oi[1] = function (a, b, c) {
        b = oa(we, c);
        b = a.fillstyles ? a.fillstyles.map(b) : [];
        c = oa(Be, c);
        c = a.linestyles ? a.linestyles.map(c) : [];
        return new yf(a.id, a.paths.map(Fi), a.bounds.map(Zc), b, c)
    };
    yf.prototype.Ic = function (a, b, c) {
        return new xf(this, a, c)
    };
    yf.prototype.de = function () {
        if (!this.Jd) {
            this.Jd = new $c;
            for (var a = 0; a < this.paths.length; a++)
                if (null != this.paths[a].fill) {
                    var b = this.paths[a].data.xa(Yd);
                    this.Jd = this.Jd.concat(b)
                }
        }
        return this.Jd
    };
    yf.prototype.Gd = function (a) {
        if (this.bounds) {
            if (1 == this.bounds.length) return new De(this.bounds[0]);
            var b = a / 65535,
                b = new Yc(ed(this.bounds[0].d, this.bounds[1].d, b), ed(this.bounds[0].e, this.bounds[1].e, b), ed(this.bounds[0].D, this.bounds[1].D, b), ed(this.bounds[0].C, this.bounds[1].C, b));
            return new De(b, this.bounds[0])
        }
        for (var b = {
            Xa: function () {
                return a / 65535
            }
        }, c = new Yc, d = this.paths, e = 0; e < d.length; ++e) {
            var f = d[e].data.xa(b),
                h = 0;
            null != d[e].line && (h = this.linestyles[d[e].line].width.xa(b) / 2);
            f.Fd(c, h)
        }
        return new De(c)
    };
    var Bf = function (a, b, c) {
        this.data = a;
        this.fill = b;
        this.line = c
    }, Fi = function (a) {
            return new Bf($d(a.data, fe, dd), a.fill, a.line)
        };
    var Gi = function (a, b, c) {
        this.id = a;
        this.sound = b;
        this.format = c
    };
    t(Gi, pi);
    oi[11] = function (a) {
        return new Gi(a.id, a.data, a.format)
    };
    Gi.prototype.lb = function (a, b) {
        b.He().ww(this.id, this.sound, this.format)
    };
    var Hi = function (a, b, c, d, e, f) {
        this.text = a;
        this.font = b;
        this.height = c;
        this.x = d;
        this.y = e;
        this.color = f;
        this.Wm = null
    }, Ii = function (a, b, c, d, e) {
            this.id = a;
            this.matrix = b;
            this.records = c;
            this.bounds = d;
            this.mode = e
        };
    t(Ii, pi);
    oi[6] = function (a, b, c) {
        b = Zc(a.bounds);
        for (var d = id(a.matrix), e = l(a.mode) ? a.mode : 1, f = [], h = 0; a.records && h < a.records.length; h++) {
            var k = a.records[h],
                n = l(k.font) ? c.ke(k.font) : null;
            f.push(new Hi(k.text, n, k.height, kd(k.x), Number(k.y), k.color))
        }
        return new Ii(a.id, d, f, b, e)
    };
    Ii.prototype.il = function (a) {
        a = this.records[a];
        if (a.Wm) return a.Wm;
        var b = new $c,
            c = a.text,
            d = a.font ? a.font.get() : null;
        if (d instanceof cf)
            for (var e = a.height / d.emSquareSize, f = 0; f < c.length; f++) {
                var h = d.Aq(c.charAt(f));
                if (h) var k = (new Rc(e, 0, 0, e, a.x[f], a.y)).multiply(this.matrix),
                h = h.u(k), b = b.concat(h)
            }
        return a.Wm = b
    };
    Ii.prototype.Ic = function (a, b, c) {
        return new Df(this, a, c)
    };
    var Ji = function (a) {
        this.actions = a
    };
    t(Ji, si);
    oi[9] = function (a, b) {
        var c = b.Ie(E).hk(a.actions, void 0);
        return new Ji(c)
    };
    Ji.prototype.Kh = function () {};
    Ji.prototype.Yl = function (a) {
        a.J().iq(new Ue(this.actions, a))
    };
    Ji.prototype.nm = function (a) {
        a.J().Bm(new Ue(this.actions, a))
    };
    Ji.prototype.yi = function (a) {
        a.push(this)
    };
    var Ki = function (a) {
        this.definition = a
    };
    t(Ki, ni);
    oi[18] = function (a, b) {
        return new Ki(a, b)
    };
    Ki.prototype.lb = function (a, b) {
        b.Ie(og).vw(this)
    };
    var Li = function (a) {
        this.actions = a
    };
    t(Li, Ji);
    oi[20] = function (a, b) {
        var c = b.Ie(E).hk(a.actions, void 0);
        return new Li(c)
    };
    Li.prototype.lb = function (a, b, c, d) {
        a.zk[d] || (a.zk[d] = []);
        a.zk[d].push(this)
    };
    var Mi = function (a) {
        this.id = a
    };
    t(Mi, si);
    oi[12] = function (a, b) {
        return new Mi(a.id, b)
    };
    Mi.prototype.Ve = function (a) {
        a.He().Co(this.id)
    };
    Mi.prototype.Kh = Mi.prototype.Ve;
    Mi.prototype.yi = function (a) {
        a.push(this)
    };
    var Ni = function (a) {
        this.or = a
    };
    t(Ni, si);
    oi[16] = function (a) {
        return new Ni(a.data)
    };
    Ni.prototype.lb = function (a, b, c) {
        for (var d in this.or)
            if (a = c.ke(this.or[d]).get(), a instanceof ri) a.ed[d] = a, a.kl = d;
            else if (a instanceof cf) {
            var e = d;
            b.kc[e] || (b.kc[e] = []);
            b.kc[e].push(a)
        }
    };
    var Oi = function (a, b) {
        this.yf = a;
        this.br = {};
        for (var c = 0; c < a.length; c++) this.br[a[c].name] = a[c].offset;
        this.aj = {};
        for (c = 0; c < b.length; c++) this.aj[b[c].name] = b[c].offset
    };
    t(Oi, si);
    oi[23] = function (a) {
        return new Oi(a.scenes, a.frames)
    };
    g = Oi.prototype;
    g.lb = function (a) {
        a.dg = this
    };
    g.An = function (a) {
        if (2 > this.yf.length) return 0;
        a = Na(this.yf, {
            offset: a
        }, function (a, c) {
            return a.offset - c.offset
        });
        0 > a && (a = Math.max(0, -a - 2));
        return a
    };
    g.nr = function (a) {
        return 2 > this.yf.length ? 0 : this.yf[this.An(a)].offset
    };
    g.uv = function (a) {
        a = this.An(a);
        return 0 < a ? this.yf[a - 1].offset : Number.NEGATIVE_INFINITY
    };
    g.tv = function (a) {
        a = this.An(a);
        return a < this.yf.length - 1 ? this.yf[a + 1].offset : Number.POSITIVE_INFINITY
    };
    var Pi = function (a) {
        this.xv = a
    };
    t(Pi, ni);
    oi[19] = function (a, b) {
        return new Pi(a.references, b)
    };
    Pi.prototype.lb = function (a, b, c) {
        a = this.xv;
        b = b.Ie(og).tc;
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = c.ke(e.id).get(),
                e = b[e.name];
            f && e && f.dn(e)
        }
    };
    var Qi = function (a) {
        this.lw = a
    };
    t(Qi, si);
    oi[15] = function (a) {
        return new Qi(a.label)
    };
    Qi.prototype.lb = function (a, b, c, d) {
        a.dg.aj[this.lw] = d
    };
    var ti = function (a, b, c, d) {
        this.definition = a;
        this.depth = b;
        this.matrix = c;
        this.Kf = d;
        this.cacheAsBitmap = !1
    };
    t(ti, si);
    oi[3] = function (a, b, c, d) {
        var e;
        if (l(a.actions)) {
            var f = b.Ie(E);
            e = a.actions.map(function (a) {
                return {
                    events: a.events,
                    key: a.key,
                    actions: f.hk(a.actions, void 0)
                }
            })
        }
        b = l(a.matrix) ? a.matrix ? id(a.matrix) : Sc : void 0;
        c = l(a.id) ? c.ke(a.id) : null;
        d = new ti(c, a.depth, b, d.el());
        d.name = a.name;
        d.ratio = a.ratio;
        d.replace = a.replace;
        b = !1;
        c && c.al() && (b = c.get().na);
        d.na = b;
        d.clip = a.clip;
        d.colortransform = l(a.colortransform) ? md(a.colortransform) : void 0;
        d.blendmode = a.blendmode;
        d.cacheAsBitmap = a.cacheAsBitmap;
        c = void 0;
        if (a.filters)
            for (c = [], b = 0; b < a.filters.length; b++) c.push(ih(a.filters[b]));
        d.filters = c;
        d.actions = e;
        d.visible = a.visible;
        return d
    };
    g = ti.prototype;
    g.Ve = function (a) {
        var b = this.depth + -16384,
            c = a.F.Fc(b),
            d = null;
        if (!this.replace == !c) {
            if (c)
                if (!this.definition || c.na() || this.na) d = c;
                else {
                    if (a.vd(b), d = this.oj(a)) d.setTransform(c.Z()), d.hc(c.tb), d.Jf(c.Na), d.mh(c.hb()), d.Uk(c.Lb()), d.Kb(c.getName())
                } else d = this.oj(a);
            d && !d.Ro() && (this.matrix && d.setTransform(this.matrix), this.colortransform && d.hc(this.colortransform), l(this.ratio) && d.Ti(this.ratio), l(this.filters) && d.Jf(this.filters), l(this.blendmode) && d.mh(this.blendmode), l(this.visible) && d.pj( !! this.visible),
                l(this.cacheAsBitmap) && d.Tl(this.cacheAsBitmap))
        }
    };
    g.Kh = function (a) {
        var b = a.F.Fc(this.depth + -16384),
            c = null;
        if (b) {
            var c = b.na() && this.na,
                d = this.definition ? this.definition.id : void 0,
                d = !b.na() && b.definition.id == d;
            (c || d) && b.Xa() == (this.ratio | 0) ? c = b : (a.F.lu(b), c = this.oj(a))
        } else c = this.oj(a); if (c) return c.Ro() || (c.setTransform(this.matrix ? this.matrix : Sc), c.hc(this.colortransform ? this.colortransform : Vc), c.Ti(this.ratio | 0), c.Jf(this.filters ? this.filters : []), c.mh(this.blendmode | 0), l(this.visible) && c.pj( !! this.visible)), c
    };
    g.oj = function (a) {
        if (!this.definition || !this.definition.al()) return null;
        var b = this.definition.get(),
            c = b.Ic(a.a, this.Kf);
        if (!c) return null;
        this.name ? c.Kb(this.name) : a.a.J().zo(a.a, c);
        this.clip && c.Uk(this.clip + -16384);
        if (this.actions)
            for (c.qh(7), b = 0; b < this.actions.length; ++b) {
                var d = this.actions[b];
                c.eo(d.events, d.key, d.actions)
            } else b.kl && c.qh(7);
        a.ad(c, this.depth + -16384);
        c.da(!0);
        return c
    };
    g.zn = function (a) {
        a.push(this)
    };
    g.yi = function (a) {
        var b = ui(a, this.depth);
        if (0 > b) this.replace || a.push(this);
        else if (this.replace) {
            var c = a[b];
            a.splice(b, 1);
            b = c.definition;
            c.na || this.na || !this.definition || (b = this.definition);
            b = new ti(b, this.depth, l(this.matrix) ? this.matrix : c.matrix, this.Kf);
            b.name = c.name;
            b.ratio = l(this.ratio) ? this.ratio : c.ratio;
            b.replace = !1;
            b.na = c.na;
            b.clip = c.clip;
            b.colortransform = l(this.colortransform) ? this.colortransform : c.colortransform;
            b.blendmode = l(this.blendmode) ? this.blendmode : c.blendmode;
            b.visible = l(this.visible) ?
                this.visible : c.visible;
            b.filters = l(this.filters) ? this.filters : c.filters;
            b.actions = c.actions;
            a.push(b)
        }
    };
    g.qw = function (a) {
        if (!this.actions || !this.na) return !1;
        for (var b = 0; b < this.actions.length; ++b)
            if (0 != (this.actions[b].events & a)) return !0;
        return !1
    };
    g.ow = function () {
        var a = new ti(this.definition, this.depth + -65536, this.matrix, this.Kf);
        a.name = this.name;
        a.ratio = this.ratio;
        a.replace = !1;
        a.na = !0;
        a.clip = 0;
        a.colortransform = this.colortransform;
        a.blendmode = this.blendmode;
        a.filters = this.filters;
        a.actions = this.actions;
        a.visible = this.visible;
        return a
    };
    var Ri = function (a) {
        this.sn = a
    };
    t(Ri, si);
    oi[4] = function (a) {
        return new Ri(a.depth)
    };
    g = Ri.prototype;
    g.Ve = function (a) {
        a.vd(this.sn + -16384)
    };
    g.Kh = Ri.prototype.Ve;
    g.zn = function (a) {
        a.push(this)
    };
    g.yi = function (a) {
        var b = ui(a, this.sn);
        if (0 <= b) {
            var c = a[b];
            c.qw(160) ? (a[b] = c.ow(), a.push(this.pw())) : a.splice(b, 1)
        }
    };
    g.pw = function () {
        return new Ri(this.sn + -65536)
    };
    var Jf = function (a, b, c, d) {
        ri.call(this, a, d);
        this.dp = [];
        this.dg = new Oi([], []);
        this.frameCount = b;
        this.scaleRect = c;
        this.tags = [];
        this.zk = []
    };
    t(Jf, ri);
    var Mf = function (a, b, c, d) {
        var e = l(a.scaleRect) ? Zc(a.scaleRect) : null,
            e = new Jf(a.id, a.frameCount, e, c.ed);
        l(a.id) || c.wr(0, e);
        if (!d)
            if (d = a.digest) {
                var f = Kd[d],
                    h = new Id(f);
                f || (Kd[d] = h.pr);
                d = h
            } else d = Jd;
        for (var k = h = f = 0; a.tags && k < a.tags.length; k++) {
            var n = a.tags[k];
            if (2 == n.type) f++, h = 0;
            else {
                var q = oi[n.type];
                q && (h++, q(n, b, c, d, void 0).lb(e, b, c, f))
            }
        }
        e.vv();
        return e
    };
    oi[7] = Mf;
    Jf.prototype.na = !0;
    Jf.prototype.Ic = function (a, b, c) {
        a = new A(this, a, b, c);
        this.scaleRect && a.ly(this.scaleRect);
        return a
    };
    Jf.prototype.vv = function () {
        for (var a = [], b = 0; b < this.frameCount; ++b) {
            for (var c = this.tags[b], d = [], e = 0; e < a.length; ++e) a[e].zn(d);
            if (c)
                for (e = 0; e < c.length; ++e) c[e].yi(d);
            a = this.dp[b] = d
        }
    };
    var ng = function (a, b) {
        this.yp = a ? a : 60;
        this.Yq = 1E3 / this.yp;
        this.oi = 0;
        this.$q = b;
        this.kk = !1
    };
    ng.prototype.start = function () {
        this.kk || (this.kk = !0, this.oi = Date.now(), td(na(this.gr, this)))
    };
    ng.prototype.stop = function () {
        this.kk = !1
    };
    ng.prototype.gr = function () {
        if (this.kk) {
            var a = Date.now();
            a >= this.oi && (this.$q.Ul(), this.oi += (Math.floor((a - this.oi) / this.Yq) + 1) * this.Yq);
            this.$q.Wa();
            td(na(this.gr, this))
        }
    };
    var Si = RegExp("^[A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd][A-Z_a-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c-\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd.0-9\u00b7\u0300-\u036f\u203f-\u2040-]*$"),
        Ti = function (a) {
            if (null != a && (a = String(a), a.match(Si))) return a
        }, Ui = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            '"': "&quot;",
            "'": "&apos;",
            "\t": "&#x9;",
            "\n": "&#xA;",
            "\r": "&#xD;"
        }, Vi = function (a) {
            return Ui[a] || a
        }, Wi = function (a) {
            return String(a).replace(/[<>&]/g, Vi)
        }, Xi = function (a) {
            return String(a).replace(/[<&"\t\n\r]/g, Vi)
        }, Yi = {}, Zi;
    for (Zi in Ui) Yi[Ui[Zi]] = Zi;
    var $i = function (a) {
        return a.replace(/&(#?)([^\s]+?);/g, function (a, c, d) {
            return c && (c = Number("0" + d), c === c) ? String.fromCharCode(c) : Yi[a] || a
        })
    }, aj = function (a, b, c) {
            this.bc = a;
            this.Aa = 0;
            this.av = b;
            this.zu = c;
            this.next = this.ai
        };
    g = aj.prototype;
    g.cr = function () {
        this.next = this.cr;
        return null
    };
    g.Rc = function (a) {
        this.next = function () {
            throw this.Rc(a);
        };
        throw new bj(a);
    };
    g.ai = function () {
        var a = this.Zj("<"),
            b;
        0 > a ? (b = this.bc.substring(this.Aa), this.next = this.cr) : (b = this.bc.substring(this.Aa, a), this.Aa = a, this.next = this.hv);
        this.av && (b = b.trim());
        return b ? (b = $i(b), {
            type: "text",
            value: b
        }) : this.next()
    };
    g.hv = function () {
        var a = this.ci("<![CDATA[", "]]\x3e", !1, "cdata");
        if (a || (a = this.ci("\x3c!--", "--\x3e", !1, "comment")) || (a = this.ci("<!DOCTYPE", ">", !0, "doctype")) || (a = this.ci("<?XML", "?>", !0, "xml_declaration")) || !this.zu && (a = this.ci("<?", "?>", !1, "processing_instruction"))) return a;
        if ("/" == this.bc.charAt(this.Aa + 1)) return this.next = this.ai, {
            type: "close",
            value: this.Hu()
        };
        for (a = {
            type: "tag",
            value: this.Iu(),
            attributes: []
        };;) {
            this.qq();
            if (this.Ku()) throw this.Rc("tag");
            if (this.Gm(">")) return this.next = this.ai,
            a;
            if (this.Gm("/>")) return this.next = this.Ju(a.value), a;
            a.attributes.push({
                name: this.Fu(),
                value: this.Gu()
            })
        }
    };
    g.Ju = function (a) {
        return function () {
            this.next = this.ai;
            return {
                type: "close",
                value: a
            }
        }
    };
    g.Zj = function (a) {
        return this.bc.indexOf(a, this.Aa)
    };
    g.Ku = function () {
        return this.Aa >= this.bc.length
    };
    g.Gm = function (a) {
        return this.bc.substr(this.Aa, a.length).toUpperCase() == a ? (this.Aa += a.length, !0) : !1
    };
    g.qq = function () {
        for (var a = this.bc; this.Aa < a.length; this.Aa++) switch (a.charAt(this.Aa)) {
        case " ":
        case "\t":
        case "\r":
        case "\n":
            break;
        default:
            return
        }
    };
    g.ci = function (a, b, c, d) {
        var e = this.Aa;
        if (!this.Gm(a)) return null;
        a = this.Zj(b);
        if (0 > a) throw this.Rc(d);
        c = c ? this.bc.substring(e, a + b.length) : this.bc.substring(this.Aa, a);
        this.Aa = a + b.length;
        this.next = this.ai;
        return {
            type: d,
            value: c
        }
    };
    g.Iu = function () {
        for (var a = this.bc, b = this.Aa + 1, c = b; c < a.length; c++) switch (a.charAt(c)) {
        case "/":
            if (">" != a.charAt(c + 1)) break;
        case " ":
        case "\t":
        case "\r":
        case "\n":
        case ">":
            if (c == b) throw this.Rc("tag");
            this.Aa = c;
            return a.substring(b, c)
        }
        throw this.Rc("tag");
    };
    g.Hu = function () {
        for (var a = this.bc, b = this.Aa + 2, c = !1, d = b; d < a.length; d++) switch (a.charAt(d)) {
        case " ":
        case "\t":
        case "\r":
        case "\n":
            c = !0;
            break;
        case ">":
            if (d == b) throw this.Rc("close");
            this.Aa = d + 1;
            return a.substring(b, d).trim();
        default:
            if (c) throw this.Rc("close");
        }
        throw this.Rc("close");
    };
    g.Fu = function () {
        var a = this.Zj(">");
        if (0 > a) throw this.Rc("tag");
        var b = this.Zj("="),
            c = this.Aa;
        if (0 > b || b == c || b > a) throw this.Rc("attribute");
        this.Aa = b + 1;
        return this.bc.substring(c, b).trim()
    };
    g.Gu = function () {
        this.qq();
        var a = this.bc,
            b = this.Aa,
            c = a.charAt(b++);
        if ('"' == c || "'" == c)
            for (var d = b; d < a.length; d++)
                if (a.charAt(d) == c) return this.Aa = d + 1, $i(a.substring(b, d));
        throw this.Rc("attribute");
    };
    var bj = function (a) {
        this.type = a
    };
    var cj = null;
    var dj = function () {
        this.source = ""
    };
    g = dj.prototype;
    g.append = function (a) {
        this.source += a;
        return this
    };
    g.Rp = function () {
        var a = this.source;
        this.source = "";
        return a
    };
    g.yj = function (a) {
        return a.cw
    };
    g.Zl = function (a) {
        return this.append(this.yj(a))
    };
    g.Zh = function (a, b) {
        this.Zl(a).append("(");
        for (var c = 1; c < arguments.length; ++c) 1 < c && this.append(","), this.append(arguments[c]);
        return this.append(")")
    };
    g.X = function (a, b) {
        return this.Zh.apply(this, arguments).append(";")
    };
    g.bv = function (a) {
        return m(a) ? ya(a) : String(a)
    };
    Object.defineProperty(Array, "CASEINSENSITIVE", {
        value: 1
    });
    Object.defineProperty(Array, "DESCENDING", {
        value: 2
    });
    Object.defineProperty(Array, "NUMERIC", {
        value: 16
    });
    Object.defineProperty(Array, "RETURNINDEXEDARRAY", {
        value: 8
    });
    Object.defineProperty(Array, "UNIQUESORT", {
        value: 4
    });
    var ej = function (a, b, c) {
        var d = b & Array.DESCENDING ? -1 : 1,
            e = cj,
            f;
        f = b & Array.NUMERIC ? e.cs : b & Array.CASEINSENSITIVE ? e.as : e.bs;
        return function (b, k) {
            return d * f.call(e, b && b[a], k && k[a]) || c(b, k)
        }
    }, fj = function (a, b) {
            return function (c, d) {
                return b(a[c], a[d])
            }
        };
    Object.defineProperty(Array.prototype, "sortOn", {
        value: function (a, b) {
            a = ea(a) ? a : [a];
            var c;
            ea(b) && b.length == a.length ? c = b[0] >>> 0 : (c = b >>> 0, b = null);
            for (var d = c & Array.RETURNINDEXEDARRAY, e = c & Array.UNIQUESORT, f = !1, h = function () {
                    f = !0;
                    return 0
                }, k = a.length - 1; 0 <= k; --k) h = ej(a[k], b ? b[k] >>> 0 : c, h);
            c = this;
            if (d || e)
                for (h = fj(c, h), c = [], k = this.length - 1; 0 <= k; --k) c[k] = k;
            c.sort(h);
            if (e) {
                if (f) return 0;
                if (!d) {
                    for (d = 0; d < c.length; d++)
                        if (-1 != c[d]) {
                            for (var e = this[d], n, h = d; n = c[h], c[h] = -1, n != d; h = n) this[h] = this[n];
                            this[h] = e
                        }
                    return this
                }
            }
            return c
        }
    });
    var gj = function () {
        this.za = {};
        this.en = this.tk = 0;
        z(this, null, 3)
    };
    y(gj, "Key");
    gj.prototype.getAscii = function () {
        return this.en
    };
    gj.prototype.getCode = function () {
        return this.tk
    };
    gj.prototype.isDown = function (a) {
        return !!this.za[a]
    };
    gj.prototype.isToggled = function () {
        return !1
    };
    Object.defineProperties(gj.prototype, {
        BACKSPACE: {
            value: 8
        },
        CAPSLOCK: {
            value: 20
        },
        CONTROL: {
            value: 17
        },
        DELETEKEY: {
            value: 46
        },
        DOWN: {
            value: 40
        },
        END: {
            value: 35
        },
        ENTER: {
            value: 13
        },
        ESCAPE: {
            value: 27
        },
        HOME: {
            value: 36
        },
        INSERT: {
            value: 45
        },
        LEFT: {
            value: 37
        },
        PGDN: {
            value: 34
        },
        PGUP: {
            value: 33
        },
        RIGHT: {
            value: 39
        },
        SHIFT: {
            value: 16
        },
        SPACE: {
            value: 32
        },
        TAB: {
            value: 9
        },
        UP: {
            value: 38
        }
    });
    gj.prototype.ak = function (a) {
        this.tk = a.keyCode;
        this.za[a.keyCode] = !1
    };
    gj.prototype.$j = function (a) {
        this.tk = a.keyCode;
        this.en = a.charCode;
        this.za[a.keyCode] = !0
    };
    var hj = {
        37: 1,
        39: 2,
        36: 3,
        35: 4,
        45: 5,
        46: 6,
        8: 8,
        13: 13,
        38: 14,
        40: 15,
        33: 16,
        34: 17,
        9: 18,
        27: 19
    };
    gj.prototype.Bt = function () {
        var a = hj[this.tk];
        return a ? a : this.en
    };
    z(gj.prototype, null, 3);
    var ij = function () {
        Object.defineProperty(this, "__swiffy_mv", {
            value: !0,
            writable: !0
        });
        z(this, null, 3)
    };
    y(ij, "Mouse");
    ij.prototype.Gg = function () {
        this.broadcastMessage("onMouseDown")
    };
    ij.prototype.zg = function () {
        this.broadcastMessage("onMouseMove")
    };
    ij.prototype.Hg = function () {
        this.broadcastMessage("onMouseUp")
    };
    ij.prototype.hide = function () {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !1;
        return a
    };
    ij.prototype.show = function () {
        var a = this.__swiffy_mv;
        this.__swiffy_mv = !0;
        return a
    };
    z(ij.prototype, null, 3);
    var jj = function (a) {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                Wf: this.__swiffy_vm.jg(a),
                Uq: 0
            }
        })
    };
    y(jj, "Color");
    Xf(jj);
    jj.prototype.getRGB = function () {
        var a = this.__swiffy_v.Wf;
        return a && a.__swiffy_d ? this.__swiffy_v.Uq : void 0
    };
    jj.prototype.setRGB = function (a) {
        var b = this.__swiffy_v.Wf;
        b && (b = b.__swiffy_d) && (this.__swiffy_v.Uq = a, b.hc(new Uc(0, (a & 16711680) >> 16, 0, (a & 65280) >> 8, 0, a & 255, 1, 0)), b.Ca())
    };
    jj.prototype.setTransform = function (a) {
        var b = this.__swiffy_v.Wf;
        if (b && a && (b = b.__swiffy_d)) {
            var c = this.__swiffy_vm,
                d = c.t(a, "ra"),
                e = c.t(a, "rb"),
                f = c.t(a, "ga"),
                h = c.t(a, "gb"),
                k = c.t(a, "ba"),
                n = c.t(a, "bb"),
                q = c.t(a, "aa"),
                c = c.t(a, "ab"),
                s = b.tb;
            b.hc(new Uc(l(a[d]) ? a[d] / 100 : s.W, l(a[e]) ? a[e] : s.O, l(a[f]) ? a[f] / 100 : s.U, l(a[h]) ? a[h] : s.N, l(a[k]) ? a[k] / 100 : s.T, l(a[n]) ? a[n] : s.K, l(a[q]) ? a[q] / 100 : s.H, l(a[c]) ? a[c] : s.P));
            b.Ca()
        }
    };
    jj.prototype.getTransform = function () {
        var a = this.__swiffy_v.Wf;
        if (a && (a = a.__swiffy_d)) return a = a.tb, {
            ra: 100 * a.W,
            rb: a.O,
            ga: 100 * a.U,
            gb: a.N,
            ba: 100 * a.T,
            bb: a.K,
            aa: 100 * a.H,
            ab: a.P
        }
    };
    z(jj.prototype, null, 3);
    var Ue = function (a, b) {
        this.pu = a;
        this.b = b
    };
    var kj = function (a, b) {
        this.object = a;
        this.method = b
    };
    kj.prototype.Qp = function () {
        for (var a = this.object, b = !1; a = Object.getPrototypeOf(a);) {
            if (b) return a;
            for (var c = Object.getOwnPropertyNames(a), d = 0; d < c.length && !b; d++) a[c[d]] === this.method && (b = !0)
        }
    };
    var lj = function (a, b) {
        this.Q = a;
        this.data = {};
        this.mb = b
    };
    g = lj.prototype;
    g.get = function (a) {
        var b = this.Q.t(this.data, a);
        return b in this.data ? this.data[b] : this.mb.get(a)
    };
    g.call = function (a, b) {
        var c = this.Q.t(this.data, a);
        if (c in this.data)
            if (c = this.data[c], c instanceof kj) {
                var d = Object.getPrototypeOf(c.method.prototype).constructor;
                if (p(d)) return d.apply(c.object, b)
            } else {
                if (p(c)) return c.apply(this.Nb(), b)
            } else return this.mb.call(a, b)
    };
    g.set = function (a, b) {
        var c = this.Q.t(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.mb.set(a, b)
    };
    g.Hd = function (a, b) {
        this.data[this.Q.dd(this.data, a)] = b
    };
    g.Rh = function (a) {
        a = this.Q.dd(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.ce = function (a) {
        return this.Q.t(this.data, a) in this.data ? !1 : this.mb.ce(a)
    };
    g.Ad = function (a) {
        this.mb.Ad(a)
    };
    g.Nb = function () {
        return this.mb.Nb()
    };
    g.Ze = function () {
        return this.mb.Ze()
    };
    var mj = function (a, b, c) {
        this.Q = a;
        this.data = c;
        this.mb = b
    };
    g = mj.prototype;
    g.get = function (a) {
        var b = this.Q.t(this.data, a);
        return b in this.data ? this.data[b] : this.mb.get(a)
    };
    g.call = function (a, b) {
        var c = this.Q.t(this.data, a);
        if (c in this.data) {
            if (c = this.data[c], p(c)) return c.apply(this.data, b)
        } else return this.mb.call(a, b)
    };
    g.set = function (a, b) {
        var c = this.Q.t(this.data, a);
        return c in this.data ? (this.data[c] = b, !0) : this.mb.set(a, b)
    };
    g.Hd = function (a, b) {
        var c = this.Q.t(this.data, a);
        c in this.data ? this.data[c] = b : this.mb.Hd(a, b)
    };
    g.Rh = function (a) {
        this.Q.t(this.data, a) in this.data || this.mb.Rh(a)
    };
    g.ce = function (a) {
        var b = this.Q.t(this.data, a);
        return b in this.data ? this.Q.uc(this.data, b) : this.mb.ce(a)
    };
    g.Ad = function (a) {
        this.mb.Ad(a)
    };
    g.Nb = function () {
        return this.mb.Nb()
    };
    g.Ze = function () {
        return this.mb.Ze()
    };
    var nj = function (a, b, c) {
        this.Q = a;
        this.Vm = this.data = c;
        this.ym = b;
        this.Hm = c
    };
    g = nj.prototype;
    g.get = function (a) {
        var b = this.Q.t(this.data, a);
        return b in this.data ? this.data[b] : "this" == a.toLowerCase() ? this.Hm : this.ym.get(a)
    };
    g.call = function (a, b) {
        var c = this.Q.t(this.data, a),
            d = this.data[c];
        if (c in this.data) {
            if (p(d)) return d.apply(this.data, b)
        } else return this.ym.call(a, b)
    };
    g.set = function (a, b) {
        var c = this.Q.dd(this.data, a);
        this.data[c] = b;
        return !0
    };
    g.Hd = function (a, b) {
        var c = this.Q.dd(this.data, a);
        this.data[c] = b
    };
    g.Rh = function (a) {
        a = this.Q.dd(this.data, a);
        a in this.data || (this.data[a] = void 0)
    };
    g.ce = function (a) {
        var b = this.Q.t(this.data, a);
        return b in this.data ? this.Q.uc(this.data, b) : this.ym.ce(a)
    };
    g.Ad = function (a) {
        a ? this.data = this.Vm = a : (this.Vm = null, this.data = this.Hm)
    };
    g.Nb = function () {
        return this.Vm
    };
    g.Ze = function () {
        return this.Hm
    };
    var oj = function (a) {
        this.Q = a;
        this.data = new F(a);
        this.data._global = this.data;
        z(this.data, "_global", 3)
    };
    g = oj.prototype;
    g.get = function (a) {
        return this.data[this.Q.t(this.data, a)]
    };
    g.call = function (a, b) {
        var c = this.data[this.Q.t(this.data, a)];
        if (p(c)) return c.apply(this.data, b)
    };
    g.set = function () {
        return !1
    };
    g.Hd = function () {};
    g.Rh = function () {};
    g.ce = function (a) {
        a = this.Q.t(this.data, a);
        return this.Q.uc(this.data, a)
    };
    g.Ad = function () {
        throw new TypeError("setTarget should not be called on the GlobalContext");
    };
    g.Nb = function () {
        throw new TypeError("getTarget should not be called on the GlobalContext");
    };
    g.Ze = function () {
        throw new TypeError("getTargetBase should not be called on the GlobalContext");
    };
    var x = function () {};
    Od(x, Qd);
    x.prototype.valueOf = function () {
        return this
    };
    x.prototype.getDepth = function () {
        var a = this.__swiffy_d;
        return a ? a.depth : void 0
    };
    var pj = function (a, b, c, d) {
        Object.defineProperty(a, b, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return c.call(this, a)
            },
            set: function (a) {
                var c = this.__swiffy_d;
                c ? d.call(this, c, a) : Object.defineProperty(this, b, {
                    value: a
                })
            }
        })
    }, qj = function (a, b, c, d) {
            pj(a, b, c, function (a, b) {
                var c = a.a.J().Ue(b);
                isNaN(c) || d.call(this, a, c)
            })
        }, rj = function (a, b) {
            pj(a, b, function () {
                return 0
            }, function () {})
        }, sj = function (a, b, c) {
            pj(a, b, c, function () {})
        };
    qj(x.prototype, "_x", function (a) {
        return a.Z().i / 20
    }, function (a, b) {
        var c = a.Z();
        a.setTransform(c.translate(20 * b - c.i, 0));
        a.Ca()
    });
    qj(x.prototype, "_y", function (a) {
        return a.Z().j / 20
    }, function (a, b) {
        var c = a.Z();
        a.setTransform(c.translate(0, 20 * b - c.j));
        a.Ca()
    });
    qj(x.prototype, "_xscale", function (a) {
        return 100 * a.yc().zd
    }, function (a, b) {
        a.yc().zd = b / 100;
        a.Jg();
        a.Ca()
    });
    qj(x.prototype, "_yscale", function (a) {
        return 100 * a.yc().Je
    }, function (a, b) {
        a.yc().Je = b / 100;
        a.Jg();
        a.Ca()
    });
    qj(x.prototype, "_alpha", function (a) {
        return (256 * a.tb.H | 0) / 2.56
    }, function (a, b) {
        var c = a.tb;
        a.hc(new Uc(c.W, c.O, c.U, c.N, c.T, c.K, b / 100, c.P));
        a.Ca()
    });
    qj(x.prototype, "_visible", function (a) {
        return a.Fe
    }, function (a, b) {
        a.pj(Boolean(b))
    });
    qj(x.prototype, "_rotation", function (a) {
        return -180 * a.yc().angle / Math.PI
    }, function (a, b) {
        a.yc().angle = -b * Math.PI / 180;
        a.Jg();
        a.Ca()
    });
    pj(x.prototype, "_name", function (a) {
        return a.getName()
    }, function (a, b) {
        a.Kb(b)
    });
    rj(x.prototype, "_quality");
    rj(x.prototype, "_highquality");
    rj(x.prototype, "_soundbuftime");
    sj(x.prototype, "_parent", function (a) {
        return (a = a.getParent()) && a != a.a.B ? a.r : void 0
    });
    sj(x.prototype, "_xmouse", function (a) {
        var b = a.a.jc.G();
        b.u(a.fc());
        return b.x / 20
    });
    sj(x.prototype, "_ymouse", function (a) {
        var b = a.a.jc.G();
        b.u(a.fc());
        return b.y / 20
    });
    sj(x.prototype, "_url", function (a) {
        return null === a.Cd ? a.Pl().Cd.replace(/^([^?#]+)\.html?\b/, "$1") : a.Cd
    });
    qj(x.prototype, "_width", function (a) {
        return a.ka()
    }, function (a, b) {
        a.nn(b);
        a.Ca()
    });
    qj(x.prototype, "_height", function (a) {
        return a.jb()
    }, function (a, b) {
        a.mn(b);
        a.Ca()
    });
    sj(x.prototype, "_root", function (a) {
        for (; a && !a.Hi && a.getParent() != a.a.B;) a = a.getParent();
        return a ? a.r : void 0
    });
    sj(x.prototype, "_target", function (a) {
        for (var b = ""; a && a.getName();) b = "/" + a.getName() + b, a = a.getParent();
        a && a.getParent() == a.a.B && (a = a.depth - -16384) && (b = "_level" + a + b);
        return b || "/"
    });
    pj(x.prototype, "filters", function (a) {
        var b = [];
        a = a.Na;
        for (var c = 0; c < a.length; c++) b.push(a[c].wf());
        return b
    }, function (a, b) {
        for (var c = [], d = 0; null != b && d < b.length; d++) {
            var e = b[d].__swiffy_v;
            c.push(e ? e : new Ph)
        }
        a.Jf(c)
    });
    pj(x.prototype, "transform", function (a) {
        return new tj(a)
    }, function (a, b) {
        if (ia(b)) {
            var c = new tj(a);
            c.colorTransform = b.colorTransform;
            c.matrix = b.matrix
        }
    });
    z(x.prototype, null, 3);
    var uj = function () {};
    Od(uj, x);
    var vj = function (a, b) {
        Object.defineProperty(this, a, {
            value: b,
            configurable: !0,
            writable: !0,
            enumerable: !0
        });
        var c = this.__swiffy_d;
        c && c != c.a.Pa && c.xh()
    }, wj = function () {}, xj = [, , "onMouseUp", "onMouseDown", "onMouseMove", "onUnload", "onEnterFrame"];
    xj[19] = "onConstruct";
    xj[7] = "onLoad";
    xj[14] = "onDragOver";
    xj[16] = "onDragOver";
    xj[8] = "onRollOut";
    xj[9] = "onRollOver";
    xj[10] = "onReleaseOutside";
    xj[11] = "onRelease";
    xj[12] = "onPress";
    xj[13] = "onDragOut";
    xj[15] = "onDragOut";
    for (var yj = {}, zj = 0; zj < xj.length; zj++)
        if (1 << zj & 63045376) {
            var Aj = xj[zj];
            yj[Aj] = {
                get: wj,
                set: oa(vj, Aj)
            }
        }
    Object.defineProperties(uj.prototype, yj);
    z(uj.prototype, null, 3);
    var Bj = function () {};
    Od(Bj, uj);
    z(Bj.prototype, null, 3);
    var Cj = function (a) {
        this.name = "Error";
        this.message = l(a) ? a : "Error"
    };
    y(Cj, "Error");
    Cj.prototype.toString = function () {
        return this.message
    };
    z(Cj.prototype, null, 3);
    var Dj = function (a) {
        return Qd.call(this, a)
    };
    y(Dj, "Function", Qd);
    Object.defineProperty(Dj, "__swiffy_wrapped_type", {
        value: Function
    });
    Object.defineProperty(Function, "__swiffy_override", {
        value: Rd
    });
    Object.defineProperty(Dj, "__swiffy_override", {
        value: Rd
    });
    Dj.prototype.apply = function (a, b) {
        var c = this;
        if (p(c)) return "__swiffy_override" in c && (c = c.__swiffy_override), Function.prototype.apply.call(c, Ej(a), ea(b) ? b : [])
    };
    Object.defineProperty(Function.prototype.apply, "__swiffy_override", {
        value: Dj.prototype.apply
    });
    Function.prototype.bind && Object.defineProperty(Function.prototype.bind, "__swiffy_override", {
        value: void 0
    });
    Dj.prototype.call = function (a, b) {
        return Dj.prototype.apply.call(this, a, Array.prototype.slice.call(arguments, 1))
    };
    Object.defineProperty(Function.prototype.call, "__swiffy_override", {
        value: Dj.prototype.call
    });
    z(Dj, null, 3);
    z(Dj.prototype, null, 3);
    var Fj = function (a, b, c, d, e, f) {
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new Rc(l(a) ? a : 1, l(b) ? b : 0, l(c) ? c : 0, l(d) ? d : 1, l(e) ? e : 0, l(f) ? f : 0)
        })
    };
    y(Fj, "Matrix", Qd);
    var Gj = function (a) {
        return new Fj(a.k, a.o, a.h, a.g, a.i / 20, a.j / 20)
    };
    Object.defineProperty(Fj.prototype, "a", {
        get: function () {
            return this.__swiffy_v.k
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(a, b.o, b.h, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(Fj.prototype, "b", {
        get: function () {
            return this.__swiffy_v.o
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, a, b.h, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(Fj.prototype, "c", {
        get: function () {
            return this.__swiffy_v.h
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, b.o, a, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(Fj.prototype, "d", {
        get: function () {
            return this.__swiffy_v.g
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, b.o, b.h, a, b.i, b.j)
        }
    });
    Object.defineProperty(Fj.prototype, "tx", {
        get: function () {
            return this.__swiffy_v.i
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.cd(a, b.j)
        }
    });
    Object.defineProperty(Fj.prototype, "ty", {
        get: function () {
            return this.__swiffy_v.j
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = b.cd(b.i, a)
        }
    });
    Fj.prototype.clone = function () {
        var a = new Fj;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    Fj.prototype.concat = function (a) {
        this.__swiffy_v = this.__swiffy_v.multiply(a.__swiffy_v)
    };
    Fj.prototype.copyFrom = function (a) {
        this.__swiffy_v = a.__swiffy_v
    };
    Fj.prototype.createBox = function (a, b, c, d, e) {
        this.__swiffy_v = Sc.Zg(-(c || 0)).Vd(a, b).translate(d || 0, e || 0)
    };
    Fj.prototype.createGradientBox = function (a, b, c, d, e) {
        this.__swiffy_v = Sc.Zg(-(c || 0)).Vd(a / 1638.4, b / 1638.4).translate(a / 2 + (d || 0), b / 2 + (e || 0))
    };
    Fj.prototype.deltaTransformPoint = function (a) {
        return new Hj(this.__swiffy_v.k * a.x + this.__swiffy_v.h * a.y, this.__swiffy_v.o * a.x + this.__swiffy_v.g * a.y)
    };
    Fj.prototype.identity = function () {
        this.__swiffy_v = Sc
    };
    Fj.prototype.invert = function () {
        this.__swiffy_v = this.__swiffy_v.Bc()
    };
    Fj.prototype.rotate = function (a) {
        this.__swiffy_v = this.__swiffy_v.Zg(-a)
    };
    Fj.prototype.scale = function (a, b) {
        this.__swiffy_v = this.__swiffy_v.Vd(a, b)
    };
    Fj.prototype.transformPoint = function (a) {
        return new Hj(this.__swiffy_v.k * a.x + this.__swiffy_v.h * a.y + this.__swiffy_v.i, this.__swiffy_v.o * a.x + this.__swiffy_v.g * a.y + this.__swiffy_v.j)
    };
    Fj.prototype.translate = function (a, b) {
        this.__swiffy_v = this.__swiffy_v.translate(a, b)
    };
    Fj.prototype.toString = function () {
        return "(a=" + this.__swiffy_v.k + ", b=" + this.__swiffy_v.o + ", c=" + this.__swiffy_v.h + ", d=" + this.__swiffy_v.g + ", tx=" + this.__swiffy_v.i + ", ty=" + this.__swiffy_v.j + ")"
    };
    var Ij = function (a, b, c, d, e, f, h, k) {
        a = l(a) ? a : 1;
        b = l(b) ? b : 1;
        c = l(c) ? c : 1;
        d = l(d) ? d : 1;
        e = l(e) ? e : 0;
        f = l(f) ? f : 0;
        h = l(h) ? h : 0;
        k = l(k) ? k : 0;
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new Uc(a, e, b, f, c, h, d, k)
        })
    };
    y(Ij, "ColorTransform", Qd);
    var Jj = function (a) {
        return new Ij(a.W, a.U, a.T, a.H, a.O, a.N, a.K, a.P)
    };
    Object.defineProperty(Ij.prototype, "redMultiplier", {
        get: function () {
            return this.__swiffy_v.W
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(Number(a), b.O, b.U, b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "greenMultiplier", {
        get: function () {
            return this.__swiffy_v.U
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, Number(a), b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "blueMultiplier", {
        get: function () {
            return this.__swiffy_v.T
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, Number(a), b.K, b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "alphaMultiplier", {
        get: function () {
            return this.__swiffy_v.H
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, b.K, Number(a), b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "redOffset", {
        get: function () {
            return this.__swiffy_v.O
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, Number(a), b.U, b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "greenOffset", {
        get: function () {
            return this.__swiffy_v.N
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, Number(a), b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "blueOffset", {
        get: function () {
            return this.__swiffy_v.K
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, Number(a), b.H, b.P)
        }
    });
    Object.defineProperty(Ij.prototype, "alphaOffset", {
        get: function () {
            return this.__swiffy_v.P
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, b.K, b.H, Number(a))
        }
    });
    Object.defineProperty(Ij.prototype, "rgb", {
        get: function () {
            return (this.__swiffy_v.O << 16 | this.__swiffy_v.N << 8 | this.__swiffy_v.K) >>> 0
        },
        set: function (a) {
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.H, b.P)
        }
    });
    Ij.prototype.concat = function (a) {
        this.__swiffy_v = this.__swiffy_v.zm(a.__swiffy_v)
    };
    Ij.prototype.toString = function () {
        return "(redMultiplier=" + this.__swiffy_v.W + ", greenMultiplier=" + this.__swiffy_v.U + ", blueMultiplier=" + this.__swiffy_v.T + ", alphaMultiplier=" + this.__swiffy_v.H + ", redOffset=" + this.__swiffy_v.O + ", greenOffset=" + this.__swiffy_v.N + ", blueOffset=" + this.__swiffy_v.K + ", alphaOffset=" + this.__swiffy_v.P + ")"
    };
    var tj = function (a) {
        a instanceof Pe || (a = this.__swiffy_vm.jg(a));
        Object.defineProperty(this, "__swiffy_d", {
            value: a
        })
    };
    y(tj, "Transform");
    Xf(tj);
    pj(tj.prototype, "colorTransform", function (a) {
        return Jj(a.tb)
    }, function (a, b) {
        a.hc(b instanceof Ij ? b.__swiffy_v : Vc)
    });
    sj(tj.prototype, "concatenatedColorTransform", function (a) {
        return Jj(a.Eb())
    });
    sj(tj.prototype, "concatenatedMatrix", function (a) {
        return Gj(a.qa())
    });
    pj(tj.prototype, "matrix", function (a) {
        return Gj(a.Z())
    }, function (a, b) {
        var c;
        b instanceof Fj ? (c = b.__swiffy_v, c = c.cd(20 * c.i, 20 * c.j)) : c = Sc;
        a.setTransform(c)
    });
    sj(tj.prototype, "pixelBounds", function (a) {
        var b = a.Ua().Wc().G();
        b.u(a.qa());
        return new Kj(Math.floor(b.d / 20), Math.floor(b.e / 20), Math.ceil((b.D - b.d) / 20), Math.ceil((b.C - b.e) / 20))
    });
    var B = function () {};
    y(B, "MovieClip", Bj);
    B.prototype.enabled = !0;
    B.prototype.useHandCursor = !0;
    B.prototype.focusEnabled = void 0;
    Object.defineProperty(B.prototype, "_droptarget", {
        get: function () {
            var a = this.__swiffy_d;
            return a ? (a = (a = a.gv()) && a.r._target) && "/" != a ? a : "" : ""
        }
    });
    B.prototype.gotoAndStop = function (a) {
        var b = this.__swiffy_d;
        b && b.$d(b.Xe(a), !1)
    };
    B.prototype.gotoAndPlay = function (a) {
        var b = this.__swiffy_d;
        b && b.$d(b.Xe(a), !0)
    };
    B.prototype.play = function () {
        var a = this.__swiffy_d;
        a && a.play()
    };
    B.prototype.stop = function () {
        var a = this.__swiffy_d;
        a && a.stop()
    };
    B.prototype.nextFrame = function () {
        var a = this.__swiffy_d;
        a && a.xi()
    };
    B.prototype.prevFrame = function () {
        var a = this.__swiffy_d;
        a && a.Bn()
    };
    B.prototype.globalToLocal = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.a.J(),
                d = c.Do(a);
            if (null != d) {
                var e = c.t(a, "x"),
                    c = c.t(a, "y"),
                    b = qd(b.fc(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    B.prototype.localToGlobal = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.a.J(),
                d = c.Do(a);
            if (null != d) {
                var e = c.t(a, "x"),
                    c = c.t(a, "y"),
                    b = qd(b.qa(), d);
                a[e] = b.x;
                a[c] = b.y
            }
        }
    };
    B.prototype.createEmptyMovieClip = function (a, b) {
        var c = this.__swiffy_d;
        if (c) {
            var d = new Jf(0, 0, null, c.definition.ed),
                d = new A(d, c.a, null);
            d.Xc = !0;
            d.Kb(a);
            d.da();
            c.vd(b);
            c.ad(d, b);
            return d.r
        }
    };
    B.prototype.createTextField = function (a, b, c, d, e, f) {
        if (!(6 > arguments.length)) {
            a = String(a);
            b = ld(b);
            c = ld(c);
            d = ld(d);
            e = Math.abs(ld(e));
            f = Math.abs(ld(f));
            var h = this.__swiffy_d;
            if (h) {
                var k = new Ai(-1, null, 240, 4278190080);
                k.border = !1;
                k.Vn = !1;
                k.html = !1;
                k.maxChars = null;
                k.multiline = !1;
                k.password = !1;
                k.selectable = !0;
                k.variable = null;
                k.wrap = !1;
                k.na = 6 <= h.a.vb;
                k.bounds = new Yc(0, 0, 20 * e, 20 * f);
                k = new mf(k, h.a, null);
                k.Kb(a);
                k.setTransform(new Rc(1, 0, 0, 1, 20 * c, 20 * d));
                k.da();
                h.vd(b);
                h.ad(k, b);
                return k.r
            }
        }
    };
    B.prototype.getNextHighestDepth = function () {
        var a = this.__swiffy_d;
        return a ? a.F.qv() : void 0
    };
    B.prototype.getInstanceAtDepth = function (a) {
        var b = this.__swiffy_d;
        if (b && !(-16384 > a) && (a = b.F.Fc(a))) return a instanceof Te ? a.r : b.r
    };
    B.prototype.getSWFVersion = function () {
        var a = this.__swiffy_d;
        return a ? a.a.vb : -1
    };
    B.prototype.setMask = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c;
            c = m(a) ? b.a.J().jp(a) : a;
            if (c instanceof B || c instanceof Lj) return b.Qe(c.__swiffy_d), !0;
            b.Qe(null);
            return !l(a)
        }
    };
    B.prototype.attachMovie = function (a, b, c, d) {
        var e = this.__swiffy_d;
        if (e && (a = e.definition.ed[a], l(a))) {
            var f = Jd.el();
            a = a.Ic(e.a, f);
            a.Xc = !0;
            a.Kb(b);
            e.vd(c);
            e.ad(a, c);
            if (l(d)) {
                b = a.r;
                for (var h in d) b[h] = d[h]
            }
            a.da();
            return a.r
        }
    };
    B.prototype.attachBitmap = function (a, b) {
        var c = this.__swiffy_d;
        if (c && a) {
            var d = new Ze(a.__swiffy_d, c.a);
            d.Xc = !0;
            c.vd(b);
            c.ad(d, b)
        }
    };
    B.prototype.duplicateMovieClip = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.getParent();
            if (e) {
                a = d.duplicate(e, a, b);
                if (l(c)) {
                    b = a.r;
                    for (var f in c) b[f] = c[f]
                }
                return a.r
            }
        }
    };
    B.prototype.removeMovieClip = function () {
        var a = this.__swiffy_d;
        if (a) {
            var b = a.getParent();
            0 <= a.depth && a.Xc && b && (a.p(), b.removeChild(a))
        }
    };
    B.prototype.loadMovie = function (a, b) {
        var c = this.__swiffy_d;
        c && (a = c.a.J().ua(a), c.bp(a, b, this))
    };
    B.prototype.loadVariables = function (a, b) {
        var c = this.__swiffy_d;
        c && Tf(a, c.a, b, this, function () {
            return c
        })
    };
    B.prototype.unloadMovie = function () {
        var a = this.__swiffy_d;
        a && a.Wl(new Jf(0, 0, null, a.definition.ed))
    };
    B.prototype.swapDepths = function (a) {
        var b = this.__swiffy_d,
            c = b ? b.getParent() : void 0;
        if (c) {
            var d = void 0;
            if (a instanceof x) {
                a = a.__swiffy_d;
                if (a.getParent() != c) return;
                d = a.depth
            } else "number" === typeof a && (d = a);
            l(d) && c.Jm(b.depth, d)
        }
    };
    B.prototype.getBytesTotal = function () {
        var a = this.__swiffy_d;
        if (a) return a.a.$s
    };
    B.prototype.getBytesLoaded = B.prototype.getBytesTotal;
    B.prototype.getBounds = function (a) {
        var b = this.__swiffy_d;
        if (b) {
            var c = b.Ua().Wc().G();
            c.Va() && c.expand(134217728, 134217728);
            if (l(a)) {
                var d = null;
                m(a) && (a = b.a.J().gh(a, this));
                a instanceof B && (d = a.__swiffy_d);
                if (d) a = d.fc(), c.u(b.qa().multiply(a));
                else return
            }
            b = {};
            b.xMin = c.d / 20;
            b.xMax = c.D / 20;
            b.yMin = c.e / 20;
            b.yMax = c.C / 20;
            return b
        }
    };
    B.prototype.getURL = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = d.a.J();
            a = e.ua(a);
            var f = 0;
            m(c) && (c = c.toLowerCase(), "get" == c ? f = 1 : "post" == c && (f = 2));
            a = new bg(e, this, a, b, f);
            d.a.Dh(a)
        }
    };
    B.prototype.hitTest = function (a, b, c) {
        var d = this.__swiffy_d;
        if (l(a) && d) {
            var e = d.Ua().Wc().G();
            e.u(d.qa());
            if (!l(b) && !l(c)) {
                if (c = null, a instanceof B ? c = a.__swiffy_d : m(a) && (c = d.a.J().gh(a, this)), null != c) return d = c.Ua().Wc().G(), d.u(c.qa()), e.Un(d)
            } else if (l(b)) return a *= 20, b *= 20, (e = e.contains(a, b)) && c ? d.hl(a, b) : e
        }
        return !1
    };
    B.prototype.clear = function () {
        var a = this.__swiffy_d;
        a && a.Za("clear", arguments)
    };
    B.prototype.moveTo = function () {
        var a = this.__swiffy_d;
        a && a.Za("moveTo", arguments)
    };
    B.prototype.lineTo = function () {
        var a = this.__swiffy_d;
        a && a.Za("lineTo", arguments)
    };
    B.prototype.curveTo = function () {
        var a = this.__swiffy_d;
        a && a.Za("curveTo", arguments)
    };
    B.prototype.lineStyle = function () {
        var a = this.__swiffy_d;
        a && a.Za("lineStyle", arguments)
    };
    B.prototype.beginFill = function () {
        var a = this.__swiffy_d;
        a && a.Za("beginFill", arguments)
    };
    B.prototype.endFill = function () {
        var a = this.__swiffy_d;
        a && a.Za("endFill", arguments)
    };
    B.prototype.startDrag = function (a, b, c, d, e) {
        var f = this.__swiffy_d;
        f && f.a.ip(f, a, b, c, d, e)
    };
    B.prototype.stopDrag = function () {
        var a = this.__swiffy_d;
        a && a.a.jj()
    };
    sj(B.prototype, "_currentframe", function (a) {
        return Math.max(1, a.Da + 1)
    });
    sj(B.prototype, "_totalframes", function (a) {
        return a.definition.frameCount
    });
    sj(B.prototype, "_framesloaded", function (a) {
        return a.definition.frameCount
    });
    pj(B.prototype, "_lockroot", function (a) {
        return a.Hi
    }, function (a, b) {
        a.ko(Boolean(b))
    });
    pj(B.prototype, "blendMode", function (a) {
        return Oc[a.hb()]
    }, function (a, b) {
        var c = 0;
        Number(b) == b ? (c = Number(b) - 1, Oc[c] || (c = 0)) : c = Nc[String(b)] || 0;
        a.mh(c)
    });
    pj(B.prototype, "cacheAsBitmap", function (a) {
        return a.xj()
    }, function (a, b) {
        a.Tl(Boolean(b))
    });
    z(B.prototype, null, 3);
    var Mj = function () {
        this.__swiffy_vm.yh(this)
    };
    y(Mj, "MovieClipLoader");
    Xf(Mj);
    Mj.prototype.checkPolicyFile = !1;
    Mj.prototype.loadClip = function (a, b) {
        if (a && b) {
            var c = this.__swiffy_vm;
            a = c.ua(a);
            var d = this,
                e = b.__swiffy_d;
            ha(b) ? e = c.a.Pa : m(b) ? e = c.jg(b).__swiffy_d : e.Qf(Gf(a));
            c = new Ff;
            c.xb = function (c, h) {
                d.broadcastMessage("onLoadStart", b);
                d.broadcastMessage("onLoadProgress", b, 1024, 1024);
                d.broadcastMessage("onLoadComplete", b, h);
                ha(b) ? Nf(e.a, b, c, function (b) {
                    b.Qf(Gf(a))
                }, function () {
                    d.broadcastMessage("onLoadInit", b)
                }) : Hf(e, c, function () {
                    d.broadcastMessage("onLoadInit", b)
                })
            };
            c.nc = function (a) {
                d.broadcastMessage("onLoadError",
                    b, a)
            };
            If(a, e.a, "", this, c)
        }
    };
    Mj.prototype.getProgress = function () {
        return {
            bytesLoaded: 1024,
            bytesTotal: 1024
        }
    };
    Mj.prototype.unloadClip = function (a) {
        (a = a && a.__swiffy_d) && a.Wl(new Jf(0, 0, null, a.definition.ed))
    };
    var Nj = function () {};
    y(Nj, "NetConnection");
    Xf(Nj);
    Nj.prototype.connect = function (a) {
        var b = this.__swiffy_vm.a.Cp;
        b && a && b.Bp("GET", a, null, null, "AS2.NetConnection.connect");
        return !0
    };
    var Oj = function () {};
    y(Oj, "NetStream");
    Xf(Oj);
    Oj.prototype.play = function (a) {
        var b = this.__swiffy_vm.a.Cp;
        b && a && b.Bp("GET", a, null, null, "AS2.NetStream.play")
    };
    Oj.prototype.close = function () {};
    Oj.prototype.pause = function () {};
    Oj.prototype.receiveAudio = function () {};
    Oj.prototype.receiveVideo = function () {};
    Oj.prototype.seek = function () {};
    Oj.prototype.setBufferTime = function () {};
    Object.defineProperty(Oj, "bufferLength", {
        value: 0,
        writable: !1
    });
    Object.defineProperty(Oj, "bufferTime", {
        value: 0.1,
        writable: !1
    });
    Object.defineProperty(Oj, "currentFps", {
        value: 0,
        writable: !1
    });
    Object.defineProperty(Oj, "liveDelay", {
        value: 0,
        writable: !1
    });
    Object.defineProperty(Oj, "time", {
        value: 0,
        writable: !1
    });
    var Pj = function () {};
    y(Pj, "Button", Bj);
    Pj.prototype.enabled = !0;
    Pj.prototype.useHandCursor = !0;
    Object.defineProperty(Pj.prototype, "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !0
    });
    z(Pj.prototype, null, 3);
    var Qj = function () {};
    y(Qj, "BitmapFilter");
    var Hh = function (a, b, c, d, e, f, h, k, n, q, s, r) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(h) ? h : 4;
        this.blurY = l(k) ? k : 4;
        this.distance = l(a) ? a : 4;
        this.highlightAlpha = l(d) ? d : 1;
        this.highlightColor = l(c) ? c : 16777215;
        this.knockout = l(r) ? r : !1;
        this.quality = l(q) ? q : 1;
        this.shadowAlpha = l(f) ? f : 1;
        this.shadowColor = l(e) ? e : 0;
        this.strength = l(n) ? n : 1;
        this.type = l(s) ? s : "inner";
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new Gh(this.angle * Math.PI / 180, Rj(this.highlightColor, this.highlightAlpha), Rj(this.shadowColor,
                    this.shadowAlpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
            }
        })
    };
    y(Hh, "BevelFilter", Qj);
    var uh = function (a, b, c) {
        this.blurX = l(a) ? a : 4;
        this.blurY = l(b) ? b : 4;
        this.quality = l(c) ? c : 1;
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new th(this.quality, this.blurX, this.blurY)
            }
        })
    };
    y(uh, "BlurFilter", Qj);
    var Eh = function (a, b, c, d, e, f, h, k, n, q, s) {
        this.angle = l(b) ? b : 45;
        this.blurX = l(e) ? e : 4;
        this.blurY = l(f) ? f : 4;
        this.distance = l(a) ? a : 4;
        this.alpha = l(d) ? d : 1;
        this.color = l(c) ? c : 0;
        this.knockout = l(q) ? q : !1;
        this.quality = l(k) ? k : 1;
        this.strength = l(h) ? h : 1;
        this.inner = l(n) ? n : !1;
        this.hideObject = l(s) ? s : !1;
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new Ch(this.angle * Math.PI / 180, Rj(this.color, this.alpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, Dh(this.hideObject, this.inner,
                    this.knockout))
            }
        })
    };
    y(Eh, "DropShadowFilter", Qj);
    var Kh = function (a, b, c, d, e, f, h, k, n, q, s) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var r = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0,
            get: function () {
                return r
            },
            set: function (a) {
                r = ea(a) ? a : [];
                for (a = 0; a < r.length; a++) r[a] = (null != r[a] ? Number(r[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var u = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0,
            get: function () {
                return u
            },
            set: function (a) {
                u = ea(a) ? a : [];
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.min(1, Math.floor(Number(255 * (null != u[b] ? Number(u[b]) :
                    1))) / 255);
                u.length = a
            }
        });
        this.alphas = d;
        var w = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0,
            get: function () {
                return w
            },
            set: function (a) {
                w = ea(a) ? a : [];
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != w[b] ? Number(w[b]) : 0,
                        c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    w[b] = c
                }
                w.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(s) ? s : !1;
        this.type = l(q) ? q : "inner";
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new Jh(this.angle *
                    Math.PI / 180, r, u, w, this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
            }
        })
    };
    y(Kh, "GradientGlowFilter", Qj);
    var Nh = function (a, b, c, d, e, f, h, k, n, q, s) {
        this.distance = l(a) ? a : 4;
        this.angle = l(b) ? b : 45;
        var r = [];
        Object.defineProperty(this, "colors", {
            enumerable: !0,
            get: function () {
                return r
            },
            set: function (a) {
                r = ea(a) ? a : [];
                for (a = 0; a < r.length; a++) r[a] = (null != r[a] ? Number(r[a]) : 16711680) % 16777216
            }
        });
        this.colors = c;
        var u = [];
        Object.defineProperty(this, "alphas", {
            enumerable: !0,
            get: function () {
                return u
            },
            set: function (a) {
                u = ea(a) ? a : [];
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.min(1, Math.floor(Number(255 * (null != u[b] ? Number(u[b]) :
                    1))) / 255);
                u.length = a
            }
        });
        this.alphas = d;
        var w = [];
        Object.defineProperty(this, "ratios", {
            enumerable: !0,
            get: function () {
                return w
            },
            set: function (a) {
                w = ea(a) ? a : [];
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) {
                    var c = null != w[b] ? Number(w[b]) : 0,
                        c = Math.floor(c);
                    0 > c ? c = 0 : 255 < c && (c = 255);
                    w[b] = c
                }
                w.length = a
            }
        });
        this.ratios = e;
        this.blurX = l(f) ? f : 4;
        this.blurY = l(h) ? h : 4;
        this.quality = l(n) ? n : 1;
        this.strength = l(k) ? k : 1;
        this.knockout = l(s) ? s : !1;
        this.type = l(q) ? q : "inner";
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new Mh(this.angle *
                    Math.PI / 180, r, u, w, this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
            }
        })
    };
    y(Nh, "GradientBevelFilter", Qj);
    var oh = function (a) {
        this.matrix = l(a) ? a : [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new nh(this.matrix)
            }
        })
    };
    y(oh, "ColorMatrixFilter", Qj);
    var rh = function (a, b, c, d, e, f, h, k, n) {
        this.matrixX = l(a) ? a : 0;
        this.matrixY = l(b) ? b : 0;
        var q = [];
        Object.defineProperty(this, "matrix", {
            get: function () {
                return q
            },
            set: function (a) {
                var b = this.matrixY * this.matrixX;
                q = null != a ? a : [];
                if (q.length > b) q.length = b;
                else
                    for (; q.length < b;) q.push(0)
            }
        });
        this.matrix = c;
        this.bias = l(e) ? e : 0;
        this.preserveAlpha = l(f) ? f : !0;
        this.clamp = l(h) ? h : !0;
        this.color = l(k) ? k : 0;
        this.alpha = l(n) ? n : 0;
        this.divisor = l(d) ? d : 1;
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new qh(this.bias,
                    this.clamp, Rj(this.color, this.alpha), this.divisor, this.matrix, this.matrixX, this.matrixY, this.preserveAlpha)
            }
        })
    };
    y(rh, "ConvolutionFilter", Qj);
    var Sj = function (a, b, c, d, e, f, h, k) {
        this.blurX = l(c) ? c : 6;
        this.blurY = l(d) ? d : 6;
        this.alpha = l(b) ? b : 1;
        this.color = l(a) ? a : 16711680;
        this.knockout = l(k) ? k : !1;
        this.quality = l(f) ? f : 1;
        this.strength = l(e) ? e : 2;
        this.inner = l(h) ? h : !1;
        z(this, null, 3);
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return new Ch(0, Rj(this.color, this.alpha), 0, this.strength, this.quality, this.blurX, this.blurY, Dh(!1, this.inner, this.knockout))
            }
        })
    };
    y(Sj, "GlowFilter", Qj);
    var Lj = function () {};
    y(Lj, "TextField", x);
    Lj.prototype.getTextFormat = function (a, b) {
        var c = this.__swiffy_d;
        if (c) return c.es(a, b).fs()
    };
    Lj.prototype.setTextFormat = function (a, b, c) {
        var d = this.__swiffy_d;
        if (d) {
            var e = new hf,
                f, h;
            a instanceof hf && (e = a);
            l(b) && b instanceof hf && (e = b, f = a);
            l(c) && (e = c, f = a, h = b);
            a = gf(e);
            d.yk(a, f, h)
        }
    };
    Lj.prototype.getNewTextFormat = function () {
        var a = this.__swiffy_d;
        if (a) return a.ds().fs()
    };
    Lj.prototype.setNewTextFormat = function (a) {
        var b = this.__swiffy_d;
        b && (a = gf(a), b.Ps(a))
    };
    var Tj = function (a, b, c, d) {
        Object.defineProperty(Lj.prototype, a, {
            get: function () {
                var a = this.__swiffy_d;
                if (a) return b.call(this, a)
            },
            set: function (a) {
                var b = this.__swiffy_d;
                b && c && c.call(this, b, a)
            },
            enumerable: l(d) ? d : !0
        })
    };
    Tj("text", function (a) {
        var b = a.fd;
        a.Mb && (b = tf(b, a.definition.multiline));
        return b
    }, function (a, b) {
        var c = a.a.J();
        b = c.ua(b);
        a.Mb && (a.lj(!1), b = uf(b));
        null != a.ae() ? c.rt(a.ae(), a, b) : a.Td(b);
        a.lj(!0)
    });
    Tj("htmlText", function (a) {
        var b = a.fd;
        a.Mb && (b = vf(String(b)));
        return b
    }, function (a, b) {
        var c = a.a.J();
        b = c.ua(b);
        null != a.ae() ? c.hj(a.ae(), b) : a.Td(b)
    });
    Tj("textColor", function (a) {
        return a.Cs()
    }, function (a, b) {
        a.Ss(Number(b))
    });
    Tj("antiAliasType", function (a) {
        return a.$l
    }, function (a, b) {
        "normal" != b && "advanced" != b || a.Js(String(b))
    });
    Tj("autoSize", function (a) {
        return a.Nf
    }, function (a, b) {
        switch (b) {
        case !0:
            b = "left";
        case "center":
        case "left":
        case "none":
        case "right":
            break;
        default:
            b = "none"
        }
        a.Ks(b)
    });
    Tj("background", function (a) {
        return a.qp
    }, function (a, b) {
        a.si( !! b)
    }, !1);
    Tj("backgroundColor", function (a) {
        return a.qx()
    }, function (a, b) {
        a.Xx(Number(b))
    }, !1);
    Tj("border", function (a) {
        return a.fh
    }, function (a, b) {
        a.Ls( !! b)
    }, !1);
    Tj("borderColor", function (a) {
        return a.rx()
    }, function (a, b) {
        a.Zx(Number(b))
    }, !1);
    Tj("condenseWhite", function (a) {
        return a.rp
    }, function (a, b) {
        a.$x( !! b)
    }, !1);
    Tj("embedFonts", function (a) {
        return a.Lf
    }, function (a, b) {
        a.Ns( !! b)
    });
    Tj("gridFitType", function (a) {
        return a.tp
    }, function (a, b) {
        "none" != b && "pixel" != b && "subpixel" != b || a.cy(String(b))
    }, !1);
    Tj("html", function (a) {
        return a.Mb
    }, function (a, b) {
        b = !! b;
        if (b != a.Mb) {
            var c = this.text;
            a.iw(b);
            this.text = c
        }
    });
    Tj("length", function () {
        return this.text.length
    });
    Tj("maxChars", function (a) {
        return a.up
    }, function (a, b) {
        a.dy(null != b ? Number(b) : null)
    }, !1);
    Tj("mouseWheelEnabled", function () {
        return !0
    }, void 0, !1);
    Tj("multiline", function (a) {
        return a.hg
    }, function (a, b) {
        a.Os( !! b)
    });
    Tj("password", function (a) {
        return a.vp
    }, function (a, b) {
        a.hy( !! b)
    }, !1);
    Tj("restrict", function (a) {
        return a.Tt
    }, function (a, b) {
        a.ky(null != b ? String(b) : null)
    }, !1);
    Tj("selectable", function (a) {
        return a.dm
    }, function (a, b) {
        a.Rs( !! b)
    });
    Object.defineProperty(Lj.prototype, "styleSheet", {
        value: void 0,
        enumerable: !1
    });
    Tj("sharpness", function (a) {
        return a.wp
    }, function (a, b) {
        a.my(Number(b))
    }, !1);
    Object.defineProperty(Lj.prototype, "tabIndex", {
        value: void 0,
        writable: !0,
        enumerable: !1
    });
    Tj("textHeight", function (a) {
        return Math.floor(a.Kp() / 20)
    });
    Tj("textWidth", function (a) {
        return Math.floor(a.Lp() / 20)
    });
    Tj("thickness", function (a) {
        return a.xp
    }, function (a, b) {
        a.ny(Number(b))
    }, !1);
    Tj("variable", function (a) {
        return a.ae()
    }, function (a, b) {
        a.hj(null != b ? String(b) : null)
    });
    Tj("wordWrap", function (a) {
        return a.Ih
    }, function (a, b) {
        a.Ts( !! b)
    });
    Tj("type", function (a) {
        return a.cm ? "input" : "dynamic"
    }, function (a, b) {
        b = String(b).toLowerCase();
        "input" == b ? a.Pn(!0) : "dynamic" == b && a.Pn(!1)
    }, !1);
    z(Lj.prototype, null, 3);
    var Uj = function () {
        Object.defineProperty(this, "contentType", {
            value: "application/x-www-form-urlencoded",
            writable: !0
        });
        Object.defineProperty(this, "loaded", {
            value: !1,
            writable: !0
        });
        Object.defineProperty(this, "requestHeaders", {
            value: []
        })
    };
    y(Uj, "LoadVars");
    Xf(Uj);
    Uj.prototype.addRequestHeader = function (a, b) {
        if (m(a) && l(b)) this.requestHeaders.push(new Vj(a, b));
        else if (ea(a))
            for (var c = a.length / 2, d = 0; d < c; d++) this.requestHeaders.push(new Vj(a[2 * d], a[2 * d + 1]))
    };
    Uj.prototype.load = function (a) {
        var b = this.__swiffy_vm;
        a = b.ua(a);
        this.loaded = !1;
        var c = this,
            d = new Ff;
        d.xb = function (a) {
            if (p(c.onData)) c.onData(a)
        };
        d.nc = function () {
            if (p(c.onData)) c.onData(void 0)
        };
        Sf(a, b.a, void 0, this, d)
    };
    Uj.prototype.send = function (a, b, c) {
        if (0 == arguments.length) return !1;
        var d = this.__swiffy_vm;
        a = d.ua(a);
        var e = l(b) ? b : "_self",
            f;
        if ("GET" == c) f = 1;
        else {
            if (l(c) && "POST" != c) throw new Wf("Bad method: " + c);
            f = 2
        }
        d.a.Dh(new bg(d, this, a, e, f))
    };
    Uj.prototype.sendAndLoad = function (a, b, c) {
        var d = this.__swiffy_vm;
        a = d.ua(a);
        b.loaded = !1;
        var e = new Ff;
        e.xb = function (a) {
            if (p(b.onData)) b.onData(a)
        };
        e.nc = function () {
            if (p(b.onData)) b.onData(void 0)
        };
        Sf(a, d.a, c || "POST", this.toString(), e, this.requestHeaders, this.contentType)
    };
    Uj.prototype.onData = function (a) {
        var b = l(a);
        b && p(this.decode) && this.decode(a);
        this.loaded = b;
        if (p(this.onLoad)) this.onLoad(b)
    };
    Uj.prototype.onLoad = function () {};
    Uj.prototype.decode = function (a) {
        a = zd(a);
        for (var b in a) {
            var c = a[b];
            this[b] = c[c.length - 1]
        }
    };
    Uj.prototype.toString = function () {
        return vd(this)
    };
    z(Uj.prototype, null, 3);
    var Wj = function (a, b) {
        Object.defineProperty(this, "nodeType", {
            value: a,
            writable: !1
        });
        Object.defineProperty(this, "attributes", {
            value: {},
            writable: !1
        });
        1 == a ? (this.nodeName = b, this.nodeValue = null) : (this.nodeName = null, this.nodeValue = b);
        this["__swiffy.next_sibling"] = null;
        this["__swiffy.previous_sibling"] = null;
        this["__swiffy.parent_node"] = null;
        this["__swiffy.child_nodes"] = []
    };
    y(Wj, "XMLNode");
    Object.defineProperty(Wj.prototype, "childNodes", {
        get: function () {
            return this["__swiffy.child_nodes"].slice(0)
        }
    });
    Object.defineProperty(Wj.prototype, "firstChild", {
        get: function () {
            return this["__swiffy.child_nodes"][0]
        }
    });
    Object.defineProperty(Wj.prototype, "lastChild", {
        get: function () {
            return this["__swiffy.child_nodes"][this["__swiffy.child_nodes"].length - 1]
        }
    });
    Object.defineProperty(Wj.prototype, "nextSibling", {
        get: function () {
            return this["__swiffy.next_sibling"]
        }
    });
    Object.defineProperty(Wj.prototype, "parentNode", {
        get: function () {
            return this["__swiffy.parent_node"]
        }
    });
    Object.defineProperty(Wj.prototype, "previousSibling", {
        get: function () {
            return this["__swiffy.previous_sibling"]
        }
    });
    Wj.prototype.toString = function () {
        return Xj(this, !1, 0)
    };
    var Xj = function (a, b, c) {
        b = "undefined" !== typeof b ? b : !1;
        c = "undefined" !== typeof c ? c : 0;
        var d = "";
        if (b)
            for (var e = 0; e < c; e++) d += "  ";
        var f = b ? "\n" : "";
        if (3 == a.nodeType) return d + Wi(a.nodeValue) + f;
        var h = "";
        if (null == a.nodeName) a.xmlDecl && (h += d + a.xmlDecl + f), a.docTypeDecl && (h += d + a.docTypeDecl + f);
        else {
            var h = h + (d + "<" + a.nodeName),
                k;
            for (k in a.attributes) h += " " + k + '="' + a.attributes[k] + '"';
            if (0 == a["__swiffy.child_nodes"].length) return h + " />";
            h += ">" + f
        }
        for (e = 0; e < a["__swiffy.child_nodes"].length; e++) k = Xj(a["__swiffy.child_nodes"][e],
            b, c + 1), h += k;
        null != a.nodeName && (h += d + "</" + a.nodeName + ">" + f);
        return h
    };
    Wj.prototype.appendChild = function (a) {
        if (!~this["__swiffy.child_nodes"].indexOf(a)) {
            a.removeNode();
            var b = this.lastChild;
            this["__swiffy.child_nodes"].push(a);
            b && (b["__swiffy.next_sibling"] = a, a["__swiffy.previous_sibling"] = b);
            a["__swiffy.parent_node"] = this
        }
    };
    Wj.prototype.insertBefore = function (a, b) {
        if (!~this["__swiffy.child_nodes"].indexOf(a)) {
            var c = this["__swiffy.child_nodes"].indexOf(b);
            if (~c) {
                a.removeNode();
                a["__swiffy.parent_node"] = this;
                var d = this["__swiffy.child_nodes"][c - 1],
                    e = this["__swiffy.child_nodes"][c];
                this["__swiffy.child_nodes"].splice(c, 0, a);
                d ? (d["__swiffy.next_sibling"] = a, a["__swiffy.previous_sibling"] = d) : a["__swiffy.previous_sibling"] = null;
                e ? (e["__swiffy.previous_sibling"] = a, a["__swiffy.next_sibling"] = e) : a["__swiffy.next_sibling"] = null
            }
        }
    };
    Wj.prototype.removeNode = function () {
        if (this["__swiffy.parent_node"]) {
            var a = this["__swiffy.parent_node"]["__swiffy.child_nodes"].indexOf(this);~
            a && this["__swiffy.parent_node"]["__swiffy.child_nodes"].splice(a, 1)
        }
        this["__swiffy.next_sibling"] && (this["__swiffy.next_sibling"]["__swiffy.previous_sibling"] = this["__swiffy.previous_sibling"]);
        this["__swiffy.previous_sibling"] && (this["__swiffy.previous_sibling"]["__swiffy.next_sibling"] = this["__swiffy.next_sibling"]);
        this["__swiffy.next_sibling"] = null;
        this["__swiffy.previous_sibling"] =
            null;
        this["__swiffy.parent_node"] = null
    };
    Wj.prototype.cloneNode = function (a) {
        var b = new Wj(this.nodeType, null);
        b.nodeName = this.nodeName;
        b.nodeValue = this.nodeValue;
        for (var c in this.attributes) b.attributes[c] = this.attributes[c];
        if (a)
            for (c = 0; c < this["__swiffy.child_nodes"].length; c++) {
                var d = this["__swiffy.child_nodes"][c].cloneNode(a);
                b["__swiffy.child_nodes"][c] = d
            }
        return b
    };
    Wj.prototype.hasChildNodes = function () {
        return this["__swiffy.child_nodes"] && 0 < this["__swiffy.child_nodes"].length
    };
    var Yj = function (a, b, c) {
        for (var d = null, e; e = c.next();) {
            var f;
            switch (e.type) {
            case "close":
                return e.value;
            case "tag":
                f = 1;
                break;
            case "text":
            case "cdata":
                f = 3;
                break;
            case "xml_declaration":
                a.xmlDecl || (a.xmlDecl = "");
                a.xmlDecl += e.value;
                continue;
            case "doctype":
                a.docTypeDecl = e.value;
                continue;
            default:
                continue
            }
            f = new Wj(f, e.value);
            f["__swiffy.parent_node"] = b;
            d && (f["__swiffy.previous_sibling"] = d, d["__swiffy.next_sibling"] = f);
            d = f;
            b["__swiffy.child_nodes"].push(f);
            if ("tag" == e.type) {
                if (e.attributes)
                    for (var h = 0; h < e.attributes.length; h++) {
                        var k =
                            e.attributes[h];
                        f.attributes[k.name] = k.value
                    }
                f = Yj(a, f, c);
                if (null === f || f != e.value) return a.status = -9, f
            }
        }
        return null
    }, Zj = function (a) {
            Wj.call(this, 1, null);
            a && this.parseXML(a);
            Object.defineProperty(this, "requestHeaders", {
                value: []
            })
        };
    y(Zj, "XML", Wj);
    Xf(Zj);
    Zj.prototype.loaded = void 0;
    Zj.prototype.contentType = "application/x-www-form-urlencoded";
    Zj.prototype.status = 0;
    Zj.prototype.createElement = function (a) {
        return new Wj(1, a)
    };
    Zj.prototype.createTextNode = function (a) {
        return new Wj(3, a)
    };
    Zj.prototype.addRequestHeader = function (a, b) {
        if (m(a) && l(b)) this.requestHeaders.push(new Vj(a, b));
        else if (ea(a))
            for (var c = a.length / 2, d = 0; d < c; d++) this.requestHeaders.push(new Vj(a[2 * d], a[2 * d + 1]))
    };
    Zj.prototype.load = function (a) {
        var b = this.__swiffy_vm;
        a = b.ua(a);
        this.loaded = !1;
        var c = this,
            d = new Ff;
        d.xb = function (a) {
            if (p(c.onData)) c.onData(a)
        };
        d.nc = function () {
            if (p(c.onData)) c.onData(void 0)
        };
        Sf(a, b.a, void 0, this, d)
    };
    Zj.prototype.send = function (a, b, c) {
        if (0 == arguments.length) return !1;
        var d = this.__swiffy_vm;
        a = d.ua(a);
        var e = l(b) ? b : "_self",
            f, h = this.toString();
        if ("GET" == c) f = 1, h = encodeURIComponent(h);
        else {
            if (l(c) && "POST" != c) throw new Wf("Bad method: " + c);
            f = 2
        }
        d.a.Dh(new bg(d, h, a, e, f))
    };
    Zj.prototype.sendAndLoad = function (a, b) {
        var c = this.__swiffy_vm;
        a = c.ua(a);
        b.loaded = !1;
        var d = new Ff;
        d.xb = function (a) {
            if (p(b.onData)) b.onData(a)
        };
        d.nc = function () {
            if (p(b.onData)) b.onData(void 0)
        };
        Sf(a, c.a, "POST", this.toString(), d, this.requestHeaders, this.contentType)
    };
    Zj.prototype.onData = function (a) {
        var b = l(a);
        b && p(this.parseXML) && this.parseXML(a);
        this.loaded = b;
        if (p(this.onLoad)) this.onLoad(b)
    };
    Zj.prototype.onLoad = function () {};
    Zj.prototype.parseXML = function (a) {
        for (var b = this["__swiffy.child_nodes"].length - 1; 0 <= b; b--) this["__swiffy.child_nodes"][b].removeNode();
        for (var c in this.attributes) delete this.attributes[c];
        this.docTypeDecl = this.xmlDecl = void 0;
        a = new aj(a, this.ignoreWhite, !0);
        try {
            this.status = 0, null !== Yj(this, this, a) && (this.status = -10)
        } catch (d) {
            this.status = ak(d.type)
        }
    };
    var ak = function (a) {
        switch (a) {
        case "cdata":
            return -2;
        case "xml_declaration":
            return -3;
        case "doctype":
            return -4;
        case "comment":
            return -5;
        case "tag":
        case "close":
            return -6;
        case "attribute":
            return -8;
        default:
            return -1
        }
    };
    z(Zj.prototype, null, 3);
    var hf = function () {};
    y(hf, "TextFormat");
    var bk = function (a, b, c, d) {
        c = l(c) ? c : !0;
        d = l(d) ? d : 4294967295;
        if (!("__swiffy_d" in this)) {
            var e = new Ye(We, cj.a);
            e.lb(a, b, c, d);
            this.__swiffy_d = e
        }
    };
    y(bk, "BitmapData", Qd);
    Object.defineProperty(bk.prototype, "width", {
        get: function () {
            return this.__swiffy_d.ka()
        }
    });
    Object.defineProperty(bk.prototype, "height", {
        get: function () {
            return this.__swiffy_d.jb()
        }
    });
    Object.defineProperty(bk.prototype, "rect", {
        get: function () {
            return new Kj(0, 0, this.__swiffy_d.ka(), this.__swiffy_d.jb())
        }
    });
    Object.defineProperty(bk.prototype, "transparent", {
        get: function () {
            return this.__swiffy_d.Mc
        }
    });
    bk.loadBitmap = function (a) {
        for (var b = Sd[a] || bk, c = Object.create(b.prototype), d = cj, e = d.a.Wn, f = 0; f < e.length; f++) {
            var h = e[f].ed[a];
            if (h instanceof re) {
                c.__swiffy_d = new Ye(h, d.a, c);
                break
            }
        }
        b.call(c);
        return c
    };
    bk.prototype.copyPixels = function (a, b, c, d, e, f) {
        this.__swiffy_d.ss(a.__swiffy_d, b ? ck(b) : null, c ? new Pc(c.x, c.y) : null, d && d.__swiffy_d, e ? new Pc(e.x, e.y) : null, f)
    };
    bk.prototype.dispose = function () {
        this.__swiffy_d.Nk()
    };
    bk.prototype.fillRect = function (a, b) {
        this.__swiffy_d.fillRect(ck(a), b)
    };
    bk.prototype.getPixel = function (a, b) {
        return this.__swiffy_d.Mn(a, b) & 16777215
    };
    bk.prototype.getPixel32 = function (a, b) {
        return this.__swiffy_d.Mn(a, b)
    };
    bk.prototype.scroll = function (a, b) {
        this.__swiffy_d.scroll(a, b)
    };
    bk.prototype.setPixel = function (a, b, c) {
        this.__swiffy_d.Qn(a, b, c | 4278190080)
    };
    bk.prototype.setPixel32 = function (a, b, c) {
        this.__swiffy_d.Qn(a, b, c)
    };
    z(bk, null, 3);
    var dk = function () {
        this.showMenu = !0
    };
    y(dk, "Stage");
    Object.defineProperty(dk.prototype, "height", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Jc ? a.zc : a.oh
        },
        set: function () {}
    });
    Object.defineProperty(dk.prototype, "width", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Jc ? a.Ac : a.ph
        },
        set: function () {}
    });
    Object.defineProperty(dk.prototype, "align", {
        get: function () {
            var a = this.__swiffy_d.se,
                b = "";
            a & 1 && (b += "L");
            a & 2 && (b += "T");
            a & 4 && (b += "R");
            a & 8 && (b += "B");
            return b
        },
        set: function (a) {
            this.__swiffy_d.Is(String(a))
        }
    });
    Object.defineProperty(dk.prototype, "scaleMode", {
        get: function () {
            return this.__swiffy_d.Jc
        },
        set: function (a) {
            var b = this.__swiffy_d;
            switch (String(a).toLowerCase()) {
            case "exactfit":
                a = "exactFit";
                break;
            case "noborder":
                a = "noBorder";
                break;
            case "noscale":
                a = "noScale";
                break;
            default:
                a = "showAll"
            }
            b.Qs(a)
        }
    });
    z(dk.prototype, null, 3);
    var ek = function () {
        this.allowDomain = function () {
            return !0
        };
        this.allowInsecureDomain = function () {
            return !0
        }
    };
    y(ek, "System.security");
    var fk = function () {
        this.security = new ek
    };
    z(dk.prototype, null, 3);
    y(fk, "System");
    var gk = function () {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                ln: 0,
                volume: 100,
                transform: {
                    vk: 100,
                    fn: 0,
                    gn: 0,
                    hn: 100
                }
            }
        })
    };
    y(gk, "Sound");
    Xf(gk);
    gk.prototype.checkPolicyFile = !1;
    Object.defineProperty(gk.prototype, "duration", {
        value: 0
    });
    Object.defineProperty(gk.prototype, "id3", {
        value: void 0
    });
    Object.defineProperty(gk.prototype, "position", {
        value: 0
    });
    gk.prototype.onID3 = void 0;
    gk.prototype.onLoad = void 0;
    gk.prototype.onSoundComplete = void 0;
    gk.prototype.attachSound = function () {};
    gk.prototype.getBytesLoaded = function () {
        return 0
    };
    gk.prototype.getBytesTotal = function () {
        return 0
    };
    gk.prototype.getPan = function () {
        return this.__swiffy_v.ln
    };
    gk.prototype.getTransform = function () {
        var a = this.__swiffy_v;
        return {
            ll: a.transform.vk,
            lr: a.transform.fn,
            rl: a.transform.gn,
            rr: a.transform.hn
        }
    };
    gk.prototype.getVolume = function () {
        return this.__swiffy_v.volume
    };
    gk.prototype.loadSound = function (a) {
        var b = this.__swiffy_vm.a.Cp;
        b && b.Bp("GET", a, null, null);
        this.__swiffy_vm.Dj("setTimeout")(na(function () {
            if (p(this.onLoad)) this.onLoad(!0)
        }, this), 1)
    };
    gk.prototype.setPan = function (a) {
        a = hk.call(this, a);
        var b = this.__swiffy_v;
        b.ln = -100 > a ? -200 - a : 100 < a ? 200 - a : a;
        b.transform = {
            vk: 0 < a ? 100 - a : 100,
            hn: 0 > a ? 100 + a : 100,
            fn: 0,
            gn: 0
        }
    };
    gk.prototype.setTransform = function (a) {
        if (a) {
            var b = this.__swiffy_v;
            l(a.ll) && (b.transform.vk = ik.call(this, a.ll));
            l(a.lr) && (b.transform.fn = ik.call(this, a.lr));
            l(a.rl) && (b.transform.gn = ik.call(this, a.rl));
            l(a.rr) && (b.transform.hn = ik.call(this, a.rr));
            a = 100 - b.transform.vk;
            b.ln = -100 > a ? -200 - a : 100 < a ? 200 - a : a
        }
    };
    gk.prototype.setVolume = function (a) {
        this.__swiffy_v.volume = hk.call(this, a)
    };
    gk.prototype.start = function () {
        this.__swiffy_vm.Dj("setTimeout")(na(function () {
            if (p(this.onSoundComplete)) this.onSoundComplete()
        }, this), 1)
    };
    gk.prototype.stop = function () {};
    gk.prototype.toString = function () {
        return "[object Object]"
    };
    z(gk.prototype, null, 3);
    var hk = function (a) {
        a = this.__swiffy_vm.Dj("Number")(a);
        return isNaN(a) ? -2147483648 : a >> 0
    }, ik = function (a) {
            return this.__swiffy_vm.Dj("Number")(a) >> 0
        };
    var Hj = function (a, b) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0
    };
    y(Hj, "Point", Qd);
    Object.defineProperty(Hj.prototype, "length", {
        get: function () {
            return Qc(this.x, this.y)
        }
    });
    Hj.prototype.add = function (a) {
        return new Hj(this.x + a.x, this.y + a.y)
    };
    Hj.prototype.clone = function () {
        return new Hj(this.x, this.y)
    };
    Hj.distance = function (a, b) {
        return Qc(a.x - b.x, a.y - b.y)
    };
    Hj.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    Hj.interpolate = function (a, b, c) {
        return new Hj(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Hj.prototype.normalize = function (a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    Hj.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Hj.polar = function (a, b) {
        return new Hj(a * Math.cos(b), a * Math.sin(b))
    };
    Hj.prototype.subtract = function (a) {
        return new Hj(this.x - a.x, this.y - a.y)
    };
    Hj.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var Kj = function (a, b, c, d) {
        this.x = l(a) ? a : 0;
        this.y = l(b) ? b : 0;
        this.width = l(c) ? c : 0;
        this.height = l(d) ? d : 0
    };
    y(Kj, "Rectangle", Qd);
    Object.defineProperty(Kj.prototype, "top", {
        get: function () {
            return this.y
        },
        set: function (a) {
            this.y = a
        }
    });
    Object.defineProperty(Kj.prototype, "left", {
        get: function () {
            return this.x
        },
        set: function (a) {
            this.x = a
        }
    });
    Object.defineProperty(Kj.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        },
        set: function (a) {
            this.height = a - this.y
        }
    });
    Object.defineProperty(Kj.prototype, "right", {
        get: function () {
            return this.x + this.width
        },
        set: function (a) {
            this.width = a - this.x
        }
    });
    Object.defineProperty(Kj.prototype, "topLeft", {
        get: function () {
            return new Hj(this.left, this.top)
        },
        set: function (a) {
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(Kj.prototype, "bottomRight", {
        get: function () {
            return new Hj(this.right, this.bottom)
        },
        set: function (a) {
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(Kj.prototype, "size", {
        get: function () {
            return new Hj(this.width, this.height)
        },
        set: function (a) {
            this.width = a.x;
            this.height = a.y
        }
    });
    Kj.prototype.clone = function () {
        return new Kj(this.x, this.y, this.width, this.height)
    };
    Kj.prototype.contains = function (a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    Kj.prototype.containsPoint = function (a) {
        return this.contains(a.x, a.y)
    };
    Kj.prototype.containsRectangle = function (a) {
        var b = this.right,
            c = this.bottom,
            d = a.right,
            e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    Kj.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    Kj.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    Kj.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    Kj.prototype.inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    Kj.prototype.intersection = function (a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x),
                c = Math.max(this.y, a.y),
                d = Math.min(this.right, a.right);
            a = Math.min(this.bottom, a.bottom);
            return new Kj(b, c, d - b, a - c)
        }
        return new Kj
    };
    Kj.prototype.intersects = function (a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    Kj.prototype.isEmpty = function () {
        return 0 >= this.width || 0 >= this.height
    };
    Kj.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    Kj.prototype.offsetPoint = function (a) {
        this.offset(a.x, a.y)
    };
    Kj.prototype.setEmpty = function () {
        this.height = this.width = this.y = this.x = 0
    };
    Kj.prototype.union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x),
            c = Math.min(this.y, a.y),
            d = Math.max(this.right, a.right);
        a = Math.max(this.bottom, a.bottom);
        return new Kj(b, c, d - b, a - c)
    };
    Kj.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var ck = function (a) {
        var b = a.x,
            c = a.y;
        return new Yc(b, c, b + a.width, c + a.height)
    };
    var F = function (a) {
        Object.defineProperty(this, "__swiffy_vm", {
            value: a
        });
        this.String = jk(String, function (b) {
            return a.ua(b)
        }, ["fromCharCode"]);
        z(this, "String", 3);
        this.Number = jk(Number, function (b) {
            return a.Ue(b)
        }, ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"]);
        z(this, "Number", 3);
        this.Boolean = jk(Boolean, function (b) {
            return a.lp(b)
        });
        z(this, "Boolean", 3);
        this.AsBroadcaster = new Td(a);
        z(this, "AsBroadcaster", 3);
        this.setInterval = function () {
            return kk(a, window.setInterval, arguments)
        };
        z(this,
            "setInterval", 3);
        this.setTimeout = function () {
            return kk(a, window.setTimeout, arguments)
        };
        z(this, "setTimeout", 3);
        this.updateAfterEvent = function () {
            a.a.Ff = !0
        };
        z(this, "updateAfterEvent", 3);
        this.escape = function (b) {
            return encodeURIComponent(a.ua(b)).replace(/[.!*'()]/g, function (a) {
                return "%" + a.charCodeAt(0).toString(16).toUpperCase()
            })
        };
        z(this, "escape", 3);
        this.unescape = function (b) {
            return yd(a.ua(b))
        };
        z(this, "unescape", 3);
        Object.prototype.hasOwnProperty("addProperty") || (Function.prototype.toString = function () {
                return "[type Function]"
            },
            Object.prototype.unwatch = function (a) {
                if (1 > arguments.length) return !1;
                var c = this[a];
                delete this[a];
                this[a] = c;
                return !0
            }, Object.prototype.watch = function (a, c, d) {
                if (2 > arguments.length) return !1;
                for (var e = this, f = null, h = this; h; h = Object.getPrototypeOf(h))
                    if (null != Object.getOwnPropertyDescriptor(h, a)) {
                        e = h;
                        f = Object.getOwnPropertyDescriptor(h, a);
                        break
                    }
                if (!f || f.configurable) {
                    var k = e[a];
                    delete e[a];
                    Object.defineProperty(e, a, {
                        get: function () {
                            return k
                        },
                        set: function (e) {
                            return k = c.call(this, a, k, e, d)
                        },
                        configurable: !0
                    })
                }
                return !0
            },
            Object.prototype.addProperty = function (a, c, d) {
                var e = Object.getOwnPropertyDescriptor(this, a);
                if (null == a || "" == a || !p(c) || d && !p(d) || e && !e.configurable) return !1;
                if (!d || e && !e.writable) d = function () {};
                Object.defineProperty(this, a, {
                    get: c,
                    set: d,
                    configurable: !0,
                    enumerable: !(e && !e.enumerable)
                });
                return !0
            }, z(Object.prototype, ["watch", "unwatch", "addProperty"], 3))
    };
    y(F, "global");
    var jk = function (a, b, c) {
        b.__swiffy_override = function (c) {
            return new a(b(c))
        };
        b.__swiffy_wrapped_type = a;
        if (l(c))
            for (var d = 0; d < c.length; d++) b[c[d]] = a[c[d]];
        z(b, null, 3);
        return b
    };
    F.prototype.ASSetPropFlags = z;
    F.prototype.clearInterval = function (a) {
        window.clearInterval(a)
    };
    F.prototype.clearTimeout = function (a) {
        window.clearTimeout(a)
    };
    F.prototype.parseFloat = parseFloat;
    F.prototype.parseInt = function (a, b) {
        !l(b) && rd(a) && (b = 8);
        return parseInt(a, b)
    };
    F.prototype.isFinite = function (a) {
        return isFinite(a)
    };
    F.prototype.isNaN = function (a) {
        return isNaN(a)
    };
    var kk = function (a, b, c) {
        var d = c[0];
        if (p(d) && 2 <= c.length) {
            var e = Array.prototype.slice.call(c, 2);
            c = c[1];
            return b.call(window, function () {
                d.apply(Ej(null), e);
                a.Ba()
            }, c)
        }
        if (ia(d) && 3 <= c.length) {
            var f = c[1],
                e = Array.prototype.slice.call(c, 3);
            c = c[2];
            return b.call(window, function () {
                p(d[f]) && (d[f].apply(Ej(d), e), a.Ba())
            }, c)
        }
    };
    F.prototype.Array = Array;
    F.prototype.AsBroadcaster = Td;
    F.prototype.Button = Pj;
    F.prototype.flash = {
        display: {
            BitmapData: bk
        },
        filters: {
            BevelFilter: Hh,
            BlurFilter: uh,
            ColorMatrixFilter: oh,
            ConvolutionFilter: rh,
            DropShadowFilter: Eh,
            GlowFilter: Sj,
            GradientBevelFilter: Nh,
            GradientGlowFilter: Kh
        },
        geom: {
            Matrix: Fj,
            Point: Hj,
            Rectangle: Kj
        }
    };
    F.prototype.Color = jj;
    F.prototype.Date = Date;
    F.prototype.Error = Cj;
    F.prototype.Function = Dj;
    F.prototype.LoadVars = Uj;
    F.prototype.Math = Math;
    F.prototype.MovieClip = B;
    F.prototype.MovieClipLoader = Mj;
    F.prototype.NetConnection = Nj;
    F.prototype.NetStream = Oj;
    F.prototype.Object = Qd;
    Object.defineProperty(Qd, "__swiffy_override", {
        value: Rd
    });
    Object.defineProperty(Qd, "__swiffy_wrapped_type", {
        value: Object
    });
    F.prototype.Sound = gk;
    F.prototype.System = new fk;
    F.prototype.TextField = Lj;
    F.prototype.TextFormat = hf;
    F.prototype.XML = Zj;
    F.prototype.XMLNode = Wj;
    Object.defineProperty(F.prototype, "Key", {
        get: function () {
            return this.__swiffy_vm.getKey()
        },
        set: function () {}
    });
    Object.defineProperty(F.prototype, "Mouse", {
        get: function () {
            return this.__swiffy_vm.ag
        },
        set: function () {}
    });
    Object.defineProperty(F.prototype, "Stage", {
        get: function () {
            return this.__swiffy_vm.a.B.r
        },
        set: function () {}
    });
    z(F.prototype, null, 3);
    y(Array, "Array");
    y(Boolean, "Boolean");
    y(Date, "Date");
    y(Math, "Math");
    y(Number, "Number");
    y(String, "String");
    var E = function (a) {
        this.Ja = [];
        this.Xb = 0;
        this.Gb = this.Hc = 4;
        this.xo = [];
        this.a = a;
        this.mt = this.vo();
        this.Zf = [];
        this.Zd = [];
        this.yl = !1;
        this.fl = null;
        this.Kc = Zf;
        this.Ki = new oj(this, a);
        this.Qd = new Lf;
        this.ag = new ij;
        this.yh(this.ag);
        this.eg = new gj;
        this.yh(this.eg);
        this.pl();
        this.nt()
    };
    g = E.prototype;
    g.nt = function () {
        var a = this,
            b = this.a.td;
        b.SetVariable = function (b, d) {
            var e = a.th(String(b), a.a.Pa.r);
            if (e.path) {
                var f = a.dd(e.path, e.Of);
                e.path[f] = String(d)
            }
        };
        b.GetVariable = function (b) {
            b = a.th(String(b), a.a.Pa.r);
            if (b.path) {
                var d = a.t(b.path, b.Of);
                return d in b.path ? String(b.path[d]) : null
            }
            return null
        }
    };
    g.getKey = function () {
        return this.eg
    };
    g.iq = function (a) {
        this.Zd.push(function () {
            this.Bm(a)
        })
    };
    g.ig = function (a) {
        this.Zd.push(a)
    };
    g.Ba = function () {
        if (!this.yl) {
            for (this.yl = !0; this.Zf.length || this.Zd.length;) this.Zf.length ? this.Zf.shift().call(this) : this.Zd.shift().call(this);
            this.yl = !1
        }
    };
    g.Mq = function (a, b) {
        try {
            a()
        } catch (c) {
            throw b(c), c;
        }
    };
    g.vo = function () {
        return Date.now()
    };
    g.yh = function (a) {
        this.Ki.get("AsBroadcaster").initialize(a)
    };
    g.reset = function (a) {
        this.Ja = [];
        this.Xb = 0;
        this.Gb = this.Hc = 4;
        this.l = new nj(this, this.Ki, a.r)
    };
    g.Bm = function (a) {
        a.b.Sd() || (this.reset(a.b), a.pu())
    };
    var lk = function (a) {
        a = a.replace(/\.\.|\/:?|:/g, function (a) {
            return ".." == a ? "_parent" : "."
        });
        "." == a[0] && (a = "_root" + a);
        "." == a[a.length - 1] && (a = a.substring(0, a.length - 1));
        return a
    }, mk = function (a) {
            for (var b = [], c = 0, d = a.length, e = 0; e < d; e++) switch (a[e]) {
            case ".":
                var f = e + 1;
                if (f != d && "." == a[f]) {
                    e > c && b.push(a.substring(c, e));
                    b.push("_parent");
                    c = e + 2;
                    e++;
                    break
                }
            case ":":
                e > c && b.push(a.substring(c, e));
                c = e + 1;
                break;
            case "/":
                0 == e ? b.push("_root") : e > c && b.push(a.substring(c, e)), c = e + 1
            }
            e > c && b.push(0 == c && e == d ? a : a.substring(c, e));
            0 == b.length && b.push("");
            return b
        };
    E.prototype.th = function (a, b) {
        l(b) || (b = this.Nb());
        var c = 0 < a.indexOf(":") ? a.split(":") : a.split(".");
        if (1 < c.length) {
            var d = c[c.length - 1];
            return {
                path: this.gh(c.slice(0, c.length - 1).join("."), b),
                Of: d
            }
        }
        return {
            path: b,
            Of: a
        }
    };
    E.prototype.Dj = function (a) {
        return this.Ki.get(a)
    };
    var nk = {
        "boolean": {},
        number: {},
        string: {},
        undefined: {}
    }, ok = function (a) {
            var b = Object.getOwnPropertyNames(a.constructor.prototype);
            a = nk[typeof a];
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.toLowerCase();
                d != e && (a[e] = d)
            }
        };
    ok(!1);
    ok(0);
    ok("");
    var pk = function (a) {
        if (!a) return {
            constructor: "constructor"
        };
        var b = a.__swiffy_nm;
        if (!b || b.__swiffy_nm != a) {
            for (var b = Object.create(pk(Object.getPrototypeOf(a))), c = Object.getOwnPropertyNames(a), d = 0; d < c.length; ++d) {
                var e = c[d],
                    f = e.toLowerCase();
                e != f && (b[f] = e)
            }
            Object.defineProperty(b, "__swiffy_nm", {
                value: a,
                writable: !0
            });
            Object.defineProperty(a, "__swiffy_nm", {
                value: b,
                writable: !0
            })
        }
        return b
    };
    E.prototype.t = function (a, b) {
        if (7 <= this.a.vb) {
            if ("_" == b.charAt(0) && a instanceof x) {
                if (b in a) return b;
                var c = b.toLowerCase();
                if (c in a && c in qk) return c
            }
            return b
        }
        var d = nk[typeof a];
        if (!d) {
            if (b in a) return b;
            d = pk(a)
        }
        c = b.toLowerCase();
        return (d = d[c]) ? d : c
    };
    var Ej = function (a) {
        return Qd.call(null, a)
    };
    g = E.prototype;
    g.dd = function (a, b) {
        if (7 <= this.a.vb) {
            if ("_" == b.charAt(0) && a instanceof x) {
                if (b in a) return b;
                var c = b.toLowerCase();
                if (c in a && c in qk) return c
            }
            return b
        }
        var d = nk[typeof a];
        if (d) return c = b.toLowerCase(), (d = d[c]) ? d : c;
        if (b in a) return b;
        var e = pk(a),
            c = b.toLowerCase();
        return (d = e[c]) ? d : b == c || c in a ? c : e[c] = b
    };
    g.Do = function (a) {
        if (ia(a)) {
            var b = a[this.t(a, "x")];
            a = a[this.t(a, "y")];
            if (ha(b) && ha(a)) return new Pc(b, a)
        }
        return null
    };
    g.Nb = function () {
        return this.l.Nb()
    };
    g.oe = function () {
        var a = this.l.Nb();
        return a ? a.__swiffy_d : null
    };
    g.push = function (a) {
        this.Ja[this.Gb++] = a
    };
    g.pop = function () {
        if (this.Gb > this.Hc) {
            var a = this.Ja[--this.Gb];
            this.Ja[this.Gb] = void 0;
            return a
        }
    };
    g.I = function () {
        return this.Ue(this.pop())
    };
    g.pa = function () {
        return this.ua(this.pop())
    };
    g.ee = function () {
        return this.lp(this.pop())
    };
    g.Fq = function () {
        return this.jg(this.pop())
    };
    g.Nj = function () {
        for (var a = Number(this.pop()), a = Math.min(a, this.Gb - this.Hc), b = [], c = 0; c < a; ++c) b[c] = this.pop();
        return b
    };
    g.jg = function (a) {
        return a instanceof x ? a : this.jp(String(a))
    };
    g.gh = function (a, b) {
        if (!b || !a) return b;
        for (var c = mk(a), d = b, e = 0; e < c.length && d; e++) d = d[this.t(d, c[e])];
        return d
    };
    g.jp = function (a) {
        return this.gh(a, this.Nb())
    };
    g.Gg = function () {
        this.ag.Gg()
    };
    g.zg = function () {
        this.wg(new Ee(4));
        this.Ba();
        this.ag.zg()
    };
    g.Hg = function () {
        this.ag.Hg()
    };
    g.sq = function () {
        return this.ag.__swiffy_mv
    };
    g.tl = function () {
        this.a.B.r.broadcastMessage("onResize")
    };
    g.ak = function (a) {
        this.eg.ak(a)
    };
    g.Kq = function () {
        this.eg.broadcastMessage("onKeyUp")
    };
    g.$j = function (a) {
        this.eg.$j(a)
    };
    g.Iq = function () {
        this.eg.broadcastMessage("onKeyDown")
    };
    g.Dp = function () {};
    g.Ep = function () {};
    g.Go = function (a, b, c, d) {
        b = this.t(a, b);
        if (!(d && b in a) || d && a[b] && a[b] === a.__swiffy_child_ref[b] && a[b].__swiffy_d.depth > c.__swiffy_d.depth) b = this.dd(a, b), a[b] = c, d && (a.__swiffy_child_ref[b] = c)
    };
    g.Ho = function (a, b, c) {
        b = this.t(a, b);
        c === a[b] && (delete a[b], delete a.__swiffy_child_ref[b])
    };
    g.zl = function (a, b, c) {
        this.Zf.push(function () {
            this.yw(a, b, c)
        })
    };
    g.yw = function (a, b, c) {
        this.rn(a, b, function (a, e, f, h) {
            var k = c;
            l(h.Fh[f]) || (h.Fh[f] = []);
            h.Fh[f].push(b);
            f in e && (b.Td(String(e[f])), k = e[f]);
            Object.defineProperty(e, f, a.Tv(k, h.Fh[f]))
        })
    };
    g.vl = function (a, b) {
        this.Zf.push(function () {
            this.zw(a, b)
        })
    };
    g.zw = function (a, b) {
        this.rn(a, b, function (a, d, e, f) {
            (a = f.Fh[e]) && Ga(a, b)
        })
    };
    g.rt = function (a, b, c) {
        this.rn(a, b, function (a, b, f) {
            b[f] = c
        })
    };
    g.rn = function (a, b, c) {
        if (b = this.Hl(b, A)) a = lk(a), b = this.th(a, b.r), (a = b.path) && a.__swiffy_d && (b = this.dd(a, b.Of), c(this, a, b, a.__swiffy_d))
    };
    g.Hl = function (a, b) {
        for (var c = a; c && !(c instanceof b);) c = c.getParent();
        return c
    };
    g.rq = function (a, b) {
        var c = -16384 + b,
            d = "_level" + b;
        d in B.prototype || Object.defineProperty(B.prototype, d, {
            get: function () {
                var a = this.__swiffy_d;
                if (a && (a = a.a.B.Fc(c))) return a.r
            },
            set: function (a) {
                Object.defineProperty(this, d, {
                    value: a,
                    configurable: !0,
                    writable: !0,
                    enumerable: !0
                })
            }
        })
    };
    g.fireEvent = function (a, b, c, d) {
        var e = xj[c.type];
        c = !1;
        if (b)
            for (var f = 0; f < b.actions.length; ++f) {
                var h = b.actions[f];
                if (!h.Bo || h.Bo(this)) h.Bl && (d ? this.Bm(h.Bl) : this.iq(h.Bl)), h.stopPropagation && (c = !0)
            }
        if (e) {
            var k = this;
            b = function () {
                var b = k.t(a, e);
                if (p(a[b])) a[b]()
            };
            d ? b() : this.ig(b)
        }
        return c
    };
    g.At = function (a) {
        a = a instanceof $e ? a.getParent() : a;
        return a = 5 < this.a.vb ? this.Hl(a, Ve) : this.Hl(a, A)
    };
    g.pl = function () {
        var a = this;
        Pe.prototype.wa = function () {
            return Object.create(x.prototype)
        };
        mf.prototype.wa = function () {
            var b = Object.create(Lj.prototype);
            a.yh(b);
            b.addListener(b);
            return b
        };
        Kf.prototype.wa = function () {
            var b = Object.create(dk.prototype);
            a.yh(b);
            return b
        };
        Ve.prototype.wa = function () {
            return Object.create(Bj.prototype)
        };
        A.prototype.wa = function () {
            var a = void 0,
                c = this.definition.kl;
            c && (a = Sd[c]);
            return Object.create((a ? a : B).prototype)
        };
        $e.prototype.wa = function () {
            return Object.create(Pj.prototype)
        };
        Ye.prototype.wa = function () {
            return {}
        }
    };
    g.np = function (a, b) {
        var c = a.r;
        b ? (this.Zf.push(function () {
            a.fireEvent(new Ee(19), !0);
            c.constructor()
        }), a.fireEvent(new Ee(7)), a.Ah()) : (a.Ah(), a.fireEvent(new Ee(19), !0), c.constructor(), a.fireEvent(new Ee(7)))
    };
    g.Wo = function () {};
    g.Tv = function (a, b) {
        var c = a,
            d = this;
        return {
            get: function () {
                return c
            },
            set: function (a) {
                c = a;
                a = d.ua(a);
                for (var f = 0; f < b.length; f++) b[f].Td(a)
            },
            configurable: !0
        }
    };
    g.uc = function (a, b) {
        if (null != a) {
            var c = b in a,
                d = delete a[b];
            delete a[b];
            this.Wx(a, b);
            return c && d
        }
        return !1
    };
    g.Wx = function (a, b) {
        if (a instanceof B) {
            var c = a.__swiffy_d;
            c && (c = c.F.mr(b)) && Ke(a, c, b)
        }
    };
    g.ur = function (a, b) {
        this.a.Pa.r[a] = b
    };
    g.jh = function () {
        return this.Qd
    };
    g.hk = function (a, b) {
        var c = this.xw(a, b);
        return this.bg.bind(this, c)
    };
    g.bg = function (a) {
        var b = this.Kc,
            c = cj;
        cj = this;
        this.Kc = $f;
        try {
            for (var d = 0; 0 <= d;) d = a[d](this)
        } catch (e) {
            b.call(this, e)
        } finally {
            cj = c, this.Kc = b
        }
    };
    g.xw = function (a) {
        a = "return " + this.Af(a, 4);
        return Function(a)()
    };
    g.Af = function (a, b) {
        if (!a) return "null";
        var c = 0,
            d = !0,
            e, f = this.Rv(a),
            h = {
                labels: f,
                registerCount: b
            };
        e = "[function(vm){";
        for (var k = 0; k < a.length; k++) {
            var n = f[k];
            n && (d && (e += rk(n)), e += "}", e += ",", e += "function(vm){");
            c++;
            var n = a[k],
                q = G[n.type];
            if (q) {
                d = !0;
                switch (q.La) {
                case 2:
                    d = !1
                }
                e = q.compile ? e + q.compile.call(q, n, this, h) : e + sk(q)
            }
        }
        d && (e += rk(-1));
        return e + "}]"
    };
    g.Rv = function (a) {
        for (var b = [-1], c = 0; c < a.length;) {
            var d = a[c++];
            switch (d.type) {
            case 157:
            case 153:
                b[d.target] = -1
            }
        }
        for (d = c = 0; c < a.length; ++c) b[c] && (b[c] = d++);
        return b
    };
    var tk = function (a, b) {
        for (var c = "vm." + a.action + "(", d = 1; d < arguments.length; ++d) 1 < d && (c += ","), c += arguments[d];
        return c + ")"
    }, sk = function (a, b) {
            return tk.apply(null, arguments) + ";"
        }, rk = function (a) {
            return "return " + (l(a) ? a : "-1") + ";"
        };
    g = E.prototype;
    g.cj = function (a) {
        return !(a instanceof A && a.isEnabled())
    };
    g.tq = function (a) {
        return a.isEnabled() && (a instanceof A || a instanceof $e) && a.r.useHandCursor
    };
    g.bq = function (a, b) {
        a && a.Or(b);
        b && b.Pr(a)
    };
    g.wg = function (a) {
        for (var b = this.a.Hf, c = b.length - 1; 0 <= c; c--) b[c].Sd() || b[c].fireEvent(a)
    };
    g.zo = function (a, b) {
        b.na() && b.Kb(a.rh())
    };
    g.bs = function (a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.as = function (a, b) {
        a = String(a).toUpperCase();
        b = String(b).toUpperCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.cs = function (a, b) {
        ha(a) && ha(b) || (a = String(a), b = String(b));
        return a < b ? -1 : a > b ? 1 : 0
    };
    var uk = "_x _y _xscale _yscale _currentframe _totalframes _alpha _visible _width _height _rotation _target _framesloaded _name _droptarget _url _highquality _focusrect _soundbuftime _quality _xmouse _ymouse".split(" "),
        qk = function () {
            var a = {};
            uk.forEach(function (b) {
                a[b] = !0
            });
            return a
        }(),
        G = {
            4: function () {
                this.xi()
            }
        };
    E.prototype.xi = function () {
        var a = this.oe();
        a instanceof A && a.xi()
    };
    G[5] = function () {
        this.Tx()
    };
    E.prototype.Tx = function () {
        var a = this.oe();
        a instanceof A && a.Bn()
    };
    G[6] = function () {
        this.play()
    };
    E.prototype.play = function () {
        var a = this.oe();
        a instanceof A && a.play()
    };
    G[7] = function () {
        this.stop()
    };
    E.prototype.stop = function () {
        var a = this.oe();
        a instanceof A && a.stop()
    };
    G[9] = function () {
        this.qy()
    };
    E.prototype.qy = function () {
        var a = this.oe();
        a instanceof A && a.He().Op()
    };
    G[10] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b + a)
    };
    G[11] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b - a)
    };
    G[12] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b * a)
    };
    G[13] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b / a)
    };
    G[14] = function () {
        var a = this.I(),
            b = this.I();
        this.push(this.sv(b, a))
    };
    G[15] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b < a)
    };
    G[16] = function () {
        var a = this.ee(),
            b = this.ee();
        this.push(b && a)
    };
    G[17] = function () {
        var a = this.ee(),
            b = this.ee();
        this.push(b || a)
    };
    G[18] = function () {
        var a = this.ee();
        this.push(!a)
    };
    G[19] = function () {
        var a = this.pa(),
            b = this.pa();
        this.push(b == a)
    };
    G[20] = function () {
        var a = this.pa();
        this.push(a.length)
    };
    G[21] = function () {
        var a = this.pop(),
            b = this.pop(),
            c = this.pa();
        this.push(this.Qv(c, b, a))
    };
    E.prototype.Qv = function (a, b, c) {
        a = this.ua(a);
        c = Number(c);
        b = Math.max(0, Number(b) - 1);
        return a.substr(b, c)
    };
    G[23] = function () {
        this.pop()
    };
    G[24] = function () {
        var a = this.I(),
            a = 0 > a ? Math.ceil(a) : Math.floor(a);
        this.push(a)
    };
    G[28] = function () {
        var a = this.pa();
        this.push(this.ae(a))
    };
    E.prototype.ae = function (a) {
        a = mk(a);
        var b = this.l.get(a[0]);
        if (1 < a.length) {
            var c;
            for (c = 1; l(b) && c < a.length - 1; ++c) b = b[this.t(b, a[c])];
            l(b) && (b = b[this.t(b, a[c])])
        }
        return b
    };
    G[29] = function () {
        var a = this.pop(),
            b = this.pa();
        this.hj(b, a)
    };
    E.prototype.hj = function (a, b) {
        var c = mk(a);
        if (1 == c.length) this.l.set(c[0], b);
        else {
            var d = this.l.get(c[0]),
                e;
            for (e = 1; l(d) && e < c.length - 1; ++e) d = d[this.t(d, c[e])];
            l(d) && (d[this.dd(d, c[e])] = b)
        }
    };
    G[33] = function () {
        var a = this.pa(),
            b = this.pa();
        this.push(b + a)
    };
    G[34] = function () {
        var a = this.I(),
            b = this.pop();
        this.push(this.Md(b, a))
    };
    E.prototype.Md = function (a, b) {
        var c = this.jg(a),
            d = uk[b];
        if (c) return c[d]
    };
    G[35] = function () {
        var a = this.pop(),
            b = this.I(),
            c = this.pop();
        this.setProperty(c, b, a)
    };
    E.prototype.setProperty = function (a, b, c) {
        b = uk[b];
        (a = this.jg(a)) && b && (a[b] = c)
    };
    G[36] = function () {
        var a = this.I(),
            b = this.pa(),
            c = this.Fq(),
            d = this.oe();
        c && d && c.__swiffy_d && c.__swiffy_d.duplicate(d, b, a + -16384)
    };
    G[37] = function () {
        var a = this.Fq();
        a instanceof B && a.removeMovieClip()
    };
    G[38] = function () {
        this.trace(this.pop())
    };
    E.prototype.trace = function (a) {
        window.console && (a = l(a) ? this.ua(a) : "undefined", Yf(a))
    };
    G[51] = function () {
        var a = this.I();
        this.push(String.fromCharCode(a))
    };
    G[50] = function () {
        var a = this.pa();
        this.push(a.charCodeAt(0))
    };
    G[52] = function () {
        this.push(this.getTime())
    };
    E.prototype.getTime = function () {
        return this.vo() - this.mt
    };
    G[48] = function () {
        var a = this.I();
        this.push(this.random(a))
    };
    E.prototype.random = function (a) {
        var b;
        do b = Math.floor(Math.random() * a); while (b == a && 0 < a);
        return b
    };
    G[60] = function () {
        var a = this.pop(),
            b = this.pa();
        b && this.l.Hd(b, a)
    };
    G[65] = function () {
        var a = this.pa();
        a && this.l.Rh(a)
    };
    G[59] = function () {
        var a = this.nx(this.pop());
        this.push(a)
    };
    E.prototype.nx = function (a) {
        a = this.ua(a);
        a = mk(a);
        if (1 == a.length) return this.l.ce(a[0]);
        var b = this.l.get(a[0]),
            c;
        for (c = 1; l(b) && c < a.length - 1; ++c) b = b[this.t(b, a[c])];
        return this.uc(b, this.t(b, a[c]))
    };
    G[62] = function () {
        this.returnValue = this.pop()
    };
    G[62].La = 2;
    G[62].compile = function () {
        return sk(this) + rk()
    };
    G[63] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b % a)
    };
    G[71] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(this.add(b, a))
    };
    G[72] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Ds(b, a))
    };
    E.prototype.Ds = function (a, b) {
        var c = typeof a,
            d = typeof b;
        if ("number" !== c || "number" !== d) {
            if ("object" === c && null !== a && (a = a.valueOf(), c = typeof a, "object" === c) || "object" === d && null !== b && (b = b.valueOf(), d = typeof b, "object" === d)) return !1;
            if ("string" === c && "string" === d) return a < b;
            a = this.Ue(a);
            b = this.Ue(b)
        }
        return a !== a || b !== b ? void 0 : a < b
    };
    G[103] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Ds(a, b))
    };
    G[73] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(this.Ed(b, a))
    };
    E.prototype.Ed = function (a, b) {
        var c = typeof a,
            d = typeof b;
        if (c !== d || null === a !== (null === b) || !("number" === c || 6 <= this.a.vb)) {
            "object" === c && null !== a && (a = a.valueOf(), c = typeof a);
            "object" === d && null !== b && (b = b.valueOf(), d = typeof b);
            if ("object" === c || "object" === d) return void 0 === a || null === a ? void 0 === b || null === b : a === b;
            "string" !== c || "boolean" !== d && "number" !== d ? "string" !== d || "boolean" !== c && "number" !== c || "" != b.trim() || (b = Number.NaN) : "" == a.trim() && (a = Number.NaN)
        }
        return a == b
    };
    G[102] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(b === a)
    };
    G[41] = function () {
        var a = this.pa(),
            b = this.pa();
        this.push(b < a)
    };
    G[42] = function () {
        throw new Wf(this.pop());
    };
    G[42].La = 2;
    G[104] = function () {
        var a = this.pa(),
            b = this.pa();
        this.push(b > a)
    };
    G[105] = function () {
        var a = this.pop(),
            b = this.pop();
        p(a) && p(b) && Od(b, a)
    };
    G[74] = function () {
        var a = this.I();
        this.push(a)
    };
    G[75] = function () {
        var a = this.pa();
        this.push(a)
    };
    G[76] = function () {
        var a = this.pop();
        this.push(a);
        this.push(a)
    };
    G[77] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(a);
        this.push(b)
    };
    G[78] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(this.wx(b, a))
    };
    E.prototype.wx = function (a, b) {
        if (null != a)
            if (a instanceof kj && (a = a.Qp()), "number" === typeof b) {
                if ("string" !== typeof a) return a[b]
            } else return a[this.t(a, this.ua(b))]
    };
    G[79] = function () {
        var a = this.pop(),
            b = this.pop(),
            c = this.pop();
        this.ey(c, b, a)
    };
    E.prototype.ey = function (a, b, c) {
        if (null != a)
            if ("number" === typeof b) a[b] = c;
            else {
                var d = this.dd(a, this.ua(b));
                a instanceof Array && "length" == d && (c = ha(c) ? c : 0);
                a[d] = c;
                p(a) && "prototype" == b && (a.q = c.constructor.prototype, c.constructor = a)
            }
    };
    G[80] = function () {
        var a = this.I();
        this.push(++a)
    };
    G[81] = function () {
        var a = this.I();
        this.push(--a)
    };
    G[96] = function () {
        var a = this.I(),
            b = this.I();
        this.push(a & b)
    };
    G[97] = function () {
        var a = this.I(),
            b = this.I();
        this.push(a | b)
    };
    G[98] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b ^ a)
    };
    G[99] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b << a)
    };
    G[100] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b >> a)
    };
    G[101] = function () {
        var a = this.I(),
            b = this.I();
        this.push(b >>> a)
    };
    G[58] = function () {
        var a = this.pa(),
            b = this.pop(),
            a = this.uc(b, this.t(b, a));
        this.push(a)
    };
    G[129] = function (a) {
        this.Bx(a)
    };
    G[129].compile = function (a) {
        return sk(this, a.frame)
    };
    E.prototype.Bx = function (a) {
        var b = this.oe();
        b instanceof A && b.$d(a, !1)
    };
    G[140] = function (a) {
        this.Cx(a)
    };
    G[140].compile = function (a) {
        return sk(this, ya(a.label))
    };
    E.prototype.Cx = function (a) {
        var b = this.oe();
        b instanceof A && (a = b.Xe(a), void 0 != a && b.$d(a, !1))
    };
    G[136] = function () {};
    G[136].compile = function (a, b) {
        b.xo = a.constants;
        return sk(this)
    };
    G[32] = function () {
        this.Ad(this.pop())
    };
    E.prototype.Ad = function (a) {
        a instanceof x || (a = String(a), a = this.gh(a, this.l.Ze()), a instanceof x || (a = void 0));
        this.l.Ad(a)
    };
    G[69] = function () {
        var a = this.pop(),
            b = void 0;
        a instanceof x && (b = a.__swiffy_d.Ap());
        this.push(b)
    };
    G[305] = function (a) {
        this.push(a)
    };
    G[305].compile = function (a) {
        a = a.value;
        m(a) && (a = ya(a));
        return sk(this, a)
    };
    G[306] = function () {
        this.push(void 0)
    };
    G[307] = function () {
        this.push(Number.POSITIVE_INFINITY)
    };
    G[308] = function () {
        this.push(Number.NEGATIVE_INFINITY)
    };
    G[309] = function () {
        this.push(Number.NaN)
    };
    G[304] = function (a) {
        this.push(a)
    };
    G[304].compile = function (a, b) {
        var c = b.xo[a.index];
        l(c) && (c = ya(c));
        return sk(this, c)
    };
    G[303] = function (a) {
        this.push(this.Ja[a + this.Xb])
    };
    G[303].compile = function (a, b, c) {
        a = a.index;
        return a < c.registerCount ? sk(this, a) : sk(G[306])
    };
    G[135] = function (a) {
        this.Ja[a + this.Xb] = this.Ja[this.Gb - 1]
    };
    G[135].compile = function (a, b, c) {
        a = a.index;
        return a < c.registerCount ? sk(this, a) : ""
    };
    G[154] = function (a, b, c) {
        var d = this.pa(),
            e = this.pa();
        a = new bg(this, this.Nb(), e, d, a, b, c);
        this.a.Dh(a)
    };
    G[154].compile = function (a) {
        return sk(this, a.method, a.target, a.variables)
    };
    G[148] = function (a) {
        var b = this.pop();
        if (b instanceof Object) {
            var c = this.l;
            this.l = new mj(this, c, b);
            try {
                this.bg(a)
            } finally {
                this.l = c
            }
        }
    };
    G[148].compile = function (a, b, c) {
        return sk(this, b.Af(a.body, c.registerCount))
    };
    G[155] = function (a, b) {
        this.push(this.zs(4, a, b))
    };
    G[155].compile = function (a, b) {
        var c = b.Ur(a.args, [], 0, 4);
        return sk(this, c, b.Af(a.body, 4))
    };
    G[142] = function (a, b, c) {
        this.push(this.zs(a, b, c))
    };
    G[142].compile = function (a, b) {
        var c = b.Ur(a.args, a.preloads, a.suppress, a.registerCount);
        return sk(this, a.registerCount, c, b.Af(a.body, a.registerCount))
    };
    E.prototype.Ur = function (a, b, c, d) {
        var e = "function(vm,self,fn,caller,args){";
        c & 4 || (e += sk(vk, '"this"', "self"));
        c & 1 || (e += sk(wk, "self", "fn"));
        c & 2 || (e += "args=Array.prototype.slice.call(args);args.callee=fn;", e += "args.caller=caller;", e += sk(vk, '"arguments"', "args"));
        for (c = 0; c < b.length && c + 1 < d; ++c) var f = tk(xk, ya(b[c])),
        e = e + sk(yk, c + 1, f);
        for (c = 0; c < a.length; ++c) b = a[c], d = "args[" + c + "]", e = m(b) ? e + sk(vk, ya(b), d) : e + sk(yk, b, d);
        return e + "}"
    };
    E.prototype.zs = function (a, b, c) {
        var d = this,
            e = this.l,
            f = function () {
                var h = d.l,
                    k = d.l.Nb(),
                    n = d.fl;
                d.fl = f;
                d.l = 5 < d.a.vb ? new lj(d, e) : new lj(d, new nj(d, d.Ki, this));
                var q = d.Xb,
                    s = d.Hc;
                d.Xb = d.Gb;
                d.Gb += a;
                d.Hc = d.Gb;
                d.returnValue = void 0;
                try {
                    b(d, this, f, n, arguments), d.bg(c)
                } finally {
                    for (var r = d.Xb; r < d.Gb; ++r) d.Ja[r] = void 0;
                    d.Gb = d.Xb;
                    d.Xb = q;
                    d.Hc = s;
                    d.fl = n;
                    d.l = h;
                    d.l.Ad(k)
                }
                return d.returnValue
            };
        Od(f, Qd);
        return f
    };
    G[143] = function (a, b, c, d, e) {
        try {
            this.bg(a)
        } catch (f) {
            if (f instanceof Wf)
                if (a = f.value, null != b) {
                    var h;
                    l(e) ? (h = this.l.get(e), this.l.Hd(e, a)) : (d += this.Xb, d >= this.Xb && d < this.Hc && (this.Ja[d] = a));
                    try {
                        this.bg(b)
                    } finally {
                        l(e) && (l(h) ? this.l.Hd(e, h) : this.l.ce(e))
                    }
                } else throw f;
                else throw f;
        } finally {
            null != c && this.bg(c)
        }
    };
    G[143].compile = function (a, b, c) {
        var d = a.variable;
        l(d) && (d = ya(d));
        return sk(this, b.Af(a.tryBlock, c.registerCount), b.Af(a.catchBlock, c.registerCount), b.Af(a.finallyBlock, c.registerCount), a.register, d)
    };
    G[61] = function () {
        var a = this.pa(),
            b = this.Nj();
        this.push(this.Fv(a, b))
    };
    G[61].La = 1;
    E.prototype.Fv = function (a, b) {
        var c = mk(a);
        if (1 >= c.length) return this.l.call(c[0], b);
        for (var d = this.l.get(c[0]), e = 1; e < c.length; ++e) {
            if (null == d) return;
            var f = d,
                d = f[this.t(f, c[e])]
        }
        if (p(d)) return d.apply(f, b)
    };
    G[82] = function () {
        var a = this.pop(),
            b = this.pop(),
            c = this.Nj();
        this.push(this.Aw(a, b, c))
    };
    G[82].La = 1;
    E.prototype.Aw = function (a, b, c) {
        if (null != b)
            if (null != a && "" !== a) {
                var d = b;
                if (d instanceof kj) {
                    b = d.Qp();
                    if (!b) return;
                    d = d.object
                }
                b = b[this.t(b, String(a))];
                p(b) && "__swiffy_override" in b && (b = b.__swiffy_override);
                if (p(b)) return b.apply(Ej(d), c)
            } else if (b instanceof kj) {
            if (d = Object.getPrototypeOf(b.method.prototype).constructor, p(d)) return d.apply(Ej(b.object), c)
        } else if ((d = this.l.Nb()) || (d = this.l.Ze()), p(b) && "__swiffy_override" in b && (b = b.__swiffy_override), p(b)) return b.apply(Ej(d), c)
    };
    G[64] = function () {
        var a = this.pa(),
            a = this.l.get(a),
            b = this.Nj();
        p(a) || (a = Qd);
        var c;
        p(a) && "__swiffy_override" in a ? c = a.__swiffy_override.apply(Ej(null), b) : (c = Object.create(a.prototype), c.__swiffy_nvr && Object.defineProperty(c, "__swiffy_vm", {
            value: this
        }), a.apply(Ej(c), b));
        this.push(c)
    };
    G[83] = function () {
        var a = this.pop(),
            b = this.pop(),
            c = this.Nj(),
            d = void 0;
        null != b && (d = null != a && "" !== a ? b[this.t(b, String(a))] : b);
        p(d) || (d = Qd);
        p(d) && "__swiffy_override" in d ? a = d.__swiffy_override.apply(Ej(null), c) : (a = Object.create(d.prototype), a.__swiffy_nvr && Object.defineProperty(a, "__swiffy_vm", {
            value: this
        }), d.apply(Ej(a), c));
        this.push(a)
    };
    G[67] = function () {
        for (var a = Rd(), b = Number(this.pop()), c = 0; c < b; c++) {
            var d = this.pop(),
                e = this.pa();
            a[e] = d
        }
        this.push(a)
    };
    G[66] = function () {
        for (var a = [], b = Number(this.pop()), c = 0; c < b; c++) {
            var d = this.pop();
            a[c] = d
        }
        this.push(a)
    };
    G[68] = function () {
        var a = this.pop();
        this.push(a instanceof B ? "movieclip" : null == a || void 0 == a ? String(a) : typeof a)
    };
    G[85] = function () {
        var a = this.pop();
        this.push(void 0);
        if ("string" !== typeof a)
            for (var b in a) ud(b) || this.push(b)
    };
    G[153] = function () {};
    G[153].La = 2;
    G[153].compile = function (a, b, c) {
        return rk(c.labels[a.target])
    };
    G[157] = function () {
        return this.ee()
    };
    G[157].La = 1;
    G[157].compile = function (a, b, c) {
        return "if(" + tk(this) + ")" + rk(c.labels[a.target])
    };
    G[158] = function () {
        var a = this.pa(),
            b = this.th(a);
        if (b.path && b.path.__swiffy_d && (a = b.path.__swiffy_d) && (b = a.Xe(b.Of), void 0 != b && (b = a.cu(b)))) {
            for (var c = this.l, d = this.Xb, e = this.Hc, f = this.Gb, h = this.Ja, k = 0; k < b.length; k++) b[k].nm(a);
            this.Ja = h;
            this.l = c;
            this.Xb = d;
            this.Hc = e;
            this.Gb = f
        }
    };
    G[158].La = 1;
    G[159] = function (a, b) {
        var c = this.pa(),
            d = this.th(c);
        d.path && d.path.__swiffy_d && (c = d.path.__swiffy_d) && (d = c.Xe(d.Of), void 0 != d && c.$d(d + a, b))
    };
    G[159].compile = function (a) {
        return sk(this, a.frameBias, a.play)
    };
    G[44] = function () {
        var a = this.pop(),
            b = Number(this.pop()),
            a = (a = a ? a.prototype : null) ? a : {}, c;
        a.hasOwnProperty("__swiffy_if") ? c = a.__swiffy_if : (c = new Ac, a.__swiffy_if && c.di(a.__swiffy_if), Object.defineProperty(a, "__swiffy_if", {
            value: c
        }));
        for (var d = 0; d < b; ++d) {
            var e = this.pop();
            if (a = e ? e.prototype : null) c.add(e), a.__swiffy_if && c.di(a.__swiffy_if)
        }
    };
    var zk = function (a, b) {
        if (p(b)) {
            "__swiffy_wrapped_type" in b && (b = b.__swiffy_wrapped_type);
            if (a instanceof b) return a;
            if (a instanceof Object) {
                var c = a.__swiffy_if;
                if (c && c.contains(b)) return a
            }
        }
        return null
    };
    G[43] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push(zk(a, b))
    };
    G[84] = function () {
        var a = this.pop(),
            b = this.pop();
        this.push( !! zk(b, a))
    };
    G[39] = function () {
        var a = this.pop(),
            b = this.ee(),
            c = this.ee(),
            d = c ? this.I() : void 0,
            e = c ? this.I() : void 0,
            f = c ? this.I() : void 0,
            c = c ? this.I() : void 0,
            a = a ? a.__swiffy_d : null;
        a instanceof A && this.a.ip(a, b, c, f, e, d)
    };
    G[40] = function () {
        this.a.jj()
    };
    G[1E3] = function () {};
    var yk = function (a, b) {
        this.Ja[a + this.Xb] = b
    };
    G[1001] = yk;
    var vk = function (a, b) {
        this.l.Hd(a, b)
    };
    G[1002] = vk;
    var wk = function (a, b) {
        this.l.Hd("super", new kj(a, b))
    };
    G[1003] = wk;
    var xk = function (a) {
        return this.l.get(a)
    };
    G[1004] = xk;
    Pa({
        dB: 4,
        jB: 5,
        gB: 6,
        eC: 7,
        fC: 9,
        Nw: 10,
        Yw: 11,
        Vw: 12,
        Qw: 13,
        Rw: 14,
        LESS: 15,
        zy: 16,
        fB: 17,
        Ww: 18,
        kC: 19,
        nC: 20,
        lC: 21,
        Xw: 23,
        sC: 24,
        Wz: 28,
        bC: 29,
        aC: 32,
        jC: 33,
        Tz: 34,
        $B: 35,
        Vy: 36,
        KB: 37,
        vC: 38,
        dC: 39,
        Az: 40,
        oC: 41,
        Ug: 42,
        Ty: 43,
        qA: 44,
        FB: 48,
        Uy: 50,
        Ay: 51,
        Uz: 52,
        qz: 58,
        sz: 59,
        oz: 60,
        Ry: 61,
        LB: 62,
        Uw: 63,
        aB: 64,
        pz: 65,
        wA: 66,
        yA: 67,
        xC: 68,
        rC: 69,
        xy: 71,
        LA: 72,
        Dz: 73,
        tC: 74,
        uC: 75,
        yB: 76,
        cC: 77,
        Sz: 78,
        ZB: 79,
        Sw: 80,
        Pw: 81,
        Sy: 82,
        $A: 83,
        BA: 84,
        Cz: 85,
        Hy: 96,
        Jy: 97,
        My: 98,
        Iy: 99,
        Ky: 100,
        Ly: 101,
        iC: 102,
        GREATER: 103,
        mC: 104,
        Gz: 105,
        Xz: 129,
        gC: 135,
        Yy: 136,
        Zz: 140,
        nz: 142,
        Nm: 143,
        AC: 148,
        Tw: 153,
        Vz: 154,
        mz: 155,
        bA: 157,
        qf: 158,
        Yz: 159,
        CB: 303,
        xB: 304,
        EB: 305,
        DB: 306,
        BB: 307,
        AB: 308,
        zB: 309,
        ez: 1E3,
        zA: 1001,
        xA: 1002,
        AA: 1003,
        Rz: 1004
    }, function (a, b) {
        var c = G[a];
        c.action = b;
        E.prototype[b] = c
    });
    g = E.prototype;
    g.Ue = function (a) {
        return ha(a) ? a : 7 <= this.a.vb ? !l(a) || null === a || m(a) && "" === a.trim() ? Number.NaN : Number(a) : 5 <= this.a.vb && 7 > this.a.vb ? l(a) && null !== a ? m(a) && "" === a.trim() ? Number.NaN : Number(a) : 0 : l(a) && null !== a ? m(a) ? (a = Number(a), isNaN(a) ? 0 : a) : Number(a) : 0
    };
    g.ua = function (a) {
        if (m(a)) return a;
        5 > this.a.vb && ga(a) && (a = a ? "1" : "0");
        return 7 > this.a.vb && !l(a) ? "" : a instanceof x ? a.__swiffy_d.Ap() : a + ""
    };
    g.lp = function (a) {
        return 7 <= this.a.vb ? Boolean(a) : "string" == typeof a ? Boolean(Number(a)) : Boolean(a)
    };
    g.sv = function (a, b) {
        return 5 > this.a.vb ? a == b ? 1 : 0 : a == b
    };
    g.add = function (a, b) {
        return m(a) || m(b) ? this.ua(a) + this.ua(b) : this.Ue(a) + this.Ue(b)
    };
    var Ak = function (a, b) {
        return a ? a + "." + b : String(b)
    }, Ck = function (a, b, c) {
            Bk && b instanceof Bk && (b = b.__swiffy_v, c = c || b.ma, a ? b = b.eb() : (a = b.uri, b = b.localName));
            this.uri = a;
            this.localName = b;
            this.ma = c;
            this.Ne = void 0
        };
    g = Ck.prototype;
    g.complete = function () {
        return this
    };
    g.compile = function () {
        return ""
    };
    g.Qb = function () {
        l(this.Ne) || (this.Ne = Ak(this.uri, this.localName));
        return this.Ne
    };
    g.Rb = function (a) {
        if (!(this.ma || a instanceof Dk && ia(this.localName))) {
            var b = this.Qb();
            if (b in Object(a)) return b
        }
    };
    g.Kd = function () {
        return this
    };
    g.eb = function () {
        switch (this.uri) {
        case "":
            return "" + this.localName;
        case null:
            return "*::" + this.localName;
        default:
            return this.uri + "::" + this.localName
        }
    };
    g.toString = function () {
        return (this.ma ? "@" : "") + this.Qb()
    };
    g.normalize = function () {
        var a = String(this.localName);
        return a === this.localName ? this : new Ck(this.uri, a, this.ma)
    };
    g.Sc = function () {
        if (!this.ma && !this.uri) {
            var a = this.localName;
            return ha(a) ? !isFinite(a) || 0 > a || 0 != a % 1 ? void 0 : a : (a = String(a), /^[0-9]+$/.test(a) ? parseInt(a, 10) : void 0)
        }
    };
    g.vi = function (a, b) {
        var c = this.Sc();
        if (!l(c)) throw I(a, this.eb(), Ek(b).Qb());
        return c
    };
    var Fk = function (a, b) {
        this.name = a;
        this.ma = b
    };
    Fk.prototype.complete = function (a) {
        return new Ck(String(a), this.name, this.ma)
    };
    Fk.prototype.compile = function (a) {
        return "," + a.pop()
    };
    Fk.prototype.toString = function () {
        return (this.ma ? "@" : "") + Ak("?", this.name)
    };
    var Gk = function (a) {
        this.ma = a
    };
    Gk.prototype.complete = function (a, b) {
        return new Ck(String(b), a, this.ma)
    };
    Gk.prototype.compile = function (a) {
        return "," + a.pop() + "," + a.pop()
    };
    Gk.prototype.toString = function () {
        return (this.ma ? "@" : "") + Ak("?", "?")
    };
    var Hk = function (a, b, c) {
        this.namespaces = a;
        this.localName = b;
        this.ma = c
    };
    g = Hk.prototype;
    g.complete = function () {
        return this
    };
    g.compile = function () {
        return ""
    };
    g.Qb = function () {
        return Ak("", this.localName)
    };
    g.Rb = function (a) {
        if (!(this.ma || a instanceof Dk && ia(this.localName))) {
            var b = this.namespaces,
                c = this.localName;
            a = Object(a);
            for (var d = 0; d < b.length; ++d) {
                var e = Ak(b[d], c);
                if (e in a) return e
            }
        }
    };
    g.Kd = function () {
        return new Ck("", this.localName, this.ma)
    };
    g.eb = function () {
        return String(this.localName)
    };
    g.toString = function () {
        return (this.ma ? "@" : "") + Ak("[" + this.namespaces.join(", ") + "]", this.localName)
    };
    var Ik = function (a, b) {
        this.namespaces = a;
        this.ma = b
    };
    Ik.prototype.complete = function (a) {
        return new Hk(this.namespaces, a, this.ma)
    };
    Ik.prototype.compile = function (a) {
        return "," + a.pop()
    };
    Ik.prototype.toString = function () {
        return (this.ma ? "@" : "") + Ak("[" + this.namespaces.join(", ") + "]", "?")
    };
    var Jk = function (a) {
        this.Yr = a;
        this.Xg = ""
    };
    Jk.prototype.Fr = function (a) {
        this.Xg && (this.Xg += ",");
        this.Xg += a ? a.eb() : "*";
        return this
    };
    Jk.prototype.Gr = function () {
        return new Ck(this.Yr.uri, this.Yr.localName + ".<" + this.Xg + ">", !1)
    };
    var Kk = function (a, b, c, d, e) {
        switch (a.kind) {
        case 9:
            return new Hk(d[a.ns], b[a.name], !1);
        case 14:
            return new Hk(d[a.ns], b[a.name], !0);
        case 27:
            return new Ik(d[a.ns], !1);
        case 28:
            return new Ik(d[a.ns], !0);
        case 15:
            return new Fk(b[a.name], !1);
        case 16:
            return new Fk(b[a.name], !0);
        case 17:
            return new Gk(!1);
        case 18:
            return new Gk(!0);
        case 7:
            return new Ck(c[a.ns], b[a.name], !1);
        case 13:
            return new Ck(c[a.ns], b[a.name], !0);
        case 29:
            b = new Jk(e[a.name]);
            for (c = 0; c < a.params.length; c++) b.Fr(e[a.params[c]]);
            return b.Gr();
        default:
            return null
        }
    };
    var Lk = function (a) {
        Object.defineProperty(this, "__swiffy_vm", {
            value: a
        });
        for (var b in Lk.prototype) Object.defineProperty(this, b, {
            value: na(Lk.prototype[b], this)
        })
    }, Mk = function (a, b) {
            Object.defineProperty(Lk.prototype, a, {
                value: b
            })
        };
    var Nk = function (a) {
        this.traits = a ? Object.create(a.traits) : {};
        this.jk = a ? a.jk.slice() : []
    };
    Nk.prototype.Sg = function (a, b) {
        this.traits[a] = b.Pk(this.traits[a])
    };
    Nk.prototype.ew = function (a) {
        for (var b in a.traits) this.Sg(b, a.traits[b])
    };
    Nk.prototype.Tj = function (a) {
        this.jk.length && Object.defineProperty(a, "__swiffy_slots", {
            value: this.jk.slice()
        });
        for (var b in this.traits) a.hasOwnProperty(b) || this.traits[b].Jk(a, b);
        return a
    };
    var Ok = function (a, b) {
        this.Lw = a;
        this.Yu = b
    };
    g = Ok.prototype;
    g.Jk = function (a, b) {
        Object.defineProperty(a, b, this.Lw)
    };
    g.get = function (a, b) {
        return a[b]
    };
    g.set = function (a, b, c) {
        a[b] = c
    };
    g.callee = function (a, b) {
        return a[b]
    };
    g.Pk = function () {
        return this
    };
    var Pk = function (a) {
        this.method = a
    };
    g = Pk.prototype;
    g.Jk = function (a, b) {
        Object.defineProperty(a, b, {
            value: na(this.method, a)
        })
    };
    g.get = function (a) {
        return na(this.method, a)
    };
    g.set = function () {};
    g.callee = function () {
        return this.method
    };
    g.Pk = function () {
        return this
    };
    var Qk = function (a, b) {
        this.qd = a;
        this.ve = b
    };
    g = Qk.prototype;
    g.Jk = function (a, b) {
        Object.defineProperty(a, b, {
            get: this.qd,
            set: this.ve
        })
    };
    g.get = function (a) {
        if (this.qd) return this.qd.call(a)
    };
    g.set = function (a, b, c) {
        this.ve && this.ve.call(a, c)
    };
    g.callee = function (a) {
        if (this.qd) return this.qd.call(a)
    };
    g.Pk = function (a) {
        if (a instanceof Qk) {
            var b = this.qd || a.qd;
            a = this.ve || a.ve;
            if (b != this.qd || a != this.ve) return new Qk(b, a)
        }
        return this
    };
    var Rk = function (a, b) {
        this.Fw = a;
        this.type = b;
        this.ms = []
    };
    g = Rk.prototype;
    g.Jk = function (a, b) {
        var c = a.__swiffy_slots;
        c || (a.__swiffy_slots = c = []);
        var d = c.length;
        c.push(this.Fw);
        (c = this.ms[d]) || (this.ms[d] = c = {
            get: Sk(d),
            set: Tk(d, this.type)
        });
        Object.defineProperty(a, b, c)
    };
    g.get = function (a, b) {
        return a[b]
    };
    g.set = function (a, b, c) {
        a[b] = c
    };
    g.callee = function (a, b) {
        return a[b]
    };
    g.Pk = function () {
        return this
    };
    var Sk = function (a) {
        return function () {
            return this.__swiffy_slots[a]
        }
    }, Tk = function (a, b) {
            return b ? function (c) {
                this.__swiffy_slots[a] = b.__swiffy_coerce(c)
            } : function (b) {
                this.__swiffy_slots[a] = b
            }
        }, Uk = function (a) {
            return function () {
                return this[a].apply(this, arguments)
            }
        }, Vk = function (a) {
            return function () {
                return this[a]
            }
        }, Wk = function (a) {
            return function (b) {
                this[a] = b
            }
        }, K = function (a, b, c) {
            Xk(a).Sg(b, new Pk(c));
            Yk(a, b, "value", c)
        }, L = function (a, b, c) {
            Xk(a).Sg(b, new Qk(c, void 0));
            Yk(a, b, "get", c)
        }, M = function (a, b, c) {
            Xk(a).Sg(b,
                new Qk(void 0, c));
            Yk(a, b, "set", c)
        }, Zk = function (a) {
            var b = Xk(a),
                c = Ek(a),
                c = (c.uri ? c.uri + ":" : "") + c.localName + ".",
                d;
            for (d in a.prototype) b.Sg(c + d, new Pk(Uk(d)))
        }, Yk = function (a, b, c, d) {
            a = a.prototype;
            var e;
            if (b in a)
                for (var f = a; !e && f; f = Object.getPrototypeOf(f)) e = Object.getOwnPropertyDescriptor(f, b);
            e = e || {};
            e.configurable = !0;
            e[c] = d;
            Object.defineProperty(a, b, e)
        };
    var $k = function () {
        return "[class " + this.__swiffy_name.localName + "]"
    }, bl = function () {
            return al
        }, cl = 1,
        dl = function (a, b, c, d, e, f, h, k, n) {
            var q = cl++;
            if (!k) k = new Ck("", "unnamed#" + q, !1);
            else if (!(k instanceof Ck)) {
                var s = k.lastIndexOf(".");
                k = new Ck(0 < s ? k.substring(0, s) : "", 0 < s ? k.substring(s + 1) : k, !1)
            }
            n || Mk(k.Qb(), a);
            Object.defineProperty(a.prototype, "__swiffy_classdef", {
                value: a
            });
            Object.defineProperty(a.prototype, "constructor", {
                value: a,
                writable: !0
            });
            Object.defineProperty(a, "__swiffy_classdef", {
                get: bl
            });
            Object.defineProperty(a,
                "__swiffy_coerce", {
                    value: b
                });
            Object.defineProperty(a, "__swiffy_istype", {
                value: c
            });
            Object.defineProperty(a, "__swiffy_constructor", {
                value: d
            });
            Object.defineProperty(a, "__swiffy_new", {
                value: e
            });
            Object.defineProperty(a, "__swiffy_baseclass", {
                value: f
            });
            b = new Nk(f && f.__swiffy_traits);
            Object.defineProperty(a, "__swiffy_traits", {
                value: b
            });
            f = f ? f.__swiffy_if.slice() : [];
            if (h)
                for (c = 0; c < h.length; ++c)
                    for (d = h[c], b.ew(d.__swiffy_traits), d = d.__swiffy_if, e = 0; e < d.length; ++e) d[e] && (f[e] = d[e]);
            f[q] = a;
            Object.defineProperty(a,
                "__swiffy_if", {
                    value: f
                });
            Object.defineProperty(a, "__swiffy_name", {
                value: k
            });
            Object.defineProperty(a, "__swiffy_typeid", {
                value: q
            });
            Object.defineProperty(a, "toString", {
                value: $k
            });
            return a
        }, gl = function (a, b, c, d) {
            return dl(b, c || b, el, b, d || b, fl, null, a)
        }, hl = function (a, b, c) {
            return null != a ? Di(b, a.__swiffy_classdef) : c
        }, jl = function () {
            return function b(c) {
                return il.call(b, c)
            }
        }, il = function (a) {
            if (hl(a, this, !0)) return a;
            throw I(1034, Ek(a), this.__swiffy_name);
        }, kl = function (a) {
            return hl(a, this, !1)
        }, el = function (a) {
            return this(a) ===
                a
        }, ll = function (a) {
            return a.__swiffy_typeid ? a : a.__swiffy_classdef
        }, Ek = function (a) {
            return null != a ? ll(a).__swiffy_name : new Ck("", String(a), !1)
        }, ml = function (a) {
            a = Object.create(a.prototype);
            Xk(a.__swiffy_classdef).Tj(a);
            return a
        }, ol = function (a) {
            var b = ml(this);
            nl(b).apply(b, arguments);
            return b
        }, pl = function () {
            var a = this.__swiffy_singleton;
            l(a) || (a = ol.call(this), Object.defineProperty(this, "__swiffy_singleton", {
                value: a
            }));
            return a
        }, N = function (a, b, c, d, e) {
            return ql(a, b, {
                Hj: c,
                interfaces: d
            }, e)
        }, ql = function (a,
            b, c, d) {
            var e = c.ff || jl(),
                f = c.Hj || fl;
            e.prototype = Object.create(f.prototype);
            a.prototype = e.prototype;
            return dl(e, c.Kv || c.ff || il, kl, a, c.un || ol, f.prototype.__swiffy_classdef, c.interfaces, b, d)
        }, rl = function (a) {
            return function () {
                throw I(a, Ek(this).localName);
            }
        }, Di = function (a, b) {
            if (!b) return !1;
            if (!a) return !0;
            var c = a.prototype.__swiffy_classdef,
                d = b.prototype.__swiffy_classdef.__swiffy_if;
            return !(!d || !d[c.__swiffy_typeid])
        }, Ci = function (a, b) {
            a.prototype.hasOwnProperty("__swiffy_buildsym") || Object.defineProperty(a.prototype,
                "__swiffy_buildsym", {
                    value: b
                })
        }, qi = function (a, b) {
            Ci(a, function (a, d) {
                return b.Ic(a, null, d)
            })
        }, Xk = function (a) {
            return a.__swiffy_traits
        }, nl = function (a) {
            return a.__swiffy_classdef.__swiffy_constructor
        }, sl = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw I(1041);
            return b.__swiffy_istype(a) ? a : null
        }, tl = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw I(1041);
            return b.__swiffy_istype(a)
        }, ul = function (a, b) {
            if (!b || !b.__swiffy_typeid) throw I(1041);
            return b.__swiffy_coerce(a)
        }, vl = function (a) {
            if (this.__swiffy_new) return this.__swiffy_new.apply(this,
                arguments);
            var b = Object.create(this.prototype),
                c = this.apply(b, arguments);
            return c instanceof Object ? c : b
        }, fl = function (a) {
            return null != a ? a : {}
        }, wl = jl();
    Lk.prototype = Object.create(fl.prototype);
    wl.prototype = Lk.prototype;
    dl(fl, function (a) {
        return null != a ? a : null
    }, function (a) {
        return null != a
    }, function () {}, function () {
        return {}
    }, null, null, "Object");
    Object.defineProperty(fl.prototype, "toString", {
        value: function () {
            return "[object " + this.__swiffy_classdef.__swiffy_name.localName + "]"
        },
        writable: !0
    });
    Object.defineProperty(Object.prototype, "__swiffy_classdef", {
        value: fl
    });
    dl(wl, il, kl, rl(1115), ol, fl, null, "global", !0);
    var al = N(rl(1115), "Class");
    var zl = function (a, b, c, d) {
        a = xl(a);
        var e = b.Rb(a);
        if (l(e)) return yl(l(d) ? d : a, a[e], c, e);
        if ((d = a.__swiffy_proxy) && d.Kg) return d.Kg.call(a, b.Kd(), c);
        throw I(1069, b.eb(), Ek(a).Qb());
    }, Al = function (a, b) {
            a = xl(a);
            if (b.Rb(a)) return !0;
            var c = a.__swiffy_proxy;
            return c && c.uf ? c.uf.call(a, b.Kd()) : !1
        }, Bl = function (a, b) {
            a = xl(a);
            var c = b.Rb(a);
            if (l(c)) return a[c];
            if ((c = a.__swiffy_proxy) && c.Md) return c.Md.call(a, b.Kd())
        }, Cl = function (a, b, c) {
            a = xl(a);
            var d = b.Rb(a);
            l(d) ? a[d] = c : (d = a.__swiffy_proxy) && d.setProperty ? d.setProperty.call(a,
                b.Kd(), c) : a[b.Qb()] = c
        };
    var Dl = function (a) {
        this.$r = a;
        this.Ij = 0
    };
    g = Dl.prototype;
    g.hu = function () {
        return this.Ij < this.$r.length
    };
    g.je = function () {
        return this.$r.charCodeAt(this.Ij++)
    };
    g.Vr = function () {
        return this.je() << 24 >> 24
    };
    g.Yg = function () {
        var a = 0,
            b = 0;
        do var c = this.je(),
        b = b + ((c & 127) << a), a = a + 7;
        while (c & 128);
        return b
    };
    g.Sr = function () {
        var a = this.je(),
            a = a | this.je() << 8;
        return a |= this.Vr() << 16
    };
    var El = function (a) {
        return [a.Yg()]
    }, Fl = function (a) {
            return [a.Yg(), a.Yg()]
        }, Gl = function (a, b, c) {
            a = a.Sr() + a.Ij;
            c[a] = !0;
            return [a]
        }, Hl = function (a, b, c) {
            this.source = "";
            this.Yp = a;
            this.nq = b;
            this.yg = c;
            this.pk = {};
            this.Wp = [];
            this.Cg = this.Ja = 0
        };
    t(Hl, dj);
    g = Hl.prototype;
    g.Eg = function (a, b) {
        var c = this.Yp[a];
        return this.um(c, b) ? c.rj : -1
    };
    g.um = function (a, b) {
        return a && l(a.rj) ? (this.Wp.push({
            Pp: a,
            stack: l(b) ? b : this.Ja,
            Au: this.Cg
        }), !0) : !1
    };
    g.bw = function (a) {
        return String(a)
    };
    g.ef = function (a) {
        return "handler" + a
    };
    g.register = function (a) {
        return "r" + a
    };
    g.stack = function (a) {
        return "s" + (this.Ja - a - 1)
    };
    g.push = function () {
        return this.mk("s" + this.Ja++)
    };
    g.pop = function () {
        return "s" + --this.Ja
    };
    g.he = function (a) {
        for (var b = "[", c = this.Ja -= a; 0 < a; ++c, --a) b += "s" + c, 1 < a && (b += ",");
        return b + "]"
    };
    g.ie = function (a) {
        var b = this.yg.multinames[a];
        return this.yj(O.Lr) + "(" + this.bw(a) + b.compile(this) + ")"
    };
    g.Ra = function () {
        this.append(this.push() + "=");
        return this
    };
    g.la = function (a) {
        this.append(this.push() + "=" + a + ";");
        return this
    };
    g.scope = function (a) {
        return l(a) ? "scope" + a : this.Cg ? "scope" + (this.Cg - 1) : "scope"
    };
    g.Rx = function () {
        this.Cg--
    };
    g.lv = function () {
        this.append(this.mk("scope" + this.Cg++) + "=");
        return this
    };
    g.gu = function (a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b],
                d = this.Eg(c.target, 1);
            this.append("var " + this.ef(b) + "=");
            this.X(O.Vq, c.excType, c.varName, d)
        }
    };
    g.fu = function (a) {
        var b = a.params || [],
            c = a.optionals || [],
            d = b.length - c.length;
        this.append("function(");
        for (var e = 0; e < b.length;) 0 < e && this.append(","), this.append(this.register(++e));
        this.append("){");
        for (e = 0; e < b.length; ++e) {
            var f = b[e];
            if (e >= d) {
                var h = c[e - d];
                this.append(this.register(e + 1) + "=");
                this.X(O.Oq, "arguments", e, f, this.bv(h.kind), h.value)
            } else f && (this.append(this.register(e + 1) + "="), this.X(O.we, this.register(e + 1), f))
        }
        this.append("var " + this.register(0) + "=scope").Zh(O.Pq, "this");
        for (null != a.arguments &&
            this.append("," + this.register(++e) + "=Array.prototype.slice.call(arguments," + a.arguments + ")"); ++e < a.locals;) this.append("," + this.register(e));
        this.append(";")
    };
    g.mk = function (a) {
        this.pk[a] = !0;
        return a
    };
    g.Pu = function (a) {
        this.pk[a] = !1
    };
    g.Nu = function () {
        var a = !1,
            b;
        for (b in this.pk) this.pk[b] && (this.append((a ? ", " : "var ") + b), a = !0);
        a && this.append(";")
    };
    g.Qu = function (a) {
        this.append("katch(");
        for (var b = 0; b < a.length; ++b) 0 < b && this.append(","), this.append(this.ef(a[b]));
        this.append(");")
    };
    g.Ou = function (a) {
        this.Ja = a.stack;
        this.Cg = a.Au;
        var b = 0;
        for (a = a.Pp; a;) {
            b++;
            a.Bj && this.Qu(a.Bj);
            var c = a.yj;
            c.La && (b = 0);
            c.apply(this, a.args);
            a = a.next;
            if (this.um(a)) break
        }
        return this.Rp()
    };
    g.eu = function (a) {
        var b = [],
            c = this.Rp();
        this.um(this.Yp[0]);
        for (var d, e = 0; d = this.Wp.pop(); e++) {
            var f = d.Pp.rj;
            b[f] || (b[f] = this.Ou(d))
        }
        this.append(c);
        c = 1 < e;
        if (a = !! a.length) this.append("return ").Zl(O.Nm), this.append("(function(katch,j,s0){"), this.Pu("s0");
        this.Nu();
        c && (this.append(a ? "for(;;){" : "for(var j=0;;){"), this.X(O.yq), this.append("switch(j){"));
        for (d = 0; d < b.length; ++d) b[d] && (c && this.append("case " + d + ":"), this.append(b[d]));
        c && this.append("default:return;}}");
        a && this.append("});")
    };
    var Il = function (a, b) {
        this.Sl = a;
        this.strings = a.strings;
        this.ints = a.ints;
        this.uints = a.uints;
        this.doubles = [Number.NaN];
        if (a.doubles)
            for (var c = 0; c < a.doubles.length; ++c) this.doubles.push(Number(a.doubles[c]));
        this.Q = b;
        for (var d = [""], c = 0; c < a.namespaces.length; ++c) {
            var e = a.namespaces[c];
            d.push(e.name ? a.strings[e.name] : e.kind + "_" + c)
        }
        this.cv = d;
        this.namespaces = [];
        e = [
            [""]
        ];
        for (c = 0; c < a.namespacesets.length; ++c) {
            for (var f = a.namespacesets[c], h = [], k = 0; k < f.length; ++k) h.push(d[f[k]]);
            e.push(h)
        }
        this.multinames = [null];
        for (c = 0; c < a.multinames.length; ++c) this.multinames.push(Kk(a.multinames[c], this.strings, d, e, this.multinames));
        this.rm = [];
        this.classes = []
    };
    Il.prototype.Gj = "pool";
    Il.prototype.kf = function (a) {
        if (a in this.rm) a = this.rm[a];
        else {
            var b = this.rm,
                c;
            c = this.Sl.methods[a];
            if (c.code) {
                var d = c.exceptions || [],
                    e = c.code;
                if (Ec) e = aa.atob(e);
                else {
                    Fc();
                    for (var f = Dc, h = [], k = 0; k < e.length;) {
                        var n = f[e.charAt(k++)],
                            q = k < e.length ? f[e.charAt(k)] : 0;
                        ++k;
                        var s = k < e.length ? f[e.charAt(k)] : 0;
                        ++k;
                        var r = k < e.length ? f[e.charAt(k)] : 0;
                        ++k;
                        if (null == n || null == q || null == s || null == r) throw Error();
                        h.push(n << 2 | q >> 4);
                        64 != s && (h.push(q << 4 & 240 | s >> 2), 64 != r && h.push(s << 6 & 192 | r))
                    }
                    e = String.fromCharCode.apply(null, h)
                }
                f = [!0];
                h = [];
                for (s = 0; s < d.length; ++s) k = d[s], f[k.target] = !0, h[k.from] = !0, h[k.to + 1] = !0;
                for (var s = new Dl(e), k = [], u; s.hu();) n = s.Ij, q = s.je(), r = O[q], k[n] = q = {
                    yj: r,
                    args: r.Y && r.Y(s, n, f),
                    rj: void 0,
                    next: void 0,
                    Bj: void 0
                }, u && (u.next = q), u = 2 != r.La ? q : void 0;
                u = 0;
                r = !1;
                for (n = 0; n < e.length; ++n)
                    if (r = r || !! h[n], s = f[n], (q = k[n]) && (r || s) && (s && (q.rj = u++), r = !1, d.length))
                        for (q.Bj = [], s = 0; s < d.length; ++s) n >= d[s].from && n <= d[s].to && q.Bj.push(s);
                u = this.Gh(c.traits);
                e = new Hl(k, c.type, this);
                e.gu(d);
                e.append("return function(base,scope){return ");
                e.Zl(O.Mp).append("(");
                e.fu(c);
                e.eu(d);
                e.append("});};");
                c = Function(og.prototype.Gj, Il.prototype.Gj, "traits", e.source)(this.Q, this, u)
            } else c = null;
            a = b[a] = c
        }
        return a
    };
    var Jl = [void 0, !1, !0, null];
    g = Il.prototype;
    g.Zq = function (a, b, c) {
        switch (a) {
        case "methods":
            return this.kf(b, c);
        case "getters":
            return this.kf(b, void 0);
        case "setters":
            return this.kf(b, void 0);
        case "classes":
            return this.classes[b];
        case "specials":
            return Jl[b];
        case "doubles":
            return b ? this.doubles[b] : void 0;
        case "namespaces":
            return (a = this.namespaces[b]) || (this.namespaces[b] = a = new Kl(void 0, this.cv[b])), a;
        default:
            return b ? this.Sl[a][b] : void 0
        }
    };
    g.$e = function (a, b, c) {
        return this.multinames[a].complete(b, c)
    };
    g.Gh = function (a, b, c, d) {
        b = b || null;
        c = c || Ll;
        d = d || new Nk;
        for (var e = d.jk, f = 0; f < a.length; ++f) {
            var h = a[f],
                k = null;
            if (h.type && h.writable) var n = this.$e(h.type).Qb(),
            k = Lk.prototype[n];
            var n = h.name ? this.$e(h.name).Kd() : null,
                q = this.Zq(h.kind, h.value, void 0);
            t: {
                var s = n,
                    r = b,
                    u = c;
                if (h.slot) e[h.slot] = q, h = new Ok({
                    get: Sk(h.slot),
                    set: Tk(h.slot, k)
                }, !h.writable);
                else {
                    s = String(s.localName);
                    switch (h.kind) {
                    case "methods":
                        h = new Pk((q ? q(r, u) : void 0) || Uk(s));
                        break t;
                    case "setters":
                        h = new Qk(void 0, (q ? q(r, u) : void 0) || Wk(s));
                        break t;
                    case "getters":
                        h = new Qk((q ? q(r, u) : void 0) || Vk(s), void 0);
                        break t
                    }
                    h = k ? new Rk(q, k) : new Ok({
                        value: q,
                        writable: !0
                    }, !h.writable)
                }
            }
            n && d.Sg(n.Qb(), h)
        }
        return d
    };
    g.xq = function (a) {
        var b = this.Q.tc;
        a = this.$e(a).Rb(b);
        return b[a]
    };
    g.ks = function (a, b) {
        if (!b) return a;
        var c = this.xq(b);
        return c || null !== a ? ul(a, c) : null
    };
    var og = function (a) {
        this.a = a;
        this.tc = new Lk(this);
        this.startTime = Date.now();
        this.Kc = Zf;
        this.kj = "";
        this.Qd = new Ml;
        this.Zd = [];
        this.sj = {};
        this.pl()
    };
    og.prototype.Gj = "vm";
    var xl = function (a) {
        if (null != a) return Object(a);
        throw I(1009);
    };
    g = og.prototype;
    g.trace = function (a) {
        Yf(a)
    };
    g.Vx = function (a, b, c) {
        var d = jl();
        d.prototype = Object.create(this.tc);
        dl(d, il, kl, b.kf(a.init, void 0)(null, Ll), pl, fl, null, "global", !0);
        var e = Xk(d);
        b.Gh(a.traits, null, Ll, e, c);
        var f = this;
        a = function (a) {
            Object.defineProperty(f.tc, a, {
                get: function () {
                    return vl.call(d)[a]
                },
                set: function (b) {
                    vl.call(d)[a] = b
                },
                configurable: !0
            })
        };
        for (var h in e.traits) h in this.tc || a(h)
    };
    g.vw = function (a) {
        var b = new Il(a.definition, this);
        a = a.definition.scripts;
        for (var c = 0; c < a.length; ++c) this.Vx(a[c], b, void 0)
    };
    g.wv = function (a, b, c, d) {
        var e = a.Sl.classes[c],
            f = jl(),
            h = b.lq(f),
            k = a.$e(e.name).Kd(),
            n = [];
        if (e.interfaces)
            for (var q = 0; q < e.interfaces.length; ++q) {
                var s = a.$e(e.interfaces[q]).Rb(this.tc);
                s && n.push(this.tc[s])
            }
        q = (q = a.kf(e.init, void 0)) ? q(d, h) : rl(1001);
        ql(q, k, {
            ff: f,
            Hj: d,
            interfaces: n
        });
        delete this.tc[k.Qb()];
        a.Gh(e.traits, d, h, Xk(f), void 0);
        a.Gh(e.ctraits, null, h, void 0, void 0).Tj(f);
        a.classes[c] = f;
        a.kf(e.cinit, void 0)(null, b).call(f);
        return f
    };
    g.Rr = function (a, b) {
        if (b == fl) return null != a;
        if (!p(b)) throw I(1040);
        return Object(a) instanceof b
    };
    var P = function (a, b, c, d, e) {
        var f = d;
        Object.defineProperty(a, b, {
            get: function () {
                return f
            },
            set: function (a) {
                f = e && null == a ? null : ul(a, Lk.prototype[c])
            }
        })
    }, Q = function (a, b, c) {
            Object.defineProperty(a, b, {
                value: c
            })
        }, R = function (a, b) {
            Ek(a).Qb();
            if (!l(b))
                for (var c in a)
                    if (a[c] == R.caller) break
        }, S = function (a, b, c, d) {
            return !l(a) && l(c) ? c : d && null == a ? null : ul(a, Lk.prototype[b])
        }, yl = function (a, b, c, d) {
            if (p(b)) return b.apply(a, c);
            throw I(1006, d || "value");
        };
    g = og.prototype;
    g.jh = function () {
        return this.Qd.__swiffy_d
    };
    g.Gg = function () {};
    g.zg = function (a) {
        if (a) {
            a = a.Zm();
            for (var b = 0; b < a.length; b++) a[b].zg()
        }
        this.Ba()
    };
    g.Hg = function () {};
    g.sq = function () {
        return !0
    };
    g.ak = function () {};
    g.Kq = function () {};
    g.$j = function () {};
    g.Iq = function () {};
    g.ig = function (a) {
        this.Zd.push(a)
    };
    g.Ba = function () {
        for (; 0 < this.Zd.length;) this.Zd.shift().call(this)
    };
    g.Mq = function (a, b) {
        var c = this.Kc;
        this.Kc = $f;
        try {
            a()
        } catch (d) {
            b(d), c.call(this, d)
        } finally {
            this.Kc = c
        }
    };
    g.tl = function () {};
    g.Go = function (a, b, c) {
        a[b] = c
    };
    g.Ho = function (a, b) {
        a[b] = null
    };
    g.zl = function () {};
    g.vl = function () {};
    g.rq = function () {};
    g.fireEvent = function (a, b, c, d) {
        if (a instanceof T && (b = Nl[c.type])) {
            c = b(a, c);
            if (d) return a.dispatchEvent(c);
            this.ig(na(a.dispatchEvent, a, c))
        }
        return !1
    };
    g.Wv = function (a, b) {
        var c = this.sj[a];
        c || (this.sj[a] = c = []);
        c.push(b)
    };
    g.Jq = function (a, b) {
        var c = this.sj[a];
        c && Ga(c, b)
    };
    g.Wo = function (a) {
        a = a.r;
        if (a instanceof T) {
            var b = a.__swiffy_listeners;
            if (b)
                for (var c in b) b[c].length && Ol(c, a) && this.Jq(c, a)
        }
    };
    g.Gs = function (a) {
        var b = this.sj[a];
        if (b)
            for (var c = 0; c < b.length; ++c) this.ig(oa(Pl, a, b[c]))
    };
    g.Dp = function () {
        this.Gs("enterFrame")
    };
    g.Ep = function () {
        this.Gs("exitFrame")
    };
    g.np = function (a, b, c) {
        a.Ah();
        b = a.r;
        nl(b).apply(b, c);
        a.pg(Qe, !0)
    };
    g.wa = function (a, b) {
        var c = a.definition.wk,
            c = ml(Di(b, c) ? c : b),
            d;
        for (d in c) p(c[d]) && (c[d] = na(c[d], c));
        return c
    };
    g.pl = function () {
        var a = this;
        Pe.prototype.wa = function () {
            return a.wa(this, Ql)
        };
        A.prototype.wa = function () {
            return a.wa(this, this.definition.wk && Di(Rl, this.definition.wk) ? Sl : Tl)
        };
        Kf.prototype.wa = function () {
            return a.wa(this, Ul)
        };
        mf.prototype.wa = function () {
            return a.wa(this, Vl)
        };
        $e.prototype.wa = function () {
            return a.wa(this, Wl)
        };
        Ze.prototype.wa = function () {
            return a.wa(this, Xl)
        };
        Ye.prototype.wa = function () {
            return a.wa(this, U)
        };
        xf.prototype.wa = function () {
            return a.wa(this, Yl)
        }
    };
    g.Nr = function (a, b) {
        if (null == a) throw I(1007);
        var c = a.prototype.__swiffy_buildsym;
        if (c) {
            var d = ml(a),
                c = c(this.a, d);
            c instanceof Pe && c.Kb(this.a.rh());
            c && c.da(!1, b);
            return d
        }
        return vl.apply(a, b)
    };
    g.ur = function (a, b) {
        Object.defineProperty(this.Qd.parameters, a, {
            value: b,
            configurable: !0,
            enumerable: !0
        })
    };
    g.cj = function (a) {
        return a instanceof A && a.vm || a instanceof Kf
    };
    g.tq = function (a) {
        return a.isEnabled() && (a instanceof $e || a instanceof A && a.Xi) && a.r.useHandCursor
    };
    g.bq = function (a, b) {
        var c;
        c = a ? a.Zm() : [];
        var d;
        d = b ? b.Zm() : [];
        var e = c.length - 1,
            f = d.length - 1;
        if (0 < e && 0 < f)
            for (; c[e] == d[f];) e--, f--;
        for (var h = 0; h < c.length; h++) c[h].gw(b);
        for (h = 0; h <= e; h++) c[h].Or(b);
        for (h = 0; h <= f; h++) d[h].Pr(a);
        for (h = 0; h < d.length; h++) d[h].hw(b)
    };
    g.wg = function (a) {
        var b = this.a.lc;
        b && !b.Sd() && b.fireEvent(a)
    };
    g.zo = function (a, b) {
        b.Kb(a.rh())
    };
    g.bs = function (a, b) {
        a = String(a);
        b = String(b);
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.as = function (a, b) {
        a = String(a).toLowerCase();
        b = String(b).toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0
    };
    g.cs = function (a, b) {
        a = null !== a ? Number(a) : null;
        b = null !== b ? Number(b) : null;
        if (a !== a) throw I(1034, a, "Number");
        if (b !== b) throw I(1034, b, "Number");
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Zl = function (a, b) {
        for (var c; !c && a; a = Object.getPrototypeOf(a)) c = Object.getOwnPropertyDescriptor(a, b);
        return c
    }, $l = function (a, b, c, d) {
            b = xl(b);
            var e = c.Rb(b),
                f;
            e && (f = (f = Xk(a).traits[e]) ? f.callee(b, e) : a.prototype[e]);
            return yl(b, f, d, c)
        }, am = function (a, b, c, d) {
            this.target = d;
            this.typeName = 0 == b ? null : a.$e(b).Qb();
            this.traits = a.Gh([{
                slot: 1,
                kind: "specials",
                value: 0,
                type: b,
                name: c
            }])
        };
    am.prototype.Ex = function (a, b) {
        return !this.typeName || a.Rr(b, a.tc[this.typeName])
    };
    am.prototype.Nx = function () {
        return this.traits.Tj({})
    };
    og.prototype.Dx = function (a, b) {
        if (a instanceof Wf && b)
            for (var c = a.value, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.Ex(this, c)) return e.target
            }
        throw a;
    };
    var bm = function (a, b, c) {
        this.$ = a;
        this.ei = b;
        this.Zu = c;
        this.qk = a ? a.qk : b
    }, Ll = new bm(null, {}, !1);
    g = bm.prototype;
    g.lq = function (a) {
        return new bm(this === Ll ? null : this, a, !1)
    };
    g.Ux = function (a) {
        return new bm(this === Ll ? null : this, a, !0)
    };
    g.Qq = function (a) {
        return this.Zu ? Al(this.ei, a) : l(a.Rb(this.ei))
    };
    g.find = function (a) {
        for (var b = this; b.$ && !b.Qq(a);) b = b.$;
        return b.ei
    };
    g.As = function (a) {
        for (var b = this; b; b = b.$)
            if (b.Qq(a)) return b.ei;
        throw I(1065, a.Qb());
    };
    g.tx = function (a) {
        var b = this.As(a);
        return Bl(b, a)
    };
    g.ex = function (a, b, c) {
        return zl(a, b, c, this.qk)
    };
    g.Ax = function () {
        return this.ei
    };
    g.sx = function () {
        return this.qk
    };
    g.gx = function (a) {
        return null != a && a !== aa ? a : this.qk
    };
    var O = {
        36: function (a) {
            this.la(a)
        }
    };
    O[36].Y = function (a) {
        return [a.Vr()]
    };
    O[47] = function (a) {
        this.la(this.yg.doubles[a])
    };
    O[47].Y = El;
    O[39] = function () {
        this.la("!1")
    };
    O[45] = function (a) {
        this.la(this.yg.ints[a])
    };
    O[45].Y = El;
    O[40] = function () {
        this.la("Number.NaN")
    };
    O[32] = function () {
        this.la(null)
    };
    O[37] = function (a) {
        this.la(a)
    };
    O[37].Y = El;
    O[44] = function (a) {
        this.la(ya(this.yg.strings[a]))
    };
    O[44].Y = El;
    O[38] = function () {
        this.la("!0")
    };
    O[46] = function (a) {
        this.la(this.yg.uints[a])
    };
    O[46].Y = El;
    O[33] = function () {
        this.la(void 0)
    };
    O[42] = function () {
        this.la(this.stack(0))
    };
    O[43] = function () {
        var a = this.stack(0),
            b = this.stack(1);
        this.mk("t");
        this.append("t=" + a + ",");
        this.append(a + "=" + b + ",");
        this.append(b + "=t,");
        this.append("t=undefined;")
    };
    O[41] = function () {
        this.pop()
    };
    O[71] = function () {
        this.append("return;")
    };
    O[71].La = 2;
    O[72] = function () {
        var a = this.pop();
        this.append("return ");
        this.nq ? this.X(O.we, a, this.nq) : this.append(a + ";")
    };
    O[72].La = 2;
    O[85] = function (a) {
        for (var b = [], c = []; 0 < a--;) c[a] = this.pop(), b[a] = this.pop();
        this.mk("t");
        this.append("t={},");
        for (a = 0; a < b.length; ++a) this.append("t[" + b[a] + "]=" + c[a] + ",");
        this.Ra().append("t,t=undefined;")
    };
    O[85].Y = El;
    O[86] = function (a) {
        this.la(this.he(a))
    };
    O[86].Y = El;
    O.sb = function (a) {
        return function () {
            var b = this.pop(),
                c = this.pop();
            this.la(c + a + b)
        }
    };
    O.Bi = function (a) {
        return function () {
            this.la(a + this.pop())
        }
    };
    O[160] = O.sb("+");
    O[161] = O.sb("-");
    O[162] = O.sb("*");
    O[163] = O.sb("/");
    O[164] = O.sb("%");
    O[144] = O.Bi("-");
    O[150] = O.Bi("!");
    O[145] = function () {
        this.append("++" + this.stack(0) + ";")
    };
    O[147] = function () {
        this.append("--" + this.stack(0) + ";")
    };
    O.Kn = function (a) {
        return function () {
            var b = this.pop(),
                c = this.pop();
            this.la("((" + c + "|0)" + a + "(" + b + "|0)|0")
        }
    };
    O[197] = O.Kn("+");
    O[198] = O.Kn("-");
    O[199] = O.Kn("*");
    O[196] = function () {
        this.la("(-(" + this.pop() + "|0))|0")
    };
    O[192] = function () {
        this.la("((" + this.pop() + "|0)+1)|0")
    };
    O[193] = function () {
        this.la("((" + this.pop() + "|0)-1)|0")
    };
    O[151] = O.Bi("~");
    O[169] = O.sb("|");
    O[170] = O.sb("^");
    O[168] = O.sb("&");
    O[165] = O.sb("<<");
    O[166] = O.sb(">>");
    O[167] = O.sb(">>>");
    O[118] = O.Bi("!!");
    O[117] = O.Bi("+");
    O[115] = function () {
        this.la(this.pop() + "|0")
    };
    O[116] = function () {
        this.la(this.pop() + ">>>0")
    };
    O[112] = function () {
        this.la("String(" + this.pop() + ")")
    };
    O.Lk = function (a) {
        return function () {
            this.la(this.register(a))
        }
    };
    O[208] = O.Lk(0);
    O[209] = O.Lk(1);
    O[210] = O.Lk(2);
    O[211] = O.Lk(3);
    O.Mk = function (a) {
        return function () {
            this.append(this.register(a) + "=" + this.pop() + ";")
        }
    };
    O[212] = O.Mk(0);
    O[213] = O.Mk(1);
    O[214] = O.Mk(2);
    O[215] = O.Mk(3);
    O.Bf = function (a) {
        var b = function (b) {
            a.call(this, this.register(b))
        };
        b.Y = El;
        return b
    };
    O[98] = O.Bf(function (a) {
        this.la(a)
    });
    O[99] = O.Bf(function (a) {
        this.append(a + "=" + this.pop() + ";")
    });
    O[146] = O.Bf(function (a) {
        this.append("++" + a + ";")
    });
    O[148] = O.Bf(function (a) {
        this.append("--" + a + ";")
    });
    O[194] = O.Bf(function (a) {
        this.append(a + "=((" + a + "|0)+1)|0;")
    });
    O[195] = O.Bf(function (a) {
        this.append(a + "=((" + a + "|0)-1)|0;")
    });
    O[8] = O.Bf(function (a) {
        this.append(a + "=undefined;")
    });
    O[130] = function () {};
    O[133] = function () {
        var a = this.pop();
        this.la(a + "==null?null:String(" + a + ")")
    };
    O[149] = function () {
        this.la("typeof " + this.pop())
    };
    O[171] = O.sb("==");
    O[172] = O.sb("===");
    O[173] = O.sb("<");
    O[174] = O.sb("<=");
    O[175] = O.sb(">");
    O[176] = O.sb(">=");
    O[16] = function (a) {
        a = this.Eg(a);
        0 > a ? this.append("return;") : this.append("j=" + a + ";break;")
    };
    O[16].La = 2;
    O[16].Y = Gl;
    O.Sb = function (a) {
        var b = function (b) {
            this.append("if(").append(a.call(this)).append(")");
            b = this.Eg(b);
            0 > b ? this.append("return;") : this.append("{j=" + b + ";break;}")
        };
        b.La = 1;
        b.Y = Gl;
        return b
    };
    O[14] = O.Sb(function () {
        var a = this.pop(),
            b = this.pop();
        return "!(" + a + "<" + b + ")"
    });
    O[12] = O.Sb(function () {
        var a = this.pop();
        return "!(" + this.pop() + "<" + a + ")"
    });
    O[15] = O.Sb(function () {
        var a = this.pop(),
            b = this.pop();
        return "!(" + a + "<=" + b + ")"
    });
    O[19] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "==" + a
    });
    O[20] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "!=" + a
    });
    O[25] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "===" + a
    });
    O[26] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "!==" + a
    });
    O[13] = O.Sb(function () {
        var a = this.pop();
        return "!(" + this.pop() + "<=" + a + ")"
    });
    O[18] = O.Sb(function () {
        return "!" + this.pop()
    });
    O[23] = O.Sb(function () {
        var a = this.pop(),
            b = this.pop();
        return a + "<" + b
    });
    O[21] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "<" + a
    });
    O[24] = O.Sb(function () {
        var a = this.pop(),
            b = this.pop();
        return a + "<=" + b
    });
    O[22] = O.Sb(function () {
        var a = this.pop();
        return this.pop() + "<=" + a
    });
    O[17] = O.Sb(function () {
        return this.pop()
    });
    O[27] = function (a, b) {
        var c = this.pop(),
            d = this.Eg(a);
        if (2 == arguments.length) {
            var e = this.Eg(b);
            this.append("j=" + c + "?" + d + ":" + e)
        } else {
            this.append("j=[");
            for (e = 1; e < arguments.length; ++e) 1 < e && this.append(","), this.append(String(this.Eg(arguments[e])));
            this.append("][" + c + "],j=j===undefined?" + d + ":j")
        }
        this.append(";break;")
    };
    O[27].Y = function (a, b, c) {
        var d = [],
            e = function () {
                var e = a.Sr() + b;
                c[e] = !0;
                d.push(e)
            };
        e();
        for (var f = a.Yg() + 1; 0 < f--;) e();
        return d
    };
    O[27].La = 2;
    O[29] = function () {
        this.Rx()
    };
    O.us = function (a) {
        var b = function () {
            var a = this.pop(),
                d = this.scope();
            this.lv().append(d).X(b, a)
        };
        b.implementation = a;
        b.nd = bm;
        return b
    };
    O[48] = O.us(bm.prototype.lq);
    O[28] = O.us(bm.prototype.Ux);
    O.Lg = function (a) {
        this.Ra().append(this.scope(a)).X(O.Lg)
    };
    O.Lg.implementation = bm.prototype.Ax;
    O.Lg.nd = bm;
    O.Lg.Y = function (a) {
        return [a.je()]
    };
    O[101] = O.Lg;
    O.mi = function () {
        this.Ra().append(this.scope()).X(O.mi)
    };
    O.mi.implementation = bm.prototype.sx;
    O.mi.nd = bm;
    O[100] = O.mi;
    O.qf = function (a) {
        a = this.he(a);
        var b = this.pop(),
            c = this.pop();
        this.Ra();
        this.X(O.qf, b, c, a)
    };
    O.qf.implementation = function (a, b, c) {
        return yl(a, b, c)
    };
    O.qf.Y = El;
    O.qf.La = 1;
    O[65] = O.qf;
    O.nf = function (a, b) {
        var c = this.he(b),
            d = this.ie(a),
            e = this.pop();
        this.Ra().append(this.scope()).X(O.nf, e, d, c)
    };
    O.nf.implementation = bm.prototype.ex;
    O.nf.La = 1;
    O.nf.Y = Fl;
    O.nf.nd = bm;
    O[76] = O.nf;
    O.Gn = function (a, b) {
        var c = function (a, e) {
            var f = this.he(e),
                h = this.ie(a),
                k = this.pop();
            b && this.Ra();
            this.X(c, k, h, f)
        };
        c.La = 1;
        c.Y = Fl;
        c.implementation = a;
        return c
    };
    O[70] = O.Gn(zl, !0);
    O[79] = O.Gn(zl, !1);
    O.In = function (a) {
        var b = function (a) {
            a = this.ie(a);
            this.Ra().append(this.scope());
            this.X(b, a)
        };
        b.Y = El;
        b.implementation = a;
        b.nd = bm;
        return b
    };
    O[94] = O.In(bm.prototype.find);
    O[93] = O.In(bm.prototype.As);
    O[96] = O.In(bm.prototype.tx);
    O.vs = function (a) {
        var b = function (a) {
            var d = this.pop();
            a = this.ie(a);
            var e = this.pop();
            this.X(b, e, a, d)
        };
        b.Y = El;
        b.implementation = a;
        return b
    };
    O[97] = O.vs(Cl);
    O[104] = O.vs(Cl);
    O.Jn = function (a) {
        var b = function (a) {
            a = this.ie(a);
            var d = this.pop();
            this.Ra().X(b, d, a)
        };
        b.Y = El;
        b.implementation = a;
        return b
    };
    O[102] = O.Jn(Bl);
    O[89] = O.Jn(function (a, b) {
        a = xl(a);
        var c = a.__swiffy_proxy;
        if (c && c.Hk) return c.Hk.call(a, b.Kd());
        throw I(1016);
    });
    O[106] = O.Jn(function (a, b) {
        a = xl(a);
        var c = a.__swiffy_proxy;
        if (c && c.uc) return c.uc.call(a, b.Kd());
        c = b.Rb(a);
        return l(c) ? delete a[c] : !1
    });
    O.Ug = function () {
        this.X(O.Ug, this.pop())
    };
    O.Ug.implementation = function (a) {
        throw new Wf(a);
    };
    O.Ug.La = 2;
    O[3] = O.Ug;
    O.Mg = function (a) {
        this.Ra().append("handler" + a);
        this.X(O.Mg)
    };
    O.Mg.implementation = function () {
        return this.Nx()
    };
    O.Mg.nd = am;
    O.Mg.Y = El;
    O[90] = O.Mg;
    O.sk = function () {
        this.X(O.sk, this.stack(0))
    };
    O.sk.implementation = function (a) {
        if (null === a) throw I(1009);
        if (void 0 === a) throw I(1010);
        if (!hl(a, cm, !1) && !hl(a, dm, !1)) throw I(1123, Ek(a).Qb());
    };
    O[120] = O.sk;
    O.Rg = function (a) {
        this.X(O.Rg, ya(this.yg.strings[a]))
    };
    O.Rg.implementation = function (a) {
        this.kj = String(a)
    };
    O.Rg.Y = El;
    O[6] = O.Rg;
    O[7] = function () {
        this.X(O.Rg, this.pop())
    };
    O.ws = function (a) {
        var b = function () {
            var a = this.stack(0);
            this.append(a + "=").X(b, a)
        };
        b.implementation = a;
        return b
    };
    O[114] = O.ws(Xi);
    O[113] = O.ws(Wi);
    O.$g = function (a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.Zh(O.$g, b);
        this.append("[" + a + "];")
    };
    O.$g.implementation = function (a) {
        xl(a);
        return a.__swiffy_slots
    };
    O.$g.Y = El;
    O[108] = O.$g;
    O[109] = function (a) {
        var b = this.pop(),
            c = this.pop();
        this.Zh(O.$g, c);
        this.append("[" + a + "]=" + b + ";")
    };
    O[109].Y = El;
    O.fk = function () {
        var a = this.pop(),
            b = this.pop();
        this.Ra().X(O.fk, b, a)
    };
    O.fk.implementation = function (a, b) {
        return this.Rr(a, b)
    };
    O[177] = O.fk;
    O.ek = function () {
        var a = this.pop(),
            b = this.pop();
        this.Ra().X(O.ek, b, a)
    };
    O.ek.implementation = function (a, b) {
        b = xl(b);
        return Al(b, new Ck("", a, !1))
    };
    O[180] = O.ek;
    O.Ng = function (a) {
        var b = this.pop(),
            c = this.scope();
        this.Ra().X(O.Ng, c, a, b)
    };
    O.Ng.implementation = function (a, b, c) {
        return this.Q.wv(this, a, b, c)
    };
    O.Ng.Y = El;
    O.Ng.nd = Il;
    O[88] = O.Ng;
    O.ni = function (a) {
        this.Ra().X(O.ni, "pool", this.scope(), a)
    };
    O.ni.implementation = function (a, b, c) {
        return a.kf(c, void 0)(null, b)
    };
    O.ni.Y = El;
    O[64] = O.ni;
    O.rf = function (a) {
        a = this.he(a);
        var b = this.pop();
        this.Ra().X(O.rf, b, a)
    };
    O.rf.implementation = function (a, b) {
        return this.Nr(a, b)
    };
    O.rf.Y = El;
    O.rf.La = 1;
    O[66] = O.rf;
    O[74] = O.Gn(function (a, b, c) {
        a = xl(a);
        b = b.Rb(a);
        return this.Nr(a[b], c)
    }, !0);
    O.ts = function (a) {
        var b = function (c, d) {
            var e = this.he(d),
                f = this.ie(c),
                h = this.pop();
            a && this.Ra();
            this.X(b, "base", h, f, e)
        };
        b.La = 1;
        b.Y = Fl;
        b.implementation = $l;
        return b
    };
    O[69] = O.ts(!0);
    O[78] = O.ts(!1);
    O.ri = function (a) {
        var b = this.pop();
        a = this.ie(a);
        var c = this.pop();
        this.X(O.ri, "base", c, a, b)
    };
    O.ri.Y = El;
    O.ri.implementation = function (a, b, c, d) {
        b = xl(b);
        var e = c.Rb(b);
        if (l(e)) {
            var f = Xk(a).traits[e];
            if (f) {
                f.set(b, e, d);
                return
            }
            if ((e = Zl(a.prototype, e)) && e.set) {
                e.set.call(b, d);
                return
            }
        }
        throw I(1056, c.eb(), Ek(a).localName);
    };
    O[5] = O.ri;
    O.ji = function (a) {
        a = this.ie(a);
        var b = this.pop();
        this.Ra().X(O.ji, "base", b, a)
    };
    O.ji.Y = El;
    O.ji.implementation = function (a, b, c) {
        b = xl(b);
        var d = c.Rb(b);
        if (l(d)) {
            var e = Xk(a).traits[d];
            if (e) return e.get(b, d);
            if ((d = Zl(a.prototype, d)) && d.get) return d.get.call(b)
        }
        throw I(1069, c.eb(), Ek(a).localName);
    };
    O[4] = O.ji;
    O.Qg = function (a) {
        a = this.he(a);
        var b = this.pop();
        this.X(O.Qg, "base", b, a)
    };
    O.Qg.implementation = function (a, b, c) {
        b = xl(b);
        a.__swiffy_constructor.apply(b, c)
    };
    O.Qg.Y = El;
    O.Qg.La = 1;
    O[73] = O.Qg;
    O.ii = function (a) {
        a = this.he(a);
        var b = this.pop();
        this.Ra();
        this.X(O.ii, b, a)
    };
    O.ii.implementation = function (a, b) {
        var c = a && a.__swiffy_type_apply;
        if (!c) throw I(1127);
        return c.call(a, this.tc, b)
    };
    O.ii.Y = El;
    O[83] = O.ii;
    O.gk = function () {
        this.Ra();
        this.X(O.gk, "traits")
    };
    O.gk.implementation = function (a) {
        return a.Tj({})
    };
    O[87] = O.gk;
    O.we = function (a) {
        var b = this.stack(0);
        this.append(b + "=");
        this.X(O.we, b, a)
    };
    O.we.implementation = function (a, b) {
        return this.ks(a, b)
    };
    O.we.Y = El;
    O.we.nd = Il;
    O[128] = O.we;
    O.xs = function (a) {
        var b = function (a) {
            var d = this.stack(0);
            this.append(d + "=");
            this.X(b, d, a)
        };
        b.Y = El;
        b.implementation = function (b, d) {
            return a(b, this.xq(d))
        };
        b.nd = Il;
        return b
    };
    O[134] = O.xs(sl);
    O[178] = O.xs(tl);
    O.ys = function (a) {
        var b = function () {
            var a = this.pop(),
                d = this.pop();
            this.Ra();
            this.X(b, d, a)
        };
        b.implementation = a;
        return b
    };
    O[135] = O.ys(sl);
    O[179] = O.ys(tl);
    O.Hn = function (a) {
        var b = function () {
            var a = this.pop(),
                d = this.pop();
            this.Ra().X(b, d, a)
        };
        b.implementation = a;
        return b
    };
    O.Om = O.Hn(function (a, b) {
        a = xl(a);
        var c = a.__swiffy_proxy;
        if (c && c.Cf) b = c.Cf.call(a, b);
        else {
            c = Object.keys(a);
            do
                if (++b > c.length) return 0; while (ud(c[b - 1]))
        }
        return b
    });
    O[31] = O.Om;
    O[30] = O.Hn(function (a, b) {
        a = xl(a);
        var c = a.__swiffy_proxy;
        return c && c.ah ? c.ah.call(a, b) : Object.keys(a)[b - 1]
    });
    O[35] = O.Hn(function (a, b) {
        a = xl(a);
        var c = a.__swiffy_proxy;
        return c && c.bh ? c.bh.call(a, b) : a[Object.keys(a)[b - 1]]
    });
    O.hi = function (a, b) {
        this.append("while(" + this.register(a) + "&&!(" + this.register(b) + "=");
        this.Zh(O.Om, this.register(a), this.register(b)).append("))");
        this.append(this.register(a) + "=").X(O.hi, this.register(a));
        this.la("!!" + this.register(b))
    };
    O.hi.implementation = function (a) {
        var b = a.__swiffy_proxy;
        return b && b.Cf ? null : Object.getPrototypeOf(a)
    };
    O.hi.Y = Fl;
    O[50] = O.hi;
    O.Ai = function (a) {
        var b = function () {};
        b.Y = a;
        return b
    };
    O[2] = O.Ai();
    O[9] = O.Ai();
    O[239] = O.Ai(function (a) {
        return [a.je(), a.Yg(), a.je(), a.Yg()]
    });
    O[241] = O.Ai(El);
    O[240] = O.Ai(El);
    O.Ae = function (a, b, c) {
        var d = function () {};
        d.implementation = a;
        d.nd = c;
        return O[b] = d
    };
    O.Lr = O.Ae(Il.prototype.$e, 256, Il);
    O.Vq = O.Ae(function (a, b, c) {
        return new am(this, a, b, c)
    }, 258, Il);
    O.Mp = O.Ae(function (a) {
        var b = this;
        return function () {
            var c = b.kj,
                d = b.Kc,
                e = cj;
            b.Kc = $f;
            cj = b;
            try {
                return a.apply(this, arguments)
            } catch (f) {
                d.call(b, f)
            } finally {
                ag.call(b), b.Kc = d, b.kj = c, b.Kc = d, cj = e
            }
        }
    }, 257);
    O.Nm = O.Ae(function (a) {
        for (var b, c = function () {
                b = arguments
            }, d, e = 0;;) try {
            return a(c, e, d)
        } catch (f) {
            e = this.Dx(f, b), d = f.value
        }
    }, 259);
    O.Oq = O.Ae(function (a, b, c, d, e) {
        return a.length > b ? this.ks(a[b], c) : this.Zq(d, e)
    }, 260, Il);
    O.Pq = O.Ae(bm.prototype.gx, 261, bm);
    O.yq = O.Ae(function () {}, 262);
    O.Ow = O.Ae(function () {}, 263);
    Pa({
        eB: 2,
        Ug: 3,
        ji: 4,
        ri: 5,
        Rg: 6,
        zz: 7,
        HA: 8,
        IA: 9,
        mA: 12,
        lA: 13,
        kA: 14,
        jA: 15,
        Tw: 16,
        pA: 17,
        dA: 18,
        cA: 19,
        iA: 20,
        hA: 21,
        gA: 22,
        fA: 23,
        eA: 24,
        nA: 25,
        oA: 26,
        NA: 27,
        wB: 28,
        hB: 29,
        bB: 30,
        Om: 31,
        pB: 32,
        vB: 33,
        cB: 35,
        kB: 36,
        rB: 37,
        tB: 38,
        mB: 39,
        oB: 40,
        Xw: 41,
        yz: 42,
        qC: 43,
        sB: 44,
        nB: 45,
        uB: 46,
        lB: 47,
        qB: 48,
        hi: 50,
        ni: 64,
        qf: 65,
        rf: 66,
        Py: 69,
        Ny: 70,
        NB: 71,
        MB: 72,
        Qg: 73,
        Zy: 74,
        nf: 76,
        Qy: 78,
        Oy: 79,
        ii: 83,
        ZA: 85,
        YA: 86,
        gk: 87,
        Ng: 88,
        Jz: 89,
        Mg: 90,
        Iz: 93,
        Hz: 94,
        Kz: 96,
        XB: 97,
        Lz: 98,
        RB: 99,
        mi: 100,
        Lg: 101,
        Qz: 102,
        vA: 104,
        rz: 106,
        $g: 108,
        YB: 109,
        cz: 112,
        Fz: 113,
        Ez: 114,
        bz: 115,
        dz: 116,
        az: 117,
        $y: 118,
        sk: 120,
        we: 128,
        Wy: 130,
        Xy: 133,
        By: 134,
        Cy: 135,
        WA: 144,
        Sw: 145,
        rA: 146,
        Pw: 147,
        jz: 148,
        wC: 149,
        Ww: 150,
        Ey: 151,
        Nw: 160,
        Yw: 161,
        Vw: 162,
        Qw: 163,
        Uw: 164,
        OA: 165,
        QB: 166,
        zC: 167,
        Dy: 168,
        Fy: 169,
        Gy: 170,
        Rw: 171,
        hC: 172,
        KA: 173,
        JA: 174,
        aA: 175,
        $z: 176,
        fk: 177,
        CA: 178,
        DA: 179,
        ek: 180,
        tA: 192,
        lz: 193,
        sA: 194,
        kz: 195,
        XA: 196,
        yy: 197,
        pC: 198,
        VA: 199,
        Mz: 208,
        Nz: 209,
        Oz: 210,
        Pz: 211,
        TB: 212,
        UB: 213,
        VB: 214,
        WB: 215,
        gz: 239,
        iz: 240,
        hz: 241,
        Lr: 256,
        Mp: 257,
        Vq: 258,
        Nm: 259,
        Oq: 260,
        Pq: 261,
        yq: 262,
        Ow: 263
    }, function (a, b) {
        var c = O[a];
        if (c.implementation) {
            var d = (c.nd ||
                og).prototype;
            c.cw = (d.Gj || "") + "." + b;
            d[b] = c.implementation
        }
    });
    var Kl = function (a, b) {
        var c, d;
        l(b) ? (c = Ti(a), d = b instanceof Bk ? b.uri : String(b)) : l(a) ? a instanceof Kl ? (c = a.prefix, d = a.uri) : (d = a instanceof Bk ? a.uri : String(a), c = void 0) : d = c = "";
        Q(this, "prefix", c);
        Q(this, "uri", d)
    }, em = function (a) {
            return a instanceof Kl ? a : new Kl(void 0, String(a))
        };
    ql(Kl, "Namespace", {
        ff: em
    });
    Kl.prototype.valueOf = function () {
        return this.uri
    };
    Kl.prototype.toString = function () {
        return this.uri
    };
    var Bk = function (a) {
        Object.defineProperty(this, "__swiffy_v", {
            value: a.normalize()
        })
    }, fm = function (a, b, c) {
            return new Bk(new Ck(a, b, c))
        };
    ql(Bk, "QName", {
        ff: function (a) {
            return a instanceof Bk ? a : fm("", a, !1)
        },
        un: function (a, b) {
            var c, d;
            if (l(b)) c = l(a) ? a instanceof Bk ? a.uri : null !== a ? String(a) : null : b instanceof Bk ? b.uri : "", d = b instanceof Bk ? b.localName : String(b);
            else if (c = "", l(a)) {
                if (a instanceof Bk) return a;
                d = String(a)
            } else d = "";
            return fm(c, d, !1)
        }
    });
    Object.defineProperty(Bk.prototype, "uri", {
        get: function () {
            return this.__swiffy_v.uri
        }
    });
    Object.defineProperty(Bk.prototype, "localName", {
        get: function () {
            return this.__swiffy_v.localName
        }
    });
    Bk.prototype.toString = function () {
        return this.__swiffy_v.eb()
    };
    Lk.prototype["flash.net.navigateToURL"] = function (a, b) {
        if (!a) throw I(2007, "request");
        if (null == a.url) throw I(2007, "url");
        var c = l(b) ? b : "_blank",
            d = 0;
        a.data && (d = a.method == gm.POST ? 2 : 1);
        var e = this.__swiffy_vm;
        e.a.Dh(new bg(e, a.data ? a.data.toString() : null, a.url, c, d))
    };
    Lk.prototype.trace = function (a) {
        var b = Array.prototype.map.call(arguments, String).join(" ");
        this.__swiffy_vm.trace(b)
    };
    Lk.prototype.parseInt = function (a, b) {
        !l(b) && rd(a) && (b = 10);
        return parseInt(a, b)
    };
    Lk.prototype.parseFloat = parseFloat;
    Lk.prototype.isNaN = isNaN;
    Lk.prototype.isFinite = isFinite;
    Lk.prototype["flash.utils.setTimeout"] = function (a, b) {
        var c = this,
            d = Array.prototype.slice.call(arguments, 2);
        return window.setTimeout(function () {
            a.apply(c, d)
        }, b)
    };
    Lk.prototype["flash.utils.clearTimeout"] = function (a) {
        window.clearTimeout(a)
    };
    Lk.prototype["flash.utils.setInterval"] = function (a, b) {
        var c = this,
            d = Array.prototype.slice.call(arguments, 2);
        return window.setInterval(function () {
            a.apply(c, d)
        }, b)
    };
    Lk.prototype["flash.utils.clearInterval"] = function (a) {
        window.clearInterval(a)
    };
    Lk.prototype["flash.utils.getTimer"] = function () {
        return Date.now() - this.__swiffy_vm.startTime
    };
    Lk.prototype["flash.utils.getDefinitionByName"] = function (a) {
        a = a.replace("::", ".");
        "." == a[0] && (a = a.substring(1));
        return this[a]
    };
    Lk.prototype["flash.utils.getQualifiedClassName"] = function (a) {
        switch (typeof a) {
        case "undefined":
            return "void";
        case "number":
            if ((a | 0) == a) return "int"
        }
        return Ek(a).eb()
    };
    Lk.prototype["flash.utils.getQualifiedSuperclassName"] = function (a) {
        t: {
            if (null != a && (a = ll(a).__swiffy_baseclass, null != a)) {
                a = a.__swiffy_name;
                break t
            }
            a = null
        }
        return a ? a.eb() : a
    };
    Lk.prototype["flash.utils.describeType"] = function (a) {
        var b;
        if (!l(a)) throw I(1010);
        hm || (hm = new im);
        b = hm;
        var c = new jm(null, b.Ta("type"));
        if (null === a) c.xc(b.Ta("@name"), "null"), c.xc(b.Ta("@isStatic"), "false");
        else {
            var d = !! a.__swiffy_typeid;
            a = d ? a : a.__swiffy_classdef;
            var e = b.Eq(c, a, d),
                f = a.__swiffy_name.eb();
            c.xc(b.Ta("@name"), f);
            c.xc(b.Ta("@isStatic"), String(d));
            e && c.xc(b.Ta("@base"), e.__swiffy_name.eb());
            e = c;
            d && (e = c.lf(b.Ta("factory")), e.xc(b.Ta("@type"), f), b.Eq(e, a, !1));
            b.Ru(e, a.__swiffy_traits)
        }
        b = c.te;
        return b
    };
    Lk.prototype.isXMLName = function (a) {
        return l(Ti(a))
    };
    var km = function (a, b) {
        Mk(a, function (c) {
            try {
                return null != c ? b(String(c)) : "null"
            } catch (d) {
                throw I(1052, a);
            }
        })
    };
    km("escape", escape);
    km("unescape", unescape);
    km("encodeURI", encodeURI);
    km("encodeURIComponent", encodeURIComponent);
    km("decodeURI", decodeURI);
    km("decodeURIComponent", decodeURIComponent);
    Mk("Math", Math);
    gl("Boolean", Boolean);
    gl("Number", Number);
    gl("int", function (a) {
        return a | 0
    });
    gl("uint", function (a) {
        return a >>> 0
    });
    gl("void", function () {});
    gl("String", String, function (a) {
        return null != a ? String(a) : null
    });
    gl("Date", function (a) {
        return a instanceof Date ? a : (new Date(Date.now())).toString()
    }, function (a) {
        if (a instanceof Date) return a;
        throw I(1034, Ek(a), "Date");
    }, Date.__swiffy_override);
    Lk.prototype.Date.prototype = Date.prototype;
    Lk.prototype.Date.UTC = Date.UTC;
    dl(Function, il, kl, Function, Function, fl, null, "Function");
    dl(Array, il, kl, Array, Array, fl, null, "Array");
    var lm = aa.RegExp;
    dl(lm, il, kl, lm, function (a, b) {
        if (a instanceof RegExp) {
            if (l(b)) throw I(1100);
            return RegExp(a)
        }
        var c = !1,
            d = !1;
        if (null != b) {
            a = String(a);
            b = String(b);
            b = b.replace(/[^gim]/g, function (a) {
                switch (a) {
                case "s":
                    c = !0;
                    break;
                case "x":
                    d = !0
                }
                return ""
            });
            if (c) {
                var e = !1;
                a = a.replace(/[.\[\]]|\\./g, function (a) {
                    switch (a) {
                    case ".":
                        if (!e) return "[^]";
                        break;
                    case "[":
                        e = !0;
                        break;
                    case "]":
                        e = !1
                    }
                    return a
                })
            }
            d && (a = a.replace(/\s+/g, ""))
        }
        return RegExp(a, b)
    }, fl, null, "RegExp");
    Mk("undefined", void 0);
    Mk("null", null);
    Mk("Infinity", Infinity);
    Mk("NaN", NaN);
    Mk("AS3", em("http://adobe.com/AS3/2006/builtin"));
    Object.defineProperty(Object.prototype, "setPropertyIsEnumerable", {
        value: function (a, b) {
            a = S(a, "String");
            b = S(b, "Boolean");
            var c = Object.getOwnPropertyDescriptor(this, a);
            c && c.configurable && c.enumerable != b && (c.enumerable = b, Object.defineProperty(this, a, c))
        }
    });
    var mm = function (a, b) {
        Object.defineProperty(a, Ak("http://adobe.com/AS3/2006/builtin", b), {
            value: function () {
                return this[b].apply(this, arguments)
            }
        })
    };
    mm(Object.prototype, "toLocaleString");
    mm(Object.prototype, "toString");
    mm(Object.prototype, "valueOf");
    var V = function (a, b) {
        Object.defineProperty(a, Ak("http://adobe.com/AS3/2006/builtin", b), {
            value: a[b]
        })
    };
    V(Object.prototype, "hasOwnProperty");
    V(Object.prototype, "isPrototypeOf");
    V(Object.prototype, "propertyIsEnumerable");
    V(Function.prototype, "apply");
    V(Function.prototype, "call");
    V(String, "fromCharCode");
    V(String.prototype, "charAt");
    V(String.prototype, "charCodeAt");
    V(String.prototype, "concat");
    V(String.prototype, "indexOf");
    V(String.prototype, "lastIndexOf");
    V(String.prototype, "localeCompare");
    V(String.prototype, "match");
    V(String.prototype, "replace");
    V(String.prototype, "search");
    V(String.prototype, "slice");
    V(String.prototype, "split");
    V(String.prototype, "substr");
    V(String.prototype, "substring");
    V(String.prototype, "toLocaleLowerCase");
    V(String.prototype, "toLocaleUpperCase");
    V(String.prototype, "toLowerCase");
    V(String.prototype, "toUpperCase");
    V(String.prototype, "toString");
    V(String.prototype, "valueOf");
    V(Array.prototype, "concat");
    V(Array.prototype, "every");
    V(Array.prototype, "filter");
    V(Array.prototype, "forEach");
    V(Array.prototype, "indexOf");
    V(Array.prototype, "join");
    V(Array.prototype, "lastIndexOf");
    V(Array.prototype, "map");
    V(Array.prototype, "pop");
    V(Array.prototype, "push");
    V(Array.prototype, "reverse");
    V(Array.prototype, "shift");
    V(Array.prototype, "slice");
    V(Array.prototype, "some");
    V(Array.prototype, "sort");
    V(Array.prototype, "sortOn");
    V(Array.prototype, "splice");
    V(Array.prototype, "unshift");
    V(Date.prototype, "getTime");
    var nm = function (a, b) {
        a = S(a, "String", "");
        b = S(b, "int", 0);
        Q(this, "errorID", b);
        P(this, "message", "String", a);
        P(this, "name", "String", "Error")
    };
    N(nm, "Error");
    nm.prototype.getStackTrace = function () {
        R(this);
        return ""
    };
    nm.prototype.toString = function () {
        return this.name + (this.message ? ": " + this.message : "")
    };
    var om = function (a, b) {
        nm.call(this, a, b);
        this.name = "ReferenceError"
    };
    N(om, "ReferenceError", nm);
    var pm = function (a, b) {
        nm.call(this, a, b);
        this.name = "TypeError"
    };
    N(pm, "TypeError", nm);
    var qm = function (a, b) {
        nm.call(this, a, b);
        this.name = "VerifyError"
    };
    N(qm, "VerifyError", nm);
    var rm = function (a, b) {
        nm.call(this, a, b);
        this.name = "ArgumentError"
    };
    N(rm, "ArgumentError", nm);
    var sm = function (a, b) {
        nm.call(this, a, b);
        this.name = "RangeError"
    };
    N(sm, "RangeError", nm);
    var tm = function (a, b) {
        nm.call(this, a, b);
        this.name = "URIError"
    };
    N(tm, "URIError", nm);
    var um = function (a, b) {
        nm.call(this, a, b)
    };
    N(um, "flash.errors.IOError", nm);
    var vm = function (a, b) {
        nm.call(this, a, b)
    };
    N(vm, "flash.errors.EOFError", um);
    var I = function (a, b) {
        var c = wm[a],
            d = xm[a] || nm,
            e = Array.prototype.slice.call(arguments, 1),
            f = "Error #" + a;
        c ? f += ": " + c.replace(/{(\d+)}/g, function (a, b) {
            return l(e[b]) ? e[b] : a
        }) : 0 < e.length && (f += ": " + e.join(", "));
        return new Wf(new d(f, a))
    }, wm = {
            1001: "The method {0} is not implemented.",
            1006: "{0} is not a function.",
            1007: "Instantiation attempted on a non-constructor.",
            1009: "Cannot access a property or method of a null object reference.",
            1010: "A term is undefined and has no properties.",
            1016: "Descendants operator (..) not supported on type",
            1034: "Type Coercion failed: cannot convert {0} to {1}.",
            1040: "The right-hand side of instanceof must be a class or function.",
            1041: "The right-hand side of operator must be a class.",
            1052: "Invalid URI passed to {0} function.",
            1056: "Cannot create property {0} on {1}.",
            1065: "Variable {0} is not defined.",
            1069: "Property {0} not found on {1} and there is no default value.",
            1083: 'The prefix "{0}" for element "{1}" is not bound.',
            1085: 'The element type "{0}" must be terminated by the matching end-tag "</{0}>".',
            1086: "The {0} method only works on lists containing one item.",
            1087: "Assignment to indexed XML is not allowed.",
            1088: "The markup in the document following the root element must be well-formed.",
            1090: "XML parser failure: element is malformed.",
            1091: "XML parser failure: Unterminated CDATA section.",
            1094: "XML parser failure: Unterminated comment.",
            1095: "XML parser failure: Unterminated attribute.",
            1097: "XML parser failure: Unterminated processing instruction.",
            1100: "Cannot supply flags when constructing one RegExp from another.",
            1115: "{0}$ is not a constructor.",
            1123: "Filter operator not supported on type {0}.",
            1125: "The index {0} is out of range {1}.",
            1126: "Cannot change the length of a fixed Vector.",
            1127: "Type application attempted on a non-parameterized type.",
            1508: "The value specified for argument {0} is invalid.",
            2004: "One of the parameters is invalid.",
            2006: "The supplied index is out of bounds.",
            2007: "Parameter {0} must be non-null.",
            2008: "{0} must be one of the accepted values.",
            2012: "{0}$ class cannot be instantiated.",
            2030: "End of file was encountered.",
            2058: "There was an error decompressing the data.",
            2067: "The ExternalInterface is not available in this container.",
            2088: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2089: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2090: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2091: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2092: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2093: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2101: "The String passed to URLVariables.decode() must be a URL-encoded query string containing name/value pairs.",
            2105: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2106: "The Proxy class does not implement {0}. It must be overridden by a subclass.",
            2107: "The Proxy class does not implement {0}. It must be overridden by a subclass."
        }, xm = {
            1001: qm,
            1006: pm,
            1007: pm,
            1009: pm,
            1010: pm,
            1016: pm,
            1034: pm,
            1040: pm,
            1041: pm,
            1052: tm,
            1056: om,
            1065: om,
            1069: om,
            1083: pm,
            1085: pm,
            1086: pm,
            1087: pm,
            1088: pm,
            1090: pm,
            1091: pm,
            1094: pm,
            1095: pm,
            1097: pm,
            1100: pm,
            1115: pm,
            1123: pm,
            1125: sm,
            1126: sm,
            1127: pm,
            1508: rm,
            2004: pm,
            2006: sm,
            2007: pm,
            2008: rm,
            2012: rm,
            2030: vm,
            2058: um,
            2067: nm,
            2088: nm,
            2089: nm,
            2090: nm,
            2091: nm,
            2092: nm,
            2093: nm,
            2101: nm,
            2105: nm,
            2106: nm,
            2107: nm
        };
    N(function () {
        P(this, "description", "String", "");
        P(this, "forceSimple", "Boolean", !1);
        P(this, "name", "String", "");
        P(this, "noAutoLabeling", "Boolean", !1);
        P(this, "shortcut", "String", "");
        P(this, "silent", "Boolean", !1)
    }, "flash.accessibility.AccessibilityProperties");
    var ym = function () {
        Object.defineProperty(this, "__swiffy_v", {
            get: function () {
                return this.Od()
            }
        })
    };
    ym.prototype.Od = function () {
        return new Ph
    };
    N(ym, "flash.filters.BitmapFilter");
    ym.prototype.clone = function () {
        return new ym
    };
    ym.prototype.toString = function () {
        return "[object BitmapFilter]"
    };
    var Rj = function (a, b) {
        return a | (255 * b | 0) << 24
    }, zm = N(function () {}, "flash.filters.BitmapFilterQuality");
    Object.defineProperties(zm, {
        HIGH: {
            value: 3
        },
        LOW: {
            value: 1
        },
        MEDIUM: {
            value: 2
        }
    });
    var Am = N(function () {}, "flash.filters.BitmapFilterType");
    Object.defineProperties(Am, {
        FULL: {
            value: "full"
        },
        INNER: {
            value: "inner"
        },
        OUTER: {
            value: "outer"
        }
    });
    var Ih = function (a, b, c, d, e, f, h, k, n, q, s, r) {
        ym.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        c = S(c, "uint", 16777215);
        d = S(d, "Number", 1);
        e = S(e, "uint", 0);
        f = S(f, "Number", 1);
        h = S(h, "Number", 4);
        k = S(k, "Number", 4);
        n = S(n, "Number", 1);
        q = S(q, "int", 1);
        s = S(s, "String", "inner");
        r = S(r, "Boolean", !1);
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", h);
        P(this, "blurY", "Number", k);
        P(this, "distance", "Number", a);
        P(this, "highlightAlpha", "Number", d);
        P(this, "highlightColor", "uint", c);
        P(this, "knockout", "Boolean", r);
        P(this, "quality",
            "int", q);
        P(this, "shadowAlpha", "Number", f);
        P(this, "shadowColor", "uint", e);
        P(this, "strength", "Number", n);
        P(this, "type", "String", s)
    };
    N(Ih, "flash.filters.BevelFilter", ym);
    Ih.prototype.Od = function () {
        return new Gh(this.angle * Math.PI / 180, Rj(this.highlightColor, this.highlightAlpha), Rj(this.shadowColor, this.shadowAlpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
    };
    Ih.prototype.clone = function () {
        return new Ih(this.distance, this.angle, this.highlightColor, this.highlightAlpha, this.shadowColor, this.shadowAlpha, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var vh = function (a, b, c) {
        ym.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 4);
        c = S(c, "int", 1);
        P(this, "blurX", "Number", a);
        P(this, "blurY", "Number", b);
        P(this, "quality", "int", c)
    };
    N(vh, "flash.filters.BlurFilter", ym);
    vh.prototype.Od = function () {
        return new th(this.quality, this.blurX, this.blurY)
    };
    vh.prototype.clone = function () {
        return new vh(this.blurX, this.blurY, this.quality)
    };
    var ph = function (a) {
        ym.call(this);
        var b;
        Object.defineProperty(this, "matrix", {
            get: function () {
                return b
            },
            set: function (a) {
                b = S(a, "Array");
                if (null != b)
                    if (20 < b.length) b.length = 20;
                    else
                        for (; 20 > b.length;) b.push(0);
                    else b = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
            }
        });
        this.matrix = a
    };
    N(ph, "flash.filters.ColorMatrixFilter", ym);
    ph.prototype.Od = function () {
        return new nh(this.matrix)
    };
    ph.prototype.clone = function () {
        return new ph(this.matrix.slice(0))
    };
    var sh = function (a, b, c, d, e, f, h, k, n) {
        ym.call(this);
        a = S(a, "Number", 0);
        b = S(b, "Number", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Boolean", !0);
        h = S(h, "Boolean", !0);
        k = S(k, "uint", 0);
        var q;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return q
            },
            set: function (a) {
                q = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = n;
        P(this, "bias", "Number", e);
        P(this, "clamp", "Boolean", h);
        P(this, "color", "uint", k);
        P(this, "divisor", "Number", d);
        P(this, "matrixX", "Number", a);
        P(this, "matrixY", "Number", b);
        var s = [];
        Object.defineProperty(this, "matrix", {
            get: function () {
                return s
            },
            set: function (a) {
                s = S(a, "Array");
                a = this.matrixY * this.matrixX;
                null != s || (s = []);
                if (s.length > a) s.length = a;
                else
                    for (; s.length < a;) s.push(0)
            }
        });
        l(c) && (this.matrix = c);
        P(this, "preserveAlpha", "Boolean", f)
    };
    N(sh, "flash.filters.ConvolutionFilter", ym);
    sh.prototype.Od = function () {
        return new qh(this.bias, this.clamp, Rj(this.color, this.alpha), this.divisor, this.matrix, this.matrixX, this.matrixY, this.preserveAlpha)
    };
    sh.prototype.clone = function () {
        return new sh(this.matrixX, this.matrixY, this.matrix, this.divisor, this.bias, this.preserveAlpha, this.clamp, this.color, this.alpha)
    };
    var Cm = function (a, b, c, d, e, f, h, k, n) {
        ym.call(this);
        c = S(c, "uint", 0);
        d = S(d, "uint", 0);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        h = S(h, "String", "wrap");
        var q;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return q
            },
            set: function (a) {
                q = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = n;
        var s;
        Object.defineProperty(this, "color", {
            get: function () {
                return s
            },
            set: function (a) {
                s = S(a, "uint", 0) % 16777216
            }
        });
        this.color = k;
        P(this, "componentX", "uint", c);
        P(this, "componentY", "uint", d);
        P(this, "mapBitmap", "flash.display.BitmapData",
            a);
        var r;
        Object.defineProperty(this, "mapPoint", {
            get: function () {
                return r
            },
            set: function (a) {
                a = S(a, "flash.geom.Point", null);
                r = null != a ? new Bm(a.x, a.y) : new Bm(0, 0)
            }
        });
        this.mapPoint = b;
        P(this, "mode", "String", h);
        P(this, "scaleX", "Number", e);
        P(this, "scaleY", "Number", f)
    };
    N(Cm, "flash.filters.DisplacementMapFilter", ym);
    Cm.prototype.clone = function () {
        return new Cm(this.mapBitmap, this.mapPoint, this.componentX, this.componentY, this.scaleX, this.scaleY, this.mode, this.color, this.alpha)
    };
    var Dm = function () {};
    Dm.n = N(Dm, "flash.filters.DisplacementMapFilterMode");
    Object.defineProperties(Dm.n, {
        CLAMP: {
            value: "clamp"
        },
        COLOR: {
            value: "color"
        },
        IGNORE: {
            value: "ignore"
        },
        WRAP: {
            value: "wrap"
        }
    });
    var Fh = function (a, b, c, d, e, f, h, k, n, q, s) {
        ym.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        c = S(c, "uint", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 4);
        f = S(f, "Number", 4);
        h = S(h, "Number", 1);
        k = S(k, "int", 1);
        n = S(n, "Boolean", !1);
        q = S(q, "Boolean", !1);
        s = S(s, "Boolean", !1);
        var r;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return r
            },
            set: function (a) {
                r = Math.min(1, Math.floor(255 * S(a, "Number", 0)) / 255)
            }
        });
        this.alpha = d;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", e);
        P(this, "blurY", "Number", f);
        var u;
        Object.defineProperty(this,
            "color", {
                get: function () {
                    return u
                },
                set: function (a) {
                    u = S(a, "uint", 0) % 16777216
                }
            });
        this.color = c;
        P(this, "distance", "Number", a);
        P(this, "hideObject", "Boolean", s);
        P(this, "inner", "Boolean", n);
        P(this, "knockout", "Boolean", q);
        P(this, "quality", "int", k);
        P(this, "strength", "Number", h)
    };
    N(Fh, "flash.filters.DropShadowFilter", ym);
    Fh.prototype.Od = function () {
        return new Ch(this.angle * Math.PI / 180, Rj(this.color, this.alpha), this.distance, this.strength, this.quality, this.blurX, this.blurY, Dh(this.hideObject, this.inner, this.knockout))
    };
    Fh.prototype.clone = function () {
        return new Fh(this.distance, this.angle, this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout, this.hideObject)
    };
    var Em = function (a, b, c, d, e, f, h, k) {
        ym.call(this);
        c = S(c, "Number", 6);
        d = S(d, "Number", 6);
        e = S(e, "Number", 2);
        f = S(f, "int", 1);
        h = S(h, "Boolean", !1);
        k = S(k, "Boolean", !1);
        var n;
        Object.defineProperty(this, "alpha", {
            get: function () {
                return n
            },
            set: function (a) {
                n = Math.min(1, Math.floor(255 * S(a, "Number", 1)) / 255)
            }
        });
        this.alpha = b;
        P(this, "blurX", "Number", c);
        P(this, "blurY", "Number", d);
        var q;
        Object.defineProperty(this, "color", {
            get: function () {
                return q
            },
            set: function (a) {
                q = S(a, "uint", 16711680) % 16777216
            }
        });
        this.color = a;
        P(this, "inner",
            "Boolean", h);
        P(this, "knockout", "Boolean", k);
        P(this, "quality", "int", f);
        P(this, "strength", "Number", e)
    };
    N(Em, "flash.filters.GlowFilter", ym);
    Em.prototype.Od = function () {
        return new Ch(0, Rj(this.color, this.alpha), 0, this.strength, this.quality, this.blurX, this.blurY, Dh(!1, this.inner, this.knockout))
    };
    Em.prototype.clone = function () {
        return new Em(this.color, this.alpha, this.blurX, this.blurY, this.strength, this.quality, this.inner, this.knockout)
    };
    var Oh = function (a, b, c, d, e, f, h, k, n, q, s) {
        ym.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        f = S(f, "Number", 4);
        h = S(h, "Number", 4);
        k = S(k, "Number", 1);
        n = S(n, "int", 1);
        q = S(q, "String", "inner");
        s = S(s, "Boolean", !1);
        var r = [];
        Object.defineProperty(this, "colors", {
            get: function () {
                return r
            },
            set: function (a) {
                r = S(a, "Array", []);
                l(r) || (r = []);
                for (a = 0; a < r.length; a++) r[a] = S(r[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var u = [];
        Object.defineProperty(this, "alphas", {
            get: function () {
                return u
            },
            set: function (a) {
                u = S(a, "Array", []);
                l(u) || (u = []);
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.min(1, Math.floor(255 * S(u[b], "Number", 1)) / 255);
                u.length = a
            }
        });
        this.alphas = d;
        var w = [];
        Object.defineProperty(this, "ratios", {
            get: function () {
                return w
            },
            set: function (a) {
                w = S(a, "Array", []);
                l(w) || (w = []);
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) w[b] = Math.floor(S(w[b], "Number", 0)), 0 > w[b] ? w[b] = 0 : 255 < w[b] && (w[b] = 255);
                w.length = a
            }
        });
        this.ratios = e;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", f);
        P(this, "blurY", "Number", h);
        P(this, "distance", "Number", a);
        P(this, "knockout", "Boolean", s);
        P(this, "quality", "int", n);
        P(this, "strength", "Number", k);
        P(this, "type", "String", q)
    };
    N(Oh, "flash.filters.GradientBevelFilter", ym);
    Oh.prototype.Od = function () {
        return new Mh(this.angle * Math.PI / 180, this.colors, this.alphas, this.ratios, this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
    };
    Oh.prototype.clone = function () {
        return new Oh(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var Lh = function (a, b, c, d, e, f, h, k, n, q, s) {
        ym.call(this);
        a = S(a, "Number", 4);
        b = S(b, "Number", 45);
        f = S(f, "Number", 4);
        h = S(h, "Number", 4);
        k = S(k, "Number", 1);
        n = S(n, "int", 1);
        q = S(q, "String", "inner");
        s = S(s, "Boolean", !1);
        var r = [];
        Object.defineProperty(this, "colors", {
            get: function () {
                return r
            },
            set: function (a) {
                r = S(a, "Array", []);
                l(r) || (r = []);
                for (a = 0; a < r.length; a++) r[a] = S(r[a], "uint", 16711680) % 16777216
            }
        });
        this.colors = c;
        var u = [];
        Object.defineProperty(this, "alphas", {
            get: function () {
                return u
            },
            set: function (a) {
                u = S(a, "Array", []);
                l(u) || (u = []);
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) u[b] = Math.min(1, Math.floor(255 * S(u[b], "Number", 1)) / 255);
                u.length = a
            }
        });
        this.alphas = d;
        var w = [];
        Object.defineProperty(this, "ratios", {
            get: function () {
                return w
            },
            set: function (a) {
                w = S(a, "Array", []);
                l(w) || (w = []);
                a = l(r) ? r.length : 0;
                for (var b = 0; b < a; b++) w[b] = Math.floor(S(w[b], "Number", 0)), 0 > w[b] ? w[b] = 0 : 255 < w[b] && (w[b] = 255);
                w.length = a
            }
        });
        this.ratios = e;
        P(this, "angle", "Number", b);
        P(this, "blurX", "Number", f);
        P(this, "blurY", "Number", h);
        P(this, "distance", "Number", a);
        P(this, "knockout", "Boolean", s);
        P(this, "quality", "int", n);
        P(this, "strength", "Number", k);
        P(this, "type", "String", q)
    };
    N(Lh, "flash.filters.GradientGlowFilter", ym);
    Lh.prototype.Od = function () {
        return new Jh(this.angle * Math.PI / 180, this.colors, this.alphas, this.ratios, this.distance, this.strength, this.quality, this.blurX, this.blurY, Ah(this.type, this.knockout))
    };
    Lh.prototype.clone = function () {
        return new Lh(this.distance, this.angle, this.colors, this.alphas, this.ratios, this.blurX, this.blurY, this.strength, this.quality, this.type, this.knockout)
    };
    var Fm = function (a, b, c) {
        a = S(a, "String");
        b = S(b, "Boolean", !1);
        c = S(c, "Boolean", !1);
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                type: a,
                bubbles: b,
                cancelable: c,
                eventPhase: 2,
                target: null,
                currentTarget: null,
                Gk: !1,
                Cr: !1,
                defaultPrevented: !1,
                Ak: !1
            }
        })
    }, Gm = function (a) {
            return a.__swiffy_v
        }, Hm = N(Fm, "flash.events.Event");
    L(Hm, "bubbles", function () {
        return Gm(this).bubbles
    });
    L(Hm, "cancelable", function () {
        return Gm(this).cancelable
    });
    L(Hm, "currentTarget", function () {
        return Gm(this).currentTarget
    });
    L(Hm, "eventPhase", function () {
        return Gm(this).eventPhase
    });
    L(Hm, "target", function () {
        return Gm(this).target
    });
    L(Hm, "type", function () {
        return Gm(this).type
    });
    K(Hm, "isDefaultPrevented", function () {
        return Gm(this).defaultPrevented
    });
    K(Hm, "preventDefault", function () {
        var a = Gm(this);
        a.cancelable && (a.defaultPrevented = !0)
    });
    K(Hm, "stopPropagation", function () {
        Gm(this).Gk = !0
    });
    K(Hm, "stopImmediatePropagation", function () {
        var a = Gm(this);
        a.Cr = !0;
        a.Gk = !0
    });
    K(Hm, "formatToString", function () {
        for (var a = "[" + Ek(this).localName, b = 0; b < arguments.length; b++) {
            var c = this[arguments[b]];
            ha(c) ? c = Math.round(100 * c) / 100 : m(c) && (c = '"' + c + '"');
            a += " " + arguments[b] + "=" + c
        }
        return a + "]"
    });
    K(Hm, "clone", function () {
        return ol.call(Hm, this.type, this.bubbles, this.cancelable)
    });
    K(Hm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase")
    });
    Object.defineProperties(Hm, {
        ACTIVATE: {
            value: "activate"
        },
        ADDED: {
            value: "added"
        },
        ADDED_TO_STAGE: {
            value: "addedToStage"
        },
        CANCEL: {
            value: "cancel"
        },
        CHANGE: {
            value: "change"
        },
        CHANNEL_MESSAGE: {
            value: "channelMessage"
        },
        CHANNEL_STATE: {
            value: "channelState"
        },
        CLEAR: {
            value: "clear"
        },
        CLOSE: {
            value: "close"
        },
        CLOSING: {
            value: "closing"
        },
        COMPLETE: {
            value: "complete"
        },
        CONNECT: {
            value: "connect"
        },
        CONTEXT3D_CREATE: {
            value: "context3DCreate"
        },
        COPY: {
            value: "copy"
        },
        CUT: {
            value: "cut"
        },
        DEACTIVATE: {
            value: "deactivate"
        },
        DISPLAYING: {
            value: "displaying"
        },
        ENTER_FRAME: {
            value: "enterFrame"
        },
        EXIT_FRAME: {
            value: "exitFrame"
        },
        EXITING: {
            value: "exiting"
        },
        FRAME_CONSTRUCTED: {
            value: "frameConstructed"
        },
        FRAME_LABEL: {
            value: "frameLabel"
        },
        FULLSCREEN: {
            value: "fullScreen"
        },
        HTML_BOUNDS_CHANGE: {
            value: "htmlBoundsChange"
        },
        HTML_DOM_INITIALIZE: {
            value: "htmlDOMInitialize"
        },
        HTML_RENDER: {
            value: "htmlRender"
        },
        ID3: {
            value: "id3"
        },
        INIT: {
            value: "init"
        },
        LOCATION_CHANGE: {
            value: "locationChange"
        },
        MOUSE_LEAVE: {
            value: "mouseLeave"
        },
        NETWORK_CHANGE: {
            value: "networkChange"
        },
        OPEN: {
            value: "open"
        },
        PASTE: {
            value: "paste"
        },
        PREPARING: {
            value: "preparing"
        },
        REMOVED: {
            value: "removed"
        },
        REMOVED_FROM_STAGE: {
            value: "removedFromStage"
        },
        RENDER: {
            value: "render"
        },
        RESIZE: {
            value: "resize"
        },
        SCROLL: {
            value: "scroll"
        },
        SELECT: {
            value: "select"
        },
        SELECT_ALL: {
            value: "selectAll"
        },
        SOUND_COMPLETE: {
            value: "soundComplete"
        },
        STANDARD_ERROR_CLOSE: {
            value: "standardErrorClose"
        },
        STANDARD_INPUT_CLOSE: {
            value: "standardInputClose"
        },
        STANDARD_OUTPUT_CLOSE: {
            value: "standardOutputClose"
        },
        SUSPEND: {
            value: "suspend"
        },
        TAB_CHILDREN_CHANGE: {
            value: "tabChildrenChange"
        },
        TAB_ENABLED_CHANGE: {
            value: "tabEnabledChange"
        },
        TAB_INDEX_CHANGE: {
            value: "tabIndexChange"
        },
        TEXT_INTERACTION_MODE_CHANGE: {
            value: "textInteractionModeChange"
        },
        TEXTURE_READY: {
            value: "textureReady"
        },
        UNLOAD: {
            value: "unload"
        },
        USER_IDLE: {
            value: "userIdle"
        },
        USER_PRESENT: {
            value: "userPresent"
        },
        VIDEO_FRAME: {
            value: "videoFrame"
        },
        WORKER_STATE: {
            value: "workerState"
        }
    });
    var Im = function (a, b, c, d) {
        Fm.call(this, a, b, c);
        this.text = d
    }, Jm = N(Im, "flash.events.TextEvent", Fm);
    L(Jm, "text", function () {
        return this.__swiffy_v.text
    });
    M(Jm, "text", function (a) {
        this.__swiffy_v.text = S(a, "String", "")
    });
    K(Jm, "clone", function () {
        return ol.call(Jm, this.type, this.bubbles, this.cancelable, this.text)
    });
    K(Jm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "text")
    });
    Object.defineProperty(Jm, "LINK", {
        value: "link"
    });
    Object.defineProperty(Jm, "TEXT_INPUT", {
        value: "textInput"
    });
    var Km = function (a, b, c, d) {
        Im.call(this, a, b, c, d)
    }, Lm = N(Km, "flash.events.ErrorEvent", Im);
    K(Lm, "clone", function () {
        return ol.call(Lm, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(Lm, "ERROR", {
        value: "error"
    });
    var Mm = N(function (a, b, c, d) {
        Im.call(this, a, b, c, d)
    }, "flash.events.SecurityErrorEvent", Km);
    K(Mm, "clone", function () {
        return ol.call(Mm, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperty(Mm, "SECURITY_ERROR", {
        value: "securityError"
    });
    var Nm = N(function (a, b, c, d, e) {
        Im.call(this, a, b, c, d);
        this.error = e
    }, "flash.events.AsyncErrorEvent", Km);
    L(Nm, "error", function () {
        return this.__swiffy_v.error
    });
    M(Nm, "error", function (a) {
        this.__swiffy_v.error = S(a, "Error", null)
    });
    K(Nm, "clone", function () {
        return ol.call(Nm, this.type, this.bubbles, this.cancelable, this.text, this.error)
    });
    Object.defineProperty(Nm, "ASYNC_ERROR", {
        value: "asyncError"
    });
    var Pm = function (a, b, c, d, e, f, h, k, n, q, s) {
        Fm.call(this, a, b, c);
        this.localX = d;
        this.localY = e;
        this.relatedObject = f;
        this.ctrlKey = h;
        this.altKey = k;
        this.shiftKey = n;
        this.buttonDown = q;
        this.delta = s;
        a = Om(this);
        a.Lo = NaN;
        a.Mo = NaN
    }, Om = function (a) {
            return a.__swiffy_v
        }, Qm = N(Pm, "flash.events.MouseEvent", Fm);
    L(Qm, "localX", function () {
        return Om(this).Oo
    });
    M(Qm, "localX", function (a) {
        Om(this).Oo = S(a, "Number", NaN)
    });
    L(Qm, "localY", function () {
        return Om(this).Po
    });
    M(Qm, "localY", function (a) {
        Om(this).Po = S(a, "Number", NaN)
    });
    L(Qm, "stageX", function () {
        return Om(this).Lo
    });
    L(Qm, "stageY", function () {
        return Om(this).Mo
    });
    L(Qm, "relatedObject", function () {
        return Om(this).Te
    });
    M(Qm, "relatedObject", function (a) {
        Om(this).Te = S(a, "flash.display.InteractiveObject", null)
    });
    L(Qm, "ctrlKey", function () {
        return Om(this).ctrlKey
    });
    M(Qm, "ctrlKey", function (a) {
        Om(this).ctrlKey = S(a, "Boolean", !1)
    });
    L(Qm, "altKey", function () {
        return Om(this).altKey
    });
    M(Qm, "altKey", function (a) {
        Om(this).altKey = S(a, "Boolean", !1)
    });
    L(Qm, "shiftKey", function () {
        return Om(this).shiftKey
    });
    M(Qm, "shiftKey", function (a) {
        Om(this).shiftKey = S(a, "Boolean", !1)
    });
    L(Qm, "buttonDown", function () {
        return Om(this).No
    });
    M(Qm, "buttonDown", function (a) {
        Om(this).No = S(a, "Boolean", !1)
    });
    L(Qm, "delta", function () {
        return Om(this).ox
    });
    M(Qm, "delta", function (a) {
        Om(this).ox = S(a, "int", 0)
    });
    K(Qm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "localX", "localY", "stageX", "stageY", "relatedObject", "ctrlKey", "altKey", "shiftKey", "buttonDown", "delta")
    });
    K(Qm, "updateAfterEvent", function () {
        R(this, "updateAfterEvent")
    });
    Object.defineProperties(Qm, {
        CLICK: {
            value: "click"
        },
        CONTEXT_MENU: {
            value: "contextMenu"
        },
        DOUBLE_CLICK: {
            value: "doubleClick"
        },
        MIDDLE_CLICK: {
            value: "middleClick"
        },
        MIDDLE_MOUSE_DOWN: {
            value: "middleMouseDown"
        },
        MIDDLE_MOUSE_UP: {
            value: "middleMouseUp"
        },
        MOUSE_DOWN: {
            value: "mouseDown"
        },
        MOUSE_MOVE: {
            value: "mouseMove"
        },
        MOUSE_OUT: {
            value: "mouseOut"
        },
        MOUSE_OVER: {
            value: "mouseOver"
        },
        MOUSE_UP: {
            value: "mouseUp"
        },
        MOUSE_WHEEL: {
            value: "mouseWheel"
        },
        RIGHT_CLICK: {
            value: "rightClick"
        },
        RIGHT_MOUSE_DOWN: {
            value: "rightMouseDown"
        },
        RIGHT_MOUSE_UP: {
            value: "rightMouseUp"
        },
        ROLL_OUT: {
            value: "rollOut"
        },
        ROLL_OVER: {
            value: "rollOver"
        }
    });
    var Rm = function (a, b, c) {
        Fm.call(this, a, b, c)
    }, Sm = N(Rm, "flash.events.TimerEvent", Fm);
    K(Sm, "clone", function () {
        return ol.call(Sm, this.type, this.bubbles, this.cancelable, this.activating)
    });
    Object.defineProperties(Sm, {
        TIMER: {
            value: "timer"
        },
        TIMER_COMPLETE: {
            value: "timerComplete"
        }
    });
    var Tm = N(rl(1001), "flash.events.IEventDispatcher");
    Tm.n = Tm;
    Tm.prototype.addEventListener = function () {};
    Tm.prototype.dispatchEvent = function () {};
    Tm.prototype.hasEventListener = function () {};
    Tm.prototype.removeEventListener = function () {};
    Tm.prototype.willTrigger = function () {};
    Zk(Tm.n);
    var Um = N(function (a, b, c, d) {
        Im.call(this, a, b, c, d);
        R(this)
    }, "flash.events.IOErrorEvent", Km);
    K(Um, "clone", function () {
        return ol.call(Um, this.type, this.bubbles, this.cancelable, this.text)
    });
    Object.defineProperties(Um, {
        IO_ERROR: {
            value: "ioError"
        },
        STANDARD_ERROR_IO_ERROR: {
            value: "standardErrorIoError"
        },
        STANDARD_INPUT_IO_ERROR: {
            value: "standardInputIoError"
        },
        STANDARD_OUTPUT_IO_ERROR: {
            value: "standardOutputIoError"
        }
    });
    var Vm = function (a, b, c, d, e) {
        Fm.call(this, a, b, c);
        this.bytesLoaded = d;
        this.bytesTotal = e
    }, Wm = N(Vm, "flash.events.ProgressEvent", Fm);
    L(Wm, "bytesLoaded", function () {
        return this.__swiffy_v.cx
    });
    M(Wm, "bytesLoaded", function (a) {
        this.__swiffy_v.cx = S(a, "Number", 0)
    });
    L(Wm, "bytesTotal", function () {
        return this.__swiffy_v.dx
    });
    M(Wm, "bytesTotal", function (a) {
        this.__swiffy_v.dx = S(a, "Number", 0)
    });
    K(Wm, "clone", function () {
        return ol.call(Wm, this.type, this.bubbles, this.cancelable, this.bytesLoaded, this.bytesTotal)
    });
    K(Wm, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "bytesLoaded", "bytesTotal")
    });
    Object.defineProperties(Wm, {
        PROGRESS: {
            value: "progress"
        },
        SOCKET_DATA: {
            value: "socketData"
        },
        STANDARD_ERROR_DATA: {
            value: "standardErrorData"
        },
        STANDARD_INPUT_PROGRESS: {
            value: "standardInputProgress"
        },
        STANDARD_OUTPUT_DATA: {
            value: "standardOutputData"
        }
    });
    var Xm = function (a, b, c, d) {
        Fm.call(this, a, b, c);
        this.status = d;
        this.responseURL = null;
        R(this)
    }, Ym = N(Xm, "flash.events.HTTPStatusEvent", Fm);
    L(Ym, "status", function () {
        return this.__swiffy_v.status
    });
    M(Ym, "status", function (a) {
        this.__swiffy_v.status = S(a, "Number", 0)
    });
    K(Ym, "clone", function () {
        return ol.call(Ym, this.type, this.bubbles, this.cancelable, this.status)
    });
    K(Ym, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "responseURL")
    });
    Object.defineProperties(Ym, {
        HTTP_RESPONSE_STATUS: {
            value: "httpResponseStatus"
        },
        HTTP_STATUS: {
            value: "httpStatus"
        }
    });
    var Zm = function (a, b, c) {
        this.Qc = a;
        this.kn = b;
        this.Sv = c
    }, T = function (a) {
            a = S(a, "flash.events.IEventDispatcher", null);
            Object.defineProperty(this, "__swiffy_v", {
                value: {
                    target: a || this
                }
            })
        };
    N(T, "flash.events.EventDispatcher", void 0, [Tm]);
    var $m = {}, an = function (a, b) {
            for (var c = 1; c < arguments.length; ++c) $m[arguments[c]] = a
        };
    an(T, "activate", "deactivate");
    var Ol = function (a, b) {
        var c = $m[a];
        return !!c && b instanceof c
    }, Pl = function (a, b) {
            var c = b.__swiffy_d;
            c instanceof Pe && c.Sd() || (c = new Fm(a, !1, !1), Gm(c).Ak = !0, b.dispatchEvent(c))
        };
    T.prototype.addEventListener = function (a, b, c, d) {
        this.__swiffy_listeners || Object.defineProperty(this, "__swiffy_listeners", {
            value: {}
        });
        var e = this.__swiffy_listeners,
            f = e[a];
        f || (e[a] = f = []);
        d |= 0;
        c = !! c;
        for (e = 0; e < f.length; ++e)
            if (f[e].Qc == b && f[e].kn == c) return;
        0 == f.length && Ol(a, this) && cj.Wv(a, this);
        for (e = f.length; 0 < e && d > f[e - 1].Sv; --e);
        f.splice(e, 0, new Zm(b, c, d))
    };
    T.prototype.dispatchEvent = function (a) {
        var b = Gm(a),
            c = this.__swiffy_v;
        b.target = c && c.target || this;
        if (!b.Ak) {
            for (var d = [], c = this; c = c.parent;) d.push(c);
            b.eventPhase = 1;
            for (c = d.length - 1; 0 <= c && !b.Gk; c--) b.currentTarget = d[c], bn(d[c], a, !0)
        }
        b.eventPhase = 2;
        b.currentTarget = this;
        bn(this, a);
        if (!b.Ak && b.bubbles)
            for (b.eventPhase = 3, c = 0; c < d.length && !b.Gk; c++) b.currentTarget = d[c], bn(d[c], a);
        return !b.defaultPrevented
    };
    var bn = function (a, b, c) {
        var d = a.__swiffy_listeners;
        a = Gm(b);
        if (d && d[a.type])
            for (var d = d[a.type], e = 0; e < d.length && !a.Cr; e++) d[e].kn == !! c && d[e].Qc.call(null, b)
    };
    T.prototype.removeEventListener = function (a, b, c) {
        var d = this.__swiffy_listeners;
        if (d && d[a] && d[a].length) {
            d = d[a];
            c = !! c;
            for (var e = 0; e < d.length; e++) d[e].Qc == b && d[e].kn == c && d.splice(e--, 1);
            0 == d.length && Ol(a, this) && cj.Jq(a, this)
        }
    };
    T.prototype.hasEventListener = function (a) {
        var b = this.__swiffy_listeners;
        return !!b && !! b[a] && b[a].length
    };
    T.prototype.willTrigger = function (a) {
        var b = this;
        do
            if (b.hasEventListener(a)) return !0; while (b = b.parent);
        return !1
    };
    var cn = function (a, b, c, d, e) {
        Fm.call(this, a, b, c);
        this.contextMenuOwner = e;
        this.isMouseTargetInaccessible = !1;
        this.mouseTarget = d
    }, dn = function (a) {
            return a.__swiffy_v
        }, en = N(cn, "flash.events.ContextMenuEvent", Fm);
    L(Hm, "contextMenuOwner", function () {
        return dn(this).ix
    });
    M(Hm, "contextMenuOwner", function (a) {
        dn(this).ix = S(a, "flash.display.InteractiveObject", null)
    });
    L(Hm, "isMouseTargetInaccessible", function () {
        return dn(this).Gx
    });
    M(Hm, "isMouseTargetInaccessible", function (a) {
        dn(this).Gx = S(a, "Boolean", !1)
    });
    L(Hm, "mouseTarget", function () {
        return dn(this).Mx
    });
    M(Hm, "mouseTarget", function (a) {
        dn(this).Mx = S(a, "flash.display.InteractiveObject", null)
    });
    K(en, "clone", function () {
        return ol.call(cn, this.type, this.bubbles, this.cancelable, this.mouseTarget, this.contextMenuOwner)
    });
    Object.defineProperty(en, "MENU_ITEM_SELECT", {
        value: "menuItemSelect"
    });
    Object.defineProperty(en, "MENU_SELECT", {
        value: "menuSelect"
    });
    var fn = N(function (a, b, c, d, e) {
        Fm.call(this, a, b, c);
        this.code = d;
        this.level = e
    }, "flash.events.StatusEvent", Fm);
    L(fn, "code", function () {
        return this.__swiffy_v.code
    });
    M(fn, "code", function (a) {
        this.__swiffy_v.code = S(a, "String")
    });
    L(fn, "level", function () {
        return this.__swiffy_v.Kx
    });
    M(fn, "level", function (a) {
        this.__swiffy_v.Kx = S(a, "String")
    });
    K(fn, "clone", function () {
        return ol.call(fn, this.type, this.bubbles, this.cancelable, this.code, this.level)
    });
    Object.defineProperty(fn, "STATUS", {
        value: "status"
    });
    var gn = function (a, b, c, d) {
        Fm.call(this, a, b, c);
        this.activating = d
    }, hn = N(gn, "flash.events.ActivityEvent", Fm);
    L(hn, "activating", function () {
        return this.__swiffy_v.$w
    });
    M(hn, "activating", function (a) {
        this.__swiffy_v.$w = S(a, "Boolean", !1)
    });
    K(hn, "clone", function () {
        return ol.call(Hm, this.type, this.bubbles, this.cancelable, this.activating)
    });
    K(hn, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "status", "activating")
    });
    Object.defineProperty(hn, "ACTIVITY", {
        value: "activity"
    });
    var jn = function (a) {
        return a.__swiffy_v
    }, kn = N(function (a, b, c, d, e, f, h) {
            Fm.call(this, a, b, c);
            this.relatedObject = l(d) ? d : null;
            this.shiftKey = l(e) ? e : !1;
            this.keyCode = l(f) ? f : 0;
            this.direction = l(h) ? h : "none";
            this.isRelatedObjectInaccessible = !1
        }, "flash.events.FocusEvent", Fm);
    L(kn, "direction", function () {
        return jn(this).direction
    });
    L(kn, "isRelatedObjectInaccessible", function () {
        return jn(this).Hx
    });
    L(kn, "keyCode", function () {
        return jn(this).keyCode
    });
    L(kn, "relatedObject", function () {
        return jn(this).Te
    });
    L(kn, "shiftKey", function () {
        return jn(this).shiftKey
    });
    M(kn, "direction", function (a) {
        jn(this).direction = S(a, "String")
    });
    M(kn, "isRelatedObjectInaccessible", function (a) {
        jn(this).Hx = S(a, "Boolean")
    });
    M(kn, "keyCode", function (a) {
        jn(this).keyCode = S(a, "uint")
    });
    M(kn, "relatedObject", function (a) {
        jn(this).Te = S(a, "flash.display.InteractiveObject")
    });
    M(kn, "shiftKey", function (a) {
        jn(this).shiftKey = S(a, "Boolean")
    });
    Object.defineProperties(kn, {
        FOCUS_IN: {
            value: "focusIn"
        },
        FOCUS_OUT: {
            value: "focusOut"
        },
        KEY_FOCUS_CHANGE: {
            value: "keyFocusChange"
        },
        MOUSE_FOCUS_CHANGE: {
            value: "mouseFocusChange"
        }
    });
    var ln = N(function (a, b, c, d, e) {
        gn.call(this, a, b, c);
        a = this.__swiffy_v;
        a.fullScreen = S(d, "Boolean", !1);
        a.Fx = S(e, "Boolean", !1)
    }, "flash.events.FullScreenEvent", gn);
    L(ln, "fullScreen", function () {
        return this.__swiffy_v.fullScreen
    });
    L(ln, "interactive", function () {
        return this.__swiffy_v.Fx
    });
    K(ln, "clone", function () {
        return ol.call(ln, this.type, this.bubbles, this.cancelable, this.activating, this.fullScreen, this.interactive)
    });
    K(ln, "toString", function () {
        return this.formatToString("type", "bubbles", "cancelable", "eventPhase", "activating", "fullScreen", "interactive")
    });
    Object.defineProperty(ln, "FULL_SCREEN", {
        value: "fullScreen"
    });
    Object.defineProperty(ln, "FULL_SCREEN_INTERACTIVE_ACCEPTED", {
        value: "fullScreenInteractiveAccepted"
    });
    var mn = function (a) {
        return a.__swiffy_v
    }, nn = N(function (a, b, c, d, e, f, h, k, n, q, s) {
            Fm.call(this, a, b, c);
            this.charCodeValue = l(d) ? d : 0;
            this.keyCodeValue = l(e) ? e : 0;
            this.keyLocationValue = l(f) ? f : 0;
            this.ctrlKeyValue = l(h) ? h : !1;
            this.altKeyValue = l(k) ? k : !1;
            this.shiftKeyValue = l(n) ? n : !1;
            this.controlKeyValue = l(q) ? q : !1;
            this.commandKeyValue = l(s) ? s : !1
        }, "flash.events.KeyboardEvent", Fm);
    L(nn, "charCodeValue", function () {
        return mn(this).fx
    });
    L(nn, "keyCodeValue", function () {
        return mn(this).Ix
    });
    L(nn, "keyLocationValue", function () {
        return mn(this).Jx
    });
    L(nn, "ctrlKeyValue", function () {
        return mn(this).lx
    });
    L(nn, "altKeyValue", function () {
        return mn(this).bx
    });
    L(nn, "shiftKeyValue", function () {
        return mn(this).py
    });
    L(nn, "controlKeyValue", function () {
        return mn(this).jx
    });
    L(nn, "commandKeyValue", function () {
        return mn(this).hx
    });
    M(nn, "charCodeValue", function (a) {
        mn(this).fx = S(a, "uint")
    });
    M(nn, "keyCodeValue", function (a) {
        mn(this).Ix = S(a, "uint")
    });
    M(nn, "keyLocationValue", function (a) {
        mn(this).Jx = S(a, "uint")
    });
    M(nn, "ctrlKeyValue", function (a) {
        mn(this).lx = S(a, "Boolean")
    });
    M(nn, "altKeyValue", function (a) {
        mn(this).bx = S(a, "Boolean")
    });
    M(nn, "shiftKeyValue", function (a) {
        mn(this).py = S(a, "Boolean")
    });
    M(nn, "controlKeyValue", function (a) {
        mn(this).jx = S(a, "Boolean")
    });
    M(nn, "commandKeyValue", function (a) {
        mn(this).hx = S(a, "Boolean")
    });
    K(nn, "updateAfterEvent", function () {
        R(this, "updateAfterEvent")
    });
    Object.defineProperties(nn, {
        KEY_DOWN: {
            value: "keyDown"
        },
        KEY_UP: {
            value: "keyUp"
        }
    });
    var on = N(function (a, b, c, d) {
        Fm.call(this, a, b, c);
        this.info = l(d) ? d : null
    }, "flash.events.NetStatusEvent", Fm);
    L(on, "info", function () {
        return this.__swiffy_v.info
    });
    M(on, "info", function (a) {
        this.__swiffy_v.info = S(a, "Object")
    });
    Object.defineProperty(on, "NET_STATUS", {
        value: "netStatus"
    });
    var pn = rl(2012);
    pn.n = N(pn, "flash.external.ExternalInterface");
    Q(pn.n, "available", !0);
    P(pn.n, "marshallExceptions", "Boolean", !1);
    Object.defineProperty(pn.n, "objectID", {
        get: function () {
            return cj.a.getName()
        }
    });
    pn.n.addCallback = function (a, b) {
        a = S(a, "String");
        b = S(b, "Function");
        var c = cj.a.td,
            d = c[a];
        if (!d || d.__swiffy_external) b ? (d = pn.Yt(b), Object.defineProperty(d, "__swiffy_external", {
            value: !0
        }), c[a] = d) : delete c[a]
    };
    pn.Yt = function (a) {
        return function () {
            try {
                var b = pn.Nq(arguments),
                    c = a.apply(null, b);
                return pn.ck(c)
            } catch (d) {
                if (pn.n.marshallExceptions) throw Error("Error calling method on Swiffy.");
                return null
            }
        }
    };
    pn.n.call = function (a, b) {
        a = S(a, "String");
        try {
            var c = pn.Lq(Array.prototype.slice.call(arguments, 1)),
                d = (new Function("return (" + a + ")(" + c + ");"))();
            return pn.ck(d)
        } catch (e) {
            if (pn.n.marshallExceptions) throw new Wf(new nm(e));
            return null
        }
    };
    pn.Lq = function (a) {
        a = a.map(pn.ps);
        return a.join(",")
    };
    pn.ps = function (a) {
        switch (da(a)) {
        case "undefined":
        case "null":
        case "boolean":
        case "number":
            return String(a);
        case "string":
            return ya(a);
        case "array":
            return "[" + pn.Lq(a) + "]";
        case "object":
            if (a instanceof Date) return "new Date(" + a.getTime() + ")";
            var b = [],
                c;
            for (c in a) b.push(ya(c) + ":" + pn.ps(a[c]));
            return "{" + b.join(",") + "}";
        default:
            return "null"
        }
    };
    pn.Nq = function (a) {
        return Ea(a, pn.ck)
    };
    pn.ck = function (a) {
        switch (da(a)) {
        case "undefined":
        case "null":
        case "boolean":
        case "number":
        case "string":
            return a;
        case "array":
            return pn.Nq(a);
        case "object":
            if (a instanceof Date) a = new Date(a.getTime());
            else {
                var b = pn.ck,
                    c = {}, d;
                for (d in a) c[d] = b.call(void 0, a[d], d, a);
                a = c
            }
            return a;
        default:
            return null
        }
    };
    var qn = function (a, b, c, d, e, f, h, k) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 1);
        c = S(c, "Number", 1);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        h = S(h, "Number", 0);
        k = S(k, "Number", 0);
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new Uc(a, e, b, f, c, h, d, k)
        })
    };
    N(qn, "flash.geom.ColorTransform");
    var rn = function (a) {
        return new qn(a.W, a.U, a.T, a.H, a.O, a.N, a.K, a.P)
    };
    Object.defineProperty(qn.prototype, "redMultiplier", {
        get: function () {
            return this.__swiffy_v.W
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(a, b.O, b.U, b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "greenMultiplier", {
        get: function () {
            return this.__swiffy_v.U
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, a, b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "blueMultiplier", {
        get: function () {
            return this.__swiffy_v.T
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, a, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "alphaMultiplier", {
        get: function () {
            return this.__swiffy_v.H
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, b.K, a, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "redOffset", {
        get: function () {
            return this.__swiffy_v.O
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, a, b.U, b.N, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "greenOffset", {
        get: function () {
            return this.__swiffy_v.N
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, a, b.T, b.K, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "blueOffset", {
        get: function () {
            return this.__swiffy_v.K
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, a, b.H, b.P)
        }
    });
    Object.defineProperty(qn.prototype, "alphaOffset", {
        get: function () {
            return this.__swiffy_v.P
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(b.W, b.O, b.U, b.N, b.T, b.K, b.H, a)
        }
    });
    Object.defineProperty(qn.prototype, "color", {
        get: function () {
            return (this.__swiffy_v.O << 16 | this.__swiffy_v.N << 8 | this.__swiffy_v.K) >>> 0
        },
        set: function (a) {
            a = S(a, "uint");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Uc(0, a >> 16 & 255, 0, a >> 8 & 255, 0, a & 255, b.H, b.P)
        }
    });
    qn.prototype.concat = function (a) {
        a = S(a, "flash.geom.ColorTransform");
        this.__swiffy_v = this.__swiffy_v.zm(a.__swiffy_v)
    };
    qn.prototype.toString = function () {
        return "(redMultiplier=" + this.__swiffy_v.W + ", greenMultiplier=" + this.__swiffy_v.U + ", blueMultiplier=" + this.__swiffy_v.T + ", alphaMultiplier=" + this.__swiffy_v.H + ", redOffset=" + this.__swiffy_v.O + ", greenOffset=" + this.__swiffy_v.N + ", blueOffset=" + this.__swiffy_v.K + ", alphaOffset=" + this.__swiffy_v.P + ")"
    };
    var Bm = function (a, b) {
        a = S(a, "Number", 0);
        b = S(b, "Number", 0);
        P(this, "x", "Number", a);
        P(this, "y", "Number", b)
    }, sn = N(Bm, "flash.geom.Point");
    Object.defineProperty(Bm.prototype, "length", {
        get: function () {
            return Qc(this.x, this.y)
        }
    });
    Bm.prototype.add = function (a) {
        return new Bm(this.x + a.x, this.y + a.y)
    };
    Bm.prototype.clone = function () {
        return new Bm(this.x, this.y)
    };
    Bm.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y
    };
    sn.distance = function (a, b) {
        return Qc(a.x - b.x, a.y - b.y)
    };
    Bm.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y
    };
    sn.interpolate = function (a, b, c) {
        return new Bm(a.x * c + b.x * (1 - c), a.y * c + b.y * (1 - c))
    };
    Bm.prototype.normalize = function (a) {
        a /= this.length;
        this.x *= a;
        this.y *= a
    };
    Bm.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    sn.polar = function (a, b) {
        return new Bm(a * Math.cos(b), a * Math.sin(b))
    };
    Bm.prototype.setTo = function (a, b) {
        this.x = a;
        this.y = b
    };
    Bm.prototype.subtract = function (a) {
        return new Bm(this.x - a.x, this.y - a.y)
    };
    Bm.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ")"
    };
    var W = function (a, b, c, d) {
        a = S(a, "Number", 0);
        b = S(b, "Number", 0);
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        P(this, "x", "Number", a);
        P(this, "y", "Number", b);
        P(this, "width", "Number", c);
        P(this, "height", "Number", d)
    };
    N(W, "flash.geom.Rectangle");
    Object.defineProperty(W.prototype, "top", {
        get: function () {
            return this.y
        },
        set: function (a) {
            this.y = S(a, "Number")
        }
    });
    Object.defineProperty(W.prototype, "left", {
        get: function () {
            return this.x
        },
        set: function (a) {
            this.x = S(a, "Number")
        }
    });
    Object.defineProperty(W.prototype, "bottom", {
        get: function () {
            return this.y + this.height
        },
        set: function (a) {
            a = S(a, "Number");
            this.height = a - this.y
        }
    });
    Object.defineProperty(W.prototype, "right", {
        get: function () {
            return this.x + this.width
        },
        set: function (a) {
            a = S(a, "Number");
            this.width = a - this.x
        }
    });
    Object.defineProperty(W.prototype, "topLeft", {
        get: function () {
            return new Bm(this.left, this.top)
        },
        set: function (a) {
            a = S(a, "flash.geom.Point");
            this.left = a.x;
            this.top = a.y
        }
    });
    Object.defineProperty(W.prototype, "bottomRight", {
        get: function () {
            return new Bm(this.right, this.bottom)
        },
        set: function (a) {
            a = S(a, "flash.geom.Point");
            this.right = a.x;
            this.bottom = a.y
        }
    });
    Object.defineProperty(W.prototype, "size", {
        get: function () {
            return new Bm(this.width, this.height)
        },
        set: function (a) {
            a = S(a, "flash.geom.Point");
            this.width = a.x;
            this.height = a.y
        }
    });
    W.prototype.clone = function () {
        return new W(this.x, this.y, this.width, this.height)
    };
    W.prototype.contains = function (a, b) {
        return this.x <= a && this.y <= b && a < this.right && b < this.bottom
    };
    W.prototype.containsPoint = function (a) {
        return this.contains(a.x, a.y)
    };
    W.prototype.containsRect = function (a) {
        var b = this.right,
            c = this.bottom,
            d = a.right,
            e = a.bottom;
        return this.x <= a.x && this.y <= a.y && a.x < b && a.y < c && this.x < d && this.y < e && d <= b && e <= c
    };
    W.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height
    };
    W.prototype.equals = function (a) {
        return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
    };
    W.prototype.inflate = function (a, b) {
        this.x -= a;
        this.y -= b;
        this.width += 2 * a;
        this.height += 2 * b
    };
    W.prototype.inflatePoint = function (a) {
        this.inflate(a.x, a.y)
    };
    W.prototype.intersection = function (a) {
        if (this.intersects(a)) {
            var b = Math.max(this.x, a.x),
                c = Math.max(this.y, a.y),
                d = Math.min(this.right, a.right);
            a = Math.min(this.bottom, a.bottom);
            return new W(b, c, d - b, a - c)
        }
        return new W
    };
    W.prototype.intersects = function (a) {
        return 0 < a.width && 0 < a.height && 0 < this.width && 0 < this.height && a.x < this.right && a.y < this.bottom && a.right > this.x && a.bottom > this.y
    };
    W.prototype.isEmpty = function () {
        return 0 >= this.width || 0 >= this.height
    };
    W.prototype.offset = function (a, b) {
        this.x += a;
        this.y += b
    };
    W.prototype.offsetPoint = function (a) {
        this.offset(a.x, a.y)
    };
    W.prototype.setEmpty = function () {
        this.height = this.width = this.y = this.x = 0
    };
    W.prototype.setTo = function (a, b, c, d) {
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d
    };
    W.prototype.union = function (a) {
        if (this.isEmpty()) return a.clone();
        if (a.isEmpty()) return this.clone();
        var b = Math.min(this.x, a.x),
            c = Math.min(this.y, a.y),
            d = Math.max(this.right, a.right);
        a = Math.max(this.bottom, a.bottom);
        return new W(b, c, d - b, a - c)
    };
    W.prototype.toString = function () {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")"
    };
    var tn = function (a, b, c, d) {
        this.w = l(d) ? Number(d) : 0;
        this.x = l(a) ? Number(a) : 0;
        this.y = l(b) ? Number(b) : 0;
        this.z = l(c) ? Number(c) : 0
    }, un = N(tn, "flash.geom.Vector3D");
    Object.defineProperty(tn.prototype, "lengthSquared", {
        get: function () {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
    });
    Object.defineProperty(tn.prototype, "length", {
        get: function () {
            return Math.sqrt(this.lengthSquared)
        }
    });
    Object.defineProperty(un, "X_AXIS", {
        value: new tn(1, 0, 0, 0)
    });
    Object.defineProperty(un, "Y_AXIS", {
        value: new tn(0, 1, 0, 0)
    });
    Object.defineProperty(un, "Z_AXIS", {
        value: new tn(0, 0, 1, 0)
    });
    tn.prototype.add = function (a) {
        return new tn(this.x + a.x, this.y + a.y, this.z + a.z)
    };
    un.angleBetween = function () {
        return 0
    };
    tn.prototype.clone = function () {
        return new tn(this.x, this.y, this.z, this.w)
    };
    tn.prototype.copyFrom = function (a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w
    };
    tn.prototype.crossProduct = function () {
        return new tn
    };
    tn.prototype.decrementBy = function () {};
    un.distance = function (a, b) {
        return a.subtract(b).length
    };
    tn.prototype.dotProduct = function () {
        return 0
    };
    tn.prototype.equals = function (a, b) {
        return this.x == a.x && this.y == a.y && this.z == a.z && (!b || this.w == a.w)
    };
    tn.prototype.incrementBy = function () {};
    tn.prototype.nearEquals = function () {
        return !1
    };
    tn.prototype.negate = function () {};
    tn.prototype.normalize = function () {
        return 0
    };
    tn.prototype.project = function () {};
    tn.prototype.scaleBy = function () {};
    tn.prototype.setTo = function (a, b, c) {
        this.x = Number(a);
        this.y = Number(b);
        this.z = Number(c)
    };
    tn.prototype.subtract = function (a) {
        return new tn(this.x - a.x, this.y - a.y, this.z - a.z)
    };
    tn.prototype.toString = function () {
        return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")"
    };
    var vn = function (a, b, c, d, e, f) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 0);
        c = S(c, "Number", 0);
        d = S(d, "Number", 1);
        e = S(e, "Number", 0);
        f = S(f, "Number", 0);
        Object.defineProperty(this, "__swiffy_v", {
            writable: !0,
            value: new Rc(a, b, c, d, e, f)
        })
    };
    N(vn, "flash.geom.Matrix");
    var wn = function (a) {
        return new vn(a.k, a.o, a.h, a.g, a.i / 20, a.j / 20)
    };
    Object.defineProperty(vn.prototype, "a", {
        get: function () {
            return this.__swiffy_v.k
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(a, b.o, b.h, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(vn.prototype, "b", {
        get: function () {
            return this.__swiffy_v.o
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, a, b.h, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(vn.prototype, "c", {
        get: function () {
            return this.__swiffy_v.h
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, b.o, a, b.g, b.i, b.j)
        }
    });
    Object.defineProperty(vn.prototype, "d", {
        get: function () {
            return this.__swiffy_v.g
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = new Rc(b.k, b.o, b.h, a, b.i, b.j)
        }
    });
    Object.defineProperty(vn.prototype, "tx", {
        get: function () {
            return this.__swiffy_v.i
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.cd(a, b.j)
        }
    });
    Object.defineProperty(vn.prototype, "ty", {
        get: function () {
            return this.__swiffy_v.j
        },
        set: function (a) {
            a = S(a, "Number");
            var b = this.__swiffy_v;
            this.__swiffy_v = b.cd(b.i, a)
        }
    });
    vn.prototype.clone = function () {
        var a = new vn;
        a.__swiffy_v = this.__swiffy_v;
        return a
    };
    vn.prototype.concat = function (a) {
        a = S(a, "flash.geom.Matrix");
        this.__swiffy_v = this.__swiffy_v.multiply(a.__swiffy_v)
    };
    vn.prototype.copyColumnFrom = function (a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.k,
            d = this.__swiffy_v.o,
            e = this.__swiffy_v.h,
            f = this.__swiffy_v.g,
            h = this.__swiffy_v.i,
            k = this.__swiffy_v.j;
        switch (a) {
        case 0:
            c = b.x;
            d = b.y;
            break;
        case 1:
            e = b.x;
            f = b.y;
            break;
        case 2:
            h = b.x;
            k = b.y;
            break;
        default:
            return
        }
        this.__swiffy_v = new Rc(c, d, e, f, h, k)
    };
    vn.prototype.copyColumnTo = function (a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        switch (a) {
        case 0:
            b.x = this.__swiffy_v.k;
            b.y = this.__swiffy_v.o;
            b.z = 0;
            break;
        case 1:
            b.x = this.__swiffy_v.h;
            b.y = this.__swiffy_v.g;
            b.z = 0;
            break;
        case 2:
            b.x = this.__swiffy_v.i, b.y = this.__swiffy_v.j, b.z = 1
        }
    };
    vn.prototype.copyFrom = function (a) {
        a = S(a, "flash.geom.Matrix");
        this.__swiffy_v = a.__swiffy_v
    };
    vn.prototype.copyRowFrom = function (a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        var c = this.__swiffy_v.k,
            d = this.__swiffy_v.o,
            e = this.__swiffy_v.h,
            f = this.__swiffy_v.g,
            h = this.__swiffy_v.i,
            k = this.__swiffy_v.j;
        switch (a) {
        case 0:
            c = b.x;
            e = b.y;
            h = b.z;
            break;
        case 1:
            d = b.x;
            f = b.y;
            k = b.z;
            break;
        default:
            return
        }
        this.__swiffy_v = new Rc(c, d, e, f, h, k)
    };
    vn.prototype.copyRowTo = function (a, b) {
        a = S(a, "uint");
        b = S(b, "flash.geom.Vector3D");
        switch (a) {
        case 0:
            b.x = this.__swiffy_v.k;
            b.y = this.__swiffy_v.h;
            b.z = this.__swiffy_v.i;
            break;
        case 1:
            b.x = this.__swiffy_v.h;
            b.y = this.__swiffy_v.g;
            b.z = this.__swiffy_v.j;
            break;
        case 2:
            b.x = 0, b.y = 0, b.z = 1
        }
    };
    vn.prototype.createBox = function (a, b, c, d, e) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        e = S(e, "Number", 0);
        this.__swiffy_v = Sc.Zg(-c).Vd(a, b).translate(d, e)
    };
    vn.prototype.createGradientBox = function (a, b, c, d, e) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number", 0);
        d = S(d, "Number", 0);
        e = S(e, "Number", 0);
        this.__swiffy_v = Sc.Zg(-c).Vd(a / 1638.4, b / 1638.4).translate(a / 2 + d, b / 2 + e)
    };
    vn.prototype.deltaTransformPoint = function (a) {
        a = S(a, "flash.geom.Point");
        return new Bm(this.__swiffy_v.k * a.x + this.__swiffy_v.h * a.y, this.__swiffy_v.o * a.x + this.__swiffy_v.g * a.y)
    };
    vn.prototype.identity = function () {
        this.__swiffy_v = Sc
    };
    vn.prototype.invert = function () {
        this.__swiffy_v = this.__swiffy_v.Bc()
    };
    vn.prototype.rotate = function (a) {
        a = S(a, "Number");
        this.__swiffy_v = this.__swiffy_v.Zg(-a)
    };
    vn.prototype.scale = function (a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_v = this.__swiffy_v.Vd(a, b)
    };
    vn.prototype.setTo = function (a, b, c, d, e, f) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        e = S(e, "Number");
        f = S(f, "Number");
        this.__swiffy_v = new Rc(a, b, c, d, e, f)
    };
    vn.prototype.transformPoint = function (a) {
        a = S(a, "flash.geom.Point");
        return new Bm(this.__swiffy_v.k * a.x + this.__swiffy_v.h * a.y + this.__swiffy_v.i, this.__swiffy_v.o * a.x + this.__swiffy_v.g * a.y + this.__swiffy_v.j)
    };
    vn.prototype.translate = function (a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_v = this.__swiffy_v.translate(a, b)
    };
    vn.prototype.toString = function () {
        return "(a=" + this.__swiffy_v.k + ", b=" + this.__swiffy_v.o + ", c=" + this.__swiffy_v.h + ", d=" + this.__swiffy_v.g + ", tx=" + this.__swiffy_v.i + ", ty=" + this.__swiffy_v.j + ")"
    };
    var xn = function (a) {
        a = S(a, "flash.display.DisplayObject");
        Object.defineProperty(this, "__swiffy_d", {
            value: a.__swiffy_d
        })
    };
    N(xn, "flash.geom.Transform");
    Object.defineProperty(xn.prototype, "colorTransform", {
        get: function () {
            return rn(this.__swiffy_d.tb)
        },
        set: function (a) {
            a = S(a, "flash.geom.ColorTransform");
            var b = this.__swiffy_d;
            b.hc(a.__swiffy_v);
            b.Ca()
        }
    });
    Object.defineProperty(xn.prototype, "concatenatedColorTransform", {
        get: function () {
            return rn(this.__swiffy_d.Eb())
        }
    });
    Object.defineProperty(xn.prototype, "concatenatedMatrix", {
        get: function () {
            return wn(this.__swiffy_d.qa())
        }
    });
    Object.defineProperty(xn.prototype, "matrix", {
        get: function () {
            return wn(this.__swiffy_d.Z())
        },
        set: function (a) {
            a = S(a, "flash.geom.Matrix");
            var b = this.__swiffy_d;
            a = a.__swiffy_v;
            b.setTransform(a.cd(20 * a.i, 20 * a.j));
            b.Ca()
        }
    });
    Object.defineProperty(xn.prototype, "pixelBounds", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.Ua().Wc().G();
            b.u(a.qa());
            return new W(Math.floor(b.d / 20), Math.floor(b.e / 20), Math.ceil((b.D - b.d) / 20), Math.ceil((b.C - b.e) / 20))
        }
    });
    var yn = N(rl(1001), "flash.display.IBitmapDrawable");
    yn.n = yn;
    Zk(yn.n);
    var zn = N(function () {}, "flash.display.PixelSnapping");
    Object.defineProperties(zn, {
        ALWAYS: {
            value: "always"
        },
        AUTO: {
            value: "auto"
        },
        NEVER: {
            value: "never"
        }
    });
    var U = function (a, b, c, d) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "Boolean", !0);
        d = S(d, "uint", 4294967295);
        this.__swiffy_d.lb(a, b, c, d)
    };
    N(U, "flash.display.BitmapData", fl, [yn]);
    Object.defineProperty(U.prototype, "width", {
        get: function () {
            return this.__swiffy_d.ka()
        }
    });
    Object.defineProperty(U.prototype, "height", {
        get: function () {
            return this.__swiffy_d.jb()
        }
    });
    Object.defineProperty(U.prototype, "rect", {
        get: function () {
            return new W(0, 0, this.__swiffy_d.ka(), this.__swiffy_d.jb())
        }
    });
    Object.defineProperty(U.prototype, "transparent", {
        get: function () {
            return this.__swiffy_d.Mc
        }
    });
    U.prototype.applyFilter = function () {
        R(this, "applyFilter")
    };
    U.prototype.clone = function () {
        R(this, "clone");
        return null
    };
    U.prototype.colorTransform = function (a, b) {
        S(a, "flash.geom.Rectangle");
        S(b, "flash.geom.ColorTransform");
        R(this, "colorTransform")
    };
    U.prototype.compare = function (a) {
        S(a, "flash.display.BitmapData");
        R(this, "compare");
        return 0
    };
    U.prototype.copyChannel = function (a, b, c, d, e) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "uint");
        S(e, "uint");
        R(this, "copyChannel")
    };
    U.prototype.copyPixels = function (a, b, c, d, e, f) {
        a = S(a, "flash.display.BitmapData");
        b = S(b, "flash.geom.Rectangle");
        c = S(c, "flash.geom.Point");
        d = S(d, "flash.display.BitmapData", null);
        e = S(e, "flash.geom.Point", null);
        f = S(f, "Boolean", !1);
        this.__swiffy_d.ss(a.__swiffy_d, b.x, b.y, b.width, b.height, c.x, c.y, d ? d.__swiffy_d : null, (e || b).x, (e || b).y, f)
    };
    U.prototype.copyPixelsToByteArray = function (a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "flash.utils.ByteArray");
        var c = this.__swiffy_d.yx(a.x, a.y, a.width, a.height, b.endian == An.LITTLE_ENDIAN),
            d = c.byteLength,
            e = void 0 === d;
        e && (d = c.length);
        if (0 != d) {
            var f = Bn(b, d);
            if (e)
                for (e = 0; e < d; ++e) f[e] = c[e];
            else f.set(new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
        }
    };
    U.prototype.dispose = function () {
        this.__swiffy_d.Nk()
    };
    U.prototype.draw = function () {
        R(this, "draw")
    };
    U.prototype.drawWithQuality = function (a, b, c, d, e, f, h) {
        S(a, "flash.display.IBitmapDrawable");
        S(b, "flash.geom.Matrix", null);
        S(c, "flash.geom.ColorTransform", null);
        S(d, "String", null);
        S(e, "flash.geom.Rectangle", null);
        S(f, "Boolean", !1);
        S(h, "String", null);
        R(this, "drawWithQuality")
    };
    U.prototype.encode = function (a, b, c) {
        S(a, "flash.geom.Rectangle");
        S(b, "Object");
        S(c, "flash.utils.ByteArray", null);
        R(this, "encode");
        return new X
    };
    U.prototype.fillRect = function (a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "uint");
        this.__swiffy_d.fillRect(a.x, a.y, a.width, a.height, b)
    };
    U.prototype.floodFill = function (a, b, c) {
        S(a, "int");
        S(b, "int");
        S(c, "uint");
        R(this, "floodFill")
    };
    U.prototype.generateFilterRect = function (a, b) {
        S(a, "flash.geom.Rectangle");
        S(b, "flash.filters.BitmapFilter");
        R(this, "generateFilterRect");
        return new W
    };
    U.prototype.getColorBoundsRect = function (a, b, c) {
        S(a, "uint");
        S(b, "uint");
        S(c, "Boolean", !0);
        R(this, "getColorBoundsRect");
        return new W
    };
    U.prototype.getPixel = function (a, b) {
        a = S(a, "int");
        b = S(b, "int");
        return this.__swiffy_d.xx(a, b)
    };
    U.prototype.getPixel32 = function (a, b) {
        a = S(a, "int");
        b = S(b, "int");
        return this.__swiffy_d.Mn(a, b)
    };
    U.prototype.getPixels = function (a) {
        var b = new X;
        this.copyPixelsToByteArray(a, b);
        return b
    };
    U.prototype.getVector = function (a) {
        a = S(a, "flash.geom.Rectangle");
        a = this.__swiffy_d.zx(a.x, a.y, a.width, a.height);
        return Cn(Dn, a)
    };
    U.prototype.histogram = function (a) {
        S(a, "flash.geom.Rectangle", null);
        R(this, "histogram");
        return Cn(En(Fn, !1, !1))
    };
    U.prototype.hitTest = function (a, b, c, d, e) {
        S(a, "flash.geom.Point");
        S(b, "uint");
        S(c, "Object");
        S(d, "flash.geom.Point", null);
        S(e, "uint", 1);
        R(this, "hitTest");
        return !1
    };
    U.prototype.lock = function () {
        R(this, "lock");
        this.__swiffy_d.Lx()
    };
    U.prototype.merge = function (a, b, c, d, e, f, h) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "uint");
        S(e, "uint");
        S(f, "uint");
        S(h, "uint");
        R(this, "merge")
    };
    U.prototype.noise = function (a, b, c, d, e) {
        S(a, "int");
        S(b, "uint", 0);
        S(c, "uint", 255);
        S(d, "uint", 7);
        S(e, "Boolean", !1);
        R(this, "noise")
    };
    U.prototype.paletteMap = function (a, b, c, d, e, f, h) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "Array", null);
        S(e, "Array", null);
        S(f, "Array", null);
        S(h, "Array", null);
        R(this, "paletteMap")
    };
    U.prototype.perlinNoise = function (a, b, c, d, e, f, h, k, n) {
        S(a, "Number");
        S(b, "Number");
        S(c, "uint");
        S(d, "int");
        S(e, "Boolean");
        S(f, "Boolean");
        S(h, "uint", 7);
        S(k, "Boolean", !1);
        S(n, "Array", null);
        R(this, "perlinNoise")
    };
    U.prototype.pixelDissolve = function (a, b, c, d, e, f) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "int", 0);
        S(e, "int", 0);
        S(f, "uint", 0);
        R(this, "pixelDissolve");
        return 0
    };
    U.prototype.scroll = function (a, b) {
        a = S(a, "int");
        b = S(b, "int");
        this.__swiffy_d.scroll(a, b)
    };
    U.prototype.setPixel = function (a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "uint");
        this.__swiffy_d.iy(a, b, c)
    };
    U.prototype.setPixel32 = function (a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "uint");
        this.__swiffy_d.Qn(a, b, c)
    };
    U.prototype.setPixels = function (a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = S(b, "flash.utils.ByteArray");
        var c = a.width,
            d = a.height,
            e = c * d * 4,
            f = Gn(b),
            h = f.position;
        e + h > f.ja.length && (e = f.ja.length - h, 0 >= e && (h = 0));
        h = new Uint8Array(f.ja.buffer, h, e);
        f.position += e;
        this.__swiffy_d.Jv(a.x, a.y, c, d, h, b.endian == An.LITTLE_ENDIAN)
    };
    U.prototype.setVector = function (a, b) {
        a = S(a, "flash.geom.Rectangle");
        b = ul(b, Dn);
        this.__swiffy_d.jy(a.x, a.y, a.width, a.height, b.__swiffy_v)
    };
    U.prototype.threshold = function (a, b, c, d, e, f, h, k) {
        S(a, "flash.display.BitmapData");
        S(b, "flash.geom.Rectangle");
        S(c, "flash.geom.Point");
        S(d, "String");
        S(e, "uint");
        S(f, "uint", 0);
        S(h, "uint", 4294967295);
        S(k, "Boolean", !1);
        R(this, "threshold");
        return 0
    };
    U.prototype.unlock = function (a) {
        S(a, "flash.geom.Rectangle", null);
        this.__swiffy_d.ry()
    };
    Ci(U, function (a, b) {
        return new Ye(We, a, b)
    });
    var Hn = N(function () {}, "flash.display.BitmapDataChannel");
    Object.defineProperties(Hn, {
        ALPHA: {
            value: 8
        },
        BLUE: {
            value: 4
        },
        GREEN: {
            value: 2
        },
        RED: {
            value: 1
        }
    });
    var In = N(function () {}, "flash.display.CapsStyle");
    Q(In, "NONE", "none");
    Q(In, "ROUND", "round");
    Q(In, "SQUARE", "square");
    var Jn = N(function () {}, "flash.display.LineScaleMode");
    Q(Jn, "HORIZONTAL", "horizontal");
    Q(Jn, "NONE", "none");
    Q(Jn, "NORMAL", "normal");
    Q(Jn, "VERTICAL", "vertical");
    var Kn = N(function () {}, "flash.display.JointStyle");
    Q(Kn, "BEVEL", "bevel");
    Q(Kn, "MITER", "miter");
    Q(Kn, "ROUND", "round");
    var Ql = function () {
        if (!this.__swiffy_d) throw I(2012, Ek(this).localName);
        T.call(this);
        this.Na = [];
        this.Br = null
    };
    N(Ql, "flash.display.DisplayObject", T, [yn]);
    an(Ql, "enterFrame", "exitFrame");
    Object.defineProperty(Ql.prototype, "x", {
        get: function () {
            return this.__swiffy_d.Z().i / 20
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.Z();
            b.setTransform(c.translate(20 * a - c.i, 0));
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "y", {
        get: function () {
            return this.__swiffy_d.Z().j / 20
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.Z();
            b.setTransform(c.translate(0, 20 * a - c.j));
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "alpha", {
        get: function () {
            return (256 * this.__swiffy_d.tb.H | 0) / 256
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = b.tb;
            b.hc(new Uc(c.W, c.O, c.U, c.N, c.T, c.K, a, c.P));
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "visible", {
        get: function () {
            return this.__swiffy_d.Fe
        },
        set: function (a) {
            this.__swiffy_d.pj(Boolean(a))
        }
    });
    Object.defineProperty(Ql.prototype, "rotation", {
        get: function () {
            return -180 * this.__swiffy_d.yc().angle / Math.PI
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.yc().angle = -a * Math.PI / 180;
            b.Jg();
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "width", {
        get: function () {
            return this.__swiffy_d.ka()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.nn(Number(a));
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "height", {
        get: function () {
            return this.__swiffy_d.jb()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.mn(Number(a));
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "scaleX", {
        get: function () {
            return this.__swiffy_d.yc().zd
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.yc().zd = a;
            b.Jg();
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "scaleY", {
        get: function () {
            return this.__swiffy_d.yc().Je
        },
        set: function (a) {
            var b = this.__swiffy_d;
            b.yc().Je = a;
            b.Jg();
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "mouseX", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.a.jc.G();
            b.u(a.fc());
            return b.x / 20
        }
    });
    Object.defineProperty(Ql.prototype, "mouseY", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.a.jc.G();
            b.u(a.fc());
            return b.y / 20
        }
    });
    Object.defineProperty(Ql.prototype, "root", {
        get: function () {
            for (var a = this.__swiffy_d; a && !a.Hi && a != a.a.B;)
                if (a.getParent())
                    if (a == a.a.Pa) break;
                    else a = a.getParent();
                    else a = null;
            return a ? a.r : null
        }
    });
    Object.defineProperty(Ql.prototype, "parent", {
        get: function () {
            var a = this.__swiffy_d.getParent();
            return a ? a.r : null
        }
    });
    Object.defineProperty(Ql.prototype, "name", {
        get: function () {
            return this.__swiffy_d.getName()
        },
        set: function (a) {
            this.__swiffy_d.Kb(a)
        }
    });
    Object.defineProperty(Ql.prototype, "loaderInfo", {
        get: function () {
            return this.__swiffy_d.Pl().Wf
        }
    });
    Object.defineProperty(Ql.prototype, "stage", {
        get: function () {
            var a = this.__swiffy_d;
            return this.root ? a.a.B.r : null
        }
    });
    Object.defineProperty(Ql.prototype, "transform", {
        get: function () {
            return new xn(this)
        },
        set: function (a) {
            a = S(a, "flash.geom.Transform");
            a = a.__swiffy_d;
            var b = this.__swiffy_d;
            b.setTransform(a.Z());
            b.hc(a.tb);
            b.Ca()
        }
    });
    Object.defineProperty(Ql.prototype, "filters", {
        get: function () {
            for (var a = [], b = this.__swiffy_d.Na, c = 0; c < b.length; c++) a.push(b[c].xf());
            return a
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Na = a;
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a[d].__swiffy_v;
                c.push(e ? e : new Ph)
            }
            b.Jf(c)
        }
    });
    Object.defineProperty(Ql.prototype, "mask", {
        get: function () {
            return this.Br
        },
        set: function (a) {
            a = S(a, "flash.display.DisplayObject");
            var b = this.__swiffy_d;
            this.Br = a;
            b.Qe(a.__swiffy_d)
        }
    });
    var Xl = function (a, b, c) {
        Ql.call(this);
        a && (this.bitmapData = a);
        this.pixelSnapping = b;
        this.smoothing = c
    }, Ei = N(Xl, "flash.display.Bitmap", Ql);
    Object.defineProperty(Xl.prototype, "bitmapData", {
        get: function () {
            var a = this.__swiffy_d.Ob;
            return a ? a.r : null
        },
        set: function (a) {
            a = S(a, "flash.display.BitmapData");
            this.__swiffy_d.Yx(a ? a.__swiffy_d : null)
        }
    });
    Object.defineProperty(Xl.prototype, "pixelSnapping", {
        get: function () {
            return this.__swiffy_d.Jr
        },
        set: function (a) {
            this.__swiffy_d.Jr = S(a, "String")
        }
    });
    Object.defineProperty(Xl.prototype, "smoothing", {
        get: function () {
            return this.__swiffy_d.Bk
        },
        set: function (a) {
            this.__swiffy_d.Bk = S(a, "Boolean")
        }
    });
    Ci(Xl, function (a, b) {
        return new Ze(null, a, b)
    });
    var Ln = function () {
        Ql.call(this);
        var a = this.__swiffy_d;
        a.Gc |= 127;
        a.xh();
        P(this, "focusRect", "Boolean", null)
    };
    N(Ln, "flash.display.InteractiveObject", Ql);
    Object.defineProperty(Ln.prototype, "tabIndex", {
        value: -1,
        writable: !0
    });
    Object.defineProperty(Ln.prototype, "tabEnabled", {
        value: !1,
        writable: !0
    });
    Object.defineProperty(Ln.prototype, "mouseEnabled", {
        get: function () {
            return this.__swiffy_d.sh
        },
        set: function (a) {
            return this.__swiffy_d.gy( !! a)
        }
    });
    Object.defineProperty(Ln.prototype, "doubleClickEnabled", {
        get: function () {
            return this.__swiffy_d.El
        },
        set: function (a) {
            return this.__swiffy_d.ay( !! a)
        }
    });
    var Mn = function (a, b, c, d) {
        a = new Pm(a, b, !1);
        b = Om(a);
        d.Te && (b.Te = d.Te.r);
        c instanceof Ql && (b.Oo = c.mouseX, b.Po = c.mouseY, c = c.__swiffy_d, b.Lo = c.a.jc.x / 20, b.Mo = c.a.jc.y / 20, b.No = c.a.Gf);
        return a
    }, Nn = function (a) {
            a = new Fm(a, !1, !1);
            Gm(a).Ak = !0;
            return a
        }, On = function (a) {
            return new Fm(a, !0, !1)
        }, Nl = {};
    Nl[27] = oa(On, Hm.ADDED, !0, !1);
    Nl[21] = oa(Nn, Hm.ADDED_TO_STAGE);
    Nl[28] = oa(On, Hm.REMOVED, !0, !1);
    Nl[26] = oa(Nn, Hm.REMOVED_FROM_STAGE);
    Nl[5] = oa(Nn, Hm.UNLOAD);
    Nl[11] = oa(Mn, Qm.CLICK, !0);
    Nl[25] = oa(Mn, Qm.DOUBLE_CLICK, !0);
    Nl[2] = oa(Mn, Qm.MOUSE_UP, !0);
    Nl[3] = oa(Mn, Qm.MOUSE_DOWN, !0);
    Nl[8] = oa(Mn, Qm.ROLL_OUT, !1);
    Nl[9] = oa(Mn, Qm.ROLL_OVER, !1);
    Nl[24] = oa(Mn, Qm.MOUSE_MOVE, !1);
    Nl[22] = oa(Mn, Qm.MOUSE_OUT, !1);
    Nl[23] = oa(Mn, Qm.MOUSE_OVER, !1);
    var Wl = function () {
        Ln.call(this);
        this.Nc = {}
    };
    N(Wl, "flash.display.SimpleButton", Ln);
    qi(Wl, new zi(0));
    Wl.prototype.enabled = !0;
    Wl.prototype.useHandCursor = !0;
    Object.defineProperty(Wl.prototype, "tabEnabled", {
        value: !0,
        writable: !0
    });
    Object.defineProperty(Wl.prototype, "upState", {
        get: function () {
            return this.Nc[1]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Nc[1] = a;
            b.Fk(1, a.__swiffy_d)
        }
    });
    Object.defineProperty(Wl.prototype, "overState", {
        get: function () {
            return this.Nc[2]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Nc[2] = a;
            b.Fk(2, a.__swiffy_d)
        }
    });
    Object.defineProperty(Wl.prototype, "downState", {
        get: function () {
            return this.Nc[4]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Nc[4] = a;
            b.Fk(4, a.__swiffy_d)
        }
    });
    Object.defineProperty(Wl.prototype, "hitTestState", {
        get: function () {
            return this.Nc[8]
        },
        set: function (a) {
            var b = this.__swiffy_d;
            this.Nc[8] = a;
            b.Fk(8, a.__swiffy_d)
        }
    });
    var Pn = function () {
        Ln.call(this)
    };
    N(Pn, "flash.display.DisplayObjectContainer", Ln);
    Object.defineProperty(Pn.prototype, "tabChildren", {
        value: !0,
        writable: !0
    });
    Object.defineProperty(Pn.prototype, "numChildren", {
        get: function () {
            return this.__swiffy_d.lk()
        }
    });
    Object.defineProperty(Ln.prototype, "mouseChildren", {
        get: function () {
            return this.__swiffy_d.vm
        },
        set: function (a) {
            return this.__swiffy_d.fy( !! a)
        }
    });
    Pn.prototype.addChild = function (a) {
        if (!a) throw I(2007, "child");
        var b = this.__swiffy_d;
        b.bf(a.__swiffy_d, b.lk())
    };
    Pn.prototype.addChildAt = function (a, b) {
        if (!a) throw I(2007, "child");
        this.__swiffy_d.bf(a.__swiffy_d, b | 0)
    };
    Pn.prototype.contains = function (a) {
        if (!a) throw I(2007, "child");
        return this.__swiffy_d.contains(a.__swiffy_d)
    };
    Pn.prototype.getChildAt = function (a) {
        return (a = this.__swiffy_d.gf(a | 0)) ? a.r : a
    };
    Pn.prototype.getChildByName = function (a) {
        return (a = this.__swiffy_d.fv(a)) ? a.r : a
    };
    Pn.prototype.getChildIndex = function (a) {
        return this.__swiffy_d.Tg(a.__swiffy_d)
    };
    Pn.prototype.removeChild = function (a) {
        if (!a) throw I(2007, "child");
        this.__swiffy_d.Nh(a.__swiffy_d)
    };
    Pn.prototype.removeChildAt = function (a) {
        var b = this.__swiffy_d;
        if (a = b.gf(a | 0)) return b.Nh(a), a.r
    };
    Pn.prototype.setChildIndex = function (a, b) {
        if (!a) throw I(2007, "child");
        this.__swiffy_d.bf(a.__swiffy_d, b | 0)
    };
    Pn.prototype.swapChildren = function (a, b) {
        if (!a || !b) throw I(2007, "child");
        this.swapChildrenAt(this.getChildIndex(a), this.getChildIndex(b))
    };
    Pn.prototype.swapChildrenAt = function (a, b) {
        var c = this.__swiffy_d,
            d = c.gf(a | 0),
            e = c.gf(b | 0);
        d && e && (c.bf(d, b | 0), c.bf(e, a | 0))
    };
    var Qn = rl(2012);
    Qn.n = N(Qn, "flash.display.Graphics");
    Qn.create = function (a) {
        var b = Object.create(Qn.prototype);
        Object.defineProperty(b, "__swiffy_d", {
            value: a
        });
        return b
    };
    Qn.prototype.beginBitmapFill = function (a, b, c, d) {
        S(b, "flash.geom.Matrix", null);
        S(c, "Boolean", !0);
        S(d, "Boolean", !1);
        R(this)
    };
    Qn.prototype.beginFill = function (a, b) {
        a = S(a, "uint");
        b = 100 * S(b, "Number", 1);
        this.__swiffy_d.Za("beginFill", [a, b])
    };
    Qn.prototype.beginGradientFill = function (a, b, c, d, e, f, h, k) {
        S(a, "String");
        S(b, "Array");
        S(c, "Array");
        S(d, "Array");
        S(e, "flash.geom.Matrix", null);
        S(f, "String", "pad");
        S(h, "String", "rgb");
        S(k, "Number", 0);
        R(this)
    };
    Qn.prototype.beginShaderFill = function (a, b) {
        S(b, "flash.geom.Matrix", null);
        R(this)
    };
    Qn.prototype.clear = function () {
        this.__swiffy_d.Za("clear")
    };
    Qn.prototype.copyFrom = function (a) {
        S(a, "flash.display.Graphics");
        R(this)
    };
    Qn.prototype.cubicCurveTo = function (a, b, c, d, e, f) {
        S(a, "Number");
        S(b, "Number");
        S(c, "Number");
        S(d, "Number");
        S(e, "Number");
        S(f, "Number");
        R(this)
    };
    Qn.prototype.curveTo = function (a, b, c, d) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        this.__swiffy_d.Za("curveTo", [a, b, c, d])
    };
    Qn.prototype.drawCircle = function (a, b, c) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        this.__swiffy_d.Za("drawEllipse", [a, b, c, c])
    };
    Qn.prototype.drawEllipse = function (a, b, c, d) {
        c = S(c, "Number") / 2;
        d = S(d, "Number") / 2;
        a = S(a, "Number") + c;
        b = S(b, "Number") + d;
        this.__swiffy_d.Za("drawEllipse", [a, b, c, d])
    };
    Qn.prototype.drawGraphicsData = function () {
        R(this)
    };
    Qn.prototype.drawPath = function (a, b, c) {
        S(c, "String", "evenOdd");
        R(this)
    };
    Qn.prototype.drawRect = function (a, b, c, d) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        this.__swiffy_d.Za("drawRect", [a, b, c, d])
    };
    Qn.prototype.drawRoundRect = function (a, b, c, d, e, f) {
        a = S(a, "Number");
        b = S(b, "Number");
        c = S(c, "Number");
        d = S(d, "Number");
        e = S(e, "Number");
        f = S(f, "Number", e);
        this.__swiffy_d.Za("drawRoundRect", [a, b, c, d, e, f])
    };
    Qn.prototype.drawTriangles = function (a, b, c, d) {
        S(d, "String", "none");
        R(this)
    };
    Qn.prototype.endFill = function () {
        this.__swiffy_d.Za("endFill")
    };
    Qn.prototype.lineBitmapStyle = function (a, b, c, d) {
        S(b, "flash.geom.Matrix", null);
        S(c, "Boolean", !0);
        S(d, "Boolean", !1);
        R(this)
    };
    Qn.prototype.lineGradientStyle = function (a, b, c, d, e, f, h, k) {
        S(a, "String");
        S(b, "Array");
        S(c, "Array");
        S(d, "Array");
        S(e, "flash.geom.Matrix", null);
        S(f, "String", "pad");
        S(h, "String", "rgb");
        S(k, "Number", 0);
        R(this)
    };
    Qn.prototype.lineShaderStyle = function (a, b) {
        S(b, "flash.geom.Matrix", null);
        R(this)
    };
    Qn.prototype.lineStyle = function (a, b, c, d, e, f, h, k) {
        l(a) && (a = S(a, "Number"));
        b = S(b, "uint", 0);
        c = 100 * S(c, "Number", 1);
        d = S(d, "Boolean", !1);
        e = S(e, "String", "normal");
        f = S(f, "String", "null");
        h = S(h, "String", "null");
        k = S(k, "Number", 3);
        this.__swiffy_d.Za("lineStyle", [a, b, c, d, e, f, h, k])
    };
    Qn.prototype.lineTo = function (a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_d.Za("lineTo", [a, b])
    };
    Qn.prototype.moveTo = function (a, b) {
        a = S(a, "Number");
        b = S(b, "Number");
        this.__swiffy_d.Za("moveTo", [a, b])
    };
    var Yl = function () {
        Ql.call(this);
        Q(this, "graphics", Qn.create(this.__swiffy_d))
    };
    N(Yl, "flash.display.Shape", Ql);
    Ci(Yl, function (a, b) {
        return new zf(a, b)
    });
    var Sl = function () {
        Ln.call(this);
        var a = this.__swiffy_d;
        a.Ms(!1);
        Q(this, "graphics", Qn.create(a))
    }, Rl = N(Sl, "flash.display.Sprite", Pn);
    qi(Sl, new Jf(0, 0, null, null));
    Object.defineProperty(Sl.prototype, "buttonMode", {
        set: function (a) {
            this.__swiffy_d.Ms(Boolean(a))
        },
        get: function () {
            return this.__swiffy_d.Xi
        }
    });
    Object.defineProperty(Sl.prototype, "soundTransform", {
        set: function (a) {
            S(a, "flash.media.SoundTransform");
            R(this, "soundTransform")
        },
        get: function () {
            R(this, "soundTransform");
            return new Rn
        }
    });
    Sl.prototype.useHandCursor = !0;
    Object.defineProperty(Sl.prototype, "tabEnabled", {
        get: function () {
            var a = this.__swiffy_d.uj;
            return l(a) ? a : this.buttonMode
        },
        set: function (a) {
            this.__swiffy_d.uj = a
        }
    });
    var Sn = N(function () {}, "flash.display.StageAlign");
    Q(Sn, "BOTTOM", "B");
    Q(Sn, "BOTTOM_LEFT", "BL");
    Q(Sn, "BOTTOM_RIGHT", "BR");
    Q(Sn, "LEFT", "L");
    Q(Sn, "RIGHT", "R");
    Q(Sn, "TOP", "T");
    Q(Sn, "TOP_LEFT", "TL");
    Q(Sn, "TOP_RIGHT", "TR");
    var Tn = N(function () {}, "flash.display.StageDisplayState");
    Object.defineProperties(Tn, {
        FULL_SCREEN: {
            value: "fullScreen"
        },
        FULL_SCREEN_INTERACTIVE: {
            value: "fullScreenInteractive"
        },
        NORMAL: {
            value: "normal"
        }
    });
    var Un = N(function () {}, "flash.display.StageQuality");
    Object.defineProperties(Un, {
        BEST: {
            value: "best"
        },
        HIGH: {
            value: "high"
        },
        HIGH_16X16: {
            value: "16x16"
        },
        HIGH_16X16_LINEAR: {
            value: "16x16linear"
        },
        HIGH_8X8: {
            value: "8x8"
        },
        HIGH_8X8_LINEAR: {
            value: "8x8linear"
        },
        LOW: {
            value: "low"
        },
        MEDIUM: {
            value: "medium"
        }
    });
    var Vn = N(function () {}, "flash.display.StageScaleMode");
    Q(Vn, "EXACT_FIT", "exactFit");
    Q(Vn, "NO_BORDER", "noBorder");
    Q(Vn, "NO_SCALE", "noScale");
    Q(Vn, "SHOW_ALL", "showAll");
    var Ul = function () {
        Ln.call(this);
        Q(this, "allowsFullScreen", !1);
        Q(this, "allowsFullScreenInteractive", !1);
        P(this, "autoOrients", "Boolean", !1);
        P(this, "color", "uint", 0);
        P(this, "colorCorrection", "String", "default");
        Q(this, "colorCorrectionSupport", "unsupported");
        Q(this, "contentsScaleFactor", 1);
        Q(this, "deviceOrientation", "unknown");
        P(this, "displayState", "String", Tn.NORMAL);
        P(this, "focus", "flash.display.InteractiveObject", null);
        P(this, "fullScreenSourceRect", "flash.geom.Rectangle", null);
        P(this, "mouseLock", "Boolean", !1);
        Q(this, "nativeWindow", null);
        Q(this, "orientation", "unknown");
        P(this, "quality", "String", Un.HIGH);
        P(this, "showDefaultContextMenu", "Boolean", !0);
        Q(this, "softKeyboardRect", new W(0, 0, 0, 0));
        Q(this, "stage3Ds", null);
        P(this, "stageFocusRect", "Boolean", !0);
        Q(this, "stageVideos", null);
        Q(this, "supportedOrientations", ["default"]);
        Q(this, "wmodeGPU", !1)
    }, Wn = N(Ul, "flash.display.Stage", Pn);
    Q(Wn, "supportsOrientationChange", !1);
    Ul.prototype.assignFocus = function (a, b) {
        S(a, "flash.display.InteractiveObject");
        S(b, "String");
        R(this)
    };
    Ul.prototype.invalidate = function () {
        R(this)
    };
    Ul.prototype.isFocusInaccessible = function () {
        R(this);
        return !1
    };
    Ul.prototype.setAspectRatio = function (a) {
        S(a, "String");
        R(this)
    };
    Ul.prototype.setOrientation = function (a) {
        S(a, "String");
        R(this)
    };
    Object.defineProperty(Ul.prototype, "stageWidth", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Jc ? a.Ac : a.ph
        },
        set: function () {}
    });
    Object.defineProperty(Ul.prototype, "stageHeight", {
        get: function () {
            var a = this.__swiffy_d;
            return "noScale" == a.Jc ? a.zc : a.oh
        },
        set: function () {}
    });
    Object.defineProperty(Ul.prototype, "fullScreenWidth", {
        get: function () {
            R(this);
            return this.stageWidth
        }
    });
    Object.defineProperty(Ul.prototype, "fullScreenHeight", {
        get: function () {
            R(this);
            return this.stageHeight
        }
    });
    Object.defineProperty(Ul.prototype, "frameRate", {
        get: function () {
            return this.__swiffy_d.a.fm().yp
        },
        set: function (a) {
            S(a, "Number");
            R(this)
        }
    });
    Object.defineProperty(Ul.prototype, "scaleMode", {
        get: function () {
            return this.__swiffy_d.Jc
        },
        set: function (a) {
            a = S(a, "String");
            var b = this.__swiffy_d;
            switch (a) {
            case "showAll":
            case "exactFit":
            case "noBorder":
            case "noScale":
                break;
            default:
                throw I(2008, "Property scaleMode");
            }
            b.Qs(a)
        }
    });
    Object.defineProperty(Ul.prototype, "align", {
        get: function () {
            var a = this.__swiffy_d.se,
                b = "";
            a & 2 && (b += "T");
            a & 8 && (b += "B");
            a & 1 && (b += "L");
            a & 4 && (b += "R");
            return b
        },
        set: function (a) {
            a = S(a, "String");
            this.__swiffy_d.Is(a)
        }
    });
    var Xn = N(function () {}, "flash.media.AudioDecoder");
    Object.defineProperties(Xn, {
        DOLBY_DIGITAL: {
            value: "DolbyDigital"
        },
        DOLBY_DIGITAL_PLUS: {
            value: "DolbyDigitalPlus"
        },
        DTS: {
            value: "DTS"
        },
        DTS_EXPRESS: {
            value: "DTSExpress"
        },
        DTS_HD_HIGH_RESOLUTION_AUDIO: {
            value: "DTSHDHighResolutionAudio"
        },
        DTS_HD_MASTER_AUDIO: {
            value: "DTSHDMasterAudio"
        }
    });
    var Rn = function (a, b) {
        a = S(a, "Number", 1);
        b = S(b, "Number", 0);
        P(this, "leftToLeft", "Number", 0);
        P(this, "leftToRight", "Number", 0);
        P(this, "pan", "Number", b);
        P(this, "rightToLeft", "Number", 0);
        P(this, "rightToRight", "Number", 0);
        P(this, "volume", "Number", a)
    };
    N(Rn, "flash.media.SoundTransform");
    var Yn = function (a, b) {
        Ql.call(this);
        S(a, "int", 320);
        S(b, "int", 240);
        this.deblocking = 0;
        this.smoothing = !1
    }, Zn = N(Yn, "flash.media.Video", Ql);
    qi(Yn, new Jf(0, 0, null, null));
    L(Zn, "deblocking", function () {
        return this.__swiffy_v.mx
    });
    M(Zn, "deblocking", function (a) {
        this.__swiffy_v.mx = S(a, "int")
    });
    L(Zn, "smoothing", function () {
        return this.__swiffy_v.Bk
    });
    M(Zn, "smoothing", function (a) {
        this.__swiffy_v.Bk = S(a, "Boolean")
    });
    L(Zn, "videoHeight", function () {
        return 0
    });
    L(Zn, "videoWidth", function () {
        return 0
    });
    Yn.prototype.attachCamera = function () {
        R(this, "attachCamera")
    };
    Yn.prototype.attachNetStream = function (a) {
        S(a, "flash.net.NetStream", null);
        R(this, "attachNetStream")
    };
    Yn.prototype.clear = function () {
        R(this, "clear")
    };
    N(function (a, b) {
        a = S(a, "Number", 1E3);
        b = S(b, "Boolean", !1);
        P(this, "bufferTime", "Number", a);
        P(this, "checkPolicyFile", "Boolean", b)
    }, "flash.media.SoundLoaderContext");
    var $n = function (a, b) {
        S(a, "flash.net.URLRequest", null);
        S(b, "flash.media.SoundLoaderContext", null);
        P(this, "bytesLoaded", "uint", 0);
        P(this, "bytesTotal", "Number", 0);
        P(this, "isBuffering", "Boolean", !1);
        P(this, "isURLInaccessible", "Boolean", !0);
        P(this, "length", "Number", 0);
        P(this, "url", "String", "")
    };
    N($n, "flash.media.Sound");
    $n.prototype.play = function () {
        R(this, "play")
    };
    $n.prototype.close = function () {
        R(this, "close")
    };
    $n.prototype.connect = function () {
        R(this, "connect")
    };
    var ao = N(function () {}, "flash.text.FontStyle");
    Q(ao, "BOLD", "bold");
    Q(ao, "BOLD_ITALIC", "boldItalic");
    Q(ao, "ITALIC", "italic");
    Q(ao, "REGULAR", "regular");
    var bo = N(function () {}, "flash.text.FontType");
    Q(bo, "DEVICE", "device");
    Q(bo, "EMBEDDED", "embedded");
    Q(bo, "EMBEDDED_CFF", "embeddedCFF");
    var co = function () {}, eo = N(co, "flash.text.Font");
    Object.defineProperty(co.prototype, "fontName", {
        get: function () {
            var a = this.__swiffy_v;
            return a ? a.name : null
        }
    });
    Object.defineProperty(co.prototype, "fontStyle", {
        get: function () {
            var a = this.__swiffy_v;
            return a ? a.bold ? a.italic ? ao.BOLD_ITALIC : ao.BOLD : a.italic ? ao.ITALIC : ao.REGULAR : null
        }
    });
    Object.defineProperty(co.prototype, "fontType", {
        get: function () {
            return this.__swiffy_v ? bo.EMBEDDED : null
        }
    });
    eo.enumerateFonts = function (a) {
        S(a, "Boolean", !1);
        a = [];
        var b = cj.a.kc,
            c;
        for (c in b)
            for (var d = b[c], e = 0; e < d.length; e++) {
                var f = new co;
                Object.defineProperty(f, "__swiffy_v", {
                    value: d[e]
                });
                a.push(f)
            }
        return a
    };
    co.prototype.hasGlyphs = function (a) {
        a = S(a, "String");
        var b = this.__swiffy_v;
        if (!b) return !1;
        for (var c = 0; c < a.length; c++)
            if (!b.ti(a.charAt(c))) return !1;
        return !0
    };
    eo.registerFont = function (a) {
        S(a, "Class");
        throw I(1508, "font");
    };
    var fo = N(function () {}, "flash.text.TextFieldAutoSize");
    Q(fo, "CENTER", "center");
    Q(fo, "LEFT", "left");
    Q(fo, "NONE", "none");
    Q(fo, "RIGHT", "right");
    var go = N(function () {}, "flash.text.TextFieldType");
    Q(go, "DYNAMIC", "dynamic");
    Q(go, "INPUT", "input");
    var ho = N(function () {}, "flash.text.TextFormatAlign");
    Q(ho, "CENTER", "center");
    Q(ho, "END", "end");
    Q(ho, "JUSTIFY", "justify");
    Q(ho, "LEFT", "left");
    Q(ho, "RIGHT", "right");
    Q(ho, "START", "start");
    var lf = function (a, b, c, d, e, f, h, k, n, q, s, r, u) {
        a = S(a, "String", null);
        b = S(b, "Number", null, !0);
        c = S(c, "Number", null, !0);
        d = S(d, "Boolean", null, !0);
        e = S(e, "Boolean", null, !0);
        f = S(f, "Boolean", null, !0);
        h = S(h, "String", null);
        k = S(k, "String", null);
        n = S(n, "String", null);
        q = S(q, "Number", null, !0);
        s = S(s, "Number", null, !0);
        r = S(r, "Number", null, !0);
        u = S(u, "Number", null, !0);
        P(this, "align", "String", n);
        P(this, "blockIndent", "Number", null, !0);
        P(this, "bold", "Boolean", d, !0);
        P(this, "bullet", "Boolean", null, !0);
        P(this, "color", "Number",
            c, !0);
        P(this, "font", "String", a);
        P(this, "indent", "Number", r, !0);
        P(this, "italic", "Boolean", e, !0);
        P(this, "kerning", "Boolean", null, !0);
        P(this, "leading", "Number", u, !0);
        P(this, "leftMargin", "Number", q, !0);
        P(this, "letterSpacing", "Number", null, !0);
        P(this, "rightMargin", "Number", s, !0);
        P(this, "size", "Number", b, !0);
        P(this, "tabStops", "Array", null);
        P(this, "target", "String", k);
        P(this, "underline", "Boolean", f, !0);
        P(this, "url", "String", h)
    };
    N(lf, "flash.text.TextFormat");
    var io = N(function () {}, "flash.text.AntiAliasType");
    Q(io, "ADVANCED", "advanced");
    Q(io, "NORMAL", "normal");
    var Vl = function () {
        Ln.call(this)
    };
    N(Vl, "flash.text.TextField", Ln);
    var jo = qi,
        ko = new Ai(0, null, 240, void 0);
    ko.html = !0;
    ko.selectable = !0;
    ko.bounds = new Yc(0, 0, 2E3, 2E3);
    ko.leftMargin = 15;
    ko.rightMargin = 15;
    jo(Vl, ko);
    Object.defineProperty(Vl.prototype, "tabEnabled", {
        get: function () {
            var a = this.__swiffy_d.uj;
            return l(a) ? a : this.type == go.INPUT
        },
        set: function (a) {
            this.__swiffy_d.uj = a
        }
    });
    Vl.prototype.appendText = function (a) {
        var b = this.__swiffy_d;
        b.Td(b.fd + uf(String(a)))
    };
    Vl.prototype.getTextFormat = function (a, b) {
        return this.__swiffy_d.es(a, b).gs()
    };
    Vl.prototype.setTextFormat = function (a, b, c) {
        var d = this.__swiffy_d;
        a = kf(a);
        d.yk(a, b, c)
    };
    Object.defineProperty(Vl.prototype, "text", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.fd;
            a.Mb && (b = tf(b, a.definition.multiline));
            return b
        },
        set: function (a) {
            var b = this.__swiffy_d;
            a = String(a);
            b.Mb && (a = uf(a), b.lj(!1));
            b.Td(a);
            b.lj(!0)
        }
    });
    Object.defineProperty(Vl.prototype, "htmlText", {
        get: function () {
            var a = this.__swiffy_d,
                b = a.fd;
            a.Mb && (b = vf(String(b)));
            return b
        },
        set: function (a) {
            var b = this.__swiffy_d,
                c = ef();
            c.color = 4278190080;
            b.yk(c);
            b.Td(String(a))
        }
    });
    Object.defineProperty(Vl.prototype, "length", {
        get: function () {
            return this.text.length
        }
    });
    Object.defineProperty(Vl.prototype, "textColor", {
        get: function () {
            return this.__swiffy_d.Cs()
        },
        set: function (a) {
            this.__swiffy_d.Ss(a)
        }
    });
    Object.defineProperty(Vl.prototype, "autoSize", {
        get: function () {
            return this.__swiffy_d.Nf
        },
        set: function (a) {
            switch (a) {
            case "center":
            case "left":
            case "none":
            case "right":
                break;
            default:
                throw I(2008, "Property autoSize");
            }
            this.__swiffy_d.Ks(a)
        }
    });
    Object.defineProperty(Vl.prototype, "selectable", {
        get: function () {
            return this.__swiffy_d.dm
        },
        set: function (a) {
            a = S(a, "Boolean");
            this.__swiffy_d.Rs(a)
        }
    });
    Object.defineProperty(Vl.prototype, "border", {
        get: function () {
            return this.__swiffy_d.fh
        },
        set: function (a) {
            a = S(a, "Boolean");
            this.__swiffy_d.Ls(a)
        }
    });
    Object.defineProperty(Vl.prototype, "type", {
        get: function () {
            return this.__swiffy_d.cm ? go.INPUT : go.DYNAMIC
        },
        set: function (a) {
            switch (a) {
            case go.DYNAMIC:
                a = !1;
                break;
            case go.INPUT:
                a = !0;
                break;
            default:
                throw I(2008, "Property type");
            }
            this.__swiffy_d.Pn(a)
        }
    });
    Object.defineProperty(Vl.prototype, "antiAliasType", {
        get: function () {
            return "advanced" == this.__swiffy_d.$l ? io.ADVANCED : io.NORMAL
        },
        set: function (a) {
            var b = "normal";
            switch (a) {
            case io.NORMAL:
                b = "normal";
                break;
            case io.ADVANCED:
                b = "advanced";
                break;
            default:
                throw I(2008, "Property type");
            }
            this.__swiffy_d.Js(b)
        }
    });
    Object.defineProperty(Vl.prototype, "numLines", {
        get: function () {
            return this.__swiffy_d.yd.length
        }
    });
    Vl.prototype.getLineText = function (a) {
        a = this.__swiffy_d.ux(a);
        if (null === a) throw new RangeError;
        return a
    };
    Object.defineProperty(Vl.prototype, "multiline", {
        get: function () {
            return this.__swiffy_d.hg
        },
        set: function (a) {
            this.__swiffy_d.Os( !! a)
        }
    });
    Object.defineProperty(Vl.prototype, "wordWrap", {
        get: function () {
            return this.__swiffy_d.Ih
        },
        set: function (a) {
            this.__swiffy_d.Ts( !! a)
        }
    });
    Object.defineProperty(Vl.prototype, "embedFonts", {
        get: function () {
            return this.__swiffy_d.Lf
        },
        set: function (a) {
            this.__swiffy_d.Ns( !! a)
        }
    });
    Object.defineProperty(Vl.prototype, "defaultTextFormat", {
        get: function () {
            return this.__swiffy_d.ds().gs()
        },
        set: function (a) {
            var b = this.__swiffy_d;
            a = kf(a);
            b.Ps(a)
        }
    });
    var lo = function (a, b, c, d, e, f) {
        a = S(a, "String", "_serif");
        b = S(b, "String", "normal");
        c = S(c, "String", "normal");
        d = S(d, "String", "device");
        e = S(e, "String", "cff");
        f = S(f, "String", "horizontalStem");
        P(this, "cffHinting", "String", f);
        P(this, "fontLookup", "String", d);
        P(this, "fontName", "String", a);
        P(this, "fontPosture", "String", c);
        P(this, "fontWeight", "String", b);
        P(this, "locked", "Boolean", !1);
        P(this, "renderingMode", "String", e)
    }, mo = N(lo, "flash.text.engine.FontDescription");
    lo.prototype.clone = function () {
        return new lo(this.fontName, this.fontWeight, this.fontPosture, this.fontLookup, this.renderingMode, this.ccfHinting)
    };
    mo.isDeviceFontCompatible = function (a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        R(this, "isDeviceFontCompatible");
        return !1
    };
    mo.isFontCompatible = function (a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        R(this, "isFontCompatible");
        return !1
    };
    var no = N(function () {}, "flash.text.engine.FontPosture");
    Object.defineProperty(no, "ITALIC", {
        value: "italic"
    });
    Object.defineProperty(no, "NORMAL", {
        value: "normal"
    });
    var oo = N(function () {}, "flash.text.engine.FontWeight");
    Object.defineProperty(oo, "BOLD", {
        value: "bold"
    });
    Object.defineProperty(oo, "NORMAL", {
        value: "normal"
    });
    var Tl = function () {
        Sl.call(this)
    };
    N(Tl, "flash.display.MovieClip", Sl);
    Tl.prototype.addFrameScript = function (a, b) {
        for (var c = 0; c < arguments.length; c += 2) this.__swiffy_d.zq[arguments[c]] = arguments[c + 1]
    };
    Tl.prototype.stop = function () {
        this.__swiffy_d.stop()
    };
    Tl.prototype.play = function () {
        this.__swiffy_d.play()
    };
    Tl.prototype.prevScene = function () {
        this.__swiffy_d.Sx()
    };
    Tl.prototype.nextScene = function () {
        this.__swiffy_d.Qx()
    };
    Tl.prototype.prevFrame = function () {
        this.__swiffy_d.Bn()
    };
    Tl.prototype.nextFrame = function () {
        this.__swiffy_d.xi()
    };
    Tl.prototype.gotoAndStop = function (a, b) {
        var c = this.__swiffy_d;
        c.$d(c.Xe(a, b), !1)
    };
    Tl.prototype.gotoAndPlay = function (a, b) {
        var c = this.__swiffy_d;
        c.$d(c.Xe(a, b), !0)
    };
    Object.defineProperty(Tl.prototype, "currentFrame", {
        get: function () {
            return this.__swiffy_d.Da + 1
        }
    });
    Object.defineProperty(Tl.prototype, "framesLoaded", {
        get: function () {
            return this.__swiffy_d.definition.frameCount
        }
    });
    Object.defineProperty(Tl.prototype, "totalFrames", {
        get: function () {
            return this.__swiffy_d.definition.frameCount
        }
    });
    Object.defineProperty(Tl.prototype, "cacheAsBitmap", {
        get: function () {
            return this.__swiffy_d.xj()
        },
        set: function (a) {
            this.__swiffy_d.Tl(Boolean(a))
        }
    });
    var po = function () {
        T.call(this);
        P(this, "client", "Object", null);
        Q(this, "domain", "");
        P(this, "isPerUser", "Boolean", !1)
    }, qo = N(po, "flash.net.LocalConnection", T);
    Object.defineProperty(qo, "isSupported", {
        value: !1
    });
    po.prototype.allowDomain = function () {
        R(this, "allowDomain")
    };
    po.prototype.allowInsecureDomain = function () {
        R(this, "allowInsecureDomain")
    };
    po.prototype.close = function () {
        R(this, "close")
    };
    po.prototype.connect = function (a) {
        S(a, "String", "");
        R(this, "connect")
    };
    po.prototype.send = function (a, b) {
        S(a, "String", "");
        S(b, "String", "");
        R(this, "send")
    };
    var ro = function () {
        T.call(this);
        P(this, "client", "Object", null);
        Q(this, "connected", !1);
        Q(this, "connectedProxyType", "");
        Q(this, "farID", "");
        Q(this, "farNonce", "");
        P(this, "httpIdleTimeout", "Number", 0);
        P(this, "maxPeerConnections", "uint", 0);
        Q(this, "nearID", "");
        Q(this, "nearNonce", "");
        P(this, "objectEncoding", "uint", 0);
        Q(this, "protocol", "");
        P(this, "proxyType", "String", "");
        Q(this, "unconnectedPeerStreams", null);
        Q(this, "uri", "");
        Q(this, "usingTLS", !1)
    }, so = N(ro, "flash.net.NetConnection", T);
    Object.defineProperty(so, "defaultObjectEncoding", {
        value: 0
    });
    ro.prototype.addHeader = function (a, b, c) {
        S(a, "String", "");
        S(b, "Boolean", !1);
        S(c, "Object", null);
        R(this, "addHeader")
    };
    ro.prototype.call = function (a, b) {
        S(a, "String", "");
        S(b, "flash.net.Responder", null);
        R(this, "call")
    };
    ro.prototype.close = function () {
        R(this, "close")
    };
    ro.prototype.connect = function (a) {
        S(a, "String", "");
        R(this, "connect")
    };
    var to = function (a, b) {
        T.call(this);
        S(a, "flash.net.NetConnection", null);
        S(b, "String", "connectToFMS");
        P(this, "audioReliable", "Boolean", !1);
        P(this, "audioSampleAccess", "Boolean", !1);
        Q(this, "backBufferLength", 0);
        P(this, "backBufferTime", "Number", 0);
        Q(this, "bufferLength", 0);
        P(this, "bufferTime", "Number", 0);
        P(this, "bufferTimeMax", "Number", 0);
        Q(this, "bytesLoaded", 0);
        Q(this, "bytesTotal", 0);
        P(this, "checkPolicyFile", "Boolean", !1);
        P(this, "client", "Object", null);
        Q(this, "currentFPS", 0);
        P(this, "dataReliable", "Boolean", !1);
        Q(this, "farID", "");
        Q(this, "farNonce", "");
        P(this, "inBufferSeek", "Boolean", !1);
        Q(this, "info", null);
        Q(this, "liveDelay", 0);
        P(this, "maxPauseBufferTime", "Number", 0);
        P(this, "multicastAvailabilitySendToAll", "Boolean", !1);
        P(this, "multicastAvailabilityUpdatePeriod", "Number", 0);
        P(this, "multicastFetchPeriod", "Number", 0);
        Q(this, "multicastInfo", null);
        P(this, "multicastPushNeighborLimit", "Number", 0);
        P(this, "multicastRelayMarginDuration", "Number", 0);
        P(this, "multicastWindowDuration", "Number", 0);
        Q(this, "nearNonce",
            "");
        Q(this, "objectEncoding", 0);
        Q(this, "peerStreams", null);
        P(this, "soundTransform", "flash.media.SoundTransform", null);
        Q(this, "time", 0);
        P(this, "useHardwareDecoder", "Boolean", !1);
        P(this, "useJitterBuffer", "Boolean", !1);
        P(this, "videoReliable", "Boolean", !1);
        P(this, "videoSampleAccess", "Boolean", !1);
        P(this, "videoStreamSettings", "flash.media.VideoStreamSettings", null)
    }, uo = N(to, "flash.net.NetStream", T);
    Object.defineProperty(uo, "CONNECT_TO_FMS", {
        value: "connectToFMS"
    });
    Object.defineProperty(uo, "DIRECT_CONNECTIONS", {
        value: "directConnections"
    });
    to.prototype.appendBytes = function (a) {
        S(a, "flash.utils.ByteArray", null);
        R(this, "appendBytes")
    };
    to.prototype.appendBytesAction = function (a) {
        S(a, "String", "");
        R(this, "appendBytesAction")
    };
    to.prototype.attach = function (a) {
        S(a, "flash.net.NetConnection", null);
        R(this, "attach")
    };
    to.prototype.attachAudio = function () {
        R(this, "attachAudio")
    };
    to.prototype.attachCamera = function (a, b) {
        S(b, "int", -1);
        R(this, "attachCamera")
    };
    to.prototype.close = function () {
        R(this, "close")
    };
    to.prototype.dispose = function () {
        R(this, "dispose")
    };
    to.prototype.onPeerConnect = function (a) {
        S(a, "flash.net.NetStream", null);
        R(this, "onPeerConnect");
        return !1
    };
    to.prototype.pause = function () {
        R(this, "pause")
    };
    to.prototype.play = function () {
        R(this, "play")
    };
    to.prototype.play2 = function (a) {
        S(a, "flash.net.NetStreamPlayOptions", null);
        R(this, "play2")
    };
    to.prototype.preloadEmbeddedData = function (a) {
        S(a, "flash.net.NetStreamPlayOptions", null);
        R(this, "preloadEmbeddedData")
    };
    to.prototype.publish = function (a, b) {
        S(a, "String", "null");
        S(b, "String", "null");
        R(this, "publish")
    };
    to.prototype.receiveAudio = function (a) {
        S(a, "Boolean", !1);
        R(this, "receiveAudio")
    };
    to.prototype.receiveVideo = function (a) {
        S(a, "Boolean", !1);
        R(this, "receiveVideo")
    };
    to.prototype.receiveVideoFPS = function (a) {
        S(a, "Number", 0);
        R(this, "receiveVideoFPS")
    };
    uo.resetDRMVouchers = function () {
        R(this, "resetDRMVouchers")
    };
    to.prototype.resume = function () {
        R(this, "resume")
    };
    to.prototype.seek = function (a) {
        S(a, "Number", 0);
        R(this, "seek")
    };
    to.prototype.send = function (a) {
        S(a, "String", "");
        R(this, "send")
    };
    to.prototype.setDRMAuthenticationCredentials = function (a, b, c) {
        S(a, "String", "");
        S(b, "String", "");
        S(c, "String", "");
        R(this, "setDRMAuthenticationCredentials")
    };
    to.prototype.step = function (a) {
        S(a, "int", 0);
        R(this, "step")
    };
    to.prototype.togglePause = function () {
        R(this, "togglePause")
    };
    N(function () {
        T.call(this);
        P(this, "len", "Number", 0);
        P(this, "offset", "Number", 0);
        P(this, "oldStreamName", "String", "");
        P(this, "start", "Number", 0);
        P(this, "streamName", "String", "");
        P(this, "transition", "String", "")
    }, "flash.net.NetStreamPlayOptions", T);
    var vo = rl(2012);
    vo.n = N(vo, "flash.net.ObjectEncoding");
    Object.defineProperty(vo.n, "dynamicPropertyWriter", {
        value: null
    });
    Object.defineProperty(vo.n, "AMF0", {
        value: 0
    });
    Object.defineProperty(vo.n, "AMF3", {
        value: 3
    });
    Object.defineProperty(vo.n, "DEFAULT", {
        value: 3
    });
    N(function (a, b) {
        S(a, "Function", null);
        S(b, "Function", null)
    }, "flash.net.Responder");
    var Z = rl(2012);
    Z.of = function (a) {
        return a.__swiffy_v
    };
    Z.ls = function () {
        var a = ml(Z.n);
        T.call(a);
        var b = Z.of(a);
        b.Dq = a;
        b.Cq = Z.Pm;
        b.data = {};
        return a
    };
    Z.os = {};
    Z.Pm = vo.n.AMF3;
    Z.n = N(Z, "flash.net.SharedObject", T);
    L(Z.n, "client", function () {
        return Z.of(this).Dq
    });
    M(Z.n, "client", function (a) {
        if (null == a) throw I(2004);
        Z.of(this).Dq = a
    });
    K(Z.n, "clear", function () {
        R(this, "clear");
        Z.of(this).data = {}
    });
    K(Z.n, "close", function () {
        R(this, "close")
    });
    K(Z.n, "connect", function (a, b) {
        S(a, "flash.net.NetConnection", null);
        S(b, "String", "null");
        R(this, "connect")
    });
    L(Z.n, "data", function () {
        return Z.of(this).data
    });
    Object.defineProperty(Z.n, "defaultObjectEncoding", {
        get: function () {
            return Z.Pm
        },
        set: function (a) {
            Z.Pm = S(a, "uint")
        }
    });
    K(Z.n, "flush", function (a) {
        S(a, "int", 0);
        R(this, "flush");
        return wo.n.FLUSHED
    });
    M(Z.n, "fps", function () {
        R(this, "fps")
    });
    Z.n.getLocal = function (a, b, c) {
        a = S(a, "String", "");
        S(b, "String", null);
        S(c, "Boolean", !1);
        R(this, "getLocal");
        (b = Z.os[a]) || (Z.os[a] = b = Z.ls());
        return b
    };
    Z.n.getRemote = function (a, b, c, d) {
        S(a, "String", "");
        S(b, "String", "null");
        S(c, "Object", !1);
        S(d, "Boolean", !1);
        R(this, "getRemote");
        return Z.ls()
    };
    L(Z.n, "objectEncoding", function () {
        return Z.of(this).Cq
    });
    M(Z.n, "objectEncoding", function (a) {
        a = S(a, "uint");
        R(this, "objectEncoding");
        if (a != vo.n.AMF0 && a != vo.n.AMF3) throw I(2008, "Parameter objectEncoding");
        Z.of(this).Cq = a
    });
    K(Z.n, "send", function () {
        R(this, "send")
    });
    K(Z.n, "setDirty", function (a) {
        S(a, "String", "");
        R(this, "setDirty")
    });
    K(Z.n, "setProperty", function (a, b) {
        S(a, "String", "");
        S(b, "Object", null);
        R(this, "setProperty")
    });
    L(Z.n, "size", function () {
        R(this, "size");
        return 0
    });
    var wo = rl(2012);
    wo.n = N(wo, "flash.net.SharedObjectFlushStatus");
    Object.defineProperty(wo.n, "FLUSHED", {
        value: "flushed"
    });
    Object.defineProperty(wo.n, "PENDING", {
        value: "pending"
    });
    var xo = function (a, b) {
        T.call(this);
        S(a, "String", "null");
        S(b, "int", 0);
        Q(this, "bytesAvailable", 0);
        Q(this, "bytesPending", 0);
        Q(this, "connected", !1);
        P(this, "endian", "String", An.BIG_ENDIAN);
        Q(this, "localAddress", "");
        Q(this, "localPort", 0);
        P(this, "objectEncoding", "uint", 0);
        Q(this, "remoteAddress", "");
        Q(this, "remotePort", 0);
        P(this, "timeout", "uint", 0)
    };
    N(xo, "flash.net.Socket", T);
    xo.prototype.close = function () {
        R(this, "close")
    };
    xo.prototype.connect = function (a, b) {
        S(a, "String");
        S(b, "int");
        R(this, "connect")
    };
    xo.prototype.flush = function () {
        R(this, "flush")
    };
    xo.prototype.readBoolean = function () {
        R(this, "readBoolean");
        return !1
    };
    xo.prototype.readByte = function () {
        R(this, "readByte");
        return 0
    };
    xo.prototype.readBytes = function (a, b, c) {
        S(a, "flash.utils.ByteArray");
        S(b, "uint", 0);
        S(c, "uint", 0);
        R(this, "readBytes")
    };
    xo.prototype.readDouble = function () {
        R(this, "readDouble");
        return 0
    };
    xo.prototype.readFloat = function () {
        R(this, "readFloat");
        return 0
    };
    xo.prototype.readInt = function () {
        R(this, "readInt");
        return 0
    };
    xo.prototype.readMultiByte = function (a, b) {
        S(a, "uint");
        S(b, "String");
        R(this, "readMultiByte");
        return ""
    };
    xo.prototype.readObject = function () {
        R(this, "readObject");
        return null
    };
    xo.prototype.readShort = function () {
        R(this, "readShort");
        return 0
    };
    xo.prototype.readUnsignedByte = function () {
        R(this, "readUnsignedByte");
        return 0
    };
    xo.prototype.readUnsignedInt = function () {
        R(this, "readUnsignedInt");
        return 0
    };
    xo.prototype.readUnsignedShort = function () {
        R(this, "readUnsignedShort");
        return 0
    };
    xo.prototype.readUTF = function () {
        R(this, "readUTF");
        return ""
    };
    xo.prototype.readUTFBytes = function (a) {
        S(a, "uint");
        R(this, "readUTFBytes");
        return ""
    };
    xo.prototype.writeBoolean = function (a) {
        S(a, "Boolean");
        R(this, "writeBoolean")
    };
    xo.prototype.writeByte = function (a) {
        S(a, "int");
        R(this, "writeByte")
    };
    xo.prototype.writeBytes = function (a, b, c) {
        S(a, "flash.utils.ByteArray");
        S(b, "uint", 0);
        S(c, "uint", 0);
        R(this, "writeBytes")
    };
    xo.prototype.writeDouble = function (a) {
        S(a, "Number");
        R(this, "writeDouble")
    };
    xo.prototype.writeFloat = function (a) {
        S(a, "Number");
        R(this, "writeFloat")
    };
    xo.prototype.writeInt = function (a) {
        S(a, "int");
        R(this, "writeInt")
    };
    xo.prototype.writeMultiByte = function (a, b) {
        S(a, "String");
        S(b, "String");
        R(this, "writeMultiByte")
    };
    xo.prototype.writeObject = function (a) {
        S(a, "*");
        R(this, "writeObject")
    };
    xo.prototype.writeShort = function (a) {
        S(a, "int");
        R(this, "writeShort")
    };
    xo.prototype.writeUnsignedInt = function (a) {
        S(a, "uint");
        R(this, "writeUnsignedInt")
    };
    xo.prototype.writeUTF = function (a) {
        S(a, "String");
        R(this, "writeUTF")
    };
    xo.prototype.writeUTFBytes = function (a) {
        S(a, "String");
        R(this, "writeUTFBytes")
    };
    var yo = N(function () {}, "flash.net.URLLoaderDataFormat");
    Q(yo, "BINARY", "binary");
    Q(yo, "TEXT", "text");
    Q(yo, "VARIABLES", "variables");
    var zo = function (a) {
        T.call(this);
        a = S(a, "flash.net.URLRequest", null);
        P(this, "bytesLoaded", "uint", 0);
        P(this, "bytesTotal", "uint", 0);
        this.data = void 0;
        P(this, "dataFormat", "String", yo.TEXT);
        a && this.load(a)
    };
    N(zo, "flash.net.URLLoader", T);
    zo.prototype.close = function () {
        R(this)
    };
    zo.prototype.load = function (a) {
        a = S(a, "flash.net.URLRequest");
        R(this);
        var b = this;
        this.dispatchEvent(new Fm(Hm.OPEN));
        var c = new Ff;
        c.xb = function (a) {
            b.bytesLoaded = 1024;
            b.bytesTotal = 1024;
            b.dispatchEvent(new Vm(Wm.PROGRESS, !1, !1, 1024, 1024));
            b.dispatchEvent(new Xm(Ym.HTTP_STATUS, !1, !1, 400));
            b.data = a;
            b.dispatchEvent(new Fm(Hm.COMPLETE))
        };
        c.nc = function () {};
        Sf(a.url, null, a.method, a.data ? a.data.toString() : null, c, a.requestHeaders)
    };
    N(function (a) {
        a = S(a, "String", null);
        P(this, "authenticate", "Boolean", !1);
        P(this, "cacheResponse", "Boolean", !1);
        P(this, "contentType", "String", null);
        P(this, "data", "Object", null);
        P(this, "digest", "String", "");
        P(this, "followRedirects", "Boolean", !1);
        P(this, "idleTimeout", "Number", 0);
        P(this, "manageCookies", "Boolean", !1);
        P(this, "method", "String", gm.GET);
        P(this, "url", "String", a);
        P(this, "useCache", "Boolean", !1);
        P(this, "userAgent", "String", "");
        Q(this, "requestHeaders", [])
    }, "flash.net.URLRequest");
    var Vj = function (a, b) {
        a = S(a, "String", "");
        b = S(b, "String", "");
        P(this, "name", "String", a);
        P(this, "value", "String", b)
    };
    N(Vj, "flash.net.URLRequestHeader");
    Vj.prototype.toString = function () {
        return this.name + ": " + this.value
    };
    var Ao = function () {}, gm = N(Ao, "flash.net.URLRequestMethod");
    Q(gm, "DELETE", "DELETE");
    Q(gm, "GET", "GET");
    Q(gm, "HEAD", "HEAD");
    Q(gm, "OPTIONS", "OPTIONS");
    Q(gm, "POST", "POST");
    Q(Ao, "PUT", "PUT");
    var Bo = function (a) {
        a = S(a, "String", null);
        null != a && this.decode(a)
    };
    N(Bo, "flash.net.URLVariables");
    Object.defineProperty(Bo.prototype, "decode", {
        value: function (a) {
            a = S(a, "String");
            a = zd(a, !0);
            var b = Object.keys(a);
            if (!b.length) throw I(2101);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (!d.length) throw I(2101);
                var e = a[d];
                this[d] = 1 == e.length ? e[0] : e
            }
        }
    });
    Object.defineProperty(Bo.prototype, "toString", {
        value: function () {
            return vd(this)
        }
    });
    var Co = N(function (a) {
        S(a, "flash.system.ApplicationDomain", null)
    }, "flash.system.ApplicationDomain");
    Q(Co, "MIN_DOMAIN_MEMORY_LENGTH", 1024);
    Object.defineProperty(Co, "currentDomain", {
        get: function () {
            R(this);
            return ol.call(Co)
        }
    });
    L(Co, "parentDomain", function () {
        R(this);
        return ol.call(Co)
    });
    L(Co, "domainMemory", function () {
        R(this);
        return null
    });
    M(Co, "domainMemory", function (a) {
        R(this);
        S(a, "flash.utils.ByteArray")
    });
    K(Co, "getDefinition", function (a) {
        a = S(a, "String");
        R(this);
        var b = cj.tc["flash.utils.getDefinitionByName"](a);
        if (!l(b)) throw I(1065, a);
        return b
    });
    K(Co, "getQualifiedDefinitionNames", function () {
        R(this);
        return Cn(String, [])
    });
    K(Co, "hasDefinition", function (a) {
        a = S(a, "String");
        R(this);
        a = cj.tc["flash.utils.getDefinitionByName"](a);
        return l(a)
    });
    var Do = N(function () {}, "flash.system.Capabilities");
    Object.defineProperty(Do, "avHardwareDisable", {
        value: !1
    });
    Object.defineProperty(Do, "cpuArchitecture", {
        value: ""
    });
    Object.defineProperty(Do, "hasAccessibility", {
        value: !1
    });
    Object.defineProperty(Do, "hasAudio", {
        value: !1
    });
    Object.defineProperty(Do, "hasAudioEncoder", {
        value: !1
    });
    Object.defineProperty(Do, "hasEmbeddedVideo", {
        value: !1
    });
    Object.defineProperty(Do, "hasIME", {
        value: !1
    });
    Object.defineProperty(Do, "hasMP3", {
        value: !1
    });
    Object.defineProperty(Do, "hasPrinting", {
        value: !1
    });
    Object.defineProperty(Do, "hasScreenBroadcast", {
        value: !1
    });
    Object.defineProperty(Do, "hasScreenPlayback", {
        value: !1
    });
    Object.defineProperty(Do, "hasStreamingAudio", {
        value: !0
    });
    Object.defineProperty(Do, "hasStreamingVideo", {
        value: !0
    });
    Object.defineProperty(Do, "hasTLS", {
        value: !1
    });
    Object.defineProperty(Do, "hasVideoEncoder", {
        value: !1
    });
    Object.defineProperty(Do, "isDebugger", {
        value: !1
    });
    Object.defineProperty(Do, "isEmbeddedInAcrobat", {
        value: !1
    });
    Object.defineProperty(Do, "language", {
        value: ""
    });
    Object.defineProperty(Do, "localFileReadDisable", {
        value: !0
    });
    Object.defineProperty(Do, "manufacturer", {
        value: ""
    });
    Object.defineProperty(Do, "maxLevelIDC", {
        value: "5.1"
    });
    Object.defineProperty(Do, "os", {
        value: ""
    });
    Object.defineProperty(Do, "pixelAspectRatio", {
        value: 1
    });
    Object.defineProperty(Do, "playerType", {
        value: "PlugIn"
    });
    Object.defineProperty(Do, "screenColor", {
        value: "color"
    });
    Object.defineProperty(Do, "screenDPI", {
        value: 72
    });
    Object.defineProperty(Do, "screenResolutionX", {
        get: function () {
            return screen.width
        }
    });
    Object.defineProperty(Do, "screenResolutionY", {
        get: function () {
            return screen.height
        }
    });
    Object.defineProperty(Do, "serverString", {
        get: function () {
            var a = [],
                b;
            for (b in Eo) {
                var c = Eo[b],
                    c = p(c) ? c(this) : this[c],
                    c = !0 === c ? "t" : !1 === c ? "f" : encodeURIComponent(c);
                a.push(b + "=" + c)
            }
            return a.join("&")
        }
    });
    Object.defineProperty(Do, "supports32BitProcesses", {
        value: !1
    });
    Object.defineProperty(Do, "supports64BitProcesses", {
        value: !1
    });
    Object.defineProperty(Do, "touchscreenType", {
        value: ""
    });
    Object.defineProperty(Do, "version", {
        get: function () {
            return "HTML 11,0,0,0"
        }
    });
    Do.hasMultiChannelAudio = function (a) {
        S(a, "String", "");
        R(this, "hasMultiChannelAudio");
        return !1
    };
    var Fo = function (a) {
        return function (b) {
            return b.hasMultiChannelAudio(a)
        }
    }, Eo = {
            A: "hasAudio",
            SA: "hasStreamingAudio",
            SV: "hasStreamingVideo",
            EV: "hasEmbeddedVideo",
            MP3: "hasMP3",
            AE: "hasAudioEncoder",
            VE: "hasVideoEncoder",
            ACC: "hasAccessibility",
            PR: "hasPrinting",
            SP: "hasScreenPlayback",
            SB: "hasScreenBroadcast",
            DEB: "isDebugger",
            V: "version",
            M: "manufacturer",
            R: function (a) {
                return a.screenResolutionX + "x" + a.screenResolutionY
            },
            COL: "screenColor",
            AR: "pixelAspectRatio",
            OS: "os",
            ARCH: "cpuArchitecture",
            L: "language",
            PR32: "supports32BitProcesses",
            PR64: "supports64BitProcesses",
            PT: "playerType",
            AVD: "avHardwareDisable",
            LFD: "localFileReadDisable",
            WD: function () {
                return !1
            },
            TLS: "hasTLS",
            ML: "maxLevelIDC",
            DP: "screenDPI",
            IME: "hasIME",
            DD: Fo("DolbyDigital"),
            DDP: Fo("DolbyDigitalPlus"),
            DTS: Fo("DTS"),
            DTE: Fo("DTSExpress"),
            DTH: Fo("DTSHDHighResolutionAudio"),
            DTM: Fo("DTSHDMasterAudio")
        };
    N(function (a, b, c) {
        a = S(a, "Boolean", !1);
        b = S(b, "flash.system.ApplicationDomain", null);
        c = S(c, "flash.system.SecurityDomain", null);
        P(this, "allowCodeImport", "Boolean", !1);
        P(this, "allowLoadBytesCodeExecution", "Boolean", !1);
        P(this, "applicationDomain", "flash.system.ApplicationDomain", b);
        P(this, "checkPolicyFile", "Boolean", a);
        P(this, "imageDecodingPolicy", "String", "");
        P(this, "parameters", "Object", null);
        P(this, "requestedContentParent", "flash.display.DisplayObjectContainer", null);
        P(this, "securityDomain", "flash.system.SecurityDomain",
            c);
        R(this)
    }, "flash.system.LoaderContext");
    var Go = rl(2012);
    Go.n = N(Go, "flash.system.Security");
    P(Go.n, "exactSettings", "Boolean", !1);
    Q(Go.n, "pageDomain", void 0);
    Q(Go.n, "sandboxType", "remote");
    Q(Go.n, "LOCAL_TRUSTED", "localTrusted");
    Q(Go.n, "LOCAL_WITH_FILE", "localWithFile");
    Q(Go.n, "LOCAL_WITH_NETWORK", "localWithNetwork");
    Q(Go.n, "REMOTE", "remote");
    Go.n.allowDomain = function () {
        R(Go)
    };
    Go.n.allowInsecureDomain = function () {
        R(Go)
    };
    Go.n.loadPolicyFile = function (a) {
        S(a, "String");
        R(Go)
    };
    Go.n.showSettings = function (a) {
        S(a, "String", "default");
        R(Go)
    };
    var Ho = N(function () {}, "flash.system.SecurityDomain");
    Q(Ho, "currentDomain", "");
    var Ml = function (a) {
        T.call(this, a);
        Object.defineProperty(this, "__swiffy_d", {
            value: new Lf(this)
        });
        Q(this, "actionScriptVersion", 0);
        Object.defineProperty(this, "applicationDomain", {
            get: function () {
                R(this, "applicationDomain");
                return ol.call(Co)
            }
        });
        Q(this, "bytes", null);
        Q(this, "bytesLoaded", 0);
        Q(this, "bytesTotal", 0);
        Q(this, "childAllowsParent", !0);
        P(this, "childSandboxBridge", "Object", null);
        Q(this, "contentType", "");
        Q(this, "frameRate", 0);
        Q(this, "height", 0);
        P(this, "isURLInaccessible", "Boolean", !1);
        Q(this, "parentAllowsChild", !0);
        P(this, "parentSandboxBridge", "Object", null);
        Q(this, "sameDomain", !1);
        Q(this, "sharedEvents", new T);
        Q(this, "swfVersion", 0);
        Q(this, "uncaughtErrorEvents", null);
        Q(this, "width", 0);
        R(this)
    }, Io = N(Ml, "flash.display.LoaderInfo", T);
    Object.defineProperty(Ml.prototype, "content", {
        get: function () {
            return this.__swiffy_d.content
        }
    });
    Object.defineProperty(Ml.prototype, "loader", {
        get: function () {
            return this.__swiffy_d.vr
        }
    });
    Object.defineProperty(Ml.prototype, "loaderURL", {
        get: function () {
            return this.__swiffy_d.vx()
        }
    });
    Object.defineProperty(Ml.prototype, "parameters", {
        get: function () {
            return this.__swiffy_d.ho
        }
    });
    Object.defineProperty(Ml.prototype, "url", {
        get: function () {
            return this.__swiffy_d.Cd
        }
    });
    Io.getLoaderInfoByDefinition = function (a) {
        S(a, "Object");
        R(Ml, "getLoaderInfoByDefinition");
        return null
    };
    var Jo = function () {
        Ln.call(this);
        Q(this, "content", null);
        var a = new Ml;
        Q(this, "contentLoaderInfo", a);
        a = a.__swiffy_d;
        a.Uv(cj.jh().Cd);
        a.vr = this;
        Q(this, "uncaughtErrorEvents", null)
    }, Ko = N(Jo, "flash.display.Loader", Pn);
    (new Jf(0, 0, null, null)).dn(Ko);
    Jo.prototype.close = function () {
        R(this)
    };
    Jo.prototype.load = function (a, b) {
        a = S(a, "flash.net.URLRequest");
        b = S(b, "flash.system.LoaderContext", null);
        R(this);
        var c = a.url,
            d = this.contentLoaderInfo,
            e = d.__swiffy_d;
        e.Qf(c);
        var f = Ad(c),
            h;
        for (h in f) {
            var k = f[h];
            Object.defineProperty(e.ho, h, {
                value: k.length ? k[k.length - 1] : void 0,
                configurable: !0,
                enumerable: !0
            })
        }
        var n = this.__swiffy_d,
            f = new Ff;
        f.xb = function (a, b) {
            n.Fc(0) && (n.vd(0), d.dispatchEvent(new Fm(Hm.UNLOAD)));
            var c = n.a,
                f = new Ld,
                h = Mf(a, c, f);
            d.dispatchEvent(new Fm(Hm.OPEN));
            d.dispatchEvent(new Vm(Wm.PROGRESS, !1, !1, 1024, 1024));
            c.Ei(f, function () {
                var a = new A(h, c, null);
                a.ko(!0);
                a.Xc = !0;
                a.Kb(c.rh());
                a.da();
                a.Tn(e);
                e.content = a.r;
                n.ad(a, 0);
                c.Ba();
                d.dispatchEvent(new Fm(Hm.INIT));
                d.dispatchEvent(new Xm(Ym.HTTP_STATUS, !1, !1, b));
                d.dispatchEvent(new Fm(Hm.COMPLETE));
                c.Ba()
            })
        };
        f.nc = function () {};
        If(c, n.a, a.method, a.data ? a.data.toString() : null, f, a.requestHeaders)
    };
    Jo.prototype.loadBytes = function (a, b) {
        S(a, "flash.utils.ByteArray");
        S(b, "flash.system.LoaderContext", null);
        R(this)
    };
    Jo.prototype.loadFilePromise = function (a, b) {
        S(a, "flash.desktop.IFilePromise");
        S(b, "flash.system.LoaderContext", null);
        R(this)
    };
    Jo.prototype.unload = function () {
        R(this)
    };
    Jo.prototype.unloadAndStop = function (a) {
        S(a, "Boolean", !0);
        R(this)
    };
    var Lo = function () {
        T.call(this)
    };
    N(Lo, "flash.display.NativeMenu", T);
    Lo.prototype.clone = function () {
        return new Lo
    };
    var Mo = function () {
        T.call(this)
    };
    N(Mo, "flash.display.NativeMenuItem", T);
    Mo.prototype.clone = function () {
        return new Mo
    };
    var No = function () {
        T.call(this);
        P(this, "builtInItems", "flash.ui.ContextMenuBuiltInItems", null);
        P(this, "clipboardItems", "flash.ui.ContextMenuClipboardItems", null);
        P(this, "clipboardMenu", "Boolean", !1);
        P(this, "customItems", "Array", []);
        P(this, "link", "flash.net.URLRequest", null)
    }, Oo = N(No, "flash.ui.ContextMenu", Lo);
    Object.defineProperty(Oo, "isSupported", {
        value: !1
    });
    No.prototype.clone = function () {
        return new No
    };
    No.prototype.hideBuiltInItems = function () {
        R(this)
    };
    var Po = function (a, b, c, d) {
        T.call(this);
        a = S(a, "String");
        b = S(b, "Boolean", !1);
        d = S(d, "Boolean", !0);
        P(this, "caption", "String", a);
        P(this, "separatorBefore", "Boolean", b);
        P(this, "visible", "Boolean", d)
    }, Qo = N(Po, "flash.ui.ContextMenuItem", Mo);
    Po.prototype.clone = function () {
        return new Po(this.caption, this.separatorBefore, this.enabled, this.visible)
    };
    Qo.systemClearMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemCopyLinkMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemCopyMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemCutMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemOpenLinkMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemPasteMenuItem = function () {
        R(this);
        return null
    };
    Qo.systemSelectAllMenuItem = function () {
        R(this);
        return null
    };
    var Ro = N(function () {}, "flash.utils.CompressionAlgorithm");
    Object.defineProperties(Ro, {
        DEFLATE: {
            value: "deflate"
        },
        ZLIB: {
            value: "zlib"
        }
    });
    var So = {};
    var An = N(function () {}, "flash.utils.Endian");
    Object.defineProperty(An, "BIG_ENDIAN", {
        value: "bigEndian"
    });
    Object.defineProperty(An, "LITTLE_ENDIAN", {
        value: "littleEndian"
    });
    var X = function () {
        Object.defineProperty(this, "__swiffy_v", {
            value: {
                ja: new Uint8Array(0),
                position: 0,
                uk: An.BIG_ENDIAN
            }
        });
        P(this, "objectEncoding", "uint", 0);
        P(this, "shareable", "Boolean", !1)
    }, To, Gn = function (a) {
            return a.__swiffy_v
        }, Uo = N(X, "flash.utils.ByteArray");
    L(Uo, "bytesAvailable", function () {
        var a = Gn(this);
        return Math.max(0, a.ja.length - a.position)
    });
    L(Uo, "endian", function () {
        return Gn(this).uk
    });
    M(Uo, "endian", function (a) {
        a = S(a, "String");
        if (a == An.BIG_ENDIAN || a == An.LITTLE_ENDIAN) Gn(this).uk = a;
        else {
            if (null === a) throw I(2007, "endian");
            throw I(2008, "Parameter type");
        }
    });
    L(Uo, "position", function () {
        return Gn(this).position
    });
    M(Uo, "position", function (a) {
        a = S(a, "uint");
        Gn(this).position = a
    });
    L(Uo, "length", function () {
        return Gn(this).ja.length
    });
    M(Uo, "length", function (a) {
        a = S(a, "uint");
        var b = Gn(this);
        Vo(b, a);
        b.position > a && (b.position = a)
    });
    var Wo = function () {
        if (!To) {
            var a = new ArrayBuffer(4),
                b = new Int8Array(a);
            (new Int32Array(a))[0] = 513;
            var a = b[0],
                c = b[1],
                d = b[2],
                b = b[3];
            if (0 == a && 0 == c && 2 == d && 1 == b) To = An.BIG_ENDIAN;
            else if (1 == a && 2 == c && 0 == d && 0 == b) To = An.LITTLE_ENDIAN;
            else throw "Platform endianness detection failed";
        }
        return To
    }, Vo = function (a, b) {
            var c = a.ja;
            if (b > c.buffer.byteLength) {
                var d = new ArrayBuffer(b + (b >> 3) + (9 > b ? 3 : 6));
                a.ja = new Uint8Array(d, 0, b);
                a.ja.set(c)
            } else b !== c.length && (a.ja = new Uint8Array(c.buffer, 0, b))
        }, Xo = function (a, b) {
            b > a.ja.length &&
                Vo(a, b)
        }, Yo = function (a, b) {
            if (a.position + b > a.ja.length) throw I(2030);
        }, Zo = function (a, b) {
            var c = Gn(a);
            Yo(c, b);
            var d = new Uint8Array(c.ja.buffer, c.position, b);
            c.position += b;
            return d
        }, Bn = function (a, b) {
            var c = Gn(a);
            Xo(c, c.position + b);
            var d = new Uint8Array(c.ja.buffer, c.position, b);
            c.position += b;
            return d
        }, $o = function (a, b, c) {
            var d = Zo(a, c);
            if (1 < c)
                if (Gn(a).uk != Wo()) {
                    a = new Uint8Array(c);
                    c -= 1;
                    for (var e = 0; 0 <= c; --c, e++) a[c] = d[e];
                    d = a
                } else if (d.byteOffset % c || (d.buffer.byteLength - d.byteOffset) % d.byteLength) a = new Uint8Array(c),
            a.set(d), d = a;
            return (new b(d.buffer, d.byteOffset, 1))[0]
        }, ap = function (a, b, c, d) {
            var e = Bn(a, c);
            b = new Uint8Array((new b([d])).buffer);
            if (1 < c && Gn(a).uk != Wo())
                for (a = c - 1, c = 0; 0 <= a; --a, c++) e[a] = b[c];
            else e.set(b)
        };
    Object.defineProperty(Uo, "defaultObjectEncoding", {
        value: 0
    });
    Object.defineProperty(X.prototype, "__swiffy_proxy", {
        value: {
            Md: function (a) {
                a = a.vi(1069, this);
                return Gn(this).ja[a]
            },
            uf: function (a) {
                return a.Sc() < Gn(this).ja.length
            },
            setProperty: function (a, b) {
                var c = a.vi(1056, this);
                b = S(b, "int");
                var d = Gn(this);
                Xo(d, c + 1);
                d.ja[c] = b
            }
        }
    });
    X.prototype.atomicCompareAndSwapIntAt = function (a, b, c) {
        a = S(a, "int");
        b = S(b, "int");
        c = S(c, "int");
        var d = this.position;
        try {
            this.position = a;
            var e = this.readInt();
            e == b && (this.position = a, this.writeInt(c));
            return e
        } finally {
            this.position = d
        }
    };
    X.prototype.atomicCompareAndSwapLength = function (a, b) {
        a = S(a, "int");
        b = S(b, "int");
        var c = this.length;
        c == a && (this.length = b);
        return c
    };
    X.prototype.clear = function () {
        var a = Gn(this);
        a.ja = new Uint8Array(0);
        a.position = 0
    };
    X.prototype.compress = function (a) {
        S(a, "String");
        R(this, "compress")
    };
    X.prototype.deflate = function () {
        R(this, "deflate")
    };
    X.prototype.inflate = function () {
        this.uncompress("deflate")
    };
    X.prototype.readBoolean = function () {
        var a = Gn(this);
        Yo(a, 1);
        return !!a.ja[a.position++]
    };
    X.prototype.readByte = function () {
        var a = Gn(this);
        Yo(a, 1);
        return a.ja[a.position++] << 24 >> 24
    };
    X.prototype.readBytes = function (a, b, c) {
        a = S(a, "flash.utils.ByteArray");
        b = S(b, "uint", 0);
        c = S(c, "uint", 0);
        if (0 == c) {
            var d = Gn(this),
                d = d.ja.length - d.position;
            0 < d && (c = d)
        }
        d = Zo(this, c);
        a = Gn(a);
        Xo(a, b + c);
        (new Uint8Array(a.ja.buffer, b, c)).set(d)
    };
    X.prototype.readDouble = function () {
        return $o(this, Float64Array, 8)
    };
    X.prototype.readFloat = function () {
        return $o(this, Float32Array, 4)
    };
    X.prototype.readInt = function () {
        return $o(this, Int32Array, 4)
    };
    X.prototype.readMultiByte = function (a, b) {
        S(a, "uint");
        S(b, "String");
        R(this, "readMultiByte");
        return ""
    };
    X.prototype.readObject = function () {
        R(this, "readObject")
    };
    X.prototype.readShort = function () {
        return $o(this, Int16Array, 2)
    };
    X.prototype.readUnsignedByte = function () {
        var a = Gn(this);
        Yo(a, 1);
        return a.ja[a.position++]
    };
    X.prototype.readUnsignedInt = function () {
        return $o(this, Uint32Array, 4)
    };
    X.prototype.readUnsignedShort = function () {
        return $o(this, Uint16Array, 2)
    };
    X.prototype.readUTF = function () {
        return this.readUTFBytes(this.readUnsignedShort())
    };
    X.prototype.readUTFBytes = function (a) {
        a = S(a, "uint");
        if (0 == a) return "";
        for (var b = Zo(this, a), c = [], d = 0; d < a; d++) c.push(String.fromCharCode(b[d]));
        return yd(escape(c.join("")))
    };
    X.prototype.toJSON = function (a) {
        S(a, "String");
        return "ByteArray"
    };
    X.prototype.uncompress = function (a) {
        a = S(a, "String", "zlib");
        a = So[a];
        if (!a) throw I(2058);
        var b = Gn(this);
        if (b.ja.length) {
            var c = new Uint8Array(b.ja.length + 1);
            c.set(b.ja);
            try {
                b.ja = a(c), b.position = 0
            } catch (d) {
                throw I(2058);
            }
        }
    };
    X.prototype.writeBoolean = function (a) {
        a = S(a, "Boolean");
        var b = Gn(this);
        Xo(b, b.position + 1);
        b.ja[b.position++] = a ? 1 : 0
    };
    X.prototype.writeByte = function (a) {
        a = S(a, "int");
        var b = Gn(this);
        Xo(b, b.position + 1);
        b.ja[b.position++] = a
    };
    X.prototype.writeBytes = function (a, b, c) {
        a = S(a, "flash.utils.ByteArray");
        b = S(b, "uint", 0);
        c = S(c, "uint", 0);
        a = Gn(a).ja;
        var d = a.length;
        if (b > d || b + c > d) throw I(2006);
        0 == c && (c = d - b);
        Bn(this, c).set(new Uint8Array(a.buffer, b, c))
    };
    X.prototype.writeDouble = function (a) {
        a = S(a, "Number");
        ap(this, Float64Array, 8, a)
    };
    X.prototype.writeFloat = function (a) {
        a = S(a, "Number");
        ap(this, Float32Array, 4, a)
    };
    X.prototype.writeInt = function (a) {
        a = S(a, "int");
        ap(this, Int32Array, 4, a)
    };
    X.prototype.writeMultiByte = function (a, b) {
        S(a, "String");
        S(b, "String");
        R(this, "writeMultiByte")
    };
    X.prototype.writeObject = function () {
        R(this, "writeObject")
    };
    X.prototype.writeShort = function (a) {
        a = S(a, "int");
        ap(this, Int16Array, 2, a)
    };
    X.prototype.writeUnsignedInt = function (a) {
        a = S(a, "uint");
        ap(this, Uint32Array, 4, a)
    };
    X.prototype.writeUTF = function (a) {
        a = S(a, "String");
        a = unescape(encodeURIComponent(a));
        this.writeShort(a.length);
        for (var b = Bn(this, a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
    };
    X.prototype.writeUTFBytes = function (a) {
        a = S(a, "String");
        a = unescape(encodeURIComponent(a));
        for (var b = Bn(this, a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c)
    };
    var Dk = function () {
        Object.defineProperty(this, "__swiffy_v", {
            value: {}
        })
    };
    N(Dk, "flash.utils.Dictionary");
    var bp = 0,
        cp = function (a, b) {
            this.key = m(a) && /^[0-9]+$/.test(a) ? parseInt(a, 10) : a;
            this.value = b
        }, dp = function (a) {
            if (!a.ma && !a.uri) switch (a = a.localName, typeof a) {
            case "object":
                if (null === a) return "_null";
            case "function":
                var b = a.__swiffy_dic_key;
                b || (a.__swiffy_dic_key = b = ++bp);
                return b;
            default:
                return "_" + a
            }
        };
    Object.defineProperty(Dk.prototype, "toJSON", {
        value: function (a) {
            return a = S(a, "String")
        },
        writable: !0,
        configurable: !0
    });
    Object.defineProperty(Dk.prototype, "__swiffy_proxy", {
        value: {
            Kg: function (a, b) {
                var c = dp(a);
                if (c) return c = (c = this.__swiffy_v[c]) && c.value, yl(this, c, b, a);
                throw I(1069, a.eb(), "flash.utils.Dictionary");
            },
            uc: function (a) {
                return (a = dp(a)) ? delete this.__swiffy_v[a] : !1
            },
            Md: function (a) {
                var b = dp(a);
                if (b) return (a = this.__swiffy_v[b]) && a.value;
                throw I(1069, a.eb(), "flash.utils.Dictionary");
            },
            uf: function (a) {
                return (a = dp(a)) ? a in this.__swiffy_v : !1
            },
            ah: function (a) {
                var b = this.__swiffy_v;
                return b[Object.keys(b)[a - 1]].key
            },
            Cf: function (a) {
                var b = this.__swiffy_v;
                return a++ < Object.keys(b).length ? a : 0
            },
            bh: function (a) {
                var b = this.__swiffy_v;
                return b[Object.keys(b)[a - 1]].value
            },
            setProperty: function (a, b) {
                var c = dp(a);
                if (c) this.__swiffy_v[c] = new cp(a.localName, b);
                else throw I(1056, a.eb(), "flash.utils.Dictionary");
            }
        }
    });
    var ep = function (a) {
        return a.__swiffy_v
    }, fp = N(function (a, b) {
            T.call(this);
            var c = ep(this);
            c.qn = null;
            c.xk = !1;
            c.Ir = S(a, "Number");
            c.Kr = S(b, "int", 0);
            c.wi = 0
        }, "flash.utils.Timer", T);
    L(fp, "delay", function () {
        return ep(this).Ir
    });
    M(fp, "delay", function (a) {
        ep(this).Ir = S(a, "Number")
    });
    L(fp, "repeatCount", function () {
        return ep(this).Kr
    });
    M(fp, "repeatCount", function (a) {
        ep(this).Kr = S(a, "int")
    });
    L(fp, "running", function () {
        return ep(this).xk
    });
    L(fp, "currentCount", function () {
        return ep(this).wi
    });
    K(fp, "start", function () {
        var a = ep(this);
        if (!a.xk) {
            var b = this;
            a.qn = window.setInterval(function () {
                a.wi++;
                var c = b.repeatCount;
                (!c || a.wi <= c) && b.dispatchEvent(vl.call(Rm, Sm.TIMER, !1, !1));
                a.wi == c && (b.stop(), b.dispatchEvent(vl.call(Rm, Sm.TIMER_COMPLETE, !1, !1)))
            }, this.delay);
            a.xk = !0
        }
    });
    K(fp, "stop", function () {
        var a = ep(this);
        window.clearTimeout(a.qn);
        a.xk = !1;
        a.qn = null
    });
    K(fp, "reset", function () {
        this.stop();
        ep(this).wi = 0
    });
    var $ = function (a, b, c) {
        Object.defineProperty(this, "__swiffy_v", {
            value: a
        });
        c && gp(this, 0);
        P(this, "fixed", "Boolean", !! b);
        Object.defineProperty(this, "length", {
            get: function () {
                return this.__swiffy_v.length
            },
            set: function (a) {
                a = S(a, "uint");
                if (this.fixed) throw I(1126);
                var b = this.__swiffy_v.length;
                this.__swiffy_v.length = a;
                gp(this, b)
            }
        })
    }, hp = function (a) {
            return a.__swiffy_classdef.__swiffy_v.Ok ? 0 : null
        }, gp = function (a, b) {
            for (var c = a.__swiffy_v, d = hp(a); b < c.length; b++) c[b] = d
        }, ip = function (a, b, c) {
            if (null == b) return hp(a);
            a = a.__swiffy_classdef.__swiffy_v;
            return !a.type || c && !a.Ok ? b : ul(b, a.type)
        }, Cn = function (a, b) {
            var c = Object.create(a.prototype);
            $.call(c, b || []);
            return c
        };
    $.prototype = Object.create(fl.prototype);
    var jp = function (a, b) {
        var c = function (a) {
            if (hl(a, c, !1)) return a;
            if (null == a || Object(a) !== a) throw I(1034, Ek(a), c.__swiffy_name);
            var b = Cn(c);
            a instanceof $ && (a = a.__swiffy_v);
            if (ea(a))
                for (var f = b.__swiffy_v, h = 0; h < a.length; h++) f[h] = ip(b, a[h]);
            return b
        };
        Object.defineProperty(c, "__swiffy_v", {
            value: {
                type: a,
                Ok: b
            }
        });
        return c
    }, kp = function () {
            return function (a, b) {
                a = S(a, "uint", 0);
                b = S(b, "Boolean", !1);
                $.call(this, Array(a), b, !0)
            }
        }, lp = new Ck("__AS3__.vec", "Vector", !1),
        En = function (a, b, c, d) {
            d = d || Lk.prototype;
            var e = (new Jk(lp)).Fr(a &&
                a.__swiffy_name).Gr(),
                f = d[e];
            f || (f = ql(kp(), e, {
                ff: jp(a, b),
                Kv: il,
                Hj: c ? $ : mp
            }), d[e] = f);
            return f
        }, np = function (a, b, c) {
            a = En(a && Lk.prototype[a], b, !0);
            Mk(lp + "$" + c, a);
            return a
        }, mp = np(null, !1, "object");
    np("int", !0, "int");
    var Dn = np("uint", !0, "uint"),
        Fn = np("Number", !0, "double"),
        op = N(function () {
            throw I(1007);
        }, lp);
    Object.defineProperty(op, "__swiffy_type_apply", {
        value: function (a, b) {
            if (1 != b.length) throw "PANIC! Wrong number of vector type parameters";
            return En(b[0], !1, !1, a)
        }
    });
    Object.defineProperty($.prototype, "__swiffy_proxy", {
        value: {
            Kg: function (a, b) {
                var c = a.vi(1069, this),
                    d = this.__swiffy_v;
                if (c >= d.length) throw I(1125, c, d.length);
                c = d[c];
                if (!p(c)) throw I(1006);
                return c.apply(this, b)
            },
            uc: function (a) {
                return !a.Rb(this)
            },
            Md: function (a) {
                a = a.vi(1069, this);
                var b = this.__swiffy_v;
                if (a >= b.length) throw I(1125, a, b.length);
                return b[a]
            },
            uf: function (a) {
                return a.Sc() < this.__swiffy_v.length
            },
            ah: function (a) {
                return a - 1
            },
            Cf: function (a) {
                return ++a > this.__swiffy_v.length ? 0 : a
            },
            bh: function (a) {
                return this.__swiffy_v[a -
                    1]
            },
            setProperty: function (a, b) {
                var c = a.vi(1056, this),
                    d = this.__swiffy_v;
                if (c > d.length || c == d.length && this.fixed) throw I(1125, c, d.length);
                d[c] = ip(this, b)
            }
        }
    });
    var pp = function (a, b, c) {
        if (!hl(c, a, !1)) throw I(1034, Ek(c), a.__swiffy_name);
        b.push.apply(b, c.__swiffy_v)
    }, qp = function (a, b, c, d) {
            if (null != b) {
                b = S(b, "Function");
                for (var e = a.__swiffy_v, f = 0; f < e.length; f++) {
                    var h = e[f],
                        k = b.call(c, h, f, a);
                    if (d && d.call(a, k, h)) return !1
                }
            }
            return !0
        }, rp = function (a, b, c, d) {
            if (a.fixed) throw I(1126);
            var e = a.__swiffy_v,
                f = d.length;
            c = [b, c];
            c.length += f;
            c = e.splice.apply(e, c);
            var h = 0;
            try {
                for (; 0 < f; h++, b++, f--) e[b] = ip(a, d[h])
            } finally {
                for (a = hp(a); 0 < f; b++, f--) e[b] = a
            }
            return c
        };
    $.prototype.concat = function (a) {
        var b = this.__swiffy_classdef,
            c = this.__swiffy_v.slice();
        if (10 < cj.a.vb)
            for (var d = 0; d < arguments.length; d++) pp(b, c, arguments[d]);
        else
            for (d = arguments.length - 1; 0 <= d; d--) pp(b, c, arguments[d]);
        return Cn(b, c)
    };
    V($.prototype, "concat");
    $.prototype.every = function (a, b) {
        return qp(this, a, b, function (a) {
            return !a
        })
    };
    V($.prototype, "every");
    $.prototype.filter = function (a, b) {
        var c = [];
        qp(this, a, b, function (a, b) {
            a && c.push(b)
        });
        return Cn(this.__swiffy_classdef, c)
    };
    V($.prototype, "filter");
    $.prototype.forEach = function (a, b) {
        qp(this, a, b)
    };
    V($.prototype, "forEach");
    $.prototype.indexOf = function (a, b) {
        a = ip(this, a, !0);
        b = S(b, "int", 0);
        return this.__swiffy_v.indexOf(a, b)
    };
    V($.prototype, "indexOf");
    $.prototype.join = function (a) {
        a = S(a, "String", ",");
        return this.__swiffy_v.join(a)
    };
    V($.prototype, "join");
    $.prototype.lastIndexOf = function (a, b) {
        a = ip(this, a, !0);
        b = S(b, "int", 2147483647);
        return this.__swiffy_v.lastIndexOf(a, b)
    };
    V($.prototype, "lastIndexOf");
    $.prototype.map = function (a, b) {
        var c = [];
        qp(this, a, b, function (a) {
            c.push(ip(this, a))
        });
        return Cn(this.__swiffy_classdef, c)
    };
    V($.prototype, "map");
    $.prototype.pop = function () {
        if (this.fixed) throw I(1126);
        var a = this.__swiffy_v;
        return a.length ? a.pop() : this.__swiffy_classdef.__swiffy_v.Ok ? 0 : void 0
    };
    V($.prototype, "pop");
    $.prototype.push = function (a) {
        var b = this.__swiffy_v;
        rp(this, b.length, 0, arguments);
        return b.length
    };
    V($.prototype, "push");
    $.prototype.reverse = function () {
        this.__swiffy_v.reverse();
        return this
    };
    V($.prototype, "reverse");
    $.prototype.shift = function () {
        if (this.fixed) throw I(1126);
        var a = this.__swiffy_v;
        return a.length ? a.shift() : this.__swiffy_classdef.__swiffy_v.Ok ? 0 : void 0
    };
    V($.prototype, "shift");
    $.prototype.slice = function (a, b) {
        a = S(a, "int", 0);
        b = S(b, "int", 16777215);
        return Cn(this.__swiffy_classdef, this.__swiffy_v.slice(a, b))
    };
    V($.prototype, "slice");
    $.prototype.some = function (a, b) {
        return !qp(this, a, b, function (a) {
            return a
        })
    };
    V($.prototype, "some");
    $.prototype.sort = function (a) {
        this.__swiffy_v.sort(a);
        return this
    };
    V($.prototype, "sort");
    $.prototype.splice = function (a, b, c) {
        a = S(a, "int");
        b = S(b, "uint");
        c = Array.prototype.slice.call(arguments, 2);
        return Cn(this.__swiffy_classdef, rp(this, a, b, c))
    };
    V($.prototype, "splice");
    $.prototype.toLocaleString = function () {
        return this.toString()
    };
    $.prototype.unshift = function (a) {
        rp(this, 0, 0, arguments);
        return this.__swiffy_v.length
    };
    V($.prototype, "unshift");
    $.prototype.toString = function () {
        return this.__swiffy_v.join(",")
    };
    var tp = function (a) {
        this.te = Object.create(sp.prototype);
        Object.defineProperty(this.te, "__swiffy_v", {
            value: this
        });
        this.parent = a
    };
    g = tp.prototype;
    g.name = null;
    g.namespaces = null;
    g.attributes = null;
    g.children = null;
    g.value = null;
    g.rk = function (a, b) {
        b.push(this.Nd(a));
        return a
    };
    g.ui = function () {
        return !1
    };
    g.Ik = function () {
        return !this.ui()
    };
    g.Tg = function () {
        if (this.parent)
            for (var a = 0; a < this.parent.children.length; a++)
                if (this.parent.children[a] == this) return a;
        return -1
    };
    g.Vg = function (a, b) {
        return !b && !a.ma && "*" == a.localName
    };
    g.wn = function () {
        return !1
    };
    g.zf = function (a) {
        return a
    };
    g.Wg = function (a) {
        return a
    };
    g.Dn = function (a) {
        return a
    };
    g.En = function (a) {
        return a
    };
    g.Fn = function (a) {
        return a
    };
    var jm = function (a, b, c) {
        tp.call(this, a);
        this.name = b;
        this.namespaces = c || [];
        this.attributes = [];
        this.children = []
    };
    t(jm, tp);
    g = jm.prototype;
    g.ye = "element";
    g.Nd = function (a) {
        var b = [];
        a = this.rk(a, b);
        return up(b, a)
    };
    g.rk = function (a, b, c) {
        a = a || this.ui();
        if (!a) {
            for (a = 0; a < this.children.length; a++) this.children[a].rk(!1, b);
            return !1
        }
        c = new vp(c);
        for (a = 0; a < this.namespaces.length; a++) c.er(this.namespaces[a]);
        var d = c.qr(this.name),
            e = "<" + d;
        for (a = 0; a < this.attributes.length; a++) var f = this.attributes[a],
        e = e + (" " + c.qr(f.name) + '="' + Xi(f.value) + '"');
        e += c.rv();
        if (0 == this.children.length) b.push(e + "/>");
        else if (1 == this.children.length && "text" == this.children[0].ye) b.push(e + ">" + this.children[a].Nd(!0) + "</" + d + ">");
        else {
            f = [];
            for (a =
                0; a < this.children.length; a++) this.children[a].rk(!0, f, c);
            b.push(e + ">");
            b.push(f);
            b.push("</" + d + ">")
        }
        return !0
    };
    g.ui = function () {
        for (var a = 0; a < this.children.length; a++)
            if (this.children[a] instanceof jm) return !0;
        return !1
    };
    g.pb = function (a) {
        a = new jm(a, this.name, this.namespaces.slice());
        for (var b = 0; b < this.attributes.length; b++) a.attributes.push(this.attributes[b].pb(a));
        for (b = 0; b < this.children.length; b++) a.children.push(this.children[b].pb(a));
        return a
    };
    g.Vg = function (a) {
        if (a.ma) return !1;
        if ("*" == a.localName) return !0;
        var b = this.name.__swiffy_v;
        return a.localName == b.localName && a.uri == b.uri
    };
    g.wn = function (a) {
        for (var b = a.ma ? this.attributes : this.children, c = 0; c < b.length; c++)
            if (b[c].Vg(a, !1)) return !0;
        return !1
    };
    g.zf = function (a, b, c) {
        var d = l(c);
        c = (c = d ? c : b.ma) ? this.attributes : this.children;
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            f.Vg(b, d) && a.push(f)
        }
        return a
    };
    g.Wg = function (a, b, c) {
        if (b.ma)
            for (var d = 0; d < this.attributes.length; d++) {
                var e = this.attributes[d];
                e.Vg(b, c) && a.push(e)
            }
        for (d = 0; d < this.children.length; d++) e = this.children[d], e.Vg(b, c) && a.push(e), e.Wg(a, b, c);
        return a
    };
    g.Dn = function (a) {
        for (var b = 0; b < this.attributes.length; b++) a.push(this.attributes[b]);
        return a
    };
    g.En = function (a) {
        for (var b = 0; b < this.children.length; b++) a.push(this.children[b]);
        return a
    };
    g.Fn = function (a, b) {
        for (var c = 0; c < this.children.length; c++) {
            var d = this.children[c];
            d.ye == b && a.push(d)
        }
        return a
    };
    g.xc = function (a, b) {
        this.attributes.push(new wp(this, a, b));
        return this
    };
    g.lf = function (a) {
        a = new jm(this, a, []);
        this.children.push(a);
        return a
    };
    var wp = function (a, b, c) {
        tp.call(this, a);
        this.name = b;
        this.value = c
    };
    t(wp, tp);
    g = wp.prototype;
    g.ye = "attribute";
    g.Nd = function (a) {
        return a ? Xi(this.value) : this.value
    };
    g.pb = function (a) {
        return new wp(a, this.name, this.value)
    };
    g.Tg = function () {
        return -1
    };
    g.Vg = function (a, b) {
        if ("*" == a.localName) return !0;
        var c = this.name.__swiffy_v;
        return a.localName == c.localName && (b && !c.uri || a.uri == c.uri)
    };
    var xp = function (a, b) {
        tp.call(this, a);
        this.value = b
    };
    t(xp, tp);
    xp.prototype.ye = "text";
    xp.prototype.Nd = function (a) {
        return a ? Wi(this.value) : this.value
    };
    xp.prototype.pb = function (a) {
        return new xp(a, this.value)
    };
    var yp = function (a, b) {
        tp.call(this, a);
        this.value = b
    };
    t(yp, tp);
    yp.prototype.ye = "text";
    yp.prototype.Nd = function (a) {
        return a ? "<![CDATA[" + this.value + "]]\x3e" : this.value
    };
    yp.prototype.pb = function (a) {
        return new yp(a, this.value)
    };
    var zp = function (a, b) {
        if (a instanceof Bk) return a.__swiffy_v;
        a = S(a, "String", b);
        var c = "@" == a.charAt(0);
        c && (a = a.substring(1));
        return new Ck("", a, c)
    }, Ap = function (a) {
            try {
                return a.next()
            } catch (b) {
                switch (b.type) {
                case "tag":
                case "close":
                    throw I(1090);
                case "cdata":
                    throw I(1091);
                case "comment":
                    throw I(1094);
                case "processing_instruction":
                    throw I(1097);
                case "attribute":
                    throw I(1095);
                default:
                    throw b;
                }
            }
        }, Bp = function (a, b) {
            for (var c = new Ic, d = 0; d < a.length;) {
                var e = a[d],
                    f = e.name.match(/^xmlns(?::(.*))?$/);
                f ? (c.set(f[1] ||
                    "", e.value), a.splice(d, 1)) : d++
            }
            d = cj.kj;
            b || !d || c.Ld("") || c.set("", d);
            this.Tq = c;
            this.$ = b
        };
    Bp.prototype.bn = function (a, b, c) {
        if (!l(c)) {
            var d = b.indexOf(":");
            c = 0 <= d ? b.substring(0, d) : "";
            b = 0 <= d ? b.substring(d + 1) : b
        }
        if (a && !c) return fm("", b, !0);
        d = this.Tq.get(c);
        if (l(d)) return fm(d, b, a);
        if (this.$) return this.$.bn(a, b, c);
        if (c) throw I(1083, c, b);
        return fm("", b, !1)
    };
    Bp.prototype.Ew = function () {
        return this.Tq.map(function (a, b) {
            return new Kl(b, a)
        })
    };
    var Cp = function (a, b, c, d) {
        for (var e = c || null, f; f = Ap(a);) switch (f.type) {
        case "tag":
            c = f.attributes;
            b = new Bp(c, b);
            for (var h = new jm(e, b.bn(!1, f.value), b.Ew()), k = 0; k < c.length; k++) {
                var n = c[k];
                h.attributes.push(new wp(h, b.bn(!0, n.name), n.value))
            }
            for (;;) {
                c = Cp(a, b, h, f.value);
                if (!c) return h;
                h.children.push(c)
            }
        case "close":
            if (e) {
                if (d != f.value) throw I(1085, e.name.localName);
                return null
            }
            throw I(1088);
        case "text":
            return new xp(e || null, f.value);
        case "cdata":
            return new yp(e || null, f.value)
        }
        if (!c) return null;
        throw I(1085,
            e.name.localName);
    }, vp = function (a) {
            this.Ck = [];
            this.ze = (this.vn = !l(a)) ? {} : a.ze
        };
    vp.prototype.fw = function () {
        if (!this.vn) {
            var a = {}, b;
            for (b in this.ze) a[b] = this.ze[b];
            this.ze = a;
            this.vn = !0
        }
    };
    vp.prototype.er = function (a) {
        var b = a.prefix || "",
            c = a.uri,
            d = this.ze[c];
        d != b && (void 0 === d && (this.fw(), this.ze[c] = b), this.Ck.push(a))
    };
    vp.prototype.qr = function (a) {
        var b = a.uri;
        a = a.localName;
        if (!b) return a;
        var c = this.ze[b];
        if (!c) {
            for (var c = "", d = 0; c in this.ze; d++) c = String.fromCharCode(97 + d / 17576) + String.fromCharCode(97 + d / 17576 % 26) + String.fromCharCode(97 + d / 676 % 26) + String.fromCharCode(97 + d / 26 % 26);
            this.er(new Kl(c, b))
        }
        return c ? c + ":" + a : a
    };
    vp.prototype.rv = function () {
        for (var a = "", b = 0; b < this.Ck.length; b++) {
            var a = a + " xmlns",
                c = this.Ck[b],
                d = c.prefix;
            d && (a += ":" + d);
            a += '="' + Xi(c.uri) + '"'
        }
        this.Ck = [];
        return a
    };
    var up = function (a, b) {
        b = b && cm.prettyPrinting;
        var c = "";
        if (b)
            for (var d = cm.prettyIndent; 0 < d; d--) c += " ";
        var e = [],
            f = function (a, d) {
                for (var n = 0; n < a.length; n++)
                    if (ea(a[n])) f(a[n], d + c);
                    else if (b)
                    for (var q = a[n].trim().split(/\n/), s = 0; s < q.length; s++) e.push(d + q[s]);
                else e.push(a[n])
            };
        f(a, "");
        return e.join(b ? "\n" : "")
    };
    var sp = function (a) {
        if (a instanceof Dp) return a = Ep.call(a, 1088), Fp.copy.call(a);
        if (a instanceof sp) return Fp.copy.call(a);
        if (null != a) {
            a = S(a, "String");
            a = new aj(a, cm.ignoreWhitespace, !1);
            var b = Cp(a);
            b || (b = new xp(null, ""));
            if (Ap(a)) throw I(1088);
            return b.te
        }
        return (new xp(null, "")).te
    }, cm = function (a) {
            return a instanceof sp ? a : a instanceof Dp ? Ep.call(a, 1088) : new sp(a)
        };
    ql(sp, "XML", {
        ff: cm,
        un: sp
    });
    P(cm, "ignoreComments", "Boolean", !0);
    P(cm, "ignoreProcessingInstructions", "Boolean", !0);
    P(cm, "ignoreWhitespace", "Boolean", !0);
    P(cm, "prettyIndent", "int", 2);
    P(cm, "prettyPrinting", "Boolean", !0);
    var Gp = function (a) {
        return 0 == a.Sc() || this.__swiffy_v.wn(a)
    };
    Object.defineProperty(sp.prototype, "__swiffy_proxy", {
        value: {
            Kg: function (a, b) {
                var c = Fp[a];
                if (p(c)) return c.apply(this, b);
                c = String.prototype[a];
                if (p(c) && this.__swiffy_v.Ik()) return c.apply(this.toString(), b);
                throw I(1006, "value");
            },
            uc: function () {
                return !1
            },
            Hk: function (a) {
                a = this.__swiffy_v.Wg([], a, !1);
                return Hp(a)
            },
            Md: function (a) {
                if (0 == a.Sc()) return this;
                a = this.__swiffy_v.zf([], a);
                return Hp(a)
            },
            setProperty: function (a) {
                if (l(a.Sc())) throw I(1087);
            },
            uf: Gp,
            ah: function () {
                return "0"
            },
            Cf: function (a) {
                return 0 ==
                    a ? 1 : 0
            },
            bh: function () {
                return this
            }
        }
    });
    sp.prototype.hasOwnProperty = function (a) {
        return Gp.call(this, zp(a))
    };
    sp.prototype.toString = function () {
        return this.__swiffy_v.Nd(!1)
    };
    sp.prototype.valueOf = function () {
        return this
    };
    sp.prototype.toJSON = function () {
        return "XML"
    };
    var Fp = {
        addNamespace: function () {
            R(this);
            return this
        },
        appendChild: function (a) {
            R(this);
            S(a, "Object");
            return this
        },
        attribute: function (a) {
            a = zp(a);
            a = this.__swiffy_v.zf([], a, !0);
            return Hp(a)
        },
        attributes: function () {
            var a = this.__swiffy_v.Dn([]);
            return Hp(a)
        },
        child: function (a) {
            S(a, "Object");
            R(this);
            return Hp([])
        },
        childIndex: function () {
            return this.__swiffy_v.Tg()
        },
        children: function () {
            var a = this.__swiffy_v.En([]);
            return Hp(a)
        },
        comments: function () {
            R(this);
            return Hp([])
        },
        contains: function (a) {
            S(a, "XML");
            R(this);
            return !1
        },
        copy: function () {
            return this.__swiffy_v.pb(null).te
        }
    };
    cm.defaultSettings = function () {
        return {
            ignoreComments: !0,
            ignoreProcessingInstructions: !0,
            ignoreWhitespace: !0,
            prettyIndent: 2,
            prettyPrinting: !0
        }
    };
    Fp.descendants = function (a) {
        a = zp(a, "*");
        a = this.__swiffy_v.Wg([], a, !0);
        return Hp(a)
    };
    Fp.elements = function (a) {
        a = zp(a, "*");
        a = this.__swiffy_v.zf([], a, !1);
        return Hp(a)
    };
    Fp.hasComplexContent = function () {
        return this.__swiffy_v.ui()
    };
    Fp.hasSimpleContent = function () {
        return this.__swiffy_v.Ik()
    };
    Fp.inScopeNamespaces = function () {
        R(this);
        return []
    };
    Fp.insertChildAfter = function (a, b) {
        S(a, "Object");
        S(b, "Object");
        R(this)
    };
    Fp.insertChildBefore = function (a, b) {
        S(a, "Object");
        S(b, "Object");
        R(this)
    };
    Fp.length = function () {
        return 1
    };
    Fp.localName = function () {
        var a = this.__swiffy_v.name;
        return a ? a.localName : null
    };
    Fp.name = function () {
        return this.__swiffy_v.name
    };
    Fp.namespace = function (a) {
        S(a, "String", "null");
        R(this);
        return null
    };
    Fp.namespaceDeclarations = function () {
        R(this);
        return []
    };
    Fp.nodeKind = function () {
        return this.__swiffy_v.ye
    };
    Fp.normalize = function () {
        R(this);
        return this
    };
    Fp.parent = function () {
        var a = this.__swiffy_v;
        if (a.parent) return a.parent.te
    };
    Fp.prependChild = function (a) {
        S(a, "Object");
        R(this);
        return this
    };
    Fp.processingInstructions = function (a) {
        S(a, "String", "*");
        R(this);
        return Hp([])
    };
    Fp.propertyIsEnumerable = function (a) {
        return "0" == zp(a).Sc()
    };
    Fp.removeNamespace = function (a) {
        S(a, "Namespace");
        R(this);
        return this
    };
    Fp.replace = function (a, b) {
        S(a, "Object");
        S(b, "XML");
        R(this);
        return this
    };
    Fp.setChildren = function (a) {
        S(a, "Object");
        R(this);
        return this
    };
    Fp.setLocalName = function (a) {
        S(a, "String");
        R(this)
    };
    Fp.setName = function (a) {
        S(a, "String");
        R(this)
    };
    Fp.setNamespace = function (a) {
        S(a, "Namespace");
        R(this)
    };
    cm.setSettings = function (a) {
        ia(a) || (a = sp.defaultSettings());
        ga(a.ignoreComments) && (cm.ignoreComments = a.ignoreComments);
        ga(a.ignoreProcessingInstructions) && (cm.ignoreProcessingInstructions = a.ignoreProcessingInstructions);
        ga(a.ignoreWhitespace) && (cm.ignoreWhitespace = a.ignoreWhitespace);
        ha(a.prettyIndent) && (cm.prettyIndent = a.prettyIndent);
        ga(a.prettyPrinting) && (cm.prettyPrinting = a.prettyPrinting)
    };
    cm.settings = function () {
        return {
            ignoreComments: sp.ignoreComments,
            ignoreProcessingInstructions: cm.ignoreProcessingInstructions,
            ignoreWhitespace: sp.ignoreWhitespace,
            prettyIndent: sp.prettyIndent,
            prettyPrinting: sp.prettyPrinting
        }
    };
    Fp.text = function () {
        var a = this.__swiffy_v.Fn([], "text");
        return Hp(a)
    };
    Fp.toXMLString = function () {
        return this.__swiffy_v.Nd(!0)
    };
    var Dp = function (a) {
        if (a instanceof sp) a = [a.__swiffy_v];
        else if (a instanceof Dp) a = a.__swiffy_v.slice();
        else if (null != a && "" != a) {
            a = S(a, "String");
            a = new aj(a, cm.ignoreWhitespace, !1);
            for (var b, c = []; b = Cp(a);) c.push(b);
            a = c
        } else a = [];
        return Hp(a)
    }, dm = function (a) {
            return a instanceof Dp ? a : new Dp(a)
        };
    ql(Dp, "XMLList", {
        ff: dm,
        un: Dp
    });
    var Ip = function (a) {
        for (var b = this.__swiffy_v, c = a.Sc() < b.length, d = 0; !c && d < b.length; d++) c = b[d].wn(a);
        return c
    };
    Object.defineProperty(Dp.prototype, "__swiffy_proxy", {
        value: {
            Kg: function (a, b) {
                var c = Jp[a];
                if (p(c)) return c.apply(this, b);
                c = Fp[a];
                if (p(c)) {
                    var d = Ep.call(this, 1086, a);
                    return c.apply(d, b)
                }
                c = String.prototype[a];
                if (p(c) && (d = Ep.call(this, 1086, a), d.__swiffy_v.Ik())) return c.apply(d.toString(), b);
                throw I(1006, "value");
            },
            uc: function () {
                return !1
            },
            Hk: function (a) {
                for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].Wg(c, a, !1);
                return Hp(c)
            },
            Md: function (a) {
                var b = this.__swiffy_v,
                    c = a.Sc();
                if (l(c)) return Kp(b[c]);
                for (var c = [], d = 0; d < b.length; d++) b[d].zf(c, a);
                return Hp(c)
            },
            setProperty: function (a, b) {
                var c = this.__swiffy_v,
                    d = a.Sc();
                l(d) && (d > c.length && (d = c.length), b instanceof sp && (c[d] = b.__swiffy_v))
            },
            uf: Ip,
            ah: function (a) {
                return String(a - 1)
            },
            Cf: function (a) {
                return ++a > this.__swiffy_v.length ? 0 : a
            },
            bh: function (a) {
                return Kp(this.__swiffy_v[a - 1])
            }
        }
    });
    Dp.prototype.hasOwnProperty = function (a) {
        return Ip.call(this, zp(a))
    };
    Dp.prototype.toString = function () {
        if (Jp.hasComplexContent.call(this)) return Jp.toXMLString.call(this);
        for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) b.push(a[c].Nd(!1));
        return b.join("")
    };
    Dp.prototype.valueOf = function () {
        return this
    };
    Dp.prototype.toJSON = function () {
        return "XMLList"
    };
    var Jp = {
        attribute: function (a) {
            a = zp(a);
            for (var b = this.__swiffy_v, c = 0; c < b.length; c++) b[c].zf([], a, !0);
            return Hp([])
        },
        attributes: function () {
            for (var a = [], b = this.__swiffy_v, c = 0; c < b.length; c++) b[c].Dn(a);
            return Hp(a)
        },
        child: function (a) {
            S(a, "Object");
            R(this);
            return Hp([])
        },
        children: function () {
            for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) a[c].En(b);
            return Hp(b)
        },
        comments: function () {
            R(this);
            return Hp([])
        },
        contains: function (a) {
            S(a, "XML");
            R(this);
            return !1
        },
        copy: function () {
            R(this);
            return Hp([])
        },
        descendants: function (a) {
            a =
                zp(a, "*");
            for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].Wg(c, a, !0);
            return Hp(c)
        },
        elements: function (a) {
            a = zp(a, "*");
            for (var b = this.__swiffy_v, c = [], d = 0; d < b.length; d++) b[d].zf(c, a, !1);
            return Hp(c)
        },
        hasComplexContent: function () {
            var a = this.__swiffy_v;
            if (0 == a.length) return !1;
            if (1 == a.length) return a[0].ui();
            for (var b = 0; b < a.length; b++)
                if ("element" == a[b].ye) return !0;
            return !1
        },
        hasSimpleContent: function () {
            var a = this.__swiffy_v;
            if (0 == a.length) return !0;
            if (1 == a.length) return a[0].Ik();
            for (var b = 0; b < a.length; b++)
                if ("element" ==
                    a[b].ye) return !1;
            return !0
        },
        length: function () {
            return this.__swiffy_v.length
        },
        normalize: function () {
            R(this);
            return Hp([])
        },
        parent: function () {
            var a = this.__swiffy_v;
            if (a.length) {
                for (var b = a[0].parent, c = 1; b && c < a.length; c++)
                    if (a[c].parent != b) return;
                return Kp(b)
            }
        },
        processingInstructions: function (a) {
            S(a, "String", "*");
            R(this);
            return Hp([])
        },
        propertyIsEnumerable: function (a) {
            var b = this.__swiffy_v;
            return zp(a).Sc() < b.length
        },
        text: function () {
            for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) a[c].Fn(b, "text");
            return Hp(b)
        },
        toXMLString: function () {
            for (var a = this.__swiffy_v, b = [], c = 0; c < a.length; c++) b.push(a[c].Nd(!0));
            return b.join("\n")
        }
    }, Hp = function (a) {
            var b = Object.create(Dp.prototype);
            Object.defineProperty(b, "__swiffy_v", {
                value: a
            });
            return b
        }, Ep = function (a, b) {
            var c = this.__swiffy_v;
            if (1 == c.length) return c[0].te;
            throw I.apply(null, arguments);
        }, Kp = function (a) {
            return a ? a.te : void 0
        };
    var Lp = function () {};
    N(Lp, "flash.utils.Proxy");
    Mk("flash.utils.flash_proxy", new Kl(void 0, "http://www.adobe.com/2006/actionscript/flash/proxy"));
    Mk(Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "isAttribute"), function (a) {
        return a instanceof Bk && a.__swiffy_v.ma
    });
    var Mp = function (a) {
        var b = a.localName;
        return a.ma || a.uri || !ha(b) ? new Bk(a) : String(b)
    };
    Object.defineProperty(Lp.prototype, "__swiffy_proxy", {
        value: {
            Kg: function (a, b) {
                a = Mp(a);
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "callProperty")].apply(this, [a].concat(b))
            },
            uc: function (a) {
                a = Mp(a);
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "deleteProperty")].call(this, a)
            },
            Hk: function (a) {
                a = Mp(a);
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "getDescendants")].call(this, a)
            },
            Md: function (a) {
                a = Mp(a);
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy",
                    "getProperty")].call(this, a)
            },
            uf: function (a) {
                a = a.eb();
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "hasProperty")].call(this, a)
            },
            ah: function (a) {
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "nextName")].call(this, S(a, "int"))
            },
            Cf: function (a) {
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "nextNameIndex")].call(this, S(a, "int"))
            },
            bh: function (a) {
                return this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "nextValue")].call(this,
                    S(a, "int"))
            },
            setProperty: function (a, b) {
                a = Mp(a);
                this[Ak("http://www.adobe.com/2006/actionscript/flash/proxy", "setProperty")].call(this, a, b)
            }
        }
    });
    var Np = function (a, b) {
        Object.defineProperty(Lp.prototype, Ak("http://www.adobe.com/2006/actionscript/flash/proxy", a), {
            value: function () {
                throw I(b, a);
            }
        })
    };
    Np("callProperty", 2090);
    Np("deleteProperty", 2092);
    Np("getDescendants", 2093);
    Np("getProperty", 2088);
    Np("hasProperty", 2091);
    Np("setProperty", 2089);
    Np("nextNameIndex", 2105);
    Np("nextName", 2106);
    Np("nextValue", 2107);
    var im = function () {
        this.Fs = {}
    }, hm = null;
    im.prototype.Ta = function (a) {
        var b = this.Fs[a];
        b || ((b = "@" === a.charAt(0)) && (a = a.substring(1)), b = this.Fs[a] = fm("", a, b));
        return b
    };
    im.prototype.Eq = function (a, b, c) {
        var d = c ? al : b.__swiffy_baseclass;
        if (!d) return null;
        for (var e = [], f = d; f; f = f.__swiffy_baseclass) a.lf(this.Ta("extendsClass")).xc(this.Ta("@type"), f.__swiffy_name.eb()), e[f.__swiffy_typeid] = !0;
        if (!c) {
            e[b.__swiffy_typeid] = !0;
            b = b.__swiffy_if;
            for (var h in b) e[h] || (c = b[h], a.lf(this.Ta("implementsInterface")).xc(this.Ta("@type"), c.__swiffy_name.eb()))
        }
        return d
    };
    im.prototype.Ru = function (a, b) {
        for (var c in b.traits)
            if (!(0 <= c.indexOf("."))) {
                var d = b.traits[c],
                    e;
                d instanceof Qk ? (e = a.lf(this.Ta("accessor")), d.qd && d.ve ? e.xc(this.Ta("@access"), "readwrite") : d.qd ? e.xc(this.Ta("@access"), "readonly") : d.ve && e.xc(this.Ta("@access"), "writeonly")) : e = d instanceof Pk ? a.lf(this.Ta("method")) : d.Yu ? a.lf(this.Ta("constant")) : a.lf(this.Ta("variable"));
                e.xc(this.Ta("@name"), c)
            }
    };
})()