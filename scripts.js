 !(function () {
    function s(n) {
        var r = Object.create(null);
        return function (e) {
            var t = c(e) ? e : JSON.stringify(e);
            return r[t] || (r[t] = n(e));
        };
    }
    var a = s(function (e) {
            return e.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
            });
        }),
        l = Object.prototype.hasOwnProperty,
        b =
            Object.assign ||
            function (e) {
                for (var t = arguments, n = 1; n < arguments.length; n++) {
                    var r,
                        i = Object(t[n]);
                    for (r in i) l.call(i, r) && (e[r] = i[r]);
                }
                return e;
            };
    function c(e) {
        return "string" == typeof e || "number" == typeof e;
    }
    function u() {}
    function p(e) {
        return "function" == typeof e;
    }
    function d(e) {
        e = e.match(/^([^:/?#]+:)?(?:\/{2,}([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        return (
            ("string" == typeof e[1] && 0 < e[1].length && e[1].toLowerCase() !== location.protocol) ||
            ("string" == typeof e[2] &&
                0 < e[2].length &&
                e[2].replace(new RegExp(":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"), "") !== location.host)
        );
    }
    var h = document.body.clientWidth <= 600,
        f =
            window.history &&
            window.history.pushState &&
            window.history.replaceState &&
            !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/),
        n = {};
    function g(e, t) {
        if ((void 0 === t && (t = !1), "string" == typeof e)) {
            if (void 0 !== window.Vue) return k(e);
            e = t ? k(e) : n[e] || (n[e] = k(e));
        }
        return e;
    }
    var m = document,
        v = m.body,
        y = m.head;
    function k(e, t) {
        return t ? e.querySelector(t) : m.querySelector(e);
    }
    function w(e, t) {
        return [].slice.call(t ? e.querySelectorAll(t) : m.querySelectorAll(e));
    }
    function x(e, t) {
        return (e = m.createElement(e)), t && (e.innerHTML = t), e;
    }
    function o(e, t) {
        return e.appendChild(t);
    }
    function _(e, t) {
        return e.insertBefore(t, e.children[0]);
    }
    function S(e, t, n) {
        p(t) ? window.addEventListener(e, t) : e.addEventListener(t, n);
    }
    function A(e, t, n) {
        p(t) ? window.removeEventListener(e, t) : e.removeEventListener(t, n);
    }
    function T(e, t, n) {
        e && e.classList[n ? t : "toggle"](n || t);
    }
    function e(e, t) {
        void 0 === t && (t = document);
        var n = t.readyState;
        if ("complete" === n || "interactive" === n) return setTimeout(e, 0);
        t.addEventListener("DOMContentLoaded", e);
    }
    var t = Object.freeze({
            __proto__: null,
            getNode: g,
            $: m,
            body: v,
            head: y,
            find: k,
            findAll: w,
            create: x,
            appendTo: o,
            before: _,
            on: S,
            off: A,
            toggleClass: T,
            style: function (e) {
                o(y, x("style", e));
            },
            documentReady: e,
        }),
        E = document.currentScript;
    function R(e) {
        var t,
            n = b(
                {
                    el: "#app",
                    repo: "",
                    maxLevel: 6,
                    subMaxLevel: 0,
                    loadSidebar: null,
                    loadNavbar: null,
                    homepage: "README.md",
                    coverpage: "",
                    basePath: "",
                    auto2top: !1,
                    name: "",
                    themeColor: "",
                    nameLink: window.location.pathname,
                    autoHeader: !1,
                    executeScript: null,
                    noEmoji: !1,
                    ga: "",
                    ext: ".md",
                    mergeNavbar: !1,
                    formatUpdated: "",
                    externalLinkTarget: "_blank",
                    cornerExternalLinkTarget: "_blank",
                    externalLinkRel: "noopener",
                    routerMode: "hash",
                    noCompileLinks: [],
                    crossOriginLinks: [],
                    relativePath: !1,
                    topMargin: 0,
                },
                "function" == typeof window.$docsify ? window.$docsify(e) : window.$docsify
            ),
            r =
                E ||
                [].slice.call(document.getElementsByTagName("script")).filter(function (e) {
                    return /docsify\./.test(e.src);
                })[0];
        if (r)
            for (var i in n) {
                !l.call(n, i) || (c((t = r.getAttribute("data-" + a(i)))) && (n[i] = "" === t || t));
            }
        return (
            !0 === n.loadSidebar && (n.loadSidebar = "_sidebar" + n.ext),
            !0 === n.loadNavbar && (n.loadNavbar = "_navbar" + n.ext),
            !0 === n.coverpage && (n.coverpage = "_coverpage" + n.ext),
            !0 === n.repo && (n.repo = ""),
            !0 === n.name && (n.name = ""),
            (window.$docsify = n)
        );
    }
    var $ = /([^{]*?)\w(?=\})/g,
        C = {
            YYYY: "getFullYear",
            YY: "getYear",
            MM: function (e) {
                return e.getMonth() + 1;
            },
            DD: "getDate",
            HH: "getHours",
            mm: "getMinutes",
            ss: "getSeconds",
            fff: "getMilliseconds",
        };
    var i,
        r = Object.hasOwnProperty,
        O = Object.setPrototypeOf,
        L = Object.isFrozen,
        F = Object.getPrototypeOf,
        z = Object.getOwnPropertyDescriptor,
        Re = Object.freeze,
        M = Object.seal,
        N = Object.create,
        P = "undefined" != typeof Reflect && Reflect,
        D =
            (D = P.apply) ||
            function (e, t, n) {
                return e.apply(t, n);
            },
        Re =
            Re ||
            function (e) {
                return e;
            },
        M =
            M ||
            function (e) {
                return e;
            },
        I =
            (I = P.construct) ||
            function (e, t) {
                return new (Function.prototype.bind.apply(
                    e,
                    [null].concat(
                        (function (e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n;
                            }
                            return Array.from(e);
                        })(t)
                    )
                ))();
            },
        $e = j(Array.prototype.forEach),
        Ce = j(Array.prototype.pop),
        Oe = j(Array.prototype.push),
        Le = j(String.prototype.toLowerCase),
        Fe = j(String.prototype.match),
        ze = j(String.prototype.replace),
        Me = j(String.prototype.indexOf),
        Ne = j(String.prototype.trim),
        Pe = j(RegExp.prototype.test),
        De =
            ((i = TypeError),
            function () {
                for (var e = arguments, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = e[r];
                return I(i, n);
            });
    function j(a) {
        return function (e) {
            for (var t = arguments, n = arguments.length, r = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = t[i];
            return D(a, e, r);
        };
    }
    function Ie(e, t) {
        O && O(e, null);
        for (var n = t.length; n--; ) {
            var r,
                i = t[n];
            "string" != typeof i || ((r = Le(i)) !== i && (L(t) || (t[n] = r), (i = r))), (e[i] = !0);
        }
        return e;
    }
    function je(e) {
        var t = N(null),
            n = void 0;
        for (n in e) D(r, e, [n]) && (t[n] = e[n]);
        return t;
    }
    function qe(e, t) {
        for (; null !== e; ) {
            var n = z(e, t);
            if (n) {
                if (n.get) return j(n.get);
                if ("function" == typeof n.value) return j(n.value);
            }
            e = F(e);
        }
        return null;
    }
    var He = Re([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
        ]),
        Ue = Re([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern",
        ]),
        Be = Re([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
        ]),
        Ze = Re([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "fedropshadow",
            "feimage",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use",
        ]),
        Ge = Re([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover",
        ]),
        We = Re([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none",
        ]),
        Ve = Re(["#text"]),
        Ye = Re([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
        ]),
        Xe = Re([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan",
        ]),
        Ke = Re([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns",
        ]),
        Qe = Re(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
        Je = M(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
        et = M(/<%[\s\S]*|[\s\S]*%>/gm),
        tt = M(/^data-[\-\w.\u00B7-\uFFFF]/),
        nt = M(/^aria-[\-\w]+$/),
        rt = M(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
        it = M(/^(?:\w+script|data):/i),
        at = M(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        ot =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  };
    function st(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    var lt = function () {
            return "undefined" == typeof window ? null : window;
        },
        ct = function (e, t) {
            if ("object" !== (void 0 === e ? "undefined" : ot(e)) || "function" != typeof e.createPolicy) return null;
            var n = null,
                r = "data-tt-policy-suffix";
            t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
            var i = "dompurify" + (n ? "#" + n : "");
            try {
                return e.createPolicy(i, {
                    createHTML: function (e) {
                        return e;
                    },
                });
            } catch (e) {
                return console.warn("TrustedTypes policy " + i + " could not be created."), null;
            }
        };
    var q,
        H,
        U = (function t(e) {
            function c(e) {
                return t(e);
            }
            var s = 0 < arguments.length && void 0 !== e ? e : lt();
            if (((c.version = "2.2.6"), (c.removed = []), !s || !s.document || 9 !== s.document.nodeType)) return (c.isSupported = !1), c;
            var l = s.document,
                a = s.document,
                u = s.DocumentFragment,
                n = s.HTMLTemplateElement,
                p = s.Node,
                o = s.Element,
                r = s.NodeFilter,
                i = s.NamedNodeMap,
                d = void 0 === i ? s.NamedNodeMap || s.MozNamedAttrMap : i,
                h = s.Text,
                f = s.Comment,
                g = s.DOMParser,
                e = s.trustedTypes,
                i = o.prototype,
                m = qe(i, "cloneNode"),
                v = qe(i, "nextSibling"),
                b = qe(i, "childNodes"),
                y = qe(i, "parentNode");
            "function" != typeof n ||
                ((n = a.createElement("template")).content && n.content.ownerDocument && (a = n.content.ownerDocument));
            var k = ct(e, l),
                w = k && ee ? k.createHTML("") : "",
                x = a.implementation,
                _ = a.createNodeIterator,
                S = a.getElementsByTagName,
                A = a.createDocumentFragment,
                T = l.importNode,
                E = {};
            try {
                E = je(a).documentMode ? a.documentMode : {};
            } catch (e) {}
            var R = {};
            c.isSupported = x && void 0 !== x.createHTMLDocument && 9 !== E;
            function $(e) {
                (ce && ce === e) ||
                    ((e && "object" === (void 0 === e ? "undefined" : ot(e))) || (e = {}),
                    (e = je(e)),
                    (D = "ALLOWED_TAGS" in e ? Ie({}, e.ALLOWED_TAGS) : I),
                    (j = "ALLOWED_ATTR" in e ? Ie({}, e.ALLOWED_ATTR) : q),
                    (se = "ADD_URI_SAFE_ATTR" in e ? Ie(je(le), e.ADD_URI_SAFE_ATTR) : le),
                    (ae = "ADD_DATA_URI_TAGS" in e ? Ie(je(oe), e.ADD_DATA_URI_TAGS) : oe),
                    (H = "FORBID_TAGS" in e ? Ie({}, e.FORBID_TAGS) : {}),
                    (U = "FORBID_ATTR" in e ? Ie({}, e.FORBID_ATTR) : {}),
                    (C = "USE_PROFILES" in e && e.USE_PROFILES),
                    (B = !1 !== e.ALLOW_ARIA_ATTR),
                    (Z = !1 !== e.ALLOW_DATA_ATTR),
                    (G = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                    (W = e.SAFE_FOR_TEMPLATES || !1),
                    (V = e.WHOLE_DOCUMENT || !1),
                    (K = e.RETURN_DOM || !1),
                    (Q = e.RETURN_DOM_FRAGMENT || !1),
                    (J = !1 !== e.RETURN_DOM_IMPORT),
                    (ee = e.RETURN_TRUSTED_TYPE || !1),
                    (X = e.FORCE_BODY || !1),
                    (te = !1 !== e.SANITIZE_DOM),
                    (ne = !1 !== e.KEEP_CONTENT),
                    (re = e.IN_PLACE || !1),
                    (P = e.ALLOWED_URI_REGEXP || P),
                    W && (Z = !1),
                    Q && (K = !0),
                    C &&
                        ((D = Ie({}, [].concat(st(Ve)))),
                        (j = []),
                        !0 === C.html && (Ie(D, He), Ie(j, Ye)),
                        !0 === C.svg && (Ie(D, Ue), Ie(j, Xe), Ie(j, Qe)),
                        !0 === C.svgFilters && (Ie(D, Be), Ie(j, Xe), Ie(j, Qe)),
                        !0 === C.mathMl && (Ie(D, Ge), Ie(j, Ke), Ie(j, Qe))),
                    e.ADD_TAGS && (D === I && (D = je(D)), Ie(D, e.ADD_TAGS)),
                    e.ADD_ATTR && (j === q && (j = je(j)), Ie(j, e.ADD_ATTR)),
                    e.ADD_URI_SAFE_ATTR && Ie(se, e.ADD_URI_SAFE_ATTR),
                    ne && (D["#text"] = !0),
                    V && Ie(D, ["html", "head", "body"]),
                    D.table && (Ie(D, ["tbody"]), delete H.tbody),
                    Re && Re(e),
                    (ce = e));
            }
            var C,
                O = Je,
                L = et,
                F = tt,
                z = nt,
                M = it,
                N = at,
                P = rt,
                D = null,
                I = Ie({}, [].concat(st(He), st(Ue), st(Be), st(Ge), st(Ve))),
                j = null,
                q = Ie({}, [].concat(st(Ye), st(Xe), st(Ke), st(Qe))),
                H = null,
                U = null,
                B = !0,
                Z = !0,
                G = !1,
                W = !1,
                V = !1,
                Y = !1,
                X = !1,
                K = !1,
                Q = !1,
                J = !0,
                ee = !1,
                te = !0,
                ne = !0,
                re = !1,
                ie = Ie({}, [
                    "annotation-xml",
                    "audio",
                    "colgroup",
                    "desc",
                    "foreignobject",
                    "head",
                    "iframe",
                    "math",
                    "mi",
                    "mn",
                    "mo",
                    "ms",
                    "mtext",
                    "noembed",
                    "noframes",
                    "noscript",
                    "plaintext",
                    "script",
                    "style",
                    "svg",
                    "template",
                    "thead",
                    "title",
                    "video",
                    "xmp",
                ]),
                ae = null,
                oe = Ie({}, ["audio", "video", "img", "source", "image", "track"]),
                se = null,
                le = Ie({}, [
                    "alt",
                    "class",
                    "for",
                    "id",
                    "label",
                    "name",
                    "pattern",
                    "placeholder",
                    "summary",
                    "title",
                    "value",
                    "style",
                    "xmlns",
                ]),
                ce = null,
                ue = a.createElement("form"),
                pe = Ie({}, ["mi", "mo", "mn", "ms", "mtext"]),
                de = Ie({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                he = Ie({}, Ue);
            Ie(he, Be), Ie(he, Ze);
            var fe = Ie({}, Ge);
            Ie(fe, We);
            function ge(t) {
                Oe(c.removed, { element: t });
                try {
                    t.parentNode.removeChild(t);
                } catch (e) {
                    try {
                        t.outerHTML = w;
                    } catch (e) {
                        t.remove();
                    }
                }
            }
            function me(e, t) {
                try {
                    Oe(c.removed, { attribute: t.getAttributeNode(e), from: t });
                } catch (e) {
                    Oe(c.removed, { attribute: null, from: t });
                }
                t.removeAttribute(e);
            }
            function ve(e) {
                var t = void 0,
                    n = void 0;
                X ? (e = "<remove></remove>" + e) : (n = (r = Fe(e, /^[\r\n\t ]+/)) && r[0]);
                var r,
                    i = k ? k.createHTML(e) : e;
                try {
                    t = new g().parseFromString(i, "text/html");
                } catch (e) {}
                return (
                    (t && t.documentElement) ||
                        ((r = (t = x.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild),
                        (r.outerHTML = i)),
                    e && n && t.body.insertBefore(a.createTextNode(n), t.body.childNodes[0] || null),
                    S.call(t, V ? "html" : "body")[0]
                );
            }
            function be(e) {
                return _.call(
                    e.ownerDocument || e,
                    e,
                    r.SHOW_ELEMENT | r.SHOW_COMMENT | r.SHOW_TEXT,
                    function () {
                        return r.FILTER_ACCEPT;
                    },
                    !1
                );
            }
            function ye(e) {
                return "object" === (void 0 === p ? "undefined" : ot(p))
                    ? e instanceof p
                    : e &&
                          "object" === (void 0 === e ? "undefined" : ot(e)) &&
                          "number" == typeof e.nodeType &&
                          "string" == typeof e.nodeName;
            }
            function ke(e, t, n) {
                R[e] &&
                    $e(R[e], function (e) {
                        e.call(c, t, n, ce);
                    });
            }
            function we(e) {
                var t;
                if (
                    (ke("beforeSanitizeElements", e, null),
                    !(
                        (n = e) instanceof h ||
                        n instanceof f ||
                        ("string" == typeof n.nodeName &&
                            "string" == typeof n.textContent &&
                            "function" == typeof n.removeChild &&
                            n.attributes instanceof d &&
                            "function" == typeof n.removeAttribute &&
                            "function" == typeof n.setAttribute &&
                            "string" == typeof n.namespaceURI &&
                            "function" == typeof n.insertBefore)
                    ))
                )
                    return ge(e), 1;
                if (Fe(e.nodeName, /[\u0080-\uFFFF]/)) return ge(e), 1;
                var n = Le(e.nodeName);
                if (
                    (ke("uponSanitizeElement", e, { tagName: n, allowedTags: D }),
                    !ye(e.firstElementChild) &&
                        (!ye(e.content) || !ye(e.content.firstElementChild)) &&
                        Pe(/<[/\w]/g, e.innerHTML) &&
                        Pe(/<[/\w]/g, e.textContent))
                )
                    return ge(e), 1;
                if (D[n] && !H[n])
                    return (e instanceof o &&
                        !(function (e) {
                            var t = y(e);
                            (t && t.tagName) || (t = { namespaceURI: Ee, tagName: "template" });
                            var n = Le(e.tagName),
                                r = Le(t.tagName);
                            return e.namespaceURI === Te
                                ? t.namespaceURI === Ee
                                    ? "svg" === n
                                    : t.namespaceURI === Ae
                                    ? "svg" === n && ("annotation-xml" === r || pe[r])
                                    : Boolean(he[n])
                                : e.namespaceURI === Ae
                                ? t.namespaceURI === Ee
                                    ? "math" === n
                                    : t.namespaceURI === Te
                                    ? "math" === n && de[r]
                                    : Boolean(fe[n])
                                : e.namespaceURI === Ee &&
                                  (t.namespaceURI !== Te || de[r]) &&
                                  (t.namespaceURI !== Ae || pe[r]) &&
                                  ((r = Ie({}, ["title", "style", "font", "a", "script"])), !fe[n] && (r[n] || !he[n]));
                        })(e)) ||
                        (("noscript" === n || "noembed" === n) && Pe(/<\/no(script|embed)/i, e.innerHTML))
                        ? (ge(e), 1)
                        : (W &&
                              3 === e.nodeType &&
                              ((t = e.textContent),
                              (t = ze(t, O, " ")),
                              (t = ze(t, L, " ")),
                              e.textContent !== t && (Oe(c.removed, { element: e.cloneNode() }), (e.textContent = t))),
                          ke("afterSanitizeElements", e, null),
                          0);
                if (ne && !ie[n]) for (var r = y(e), i = b(e), a = i.length - 1; 0 <= a; --a) r.insertBefore(m(i[a], !0), v(e));
                return ge(e), 1;
            }
            function xe(e, t, n) {
                if (te && ("id" === t || "name" === t) && (n in a || n in ue)) return !1;
                if (!((Z && Pe(F, t)) || (B && Pe(z, t)))) {
                    if (!j[t] || U[t]) return !1;
                    if (
                        !se[t] &&
                        !Pe(P, ze(n, N, "")) &&
                        (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== Me(n, "data:") || !ae[e]) &&
                        (!G || Pe(M, ze(n, N, ""))) &&
                        n
                    )
                        return !1;
                }
                return !0;
            }
            function _e(e) {
                var t = void 0,
                    n = void 0;
                ke("beforeSanitizeAttributes", e, null);
                var r = e.attributes;
                if (r) {
                    for (var i = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: j }, n = r.length; n--; ) {
                        var a = (l = r[n]).name,
                            o = l.namespaceURI,
                            t = Ne(l.value),
                            s = Le(a);
                        if (
                            ((i.attrName = s),
                            (i.attrValue = t),
                            (i.keepAttr = !0),
                            (i.forceKeepAttr = void 0),
                            ke("uponSanitizeAttribute", e, i),
                            (t = i.attrValue),
                            !i.forceKeepAttr && (me(a, e), i.keepAttr))
                        )
                            if (Pe(/\/>/i, t)) me(a, e);
                            else {
                                W && ((t = ze(t, O, " ")), (t = ze(t, L, " ")));
                                var l = e.nodeName.toLowerCase();
                                if (xe(l, s, t))
                                    try {
                                        o ? e.setAttributeNS(o, a, t) : e.setAttribute(a, t), Ce(c.removed);
                                    } catch (e) {}
                            }
                    }
                    ke("afterSanitizeAttributes", e, null);
                }
            }
            function Se(e) {
                var t,
                    n = be(e);
                for (ke("beforeSanitizeShadowDOM", e, null); (t = n.nextNode()); )
                    ke("uponSanitizeShadowNode", t, null), we(t) || (t.content instanceof u && Se(t.content), _e(t));
                ke("afterSanitizeShadowDOM", e, null);
            }
            var Ae = "http://www.w3.org/1998/Math/MathML",
                Te = "http://www.w3.org/2000/svg",
                Ee = "http://www.w3.org/1999/xhtml";
            return (
                (c.sanitize = function (e, t) {
                    var n,
                        r = void 0,
                        i = void 0,
                        a = void 0;
                    if ("string" != typeof (e = e || "\x3c!--\x3e") && !ye(e)) {
                        if ("function" != typeof e.toString) throw De("toString is not a function");
                        if ("string" != typeof (e = e.toString())) throw De("dirty is not a string, aborting");
                    }
                    if (!c.isSupported) {
                        if ("object" === ot(s.toStaticHTML) || "function" == typeof s.toStaticHTML) {
                            if ("string" == typeof e) return s.toStaticHTML(e);
                            if (ye(e)) return s.toStaticHTML(e.outerHTML);
                        }
                        return e;
                    }
                    if ((Y || $(t), (c.removed = []), "string" == typeof e && (re = !1), !re))
                        if (e instanceof p)
                            (1 === (t = (r = ve("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === t.nodeName) ||
                            "HTML" === t.nodeName
                                ? (r = t)
                                : r.appendChild(t);
                        else {
                            if (!K && !W && !V && -1 === e.indexOf("<")) return k && ee ? k.createHTML(e) : e;
                            if (!(r = ve(e))) return K ? null : w;
                        }
                    r && X && ge(r.firstChild);
                    for (var o = be(re ? e : r); (n = o.nextNode()); )
                        (3 === n.nodeType && n === i) || we(n) || (n.content instanceof u && Se(n.content), _e(n), (i = n));
                    if (((i = null), re)) return e;
                    if (K) {
                        if (Q) for (a = A.call(r.ownerDocument); r.firstChild; ) a.appendChild(r.firstChild);
                        else a = r;
                        return J && (a = T.call(l, a, !0)), a;
                    }
                    return (
                        (e = V ? r.outerHTML : r.innerHTML), W && ((e = ze(e, O, " ")), (e = ze(e, L, " "))), k && ee ? k.createHTML(e) : e
                    );
                }),
                (c.setConfig = function (e) {
                    $(e), (Y = !0);
                }),
                (c.clearConfig = function () {
                    (ce = null), (Y = !1);
                }),
                (c.isValidAttribute = function (e, t, n) {
                    return ce || $({}), (e = Le(e)), (t = Le(t)), xe(e, t, n);
                }),
                (c.addHook = function (e, t) {
                    "function" == typeof t && ((R[e] = R[e] || []), Oe(R[e], t));
                }),
                (c.removeHook = function (e) {
                    R[e] && Ce(R[e]);
                }),
                (c.removeHooks = function (e) {
                    R[e] && (R[e] = []);
                }),
                (c.removeAllHooks = function () {
                    R = {};
                }),
                c
            );
        })();
    function B(e) {
        var t,
            n = e.loaded,
            r = e.total,
            i = e.step;
        q || ((e = x("div")).classList.add("progress"), o(v, e), (q = e)),
            (t = i ? (80 < (t = parseInt(q.style.width || 0, 10) + i) ? 80 : t) : Math.floor((n / r) * 100)),
            (q.style.opacity = 1),
            (q.style.width = 95 <= t ? "100%" : t + "%"),
            95 <= t &&
                (clearTimeout(H),
                (H = setTimeout(function (e) {
                    (q.style.opacity = 0), (q.style.width = "0%");
                }, 200)));
    }
    var Z = {};
    function G(i, e, t) {
        void 0 === e && (e = !1), void 0 === t && (t = {});
        function a() {
            o.addEventListener.apply(o, arguments);
        }
        var n,
            o = new XMLHttpRequest(),
            r = Z[i];
        if (r)
            return {
                then: function (e) {
                    return e(r.content, r.opt);
                },
                abort: u,
            };
        for (n in (o.open("GET", i), t)) l.call(t, n) && o.setRequestHeader(n, t[n]);
        return (
            o.send(),
            {
                then: function (t, n) {
                    var r;
                    void 0 === n && (n = u),
                        e &&
                            ((r = setInterval(function (e) {
                                return B({ step: Math.floor(5 * Math.random() + 1) });
                            }, 500)),
                            a("progress", B),
                            a("loadend", function (e) {
                                B(e), clearInterval(r);
                            })),
                        a("error", n),
                        a("load", function (e) {
                            e = e.target;
                            400 <= e.status
                                ? n(e)
                                : ((e = Z[i] = { content: e.response, opt: { updatedAt: o.getResponseHeader("last-modified") } }),
                                  t(e.content, e.opt));
                        });
                },
                abort: function (e) {
                    return 4 !== o.readyState && o.abort();
                },
            }
        );
    }
    function W(e, t) {
        e.innerHTML = e.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, t);
    }
    function V(e, t, n, r) {
        void 0 === r && (r = u);
        var i = e._hooks[t],
            a = function (t) {
                var e = i[t];
                t >= i.length
                    ? r(n)
                    : "function" == typeof e
                    ? 2 === e.length
                        ? e(n, function (e) {
                              (n = e), a(t + 1);
                          })
                        : ((e = e(n)), (n = void 0 === e ? n : e), a(t + 1))
                    : a(t + 1);
            };
        a(0);
    }
    var Y = m.title;
    function X() {
        var e,
            t = g("section.cover");
        t &&
            ((e = t.getBoundingClientRect().height),
            window.pageYOffset >= e || t.classList.contains("hidden") ? T(v, "add", "sticky") : T(v, "remove", "sticky"));
    }
    function K(e, t, r, n) {
        var i = [];
        null != (t = g(t)) && (i = w(t, "a"));
        var a,
            o = decodeURI(e.toURL(e.getCurrentPath()));
        return (
            i
                .sort(function (e, t) {
                    return t.href.length - e.href.length;
                })
                .forEach(function (e) {
                    var t = decodeURI(e.getAttribute("href")),
                        n = r ? e.parentNode : e;
                    (e.title = e.title || e.innerText),
                        0 !== o.indexOf(t) || a ? T(n, "remove", "active") : ((a = e), T(n, "add", "active"));
                }),
            n && (m.title = a ? a.title || a.innerText + " - " + Y : Y),
            a
        );
    }
    var Q = decodeURIComponent,
        J = encodeURIComponent;
    function ee(e) {
        var t = {};
        return (
            (e = e.trim().replace(/^(\?|#|&)/, "")) &&
                e.split("&").forEach(function (e) {
                    e = e.replace(/\+/g, " ").split("=");
                    t[e[0]] = e[1] && Q(e[1]);
                }),
            t
        );
    }
    function te(e, t) {
        void 0 === t && (t = []);
        var n,
            r = [];
        for (n in e) -1 < t.indexOf(n) || r.push(e[n] ? (J(n) + "=" + J(e[n])).toLowerCase() : J(n));
        return r.length ? "?" + r.join("&") : "";
    }
    var ne = s(function (e) {
            return /(:|(\/{2}))/g.test(e);
        }),
        re = s(function (e) {
            return e.split(/[?#]/)[0];
        }),
        ie = s(function (e) {
            if (/\/$/g.test(e)) return e;
            e = e.match(/(\S*\/)[^/]+$/);
            return e ? e[1] : "";
        }),
        ae = s(function (e) {
            return e.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/");
        }),
        oe = s(function (e) {
            for (var t = e.replace(/^\//, "").split("/"), n = [], r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                ".." === a ? n.pop() : "." !== a && n.push(a);
            }
            return "/" + n.join("/");
        });
    function se(e) {
        return e
            .split("/")
            .filter(function (e) {
                return -1 === e.indexOf("#");
            })
            .join("/");
    }
    function le() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        return ae(e.map(se).join("/"));
    }
    var ce = s(function (e) {
        return e.replace("#", "?id=");
    });
    function ue(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length);
    }
    function pe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
        }
    }
    var de =
        ((function (e, t, n) {
            return t && pe(e.prototype, t), n && pe(e, n), e;
        })(he, [
            {
                key: "getIntermediateValue",
                value: function (e) {
                    return this.decimal ? e : Math.round(e);
                },
            },
            {
                key: "getFinalValue",
                value: function () {
                    return this.end;
                },
            },
        ]),
        he);
    function he() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, he),
            (this.start = e.start),
            (this.end = e.end),
            (this.decimal = e.decimal);
    }
    function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
        }
    }
    var ge =
        ((function (e, t, n) {
            return t && fe(e.prototype, t), n && fe(e, n), e;
        })(me, [
            {
                key: "begin",
                value: function () {
                    return (
                        this.isRunning || this.next === this.end || (this.frame = window.requestAnimationFrame(this._tick.bind(this))), this
                    );
                },
            },
            {
                key: "stop",
                value: function () {
                    return (
                        window.cancelAnimationFrame(this.frame),
                        (this.isRunning = !1),
                        (this.frame = null),
                        (this.timeStart = null),
                        (this.next = null),
                        this
                    );
                },
            },
            {
                key: "on",
                value: function (e, t) {
                    return (this.events[e] = this.events[e] || []), this.events[e].push(t), this;
                },
            },
            {
                key: "_emit",
                value: function (e, t) {
                    var n = this,
                        e = this.events[e];
                    e &&
                        e.forEach(function (e) {
                            return e.call(n, t);
                        });
                },
            },
            {
                key: "_tick",
                value: function (e) {
                    this.isRunning = !0;
                    var t = this.next || this.start;
                    this.timeStart || (this.timeStart = e),
                        (this.timeElapsed = e - this.timeStart),
                        (this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration)),
                        this._shouldTick(t)
                            ? (this._emit("tick", this.tweener.getIntermediateValue(this.next)),
                              (this.frame = window.requestAnimationFrame(this._tick.bind(this))))
                            : (this._emit("tick", this.tweener.getFinalValue()), this._emit("done", null));
                },
            },
            {
                key: "_shouldTick",
                value: function (e) {
                    return { up: this.next < this.end && e <= this.next, down: this.next > this.end && e >= this.next }[this.direction];
                },
            },
            {
                key: "_defaultEase",
                value: function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? (n / 2) * e * e + t : (-n / 2) * (--e * (e - 2) - 1) + t;
                },
            },
        ]),
        me);
    function me() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, me),
            (this.duration = e.duration || 1e3),
            (this.ease = e.easing || this._defaultEase),
            (this.tweener = e.tweener || new de(e)),
            (this.start = this.tweener.start),
            (this.end = this.tweener.end),
            (this.frame = null),
            (this.next = null),
            (this.isRunning = !1),
            (this.events = {}),
            (this.direction = this.start < this.end ? "up" : "down");
    }
    var ve = {},
        be = !1,
        ye = null,
        ke = !0,
        we = 0;
    function xe(e) {
        if (ke) {
            for (
                var t,
                    n,
                    r = g(".sidebar"),
                    i = w(".anchor"),
                    a = k(r, ".sidebar-nav"),
                    o = k(r, "li.active"),
                    s = document.documentElement,
                    l = ((s && s.scrollTop) || document.body.scrollTop) - we,
                    c = 0,
                    u = i.length;
                c < u;
                c += 1
            ) {
                var p = i[c];
                if (p.offsetTop > l) {
                    t = t || p;
                    break;
                }
                t = p;
            }
            !t ||
                ((n = ve[_e(e, t.getAttribute("data-id"))]) &&
                    n !== o &&
                    (o && o.classList.remove("active"),
                    n.classList.add("active"),
                    (o = n),
                    !be &&
                        v.classList.contains("sticky") &&
                        ((s = r.clientHeight),
                        (e = o.offsetTop + o.clientHeight + 40),
                        (n = o.offsetTop >= a.scrollTop && e <= a.scrollTop + s),
                        (o = +e < s),
                        (r.scrollTop = n ? a.scrollTop : o ? 0 : e - s))));
        }
    }
    function _e(e, t) {
        return decodeURIComponent(e) + "?id=" + decodeURIComponent(t);
    }
    function Se(e, t) {
        var n, r;
        t &&
            ((r = R().topMargin),
            (n = k("#" + t)) &&
                ((n = n),
                void 0 === (r = r) && (r = 0),
                ye && ye.stop(),
                (ke = !1),
                (ye = new ge({
                    start: window.pageYOffset,
                    end: Math.round(n.getBoundingClientRect().top) + window.pageYOffset - r,
                    duration: 500,
                })
                    .on("tick", function (e) {
                        return window.scrollTo(0, e);
                    })
                    .on("done", function () {
                        (ke = !0), (ye = null);
                    })
                    .begin())),
            (e = ve[_e(e, t)]),
            (t = k(g(".sidebar"), "li.active")) && t.classList.remove("active"),
            e && e.classList.add("active"));
    }
    var Ae = m.scrollingElement || m.documentElement;
    var Te =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {};
    function Ee(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    }
    function ut(e) {
        return mt[e];
    }
    var pt = Ee(function (t) {
            function e() {
                return {
                    baseUrl: null,
                    breaks: !1,
                    gfm: !0,
                    headerIds: !0,
                    headerPrefix: "",
                    highlight: null,
                    langPrefix: "language-",
                    mangle: !0,
                    pedantic: !1,
                    renderer: null,
                    sanitize: !1,
                    sanitizer: null,
                    silent: !1,
                    smartLists: !1,
                    smartypants: !1,
                    tokenizer: null,
                    walkTokens: null,
                    xhtml: !1,
                };
            }
            t.exports = {
                defaults: e(),
                getDefaults: e,
                changeDefaults: function (e) {
                    t.exports.defaults = e;
                },
            };
        }),
        dt = (pt.defaults, pt.getDefaults, pt.changeDefaults, /[&<>"']/),
        ht = /[&<>"']/g,
        ft = /[<>"']|&(?!#?\w+;)/,
        gt = /[<>"']|&(?!#?\w+;)/g,
        mt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    var vt = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function bt(e) {
        return e.replace(vt, function (e, t) {
            return "colon" === (t = t.toLowerCase())
                ? ":"
                : "#" === t.charAt(0)
                ? "x" === t.charAt(1)
                    ? String.fromCharCode(parseInt(t.substring(2), 16))
                    : String.fromCharCode(+t.substring(1))
                : "";
        });
    }
    var yt = /(^|[^\[])\^/g;
    var kt = /[^\w:]/g,
        wt = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    var xt = {},
        _t = /^[^:]+:\/*[^/]*$/,
        St = /^([^:]+:)[\s\S]*$/,
        At = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function Tt(e, t) {
        xt[" " + e] || (_t.test(e) ? (xt[" " + e] = e + "/") : (xt[" " + e] = Et(e, "/", !0)));
        var n = -1 === (e = xt[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2)
            ? n
                ? t
                : e.replace(St, "$1") + t
            : "/" === t.charAt(0)
            ? n
                ? t
                : e.replace(At, "$1") + t
            : e + t;
    }
    function Et(e, t, n) {
        var r = e.length;
        if (0 === r) return "";
        for (var i = 0; i < r; ) {
            var a = e.charAt(r - i - 1);
            if (a !== t || n) {
                if (a === t || !n) break;
                i++;
            } else i++;
        }
        return e.substr(0, r - i);
    }
    var Rt = function (e, t) {
            if (t) {
                if (dt.test(e)) return e.replace(ht, ut);
            } else if (ft.test(e)) return e.replace(gt, ut);
            return e;
        },
        $t = bt,
        Ct = function (n, e) {
            (n = n.source || n), (e = e || "");
            var r = {
                replace: function (e, t) {
                    return (t = (t = t.source || t).replace(yt, "$1")), (n = n.replace(e, t)), r;
                },
                getRegex: function () {
                    return new RegExp(n, e);
                },
            };
            return r;
        },
        Ot = function (e, t, n) {
            if (e) {
                var r;
                try {
                    r = decodeURIComponent(bt(n)).replace(kt, "").toLowerCase();
                } catch (e) {
                    return null;
                }
                if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null;
            }
            t && !wt.test(n) && (n = Tt(t, n));
            try {
                n = encodeURI(n).replace(/%25/g, "%");
            } catch (e) {
                return null;
            }
            return n;
        },
        Lt = { exec: function () {} },
        Ft = function (e) {
            for (var t, n, r = arguments, i = 1; i < arguments.length; i++)
                for (n in (t = r[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        },
        zt = function (e, t) {
            var n = e
                    .replace(/\|/g, function (e, t, n) {
                        for (var r = !1, i = t; 0 <= --i && "\\" === n[i]; ) r = !r;
                        return r ? "|" : " |";
                    })
                    .split(/ \|/),
                r = 0;
            if (n.length > t) n.splice(t);
            else for (; n.length < t; ) n.push("");
            for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
            return n;
        },
        Mt = function (e, t) {
            if (-1 === e.indexOf(t[1])) return -1;
            for (var n = e.length, r = 0, i = 0; i < n; i++)
                if ("\\" === e[i]) i++;
                else if (e[i] === t[0]) r++;
                else if (e[i] === t[1] && --r < 0) return i;
            return -1;
        },
        P = function (e) {
            e &&
                e.sanitize &&
                !e.silent &&
                console.warn(
                    "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
                );
        },
        M = function (e, t) {
            if (t < 1) return "";
            for (var n = ""; 1 < t; ) 1 & t && (n += e), (t >>= 1), (e += e);
            return n + e;
        },
        Nt = pt.defaults,
        Pt = Et,
        Dt = zt,
        It = Rt,
        jt = Mt;
    function qt(e, t, n) {
        var r = t.href,
            i = t.title ? It(t.title) : null,
            t = e[1].replace(/\\([\[\]])/g, "$1");
        return "!" !== e[0].charAt(0)
            ? { type: "link", raw: n, href: r, title: i, text: t }
            : { type: "image", raw: n, href: r, title: i, text: It(t) };
    }
    var Ht = (function () {
            function e(e) {
                this.options = e || Nt;
            }
            return (
                (e.prototype.space = function (e) {
                    e = this.rules.block.newline.exec(e);
                    if (e) return 1 < e[0].length ? { type: "space", raw: e[0] } : { raw: "\n" };
                }),
                (e.prototype.code = function (e, t) {
                    e = this.rules.block.code.exec(e);
                    if (e) {
                        t = t[t.length - 1];
                        if (t && "paragraph" === t.type) return { raw: e[0], text: e[0].trimRight() };
                        t = e[0].replace(/^ {1,4}/gm, "");
                        return { type: "code", raw: e[0], codeBlockStyle: "indented", text: this.options.pedantic ? t : Pt(t, "\n") };
                    }
                }),
                (e.prototype.fences = function (e) {
                    var t = this.rules.block.fences.exec(e);
                    if (t) {
                        var n = t[0],
                            e = (function (e, t) {
                                if (null === (e = e.match(/^(\s+)(?:```)/))) return t;
                                var n = e[1];
                                return t
                                    .split("\n")
                                    .map(function (e) {
                                        var t = e.match(/^\s+/);
                                        return null !== t && t[0].length >= n.length ? e.slice(n.length) : e;
                                    })
                                    .join("\n");
                            })(n, t[3] || "");
                        return { type: "code", raw: n, lang: t[2] ? t[2].trim() : t[2], text: e };
                    }
                }),
                (e.prototype.heading = function (e) {
                    var t = this.rules.block.heading.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        return (
                            /#$/.test(n) && ((e = Pt(n, "#")), (!this.options.pedantic && e && !/ $/.test(e)) || (n = e.trim())),
                            { type: "heading", raw: t[0], depth: t[1].length, text: n }
                        );
                    }
                }),
                (e.prototype.nptable = function (e) {
                    e = this.rules.block.nptable.exec(e);
                    if (e) {
                        var t = {
                            type: "table",
                            header: Dt(e[1].replace(/^ *| *\| *$/g, "")),
                            align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                            raw: e[0],
                        };
                        if (t.header.length === t.align.length) {
                            for (var n = t.align.length, r = 0; r < n; r++)
                                /^ *-+: *$/.test(t.align[r])
                                    ? (t.align[r] = "right")
                                    : /^ *:-+: *$/.test(t.align[r])
                                    ? (t.align[r] = "center")
                                    : /^ *:-+ *$/.test(t.align[r])
                                    ? (t.align[r] = "left")
                                    : (t.align[r] = null);
                            for (n = t.cells.length, r = 0; r < n; r++) t.cells[r] = Dt(t.cells[r], t.header.length);
                            return t;
                        }
                    }
                }),
                (e.prototype.hr = function (e) {
                    e = this.rules.block.hr.exec(e);
                    if (e) return { type: "hr", raw: e[0] };
                }),
                (e.prototype.blockquote = function (e) {
                    var t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        e = t[0].replace(/^ *> ?/gm, "");
                        return { type: "blockquote", raw: t[0], text: e };
                    }
                }),
                (e.prototype.list = function (e) {
                    e = this.rules.block.list.exec(e);
                    if (e) {
                        for (
                            var t,
                                n,
                                r,
                                i,
                                a,
                                o = e[0],
                                s = e[2],
                                l = 1 < s.length,
                                c = { type: "list", raw: o, ordered: l, start: l ? +s.slice(0, -1) : "", loose: !1, items: [] },
                                u = e[0].match(this.rules.block.item),
                                p = !1,
                                d = u.length,
                                h = this.rules.block.listItemStart.exec(u[0]),
                                f = 0;
                            f < d;
                            f++
                        ) {
                            if (((o = t = u[f]), f !== d - 1)) {
                                if (
                                    ((r = this.rules.block.listItemStart.exec(u[f + 1])),
                                    this.options.pedantic ? r[1].length > h[1].length : r[1].length > h[0].length || 3 < r[1].length)
                                ) {
                                    u.splice(f, 2, u[f] + "\n" + u[f + 1]), f--, d--;
                                    continue;
                                }
                                (!this.options.pedantic || this.options.smartLists
                                    ? r[2][r[2].length - 1] !== s[s.length - 1]
                                    : l == (1 === r[2].length)) &&
                                    ((n = u.slice(f + 1).join("\n")), (c.raw = c.raw.substring(0, c.raw.length - n.length)), (f = d - 1)),
                                    (h = r);
                            }
                            (r = t.length),
                                ~(t = t.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") &&
                                    ((r -= t.length),
                                    (t = this.options.pedantic
                                        ? t.replace(/^ {1,4}/gm, "")
                                        : t.replace(new RegExp("^ {1," + r + "}", "gm"), ""))),
                                (r = p || /\n\n(?!\s*$)/.test(t)),
                                f !== d - 1 && ((p = "\n" === t.charAt(t.length - 1)), (r = r || p)),
                                r && (c.loose = !0),
                                this.options.gfm &&
                                    ((a = void 0),
                                    (i = /^\[[ xX]\] /.test(t)) && ((a = " " !== t[1]), (t = t.replace(/^\[[ xX]\] +/, "")))),
                                c.items.push({ type: "list_item", raw: o, task: i, checked: a, loose: r, text: t });
                        }
                        return c;
                    }
                }),
                (e.prototype.html = function (e) {
                    e = this.rules.block.html.exec(e);
                    if (e)
                        return {
                            type: this.options.sanitize ? "paragraph" : "html",
                            raw: e[0],
                            pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                            text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(e[0]) : It(e[0])) : e[0],
                        };
                }),
                (e.prototype.def = function (e) {
                    e = this.rules.block.def.exec(e);
                    if (e)
                        return (
                            e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                            { tag: e[1].toLowerCase().replace(/\s+/g, " "), raw: e[0], href: e[2], title: e[3] }
                        );
                }),
                (e.prototype.table = function (e) {
                    e = this.rules.block.table.exec(e);
                    if (e) {
                        var t = {
                            type: "table",
                            header: Dt(e[1].replace(/^ *| *\| *$/g, "")),
                            align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : [],
                        };
                        if (t.header.length === t.align.length) {
                            t.raw = e[0];
                            for (var n = t.align.length, r = 0; r < n; r++)
                                /^ *-+: *$/.test(t.align[r])
                                    ? (t.align[r] = "right")
                                    : /^ *:-+: *$/.test(t.align[r])
                                    ? (t.align[r] = "center")
                                    : /^ *:-+ *$/.test(t.align[r])
                                    ? (t.align[r] = "left")
                                    : (t.align[r] = null);
                            for (n = t.cells.length, r = 0; r < n; r++)
                                t.cells[r] = Dt(t.cells[r].replace(/^ *\| *| *\| *$/g, ""), t.header.length);
                            return t;
                        }
                    }
                }),
                (e.prototype.lheading = function (e) {
                    e = this.rules.block.lheading.exec(e);
                    if (e) return { type: "heading", raw: e[0], depth: "=" === e[2].charAt(0) ? 1 : 2, text: e[1] };
                }),
                (e.prototype.paragraph = function (e) {
                    e = this.rules.block.paragraph.exec(e);
                    if (e) return { type: "paragraph", raw: e[0], text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1] };
                }),
                (e.prototype.text = function (e, t) {
                    e = this.rules.block.text.exec(e);
                    if (e) {
                        t = t[t.length - 1];
                        return t && "text" === t.type ? { raw: e[0], text: e[0] } : { type: "text", raw: e[0], text: e[0] };
                    }
                }),
                (e.prototype.escape = function (e) {
                    e = this.rules.inline.escape.exec(e);
                    if (e) return { type: "escape", raw: e[0], text: It(e[1]) };
                }),
                (e.prototype.tag = function (e, t, n) {
                    e = this.rules.inline.tag.exec(e);
                    if (e)
                        return (
                            !t && /^<a /i.test(e[0]) ? (t = !0) : t && /^<\/a>/i.test(e[0]) && (t = !1),
                            !n && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0])
                                ? (n = !0)
                                : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (n = !1),
                            {
                                type: this.options.sanitize ? "text" : "html",
                                raw: e[0],
                                inLink: t,
                                inRawBlock: n,
                                text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(e[0]) : It(e[0])) : e[0],
                            }
                        );
                }),
                (e.prototype.link = function (e) {
                    var t = this.rules.inline.link.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                            if (!/>$/.test(n)) return;
                            e = Pt(n.slice(0, -1), "\\");
                            if ((n.length - e.length) % 2 == 0) return;
                        } else {
                            var r = jt(t[2], "()");
                            -1 < r &&
                                ((a = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r),
                                (t[2] = t[2].substring(0, r)),
                                (t[0] = t[0].substring(0, a).trim()),
                                (t[3] = ""));
                        }
                        var i,
                            r = t[2],
                            a = "";
                        return (
                            this.options.pedantic
                                ? ((i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)), i && ((r = i[1]), (a = i[3])))
                                : (a = t[3] ? t[3].slice(1, -1) : ""),
                            (r = r.trim()),
                            /^</.test(r) && (r = this.options.pedantic && !/>$/.test(n) ? r.slice(1) : r.slice(1, -1)),
                            qt(
                                t,
                                {
                                    href: r ? r.replace(this.rules.inline._escapes, "$1") : r,
                                    title: a ? a.replace(this.rules.inline._escapes, "$1") : a,
                                },
                                t[0]
                            )
                        );
                    }
                }),
                (e.prototype.reflink = function (e, t) {
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        e = (n[2] || n[1]).replace(/\s+/g, " ");
                        if ((e = t[e.toLowerCase()]) && e.href) return qt(n, e, n[0]);
                        var n = n[0].charAt(0);
                        return { type: "text", raw: n, text: n };
                    }
                }),
                (e.prototype.strong = function (e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.strong.start.exec(e);
                    if (r && (!r[1] || (r[1] && ("" === n || this.rules.inline.punctuation.exec(n))))) {
                        t = t.slice(-1 * e.length);
                        var i,
                            a = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
                        for (a.lastIndex = 0; null != (r = a.exec(t)); )
                            if ((i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))))
                                return { type: "strong", raw: e.slice(0, i[0].length), text: e.slice(2, i[0].length - 2) };
                    }
                }),
                (e.prototype.em = function (e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.em.start.exec(e);
                    if (r && (!r[1] || (r[1] && ("" === n || this.rules.inline.punctuation.exec(n))))) {
                        t = t.slice(-1 * e.length);
                        var i,
                            a = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
                        for (a.lastIndex = 0; null != (r = a.exec(t)); )
                            if ((i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))))
                                return { type: "em", raw: e.slice(0, i[0].length), text: e.slice(1, i[0].length - 1) };
                    }
                }),
                (e.prototype.codespan = function (e) {
                    var t = this.rules.inline.code.exec(e);
                    if (t) {
                        var n = t[2].replace(/\n/g, " "),
                            r = /[^ ]/.test(n),
                            e = /^ /.test(n) && / $/.test(n);
                        return r && e && (n = n.substring(1, n.length - 1)), (n = It(n, !0)), { type: "codespan", raw: t[0], text: n };
                    }
                }),
                (e.prototype.br = function (e) {
                    e = this.rules.inline.br.exec(e);
                    if (e) return { type: "br", raw: e[0] };
                }),
                (e.prototype.del = function (e) {
                    e = this.rules.inline.del.exec(e);
                    if (e) return { type: "del", raw: e[0], text: e[2] };
                }),
                (e.prototype.autolink = function (e, t) {
                    e = this.rules.inline.autolink.exec(e);
                    if (e) {
                        var n,
                            t = "@" === e[2] ? "mailto:" + (n = It(this.options.mangle ? t(e[1]) : e[1])) : (n = It(e[1]));
                        return { type: "link", raw: e[0], text: n, href: t, tokens: [{ type: "text", raw: n, text: n }] };
                    }
                }),
                (e.prototype.url = function (e, t) {
                    var n, r, i, a;
                    if ((n = this.rules.inline.url.exec(e))) {
                        if ("@" === n[2]) i = "mailto:" + (r = It(this.options.mangle ? t(n[0]) : n[0]));
                        else {
                            for (; (a = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]), a !== n[0]; );
                            (r = It(n[0])), (i = "www." === n[1] ? "http://" + r : r);
                        }
                        return { type: "link", raw: n[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
                    }
                }),
                (e.prototype.inlineText = function (e, t, n) {
                    e = this.rules.inline.text.exec(e);
                    if (e) {
                        n = t
                            ? this.options.sanitize
                                ? this.options.sanitizer
                                    ? this.options.sanitizer(e[0])
                                    : It(e[0])
                                : e[0]
                            : It(this.options.smartypants ? n(e[0]) : e[0]);
                        return { type: "text", raw: e[0], text: n };
                    }
                }),
                e
            );
        })(),
        zt = Lt,
        Mt = Ct,
        Lt = Ft,
        Ct = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
            html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            nptable: zt,
            table: zt,
            lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
        };
    (Ct.def = Mt(Ct.def).replace("label", Ct._label).replace("title", Ct._title).getRegex()),
        (Ct.bullet = /(?:[*+-]|\d{1,9}[.)])/),
        (Ct.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
        (Ct.item = Mt(Ct.item, "gm").replace(/bull/g, Ct.bullet).getRegex()),
        (Ct.listItemStart = Mt(/^( *)(bull)/)
            .replace("bull", Ct.bullet)
            .getRegex()),
        (Ct.list = Mt(Ct.list)
            .replace(/bull/g, Ct.bullet)
            .replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
            .replace("def", "\\n+(?=" + Ct.def.source + ")")
            .getRegex()),
        (Ct._tag =
            "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
        (Ct._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
        (Ct.html = Mt(Ct.html, "i")
            .replace("comment", Ct._comment)
            .replace("tag", Ct._tag)
            .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
            .getRegex()),
        (Ct.paragraph = Mt(Ct._paragraph)
            .replace("hr", Ct.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("|lheading", "")
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
            .replace("tag", Ct._tag)
            .getRegex()),
        (Ct.blockquote = Mt(Ct.blockquote).replace("paragraph", Ct.paragraph).getRegex()),
        (Ct.normal = Lt({}, Ct)),
        (Ct.gfm = Lt({}, Ct.normal, {
            nptable:
                "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
            table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        })),
        (Ct.gfm.nptable = Mt(Ct.gfm.nptable)
            .replace("hr", Ct.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
            .replace("tag", Ct._tag)
            .getRegex()),
        (Ct.gfm.table = Mt(Ct.gfm.table)
            .replace("hr", Ct.hr)
            .replace("heading", " {0,3}#{1,6} ")
            .replace("blockquote", " {0,3}>")
            .replace("code", " {4}[^\\n]")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
            .replace("tag", Ct._tag)
            .getRegex()),
        (Ct.pedantic = Lt({}, Ct.normal, {
            html: Mt(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
            )
                .replace("comment", Ct._comment)
                .replace(
                    /tag/g,
                    "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                )
                .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: zt,
            paragraph: Mt(Ct.normal._paragraph)
                .replace("hr", Ct.hr)
                .replace("heading", " *#{1,6} *[^\n]")
                .replace("lheading", Ct.lheading)
                .replace("blockquote", " {0,3}>")
                .replace("|fences", "")
                .replace("|list", "")
                .replace("|html", "")
                .getRegex(),
        }));
    zt = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: zt,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
         strong: {
            start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
            middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
            endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/,
        },
        em: {
            start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
            middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
            endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
            endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/,
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: zt,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\s*punctuation])/,
        _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
    };
    (zt.punctuation = Mt(zt.punctuation)
        .replace(/punctuation/g, zt._punctuation)
        .getRegex()),
        (zt._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>"),
        (zt._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*"),
        (zt._comment = Mt(Ct._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
        (zt.em.start = Mt(zt.em.start)
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.em.middle = Mt(zt.em.middle)
            .replace(/punctuation/g, zt._punctuation)
            .replace(/overlapSkip/g, zt._overlapSkip)
            .getRegex()),
        (zt.em.endAst = Mt(zt.em.endAst, "g")
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.em.endUnd = Mt(zt.em.endUnd, "g")
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.strong.start = Mt(zt.strong.start)
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.strong.middle = Mt(zt.strong.middle)
            .replace(/punctuation/g, zt._punctuation)
            .replace(/overlapSkip/g, zt._overlapSkip)
            .getRegex()),
        (zt.strong.endAst = Mt(zt.strong.endAst, "g")
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.strong.endUnd = Mt(zt.strong.endUnd, "g")
            .replace(/punctuation/g, zt._punctuation)
            .getRegex()),
        (zt.blockSkip = Mt(zt._blockSkip, "g").getRegex()),
        (zt.overlapSkip = Mt(zt._overlapSkip, "g").getRegex()),
        (zt._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
        (zt._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
        (zt._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
        (zt.autolink = Mt(zt.autolink).replace("scheme", zt._scheme).replace("email", zt._email).getRegex()),
        (zt._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
        (zt.tag = Mt(zt.tag).replace("comment", zt._comment).replace("attribute", zt._attribute).getRegex()),
        (zt._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
        (zt._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
        (zt._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
        (zt.link = Mt(zt.link).replace("label", zt._label).replace("href", zt._href).replace("title", zt._title).getRegex()),
        (zt.reflink = Mt(zt.reflink).replace("label", zt._label).getRegex()),
         (zt.normal = Lt({}, zt)),
        (zt.pedantic = Lt({}, zt.normal, {
            strong: {
                start: /^__|\*\*/,
                middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                endAst: /\*\*(?!\*)/g,
                endUnd: /__(?!_)/g,
            },
            em: {
                start: /^_|\*/,
                middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                endAst: /\*(?!\*)/g,
                endUnd: /_(?!_)/g,
            },
            link: Mt(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", zt._label)
                .getRegex(),
            reflink: Mt(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", zt._label)
                .getRegex(),
        })),
        (zt.gfm = Lt({}, zt.normal, {
            escape: Mt(zt.escape).replace("])", "~|])").getRegex(),
            _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
        })),
        (zt.gfm.url = Mt(zt.gfm.url, "i").replace("email", zt.gfm._extended_email).getRegex()),
        (zt.breaks = Lt({}, zt.gfm, {
            br: Mt(zt.br).replace("{2,}", "*").getRegex(),
            text: Mt(zt.gfm.text)
                .replace("\\b_", "\\b_| {2,}\\n")
                .replace(/\{2,\}/g, "*")
                .getRegex(),
        }));
    var zt = { block: Ct, inline: zt },
        Ut = pt.defaults,
        Bt = zt.block,
        Zt = zt.inline,
        Gt = M;
    function Wt(e) {
        return e
            .replace(/---/g, "—")
            .replace(/--/g, "–")
            .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
            .replace(/'/g, "’")
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
            .replace(/"/g, "”")
            .replace(/\.{3}/g, "…");
    }
    function Vt(e) {
        for (var t, n = "", r = e.length, i = 0; i < r; i++)
            (t = e.charCodeAt(i)), 0.5 < Math.random() && (t = "x" + t.toString(16)), (n += "&#" + t + ";");
        return n;
    }
    var Yt = (function () {
            function n(e) {
                (this.tokens = []),
                    (this.tokens.links = Object.create(null)),
                    (this.options = e || Ut),
                    (this.options.tokenizer = this.options.tokenizer || new Ht()),
                    (this.tokenizer = this.options.tokenizer),
                    (this.tokenizer.options = this.options);
                e = { block: Bt.normal, inline: Zt.normal };
                this.options.pedantic
                    ? ((e.block = Bt.pedantic), (e.inline = Zt.pedantic))
                    : this.options.gfm && ((e.block = Bt.gfm), this.options.breaks ? (e.inline = Zt.breaks) : (e.inline = Zt.gfm)),
                    (this.tokenizer.rules = e);
            }
            var e = { rules: { configurable: !0 } };
            return (
                (e.rules.get = function () {
                    return { block: Bt, inline: Zt };
                }),
                (n.lex = function (e, t) {
                    return new n(t).lex(e);
                }),
                (n.lexInline = function (e, t) {
                    return new n(t).inlineTokens(e);
                }),
                (n.prototype.lex = function (e) {
                    return (
                        (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
                        this.blockTokens(e, this.tokens, !0),
                        this.inline(this.tokens),
                        this.tokens
                    );
                }),
                (n.prototype.blockTokens = function (e, t, n) {
                    var r, i, a, o;
                    for (void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e; )
                        if ((r = this.tokenizer.space(e))) (e = e.substring(r.raw.length)), r.type && t.push(r);
                        else if ((r = this.tokenizer.code(e, t)))
                            (e = e.substring(r.raw.length)),
                                r.type ? t.push(r) : (((o = t[t.length - 1]).raw += "\n" + r.raw), (o.text += "\n" + r.text));
                        else if ((r = this.tokenizer.fences(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.heading(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.nptable(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.hr(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.blockquote(e)))
                            (e = e.substring(r.raw.length)), (r.tokens = this.blockTokens(r.text, [], n)), t.push(r);
                        else if ((r = this.tokenizer.list(e))) {
                            for (e = e.substring(r.raw.length), a = r.items.length, i = 0; i < a; i++)
                                r.items[i].tokens = this.blockTokens(r.items[i].text, [], !1);
                            t.push(r);
                        } else if ((r = this.tokenizer.html(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if (n && (r = this.tokenizer.def(e)))
                            (e = e.substring(r.raw.length)),
                                this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
                        else if ((r = this.tokenizer.table(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.lheading(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if (n && (r = this.tokenizer.paragraph(e))) (e = e.substring(r.raw.length)), t.push(r);
                        else if ((r = this.tokenizer.text(e, t)))
                            (e = e.substring(r.raw.length)),
                                r.type ? t.push(r) : (((o = t[t.length - 1]).raw += "\n" + r.raw), (o.text += "\n" + r.text));
                        else if (e) {
                            var s = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(s);
                                break;
                            }
                            throw new Error(s);
                        }
                    return t;
                }),
                (n.prototype.inline = function (e) {
                    for (var t, n, r, i, a, o = e.length, s = 0; s < o; s++)
                        switch ((a = e[s]).type) {
                            case "paragraph":
                            case "text":
                            case "heading":
                                (a.tokens = []), this.inlineTokens(a.text, a.tokens);
                                break;
                            case "table":
                                for (a.tokens = { header: [], cells: [] }, r = a.header.length, t = 0; t < r; t++)
                                    (a.tokens.header[t] = []), this.inlineTokens(a.header[t], a.tokens.header[t]);
                                for (r = a.cells.length, t = 0; t < r; t++)
                                    for (i = a.cells[t], a.tokens.cells[t] = [], n = 0; n < i.length; n++)
                                        (a.tokens.cells[t][n] = []), this.inlineTokens(i[n], a.tokens.cells[t][n]);
                                break;
                            case "blockquote":
                                this.inline(a.tokens);
                                break;
                            case "list":
                                for (r = a.items.length, t = 0; t < r; t++) this.inline(a.items[t].tokens);
                        }
                    return e;
                }),
                (n.prototype.inlineTokens = function (e, t, n, r) {
                    var i;
                    void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var a,
                        o,
                        s,
                        l = e;
                    if (this.tokens.links) {
                        var c = Object.keys(this.tokens.links);
                        if (0 < c.length)

                                c.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) &&
                                    (l =
                                        l.slice(0, a.index) +
                                        "[" +
                                        Gt("a", a[0].length - 2) +
                                        "]" +
                                        l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
                    }
                    for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(l)); )
                        l =
                            l.slice(0, a.index) +
                            "[" +
                            Gt("a", a[0].length - 2) +
                            "]" +
                            l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; e; )
                        if ((o || (s = ""), (o = !1), (i = this.tokenizer.escape(e)))) (e = e.substring(i.raw.length)), t.push(i);
                        else if ((i = this.tokenizer.tag(e, n, r)))
                            (e = e.substring(i.raw.length)), (n = i.inLink), (r = i.inRawBlock), t.push(i);
                        else if ((i = this.tokenizer.link(e)))
                            (e = e.substring(i.raw.length)),
                                "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)),
                                t.push(i);
                        else if ((i = this.tokenizer.reflink(e, this.tokens.links)))
                            (e = e.substring(i.raw.length)),
                                "link" === i.type && (i.tokens = this.inlineTokens(i.text, [], !0, r)),
                                t.push(i);
                        else if ((i = this.tokenizer.strong(e, l, s)))
                            (e = e.substring(i.raw.length)), (i.tokens = this.inlineTokens(i.text, [], n, r)), t.push(i);
                        else if ((i = this.tokenizer.em(e, l, s)))
                            (e = e.substring(i.raw.length)), (i.tokens = this.inlineTokens(i.text, [], n, r)), t.push(i);
                        else if ((i = this.tokenizer.codespan(e))) (e = e.substring(i.raw.length)), t.push(i);
                        else if ((i = this.tokenizer.br(e))) (e = e.substring(i.raw.length)), t.push(i);
                        else if ((i = this.tokenizer.del(e)))
                            (e = e.substring(i.raw.length)), (i.tokens = this.inlineTokens(i.text, [], n, r)), t.push(i);
                        else if ((i = this.tokenizer.autolink(e, Vt))) (e = e.substring(i.raw.length)), t.push(i);
                        else if (n || !(i = this.tokenizer.url(e, Vt))) {
                            if ((i = this.tokenizer.inlineText(e, r, Wt)))
                                (e = e.substring(i.raw.length)), (s = i.raw.slice(-1)), (o = !0), t.push(i);
                            else if (e) {
                                var u = "Infinite loop on byte: " + e.charCodeAt(0);
                                if (this.options.silent) {
                                    console.error(u);
                                    break;
                                }
                                throw new Error(u);
                            }
                        } else (e = e.substring(i.raw.length)), t.push(i);
                    return t;
                }),
                Object.defineProperties(n, e),
                n
            );
        })(),
        Xt = pt.defaults,
        Kt = Ot,
        Qt = Rt,
        Jt = (function () {
            function e(e) {
                this.options = e || Xt;
            }
            return (
                (e.prototype.code = function (e, t, n) {
                    var r = (t || "").match(/\S*/)[0];
                    return (
                        !this.options.highlight || (null != (t = this.options.highlight(e, r)) && t !== e && ((n = !0), (e = t))),
                        (e = e.replace(/\n$/, "") + "\n"),
                        r
                            ? '<pre><code class="' + this.options.langPrefix + Qt(r, !0) + '">' + (n ? e : Qt(e, !0)) + "</code></pre>\n"
                            : "<pre><code>" + (n ? e : Qt(e, !0)) + "</code></pre>\n"
                    );
                }),
                (e.prototype.blockquote = function (e) {
                    return "<blockquote>\n" + e + "</blockquote>\n";
                }),
                (e.prototype.html = function (e) {
                    return e;
                }),
                (e.prototype.heading = function (e, t, n, r) {
                    return this.options.headerIds
                        ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n"
                        : "<h" + t + ">" + e + "</h" + t + ">\n";
                }),
                (e.prototype.hr = function () {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                }),
                (e.prototype.list = function (e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
                }),
                (e.prototype.listitem = function (e) {
                    return "<li>" + e + "</li>\n";
                }),
                (e.prototype.checkbox = function (e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
                }),
                (e.prototype.paragraph = function (e) {
                    return "<p>" + e + "</p>\n";
                }),
                (e.prototype.table = function (e, t) {
                    return "<table>\n<thead>\n" + e + "</thead>\n" + (t = t && "<tbody>" + t + "</tbody>") + "</table>\n";
                }),
                (e.prototype.tablerow = function (e) {
                    return "<tr>\n" + e + "</tr>\n";
                }),
                (e.prototype.tablecell = function (e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
                }),
                (e.prototype.strong = function (e) {
                    return "<strong>" + e + "</strong>";
                }),
                (e.prototype.em = function (e) {
                    return "<em>" + e + "</em>";
                }),
                (e.prototype.codespan = function (e) {
                    return "<code>" + e + "</code>";
                }),
                (e.prototype.br = function () {
                    return this.options.xhtml ? "<br/>" : "<br>";
                }),
                (e.prototype.del = function (e) {
                    return "<del>" + e + "</del>";
                }),
                (e.prototype.link = function (e, t, n) {
                    if (null === (e = Kt(this.options.sanitize, this.options.baseUrl, e))) return n;
                    e = '<a href="' + Qt(e) + '"';
                    return t && (e += ' title="' + t + '"'), (e += ">" + n + "</a>");
                }),
                (e.prototype.image = function (e, t, n) {
                    if (null === (e = Kt(this.options.sanitize, this.options.baseUrl, e))) return n;
                    n = '<img src="' + e + '" alt="' + n + '"';
                    return t && (n += ' title="' + t + '"'), (n += this.options.xhtml ? "/>" : ">");
                }),
                (e.prototype.text = function (e) {
                    return e;
                }),
                e
            );
        })(),
        en = (function () {
            function e() {}
            return (
                (e.prototype.strong = function (e) {
                    return e;
                }),
                (e.prototype.em = function (e) {
                    return e;
                }),
                (e.prototype.codespan = function (e) {
                    return e;
                }),
                (e.prototype.del = function (e) {
                    return e;
                }),
                (e.prototype.html = function (e) {
                    return e;
                }),
                (e.prototype.text = function (e) {
                    return e;
                }),
                (e.prototype.link = function (e, t, n) {
                    return "" + n;
                }),
                (e.prototype.image = function (e, t, n) {
                    return "" + n;
                }),
                (e.prototype.br = function () {
                    return "";
                }),
                e
            );
        })(),
        tn = (function () {
            function e() {
                this.seen = {};
            }
            return (
                (e.prototype.serialize = function (e) {
                    return e
                        .toLowerCase()
                        .trim()
                        .replace(/<[!\/a-z].*?>/gi, "")
                        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "")
                        .replace(/\s/g, "-");
                }),
                (e.prototype.getNextSafeSlug = function (e, t) {
                    var n = e,
                        r = 0;
                    if (this.seen.hasOwnProperty(n)) for (r = this.seen[e]; (n = e + "-" + ++r), this.seen.hasOwnProperty(n); );
                    return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
                }),
                (e.prototype.slug = function (e, t) {
                    void 0 === t && (t = {});
                    var n = this.serialize(e);
                    return this.getNextSafeSlug(n, t.dryrun);
                }),
                e
            );
        })(),
        nn = pt.defaults,
        rn = $t,
        an = (function () {
            function n(e) {
                (this.options = e || nn),
                    (this.options.renderer = this.options.renderer || new Jt()),
                    (this.renderer = this.options.renderer),
                    (this.renderer.options = this.options),
                    (this.textRenderer = new en()),
                    (this.slugger = new tn());
            }
            return (
                (n.parse = function (e, t) {
                    return new n(t).parse(e);
                }),
                (n.parseInline = function (e, t) {
                    return new n(t).parseInline(e);
                }),
                (n.prototype.parse = function (e, t) {
                    void 0 === t && (t = !0);
                    for (var n, r, i, a, o, s, l, c, u, p, d, h, f, g, m, v = "", b = e.length, y = 0; y < b; y++)
                        switch ((c = e[y]).type) {
                            case "space":
                                continue;
                            case "hr":
                                v += this.renderer.hr();
                                continue;
                            case "heading":
                                v += this.renderer.heading(
                                    this.parseInline(c.tokens),
                                    c.depth,
                                    rn(this.parseInline(c.tokens, this.textRenderer)),
                                    this.slugger
                                );
                                continue;
                            case "code":
                                v += this.renderer.code(c.text, c.lang, c.escaped);
                                continue;
                            case "table":
                                for (s = u = "", i = c.header.length, n = 0; n < i; n++)
                                    s += this.renderer.tablecell(this.parseInline(c.tokens.header[n]), { header: !0, align: c.align[n] });
                                for (u += this.renderer.tablerow(s), l = "", i = c.cells.length, n = 0; n < i; n++) {
                                    for (s = "", a = (o = c.tokens.cells[n]).length, r = 0; r < a; r++)
                                        s += this.renderer.tablecell(this.parseInline(o[r]), { header: !1, align: c.align[r] });
                                    l += this.renderer.tablerow(s);
                                }
                                v += this.renderer.table(u, l);
                                continue;
                            case "blockquote":
                                (l = this.parse(c.tokens)), (v += this.renderer.blockquote(l));
                                continue;
                            case "list":
                                for (u = c.ordered, k = c.start, p = c.loose, i = c.items.length, l = "", n = 0; n < i; n++)
                                    (f = (h = c.items[n]).checked),
                                        (g = h.task),
                                        (d = ""),
                                        h.task &&
                                            ((m = this.renderer.checkbox(f)),
                                            p
                                                ? 0 < h.tokens.length && "text" === h.tokens[0].type
                                                    ? ((h.tokens[0].text = m + " " + h.tokens[0].text),
                                                      h.tokens[0].tokens &&
                                                          0 < h.tokens[0].tokens.length &&
                                                          "text" === h.tokens[0].tokens[0].type &&
                                                          (h.tokens[0].tokens[0].text = m + " " + h.tokens[0].tokens[0].text))
                                                    : h.tokens.unshift({ type: "text", text: m })
                                                : (d += m)),
                                        (d += this.parse(h.tokens, p)),
                                        (l += this.renderer.listitem(d, g, f));
                                v += this.renderer.list(l, u, k);
                                continue;
                            case "html":
                                v += this.renderer.html(c.text);
                                continue;
                            case "paragraph":
                                v += this.renderer.paragraph(this.parseInline(c.tokens));
                                continue;
                            case "text":
                                for (l = c.tokens ? this.parseInline(c.tokens) : c.text; y + 1 < b && "text" === e[y + 1].type; )
                                    l += "\n" + ((c = e[++y]).tokens ? this.parseInline(c.tokens) : c.text);
                                v += t ? this.renderer.paragraph(l) : l;
                                continue;
                            default:
                                var k = 'Token with "' + c.type + '" type was not found.';
                                if (this.options.silent) return void console.error(k);
                                throw new Error(k);
                        }
                    return v;
                }),
                (n.prototype.parseInline = function (e, t) {
                    t = t || this.renderer;
                    for (var n = "", r = e.length, i = 0; i < r; i++)
                        switch ((a = e[i]).type) {
                            case "escape":
                                n += t.text(a.text);
                                break;
                            case "html":
                                n += t.html(a.text);
                                break;
                            case "link":
                                n += t.link(a.href, a.title, this.parseInline(a.tokens, t));
                                break;
                            case "image":
                                n += t.image(a.href, a.title, a.text);
                                break;
                            case "strong":
                                n += t.strong(this.parseInline(a.tokens, t));
                                break;
                            case "em":
                                n += t.em(this.parseInline(a.tokens, t));
                                break;
                            case "codespan":
                                n += t.codespan(a.text);
                                break;
                            case "br":
                                n += t.br();
                                break;
                            case "del":
                                n += t.del(this.parseInline(a.tokens, t));
                                break;
                            case "text":
                                n += t.text(a.text);
                                break;
                            default:
                                var a = 'Token with "' + a.type + '" type was not found.';
                                if (this.options.silent) return void console.error(a);
                                throw new Error(a);
                        }
                    return n;
                }),
                n
            );
        })(),
        on = Ft,
        sn = P,
        ln = Rt,
        Rt = pt.getDefaults,
        cn = pt.changeDefaults,
        pt = pt.defaults;
    function un(e, n, r) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e)
            throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
        if (("function" == typeof n && ((r = n), (n = null)), (n = on({}, un.defaults, n || {})), sn(n), r)) {
            var i,
                a = n.highlight;
            try {
                i = Yt.lex(e, n);
            } catch (e) {
                return r(e);
            }
            function o(t) {
                var e;
                if (!t)
                    try {
                        e = an.parse(i, n);
                    } catch (e) {
                        t = e;
                    }
                return (n.highlight = a), t ? r(t) : r(null, e);
            }
            if (!a || a.length < 3) return o();
            if ((delete n.highlight, !i.length)) return o();
            var s = 0;
            return (
                un.walkTokens(i, function (n) {
                    "code" === n.type &&
                        (s++,
                        setTimeout(function () {
                            a(n.text, n.lang, function (e, t) {
                                return e ? o(e) : (null != t && t !== n.text && ((n.text = t), (n.escaped = !0)), void (0 === --s && o()));
                            });
                        }, 0));
                }),
                void (0 === s && o())
            );
        }
        try {
            var t = Yt.lex(e, n);
            return n.walkTokens && un.walkTokens(t, n.walkTokens), an.parse(t, n);
        } catch (e) {
            if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), n.silent))
                return "<p>An error occurred:</p><pre>" + ln(e.message + "", !0) + "</pre>";
            throw e;
        }
    }
    (un.options = un.setOptions =
        function (e) {
            return on(un.defaults, e), cn(un.defaults), un;
        }),
        (un.getDefaults = Rt),
        (un.defaults = pt),
        (un.use = function (a) {
            var t,
                e = on({}, a);
            if (a.renderer) {
                var n,
                    o = un.defaults.renderer || new Jt();
                for (n in a.renderer)
                    !(function (r) {
                        var i = o[r];
                        o[r] = function () {
                            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                            var n = a.renderer[r].apply(o, e);
                            return !1 === n && (n = i.apply(o, e)), n;
                        };
                    })(n);
                e.renderer = o;
            }
            if (a.tokenizer) {
                var i,
                    s = un.defaults.tokenizer || new Ht();
                for (i in a.tokenizer)
                    !(function () {
                        var r = s[i];
                        s[i] = function () {
                            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                            var n = a.tokenizer[i].apply(s, e);
                            return !1 === n && (n = r.apply(s, e)), n;
                        };
                    })();
                e.tokenizer = s;
            }
            a.walkTokens &&
                ((t = un.defaults.walkTokens),
                (e.walkTokens = function (e) {
                    a.walkTokens(e), t && t(e);
                })),
                un.setOptions(e);
        }),
        (un.walkTokens = function (e, t) {
            for (var n = 0, r = e; n < r.length; n += 1) {
                var i = r[n];
                switch ((t(i), i.type)) {
                    case "table":
                        for (var a = 0, o = i.tokens.header; a < o.length; a += 1) {
                            var s = o[a];
                            un.walkTokens(s, t);
                        }
                        for (var l = 0, c = i.tokens.cells; l < c.length; l += 1)
                            for (var u = 0, p = c[l]; u < p.length; u += 1) {
                                var d = p[u];
                                un.walkTokens(d, t);
                            }
                        break;
                    case "list":
                        un.walkTokens(i.items, t);
                        break;
                    default:
                        i.tokens && un.walkTokens(i.tokens, t);
                }
            }
        }),
        (un.parseInline = function (e, t) {
            if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
            if ("string" != typeof e)
                throw new Error(
                    "marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"
                );
            (t = on({}, un.defaults, t || {})), sn(t);
            try {
                var n = Yt.lexInline(e, t);
                return t.walkTokens && un.walkTokens(n, t.walkTokens), an.parseInline(n, t);
            } catch (e) {
                if (((e.message += "\nPlease report this to https://github.com/markedjs/marked."), t.silent))
                    return "<p>An error occurred:</p><pre>" + ln(e.message + "", !0) + "</pre>";
                throw e;
            }
        }),
        (un.Parser = an),
        (un.parser = an.parse),
        (un.Renderer = Jt),
        (un.TextRenderer = en),
        (un.Lexer = Yt),
        (un.lexer = Yt.lex),
        (un.Tokenizer = Ht),
        (un.Slugger = tn);
    var pn = (un.parse = un);
    function dn(e, n) {
        if ((void 0 === n && (n = '<ul class="app-sub-sidebar">{inner}</ul>'), !e || !e.length)) return "";
        var r = "";
        return (
            e.forEach(function (e) {
                var t = e.title.replace(/(<([^>]+)>)/g, "");
                (r += '<li><a class="section-link" href="' + e.slug + '" title="' + t + '">' + e.title + "</a></li>"),
                    e.children && (r += dn(e.children, n));
            }),
            n.replace("{inner}", r)
        );
    }
    function hn(e, t) {
        return '<p class="' + e + '">' + t.slice(5).trim() + "</p>";
    }
    function fn(e, r) {
        var i = [],
            a = {};
        return (
            e.forEach(function (e) {
                var t = e.level || 1,
                    n = t - 1;
                r < t || (a[n] ? (a[n].children = (a[n].children || []).concat(e)) : i.push(e), (a[t] = e));
            }),
            i
        );
    }
    var gn = {},
        mn = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
    function vn(e) {
        return e.toLowerCase();
    }
    function bn(e) {
        if ("string" != typeof e) return "";
        var t = e
                .trim()
                .replace(/[A-Z]+/g, vn)
                .replace(/<[^>]+>/g, "")
                .replace(mn, "")
                .replace(/\s/g, "-")
                .replace(/-+/g, "-")
                .replace(/^(\d)/, "_$1"),
            e = gn[t],
            e = l.call(gn, t) ? e + 1 : 0;
        return (gn[t] = e) && (t = t + "-" + e), t;
    }
    function yn(e, t) {
        return '<img class="emoji" src="https://github.githubassets.com/images/icons/emoji/' + t + '.png" alt="' + t + '" />';
    }
    function kn(e) {
        void 0 === e && (e = "");
        var r = {};
        return {
            str: (e =
                e &&
                e
                    .replace(/^'/, "")
                    .replace(/'$/, "")
                    .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (e, t, n) {
                        return -1 === t.indexOf(":") ? ((r[t] = (n && n.replace(/&quot;/g, "")) || !0), "") : e;
                    })
                    .trim()),
            config: r,
        };
    }
    function wn(e) {
        return void 0 === e && (e = ""), e.replace(/(<\/?a.*?>)/gi, "");
    }
    bn.clear = function () {
        gn = {};
    };
    var xn,
        _n = Ee(function (e) {
            var o,
                s,
                l,
                c,
                u,
                r,
                t,
                i = (function (l) {
                    var c = /\blang(?:uage)?-([\w-]+)\b/i,
                        t = 0,
                        C = {
                            manual: l.Prism && l.Prism.manual,
                            disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
                            util: {
                                encode: function e(t) {
                                    return t instanceof O
                                        ? new O(t.type, e(t.content), t.alias)
                                        : Array.isArray(t)
                                        ? t.map(e)
                                        : t
                                              .replace(/&/g, "&amp;")
                                              .replace(/</g, "&lt;")
                                              .replace(/\u00a0/g, " ");
                                },
                                type: function (e) {
                                    return Object.prototype.toString.call(e).slice(8, -1);
                                },
                                objId: function (e) {
                                    return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
                                },
                                clone: function n(e, r) {
                                    var i, t;
                                    switch (((r = r || {}), C.util.type(e))) {
                                        case "Object":
                                            if (((t = C.util.objId(e)), r[t])) return r[t];
                                            for (var a in ((i = {}), (r[t] = i), e)) e.hasOwnProperty(a) && (i[a] = n(e[a], r));
                                            return i;
                                        case "Array":
                                            return ((t = C.util.objId(e)), r[t])
                                                ? r[t]
                                                : ((i = []),
                                                  (r[t] = i),
                                                  e.forEach(function (e, t) {
                                                      i[t] = n(e, r);
                                                  }),
                                                  i);
                                        default:
                                            return e;
                                    }
                                },
                                getLanguage: function (e) {
                                    for (; e && !c.test(e.className); ) e = e.parentElement;
                                    return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
                                },
                                currentScript: function () {
                                    if ("undefined" == typeof document) return null;
                                    if ("currentScript" in document) return document.currentScript;
                                    try {
                                        throw new Error();
                                    } catch (e) {
                                        var t = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                                        if (t) {
                                            var n,
                                                r = document.getElementsByTagName("script");
                                            for (n in r) if (r[n].src == t) return r[n];
                                        }
                                        return null;
                                    }
                                },
                                isActive: function (e, t, n) {
                                    for (var r = "no-" + t; e; ) {
                                        var i = e.classList;
                                        if (i.contains(t)) return !0;
                                        if (i.contains(r)) return !1;
                                        e = e.parentElement;
                                    }
                                    return !!n;
                                },
                            },
                            languages: {
                                extend: function (e, t) {
                                    var n,
                                        r = C.util.clone(C.languages[e]);
                                    for (n in t) r[n] = t[n];
                                    return r;
                                },
                                insertBefore: function (n, e, t, r) {
                                    var i,
                                        a = (r = r || C.languages)[n],
                                        o = {};
                                    for (i in a)
                                        if (a.hasOwnProperty(i)) {
                                            if (i == e) for (var s in t) t.hasOwnProperty(s) && (o[s] = t[s]);
                                            t.hasOwnProperty(i) || (o[i] = a[i]);
                                        }
                                    var l = r[n];
                                    return (
                                        (r[n] = o),
                                        C.languages.DFS(C.languages, function (e, t) {
                                            t === l && e != n && (this[e] = o);
                                        }),
                                        o
                                    );
                                },
                                DFS: function e(t, n, r, i) {
                                    i = i || {};
                                    var a,
                                        o,
                                        s,
                                        l = C.util.objId;
                                    for (a in t) {
                                        t.hasOwnProperty(a) &&
                                            (n.call(t, a, t[a], r || a),
                                            (o = t[a]),
                                            "Object" !== (s = C.util.type(o)) || i[l(o)]
                                                ? "Array" !== s || i[l(o)] || ((i[l(o)] = !0), e(o, n, a, i))
                                                : ((i[l(o)] = !0), e(o, n, null, i)));
                                    }
                                },
                            },
                            plugins: {},
                            highlightAll: function (e, t) {
                                C.highlightAllUnder(document, e, t);
                            },
                            highlightAllUnder: function (e, t, n) {
                                var r = {
                                    callback: n,
                                    container: e,
                                    selector:
                                        'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                                };
                                C.hooks.run("before-highlightall", r),
                                    (r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector))),
                                    C.hooks.run("before-all-elements-highlight", r);
                                for (var i, a = 0; (i = r.elements[a++]); ) C.highlightElement(i, !0 === t, r.callback);
                            },
                            highlightElement: function (e, t, n) {
                                var r = C.util.getLanguage(e),
                                    i = C.languages[r];
                                e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
                                var a = e.parentElement;
                                a &&
                                    "pre" === a.nodeName.toLowerCase() &&
                                    (a.className = a.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
                                var o = { element: e, language: r, grammar: i, code: e.textContent };
                                function s(e) {
                                    (o.highlightedCode = e),
                                        C.hooks.run("before-insert", o),
                                        (o.element.innerHTML = o.highlightedCode),
                                        C.hooks.run("after-highlight", o),
                                        C.hooks.run("complete", o),
                                        n && n.call(o.element);
                                }
                                if ((C.hooks.run("before-sanity-check", o), !o.code))
                                    return C.hooks.run("complete", o), void (n && n.call(o.element));
                                C.hooks.run("before-highlight", o),
                                    o.grammar
                                        ? t && l.Worker
                                            ? (((t = new Worker(C.filename)).onmessage = function (e) {
                                                  s(e.data);
                                              }),
                                              t.postMessage(JSON.stringify({ language: o.language, code: o.code, immediateClose: !0 })))
                                            : s(C.highlight(o.code, o.grammar, o.language))
                                        : s(C.util.encode(o.code));
                            },
                            highlight: function (e, t, n) {
                                n = { code: e, grammar: t, language: n };
                                return (
                                    C.hooks.run("before-tokenize", n),
                                    (n.tokens = C.tokenize(n.code, n.grammar)),
                                    C.hooks.run("after-tokenize", n),
                                    O.stringify(C.util.encode(n.tokens), n.language)
                                );
                            },
                            tokenize: function (e, t) {
                                var n = t.rest;
                                if (n) {
                                    for (var r in n) t[r] = n[r];
                                    delete t.rest;
                                }
                                var i = new a();
                                return (
                                    F(i, i.head, e),
                                    (function e(t, n, r, i, a, o) {
                                        for (var s in r)
                                            if (r.hasOwnProperty(s) && r[s]) {
                                                var l = r[s];
                                                l = Array.isArray(l) ? l : [l];
                                                for (var c = 0; c < l.length; ++c) {
                                                    if (o && o.cause == s + "," + c) return;
                                                    var u,
                                                        p = l[c],
                                                        d = p.inside,
                                                        h = !!p.lookbehind,
                                                        f = !!p.greedy,
                                                        g = p.alias;
                                                    f &&
                                                        !p.pattern.global &&
                                                        ((u = p.pattern.toString().match(/[imsuy]*$/)[0]),
                                                        (p.pattern = RegExp(p.pattern.source, u + "g")));
                                                    for (
                                                        var m = p.pattern || p, v = i.next, b = a;
                                                        v !== n.tail && !(o && b >= o.reach);
                                                        b += v.value.length, v = v.next
                                                    ) {
                                                        var y = v.value;
                                                        if (n.length > t.length) return;
                                                        if (!(y instanceof O)) {
                                                            var k,
                                                                w = 1;
                                                            if (f) {
                                                                if (!(k = L(m, b, t, h))) break;
                                                                var x = k.index,
                                                                    _ = k.index + k[0].length,
                                                                    S = b;
                                                                for (S += v.value.length; S <= x; ) (v = v.next), (S += v.value.length);
                                                                if (((S -= v.value.length), (b = S), v.value instanceof O)) continue;
                                                                for (
                                                                    var A = v;
                                                                    A !== n.tail && (S < _ || "string" == typeof A.value);
                                                                    A = A.next
                                                                )
                                                                    w++, (S += A.value.length);
                                                                w--, (y = t.slice(b, S)), (k.index -= b);
                                                            } else if (!(k = L(m, 0, y, h))) continue;
                                                            var x = k.index,
                                                                T = k[0],
                                                                E = y.slice(0, x),
                                                                R = y.slice(x + T.length),
                                                                $ = b + y.length;
                                                            o && $ > o.reach && (o.reach = $);
                                                            var y = v.prev;
                                                            E && ((y = F(n, y, E)), (b += E.length)), z(n, y, w);
                                                            var T = new O(s, d ? C.tokenize(T, d) : T, g, T);
                                                            (v = F(n, y, T)),
                                                                R && F(n, v, R),
                                                                1 < w && e(t, n, r, v.prev, b, { cause: s + "," + c, reach: $ });
                                                        }
                                                    }
                                                }
                                            }
                                    })(e, i, t, i.head, 0),
                                    (function (e) {
                                        var t = [],
                                            n = e.head.next;
                                        for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                                        return t;
                                    })(i)
                                );
                            },
                            hooks: {
                                all: {},
                                add: function (e, t) {
                                    var n = C.hooks.all;
                                    (n[e] = n[e] || []), n[e].push(t);
                                },
                                run: function (e, t) {
                                    var n = C.hooks.all[e];
                                    if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
                                },
                            },
                            Token: O,
                        };
                    function O(e, t, n, r) {
                        (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || "").length);
                    }
                    function L(e, t, n, r) {
                        e.lastIndex = t;
                        n = e.exec(n);
                        return n && r && n[1] && ((r = n[1].length), (n.index += r), (n[0] = n[0].slice(r))), n;
                    }
                    function a() {
                        var e = { value: null, prev: null, next: null },
                            t = { value: null, prev: e, next: null };
                        (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
                    }
                    function F(e, t, n) {
                        var r = t.next,
                            n = { value: n, prev: t, next: r };
                        return (t.next = n), (r.prev = n), e.length++, n;
                    }
                    function z(e, t, n) {
                        for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
                        ((t.next = r).prev = t), (e.length -= i);
                    }
                    if (
                        ((l.Prism = C),
                        (O.stringify = function t(e, n) {
                            if ("string" == typeof e) return e;
                            if (Array.isArray(e)) {
                                var r = "";
                                return (
                                    e.forEach(function (e) {
                                        r += t(e, n);
                                    }),
                                    r
                                );
                            }
                            var i = {
                                    type: e.type,
                                    content: t(e.content, n),
                                    tag: "span",
                                    classes: ["token", e.type],
                                    attributes: {},
                                    language: n,
                                },
                                e = e.alias;
                            e && (Array.isArray(e) ? Array.prototype.push.apply(i.classes, e) : i.classes.push(e)), C.hooks.run("wrap", i);
                            var a,
                                o = "";
                            for (a in i.attributes) o += " " + a + '="' + (i.attributes[a] || "").replace(/"/g, "&quot;") + '"';
                            return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">";
                        }),
                        !l.document)
                    )
                        return (
                            l.addEventListener &&
                                (C.disableWorkerMessageHandler ||
                                    l.addEventListener(
                                        "message",
                                        function (e) {
                                            var t = JSON.parse(e.data),
                                                n = t.language,
                                                e = t.code,
                                                t = t.immediateClose;
                                            l.postMessage(C.highlight(e, C.languages[n], n)), t && l.close();
                                        },
                                        !1
                                    )),
                            C
                        );
                    var e,
                        n = C.util.currentScript();
                    function r() {
                        C.manual || C.highlightAll();
                    }
                    return (
                        n && ((C.filename = n.src), n.hasAttribute("data-manual") && (C.manual = !0)),
                        C.manual ||
                            ("loading" === (e = document.readyState) || ("interactive" === e && n && n.defer)
                                ? document.addEventListener("DOMContentLoaded", r)
                                : window.requestAnimationFrame
                                ? window.requestAnimationFrame(r)
                                : window.setTimeout(r, 16)),
                        C
                    );
                })(
                    "undefined" != typeof window
                        ? window
                        : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
                        ? self
                        : {}
                );
            function p(e, t) {
                var n = (n = e.className).replace(r, " ") + " language-" + t;
                e.className = n.replace(/\s+/g, " ").trim();
            }
            e.exports && (e.exports = i),
                void 0 !== Te && (Te.Prism = i),
                (i.languages.markup = {
                    comment: /<!--[\s\S]*?-->/,
                    prolog: /<\?[\s\S]+?\?>/,
                    doctype: {
                        pattern:
                            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                        greedy: !0,
                        inside: {
                            "internal-subset": { pattern: /(\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
                            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
                            punctuation: /^<!|>$|[[\]]/,
                            "doctype-tag": /^DOCTYPE/,
                            name: /[^\s<>'"]+/,
                        },
                    },
                    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
                    tag: {
                        pattern:
                            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                        greedy: !0,
                        inside: {
                            tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
                            "attr-value": {
                                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] },
                            },
                            punctuation: /\/?>/,
                            "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
                        },
                    },
                    entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i],
                }),
                (i.languages.markup.tag.inside["attr-value"].inside.entity = i.languages.markup.entity),
                (i.languages.markup.doctype.inside["internal-subset"].inside = i.languages.markup),
                i.hooks.add("wrap", function (e) {
                    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
                }),
                Object.defineProperty(i.languages.markup.tag, "addInlined", {
                    value: function (e, t) {
                        var n = {};
                        (n["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: i.languages[t] }),
                            (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
                        n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } };
                        n["language-" + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
                        t = {};
                        (t[e] = {
                            pattern: RegExp(
                                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                                    /__/g,
                                    function () {
                                        return e;
                                    }
                                ),
                                "i"
                            ),
                            lookbehind: !0,
                            greedy: !0,
                            inside: n,
                        }),
                            i.languages.insertBefore("markup", "cdata", t);
                    },
                }),
                (i.languages.html = i.languages.markup),
                (i.languages.mathml = i.languages.markup),
                (i.languages.svg = i.languages.markup),
                (i.languages.xml = i.languages.extend("markup", {})),
                (i.languages.ssml = i.languages.xml),
                (i.languages.atom = i.languages.xml),
                (i.languages.rss = i.languages.xml),
                (function (e) {
                    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                    (e.languages.css = {
                        comment: /\/\*[\s\S]*?\*\//,
                        atrule: {
                            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                            inside: {
                                rule: /^@[\w-]+/,
                                "selector-function-argument": {
                                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                    lookbehind: !0,
                                    alias: "selector",
                                },
                                keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
                            },
                        },
                        url: {
                            pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                            greedy: !0,
                            inside: {
                                function: /^url/i,
                                punctuation: /^\(|\)$/,
                                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
                            },
                        },
                        selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                        string: { pattern: t, greedy: !0 },
                        property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        important: /!important\b/i,
                        function: /[-a-z0-9]+(?=\()/i,
                        punctuation: /[(){};:,]/,
                    }),
                        (e.languages.css.atrule.inside.rest = e.languages.css);
                    t = e.languages.markup;
                    t &&
                        (t.tag.addInlined("style", "css"),
                        e.languages.insertBefore(
                            "inside",
                            "attr-value",
                            {
                                "style-attr": {
                                    pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                                    lookbehind: !0,
                                    inside: {
                                        "attr-value": {
                                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                                            inside: {
                                                style: {
                                                    pattern: /(["'])[\s\S]+(?=["']$)/,
                                                    lookbehind: !0,
                                                    alias: "language-css",
                                                    inside: e.languages.css,
                                                },
                                                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                                            },
                                        },
                                        "attr-name": /^style/i,
                                    },
                                },
                            },
                            t.tag
                        ));
                })(i),
                (i.languages.clike = {
                    comment: [
                        { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
                        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
                    ],
                    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
                    "class-name": {
                        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
                        lookbehind: !0,
                        inside: { punctuation: /[.\\]/ },
                    },
                    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
                    boolean: /\b(?:true|false)\b/,
                    function: /\w+(?=\()/,
                    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                    punctuation: /[{}[\];(),.:]/,
                }),
                (i.languages.javascript = i.languages.extend("clike", {
                    "class-name": [
                        i.languages.clike["class-name"],
                        {
                            pattern:
                                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
                            lookbehind: !0,
                        },
                    ],
                    keyword: [
                        { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
                        {
                            pattern:
                                /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                            lookbehind: !0,
                        },
                    ],
                    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
                    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
                })),
                (i.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
                i.languages.insertBefore("javascript", "keyword", {
                    regex: {
                        pattern:
                            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            "regex-source": {
                                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                                lookbehind: !0,
                                alias: "language-regex",
                                inside: i.languages.regex,
                            },
                            "regex-flags": /[a-z]+$/,
                            "regex-delimiter": /^\/|\/$/,
                        },
                    },
                    "function-variable": {
                        pattern:
                            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                        alias: "function",
                    },
                    parameter: [
                        {
                            pattern:
                                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                            lookbehind: !0,
                            inside: i.languages.javascript,
                        },
                        { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, inside: i.languages.javascript },
                        {
                            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                            lookbehind: !0,
                            inside: i.languages.javascript,
                        },
                        {
                            pattern:
                                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                            lookbehind: !0,
                            inside: i.languages.javascript,
                        },
                    ],
                    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
                }),
                i.languages.insertBefore("javascript", "string", {
                    "template-string": {
                        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
                        greedy: !0,
                        inside: {
                            "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                                lookbehind: !0,
                                inside: {
                                    "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" },
                                    rest: i.languages.javascript,
                                },
                            },
                            string: /[\s\S]+/,
                        },
                    },
                }),
                i.languages.markup && i.languages.markup.tag.addInlined("script", "javascript"),
                (i.languages.js = i.languages.javascript),
                "undefined" != typeof self &&
                    self.Prism &&
                    self.document &&
                    (Element.prototype.matches ||
                        (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
                    (o = window.Prism),
                    (s = {
                        js: "javascript",
                        py: "python",
                        rb: "ruby",
                        ps1: "powershell",
                        psm1: "powershell",
                        sh: "bash",
                        bat: "batch",
                        h: "c",
                        tex: "latex",
                    }),
                    (u = "pre[data-src]:not([" + (l = "data-src-status") + '="loaded"]):not([' + l + '="' + (c = "loading") + '"])'),
                    (r = /\blang(?:uage)?-([\w-]+)\b/i),
                    o.hooks.add("before-highlightall", function (e) {
                        e.selector += ", " + u;
                    }),
                    o.hooks.add("before-sanity-check", function (e) {
                        var t,
                            n,
                            r,
                            i,
                            a = e.element;
                        a.matches(u) &&
                            ((e.code = ""),
                            a.setAttribute(l, c),
                            ((t = a.appendChild(document.createElement("CODE"))).textContent = "Loading…"),
                            (n = a.getAttribute("data-src")),
                            "none" === (e = e.language) && ((r = (/\.(\w+)$/.exec(n) || [, "none"])[1]), (e = s[r] || r)),
                            p(t, e),
                            p(a, e),
                            (r = o.plugins.autoloader) && r.loadLanguages(e),
                            (i = new XMLHttpRequest()).open("GET", n, !0),
                            (i.onreadystatechange = function () {
                                4 == i.readyState &&
                                    (i.status < 400 && i.responseText
                                        ? (a.setAttribute(l, "loaded"), (t.textContent = i.responseText), o.highlightElement(t))
                                        : (a.setAttribute(l, "failed"),
                                          400 <= i.status
                                              ? (t.textContent = "✖ Error " + i.status + " while fetching file: " + i.statusText)
                                              : (t.textContent = "✖ Error: File does not exist or is empty")));
                            }),
                            i.send(null));
                    }),
                    (t = !(o.plugins.fileHighlight = {
                        highlight: function (e) {
                            for (var t, n = (e || document).querySelectorAll(u), r = 0; (t = n[r++]); ) o.highlightElement(t);
                        },
                    })),
                    (o.fileHighlight = function () {
                        t ||
                            (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),
                            (t = !0)),
                            o.plugins.fileHighlight.highlight.apply(this, arguments);
                    }));
        });
    function Sn(e, t) {
        return "___" + e.toUpperCase() + t + "___";
    }
    (xn = Prism),
        Object.defineProperties((xn.languages["markup-templating"] = {}), {
            buildPlaceholders: {
                value: function (r, i, e, a) {
                    var o;
                    r.language === i &&
                        ((o = r.tokenStack = []),
                        (r.code = r.code.replace(e, function (e) {
                            if ("function" == typeof a && !a(e)) return e;
                            for (var t, n = o.length; -1 !== r.code.indexOf((t = Sn(i, n))); ) ++n;
                            return (o[n] = e), t;
                        })),
                        (r.grammar = xn.languages.markup));
                },
            },
            tokenizePlaceholders: {
                value: function (c, u) {
                    var p, d;
                    c.language === u &&
                        c.tokenStack &&
                        ((c.grammar = xn.languages[u]),
                        (p = 0),
                        (d = Object.keys(c.tokenStack)),
                        (function e(t) {
                            for (var n = 0; n < t.length && !(p >= d.length); n++) {
                                var r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l = t[n];
                                "string" == typeof l || (l.content && "string" == typeof l.content)
                                    ? ((i = d[p]),
                                      (a = c.tokenStack[i]),
                                      (r = "string" == typeof l ? l : l.content),
                                      (s = Sn(u, i)),
                                      -1 < (o = r.indexOf(s)) &&
                                          (++p,
                                          (i = r.substring(0, o)),
                                          (a = new xn.Token(u, xn.tokenize(a, c.grammar), "language-" + u, a)),
                                          (o = r.substring(o + s.length)),
                                          (s = []),
                                          i && s.push.apply(s, e([i])),
                                          s.push(a),
                                          o && s.push.apply(s, e([o])),
                                          "string" == typeof l ? t.splice.apply(t, [n, 1].concat(s)) : (l.content = s)))
                                    : l.content && e(l.content);
                            }
                            return t;
                        })(c.tokens));
                },
            },
        });
    var An = {},
        Tn = {
            markdown: function (e) {
                return { url: e };
            },
            mermaid: function (e) {
                return { url: e };
            },
            iframe: function (e, t) {
                return { html: '<iframe src="' + e + '" ' + (t || "width=100% height=400") + "></iframe>" };
            },
            video: function (e, t) {
                return { html: '<video src="' + e + '" ' + (t || "controls") + ">Not Support</video>" };
            },
            audio: function (e, t) {
                return { html: '<audio src="' + e + '" ' + (t || "controls") + ">Not Support</audio>" };
            },
            code: function (e, t) {
                var n = e.match(/\.(\w+)$/);
                return "md" === (n = t || (n && n[1])) && (n = "markdown"), { url: e, lang: n };
            },
        },
        En = function (i, e) {
            var a = this;
            (this.config = i),
                (this.router = e),
                (this.cacheTree = {}),
                (this.toc = []),
                (this.cacheTOC = {}),
                (this.linkTarget = i.externalLinkTarget || "_blank"),
                (this.linkRel = "_blank" === this.linkTarget ? i.externalLinkRel || "noopener" : ""),
                (this.contentBase = e.getBasePath());
            var t = this._initRenderer();
            this.heading = t.heading;
            var e = i.markdown || {},
                o = p(e) ? e(pn, t) : (pn.setOptions(b(e, { renderer: b(t, e.renderer) })), pn);
            (this._marked = o),
                (this.compile = function (n) {
                    var r = !0,
                        e = s(function (e) {
                            r = !1;
                            var t = "";
                            return n
                                ? ((t = c(n) ? o(n) : o.parser(n)),
                                  (t = i.noEmoji
                                      ? t
                                      : t
                                            .replace(/:\+1:/g, ":thumbsup:")
                                            .replace(/:-1:/g, ":thumbsdown:")
                                            .replace(/<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g, function (e) {
                                                return e.replace(/:/g, "__colon__");
                                            })
                                            .replace(/:(\w+?):/gi, window.emojify || yn)
                                            .replace(/__colon__/g, ":")),
                                  bn.clear(),
                                  t)
                                : n;
                        })(n),
                        t = a.router.parse().file;
                    return r ? (a.toc = a.cacheTOC[t]) : (a.cacheTOC[t] = [].concat(a.toc)), e;
                });
        };
    (En.prototype.compileEmbed = function (e, t) {
        var n,
            r,
            i = kn(t),
            a = i.str,
            i = i.config;
        if (((t = a), i.include))
            return (
                ne(e) || (e = le(this.contentBase, ie(this.router.getCurrentPath()), e)),
                i.type && (r = Tn[i.type])
                    ? ((n = r.call(this, e, t)).type = i.type)
                    : ((r = "code"),
                      /\.(md|markdown)/.test(e)
                          ? (r = "markdown")
                          : /\.mmd/.test(e)
                          ? (r = "mermaid")
                          : /\.html?/.test(e)
                          ? (r = "iframe")
                          : /\.(mp4|ogg)/.test(e)
                          ? (r = "video")
                          : /\.mp3/.test(e) && (r = "audio"),
                      ((n = Tn[r].call(this, e, t)).type = r)),
                (n.fragment = i.fragment),
                n
            );
    }),
        (En.prototype._matchNotCompileLink = function (e) {
            for (var t = this.config.noCompileLinks || [], n = 0; n < t.length; n++) {
                var r = t[n];
                if ((An[r] || (An[r] = new RegExp("^" + r + "$"))).test(e)) return e;
            }
        }),
        (En.prototype._initRenderer = function () {
            var o,
                s,
                l,
                c,
                u,
                p,
                e = new pn.Renderer(),
                t = this.linkTarget,
                n = this.linkRel,
                a = this.router,
                r = this.contentBase,
                d = this,
                i = {};
            return (
                (i.heading = e.heading =
                    function (e, t) {
                        var n = kn(e),
                            r = n.str,
                            i = n.config,
                            e = { level: t, title: wn(r) };
                        /<!-- {docsify-ignore} -->/g.test(r) &&
                            ((r = r.replace("\x3c!-- {docsify-ignore} --\x3e", "")), (e.title = wn(r)), (e.ignoreSubHeading = !0)),
                            /{docsify-ignore}/g.test(r) &&
                                ((r = r.replace("{docsify-ignore}", "")), (e.title = wn(r)), (e.ignoreSubHeading = !0)),
                            /<!-- {docsify-ignore-all} -->/g.test(r) &&
                                ((r = r.replace("\x3c!-- {docsify-ignore-all} --\x3e", "")), (e.title = wn(r)), (e.ignoreAllSubs = !0)),
                            /{docsify-ignore-all}/g.test(r) &&
                                ((r = r.replace("{docsify-ignore-all}", "")), (e.title = wn(r)), (e.ignoreAllSubs = !0));
                        (n = bn(i.id || r)), (i = a.toURL(a.getCurrentPath(), { id: n }));
                        return (
                            (e.slug = i),
                            d.toc.push(e),
                            "<h" +
                                t +
                                ' id="' +
                                n +
                                '"><a href="' +
                                i +
                                '" data-id="' +
                                n +
                                '" class="anchor"><span>' +
                                r +
                                "</span></a></h" +
                                t +
                                ">"
                        );
                    }),
                (i.code = { renderer: e }.renderer.code =
                    function (e, t) {
                        void 0 === t && (t = "markup");
                        var n = _n.languages[t] || _n.languages.markup;
                        return (
                            '<pre v-pre data-lang="' +
                            t +
                            '"><code class="lang-' +
                            t +
                            '">' +
                            _n.highlight(e.replace(/@DOCSIFY_QM@/g, "`"), n, t) +
                            "</code></pre>"
                        );
                    }),
                (i.link =
                    ((n = (t = { renderer: e, router: a, linkTarget: t, linkRel: n, compilerClass: d }).renderer),
                    (o = t.router),
                    (s = t.linkTarget),
                    (l = t.linkRel),
                    (c = t.compilerClass),
                    (n.link = function (e, t, n) {
                        void 0 === t && (t = "");
                        var r = [],
                            i = kn(t),
                            a = i.str,
                            i = i.config;
                        return (
                            (s = i.target || s),
                            (l = "_blank" === s ? c.config.externalLinkRel || "noopener" : ""),
                            (t = a),
                            ne(e) || c._matchNotCompileLink(e) || i.ignore
                                ? (ne(e) ||
                                      "./" !== e.slice(0, 2) ||
                                      (e = document.URL.replace(/\/(?!.*\/).*/, "/").replace("#/./", "") + e),
                                  r.push(0 === e.indexOf("mailto:") ? "" : 'target="' + s + '"'),
                                  r.push(0 !== e.indexOf("mailto:") && "" !== l ? ' rel="' + l + '"' : ""))
                                : (e === c.config.homepage && (e = "README"), (e = o.toURL(e, null, o.getCurrentPath()))),
                            i.crossorgin &&
                                "_self" === s &&
                                "history" === c.config.routerMode &&
                                -1 === c.config.crossOriginLinks.indexOf(e) &&
                                c.config.crossOriginLinks.push(e),
                            i.disabled && (r.push("disabled"), (e = "javascript:void(0)")),
                            i.class && r.push('class="' + i.class + '"'),
                            i.id && r.push('id="' + i.id + '"'),
                            t && r.push('title="' + t + '"'),
                            '<a href="' + e + '" ' + r.join(" ") + ">" + n + "</a>"
                        );
                    }))),
                (i.paragraph = { renderer: e }.renderer.paragraph =
                    function (e) {
                        e = /^!&gt;/.test(e) ? hn("tip", e) : /^\?&gt;/.test(e) ? hn("warn", e) : "<p>" + e + "</p>";
                        return e;
                    }),
                (i.image =
                    ((r = (n = { renderer: e, contentBase: r, router: a }).renderer),
                    (u = n.contentBase),
                    (p = n.router),
                    (r.image = function (e, t, n) {
                        var r = e,
                            i = [],
                            a = kn(t),
                            o = a.str,
                            a = a.config;
                        return (
                            (t = o),
                            a["no-zoom"] && i.push("data-no-zoom"),
                            t && i.push('title="' + t + '"'),
                            a.size &&
                                ((t = (o = a.size.split("x"))[0]),
                                (o = o[1]) ? i.push('width="' + t + '" height="' + o + '"') : i.push('width="' + t + '"')),
                            a.class && i.push('class="' + a.class + '"'),
                            a.id && i.push('id="' + a.id + '"'),
                            ne(e) || (r = le(u, ie(p.getCurrentPath()), e)),
                            0 < i.length
                                ? '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '" ' + i.join(" ") + " />"
                                : '<img src="' + r + '" data-origin="' + e + '" alt="' + n + '"' + i + ">"
                        );
                    }))),
                (i.list = { renderer: e }.renderer.list =
                    function (e, t, n) {
                        t = t ? "ol" : "ul";
                        return (
                            "<" +
                            t +
                            " " +
                            [
                                /<li class="task-list-item">/.test(e.split('class="task-list"')[0]) ? 'class="task-list"' : "",
                                n && 1 < n ? 'start="' + n + '"' : "",
                            ]
                                .join(" ")
                                .trim() +
                            ">" +
                            e +
                            "</" +
                            t +
                            ">"
                        );
                    }),
                (i.listitem = { renderer: e }.renderer.listitem =
                    function (e) {
                        return /^(<input.*type="checkbox"[^>]*>)/.test(e)
                            ? '<li class="task-list-item"><label>' + e + "</label></li>"
                            : "<li>" + e + "</li>";
                    }),
                (e.origin = i),
                e
            );
        }),
        (En.prototype.sidebar = function (e, t) {
            var n = this.toc,
                r = this.router.getCurrentPath(),
                i = "";
            if (e) i = this.compile(e);
            else {
                for (var a = 0; a < n.length; a++)
                    if (n[a].ignoreSubHeading) {
                        var o = n[a].level;
                        n.splice(a, 1);
                        for (var s = a; s < n.length && o < n[s].level; s++) n.splice(s, 1) && s-- && a++;
                        a--;
                    }
                (t = this.cacheTree[r] || fn(n, t)), (i = dn(t, "<ul>{inner}</ul>"));
                this.cacheTree[r] = t;
            }
            return i;
        }),
        (En.prototype.subSidebar = function (e) {
            if (e) {
                var t = this.router.getCurrentPath(),
                    n = this.cacheTree,
                    r = this.toc;
                r[0] && r[0].ignoreAllSubs && r.splice(0), r[0] && 1 === r[0].level && r.shift();
                for (var i = 0; i < r.length; i++) r[i].ignoreSubHeading && r.splice(i, 1) && i--;
                e = n[t] || fn(r, e);
                return (n[t] = e), (this.toc = []), dn(e);
            }
            this.toc = [];
        }),
        (En.prototype.header = function (e, t) {
            return this.heading(e, t);
        }),
        (En.prototype.article = function (e) {
            return this.compile(e);
        }),
        (En.prototype.cover = function (e) {
            var t = this.toc.slice(),
                e = this.compile(e);
            return (this.toc = t.slice()), e;
        });
    var Rn,
        $n = function (e) {
            var t = (function (e) {
                e = e.match(/^[ \t]*(?=\S)/gm);
                return e
                    ? e.reduce(function (e, t) {
                          return Math.min(e, t.length);
                      }, 1 / 0)
                    : 0;
            })(e);
            if (0 === t) return e;
            t = new RegExp("^[ \\t]{" + t + "}", "gm");
            return e.replace(t, "");
        },
        Cn = {};
    function On(e, r) {
        var a = e.compiler,
            i = e.raw;
        void 0 === i && (i = "");
        var t = e.fetch,
            e = Cn[i];
        if (e) {
            var n = e.slice();
            return (n.links = e.links), r(n);
        }
        var n = a._marked,
            o = n.lexer(i),
            s = [],
            l = n.Lexer.rules.inline.link,
            c = o.links;
        o.forEach(function (e, i) {
            "paragraph" === e.type &&
                (e.text = e.text.replace(new RegExp(l.source, "g"), function (e, t, n, r) {
                    r = a.compileEmbed(n, r);
                    return r && s.push({ index: i, embed: r }), e;
                }));
        });
        var u = [];
        !(function (e, a) {
            var t,
                n = e.embedTokens,
                o = e.compile,
                s = (e.fetch, 0),
                l = 1;
            if (!n.length) return a({});
            for (; (t = n[s++]); ) {
                var r = (function (i) {
                    return function (e) {
                        var t, n, r;
                        e &&
                            ("markdown" === i.embed.type
                                ? ((n = i.embed.url.split("/")).pop(),
                                  (n = n.join("/")),
                                  (e = e.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, function (e) {
                                      var t = e.indexOf("(");
                                      return "(." === e.slice(t, t + 2)
                                          ? e.substring(0, t) +
                                                "(" +
                                                window.location.protocol +
                                                "//" +
                                                window.location.host +
                                                n +
                                                "/" +
                                                e.substring(t + 1, e.length - 1) +
                                                ")"
                                          : e;
                                  })),
                                  !0 === (($docsify.frontMatter || {}).installed || !1) && (e = $docsify.frontMatter.parseMarkdown(e)),
                                  (t = o.lexer(e)))
                                : "code" === i.embed.type
                                ? (i.embed.fragment &&
                                      ((r = i.embed.fragment),
                                      (r = new RegExp(
                                          "(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[" + r + "\\]"
                                      )),
                                      (e = $n((e.match(r) || [])[1] || "").trim())),
                                  (t = o.lexer("```" + i.embed.lang + "\n" + e.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n")))
                                : "mermaid" === i.embed.type
                                ? ((t = [{ type: "html", text: '<div class="mermaid">\n' + e + "\n</div>" }]).links = {})
                                : ((t = [{ type: "html", text: e }]).links = {})),
                            a({ token: i, embedToken: t }),
                            ++l >= s && a({});
                    };
                })(t);
                t.embed.url ? G(t.embed.url).then(r) : r(t.embed.html);
            }
        })({ compile: n, embedTokens: s, fetch: t }, function (e) {
            var t,
                n = e.embedToken,
                e = e.token;
            e
                ? ((t = e.index),
                  u.forEach(function (e) {
                      t > e.start && (t += e.length);
                  }),
                  b(c, n.links),
                  (o = o.slice(0, t).concat(n, o.slice(t + 1))),
                  u.push({ start: t, length: n.length - 1 }))
                : ((Cn[i] = o.concat()), (o.links = Cn[i].links = c), r(o));
        });
    }
    function Ln(e, t, n) {
        var r, i, a, o;
        return (
            (t =
                "function" == typeof n
                    ? n(t)
                    : "string" == typeof n
                    ? ((a = []),
                      (o = 0),
                      (r = n).replace($, function (t, e, n) {
                          a.push(r.substring(o, n - 1)),
                              (o = n += t.length + 1),
                              a.push(
                                  (i && i[t]) ||
                                      function (e) {
                                          return ("00" + ("string" == typeof C[t] ? e[C[t]]() : C[t](e))).slice(-t.length);
                                      }
                              );
                      }),
                      o !== r.length && a.push(r.substring(o)),
                      (function (e) {
                          for (var t = "", n = 0, r = e || new Date(); n < a.length; n++) t += "string" == typeof a[n] ? a[n] : a[n](r);
                          return t;
                      })(new Date(t)))
                    : t),
            e.replace(/{docsify-updated}/g, t)
        );
    }
    function Fn(e) {
        function t(e) {
            var t = Boolean(e.__vue__ && e.__vue__._isVue),
                e = Boolean(e._vnode && e._vnode.__v_skip);
            return t || e;
        }
        var n = this.config,
            r = k(".markdown-section"),
            i = "Vue" in window && window.Vue.version && Number(window.Vue.version.charAt(0));
        if (((e = e || "<h1>404 - Not found</h1>"), "Vue" in window))
            for (var a = 0, o = w(".markdown-section > *").filter(t); a < o.length; a += 1) {
                var s = o[a];
                2 === i ? s.__vue__.$destroy() : 3 === i && s.__vue_app__.unmount();
            }
        if (
            (this._renderTo(r, e),
            n.loadSidebar || this._renderSidebar(),
            (n.executeScript || ("Vue" in window && !1 !== n.executeScript)) &&
                (!(e = w(".markdown-section>script").filter(function (e) {
                    return !/template/.test(e.type);
                })[0]) ||
                    ((e = e.innerText.trim()) && new Function(e)())),
            "Vue" in window)
        ) {
            var l,
                c,
                u = [],
                p = Object.keys(n.vueComponents || {});
            2 === i &&
                p.length &&
                p.forEach(function (e) {
                    window.Vue.options.components[e] || window.Vue.component(e, n.vueComponents[e]);
                }),
                !Rn && n.vueGlobalOptions && "function" == typeof n.vueGlobalOptions.data && (Rn = n.vueGlobalOptions.data()),
                u.push.apply(
                    u,
                    Object.keys(n.vueMounts || {})
                        .map(function (e) {
                            return [k(r, e), n.vueMounts[e]];
                        })
                        .filter(function (e) {
                            var t = e[0];
                            e[1];
                            return t;
                        })
                ),
                (n.vueGlobalOptions || p.length) &&
                    ((l = /{{2}[^{}]*}{2}/),
                    (c = /<[^>/]+\s([@:]|v-)[\w-:.[\]]+[=>\s]/),
                    u.push.apply(
                        u,
                        w(".markdown-section > *")
                            .filter(function (n) {
                                return !u.some(function (e) {
                                    var t = e[0];
                                    e[1];
                                    return t === n;
                                });
                            })
                            .filter(function (e) {
                                return (
                                    e.tagName.toLowerCase() in (n.vueComponents || {}) ||
                                    e.querySelector(p.join(",") || null) ||
                                    l.test(e.outerHTML) ||
                                    c.test(e.outerHTML)
                                );
                            })
                            .map(function (e) {
                                var t = b({}, n.vueGlobalOptions || {});
                                return (
                                    Rn &&
                                        (t.data = function () {
                                            return Rn;
                                        }),
                                    [e, t]
                                );
                            })
                    ));
            for (var d = 0, h = u; d < h.length; d += 1) {
                var f,
                    g = h[d],
                    m = g[0],
                    v = g[1],
                    g = "data-isvue";
                m.matches("pre, script") ||
                    t(m) ||
                    m.querySelector("[" + g + "]") ||
                    (m.setAttribute(g, ""),
                    2 === i
                        ? ((v.el = void 0), new window.Vue(v).$mount(m))
                        : 3 === i &&
                          ((f = window.Vue.createApp(v)),
                          p.forEach(function (e) {
                              var t = n.vueComponents[e];
                              f.component(e, t);
                          }),
                          f.mount(m)));
            }
        }
    }
    function zn(e) {
        var t = e.config;
        (e.compiler = new En(t, e.router)), (window.__current_docsify_compiler__ = e.compiler);
        var n,
            r,
            i,
            a,
            o,
            s = t.el || "#app",
            l = k("nav") || x("nav"),
            c = k(s),
            u = "",
            p = v;
        c
            ? (t.repo &&
                  (u +=
                      ((a = t.repo),
                      (s = t.cornerExternalLinkTarge),
                      a
                          ? (/\/\//.test(a) || (a = "https://github.com/" + a),
                            '<a href="' +
                                (a = a.replace(/^git\+/, "")) +
                                '" target="' +
                                (s = s || "_blank") +
                                '" class="github-corner" aria-label="View source on Github"><svg viewBox="0 0 250 250" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>')
                          : "")),
              t.coverpage &&
                  (u +=
                      ((i = ", 100%, 85%"),
                      '<section class="cover show" style="background: ' +
                          ("linear-gradient(to left bottom, hsl(" +
                              Math.floor(255 * Math.random()) +
                              i +
                              ") 0%,hsl(" +
                              Math.floor(255 * Math.random()) +
                              i +
                              ") 100%)") +
                          '"><div class="mask"></div><div class="cover-main">\x3c!--cover--\x3e</div></section>')),
              t.logo &&
                  ((i = /^data:image/.test(t.logo)),
                  (n = /(?:http[s]?:)?\/\//.test(t.logo)),
                  (r = /^\./.test(t.logo)),
                  i || n || r || (t.logo = le(e.router.getBasePath(), t.logo))),
              (u +=
                  ((r = (n = t).name ? n.name : ""),
                  "<main>" +
                      ('<button class="sidebar-toggle" aria-label="Menu"><div class="sidebar-toggle-button"><span></span><span></span><span></span></div></button><aside class="sidebar">' +
                          (n.name
                              ? '<h1 class="app-name"><a class="app-name-link" ' +
                                (n.logo ? '<img alt="' + r + '" src=' + n.logo + ">" : r) +
                                "</a></h1>"
                              : "") +
                          '<div class="sidebar-nav">\x3c!--sidebar--\x3e</div></aside>') +
                      '<section class="content"><article class="markdown-section" id="main">\x3c!--main--\x3e</article></section></main>')),
              e._renderTo(c, u, !0))
            : (e.rendered = !0),
            t.mergeNavbar && h ? (p = k(".sidebar")) : (l.classList.add("app-nav"), t.repo || l.classList.add("no-badge")),
            t.loadNavbar && _(p, l),
            t.themeColor &&
                (m.head.appendChild(x("div", "<style>:root{--theme-color: " + t.themeColor + ";}</style>").firstElementChild),
                (o = t.themeColor),
                (window.CSS && window.CSS.supports && window.CSS.supports("(--v:red)")) ||
                    ((t = w("style:not(.inserted),link")),
                    [].forEach.call(t, function (e) {
                        if ("STYLE" === e.nodeName) W(e, o);
                        else if ("LINK" === e.nodeName) {
                            e = e.getAttribute("href");
                            if (!/\.css$/.test(e)) return;
                            G(e).then(function (e) {
                                e = x("style", e);
                                y.appendChild(e), W(e, o);
                            });
                        }
                    }))),
            e._updateRender(),
            T(v, "ready");
    }
    var Mn = {};
    pt = function (e) {
        this.config = e;
    };
    function Nn(e) {
        var t = location.href.indexOf("#");
        location.replace(location.href.slice(0, 0 <= t ? t : 0) + "#" + e);
    }
    (pt.prototype.getBasePath = function () {
        return this.config.basePath;
    }),
        (pt.prototype.getFile = function (e, t) {
            void 0 === e && (e = this.getCurrentPath());
            var n,
                r,
                i = this.config,
                a = this.getBasePath(),
                o = "string" == typeof i.ext ? i.ext : ".md";
            return (
                (e = i.alias
                    ? (function e(t, n, r) {
                          var i = Object.keys(n).filter(function (e) {
                              return (Mn[e] || (Mn[e] = new RegExp("^" + e + "$"))).test(t) && t !== r;
                          })[0];
                          return i ? e(t.replace(Mn[i], n[i]), n, t) : t;
                      })(e, i.alias)
                    : e),
                (n = e),
                (r = o),
                (e =
                    ((e = new RegExp("\\.(" + r.replace(/^\./, "") + "|html)$", "g").test(n)
                        ? n
                        : /\/$/g.test(n)
                        ? n + "README" + r
                        : "" + n + r) ===
                        "/README" + o &&
                        i.homepage) ||
                    e),
                (e = ne(e) ? e : le(a, e)),
                t && (e = e.replace(new RegExp("^" + a), "")),
                e
            );
        }),
        (pt.prototype.onchange = function (e) {
            void 0 === e && (e = u), e();
        }),
        (pt.prototype.getCurrentPath = function () {}),
        (pt.prototype.normalize = function () {}),
        (pt.prototype.parse = function () {}),
        (pt.prototype.toURL = function (e, t, n) {
            var r = n && "#" === e[0],
                i = this.parse(ce(e));
            if (
                ((i.query = b({}, i.query, t)),
                (e = (e = i.path + te(i.query)).replace(/\.md(\?)|\.md$/, "$1")),
                r && (e = (0 < (r = n.indexOf("?")) ? n.substring(0, r) : n) + e),
                this.config.relativePath && 0 !== e.indexOf("/"))
            ) {
                n = n.substring(0, n.lastIndexOf("/") + 1);
                return ae(oe(n + e));
            }
            return ae("/" + e);
        });
    var Pn = (function (r) {
            function e(e) {
                r.call(this, e), (this.mode = "hash");
            }
            return (
                r && (e.__proto__ = r),
                (((e.prototype = Object.create(r && r.prototype)).constructor = e).prototype.getBasePath = function () {
                    var e = window.location.pathname || "",
                        t = this.config.basePath,
                        e = ue(e, ".html") ? e + "#/" + t : e + "/" + t;
                    return /^(\/|https?:)/g.test(t) ? t : ae(e);
                }),
                (e.prototype.getCurrentPath = function () {
                    var e = location.href,
                        t = e.indexOf("#");
                    return -1 === t ? "" : e.slice(t + 1);
                }),
                (e.prototype.onchange = function (n) {
                    void 0 === n && (n = u);
                    var r = !1;
                    S("click", function (e) {
                        e = "A" === e.target.tagName ? e.target : e.target.parentNode;
                        e && "A" === e.tagName && !/_blank/.test(e.target) && (r = !0);
                    }),
                        S("hashchange", function (e) {
                            var t = r ? "navigate" : "history";
                            (r = !1), n({ event: e, source: t });
                        });
                }),
                (e.prototype.normalize = function () {
                    var e = this.getCurrentPath();
                    if ("/" === (e = ce(e)).charAt(0)) return Nn(e);
                    Nn("/" + e);
                }),
                (e.prototype.parse = function (e) {
                    void 0 === e && (e = location.href);
                    var t = "",
                        n = e.indexOf("#");
                    0 <= n && (e = e.slice(n + 1));
                    n = e.indexOf("?");
                    return 0 <= n && ((t = e.slice(n + 1)), (e = e.slice(0, n))), { path: e, file: this.getFile(e, !0), query: ee(t) };
                }),
                (e.prototype.toURL = function (e, t, n) {
                    return "#" + r.prototype.toURL.call(this, e, t, n);
                }),
                e
            );
        })(pt),
        Dn = (function (t) {
            function e(e) {
                t.call(this, e), (this.mode = "history");
            }
            return (
                t && (e.__proto__ = t),
                (((e.prototype = Object.create(t && t.prototype)).constructor = e).prototype.getCurrentPath = function () {
                    var e = this.getBasePath(),
                        t = window.location.pathname;
                    return e && 0 === t.indexOf(e) && (t = t.slice(e.length)), (t || "/") + window.location.search + window.location.hash;
                }),
                (e.prototype.onchange = function (n) {
                    var r = this;
                    void 0 === n && (n = u),
                        S("click", function (e) {
                            var t = "A" === e.target.tagName ? e.target : e.target.parentNode;
                            "A" !== t.tagName ||
                                /_blank/.test(t.target) ||
                                (e.preventDefault(),
                                (t = t.href),
                                -1 !== r.config.crossOriginLinks.indexOf(t)
                                    ? window.open(t, "_self")
                                    : window.history.pushState({ key: t }, "", t),
                                n({ event: e, source: "navigate" }));
                        }),
                        S("popstate", function (e) {
                            n({ event: e, source: "history" });
                        });
                }),
                (e.prototype.parse = function (e) {
                    void 0 === e && (e = location.href);
                    var t = "",
                        n = e.indexOf("?");
                    0 <= n && ((t = e.slice(n + 1)), (e = e.slice(0, n)));
                    var r = le(location.origin),
                        n = e.indexOf(r);
                    return -1 < n && (e = e.slice(n + r.length)), { path: e, file: this.getFile(e), query: ee(t) };
                }),
                e
            );
        })(pt);
    var In = {};
    function jn(e) {
        e.router.normalize(), (e.route = e.router.parse()), v.setAttribute("data-page", e.route.file);
    }
    function qn(e) {
        function t(e) {
            return v.classList.toggle("close");
        }
        var n;
        (n = "button.sidebar-toggle"),
            e.router,
            null != (n = g(n)) &&
                (S(n, "click", function (e) {
                    e.stopPropagation(), t();
                }),
                h &&
                    S(v, "click", function (e) {
                        return v.classList.contains("close") && t();
                    })),
            (n = ".sidebar"),
            e.router,
            null != (n = g(n)) &&
                S(n, "click", function (e) {
                    e = e.target;
                    "A" === e.nodeName &&
                        e.nextSibling &&
                        e.nextSibling.classList &&
                        e.nextSibling.classList.contains("app-sub-sidebar") &&
                        T(e.parentNode, "collapse");
                }),
            e.config.coverpage ? h || S("scroll", X) : v.classList.add("sticky");
    }
    function Hn(t, n, r, i, a, e) {
        (t = e ? t : t.replace(/\/$/, "")),
            (t = ie(t)) &&
                G(a.router.getFile(t + r) + n, !1, a.config.requestHeaders).then(i, function (e) {
                    return Hn(t, n, r, i, a);
                });
    }
    var Un = Object.freeze({
        __proto__: null,
        cached: s,
        hyphenate: a,
        hasOwn: l,
        merge: b,
        isPrimitive: c,
        noop: u,
        isFn: p,
        isExternal: d,
        inBrowser: !0,
        isMobile: h,
        supportsPushState: f,
        parseQuery: ee,
        stringifyQuery: te,
        isAbsolutePath: ne,
        removeParams: re,
        getParentPath: ie,
        cleanPath: ae,
        resolvePath: oe,
        getPath: le,
        replaceSlug: ce,
        endsWith: ue,
    });
    function Bn() {
        this._init();
    }
    var Zn,
        Gn,
        Wn,
        Vn = Bn.prototype;
    function Yn(e, t, n) {
        return Wn && Wn.abort && Wn.abort(), (Wn = G(e, !0, n));
    }
    (Vn._init = function () {
        var n,
            t,
            r,
            i,
            e,
            a,
            o = this;
        (o.config = R(o)),
            ((n = o)._hooks = {}),
            (n._lifecycle = {}),
            ["init", "mounted", "beforeEach", "afterEach", "doneEach", "ready"].forEach(function (e) {
                var t = (n._hooks[e] = []);
                n._lifecycle[e] = function (e) {
                    return t.push(e);
                };
            }),
            [].concat((t = o).config.plugins).forEach(function (e) {
                return p(e) && e(t._lifecycle, t);
            }),
            V(o, "init"),
            (e = new ("history" === ((e = (r = o).config).routerMode || "hash") && f ? Dn : Pn)(e)),
            (r.router = e),
            jn(r),
            (In = r.route),
            e.onchange(function (e) {
                jn(r),
                    r._updateRender(),
                    In.path !== r.route.path ? (r.$fetch(u, r.$resetEvents.bind(r, e.source)), (In = r.route)) : r.$resetEvents(e.source);
            }),
            zn(o),
            qn(o),
            (a = (i = o).config.loadSidebar),
            i.rendered
                ? ((e = K(i.router, ".sidebar-nav", !0, !0)),
                  a && e && (e.parentNode.innerHTML += window.__SUB_SIDEBAR__),
                  i._bindEventOnRendered(e),
                  i.$resetEvents(),
                  V(i, "doneEach"),
                  V(i, "ready"))
                : i.$fetch(function (e) {
                      return V(i, "ready");
                  }),
            V(o, "mounted");
    }),
        (Vn.route = {}),
        ((Zn = Vn)._renderTo = function (e, t, n) {
            e = g(e);
            e && (e[n ? "outerHTML" : "innerHTML"] = t);
        }),
        (Zn._renderSidebar = function (e) {
            var t = this.config,
                n = t.maxLevel,
                r = t.subMaxLevel,
                i = t.loadSidebar;
            if (t.hideSidebar)
                return (
                    [document.querySelector("aside.sidebar"), document.querySelector("button.sidebar-toggle")].forEach(function (e) {
                        return e.parentNode.removeChild(e);
                    }),
                    (document.querySelector("section.content").style.right = "unset"),
                    (document.querySelector("section.content").style.left = "unset"),
                    (document.querySelector("section.content").style.position = "relative"),
                    (document.querySelector("section.content").style.width = "100%"),
                    null
                );
            this._renderTo(".sidebar-nav", this.compiler.sidebar(e, n));
            n = K(this.router, ".sidebar-nav", !0, !0);
            i && n ? (n.parentNode.innerHTML += this.compiler.subSidebar(r) || "") : this.compiler.subSidebar(),
                this._bindEventOnRendered(n);
        }),
        (Zn._bindEventOnRendered = function (e) {
            var t,
                n = this.config.autoHeader;
            !(function (e) {
                var t = k(".cover.show");
                we = t ? t.offsetHeight : 0;
                var t = g(".sidebar"),
                    n = [];
                null != t && (n = w(t, "li"));
                for (var r, i = 0, a = n.length; i < a; i += 1) {
                    var o,
                        s,
                        l = n[i],
                        c = l.querySelector("a");
                    c &&
                        ("/" !== (o = c.getAttribute("href")) && ((c = (s = e.parse(o)).query.id), (s = s.path), c && (o = _e(s, c))),
                        o && (ve[decodeURIComponent(o)] = l));
                }
                h ||
                    ((r = re(e.getCurrentPath())),
                    A("scroll", function () {
                        return xe(r);
                    }),
                    S("scroll", function () {
                        return xe(r);
                    }),
                    S(t, "mouseover", function () {
                        be = !0;
                    }),
                    S(t, "mouseleave", function () {
                        be = !1;
                    }));
            })(this.router),
                n &&
                    e &&
                    (n = (t = g("#main")).children[0]) &&
                    "H1" !== n.tagName &&
                    _(t, x("div", this.compiler.header(e.innerText, 1)).children[0]);
        }),
        (Zn._renderNav = function (e) {
            e && this._renderTo("nav", this.compiler.compile(e)), this.config.loadNavbar && K(this.router, "nav");
        }),
        (Zn._renderMain = function (r, i, a) {
            var o = this;
            if ((void 0 === i && (i = {}), !r)) return Fn.call(this, r);
            V(this, "beforeEach", r, function (e) {
                function t() {
                    i.updatedAt && (n = Ln(n, i.updatedAt, o.config.formatUpdated)),
                        V(o, "afterEach", n, function (e) {
                            return Fn.call(o, e);
                        });
                }
                var n;
                o.isHTML
                    ? ((n = o.result = r), t(), a())
                    : On({ compiler: o.compiler, raw: e }, function (e) {
                          (n = o.compiler.compile(e)), (n = o.isRemoteUrl ? U.sanitize(n, { ADD_TAGS: ["script"] }) : n), t(), a();
                      });
            });
        }),
        (Zn._renderCover = function (e, t) {
            var n,
                r = g(".cover");
            T(g("main"), t ? "add" : "remove", "hidden"),
                e
                    ? (T(r, "add", "show"),
                      (t = (n = this.coverIsHTML ? e : this.compiler.cover(e))
                          .trim()
                          .match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$')) &&
                          ("color" === t[2]
                              ? (r.style.background = t[1] + (t[3] || ""))
                              : ((e = t[1]),
                                T(r, "add", "has-mask"),
                                ne(t[1]) || (e = le(this.router.getBasePath(), t[1])),
                                (r.style.backgroundImage = "url(" + e + ")"),
                                (r.style.backgroundSize = "cover"),
                                (r.style.backgroundPosition = "center center")),
                          (n = n.replace(t[0], ""))),
                      this._renderTo(".cover-main", n),
                      X())
                    : T(r, "remove", "show");
        }),
        (Zn._updateRender = function () {
            var e, t, n, r;
            (e = this),
                (t = g(".app-name-link")),
                (n = e.config.nameLink),
                (r = e.route.path),
                t &&
                    (c(e.config.nameLink)
                        ? t.setAttribute("href", n)
                        : "object" == typeof n &&
                          ((e = Object.keys(n).filter(function (e) {
                              return -1 < r.indexOf(e);
                          })[0]),
                          t.setAttribute("href", n[e])));
        }),
        ((Gn = Vn)._loadSideAndNav = function (e, t, n, r) {
            var i = this;
            return function () {
                if (!n) return r();
                Hn(
                    e,
                    t,
                    n,
                    function (e) {
                        i._renderSidebar(e), r();
                    },
                    i,
                    !0
                );
            };
        }),
        (Gn._fetch = function (n) {
            var r = this;
            void 0 === n && (n = u);
            var i,
                e,
                t,
                a,
                o,
                s = this.route.query,
                l = this.route.path;
            d(l)
                ? (history.replaceState(null, "", "#"), this.router.normalize())
                : ((i = te(s, ["id"])),
                  (t = (e = this.config).loadNavbar),
                  (s = e.requestHeaders),
                  (a = e.loadSidebar),
                  (o = this.router.getFile(l)),
                  (s = Yn(o + i, 0, s)),
                  (this.isRemoteUrl = d(o)),
                  (this.isHTML = /\.html$/g.test(o)),
                  s.then(
                      function (e, t) {
                          return r._renderMain(e, t, r._loadSideAndNav(l, i, a, n));
                      },
                      function (e) {
                          r._fetchFallbackPage(l, i, n) || r._fetch404(o, i, n);
                      }
                  ),
                  t &&
                      Hn(
                          l,
                          i,
                          t,
                          function (e) {
                              return r._renderNav(e);
                          },
                          this,
                          !0
                      ));
        }),
        (Gn._fetchCover = function () {
            var t = this,
                e = this.config,
                n = e.coverpage,
                r = e.requestHeaders,
                i = this.route.query,
                a = ie(this.route.path);
            if (n) {
                var o = null,
                    e = this.route.path;
                "string" == typeof n
                    ? "/" === e && (o = n)
                    : (o = Array.isArray(n) ? -1 < n.indexOf(e) && "_coverpage" : !0 === (e = n[e]) ? "_coverpage" : e);
                var s = Boolean(o) && this.config.onlyCover;
                return (
                    o
                        ? ((o = this.router.getFile(a + o)),
                          (this.coverIsHTML = /\.html$/g.test(o)),
                          G(o + te(i, ["id"]), !1, r).then(function (e) {
                              return t._renderCover(e, s);
                          }))
                        : this._renderCover(null, s),
                    s
                );
            }
        }),
        (Gn.$fetch = function (e, t) {
            var n = this;
            void 0 === e && (e = u), void 0 === t && (t = this.$resetEvents.bind(this));
            function r() {
                V(n, "doneEach"), e();
            }
            this._fetchCover()
                ? r()
                : this._fetch(function () {
                      t(), r();
                  });
        }),
        (Gn._fetchFallbackPage = function (n, r, i) {
            var a = this;
            void 0 === i && (i = u);
            var e = this.config,
                t = e.requestHeaders,
                o = e.fallbackLanguages,
                s = e.loadSidebar;
            if (!o) return !1;
            e = n.split("/")[1];
            if (-1 === o.indexOf(e)) return !1;
            e = this.router.getFile(n.replace(new RegExp("^/" + e), ""));
            return (
                Yn(e + r, 0, t).then(
                    function (e, t) {
                        return a._renderMain(e, t, a._loadSideAndNav(n, r, s, i));
                    },
                    function () {
                        return a._fetch404(n, r, i);
                    }
                ),
                !0
            );
        }),
        (Gn._fetch404 = function (e, t, n) {
            var r = this;
            void 0 === n && (n = u);
            var i = this.config,
                a = i.loadSidebar,
                o = i.requestHeaders,
                i = i.notFoundPage,
                s = this._loadSideAndNav(e, t, a, n);
            if (i) {
                e = (function (t, e) {
                    var n,
                        r = e.notFoundPage,
                        i = "_404" + (e.ext || ".md");
                    switch (typeof r) {
                        case "boolean":
                            n = i;
                            break;
                        case "string":
                            n = r;
                            break;
                        case "object":
                            n =
                                ((e = Object.keys(r)
                                    .sort(function (e, t) {
                                        return t.length - e.length;
                                    })
                                    .filter(function (e) {
                                        return t.match(new RegExp("^" + e));
                                    })[0]) &&
                                    r[e]) ||
                                i;
                    }
                    return n;
                })(e, this.config);
                return (
                    Yn(this.router.getFile(e), 0, o).then(
                        function (e, t) {
                            return r._renderMain(e, t, s);
                        },
                        function () {
                            return r._renderMain(null, {}, s);
                        }
                    ),
                    !0
                );
            }
            return this._renderMain(null, {}, s), !1;
        }),
        (Vn.$resetEvents = function (e) {
            var t = this,
                n = this.config.auto2top;
            "history" !== e &&
                (t.route.query.id && Se(t.route.path, t.route.query.id),
                "navigate" === e && n && (void 0 === (n = n) && (n = 0), (Ae.scrollTop = !0 === n ? 0 : Number(n)))),
                this.config.loadNavbar && K(this.router, "nav");
        }),
        (window.Docsify = { util: Un, dom: t, get: G, slugify: bn, version: "4.12.1" }),
        (window.DocsifyCompiler = En),
        (window.marked = pn),
        (window.Prism = _n),
        e(function (e) {
            return new Bn();
        });
})();

/*!
 * docsify-themeable
 * v0.8.6
 * https://jhildenbiddle.github.io/docsify-themeable/
 * (c) 2018-2021 John Hildenbiddle
 * MIT license
 */
!(function () {
    "use strict";
    function e() {
        return (e =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
            }).apply(this, arguments);
    }
    function t(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = {
                mimeType: t.mimeType || null,
                onBeforeSend: t.onBeforeSend || Function.prototype,
                onSuccess: t.onSuccess || Function.prototype,
                onError: t.onError || Function.prototype,
                onComplete: t.onComplete || Function.prototype,
            },
            r = Array.isArray(e) ? e : [e],
            o = Array.apply(null, Array(r.length)).map(function (e) {
                return null;
            });
        function a(e) {
            var t = "string" == typeof e,
                n = t && "<" === e.trim().charAt(0);
            return t && !n;
        }
        function s(e, t) {
            n.onError(e, r[t], t);
        }
        function c(e, t) {
            var a = n.onSuccess(e, r[t], t);
            (e = !1 === a ? "" : a || e), (o[t] = e), -1 === o.indexOf(null) && n.onComplete(o);
        }
        var i = document.createElement("a");
        r.forEach(function (e, t) {
            if (
                (i.setAttribute("href", e),
                (i.href = String(i.href)),
                Boolean(document.all && !window.atob) && i.host.split(":")[0] !== location.host.split(":")[0])
            ) {
                if (i.protocol === location.protocol) {
                    var r = new XDomainRequest();
                    r.open("GET", e),
                        (r.timeout = 0),
                        (r.onprogress = Function.prototype),
                        (r.ontimeout = Function.prototype),
                        (r.onload = function () {
                            var e = r.responseText;
                            a(e) ? c(e, t) : s(r, t);
                        }),
                        (r.onerror = function (e) {
                            s(r, t);
                        }),
                        setTimeout(function () {
                            r.send();
                        }, 0);
                } else
                    console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e, ")")),
                        s(null, t);
            } else {
                var o = new XMLHttpRequest();
                o.open("GET", e),
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType),
                    n.onBeforeSend(o, e, t),
                    (o.onreadystatechange = function () {
                        if (4 === o.readyState) {
                            var e = o.responseText;
                            (o.status < 400 && a(e)) || (0 === o.status && a(e)) ? c(e, t) : s(o, t);
                        }
                    }),
                    o.send();
            }
        });
    }
    function n(e) {
        var n = /\/\*[\s\S]+?\*\//g,
            o = /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g,
            a = {
                rootElement: e.rootElement || document,
                include: e.include || 'style,link[rel="stylesheet"]',
                exclude: e.exclude || null,
                filter: e.filter || null,
                skipDisabled: !1 !== e.skipDisabled,
                useCSSOM: e.useCSSOM || !1,
                onBeforeSend: e.onBeforeSend || Function.prototype,
                onSuccess: e.onSuccess || Function.prototype,
                onError: e.onError || Function.prototype,
                onComplete: e.onComplete || Function.prototype,
            },
            s = Array.apply(null, a.rootElement.querySelectorAll(a.include)).filter(function (e) {
                return (
                    (t = e),
                    (n = a.exclude),
                    !(
                        t.matches ||
                        t.matchesSelector ||
                        t.webkitMatchesSelector ||
                        t.mozMatchesSelector ||
                        t.msMatchesSelector ||
                        t.oMatchesSelector
                    ).call(t, n)
                );
                var t, n;
            }),
            c = Array.apply(null, Array(s.length)).map(function (e) {
                return null;
            });
        function i() {
            if (-1 === c.indexOf(null)) {
                c.reduce(function (e, t, n) {
                    return "" === t && e.push(n), e;
                }, [])
                    .reverse()
                    .forEach(function (e) {
                        return [s, c].forEach(function (t) {
                            return t.splice(e, 1);
                        });
                    });
                var e = c.join("");
                a.onComplete(e, c, s);
            }
        }
        function u(e, t, n, r) {
            var o = a.onSuccess(e, n, r);
            d((e = void 0 !== o && !1 === Boolean(o) ? "" : o || e), n, r, function (e, r) {
                null === c[t] &&
                    (r.forEach(function (e) {
                        return a.onError(e.xhr, n, e.url);
                    }),
                    !a.filter || a.filter.test(e) ? (c[t] = e) : (c[t] = ""),
                    i());
            });
        }
        function l(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                s = {};
            return (
                (s.rules = (e.replace(n, "").match(o) || []).filter(function (e) {
                    return -1 === a.indexOf(e);
                })),
                (s.urls = s.rules.map(function (e) {
                    return e.replace(o, "$1");
                })),
                (s.absoluteUrls = s.urls.map(function (e) {
                    return r(e, t);
                })),
                (s.absoluteRules = s.rules.map(function (e, n) {
                    var o = s.urls[n],
                        a = r(s.absoluteUrls[n], t);
                    return e.replace(o, a);
                })),
                s
            );
        }
        function d(e, n, r, o) {
            var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                i = l(e, r, c);
            i.rules.length
                ? t(i.absoluteUrls, {
                      onBeforeSend: function (e, t, r) {
                          a.onBeforeSend(e, n, t);
                      },
                      onSuccess: function (e, t, r) {
                          var o = a.onSuccess(e, n, t),
                              s = l((e = !1 === o ? "" : o || e), t, c);
                          return (
                              s.rules.forEach(function (t, n) {
                                  e = e.replace(t, s.absoluteRules[n]);
                              }),
                              e
                          );
                      },
                      onError: function (t, a, u) {
                          s.push({ xhr: t, url: a }), c.push(i.rules[u]), d(e, n, r, o, s, c);
                      },
                      onComplete: function (t) {
                          t.forEach(function (t, n) {
                              e = e.replace(i.rules[n], t);
                          }),
                              d(e, n, r, o, s, c);
                      },
                  })
                : o(e, s);
        }
        s.length
            ? s.forEach(function (e, n) {
                  var o = e.getAttribute("href"),
                      s = e.getAttribute("rel"),
                      l = "link" === e.nodeName.toLowerCase() && o && s && -1 !== s.toLowerCase().indexOf("stylesheet"),
                      d = !1 !== a.skipDisabled && e.disabled,
                      f = "style" === e.nodeName.toLowerCase();
                  if (l && !d)
                      t(o, {
                          mimeType: "text/css",
                          onBeforeSend: function (t, n, r) {
                              a.onBeforeSend(t, e, n);
                          },
                          onSuccess: function (t, a, s) {
                              var c = r(o);
                              u(t, n, e, c);
                          },
                          onError: function (t, r, o) {
                              (c[n] = ""), a.onError(t, e, r), i();
                          },
                      });
                  else if (f && !d) {
                      var m = e.textContent;
                      a.useCSSOM &&
                          (m = Array.apply(null, e.sheet.cssRules)
                              .map(function (e) {
                                  return e.cssText;
                              })
                              .join("")),
                          u(m, n, e, location.href);
                  } else (c[n] = ""), i();
              })
            : a.onComplete("", []);
    }
    function r(e, t) {
        var n = document.implementation.createHTMLDocument(""),
            r = n.createElement("base"),
            o = n.createElement("a");
        return (
            n.head.appendChild(r),
            n.body.appendChild(o),
            (r.href = t || document.baseURI || (document.querySelector("base") || {}).href || location.href),
            (o.href = e),
            o.href
        );
    }
    var o = a;
    function a(e, t, n) {
        e instanceof RegExp && (e = s(e, n)), t instanceof RegExp && (t = s(t, n));
        var r = c(e, t, n);
        return r && { start: r[0], end: r[1], pre: n.slice(0, r[0]), body: n.slice(r[0] + e.length, r[1]), post: n.slice(r[1] + t.length) };
    }
    function s(e, t) {
        var n = t.match(e);
        return n ? n[0] : null;
    }
    function c(e, t, n) {
        var r,
            o,
            a,
            s,
            c,
            i = n.indexOf(e),
            u = n.indexOf(t, i + 1),
            l = i;
        if (i >= 0 && u > 0) {
            if (e === t) return [i, u];
            for (r = [], a = n.length; l >= 0 && !c; )
                l == i
                    ? (r.push(l), (i = n.indexOf(e, l + 1)))
                    : 1 == r.length
                    ? (c = [r.pop(), u])
                    : ((o = r.pop()) < a && ((a = o), (s = u)), (u = n.indexOf(t, l + 1))),
                    (l = i < u && i >= 0 ? i : u);
            r.length && (c = [a, s]);
        }
        return c;
    }
    function i(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = { preserveStatic: !0, removeComments: !1 },
            a = e({}, r, n),
            s = [];
        function c(e) {
            throw new Error("CSS parse error: ".concat(e));
        }
        function i(e) {
            var n = e.exec(t);
            if (n) return (t = t.slice(n[0].length)), n;
        }
        function u() {
            return i(/^{\s*/);
        }
        function l() {
            return i(/^}/);
        }
        function d() {
            i(/^\s*/);
        }
        function f() {
            if ((d(), "/" === t[0] && "*" === t[1])) {
                for (var e = 2; t[e] && ("*" !== t[e] || "/" !== t[e + 1]); ) e++;
                if (!t[e]) return c("end of comment is missing");
                var n = t.slice(2, e);
                return (t = t.slice(e + 2)), { type: "comment", comment: n };
            }
        }
        function m() {
            for (var e, t = []; (e = f()); ) t.push(e);
            return a.removeComments ? [] : t;
        }
        function p() {
            for (d(); "}" === t[0]; ) c("extra closing bracket");
            var e = i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
            if (e) {
                var n,
                    r = e[0].trim();
                /\/\*/.test(r) && (r = r.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, ""));
                var o = /["']\w*,\w*["']/.test(r);
                return (
                    o &&
                        (r = r.replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (e) {
                            return e.replace(/,/g, "‌");
                        })),
                    (n = /,/.test(r) ? r.split(/\s*(?![^(]*\)),\s*/) : [r]),
                    o &&
                        (n = n.map(function (e) {
                            return e.replace(/\u200C/g, ",");
                        })),
                    n
                );
            }
        }
        function v() {
            if ("@" === t[0]) return O();
            i(/^([;\s]*)+/);
            var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                n = i(/^(\*?[-#/*\\\w.]+(\[[0-9a-z_-]+\])?)\s*/);
            if (n) {
                if (((n = n[0].trim()), !i(/^:\s*/))) return c("property missing ':'");
                var r = i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
                    o = { type: "declaration", property: n.replace(e, ""), value: r ? r[0].replace(e, "").trim() : "" };
                return i(/^[;\s]*/), o;
            }
        }
        function h() {
            if (!u()) return c("missing '{'");
            for (var e, t = m(); (e = v()); ) t.push(e), (t = t.concat(m()));
            return l() ? t : c("missing '}'");
        }
        function y() {
            d();
            for (var e, t = []; (e = i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); ) t.push(e[1]), i(/^,\s*/);
            if (t.length) return { type: "keyframe", values: t, declarations: h() };
        }
        function g() {
            var e = i(/^@([-\w]+)?keyframes\s*/);
            if (e) {
                var t = e[1];
                if (!(e = i(/^([-\w]+)\s*/))) return c("@keyframes missing name");
                var n,
                    r = e[1];
                if (!u()) return c("@keyframes missing '{'");
                for (var o = m(); (n = y()); ) o.push(n), (o = o.concat(m()));
                return l() ? { type: "keyframes", name: r, vendor: t, keyframes: o } : c("@keyframes missing '}'");
            }
        }
        function b() {
            if (i(/^@page */)) return { type: "page", selectors: p() || [], declarations: h() };
        }
        function w() {
            var e = i(/@(top|bottom|left|right)-(left|center|right|top|middle|bottom)-?(corner)?\s*/);
            if (e)
                return {
                    type: "page-margin-box",
                    name: "".concat(e[1], "-").concat(e[2]) + (e[3] ? "-".concat(e[3]) : ""),
                    declarations: h(),
                };
        }
        function E() {
            if (i(/^@font-face\s*/)) return { type: "font-face", declarations: h() };
        }
        function S() {
            var e = i(/^@supports *([^{]+)/);
            if (e) return { type: "supports", supports: e[1].trim(), rules: M() };
        }
        function C() {
            if (i(/^@host\s*/)) return { type: "host", rules: M() };
        }
        function x() {
            var e = i(/^@media([^{]+)*/);
            if (e) return { type: "media", media: (e[1] || "").trim(), rules: M() };
        }
        function A() {
            var e = i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
            if (e) return { type: "custom-media", name: e[1].trim(), media: e[2].trim() };
        }
        function k() {
            var e = i(/^@([-\w]+)?document *([^{]+)/);
            if (e) return { type: "document", document: e[2].trim(), vendor: e[1] ? e[1].trim() : null, rules: M() };
        }
        function L() {
            var e = i(/^@(import|charset|namespace)\s*([^;]+);/);
            if (e) return { type: e[1], name: e[2].trim() };
        }
        function O() {
            if ((d(), "@" === t[0])) {
                var e = L() || E() || x() || g() || S() || k() || A() || C() || b() || w();
                if (e && !a.preserveStatic) {
                    var n = !1;
                    if (e.declarations)
                        n = e.declarations.some(function (e) {
                            return /var\(/.test(e.value);
                        });
                    else
                        n = (e.keyframes || e.rules || []).some(function (e) {
                            return (e.declarations || []).some(function (e) {
                                return /var\(/.test(e.value);
                            });
                        });
                    return n ? e : {};
                }
                return e;
            }
        }
        function _() {
            if (!a.preserveStatic) {
                var e = o("{", "}", t);
                if (e) {
                    var n = /:(?:root|host)(?![.:#(])/.test(e.pre) && /--\S*\s*:/.test(e.body),
                        r = /var\(/.test(e.body);
                    if (!n && !r) return (t = t.slice(e.end + 1)), {};
                }
            }
            var s = p() || [],
                i = a.preserveStatic
                    ? h()
                    : h().filter(function (e) {
                          var t =
                                  s.some(function (e) {
                                      return /:(?:root|host)(?![.:#(])/.test(e);
                                  }) && /^--\S/.test(e.property),
                              n = /var\(/.test(e.value);
                          return t || n;
                      });
            return s.length || c("selector missing"), { type: "rule", selectors: s, declarations: i };
        }
        function M(e) {
            if (!e && !u()) return c("missing '{'");
            for (var n, r = m(); t.length && (e || "}" !== t[0]) && (n = O() || _()); ) n.type && r.push(n), (r = r.concat(m()));
            return e || l() ? r : c("missing '}'");
        }
        return { type: "stylesheet", stylesheet: { rules: M(!0), errors: s } };
    }
    function u(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = { parseHost: !1, store: {}, onWarning: function () {} },
            o = e({}, r, n),
            a = new RegExp(":".concat(o.parseHost ? "host" : "root", "$"));
        return (
            "string" == typeof t && (t = i(t, o)),
            t.stylesheet.rules.forEach(function (e) {
                "rule" === e.type &&
                    e.selectors.some(function (e) {
                        return a.test(e);
                    }) &&
                    e.declarations.forEach(function (e, t) {
                        var n = e.property,
                            r = e.value;
                        n && 0 === n.indexOf("--") && (o.store[n] = r);
                    });
            }),
            o.store
        );
    }
    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = {
                charset: function (e) {
                    return "@charset " + e.name + ";";
                },
                comment: function (e) {
                    return 0 === e.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + e.comment + "*/" : "";
                },
                "custom-media": function (e) {
                    return "@custom-media " + e.name + " " + e.media + ";";
                },
                declaration: function (e) {
                    return e.property + ":" + e.value + ";";
                },
                document: function (e) {
                    return "@" + (e.vendor || "") + "document " + e.document + "{" + o(e.rules) + "}";
                },
                "font-face": function (e) {
                    return "@font-face{" + o(e.declarations) + "}";
                },
                host: function (e) {
                    return "@host{" + o(e.rules) + "}";
                },
                import: function (e) {
                    return "@import " + e.name + ";";
                },
                keyframe: function (e) {
                    return e.values.join(",") + "{" + o(e.declarations) + "}";
                },
                keyframes: function (e) {
                    return "@" + (e.vendor || "") + "keyframes " + e.name + "{" + o(e.keyframes) + "}";
                },
                media: function (e) {
                    return "@media " + e.media + "{" + o(e.rules) + "}";
                },
                namespace: function (e) {
                    return "@namespace " + e.name + ";";
                },
                page: function (e) {
                    return "@page " + (e.selectors.length ? e.selectors.join(", ") : "") + "{" + o(e.declarations) + "}";
                },
                "page-margin-box": function (e) {
                    return "@" + e.name + "{" + o(e.declarations) + "}";
                },
                rule: function (e) {
                    var t = e.declarations;
                    if (t.length) return e.selectors.join(",") + "{" + o(t) + "}";
                },
                supports: function (e) {
                    return "@supports " + e.supports + "{" + o(e.rules) + "}";
                },
            };
        function o(e) {
            for (var o = "", a = 0; a < e.length; a++) {
                var s = e[a];
                n && n(s);
                var c = r[s.type](s);
                c && ((o += c), c.length && s.selectors && (o += t));
            }
            return o;
        }
        return o(e.stylesheet.rules);
    }
    function d(e, t) {
        e.rules.forEach(function (n) {
            n.rules
                ? d(n, t)
                : n.keyframes
                ? n.keyframes.forEach(function (e) {
                      "keyframe" === e.type && t(e.declarations, n);
                  })
                : n.declarations && t(n.declarations, e);
        });
    }
    a.range = c;
    function f(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = { preserveStatic: !0, preserveVars: !1, variables: {}, onWarning: function () {} },
            o = e({}, r, n);
        return (
            "string" == typeof t && (t = i(t, o)),
            d(t.stylesheet, function (e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        a = r.type,
                        s = r.property,
                        c = r.value;
                    if ("declaration" === a)
                        if (o.preserveVars || !s || 0 !== s.indexOf("--")) {
                            if (-1 !== c.indexOf("var(")) {
                                var i = p(c, o);
                                i !== r.value &&
                                    ((i = m(i)),
                                    o.preserveVars ? (e.splice(n, 0, { type: a, property: s, value: i }), n++) : (r.value = i));
                            }
                        } else e.splice(n, 1), n--;
                }
            }),
            l(t)
        );
    }
    function m(e) {
        return (
            (e.match(/calc\(([^)]+)\)/g) || []).forEach(function (t) {
                var n = "calc".concat(t.split("calc").join(""));
                e = e.replace(t, n);
            }),
            e
        );
    }
    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (-1 === e.indexOf("var(")) return e;
        var r = o("(", ")", e);
        function a(e) {
            var r = e.split(",")[0].replace(/[\s\n\t]/g, ""),
                o = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
                a = Object.prototype.hasOwnProperty.call(t.variables, r) ? String(t.variables[r]) : void 0,
                s = a || (o ? String(o) : void 0),
                c = n || e;
            return (
                a || t.onWarning('variable "'.concat(r, '" is undefined')),
                s && "undefined" !== s && s.length > 0 ? p(s, t, c) : "var(".concat(c, ")")
            );
        }
        if (r) {
            if ("var" === r.pre.slice(-3)) {
                var s = 0 === r.body.trim().length;
                return s ? (t.onWarning("var() must contain a non-whitespace string"), e) : r.pre.slice(0, -3) + a(r.body) + p(r.post, t);
            }
            return r.pre + "(".concat(p(r.body, t), ")") + p(r.post, t);
        }
        return -1 !== e.indexOf("var(") && t.onWarning('missing closing ")" in the value "'.concat(e, '"')), e;
    }
    var v = "undefined" != typeof window,
        h = v && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
        y = { group: 0, job: 0 },
        g = {
            rootElement: v ? document : null,
            shadowDOM: !1,
            include: "style,link[rel=stylesheet]",
            exclude: "",
            variables: {},
            onlyLegacy: !0,
            preserveStatic: !0,
            preserveVars: !1,
            silent: !1,
            updateDOM: !0,
            updateURLs: !0,
            watch: null,
            onBeforeSend: function () {},
            onError: function () {},
            onWarning: function () {},
            onSuccess: function () {},
            onComplete: function () {},
            onFinally: function () {},
        },
        b = {
            cssComments: /\/\*[\s\S]+?\*\//g,
            cssKeyframes: /@(?:-\w*-)?keyframes/,
            cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
            cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
            cssVarDeclRules: /(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^}]*})/g,
            cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
            cssVarFunc: /var\(\s*--[\w-]/,
            cssVars: /(?:(?::(?:root|host)(?![.:#(])[\s,]*[^{]*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/,
        },
        w = { dom: {}, job: {}, user: {} },
        E = !1,
        S = null,
        C = 0,
        x = null,
        A = !1;
    function k() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = "cssVars(): ",
            o = e({}, g, t);
        function a(e, t, n, a) {
            !o.silent && window.console && console.error("".concat(r).concat(e, "\n"), t), o.onError(e, t, n, a);
        }
        function s(e) {
            !o.silent && window.console && console.warn("".concat(r).concat(e)), o.onWarning(e);
        }
        function c(e) {
            o.onFinally(Boolean(e), h, N() - o.__benchmark);
        }
        if (v) {
            if (o.watch) return (o.watch = g.watch), L(o), void k(o);
            if ((!1 === o.watch && S && (S.disconnect(), (S = null)), !o.__benchmark)) {
                if (E === o.rootElement) return void O(t);
                var d = [].slice.call(o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])'));
                if (
                    ((o.__benchmark = N()),
                    (o.exclude = [
                        S ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]',
                        "link[disabled]:not([data-cssvars])",
                        o.exclude,
                    ]
                        .filter(function (e) {
                            return e;
                        })
                        .join(",")),
                    (o.variables = j(o.variables)),
                    d.forEach(function (e) {
                        var t = "style" === e.nodeName.toLowerCase() && e.__cssVars.text,
                            n = t && e.textContent !== e.__cssVars.text;
                        t && n && (e.sheet && (e.sheet.disabled = !1), e.setAttribute("data-cssvars", ""));
                    }),
                    !S)
                ) {
                    var m = [].slice.call(o.rootElement.querySelectorAll('[data-cssvars="out"]'));
                    m.forEach(function (e) {
                        var t = e.getAttribute("data-cssvars-group");
                        (t ? o.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(t, '"]')) : null) ||
                            e.parentNode.removeChild(e);
                    }),
                        C && d.length < C && ((C = d.length), (w.dom = {}));
                }
            }
            if ("loading" !== document.readyState)
                if (h && o.onlyLegacy) {
                    var p = !1;
                    if (o.updateDOM) {
                        var x = o.rootElement.host || (o.rootElement === document ? document.documentElement : o.rootElement);
                        Object.keys(o.variables).forEach(function (e) {
                            var t = o.variables[e];
                            (p = p || t !== getComputedStyle(x).getPropertyValue(e)), x.style.setProperty(e, t);
                        });
                    }
                    c(p);
                } else
                    !A && (o.shadowDOM || o.rootElement.shadowRoot || o.rootElement.host)
                        ? n({
                              rootElement: g.rootElement,
                              include: g.include,
                              exclude: o.exclude,
                              skipDisabled: !1,
                              onSuccess: function (e, t, n) {
                                  return (
                                      !((t.sheet || {}).disabled && !t.__cssVars) &&
                                      ((e = (
                                          (e = e.replace(b.cssComments, "").replace(b.cssMediaQueries, "")).match(b.cssVarDeclRules) || []
                                      ).join("")) ||
                                          !1)
                                  );
                              },
                              onComplete: function (e, t, n) {
                                  u(e, { store: w.dom, onWarning: s }), (A = !0), k(o);
                              },
                          })
                        : ((E = o.rootElement),
                          n({
                              rootElement: o.rootElement,
                              include: o.include,
                              exclude: o.exclude,
                              skipDisabled: !1,
                              onBeforeSend: o.onBeforeSend,
                              onError: function (e, t, n) {
                                  var r = e.responseURL || T(n, location.href),
                                      o = e.statusText
                                          ? "(".concat(e.statusText, ")")
                                          : "Unspecified Error" + (0 === e.status ? " (possibly CORS related)" : "");
                                  a("CSS XHR Error: ".concat(r, " ").concat(e.status, " ").concat(o), t, e, r);
                              },
                              onSuccess: function (e, t, n) {
                                  if ((t.sheet || {}).disabled && !t.__cssVars) return !1;
                                  var r = "link" === t.nodeName.toLowerCase(),
                                      a = "style" === t.nodeName.toLowerCase() && e !== t.textContent,
                                      s = o.onSuccess(e, t, n);
                                  return (
                                      (e = void 0 !== s && !1 === Boolean(s) ? "" : s || e), o.updateURLs && (r || a) && (e = M(e, n)), e
                                  );
                              },
                              onComplete: function (t, n) {
                                  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                      d = e({}, w.dom, w.user);
                                  if (
                                      ((w.job = {}),
                                      r.forEach(function (e, t) {
                                          var r = n[t];
                                          if (((e.__cssVars = e.__cssVars || {}), (e.__cssVars.text = r), b.cssVars.test(r)))
                                              try {
                                                  var c = i(r, { preserveStatic: o.preserveStatic, removeComments: !0 });
                                                  u(c, { parseHost: Boolean(o.rootElement.host), store: w.dom, onWarning: s }),
                                                      (e.__cssVars.tree = c);
                                              } catch (t) {
                                                  a(t.message, e);
                                              }
                                      }),
                                      e(w.job, w.dom),
                                      o.updateDOM
                                          ? (e(w.user, o.variables), e(w.job, w.user))
                                          : (e(w.job, w.user, o.variables), e(d, o.variables)),
                                      y.job > 0 &&
                                          Boolean(
                                              Object.keys(w.job).length > Object.keys(d).length ||
                                                  Boolean(
                                                      Object.keys(d).length &&
                                                          Object.keys(w.job).some(function (e) {
                                                              return w.job[e] !== d[e];
                                                          })
                                                  )
                                          ))
                                  )
                                      V(o.rootElement), k(o);
                                  else {
                                      var m = [],
                                          p = [],
                                          v = !1;
                                      if (
                                          (o.updateDOM && y.job++,
                                          r.forEach(function (t, r) {
                                              var c = !t.__cssVars.tree;
                                              if (t.__cssVars.tree)
                                                  try {
                                                      f(t.__cssVars.tree, e({}, o, { variables: w.job, onWarning: s }));
                                                      var i = l(t.__cssVars.tree);
                                                      if (o.updateDOM) {
                                                          var u = n[r],
                                                              d = b.cssVarFunc.test(u);
                                                          if (
                                                              (t.getAttribute("data-cssvars") || t.setAttribute("data-cssvars", "src"),
                                                              i.length && d)
                                                          ) {
                                                              var h = t.getAttribute("data-cssvars-group") || ++y.group,
                                                                  g = i.replace(/\s/g, ""),
                                                                  E =
                                                                      o.rootElement.querySelector(
                                                                          '[data-cssvars="out"][data-cssvars-group="'.concat(h, '"]')
                                                                      ) || document.createElement("style");
                                                              (v = v || b.cssKeyframes.test(i)),
                                                                  o.preserveStatic && t.sheet && (t.sheet.disabled = !0),
                                                                  E.hasAttribute("data-cssvars") || E.setAttribute("data-cssvars", "out"),
                                                                  g === t.textContent.replace(/\s/g, "")
                                                                      ? ((c = !0),
                                                                        E &&
                                                                            E.parentNode &&
                                                                            (t.removeAttribute("data-cssvars-group"),
                                                                            E.parentNode.removeChild(E)))
                                                                      : g !== E.textContent.replace(/\s/g, "") &&
                                                                        ([t, E].forEach(function (e) {
                                                                            e.setAttribute("data-cssvars-job", y.job),
                                                                                e.setAttribute("data-cssvars-group", h);
                                                                        }),
                                                                        (E.textContent = i),
                                                                        m.push(i),
                                                                        p.push(E),
                                                                        E.parentNode || t.parentNode.insertBefore(E, t.nextSibling));
                                                          }
                                                      } else t.textContent.replace(/\s/g, "") !== i && m.push(i);
                                                  } catch (e) {
                                                      a(e.message, t);
                                                  }
                                              c && t.setAttribute("data-cssvars", "skip"),
                                                  t.hasAttribute("data-cssvars-job") || t.setAttribute("data-cssvars-job", y.job);
                                          }),
                                          (C = o.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length),
                                          o.shadowDOM)
                                      )
                                          for (
                                              var h,
                                                  g = [].concat(o.rootElement).concat([].slice.call(o.rootElement.querySelectorAll("*"))),
                                                  S = 0;
                                              (h = g[S]);
                                              ++S
                                          )
                                              if (h.shadowRoot && h.shadowRoot.querySelector("style")) {
                                                  var x = e({}, o, { rootElement: h.shadowRoot });
                                                  k(x);
                                              }
                                      o.updateDOM && v && _(o.rootElement),
                                          (E = !1),
                                          o.onComplete(m.join(""), p, JSON.parse(JSON.stringify(w.job)), N() - o.__benchmark),
                                          c(p.length);
                                  }
                              },
                          }));
            else
                document.addEventListener("DOMContentLoaded", function e(n) {
                    k(t), document.removeEventListener("DOMContentLoaded", e);
                });
        }
    }
    function L(e) {
        function t(e) {
            var t = n(e) && e.hasAttribute("disabled"),
                r = (e.sheet || {}).disabled;
            return t || r;
        }
        function n(e) {
            return "link" === e.nodeName.toLowerCase() && -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet");
        }
        function r(e) {
            return "style" === e.nodeName.toLowerCase();
        }
        window.MutationObserver &&
            (S && (S.disconnect(), (S = null)),
            (S = new MutationObserver(function (o) {
                o.some(function (o) {
                    return (
                        (function (r) {
                            var o = !1;
                            if ("attributes" === r.type && n(r.target) && !t(r.target)) {
                                var a = "disabled" === r.attributeName,
                                    s = "href" === r.attributeName,
                                    c = "skip" === r.target.getAttribute("data-cssvars"),
                                    i = "src" === r.target.getAttribute("data-cssvars");
                                a
                                    ? (o = !c && !i)
                                    : s && (c ? r.target.setAttribute("data-cssvars", "") : i && V(e.rootElement, !0), (o = !0));
                            }
                            return o;
                        })(o) ||
                        (function (e) {
                            var t = !1;
                            if ("childList" === e.type) {
                                var n = r(e.target),
                                    o = "out" === e.target.getAttribute("data-cssvars");
                                t = n && !o;
                            }
                            return t;
                        })(o) ||
                        (function (e) {
                            var o = !1;
                            return (
                                "childList" === e.type &&
                                    (o = [].slice.call(e.addedNodes).some(function (e) {
                                        var o = 1 === e.nodeType && e.hasAttribute("data-cssvars"),
                                            a = r(e) && b.cssVars.test(e.textContent);
                                        return !o && (n(e) || a) && !t(e);
                                    })),
                                o
                            );
                        })(o) ||
                        (function (t) {
                            var n = !1;
                            return (
                                "childList" === t.type &&
                                    (n = [].slice.call(t.removedNodes).some(function (t) {
                                        var n = 1 === t.nodeType,
                                            r = n && "out" === t.getAttribute("data-cssvars"),
                                            o = n && "src" === t.getAttribute("data-cssvars"),
                                            a = o;
                                        if (o || r) {
                                            var s = t.getAttribute("data-cssvars-group"),
                                                c = e.rootElement.querySelector('[data-cssvars-group="'.concat(s, '"]'));
                                            o && V(e.rootElement, !0), c && c.parentNode.removeChild(c);
                                        }
                                        return a;
                                    })),
                                n
                            );
                        })(o)
                    );
                }) && k(e);
            })).observe(document.documentElement, { attributes: !0, attributeFilter: ["disabled", "href"], childList: !0, subtree: !0 }));
    }
    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
        clearTimeout(x),
            (x = setTimeout(function () {
                (e.__benchmark = null), k(e);
            }, t));
    }
    function _(e) {
        var t = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (e) {
            return getComputedStyle(document.body)[e];
        })[0];
        if (t) {
            for (var n = e.getElementsByTagName("*"), r = [], o = "__CSSVARSPONYFILL-KEYFRAMES__", a = 0, s = n.length; a < s; a++) {
                var c = n[a];
                "none" !== getComputedStyle(c)[t] && ((c.style[t] += o), r.push(c));
            }
            document.body.offsetHeight;
            for (var i = 0, u = r.length; i < u; i++) {
                var l = r[i].style;
                l[t] = l[t].replace(o, "");
            }
        }
    }
    function M(e, t) {
        return (
            (e.replace(b.cssComments, "").match(b.cssUrls) || []).forEach(function (n) {
                var r = n.replace(b.cssUrls, "$1"),
                    o = T(r, t);
                e = e.replace(n, n.replace(r, o));
            }),
            e
        );
    }
    function j() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = /^-{2}/;
        return Object.keys(e).reduce(function (n, r) {
            return (n[t.test(r) ? r : "--".concat(r.replace(/^-+/, ""))] = e[r]), n;
        }, {});
    }
    function T(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href,
            n = document.implementation.createHTMLDocument(""),
            r = n.createElement("base"),
            o = n.createElement("a");
        return n.head.appendChild(r), n.body.appendChild(o), (r.href = t), (o.href = e), o.href;
    }
    function N() {
        return v && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
    }
    function V(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = [].slice.call(e.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
        n.forEach(function (e) {
            return e.setAttribute("data-cssvars", "");
        }),
            t && (w.dom = {});
    }
    function q(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = 3 === e.childNodes[0].nodeType,
            o = e.querySelector("ul");
        if (r && o) {
            var a = Array.apply(null, e.children).some(function (e) {
                return e.tabIndex > -1;
            }).length;
            if (!a) {
                var s = document.createElement("span");
                for (null !== n && s.setAttribute("tabindex", n), e.insertBefore(s, o); e.childNodes[0] !== s; )
                    s.appendChild(e.childNodes[0]);
            }
        }
    }
    k.reset = function () {
        for (var e in ((y.job = 0), (y.group = 0), (E = !1), S && (S.disconnect(), (S = null)), (C = 0), (x = null), (A = !1), w))
            w[e] = {};
    };
    function R(e, t) {
        return Number("0." + ((window.Docsify || {}).version || "0").replace(/\./g, "")) < Number("0." + e.replace(/\./g, "")) ? t : null;
    }
    if (window) {
        var D = { onlyLegacy: !/Edge\/1[5678]/i.test(navigator.userAgent), silent: !0 };
        k(D),
            document.body.setAttribute("data-platform", navigator.platform),
            (window.$docsify = window.$docsify || {}),
            (window.$docsify.plugins = []
                .concat(
                    [
                        function (e, t) {
                            e.init(function () {
                                !1 !== ((window.$docsify || {}).themeable || {}).readyTransition &&
                                    (document.body.classList.add("ready-transition"),
                                    setTimeout(function () {
                                        document.body.classList.add("ready-spinner");
                                    }, 1),
                                    e.ready(function () {
                                        var e = document.querySelector("main");
                                        e.addEventListener("transitionend", function t(n) {
                                            document.body.classList.remove("ready-transition"),
                                                document.body.classList.remove("ready-spinner"),
                                                e.removeEventListener("transitionend", t);
                                        });
                                    }));
                            });
                        },
                        function (e, t) {
                            e.doneEach(function () {
                                var e = document.querySelector(".cover h1 > a");
                                e && (e.parentNode.innerHTML = e.innerHTML);
                            });
                        },
                        function (e, t) {
                            e.doneEach(function () {
                                var e = Array.apply(null, document.querySelectorAll("body > nav.app-nav > ul > li")),
                                    t = Array.apply(null, document.querySelectorAll(".sidebar > nav > ul > li"));
                                e.forEach(function (e) {
                                    var t = "focus-within";
                                    q(e, "span", 0),
                                        e.addEventListener("focusin", function (n) {
                                            e.contains(document.activeElement) && e.classList.add(t);
                                        }),
                                        e.addEventListener("focusout", function (n) {
                                            e.contains(document.activeElement) || e.classList.remove(t);
                                        });
                                }),
                                    t.forEach(function (e) {
                                        q(e, "span");
                                    });
                            });
                        },
                        function (e, t) {
                            e.doneEach(function () {
                                Array.apply(null, document.querySelectorAll("pre[data-lang]")).forEach(function (e) {
                                    var t = e.querySelector("code"),
                                        n = "language-".concat(e.getAttribute("data-lang"));
                                    e.classList.add(n), t.classList.add(n);
                                });
                            });
                        },
                        function (e, t) {
                            e.mounted(function () {
                                var e = document.querySelector(".content"),
                                    t = setInterval(function () {
                                        e.textContent.length && (document.body.classList.add("ready-fix"), clearInterval(t));
                                    }, 250);
                            }),
                                e.ready(function () {
                                    document.body.classList.add("ready-fix");
                                });
                        },
                        function (e, t) {
                            e.init(function () {
                                if (!1 !== ((window.$docsify || {}).themeable || {}).responsiveTables) {
                                    var e = (window.$docsify.markdown = window.$docsify.markdown || {}),
                                        t = (e.renderer = e.renderer || {});
                                    (e.smartypants = e.smartypants || !0),
                                        (t.table =
                                            t.table ||
                                            function (e, t) {
                                                var n =
                                                    '\n                    <div class="table-wrapper">\n                        <table>\n                            <thead>'
                                                        .concat(e, "</thead>\n                            <tbody>")
                                                        .concat(
                                                            t,
                                                            "</tbody>\n                        </table>\n                    </div>"
                                                        );
                                                try {
                                                    var r = document.createElement("div"),
                                                        o = document.head.appendChild(document.createElement("style")).sheet,
                                                        a = "_" + Math.random().toString(36).substr(2, 9);
                                                    r.innerHTML = n;
                                                    var s = r.querySelector("table");
                                                    Array.apply(null, s.getElementsByTagName("th"))
                                                        .map(function (e) {
                                                            return e.innerHTML.replace("&nbsp;", " ");
                                                        })
                                                        .forEach(function (e, t) {
                                                            var n = "#"
                                                                .concat(a, " td:nth-child(")
                                                                .concat(t + 1, ')::before{content:"')
                                                                .concat(e, '";}');
                                                            o.insertRule(n, o.cssRules.length);
                                                        }),
                                                        (s.id = a),
                                                        (n = r.innerHTML);
                                                } catch (e) {
                                                    console.log("Failed to render responsive table: " + e);
                                                }
                                                return n;
                                            });
                                }
                            });
                        },
                    ],
                    window.$docsify.plugins || [],
                    [
                        function (e, t) {
                            e.ready(function () {
                                var e = document.querySelector(".sidebar .search .clear-button");
                                if (e) {
                                    var t = document.createElement("button");
                                    (t.className = "clear-button"),
                                        t.setAttribute("aria-label", "Clear search"),
                                        (t.innerHTML =
                                            '\n                <svg width="16" height="16" viewbox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n                    <circle cx="8" cy="8" r="8" fill="black"></circle>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,4.5,11.5,11.5" vector-effect="non-scaling-stroke"></path>\n                    <path stroke="white" stroke-width="1.5" d="M4.5,11.5,11.5,4.5" vector-effect="non-scaling-stroke"></path>\n                </svg>\n            '),
                                        e.parentNode.replaceChild(t, e);
                                }
                            });
                        },
                        R("4.8.0", function (e, t) {
                            e.ready(function () {
                                var e = document.querySelector(".sidebar .search"),
                                    t = document.querySelector(".sidebar .search input[type=search]"),
                                    n = document.querySelector(".sidebar .search .clear-button");
                                e &&
                                    e.addEventListener("click", function (r) {
                                        (r.target === n || n.contains(r.target)) && (e.classList.remove("show"), t.focus());
                                    }),
                                    t &&
                                        t.addEventListener("", function (n) {
                                            t.value.length ? e.classList.add("show") : e.classList.remove("show");
                                        });
                            });
                        }),
                        R("4.8.0", function (e, t) {
                            var n =
                                Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
                            e.doneEach(function () {
                                var e = "medium-zoom-image";
                                Array.apply(null, document.querySelectorAll(".".concat(e))).forEach(function (t) {
                                    var r = n.call(t, "a img"),
                                        o = n.call(t, ".content img");
                                    if (r || !o) {
                                        var a = t.cloneNode(!0);
                                        t.parentNode.replaceChild(a, t), a.classList.remove(e);
                                    }
                                });
                            });
                        }),
                    ]
                )
                .filter(function (e) {
                    return null !== e;
                })),
            (window.$docsify.search = window.$docsify.search || {}),
            (window.$docsify.search.hideOtherSidebarContent = !0),
            (window.$docsify.themeable = window.$docsify.themeable || {}),
            (window.$docsify.themeable.version = "0.8.6"),
            (window.$docsify.themeable.util = {
                cssVars: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D;
                    k(e);
                },
            });
    }
})();
//# sourceMappingURL=docsify-themeable.min.js.map

/*!
 * docsify-tabs
 * v1.5.2
 * https://jhildenbiddle.github.io/docsify-tabs/
 * (c) 2018-2021 John Hildenbiddle
 * MIT license
 */
!(function () {
    "use strict";
    !(function (t, o) {
        void 0 === o && (o = {});
        var a = o.insertAt;
        if (t && "undefined" != typeof document) {
            var e = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
            (c.type = "text/css"),
                "top" === a && e.firstChild ? e.insertBefore(c, e.firstChild) : e.appendChild(c),
                c.styleSheet ? (c.styleSheet.cssText = t) : c.appendChild(document.createTextNode(t));
        }
    })(
        ':root{--docsifytabs-border-color:#ededed;--docsifytabs-border-px:1px;--docsifytabs-border-radius-px: ;--docsifytabs-margin:1.5em 0;--docsifytabs-tab-background:#f8f8f8;--docsifytabs-tab-background--active:var(--docsifytabs-content-background);--docsifytabs-tab-color:#999;--docsifytabs-tab-color--active:inherit;--docsifytabs-tab-highlight-px:3px;--docsifytabs-tab-highlight-color:var(--theme-color,currentColor);--docsifytabs-tab-padding:0.6em 1em;--docsifytabs-content-background:inherit;--docsifytabs-content-padding:1.5rem}.docsify-tabs:before,.docsify-tabs__tab{z-index:1}.docsify-tabs__tab--active,.docsify-tabs__tab:focus{z-index:2}.docsify-tabs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.docsify-tabs:before{-ms-flex-order:0;content:"";-ms-flex:1 1;flex:1 1;order:0}.docsify-tabs__tab{-ms-flex-order:-1;appearance:none;font-size:inherit;margin:0;order:-1;position:relative}.docsify-tabs__content{height:0;overflow:hidden;position:absolute;visibility:hidden;width:100%}.docsify-tabs__content :first-child{margin-top:0}.docsify-tabs__content :first-child~:last-child,.docsify-tabs__content :last-child{margin-bottom:0}.docsify-tabs__tab--active+.docsify-tabs__content{height:auto;overflow:auto;position:relative;visibility:visible}[class*=docsify-tabs--]{margin:1.5em 0;margin:var(--docsifytabs-margin)}[class*=docsify-tabs--] .docsify-tabs__tab{background:#f8f8f8;background:var(--docsifytabs-tab-background);color:#999;color:var(--docsifytabs-tab-color);padding:.6em 1em;padding:var(--docsifytabs-tab-padding)}[class*=docsify-tabs--] .docsify-tabs__tab--active{background:inherit;background:var(--docsifytabs-tab-background--active);color:inherit;color:var(--docsifytabs-tab-color--active)}[class*=docsify-tabs--] .docsify-tabs__content{background:inherit;background:var(--docsifytabs-content-background);padding:1.5rem;padding:var(--docsifytabs-content-padding)}.docsify-tabs--classic .docsify-tabs__content,.docsify-tabs--classic .docsify-tabs__tab,.docsify-tabs--classic:before{border-color:#ededed;border-width:1px;border:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}.docsify-tabs--classic:before{border-left-width:0;border-right-width:0;border-top-width:0;margin-right:1px;margin-right:var(--docsifytabs-border-px)}.docsify-tabs--classic .docsify-tabs__tab:first-of-type{border-top-left-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab:last-of-type{border-top-right-radius:var(--docsifytabs-border-radius-px)}.docsify-tabs--classic .docsify-tabs__tab~.docsify-tabs__tab{margin-left:-1px;margin-left:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--classic .docsify-tabs__tab--active{border-bottom-width:0;box-shadow:inset 0 3px 0 0 var(--theme-color,currentColor);box-shadow:inset 0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--classic .docsify-tabs__content{border-radius:0;border-radius:0 var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px) var(--docsifytabs-border-radius-px);border-top:0;margin-top:-1px;margin-top:calc(0px - var(--docsifytabs-border-px))}.docsify-tabs--material .docsify-tabs__tab{background:transparent;border:0;margin-bottom:2px;margin-bottom:calc(var(--docsifytabs-tab-highlight-px) - var(--docsifytabs-border-px))}.docsify-tabs--material .docsify-tabs__tab--active{background:transparent;box-shadow:0 3px 0 0 var(--theme-color,currentColor);box-shadow:0 var(--docsifytabs-tab-highlight-px) 0 0 var(--docsifytabs-tab-highlight-color)}.docsify-tabs--material .docsify-tabs__content{border-color:#ededed;border-width:1px 0;border-bottom:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color);border-left:0 solid var(--docsifytabs-border-color);border-right:0 solid var(--docsifytabs-border-color);border-top:var(--docsifytabs-border-px) solid var(--docsifytabs-border-color)}',
        { insertAt: "top" }
    );
    var t = "tabs:replace",
        o = {
            tabsContainer: "content",
            tabBlock: "docsify-tabs",
            tabButton: "docsify-tabs__tab",
            tabButtonActive: "docsify-tabs__tab--active",
            tabContent: "docsify-tabs__content",
        },
        a = {
            codeMarkup: /(```[\s\S]*?```)/gm,
            commentReplaceMarkup: new RegExp("\x3c!-- ".concat(t, " (.*) --\x3e")),
            tabBlockMarkup: /[\r\n]*(\s*)(<!-+\s+tabs:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+tabs:\s*?end\s+-+>)/m,
            tabCommentMarkup: /[\r\n]*(\s*)<!-+\s+tab:\s*(.*)\s+-+>[\r\n]+([\s\S]*?)[\r\n]*\s*(?=<!-+\s+tabs?:(?!replace))/m,
            tabHeadingMarkup:
                /[\r\n]*(\s*)#{1,6}\s*[*_]{2}\s*(.*[^\s])\s*[*_]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[*_]{2}|<!-+\s+tabs:\s*?end\s+-+>)/m,
        },
        e = { persist: !0, sync: !0, theme: "classic", tabComments: !0, tabHeadings: !0 };
    function c(t, o) {
        if (Element.prototype.closest) return t.closest(o);
        for (; t; ) {
            if (r(t, o)) return t;
            t = t.parentNode || null;
        }
        return t;
    }
    function r(t, o) {
        return (Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector).call(t, o);
    }
    function s(t) {
        var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = c(t, ".".concat(o.tabButton));
        if (r) {
            var n = r.getAttribute("data-tab"),
                i = document.querySelector(".".concat(o.tabsContainer)),
                d = r.parentNode,
                b = Array.apply(null, d.querySelectorAll(".".concat(o.tabButton))),
                f = d.offsetTop;
            if (
                (b.forEach(function (t) {
                    return t.classList.remove(o.tabButtonActive);
                }),
                r.classList.add(o.tabButtonActive),
                !a)
            ) {
                if (e.persist) {
                    var l = i ? Array.apply(null, i.querySelectorAll(".".concat(o.tabBlock))) : [],
                        u = l.indexOf(d),
                        y = JSON.parse(sessionStorage.getItem(window.location.href)) || {};
                    (y[u] = n), sessionStorage.setItem(window.location.href, JSON.stringify(y));
                }
                if (e.sync) {
                    var p = i ? Array.apply(null, i.querySelectorAll(".".concat(o.tabButton, '[data-tab="').concat(n, '"]'))) : [],
                        m = JSON.parse(sessionStorage.getItem("*")) || [];
                    p.forEach(function (t) {
                        s(t, !0);
                    }),
                        window.scrollBy(0, 0 - (f - d.offsetTop)),
                        m.indexOf(n) > 0 && m.splice(m.indexOf(n), 1),
                        0 !== m.indexOf(n) && (m.unshift(n), sessionStorage.setItem("*", JSON.stringify(m)));
                }
            }
        }
    }
    function n() {
        var t = decodeURIComponent((window.location.hash.match(/(?:id=)([^&]+)/) || [])[1]),
            a = t && ".".concat(o.tabBlock, " #").concat(t);
        if (t && document.querySelector(a)) {
            var e,
                c = document.querySelector("#".concat(t));
            if (c.closest) e = c.closest(".".concat(o.tabContent));
            else for (e = c.parentNode; e !== document.body && !e.classList.contains("".concat(o.tabContent)); ) e = e.parentNode;
            s(e.previousElementSibling);
        }
    }
    window &&
        ((window.$docsify = window.$docsify || {}),
        (window.$docsify.tabs = window.$docsify.tabs || {}),
        Object.keys(window.$docsify.tabs).forEach(function (t) {
            Object.prototype.hasOwnProperty.call(e, t) && (e[t] = window.$docsify.tabs[t]);
        }),
        (window.$docsify.tabs.version = "1.5.2"),
        (e.tabComments || e.tabHeadings) &&
            (window.$docsify.plugins = [].concat(function (c, r) {
                var i = !1;
                c.beforeEach(function (c) {
                    return (
                        (i = a.tabBlockMarkup.test(c)) &&
                            (c = (function (c, r) {
                                for (
                                    var s,
                                        n,
                                        i = c.match(a.codeMarkup) || [],
                                        d = i.map(function (o, a) {
                                            var e = "\x3c!-- ".concat(t, " CODEBLOCK").concat(a, " --\x3e");
                                            return (
                                                (c = c.replace(o, function () {
                                                    return e;
                                                })),
                                                e
                                            );
                                        }),
                                        b = e.theme ? "".concat(o.tabBlock, "--").concat(e.theme) : "",
                                        f = document.createElement("div"),
                                        l = 1,
                                        u = function () {
                                            var i = s[0],
                                                d = "",
                                                u = "",
                                                y = e.tabComments && a.tabCommentMarkup.test(i),
                                                p = e.tabHeadings && a.tabHeadingMarkup.test(i),
                                                m = s[1],
                                                h = s[2],
                                                g = s[4];
                                            if (y || p) {
                                                (d = "\x3c!-- ".concat(t, ' <div class="').concat([o.tabBlock, b].join(" "), '"> --\x3e')),
                                                    (u = "\n".concat(m, "\x3c!-- ").concat(t, " </div> --\x3e"));
                                                for (
                                                    var v = function () {
                                                        f.innerHTML = n[2].trim()
                                                            ? r.compiler.compile(n[2]).replace(/<\/?p>/g, "")
                                                            : "Tab ".concat(l);
                                                        var a = f.innerHTML,
                                                            e = (n[3] || "").trim(),
                                                            c = (
                                                                f.textContent ||
                                                                f.firstChild.getAttribute("alt") ||
                                                                f.firstChild.getAttribute("src")
                                                            )
                                                                .trim()
                                                                .toLowerCase();
                                                        (i = i.replace(n[0], function () {
                                                            return [
                                                                "\n"
                                                                    .concat(m, "\x3c!-- ")
                                                                    .concat(t, ' <button class="')
                                                                    .concat(o.tabButton, '" data-tab="')
                                                                    .concat(c, '">')
                                                                    .concat(a, "</button> --\x3e"),
                                                                "\n"
                                                                    .concat(m, "\x3c!-- ")
                                                                    .concat(t, ' <div class="')
                                                                    .concat(o.tabContent, '" data-tab-content="')
                                                                    .concat(c, '"> --\x3e'),
                                                                "\n\n".concat(m).concat(e),
                                                                "\n\n".concat(m, "\x3c!-- ").concat(t, " </div> --\x3e"),
                                                            ].join("");
                                                        })),
                                                            l++;
                                                    };
                                                    null !==
                                                    (n =
                                                        (e.tabComments ? a.tabCommentMarkup.exec(i) : null) ||
                                                        (e.tabHeadings ? a.tabHeadingMarkup.exec(i) : null));

                                                )
                                                    v();
                                            }
                                            (i = (i = i.replace(h, function () {
                                                return d;
                                            })).replace(g, function () {
                                                return u;
                                            })),
                                                (c = c.replace(s[0], function () {
                                                    return i;
                                                }));
                                        };
                                    null !== (s = a.tabBlockMarkup.exec(c));

                                )
                                    u();
                                return (
                                    d.forEach(function (t, o) {
                                        c = c.replace(t, function () {
                                            return i[o];
                                        });
                                    }),
                                    c
                                );
                            })(c, r)),
                        c
                    );
                }),
                    c.afterEach(function (t, o) {
                        i &&
                            (t = (function (t) {
                                for (
                                    var o,
                                        e = function () {
                                            var a = o[0],
                                                e = o[1] || "";
                                            t = t.replace(a, function () {
                                                return e;
                                            });
                                        };
                                    null !== (o = a.commentReplaceMarkup.exec(t));

                                )
                                    e();
                                return t;
                            })(t)),
                            o(t);
                    }),
                    c.doneEach(function () {
                        var t, a, c, r;
                        i &&
                            ((a = (t = document.querySelector(".".concat(o.tabsContainer)))
                                ? Array.apply(null, t.querySelectorAll(".".concat(o.tabBlock)))
                                : []),
                            (c = JSON.parse(sessionStorage.getItem(window.location.href)) || {}),
                            (r = JSON.parse(sessionStorage.getItem("*")) || []),
                            n(),
                            a.forEach(function (t, a) {
                                var s = t.querySelector(".".concat(o.tabButtonActive));
                                s ||
                                    (e.sync &&
                                        r.length &&
                                        (s = r
                                            .map(function (a) {
                                                return t.querySelector(".".concat(o.tabButton, '[data-tab="').concat(a, '"]'));
                                            })
                                            .filter(function (t) {
                                                return t;
                                            })[0]),
                                    !s && e.persist && (s = t.querySelector(".".concat(o.tabButton, '[data-tab="').concat(c[a], '"]'))),
                                    (s = s || t.querySelector(".".concat(o.tabButton))) && s.classList.add(o.tabButtonActive));
                            }));
                    }),
                    c.mounted(function () {
                        var t = document.querySelector(".".concat(o.tabsContainer));
                        t &&
                            t.addEventListener("click", function (t) {
                                s(t.target);
                            }),
                            window.addEventListener("hashchange", n, !1);
                    });
            }, window.$docsify.plugins || [])));
})();
//# sourceMappingURL=docsify-tabs.min.js.map

/*!
 * docsify-copy-code
 * v2.1.1
 * https://github.com/jperasmus/docsify-copy-code
 * (c) 2017-2020 JP Erasmus <jperasmus11@gmail.com>
 * MIT license
 */
!(function () {
    "use strict";
    function s(o) {
        return (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (o) {
                      return typeof o;
                  }
                : function (o) {
                      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
                  })(o);
    }
    !(function (o, e) {
        void 0 === e && (e = {});
        var t = e.insertAt;
        if (o && "undefined" != typeof document) {
            var n = document.head || document.getElementsByTagName("head")[0],
                c = document.createElement("style");
            (c.type = "text/css"),
                "top" === t && n.firstChild ? n.insertBefore(c, n.firstChild) : n.appendChild(c),
                c.styleSheet ? (c.styleSheet.cssText = o) : c.appendChild(document.createTextNode(o));
        }
    })(
        ".docsify-copy-code-button,.docsify-copy-code-button span{cursor:pointer;transition:all .25s ease}.docsify-copy-code-button{position:absolute;z-index:1;top:0;right:0;overflow:visible;padding:.65em .8em;border:0;border-radius:0;outline:0;font-size:1em;background:grey;background:var(--theme-color,grey);color:#fff;opacity:0}.docsify-copy-code-button span{border-radius:3px;background:inherit;pointer-events:none}.docsify-copy-code-button .error,.docsify-copy-code-button .success{position:absolute;z-index:-100;top:50%;right:0;padding:.5em .65em;font-size:.825em;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.docsify-copy-code-button.error .error,.docsify-copy-code-button.success .success{right:100%;opacity:1;-webkit-transform:translate(-115%,-50%);transform:translate(-115%,-50%)}.docsify-copy-code-button:focus,pre:hover .docsify-copy-code-button{opacity:1}"
    ),
        document.querySelector('link[href*="docsify-copy-code"]') &&
            console.warn("[Deprecation] Link to external docsify-copy-code stylesheet is no longer necessary."),
        (window.DocsifyCopyCodePlugin = {
            init: function () {
                return function (o, e) {
                    o.ready(function () {
                        console.warn(
                            "[Deprecation] Manually initializing docsify-copy-code using window.DocsifyCopyCodePlugin.init() is no longer necessary."
                        );
                    });
                };
            },
        }),
        (window.$docsify = window.$docsify || {}),
        (window.$docsify.plugins = [
            function (o, r) {
                o.doneEach(function () {
                    var o = Array.apply(null, document.querySelectorAll("pre[data-lang]")),
                        c = { buttonText: "Copy to clipboard", errorText: "Error", successText: "Copied" };
                    r.config.copyCode &&
                        Object.keys(c).forEach(function (t) {
                            var n = r.config.copyCode[t];
                            "string" == typeof n
                                ? (c[t] = n)
                                : "object" === s(n) &&
                                  Object.keys(n).some(function (o) {
                                      var e = -1 < location.href.indexOf(o);
                                      return (c[t] = e ? n[o] : c[t]), e;
                                  });
                        });
                    var e = [
                        '<button class="docsify-copy-code-button">',
                        '<span class="label">'.concat(c.buttonText, "</span>"),
                        '<span class="error">'.concat(c.errorText, "</span>"),
                        '<span class="success">'.concat(c.successText, "</span>"),
                        "</button>",
                    ].join("");
                    o.forEach(function (o) {
                        o.insertAdjacentHTML("beforeend", e);
                    });
                }),
                    o.mounted(function () {
                        document.querySelector(".content").addEventListener("click", function (o) {
                            if (o.target.classList.contains("docsify-copy-code-button")) {
                                var e = "BUTTON" === o.target.tagName ? o.target : o.target.parentNode,
                                    t = document.createRange(),
                                    n = e.parentNode.querySelector("code"),
                                    c = window.getSelection();
                                t.selectNode(n), c.removeAllRanges(), c.addRange(t);
                                try {
                                    document.execCommand("copy") &&
                                        (e.classList.add("success"),
                                        setTimeout(function () {
                                            e.classList.remove("success");
                                        }, 1e3));
                                } catch (o) {
                                    console.error("docsify-copy-code: ".concat(o)),
                                        e.classList.add("error"),
                                        setTimeout(function () {
                                            e.classList.remove("error");
                                        }, 1e3);
                                }
                                "function" == typeof (c = window.getSelection()).removeRange
                                    ? c.removeRange(t)
                                    : "function" == typeof c.removeAllRanges && c.removeAllRanges();
                            }
                        });
                    });
            },
        ].concat(window.$docsify.plugins || []));
})();
//# sourceMappingURL=docsify-copy-code.min.js.map

// Docsify Footer
parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        WDEB: [
            function (require, module, exports) {
                !(function (e, o, t) {
                    o.plugins = [].concat(function (o, t) {
                        var n = t.config,
                            c = n.loadFooter,
                            r = n.ext,
                            i = n.requestHeaders;
                        if (c) {
                            var f = !0 === c ? "_footer" + r : c;
                            o.mounted(function (o) {
                                var n = t.router.getFile(f),
                                    c = e.dom.getNode("article");
                                e.get(n, !1, i).then(function (o) {
                                    var n = t.compiler.compile(o),
                                        r = e.dom.create("footer", n);
                                    e.dom.appendTo(c, r),
                                        t._lifecycle.afterEach(function (e) {
                                            return e + n;
                                        });
                                });
                            });
                        }
                    }, o.plugins);
                })(Docsify, $docsify);
            },
            {},
        ],
    },
    {},
    ["WDEB"],
    null
);
//# sourceMappingURL=/docsify-footer.min.js.map

// Docsify Search
!(function () {
    var u = {},
        m = { EXPIRE_KEY: "docsify.search.expires", INDEX_KEY: "docsify.search.index" };
    function h(e) {
        return (
            e.text ||
                "table" !== e.type ||
                (e.cells.unshift(e.header),
                (e.text = e.cells
                    .map(function (e) {
                        return e.join(" | ");
                    })
                    .join(" |\n "))),
            e.text
        );
    }
    function f(e) {
        return e.text || "list" !== e.type || (e.text = e.raw), e.text;
    }
    function g(r, e, o, s) {
        void 0 === e && (e = "");
        var c,
            e = window.marked.lexer(e),
            d = window.Docsify.slugify,
            l = {},
            p = "";
        return (
            e.forEach(function (e, n) {
                if ("heading" === e.type && e.depth <= s) {
                    var t = (function (e) {
                            void 0 === e && (e = "");
                            var a = {};
                            return {
                                str: (e =
                                    e &&
                                    e
                                        .replace(/^'/, "")
                                        .replace(/'$/, "")
                                        .replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (e, n, t) {
                                            return -1 === n.indexOf(":") ? ((a[n] = (t && t.replace(/&quot;/g, "")) || !0), "") : e;
                                        })
                                        .trim()),
                                config: a,
                            };
                        })(e.text),
                        a = t.str,
                        t = t.config;
                    (c = t.id
                        ? o.toURL(r, { id: d(t.id) })
                        : o.toURL(r, {
                              id: d(
                                  ((t = e.text),
                                  (i = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }),
                                  String(t).replace(/[&<>"']/g, function (e) {
                                      return i[e];
                                  }))
                              ),
                          })),
                        a &&
                            (p = a
                                .replace(/<!-- {docsify-ignore} -->/, "")
                                .replace(/{docsify-ignore}/, "")
                                .replace(/<!-- {docsify-ignore-all} -->/, "")
                                .replace(/{docsify-ignore-all}/, "")
                                .trim()),
                        (l[c] = { slug: c, title: p, body: "" });
                } else {
                    if (
                        (0 === n &&
                            ((c = o.toURL(r)), (l[c] = { slug: c, title: "/" !== r ? r.slice(1) : "Home Page", body: e.text || "" })),
                        !c)
                    )
                        return;
                    l[c]
                        ? l[c].body
                            ? ((e.text = h(e)), (e.text = f(e)), (l[c].body += "\n" + (e.text || "")))
                            : ((e.text = h(e)), (e.text = f(e)), (l[c].body = l[c].body ? l[c].body + e.text : e.text))
                        : (l[c] = { slug: c, title: "", body: "" });
                }
                var i;
            }),
            d.clear(),
            l
        );
    }
    function p(e) {
        return e && e.normalize ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
    }
    function r(i, r) {
        var t,
            a,
            n,
            e,
            o = "auto" === i.paths,
            s = o
                ? ((t = r.router),
                  (a = []),
                  Docsify.dom.findAll(".sidebar-nav a:not(.section-link):not([data-nosearch])").forEach(function (e) {
                      var n = e.href,
                          e = e.getAttribute("href"),
                          n = t.parse(n).path;
                      n && -1 === a.indexOf(n) && !Docsify.util.isAbsolutePath(e) && a.push(n);
                  }),
                  a)
                : i.paths,
            c = "";
        s.length && o && i.pathNamespaces
            ? ((n = s[0]),
              Array.isArray(i.pathNamespaces)
                  ? (c =
                        i.pathNamespaces.filter(function (e) {
                            return n.slice(0, e.length) === e;
                        })[0] || c)
                  : i.pathNamespaces instanceof RegExp && (d = n.match(i.pathNamespaces)) && (c = d[0]),
              (e = -1 === s.indexOf(c + "/")),
              (d = -1 === s.indexOf(c + "/README")),
              e && d && s.unshift(c + "/"))
            : -1 === s.indexOf("/") && -1 === s.indexOf("/README") && s.unshift("/");
        var d,
            l = ((d = i.namespace) ? m.EXPIRE_KEY + "/" + d : m.EXPIRE_KEY) + c,
            p = ((d = i.namespace) ? m.INDEX_KEY + "/" + d : m.INDEX_KEY) + c,
            c = localStorage.getItem(l) < Date.now();
        if (((u = JSON.parse(localStorage.getItem(p))), c)) u = {};
        else if (!o) return;
        var h = s.length,
            f = 0;
        s.forEach(function (a) {
            return u[a]
                ? f++
                : void Docsify.get(r.router.getFile(a), !1, r.config.requestHeaders).then(function (e) {
                      var n, t;
                      (u[a] = g(a, e, r.router, i.depth)),
                          h === ++f &&
                              ((n = i.maxAge),
                              (t = l),
                              (e = p),
                              localStorage.setItem(t, Date.now() + n),
                              localStorage.setItem(e, JSON.stringify(u)));
                  });
        });
    }
    var o,
        s = "";
    function c(e) {
        var n = Docsify.dom.find("div.search"),
            t = Docsify.dom.find(n, ".results-panel"),
            a = Docsify.dom.find(n, ".clear-button"),
            i = Docsify.dom.find(".sidebar-nav"),
            n = Docsify.dom.find(".app-name");
        if (!e)
            return (
                t.classList.remove("show"),
                a.classList.remove("show"),
                (t.innerHTML = ""),
                void (o.hideOtherSidebarContent && (i.classList.remove("hide"), n.classList.remove("hide")))
            );
        var e = (function (e) {
                var n = [],
                    t = [];
                Object.keys(u).forEach(function (n) {
                    t = t.concat(
                        Object.keys(u[n]).map(function (e) {
                            return u[n][e];
                        })
                    );
                });
                var a = (e = e.trim()).split(/[\s\-，\\/]+/);
                1 !== a.length && (a = [].concat(e, a));
                for (var i = 0; i < t.length; i++)
                    !(function (e) {
                        var e = t[e],
                            r = 0,
                            o = "",
                            s = "",
                            c = "",
                            d = e.title && e.title.trim(),
                            l = e.body && e.body.trim(),
                            e = e.slug || "";
                        d &&
                            (a.forEach(function (e) {
                                var n,
                                    t = new RegExp(p(e).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"), "gi"),
                                    a = -1,
                                    i = -1;
                                (s = d ? p(d) : d),
                                    (c = l ? p(l) : l),
                                    (a = d ? s.search(t) : -1),
                                    (i = l ? c.search(t) : -1),
                                    (0 <= a || 0 <= i) &&
                                        ((r += 0 <= a ? 3 : 0 <= i ? 2 : 0),
                                        i < 0 && (i = 0),
                                        (a = (a = n = 0) == (n = i < 11 ? 0 : i - 10) ? 70 : i + e.length + 60),
                                        l && a > l.length && (a = l.length),
                                        (t =
                                            "..." +
                                            c.substring(n, a).replace(t, function (e) {
                                                return '<em class="search-keyword">' + e + "</em>";
                                            }) +
                                            "..."),
                                        (o += t));
                            }),
                            0 < r && ((e = { title: s, content: l ? o : "", url: e, score: r }), n.push(e)));
                    })(i);
                return n.sort(function (e, n) {
                    return n.score - e.score;
                });
            })(e),
            r = "";
        e.forEach(function (e) {
            r += '<div class="matching-post">\n<a href="' + e.url + '">\n<h2>' + e.title + "</h2>\n<p>" + e.content + "</p>\n</a>\n</div>";
        }),
            t.classList.add("show"),
            a.classList.add("show"),
            (t.innerHTML = r || '<p class="empty">' + s + "</p>"),
            o.hideOtherSidebarContent && (i.classList.add("hide"), n.classList.add("hide"));
    }
    function d(e) {
        o = e;
    }
    function l(e, n) {
        var t,
            a,
            i = n.router.parse().query.s;
        d(e),
            Docsify.dom.style(
                "\n.sidebar {\n  padding-top: 0;\n}\n\n.search {\n  margin-bottom: 20px;\n  padding: 6px;\n  border-bottom: 1px solid #eee;\n}\n\n.search .input-wrap {\n  display: flex;\n  align-items: center;\n}\n\n.search .results-panel {\n  display: none;\n}\n\n.search .results-panel.show {\n  display: block;\n}\n\n.search input {\n  outline: none;\n  border: none;\n  width: 100%;\n  padding: 0 7px;\n  line-height: 36px;\n  font-size: 14px;\n  border: 1px solid transparent;\n}\n\n.search input:focus {\n  box-shadow: 0 0 5px var(--theme-color, #42b983);\n  border: 1px solid var(--theme-color, #42b983);\n}\n\n.search input::-webkit-search-decoration,\n.search input::-webkit-search-cancel-button,\n.search input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.search .clear-button {\n  cursor: pointer;\n  width: 36px;\n  text-align: right;\n  display: none;\n}\n\n.search .clear-button.show {\n  display: block;\n}\n\n.search .clear-button svg {\n  transform: scale(.5);\n}\n\n.search h2 {\n  font-size: 17px;\n  margin: 10px 0;\n}\n\n.search a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.search .matching-post {\n  border-bottom: 1px solid #eee;\n}\n\n.search .matching-post:last-child {\n  border-bottom: 0;\n}\n\n.search p {\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n.search p.empty {\n  text-align: center;\n}\n\n.app-name.hide, .sidebar-nav.hide {\n  display: none;\n}"
            ),
            (function (e) {
                void 0 === e && (e = "");
                var n =
                        '<div class="input-wrap">\n      <input type="search"  aria-label="Search text" />\n      <div class="clear-button">\n        <svg width="26" height="24">\n          <circle cx="12" cy="12" r="11" fill="#ccc" />\n          <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />\n          <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />\n        </svg>\n      </div>\n    </div>\n    <div class="results-panel"></div>\n    </div>',
                    e = Docsify.dom.create("div", n),
                    n = Docsify.dom.find("aside");
                Docsify.dom.toggleClass(e, "search"), Docsify.dom.before(n, e);
            })(i),
            (n = Docsify.dom.find("div.search")),
            (a = Docsify.dom.find(n, "input")),
            (e = Docsify.dom.find(n, ".input-wrap")),
            Docsify.dom.on(n, "click", function (e) {
                return -1 === ["A", "H2", "P", "EM"].indexOf(e.target.tagName) && e.stopPropagation();
            }),
            Docsify.dom.on(a, "input", function (n) {
                clearTimeout(t),
                    (t = setTimeout(function (e) {
                        return c(n.target.value.trim());
                    }, 100));
            }),
            Docsify.dom.on(e, "click", function (e) {
                "INPUT" !== e.target.tagName && ((a.value = ""), c());
            }),
            i &&
                setTimeout(function (e) {
                    return c(i);
                }, 500);
    }
    function y(e, n) {
        var t, a, i, r, o;
        d(e),
            (t = e.placeholder),
            (a = n.route.path),
            (r = Docsify.dom.getNode('.search input[type="search"]')) &&
                ("string" == typeof t
                    ? (r.placeholder = t)
                    : ((i = Object.keys(t).filter(function (e) {
                          return -1 < a.indexOf(e);
                      })[0]),
                      (r.placeholder = t[i]))),
            (e = e.noData),
            (o = n.route.path),
            (s =
                "string" == typeof e
                    ? e
                    : e[
                          Object.keys(e).filter(function (e) {
                              return -1 < o.indexOf(e);
                          })[0]
                      ]);
    }
    var v = {
        placeholder: "Type to search",
        noData: "No Results!",
        paths: "auto",
        depth: 2,
        maxAge: 864e5,
        hideOtherSidebarContent: !1,
        namespace: void 0,
        pathNamespaces: void 0,
    };
    $docsify.plugins = [].concat(function (e, n) {
        var t = Docsify.util,
            a = n.config.search || v;
        Array.isArray(a)
            ? (v.paths = a)
            : "object" == typeof a &&
              ((v.paths = Array.isArray(a.paths) ? a.paths : "auto"),
              (v.maxAge = (t.isPrimitive(a.maxAge) ? a : v).maxAge),
              (v.placeholder = a.placeholder || v.placeholder),
              (v.noData = a.noData || v.noData),
              (v.depth = a.depth || v.depth),
              (v.hideOtherSidebarContent = a.hideOtherSidebarContent || v.hideOtherSidebarContent),
              (v.namespace = a.namespace || v.namespace),
              (v.pathNamespaces = a.pathNamespaces || v.pathNamespaces));
        var i = "auto" === v.paths;
        e.mounted(function (e) {
            l(v, n), i || r(v, n);
        }),
            e.doneEach(function (e) {
                y(v, n), i && r(v, n);
            });
    }, $docsify.plugins);
})();

// Prism Bash Highlighter
!(function (e) {
    var t =
            "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
        n = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: "punctuation", inside: null },
        a = {
            bash: n,
            environment: { pattern: RegExp("\\$" + t), alias: "constant" },
            variable: [
                {
                    pattern: /\$?\(\([\s\S]+?\)\)/,
                    greedy: !0,
                    inside: {
                        variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                        operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                        punctuation: /\(\(?|\)\)?|,|;/,
                    },
                },
                { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
                {
                    pattern: /\$\{[^}]+\}/,
                    greedy: !0,
                    inside: {
                        operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                        punctuation: /[\[\]]/,
                        environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" },
                    },
                },
                /\$(?:\w+|[#?*!@$])/,
            ],
            entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
        };
    (e.languages.bash = {
        shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
        comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
        "function-name": [
            { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" },
            { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
        ],
        "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 },
        "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant" } },
            alias: "variable",
            lookbehind: !0,
        },
        string: [
            { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: a },
            { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: n } },
            { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: a },
            { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
            { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: a.entity } },
        ],
        environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
        variable: a.variable,
        function: {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0,
        },
        keyword: {
            pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
            lookbehind: !0,
        },
        builtin: {
            pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: "class-name",
        },
        boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 },
        "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
        operator: {
            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } },
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
    }),
        (n.inside = e.languages.bash);
    for (
        var s = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
            ],
            i = a.variable[1].inside,
            o = 0;
        o < s.length;
        o++
    )
        i[s[o]] = e.languages.bash[s[o]];
    e.languages.shell = e.languages.bash;
})(Prism);

// Prism JSON highlighter
(Prism.languages.json = {
    property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
    string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" },
}),
    (Prism.languages.webmanifest = Prism.languages.json);

// Prism Python Highlighter
(Prism.languages.python = {
    comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
    "string-interpolation": {
        pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
                    "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" },
                    rest: null,
                },
            },
            string: /[\s\S]+/,
        },
    },
    "triple-quoted-string": { pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" },
    string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
    function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
    "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: { punctuation: /\./ },
    },
    keyword:
        /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
        /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:True|False|None)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/,
}),
    (Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python),
    (Prism.languages.py = Prism.languages.python);

//  Docsify Zoom Image
!(function () {
    function o(e) {
        return "IMG" === e.tagName;
    }
    function E(e) {
        return e && 1 === e.nodeType;
    }
    function c(e) {
        return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
    }
    function m(e) {
        try {
            return Array.isArray(e)
                ? e.filter(o)
                : ((t = e),
                  NodeList.prototype.isPrototypeOf(t)
                      ? [].slice.call(e).filter(o)
                      : E(e)
                      ? [e].filter(o)
                      : "string" == typeof e
                      ? [].slice.call(document.querySelectorAll(e)).filter(o)
                      : []);
        } catch (e) {
            throw new TypeError(
                "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
            );
        }
        var t;
    }
    function w(e, t) {
        var o = l({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
        return "function" == typeof window.CustomEvent
            ? new CustomEvent(e, o)
            : ((t = document.createEvent("CustomEvent")).initCustomEvent(e, o.bubbles, o.cancelable, o.detail), t);
    }
    function a(e, t) {
        function o(e) {
            function u() {
                var e = {
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                    },
                    t = void 0,
                    o = void 0;
                v.container &&
                    (v.container instanceof Object
                        ? ((t = (e = l({}, e, v.container)).width - e.left - e.right - 2 * v.margin),
                          (o = e.height - e.top - e.bottom - 2 * v.margin))
                        : ((d = (i = (E(v.container) ? v.container : document.querySelector(v.container)).getBoundingClientRect()).width),
                          (a = i.height),
                          (r = i.left),
                          (m = i.top),
                          (e = l({}, e, { width: d, height: a, left: r, top: m })))),
                    (t = t || e.width - 2 * v.margin),
                    (o = o || e.height - 2 * v.margin);
                var n = z.zoomedHd || z.original,
                    i = (!c(n) && n.naturalWidth) || t,
                    d = (!c(n) && n.naturalHeight) || o,
                    r = (a = n.getBoundingClientRect()).top,
                    m = a.left,
                    n = a.width,
                    a = a.height,
                    i = Math.min(i, t) / n,
                    d = Math.min(d, o) / a,
                    d =
                        "scale(" +
                        (d = Math.min(i, d)) +
                        ") translate3d(" +
                        ((t - n) / 2 - m + v.margin + e.left) / d +
                        "px, " +
                        ((o - a) / 2 - r + v.margin + e.top) / d +
                        "px, 0)";
                (z.zoomed.style.transform = d), z.zoomedHd && (z.zoomedHd.style.transform = d);
            }
            var s = (0 < arguments.length && void 0 !== e ? e : {}).target;
            return new i(function (e) {
                if (s && -1 === f.indexOf(s)) e(b);
                else {
                    function t() {
                        (g = !1),
                            z.zoomed.removeEventListener("transitionend", t),
                            z.original.dispatchEvent(w("medium-zoom:opened", { detail: { zoom: b } })),
                            e(b);
                    }
                    var o, n, i, d, r, m, a, c, l;
                    if (z.zoomed) e(b);
                    else {
                        if (s) z.original = s;
                        else {
                            if (!(0 < f.length)) return void e(b);
                            z.original = f[0];
                        }
                        z.original.dispatchEvent(w("medium-zoom:open", { detail: { zoom: b } })),
                            (h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                            (g = !0),
                            (z.zoomed =
                                ((o = z.original),
                                (n = o.getBoundingClientRect()),
                                (i = n.top),
                                (d = n.left),
                                (r = n.width),
                                (m = n.height),
                                (a = o.cloneNode()),
                                (n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                (o = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
                                a.removeAttribute("id"),
                                (a.style.position = "absolute"),
                                (a.style.top = i + n + "px"),
                                (a.style.left = d + o + "px"),
                                (a.style.width = r + "px"),
                                (a.style.height = m + "px"),
                                (a.style.transform = ""),
                                a)),
                            document.body.appendChild(y),
                            v.template &&
                                ((a = E(v.template) ? v.template : document.querySelector(v.template)),
                                (z.template = document.createElement("div")),
                                z.template.appendChild(a.content.cloneNode(!0)),
                                document.body.appendChild(z.template)),
                            document.body.appendChild(z.zoomed),
                            window.requestAnimationFrame(function () {
                                document.body.classList.add("medium-zoom--opened");
                            }),
                            z.original.classList.add("medium-zoom-image--hidden"),
                            z.zoomed.classList.add("medium-zoom-image--opened"),
                            z.zoomed.addEventListener("click", p),
                            z.zoomed.addEventListener("transitionend", t),
                            z.original.getAttribute("data-zoom-src")
                                ? ((z.zoomedHd = z.zoomed.cloneNode()),
                                  z.zoomedHd.removeAttribute("srcset"),
                                  z.zoomedHd.removeAttribute("sizes"),
                                  (z.zoomedHd.src = z.zoomed.getAttribute("data-zoom-src")),
                                  (z.zoomedHd.onerror = function () {
                                      clearInterval(c),
                                          console.warn("Unable to reach the zoom image target " + z.zoomedHd.src),
                                          (z.zoomedHd = null),
                                          u();
                                  }),
                                  (c = setInterval(function () {
                                      z.zoomedHd.complete &&
                                          (clearInterval(c),
                                          z.zoomedHd.classList.add("medium-zoom-image--opened"),
                                          z.zoomedHd.addEventListener("click", p),
                                          document.body.appendChild(z.zoomedHd),
                                          u());
                                  }, 10)))
                                : z.original.hasAttribute("srcset")
                                ? ((z.zoomedHd = z.zoomed.cloneNode()),
                                  z.zoomedHd.removeAttribute("sizes"),
                                  z.zoomedHd.removeAttribute("loading"),
                                  (l = z.zoomedHd.addEventListener("load", function () {
                                      z.zoomedHd.removeEventListener("load", l),
                                          z.zoomedHd.classList.add("medium-zoom-image--opened"),
                                          z.zoomedHd.addEventListener("click", p),
                                          document.body.appendChild(z.zoomedHd),
                                          u();
                                  })))
                                : u();
                    }
                }
            });
        }
        var n = 1 < arguments.length && void 0 !== t ? t : {},
            i =
                window.Promise ||
                function (e) {
                    function t() {}
                    e(t, t);
                },
            t = function () {
                for (var e = arguments, t = arguments.length, o = Array(t), n = 0; n < t; n++) o[n] = e[n];
                var i = o.reduce(function (e, t) {
                    return [].concat(e, m(t));
                }, []);
                return (
                    i
                        .filter(function (e) {
                            return -1 === f.indexOf(e);
                        })
                        .forEach(function (e) {
                            f.push(e), e.classList.add("medium-zoom-image");
                        }),
                    r.forEach(function (e) {
                        var t = e.type,
                            o = e.listener,
                            n = e.options;
                        i.forEach(function (e) {
                            e.addEventListener(t, o, n);
                        });
                    }),
                    b
                );
            },
            p = function () {
                return new i(function (t) {
                    var e;
                    !g && z.original
                        ? ((e = function e() {
                              z.original.classList.remove("medium-zoom-image--hidden"),
                                  document.body.removeChild(z.zoomed),
                                  z.zoomedHd && document.body.removeChild(z.zoomedHd),
                                  document.body.removeChild(y),
                                  z.zoomed.classList.remove("medium-zoom-image--opened"),
                                  z.template && document.body.removeChild(z.template),
                                  (g = !1),
                                  z.zoomed.removeEventListener("transitionend", e),
                                  z.original.dispatchEvent(w("medium-zoom:closed", { detail: { zoom: b } })),
                                  (z.original = null),
                                  (z.zoomed = null),
                                  (z.zoomedHd = null),
                                  (z.template = null),
                                  t(b);
                          }),
                          (g = !0),
                          document.body.classList.remove("medium-zoom--opened"),
                          (z.zoomed.style.transform = ""),
                          z.zoomedHd && (z.zoomedHd.style.transform = ""),
                          z.template && ((z.template.style.transition = "opacity 150ms"), (z.template.style.opacity = 0)),
                          z.original.dispatchEvent(w("medium-zoom:close", { detail: { zoom: b } })),
                          z.zoomed.addEventListener("transitionend", e))
                        : t(b);
                });
            },
            d = function (e) {
                e = (0 < arguments.length && void 0 !== e ? e : {}).target;
                return z.original ? p() : o({ target: e });
            },
            f = [],
            r = [],
            g = !1,
            h = 0,
            v = n,
            z = { original: null, zoomed: null, zoomedHd: null, template: null };
        "[object Object]" === Object.prototype.toString.call(e) ? (v = e) : (!e && "string" != typeof e) || t(e),
            (v = l({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, v));
        var y = ((n = v.background), (e = document.createElement("div")).classList.add("medium-zoom-overlay"), (e.style.background = n), e);
        document.addEventListener("click", function (e) {
            e = e.target;
            e !== y ? -1 !== f.indexOf(e) && d({ target: e }) : p();
        }),
            document.addEventListener("keyup", function (e) {
                e = e.key || e.keyCode;
                ("Escape" !== e && "Esc" !== e && 27 !== e) || p();
            }),
            document.addEventListener("scroll", function () {
                var e;
                !g &&
                    z.original &&
                    ((e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                    Math.abs(h - e) > v.scrollOffset && setTimeout(p, 150));
            }),
            window.addEventListener("resize", p);
        var b = {
            open: o,
            close: p,
            toggle: d,
            update: function (e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    e = t;
                return (
                    t.background && (y.style.background = t.background),
                    t.container && t.container instanceof Object && (e.container = l({}, v.container, t.container)),
                    t.template && ((t = E(t.template) ? t.template : document.querySelector(t.template)), (e.template = t)),
                    (v = l({}, v, e)),
                    f.forEach(function (e) {
                        e.dispatchEvent(w("medium-zoom:update", { detail: { zoom: b } }));
                    }),
                    b
                );
            },
            clone: function (e) {
                return a(l({}, v, 0 < arguments.length && void 0 !== e ? e : {}));
            },
            attach: t,
            detach: function () {
                for (var e = arguments, t = arguments.length, o = Array(t), n = 0; n < t; n++) o[n] = e[n];
                z.zoomed && p();
                var i =
                    0 < o.length
                        ? o.reduce(function (e, t) {
                              return [].concat(e, m(t));
                          }, [])
                        : f;
                return (
                    i.forEach(function (e) {
                        e.classList.remove("medium-zoom-image"), e.dispatchEvent(w("medium-zoom:detach", { detail: { zoom: b } }));
                    }),
                    (f = f.filter(function (e) {
                        return -1 === i.indexOf(e);
                    })),
                    b
                );
            },
            on: function (t, o, e) {
                var n = 2 < arguments.length && void 0 !== e ? e : {};
                return (
                    f.forEach(function (e) {
                        e.addEventListener("medium-zoom:" + t, o, n);
                    }),
                    r.push({ type: "medium-zoom:" + t, listener: o, options: n }),
                    b
                );
            },
            off: function (t, o, e) {
                var n = 2 < arguments.length && void 0 !== e ? e : {};
                return (
                    f.forEach(function (e) {
                        e.removeEventListener("medium-zoom:" + t, o, n);
                    }),
                    (r = r.filter(function (e) {
                        return !(e.type === "medium-zoom:" + t && e.listener.toString() === o.toString());
                    })),
                    b
                );
            },
            getOptions: function () {
                return v;
            },
            getImages: function () {
                return f;
            },
            getZoomedImage: function () {
                return z.original;
            },
        };
        return b;
    }
    var l =
        Object.assign ||
        function (e) {
            for (var t = arguments, o = 1; o < arguments.length; o++) {
                var n,
                    i = t[o];
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
            }
            return e;
        };
    !(function (e, t) {
        void 0 === t && (t = {});
        var o,
            n = t.insertAt;
        e &&
            "undefined" != typeof document &&
            ((o = document.head || document.getElementsByTagName("head")[0]),
            ((t = document.createElement("style")).type = "text/css"),
            "top" === n && o.firstChild ? o.insertBefore(t, o.firstChild) : o.appendChild(t),
            t.styleSheet ? (t.styleSheet.cssText = e) : t.appendChild(document.createTextNode(e)));
    })(
        ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
    );
    var n = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
    $docsify.plugins = [].concat(function (e) {
        var o;
        e.doneEach(function (e) {
            var t = (t = Array.apply(null, document.querySelectorAll(".markdown-section img:not(.emoji):not([data-no-zoom])"))).filter(
                function (e) {
                    return !1 === n.call(e, "a img");
                }
            );
            o && o.detach(), (o = a(t));
        });
    }, $docsify.plugins);
})();
