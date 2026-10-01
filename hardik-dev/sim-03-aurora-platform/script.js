(function () {
  const K = window.CIAKit, C = K.C, { $, $$, esc, icon, todo, pad } = K;
  K.copy(C.heroes.aurora);

  $("#status").textContent = C.status;
  $("#ico-arrow").innerHTML = icon("arrow", 18);
  $("#resp").textContent = C.contact.responseTime;
  $("#foot-tag").textContent = C.brand.tagline;

  /* stack marquee: two counter-moving rows */
  const half = Math.ceil(C.stack.length / 2);
  K.marquee($("#stack1"), C.stack.slice(0, half), (s) => `<span>${esc(s)}</span>`);
  K.marquee($("#stack2"), C.stack.slice(half), (s) => `<span>${esc(s)}</span>`);

  /* stats */
  $("#stats").innerHTML = K.stats()
    .map((s) => `<div class="stat spot" data-reveal${todo(s.todo)}><b><span data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</span></b><span class="l">${esc(s.label)}</span></div>`)
    .join("");

  /* bento */
  $("#bento").innerHTML = C.services
    .map((s, i) => `<article class="bc spot" data-reveal style="--d:${(i % 3) * 0.08}s">
      <div><div class="bic">${icon(s.icon, 24)}</div></div>
      <div><h3>${esc(s.name)}</h3><p>${esc(s.blurb)}</p></div>
      <ul>${s.items.map((x) => `<li>${icon("check", 16)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <div class="outr">${s.deliverables.map((d) => `<span>${esc(d)}</span>`).join("")}</div></article>`)
    .join("");

  /* timeline with scroll-linked progress */
  const tl = $("#tl");
  tl.innerHTML = C.process
    .map((p, i) => `<li data-n="${p.n}" data-reveal style="--d:${i * 0.05}s"><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><span class="o">${esc(p.out)}</span></li>`)
    .join("");
  const items = $$("li", tl);
  function prog() {
    const r = tl.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
    tl.style.setProperty("--p", K.REDUCED ? 1 : p.toFixed(3));
    items.forEach((li) => li.classList.toggle("hit", li.getBoundingClientRect().top < vh * 0.6));
  }
  addEventListener("scroll", prog, { passive: true }); prog();

  /* work rail */
  $("#rail").innerHTML = C.projects
    .map((p, i) => `<article class="pj spot"${todo(p.todo)}>
      <div class="cover" aria-hidden="true">${K.cover(i)}</div>
      <div class="pb"><span class="cat">${esc(p.category)} · ${esc(p.year)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      ${p.metrics && p.metrics.length ? `<div class="mets">${p.metrics.map((x) => `<div><b>${esc(x.v)}</b><small>${esc(x.k)}</small></div>`).join("")}</div>` : ""}
      <div class="stk">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
      <span class="soon">Case study coming soon ${icon("arrow", 14)}</span></div></article>`)
    .join("");
  const rail = $("#rail");
  const step = () => Math.min(420, rail.clientWidth * 0.85);
  $("#next").addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
  $("#prev").addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  rail.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") rail.scrollBy({ left: step(), behavior: "smooth" });
    if (e.key === "ArrowLeft") rail.scrollBy({ left: -step(), behavior: "smooth" });
  });

  /* industries */
  $("#inds").innerHTML = C.industries.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#inds").setAttribute("data-todo", "Confirm / trim industries to real experience");

  /* team */
  const links = (m) => {
    const L = [["linkedin", "LinkedIn"], ["github", "GitHub"], ["portfolio", "Portfolio"]].filter(([k]) => m.links[k]).map(([k, l]) => `<a href="${esc(m.links[k])}" target="_blank" rel="noopener">${l}</a>`);
    return L.length ? L.join("") : `<span class="soon">Portfolio coming soon</span>`;
  };
  $("#crew").innerHTML = C.team
    .map((m, i) => `<article class="member spot" data-reveal style="--d:${i * 0.1}s"${todo(m.todo)}>
      <div class="avatar"><div>${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" loading="lazy"/>` : esc(K.initials(m.name))}</div></div>
      <h3>${esc(m.name)}</h3><div class="role">${esc(m.role)}</div><p>${esc(m.bio)}</p>
      <div class="skills">${m.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div><div class="mlinks">${links(m)}</div></article>`)
    .join("");

  /* plans */
  $("#plans").innerHTML = C.engagement
    .map((p, i) => `<article class="plan${p.featured ? " feat" : " spot"}" data-reveal style="--d:${i * 0.1}s"${todo(p.todo)}>
      <span class="len">${esc(p.length)}</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>
      <ul>${p.points.map((x) => `<li>${icon("check", 18)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <a class="${p.featured ? "glow" : "ghost"}" href="#contact" data-book>Discuss this</a></article>`)
    .join("");

  /* testimonials: real only, or samples in review mode */
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

  /* product mock: tabs + gentle autoplay until the visitor interacts */
  const tabs = $$("#app .app-tabs button"), panes = $$("#app .pane");
  let cur = 0, timer, userTouched = false;
  function select(i, focus) {
    cur = i;
    tabs.forEach((t, j) => { t.setAttribute("aria-selected", j === i); t.tabIndex = j === i ? 0 : -1; });
    panes.forEach((p, j) => { p.hidden = j !== i; p.classList.toggle("on", j === i); });
    if (focus) tabs[i].focus();
  }
  tabs.forEach((t, i) => t.addEventListener("click", () => { userTouched = true; clearInterval(timer); select(i); }));
  $("#app .app-tabs").addEventListener("keydown", (e) => {
    let i = cur;
    if (e.key === "ArrowRight") i = (cur + 1) % tabs.length; else if (e.key === "ArrowLeft") i = (cur - 1 + tabs.length) % tabs.length; else return;
    e.preventDefault(); userTouched = true; clearInterval(timer); select(i, true);
  });
  if (!K.REDUCED) {
    const app = $("#app");
    const start = () => { if (!userTouched) timer = setInterval(() => select((cur + 1) % tabs.length), 5200); };
    new IntersectionObserver(([e]) => { clearInterval(timer); if (e.isIntersecting) start(); }, { threshold: 0.4 }).observe(app);
    app.addEventListener("pointerenter", () => clearInterval(timer));
    app.addEventListener("pointerleave", start);
  }

  K.boot();
})();
