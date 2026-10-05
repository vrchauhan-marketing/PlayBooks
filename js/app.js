/* =========================================================
   Playbooks — 3D library app
   Routes:  #/                      shelf (stack of books)
            #/book/<slug>           book detail
            #/book/<slug>/read[/n]  open book reader (optionally at chapter n)
   ========================================================= */
(function () {
  "use strict";

  const SITE = window.SITE || { name: "Playbooks", tagline: "", about: "" };
  const BOOKS = (window.PLAYBOOKS || []).filter((b, i, all) => all.findIndex((x) => x.slug === b.slug) === i).reverse(); // last added = top of stack; duplicates ignored
  const GHOSTS = window.FORTHCOMING || [];
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const nextFrame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  /* ---------------- SVG helpers ---------------- */
  const LOGO = `<svg viewBox="0 0 24 36" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
      <rect x="2.5" y="3" width="19" height="8.5" rx="1.6"/><rect x="4.5" y="13.75" width="17" height="8.5" rx="1.6"/>
      <rect x="1" y="24.5" width="21.5" height="8.5" rx="1.6"/><path d="M6 7.25h7M8 18h6M5 28.75h9" stroke-width="1.2"/></svg>`;

  function hash(str) { let h = 2166136261; for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; }
  function rng(seed) { return () => ((seed = Math.imul(seed ^ (seed >>> 15), 2246822507) + 0x9e3779b9 >>> 0) / 4294967296); }

  /** Generative cover pattern. W/H are viewBox units (aspect matters). */
  function pattern(book, W, H, opts = {}) {
    const kind = book.pattern || "contour";
    const col = book.accent || book.ink;
    const r = rng(hash(book.slug + (opts.salt || "")));
    let body = "";
    if (kind === "contour") {
      const n = opts.lines || 34, step = 2;
      const f1 = 0.035 + r() * 0.03, f2 = 0.08 + r() * 0.05, ph = r() * 6;
      for (let i = 0; i <= n; i++) {
        const y0 = (i / n) * H * 1.1 - H * 0.05, A = H / n * (1.4 + r() * 1.4);
        let d = "";
        for (let x = 0; x <= W; x += step) {
          const y = y0 + A * Math.sin(x * f1 + i * 0.32 + ph) + A * 0.45 * Math.sin(x * f2 - i * 0.21 + ph * 2);
          d += (x ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(2);
        }
        body += `<path d="${d}" stroke-opacity="${(0.35 + (i % 3) * 0.25).toFixed(2)}"/>`;
      }
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" fill="none" stroke="${col}" stroke-width="${opts.sw || 0.45}">${body}</svg>`;
    }
    if (kind === "rings") {
      const cx = W * (0.7 + r() * 0.3), cy = H * (0.15 + r() * 0.2);
      for (let i = 1; i < 40; i++) body += `<circle cx="${cx}" cy="${cy}" r="${i * Math.max(W, H) / 26}"/>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="none" stroke="${col}" stroke-width="${opts.sw || 0.45}" stroke-opacity=".7">${body}</svg>`;
    }
    if (kind === "grid") {
      const s = W / 14;
      for (let x = 0; x <= W; x += s) body += `<path d="M${x} 0V${H}"/>`;
      for (let y = 0; y <= H; y += s) body += `<path d="M0 ${y}H${W}"/>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="none" stroke="${col}" stroke-width="${opts.sw || 0.35}" stroke-opacity=".6">${body}</svg>`;
    }
    if (kind === "dots") {
      const s = W / 18;
      for (let x = s / 2; x < W; x += s) for (let y = s / 2; y < H; y += s) body += `<circle cx="${x}" cy="${y}" r="${s * (0.05 + r() * 0.05)}"/>`;
      return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="${col}" fill-opacity=".7">${body}</svg>`;
    }
    return "";
  }

  function vars(book) {
    let v = `--color:${book.color};--ink:${book.ink};--accent:${book.accent || book.ink};--accent-dark:${book.accentDark || book.color};`;
    if (book.paper) v += `--paper:${book.paper};`;
    if (book.paperInk) v += `--paper-ink:${book.paperInk};`;
    v += `--heading-ink:${book.headingInk || book.paperInk || "var(--paper-ink)"};`;
    if (book.font) v += `--book-font:${book.font};`;
    return v;
  }
  const PUB = SITE.publisher || SITE.name;
  const YEAR = SITE.copyrightYear || new Date().getFullYear();
  const copyLine = () => `© ${YEAR} ${esc(PUB)}. All rights reserved.`;
  const logoImg = (variant, cls = "") => {
    const src = variant === "light" ? SITE.logoLight : SITE.logoColor;
    return src ? `<img class="pub-logo ${cls}" src="${src}" alt="${esc(PUB)}">` : `<b class="${cls}">${esc(PUB)}</b>`;
  };
  const skin = (book) => (book && book.skin ? `skin-${book.skin}` : "");

  function coverArt(book) {
    if (book.coverImage) {
      return `<div class="cover-art cover-photo ${skin(book)}">
        <div class="cover-img" style="background-image:url('${book.coverImage}')"></div>
        <div class="cover-inner">
          <div class="cover-top"><span>No. ${esc(book.volume || "")}</span>${LOGO}</div>
          <div class="cover-block">
            ${book.eyebrow ? `<div class="cover-eyebrow">${esc(book.eyebrow)}</div>` : ""}
            <h2 class="cover-title">${esc(book.title)}</h2>
            ${book.subtitle ? `<div class="cover-sub">${esc(book.subtitle)}</div>` : ""}
            <div class="cover-bottom"><span>${esc(SITE.publisherShort || SITE.name)}</span><span>${esc(book.year || "")}</span></div>
          </div>
        </div>
      </div>`;
    }
    return `<div class="cover-art">
      <div class="cover-pattern">${pattern(book, 100, 150)}</div>
      <div class="cover-inner">
      <div class="cover-top"><span>No. ${esc(book.volume || "")}</span>${LOGO}</div>
      <div class="cover-title-wrap">
        <h2 class="cover-title">${esc(book.title)}</h2>
        ${book.subtitle ? `<div class="cover-sub">${esc(book.subtitle)}</div>` : ""}
      </div>
      <div class="cover-bottom"><span>${esc(SITE.publisherShort || SITE.name)}</span><span>${esc(book.year || "")}</span></div>
      </div>
    </div>`;
  }

  function book3D(book, ghost) {
    return `<div class="book3d ${ghost ? "" : skin(book)}" style="${ghost ? "" : vars(book)}">
      <div class="face f-spine">
        ${ghost ? "" : `<div class="spine-pattern">${pattern(book, 300, 46, { lines: 9, sw: 0.5, salt: "spine" })}</div>`}
        <span class="spine-author">${esc(ghost ? "Forthcoming" : book.author || "")}</span>
        <span class="spine-title">${esc(ghost ? book.title : book.spineTitle || book.title)}</span>
        <span class="spine-mark">${ghost ? "" : esc(book.volume || "")}${LOGO}</span>
      </div>
      <div class="face f-fore"></div>
      <div class="face f-top">${ghost ? "" : `<div class="cover-rot">${coverArt(book)}</div>`}</div>
      <div class="face f-bottom"></div>
      <div class="face f-left"></div>
      <div class="face f-right"></div>
    </div>`;
  }

  /* ---------------- Markdown → book HTML ---------------- */
  function chaptersOf(book) {
    return [...book.content.matchAll(/^#\s+(.+)$/gm)].map((m) => m[1].trim());
  }

  function bookHTML(book) {
    const md = window.marked ? window.marked.parse(book.content, { gfm: true }) :
      book.content.split(/\n{2,}/).map((p) => `<p>${esc(p)}</p>`).join("");
    const tmp = document.createElement("div");
    tmp.innerHTML = md;
    $$("h1", tmp).forEach((h, i) => {
      h.dataset.ch = i;
      h.insertAdjacentHTML("afterbegin", `<span class="ch-num">Chapter ${i + 1}</span>`);
      const img = (book.chapterImages || [])[i];
      if (img) h.insertAdjacentHTML("beforebegin", `<figure class="ch-photo"><img src="${esc(img)}" alt=""></figure>`);
    });
    $$("a[href^='http']", tmp).forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
    const chapters = chaptersOf(book);
    const front = `
      <section class="fm-title">
        <div class="fm-vol">${esc(SITE.name)} · No. ${esc(book.volume || "")}</div>
        <h2>${esc(book.title)}</h2>
        <div class="fm-sub">${esc(book.subtitle || "")}</div>
        <div class="fm-pub">
          ${logoImg("color", "fm-logo")}
          <span>Published by ${esc(PUB)} · ${esc(book.year || YEAR)}</span>
        </div>
      </section>
      <section class="fm-about fm-copyright">
        <p class="fm-c-title">${esc(book.title)}</p>
        <p>${esc(book.author || "")} · ${esc(SITE.name)}</p>
        <p class="fm-c-strong">Copyright ${copyLine()}</p>
        <p>${esc(SITE.rights || "")}</p>
        ${(book.legal || []).map((p) => `<p>${esc(p)}</p>`).join("")}
        ${SITE.disclaimer ? `<p>${esc(SITE.disclaimer)}</p>` : ""}
        ${book.credits ? `<p>${esc(book.credits)}</p>` : ""}
        <p>Published by ${esc(PUB)}${SITE.publisherUrl ? ` · ${esc(SITE.publisherUrl.replace(/^https?:\/\/(www\.)?/, ""))}` : ""}<br>${esc(book.edition || "First edition")}, ${esc(book.year || YEAR)}</p>
        ${logoImg("color", "fm-logo-sm")}
      </section>
      <section class="fm-toc">
        <h2>Contents</h2>
        ${chapters.map((c, i) => tocRow(c, i)).join("")}
      </section>`;
    const back = `
      <section class="bm-publisher">
        ${logoImg("color", "bm-logo")}
        <p class="bm-lead">${esc(book.title)} is published by ${esc(PUB)}.</p>
        ${book.backNote ? `<p>${esc(book.backNote)}</p>` : ""}
        ${SITE.publisherUrl ? `<p><a href="${SITE.publisherUrl}" target="_blank" rel="noopener">${esc(SITE.publisherUrl.replace(/^https?:\/\/(www\.)?/, ""))}</a></p>` : ""}
        <p class="bm-copy">${copyLine()}</p>
      </section>`;
    return front + tmp.innerHTML + `<p class="end-mark">✦</p>` + back;
  }
  const tocRow = (title, i, page = "") =>
    `<button class="toc-row" data-ch="${i}"><span class="tr-n">${String(i + 1).padStart(2, "0")}</span><span class="tr-t">${esc(title)}</span><span class="tr-p" data-ch-page="${i}">${page}</span></button>`;

  /* ---------------- Chrome: brand, rail, about ---------------- */
  $(".brand-mark").innerHTML = LOGO;
  $(".brand-name").textContent = SITE.name;
  $(".brand-tag").textContent = SITE.tagline;
  document.title = `${SITE.name} — ${SITE.tagline}`;
  $(".about-name").textContent = SITE.name;
  $(".about-text").textContent = SITE.about;
  $(".about-pub").innerHTML = `${logoImg("color", "about-logo")}<span>Published by ${esc(PUB)}. ${copyLine()}</span>`;
  $(".pub-link").innerHTML = `<span>Published by</span>${logoImg("light")}`;
  if (SITE.publisherUrl) $(".pub-link").href = SITE.publisherUrl;
  $(".site-foot").innerHTML = `${copyLine()}`;
  $(".help").addEventListener("click", () => $(".about").classList.add("is-open"));
  $(".about").addEventListener("click", (e) => { if (e.target === e.currentTarget || e.target.closest(".about-close")) $(".about").classList.remove("is-open"); });

  $(".rail-ticks").innerHTML =
    BOOKS.map((b) => `<a class="rail-tick" href="#/book/${b.slug}" data-slug="${b.slug}"><span>${esc(b.title)}</span></a>`).join("") +
    GHOSTS.map(() => `<i class="rail-tick is-ghost"></i>`).join("");

  /* ---------------- HOME ---------------- */
  const stack = $(".stack");
  stack.innerHTML =
    BOOKS.map((b) => `<a class="stack-item" href="#/book/${b.slug}" data-slug="${b.slug}" aria-label="${esc(b.title)}">${book3D(b)}</a>`).join("") +
    GHOSTS.map((g) => `<div class="stack-item is-ghost" aria-hidden="true">${book3D(g, true)}</div>`).join("");

  stack.addEventListener("click", async (e) => {
    const item = e.target.closest(".stack-item[data-slug]");
    if (!item) return;
    e.preventDefault();
    item.classList.add("is-picked");
    $(".view-home").classList.add("is-leaving");
    await wait(450);
    location.hash = `#/book/${item.dataset.slug}`;
  });

  window.addEventListener("pointermove", (e) => {
    if (!document.body.classList.contains("is-home")) return;
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    stack.style.setProperty("--ry", `${(x * 12).toFixed(2)}deg`);
    stack.style.setProperty("--rx", `${(-13 - y * 6).toFixed(2)}deg`);
  });

  async function showHome() {
    setPage(null);
    document.body.className = "is-home";
    const v = $(".view-home");
    v.classList.remove("is-leaving", "is-ready");
    $$(".stack-item").forEach((el, i) => { el.classList.remove("is-picked"); el.style.transitionDelay = `${i * 70}ms`; });
    await nextFrame();
    v.classList.add("is-ready");
    await wait(900);
    $$(".stack-item").forEach((el) => (el.style.transitionDelay = ""));
  }

  /* ---------------- DETAIL ---------------- */
  function setPage(book) {
    const s = document.documentElement.style;
    if (book) {
      s.setProperty("--page-bg", book.color);
      s.setProperty("--page-fg", book.ink);
      s.setProperty("--page-accent", book.accent || book.ink);
      s.setProperty("--page-font", book.font || "var(--serif)");
    } else {
      ["--page-bg", "--page-fg", "--page-accent", "--page-font"].forEach((k) => s.removeProperty(k));
    }
    $$(".rail-tick").forEach((t) => t.classList.toggle("is-active", !!book && t.dataset.slug === book.slug));
  }

  let currentDetail = null;
  async function showDetail(book) {
    setPage(book);
    document.body.className = `is-detail ${skin(book)}`;
    if (currentDetail === book.slug) return;
    currentDetail = book.slug;
    const chapters = chaptersOf(book);
    const words = book.content.replace(/<[^>]+>/g, " ").split(/\s+/).length;
    const v = $(".view-detail");
    v.classList.remove("detail-ready");
    v.innerHTML = `
      ${book.heroImage ? `<div class="detail-hero" style="background-image:url('${book.heroImage}')"></div>` : ""}
      ${book.notice ? `<div class="detail-notice">${book.notice}</div>` : ""}
      <div class="detail-scene" title="Open the book">
        <div class="book-float">${book3D(book)}</div>
        <span class="read-cue">Click the book to open it</span>
      </div>
      <div class="detail-info">
        <div>${book.eyebrow ? `<p class="d-eyebrow">${esc(book.eyebrow)}</p>` : ""}<h1>${esc(book.title)}</h1><p class="by">${esc(book.subtitle || "")}</p></div>
        <div class="btn-group"><button class="primary" data-read>Read the playbook</button><button data-read-ch="0">Start at chapter 1</button></div>
        <div class="desc">${(book.description || []).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <div class="list">${chapters.map((c, i) => `<button class="list-row" data-read-ch="${i}"><span class="lr-main"><span class="lr-num">${String(i + 1).padStart(2, "0")}</span>${esc(c)}</span><span class="lr-go">↗</span></button>`).join("")}</div>
        <dl class="meta">
          <dt>Volume</dt><dd>No. ${esc(book.volume || "")} · ${esc(book.author || "")}</dd>
          <dt>Chapters</dt><dd>${chapters.length}</dd>
          <dt>Reading time</dt><dd>About ${Math.max(1, Math.round(words / 230))} minutes</dd>
          <dt>Published</dt><dd>${esc(book.year || "")} · ${esc(PUB)}</dd>
        </dl>
        <p class="d-rights">${copyLine()}</p>
      </div>`;
    v.classList.add("detail-in");
    await nextFrame();
    v.classList.remove("detail-in");
    v.classList.add("detail-ready");
    window.scrollTo(0, 0);
  }

  $(".view-detail").addEventListener("click", (e) => {
    const slug = currentDetail;
    if (e.target.closest("[data-read], .detail-scene")) location.hash = `#/book/${slug}/read`;
    const ch = e.target.closest("[data-read-ch]");
    if (ch) location.hash = `#/book/${slug}/read/${+ch.dataset.readCh + 1}`;
  });
  window.addEventListener("pointermove", (e) => {
    const b = $(".view-detail .book3d");
    if (!b || !document.body.classList.contains("is-detail")) return;
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    b.style.setProperty("--ry", `${(-30 + x * 16).toFixed(2)}deg`);
    b.style.setProperty("--rx", `${(-48 - y * 10).toFixed(2)}deg`);
  });

  /* =========================================================
     READER
     ========================================================= */
  const R = {
    el: $(".reader"), book: null, open: false, busy: false,
    single: false, pos: 0, total: 0, step: 0, flowHTML: "", chStarts: [], chTitles: [],
  };
  const openBook = $(".open-book"), spread = $(".spread");
  const pageL = $(".page-left"), pageR = $(".page-right");

  function layoutReader() {
    const vw = innerWidth, vh = innerHeight;
    R.single = vw < 820;
    const navW = vw < 640 ? 60 : 130;
    const availH = vh - (vw < 640 ? 130 : 150) - 24;
    const availW = vw - navW - 24 - 16;
    let pw, ph;
    if (R.single) {
      pw = Math.min(availW, 520); ph = Math.min(availH, pw / 0.62);
      if (ph < pw / 0.75) pw = ph * 0.75;
    } else {
      ph = Math.min(availH, 900); pw = ph * 0.69;
      if (pw * 2 > availW) { pw = availW / 2; ph = pw / 0.69; }
    }
    pw = Math.floor(pw); ph = Math.floor(ph);
    const px = Math.round(pw * 0.1), py = Math.round(ph * 0.08);
    const cw = pw - px * 2, ch = ph - py * 2, gap = px * 2;
    const fs = Math.max(12.5, Math.min(17, ph / 40));
    const st = R.el.style;
    [["--pw", pw], ["--ph", ph], ["--px", px], ["--py", py], ["--cw", cw], ["--ch", ch], ["--gap", gap]].forEach(([k, v]) => st.setProperty(k, v + "px"));
    st.setProperty("--fsz", fs + "px");
    R.el.classList.toggle("is-single", R.single);
    R.step = cw + gap;
  }

  function paginate() {
    const m = $(".measure");
    m.innerHTML = `<div class="flow" style="--fs:var(--fsz)">${bookHTML(R.book)}<span class="end-marker"></span></div>`;
    const flow = m.firstElementChild;
    const col = (el) => Math.floor((el.offsetLeft + 1) / R.step);
    R.total = col($(".end-marker", flow)) + 1;
    R.chStarts = $$("h1[data-ch]", flow).map(col);
    R.chTitles = chaptersOf(R.book);
    $$("[data-ch-page]", flow).forEach((s) => (s.textContent = R.chStarts[+s.dataset.chPage] + 1));
    $(".end-marker", flow).remove();
    R.flowHTML = flow.innerHTML;
    m.innerHTML = "";
    $(".r-toc").innerHTML = `<h3>Contents <button aria-label="Close contents" data-toc-close>&times;</button></h3>` +
      R.chTitles.map((c, i) => tocRow(c, i, R.chStarts[i] + 1)).join("");
  }

  const chapterAt = (p) => { let c = -1; R.chStarts.forEach((s, i) => { if (p >= s) c = i; }); return c; };

  function pageEl(i) {
    const d = document.createElement("div");
    d.className = "pg";
    if (i < 0 || (i >= R.total && !R.single && i % 2 === 1)) {
      d.innerHTML = `<div class="pg-endpaper"><div class="cover-pattern">${pattern(R.book, 100, 150)}</div></div>`;
      return d;
    }
    if (i >= R.total) { d.classList.add("pg-blank"); return d; }
    const ch = chapterAt(i);
    const quiet = i < 3 || i === R.total - 1 || R.chStarts.includes(i);
    const isLeft = !R.single && i % 2 === 1;
    const head = quiet ? "" : isLeft
      ? `<div class="pg-head"><span>${esc(R.book.spineTitle || R.book.title)}</span><span></span></div>`
      : `<div class="pg-head"><span></span><span>${esc(R.chTitles[ch] || "")}</span></div>`;
    d.innerHTML = `${head}
      <div class="pg-win"><div class="flow" style="--fs:var(--fsz);transform:translateX(${-i * R.step}px)">${R.flowHTML}</div></div>
      ${i > 0 && i < R.total - 1 ? `<div class="pg-foot"><span>${esc(PUB)}</span><span>${i + 1}</span></div>` : ""}`;
    return d;
  }
  const fill = (slot, i) => slot.replaceChildren(pageEl(i));

  // spread mode: spread s shows pages (2s-1, 2s). single mode: pos is the page.
  const maxPos = () => (R.single ? R.total - 1 : Math.floor(R.total / 2));
  const firstPageOf = (pos) => (R.single ? pos : Math.max(0, 2 * pos - 1));
  const posOfPage = (p) => (R.single ? p : Math.floor((p + 1) / 2));

  function renderStatic() {
    if (R.single) fill(pageR, R.pos);
    else { fill(pageL, 2 * R.pos - 1); fill(pageR, 2 * R.pos); }
    updateChrome();
  }

  function updateChrome() {
    const p = firstPageOf(R.pos);
    $(".r-prev").disabled = R.pos <= 0;
    $(".r-next").disabled = R.pos >= maxPos();
    const last = R.single ? p + 1 : Math.min(R.total, 2 * R.pos + 1);
    $(".r-count").textContent = R.single || p === last - 1 ? `${p + 1} / ${R.total}` : `${p + 1}–${last} / ${R.total}`;
    $(".r-progress span").style.width = `${(R.pos / Math.max(1, maxPos())) * 100}%`;
    const ch = chapterAt(Math.max(0, R.single ? p : 2 * R.pos));
    $$(".r-toc .toc-row").forEach((r) => r.classList.toggle("is-current", +r.dataset.ch === ch));
  }

  function animateLeaf(leaf, to) {
    return new Promise((res) => {
      spread.appendChild(leaf);
      void leaf.offsetWidth; // commit the start state so the transition runs
      leaf.classList.add("is-turning");
      leaf.style.transform = to;
      let finished = false;
      const done = () => { if (finished) return; finished = true; leaf.removeEventListener("transitionend", onEnd); res(); };
      const onEnd = (e) => { if (e.target === leaf && e.propertyName === "transform") done(); };
      leaf.addEventListener("transitionend", onEnd);
      setTimeout(done, 1600);
    });
  }
  function makeLeaf(side, front, back) {
    const leaf = document.createElement("div");
    leaf.className = `leaf from-${side}`;
    const f = document.createElement("div"); f.className = "lf lf-front"; f.append(front);
    const b = document.createElement("div"); b.className = "lf lf-back"; b.append(back);
    leaf.append(f, b);
    return leaf;
  }

  async function go(target) {
    target = Math.max(0, Math.min(maxPos(), target));
    if (R.busy || target === R.pos) return;
    R.busy = true;
    const fwd = target > R.pos;
    if (R.single) {
      if (fwd) {
        const leaf = makeLeaf("right", pageEl(R.pos), pageEl(-2));
        fill(pageR, target);
        leaf.style.transition += ", opacity .95s";
        const p = animateLeaf(leaf, "rotateY(-180deg)");
        leaf.style.opacity = "0";
        await p; leaf.remove();
      } else {
        const leaf = makeLeaf("right", pageEl(target), pageEl(-2));
        leaf.style.transform = "rotateY(-180deg)"; leaf.style.opacity = "0";
        leaf.style.transition += ", opacity .6s";
        const p = animateLeaf(leaf, "rotateY(0deg)");
        leaf.style.opacity = "1";
        await p; fill(pageR, target); leaf.remove();
      }
    } else if (fwd) {
      const leaf = makeLeaf("right", pageEl(2 * R.pos), pageEl(2 * target - 1));
      fill(pageR, 2 * target);
      await animateLeaf(leaf, "rotateY(-180deg)");
      fill(pageL, 2 * target - 1); leaf.remove();
    } else {
      const leaf = makeLeaf("left", pageEl(2 * R.pos - 1), pageEl(2 * target));
      fill(pageL, 2 * target - 1);
      await animateLeaf(leaf, "rotateY(180deg)");
      fill(pageR, 2 * target); leaf.remove();
    }
    R.pos = target;
    updateChrome();
    R.busy = false;
  }

  async function openReader(book, chapter) {
    if (R.open && R.book === book) {
      if (chapter != null) go(posOfPage(R.chStarts[chapter] ?? 0));
      return;
    }
    R.book = book; R.open = true; R.busy = true;
    R.el.setAttribute("style", vars(book));
    R.el.className = `reader ${skin(book)}`;
    $(".r-title").textContent = book.title;
    layoutReader();
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
    paginate();
    R.pos = 0;
    renderStatic();

    // closed cover sitting on the right page
    openBook.classList.add("is-closed");
    const cover = document.createElement("div"); cover.innerHTML = coverArt(book);
    const leaf = makeLeaf("right", cover.firstElementChild, pageEl(-1));
    leaf.classList.add("is-cover");
    leaf.style.transitionDuration = "1.4s";
    spread.appendChild(leaf);
    R.el.classList.add("is-open");
    R.el.setAttribute("aria-hidden", "false");
    await wait(650);
    openBook.classList.remove("is-closed");
    if (R.single) { leaf.style.transition = "transform 1.2s var(--ease), opacity 1.2s"; leaf.style.opacity = "0"; }
    await animateLeaf(leaf, "rotateY(-180deg)");
    leaf.remove();
    R.busy = false;
    if (chapter != null && R.chStarts[chapter] != null) go(posOfPage(R.chStarts[chapter]));
  }

  function closeReader() {
    if (!R.open) return;
    R.open = false;
    R.el.classList.remove("is-open");
    R.el.setAttribute("aria-hidden", "true");
    $(".r-toc").classList.remove("is-open");
    setTimeout(() => { if (!R.open) { pageL.replaceChildren(); pageR.replaceChildren(); } }, 600);
  }

  // reader controls
  $(".r-next").addEventListener("click", () => go(R.pos + 1));
  $(".r-prev").addEventListener("click", () => go(R.pos - 1));
  $(".r-close").addEventListener("click", () => (location.hash = `#/book/${R.book.slug}`));
  $(".r-toc-btn").addEventListener("click", () => $(".r-toc").classList.toggle("is-open"));
  R.el.addEventListener("click", (e) => {
    if (e.target.closest("[data-toc-close]")) return $(".r-toc").classList.remove("is-open");
    const row = e.target.closest(".toc-row[data-ch]");
    if (row) { $(".r-toc").classList.remove("is-open"); return go(posOfPage(R.chStarts[+row.dataset.ch])); }
    if (e.target.closest(".r-toc, .reader-bar, .r-nav, a, button")) return;
    if (e.target.closest(".page-right")) go(R.pos + 1);
    else if (e.target.closest(".page-left")) go(R.pos - 1);
  });
  let touchX = null;
  $(".reader-stage").addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  $(".reader-stage").addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].clientX - touchX; touchX = null;
    if (Math.abs(dx) > 40) go(R.pos + (dx < 0 ? 1 : -1));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if ($(".about").classList.contains("is-open")) return $(".about").classList.remove("is-open");
      if ($(".r-toc").classList.contains("is-open")) return $(".r-toc").classList.remove("is-open");
      if (R.open) location.hash = `#/book/${R.book.slug}`;
      return;
    }
    if (!R.open) return;
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(R.pos + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(R.pos - 1); }
    if (e.key === "Home") go(0);
    if (e.key === "End") go(maxPos());
  });
  let resizeT;
  window.addEventListener("resize", () => {
    if (!R.open) return;
    clearTimeout(resizeT);
    resizeT = setTimeout(() => {
      const frac = firstPageOf(R.pos) / Math.max(1, R.total);
      layoutReader(); paginate();
      R.pos = Math.min(maxPos(), posOfPage(Math.round(frac * R.total)));
      renderStatic();
    }, 200);
  });

  /* ---------------- ROUTER ---------------- */
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "book") {
      const book = BOOKS.find((b) => b.slug === parts[1]);
      if (!book) return (location.hash = "#/");
      showDetail(book);
      if (parts[2] === "read") openReader(book, parts[3] ? Math.max(0, +parts[3] - 1) : null);
      else closeReader();
      return;
    }
    closeReader();
    currentDetail = null;
    showHome();
  }
  window.addEventListener("hashchange", route);
  route();
})();
