/* =========================================================================
   multipage · shell.js   (vanilla, no build)

   The SHARED CHROME for every page: app bar, cross-page nav, footer and the
   detail <dialog>. It also owns global state (language + theme) and exposes a
   tiny toolkit on window.LDW that each page's app.js reuses.

   Loaded on EVERY page BEFORE app.js. It:
     1. reads the language from <html lang> and the theme from localStorage,
     2. injects app bar + nav + footer + dialog around <main id="page">,
     3. wires the theme toggle and points the language link at this page's
        counterpart in the other language,
     4. highlights the current page (from <body data-page="...">).

   Language belongs to the URL, not to the visitor: the Chinese pages live at
   the root and the English ones under /en/, so switching language is a
   navigation rather than an in-place repaint. Theme still persists in
   localStorage (an origin-wide store) and survives moving between pages.
   ========================================================================= */
(function () {
  "use strict";

  var META = window.SITE_META || { title: {}, subtitle: {}, footer: {} };
  var PAGES = Array.isArray(window.SITE_PAGES) ? window.SITE_PAGES : [];

  /* ---------- chrome i18n (page content strings live in the data) ---------- */
  var I18N = {
    en: { close: "Close", menu: "Pages", skip: "Skip to content", chapters: "Chapters",
          prev: "Previous", next: "Next", contents: "Contents" },
    zh: { close: "關閉", menu: "頁面", skip: "跳到內容", chapters: "章節",
          prev: "上一章", next: "下一章", contents: "目錄" }
  };

  /* ---------- sandbox-safe localStorage ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- global state ----------
     The URL decides the language, so <html lang> is what we read. localStorage
     must not seed it: a crawler has no localStorage and would always be handed
     the fallback, which is how the English half of the site ended up with no
     address of its own — and why a first-time visitor landing on a Chinese page
     used to watch it repaint itself into English. Writing the choice back is
     gone too; the address carries it now. */
  function langFromDocument() {
    var declared = (document.documentElement.getAttribute("lang") || "en").toLowerCase();
    return declared.indexOf("zh") === 0 ? "zh" : "en";
  }

  /* the same page in the other language — mirror the path, never guess */
  var TWIN_DIR = "/en";
  function altLangHref() {
    var path = location.pathname || "/";
    if (path === TWIN_DIR || path.indexOf(TWIN_DIR + "/") === 0) {
      return path.slice(TWIN_DIR.length) || "/";
    }
    return TWIN_DIR + path;
  }

  /* Theme: an explicit choice (saved by the toggle) wins; otherwise follow the
     OS. Nothing is written until the visitor actually toggles, so a first visit
     keeps tracking prefers-color-scheme instead of freezing whatever it was. */
  function systemTheme() {
    try { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
    catch (e) { return "light"; }
  }
  var savedTheme = lsGet("theme");
  var state = {
    lang:  langFromDocument(),
    theme: savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme()
  };

  /* ---------- helpers shared with app.js ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }
  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  function r(n) { return Math.round(n * 100) / 100; }

  /* Chapter numbers: every page after home is a chapter, in SITE_PAGES order. */
  function roman(n) {
    var out = "", map = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    map.forEach(function (m) { while (n >= m[0]) { out += m[1]; n -= m[0]; } });
    return out;
  }
  function chapters() { return PAGES.filter(function (p) { return p.slug !== "home"; }); }
  function chapterNo(p) {
    var list = chapters(), i = list.indexOf(p);
    return i === -1 ? "" : roman(i + 1);
  }

  /* The site's own five-petal glyph (drawn here, not taken from the game). */
  function flower(cls) {
    var petals = "";
    for (var i = 0; i < 5; i++) {
      petals += '<ellipse cx="0" cy="-6.2" rx="3.7" ry="5.6" transform="rotate(' + (i * 72) + ')"/>';
    }
    return '<svg class="flower' + (cls ? " " + cls : "") + '" viewBox="-12 -12 24 24" aria-hidden="true" focusable="false">' +
      '<g fill="currentColor">' + petals + '</g><circle r="2.7" class="flower__eye"/></svg>';
  }

  function pageHref(p) { return p.slug === "home" ? "index.html" : p.slug + ".html"; }
  function currentSlug() { return document.body.getAttribute("data-page") || "home"; }
  function currentPage() {
    var slug = currentSlug();
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].slug === slug) return PAGES[i];
    return PAGES[0] || null;
  }

  /* =======================================================================
     CHROME INJECTION — app bar, nav, footer, dialog around <main id="page">
     ===================================================================== */
  function injectChrome() {
    var main = document.getElementById("page");
    if (!main) return;

    /* skip link */
    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#page";
    skip.id = "skipLink";
    document.body.insertBefore(skip, document.body.firstChild);

    /* app bar */
    var appbar = document.createElement("header");
    appbar.className = "appbar";
    appbar.innerHTML =
      '<div class="appbar__inner">' +
        '<a class="brand" href="index.html">' +
          flower("brand__logo") +
          '<span class="brand__name" id="brandName"></span>' +
        '</a>' +
        '<div class="appbar__actions">' +
          '<a class="icon-btn" id="langToggle" href="' + escapeHtml(altLangHref()) + '" ' +
             'hreflang="' + (state.lang === "en" ? "zh-Hant" : "en") + '" rel="alternate" ' +
             'title="Language" aria-label="' +
             (state.lang === "en" ? "切換到中文版 / View in Chinese" : "View in English / 切換到英文版") + '">' +
            '<span class="material-symbols-rounded icon-btn__icon" aria-hidden="true">translate</span>' +
            '<span class="icon-btn__txt" id="langLabel"></span>' +
          '</a>' +
          '<button class="icon-btn" id="themeToggle" type="button" title="Theme" aria-label="Toggle theme / 切換主題">' +
            '<span class="material-symbols-rounded" id="themeIcon">dark_mode</span>' +
          '</button>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(appbar, main);

    /* cross-page nav */
    var nav = document.createElement("nav");
    nav.className = "pagenav";
    nav.id = "pageNav";
    nav.innerHTML =
      '<div class="pagenav__inner">' +
        '<div class="pagenav__strip" id="pageNavInner"></div>' +
        '<details class="pagenav__drawer" id="pageDrawer">' +
          '<summary class="pagenav__summary"><span class="pagenav__here" id="pageHere"></span>' +
            '<span class="pagenav__toggle"><span id="drawerLabel"></span>' +
            '<span class="material-symbols-rounded" aria-hidden="true">expand_more</span></span></summary>' +
          '<ol class="pagenav__list" id="pageDrawerList"></ol>' +
        '</details>' +
      '</div>';
    document.body.insertBefore(nav, main);

    /* footer */
    var footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = '<p id="footerText"></p>' +
      '<p class="footer__lang" id="footerLang"></p>' +
      '<div class="profile-links" style="display:flex;gap:12px;justify-content:center;align-items:center;margin-top:10px">' +
        '<a class="icon-btn" href="https://www.peteraim.com" target="_blank" rel="noopener" title="Home" aria-label="Back to peteraim.com / 返回首頁">' +
          '<span class="material-symbols-rounded">home</span>' +
        '</a>' +
        '<a class="icon-btn" href="https://www.linkedin.com/in/ai-med/" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn (opens in new tab)">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>' +
        '</a>' +
      '</div>';
    main.parentNode.insertBefore(footer, main.nextSibling);

    /* The static HTML carries a plain "other language" link after the scripts
       so crawlers and no-JS readers have it. With JS, fold it into the footer
       instead of leaving it floating under the page chrome. */
    var alt = document.querySelector(".lang-alt-link");
    var slot = document.getElementById("footerLang");
    if (alt && slot) {
      var link = alt.querySelector("a");
      if (link) slot.appendChild(link);
      alt.parentNode.removeChild(alt);
    }

    /* shared detail dialog (used by card layouts) */
    var dialog = document.createElement("dialog");
    dialog.className = "dialog";
    dialog.id = "dialog";
    dialog.setAttribute("aria-labelledby", "dialogTitle");
    dialog.innerHTML =
      '<div class="dialog__bar">' +
        '<span class="dialog__spacer"></span>' +
        '<button class="icon-btn" id="dialogClose" type="button" aria-label="Close / 關閉">' +
          '<span class="material-symbols-rounded">close</span>' +
        '</button>' +
      '</div>' +
      '<div class="dialog__body" id="dialogBody"></div>';
    document.body.appendChild(dialog);

    /* dialog wiring (shared close behaviour; deep links handled by app.js) */
    document.getElementById("dialogClose").addEventListener("click", function () {
      if (dialog.open) dialog.close();
    });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  }

  function navLabel(p) { return t(p.nav) || t(p.title); }

  function paintNav() {
    var strip = document.getElementById("pageNavInner");
    var list = document.getElementById("pageDrawerList");
    var hereEl = document.getElementById("pageHere");
    if (!strip) return;
    var here = currentSlug();
    var stripHtml = "", listHtml = "";
    PAGES.forEach(function (p) {
      var on = p.slug === here, no = chapterNo(p);
      var cur = on ? ' aria-current="page"' : "";
      stripHtml += '<a class="navlink' + (on ? " navlink--active" : "") + '" href="' + escapeHtml(pageHref(p)) + '"' + cur +
        ' title="' + escapeHtml(t(p.title)) + '">' +
        (no ? '<span class="navlink__no">' + no + "</span>" : "") +
        "<span>" + escapeHtml(navLabel(p)) + "</span></a>";
      listHtml += '<li><a class="drawer-link tone--' + escapeHtml(p.tone || "red") + (on ? " drawer-link--active" : "") +
        '" href="' + escapeHtml(pageHref(p)) + '"' + cur + ">" +
        '<span class="drawer-link__no">' + (no || flower()) + "</span>" +
        '<span class="drawer-link__title">' + escapeHtml(t(p.title)) + "</span></a></li>";
    });
    strip.innerHTML = stripHtml;
    if (list) list.innerHTML = listHtml;
    var page = currentPage();
    if (hereEl && page) {
      var no = chapterNo(page);
      hereEl.innerHTML = (no ? '<span class="navlink__no">' + no + "</span>" : "") + escapeHtml(navLabel(page));
    }
    /* keep the active link in view inside the strip without scrolling the page */
    var active = strip.querySelector(".navlink--active");
    if (active && strip.scrollWidth > strip.clientWidth) {
      strip.scrollLeft = active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2;
    }
    updateFades();
  }

  /* Edge fades only on the side that actually has more links to scroll to. */
  function updateFades() {
    var strip = document.getElementById("pageNavInner");
    if (!strip) return;
    var max = strip.scrollWidth - strip.clientWidth;
    strip.classList.toggle("is-fade-start", max > 2 && strip.scrollLeft > 2);
    strip.classList.toggle("is-fade-end", max > 2 && strip.scrollLeft < max - 2);
  }

  function wireNav() {
    var strip = document.getElementById("pageNavInner");
    if (strip) {
      strip.addEventListener("scroll", updateFades, { passive: true });
      window.addEventListener("resize", updateFades);
    }
    var drawer = document.getElementById("pageDrawer");
    if (!drawer) return;
    document.addEventListener("click", function (e) {
      if (drawer.open && !drawer.contains(e.target)) drawer.open = false;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.open) {
        drawer.open = false;
        var sum = drawer.querySelector("summary");
        if (sum) sum.focus();
      }
    });
  }

  /* ---------- chrome text in the active language ---------- */
  function refreshChrome() {
    var page = currentPage();
    var siteTitle = t(META.title);
    var pageTitle = page ? t(page.title) : "";
    document.title = pageTitle ? pageTitle + " · " + siteTitle : siteTitle;

    var brand = document.getElementById("brandName");
    if (brand) brand.textContent = siteTitle;
    var foot = document.getElementById("footerText");
    if (foot) foot.textContent = t(META.footer);
    var skip = document.getElementById("skipLink");
    if (skip) skip.textContent = ui("skip");
    var nav = document.getElementById("pageNav");
    if (nav) nav.setAttribute("aria-label", ui("menu"));
    var dl = document.getElementById("drawerLabel");
    if (dl) dl.textContent = ui("chapters");
    var dc = document.getElementById("dialogClose");
    if (dc) dc.setAttribute("aria-label", ui("close"));
    paintNav();
  }

  /* =======================================================================
     THEME + LANGUAGE
     ===================================================================== */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
  }
  /* The toggle is a link now, so it is labelled with the language it leads TO,
     not the one already on screen. */
  function applyLangChrome() {
    var label = document.getElementById("langLabel");
    if (label) label.textContent = state.lang === "en" ? "中" : "EN";
  }

  function wire() {
    document.getElementById("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      lsSet("theme", state.theme);
      applyTheme();
    });
    /* no saved choice yet: keep following the OS if it changes mid-visit */
    try {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        if (lsGet("theme")) return;
        state.theme = e.matches ? "dark" : "light";
        applyTheme();
      });
    } catch (e) { /* old browsers: ignore */ }
    wireNav();
  }

  /* =======================================================================
     PUBLIC TOOLKIT (app.js uses this)
     ===================================================================== */
  window.LDW = {
    ready: false,          // flipped true once the chrome (incl. #dialog) is injected
    state: state,
    t: t, ui: ui, escapeHtml: escapeHtml, r: r,
    lsGet: lsGet, lsSet: lsSet,
    pages: PAGES, meta: META,
    currentPage: currentPage, currentSlug: currentSlug, pageHref: pageHref,
    chapters: chapters, chapterNo: chapterNo, flower: flower, navLabel: navLabel,
    refreshChrome: refreshChrome,
    dialog: function () { return document.getElementById("dialog"); }
  };

  /* =======================================================================
     INIT
     ===================================================================== */
  function init() {
    injectChrome();
    applyTheme();
    applyLangChrome();
    refreshChrome();
    wire();
    window.LDW.ready = true;
    document.dispatchEvent(new CustomEvent("ldw:shell-ready"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
