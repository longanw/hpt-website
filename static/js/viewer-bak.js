/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2021 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(() => {
    "use strict";
    var r = [, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.compatibilityParams = t.OptionKind = t.AppOptions = void 0;

        function l(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                l = function e(t) {
                    return typeof t
                }
            } else {
                l = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return l(e)
        }

        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var a = Object.create(null);
        t.compatibilityParams = a; {
            var o = typeof navigator !== "undefined" && navigator.userAgent || "";
            var s = typeof navigator !== "undefined" && navigator.platform || "";
            var u = typeof navigator !== "undefined" && navigator.maxTouchPoints || 1;
            var c = /Android/.test(o);
            var f = /\b(iPad|iPhone|iPod)(?=;)/.test(o) || s === "MacIntel" && u > 1;
            var d = /CriOS/.test(o);
            (function e() {
                if (d) {
                    a.disableCreateObjectURL = true
                }
            })();
            (function e() {
                if (f || c) {
                    a.maxCanvasPixels = 5242880
                }
            })()
        }
        var h = {
            VIEWER: 2,
            API: 4,
            WORKER: 8,
            PREFERENCE: 128
        };
        t.OptionKind = h;
        var p = {
            annotationMode: {
                value: 2,
                kind: h.VIEWER + h.PREFERENCE
            },
            cursorToolOnLoad: {
                value: 0,
                kind: h.VIEWER + h.PREFERENCE
            },
            defaultUrl: {
                value: "",
                kind: h.VIEWER
            },
            defaultZoomValue: {
                value: "",
                kind: h.VIEWER + h.PREFERENCE
            },
            disableHistory: {
                value: false,
                kind: h.VIEWER
            },
            disablePageLabels: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            enablePermissions: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            enablePrintAutoRotate: {
                value: true,
                kind: h.VIEWER + h.PREFERENCE
            },
            enableScripting: {
                value: true,
                kind: h.VIEWER + h.PREFERENCE
            },
            externalLinkRel: {
                value: "noopener noreferrer nofollow",
                kind: h.VIEWER
            },
            externalLinkTarget: {
                value: 0,
                kind: h.VIEWER + h.PREFERENCE
            },
            historyUpdateUrl: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            ignoreDestinationZoom: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            imageResourcesPath: {
                value: "../images/",
                kind: h.VIEWER
            },
            maxCanvasPixels: {
                value: 16777216,
                compatibility: a.maxCanvasPixels,
                kind: h.VIEWER
            },
            pdfBugEnabled: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            printResolution: {
                value: 150,
                kind: h.VIEWER
            },
            renderer: {
                value: "canvas",
                kind: h.VIEWER
            },
            sidebarViewOnLoad: {
                value: -1,
                kind: h.VIEWER + h.PREFERENCE
            },
            scrollModeOnLoad: {
                value: -1,
                kind: h.VIEWER + h.PREFERENCE
            },
            spreadModeOnLoad: {
                value: -1,
                kind: h.VIEWER + h.PREFERENCE
            },
            textLayerMode: {
                value: 1,
                kind: h.VIEWER + h.PREFERENCE
            },
            useOnlyCssZoom: {
                value: false,
                kind: h.VIEWER + h.PREFERENCE
            },
            viewerCssTheme: {
                value: 0,
                kind: h.VIEWER + h.PREFERENCE
            },
            viewOnLoad: {
                value: 0,
                kind: h.VIEWER + h.PREFERENCE
            },
            cMapPacked: {
                value: true,
                kind: h.API
            },
            cMapUrl: {
                value: "../cmaps/",
                kind: h.API
            },
            disableAutoFetch: {
                value: false,
                kind: h.API + h.PREFERENCE
            },
            disableFontFace: {
                value: false,
                kind: h.API + h.PREFERENCE
            },
            disableRange: {
                value: false,
                kind: h.API + h.PREFERENCE
            },
            disableStream: {
                value: false,
                kind: h.API + h.PREFERENCE
            },
            docBaseUrl: {
                value: "",
                kind: h.API
            },
            enableXfa: {
                value: true,
                kind: h.API + h.PREFERENCE
            },
            fontExtraProperties: {
                value: false,
                kind: h.API
            },
            isEvalSupported: {
                value: true,
                kind: h.API
            },
            maxImageSize: {
                value: -1,
                kind: h.API
            },
            pdfBug: {
                value: false,
                kind: h.API
            },
            standardFontDataUrl: {
                value: "../fonts/",
                kind: h.API
            },
            verbosity: {
                value: 1,
                kind: h.API
            },
            workerPort: {
                value: null,
                kind: h.WORKER
            },
            workerSrc: {
                value: "libs/pdf.worker.min.js",
                kind: h.WORKER
            }
        }; {
            p.disablePreferences = {
                value: false,
                kind: h.VIEWER
            };
            p.locale = {
                value: typeof navigator !== "undefined" ? navigator.language : "en-US",
                kind: h.VIEWER
            };
            p.sandboxBundleSrc = {
                value: "libs/pdf.sandbox.js",
                kind: h.VIEWER
            };
            p.renderer.kind += h.PREFERENCE
        }
        var v = Object.create(null);
        var g = function () {
            function e() {
                n(this, e);
                throw new Error("Cannot initialize AppOptions.")
            }
            i(e, null, [{
                key: "get",
                value: function e(t) {
                    var n = v[t];
                    if (n !== undefined) {
                        return n
                    }
                    var r = p[t];
                    if (r !== undefined) {
                        var i;
                        return (i = r.compatibility) !== null && i !== void 0 ? i : r.value
                    }
                    return undefined
                }
            }, {
                key: "getAll",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var n = Object.create(null);
                    for (var r in p) {
                        var i;
                        var a = p[r];
                        if (t) {
                            if ((t & a.kind) === 0) {
                                continue
                            }
                            if (t === h.PREFERENCE) {
                                var o = a.value,
                                    s = l(o);
                                if (s === "boolean" || s === "string" || s === "number" && Number.isInteger(o)) {
                                    n[r] = o;
                                    continue
                                }
                                throw new Error("Invalid type for preference: ".concat(r))
                            }
                        }
                        var u = v[r];
                        n[r] = u !== undefined ? u : (i = a.compatibility) !== null && i !== void 0 ? i : a.value
                    }
                    return n
                }
            }, {
                key: "set",
                value: function e(t, n) {
                    v[t] = n
                }
            }, {
                key: "setAll",
                value: function e(t) {
                    for (var n in t) {
                        v[n] = t[n]
                    }
                }
            }, {
                key: "remove",
                value: function e(t) {
                    delete v[t]
                }
            }, {
                key: "_hasUserOptions",
                value: function e() {
                    return Object.keys(v).length > 0
                }
            }]);
            return e
        }();
        t.AppOptions = g
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFViewerApplication = t.PDFPrintServiceFactory = t.DefaultExternalServices = void 0;
        var P = r(n(3));
        var S = n(5);
        var k = n(1);
        var h = n(6);
        var m = n(7);
        var p = n(8);
        var v = n(10);
        var g = n(11);
        var y = n(12);
        var b = n(14);
        var w = n(15);
        var _ = n(16);
        var E = n(18);
        var x = n(19);
        var C = n(20);
        var L = n(21);
        var T = n(22);
        var I = n(23);
        var O = n(24);
        var M = n(25);
        var A = n(26);
        var D = n(27);
        var N = n(29);
        var B = n(38);
        var V = n(39);
        var l = n(40);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                if (e) {
                    r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })
                }
                n.push.apply(n, r)
            }
            return n
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e] != null ? arguments[e] : {};
                if (e % 2) {
                    i(Object(n), true).forEach(function (e) {
                        a(t, e, n[e])
                    })
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                } else {
                    i(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
            }
            return t
        }

        function a(e, t, n) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                e[t] = n
            }
            return e
        }

        function R(e, t) {
            return c(e) || u(e, t) || f(e, t) || s()
        }

        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function u(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function c(e) {
            if (Array.isArray(e)) return e
        }

        function F(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = f(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function f(e, t) {
            if (!e) return;
            if (typeof e === "string") return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }

        function d(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function j(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function U(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        j(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        j(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function H(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function z(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function W(e, t, n) {
            if (t) z(e.prototype, t);
            if (n) z(e, n);
            return e
        }
        var G = 5e3;
        var X = 1e4;
        var K = 1e3;
        var q = {
            UNKNOWN: -1,
            PREVIOUS: 0,
            INITIAL: 1
        };
        var Z = {
            AUTOMATIC: 0,
            LIGHT: 1,
            DARK: 2
        };
        var Q = ["1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0", "2.1", "2.2", "2.3"];
        var Y = ["acrobat distiller", "acrobat pdfwriter", "adobe livecycle", "adobe pdf library", "adobe photoshop", "ghostscript", "tcpdf", "cairo", "dvipdfm", "dvips", "pdftex", "pdfkit", "itext", "prince", "quarkxpress", "mac os x", "microsoft", "openoffice", "oracle", "luradocument", "pdf-xchange", "antenna house", "aspose.cells", "fpdf"];
        var $ = function () {
            function e() {
                H(this, e);
                throw new Error("Cannot initialize DefaultExternalServices.")
            }
            W(e, null, [{
                key: "updateFindControlState",
                value: function e(t) {}
            }, {
                key: "updateFindMatchesCount",
                value: function e(t) {}
            }, {
                key: "initPassiveLoading",
                value: function e(t) {}
            }, {
                key: "fallback",
                value: function () {
                    var t = U(P["default"].mark(function e(t) {
                        return P["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "reportTelemetry",
                value: function e(t) {}
            }, {
                key: "createDownloadManager",
                value: function e(t) {
                    throw new Error("Not implemented: createDownloadManager")
                }
            }, {
                key: "createPreferences",
                value: function e() {
                    throw new Error("Not implemented: createPreferences")
                }
            }, {
                key: "createL10n",
                value: function e(t) {
                    throw new Error("Not implemented: createL10n")
                }
            }, {
                key: "createScripting",
                value: function e(t) {
                    throw new Error("Not implemented: createScripting")
                }
            }, {
                key: "supportsIntegratedFind",
                get: function e() {
                    return (0, m.shadow)(this, "supportsIntegratedFind", false)
                }
            }, {
                key: "supportsDocumentFonts",
                get: function e() {
                    return (0, m.shadow)(this, "supportsDocumentFonts", true)
                }
            }, {
                key: "supportedMouseWheelZoomModifierKeys",
                get: function e() {
                    return (0, m.shadow)(this, "supportedMouseWheelZoomModifierKeys", {
                        ctrlKey: true,
                        metaKey: true
                    })
                }
            }, {
                key: "isInAutomation",
                get: function e() {
                    return (0, m.shadow)(this, "isInAutomation", false)
                }
            }]);
            return e
        }();
        t.DefaultExternalServices = $;
        var J = {
            initialBookmark: document.location.hash.substring(1),
            _initializedCapability: (0, m.createPromiseCapability)(),
            _fellback: false,
            appConfig: null,
            pdfDocument: null,
            pdfLoadingTask: null,
            printService: null,
            pdfViewer: null,
            pdfThumbnailViewer: null,
            pdfRenderingQueue: null,
            pdfPresentationMode: null,
            pdfDocumentProperties: null,
            pdfLinkService: null,
            pdfHistory: null,
            pdfSidebar: null,
            pdfSidebarResizer: null,
            pdfOutlineViewer: null,
            pdfAttachmentViewer: null,
            pdfLayerViewer: null,
            pdfCursorTools: null,
            pdfScriptingManager: null,
            store: null,
            downloadManager: null,
            overlayManager: null,
            preferences: null,
            toolbar: null,
            secondaryToolbar: null,
            eventBus: null,
            l10n: null,
            isInitialViewSet: false,
            downloadComplete: false,
            isViewerEmbedded: window.parent !== window,
            url: "",
            baseUrl: "",
            _downloadUrl: "",
            externalServices: $,
            _boundEvents: Object.create(null),
            documentInfo: null,
            metadata: null,
            _contentDispositionFilename: null,
            _contentLength: null,
            _saveInProgress: false,
            _docStats: null,
            _wheelUnusedTicks: 0,
            _idleCallbacks: new Set,
            initialize: function e(r) {
                var i = this;
                return U(P["default"].mark(function e() {
                    var n;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    i.preferences = i.externalServices.createPreferences();
                                    i.appConfig = r;
                                    t.next = 4;
                                    return i._readPreferences();
                                case 4:
                                    t.next = 6;
                                    return i._parseHashParameters();
                                case 6:
                                    i._forceCssTheme();
                                    t.next = 9;
                                    return i._initializeL10n();
                                case 9:
                                    if (i.isViewerEmbedded && k.AppOptions.get("externalLinkTarget") === m.LinkTarget.NONE) {
                                        k.AppOptions.set("externalLinkTarget", m.LinkTarget.TOP)
                                    }
                                    t.next = 12;
                                    return i._initializeViewerComponents();
                                case 12:
                                    i.bindEvents();
                                    i.bindWindowEvents();
                                    n = r.appContainer || document.documentElement;
                                    i.l10n.translate(n).then(function () {
                                        i.eventBus.dispatch("localized", {
                                            source: i
                                        })
                                    });
                                    i._initializedCapability.resolve();
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _readPreferences: function e() {
                var n = this;
                return U(P["default"].mark(function e() {
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    if (!k.AppOptions.get("disablePreferences")) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (k.AppOptions._hasUserOptions()) {
                                        console.warn("_readPreferences: The Preferences may override manually set AppOptions; " + 'please use the "disablePreferences"-option in order to prevent that.')
                                    }
                                    t.prev = 3;
                                    t.t0 = k.AppOptions;
                                    t.next = 7;
                                    return n.preferences.getAll();
                                case 7:
                                    t.t1 = t.sent;
                                    t.t0.setAll.call(t.t0, t.t1);
                                    t.next = 14;
                                    break;
                                case 11:
                                    t.prev = 11;
                                    t.t2 = t["catch"](3);
                                    console.error('_readPreferences: "'.concat(t.t2 === null || t.t2 === void 0 ? void 0 : t.t2.message, '".'));
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e, null, [[3, 11]])
                }))()
            },
            _parseHashParameters: function e() {
                var s = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    if (k.AppOptions.get("pdfBugEnabled")) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    n = document.location.hash.substring(1);
                                    if (n) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    r = (0, S.parseQueryString)(n), i = [];
                                    if (r.get("disableworker") === "true") {
                                        i.push(ne())
                                    }
                                    if (r.has("disablerange")) {
                                        k.AppOptions.set("disableRange", r.get("disablerange") === "true")
                                    }
                                    if (r.has("disablestream")) {
                                        k.AppOptions.set("disableStream", r.get("disablestream") === "true")
                                    }
                                    if (r.has("disableautofetch")) {
                                        k.AppOptions.set("disableAutoFetch", r.get("disableautofetch") === "true")
                                    }
                                    if (r.has("disablefontface")) {
                                        k.AppOptions.set("disableFontFace", r.get("disablefontface") === "true")
                                    }
                                    if (r.has("disablehistory")) {
                                        k.AppOptions.set("disableHistory", r.get("disablehistory") === "true")
                                    }
                                    if (r.has("verbosity")) {
                                        k.AppOptions.set("verbosity", r.get("verbosity") | 0)
                                    }
                                    if (!r.has("textlayer")) {
                                        t.next = 22;
                                        break
                                    }
                                    t.t0 = r.get("textlayer");
                                    t.next = t.t0 === "off" ? 17 : t.t0 === "visible" ? 19 : t.t0 === "shadow" ? 19 : t.t0 === "hover" ? 19 : 22;
                                    break;
                                case 17:
                                    k.AppOptions.set("textLayerMode", S.TextLayerMode.DISABLE);
                                    return t.abrupt("break", 22);
                                case 19:
                                    a = s.appConfig.viewerContainer;
                                    a.classList.add("textLayer-".concat(r.get("textlayer")));
                                    return t.abrupt("break", 22);
                                case 22:
                                    if (r.has("pdfbug")) {
                                        k.AppOptions.set("pdfBug", true);
                                        k.AppOptions.set("fontExtraProperties", true);
                                        o = r.get("pdfbug").split(",");
                                        i.push(ie(o))
                                    }
                                    if (r.has("locale")) {
                                        k.AppOptions.set("locale", r.get("locale"))
                                    }
                                    if (!(i.length === 0)) {
                                        t.next = 26;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 26:
                                    t.prev = 26;
                                    t.next = 29;
                                    return Promise.all(i);
                                case 29:
                                    t.next = 34;
                                    break;
                                case 31:
                                    t.prev = 31;
                                    t.t1 = t["catch"](26);
                                    console.error('_parseHashParameters: "'.concat(t.t1.message, '".'));
                                case 34:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e, null, [[26, 31]])
                }))()
            },
            _initializeL10n: function e() {
                var r = this;
                return U(P["default"].mark(function e() {
                    var n;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    r.l10n = r.externalServices.createL10n({
                                        locale: k.AppOptions.get("locale")
                                    });
                                    t.next = 3;
                                    return r.l10n.getDirection();
                                case 3:
                                    n = t.sent;
                                    document.getElementsByTagName("html")[0].dir = n;
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _forceCssTheme: function e() {
                var t = k.AppOptions.get("viewerCssTheme");
                if (t === Z.AUTOMATIC || !Object.values(Z).includes(t)) {
                    return
                }
                try {
                    var n = document.styleSheets[0];
                    var r = (n === null || n === void 0 ? void 0 : n.cssRules) || [];
                    for (var i = 0, a = r.length; i < a; i++) {
                        var o;
                        var s = r[i];
                        if (s instanceof CSSMediaRule && ((o = s.media) === null || o === void 0 ? void 0 : o[0]) === "(prefers-color-scheme: dark)") {
                            if (t === Z.LIGHT) {
                                n.deleteRule(i);
                                return
                            }
                            var u = /^@media \(prefers-color-scheme: dark\) {\n\s*([\w\s-.,:;/\\{}()]+)\n}$/.exec(s.cssText);
                            if (u !== null && u !== void 0 && u[1]) {
                                n.deleteRule(i);
                                n.insertRule(u[1], i)
                            }
                            return
                        }
                    }
                } catch (e) {
                    console.error('_forceCssTheme: "'.concat(e === null || e === void 0 ? void 0 : e.message, '".'))
                }
            },
            _initializeViewerComponents: function e() {
                var d = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u, l, c, f;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    n = d.appConfig, r = d.externalServices;
                                    if (n.eventBus) {
                                        i = n.eventBus
                                    } else if (r.isInAutomation) {
                                        i = new h.AutomationEventBus
                                    } else {
                                        i = new h.EventBus
                                    }
                                    d.eventBus = i;
                                    d.overlayManager = new v.OverlayManager;
                                    a = new I.PDFRenderingQueue;
                                    a.onIdle = d._cleanup.bind(d);
                                    d.pdfRenderingQueue = a;
                                    o = new C.PDFLinkService({
                                        eventBus: i,
                                        externalLinkTarget: k.AppOptions.get("externalLinkTarget"),
                                        externalLinkRel: k.AppOptions.get("externalLinkRel"),
                                        ignoreDestinationZoom: k.AppOptions.get("ignoreDestinationZoom")
                                    });
                                    d.pdfLinkService = o;
                                    s = r.createDownloadManager();
                                    d.downloadManager = s;
                                    u = new _.PDFFindController({
                                        linkService: o,
                                        eventBus: i
                                    });
                                    d.findController = u;
                                    l = new O.PDFScriptingManager({
                                        eventBus: i,
                                        sandboxBundleSrc: k.AppOptions.get("sandboxBundleSrc"),
                                        scriptingFactory: r,
                                        docPropertiesLookup: d._scriptingDocProperties.bind(d)
                                    });
                                    d.pdfScriptingManager = l;
                                    c = n.mainContainer;
                                    f = n.viewerContainer;
                                    d.pdfViewer = new N.PDFViewer({
                                        container: c,
                                        viewer: f,
                                        eventBus: i,
                                        renderingQueue: a,
                                        linkService: o,
                                        downloadManager: s,
                                        findController: u,
                                        scriptingManager: k.AppOptions.get("enableScripting") && l,
                                        renderer: k.AppOptions.get("renderer"),
                                        l10n: d.l10n,
                                        textLayerMode: k.AppOptions.get("textLayerMode"),
                                        annotationMode: k.AppOptions.get("annotationMode"),
                                        imageResourcesPath: k.AppOptions.get("imageResourcesPath"),
                                        enablePrintAutoRotate: k.AppOptions.get("enablePrintAutoRotate"),
                                        useOnlyCssZoom: k.AppOptions.get("useOnlyCssZoom"),
                                        maxCanvasPixels: k.AppOptions.get("maxCanvasPixels"),
                                        enablePermissions: k.AppOptions.get("enablePermissions")
                                    });
                                    a.setViewer(d.pdfViewer);
                                    o.setViewer(d.pdfViewer);
                                    l.setViewer(d.pdfViewer);
                                    d.pdfThumbnailViewer = new D.PDFThumbnailViewer({
                                        container: n.sidebar.thumbnailView,
                                        eventBus: i,
                                        renderingQueue: a,
                                        linkService: o,
                                        l10n: d.l10n
                                    });
                                    a.setThumbnailViewer(d.pdfThumbnailViewer);
                                    if (!d.isViewerEmbedded && !k.AppOptions.get("disableHistory")) {
                                        d.pdfHistory = new E.PDFHistory({
                                            linkService: o,
                                            eventBus: i
                                        });
                                        o.setHistory(d.pdfHistory)
                                    }
                                    if (!d.supportsIntegratedFind) {
                                        d.findBar = new w.PDFFindBar(n.findBar, i, d.l10n)
                                    }
                                    d.pdfDocumentProperties = new b.PDFDocumentProperties(n.documentProperties, d.overlayManager, i, d.l10n);
                                    d.pdfCursorTools = new p.PDFCursorTools({
                                        container: c,
                                        eventBus: i,
                                        cursorToolOnLoad: k.AppOptions.get("cursorToolOnLoad")
                                    });
                                    d.toolbar = new V.Toolbar(n.toolbar, i, d.l10n);
                                    d.secondaryToolbar = new B.SecondaryToolbar(n.secondaryToolbar, c, i);
                                    if (d.supportsFullscreen) {
                                        d.pdfPresentationMode = new T.PDFPresentationMode({
                                            container: c,
                                            pdfViewer: d.pdfViewer,
                                            eventBus: i
                                        })
                                    }
                                    d.passwordPrompt = new g.PasswordPrompt(n.passwordOverlay, d.overlayManager, d.l10n, d.isViewerEmbedded);
                                    d.pdfOutlineViewer = new L.PDFOutlineViewer({
                                        container: n.sidebar.outlineView,
                                        eventBus: i,
                                        linkService: o
                                    });
                                    d.pdfAttachmentViewer = new y.PDFAttachmentViewer({
                                        container: n.sidebar.attachmentsView,
                                        eventBus: i,
                                        downloadManager: s
                                    });
                                    d.pdfLayerViewer = new x.PDFLayerViewer({
                                        container: n.sidebar.layersView,
                                        eventBus: i,
                                        l10n: d.l10n
                                    });
                                    d.pdfSidebar = new M.PDFSidebar({
                                        elements: n.sidebar,
                                        pdfViewer: d.pdfViewer,
                                        pdfThumbnailViewer: d.pdfThumbnailViewer,
                                        eventBus: i,
                                        l10n: d.l10n
                                    });
                                    d.pdfSidebar.onToggled = d.forceRendering.bind(d);
                                    d.pdfSidebarResizer = new A.PDFSidebarResizer(n.sidebarResizer, i, d.l10n);
                                case 37:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            run: function e(t) {
                this.initialize(t).then(se)
            },
            get initialized() {
                return this._initializedCapability.settled
            },
            get initializedPromise() {
                return this._initializedCapability.promise
            },
            zoomIn: function e(t) {
                if (this.pdfViewer.isInPresentationMode) {
                    return
                }
                this.pdfViewer.increaseScale(t)
            },
            zoomOut: function e(t) {
                if (this.pdfViewer.isInPresentationMode) {
                    return
                }
                this.pdfViewer.decreaseScale(t)
            },
            zoomReset: function e() {
                if (this.pdfViewer.isInPresentationMode) {
                    return
                }
                this.pdfViewer.currentScaleValue = S.DEFAULT_SCALE_VALUE
            },
            get pagesCount() {
                return this.pdfDocument ? this.pdfDocument.numPages : 0
            },
            get page() {
                return this.pdfViewer.currentPageNumber
            },
            set page(e) {
                this.pdfViewer.currentPageNumber = e
            },
            get supportsPrinting() {
                return Ye.instance.supportsPrinting
            },
            get supportsFullscreen() {
                return (0, m.shadow)(this, "supportsFullscreen", document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled)
            },
            get supportsIntegratedFind() {
                return this.externalServices.supportsIntegratedFind
            },
            get supportsDocumentFonts() {
                return this.externalServices.supportsDocumentFonts
            },
            get loadingBar() {
                var e = new S.ProgressBar("#loadingBar");
                return (0, m.shadow)(this, "loadingBar", e)
            },
            get supportedMouseWheelZoomModifierKeys() {
                return this.externalServices.supportedMouseWheelZoomModifierKeys
            },
            initPassiveLoading: function e() {
                throw new Error("Not implemented: initPassiveLoading")
            },
            setTitleUsingUrl: function e() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this.url = t;
                this.baseUrl = t.split("#")[0];
                if (n) {
                    this._downloadUrl = n === t ? this.baseUrl : n.split("#")[0]
                }
                var r = (0, m.getPdfFilenameFromUrl)(t, "");
                if (!r) {
                    try {
                        r = decodeURIComponent((0, m.getFilenameFromUrl)(t)) || t
                    } catch (e) {
                        r = t
                    }
                }
                this.setTitle(r)
            },
            setTitle: function e(t) {
                if (this.isViewerEmbedded) {
                    return
                }
                document.title = t
            },
            get _docFilename() {
                return this._contentDispositionFilename || (0, m.getPdfFilenameFromUrl)(this.url)
            },
            _hideViewBookmark: function e() {
                var t = this.appConfig,
                    n = t.toolbar,
                    r = t.secondaryToolbar;
                n.viewBookmark.hidden = true;
                r.viewBookmarkButton.hidden = true
            },
            _cancelIdleCallbacks: function e() {
                if (!this._idleCallbacks.size) {
                    return
                }
                var t = F(this._idleCallbacks),
                    n;
                try {
                    for (t.s(); !(n = t.n()).done;) {
                        var r = n.value;
                        window.cancelIdleCallback(r)
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                this._idleCallbacks.clear()
            },
            close: function e() {
                var s = this;
                return U(P["default"].mark(function e() {
                    var n, r, i;
                    var a, o;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    s._unblockDocumentLoadEvent();
                                    s._hideViewBookmark();
                                    a = s.appConfig.errorWrapper.container;
                                    a.hidden = true;
                                    if (s.pdfLoadingTask) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    if (!(((n = s.pdfDocument) === null || n === void 0 ? void 0 : n.annotationStorage.size) > 0 && s._annotationStorageModified)) {
                                        t.next = 14;
                                        break
                                    }
                                    t.prev = 7;
                                    t.next = 10;
                                    return s.save({
                                        sourceEventType: "save"
                                    });
                                case 10:
                                    t.next = 14;
                                    break;
                                case 12:
                                    t.prev = 12;
                                    t.t0 = t["catch"](7);
                                case 14:
                                    o = [];
                                    o.push(s.pdfLoadingTask.destroy());
                                    s.pdfLoadingTask = null;
                                    if (s.pdfDocument) {
                                        s.pdfDocument = null;
                                        s.pdfThumbnailViewer.setDocument(null);
                                        s.pdfViewer.setDocument(null);
                                        s.pdfLinkService.setDocument(null);
                                        s.pdfDocumentProperties.setDocument(null)
                                    }
                                    s.pdfLinkService.externalLinkEnabled = true;
                                    s._fellback = false;
                                    s.store = null;
                                    s.isInitialViewSet = false;
                                    s.downloadComplete = false;
                                    s.url = "";
                                    s.baseUrl = "";
                                    s._downloadUrl = "";
                                    s.documentInfo = null;
                                    s.metadata = null;
                                    s._contentDispositionFilename = null;
                                    s._contentLength = null;
                                    s._saveInProgress = false;
                                    s._docStats = null;
                                    s._cancelIdleCallbacks();
                                    o.push(s.pdfScriptingManager.destroyPromise);
                                    s.pdfSidebar.reset();
                                    s.pdfOutlineViewer.reset();
                                    s.pdfAttachmentViewer.reset();
                                    s.pdfLayerViewer.reset();
                                    (r = s.pdfHistory) === null || r === void 0 ? void 0 : r.reset();
                                    (i = s.findBar) === null || i === void 0 ? void 0 : i.reset();
                                    s.toolbar.reset();
                                    s.secondaryToolbar.reset();
                                    if (typeof PDFBug !== "undefined") {
                                        PDFBug.cleanup()
                                    }
                                    t.next = 45;
                                    return Promise.all(o);
                                case 45:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e, null, [[7, 12]])
                }))()
            },
            open: function e(c, f) {
                var d = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u, l;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    if (!d.pdfLoadingTask) {
                                        t.next = 3;
                                        break
                                    }
                                    t.next = 3;
                                    return d.close();
                                case 3:
                                    n = k.AppOptions.getAll(k.OptionKind.WORKER);
                                    for (r in n) {
                                        m.GlobalWorkerOptions[r] = n[r]
                                    }
                                    i = Object.create(null);
                                    if (typeof c === "string") {
                                        d.setTitleUsingUrl(c, c);
                                        i.url = c
                                    } else if (c && "byteLength" in c) {
                                        i.data = c
                                    } else if (c.url && c.originalUrl) {
                                        d.setTitleUsingUrl(c.originalUrl, c.url);
                                        i.url = c.url
                                    }
                                    a = k.AppOptions.getAll(k.OptionKind.API);
                                    for (o in a) {
                                        s = a[o];
                                        if (o === "docBaseUrl" && !s) {}
                                        i[o] = s
                                    }
                                    if (f) {
                                        for (u in f) {
                                            i[u] = f[u]
                                        }
                                    }
                                    l = (0, m.getDocument)(i);
                                    d.pdfLoadingTask = l;
                                    l.onPassword = function (e, t) {
                                        d.pdfLinkService.externalLinkEnabled = false;
                                        d.passwordPrompt.setUpdateCallback(e, t);
                                        d.passwordPrompt.open()
                                    };
                                    l.onProgress = function (e) {
                                        var t = e.loaded,
                                            n = e.total;
                                        d.progress(t / n)
                                    };
                                    l.onUnsupportedFeature = d.fallback.bind(d);
                                    return t.abrupt("return", l.promise.then(function (e) {
                                        d.load(e)
                                    }, function (t) {
                                        if (l !== d.pdfLoadingTask) {
                                            return undefined
                                        }
                                        var e = "loading_error";
                                        if (t instanceof m.InvalidPDFException) {
                                            e = "invalid_file_error"
                                        } else if (t instanceof m.MissingPDFException) {
                                            e = "missing_file_error"
                                        } else if (t instanceof m.UnexpectedResponseException) {
                                            e = "unexpected_response_error"
                                        }
                                        return d.l10n.get(e).then(function (e) {
                                            d._documentError(e, {
                                                message: t === null || t === void 0 ? void 0 : t.message
                                            });
                                            throw t
                                        })
                                    }));
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _ensureDownloadComplete: function e() {
                if (this.pdfDocument && this.downloadComplete) {
                    return
                }
                throw new Error("PDF document not downloaded.")
            },
            download: function e() {
                var l = arguments,
                    c = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    n = l.length > 0 && l[0] !== undefined ? l[0] : {}, r = n.sourceEventType, i = r === void 0 ? "download" : r;
                                    a = c._downloadUrl, o = c._docFilename;
                                    t.prev = 2;
                                    c._ensureDownloadComplete();
                                    t.next = 6;
                                    return c.pdfDocument.getData();
                                case 6:
                                    s = t.sent;
                                    u = new Blob([s], {
                                        type: "application/pdf"
                                    });
                                    t.next = 10;
                                    return c.downloadManager.download(u, a, o, i);
                                case 10:
                                    t.next = 16;
                                    break;
                                case 12:
                                    t.prev = 12;
                                    t.t0 = t["catch"](2);
                                    t.next = 16;
                                    return c.downloadManager.downloadUrl(a, o);
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e, null, [[2, 12]])
                }))()
            },
            save: function e() {
                var l = arguments,
                    c = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    n = l.length > 0 && l[0] !== undefined ? l[0] : {}, r = n.sourceEventType, i = r === void 0 ? "download" : r;
                                    if (!c._saveInProgress) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    c._saveInProgress = true;
                                    t.next = 6;
                                    return c.pdfScriptingManager.dispatchWillSave();
                                case 6:
                                    a = c._downloadUrl, o = c._docFilename;
                                    t.prev = 7;
                                    c._ensureDownloadComplete();
                                    t.next = 11;
                                    return c.pdfDocument.saveDocument();
                                case 11:
                                    s = t.sent;
                                    u = new Blob([s], {
                                        type: "application/pdf"
                                    });
                                    t.next = 15;
                                    return c.downloadManager.download(u, a, o, i);
                                case 15:
                                    t.next = 22;
                                    break;
                                case 17:
                                    t.prev = 17;
                                    t.t0 = t["catch"](7);
                                    console.error("Error when saving the document: ".concat(t.t0.message));
                                    t.next = 22;
                                    return c.download({
                                        sourceEventType: i
                                    });
                                case 22:
                                    t.prev = 22;
                                    t.next = 25;
                                    return c.pdfScriptingManager.dispatchDidSave();
                                case 25:
                                    c._saveInProgress = false;
                                    return t.finish(22);
                                case 27:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e, null, [[7, 17, 22, 27]])
                }))()
            },
            downloadOrSave: function e(t) {
                var n;
                if (((n = this.pdfDocument) === null || n === void 0 ? void 0 : n.annotationStorage.size) > 0) {
                    this.save(t)
                } else {
                    this.download(t)
                }
            },
            fallback: function e(t) {
                var n = this;
                this.externalServices.reportTelemetry({
                    type: "unsupportedFeature",
                    featureId: t
                });
                if (this._fellback) {
                    return
                }
                this._fellback = true;
                this.externalServices.fallback({
                    featureId: t,
                    url: this.baseUrl
                }).then(function (e) {
                    if (!e) {
                        return
                    }
                    n.download({
                        sourceEventType: "download"
                    })
                })
            },
            _documentError: function e(t) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this._unblockDocumentLoadEvent();
                this._otherError(t, n)
            },
            _otherError: function e(t) {
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var r = [this.l10n.get("error_version_info", {
                    version: m.version || "?",
                    build: m.build || "?"
                })];
                if (n) {
                    r.push(this.l10n.get("error_message", {
                        message: n.message
                    }));
                    if (n.stack) {
                        r.push(this.l10n.get("error_stack", {
                            stack: n.stack
                        }))
                    } else {
                        if (n.filename) {
                            r.push(this.l10n.get("error_file", {
                                file: n.filename
                            }))
                        }
                        if (n.lineNumber) {
                            r.push(this.l10n.get("error_line", {
                                line: n.lineNumber
                            }))
                        }
                    }
                }
                var i = this.appConfig.errorWrapper;
                var a = i.container;
                a.hidden = false;
                var o = i.errorMessage;
                o.textContent = t;
                var s = i.closeButton;
                s.onclick = function () {
                    a.hidden = true
                };
                var u = i.errorMoreInfo;
                var l = i.moreInfoButton;
                var c = i.lessInfoButton;
                l.onclick = function () {
                    u.hidden = false;
                    l.hidden = true;
                    c.hidden = false;
                    u.style.height = u.scrollHeight + "px"
                };
                c.onclick = function () {
                    u.hidden = true;
                    l.hidden = false;
                    c.hidden = true
                };
                l.oncontextmenu = S.noContextMenuHandler;
                c.oncontextmenu = S.noContextMenuHandler;
                s.oncontextmenu = S.noContextMenuHandler;
                l.hidden = false;
                c.hidden = true;
                Promise.all(r).then(function (e) {
                    u.value = e.join("\n")
                })
            },
            progress: function e(t) {
                var n = this;
                if (this.downloadComplete) {
                    return
                }
                var r = Math.round(t * 100);
                if (r > this.loadingBar.percent || isNaN(r)) {
                    this.loadingBar.percent = r;
                    var i = this.pdfDocument ? this.pdfDocument.loadingParams.disableAutoFetch : k.AppOptions.get("disableAutoFetch");
                    if (i && r) {
                        if (this.disableAutoFetchLoadingBarTimeout) {
                            clearTimeout(this.disableAutoFetchLoadingBarTimeout);
                            this.disableAutoFetchLoadingBarTimeout = null
                        }
                        this.loadingBar.show();
                        this.disableAutoFetchLoadingBarTimeout = setTimeout(function () {
                            n.loadingBar.hide();
                            n.disableAutoFetchLoadingBarTimeout = null
                        }, G)
                    }
                }
            },
            load: function e(y) {
                var b = this;
                this.pdfDocument = y;
                y.getDownloadInfo().then(function (e) {
                    var t = e.length;
                    b._contentLength = t;
                    b.downloadComplete = true;
                    b.loadingBar.hide();
                    a.then(function () {
                        b.eventBus.dispatch("documentloaded", {
                            source: b
                        })
                    })
                });
                var t = y.getPageLayout()["catch"](function () {});
                var n = y.getPageMode()["catch"](function () {});
                var r = y.getOpenAction()["catch"](function () {});
                this.toolbar.setPagesCount(y.numPages, false);
                this.secondaryToolbar.setPagesCount(y.numPages);
                var i;
                i = null;
                this.pdfLinkService.setDocument(y, i);
                this.pdfDocumentProperties.setDocument(y, this.url);
                var w = this.pdfViewer;
                w.setDocument(y);
                var a = w.firstPagePromise,
                    o = w.onePageRendered,
                    _ = w.pagesPromise;
                var s = this.pdfThumbnailViewer;
                s.setDocument(y);
                var u = (this.store = new l.ViewHistory(y.fingerprints[0])).getMultiple({
                    page: null,
                    zoom: S.DEFAULT_SCALE_VALUE,
                    scrollLeft: "0",
                    scrollTop: "0",
                    rotation: null,
                    sidebarView: S.SidebarView.UNKNOWN,
                    scrollMode: S.ScrollMode.UNKNOWN,
                    spreadMode: S.SpreadMode.UNKNOWN
                })["catch"](function () {
                    return Object.create(null)
                });
                a.then(function (e) {
                    b.loadingBar.setWidth(b.appConfig.viewerContainer);
                    b._initializeAnnotationStorageCallbacks(y);
                    Promise.all([S.animationStarted, u, t, n, r]).then(function () {
                        var t = U(P["default"].mark(function e(n) {
                            var r, i, a, o, s, u, l, c, f, d, h, p, v, g, m;
                            return P["default"].wrap(function e(t) {
                                while (1) {
                                    switch (t.prev = t.next) {
                                        case 0:
                                            r = R(n, 5), i = r[0], a = r[1], o = r[2], s = r[3], u = r[4];
                                            l = k.AppOptions.get("viewOnLoad");
                                            b._initializePdfHistory({
                                                fingerprint: y.fingerprints[0],
                                                viewOnLoad: l,
                                                initialDest: u === null || u === void 0 ? void 0 : u.dest
                                            });
                                            c = b.initialBookmark;
                                            f = k.AppOptions.get("defaultZoomValue");
                                            d = f ? "zoom=".concat(f) : null;
                                            h = null;
                                            p = k.AppOptions.get("sidebarViewOnLoad");
                                            v = k.AppOptions.get("scrollModeOnLoad");
                                            g = k.AppOptions.get("spreadModeOnLoad");
                                            if (a.page && l !== q.INITIAL) {
                                                d = "page=".concat(a.page, "&zoom=").concat(f || a.zoom, ",") + "".concat(a.scrollLeft, ",").concat(a.scrollTop);
                                                h = parseInt(a.rotation, 10);
                                                if (p === S.SidebarView.UNKNOWN) {
                                                    p = a.sidebarView | 0
                                                }
                                                if (v === S.ScrollMode.UNKNOWN) {
                                                    v = a.scrollMode | 0
                                                }
                                                if (g === S.SpreadMode.UNKNOWN) {
                                                    g = a.spreadMode | 0
                                                }
                                            }
                                            if (s && p === S.SidebarView.UNKNOWN) {
                                                p = (0, S.apiPageModeToSidebarView)(s)
                                            }
                                            if (o && v === S.ScrollMode.UNKNOWN && g === S.SpreadMode.UNKNOWN) {
                                                m = (0, S.apiPageLayoutToViewerModes)(o);
                                                g = m.spreadMode
                                            }
                                            b.setInitialView(d, {
                                                rotation: h,
                                                sidebarView: p,
                                                scrollMode: v,
                                                spreadMode: g
                                            });
                                            b.eventBus.dispatch("documentinit", {
                                                source: b
                                            });
                                            if (!b.isViewerEmbedded) {
                                                w.focus()
                                            }
                                            t.next = 18;
                                            return Promise.race([_, new Promise(function (e) {
                                                setTimeout(e, X)
                                            })]);
                                        case 18:
                                            if (!(!c && !d)) {
                                                t.next = 20;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 20:
                                            if (!w.hasEqualPageSizes) {
                                                t.next = 22;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 22:
                                            b.initialBookmark = c;
                                            w.currentScaleValue = w.currentScaleValue;
                                            b.setInitialView(d);
                                        case 25:
                                        case "end":
                                            return t.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }())["catch"](function () {
                        b.setInitialView()
                    }).then(function () {
                        w.update()
                    })
                });
                _.then(function () {
                    b._unblockDocumentLoadEvent();
                    b._initializeAutoPrint(y, r)
                }, function (t) {
                    b.l10n.get("loading_error").then(function (e) {
                        b._documentError(e, {
                            message: t === null || t === void 0 ? void 0 : t.message
                        })
                    })
                });
                o.then(function (e) {
                    b.externalServices.reportTelemetry({
                        type: "pageInfo",
                        timestamp: e.timestamp
                    });
                    y.getOutline().then(function (e) {
                        if (y !== b.pdfDocument) {
                            return
                        }
                        b.pdfOutlineViewer.render({
                            outline: e,
                            pdfDocument: y
                        })
                    });
                    y.getAttachments().then(function (e) {
                        if (y !== b.pdfDocument) {
                            return
                        }
                        b.pdfAttachmentViewer.render({
                            attachments: e
                        })
                    });
                    w.optionalContentConfigPromise.then(function (e) {
                        if (y !== b.pdfDocument) {
                            return
                        }
                        b.pdfLayerViewer.render({
                            optionalContentConfig: e,
                            pdfDocument: y
                        })
                    });
                    if ("requestIdleCallback" in window) {
                        var t = window.requestIdleCallback(function () {
                            b._collectTelemetry(y);
                            b._idleCallbacks["delete"](t)
                        }, {
                            timeout: 1e3
                        });
                        b._idleCallbacks.add(t)
                    }
                });
                this._initializePageLabels(y);
                this._initializeMetadata(y)
            },
            _scriptingDocProperties: function e(i) {
                var a = this;
                return U(P["default"].mark(function e() {
                    var n, r;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    if (a.documentInfo) {
                                        t.next = 5;
                                        break
                                    }
                                    t.next = 3;
                                    return new Promise(function (e) {
                                        a.eventBus._on("metadataloaded", e, {
                                            once: true
                                        })
                                    });
                                case 3:
                                    if (!(i !== a.pdfDocument)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 5:
                                    if (a._contentLength) {
                                        t.next = 10;
                                        break
                                    }
                                    t.next = 8;
                                    return new Promise(function (e) {
                                        a.eventBus._on("documentloaded", e, {
                                            once: true
                                        })
                                    });
                                case 8:
                                    if (!(i !== a.pdfDocument)) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 10:
                                    return t.abrupt("return", o(o({}, a.documentInfo), {}, {
                                        baseURL: a.baseUrl,
                                        filesize: a._contentLength,
                                        filename: a._docFilename,
                                        metadata: (n = a.metadata) === null || n === void 0 ? void 0 : n.getRaw(),
                                        authors: (r = a.metadata) === null || r === void 0 ? void 0 : r.get("dc:creator"),
                                        numPages: a.pagesCount,
                                        URL: a.url
                                    }));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _collectTelemetry: function e(i) {
                var a = this;
                return U(P["default"].mark(function e() {
                    var n, r;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    t.next = 2;
                                    return a.pdfDocument.getMarkInfo();
                                case 2:
                                    n = t.sent;
                                    if (!(i !== a.pdfDocument)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    r = (n === null || n === void 0 ? void 0 : n.Marked) || false;
                                    a.externalServices.reportTelemetry({
                                        type: "tagged",
                                        tagged: r
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _initializeAutoPrint: function e(c, f) {
                var d = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u, l;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    t.next = 2;
                                    return Promise.all([f, !d.pdfViewer.enableScripting ? c.getJavaScript() : null]);
                                case 2:
                                    n = t.sent;
                                    r = R(n, 2);
                                    i = r[0];
                                    a = r[1];
                                    if (!(c !== d.pdfDocument)) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    o = false;
                                    if ((i === null || i === void 0 ? void 0 : i.action) === "Print") {
                                        o = true
                                    }
                                    if (!a) {
                                        t.next = 31;
                                        break
                                    }
                                    a.some(function (e) {
                                        if (!e) {
                                            return false
                                        }
                                        console.warn("Warning: JavaScript support is not enabled");
                                        d.fallback(m.UNSUPPORTED_FEATURES.javaScript);
                                        return true
                                    });
                                    if (o) {
                                        t.next = 31;
                                        break
                                    }
                                    s = F(a);
                                    t.prev = 14;
                                    s.s();
                                case 16:
                                    if ((u = s.n()).done) {
                                        t.next = 23;
                                        break
                                    }
                                    l = u.value;
                                    if (!(l && S.AutoPrintRegExp.test(l))) {
                                        t.next = 21;
                                        break
                                    }
                                    o = true;
                                    return t.abrupt("break", 23);
                                case 21:
                                    t.next = 16;
                                    break;
                                case 23:
                                    t.next = 28;
                                    break;
                                case 25:
                                    t.prev = 25;
                                    t.t0 = t["catch"](14);
                                    s.e(t.t0);
                                case 28:
                                    t.prev = 28;
                                    s.f();
                                    return t.finish(28);
                                case 31:
                                    if (o) {
                                        d.triggerPrinting()
                                    }
                                    case 32:
                                    case "end":
                                        return t.stop()
                            }
                        }
                    }, e, null, [[14, 25, 28, 31]])
                }))()
            },
            _initializeMetadata: function e(v) {
                var g = this;
                return U(P["default"].mark(function e() {
                    var n, r;
                    var i, a, o, s, u, l, c, f, d, h, p;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    t.next = 2;
                                    return v.getMetadata();
                                case 2:
                                    i = t.sent;
                                    a = i.info;
                                    o = i.metadata;
                                    s = i.contentDispositionFilename;
                                    u = i.contentLength;
                                    if (!(v !== g.pdfDocument)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 9:
                                    g.documentInfo = a;
                                    g.metadata = o;
                                    (n = g._contentDispositionFilename) !== null && n !== void 0 ? n : g._contentDispositionFilename = s;
                                    (r = g._contentLength) !== null && r !== void 0 ? r : g._contentLength = u;
                                    console.log("PDF ".concat(v.fingerprints[0], " [").concat(a.PDFFormatVersion, " ") + "".concat((a.Producer || "-").trim(), " / ").concat((a.Creator || "-").trim(), "] ") + "(PDF.js: ".concat(m.version || "-", ")"));
                                    l = a === null || a === void 0 ? void 0 : a.Title;
                                    c = o === null || o === void 0 ? void 0 : o.get("dc:title");
                                    if (c) {
                                        if (c !== "Untitled" && !/[\uFFF0-\uFFFF]/g.test(c)) {
                                            l = c
                                        }
                                    }
                                    if (l) {
                                        g.setTitle("".concat(l, " - ").concat(s || document.title))
                                    } else if (s) {
                                        g.setTitle(s)
                                    }
                                    if (a.IsXFAPresent && !a.IsAcroFormPresent && !v.isPureXfa) {
                                        if (v.loadingParams.enableXfa) {
                                            console.warn("Warning: XFA Foreground documents are not supported")
                                        } else {
                                            console.warn("Warning: XFA support is not enabled")
                                        }
                                        g.fallback(m.UNSUPPORTED_FEATURES.forms)
                                    } else if ((a.IsAcroFormPresent || a.IsXFAPresent) && !g.pdfViewer.renderForms) {
                                        console.warn("Warning: Interactive form support is not enabled");
                                        g.fallback(m.UNSUPPORTED_FEATURES.forms)
                                    }
                                    if (a.IsSignaturesPresent) {
                                        console.warn("Warning: Digital signatures validation is not supported");
                                        g.fallback(m.UNSUPPORTED_FEATURES.signatures)
                                    }
                                    f = "other";
                                    if (Q.includes(a.PDFFormatVersion)) {
                                        f = "v".concat(a.PDFFormatVersion.replace(".", "_"))
                                    }
                                    d = "other";
                                    if (a.Producer) {
                                        h = a.Producer.toLowerCase();
                                        Y.some(function (e) {
                                            if (!h.includes(e)) {
                                                return false
                                            }
                                            d = e.replace(/[ .-]/g, "_");
                                            return true
                                        })
                                    }
                                    p = null;
                                    if (a.IsXFAPresent) {
                                        p = "xfa"
                                    } else if (a.IsAcroFormPresent) {
                                        p = "acroform"
                                    }
                                    g.externalServices.reportTelemetry({
                                        type: "documentInfo",
                                        version: f,
                                        generator: d,
                                        formType: p
                                    });
                                    g.eventBus.dispatch("metadataloaded", {
                                        source: g
                                    });
                                case 28:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _initializePageLabels: function e(f) {
                var d = this;
                return U(P["default"].mark(function e() {
                    var n, r, i, a, o, s, u, l, c;
                    return P["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    t.next = 2;
                                    return f.getPageLabels();
                                case 2:
                                    n = t.sent;
                                    if (!(f !== d.pdfDocument)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (!(!n || k.AppOptions.get("disablePageLabels"))) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 7:
                                    r = n.length;
                                    i = 0, a = 0;
                                    o = 0;
                                case 10:
                                    if (!(o < r)) {
                                        t.next = 24;
                                        break
                                    }
                                    s = n[o];
                                    if (!(s === (o + 1).toString())) {
                                        t.next = 16;
                                        break
                                    }
                                    i++;
                                    t.next = 21;
                                    break;
                                case 16:
                                    if (!(s === "")) {
                                        t.next = 20;
                                        break
                                    }
                                    a++;
                                    t.next = 21;
                                    break;
                                case 20:
                                    return t.abrupt("break", 24);
                                case 21:
                                    o++;
                                    t.next = 10;
                                    break;
                                case 24:
                                    if (!(i >= r || a >= r)) {
                                        t.next = 26;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 26:
                                    u = d.pdfViewer, l = d.pdfThumbnailViewer, c = d.toolbar;
                                    u.setPageLabels(n);
                                    l.setPageLabels(n);
                                    c.setPagesCount(r, true);
                                    c.setPageNumber(u.currentPageNumber, u.currentPageLabel);
                                case 31:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            _initializePdfHistory: function e(t) {
                var n = t.fingerprint,
                    r = t.viewOnLoad,
                    i = t.initialDest,
                    a = i === void 0 ? null : i;
                if (!this.pdfHistory) {
                    return
                }
                this.pdfHistory.initialize({
                    fingerprint: n,
                    resetHistory: r === q.INITIAL,
                    updateUrl: k.AppOptions.get("historyUpdateUrl")
                });
                if (this.pdfHistory.initialBookmark) {
                    this.initialBookmark = this.pdfHistory.initialBookmark;
                    this.initialRotation = this.pdfHistory.initialRotation
                }
                if (a && !this.initialBookmark && r === q.UNKNOWN) {
                    this.initialBookmark = JSON.stringify(a);
                    this.pdfHistory.push({
                        explicitDest: a,
                        pageNumber: null
                    })
                }
            },
            _initializeAnnotationStorageCallbacks: function e(t) {
                var n = this;
                if (t !== this.pdfDocument) {
                    return
                }
                var r = t.annotationStorage;
                r.onSetModified = function () {
                    window.addEventListener("beforeunload", Qe);
                    n._annotationStorageModified = true
                };
                r.onResetModified = function () {
                    window.removeEventListener("beforeunload", Qe);
                    delete n._annotationStorageModified
                }
            },
            setInitialView: function e(t) {
                var r = this;
                var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    i = n.rotation,
                    a = n.sidebarView,
                    o = n.scrollMode,
                    s = n.spreadMode;
                var u = function e(t) {
                    if ((0, S.isValidRotation)(t)) {
                        r.pdfViewer.pagesRotation = t
                    }
                };
                var l = function e(t, n) {
                    if ((0, S.isValidScrollMode)(t)) {
                        r.pdfViewer.scrollMode = t
                    }
                    if ((0, S.isValidSpreadMode)(n)) {
                        r.pdfViewer.spreadMode = n
                    }
                };
                this.isInitialViewSet = true;
                this.pdfSidebar.setInitialView(a);
                l(o, s);
                if (this.initialBookmark) {
                    u(this.initialRotation);
                    delete this.initialRotation;
                    this.pdfLinkService.setHash(this.initialBookmark);
                    this.initialBookmark = null
                } else if (t) {
                    u(i);
                    this.pdfLinkService.setHash(t)
                }
                this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel);
                this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber);
                if (!this.pdfViewer.currentScaleValue) {
                    this.pdfViewer.currentScaleValue = S.DEFAULT_SCALE_VALUE
                }
            },
            _cleanup: function e() {
                if (!this.pdfDocument) {
                    return
                }
                this.pdfViewer.cleanup();
                this.pdfThumbnailViewer.cleanup();
                this.pdfDocument.cleanup(this.pdfViewer.renderer === S.RendererType.SVG)
            },
            forceRendering: function e() {
                this.pdfRenderingQueue.printing = !!this.printService;
                this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible;
                this.pdfRenderingQueue.renderHighestPriority()
            },
            beforePrint: function e() {
                var t = this;
                this.pdfScriptingManager.dispatchWillPrint();
                if (this.printService) {
                    return
                }
                if (!this.supportsPrinting) {
                    this.l10n.get("printing_not_supported").then(function (e) {
                        t._otherError(e)
                    });
                    return
                }
                if (!this.pdfViewer.pageViewsReady) {
                    this.l10n.get("printing_not_ready").then(function (e) {
                        window.alert(e)
                    });
                    return
                }
                var n = this.pdfViewer.getPagesOverview();
                var r = this.appConfig.printContainer;
                var i = k.AppOptions.get("printResolution");
                var a = this.pdfViewer.optionalContentConfigPromise;
                var o = Ye.instance.createPrintService(this.pdfDocument, n, r, i, a, this.l10n);
                this.printService = o;
                this.forceRendering();
                o.layout();
                this.externalServices.reportTelemetry({
                    type: "print"
                })
            },
            afterPrint: function e() {
                this.pdfScriptingManager.dispatchDidPrint();
                if (this.printService) {
                    var t;
                    this.printService.destroy();
                    this.printService = null;
                    (t = this.pdfDocument) === null || t === void 0 ? void 0 : t.annotationStorage.resetModified()
                }
                this.forceRendering()
            },
            rotatePages: function e(t) {
                this.pdfViewer.pagesRotation += t
            },
            requestPresentationMode: function e() {
                var t;
                (t = this.pdfPresentationMode) === null || t === void 0 ? void 0 : t.request()
            },
            triggerPrinting: function e() {
                if (!this.supportsPrinting) {
                    return
                }
            },
            bindEvents: function e() {
                var t = this.eventBus,
                    n = this._boundEvents;
                n.beforePrint = this.beforePrint.bind(this);
                n.afterPrint = this.afterPrint.bind(this);
                t._on("resize", me);
                t._on("hashchange", ye);
                t._on("beforeprint", n.beforePrint);
                t._on("afterprint", n.afterPrint);
                t._on("pagerendered", le);
                t._on("updateviewarea", pe);
                t._on("pagechanging", He);
                t._on("scalechanging", je);
                t._on("rotationchanging", Ue);
                t._on("sidebarviewchanged", he);
                t._on("pagemode", ce);
                t._on("namedaction", fe);
                t._on("presentationmodechanged", de);
                t._on("presentationmode", _e);
                t._on("firstpage", Pe);
                t._on("lastpage", Se);
                t._on("nextpage", ke);
                t._on("previouspage", Ee);
                t._on("zoomin", xe);
                t._on("zoomout", Ce);
                t._on("zoomreset", Le);
                t._on("pagenumberchanged", Te);
                t._on("scalechanged", Ie);
                t._on("rotatecw", Oe);
                t._on("rotateccw", Me);
                t._on("optionalcontentconfig", Ae);
                t._on("switchscrollmode", De);
                t._on("scrollmodechanged", ve);
                t._on("switchspreadmode", Ne);
                t._on("spreadmodechanged", ge);
                t._on("documentproperties", Be);
                t._on("findfromurlhash", Ve);
                t._on("updatefindmatchescount", Re);
                t._on("updatefindcontrolstate", Fe);
                if (k.AppOptions.get("pdfBug")) {
                    n.reportPageStatsPDFBug = oe;
                    t._on("pagerendered", n.reportPageStatsPDFBug);
                    t._on("pagechanging", n.reportPageStatsPDFBug)
                }
                t._on("fileinputchange", be);
                t._on("openfile", we)
            },
            bindWindowEvents: function e() {
                var t = this.eventBus,
                    n = this._boundEvents;
                n.windowResize = function () {
                    t.dispatch("resize", {
                        source: window
                    })
                };
                n.windowHashChange = function () {
                    t.dispatch("hashchange", {
                        source: window,
                        hash: document.location.hash.substring(1)
                    })
                };
                n.windowBeforePrint = function () {
                    t.dispatch("beforeprint", {
                        source: window
                    })
                };
                n.windowAfterPrint = function () {
                    t.dispatch("afterprint", {
                        source: window
                    })
                };
                n.windowUpdateFromSandbox = function (e) {
                    t.dispatch("updatefromsandbox", {
                        source: window,
                        detail: e.detail
                    })
                };
                window.addEventListener("visibilitychange", ze);
                window.addEventListener("wheel", Xe, {
                    passive: false
                });
                window.addEventListener("touchstart", Ke, {
                    passive: false
                });
                window.addEventListener("click", qe);
                window.addEventListener("keydown", Ze);
                window.addEventListener("resize", n.windowResize);
                window.addEventListener("hashchange", n.windowHashChange);
                window.addEventListener("beforeprint", n.windowBeforePrint);
                window.addEventListener("afterprint", n.windowAfterPrint);
                window.addEventListener("updatefromsandbox", n.windowUpdateFromSandbox)
            },
            unbindEvents: function e() {
                var t = this.eventBus,
                    n = this._boundEvents;
                t._off("resize", me);
                t._off("hashchange", ye);
                t._off("beforeprint", n.beforePrint);
                t._off("afterprint", n.afterPrint);
                t._off("pagerendered", le);
                t._off("updateviewarea", pe);
                t._off("pagechanging", He);
                t._off("scalechanging", je);
                t._off("rotationchanging", Ue);
                t._off("sidebarviewchanged", he);
                t._off("pagemode", ce);
                t._off("namedaction", fe);
                t._off("presentationmodechanged", de);
                t._off("presentationmode", _e);
                t._off("firstpage", Pe);
                t._off("lastpage", Se);
                t._off("nextpage", ke);
                t._off("previouspage", Ee);
                t._off("zoomin", xe);
                t._off("zoomout", Ce);
                t._off("zoomreset", Le);
                t._off("pagenumberchanged", Te);
                t._off("scalechanged", Ie);
                t._off("rotatecw", Oe);
                t._off("rotateccw", Me);
                t._off("optionalcontentconfig", Ae);
                t._off("switchscrollmode", De);
                t._off("scrollmodechanged", ve);
                t._off("switchspreadmode", Ne);
                t._off("spreadmodechanged", ge);
                t._off("documentproperties", Be);
                t._off("findfromurlhash", Ve);
                t._off("updatefindmatchescount", Re);
                t._off("updatefindcontrolstate", Fe);
                if (n.reportPageStatsPDFBug) {
                    t._off("pagerendered", n.reportPageStatsPDFBug);
                    t._off("pagechanging", n.reportPageStatsPDFBug);
                    n.reportPageStatsPDFBug = null
                }
                t._off("fileinputchange", be);
                t._off("openfile", we);
                n.beforePrint = null;
                n.afterPrint = null
            },
            unbindWindowEvents: function e() {
                var t = this._boundEvents;
                window.removeEventListener("visibilitychange", ze);
                window.removeEventListener("wheel", Xe, {
                    passive: false
                });
                window.removeEventListener("touchstart", Ke, {
                    passive: false
                });
                window.removeEventListener("click", qe);
                window.removeEventListener("keydown", Ze);
                window.removeEventListener("resize", t.windowResize);
                window.removeEventListener("hashchange", t.windowHashChange);
                window.removeEventListener("beforeprint", t.windowBeforePrint);
                window.removeEventListener("afterprint", t.windowAfterPrint);
                window.removeEventListener("updatefromsandbox", t.windowUpdateFromSandbox);
                t.windowResize = null;
                t.windowHashChange = null;
                t.windowBeforePrint = null;
                t.windowAfterPrint = null;
                t.windowUpdateFromSandbox = null
            },
            accumulateWheelTicks: function e(t) {
                if (this._wheelUnusedTicks > 0 && t < 0 || this._wheelUnusedTicks < 0 && t > 0) {
                    this._wheelUnusedTicks = 0
                }
                this._wheelUnusedTicks += t;
                var n = Math.sign(this._wheelUnusedTicks) * Math.floor(Math.abs(this._wheelUnusedTicks));
                this._wheelUnusedTicks -= n;
                return n
            },
            _unblockDocumentLoadEvent: function e() {
                if (document.blockUnblockOnload) {
                    document.blockUnblockOnload(false)
                }
                this._unblockDocumentLoadEvent = function () {}
            },
            _reportDocumentStatsTelemetry: function e() {
                var t = this.pdfDocument.stats;
                if (t !== this._docStats) {
                    this._docStats = t;
                    this.externalServices.reportTelemetry({
                        type: "documentStats",
                        stats: t
                    })
                }
            },
            get scriptingReady() {
                return this.pdfScriptingManager.ready
            }
        };
        t.PDFViewerApplication = J;
        var ee; {
            var te = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
            ee = function e(t) {
                if (t === undefined) {
                    return
                }
                try {
                    var n = new URL(window.location.href).origin || "null";
                    if (te.includes(n)) {
                        return
                    }
                    var r = new URL(t, window.location.href),
                        i = r.origin,
                        a = r.protocol;
                    if (i !== n && a !== "blob:") {
                        throw new Error("file origin does not match viewer's")
                    }
                } catch (t) {
                    J.l10n.get("loading_error").then(function (e) {
                        J._documentError(e, {
                            message: t === null || t === void 0 ? void 0 : t.message
                        })
                    });
                    throw t
                }
            }
        }

        function ne() {
            return re.apply(this, arguments)
        }

        function re() {
            re = U(P["default"].mark(function e() {
                return P["default"].wrap(function e(t) {
                    while (1) {
                        switch (t.prev = t.next) {
                            case 0:
                                if (!m.GlobalWorkerOptions.workerSrc) {
                                    m.GlobalWorkerOptions.workerSrc = k.AppOptions.get("workerSrc")
                                }
                                t.next = 3;
                                return (0, m.loadScript)(m.PDFWorker.workerSrc);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }
                }, e)
            }));
            return re.apply(this, arguments)
        }

        function ie(e) {
            return ae.apply(this, arguments)
        }

        function ae() {
            ae = U(P["default"].mark(function e(n) {
                var r, i, a;
                return P["default"].wrap(function e(t) {
                    while (1) {
                        switch (t.prev = t.next) {
                            case 0:
                                r = J.appConfig, i = r.debuggerScriptPath, a = r.mainContainer;
                                t.next = 3;
                                return (0, m.loadScript)(i);
                            case 3:
                                PDFBug.init({
                                    OPS: m.OPS
                                }, a, n);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }
                }, e)
            }));
            return ae.apply(this, arguments)
        }

        function oe(e) {
            var t;
            var n = e.pageNumber;
            if (typeof Stats === "undefined" || !Stats.enabled) {
                return
            }
            var r = J.pdfViewer.getPageView(n - 1);
            var i = r === null || r === void 0 ? void 0 : (t = r.pdfPage) === null || t === void 0 ? void 0 : t.stats;
            if (!i) {
                return
            }
            Stats.add(n, i)
        }

        function se() {
            var e;
            var t = J.appConfig;
            var n;
            var r = document.location.search.substring(1);
            var i = (0, S.parseQueryString)(r);
            n = (e = i.get("file")) !== null && e !== void 0 ? e : k.AppOptions.get("defaultUrl");
            ee(n);
            var a = document.createElement("input");
            a.id = t.openFileInputName;
            a.className = "fileInput";
            a.setAttribute("type", "file");
            a.oncontextmenu = S.noContextMenuHandler;
            document.body.appendChild(a);
            if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
                t.toolbar.openFile.hidden = true;
                t.secondaryToolbar.openFileButton.hidden = true
            } else {
                a.value = null
            }
            a.addEventListener("change", function (e) {
                var t = e.target.files;
                if (!t || t.length === 0) {
                    return
                }
                J.eventBus.dispatch("fileinputchange", {
                    source: this,
                    fileInput: e.target
                })
            });
            t.mainContainer.addEventListener("dragover", function (e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move"
            });
            t.mainContainer.addEventListener("drop", function (e) {
                e.preventDefault();
                var t = e.dataTransfer.files;
                if (!t || t.length === 0) {
                    return
                }
                J.eventBus.dispatch("fileinputchange", {
                    source: this,
                    fileInput: e.dataTransfer
                })
            });
            if (!J.supportsDocumentFonts) {
                k.AppOptions.set("disableFontFace", true);
                J.l10n.get("web_fonts_disabled").then(function (e) {
                    console.warn(e)
                })
            }
            if (!J.supportsPrinting) {
                t.toolbar.print.classList.add("hidden");
                t.secondaryToolbar.printButton.classList.add("hidden")
            }
            if (!J.supportsFullscreen) {
                t.toolbar.presentationModeButton.classList.add("hidden");
                t.secondaryToolbar.presentationModeButton.classList.add("hidden")
            }
            if (J.supportsIntegratedFind) {
                t.toolbar.viewFind.classList.add("hidden")
            }
            t.mainContainer.addEventListener("transitionend", function (e) {
                if (e.target === this) {
                    J.eventBus.dispatch("resize", {
                        source: this
                    })
                }
            }, true);
            try {
                ue(n)
            } catch (t) {
                J.l10n.get("loading_error").then(function (e) {
                    J._documentError(e, t)
                })
            }
        }

        function ue(e) {
            if (e) {
                J.open(e)
            } else {
                J._hideViewBookmark()
            }
        }

        function le(e) {
            var t = e.pageNumber,
                n = e.error;
            if (t === J.page) {
                J.toolbar.updateLoadingIndicatorState(false)
            }
            if (J.pdfSidebar.isThumbnailViewVisible) {
                var r = J.pdfViewer.getPageView(t - 1);
                var i = J.pdfThumbnailViewer.getThumbnail(t - 1);
                if (r && i) {
                    i.setImage(r)
                }
            }
            if (n) {
                J.l10n.get("rendering_error").then(function (e) {
                    J._otherError(e, n)
                })
            }
            J._reportDocumentStatsTelemetry()
        }

        function ce(e) {
            var t = e.mode;
            var n;
            switch (t) {
                case "thumbs":
                    n = S.SidebarView.THUMBS;
                    break;
                case "bookmarks":
                case "outline":
                    n = S.SidebarView.OUTLINE;
                    break;
                case "attachments":
                    n = S.SidebarView.ATTACHMENTS;
                    break;
                case "layers":
                    n = S.SidebarView.LAYERS;
                    break;
                case "none":
                    n = S.SidebarView.NONE;
                    break;
                default:
                    console.error('Invalid "pagemode" hash parameter: ' + t);
                    return
            }
            J.pdfSidebar.switchView(n, true)
        }

        function fe(e) {
            switch (e.action) {
                case "GoToPage":
                    J.appConfig.toolbar.pageNumber.select();
                    break;
                case "Find":
                    if (!J.supportsIntegratedFind) {
                        J.findBar.toggle()
                    }
                    break;
                case "Print":
                    break;
                case "SaveAs":
                    break
            }
        }

        function de(e) {
            J.pdfViewer.presentationModeState = e.state
        }

        function he(e) {
            J.pdfRenderingQueue.isThumbnailViewEnabled = J.pdfSidebar.isThumbnailViewVisible;
            if (J.isInitialViewSet) {
                var t;
                (t = J.store) === null || t === void 0 ? void 0 : t.set("sidebarView", e.view)["catch"](function () {})
            }
        }

        function pe(e) {
            var t = e.location;
            if (J.isInitialViewSet) {
                var n;
                (n = J.store) === null || n === void 0 ? void 0 : n.setMultiple({
                    page: t.pageNumber,
                    zoom: t.scale,
                    scrollLeft: t.left,
                    scrollTop: t.top,
                    rotation: t.rotation
                })["catch"](function () {})
            }
            var r = J.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
            J.appConfig.toolbar.viewBookmark.href = r;
            J.appConfig.secondaryToolbar.viewBookmarkButton.href = r;
            var i = J.pdfViewer.getPageView(J.page - 1);
            var a = (i === null || i === void 0 ? void 0 : i.renderingState) !== S.RenderingStates.FINISHED;
            J.toolbar.updateLoadingIndicatorState(a)
        }

        function ve(e) {
            if (J.isInitialViewSet) {
                var t;
                (t = J.store) === null || t === void 0 ? void 0 : t.set("scrollMode", e.mode)["catch"](function () {})
            }
        }

        function ge(e) {
            if (J.isInitialViewSet) {
                var t;
                (t = J.store) === null || t === void 0 ? void 0 : t.set("spreadMode", e.mode)["catch"](function () {})
            }
        }

        function me() {
            var e = J.pdfDocument,
                t = J.pdfViewer;
            if (!e) {
                return
            }
            var n = t.currentScaleValue;
            if (n === "auto" || n === "page-fit" || n === "page-width") {
                t.currentScaleValue = n
            }
            t.update()
        }

        function ye(e) {
            var t;
            var n = e.hash;
            if (!n) {
                return
            }
            if (!J.isInitialViewSet) {
                J.initialBookmark = n
            } else if (!((t = J.pdfHistory) !== null && t !== void 0 && t.popStateInProgress)) {
                J.pdfLinkService.setHash(n)
            }
        }
        var be, we; {
            be = function e(t) {
                var n;
                if ((n = J.pdfViewer) !== null && n !== void 0 && n.isInPresentationMode) {
                    return
                }
                var r = t.fileInput.files[0];
                if (!k.compatibilityParams.disableCreateObjectURL) {
                    var i = URL.createObjectURL(r);
                    if (r.name) {
                        i = {
                            url: i,
                            originalUrl: r.name
                        }
                    }
                    J.open(i)
                } else {
                    J.setTitleUsingUrl(r.name);
                    var a = new FileReader;
                    a.onload = function e(t) {
                        var n = t.target.result;
                        J.open(new Uint8Array(n))
                    };
                    a.readAsArrayBuffer(r)
                }
            };
            we = function e(t) {
                var n = J.appConfig.openFileInputName;
                document.getElementById(n).click()
            }
        }

        function _e() {
            J.requestPresentationMode()
        }

        function Pe() {
            if (J.pdfDocument) {
                J.page = 1
            }
        }

        function Se() {
            if (J.pdfDocument) {
                J.page = J.pagesCount
            }
        }

        function ke() {
            J.pdfViewer.nextPage()
        }

        function Ee() {
            J.pdfViewer.previousPage()
        }

        function xe() {
            J.zoomIn()
        }

        function Ce() {
            J.zoomOut()
        }

        function Le() {
            J.zoomReset()
        }

        function Te(e) {
            var t = J.pdfViewer;
            if (e.value !== "") {
                J.pdfLinkService.goToPage(e.value)
            }
            if (e.value !== t.currentPageNumber.toString() && e.value !== t.currentPageLabel) {
                J.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel)
            }
        }

        function Ie(e) {
            J.pdfViewer.currentScaleValue = e.value
        }

        function Oe() {
            J.rotatePages(90)
        }

        function Me() {
            J.rotatePages(-90)
        }

        function Ae(e) {
            J.pdfViewer.optionalContentConfigPromise = e.promise
        }

        function De(e) {
            J.pdfViewer.scrollMode = e.mode
        }

        function Ne(e) {
            J.pdfViewer.spreadMode = e.mode
        }

        function Be() {
            J.pdfDocumentProperties.open()
        }

        function Ve(e) {
            J.eventBus.dispatch("find", {
                source: e.source,
                type: "",
                query: e.query,
                phraseSearch: e.phraseSearch,
                caseSensitive: false,
                entireWord: false,
                highlightAll: true,
                findPrevious: false
            })
        }

        function Re(e) {
            var t = e.matchesCount;
            if (J.supportsIntegratedFind) {
                J.externalServices.updateFindMatchesCount(t)
            } else {
                J.findBar.updateResultsCount(t)
            }
        }

        function Fe(e) {
            var t = e.state,
                n = e.previous,
                r = e.matchesCount,
                i = e.rawQuery;
            if (J.supportsIntegratedFind) {
                J.externalServices.updateFindControlState({
                    result: t,
                    findPrevious: n,
                    matchesCount: r,
                    rawQuery: i
                })
            } else {
                J.findBar.updateUIState(t, n, r)
            }
        }

        function je(e) {
            J.toolbar.setPageScale(e.presetValue, e.scale);
            J.pdfViewer.update()
        }

        function Ue(e) {
            J.pdfThumbnailViewer.pagesRotation = e.pagesRotation;
            J.forceRendering();
            J.pdfViewer.currentPageNumber = e.pageNumber
        }

        function He(e) {
            var t = e.pageNumber,
                n = e.pageLabel;
            J.toolbar.setPageNumber(t, n);
            J.secondaryToolbar.setPageNumber(t);
            if (J.pdfSidebar.isThumbnailViewVisible) {
                J.pdfThumbnailViewer.scrollThumbnailIntoView(t)
            }
        }

        function ze(e) {
            if (document.visibilityState === "visible") {
                Ge()
            }
        }
        var We = null;

        function Ge() {
            if (We) {
                clearTimeout(We)
            }
            We = setTimeout(function () {
                We = null
            }, K)
        }

        function Xe(e) {
            var t = J.pdfViewer,
                n = J.supportedMouseWheelZoomModifierKeys;
            if (t.isInPresentationMode) {
                return
            }
            if (e.ctrlKey && n.ctrlKey || e.metaKey && n.metaKey) {
                e.preventDefault();
                if (We || document.visibilityState === "hidden") {
                    return
                }
                var r = t.currentScale;
                var i = (0, S.normalizeWheelEventDirection)(e);
                var a = 0;
                if (e.deltaMode === WheelEvent.DOM_DELTA_LINE || e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
                    if (Math.abs(i) >= 1) {
                        a = Math.sign(i)
                    } else {
                        a = J.accumulateWheelTicks(i)
                    }
                } else {
                    var o = 30;
                    a = J.accumulateWheelTicks(i / o)
                }
                if (a < 0) {
                    J.zoomOut(-a)
                } else if (a > 0) {
                    J.zoomIn(a)
                }
                var s = t.currentScale;
                if (r !== s) {
                    var u = s / r - 1;
                    var l = t.container.getBoundingClientRect();
                    var c = e.clientX - l.left;
                    var f = e.clientY - l.top;
                    t.container.scrollLeft += c * u;
                    t.container.scrollTop += f * u
                }
            } else {
                Ge()
            }
        }

        function Ke(e) {
            if (e.touches.length > 1) {
                e.preventDefault()
            }
        }

        function qe(e) {
            if (!J.secondaryToolbar.isOpen) {
                return
            }
            var t = J.appConfig;
            if (J.pdfViewer.containsElement(e.target) || t.toolbar.container.contains(e.target) && e.target !== t.secondaryToolbar.toggleButton) {
                J.secondaryToolbar.close()
            }
        }

        function Ze(e) {
            if (J.overlayManager.active) {
                return
            }
            var t = J.eventBus,
                n = J.pdfViewer;
            var r = n.isInPresentationMode;
            var i = false,
                a = false;
            var o = (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0);
            if (o === 1 || o === 8 || o === 5 || o === 12) {
                switch (e.keyCode) {
                    case 70:
                        if (!J.supportsIntegratedFind && !e.shiftKey) {
                            J.findBar.open();
                            i = true
                        }
                        break;
                    case 71:
                        if (!J.supportsIntegratedFind) {
                            var s = J.findController.state;
                            if (s) {
                                var u = Object.assign(Object.create(null), s, {
                                    source: window,
                                    type: "again",
                                    findPrevious: o === 5 || o === 12
                                });
                                t.dispatch("find", u)
                            }
                            i = true
                        }
                        break;
                    case 61:
                    case 107:
                    case 187:
                    case 171:
                        if (!r) {
                            J.zoomIn()
                        }
                        i = true;
                        break;
                    case 173:
                    case 109:
                    case 189:
                        if (!r) {
                            J.zoomOut()
                        }
                        i = true;
                        break;
                    case 48:
                    case 96:
                        if (!r) {
                            setTimeout(function () {
                                J.zoomReset()
                            });
                            i = false
                        }
                        break;
                    case 38:
                        if (r || J.page > 1) {
                            J.page = 1;
                            i = true;
                            a = true
                        }
                        break;
                    case 40:
                        if (r || J.page < J.pagesCount) {
                            J.page = J.pagesCount;
                            i = true;
                            a = true
                        }
                        break
                }
            }
            if (o === 1 || o === 8) {
                switch (e.keyCode) {
                    case 83:
                        break;
                    case 79: {
                        t.dispatch("openfile", {
                            source: window
                        });
                        i = true
                    }
                    break
                }
            }
            if (o === 3 || o === 10) {
                switch (e.keyCode) {
                    case 80:
                        break;
                    case 71:
                        J.appConfig.toolbar.pageNumber.select();
                        i = true;
                        break
                }
            }
            if (i) {
                if (a && !r) {
                    n.focus()
                }
                e.preventDefault();
                return
            }
            var l = (0, S.getActiveOrFocusedElement)();
            var c = l === null || l === void 0 ? void 0 : l.tagName.toUpperCase();
            if (c === "INPUT" || c === "TEXTAREA" || c === "SELECT" || l !== null && l !== void 0 && l.isContentEditable) {
                if (e.keyCode !== 27) {
                    return
                }
            }
            if (o === 0) {
                var f = 0,
                    d = false;
                switch (e.keyCode) {
                    case 38:
                    case 33:
                        if (n.isVerticalScrollbarEnabled) {
                            d = true
                        }
                        f = -1;
                        break;
                    case 8:
                        if (!r) {
                            d = true
                        }
                        f = -1;
                        break;
                    case 37:
                        if (n.isHorizontalScrollbarEnabled) {
                            d = true
                        }
                        case 75:
                        case 80:
                            f = -1;
                            break;
                        case 27:
                            if (J.secondaryToolbar.isOpen) {
                                J.secondaryToolbar.close();
                                i = true
                            }
                            if (!J.supportsIntegratedFind && J.findBar.opened) {
                                J.findBar.close();
                                i = true
                            }
                            break;
                        case 40:
                        case 34:
                            if (n.isVerticalScrollbarEnabled) {
                                d = true
                            }
                            f = 1;
                            break;
                        case 13:
                        case 32:
                            if (!r) {
                                d = true
                            }
                            f = 1;
                            break;
                        case 39:
                            if (n.isHorizontalScrollbarEnabled) {
                                d = true
                            }
                            case 74:
                            case 78:
                                f = 1;
                                break;
                            case 36:
                                if (r || J.page > 1) {
                                    J.page = 1;
                                    i = true;
                                    a = true
                                }
                                break;
                            case 35:
                                if (r || J.page < J.pagesCount) {
                                    J.page = J.pagesCount;
                                    i = true;
                                    a = true
                                }
                                break;
                            case 83:
                                J.pdfCursorTools.switchTool(p.CursorTool.SELECT);
                                break;
                            case 72:
                                J.pdfCursorTools.switchTool(p.CursorTool.HAND);
                                break;
                            case 82:
                                J.rotatePages(90);
                                break;
                            case 115:
                                J.pdfSidebar.toggle();
                                break
                }
                if (f !== 0 && (!d || n.currentScaleValue === "page-fit")) {
                    if (f > 0) {
                        n.nextPage()
                    } else {
                        n.previousPage()
                    }
                    i = true
                }
            }
            if (o === 4) {
                switch (e.keyCode) {
                    case 13:
                    case 32:
                        if (!r && n.currentScaleValue !== "page-fit") {
                            break
                        }
                        n.previousPage();
                        i = true;
                        break;
                    case 82:
                        J.rotatePages(-90);
                        break
                }
            }
            if (!i && !r) {
                if (e.keyCode >= 33 && e.keyCode <= 40 || e.keyCode === 32 && c !== "BUTTON") {
                    a = true
                }
            }
            if (a && !n.containsElement(l)) {
                n.focus()
            }
            if (i) {
                e.preventDefault()
            }
        }

        function Qe(e) {
            e.preventDefault();
            e.returnValue = "";
            return false
        }
        var Ye = {
            instance: {
                supportsPrinting: false,
                createPrintService: function e() {
                    throw new Error("Not implemented: createPrintService")
                }
            }
        };
        t.PDFPrintServiceFactory = Ye
    }, (e, t, n) => {
        e.exports = n(4)
    }, (e, t, n) => {
        e = n.nmd(e);

        function M(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                M = function e(t) {
                    return typeof t
                }
            } else {
                M = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return M(e)
        }
        var r = function (o) {
            "use strict";
            var e = Object.prototype;
            var c = e.hasOwnProperty;
            var l;
            var t = typeof Symbol === "function" ? Symbol : {};
            var i = t.iterator || "@@iterator";
            var n = t.asyncIterator || "@@asyncIterator";
            var r = t.toStringTag || "@@toStringTag";

            function a(e, t, n) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
                return e[t]
            }
            try {
                a({}, "")
            } catch (e) {
                a = function e(t, n, r) {
                    return t[n] = r
                }
            }

            function s(e, t, n, r) {
                var i = t && t.prototype instanceof u ? t : u;
                var a = Object.create(i.prototype);
                var o = new T(r || []);
                a._invoke = E(e, n, o);
                return a
            }
            o.wrap = s;

            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            var d = "suspendedStart";
            var h = "suspendedYield";
            var p = "executing";
            var v = "completed";
            var g = {};

            function u() {}

            function m() {}

            function y() {}
            var b = {};
            a(b, i, function () {
                return this
            });
            var w = Object.getPrototypeOf;
            var _ = w && w(w(I([])));
            if (_ && _ !== e && c.call(_, i)) {
                b = _
            }
            var P = y.prototype = u.prototype = Object.create(b);
            m.prototype = y;
            a(P, "constructor", y);
            a(y, "constructor", m);
            m.displayName = a(y, r, "GeneratorFunction");

            function S(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    a(e, t, function (e) {
                        return this._invoke(t, e)
                    })
                })
            }
            o.isGeneratorFunction = function (e) {
                var t = typeof e === "function" && e.constructor;
                return t ? t === m || (t.displayName || t.name) === "GeneratorFunction" : false
            };
            o.mark = function (e) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(e, y)
                } else {
                    e.__proto__ = y;
                    a(e, r, "GeneratorFunction")
                }
                e.prototype = Object.create(P);
                return e
            };
            o.awrap = function (e) {
                return {
                    __await: e
                }
            };

            function k(s, u) {
                function l(e, t, n, r) {
                    var i = f(s[e], s, t);
                    if (i.type === "throw") {
                        r(i.arg)
                    } else {
                        var a = i.arg;
                        var o = a.value;
                        if (o && M(o) === "object" && c.call(o, "__await")) {
                            return u.resolve(o.__await).then(function (e) {
                                l("next", e, n, r)
                            }, function (e) {
                                l("throw", e, n, r)
                            })
                        }
                        return u.resolve(o).then(function (e) {
                            a.value = e;
                            n(a)
                        }, function (e) {
                            return l("throw", e, n, r)
                        })
                    }
                }
                var t;

                function e(n, r) {
                    function e() {
                        return new u(function (e, t) {
                            l(n, r, e, t)
                        })
                    }
                    return t = t ? t.then(e, e) : e()
                }
                this._invoke = e
            }
            S(k.prototype);
            a(k.prototype, n, function () {
                return this
            });
            o.AsyncIterator = k;
            o.async = function (e, t, n, r, i) {
                if (i === void 0) i = Promise;
                var a = new k(s(e, t, n, r), i);
                return o.isGeneratorFunction(t) ? a : a.next().then(function (e) {
                    return e.done ? e.value : a.next()
                })
            };

            function E(o, s, u) {
                var l = d;
                return function e(t, n) {
                    if (l === p) {
                        throw new Error("Generator is already running")
                    }
                    if (l === v) {
                        if (t === "throw") {
                            throw n
                        }
                        return O()
                    }
                    u.method = t;
                    u.arg = n;
                    while (true) {
                        var r = u.delegate;
                        if (r) {
                            var i = x(r, u);
                            if (i) {
                                if (i === g) continue;
                                return i
                            }
                        }
                        if (u.method === "next") {
                            u.sent = u._sent = u.arg
                        } else if (u.method === "throw") {
                            if (l === d) {
                                l = v;
                                throw u.arg
                            }
                            u.dispatchException(u.arg)
                        } else if (u.method === "return") {
                            u.abrupt("return", u.arg)
                        }
                        l = p;
                        var a = f(o, s, u);
                        if (a.type === "normal") {
                            l = u.done ? v : h;
                            if (a.arg === g) {
                                continue
                            }
                            return {
                                value: a.arg,
                                done: u.done
                            }
                        } else if (a.type === "throw") {
                            l = v;
                            u.method = "throw";
                            u.arg = a.arg
                        }
                    }
                }
            }

            function x(e, t) {
                var n = e.iterator[t.method];
                if (n === l) {
                    t.delegate = null;
                    if (t.method === "throw") {
                        if (e.iterator["return"]) {
                            t.method = "return";
                            t.arg = l;
                            x(e, t);
                            if (t.method === "throw") {
                                return g
                            }
                        }
                        t.method = "throw";
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var r = f(n, e.iterator, t.arg);
                if (r.type === "throw") {
                    t.method = "throw";
                    t.arg = r.arg;
                    t.delegate = null;
                    return g
                }
                var i = r.arg;
                if (!i) {
                    t.method = "throw";
                    t.arg = new TypeError("iterator result is not an object");
                    t.delegate = null;
                    return g
                }
                if (i.done) {
                    t[e.resultName] = i.value;
                    t.next = e.nextLoc;
                    if (t.method !== "return") {
                        t.method = "next";
                        t.arg = l
                    }
                } else {
                    return i
                }
                t.delegate = null;
                return g
            }
            S(P);
            a(P, r, "Generator");
            a(P, i, function () {
                return this
            });
            a(P, "toString", function () {
                return "[object Generator]"
            });

            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                if (1 in e) {
                    t.catchLoc = e[1]
                }
                if (2 in e) {
                    t.finallyLoc = e[2];
                    t.afterLoc = e[3]
                }
                this.tryEntries.push(t)
            }

            function L(e) {
                var t = e.completion || {};
                t.type = "normal";
                delete t.arg;
                e.completion = t
            }

            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }];
                e.forEach(C, this);
                this.reset(true)
            }
            o.keys = function (n) {
                var r = [];
                for (var e in n) {
                    r.push(e)
                }
                r.reverse();
                return function e() {
                    while (r.length) {
                        var t = r.pop();
                        if (t in n) {
                            e.value = t;
                            e.done = false;
                            return e
                        }
                    }
                    e.done = true;
                    return e
                }
            };

            function I(t) {
                if (t) {
                    var e = t[i];
                    if (e) {
                        return e.call(t)
                    }
                    if (typeof t.next === "function") {
                        return t
                    }
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function e() {
                                while (++n < t.length) {
                                    if (c.call(t, n)) {
                                        e.value = t[n];
                                        e.done = false;
                                        return e
                                    }
                                }
                                e.value = l;
                                e.done = true;
                                return e
                            };
                        return r.next = r
                    }
                }
                return {
                    next: O
                }
            }
            o.values = I;

            function O() {
                return {
                    value: l,
                    done: true
                }
            }
            T.prototype = {
                constructor: T,
                reset: function e(t) {
                    this.prev = 0;
                    this.next = 0;
                    this.sent = this._sent = l;
                    this.done = false;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = l;
                    this.tryEntries.forEach(L);
                    if (!t) {
                        for (var n in this) {
                            if (n.charAt(0) === "t" && c.call(this, n) && !isNaN(+n.slice(1))) {
                                this[n] = l
                            }
                        }
                    }
                },
                stop: function e() {
                    this.done = true;
                    var t = this.tryEntries[0];
                    var n = t.completion;
                    if (n.type === "throw") {
                        throw n.arg
                    }
                    return this.rval
                },
                dispatchException: function e(n) {
                    if (this.done) {
                        throw n
                    }
                    var r = this;

                    function t(e, t) {
                        o.type = "throw";
                        o.arg = n;
                        r.next = e;
                        if (t) {
                            r.method = "next";
                            r.arg = l
                        }
                        return !!t
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i];
                        var o = a.completion;
                        if (a.tryLoc === "root") {
                            return t("end")
                        }
                        if (a.tryLoc <= this.prev) {
                            var s = c.call(a, "catchLoc");
                            var u = c.call(a, "finallyLoc");
                            if (s && u) {
                                if (this.prev < a.catchLoc) {
                                    return t(a.catchLoc, true)
                                } else if (this.prev < a.finallyLoc) {
                                    return t(a.finallyLoc)
                                }
                            } else if (s) {
                                if (this.prev < a.catchLoc) {
                                    return t(a.catchLoc, true)
                                }
                            } else if (u) {
                                if (this.prev < a.finallyLoc) {
                                    return t(a.finallyLoc)
                                }
                            } else {
                                throw new Error("try statement without catch or finally")
                            }
                        }
                    }
                },
                abrupt: function e(t, n) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && c.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var a = i;
                            break
                        }
                    }
                    if (a && (t === "break" || t === "continue") && a.tryLoc <= n && n <= a.finallyLoc) {
                        a = null
                    }
                    var o = a ? a.completion : {};
                    o.type = t;
                    o.arg = n;
                    if (a) {
                        this.method = "next";
                        this.next = a.finallyLoc;
                        return g
                    }
                    return this.complete(o)
                },
                complete: function e(t, n) {
                    if (t.type === "throw") {
                        throw t.arg
                    }
                    if (t.type === "break" || t.type === "continue") {
                        this.next = t.arg
                    } else if (t.type === "return") {
                        this.rval = this.arg = t.arg;
                        this.method = "return";
                        this.next = "end"
                    } else if (t.type === "normal" && n) {
                        this.next = n
                    }
                    return g
                },
                finish: function e(t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.finallyLoc === t) {
                            this.complete(r.completion, r.afterLoc);
                            L(r);
                            return g
                        }
                    }
                },
                catch: function e(t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc === t) {
                            var i = r.completion;
                            if (i.type === "throw") {
                                var a = i.arg;
                                L(r)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function e(t, n, r) {
                    this.delegate = {
                        iterator: I(t),
                        resultName: n,
                        nextLoc: r
                    };
                    if (this.method === "next") {
                        this.arg = l
                    }
                    return g
                }
            };
            return o
        }((false ? 0 : M(e)) === "object" ? e.exports : {});
        try {
            regeneratorRuntime = r
        } catch (e) {
            if ((typeof globalThis === "undefined" ? "undefined" : M(globalThis)) === "object") {
                globalThis.regeneratorRuntime = r
            } else {
                Function("r", "regeneratorRuntime = r")(r)
            }
        }
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.animationStarted = t.VERTICAL_PADDING = t.UNKNOWN_SCALE = t.TextLayerMode = t.SpreadMode = t.SidebarView = t.ScrollMode = t.SCROLLBAR_PADDING = t.RenderingStates = t.RendererType = t.ProgressBar = t.PresentationModeState = t.MIN_SCALE = t.MAX_SCALE = t.MAX_AUTO_SCALE = t.DEFAULT_SCALE_VALUE = t.DEFAULT_SCALE_DELTA = t.DEFAULT_SCALE = t.AutoPrintRegExp = void 0;
        t.apiPageLayoutToViewerModes = Y;
        t.apiPageModeToSidebarView = $;
        t.approximateFraction = D;
        t.backtrackBeforeAllVisibleElements = R;
        t.binarySearchFirstItem = B;
        t.getActiveOrFocusedElement = Q;
        t.getOutputScale = I;
        t.getPageSizeInches = V;
        t.getVisibleElements = F;
        t.isPortraitOrientation = X;
        t.isValidRotation = z;
        t.isValidScrollMode = W;
        t.isValidSpreadMode = G;
        t.noContextMenuHandler = j;
        t.normalizeWheelEventDelta = H;
        t.normalizeWheelEventDirection = U;
        t.parseQueryString = A;
        t.roundToDivide = N;
        t.scrollIntoView = O;
        t.watchScroll = M;

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function n(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }

        function d(e, t) {
            return s(e) || a(e, t) || l(e, t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function a(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function s(e) {
            if (Array.isArray(e)) return e
        }

        function u(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }

        function c(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }
        var f = "auto";
        t.DEFAULT_SCALE_VALUE = f;
        var h = 1;
        t.DEFAULT_SCALE = h;
        var p = 1.1;
        t.DEFAULT_SCALE_DELTA = p;
        var v = .1;
        t.MIN_SCALE = v;
        var g = 10;
        t.MAX_SCALE = g;
        var m = 0;
        t.UNKNOWN_SCALE = m;
        var y = 1.25;
        t.MAX_AUTO_SCALE = y;
        var b = 40;
        t.SCROLLBAR_PADDING = b;
        var w = 5;
        t.VERTICAL_PADDING = w;
        var _ = "--loadingBar-end-offset";
        var P = {
            INITIAL: 0,
            RUNNING: 1,
            PAUSED: 2,
            FINISHED: 3
        };
        t.RenderingStates = P;
        var S = {
            UNKNOWN: 0,
            NORMAL: 1,
            CHANGING: 2,
            FULLSCREEN: 3
        };
        t.PresentationModeState = S;
        var k = {
            UNKNOWN: -1,
            NONE: 0,
            THUMBS: 1,
            OUTLINE: 2,
            ATTACHMENTS: 3,
            LAYERS: 4
        };
        t.SidebarView = k;
        var E = {
            CANVAS: "canvas",
            SVG: "svg"
        };
        t.RendererType = E;
        var x = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_ENHANCE: 2
        };
        t.TextLayerMode = x;
        var C = {
            UNKNOWN: -1,
            VERTICAL: 0,
            HORIZONTAL: 1,
            WRAPPED: 2,
            PAGE: 3
        };
        t.ScrollMode = C;
        var L = {
            UNKNOWN: -1,
            NONE: 0,
            ODD: 1,
            EVEN: 2
        };
        t.SpreadMode = L;
        var T = /\bprint\s*\(/;
        t.AutoPrintRegExp = T;

        function I(e) {
            var t = window.devicePixelRatio || 1;
            var n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.backingStorePixelRatio || 1;
            var r = t / n;
            return {
                sx: r,
                sy: r,
                scaled: r !== 1
            }
        }

        function O(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var r = e.offsetParent;
            if (!r) {
                console.error("offsetParent is not set -- cannot scroll");
                return
            }
            var i = e.offsetTop + e.clientTop;
            var a = e.offsetLeft + e.clientLeft;
            while (r.clientHeight === r.scrollHeight && r.clientWidth === r.scrollWidth || n && (r.classList.contains("markedContent") || getComputedStyle(r).overflow === "hidden")) {
                i += r.offsetTop;
                a += r.offsetLeft;
                r = r.offsetParent;
                if (!r) {
                    return
                }
            }
            if (t) {
                if (t.top !== undefined) {
                    i += t.top
                }
                if (t.left !== undefined) {
                    a += t.left;
                    r.scrollLeft = a
                }
            }
            r.scrollTop = i
        }

        function M(a, o) {
            var e = function e(t) {
                if (u) {
                    return
                }
                u = window.requestAnimationFrame(function e() {
                    u = null;
                    var t = a.scrollLeft;
                    var n = s.lastX;
                    if (t !== n) {
                        s.right = t > n
                    }
                    s.lastX = t;
                    var r = a.scrollTop;
                    var i = s.lastY;
                    if (r !== i) {
                        s.down = r > i
                    }
                    s.lastY = r;
                    o(s)
                })
            };
            var s = {
                right: true,
                down: true,
                lastX: a.scrollLeft,
                lastY: a.scrollTop,
                _eventHandler: e
            };
            var u = null;
            a.addEventListener("scroll", e, true);
            return s
        }

        function A(e) {
            var t = new Map;
            var n = u(new URLSearchParams(e)),
                r;
            try {
                for (n.s(); !(r = n.n()).done;) {
                    var i = d(r.value, 2),
                        a = i[0],
                        o = i[1];
                    t.set(a.toLowerCase(), o)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
            return t
        }

        function B(e, t) {
            var n = 0;
            var r = e.length - 1;
            if (r < 0 || !t(e[r])) {
                return e.length
            }
            if (t(e[n])) {
                return n
            }
            while (n < r) {
                var i = n + r >> 1;
                var a = e[i];
                if (t(a)) {
                    r = i
                } else {
                    n = i + 1
                }
            }
            return n
        }

        function D(e) {
            if (Math.floor(e) === e) {
                return [e, 1]
            }
            var t = 1 / e;
            var n = 8;
            if (t > n) {
                return [1, n]
            } else if (Math.floor(t) === t) {
                return [1, t]
            }
            var r = e > 1 ? t : e;
            var i = 0,
                a = 1,
                o = 1,
                s = 1;
            while (true) {
                var u = i + o,
                    l = a + s;
                if (l > n) {
                    break
                }
                if (r <= u / l) {
                    o = u;
                    s = l
                } else {
                    i = u;
                    a = l
                }
            }
            var c;
            if (r - i / a < o / s - r) {
                c = r === e ? [i, a] : [a, i]
            } else {
                c = r === e ? [o, s] : [s, o]
            }
            return c
        }

        function N(e, t) {
            var n = e % t;
            return n === 0 ? e : Math.round(e - n + t)
        }

        function V(e) {
            var t = e.view,
                n = e.userUnit,
                r = e.rotate;
            var i = d(t, 4),
                a = i[0],
                o = i[1],
                s = i[2],
                u = i[3];
            var l = r % 180 !== 0;
            var c = (s - a) / 72 * n;
            var f = (u - o) / 72 * n;
            return {
                width: l ? f : c,
                height: l ? c : f
            }
        }

        function R(e, t, n) {
            if (e < 2) {
                return e
            }
            var r = t[e].div;
            var i = r.offsetTop + r.clientTop;
            if (i >= n) {
                r = t[e - 1].div;
                i = r.offsetTop + r.clientTop
            }
            for (var a = e - 2; a >= 0; --a) {
                r = t[a].div;
                if (r.offsetTop + r.clientTop + r.clientHeight <= i) {
                    break
                }
                e = a
            }
            return e
        }

        function F(e) {
            var t = e.scrollEl,
                n = e.views,
                r = e.sortByVisibility,
                i = r === void 0 ? false : r,
                a = e.horizontal,
                o = a === void 0 ? false : a,
                s = e.rtl,
                u = s === void 0 ? false : s;
            var l = t.scrollTop,
                c = l + t.clientHeight;
            var f = t.scrollLeft,
                d = f + t.clientWidth;

            function h(e) {
                var t = e.div;
                var n = t.offsetTop + t.clientTop + t.clientHeight;
                return n > l
            }

            function p(e) {
                var t = e.div;
                var n = t.offsetLeft + t.clientLeft;
                var r = n + t.clientWidth;
                return u ? n < d : r > f
            }
            var v = [],
                g = new Set,
                m = n.length;
            var y = B(n, o ? p : h);
            if (y > 0 && y < m && !o) {
                y = R(y, n, l)
            }
            var b = o ? d : -1;
            for (var w = y; w < m; w++) {
                var _ = n[w],
                    P = _.div;
                var S = P.offsetLeft + P.clientLeft;
                var k = P.offsetTop + P.clientTop;
                var E = P.clientWidth,
                    x = P.clientHeight;
                var C = S + E;
                var L = k + x;
                if (b === -1) {
                    if (L >= c) {
                        b = L
                    }
                } else if ((o ? S : k) > b) {
                    break
                }
                if (L <= l || k >= c || C <= f || S >= d) {
                    continue
                }
                var T = Math.max(0, l - k) + Math.max(0, L - c);
                var I = Math.max(0, f - S) + Math.max(0, C - d);
                var O = (x - T) / x,
                    M = (E - I) / E;
                var A = O * M * 100 | 0;
                v.push({
                    id: _.id,
                    x: S,
                    y: k,
                    view: _,
                    percent: A,
                    widthPercent: M * 100 | 0
                });
                g.add(_.id)
            }
            var D = v[0],
                N = v[v.length - 1];
            if (i) {
                v.sort(function (e, t) {
                    var n = e.percent - t.percent;
                    if (Math.abs(n) > .001) {
                        return -n
                    }
                    return e.id - t.id
                })
            }
            return {
                first: D,
                last: N,
                views: v,
                ids: g
            }
        }

        function j(e) {
            e.preventDefault()
        }

        function U(e) {
            var t = Math.hypot(e.deltaX, e.deltaY);
            var n = Math.atan2(e.deltaY, e.deltaX);
            if (-.25 * Math.PI < n && n < .75 * Math.PI) {
                t = -t
            }
            return t
        }

        function H(e) {
            var t = U(e);
            var n = 0;
            var r = 1;
            var i = 30;
            var a = 30;
            if (e.deltaMode === n) {
                t /= i * a
            } else if (e.deltaMode === r) {
                t /= a
            }
            return t
        }

        function z(e) {
            return Number.isInteger(e) && e % 90 === 0
        }

        function W(e) {
            return Number.isInteger(e) && Object.values(C).includes(e) && e !== C.UNKNOWN
        }

        function G(e) {
            return Number.isInteger(e) && Object.values(L).includes(e) && e !== L.UNKNOWN
        }

        function X(e) {
            return e.width <= e.height
        }
        var K = new Promise(function (e) {
            window.requestAnimationFrame(e)
        });
        t.animationStarted = K;

        function q(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        var Z = function () {
            function a(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    n = t.height,
                    r = t.width,
                    i = t.units;
                o(this, a);
                this.visible = true;
                this.div = document.querySelector(e + " .progress");
                this.bar = this.div.parentNode;
                this.height = n || 100;
                this.width = r || 100;
                this.units = i || "%";
                this.div.style.height = this.height + this.units;
                this.percent = 0
            }
            n(a, [{
                key: "_updateBar",
                value: function e() {
                    if (this._indeterminate) {
                        this.div.classList.add("indeterminate");
                        this.div.style.width = this.width + this.units;
                        return
                    }
                    this.div.classList.remove("indeterminate");
                    var t = this.width * this._percent / 100;
                    this.div.style.width = t + this.units
                }
            }, {
                key: "percent",
                get: function e() {
                    return this._percent
                },
                set: function e(t) {
                    this._indeterminate = isNaN(t);
                    this._percent = q(t, 0, 100);
                    this._updateBar()
                }
            }, {
                key: "setWidth",
                value: function e(t) {
                    if (!t) {
                        return
                    }
                    var n = t.parentNode;
                    var r = n.offsetWidth - t.offsetWidth;
                    if (r > 0) {
                        var i = document.documentElement;
                        i.style.setProperty(_, "".concat(r, "px"))
                    }
                }
            }, {
                key: "hide",
                value: function e() {
                    if (!this.visible) {
                        return
                    }
                    this.visible = false;
                    this.bar.classList.add("hidden")
                }
            }, {
                key: "show",
                value: function e() {
                    if (this.visible) {
                        return
                    }
                    this.visible = true;
                    this.bar.classList.remove("hidden")
                }
            }]);
            return a
        }();
        t.ProgressBar = Z;

        function Q() {
            var e = document;
            var t = e.activeElement || e.querySelector(":focus");
            while ((n = t) !== null && n !== void 0 && n.shadowRoot) {
                var n;
                e = t.shadowRoot;
                t = e.activeElement || e.querySelector(":focus")
            }
            return t
        }

        function Y(e) {
            var t = C.VERTICAL,
                n = L.NONE;
            switch (e) {
                case "SinglePage":
                    t = C.PAGE;
                    break;
                case "OneColumn":
                    break;
                case "TwoPageLeft":
                    t = C.PAGE;
                case "TwoColumnLeft":
                    n = L.ODD;
                    break;
                case "TwoPageRight":
                    t = C.PAGE;
                case "TwoColumnRight":
                    n = L.EVEN;
                    break
            }
            return {
                scrollMode: t,
                spreadMode: n
            }
        }

        function $(e) {
            switch (e) {
                case "UseNone":
                    return k.NONE;
                case "UseThumbs":
                    return k.THUMBS;
                case "UseOutlines":
                    return k.OUTLINE;
                case "UseAttachments":
                    return k.ATTACHMENTS;
                case "UseOC":
                    return k.LAYERS
            }
            return k.NONE
        }
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.WaitOnType = t.EventBus = t.AutomationEventBus = void 0;
        t.waitOnEventOrTimeout = m;

        function r(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) n(e, t)
        }

        function n(e, t) {
            n = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return n(e, t)
        }

        function i(i) {
            var a = s();
            return function e() {
                var t = u(i),
                    n;
                if (a) {
                    var r = u(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return o(this, n)
            }
        }

        function o(e, t) {
            if (t && (v(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return a(e)
        }

        function a(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function s() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function u(e) {
            u = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return u(e)
        }

        function p(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }

        function c(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t, n) {
            if (t) d(e.prototype, t);
            if (n) d(e, n);
            return e
        }

        function v(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                v = function e(t) {
                    return typeof t
                }
            } else {
                v = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return v(e)
        }
        var g = {
            EVENT: "event",
            TIMEOUT: "timeout"
        };
        t.WaitOnType = g;

        function m(e) {
            var o = e.target,
                s = e.name,
                t = e.delay,
                u = t === void 0 ? 0 : t;
            return new Promise(function (t, e) {
                if (v(o) !== "object" || !(s && typeof s === "string") || !(Number.isInteger(u) && u >= 0)) {
                    throw new Error("waitOnEventOrTimeout - invalid parameters.")
                }

                function n(e) {
                    if (o instanceof y) {
                        o._off(s, r)
                    } else {
                        o.removeEventListener(s, r)
                    }
                    if (a) {
                        clearTimeout(a)
                    }
                    t(e)
                }
                var r = n.bind(null, g.EVENT);
                if (o instanceof y) {
                    o._on(s, r)
                } else {
                    o.addEventListener(s, r)
                }
                var i = n.bind(null, g.TIMEOUT);
                var a = setTimeout(i, u)
            })
        }
        var y = function () {
            function e() {
                f(this, e);
                this._listeners = Object.create(null)
            }
            h(e, [{
                key: "on",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    this._on(t, n, {
                        external: true,
                        once: r === null || r === void 0 ? void 0 : r.once
                    })
                }
            }, {
                key: "off",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    this._off(t, n, {
                        external: true,
                        once: r === null || r === void 0 ? void 0 : r.once
                    })
                }
            }, {
                key: "dispatch",
                value: function e(t, n) {
                    var r = this._listeners[t];
                    if (!r || r.length === 0) {
                        return
                    }
                    var i;
                    var a = p(r.slice(0)),
                        o;
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value,
                                u = s.listener,
                                l = s.external,
                                c = s.once;
                            if (c) {
                                this._off(t, u)
                            }
                            if (l) {
                                (i || (i = [])).push(u);
                                continue
                            }
                            u(n)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    if (i) {
                        var f = p(i),
                            d;
                        try {
                            for (f.s(); !(d = f.n()).done;) {
                                var h = d.value;
                                h(n)
                            }
                        } catch (e) {
                            f.e(e)
                        } finally {
                            f.f()
                        }
                        i = null
                    }
                }
            }, {
                key: "_on",
                value: function e(t, n) {
                    var r;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var a = (r = this._listeners)[t] || (r[t] = []);
                    a.push({
                        listener: n,
                        external: (i === null || i === void 0 ? void 0 : i.external) === true,
                        once: (i === null || i === void 0 ? void 0 : i.once) === true
                    })
                }
            }, {
                key: "_off",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var i = this._listeners[t];
                    if (!i) {
                        return
                    }
                    for (var a = 0, o = i.length; a < o; a++) {
                        if (i[a].listener === n) {
                            i.splice(a, 1);
                            return
                        }
                    }
                }
            }]);
            return e
        }();
        t.EventBus = y;
        var b = function (e) {
            r(n, e);
            var t = i(n);

            function n() {
                f(this, n);
                return t.apply(this, arguments)
            }
            h(n, [{
                key: "dispatch",
                value: function e(t, n) {
                    throw new Error("Not implemented: AutomationEventBus.dispatch")
                }
            }]);
            return n
        }(y);
        t.AutomationEventBus = b
    }, e => {
        var t;
        if (typeof window !== "undefined" && window["libs/pdf"]) {
            t = window["libs/pdf"]
        } else {
            t = require("libs/pdf.min.js")
        }
        e.exports = t
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFCursorTools = t.CursorTool = void 0;
        var s = n(9);
        var i = n(5);

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var l = {
            SELECT: 0,
            HAND: 1,
            ZOOM: 2
        };
        t.CursorTool = l;
        var o = function () {
            function o(e) {
                var t = this;
                var n = e.container,
                    r = e.eventBus,
                    i = e.cursorToolOnLoad,
                    a = i === void 0 ? l.SELECT : i;
                u(this, o);
                this.container = n;
                this.eventBus = r;
                this.active = l.SELECT;
                this.activeBeforePresentationMode = null;
                this.handTool = new s.GrabToPan({
                    element: this.container
                });
                this._addEventListeners();
                Promise.resolve().then(function () {
                    t.switchTool(a)
                })
            }
            a(o, [{
                key: "activeTool",
                get: function e() {
                    return this.active
                }
            }, {
                key: "switchTool",
                value: function e(t) {
                    var n = this;
                    if (this.activeBeforePresentationMode !== null) {
                        return
                    }
                    if (t === this.active) {
                        return
                    }
                    var r = function e() {
                        switch (n.active) {
                            case l.SELECT:
                                break;
                            case l.HAND:
                                n.handTool.deactivate();
                                break;
                            case l.ZOOM:
                        }
                    };
                    switch (t) {
                        case l.SELECT:
                            r();
                            break;
                        case l.HAND:
                            r();
                            this.handTool.activate();
                            break;
                        case l.ZOOM:
                        default:
                            console.error('switchTool: "'.concat(t, '" is an unsupported value.'));
                            return
                    }
                    this.active = t;
                    this._dispatchEvent()
                }
            }, {
                key: "_dispatchEvent",
                value: function e() {
                    this.eventBus.dispatch("cursortoolchanged", {
                        source: this,
                        tool: this.active
                    })
                }
            }, {
                key: "_addEventListeners",
                value: function e() {
                    var r = this;
                    this.eventBus._on("switchcursortool", function (e) {
                        r.switchTool(e.tool)
                    });
                    this.eventBus._on("presentationmodechanged", function (e) {
                        switch (e.state) {
                            case i.PresentationModeState.FULLSCREEN: {
                                var t = r.active;
                                r.switchTool(l.SELECT);
                                r.activeBeforePresentationMode = t;
                                break
                            }
                            case i.PresentationModeState.NORMAL: {
                                var n = r.activeBeforePresentationMode;
                                r.activeBeforePresentationMode = null;
                                r.switchTool(n);
                                break
                            }
                        }
                    })
                }
            }]);
            return o
        }();
        t.PDFCursorTools = o
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.GrabToPan = void 0;

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, n) {
            if (t) i(e.prototype, t);
            if (n) i(e, n);
            return e
        }

        function o(e, t) {
            n(e, t);
            t.add(e)
        }

        function n(e, t) {
            if (t.has(e)) {
                throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
        }

        function s(e, t, n) {
            if (!t.has(e)) {
                throw new TypeError("attempted to get private field on non-instance")
            }
            return n
        }
        var u = "grab-to-pan-grab";
        var l = new WeakSet;
        var c = new WeakSet;
        var f = new WeakSet;
        var d = function () {
            function n(e) {
                r(this, n);
                o(this, f);
                o(this, c);
                o(this, l);
                this.element = e.element;
                this.document = e.element.ownerDocument;
                if (typeof e.ignoreTarget === "function") {
                    this.ignoreTarget = e.ignoreTarget
                }
                this.onActiveChanged = e.onActiveChanged;
                this.activate = this.activate.bind(this);
                this.deactivate = this.deactivate.bind(this);
                this.toggle = this.toggle.bind(this);
                this._onMouseDown = s(this, l, h).bind(this);
                this._onMouseMove = s(this, c, p).bind(this);
                this._endPan = s(this, f, v).bind(this);
                var t = this.overlay = document.createElement("div");
                t.className = "grab-to-pan-grabbing"
            }
            a(n, [{
                key: "activate",
                value: function e() {
                    if (!this.active) {
                        var t;
                        this.active = true;
                        this.element.addEventListener("mousedown", this._onMouseDown, true);
                        this.element.classList.add(u);
                        (t = this.onActiveChanged) === null || t === void 0 ? void 0 : t.call(this, true)
                    }
                }
            }, {
                key: "deactivate",
                value: function e() {
                    if (this.active) {
                        var t;
                        this.active = false;
                        this.element.removeEventListener("mousedown", this._onMouseDown, true);
                        this._endPan();
                        this.element.classList.remove(u);
                        (t = this.onActiveChanged) === null || t === void 0 ? void 0 : t.call(this, false)
                    }
                }
            }, {
                key: "toggle",
                value: function e() {
                    if (this.active) {
                        this.deactivate()
                    } else {
                        this.activate()
                    }
                }
            }, {
                key: "ignoreTarget",
                value: function e(t) {
                    return t.matches("a[href], a[href] *, input, textarea, button, button *, select, option")
                }
            }]);
            return n
        }();
        t.GrabToPan = d;

        function h(e) {
            if (e.button !== 0 || this.ignoreTarget(e.target)) {
                return
            }
            if (e.originalTarget) {
                try {
                    e.originalTarget.tagName
                } catch (e) {
                    return
                }
            }
            this.scrollLeftStart = this.element.scrollLeft;
            this.scrollTopStart = this.element.scrollTop;
            this.clientXStart = e.clientX;
            this.clientYStart = e.clientY;
            this.document.addEventListener("mousemove", this._onMouseMove, true);
            this.document.addEventListener("mouseup", this._endPan, true);
            this.element.addEventListener("scroll", this._endPan, true);
            e.preventDefault();
            e.stopPropagation();
            var t = document.activeElement;
            if (t && !t.contains(e.target)) {
                t.blur()
            }
        }

        function p(e) {
            this.element.removeEventListener("scroll", this._endPan, true);
            if (!(e.buttons & 1)) {
                this._endPan();
                return
            }
            var t = e.clientX - this.clientXStart;
            var n = e.clientY - this.clientYStart;
            var r = this.scrollTopStart - n;
            var i = this.scrollLeftStart - t;
            if (this.element.scrollTo) {
                this.element.scrollTo({
                    top: r,
                    left: i,
                    behavior: "instant"
                })
            } else {
                this.element.scrollTop = r;
                this.element.scrollLeft = i
            }
            if (!this.overlay.parentNode) {
                document.body.appendChild(this.overlay)
            }
        }

        function v() {
            this.element.removeEventListener("scroll", this._endPan, true);
            this.document.removeEventListener("mousemove", this._onMouseMove, true);
            this.document.removeEventListener("mouseup", this._endPan, true);
            this.overlay.remove()
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.OverlayManager = void 0;
        var u = r(n(3));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function i(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) {
            if (t) o(e.prototype, t);
            if (n) o(e, n);
            return e
        }
        var c = function () {
            function e() {
                a(this, e);
                this._overlays = {};
                this._active = null;
                this._keyDownBound = this._keyDown.bind(this)
            }
            s(e, [{
                key: "active",
                get: function e() {
                    return this._active
                }
            }, {
                key: "register",
                value: function () {
                    var n = i(u["default"].mark(function e(n, r) {
                        var i, a, o, s = arguments;
                        return u["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        i = s.length > 2 && s[2] !== undefined ? s[2] : null;
                                        a = s.length > 3 && s[3] !== undefined ? s[3] : false;
                                        if (!(!n || !r || !(o = r.parentNode))) {
                                            t.next = 6;
                                            break
                                        }
                                        throw new Error("Not enough parameters.");
                                    case 6:
                                        if (!this._overlays[n]) {
                                            t.next = 8;
                                            break
                                        }
                                        throw new Error("The overlay is already registered.");
                                    case 8:
                                        this._overlays[n] = {
                                            element: r,
                                            container: o,
                                            callerCloseMethod: i,
                                            canForceClose: a
                                        };
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "unregister",
                value: function () {
                    var t = i(u["default"].mark(function e(n) {
                        return u["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._overlays[n]) {
                                            t.next = 4;
                                            break
                                        }
                                        throw new Error("The overlay does not exist.");
                                    case 4:
                                        if (!(this._active === n)) {
                                            t.next = 6;
                                            break
                                        }
                                        throw new Error("The overlay cannot be removed while it is active.");
                                    case 6:
                                        delete this._overlays[n];
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "open",
                value: function () {
                    var t = i(u["default"].mark(function e(n) {
                        return u["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._overlays[n]) {
                                            t.next = 4;
                                            break
                                        }
                                        throw new Error("The overlay does not exist.");
                                    case 4:
                                        if (!this._active) {
                                            t.next = 14;
                                            break
                                        }
                                        if (!this._overlays[n].canForceClose) {
                                            t.next = 9;
                                            break
                                        }
                                        this._closeThroughCaller();
                                        t.next = 14;
                                        break;
                                    case 9:
                                        if (!(this._active === n)) {
                                            t.next = 13;
                                            break
                                        }
                                        throw new Error("The overlay is already active.");
                                    case 13:
                                        throw new Error("Another overlay is currently active.");
                                    case 14:
                                        this._active = n;
                                        this._overlays[this._active].element.classList.remove("hidden");
                                        this._overlays[this._active].container.classList.remove("hidden");
                                        window.addEventListener("keydown", this._keyDownBound);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "close",
                value: function () {
                    var t = i(u["default"].mark(function e(n) {
                        return u["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._overlays[n]) {
                                            t.next = 4;
                                            break
                                        }
                                        throw new Error("The overlay does not exist.");
                                    case 4:
                                        if (this._active) {
                                            t.next = 8;
                                            break
                                        }
                                        throw new Error("The overlay is currently not active.");
                                    case 8:
                                        if (!(this._active !== n)) {
                                            t.next = 10;
                                            break
                                        }
                                        throw new Error("Another overlay is currently active.");
                                    case 10:
                                        this._overlays[this._active].container.classList.add("hidden");
                                        this._overlays[this._active].element.classList.add("hidden");
                                        this._active = null;
                                        window.removeEventListener("keydown", this._keyDownBound);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_keyDown",
                value: function e(t) {
                    if (this._active && t.keyCode === 27) {
                        this._closeThroughCaller();
                        t.preventDefault()
                    }
                }
            }, {
                key: "_closeThroughCaller",
                value: function e() {
                    if (this._overlays[this._active].callerCloseMethod) {
                        this._overlays[this._active].callerCloseMethod()
                    }
                    if (this._active) {
                        this.close(this._active)
                    }
                }
            }]);
            return e
        }();
        t.OverlayManager = c
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PasswordPrompt = void 0;
        var r = a(n(3));
        var i = n(7);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function o(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            if (t) l(e.prototype, t);
            if (n) l(e, n);
            return e
        }
        var f = function () {
            function a(e, t, n) {
                var r = this;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                s(this, a);
                this.overlayName = e.overlayName;
                this.container = e.container;
                this.label = e.label;
                this.input = e.input;
                this.submitButton = e.submitButton;
                this.cancelButton = e.cancelButton;
                this.overlayManager = t;
                this.l10n = n;
                this._isViewerEmbedded = i;
                this.updateCallback = null;
                this.reason = null;
                this.submitButton.addEventListener("click", this.verify.bind(this));
                this.cancelButton.addEventListener("click", this.close.bind(this));
                this.input.addEventListener("keydown", function (e) {
                    if (e.keyCode === 13) {
                        r.verify()
                    }
                });
                this.overlayManager.register(this.overlayName, this.container, this.close.bind(this), true)
            }
            c(a, [{
                key: "open",
                value: function () {
                    var e = o(r["default"].mark(function e() {
                        var n;
                        return r["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this.overlayManager.open(this.overlayName);
                                    case 2:
                                        n = this.reason === i.PasswordResponses.INCORRECT_PASSWORD;
                                        if (!this._isViewerEmbedded || n) {
                                            this.input.focus()
                                        }
                                        t.next = 6;
                                        return this.l10n.get("password_".concat(n ? "invalid" : "label"));
                                    case 6:
                                        this.label.textContent = t.sent;
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "close",
                value: function e() {
                    var t = this;
                    this.overlayManager.close(this.overlayName).then(function () {
                        t.input.value = ""
                    })
                }
            }, {
                key: "verify",
                value: function e() {
                    var t = this.input.value;
                    if ((t === null || t === void 0 ? void 0 : t.length) > 0) {
                        this.close();
                        this.updateCallback(t)
                    }
                }
            }, {
                key: "setUpdateCallback",
                value: function e(t, n) {
                    this.updateCallback = t;
                    this.reason = n
                }
            }]);
            return a
        }();
        t.PasswordPrompt = f
    }, (e, t, n) => {
        function r(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                r = function e(t) {
                    return typeof t
                }
            } else {
                r = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return r(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFAttachmentViewer = void 0;
        var g = n(7);
        var i = n(13);

        function m(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = u(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function u(e, t) {
            if (!e) return;
            if (typeof e === "string") return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }

        function a(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function l(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }

        function c(e, t, n) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                c = Reflect.get
            } else {
                c = function e(t, n, r) {
                    var i = f(t, n);
                    if (!i) return;
                    var a = Object.getOwnPropertyDescriptor(i, n);
                    if (a.get) {
                        return a.get.call(r)
                    }
                    return a.value
                }
            }
            return c(e, t, n || e)
        }

        function f(e, t) {
            while (!Object.prototype.hasOwnProperty.call(e, t)) {
                e = w(e);
                if (e === null) break
            }
            return e
        }

        function d(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) h(e, t)
        }

        function h(e, t) {
            h = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return h(e, t)
        }

        function p(i) {
            var a = b();
            return function e() {
                var t = w(i),
                    n;
                if (a) {
                    var r = w(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return v(this, n)
            }
        }

        function v(e, t) {
            if (t && (r(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return y(e)
        }

        function y(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function b() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function w(e) {
            w = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return w(e)
        }
        var _ = function (e) {
            d(r, e);
            var n = p(r);

            function r(e) {
                var t;
                o(this, r);
                t = n.call(this, e);
                t.downloadManager = e.downloadManager;
                t.eventBus._on("fileattachmentannotation", t._appendAttachment.bind(y(t)));
                return t
            }
            l(r, [{
                key: "reset",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    c(w(r.prototype), "reset", this).call(this);
                    this._attachments = null;
                    if (!t) {
                        this._renderedCapability = (0, g.createPromiseCapability)()
                    }
                    if (this._pendingDispatchEvent) {
                        clearTimeout(this._pendingDispatchEvent)
                    }
                    this._pendingDispatchEvent = null
                }
            }, {
                key: "_dispatchEvent",
                value: function e(t) {
                    var n = this;
                    this._renderedCapability.resolve();
                    if (this._pendingDispatchEvent) {
                        clearTimeout(this._pendingDispatchEvent);
                        this._pendingDispatchEvent = null
                    }
                    if (t === 0) {
                        this._pendingDispatchEvent = setTimeout(function () {
                            n.eventBus.dispatch("attachmentsloaded", {
                                source: n,
                                attachmentsCount: 0
                            });
                            n._pendingDispatchEvent = null
                        });
                        return
                    }
                    this.eventBus.dispatch("attachmentsloaded", {
                        source: this,
                        attachmentsCount: t
                    })
                }
            }, {
                key: "_bindLink",
                value: function e(t, n) {
                    var r = this;
                    var i = n.content,
                        a = n.filename;
                    t.onclick = function () {
                        r.downloadManager.openOrDownloadData(t, i, a);
                        return false
                    }
                }
            }, {
                key: "render",
                value: function e(t) {
                    var n = t.attachments,
                        r = t.keepRenderedCapability,
                        i = r === void 0 ? false : r;
                    if (this._attachments) {
                        this.reset(i)
                    }
                    this._attachments = n || null;
                    if (!n) {
                        this._dispatchEvent(0);
                        return
                    }
                    var a = Object.keys(n).sort(function (e, t) {
                        return e.toLowerCase().localeCompare(t.toLowerCase())
                    });
                    var o = document.createDocumentFragment();
                    var s = 0;
                    var u = m(a),
                        l;
                    try {
                        for (u.s(); !(l = u.n()).done;) {
                            var c = l.value;
                            var f = n[c];
                            var d = f.content,
                                h = (0, g.getFilenameFromUrl)(f.filename);
                            var p = document.createElement("div");
                            p.className = "treeItem";
                            var v = document.createElement("a");
                            this._bindLink(v, {
                                content: d,
                                filename: h
                            });
                            v.textContent = this._normalizeTextContent(h);
                            p.appendChild(v);
                            o.appendChild(p);
                            s++
                        }
                    } catch (e) {
                        u.e(e)
                    } finally {
                        u.f()
                    }
                    this._finishRendering(o, s)
                }
            }, {
                key: "_appendAttachment",
                value: function e(t) {
                    var n = this;
                    var r = t.id,
                        i = t.filename,
                        a = t.content;
                    var o = this._renderedCapability.promise;
                    o.then(function () {
                        if (o !== n._renderedCapability.promise) {
                            return
                        }
                        var e = n._attachments;
                        if (!e) {
                            e = Object.create(null)
                        } else {
                            for (var t in e) {
                                if (r === t) {
                                    return
                                }
                            }
                        }
                        e[r] = {
                            filename: i,
                            content: a
                        };
                        n.render({
                            attachments: e,
                            keepRenderedCapability: true
                        })
                    })
                }
            }]);
            return r
        }(i.BaseTreeViewer);
        t.PDFAttachmentViewer = _
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.BaseTreeViewer = void 0;
        var r = n(7);

        function o(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = u(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function u(e, t) {
            if (!e) return;
            if (typeof e === "string") return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
        }

        function i(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function l(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }
        var c = -100;
        var f = "selected";
        var d = function () {
            function t(e) {
                a(this, t);
                if (this.constructor === t) {
                    throw new Error("Cannot initialize BaseTreeViewer.")
                }
                this.container = e.container;
                this.eventBus = e.eventBus;
                this.reset()
            }
            l(t, [{
                key: "reset",
                value: function e() {
                    this._pdfDocument = null;
                    this._lastToggleIsShow = true;
                    this._currentTreeItem = null;
                    this.container.textContent = "";
                    this.container.classList.remove("treeWithDeepNesting")
                }
            }, {
                key: "_dispatchEvent",
                value: function e(t) {
                    throw new Error("Not implemented: _dispatchEvent")
                }
            }, {
                key: "_bindLink",
                value: function e(t, n) {
                    throw new Error("Not implemented: _bindLink")
                }
            }, {
                key: "_normalizeTextContent",
                value: function e(t) {
                    return (0, r.removeNullCharacters)(t, true) || "–"
                }
            }, {
                key: "_addToggleButton",
                value: function e(n) {
                    var r = this;
                    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var i = document.createElement("div");
                    i.className = "treeItemToggler";
                    if (t) {
                        i.classList.add("treeItemsHidden")
                    }
                    i.onclick = function (e) {
                        e.stopPropagation();
                        i.classList.toggle("treeItemsHidden");
                        if (e.shiftKey) {
                            var t = !i.classList.contains("treeItemsHidden");
                            r._toggleTreeItem(n, t)
                        }
                    };
                    n.insertBefore(i, n.firstChild)
                }
            }, {
                key: "_toggleTreeItem",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this._lastToggleIsShow = n;
                    var r = o(t.querySelectorAll(".treeItemToggler")),
                        i;
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = i.value;
                            a.classList.toggle("treeItemsHidden", !n)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "_toggleAllTreeItems",
                value: function e() {
                    this._toggleTreeItem(this.container, !this._lastToggleIsShow)
                }
            }, {
                key: "_finishRendering",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (r) {
                        this.container.classList.add("treeWithDeepNesting");
                        this._lastToggleIsShow = !t.querySelector(".treeItemsHidden")
                    }
                    this.container.appendChild(t);
                    this._dispatchEvent(n)
                }
            }, {
                key: "render",
                value: function e(t) {
                    throw new Error("Not implemented: render")
                }
            }, {
                key: "_updateCurrentTreeItem",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (this._currentTreeItem) {
                        this._currentTreeItem.classList.remove(f);
                        this._currentTreeItem = null
                    }
                    if (t) {
                        t.classList.add(f);
                        this._currentTreeItem = t
                    }
                }
            }, {
                key: "_scrollToCurrentTreeItem",
                value: function e(t) {
                    if (!t) {
                        return
                    }
                    var n = t.parentNode;
                    while (n && n !== this.container) {
                        if (n.classList.contains("treeItem")) {
                            var r = n.firstElementChild;
                            r === null || r === void 0 ? void 0 : r.classList.remove("treeItemsHidden")
                        }
                        n = n.parentNode
                    }
                    this._updateCurrentTreeItem(t);
                    this.container.scrollTo(t.offsetLeft, t.offsetTop + c)
                }
            }]);
            return t
        }();
        t.BaseTreeViewer = d
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFDocumentProperties = void 0;
        var _ = r(n(3));
        var P = n(7);
        var S = n(5);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function k(e, t) {
            return u(e) || s(e, t) || a(e, t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function a(e, t) {
            if (!e) return;
            if (typeof e === "string") return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }

        function o(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function s(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function u(e) {
            if (Array.isArray(e)) return e
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function c(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function f(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t, n) {
            if (t) d(e.prototype, t);
            if (n) d(e, n);
            return e
        }
        var p = "-";
        var v = ["en-us", "en-lr", "my"];
        var y = {
            "8.5x11": "Letter",
            "8.5x14": "Legal"
        };
        var b = {
            "297x420": "A3",
            "210x297": "A4"
        };

        function w(e, t, n) {
            var r = t ? e.width : e.height;
            var i = t ? e.height : e.width;
            return n["".concat(r, "x").concat(i)]
        }
        var g = function () {
            function l(e, t, n, r) {
                var i = this;
                var a = e.overlayName,
                    o = e.fields,
                    s = e.container,
                    u = e.closeButton;
                f(this, l);
                this.overlayName = a;
                this.fields = o;
                this.container = s;
                this.overlayManager = t;
                this.l10n = r;
                this._reset();
                u.addEventListener("click", this.close.bind(this));
                this.overlayManager.register(this.overlayName, this.container, this.close.bind(this));
                n._on("pagechanging", function (e) {
                    i._currentPageNumber = e.pageNumber
                });
                n._on("rotationchanging", function (e) {
                    i._pagesRotation = e.pagesRotation
                });
                this._isNonMetricLocale = true;
                r.getLanguage().then(function (e) {
                    i._isNonMetricLocale = v.includes(e)
                })
            }
            h(l, [{
                key: "open",
                value: function () {
                    var e = c(_["default"].mark(function e() {
                        var n = this;
                        var r, i, a, o, s, u, l, c, f, d, h, p, v, g, m, y, b, w;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = function e(t) {
                                            Object.defineProperty(n, "fieldData", {
                                                value: Object.freeze(t),
                                                writable: false,
                                                enumerable: true,
                                                configurable: true
                                            })
                                        };
                                        t.next = 3;
                                        return Promise.all([this.overlayManager.open(this.overlayName), this._dataAvailableCapability.promise]);
                                    case 3:
                                        i = this._currentPageNumber;
                                        a = this._pagesRotation;
                                        if (!(this.fieldData && i === this.fieldData._currentPageNumber && a === this.fieldData._pagesRotation)) {
                                            t.next = 8;
                                            break
                                        }
                                        this._updateUI();
                                        return t.abrupt("return");
                                    case 8:
                                        t.next = 10;
                                        return this.pdfDocument.getMetadata();
                                    case 10:
                                        o = t.sent;
                                        s = o.info;
                                        u = o.contentDispositionFilename;
                                        l = o.contentLength;
                                        t.next = 16;
                                        return Promise.all([u || (0, P.getPdfFilenameFromUrl)(this.url), this._parseFileSize(l), this._parseDate(s.CreationDate), this._parseDate(s.ModDate), this.pdfDocument.getPage(i).then(function (e) {
                                            return n._parsePageSize((0, S.getPageSizeInches)(e), a)
                                        }), this._parseLinearization(s.IsLinearized)]);
                                    case 16:
                                        c = t.sent;
                                        f = k(c, 6);
                                        d = f[0];
                                        h = f[1];
                                        p = f[2];
                                        v = f[3];
                                        g = f[4];
                                        m = f[5];
                                        r({
                                            fileName: d,
                                            fileSize: h,
                                            title: s.Title,
                                            author: s.Author,
                                            subject: s.Subject,
                                            keywords: s.Keywords,
                                            creationDate: p,
                                            modificationDate: v,
                                            creator: s.Creator,
                                            producer: s.Producer,
                                            version: s.PDFFormatVersion,
                                            pageCount: this.pdfDocument.numPages,
                                            pageSize: g,
                                            linearized: m,
                                            _currentPageNumber: i,
                                            _pagesRotation: a
                                        });
                                        this._updateUI();
                                        t.next = 28;
                                        return this.pdfDocument.getDownloadInfo();
                                    case 28:
                                        y = t.sent;
                                        b = y.length;
                                        if (!(l === b)) {
                                            t.next = 32;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 32:
                                        w = Object.assign(Object.create(null), this.fieldData);
                                        t.next = 35;
                                        return this._parseFileSize(b);
                                    case 35:
                                        w.fileSize = t.sent;
                                        r(w);
                                        this._updateUI();
                                    case 38:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "close",
                value: function e() {
                    this.overlayManager.close(this.overlayName)
                }
            }, {
                key: "setDocument",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    if (this.pdfDocument) {
                        this._reset();
                        this._updateUI(true)
                    }
                    if (!t) {
                        return
                    }
                    this.pdfDocument = t;
                    this.url = n;
                    this._dataAvailableCapability.resolve()
                }
            }, {
                key: "_reset",
                value: function e() {
                    this.pdfDocument = null;
                    this.url = null;
                    delete this.fieldData;
                    this._dataAvailableCapability = (0, P.createPromiseCapability)();
                    this._currentPageNumber = 1;
                    this._pagesRotation = 0
                }
            }, {
                key: "_updateUI",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (t || !this.fieldData) {
                        for (var n in this.fields) {
                            this.fields[n].textContent = p
                        }
                        return
                    }
                    if (this.overlayManager.active !== this.overlayName) {
                        return
                    }
                    for (var r in this.fields) {
                        var i = this.fieldData[r];
                        this.fields[r].textContent = i || i === 0 ? i : p
                    }
                }
            }, {
                key: "_parseFileSize",
                value: function () {
                    var e = c(_["default"].mark(function e() {
                        var n, r, i, a = arguments;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = a.length > 0 && a[0] !== undefined ? a[0] : 0;
                                        r = n / 1024, i = r / 1024;
                                        if (r) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return", undefined);
                                    case 4:
                                        return t.abrupt("return", this.l10n.get("document_properties_".concat(i >= 1 ? "mb" : "kb"), {
                                            size_mb: i >= 1 && (+i.toPrecision(3)).toLocaleString(),
                                            size_kb: i < 1 && (+r.toPrecision(3)).toLocaleString(),
                                            size_b: n.toLocaleString()
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_parsePageSize",
                value: function () {
                    var n = c(_["default"].mark(function e(n, r) {
                        var i, a, o, s, u, l, c, f, d, h, p, v, g, m;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (n) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", undefined);
                                    case 2:
                                        if (r % 180 !== 0) {
                                            n = {
                                                width: n.height,
                                                height: n.width
                                            }
                                        }
                                        i = (0, S.isPortraitOrientation)(n);
                                        a = {
                                            width: Math.round(n.width * 100) / 100,
                                            height: Math.round(n.height * 100) / 100
                                        };
                                        o = {
                                            width: Math.round(n.width * 25.4 * 10) / 10,
                                            height: Math.round(n.height * 25.4 * 10) / 10
                                        };
                                        s = w(a, i, y) || w(o, i, b);
                                        if (!s && !(Number.isInteger(o.width) && Number.isInteger(o.height))) {
                                            u = {
                                                width: n.width * 25.4,
                                                height: n.height * 25.4
                                            };
                                            l = {
                                                width: Math.round(o.width),
                                                height: Math.round(o.height)
                                            };
                                            if (Math.abs(u.width - l.width) < .1 && Math.abs(u.height - l.height) < .1) {
                                                s = w(l, i, b);
                                                if (s) {
                                                    a = {
                                                        width: Math.round(l.width / 25.4 * 100) / 100,
                                                        height: Math.round(l.height / 25.4 * 100) / 100
                                                    };
                                                    o = l
                                                }
                                            }
                                        }
                                        t.next = 10;
                                        return Promise.all([this._isNonMetricLocale ? a : o, this.l10n.get("document_properties_page_size_unit_".concat(this._isNonMetricLocale ? "inches" : "millimeters")), s && this.l10n.get("document_properties_page_size_name_".concat(s.toLowerCase())), this.l10n.get("document_properties_page_size_orientation_".concat(i ? "portrait" : "landscape"))]);
                                    case 10:
                                        c = t.sent;
                                        f = k(c, 4);
                                        d = f[0];
                                        h = d.width;
                                        p = d.height;
                                        v = f[1];
                                        g = f[2];
                                        m = f[3];
                                        return t.abrupt("return", this.l10n.get("document_properties_page_size_dimension_".concat(g ? "name_" : "", "string"), {
                                            width: h.toLocaleString(),
                                            height: p.toLocaleString(),
                                            unit: v,
                                            name: g,
                                            orientation: m
                                        }));
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_parseDate",
                value: function () {
                    var t = c(_["default"].mark(function e(n) {
                        var r;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = P.PDFDateString.toDateObject(n);
                                        if (r) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", undefined);
                                    case 3:
                                        return t.abrupt("return", this.l10n.get("document_properties_date_string", {
                                            date: r.toLocaleDateString(),
                                            time: r.toLocaleTimeString()
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_parseLinearization",
                value: function e(t) {
                    return this.l10n.get("document_properties_linearized_".concat(t ? "yes" : "no"))
                }
            }]);
            return l
        }();
        t.PDFDocumentProperties = g
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFFindBar = void 0;
        var s = n(16);

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var f = 1e3;
        var i = function () {
            function i(e, t, n) {
                var r = this;
                a(this, i);
                this.opened = false;
                this.bar = e.bar;
                this.toggleButton = e.toggleButton;
                this.findField = e.findField;
                this.highlightAll = e.highlightAllCheckbox;
                this.caseSensitive = e.caseSensitiveCheckbox;
                this.entireWord = e.entireWordCheckbox;
                this.findMsg = e.findMsg;
                this.findResultsCount = e.findResultsCount;
                this.findPreviousButton = e.findPreviousButton;
                this.findNextButton = e.findNextButton;
                this.eventBus = t;
                this.l10n = n;
                this.toggleButton.addEventListener("click", function () {
                    r.toggle()
                });
                this.findField.addEventListener("input", function () {
                    r.dispatchEvent("")
                });
                this.bar.addEventListener("keydown", function (e) {
                    switch (e.keyCode) {
                        case 13:
                            if (e.target === r.findField) {
                                r.dispatchEvent("again", e.shiftKey)
                            }
                            break;
                        case 27:
                            r.close();
                            break
                    }
                });
                this.findPreviousButton.addEventListener("click", function () {
                    r.dispatchEvent("again", true)
                });
                this.findNextButton.addEventListener("click", function () {
                    r.dispatchEvent("again", false)
                });
                this.highlightAll.addEventListener("click", function () {
                    r.dispatchEvent("highlightallchange")
                });
                this.caseSensitive.addEventListener("click", function () {
                    r.dispatchEvent("casesensitivitychange")
                });
                this.entireWord.addEventListener("click", function () {
                    r.dispatchEvent("entirewordchange")
                });
                this.eventBus._on("resize", this._adjustWidth.bind(this))
            }
            o(i, [{
                key: "reset",
                value: function e() {
                    this.updateUIState()
                }
            }, {
                key: "dispatchEvent",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this.eventBus.dispatch("find", {
                        source: this,
                        type: t,
                        query: this.findField.value,
                        phraseSearch: true,
                        caseSensitive: this.caseSensitive.checked,
                        entireWord: this.entireWord.checked,
                        highlightAll: this.highlightAll.checked,
                        findPrevious: n
                    })
                }
            }, {
                key: "updateUIState",
                value: function e(t, n, r) {
                    var i = this;
                    var a = Promise.resolve("");
                    var o = "";
                    switch (t) {
                        case s.FindState.FOUND:
                            break;
                        case s.FindState.PENDING:
                            o = "pending";
                            break;
                        case s.FindState.NOT_FOUND:
                            a = this.l10n.get("find_not_found");
                            o = "notFound";
                            break;
                        case s.FindState.WRAPPED:
                            a = this.l10n.get("find_reached_".concat(n ? "top" : "bottom"));
                            break
                    }
                    this.findField.setAttribute("data-status", o);
                    a.then(function (e) {
                        i.findMsg.textContent = e;
                        i._adjustWidth()
                    });
                    this.updateResultsCount(r)
                }
            }, {
                key: "updateResultsCount",
                value: function e() {
                    var t = this;
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        r = n.current,
                        i = r === void 0 ? 0 : r,
                        a = n.total,
                        o = a === void 0 ? 0 : a;
                    var s = f;
                    var u = Promise.resolve("");
                    if (o > 0) {
                        if (o > s) {
                            var l = "find_match_count_limit";
                            u = this.l10n.get(l, {
                                limit: s
                            })
                        } else {
                            var c = "find_match_count";
                            u = this.l10n.get(c, {
                                current: i,
                                total: o
                            })
                        }
                    }
                    u.then(function (e) {
                        t.findResultsCount.textContent = e;
                        t.findResultsCount.classList.toggle("hidden", !o);
                        t._adjustWidth()
                    })
                }
            }, {
                key: "open",
                value: function e() {
                    if (!this.opened) {
                        this.opened = true;
                        this.toggleButton.classList.add("toggled");
                        this.toggleButton.setAttribute("aria-expanded", "true");
                        this.bar.classList.remove("hidden")
                    }
                    this.findField.select();
                    this.findField.focus();
                    this._adjustWidth()
                }
            }, {
                key: "close",
                value: function e() {
                    if (!this.opened) {
                        return
                    }
                    this.opened = false;
                    this.toggleButton.classList.remove("toggled");
                    this.toggleButton.setAttribute("aria-expanded", "false");
                    this.bar.classList.add("hidden");
                    this.eventBus.dispatch("findbarclose", {
                        source: this
                    })
                }
            }, {
                key: "toggle",
                value: function e() {
                    if (this.opened) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }, {
                key: "_adjustWidth",
                value: function e() {
                    if (!this.opened) {
                        return
                    }
                    this.bar.classList.remove("wrapContainers");
                    var t = this.bar.clientHeight;
                    var n = this.bar.firstElementChild.clientHeight;
                    if (t > n) {
                        this.bar.classList.add("wrapContainers")
                    }
                }
            }]);
            return i
        }();
        t.PDFFindBar = i
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFFindController = t.FindState = void 0;
        var a = n(7);
        var l = n(17);
        var f = n(5);

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }

        function c(e, t) {
            return d(e) || u(e, t) || p(e, t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function u(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function d(e) {
            if (Array.isArray(e)) return e
        }

        function h(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = p(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function p(e, t) {
            if (!e) return;
            if (typeof e === "string") return v(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
        }

        function v(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }
        var g = {
            FOUND: 0,
            NOT_FOUND: 1,
            WRAPPED: 2,
            PENDING: 3
        };
        t.FindState = g;
        var m = 250;
        var y = -50;
        var b = -400;
        var w = {
            "‐": "-",
            "‘": "'",
            "’": "'",
            "‚": "'",
            "‛": "'",
            "“": '"',
            "”": '"',
            "„": '"',
            "‟": '"',
            "¼": "1/4",
            "½": "1/2",
            "¾": "3/4"
        };
        var _ = null;

        function P(e) {
            if (!_) {
                var t = Object.keys(w).join("");
                _ = new RegExp("[".concat(t, "]"), "g")
            }
            var i = null;
            var n = e.replace(_, function (e, t) {
                var n = w[e],
                    r = n.length - e.length;
                if (r !== 0) {
                    (i || (i = [])).push([t, r])
                }
                return n
            });
            return [n, i]
        }

        function S(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            if (!t) {
                return e
            }
            var n = 0;
            var r = h(t),
                i;
            try {
                for (r.s(); !(i = r.n()).done;) {
                    var a = c(i.value, 2),
                        o = a[0],
                        s = a[1];
                    var u = o + n;
                    if (u >= e) {
                        break
                    }
                    if (u + s > e) {
                        n += e - u;
                        break
                    }
                    n += s
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return e - n
        }
        var k = function () {
            function i(e) {
                var r = this;
                var t = e.linkService,
                    n = e.eventBus;
                o(this, i);
                this._linkService = t;
                this._eventBus = n;
                this._reset();
                n._on("find", this._onFind.bind(this));
                n._on("findbarclose", this._onFindBarClose.bind(this));
                this.executeCommand = function (e, t) {
                    console.error("Deprecated method `PDFFindController.executeCommand` called, " + 'please dispatch a "find"-event using the EventBus instead.');
                    var n = Object.assign(Object.create(null), t, {
                        type: e.substring("find".length)
                    });
                    r._onFind(n)
                }
            }
            s(i, [{
                key: "highlightMatches",
                get: function e() {
                    return this._highlightMatches
                }
            }, {
                key: "pageMatches",
                get: function e() {
                    return this._pageMatches
                }
            }, {
                key: "pageMatchesLength",
                get: function e() {
                    return this._pageMatchesLength
                }
            }, {
                key: "selected",
                get: function e() {
                    return this._selected
                }
            }, {
                key: "state",
                get: function e() {
                    return this._state
                }
            }, {
                key: "setDocument",
                value: function e(t) {
                    if (this._pdfDocument) {
                        this._reset()
                    }
                    if (!t) {
                        return
                    }
                    this._pdfDocument = t;
                    this._firstPageCapability.resolve()
                }
            }, {
                key: "_onFind",
                value: function e(t) {
                    var n = this;
                    if (!t) {
                        return
                    }
                    var r = this._pdfDocument;
                    var i = t.type;
                    if (this._state === null || this._shouldDirtyMatch(t)) {
                        this._dirtyMatch = true
                    }
                    this._state = t;
                    if (i !== "highlightallchange") {
                        this._updateUIState(g.PENDING)
                    }
                    this._firstPageCapability.promise.then(function () {
                        if (!n._pdfDocument || r && n._pdfDocument !== r) {
                            return
                        }
                        n._extractText();
                        var e = !n._highlightMatches;
                        var t = !!n._findTimeout;
                        if (n._findTimeout) {
                            clearTimeout(n._findTimeout);
                            n._findTimeout = null
                        }
                        if (!i) {
                            n._findTimeout = setTimeout(function () {
                                n._nextMatch();
                                n._findTimeout = null
                            }, m)
                        } else if (n._dirtyMatch) {
                            n._nextMatch()
                        } else if (i === "again") {
                            n._nextMatch();
                            if (e && n._state.highlightAll) {
                                n._updateAllPages()
                            }
                        } else if (i === "highlightallchange") {
                            if (t) {
                                n._nextMatch()
                            } else {
                                n._highlightMatches = true
                            }
                            n._updateAllPages()
                        } else {
                            n._nextMatch()
                        }
                    })
                }
            }, {
                key: "scrollMatchIntoView",
                value: function e(t) {
                    var n = t.element,
                        r = n === void 0 ? null : n,
                        i = t.selectedLeft,
                        a = i === void 0 ? 0 : i,
                        o = t.pageIndex,
                        s = o === void 0 ? -1 : o,
                        u = t.matchIndex,
                        l = u === void 0 ? -1 : u;
                    if (!this._scrollMatches || !r) {
                        return
                    } else if (l === -1 || l !== this._selected.matchIdx) {
                        return
                    } else if (s === -1 || s !== this._selected.pageIdx) {
                        return
                    }
                    this._scrollMatches = false;
                    var c = {
                        top: y,
                        left: a + b
                    };
                    (0, f.scrollIntoView)(r, c, true)
                }
            }, {
                key: "_reset",
                value: function e() {
                    this._highlightMatches = false;
                    this._scrollMatches = false;
                    this._pdfDocument = null;
                    this._pageMatches = [];
                    this._pageMatchesLength = [];
                    this._state = null;
                    this._selected = {
                        pageIdx: -1,
                        matchIdx: -1
                    };
                    this._offset = {
                        pageIdx: null,
                        matchIdx: null,
                        wrapped: false
                    };
                    this._extractTextPromises = [];
                    this._pageContents = [];
                    this._pageDiffs = [];
                    this._matchesCountTotal = 0;
                    this._pagesToSearch = null;
                    this._pendingFindMatches = new Set;
                    this._resumePageIdx = null;
                    this._dirtyMatch = false;
                    clearTimeout(this._findTimeout);
                    this._findTimeout = null;
                    this._firstPageCapability = (0, a.createPromiseCapability)()
                }
            }, {
                key: "_query",
                get: function e() {
                    if (this._state.query !== this._rawQuery) {
                        this._rawQuery = this._state.query;
                        var t = P(this._state.query);
                        var n = c(t, 1);
                        this._normalizedQuery = n[0]
                    }
                    return this._normalizedQuery
                }
            }, {
                key: "_shouldDirtyMatch",
                value: function e(t) {
                    if (t.query !== this._state.query) {
                        return true
                    }
                    switch (t.type) {
                        case "again":
                            var n = this._selected.pageIdx + 1;
                            var r = this._linkService;
                            if (n >= 1 && n <= r.pagesCount && n !== r.page && !r.isPageVisible(n)) {
                                return true
                            }
                            return false;
                        case "highlightallchange":
                            return false
                    }
                    return true
                }
            }, {
                key: "_prepareMatches",
                value: function e(a, t, n) {
                    function r(e) {
                        var t = a[e];
                        var n = a[e + 1];
                        if (e < a.length - 1 && t.match === n.match) {
                            t.skipped = true;
                            return true
                        }
                        for (var r = e - 1; r >= 0; r--) {
                            var i = a[r];
                            if (i.skipped) {
                                continue
                            }
                            if (i.match + i.matchLength < t.match) {
                                break
                            }
                            if (i.match + i.matchLength >= t.match + t.matchLength) {
                                t.skipped = true;
                                return true
                            }
                        }
                        return false
                    }
                    a.sort(function (e, t) {
                        return e.match === t.match ? e.matchLength - t.matchLength : e.match - t.match
                    });
                    for (var i = 0, o = a.length; i < o; i++) {
                        if (r(i)) {
                            continue
                        }
                        t.push(a[i].match);
                        n.push(a[i].matchLength)
                    }
                }
            }, {
                key: "_isEntireWord",
                value: function e(t, n, r) {
                    if (n > 0) {
                        var i = t.charCodeAt(n);
                        var a = t.charCodeAt(n - 1);
                        if ((0, l.getCharacterType)(i) === (0, l.getCharacterType)(a)) {
                            return false
                        }
                    }
                    var o = n + r - 1;
                    if (o < t.length - 1) {
                        var s = t.charCodeAt(o);
                        var u = t.charCodeAt(o + 1);
                        if ((0, l.getCharacterType)(s) === (0, l.getCharacterType)(u)) {
                            return false
                        }
                    }
                    return true
                }
            }, {
                key: "_calculatePhraseMatch",
                value: function e(t, n, r, i, a) {
                    var o = [],
                        s = [];
                    var u = t.length;
                    var l = -u;
                    while (true) {
                        l = r.indexOf(t, l + u);
                        if (l === -1) {
                            break
                        }
                        if (a && !this._isEntireWord(r, l, u)) {
                            continue
                        }
                        var c = S(l, i),
                            f = l + u - 1,
                            d = S(f, i) - c + 1;
                        o.push(c);
                        s.push(d)
                    }
                    this._pageMatches[n] = o;
                    this._pageMatchesLength[n] = s
                }
            }, {
                key: "_calculateWordMatch",
                value: function e(t, n, r, i, a) {
                    var o = [];
                    var s = t.match(/\S+/g);
                    for (var u = 0, l = s.length; u < l; u++) {
                        var c = s[u];
                        var f = c.length;
                        var d = -f;
                        while (true) {
                            d = r.indexOf(c, d + f);
                            if (d === -1) {
                                break
                            }
                            if (a && !this._isEntireWord(r, d, f)) {
                                continue
                            }
                            var h = S(d, i),
                                p = d + f - 1,
                                v = S(p, i) - h + 1;
                            o.push({
                                match: h,
                                matchLength: v,
                                skipped: false
                            })
                        }
                    }
                    this._pageMatchesLength[n] = [];
                    this._pageMatches[n] = [];
                    this._prepareMatches(o, this._pageMatches[n], this._pageMatchesLength[n])
                }
            }, {
                key: "_calculateMatch",
                value: function e(t) {
                    var n = this._pageContents[t];
                    var r = this._pageDiffs[t];
                    var i = this._query;
                    var a = this._state,
                        o = a.caseSensitive,
                        s = a.entireWord,
                        u = a.phraseSearch;
                    if (i.length === 0) {
                        return
                    }
                    if (!o) {
                        n = n.toLowerCase();
                        i = i.toLowerCase()
                    }
                    if (u) {
                        this._calculatePhraseMatch(i, t, n, r, s)
                    } else {
                        this._calculateWordMatch(i, t, n, r, s)
                    }
                    if (this._state.highlightAll) {
                        this._updatePage(t)
                    }
                    if (this._resumePageIdx === t) {
                        this._resumePageIdx = null;
                        this._nextPageMatch()
                    }
                    var l = this._pageMatches[t].length;
                    if (l > 0) {
                        this._matchesCountTotal += l;
                        this._updateUIResultsCount()
                    }
                }
            }, {
                key: "_extractText",
                value: function e() {
                    var l = this;
                    if (this._extractTextPromises.length > 0) {
                        return
                    }
                    var n = Promise.resolve();
                    var t = function e(s, t) {
                        var u = (0, a.createPromiseCapability)();
                        l._extractTextPromises[s] = u.promise;
                        n = n.then(function () {
                            return l._pdfDocument.getPage(s + 1).then(function (e) {
                                return e.getTextContent({
                                    normalizeWhitespace: true
                                })
                            }).then(function (e) {
                                var t = e.items;
                                var n = [];
                                for (var r = 0, i = t.length; r < i; r++) {
                                    n.push(t[r].str)
                                }
                                var a = P(n.join(""));
                                var o = c(a, 2);
                                l._pageContents[s] = o[0];
                                l._pageDiffs[s] = o[1];
                                u.resolve(s)
                            }, function (e) {
                                console.error("Unable to get text content for page ".concat(s + 1), e);
                                l._pageContents[s] = "";
                                l._pageDiffs[s] = null;
                                u.resolve(s)
                            })
                        })
                    };
                    for (var r = 0, i = this._linkService.pagesCount; r < i; r++) {
                        t(r, i)
                    }
                }
            }, {
                key: "_updatePage",
                value: function e(t) {
                    if (this._scrollMatches && this._selected.pageIdx === t) {
                        this._linkService.page = t + 1
                    }
                    this._eventBus.dispatch("updatetextlayermatches", {
                        source: this,
                        pageIndex: t
                    })
                }
            }, {
                key: "_updateAllPages",
                value: function e() {
                    this._eventBus.dispatch("updatetextlayermatches", {
                        source: this,
                        pageIndex: -1
                    })
                }
            }, {
                key: "_nextMatch",
                value: function e() {
                    var t = this;
                    var n = this._state.findPrevious;
                    var r = this._linkService.page - 1;
                    var i = this._linkService.pagesCount;
                    this._highlightMatches = true;
                    if (this._dirtyMatch) {
                        this._dirtyMatch = false;
                        this._selected.pageIdx = this._selected.matchIdx = -1;
                        this._offset.pageIdx = r;
                        this._offset.matchIdx = null;
                        this._offset.wrapped = false;
                        this._resumePageIdx = null;
                        this._pageMatches.length = 0;
                        this._pageMatchesLength.length = 0;
                        this._matchesCountTotal = 0;
                        this._updateAllPages();
                        for (var a = 0; a < i; a++) {
                            if (this._pendingFindMatches.has(a)) {
                                continue
                            }
                            this._pendingFindMatches.add(a);
                            this._extractTextPromises[a].then(function (e) {
                                t._pendingFindMatches["delete"](e);
                                t._calculateMatch(e)
                            })
                        }
                    }
                    if (this._query === "") {
                        this._updateUIState(g.FOUND);
                        return
                    }
                    if (this._resumePageIdx) {
                        return
                    }
                    var o = this._offset;
                    this._pagesToSearch = i;
                    if (o.matchIdx !== null) {
                        var s = this._pageMatches[o.pageIdx].length;
                        if (!n && o.matchIdx + 1 < s || n && o.matchIdx > 0) {
                            o.matchIdx = n ? o.matchIdx - 1 : o.matchIdx + 1;
                            this._updateMatch(true);
                            return
                        }
                        this._advanceOffsetPage(n)
                    }
                    this._nextPageMatch()
                }
            }, {
                key: "_matchesReady",
                value: function e(t) {
                    var n = this._offset;
                    var r = t.length;
                    var i = this._state.findPrevious;
                    if (r) {
                        n.matchIdx = i ? r - 1 : 0;
                        this._updateMatch(true);
                        return true
                    }
                    this._advanceOffsetPage(i);
                    if (n.wrapped) {
                        n.matchIdx = null;
                        if (this._pagesToSearch < 0) {
                            this._updateMatch(false);
                            return true
                        }
                    }
                    return false
                }
            }, {
                key: "_nextPageMatch",
                value: function e() {
                    if (this._resumePageIdx !== null) {
                        console.error("There can only be one pending page.")
                    }
                    var t = null;
                    do {
                        var n = this._offset.pageIdx;
                        t = this._pageMatches[n];
                        if (!t) {
                            this._resumePageIdx = n;
                            break
                        }
                    } while (!this._matchesReady(t))
                }
            }, {
                key: "_advanceOffsetPage",
                value: function e(t) {
                    var n = this._offset;
                    var r = this._linkService.pagesCount;
                    n.pageIdx = t ? n.pageIdx - 1 : n.pageIdx + 1;
                    n.matchIdx = null;
                    this._pagesToSearch--;
                    if (n.pageIdx >= r || n.pageIdx < 0) {
                        n.pageIdx = t ? r - 1 : 0;
                        n.wrapped = true
                    }
                }
            }, {
                key: "_updateMatch",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    var n = g.NOT_FOUND;
                    var r = this._offset.wrapped;
                    this._offset.wrapped = false;
                    if (t) {
                        var i = this._selected.pageIdx;
                        this._selected.pageIdx = this._offset.pageIdx;
                        this._selected.matchIdx = this._offset.matchIdx;
                        n = r ? g.WRAPPED : g.FOUND;
                        if (i !== -1 && i !== this._selected.pageIdx) {
                            this._updatePage(i)
                        }
                    }
                    this._updateUIState(n, this._state.findPrevious);
                    if (this._selected.pageIdx !== -1) {
                        this._scrollMatches = true;
                        this._updatePage(this._selected.pageIdx)
                    }
                }
            }, {
                key: "_onFindBarClose",
                value: function e(t) {
                    var n = this;
                    var r = this._pdfDocument;
                    this._firstPageCapability.promise.then(function () {
                        if (!n._pdfDocument || r && n._pdfDocument !== r) {
                            return
                        }
                        if (n._findTimeout) {
                            clearTimeout(n._findTimeout);
                            n._findTimeout = null
                        }
                        if (n._resumePageIdx) {
                            n._resumePageIdx = null;
                            n._dirtyMatch = true
                        }
                        n._updateUIState(g.FOUND);
                        n._highlightMatches = false;
                        n._updateAllPages()
                    })
                }
            }, {
                key: "_requestMatchesCount",
                value: function e() {
                    var t = this._selected,
                        n = t.pageIdx,
                        r = t.matchIdx;
                    var i = 0,
                        a = this._matchesCountTotal;
                    if (r !== -1) {
                        for (var o = 0; o < n; o++) {
                            var s;
                            i += ((s = this._pageMatches[o]) === null || s === void 0 ? void 0 : s.length) || 0
                        }
                        i += r + 1
                    }
                    if (i < 1 || i > a) {
                        i = a = 0
                    }
                    return {
                        current: i,
                        total: a
                    }
                }
            }, {
                key: "_updateUIResultsCount",
                value: function e() {
                    this._eventBus.dispatch("updatefindmatchescount", {
                        source: this,
                        matchesCount: this._requestMatchesCount()
                    })
                }
            }, {
                key: "_updateUIState",
                value: function e(t) {
                    var n, r;
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this._eventBus.dispatch("updatefindcontrolstate", {
                        source: this,
                        state: t,
                        previous: i,
                        matchesCount: this._requestMatchesCount(),
                        rawQuery: (n = (r = this._state) === null || r === void 0 ? void 0 : r.query) !== null && n !== void 0 ? n : null
                    })
                }
            }]);
            return i
        }();
        t.PDFFindController = k
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.CharacterType = void 0;
        t.getCharacterType = h;
        var n = {
            SPACE: 0,
            ALPHA_LETTER: 1,
            PUNCT: 2,
            HAN_LETTER: 3,
            KATAKANA_LETTER: 4,
            HIRAGANA_LETTER: 5,
            HALFWIDTH_KATAKANA_LETTER: 6,
            THAI_LETTER: 7
        };
        t.CharacterType = n;

        function r(e) {
            return e < 11904
        }

        function i(e) {
            return (e & 65408) === 0
        }

        function a(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }

        function o(e) {
            return e >= 48 && e <= 57
        }

        function s(e) {
            return e === 32 || e === 9 || e === 13 || e === 10
        }

        function u(e) {
            return e >= 13312 && e <= 40959 || e >= 63744 && e <= 64255
        }

        function l(e) {
            return e >= 12448 && e <= 12543
        }

        function c(e) {
            return e >= 12352 && e <= 12447
        }

        function f(e) {
            return e >= 65376 && e <= 65439
        }

        function d(e) {
            return (e & 65408) === 3584
        }

        function h(e) {
            if (r(e)) {
                if (i(e)) {
                    if (s(e)) {
                        return n.SPACE
                    } else if (a(e) || o(e) || e === 95) {
                        return n.ALPHA_LETTER
                    }
                    return n.PUNCT
                } else if (d(e)) {
                    return n.THAI_LETTER
                } else if (e === 160) {
                    return n.SPACE
                }
                return n.ALPHA_LETTER
            }
            if (u(e)) {
                return n.HAN_LETTER
            } else if (l(e)) {
                return n.KATAKANA_LETTER
            } else if (c(e)) {
                return n.HIRAGANA_LETTER
            } else if (f(e)) {
                return n.HALFWIDTH_KATAKANA_LETTER
            }
            return n.ALPHA_LETTER
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFHistory = void 0;
        t.isDestArraysEqual = _;
        t.isDestHashesEqual = w;
        var f = n(5);
        var d = n(6);

        function o(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                o = function e(t) {
                    return typeof t
                }
            } else {
                o = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return o(e)
        }

        function s(e, t) {
            return l(e) || u(e, t) || i(e, t) || r()
        }

        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function i(e, t) {
            if (!e) return;
            if (typeof e === "string") return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }

        function a(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function u(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function l(e) {
            if (Array.isArray(e)) return e
        }

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function p(e, t, n) {
            if (t) h(e.prototype, t);
            if (n) h(e, n);
            return e
        }
        var v = 1e3;
        var g = 50;
        var m = 1e3;

        function y() {
            return document.location.hash
        }
        var b = function () {
            function i(e) {
                var t = this;
                var n = e.linkService,
                    r = e.eventBus;
                c(this, i);
                this.linkService = n;
                this.eventBus = r;
                this._initialized = false;
                this._fingerprint = "";
                this.reset();
                this._boundEvents = null;
                this._isViewerInPresentationMode = false;
                this.eventBus._on("presentationmodechanged", function (e) {
                    t._isViewerInPresentationMode = e.state !== f.PresentationModeState.NORMAL
                });
                this.eventBus._on("pagesinit", function () {
                    t._isPagesLoaded = false;
                    t.eventBus._on("pagesloaded", function (e) {
                        t._isPagesLoaded = !!e.pagesCount
                    }, {
                        once: true
                    })
                })
            }
            p(i, [{
                key: "initialize",
                value: function e(t) {
                    var n = t.fingerprint,
                        r = t.resetHistory,
                        i = r === void 0 ? false : r,
                        a = t.updateUrl,
                        o = a === void 0 ? false : a;
                    if (!n || typeof n !== "string") {
                        console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
                        return
                    }
                    if (this._initialized) {
                        this.reset()
                    }
                    var s = this._fingerprint !== "" && this._fingerprint !== n;
                    this._fingerprint = n;
                    this._updateUrl = o === true;
                    this._initialized = true;
                    this._bindEvents();
                    var u = window.history.state;
                    this._popStateInProgress = false;
                    this._blockHashChange = 0;
                    this._currentHash = y();
                    this._numPositionUpdates = 0;
                    this._uid = this._maxUid = 0;
                    this._destination = null;
                    this._position = null;
                    if (!this._isValidState(u, true) || i) {
                        var l = this._parseCurrentHash(true),
                            c = l.hash,
                            f = l.page,
                            d = l.rotation;
                        if (!c || s || i) {
                            this._pushOrReplaceState(null, true);
                            return
                        }
                        this._pushOrReplaceState({
                            hash: c,
                            page: f,
                            rotation: d
                        }, true);
                        return
                    }
                    var h = u.destination;
                    this._updateInternalState(h, u.uid, true);
                    if (h.rotation !== undefined) {
                        this._initialRotation = h.rotation
                    }
                    if (h.dest) {
                        this._initialBookmark = JSON.stringify(h.dest);
                        this._destination.page = null
                    } else if (h.hash) {
                        this._initialBookmark = h.hash
                    } else if (h.page) {
                        this._initialBookmark = "page=".concat(h.page)
                    }
                }
            }, {
                key: "reset",
                value: function e() {
                    if (this._initialized) {
                        this._pageHide();
                        this._initialized = false;
                        this._unbindEvents()
                    }
                    if (this._updateViewareaTimeout) {
                        clearTimeout(this._updateViewareaTimeout);
                        this._updateViewareaTimeout = null
                    }
                    this._initialBookmark = null;
                    this._initialRotation = null
                }
            }, {
                key: "push",
                value: function e(t) {
                    var n = this;
                    var r = t.namedDest,
                        i = r === void 0 ? null : r,
                        a = t.explicitDest,
                        o = t.pageNumber;
                    if (!this._initialized) {
                        return
                    }
                    if (i && typeof i !== "string") {
                        console.error("PDFHistory.push: " + '"'.concat(i, '" is not a valid namedDest parameter.'));
                        return
                    } else if (!Array.isArray(a)) {
                        console.error("PDFHistory.push: " + '"'.concat(a, '" is not a valid explicitDest parameter.'));
                        return
                    } else if (!this._isValidPage(o)) {
                        if (o !== null || this._destination) {
                            console.error("PDFHistory.push: " + '"'.concat(o, '" is not a valid pageNumber parameter.'));
                            return
                        }
                    }
                    var s = i || JSON.stringify(a);
                    if (!s) {
                        return
                    }
                    var u = false;
                    if (this._destination && (w(this._destination.hash, s) || _(this._destination.dest, a))) {
                        if (this._destination.page) {
                            return
                        }
                        u = true
                    }
                    if (this._popStateInProgress && !u) {
                        return
                    }
                    this._pushOrReplaceState({
                        dest: a,
                        hash: s,
                        page: o,
                        rotation: this.linkService.rotation
                    }, u);
                    if (!this._popStateInProgress) {
                        this._popStateInProgress = true;
                        Promise.resolve().then(function () {
                            n._popStateInProgress = false
                        })
                    }
                }
            }, {
                key: "pushPage",
                value: function e(t) {
                    var n, r = this;
                    if (!this._initialized) {
                        return
                    }
                    if (!this._isValidPage(t)) {
                        console.error('PDFHistory.pushPage: "'.concat(t, '" is not a valid page number.'));
                        return
                    }
                    if (((n = this._destination) === null || n === void 0 ? void 0 : n.page) === t) {
                        return
                    }
                    if (this._popStateInProgress) {
                        return
                    }
                    this._pushOrReplaceState({
                        dest: null,
                        hash: "page=".concat(t),
                        page: t,
                        rotation: this.linkService.rotation
                    });
                    if (!this._popStateInProgress) {
                        this._popStateInProgress = true;
                        Promise.resolve().then(function () {
                            r._popStateInProgress = false
                        })
                    }
                }
            }, {
                key: "pushCurrentPosition",
                value: function e() {
                    if (!this._initialized || this._popStateInProgress) {
                        return
                    }
                    this._tryPushCurrentPosition()
                }
            }, {
                key: "back",
                value: function e() {
                    if (!this._initialized || this._popStateInProgress) {
                        return
                    }
                    var t = window.history.state;
                    if (this._isValidState(t) && t.uid > 0) {
                        window.history.back()
                    }
                }
            }, {
                key: "forward",
                value: function e() {
                    if (!this._initialized || this._popStateInProgress) {
                        return
                    }
                    var t = window.history.state;
                    if (this._isValidState(t) && t.uid < this._maxUid) {
                        window.history.forward()
                    }
                }
            }, {
                key: "popStateInProgress",
                get: function e() {
                    return this._initialized && (this._popStateInProgress || this._blockHashChange > 0)
                }
            }, {
                key: "initialBookmark",
                get: function e() {
                    return this._initialized ? this._initialBookmark : null
                }
            }, {
                key: "initialRotation",
                get: function e() {
                    return this._initialized ? this._initialRotation : null
                }
            }, {
                key: "_pushOrReplaceState",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var r = n || !this._destination;
                    var i = {
                        fingerprint: this._fingerprint,
                        uid: r ? this._uid : this._uid + 1,
                        destination: t
                    };
                    this._updateInternalState(t, i.uid);
                    var a;
                    if (this._updateUrl && t !== null && t !== void 0 && t.hash) {
                        var o = document.location.href.split("#")[0];
                        if (!o.startsWith("file://")) {
                            a = "".concat(o, "#").concat(t.hash)
                        }
                    }
                    if (r) {
                        window.history.replaceState(i, "", a)
                    } else {
                        window.history.pushState(i, "", a)
                    }
                }
            }, {
                key: "_tryPushCurrentPosition",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (!this._position) {
                        return
                    }
                    var n = this._position;
                    if (t) {
                        n = Object.assign(Object.create(null), this._position);
                        n.temporary = true
                    }
                    if (!this._destination) {
                        this._pushOrReplaceState(n);
                        return
                    }
                    if (this._destination.temporary) {
                        this._pushOrReplaceState(n, true);
                        return
                    }
                    if (this._destination.hash === n.hash) {
                        return
                    }
                    if (!this._destination.page && (g <= 0 || this._numPositionUpdates <= g)) {
                        return
                    }
                    var r = false;
                    if (this._destination.page >= n.first && this._destination.page <= n.page) {
                        if (this._destination.dest !== undefined || !this._destination.first) {
                            return
                        }
                        r = true
                    }
                    this._pushOrReplaceState(n, r)
                }
            }, {
                key: "_isValidPage",
                value: function e(t) {
                    return Number.isInteger(t) && t > 0 && t <= this.linkService.pagesCount
                }
            }, {
                key: "_isValidState",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (!t) {
                        return false
                    }
                    if (t.fingerprint !== this._fingerprint) {
                        if (n) {
                            if (typeof t.fingerprint !== "string" || t.fingerprint.length !== this._fingerprint.length) {
                                return false
                            }
                            var r = performance.getEntriesByType("navigation"),
                                i = s(r, 1),
                                a = i[0];
                            if ((a === null || a === void 0 ? void 0 : a.type) !== "reload") {
                                return false
                            }
                        } else {
                            return false
                        }
                    }
                    if (!Number.isInteger(t.uid) || t.uid < 0) {
                        return false
                    }
                    if (t.destination === null || o(t.destination) !== "object") {
                        return false
                    }
                    return true
                }
            }, {
                key: "_updateInternalState",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    if (this._updateViewareaTimeout) {
                        clearTimeout(this._updateViewareaTimeout);
                        this._updateViewareaTimeout = null
                    }
                    if (r && t !== null && t !== void 0 && t.temporary) {
                        delete t.temporary
                    }
                    this._destination = t;
                    this._uid = n;
                    this._maxUid = Math.max(this._maxUid, n);
                    this._numPositionUpdates = 0
                }
            }, {
                key: "_parseCurrentHash",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    var n = unescape(y()).substring(1);
                    var r = (0, f.parseQueryString)(n);
                    var i = r.get("nameddest") || "";
                    var a = r.get("page") | 0;
                    if (!this._isValidPage(a) || t && i.length > 0) {
                        a = null
                    }
                    return {
                        hash: n,
                        page: a,
                        rotation: this.linkService.rotation
                    }
                }
            }, {
                key: "_updateViewarea",
                value: function e(t) {
                    var n = this;
                    var r = t.location;
                    if (this._updateViewareaTimeout) {
                        clearTimeout(this._updateViewareaTimeout);
                        this._updateViewareaTimeout = null
                    }
                    this._position = {
                        hash: this._isViewerInPresentationMode ? "page=".concat(r.pageNumber) : r.pdfOpenParams.substring(1),
                        page: this.linkService.page,
                        first: r.pageNumber,
                        rotation: r.rotation
                    };
                    if (this._popStateInProgress) {
                        return
                    }
                    if (g > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
                        this._numPositionUpdates++
                    }
                    if (m > 0) {
                        this._updateViewareaTimeout = setTimeout(function () {
                            if (!n._popStateInProgress) {
                                n._tryPushCurrentPosition(true)
                            }
                            n._updateViewareaTimeout = null
                        }, m)
                    }
                }
            }, {
                key: "_popState",
                value: function e(t) {
                    var n = this;
                    var r = t.state;
                    var i = y(),
                        a = this._currentHash !== i;
                    this._currentHash = i;
                    if (!r) {
                        this._uid++;
                        var o = this._parseCurrentHash(),
                            s = o.hash,
                            u = o.page,
                            l = o.rotation;
                        this._pushOrReplaceState({
                            hash: s,
                            page: u,
                            rotation: l
                        }, true);
                        return
                    }
                    if (!this._isValidState(r)) {
                        return
                    }
                    this._popStateInProgress = true;
                    if (a) {
                        this._blockHashChange++;
                        (0, d.waitOnEventOrTimeout)({
                            target: window,
                            name: "hashchange",
                            delay: v
                        }).then(function () {
                            n._blockHashChange--
                        })
                    }
                    var c = r.destination;
                    this._updateInternalState(c, r.uid, true);
                    if ((0, f.isValidRotation)(c.rotation)) {
                        this.linkService.rotation = c.rotation
                    }
                    if (c.dest) {
                        this.linkService.goToDestination(c.dest)
                    } else if (c.hash) {
                        this.linkService.setHash(c.hash)
                    } else if (c.page) {
                        this.linkService.page = c.page
                    }
                    Promise.resolve().then(function () {
                        n._popStateInProgress = false
                    })
                }
            }, {
                key: "_pageHide",
                value: function e() {
                    if (!this._destination || this._destination.temporary) {
                        this._tryPushCurrentPosition()
                    }
                }
            }, {
                key: "_bindEvents",
                value: function e() {
                    if (this._boundEvents) {
                        return
                    }
                    this._boundEvents = {
                        updateViewarea: this._updateViewarea.bind(this),
                        popState: this._popState.bind(this),
                        pageHide: this._pageHide.bind(this)
                    };
                    this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea);
                    window.addEventListener("popstate", this._boundEvents.popState);
                    window.addEventListener("pagehide", this._boundEvents.pageHide)
                }
            }, {
                key: "_unbindEvents",
                value: function e() {
                    if (!this._boundEvents) {
                        return
                    }
                    this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea);
                    window.removeEventListener("popstate", this._boundEvents.popState);
                    window.removeEventListener("pagehide", this._boundEvents.pageHide);
                    this._boundEvents = null
                }
            }]);
            return i
        }();
        t.PDFHistory = b;

        function w(e, t) {
            if (typeof e !== "string" || typeof t !== "string") {
                return false
            }
            if (e === t) {
                return true
            }
            var n = (0, f.parseQueryString)(e).get("nameddest");
            if (n === t) {
                return true
            }
            return false
        }

        function _(e, t) {
            function r(e, t) {
                if (o(e) !== o(t)) {
                    return false
                }
                if (Array.isArray(e) || Array.isArray(t)) {
                    return false
                }
                if (e !== null && o(e) === "object" && t !== null) {
                    if (Object.keys(e).length !== Object.keys(t).length) {
                        return false
                    }
                    for (var n in e) {
                        if (!r(e[n], t[n])) {
                            return false
                        }
                    }
                    return true
                }
                return e === t || Number.isNaN(e) && Number.isNaN(t)
            }
            if (!(Array.isArray(e) && Array.isArray(t))) {
                return false
            }
            if (e.length !== t.length) {
                return false
            }
            for (var n = 0, i = e.length; n < i; n++) {
                if (!r(e[n], t[n])) {
                    return false
                }
            }
            return true
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFLayerViewer = void 0;
        var o = i(n(3));
        var r = n(13);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function b(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                b = function e(t) {
                    return typeof t
                }
            } else {
                b = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return b(e)
        }

        function w(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = u(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function u(e, t) {
            if (!e) return;
            if (typeof e === "string") return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }

        function a(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function s(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) {
            if (t) f(e.prototype, t);
            if (n) f(e, n);
            return e
        }

        function h(e, t, n) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                h = Reflect.get
            } else {
                h = function e(t, n, r) {
                    var i = p(t, n);
                    if (!i) return;
                    var a = Object.getOwnPropertyDescriptor(i, n);
                    if (a.get) {
                        return a.get.call(r)
                    }
                    return a.value
                }
            }
            return h(e, t, n || e)
        }

        function p(e, t) {
            while (!Object.prototype.hasOwnProperty.call(e, t)) {
                e = S(e);
                if (e === null) break
            }
            return e
        }

        function v(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) g(e, t)
        }

        function g(e, t) {
            g = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return g(e, t)
        }

        function m(i) {
            var a = P();
            return function e() {
                var t = S(i),
                    n;
                if (a) {
                    var r = S(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return y(this, n)
            }
        }

        function y(e, t) {
            if (t && (b(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return _(e)
        }

        function _(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function P() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function S(e) {
            S = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return S(e)
        }
        var k = function (e) {
            v(a, e);
            var n = m(a);

            function a(e) {
                var t;
                c(this, a);
                t = n.call(this, e);
                t.l10n = e.l10n;
                t.eventBus._on("resetlayers", t._resetLayers.bind(_(t)));
                t.eventBus._on("togglelayerstree", t._toggleAllTreeItems.bind(_(t)));
                return t
            }
            d(a, [{
                key: "reset",
                value: function e() {
                    h(S(a.prototype), "reset", this).call(this);
                    this._optionalContentConfig = null
                }
            }, {
                key: "_dispatchEvent",
                value: function e(t) {
                    this.eventBus.dispatch("layersloaded", {
                        source: this,
                        layersCount: t
                    })
                }
            }, {
                key: "_bindLink",
                value: function e(t, n) {
                    var r = this;
                    var i = n.groupId,
                        a = n.input;
                    var o = function e() {
                        r._optionalContentConfig.setVisibility(i, a.checked);
                        r.eventBus.dispatch("optionalcontentconfig", {
                            source: r,
                            promise: Promise.resolve(r._optionalContentConfig)
                        })
                    };
                    t.onclick = function (e) {
                        if (e.target === a) {
                            o();
                            return true
                        } else if (e.target !== t) {
                            return true
                        }
                        a.checked = !a.checked;
                        o();
                        return false
                    }
                }
            }, {
                key: "_setNestedName",
                value: function () {
                    var n = s(o["default"].mark(function e(n, r) {
                        var i, a;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        i = r.name, a = i === void 0 ? null : i;
                                        if (!(typeof a === "string")) {
                                            t.next = 4;
                                            break
                                        }
                                        n.textContent = this._normalizeTextContent(a);
                                        return t.abrupt("return");
                                    case 4:
                                        t.next = 6;
                                        return this.l10n.get("additional_layers");
                                    case 6:
                                        n.textContent = t.sent;
                                        n.style.fontStyle = "italic";
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_addToggleButton",
                value: function e(t, n) {
                    var r = n.name,
                        i = r === void 0 ? null : r;
                    h(S(a.prototype), "_addToggleButton", this).call(this, t, i === null)
                }
            }, {
                key: "_toggleAllTreeItems",
                value: function e() {
                    if (!this._optionalContentConfig) {
                        return
                    }
                    h(S(a.prototype), "_toggleAllTreeItems", this).call(this)
                }
            }, {
                key: "render",
                value: function e(t) {
                    var n = t.optionalContentConfig,
                        r = t.pdfDocument;
                    if (this._optionalContentConfig) {
                        this.reset()
                    }
                    this._optionalContentConfig = n || null;
                    this._pdfDocument = r || null;
                    var i = n === null || n === void 0 ? void 0 : n.getOrder();
                    if (!i) {
                        this._dispatchEvent(0);
                        return
                    }
                    var a = document.createDocumentFragment(),
                        o = [{
                            parent: a,
                            groups: i
                        }];
                    var s = 0,
                        u = false;
                    while (o.length > 0) {
                        var l = o.shift();
                        var c = w(l.groups),
                            f;
                        try {
                            for (c.s(); !(f = c.n()).done;) {
                                var d = f.value;
                                var h = document.createElement("div");
                                h.className = "treeItem";
                                var p = document.createElement("a");
                                h.appendChild(p);
                                if (b(d) === "object") {
                                    u = true;
                                    this._addToggleButton(h, d);
                                    this._setNestedName(p, d);
                                    var v = document.createElement("div");
                                    v.className = "treeItems";
                                    h.appendChild(v);
                                    o.push({
                                        parent: v,
                                        groups: d.order
                                    })
                                } else {
                                    var g = n.getGroup(d);
                                    var m = document.createElement("input");
                                    this._bindLink(p, {
                                        groupId: d,
                                        input: m
                                    });
                                    m.type = "checkbox";
                                    m.id = d;
                                    m.checked = g.visible;
                                    var y = document.createElement("label");
                                    y.setAttribute("for", d);
                                    y.textContent = this._normalizeTextContent(g.name);
                                    p.appendChild(m);
                                    p.appendChild(y);
                                    s++
                                }
                                l.parent.appendChild(h)
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                    }
                    this._finishRendering(a, s, u)
                }
            }, {
                key: "_resetLayers",
                value: function () {
                    var e = s(o["default"].mark(function e() {
                        var n;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._optionalContentConfig) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        t.next = 4;
                                        return this._pdfDocument.getOptionalContentConfig();
                                    case 4:
                                        n = t.sent;
                                        this.eventBus.dispatch("optionalcontentconfig", {
                                            source: this,
                                            promise: Promise.resolve(n)
                                        });
                                        this.render({
                                            optionalContentConfig: n,
                                            pdfDocument: this._pdfDocument
                                        });
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]);
            return a
        }(r.BaseTreeViewer);
        t.PDFLayerViewer = k
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.SimpleLinkService = t.PDFLinkService = void 0;
        var a = r(n(3));
        var i = n(7);
        var l = n(5);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function o(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function s(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                s = function e(t) {
                    return typeof t
                }
            } else {
                s = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return s(e)
        }

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) {
            if (t) f(e.prototype, t);
            if (n) f(e, n);
            return e
        }
        var h = function () {
            function u() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                    t = e.eventBus,
                    n = e.externalLinkTarget,
                    r = n === void 0 ? null : n,
                    i = e.externalLinkRel,
                    a = i === void 0 ? null : i,
                    o = e.ignoreDestinationZoom,
                    s = o === void 0 ? false : o;
                c(this, u);
                this.eventBus = t;
                this.externalLinkTarget = r;
                this.externalLinkRel = a;
                this.externalLinkEnabled = true;
                this._ignoreDestinationZoom = s;
                this.baseUrl = null;
                this.pdfDocument = null;
                this.pdfViewer = null;
                this.pdfHistory = null;
                this._pagesRefCache = null
            }
            d(u, [{
                key: "setDocument",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    this.baseUrl = n;
                    this.pdfDocument = t;
                    this._pagesRefCache = Object.create(null)
                }
            }, {
                key: "setViewer",
                value: function e(t) {
                    this.pdfViewer = t
                }
            }, {
                key: "setHistory",
                value: function e(t) {
                    this.pdfHistory = t
                }
            }, {
                key: "pagesCount",
                get: function e() {
                    return this.pdfDocument ? this.pdfDocument.numPages : 0
                }
            }, {
                key: "page",
                get: function e() {
                    return this.pdfViewer.currentPageNumber
                },
                set: function e(t) {
                    this.pdfViewer.currentPageNumber = t
                }
            }, {
                key: "rotation",
                get: function e() {
                    return this.pdfViewer.pagesRotation
                },
                set: function e(t) {
                    this.pdfViewer.pagesRotation = t
                }
            }, {
                key: "_goToDestinationHelper",
                value: function e(t) {
                    var n = this;
                    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var i = arguments.length > 2 ? arguments[2] : undefined;
                    var a = i[0];
                    var o;
                    if (s(a) === "object" && a !== null) {
                        o = this._cachedPageNumber(a);
                        if (!o) {
                            this.pdfDocument.getPageIndex(a).then(function (e) {
                                n.cachePageRef(e + 1, a);
                                n._goToDestinationHelper(t, r, i)
                            })["catch"](function () {
                                console.error('PDFLinkService._goToDestinationHelper: "'.concat(a, '" is not ') + 'a valid page reference, for dest="'.concat(t, '".'))
                            });
                            return
                        }
                    } else if (Number.isInteger(a)) {
                        o = a + 1
                    } else {
                        console.error('PDFLinkService._goToDestinationHelper: "'.concat(a, '" is not ') + 'a valid destination reference, for dest="'.concat(t, '".'));
                        return
                    }
                    if (!o || o < 1 || o > this.pagesCount) {
                        console.error('PDFLinkService._goToDestinationHelper: "'.concat(o, '" is not ') + 'a valid page number, for dest="'.concat(t, '".'));
                        return
                    }
                    if (this.pdfHistory) {
                        this.pdfHistory.pushCurrentPosition();
                        this.pdfHistory.push({
                            namedDest: r,
                            explicitDest: i,
                            pageNumber: o
                        })
                    }
                    this.pdfViewer.scrollPageIntoView({
                        pageNumber: o,
                        destArray: i,
                        ignoreDestinationZoom: this._ignoreDestinationZoom
                    })
                }
            }, {
                key: "goToDestination",
                value: function () {
                    var t = o(a["default"].mark(function e(n) {
                        var r, i;
                        return a["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this.pdfDocument) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        if (!(typeof n === "string")) {
                                            t.next = 9;
                                            break
                                        }
                                        r = n;
                                        t.next = 6;
                                        return this.pdfDocument.getDestination(n);
                                    case 6:
                                        i = t.sent;
                                        t.next = 13;
                                        break;
                                    case 9:
                                        r = null;
                                        t.next = 12;
                                        return n;
                                    case 12:
                                        i = t.sent;
                                    case 13:
                                        if (Array.isArray(i)) {
                                            t.next = 16;
                                            break
                                        }
                                        console.error('PDFLinkService.goToDestination: "'.concat(i, '" is not ') + 'a valid destination array, for dest="'.concat(n, '".'));
                                        return t.abrupt("return");
                                    case 16:
                                        this._goToDestinationHelper(n, r, i);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "goToPage",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    var n = typeof t === "string" && this.pdfViewer.pageLabelToPageNumber(t) || t | 0;
                    if (!(Number.isInteger(n) && n > 0 && n <= this.pagesCount)) {
                        console.error('PDFLinkService.goToPage: "'.concat(t, '" is not a valid page.'));
                        return
                    }
                    if (this.pdfHistory) {
                        this.pdfHistory.pushCurrentPosition();
                        this.pdfHistory.pushPage(n)
                    }
                    this.pdfViewer.scrollPageIntoView({
                        pageNumber: n
                    })
                }
            }, {
                key: "addLinkAttributes",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    (0, i.addLinkAttributes)(t, {
                        url: n,
                        target: r ? i.LinkTarget.BLANK : this.externalLinkTarget,
                        rel: this.externalLinkRel,
                        enabled: this.externalLinkEnabled
                    })
                }
            }, {
                key: "getDestinationHash",
                value: function e(t) {
                    if (typeof t === "string") {
                        if (t.length > 0) {
                            return this.getAnchorUrl("#" + escape(t))
                        }
                    } else if (Array.isArray(t)) {
                        var n = JSON.stringify(t);
                        if (n.length > 0) {
                            return this.getAnchorUrl("#" + escape(n))
                        }
                    }
                    return this.getAnchorUrl("")
                }
            }, {
                key: "getAnchorUrl",
                value: function e(t) {
                    return (this.baseUrl || "") + t
                }
            }, {
                key: "setHash",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    var n, r;
                    if (t.includes("=")) {
                        var i = (0, l.parseQueryString)(t);
                        if (i.has("search")) {
                            this.eventBus.dispatch("findfromurlhash", {
                                source: this,
                                query: i.get("search").replace(/"/g, ""),
                                phraseSearch: i.get("phrase") === "true"
                            })
                        }
                        if (i.has("page")) {
                            n = i.get("page") | 0 || 1
                        }
                        if (i.has("zoom")) {
                            var a = i.get("zoom").split(",");
                            var o = a[0];
                            var s = parseFloat(o);
                            if (!o.includes("Fit")) {
                                r = [null, {
                                    name: "XYZ"
                                }, a.length > 1 ? a[1] | 0 : null, a.length > 2 ? a[2] | 0 : null, s ? s / 100 : o]
                            } else {
                                if (o === "Fit" || o === "FitB") {
                                    r = [null, {
                                        name: o
                                    }]
                                } else if (o === "FitH" || o === "FitBH" || o === "FitV" || o === "FitBV") {
                                    r = [null, {
                                        name: o
                                    }, a.length > 1 ? a[1] | 0 : null]
                                } else if (o === "FitR") {
                                    if (a.length !== 5) {
                                        console.error('PDFLinkService.setHash: Not enough parameters for "FitR".')
                                    } else {
                                        r = [null, {
                                            name: o
                                        }, a[1] | 0, a[2] | 0, a[3] | 0, a[4] | 0]
                                    }
                                } else {
                                    console.error('PDFLinkService.setHash: "'.concat(o, '" is not ') + "a valid zoom value.")
                                }
                            }
                        }
                        if (r) {
                            this.pdfViewer.scrollPageIntoView({
                                pageNumber: n || this.page,
                                destArray: r,
                                allowNegativeOffset: true
                            })
                        } else if (n) {
                            this.page = n
                        }
                        if (i.has("pagemode")) {
                            this.eventBus.dispatch("pagemode", {
                                source: this,
                                mode: i.get("pagemode")
                            })
                        }
                        if (i.has("nameddest")) {
                            this.goToDestination(i.get("nameddest"))
                        }
                    } else {
                        r = unescape(t);
                        try {
                            r = JSON.parse(r);
                            if (!Array.isArray(r)) {
                                r = r.toString()
                            }
                        } catch (e) {}
                        if (typeof r === "string" || p(r)) {
                            this.goToDestination(r);
                            return
                        }
                        console.error('PDFLinkService.setHash: "'.concat(unescape(t), '" is not ') + "a valid destination.")
                    }
                }
            }, {
                key: "executeNamedAction",
                value: function e(t) {
                    var n, r;
                    switch (t) {
                        case "GoBack":
                            (n = this.pdfHistory) === null || n === void 0 ? void 0 : n.back();
                            break;
                        case "GoForward":
                            (r = this.pdfHistory) === null || r === void 0 ? void 0 : r.forward();
                            break;
                        case "NextPage":
                            this.pdfViewer.nextPage();
                            break;
                        case "PrevPage":
                            this.pdfViewer.previousPage();
                            break;
                        case "LastPage":
                            this.page = this.pagesCount;
                            break;
                        case "FirstPage":
                            this.page = 1;
                            break;
                        default:
                            break
                    }
                    this.eventBus.dispatch("namedaction", {
                        source: this,
                        action: t
                    })
                }
            }, {
                key: "cachePageRef",
                value: function e(t, n) {
                    if (!n) {
                        return
                    }
                    var r = n.gen === 0 ? "".concat(n.num, "R") : "".concat(n.num, "R").concat(n.gen);
                    this._pagesRefCache[r] = t
                }
            }, {
                key: "_cachedPageNumber",
                value: function e(t) {
                    var n;
                    if (!t) {
                        return null
                    }
                    var r = t.gen === 0 ? "".concat(t.num, "R") : "".concat(t.num, "R").concat(t.gen);
                    return ((n = this._pagesRefCache) === null || n === void 0 ? void 0 : n[r]) || null
                }
            }, {
                key: "isPageVisible",
                value: function e(t) {
                    return this.pdfViewer.isPageVisible(t)
                }
            }, {
                key: "isPageCached",
                value: function e(t) {
                    return this.pdfViewer.isPageCached(t)
                }
            }]);
            return u
        }();
        t.PDFLinkService = h;

        function p(e) {
            if (!Array.isArray(e)) {
                return false
            }
            var t = e.length;
            if (t < 2) {
                return false
            }
            var n = e[0];
            if (!(s(n) === "object" && Number.isInteger(n.num) && Number.isInteger(n.gen)) && !(Number.isInteger(n) && n >= 0)) {
                return false
            }
            var r = e[1];
            if (!(s(r) === "object" && typeof r.name === "string")) {
                return false
            }
            var i = true;
            switch (r.name) {
                case "XYZ":
                    if (t !== 5) {
                        return false
                    }
                    break;
                case "Fit":
                case "FitB":
                    return t === 2;
                case "FitH":
                case "FitBH":
                case "FitV":
                case "FitBV":
                    if (t !== 3) {
                        return false
                    }
                    break;
                case "FitR":
                    if (t !== 6) {
                        return false
                    }
                    i = false;
                    break;
                default:
                    return false
            }
            for (var a = 2; a < t; a++) {
                var o = e[a];
                if (!(typeof o === "number" || i && o === null)) {
                    return false
                }
            }
            return true
        }
        var v = function () {
            function e() {
                c(this, e);
                this.externalLinkEnabled = true
            }
            d(e, [{
                key: "pagesCount",
                get: function e() {
                    return 0
                }
            }, {
                key: "page",
                get: function e() {
                    return 0
                },
                set: function e(t) {}
            }, {
                key: "rotation",
                get: function e() {
                    return 0
                },
                set: function e(t) {}
            }, {
                key: "goToDestination",
                value: function () {
                    var t = o(a["default"].mark(function e(t) {
                        return a["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "goToPage",
                value: function e(t) {}
            }, {
                key: "addLinkAttributes",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    (0, i.addLinkAttributes)(t, {
                        url: n,
                        enabled: this.externalLinkEnabled
                    })
                }
            }, {
                key: "getDestinationHash",
                value: function e(t) {
                    return "#"
                }
            }, {
                key: "getAnchorUrl",
                value: function e(t) {
                    return "#"
                }
            }, {
                key: "setHash",
                value: function e(t) {}
            }, {
                key: "executeNamedAction",
                value: function e(t) {}
            }, {
                key: "cachePageRef",
                value: function e(t, n) {}
            }, {
                key: "isPageVisible",
                value: function e(t) {
                    return true
                }
            }, {
                key: "isPageCached",
                value: function e(t) {
                    return true
                }
            }]);
            return e
        }();
        t.SimpleLinkService = v
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFOutlineViewer = void 0;
        var b = i(n(3));
        var r = n(13);
        var w = n(7);
        var o = n(5);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                _ = function e(t) {
                    return typeof t
                }
            } else {
                _ = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return _(e)
        }

        function P(e, t) {
            return u(e) || s(e, t) || h(e, t) || a()
        }

        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function s(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function u(e) {
            if (Array.isArray(e)) return e
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function c(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function S(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = h(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function d(e) {
            return v(e) || p(e) || h(e) || f()
        }

        function f() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function h(e, t) {
            if (!e) return;
            if (typeof e === "string") return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
        }

        function p(e) {
            if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
        }

        function v(e) {
            if (Array.isArray(e)) return g(e)
        }

        function g(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function m(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function k(e, t, n) {
            if (t) y(e.prototype, t);
            if (n) y(e, n);
            return e
        }

        function E(e, t, n) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                E = Reflect.get
            } else {
                E = function e(t, n, r) {
                    var i = x(t, n);
                    if (!i) return;
                    var a = Object.getOwnPropertyDescriptor(i, n);
                    if (a.get) {
                        return a.get.call(r)
                    }
                    return a.value
                }
            }
            return E(e, t, n || e)
        }

        function x(e, t) {
            while (!Object.prototype.hasOwnProperty.call(e, t)) {
                e = A(e);
                if (e === null) break
            }
            return e
        }

        function C(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) L(e, t)
        }

        function L(e, t) {
            L = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return L(e, t)
        }

        function T(i) {
            var a = M();
            return function e() {
                var t = A(i),
                    n;
                if (a) {
                    var r = A(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return I(this, n)
            }
        }

        function I(e, t) {
            if (t && (_(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return O(e)
        }

        function O(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function M() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function A(e) {
            A = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return A(e)
        }
        var D = function (e) {
            C(f, e);
            var n = T(f);

            function f(e) {
                var t;
                m(this, f);
                t = n.call(this, e);
                t.linkService = e.linkService;
                t.eventBus._on("toggleoutlinetree", t._toggleAllTreeItems.bind(O(t)));
                t.eventBus._on("currentoutlineitem", t._currentOutlineItem.bind(O(t)));
                t.eventBus._on("pagechanging", function (e) {
                    t._currentPageNumber = e.pageNumber
                });
                t.eventBus._on("pagesloaded", function (e) {
                    t._isPagesLoaded = !!e.pagesCount;
                    if (t._currentOutlineItemCapability && !t._currentOutlineItemCapability.settled) {
                        t._currentOutlineItemCapability.resolve(t._isPagesLoaded)
                    }
                });
                t.eventBus._on("sidebarviewchanged", function (e) {
                    t._sidebarView = e.view
                });
                return t
            }
            k(f, [{
                key: "reset",
                value: function e() {
                    E(A(f.prototype), "reset", this).call(this);
                    this._outline = null;
                    this._pageNumberToDestHashCapability = null;
                    this._currentPageNumber = 1;
                    this._isPagesLoaded = null;
                    if (this._currentOutlineItemCapability && !this._currentOutlineItemCapability.settled) {
                        this._currentOutlineItemCapability.resolve(false)
                    }
                    this._currentOutlineItemCapability = null
                }
            }, {
                key: "_dispatchEvent",
                value: function e(t) {
                    var n;
                    this._currentOutlineItemCapability = (0, w.createPromiseCapability)();
                    if (t === 0 || (n = this._pdfDocument) !== null && n !== void 0 && n.loadingParams.disableAutoFetch) {
                        this._currentOutlineItemCapability.resolve(false)
                    } else if (this._isPagesLoaded !== null) {
                        this._currentOutlineItemCapability.resolve(this._isPagesLoaded)
                    }
                    this.eventBus.dispatch("outlineloaded", {
                        source: this,
                        outlineCount: t,
                        currentOutlineItemPromise: this._currentOutlineItemCapability.promise
                    })
                }
            }, {
                key: "_bindLink",
                value: function e(t, n) {
                    var r = this;
                    var i = n.url,
                        a = n.newWindow,
                        o = n.dest;
                    var s = this.linkService;
                    if (i) {
                        s.addLinkAttributes(t, i, a);
                        return
                    }
                    t.href = s.getDestinationHash(o);
                    t.onclick = function (e) {
                        r._updateCurrentTreeItem(e.target.parentNode);
                        if (o) {
                            s.goToDestination(o)
                        }
                        return false
                    }
                }
            }, {
                key: "_setStyles",
                value: function e(t, n) {
                    var r = n.bold,
                        i = n.italic;
                    if (r) {
                        t.style.fontWeight = "bold"
                    }
                    if (i) {
                        t.style.fontStyle = "italic"
                    }
                }
            }, {
                key: "_addToggleButton",
                value: function e(t, n) {
                    var r = n.count,
                        i = n.items;
                    var a = false;
                    if (r < 0) {
                        var o = i.length;
                        if (o > 0) {
                            var s = d(i);
                            while (s.length > 0) {
                                var u = s.shift(),
                                    l = u.count,
                                    c = u.items;
                                if (l > 0 && c.length > 0) {
                                    o += c.length;
                                    s.push.apply(s, d(c))
                                }
                            }
                        }
                        if (Math.abs(r) === o) {
                            a = true
                        }
                    }
                    E(A(f.prototype), "_addToggleButton", this).call(this, t, a)
                }
            }, {
                key: "_toggleAllTreeItems",
                value: function e() {
                    if (!this._outline) {
                        return
                    }
                    E(A(f.prototype), "_toggleAllTreeItems", this).call(this)
                }
            }, {
                key: "render",
                value: function e(t) {
                    var n = t.outline,
                        r = t.pdfDocument;
                    if (this._outline) {
                        this.reset()
                    }
                    this._outline = n || null;
                    this._pdfDocument = r || null;
                    if (!n) {
                        this._dispatchEvent(0);
                        return
                    }
                    var i = document.createDocumentFragment();
                    var a = [{
                        parent: i,
                        items: n
                    }];
                    var o = 0,
                        s = false;
                    while (a.length > 0) {
                        var u = a.shift();
                        var l = S(u.items),
                            c;
                        try {
                            for (l.s(); !(c = l.n()).done;) {
                                var f = c.value;
                                var d = document.createElement("div");
                                d.className = "treeItem";
                                var h = document.createElement("a");
                                this._bindLink(h, f);
                                this._setStyles(h, f);
                                h.textContent = this._normalizeTextContent(f.title);
                                d.appendChild(h);
                                if (f.items.length > 0) {
                                    s = true;
                                    this._addToggleButton(d, f);
                                    var p = document.createElement("div");
                                    p.className = "treeItems";
                                    d.appendChild(p);
                                    a.push({
                                        parent: p,
                                        items: f.items
                                    })
                                }
                                u.parent.appendChild(d);
                                o++
                            }
                        } catch (e) {
                            l.e(e)
                        } finally {
                            l.f()
                        }
                    }
                    this._finishRendering(i, o, s)
                }
            }, {
                key: "_currentOutlineItem",
                value: function () {
                    var e = c(b["default"].mark(function e() {
                        var n, r, i, a;
                        return b["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._isPagesLoaded) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("_currentOutlineItem: All pages have not been loaded.");
                                    case 2:
                                        if (!(!this._outline || !this._pdfDocument)) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        t.next = 6;
                                        return this._getPageNumberToDestHash(this._pdfDocument);
                                    case 6:
                                        n = t.sent;
                                        if (n) {
                                            t.next = 9;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 9:
                                        this._updateCurrentTreeItem(null);
                                        if (!(this._sidebarView !== o.SidebarView.OUTLINE)) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        r = this._currentPageNumber;
                                    case 13:
                                        if (!(r > 0)) {
                                            t.next = 25;
                                            break
                                        }
                                        i = n.get(r);
                                        if (i) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("continue", 22);
                                    case 17:
                                        a = this.container.querySelector('a[href="'.concat(i, '"]'));
                                        if (a) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("continue", 22);
                                    case 20:
                                        this._scrollToCurrentTreeItem(a.parentNode);
                                        return t.abrupt("break", 25);
                                    case 22:
                                        r--;
                                        t.next = 13;
                                        break;
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_getPageNumberToDestHash",
                value: function () {
                    var t = c(b["default"].mark(function e(n) {
                        var r, i, a, o, s, u, l, c, f, d, h, p, v, g, m, y;
                        return b["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._pageNumberToDestHashCapability) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", this._pageNumberToDestHashCapability.promise);
                                    case 2:
                                        this._pageNumberToDestHashCapability = (0, w.createPromiseCapability)();
                                        r = new Map, i = new Map;
                                        a = [{
                                            nesting: 0,
                                            items: this._outline
                                        }];
                                    case 5:
                                        if (!(a.length > 0)) {
                                            t.next = 56;
                                            break
                                        }
                                        o = a.shift(), s = o.nesting;
                                        u = S(o.items);
                                        t.prev = 8;
                                        u.s();
                                    case 10:
                                        if ((l = u.n()).done) {
                                            t.next = 46;
                                            break
                                        }
                                        c = l.value, f = c.dest, d = c.items;
                                        h = void 0, p = void 0;
                                        if (!(typeof f === "string")) {
                                            t.next = 21;
                                            break
                                        }
                                        t.next = 16;
                                        return n.getDestination(f);
                                    case 16:
                                        h = t.sent;
                                        if (!(n !== this._pdfDocument)) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.abrupt("return", null);
                                    case 19:
                                        t.next = 22;
                                        break;
                                    case 21:
                                        h = f;
                                    case 22:
                                        if (!Array.isArray(h)) {
                                            t.next = 43;
                                            break
                                        }
                                        v = h, g = P(v, 1), m = g[0];
                                        if (!(_(m) === "object" && m !== null)) {
                                            t.next = 41;
                                            break
                                        }
                                        p = this.linkService._cachedPageNumber(m);
                                        if (p) {
                                            t.next = 39;
                                            break
                                        }
                                        t.prev = 27;
                                        t.next = 30;
                                        return n.getPageIndex(m);
                                    case 30:
                                        t.t0 = t.sent;
                                        p = t.t0 + 1;
                                        if (!(n !== this._pdfDocument)) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return", null);
                                    case 34:
                                        this.linkService.cachePageRef(p, m);
                                        t.next = 39;
                                        break;
                                    case 37:
                                        t.prev = 37;
                                        t.t1 = t["catch"](27);
                                    case 39:
                                        t.next = 42;
                                        break;
                                    case 41:
                                        if (Number.isInteger(m)) {
                                            p = m + 1
                                        }
                                        case 42:
                                            if (Number.isInteger(p) && (!r.has(p) || s > i.get(p))) {
                                                y = this.linkService.getDestinationHash(f);
                                                r.set(p, y);
                                                i.set(p, s)
                                            }
                                            case 43:
                                                if (d.length > 0) {
                                                    a.push({
                                                        nesting: s + 1,
                                                        items: d
                                                    })
                                                }
                                                case 44:
                                                    t.next = 10;
                                                    break;
                                                case 46:
                                                    t.next = 51;
                                                    break;
                                                case 48:
                                                    t.prev = 48;
                                                    t.t2 = t["catch"](8);
                                                    u.e(t.t2);
                                                case 51:
                                                    t.prev = 51;
                                                    u.f();
                                                    return t.finish(51);
                                                case 54:
                                                    t.next = 5;
                                                    break;
                                                case 56:
                                                    this._pageNumberToDestHashCapability.resolve(r.size > 0 ? r : null);
                                                    return t.abrupt("return", this._pageNumberToDestHashCapability.promise);
                                                case 58:
                                                case "end":
                                                    return t.stop()
                                }
                            }
                        }, e, this, [[8, 48, 51, 54], [27, 37]])
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]);
            return f
        }(r.BaseTreeViewer);
        t.PDFOutlineViewer = D
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFPresentationMode = void 0;
        var s = n(5);

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var u = 1500;
        var l = 3e3;
        var c = "pdfPresentationMode";
        var f = "pdfPresentationModeControls";
        var d = 50;
        var h = .1;
        var p = 50;
        var v = Math.PI / 6;
        var i = function () {
            function i(e) {
                var t = e.container,
                    n = e.pdfViewer,
                    r = e.eventBus;
                a(this, i);
                this.container = t;
                this.pdfViewer = n;
                this.eventBus = r;
                this.active = false;
                this.args = null;
                this.contextMenuOpen = false;
                this.mouseScrollTimeStamp = 0;
                this.mouseScrollDelta = 0;
                this.touchSwipeState = null
            }
            o(i, [{
                key: "request",
                value: function e() {
                    if (this.switchInProgress || this.active || !this.pdfViewer.pagesCount) {
                        return false
                    }
                    this._addFullscreenChangeListeners();
                    this._setSwitchInProgress();
                    this._notifyStateChange();
                    if (this.container.requestFullscreen) {
                        this.container.requestFullscreen()
                    } else if (this.container.mozRequestFullScreen) {
                        this.container.mozRequestFullScreen()
                    } else if (this.container.webkitRequestFullscreen) {
                        this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                    } else {
                        return false
                    }
                    this.args = {
                        pageNumber: this.pdfViewer.currentPageNumber,
                        scaleValue: this.pdfViewer.currentScaleValue,
                        scrollMode: this.pdfViewer.scrollMode,
                        spreadMode: this.pdfViewer.spreadMode
                    };
                    return true
                }
            }, {
                key: "_mouseWheel",
                value: function e(t) {
                    if (!this.active) {
                        return
                    }
                    t.preventDefault();
                    var n = (0, s.normalizeWheelEventDelta)(t);
                    var r = Date.now();
                    var i = this.mouseScrollTimeStamp;
                    if (r > i && r - i < d) {
                        return
                    }
                    if (this.mouseScrollDelta > 0 && n < 0 || this.mouseScrollDelta < 0 && n > 0) {
                        this._resetMouseScrollState()
                    }
                    this.mouseScrollDelta += n;
                    if (Math.abs(this.mouseScrollDelta) >= h) {
                        var a = this.mouseScrollDelta;
                        this._resetMouseScrollState();
                        var o = a > 0 ? this.pdfViewer.previousPage() : this.pdfViewer.nextPage();
                        if (o) {
                            this.mouseScrollTimeStamp = r
                        }
                    }
                }
            }, {
                key: "isFullscreen",
                get: function e() {
                    return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen)
                }
            }, {
                key: "_notifyStateChange",
                value: function e() {
                    var t = s.PresentationModeState.NORMAL;
                    if (this.switchInProgress) {
                        t = s.PresentationModeState.CHANGING
                    } else if (this.active) {
                        t = s.PresentationModeState.FULLSCREEN
                    }
                    this.eventBus.dispatch("presentationmodechanged", {
                        source: this,
                        state: t
                    })
                }
            }, {
                key: "_setSwitchInProgress",
                value: function e() {
                    var t = this;
                    if (this.switchInProgress) {
                        clearTimeout(this.switchInProgress)
                    }
                    this.switchInProgress = setTimeout(function () {
                        t._removeFullscreenChangeListeners();
                        delete t.switchInProgress;
                        t._notifyStateChange()
                    }, u)
                }
            }, {
                key: "_resetSwitchInProgress",
                value: function e() {
                    if (this.switchInProgress) {
                        clearTimeout(this.switchInProgress);
                        delete this.switchInProgress
                    }
                }
            }, {
                key: "_enter",
                value: function e() {
                    var t = this;
                    this.active = true;
                    this._resetSwitchInProgress();
                    this._notifyStateChange();
                    this.container.classList.add(c);
                    setTimeout(function () {
                        t.pdfViewer.scrollMode = s.ScrollMode.PAGE;
                        t.pdfViewer.spreadMode = s.SpreadMode.NONE;
                        t.pdfViewer.currentPageNumber = t.args.pageNumber;
                        t.pdfViewer.currentScaleValue = "page-fit"
                    }, 0);
                    this._addWindowListeners();
                    this._showControls();
                    this.contextMenuOpen = false;
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "_exit",
                value: function e() {
                    var t = this;
                    var n = this.pdfViewer.currentPageNumber;
                    this.container.classList.remove(c);
                    setTimeout(function () {
                        t.active = false;
                        t._removeFullscreenChangeListeners();
                        t._notifyStateChange();
                        t.pdfViewer.scrollMode = t.args.scrollMode;
                        t.pdfViewer.spreadMode = t.args.spreadMode;
                        t.pdfViewer.currentScaleValue = t.args.scaleValue;
                        t.pdfViewer.currentPageNumber = n;
                        t.args = null
                    }, 0);
                    this._removeWindowListeners();
                    this._hideControls();
                    this._resetMouseScrollState();
                    this.contextMenuOpen = false
                }
            }, {
                key: "_mouseDown",
                value: function e(t) {
                    if (this.contextMenuOpen) {
                        this.contextMenuOpen = false;
                        t.preventDefault();
                        return
                    }
                    if (t.button === 0) {
                        var n = t.target.href && t.target.classList.contains("internalLink");
                        if (!n) {
                            t.preventDefault();
                            if (t.shiftKey) {
                                this.pdfViewer.previousPage()
                            } else {
                                this.pdfViewer.nextPage()
                            }
                        }
                    }
                }
            }, {
                key: "_contextMenu",
                value: function e() {
                    this.contextMenuOpen = true
                }
            }, {
                key: "_showControls",
                value: function e() {
                    var t = this;
                    if (this.controlsTimeout) {
                        clearTimeout(this.controlsTimeout)
                    } else {
                        this.container.classList.add(f)
                    }
                    this.controlsTimeout = setTimeout(function () {
                        t.container.classList.remove(f);
                        delete t.controlsTimeout
                    }, l)
                }
            }, {
                key: "_hideControls",
                value: function e() {
                    if (!this.controlsTimeout) {
                        return
                    }
                    clearTimeout(this.controlsTimeout);
                    this.container.classList.remove(f);
                    delete this.controlsTimeout
                }
            }, {
                key: "_resetMouseScrollState",
                value: function e() {
                    this.mouseScrollTimeStamp = 0;
                    this.mouseScrollDelta = 0
                }
            }, {
                key: "_touchSwipe",
                value: function e(t) {
                    if (!this.active) {
                        return
                    }
                    if (t.touches.length > 1) {
                        this.touchSwipeState = null;
                        return
                    }
                    switch (t.type) {
                        case "touchstart":
                            this.touchSwipeState = {
                                startX: t.touches[0].pageX,
                                startY: t.touches[0].pageY,
                                endX: t.touches[0].pageX,
                                endY: t.touches[0].pageY
                            };
                            break;
                        case "touchmove":
                            if (this.touchSwipeState === null) {
                                return
                            }
                            this.touchSwipeState.endX = t.touches[0].pageX;
                            this.touchSwipeState.endY = t.touches[0].pageY;
                            t.preventDefault();
                            break;
                        case "touchend":
                            if (this.touchSwipeState === null) {
                                return
                            }
                            var n = 0;
                            var r = this.touchSwipeState.endX - this.touchSwipeState.startX;
                            var i = this.touchSwipeState.endY - this.touchSwipeState.startY;
                            var a = Math.abs(Math.atan2(i, r));
                            if (Math.abs(r) > p && (a <= v || a >= Math.PI - v)) {
                                n = r
                            } else if (Math.abs(i) > p && Math.abs(a - Math.PI / 2) <= v) {
                                n = i
                            }
                            if (n > 0) {
                                this.pdfViewer.previousPage()
                            } else if (n < 0) {
                                this.pdfViewer.nextPage()
                            }
                            break
                    }
                }
            }, {
                key: "_addWindowListeners",
                value: function e() {
                    this.showControlsBind = this._showControls.bind(this);
                    this.mouseDownBind = this._mouseDown.bind(this);
                    this.mouseWheelBind = this._mouseWheel.bind(this);
                    this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this);
                    this.contextMenuBind = this._contextMenu.bind(this);
                    this.touchSwipeBind = this._touchSwipe.bind(this);
                    window.addEventListener("mousemove", this.showControlsBind);
                    window.addEventListener("mousedown", this.mouseDownBind);
                    window.addEventListener("wheel", this.mouseWheelBind, {
                        passive: false
                    });
                    window.addEventListener("keydown", this.resetMouseScrollStateBind);
                    window.addEventListener("contextmenu", this.contextMenuBind);
                    window.addEventListener("touchstart", this.touchSwipeBind);
                    window.addEventListener("touchmove", this.touchSwipeBind);
                    window.addEventListener("touchend", this.touchSwipeBind)
                }
            }, {
                key: "_removeWindowListeners",
                value: function e() {
                    window.removeEventListener("mousemove", this.showControlsBind);
                    window.removeEventListener("mousedown", this.mouseDownBind);
                    window.removeEventListener("wheel", this.mouseWheelBind, {
                        passive: false
                    });
                    window.removeEventListener("keydown", this.resetMouseScrollStateBind);
                    window.removeEventListener("contextmenu", this.contextMenuBind);
                    window.removeEventListener("touchstart", this.touchSwipeBind);
                    window.removeEventListener("touchmove", this.touchSwipeBind);
                    window.removeEventListener("touchend", this.touchSwipeBind);
                    delete this.showControlsBind;
                    delete this.mouseDownBind;
                    delete this.mouseWheelBind;
                    delete this.resetMouseScrollStateBind;
                    delete this.contextMenuBind;
                    delete this.touchSwipeBind
                }
            }, {
                key: "_fullscreenChange",
                value: function e() {
                    if (this.isFullscreen) {
                        this._enter()
                    } else {
                        this._exit()
                    }
                }
            }, {
                key: "_addFullscreenChangeListeners",
                value: function e() {
                    this.fullscreenChangeBind = this._fullscreenChange.bind(this);
                    window.addEventListener("fullscreenchange", this.fullscreenChangeBind);
                    window.addEventListener("mozfullscreenchange", this.fullscreenChangeBind);
                    window.addEventListener("webkitfullscreenchange", this.fullscreenChangeBind)
                }
            }, {
                key: "_removeFullscreenChangeListeners",
                value: function e() {
                    window.removeEventListener("fullscreenchange", this.fullscreenChangeBind);
                    window.removeEventListener("mozfullscreenchange", this.fullscreenChangeBind);
                    window.removeEventListener("webkitfullscreenchange", this.fullscreenChangeBind);
                    delete this.fullscreenChangeBind
                }
            }]);
            return i
        }();
        t.PDFPresentationMode = i
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFRenderingQueue = void 0;
        var r = n(7);
        var i = n(5);

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) {
            if (t) o(e.prototype, t);
            if (n) o(e, n);
            return e
        }
        var u = 3e4;
        var l = function () {
            function e() {
                a(this, e);
                this.pdfViewer = null;
                this.pdfThumbnailViewer = null;
                this.onIdle = null;
                this.highestPriorityPage = null;
                this.idleTimeout = null;
                this.printing = false;
                this.isThumbnailViewEnabled = false
            }
            s(e, [{
                key: "setViewer",
                value: function e(t) {
                    this.pdfViewer = t
                }
            }, {
                key: "setThumbnailViewer",
                value: function e(t) {
                    this.pdfThumbnailViewer = t
                }
            }, {
                key: "isHighestPriority",
                value: function e(t) {
                    return this.highestPriorityPage === t.renderingId
                }
            }, {
                key: "hasViewer",
                value: function e() {
                    return !!this.pdfViewer
                }
            }, {
                key: "renderHighestPriority",
                value: function e(t) {
                    var n;
                    if (this.idleTimeout) {
                        clearTimeout(this.idleTimeout);
                        this.idleTimeout = null
                    }
                    if (this.pdfViewer.forceRendering(t)) {
                        return
                    }
                    if (this.isThumbnailViewEnabled && (n = this.pdfThumbnailViewer) !== null && n !== void 0 && n.forceRendering()) {
                        return
                    }
                    if (this.printing) {
                        return
                    }
                    if (this.onIdle) {
                        this.idleTimeout = setTimeout(this.onIdle.bind(this), u)
                    }
                }
            }, {
                key: "getHighestPriority",
                value: function e(t, n, r) {
                    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    var a = t.views,
                        o = a.length;
                    if (o === 0) {
                        return null
                    }
                    for (var s = 0; s < o; s++) {
                        var u = a[s].view;
                        if (!this.isViewFinished(u)) {
                            return u
                        }
                    }
                    var l = t.first.id,
                        c = t.last.id;
                    if (c - l + 1 > o) {
                        var f = t.ids;
                        for (var d = 1, h = c - l; d < h; d++) {
                            var p = r ? l + d : c - d;
                            if (f.has(p)) {
                                continue
                            }
                            var v = n[p - 1];
                            if (!this.isViewFinished(v)) {
                                return v
                            }
                        }
                    }
                    var g = r ? c : l - 2;
                    var m = n[g];
                    if (m && !this.isViewFinished(m)) {
                        return m
                    }
                    if (i) {
                        g += r ? 1 : -1;
                        m = n[g];
                        if (m && !this.isViewFinished(m)) {
                            return m
                        }
                    }
                    return null
                }
            }, {
                key: "isViewFinished",
                value: function e(t) {
                    return t.renderingState === i.RenderingStates.FINISHED
                }
            }, {
                key: "renderView",
                value: function e(t) {
                    var n = this;
                    switch (t.renderingState) {
                        case i.RenderingStates.FINISHED:
                            return false;
                        case i.RenderingStates.PAUSED:
                            this.highestPriorityPage = t.renderingId;
                            t.resume();
                            break;
                        case i.RenderingStates.RUNNING:
                            this.highestPriorityPage = t.renderingId;
                            break;
                        case i.RenderingStates.INITIAL:
                            this.highestPriorityPage = t.renderingId;
                            t.draw()["finally"](function () {
                                n.renderHighestPriority()
                            })["catch"](function (e) {
                                if (e instanceof r.RenderingCancelledException) {
                                    return
                                }
                                console.error('renderView: "'.concat(e, '"'))
                            });
                            break
                    }
                    return true
                }
            }]);
            return e
        }();
        t.PDFRenderingQueue = l
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFScriptingManager = void 0;
        var _ = r(n(3));
        var v = n(5);
        var c = n(7);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function g(e) {
            return o(e) || a(e) || f(e) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function a(e) {
            if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
        }

        function o(e) {
            if (Array.isArray(e)) return d(e)
        }

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                if (e) {
                    r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })
                }
                n.push.apply(n, r)
            }
            return n
        }

        function P(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e] != null ? arguments[e] : {};
                if (e % 2) {
                    s(Object(n), true).forEach(function (e) {
                        u(t, e, n[e])
                    })
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                } else {
                    s(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
            }
            return t
        }

        function u(e, t, n) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                e[t] = n
            }
            return e
        }

        function S(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = f(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function k(e, t) {
            return p(e) || h(e, t) || f(e, t) || l()
        }

        function l() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function f(e, t) {
            if (!e) return;
            if (typeof e === "string") return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }

        function d(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function h(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function p(e) {
            if (Array.isArray(e)) return e
        }

        function m(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function E(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        m(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        m(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function y(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function b(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function w(e, t, n) {
            if (t) b(e.prototype, t);
            if (n) b(e, n);
            return e
        }
        var x = function () {
            function u(e) {
                var t = e.eventBus,
                    n = e.sandboxBundleSrc,
                    r = n === void 0 ? null : n,
                    i = e.scriptingFactory,
                    a = i === void 0 ? null : i,
                    o = e.docPropertiesLookup,
                    s = o === void 0 ? null : o;
                y(this, u);
                this._pdfDocument = null;
                this._pdfViewer = null;
                this._closeCapability = null;
                this._destroyCapability = null;
                this._scripting = null;
                this._mouseState = Object.create(null);
                this._ready = false;
                this._eventBus = t;
                this._sandboxBundleSrc = r;
                this._scriptingFactory = a;
                this._docPropertiesLookup = s
            }
            w(u, [{
                key: "setViewer",
                value: function e(t) {
                    this._pdfViewer = t
                }
            }, {
                key: "setDocument",
                value: function () {
                    var t = E(_["default"].mark(function e(n) {
                        var i = this,
                            r;
                        var a, o, s, u, l, c, f, d, h, p, v, g, m, y, b, w;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._pdfDocument) {
                                            t.next = 3;
                                            break
                                        }
                                        t.next = 3;
                                        return this._destroyScripting();
                                    case 3:
                                        this._pdfDocument = n;
                                        if (n) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        t.next = 8;
                                        return Promise.all([n.getFieldObjects(), n.getCalculationOrderIds(), n.getJSActions()]);
                                    case 8:
                                        a = t.sent;
                                        o = k(a, 3);
                                        s = o[0];
                                        u = o[1];
                                        l = o[2];
                                        if (!(!s && !l)) {
                                            t.next = 17;
                                            break
                                        }
                                        t.next = 16;
                                        return this._destroyScripting();
                                    case 16:
                                        return t.abrupt("return");
                                    case 17:
                                        if (!(n !== this._pdfDocument)) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 19:
                                        t.prev = 19;
                                        this._scripting = this._createScripting();
                                        t.next = 29;
                                        break;
                                    case 23:
                                        t.prev = 23;
                                        t.t0 = t["catch"](19);
                                        console.error('PDFScriptingManager.setDocument: "'.concat(t.t0 === null || t.t0 === void 0 ? void 0 : t.t0.message, '".'));
                                        t.next = 28;
                                        return this._destroyScripting();
                                    case 28:
                                        return t.abrupt("return");
                                    case 29:
                                        this._internalEvents.set("updatefromsandbox", function (e) {
                                            if ((e === null || e === void 0 ? void 0 : e.source) !== window) {
                                                return
                                            }
                                            i._updateFromSandbox(e.detail)
                                        });
                                        this._internalEvents.set("dispatcheventinsandbox", function (e) {
                                            var t;
                                            (t = i._scripting) === null || t === void 0 ? void 0 : t.dispatchEventInSandbox(e.detail)
                                        });
                                        this._internalEvents.set("pagechanging", function (e) {
                                            var t = e.pageNumber,
                                                n = e.previous;
                                            if (t === n) {
                                                return
                                            }
                                            i._dispatchPageClose(n);
                                            i._dispatchPageOpen(t)
                                        });
                                        this._internalEvents.set("pagerendered", function (e) {
                                            var t = e.pageNumber;
                                            if (!i._pageOpenPending.has(t)) {
                                                return
                                            }
                                            if (t !== i._pdfViewer.currentPageNumber) {
                                                return
                                            }
                                            i._dispatchPageOpen(t)
                                        });
                                        this._internalEvents.set("pagesdestroy", function () {
                                            var t = E(_["default"].mark(function e(t) {
                                                var n, r;
                                                return _["default"].wrap(function e(t) {
                                                    while (1) {
                                                        switch (t.prev = t.next) {
                                                            case 0:
                                                                t.next = 2;
                                                                return i._dispatchPageClose(i._pdfViewer.currentPageNumber);
                                                            case 2:
                                                                t.next = 4;
                                                                return (n = i._scripting) === null || n === void 0 ? void 0 : n.dispatchEventInSandbox({
                                                                    id: "doc",
                                                                    name: "WillClose"
                                                                });
                                                            case 4:
                                                                (r = i._closeCapability) === null || r === void 0 ? void 0 : r.resolve();
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }
                                                }, e)
                                            }));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                        this._domEvents.set("mousedown", function (e) {
                                            i._mouseState.isDown = true
                                        });
                                        this._domEvents.set("mouseup", function (e) {
                                            i._mouseState.isDown = false
                                        });
                                        c = S(this._internalEvents);
                                        try {
                                            for (c.s(); !(f = c.n()).done;) {
                                                d = k(f.value, 2), h = d[0], p = d[1];
                                                this._eventBus._on(h, p)
                                            }
                                        } catch (e) {
                                            c.e(e)
                                        } finally {
                                            c.f()
                                        }
                                        v = S(this._domEvents);
                                        try {
                                            for (v.s(); !(g = v.n()).done;) {
                                                m = k(g.value, 2), y = m[0], b = m[1];
                                                window.addEventListener(y, b)
                                            }
                                        } catch (e) {
                                            v.e(e)
                                        } finally {
                                            v.f()
                                        }
                                        t.prev = 40;
                                        t.next = 43;
                                        return this._getDocProperties();
                                    case 43:
                                        w = t.sent;
                                        if (!(n !== this._pdfDocument)) {
                                            t.next = 46;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 46:
                                        t.next = 48;
                                        return this._scripting.createSandbox({
                                            objects: s,
                                            calculationOrder: u,
                                            appInfo: {
                                                platform: navigator.platform,
                                                language: navigator.language
                                            },
                                            docInfo: P(P({}, w), {}, {
                                                actions: l
                                            })
                                        });
                                    case 48:
                                        this._eventBus.dispatch("sandboxcreated", {
                                            source: this
                                        });
                                        t.next = 57;
                                        break;
                                    case 51:
                                        t.prev = 51;
                                        t.t1 = t["catch"](40);
                                        console.error('PDFScriptingManager.setDocument: "'.concat(t.t1 === null || t.t1 === void 0 ? void 0 : t.t1.message, '".'));
                                        t.next = 56;
                                        return this._destroyScripting();
                                    case 56:
                                        return t.abrupt("return");
                                    case 57:
                                        t.next = 59;
                                        return (r = this._scripting) === null || r === void 0 ? void 0 : r.dispatchEventInSandbox({
                                            id: "doc",
                                            name: "Open"
                                        });
                                    case 59:
                                        t.next = 61;
                                        return this._dispatchPageOpen(this._pdfViewer.currentPageNumber, true);
                                    case 61:
                                        Promise.resolve().then(function () {
                                            if (n === i._pdfDocument) {
                                                i._ready = true
                                            }
                                        });
                                    case 62:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this, [[19, 23], [40, 51]])
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "dispatchWillSave",
                value: function () {
                    var t = E(_["default"].mark(function e(t) {
                        var n;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", (n = this._scripting) === null || n === void 0 ? void 0 : n.dispatchEventInSandbox({
                                            id: "doc",
                                            name: "WillSave"
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "dispatchDidSave",
                value: function () {
                    var t = E(_["default"].mark(function e(t) {
                        var n;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", (n = this._scripting) === null || n === void 0 ? void 0 : n.dispatchEventInSandbox({
                                            id: "doc",
                                            name: "DidSave"
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "dispatchWillPrint",
                value: function () {
                    var t = E(_["default"].mark(function e(t) {
                        var n;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", (n = this._scripting) === null || n === void 0 ? void 0 : n.dispatchEventInSandbox({
                                            id: "doc",
                                            name: "WillPrint"
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "dispatchDidPrint",
                value: function () {
                    var t = E(_["default"].mark(function e(t) {
                        var n;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", (n = this._scripting) === null || n === void 0 ? void 0 : n.dispatchEventInSandbox({
                                            id: "doc",
                                            name: "DidPrint"
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "mouseState",
                get: function e() {
                    return this._mouseState
                }
            }, {
                key: "destroyPromise",
                get: function e() {
                    var t;
                    return ((t = this._destroyCapability) === null || t === void 0 ? void 0 : t.promise) || null
                }
            }, {
                key: "ready",
                get: function e() {
                    return this._ready
                }
            }, {
                key: "_internalEvents",
                get: function e() {
                    return (0, c.shadow)(this, "_internalEvents", new Map)
                }
            }, {
                key: "_domEvents",
                get: function e() {
                    return (0, c.shadow)(this, "_domEvents", new Map)
                }
            }, {
                key: "_pageOpenPending",
                get: function e() {
                    return (0, c.shadow)(this, "_pageOpenPending", new Set)
                }
            }, {
                key: "_visitedPages",
                get: function e() {
                    return (0, c.shadow)(this, "_visitedPages", new Map)
                }
            }, {
                key: "_updateFromSandbox",
                value: function () {
                    var t = E(_["default"].mark(function e(n) {
                        var r, i, a, o, s, u, l, c, f, d, h, p;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = this._pdfViewer.isInPresentationMode || this._pdfViewer.isChangingPresentationMode;
                                        i = n.id, a = n.siblings, o = n.command, s = n.value;
                                        if (i) {
                                            t.next = 46;
                                            break
                                        }
                                        t.t0 = o;
                                        t.next = t.t0 === "clear" ? 6 : t.t0 === "error" ? 8 : t.t0 === "layout" ? 10 : t.t0 === "page-num" ? 15 : t.t0 === "print" ? 17 : t.t0 === "println" ? 21 : t.t0 === "zoom" ? 23 : t.t0 === "SaveAs" ? 27 : t.t0 === "FirstPage" ? 29 : t.t0 === "LastPage" ? 31 : t.t0 === "NextPage" ? 33 : t.t0 === "PrevPage" ? 35 : t.t0 === "ZoomViewIn" ? 37 : t.t0 === "ZoomViewOut" ? 41 : 45;
                                        break;
                                    case 6:
                                        console.clear();
                                        return t.abrupt("break", 45);
                                    case 8:
                                        console.error(s);
                                        return t.abrupt("break", 45);
                                    case 10:
                                        if (!r) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        u = (0, v.apiPageLayoutToViewerModes)(s);
                                        this._pdfViewer.spreadMode = u.spreadMode;
                                        return t.abrupt("break", 45);
                                    case 15:
                                        this._pdfViewer.currentPageNumber = s + 1;
                                        return t.abrupt("break", 45);
                                    case 17:
                                        t.next = 19;
                                        return this._pdfViewer.pagesPromise;
                                    case 19:
                                        this._eventBus.dispatch("print", {
                                            source: this
                                        });
                                        return t.abrupt("break", 45);
                                    case 21:
                                        console.log(s);
                                        return t.abrupt("break", 45);
                                    case 23:
                                        if (!r) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        this._pdfViewer.currentScaleValue = s;
                                        return t.abrupt("break", 45);
                                    case 27:
                                        this._eventBus.dispatch("save", {
                                            source: this
                                        });
                                        return t.abrupt("break", 45);
                                    case 29:
                                        this._pdfViewer.currentPageNumber = 1;
                                        return t.abrupt("break", 45);
                                    case 31:
                                        this._pdfViewer.currentPageNumber = this._pdfViewer.pagesCount;
                                        return t.abrupt("break", 45);
                                    case 33:
                                        this._pdfViewer.nextPage();
                                        return t.abrupt("break", 45);
                                    case 35:
                                        this._pdfViewer.previousPage();
                                        return t.abrupt("break", 45);
                                    case 37:
                                        if (!r) {
                                            t.next = 39;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 39:
                                        this._pdfViewer.increaseScale();
                                        return t.abrupt("break", 45);
                                    case 41:
                                        if (!r) {
                                            t.next = 43;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 43:
                                        this._pdfViewer.decreaseScale();
                                        return t.abrupt("break", 45);
                                    case 45:
                                        return t.abrupt("return");
                                    case 46:
                                        if (!r) {
                                            t.next = 49;
                                            break
                                        }
                                        if (!n.focus) {
                                            t.next = 49;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 49:
                                        delete n.id;
                                        delete n.siblings;
                                        l = a ? [i].concat(g(a)) : [i];
                                        c = S(l);
                                        try {
                                            for (c.s(); !(f = c.n()).done;) {
                                                d = f.value;
                                                h = document.getElementById(d);
                                                if (h) {
                                                    h.dispatchEvent(new CustomEvent("updatefromsandbox", {
                                                        detail: n
                                                    }))
                                                } else {
                                                    (p = this._pdfDocument) === null || p === void 0 ? void 0 : p.annotationStorage.setValue(d, n)
                                                }
                                            }
                                        } catch (e) {
                                            c.e(e)
                                        } finally {
                                            c.f()
                                        }
                                        case 54:
                                        case "end":
                                            return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_dispatchPageOpen",
                value: function () {
                    var t = E(_["default"].mark(function e(a) {
                        var o = this;
                        var n, s, u, l, r, i = arguments;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = i.length > 1 && i[1] !== undefined ? i[1] : false;
                                        s = this._pdfDocument, u = this._visitedPages;
                                        if (n) {
                                            this._closeCapability = (0, c.createPromiseCapability)()
                                        }
                                        if (this._closeCapability) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        l = this._pdfViewer.getPageView(a - 1);
                                        if (!((l === null || l === void 0 ? void 0 : l.renderingState) !== v.RenderingStates.FINISHED)) {
                                            t.next = 9;
                                            break
                                        }
                                        this._pageOpenPending.add(a);
                                        return t.abrupt("return");
                                    case 9:
                                        this._pageOpenPending["delete"](a);
                                        r = E(_["default"].mark(function e() {
                                            var n, r;
                                            var i;
                                            return _["default"].wrap(function e(t) {
                                                while (1) {
                                                    switch (t.prev = t.next) {
                                                        case 0:
                                                            t.next = 2;
                                                            return !u.has(a) ? (n = l.pdfPage) === null || n === void 0 ? void 0 : n.getJSActions() : null;
                                                        case 2:
                                                            i = t.sent;
                                                            if (!(s !== o._pdfDocument)) {
                                                                t.next = 5;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 5:
                                                            t.next = 7;
                                                            return (r = o._scripting) === null || r === void 0 ? void 0 : r.dispatchEventInSandbox({
                                                                id: "page",
                                                                name: "PageOpen",
                                                                pageNumber: a,
                                                                actions: i
                                                            });
                                                        case 7:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }
                                            }, e)
                                        }))();
                                        u.set(a, r);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_dispatchPageClose",
                value: function () {
                    var t = E(_["default"].mark(function e(n) {
                        var r;
                        var i, a, o;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        i = this._pdfDocument, a = this._visitedPages;
                                        if (this._closeCapability) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        if (!this._pageOpenPending.has(n)) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 5:
                                        o = a.get(n);
                                        if (o) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        a.set(n, null);
                                        t.next = 11;
                                        return o;
                                    case 11:
                                        if (!(i !== this._pdfDocument)) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 13:
                                        t.next = 15;
                                        return (r = this._scripting) === null || r === void 0 ? void 0 : r.dispatchEventInSandbox({
                                            id: "page",
                                            name: "PageClose",
                                            pageNumber: n
                                        });
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_getDocProperties",
                value: function () {
                    var e = E(_["default"].mark(function e() {
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._docPropertiesLookup) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", this._docPropertiesLookup(this._pdfDocument));
                                    case 2:
                                        throw new Error("_getDocProperties: Unable to lookup properties.");
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_createScripting",
                value: function e() {
                    this._destroyCapability = (0, c.createPromiseCapability)();
                    if (this._scripting) {
                        throw new Error("_createScripting: Scripting already exists.")
                    }
                    if (this._scriptingFactory) {
                        return this._scriptingFactory.createScripting({
                            sandboxBundleSrc: this._sandboxBundleSrc
                        })
                    }
                    throw new Error("_createScripting: Cannot create scripting.")
                }
            }, {
                key: "_destroyScripting",
                value: function () {
                    var e = E(_["default"].mark(function e() {
                        var n;
                        var r, i, a, o, s, u, l, c, f, d, h;
                        return _["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (this._scripting) {
                                            t.next = 4;
                                            break
                                        }
                                        this._pdfDocument = null;
                                        (r = this._destroyCapability) === null || r === void 0 ? void 0 : r.resolve();
                                        return t.abrupt("return");
                                    case 4:
                                        if (!this._closeCapability) {
                                            t.next = 8;
                                            break
                                        }
                                        t.next = 7;
                                        return Promise.race([this._closeCapability.promise, new Promise(function (e) {
                                            setTimeout(e, 1e3)
                                        })])["catch"](function (e) {});
                                    case 7:
                                        this._closeCapability = null;
                                    case 8:
                                        this._pdfDocument = null;
                                        t.prev = 9;
                                        t.next = 12;
                                        return this._scripting.destroySandbox();
                                    case 12:
                                        t.next = 16;
                                        break;
                                    case 14:
                                        t.prev = 14;
                                        t.t0 = t["catch"](9);
                                    case 16:
                                        i = S(this._internalEvents);
                                        try {
                                            for (i.s(); !(a = i.n()).done;) {
                                                o = k(a.value, 2), s = o[0], u = o[1];
                                                this._eventBus._off(s, u)
                                            }
                                        } catch (e) {
                                            i.e(e)
                                        } finally {
                                            i.f()
                                        }
                                        this._internalEvents.clear();
                                        l = S(this._domEvents);
                                        try {
                                            for (l.s(); !(c = l.n()).done;) {
                                                f = k(c.value, 2), d = f[0], h = f[1];
                                                window.removeEventListener(d, h)
                                            }
                                        } catch (e) {
                                            l.e(e)
                                        } finally {
                                            l.f()
                                        }
                                        this._domEvents.clear();
                                        this._pageOpenPending.clear();
                                        this._visitedPages.clear();
                                        this._scripting = null;
                                        delete this._mouseState.isDown;
                                        this._ready = false;
                                        (n = this._destroyCapability) === null || n === void 0 ? void 0 : n.resolve();
                                    case 28:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this, [[9, 14]])
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]);
            return u
        }();
        t.PDFScriptingManager = x
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFSidebar = void 0;
        var s = n(5);

        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var a = "pdfSidebarNotification";
        var o = function () {
            function o(e) {
                var t = e.elements,
                    n = e.pdfViewer,
                    r = e.pdfThumbnailViewer,
                    i = e.eventBus,
                    a = e.l10n;
                u(this, o);
                this.isOpen = false;
                this.active = s.SidebarView.THUMBS;
                this.isInitialViewSet = false;
                this.onToggled = null;
                this.pdfViewer = n;
                this.pdfThumbnailViewer = r;
                this.outerContainer = t.outerContainer;
                this.viewerContainer = t.viewerContainer;
                this.toggleButton = t.toggleButton;
                this.thumbnailButton = t.thumbnailButton;
                this.outlineButton = t.outlineButton;
                this.attachmentsButton = t.attachmentsButton;
                this.layersButton = t.layersButton;
                this.thumbnailView = t.thumbnailView;
                this.outlineView = t.outlineView;
                this.attachmentsView = t.attachmentsView;
                this.layersView = t.layersView;
                this._outlineOptionsContainer = t.outlineOptionsContainer;
                this._currentOutlineItemButton = t.currentOutlineItemButton;
                this.eventBus = i;
                this.l10n = a;
                this._addEventListeners()
            }
            i(o, [{
                key: "reset",
                value: function e() {
                    this.isInitialViewSet = false;
                    this._hideUINotification(true);
                    this.switchView(s.SidebarView.THUMBS);
                    this.outlineButton.disabled = false;
                    this.attachmentsButton.disabled = false;
                    this.layersButton.disabled = false;
                    this._currentOutlineItemButton.disabled = true
                }
            }, {
                key: "visibleView",
                get: function e() {
                    return this.isOpen ? this.active : s.SidebarView.NONE
                }
            }, {
                key: "isThumbnailViewVisible",
                get: function e() {
                    return this.isOpen && this.active === s.SidebarView.THUMBS
                }
            }, {
                key: "isOutlineViewVisible",
                get: function e() {
                    return this.isOpen && this.active === s.SidebarView.OUTLINE
                }
            }, {
                key: "isAttachmentsViewVisible",
                get: function e() {
                    return this.isOpen && this.active === s.SidebarView.ATTACHMENTS
                }
            }, {
                key: "isLayersViewVisible",
                get: function e() {
                    return this.isOpen && this.active === s.SidebarView.LAYERS
                }
            }, {
                key: "setInitialView",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : s.SidebarView.NONE;
                    if (this.isInitialViewSet) {
                        return
                    }
                    this.isInitialViewSet = true;
                    if (t === s.SidebarView.NONE || t === s.SidebarView.UNKNOWN) {
                        this._dispatchEvent();
                        return
                    }
                    if (!this._switchView(t, true)) {
                        this._dispatchEvent()
                    }
                }
            }, {
                key: "switchView",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    this._switchView(t, n)
                }
            }, {
                key: "_switchView",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var r = t !== this.active;
                    var i = false;
                    switch (t) {
                        case s.SidebarView.NONE:
                            if (this.isOpen) {
                                this.close();
                                return true
                            }
                            return false;
                        case s.SidebarView.THUMBS:
                            if (this.isOpen && r) {
                                i = true
                            }
                            break;
                        case s.SidebarView.OUTLINE:
                            if (this.outlineButton.disabled) {
                                return false
                            }
                            break;
                        case s.SidebarView.ATTACHMENTS:
                            if (this.attachmentsButton.disabled) {
                                return false
                            }
                            break;
                        case s.SidebarView.LAYERS:
                            if (this.layersButton.disabled) {
                                return false
                            }
                            break;
                        default:
                            console.error('PDFSidebar._switchView: "'.concat(t, '" is not a valid view.'));
                            return false
                    }
                    this.active = t;
                    this.thumbnailButton.classList.toggle("toggled", t === s.SidebarView.THUMBS);
                    this.outlineButton.classList.toggle("toggled", t === s.SidebarView.OUTLINE);
                    this.attachmentsButton.classList.toggle("toggled", t === s.SidebarView.ATTACHMENTS);
                    this.layersButton.classList.toggle("toggled", t === s.SidebarView.LAYERS);
                    this.thumbnailView.classList.toggle("hidden", t !== s.SidebarView.THUMBS);
                    this.outlineView.classList.toggle("hidden", t !== s.SidebarView.OUTLINE);
                    this.attachmentsView.classList.toggle("hidden", t !== s.SidebarView.ATTACHMENTS);
                    this.layersView.classList.toggle("hidden", t !== s.SidebarView.LAYERS);
                    this._outlineOptionsContainer.classList.toggle("hidden", t !== s.SidebarView.OUTLINE);
                    if (n && !this.isOpen) {
                        this.open();
                        return true
                    }
                    if (i) {
                        this._updateThumbnailViewer();
                        this._forceRendering()
                    }
                    if (r) {
                        this._dispatchEvent()
                    }
                    return r
                }
            }, {
                key: "open",
                value: function e() {
                    if (this.isOpen) {
                        return
                    }
                    this.isOpen = true;
                    this.toggleButton.classList.add("toggled");
                    this.toggleButton.setAttribute("aria-expanded", "true");
                    this.outerContainer.classList.add("sidebarMoving", "sidebarOpen");
                    if (this.active === s.SidebarView.THUMBS) {
                        this._updateThumbnailViewer()
                    }
                    this._forceRendering();
                    this._dispatchEvent();
                    this._hideUINotification()
                }
            }, {
                key: "close",
                value: function e() {
                    if (!this.isOpen) {
                        return
                    }
                    this.isOpen = false;
                    this.toggleButton.classList.remove("toggled");
                    this.toggleButton.setAttribute("aria-expanded", "false");
                    this.outerContainer.classList.add("sidebarMoving");
                    this.outerContainer.classList.remove("sidebarOpen");
                    this._forceRendering();
                    this._dispatchEvent()
                }
            }, {
                key: "toggle",
                value: function e() {
                    if (this.isOpen) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }, {
                key: "_dispatchEvent",
                value: function e() {
                    this.eventBus.dispatch("sidebarviewchanged", {
                        source: this,
                        view: this.visibleView
                    })
                }
            }, {
                key: "_forceRendering",
                value: function e() {
                    if (this.onToggled) {
                        this.onToggled()
                    } else {
                        this.pdfViewer.forceRendering();
                        this.pdfThumbnailViewer.forceRendering()
                    }
                }
            }, {
                key: "_updateThumbnailViewer",
                value: function e() {
                    var t = this.pdfViewer,
                        n = this.pdfThumbnailViewer;
                    var r = t.pagesCount;
                    for (var i = 0; i < r; i++) {
                        var a = t.getPageView(i);
                        if ((a === null || a === void 0 ? void 0 : a.renderingState) === s.RenderingStates.FINISHED) {
                            var o = n.getThumbnail(i);
                            o.setImage(a)
                        }
                    }
                    n.scrollThumbnailIntoView(t.currentPageNumber)
                }
            }, {
                key: "_showUINotification",
                value: function e() {
                    var t = this;
                    this.l10n.get("toggle_sidebar_notification2.title").then(function (e) {
                        t.toggleButton.title = e
                    });
                    if (!this.isOpen) {
                        this.toggleButton.classList.add(a)
                    }
                }
            }, {
                key: "_hideUINotification",
                value: function e() {
                    var t = this;
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (this.isOpen || n) {
                        this.toggleButton.classList.remove(a)
                    }
                    if (n) {
                        this.l10n.get("toggle_sidebar.title").then(function (e) {
                            t.toggleButton.title = e
                        })
                    }
                }
            }, {
                key: "_addEventListeners",
                value: function e() {
                    var i = this;
                    this.viewerContainer.addEventListener("transitionend", function (e) {
                        if (e.target === i.viewerContainer) {
                            i.outerContainer.classList.remove("sidebarMoving")
                        }
                    });
                    this.toggleButton.addEventListener("click", function () {
                        i.toggle()
                    });
                    this.thumbnailButton.addEventListener("click", function () {
                        i.switchView(s.SidebarView.THUMBS)
                    });
                    this.outlineButton.addEventListener("click", function () {
                        i.switchView(s.SidebarView.OUTLINE)
                    });
                    this.outlineButton.addEventListener("dblclick", function () {
                        i.eventBus.dispatch("toggleoutlinetree", {
                            source: i
                        })
                    });
                    this.attachmentsButton.addEventListener("click", function () {
                        i.switchView(s.SidebarView.ATTACHMENTS)
                    });
                    this.layersButton.addEventListener("click", function () {
                        i.switchView(s.SidebarView.LAYERS)
                    });
                    this.layersButton.addEventListener("dblclick", function () {
                        i.eventBus.dispatch("resetlayers", {
                            source: i
                        })
                    });
                    this._currentOutlineItemButton.addEventListener("click", function () {
                        i.eventBus.dispatch("currentoutlineitem", {
                            source: i
                        })
                    });
                    var t = function e(t, n, r) {
                        n.disabled = !t;
                        if (t) {
                            i._showUINotification()
                        } else if (i.active === r) {
                            i.switchView(s.SidebarView.THUMBS)
                        }
                    };
                    this.eventBus._on("outlineloaded", function (e) {
                        t(e.outlineCount, i.outlineButton, s.SidebarView.OUTLINE);
                        e.currentOutlineItemPromise.then(function (e) {
                            if (!i.isInitialViewSet) {
                                return
                            }
                            i._currentOutlineItemButton.disabled = !e
                        })
                    });
                    this.eventBus._on("attachmentsloaded", function (e) {
                        t(e.attachmentsCount, i.attachmentsButton, s.SidebarView.ATTACHMENTS)
                    });
                    this.eventBus._on("layersloaded", function (e) {
                        t(e.layersCount, i.layersButton, s.SidebarView.LAYERS)
                    });
                    this.eventBus._on("presentationmodechanged", function (e) {
                        if (e.state === s.PresentationModeState.NORMAL && i.isThumbnailViewVisible) {
                            i._updateThumbnailViewer()
                        }
                    })
                }
            }]);
            return o
        }();
        t.PDFSidebar = o
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFSidebarResizer = void 0;

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function n(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var o = "--sidebar-width";
        var s = 200;
        var u = "sidebarResizing";
        var i = function () {
            function i(e, t, n) {
                var r = this;
                a(this, i);
                this.isRTL = false;
                this.sidebarOpen = false;
                this.doc = document.documentElement;
                this._width = null;
                this._outerContainerWidth = null;
                this._boundEvents = Object.create(null);
                this.outerContainer = e.outerContainer;
                this.resizer = e.resizer;
                this.eventBus = t;
                n.getDirection().then(function (e) {
                    r.isRTL = e === "rtl"
                });
                this._addEventListeners()
            }
            n(i, [{
                key: "outerContainerWidth",
                get: function e() {
                    return this._outerContainerWidth || (this._outerContainerWidth = this.outerContainer.clientWidth)
                }
            }, {
                key: "_updateWidth",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var n = Math.floor(this.outerContainerWidth / 2);
                    if (t > n) {
                        t = n
                    }
                    if (t < s) {
                        t = s
                    }
                    if (t === this._width) {
                        return false
                    }
                    this._width = t;
                    this.doc.style.setProperty(o, "".concat(t, "px"));
                    return true
                }
            }, {
                key: "_mouseMove",
                value: function e(t) {
                    var n = t.clientX;
                    if (this.isRTL) {
                        n = this.outerContainerWidth - n
                    }
                    this._updateWidth(n)
                }
            }, {
                key: "_mouseUp",
                value: function e(t) {
                    this.outerContainer.classList.remove(u);
                    this.eventBus.dispatch("resize", {
                        source: this
                    });
                    var n = this._boundEvents;
                    window.removeEventListener("mousemove", n.mouseMove);
                    window.removeEventListener("mouseup", n.mouseUp)
                }
            }, {
                key: "_addEventListeners",
                value: function e() {
                    var n = this;
                    var t = this._boundEvents;
                    t.mouseMove = this._mouseMove.bind(this);
                    t.mouseUp = this._mouseUp.bind(this);
                    this.resizer.addEventListener("mousedown", function (e) {
                        if (e.button !== 0) {
                            return
                        }
                        n.outerContainer.classList.add(u);
                        window.addEventListener("mousemove", t.mouseMove);
                        window.addEventListener("mouseup", t.mouseUp)
                    });
                    this.eventBus._on("sidebarviewchanged", function (e) {
                        n.sidebarOpen = !!(e !== null && e !== void 0 && e.view)
                    });
                    this.eventBus._on("resize", function (e) {
                        if ((e === null || e === void 0 ? void 0 : e.source) !== window) {
                            return
                        }
                        n._outerContainerWidth = null;
                        if (!n._width) {
                            return
                        }
                        if (!n.sidebarOpen) {
                            n._updateWidth(n._width);
                            return
                        }
                        n.outerContainer.classList.add(u);
                        var t = n._updateWidth(n._width);
                        Promise.resolve().then(function () {
                            n.outerContainer.classList.remove(u);
                            if (t) {
                                n.eventBus.dispatch("resize", {
                                    source: n
                                })
                            }
                        })
                    })
                }
            }]);
            return i
        }();
        t.PDFSidebarResizer = i
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFThumbnailViewer = void 0;
        var i = r(n(3));
        var p = n(5);
        var f = n(28);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function a(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function v(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }

        function o(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }

        function h(e, t) {
            g(e, t);
            t.add(e)
        }

        function g(e, t) {
            if (t.has(e)) {
                throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
        }

        function m(e, t, n) {
            if (!t.has(e)) {
                throw new TypeError("attempted to get private field on non-instance")
            }
            return n
        }
        var y = -19;
        var b = "selected";
        var w = new WeakSet;
        var _ = new WeakSet;
        var P = function () {
            function s(e) {
                var t = this;
                var n = e.container,
                    r = e.eventBus,
                    i = e.linkService,
                    a = e.renderingQueue,
                    o = e.l10n;
                c(this, s);
                h(this, _);
                h(this, w);
                this.container = n;
                this.linkService = i;
                this.renderingQueue = a;
                this.l10n = o;
                this.scroll = (0, p.watchScroll)(this.container, this._scrollUpdated.bind(this));
                this._resetView();
                r._on("optionalcontentconfigchanged", function () {
                    t._setImageDisabled = true
                })
            }
            d(s, [{
                key: "_scrollUpdated",
                value: function e() {
                    this.renderingQueue.renderHighestPriority()
                }
            }, {
                key: "getThumbnail",
                value: function e(t) {
                    return this._thumbnails[t]
                }
            }, {
                key: "_getVisibleThumbs",
                value: function e() {
                    return (0, p.getVisibleElements)({
                        scrollEl: this.container,
                        views: this._thumbnails
                    })
                }
            }, {
                key: "scrollThumbnailIntoView",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    var n = this._thumbnails[t - 1];
                    if (!n) {
                        console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.');
                        return
                    }
                    if (t !== this._currentPageNumber) {
                        var r = this._thumbnails[this._currentPageNumber - 1];
                        r.div.classList.remove(b);
                        n.div.classList.add(b)
                    }
                    var i = this._getVisibleThumbs(),
                        a = i.first,
                        o = i.last,
                        s = i.views;
                    if (s.length > 0) {
                        var u = false;
                        if (t <= a.id || t >= o.id) {
                            u = true
                        } else {
                            var l = v(s),
                                c;
                            try {
                                for (l.s(); !(c = l.n()).done;) {
                                    var f = c.value,
                                        d = f.id,
                                        h = f.percent;
                                    if (d !== t) {
                                        continue
                                    }
                                    u = h < 100;
                                    break
                                }
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }
                        if (u) {
                            (0, p.scrollIntoView)(n.div, {
                                top: y
                            })
                        }
                    }
                    this._currentPageNumber = t
                }
            }, {
                key: "pagesRotation",
                get: function e() {
                    return this._pagesRotation
                },
                set: function e(t) {
                    if (!(0, p.isValidRotation)(t)) {
                        throw new Error("Invalid thumbnails rotation angle.")
                    }
                    if (!this.pdfDocument) {
                        return
                    }
                    if (this._pagesRotation === t) {
                        return
                    }
                    this._pagesRotation = t;
                    var n = {
                        rotation: t
                    };
                    var r = v(this._thumbnails),
                        i;
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = i.value;
                            a.update(n)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "cleanup",
                value: function e() {
                    for (var t = 0, n = this._thumbnails.length; t < n; t++) {
                        if (this._thumbnails[t] && this._thumbnails[t].renderingState !== p.RenderingStates.FINISHED) {
                            this._thumbnails[t].reset()
                        }
                    }
                    f.TempImageFactory.destroyCanvas()
                }
            }, {
                key: "_resetView",
                value: function e() {
                    this._thumbnails = [];
                    this._currentPageNumber = 1;
                    this._pageLabels = null;
                    this._pagesRotation = 0;
                    this._optionalContentConfigPromise = null;
                    this._setImageDisabled = false;
                    this.container.textContent = ""
                }
            }, {
                key: "setDocument",
                value: function e(u) {
                    var l = this;
                    if (this.pdfDocument) {
                        this._cancelRendering();
                        this._resetView()
                    }
                    this.pdfDocument = u;
                    if (!u) {
                        return
                    }
                    var t = u.getPage(1);
                    var c = u.getOptionalContentConfig();
                    t.then(function (e) {
                        l._optionalContentConfigPromise = c;
                        var t = u.numPages;
                        var n = e.getViewport({
                            scale: 1
                        });
                        var r = function e() {
                            return l._setImageDisabled
                        };
                        for (var i = 1; i <= t; ++i) {
                            var a = new f.PDFThumbnailView({
                                container: l.container,
                                id: i,
                                defaultViewport: n.clone(),
                                optionalContentConfigPromise: c,
                                linkService: l.linkService,
                                renderingQueue: l.renderingQueue,
                                checkSetImageDisabled: r,
                                l10n: l.l10n
                            });
                            l._thumbnails.push(a)
                        }
                        var o = l._thumbnails[0];
                        if (o) {
                            o.setPdfPage(e)
                        }
                        var s = l._thumbnails[l._currentPageNumber - 1];
                        s.div.classList.add(b)
                    })["catch"](function (e) {
                        console.error("Unable to initialize thumbnail viewer", e)
                    })
                }
            }, {
                key: "_cancelRendering",
                value: function e() {
                    for (var t = 0, n = this._thumbnails.length; t < n; t++) {
                        if (this._thumbnails[t]) {
                            this._thumbnails[t].cancelRendering()
                        }
                    }
                }
            }, {
                key: "setPageLabels",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    if (!t) {
                        this._pageLabels = null
                    } else if (!(Array.isArray(t) && this.pdfDocument.numPages === t.length)) {
                        this._pageLabels = null;
                        console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")
                    } else {
                        this._pageLabels = t
                    }
                    for (var n = 0, r = this._thumbnails.length; n < r; n++) {
                        var i, a;
                        this._thumbnails[n].setPageLabel((i = (a = this._pageLabels) === null || a === void 0 ? void 0 : a[n]) !== null && i !== void 0 ? i : null)
                    }
                }
            }, {
                key: "forceRendering",
                value: function e() {
                    var t = this;
                    var n = this._getVisibleThumbs();
                    var r = m(this, _, E).call(this, n);
                    var i = this.renderingQueue.getHighestPriority(n, this._thumbnails, r);
                    if (i) {
                        m(this, w, S).call(this, i).then(function () {
                            t.renderingQueue.renderView(i)
                        });
                        return true
                    }
                    return false
                }
            }]);
            return s
        }();
        t.PDFThumbnailViewer = P;

        function S(e) {
            return k.apply(this, arguments)
        }

        function k() {
            k = a(i["default"].mark(function e(n) {
                var r;
                return i["default"].wrap(function e(t) {
                    while (1) {
                        switch (t.prev = t.next) {
                            case 0:
                                if (!n.pdfPage) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", n.pdfPage);
                            case 2:
                                t.prev = 2;
                                t.next = 5;
                                return this.pdfDocument.getPage(n.id);
                            case 5:
                                r = t.sent;
                                if (!n.pdfPage) {
                                    n.setPdfPage(r)
                                }
                                return t.abrupt("return", r);
                            case 10:
                                t.prev = 10;
                                t.t0 = t["catch"](2);
                                console.error("Unable to get page for thumb view", t.t0);
                                return t.abrupt("return", null);
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }
                }, e, this, [[2, 10]])
            }));
            return k.apply(this, arguments)
        }

        function E(e) {
            var t, n;
            if (((t = e.first) === null || t === void 0 ? void 0 : t.id) === 1) {
                return true
            } else if (((n = e.last) === null || n === void 0 ? void 0 : n.id) === this._thumbnails.length) {
                return false
            }
            return this.scroll.down
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.TempImageFactory = t.PDFThumbnailView = void 0;
        var h = r(n(3));
        var m = n(5);
        var p = n(7);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t) {
            return u(e) || s(e, t) || a(e, t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function a(e, t) {
            if (!e) return;
            if (typeof e === "string") return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }

        function o(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function s(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function u(e) {
            if (Array.isArray(e)) return e
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function v(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function y(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) {
            if (t) c(e.prototype, t);
            if (n) c(e, n);
            return e
        }

        function g(e, t, n, r) {
            P(e, t);
            _(n, "set");
            b(e, n, r);
            return r
        }

        function b(e, t, n) {
            if (t.set) {
                t.set.call(e, n)
            } else {
                if (!t.writable) {
                    throw new TypeError("attempted to set read only private field")
                }
                t.value = n
            }
        }

        function w(e, t, n) {
            P(e, t);
            _(n, "get");
            return S(e, n)
        }

        function _(e, t) {
            if (e === undefined) {
                throw new TypeError("attempted to " + t + " private static field before its declaration")
            }
        }

        function P(e, t) {
            if (e !== t) {
                throw new TypeError("Private static access of wrong provenance")
            }
        }

        function S(e, t) {
            if (t.get) {
                return t.get.call(e)
            }
            return t.value
        }
        var k = 2;
        var E = 3;
        var x = 1;
        var C = 98;
        var L = function () {
            function a() {
                y(this, a)
            }
            d(a, null, [{
                key: "getCanvas",
                value: function e(t, n) {
                    var r = w(this, a, T) || g(this, a, T, document.createElement("canvas"));
                    r.width = t;
                    r.height = n;
                    r.mozOpaque = true;
                    var i = r.getContext("2d", {
                        alpha: false
                    });
                    i.save();
                    i.fillStyle = "rgb(255, 255, 255)";
                    i.fillRect(0, 0, t, n);
                    i.restore();
                    return [r, r.getContext("2d")]
                }
            }, {
                key: "destroyCanvas",
                value: function e() {
                    var t = w(this, a, T);
                    if (t) {
                        t.width = 0;
                        t.height = 0
                    }
                    g(this, a, T, null)
                }
            }]);
            return a
        }();
        t.TempImageFactory = L;
        var T = {
            writable: true,
            value: null
        };
        var I = function () {
            function g(e) {
                var t = e.container,
                    n = e.id,
                    r = e.defaultViewport,
                    i = e.optionalContentConfigPromise,
                    a = e.linkService,
                    o = e.renderingQueue,
                    s = e.checkSetImageDisabled,
                    u = e.l10n;
                y(this, g);
                this.id = n;
                this.renderingId = "thumbnail" + n;
                this.pageLabel = null;
                this.pdfPage = null;
                this.rotation = 0;
                this.viewport = r;
                this.pdfPageRotate = r.rotation;
                this._optionalContentConfigPromise = i || null;
                this.linkService = a;
                this.renderingQueue = o;
                this.renderTask = null;
                this.renderingState = m.RenderingStates.INITIAL;
                this.resume = null;
                this._checkSetImageDisabled = s || function () {
                    return false
                };
                var l = this.viewport.width,
                    c = this.viewport.height,
                    f = l / c;
                this.canvasWidth = C;
                this.canvasHeight = this.canvasWidth / f | 0;
                this.scale = this.canvasWidth / l;
                this.l10n = u;
                var d = document.createElement("a");
                d.href = a.getAnchorUrl("#page=" + n);
                this._thumbPageTitle.then(function (e) {
                    d.title = e
                });
                d.onclick = function () {
                    a.goToPage(n);
                    return false
                };
                this.anchor = d;
                var h = document.createElement("div");
                h.className = "thumbnail";
                h.setAttribute("data-page-number", this.id);
                this.div = h;
                var p = document.createElement("div");
                p.className = "thumbnailSelectionRing";
                var v = 2 * x;
                p.style.width = this.canvasWidth + v + "px";
                p.style.height = this.canvasHeight + v + "px";
                this.ring = p;
                h.appendChild(p);
                d.appendChild(h);
                t.appendChild(d)
            }
            d(g, [{
                key: "setPdfPage",
                value: function e(t) {
                    this.pdfPage = t;
                    this.pdfPageRotate = t.rotate;
                    var n = (this.rotation + this.pdfPageRotate) % 360;
                    this.viewport = t.getViewport({
                        scale: 1,
                        rotation: n
                    });
                    this.reset()
                }
            }, {
                key: "reset",
                value: function e() {
                    this.cancelRendering();
                    this.renderingState = m.RenderingStates.INITIAL;
                    var t = this.viewport.width,
                        n = this.viewport.height,
                        r = t / n;
                    this.canvasHeight = this.canvasWidth / r | 0;
                    this.scale = this.canvasWidth / t;
                    this.div.removeAttribute("data-loaded");
                    var i = this.ring;
                    i.textContent = "";
                    var a = 2 * x;
                    i.style.width = this.canvasWidth + a + "px";
                    i.style.height = this.canvasHeight + a + "px";
                    if (this.canvas) {
                        this.canvas.width = 0;
                        this.canvas.height = 0;
                        delete this.canvas
                    }
                    if (this.image) {
                        this.image.removeAttribute("src");
                        delete this.image
                    }
                }
            }, {
                key: "update",
                value: function e(t) {
                    var n = t.rotation,
                        r = n === void 0 ? null : n;
                    if (typeof r === "number") {
                        this.rotation = r
                    }
                    var i = (this.rotation + this.pdfPageRotate) % 360;
                    this.viewport = this.viewport.clone({
                        scale: 1,
                        rotation: i
                    });
                    this.reset()
                }
            }, {
                key: "cancelRendering",
                value: function e() {
                    if (this.renderTask) {
                        this.renderTask.cancel();
                        this.renderTask = null
                    }
                    this.resume = null
                }
            }, {
                key: "_getPageDrawContext",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var n = document.createElement("canvas");
                    n.mozOpaque = true;
                    var r = n.getContext("2d", {
                        alpha: false
                    });
                    var i = (0, m.getOutputScale)(r);
                    n.width = t * this.canvasWidth * i.sx | 0;
                    n.height = t * this.canvasHeight * i.sy | 0;
                    var a = i.scaled ? [i.sx, 0, 0, i.sy, 0, 0] : null;
                    return {
                        ctx: r,
                        canvas: n,
                        transform: a
                    }
                }
            }, {
                key: "_convertCanvasToImage",
                value: function e(t) {
                    if (this.renderingState !== m.RenderingStates.FINISHED) {
                        throw new Error("_convertCanvasToImage: Rendering has not finished.")
                    }
                    var n = this._reduceImage(t);
                    var r = document.createElement("img");
                    r.className = "thumbnailImage";
                    this._thumbPageCanvas.then(function (e) {
                        r.setAttribute("aria-label", e)
                    });
                    r.style.width = this.canvasWidth + "px";
                    r.style.height = this.canvasHeight + "px";
                    r.src = n.toDataURL();
                    this.image = r;
                    this.div.setAttribute("data-loaded", true);
                    this.ring.appendChild(r);
                    n.width = 0;
                    n.height = 0
                }
            }, {
                key: "draw",
                value: function e() {
                    var i = this;
                    if (this.renderingState !== m.RenderingStates.INITIAL) {
                        console.error("Must be in new state before drawing");
                        return Promise.resolve()
                    }
                    var t = this.pdfPage;
                    if (!t) {
                        this.renderingState = m.RenderingStates.FINISHED;
                        return Promise.reject(new Error("pdfPage is not loaded"))
                    }
                    this.renderingState = m.RenderingStates.RUNNING;
                    var n = function () {
                        var t = v(h["default"].mark(function e() {
                            var n, r = arguments;
                            return h["default"].wrap(function e(t) {
                                while (1) {
                                    switch (t.prev = t.next) {
                                        case 0:
                                            n = r.length > 0 && r[0] !== undefined ? r[0] : null;
                                            if (f === i.renderTask) {
                                                i.renderTask = null
                                            }
                                            if (!(n instanceof p.RenderingCancelledException)) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            i.renderingState = m.RenderingStates.FINISHED;
                                            i._convertCanvasToImage(o);
                                            if (!n) {
                                                t.next = 8;
                                                break
                                            }
                                            throw n;
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function e() {
                            return t.apply(this, arguments)
                        }
                    }();
                    var r = this._getPageDrawContext(k),
                        a = r.ctx,
                        o = r.canvas,
                        s = r.transform;
                    var u = this.viewport.clone({
                        scale: k * this.scale
                    });
                    var l = function e(t) {
                        if (!i.renderingQueue.isHighestPriority(i)) {
                            i.renderingState = m.RenderingStates.PAUSED;
                            i.resume = function () {
                                i.renderingState = m.RenderingStates.RUNNING;
                                t()
                            };
                            return
                        }
                        t()
                    };
                    var c = {
                        canvasContext: a,
                        transform: s,
                        viewport: u,
                        optionalContentConfigPromise: this._optionalContentConfigPromise
                    };
                    var f = this.renderTask = t.render(c);
                    f.onContinue = l;
                    var d = f.promise.then(function () {
                        return n(null)
                    }, function (e) {
                        return n(e)
                    });
                    d["finally"](function () {
                        o.width = 0;
                        o.height = 0;
                        var e = i.linkService.isPageCached(i.id);
                        if (!e) {
                            var t;
                            (t = i.pdfPage) === null || t === void 0 ? void 0 : t.cleanup()
                        }
                    });
                    return d
                }
            }, {
                key: "setImage",
                value: function e(t) {
                    if (this._checkSetImageDisabled()) {
                        return
                    }
                    if (this.renderingState !== m.RenderingStates.INITIAL) {
                        return
                    }
                    var n = t.canvas,
                        r = t.pdfPage;
                    if (!n) {
                        return
                    }
                    if (!this.pdfPage) {
                        this.setPdfPage(r)
                    }
                    this.renderingState = m.RenderingStates.FINISHED;
                    this._convertCanvasToImage(n)
                }
            }, {
                key: "_reduceImage",
                value: function e(t) {
                    var n = this._getPageDrawContext(),
                        r = n.ctx,
                        i = n.canvas;
                    if (t.width <= 2 * i.width) {
                        r.drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height);
                        return i
                    }
                    var a = i.width << E;
                    var o = i.height << E;
                    var s = L.getCanvas(a, o),
                        u = f(s, 2),
                        l = u[0],
                        c = u[1];
                    while (a > t.width || o > t.height) {
                        a >>= 1;
                        o >>= 1
                    }
                    c.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
                    while (a > 2 * i.width) {
                        c.drawImage(l, 0, 0, a, o, 0, 0, a >> 1, o >> 1);
                        a >>= 1;
                        o >>= 1
                    }
                    r.drawImage(l, 0, 0, a, o, 0, 0, i.width, i.height);
                    return i
                }
            }, {
                key: "_thumbPageTitle",
                get: function e() {
                    var t;
                    return this.l10n.get("thumb_page_title", {
                        page: (t = this.pageLabel) !== null && t !== void 0 ? t : this.id
                    })
                }
            }, {
                key: "_thumbPageCanvas",
                get: function e() {
                    var t;
                    return this.l10n.get("thumb_page_canvas", {
                        page: (t = this.pageLabel) !== null && t !== void 0 ? t : this.id
                    })
                }
            }, {
                key: "setPageLabel",
                value: function e(t) {
                    var n = this;
                    this.pageLabel = typeof t === "string" ? t : null;
                    this._thumbPageTitle.then(function (e) {
                        n.anchor.title = e
                    });
                    if (this.renderingState !== m.RenderingStates.FINISHED) {
                        return
                    }
                    this._thumbPageCanvas.then(function (e) {
                        var t;
                        (t = n.image) === null || t === void 0 ? void 0 : t.setAttribute("aria-label", e)
                    })
                }
            }]);
            return g
        }();
        t.PDFThumbnailView = I
    }, (e, t, n) => {
        function r(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                r = function e(t) {
                    return typeof t
                }
            } else {
                r = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return r(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFViewer = t.PDFSinglePageViewer = void 0;
        var i = n(5);
        var a = n(30);

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) {
            if (t) o(e.prototype, t);
            if (n) o(e, n);
            return e
        }

        function u(e, t, n) {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                u = Reflect.get
            } else {
                u = function e(t, n, r) {
                    var i = l(t, n);
                    if (!i) return;
                    var a = Object.getOwnPropertyDescriptor(i, n);
                    if (a.get) {
                        return a.get.call(r)
                    }
                    return a.value
                }
            }
            return u(e, t, n || e)
        }

        function l(e, t) {
            while (!Object.prototype.hasOwnProperty.call(e, t)) {
                e = m(e);
                if (e === null) break
            }
            return e
        }

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) d(e, t)
        }

        function d(e, t) {
            d = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return d(e, t)
        }

        function h(i) {
            var a = g();
            return function e() {
                var t = m(i),
                    n;
                if (a) {
                    var r = m(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return p(this, n)
            }
        }

        function p(e, t) {
            if (t && (r(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return v(e)
        }

        function v(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function g() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function m(e) {
            m = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return m(e)
        }
        var y = function (e) {
            f(n, e);
            var t = h(n);

            function n() {
                c(this, n);
                return t.apply(this, arguments)
            }
            return n
        }(a.BaseViewer);
        t.PDFViewer = y;
        var b = function (e) {
            f(n, e);
            var t = h(n);

            function n() {
                c(this, n);
                return t.apply(this, arguments)
            }
            s(n, [{
                key: "_resetView",
                value: function e() {
                    u(m(n.prototype), "_resetView", this).call(this);
                    this._scrollMode = i.ScrollMode.PAGE;
                    this._spreadMode = i.SpreadMode.NONE
                }
            }, {
                key: "scrollMode",
                set: function e(t) {}
            }, {
                key: "_updateScrollMode",
                value: function e() {}
            }, {
                key: "spreadMode",
                set: function e(t) {}
            }, {
                key: "_updateSpreadMode",
                value: function e() {}
            }]);
            return n
        }(a.BaseViewer);
        t.PDFSinglePageViewer = b
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PagesCountLimit = t.PDFPageViewBuffer = t.BaseViewer = void 0;
        var y = s(n(3));
        var E = n(7);
        var F = n(5);
        var g = n(31);
        var m = n(32);
        var b = n(33);
        var u = n(23);
        var l = n(20);
        var r = n(34);
        var i = n(35);
        var c = n(36);
        var a = n(37);
        var o;

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function w(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        f(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        f(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function _(e, t) {
            return p(e) || h(e, t) || v(e, t) || d()
        }

        function d() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function h(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function p(e) {
            if (Array.isArray(e)) return e
        }

        function j(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = v(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function v(e, t) {
            if (!e) return;
            if (typeof e === "string") return P(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
        }

        function P(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function S(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function k(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function x(e, t, n) {
            if (t) k(e.prototype, t);
            if (n) k(e, n);
            return e
        }

        function C(e, t) {
            T(e, t);
            t.add(e)
        }

        function L(e, t, n) {
            T(e, t);
            t.set(e, n)
        }

        function T(e, t) {
            if (t.has(e)) {
                throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
        }

        function I(e, t, n) {
            if (!t.has(e)) {
                throw new TypeError("attempted to get private field on non-instance")
            }
            return n
        }

        function O(e, t) {
            var n = D(e, t, "get");
            return M(e, n)
        }

        function M(e, t) {
            if (t.get) {
                return t.get.call(e)
            }
            return t.value
        }

        function A(e, t, n) {
            var r = D(e, t, "set");
            N(e, r, n);
            return n
        }

        function D(e, t, n) {
            if (!t.has(e)) {
                throw new TypeError("attempted to " + n + " private field on non-instance")
            }
            return t.get(e)
        }

        function N(e, t, n) {
            if (t.set) {
                t.set.call(e, n)
            } else {
                if (!t.writable) {
                    throw new TypeError("attempted to set read only private field")
                }
                t.value = n
            }
        }
        var B = 10;
        var V = "enablePermissions";
        var R = {
            FORCE_SCROLL_MODE_PAGE: 15e3,
            FORCE_LAZY_PAGE_INIT: 7500,
            PAUSE_EAGER_PAGE_INIT: 500
        };
        t.PagesCountLimit = R;
        var U = new WeakMap;
        var H = new WeakMap;
        var z = new WeakSet;
        o = Symbol.iterator;
        var W = function (e) {
            function t(e) {
                S(this, t);
                C(this, z);
                L(this, U, {
                    writable: true,
                    value: new Set
                });
                L(this, H, {
                    writable: true,
                    value: 0
                });
                A(this, H, e)
            }
            x(t, [{
                key: "push",
                value: function e(t) {
                    var n = O(this, U);
                    if (n.has(t)) {
                        n["delete"](t)
                    }
                    n.add(t);
                    if (n.size > O(this, H)) {
                        I(this, z, G).call(this)
                    }
                }
            }, {
                key: "resize",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    A(this, H, t);
                    var r = O(this, U);
                    if (n) {
                        var i = r.size;
                        var a = 1;
                        var o = j(r),
                            s;
                        try {
                            for (o.s(); !(s = o.n()).done;) {
                                var u = s.value;
                                if (n.has(u.id)) {
                                    r["delete"](u);
                                    r.add(u)
                                }
                                if (++a > i) {
                                    break
                                }
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    }
                    while (r.size > O(this, H)) {
                        I(this, z, G).call(this)
                    }
                }
            }, {
                key: "has",
                value: function e(t) {
                    return O(this, U).has(t)
                }
            }, {
                key: e,
                value: function e() {
                    return O(this, U).keys()
                }
            }]);
            return t
        }(o);
        t.PDFPageViewBuffer = W;

        function G() {
            var e = O(this, U).keys().next().value;
            e === null || e === void 0 ? void 0 : e.destroy();
            O(this, U)["delete"](e)
        }
        var X = new WeakMap;
        var K = new WeakMap;
        var q = new WeakMap;
        var Z = new WeakMap;
        var Q = new WeakMap;
        var Y = new WeakMap;
        var $ = new WeakSet;
        var J = new WeakSet;
        var ee = new WeakSet;
        var te = new WeakSet;
        var ne = new WeakSet;
        var re = new WeakSet;
        var ie = new WeakSet;
        var ae = function () {
            function s(e) {
                var t, n, r, i, a = this;
                S(this, s);
                C(this, ie);
                C(this, re);
                C(this, ne);
                C(this, te);
                C(this, ee);
                C(this, J);
                C(this, $);
                L(this, X, {
                    writable: true,
                    value: null
                });
                L(this, K, {
                    writable: true,
                    value: E.AnnotationMode.ENABLE_FORMS
                });
                L(this, q, {
                    writable: true,
                    value: null
                });
                L(this, Z, {
                    writable: true,
                    value: false
                });
                L(this, Q, {
                    writable: true,
                    value: 0
                });
                L(this, Y, {
                    writable: true,
                    value: null
                });
                if (this.constructor === s) {
                    throw new Error("Cannot initialize BaseViewer.")
                }
                var o = "2.12.313";
                if (E.version !== o) {
                    throw new Error('The API version "'.concat(E.version, '" does not match the Viewer version "').concat(o, '".'))
                }
                this.container = e.container;
                this.viewer = e.viewer || e.container.firstElementChild;
                if (!(((t = this.container) === null || t === void 0 ? void 0 : t.tagName.toUpperCase()) === "DIV" && ((n = this.viewer) === null || n === void 0 ? void 0 : n.tagName.toUpperCase()) === "DIV")) {
                    throw new Error("Invalid `container` and/or `viewer` option.")
                }
                if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute") {
                    throw new Error("The `container` must be absolutely positioned.")
                }
                this.eventBus = e.eventBus;
                this.linkService = e.linkService || new l.SimpleLinkService;
                this.downloadManager = e.downloadManager || null;
                this.findController = e.findController || null;
                this._scriptingManager = e.scriptingManager || null;
                this.removePageBorders = e.removePageBorders || false;
                this.textLayerMode = (r = e.textLayerMode) !== null && r !== void 0 ? r : F.TextLayerMode.ENABLE;
                A(this, K, (i = e.annotationMode) !== null && i !== void 0 ? i : E.AnnotationMode.ENABLE_FORMS);
                this.imageResourcesPath = e.imageResourcesPath || "";
                this.enablePrintAutoRotate = e.enablePrintAutoRotate || false;
                this.renderer = e.renderer || F.RendererType.CANVAS;
                this.useOnlyCssZoom = e.useOnlyCssZoom || false;
                this.maxCanvasPixels = e.maxCanvasPixels;
                this.l10n = e.l10n || m.NullL10n;
                A(this, Z, e.enablePermissions || false);
                this.defaultRenderingQueue = !e.renderingQueue;
                if (this.defaultRenderingQueue) {
                    this.renderingQueue = new u.PDFRenderingQueue;
                    this.renderingQueue.setViewer(this)
                } else {
                    this.renderingQueue = e.renderingQueue
                }
                this._doc = document.documentElement;
                this.scroll = (0, F.watchScroll)(this.container, this._scrollUpdate.bind(this));
                this.presentationModeState = F.PresentationModeState.UNKNOWN;
                this._onBeforeDraw = this._onAfterDraw = null;
                this._resetView();
                if (this.removePageBorders) {
                    this.viewer.classList.add("removePageBorders")
                }
                Promise.resolve().then(function () {
                    a.eventBus.dispatch("baseviewerinit", {
                        source: a
                    })
                })
            }
            x(s, [{
                key: "pagesCount",
                get: function e() {
                    return this._pages.length
                }
            }, {
                key: "getPageView",
                value: function e(t) {
                    return this._pages[t]
                }
            }, {
                key: "pageViewsReady",
                get: function e() {
                    if (!this._pagesCapability.settled) {
                        return false
                    }
                    return this._pages.every(function (e) {
                        return e === null || e === void 0 ? void 0 : e.pdfPage
                    })
                }
            }, {
                key: "renderForms",
                get: function e() {
                    return O(this, K) === E.AnnotationMode.ENABLE_FORMS
                }
            }, {
                key: "enableScripting",
                get: function e() {
                    return !!this._scriptingManager
                }
            }, {
                key: "currentPageNumber",
                get: function e() {
                    return this._currentPageNumber
                },
                set: function e(t) {
                    if (!Number.isInteger(t)) {
                        throw new Error("Invalid page number.")
                    }
                    if (!this.pdfDocument) {
                        return
                    }
                    if (!this._setCurrentPageNumber(t, true)) {
                        console.error('currentPageNumber: "'.concat(t, '" is not a valid page.'))
                    }
                }
            }, {
                key: "_setCurrentPageNumber",
                value: function e(t) {
                    var n, r;
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    if (this._currentPageNumber === t) {
                        if (i) {
                            this._resetCurrentPageView()
                        }
                        return true
                    }
                    if (!(0 < t && t <= this.pagesCount)) {
                        return false
                    }
                    var a = this._currentPageNumber;
                    this._currentPageNumber = t;
                    this.eventBus.dispatch("pagechanging", {
                        source: this,
                        pageNumber: t,
                        pageLabel: (n = (r = this._pageLabels) === null || r === void 0 ? void 0 : r[t - 1]) !== null && n !== void 0 ? n : null,
                        previous: a
                    });
                    if (i) {
                        this._resetCurrentPageView()
                    }
                    return true
                }
            }, {
                key: "currentPageLabel",
                get: function e() {
                    var t, n;
                    return (t = (n = this._pageLabels) === null || n === void 0 ? void 0 : n[this._currentPageNumber - 1]) !== null && t !== void 0 ? t : null
                },
                set: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    var n = t | 0;
                    if (this._pageLabels) {
                        var r = this._pageLabels.indexOf(t);
                        if (r >= 0) {
                            n = r + 1
                        }
                    }
                    if (!this._setCurrentPageNumber(n, true)) {
                        console.error('currentPageLabel: "'.concat(t, '" is not a valid page.'))
                    }
                }
            }, {
                key: "currentScale",
                get: function e() {
                    return this._currentScale !== F.UNKNOWN_SCALE ? this._currentScale : F.DEFAULT_SCALE
                },
                set: function e(t) {
                    if (isNaN(t)) {
                        throw new Error("Invalid numeric scale.")
                    }
                    if (!this.pdfDocument) {
                        return
                    }
                    this._setScale(t, false)
                }
            }, {
                key: "currentScaleValue",
                get: function e() {
                    return this._currentScaleValue
                },
                set: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    this._setScale(t, false)
                }
            }, {
                key: "pagesRotation",
                get: function e() {
                    return this._pagesRotation
                },
                set: function e(t) {
                    if (!(0, F.isValidRotation)(t)) {
                        throw new Error("Invalid pages rotation angle.")
                    }
                    if (!this.pdfDocument) {
                        return
                    }
                    t %= 360;
                    if (t < 0) {
                        t += 360
                    }
                    if (this._pagesRotation === t) {
                        return
                    }
                    this._pagesRotation = t;
                    var n = this._currentPageNumber;
                    var r = {
                        rotation: t
                    };
                    var i = j(this._pages),
                        a;
                    try {
                        for (i.s(); !(a = i.n()).done;) {
                            var o = a.value;
                            o.update(r)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    if (this._currentScaleValue) {
                        this._setScale(this._currentScaleValue, true)
                    }
                    this.eventBus.dispatch("rotationchanging", {
                        source: this,
                        pagesRotation: t,
                        pageNumber: n
                    });
                    if (this.defaultRenderingQueue) {
                        this.update()
                    }
                }
            }, {
                key: "firstPagePromise",
                get: function e() {
                    return this.pdfDocument ? this._firstPageCapability.promise : null
                }
            }, {
                key: "onePageRendered",
                get: function e() {
                    return this.pdfDocument ? this._onePageRenderedCapability.promise : null
                }
            }, {
                key: "pagesPromise",
                get: function e() {
                    return this.pdfDocument ? this._pagesCapability.promise : null
                }
            }, {
                key: "setDocument",
                value: function e(h) {
                    var p = this;
                    if (this.pdfDocument) {
                        this.eventBus.dispatch("pagesdestroy", {
                            source: this
                        });
                        this._cancelRendering();
                        this._resetView();
                        if (this.findController) {
                            this.findController.setDocument(null)
                        }
                        if (this._scriptingManager) {
                            this._scriptingManager.setDocument(null)
                        }
                    }
                    this.pdfDocument = h;
                    if (!h) {
                        return
                    }
                    var v = h.isPureXfa;
                    var g = h.numPages;
                    var t = h.getPage(1);
                    var m = h.getOptionalContentConfig();
                    var n = O(this, Z) ? h.getPermissions() : Promise.resolve();
                    if (g > R.FORCE_SCROLL_MODE_PAGE) {
                        console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
                        var r = this._scrollMode = F.ScrollMode.PAGE;
                        this.eventBus.dispatch("scrollmodechanged", {
                            source: this,
                            mode: r
                        })
                    }
                    this._pagesCapability.promise.then(function () {
                        p.eventBus.dispatch("pagesloaded", {
                            source: p,
                            pagesCount: g
                        })
                    }, function () {});
                    this._onBeforeDraw = function (e) {
                        var t = p._pages[e.pageNumber - 1];
                        if (!t) {
                            return
                        }
                        O(p, X).push(t)
                    };
                    this.eventBus._on("pagerender", this._onBeforeDraw);
                    this._onAfterDraw = function (e) {
                        if (e.cssTransform || p._onePageRenderedCapability.settled) {
                            return
                        }
                        p._onePageRenderedCapability.resolve({
                            timestamp: e.timestamp
                        });
                        p.eventBus._off("pagerendered", p._onAfterDraw);
                        p._onAfterDraw = null
                    };
                    this.eventBus._on("pagerendered", this._onAfterDraw);
                    Promise.all([t, n]).then(function (e) {
                        var t = _(e, 2),
                            n = t[0],
                            r = t[1];
                        if (h !== p.pdfDocument) {
                            return
                        }
                        p._firstPageCapability.resolve(n);
                        p._optionalContentConfigPromise = m;
                        I(p, $, oe).call(p, r);
                        var i = p._scrollMode === F.ScrollMode.PAGE ? null : p.viewer;
                        var a = p.currentScale;
                        var o = n.getViewport({
                            scale: a * E.PixelsPerInch.PDF_TO_CSS_UNITS
                        });
                        var s = p.textLayerMode !== F.TextLayerMode.DISABLE && !v ? p : null;
                        var u = O(p, K) !== E.AnnotationMode.DISABLE ? p : null;
                        var l = v ? p : null;
                        for (var c = 1; c <= g; ++c) {
                            var f = new b.PDFPageView({
                                container: i,
                                eventBus: p.eventBus,
                                id: c,
                                scale: a,
                                defaultViewport: o.clone(),
                                optionalContentConfigPromise: m,
                                renderingQueue: p.renderingQueue,
                                textLayerFactory: s,
                                textLayerMode: p.textLayerMode,
                                annotationLayerFactory: u,
                                annotationMode: O(p, K),
                                xfaLayerFactory: l,
                                textHighlighterFactory: p,
                                structTreeLayerFactory: p,
                                imageResourcesPath: p.imageResourcesPath,
                                renderer: p.renderer,
                                useOnlyCssZoom: p.useOnlyCssZoom,
                                maxCanvasPixels: p.maxCanvasPixels,
                                l10n: p.l10n
                            });
                            p._pages.push(f)
                        }
                        var d = p._pages[0];
                        if (d) {
                            d.setPdfPage(n);
                            p.linkService.cachePageRef(1, n.ref)
                        }
                        if (p._scrollMode === F.ScrollMode.PAGE) {
                            I(p, ee, ue).call(p)
                        } else if (p._spreadMode !== F.SpreadMode.NONE) {
                            p._updateSpreadMode()
                        }
                        I(p, J, se).call(p).then(w(y["default"].mark(function e() {
                            var i, n, r;
                            return y["default"].wrap(function e(t) {
                                while (1) {
                                    switch (t.prev = t.next) {
                                        case 0:
                                            if (p.findController) {
                                                p.findController.setDocument(h)
                                            }
                                            if (p._scriptingManager) {
                                                p._scriptingManager.setDocument(h)
                                            }
                                            if (!(h.loadingParams.disableAutoFetch || g > R.FORCE_LAZY_PAGE_INIT)) {
                                                t.next = 5;
                                                break
                                            }
                                            p._pagesCapability.resolve();
                                            return t.abrupt("return");
                                        case 5:
                                            i = g - 1;
                                            if (!(i <= 0)) {
                                                t.next = 9;
                                                break
                                            }
                                            p._pagesCapability.resolve();
                                            return t.abrupt("return");
                                        case 9:
                                            n = y["default"].mark(function e(n) {
                                                var r;
                                                return y["default"].wrap(function e(t) {
                                                    while (1) {
                                                        switch (t.prev = t.next) {
                                                            case 0:
                                                                r = h.getPage(n).then(function (e) {
                                                                    var t = p._pages[n - 1];
                                                                    if (!t.pdfPage) {
                                                                        t.setPdfPage(e)
                                                                    }
                                                                    p.linkService.cachePageRef(n, e.ref);
                                                                    if (--i === 0) {
                                                                        p._pagesCapability.resolve()
                                                                    }
                                                                }, function (e) {
                                                                    console.error("Unable to get page ".concat(n, " to initialize viewer"), e);
                                                                    if (--i === 0) {
                                                                        p._pagesCapability.resolve()
                                                                    }
                                                                });
                                                                if (!(n % R.PAUSE_EAGER_PAGE_INIT === 0)) {
                                                                    t.next = 4;
                                                                    break
                                                                }
                                                                t.next = 4;
                                                                return r;
                                                            case 4:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }
                                                }, e)
                                            });
                                            r = 2;
                                        case 11:
                                            if (!(r <= g)) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.delegateYield(n(r), "t0", 13);
                                        case 13:
                                            ++r;
                                            t.next = 11;
                                            break;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }
                            }, e)
                        })));
                        p.eventBus.dispatch("pagesinit", {
                            source: p
                        });
                        h.getMetadata().then(function (e) {
                            var t = e.info;
                            if (h !== p.pdfDocument) {
                                return
                            }
                            if (t.Language) {
                                p.viewer.lang = t.Language
                            }
                        });
                        if (p.defaultRenderingQueue) {
                            p.update()
                        }
                    })["catch"](function (e) {
                        console.error("Unable to initialize viewer", e);
                        p._pagesCapability.reject(e)
                    })
                }
            }, {
                key: "setPageLabels",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return
                    }
                    if (!t) {
                        this._pageLabels = null
                    } else if (!(Array.isArray(t) && this.pdfDocument.numPages === t.length)) {
                        this._pageLabels = null;
                        console.error("setPageLabels: Invalid page labels.")
                    } else {
                        this._pageLabels = t
                    }
                    for (var n = 0, r = this._pages.length; n < r; n++) {
                        var i, a;
                        this._pages[n].setPageLabel((i = (a = this._pageLabels) === null || a === void 0 ? void 0 : a[n]) !== null && i !== void 0 ? i : null)
                    }
                }
            }, {
                key: "_resetView",
                value: function e() {
                    this._pages = [];
                    this._currentPageNumber = 1;
                    this._currentScale = F.UNKNOWN_SCALE;
                    this._currentScaleValue = null;
                    this._pageLabels = null;
                    A(this, X, new W(B));
                    this._location = null;
                    this._pagesRotation = 0;
                    this._optionalContentConfigPromise = null;
                    this._firstPageCapability = (0, E.createPromiseCapability)();
                    this._onePageRenderedCapability = (0, E.createPromiseCapability)();
                    this._pagesCapability = (0, E.createPromiseCapability)();
                    this._scrollMode = F.ScrollMode.VERTICAL;
                    this._previousScrollMode = F.ScrollMode.UNKNOWN;
                    this._spreadMode = F.SpreadMode.NONE;
                    A(this, Y, {
                        previousPageNumber: 1,
                        scrollDown: true,
                        pages: []
                    });
                    if (this._onBeforeDraw) {
                        this.eventBus._off("pagerender", this._onBeforeDraw);
                        this._onBeforeDraw = null
                    }
                    if (this._onAfterDraw) {
                        this.eventBus._off("pagerendered", this._onAfterDraw);
                        this._onAfterDraw = null
                    }
                    this.viewer.textContent = "";
                    this._updateScrollMode();
                    this.viewer.removeAttribute("lang");
                    this.viewer.classList.remove(V);
                    if (O(this, q) !== null) {
                        A(this, K, O(this, q));
                        A(this, q, null)
                    }
                }
            }, {
                key: "_scrollUpdate",
                value: function e() {
                    if (this.pagesCount === 0) {
                        return
                    }
                    this.update()
                }
            }, {
                key: "_scrollIntoView",
                value: function e(t) {
                    var n = t.pageDiv,
                        r = t.pageSpot,
                        i = r === void 0 ? null : r,
                        a = t.pageNumber,
                        o = a === void 0 ? null : a;
                    if (this._scrollMode === F.ScrollMode.PAGE) {
                        if (o) {
                            this._setCurrentPageNumber(o)
                        }
                        I(this, ee, ue).call(this);
                        this.update()
                    }
                    if (!i && !this.isInPresentationMode) {
                        var s = n.offsetLeft + n.clientLeft;
                        var u = s + n.clientWidth;
                        var l = this.container,
                            c = l.scrollLeft,
                            f = l.clientWidth;
                        if (this._scrollMode === F.ScrollMode.HORIZONTAL || s < c || u > c + f) {
                            i = {
                                left: 0,
                                top: 0
                            }
                        }
                    }(0, F.scrollIntoView)(n, i)
                }
            }, {
                key: "_setScaleUpdatePages",
                value: function e(t, n) {
                    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    this._currentScaleValue = n.toString();
                    if (I(this, te, le).call(this, t)) {
                        if (i) {
                            this.eventBus.dispatch("scalechanging", {
                                source: this,
                                scale: t,
                                presetValue: n
                            })
                        }
                        return
                    }
                    this._doc.style.setProperty("--zoom-factor", t);
                    this._doc.style.setProperty("--viewport-scale-factor", t * E.PixelsPerInch.PDF_TO_CSS_UNITS);
                    var a = {
                        scale: t
                    };
                    var o = j(this._pages),
                        s;
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var u = s.value;
                            u.update(a)
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    this._currentScale = t;
                    if (!r) {
                        var l = this._currentPageNumber,
                            c;
                        if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
                            l = this._location.pageNumber;
                            c = [null, {
                                name: "XYZ"
                            }, this._location.left, this._location.top, null]
                        }
                        this.scrollPageIntoView({
                            pageNumber: l,
                            destArray: c,
                            allowNegativeOffset: true
                        })
                    }
                    this.eventBus.dispatch("scalechanging", {
                        source: this,
                        scale: t,
                        presetValue: i ? n : undefined
                    });
                    if (this.defaultRenderingQueue) {
                        this.update()
                    }
                    A(this, Q, this.container.clientHeight)
                }
            }, {
                key: "_pageWidthScaleFactor",
                get: function e() {
                    if (this._spreadMode !== F.SpreadMode.NONE && this._scrollMode !== F.ScrollMode.HORIZONTAL) {
                        return 2
                    }
                    return 1
                }
            }, {
                key: "_setScale",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var r = parseFloat(t);
                    if (r > 0) {
                        this._setScaleUpdatePages(r, t, n, false)
                    } else {
                        var i = this._pages[this._currentPageNumber - 1];
                        if (!i) {
                            return
                        }
                        var a = F.SCROLLBAR_PADDING,
                            o = F.VERTICAL_PADDING;
                        if (this.isInPresentationMode) {
                            a = o = 4
                        } else if (this.removePageBorders) {
                            a = o = 0
                        }
                        if (this._scrollMode === F.ScrollMode.HORIZONTAL) {
                            var s = [o, a];
                            a = s[0];
                            o = s[1]
                        }
                        var u = (this.container.clientWidth - a) / i.width * i.scale / this._pageWidthScaleFactor;
                        var l = (this.container.clientHeight - o) / i.height * i.scale;
                        switch (t) {
                            case "page-actual":
                                r = 1;
                                break;
                            case "page-width":
                                r = u;
                                break;
                            case "page-height":
                                r = l;
                                break;
                            case "page-fit":
                                r = Math.min(u, l);
                                break;
                            case "auto":
                                var c = (0, F.isPortraitOrientation)(i) ? u : Math.min(l, u);
                                r = Math.min(F.MAX_AUTO_SCALE, c);
                                break;
                            default:
                                console.error('_setScale: "'.concat(t, '" is an unknown zoom value.'));
                                return
                        }
                        this._setScaleUpdatePages(r, t, n, true)
                    }
                }
            }, {
                key: "_resetCurrentPageView",
                value: function e() {
                    if (this.isInPresentationMode) {
                        this._setScale(this._currentScaleValue, true)
                    }
                    var t = this._pages[this._currentPageNumber - 1];
                    this._scrollIntoView({
                        pageDiv: t.div
                    })
                }
            }, {
                key: "pageLabelToPageNumber",
                value: function e(t) {
                    if (!this._pageLabels) {
                        return null
                    }
                    var n = this._pageLabels.indexOf(t);
                    if (n < 0) {
                        return null
                    }
                    return n + 1
                }
            }, {
                key: "scrollPageIntoView",
                value: function e(t) {
                    var n = t.pageNumber,
                        r = t.destArray,
                        i = r === void 0 ? null : r,
                        a = t.allowNegativeOffset,
                        o = a === void 0 ? false : a,
                        s = t.ignoreDestinationZoom,
                        u = s === void 0 ? false : s;
                    if (!this.pdfDocument) {
                        return
                    }
                    var l = Number.isInteger(n) && this._pages[n - 1];
                    if (!l) {
                        console.error('scrollPageIntoView: "'.concat(n, '" is not a valid pageNumber parameter.'));
                        return
                    }
                    if (this.isInPresentationMode || !i) {
                        this._setCurrentPageNumber(n, true);
                        return
                    }
                    var c = 0,
                        f = 0;
                    var d = 0,
                        h = 0,
                        p, v;
                    var g = l.rotation % 180 !== 0;
                    var m = (g ? l.height : l.width) / l.scale / E.PixelsPerInch.PDF_TO_CSS_UNITS;
                    var y = (g ? l.width : l.height) / l.scale / E.PixelsPerInch.PDF_TO_CSS_UNITS;
                    var b = 0;
                    switch (i[1].name) {
                        case "XYZ":
                            c = i[2];
                            f = i[3];
                            b = i[4];
                            c = c !== null ? c : 0;
                            f = f !== null ? f : y;
                            break;
                        case "Fit":
                        case "FitB":
                            b = "page-fit";
                            break;
                        case "FitH":
                        case "FitBH":
                            f = i[2];
                            b = "page-width";
                            if (f === null && this._location) {
                                c = this._location.left;
                                f = this._location.top
                            } else if (typeof f !== "number" || f < 0) {
                                f = y
                            }
                            break;
                        case "FitV":
                        case "FitBV":
                            c = i[2];
                            d = m;
                            h = y;
                            b = "page-height";
                            break;
                        case "FitR":
                            c = i[2];
                            f = i[3];
                            d = i[4] - c;
                            h = i[5] - f;
                            var w = this.removePageBorders ? 0 : F.SCROLLBAR_PADDING;
                            var _ = this.removePageBorders ? 0 : F.VERTICAL_PADDING;
                            p = (this.container.clientWidth - w) / d / E.PixelsPerInch.PDF_TO_CSS_UNITS;
                            v = (this.container.clientHeight - _) / h / E.PixelsPerInch.PDF_TO_CSS_UNITS;
                            b = Math.min(Math.abs(p), Math.abs(v));
                            break;
                        default:
                            console.error('scrollPageIntoView: "'.concat(i[1].name, '" is not a valid destination type.'));
                            return
                    }
                    if (!u) {
                        if (b && b !== this._currentScale) {
                            this.currentScaleValue = b
                        } else if (this._currentScale === F.UNKNOWN_SCALE) {
                            this.currentScaleValue = F.DEFAULT_SCALE_VALUE
                        }
                    }
                    if (b === "page-fit" && !i[4]) {
                        this._scrollIntoView({
                            pageDiv: l.div,
                            pageNumber: n
                        });
                        return
                    }
                    var P = [l.viewport.convertToViewportPoint(c, f), l.viewport.convertToViewportPoint(c + d, f + h)];
                    var S = Math.min(P[0][0], P[1][0]);
                    var k = Math.min(P[0][1], P[1][1]);
                    if (!o) {
                        S = Math.max(S, 0);
                        k = Math.max(k, 0)
                    }
                    this._scrollIntoView({
                        pageDiv: l.div,
                        pageSpot: {
                            left: S,
                            top: k
                        },
                        pageNumber: n
                    })
                }
            }, {
                key: "_updateLocation",
                value: function e(t) {
                    var n = this._currentScale;
                    var r = this._currentScaleValue;
                    var i = parseFloat(r) === n ? Math.round(n * 1e4) / 100 : r;
                    var a = t.id;
                    var o = "#page=" + a;
                    o += "&zoom=" + i;
                    var s = this._pages[a - 1];
                    var u = this.container;
                    var l = s.getPagePoint(u.scrollLeft - t.x, u.scrollTop - t.y);
                    var c = Math.round(l[0]);
                    var f = Math.round(l[1]);
                    o += "," + c + "," + f;
                    this._location = {
                        pageNumber: a,
                        scale: i,
                        top: f,
                        left: c,
                        rotation: this._pagesRotation,
                        pdfOpenParams: o
                    }
                }
            }, {
                key: "update",
                value: function e() {
                    var t = this._getVisiblePages();
                    var n = t.views,
                        r = n.length;
                    if (r === 0) {
                        return
                    }
                    var i = Math.max(B, 2 * r + 1);
                    O(this, X).resize(i, t.ids);
                    this.renderingQueue.renderHighestPriority(t);
                    if (!this.isInPresentationMode) {
                        var a = this._spreadMode === F.SpreadMode.NONE && (this._scrollMode === F.ScrollMode.PAGE || this._scrollMode === F.ScrollMode.VERTICAL);
                        var o = this._currentPageNumber;
                        var s = false;
                        var u = j(n),
                            l;
                        try {
                            for (u.s(); !(l = u.n()).done;) {
                                var c = l.value;
                                if (c.percent < 100) {
                                    break
                                }
                                if (c.id === o && a) {
                                    s = true;
                                    break
                                }
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        if (!s) {
                            o = n[0].id
                        }
                        this._setCurrentPageNumber(o)
                    }
                    this._updateLocation(t.first);
                    this.eventBus.dispatch("updateviewarea", {
                        source: this,
                        location: this._location
                    })
                }
            }, {
                key: "containsElement",
                value: function e(t) {
                    return this.container.contains(t)
                }
            }, {
                key: "focus",
                value: function e() {
                    this.container.focus()
                }
            }, {
                key: "_isContainerRtl",
                get: function e() {
                    return getComputedStyle(this.container).direction === "rtl"
                }
            }, {
                key: "isInPresentationMode",
                get: function e() {
                    return this.presentationModeState === F.PresentationModeState.FULLSCREEN
                }
            }, {
                key: "isChangingPresentationMode",
                get: function e() {
                    return this.presentationModeState === F.PresentationModeState.CHANGING
                }
            }, {
                key: "isHorizontalScrollbarEnabled",
                get: function e() {
                    return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth
                }
            }, {
                key: "isVerticalScrollbarEnabled",
                get: function e() {
                    return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight
                }
            }, {
                key: "_getCurrentVisiblePage",
                value: function e() {
                    if (!this.pagesCount) {
                        return {
                            views: []
                        }
                    }
                    var t = this._pages[this._currentPageNumber - 1];
                    var n = t.div;
                    var r = {
                        id: t.id,
                        x: n.offsetLeft + n.clientLeft,
                        y: n.offsetTop + n.clientTop,
                        view: t
                    };
                    var i = new Set([t.id]);
                    return {
                        first: r,
                        last: r,
                        views: [r],
                        ids: i
                    }
                }
            }, {
                key: "_getVisiblePages",
                value: function e() {
                    if (this.isInPresentationMode) {
                        return this._getCurrentVisiblePage()
                    }
                    var t = this._scrollMode === F.ScrollMode.PAGE ? O(this, Y).pages : this._pages,
                        n = this._scrollMode === F.ScrollMode.HORIZONTAL,
                        r = n && this._isContainerRtl;
                    return (0, F.getVisibleElements)({
                        scrollEl: this.container,
                        views: t,
                        sortByVisibility: true,
                        horizontal: n,
                        rtl: r
                    })
                }
            }, {
                key: "isPageVisible",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return false
                    }
                    if (!(Number.isInteger(t) && t > 0 && t <= this.pagesCount)) {
                        console.error('isPageVisible: "'.concat(t, '" is not a valid page.'));
                        return false
                    }
                    return this._getVisiblePages().ids.has(t)
                }
            }, {
                key: "isPageCached",
                value: function e(t) {
                    if (!this.pdfDocument) {
                        return false
                    }
                    if (!(Number.isInteger(t) && t > 0 && t <= this.pagesCount)) {
                        console.error('isPageCached: "'.concat(t, '" is not a valid page.'));
                        return false
                    }
                    var n = this._pages[t - 1];
                    return O(this, X).has(n)
                }
            }, {
                key: "cleanup",
                value: function e() {
                    for (var t = 0, n = this._pages.length; t < n; t++) {
                        if (this._pages[t] && this._pages[t].renderingState !== F.RenderingStates.FINISHED) {
                            this._pages[t].reset()
                        }
                    }
                }
            }, {
                key: "_cancelRendering",
                value: function e() {
                    for (var t = 0, n = this._pages.length; t < n; t++) {
                        if (this._pages[t]) {
                            this._pages[t].cancelRendering()
                        }
                    }
                }
            }, {
                key: "forceRendering",
                value: function e(t) {
                    var n = this;
                    var r = t || this._getVisiblePages();
                    var i = I(this, re, de).call(this, r);
                    var a = this._spreadMode !== F.SpreadMode.NONE && this._scrollMode !== F.ScrollMode.HORIZONTAL;
                    var o = this.renderingQueue.getHighestPriority(r, this._pages, i, a);
                    I(this, ie, he).call(this, r.ids);
                    if (o) {
                        I(this, ne, ce).call(this, o).then(function () {
                            n.renderingQueue.renderView(o)
                        });
                        return true
                    }
                    return false
                }
            }, {
                key: "createTextLayerBuilder",
                value: function e(t, n, r) {
                    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                    var a = arguments.length > 4 ? arguments[4] : undefined;
                    var o = arguments.length > 5 ? arguments[5] : undefined;
                    return new c.TextLayerBuilder({
                        textLayerDiv: t,
                        eventBus: a,
                        pageIndex: n,
                        viewport: r,
                        enhanceTextSelection: this.isInPresentationMode ? false : i,
                        highlighter: o
                    })
                }
            }, {
                key: "createTextHighlighter",
                value: function e(t, n) {
                    return new i.TextHighlighter({
                        eventBus: n,
                        pageIndex: t,
                        findController: this.isInPresentationMode ? null : this.findController
                    })
                }
            }, {
                key: "createAnnotationLayerBuilder",
                value: function e(t, n) {
                    var r, i, a, o;
                    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    var u = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
                    var l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                    var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : m.NullL10n;
                    var f = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
                    var d = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
                    var h = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
                    var p = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
                    var v = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : null;
                    return new g.AnnotationLayerBuilder({
                        pageDiv: t,
                        pdfPage: n,
                        annotationStorage: s || ((r = this.pdfDocument) === null || r === void 0 ? void 0 : r.annotationStorage),
                        imageResourcesPath: u,
                        renderForms: l,
                        linkService: this.linkService,
                        downloadManager: this.downloadManager,
                        l10n: c,
                        enableScripting: f !== null && f !== void 0 ? f : this.enableScripting,
                        hasJSActionsPromise: d || ((i = this.pdfDocument) === null || i === void 0 ? void 0 : i.hasJSActions()),
                        fieldObjectsPromise: p || ((a = this.pdfDocument) === null || a === void 0 ? void 0 : a.getFieldObjects()),
                        mouseState: h || ((o = this._scriptingManager) === null || o === void 0 ? void 0 : o.mouseState),
                        annotationCanvasMap: v
                    })
                }
            }, {
                key: "createXfaLayerBuilder",
                value: function e(t, n) {
                    var r;
                    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                    return new a.XfaLayerBuilder({
                        pageDiv: t,
                        pdfPage: n,
                        annotationStorage: i || ((r = this.pdfDocument) === null || r === void 0 ? void 0 : r.annotationStorage),
                        linkService: this.linkService
                    })
                }
            }, {
                key: "createStructTreeLayerBuilder",
                value: function e(t) {
                    return new r.StructTreeLayerBuilder({
                        pdfPage: t
                    })
                }
            }, {
                key: "hasEqualPageSizes",
                get: function e() {
                    var t = this._pages[0];
                    for (var n = 1, r = this._pages.length; n < r; ++n) {
                        var i = this._pages[n];
                        if (i.width !== t.width || i.height !== t.height) {
                            return false
                        }
                    }
                    return true
                }
            }, {
                key: "getPagesOverview",
                value: function e() {
                    var n = this;
                    return this._pages.map(function (e) {
                        var t = e.pdfPage.getViewport({
                            scale: 1
                        });
                        if (!n.enablePrintAutoRotate || (0, F.isPortraitOrientation)(t)) {
                            return {
                                width: t.width,
                                height: t.height,
                                rotation: t.rotation
                            }
                        }
                        return {
                            width: t.height,
                            height: t.width,
                            rotation: (t.rotation - 90) % 360
                        }
                    })
                }
            }, {
                key: "optionalContentConfigPromise",
                get: function e() {
                    if (!this.pdfDocument) {
                        return Promise.resolve(null)
                    }
                    if (!this._optionalContentConfigPromise) {
                        return this.pdfDocument.getOptionalContentConfig()
                    }
                    return this._optionalContentConfigPromise
                },
                set: function e(t) {
                    if (!(t instanceof Promise)) {
                        throw new Error("Invalid optionalContentConfigPromise: ".concat(t))
                    }
                    if (!this.pdfDocument) {
                        return
                    }
                    if (!this._optionalContentConfigPromise) {
                        return
                    }
                    this._optionalContentConfigPromise = t;
                    var n = {
                        optionalContentConfigPromise: t
                    };
                    var r = j(this._pages),
                        i;
                    try {
                        for (r.s(); !(i = r.n()).done;) {
                            var a = i.value;
                            a.update(n)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    this.update();
                    this.eventBus.dispatch("optionalcontentconfigchanged", {
                        source: this,
                        promise: t
                    })
                }
            }, {
                key: "scrollMode",
                get: function e() {
                    return this._scrollMode
                },
                set: function e(t) {
                    if (this._scrollMode === t) {
                        return
                    }
                    if (!(0, F.isValidScrollMode)(t)) {
                        throw new Error("Invalid scroll mode: ".concat(t))
                    }
                    if (this.pagesCount > R.FORCE_SCROLL_MODE_PAGE) {
                        return
                    }
                    this._previousScrollMode = this._scrollMode;
                    this._scrollMode = t;
                    this.eventBus.dispatch("scrollmodechanged", {
                        source: this,
                        mode: t
                    });
                    this._updateScrollMode(this._currentPageNumber)
                }
            }, {
                key: "_updateScrollMode",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    var n = this._scrollMode,
                        r = this.viewer;
                    r.classList.toggle("scrollHorizontal", n === F.ScrollMode.HORIZONTAL);
                    r.classList.toggle("scrollWrapped", n === F.ScrollMode.WRAPPED);
                    if (!this.pdfDocument || !t) {
                        return
                    }
                    if (n === F.ScrollMode.PAGE) {
                        I(this, ee, ue).call(this)
                    } else if (this._previousScrollMode === F.ScrollMode.PAGE) {
                        this._updateSpreadMode()
                    }
                    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
                        this._setScale(this._currentScaleValue, true)
                    }
                    this._setCurrentPageNumber(t, true);
                    this.update()
                }
            }, {
                key: "spreadMode",
                get: function e() {
                    return this._spreadMode
                },
                set: function e(t) {
                    if (this._spreadMode === t) {
                        return
                    }
                    if (!(0, F.isValidSpreadMode)(t)) {
                        throw new Error("Invalid spread mode: ".concat(t))
                    }
                    this._spreadMode = t;
                    this.eventBus.dispatch("spreadmodechanged", {
                        source: this,
                        mode: t
                    });
                    this._updateSpreadMode(this._currentPageNumber)
                }
            }, {
                key: "_updateSpreadMode",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                    if (!this.pdfDocument) {
                        return
                    }
                    var n = this.viewer,
                        r = this._pages;
                    if (this._scrollMode === F.ScrollMode.PAGE) {
                        I(this, ee, ue).call(this)
                    } else {
                        n.textContent = "";
                        if (this._spreadMode === F.SpreadMode.NONE) {
                            for (var i = 0, a = r.length; i < a; ++i) {
                                n.appendChild(r[i].div)
                            }
                        } else {
                            var o = this._spreadMode - 1;
                            var s = null;
                            for (var u = 0, l = r.length; u < l; ++u) {
                                if (s === null) {
                                    s = document.createElement("div");
                                    s.className = "spread";
                                    n.appendChild(s)
                                } else if (u % 2 === o) {
                                    s = s.cloneNode(false);
                                    n.appendChild(s)
                                }
                                s.appendChild(r[u].div)
                            }
                        }
                    }
                    if (!t) {
                        return
                    }
                    if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
                        this._setScale(this._currentScaleValue, true)
                    }
                    this._setCurrentPageNumber(t, true);
                    this.update()
                }
            }, {
                key: "_getPageAdvance",
                value: function e(t) {
                    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    switch (this._scrollMode) {
                        case F.ScrollMode.WRAPPED: {
                            var r = this._getVisiblePages(),
                                i = r.views,
                                a = new Map;
                            var o = j(i),
                                s;
                            try {
                                for (o.s(); !(s = o.n()).done;) {
                                    var u = s.value,
                                        l = u.id,
                                        c = u.y,
                                        f = u.percent,
                                        d = u.widthPercent;
                                    if (f === 0 || d < 100) {
                                        continue
                                    }
                                    var h = a.get(c);
                                    if (!h) {
                                        a.set(c, h || (h = []))
                                    }
                                    h.push(l)
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            var p = j(a.values()),
                                v;
                            try {
                                for (p.s(); !(v = p.n()).done;) {
                                    var g = v.value;
                                    var m = g.indexOf(t);
                                    if (m === -1) {
                                        continue
                                    }
                                    var y = g.length;
                                    if (y === 1) {
                                        break
                                    }
                                    if (n) {
                                        for (var b = m - 1, w = 0; b >= w; b--) {
                                            var _ = g[b],
                                                P = g[b + 1] - 1;
                                            if (_ < P) {
                                                return t - P
                                            }
                                        }
                                    } else {
                                        for (var S = m + 1, k = y; S < k; S++) {
                                            var E = g[S],
                                                x = g[S - 1] + 1;
                                            if (E > x) {
                                                return x - t
                                            }
                                        }
                                    }
                                    if (n) {
                                        var C = g[0];
                                        if (C < t) {
                                            return t - C + 1
                                        }
                                    } else {
                                        var L = g[y - 1];
                                        if (L > t) {
                                            return L - t + 1
                                        }
                                    }
                                    break
                                }
                            } catch (e) {
                                p.e(e)
                            } finally {
                                p.f()
                            }
                            break
                        }
                        case F.ScrollMode.HORIZONTAL: {
                            break
                        }
                        case F.ScrollMode.PAGE:
                        case F.ScrollMode.VERTICAL: {
                            if (this._spreadMode === F.SpreadMode.NONE) {
                                break
                            }
                            var T = this._spreadMode - 1;
                            if (n && t % 2 !== T) {
                                break
                            } else if (!n && t % 2 === T) {
                                break
                            }
                            var I = this._getVisiblePages(),
                                O = I.views,
                                M = n ? t - 1 : t + 1;
                            var A = j(O),
                                D;
                            try {
                                for (A.s(); !(D = A.n()).done;) {
                                    var N = D.value,
                                        B = N.id,
                                        V = N.percent,
                                        R = N.widthPercent;
                                    if (B !== M) {
                                        continue
                                    }
                                    if (V > 0 && R === 100) {
                                        return 2
                                    }
                                    break
                                }
                            } catch (e) {
                                A.e(e)
                            } finally {
                                A.f()
                            }
                            break
                        }
                    }
                    return 1
                }
            }, {
                key: "nextPage",
                value: function e() {
                    var t = this._currentPageNumber,
                        n = this.pagesCount;
                    if (t >= n) {
                        return false
                    }
                    var r = this._getPageAdvance(t, false) || 1;
                    this.currentPageNumber = Math.min(t + r, n);
                    return true
                }
            }, {
                key: "previousPage",
                value: function e() {
                    var t = this._currentPageNumber;
                    if (t <= 1) {
                        return false
                    }
                    var n = this._getPageAdvance(t, true) || 1;
                    this.currentPageNumber = Math.max(t - n, 1);
                    return true
                }
            }, {
                key: "increaseScale",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var n = this._currentScale;
                    do {
                        n = (n * F.DEFAULT_SCALE_DELTA).toFixed(2);
                        n = Math.ceil(n * 10) / 10;
                        n = Math.min(F.MAX_SCALE, n)
                    } while (--t > 0 && n < F.MAX_SCALE);
                    this.currentScaleValue = n
                }
            }, {
                key: "decreaseScale",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
                    var n = this._currentScale;
                    do {
                        n = (n / F.DEFAULT_SCALE_DELTA).toFixed(2);
                        n = Math.floor(n * 10) / 10;
                        n = Math.max(F.MIN_SCALE, n)
                    } while (--t > 0 && n > F.MIN_SCALE);
                    this.currentScaleValue = n
                }
            }]);
            return s
        }();
        t.BaseViewer = ae;

        function oe(e) {
            if (!e) {
                return
            }
            if (!e.includes(E.PermissionFlag.COPY)) {
                this.viewer.classList.add(V)
            }
            if (!e.includes(E.PermissionFlag.MODIFY_ANNOTATIONS) && !e.includes(E.PermissionFlag.FILL_INTERACTIVE_FORMS)) {
                if (O(this, K) === E.AnnotationMode.ENABLE_FORMS) {
                    A(this, q, O(this, K));
                    A(this, K, E.AnnotationMode.ENABLE)
                }
            }
        }

        function se() {
            if (!this.container.offsetParent || this._getVisiblePages().views.length === 0) {
                return Promise.resolve()
            }
            return this._onePageRenderedCapability.promise
        }

        function ue() {
            if (this._scrollMode !== F.ScrollMode.PAGE) {
                throw new Error("#ensurePageViewVisible: Invalid scrollMode value.")
            }
            var e = this._currentPageNumber,
                t = O(this, Y),
                n = this.viewer;
            n.textContent = "";
            t.pages.length = 0;
            if (this._spreadMode === F.SpreadMode.NONE) {
                var r = this._pages[e - 1];
                if (this.isInPresentationMode) {
                    var i = document.createElement("div");
                    i.className = "spread";
                    var a = document.createElement("div");
                    a.className = "dummyPage";
                    a.style.height = "".concat(this.container.clientHeight, "px");
                    i.appendChild(a);
                    i.appendChild(r.div);
                    n.appendChild(i)
                } else {
                    n.appendChild(r.div)
                }
                t.pages.push(r)
            } else {
                var o = new Set,
                    s = this._spreadMode - 1;
                if (e % 2 !== s) {
                    o.add(e - 1);
                    o.add(e)
                } else {
                    o.add(e - 2);
                    o.add(e - 1)
                }
                var u = null;
                var l = j(o),
                    c;
                try {
                    for (l.s(); !(c = l.n()).done;) {
                        var f = c.value;
                        var d = this._pages[f];
                        if (!d) {
                            continue
                        }
                        if (u === null) {
                            u = document.createElement("div");
                            u.className = "spread";
                            n.appendChild(u)
                        } else if (f % 2 === s) {
                            u = u.cloneNode(false);
                            n.appendChild(u)
                        }
                        u.appendChild(d.div);
                        t.pages.push(d)
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
            }
            t.scrollDown = e >= t.previousPageNumber;
            t.previousPageNumber = e
        }

        function le(e) {
            if (this.isInPresentationMode && this.container.clientHeight !== O(this, Q)) {
                return false
            }
            return e === this._currentScale || Math.abs(e - this._currentScale) < 1e-15
        }

        function ce(e) {
            return fe.apply(this, arguments)
        }

        function fe() {
            fe = w(y["default"].mark(function e(n) {
                var r;
                return y["default"].wrap(function e(t) {
                    while (1) {
                        switch (t.prev = t.next) {
                            case 0:
                                if (!n.pdfPage) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", n.pdfPage);
                            case 2:
                                t.prev = 2;
                                t.next = 5;
                                return this.pdfDocument.getPage(n.id);
                            case 5:
                                r = t.sent;
                                if (!n.pdfPage) {
                                    n.setPdfPage(r)
                                }
                                if (!this.linkService._cachedPageNumber(r.ref)) {
                                    this.linkService.cachePageRef(n.id, r.ref)
                                }
                                return t.abrupt("return", r);
                            case 11:
                                t.prev = 11;
                                t.t0 = t["catch"](2);
                                console.error("Unable to get page for page view", t.t0);
                                return t.abrupt("return", null);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }
                }, e, this, [[2, 11]])
            }));
            return fe.apply(this, arguments)
        }

        function de(e) {
            var t, n;
            if (((t = e.first) === null || t === void 0 ? void 0 : t.id) === 1) {
                return true
            } else if (((n = e.last) === null || n === void 0 ? void 0 : n.id) === this.pagesCount) {
                return false
            }
            switch (this._scrollMode) {
                case F.ScrollMode.PAGE:
                    return O(this, Y).scrollDown;
                case F.ScrollMode.HORIZONTAL:
                    return this.scroll.right
            }
            return this.scroll.down
        }

        function he(e) {
            var t = j(e),
                n;
            try {
                for (t.s(); !(n = t.n()).done;) {
                    var r = n.value;
                    var i = this._pages[r - 1];
                    i === null || i === void 0 ? void 0 : i.toggleLoadingIconSpinner(true)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            var a = j(O(this, X)),
                o;
            try {
                for (a.s(); !(o = a.n()).done;) {
                    var s = o.value;
                    if (e.has(s.id)) {
                        continue
                    }
                    s.toggleLoadingIconSpinner(false)
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.AnnotationLayerBuilder = void 0;
        var h = r(n(3));
        var p = n(7);
        var k = n(32);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function v(e, t) {
            return u(e) || s(e, t) || a(e, t) || i()
        }

        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function a(e, t) {
            if (!e) return;
            if (typeof e === "string") return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }

        function o(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function s(e, t) {
            var n = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (n == null) return;
            var r = [];
            var i = true;
            var a = false;
            var o, s;
            try {
                for (n = n.call(e); !(i = (o = n.next()).done); i = true) {
                    r.push(o.value);
                    if (t && r.length === t) break
                }
            } catch (e) {
                a = true;
                s = e
            } finally {
                try {
                    if (!i && n["return"] != null) n["return"]()
                } finally {
                    if (a) throw s
                }
            }
            return r
        }

        function u(e) {
            if (Array.isArray(e)) return e
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function c(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function E(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function d(e, t, n) {
            if (t) f(e.prototype, t);
            if (n) f(e, n);
            return e
        }
        var g = function () {
            function S(e) {
                var t = e.pageDiv,
                    n = e.pdfPage,
                    r = e.linkService,
                    i = e.downloadManager,
                    a = e.annotationStorage,
                    o = a === void 0 ? null : a,
                    s = e.imageResourcesPath,
                    u = s === void 0 ? "" : s,
                    l = e.renderForms,
                    c = l === void 0 ? true : l,
                    f = e.l10n,
                    d = f === void 0 ? k.NullL10n : f,
                    h = e.enableScripting,
                    p = h === void 0 ? false : h,
                    v = e.hasJSActionsPromise,
                    g = v === void 0 ? null : v,
                    m = e.fieldObjectsPromise,
                    y = m === void 0 ? null : m,
                    b = e.mouseState,
                    w = b === void 0 ? null : b,
                    _ = e.annotationCanvasMap,
                    P = _ === void 0 ? null : _;
                E(this, S);
                this.pageDiv = t;
                this.pdfPage = n;
                this.linkService = r;
                this.downloadManager = i;
                this.imageResourcesPath = u;
                this.renderForms = c;
                this.l10n = d;
                this.annotationStorage = o;
                this.enableScripting = p;
                this._hasJSActionsPromise = g;
                this._fieldObjectsPromise = y;
                this._mouseState = w;
                this._annotationCanvasMap = P;
                this.div = null;
                this._cancelled = false
            }
            d(S, [{
                key: "render",
                value: function () {
                    var t = c(h["default"].mark(function e(n) {
                        var r, i, a, o, s, u, l, c, f, d = arguments;
                        return h["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = d.length > 1 && d[1] !== undefined ? d[1] : "display";
                                        t.next = 3;
                                        return Promise.all([this.pdfPage.getAnnotations({
                                            intent: r
                                        }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
                                    case 3:
                                        i = t.sent;
                                        a = v(i, 3);
                                        o = a[0];
                                        s = a[1];
                                        u = s === void 0 ? false : s;
                                        l = a[2];
                                        c = l === void 0 ? null : l;
                                        if (!(this._cancelled || o.length === 0)) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 12:
                                        f = {
                                            viewport: n.clone({
                                                dontFlip: true
                                            }),
                                            div: this.div,
                                            annotations: o,
                                            page: this.pdfPage,
                                            imageResourcesPath: this.imageResourcesPath,
                                            renderForms: this.renderForms,
                                            linkService: this.linkService,
                                            downloadManager: this.downloadManager,
                                            annotationStorage: this.annotationStorage,
                                            enableScripting: this.enableScripting,
                                            hasJSActions: u,
                                            fieldObjects: c,
                                            mouseState: this._mouseState,
                                            annotationCanvasMap: this._annotationCanvasMap
                                        };
                                        if (this.div) {
                                            p.AnnotationLayer.update(f)
                                        } else {
                                            this.div = document.createElement("div");
                                            this.div.className = "annotationLayer";
                                            this.pageDiv.appendChild(this.div);
                                            f.div = this.div;
                                            p.AnnotationLayer.render(f);
                                            this.l10n.translate(this.div)
                                        }
                                        case 14:
                                        case "end":
                                            return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "cancel",
                value: function e() {
                    this._cancelled = true
                }
            }, {
                key: "hide",
                value: function e() {
                    if (!this.div) {
                        return
                    }
                    this.div.hidden = true
                }
            }]);
            return S
        }();
        t.AnnotationLayerBuilder = g
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.NullL10n = void 0;
        t.fixupLangCode = c;
        t.getL10nFallback = l;
        var o = r(n(3));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function s(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }
        var i = {
            of_pages: "of {{pagesCount}}",
            page_of_pages: "({{pageNumber}} of {{pagesCount}})",
            document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
            document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
            document_properties_date_string: "{{date}}, {{time}}",
            document_properties_page_size_unit_inches: "in",
            document_properties_page_size_unit_millimeters: "mm",
            document_properties_page_size_orientation_portrait: "portrait",
            document_properties_page_size_orientation_landscape: "landscape",
            document_properties_page_size_name_a3: "A3",
            document_properties_page_size_name_a4: "A4",
            document_properties_page_size_name_letter: "Letter",
            document_properties_page_size_name_legal: "Legal",
            document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
            document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
            document_properties_linearized_yes: "Yes",
            document_properties_linearized_no: "No",
            print_progress_percent: "{{progress}}%",
            "toggle_sidebar.title": "Toggle Sidebar",
            "toggle_sidebar_notification2.title": "Toggle Sidebar (document contains outline/attachments/layers)",
            additional_layers: "Additional Layers",
            page_landmark: "Page {{page}}",
            thumb_page_title: "Page {{page}}",
            thumb_page_canvas: "Thumbnail of Page {{page}}",
            find_reached_top: "Reached top of document, continued from bottom",
            find_reached_bottom: "Reached end of document, continued from top",
            "find_match_count[one]": "{{current}} of {{total}} match",
            "find_match_count[other]": "{{current}} of {{total}} matches",
            "find_match_count_limit[one]": "More than {{limit}} match",
            "find_match_count_limit[other]": "More than {{limit}} matches",
            find_not_found: "Phrase not found",
            error_version_info: "PDF.js v{{version}} (build: {{build}})",
            error_message: "Message: {{message}}",
            error_stack: "Stack: {{stack}}",
            error_file: "File: {{file}}",
            error_line: "Line: {{line}}",
            rendering_error: "An error occurred while rendering the page.",
            page_scale_width: "Page Width",
            page_scale_fit: "Page Fit",
            page_scale_auto: "Automatic Zoom",
            page_scale_actual: "Actual Size",
            page_scale_percent: "{{scale}}%",
            loading: "Loading…",
            loading_error: "An error occurred while loading the PDF.",
            invalid_file_error: "Invalid or corrupted PDF file.",
            missing_file_error: "Missing PDF file.",
            unexpected_response_error: "Unexpected server response.",
            printing_not_supported: "Warning: Printing is not fully supported by this browser.",
            printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
            web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts."
        };

        function l(e, t) {
            switch (e) {
                case "find_match_count":
                    e = "find_match_count[".concat(t.total === 1 ? "one" : "other", "]");
                    break;
                case "find_match_count_limit":
                    e = "find_match_count_limit[".concat(t.limit === 1 ? "one" : "other", "]");
                    break
            }
            return i[e] || ""
        }
        var a = {
            en: "en-US",
            es: "es-ES",
            fy: "fy-NL",
            ga: "ga-IE",
            gu: "gu-IN",
            hi: "hi-IN",
            hy: "hy-AM",
            nb: "nb-NO",
            ne: "ne-NP",
            nn: "nn-NO",
            pa: "pa-IN",
            pt: "pt-PT",
            sv: "sv-SE",
            zh: "zh-CN"
        };

        function c(e) {
            return a[e === null || e === void 0 ? void 0 : e.toLowerCase()] || e
        }

        function f(e, n) {
            if (!n) {
                return e
            }
            return e.replace(/\{\{\s*(\w+)\s*\}\}/g, function (e, t) {
                return t in n ? n[t] : "{{" + t + "}}"
            })
        }
        var d = {
            getLanguage: function e() {
                return s(o["default"].mark(function e() {
                    return o["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", "en-us");
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            getDirection: function e() {
                return s(o["default"].mark(function e() {
                    return o["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", "ltr");
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            get: function e(i) {
                var a = arguments;
                return s(o["default"].mark(function e() {
                    var n, r;
                    return o["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                    n = a.length > 1 && a[1] !== undefined ? a[1] : null;
                                    r = a.length > 2 && a[2] !== undefined ? a[2] : l(i, n);
                                    return t.abrupt("return", f(r, n));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            },
            translate: function e(t) {
                return s(o["default"].mark(function e() {
                    return o["default"].wrap(function e(t) {
                        while (1) {
                            switch (t.prev = t.next) {
                                case 0:
                                case "end":
                                    return t.stop()
                            }
                        }
                    }, e)
                }))()
            }
        };
        t.NullL10n = d
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFPageView = void 0;
        var p = r(n(3));
        var y = n(7);
        var b = n(5);
        var l = n(1);
        var c = n(32);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                h = function e(t) {
                    return typeof t
                }
            } else {
                h = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return h(e)
        }

        function f(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = u(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function u(e, t) {
            if (!e) return;
            if (typeof e === "string") return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
        }

        function i(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function d(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function v(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        d(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        d(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function g(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) {
            if (t) a(e.prototype, t);
            if (n) a(e, n);
            return e
        }

        function m(e, t, n) {
            s(e, t);
            t.set(e, n)
        }

        function s(e, t) {
            if (t.has(e)) {
                throw new TypeError("Cannot initialize the same private elements twice on an object")
            }
        }

        function w(e, t) {
            var n = S(e, t, "get");
            return _(e, n)
        }

        function _(e, t) {
            if (t.get) {
                return t.get.call(e)
            }
            return t.value
        }

        function P(e, t, n) {
            var r = S(e, t, "set");
            k(e, r, n);
            return n
        }

        function S(e, t, n) {
            if (!t.has(e)) {
                throw new TypeError("attempted to " + n + " private field on non-instance")
            }
            return t.get(e)
        }

        function k(e, t, n) {
            if (t.set) {
                t.set.call(e, n)
            } else {
                if (!t.writable) {
                    throw new TypeError("attempted to set read only private field")
                }
                t.value = n
            }
        }
        var E = l.compatibilityParams.maxCanvasPixels || 16777216;
        var x = new WeakMap;
        var C = function () {
            function u(e) {
                var t, n, r, i;
                g(this, u);
                m(this, x, {
                    writable: true,
                    value: y.AnnotationMode.ENABLE_FORMS
                });
                var a = e.container;
                var o = e.defaultViewport;
                this.id = e.id;
                this.renderingId = "page" + this.id;
                this.pdfPage = null;
                this.pageLabel = null;
                this.rotation = 0;
                this.scale = e.scale || b.DEFAULT_SCALE;
                this.viewport = o;
                this.pdfPageRotate = o.rotation;
                this._optionalContentConfigPromise = e.optionalContentConfigPromise || null;
                this.hasRestrictedScaling = false;
                this.textLayerMode = (t = e.textLayerMode) !== null && t !== void 0 ? t : b.TextLayerMode.ENABLE;
                P(this, x, (n = e.annotationMode) !== null && n !== void 0 ? n : y.AnnotationMode.ENABLE_FORMS);
                this.imageResourcesPath = e.imageResourcesPath || "";
                this.useOnlyCssZoom = e.useOnlyCssZoom || false;
                this.maxCanvasPixels = e.maxCanvasPixels || E;
                this.eventBus = e.eventBus;
                this.renderingQueue = e.renderingQueue;
                this.textLayerFactory = e.textLayerFactory;
                this.annotationLayerFactory = e.annotationLayerFactory;
                this.xfaLayerFactory = e.xfaLayerFactory;
                this.textHighlighter = (r = e.textHighlighterFactory) === null || r === void 0 ? void 0 : r.createTextHighlighter(this.id - 1, this.eventBus);
                this.structTreeLayerFactory = e.structTreeLayerFactory;
                this.renderer = e.renderer || b.RendererType.CANVAS;
                this.l10n = e.l10n || c.NullL10n;
                this.paintTask = null;
                this.paintedViewportMap = new WeakMap;
                this.renderingState = b.RenderingStates.INITIAL;
                this.resume = null;
                this._renderError = null;
                this._isStandalone = !((i = this.renderingQueue) !== null && i !== void 0 && i.hasViewer());
                this._annotationCanvasMap = null;
                this.annotationLayer = null;
                this.textLayer = null;
                this.zoomLayer = null;
                this.xfaLayer = null;
                this.structTreeLayer = null;
                var s = document.createElement("div");
                s.className = "page";
                s.style.width = Math.floor(this.viewport.width) + "px";
                s.style.height = Math.floor(this.viewport.height) + "px";
                s.setAttribute("data-page-number", this.id);
                s.setAttribute("role", "region");
                this.l10n.get("page_landmark", {
                    page: this.id
                }).then(function (e) {
                    s.setAttribute("aria-label", e)
                });
                this.div = s;
                a === null || a === void 0 ? void 0 : a.appendChild(s)
            }
            o(u, [{
                key: "setPdfPage",
                value: function e(t) {
                    this.pdfPage = t;
                    this.pdfPageRotate = t.rotate;
                    var n = (this.rotation + this.pdfPageRotate) % 360;
                    this.viewport = t.getViewport({
                        scale: this.scale * y.PixelsPerInch.PDF_TO_CSS_UNITS,
                        rotation: n
                    });
                    this.reset()
                }
            }, {
                key: "destroy",
                value: function e() {
                    this.reset();
                    if (this.pdfPage) {
                        this.pdfPage.cleanup()
                    }
                }
            }, {
                key: "_renderAnnotationLayer",
                value: function () {
                    var e = v(p["default"].mark(function e() {
                        var n;
                        return p["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = null;
                                        t.prev = 1;
                                        t.next = 4;
                                        return this.annotationLayer.render(this.viewport, "display");
                                    case 4:
                                        t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6;
                                        t.t0 = t["catch"](1);
                                        n = t.t0;
                                    case 9:
                                        t.prev = 9;
                                        this.eventBus.dispatch("annotationlayerrendered", {
                                            source: this,
                                            pageNumber: this.id,
                                            error: n
                                        });
                                        return t.finish(9);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this, [[1, 6, 9, 12]])
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_renderXfaLayer",
                value: function () {
                    var e = v(p["default"].mark(function e() {
                        var n, r;
                        return p["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = null;
                                        t.prev = 1;
                                        t.next = 4;
                                        return this.xfaLayer.render(this.viewport, "display");
                                    case 4:
                                        r = t.sent;
                                        if (this.textHighlighter) {
                                            this._buildXfaTextContentItems(r.textDivs)
                                        }
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8;
                                        t.t0 = t["catch"](1);
                                        n = t.t0;
                                    case 11:
                                        t.prev = 11;
                                        this.eventBus.dispatch("xfalayerrendered", {
                                            source: this,
                                            pageNumber: this.id,
                                            error: n
                                        });
                                        return t.finish(11);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this, [[1, 8, 11, 14]])
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_buildXfaTextContentItems",
                value: function () {
                    var t = v(p["default"].mark(function e(n) {
                        var r, i, a, o, s;
                        return p["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this.pdfPage.getTextContent();
                                    case 2:
                                        r = t.sent;
                                        i = [];
                                        a = f(r.items);
                                        try {
                                            for (a.s(); !(o = a.n()).done;) {
                                                s = o.value;
                                                i.push(s.str)
                                            }
                                        } catch (e) {
                                            a.e(e)
                                        } finally {
                                            a.f()
                                        }
                                        this.textHighlighter.setTextMapping(n, i);
                                        this.textHighlighter.enable();
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_resetZoomLayer",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (!this.zoomLayer) {
                        return
                    }
                    var n = this.zoomLayer.firstChild;
                    this.paintedViewportMap["delete"](n);
                    n.width = 0;
                    n.height = 0;
                    if (t) {
                        this.zoomLayer.remove()
                    }
                    this.zoomLayer = null
                }
            }, {
                key: "reset",
                value: function e() {
                    var t, n, r = this;
                    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        a = i.keepZoomLayer,
                        o = a === void 0 ? false : a,
                        s = i.keepAnnotationLayer,
                        u = s === void 0 ? false : s,
                        l = i.keepXfaLayer,
                        c = l === void 0 ? false : l;
                    this.cancelRendering({
                        keepAnnotationLayer: u,
                        keepXfaLayer: c
                    });
                    this.renderingState = b.RenderingStates.INITIAL;
                    var f = this.div;
                    f.style.width = Math.floor(this.viewport.width) + "px";
                    f.style.height = Math.floor(this.viewport.height) + "px";
                    var d = f.childNodes,
                        h = o && this.zoomLayer || null,
                        p = u && ((t = this.annotationLayer) === null || t === void 0 ? void 0 : t.div) || null,
                        v = c && ((n = this.xfaLayer) === null || n === void 0 ? void 0 : n.div) || null;
                    for (var g = d.length - 1; g >= 0; g--) {
                        var m = d[g];
                        switch (m) {
                            case h:
                            case p:
                            case v:
                                continue
                        }
                        m.remove()
                    }
                    f.removeAttribute("data-loaded");
                    if (p) {
                        this.annotationLayer.hide()
                    }
                    if (v) {
                        this.xfaLayer.hide()
                    }
                    if (!h) {
                        if (this.canvas) {
                            this.paintedViewportMap["delete"](this.canvas);
                            this.canvas.width = 0;
                            this.canvas.height = 0;
                            delete this.canvas
                        }
                        this._resetZoomLayer()
                    }
                    if (this.svg) {
                        this.paintedViewportMap["delete"](this.svg);
                        delete this.svg
                    }
                    this.loadingIconDiv = document.createElement("div");
                    this.loadingIconDiv.className = "loadingIcon notVisible";
                    if (this._isStandalone) {
                        this.toggleLoadingIconSpinner(true)
                    }
                    this.loadingIconDiv.setAttribute("role", "img");
                    this.l10n.get("loading").then(function (e) {
                        var t;
                        (t = r.loadingIconDiv) === null || t === void 0 ? void 0 : t.setAttribute("aria-label", e)
                    });
                    f.appendChild(this.loadingIconDiv)
                }
            }, {
                key: "update",
                value: function e(t) {
                    var n = t.scale,
                        r = n === void 0 ? 0 : n,
                        i = t.rotation,
                        a = i === void 0 ? null : i,
                        o = t.optionalContentConfigPromise,
                        s = o === void 0 ? null : o;
                    if (h(arguments[0]) !== "object") {
                        console.error("PDFPageView.update called with separate parameters, please use an object instead.");
                        this.update({
                            scale: arguments[0],
                            rotation: arguments[1],
                            optionalContentConfigPromise: arguments[2]
                        });
                        return
                    }
                    this.scale = r || this.scale;
                    if (typeof a === "number") {
                        this.rotation = a
                    }
                    if (s instanceof Promise) {
                        this._optionalContentConfigPromise = s
                    }
                    var u = (this.rotation + this.pdfPageRotate) % 360;
                    var l = this.scale * y.PixelsPerInch.PDF_TO_CSS_UNITS;
                    this.viewport = this.viewport.clone({
                        scale: l,
                        rotation: u
                    });
                    if (this._isStandalone) {
                        var c = document.documentElement.style;
                        c.setProperty("--zoom-factor", this.scale);
                        c.setProperty("--viewport-scale-factor", l)
                    }
                    if (this.svg) {
                        this.cssTransform({
                            target: this.svg,
                            redrawAnnotationLayer: true,
                            redrawXfaLayer: true
                        });
                        this.eventBus.dispatch("pagerendered", {
                            source: this,
                            pageNumber: this.id,
                            cssTransform: true,
                            timestamp: performance.now(),
                            error: this._renderError
                        });
                        return
                    }
                    var f = false;
                    if (this.canvas && this.maxCanvasPixels > 0) {
                        var d = this.outputScale;
                        if ((Math.floor(this.viewport.width) * d.sx | 0) * (Math.floor(this.viewport.height) * d.sy | 0) > this.maxCanvasPixels) {
                            f = true
                        }
                    }
                    if (this.canvas) {
                        if (this.useOnlyCssZoom || this.hasRestrictedScaling && f) {
                            this.cssTransform({
                                target: this.canvas,
                                redrawAnnotationLayer: true,
                                redrawXfaLayer: true
                            });
                            this.eventBus.dispatch("pagerendered", {
                                source: this,
                                pageNumber: this.id,
                                cssTransform: true,
                                timestamp: performance.now(),
                                error: this._renderError
                            });
                            return
                        }
                        if (!this.zoomLayer && !this.canvas.hidden) {
                            this.zoomLayer = this.canvas.parentNode;
                            this.zoomLayer.style.position = "absolute"
                        }
                    }
                    if (this.zoomLayer) {
                        this.cssTransform({
                            target: this.zoomLayer.firstChild
                        })
                    }
                    this.reset({
                        keepZoomLayer: true,
                        keepAnnotationLayer: true,
                        keepXfaLayer: true
                    })
                }
            }, {
                key: "cancelRendering",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        n = t.keepAnnotationLayer,
                        r = n === void 0 ? false : n,
                        i = t.keepXfaLayer,
                        a = i === void 0 ? false : i;
                    if (this.paintTask) {
                        this.paintTask.cancel();
                        this.paintTask = null
                    }
                    this.resume = null;
                    if (this.textLayer) {
                        this.textLayer.cancel();
                        this.textLayer = null
                    }
                    if (this.annotationLayer && (!r || !this.annotationLayer.div)) {
                        this.annotationLayer.cancel();
                        this.annotationLayer = null;
                        this._annotationCanvasMap = null
                    }
                    if (this.xfaLayer && (!a || !this.xfaLayer.div)) {
                        var o;
                        this.xfaLayer.cancel();
                        this.xfaLayer = null;
                        (o = this.textHighlighter) === null || o === void 0 ? void 0 : o.disable()
                    }
                    if (this._onTextLayerRendered) {
                        this.eventBus._off("textlayerrendered", this._onTextLayerRendered);
                        this._onTextLayerRendered = null
                    }
                }
            }, {
                key: "cssTransform",
                value: function e(t) {
                    var n = t.target,
                        r = t.redrawAnnotationLayer,
                        i = r === void 0 ? false : r,
                        a = t.redrawXfaLayer,
                        o = a === void 0 ? false : a;
                    var s = this.viewport.width;
                    var u = this.viewport.height;
                    var l = this.div;
                    n.style.width = n.parentNode.style.width = l.style.width = Math.floor(s) + "px";
                    n.style.height = n.parentNode.style.height = l.style.height = Math.floor(u) + "px";
                    var c = this.viewport.rotation - this.paintedViewportMap.get(n).rotation;
                    var f = Math.abs(c);
                    var d = 1,
                        h = 1;
                    if (f === 90 || f === 270) {
                        d = u / s;
                        h = s / u
                    }
                    n.style.transform = "rotate(".concat(c, "deg) scale(").concat(d, ", ").concat(h, ")");
                    if (this.textLayer) {
                        var p = this.textLayer.viewport;
                        var v = this.viewport.rotation - p.rotation;
                        var g = Math.abs(v);
                        var m = s / p.width;
                        if (g === 90 || g === 270) {
                            m = s / p.height
                        }
                        var y = this.textLayer.textLayerDiv;
                        var b, w;
                        switch (g) {
                            case 0:
                                b = w = 0;
                                break;
                            case 90:
                                b = 0;
                                w = "-" + y.style.height;
                                break;
                            case 180:
                                b = "-" + y.style.width;
                                w = "-" + y.style.height;
                                break;
                            case 270:
                                b = "-" + y.style.width;
                                w = 0;
                                break;
                            default:
                                console.error("Bad rotation value.");
                                break
                        }
                        y.style.transform = "rotate(".concat(g, "deg) ") + "scale(".concat(m, ") ") + "translate(".concat(b, ", ").concat(w, ")");
                        y.style.transformOrigin = "0% 0%"
                    }
                    if (i && this.annotationLayer) {
                        this._renderAnnotationLayer()
                    }
                    if (o && this.xfaLayer) {
                        this._renderXfaLayer()
                    }
                }
            }, {
                key: "width",
                get: function e() {
                    return this.viewport.width
                }
            }, {
                key: "height",
                get: function e() {
                    return this.viewport.height
                }
            }, {
                key: "getPagePoint",
                value: function e(t, n) {
                    return this.viewport.convertToPdfPoint(t, n)
                }
            }, {
                key: "toggleLoadingIconSpinner",
                value: function e() {
                    var t;
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    (t = this.loadingIconDiv) === null || t === void 0 ? void 0 : t.classList.toggle("notVisible", !n)
                }
            }, {
                key: "draw",
                value: function e() {
                    var t, n, i = this;
                    if (this.renderingState !== b.RenderingStates.INITIAL) {
                        console.error("Must be in new state before drawing");
                        this.reset()
                    }
                    var r = this.div,
                        a = this.pdfPage;
                    if (!a) {
                        this.renderingState = b.RenderingStates.FINISHED;
                        if (this.loadingIconDiv) {
                            this.loadingIconDiv.remove();
                            delete this.loadingIconDiv
                        }
                        return Promise.reject(new Error("pdfPage is not loaded"))
                    }
                    this.renderingState = b.RenderingStates.RUNNING;
                    var o = document.createElement("div");
                    o.style.width = r.style.width;
                    o.style.height = r.style.height;
                    o.classList.add("canvasWrapper");
                    if ((t = this.annotationLayer) !== null && t !== void 0 && t.div) {
                        r.insertBefore(o, this.annotationLayer.div)
                    } else {
                        r.appendChild(o)
                    }
                    var s = null;
                    if (this.textLayerMode !== b.TextLayerMode.DISABLE && this.textLayerFactory) {
                        var u;
                        var l = document.createElement("div");
                        l.className = "textLayer";
                        l.style.width = o.style.width;
                        l.style.height = o.style.height;
                        if ((u = this.annotationLayer) !== null && u !== void 0 && u.div) {
                            r.insertBefore(l, this.annotationLayer.div)
                        } else {
                            r.appendChild(l)
                        }
                        s = this.textLayerFactory.createTextLayerBuilder(l, this.id - 1, this.viewport, this.textLayerMode === b.TextLayerMode.ENABLE_ENHANCE, this.eventBus, this.textHighlighter)
                    }
                    this.textLayer = s;
                    if (w(this, x) !== y.AnnotationMode.DISABLE && this.annotationLayerFactory) {
                        this._annotationCanvasMap || (this._annotationCanvasMap = new Map);
                        this.annotationLayer || (this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(r, a, null, this.imageResourcesPath, w(this, x) === y.AnnotationMode.ENABLE_FORMS, this.l10n, null, null, null, null, this._annotationCanvasMap))
                    }
                    if ((n = this.xfaLayer) !== null && n !== void 0 && n.div) {
                        r.appendChild(this.xfaLayer.div)
                    }
                    var c = null;
                    if (this.renderingQueue) {
                        c = function e(t) {
                            if (!i.renderingQueue.isHighestPriority(i)) {
                                i.renderingState = b.RenderingStates.PAUSED;
                                i.resume = function () {
                                    i.renderingState = b.RenderingStates.RUNNING;
                                    t()
                                };
                                return
                            }
                            t()
                        }
                    }
                    var f = function () {
                        var t = v(p["default"].mark(function e() {
                            var n, r = arguments;
                            return p["default"].wrap(function e(t) {
                                while (1) {
                                    switch (t.prev = t.next) {
                                        case 0:
                                            n = r.length > 0 && r[0] !== undefined ? r[0] : null;
                                            if (d === i.paintTask) {
                                                i.paintTask = null
                                            }
                                            if (!(n instanceof y.RenderingCancelledException)) {
                                                t.next = 5;
                                                break
                                            }
                                            i._renderError = null;
                                            return t.abrupt("return");
                                        case 5:
                                            i._renderError = n;
                                            i.renderingState = b.RenderingStates.FINISHED;
                                            if (i.loadingIconDiv) {
                                                i.loadingIconDiv.remove();
                                                delete i.loadingIconDiv
                                            }
                                            i._resetZoomLayer(true);
                                            i.eventBus.dispatch("pagerendered", {
                                                source: i,
                                                pageNumber: i.id,
                                                cssTransform: false,
                                                timestamp: performance.now(),
                                                error: i._renderError
                                            });
                                            if (!n) {
                                                t.next = 12;
                                                break
                                            }
                                            throw n;
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }
                            }, e)
                        }));
                        return function e() {
                            return t.apply(this, arguments)
                        }
                    }();
                    var d = this.renderer === b.RendererType.SVG ? this.paintOnSvg(o) : this.paintOnCanvas(o);
                    d.onRenderContinue = c;
                    this.paintTask = d;
                    var h = d.promise.then(function () {
                        return f(null).then(function () {
                            if (s) {
                                var e = a.streamTextContent({
                                    normalizeWhitespace: true,
                                    includeMarkedContent: true
                                });
                                s.setTextContentStream(e);
                                s.render()
                            }
                            if (i.annotationLayer) {
                                i._renderAnnotationLayer()
                            }
                        })
                    }, function (e) {
                        return f(e)
                    });
                    if (this.xfaLayerFactory) {
                        if (!this.xfaLayer) {
                            this.xfaLayer = this.xfaLayerFactory.createXfaLayerBuilder(r, a, null)
                        }
                        this._renderXfaLayer()
                    }
                    if (this.structTreeLayerFactory && this.textLayer && this.canvas) {
                        this._onTextLayerRendered = function (e) {
                            if (e.pageNumber !== i.id) {
                                return
                            }
                            i.eventBus._off("textlayerrendered", i._onTextLayerRendered);
                            i._onTextLayerRendered = null;
                            if (!i.canvas) {
                                return
                            }
                            i.pdfPage.getStructTree().then(function (e) {
                                if (!e) {
                                    return
                                }
                                if (!i.canvas) {
                                    return
                                }
                                var t = i.structTreeLayer.render(e);
                                t.classList.add("structTree");
                                i.canvas.appendChild(t)
                            })
                        };
                        this.eventBus._on("textlayerrendered", this._onTextLayerRendered);
                        this.structTreeLayer = this.structTreeLayerFactory.createStructTreeLayerBuilder(a)
                    }
                    r.setAttribute("data-loaded", true);
                    this.eventBus.dispatch("pagerender", {
                        source: this,
                        pageNumber: this.id
                    });
                    return h
                }
            }, {
                key: "paintOnCanvas",
                value: function e(t) {
                    var n = (0, y.createPromiseCapability)();
                    var r = {
                        promise: n.promise,
                        onRenderContinue: function e(t) {
                            t()
                        },
                        cancel: function e() {
                            m.cancel()
                        }
                    };
                    var i = this.viewport;
                    var a = document.createElement("canvas");
                    a.hidden = true;
                    var o = true;
                    var s = function e() {
                        if (o) {
                            a.hidden = false;
                            o = false
                        }
                    };
                    t.appendChild(a);
                    this.canvas = a;
                    a.mozOpaque = true;
                    var u = a.getContext("2d", {
                        alpha: false
                    });
                    var l = (0, b.getOutputScale)(u);
                    this.outputScale = l;
                    if (this.useOnlyCssZoom) {
                        var c = i.clone({
                            scale: y.PixelsPerInch.PDF_TO_CSS_UNITS
                        });
                        l.sx *= c.width / i.width;
                        l.sy *= c.height / i.height;
                        l.scaled = true
                    }
                    if (this.maxCanvasPixels > 0) {
                        var f = i.width * i.height;
                        var d = Math.sqrt(this.maxCanvasPixels / f);
                        if (l.sx > d || l.sy > d) {
                            l.sx = d;
                            l.sy = d;
                            l.scaled = true;
                            this.hasRestrictedScaling = true
                        } else {
                            this.hasRestrictedScaling = false
                        }
                    }
                    var h = (0, b.approximateFraction)(l.sx);
                    var p = (0, b.approximateFraction)(l.sy);
                    a.width = (0, b.roundToDivide)(i.width * l.sx, h[0]);
                    a.height = (0, b.roundToDivide)(i.height * l.sy, p[0]);
                    a.style.width = (0, b.roundToDivide)(i.width, h[1]) + "px";
                    a.style.height = (0, b.roundToDivide)(i.height, p[1]) + "px";
                    this.paintedViewportMap.set(a, i);
                    var v = !l.scaled ? null : [l.sx, 0, 0, l.sy, 0, 0];
                    var g = {
                        canvasContext: u,
                        transform: v,
                        viewport: this.viewport,
                        annotationMode: w(this, x),
                        optionalContentConfigPromise: this._optionalContentConfigPromise,
                        annotationCanvasMap: this._annotationCanvasMap
                    };
                    var m = this.pdfPage.render(g);
                    m.onContinue = function (e) {
                        s();
                        if (r.onRenderContinue) {
                            r.onRenderContinue(e)
                        } else {
                            e()
                        }
                    };
                    m.promise.then(function () {
                        s();
                        n.resolve()
                    }, function (e) {
                        s();
                        n.reject(e)
                    });
                    return r
                }
            }, {
                key: "paintOnSvg",
                value: function e(n) {
                    var r = this;
                    var t = false;
                    var i = function e() {
                        if (t) {
                            throw new y.RenderingCancelledException("Rendering cancelled, page ".concat(r.id), "svg")
                        }
                    };
                    var a = this.pdfPage;
                    var o = this.viewport.clone({
                        scale: y.PixelsPerInch.PDF_TO_CSS_UNITS
                    });
                    var s = a.getOperatorList({
                        annotationMode: w(this, x)
                    }).then(function (e) {
                        i();
                        var t = new y.SVGGraphics(a.commonObjs, a.objs, l.compatibilityParams.disableCreateObjectURL);
                        return t.getSVG(e, o).then(function (e) {
                            i();
                            r.svg = e;
                            r.paintedViewportMap.set(e, o);
                            e.style.width = n.style.width;
                            e.style.height = n.style.height;
                            r.renderingState = b.RenderingStates.FINISHED;
                            n.appendChild(e)
                        })
                    });
                    return {
                        promise: s,
                        onRenderContinue: function e(t) {
                            t()
                        },
                        cancel: function e() {
                            t = true
                        }
                    }
                }
            }, {
                key: "setPageLabel",
                value: function e(t) {
                    this.pageLabel = typeof t === "string" ? t : null;
                    if (this.pageLabel !== null) {
                        this.div.setAttribute("data-page-label", this.pageLabel)
                    } else {
                        this.div.removeAttribute("data-page-label")
                    }
                }
            }]);
            return u
        }();
        t.PDFPageView = C
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.StructTreeLayerBuilder = void 0;

        function u(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }

        function r(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function i(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t, n) {
            if (t) a(e.prototype, t);
            if (n) a(e, n);
            return e
        }
        var c = {
            Document: null,
            DocumentFragment: null,
            Part: "group",
            Sect: "group",
            Div: "group",
            Aside: "note",
            NonStruct: "none",
            P: null,
            H: "heading",
            Title: null,
            FENote: "note",
            Sub: "group",
            Lbl: null,
            Span: null,
            Em: null,
            Strong: null,
            Link: "link",
            Annot: "note",
            Form: "form",
            Ruby: null,
            RB: null,
            RT: null,
            RP: null,
            Warichu: null,
            WT: null,
            WP: null,
            L: "list",
            LI: "listitem",
            LBody: null,
            Table: "table",
            TR: "row",
            TH: "columnheader",
            TD: "cell",
            THead: "columnheader",
            TBody: null,
            TFoot: null,
            Caption: null,
            Figure: "figure",
            Formula: null,
            Artifact: null
        };
        var f = /^H(\d+)$/;
        var n = function () {
            function n(e) {
                var t = e.pdfPage;
                i(this, n);
                this.pdfPage = t
            }
            o(n, [{
                key: "render",
                value: function e(t) {
                    return this._walk(t)
                }
            }, {
                key: "_setAttributes",
                value: function e(t, n) {
                    if (t.alt !== undefined) {
                        n.setAttribute("aria-label", t.alt)
                    }
                    if (t.id !== undefined) {
                        n.setAttribute("aria-owns", t.id)
                    }
                    if (t.lang !== undefined) {
                        n.setAttribute("lang", t.lang)
                    }
                }
            }, {
                key: "_walk",
                value: function e(t) {
                    if (!t) {
                        return null
                    }
                    var n = document.createElement("span");
                    if ("role" in t) {
                        var r = t.role;
                        var i = r.match(f);
                        if (i) {
                            n.setAttribute("role", "heading");
                            n.setAttribute("aria-level", i[1])
                        } else if (c[r]) {
                            n.setAttribute("role", c[r])
                        }
                    }
                    this._setAttributes(t, n);
                    if (t.children) {
                        if (t.children.length === 1 && "id" in t.children[0]) {
                            this._setAttributes(t.children[0], n)
                        } else {
                            var a = u(t.children),
                                o;
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var s = o.value;
                                    n.appendChild(this._walk(s))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }
                    }
                    return n
                }
            }]);
            return n
        }();
        t.StructTreeLayerBuilder = n
    }, (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.TextHighlighter = void 0;

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function n(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var i = function () {
            function i(e) {
                var t = e.findController,
                    n = e.eventBus,
                    r = e.pageIndex;
                a(this, i);
                this.findController = t;
                this.matches = [];
                this.eventBus = n;
                this.pageIdx = r;
                this._onUpdateTextLayerMatches = null;
                this.textDivs = null;
                this.textContentItemsStr = null;
                this.enabled = false
            }
            n(i, [{
                key: "setTextMapping",
                value: function e(t, n) {
                    this.textDivs = t;
                    this.textContentItemsStr = n
                }
            }, {
                key: "enable",
                value: function e() {
                    var t = this;
                    if (!this.textDivs || !this.textContentItemsStr) {
                        throw new Error("Text divs and strings have not been set.")
                    }
                    if (this.enabled) {
                        throw new Error("TextHighlighter is already enabled.")
                    }
                    this.enabled = true;
                    if (!this._onUpdateTextLayerMatches) {
                        this._onUpdateTextLayerMatches = function (e) {
                            if (e.pageIndex === t.pageIdx || e.pageIndex === -1) {
                                t._updateMatches()
                            }
                        };
                        this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches)
                    }
                    this._updateMatches()
                }
            }, {
                key: "disable",
                value: function e() {
                    if (!this.enabled) {
                        return
                    }
                    this.enabled = false;
                    if (this._onUpdateTextLayerMatches) {
                        this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches);
                        this._onUpdateTextLayerMatches = null
                    }
                }
            }, {
                key: "_convertMatches",
                value: function e(t, n) {
                    if (!t) {
                        return []
                    }
                    var r = this.textContentItemsStr;
                    var i = 0,
                        a = 0;
                    var o = r.length - 1;
                    var s = [];
                    for (var u = 0, l = t.length; u < l; u++) {
                        var c = t[u];
                        while (i !== o && c >= a + r[i].length) {
                            a += r[i].length;
                            i++
                        }
                        if (i === r.length) {
                            console.error("Could not find a matching mapping")
                        }
                        var f = {
                            begin: {
                                divIdx: i,
                                offset: c - a
                            }
                        };
                        c += n[u];
                        while (i !== o && c > a + r[i].length) {
                            a += r[i].length;
                            i++
                        }
                        f.end = {
                            divIdx: i,
                            offset: c - a
                        };
                        s.push(f)
                    }
                    return s
                }
            }, {
                key: "_renderMatches",
                value: function e(t) {
                    if (t.length === 0) {
                        return
                    }
                    var n = this.findController,
                        r = this.pageIdx;
                    var l = this.textContentItemsStr,
                        c = this.textDivs;
                    var i = r === n.selected.pageIdx;
                    var a = n.selected.matchIdx;
                    var o = n.state.highlightAll;
                    var s = null;
                    var u = {
                        divIdx: -1,
                        offset: undefined
                    };

                    function f(e, t) {
                        var n = e.divIdx;
                        c[n].textContent = "";
                        return d(n, 0, e.offset, t)
                    }

                    function d(e, t, n, r) {
                        var i = c[e];
                        if (i.nodeType === Node.TEXT_NODE) {
                            var a = document.createElement("span");
                            i.parentNode.insertBefore(a, i);
                            a.appendChild(i);
                            c[e] = a;
                            i = a
                        }
                        var o = l[e].substring(t, n);
                        var s = document.createTextNode(o);
                        if (r) {
                            var u = document.createElement("span");
                            u.className = "".concat(r, " appended");
                            u.appendChild(s);
                            i.appendChild(u);
                            return r.includes("selected") ? u.offsetLeft : 0
                        }
                        i.appendChild(s);
                        return 0
                    }
                    var h = a,
                        p = h + 1;
                    if (o) {
                        h = 0;
                        p = t.length
                    } else if (!i) {
                        return
                    }
                    for (var v = h; v < p; v++) {
                        var g = t[v];
                        var m = g.begin;
                        var y = g.end;
                        var b = i && v === a;
                        var w = b ? " selected" : "";
                        var _ = 0;
                        if (!s || m.divIdx !== s.divIdx) {
                            if (s !== null) {
                                d(s.divIdx, s.offset, u.offset)
                            }
                            f(m)
                        } else {
                            d(s.divIdx, s.offset, m.offset)
                        }
                        if (m.divIdx === y.divIdx) {
                            _ = d(m.divIdx, m.offset, y.offset, "highlight" + w)
                        } else {
                            _ = d(m.divIdx, m.offset, u.offset, "highlight begin" + w);
                            for (var P = m.divIdx + 1, S = y.divIdx; P < S; P++) {
                                c[P].className = "highlight middle" + w
                            }
                            f(y, "highlight end" + w)
                        }
                        s = y;
                        if (b) {
                            n.scrollMatchIntoView({
                                element: c[m.divIdx],
                                selectedLeft: _,
                                pageIndex: r,
                                matchIndex: a
                            })
                        }
                    }
                    if (s) {
                        d(s.divIdx, s.offset, u.offset)
                    }
                }
            }, {
                key: "_updateMatches",
                value: function e() {
                    if (!this.enabled) {
                        return
                    }
                    var t = this.findController,
                        n = this.matches,
                        r = this.pageIdx;
                    var i = this.textContentItemsStr,
                        a = this.textDivs;
                    var o = -1;
                    for (var s = 0, u = n.length; s < u; s++) {
                        var l = n[s];
                        var c = Math.max(o, l.begin.divIdx);
                        for (var f = c, d = l.end.divIdx; f <= d; f++) {
                            var h = a[f];
                            h.textContent = i[f];
                            h.className = ""
                        }
                        o = l.end.divIdx + 1
                    }
                    if (!(t !== null && t !== void 0 && t.highlightMatches)) {
                        return
                    }
                    var p = t.pageMatches[r] || null;
                    var v = t.pageMatchesLength[r] || null;
                    this.matches = this._convertMatches(p, v);
                    this._renderMatches(this.matches)
                }
            }]);
            return i
        }();
        t.TextHighlighter = i
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.TextLayerBuilder = void 0;
        var a = n(7);

        function c(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var u = 300;
        var o = function () {
            function l(e) {
                var t = e.textLayerDiv,
                    n = e.eventBus,
                    r = e.pageIndex,
                    i = e.viewport,
                    a = e.highlighter,
                    o = a === void 0 ? null : a,
                    s = e.enhanceTextSelection,
                    u = s === void 0 ? false : s;
                c(this, l);
                this.textLayerDiv = t;
                this.eventBus = n;
                this.textContent = null;
                this.textContentItemsStr = [];
                this.textContentStream = null;
                this.renderingDone = false;
                this.pageNumber = r + 1;
                this.viewport = i;
                this.textDivs = [];
                this.textLayerRenderTask = null;
                this.highlighter = o;
                this.enhanceTextSelection = u;
                this._bindMouse()
            }
            i(l, [{
                key: "_finishRendering",
                value: function e() {
                    this.renderingDone = true;
                    if (!this.enhanceTextSelection) {
                        var t = document.createElement("div");
                        t.className = "endOfContent";
                        this.textLayerDiv.appendChild(t)
                    }
                    this.eventBus.dispatch("textlayerrendered", {
                        source: this,
                        pageNumber: this.pageNumber,
                        numTextDivs: this.textDivs.length
                    })
                }
            }, {
                key: "render",
                value: function e() {
                    var t, n = this;
                    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    if (!(this.textContent || this.textContentStream) || this.renderingDone) {
                        return
                    }
                    this.cancel();
                    this.textDivs.length = 0;
                    (t = this.highlighter) === null || t === void 0 ? void 0 : t.setTextMapping(this.textDivs, this.textContentItemsStr);
                    var i = document.createDocumentFragment();
                    this.textLayerRenderTask = (0, a.renderTextLayer)({
                        textContent: this.textContent,
                        textContentStream: this.textContentStream,
                        container: i,
                        viewport: this.viewport,
                        textDivs: this.textDivs,
                        textContentItemsStr: this.textContentItemsStr,
                        timeout: r,
                        enhanceTextSelection: this.enhanceTextSelection
                    });
                    this.textLayerRenderTask.promise.then(function () {
                        var e;
                        n.textLayerDiv.appendChild(i);
                        n._finishRendering();
                        (e = n.highlighter) === null || e === void 0 ? void 0 : e.enable()
                    }, function (e) {})
                }
            }, {
                key: "cancel",
                value: function e() {
                    var t;
                    if (this.textLayerRenderTask) {
                        this.textLayerRenderTask.cancel();
                        this.textLayerRenderTask = null
                    }(t = this.highlighter) === null || t === void 0 ? void 0 : t.disable()
                }
            }, {
                key: "setTextContentStream",
                value: function e(t) {
                    this.cancel();
                    this.textContentStream = t
                }
            }, {
                key: "setTextContent",
                value: function e(t) {
                    this.cancel();
                    this.textContent = t
                }
            }, {
                key: "_bindMouse",
                value: function e() {
                    var a = this;
                    var o = this.textLayerDiv;
                    var s = null;
                    o.addEventListener("mousedown", function (e) {
                        if (a.enhanceTextSelection && a.textLayerRenderTask) {
                            a.textLayerRenderTask.expandTextDivs(true);
                            if (s) {
                                clearTimeout(s);
                                s = null
                            }
                            return
                        }
                        var t = o.querySelector(".endOfContent");
                        if (!t) {
                            return
                        }
                        var n = e.target !== o;
                        n = n && window.getComputedStyle(t).getPropertyValue("-moz-user-select") !== "none";
                        if (n) {
                            var r = o.getBoundingClientRect();
                            var i = Math.max(0, (e.pageY - r.top) / r.height);
                            t.style.top = (i * 100).toFixed(2) + "%"
                        }
                        t.classList.add("active")
                    });
                    o.addEventListener("mouseup", function () {
                        if (a.enhanceTextSelection && a.textLayerRenderTask) {
                            s = setTimeout(function () {
                                if (a.textLayerRenderTask) {
                                    a.textLayerRenderTask.expandTextDivs(false)
                                }
                                s = null
                            }, u);
                            return
                        }
                        var e = o.querySelector(".endOfContent");
                        if (!e) {
                            return
                        }
                        e.style.top = "";
                        e.classList.remove("active")
                    })
                }
            }]);
            return l
        }();
        t.TextLayerBuilder = o
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.XfaLayerBuilder = void 0;
        var s = n(7);

        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            if (t) r(e.prototype, t);
            if (n) r(e, n);
            return e
        }
        var a = function () {
            function u(e) {
                var t = e.pageDiv,
                    n = e.pdfPage,
                    r = e.annotationStorage,
                    i = r === void 0 ? null : r,
                    a = e.linkService,
                    o = e.xfaHtml,
                    s = o === void 0 ? null : o;
                l(this, u);
                this.pageDiv = t;
                this.pdfPage = n;
                this.annotationStorage = i;
                this.linkService = a;
                this.xfaHtml = s;
                this.div = null;
                this._cancelled = false
            }
            i(u, [{
                key: "render",
                value: function e(n) {
                    var r = this;
                    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "display";
                    if (i === "print") {
                        var t = {
                            viewport: n.clone({
                                dontFlip: true
                            }),
                            div: this.div,
                            xfaHtml: this.xfaHtml,
                            annotationStorage: this.annotationStorage,
                            linkService: this.linkService,
                            intent: i
                        };
                        var a = document.createElement("div");
                        this.pageDiv.appendChild(a);
                        t.div = a;
                        var o = s.XfaLayer.render(t);
                        return Promise.resolve(o)
                    }
                    return this.pdfPage.getXfa().then(function (e) {
                        if (r._cancelled || !e) {
                            return {
                                textDivs: []
                            }
                        }
                        var t = {
                            viewport: n.clone({
                                dontFlip: true
                            }),
                            div: r.div,
                            xfaHtml: e,
                            annotationStorage: r.annotationStorage,
                            linkService: r.linkService,
                            intent: i
                        };
                        if (r.div) {
                            return s.XfaLayer.update(t)
                        }
                        r.div = document.createElement("div");
                        r.pageDiv.appendChild(r.div);
                        t.div = r.div;
                        return s.XfaLayer.render(t)
                    })["catch"](function (e) {
                        console.error(e)
                    })
                }
            }, {
                key: "cancel",
                value: function e() {
                    this._cancelled = true
                }
            }, {
                key: "hide",
                value: function e() {
                    if (!this.div) {
                        return
                    }
                    this.div.hidden = true
                }
            }]);
            return u
        }();
        t.XfaLayerBuilder = a
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.SecondaryToolbar = void 0;
        var s = n(5);
        var i = n(8);
        var u = n(30);

        function a(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }

        function r(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function f(e, t, n) {
            if (t) c(e.prototype, t);
            if (n) c(e, n);
            return e
        }
        var d = function () {
            function r(e, t, n) {
                o(this, r);
                this.toolbar = e.toolbar;
                this.toggleButton = e.toggleButton;
                this.toolbarButtonContainer = e.toolbarButtonContainer;
                this.buttons = [{
                    element: e.presentationModeButton,
                    eventName: "presentationmode",
                    close: true
                }, {
                    element: e.openFileButton,
                    eventName: "openfile",
                    close: true
                }, {
                    element: e.printButton,
                    eventName: "print",
                    close: true
                }, {
                    element: e.downloadButton,
                    eventName: "download",
                    close: true
                }, {
                    element: e.viewBookmarkButton,
                    eventName: null,
                    close: true
                }, {
                    element: e.firstPageButton,
                    eventName: "firstpage",
                    close: true
                }, {
                    element: e.lastPageButton,
                    eventName: "lastpage",
                    close: true
                }, {
                    element: e.pageRotateCwButton,
                    eventName: "rotatecw",
                    close: false
                }, {
                    element: e.pageRotateCcwButton,
                    eventName: "rotateccw",
                    close: false
                }, {
                    element: e.cursorSelectToolButton,
                    eventName: "switchcursortool",
                    eventDetails: {
                        tool: i.CursorTool.SELECT
                    },
                    close: true
                }, {
                    element: e.cursorHandToolButton,
                    eventName: "switchcursortool",
                    eventDetails: {
                        tool: i.CursorTool.HAND
                    },
                    close: true
                }, {
                    element: e.scrollPageButton,
                    eventName: "switchscrollmode",
                    eventDetails: {
                        mode: s.ScrollMode.PAGE
                    },
                    close: true
                }, {
                    element: e.scrollVerticalButton,
                    eventName: "switchscrollmode",
                    eventDetails: {
                        mode: s.ScrollMode.VERTICAL
                    },
                    close: true
                }, {
                    element: e.scrollHorizontalButton,
                    eventName: "switchscrollmode",
                    eventDetails: {
                        mode: s.ScrollMode.HORIZONTAL
                    },
                    close: true
                }, {
                    element: e.scrollWrappedButton,
                    eventName: "switchscrollmode",
                    eventDetails: {
                        mode: s.ScrollMode.WRAPPED
                    },
                    close: true
                }, {
                    element: e.spreadNoneButton,
                    eventName: "switchspreadmode",
                    eventDetails: {
                        mode: s.SpreadMode.NONE
                    },
                    close: true
                }, {
                    element: e.spreadOddButton,
                    eventName: "switchspreadmode",
                    eventDetails: {
                        mode: s.SpreadMode.ODD
                    },
                    close: true
                }, {
                    element: e.spreadEvenButton,
                    eventName: "switchspreadmode",
                    eventDetails: {
                        mode: s.SpreadMode.EVEN
                    },
                    close: true
                }, {
                    element: e.documentPropertiesButton,
                    eventName: "documentproperties",
                    close: true
                }];
                this.items = {
                    firstPage: e.firstPageButton,
                    lastPage: e.lastPageButton,
                    pageRotateCw: e.pageRotateCwButton,
                    pageRotateCcw: e.pageRotateCcwButton
                };
                this.mainContainer = t;
                this.eventBus = n;
                this.opened = false;
                this.containerHeight = null;
                this.previousContainerHeight = null;
                this.reset();
                this._bindClickListeners();
                this._bindCursorToolsListener(e);
                this._bindScrollModeListener(e);
                this._bindSpreadModeListener(e);
                this.eventBus._on("resize", this._setMaxHeight.bind(this))
            }
            f(r, [{
                key: "isOpen",
                get: function e() {
                    return this.opened
                }
            }, {
                key: "setPageNumber",
                value: function e(t) {
                    this.pageNumber = t;
                    this._updateUIState()
                }
            }, {
                key: "setPagesCount",
                value: function e(t) {
                    this.pagesCount = t;
                    this._updateUIState()
                }
            }, {
                key: "reset",
                value: function e() {
                    this.pageNumber = 0;
                    this.pagesCount = 0;
                    this._updateUIState();
                    this.eventBus.dispatch("secondarytoolbarreset", {
                        source: this
                    })
                }
            }, {
                key: "_updateUIState",
                value: function e() {
                    this.items.firstPage.disabled = this.pageNumber <= 1;
                    this.items.lastPage.disabled = this.pageNumber >= this.pagesCount;
                    this.items.pageRotateCw.disabled = this.pagesCount === 0;
                    this.items.pageRotateCcw.disabled = this.pagesCount === 0
                }
            }, {
                key: "_bindClickListeners",
                value: function e() {
                    var o = this;
                    this.toggleButton.addEventListener("click", this.toggle.bind(this));
                    var t = a(this.buttons),
                        s;
                    try {
                        var n = function e() {
                            var t = s.value,
                                n = t.element,
                                r = t.eventName,
                                i = t.close,
                                a = t.eventDetails;
                            n.addEventListener("click", function (e) {
                                if (r !== null) {
                                    var t = {
                                        source: o
                                    };
                                    for (var n in a) {
                                        t[n] = a[n]
                                    }
                                    o.eventBus.dispatch(r, t)
                                }
                                if (i) {
                                    o.close()
                                }
                            })
                        };
                        for (t.s(); !(s = t.n()).done;) {
                            n()
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "_bindCursorToolsListener",
                value: function e(n) {
                    this.eventBus._on("cursortoolchanged", function (e) {
                        var t = e.tool;
                        n.cursorSelectToolButton.classList.toggle("toggled", t === i.CursorTool.SELECT);
                        n.cursorHandToolButton.classList.toggle("toggled", t === i.CursorTool.HAND)
                    })
                }
            }, {
                key: "_bindScrollModeListener",
                value: function e(a) {
                    var o = this;
                    var t = function e(t) {
                        var n = t.mode;
                        a.scrollPageButton.classList.toggle("toggled", n === s.ScrollMode.PAGE);
                        a.scrollVerticalButton.classList.toggle("toggled", n === s.ScrollMode.VERTICAL);
                        a.scrollHorizontalButton.classList.toggle("toggled", n === s.ScrollMode.HORIZONTAL);
                        a.scrollWrappedButton.classList.toggle("toggled", n === s.ScrollMode.WRAPPED);
                        var r = o.pagesCount > u.PagesCountLimit.FORCE_SCROLL_MODE_PAGE;
                        a.scrollPageButton.disabled = r;
                        a.scrollVerticalButton.disabled = r;
                        a.scrollHorizontalButton.disabled = r;
                        a.scrollWrappedButton.disabled = r;
                        var i = n === s.ScrollMode.HORIZONTAL;
                        a.spreadNoneButton.disabled = i;
                        a.spreadOddButton.disabled = i;
                        a.spreadEvenButton.disabled = i
                    };
                    this.eventBus._on("scrollmodechanged", t);
                    this.eventBus._on("secondarytoolbarreset", function (e) {
                        if (e.source === o) {
                            t({
                                mode: s.ScrollMode.VERTICAL
                            })
                        }
                    })
                }
            }, {
                key: "_bindSpreadModeListener",
                value: function e(n) {
                    var t = this;

                    function r(e) {
                        var t = e.mode;
                        n.spreadNoneButton.classList.toggle("toggled", t === s.SpreadMode.NONE);
                        n.spreadOddButton.classList.toggle("toggled", t === s.SpreadMode.ODD);
                        n.spreadEvenButton.classList.toggle("toggled", t === s.SpreadMode.EVEN)
                    }
                    this.eventBus._on("spreadmodechanged", r);
                    this.eventBus._on("secondarytoolbarreset", function (e) {
                        if (e.source === t) {
                            r({
                                mode: s.SpreadMode.NONE
                            })
                        }
                    })
                }
            }, {
                key: "open",
                value: function e() {
                    if (this.opened) {
                        return
                    }
                    this.opened = true;
                    this._setMaxHeight();
                    this.toggleButton.classList.add("toggled");
                    this.toggleButton.setAttribute("aria-expanded", "true");
                    this.toolbar.classList.remove("hidden")
                }
            }, {
                key: "close",
                value: function e() {
                    if (!this.opened) {
                        return
                    }
                    this.opened = false;
                    this.toolbar.classList.add("hidden");
                    this.toggleButton.classList.remove("toggled");
                    this.toggleButton.setAttribute("aria-expanded", "false")
                }
            }, {
                key: "toggle",
                value: function e() {
                    if (this.opened) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }, {
                key: "_setMaxHeight",
                value: function e() {
                    if (!this.opened) {
                        return
                    }
                    this.containerHeight = this.mainContainer.clientHeight;
                    if (this.containerHeight === this.previousContainerHeight) {
                        return
                    }
                    this.toolbarButtonContainer.style.maxHeight = "".concat(this.containerHeight - s.SCROLLBAR_PADDING, "px");
                    this.previousContainerHeight = this.containerHeight
                }
            }]);
            return r
        }();
        t.SecondaryToolbar = d
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.Toolbar = void 0;
        var m = r(n(3));
        var y = n(5);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function i(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function b(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = l(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function l(e, t) {
            if (!e) return;
            if (typeof e === "string") return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }

        function a(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }
        var f = "visiblePageIsLoading";
        var d = function () {
            function r(e, t, n) {
                o(this, r);
                this.toolbar = e.container;
                this.eventBus = t;
                this.l10n = n;
                this.buttons = [{
                    element: e.previous,
                    eventName: "previouspage"
                }, {
                    element: e.next,
                    eventName: "nextpage"
                }, {
                    element: e.zoomIn,
                    eventName: "zoomin"
                }, {
                    element: e.zoomOut,
                    eventName: "zoomout"
                }, {
                    element: e.openFile,
                    eventName: "openfile"
                }, {
                    element: e.print,
                    eventName: "print"
                }, {
                    element: e.presentationModeButton,
                    eventName: "presentationmode"
                }, {
                    element: e.download,
                    eventName: "download"
                }, {
                    element: e.viewBookmark,
                    eventName: null
                }];
                this.items = {
                    numPages: e.numPages,
                    pageNumber: e.pageNumber,
                    scaleSelect: e.scaleSelect,
                    customScaleOption: e.customScaleOption,
                    previous: e.previous,
                    next: e.next,
                    zoomIn: e.zoomIn,
                    zoomOut: e.zoomOut
                };
                this._wasLocalized = false;
                this.reset();
                this._bindListeners()
            }
            c(r, [{
                key: "setPageNumber",
                value: function e(t, n) {
                    this.pageNumber = t;
                    this.pageLabel = n;
                    this._updateUIState(false)
                }
            }, {
                key: "setPagesCount",
                value: function e(t, n) {
                    this.pagesCount = t;
                    this.hasPageLabels = n;
                    this._updateUIState(true)
                }
            }, {
                key: "setPageScale",
                value: function e(t, n) {
                    this.pageScaleValue = (t || n).toString();
                    this.pageScale = n;
                    this._updateUIState(false)
                }
            }, {
                key: "reset",
                value: function e() {
                    this.pageNumber = 0;
                    this.pageLabel = null;
                    this.hasPageLabels = false;
                    this.pagesCount = 0;
                    this.pageScaleValue = y.DEFAULT_SCALE_VALUE;
                    this.pageScale = y.DEFAULT_SCALE;
                    this._updateUIState(true);
                    this.updateLoadingIndicatorState()
                }
            }, {
                key: "_bindListeners",
                value: function e() {
                    var i = this;
                    var t = this.items,
                        n = t.pageNumber,
                        r = t.scaleSelect;
                    var a = this;
                    var o = b(this.buttons),
                        s;
                    try {
                        var u = function e() {
                            var t = s.value,
                                n = t.element,
                                r = t.eventName;
                            n.addEventListener("click", function (e) {
                                if (r !== null) {
                                    i.eventBus.dispatch(r, {
                                        source: i
                                    })
                                }
                            })
                        };
                        for (o.s(); !(s = o.n()).done;) {
                            u()
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    n.addEventListener("click", function () {
                        this.select()
                    });
                    n.addEventListener("change", function () {
                        a.eventBus.dispatch("pagenumberchanged", {
                            source: a,
                            value: this.value
                        })
                    });
                    r.addEventListener("change", function () {
                        if (this.value === "custom") {
                            return
                        }
                        a.eventBus.dispatch("scalechanged", {
                            source: a,
                            value: this.value
                        })
                    });
                    r.addEventListener("click", function (e) {
                        var t = e.target;
                        if (this.value === a.pageScaleValue && t.tagName.toUpperCase() === "OPTION") {
                            this.blur()
                        }
                    });
                    r.oncontextmenu = y.noContextMenuHandler;
                    this.eventBus._on("localized", function () {
                        i._wasLocalized = true;
                        i._adjustScaleWidth();
                        i._updateUIState(true)
                    })
                }
            }, {
                key: "_updateUIState",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    if (!this._wasLocalized) {
                        return
                    }
                    var n = this.pageNumber,
                        r = this.pagesCount,
                        a = this.pageScaleValue,
                        i = this.pageScale,
                        o = this.items;
                    if (t) {
                        if (this.hasPageLabels) {
                            o.pageNumber.type = "text"
                        } else {
                            o.pageNumber.type = "number";
                            this.l10n.get("of_pages", {
                                pagesCount: r
                            }).then(function (e) {
                                o.numPages.textContent = e
                            })
                        }
                        o.pageNumber.max = r
                    }
                    if (this.hasPageLabels) {
                        o.pageNumber.value = this.pageLabel;
                        this.l10n.get("page_of_pages", {
                            pageNumber: n,
                            pagesCount: r
                        }).then(function (e) {
                            o.numPages.textContent = e
                        })
                    } else {
                        o.pageNumber.value = n
                    }
                    o.previous.disabled = n <= 1;
                    o.next.disabled = n >= r;
                    o.zoomOut.disabled = i <= y.MIN_SCALE;
                    o.zoomIn.disabled = i >= y.MAX_SCALE;
                    this.l10n.get("page_scale_percent", {
                        scale: Math.round(i * 1e4) / 100
                    }).then(function (e) {
                        var t = false;
                        var n = b(o.scaleSelect.options),
                            r;
                        try {
                            for (n.s(); !(r = n.n()).done;) {
                                var i = r.value;
                                if (i.value !== a) {
                                    i.selected = false;
                                    continue
                                }
                                i.selected = true;
                                t = true
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        if (!t) {
                            o.customScaleOption.textContent = e;
                            o.customScaleOption.selected = true
                        }
                    })
                }
            }, {
                key: "updateLoadingIndicatorState",
                value: function e() {
                    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    var n = this.items.pageNumber;
                    n.classList.toggle(f, t)
                }
            }, {
                key: "_adjustScaleWidth",
                value: function () {
                    var e = i(m["default"].mark(function e() {
                        var n, r, i, a, o, s, u, l, c, f, d, h, p, v, g;
                        return m["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = this.items, r = this.l10n;
                                        i = Promise.all([r.get("page_scale_auto"), r.get("page_scale_actual"), r.get("page_scale_fit"), r.get("page_scale_width")]);
                                        a = getComputedStyle(n.scaleSelect), o = parseInt(a.getPropertyValue("--scale-select-container-width"), 10), s = parseInt(a.getPropertyValue("--scale-select-overflow"), 10);
                                        u = document.createElement("canvas");
                                        u.mozOpaque = true;
                                        l = u.getContext("2d", {
                                            alpha: false
                                        });
                                        t.next = 8;
                                        return y.animationStarted;
                                    case 8:
                                        l.font = "".concat(a.fontSize, " ").concat(a.fontFamily);
                                        c = 0;
                                        t.t0 = b;
                                        t.next = 13;
                                        return i;
                                    case 13:
                                        t.t1 = t.sent;
                                        f = (0, t.t0)(t.t1);
                                        try {
                                            for (f.s(); !(d = f.n()).done;) {
                                                h = d.value;
                                                p = l.measureText(h), v = p.width;
                                                if (v > c) {
                                                    c = v
                                                }
                                            }
                                        } catch (e) {
                                            f.e(e)
                                        } finally {
                                            f.f()
                                        }
                                        c += 2 * s;
                                        if (c > o) {
                                            g = document.documentElement;
                                            g.style.setProperty("--scale-select-container-width", "".concat(c, "px"))
                                        }
                                        u.width = 0;
                                        u.height = 0;
                                        u = l = null;
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]);
            return r
        }();
        t.Toolbar = d
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.ViewHistory = void 0;
        var o = r(n(3));

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function i(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function l(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }
        var c = 20;
        var f = function () {
            function n(e) {
                var o = this;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : c;
                a(this, n);
                this.fingerprint = e;
                this.cacheSize = t;
                this._initializedPromise = this._readFromStorage().then(function (e) {
                    var t = JSON.parse(e || "{}");
                    var n = -1;
                    if (!Array.isArray(t.files)) {
                        t.files = []
                    } else {
                        while (t.files.length >= o.cacheSize) {
                            t.files.shift()
                        }
                        for (var r = 0, i = t.files.length; r < i; r++) {
                            var a = t.files[r];
                            if (a.fingerprint === o.fingerprint) {
                                n = r;
                                break
                            }
                        }
                    }
                    if (n === -1) {
                        n = t.files.push({
                            fingerprint: o.fingerprint
                        }) - 1
                    }
                    o.file = t.files[n];
                    o.database = t
                })
            }
            l(n, [{
                key: "_writeToStorage",
                value: function () {
                    var e = i(o["default"].mark(function e() {
                        var n;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        n = JSON.stringify(this.database);
                                        localStorage.setItem("pdfjs.history", n);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_readFromStorage",
                value: function () {
                    var e = i(o["default"].mark(function e() {
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", localStorage.getItem("pdfjs.history"));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "set",
                value: function () {
                    var n = i(o["default"].mark(function e(n, r) {
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        this.file[n] = r;
                                        return t.abrupt("return", this._writeToStorage());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "setMultiple",
                value: function () {
                    var t = i(o["default"].mark(function e(n) {
                        var r;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        for (r in n) {
                                            this.file[r] = n[r]
                                        }
                                        return t.abrupt("return", this._writeToStorage());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "get",
                value: function () {
                    var n = i(o["default"].mark(function e(n, r) {
                        var i;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        i = this.file[n];
                                        return t.abrupt("return", i !== undefined ? i : r);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "getMultiple",
                value: function () {
                    var t = i(o["default"].mark(function e(n) {
                        var r, i, a;
                        return o["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        r = Object.create(null);
                                        for (i in n) {
                                            a = this.file[i];
                                            r[i] = a !== undefined ? a : n[i]
                                        }
                                        return t.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]);
            return n
        }();
        t.ViewHistory = f
    }, (e, t, n) => {
        function r(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                r = function e(t) {
                    return typeof t
                }
            } else {
                r = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return r(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.GenericCom = void 0;
        var i = c(n(3));
        var a = n(2);
        var o = n(42);
        var s = n(43);
        var u = n(44);
        var l = n(46);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function d(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        f(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        f(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function h(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function p(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function v(e, t, n) {
            if (t) p(e.prototype, t);
            if (n) p(e, n);
            return e
        }

        function g(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function")
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                }
            });
            if (t) m(e, t)
        }

        function m(e, t) {
            m = Object.setPrototypeOf || function e(t, n) {
                t.__proto__ = n;
                return t
            };
            return m(e, t)
        }

        function y(i) {
            var a = _();
            return function e() {
                var t = P(i),
                    n;
                if (a) {
                    var r = P(this).constructor;
                    n = Reflect.construct(t, arguments, r)
                } else {
                    n = t.apply(this, arguments)
                }
                return b(this, n)
            }
        }

        function b(e, t) {
            if (t && (r(t) === "object" || typeof t === "function")) {
                return t
            } else if (t !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined")
            }
            return w(e)
        }

        function w(e) {
            if (e === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return e
        }

        function _() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;
            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true
            } catch (e) {
                return false
            }
        }

        function P(e) {
            P = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            };
            return P(e)
        }
        var S = {};
        t.GenericCom = S;
        var k = function (e) {
            g(n, e);
            var t = y(n);

            function n() {
                h(this, n);
                return t.apply(this, arguments)
            }
            v(n, [{
                key: "_writeToStorage",
                value: function () {
                    var t = d(i["default"].mark(function e(n) {
                        return i["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        localStorage.setItem("pdfjs.preferences", JSON.stringify(n));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_readFromStorage",
                value: function () {
                    var t = d(i["default"].mark(function e(t) {
                        return i["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", JSON.parse(localStorage.getItem("pdfjs.preferences")));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]);
            return n
        }(o.BasePreferences);
        var E = function (e) {
            g(n, e);
            var t = y(n);

            function n() {
                h(this, n);
                return t.apply(this, arguments)
            }
            v(n, null, [{
                key: "createDownloadManager",
                value: function e(t) {
                    return new s.DownloadManager
                }
            }, {
                key: "createPreferences",
                value: function e() {
                    return new k
                }
            }, {
                key: "createL10n",
                value: function e(t) {
                    var n = t.locale,
                        r = n === void 0 ? "en-US" : n;
                    return new u.GenericL10n(r)
                }
            }, {
                key: "createScripting",
                value: function e(t) {
                    var n = t.sandboxBundleSrc;
                    return new l.GenericScripting(n)
                }
            }]);
            return n
        }(a.DefaultExternalServices);
        a.PDFViewerApplication.externalServices = E
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.BasePreferences = void 0;
        var s = i(n(3));
        var r = n(1);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function a(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        u(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        u(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function l(e) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                l = function e(t) {
                    return typeof t
                }
            } else {
                l = function e(t) {
                    return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            }
            return l(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function f(e, t, n) {
            if (t) c(e.prototype, t);
            if (n) c(e, n);
            return e
        }
        var d = function () {
            function e() {
                var r = this;
                o(this, e);
                if (this.constructor === e) {
                    throw new Error("Cannot initialize BasePreferences.")
                }
                Object.defineProperty(this, "defaults", {
                    value: Object.freeze({
                        annotationMode: 2,
                        cursorToolOnLoad: 0,
                        defaultZoomValue: "",
                        disablePageLabels: false,
                        enablePermissions: false,
                        enablePrintAutoRotate: true,
                        enableScripting: true,
                        externalLinkTarget: 0,
                        historyUpdateUrl: false,
                        ignoreDestinationZoom: false,
                        pdfBugEnabled: false,
                        renderer: "canvas",
                        sidebarViewOnLoad: -1,
                        scrollModeOnLoad: -1,
                        spreadModeOnLoad: -1,
                        textLayerMode: 1,
                        useOnlyCssZoom: false,
                        viewerCssTheme: 0,
                        viewOnLoad: 0,
                        disableAutoFetch: false,
                        disableFontFace: false,
                        disableRange: false,
                        disableStream: false,
                        enableXfa: true
                    }),
                    writable: false,
                    enumerable: true,
                    configurable: false
                });
                this.prefs = Object.create(null);
                this._initializedPromise = this._readFromStorage(this.defaults).then(function (e) {
                    for (var t in r.defaults) {
                        var n = e === null || e === void 0 ? void 0 : e[t];
                        if (l(n) === l(r.defaults[t])) {
                            r.prefs[t] = n
                        }
                    }
                })
            }
            f(e, [{
                key: "_writeToStorage",
                value: function () {
                    var t = a(s["default"].mark(function e(t) {
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        throw new Error("Not implemented: _writeToStorage");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "_readFromStorage",
                value: function () {
                    var t = a(s["default"].mark(function e(t) {
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        throw new Error("Not implemented: _readFromStorage");
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "reset",
                value: function () {
                    var e = a(s["default"].mark(function e() {
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        this.prefs = Object.create(null);
                                        return t.abrupt("return", this._writeToStorage(this.defaults));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "set",
                value: function () {
                    var n = a(s["default"].mark(function e(n, r) {
                        var i, a, o;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        i = this.defaults[n];
                                        if (!(i === undefined)) {
                                            t.next = 7;
                                            break
                                        }
                                        throw new Error('Set preference: "'.concat(n, '" is undefined.'));
                                    case 7:
                                        if (!(r === undefined)) {
                                            t.next = 9;
                                            break
                                        }
                                        throw new Error("Set preference: no value is specified.");
                                    case 9:
                                        a = l(r);
                                        o = l(i);
                                        if (!(a !== o)) {
                                            t.next = 19;
                                            break
                                        }
                                        if (!(a === "number" && o === "string")) {
                                            t.next = 16;
                                            break
                                        }
                                        r = r.toString();
                                        t.next = 17;
                                        break;
                                    case 16:
                                        throw new Error('Set preference: "'.concat(r, '" is a ').concat(a, ", expected a ").concat(o, "."));
                                    case 17:
                                        t.next = 21;
                                        break;
                                    case 19:
                                        if (!(a === "number" && !Number.isInteger(r))) {
                                            t.next = 21;
                                            break
                                        }
                                        throw new Error('Set preference: "'.concat(r, '" must be an integer.'));
                                    case 21:
                                        this.prefs[n] = r;
                                        return t.abrupt("return", this._writeToStorage(this.prefs));
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e, t) {
                        return n.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "get",
                value: function () {
                    var t = a(s["default"].mark(function e(n) {
                        var r, i;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        r = this.defaults[n], i = this.prefs[n];
                                        if (!(r === undefined)) {
                                            t.next = 5;
                                            break
                                        }
                                        throw new Error('Get preference: "'.concat(n, '" is undefined.'));
                                    case 5:
                                        return t.abrupt("return", i !== undefined ? i : r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "getAll",
                value: function () {
                    var e = a(s["default"].mark(function e() {
                        var n, r, i;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._initializedPromise;
                                    case 2:
                                        n = Object.create(null);
                                        for (r in this.defaults) {
                                            i = this.prefs[r];
                                            n[r] = i !== undefined ? i : this.defaults[r]
                                        }
                                        return t.abrupt("return", n);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]);
            return e
        }();
        t.BasePreferences = d
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.DownloadManager = void 0;
        var u = n(7);
        var l = n(1);

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function a(e, t, n) {
            if (t) i(e.prototype, t);
            if (n) i(e, n);
            return e
        }

        function o(e, t) {
            var n = document.createElement("a");
            if (!n.click) {
                throw new Error('DownloadManager: "a.click()" is not supported.')
            }
            n.href = e;
            n.target = "_parent";
            if ("download" in n) {
                n.download = t
            }(document.body || document.documentElement).appendChild(n);
            n.click();
            n.remove()
        }
        var s = function () {
            function e() {
                r(this, e);
                this._openBlobUrls = new WeakMap
            }
            a(e, [{
                key: "downloadUrl",
                value: function e(t, n) {
                    if (!(0, u.createValidAbsoluteUrl)(t, "http://example.com")) {
                        console.error("downloadUrl - not a valid URL: ".concat(t));
                        return
                    }
                    o(t + "#pdfjs.action=download", n)
                }
            }, {
                key: "downloadData",
                value: function e(t, n, r) {
                    var i = (0, u.createObjectURL)(t, r, l.compatibilityParams.disableCreateObjectURL);
                    o(i, n)
                }
            }, {
                key: "openOrDownloadData",
                value: function e(t, n, r) {
                    var i = (0, u.isPdfFile)(r);
                    var a = i ? "application/pdf" : "";
                    if (i && !l.compatibilityParams.disableCreateObjectURL) {
                        var o = this._openBlobUrls.get(t);
                        if (!o) {
                            o = URL.createObjectURL(new Blob([n], {
                                type: a
                            }));
                            this._openBlobUrls.set(t, o)
                        }
                        var s;
                        s = "?file=" + encodeURIComponent(o + "#" + r);
                        try {
                            window.open(s);
                            return true
                        } catch (e) {
                            console.error("openOrDownloadData: ".concat(e));
                            URL.revokeObjectURL(o);
                            this._openBlobUrls["delete"](t)
                        }
                    }
                    this.downloadData(n, r, a);
                    return false
                }
            }, {
                key: "download",
                value: function e(t, n, r) {
                    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "download";
                    if (l.compatibilityParams.disableCreateObjectURL) {
                        this.downloadUrl(n, r);
                        return
                    }
                    var a = URL.createObjectURL(t);
                    o(a, r)
                }
            }]);
            return e
        }();
        t.DownloadManager = s
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.GenericL10n = void 0;
        var s = r(n(3));
        n(45);
        var u = n(32);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function i(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            if (t) o(e.prototype, t);
            if (n) o(e, n);
            return e
        }
        var f = document.webL10n;
        var d = function () {
            function e(n) {
                a(this, e);
                this._lang = n;
                this._ready = new Promise(function (e, t) {
                    f.setLanguage((0, u.fixupLangCode)(n), function () {
                        e(f)
                    })
                })
            }
            c(e, [{
                key: "getLanguage",
                value: function () {
                    var e = i(s["default"].mark(function e() {
                        var n;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        n = t.sent;
                                        return t.abrupt("return", n.getLanguage());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDirection",
                value: function () {
                    var e = i(s["default"].mark(function e() {
                        var n;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        n = t.sent;
                                        return t.abrupt("return", n.getDirection());
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "get",
                value: function () {
                    var t = i(s["default"].mark(function e(n) {
                        var r, i, a, o = arguments;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        r = o.length > 1 && o[1] !== undefined ? o[1] : null;
                                        i = o.length > 2 && o[2] !== undefined ? o[2] : (0, u.getL10nFallback)(n, r);
                                        t.next = 4;
                                        return this._ready;
                                    case 4:
                                        a = t.sent;
                                        return t.abrupt("return", a.get(n, r, i));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "translate",
                value: function () {
                    var t = i(s["default"].mark(function e(n) {
                        var r;
                        return s["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        r = t.sent;
                                        return t.abrupt("return", r.translate(n));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]);
            return e
        }();
        t.GenericL10n = d
    }, () => {
        document.webL10n = function (n, l, e) {
            var d = {};
            var r = "";
            var c = "textContent";
            var h = "";
            var f = {};
            var p = "loading";
            var i = true;

            function v() {
                return l.querySelectorAll('link[type="application/l10n"]')
            }

            function g() {
                var e = l.querySelector('script[type="application/l10n"]');
                return e ? JSON.parse(e.innerHTML) : null
            }

            function a(e) {
                return e ? e.querySelectorAll("*[data-l10n-id]") : []
            }

            function m(e) {
                if (!e) return {};
                var t = e.getAttribute("data-l10n-id");
                var n = e.getAttribute("data-l10n-args");
                var r = {};
                if (n) {
                    try {
                        r = JSON.parse(n)
                    } catch (e) {
                        console.warn("could not parse arguments for #" + t)
                    }
                }
                return {
                    id: t,
                    args: r
                }
            }

            function o(e, t, n) {
                t = t || function e(t) {};
                n = n || function e() {};
                var r = new XMLHttpRequest;
                r.open("GET", e, i);
                if (r.overrideMimeType) {
                    r.overrideMimeType("text/plain; charset=utf-8")
                }
                r.onreadystatechange = function () {
                    if (r.readyState == 4) {
                        if (r.status == 200 || r.status === 0) {
                            t(r.responseText)
                        } else {
                            n()
                        }
                    }
                };
                r.onerror = n;
                r.ontimeout = n;
                try {
                    r.send(null)
                } catch (e) {
                    n()
                }
            }

            function y(e, m, a, t) {
                var y = e.replace(/[^\/]*$/, "") || "./";

                function b(e) {
                    if (e.lastIndexOf("\\") < 0) return e;
                    return e.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
                }

                function n(e, t) {
                    var c = {};
                    var f = /^\s*|\s*$/;
                    var d = /^\s*#|^\s*$/;
                    var h = /^\s*\[(.*)\]\s*$/;
                    var p = /^\s*@import\s+url\((.*)\)\s*$/i;
                    var v = /^([^=\s]*)\s*=\s*(.+)$/;

                    function n(e, n, r) {
                        var i = e.replace(f, "").split(/[\r\n]+/);
                        var a = "*";
                        var o = m.split("-", 1)[0];
                        var s = false;
                        var u = "";

                        function l() {
                            while (true) {
                                if (!i.length) {
                                    r();
                                    return
                                }
                                var e = i.shift();
                                if (d.test(e)) continue;
                                if (n) {
                                    u = h.exec(e);
                                    if (u) {
                                        a = u[1].toLowerCase();
                                        s = a !== "*" && a !== m && a !== o;
                                        continue
                                    } else if (s) {
                                        continue
                                    }
                                    u = p.exec(e);
                                    if (u) {
                                        g(y + u[1], l);
                                        return
                                    }
                                }
                                var t = e.match(v);
                                if (t && t.length == 3) {
                                    c[t[1]] = b(t[2])
                                }
                            }
                        }
                        l()
                    }

                    function g(e, t) {
                        o(e, function (e) {
                            n(e, false, t)
                        }, function () {
                            console.warn(e + " not found.");
                            t()
                        })
                    }
                    n(e, true, function () {
                        t(c)
                    })
                }
                o(e, function (e) {
                    r += e;
                    n(e, function (e) {
                        for (var t in e) {
                            var n, r, i = t.lastIndexOf(".");
                            if (i > 0) {
                                n = t.substring(0, i);
                                r = t.substring(i + 1)
                            } else {
                                n = t;
                                r = c
                            }
                            if (!d[n]) {
                                d[n] = {}
                            }
                            d[n][r] = e[t]
                        }
                        if (a) {
                            a()
                        }
                    })
                }, t)
            }

            function s(e, t) {
                if (e) {
                    e = e.toLowerCase()
                }
                t = t || function e() {};
                b();
                h = e;
                var n = v();
                var r = n.length;
                if (r === 0) {
                    var i = g();
                    if (i && i.locales && i.default_locale) {
                        console.log("using the embedded JSON directory, early way out");
                        d = i.locales[e];
                        if (!d) {
                            var a = i.default_locale.toLowerCase();
                            for (var o in i.locales) {
                                o = o.toLowerCase();
                                if (o === e) {
                                    d = i.locales[e];
                                    break
                                } else if (o === a) {
                                    d = i.locales[a]
                                }
                            }
                        }
                        t()
                    } else {
                        console.log("no resource to load, early way out")
                    }
                    p = "complete";
                    return
                }
                var s = null;
                var u = 0;
                s = function e() {
                    u++;
                    if (u >= r) {
                        t();
                        p = "complete"
                    }
                };

                function l(e) {
                    var n = e.href;
                    this.load = function (e, t) {
                        y(n, e, t, function () {
                            console.warn(n + " not found.");
                            console.warn('"' + e + '" resource not found');
                            h = "";
                            t()
                        })
                    }
                }
                for (var c = 0; c < r; c++) {
                    var f = new l(n[c]);
                    f.load(e, s)
                }
            }

            function b() {
                d = {};
                r = "";
                h = ""
            }

            function u(e) {
                var t = {
                    af: 3,
                    ak: 4,
                    am: 4,
                    ar: 1,
                    asa: 3,
                    az: 0,
                    be: 11,
                    bem: 3,
                    bez: 3,
                    bg: 3,
                    bh: 4,
                    bm: 0,
                    bn: 3,
                    bo: 0,
                    br: 20,
                    brx: 3,
                    bs: 11,
                    ca: 3,
                    cgg: 3,
                    chr: 3,
                    cs: 12,
                    cy: 17,
                    da: 3,
                    de: 3,
                    dv: 3,
                    dz: 0,
                    ee: 3,
                    el: 3,
                    en: 3,
                    eo: 3,
                    es: 3,
                    et: 3,
                    eu: 3,
                    fa: 0,
                    ff: 5,
                    fi: 3,
                    fil: 4,
                    fo: 3,
                    fr: 5,
                    fur: 3,
                    fy: 3,
                    ga: 8,
                    gd: 24,
                    gl: 3,
                    gsw: 3,
                    gu: 3,
                    guw: 4,
                    gv: 23,
                    ha: 3,
                    haw: 3,
                    he: 2,
                    hi: 4,
                    hr: 11,
                    hu: 0,
                    id: 0,
                    ig: 0,
                    ii: 0,
                    is: 3,
                    it: 3,
                    iu: 7,
                    ja: 0,
                    jmc: 3,
                    jv: 0,
                    ka: 0,
                    kab: 5,
                    kaj: 3,
                    kcg: 3,
                    kde: 0,
                    kea: 0,
                    kk: 3,
                    kl: 3,
                    km: 0,
                    kn: 0,
                    ko: 0,
                    ksb: 3,
                    ksh: 21,
                    ku: 3,
                    kw: 7,
                    lag: 18,
                    lb: 3,
                    lg: 3,
                    ln: 4,
                    lo: 0,
                    lt: 10,
                    lv: 6,
                    mas: 3,
                    mg: 4,
                    mk: 16,
                    ml: 3,
                    mn: 3,
                    mo: 9,
                    mr: 3,
                    ms: 0,
                    mt: 15,
                    my: 0,
                    nah: 3,
                    naq: 7,
                    nb: 3,
                    nd: 3,
                    ne: 3,
                    nl: 3,
                    nn: 3,
                    no: 3,
                    nr: 3,
                    nso: 4,
                    ny: 3,
                    nyn: 3,
                    om: 3,
                    or: 3,
                    pa: 3,
                    pap: 3,
                    pl: 13,
                    ps: 3,
                    pt: 3,
                    rm: 3,
                    ro: 9,
                    rof: 3,
                    ru: 11,
                    rwk: 3,
                    sah: 0,
                    saq: 3,
                    se: 7,
                    seh: 3,
                    ses: 0,
                    sg: 0,
                    sh: 11,
                    shi: 19,
                    sk: 12,
                    sl: 14,
                    sma: 7,
                    smi: 7,
                    smj: 7,
                    smn: 7,
                    sms: 7,
                    sn: 3,
                    so: 3,
                    sq: 3,
                    sr: 11,
                    ss: 3,
                    ssy: 3,
                    st: 3,
                    sv: 3,
                    sw: 3,
                    syr: 3,
                    ta: 3,
                    te: 3,
                    teo: 3,
                    th: 0,
                    ti: 4,
                    tig: 3,
                    tk: 3,
                    tl: 4,
                    tn: 3,
                    to: 0,
                    tr: 0,
                    ts: 3,
                    tzm: 22,
                    uk: 11,
                    ur: 3,
                    ve: 3,
                    vi: 0,
                    vun: 3,
                    wa: 4,
                    wae: 3,
                    wo: 0,
                    xh: 3,
                    xog: 3,
                    yo: 0,
                    zh: 0,
                    zu: 3
                };

                function n(e, t) {
                    return t.indexOf(e) !== -1
                }

                function r(e, t, n) {
                    return t <= e && e <= n
                }
                var i = {
                    0: function e(t) {
                        return "other"
                    },
                    1: function e(t) {
                        if (r(t % 100, 3, 10)) return "few";
                        if (t === 0) return "zero";
                        if (r(t % 100, 11, 99)) return "many";
                        if (t == 2) return "two";
                        if (t == 1) return "one";
                        return "other"
                    },
                    2: function e(t) {
                        if (t !== 0 && t % 10 === 0) return "many";
                        if (t == 2) return "two";
                        if (t == 1) return "one";
                        return "other"
                    },
                    3: function e(t) {
                        if (t == 1) return "one";
                        return "other"
                    },
                    4: function e(t) {
                        if (r(t, 0, 1)) return "one";
                        return "other"
                    },
                    5: function e(t) {
                        if (r(t, 0, 2) && t != 2) return "one";
                        return "other"
                    },
                    6: function e(t) {
                        if (t === 0) return "zero";
                        if (t % 10 == 1 && t % 100 != 11) return "one";
                        return "other"
                    },
                    7: function e(t) {
                        if (t == 2) return "two";
                        if (t == 1) return "one";
                        return "other"
                    },
                    8: function e(t) {
                        if (r(t, 3, 6)) return "few";
                        if (r(t, 7, 10)) return "many";
                        if (t == 2) return "two";
                        if (t == 1) return "one";
                        return "other"
                    },
                    9: function e(t) {
                        if (t === 0 || t != 1 && r(t % 100, 1, 19)) return "few";
                        if (t == 1) return "one";
                        return "other"
                    },
                    10: function e(t) {
                        if (r(t % 10, 2, 9) && !r(t % 100, 11, 19)) return "few";
                        if (t % 10 == 1 && !r(t % 100, 11, 19)) return "one";
                        return "other"
                    },
                    11: function e(t) {
                        if (r(t % 10, 2, 4) && !r(t % 100, 12, 14)) return "few";
                        if (t % 10 === 0 || r(t % 10, 5, 9) || r(t % 100, 11, 14)) return "many";
                        if (t % 10 == 1 && t % 100 != 11) return "one";
                        return "other"
                    },
                    12: function e(t) {
                        if (r(t, 2, 4)) return "few";
                        if (t == 1) return "one";
                        return "other"
                    },
                    13: function e(t) {
                        if (r(t % 10, 2, 4) && !r(t % 100, 12, 14)) return "few";
                        if (t != 1 && r(t % 10, 0, 1) || r(t % 10, 5, 9) || r(t % 100, 12, 14)) return "many";
                        if (t == 1) return "one";
                        return "other"
                    },
                    14: function e(t) {
                        if (r(t % 100, 3, 4)) return "few";
                        if (t % 100 == 2) return "two";
                        if (t % 100 == 1) return "one";
                        return "other"
                    },
                    15: function e(t) {
                        if (t === 0 || r(t % 100, 2, 10)) return "few";
                        if (r(t % 100, 11, 19)) return "many";
                        if (t == 1) return "one";
                        return "other"
                    },
                    16: function e(t) {
                        if (t % 10 == 1 && t != 11) return "one";
                        return "other"
                    },
                    17: function e(t) {
                        if (t == 3) return "few";
                        if (t === 0) return "zero";
                        if (t == 6) return "many";
                        if (t == 2) return "two";
                        if (t == 1) return "one";
                        return "other"
                    },
                    18: function e(t) {
                        if (t === 0) return "zero";
                        if (r(t, 0, 2) && t !== 0 && t != 2) return "one";
                        return "other"
                    },
                    19: function e(t) {
                        if (r(t, 2, 10)) return "few";
                        if (r(t, 0, 1)) return "one";
                        return "other"
                    },
                    20: function e(t) {
                        if ((r(t % 10, 3, 4) || t % 10 == 9) && !(r(t % 100, 10, 19) || r(t % 100, 70, 79) || r(t % 100, 90, 99))) return "few";
                        if (t % 1e6 === 0 && t !== 0) return "many";
                        if (t % 10 == 2 && !n(t % 100, [12, 72, 92])) return "two";
                        if (t % 10 == 1 && !n(t % 100, [11, 71, 91])) return "one";
                        return "other"
                    },
                    21: function e(t) {
                        if (t === 0) return "zero";
                        if (t == 1) return "one";
                        return "other"
                    },
                    22: function e(t) {
                        if (r(t, 0, 1) || r(t, 11, 99)) return "one";
                        return "other"
                    },
                    23: function e(t) {
                        if (r(t % 10, 1, 2) || t % 20 === 0) return "one";
                        return "other"
                    },
                    24: function e(t) {
                        if (r(t, 3, 10) || r(t, 13, 19)) return "few";
                        if (n(t, [2, 12])) return "two";
                        if (n(t, [1, 11])) return "one";
                        return "other"
                    }
                };
                var a = t[e.replace(/-.*$/, "")];
                if (!(a in i)) {
                    console.warn("plural form unknown for [" + e + "]");
                    return function () {
                        return "other"
                    }
                }
                return i[a]
            }
            f.plural = function (e, t, n, r) {
                var i = parseFloat(t);
                if (isNaN(i)) return e;
                if (r != c) return e;
                if (!f._pluralRules) {
                    f._pluralRules = u(h)
                }
                var a = "[" + f._pluralRules(i) + "]";
                if (i === 0 && n + "[zero]" in d) {
                    e = d[n + "[zero]"][r]
                } else if (i == 1 && n + "[one]" in d) {
                    e = d[n + "[one]"][r]
                } else if (i == 2 && n + "[two]" in d) {
                    e = d[n + "[two]"][r]
                } else if (n + a in d) {
                    e = d[n + a][r]
                } else if (n + "[other]" in d) {
                    e = d[n + "[other]"][r]
                }
                return e
            };

            function w(e, t, n) {
                var r = d[e];
                if (!r) {
                    console.warn("#" + e + " is undefined.");
                    if (!n) {
                        return null
                    }
                    r = n
                }
                var i = {};
                for (var a in r) {
                    var o = r[a];
                    o = _(o, t, e, a);
                    o = P(o, t, e);
                    i[a] = o
                }
                return i
            }

            function _(e, t, n, r) {
                var i = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
                var a = i.exec(e);
                if (!a || !a.length) return e;
                var o = a[1];
                var s = a[2];
                var u;
                if (t && s in t) {
                    u = t[s]
                } else if (s in d) {
                    u = d[s]
                }
                if (o in f) {
                    var l = f[o];
                    e = l(e, u, n, r)
                }
                return e
            }

            function P(e, n, r) {
                var t = /\{\{\s*(.+?)\s*\}\}/g;
                return e.replace(t, function (e, t) {
                    if (n && t in n) {
                        return n[t]
                    }
                    if (t in d) {
                        return d[t]
                    }
                    console.log("argument {{" + t + "}} for #" + r + " is undefined.");
                    return e
                })
            }

            function S(e) {
                var t = m(e);
                if (!t.id) return;
                var n = w(t.id, t.args);
                if (!n) {
                    console.warn("#" + t.id + " is undefined.");
                    return
                }
                if (n[c]) {
                    if (k(e) === 0) {
                        e[c] = n[c]
                    } else {
                        var r = e.childNodes;
                        var i = false;
                        for (var a = 0, o = r.length; a < o; a++) {
                            if (r[a].nodeType === 3 && /\S/.test(r[a].nodeValue)) {
                                if (i) {
                                    r[a].nodeValue = ""
                                } else {
                                    r[a].nodeValue = n[c];
                                    i = true
                                }
                            }
                        }
                        if (!i) {
                            var s = l.createTextNode(n[c]);
                            e.insertBefore(s, e.firstChild)
                        }
                    }
                    delete n[c]
                }
                for (var u in n) {
                    e[u] = n[u]
                }
            }

            function k(e) {
                if (e.children) {
                    return e.children.length
                }
                if (typeof e.childElementCount !== "undefined") {
                    return e.childElementCount
                }
                var t = 0;
                for (var n = 0; n < e.childNodes.length; n++) {
                    t += e.nodeType === 1 ? 1 : 0
                }
                return t
            }

            function t(e) {
                e = e || l.documentElement;
                var t = a(e);
                var n = t.length;
                for (var r = 0; r < n; r++) {
                    S(t[r])
                }
                S(e)
            }
            return {
                get: function e(t, n, r) {
                    var i = t.lastIndexOf(".");
                    var a = c;
                    if (i > 0) {
                        a = t.substring(i + 1);
                        t = t.substring(0, i)
                    }
                    var o;
                    if (r) {
                        o = {};
                        o[a] = r
                    }
                    var s = w(t, n, o);
                    if (s && a in s) {
                        return s[a]
                    }
                    return "{{" + t + "}}"
                },
                getData: function e() {
                    return d
                },
                getText: function e() {
                    return r
                },
                getLanguage: function e() {
                    return h
                },
                setLanguage: function e(t, n) {
                    s(t, function () {
                        if (n) n()
                    })
                },
                getDirection: function e() {
                    var t = ["ar", "he", "fa", "ps", "ur"];
                    var n = h.split("-", 1)[0];
                    return t.indexOf(n) >= 0 ? "rtl" : "ltr"
                },
                translate: t,
                getReadyState: function e() {
                    return p
                },
                ready: function e(t) {
                    if (!t) {
                        return
                    } else if (p == "complete" || p == "interactive") {
                        n.setTimeout(function () {
                            t()
                        })
                    } else if (l.addEventListener) {
                        l.addEventListener("localized", function e() {
                            l.removeEventListener("localized", e);
                            t()
                        })
                    }
                }
            }
        }(window, document)
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.GenericScripting = void 0;
        t.docPropertiesLookup = f;
        var d = r(n(3));
        var h = n(7);

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                if (e) {
                    r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })
                }
                n.push.apply(n, r)
            }
            return n
        }

        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e] != null ? arguments[e] : {};
                if (e % 2) {
                    i(Object(n), true).forEach(function (e) {
                        a(t, e, n[e])
                    })
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                } else {
                    i(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
            }
            return t
        }

        function a(e, t, n) {
            if (t in e) {
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                })
            } else {
                e[t] = n
            }
            return e
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) r.writable = true;
                Object.defineProperty(e, r.key, r)
            }
        }

        function u(e, t, n) {
            if (t) s(e.prototype, t);
            if (n) s(e, n);
            return e
        }

        function l(e, t, n, r, i, a, o) {
            try {
                var s = e[a](o);
                var u = s.value
            } catch (e) {
                n(e);
                return
            }
            if (s.done) {
                t(u)
            } else {
                Promise.resolve(u).then(r, i)
            }
        }

        function c(s) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (t, n) {
                    var r = s.apply(e, o);

                    function i(e) {
                        l(r, t, n, i, a, "next", e)
                    }

                    function a(e) {
                        l(r, t, n, i, a, "throw", e)
                    }
                    i(undefined)
                })
            }
        }

        function f(e) {
            return v.apply(this, arguments)
        }

        function v() {
            v = c(d["default"].mark(function e(n) {
                var r, i, a, o, s, u, l, c, f;
                return d["default"].wrap(function e(t) {
                    while (1) {
                        switch (t.prev = t.next) {
                            case 0:
                                r = "", i = r.split("#")[0];
                                t.next = 3;
                                return n.getMetadata();
                            case 3:
                                a = t.sent;
                                o = a.info;
                                s = a.metadata;
                                u = a.contentDispositionFilename;
                                l = a.contentLength;
                                if (l) {
                                    t.next = 14;
                                    break
                                }
                                t.next = 11;
                                return n.getDownloadInfo();
                            case 11:
                                c = t.sent;
                                f = c.length;
                                l = f;
                            case 14:
                                return t.abrupt("return", p(p({}, o), {}, {
                                    baseURL: i,
                                    filesize: l,
                                    filename: u || (0, h.getPdfFilenameFromUrl)(r),
                                    metadata: s === null || s === void 0 ? void 0 : s.getRaw(),
                                    authors: s === null || s === void 0 ? void 0 : s.get("dc:creator"),
                                    numPages: n.numPages,
                                    URL: r
                                }));
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }
                }, e)
            }));
            return v.apply(this, arguments)
        }
        var g = function () {
            function t(e) {
                o(this, t);
                this._ready = (0, h.loadScript)(e, true).then(function () {
                    return window.pdfjsSandbox.QuickJSSandbox()
                })
            }
            u(t, [{
                key: "createSandbox",
                value: function () {
                    var t = c(d["default"].mark(function e(n) {
                        var r;
                        return d["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        r = t.sent;
                                        r.create(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "dispatchEventInSandbox",
                value: function () {
                    var t = c(d["default"].mark(function e(n) {
                        var r;
                        return d["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        r = t.sent;
                                        r.dispatchEvent(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "destroySandbox",
                value: function () {
                    var e = c(d["default"].mark(function e() {
                        var n;
                        return d["default"].wrap(function e(t) {
                            while (1) {
                                switch (t.prev = t.next) {
                                    case 0:
                                        t.next = 2;
                                        return this._ready;
                                    case 2:
                                        n = t.sent;
                                        n.nukeSandbox();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }
                        }, e, this)
                    }));

                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]);
            return t
        }();
        t.GenericScripting = g
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.PDFPrintService = u;
        var l = n(7);
        var r = n(2);
        var i = n(1);
        var o = n(48);
        var c = null;
        var a = null;

        function s(e, t, n, r, i, a) {
            var o = c.scratchCanvas;
            var s = i / l.PixelsPerInch.PDF;
            o.width = Math.floor(r.width * s);
            o.height = Math.floor(r.height * s);
            var u = o.getContext("2d");
            u.save();
            u.fillStyle = "rgb(255, 255, 255)";
            u.fillRect(0, 0, o.width, o.height);
            u.restore();
            return t.getPage(n).then(function (e) {
                var t = {
                    canvasContext: u,
                    transform: [s, 0, 0, s, 0, 0],
                    viewport: e.getViewport({
                        scale: 1,
                        rotation: r.rotation
                    }),
                    intent: "print",
                    annotationMode: l.AnnotationMode.ENABLE_STORAGE,
                    optionalContentConfigPromise: a
                };
                return e.render(t).promise
            })
        }

        function u(e, t, n, r) {
            var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
            var a = arguments.length > 5 ? arguments[5] : undefined;
            this.pdfDocument = e;
            this.pagesOverview = t;
            this.printContainer = n;
            this._printResolution = r || 150;
            this._optionalContentConfigPromise = i || e.getOptionalContentConfig();
            this.l10n = a;
            this.currentPage = -1;
            this.scratchCanvas = document.createElement("canvas")
        }
        u.prototype = {
            layout: function e() {
                this.throwIfInactive();
                var t = document.querySelector("body");
                t.setAttribute("data-pdfjsprinting", true);
                var n = this.pagesOverview.every(function (e) {
                    return e.width === this.pagesOverview[0].width && e.height === this.pagesOverview[0].height
                }, this);
                if (!n) {
                    console.warn("Not all pages have the same size. The printed " + "result may be incorrect!")
                }
                this.pageStyleSheet = document.createElement("style");
                var r = this.pagesOverview[0];
                this.pageStyleSheet.textContent = "@page { size: " + r.width + "pt " + r.height + "pt;}";
                t.appendChild(this.pageStyleSheet)
            },
            destroy: function e() {
                if (c !== this) {
                    return
                }
                this.printContainer.textContent = "";
                var t = document.querySelector("body");
                t.removeAttribute("data-pdfjsprinting");
                if (this.pageStyleSheet) {
                    this.pageStyleSheet.remove();
                    this.pageStyleSheet = null
                }
                this.scratchCanvas.width = this.scratchCanvas.height = 0;
                this.scratchCanvas = null;
                c = null;
                m().then(function () {
                    if (a.active !== "printServiceOverlay") {
                        return
                    }
                    a.close("printServiceOverlay")
                })
            },
            renderPages: function e() {
                var i = this;
                if (this.pdfDocument.isPureXfa) {
                    (0, o.getXfaHtmlForPrinting)(this.printContainer, this.pdfDocument);
                    return Promise.resolve()
                }
                var a = this.pagesOverview.length;
                var t = function e(t, n) {
                    i.throwIfInactive();
                    if (++i.currentPage >= a) {
                        p(a, a, i.l10n);
                        t();
                        return
                    }
                    var r = i.currentPage;
                    p(r, a, i.l10n);
                    s(i, i.pdfDocument, r + 1, i.pagesOverview[r], i._printResolution, i._optionalContentConfigPromise).then(i.useRenderedPage.bind(i)).then(function () {
                        e(t, n)
                    }, n)
                };
                return new Promise(t)
            },
            useRenderedPage: function e() {
                this.throwIfInactive();
                var n = document.createElement("img");
                var t = this.scratchCanvas;
                if ("toBlob" in t && !i.compatibilityParams.disableCreateObjectURL) {
                    t.toBlob(function (e) {
                        n.src = URL.createObjectURL(e)
                    })
                } else {
                    n.src = t.toDataURL()
                }
                var r = document.createElement("div");
                r.className = "printedPage";
                r.appendChild(n);
                this.printContainer.appendChild(r);
                return new Promise(function (e, t) {
                    n.onload = e;
                    n.onerror = t
                })
            },
            performPrint: function e() {
                var t = this;
                this.throwIfInactive();
                return new Promise(function (e) {
                    setTimeout(function () {
                        if (!t.active) {
                            e();
                            return
                        }
                        f.call(window);
                        setTimeout(e, 20)
                    }, 0)
                })
            },
            get active() {
                return this === c
            },
            throwIfInactive: function e() {
                if (!this.active) {
                    throw new Error("This print request was cancelled or completed.")
                }
            }
        };
        var f = window.print;
        window.print = function () {
            if (c) {
                console.warn("Ignored window.print() because of a pending print job.");
                return
            }
            m().then(function () {
                if (c) {
                    a.open("printServiceOverlay")
                }
            });
            try {
                d("beforeprint")
            } finally {
                if (!c) {
                    console.error("Expected print service to be initialized.");
                    m().then(function () {
                        if (a.active === "printServiceOverlay") {
                            a.close("printServiceOverlay")
                        }
                    });
                    return
                }
                var e = c;
                c.renderPages().then(function () {
                    return e.performPrint()
                })["catch"](function () {}).then(function () {
                    if (e.active) {
                        h()
                    }
                })
            }
        };

        function d(e) {
            var t = document.createEvent("CustomEvent");
            t.initCustomEvent(e, false, false, "custom");
            window.dispatchEvent(t)
        }

        function h() {
            if (c) {
                c.destroy();
                d("afterprint")
            }
        }

        function p(e, t, n) {
            var r = document.getElementById("printServiceOverlay");
            var i = Math.round(100 * e / t);
            var a = r.querySelector("progress");
            var o = r.querySelector(".relative-progress");
            a.value = i;
            n.get("print_progress_percent", {
                progress: i
            }).then(function (e) {
                o.textContent = e
            })
        }
        window.addEventListener("keydown", function (e) {
            if (e.keyCode === 80 && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
                e.preventDefault();
                if (e.stopImmediatePropagation) {
                    e.stopImmediatePropagation()
                } else {
                    e.stopPropagation()
                }
            }
        }, true);
        if ("onbeforeprint" in window) {
            var v = function e(t) {
                if (t.detail !== "custom" && t.stopImmediatePropagation) {
                    t.stopImmediatePropagation()
                }
            };
            window.addEventListener("beforeprint", v);
            window.addEventListener("afterprint", v)
        }
        var g;

        function m() {
            if (!g) {
                a = r.PDFViewerApplication.overlayManager;
                if (!a) {
                    throw new Error("The overlay manager has not yet been initialized.")
                }
                g = a.register("printServiceOverlay", document.getElementById("printServiceOverlay"), h, true);
                document.getElementById("printCancel").onclick = h
            }
            return g
        }
        r.PDFPrintServiceFactory.instance = {
            supportsPrinting: true,
            createPrintService: function e(t, n, r, i, a, o) {
                if (c) {
                    throw new Error("The print service is created and active.")
                }
                c = new u(t, n, r, i, a, o);
                return c
            }
        }
    }, (e, t, n) => {
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.getXfaHtmlForPrinting = i;
        var f = n(7);
        var d = n(20);
        var h = n(37);

        function p(t, e) {
            var n = typeof Symbol !== "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = u(t)) || e && t && typeof t.length === "number") {
                    if (n) t = n;
                    var r = 0;
                    var i = function e() {};
                    return {
                        s: i,
                        n: function e() {
                            if (r >= t.length) return {
                                done: true
                            };
                            return {
                                done: false,
                                value: t[r++]
                            }
                        },
                        e: function e(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a = true,
                o = false,
                s;
            return {
                s: function e() {
                    n = n.call(t)
                },
                n: function e() {
                    var t = n.next();
                    a = t.done;
                    return t
                },
                e: function e(t) {
                    o = true;
                    s = t
                },
                f: function e() {
                    try {
                        if (!a && n["return"] != null) n["return"]()
                    } finally {
                        if (o) throw s
                    }
                }
            }
        }

        function u(e, t) {
            if (!e) return;
            if (typeof e === "string") return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === "Object" && e.constructor) n = e.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(e);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }

        function r(e, t) {
            if (t == null || t > e.length) t = e.length;
            for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n]
            }
            return r
        }

        function i(e, t) {
            var n = t.allXfaHtml;
            var r = new d.SimpleLinkService;
            var i = Math.round(f.PixelsPerInch.PDF_TO_CSS_UNITS * 100) / 100;
            var a = p(n.children),
                o;
            try {
                for (a.s(); !(o = a.n()).done;) {
                    var s = o.value;
                    var u = document.createElement("div");
                    u.className = "xfaPrintedPage";
                    e.appendChild(u);
                    var l = new h.XfaLayerBuilder({
                        pageDiv: u,
                        pdfPage: null,
                        annotationStorage: t.annotationStorage,
                        linkService: r,
                        xfaHtml: s
                    });
                    var c = (0, f.getXfaPageViewport)(s, {
                        scale: i
                    });
                    l.render(c, "print")
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
        }
    }];
    var i = {};

    function s(e) {
        var t = i[e];
        if (t !== undefined) {
            return t.exports
        }
        var n = i[e] = {
            id: e,
            loaded: false,
            exports: {}
        };
        r[e](n, n.exports, s);
        n.loaded = true;
        return n.exports
    }(() => {
        s.nmd = e => {
            e.paths = [];
            if (!e.children) e.children = [];
            return e
        }
    })();
    var u = {};
    (() => {
        var e = u;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        Object.defineProperty(e, "PDFViewerApplication", {
            enumerable: true,
            get: function e() {
                return n.PDFViewerApplication
            }
        });
        Object.defineProperty(e, "PDFViewerApplicationOptions", {
            enumerable: true,
            get: function e() {
                return t.AppOptions
            }
        });
        var t = s(1);
        var n = s(2);
        var r = "2.12.313";
        var i = "a2ae56f39";
        window.PDFViewerApplication = n.PDFViewerApplication;
        window.PDFViewerApplicationOptions = t.AppOptions; {
            s(41)
        } {
            s(47)
        }

        function a() {
            var e = null;
            e = {
                container: document.getElementById("errorWrapper"),
                errorMessage: document.getElementById("errorMessage"),
                closeButton: document.getElementById("errorClose"),
                errorMoreInfo: document.getElementById("errorMoreInfo"),
                moreInfoButton: document.getElementById("errorShowMore"),
                lessInfoButton: document.getElementById("errorShowLess")
            };
            return {
                appContainer: document.body,
                mainContainer: document.getElementById("viewerContainer"),
                viewerContainer: document.getElementById("viewer"),
                eventBus: null,
                toolbar: {
                    container: document.getElementById("toolbarViewer"),
                    numPages: document.getElementById("numPages"),
                    pageNumber: document.getElementById("pageNumber"),
                    scaleSelect: document.getElementById("scaleSelect"),
                    customScaleOption: document.getElementById("customScaleOption"),
                    previous: document.getElementById("previous"),
                    next: document.getElementById("next"),
                    zoomIn: document.getElementById("zoomIn"),
                    zoomOut: document.getElementById("zoomOut"),
                    viewFind: document.getElementById("viewFind"),
                    openFile: document.getElementById("openFile"),
                    print: document.getElementById("print"),
                    presentationModeButton: document.getElementById("presentationMode"),
                    download: document.getElementById("download"),
                    viewBookmark: document.getElementById("viewBookmark")
                },
                secondaryToolbar: {
                    toolbar: document.getElementById("secondaryToolbar"),
                    toggleButton: document.getElementById("secondaryToolbarToggle"),
                    toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
                    presentationModeButton: document.getElementById("secondaryPresentationMode"),
                    openFileButton: document.getElementById("secondaryOpenFile"),
                    printButton: document.getElementById("secondaryPrint"),
                    downloadButton: document.getElementById("secondaryDownload"),
                    viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
                    firstPageButton: document.getElementById("firstPage"),
                    lastPageButton: document.getElementById("lastPage"),
                    pageRotateCwButton: document.getElementById("pageRotateCw"),
                    pageRotateCcwButton: document.getElementById("pageRotateCcw"),
                    cursorSelectToolButton: document.getElementById("cursorSelectTool"),
                    cursorHandToolButton: document.getElementById("cursorHandTool"),
                    scrollPageButton: document.getElementById("scrollPage"),
                    scrollVerticalButton: document.getElementById("scrollVertical"),
                    scrollHorizontalButton: document.getElementById("scrollHorizontal"),
                    scrollWrappedButton: document.getElementById("scrollWrapped"),
                    spreadNoneButton: document.getElementById("spreadNone"),
                    spreadOddButton: document.getElementById("spreadOdd"),
                    spreadEvenButton: document.getElementById("spreadEven"),
                    documentPropertiesButton: document.getElementById("documentProperties")
                },
                sidebar: {
                    outerContainer: document.getElementById("outerContainer"),
                    viewerContainer: document.getElementById("viewerContainer"),
                    toggleButton: document.getElementById("sidebarToggle"),
                    thumbnailButton: document.getElementById("viewThumbnail"),
                    outlineButton: document.getElementById("viewOutline"),
                    attachmentsButton: document.getElementById("viewAttachments"),
                    layersButton: document.getElementById("viewLayers"),
                    thumbnailView: document.getElementById("thumbnailView"),
                    outlineView: document.getElementById("outlineView"),
                    attachmentsView: document.getElementById("attachmentsView"),
                    layersView: document.getElementById("layersView"),
                    outlineOptionsContainer: document.getElementById("outlineOptionsContainer"),
                    currentOutlineItemButton: document.getElementById("currentOutlineItem")
                },
                sidebarResizer: {
                    outerContainer: document.getElementById("outerContainer"),
                    resizer: document.getElementById("sidebarResizer")
                },
                findBar: {
                    bar: document.getElementById("findbar"),
                    toggleButton: document.getElementById("viewFind"),
                    findField: document.getElementById("findInput"),
                    highlightAllCheckbox: document.getElementById("findHighlightAll"),
                    caseSensitiveCheckbox: document.getElementById("findMatchCase"),
                    entireWordCheckbox: document.getElementById("findEntireWord"),
                    findMsg: document.getElementById("findMsg"),
                    findResultsCount: document.getElementById("findResultsCount"),
                    findPreviousButton: document.getElementById("findPrevious"),
                    findNextButton: document.getElementById("findNext")
                },
                passwordOverlay: {
                    overlayName: "passwordOverlay",
                    container: document.getElementById("passwordOverlay"),
                    label: document.getElementById("passwordText"),
                    input: document.getElementById("password"),
                    submitButton: document.getElementById("passwordSubmit"),
                    cancelButton: document.getElementById("passwordCancel")
                },
                documentProperties: {
                    overlayName: "documentPropertiesOverlay",
                    container: document.getElementById("documentPropertiesOverlay"),
                    closeButton: document.getElementById("documentPropertiesClose"),
                    fields: {
                        fileName: document.getElementById("fileNameField"),
                        fileSize: document.getElementById("fileSizeField"),
                        title: document.getElementById("titleField"),
                        author: document.getElementById("authorField"),
                        subject: document.getElementById("subjectField"),
                        keywords: document.getElementById("keywordsField"),
                        creationDate: document.getElementById("creationDateField"),
                        modificationDate: document.getElementById("modificationDateField"),
                        creator: document.getElementById("creatorField"),
                        producer: document.getElementById("producerField"),
                        version: document.getElementById("versionField"),
                        pageCount: document.getElementById("pageCountField"),
                        pageSize: document.getElementById("pageSizeField"),
                        linearized: document.getElementById("linearizedField")
                    }
                },
                errorWrapper: e,
                printContainer: document.getElementById("printContainer"),
                openFileInputName: "fileInput",
                debuggerScriptPath: "./debugger.js"
            }
        }

        function o() {
            var e = a();
            var t = document.createEvent("CustomEvent");
            t.initCustomEvent("webviewerloaded", true, true, {
                source: window
            });
            try {
                parent.document.dispatchEvent(t)
            } catch (e) {
                console.error("webviewerloaded: ".concat(e));
                document.dispatchEvent(t)
            }
            n.PDFViewerApplication.run(e)
        }
        if (document.blockUnblockOnload) {
            document.blockUnblockOnload(true)
        }
        if (document.readyState === "interactive" || document.readyState === "complete") {
            o()
        } else {
            document.addEventListener("DOMContentLoaded", o, true)
        }
    })()
})();
