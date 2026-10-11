/* Orioles Hot Stove Desk — EXAMPLE speculation labeled; lore = verified public history */
(function () {
  "use strict";

  const LS_WATCH = "orioles-hot-stove-watches-v1";
  const LS_WISH = "orioles-hot-stove-wishlist-v1";
  const LS_NOTES = "orioles-hot-stove-notes-v1";
  const LS_TAB = "orioles-hot-stove-tab";

  /** EXAMPLE speculation — UI demos only, not presented as real rumors */
  const EXAMPLE_RUMORS = [
    {
      title: "EXAMPLE · Pitching depth talk",
      body: "Placeholder card for how a rumor board might look. No real trade or free-agent claim attached. Replace with links you trust — never treat this as news.",
    },
    {
      title: "EXAMPLE · Infield flexibility",
      body: "Demo text only. Public research on-box mentions crowded future infield commentary in general terms; this card invents no names or deals.",
    },
    {
      title: "EXAMPLE · Outfield defense focus",
      body: "Scaffolding for offseason themes fans discuss. Not a report. Check orioles.com / reputable beat writers for anything factual.",
    },
  ];

  /** Typical MLB calendar windows — not invented Orioles announcements */
  const TIMELINE = [
    {
      id: "gm",
      icon: "🗺",
      when: "Typically early–mid November",
      name: "GM Meetings",
      blurb: "General managers gather; early free-agent & trade conversations often begin.",
      detail:
        "Typical window on the MLB calendar (often Carlsbad / similar). Useful as a fan checkpoint for “talking season,” not a news wire. This desk does not invent Orioles-specific meeting outcomes.",
      bullets: [
        "Window label only — dates shift year to year",
        "No hire names or deal claims loaded here",
        "Pair with official club releases when they exist",
      ],
    },
    {
      id: "winter",
      icon: "❄️",
      when: "Typically early–mid December",
      name: "Winter Meetings",
      blurb: "Industry hub week — rumors peak; some clubs make real moves.",
      detail:
        "The Winter Meetings are a long-standing MLB calendar fixture. Anything you see in media during that week should be sourced — this app shows the window, not fabricated Orioles headlines.",
      bullets: [
        "High rumor volume in public media (verify elsewhere)",
        "Rule 5 Draft traditionally sits near this period",
        "EXAMPLE cards on Home are not Winter Meetings reports",
      ],
    },
    {
      id: "arb",
      icon: "⚖️",
      when: "Typically January–February",
      name: "Arbitration season",
      blurb: "Eligible players & clubs exchange figures / settle or hear cases.",
      detail:
        "Salary arbitration follows a published MLB calendar each winter. This milestone is the window label only — no salary figures or player-specific claims are invented here.",
      bullets: [
        "No invented dollar amounts",
        "Settlements vs hearings vary by club & year",
        "Use official MLB / club releases for real cases",
      ],
    },
    {
      id: "st",
      icon: "☀️",
      when: "Typically mid–late February",
      name: "Spring Training opens",
      blurb: "Pitchers & catchers, then full squad — Florida / Arizona camps.",
      detail:
        "Orioles historically train in Florida (Sarasota area in the modern era). Exact report dates are announced annually — treat this as the seasonal window, not a specific 2027 report day.",
      bullets: [
        "Camp city / complex announced by the club each year",
        "Exhibition slate published closer to spring",
        "Fan Desk wishlist is a good place to stash camp plans",
      ],
    },
    {
      id: "open",
      icon: "🏟",
      when: "Typically late March / early April",
      name: "Opening Day",
      blurb: "Regular season begins — Camden night returns for Baltimore.",
      detail:
        "Opening Day ends Hot Stove season for most fans. Schedule release and ticket windows are official club communications — not invented here.",
      bullets: [
        "Watch orioles.com for schedule & tickets",
        "This desk stays offline / localStorage-first",
        "Memory lane stays relevant year-round",
      ],
    },
  ];

  /** EXAMPLE roster slots — not a real 2026/27 roster */
  const BOARD_26 = [
    {
      group: "Battery (EXAMPLE)",
      slots: [
        { id: "c1", pos: "C", label: "Catcher A", hint: "EXAMPLE slot" },
        { id: "c2", pos: "C", label: "Catcher B", hint: "EXAMPLE slot" },
        { id: "sp1", pos: "SP", label: "Starter 1", hint: "EXAMPLE slot" },
        { id: "sp2", pos: "SP", label: "Starter 2", hint: "EXAMPLE slot" },
        { id: "sp3", pos: "SP", label: "Starter 3", hint: "EXAMPLE slot" },
        { id: "sp4", pos: "SP", label: "Starter 4", hint: "EXAMPLE slot" },
        { id: "sp5", pos: "SP", label: "Starter 5", hint: "EXAMPLE slot" },
        { id: "rp1", pos: "RP", label: "Bullpen 1", hint: "EXAMPLE slot" },
        { id: "rp2", pos: "RP", label: "Bullpen 2", hint: "EXAMPLE slot" },
        { id: "rp3", pos: "RP", label: "Bullpen 3", hint: "EXAMPLE slot" },
        { id: "rp4", pos: "RP", label: "Bullpen 4", hint: "EXAMPLE slot" },
        { id: "cl", pos: "CL", label: "Closer", hint: "EXAMPLE slot" },
      ],
    },
    {
      group: "Infield (EXAMPLE)",
      slots: [
        { id: "1b", pos: "1B", label: "First base", hint: "EXAMPLE slot" },
        { id: "2b", pos: "2B", label: "Second base", hint: "EXAMPLE slot" },
        { id: "ss", pos: "SS", label: "Shortstop", hint: "EXAMPLE slot" },
        { id: "3b", pos: "3B", label: "Third base", hint: "EXAMPLE slot" },
        { id: "ut1", pos: "UTIL", label: "Utility IF", hint: "EXAMPLE slot" },
      ],
    },
    {
      group: "Outfield & DH (EXAMPLE)",
      slots: [
        { id: "lf", pos: "LF", label: "Left field", hint: "EXAMPLE slot" },
        { id: "cf", pos: "CF", label: "Center field", hint: "EXAMPLE slot" },
        { id: "rf", pos: "RF", label: "Right field", hint: "EXAMPLE slot" },
        { id: "of4", pos: "OF", label: "4th OF", hint: "EXAMPLE slot" },
        { id: "dh", pos: "DH", label: "Designated hitter", hint: "EXAMPLE slot" },
      ],
    },
  ];

  const BOARD_40_EXTRA = [
    {
      group: "40-man depth (EXAMPLE)",
      slots: [
        { id: "x1", pos: "MiLB", label: "Option depth 1", hint: "EXAMPLE — not a real assignment" },
        { id: "x2", pos: "MiLB", label: "Option depth 2", hint: "EXAMPLE — not a real assignment" },
        { id: "x3", pos: "MiLB", label: "Option depth 3", hint: "EXAMPLE — not a real assignment" },
        { id: "x4", pos: "MiLB", label: "Option depth 4", hint: "EXAMPLE — not a real assignment" },
        { id: "x5", pos: "NRI", label: "Camp invite idea", hint: "EXAMPLE placeholder" },
        { id: "x6", pos: "NRI", label: "Camp invite idea", hint: "EXAMPLE placeholder" },
        { id: "x7", pos: "RP", label: "Extra arm", hint: "EXAMPLE slot" },
        { id: "x8", pos: "IF", label: "Extra bat", hint: "EXAMPLE slot" },
      ],
    },
  ];

  /** Verified public franchise history only */
  const MEMORY = [
    {
      id: "ws66",
      cat: "titles",
      year: "1966",
      title: "World Series champions",
      body: "Baltimore swept the Dodgers for the franchise’s first World Series title in Charm City.",
    },
    {
      id: "ws70",
      cat: "titles",
      year: "1970",
      title: "World Series champions",
      body: "Orioles beat the Reds in five — Brooks Robinson’s Series defense became legend.",
    },
    {
      id: "ws83",
      cat: "titles",
      year: "1983",
      title: "World Series champions",
      body: "Third title: Orioles over the Phillies. Ripken era already underway; Dempsey Series MVP.",
    },
    {
      id: "cal",
      cat: "legends",
      year: "1995",
      title: "Cal Ripken Jr. — 2,132",
      body: "On Sept 6, 1995, Ripken passed Lou Gehrig’s consecutive-games mark at Camden Yards. He finished at 2,632.",
    },
    {
      id: "frank",
      cat: "legends",
      year: "1966",
      title: "Frank Robinson — Triple Crown",
      body: "In his first Orioles season, Frank Robinson won the AL Triple Crown and MVP en route to the 1966 title.",
    },
    {
      id: "brooks",
      cat: "legends",
      year: "Career",
      title: "Brooks Robinson — Mr. Hoover",
      body: "Hall of Fame third baseman; 16 Gold Gloves. Camden-area lore still centers his glove work.",
    },
    {
      id: "murray",
      cat: "legends",
      year: "Career",
      title: "Eddie Murray — Steady Eddie",
      body: "Switch-hitting first baseman / DH; Hall of Famer; cornerstone of late-70s / 80s clubs including 1983.",
    },
    {
      id: "palmer",
      cat: "legends",
      year: "Career",
      title: "Jim Palmer — Ace of the staff",
      body: "Three-time Cy Young winner; only pitcher with World Series wins in three decades (60s–80s).",
    },
    {
      id: "camden",
      cat: "park",
      year: "1992",
      title: "Oriole Park at Camden Yards opens",
      body: "Ballpark that redefined downtown parks — B&O Warehouse beyond right field, Eutaw Street concourse.",
    },
    {
      id: "warehouse",
      cat: "park",
      year: "Landmark",
      title: "B&O Warehouse",
      body: "The long brick warehouse frames RF — home-run balls that reach Eutaw Street are Camden folklore.",
    },
    {
      id: "bird",
      cat: "culture",
      year: "Culture",
      title: "Orange & black",
      body: "Club colors: Orioles orange (often cited near #DF4601), black, and white — night games glow orange.",
    },
    {
      id: "memorial",
      cat: "park",
      year: "1954–1991",
      title: "Memorial Stadium era",
      body: "Before Camden, the Orioles called Memorial Stadium home after the franchise moved from St. Louis (1954).",
    },
    {
      id: "alcs",
      cat: "titles",
      year: "1966–1983 peak",
      title: "AL powerhouse stretch",
      body: "Multiple pennants and three World Series titles bookend a sustained run of American League contention.",
    },
    {
      id: "weave",
      cat: "culture",
      year: "Tradition",
      title: "“O!” during the anthem",
      body: "Camden crowds famously shout “O!” in the national anthem — a local ritual for generations of fans.",
    },
  ];

  const DEFAULT_WISHES = [
    { id: "w1", text: "Catch an Opening Day vibe plan (tickets / TV)", done: false },
    { id: "w2", text: "Re-read a classic Orioles season book / doc", done: false },
    { id: "w3", text: "Walk Eutaw Street next time downtown", done: false },
    { id: "w4", text: "Teach Vic / Char one Camden lore story", done: false },
  ];

  const LINKS = [
    { title: "Baltimore Orioles — official site", url: "https://www.mlb.com/orioles" },
    { title: "Orioles schedule", url: "https://www.mlb.com/orioles/schedule" },
    { title: "Orioles tickets", url: "https://www.mlb.com/orioles/tickets" },
    { title: "Oriole Park at Camden Yards", url: "https://www.mlb.com/orioles/ballpark" },
    { title: "Orioles news (club)", url: "https://www.mlb.com/orioles/news" },
    { title: "MLB Hot Stove hub", url: "https://www.mlb.com/news/topic/hot-stove" },
  ];

  let boardMode = "26";
  let activeSlot = null;
  let memoryFilter = "all";

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch (_) {
      return fallback;
    }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (_) {}
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  /* ---- Tabs ---- */
  function showTab(id) {
    $all(".tab").forEach((t) => {
      const on = t.dataset.tab === id;
      t.classList.toggle("on", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    $all(".panel").forEach((p) => {
      const on = p.id === "panel-" + id;
      p.classList.toggle("on", on);
      if (on) p.removeAttribute("hidden");
      else p.setAttribute("hidden", "");
    });
    try { sessionStorage.setItem(LS_TAB, id); } catch (_) {}
  }

  /* ---- Fireplace / Camden particle canvas ---- */
  function initCanvas() {
    const c = $("#bg");
    if (!c) return;
    const ctx = c.getContext("2d");
    let w = 0, h = 0, raf = 0;
    const embers = [];
    const sparks = [];

    function resize() {
      w = c.width = window.innerWidth * devicePixelRatio;
      h = c.height = window.innerHeight * devicePixelRatio;
      c.style.width = window.innerWidth + "px";
      c.style.height = window.innerHeight + "px";
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function seed() {
      embers.length = 0;
      sparks.length = 0;
      const n = Math.min(90, Math.floor(window.innerWidth / 14));
      for (let i = 0; i < n; i++) {
        embers.push({
          x: Math.random() * window.innerWidth,
          y: window.innerHeight * (0.55 + Math.random() * 0.45),
          r: 1 + Math.random() * 2.8,
          vy: -(0.25 + Math.random() * 0.9),
          vx: (Math.random() - 0.5) * 0.35,
          a: 0.25 + Math.random() * 0.55,
          life: Math.random(),
        });
      }
      for (let i = 0; i < 40; i++) {
        sparks.push({
          x: window.innerWidth * (0.3 + Math.random() * 0.4),
          y: window.innerHeight * (0.78 + Math.random() * 0.18),
          r: 0.6 + Math.random() * 1.4,
          vy: -(0.8 + Math.random() * 1.6),
          vx: (Math.random() - 0.5) * 0.8,
          a: 0.5 + Math.random() * 0.5,
        });
      }
    }

    function drawSkyline(cw, ch) {
      ctx.save();
      ctx.fillStyle = "rgba(20, 12, 8, 0.55)";
      const base = ch * 0.72;
      // warehouse silhouette
      ctx.fillRect(cw * 0.08, base - 48, cw * 0.55, 48);
      for (let i = 0; i < 18; i++) {
        const wx = cw * 0.1 + i * (cw * 0.028);
        ctx.fillStyle = i % 3 === 0 ? "rgba(223,70,1,0.12)" : "rgba(0,0,0,0.35)";
        ctx.fillRect(wx, base - 42, cw * 0.012, 14);
      }
      // light standards
      ctx.strokeStyle = "rgba(223,70,1,0.25)";
      ctx.lineWidth = 2;
      [[0.72, 90], [0.82, 100], [0.92, 85]].forEach(([px, ht]) => {
        const x = cw * px;
        ctx.beginPath();
        ctx.moveTo(x, base);
        ctx.lineTo(x, base - ht);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, base - ht, 6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,106,26,0.35)";
        ctx.fill();
      });
      // field curve hint
      ctx.beginPath();
      ctx.strokeStyle = "rgba(223,70,1,0.15)";
      ctx.lineWidth = 2;
      ctx.moveTo(cw * 0.15, ch);
      ctx.quadraticCurveTo(cw * 0.5, base + 20, cw * 0.95, ch);
      ctx.stroke();
      ctx.restore();
    }

    function frame(t) {
      const cw = window.innerWidth, ch = window.innerHeight;
      ctx.clearRect(0, 0, cw, ch);
      // night void
      const g = ctx.createLinearGradient(0, 0, 0, ch);
      g.addColorStop(0, "#0c0806");
      g.addColorStop(0.55, "#080606");
      g.addColorStop(1, "#120806");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, cw, ch);

      // orange floodlight wash
      const wash = ctx.createRadialGradient(cw * 0.5, ch * 0.15, 20, cw * 0.5, ch * 0.2, cw * 0.55);
      wash.addColorStop(0, "rgba(223,70,1,0.16)");
      wash.addColorStop(1, "transparent");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, cw, ch);

      drawSkyline(cw, ch);

      // hearth glow at bottom
      const hearth = ctx.createRadialGradient(cw * 0.5, ch, 10, cw * 0.5, ch, cw * 0.4);
      hearth.addColorStop(0, "rgba(255,106,26,0.22)");
      hearth.addColorStop(0.45, "rgba(223,70,1,0.08)");
      hearth.addColorStop(1, "transparent");
      ctx.fillStyle = hearth;
      ctx.fillRect(0, ch * 0.5, cw, ch * 0.5);

      embers.forEach((e) => {
        e.y += e.vy;
        e.x += e.vx + Math.sin((t * 0.001 + e.life) * 2) * 0.15;
        e.life += 0.004;
        if (e.y < ch * 0.2 || e.a < 0.05) {
          e.y = ch * (0.75 + Math.random() * 0.25);
          e.x = Math.random() * cw;
          e.a = 0.25 + Math.random() * 0.55;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, ${120 + Math.floor(e.a * 80)}, 40, ${e.a})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });

      sparks.forEach((s) => {
        s.y += s.vy;
        s.x += s.vx;
        s.a -= 0.006;
        if (s.a <= 0 || s.y < ch * 0.4) {
          s.x = cw * (0.3 + Math.random() * 0.4);
          s.y = ch * (0.82 + Math.random() * 0.14);
          s.a = 0.5 + Math.random() * 0.5;
          s.vy = -(0.8 + Math.random() * 1.6);
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 200, 120, ${Math.max(0, s.a)})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(frame);
    }

    resize();
    seed();
    window.addEventListener("resize", () => { resize(); seed(); });
    raf = requestAnimationFrame(frame);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(frame);
    });
  }

  /* ---- Home rumors ---- */
  function renderRumors() {
    const row = $("#rumorRow");
    row.innerHTML = EXAMPLE_RUMORS.map(
      (r) =>
        `<article class="rumor"><span class="tag">EXAMPLE</span><h4>${escapeHtml(r.title)}</h4><p>${escapeHtml(r.body)}</p></article>`
    ).join("");
  }

  /* ---- Timeline ---- */
  function renderTimeline() {
    const ol = $("#timeline");
    ol.innerHTML = TIMELINE.map(
      (m, i) =>
        `<li class="tl-item${i === 0 ? " on" : ""}" data-id="${m.id}" role="listitem" tabindex="0">
          <span class="tl-dot" aria-hidden="true">${m.icon}</span>
          <div class="tl-main">
            <div class="tl-when">${escapeHtml(m.when)}</div>
            <div class="tl-name">${escapeHtml(m.name)}</div>
            <p class="tl-blurb">${escapeHtml(m.blurb)}</p>
          </div>
        </li>`
    ).join("");
    ol.addEventListener("click", (e) => {
      const item = e.target.closest(".tl-item");
      if (!item) return;
      selectTimeline(item.dataset.id);
    });
    ol.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const item = e.target.closest(".tl-item");
      if (!item) return;
      e.preventDefault();
      selectTimeline(item.dataset.id);
    });
    selectTimeline(TIMELINE[0].id);
  }

  function selectTimeline(id) {
    const m = TIMELINE.find((x) => x.id === id);
    if (!m) return;
    $all(".tl-item").forEach((el) => el.classList.toggle("on", el.dataset.id === id));
    $("#tlTitle").textContent = m.name;
    $("#tlBody").innerHTML =
      `<p>${escapeHtml(m.detail)}</p><p class="muted" style="margin-top:.65rem"><b>Window:</b> ${escapeHtml(m.when)}</p><ul>${m.bullets
        .map((b) => `<li>${escapeHtml(b)}</li>`)
        .join("")}</ul>`;
  }

  /* ---- Roster ---- */
  function getBoard() {
    return boardMode === "40" ? BOARD_26.concat(BOARD_40_EXTRA) : BOARD_26;
  }

  function renderBoard() {
    const watches = loadJSON(LS_WATCH, {});
    const board = $("#rosterBoard");
    board.innerHTML = getBoard()
      .map((g) => {
        const slots = g.slots
          .map((s) => {
            const note = watches[s.id];
            const watched = !!(note && String(note).trim());
            return `<button type="button" class="slot${watched ? " watched" : ""}" data-slot="${s.id}" data-label="${escapeAttr(s.label)}" data-pos="${escapeAttr(s.pos)}">
              <span class="pos">${escapeHtml(s.pos)}</span>
              <span class="label">${escapeHtml(s.label)}</span>
              <span class="hint">${escapeHtml(s.hint)}</span>
              ${watched ? '<span class="pin">📌 watch pinned</span>' : ""}
            </button>`;
          })
          .join("");
        return `<div class="group"><h3>${escapeHtml(g.group)}</h3><div class="slots">${slots}</div></div>`;
      })
      .join("");
  }

  function openWatch(slotId, label, pos) {
    activeSlot = slotId;
    const watches = loadJSON(LS_WATCH, {});
    $("#watchDrawer").hidden = false;
    $("#watchTitle").textContent = `Watch · ${label}`;
    $("#watchSlotMeta").textContent = `${pos} · EXAMPLE slot · private note only`;
    $("#watchText").value = watches[slotId] || "";
    $("#watchText").focus();
  }

  function saveWatch() {
    if (!activeSlot) return;
    const watches = loadJSON(LS_WATCH, {});
    const text = $("#watchText").value.trim();
    if (text) watches[activeSlot] = text;
    else delete watches[activeSlot];
    saveJSON(LS_WATCH, watches);
    renderBoard();
    toast(text ? "Watch note saved" : "Watch cleared");
  }

  /* ---- Memory ---- */
  function renderMemory() {
    const grid = $("#memoryGrid");
    const items = MEMORY.filter((m) => memoryFilter === "all" || m.cat === memoryFilter);
    grid.innerHTML = items
      .map(
        (m) =>
          `<article class="mem" data-cat="${m.cat}">
            <div class="yr">${escapeHtml(m.year)}</div>
            <h3>${escapeHtml(m.title)}</h3>
            <p>${escapeHtml(m.body)}</p>
            <span class="cat">${escapeHtml(m.cat)}</span>
          </article>`
      )
      .join("");
  }

  /* ---- Fan desk ---- */
  function renderWishlist() {
    let wishes = loadJSON(LS_WISH, null);
    if (!wishes) {
      wishes = DEFAULT_WISHES.map((w) => ({ ...w }));
      saveJSON(LS_WISH, wishes);
    }
    const ul = $("#wishlist");
    ul.innerHTML = wishes
      .map(
        (w) =>
          `<li class="${w.done ? "done" : ""}" data-id="${w.id}">
            <input type="checkbox" id="wish-${w.id}" ${w.done ? "checked" : ""} aria-label="Toggle wish">
            <label for="wish-${w.id}">${escapeHtml(w.text)}</label>
            <button type="button" class="rm" data-rm="${w.id}" title="Remove">✕</button>
          </li>`
      )
      .join("");
  }

  function renderLinks() {
    $("#linkList").innerHTML = LINKS.map(
      (l) =>
        `<li><a href="${escapeAttr(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.title)}</a><span class="url">${escapeHtml(l.url)}</span></li>`
    ).join("");
  }

  function loadNotes() {
    try {
      const raw = localStorage.getItem(LS_NOTES);
      $("#fanNotes").value = raw != null ? raw : "";
    } catch (_) {
      $("#fanNotes").value = "";
    }
  }

  function saveNotes() {
    try {
      localStorage.setItem(LS_NOTES, $("#fanNotes").value);
      $("#notesSaved").textContent = "Saved " + new Date().toLocaleTimeString();
      toast("Notes saved");
    } catch (_) {
      toast("Could not save notes");
    }
  }

  /* ---- Clock ---- */
  function tickClock() {
    const el = $("#clock");
    if (!el) return;
    const d = new Date();
    el.textContent = d.toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
  }

  /* ---- Escaping ---- */
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  /* ---- Wire ---- */
  function bind() {
    $all(".tab").forEach((t) =>
      t.addEventListener("click", () => showTab(t.dataset.tab))
    );
    $all("[data-goto]").forEach((b) =>
      b.addEventListener("click", () => showTab(b.dataset.goto))
    );
    $("#btnWall").addEventListener("click", () => {
      document.body.classList.toggle("wall");
      toast(document.body.classList.contains("wall") ? "Wall mode on" : "Wall mode off");
    });
    $("#btnHelp").addEventListener("click", () => $("#helpDlg").showModal());

    $all(".seg-btn").forEach((b) =>
      b.addEventListener("click", () => {
        boardMode = b.dataset.board;
        $all(".seg-btn").forEach((x) => x.classList.toggle("on", x === b));
        renderBoard();
      })
    );
    $("#rosterBoard").addEventListener("click", (e) => {
      const slot = e.target.closest(".slot");
      if (!slot) return;
      openWatch(slot.dataset.slot, slot.dataset.label, slot.dataset.pos);
    });
    $("#btnSaveWatch").addEventListener("click", saveWatch);
    $("#btnCancelWatch").addEventListener("click", () => {
      $("#watchDrawer").hidden = true;
      activeSlot = null;
    });
    $("#btnClearWatches").addEventListener("click", () => {
      saveJSON(LS_WATCH, {});
      renderBoard();
      $("#watchDrawer").hidden = true;
      toast("All watches cleared");
    });

    $("#memoryFilters").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      memoryFilter = chip.dataset.filter;
      $all("#memoryFilters .chip").forEach((c) => c.classList.toggle("on", c === chip));
      renderMemory();
    });

    $("#wishlist").addEventListener("change", (e) => {
      if (e.target.type !== "checkbox") return;
      const li = e.target.closest("li");
      const wishes = loadJSON(LS_WISH, []);
      const w = wishes.find((x) => x.id === li.dataset.id);
      if (w) {
        w.done = e.target.checked;
        saveJSON(LS_WISH, wishes);
        li.classList.toggle("done", w.done);
      }
    });
    $("#wishlist").addEventListener("click", (e) => {
      const rm = e.target.closest("[data-rm]");
      if (!rm) return;
      let wishes = loadJSON(LS_WISH, []);
      wishes = wishes.filter((x) => x.id !== rm.dataset.rm);
      saveJSON(LS_WISH, wishes);
      renderWishlist();
    });
    $("#btnAddWish").addEventListener("click", () => {
      const input = $("#wishInput");
      const text = input.value.trim();
      if (!text) return;
      const wishes = loadJSON(LS_WISH, []);
      wishes.push({ id: "w" + Date.now(), text, done: false });
      saveJSON(LS_WISH, wishes);
      input.value = "";
      renderWishlist();
      toast("Wish added");
    });
    $("#wishInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("#btnAddWish").click();
    });
    $("#btnSaveNotes").addEventListener("click", saveNotes);
  }

  function init() {
    bind();
    renderRumors();
    renderTimeline();
    renderBoard();
    renderMemory();
    renderWishlist();
    renderLinks();
    loadNotes();
    initCanvas();
    tickClock();
    setInterval(tickClock, 30000);
    let tab = "home";
    try { tab = sessionStorage.getItem(LS_TAB) || "home"; } catch (_) {}
    showTab(tab);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
