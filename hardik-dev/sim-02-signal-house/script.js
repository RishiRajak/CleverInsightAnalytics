(function () {
  const K = window.CIAKit, C = K.C, { $, $$, esc, icon, todo, pad } = K;
  K.copy(C.heroes.signal);

  $("#status").textContent = C.status;
  $("#ico-arrow").innerHTML = icon("arrow", 16);
  $("#resp").textContent = C.contact.responseTime;
  $("#foot-tag").textContent = C.brand.tagline;
  $("#trust").innerHTML = ["Founder-led delivery", "KPI systems, not vanity charts", "NDA-first · weekly demos"].map((t) => `<li>${esc(t)}</li>`).join("");

  K.marquee($("#stack"), C.stack, (s) => `<span>${esc(s)}</span>`);

  /* manifesto — words light up on scroll */
  const m = $("#manifesto");
  m.innerHTML = C.manifesto.split(" ").map((w) => `<span>${esc(w)}</span>`).join(" ");
  const words = $$("span", m);
  function lit() {
    if (K.REDUCED) return words.forEach((w) => w.classList.add("on"));
    const r = m.getBoundingClientRect(), vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.25)));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle("on", i < n));
  }
  addEventListener("scroll", lit, { passive: true }); lit();

  /* services accordion (exclusive) */
  $("#svc-list").innerHTML = C.services
    .map((s, i) => `<details class="svc" name="svc"${i === 0 ? " open" : ""} data-reveal style="--d:${i * 0.04}s">
      <summary><span class="no">${pad(i + 1)}</span><h3>${esc(s.name)}</h3><span class="plus" aria-hidden="true"></span></summary>
      <div class="svc-body"><p>${esc(s.blurb)}</p>
      <ul>${s.items.map((x) => `<li>${icon("check", 18)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <div class="outs"><small>Deliverables</small>${s.deliverables.map((d) => `<span>${esc(d)}</span>`).join("")}</div></div></details>`)
    .join("");
  $$(".svc").forEach((d) => d.addEventListener("toggle", () => { if (d.open) $$(".svc").forEach((o) => o !== d && (o.open = false)); }));

  /* stats */
  $("#stats").innerHTML = K.stats()
    .map((s) => `<div class="bstat" data-reveal${todo(s.todo)}><b><span data-count="${s.value}" data-suffix="${esc(s.suffix || "")}">0${esc(s.suffix || "")}</span></b><span>${esc(s.label)}</span></div>`)
    .join("");

  /* process */
  $("#steps").innerHTML = C.process
    .map((p, i) => `<li data-reveal style="--d:${i * 0.06}s"><div class="n">${p.n}</div><div><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p><span class="o">${esc(p.out)}</span></div></li>`)
    .join("");

  /* work */
  $("#mag").innerHTML = C.projects
    .map((p, i) => `<article class="pj" data-reveal style="--d:${(i % 3) * 0.08}s"${todo(p.todo)}>
      <div class="cover" aria-hidden="true">${K.cover(i)}</div>
      <div class="pb"><span class="cat">${esc(p.category)} · ${esc(p.year)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      ${p.metrics && p.metrics.length ? `<div class="mets">${p.metrics.map((x) => `<div><b>${esc(x.v)}</b><small>${esc(x.k)}</small></div>`).join("")}</div>` : ""}
      <div class="stk">${p.stack.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
      <span class="soon">Case study coming soon ${icon("arrow", 14)}</span></div></article>`)
    .join("");

  /* industries */
  $("#inds").innerHTML = C.industries.map((x) => `<li>${esc(x)}</li>`).join("");
  $("#inds").setAttribute("data-todo", "Confirm / trim industries to real experience");

  /* people */
  const links = (t) => {
    const L = [["linkedin", "LinkedIn"], ["github", "GitHub"], ["portfolio", "Portfolio"]].filter(([k]) => t.links[k]).map(([k, l]) => `<a href="${esc(t.links[k])}" target="_blank" rel="noopener">${l}</a>`);
    return L.length ? L.join("") : `<span class="soon">Portfolio coming soon</span>`;
  };
  $("#people").innerHTML = C.team
    .map((t, i) => `<article class="person" data-reveal style="--d:${i * 0.1}s"${todo(t.todo)}>
      <div class="portrait" aria-hidden="${t.photo ? "false" : "true"}">${t.photo ? `<img src="${esc(t.photo)}" alt="${esc(t.name)}" loading="lazy"/>` : esc(K.initials(t.name))}</div>
      <div class="pbody"><h3>${esc(t.name)}</h3><div class="prole">${esc(t.role)}</div><p>${esc(t.bio)}</p>
      <div class="sk">${t.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div><div class="ml">${links(t)}</div></div></article>`)
    .join("");
  /* subtle 3D tilt */
  if (!K.REDUCED && matchMedia("(hover:hover)").matches) {
    $$(".person").forEach((c) => {
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
      });
      c.addEventListener("pointerleave", () => (c.style.transform = ""));
    });
  }

  /* plans */
  $("#plans").innerHTML = C.engagement
    .map((p, i) => `<article class="plan${p.featured ? " feat" : ""}" data-reveal style="--d:${i * 0.1}s"${todo(p.todo)}>
      <span class="len">${esc(p.length)}</span><h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>
      <ul>${p.points.map((x) => `<li>${icon("check", 18)}<span>${esc(x)}</span></li>`).join("")}</ul>
      <a class="pill" href="#contact" data-book>Discuss this</a></article>`)
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

  K.boot();
})();
