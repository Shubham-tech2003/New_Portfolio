if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", (function() {
            i = !0
        }));
        return setTimeout((function() {
            i || t(o).trigger(t.support.transition.end)
        }), e), this
    }, t((function() {
        t.support.transition = function transitionEnd() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        Alert = function(i) {
            t(i).on("click", e, this.close)
        };
    Alert.VERSION = "3.3.7", Alert.TRANSITION_DURATION = 150, Alert.prototype.close = function(e) {
        var i = t(this),
            o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t("#" === o ? [] : o);

        function removeElement() {
            n.detach().trigger("closed.bs.alert").remove()
        }
        e && e.preventDefault(), n.length || (n = i.closest(".alert")), n.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement())
    };
    var i = t.fn.alert;
    t.fn.alert = function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new Alert(this)), "string" == typeof e && o[e].call(i)
        }))
    }, t.fn.alert.Constructor = Alert, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", e, Alert.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    var Button = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, Button.DEFAULTS, i), this.isLoading = !1
    };

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.button"),
                n = "object" == typeof e && e;
            o || i.data("bs.button", o = new Button(this, n)), "toggle" == e ? o.toggle() : e && o.setState(e)
        }))
    }
    Button.VERSION = "3.3.7", Button.DEFAULTS = {
        loadingText: "loading..."
    }, Button.prototype.setState = function(e) {
        var i = "disabled",
            o = this.$element,
            n = o.is("input") ? "val" : "html",
            s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy((function() {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i).prop(i, !1))
        }), this), 0)
    }, Button.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var e = t.fn.button;
    t.fn.button = Plugin, t.fn.button.Constructor = Button, t.fn.button.noConflict = function() {
        return t.fn.button = e, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        var i = t(e.target).closest(".btn");
        Plugin.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    }))
}(jQuery),
function(t) {
    "use strict";
    var Carousel = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                n = t.extend({}, Carousel.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : n.slide;
            o || i.data("bs.carousel", o = new Carousel(this, n)), "number" == typeof e ? o.to(e) : s ? o[s]() : n.interval && o.pause().cycle()
        }))
    }
    Carousel.VERSION = "3.3.7", Carousel.TRANSITION_DURATION = 600, Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, Carousel.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, Carousel.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, Carousel.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, Carousel.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(o)
    }, Carousel.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
            e.to(t)
        })) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, Carousel.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, Carousel.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, Carousel.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            n = i || this.getItemForDirection(e, o),
            s = this.interval,
            r = "next" == e ? "left" : "right",
            a = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var l = n[0],
            h = t.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: r
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(n)]);
                d && d.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, o.addClass(r), n.addClass(r), o.one("bsTransitionEnd", (function() {
                n.removeClass([e, r].join(" ")).addClass("active"), o.removeClass(["active", r].join(" ")), a.sliding = !1, setTimeout((function() {
                    a.$element.trigger(p)
                }), 0)
            })).emulateTransitionEnd(Carousel.TRANSITION_DURATION)) : (o.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var e = t.fn.carousel;
    t.fn.carousel = Plugin, t.fn.carousel.Constructor = Carousel, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = e, this
    };
    var clickHandler = function(e) {
        var i, o = t(this),
            n = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var s = t.extend({}, n.data(), o.data()),
                r = o.attr("data-slide-to");
            r && (s.interval = !1), Plugin.call(n, s), r && n.data("bs.carousel").to(r), e.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler), t(window).on("load", (function() {
        t('[data-ride="carousel"]').each((function() {
            var e = t(this);
            Plugin.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var Collapse = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, Collapse.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };

    function getTargetFromTrigger(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                n = t.extend({}, Collapse.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && n.toggle && /show|hide/.test(e) && (n.toggle = !1), o || i.data("bs.collapse", o = new Collapse(this, n)), "string" == typeof e && o[e]()
        }))
    }
    Collapse.VERSION = "3.3.7", Collapse.TRANSITION_DURATION = 350, Collapse.DEFAULTS = {
        toggle: !0
    }, Collapse.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse")) && e.transitioning)) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (Plugin.call(i, "hide"), e || i.data("bs.collapse", null));
                    var n = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var complete = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return complete.call(this);
                    var s = t.camelCase(["scroll", n].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[n](this.$element[0][s])
                }
            }
        }
    }, Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var complete = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return complete.call(this);
                this.$element[i](0).one("bsTransitionEnd", t.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)
            }
        }
    }, Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, Collapse.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(getTargetFromTrigger(o), o)
        }), this)).end()
    }, Collapse.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var e = t.fn.collapse;
    t.fn.collapse = Plugin, t.fn.collapse.Constructor = Collapse, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = e, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
        var i = t(this);
        i.attr("data-target") || e.preventDefault();
        var o = getTargetFromTrigger(i),
            n = o.data("bs.collapse") ? "toggle" : i.data();
        Plugin.call(o, n)
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-toggle="dropdown"]',
        Dropdown = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };

    function getParent(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function clearMenus(i) {
        i && 3 === i.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
            var e = t(this),
                o = getParent(e),
                n = {
                    relatedTarget: this
                };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (e.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))))
        })))
    }
    Dropdown.VERSION = "3.3.7", Dropdown.prototype.toggle = function(e) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = getParent(i),
                n = o.hasClass("open");
            if (clearMenus(), !n) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", clearMenus);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, Dropdown.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = getParent(o),
                    s = n.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && n.find(e).trigger("focus"), o.trigger("click");
                var r = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (r.length) {
                    var a = r.index(i.target);
                    38 == i.which && a > 0 && a--, 40 == i.which && a < r.length - 1 && a++, ~a || (a = 0), r.eq(a).trigger("focus")
                }
            }
        }
    };
    var i = t.fn.dropdown;
    t.fn.dropdown = function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new Dropdown(this)), "string" == typeof e && o[e].call(i)
        }))
    }, t.fn.dropdown.Constructor = Dropdown, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = i, this
    }, t(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    })).on("click.bs.dropdown.data-api", e, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", e, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    var Modal = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
            this.$element.trigger("loaded.bs.modal")
        }), this))
    };

    function Plugin(e, i) {
        return this.each((function() {
            var o = t(this),
                n = o.data("bs.modal"),
                s = t.extend({}, Modal.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new Modal(this, s)), "string" == typeof e ? n[e](i) : s.show && n.show(i)
        }))
    }
    Modal.VERSION = "3.3.7", Modal.TRANSITION_DURATION = 300, Modal.BACKDROP_TRANSITION_DURATION = 150, Modal.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, Modal.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, Modal.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
            i.$element.one("mouseup.dismiss.bs.modal", (function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            }))
        })), this.backdrop((function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", (function() {
                i.$element.trigger("focus").trigger(n)
            })).emulateTransitionEnd(Modal.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(n)
        })))
    }, Modal.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal())
    }, Modal.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }), this))
    }, Modal.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
            27 == t.which && this.hide()
        }), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, Modal.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, Modal.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop((function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        }))
    }, Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, Modal.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }), this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove()
        } else e && e()
    }, Modal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, Modal.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, Modal.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, Modal.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, Modal.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var e = t.fn.modal;
    t.fn.modal = Plugin, t.fn.modal.Constructor = Modal, t.fn.modal.noConflict = function() {
        return t.fn.modal = e, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
        var i = t(this),
            o = i.attr("href"),
            n = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, n.data(), i.data());
        i.is("a") && e.preventDefault(), n.one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", (function() {
                i.is(":visible") && i.trigger("focus")
            }))
        })), Plugin.call(n, s, this)
    }))
}(jQuery),
function(t) {
    "use strict";
    var Tooltip = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    Tooltip.VERSION = "3.3.7", Tooltip.TRANSITION_DURATION = 150, Tooltip.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, Tooltip.prototype.init = function(e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }, Tooltip.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, Tooltip.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, (function(t, o) {
            i[t] != o && (e[t] = o)
        })), e
    }, Tooltip.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout((function() {
                "in" == i.hoverState && i.show()
            }), i.options.delay.show)
        }
    }, Tooltip.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, Tooltip.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout((function() {
                "out" == i.hoverState && i.hide()
            }), i.options.delay.hide)
        }
    }, Tooltip.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                n = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), n.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(r);
            l && (r = r.replace(a, "") || "top"), n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                d = n[0].offsetWidth,
                p = n[0].offsetHeight;
            if (l) {
                var c = r,
                    f = this.getPosition(this.$viewport);
                r = "bottom" == r && h.bottom + p > f.bottom ? "top" : "top" == r && h.top - p < f.top ? "bottom" : "right" == r && h.right + d > f.width ? "left" : "left" == r && h.left - d < f.left ? "right" : r, n.removeClass(c).addClass(r)
            }
            var u = this.getCalculatedOffset(r, h, d, p);
            this.applyPlacement(u, r);
            var complete = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete()
        }
    }, Tooltip.prototype.applyPlacement = function(e, i) {
        var o = this.tip(),
            n = o[0].offsetWidth,
            s = o[0].offsetHeight,
            r = parseInt(o.css("margin-top"), 10),
            a = parseInt(o.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth,
            h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, Tooltip.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, Tooltip.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, Tooltip.prototype.hide = function(e) {
        var i = this,
            o = t(this.$tip),
            n = t.Event("hide.bs." + this.type);

        function complete() {
            "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        if (this.$element.trigger(n), !n.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete(), this.hoverState = null, this
    }, Tooltip.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }, Tooltip.prototype.getPosition = function(e) {
        var i = (e = e || this.$element)[0],
            o = "BODY" == i.tagName,
            n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement,
            r = o ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            a = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = o ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, a, l, r)
    }, Tooltip.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, Tooltip.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + o;
            a < r.top ? n.top = r.top - a : l > r.top + r.height && (n.top = r.top + r.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < r.left ? n.left = r.left - h : d > r.right && (n.left = r.left + r.width - d)
        }
        return n
    }, Tooltip.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, Tooltip.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, Tooltip.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, Tooltip.prototype.enable = function() {
        this.enabled = !0
    }, Tooltip.prototype.disable = function() {
        this.enabled = !1
    }, Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, Tooltip.prototype.toggle = function(e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, Tooltip.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide((function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        }))
    };
    var e = t.fn.tooltip;
    t.fn.tooltip = function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                n = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new Tooltip(this, n)), "string" == typeof e && o[e]())
        }))
    }, t.fn.tooltip.Constructor = Tooltip, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = e, this
    }
}(jQuery),
function(t) {
    "use strict";
    var Popover = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.7", Popover.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), (Popover.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = Popover, Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }, Popover.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, Popover.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var e = t.fn.popover;
    t.fn.popover = function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.popover"),
                n = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new Popover(this, n)), "string" == typeof e && o[e]())
        }))
    }, t.fn.popover.Constructor = Popover, t.fn.popover.noConflict = function() {
        return t.fn.popover = e, this
    }
}(jQuery),
function(t) {
    "use strict";

    function ScrollSpy(e, i) {
        this.$body = t(document.body), this.$scrollElement = t(e).is(document.body) ? t(window) : t(e), this.options = t.extend({}, ScrollSpy.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                n = "object" == typeof e && e;
            o || i.data("bs.scrollspy", o = new ScrollSpy(this, n)), "string" == typeof e && o[e]()
        }))
    }
    ScrollSpy.VERSION = "3.3.7", ScrollSpy.DEFAULTS = {
        offset: 10
    }, ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, ScrollSpy.prototype.refresh = function() {
        var e = this,
            i = "offset",
            o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
            var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + o, n]
            ] || null
        })).sort((function(t, e) {
            return t[0] - e[0]
        })).each((function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        }))
    }, ScrollSpy.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) r != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, ScrollSpy.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
    }, ScrollSpy.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var e = t.fn.scrollspy;
    t.fn.scrollspy = Plugin, t.fn.scrollspy.Constructor = ScrollSpy, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = e, this
    }, t(window).on("load.bs.scrollspy.data-api", (function() {
        t('[data-spy="scroll"]').each((function() {
            var e = t(this);
            Plugin.call(e, e.data())
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var Tab = function(e) {
        this.element = t(e)
    };

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new Tab(this)), "string" == typeof e && o[e]()
        }))
    }
    Tab.VERSION = "3.3.7", Tab.TRANSITION_DURATION = 150, Tab.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            o = e.data("target");
        if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(o);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), (function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                }))
            }
        }
    }, Tab.prototype.activate = function(e, i, o) {
        var n = i.find("> .active"),
            s = o && t.support.transition && (n.length && n.hasClass("fade") || !!i.find("> .fade").length);

        function next() {
            n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        n.length && s ? n.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next(), n.removeClass("in")
    };
    var e = t.fn.tab;
    t.fn.tab = Plugin, t.fn.tab.Constructor = Tab, t.fn.tab.noConflict = function() {
        return t.fn.tab = e, this
    };
    var clickHandler = function(e) {
        e.preventDefault(), Plugin.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler)
}(jQuery),
function(t) {
    "use strict";
    var Affix = function(e, i) {
        this.options = t.extend({}, Affix.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function Plugin(e) {
        return this.each((function() {
            var i = t(this),
                o = i.data("bs.affix"),
                n = "object" == typeof e && e;
            o || i.data("bs.affix", o = new Affix(this, n)), "string" == typeof e && o[e]()
        }))
    }
    Affix.VERSION = "3.3.7", Affix.RESET = "affix affix-top affix-bottom", Affix.DEFAULTS = {
        offset: 0,
        target: window
    }, Affix.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + r <= t - o) && "bottom";
        var a = null == this.affixed,
            l = a ? n : s.top;
        return null != i && n <= i ? "top" : null != o && l + (a ? r : e) >= t - o && "bottom"
    }, Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                n = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (n = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof n && (n = i.bottom(this.$element));
            var r = this.getState(s, e, o, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (r ? "-" + r : ""),
                    l = t.Event(a + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(Affix.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: s - e - n
            })
        }
    };
    var e = t.fn.affix;
    t.fn.affix = Plugin, t.fn.affix.Constructor = Affix, t.fn.affix.noConflict = function() {
        return t.fn.affix = e, this
    }, t(window).on("load", (function() {
        t('[data-spy="affix"]').each((function() {
            var e = t(this),
                i = e.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), Plugin.call(e, i)
        }))
    }))
}(jQuery);