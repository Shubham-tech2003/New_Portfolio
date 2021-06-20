! function() {
    "use strict";
    var t = 0,
        e = {};

    function Waypoint(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, o), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), e[this.key] = this, t += 1
    }
    Waypoint.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, Waypoint.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, Waypoint.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete e[this.key]
    }, Waypoint.prototype.disable = function() {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function() {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function(t) {
        var o = [];
        for (var i in e) o.push(e[i]);
        for (var n = 0, r = o.length; n < r; n++) o[n][t]()
    }, Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function() {
        Waypoint.invokeAll("enable")
    }, Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(),
function() {
    "use strict";

    function requestAnimationFrameShim(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    var t = 0,
        e = {},
        o = window.Waypoint,
        i = window.onload;

    function Context(i) {
        this.element = i, this.Adapter = o.Adapter, this.adapter = new this.Adapter(i), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, i.waypointContextKey = this.key, e[i.waypointContextKey] = this, t += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    Context.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, Context.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            o = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && o && (this.adapter.off(".waypoints"), delete e[this.key])
    }, Context.prototype.createThrottledResizeHandler = function() {
        var t = this;

        function resizeHandler() {
            t.handleResize(), t.didResize = !1
        }
        this.adapter.on("resize.waypoints", (function() {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(resizeHandler))
        }))
    }, Context.prototype.createThrottledScrollHandler = function() {
        var t = this;

        function scrollHandler() {
            t.handleScroll(), t.didScroll = !1
        }
        this.adapter.on("scroll.waypoints", (function() {
            t.didScroll && !o.isTouch || (t.didScroll = !0, o.requestAnimationFrame(scrollHandler))
        }))
    }, Context.prototype.handleResize = function() {
        o.Context.refreshAll()
    }, Context.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var o in e) {
            var i = e[o],
                n = i.newScroll > i.oldScroll ? i.forward : i.backward;
            for (var r in this.waypoints[o]) {
                var s = this.waypoints[o][r],
                    a = i.oldScroll < s.triggerPoint,
                    l = i.newScroll >= s.triggerPoint;
                (a && l || !a && !l) && (s.queueTrigger(n), t[s.group.id] = s.group)
            }
        }
        for (var p in t) t[p].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var o in this.waypoints[e]) t.push(this.waypoints[e][o]);
        for (var i = 0, n = t.length; i < n; i++) t[i].destroy()
    }, Context.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            n = {};
        for (var r in this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, p, h, u, c = this.waypoints[r][a],
                    d = c.options.offset,
                    f = c.triggerPoint,
                    y = 0,
                    w = null == f;
                c.element !== c.element.window && (y = c.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(c) : "string" == typeof d && (d = parseFloat(d), c.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, c.triggerPoint = y + l - d, p = f < s.oldScroll, h = c.triggerPoint >= s.oldScroll, u = !p && !h, !w && (p && h) ? (c.queueTrigger(s.backward), n[c.group.id] = c.group) : (!w && u || w && s.oldScroll >= c.triggerPoint) && (c.queueTrigger(s.forward), n[c.group.id] = c.group)
            }
        }
        return o.requestAnimationFrame((function() {
            for (var t in n) n[t].flushTriggers()
        })), this
    }, Context.findOrCreateByElement = function(t) {
        return Context.findByElement(t) || new Context(t)
    }, Context.refreshAll = function() {
        for (var t in e) e[t].refresh()
    }, Context.findByElement = function(t) {
        return e[t.waypointContextKey]
    }, window.onload = function() {
        i && i(), Context.refreshAll()
    }, o.requestAnimationFrame = function(t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim).call(window, t)
    }, o.Context = Context
}(),
function() {
    "use strict";

    function byTriggerPoint(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function byReverseTriggerPoint(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    var t = {
            vertical: {},
            horizontal: {}
        },
        e = window.Waypoint;

    function Group(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), t[this.axis][this.name] = this
    }
    Group.prototype.add = function(t) {
        this.waypoints.push(t)
    }, Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, Group.prototype.flushTriggers = function() {
        for (var t in this.triggerQueues) {
            var e = this.triggerQueues[t],
                o = "up" === t || "left" === t;
            e.sort(o ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, n = e.length; i < n; i += 1) {
                var r = e[i];
                (r.options.continuous || i === e.length - 1) && r.trigger([t])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function(t) {
        this.waypoints.sort(byTriggerPoint);
        var o = e.Adapter.inArray(t, this.waypoints);
        return o === this.waypoints.length - 1 ? null : this.waypoints[o + 1]
    }, Group.prototype.previous = function(t) {
        this.waypoints.sort(byTriggerPoint);
        var o = e.Adapter.inArray(t, this.waypoints);
        return o ? this.waypoints[o - 1] : null
    }, Group.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, Group.prototype.remove = function(t) {
        var o = e.Adapter.inArray(t, this.waypoints);
        o > -1 && this.waypoints.splice(o, 1)
    }, Group.prototype.first = function() {
        return this.waypoints[0]
    }, Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function(e) {
        return t[e.axis][e.name] || new Group(e)
    }, e.Group = Group
}(),
function() {
    "use strict";
    var t = window.jQuery,
        e = window.Waypoint;

    function JQueryAdapter(e) {
        this.$element = t(e)
    }
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], (function(t, e) {
        JQueryAdapter.prototype[e] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[e].apply(this.$element, t)
        }
    })), t.each(["extend", "inArray", "isEmptyObject"], (function(e, o) {
        JQueryAdapter[o] = t[o]
    })), e.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }), e.Adapter = JQueryAdapter
}(),
function() {
    "use strict";
    var t = window.Waypoint;

    function createExtension(e) {
        return function() {
            var o = [],
                i = arguments[0];
            return e.isFunction(arguments[0]) && ((i = e.extend({}, arguments[1])).handler = arguments[0]), this.each((function() {
                var n = e.extend({}, i, {
                    element: this
                });
                "string" == typeof n.context && (n.context = e(this).closest(n.context)[0]), o.push(new t(n))
            })), o
        }
    }
    window.jQuery && (window.jQuery.fn.waypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = createExtension(window.Zepto))
}();