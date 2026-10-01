(function () {
  const K = window.CIAKit, C = K.C, { $, $$, esc, icon, todo, pad } = K;
  const H = C.heroes.cmd;
  K.copy(H);

  $("#status").textContent = C.status;
  $("#ico-arrow").innerHTML = icon("arrow", 18);
  $("#hero-chips").innerHTML = ["Founder-led delivery", "Weekly demos", "NDA-first"].map((t) => `<li>${esc(t)}</li>`).join("");
  $("#resp").textContent = C.contact.responseTime;
  $("#foot-tag").textContent = C.brand.tagline;

  /* marquee */
  K.marquee($("#stack"), C.stack, (s) => `<span>${esc(s)}</span>`);

  /* stats */
  $("#stats").innerHTML = K.stats()
    .map((s) => `<div class="stat" data-reveal${todo(s.todo)}><b><span data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</span></b><span>${esc(s.label)}</span></div>`)
    .join("");

  /* services console */
  const con = $("#console");
  con.innerHTML = `<div class="tabs" role="tablist" aria-orientation="vertical">${C.services
    .map((s, i) => `<button class="tab" role="tab" id="tab-${s.id}" aria-selected="${i === 0}" aria-controls="svc-panel" tabindex="${i === 0 ? 0 : -1}" data-i="${i}">${icon(s.icon, 20)}<span>${esc(s.name)}</span><em>${pad(i + 1)}</em></button>`)
    .join("")}</div><div class="panel-body" id="svc-panel" role="tabpanel"></div>`;
  const body = $("#svc-panel");
  function show(i, focus) {
    const s = C.services[i];
    $$(".tab", con).forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
    body.setAttribute("aria-labelledby", "tab-" + s.id);
    body.style.animation = "none"; body.offsetHeight; body.style.animation = "";
    body.innerHTML = `<div class="big-ico">${icon(s.icon, 26)}</div><h3>${esc(s.name)}</h3><p class="blurb">${esc(s.blurb)}</p>
      <ul class="tick">${s.items.map((x) => `<li>${icon("check", 18)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <div class="out"><small>Typical deliverables</small><ul>${s.deliverables.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
    if (focus) $$(".tab", con)[i].focus();
  }
  show(0);
  con.addEventListener("click", (e) => { const t = e.target.closest(".tab"); if (t) show(+t.dataset.i); });
  con.addEventListener("keydown", (e) => {
    const t = e.target.closest(".tab"); if (!t) return;
    const n = C.services.length; let i = +t.dataset.i;
    if (["ArrowDown", "ArrowRight"].includes(e.key)) i = (i + 1) % n;
    else if (["ArrowUp", "ArrowLeft"].includes(e.key)) i = (i - 1 + n) % n;
    else return;
    e.preventDefault(); show(i, true);
  });

  /* process */
  $("#steps").innerHTML = C.process
    .map((p, i) => `<li class="step" data-reveal style="--d:${i * 0.08}s"><div class="n">${p.n}</div><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><span class="o">${esc(p.out)}</span></li>`)
    .join("");

  /* work */
  const cats = ["All", ...new Set(C.projects.map((p) => p.category))];
  $("#filters").innerHTML = cats.map((c, i) => `<button class="fbtn" type="button" aria-pressed="${i === 0}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("#cards").innerHTML = C.projects
    .map((p, i) => `<article class="pcard card-fx spot" data-cat="${esc(p.category)}" data-reveal style="--d:${(i % 3) * 0.08}s"${todo(p.todo)}>
      <div class="cover" aria-hidden="true">${K.cover(i)}</div>
      <div class="pbody"><span class="tag">${esc(p.category)} · ${esc(p.year)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      ${p.metrics && p.metrics.length ? `<div class="metrics">${p.metrics.map((m) => `<div><b>${esc(m.v)}</b><small>${esc(m.k)}</small></div>`).join("")}</div>` : ""}
      <div class="stack">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
      <span class="soon">Case study coming soon ${icon("arrow", 14)}</span></div></article>`)
    .join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".fbtn"); if (!b) return;
    $$(".fbtn").forEach((x) => x.setAttribute("aria-pressed", x === b));
    $$(".pcard").forEach((c) => (c.hidden = b.dataset.c !== "All" && c.dataset.cat !== b.dataset.c));
  });

  /* industries */
  $("#industry-list").innerHTML = C.industries.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#industry-list").setAttribute("data-todo", "Confirm / trim industries to real experience");

  /* team */
  const links = (m) => {
    const L = [["linkedin", "LinkedIn"], ["github", "GitHub"], ["portfolio", "Portfolio"]]
      .filter(([k]) => m.links[k]).map(([k, l]) => `<a href="${esc(m.links[k])}" target="_blank" rel="noopener">${l} ${icon("ext", 14)}</a>`);
    return L.length ? L.join("") : `<span class="soon">Portfolio coming soon</span>`;
  };
  $("#crew").innerHTML = C.team
    .map((m, i) => `<article class="member card-fx spot" data-reveal style="--d:${i * 0.1}s"${todo(m.todo)}>
      <div class="avatar">${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy"/>` : esc(K.initials(m.name))}</div>
      <h3>${esc(m.name)}</h3><div class="role">${esc(m.role)}</div><p>${esc(m.bio)}</p>
      <div class="skills">${m.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div><div class="mlinks">${links(m)}</div></article>`)
    .join("");

  /* plans */
  $("#plans").innerHTML = C.engagement
    .map((p, i) => `<article class="plan${p.featured ? " feat" : ""}" data-reveal style="--d:${i * 0.1}s"${todo(p.todo)}>
      <span class="len">${esc(p.length)}</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>
      <ul>${p.points.map((x) => `<li>${icon("check", 18)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <a class="btn${p.featured ? "" : " ghost"}" href="#contact" data-book>Discuss this</a></article>`)
    .join("");

  /* testimonials: only real ones, or samples in review mode */
  const quotes = C.testimonials.filter((t) => !t.sample || K.REVIEW);
  if (quotes.length) {
    $("#voices").hidden = false;
    $("#quotes").innerHTML = quotes.map((t) => `<blockquote${todo(t.todo)}>“${esc(t.quote)}”<cite>${esc(t.name)}<small>${esc(t.role)}</small></cite></blockquote>`).join("");
  }

  /* faq */
  $("#faq-list").innerHTML = C.faq.map((f, i) => `<details${i === 0 ? " open" : ""}${todo(f.todo)}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

  /* contact */
  $("#facts").innerHTML = `
    <li>${icon("mail", 20)}<a href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a></li>
    <li${todo(C.contact.phoneTodo)}>${icon("phone", 20)}<span>${esc(C.contact.phone)}</span></li>
    <li>${icon("pin", 20)}<span>${esc(C.contact.location)}</span></li>
    <li>${icon("clock", 20)}<span>${esc(C.contact.hours)}</span></li>`;
  $("#service-select").innerHTML = `<option value="">Not sure yet</option>` + C.services.map((s) => `<option>${esc(s.name)}</option>`).join("") + `<option>Full platform (multiple pillars)</option>`;
  $("#social").innerHTML = K.socials().map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("");

  /* hero canvas: animated platform data flow */
  function flow(cv) {
    const ctx = cv.getContext("2d");
    const cols = ["Sources", "Ingest", "Warehouse", "Models", "Insights"], per = [4, 3, 3, 3, 2];
    let W = 0, Hh = 0, nodes = [], links = [], parts = [], visible = true, raf;
    const mk = () => ({ l: links[Math.floor(Math.random() * links.length)], t: Math.random(), s: 0.004 + Math.random() * 0.007 });
    function layout() {
      const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
      W = r.width; Hh = r.height; cv.width = W * d; cv.height = Hh * d; ctx.setTransform(d, 0, 0, d, 0, 0);
      nodes = cols.map((_, c) => Array.from({ length: per[c] }, (_, r2) => ({ x: ((c + 0.5) / cols.length) * W, y: 26 + ((r2 + 0.5) / per[c]) * (Hh - 62) })));
      links = [];
      for (let c = 0; c < cols.length - 1; c++) nodes[c].forEach((a) => nodes[c + 1].forEach((b) => links.push({ a, b })));
      parts = Array.from({ length: 46 }, mk);
    }
    function draw(now) {
      ctx.clearRect(0, 0, W, Hh);
      ctx.lineWidth = 1; ctx.strokeStyle = "rgba(62,224,255,.11)";
      links.forEach((l) => { ctx.beginPath(); ctx.moveTo(l.a.x, l.a.y); ctx.lineTo(l.b.x, l.b.y); ctx.stroke(); });
      parts.forEach((p) => {
        const x = p.l.a.x + (p.l.b.x - p.l.a.x) * p.t, y = p.l.a.y + (p.l.b.y - p.l.a.y) * p.t;
        ctx.fillStyle = p.t > 0.5 ? "#b6ff5a" : "#3ee0ff";
        ctx.shadowColor = ctx.fillStyle; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(x, y, 2.1, 0, 7); ctx.fill();
        ctx.shadowBlur = 0;
        if (!K.REDUCED) { p.t += p.s; if (p.t >= 1) Object.assign(p, mk(), { t: 0 }); }
      });
      nodes.forEach((col, c) => col.forEach((n, i) => {
        const pulse = K.REDUCED ? 0 : (Math.sin(now / 600 + c * 1.3 + i) + 1) / 2;
        ctx.fillStyle = "#0b1626"; ctx.strokeStyle = `rgba(62,224,255,${0.45 + pulse * 0.5})`; ctx.lineWidth = 1.4;
        ctx.beginPath(); (ctx.roundRect ? ctx.roundRect(n.x - 9, n.y - 9, 18, 18, 5) : ctx.rect(n.x - 9, n.y - 9, 18, 18)); ctx.fill(); ctx.stroke();
        ctx.fillStyle = `rgba(62,224,255,${0.35 + pulse * 0.5})`; ctx.fillRect(n.x - 3, n.y - 3, 6, 6);
      }));
      ctx.fillStyle = "#6b7f9e"; ctx.font = "11px 'IBM Plex Mono',monospace"; ctx.textAlign = "center";
      cols.forEach((l, c) => ctx.fillText(l.toUpperCase(), ((c + 0.5) / cols.length) * W, Hh - 12));
    }
    function loop(now) { if (visible) draw(now); raf = requestAnimationFrame(loop); }
    layout();
    if (K.REDUCED) { draw(0); } else { raf = requestAnimationFrame(loop); }
    new ResizeObserver(() => { layout(); if (K.REDUCED) draw(0); }).observe(cv);
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(cv);
  }
  flow($("#flow"));

  K.boot();
})();
