function() {
    "use strict";
    var e, t = document.createElement("style");
    t.innerHTML = "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
    var n = document.getElementsByTagName("head")[0];
    n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t);
    var o = document.createElement("div");
    function i(e, t, n, o) {
        e && e.addEventListener(t, n, o || !1)
    }
    function r(e, t) {
        var n = window
          , o = w;
        n && n.removeEventListener(e, t, o || !1)
    }
    function a(e, t) {
        e.stopPropagation(),
        t && e.preventDefault()
    }
    function s(e, t, n) {
        n = "" + n,
        e["_s_" + t] !== n && (e.style.setProperty(t, n),
        e["_s_" + t] = n)
    }
    o.innerHTML = "<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    var c, l, d, u, h, m, f, g = [], b = [], p = {
        capture: !0,
        passive: !1
    }, w = {
        capture: !0,
        passive: !0
    }, y = 0, x = 10;
    function v(e, t) {
        if (!(this instanceof v))
            return new v(e);
        if (c || ((c = document.body)[d = "requestFullscreen"] || c[d = "msRequestFullscreen"] || c[d = "webkitRequestFullscreen"] || c[d = "mozRequestFullscreen"] || (d = ""),
        u = d && d.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit"),
        i(window, "resize", (function() {
            I(),
            E()
        }
        )),
        i(c, "mousedown", (function() {
            f = !1
        }
        ), !0),
        i(c, "mousedown", (function() {
            if (!f) {
                var e = b.length;
                if (e)
                    for (--e; 0 <= e; e--) {
                        var t = b[e];
                        if (t.focused) {
                            t.blur();
                            break
                        }
                    }
            }
        }
        )),
        I()),
        e) {
            if (t) {
                var n = e;
                e = t
            }
            if ("string" == typeof e)
                n = e;
            else {
                var r = e.id
                  , l = e.index
                  , g = e.root
                  , p = e.template;
                n = n || e.title;
                var w = e.icon
                  , M = e.mount
                  , L = e.html
                  , S = e.url
                  , A = e.width
                  , z = e.height
                  , B = e.minwidth
                  , N = e.minheight
                  , j = e.maxwidth
                  , T = e.maxheight
                  , D = e.autosize
                  , R = e.overflow
                  , O = e.min
                  , q = e.max
                  , F = e.hidden
                  , H = e.modal
                  , W = e.x || (H ? "center" : 0)
                  , P = e.y || (H ? "center" : 0)
                  , _ = e.top
                  , Z = e.left
                  , G = e.bottom
                  , Y = e.right
                  , U = e.background
                  , Q = e.border
                  , J = e.header
                  , X = e.class
                  , V = e.oncreate
                  , K = e.onclose
                  , $ = e.onfocus
                  , ee = e.onblur
                  , te = e.onmove
                  , ne = e.onresize
                  , oe = e.onfullscreen
                  , ie = e.onmaximize
                  , re = e.onminimize
                  , ae = e.onrestore
                  , se = e.onhide
                  , ce = e.onshow
                  , le = e.onload
            }
        }
        this.g = (p || o).cloneNode(!0),
        this.g.id = this.id = r || "winbox-" + ++y,
        this.g.className = "winbox" + (X ? " " + ("string" == typeof X ? X : X.join(" ")) : "") + (H ? " modal" : ""),
        this.g.winbox = this,
        this.window = this.g,
        this.body = this.g.getElementsByClassName("wb-body")[0],
        this.h = J || 35,
        b.push(this),
        U && this.setBackground(U),
        Q ? s(this.body, "margin", Q + (isNaN(Q) ? "" : "px")) : Q = 0,
        J && (s(t = this.g.getElementsByClassName("wb-header")[0], "height", J + "px"),
        s(t, "line-height", J + "px"),
        s(this.body, "top", J + "px")),
        n && this.setTitle(n),
        w && this.setIcon(w),
        M ? this.mount(M) : L ? this.body.innerHTML = L : S && this.setUrl(S, le),
        _ = _ ? k(_, m) : 0,
        G = G ? k(G, m) : 0,
        Z = Z ? k(Z, h) : 0,
        Y = Y ? k(Y, h) : 0,
        n = h - Z - Y,
        w = m - _ - G,
        j = j ? k(j, n) : n,
        T = T ? k(T, w) : w,
        B = B ? k(B, j) : 150,
        N = N ? k(N, T) : this.h,
        D ? ((g || c).appendChild(this.body),
        A = Math.max(Math.min(this.body.clientWidth + 2 * Q + 1, j), B),
        z = Math.max(Math.min(this.body.clientHeight + this.h + Q + 1, T), N),
        this.g.appendChild(this.body)) : (A = A ? k(A, j) : 0 | Math.max(j / 2, B),
        z = z ? k(z, T) : 0 | Math.max(T / 2, N)),
        W = W ? k(W, n, A) : Z,
        P = P ? k(P, w, z) : _,
        this.x = W,
        this.y = P,
        this.width = A,
        this.height = z,
        this.s = B,
        this.o = N,
        this.m = j,
        this.l = T,
        this.top = _,
        this.right = Y,
        this.bottom = G,
        this.left = Z,
        this.index = l,
        this.j = R,
        this.focused = this.hidden = this.full = this.max = this.min = !1,
        this.onclose = K,
        this.onfocus = $,
        this.onblur = ee,
        this.onmove = te,
        this.onresize = ne,
        this.onfullscreen = oe,
        this.onmaximize = ie,
        this.onminimize = re,
        this.onrestore = ae,
        this.onhide = se,
        this.onshow = ce,
        F ? this.hide() : this.focus(),
        (l || 0 === l) && (this.index = l,
        s(this.g, "z-index", l),
        l > x && (x = l)),
        q ? this.maximize() : O ? this.minimize() : this.resize().move(),
        function(e) {
            C(e, "drag"),
            C(e, "n"),
            C(e, "s"),
            C(e, "w"),
            C(e, "e"),
            C(e, "nw"),
            C(e, "ne"),
            C(e, "se"),
            C(e, "sw"),
            i(e.g.getElementsByClassName("wb-min")[0], "click", (function(t) {
                a(t),
                e.min ? e.restore().focus() : e.minimize()
            }
            )),
            i(e.g.getElementsByClassName("wb-max")[0], "click", (function(t) {
                a(t),
                e.max ? e.restore().focus() : e.maximize().focus()
            }
            )),
            d ? i(e.g.getElementsByClassName("wb-full")[0], "click", (function(t) {
                a(t),
                e.fullscreen().focus()
            }
            )) : e.addClass("no-full"),
            i(e.g.getElementsByClassName("wb-close")[0], "click", (function(t) {
                a(t),
                e.close() || (e = null)
            }
            )),
            i(e.g, "mousedown", (function() {
                f = !0
            }
            ), !0),
            i(e.body, "mousedown", (function() {
                e.focus()
            }
            ), !0)
        }(this),
        (g || c).appendChild(this.g),
        V && V.call(this, e)
    }
    function k(e, t, n) {
        return "string" == typeof e && (e = "center" === e ? (t - n) / 2 + .5 | 0 : "right" === e || "bottom" === e ? t - n : "%" === ("" + (n = parseFloat(e)) !== e && e.substring(("" + n).length)) ? t / 100 * n + .5 | 0 : n),
        e
    }
    function M(e) {
        g.splice(g.indexOf(e), 1),
        E(),
        e.removeClass("min"),
        e.min = !1,
        e.g.title = ""
    }
    function E() {
        for (var e, t = g.length, n = {}, o = {}, i = 0; i < t; i++)
            o[e = (e = g[i]).left + ":" + e.top] ? o[e]++ : (n[e] = 0,
            o[e] = 1);
        i = 0;
        for (var r, a; i < t; i++)
            r = (e = g[i]).left + ":" + e.top,
            a = Math.min((h - e.left - e.right) / o[r], 250),
            e.resize(a + 1 | 0, e.h, !0).move(e.left + n[r] * a | 0, m - e.bottom - e.h, !0),
            n[r]++
    }
    function C(e, t) {
        function n(n) {
            if (a(n, !0),
            e.focus(),
            "drag" === t) {
                if (e.min)
                    return void e.restore();
                if (!e.g.classList.contains("no-max")) {
                    var r = Date.now()
                      , l = r - g;
                    if (g = r,
                    300 > l)
                        return void (e.max ? e.restore() : e.maximize())
                }
            }
            e.min || (c.classList.add("wb-lock"),
            (d = n.touches) && (d = d[0]) ? (n = d,
            i(window, "touchmove", o, w),
            i(window, "touchend", s, w)) : (i(window, "mousemove", o, w),
            i(window, "mouseup", s, w)),
            u = n.pageX,
            f = n.pageY)
        }
        function o(n) {
            a(n),
            d && (n = n.touches[0]);
            var o = n.pageX;
            n = n.pageY;
            var i, r = o - u, s = n - f, c = e.width, l = e.height, g = e.x, b = e.y;
            if ("drag" === t) {
                if (e.g.classList.contains("no-move"))
                    return;
                e.x += r,
                e.y += s;
                var p = i = 1
            } else {
                if ("e" === t || "se" === t || "ne" === t) {
                    e.width += r;
                    var w = 1
                } else
                    "w" !== t && "sw" !== t && "nw" !== t || (e.x += r,
                    e.width -= r,
                    p = w = 1);
                if ("s" === t || "se" === t || "sw" === t) {
                    e.height += s;
                    var y = 1
                } else
                    "n" !== t && "ne" !== t && "nw" !== t || (e.y += s,
                    e.height -= s,
                    i = y = 1)
            }
            w && (e.width = Math.max(Math.min(e.width, e.m, h - e.x - e.right), e.s),
            w = e.width !== c),
            y && (e.height = Math.max(Math.min(e.height, e.l, m - e.y - e.bottom), e.o),
            y = e.height !== l),
            (w || y) && e.resize(),
            p && (e.max && (e.x = (o < h / 3 ? e.left : o > h / 3 * 2 ? h - e.width - e.right : h / 2 - e.width / 2) + r),
            e.x = Math.max(Math.min(e.x, e.j ? h - 30 : h - e.width - e.right), e.j ? 30 - e.width : e.left),
            p = e.x !== g),
            i && (e.max && (e.y = e.top + s),
            e.y = Math.max(Math.min(e.y, e.j ? m - e.h : m - e.height - e.bottom), e.top),
            i = e.y !== b),
            (p || i) && (e.max && e.restore(),
            e.move()),
            (w || p) && (u = o),
            (y || i) && (f = n)
        }
        function s(e) {
            a(e),
            c.classList.remove("wb-lock"),
            d ? (r("touchmove", o),
            r("touchend", s)) : (r("mousemove", o),
            r("mouseup", s))
        }
        var l = e.g.getElementsByClassName("wb-" + t)[0];
        if (l) {
            var d, u, f, g = 0;
            i(l, "mousedown", n, p),
            i(l, "touchstart", n, p)
        }
    }
    function I() {
        var e = document.documentElement;
        h = e.clientWidth,
        m = e.clientHeight
    }
    function L() {
        var e = b.length;
        if (e)
            for (--e; 0 <= e; e--) {
                var t = b[e];
                if (!t.min) {
                    t.focus();
                    break
                }
            }
    }
    function S() {
        if (l.full = !1,
        document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
            return document[u](),
            !0
    }
    v.new = function(e) {
        return new v(e)
    }
    ,
    v.stack = function() {
        return b
    }
    ,
    (e = v.prototype).mount = function(e) {
        return this.unmount(),
        e.i || (e.i = e.parentNode),
        this.body.textContent = "",
        this.body.appendChild(e),
        this
    }
    ,
    e.unmount = function(e) {
        var t = this.body.firstChild;
        if (t) {
            var n = e || t.i;
            n && n.appendChild(t),
            t.i = e
        }
        return this
    }
    ,
    e.setTitle = function(e) {
        var t = this.g.getElementsByClassName("wb-title")[0];
        e = this.title = e;
        var n = t.firstChild;
        return n ? n.nodeValue = e : t.textContent = e,
        this
    }
    ,
    e.setIcon = function(e) {
        var t = this.g.getElementsByClassName("wb-icon")[0];
        return s(t, "background-image", "url(" + e + ")"),
        s(t, "display", "inline-block"),
        this
    }
    ,
    e.setBackground = function(e) {
        return s(this.g, "background", e),
        this
    }
    ,
    e.setUrl = function(e, t) {
        var n = this.body.firstChild;
        return n && "iframe" === n.tagName.toLowerCase() ? n.src = e : (this.body.innerHTML = '<iframe src="' + e + '"></iframe>',
        t && (this.body.firstChild.onload = t)),
        this
    }
    ,
    e.focus = function(e) {
        if (!1 === e)
            return this.blur();
        if (!this.focused) {
            if (1 < (e = b.length))
                for (var t = 1; t <= e; t++) {
                    var n = b[e - t];
                    if (n.focused) {
                        n.blur(),
                        b.push(b.splice(b.indexOf(this), 1)[0]);
                        break
                    }
                }
            s(this.g, "z-index", ++x),
            this.index = x,
            this.addClass("focus"),
            this.focused = !0,
            this.onfocus && this.onfocus()
        }
        return this
    }
    ,
    e.blur = function(e) {
        return !1 === e ? this.focus() : (this.focused && (this.removeClass("focus"),
        this.focused = !1,
        this.onblur && this.onblur()),
        this)
    }
    ,
    e.hide = function(e) {
        return !1 === e ? this.show() : this.hidden ? void 0 : (this.onhide && this.onhide(),
        this.hidden = !0,
        this.addClass("hide"))
    }
    ,
    e.show = function(e) {
        return !1 === e ? this.hide() : this.hidden ? (this.onshow && this.onshow(),
        this.hidden = !1,
        this.removeClass("hide")) : void 0
    }
    ,
    e.minimize = function(e) {
        return !1 === e ? this.restore() : (l && S(),
        this.max && (this.removeClass("max"),
        this.max = !1),
        this.min || (g.push(this),
        E(),
        this.g.title = this.title,
        this.addClass("min"),
        this.min = !0,
        this.focused && (this.blur(),
        L()),
        this.onminimize && this.onminimize()),
        this)
    }
    ,
    e.restore = function() {
        return l && S(),
        this.min && (M(this),
        this.resize().move(),
        this.onrestore && this.onrestore()),
        this.max && (this.max = !1,
        this.removeClass("max").resize().move(),
        this.onrestore && this.onrestore()),
        this
    }
    ,
    e.maximize = function(e) {
        return !1 === e ? this.restore() : (l && S(),
        this.min && M(this),
        this.max || (this.addClass("max").resize(h - this.left - this.right, m - this.top - this.bottom, !0).move(this.left, this.top, !0),
        this.max = !0,
        this.onmaximize && this.onmaximize()),
        this)
    }
    ,
    e.fullscreen = function(e) {
        if (this.min && (M(this),
        this.resize().move()),
        l && S()) {
            if (!1 === e)
                return this.restore()
        } else
            this.body[d](),
            l = this,
            this.full = !0,
            this.onfullscreen && this.onfullscreen();
        return this
    }
    ,
    e.close = function(e) {
        if (this.onclose && this.onclose(e))
            return !0;
        this.min && M(this),
        b.splice(b.indexOf(this), 1),
        this.unmount(),
        this.g.remove(),
        this.g.textContent = "",
        this.g = this.body = this.g.winbox = null,
        this.focused && L()
    }
    ,
    e.move = function(e, t, n) {
        return e || 0 === e ? n || (this.x = e ? e = k(e, h - this.left - this.right, this.width) : 0,
        this.y = t ? t = k(t, m - this.top - this.bottom, this.height) : 0) : (e = this.x,
        t = this.y),
        s(this.g, "left", e + "px"),
        s(this.g, "top", t + "px"),
        this.onmove && this.onmove(e, t),
        this
    }
    ,
    e.resize = function(e, t, n) {
        return e || 0 === e ? n || (this.width = e ? e = k(e, this.m) : 0,
        this.height = t ? t = k(t, this.l) : 0,
        e = Math.max(e, this.s),
        t = Math.max(t, this.o)) : (e = this.width,
        t = this.height),
        s(this.g, "width", e + "px"),
        s(this.g, "height", t + "px"),
        this.onresize && this.onresize(e, t),
        this
    }
    ,
    e.addControl = function(e) {
        var t = e.class
          , n = e.image
          , o = e.click;
        e = e.index;
        var i = document.createElement("span")
          , r = this.g.getElementsByClassName("wb-control")[0]
          , a = this;
        return t && (i.className = t),
        n && s(i, "background-image", "url(" + n + ")"),
        o && (i.onclick = function(e) {
            o.call(this, e, a)
        }
        ),
        r.insertBefore(i, r.childNodes[e || 0]),
        this
    }
    ,
    e.removeControl = function(e) {
        return (e = this.g.getElementsByClassName(e)[0]) && e.remove(),
        this
    }
    ,
    e.addClass = function(e) {
        return this.g.classList.add(e),
        this
    }
    ,
    e.removeClass = function(e) {
        return this.g.classList.remove(e),
        this
    }
    ,
    e.toggleClass = function(e) {
        return this.g.classList.contains(e) ? this.removeClass(e) : this.addClass(e)
    }
    ,
    window.WinBox = v
}
try {
    let e = loadData("blogbg", 1440);
    e ? changeBg(e, 1) : localStorage.removeItem("blogbg")
} catch (e) {
    localStorage.removeItem("blogbg")
}
function changeBg(e, t) {
    let n = document.getElementById("web_bg");
    document.getElementById("svg_bg").style.backgroundImage = "none",
    "#" == e.charAt(0) ? (n.style.backgroundColor = e,
    n.style.backgroundImage = "none") : n.style.backgroundImage = e,
    t || (saveData("blogbg", e),
    btf.snackbarShow("切换背景成功"))
}
var winbox = "";
function resizeWinbox() {
    document.querySelector(".winbox").classList.contains("focus") && winResize()
}
function createWinbox() {
    winbox = WinBox({
        id: "changeBgBox",
        index: 2e3,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: "300px",
        height: "60%",
        background: "var(--leonus-blue)"
    }),
    winResize(),
    window.addEventListener("resize", window.winBoxResize),
    winbox.body.innerHTML = '\n    <div id="article-container" style="padding:10px;">\n    \n    <p><button onclick="localStorage.removeItem(\'blogbg\');location.reload();" style="background:#5FCDFFC8;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>\n    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img1.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.qcqx.cn/img/img1.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img2.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.qcqx.cn/img/img2.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img3.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.qcqx.cn/img/img3.webp)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cdn.qcqx.cn/img/img4.webp)" class="imgbox" onclick="changeBg(\'url(https://cdn.qcqx.cn/img/img4.webp)\')"></a>\n    </div>\n     \n    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)" onclick="changeBg(\'linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg(\'linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg(\'linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)" onclick="changeBg(\'linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)" onclick="changeBg(\'linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)" onclick="changeBg(\'linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)" onclick="changeBg(\'linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)\')"></a>\n    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)" onclick="changeBg(\'linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)\')"></a>\n    </div>\n    \n    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>\n    <div class="bgbox">\n    <a href="javascript:;" title = "白" rel="noopener external nofollow" class="box" style="background: #f7f9fe" onclick="changeBg(\'#f7f9fe\')"></a> \n    <a href="javascript:;" title = "黑" rel="noopener external nofollow" class="box" style="background: #30303c" onclick="changeBg(\'#30303c\')"></a> \n    <a href="javascript:;" title = "锌灰" rel="noopener external nofollow" class="box" style="background: #7a7374" onclick="changeBg(\'#7a7374\')"></a> \n    <a href="javascript:;" title = "晶红" rel="noopener external nofollow" class="box" style="background: #eea6b7" onclick="changeBg(\'#eea6b7\')"></a> \n    <a href="javascript:;" title = "银灰" rel="noopener external nofollow" class="box" style="background: #918072" onclick="changeBg(\'#918072\')"></a> \n    <a href="javascript:;" title = "荷花白" rel="noopener external nofollow" class="box" style="background: #fbecde" onclick="changeBg(\'#fbecde\')"></a> \n    <a href="javascript:;" title = "冰山蓝" rel="noopener external nofollow" class="box" style="background: #a4aca7" onclick="changeBg(\'#a4aca7\')"></a> \n    <a href="javascript:;" title = "玉簪绿" rel="noopener external nofollow" class="box" style="background: #a4cab6" onclick="changeBg(\'#a4cab6\')"></a> \n    <a href="javascript:;" title = "松霜绿" rel="noopener external nofollow" class="box" style="background: #83a78d" onclick="changeBg(\'#83a78d\')"></a> \n    <a href="javascript:;" title = "淡绿灰" rel="noopener external nofollow" class="box" style="background: #70887d" onclick="changeBg(\'#70887d\')"></a> \n    <a href="javascript:;" title = "石绿" rel="noopener external nofollow" class="box" style="background: #57c3c2" onclick="changeBg(\'#57c3c2\')"></a> \n    <a href="javascript:;" title = "甸子蓝" rel="noopener external nofollow" class="box" style="background: #10aec2" onclick="changeBg(\'#10aec2\')"></a> \n    <a href="javascript:;" title = "清水蓝" rel="noopener external nofollow" class="box" style="background: #93d5dc" onclick="changeBg(\'#93d5dc\')"></a> \n    <a href="javascript:;" title = "蜻蜓蓝" rel="noopener external nofollow" class="box" style="background: #3b818c" onclick="changeBg(\'#3b818c\')"></a> \n    <a href="javascript:;" title = "碧青" rel="noopener external nofollow" class="box" style="background: #5cb3cc" onclick="changeBg(\'#5cb3cc\')"></a> \n    <a href="javascript:;" title = "星蓝" rel="noopener external nofollow" class="box" style="background: #93b5cf" onclick="changeBg(\'#93b5cf\')"></a> \n    </div>\n'
}
function winResize() {
    var e = document.documentElement.clientWidth;
    e <= 768 ? winbox.resize(.95 * e + "px", "70%").move("center", "center") : winbox.resize(.6 * e + "px", "70%").move("center", "center")
}
function toggleWinbox() {
    document.querySelector("#changeBgBox") ? winbox.toggleClass("hide") : createWinbox()
}
function catalogActive() {
    let e = document.getElementById("catalog-list");
    if (e) {
        e.addEventListener("mousewheel", (function(t) {
            e.scrollLeft -= t.wheelDelta / 2,
            t.preventDefault()
        }
        ), !1);
        let t = document.getElementById(decodeURIComponent(window.location.pathname));
        t && (t.classList.add("selected"),
        e.scrollLeft = t.offsetLeft - e.offsetLeft - (e.offsetWidth - t.offsetWidth) / 2)
    }
}
window.removeEventListener("resize", window.winBoxResize),
window.winBoxResize = btf.throttle(resizeWinbox, 50),
catalogActive();
const aplayer = document.querySelector(".aplayer.no-destroy");
function removelrc() {
    const e = document.querySelector(".contact-info");
    return e && "none" !== window.getComputedStyle(e).getPropertyValue("display") && document.querySelector(".aplayer-icon-lrc") ? (observer.disconnect(),
    document.querySelector(".aplayer-icon-lrc").click(),
    void (observer = null)) : void 0
}
let observer = new MutationObserver((function(e) {
    for (let t of e)
        "childList" === t.type && removelrc()
}
));
observer.observe(aplayer, {
    childList: !0
});
