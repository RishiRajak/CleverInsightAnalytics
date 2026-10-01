/* Shared helpers for all simulations. Exposes window.CIAKit */
(function () {
  const C = window.CIA;
  const REVIEW = new URLSearchParams(location.search).has("review");
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  /* "Hello [world]" -> Hello <em>world</em> */
  const hl = (s) => esc(s).replace(/\[(.+?)\]/g, "<em>$1</em>");
  const todo = (t) => (t ? ` data-todo="${esc(t)}"` : "");
  const initials = (n) => String(n).split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const pad = (n) => String(n).padStart(2, "0");

  /* ---------- icons (stroke, 24px grid) ---------- */
  const ICONS = {
    layers: '<path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
    code: '<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
    cloud: '<path d="M17.5 19a4.5 4.5 0 1 0-1.3-8.8A6 6 0 0 0 4.5 12 3.5 3.5 0 0 0 6 19h11.5Z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ext: '<path d="M7 17 17 7M8 7h9v9"/>',
  };
  const icon = (n, s = 24) =>
    `<svg class="ico" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ICONS.spark}</svg>`;

  /* ---------- computed data ---------- */
  const counts = () => ({
    pillars: C.services.length,
    capabilities: C.services.reduce((a, s) => a + s.items.length, 0),
  });
  const stats = () => {
    const k = counts();
    return C.stats.map((s) => (s.auto ? { value: k[s.auto], suffix: s.suffix || "", label: s.label, todo: s.todo } : s));
  };
  const socials = () =>
    Object.entries(C.social)
      .filter(([, v]) => v)
      .map(([k, v]) => ({ key: k, url: v, label: { linkedin: "LinkedIn", github: "GitHub", x: "X", upwork: "Upwork", clutch: "Clutch" }[k] || k }));

  /* ---------- project cover art (pure SVG, uses currentColor) ---------- */
  const cover = (i) => {
    const k = i % 6;
    const head = '<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">';
    let body = "";
    if (k === 0) {
      const h = [40, 70, 55, 95, 80, 120, 100, 140, 115, 150, 130, 165];
      body = h.map((v, x) => `<rect x="${14 + x * 25}" y="${170 - v}" width="15" height="${v}" rx="3" fill="currentColor" opacity="${0.25 + x * 0.06}"/>`).join("");
    } else if (k === 1) {
      body =
        '<path d="M0 140 C40 120 60 150 100 110 S160 90 200 70 S270 40 320 30 V180 H0Z" fill="currentColor" opacity=".14"/>' +
        '<path d="M0 140 C40 120 60 150 100 110 S160 90 200 70 S270 40 320 30" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
        '<circle cx="200" cy="70" r="6" fill="currentColor"/>';
    } else if (k === 2) {
      body =
        '<circle cx="160" cy="90" r="52" stroke="currentColor" stroke-width="18" opacity=".18"/>' +
        '<circle cx="160" cy="90" r="52" stroke="currentColor" stroke-width="18" stroke-dasharray="190 400" stroke-linecap="round" transform="rotate(-90 160 90)"/>' +
        '<circle cx="160" cy="90" r="24" stroke="currentColor" stroke-width="8" stroke-dasharray="70 400" opacity=".6" transform="rotate(40 160 90)"/>';
    } else if (k === 3) {
      const cols = [50, 140, 230, 300];
      const rows = [[40, 100, 150], [60, 130], [40, 100, 150], [90]];
      let l = "", n = "";
      cols.forEach((x, c) => rows[c].forEach((y, r) => {
        if (c < 3) rows[c + 1].forEach((y2) => (l += `<path d="M${x} ${y} L${cols[c + 1]} ${y2}" stroke="currentColor" opacity=".18"/>`));
        n += `<circle cx="${x}" cy="${y}" r="${8 - c}" fill="currentColor" opacity="${0.5 + r * 0.15}"/>`;
      }));
      body = l + n;
    } else if (k === 4) {
      for (let r = 0; r < 6; r++) for (let c = 0; c < 16; c++)
        body += `<rect x="${12 + c * 19}" y="${14 + r * 26}" width="15" height="20" rx="4" fill="currentColor" opacity="${(((c * 7 + r * 13) % 10) / 12 + 0.08).toFixed(2)}"/>`;
    } else {
      let s = 7;
      for (let p = 0; p < 46; p++) {
        s = (s * 9301 + 49297) % 233280;
        const x = (s / 233280) * 300 + 10;
        s = (s * 9301 + 49297) % 233280;
        const y = (s / 233280) * 150 + 15;
        body += `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${2 + (p % 4)}" fill="currentColor" opacity="${(0.25 + (p % 5) * 0.14).toFixed(2)}"/>`;
      }
    }
    return head + body + "</svg>";
  };

  /* ---------- behaviours ---------- */
  function copy(obj, root = document) {
    $$("[data-copy]", root).forEach((el) => { const v = obj[el.dataset.copy]; if (v != null) el.textContent = v; });
    $$("[data-copy-html]", root).forEach((el) => { const v = obj[el.dataset.copyHtml]; if (v != null) el.innerHTML = hl(v); });
  }

  function reveal() {
    const els = $$("[data-reveal]");
    if (REDUCED || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => {
      /* Anything already on screen is revealed immediately (also works if the tab is
         in the background, where IntersectionObserver callbacks are deferred). */
      const r = e.getBoundingClientRect();
      if (r.top < innerHeight * 0.95 && r.bottom > 0) { e.classList.add("in"); return; }
      io.observe(e);
    });
  }

  function countUp() {
    $$("[data-count]").forEach((el) => {
      const to = +el.dataset.count, suf = el.dataset.suffix || "";
      if (REDUCED) { el.textContent = to + suf; return; }
      const io = new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now(), dur = 1400;
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.6 });
      io.observe(el);
    });
  }

  function spotlight(sel) {
    $$(sel).forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", e.clientX - r.left + "px");
        el.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  }

  function menu(btn, nav) {
    if (!btn || !nav) return;
    const set = (o) => { nav.classList.toggle("open", o); btn.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("menu-open", o); };
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", () => set(!nav.classList.contains("open")));
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  }

  function progress(el) {
    if (!el) return;
    const f = () => {
      const h = document.documentElement;
      el.style.transform = `scaleX(${Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight))})`;
    };
    addEventListener("scroll", f, { passive: true });
    f();
  }

  function marquee(el, items, render) {
    if (!el) return;
    const html = items.map(render).join("");
    el.innerHTML = `<div class="track">${html}${html}</div>`;
    $$(".track > *", el).forEach((n, i) => { if (i >= items.length) n.setAttribute("aria-hidden", "true"); });
  }

  function form(f) {
    if (!f) return;
    const status = $(".form-status", f);
    const say = (m, ok) => { if (status) { status.textContent = m; status.dataset.ok = ok ? "1" : "0"; } };
    f.addEventListener("submit", async (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(f));
      if (d.company_site) return; // honeypot
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(d.email || "").trim());
      const nameOk = String(d.name || "").trim().length > 1;
      $$("input[name=name],input[name=email]", f).forEach((i) => i.removeAttribute("aria-invalid"));
      if (!nameOk || !emailOk) {
        const bad = $(!nameOk ? "input[name=name]" : "input[name=email]", f);
        bad.setAttribute("aria-invalid", "true");
        bad.focus();
        say(!nameOk ? "Please tell us your name." : "Please enter a valid work email.", false);
        return;
      }
      const subject = `Project enquiry — ${d.name || "new lead"}`;
      const body = [`Name: ${d.name || ""}`, `Email: ${d.email || ""}`, `Company: ${d.company || ""}`, `Interested in: ${d.service || ""}`, `Budget: ${d.budget || ""}`, "", d.message || ""].join("\n");
      if (C.contact.formEndpoint) {
        try {
          const r = await fetch(C.contact.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
          if (!r.ok) throw new Error("bad");
          f.reset();
          say(`Thanks — we'll reply ${C.contact.responseTime}.`, true);
        } catch (_) {
          say(`Something went wrong. Please email ${C.contact.email} directly.`, false);
        }
        return;
      }
      location.href = `mailto:${C.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      say("Opening your email app… (Form endpoint not connected yet — preview mode.)", true);
    });
  }

  function schema() {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: C.brand.name,
      url: "https://" + C.brand.domain,
      email: C.contact.email,
      description: C.brand.tagline,
      sameAs: socials().map((s) => s.url),
      makesOffer: C.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  /* Review mode: outlines every placeholder and lists what info is needed. */
  function review() {
    const css = document.createElement("style");
    css.textContent = `
      .cia-rbtn{position:fixed;left:14px;bottom:14px;z-index:9999;font:600 12px/1 system-ui,sans-serif;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:#111827;color:#fff;cursor:pointer;opacity:.85}
      .cia-rbtn:hover{opacity:1}
      body.cia-review [data-todo]{outline:2px dashed #f59e0b !important;outline-offset:4px}
      .cia-rpanel{position:fixed;left:14px;bottom:60px;z-index:9999;width:min(340px,calc(100vw - 28px));max-height:52vh;overflow:auto;background:#111827;color:#f9fafb;border:1px solid #f59e0b;border-radius:14px;padding:14px 16px;font:13px/1.45 system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.5)}
      .cia-rpanel h4{font-size:13px;margin-bottom:8px;color:#fbbf24}
      .cia-rpanel li{margin:0 0 6px 16px}
    `;
    document.head.appendChild(css);
    const btn = document.createElement("button");
    btn.className = "cia-rbtn";
    btn.type = "button";
    btn.textContent = REVIEW ? "Exit review mode" : "Review mode";
    btn.addEventListener("click", () => {
      const u = new URL(location.href);
      REVIEW ? u.searchParams.delete("review") : u.searchParams.set("review", "1");
      location.href = u.toString();
    });
    document.body.appendChild(btn);
    if (!REVIEW) return;
    document.body.classList.add("cia-review");
    const uniq = {};
    $$("[data-todo]").forEach((n) => { const k = n.dataset.todo; uniq[k] = (uniq[k] || 0) + 1; });
    const p = document.createElement("div");
    p.className = "cia-rpanel";
    p.innerHTML = `<h4>Info needed from founders</h4><ul>${Object.entries(uniq).map(([k, n]) => `<li>${esc(k)}${n > 1 ? ` <small>(×${n})</small>` : ""}</li>`).join("")}</ul><h4 style="margin-top:10px">Master checklist</h4><ul>${C.todo.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    document.body.appendChild(p);
  }

  function boot(opts = {}) {
    $$("[data-year]").forEach((e) => (e.textContent = new Date().getFullYear()));
    const cta = C.contact.calendly;
    $$("[data-book]").forEach((a) => { if (cta) { a.href = cta; a.target = "_blank"; a.rel = "noopener"; } });
    reveal();
    countUp();
    spotlight(opts.spot || ".spot");
    menu($(".menu-btn"), $(".links"));
    progress($(".progress"));
    form($(".contact-form"));
    schema();
    review();
  }

  window.CIAKit = { C, REVIEW, REDUCED, $, $$, esc, hl, todo, initials, pad, icon, cover, copy, counts, stats, socials, marquee, boot };
})();
