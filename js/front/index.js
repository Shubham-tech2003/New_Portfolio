"use strict";
window.jQuery((function(e) {
    let n = Object.assign({}, {
        selector: "div",
        inclass: "",
        outclass: ""
    });
    ! function() {
        let t = window.location.origin + "/data/";
        fetch(t + "animations.json").then((function status(e) {
            return e.status >= 200 && e.status < 300 ? Promise.resolve(e) : (console.warn("Looks like there was a problem. Status Code: " + e.status), Promise.reject(new Error(e.statusText)))
        })).then((function json(e) {
            let n = e.headers.get("content-type");
            if (n && n.includes("application/json")) return e.json();
            if (n && n.includes("text/plain")) return JSON.parse(e);
            throw new TypeError("Oops, we haven't got JSON!")
        })).then((function(e) {
            return Promise.resolve(e.animations)
        })).catch((function(e) {
            return console.warn("Failed to fetch DATA: [", e, "]"), Promise.reject(e)
        })).then((function(t) {
            return Promise.resolve(t).then((function(t) {
                return new Promise((function(o, s) {
                    return e.each(t, (function(t, o) {
                        ! function(t) {
                            let o = Object.assign({}, n || {}, t || {});
                            new window.Waypoint.Inview({
                                element: e(o.selector),
                                enter: function(e) {
                                    this.element.removeClass(o.outclass).addClass(o.inclass)
                                },
                                entered: function(e) {},
                                exit: function(e) {},
                                exited: function(e) {
                                    this.element.removeClass(o.inclass).addClass(o.outclass)
                                },
                                offset: function() {
                                    return 70 + this.element.clientHeight
                                }
                            })
                        }(o)
                    })), o()
                }))
            }))
        })).catch((function(e) {
            return console.warn("Failed to Enable ANIMATIONS: [", e, "]"), Promise.reject(e)
        })).then((function() {
            return console.info("ANIMATIONS ENABLED"), Promise.resolve(!0)
        })).catch((function(e) {
            return console.warn("Failed to Enable ANIMATIONS: [", e, "]"), Promise.reject(e)
        }))
    }(), e.noty.defaults = {
        layout: "topRight",
        theme: "defaultTheme",
        type: "success",
        text: "",
        dismissQueue: !0,
        force: !1,
        maxVisible: 8,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        timeout: 5e3,
        progressBar: !0,
        buttons: !1,
        animation: {
            open: {
                height: "toggle"
            },
            close: "animated flipOutY",
            easing: "swing",
            speed: 500
        },
        closeWith: ["click"],
        modal: !1,
        killer: !1,
        callback: {
            onShow: function() {},
            afterShow: function() {},
            onClose: function() {},
            afterClose: function() {},
            onCloseClick: function() {}
        }
    }, e(window).on("load", (function() {
        e('[name="contact-cell"]').html(atob("KzM4MCg2NykgNzgtemVyby0zMS0xOA==")), e('[name="contact-email"]').prop("href", atob("bWFpbHRvOnRiYWx0cnVzaGFpdGlzQGdtYWlsLmNvbQ==")), console.log(atob("Q09OVEFDVFMgU0VU"))
    })), e(window).ready((function() {
        console.log("WINDOW___READY")
    })), e(document).ready((function() {
        console.log("DOCUMENT___READY")
    })), e(window).on("load", (function() {
        console.log("WINDOW___LOAD")
    }))
}));